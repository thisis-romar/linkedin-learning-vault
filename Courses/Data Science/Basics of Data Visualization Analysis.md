---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: basics-of-data-visualization-analysis
url: "https://www.linkedin.com/learning/basics-of-data-visualization-analysis"
duration_minutes: 87
duration: 1h 27m
level: Beginner
updated: 1/30/2024
learners: 35240
skills:
  - Data Analysis
  - Data Visualization
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEVVcvJXVKIFA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1706638056102?e=2147483647&amp;v=beta&amp;t=5bS8JWBCgqcGcLSBqBMbIIS8Ag46VktEiZ3jHIodgwI"
linkedin_topic: Data Science
learning_paths:
  - '[Introduction to Fundamental Skills for Data Work- Data Visualization](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Visualization.md)'
  - '[Moving from Data Analyst to Data Scientist](../../Paths/Data%20Science/Learning%20Paths/Moving%20from%20Data%20Analyst%20to%20Data%20Scientist.md)'
prev_courses:
  - '[Data Visualization- Best Practices](Data%20Visualization-%20Best%20Practices.md)'
  - '[Python Functions for Data Science](Python%20Functions%20for%20Data%20Science.md)'
next_courses:
  - '[Tableau Essential Training](Tableau%20Essential%20Training.md)'
  - '[Statistics Foundations 1- The Basics](Statistics%20Foundations%201-%20The%20Basics.md)'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Visualization","position":2,"total":7,"prev":"Data Visualization- Best Practices","next":"Tableau Essential Training"},{"path":"Moving from Data Analyst to Data Scientist","position":4,"total":11,"prev":"Python Functions for Data Science","next":"Statistics Foundations 1- The Basics"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/data-analysis
  - skill/data-visualization
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Basics%20of%20Data%20Visualization%20Analysis.md)

![Basics of Data Visualization Analysis](https://media.licdn.com/dms/image/v2/D4E0DAQEVVcvJXVKIFA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1706638056102?e=2147483647&amp;v=beta&amp;t=5bS8JWBCgqcGcLSBqBMbIIS8Ag46VktEiZ3jHIodgwI)

# Basics of Data Visualization Analysis

> If you’re looking to start exploring the value of visual analysis, this course was designed for you. Join instructor Franz Buscha as he introduces you to the basics of data visualization analysis including data types, graph elements, and the core concepts of univariate, bivariate, and multivariate analysis.Explore commonly used visualization tools for distributional analysis such as histograms, de

> [LinkedIn Learning](https://www.linkedin.com/learning/basics-of-data-visualization-analysis) | 1h 27m | Beginner | 35K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [The value of visual analysis](#the-value-of-visual-analysis)
- [**1. Basics of Analysis**](#1-basics-of-analysis) (3 videos)
  - [Types of data](#types-of-data)
  - [Basic graph elements](#basic-graph-elements)
  - [Univariate, bivariate, and multivariate analysis](#univariate-bivariate-and-multivariate-analysis)
- [**2. Distributional Analysis with Continuous Data**](#2-distributional-analysis-with-continuous-data) (4 videos)
  - [Histograms](#histograms)
  - [Density plots](#density-plots)
  - [Strip plots](#strip-plots)
  - [Box plots](#box-plots)
- [**3. Distributional Analysis with Discrete Data**](#3-distributional-analysis-with-discrete-data) (3 videos)
  - [Bar graphs and dot plots](#bar-graphs-and-dot-plots)
  - [Pie charts](#pie-charts)
  - [Radar plots](#radar-plots)
- [**4. Visualizing Multiple Distributions**](#4-visualizing-multiple-distributions) (4 videos)
  - [Multiple histogram and density plots](#multiple-histogram-and-density-plots)
  - [Multiple box and violin plots](#multiple-box-and-violin-plots)
  - [Multiple bar graphs and dot plots](#multiple-bar-graphs-and-dot-plots)
  - [Multiple pie and radar plots](#multiple-pie-and-radar-plots)
- [**5. Visualizing Relationships**](#5-visualizing-relationships) (4 videos)
  - [Scatter plots](#scatter-plots)
  - [Lines of best fit](#lines-of-best-fit)
  - [Line plots](#line-plots)
  - [Table plots](#table-plots)
- [**6. Visualizing Multi-Dimensional Relationships**](#6-visualizing-multi-dimensional-relationships) (3 videos)
  - [Matrix scatter and trellis plots](#matrix-scatter-and-trellis-plots)
  - [Bubble plots](#bubble-plots)
  - [Contour plots](#contour-plots)
- [**Conclusion**](#conclusion) (1 videos)
  - [Time to visualize](#time-to-visualize)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The value of visual analysis](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/the-value-of-visual-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/the-value-of-visual-analysis?u=76281980&t=0)** - Whether you're reading a newspaper, examining a [PowerPoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) presentation, walking down the street, studying at school, graphs and tables and data images are everywhere, and there's a reason for that. Good data visualization is one of the best tools to get complicated analytical messages across to other people. Nothing can make a message clear and louder than a beautiful and impactful data visualization. And this is especially true in modern times with a flood of data being available thanks to the internet. But even 150 years ago, English statistician and founder of modern nursing Florence Nightingale understood the power of data visualization by using pie charts and other graphing techniques to radically alter how medical data was perceived and understood. Her methods inspired people to take data seriously and act upon it, thereby saving many lives. And in this course, I want to show you the power of data visualization and how you can analyze complex data using visual techniques. Hi, my name is Franz Buscha and I'm an expert in [Statistics](../../Skills/Data%20Science/Statistics.md) and econometrics. I've been looking at data and visualizing data for over 20 years. And at its core, data visualization is all about information reduction and presenting what is essential. And in this course, I'm going to teach you how to analyze and display a wide range of data.
>
> **[1:35](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/the-value-of-visual-analysis?u=76281980&t=95)** I will examine the most important graph elements and what kind of analysis suits each data visualization. I'll show you the most common ways to analyze and display data distributions, and I'll show you the best ways to examine and visualize relationships in data. So come and join me and learn how to create effective and beautiful graphs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powerpoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **CLI Commands:** make (1)
> **Speakers:** - whether (1)


### 1. Basics of Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of data](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/types-of-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/types-of-data?u=76281980&t=0)** - You encounter and use data every day. Consider health datasets which contain complex and confidential information about patients, or think about macroeconomic time series datasets that contain GDP and inflation data over many years. In marketing, surveys are conducted to gather data about consumer preferences and datasets can be stored in many different file formats and can also be analyzed in many different software packages, but at their core, datasets all have one thing in common. They contain data. Any data visualization requires a dataset, and there are many different types of data sets. Today I'm going to walk you through how data is commonly set up and how you can use it to your advantage. Data is commonly stored in variables. In a spreadsheet, each variable is one column, and each data observation is one row. Notice how each cell in this spreadsheet contains some kind of information. Modern datasets can be extremely large, and it's not unusual to have a dataset with a thousand variables and over 100,000 observations. At its highest level, each data variable comes in two [Forms](../../Skills/Web%20Development/Forms.md), string data or numeric data. String variables are data that contains any non-numeric characters in a column of data. Non-numeric characters are any characters that are not zero to nine.
>
> **[1:33](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/types-of-data?u=76281980&t=93)** A basic example of a string variable is a name variable that contains people's names. This variable will have many string characters such as A, B, C, and D, and maybe a few numeric characters such as 1, 2, 3. Numeric variables are data columns that contain only numbers such as 1, 2, 3, et cetera. But there are different types of numeric variables. Continuous variables measured data very precisely on the real number line. These values can take any value and are often measured to many decimal places. Examples include salary or weight. Discrete variables measured data in whole numbers only. For example, the number of doctor visits can only be measured discretely. The type of data you have will determine the types of visualization options available to you. For example, string data is hard to visualize, but not impossible. [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) clouds are an example of a visualization technique that shows which words occur most frequently. Numeric data is often much easier to visualize, and in this course I'll walk you through the many different ways of visualizing numeric data. Continuous data might require special treatment if there are too many values. For example, if you have a million numeric data points, you want to present some kind of visualization that focuses on patterns in the data rather than on the individual data markers. Alternatively, discrete variables that represent categorical data such as gender, often have few values,
>
> **[3:06](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/types-of-data?u=76281980&t=186)** and these require special discrete visualization options such as pie charts or bar charts. It also matters whether you're looking at one or multiple variables. If you're examining one variable, then often you'll be interested in distributional properties of that variable. On the other hand, if you're looking at two or more variables, you'll often be interested in the relational properties of these variables, and you'll need different graph types for each of these. At the end of the day, it's fair to say that good data visualization and good data narratives come from having a solid understanding of the basic types of data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Analogies:** such as (5), for example (3)
> **Prerequisites:** set up (1), you'll need (1)
> **Env Vars:** gdp (1)
> **Definitions:** is a  (1)
> **Speakers:** - you (1)

#### [Basic graph elements](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/basic-graph-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/basic-graph-elements?u=76281980&t=0)** - Data visualization takes place on a graph or chart. And this graph could be on a computer on a piece of paper, and there are many really very many graph types. But all graphs share some basic common elements which help you interpret and analyze the data quickly and efficiently. Today I'm going to walk you through the must know graph elements, which will help you in your next presentation or project that you need to prepare graphs for. First, titles. Titles are used to label graphs and provide basic contextual information on what is being displayed. Titles are often underrated, but are one of the most important graph elements. Without titles, you'll have no idea of what's being displayed on a graph. There are different types of titles. Main titles are used to provide a high level context. Main titles are often shown at the top of a graph. Subtitles are sometimes used below main titles to provide more detailed information. Additional titles are often plotted on the axis to indicate what is being measured on each axis. These titles are placed next to each axis. If you need to provide even more information, then any remaining information is often put into the legend and notes of a graph. These are often placed at the bottom of a graph. My advice is that title should always be kept as short as possible. A good [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) range is one to four words for a main title, three to seven words for a subtitle,
>
> **[1:36](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/basic-graph-elements?u=76281980&t=96)** and one to two words for an axis title. If you have a very long name, consider using vertical or angle text. Alternatively, use specific graphs that are designed for long horizontal text, such as horizontal bar charts. Next, axis. An axis defines the reference line that is used to measure coordinates on a graph. Most graphs will have two axis; one in the vertical direction and one in the horizontal direction. Some graphs may also have a third axis to mimic three-dimensional plots. Axis can be numeric or categorical. A numerical axis counts numbers in a particular range, say 20 to 80. Once say categorical axis counts categories such as blue, red, and yellow. Axes need careful labeling. And here I'm not referring to axis title labeling, but to axis marker labeling. Each axis will have a series of markers that denotes certain values, and these markers can be spaced far apart or be placed very closely. Here's an example of a few markers with far spacing, and here is an example with many markers. If you want readers to be able to examine data points to a very fine degree, then you'll need to have a high frequency of axis markers. Then data markers. Data markers are data points on a graph. They represent the actual values
>
> **[3:08](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/basic-graph-elements?u=76281980&t=188)** of the data being visualized. Traditional markers are often black dots, but data markers can take other [Forms](../../Skills/Web%20Development/Forms.md). For example, to differentiate different categories of data, you can also use crosses, diamonds, and square markers. Also, some graphs don't use individual markers. They use lines or bars to visualize data values. These are still data markers, but not in the traditional point like sense. Data markers can also be text. Instead of a black dot, each data value could be represented by a letter or a word. Data markers are very customizable and they can significantly change the visual complexity of a plot. So be mindful of this. Colors, colors play an important role in modern data visualization. Colors can be used to identify graph elements. For example, different data groups like in this example. Colors can also be used to differentiate areas of the graph. High values might be colored in red, whilst low values are colored in green. Color palettes need to be considered carefully. They can significantly enhance your graph, but also keep in mind accessibility issues such as colorblindness. Are red and green really the best choices? Next, coordinates. Not all graphs have to traditional Cartesian coordinate systems. Cartesian coordinates are the one known y and x-axis that create a square grid, but some graphs use other systems
>
> **[4:41](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/basic-graph-elements?u=76281980&t=281)** such as polar coordinates that result in circular axes. A pie chart is a common example. Here radio angles are the important numerical measures not distant on the x and y plane. And now that you know the most important graph element, consider using them in your next project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Analogies:** such as (4), for example (2)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - data (1)

#### [Univariate, bivariate, and multivariate analysis](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/univariate-bivariate-and-multivariate-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/univariate-bivariate-and-multivariate-analysis?u=76281980&t=0)** - [Statistical Data Analysis](../../Skills/Data%20Science/Statistical%20Data%20Analysis.md) is complex, and by extension, so is data visualization. There are many different kinds of statistical methods for data analysis, and even experts don't know them all. This lesson, I'm going to walk you through the three groups of statistical data analysis, which are univariate, bivariate, and multivariate analysis. This will determine what kind of data visualization is available to you. Combined with that knowledge about different data types, you can quickly identify what kind of visual analysis might be most suitable for your needs. So what are these analyses? Univariate analysis is all about examining the properties of a single variable, and these properties could relate to the frequency of certain numbers, statistical summaries such as the means or standard deviations, or simply understanding how the data is distributed. The main purpose is to describe a single variable and find patterns that exist within it. Univariate analysis has a wide range of visualization options, depending on whether the variable of interest is continuous or categorical. If data's continuous, histograms, density plots, box plots are common visualization choices. If the data is categorical, then pie charts, bar charts, or dot plots are common graphical techniques. Bivariate analysis is all about examining two variables together.
>
> **[1:33](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/univariate-bivariate-and-multivariate-analysis?u=76281980&t=93)** This kind of analysis is all about relationships. How do the two variables of interest interact with each other? Are they positively related? Are they negatively related? Or not at all? Bivariate analysis is probably the [Statistical Analysis](../../Skills/Data%20Science/Statistical%20Analysis.md) that suits itself best for data visualization. Plotting raw data on a graph and eyeballing it is often much more powerful than estimating correlation coefficients or other [Statistics](../../Skills/Data%20Science/Statistics.md) that aggregate all the data into a single number. Scatter plots are the best known example of bivariate plots. Here, one variable is placed on the y axis and another on the x axis, and then the raw data is plotted. However, because bivariate analysis can be done on categorical and continuous variable combinations, the list of visual options is also relatively complex. For example, a scatterplot is not appropriate for visualizing how two categorical variables are related. You'll need another plot type, such as a table plot, to visualize that properly. Multivariate analysis is the most complex of statistical analysis. It examines how three or more variables are related to each other. These kind of analysis are mostly done using complex statistical methods, such as regression analysis, cluster analysis, or factor analysis. A core problem with visualizing this type of analysis is multi-dimensionality. A good rule of thumb in statistics is that each additional variable to analyze needs one extra dimension.
>
> **[3:07](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/univariate-bivariate-and-multivariate-analysis?u=76281980&t=187)** So examining three variables requires three dimensions, and four variables requires four dimensions. In a pure mathematical sense, this is easy to achieve, but in data visualization, this is hard. Data visualization is often limited to two dimensions. However, there are ways to graphically analyze three or more variables. For example, a third dimension can be faked by adding a Z axis to scatter plots, or different colors or marker symbols can be used to represent a third and fourth variable. Another possibility is to create many two dimensional graphs across a third variable. For example, this is what MRI scans do when forming pictures of body organs and physiological processes of the body. The medical imaging technique takes lots of slices to create a third dimension. Multidimensional graphs tend to be used in a specialized way and are somewhat complex to create, and the real trick is often to reduce many dimensions to only two dimensions, and that is not easy. Make sure you are aware of the kind of statistical analysis you are conducting. The type of analysis will often dictate what kind of graphing options are available to you, and that will make it easier for you to find the right one for your needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistical Analysis](../../Skills/Data%20Science/Statistical%20Analysis.md) (3), [Statistical Data Analysis](../../Skills/Data%20Science/Statistical%20Data%20Analysis.md) (2), [Statistics](../../Skills/Data%20Science/Statistics.md) (2)
> **Analogies:** such as (3), for example (3)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** mri (1)
> **Best Practices:** rule of thumb (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - statistical (1)


### 2. Distributional Analysis with Continuous Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Histograms](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/histograms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/histograms?u=76281980&t=0)** - Histograms are the most popular way to visualize how a continuous variable is distributed. It would be impossible to avoid them when conducting modern visual data analysis. Today, I'm going to walk you through how histograms are easy to generate, understand, and why they're used so often. Here is a histogram of average daily temperatures in January for cities in the United States. On the X axis, there's temperature in Fahrenheit, and on the Y axis, you see the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) 'Density.' Histograms are often presented with densities on the Y axis. Densities represent the area occupied by the bins, and in total, they all sum to one. Density is, therefore, a measure of relative frequency, which is frequency divided by sum of frequencies. Now, what does this visualization tell you? Well, it tells you a couple of things. Very few cities experience very hot or very cold days. There are not many observations at extreme values of temperature. The most common temperature is 30 degrees, and the data appears well spread between values of 20 and 60, and the data has a hint of bimodality. There is a peak at around 30 degrees and a second peak at 55 degrees. However, one very important aspect of histograms are bin sizes. The shape of a histogram is determined by the bin size. Larger bin sizes lead to less detail in the histogram,
>
> **[1:34](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/histograms?u=76281980&t=94)** but smaller bin sizes can lead to too much detail. Finding the right balance is a real art form, and there is no definitive guidance from a statistical point of view. Here are four histograms of different bin widths. Each graph has validity in different circumstances. Which will match your analysis or presentation conditions is something only you can decide. If you are interested in large ranges of the data distribution, say, between 20 and 40 degrees Fahrenheit, I'd recommend you use bigger bin sizes. If you are interested in the fine structure of the data distribution and want to focus on very specific temperatures, then you should use small bin sizes and don't be afraid to go really small. Here is an example. This default histogram plot shows a spike at 20 and 30 degrees. I'm going to overlay a histogram with 200 bins on top of this normal histogram. Its purpose is to really show you what is happening at very minute parts of the temperature range. Look at all that detail that is now presented. What you see is that a temperature of around 21 degrees Fahrenheit actually has the highest density. The second peak at 30 degrees is split into two temperatures at around 29 and 31 degrees. So this analysis tells you that the two peaks of the original histogram contains more data complexity than first assumed. As a general rule, I advise you to, one,
>
> **[3:08](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/histograms?u=76281980&t=188)** use the default bin size provided by your software. Two, change the size up and down a little to see whether this helps your analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Definitions:** is a  (3), is an  (1)
> **Best Practices:** general rule (1)
> **Speakers:** - histograms (1)

#### [Density plots](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/density-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/density-plots?u=76281980&t=0)** - Are you looking for reliability in conveying a trend about information for your large dataset? Look no further, a density plot may be your solution. In this lesson, I'm going to show you how a density plot works and how you can best use them to your advantage. Often termed kernel density plots, density plots are very similar to histograms. Their main advantage is that they offer a smoother visual presentation of the data, and they're much better at comparing multiple densities. This kernel density plot visualizes the average January temperature distribution of various US cities. The Y axis displays density, which is a relative measure of frequency. The entire area under this graph has a density of one. Higher values of densities represent higher concentrations of data in that particular region of temperature. Low density values indicate some temperatures are rare, and this often happens at the edges of the distribution as you can see here. As seen in this graph, the most common temperature value is at around 25 degrees Fahrenheit. However, you'll also see a second hump of data at around 50 degrees Fahrenheit. A key advantage of a kernel density plot compared to a standard histogram is the smoothness of the visualization. It is significantly less disruptive to the eye and easily allows readers to identify areas of the data. A common trend these days is to shade the area
>
> **[1:34](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/density-plots?u=76281980&t=94)** underneath the density plot. This gives more contrast and an even better visual look. Looks neat, right? Now I'll talk about the two parameters that define the shape of a density plot. They are bandwidth and kernel type. Higher bandwidths lead to flatter and less detailed shapes. While lower bandwidths lead to more detailed, but potentially very spiky shapes. High bandwidths are useful if you're interested in analyzing large ranges of data, while smaller bandwidths are useful if you want to examine very specific temperatures. Let me show you how the bandwidth determines the shape of a density plot. Larger bandwidths leads to too little detail, while small bandwidths lead to too much detail. Finding the right one is complex, and you should always experiment a little to see what suit to you best. Kernel type is another parameter that you can change. The kernel type influences how data points inside the bandwidth are weighed to create the overall shape. Data points further away from the center of bandwidths can have more or less weight. Here are some examples of different kernel types. Even though all the plots here have the same bandwidth, they each look different. There's a lot of mathematical complexity here, but as a rule of thumb, you should avoid changing the kernel from its default, and often, the default kernel will be Epanechnikov or Gaussian.
>
> **[3:08](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/density-plots?u=76281980&t=188)** Both these kernels produce smoother shapes than the others, and that is often the point of density plots. Density plots are a great visualization tool for analyzing continuous distributions. Use a density plot in your next project to produce a smoother and simpler visual picture than a histogram.

> [!info]- Semantic Content
>
> **Analogies:** similar to (1), picture (1)
> **Best Practices:** you should always (1), rule of thumb (1)
> **Definitions:** is a  (1)
> **Speakers:** - are (1)

#### [Strip plots](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/strip-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/strip-plots?u=76281980&t=0)** - Today, I'm going to walk you through how to visualize continuous distributions using strip plots, which emphasize simplicity and are very easy to understand. And this makes them a good choice if you want to present basic distributional information to non specialists. You might see them in marketing material or basic business presentations. Strip plots are very similar to histograms in design, but they visualize data as a series of stacked dots against a single magnitude axis. Let me show an example using average January temperature data in the United States. This is a basic strip plot. It looks very similar to a horizontal histogram, the key aspect being the stacked dots. Each dot actually represents a single data point from this temperature dataset, and this is the main feature of a strip plot. Viewers get an idea of the size of the actual data, which can't be done easily with a histogram or a density plot. Similar to density and histogram plots, viewers get a good understanding of the general distribution. For example, you can clearly see that the most common average temperature value is around 30 degrees Fahrenheit, but you can also count that there are approximately seven data points that have a temperature of around 70 degrees Fahrenheit. You just count the number of dots right here. So this is the main advantage of a strip plot. You can see the raw data.
>
> **[1:36](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/strip-plots?u=76281980&t=96)** However, while the dots represent actual data points, they're still banded into groups. And just like histograms, larger banding leads to less detail, while smaller banding leads to more detail. Here are four strip plots with a different number of dot groups. In each case, every single data point in this temperature data is still being plotted. But as you can see, the level of detail each graph offers is significantly different. More groups are great if you want more detail on particular temperatures, whilst less groups are useful if you want to talk about larger temperature ranges in general. Strip plots are a relatively simple statistical chart that might be easily dismissed as not being statistical enough. But consider using the brilliant and very intuitive strip plot when visualizing and analyzing continuous distributions.

> [!info]- Semantic Content
>
> **Analogies:** similar to (3), for example (1), just like (1)
> **Definitions:** is a  (1)
> **Speakers:** - today (1)

#### [Box plots](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/box-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/box-plots?u=76281980&t=0)** - Today, I'm going to show you the go-to plot if you want to compare many continuous distributions in one graph. It's called a box plot. Box plots are often seen in advanced data applications where a lot of information needs to be presented in a simple way. These plots provide less distributional detail than other methods, such as histograms or density plots, but they provide significantly more statistical summary information, and that in turn makes them absolutely excellent at group comparisons. Here is a box plot of average January temperatures in the United States. The first thing to note is that only one axis is labeled. There's no second axis of density. The second axis is for visualization effects only, and this will be important later when we look at multiple groups. At their core, box plots are all about quartiles. Box plots graphically present what is called the five-number summary. These are [Statistics](../../Skills/Data%20Science/Statistics.md) that include the minimum, the first quartile, the second quartile, also called the median, the third quartile, and the maximum. So how do you read the statistics? Let's start in the middle. In the middle of the box is a line that represents the median. In this case, the median average temperature in January is around 30 degrees Fahrenheit. The top and bottom of the box represent the first and third quarters, so the 25th percentile
>
> **[1:34](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/box-plots?u=76281980&t=94)** of the temperature distribution is at around 25 degrees Fahrenheit and the 75th percentile at around 50. The length of the box is called the interquartile range, and this gives a great visual depiction of where half the data is distributed. Next, two whiskers extend from the box. These whiskers represent maximum and minimum values. In this case, the minimum temperature is two degrees Fahrenheit and the maximum at around 75. The whiskers denote where the other half of the data is distributed. And together, the box and whiskers give a simple visual answer to how the data is distributed. However, in some box plots, there are data markers outside the whiskers. Here is an example of that. See these dots? These are called outliers. Most box plots determine that outliers are any data points that lie one and a half times the interquartile range away from the upper or lower quartile. In other words, these are data points that are very far away from the main core of the data. And these data points should be considered as extreme outliers. Box plots can also be flipped into the horizontal, and here is an example of that. It doesn't really matter which option you choose. I will say that horizontal box plots are slightly better if you have long labels across many different groups. Now, I have to tell you the serious disadvantage
>
> **[3:09](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/box-plots?u=76281980&t=189)** of box plots. They are very poor at picking up multimodality in data. Multimodality means that there are clusters of data across the distribution. Here is an example. Notice how the histogram plot clearly reveals two concentration of temperatures, but the box plot cannot identify the two peaks in this data. Anyone using a box plot could not infer that the data is bimoldadly distributed. So next time you are plotting out your data, use the box plot when you need to make group comparisons and stay away from box plots when you're working with multimodality in your dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (2)
> **Definitions:** is an  (3), is a  (2), is called (2), in other words (1), means that (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - today (1)


### 3. Distributional Analysis with Discrete Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Bar graphs and dot plots](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/bar-graphs-and-dot-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/bar-graphs-and-dot-plots?u=76281980&t=0)** - Bar charts are a powerful and versatile data visualization option when you're faced with categorical data. Their primary advantage is their extreme simplicity, and that means that even those who are not quantitatively minded won't have a problem interpreting the data from a bar chart. In this lesson, I'm going to show you how a bar chart presents categorical data and the features you can modify to display your data most effectively. Bar graphs use rectangular bars where the height is proportional to the numerical values that they represent. Here is a basic example. This graph displays how observations in a health dataset are distributed across five health categories. It is easy to identify from the various bar lengths that the most populous health category is the good category, followed by the regular category. Some users put labels at the top of each bar that contains the actual data values. And that would look something like this. This bar graph now presents a data visually via the bar length and in detail via numerical values. I wouldn't recommend that you use this often, as data visualization is often about information reduction. But if you need the additional detail, feel free to add data values as labels. Bars can also be plotted horizontally. This is especially used for if you have categories with long labels.
>
> **[1:35](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/bar-graphs-and-dot-plots?u=76281980&t=95)** Here's an example of a labor force dataset that has a list of occupations. I changed the Y axis to percent, which is another commonly used statistic. I think you can see the problem with this bar graph. The labeling overlaps each other. It is possible to change the font size or angle the text, but a better solution is to flip the chart by 90% like so. There, now that looks much better, doesn't it? You can clearly identify that sales occupations have the highest percent of workers, followed by professional and technical occupations. Sorting is another useful feature of bar graphs. Often, you might be interested in what is the largest and smallest category. A bar graph can help you by sorting the bars by length like so. It is now very simple and easy to see that sales occupations dominate the labor market and that farmers constitute the smallest category. A closely related visualization technique are dot plots. Dot plots or dot charts are almost identical to bar charts and their underlying concept. They replace the bar with a series of doted lines, and then plot a further dot, or marker, on that line of dots to indicate what each discrete value statistic actually is. All in all, they're identical to bar charts, but they offer an important visual alternative when bar charts feel cluttered because there are too many categories.
>
> **[3:09](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/bar-graphs-and-dot-plots?u=76281980&t=189)** Let me show you an example of what I mean. This is a visualization of the education variable in the same labor force dataset. It has many categories, and the bar graph visualization therefore presents a lot of bars. One problem with examining a bar graph with man bars is that there's a lot of area shading in the picture, and that makes it more complex for the eye to identify differences between groups. A dot chart offers a simpler and easier visualization. This is a dot plot. The removal of the long bars results in a pure focus on the dots. And this in turn makes it easier to identify statistical values and compare different groups quickly. For data with very many categories, consider using dot charts. They're brilliant at plotting many categories. Overall, bar charts [excel](../../Skills/Data%20Science/Microsoft%20Excel.md) at simplicity. They're easy to grade and easy to understand. They're well suited for graphing data across categorical values, and you don't have to worry about binwidths or complex kernel functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **Definitions:** is a  (3), means that (1)
> **Analogies:** picture (1)
> **Speakers:** - bar (1)

#### [Pie charts](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/pie-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/pie-charts?u=76281980&t=0)** - Do you remember when you saw your first pie chart? The main advantage of pie charts compared to many other categorical visualization techniques is that pie charts are commonly used in pop culture and news. A background in [Data Science](../../Topics/Data%20Science.md) is not necessary to be able to relate to them. And in this lesson I'm going to walk you through what pie charts are and how you can navigate using one. Also known as circle charts, pie charts are a circular visualization graphic, which divides data into slices to illustrate numerical proportions. And they really look like a pie. The advantage of a circular visualization is that it provides a more compact space for the eye to examine the data. In a pie chart, the arc length of each slice, the central angle, and its area are all proportional to the quantity it represents. In other words, pie charts provide three different indicators of the same numerical quantity, and that's probably why they're used so often in marketing material. They really hammer the message home. Now, I want to show you a pie chart. Here it is. This pie chart consists of a pie that contains four slices. Slices are often color-coded for better identification. The arc length, the central angle, and the area of each slice are all related. Bigger slices represent more data
>
> **[1:36](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/pie-charts?u=76281980&t=96)** and smaller slices represent less data. In this particular case, the pie chart shows how census population data is distributed across four regions of the United States. You can see in the pie chart that the region south has the most observations, whilst the region northeast has the fewest observations. And the important aspect of pie charts is all size interpretation is done between zero and 360. A pie with an angle of 90 degrees contains one quarter of the data. And to me, this is actually one of the main problems of a pie chart. Whilst a value of 360 as a hundred percent will be intuitive to many people, it won't be as intuitive as a value of 100. So if you want to access detailed [Statistics](../../Skills/Data%20Science/Statistics.md), you need to perform complex angle measurements and radial computation, and that is a disadvantage. It is possible to add percentage and frequency values to the slices, like in this example, but to a large extent, this is not very satisfying. If you create a pie chart that needs numeric values, you are probably better off using a table or bar chart. A pie chart should be used for general proportions only. One useful aspect of a pie chart is its ability to highlight particular discrete categories. Whilst many graphics use color to add emphasis,
>
> **[3:11](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/pie-charts?u=76281980&t=191)** pie charts allow a second alternative by exploding one or many pies outwards. In this example, I'm highlighting the South category by exploding that pie far out from the circle, and this really catches the eye and attracts attention to that category. Finally, be careful of many slices in a pie chart and of groups of pie charts. Here's an example of too many slices using a labor force variable. Two issues make this plot poor. Small angles on some slices make it very difficult to identify the magnitude of each slice. Another issue is the lack of distinct colors across all the categories. There are only so many different colors that you can use before some of them start to look similar. Generally, five or six slices are the limit for pie charts. Pie charts are basic. Most of the time you are better off with a bar graph or a similar derivative. But next time you have a presentation and you want to get a very basic message across, think of a pie chart.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Definitions:** known as (1), in other words (1), is a  (1)
> **CLI Commands:** make (2)
> **Warnings:** be careful (1)
> **Speakers:** - do (1)

#### [Radar plots](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/radar-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/radar-plots?u=76281980&t=0)** - In this lesson, I'm going to share with you what radar plots are and how you can use them. Radar plots are often used in situations where many groups need to be compared. You might know them from sports data, where players' attributes are compared. Like pie charts, radar plots offer a circular visualization of categorical data. But compared to pie charts, radar plots [excel](../../Skills/Data%20Science/Microsoft%20Excel.md) at plotting many categories, whilst pie charts tend to be limited to a handful of categories. A key advantage is that you can make comparisons between many groups quickly. Here is a basic radar plot. This radar plot visualizes the size of US state populations. Radar plots consist of a sequence of equiangular spokes. Each spoke represents one discreet category of whatever you're looking at. The data length of the spoke is proportional to what is being measured, population size, in this case. A line connects all spoke data values, and this gives the plot a radar-like or spider web-like visual appearance. In this case, it is easy and fast to identify that California has the largest population, followed by Florida. Delaware and Alaska have the smallest population count. Now let me show you where radar plots excel. First with a bad example. Here is a radar plot of US state population sizes
>
> **[1:35](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/radar-plots?u=76281980&t=95)** for three states. Hopefully, you agree that this is a poor visualization of the data. The limited amount of categories leads to only three spokes. Each spoke is far apart, and this requires the eye to do a lot of traveling around the picture to identify what is going on. In general, radar plots will perform poorly when you have too few categories. A pie chart will do a better job. Next is an example with all 50 US states, and that looks a lot better. This would be impossible to do with a pie chart, and even a bar chart would look messy, since it would require 50 different bars. The takeaway point here is, a radar plot condenses a lot of categorical information into a small visual image, and this allows the eye to perform quick and easy comparisons across many groups. It's easy to see here that California has the largest population, followed by New York and Texas. For added identification, I also added markers to each spoke, although this isn't necessary. Like pie charts, radar plots are not about detailed [Statistics](../../Skills/Data%20Science/Statistics.md), but about general comparison across groups. Here is a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) of warning: Do not confuse area with importance. In pie charts, the area is associated with a numerical quantity. In radar plots only the length of the spoke matters, not the area of the spoke. I recommend that you keep radar plots in mind
>
> **[3:10](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/radar-plots?u=76281980&t=190)** when you are faced with a categorical variable that has many categories.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (2), [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Warnings:** warning (1)
> **Speakers:** - in (1)


### 4. Visualizing Multiple Distributions

[↑ Back to Table of Contents](#table-of-contents)

#### [Multiple histogram and density plots](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/multiple-histogram-and-density-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/multiple-histogram-and-density-plots?u=76281980&t=0)** - Did you know that distributions are rarely looked at individually? In fact, data analysts often need to examine multiple distributions and compare these to each other. Which region has the highest temperature? Which region has the highest temperature variation? Which regions are the most similar in temperatures? These types of questions can only be answered by comparing multiple distributions. An important aspect of comparing data distributions is to plot them on one graph. This makes it significantly easier to compare data. Today I'm going to show you how you can compare different distributions using the popular histogram and density plots. As a general rule of thumb, histograms are worse at multiple distribution comparisons than density plots. I'll explain. Here's an example of temperature data across two regions plotted on a histogram. Note that I had to use transparent colors to visualize this properly. Without transparent colors, some bars would be completely hidden, but with opaque colors, overlapping histograms still don't work well because a semi-transparent bar drawn on top of another semi-transparent bar tends to look like a bar that is drawn in a third color, and that is confusing. For example, in this graph, it looks like there's a third data distribution hidden amongst the two histograms. If you really do need to use histograms,
>
> **[1:34](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/multiple-histogram-and-density-plots?u=76281980&t=94)** your best bet is to produce a mirror histogram, and that looks something like this. A mirror histogram flips two histograms around one X-axis, and now it is much easier to compare the two data distributions and see where any differences are. This is a much better visualization technique than superimposing histograms on top of each other. But for obvious reasons, this trick is limited to only two histograms. So if you want to go beyond two distributions on one graph, generally, a better solution is to use density plots. Their smooth visualization gives them more flexibility to superimpose multiple distributions. Here's an example of four different temperature distributions using density plots. Look at that. This graph is super clear and it is easy to examine all four temperature distributions, and you can't do that with a histogram. Colors and opacity are used effectively here to highlight the different groups. and examine which regions have high or low temperatures in January. For example, the northeast region temperatures tend to be bunched up between 20 and 30 degrees, whilst temperatures in the west region are much more distributed from 20 to 60 degrees Fahrenheit. However, this kind of plot is still limited. After around five or six groups,
>
> **[3:07](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/multiple-histogram-and-density-plots?u=76281980&t=187)** the graph can become very cluttered. So the final trick is to offset each group slightly on the Y-axis, and that is called a Ridgeline Plot, and it looks like this. This graph plots nine different temperature densities each on its own Ridgeline. The key here is that the Y-axis acts both as a group identifier and as a density axis. And this is a good method to plot around a dozen densities on one single graph. Comparing multiple distributions is difficult work, and this session gave you some common examples on how you might best achieve that.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for example (2)
> **Best Practices:** general rule (1)
> **Warnings:** note that (1)
> **Speakers:** - did (1)

#### [Multiple box and violin plots](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/multiple-box-and-violin-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/multiple-box-and-violin-plots?u=76281980&t=0)** - What do you do when you have to plot and analyze many continuous distributions? Histogram and density plots are limited in how many distributions they can credibly plot on one graph. But if you need to plot 10 or 20 distributions, then you need to use multiple box plots. And in this lesson, I'm going to show you where box plots [excel](../../Skills/Data%20Science/Microsoft%20Excel.md) and how to use a combination of density and box plots. Box plots have real power in comparing many distributions across groups. Let me show you what I mean. This graph here really highlights the strength of box plots. This visualization compares the temperature distribution of January and July temperatures across nine different regions in the United States. So in total, there are 18 distributions plotted on this one single graph. You can quickly determine that July temperatures are higher than January temperatures. Their temperature distributions are consistently to the right of the January temperature distributions. And you can also easily observe that South Atlantic January temperatures have the highest variation among all the different groups. And it would be impossible to create this kind of ease of comparison using any other distributional plot. So that is the power of box plots. Use them when you want to analyze many different distributions in one go. However, there is a disadvantage of using many box plots. They have problems
>
> **[1:32](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/multiple-box-and-violin-plots?u=76281980&t=92)** highlighting multimodality within distributions. So let me show you an advanced plot type that combines the best of density plots and box plots. Here it is. This is called a violin plot. In fact, this is a multiple violin plot. A violin plot is a box plot that adds a mirror density plot to the sides of the box plot. The combination of these graphical elements often create shapes that look like violins, and hence the name, violin plot. In this plot, the box plots highlight the quota values of the data distribution. And outside the box plots, two density plots highlight data peaks. The advantage of having mirrored density plots is that it helps the eye pick out important futures of the data. Wide areas represent lots of data, whilst thin areas represent little data in that particular temperature region. Whilst the shapes can look a bit funny at first glance, this is actually a really powerful way to present lots of complex information. For example, you can see that West North Central and South Atlantic temperature distributions are bimodal, whilst the two South Central regions are single modal. Violin plots combine a huge amount of visual power into one technique. And now you have the tools to choose which plot type works for your data visualization needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** for example (1)
> **Speakers:** - what (1)

#### [Multiple bar graphs and dot plots](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/multiple-bar-graphs-and-dot-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/multiple-bar-graphs-and-dot-plots?u=76281980&t=0)** - Today I'm going to walk you through what you should do when you want to examine multiple categorical variables graphically. Categorical variables are concepts such as nationality, age groups, or health outcomes. The most versatile choices will always be a bar chart in either vertical or horizontal form. Each bar represents one category, and you create as many bars as you like. Let me show you a basic example using health data. This visualization consists of five different bar charts that are placed next to each other. Each sub-graph represents one particular health group and within each health group, there are six different age groups. Look at what this graph says. The Y-axis measures frequency, so these bar charts visualize raw data numbers. Most people in this data have good health, but if you look closely, you can also observe some kind of association. All the age groups appear to be proportionately more represented in the poor health categories. Examine that further by replacing the Y-axis with percent. Indeed, it is now clear that older age groups are more likely to have poor health status. Around 5% of those with very good health are age 65-plus, whilst 25% of those with very bad health are age 65-plus. But there is an issue with this visualization. This is not one visualization, and it's five.
>
> **[1:35](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/multiple-bar-graphs-and-dot-plots?u=76281980&t=95)** These are just five pictures merged together to look like a single picture, and that means there is redundant information like axis repetition, and the eye has to travel quite far to make group comparisons. So a better visualization option is to place all the bars into one graph like this. This graph displays exactly the same information as before. Wouldn't you agree that it's much more user-friendly to the eye? Group comparison is easier here because the bars are closer together and they're on the same plane. The previously described trend of older people having worse health is much clearer here. If you want to get more simple, there is a way to display the same information using less bars, and that is with a stacked bar graph. A stacked bar graph stacks the bars on top of each other. Here's an example. Technically stacked bar charts have the same number of bars as the previous chart, but it's much less noticeable because they're stacked. Again, it's easy to identify that older individuals have poorer health. However, one important component of all the previous charts was color. Bar coloring becomes important when you have multiple bar graphs. They help you identify which bars measure the same categories. What if you don't want to use color, or you have so many categories that you run out of colors.
>
> **[3:09](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/multiple-bar-graphs-and-dot-plots?u=76281980&t=189)** In that case, you should use the derivative of a bar chart: the dot chart. Here's an example. Dot charts tend to [excel](../../Skills/Data%20Science/Microsoft%20Excel.md) at graphing information over many groups, and they're particularly suited to plotting data over many categorical variables. Dot charts are also easy to read and they're intuitive. They're a great choice for presenting data to non-specialist audiences. And now you have the tools to graph data over multiple categorical groups using both bar graphs and dot charts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (1), picture (1)
> **CLI Commands:** make (1)
> **Speakers:** - today (1)

#### [Multiple pie and radar plots](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/multiple-pie-and-radar-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/multiple-pie-and-radar-plots?u=76281980&t=0)** - What do you do when you're faced with multiple categorical variables that you want to analyze? In this lesson, I'm going to show you graphing options if you want to avoid the very linear visualization that comes with bar graphs. You can use pie charts and radar plots that offer a circular visualization of such data. Circular visualizations are often easier on the eye and can be more intuitive to many readers. Note, communicating precise [Statistics](../../Skills/Data%20Science/Statistics.md) is not as clear as compared to bar graphs, which is a disadvantage of using circular visualization methods. Look at a scenario where you'd want to compare data across two categorical variables using a pie chart. First, it is important to note that a single pie chart is by nature limited to one categorical variable. So the only way to examine two categorical variables is to produce multiple pie charts. Here is an example. These pie charts visualize a health dataset, which contains information on individuals in several age groups and their self-reported health status. The first pie chart shows that a large proportion of 16- to 24-year-olds have very good or good health status. And the last pie chart shows those age 65 or older have significantly fewer people with very good or good health. However, there's a fundamental problem with this visualization.
>
> **[1:34](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/multiple-pie-and-radar-plots?u=76281980&t=94)** Comparison of this data visualization is strenuous for the casual observer and requires the careful examination of six separate pie charts. My recommendation is to avoid using multiple pie charts where possible. If you really must display categorical data using a pie chart, then consider using a donut chart. A donut chart is simply a pie chart with a hole at its center, and this means it is now not possible to read the central angle, which is one of the inference methods from a pie chart. However, the arc length remains intact. But an advantage of this method is that you can now fit another pie chart inside the hole of the donut, and, of course, this step can be repeated many different times. So here's an example of a multiple donut chart. This chart presents the previous six pie charts, but inside each other, and not next to each other. And this makes it easier to compare multiple categories. For example, looking towards the top left of this graph, you can see that the percentage of people with bad or very bad health status increases as you go into the higher age groups. However, I think an even better way to visualize and analyze this data is via a radar plot. Radar plots [excel](../../Skills/Data%20Science/Microsoft%20Excel.md) at comparing multiple categorical variables, especially if the variables have many groups.
>
> **[3:08](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/multiple-pie-and-radar-plots?u=76281980&t=188)** So here's a radar plot visualization of the same data. This radar plot clearly visualizes how the proportion of respondents with very good or good health status drops as the age categories increase. The spoke lengths on a radar plot are much easier to compare than the arc lengths of multiple donut plots. And those are the various ways you can present categorical data with circular visualizations. You got this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - what (1)


### 5. Visualizing Relationships

[↑ Back to Table of Contents](#table-of-contents)

#### [Scatter plots](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/scatter-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/scatter-plots?u=76281980&t=0)** - What is the most basic and intuitive way to look at a data relationship? And the answer is a scatterplot. Anyone working in data analysis will not be able to avoid the basic scatterplot. Today, I'm going to walk you through when and how to use a scatterplot. A scatterplot uses dots or other marker symbols to represent values for two different variables. One variable is cast on the y-axis and the other variable on the x-axis. Scatterplots are mainly useful continuous data. They're not very useful for discrete data, but I'll give you a little trick that can overcome that. Look at a basic scatterplot. This is a scatterplot of car weight against car mileage from a small car dataset. The scatterplot suggests a negative pattern between weight and mileage. As car weight goes down, car mileage and fuel economy go up. This graph exemplifies one of the key advantages of the basic scatterplot. What better method than simply plotting the actual data on a graph? Because you can see the actual data and you can make up your own mind about it. In statistical lingo, this is called non-parametric, and this is about as non-parametric as you can get. At the same time, this is also one of the biggest disadvantages. Everyone can make up their own mind
>
> **[1:34](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/scatter-plots?u=76281980&t=94)** and maybe not everyone sees the same relationship. You should use Scatterplots when you want the viewer to make up their own mind. If you want to tell them what they should see, then you're better off using line of best fits or a combination of scatterplots and lines of best fit. Another major disadvantage is that scatterplots work poorly for discrete data, and when I say discrete data, I tend to mean data that has very few categories. In the previous graph, for example, mileage was measured discreetly, but it didn't cause any problems for the plot because there were Circa-30 unique categories. Here is an example of a scatterplot where both variables are highly-discrete. This scatterplot graphs a categorical repair indicator with five categories against a binary variable that represents foreign or domestic car origin. As you can see, this plot is not very informative. It looks like there are only seven data points on this graph, but actually, there are 74 observations. There are all stacked on top of each other, so a simple little trick here is to jitter the data. Here is how this looks. Jittering is the process of randomly moving markers from their true value, and this means everything you see in this plot is actually fake, but you can now see some of the data densities within the individual categories.
>
> **[3:10](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/scatter-plots?u=76281980&t=190)** There is a limit to how well this works and it works better with smaller samples. Finally, another great advantage of scatterplots is their ability to use custom markers. Marker symbols can be any color or shape and can be constructively used to bring additional information into the plot. For example, here's a scatterplot that uses different colors for foreign and domestic cars whilst also labeling the markers with text. This scatter plot offers a lot of detail and a lot of information. The text markers help identify particular data points whilst the colors help identify different groups of data. Think about when you can next use a scatterplot in visualizing your dataset. Scatterplots have a lot of potential for bespoke customization and continue to remain one of the most powerful visual tools available to data analysts.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is called (1), is an  (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (2)
> **Speakers:** - what (1)

#### [Lines of best fit](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/lines-of-best-fit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/lines-of-best-fit?u=76281980&t=0)** - A problem with basic scatter plots is that you need to examine all the data points and then infer what you think the relevant relationship of the two variables might be. Not everybody thinks the same. In this lesson, I'm going to show you how scatter plots are often combined with lines of best fit, which attempt to summarize bivariate data relationships. Here's an example of a basic line of best fit combined with a scatter plot. This scatter plot plots car data on weight and mileage. Each data marker represents a different car type. The scatter plot is relatively straightforward to interpret. Cars with higher weight have lower mileage, and vice versa. However, you're helped in this interpretation by the line of best fit. This particular line of best fit summarizes the data in such a way that the total distance between all the individual data point and the line is minimized. Any other straight line through this data would result in more distance between the data points and the line of best fit. A key advantage of this line of best fit is that it clearly indicates that the data is downward sloping. In this case, the line has a coefficient of -108, which means that for every one unit increase in mileage, car weight decreases on average by 108 pounds. Great! Lines of best fit [excel](../../Skills/Data%20Science/Microsoft%20Excel.md) at summarizing data relationships and are the perfect companion for scatter plots.
>
> **[1:38](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/lines-of-best-fit?u=76281980&t=98)** At the same time, there are some difficult choices that you need to make. The line of best fit just shown was an example of a parametric line of best fit. It parameterized a data relationship, and in that particular case, it used one parameter. But of course, you can use more parameters. More parameters results in line of best fit with curves. Two parameters leads to a quadratic relationship, three to a cubic relationship, and so forth. All these ways are called parametric methods. An advantage of parametric methods is that they're transposable. That means I can tell you that Y equals to something X, and you can now imagine what this relationship means. A disadvantage is that you need to decide how many parameters to use. So the other alternative is to use non-parametric methods. Non-parametric lines of best fit let the data speak for itself and apply less restrictive assumptions. However, these lines of best fit are not very transposable. It's very hard to tell others about it. So let me show you what I mean. Here is a scatter plot of car price data against car mileage data. Now, let's plot a parametric linear line of best fit. This line has a slope of -238. Now let's add a quadratic line of best fit. This line has two parameters in the form of a quadratic equation. Finally, add a non-parametric line of best fit.
>
> **[3:14](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/lines-of-best-fit?u=76281980&t=194)** This line has no equation attached to it. It's not possible to describe it easily. So which line of best fit best represents the data? Which one should you choose? Well, it depends. The non-parametric line of best fit let's the data speak for itself, so that would be my first choice. It suggests the relationship between car prices and mileage is at first, sharply negative, but then it flattens out. However, this relationship is not transposable. I can't tell others that the line is somehow squiggly. The quadratic line of best fit suggests that the relationship is negative, but then positive. I think this is also a decent characterization of the data. The linear line of best fit suggests that the relationship is just negative. I think this is also correct, but perhaps not as correct as the quadratic fit. And herein lies the great challenge of lines of best fit: choosing the right one. While your experience is the best remedy for this, I generally recommend that you start with a non-parametric line of best fit to check whether there's evidence of non-linear relationships, then use a parametric line of best fit, and use a linear or quadratic specification. Generally, one of these three choices will be the best one to use. I encourage you to practice choosing the right line of best fit in your next scatter plot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** make (1)
> **Documentation:** specification (1)
> **Analogies:** imagine (1)
> **Speakers:** - a (1)

#### [Line plots](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/line-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/line-plots?u=76281980&t=0)** - Visualizing a trend in a scatterplot doesn't have to be complicated. Lines of best fit, use various statistical methods to summarize data relationships. But there is another way to visualize trends in a relationship plot that doesn't involve any complexity. In this lesson, I'll walk you through line plots which visualize a trend by simply connecting consecutive data markers. In other words, line plots connect each scatter plot marker to the next marker. Here's an example of a line plot. Here is a graph of US life expectancy over the last 100 years. This dataset consists of 100 observations. There is one life expectancy observation per year, and each marker on the graph is connected via a direct line. You can clearly see that life expectancy has made significant improvements in the last century, but you can also observe a significant dip around the time of the Spanish flu epidemic in 1918. So what is so good about this graph? Well, the main advantage is that it doesn't reduce the data to any best fit statistic. Each market is connected and the data tells its own story. Anybody can infer their own relationship from this graph. You're not forcing a statistical narrative. The line connections make it easier to visually aggregate data evolution. For example, here's the same graph with outline connections,
>
> **[1:37](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/line-plots?u=76281980&t=97)** and this is a poorer version of the previous graph. Once a general upward trend remains identifiable, it is significantly more difficult to identify a trend. in the early part of the 20th century. Life expectancy varies considerably year by year, and it's hard to figure out which marker comes next. Line plots are especially useful when one of the variables is time. Time be it measured in days, months, or seconds is ordered, and data often evolves gradually over time, and this makes line plots the go-to visual technique for analysis of time variation. If you have a lot of data points, it's also advisable to drop the individual markers and only keep the line connections, and this makes for a smoother visual experience. Here's an example of what I mean. This looks very smooth and not cluttered as the previous graph. This is a good example of where less is more. Do note the importance of ordering in your data when using line graphs. Here's an example of what happens when your data is not ordered. This is a spaghetti plot and it's not useful to anybody. An important variation of line graphs are area graphs. Area graphs highlight the area between the line and a fixed point or between two lines, and this allows you to better analyze differences. Here's an example of an area graph
>
> **[3:11](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/line-plots?u=76281980&t=191)** with a fixed reference point. In this case, the lowest life expectancy value in 1918. Area graphs de-emphasized the general trend of data series and emphasize how far away a data series is away from a reference point. They're best used when examining two data series at once. Here's an example with male and female life expectancy. This graph is great at visualizing differences over time between men and women. Here, female life expectancy is the top data series, whilst male life expectancy is the bottom data series. You can quickly identify from this plot that female life expectancy increased compared to male life expectancy in the latter part of the 20th century. Line plots have many uses, their main advantage is their simplicity. If one of your variables is highly ordered such as time and there's not too much radical data variation in the other variable, then line plots are one of the best relationship visualizations you can use.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), in other words (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - visualizing (1)

#### [Table plots](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/table-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/table-plots?u=76281980&t=0)** - When both relationship variables are measured in discrete categories, scatterplots don't work well. The traditional way of examining how two categorical variables are related to each other is via a simple two-way table, something like this. This data table contains two discrete variables, one measures health outcomes, and the other looks at age groups. You would expect health to get worse with age, and the problem here is that to evaluate this hypothesis, you need to explore a lot of numbers, and that takes time, and it's complex. You need to acquire each number individually and relate it to one or many other numbers. Tables are great if you want lots of detail, but not so good if you want to summarize data quickly. In this lesson, I'm going to show you where table plots can help. Here's an example of the same data in a table plot. Table plots take each cell of the previous two-way table and convert the numerical content into a small bar chart. One bar chart in this plot is added to maximum size, and all the other bar charts are relative to that one. In this case, the maximum bar chart is at this cell, and it contains 809 observations as indicated at the bottom of this plot. Visually, this plot allows you to very quickly identify how discrete data is distributed across the various categories.
>
> **[1:34](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/table-plots?u=76281980&t=94)** It appears there is a bit of a gradient in this data and that older people are more likely to have poorer health outcomes. The great advantage of a table plot is that this interpretation can be done in a split second, thanks to the clear visual presentation of the data. Of course, a disadvantage of table plots is that they contain less detail than traditional numerical tables. So if you want the best of both worlds, you can also add the relevant cell [Statistics](../../Skills/Data%20Science/Statistics.md) back in. Here's an example of that. This plot repeats the first data table, but also visualizes the distribution of the data so that it's much easier to pick up aggregate patterns among the different categories. Also, remember that you are free to choose different statistics for these plots. I used frequencies here, but it would be simple to replace the relevant statistics with column, row, or cell percentages. It just depends on what you want. If you are interested in percentages, another clever way to visualize and examine discrete distributions is via a mosaic plot, sometimes called a spineplot. A mosaic plot is identical to a stacked bar graph with the addition that a second x axis is introduced, which indicates the relative size of each category on the first X axis. Here's what I mean. This plot visualizes what percent of data in each age category has good or bad health.
>
> **[3:08](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/table-plots?u=76281980&t=188)** Around 20% of young adults have very good health, and over 60% have good health. Color differentiation is used to good effect in this graph to quickly allow the eye to pick up different categories. Finally, at the top is a second x axis. The second x axis shows the percentage of observations in each age category. You now see that 20% of the observations in this data are age 16 to 24, and only 5% are age 75 or more. The advantage of this is that by visualizing the size of each stack, users can determine which age category is important or not. In sum, a mosaic plot combines multiple tabular elements into one single graph. Now you can identify when to use this really great advanced data visualization technique. You should consider using this or table plots for your next categorical data analysis project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (3)
> **Definitions:** is a  (2)
> **Speakers:** - when (1)


### 6. Visualizing Multi-Dimensional Relationships

[↑ Back to Table of Contents](#table-of-contents)

#### [Matrix scatter and trellis plots](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/matrix-scatter-and-trellis-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/matrix-scatter-and-trellis-plots?u=76281980&t=0)** - Multivariate visualization is difficult because there aren't enough dimensions to keep adding more and more variables to traditional scatterplots. Each variable needs its own dimension and even three variables needs serious compromises as the third dimension has to be pseudo visualized on a two-dimensional plot. So another option is to visualize complex relationships via many by varied plots. In this lesson I'm going to walk you through a family of plots that are often called matrix plots. They create many graphs in one plot. Their principle is that they can condense a large amount of information onto many graphs that are then stitched together so that a natural connection between each sub graph exists. And this makes it easier to examine these complex graphs as the eye has natural reference points. Let me show you an example. Imagine you have a complex car data set with many variables that relate to car characteristics, and you want to know how some of this data is related to each other. A pure statistical way of doing this is via a correlation matrix. This matrix presents the correlation estimates between various variables in this dataset. Car price and car mileage are negatively related. Car weight and car length are highly, positively related. A problem with this matrix of numbers is that it aggregates the data.
>
> **[1:34](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/matrix-scatter-and-trellis-plots?u=76281980&t=94)** It doesn't reveal any fine structures, so a natural way to explore this data further is to replace each of the numbers with a separate scatterplot, and that might look something like this. This is a matrix scatterplot. Each sub graph is a scatterplot of two of the five possible variables against each other. It's now possible to delve behind the statistical correlations and explore the data in more detail. For example, some relationships look non-linear, and some appear to have multiple groups within them. Would not be possible to determine that from basic summary [Statistics](../../Skills/Data%20Science/Statistics.md). However, this is a poor version of a matrix scatterplot. Whenever you create a graph with many sub graphs, you need to think carefully about removing unnecessary information. These graphs all have separate labeling on the y and x axis, for example. In addition, the diagonal graphs are little value since they all have a correlation of one. So here's a better version of the same graph. This graph shows how matrix plots should be formatted. The diagonal plots have been replaced with variable names, and the labels on the y and x axis have been changed so that all the graphs now slot together. This makes it much easier for the eye to traverse this complex plot and identify by varied relationship patterns. A cousin of the matrix plot is a trellis plot.
>
> **[3:10](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/matrix-scatter-and-trellis-plots?u=76281980&t=190)** A trellis plot is a type of matrix plot that uses the same scale and axis choices in each sub graph. And this allows for a faster graph to graph comparison. Such a plot is useful if you want to examine the same relationship across many different groups. Here's an example, using a health dataset. This graph plots the relationship between weight and height across five health groups and four different geographies, and that leads to a total of 20 different groups. A key difference between this plot and the previous plot is that each sub graph has the same y and x axis, and that makes it easy to compare sub graphs. In this case, it doesn't look like the relationship between weight and height differs across any of these categories. So that's a finding, I guess, key to using matrix and trellis plots properly is careful and considerate access formatting, and now you have the tools to do this correctly, to harness these powerful graphs that present a huge amount of information to others.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Definitions:** is a  (5)
> **Analogies:** for example (2), imagine (1)
> **Speakers:** - multivariate (1)

#### [Bubble plots](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/bubble-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/bubble-plots?u=76281980&t=0)** - Bubble plots are a smart way to visualize a third dimension without having to resort to faking a third dimension on a two-dimensional plot. Bubble plots do this by modifying data marker sizes of a normal scatter plot, and the size of the data markers represent a third numerical quantity. And this allows bubble plots to answer questions of how a Z variable relates to an X and Y variable. Larger markers represent high values of Z while smaller markers represent small values of Z. Look at an example. Here is a scatterplot of life expectancy across GDP per capita in log form. Each data marker represents one single country in the world. There seems to be a positive relationship between GDP and life expectancy. People living in richer countries have a higher life expectancy. But there is an issue with this plot. Notice how this plot gives all countries equal weight. A better representation of this data might be to weigh each marker by population size. And you can do that with a bubble plot where marker circles are inflated proportionally to population size. This is a famous example of a bubble chart. This bubble chart identifies the weight to place on each marker. China and India both have big populations,
>
> **[1:34](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/bubble-plots?u=76281980&t=94)** so their markers dominate this graph. Other countries have tiny populations, so they almost disappear from this plot. Does it matter? You might ask. The general relationship still looks the same as before. More GDP equals higher life expectancy, right? Well, yes, it does matter. Here's the same plot with two lines of best fit. The weighting of the markers does indeed matter. It changes the relationship between life expectancy and GDP per capita ever so slightly. There's more curvature to the relationship than before. And this is the power of a bubble chart. It can add an important third dimension to a relationship. Keep in mind, bubble plots are all about marker sizes and not about marker types. Bubble plots don't always need to have circular markers. Here is an example of a bubble plot with square markers. Depending on your visual preferences, this might be a better and more convenient way to visualize your data. Feel free to experiment to find something that suits you. Lastly, bubble plots have another great advantage that other multidimensional plots don't have. They can use color to add a fourth dimension to the plot. Here's an example. I separated each marker by color where the color reflects their continent.
>
> **[3:08](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/bubble-plots?u=76281980&t=188)** The data is now split across Africa, America, Asia, Europe, and Oceania. And this adds a fourth dimension and therefore, variable to the plot. It's now possible to examine the relationship between GDP per capita, life expectancy, and population size by different geographies. For example, it looks like Africa has a lot more variation in its GDP-life expectancy relationship than Asia. This is a great and famous example of the power of a bubble chart. Do be careful, bubble charts don't work well when you have too many data points as everything will overlap into one large data blob. If you're looking to add a third or fourth dimension to data visualization analysis, bubble charts are an excellent solution.

> [!info]- Semantic Content
>
> **Env Vars:** gdp (6)
> **Definitions:** is a  (3), is an  (2)
> **Warnings:** keep in mind (1), be careful (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - bubble (1)

#### [Contour plots](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/contour-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/contour-plots?u=76281980&t=0)** - Multidimensional visualizations are difficult and can be hard to understand, but if you need to visualize a multidimensional relationship that has exactly three variables, then a contour plot is a well understood and intuitive visualization option. Contour plots allow you to answer the question how does a variable Z change as a function of x and y? Today, I'm going to walk you through contour plots and how they are especially useful when there's a clear and smooth relationship between all three variables. Contour plots do this by visualizing data in two dimensions and then using constant contours to represent a third dimension. Well, this contour plot visualizes subsea elevation in an area in the United States. So it's a map, and that's how most people will have some familiarity with contour plots, via maps. In this case, the Y and X axis represent a set of coordinates. Together they form a square and they represent an area of land, and the Z variable measures depth in feet. A legend identifies which color values and contours represent which areas of depth, and you can imagine this legend to represent a third dimension, the Z axis. You can now see that there are some areas of low depth, shaded in yellow and some areas of high depth, shaded in purple. Overall, you get a good understanding
>
> **[1:34](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/contour-plots?u=76281980&t=94)** of the geography in this area. However, contour plots are subject to various choices, including how many contour lines should be computed and how many colors you use. Here's an example with 20 contours instead of five, but with poor color spacing. This visualization offers much more detail. There's more detail in the mountains and valleys, but the color choice was done in such a way that all you see is blue, so it's not very useful. Here is a better example with 100 contours and a three color gradient with better spacing. This three color range extends the available colors and helps visualize high, medium, and low regions in the data more accurately. Great. Contour plots can be used anytime when you are interested in a relationship between three variables. An important requirement is that all three variables are measured continuously and that you have a reasonable amount of data across the measurement space of X, Y, and Z. And that is why contour plots often need thousands of observations to work properly. Here's an example, using a labor force data set. I want to know, do I need to work many hours or stay in my job a long time to get a high hourly wage, or is it both? The answer looks like this.
>
> **[3:08](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/contour-plots?u=76281980&t=188)** This is an example of a poor contour plot. It's poor for the following reasons. One, there isn't enough data. Large regions of the plot have no observations, which is why the plot interpolate many wage values of zero. Two, the relationship between these variables is not clear and not smooth. Contour plots are poor visualization choices when the data relationships are not clear. So one way to save this analysis is to first run a parametric model and then visualize the predictions from that model. This allows me to create artificial observations in the data space where there was no data. Here's an example where I used regression analysis to do just that. This is the same data, but now from a predictive model the contour plot tells me has both tenure and hours increase, the expected hourly wage increases, but not quite linearly. Contour plots are powerful plot types. Use them when you are interested in the relationship between three variables, but remember to have lots of data.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** imagine (1)
> **Best Practices:** remember to (1)
> **Speakers:** - multidimensional (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Time to visualize](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/time-to-visualize?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/time-to-visualize?u=76281980&t=0)** - You've now covered a huge range of graphs and plots and I want to thank you so much for being part of this journey. I hope you feel more confident in visualizing data and analyzing data from graphs. You have the knowledge to use a wide range of analytical graphs in different ways and in different circumstances. And you're able to identify which graph will be the most useful graph for your data needs without experimenting. If you want to learn more about graphing and data visualization, here are some useful tips. First, you need to build up your skills with a [Statistics](../../Skills/Data%20Science/Statistics.md) program. An easy one is [Microsoft Excel](../../Skills/Data%20Science/Microsoft%20Excel.md). [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) provides a wide range of basic graphing tools, and most of the graphs presented here are accessible via Excel. For those who want to access more complicated graphs, you should look to train yourself on a general purpose statistical software, R, [Stata](../../Skills/Data%20Science/Stata.md), SPSS are all common examples. These programs have access to many more data visualization options, and they really allow you to craft and shape your data visualization. If you want to go 100% professional, you'll need to learn [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) coding. Here you can build graphs from the ground up and create some of the most powerful visualizations available. There are two other areas that are useful to learn about. Statistics underpins all data visualization, so learn more statistics.
>
> **[1:34](https://www.linkedin.com/learning/basics-of-data-visualization-analysis/time-to-visualize?u=76281980&t=94)** There are lots of courses for beginner, intermediate and advanced learners. Check out platforms like [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. I'm sure you'll find one suitable for your needs. And finally, this isn't often verbalized, learn about art and psychology. There's a fine art to beautiful graphs and also aspects of human behavior. For example, you can learn about color theory to know which colors match or contrast best, or you can learn about Gestalt Theory, that tries to explain how the mind perceives, [Forms](../../Skills/Web%20Development/Forms.md) and organizes visual behavior. And most importantly, stay curious. So thanks for watching. You can stay in touch with me via LinkedIn. Good luck in your future journey through the amazing world of [Data Science](../../Topics/Data%20Science.md) and statistics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (4), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Microsoft Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1), [Stata](../../Skills/Data%20Science/Stata.md) (1)
> **CLI Commands:** python (1), find (1)
> **Env Vars:** stata (1), spss (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - you (1)


## Instructor

- [Franz Buscha](../../Instructors/Data%20Science/Franz%20Buscha.md)
- [Madecraft](../../Instructors/Data%20Science/Madecraft.md)

## Skills Covered

- Data Analysis
- Data Visualization

## Path Context

### In [Introduction to Fundamental Skills for Data Work- Data Visualization](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Visualization.md)
← [Data Visualization- Best Practices](Data%20Visualization-%20Best%20Practices.md) | **2 of 7** | [Tableau Essential Training](Tableau%20Essential%20Training.md) →

### In [Moving from Data Analyst to Data Scientist](../../Paths/Data%20Science/Learning%20Paths/Moving%20from%20Data%20Analyst%20to%20Data%20Scientist.md)
← [Python Functions for Data Science](Python%20Functions%20for%20Data%20Science.md) | **4 of 11** | [Statistics Foundations 1- The Basics](Statistics%20Foundations%201-%20The%20Basics.md) →

## Appears In

- [Introduction to Fundamental Skills for Data Work- Data Visualization](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Visualization.md)
- [Moving from Data Analyst to Data Scientist](../../Paths/Data%20Science/Learning%20Paths/Moving%20from%20Data%20Analyst%20to%20Data%20Scientist.md)

## Related Courses

_Courses sharing skills:_

- [Advanced Python in Excel- Data Analysis and Visualization](Advanced%20Python%20in%20Excel-%20Data%20Analysis%20and%20Visualization.md) — Data Analysis, Data Visualization
- [Creating Interactive Tableau Dashboards](Creating%20Interactive%20Tableau%20Dashboards.md) — Data Analysis, Data Visualization
- [R for Data Science- Analysis and Visualization](R%20for%20Data%20Science-%20Analysis%20and%20Visualization.md) — Data Analysis, Data Visualization
- [Python in Excel for Financial Professionals](Python%20in%20Excel%20for%20Financial%20Professionals.md) — Data Analysis, Data Visualization
- [Learning Power BI Desktop](Learning%20Power%20BI%20Desktop.md) — Data Analysis, Data Visualization

---

[↑ Back to top](#)