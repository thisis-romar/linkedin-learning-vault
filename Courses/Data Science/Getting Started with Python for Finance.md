---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: getting-started-with-python-for-finance
url: "https://www.linkedin.com/learning/getting-started-with-python-for-finance"
duration_minutes: 99
duration: 1h 39m
level: Beginner
updated: 4/6/2023
learners: 62992
skills:
  - Python (Programming Language)
  - Financial Analysis
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFpJhiRgrFxPw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1680625258153?e=2147483647&amp;v=beta&amp;t=ZFBVr4bXqEoUZrHlbmKIJb71FFUT1k2mr2px40ArJj4"
linkedin_topic: Data Science
learning_paths:
  - '[[CFI Financial Analysis and Modeling Professional Certificate]]'
  - '[[Python for Data Professionals in Finance]]'
prev_courses:
  - '[[SQL for Finance Professionals]]'
  - null
next_courses:
  - '[[Using Data in Financial Analysis]]'
  - '[[Python in Excel for Financial Professionals]]'
path_nav: '[{"path":"CFI Financial Analysis and Modeling Professional Certificate","position":5,"total":7,"prev":"SQL for Finance Professionals","next":"Using Data in Financial Analysis"},{"path":"Python for Data Professionals in Finance","position":1,"total":5,"prev":null,"next":"Python in Excel for Financial Professionals"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
  - skill/financial-analysis
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Getting%20Started%20with%20Python%20for%20Finance.md)

![Getting Started with Python for Finance](https://media.licdn.com/dms/image/v2/D560DAQFpJhiRgrFxPw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1680625258153?e=2147483647&amp;v=beta&amp;t=ZFBVr4bXqEoUZrHlbmKIJb71FFUT1k2mr2px40ArJj4)

# Getting Started with Python for Finance

> Python has quickly become one of the most popular and widely used programming languages in the world. And if you work in finance and analyze the stock market or other financial instruments, you need to stay up to date with the most important analytic tools. Join instructor Matt Harrison to get up and running with Python, in this course designed uniquely for financial analysis.Learn how to implemen

> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-python-for-finance) | 1h 39m | Beginner | 63K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Introduction](#introduction)
  - [What you should know](#what-you-should-know)
- [**1. Loading Data and Visualizations**](#1-loading-data-and-visualizations) (6 videos)
  - [Loading data](#loading-data)
  - [Line plots](#line-plots)
  - [Resampling data](#resampling-data)
  - [Candlestick plot from scratch](#candlestick-plot-from-scratch)
  - [Challenge: Candlestick plot for 2019](#challenge-candlestick-plot-for-2019)
  - [Solution: Candlestick plot for 2019](#solution-candlestick-plot-for-2019)
- [**2. Calculations**](#2-calculations) (6 videos)
  - [Returns](#returns)
  - [Plotting returns](#plotting-returns)
  - [Cumulative returns](#cumulative-returns)
  - [Volatility](#volatility)
  - [Challenge: Plotting 30-day volatility](#challenge-plotting-30-day-volatility)
  - [Solution: Plotting 30-day volatility](#solution-plotting-30-day-volatility)
- [**3. Rolling Windows**](#3-rolling-windows) (4 videos)
  - [Creating moving averages](#creating-moving-averages)
  - [Plotting moving averages](#plotting-moving-averages)
  - [Challenge: Exponential moving average](#challenge-exponential-moving-average)
  - [Solution: Exponential moving average](#solution-exponential-moving-average)
- [**4. Technical Analysis**](#4-technical-analysis) (5 videos)
  - [OBV](#obv)
  - [Accumulation/distribution indicator](#accumulationdistribution-indicator)
  - [Challenge: RSI](#challenge-rsi)
  - [Basic solution: RSI](#basic-solution-rsi)
  - [Optimized solution: RSI](#optimized-solution-rsi)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/getting-started-with-python-for-finance/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/introduction?u=76281980&t=0)** - Are you ready to supercharge your [[Financial Analysis]] skills and take your career to the next level? Join us for this exciting [[Python (Programming Language)|Python]] for Finance course. You'll learn how to harness the power of Python and [[Pandas (Software)|Pandas]] to transform [[Financial Data]] into valuable insights. We'll cover everything from loading data, manipulating data for technical analysis, and advanced visualization techniques. You'll also learn how to optimize your code for maximum performance so you can analyze even the largest data sets quickly and efficiently. I'm Matt Harrison, a corporate trainer and author. I've written multiple books on Python and [[Data Science]] and help thousands learn them. If you're ready, let's start.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Financial Analysis]] (1), [[Pandas (Software)|Pandas]] (1), [[Financial Data]] (1), [[Data Science]] (1)
> **CLI Commands:** python (3)
> **Speakers:** - are (1)

#### [What you should know](https://www.linkedin.com/learning/getting-started-with-python-for-finance/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/what-you-should-know?u=76281980&t=0)** - [Narrator] Before starting this [[Python (Programming Language)|Python]] for Finance course there are a few things you should know to get the most out of the content. First, it's important to have a basic understanding of Python. You don't need to be an expert, but you should be familiar with basic [[Programming Concepts]] such as variables, loops, and functions. Second, experience with Jupyter Notebooks will be helpful. Jupyter is a web-based interactive computing environment that allows you to create and share code, visualizations, and other content in a single document. Lastly, some knowledge of [[Microsoft Excel|Excel]] formulas will be helpful, as many financial analysts use Excel as their primary tool. While we won't be using Excel directly in this course, understanding basic formulas like sum, average and if will help convert existing Excel functions to Python. Armed with these skills, you'll be well equipped to dive into this Python for Finance course and get the most out of the content. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Microsoft Excel|Excel]] (4), [[Programming Concepts]] (1)
> **CLI Commands:** python (4)
> **Tools:** jupyter (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. Loading Data and Visualizations

[↑ Back to Table of Contents](#table-of-contents)

#### [Loading data](https://www.linkedin.com/learning/getting-started-with-python-for-finance/loading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/loading-data?u=76281980&t=0)** - [Instructor] And this first lesson, we are going to load our data. Let's get started. I'm going to run this cell here. This will do our imports. Let me just go over what these imports are doing. This first import here is loading the dates library from the map plot lib library. We're going to use that later on. We're also importing the pie plot library. This is the general map plot lib plotting library that's used all over the place. We are aliasing that as plt. That's what the as plt does, is make an alias. So when you see plt, it refers to that library. We're also aliasing the NumPy library as NP. We're aliasing the [[Pandas (Software)|Pandas]] library as pd and we're aliasing the Y Finance library as YF. People ask whether they should use aliasing. It's not a requirement to do that but I recommend doing it for NumPy and Pandas because those are common conventions that are used all over the place. Okay, let's go to the next cell here which is going to load our data. We're using the Y finance library to download the S&P 500 data and the Apple data from the decade 2010 through the end of 2019. Looks like that worked successfully. Let's inspect the result of that. The result of that is a Pandas data frame. Let's look at this pandas data frame a little bit and see what we can see here. On the left where it says date here, that is the index.
>
> **[1:33](https://www.linkedin.com/learning/getting-started-with-python-for-finance/loading-data?u=76281980&t=93)** Now, normally in a Pandas data frame the index is a numeric value, but in this case the Y finance library is sticking in the date. So this is daily information. Each row represents a single day. Also look at the columns. We have what are called hierarchical or multi-index columns here. So you can see for the adjusted close values because we are asking for both apple and S&P 500 we have two sub columns below that and you can see this repeats for each of the values that we ask for the adjusted close, the close, the high value the low value, the open value, and the volume. At the bottom here, you can see that there's 2,515 rows and you can see that Pandas inside of Jupyter is only showing the first five rows, and we see in ellipses here and then showing the last five rows. So it looks like we have our data. We should be able to start doing some processing on that. Again, I'm going to show you those columns, and if you inspect the columns attribute of the data frame you'll see that it says it's a multi-index, and then we have a tuple. So the first entry in the tuple, for example this adjusted close is the outer column. And this Apple here is the inner column. You can see that this outer column repeats for Apple and the S&P 500. Okay, I'm going to be showing throughout this course the pipe method a lot. So I want you to be aware of that.
>
> **[3:07](https://www.linkedin.com/learning/getting-started-with-python-for-finance/loading-data?u=76281980&t=187)** And because we are in Jupyter we can do something that's pretty cool. This is something that I recommend that most people do when they're using Jupyter, is if you put a question mark after a method or a function Jupyter will pull up the documentation for you. So I'm going to run this. Let me pull that up so you can see that. Remember that question mark has not valid [[Python (Programming Language)|Python]] code. This is code that is specific to the I Python tooling that Jupyter is using. Or if you're use Jupyter lab or if you're using other tools like CoLab you can use this syntax and it will pulp the documentation. Down at the bottom here you see this little window that it pulled up. This is the documentation for the pipe method. You can see that it says it applies chainable functions that expects series or data frames. So why do I use the pipe method? I like to chain my code because I'm a firm believer that if you chain your Pandas code it will make it easier to understand and it will read like a recipe. Sometimes it's hard to chain things because they're either complicated or maybe there's not a method existing that allows us to do something in a chain, and that's where pipe comes in hand. It allows us to stick arbitrary logic into a function. We pass that function into the first parameter of the pipe column. As you can see in this next example here I've got a pipe call and I'm passing in a function called fixed columns into it. And what this is going to do is it's going to take in my data frame as the first parameter. You can see up here it says DF is the first parameter and it returns a data frame. So I can keep
>
> **[4:40](https://www.linkedin.com/learning/getting-started-with-python-for-finance/loading-data?u=76281980&t=280)** on doing other operations after this pipe call. But in the meantime, before it returns that data frame this is going to say, let's pull off the columns right here. And then it's going to use a list comprehension to just use the first entry for each tuple in that multi-index and then it's going to set the columns to that. Let's run that and see what happens when we run that. And you can see that at this point we have pulled out all the Apple values from our data. Why did I use pipe here? I use pipe because there isn't really a way to access the columns and reset the columns using a method in Pandas. But I can make my own function fix calls that does that. This final example of this lesson I'm showing an example of a function that I like to make. It's called a tweak function. And what I like to use this for is to load my data. You can see that this tweak function called tweak data the first thing that is doing is loading the data and then it's returning the chain that cleans it up a little bit. We can run this and look at the result of it. It's going to load the data and give us the Apple data from that. Why do I like to have a tweak function? I like it because all of my logic is inside of a single function. The other reason I like it is I can take this function or this cell that I have here and move it up to the top of my notebook. So the next time I come to my notebook I can clean up my data and I can see all the steps that I use to clean up my data. This makes it really easy to rerun your code
>
> **[6:15](https://www.linkedin.com/learning/getting-started-with-python-for-finance/loading-data?u=76281980&t=375)** and come to it the next day or in a month or in a week. I just need to run this tweak function and I'm good to go. So in this lesson we've shown loading the data, we've shown inspecting it and we've shown using the pipe method and a function to help us clean up the data and prep the data for further exploration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (8), [[Python (Programming Language)|Python]] (2)
> **Tools:** jupyter (6), colab (1)
> **CLI Commands:** make (4), python (2)
> **Documentation:** the documentation (3)
> **Definitions:** is a  (2), refers to (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)
> **Analogies:** for example (1)

#### [Line plots](https://www.linkedin.com/learning/getting-started-with-python-for-finance/line-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/line-plots?u=76281980&t=0)** - [Instructor] In this lesson, we're going to discover line plots, and how to create them with [[Pandas (Software)|pandas]]. My preferred mechanism of making plots is generally to use pandas, I find it a little bit easier than using Matplotlib. One of the nice things about pandas is that it's built on top of Matplotlib, so if you need to go in and customize after, you can do that. Okay, so let's look at our data again. We have our apple data here, and we've got the Adjusted Close, the Close, the High, the Low, and the Open. And the key thing to note is that if you are plotting in pandas, what we're going to plot, if you call the plot method, is the index which is in this case, this date index along the X axis, and then each column will be its own line. All we have to do is tack on a plot method to this. Let's try this, and look and see what happens. You can see, again, we have the date in the index, and then each of those columns as its own line. Is this the world's greatest plot? Probably not. But a nice thing about pandas is it makes it really easy to plot if you've got your data in this tabular format, and you've got the X axis in the index. Let's just pull off the Close column and plot that. So, here I've got a little chain of operations to do that, and I'm actually going to comment this out, and help you step through this. Again, I do like to write these chains, because I find that they make it really easy to understand what's going on here.
>
> **[1:35](https://www.linkedin.com/learning/getting-started-with-python-for-finance/line-plots?u=76281980&t=95)** So, let's just walk through this chain. Here's our raw data, and then we're going to use iloc here, iloc is a selector that selects rows and columns based on index position. So, in this case, the first colon here is the row selector, this is a slice that means take every row, and then we have the column selector over here, this is also a slice, this is including the stride, which is that second item there, which is two. What that means is we're going to take from the first column to the last, but we're going to take every other column. So, this will take this Adjusted Close column, just the apple one, it's going to skip the SPY, and then take the Close from apple, and then take the High from apple. Let's run that, and just validate that it does that. There we go. And it's still hierarchical, or nested, the columns are, so we're going to pipe in our fixed columns to fix that, and you can see that that gets rid of that outer column. Now we're going to pull off the Close column, and when we do that, we get a pandas series, and at this point we're going to call plot on that. This is only a single column, and so when we plot this, it will be a single line. There we go. Because this is Matplotlib, we can change this if we want to. In this next example, I'm going to show pulling off the Volume column instead of the Close column, and I'm also going to pass in an option in the plot to change what's called the figsize. You can see we're saying figsize is equal to the tuple 10 by 2. This is going to make our plot
>
> **[3:07](https://www.linkedin.com/learning/getting-started-with-python-for-finance/line-plots?u=76281980&t=187)** 10 inches wide and 2 inches tall. In this lesson, we looked at how to create line plots using pandas. Again, the key thing to remember is that we want to have the X axis in the index, and then any column that we want to plot will be plotted as a line plot when we call plot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (7)
> **CLI Commands:** find (2), make (2)
> **Definitions:** is a  (2)
> **Env Vars:** spy (1)
> **Speakers:** - [instructor] (1)

#### [Resampling data](https://www.linkedin.com/learning/getting-started-with-python-for-finance/resampling-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/resampling-data?u=76281980&t=0)** - [Instructor] In this lesson, we're going to explore resampling our data. Resampling means taking our data from one granularity to a different granularity. In our case, we have data that has the daily granularity and we might want to change that to monthly or quarterly or yearly. [[Pandas (Software)|Pandas]] makes it really easy to do this when you have information that is converted into a date. And the yfinance library gave us date information. So in our last lesson, we looked at making this plot here. This is the close value of Apple on a daily basis for 2010 through 2020. Now, if we look at the data, what we see is this is a series. A series is like a column from a pandas data frame. In the index, here is the date and in the values, that's what we see over here on the right-hand side, those are the close values. Now, if you look at each row here, each row is a single daily value. Let's assume that instead of wanting to have the daily value, that we want to have the monthly value. How could we do that? Well, we're going to do that with pandas. And again, this is relatively easy. I'm going to comment these out so we can walk through what's going on here and you'll see how this works. So I'm taking every other column to get my Apple data. I'm going to call my fixed columns method,
>
> **[1:34](https://www.linkedin.com/learning/getting-started-with-python-for-finance/resampling-data?u=76281980&t=94)** pipe that in there to collapse my hierarchical columns and then I'm going to call resample. Now, what I'm passing in here, this M is what we call an offset alias. And what an offset alias is is it's a string that indicates to pandas how we want to aggregate this. In this case, the M represents month. We want to aggregate this at the month level. Let's run this. When we run this, it doesn't actually do anything. We get back this date/time index resampler object. It has not done anything because it wants us to be able to aggregate something and we're going to aggregate at the month level. I'm going to try and pull off the close column from this and let's run this now, and it still hasn't done anything but you may notice that this is now a series group by object because close is a single column from our data frame. So now we have a series group by object, but it still hasn't done anything. In order to make it do something, we need to call an aggregation method. In this case, what I'm going to do is I'm going to tack on mean here. Let's run this. And what we see, if you look at the index now, every index entry is the last day of a month. And then over here, the values are the average or the mean close values for each of those months. This is really cool because Pandas allows us to do things like this where we say I want the average for every two months and you just put a two in front of that. And if you look over here at the dates, you can see that this starts in January. The next one is two months later.
>
> **[3:08](https://www.linkedin.com/learning/getting-started-with-python-for-finance/resampling-data?u=76281980&t=188)** This is very convenient. If I want the quarterly values, I can replace that M with a Q and I can get the quarterly values. Let's put it back to M. And now once you have the data in this form, it's really easy to plot because we have the date in the index and we have the value in a column. We can just tack on a plot there and we'll get a line plot. Here is our monthly close values for Apple from 2010 to 2020.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (5)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Candlestick plot from scratch](https://www.linkedin.com/learning/getting-started-with-python-for-finance/candlestick-plot-from-scratch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/candlestick-plot-from-scratch?u=76281980&t=0)** - [Instructor] In this lesson, I'm going to show how to make a candlestick plot using Panda as a Matplotlib. At the bottom of this cell, you can see I've got a chain, here, and let's just walk through what this chain is doing. Again, I do like using this chain functionality because it lets me see what's going on, here. So here is our raw data. What we're going to do is we're going to take every other column. That's what this ILOC is doing. It's going to take the apple columns, here. Then we're going to pass in the fixed columns. That collapses those multi-index into a single value. Then I'm going to do resample. Again, resample works because we have a date in the index. Now, I'm using resample D here. And this might not be required to do a resample D because this is already at the daily level. But if I wanted to change this to the month level I could just replace that D with an M, or I could do a W for the week level, or I could do a Q for the quarterly level, or a Y for the yearly level. So again, this is super convenient if we've got the date in the index, there, to use resampling to aggregate these values at different intervals. If I run this, it's not going to do anything because it's going to give me that date, time, resampler object. To get this to evaluate to something, I'm going to use the ag method. In the previous example, I showed you could tack on a mean to do an aggregation.
>
> **[1:32](https://www.linkedin.com/learning/getting-started-with-python-for-finance/candlestick-plot-from-scratch?u=76281980&t=92)** This is a little bit more involved. What I'm saying here is we're going to call the ag method and we're going to pass into the ag method a dictionary. The dictionary is going to map the column to the aggregation we want to do. So you can see for the open column, we want to do the first aggregation. What that means is if we are resampling at the month level this open entry will be the first entry of the month. For the high column, we want to take the maximum value. Again, because our data is at the daily level. But if we were at the month level, this would take the maximum of the month. For low, the low column, we're going to take the minimum value; and for the close, we're going to take the last value. This might not look like much but this is actually really powerful, that in one line of code we can do all these different aggregations to these different columns. Let's run that and see what the output looks like. There's our output. Again, if I want to change this to a month, I can just put a M there. And you can see in the index over here, we have the end of each month. 'Kay, the next thing I'm going to do is use LOC. So LOC selects data based on name. ILOC selects data based on position. In this case, we have a row selector here, and we're saying we want to go from January 2018 to June 2018. This is another nice feature of [[Pandas (Software)|Pandas]].
>
> **[3:05](https://www.linkedin.com/learning/getting-started-with-python-for-finance/candlestick-plot-from-scratch?u=76281980&t=185)** Once you have a date in the index you can use the strings that represent dates or partial dates, and you can slice based on those. So you can see that this is going from January 2018 to the end of June for 2018. Okay, and the final step in our chain is to call pipe. Remember we said that pipe is a method that we pass in a function. In this case, the function that we're going to pass in is this plot candle function. And the plot candle function just takes a data frame and you can see that it returns a data frame at the end. But inside of here, we've got a bunch of Matplotlib code. Turns out that Pandas in and of itself is not able to plot what's called a candlestick plot, but Matplotlib can. So I'm passing in the plot candle function here. I'm also passing in this ax which is a Matplotlib axes. You can see up here that I created that by calling subplots from the Matplotlib library. And axes is a graph. So we're passing in this graph where we want it to occur. And then, let me just go over what the lines are in here. In this case, the graph knows how to make a vertical line and this's going to be what's called the wick in a candlestick plot. We are saying at the X level, which is at the date, plot those dates along the x-axis. And then we want a vertical line. The Y-minimum value is the low column, and the Y max is the high column. And we're going to do that in black with a line length of one. And then, candlesticks have a color.
>
> **[4:40](https://www.linkedin.com/learning/getting-started-with-python-for-finance/candlestick-plot-from-scratch?u=76281980&t=280)** Generally they are red if the value decreased during that interval. And so I'm doing some Pandas, here, to say, "Let's pull off what is red." I'm going to query where the open is greater than the close. So the value went down during that time. And with that, I'm going to do another vertical line. And in this case, instead of using DF I'm going to use the red data frame that I just filtered, there. So x is going to be the dates, y min is going to be the close, and y max is going to be the open. We're going to color that red, and we're going to make it a little bit wider. The name of candlestick, meaning that you've got a wide candle with a teeny wick sticking out. And then the green is if it's increasing, that's just the opposite of red. So our query's the opposite. If the open is less than close, if the value rose, and then we're going to do a vertical line. And the color of that is going to be green. The last three lines, here, are setting the X-axes. We're saying put a month locator as the major locator, that will mark the months. And then the formatter is going to be this date formatter, which is %b-%y. And that will put the month followed by the year in there. And we're also going to put in a minor locator. It turns out Matplotlib can do a major locator and a minor locator, which is a tick that's a little bit smaller than the major tick. Let's run that, and we don't see anything initially because this chain, here, returns this data frame. So it's showing the data frame as it returns. But if you scroll down a little bit
>
> **[6:13](https://www.linkedin.com/learning/getting-started-with-python-for-finance/candlestick-plot-from-scratch?u=76281980&t=373)** you can actually see the plot down here below. Because we are doing this inside of Jupyter, Jupyter will output the plot. And here is our candlestick plot. In this lesson, we showed a more complicated example of a plot and we showed how we can leverage that pipe method to make complicated plots.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (3)
> **Definitions:** is a  (5)
> **CLI Commands:** make (4)
> **Env Vars:** iloc (2), loc (2)
> **Tools:** jupyter (2)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Candlestick plot for 2019](https://www.linkedin.com/learning/getting-started-with-python-for-finance/challenge-candlestick-plot-for-2019?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/challenge-candlestick-plot-for-2019?u=76281980&t=0)** - [Instructor] Okay, now we're ready for our first challenge. I strongly recommend that you do the challenges. You're going to learn a lot more in this course if you get your keyboard out and participate. So your challenge is to plot the candlestick plot for the time period of September, 2019 to December, 2019. If you scroll up to our last example here, you can see that this went from January, 2018 to July. So see if you can make that plot go from September to December of 2019. Good luck with the challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Candlestick plot for 2019](https://www.linkedin.com/learning/getting-started-with-python-for-finance/solution-candlestick-plot-for-2019?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/solution-candlestick-plot-for-2019?u=76281980&t=0)** - [Instructor] Okay, I'm going to demo how to solve this challenge. Again, if you haven't done the challenge, please pause this and don't watch it. Go do the challenge and then come back and watch this and see how I did it. So, I'm a lazy programmer so what I'm going to do is, I'm actually going to come up here to my previous chain and I'm just going to copy this, and I think that's perfectly fine. I think you should be more than willing to take code that works and reuse it. Okay, so here is our code. So this outputs January 2018 through June of 2018, and it's not even showing our candle here. So, why isn't it showing our candle? The issue is that we are passing in the access for it to plot on and that was already created and so, Jupiter doesn't create a new access and stick it in here. So, we're actually going to have to come up here and copy another piece of code too. We can leave that function there, we don't need the function if it's already been defined, and we'll copy that code where we create the access and let's try this again. Okay, and so there is our plot. Again, it's not going to the right date so we're going to have to adjust that a little bit. I'm going to come in here and I'm going to comment that out and I'm going to comment that out. And here, we see that we've got from 2010 to 2019. So, I want to filter that to go from September to December and so, I'm going to use LOC.
>
> **[1:32](https://www.linkedin.com/learning/getting-started-with-python-for-finance/solution-candlestick-plot-for-2019?u=76281980&t=92)** Remember LOC will do filtering based on the row index and the column names. And in this case, we wanted to go from September 2019, and we want to go through December of 2019. I believe we can just put a 2019 there by itself and that should go to the end of the year. And, let's just try it out and check that it works. It looks like that did work. So, one of the nice things about using this chaining like this, is I can come in here, comment something out, replace it, and then use Jupiter to get quick feedback and see if that does work. Now, our plot here is showing up, but it's showing up empty. Why is that? That's because we create the plot here, but we don't actually call the plot candle function. So, let's un-comment this pipe and see if we can get that to work. And, that looks like that works. So, this is going from September to the end of December. Okay, in this challenge you should have been able to make a candlestick plot and one of the key things to realize is that we can reuse that code and then we can use our chain to inspect what our data looks like, make sure we are getting the right data, and then use LOC to specify the correct dates before doing our plot.

> [!info]- Semantic Content
>
> **Env Vars:** loc (3)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Calculations

[↑ Back to Table of Contents](#table-of-contents)

#### [Returns](https://www.linkedin.com/learning/getting-started-with-python-for-finance/returns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/returns?u=76281980&t=0)** - [Instructor] In this lesson, we're going to look at calculating returns using [[Pandas (Software)|Pandas]]. Let's load up our AAPL data. In this case, I'm going to make a variable called AAPL that has the APPL data in it, so I don't have to keep calling the fixed calls function there. And let's calculate the returns. So, to calculate the returns, it's actually easy, in Pandas. All we have to do is execute this method called percent change. Let's just explore this. If we look at the close value here, the percent change says 0.007. And what's going on there is, we are taking this value here and we are dividing it by the previous value. That's what the percent change is. You can see that this January 5th value for the close is slightly higher. So that is a small growth there. You can see that the January 6th value is below the January 5th value, and so, we have a negative percent change there. That is how returns are calculated. And this is relatively easy in Pandas. Pandas does not have everything built into it, but it does have some 400 different attributes that you can use to perform various operations. And so, percent change is one of those that comes in really handy here. Again, if you want to get the documentation for how this works, we can come over here and we can say, PCT, change, and put a question mark after that.
>
> **[1:36](https://www.linkedin.com/learning/getting-started-with-python-for-finance/returns?u=76281980&t=96)** That question mark is not valid [[Python (Programming Language)|Python]] code, but that is code that Jupyter understands and it will pull up the documentation. I strongly recommend that you check out the documentation if you want to know how something works inside of Jupyter rather than searching for it on the internet. You're going to be a lot more productive if you can stay in the environment and not get distracted. One of the nice things about Pandas is that it has really good documentation. You can see that it describes what's going on here. It has a list of the parameters. It has what it returns. It tells you what else to check out. And then, it has examples as well. Super good documentation. Actually really hard to find documentation of this quality in the real world. So, use that question mark inside of Jupyter to pull up that documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (5), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** aapl (2), appl (1), pct (1)
> **CLI Commands:** make (1), python (1), find (1)
> **Documentation:** the documentation (3)
> **Tools:** jupyter (3)
> **Versions:** 0.007 (1)
> **Speakers:** - [instructor] (1)

#### [Plotting returns](https://www.linkedin.com/learning/getting-started-with-python-for-finance/plotting-returns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/plotting-returns?u=76281980&t=0)** - [Instructor] In he last lesson we looked at calculating the returns. In this case, we're going to show how to plot them. Now we already discussed this. All you have to do to plot in [[Pandas (Software)|pandas]] is stick whatever you want in the X-axis to be in the index. And then each column will be a line plot if you call plot. So this is what we had before. We had a series with a date in the index and the values in the series. If we want to plot that we just tack on a plot to the end there. And this is the returns. This is a little bit hard to see what's going on here. This kind of looks like a caterpillar. This is the daily returns from 2010 to 2020. So a lot of information packed in there. This is not the world's greatest plot. Oftentimes folks will look at a histogram of the returns to understand this a little bit better. Are the returns positive? Are the returns negative? And a histogram allows us to see that. So let's calculate a histogram. In our case, what we're going to do is instead of calling plot we're going to call hist. So here's our values again and we're going to replace that plot with a hist. And this is going to give us a histogram. By default, when you create a histogram with pandas it will make 10 bins. From looking at this apparently there were some super negative values here beyond negative 0.1 which would be the reason why this is going out there. But they weren't very common. And then we had some gains that
>
> **[1:32](https://www.linkedin.com/learning/getting-started-with-python-for-finance/plotting-returns?u=76281980&t=92)** weren't quite as large as those drops. It's hard to tell if this is leaning towards the positive or negative because those bins are so wide. Binning in histograms is one of those black magic or dark arts, and you can change the bins and oftentimes if you change the bins, it tells a different story. So let's change those. We're going to say 30 bins here and that's what our histogram looks like. Okay, in this next example I'm going to show how to do a bar plot. A histogram is somewhat like a bar plot, but it is showing the distribution. Let's inspect our closed data. We're going to take the last hundred values of that. And so here we are using iloc. Remember iloc has a row selector and a column selector by position. In this case, we're only providing a row selector. That always comes first. And if we don't have a comma in there, we don't have a column selector. So that minus 100 says start at a hundred entries from the end, and then there's a colon there and we don't have any number after that. So that basically says start a hundred entries from the end and go to the end. When we run that, we should see that instead of having 2,515 entries, we should only have 100 entries. And you can validate that that is the case. Now we're going from August of 2019 to the end of 2019. Now we're going to plot a bar plot. Now a bar plot is a little bit different. When you say .plot.bar, what's going to happen is the index
>
> **[3:05](https://www.linkedin.com/learning/getting-started-with-python-for-finance/plotting-returns?u=76281980&t=185)** is going to go into the X-axis and then each value will be a bar at that point. So this lets us see whether we have positive or negative returns over that time. And if you squint, it looks like roughly they're larger positive returns than negative returns. But if you scroll down a little bit you can see that this plot is not the world's greatest plot because the X-axis is overlapping. The issue here is I consider this a pandas bug. Some people consider this a pandas feature, but in pandas, when you do a bar plot, it converts whatever's in the X-axis to categoricals. And so in this case, it's taking all those dates and plotting each and every date there. I don't want it to do that. I want it to treat the dates as dates so I can do date formatting on that. Sadly, pandas does not allow this for bar plots. It does allow it for line plots but not bar plots. So I'm going to demonstrate this a little bit further with this next example here. Remember, I'm capturing the axis right here and I'm going to use mapplotlib to say, let's format this as a month locator and make it say month-year and then put minor ticks at the day location position. And when we run that, it kind of looks like it works, right? We have month and then year. But if you actually pay attention to the month and the year you can see this is January of 1970, February of 1970. So it's not really doing what we want. The dates are messed up
>
> **[4:37](https://www.linkedin.com/learning/getting-started-with-python-for-finance/plotting-returns?u=76281980&t=277)** and that's because pandas converted them to categorical values. How do we address this? The only way I know to address this is to actually use mapplotlib to plot a bar plot rather than pandas. So here I'm going to make a function called MyBar. It's going to take a series's input and I'm also going to pass in an axis as well. And look at this I'm going to use pipe to pass in that function in there. And then instead of using series.bar, which would use pandas to plot, I'm going to use ax.bar, which is going to use mapplotlib to plot. And mapplotlib is perfectly happy to take the index, which is dates, and plot those in the X-axis and the values from the series as bars. Let's run this and see what happens. Okay, and scroll down, look at those dates. Those look good. In this lesson, we explored looking at returns and doing plots of returns. We showed that we can do both histograms and bar plots in pandas. We also exposed, one of the things that I feel is a limitation in pandas if you've got dates in the index pandas will treat those dates as categoricals when you create bar plots and you won't get that nice functionality that mapplotlib provides for plotting. So my workaround for that is leveraging pipe and making my own function that will do my plotting for me using mapplotlib.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (12)
> **CLI Commands:** make (3)
> **UI Navigation:** scroll down (2), go to (1)
> **Definitions:** is a  (3)
> **Versions:** 0.1 (1)
> **Speakers:** - [instructor] (1)

#### [Cumulative returns](https://www.linkedin.com/learning/getting-started-with-python-for-finance/cumulative-returns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/cumulative-returns?u=76281980&t=0)** - [Instructor] In this lesson, we're going to go over cumulative returns. I want to show a little bit more complicated [[Pandas (Software)|pandas]] operations, and then I'm going to show how I deal with this, refactoring this into a function. The calculation for cumulative returns is to take the current price minus original price divide that by the original price. This is the amount that an investment has gained or lost over time. Let's look at our apple close plot over time and you can see that it looks like over time it has gained some. So how would we do the cumulative returns here? So I'm going to make a chain and we will look at how I do this. So here is my close, and then I'm going to call the sub method. So how does sub work? We're going to take close and we're going to subtract whatever is inside the sub method here. In this case, I'm saying subtract the first value from close. Let's look at what that looks like. The first value is 7.64, so that first one should be zero and the [[Representational State Transfer (REST)|rest]] are just subtracting that seven value from that. Now we're going to divide this by the first value and this should be a cumulative return. You can see that we have an 8.5 return over the decade of this data. Let's plot that to visualize that, and you can see that there have been some places where it's fallen
>
> **[1:34](https://www.linkedin.com/learning/getting-started-with-python-for-finance/cumulative-returns?u=76281980&t=94)** but at the end we are up over eight X at the end. Let me show you an alternate calculation of this. So this is the same results here but we're just doing an alternate calculation here. So oftentimes we'll find that there is more than one way to do things in pandas and this way looks a little bit more complicated. We're going to call percent change and then we're going to add one to it and then we're going to do the cumulative product of that and then we're going to subtract one from it, and that gives us the same result that we saw up above there. Which one of these should you favor? Well, if speed is of the essence to you you might want to benchmark these with data size similar to what you're using and see which one is quicker for you. If you want to pull up the documentation for that cumprod, you didn't know what that was. Again, you can put a question mark here. You can also put a double question mark here. This is another nice feature of Jupiter that is not [[Python (Programming Language)|Python]] code, but what's going to happen when you put two question marks is it will pull up the source code. So this is really nice. You can look in here, here's the doc string up at the top and then here is the source code. And this case, the source code is relatively short. There's not a lot going on here. It's just calling nd frame.cumprod. But guess what? If we want to see what that's doing we can look at where that is. You can see that this is in pandas, core generic.
>
> **[3:09](https://www.linkedin.com/learning/getting-started-with-python-for-finance/cumulative-returns?u=76281980&t=189)** And so pandas is alists pd. So in core generic, there should be an ND frame and that should have a cumprod method. So let's look at what that's doing. So I'm going to do a double question mark there. Pull up the source code for that. You can see that this is in the core generic file and the cumprod says that we're going to call this underscore acum function and we're going to use np.cumprod to calculate that. We could go down this if we wanted to. What does np.cumprod do? And here's the cumulative product along a given access using the NumPy library. Again, I recommend using Jupiter to pull up that documentation if you want to. So how would I make this into a function? I would just put all of this logic here to do that into a single function. We can call this calculate cum returns and it takes a data frame as the first parameter, and in this case it's going to return a series and let's run it here. So let me just comment this out and let's see what happens. Here's our Apple data. We're going to a call pipe. We're passing in the apple data frame as the first parameter and we're passing in close as the column. So this is taking the close column series as the close column. We're subtracting from the close column, the first value and then from that we're dividing it the initial value. You can see that that 8.5 is the same as we had before and now we can call plot there. The nice thing about this is I've refactored this into a function and now if I need to use this in other places I can use it in other places
>
> **[4:43](https://www.linkedin.com/learning/getting-started-with-python-for-finance/cumulative-returns?u=76281980&t=283)** and it's a single line of code. Let me show you one more thing here. I'm going to make a function called get returns. It's just going to take a data frame and then it's going to call calc cumulative returns with the close function. So I'm abstracting this interface. The previous interface up here had two parameters. I'm just hard coding the close one in there. And you can call get returns on apple like this. But another way to define this is to make what's called a lambda or anonymous function. And I use these all the time in pandas so I want to introduce them to you. And if I have a function that looks like this where it takes a data frame as the input, I'm going to say lambda, then I don't provide the name of the function I just provide what is getting passed into it so this data frame is the same as this one up here. Then I'm going to put a colon down here and then on the right hand side of this I put whatever the function is returning. This case it is returning this and so I am going to return my get returns function. Okay? And you can see that those give the same results. So once I have a lambda, what I can do is use the assign method. The sign method is a method in pandas for making a new column or writing an existing column. So if I want to add the cumulative returns to that, I can say the new column that I want is called cumulative returns, and it is equal to this function right here.
>
> **[6:15](https://www.linkedin.com/learning/getting-started-with-python-for-finance/cumulative-returns?u=76281980&t=375)** The key thing to note here is that we are not calling the lambda function we are only defining it. You can see up here I am calling it with these parentheses after it's been defined over here. So that's why it's called an anonymous function because I'm not storing it as a variable. I'm just passing the function in here directly. Let's run this and see what happens when we do this. And you can see that we have added a new column over here. Why do I want to use a function here and a sign? Well, if I'm chaining, I'm making new data frames along the way, each step of my chain and if I want the current state of the data frame when I use a sign, I need to use a function. So I can either define a function or use a lambda and this DF right here will be the current state of the data frame. In this case, there aren't any steps prior to this in the chain but you could imagine we've seen some complex chains. If I had various operations here this DF would not be apple but it would be the previous output prior to calling a sign there. So this final example, we're going to plot the returns and you can see here's my chain down here and let's just read through this. One of the reasons I like this chain is you can read through this as recipes. We're going to calculate the cumulative returns. We're going to take the last a hundred entries of that and then we're going to do a bar plot of that and that's what that looks like. If you look at the call to my bar you can see that I am using map plot lab to plot that. Again, that's because if you do a bar plot with pandas when you plot the dates in the X axis, they won't work correctly.
>
> **[7:48](https://www.linkedin.com/learning/getting-started-with-python-for-finance/cumulative-returns?u=76281980&t=468)** So I'm using map plot lab to get around this. In this lesson, we looked at more complicated pandas code. We showed how we can refactor that into functions. We also talked about lambdas as well as a way to add new columns based on the existing data frame.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (8), [[Representational State Transfer (REST)|Rest]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (4), find (1), python (1)
> **Exercise Files:** source code (4)
> **Versions:** 8.5 (2), 7.64 (1)
> **Definitions:** is a  (1), is called (1)
> **Documentation:** the documentation (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Volatility](https://www.linkedin.com/learning/getting-started-with-python-for-finance/volatility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/volatility?u=76281980&t=0)** - [Instructor] In this lesson, we're going to talk about volatility. Our goal is to do some more complicated patterns, and then start looking at some of these operations that involve [[Windows]] and rolling computations, which come in super useful. So one of the things that we can do with [[Pandas (Software)|pandas]], remember that there's over 400 different things that you can do on a data frame or a series. For example, there are a bunch of aggregation methods such as mean, and mean takes a sequence and collapses it to a single value. In this case, we're pulling off the close column which is a sequence of values, and then we're taking the mean of that. In this case, the value is 27.5. But there are other aggregations that we can do. Like we can take the standard deviation and we can calculate that really easily with pandas. So let's go back to our percent change close here. I've got a chain, and let's just look at what I'm going to do in this chain. Okay. The first thing I'm going to do is I'm going to make a column called percent change, and you can see that that pops up there at the end. And then I'm going to pull that column off. So let's pull that column off. There it is, this is a series. And then I'm going to take the standard deviation of that. And this is an indication of volatility. This is the standard deviation, which is a measure of how much things change or vary, and this is a measure of the variance or the change that's in the price.
>
> **[1:35](https://www.linkedin.com/learning/getting-started-with-python-for-finance/volatility?u=76281980&t=95)** Let's now take this and let's do something a little bit more involved. In this case I'm going to do a chain here, and I'm going to comment this out so we can walk through this again as well. So what I'm doing here is I'm making a new column called close value, and this is taking the Apple dataset and we're applying rolling to it. Rolling is one of those 400 different options. What that does is we pass in a window size. So this is going to do a rolling window of 30 entries. Now remember, we have daily information, so this is going to take the first 30 days, and then we're going to pull off the close from that, and then we're going to take the standard deviation. So this is a shifting window that's basically taking every 30-day period, the standard deviation. When we look at the output of this in the data frame, you can see the closed volume over here, we don't have entries here at the front, and that's because there's nothing in the first 30 entries because it has to have 30 full entries to exist. For example, I can come in here and we can say iloc, and look at position 28 on. And I got to say iloc because this is by position, not loc. And you can see that on this day, there is a missing value, but on this next day, that's when there actually is 30 values and it can calculate those. This is the standard deviation of the closed value for the previous 30 days.
>
> **[3:12](https://www.linkedin.com/learning/getting-started-with-python-for-finance/volatility?u=76281980&t=192)** We also have the percent change standard deviation rolling over 30 days in the percent volatility column over here. What I'm going to do now is I'm going to use iloc. Remember, the first entry in here is the row selector. This is selecting by position. And a single colon is a slice that says start at the start and go to the end, so we're going to take all the rows, and then we have a comma and we have the column selector. In this case, the start is minus two, which means go in two from the end. This is going to start at the close volatility and then go to the end, so this should give us the last two columns here. And then what we'll do is we will plot this, this will be a line plot. I'm saying subplots is equal to true. So because I have two columns, this should make two subplots. Let's plot that. And there we go. This is the close volatility and the percent change volatility of our data. Now, we can also do this in a different way. That was rolling volatility. We can also calculate this with a grouping. So again, I'm going to comment this out and let's walk through what's going on here. We're going to make a column called percent change close. This is just how much the close value's changing. And then I'm going to say resample 15 D. So because I have a date in the index right here, I can resample this, and I'm going to say 15 D. D means every day level,
>
> **[4:46](https://www.linkedin.com/learning/getting-started-with-python-for-finance/volatility?u=76281980&t=286)** and 15, so this means every 15 days, so when we resample this, we should see each day is 15 days after the previous entry, or each row is 15 days after. Let's run this, and because we're doing resampling or a grouping, this is lazy, it just gives us this date time index resampler, so to actually get an output here we need to do an aggregation. In this case, we're going to do the standard deviation. So this is the standard deviation of every 15 days. Let's run that. And there we go. If you look over here in the date, you can see that we have every 15 days, and each of these entries here represents the standard deviation. If we want that to be rolling instead of just grouped, then we can use this calculation down here below. So again, I'm going to comment this out so we can walk through it step by step. We've added the new column percent change close. Let's do rolling. This is lazy, it doesn't do anything, but in this case, instead of doing a grouping where it's going to take the first 15 days and the next 15 days, this is going to do rolling where it's going to roll those windows over each day. We get the output that looks like this. Okay, what I'm going to do in this final example here is just plot this. This is something I like to do a lot. You can see that here's what I had before. This is our standard deviation. Now, in pandas, generally you can pull off a column
>
> **[6:21](https://www.linkedin.com/learning/getting-started-with-python-for-finance/volatility?u=76281980&t=381)** by just putting the column name after a period here. One thing to just be aware of, if I do that in this case, remember I have that column named PCT_change, if I try and access that with a period like this, it says bound method. That's because this column name, PCT_change, conflicts with the built-in method of the data frame here. So if you have a conflict like that, you need to access the column using the index or the square bracket syntax shown here and this will pull off the series. And then we're going to plot that. And this is the rolling 15-day average. Okay, in this lesson, we looked at how to do calculations by both rolling them and by grouping them. Again, because pandas has support for dates natively, this makes it really convenient, and we can calculate either a rolling window or a grouping to do these aggregations for us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (4), [[Windows]] (2)
> **Definitions:** is a  (7), is an  (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (2), such as (1)
> **UI Navigation:** go to (2)
> **Versions:** 27.5 (1)
> **Cross-References:** go back to (1)
> **Warnings:** be aware (1)

#### [Challenge: Plotting 30-day volatility](https://www.linkedin.com/learning/getting-started-with-python-for-finance/challenge-plotting-30-day-volatility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/challenge-plotting-30-day-volatility?u=76281980&t=0)** - [Narrator] Hey, we're up for our next challenge. This challenge is to plot the rolling volatility over a 30-day sliding window for the years from 2015 to 2019. Again, I highly recommend you do these challenges. This is a great way to synthesize a lot of what we've been learning.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Plotting 30-day volatility](https://www.linkedin.com/learning/getting-started-with-python-for-finance/solution-plotting-30-day-volatility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/solution-plotting-30-day-volatility?u=76281980&t=0)** - [Narrator] Let's look at the solution to this. I'm going to build this up from scratch and what I would do is I would want to look at what I'm doing along the way and evaluate and make sure it's doing the right thing. So we've got our apple and we want to make a new column called the volatility. So I'm going to say volatility is equal to and we're going to take our closing day value. And what are we going to do with that? We are going to get the percent change. Let's run that and see if that works. And this is the percent change. Percent change in of itself is not really volatility. So maybe I should change this, so it makes a little bit more sense. Okay, there's the percent change, that's looking good. Volatility is the standard deviation of that change over some period. In our case what we want to do is we want to do a 30 day window. So I'm going to say rolling. And if I want to, I can pull up the documentation for this. I can come over here and say rolling and put a question mark after that, you can see that we have the window size and then the minimum periods. So minimum periods is the minimum number of observations required to have a value. And I'm going to put that as the same size as the window that I want. So I'm going to say rolling and I'm going to do 30 and the minimum
>
> **[1:36](https://www.linkedin.com/learning/getting-started-with-python-for-finance/solution-plotting-30-day-volatility?u=76281980&t=96)** and I'm going to say minimum periods is equal to 30. Let's run that and test it. Again, this doesn't give us anything because it hasn't calculated a result because this is a rolling operation. Rolling operations don't give us a return result until we aggregate. So let's figure out what we want to aggregate. We want to pull off the percent change column and then do the standard deviation of that. Let's do percent change here and it says that this is rolling and let's do the standard deviation of that and there's the standard deviation and let's plot that. And that looks like it's okay except we have one more thing. This asked for 2015 to 2019, this is going from 2010 to 2020. So I'm going to come in here and comment out this plot and we can see that this goes from 2010 to 2019. So I'm going to insert right in here a loc because I want to do this by name. If I want to do by position, I would use iloc but I want to do this by name and we're going to say 2015 and then a colon. And in 2019, let's just run that and make sure that that works. That does work. And then we will put a plot at the end of that. Okay, so this is an example of solving this challenge. In this case, I built it up from scratch. Alternatively, you could come up here to our previous example.
>
> **[3:09](https://www.linkedin.com/learning/getting-started-with-python-for-finance/solution-plotting-30-day-volatility?u=76281980&t=189)** You could take this, change the window and the minimum periods and also stick in a loc into this to change this or you can build it up from scratch. I think both of those are valuable tools to have. Oftentimes you will have existing code that already works. If you have written it in this chaining style, it's going to make it really easy for you to step through it. Oftentimes, I will comment them out and look at what's going on through each step. Alternatively, you saw that I built this up from scratch, essentially stepping through it as I'm building it up.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Definitions:** is a  (1), is an  (1)
> **Documentation:** the documentation (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Rolling Windows

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating moving averages](https://www.linkedin.com/learning/getting-started-with-python-for-finance/creating-moving-averages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/creating-moving-averages?u=76281980&t=0)** - [Instructor] In this lesson, we're going to explore doing a simple moving average. This is a common operation for [[Financial Data]]. This will give us some more practice on doing rolling operations, and we'll also have the ability to practice with lambda, as well. In my example here, I've just got an assigned method call and I'm making a few columns. So if we run this, we can see that we have created the S1 column. What does the S1 column consist of? It consists of taking Apple and then taking the close column from that and then calling shift one on it. So again, there's 400 different things that you can do with a data frame. One of those is shift. This illustrates what shift does when you shift it by one, and let's look at that. Here's the close column right here and here's the shifted version in S1. Basically what we're doing here is we're taking that 7.64 and we're shifting it down one row. Same thing with the S2 column. We're shifting it down two. And if you look at that, we are taking 6.74 and it's now shifted down two. So those missing values or NAN values are values where we did not have a value in close because this January 2010 value is the first value, so we don't know what the value before this is. [[Pandas (Software)|Pandas]] just sticks in a missing value. And because we shifted it down two here, we don't have a value before that, either. This next column here, I'm saying make a column called MA3 standing for moving average three,
>
> **[1:33](https://www.linkedin.com/learning/getting-started-with-python-for-finance/creating-moving-averages?u=76281980&t=93)** and this is assigned, instead of being assigned to a series like the previous one, this is assigned to a lambda function. So we're passing in a function here. Remember, the interface for passing in a function to assign is that the function should take a data frame as the first argument. This DF underscore represents the data frame that happens to have an S1 and S2 column. If we want to take advantage of those columns that we just created, we need to pass in either a function or a lambda here to do that. And so you can see over here on the right-hand side of this colon, this is what this is going to return. All of this is what it returns. It's going to say take the data frame that's passed in and then we're going to do loc. Remember, loc allows us to select rows and columns. The row selector is the single colon which says take all of the rows, and then we have a comma followed by a list. This is the list of column names that we want to select. We're going to take close S1 and S2, and with those three columns we will take the mean, and then look at this. We've got an access parameter here in mean. Pandas has the ability to aggregate in the index access, which is the default access, or across columns if we tell it to. And so we're saying for MA3 right here, this value should be the 7.64 plus the NAN, plus the NAN, and the mean of those three is 7.64. Similarly, this value here is the average of 7.65 and 7.64,
>
> **[3:10](https://www.linkedin.com/learning/getting-started-with-python-for-finance/creating-moving-averages?u=76281980&t=190)** which is that 7.649 value. So MA3, the moving average three, is basically taking this sliding window or rolling window and giving us that value there. We can see that Pandas has a built-in way to do that, and the built-in way here is to call close with a rolling three and then take the mean of it. You'll note that the behavior is slightly different because by default the rolling three will not give us values if it doesn't have three complete values, so these first two are empty. There's not three values to calculate this first value. There's not three values, there's only two to calculate this one. At this point, when we get to here, we have the three values before it that we can use to calculate it. So the 7.611 should be the average of 7.64, 7.65, and 7.53.
>
> **[4:04](https://www.linkedin.com/learning/getting-started-with-python-for-finance/creating-moving-averages?u=76281980&t=244)** In this lesson, we demonstrated that we can use rolling to do a rolling window, but we also gave some intuition on how we could do that manually if we wanted to, combining shift and then making an extra column using a lambda function and taking the aggregation. In this case, we did the mean aggregation, but you could provide whatever aggregation you want to to emulate rolling. Oftentimes, Pandas has built-in ways to do things or you can roll your own. In this case of rolling, I would recommend using the existing functionality rather than rolling your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (4), [[Financial Data]] (1)
> **Versions:** 7.64 (5), 7.65 (2), 6.74 (1), 7.649 (1), 7.611 (1)
> **Env Vars:** nan (3), ma3 (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Plotting moving averages](https://www.linkedin.com/learning/getting-started-with-python-for-finance/plotting-moving-averages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/plotting-moving-averages?u=76281980&t=0)** - [Instructor] This lesson, we're going to add plotting to moving averages. At this point, you should be thinking, okay, what do we do to add plotting? We just tack on a plot to the end and you'd be correct. So, let's start off with where we were. We just created our moving average and we have these two columns at the end, MA3 which is our hand ruled version, and the MA3 built-in, which is leveraging the existing rolling method from [[Pandas (Software)|Pandas]]. If we wanted to plot these, we can just call the plot method. Now, if we just stick a plot on this, it's going to plot everything in there. Let me show you what that would look like. There's a plot of everything. This is probably not what we want because the volume column has such a great magnitude that everything else is shrunk. So, what I'm going to do is I'm going to just select the columns that I want. Let's look at the close column and the moving average of the closed column, and let's plot that. This will give us two lines and here we can see the blue line is the close column and the moving average is the orange line on top of that. It's a little bit hard to see what's going on so maybe we can [[Zoom]] into that. How am I going to zoom into that? I'm going to use ILOC to zoom into that. So, here's my original data going from 2010 to 2019. If I use ILOC, remember, that's a positional selector. The minus 200 is for the row selector saying take the 200 to last row and then the colon means we're going to slice that
>
> **[1:33](https://www.linkedin.com/learning/getting-started-with-python-for-finance/plotting-moving-averages?u=76281980&t=93)** to the very end. So, from 2,515 rows, this should give us 200 rows. Now, let's plot that. And this is a little bit more clear to see what's going on that this orange line is smoothing out the blue lines. Using the moving average is a common technique for smoothing out bumpy lines. This was used quite a bit during COVID when people were plotting graphs about daily infection or daily death rates. Those would be quite bumpy. But then they would plot a seven day moving average on top of that, which would essentially be the weekly moving average. In this next example, I'm going to demonstrate what's often called Golden Cross, where we take the 50 day moving average and the 200 day moving average and plot those on top of the closing price. So, again, I'm going to comment this out and we'll just walk through the code. So, here's our recipe. The first thing we're going to do is we're going to call the assigned method. The assigned method will make new columns and we're making two new columns, MA 50, which is the 50 day moving average. Again, at the first entries here we have NaN because there aren't going to be any values. And then we have MA200, which is the 200 day moving average, and there will be 200 empty values at the end here. I'm going to do this next operation in our chain which is just saying, let's pull off these columns. Now, I could have written this with loc.
>
> **[3:07](https://www.linkedin.com/learning/getting-started-with-python-for-finance/plotting-moving-averages?u=76281980&t=187)** Pandas also has a way to just do an index operation directly and if you just pass a list into the index operation, then you will just pull off those columns. So, because I'm not doing a row filter, I'm just pulling off columns. I can use that syntax to just pull off the close the 50 day moving average and the 200 day moving average and we can plot that and it looks something like that. Again, some people suggest that when you see a cross of the 50 and 200 day moving average, that's an indicator to buy or sell. I'm going to use this ILOC here to just look at the last 400 days of that and zoom in a little bit. You can see that a 15 day moving average smooths this out a little bit. A 200 day moving average smooths this out quite a bit more. At this point in time, you should be getting quite comfortable with adding new columns, filtering those columns, and then plotting them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (4), [[Pandas (Software)|Pandas]] (2)
> **Env Vars:** iloc (3), ma3 (2), covid (1), ma200 (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Exponential moving average](https://www.linkedin.com/learning/getting-started-with-python-for-finance/challenge-exponential-moving-average?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/challenge-exponential-moving-average?u=76281980&t=0)** - [Instructor] Here's our challenge. We want to create a plot with three lines. We're going to plot the Apple close price through 2015, and then we want to do the exponential moving average with an alpha of 0.0392, and another line with the exponential moving average of 0.00995. The exponential moving average is like a rolling moving average, but instead of giving equal weight to each of the values in that rolling window, it gives more weight to the nearest values and less weight to the other values. And the alpha is a measure of decay of how much importance it gives. If you haven't used this before, and you might not have 'cause I haven't talked about it, I've got a hint here. I want you to practice using Jupiter to explore. You can see that there is a method, one of those 400 different attributes of a data frame called EWM. Explore that and see if that gets you going. Good luck with the challenge.

> [!info]- Semantic Content
>
> **Versions:** 0.0392 (1), 0.00995 (1)
> **Definitions:** is a  (2)
> **Env Vars:** ewm (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Exponential moving average](https://www.linkedin.com/learning/getting-started-with-python-for-finance/solution-exponential-moving-average?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/solution-exponential-moving-average?u=76281980&t=0)** - [Instructor] Let's look at the solution to this challenge. I'm going to build this up from scratch. Remember, I said check out the EWM documentation here. Let's just do that really quickly. So here's AAPL and I'm just going to say EWM and put a question mark after that to pull up the documentation. You can see that one of the parameters there is alpha. We can come down here and it says that alpha is this smoothing factor. So I'm providing you the smoothing factor of 0.03 and 0.009. We can scroll down a little bit more and there should be some examples of using this. And so, you can see that just like rolling, we say EWM and provide one of the parameters. In our case, we'll provide alpha and then we're going to provide an aggregation. Looks like this is doing mean and we're going to want to do mean as well. Okay, so that should give us some hints on how to use that. Again, leverage that documentation inside of Jupiter. If you can, resist that urge to go search in your web browser, it will make you a lot more productive. Okay, I'm going to start my chain. I always start my chain with parenthesis here and we want to make two new columns. So, how do we make columns? We use the assigned method. So I'm going to call one the EWM and I'm going to say call it zero three. And I'm going to say that is equal to taking AAPL and we're going to take the close value there and then we're going to say EWM. And I'm going to say alpha is equal to 0.0392.
>
> **[1:38](https://www.linkedin.com/learning/getting-started-with-python-for-finance/solution-exponential-moving-average?u=76281980&t=98)** And let's try that. And I get a type error. Scroll to the end here. It says, object of exponential moving average has no len. The issue there is that this returns this object, which is the EWM object. We actually want to return a series from that. And how do we get a series? We have to do the aggregation. The aggregation is mean. Let's try that again. Sticking a mean on there. And that looks like that did work. We now have the EWM right there. Okay, we also want one for 0.0095. So I'm going to do that. I'm going to say EWM 00995 is equal to aapl.close. EWM alpha is equal to 0.00995. And again, I need to take the mean of that. I need to do an aggregation there. Let's run that. That looks like that works fine. At this point in time, I want to do the plot. So, let's pull off the columns to plot. If I just said plot here, it's going to plot all the columns. And again, that volume's going to blow everything out of proportion. So, let's filter out our columns here. I'm going to use LooC to do that. And I'm going to say take all of the rows and we're going to take out the close and the EWM zero three column and the EWM 00995 column. Hey, there's our three columns.
>
> **[3:14](https://www.linkedin.com/learning/getting-started-with-python-for-finance/solution-exponential-moving-average?u=76281980&t=194)** Let's try plotting that. That looks pretty good. Let's just verify that we did this and this says we want the values for 2015. So this is not the values for 2015. This is the values from 2010 to 2020. So how would we get the values from 2015? Again, I'm going to come in here and comment out the plot here, so I can see what I have. I've got 2010 through 2019, and because I want to filter this by label, I'm going to keep this LooC here and I'm going to come in here and say, let's take 2015 and let's put a colon to slice it. And I'm going to put a 2015 at the end of this. Let's see what happens when we do this. So at the start, it includes the start of 2015 and then it goes to the end of 2015. Note that if we put this filtering of rows before doing the assign our calculations of the moving average or the exponentially, weighted moving average would be different. Let's plot that and see what our plot looks like. And there is our close with the exponential moving average plots as well. In this challenge, we showed how to make new columns. We showed how to explore functionality using Jupiter, rather than resorting to searching across the inner webs. And then we showed how to filter by row and also filter by columns. And then finally, we did a plot. Hopefully you're getting the point
>
> **[4:47](https://www.linkedin.com/learning/getting-started-with-python-for-finance/solution-exponential-moving-average?u=76281980&t=287)** that we're taking a bunch of these tools. I like to view [[Pandas (Software)|Pandas]] as kind of a Swiss Army knife that gives you 400 different tools that you can use and then we start layering them on top of each other. Using chaining is a great way to do this because it lets us look at them each as a recipe of operations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** ewm (11), aapl (2)
> **Versions:** 0.03 (1), 0.009 (1), 0.0392 (1), 0.0095 (1), 0.00995 (1)
> **CLI Commands:** make (4)
> **Documentation:** the documentation (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)


### 4. Technical Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [OBV](https://www.linkedin.com/learning/getting-started-with-python-for-finance/obv?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/obv?u=76281980&t=0)** - [Instructor] In this lesson, we're going to look at doing some technical analysis. We're going to take a formula that's a little bit more complicated, the on balance volume formula. We're going to show how we can calculate this using [[Pandas (Software)|Pandas]]. So here in this cell, I've got the formula here where the OBV, or the on balance Volume, is equal to the previous volume plus the volume if the close is greater than the previous close, or it's equal to 0 if the close is equal to the previous close, or it's equal to the negative volume if the close is less than the previous close. So, this is a little bit more complicated than what we have. We've got the previous value, and we've also got an if statement to determine what to add to it. So let's see if we can build this up. I'm going to take the close value here, and remember, we can get the previous value by doing the shift. If we look at the values there, when we shift this by one, this 7.64 is the previous value. If you look at the date, 1/5, here is 7.65. The current value, 7.64, is the previous value, so we get the previous value by shifting that by one. Here's one way we can calculate this, and I'm labeling this as naive, because this is using pure [[Python (Programming Language)|Python]] code to do this. What I mean by naive is that if we use pure Python code and if statements and for loops like this, this is going to run slow. It is not using the optimized Pandas operations to do these calculations.
>
> **[1:34](https://www.linkedin.com/learning/getting-started-with-python-for-finance/obv?u=76281980&t=94)** Let's run this and see what happens. Okay, and I get some warnings here, starting with copy warning, which is annoying. That's because I didn't use the assign method to create new columns, and then I have the OBV calculation over here. Let's look at the implementation here. What's going on? I'm saying, here's our data frame, let's copy it, and then I'm going to make a new column called OBV, set it equal to zero, then I'm going to loop over the length of this. This is going to loop over each row, starting at row number one, which is actually the second row. Python is zero-based, so row zero is the first one. And then we will say, if the close value at that position is greater than the previous close value, then the OBV at that position is equal to the previous OBV plus the volume. If the close value is less than the previous close value, we're going to subtract the volume. Otherwise, we're not going to do anything with it. This is the plus zero, they're equal. That reads like Python code. It looks like it works okay. We do get all these warnings here, because we're not using assign. What I'm going to do is I'm going to run this cell magic here, %% timeit. If you're not familiar with that, that is code that times how long this takes to run. It does a micro benchmark of this. We'll scroll to the end, and you can see that this takes 600 milliseconds to run. Now, the Pandas way of doing this, the non-naive way, would probably be to use this where method. So one of the 400 things is the square.
>
> **[3:08](https://www.linkedin.com/learning/getting-started-with-python-for-finance/obv?u=76281980&t=188)** I actually don't really like this either. I think the interface is a little bit weird. You call where on a series, you pass in this conditional, which is like a boolean array, and if that conditional is true for a given index value, you keep the index value, otherwise, you use this otherwise value. So it's kind of like saying, if this is true, keep the value, otherwise you can provide an alternate value. I don't like it because you're saying keep the value if it's true. I want to say, if this is true, use value A, otherwise use value B. This only lets me basically say use value B. So this is what the logic would look like here. I'm going to make a column called volatility and set it equal to zero, and then I'm going to make a column called OBV, and it's going to be this lambda. And this lambda is going to say, take my current volatility and where my condition is equal to close, if close is equal to the previous close, we will keep that. So we will keep the zero. Otherwise, we're going to do another where here. If the close is greater than the previous close, our value is this other where, which is the negative volume of where the close less than the close, otherwise it's zero, and then we're going to do the cumulative sum of that. That's a little brain bending to read through, but that would be the Pandas way to do that. You'll note that one of the benefits we get from doing this is that this takes 2.2 milliseconds to run. Note that our naive one is 600 milliseconds, so we've got almost a 300 X improvement
>
> **[4:44](https://www.linkedin.com/learning/getting-started-with-python-for-finance/obv?u=76281980&t=284)** by using this Pandas way to do that instead. Now, my preferred mechanism is actually using this npselect. I wish that Pandas had a mechanism to do an if else natively rather than this where, and npselect is part of NumPy, but it works with Pandas. How npselect works, and you can pull up the documentation if you want to, you pass in this condition list, which is a list of boolean arrays. So here we're saying if the close is less than, whatever, some value here, then we want to have 7.55. If the close is greater than some value, we will have 72. Otherwise, we're going to say 33 there. I'm just going to run this, and you can see that we have 33 at this first value, we have 7.55, these other values, we have 72 here, and we could look at just the close to see why it's making those choices. So if it's less than 7.6, we're going to say 7.55. So you can see that these three values are less than 7.6, so they have 7.55. If it's greater than 72, you can see that these last three values are greater than 72, then we're just going to put that at 72. Otherwise, the default is 33. So we can see that these values that are outside of those ranges, go to 33 there. I think this is a little bit cleaner to read, so let's see if we can re-implement this OBV using npselect. So here we go. Here's our previous close value,
>
> **[6:16](https://www.linkedin.com/learning/getting-started-with-python-for-finance/obv?u=76281980&t=376)** and our volume is going to be, if close is greater than our previous close, we will use the volume. If close is equal to our current close, we will use the zero. If close is less than our previous close, we will use the negative volume. We calculate the OBV by taking the current value of the data frame, which has the vol column, we take the cumulative sum of that. Let's run that and see what happens. And I get this error here, that we do not have a previous close column. Why don't we have a previous close column? Well, because we created it right there, it is not on Apple, it is on the data frame that assign returns. So how can we get around this? Let's change our code here. Note that if we pull up the documentation or the source code for select, you can't pass in to this con list a lambda, so it can't take the previous output of the data frame. So instead, what I'm going to do is I'm just going to inline the calculation of this shifted value here. So let's run this, and now we have the OBV calculation. That looks like that works. Okay, and this next cell, what I'm going to show is how I like to refactor this once I've created this calculation. I like to stick this calculation in its own function. And so here you can see that the function takes in the data frame, we can pass in some columns as well, and then I'm going to make a local variable
>
> **[7:52](https://www.linkedin.com/learning/getting-started-with-python-for-finance/obv?u=76281980&t=472)** called the close column. I'm also going to make a volume column and a shifted close column. Then I'm going to use npselect, in this case because I have variables that are existing, I'm not working on the existing data frame, I can stick that logic right there. If close is greater than the shifted close, use the volume. If they're equal, use zero. If it's less than, use the negative volume. That gives me the volume column, and then the OBV is just taking that volume column, filling in missing values with zero, and doing the cumulative sum of that. This looks like a lot of code, but as you step through it, hopefully it's relatively easy. I claim that this select version is a lot easier to read than the where version above. Let's try it out, and you can see that all I have to do is say assign OBV is equal to this function, calc OBV, and it creates that OBV column right there. Now, how did I test this and make sure the OBV worked? Here's one thing that you can do. If you've got, like, a spreadsheet that has values, you can use those values. For my example, I went and found an [[Microsoft Excel|Excel]] spreadsheet that had this calculated, it had these values for close and for volume, and then I created this formula and then I checked that my OBV value matched theirs, and this is easy to do with a small dataset where you have the existing values. In this lesson, we went through a more complicated calculation. I showed that you can make a naive pandas version of it.
>
> **[9:27](https://www.linkedin.com/learning/getting-started-with-python-for-finance/obv?u=76281980&t=567)** I also showed how you can leverage NumPy to do if else statements and have them be a lot quicker, and then I showed how to refactor this into a function to make it easy to reuse and to make your code easy to read.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (8), [[Python (Programming Language)|Python]] (4), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** obv (15)
> **CLI Commands:** make (9), python (4)
> **Versions:** 7.55 (4), 7.64 (2), 7.6 (2), 7.65 (1), 2.2 (1)
> **Definitions:** is a  (5)
> **Warnings:** note that (3), warning (1)
> **Documentation:** the documentation (2)
> **UI Navigation:** go to (1)

#### [Accumulation/distribution indicator](https://www.linkedin.com/learning/getting-started-with-python-for-finance/accumulation-distribution-indicator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/accumulation-distribution-indicator?u=76281980&t=0)** - [Instructor] In this lesson, we're going to go over the accumulation distribution indicator often called AD. This is another more complicated example using some [[Pandas (Software)|Pandas]] code. So here we have the calculation of MFM, which is called the money flow multiplier and that's the close minus the low minus the high minus the close divided by the high minus the low. So we have that, and then the AD is going to be the previous AD plus this CMFV, which is what we call the current period money flow volume. So let's see if we can tackle this. Again, this is a little bit more complicated. I'm going to show you how I would go through this. The first thing I'm going to do is I'm going to make an MFM column here and I'm going to comment out these other ones and we'll step through this. So our MFM column is the close minus the low. So that's this part right here. And then we're going to subtract the high minus the close, which is this part right here, and then all of that you can see I've got parenthesis around all of that, is going to be divided by the high minus the low. So now we have that MFM column, we can just double check that and make sure that that works. The next thing I'm going to do is calculate the money flow volume column, and I'm using a lambda here. Remember, the value of the lambda is it takes the current value of the data frame, so I will have access to this MFM column and I'm just going to multiply that by the volume column. Let's run that and make sure that that works.
>
> **[1:34](https://www.linkedin.com/learning/getting-started-with-python-for-finance/accumulation-distribution-indicator?u=76281980&t=94)** Looks like that works and that is the calculation of what we specified up above. Then I'm going to get the current money flow volume column. Then I'll get the current money flow volume column by using a lambda function. Remember, a lambda is going to take the current value of the data frame. We just calculated the MFV column because I'm using a lambda here, I'll have access to it and I'm just going to do the cumulative sum of that. Let's run that and see if that works. That looks like that works. It turns out that this CMFV column is our AD column. And so what I'm going to do now is I'm going to refactor this into a function here. So here's my refactored function. It is going to take a data frame as the first column and then I'm just breaking out the close column, the high calm, the low column, and the volume column and pulling off those individual columns there because I'm going to refer to them more than once. And here's my chain. This looks pretty similar to what we had above. I've factored out those columns. I'm still using lambdas here because I need to access MFM, so I need to use the Lambda to access that. You need another lambda down here because I need to access the MFV. And then once I have this column here I'm just going to pull that off and return it. That's the AD column. So let's run this. I'm going to say AD is equal to calc AD,
>
> **[3:09](https://www.linkedin.com/learning/getting-started-with-python-for-finance/accumulation-distribution-indicator?u=76281980&t=189)** because this function takes a data frame as the first parameter that will work in a sign. This will make a new column called AD. Let's just run that and check it here. So I'm going to come up here and comment this out and that looks like that does work. And I'm going to pull off the AD column. There's the ad column, and then if I want to plot that, I can plot that as well. One of the things you'll want to do when you have a more complicated calculation like this is just make sure that you're not using [[Python (Programming Language)|Python]] code to calculate this but you're staying in Pandas and it looks like we are staying in Pandas. We don't have if else statements in there. In this lesson, we looked at calculating another complicated Pandas calculation. We showed how we can debug that as we're going along using our chaining. We also showed the importance of using lambdas to get access to previously calculated values and then we showed how we can take that final result and refactor that into a function to make our code easy to use and easy to test if we want to test it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (4), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** mfm (6), cmfv (2), mfv (2)
> **CLI Commands:** make (6), python (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: RSI](https://www.linkedin.com/learning/getting-started-with-python-for-finance/challenge-rsi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/challenge-rsi?u=76281980&t=0)** (upbeat techno music)
>
> **[0:05](https://www.linkedin.com/learning/getting-started-with-python-for-finance/challenge-rsi?u=76281980&t=5)** - [Instructor] Now we're ready for our final challenge of the course. This is the RSI Challenge. We're going to write code to calculate the relative strength income column. This is a technical indicator that indicates whether a stock is overbought or oversold. Once you've calculated this value, it will be a number between zero and 100. And if this value is greater than 70 it indicates that a stock is overbought. If it's less than 30, it indicates that it's oversold. On the screen here, I've got the calculation. You can see that the RSI is this calculation right here, 100 minus 100 divided by 1 plus RS, where RS is relative strength. RSI in and of itself is not hard to calculate. The challenge with this challenge is that this relative strength is equal to the average gain over average loss. Now, we've seen how to calculate gain and loss, but this average has a specific meaning. The first value that we're going to be able to calculate will be the average of the first 14 values. And then subsequent values will be the previous average times 13 plus the current either gain or loss, and then we divide that sum by 14. I've got a link to a spreadsheet here, and I'll open it up in [[Microsoft Excel|Excel]] and just show you those formulas. Okay, here's our spreadsheet. You can see that we have the close column in D, and then we have the change. Here the change is just the current value minus the previous value, and then we have the gain. The gain is if the change is greater than zero,
>
> **[1:40](https://www.linkedin.com/learning/getting-started-with-python-for-finance/challenge-rsi?u=76281980&t=100)** then we keep that value. If it's less than zero, we stick in zero here. You can see that these values where it's missing are not showing up. Loss is just the opposite of that. If it's less than zero, we take the negative value. Note that this is a negative value, it's showing up here as red. Otherwise, we put in zero as the loss. So the average gain, this is where the challenge is, is this first entry here is the average of the first 14 values. You can see the formula up here. We're just summing those values and dividing it by 14. However, this is the challenge. The next value is the previous value times 13 plus the current value divided by 14. We're taking the previous average gain, adding the new average gain, in this case there is not a gain, and dividing that by 14. Similar with average loss. The first value is just the average or mean, as we would normally calculate it, but the subsequent values are taking those previous values, as you can see in the formula, multiplying them by 13, adding the new loss, and dividing that by 14. Once you've got that, we can calculate the RS by dividing the gain by the loss. And the RSI, we can calculate that with the formula up here. One thing to note is that if the average loss is zero, this is putting in a value of 100. Otherwise, it's using that formula 100 minus 100 divided by 1 plus the RS value. Good luck with this challenge.
>
> **[3:12](https://www.linkedin.com/learning/getting-started-with-python-for-finance/challenge-rsi?u=76281980&t=192)** Generally, how most people solve it is they'll use the apply method in [[Pandas (Software)|Pandas]] and write a function that will calculate the average for you using this special technique of giving the first 14 values and then taking the previous value, multiplying it by 13, adding the current value, and dividing by 14. Good luck with it. This will be a good challenge to let you practice your Pandas skills and dive into a lot of what we've talked about in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** rsi (4)
> **Definitions:** is a  (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat techno music) (1)

#### [Basic solution: RSI](https://www.linkedin.com/learning/getting-started-with-python-for-finance/basic-solution-rsi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/basic-solution-rsi?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/getting-started-with-python-for-finance/basic-solution-rsi?u=76281980&t=5)** - [Instructor] Let's look at the solution for the RSI calculation. One thing I like to do when I'm creating a complicated formula like this is to have existing values that I can double check against. That's the nice thing about the spreadsheet that I've linked here. We can take those values and make sure that we're getting the same results. What I've done is I've copied and pasted the values of the spreadsheet into the cell right here and I'm going to load those into a data frame called QQQ and you can see that I'm also converting that date column into a date. Let's run that and then inspect what that QQQ looks like. And these are the values from that spreadsheet that we saw right there. So in particular, I'm concerned with making sure that I can get a change column, a gain column, a loss column, an average gain column, average loss, the RS and the 14-day RSI column there. Let's just work through these one at a time. That's how I would generally do it. I've got the code to do that right here. What I would generally do is, again, I'm going to comment this out and we can step through the code and watch what's going to happen. So here is our close value and the first thing I want to do is get this change column. Let's get the change column by documenting that and I got that value to be missing in the first instance because there's no change and minus 0.25 and then 0.06. I can come up here and just validate that minus 0.25 and 0.06. That looks like it's working. The next thing I want to do is calculate the gain. I'm going to use the current value of change
>
> **[1:40](https://www.linkedin.com/learning/getting-started-with-python-for-finance/basic-solution-rsi?u=76281980&t=100)** so I have to use a lambda here because I want to get access to that change column. And then I'm going to use one of those 400 methods. One of those is clip. The cool thing about clip is I can say if there is a value that is lower than zero, clip it at zero, and that should give us what we want. Again, I'm just going to run this and test this. The nice thing about Jupyter is I can do that relatively easily and let's just look at the values for gain. Looks like I have nan or missing. Then zero and 0.06 and then zero. Let's just come up here and look at that and looks like I've got nan 0.06 and zero. That's looking okay. Again, we'll do the same thing with loss and we'll run that. And loss is nan, negative 0.250 and negative 0.54. And it looks like we have those values there as well. Now remember, these values up here are positive for loss. My values are not positive, so I might want to come in here and put a negative value there to make those the same. Okay, so those are the basic ones. Now we're going to do this complicated one, which is the average gain and we don't get a value there until 14 entries down because this is the average of the first 14 entries. And then this value, this 0.022 is taking this value, multiplying it by 13, and then adding the gain, which I believe is that column right there and then summing those and dividing all of that by 14. So this is a little bit more complicated. Let's see if we can get that working. Here is my calculation here, and you can see that I have written a function here
>
> **[3:13](https://www.linkedin.com/learning/getting-started-with-python-for-finance/basic-solution-rsi?u=76281980&t=193)** and I've just called it average and I'm going to take a data frame and I'm going to pass in a column. So in this case, I'm passing into the gain. What is going on with this code? I'm making a results list. This is just a normal [[Python (Programming Language)|Python]] list. I'm making a window. This is going to hold the 14-day window and then I'm going to loop through every entry in my column. I'm using enumerate to get both the index and the value there, so I'm going to stick my value into my window. That's what this append does. And if my i is less than the window size, we're just going to stick in nan. We don't have anything until our i is equal to the window size. When our i is equal to the window size, we're going to pop off the first value there and then we're going to use this formula here, which has copied out the spreadsheet, which is basically the sum of the window divided by the window size. Otherwise, if those two both fail, we're now the part where we do our multiplication by 13, add the current value and divide by 14. And so here's the calculation for that, and at that point, I'm just going to loop over all my columns, throw this into a panda series with the same index and let's see if this works here. I'm going to comment out my other values here and here's our average gain and average loss. You can see that we have 0.23 and 0.22 and 0.10 and 0.11. Let's just go up here and validate that. And this is 0.24 and 0.22 and 0.10 and 0.11.
>
> **[4:51](https://www.linkedin.com/learning/getting-started-with-python-for-finance/basic-solution-rsi?u=76281980&t=291)** So it did say 0.24 if if this were rounded, it would go up to 0.24. So it looks like we're doing okay there. Those values look like they are okay. Another thing that you might want to do is just come down to the bottom and check those bottom values to make sure that they haven't drifted very far. So I've got 0.18 and 0.297. Let's go up to these values up here and validate those, 0.18 and 0.30. But remember, the other one's .297 so there's a rounding issue there. Okay, so that's looking good. The next thing I want to do is calculate the Rs. Once I have those average values, I just divide the gain by the loss. We can run that and we're going to get nans until we get the values down there. And then let's calculate the RSI. I've pasted in the formula from the spreadsheet here. So I'm going to go back to our friend NP select because I have an IF statement here. If the average loss is zero, we're going to stick in the 100 value, otherwise we're going to do this 100 minus 100 divided by one plus the RS value. Let's run that, and that looks like that works. We can go ahead and validate that as well. 37.78 at the bottom. Let's just validate that last value there and 37.77 at the bottom there.
>
> **[6:20](https://www.linkedin.com/learning/getting-started-with-python-for-finance/basic-solution-rsi?u=76281980&t=380)** Let's try this on our real data here. Now I'm going to basically take the code that I had up above here, and I'm going to take these columns here and calculate on the close value of my Apple data instead of this spreadsheet data. Okay. And that looks like it is indeed working. Awesome. So this is our first solution to our challenge. We showed how to write a custom Python function. This challenge actually has two parts. I'm going to have a bonus part in the next video that will show you how to speed this up drastically. So stay tuned for that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **Versions:** 0.06 (4), 0.24 (3), 0.25 (2), 0.22 (2), 0.10 (2)
> **CLI Commands:** make (3), python (2)
> **Env Vars:** rsi (3), qqq (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### [Optimized solution: RSI](https://www.linkedin.com/learning/getting-started-with-python-for-finance/optimized-solution-rsi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/optimized-solution-rsi?u=76281980&t=0)** - [Instructor] In this bonus lesson I'm going to revisit this average calculation that we did in the prior solution. Now, if you look at the average calculation, you can see that there is a for loop right here. And generally when you are using [[Pandas (Software)|Pandas]], you want to avoid having for loops. What that does is it pushes the computation into [[Python (Programming Language)|Python]] rather than being these optimized Pandas and NumPy operations. And so that's going to slow it down. We saw that we got the right answer here but it was slowed down. So I'm going to show you now how we can optimize that with relatively little changes. First of all, before I do that, I'm going to use the %%timeit operator. That's a cell magic to micro benchmark this code on the real world. And this takes like 5.93 milliseconds to run. So first of all, 5.93 milliseconds isn't that long to run on this data. However, you could imagine if you had larger data, you might have a longer time to wait. And so my first rule of thumb for people who are benchmarking their code is benchmark it on the size of data that you care about. In this case, 5.93 milliseconds is not a huge deal, but if you have something that's taking seconds, or minutes, or hours, that might be a different story. To optimize this, my preferred mechanism is to use what's called Numba. So I'm importing Numba up here
>
> **[1:34](https://www.linkedin.com/learning/getting-started-with-python-for-finance/optimized-solution-rsi?u=76281980&t=94)** and the code here is almost a copy and paste. Let me talk about the differences here, what we have. In this case, we are passing in, I say series here, but this is actually a NumPy array. So what we are doing is when we call this we're going to convert the column that we're passing into NumPy. Up above, we passed in the data frame, when we passed in the column name, we pulled it off. In this case, Numba does not support Pandas as a first class object, but it does support NumPy. So if we can convert it to NumPy, we can throw it in there. So this, seer here replaces the data frame and the column name. And then all we're doing inside of here is instead of making a Python list, we're making a NumPy array, and we're sticking things into the NumPy array. And that's basically the changes there. We made this function, it takes a NumPy array instead of a Pandas data frame and the secret sauce is this decorator up here. So Numba includes a decorator that's able to do JIT compilation. So what this does is it takes your Python code and basically recompiles it so it's like fast C code. This is a really nice thing if you can make this work in what I call the naive Python version, as we showed in the previous example, it's relatively easy to convert this to this optimized version here. Now let's run this down here. I'll show it running the same piece of code, replacing our average function with this average mb. You can say that this takes 3.95 milliseconds
>
> **[3:11](https://www.linkedin.com/learning/getting-started-with-python-for-finance/optimized-solution-rsi?u=76281980&t=191)** so we're saving a little bit of time, but again, it it's milliseconds. Let's, just for fun, get a bigger data set and see how much of an impact this can make. So I'm going to make a data frame here with 10 million random entries in it. Just an FYI, if you're not familiar, Python 3 supports you putting in these underscores in arbitrary locations in numeric literals. So I like to put these in where I would put a comma. You can't use a comma because Python will treat that as a tuple and this just makes it easy to read. It's very clear that this is 10 million. Okay, so I made this [[Big Data]] frame here. Now what I'm going to do is I'm going to do my benchmark again but I'm going to time how long it takes to do our smoothing with this. And I'm going to time how long it takes to do our smoothing with our naive version. We'll let that run and finish. For those who aren't familiar, what the %%timeit cell magic does is it takes the code that's in that cell and it runs at some amount of time and it times how long it takes to run each iteration of that, and then it reports on the benchmarks of that. So this is how long it took on average plus or minus some standard deviation. You can already see that this is running a little bit longer than our optimized version. We'll let it keep going here. Okay, and it finished. Says it did seven runs and each of those runs took 4.5 seconds. So we went from 285 milliseconds to 4.5 seconds with our naive version. Basic calculation here, we'll change that to what we found here, 4.52 seconds,
>
> **[4:46](https://www.linkedin.com/learning/getting-started-with-python-for-finance/optimized-solution-rsi?u=76281980&t=286)** and it took 285 milliseconds. This is 15 times faster with very few code changes. On my MacBook Pro when I ran this, I got a larger increase from using this code. My recommendation is to write the naive version make sure it's working, and then convert that to the Numba version. Then you have easy Python code that you can debug if you want to, and you can also validate that your Numba code is working as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Pandas (Software)|Pandas]] (4), [[Big Data]] (1)
> **CLI Commands:** python (7), make (4)
> **Versions:** 5.93 (3), 4.5 (2), 3.95 (1), python 3 (1), 4.52 (1)
> **Definitions:** is a  (2), we call this (1)
> **Env Vars:** jit (1), fyi (1)
> **Analogies:** imagine (1), it's like (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/getting-started-with-python-for-finance/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-python-for-finance/next-steps?u=76281980&t=0)** - [Matt] Congratulations. You've completed the [[Python (Programming Language)|Python]] for Finance course. You might be thinking, what are the next steps? First, I strongly encourage you to practice the material covered in this course. As with any new skill, the more you practice, the more confident and proficient you'll become. You can use your own [[Financial Data]] or find some sample data sets online to practice. Second, check out my book, "Effective [[Pandas (Software)|Pandas]]." It's a bestselling pandas book that will help you master pandas. This book includes real world code that you won't find in other books. Pandas can be a challenge, so each chapter has exercises for you to get practice writing good pandas code. Third, I invite you to follow me on [[LinkedIn]]. I'm always posting code and updates on Python pandas and related topics. Finally, I encourage you to apply the concepts and techniques you've learned on your own data. This is where you can really unleash the power of pandas and make a real impact at work. Whether you're analyzing financial reports, predicting market trends, or measuring the effectiveness of investment strategies, the skills you learned in this course can be applied to a wide range of financial applications. Thank you for taking my course and I wish you all the best in your future endeavors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (7), [[Python (Programming Language)|Python]] (2), [[Financial Data]] (1), [[LinkedIn]] (1)
> **CLI Commands:** python (2), find (2), make (1)
> **Speakers:** - [matt] (1)


## Instructor

- [[Matt Harrison]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Financial Analysis

## Path Context

### In [[CFI Financial Analysis and Modeling Professional Certificate]]
← [[SQL for Finance Professionals]] | **5 of 7** | [[Using Data in Financial Analysis]] →

### In [[Python for Data Professionals in Finance]]
**1 of 5** | [[Python in Excel for Financial Professionals]] →

## Part of

- [[CFI Financial Analysis and Modeling Professional Certificate]]

## Appears In

- [[CFI Financial Analysis and Modeling Professional Certificate]]
- [[Python for Data Professionals in Finance]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)