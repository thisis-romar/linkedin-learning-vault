---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them
url: "https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them"
duration_minutes: 60
duration: 1h
level: Advanced
updated: 6/26/2025
learners: 12184
skills:
  - Data Analytics
  - Data Visualization
  - Statistical Data Analysis
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQEJmnmyihizbQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1674166620072?e=2147483647&amp;v=beta&amp;t=_XeQkFAyjriwExkldbz_eTz6qmkB00sgdRjMqMAZaJI"
linkedin_topic: Data Science
learning_paths:
  - '[Master the Concepts of Data Visualization and Storytelling](../../Paths/Data%20Science/Learning%20Paths/Master%20the%20Concepts%20of%20Data%20Visualization%20and%20Storytelling.md)'
prev_courses:
  - '[Data Visualization for Data Analysts and Analytics](Data%20Visualization%20for%20Data%20Analysts%20and%20Analytics.md)'
next_courses:
  - '[Visualizing Advanced Charts and Graphs](Visualizing%20Advanced%20Charts%20and%20Graphs.md)'
path_nav: '[{"path":"Master the Concepts of Data Visualization and Storytelling","position":6,"total":7,"prev":"Data Visualization for Data Analysts and Analytics","next":"Visualizing Advanced Charts and Graphs"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/data-analytics
  - skill/data-visualization
  - skill/statistical-data-analysis
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Advanced%20Data%20Visualizations-%2012%20Uncommon%20Plot%20Types%20and%20How%20to%20Use%20Them.md)

![Advanced Data Visualizations: 12 Uncommon Plot Types and How to Use Them](https://media.licdn.com/dms/image/v2/C4D0DAQEJmnmyihizbQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1674166620072?e=2147483647&amp;v=beta&amp;t=_XeQkFAyjriwExkldbz_eTz6qmkB00sgdRjMqMAZaJI)

# Advanced Data Visualizations: 12 Uncommon Plot Types and How to Use Them

> Suggested Prerequisites Have a basic understanding of how data visualization works. Be familiar with why different kinds of plot types are used. Have some knowledge of univariate, bivariate, and multivariate statistics. Know this is not a coding course and will not teach how each graph is recreated. Data visualization is a critical component of data analysis and data science. In this course, econo

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them) | 1h | Advanced | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Take your data viz game to the next level](#take-your-data-viz-game-to-the-next-level)
  - [What you should know](#what-you-should-know)
- [**1. Advanced Data Visualizations**](#1-advanced-data-visualizations) (12 videos)
  - [Ridgeline plots](#ridgeline-plots)
  - [Violin plots](#violin-plots)
  - [Heat plots](#heat-plots)
  - [Sparkline plots](#sparkline-plots)
  - [Rainbow plots](#rainbow-plots)
  - [Table plots](#table-plots)
  - [Mosaic plots](#mosaic-plots)
  - [Matrix plots](#matrix-plots)
  - [Ternary plots](#ternary-plots)
  - [Chernoff faces](#chernoff-faces)
  - [Sankey plots](#sankey-plots)
  - [Dumbbell plots](#dumbbell-plots)
- [**2. Continuing Your Data Viz Learning Journey**](#2-continuing-your-data-viz-learning-journey) (1 videos)
  - [Next steps and additional resources](#next-steps-and-additional-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Take your data viz game to the next level](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/take-your-data-viz-game-to-the-next-level?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/take-your-data-viz-game-to-the-next-level?u=76281980&t=0)** - [Franz] Data visualizations are everywhere, all around us: pie charts, bar charts, histogram, line plots. You've seen them in newspapers, advertisements, television company reports, website blogs. They're simply everywhere and hidden underneath them there's a secret world of colorful and complex graphs that can help you visualize much more data in more interesting ways. Understanding and mastering these advanced graphs will expand your analytics capability and help you become a better data communicator. I'm going to show you new ways of how to visualize data distributions that help you compare multiple data series at once. I'll show you how to use colors to add important and previously hidden statistical information. And you'll be able to turn complex tables into visual plots, use specialized graphs on small datasets, and with different variable types. Come and join me as I outline 10 advanced data visualizations that will help you analyze complex data and make your work stand out.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [franz] (1)

#### [What you should know](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/what-you-should-know?u=76281980&t=0)** - [Instructor] What should you know for this course? This is not a complicated course, but you should have some basic understanding of how data visualization works. This course is not an introduction to data visualization. Rather, it builds on the foundations of many basic graph types such as histograms, line plots, and scatter plots. You should have some understanding what these kind of plots are used for. You'll also need to have some understanding of univariate, bivariate, and multivariate [Statistics](../../Skills/Data%20Science/Statistics.md). These are important statistical concepts that define different types of graphs. Univariate analysis is all about analyzing a single variable. Bivariate analysis examines how two variables are related. Whilst multi-varied analysis examines how many variables are related. Finally, many of these advanced graphs cannot be created in [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md). They require general purpose statistical software, such as R, [Stata](../../Skills/Data%20Science/Stata.md), or [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Even when using these advanced programs, you will often need to download user written functions or commands. They don't exist in the default installations. This course is not a coding course and will not teach you how each graph is created. There are many coding courses available, but in each session I will highlight which functions and commands can create these graphs, so that you have a basic starting point if you want to create these visualizations yourself. The priority of this course is to demonstrate each graph to you. This course has no equations, and the focus is on understanding concepts
>
> **[1:32](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/what-you-should-know?u=76281980&t=92)** intuitively and demonstrating this with clear examples.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1), [Stata](../../Skills/Data%20Science/Stata.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Analogies:** such as (2)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)


### 1. Advanced Data Visualizations

[↑ Back to Table of Contents](#table-of-contents)

#### [Ridgeline plots](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/ridgeline-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/ridgeline-plots?u=76281980&t=0)** - [Narrator] Imagine you're a city planner concerned about changing patterns and temperature in your city perhaps due to [Climate Change](../../Skills/Software%20Development/Climate%20Change.md). Before taking policy action you need to better understand how weather patterns vary over the year in your city, and for that, you'll need to examine weather data. And in particular, analyze how weather data is distributed. One common way to do that is via a kernel density plot which excels in highlighting where data is concentrated in a given data range. These plots provide a smooth visualization that allows users to really focus on peaks and valleys in the relevant data distribution. This plot shows a generic kernel density plot. The Y axis is labeled density and this is a measure of relative frequency. The sum of the density is the area under the graph and it adds up to one. High values of density represent higher concentrations of data in that particular region of the x-axis. These plots are great at giving users a fast and detailed overview of how data is distributed. However, these plots don't work well when you need to examine multiple distributions. This often happens when you need to analyze groups. For example, a city planner may need to analyze how maximum daily temperatures varies month by month and that requires 12 different density plots. In this plot, 12 density plots are placed side by side making a detailed comparison of local temperature ranges tricky. Since the plots are too far away from each other. In this plot, the density plots are overlaid
>
> **[1:35](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/ridgeline-plots?u=76281980&t=95)** on top of each other, making local comparisons easy. However, it's almost impossible to figure out which plot belongs to which month. There are too many plots. This is where ridgeline plots can help. Ridgeline plots, also known as joy plots, plot each density plot on a single graph, but split the plots across the y-axis. The Y-axis now serves a dual purpose. One, it identifies numeric scale such as density frequency, and two, it identifies categories, and that means they can plot a lot of data. This is a ridgeline plot of maximum daily temperatures in Seattle in the last 10 years, grouped by month. Each density plot here is colored and made semi-transparent making it easy to identify each month, and then compare these across. We can very quickly identify that maximum temperatures increase in the summer months and decrease in the winter months. We can also analyze a specific month and identify for example, that July has a long right tail indicating that extremely high temperatures of 100 or more Fahrenheit occur only in July. With ridgeline plots, you can now examine data within the category and the cross categories all in one graph. Here's another example of ridgeline plot. This example plots new covid cases in 27 countries over time. Notice how easy it is to pick up highs and lows of new covid cases in each country. There's an incredible amount of data displayed on this single graph. If you want to create ridgeline plots yourself
>
> **[3:08](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/ridgeline-plots?u=76281980&t=188)** you'll need specialized software. If you're using R you can use the GG Ridges function. In Stats, you can use the user written command joyplot. And in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), you can use the joypi function. Ridgeline plots are a great way to visualize several densities in one single graph. Consider using them if you're faced with complex distributional comparisons over multiple groups.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Climate Change](../../Skills/Software%20Development/Climate%20Change.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Analogies:** for example (2), imagine (1), such as (1)
> **Definitions:** is a  (2), known as (1)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** python (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [narrator] (1)

#### [Violin plots](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/violin-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/violin-plots?u=76281980&t=0)** - [Teacher] What do you do when you can't decide whether to use a box plot or a kernel density plot? Box plots provide less distributional detail than density plots, but they are significantly better at providing statistical summary information. They cannot identify local details or multimodality but they're good at highlighting how data is distributed globally. Density plots, on the other hand, are the opposite. They are great at highlighting local details, but they're poor at displaying basic statistical confirmation. Here's an example of the problem using maximum daily temperatures in Seattle. The box plot on the left shows that the medium temperature is at around 60 degrees Fahrenheit. The 25th and 75th percentile are at 50 and 70 degrees respectively, but the box plot cannot identify that there is a peak of data at around 50 degrees or that there is a second smaller peak of data at around 70 degrees. Only the density plot can do that. So what do you do if you need both? Well, you need a violin plot. A violin plot is a combination plot, specifically it is a box plot that has a rotated kernel density plot on each side of the box. The combination of these graphical elements often creates graphs that look like violins, and hence the name. Here's an example of a violin plot. This violin plot shows the maximum daily temperature in Seattle over the last 10 years. The graph consists of a box plot that shows the maximum and minimum temperatures.
>
> **[1:32](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/violin-plots?u=76281980&t=92)** The box in the middle shows the 25th, 50th and 75th percentile temperatures. The medium temperature in this case is at around 60 degrees Fahrenheit, but thanks to the density plot that envelopes the box you can now also see where most of the temperature data is located. A wider density indicates that the temperature value occurs more frequently and a narrow density indicates that the temperature value occurs less frequently. There appears to be a peak of data at around 50 degrees and possibly a second peak at 70 degrees. Moreover, temperatures above 100 are extremely rare. This graph provides a lot of detail and is really helpful when analyzing distributions carefully. Violin plots also work well when faced with multiple distributions. This example shows daily temperatures split into maximum and minimum temperatures grouped into individual months of the year. All in all, there are 24 different data distributions visualized on this graph. The power of these violin plots allows analysts to identify that June temperatures have the highest variation of maximum temperatures, whilst December has the highest variation of minimum temperatures. August appears to have some bimodality in its data for maximum temperatures, whilst the same is true for minimum temperatures in December. This kind of rapid and detailed distribution analysis could not be performed by individual box or kernel density plots. If you want to create violin plots yourself
>
> **[3:04](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/violin-plots?u=76281980&t=184)** you'll need specialized software. [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) or SPSS cannot create these graphs easily. If you're using R, you can use the ggplot2 library which contains a violin plot function. In [Stata](../../Skills/Data%20Science/Stata.md), you can use the user written command, vioplot and in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) you can use the seaboard library which contains a violin plot function. Violin plots are not without disadvantages. They are complex to understand for those not familiar with statistical graphs. Basic distributional plots such as histograms or box plots tend to be easier to understand. However, violin plots pack a huge amount of statistical power into a single visualization and they're a great choice for experts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1), [Stata](../../Skills/Data%20Science/Stata.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** is a  (4)
> **CLI Commands:** python (1)
> **Env Vars:** spss (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [teacher] (1)

#### [Heat plots](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/heat-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/heat-plots?u=76281980&t=0)** - [Instructor] [Big Data](../../Skills/Data%20Science/Big%20Data.md) is everywhere. And data sample sizes are creeping up. Gone are the days when your dataset only consisted of 100 observations. Tens and hundreds of thousands of observations are common these days. And that can lead to a serious problem when graphing relationship data using a basic scatterplot. And that problem's called overplotting. Let's pose a quick research question. I have a dataset that contains information on more than 30,000 people and their health characteristics. I'm interested in how blood pressure is related to body weight. A standard way to visualize such analysis is via a scatterplot, like this one. However, as you can see here, it is difficult to identify anything other than a large blob of data points. There is a suggestion that the relationship is positive, but this is based on the data points around the circumference of this big blob. to be certain of the relationship, we need to see inside the blob and identify how the 30,000 data points are distributed. Solutions include transparent markers, like this, or smaller markers, but these continue to fail when observation counts are very large. This is where heat plots [excel](../../Skills/Data%20Science/Microsoft%20Excel.md). Heat plots bin portions of data into certain shape bins and then assign a color value to that bin depending on how much data is inside that bin. They're very similar to a histogram except that there are two histograms interconnected via the Y and X-axis. The result is a plot of squares across the graph. Here is an example.
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/heat-plots?u=76281980&t=93)** As you can see, the general outline of this heat plot is the same as the previous scatterplot. But, you are now presented with a color gradient that identifies how many observations are inside each square on this graph. You can identify the massive data in the center of this big blob and it appears that the relationship between blood pressure and weight is indeed positive. However, heat plots are considered advanced and need two parameters, the number of colors used and the bin sizes. Here are two examples of the same data using two colors versus 25 colors. The first graph emphasizes extreme differences, high versus low, and can be useful for exploring where peaks in the data are located. The second graph provides much more granular detail. But it becomes hard to identify small differences within the plot since the colors are starting to merge together. Also, you need a larger dataset to be able to use more colors. My recommendation is to use around 10 colors as default. Now let's look at different bin sizes. The first graph on the left uses a few bins and the second graph on the right uses many bins. Importantly, detail is lost in the first graph and in the second graph there is too much detail. Bin size choices are very important and there is no obvious default recommendation. It's very important that users always experiment with bin sizes after creating their first heat plot.
>
> **[3:10](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/heat-plots?u=76281980&t=190)** Vary your bin sizes to see what changes in your analytical picture. Heat plots are so flexible that you can even use different bin shapes and different coloring. Here are two variations of a standard heat plot. The left graph is a hexplot that uses hexagons instead of squares. The advantage of hexagons is that they connect diagonally. They're better at visualizing diagonal relationships. The second plot is a sunflower plot that de-emphasizes use of color gradation and replaces the data count with lines called petals inside hexagonal bins called sunflowers. These plots are a good choice when coloring is not an option. Heat plots can be created with many different software packages. In Excel, you should use conditional formatting. In SPSS, you can use the chart builder. If you use an R, you can use the heatmap function. In [Stata](../../Skills/Data%20Science/Stata.md), you can use the user written heatplot command. Whilst in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), the Seaborn library has access to heat plots. Heat maps are more complex than standards scatterplots. They have important options that you need to understand. However, when faced with a large dataset that results in an overlapping scatterplot, they are a fantastic way to visualize what is happening inside the data blob.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (2), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Stata](../../Skills/Data%20Science/Stata.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** is a  (4), is an  (1)
> **Analogies:** similar to (1), picture (1)
> **CLI Commands:** python (1)
> **Env Vars:** spss (1)
> **Speakers:** - [instructor] (1)

#### [Sparkline plots](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/sparkline-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/sparkline-plots?u=76281980&t=0)** - [Instructor] Line plots often don't come alone. In many cases, you need to plot multiple lines on a graph. This is especially common in finance where you may need to chart the stock value of several companies, and that can lead to spaghettification of a graph. Spaghettification happens when too many lines sit on top of each other and you can no longer identify trends or data values. One solution to this problem is a sparkline plot, especially if the precise data values are not that important. Sparkline plots consist of one or more line charts distributed in a vertical stack so that the lines are not overlaid anymore. Most importantly, each subplot is often reduced to its core elements to emphasize how line trends change. Specific values are de-emphasized, labels are sparse, and the general line shape is emphasized, not its detail. Sparkline plots are all about reducing complexity and allowing users to follow individual trend lines clearly and without clutter. These graphs are very much about extreme visual shrinkage and that can even mean removing all of the axis information. Let me show you. Here is investment data for 10 companies. Not a lot of data, but you can already see two problems with it. Two companies have very large values, masking the other companies line trends into a flat line, and eight companies have such similar investment values, that their line trends overlap.
>
> **[1:34](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/sparkline-plots?u=76281980&t=94)** The problem of scale and overlap is solved by giving each sparkline its own custom scale, and by stacking the lines vertically and that results in a sparkline plot, like this. Notice how the sparkline plot emphasizes wider, rather than taller shapes. It's easier for the eye to follow, from the left to the right, and to reduce complexity, only the maximum and minimum scale values are shown on the Y-axis. This makes it easy to compare the companies investment pattern change over time. A neat little trick is to completely remove the Y-axis and label the minimum and maximum points directly onto the sparkline themselves. Here, you can see that the Y-axis has been removed and you can now read the values directly on each sparkline. This also helps identify where in time the maximum and minimum positions occurred. However, the focus of a sparkline plot is on trends over time and not on finding the maximum and minimum values. These are just visual guides and don't offer detailed [Statistics](../../Skills/Data%20Science/Statistics.md). Another advantage of sparklines is that they can be easily integrated into tables and reports to be used to back up qualitative statements. Here's the same data in [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) showing a data table, which in turn is summarized by a sparkline column and that in turn is summarized by a qualitative statement. That data reduction process from raw data, trend, and interpretation, is very clear, and easy to follow. To create a sparkline in Excel,
>
> **[3:08](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/sparkline-plots?u=76281980&t=188)** use the sparkline option in the Insert tab. In R, the library devtools has a sparkline function. In [Stata](../../Skills/Data%20Science/Stata.md), you can use the user written command sparkline, and in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) you can install the sparklines function. Sparkline plots should be used when you have line plots overlapping or with vastly different magnitudes, and you do not require exact numerical detail. They are a great form of data reduction and are visually very appealing. They allow quick data identification and are great for qualitative data comparisons. Think about using them when you have these kind of circumstances.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (2), [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Stata](../../Skills/Data%20Science/Stata.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Rainbow plots](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/rainbow-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/rainbow-plots?u=76281980&t=0)** - [Instructor] What can you do when you have an overplotted line plot that consists of too many lines to make sense of? Well, you need a rainbow plot. Let me explain. Here is the problem. This is a small time series plot with 48 different lines. Each line traces the evolution in the weight of an animal on a farm. A farmer may want to know how the starting weight of an animal evolves over time and how such animals compare to each other. The problem is that this graph is overplotted. There is too much information and it is difficult to identify individual lines. You could make the line semi-transparent, but it doesn't really help. It's still hard to see what's going on. Now, if we plot each animal on its own graph, the weight evolution of each animal can be examined. But comparing them is very difficult since the eye needs to travel around a lot and there is no axis detail. One solution to this problem is to go back to the first graph, but to use color gradation effectively. And this is what a rainbow plot is. Rainbow plots are the generic name for plot types that emphasize gradual color changes across a range of ordered data. It can be any set of colors, but rainbow colors are useful because they encompass the full spectrum of visible colors that the human eye can see. And this gives users maximum flexibility in highlighting different areas of the graph. Here's the first graph as a rainbow plot. The mess of black lines has now been colorized
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/rainbow-plots?u=76281980&t=93)** and each animal has its own unique color. The color is a function of the starting weight. Animals with a higher starting weight have a red color whilst those with the lower starting weight have a blue color. A gradual color shift takes place between the heaviest and the lightest animal. It is now possible to identify the following patterns in this data. On average, heavy animals stay heavy whilst lighter animals stay lighter. However, there are some movers over time. And the final color pattern is not as graded as the beginning. And this means there's variation in outcomes. Starting ranks only partially correlate with end ranks. Finally, it is possible to trace some individual lines also. For example, the heaviest animals at the beginning week appears to be the ninth heaviest towards the end. Other color choices can be used, of course. While the a previous example used a rainbow color palette, here you can see a two-tone palette with green and yellow gradation. This makes the heavy and light and start and end positions even sharper, even though there are some loss of information around the middle weights. Rainbow plots work especially well when there are naturally ordered categories. And they're not limited to line plots or time series plots only. Any graph can be colorized in a graded fashion. For example, this graph contains many box plots that show hourly income by different age groups. And rather than having the x-axis
>
> **[3:07](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/rainbow-plots?u=76281980&t=187)** identify 47 different age groups with lots of labeling required, here you have a simple legend identifying the minimum and maximum ages. The remainder is a rainbow colorization that provides an easy distinction between the age ranges of each box. If you want to create a rainbow plot yourself, you'll need specialized software. In many cases, you'll need to identify color packages that help you build color ramps inside a plot and this will require coding experience. However, if you're using R, you can use the rainbow package that does it all for you. Rainbow plots are all about color gradation. They're especially useful if you have a large amount of overlapping data and standard transparency methods don't work. They're best used when your groups are ordered. Lastly, do remember that people with visual disabilities, such as colorblindness, may have a problem with these kind of plots.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (2)
> **Prerequisites:** you'll need (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Table plots](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/table-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/table-plots?u=76281980&t=0)** - [Instructor] How do you visually analyze two discrete variables with many categories? Traditionally, this is done using standard two-way tables. Where rows and columns identify categories whilst individual cells contain numerical values that identify how many observations are in each of the combination of categories. The problem is when there are many categories the number of cells quickly increases, making it a long and hard process to visually identify any relationships or interesting features. Here's an example of a small health data set that contains two categorical variables. H and self-reported health status. As you can see, there are lots of individual numbers in this table. Data comparison and analysis will take time since you need to visually acquire each number in related to another number. This table is great if you want all the detail but it's not so good if you want to quickly summarize this information and that is when table plots come in handy. Table plots fill each cell with a graphic or a symbol as opposed to a number. The size of that graphic is related to the numerical value in that cell. Visually, this kind of plot allows users to quickly identify how discrete data is distributed across various categories. But this comes at the cost of information and statistical accuracy. Here is an example of the previous table but visualized as a table plot. Each cell of the previous table is converted
>
> **[1:34](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/table-plots?u=76281980&t=94)** into a small bar chart. One bar chart in this plot is at its maximum size and all the other bar charts are relative to that size. In this case, the maximum bar chart is at this cell and it contains 901 observations. Visually, this plot allows readers to quickly identify how discrete data is distributed across various categories. From this plot, it appears that older people are more likely to have poorer health outcomes. This interpretation can be done in a split second, thanks to the clear and easy visualization of this table plot. It would take significantly longer using the previous numerical table to make the same inference. Table plots allow you to quickly summarize a table pictorially and offers uses a much fast interpretation of a complex data table. It probably won't be very useful for binary values but when you're faced with many discreet values, it will make a real difference. You should be aware of two important decisions when using a table plot. You can include numeric cell values to get more detail but this comes at the expense of more complexity. And you can change the cell graphic to any custom symbology, not only bar charts. Here's an example of adding cell values to a table plot. This allows users to perform any kind of complex computation with this data. However, the plot is more complex since it now contains the visual element of the previous table plot
>
> **[3:07](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/table-plots?u=76281980&t=187)** and the numeric element of the previous numeric table. You can also change to symbology. Here I'm using a workforce data set where each of the categorical variables have 12 or 13 different values. In this plot, there are circles that also overlap, giving a much better idea of where large numbers are concentrated. Of course, you can change circles to triangles and here is an example of triangles. Or you can even use arrows of different sizes that don't overlap. Each graph has a different visual feel and it is up to you to find the appropriate symbology. But when in doubt, use simple bar charts. They are the easiest to compare across cells since their height is what matters, not their area. Table plots can be created in a variety of ways. Any program that can create a basic scatter plot can produce a table plot as long as the marker values can be weighted by the frequency of the underlying data cell. There are also some user written packages available. In R, you can install the tabplot package. And in [Stata](../../Skills/Data%20Science/Stata.md) you can use the tabplot user written command. Table plots are a great visualization technique for large two-way tables. They ease the burden of presenting a large table in a presentation or in a report and provide a simple and effective visual narrative on how discrete data is distributed.
>
> **[4:40](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/table-plots?u=76281980&t=280)** However, they can lose statistical precision in their most simple form.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stata](../../Skills/Data%20Science/Stata.md) (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is an  (2)
> **Warnings:** be aware (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Mosaic plots](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/mosaic-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/mosaic-plots?u=76281980&t=0)** - Two categorical variables are often analyzed using two way tables. Rows and columns identify categories of each variable and individual cells contain numeric information. The problem is that users of such tables are often interested in two pieces of numerical information. Cells can contain either frequency values or they can include percentage values. Moreover, there are three different types of percentages. There are row column and cell percentages, and that results in four different pieces of numeric information that each cell can ultimately contain. Analyzing such data either requires a lot of tables or tables that contain a lot of data. The alternative is to visualize such results via stacked bar graphs but even then you'll need multiple graphs. However, a mosaic plot sometimes called a spine plot can plot both frequency and one of the percentages. This reduces complexity and avoids having to look at multiple graphs. This table here has two categorical variables from a small health data set. The column variables are health categories and the row variables are age groups. Each cell contains the frequency count, the column percentage, the row percentage and the cell percentage. That's a lot of data here and normally a user only needs frequency and one of the row or column percentages. So let's go ahead and visualize the frequency and column percentages data into a stacked bar chart. Stacked bar charts are a great way
>
> **[1:34](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/mosaic-plots?u=76281980&t=94)** to plot two-way tables visually. In these examples here, each age group bar is split into smaller bars that represents health categories. From the left frequency plot, it is easy to identify that there are few observations as age increases. However, the frequency graph is not good at conveying relative frequency, making it harder to identify whether older people have proportionally worse health outcomes. That is addressed by the second column percentage graph that clearly shows that the proportion of people with very good or good health status decreases as age increases. So both graphs convey important statistical information. A mosaic plot is identical to a stacked bar graph with the addition of a second x-axis which highlights the relative size of each category on the first X-axis. The idea is to provide two sets of [Statistics](../../Skills/Data%20Science/Statistics.md), frequency, and percentage to a reader in a visual fashion. Here is an example. As you can see, the plot shows the percentage of people in each health status by age category. It's easier to see that young people have high proportion of good health outcomes, whilst older people have higher proportions of bad health outcomes. The key innovation of this plot is the second x axis at the top of the graph. The axis divides the age groups into percentages of relative frequency. In other words, when an age group bar is wide, it contains a lot of observations
>
> **[3:08](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/mosaic-plots?u=76281980&t=188)** and when it's small, it contains few observations. For example, the 16 to 24 age group contains just over 20% of all the observations in this data. The 75 plus age group contains around 5%. If the total sample size is known, then it's basic maths to work out the underlying frequency numbers. Users can now decide whether some age groups should carry more or less weight in their analysis of this data. Mosaic plots can be created in a variety of ways. They're not easy to create in [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) or SPSS. In R, you can install the ggplot2 package which has a mosaic function. In [Stata](../../Skills/Data%20Science/Stata.md), you can use the user written spine plot command and in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), you can use the mosaic function from the stats models package. Key to a mosaic plot is to understand that each stack has a different width representing how much data is in that stack. They allowed users to examine both frequency and percentage data and allow users to determine whether a stack is important or not. However, be careful with categories that have a very low observation count for this can result in very thin stacks that are hard to read.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1), [Stata](../../Skills/Data%20Science/Stata.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** is an  (1), in other words (1)
> **Prerequisites:** you'll need (1), install (1)
> **CLI Commands:** python (1)
> **Env Vars:** spss (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - two (1)

#### [Matrix plots](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/matrix-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/matrix-plots?u=76281980&t=0)** - [Instructor] Understanding how many different variables are jointly related to each other is a key component of data analysis. Such analysis is often performed prior to formal model building, such as regression analysis. A common method is to produce a correlation matrix that tells you how variables are correlated via a single number between zero and one. This approach, however, reduces complex bivariate relationships to a single number. Any nuance in detail about the relationships is lost, which may be crucial for modeling purposes. So another option is to visualize complex relationships via many by bivariate plots. And this leads to a family of plots that are often called matrix plots. Matrix plots do something that I generally advise against, but in this case it's a valid option. They create many graphs on one plot. Matrix plots condense a large amount of information into several graphs that are stitched together, forming a natural connection between each sub graph. This makes it easier to examine these complex graphs as the eye has natural reference points everywhere on the graph, and that in turn allows for a lot of information to be displayed. Here, I have a small data set about cars. There are variables that relate to car characteristics. If I wanted to model what factors influence car prices in a regression, or any other type of model, I first have to examine how each of these variables is related to each other
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/matrix-plots?u=76281980&t=93)** to gain a better understanding of my data structure. To do that, I can use a correlation matrix representing the correlation between the various variables. Note that matrices like this are symmetrical. Information is repeated in each half, the top and the bottom. Car price and car mileage, here, are negatively related. Car weight and car length are highly positively related. But I cannot determine whether there are non-linear relationships in the data or whether there is grouping in this data. So a natural way to explore this data further is to replace each of the above numbers with a separate scatter plot. And then you get a matrix plot. A matrix scatter plot, in this case. Each sub graph is a scatter plot of two of the five possible variables plotted against each other. It is now possible to delve behind the statistical correlations and explore the data in much more detail. For example, some relationships look non-linear and some appear to have multiple groups within them. It would not be possible to determine that from the basic correlations we saw earlier. However, this is a poor version of a matrix scatter plot. Whenever you create a graph with sub graphs, you need to think carefully about removing unnecessary information. The previous plot all had separate labeling on the Y and X axis for each sub graph, for example. In addition, the diagonal graphs add little value, since they all have a correlation of one. You should also bring them much closer to each other
>
> **[3:08](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/matrix-plots?u=76281980&t=188)** and avoid gaps between graphs. So here's a better version of the same graph. This graph shows how matrix plots should be formatted. The diagonal plots have been replaced with variable names, and the labels on the Y in X axis have been minimized. In addition, all the graphs now slot together and this makes it easier for the eye to traverse this complex plot and identify bivariate relationship patterns. A cousin of the matrix plot is a trellis plot. A trellis plot is a type of matrix plot that uses the same scale and axis choices in each sub graph. And this allows for much faster graph to graph comparison. Such a plot is useful if you want to examine the same relationship across many different sub groups. Here's an example, using a health data set. This graph plots a relationship between weight and systolic blood pressure across 20 different groups, five different health groups, and four different age groups. The key difference between this plot and the previous matrix scatter plot is that each sub graph has the same Y and X axis and that makes it easy and very fast to compare sub graphs. In this case, it looks like the relationship between weight and blood pressure differs across health groups, but also across age groups. Matrix and trellis plots are created using specialized software. In R, you can use the default pairs function. In [Stata](../../Skills/Data%20Science/Stata.md), you can use the default graph matrix command. And in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), you can use this scatter matrix function
>
> **[4:43](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/matrix-plots?u=76281980&t=283)** that comes with the plotty.express library. Key to using matrix and trellis plots is to carefully and considerately label the axis. Such plots can quickly overwhelm inexperienced users and those without an analytical background. But if used properly, they can be powerful graphs that present a huge amount of detailed statistical information to users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stata](../../Skills/Data%20Science/Stata.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** is a  (5)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** python (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Ternary plots](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/ternary-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/ternary-plots?u=76281980&t=0)** - [Instructor] Trivariate data analysis looks at how three variables are related to each other, and it usually involves some kind of statistical model building. Here, data is summarized into a reduced set of parameters. But this can lead to information loss and errors, a state a nuances may not be modeled properly. However, visualization of three variables is difficult. Three-dimensional scatter plots are not true 3D, these are pseudo 3D graphs in two dimensions and require rotation to understand. However, in the unique case where three variables add up to a constant sum, then the data points are actually constrained to a triangulous subset of a higher dimensional plane. An example of this might be voting intentions between three political parties, the chemical composition of compounds, or what determines GDP by country. All these measures might add up to a constant, such as one if they're a fraction or a hundred if there are percent. These data points can then be plotted on a two-dimensional graph without loss of information. To do that, we use something called ternary plots, these are also known as triangle plots. Ternary plots are not cartesian plot types with X and Y coordinates. They are very centric plot types with Y, X, and Z coordinates. Let me show you. Here is a small data set that I want to visualize. It contains three variables and each variable measures what contributes to GDP and percent. This data tells you whether regions in the world
>
> **[1:34](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/ternary-plots?u=76281980&t=94)** are agriculture, industry, or services dominated. Here is a 3D scatter plot approach. As you can see, a single 3D plot alone doesn't help very much. Even with better labeling, 3D plots require multiple viewing angles and rotation to understand. And this makes them difficult to transfer to a report or to use in a [PowerPoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) presentation. To solve this, we can use a ternary plot. Each side of this triangle represents one measurement. Agriculture, industry, and services. The data points represent regions of the world and the coordinates of these data points consist of three values. The three edges of this graph represent values of 100% for one variable. This in turn means the other two variables must be set at 0%. And the center of the graph is identified by three lines that divide the triangle. Any data points stationed at the center of this graph will have values of circa 33, 33, and 33% of the three different variables. Don't be confused by 50% values, variables can't have percentages of 50, 50, and 50%. These triangles identify regions in which one variable is greater than the other two. To identify an individual data point, follow the grid lines back to the edge according to that angle. So for example, this data point furthest to the right has around 5% agriculture, 47% industry, and 47% services. Ah, approximately.
>
> **[3:07](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/ternary-plots?u=76281980&t=187)** Let me show you the actual values of each data point to see if I was correct, and yes I was. 6, 47, and 47. So, roughly I was correct. Ternary plot are useful to quickly identify how data points are trivariately distributed. If I change the labels, then I can quickly identify that all regions are services dominated. But in North America, agriculture is very low. Whilst in South Asia it is highest. Ternary plots can also be used when you have many observations. They're especially useful to compare groups. Here's an example with all the countries in the world split by African versus non-African countries. In general, most countries are concentrated in the lower left triangle, indicating dominance of this service industry in each country. However, some African countries are in the upper triangle, indicating an agricultural dominance in these economies. Using ternary plots in such a way, allows you to quickly summarize groups and identify patterns in their data. If you want to create ternary plot yourself, you'll need specialized software. If you're using R, you can use the TernaryPlot() function that comes with the ternary package. In [Stata](../../Skills/Data%20Science/Stata.md), you can use the user written triplot command. And in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), you can use the Plotly Express library which has the px.scatter_ternary() function. Ternary plots are a unique way to visualize three-dimensional relationships. They only work when the variables sum to a constant and they're difficult for layman to understand.
>
> **[4:41](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/ternary-plots?u=76281980&t=281)** However, they're significantly better than 3D scatter plots, lose no information, and allow you to quickly analyze a lot of complex data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powerpoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) (1), [Stata](../../Skills/Data%20Science/Stata.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** is a  (2), known as (1)
> **Env Vars:** gdp (2)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** python (1)
> **Code Identifiers:** scatter_ternary (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Chernoff faces](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/chernoff-faces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/chernoff-faces?u=76281980&t=0)** - [Instructor] Sometimes, data analysis takes on an almost qualitative component. Rather than summarizing many hundreds or thousands of observations into a particular statistic, the focus of analysis might be on the observation themselves, and this often happens when you have small data sets. For example, this could be the characteristics of a small group of people on a medical trial, or it could be a product data set where various [products](../../Skills/Software%20Development/Microsoft%20Products.md) and their characteristics are captured. A question that occurs in such data sets is often, which observations are similar and which are not? The standard way to answer such a question might be with a long table output of the data and examining a large number of variables by hand. This kind of multivariate analysis can take time, be strenuous on the eye, and of course, be prone to human error. Thankfully, there's a graphical way that makes use of our own natural inbuilt specialism. Chernoff faces are a way to visualize multivariate data across a small set of observations. The core idea is that data is visualized into human faces, and that face characteristics such as hair color, eyebrow size, mouth shapes, nose shapes, all represent different quantities of data. And because humans are by nature and by birth very much attuned to identifying faces, it can be easier to spot outliers or particular patterns in the data. Let me show you an example, here is a small data set with only 12 observations. This data comprises fuel consumption
>
> **[1:32](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/chernoff-faces?u=76281980&t=92)** and aspects of car design and performance characteristics for cars from 1974. If you wanted to find cars that are similar to each other, you could look at each role of data, examine their relevant car characteristics, and then try to match them in some way. Now, that seems quite cumbersome. Certainly, just glancing at this table doesn't really reveal any particular or important [Data Structures](../../Skills/Software%20Development/Data%20Structures.md), and this is where Chernoff faces can help. Here are 12 Chernoff faces, each represents one observation in the data. Each facial characteristic in this plot is associated with a different variable. Higher values of one variable will lead to bigger chins or darker hair, for example. In this case, each face consists of six different facial characteristics, each representing one variable. Without going into detail about what each facial characteristic represents here and what quantities are being measured, one can still make some basic qualitative comparisons across these 12 observations. For example, the Dodge Challenger and AMC Javelin cars appear to be very similar type of cars, and a quick [Google](../../Glossary/Service/Google.md) search confirms that they even look the same. That is the ultimate aim of Chernoff faces, to allow you to quickly and intuitively determine which observations are very different or which observations are very similar across a wide range of different variables. Here is another example with a bigger version of this same data set. To reduce complexity, only half faces are drawn.
>
> **[3:07](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/chernoff-faces?u=76281980&t=187)** This reduces overplotting, but leads to no information loss since faces are symmetrical. Looking at this graph, you can quickly identify groups of cars that are all very similar. Here for example, and here, and here. Doing this via standard analytical methods would've taken much, much longer. You'll need specialized software to create Chernoff faces. In R, you can use the aplpack library and use the Faces function. In [Stata](../../Skills/Data%20Science/Stata.md), you can use the user-written Chernoff command. And in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), you can use the ChernoffFace package to help you create Chernoff faces. Chernoff faces are a relatively qualitative graphical method and can only be used on small sample sizes. They attempt to greatly reduce the complexity of multivariate analysis by presenting a simple set of visuals. They're not good for detailed [Statistical Analysis](../../Skills/Data%20Science/Statistical%20Analysis.md) and can only work with circa 10 to 15 variables, anymore and the faces will become too overplotted with features. Consider using Chernoff faces when you have a small data set and you're comparing many raw data points instead of building models of statistical aggregations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1), [Google](../../Glossary/Service/Google.md) (1), [Stata](../../Skills/Data%20Science/Stata.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Analogies:** for example (4), such as (1), similar to (1)
> **CLI Commands:** find (1), make (1), python (1)
> **Env Vars:** amc (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Sankey plots](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/sankey-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/sankey-plots?u=76281980&t=0)** - [Instructor] Many real-world datasets involve quantities moving from one category or stage to another. For example, money flowing through a household budget, or energy moving through a power system. Traditional visualization, such as bar or line graphs, can't easily express both the direction and magnitude of those flows in a single view. Sankey Plots offer an intuitive way to visualize such data. A Sankey plot is a flow diagram in which the width of each link or band is proportional to the quantity it represents. A Sankey plot consists of nodes and links. Nodes represent categories or stages in the data process, links represent the transfer of flows drawn thicker for larger volumes. The links are usually drawn as lines or sometimes arrows to the big direction. If there are no arrows, the flow is from left to right across the plot. Let's have a look at a simple example using Household Spending. Understanding how households allocate their money is important to many social scientists and policy makers. Here is a simple example of Household Spending. Here, spending is broken down into categories, and certain categories, like Housing, have a larger spend against them. The simple example is probably best visualized using a table such as this, but you can also turn it into a Sankey plot. And here it is. This is a simple example of a Sankey plot. The idea is that there's a flow
>
> **[1:32](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/sankey-plots?u=76281980&t=92)** from household income on the left to various expenditure categories on the right. You can see from the connecting lines that housing expenditure occupies the largest spend categories. Now let's turn this into a more serious example. Here is another version of this data. This time there are various income sources and various spending categories, and this Sankey plot looks more complex. The plot now consists of multiple income nodes on the left and multiple expenditure nodes on the right. This graph makes it obvious that income and expenditure have a more complex relationship, for example, different incomes can flow to the same expenditure. In this case, freelance income flows to both entertainment and miscellaneous spending. And it's easier to see that salary remains the biggest determinant of income, and that most of salary goes onto housing. This still remains a somewhat basic Sankey plot, but the advantages should become apparent. Let's make it one step more complicated. Here's the same data, but expanded into different subcategories of expenditure. This table is beginning to look rather complex, and it would probably be best represented by a Sankey plot. Here is that Sankey plot. There are now three distinct nodes in the Sankey plot: income nodes, spending nodes, and subcategories spending nodes. This complex plot allows you to quickly identify
>
> **[3:08](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/sankey-plots?u=76281980&t=188)** to which major spending category income is allocated to, and where it finally ends up in the subcategories. You just need to follow the connecting lines and examine their relative size. For example, it's easy to identify that most freelance income goes towards entertainment, of which the majority of then goes on to travel, and the remainder is spent on streaming. There are many more things you can quickly pick up from this graph that you couldn't quickly identify from the table. You should use Sankey Plots whenever you need to visualize flow data. Examples could include energy or resource flows, which show you how energy is generated and consumed, budget allocations or cash flow analysis, which show you how money is made and spent, or migration or population movements between regions, which show you where people come from and where they go, or process throughput or network traffic tracking, which shows you where traffic originates and where it finishes. Lastly, here's a very advanced example of a Sankey plot. This is real data of UK Energy Flows taken from the UK Department for Energy security and Net Zero, it's freely available. Examining this very large and complicated table will take a very long time. And here is the official public flow chart of the same data using a Sankey plot. Notice how careful coloring and labeling helps users understand this graph. This is a necessity for complex plots, but it absolutely beats looking at the table.
>
> **[4:45](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/sankey-plots?u=76281980&t=285)** To keep your Sankey plots both beautiful and readable, you should, where possible, limit the number of nodes to between five and 10 to avoid visual clutter, you should pick a color palette that has good contrast, and you should clearly label your nodes and your flow widths, and you should avoid excessive ribbon crossings, and if they must cross, try to use opaque colors, so that ribbons don't disappear behind one another. To build a Sankey plot, you need a dataset with three core variables, a source variable, a target variable, and a value variable. If your raw data is at the individual transaction level, which might often be the case, you first need to collapse your data into category-level totals. Here is a small example of how an individual-level dataset is collapsed into the correctly formatted dataset For Sankey plots. To generate Sankey Plots, you can use the networkD3 or ggsankey packages in R. You can use the sankey user-written command in [Stata](../../Skills/Data%20Science/Stata.md), or you can use the Sankey function in the Plotly package in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Alternatively, you can create Sankey plot with RAWGraphs for free using an internet browser. Sankey plots are uniquely powerful for visualizing directional flows at a glance. If your data has flow elements, or you need to visualize splits, mergers, or transfers in your data, consider generating a Sankey plot. You'll need source and target categories and a value measure that connects both.
>
> **[6:20](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/sankey-plots?u=76281980&t=380)** Complex Sankey plots do require careful graph management, but if you put in the effort, Sankey plots are one of the most beautiful and clear ways to present flow data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stata](../../Skills/Data%20Science/Stata.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** is a  (5)
> **Analogies:** for example (3), such as (2)
> **CLI Commands:** make (1), python (1)
> **Code Identifiers:** networkd3 (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Dumbbell plots](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/dumbbel-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/dumbbel-plots?u=76281980&t=1)** - [Instructor] Many data stories are focused on changes or differences, whether you're looking at test scores before and after an intervention or comparing results between countries. You want a visual that makes these differences clear and easy to interpret. Traditional bar charts don't always make changes or differences clear. They can become cluttered and they can make it hard to see pair changes. And that is where dumbbell plots come in. Dumbbell plots address this by using a simple structure, two points connected by a line, and this immediately draws your eye to the size and direction of the change. Each item, like a student or a country, is represented by line with a point at each end. The left and right points show the before and after values or any two states you want to compare. The connecting line is what makes it a dumbbell plot. This makes differences in trends stand out. Colors often used to denote the direction of change. So let's have a look at a simple dumbbell plot using test scores. For example, the teacher wants to know if his or her teaching methods succeeded in improving test scores in a class. Tabulating this data would look something like this. Each student is identified and their score before and after the teaching intervention is shown. This table provides a lot of statistical detail, but it's going to take readers a minute to figure out whether individual changes are positive or negative
>
> **[1:33](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/dumbbel-plots?u=76281980&t=93)** and what the overall effect might be. If you're short on time or presenting to others in a [PowerPoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) presentation, a visualization is a better option. A bar chart would be a common way to visualize this table. Here are some different types of bar charts that depict exactly this data, and hopefully you can see their problems. This is a standard side-by-side bar chart. It perfectly mimics the table, but there's a lot of visual clutter that overloads the eye and makes identifying differences difficult. Unlike the table, this visualization takes time to understand. Here's another type of bar chart, a stacked bar chart. Stacked bar charts make it easier to identify individuals, but they hide the very differences you want to see. Here is another bar chart that uses color and two panels to visualize the data, and this graph is very difficult to understand since it requires color matching and bar matching across different panels. I would advise against this type of visualization. And finally, here's a panel bar chart that splits each individual into a separate panel. This graph makes individual comparison easier, but a small multiple scatter your focus and you cannot get a good overall picture. And the solution is dumbbell plots. And here's a dumbbell plot. Students are identified on the y-axis and that test scores on the x-axis. The total change in test scores is represented by clear black line and the endpoint by two solid dots.
>
> **[3:11](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/dumbbel-plots?u=76281980&t=191)** Blue dots signified the test score before the intervention, and red dots signified a test score after the intervention. In this case, David has improved his test scores. Together the data points resemble tiny dumbbells and dumbbell plots [excel](../../Skills/Data%20Science/Microsoft%20Excel.md) at showing you immediately who improved and by how much. For example, Carol and David saw big improvements in their test scores. Frank and Grace saw their scores go down. Not that you're not limited to circles at endpoints, you can use different shapes, sizes, and colors if you want. Here's an example where the circle represents before, and a diamond shape represents the after data point. Like many specialized plot types, dumbbell plots excel when you need to display large amounts of data. This table represents carbon dioxide emissions by countries between 2000 and 2020. There are a lot of numbers to look at in this table, and a dumbbell plot can really bring out the changes very quickly. Here is the associated dumbbell plot. You can almost instantly identify that the United States was the biggest emitter, but dropped their carbon dioxide emissions significantly. by 2020. China was the second biggest emitter and became the biggest emitter by 2020. Other countries increased or decreased their emissions. Again, the advantage of this plot is the speed at which changes can be identified. Dumbbell plots are primarily used to visualize change.
>
> **[4:46](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/dumbbel-plots?u=76281980&t=286)** For example, when you're looking at before and after measurement, policy changes, group benchmark comparisons or over time comparisons. Any data that has changed or differences is often suitable to be visualized in a dumbbell plot. Dumbbell plots are specialized plots, but they retain a lot of characteristics of bar charts. As such, a lot of best practice for bar charts also applies to dumbbell plots, such as good labeling and access management. But for dumbbell plots specifically, do try to limit the number of items between 10 or 30. If you have less than 10, probably a simple table is often a better choice. Don't forget about ordering. You may want to order by name, starting size, end size, or change magnitude. And use clear, contrasting colors or shapes to denote your before and after data points. Your data structure is quite simple. All you need is a three column data set. You need an identify variable, a start variable, and an end variable. And that's it. Dumbbell plots are very easy to explain, but they are surprisingly hard to create. Many statistical packages require you to combine and overlay multiple graphs and or commands. In R you can use the geom_segment and geom_point functions in the ggplot2 package to create dumbbell plots. In [Stata](../../Skills/Data%20Science/Stata.md), you need a similar approach and you need to combine the ask by command with a scatter command to create lines with points.
>
> **[6:19](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/dumbbel-plots?u=76281980&t=379)** And in [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), you need to use to go.scatter function with the modes of lines and markers respectively to create lines with two points. Dumbbell plots are great at highlighting changes and differences. If you have data where you need to bring out changes, try using a dumbbell plot. They have very simple data requirements and can be styled in many different ways, but they do require a bit of coding work to create. But if you put in the effort, you'll get a graph that excels at two-point comparisons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (2), [Powerpoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) (1), [Stata](../../Skills/Data%20Science/Stata.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Analogies:** for example (3), picture (1), such as (1)
> **CLI Commands:** make (3), python (1)
> **Definitions:** is a  (3)
> **Code Identifiers:** geom_segment (1), geom_point (1)
> **Best Practices:** best practice (1), don't forget (1)
> **Speakers:** - [instructor] (1)


### 2. Continuing Your Data Viz Learning Journey

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps and additional resources](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/next-steps-and-additional-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/next-steps-and-additional-resources?u=76281980&t=0)** - [Instructor] Thank you for watching this course. You might be thinking, "What's next? Where can I find out more about these kind of advanced data visualizations and how can I create them?" The first step should be trying to apply some of these plots to your own data, even if it's just for data play. Learning by doing is a powerful reinforcement of learning concepts. A natural step forwards in doing this is to start using general purpose statistical packages to create these graphs yourself. [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) and SPSS usually don't have the capability to create these kind of graphs. Many of the advanced data visualizations presented here require custom functions, specialized commands, careful coding, and bespoke data setups. And for that, you'll need to use programs, such as R, [Stata](../../Skills/Data%20Science/Stata.md), or [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). I created all my graphs in Stata, but R or Python are just as capable. My recommendation is that you learn one of these programs and follow a course here on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. There are some fantastic courses for all levels. Finally, be curious and always be on the lookout for new ways of presenting data. I hope this course has been beneficial to you. Websites like [medium.com](https://medium.com) have great blog posts of [Data Science](../../Topics/Data%20Science.md), machine learning, and data visualization that is bound to give you new and interesting ideas. Follow people on LinkedIn who love data science and browse other websites for interesting video channels or blogs. Thank you for watching,
>
> **[1:32](https://www.linkedin.com/learning/advanced-data-visualizations-12-uncommon-plot-types-and-how-to-use-them/next-steps-and-additional-resources?u=76281980&t=92)** and feel free to contact me via LinkedIn, all through the question and answer section below.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (3), [Stata](../../Skills/Data%20Science/Stata.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Data Science](../../Topics/Data%20Science.md) (2), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **CLI Commands:** python (2), find (1)
> **URLs:** [medium.com](https://medium.com) (1)
> **Env Vars:** spss (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Franz Buscha](../../Instructors/Data%20Science/Franz%20Buscha.md)

## Skills Covered

- Data Analytics
- Data Visualization
- Statistical Data Analysis

## Path Context

### In [Master the Concepts of Data Visualization and Storytelling](../../Paths/Data%20Science/Learning%20Paths/Master%20the%20Concepts%20of%20Data%20Visualization%20and%20Storytelling.md)
← [Data Visualization for Data Analysts and Analytics](Data%20Visualization%20for%20Data%20Analysts%20and%20Analytics.md) | **6 of 7** | [Visualizing Advanced Charts and Graphs](Visualizing%20Advanced%20Charts%20and%20Graphs.md) →

## Appears In

- [Master the Concepts of Data Visualization and Storytelling](../../Paths/Data%20Science/Learning%20Paths/Master%20the%20Concepts%20of%20Data%20Visualization%20and%20Storytelling.md)

## Related Courses

_Courses sharing skills:_

- [Creating Interactive Tableau Dashboards](Creating%20Interactive%20Tableau%20Dashboards.md) — Data Analytics, Data Visualization
- [Complete Guide to Tableau for Data Scientists](Complete%20Guide%20to%20Tableau%20for%20Data%20Scientists.md) — Data Analytics, Data Visualization
- [Tableau Essential Training](Tableau%20Essential%20Training.md) — Data Analytics, Data Visualization
- [Learning Power BI Desktop](Learning%20Power%20BI%20Desktop.md) — Data Analytics, Data Visualization
- [Build Advanced Charts in R](Build%20Advanced%20Charts%20in%20R.md) — Data Visualization

---

[↑ Back to top](#)