---
type: course
cssclasses:
  - lle-course
slug: statistical-analysis-with-wolfram-language
url: "https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language"
duration_minutes: 99
duration: 1h 39m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFHu9hsHaSRRA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703195493894?e=2147483647&amp;v=beta&amp;t=yi4rIDEj2FNEADffmEPER1WjsggE1gxEpWNYziqpqvE"
linkedin_topic: Data Science
learning_paths:
  - '[[Statistics Foundations Professional Certificate by Wolfram Research]]'
  - '[[Build Your Wolfram Language Skills]]'
prev_courses:
  - '[[Excel Statistics Essential Training- 2]]'
  - null
next_courses:
  - null
  - '[[Quantile and Box-Whisker Plots in the Wolfram Language]]'
path_nav: '[{"path":"Statistics Foundations Professional Certificate by Wolfram Research","position":7,"total":7,"prev":"Excel Statistics Essential Training- 2","next":null},{"path":"Build Your Wolfram Language Skills","position":1,"total":8,"prev":null,"next":"Quantile and Box-Whisker Plots in the Wolfram Language"}]'
path_count: 2
tags:
  - course
  - topic/data-science
status: not-started
created: 2026-04-21
---

![Statistical Analysis with Wolfram Language](https://media.licdn.com/dms/image/v2/D560DAQFHu9hsHaSRRA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703195493894?e=2147483647&amp;v=beta&amp;t=yi4rIDEj2FNEADffmEPER1WjsggE1gxEpWNYziqpqvE)

# Statistical Analysis with Wolfram Language

> Analyze your data using a framework of model fitting and statistical analysis built into the Wolfram Language. Whether it is basic descriptive and exploratory statistics or advanced modeling with statistical distributions, you can follow this video course to gain an understanding of the statistical functionality available in the Wolfram Language. Topics covered include descriptive measures, transf

> [LinkedIn Learning](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language) | 1h 39m
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Wolfram Research]]

## Table of Contents

### 1. Descriptive and Exploratory Statistics

#### Descriptive and exploratory statistics
> [LinkedIn Learning](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=0)** - [Darren] I'm Darren Glosenmeyer, lead statistics developer at Wolfram Research.
>
> **[0:04](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=4)** And in today's course, we're going to talk about descriptive and exploratory statistics.
>
> **[0:08](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=8)** In Mathematica, there are numerous functions for describing and visualizing properties of data.
>
> **[0:12](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=12)** Location, scale, and other shape statistics can be useful in understanding the underlying nature of a dataset, the population that was sampled from, or some group within that data or population.
>
> **[0:23](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=23)** Measures of multivariate data can provide information about relationships between variables in the data and underlying populations.
>
> **[0:31](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=31)** Charts and plots can also be very helpful, and we'll see a number of those statistics and plots as we go through this course.
>
> **[0:38](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=38)** First of all, before you can work with your data, you often have to access it from somewhere.
>
> **[0:42](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=42)** In Mathematica, there are a number of ways to access data.
>
> **[0:44](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=44)** The Import and Export functions are useful for loading in various types of data, including numeric and tabular data, as you would typically find in many statistical applications.
>
> **[0:55](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=55)** Pretty much all of the standard formats that you would expect to work with, Excel data files, database files, those are all accessible within Mathematica.
>
> **[1:06](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=66)** And we can see a long list of the file types that can be imported and exported in Mathematica.
>
> **[1:12](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=72)** There are over 150 file types that can be imported, and over 130 file types that can be exported.
>
> **[1:19](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=79)** Some of those are graphics, some of those are numeric data, some of those are textual data formats.
>
> **[1:24](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=84)** There's also a database link included, which is fully SQL compatible, so you can interact with any database you might have available.
>
> **[1:37](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=97)** In terms of descriptive statistics, we'll start out with a dataset on Old Faithful geyser duration and waiting times to get a feel for the descriptive statistics and charts available in Mathematica.
>
> **[1:51](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=111)** So we see here that we have duration and waiting times for this dataset, and we can load the data and compute various properties for that data.
>
> **[2:03](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=123)** So for instance, here, we're computing the mean, the variance, the skewness, the kurtosis, the median, and the 10th and 90th percentiles for the weighting durations.
>
> **[2:20](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=140)** Numerous visualization functions are included, allowing for various types of graphical interpretation of the data.
>
> **[2:27](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=147)** The following visualizes the distributions of the data as histograms, box and whisker plots, and violin plots to show the various shapes of the duration and waiting times.
>
> **[2:38](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=158)** We can see that the histogram shows two modes in both the waiting time and the duration, and the box and whisker plot and the violin plot show the general shape as well.
>
> **[2:54](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=174)** There are numerous types of visualization functions in Mathematica, and we can see a small gallery of those.
>
> **[3:01](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=181)** They include histograms, various types of density plots, quantile plots, probability plots, and so on.
>
> **[3:16](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=196)** So in that last slide, we looked at univariate descriptions of data.
>
> **[3:21](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=201)** We can also look at multivariate descriptions of data.
>
> **[3:24](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=204)** In this case, we're computing the mean, variance, skewness, kurtosis, median, 10th and 90th percentiles for both the waiting times and the durations, and we see that those get computed columnwise on the data.
>
> **[3:36](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=216)** So here, we have the mean for the duration, and here, we have the mean for the waiting time.
>
> **[3:43](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=223)** Here, we have the variance for the duration, variance for the waiting time, and so on.
>
> **[3:47](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=227)** We can also look at correlational information.
>
> **[3:50](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=230)** If we compute the correlation of the data, we see that there's a very high correlation between waiting time and duration.
>
> **[3:59](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=239)** And we can also visualize the data in a multidimensional space.
>
> **[4:04](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=244)** So here, we see, if we plot the duration of waiting times together, we see the durations on the x-axis, the waiting times on the y-axis, and we can see how those points are correlated.
>
> **[4:16](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=256)** And we can see that also in a density plot in a multivariate histogram and in a smooth version of a histogram.
>
> **[4:25](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=265)** Here, we see four different ways of visualizing the same information about the data.
>
> **[4:30](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=270)** Each gives us a little more information.
>
> **[4:35](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=275)** So we've talked a little bit about numerical data.
>
> **[4:39](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=279)** We can also compute descriptive statistics for categorical data.
>
> **[4:43](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=283)** For instance, if we wanted to bin data values, we could take a look at the duration times for the Old Faithful data and see how many of those fall between zero and two minutes, between two and three minutes, between three and four minutes, and between four and 10 minutes.
>
> **[5:00](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=300)** And we can use bin counts for that, and bin counts will tell us that there are 51 that are less than two minutes, 46 between two and three minutes, and so on.
>
> **[5:11](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=311)** We could also visualize this information as a bar chart or a pie chart.
>
> **[5:16](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=316)** So here, we see the number of occurrences with a duration less than two minutes, between two and three minutes, and so on.
>
> **[5:24](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=324)** And we can visualize the same information with a pie chart.
>
> **[5:29](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=329)** And the labels are there just to indicate which particular bins we're in.
>
> **[5:37](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=337)** It's often important to transform your data.
>
> **[5:41](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=341)** And for this example, we'll take a look at some financial data, Dow Jones closing prices from 2010, 2011.
>
> **[5:48](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=348)** And some built-in functions for smoothing your data include MovingAverage, MovingMedian, and ExponentialMovingAverage.
>
> **[5:54](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=354)** There's also a function called Standardize for shifting and scaling your data that's related to standardization of normally distributed things in general.
>
> **[6:04](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=364)** So we'll start by loading some data and looking at a DateListPlot.
>
> **[6:08](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=368)** And we can see these are the closing prices from January, 2010, through the beginning of 2011 for the Dow Jones.
>
> **[6:18](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=378)** And we might wish to perform a smoothing on that data to get a general idea of the trend.
>
> **[6:24](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=384)** And here, we can use a MovingAverage, and we're going to use a MovingMedian to smooth those data points, and MovingAverages and MovingMedians gobble up points on either end, so we need to throw out a few to get the general curve through there.
>
> **[6:38](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=398)** And then we'll combine our original data with some points chopped off the ends with the moving average smoothing and the moving median smoothing.
>
> **[6:48](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=408)** And so we see there, we still have the original data as compared to the first chart, and some smoothings through the middle.
>
> **[6:59](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=419)** There's also a complete set of financial visualization functions that can be used for various types of financial charts.
>
> **[7:06](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=426)** We won't go into those in this particular course.
>
> **[7:08](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=428)** Those will be discussed in other courses.
>
> **[7:10](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=430)** In addition to MovingAverages and MovingMedian, there are built-in filters, often used in signal processing that can also be useful for smoothing data.
>
> **[7:19](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=439)** And there are general functions for correlations and convolutions of data, as well as arithmetic and general linear algebra functions that can be used to create smoothers.
>
> **[7:36](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=456)** Another common application is to group your data together in some way.
>
> **[7:40](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=460)** And for that, we have a built-in function called FindClusters.
>
> **[7:44](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=464)** And there are a number of distance and similarity measures that can be used to group your data.
>
> **[7:51](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=471)** We'll take a look at those.
>
> **[7:52](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=472)** For numerical data, there are numerous common distance functions, Euclidean distances, Manhattan distances, chessboard distances, and so on.
>
> **[8:01](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=481)** For Boolean data, Hamming distances, and various other types of dissimilarities for counting the number of like and dislike pairs.
>
> **[8:12](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=492)** And then string distances, which will basically determine how many changes in a string it would take to get from one to another.
>
> **[8:21](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=501)** And for this example, we'll start out with some data from 10 bivariate normal distributions.
>
> **[8:27](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=507)** And we can see here, this data is stored in an Excel spreadsheet, and each sheet contains data from a different distribution, and there are 10 of those.
>
> **[8:40](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=520)** And if we mix those data points up, and that's what this function's going to do here, RandomSample, flattening the data points together, we're just going to get a permutation of all those data points so that the data points from the first distribution aren't necessarily next to other other data points from the first distribution, and so on.
>
> **[8:57](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=537)** And we can use FindClusters to cluster those.
>
> **[9:01](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=541)** And I'm suppressing the output here with a semicolon, because there would be lots and lots of data points that would be output.
>
> **[9:09](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=549)** But we can very easily visualize what those look like if we extend this out a bit.
>
> **[9:18](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=558)** So on the left, we see the original clusters, there are 10 different clusters, and on the right, we see the clusters that were found by FindClusters.
>
> **[9:28](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=568)** And FindClusters finds that there are three different natural groupings within the data.
>
> **[9:40](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=580)** We can also do hierarchical clustering.
>
> **[9:43](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=583)** FindClusters basically groups data points together.
>
> **[9:46](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=586)** Hierarchical clustering, which is available through the HierarchicalClustering package, will continually subset the data based on distance.
>
> **[9:55](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=595)** So we can load the package using this Needs statement.
>
> **[9:58](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=598)** And as an example, we'll use some text, and this is some text about a course.
>
> **[10:07](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=607)** And what we're going to do is we're going to split that text up based on the words.
>
> **[10:15](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=615)** So if we split that up, we see that the hierarchy, as we go further and further down these branches, the closer things are joined, the closer they are in terms of the words.
>
> **[10:27](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=627)** So here, we have Statistics and statistics, where one has a capital S, and one has a lowercase s, and then we have statistical, which is closely related.
>
> **[10:35](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=635)** And they're all pretty far away from import export.
>
> **[10:39](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=639)** And so the distance and dissimilarity being used here is the number of changes of characters in the word in order to get from one to the other.
>
> **[10:49](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=649)** And we notice we get this message back about the number of ties.
>
> **[10:53](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=653)** If we were to permute the data so that they're in a different order, we might get different groupings, because we have an agglomerative process that's going through, and splitting things up, and grouping things together.
>
> **[11:05](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=665)** And if we have a different order of strings in the first place, they may get grouped in different ways.
>
> **[11:13](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=673)** That brings us to the end of this seminar.
>
> **[11:16](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/descriptive-and-exploratory-statistics?u=76281980&t=676)** I'd like to thank you for attending, and if you have any further questions, you can reach us at training@[wolfram.com](https://wolfram.com).

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), from, (1), case, (1), throw (1), export. (1)
> **Analogies:** for instance (2)
> **CLI Commands:** find (1)
> **URLs:** [wolfram.com](https://wolfram.com) (1)
> **Env Vars:** sql (1)
> **Speakers:** - [darren] (1)


### 2. Statistical Distribution

#### Statistical distribution
> [LinkedIn Learning](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/statistical-distribution?u=76281980)


### 3. Hypothesis Testing

#### Hypothesis testing
> [LinkedIn Learning](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=0)** - [Darren] I'm Darren Glosemeyer, lead statistics developer at Wolfram Research.
>
> **[0:04](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=4)** And in this course we're going to talk about hypothesis testing in Mathematica.
>
> **[0:11](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=11)** Mathematica includes a framework for hypothesis testing, covering test of location, variance, scale, and distributional goodness-of-fit.
>
> **[0:20](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=20)** And these include parametric and non-parametric tests.
>
> **[0:22](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=22)** We can have a quick look at some of those functions and we see there are general functions as well as named tests that are, may be familiar to you, such as a Kolmogorov-Smirnov Test, t-test, and so on.
>
> **[0:40](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=40)** There are functions that automatically choose based on the data and assumptions of a test to determine which is the most appropriate test to use.
>
> **[0:49](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=49)** There are also common name tests as we just saw, Kolmogorov-Smirnov, z-test, t-test, and so on.
>
> **[0:55](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=55)** There's control for the alternative hypothesis and significance level, and there are numerous properties for results such as p-values, test statistics, and so on.
>
> **[1:05](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=65)** These results can be obtained from objects to make it easier to report your results.
>
> **[1:15](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=75)** Parametric tests are based on a particular parameter.
>
> **[1:17](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=77)** So for instance, if we're talking about-test of location, our null hypothesis would be that the parameter is some particular value, and our alternative hypothesis would be that the true parameter value is different from our null value in some particular way.
>
> **[1:37](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=97)** A two-sided test would say that the alternative is that the true value is just not the same as the null value.
>
> **[1:46](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=106)** And a one-sided test would say that the true value is greater than or less than that particular value.
>
> **[1:56](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=116)** So for instance, if we look at a two-sided P-value, we would see that we would have two times the probability that X is greater than the particular estimate in this case, data had as our estimate.
>
> **[2:11](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=131)** So the P-value is going to be twice this tail, and in this case we're going to have a P-value that is twice the lower tail 'cause theta is below the median.
>
> **[2:25](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=145)** If we're looking at a one sided hypothesis test, we would choose a particular direction.
>
> **[2:30](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=150)** So with the alternative hypothesis that theta is greater than theta nought, our P-value would be this upper tail.
>
> **[2:36](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=156)** And with an alternative hypothesis that theta is less than theta nought, our probability, our P-value would be the lower tail, which in this case would be greater than a half.
>
> **[2:49](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=169)** In Mathematica, there's a function called location test, which can be used for testing the mean or median of a data set or two data sets and location equivalence tests, which can be used for testing differences in locations among several data sets.
>
> **[3:07](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=187)** And there are also functions for name tests that are built in, Z's and T's and so on.
>
> **[3:13](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=193)** So we can start off here with some example data.
>
> **[3:16](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=196)** And this data describes failure times for airplane windows.
>
> **[3:22](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=202)** And so we might want to test the hypothesis that the mean or median failure time is 28 against the alternative that it's not.
>
> **[3:33](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=213)** And by default we'll get a P-value back.
>
> **[3:35](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=215)** And so that's giving us a P-value for the specific test that it chose to use.
>
> **[3:40](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=220)** And we'll see how to get that particular test in a second.
>
> **[3:44](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=224)** But we could also choose alternate hypotheses.
>
> **[3:47](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=227)** So if we wanted to test that the value is, that the true value is actually less than 28 or that it's unequal or that it's greater than 28, we can specify an alternative hypothesis.
>
> **[4:01](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=241)** And so here we'll get those individual P-values.
>
> **[4:03](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=243)** By default, we're getting a two-sided test, so we can see here by the alternative unequal and we can get individual properties out of here.
>
> **[4:17](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=257)** So in this particular case, we may want to know what-test was chosen by location test and also pick out the P-value.
>
> **[4:24](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=264)** So we have the same first two arguments.
>
> **[4:28](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=268)** We have the data set and we have the value we're testing against.
>
> **[4:33](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=273)** And then we asked for the automatic test and the P-value for that-test.
>
> **[4:38](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=278)** And we see that in this particular case, it did choose a t-test.
>
> **[4:41](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=281)** T-test was appropriate for these failure times and we get that p-value back.
>
> **[4:48](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=288)** We can also get an object back and this can be useful for generating reports.
>
> **[4:53](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=293)** So here by asking for hypothesis test data, we get an object back from which we can get any of the properties we could have gotten directly like we did up here.
>
> **[5:06](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=306)** So now we have this object, hypothesis test data object.
>
> **[5:09](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=309)** We've assigned it to a value h.
>
> **[5:11](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=311)** And so we can pick out for instance, the test conclusion.
>
> **[5:15](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=315)** And the conclusion in this case is that the null value is rejected at a 5% level using the t-test.
>
> **[5:24](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=324)** The the test is determined that it's unlikely at a 5% level that these data actually came from a distribution with mean 28.
>
> **[5:36](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=336)** Now, there are a number of different tests that we could potentially get when we do a location test.
>
> **[5:40](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=340)** And if we wanted to see all of them, we could ask for a test data table with all of those applicable tests.
>
> **[5:48](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=348)** And now we see all the possibilities.
>
> **[5:49](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=349)** We could have looked at location tests determined that the best one to use was in fact the t-test.
>
> **[6:03](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=363)** While location tests will automatically determine which test it thinks is most appropriate, there may be times when you want to use a specific test for a particular reason.
>
> **[6:14](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=374)** If we start out here with some random student T data and we perform a location test to see if the mean is significantly different from zero and we get an object back and we look at the test data table, we see that it's chosen the signed rank test, which is a non-parametric test, and based on this test, we would conclude that the mean of the population that our dataset was sampled from is not significantly different from zero.
>
> **[6:47](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=407)** Now if we were to choose a t-test in this particular case, we get a message that says that at a 0.05 level these data would violate the normality assumption that is a part of a t-test, but it doesn't violate it by much.
>
> **[7:03](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=423)** We see that the P-value for that-test is about 0.04 as opposed to 0.05.
>
> **[7:08](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=428)** So it might be reasonable to just ignore it.
>
> **[7:15](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=435)** And we can see here that we get that same P-value by performing a distribution fit-test on a normal distribution.
>
> **[7:21](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=441)** So this is the test of normality that's being performed to determine whether or not it's appropriate to use a t-test.
>
> **[7:27](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=447)** Now, if we look at the actual histogram of the data, it doesn't look so far from normal.
>
> **[7:34](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=454)** So it may be okay to just ignore that assumption.
>
> **[7:38](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=458)** And if we wanted to do that, we certainly can using t-test and telling it not to verify any of the assumptions.
>
> **[7:45](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=465)** And now it won't go through those assumptions and it will generate an object without any messages.
>
> **[7:52](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=472)** And from that object, we can get all the typical results we would want to.
>
> **[7:57](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=477)** And in this case, it says that if we use a t-test, we would not reject the hypothesis that the true mean of the population that the data was sampled from is zero.
>
> **[8:13](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=493)** Tests of variance or scale are very similar in the structure.
>
> **[8:17](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=497)** And for these we would use variance tests or variance equivalence tests or name tests that are available for those types of tests.
>
> **[8:25](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=505)** So if we look at our particular failure times again, and we wanted to test the hypothesis that the true variance for the population from which these failure times were sampled is 25 against the alternative hypothesis that the variance is actually greater than that, we could do that as such.
>
> **[8:50](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=530)** And now we can ask for a table of results and it says that the fisher ratio test is the one to choose.
>
> **[8:58](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=538)** And in this case, we would reject the null hypothesis that the true variance is 25 and conclude that it's very likely that the true variance is greater than 25.
>
> **[9:14](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=554)** Distributional goodness-of-fit-tests can be used to compare a dataset with a known distribution or with another dataset.
>
> **[9:22](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=562)** And typically the way these work is to compare empirical CDFs with theoretical CDFs in some way.
>
> **[9:29](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=569)** And there are a number of different named cases that are common in practice, things like Kolmogorov-Smirnov, Anderson-Darling and Shapiro-Wilk.
>
> **[9:37](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=577)** And to get an idea of what we're comparing here, we'll take a small sample of widely distributed data and compare that with the theoretical CDF.
>
> **[9:47](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=587)** And effectively what these tests are going to do is in some way compare the difference between these two curves, the empirical CDF, which is the jagged curve here, and the theoretical smooth curve.
>
> **[10:02](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=602)** With distributional goodness-of-fit-test, the null hypothesis is that the data came from the distribution we're starting with.
>
> **[10:10](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=610)** And a small P-value would indicate evidence that the true distribution is different from what we're assuming.
>
> **[10:17](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=617)** So if we take the Weibull distributed data and compare that with a Weibull with the parameters we started with, 5 and 10, this will generate a result that says in this particular case, it chose to use the Cramer-von Mises test and the test statistic it obtained would not be significant at a 0.05 level.
>
> **[10:37](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=637)** So we would conclude that we can't reject the null hypothesis that a Weibull distribution with parameters 5 and 10 is the distribution that it came from.
>
> **[10:48](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=648)** And that seems okay in this case because that's actually the distribution that we did generate it from.
>
> **[10:54](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=654)** As with the other types of tests, there are a number of built-in name tests.
>
> **[10:57](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=657)** So for instance, we could use the Kolmogorov-Smirnov Test here and there we get the test statistic for the Kolmogorov-Smirnov Test and the P-value associated with it.
>
> **[11:08](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=668)** And we could also take a look at all the possible applicable distributional goodness-of-fit-tests for this dataset.
>
> **[11:16](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=676)** And here we see that Anderson-Darling, Cramer-von Mises and so on would be appropriate tests.
>
> **[11:23](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=683)** And it appears that Kuiper's test and Watson U squared would indicate that this is not widely distributed with parameters 5 and 10, but just barely at a 0.05 level.
>
> **[11:40](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=700)** When we're working with distributional goodness-of-fit-test, it's important to keep in mind that whether we assume the parameters are known or need to estimate the parameters will make a difference on the P-value.
>
> **[11:51](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=711)** So for instance, if we start out with a Weibull distribution with unknown parameters for the same data set, it's going to obtain the maximum likelihood estimates for those parameters and then give us test results based on that estimate.
>
> **[12:08](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=728)** And we can see here what the fitted distribution is.
>
> **[12:10](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=730)** So it found that the parameters for that Weibull distribution using maximum likelihood estimation would be about 6 and about 10.
>
> **[12:19](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=739)** And with that distribution, and assuming that those parameters are estimated rather than known, we get this particular Cramer-von Mises test and it's just barely insignificant at the 0.05 level.
>
> **[12:34](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=754)** If we instead assume that the Weibull distribution we obtained from that previous result has known parameters, and we plug that into distribution fit-test, we'll notice that the P-value is quite different, and that's because the parameters are taken to be known as opposed to estimated.
>
> **[12:51](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=771)** And as a result, the P-values are going to be very different.
>
> **[12:54](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=774)** The distribution of the test statistic depends on whether or not we've estimated the parameters.
>
> **[13:03](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=783)** And in these examples, we've seen tests of location variance in goodness-of-fit for univariate data.
>
> **[13:10](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=790)** We could also test for multivariate data.
>
> **[13:12](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=792)** Typically, those will be more complicated tests and may take more time, but they are built in and the framework allows for them.
>
> **[13:22](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=802)** That brings us to the end of this course.
>
> **[13:24](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=804)** Thank you for attending.
>
> **[13:25](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/hypothesis-testing?u=76281980&t=805)** If you have any further questions, you can contact us at training at [wolfram.com](https://wolfram.com).

> [!info]- Semantic Content
>
> **Code Keywords:** case, (7), from. (2), function (1), default, (1)
> **Versions:** 0.05 (5), 0.04 (1)
> **Analogies:** for instance (5), such as (1)
> **CLI Commands:** make (2)
> **Env Vars:** cdf (2)
> **Definitions:** is a  (2)
> **URLs:** [wolfram.com](https://wolfram.com) (1)
> **Warnings:** keep in mind (1)


### 4. Model Fitting and Analysis

#### Model fitting and analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=0)** - [Darren] I'm Darren Glosemeyer, Lead Statistics Developer at Wolfram Research.
>
> **[0:03](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=3)** And in this course we're going to talk about model fitting.
>
> **[0:09](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=9)** Mathematica includes a framework for linear, non-linear, logit, probit, and generalized linear models, as well as extensive optimization functions, linear algebra, and a package for analysis of variance, which allow for many types of model fitting and analysis.
>
> **[0:26](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=26)** First, we'll start by importing some data from an Excel spreadsheet, and we'll use this data for a linear regression model.
>
> **[0:34](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=34)** So we have a data set with three predictors and one response variable, and we'll call those first three predictors x, y, and z.
>
> **[0:42](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=42)** And we will predict a fourth variable based on those.
>
> **[0:45](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=45)** And we use a linear model.
>
> **[0:47](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=47)** And the linear model fit function is the function for linear regression analysis.
>
> **[0:52](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=52)** And so when we fit this model, we see that we get an object back.
>
> **[0:55](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=55)** And this object contains a lot of information about the fitting so we don't need to refit each time we want to get more diagnostics.
>
> **[1:02](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=62)** And we can see the functional form of the model by using normal.
>
> **[1:06](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=66)** And so here we see we have a constant term and we have linear terms in x, y, and z.
>
> **[1:15](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=75)** Now we can also evaluate this model at a particular point.
>
> **[1:17](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=77)** So if we wanted x equals one, y equals three, z equals five, we can evaluate and we get the the value of this function at this particular set of x, y, and z values.
>
> **[1:32](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=92)** There are also a number of properties that we can get from this object, and we can see those by asking for the properties.
>
> **[1:38](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=98)** Things like adjusted R squared, AIC residuals of various types.
>
> **[1:44](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=104)** So lots of diagnostics you can get back out of here from which you could build a report.
>
> **[1:52](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=112)** So for instance, we may want to look at the standardized residuals in Cook's distances to get an idea of whether or not the residuals are actually normally distributed and if there are points with extreme influence.
>
> **[2:03](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=123)** So here we obtain the standardized residuals and the Cook's distances and we assign those to variables so we can use those in later computations.
>
> **[2:12](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=132)** And now we may want to look at a quantile plot of the standardized residuals to get an idea of whether or not they're normally distributed and a list plot of the Cook's distances to see if any of those points are extreme.
>
> **[2:25](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=145)** And we see that the standardized residuals fall pretty well along this straight line, which means they're not too far from normal.
>
> **[2:32](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=152)** So that assumption seems okay.
>
> **[2:34](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=154)** And while we have a couple of slightly higher points here, the Cook's distances are probably all right as well.
>
> **[2:41](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=161)** We might also look at plots of residuals by variable to see if there's any trend within the variables as x increases, do we see a trend in the residuals either upward, downward, or some type of curvy trend?
>
> **[2:56](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=176)** And the same for y and z.
>
> **[2:57](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=177)** And in this case, we're really not seeing much of any type of pattern in the residuals.
>
> **[3:06](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=186)** An extension of linear models are generalized linear models.
>
> **[3:10](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=190)** In the linear regression case, we have a response that we're predicting based on a linear combination of functions.
>
> **[3:17](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=197)** So we have functions F1, F2, and so on, and coefficients, beta zero, beta one, beta two, and so on.
>
> **[3:26](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=206)** And we assume that the y-hat values, the responses follow a normal distribution with mean centered at the value we actually fit by the model.
>
> **[3:37](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=217)** In the generalized linear model case, we fit y-hat as an invertible function of a linear combination of things.
>
> **[3:45](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=225)** So here we still have the same linear combination, but we have an invertible function g, that will give us the y-hats.
>
> **[3:52](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=232)** This g is called the link function.
>
> **[3:54](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=234)** And in these models we no longer assume that y-hat is normally distributed.
>
> **[3:59](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=239)** Instead it follows some other distribution.
>
> **[4:01](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=241)** It may be normal, it may be binomial, it may be Poisson.
>
> **[4:06](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=246)** There are lots of possibilities.
>
> **[4:08](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=248)** Some common cases of these types of models are linear regression model, the logistic regression model, the probit model, log-linear models for count data, and gamma and inverse Gaussian models.
>
> **[4:18](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=258)** In Mathematica, these are all included in the generalized linear model fit function, and quasi-likelihood models are also allowed.
>
> **[4:26](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=266)** Now if we take a look at a few of these different functions, we see that a few of the built-in generalized linear model types are linear model fit, linear regression, logit model fit, which does binomial logistic regression, probit model fit, which does binomial probit regression, and generalized linear model fit, which handles all of these extra cases.
>
> **[4:49](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=289)** And we'll see that each of these support continuous and nominal predictor variables.
>
> **[4:58](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=298)** As examples, we'll take a look first at the logit and probit models, and we can access these via the logit model fit and probit model fit functions.
>
> **[5:07](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=307)** And so here we have some data and we're treating this as binomial data.
>
> **[5:13](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=313)** We have a single predictor variable, and the responses are basically success ratios, three out of eight successful, two out of 10 successful, four out of six successful, and so on.
>
> **[5:32](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=332)** And we can fit these to a logit model by feeding the data in the logit model fit, telling it that we have one predictor variable, which we're going to call x.
>
> **[5:40](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=340)** And this will generate a fitted model, which looks a lot like the linear model object we got earlier.
>
> **[5:49](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=349)** We could also specify weights.
>
> **[5:50](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=350)** So in this first example up here, we're just assuming that the responses are success probabilities.
>
> **[6:00](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=360)** By adding weights we can effectively tell it how many trials there were, and then we get an object back and these look very similar.
>
> **[6:09](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=369)** Likewise, we could do the same thing with a probit model.
>
> **[6:12](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=372)** And now this is going to use a probit link function as opposed to a logit link function.
>
> **[6:16](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=376)** And we can see a difference in the basic form in these outputs.
>
> **[6:23](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=383)** And we could take a look at the functional forms of these guys.
>
> **[6:26](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=386)** Again, we can use normal.
>
> **[6:28](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=388)** So normal is going to give us the functional form.
>
> **[6:31](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=391)** So we can take a look at the results from these.
>
> **[6:33](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=393)** And we see that for the logit models, they have the same basic form, but the coefficients are a little different.
>
> **[6:39](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=399)** And that's because we've included some weights to account for how many trials there were.
>
> **[6:43](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=403)** And the probit model, which is based on normal distribution, the CDF normal distribution, we see that we have a slightly different form there.
>
> **[6:55](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=415)** As before, we can get lots of properties and the properties are a bit different than in the linear case, but there are many that are similar.
>
> **[7:04](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=424)** For instance, we could get parameter tables for each of these guys.
>
> **[7:09](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=429)** And these will give us standard errors and test statistics to determine whether or not these are significant effects in the model.
>
> **[7:21](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=441)** In the previous example, we were basically looking at binomial generalized linear models, and we could specify those by using the exponential family option and specifying the link function.
>
> **[7:34](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=454)** In this example, we'll take a look at a Poisson count model.
>
> **[7:37](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=457)** So Poisson distribution will have discreet responses which are basically counts or behave like counts.
>
> **[7:44](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=464)** And in this case we'll have two predictor variables.
>
> **[7:47](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=467)** One is a group, you're in group a, b, c, or d.
>
> **[7:51](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=471)** And the other is whether or not you agree or disagree on a particular issue.
>
> **[7:56](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=476)** And then we'll have a final count.
>
> **[7:57](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=477)** So in group a, there are 53 people who agree, 24 people who disagree, and 13 who are undecided, and so on.
>
> **[8:06](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=486)** So we'll evaluate this and now we can specify that we want to treat these as nominal variables.
>
> **[8:12](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=492)** These aren't continuous variables, they're groups basically.
>
> **[8:16](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=496)** We can specify that they're nominal variables by using the nominal variables option.
>
> **[8:20](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=500)** And so here we have a group and we have an opinion as our predictors.
>
> **[8:23](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=503)** We're going to use a Poisson model for this fitting, and we're going to treat both of the predictors as nominal variables, as categories effectively.
>
> **[8:33](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=513)** And this is going to be a log-linear model.
>
> **[8:35](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=515)** The canonical link for a Poisson distribution is the log function.
>
> **[8:40](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=520)** And so that's what we'll use in this case, and that gives us a result and we've assigned that to loglinmodel so we can reuse those results later.
>
> **[8:48](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=528)** And we can take a look at what would happen if we evaluate these at particular values.
>
> **[8:53](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=533)** So a and agree are values that we know and a is a value we know and opinion is not.
>
> **[8:59](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=539)** So this would still be a variable.
>
> **[9:01](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=541)** If we evaluate these guys, we see that the first case evaluates to a number that's completely known.
>
> **[9:09](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=549)** And the second case has this discrete indicator floating around, actually a couple of them.
>
> **[9:15](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=555)** And what those say is until we know what opinion it actually is, we can't determine the numeric value.
>
> **[9:21](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=561)** But this discreet indicator will be one when opinion matches agree in this case.
>
> **[9:30](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=570)** And zero when it matches either disagree or undecided.
>
> **[9:33](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=573)** So as long as we know which group the data point falls into, these discreet indicators will go away, they'll evaluate to one or zero.
>
> **[9:42](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=582)** And if we can't determine which group they're in, they'll remain unevaluated.
>
> **[9:47](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=587)** Now we can use other link functions for Poisson model, for instance, we could use the identity link, which would mean that we're just fitting by a linear combination of functions rather than any function of that.
>
> **[10:03](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=603)** And so we're doing the same thing, but now we've set the link function to be identity link and we get something fairly similar back.
>
> **[10:10](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=610)** And here we could take a look at what would be predicted by this linear model.
>
> **[10:16](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=616)** So in this case, we would expect about 39 people to agree in group A, about 93 in group B, about 37.5 in group C, and so on.
>
> **[10:29](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=629)** So here we have a visual representation of what will be predicted by this linear Poisson model.
>
> **[10:35](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=635)** And the exponential family option can be used to specify a number of common cases including inverse Gaussian and gamma.
>
> **[10:42](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=642)** And there's also a general quasi-likelihood framework which will allow you to define models based on more complicated structures where the variance is a function of the mean.
>
> **[10:55](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=655)** I'd like to talk a little bit now about non-linear regression models.
>
> **[10:58](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=658)** And for non-linear regression models, we'll use the non-linear model fit function.
>
> **[11:03](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=663)** In the case of non-linear regression, we're assuming once again that we have normally distributed residuals, but rather than predicting by a linear combination, we have some non-linear function that we're using as our model.
>
> **[11:17](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=677)** So if we go back to the data we had earlier, and instead use a model where we have the square root of eight times x plus b times y times z, this is a non-linear model and we're going to have parameters a and b, and we're going to have variables x, y, and z.
>
> **[11:34](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=694)** And so we can fit that and we get a very quick solution here.
>
> **[11:38](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=698)** And once again, we could look at the properties or we could look at normal to see what the functional form is.
>
> **[11:43](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=703)** So this would be the functional form of this particular model.
>
> **[11:51](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=711)** Non-linear models use more general optimization, and as a result, starting values can make a difference.
>
> **[11:57](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=717)** There may be multiple optimum points in the solution space and you may want to start next to an appropriate one, or it may be that you're starting far away from anything that could be useful.
>
> **[12:08](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=728)** So let's take the same model and if we add in a minus sign here in the square root, we should get the same fit except the sign is going to flip on A.
>
> **[12:17](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=737)** And if we evaluate, now we see that we get a message back about complex values.
>
> **[12:21](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=741)** The problem is by default, non-linear model fit is going to use one for each of the parameter values.
>
> **[12:27](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=747)** And in this particular case, if we have a one there, we're going to wind up with some imaginary things popping up.
>
> **[12:34](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=754)** So this is an example where it's important to have good starting values.
>
> **[12:39](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=759)** So let's suppose instead that we specify a is starting at minus one, and b at five, then if we evaluate, we can see that it quickly gives us the same result that it had before.
>
> **[12:51](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=771)** And if we look at the parameter tables from, here's our initial non-linear model we started out with, and this is the one we've just fit with the minus sign in it, if we look at the parameter tables, we see that they're pretty much the same except for the sign here.
>
> **[13:05](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=785)** That's a minus sign because we flipped the sign on the coefficient.
>
> **[13:13](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=793)** We can also specify constraints.
>
> **[13:15](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=795)** So for instance, if we wanted to constrain b to be greater than 15, we could do that.
>
> **[13:22](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=802)** And now we see we get a different result.
>
> **[13:25](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=805)** The coefficient now has to be at least 15 here and it turns out to be right at 15 and we can still get properties back from the model.
>
> **[13:35](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=815)** But given that we've added some constraints to the space, they may not all be valid and we'll get a warning message about that because these constraints will change the distribution of possible residuals, we're no longer working with multivariate normal things, but something that's kind of truncated.
>
> **[13:52](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=832)** And as a result, if the solution is near the center of the space, all the normality assumptions are probably fine, but as you get close to the edge, we could run into trouble and we'll get a message about that.
>
> **[14:05](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=845)** Finally, we want to talk a little bit about analysis of variance.
>
> **[14:09](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=849)** So the analysis of variance model is really a categorical linear regression model, and we could get some of the results by using linear model fit with the nominal variables option, or we could use the ANOVA package which is built in.
>
> **[14:21](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=861)** So let's start by loading some data.
>
> **[14:24](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=864)** And so here we have a continuous response into categorical predictors.
>
> **[14:29](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=869)** So the first category is going to be A or B, and the second category is going to be A, B, or C.
>
> **[14:39](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=879)** And we'll need to load a package here to use the ANOVA function.
>
> **[14:43](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=883)** So we do that by using the needs statement and we can find a two-way analysis of variance for this data by specifying that we have two variables, which we do, two categorical predictor variables.
>
> **[14:58](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=898)** And so this model is just going to involve the main effects for x and y.
>
> **[15:02](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=902)** And by default we'll get back a table, get our standard analysis of variance table, and we also get cell means, which tell us the average for each category.
>
> **[15:11](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=911)** So the average response for x values which are a, x values which are b, and so on.
>
> **[15:19](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=919)** With all being the overall mean.
>
> **[15:23](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=923)** We can omit the cell means by setting an option, if we set cell means goes to false, we'll no longer get that cell means table and we can also compute some post-test to determine which of the effects are significant, if there are significant differences between the groups and x, if there's significant differences between the groups and y, and a couple of those possibilities of Bonferroni's test and Tukey's test.
>
> **[15:46](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=946)** So we could specify that here.
>
> **[15:48](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=948)** And we see that we get the same analysis of variance table back, and the post-test result here is going to tell us which groups indicate significant differences.
>
> **[15:58](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=958)** And in this case, Bonferroni says that A and B are different for variable x, and A and C and B and C are different for variable y.
>
> **[16:08](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=968)** And Tukey finds that there are significant differences for all of them.
>
> **[16:13](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=973)** Now, if we wanted to just get the ANOVA table, we could do that directly with linear model fit.
>
> **[16:17](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=977)** And we do that by feeding in the same data, feeding in the same basis functions and variables and telling linear model fit that the predictors are all nominal.
>
> **[16:28](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=988)** If we do that, we get an object back and we can ask for the ANOVA table.
>
> **[16:33](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=993)** When we do that, we see that we get the same results as we get from the ANOVA package.
>
> **[16:41](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=1001)** That brings us to the end of this course.
>
> **[16:46](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=1006)** I'd like to thank you for attending this course, and if you have further questions, you can contact us at training@[wolffram.com](https://wolffram.com).
>
> **[16:51](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/model-fitting-and-analysis?u=76281980&t=1011)** Thanks.

> [!info]- Semantic Content
>
> **Code Keywords:** function (17), case, (8), let (3), case. (1), default, (1)
> **Env Vars:** anova (5), aic (1), cdf (1)
> **Definitions:** is a  (4), is called (1), is an  (1)
> **Analogies:** for instance (4)
> **CLI Commands:** make (1), find (1)
> **URLs:** [wolffram.com](https://wolffram.com) (1)
> **Versions:** 37.5 (1)
> **Cross-References:** go back to (1)


### 5. Modeling with Statistical Distributions

#### Modeling with statistical distributions
> [LinkedIn Learning](https://www.linkedin.com/learning/statistical-analysis-with-wolfram-language/modeling-with-statistical-distributions?u=76281980)


## Path Context

### In [[Statistics Foundations Professional Certificate by Wolfram Research]]
← [[Excel Statistics Essential Training- 2]] | **7 of 7**

### In [[Build Your Wolfram Language Skills]]
**1 of 8** | [[Quantile and Box-Whisker Plots in the Wolfram Language]] →

## Part of

- [[Statistics Foundations Professional Certificate by Wolfram Research]]

## Appears In

- [[Statistics Foundations Professional Certificate by Wolfram Research]]
- [[Build Your Wolfram Language Skills]]

---

[↑ Back to top](#)