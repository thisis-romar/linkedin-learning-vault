---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: power-bi-data-methods-23487089
url: "https://www.linkedin.com/learning/power-bi-data-methods-23487089"
duration_minutes: 192
duration: 3h 12m
level: Advanced
updated: 3/12/2024
learners: 65085
skills:
  - Data Analysis
  - Microsoft Power BI
exercise_files: true
github: "https://github.com/LinkedInLearning/power-bi-data-methods-3812122/"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQERek4YP-UxwQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709937715535?e=2147483647&amp;v=beta&amp;t=llLfmIN-LfWmN-ry9_rgoU6Q10yHytR2XNy6N82kzEA"
linkedin_topic: Data Science
learning_paths:
  - '[[Introduction to Fundamental Skills for Data Work- Data Analysis and Interpretation]]'
  - '[[Master Microsoft Power BI]]'
prev_courses:
  - '[[SQL- Data Reporting and Analysis]]'
  - '[[Power BI- Working Together with ChatGPT]]'
next_courses:
  - '[[Program Evaluation for Data Science]]'
  - '[[Power BI Dataflows Essential Training]]'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Analysis and Interpretation","position":8,"total":9,"prev":"SQL- Data Reporting and Analysis","next":"Program Evaluation for Data Science"},{"path":"Master Microsoft Power BI","position":2,"total":6,"prev":"Power BI- Working Together with ChatGPT","next":"Power BI Dataflows Essential Training"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - skill/data-analysis
  - skill/microsoft-power-bi
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Power%20BI%20Data%20Methods.md)

![Power BI Data Methods](https://media.licdn.com/dms/image/v2/D560DAQERek4YP-UxwQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709937715535?e=2147483647&amp;v=beta&amp;t=llLfmIN-LfWmN-ry9_rgoU6Q10yHytR2XNy6N82kzEA)

# Power BI Data Methods

> Power BI is a powerful business intelligence tool designed to help users create dynamic interactive data visualizations and help you monitor data, analyze trends, and make smarter decisions. Before you can create any visuals though, you need to get your data into Power BI to use in the modeling process. In this course, Helen Wall helps you handle, import, and transform your data more efficiently, 

> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089) | 3h 12m | Advanced | 65K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Extracting Data from Files]]** (3 videos)
- **[[#2. Extracting Data from Files]]** (16 videos)
- **[[#3. Transforming Data with Cleaning Operations]]** (9 videos)
- **[[#4. Working with Dates and Times]]** (5 videos)
- **[[#5. Data Functions]]** (8 videos)
- **[[#6. Relational Databases and Queries]]** (3 videos)
- **[[#7. Loading Data]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The data at the core of Power BI
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-data-at-the-core-of-power-bi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-data-at-the-core-of-power-bi?u=76281980&t=0)** - The key to any data dashboard is the data itself, but handling that data can sometimes be a bit difficult.
>
> **[0:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-data-at-the-core-of-power-bi?u=76281980&t=6)** So in this course, I'll teach you how to handle your data more efficiently using Power BI.
>
> **[0:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-data-at-the-core-of-power-bi?u=76281980&t=11)** Ultimately, you want to set up your data in a way that's sufficient, scalable, and repeatable.
>
> **[0:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-data-at-the-core-of-power-bi?u=76281980&t=17)** I'll show you how to use the ETL framework to extract, transform, and load your data.
>
> **[0:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-data-at-the-core-of-power-bi?u=76281980&t=22)** By the end of this course, you'll feel comfortable importing and transforming data from many different kinds of data sources.
>
> **[0:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-data-at-the-core-of-power-bi?u=76281980&t=28)** Then you can blend this data together for further analysis.
>
> **[0:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-data-at-the-core-of-power-bi?u=76281980&t=32)** I'm Helen Wall.
>
> **[0:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-data-at-the-core-of-power-bi?u=76281980&t=33)** Let's get started transforming and automating your data processes with Power BI.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** etl (1)
> **Prerequisites:** set up (1)
> **Speakers:** - the (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/what-you-should-know?u=76281980&t=0)** - [Instructor] To maximize your learning and utilization from the content in this course, you should already be familiar with how to navigate and use Power BI.
>
> **[0:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/what-you-should-know?u=76281980&t=8)** You want to know how the workflow within Power BI works on a high level, which includes importing data through the Power Query editor, loading it into Power BI, and creating visuals with this data.
>
> **[0:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/what-you-should-know?u=76281980&t=20)** We're going to focus on the data part of this process in this course, but if you would like to learn more about visuals within Power BI and other tools, I highly recommend checking out other courses in the library on these topics.
>
> **[0:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/what-you-should-know?u=76281980&t=33)** You'll also want to be comfortable using Excel, working with data in a tabular format and basic data types like dates, numbers, and strings, and how to switch between them.
>
> **[0:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/what-you-should-know?u=76281980&t=44)** And unfortunately, Power BI is only available on a Windows machine, so you'll need one of those as well.
>
> **[0:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/what-you-should-know?u=76281980&t=51)** If you want to follow along, you'll need at least a Power BI pro account to test out loading and using the data.
>
> **[0:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/what-you-should-know?u=76281980&t=59)** With that, let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (1), let (1)
> **Prerequisites:** you'll need (2)
> **Speakers:** - [instructor] (1)

#### Course project overview
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=0)** - [Instructor] Let's say that we work at a travel agency that offers California travel packages.
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=5)** In addition to our marketing, let's also say that we want to help them figure out an optimal time to visit Southern California by analyzing weather trends.
>
> **[0:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=15)** Weather data sets are a great way to explore data methods for tools like Power BI.
>
> **[0:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=20)** It's relevant to almost everyone, consistent over time and frequently updated.
>
> **[0:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=26)** The variety and diversity of weather data and their formats also provide great examples for the techniques that we'll learn in this course.
>
> **[0:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=35)** We can get free publicly available weather data from a number of different online resources.
>
> **[0:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=40)** One of them is the National Weather Service or NWS through the website [weather.gov](https://weather.gov).
>
> **[0:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=47)** Another weather data resource is NOAA, which offers a portal called Climate Data Online for querying data sets.
>
> **[0:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=54)** In the exercise files for this course, I'm going to use daily weather data flat files that I obtained through this CDO portal.
>
> **[1:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=62)** This weather data will include the latest measurements as of the course recording date.
>
> **[1:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=67)** However, if you'd like to obtain the latest data to use on your own, here's how you can query the latest data set.
>
> **[1:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=75)** We'll first choose the search tool from our CDO homepage.
>
> **[1:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=80)** We'll then input the parameters that we want to query the weather data set with.
>
> **[1:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=84)** In the first dropdown menu list for the type of data set, let's select daily summaries.
>
> **[1:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=91)** By default, the select date range will display the latest dates in which we have data.
>
> **[1:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=96)** We can always change this later if we would like.
>
> **[1:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=99)** The dropdown menu for the search for options then defaults to stations.
>
> **[1:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=104)** Let's leave this as is for now as well.
>
> **[1:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=107)** And the search term text box, let's search for the Santa Barbara California airport.
>
> **[1:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=114)** We'll then search for this airport location.
>
> **[1:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=117)** Airports are a great places to get weather data from because air traffic controllers rely on accurate and consistent measurements to make critical flight decisions.
>
> **[2:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=126)** We see that the search results display the most likely match the top, but also other potential stations to use as well.
>
> **[2:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=134)** If we want more information on the geographical locations of these stations, we can take a closer look at them on the map.
>
> **[2:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=142)** If we click on the hyperlink to view full details for the Santa Barbara Municipal Airport, we can see the metadata for that station.
>
> **[2:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=152)** This includes the date range of available daily data points that go back to 1941 and the percentage of data coverage over this time period.
>
> **[2:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=161)** We can also note the station ID for this location to use later in other data query methods.
>
> **[2:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=168)** Once we confirm this selected station, let's add it to our cart.
>
> **[2:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=172)** We'll then click on the cart list in the top right to specify how we want to receive our data results.
>
> **[2:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=179)** For the output format of our data, let's select the PDF radio button and the checkbox next to include documentation.
>
> **[3:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=188)** Let's change the date range to the dates between the 1st of January, 2023 and the 31st of December in the same year.
>
> **[3:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=204)** We'll then apply the this date range.
>
> **[3:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=207)** It's important to note that we can't query more than one calendar year at a time, so we'll need to query the data again to expand the date range to other years.
>
> **[3:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=216)** We'll then click on the continue button at the bottom of the page.
>
> **[3:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=221)** Lastly, we can confirm our data request and enter our email address where we'll receive the links to our data once the CDO portal runs our request.
>
> **[3:50](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=230)** We can also obtain data in other format types like A CSV.
>
> **[3:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=235)** This request type involves a few more steps though, so let's choose edit order to go back to the previous page.
>
> **[4:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=242)** We'll change our format output type to CSV instead of PDF, and then click on the continue button again.
>
> **[4:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=250)** There's now another page specific for the CSV format that involves choosing the fields to include.
>
> **[4:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=256)** Let's select all the check boxes on the screen, then click on the continue button.
>
> **[4:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=264)** Regardless of the selected format output type, we'll ultimately end up at the same final order page.
>
> **[4:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=270)** Once we review our requested data and our destination email address, we'll click on the submit order button to run our data query.
>
> **[4:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=278)** I ran the data request for Santa Barbara as both a PDF and CSV format for the year 2023, but to save the tedious of walking through both of them individually, I wanted to edit the order to show you how to do both in the same way that I did behind the scenes.
>
> **[4:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=295)** I also obtained CSV weather data for the same location for all the available dates in 2024 and 2022.
>
> **[5:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=303)** Also, you may not have your files in the same place that I do, so if you're looking to follow along, make sure you're pointing to the right directory in Power BI.
>
> **[5:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=313)** You can do this by opening the source step and updating your file path to the location where you saved it on your computer.
>
> **[5:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=324)** So for instance, my exercise files are located in the desktop folder and the sub folder exercise files.
>
> **[5:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=331)** You'll want to update this file path to the one you're using on your own computer.
>
> **[5:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/course-project-overview?u=76281980&t=338)** And a little bit of a disclaimer, if you've ever used Power BI, you probably know that it's a constantly changing tool and yours might look a bit different, but the overall concepts and framework will be the same.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), continue (3), default, (1), include. (1), type, (1)
> **Env Vars:** csv (5), cdo (3), pdf (3), nws (1), noaa (1)
> **UI Navigation:** click on (6), dropdown (2), select the (1), checkbox (1)
> **Cross-References:** go back to (2), later in (1)
> **Exercise Files:** exercise files (3)
> **CLI Commands:** make (2)
> **URLs:** [weather.gov](https://weather.gov) (1)
> **Analogies:** for instance (1)


### 1. Extracting Data from Files

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Working with Power Query
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=0)** - [Instructor] In the last few years, we've seen a surge in data volume and speed, as well as an increased demand to understand and analyze trends from this data.
>
> **[0:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=10)** Power BI allows us to scale up to this demand by creating models and reports that cater to business users and decision-makers.
>
> **[0:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=19)** But before we get started with Power BI itself, let's talk about one of the most important functions built into Power BI, Power Query.
>
> **[0:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=28)** Using Power Query enables us to connect to and transform data before we load it into our Power BI models.
>
> **[0:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=36)** Power Query Editor formulas share similarities with their Excel counterparts, so you should already be familiar with many of these commands, but there are a few key differences that are important to know.
>
> **[0:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=48)** First, Excel formulas are not case sensitive, while Power Query formulas are.
>
> **[0:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=54)** Next, Excel counts from an index of one, while Power Query uses an index of zero.
>
> **[1:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=61)** Excel type formula conversions are implicit, while Power Query ones observe strict data typing.
>
> **[1:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=69)** Finally, because Power Query doesn't implicitly convert data types, we need to first convert the fields to text data types or set up a text conversion function within the formula.
>
> **[1:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=82)** The language behind Power Query is called M.
>
> **[1:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=85)** You can see it here.
>
> **[1:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=87)** Think of it as the code behind the nice interface that we see here.
>
> **[1:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=92)** For example, when we change the type, we see it reflected in a change type step, but before that, we promote the headers and firstly, we connect to the source step that contains our data.
>
> **[1:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=107)** The good news though, is that if we want to, we can actually edit this code.
>
> **[1:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=112)** We'll be doing some of that in this course as well.
>
> **[1:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=115)** So there's Power Query and there's steps behind the code, but it's not just about writing the code and creating the steps.
>
> **[2:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=122)** It's about how you're getting from point A to point B using Power Query.
>
> **[2:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-power-query?u=76281980&t=126)** And for that we need a framework.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1), function (1), interface (1), type, (1)
> **Analogies:** think of it as (1), for example (1)
> **Cross-References:** in the last (1)
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### The extract, transform, load (ETL) framework
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=0)** - [Instructor] To use Power Query effectively, you'll want to be familiar with the ETL framework.
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=5)** It's a must-know for working with any type of data intake framework, including working with Power BI.
>
> **[0:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=11)** The acronym ETL stands for Extract, Transform, and Load.
>
> **[0:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=15)** It helps us create data tables in tabular form that we can then use in our Power BI models.
>
> **[0:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=23)** Extracting the data enables us to connect to a variety of built-in and other connectors directly within Power Query.
>
> **[0:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=30)** Power BI has over 100 data connectors available directly in the application, including connecting to both cloud and on-premises databases, web connections, and flat files stored either in a computer or online.
>
> **[0:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=43)** Transforming the data enables us to take this initial data connection and transform it into a tabular data format that we can use in Power BI.
>
> **[0:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=52)** With these steps, there are different types of transformations we can take.
>
> **[0:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=57)** This includes cleaning the data to remove unnecessary spaces, correcting spelling issues, and choosing the correct data types.
>
> **[1:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=66)** Data enrichment involves adding columns to the queries or filtering our data, for example, Data integration includes changing the overall structure of our data by doing transformations, like transposing, pivoting, or grouping the data table.
>
> **[1:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=84)** In the final ETL step, we load the shaped and transformed data tables into the Power BI interface.
>
> **[1:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=91)** This involves choosing the type of connection we want, like importing the data or using a direct connection, and connecting related tables together in a multi-dimensional model for our Power BI semantic layer.
>
> **[1:45](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=105)** From there, we can leverage capabilities such as creating DAX measures and data visualizations.
>
> **[1:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=111)** The entire ETL process does not and cannot change or affect anything in the original data source that we connect to because we're essentially making a copy of the data to import.
>
> **[2:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=124)** So don't worry that you're going to change the underlying data by doing something in Power BI.
>
> **[2:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=129)** It's in safe hands.
>
> **[2:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=131)** ETL isn't a one-and-done thing either.
>
> **[2:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=134)** You create a strong framework once and then you can use it over and over again for different projects or updates.
>
> **[2:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/the-extract-transform-load-etl-framework?u=76281980&t=141)** So it's important to think deeply about the thing you're trying to do before actually diving headfirst into the data itself.

> [!info]- Semantic Content
>
> **Env Vars:** etl (5), dax (1)
> **Code Keywords:** interface (1), import. (1)
> **Analogies:** for example (1), such as (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### Power Query objects
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=0)** - [Instructor] A programming object contains variables, functions, and data structures.
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=5)** Power Query objects in M include tables, list records, values, binaries, functions, errors, and parameters.
>
> **[0:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=14)** In Power Query, binary objects are files combined or read using other functions.
>
> **[0:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=20)** Examples of these include CSV and Excel files in our computers, images, and data stored online.
>
> **[0:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=28)** Once we connect to a binary object, we then need to read the data it contains.
>
> **[0:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=33)** We already have a table object in Power Query, which stores data in a tabular format.
>
> **[0:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=38)** This is an example of an object, and I'm going to talk about this quite a bit throughout this course.
>
> **[0:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=44)** Within Power Query in the M language, tables, lists, and records are objects that store structured values.
>
> **[0:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=52)** We can create lists using curly braces.
>
> **[0:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=57)** These can be numerical, like 1 through 10, but they can also contain string values.
>
> **[1:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=66)** We can also create lists using list formulas like for example, a list of dates or by referencing a column of an existing query containing a table object.
>
> **[1:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=84)** So for instance, I can take the measurement field and I can select to convert it to a list in the transform menu options.
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=94)** Notice that lists so far look like columns in a table.
>
> **[1:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=99)** If list objects are a column in a table, then a record object is a row.
>
> **[1:45](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=105)** While a list lives in curly brackets, a record lives in square brackets in pairs like city equals Santa Barbara, and state equals California.
>
> **[2:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=125)** We'll often see records even live inside lists.
>
> **[2:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=132)** We can convert both lists and record objects into table objects from here.
>
> **[2:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=140)** Ultimately, in order to make our data useful in our Power BI model for doing algorithms, visualizations, and DAX calculations, once we load the data, our goal is to convert the queries we want to use in the Power BI model into tables before we load them into it.
>
> **[2:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/power-query-objects?u=76281980&t=157)** List records, functions, and so on, are intermediaries along the way to get this done.

> [!info]- Semantic Content
>
> **Env Vars:** csv (1), dax (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1), for instance (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 2. Extracting Data from Files

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Connecting to text files
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=0)** - [Narrator] Flat files are two-dimensional structures storing data where each line represents a record.
>
> **[0:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=6)** Within each line, it splits up values into separate fields.
>
> **[0:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=9)** Examples of these types of files include .txt, .csv, .tsv, and others.
>
> **[0:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=17)** While we would love to have our data already in a table structure when we read it into an application like Power Query, that's often not the case.
>
> **[0:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=24)** Let's say we're reading a .txt file like this one.
>
> **[0:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=29)** We first need to make sure our queries read each line within the file.
>
> **[0:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=34)** Once we separate the lines, we then want to separate them into their fields.
>
> **[0:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=38)** In this particular example, we're using fixed widths to delineate, meaning that after a certain number of each, it switches to the next field, but you can also separate by characters, which we'll talk about later.
>
> **[0:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=53)** One of the data sets that we'll work with throughout this course is a daily summaries of weather measurements by Land-Based Station.
>
> **[0:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=59)** The official name for this data set is the Global Historical Climatology Network daily, or GHCNd for short.
>
> **[1:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=69)** We can access metadata for this data set on its homepage, which includes an inventory of the station locations which take these measurements.
>
> **[1:18](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=78)** This webpage is an online data repository of the individual NOAA weather station stored as a text file.
>
> **[1:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=85)** I downloaded it to the exercise files already as well.
>
> **[1:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=90)** In Power BI Desktop, let's first connect to this .txt file using the built-in data connector to text or CSV data.
>
> **[1:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=99)** We'll then navigate to the data sources folder in the exercise files to open the ghcnd-stations.txt file.
>
> **[1:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=107)** Rather than loading the data directly, let's choose to transform the data to open and edit it first.
>
> **[1:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=114)** This opens Power Query, so we can see the ETL steps it automatically did.
>
> **[2:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=120)** In the source step we see this query sets up the connection to the file in two parts.
>
> **[2:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=126)** It uses the function File.Contents to return the contents of the path to the .txt file as a binary.
>
> **[2:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=134)** It then reads the binary object within the function Csv.Document even though we connected to a .txt file.
>
> **[2:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=142)** It splits the column into two fixed-width columns at position 0 and 41 by guessing at the split based on the top rows of data.
>
> **[2:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=152)** We can also connect to the online data for the same list of NOAA weather stations.
>
> **[2:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=156)** Connecting to this data source means that we'll have the latest station list for the daily weather summaries as soon as NOAA makes changes to it.
>
> **[2:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=164)** Let's copy this URL first.
>
> **[2:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=168)** Now in Power Query, let's delete our first query and connect directly to the web data instead.
>
> **[2:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=176)** The built-in text data connector in Power Query is just for connecting to files stored in local folders, though, so instead, we'll connect to this data via the built-in web connector by using our station ID list URL that we just copied.
>
> **[3:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=193)** Let's stick with the default settings that Power Query set up to see what we get.
>
> **[3:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=200)** The source step uses the same Csv.Document function with the same default parameters to read the data.
>
> **[3:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=206)** The only difference is the first parameter nested within it that is the actual data source, which uses Web.Contents to get data from the web URL instead of File.Contents to read a local file.
>
> **[3:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=220)** To determine the number of rows in the query, let's first select column one to convert it into a list object.
>
> **[3:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=228)** We'll then use the statistics menu options to count the total items in this list.
>
> **[3:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=234)** This returns 49,187 as the total rows.
>
> **[3:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=238)** This query unfortunately isn't correct as we're not picking up all the rows across all the stations.
>
> **[4:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=246)** If we look at the station metadata documentation page, we should have over 120,000 table records for the station list.
>
> **[4:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=255)** The reason we see this issue has to do with how the query reads quotation marks.
>
> **[4:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=261)** Let's search for this character in our online .txt file.
>
> **[4:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=266)** It returns several matching results.
>
> **[4:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=269)** Let's scroll down the page through them.
>
> **[4:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=274)** Most of these character occurrences appear in pairs within a single line.
>
> **[4:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=282)** However, there's at least one station that doesn't properly close these quotations because it cuts off the closing quotation marks when Power Query reads this data with fixed column widths and interprets all the remaining 70,000 rows plus after this character as the text string crammed together in a single line.
>
> **[5:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=303)** Power Query offers different options for opening these text file types.
>
> **[5:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=308)** If we double-click on the gear wheel for the source step, it opens the configuration options.
>
> **[5:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=316)** There are a few different ways we can mitigate this problem.
>
> **[5:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=319)** One way is by changing the file type we're using to read the web connection to a text file instead of a CSV document.
>
> **[5:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=328)** Once we confirm these options, let's check the source step formula.
>
> **[5:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=334)** It now reads the data using the function Lines.FromBinary to convert the binary object returned from the Web.Contents function into a list of text values split at each line break.
>
> **[5:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=347)** The Table.FromColumns function then creates a table from this list of nested lists.
>
> **[5:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=354)** We'll then check that we have 120,000 rows plus in our table by navigating to the last step of this calculation.
>
> **[6:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=363)** We have almost 126,000 records in our updated table, so we know that we're picking up the correct rows in all the stations.
>
> **[6:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=371)** Let's remove these steps for calculating the total rows now that we know that the number's correct.
>
> **[6:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=377)** We still need to split the fields in the text file.
>
> **[6:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=380)** One way we can do this is by choosing the option to split column by position in the transformation options.
>
> **[6:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=388)** I already determined the fixed-width splits to use, so let's import our split positions as 0, 12, 20, 30, 37, 41, 72, and 80, all separated by commas.
>
> **[6:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=403)** Lastly, let's rename the eight new table fields to describe what they do.
>
> **[6:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-text-files?u=76281980&t=408)** We'll rename them Station ID, Latitude, Longitude, Elevation, Code, Station Name, GSN, and Other in that order.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (6), include . (1), case. (1), this . (1)
> **Env Vars:** noaa (3), url (3), csv (2), etl (1), gsn (1)
> **UI Navigation:** navigate to (1), open the (1), scroll down (1), double-click (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** ghcnd-stations.txt (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)

#### Connecting to CSV files
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=0)** - [Instructor] Text files often use delimiters like commas or tabs to separate the data fields within each record that appear as individual rows in a data file.
>
> **[0:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=9)** A comma-separated values file or CSV file for short separates these values within a row using commas.
>
> **[0:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=19)** Let's first take a look at the CSV file storing the Santa Barbara weather in 2023.
>
> **[0:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=24)** If we open this file in Notepad, we see each record on a separate line and commas between each of the fields, along with the header names in the first row of the file.
>
> **[0:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=35)** Text files theoretically store an unlimited amount of data, subject to constraints for the application we use to open it.
>
> **[0:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=43)** We can however see that viewing it this way is difficult for humans to interpret.
>
> **[0:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=49)** Excel for example can open CSV files but it only displays a million rows or so.
>
> **[0:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=55)** Although it makes it a lot easier to see the transformed tabular structure that we ultimately want to get within Power Query.
>
> **[1:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=64)** Within Power Query, let's set up a new connection to this data using the text CSV data connector and pointing it to the location of the 2023 weather CSV file.
>
> **[1:18](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=78)** We'll then transform our data.
>
> **[1:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=81)** Once we confirm our connection, we see in the source step that the file.content function gets the data from the file path and the csv.document function reads the binary object to create a table object.
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=94)** We can change the CSV configuration details by opening the source step.
>
> **[1:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=100)** One common issue when connecting to data with many columns like this is the potential to have more columns added in the future.
>
> **[1:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=107)** To mitigate this issue during our data connection step, we can set the columns in the second parameter to null.
>
> **[1:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=117)** We can also connect to CSV data online, including those stored in ZIP files like the NOAA weather data.
>
> **[2:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=124)** We can access this data through the CDO portal by selecting data sets.
>
> **[2:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=130)** Let's expand the Daily Summaries section.
>
> **[2:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=135)** We'll then navigate to the linked FTP page.
>
> **[2:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=139)** We'll then select the By Station folder.
>
> **[2:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=143)** We often see data stored in FTP folders like this for bulk downloads because it makes it easier to work with huge amounts of data that they contain.
>
> **[2:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=153)** The developers of this portal also update the data on a daily basis to include the latest data measurements directly in the folder.
>
> **[2:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=161)** From our perspective, this means that we can also easily refresh our data model to include the latest weather measurements and gain efficiencies along the way.
>
> **[2:50](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=170)** Since we want to get Santa Barbara weather data from these folders, let's navigate to its station ID.
>
> **[2:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=177)** There are a lot of stations in this list so I'm going to search for the last five digits of its station number.
>
> **[3:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=183)** So it's going to be 23174.
>
> **[3:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=189)** Yeah, so we're going to choose this link.
>
> **[3:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=192)** This matches our station ID that we worked with earlier.
>
> **[3:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=196)** Once we navigate to the station ID, we'll then right-click to copy the folder location URL.
>
> **[3:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=203)** Let's connect to the web URL directly through our eponymous web data connector in Power Query.
>
> **[3:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=213)** We see that the file extension has .gz on the end, which is a type of ZIP file using the GZIP compression utility.
>
> **[3:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=221)** We cannot typically open it using many built-in native applications on our computers.
>
> **[3:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=228)** Once we confirm our web connection, we still don't see anything in our current query space other than a link to this URL file path.
>
> **[3:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=237)** If we go into the source step formula, it uses the web.contents function to reference the URL to create a binary object but we can't open it directly.
>
> **[4:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=248)** And we see that when we click on it, it doesn't do anything.
>
> **[4:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=252)** The reason for this is that we first need to unzip the binary object storing the weather data before we can read the data in it.
>
> **[4:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=260)** To do so, we'll use the binary.decompress function around our web contents function to create a decompressed copy of the input.
>
> **[4:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=272)** To decompress a binary value, we need to add a second parameter in this function for the compression type as compression.gzip.
>
> **[4:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=282)** We can then hit Enter or navigate out of the step to make sure Power Query updates this.
>
> **[4:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=287)** We now see a link to our CSV file in the middle of our query.
>
> **[4:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=291)** To access its data, we can click directly on it.
>
> **[4:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=296)** After the query's last applied step, when we open the CSV file we now see an imported CSV step added to our applied steps list.
>
> **[5:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=305)** The data now displays as a data table that we can use in our models.
>
> **[5:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=310)** This is a neat trick that I use all the time in Power BI and also Excel to easily unzip compressed files without having to download other applications.
>
> **[5:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-csv-files?u=76281980&t=321)** We'll save this file as Santa Barbara weather and we'll continue to use this file in other examples of transformation functionalities throughout this course.

> [!info]- Semantic Content
>
> **Env Vars:** csv (10), url (4), zip (2), ftp (2), noaa (1)
> **Code Keywords:** function (6), let (5), this. (1), continue (1)
> **UI Navigation:** navigate to (3), select the (1), right-click (1), click on (1), open the (1)
> **CLI Commands:** unzip (2), make (1)
> **Definitions:** is a  (2), means that (1)
> **Exercise Files:** zip file (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)

#### Connecting to Excel files
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=0)** - [Instructor] Extracting data from an Excel workbook is more intensive than connecting to a text file because we first need to connect to the Excel file and then read the sheets or tables within it.
>
> **[0:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=12)** I combined together the yearly weather data from the CSV files into a single Excel workbook called Santa Barbara Weather 2022-2024 with separate sheets for each year.
>
> **[0:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=25)** To get this data into Power Query, we'll use the Excel data connector to point to the folder location and file.
>
> **[0:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=33)** Once we make this initial connection, it prompts us to select the data table or tables that we want to use within it in the Navigator window.
>
> **[0:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=41)** If we rotate through the tables, we can see the names of our sheets within the Excel file.
>
> **[0:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=48)** Let's select the checkbox next to 2023 and 2024.
>
> **[0:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=53)** If we choose more than one table or sheet, Excel will create a separate query for each of them.
>
> **[0:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=59)** The source step for both queries displays the same metadata for the Excel workbook connection, which includes the table and sheet names within that file.
>
> **[1:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=69)** The formula in this step uses the File.Contents function to return the binary of the path, then the Excel.Workbook function to read the contents of the file.
>
> **[1:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=80)** The Navigation step then drills into the individual table objects that we select like the table 2024 in this case.
>
> **[1:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=90)** What if we wanted to combine the sheet together in a single consolidated table?
>
> **[1:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=95)** One way we can do this is by combining the table objects together from the initial source step.
>
> **[1:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=102)** Let's first remove the other query for 2023 because it connects to the same Excel workbook and we want to avoid duplication when we combine them together.
>
> **[1:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=112)** We'll then rename this query Excel connection.
>
> **[1:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=117)** In this query, let's remove the Navigation step and anything after it so we just see the metadata in the source step.
>
> **[2:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=125)** We can combine the tables by going to the Data column containing the hyperlinks to the individual table objects in each row.
>
> **[2:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=134)** Now if we drill into any of the tables, this focuses the query on that table and it adds it to the Navigation step as the last applied steps in the same way we saw when we selected a table in the Navigator window.
>
> **[2:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=147)** However, we lose the ability to access any of the other tables in that Excel connection.
>
> **[2:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=153)** Let's remove these steps and combine the tables directly together from the source step.
>
> **[2:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=159)** Notice there are diverging arrows next to the Data column.
>
> **[2:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=162)** If we expand the dropdown menu, we can combine them together directly by selecting the columns to include in the consolidated table.
>
> **[2:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=171)** Let's uncheck the box next to Use the original column name as a prefix.
>
> **[2:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=177)** Once we confirm our selection, this creates a consolidated data table of all the tables within the Excel file.
>
> **[3:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=184)** From here, we can do transformation steps to clean up the data, like removing the metadata columns that we don't need, promoting the first row as headers, and removing any of the duplicate header names now contained within the data values for each of these respective headers.
>
> **[3:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-excel-files?u=76281980&t=206)** We can then continue to transform this table as we would any other query within our data model.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (2), case. (1), continue (1)
> **UI Navigation:** select the (2), checkbox (1), dropdown (1)
> **CLI Commands:** make (1)
> **Env Vars:** csv (1)
> **Speakers:** - [instructor] (1)

#### Connecting to online Excel files
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=0)** - [Instructor] We can also connect to an Excel workbook file online.
>
> **[0:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=4)** For example, let's connect to an Excel file containing the NOA calculations for the sunrise and sunset times for a location.
>
> **[0:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=12)** We can see this example in the Microsoft Excel section on the left at the bottom for the year.
>
> **[0:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=20)** We can see what these solar calculations look like via Excel online when we open it up in an office apps.
>
> **[0:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=27)** It displays charts for key calculations on the left side and the cells containing their formulas for each of the respective calculations for each day of the year for that location.
>
> **[0:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=42)** Now, yours might look slightly different, but we want to see this in an example of what the calculations look like in this online Excel workbook.
>
> **[0:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=51)** Let's copy the URL to this webpage from the top.
>
> **[0:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=56)** Now, let's connect to it using Power Query through the web data connector, we can then choose to use an anonymous authentication because anyone can technically access it.
>
> **[1:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=73)** When the query returns some view after we confirm our connection, we know that connection works, but is this the type of connection to the web file that we want to set up?
>
> **[1:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=83)** It displays this HTML code and we don't see any of the actual data in that or the display text.
>
> **[1:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=93)** So while online Excel viewing options are great for humans to see the data, they're not great for computers because they add extra layers of UI or user interface on top of the data.
>
> **[1:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=103)** Instead, we want to connect directly to the Excel workbook link.
>
> **[1:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=108)** On the NOA calculations homepage, we'll go to the yearly calculations in Excel.
>
> **[1:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=115)** We'll right click on it and select copy link address.
>
> **[2:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=121)** Now, in Power BI, let's set up a web data connection again.
>
> **[2:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=126)** We'll paste in the URL we just copied, which ends with XLS, and we'll again use the anonymous connection for authentication.
>
> **[2:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=139)** We'll then choose to transform the data.
>
> **[2:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=143)** Now, when we look at the query, this returns, it looks like an Excel file that we store on our desktop, except we're retrieving it online.
>
> **[2:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=151)** It reads the Excel web file connection just like it would one that's saved on our desktop.
>
> **[2:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=157)** We then have the same options for selecting the tables within our file and drilling into the table calculations to see what the results look like.
>
> **[2:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=169)** Let's then save this file with the name Sunrise and Sunset calculations.
>
> **[2:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=176)** One thing we notice for the web connection to the Excel file, and we'll also see this with Desktop Connection, as well as that we don't have the option to change the input parameters directly ourselves as we see in column two for these values and the labels in the first column.
>
> **[3:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=195)** The time zone and geographical location denoted by latitude and longitude coordinates for these calculations are already set.
>
> **[3:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=203)** We also don't see the charts that appeared in our workbook because Power Query doesn't pick them up.
>
> **[3:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-online-excel-files?u=76281980&t=211)** Once we extract this data, we can then transform it as we would any other query, for example, by removing columns that are null and any other type of transformation step that we'll continue to explore in this course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), interface (1), continue (1)
> **Env Vars:** noa (2), url (2), html (1), xls (1)
> **Analogies:** for example (2), just like (1)
> **UI Navigation:** go to (1), click on (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### Connecting to PDF files
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=0)** - [Instructor] The term PDF is an acronym for Portable Document Format.
>
> **[0:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=4)** We often see these file formats for more formal and published reports.
>
> **[0:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=9)** While they're easier for us as humans to read, they're also harder for computers to read because of the very spacing and formatting that make it easier for us to read it in the first place.
>
> **[0:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=21)** When we open a PDF file for Santa Barbara Weather in 2023, we see that unlike Excel, the data tables aren't continuous, and instead span across many pages within the report.
>
> **[0:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=34)** In Power Query, let's choose the PDF data connector to point to the data sources folder storing our PDF file.
>
> **[0:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=48)** Let's then connect to the first table that we see listed in our navigator window.
>
> **[0:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=54)** Like connecting to an Excel file, this drills into the selected table.
>
> **[0:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=59)** Now this consolidates the table together, which we see when we scroll down and look at the months involved.
>
> **[1:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=65)** We see that each month has its own separate page.
>
> **[1:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=70)** There are definitely scenarios where you want to drill into a single table within any file connector, like A PDF, and there are instances when you want to combine them together.
>
> **[1:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=80)** In this particular view, we can remove any of the duplicated headers and take out the headers and footers that we don't need.
>
> **[1:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=89)** We can also combine them together directly in the source step.
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=94)** When we navigate back to the source step, we see the metadata for the tables and the pages within our PDF connection.
>
> **[1:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=103)** Notice the data field only contains rows of hyperlinks to tables.
>
> **[1:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=109)** Each one of these links is a table object that the Power Query is reading from the PDF file.
>
> **[1:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=115)** To access and combine the tables, we can go to our latest source step, or we can drill into it and select the steps from there if we already have a table selected.
>
> **[2:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=126)** It will override the selections after it.
>
> **[2:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=130)** We can also see that there are tables and pages within this view.
>
> **[2:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=135)** Now, if we click into a page, we see that it contains a lot of the header and footer data that we want to get rid of.
>
> **[2:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=146)** If we go back into a table view, so we're going to focus on the table value in the Kind column, and we'll replace the step to see what it looks like.
>
> **[2:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=162)** If we want to combine them together, after filtering them, for example, we would first select the table.
>
> **[2:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=171)** We'll then select the diverging arrows next to the Data column.
>
> **[2:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=175)** We'll select all the columns and uncheck used original column name as prefix, and we see that it joins all the tables together.
>
> **[3:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=189)** We can go back and just use Table 001 for pages 1 through 12.
>
> **[3:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=196)** Let's then clean up the query with some transformation steps.
>
> **[3:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=200)** Let's remove the top two rows in the table through the Remove Rows Transformation option.
>
> **[3:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=211)** After that, let's then promote the first row of the now top row as our consolidated table header.
>
> **[3:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=220)** We can then remove the values that we don't want in the column.
>
> **[3:45](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=225)** For the year field, for example, if we expand it, we don't want to include summary, but we want to include the year 2023.
>
> **[3:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=234)** Because we're getting the weather data for each day in the 2023 calendar year, there should be 365 rows in our transformed data table, which is what we see.
>
> **[4:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=244)** Before we load the data, we also want to make sure that our data types are set for their appropriate fields.
>
> **[4:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=253)** Because there are fewer than 1000 data records, this also makes sure there aren't any errors in the fields for the data types, depending on the data values in each of the respective columns.
>
> **[4:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=265)** And there we have it.
>
> **[4:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=266)** How to use a PDF file and convert it into a useful table in Power Query.
>
> **[4:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-pdf-files?u=76281980&t=273)** Now that we've created our PDF connector, let's also rename it directly in our Query Settings so that we know where the data came from.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (9)
> **Code Keywords:** let (6), override (1), from. (1)
> **UI Navigation:** select the (3), scroll down (1), go to (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Connecting to images as data
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=1)** - Images are data themselves that are stored in different formats than the tabular data we normally work with.
>
> **[0:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=6)** On a high level, this process first involves importing image data as a binary object into Power Query.
>
> **[0:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=14)** We'll then convert it into a text bit map with the help of a few formulas.
>
> **[0:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=20)** Lastly, we'll load the bitmap into Power BI, and convert it back into image data by setting its data category as an image URL.
>
> **[0:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=30)** Our course project focuses on California tourism, so let's bring our company Explore California logo into Power BI as an image.
>
> **[0:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=39)** Notice it's a smaller image.
>
> **[0:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=42)** Power BI supports thumbnail images, but not larger ones.
>
> **[0:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=46)** So if you're working with larger images that you want to bring in as data points, you'll want to resize them first.
>
> **[0:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=54)** We can use any connector to connect to our image, because Power Query doesn't have a built-in connector to image data file formats like PNG and JPEG, like we're using here.
>
> **[1:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=67)** Instead of selecting text files, we'll select all files.
>
> **[1:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=73)** And select the same image from our images folder.
>
> **[1:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=79)** We see the file.contents function connects to our locally stored file to return a binary object.
>
> **[1:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=85)** This object stores our image data as a JPEG file, but we don't see any of the bitmap data, at least yet.
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=94)** We just see a link with the file name on the query screen.
>
> **[1:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=98)** And if we click on it, it doesn't open or do anything.
>
> **[1:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=101)** To read the data in this object, let's add another step below our existing source step by right-clicking on this step and choosing to insert a new step below.
>
> **[1:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=113)** Let's read the data using the function binary to text on the source step above it to convert the binary file storing our image data into texts that Power Query can read.
>
> **[2:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=125)** Within this function, we'll then reference the source step where we connect it to the data above.
>
> **[2:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=132)** Once we convert the image data, we then need to concatenate another expression to the beginning of the formula to read it as a bitmap.
>
> **[2:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=139)** We can do this with a text string, data:image\jpeg;base64,
>
> **[2:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=162)** we'll then concatenate this prefix string to the expression in the binary to text function using an ampersand.
>
> **[2:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=171)** After the forward slash character in the string, we see that we're referring to a JPEG because that's the format of the saved image file that we're connecting to.
>
> **[3:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=183)** If you're connecting to another image format file type, you can also change this part of the text expression to PNG instead, for example.
>
> **[3:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=192)** Now that we created our image bit map using a formula, let's convert this value into a table without any delimiters.
>
> **[3:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=202)** We'll then convert the single column in the table into a text data type.
>
> **[3:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=207)** We'll then load this image data into our Power BI model to make sure the image properly renders in our visuals.
>
> **[3:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=215)** Once we load our image data into the model, let's add this field to a table visual.
>
> **[3:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=221)** We just see a long bitmap text string because we need to convert it into an image first.
>
> **[3:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=226)** To do this, we select the column one field.
>
> **[3:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=231)** Then in the column tools under data category, select image URL from the dropdown.
>
> **[3:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=238)** If you load your image data and you don't see the entire image, you'll want to resize it so it fits.
>
> **[4:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=244)** You can do this through applications like Microsoft Paint to make the image thumbnail sized.
>
> **[4:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=250)** Let's also save our file as image in our exercise files.
>
> **[4:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=259)** We now see a small image of the image data that we brought into Power BI through Power Query.
>
> **[4:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-images-as-data?u=76281980&t=265)** I think it's quite neat that we can do this, and there's a lot of things that we can do with this image data to make our visuals impactful.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (4), this, (2), type, (1), type. (1)
> **Env Vars:** jpeg (3), url (2), png (2)
> **UI Navigation:** select the (2), click on (1), dropdown (1)
> **CLI Commands:** make (3)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - images (1)

#### Setting up folder connection
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=0)** - [Instructor] Connecting to a folder of files in Power Query is immensely helpful because it streamlines a lot of the transformation processes and steps along the way.
>
> **[0:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=9)** Receiving the same file every month in the same file type, we could spend our time importing them separately, or we could expedite the process by putting them in the same folder.
>
> **[0:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=21)** We'll then have Power Query connect to this folder to set up the ETL framework.
>
> **[0:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=27)** And when we add a new file to the folder in the future or many files, we just have to refresh the query to update our data.
>
> **[0:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=35)** We can set a folder connections in Power Query to local computer folders or SharePoint and others.
>
> **[0:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=42)** Folder connections in Power Query can contain any file type.
>
> **[0:45](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=45)** The Power Query supports like connecting to CSV, JSON, Excel, and other files.
>
> **[0:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=53)** Let's first create a new folder connection in Power Query that points to our Data Sources folder in the Exercise Files storing different data files in different formats like Excel, CSV, and image data.
>
> **[1:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=72)** We now have a table that shows a row for each file name.
>
> **[1:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=76)** Let's choose to transform it.
>
> **[1:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=83)** The first column of the table content contains the files in the folder in the form of binary objects storing their data.
>
> **[1:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=90)** We can access the data through the binary hyperlink in each row of this field.
>
> **[1:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=95)** Using a folder as a data connection means we also import all the subfolders within it including a subfolder of image data, which we can see in the Folder Path in the last column.
>
> **[1:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=108)** To show how this folder connection is helpful, let's create three separate queries for the CSV files, Excel files, and images respectively by duplicating our initial query and renaming them accordingly.
>
> **[2:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=123)** Let's first select our images query and we'll choose to filter these items that are only in the Images folder.
>
> **[2:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=134)** Next, let's set up the formulas within this folder connection to read the image data as text bitmaps that we can load into Power BI.
>
> **[2:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=142)** Early in this chapter, we connected to image data, so let's use the same formula we did to read image data as a new column.
>
> **[2:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=152)** We'll call it Images.
>
> **[2:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=153)** We'll use the same formula that starts with a prefix string to specify the data format.
>
> **[2:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=162)** We'll use the ampersand to concatenate it to the Binary.ToText function.
>
> **[2:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=172)** Now, instead of referring to the source step like we did in the previous video, we much refer to the Content column that's storing our images as binary files.
>
> **[3:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=184)** Let's also convert our images into text data types.
>
> **[3:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=190)** We don't have the names of our images, so let's split the name of the image, which says Explore California.jpg, for example.
>
> **[3:18](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=198)** And we'll convert this into two separate columns using the split functionality,
>
> **[3:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=209)** We'll then rename this first field name.
>
> **[3:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=215)** We can then remove the rest of the metadata columns because we don't need them anymore.
>
> **[3:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=227)** Once we load the queries into Power BI, let's go to the images query, we'll then choose the image field, we'll convert the data category uncategorized into image URL, and then we'll add both these fields to a table visual to make sure we can see them.
>
> **[4:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=246)** So that's how we import a folder of images into our Power BI model as a series of data points represented with images.
>
> **[4:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=255)** Now let's continue to transform our other queries through the folder connection.
>
> **[4:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=260)** For the CSV connection, we'll filter our extension down to just the CSV files.
>
> **[4:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=268)** We now see a list of the CSV files as well as the metadata about this folder connection.
>
> **[4:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=273)** We can combine binary objects or read them with other functions.
>
> **[4:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=278)** Let's read the CSV files using the function Csv.Document to reference the binary objects in the content field and a new column that we'll call data.
>
> **[4:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=291)** Like other table objects, we can drill into one of them or we can combine them together by selecting the dropdown menu with the diverging arrows and choosing to confirm all the columns.
>
> **[5:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=306)** This combines the CSV files together.
>
> **[5:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=308)** One trick for this is that the columns that individual files should align, otherwise we'll run into big problems when combining them.
>
> **[5:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=315)** We can then promote the first row as headers and we can continue our transformation process to make it into a usable data table.
>
> **[5:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=326)** We can also use the folder connection for Excel files as well, or filter for xlsx.
>
> **[5:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=335)** Now we only have one Excel file in here.
>
> **[5:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=338)** And we explored earlier how to combine the tabs within them.
>
> **[5:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=341)** But let's see how we would do this from a folder perspective in case we have more files in the future that we want to combine together.
>
> **[5:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=349)** Excel data connections require Power Query to first read the files to determine the tables or sheets in them.
>
> **[5:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=355)** Let's do that in a new Data column, which will set equal to the function Excel.Workbook.
>
> **[6:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=363)** Inside this function, we'll then refer to the binary objects in our Content column.
>
> **[6:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=369)** Now we see one table in our view, and there are actually three tables in the data, so we first need to read the sheets within them.
>
> **[6:18](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=378)** So we'll expand our Data column, and now we see all three sheets as table objects.
>
> **[6:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=388)** We can then expand this view to get all the tables within the folder pertaining to Excel connections.
>
> **[6:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=397)** Like combining CSV files, we can then do transformation steps to clean up our data by removing rows that will cause the query to err out and columns we don't need and so on.
>
> **[6:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=409)** Let's then save our work as a Folder Connection pbix file.
>
> **[6:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=416)** Once we connect to our folder, we can then just refresh the queries directly in Power BI and Power Query to get the latest data.
>
> **[7:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/setting-up-folder-connection?u=76281980&t=423)** It's a great trick to help us save a lot of time when working with monthly data cycles and similar processes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), function (4), continue (2), type, (1), type. (1)
> **Env Vars:** csv (9), etl (1), json (1), url (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1), previous video (1)
> **UI Navigation:** go to (1), dropdown (1)
> **Prerequisites:** set up (2)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)

#### Connecting to HTML and XML
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=0)** - [Instructor] We can easily connect to markup languages like XML and HTML in Power Query.
>
> **[0:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=6)** Extensible Markup Language, or XML, is an older markup language for defining data definitions.
>
> **[0:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=12)** Hypertext Markup Language, or HTML, is a newer standard markup language for creating web pages that uses tags to label elements like headings and tables.
>
> **[0:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=24)** Let's first connect to an XML page storing the latest weather observations for Santa Barbara, California.
>
> **[0:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=30)** We can find this weather data by searching for XML weather data for this location.
>
> **[0:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=35)** The National Weather Service Station ID for Santa Barbara is KSBA, which we see in the webpage address.
>
> **[0:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=43)** Let's copy the URL for this webpage so we can connect directly to it in Power Query.
>
> **[0:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=49)** Now let's connect to this XML webpage through a new web connection in Power Query with the URL string for the XML.
>
> **[0:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=58)** We'll use the anonymous settings for connecting to this file because we don't have to enter any authentication.
>
> **[1:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=67)** Our query now displays a table with a single row of data.
>
> **[1:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=71)** If we look at the Source step, notice that Power Query automatically picks it up to read it as XML tables from the webpage.
>
> **[1:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=81)** Let's also rename this query with the prefix XML Latest Weather for the station name.
>
> **[1:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=88)** If we look through the columns in this table, we see there's a bit of metadata.
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=94)** We can remove some of these columns that we don't need in our new table to make it easier to read and less cluttered.
>
> **[1:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=101)** Let's remove the metadata and keep the measurements.
>
> **[1:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=109)** Next, let's connect to an HTML webpage containing the current weather conditions for the Santa Barbara area.
>
> **[1:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=115)** This live webpage from [weather.gov](https://weather.gov) looks a bit more modern than its XML counterpart.
>
> **[2:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=121)** When we go to a webpage, we don't see XML code explicitly, but rather, the content rendered by this code.
>
> **[2:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=128)** We can see the HTML code behind the website if we right-click on it and choose to inspect our page.
>
> **[2:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=135)** We don't have to understand HTML code, however, to connect to it in Power Query, although understanding HTML can help us troubleshoot more potentially challenging problems or more complex webpage.
>
> **[2:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=147)** We'll again copy this URL to the webpage.
>
> **[2:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=152)** We'll follow the same steps to set up a web connector in Power Query to this URL.
>
> **[2:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=161)** For this connection, unlike the previous one to an XML page, we have to select the table within the web connection.
>
> **[2:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=168)** Power Query picked up that this is an XML page, but I've learned this isn't always the green light that everything is okay.
>
> **[2:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=176)** Instead, we want to make sure we connect to the latest weather measurements that appear in one of these tables.
>
> **[3:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=183)** If we click on Table 1, this displays the weather data.
>
> **[3:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=187)** If we go to the HTML code, this doesn't contain a data table that we want to see, it contains the code.
>
> **[3:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=193)** We see display text, and we see other tables that we're not necessarily looking for.
>
> **[3:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=201)** We are, however, interested in getting the data from Table 1.
>
> **[3:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=205)** We'll choose the checkbox next to this table to load it into our data table.
>
> **[3:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=211)** This displays the selected query in the view as the HTML table we drilled into.
>
> **[3:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=216)** If we click on the Source step, we see that Power Query connects to the webpage using the function Web.BrowserContents instead of Web.Contents because we're connecting to a browser instead of binary webpage.
>
> **[3:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=231)** In the second step of the applied query where we extract the table from HTML, we can see by expanding the formula bar how it uses the tags in the HTML page for the table and tr tags to extract column one and two and the rows associated with them.
>
> **[4:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=251)** Let's rename this query with a name analogous to our earlier XML query.
>
> **[4:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-html-and-xml?u=76281980&t=257)** Because we're connecting to a frequently updated online source for the latest weather measurements, when we set up a data refresh schedule to either of these pages, we'll have the latest weather measurements in our model.

> [!info]- Semantic Content
>
> **Env Vars:** xml (13), html (10), url (4), ksba (1)
> **Code Keywords:** let (7), for. (1), function (1)
> **UI Navigation:** go to (2), click on (2), right-click (1), select the (1), checkbox (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is an  (2), is a  (1)
> **Prerequisites:** set up (2)
> **URLs:** [weather.gov](https://weather.gov) (1)
> **Warnings:** troubleshoot (1)

#### Connecting to JSON data
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=0)** - [Instructor] JSON files are a common format for storing data, especially for computer generated data sources.
>
> **[0:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=7)** JSON data can be tricky for humans to read, but easy for computers to parse.
>
> **[0:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=13)** Let's walk through an example of how to connect to a JSON file storing NOAA H weather results for Santa Barbara for January 1st and second of the year 2024.
>
> **[0:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=23)** The first thing we notice about JSON files is the general structure of the file.
>
> **[0:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=29)** To look at levels of elements, we want to look at their levels of indentation.
>
> **[0:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=35)** When their level of indentation matches up, they're on the same layer of the data when we drill into it.
>
> **[0:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=41)** JSON data might not necessarily appear by default with this nice indentation, but if you would like to display it in this way, I encourage you to check out tools that do enable you to format JSON data nicely like this.
>
> **[0:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=54)** It's important to note that records in JSON data appear in curly braces while lists appear in square brackets.
>
> **[1:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=67)** Power query object syntax doesn't match that of the JSON file, but the good news is that when we import the JSON data, it converts those structures into their appropriate power query objects.
>
> **[1:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=79)** Power BI has a built-in connector for JSON data, so let's use it to connect to data from the Santa Barbara area over a two day period.
>
> **[1:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=88)** As we see here, if our JSON file isn't saved with that extension, we can expand our file type options to all files, and we'll then choose our JSON text file.
>
> **[1:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=99)** If we expand it, we can see what its extension is.
>
> **[1:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=106)** We can see that Power Query figured out what file type it was for us.
>
> **[1:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=111)** Once we bring our data in, notice the power query automatically transformed the data into a table object by adding applied steps for us.
>
> **[1:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=119)** What exactly do these steps do though?
>
> **[2:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=123)** It first accesses the entire JSON file as a record object.
>
> **[2:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=129)** After it converts this JSON file into a table, we can see it consists of two high-level components, the metadata, which is stores as a record object and the data itself in the results, which it stores as a list.
>
> **[2:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=155)** It then expands the record object within the metadata as a result set, and then it expands the record within the results set metadata into separate columns.
>
> **[2:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=173)** Notice how the results appear in a list object in our rightmost column.
>
> **[2:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=178)** These contain the results in a list object.
>
> **[3:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=185)** If we just want to get the results, we can drill into the results list object directly, but we want to keep the metadata as part of our final data table.
>
> **[3:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=195)** If we expand the list object instead, this displays the record objects during our results in the JSON file.
>
> **[3:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=203)** Each of these record objects contains the five fields for the date data type station, attributes and values.
>
> **[3:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=215)** It then expands these records into the five columns pertaining to each respective column label.
>
> **[3:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=226)** Finally, it changes the data type based on the data fields that we have and the values within them.
>
> **[3:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=233)** And it's important to note that we're using a small data set here, but you can scale it out to much bigger data sets containing more than 20 rows.
>
> **[4:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=240)** It could contain 200, 1000 and so on.
>
> **[4:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-json-data?u=76281980&t=245)** Once you scale it out, this process and the logic behind how the steps works remains the same.

> [!info]- Semantic Content
>
> **Env Vars:** json (15), noaa (1)
> **Code Keywords:** let (2), this. (1), finally, (1)
> **Warnings:** note that (2)
> **Speakers:** - [instructor] (1)

#### Connecting to APIs
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=0)** - [Instructor] An API or application programming interface is how computer applications talk to one another.
>
> **[0:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=7)** They enable us to query data or subsets of it.
>
> **[0:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=11)** One way we can use APIs within Power BI is to get data to import into our model.
>
> **[0:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=17)** We can then set up regular, frequent data refresh schedules to this API to ensure that we have the latest data measurements.
>
> **[0:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=26)** Each API is different, but to build an API request, we need to figure out the required components, including the endpoint, the parameters, and the key or token.
>
> **[0:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=35)** Other than the endpoints, the parameters and key or token are sometimes optional.
>
> **[0:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=41)** We're not going to get into building APIs here, but it's useful to know.
>
> **[0:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=46)** We can get the latest hourly weather data from the Aviation Weather Portal available through the National Weather Service.
>
> **[0:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=55)** One of these data sets is the METAR data set, which gives us hourly measurements of the data.
>
> **[1:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=62)** The required components that we need to build the API with are available on its documentation page like we see here.
>
> **[1:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=68)** The fantastic thing about this portal is that it has an interface where we can input and test our parameters, and it will give us the complete API query URL we need to use to get that data in PowerBI.
>
> **[1:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=81)** Let's query the METAR data by expanding this section on the page.
>
> **[1:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=86)** We need inputs to configure our request parameters.
>
> **[1:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=89)** However, to access them, we need to enable that option first by clicking on the Try it out button in the top right.
>
> **[1:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=98)** Let's then choose the single weather station ID.
>
> **[1:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=102)** I know that I'm using Santa Barbara as my station ID, which has the code KSBA.
>
> **[1:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=109)** If you want to look at another weather station, you can find it by searching the National Weather Service.
>
> **[1:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=114)** Some APIs like this one give us the option of the format of the results we want to return, which includes raw, JSON, and so on.
>
> **[2:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=123)** I've used this API before, and I found that raw data, which returns text format data, most consistently works if we want to update the data frequently.
>
> **[2:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=133)** Let's set the TAF parameter to false.
>
> **[2:18](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=138)** We'll then input 1000 hours as the time periods we want to go back in the historical pass for data.
>
> **[2:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=144)** We'll leave the rest of the query parameter inputs blank.
>
> **[2:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=148)** To see what the API request query will look like, let's choose to execute a query.
>
> **[2:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=155)** We see what our API results look like if we scroll down.
>
> **[2:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=159)** We see what our API results look like as a series of text strings, where each measurement time appears as a single row, followed by the data associated with that date and time, which is in UTC time.
>
> **[2:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=173)** If we want to further continue to refine our API here, we can do so by testing it out.
>
> **[3:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=180)** We can see the get request with this API query once we execute it.
>
> **[3:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=185)** Let's copy this get request URL query string so we can use it in Power BI.
>
> **[3:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=192)** In our web connection option, let's copy and paste the URL string from the API testing tool, into our URL input parameter.
>
> **[3:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=201)** Once we confirm our web connection, we see the results.
>
> **[3:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=204)** Notice the Power Query split it into three columns.
>
> **[3:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=208)** This works because the station ID is four characters, and the UTC date time always has the same number of positions within it.
>
> **[3:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=217)** The rest of the data string is not necessarily the same for each measurement, but we see that reflected all in column three.
>
> **[3:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=224)** We'll continue to transform and work with this query throughout the course.
>
> **[3:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=229)** Let's rename it METAR API.
>
> **[3:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=233)** When you're connecting to an API, the documentation and examples are incredibly helpful references to use to develop the query.
>
> **[4:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=241)** I find that working with APIs require both skill and also practice and tenacity to figure out what's going on.
>
> **[4:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=248)** If it doesn't work at first, don't be deterred, and you can try again until it does get the results you want.
>
> **[4:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-apis?u=76281980&t=254)** We can set up API connections in many ways, and this query is one example of that.

> [!info]- Semantic Content
>
> **Env Vars:** api (16), url (4), metar (3), utc (2), ksba (1)
> **Code Keywords:** let (7), interface (2), continue (2), return, (1), pass (1)
> **Prerequisites:** set up (2), configure (1)
> **CLI Commands:** find (2)
> **Documentation:** the documentation (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Connecting to ODATA feeds
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=0)** - [Instructor] OData or open data protocol connections are pre-built API connections that we can extract data from directly.
>
> **[0:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=8)** We can learn more about how OData connections work and their protocols on their documentation page.
>
> **[0:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=14)** These connections aren't always available, but they're useful if they are what we're looking for.
>
> **[0:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=20)** Let's connect to public data for Los Angeles rainfall via an OData connection on the [Transportation.gov](https://Transportation.gov) website.
>
> **[0:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=28)** If we open the Action menus in the top right of the screen, we can see various options for accessing this data.
>
> **[0:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=35)** We see it has an API.
>
> **[0:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=38)** We also see that it has an OData connection, which we can select via access via OData.
>
> **[0:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=44)** This gives us a link to connect directly to the OData source.
>
> **[0:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=48)** We can tell that we're connecting to an OData source because the URL denotes an OData connection within it.
>
> **[0:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=55)** Let's then copy it to use it in Power BI.
>
> **[0:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=58)** In Power BI, we can set up an OData connection directly through its built-in Power BI connector.
>
> **[1:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=66)** We'll choose OData feed.
>
> **[1:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=68)** We'll then paste in the URL to the OData source that we copied from the [Transportation.gov](https://Transportation.gov) website.
>
> **[1:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=74)** Because this is a publicly available website, let's just choose anonymous to connect.
>
> **[1:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=80)** Once we confirm our connection details, we see it establishes the connection, and we can inspect the results via the source step in the applied list.
>
> **[1:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=90)** We see it uses the function OData.Feeds to connect to the URL along with other parameters.
>
> **[1:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=97)** The query detected that this source was a CSV format, so we see it displayed in the table structure and the table object that we want to load into our model, this particular format, return to table, but they may not necessarily be the case with every OData connection.
>
> **[1:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=115)** Let's rename the Query OData Los Angeles Rainfall.
>
> **[2:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-odata-feeds?u=76281980&t=120)** We see it formatted as a table object, and we can continue to transform it in Power Query before loading it into Power BI.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), for. (1), public (1), function (1), continue (1)
> **Env Vars:** url (3), api (2), csv (1)
> **URLs:** [transportation.gov](https://transportation.gov) (2)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Connecting to GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=0)** - [Instructor] GitHub is a developer platform that enables us to create store and manage code.
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=5)** It also enables version control and many facets of project management.
>
> **[0:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=10)** Here's a GitHub account that we'll explore in this video containing data for the weather that we've been working on throughout this course.
>
> **[0:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=16)** This includes a CSV file containing data that we'll connect to from Power BI.
>
> **[0:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=23)** Within Power BI we can connect to GitHub in a few different ways.
>
> **[0:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=27)** Let's first create a new connection by searching for GitHub in our Power Query connection options.
>
> **[0:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=33)** There is a GitHub connection.
>
> **[0:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=35)** Note, there's a suffix on the end of it indicating it's currently in beta mode.
>
> **[0:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=40)** We'll select it.
>
> **[0:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=43)** If we choose to connect to it we see a warning message on our screen telling us that this data connector is still in development and there may be unresolved issues in using it that are unexpected.
>
> **[0:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=55)** So in other words, buyer, or developer in this case, beware.
>
> **[0:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=59)** Let's continue to work on this connection as we do want to see how it works.
>
> **[1:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=65)** We'll then go to our GitHub page to get the information about how to connect.
>
> **[1:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=71)** The owner name here is LinkedIn Learning, and the repository name is the name that we see at the end of the URL.
>
> **[1:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=83)** You might be asked to sign into your GitHub account depending on whether or not it's public or private.
>
> **[1:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=88)** In this case, this is a public repo, and we can see all the different GitHub elements in the list on the left.
>
> **[1:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=97)** From here, we can select them and we can explore them to see how they work.
>
> **[1:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=106)** Another way to connect to a GitHub repo that uses an existing established connection is through a web connector.
>
> **[1:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=113)** Let's go back to our CSV file that we stored on GitHub.
>
> **[1:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=117)** Let's see what it looks like.
>
> **[2:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=120)** We can connect directly to this data of source.
>
> **[2:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=123)** Let's copy the URL for it at the top of the page.
>
> **[2:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=127)** Now let's paste it into our Power Query web connector.
>
> **[2:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=132)** Since this is public, I'm going to use anonymous.
>
> **[2:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=134)** Otherwise, we can log in through various options available on this configuration window.
>
> **[2:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=141)** So notice we don't exactly see a data table.
>
> **[2:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=144)** This is because we're not connecting to the right URL within the GitHub repository for the CSV file.
>
> **[2:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=151)** So let's cancel out of it and we'll go back to our GitHub page.
>
> **[2:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=157)** In our GitHub page, we want to make sure that we're connecting to the raw view of the CSV file.
>
> **[2:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=162)** We'll select the button for raw on the top right of the table.
>
> **[2:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=168)** This displays the raw view, which you see is much harder for us to read because it doesn't have a grey user interface, but like many development endeavors, removing the user interface also makes it easier for computers to parse.
>
> **[3:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=181)** Let's copy this link for the raw view of the CSV file online and use it as our URL for the web connector.
>
> **[3:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=192)** We'll use the same anonymous connections again.
>
> **[3:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=195)** Once we confirm our connection, we see that we're connecting to this view and it looks like a table.
>
> **[3:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=201)** It's the same as connecting to any other CSV file online.
>
> **[3:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=205)** We'll click Okay.
>
> **[3:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=207)** We'll then rename this query Raw CSV, and I'm going to delete the milestones and issues and rename repo details GitHub Beta Connection.
>
> **[3:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=227)** We'll also save this file as GitHub Connection.
>
> **[3:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=234)** Once we make this connection to GitHub, we can continue to transform it as we would any other data source.
>
> **[4:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/connecting-to-github?u=76281980&t=241)** The key to getting it to work is to make sure that we're connecting to the data that we want to use.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), public (3), case, (2), continue (2), interface (2)
> **Tools:** github (16)
> **Env Vars:** csv (7), url (4)
> **Definitions:** is a  (3), in other words (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (1), select the (1)
> **Exercise Files:** github repo (1)

#### Using an R script connector
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=0)** - [Instructor] R is a programming language for statistical computing and graphics, which matches up with many of the undertakings we're trying to do in Power BI too.
>
> **[0:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=9)** We need to run R off our computer for Power BI Desktop when we input our script this way.
>
> **[0:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=14)** Once we load it into a Power BI Service Cloud account, it will then run off the cloud instance of R.
>
> **[0:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=21)** I recommend testing to make sure your R version works and otherwise checking the documentation on this.
>
> **[0:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=28)** To use R and Power BI, either in scripts or in visuals, we first need to install it on our computer, along with any packages we want to use.
>
> **[0:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=36)** In Power BI Desktop, we can configure this connection via the R scripting sub menu in the options menu.
>
> **[0:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=43)** If you have more than one version of R installed as I do, you can select it from the dropdown menu.
>
> **[0:50](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=50)** Power BI already detects these versions of R for you.
>
> **[0:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=53)** You just have to choose the version or the IDE below that you want to use.
>
> **[1:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=60)** I'm going to use the latest current version of R in this example, because it works to create the output that I want to use for an R script.
>
> **[1:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=69)** The built-in Power Query connections are very powerful and extraordinarily flexible.
>
> **[1:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=74)** However, they're not all encompassing, and they're examples of things they don't work well with, like creating date times and working with time zones.
>
> **[1:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=82)** Unfortunately, time zones also change twice a year.
>
> **[1:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=85)** Most of the world where they observe daylight savings time changes, there isn't a built-in way to create a date time zone table in Power BI.
>
> **[1:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=95)** But with the help of R and the lubridate package, we can try this out, and create a date timetable with the time zones ourself.
>
> **[1:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=104)** We'll want to download any R packages like lubridate date, in this case to run the R scripts in Power BI desktop.
>
> **[1:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=111)** Let's copy our code.
>
> **[1:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=114)** We'll then open our Power Query editor by choosing transform data.
>
> **[2:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=120)** In Power Query, let's then select to add a data connector as an R script.
>
> **[2:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=126)** The easiest way I found is to just start searching for R script.
>
> **[2:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=131)** This opens a window where we'll input our R script that we copied.
>
> **[2:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=136)** I recommend testing it out in an IDE like RStudio to make sure the code runs.
>
> **[2:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=141)** I already know this runs for us, so we're just going to paste it in here.
>
> **[2:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=146)** Power BI isn't a good place to develop code like R scripts, because it's not an IDE that gives us error messages as to what's going on if something doesn't work as expected.
>
> **[2:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=157)** Once we run our script, we see it appears as a table object in Power BI called DF or Data Frame.
>
> **[2:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=164)** We can click on it to open it up as new query, and drill directly into it.
>
> **[2:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=171)** Let's rename this UTC and Pacific Date Times.
>
> **[2:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=179)** Lastly, let's change both fields from text values into date times.
>
> **[3:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=183)** The reason the R script converts date times into text values before bringing them into Power BI is that the integration between Power BI, and in this case Power Query, and R don't necessarily pick up date times and dates well.
>
> **[3:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=199)** However, if I pass the date time values as text values, I can then convert them directly in Power Query.
>
> **[3:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=207)** We'll choose date time for both fields.
>
> **[3:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=211)** We now see the UTC time is eight hours ahead of Pacific, which is exactly what we want to see for the state timetable.
>
> **[3:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-an-r-script-connector?u=76281980&t=218)** We'll continue to work with this data table throughout this course, including in the date and date time chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (1), pass (1), continue (1)
> **Env Vars:** ide (3), utc (2)
> **CLI Commands:** make (2)
> **UI Navigation:** dropdown (1), click on (1)
> **Prerequisites:** install (1), configure (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Using a Python script connector
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=0)** - [Instructor] Like R scripts, Python scripts are also useful for the few tasks in Power BI where the functionalities don't quite work to do what we want them to do within the interface.
>
> **[0:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=10)** It can do many of the same things as R, but Python has a lot more capabilities where we can use it for things like integrations and connecting data within larger ecosystems of other applications.
>
> **[0:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=22)** To get Python to work in Power BI Desktop, you'll want to install it on your computer if you haven't already.
>
> **[0:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=28)** You'll also need to install Pandas and Matplotlib libraries or packages in order to have it to run.
>
> **[0:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=35)** Once we upload this to shared accounts like the Power BI service, Python will run off of the cloud instead.
>
> **[0:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=42)** We can access Python scripting through the Options menu.
>
> **[0:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=48)** We'll then choose the Python scripting sub menu, and we can choose our Python directory to use.
>
> **[0:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=56)** It also detects IDEs.
>
> **[0:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=58)** So this is already set up, so now let's run a Python script.
>
> **[1:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=64)** Let's use the following example of a Python script to see how it works.
>
> **[1:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=68)** In this code, we use pandas, which we import as pd, and we then create a Pandas data frame object to store our data with the columns column one, column two, and column three.
>
> **[1:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=80)** Let's copy the code from import pandas to where we create the df variable.
>
> **[1:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=88)** If you're interested in learning more about Python, I encourage you to try it out on your own and to build something more complex if that's something that interests you.
>
> **[1:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=97)** To connect to a Python script, we'll choose New Source, and like the R script, I'm just going to search for Python.
>
> **[1:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=107)** Once the script box opens, we can then input the Python script that we copied.
>
> **[1:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=111)** I already tested this out so I know it runs, but I encourage you to try it out in an IDE like Visual Studio or Anaconda, because running Python code in Power BI doesn't give us the error messages to help us troubleshoot problems.
>
> **[2:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=127)** Again, like our R script, we need to create a data frame or table object from running our script, which in this case is the df data frame.
>
> **[2:18](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=138)** Once we see our display options, we see df as an output from running the script.
>
> **[2:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=143)** We'll then select it to drill into it.
>
> **[2:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=148)** Let's rename our query Python script.
>
> **[2:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-a-python-script-connector?u=76281980&t=151)** Once we make the successful connection, we can then continue to transform our data types or make other transformation steps here in the same way we would any other data connector.

> [!info]- Semantic Content
>
> **CLI Commands:** python (15), make (2)
> **Code Keywords:** let (4), interface (1), continue (1)
> **Prerequisites:** install (2), set up (1)
> **Tools:** visual studio (1), anaconda (1)
> **Env Vars:** ide (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Getting data
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-getting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-getting-data?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-getting-data?u=76281980&t=5)** - [Narrator] Now it's time for you to try these concepts out yourself.
>
> **[0:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-getting-data?u=76281980&t=9)** The Bureau of Labor Statistics, or BLS for short, is a great public data source for US employment.
>
> **[0:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-getting-data?u=76281980&t=16)** We're curious about the employment numbers in Santa Barbara, California.
>
> **[0:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-getting-data?u=76281980&t=20)** But if you're in the US, you can get data for your area.
>
> **[0:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-getting-data?u=76281980&t=24)** I've provided the URL for this API data query in the exercise files.
>
> **[0:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-getting-data?u=76281980&t=29)** Here's what the format of the API query results look like.
>
> **[0:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-getting-data?u=76281980&t=34)** Here's your challenge.
>
> **[0:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-getting-data?u=76281980&t=36)** Use Power Query to connect to these data and transform it into a table that looks like this with the year, period, month name, and employment numbers as appropriately set data types in each column.
>
> **[0:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-getting-data?u=76281980&t=49)** Here's a hint.
>
> **[0:50](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-getting-data?u=76281980&t=50)** If you get stuck on transforming the initial web connection, revisit the JSON data video.
>
> **[0:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-getting-data?u=76281980&t=57)** Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), bls (1), url (1), json (1)
> **Code Keywords:** public (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (light upbeat music) (1)

#### Solution: Getting data
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=5)** - [Instructor] So how'd that go?
>
> **[0:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=7)** Were you able to connect to the API?
>
> **[0:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=11)** Here's how I solved it.
>
> **[0:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=13)** So first, I'm going to get data and choose the Web Connector.
>
> **[0:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=17)** I'll then input the API query to the Santa Barbara Employment numbers, which I got from the exercise files.
>
> **[0:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=27)** Going to click OK.
>
> **[0:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=29)** Now, this data doesn't really look like what we want to see, but we can transform it into the data table we want within the Power Query editor.
>
> **[0:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=40)** Notice that these results look kind of odd, and the reason is we're not reading this data correctly.
>
> **[0:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=46)** If we look at that documentation in the Bureau of Labor Statistics API, this is supposed to be returned as a JSON file.
>
> **[0:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=55)** So let's see what happens if we remove the functions around the web.Contents function.
>
> **[1:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=63)** We want to read the data from the API, but we want to read it into a different format.
>
> **[1:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=69)** We'll use the JSON document function
>
> **[1:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=77)** and we'll make sure that our parameters close on both sides of this function correctly.
>
> **[1:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=84)** Now, we return something that contains list objects and record objects.
>
> **[1:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=89)** We then need to navigate through this maze of objects within the query to get the results we want.
>
> **[1:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=97)** We'll first drill into the results, record object, and then the list object containing the series, and the record object.
>
> **[1:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=107)** And we're getting closer, we see a list object of the data.
>
> **[1:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=112)** Finally, this get says into a list object containing record objects containing the data results.
>
> **[1:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=119)** Let's convert this list into a table with no delimiters, and we can then expand these records into individual columns of their own.
>
> **[2:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=131)** However, I don't need all these fields.
>
> **[2:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=134)** So we'll go back into the steps to expand the columns, uncheck footnotes, uncheck the latest.
>
> **[2:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=144)** Next, we'll change the data type for each field.
>
> **[2:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=148)** Year will be a whole number, period will be text, period name will also be text, and our value will be a whole number.
>
> **[2:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=160)** Lastly, let's rename these fields, Year, Period, Month Name, and Employment Numbers.
>
> **[2:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=179)** There we have it.
>
> **[3:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=180)** We've converted a confusing JSON file into a useful data table that we can use in our challenges in future chapters.
>
> **[3:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-getting-data?u=76281980&t=188)** Well done.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (3), finally, (1)
> **Env Vars:** api (4), json (3)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 3. Transforming Data with Cleaning Operations

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Cleaning text fields
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=0)** - [Instructor] One key part of the transformation process is cleaning the data because it makes the rest of the steps much easier and smoother afterwards.
>
> **[0:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=9)** Examples of text cleaning include removing leading and trailing spaces and standardizing capitalization between values in a field.
>
> **[0:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=16)** (screen whooshes) In our query for connecting to the daily weather stations from NOAA, we already split the columns by fixed widths for their respective fields.
>
> **[0:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=27)** However, one challenge with fixed width splits or splitting by any number of characters is that it becomes easier to introduce leading or trailing spaces into the field, which are hard to spot often until they present a problem later.
>
> **[0:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=40)** Power Query is fantastic for many reasons, but especially because it makes repeating these steps easier by letting us clean the data in an easy and straightforward manner.
>
> **[0:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=51)** For the Data ID field, if we click into a value in the column, we see displays at the bottom of the query.
>
> **[0:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=57)** If we click into this value by highlighting it, we see there are trailing spaces, in this case, one space, that appear at the end of the Station ID, but it stops before the next split of data for the Latitude.
>
> **[1:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=72)** This is because when we split the positions by a certain number of characters, it leaves a single space behind it before it starts the next field.
>
> **[1:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=81)** To remove these extraneous spaces, let's select the entire Station ID column.
>
> **[1:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=86)** We'll then right-click on the header.
>
> **[1:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=89)** We'll select Transform.
>
> **[1:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=92)** It's important to note that this appears because we already set the data type of the field as a Text value.
>
> **[1:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=98)** If this was a whole number or a date, we wouldn't see these Text Transformation options appear for the selected field.
>
> **[1:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=104)** We'll then choose Trim from these options.
>
> **[1:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=108)** Now, when we select this value, we don't see a space after it for the Station ID.
>
> **[1:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=115)** Let's also clean any other text fields using the same Trim functionality in order to remove any white spaces.
>
> **[2:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=123)** We'll do the same with Code, Station Name, and GSN.
>
> **[2:18](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=138)** For the Station Name, let's change the capitalization.
>
> **[2:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=141)** Right now, they're all uppercase characters, which can make it difficult to read, so we'll select the Station Name and choose the Transformation options again.
>
> **[2:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=152)** We can make it lowercase, uppercase, or we can capitalize each word, which is what we'll select.
>
> **[2:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=160)** Now, if we go into the step, we see that it transformed the column, but we didn't have to create a new one.
>
> **[2:45](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=165)** Instead, it capitalized each value in this field and assigned it back to the same Station Name column.
>
> **[2:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/cleaning-text-fields?u=76281980&t=171)** This is really helpful for text values like this because it really saves us a lot of time later.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1)
> **UI Navigation:** select the (2), right-click (1)
> **CLI Commands:** make (2)
> **Env Vars:** noaa (1), gsn (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Removing or replacing values
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=0)** - [Instructor] If we want to replace values in Power BI, we can do this with the replace values functionality.
>
> **[0:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=6)** We can either replace one character with each time it occurs within a field with another one, or we can replace an entire matching string with something else.
>
> **[0:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=17)** If we look at the station name field, there are discrepancies between the spelling and labels between all these names.
>
> **[0:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=22)** There are over 120,000 station names, and they're not necessarily standardized.
>
> **[0:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=29)** For example, we might see periods in one name when we have an abbreviation and not in others.
>
> **[0:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=35)** If we want to remove a period like we see in row three, we can do that through the replace values functionality.
>
> **[0:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=42)** We'll right click on the column name and choose Replace Values.
>
> **[0:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=47)** We'll then input a period as the character we want to replace, and we'll replace it with an empty string.
>
> **[0:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=56)** We can also use multiple characters as strings that we want to replace.
>
> **[1:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=60)** For example, we see discrepancies between how international is spelled.
>
> **[1:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=66)** We'll, again, replace our values to add another step.
>
> **[1:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=71)** We'll say that INTL is international.
>
> **[1:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=77)** We can also replace an entire name in the station names or any other text field.
>
> **[1:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=83)** And in this case, we want it to match the whole field, so we'll say St. John's, and I'm going to replace it with, "This station name is a replacement."
>
> **[1:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=96)** And we see that wherever this matches, part of it, we see it replaced.
>
> **[1:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=100)** However, we don't actually want to see the entire replacement.
>
> **[1:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=104)** Let's open it up again by clicking on the gear wheel, and we'll select Match Entire Cell Contents.
>
> **[1:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=113)** And now, we see it only updates when St. John's represents the entire name of it.
>
> **[1:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=118)** We also need to be careful with this replacement functionality, especially when we're dealing with this many rows like we have for station names.
>
> **[2:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=126)** For example, we replaced INTL with international, but this can cause a problem later.
>
> **[2:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=134)** Let's replace our values, and we'll say that we want to replace Inter, which is another airport name with international, now we see that we've run into another problem and that it replaces international, inter with international in the beginning of the string.
>
> **[2:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=157)** And then so we've got a word that doesn't make sense for international.
>
> **[2:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/removing-or-replacing-values?u=76281980&t=161)** So a word of caution to be careful about how you replace values and look at methods in order to avoid problems like this.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), else. (1), case, (1), this. (1)
> **Analogies:** for example (3)
> **Warnings:** be careful (2), caution (1)
> **Env Vars:** intl (2)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Splitting and concatenating fields
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=0)** - We can split a field into two or more fields based on a selected delimiter, number of characters or position.
>
> **[0:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=7)** Conversely, we can combine them together by going the other way with delimiters and formulas.
>
> **[0:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=14)** Let's first split our station ID for the NOAA stations into their country and the rest of the ID field in our NOAA station list.
>
> **[0:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=24)** We see that the first two characters of the station ID represent the country code.
>
> **[0:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=29)** To split it into two pieces, let's do this once by splitting it at position two, through the split column option.
>
> **[0:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=38)** We'll choose two and we're going to split it as far left as possible once.
>
> **[0:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=44)** This gives us the country code for our station ID that we can then use to perhaps filter or focus on a specific country.
>
> **[0:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=52)** Merging our combining columns works the opposite of splitting the on a high level.
>
> **[0:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=57)** Let's revisit our PDF query, where we obtain the weather data by day.
>
> **[1:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=62)** Let's first rename the year, month, and day fields in the first three columns so they're easier to read.
>
> **[1:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=69)** Right now, each character is on a separate line because of the way the PDF formatted the year, month, and day labels.
>
> **[1:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=76)** So let's simply rename them so they are consecutive characters in the string.
>
> **[1:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=83)** Notice that we don't have the date in our PDF data.
>
> **[1:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=88)** We do, however, have the columns for the year, the month, and the day.
>
> **[1:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=93)** Let's combine them together to create a date.
>
> **[1:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=96)** To do so let's try out the merge functionality and the transformation options for these three fields.
>
> **[1:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=101)** Before we combine them though, let's order them so that the month comes first, followed by the day, and then the year.
>
> **[1:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=109)** We'll then select all three of these newly ordered fields at the same time and combine them together using the merge functionality and the transformation ribbon.
>
> **[1:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=118)** We'll select merge columns.
>
> **[2:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=120)** We'll then use a separator of custom in the form of a forward slash, with a new column named "Date".
>
> **[2:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=133)** We can then convert this into a date data type.
>
> **[2:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=137)** Now sometimes this merge functionality doesn't work because the data types between the merge fields don't agree.
>
> **[2:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=143)** If that's the case, we can use the text concatenation formula to combine them.
>
> **[2:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=148)** Let's go to the step before we merged the columns together and we will add a new column.
>
> **[2:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=156)** Now we want to insert it before we merge them, because once we merge the columns, we don't have access to them anymore.
>
> **[2:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=163)** We'll call this "Date Concatenation".
>
> **[2:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=167)** We'll then use the function "Text dot from" to convert any of these numeric fields into text values.
>
> **[2:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=174)** We'll do so for the month.
>
> **[2:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=178)** After that let's add a forward slash by concatenating into the string with an ampersand.
>
> **[3:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=185)** We'll then select "Okay" to see if this works.
>
> **[3:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=188)** We'll then reopen our column and add the rest of the terms.
>
> **[3:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=193)** We'll again use "Text dot from" for the day, followed by another forward slash and ampersand.
>
> **[3:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=204)** And then finally we'll add "Text up from" for the year.
>
> **[3:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=212)** Now we can check that it picks up the data types correctly by converting it into a date field.
>
> **[3:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=219)** And we don't see any of it air out.
>
> **[3:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=223)** So we have two options for creating a date field, and we can see them both at the opposite ends of this table.
>
> **[3:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=232)** Now, this isn't the only way to create dates, and there's actually built-in date formulas.
>
> **[3:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=237)** Later in this course we'll explore more specific date functions we can use as alternatives.
>
> **[4:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/splitting-and-concatenating-fields?u=76281980&t=242)** But the "Text of from" function and concatenation formulas as well as splitting them, do have a lot of examples and we can see some of them here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (2), type. (1), case, (1)
> **Env Vars:** pdf (3), noaa (2)
> **Cross-References:** later in (1)
> **UI Navigation:** go to (1)
> **Speakers:** - we (1)

#### Text formulas
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=0)** - [Instructor] Text formulas are incredibly helpful because they enable us to extract or combine sections of a string.
>
> **[0:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=6)** For example, we can take the leftmost end characters in a string, the rightmost end characters, the middle end characters starting at M, and add end placeholder characters to the text string M.
>
> **[0:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=20)** Text formulas in Power Query let us create text expressions.
>
> **[0:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=24)** We can use these expressions in columns, and we can also use them to create values by themselves.
>
> **[0:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=30)** Let's create a new blank query to see how this works with the classic US zip code problem.
>
> **[0:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=37)** Zip codes in the US are five digits long.
>
> **[0:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=39)** They can start with any digit from zero to nine.
>
> **[0:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=42)** However, if they start with zero, this first digit doesn't appear in the zip code, especially if we or someone else converted it into a number at some point.
>
> **[0:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=52)** Let's say we have zip code 01002 represented as the value 1002.
>
> **[1:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=60)** This line apply the function Text.Padstart around this number.
>
> **[1:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=67)** We'll then apply to the first number we want to specify what we want to use as our placeholder, which in this case is a zero as a character.
>
> **[1:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=77)** And finally, the length of the text, which is five characters long when we input zero as a character.
>
> **[1:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=85)** We need to make sure to set this, and we see that it doesn't work.
>
> **[1:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=92)** We run into this error message here because we're trying to pad the text chart of a numeric value instead of text.
>
> **[1:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=100)** We can convert this using the function text.from, which is an incredibly useful formula that I use frequently.
>
> **[1:50](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=110)** So let's first make sure this works.
>
> **[1:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=117)** So we'll then add Text.Padstart for zero and again for five digits.
>
> **[2:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=130)** And actually for this, this is where we want to take a look at the function parameters.
>
> **[2:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=135)** We want to put our number of characters in first, followed by the padding that we want to use.
>
> **[2:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=141)** You now see an updated zip code value with five digits that we can use as labels in a data model and so on.
>
> **[2:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=149)** In our METAR data, we have a UTC time, but it's displayed as a kind of strange looking string.
>
> **[2:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=157)** Let's preserve this label for the UTC string so we can reference it later.
>
> **[2:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=162)** But we want to pull the date and time elements from it, which occur at the same position in each of the values in this column.
>
> **[2:50](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=170)** I typically like to preserve columns where I can, because then it makes it easier to reference them later if I need to.
>
> **[2:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=178)** The first digits in the character string for this UTC field, which we'll rename here, these represent the day.
>
> **[3:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=187)** To get this value, let's use the function Text.Start to pull the first two leftmost characters from the string.
>
> **[3:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=199)** Next, let's get the UTC hour within this same column, by using the function Text.Middle.
>
> **[3:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=207)** It will start at... Again, select UTC.
>
> **[3:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=210)** It will start at position two and extend for two places.
>
> **[3:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=217)** It's important to note here that we're starting at position two, even though it is position three that the hour starts at 'cause Power Query uses a zero based index.
>
> **[3:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=227)** Lastly, let's extract the minute, again, using the text middle function.
>
> **[3:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=238)** We'll move it over two positions, so it starts at four, and again, it's two characters.
>
> **[4:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=244)** Lastly, let's convert all of these fields into numbers as whole numbers.
>
> **[4:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=253)** Notice that we don't have the UTC year and month, at least we don't yet.
>
> **[4:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/text-formulas?u=76281980&t=257)** We'll come back and visit this query shortly in this course when we focus on dates.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (6), this, (2), finally, (1), from, (1)
> **Env Vars:** utc (6), metar (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Filtering or removing duplicates
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=0)** - [Instructor] We can apply filtering on our data tables for conditions like a text string contains learn, a number is greater than zero and less than or equal to 1,000, and a date occurs between January 1st and June 30th.
>
> **[0:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=16)** In our Daily Weather table, let's filter Column 3, which contains the data types, so that we see the temperatures.
>
> **[0:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=25)** If we expand the dropdown, we see that it only loads the values for the first 1,000 rows.
>
> **[0:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=32)** Now, we can see more, and there won't be more than 1,000 data types, but it will look at more than 1,000 of the top rows.
>
> **[0:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=41)** We can then filter these conditions to only take the maximum temperature, TMAX, its converse minimum counterpart, and the average temperature, TAVG.
>
> **[0:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=56)** Now, when we look at what the Filtered Rows step does, we see that it takes the Table.SelectRows function and applies it to the table so that each of the Column 3 values has to equal one of these three data types.
>
> **[1:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=72)** We can also use conditions for filtering.
>
> **[1:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=76)** Let's do so on the NOAA station's table.
>
> **[1:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=80)** Let's first filter the station ID.
>
> **[1:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=85)** We're going to look for 23174.
>
> **[1:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=89)** Now, we can say it contains.
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=94)** Now, this returns three potential matches.
>
> **[1:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=97)** The one that we're interested is in California.
>
> **[1:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=99)** However, one problem we see here, which is why filtering data to segment it and slice it to understand what's going on is an important part of the process, is because we're picking up the Los Angeles airport instead of Santa Barbara.
>
> **[1:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=113)** Now, let's get what the Santa Barbara airport is.
>
> **[1:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=116)** We can remove the filter step, and this time we'll apply the filter for the text fields saying contains.
>
> **[2:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=125)** And we'll say Santa Barbara.
>
> **[2:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=131)** Now, this returns an empty table, and the reason is because capitalization is actually important here, so it's not going to take these lowercase letters and convert them.
>
> **[2:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=141)** Instead, I have to explicitly put those into the formula.
>
> **[2:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=148)** So I ran it on the station that I want to use, the Santa Barbara Municipal Airport.
>
> **[2:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=154)** So once I have the station matching, I'm going to copy the station ID and update the Daily Weather query to make sure that it matches the location that I want to use.
>
> **[2:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=171)** Notice how when we update the data, when we refresh it to use the other station ID, the rest of the steps repeat and we see the filtered data step run on the refreshed data table.
>
> **[3:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=185)** Let's also filter by dates.
>
> **[3:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=188)** So we need to make sure, in order to do this, that we have a date field.
>
> **[3:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=192)** So if I change the dates in Column 2, notice we see an error, and the reason is because we already changed the dates earlier.
>
> **[3:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=199)** Instead, we have to do it in an earlier step.
>
> **[3:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=205)** And we'll choose to insert by replacing the current step.
>
> **[3:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=210)** Now, we want to rename this field, Date, to avoid confusion.
>
> **[3:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=219)** And I am going to say that I want the dates to be after the 1st of January, 2022.
>
> **[3:50](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=230)** Now, when we open this up, we actually see more options.
>
> **[3:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=233)** I'm going to choose after or equal to, so it includes January 1st.
>
> **[4:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=240)** Lastly, let's apply filters for the latitude and longitude coordinates so we can see the stations that are around the Santa Barbara airport.
>
> **[4:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=254)** We're going to remove the Filtered Rows step when we filter the station name and instead filter it by latitude and longitude.
>
> **[4:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=262)** Our latitude is going to be greater than or equal to 34 and less than or equal to 35, and our longitude, we'll again use the Between option, is going to be greater than or equal to 119.
>
> **[4:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=282)** You actually want to switch these because they go the other way.
>
> **[4:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=293)** So we see our Santa Barbara airport, and we also see all the stations nearby.
>
> **[4:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filtering-or-removing-duplicates?u=76281980&t=298)** Now, filtering is a very useful transformation function, and we'll continue to explore it throughout this course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (2), this, (1), switch (1), continue (1)
> **Env Vars:** tmax (1), tavg (1), noaa (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** dropdown (1)
> **Speakers:** - [instructor] (1)

#### Filling up and filling down
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=0)** - [Instructor] We might see empty values in our data table.
>
> **[0:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=3)** Sometimes we can filter them out, but that's not always the case.
>
> **[0:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=7)** There are a few different ways we can mitigate this problem.
>
> **[0:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=10)** One is by filling in the blank rows with the value in the previous or the next row.
>
> **[0:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=16)** Let's explore a few examples of this in two existing queries that I put together.
>
> **[0:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=21)** We often see these type of formats in PivotTables in Excel, for example.
>
> **[0:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=27)** I want to put the year in the first column so that it extends down until we see the next year start.
>
> **[0:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=35)** To do this, we right-click on the Year column, and we'll choose Fill, Down.
>
> **[0:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=42)** So notice this doesn't do anything, and the reason is we can't Fill, Down if they're empty or blank cells.
>
> **[0:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=49)** Instead, they have to display Null.
>
> **[0:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=52)** So we'll go to our Changed Type step.
>
> **[0:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=56)** Change this to Whole Number.
>
> **[0:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=59)** We'll choose to insert it.
>
> **[1:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=62)** And we now see the year extend down the entire column with their respective months within the year.
>
> **[1:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=69)** We can also Fill, Up as well.
>
> **[1:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=72)** In this case, we do the same thing where we right-click on the year, and we'll choose Fill, Up instead.
>
> **[1:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/filling-up-and-filling-down?u=76281980&t=79)** These are two ways to mitigate problems with empty values that are very helpful when we need them as part of our transformation process.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1), let (1), extends (1), this, (1), case, (1)
> **UI Navigation:** right-click (2), go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Transforming numerical fields
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=0)** - [Instructor] We can perform numeric calculations on numbers, which include operations, like addition or subtraction and multiplication or division, as well as other calculations like absolute values, exponents, logarithms, rounding, and many more.
>
> **[0:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=17)** So far, we filtered down the Santa Barbara weather to display the temperatures since the 1st of January of 2022.
>
> **[0:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=25)** If we look at column four, we see that these don't look like temperatures; they're extraordinarily hot, so let's rename this Value, and we're going to modify it.
>
> **[0:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=37)** We'll call it Temperature actually, and then we're going to call a column next to it Datatype.
>
> **[0:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=47)** Now we can add a new column for our temperature calculations.
>
> **[0:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=52)** We can, however, take the column and perform calculations on it in place, much like we saw with the text transformations earlier in this chapter.
>
> **[1:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=60)** We'll first highlight the Temperature column.
>
> **[1:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=62)** We can see some of these options if we right click on it and look at the transformation options available.
>
> **[1:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=69)** There are more of them though if we choose our column and go into the standard options.
>
> **[1:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=76)** We'll first divide it by 10 so that we have one decimal place in this number.
>
> **[1:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=84)** Now this gives us the calculation in Celsius.
>
> **[1:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=88)** Now, in order to convert to Fahrenheit, we first need to take this column and we're going to again, apply a calculation to it.
>
> **[1:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=96)** This time we're going to multiply it by 1.8, and we'll then add 32 to it.
>
> **[1:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=109)** Here we see our Fahrenheit temperatures, however, we've got two decimal places, and we want to kind of see them in whole numbers so they make a lot more sense to read.
>
> **[2:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=121)** I'm going to move this column to the beginning so we can see all the options in it, and then right-click on it again and we'll choose to round it.
>
> **[2:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=135)** We can round up or down.
>
> **[2:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=136)** I'm going to just round it to the nearest whole number.
>
> **[2:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=140)** We'll input zero decimal places, and notice this transforms it in place.
>
> **[2:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=146)** So we see how the transformations work; some of them add new columns, and some of them perform the transformation on a column that we already have.
>
> **[2:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transforming-numerical-fields?u=76281980&t=156)** Let's then rename this Temperature F, and I'm going to delete the other columns because I don't need them anymore.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), delete (1)
> **UI Navigation:** click on (1), right-click (1)
> **CLI Commands:** make (1)
> **Versions:** 1.8 (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Add a new column
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-new-column?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-new-column?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-new-column?u=76281980&t=5)** - [Instructor] Ready for your next challenge?
>
> **[0:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-new-column?u=76281980&t=7)** Using our original Santa Barbara Employment data, your challenge is to add a new column, Month, to the existing data table.
>
> **[0:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-new-column?u=76281980&t=15)** Make sure this column returns the actual month numbers from numbers 1 through 12.
>
> **[0:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-new-column?u=76281980&t=20)** Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Add a new column
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980&t=0)** - [Narrator] There are a couple ways to solve this problem, but here's how I did it.
>
> **[0:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980&t=9)** I first examined the table structure to figure out what fields would be useful to find the dates.
>
> **[0:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980&t=16)** For example, we could select the period or the month name to use as references to calculate the month number.
>
> **[0:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980&t=24)** I'm going to use the period field and extract the last two characters in it to find the actual month number.
>
> **[0:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980&t=32)** I'll add a new column to this table that I'll call Month.
>
> **[0:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980&t=38)** I'll then say Text.End.
>
> **[0:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980&t=42)** I'll then refer to period and I want the right two most characters, so I'll put a two in the second parameter.
>
> **[0:50](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980&t=50)** Now we see this returns 11, so it matches November.
>
> **[0:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980&t=54)** 10 matches October, and so on.
>
> **[0:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980&t=57)** While we're at it, let's also convert this new month field into a whole number.
>
> **[1:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980&t=62)** Like we can see on line 12, we can filter out the annual numbers by either removing month 13 from our month column, or we can remove the annual value from the month name.
>
> **[1:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980&t=77)** I'm going to choose the latter option and deselect annual from the month name.
>
> **[1:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980&t=84)** There we have it.
>
> **[1:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980&t=85)** We've created a new month field.
>
> **[1:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980&t=87)** Now where will this come in handy?
>
> **[1:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-new-column?u=76281980&t=89)** We'll explore this in the next chapter.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Working with Dates and Times

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Dates functions
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=0)** - [Tutor] Understanding and using date functions effectively within Power BI and within Power Query can make a huge impact on our modeling process.
>
> **[0:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=9)** We can use dates to build other parts of the EDL framework as dimensions for aggregating our data, and with many different calculations.
>
> **[0:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=19)** Date function categories include Dates, DateTimes, DateTimeZones, Time, and Duration.
>
> **[0:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=27)** Power Query has thorough documentation on these date functions and much more.
>
> **[0:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=32)** We can see the function groups if we scroll down in the Functions overview list.
>
> **[0:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=39)** We're going to cover a few key ways to use these functions, but I encourage you to explore more of them on your own to see if there are other functions that you find useful to your own work.
>
> **[0:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=51)** We're going to focus mostly on date functions first.
>
> **[0:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=54)** We can create a date using the #date function, which will set up in a new blank query.
>
> **[1:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=61)** If we hit Enter before entering our parameters into the date function, we see what the required parameters look like.
>
> **[1:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=70)** This function requires us to input the year, month, and day in order to get our date.
>
> **[1:18](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=78)** We can also input it directly in the query editor.
>
> **[1:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=86)** This function requires us to input the year, month, and day, in that specific order, within the expression to return a date.
>
> **[1:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=93)** The date needs to be an actual date.
>
> **[1:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=95)** If it's out of range of those dates, we'll see an error message.
>
> **[1:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=102)** We already saw these date formulas behind the scenes when we set up filters on our weather data.
>
> **[1:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=114)** Notice how Power Query compares each of the values in this date field to the date evaluated within the date expression for this filter.
>
> **[2:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=125)** We can also use the date function on an entire field or several fields.
>
> **[2:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=132)** In the PDF query, we have separate fields for the year, month, and day.
>
> **[2:18](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=138)** We can use this to create a new Date column containing these dates.
>
> **[2:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=148)** We'll input them in that order within the function.
>
> **[2:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=152)** We had an error message here, and it's not because the field names look odd because each letter's on a different line.
>
> **[2:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=159)** Instead, we need to convert each of the input parameters in the date function into integers.
>
> **[2:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=166)** If we look at the fields themselves, we see that Month and Day are already integers, but Year is not.
>
> **[2:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=177)** We'll add the function Number.From around the first parameter for the year.
>
> **[3:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=185)** We can use the function Number.From to convert any of our inputs in the formula, and we can also use them to convert dates entirely.
>
> **[3:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=196)** For example, we can do (2023, 1, 16), for example, and if we put Number.From around it, this returns a serial number representing the date.
>
> **[3:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=213)** We can conversely convert this serial number into a date using the Date.From function.
>
> **[3:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=221)** These are useful functions to have on hand for doing calculations in Power Query that involve converting dates back and forth between numeric values in order to work in certain ETL frameworks or formulas.
>
> **[3:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=233)** Once we get our date into its appropriate date datatype, we can then use it in other formulas.
>
> **[4:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=240)** For example, in the daily weather, let's add a new column that consolidates all the dates along each month and each year within the date column.
>
> **[4:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=250)** Call this Month-Year.
>
> **[4:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=252)** And we'll use Date.StartOfMonth.
>
> **[4:18](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=258)** Actually, we'll start with the end.
>
> **[4:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=263)** And we'll input our existing Date field as the input parameter.
>
> **[4:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=271)** This gives us a date at the end of the month.
>
> **[4:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=273)** To move it to the beginning of the month, let's use the analogous StartOfMonth function on the same date.
>
> **[4:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=280)** The Date function doesn't have to return a date either.
>
> **[4:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=283)** We can use the Date function's .Year and .Days and .Month to return values that are integers instead of dates.
>
> **[5:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=309)** Date formulas can even return text.
>
> **[5:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=311)** Two of the most useful ones that I use all the time are the Date.MonthName formula, which returns the full month name; and I also use Date.WeekdayName, which returns the full weekday name of each date.
>
> **[5:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=332)** And actually this one is Date.DayOfWeekName.
>
> **[5:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=342)** If we use the function Date.Weekday, it's important to note that it starts at 0 and goes through 6, which is different from Excel, which starts at 1 and goes through 7.
>
> **[5:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=357)** And this one is also the day of the week.
>
> **[6:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=362)** We can also see here how the IntelliSense for these functions helps us figure out the date function that we want to use.
>
> **[6:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=370)** And while Excel is on our mind, how do we calculate the time now and the date today?
>
> **[6:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=377)** Let's calculate the equivalent of now in Excel using the DateTime.FixedLocalNow function, which doesn't take any input parameters.
>
> **[6:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=386)** We'll do this as a new function.
>
> **[6:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=392)** This returns the local date and time wherever you or your computer is located, which in my case is in Southern California.
>
> **[6:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=400)** We can compare it to the equivalent for the UTC current DateTime by swapping out Local with UTC in this expression.
>
> **[6:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=413)** And we're going to include the time zone here.
>
> **[7:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=420)** To get the local date, let's revert it back to the local time first.
>
> **[7:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=428)** We then need to get the date of this DateTime, which we can do by nesting it in the function DateTime.Date.
>
> **[7:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=436)** This gives us the local date wherever in the world we are.
>
> **[7:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=439)** Of course, this isn't the same for everyone, and those of you working across different time zones have certainly learned this the hard way.
>
> **[7:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/dates-functions?u=76281980&t=446)** We'll talk more about how to deal with DateTimes, and potentially time zone problems, later in this chapter, though.

> [!info]- Semantic Content
>
> **Code Keywords:** function (20), let (4)
> **Env Vars:** utc (2), edl (1), pdf (1), etl (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1), find (1)
> **Prerequisites:** set up (2)
> **Cross-References:** later in (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [tutor] (1)

#### Creating a dates table
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=0)** - [Instructor] Today, calendar tables are immensely useful in Power BI because we can use them as dimension tables in our model to connect data tables together and perform calculations.
>
> **[0:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=10)** First, though, we need a dates table with contiguous dates in it.
>
> **[0:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=14)** If you don't have one already, here's how we can make one using M code and date functions that we learned in the last video, We'll first use so by creating a new query with the list function List.Dates.
>
> **[0:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=29)** This function has three parameters, the start date, the number of periods, and the duration that each period lasts.
>
> **[0:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=36)** We first need to input the start date, which we can do with the help of the date function.
>
> **[0:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=42)** We're going to set this equal to 2022, 1, 1.
>
> **[0:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=46)** Now let's set up this function to get the next 10 years of dates, which we'll input as 365 multiplied by 10.
>
> **[0:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=56)** Lastly, we need to specify the duration, which we can do with the duration function.
>
> **[1:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=63)** The first input for this is the days, and we want one day between each of them, followed by three zeros.
>
> **[1:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=72)** If we look at this list, and we reverse the items, we see that we're a few days short of the end of the year 2031.
>
> **[1:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=80)** This occurs because between these two dates, there are two leap years, so we're two days short.
>
> **[1:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=87)** Next, let's convert this list into a table object directly in the List Transformation Options.
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=94)** We'll select no delimiters.
>
> **[1:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=98)** We'll also change this data type to Date, and we'll rename it Date as well.
>
> **[1:45](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=105)** Let's call this first query Dates 1.
>
> **[1:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=109)** This List.Dates function is quite neat, and it really helps us create a dates table that we can use quickly.
>
> **[1:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=115)** However, we see that we're still a few days short.
>
> **[1:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=119)** Accounting for leap years can be quite painful in a lot of time series calculations, even for those who have done it for a long time.
>
> **[2:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=126)** We can, however, add a step where we calculate the difference between the dates, or we can try an alternative approach using another list formula.
>
> **[2:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=139)** We'll first create a new query, and we'll set it equal to a list with values between one and 10 as placeholders for now.
>
> **[2:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=148)** This creates a list object we can then convert into a table.
>
> **[2:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=153)** We'll again rename the column Date, and we'll change the data type into a Date as well.
>
> **[2:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=161)** Let's rename it Dates 2 before we get any farther.
>
> **[2:45](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=165)** This returns a table of 10 dates from over 100 years ago.
>
> **[2:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=169)** However, if we adjust the start and end values by replacing the 1 and the 10 in the list objects with date values, we can create a dates table that's useful for us.
>
> **[3:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=181)** Let's replace 1 with the date function, starting on the first of year of 2022, and we'll replace 10 with the date function from 2031, 12, 31, so the end of December.
>
> **[3:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=203)** However, our entire query now errors out because these are dates, not numbers.
>
> **[3:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=208)** To convert these values into numbers, we can use the Number.From function and put them in front of both of our date calculations.
>
> **[3:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=224)** So once we've nested these formulas, let's see what we get.
>
> **[3:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=229)** We can also make this formula dynamic so it updates every day, if we would like.
>
> **[3:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=235)** To do so, there's a few different ways we can do this.
>
> **[3:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=239)** We could use DateTime.Date, DateTimeZone.FixedUtcNow.
>
> **[4:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=256)** Now we see it goes through the latest UTC date, but it doesn't go after that.
>
> **[4:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=262)** Once we build a date table like this, we can continue to add columns to it, like the year, month, weekday, start of week, and so on.
>
> **[4:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=270)** It's very helpful to have these dates tables because they're game changers in our modeling process.
>
> **[4:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/creating-a-dates-table?u=76281980&t=276)** Once we create these dates queries, let's save this entire file as Dates.pbix.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), let (7), this. (1), this, (1), continue (1)
> **CLI Commands:** make (2)
> **Env Vars:** utc (1)
> **Cross-References:** in the last (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Working with different time zones
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=0)** - [Instructor] We're all spread out all across the world in many time zones depending on where we live.
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=5)** This means it might be 5 p.m. where you are right now and someone else might live 12 hours ahead.
>
> **[0:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=11)** To standardize dates and times across the world, we can normalize the date times to UTC or what's formally known as coordinated universal time.
>
> **[0:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=20)** We can create date time values with the function date time.
>
> **[0:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=25)** We see its first three inputs are year, month, and day, like the date function.
>
> **[0:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=30)** After that, we input the hour, minute, and second.
>
> **[0:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=38)** Notice that it doesn't have a time zone in this function.
>
> **[0:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=41)** We can add a time zone using another function, hashtag date time zone, where the last two parameters represent the hours relative to UTC and the minutes.
>
> **[0:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=53)** Let's use negative eight for the Pacific time.
>
> **[0:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=56)** Next, let's create a date time zone list for these date time zones using the list function that supports this functionality.
>
> **[1:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=65)** We'll start it on March 9th, 2024 at midnight Pacific time,
>
> **[1:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=75)** which is negative eight hours behind UTC.
>
> **[1:18](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=78)** We'll extend this out three days, which is three times 24 hours.
>
> **[1:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=84)** And lastly, for our duration, we're going to input zero days, one hour and one hour between each one of these date time zones.
>
> **[1:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=96)** However, as we go down the list, we might notice there's actually a problem with the way that we've set up this function, and it doesn't have anything to do with power query.
>
> **[1:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=107)** The time zone changes from Pacific Standard Time on March 9th where it's eight hours behind and on 1 a.m.that day it goes forward an hour, so it's now seven hours behind UTC.
>
> **[2:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=122)** Our date time zone function doesn't account for this.
>
> **[2:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=124)** It uses the same time zone across all these hourly measurements.
>
> **[2:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=129)** Instead, I've brought the date times in using an R script that we explored earlier that accounts for the change in time zone using the Lubridate R package.
>
> **[2:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=139)** I started it on March 9th at 12 a.m. UTC, and we scroll down and we see the date times for both UTC and Pacific, so we can see the time zones changed in our table.
>
> **[2:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=155)** Let's add another column for the time zone difference.
>
> **[2:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=160)** We'll take the Pacific field and we'll subtract UTC from it.
>
> **[2:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=167)** We'll then convert this into a duration data type.
>
> **[2:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=172)** Notice it now displays negative eight on the first day when we have these measurements.
>
> **[2:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=177)** However, as we scroll down, we see when the time zone changes from being negative eight hours behind UTC to negative seven.
>
> **[3:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=187)** Once we have this conversion stored in a date timetable like this, we can use it in modeling without having to worry about dealing with time zone changes, because we'll just convert everything to UTC in our data and then when we want to view it in local Pacific time, we can change that where we need to.
>
> **[3:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-different-time-zones?u=76281980&t=205)** Having a date timetable like this is a game changer.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (3), this. (1), type. (1), this, (1)
> **Env Vars:** utc (9)
> **UI Navigation:** scroll down (2)
> **Definitions:** known as (1), is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Add a Date field
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-date-field?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-date-field?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-date-field?u=76281980&t=5)** - [Narrator] Let's do our final challenge.
>
> **[0:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-date-field?u=76281980&t=8)** It would probably be helpful to have an actual date field in our data table.
>
> **[0:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-date-field?u=76281980&t=13)** Your challenge is to add a new date field that references the month field we calculated previously.
>
> **[0:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-date-field?u=76281980&t=20)** You want to make sure the day and the date is on the last day of each respective month.
>
> **[0:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/challenge-add-a-date-field?u=76281980&t=25)** Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (light upbeat music) (1)

#### Solution: Add a Date field
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-date-field?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-date-field?u=76281980&t=0)** - [Narrator] So how was your last challenge?
>
> **[0:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-date-field?u=76281980&t=7)** Let's put that month field into good use by using it in a date formula.
>
> **[0:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-date-field?u=76281980&t=13)** We don't have the day of the month at all, but we can instead use the placeholder day one inside the #date function.
>
> **[0:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-date-field?u=76281980&t=21)** We'll create a new date field to reference the date formula.
>
> **[0:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-date-field?u=76281980&t=30)** Inside the function, we'll reference the year, in the first parameter, followed by the month number, the month field in the second parameter, and we'll put a one in the third and final parameter to represent the first day of this respective month.
>
> **[0:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-date-field?u=76281980&t=49)** Once we confirm this formula returns date values, let's then nest it inside the function Date.EndofMonth to move each of these new rows dates to the end of their respective month.
>
> **[1:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-date-field?u=76281980&t=66)** We can also change the data type of our new date field.
>
> **[1:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-date-field?u=76281980&t=71)** Lastly, we don't need the year, period, month name, and month in our table anymore, because the new date field represents these values.
>
> **[1:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-date-field?u=76281980&t=81)** Finally, let's reorder the column, because I prefer the date field to come before its respective values.
>
> **[1:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-date-field?u=76281980&t=88)** So if you did a different approach, that's great too.
>
> **[1:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/solution-add-a-date-field?u=76281980&t=91)** Part of the fun of data modeling is that there's rarely just one solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (3), finally, (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Data Functions

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Using conditional functions
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=0)** - [Instructor] We can add rules-based logic to our data models using functionalities like conditional columns.
>
> **[0:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=6)** The high-level logic of the conditional formula says that if condition one is met, then we return this result.
>
> **[0:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=14)** Otherwise, if condition two is met, we return another result and so on.
>
> **[0:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=19)** If none of the above conditions are met, then we return this alternative result.
>
> **[0:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=25)** When we apply this logic to power query conditional formulas, these sections of the diagram match to our if then, else if then and so on until our final alternative catch all result of else.
>
> **[0:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=38)** Like other formulas in Power Query, it's also case sensitive, so we need to write them out in lowercase letter clauses if we create conditional formulas manually.
>
> **[0:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=49)** If we take a closer look at our hourly weather measurements for Santa Barbara that we obtained through the METAR API, the UTC date timestamp contains only the day, hour, and minute of the measurement.
>
> **[1:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=62)** Earlier in this course, we used text formulas to extract the day, hour, and minute from these timestamps.
>
> **[1:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=70)** However, the timestamp doesn't contain the year and month that we can create a complete UTC timestamp web that we can then link up with our date time table.
>
> **[1:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=81)** To start, I calculated the UTC of today.
>
> **[1:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=85)** What this does is it takes the current local fixed UTC and it gets the date from it.
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=94)** So at the time of recording, this is January 12th, 2024.
>
> **[1:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=100)** Now remembering that we don't have the year or the day, if we scroll down into this data, we see that in some scenarios the day is actually after the current date if we use the current month as our month reference.
>
> **[1:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=119)** So instead we need to move this back to the previous month.
>
> **[2:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=124)** To do so, I have a formula for the UTC of last month by moving it back a single month.
>
> **[2:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=132)** I moved everything to the start of the month and then I moved it back because there are months that may not appear in the previous month and this will air out.
>
> **[2:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=141)** So to account for that, I use the first of every month.
>
> **[2:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=147)** I've then calculated the day of the UTC today.
>
> **[2:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=152)** So this is where the fun starts.
>
> **[2:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=155)** We want to move back to the previous month for the days in which we want to use the previous month's measurements for our UTC date timestamp.
>
> **[2:45](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=165)** So we want to have first condition to account for this in our year.
>
> **[2:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=171)** I'll select the last step and choose to add the conditional column.
>
> **[2:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=177)** Now, the conditional column dialogue box enables us to choose the column and the operator and the value.
>
> **[3:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=186)** However it's limiting.
>
> **[3:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=187)** We can't directly add a formula in here.
>
> **[3:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=192)** So instead of using this, I'm going to create the formulas myself as a custom column.
>
> **[3:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=200)** I'm going to first calculate the year.
>
> **[3:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=204)** Well, this is going to say that if the day of our timestamp is less than or equal to the UTC current day, then we're going to use the year of the current UTC month.
>
> **[3:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=224)** Now, if this isn't true, then we're going to use the year of the previous month as UTC last month.
>
> **[3:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=239)** Now let's repeat this logic to add the month.
>
> **[4:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=246)** Again, we'll say that if the day of the current date timestamp that came in through the METAR data is less than this fixed point we're using for the current UTC, and again, yours will look different, but you can still apply this formula.
>
> **[4:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=264)** Then we're going to use the year of this month.
>
> **[4:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=276)** Otherwise, we'll use the year of last month.
>
> **[4:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=286)** And we want to make sure that we have our if then else syntax here.
>
> **[4:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=293)** And I want to make sure that I'm using the month for both of these.
>
> **[5:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=311)** Now let's check our results.
>
> **[5:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=312)** If we scroll down toward the bottom of the table, we see that when we're looking at data from the previous month, it references the previous year that we see here in our current data setup.
>
> **[5:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=325)** We're looking at the year of the previous month, and then we're also looking at the month, as well.
>
> **[5:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=329)** January is a great example for this because we have to rule back both the year and the month.
>
> **[5:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=335)** Once we calculate this, I'm going to change the data types.
>
> **[5:45](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=345)** And lastly, I'm going to add a column to get the UTC date time for METAR.
>
> **[5:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=354)** I can take those new fields that I've put together, the year, the month, and then the day, hour and minute that I already calculated in this model.
>
> **[6:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=369)** I want to make sure that I use zero for the seconds because I don't have that measurement otherwise.
>
> **[6:18](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=378)** So once I set my date time, there we have it.
>
> **[6:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/using-conditional-functions?u=76281980&t=381)** This is how we can use conditional logic for a real world problem like this, which is otherwise quite difficult to solve.

> [!info]- Semantic Content
>
> **Env Vars:** utc (12), metar (3), api (1)
> **Code Keywords:** this, (3), let (2), else. (1)
> **CLI Commands:** make (3)
> **UI Navigation:** scroll down (2), select the (1)
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Transposing tables
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=0)** - [Instructor] Transposing is an incredibly useful transformation functionality that enables us to change a data table's orientation by switching its rows and columns.
>
> **[0:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=11)** In a live weather connection to an HTML page storing the Santa Barbara live weather, notice the orientation of the data table.
>
> **[0:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=19)** It's also important to note that your view may look different from mine if you update the data to use the latest weather measurements.
>
> **[0:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=28)** The labels for the latest measurements display as the rows in column one, while the values associated with these rows appear in column two.
>
> **[0:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=37)** Let's put our rows into the column headers by transposing our entire table through the transpose options in the transform ribbon.
>
> **[0:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=47)** Notice how we don't see our original column names, column one and column two and the transpose table.
>
> **[0:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=53)** We would expect to see them in the rows for column one.
>
> **[0:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=57)** We can then promote our first row as headers to create a data table with a single row in many columns or fields representing the data measurements.
>
> **[1:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=69)** I also included another data table example to test out transposing with.
>
> **[1:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=75)** We see the years in the column headers along the top and the labels A, B, and C in the rows for the category.
>
> **[1:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=82)** Let's perform the same steps we did with the weather measurements to transpose the table.
>
> **[1:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=88)** Notice, however, that we're completely missing the years that were originally in the headers that we wanted to put in the first column of the table.
>
> **[1:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=97)** So let's remove the transpose step in this query for now.
>
> **[1:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=101)** To mitigate this issue, let's first demote the headers into the first row by choosing this option from the same menu as the options for promoting the header.
>
> **[1:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=112)** We'll click on the dropdown menu and we'll say use headers as first row.
>
> **[1:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=118)** We now see generic column names based on their position from left to right, from column one to column six in their order.
>
> **[2:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=126)** Now let's transpose the table again.
>
> **[2:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=130)** We now see the years in the first column of our table.
>
> **[2:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=134)** Once we have the table transformed the way we want, let's promote the first row as headers, and we'll also change the name of the category field into years to represent its newly changed shape.
>
> **[2:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=146)** These types of transformations are quite useful in tables like financial statements summaries, where we often see the dates across the top and the labels within them in the rows in the first column.
>
> **[2:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=157)** Once we transpose our data table, we can then continue on with any other transformation steps we want to include.
>
> **[2:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/transposing-tables?u=76281980&t=164)** For example, we might want to split the dew point field in our HTML latest weather measurements.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), continue (1), include. (1)
> **Env Vars:** html (2)
> **UI Navigation:** click on (1), dropdown (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Grouping fields and values
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=0)** - [Instructor] Grouping allows us to aggregate fields based on other dimensions in the table.
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=5)** Let's say we want to aggregate our daily weather data for Santa Barbara by their average high temperatures.
>
> **[0:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=11)** Let's first filter the data type field to only the TMAX rows.
>
> **[0:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=16)** In our data table, we also have a field for the month and year, which gives us the first date in any month.
>
> **[0:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=24)** Let's use this as our dimension that we're grouping by.
>
> **[0:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=27)** We'll select the field and choose the grouping options from the Transform menu.
>
> **[0:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=32)** In the dialogue box that opens, we'll then choose to average the temperature field as the aggregation by the month and year field.
>
> **[0:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=41)** We'll give this new column the name, Average High Temperature.
>
> **[0:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=46)** This returns a table with two columns.
>
> **[0:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=49)** The first one is the date dimension that we're aggregating over, and the second is the average high temperature for each of these month and year combination labels.
>
> **[0:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=59)** In the formula bar, we see that grouping involves the function, Table.Group, first, using the month, year field as the dimension, and then using the list of average function to average the values across all the rows in the group date dimension.
>
> **[1:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=75)** Let's also explore more advanced options here for the grouping by reopening it again in our applied steps.
>
> **[1:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=83)** We'll first choose the Advanced options.
>
> **[1:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=87)** Next, let's remove the existing date field and instead use the year field and the month name field instead.
>
> **[1:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=97)** Let's also add another field to the aggregations by calculating the highest temperature in each year and month.
>
> **[1:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=108)** Once we confirm these updates, we see our group table now has four columns.
>
> **[1:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=113)** The year and the month name are two dimensions, while the average high temperature and the maximum high temperature are two aggregated numbers across these dimensions.
>
> **[2:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=125)** Another neat trick that we can do in grouping is to aggregate the values, but also maintain the existing data points within the grouping options.
>
> **[2:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=133)** We'll again, reopen the group to row step.
>
> **[2:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=136)** Let's then add another aggregation to the bottom of the configuration window.
>
> **[2:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=141)** We'll call this new field, Data, and we'll choose to include all rows as its operation.
>
> **[2:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=149)** Notice, we now can't select a column, and we'll see why in a moment.
>
> **[2:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=154)** Once we confirm our new grouping options, we see this new field appear as a new column on the far right of the table containing table objects.
>
> **[2:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=163)** Each one of these tables represents all the rows within the year and month dimensions that we see on the left of the table if we drill into them.
>
> **[2:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=172)** Once we navigate back to the aggregated view, we can transform this column in the same way we would for other table objects that we saw earlier in our connection examples.
>
> **[3:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=181)** Let's expand these rows to include everything except the fields of the year and the month that are already in the aggregated table.
>
> **[3:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=189)** The number of rows in the expanded table are the same as the number of rows we started with before grouping them.
>
> **[3:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=195)** We now, however, have aggregated values along the dimensions that we group them over.
>
> **[3:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=201)** From here, we can continue our calculations like comparing the maximum and average high temperatures to their more granular, daily high temperature counterparts.
>
> **[3:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=210)** Grouping enables us to access some calculations we could not otherwise do in Power Query as we see here.
>
> **[3:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/grouping-fields-and-values?u=76281980&t=216)** For large data tables, grouping helps us improve the efficiency and performance of the table, even though we might lose some granularity for some of the details along the way.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (2), continue (1)
> **Env Vars:** tmax (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Merging and appending data
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=0)** - [Instructor] Now let's explore two more functionalities for combining two tables into one table.
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=5)** The first is merging, which is where we take an existing table and combine it with another along a common key that they share in a horizontal combination.
>
> **[0:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=16)** We can see how these tables combine using a left join along the key field.
>
> **[0:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=21)** This adds the related category fields to the combined data table.
>
> **[0:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=27)** Appending data, on the other hand, involves matching up the matching column names vertically, like we're stacking them on top of one another.
>
> **[0:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=36)** We see how this combines them together in a table with the same amount of columns, but more rows because we're stacking the rows on top of one another.
>
> **[0:45](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=45)** Let's first explore merging options in Power BI.
>
> **[0:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=49)** We'll merge the METAR API, which contains the hourly weather data measurements with the date times states table we created with an R script.
>
> **[0:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=59)** We're doing this so we can obtain the Pacific date time for each of our measurements at the Santa Barbara airport.
>
> **[1:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=66)** We'll choose to merge along the hourly weather data to add the Pacific date time for each of the UTC times to the table.
>
> **[1:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=75)** To make it a bit less cluttered, we're going to remove some of the columns that we don't need.
>
> **[1:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=84)** Also going to rename two of them into Station ID and METAR String.
>
> **[1:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=93)** We'll select the UCC Datetime column.
>
> **[1:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=96)** We'll then choose Merge Queries from the top ribbon.
>
> **[1:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=100)** In the merge dialogue box we'll choose to use the UTC Datetime field.
>
> **[1:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=106)** We'll then choose the Datetimes and the UTC field.
>
> **[1:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=112)** We'll make it Organizational security for both.
>
> **[1:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=117)** We can choose the join kind that we want to use.
>
> **[2:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=120)** I would choose either the left outer or the inner, much like we see in SQL queries.
>
> **[2:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=127)** The relationship between the metadata UTC Datetime and the date times key is one-to-one.
>
> **[2:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=134)** So we see that we have the same number of matches 129 for both of them.
>
> **[2:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=140)** Once we merch the data, after we confirm our choices, it then displays the data, or in this case the matching Datetimes, as table objects in a new column.
>
> **[2:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=152)** We can expand them so they display across all the rows in the merge data table.
>
> **[2:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=158)** We'll choose to just display Pacific because we already have the UTC datetime.
>
> **[2:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=164)** Next, let's explore appending two tables together.
>
> **[2:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=168)** We're working with Santa Barbara temperatures.
>
> **[2:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=171)** Let's also compare this to Los Angeles temperatures by taking the weather measurements at LAX.
>
> **[2:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=179)** To do so, I'll add Santa Barbara to the end of the daily weather query, and let's remove any of the transformations that we don't necessarily want to keep.
>
> **[3:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=196)** In this case,
>
> **[3:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=207)** I just want the temperature, the data type, the date, and then the station name or the station ID.
>
> **[3:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=215)** Let's then duplicate the daily weather data, and I'll denote it as LAX in the query name.
>
> **[3:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=226)** Then change it to 23174 to 23174 in the URL link that we're connecting to.
>
> **[3:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=237)** We know that these tables have the same columns because all we did was change the ID after we duplicated them.
>
> **[4:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=243)** We didn't change any of the table structure or ETL framework along the way.
>
> **[4:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=248)** We can then choose either one of these tables to append them together.
>
> **[4:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=253)** In the dropdown menu lets append the queries as a new query.
>
> **[4:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=260)** We'll then choose the individual tables.
>
> **[4:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=262)** We can combine more than two together, but we're just going to append two.
>
> **[4:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=273)** This creates a combined data table.
>
> **[4:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=275)** We can tell which location is which by the station ID in our new combined table.
>
> **[4:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=283)** I would recommend exercising caution, though, when merging fields as this isn't a strength of Power BI.
>
> **[4:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=289)** It's however, a strength of SQL as we'll explore in the next chapter.
>
> **[4:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/merging-and-appending-data?u=76281980&t=294)** Merging the data flattens it, and we want to keep an eye on the performance of Power BI if we should explore options other than merging it.

> [!info]- Semantic Content
>
> **Env Vars:** utc (5), metar (2), sql (2), lax (2), api (1)
> **Code Keywords:** let (6), case, (1), type, (1)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (1), dropdown (1)
> **Cross-References:** in the next (1)
> **Analogies:** compare this to (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### Pivoting and unpivoting data
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=0)** - [Instructor] Let's say that we have a table of data that we're looking to summarize.
>
> **[0:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=4)** It has Year, Category, and Revenue as three individual fields.
>
> **[0:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=9)** We can create a PivotTable to summarize the total sales by category in the rows and the year in the columns.
>
> **[0:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=16)** Notice how much easier it is to read this way.
>
> **[0:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=20)** Pivoting is different from grouping because it enables us to put a field as the column header names while grouping aggregates based on the rows.
>
> **[0:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=27)** Although we can have multiple aggregations even of the same fields in the rows too.
>
> **[0:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=34)** Unpivoting the data reverses this pivot aggregation, but it's not the same thing as the original data table.
>
> **[0:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=41)** For example, when we pivot our data table, we keep the revenue aggregations because we lost this granularity when we originally pivoted it.
>
> **[0:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=52)** In our daily weather data for Santa Barbara, let's remove the columns we don't need, so we only have three of them.
>
> **[1:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=60)** This leaves us with the Date column, the Datatype, and the Temperatures.
>
> **[1:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=65)** It's helpful to remove columns we don't otherwise want to use before the pivoting transformation, so it doesn't accidentally cause duplications along the way.
>
> **[1:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=75)** In our Datatype column, when we expand it, notice we see it has TMAX and TMIN.
>
> **[1:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=81)** We want these to be individual headers in the top of the table.
>
> **[1:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=86)** We'll choose to pivot the Datatype column, which we do in the Transform menu.
>
> **[1:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=95)** We'll then want to select the values that we want to display in the columns when we pivot it.
>
> **[1:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=100)** So, in other words, the data type, the temperature maximum, and temperature minimum will be the column header names, and will have the values for the temperatures within their rows.
>
> **[1:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=113)** In the Advanced option, we can choose to calculate the average of the values field.
>
> **[1:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=119)** It doesn't matter what aggregation we use here because for each date, we only have one measurement of the TMAX value and one of the TMIN.
>
> **[2:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=128)** The average and sum will return the same results.
>
> **[2:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=131)** But in the interest of consistency, we don't want to necessarily sum temperatures if there was a duplicate of the data, So instead, we'll choose an average calculation.
>
> **[2:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=144)** This creates a summary that's easy for us to view, where we can see the date and the respective high temperature and low temperature for each date.
>
> **[2:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=152)** Let's rename TMAX, High Temperature, and TMIN, Low Temperature.
>
> **[2:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=160)** Now let's see what this looks like if we show the PivotTable across the months instead of the dates.
>
> **[2:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=168)** I'm going to leave the month name in here
>
> **[2:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=176)** and we'll open the Pivot Column step again, and this time we'll remove the date.
>
> **[3:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=185)** We want to do that before we pivot it.
>
> **[3:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=190)** And don't worry, we're going to add them back again shortly.
>
> **[3:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=195)** Now, when we see the PivotTable, we see that it only contains 12 rows, one for each month in the calendar year.
>
> **[3:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=204)** We could always sort the rows by their month number, but we see how it aggregates the average temperature along the month names now instead of the dates.
>
> **[3:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=223)** Next, let's duplicate this query and unpivot it as a separate example.
>
> **[3:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=229)** I will denote this as unpivoted.
>
> **[3:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=238)** Unpivoting data is one of my favorite tricks in Power Query because it can save so much time.
>
> **[4:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=243)** Let's unpivot the table we just pivoted to display it in the same format as the original data table, but with different attribute labels, high temperature and low temperature, instead of their acronyms.
>
> **[4:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=256)** There are different ways we can unpivot data, but I find it quite useful to use the columns we want to keep the same as the reference points.
>
> **[4:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=265)** In this case, we have the Station ID, the Date, and the Month Name as the fields that we want to remain as the backbone of our unpivoted data.
>
> **[4:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=276)** I take this approach for unpivoting data because we often see column headers change or expand in their number over time, especially with time series data, so it's helpful not to hard code the columns that we're unpivoting, instead choose the ones that we're keeping the same.
>
> **[4:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=293)** Let's right click on these column headers and we'll choose Unpivot Other Columns.
>
> **[5:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=301)** Notice that we now have new column headers that have generic names for the attribute and the value.
>
> **[5:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=307)** Let's rename them Category and Temperature to be more specific and avoid confusion later.
>
> **[5:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=314)** Unpivoting the data in this case is the reverse of the pivoting process because we only have one high temperature and low temperature measurement for each month.
>
> **[5:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=323)** However, that's not the case in a lot of examples.
>
> **[5:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/pivoting-and-unpivoting-data?u=76281980&t=326)** Depending on how we aggregate our data, we often lose the granularity when we pivot it and we want to think about how we want to use the data before we make that decision.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), type, (1), case, (1)
> **Env Vars:** tmax (3), tmin (3)
> **UI Navigation:** select the (1), open the (1), click on (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=0)** - [Instructor] Parameters are query objects that return a single self-contained value.
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=5)** They minimize reliance on outside files.
>
> **[0:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=8)** We can also use them in multiple queries within Power Query at the same time.
>
> **[0:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=13)** The term parameterized queries or functions involves passing the parameters into something else.
>
> **[0:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=19)** First, though, we need to set up the parameters to use.
>
> **[0:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=23)** We access our parameters through the Parameters menu in the top ribbon.
>
> **[0:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=28)** In the Home tab, we'll select the dropdown menu.
>
> **[0:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=33)** We'll choose to create a new parameter.
>
> **[0:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=36)** Let's first create a new parameter for the station ID with a suponomous name.
>
> **[0:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=41)** We'll set as a text data type, and we're setting it here as a text data type because that's the data type of the field in the existing daily weather query.
>
> **[0:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=53)** And the second dropdown will say that it can take any type of value.
>
> **[0:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=57)** We can then set the default value of the station ID to Santa Barbara from the newest station list that we already set up in our connection.
>
> **[1:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=66)** So it's going to be the same as the station ID that we see in the field behind the managed parameters box.
>
> **[1:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=76)** For the parameter description, let's add details that we're getting the default station ID from the NOAA station list, and we're going to pass it into the URL if they need to get access to it.
>
> **[1:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=90)** We'll say the default station ID is for Santa Barbara Airport.
>
> **[1:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=99)** Once we load the parameter, we see it creates a new query, which is denoted by the parameter icon.
>
> **[1:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=106)** Now we can use this parameter in other queries.
>
> **[1:50](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=110)** Let's go into our query where we connect you the live weather data from the zip file on the NOAA website.
>
> **[1:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=119)** We'll go to the source step and we'll take out the station ID right before .csv.gz and after the last forward slash.
>
> **[2:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=131)** To put the parameter in, we'll make sure that we close the quotations around it.
>
> **[2:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=136)** Between these two text strings, let's put in two ampersands.
>
> **[2:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=140)** I'm going to add some spaces to them so they're a bit easier to see.
>
> **[2:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=144)** We'll then input our station ID, which we can pass into this formula like a variable.
>
> **[2:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=154)** Now let's check that it works.
>
> **[2:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=157)** Once our query updates, we see it returns the same result.
>
> **[2:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=162)** If we change it to the LAX station ID instead though, the query changes again completely.
>
> **[2:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=168)** We'll just replace nine zero with seven four at the end.
>
> **[2:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=174)** So we see updating the parameter updates the daily weather query as well.
>
> **[2:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=179)** We can access our parameter through the edit parameter option in the parameter settings.
>
> **[3:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=185)** However, this just enables us to change the input that's passed into the parameters.
>
> **[3:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=192)** We'll change it back to Santa Barbara.
>
> **[3:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=199)** We can however, edit it through the option for managing the parameters.
>
> **[3:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=206)** Let's also add another parameter for the date.
>
> **[3:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=210)** We'll choose new parameter, and I'm going to call this start date.
>
> **[3:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=215)** For the suggested options, I'm going to choose a date data type, and the current value is going to be the default option we currently have already selected, so let's use 1/1/2022.
>
> **[3:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=232)** Once we create this new parameter, let's apply it in our queries.
>
> **[3:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=236)** If we go into our daily weather query, we filtered our date so that we had a date on or after the 1st of January of the year 2022.
>
> **[4:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=249)** We'll swap it out here.
>
> **[4:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=251)** And we're going to instead input our start date, which is the parameter referencing the start date input.
>
> **[4:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=262)** Now let's change it to another date.
>
> **[4:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=265)** I'm going to say 2024, and we'll navigate back to our weather data.
>
> **[4:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=273)** Now we see it's applied the filter for the start date based on the input.
>
> **[4:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=279)** The query picks it up and we see it in our final result.
>
> **[4:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=284)** We can convert the parameters back to normal queries by right clicking on them and choosing convert to query.
>
> **[4:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=292)** This converts it into a value that's then passed into the daily weather in this case.
>
> **[5:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=301)** Update my start value again, and we see that this updates our daily weather query for Santa Barbara again.
>
> **[5:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=311)** So we see how to change these parameters into other queries like values.
>
> **[5:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/parameters?u=76281980&t=316)** It's also important to note that if we plan an uploading it to Power BI Pro or another service account, we can't change the parameters once we publish the report.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), type, (2), pass (2), self (1), else. (1)
> **Env Vars:** noaa (2), url (1), lax (1)
> **UI Navigation:** dropdown (2), select the (1), go to (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Exercise Files:** zip file (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Custom functions
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=0)** - [Instructor] On a high level in programming function store a series of steps that we're repeating over many times.
>
> **[0:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=6)** Functions typically take one or more input parameters and return a result.
>
> **[0:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=11)** Like, many other facets of Power BI and Power Query, we can let the application do a lot of the work for us by tapping into built-in functionalities.
>
> **[0:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=21)** Let's explore how to set up a function by using an example where Power Query automatically writes the functions for us.
>
> **[0:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=28)** Let's connect to a folder of CSV files.
>
> **[0:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=40)** Once we make this folder connection, we see the metadata for this folder displayed in the columns.
>
> **[0:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=46)** However, we don't see the actual data.
>
> **[0:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=49)** This folder option gives us an option of combining and transforming our data.
>
> **[0:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=54)** Let's choose this option to see what Power Query generates for us.
>
> **[1:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=62)** Now, it's worth noting that we're using a CSV connection specifically for this, and I've identified that beforehand.
>
> **[1:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=67)** So let's choose one of the CSV files to use as a way to test out how the query works.
>
> **[1:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=75)** This isn't the only way to connect to CSV files, but it's definitely one way to explore how to get functions to work within Power Query.
>
> **[1:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=84)** Let's confirm this selection to see what we get.
>
> **[1:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=91)** Now notice we have a lot more queries all of a sudden.
>
> **[1:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=96)** Now if we go into our files, I'm going to take the Source step and I'm going to filter out everything that is not a CSV.
>
> **[1:45](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=105)** So I'll just select the CSV from this dropdown.
>
> **[1:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=111)** So now we see a combined data table that includes the column headers and the values within them.
>
> **[2:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=125)** We can see what function Power Query wrote for us.
>
> **[2:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=128)** If we go into the step for invoke the custom function, we see it uses the function Transform File, so we'll select it.
>
> **[2:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=137)** We can see there's an FX next to it.
>
> **[2:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=140)** Now, one way we can invoke a function is by passing a parameter into it, which is what this function does.
>
> **[2:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=147)** There are a number of other components in this query.
>
> **[2:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=150)** Let's see what it looks like by choosing the advanced editor.
>
> **[2:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=154)** So, now we see the structure for creating a function within Power Query.
>
> **[2:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=159)** We see that it uses the let syntax and it passes parameter one into the function.
>
> **[2:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=166)** We then use this parameter one to read the file, promote the headers, and then each one of these files is passed in and the transformations performed.
>
> **[2:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=179)** We can then see how this integrates with the rest of the steps within the query.
>
> **[3:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=184)** The functions invoked in one step and there are still many other transformations that occur along the way.
>
> **[3:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=191)** So this function enables us to pass in a binary object, which in this case is a CSV file, into the function, it does something in the function and it returns a clean CSV result that we then integrate into our data sources and we combine all of those query outcomes together for each of the individual files.
>
> **[3:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=212)** Let's create a custom function on our own.
>
> **[3:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=215)** To do so, we're going to reference our daily weather data, I'm going to duplicate it and I'll call this function testing.
>
> **[3:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=228)** Now, I'm also going to convert this back into a parameter for the station id, so we can test how this function works.
>
> **[4:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=244)** To create a function, one of the most straightforward ways to do this is to right-click on it and we'll select Create Function.
>
> **[4:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=252)** Now, one of the reasons I chose this is because I already passed in a parameter, and that does make it easier to convert the function into something useful.
>
> **[4:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=260)** I'll call this Read CSV zipped file from NOAA.
>
> **[4:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=269)** We can then pass in the parameters for the station ID, and we can choose the start date.
>
> **[4:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=276)** Let's choose something that's, 1st of January of 2020.
>
> **[4:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=284)** Going to then type in the Santa Barbara station ID and I'll select Invoke.
>
> **[4:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=293)** Once we run the function it returns a table object for each station containing the weather data for that relevant station, which in this case is the station ID we see in the first column.
>
> **[5:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=304)** This invokes the function for a single station.
>
> **[5:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=307)** We can also call the function for multiple stations.
>
> **[5:11](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=311)** Let's create a table containing the station name and station ID for Santa Barbara and the LAX airport.
>
> **[5:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=320)** I'll just call this table NOAA Stations.
>
> **[5:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=326)** We'll then add another column to our data table.
>
> **[5:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=329)** We'll choose to invoke a custom function.
>
> **[5:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=333)** We'll call this new column "Data" and we'll invoke our function.
>
> **[5:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=338)** To read the CSV file from NOAA.
>
> **[5:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=342)** Use the station ID, the start date, we'll set to 1/1/2022.
>
> **[5:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=351)** Once we run the function, it returns a table object for each station name that we can then expand out into separate columns.
>
> **[6:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=362)** Now, if we load this data table into Power BI Pro, we'll actually run into issues.
>
> **[6:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=368)** The error message that we'll see is that it doesn't support mashup queries.
>
> **[6:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=373)** The reason is we're taking the station ID and station name and we're invoking the custom function on it.
>
> **[6:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=380)** And this isn't something that the Power BI service allows.
>
> **[6:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=383)** So we'll get an error message and we won't be able to automatically refresh it.
>
> **[6:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/custom-functions?u=76281980&t=388)** This is an example of where I've found that appending the data is a good alternative to doing this and perhaps exploring other more scalable solutions as well.

> [!info]- Semantic Content
>
> **Code Keywords:** function (25), let (11), pass (2), this, (1)
> **Env Vars:** csv (10), noaa (3), lax (1)
> **UI Navigation:** select the (1), dropdown (1), right-click (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Adding data types in M code
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=0)** - [Instructor] If we look at the data where we get the hourly weather data measurements for the weather for Santa Barbara, we notice in the applied steps that there's a lot of different steps going on here before we get to our final result.
>
> **[0:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=14)** One of these is that we change type five times.
>
> **[0:18](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=18)** We change it initially when we connect the Source step and it converts all the fields that we see here to text.
>
> **[0:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=26)** It also converts the data type when we add columns, and again, when we add other columns, and two more times after that.
>
> **[0:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=37)** So while we'll still see the Change Type step for the second step in the Applied Steps list, we can remove a lot of these additional steps to change the type by putting them directly in the column formula.
>
> **[0:50](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=50)** To do so, we'll go into the step where we added a particular column.
>
> **[0:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=56)** At the end of this function, before the final closing parentheses, let's set our data type for this new field.
>
> **[1:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=66)** So day is going to be a number, so we'll set this to the Number.Type, and notice how it's within the parentheses, so we see here is that it's a second optional parameter in the add column function.
>
> **[1:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=84)** We'll then enter.
>
> **[1:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=85)** We see it updates the Day formula to display as a numeric value in the form of a decimal.
>
> **[1:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=93)** We see that before adding this, we don't have a data type for the column we just created.
>
> **[1:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=99)** So if we were to add one column and then we change the type, this is two steps.
>
> **[1:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=103)** What this is doing is this is putting that first Change Type step one after the initial connection into our added custom column.
>
> **[1:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=113)** Let's repeat this process for the first three added custom column functions.
>
> **[2:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=120)** For the hour, we'll again set this.
>
> **[2:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=123)** Now there's quite a few different data types that we can set this to.
>
> **[2:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=126)** If we type in Text, for example, we see Text.Type, see decimal.
>
> **[2:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=140)** Now Number.Type works for this, so I'm going to continue to use that particular data type.
>
> **[2:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=145)** We'll do the same for the minute as well.
>
> **[2:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=147)** These are all numeric measurements that we're looking to have Power Query represent for us.
>
> **[2:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=154)** And then once we've changed these, we see all three columns display with a whole number in them.
>
> **[2:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=163)** I can now remove this Change Type step because I've incorporated it into the formulas to add the columns directly.
>
> **[2:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=174)** Now let's open the dialog box for creating the column.
>
> **[2:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=178)** Let's say that we adjust this, we're going to just add a space at the end, and we'll hit OK.
>
> **[3:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=184)** Now notice that when we update the column formula, we actually lose that additional parameter at the end of the Table.AddColumn function.
>
> **[3:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=193)** It resets, so in order to maintain our data type that we added to the end of the column, we'll again add it to the function directly in the formula bar.
>
> **[3:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=206)** Now let's do the same for the functions after that.
>
> **[3:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=213)** Now there should be a date, so we can do that by typing in Date.Type, and we see it matches the data type for the UTC Today field that we chose later in the Change Type step.
>
> **[3:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=231)** I'm going to set the next column to the same data type, and this one's going to be a number because it's a day.
>
> **[4:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=244)** Now I'm going to confirm that these updated fields display the correct data types, and then I'll remove this step again.
>
> **[4:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=253)** Now if we see something error out like we do here, we can check the formulas, and alternatively, we can make the changes to the column.
>
> **[4:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/adding-data-types-in-m-code?u=76281980&t=261)** We can change the data types again to make it work and go from there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), type, (5), function (4), this, (3), this. (1)
> **CLI Commands:** make (2)
> **Env Vars:** utc (1)
> **Cross-References:** later in (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 6. Relational Databases and Queries

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Working with relational databases
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=0)** - [Instructor] Databases are organized data stored in database management systems.
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=5)** One type of database is a relational database.
>
> **[0:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=8)** This consists of separate tables where we use SQL code to query data.
>
> **[0:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=13)** Relational database connections in Power BI include SQL server, Oracle, HANA, ODBC, and many others.
>
> **[0:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=22)** In general, my own personal approach to working with large sets of data is to use a database where I can.
>
> **[0:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=28)** There's a lot of cool things that we can do with ETL frameworks, especially for testing them out, but ultimately databases can help us save a lot of time, especially if we're using Power BI models for heavy duty things that get refreshed frequently.
>
> **[0:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=42)** SQL database connections also offer us an option for connecting to the data via Import or DirectQuery mode.
>
> **[0:50](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=50)** We've been using the Import connection mode for all our connections so far, but some relational databases give us the option of using DirectQuery.
>
> **[0:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=59)** We use Import as the typical default connection type.
>
> **[1:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=62)** Microsoft recommends this method because it takes advantage of the high performance query engine and allows us to leverage the full range of options for working with data.
>
> **[1:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=72)** DirectQuery allows us to connect to data in its original source repository.
>
> **[1:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=77)** This option works best when the underlying data provides interactive queries returning data in less than five seconds or if this data changes frequently and we need the latest updates.
>
> **[1:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=87)** Power BI supports DirectQuery for several database options, but I recommend checking the documentation to see if this is updated and your database is available.
>
> **[1:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=98)** I set up the SQL server on my desktop to use in these examples.
>
> **[1:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=102)** They're similar to the data we've seen so far in the exercise files in this course if you want to upload them to a database to try it out yourself.
>
> **[1:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=111)** We'll choose to get data from a new source and then we'll choose SQL Server.
>
> **[1:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=116)** I'm going to enter the server name and I'm also going to enter the database name.
>
> **[2:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=123)** In order to connect to a database, we need our own set of database access credentials, which include the database name, the server, and any other security details we need to connect to the database.
>
> **[2:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=136)** Note that the database credentials in Power BI may not transfer between users when you share files, so make sure that others accessing your report also have access to the database as well themselves.
>
> **[2:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=148)** Notice the radio button to select between Import and DirectQuery.
>
> **[2:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=152)** Let's set up our query using Import first.
>
> **[2:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=156)** This takes us to the Navigator pane where we can select our table or tables to use in the model.
>
> **[2:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=163)** Let's choose the weather and dates table.
>
> **[2:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=171)** Selecting more than one table creates two separate queries like we saw earlier in this course for other connection types.
>
> **[2:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=177)** From here, we can work with database tables like we would any other query.
>
> **[3:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=182)** We can also input an SQL query to get the data directly.
>
> **[3:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=187)** We'll choose to create another connection.
>
> **[3:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=190)** We'll then enter the same server and database name that we entered earlier.
>
> **[3:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=195)** We'll then enter our SQL code in the advanced options.
>
> **[3:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=202)** If you do make the choice to include a query here, you want to make sure you optimize as much of the code as possible before entering it into this box.
>
> **[3:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=211)** Any additional transformations after this can slow the query down substantially.
>
> **[3:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=216)** I also recommend testing it in the IDE first to make sure that it works.
>
> **[3:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=222)** We can then confirm that our code works and it adds it as another query.
>
> **[3:50](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=230)** I'm going to rename this one SQL Query.
>
> **[3:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=233)** We can also set up the DirectQuery connection to tables and to SQL queries that we input like we just did.
>
> **[4:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=241)** When we choose DirectQuery, we can also enter the SQL statement below in the same way that we would do for the import.
>
> **[4:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=248)** Let's just use the tables, though.
>
> **[4:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=256)** There's a continuous development for these tools in Power BI including these connectivity modes.
>
> **[4:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-relational-databases?u=76281980&t=261)** If you're wondering if we can support this option of Import and DirectQuery as the connection modes in the same model for different tables, the answer is yes we can, and we can do this with the help of composite models once we load the data.

> [!info]- Semantic Content
>
> **Env Vars:** sql (10), hana (1), odbc (1), etl (1), ide (1)
> **Code Keywords:** let (3), type. (1), import. (1)
> **CLI Commands:** make (4)
> **Prerequisites:** set up (3)
> **Cross-References:** earlier in (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### Query folding
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=0)** - [Instructor] Databases store vast quantities of structured data that we can query and process efficiently through query languages, like SQL.
>
> **[0:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=8)** To optimize query efficiency, we want to push as much work back to the database connection as we can.
>
> **[0:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=14)** One way we can do this is through query folding, which translates our Power Query extract and transformation steps into SQL commands that it pushes back to the database.
>
> **[0:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=25)** In order for this functionality to work, the database we connect to must have a server with query folding capabilities.
>
> **[0:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=31)** Excel is not a database, and therefore, it doesn't support query folding.
>
> **[0:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=37)** There are a number of query transformation steps that work with query folding.
>
> **[0:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=41)** and others that don't.
>
> **[0:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=42)** The best way to figure out which ones work is to walk through a series of ETL steps in Power Query and confirm whether or not they work along the way.
>
> **[0:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=51)** We'll first connect to SQL Server in a database that I stored on my computer.
>
> **[1:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=60)** We'll first choose the import data connectivity mode.
>
> **[1:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=64)** Let's then set up connections to the Weather and Date Dimensions tables within the SQL Server database.
>
> **[1:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=75)** We'll first remove the TAVG column in the Weather table.
>
> **[1:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=79)** Instead, we'll calculate the average temperature as a new column, where we'll take the quantity of the TMIN field add it to the TMAX field, and divide the entire total by 2.
>
> **[1:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=92)** Next, we'll merge this Weather table with the Dates table using a left outer join on the DateValue field.
>
> **[1:45](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=105)** We'll then expand this result to create the combined merge data table.
>
> **[1:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=113)** Next, we'll filter the rows so the year isn't 2024.
>
> **[1:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=118)** We can then rename our columns to names that are easier to read.
>
> **[2:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=121)** Now there's quite a few of them, so I'm just going to rename two of them.
>
> **[2:09](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=129)** Now let's figure out if these transformation steps support query folding.
>
> **[2:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=134)** The good news is that we don't have to guess, and we can actually check query folding along the way.
>
> **[2:19](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=139)** Let's right click on the last step of the query where we renamed the columns.
>
> **[2:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=145)** We'll then choose View Native Query from the dropdown menu.
>
> **[2:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=149)** This opens the window where we can see the SQL code that Power BI automatically wrote for us.
>
> **[2:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=157)** We can check this step and any other applied step along the way as well.
>
> **[2:45](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=165)** So what breaks query folding?
>
> **[2:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=167)** Let's click on the Date field and choose to divide it into three components for the year, month, and day.
>
> **[2:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=176)** Once we split it by the forward slash delimiter, let's see if the query folding still works.
>
> **[3:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=182)** Now, when we right click on the latest step, we see the View Native Query option isn't available, meaning that the SQL code does not work for this particular transformation.
>
> **[3:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=192)** So splitting the columns did break the query folding capabilities here.
>
> **[3:18](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=198)** Let's set up another connection to this database.
>
> **[3:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=205)** If we use custom SQL code when we're connecting by inputting it in the SQL statement box, then query folding won't work either
>
> **[3:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=222)** And we can check this because we don't see the option to view the native query.
>
> **[3:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=227)** Direct query also supports these same transformation steps as the import connection mode until we break the query.
>
> **[3:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=234)** Let's create another connection example for this and intentionally break it.
>
> **[4:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=247)** Now, when we right click on the navigation step, we see View Native Query.
>
> **[4:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=255)** Let's then split the actual date by the forward slash delimiter.
>
> **[4:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=260)** If we break query folding in direct query, we receive a warning message that it will convert this query to import mode instead.
>
> **[4:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=269)** We can then switch all the tables to import mode, or we can just switch this particular table.
>
> **[4:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=275)** It's pretty neat how we can leverage query folding to effectively write SQL code for us behind the scenes without having to know any code ourselves.
>
> **[4:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/query-folding?u=76281980&t=283)** It's an awesome option to tap into when you have the chance.

> [!info]- Semantic Content
>
> **Env Vars:** sql (9), etl (1), tavg (1), tmin (1), tmax (1)
> **Code Keywords:** let (8), switch (2)
> **UI Navigation:** click on (4), dropdown (1)
> **Prerequisites:** set up (2)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Working with multidimensional databases
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=0)** - [Instructor] Multidimensional databases, like Analysis Services, work as predefined queries referencing databases where the user doesn't have to write a query to access the data, but rather, they connect to the model with the predefined dimensions and calculations.
>
> **[0:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=15)** These tables are typically already joined together in the model, and we can use DAX or MDX queries to get data from them.
>
> **[0:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=23)** It's important to emphasize that these aren't relational databases, and they work differently.
>
> **[0:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=28)** We might see multidimensional databases that use relational databases as sources for their tables, but they're not the same thing, and we don't connect them in the same way or use the same languages, like SQL, to query them.
>
> **[0:42](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=42)** Instead, we use DAX or MDX queries.
>
> **[0:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=46)** As we saw in the last video, relational databases support direct query and import connectivity modes.
>
> **[0:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=52)** Multidimensional databases also support the import connectivity mode, which allow for us to access and utilize the functionalities and features of Power Query.
>
> **[1:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=62)** There's also another option for connecting directly to the data called live connection Mode.
>
> **[1:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=67)** If we select this option, it will disable the rest of the queries, and Power BI will become a front end connection only.
>
> **[1:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=75)** I set up a weather model using the data we're using throughout this course and uploaded it to a Power BI Premium Per User workspace.
>
> **[1:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=84)** We can use the API endpoint of this workspace as Analysis Services database.
>
> **[1:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=90)** In the Workspace settings, I'm going to copy the link to the Workspace connection.
>
> **[1:36](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=96)** You won't be able to connect to this database yourself, but I saved a copy of the PBX file that I used to publish it if you would like to try it out by publishing it to your own workspace.
>
> **[1:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=108)** In a new Power BI model, let's connect it to data using the Analysis Services option, We will then paste our endpoint into the server, and we can add the database here, or we can click OK to see what options are available.
>
> **[2:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=132)** We'll then expand the Santa Barbara Weather file, and we'll choose the model within it.
>
> **[2:17](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=137)** Let's confirm this selection in the Navigator window.
>
> **[2:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=144)** We see it immediately loads to the Power BI model, and we don't see an option to transform it further in Power Query after that.
>
> **[2:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=153)** If we select the Power Query window, Transform Data to open it again, we see that we need to make changes to the configuration of the model in order for it to work.
>
> **[2:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=169)** We can, however, add DAX measures to this existing database connection.
>
> **[2:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=175)** Let's save this file as Analysis Services - Live Connection Mode.
>
> **[3:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=188)** Let's open another Power BI Desktop model using the same database endpoint to the Analysis Services database.
>
> **[3:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=202)** I'm going to add the model database.
>
> **[3:25](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=205)** I'll choose the import connectivity mode.
>
> **[3:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=208)** When we select the import connectivity mode, we see a box below it where we can enter our MDX or DAX query.
>
> **[3:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=215)** We can then type in our DAX query here.
>
> **[3:38](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=218)** Like the SQL queries, I recommend testing it out in another application first.
>
> **[3:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=224)** I find that a lot of organizations like the security and scalability of these Analysis Services models.
>
> **[3:50](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=230)** However, the live connection really limits model capabilities.
>
> **[3:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/working-with-multidimensional-databases?u=76281980&t=234)** The good news is that the import mode really enables us to leverage both the assurance of the underlying models and the capabilities of Power Query.

> [!info]- Semantic Content
>
> **Env Vars:** dax (5), mdx (3), sql (2), api (1), pbx (1)
> **Code Keywords:** let (4)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** as we saw (1), in the last (1)
> **UI Navigation:** select the (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 7. Loading Data

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Loading data
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=0)** - [Instructor] As we're loading data into Power BI, we want to think about modeling components like table joins, connection modes, composite models, and so on.
>
> **[0:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=8)** If you're an Excel Power user, you can probably connect together disparate tables into a single consolidated table view in your sleep.
>
> **[0:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=16)** Within Power BI, however, we typically want to join the tables together after we load the data into the model, if we can.
>
> **[0:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=24)** Let's start with the Power BI model containing dates and weather data.
>
> **[0:28](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=28)** The weather data is the fact table connected to a SQL Server relational database table.
>
> **[0:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=33)** I use the direct query connection mode here.
>
> **[0:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=37)** I inputted the dates manually, so they'll load into the model in the import connectivity mode.
>
> **[0:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=44)** Right now, we can load both our tables into the Power BI model because they display in regular fonts and the query lists on the left.
>
> **[0:52](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=52)** We don't have to load all our queries into the model, however.
>
> **[0:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=55)** Let's duplicate the weather table to explore these options.
>
> **[1:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=61)** In the dropdown list, we see that both enable load and include in report refresh are both checked.
>
> **[1:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=66)** If we don't want to refresh the data in the report but still load it, we can uncheck this option.
>
> **[1:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=74)** This data will still load to the model, but when we refresh it, this data won't update.
>
> **[1:18](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=78)** Let's uncheck the load data option from the dropdown menu, as well.
>
> **[1:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=83)** This transforms the query name into italic fonts, make it easier for us to see that it's not part of the data loaded into the model.
>
> **[1:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=91)** This means we've disabled this table from loading into our Power BI model.
>
> **[1:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=95)** Now let's load the remaining tables into Power BI.
>
> **[1:40](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=100)** We'll acknowledge the security risk and load our data.
>
> **[1:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=108)** Once the data loads, if we navigate to the data view, we can see the weather data table doesn't display because it directly queries the data source with a direct query.
>
> **[1:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=118)** Let's navigate to the model view where we'll link all the tables together.
>
> **[2:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=123)** We can see the connectivity modes in the top left of each table.
>
> **[2:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=128)** I find they're much easier to find in the model view than they are in Power Query.
>
> **[2:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=133)** The weather fact table uses a direct query and the days dimension uses an import.
>
> **[2:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=140)** My own preference for the way these tables appear is to put the dimension tables above the fact tables in the model view.
>
> **[2:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=147)** We anticipate a many to one join when we connect the weather fact table to the date's dimension.
>
> **[2:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=154)** Let's select the date value field from the weather table and drag it to its state value counterpart.
>
> **[2:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=163)** We see it displays as a many to many relationship.
>
> **[2:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=167)** There's a reason why this comes with a warning message in Power BI.
>
> **[2:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=171)** Loading something like this into our model can create huge problems with duplications and also missing data later when we build visuals.
>
> **[2:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=179)** So we want to eliminate this problem as the dates dimension table shouldn't even have duplicates.
>
> **[3:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=187)** If we create this relationship, we see it has this little asterisk on both sides of the table join.
>
> **[3:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=194)** Let's remove it, and then we'll go back into Power Query to make changes to the date dimension so it properly connects to the weather fact data.
>
> **[3:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=206)** When we go to the dates table or any other table in our queries, we have the option of removing duplicates.
>
> **[3:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=213)** If we right click on the column header and choose remove duplicates, let's see what we get.
>
> **[3:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=219)** This removes any duplications of the date value.
>
> **[3:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=224)** Let's try this on year, as well.
>
> **[3:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=228)** This only gives us one remaining row.
>
> **[3:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=231)** We can, however, select all the fields and choose remove duplicates.
>
> **[4:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=240)** I prefer to choose all the fields in the table to remove the duplicates on because then I ensure that the rows themselves are unique.
>
> **[4:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=248)** This removes all the duplicated rows.
>
> **[4:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=250)** Now let's load the data into the model again.
>
> **[4:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=254)** Back in the model view, let's then enable the join between the same fields in the table.
>
> **[4:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=261)** Now we see the weather fact table is the many side of the join, and the dates dimension is the single side of it.
>
> **[4:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=269)** We don't see any warning messages this time, either.
>
> **[4:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/loading-data?u=76281980&t=274)** Once we have a successful join between the tables, we can continue working with our data model from here, like building visuals with the data that we loaded.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), import. (1), continue (1)
> **UI Navigation:** dropdown (2), navigate to (2), select the (1), go to (1), click on (1)
> **CLI Commands:** make (2), find (2)
> **Warnings:** warning (2)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### Managing errors
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=0)** - [Instructor] When we build queries to load into Power BI, there are two types of errors that we'll run into.
>
> **[0:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=6)** Step level errors occur when the query editor's step cannot return the intended result for the entire function performed, or even the entire query.
>
> **[0:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=15)** Row level errors occur for individual values in a row within a field.
>
> **[0:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=20)** We'll see these errors as error hyperlinks in our query.
>
> **[0:24](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=24)** Both types of errors are problematic, but I find the row level errors are more common and harder to catch.
>
> **[0:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=32)** Let's explore these errors in our Power BI model.
>
> **[0:35](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=35)** To create a step level error, let's intentionally move the changed type step in front of the function to add a custom column.
>
> **[0:44](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=44)** This throws an error message for entire query.
>
> **[0:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=47)** To fix this issue, let's move the changed type step to its original position at the end.
>
> **[0:54](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=54)** Next, in our data table, let's change our date field to a date and our amount field to a decimal number.
>
> **[1:03](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=63)** Notice error hyperlinks appear in the data table for the rows where the value in that particular row and column doesn't match the data type of the column.
>
> **[1:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=74)** Clicking on one of these error hyperlinks drills into that specific single error to show the error message details.
>
> **[1:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=81)** This shows as a single error in the table, but we want to see all of them and also mitigate this issue.
>
> **[1:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=89)** This particular data table is small so we can see all the errors, but if you're dealing with millions of records, you'll likely not be able to see these row level errors when you load them into the model.
>
> **[1:41](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=101)** Let's load this data as is with the errors to see what we get.
>
> **[1:47](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=107)** It loads the data, but it points out there are three errors in the 11 row we loaded.
>
> **[1:53](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=113)** Most of the errors that I've run into when loading data into Power BI come from incorrect data types.
>
> **[1:58](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=118)** Fixing errors here after loading them can be a huge pain and slightly cumbersome, but once we fix them, we can then use these data fields in our model.
>
> **[2:08](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=128)** If we select view errors, this opens the Power Query editor again.
>
> **[2:13](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=133)** Now in Power Query, we see our original data table and we see a new folder containing the errors that appear in these rows.
>
> **[2:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=142)** We can click on one of these hyperlinks to see what it says.
>
> **[2:30](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=150)** We see that it says it couldn't parse the input provided as a date value, and we'd see the same for the amount that it doesn't parse it as decimal number.
>
> **[2:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=159)** We also see the row number where the error actually occurred, which is quite helpful, especially for large data sets.
>
> **[2:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=166)** We can go into the original data to make these changes.
>
> **[2:51](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=171)** One way we can mitigate some of the existing errors is by replacing the values before we change them into another data type.
>
> **[3:01](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=181)** In our amount field, for example, we have fives that appear as S characters, so we can replace those.
>
> **[3:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=195)** And we also have an O representing a zero.
>
> **[3:27](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=207)** Now we go back into our error query.
>
> **[3:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=209)** We see this fixes all but one of the errors.
>
> **[3:34](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=214)** For the dates field, we can replace the error with another value or we can remove it entirely because we can't really take a guess of what the error represents otherwise.
>
> **[3:43](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=223)** Now this removes the entire row that contains the error.
>
> **[3:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=228)** We now see the table containing the errors in the data is empty, meaning that we fixed all the errors that we see.
>
> **[3:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=236)** We'll then load the data into our model again.
>
> **[4:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=240)** The data now loads with no errors.
>
> **[4:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=242)** Fixing errors like this smooths out our Power BI modeling process.
>
> **[4:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=246)** This is one type of error that we'll encounter in Power BI models, but there are lots of others.
>
> **[4:12](https://www.linkedin.com/learning/power-bi-data-methods-23487089/managing-errors?u=76281980&t=252)** If you're interested in learning more about how to manage error logs, I recommend checking out some of the content in the [[Power BI- Integrating AI]] Machine Learning course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (2), catch. (1), type. (1)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Refreshing data
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=0)** - [Instructor] We can think of Power BI Desktop as a design and development application.
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=5)** Well, the Power BI services where we share our work, are more for enterprise level scalability and shareability for working across an organization, I've created two Power BI models, one that refreshes in the Power BI service automatically and one that doesn't.
>
> **[0:23](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=23)** The Power BI file, Weather 1, uses a custom function to call the station name for LAX and Santa Barbara.
>
> **[0:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=32)** Weather 2 calls each location separately and appends them together.
>
> **[0:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=37)** You can explore both of these Power BI models directly in the exercise files and update them yourself as they both connect to the zipped weather data from Noa.
>
> **[0:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=48)** To manually refresh a Power BI model, we can do so through the refresh button at the top of the page.
>
> **[0:55](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=55)** This refreshes both the data behind the model as well as the visuals that it supports.
>
> **[1:04](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=64)** Now that we know the data is up to date, let's publish the model.
>
> **[1:10](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=70)** We'll select to publish it to our Explorer California workspace.
>
> **[1:16](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=76)** Once it confirms, it publishes, we can go into Power BI to look at it.
>
> **[1:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=81)** Publishing a report to the Power BI service, in this case, we're using a premium per user account, creates both a report and a data set behind it.
>
> **[1:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=91)** The data set represents the data model, and this is what we want to refresh in the Power BI service.
>
> **[1:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=99)** We'll select the Semantic model and we can see the options for working with this data.
>
> **[1:48](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=108)** Before we set up a refresh schedule though, let's click on the refresh button to confirm that the refresh functionality works within the cloud.
>
> **[1:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=119)** We see this warning message appear.
>
> **[2:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=122)** We'll click on it to see what's going on.
>
> **[2:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=126)** Now we see that because this data set includes the dynamic data source, the data set won't be refreshed, and if it doesn't refresh by manually refreshing it in the Power BI account, we can't set up a refresh schedule for it.
>
> **[2:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=141)** We can see more about why this occurs by navigating to the URL on this page.
>
> **[2:29](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=149)** Now let's try publishing the Weather 2 Power BI model.
>
> **[2:33](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=153)** That includes the dependent tables joined together directly in the Power Query editor.
>
> **[2:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=159)** We'll follow the same steps to publish it to our Power BI account and the same workspace.
>
> **[2:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=169)** Now let's navigate to the Semantic model for Weather 2 to see if we can refresh the data now.
>
> **[2:59](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=179)** So, let's click on this warning icon and we see that we need to enter the credentials for our data sources.
>
> **[3:07](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=187)** So we'll go to the dataset settings homepage to enter these credentials.
>
> **[3:15](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=195)** We see the section for updating the edit credentials.
>
> **[3:20](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=200)** We'll choose anonymous and I'm going to choose organizational as our privacy level.
>
> **[3:32](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=212)** Now we're repeating this twice because we took two queries and we appended them together.
>
> **[3:37](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=217)** So now we can set up our automatic data refresh schedule.
>
> **[3:46](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=226)** We'll turn on the refresh schedule.
>
> **[3:49](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=229)** Now this data is updated once a day, so I can pick a daily refresh frequency.
>
> **[3:56](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=236)** I'll choose the US Pacific and Canada time, and this is the time zone, so I'm going to select a time early in the morning at 5:00 AM so people can get the latest data when they come in.
>
> **[4:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=254)** Now, depending on the type of Power BI account you have, will determine how often you're able to refresh this data.
>
> **[4:22](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=262)** We'll confirm our refresh schedule.
>
> **[4:31](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=271)** Once we confirm these details, we see the date and time for the next Power BI Refresh for Weather Model 2.
>
> **[4:39](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=279)** Once we've set up the refresh schedule, it will continue and every morning, we'll be able to access the latest data for LAX and Santa Barbara within Power BI.
>
> **[4:50](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=290)** Enabling this refresh means that anyone who wants to view the daily weather now can, they're not relying on one person to refresh it.
>
> **[4:57](https://www.linkedin.com/learning/power-bi-data-methods-23487089/refreshing-data?u=76281980&t=297)** They can simply consume the data directly in the Power BI service to immediately analyze the weather in the Southern California area.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (1), case, (1), continue (1)
> **UI Navigation:** click on (3), select the (1), navigate to (1), go to (1)
> **Prerequisites:** set up (4)
> **Env Vars:** lax (2), url (1)
> **Warnings:** warning (2)
> **Ports:** :00 (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Continuing on with Power BI
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-methods-23487089/continuing-on-with-power-bi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-methods-23487089/continuing-on-with-power-bi?u=76281980&t=0)** - We've reached the end.
>
> **[0:02](https://www.linkedin.com/learning/power-bi-data-methods-23487089/continuing-on-with-power-bi?u=76281980&t=2)** Thank you so much for learning about Data Methods and Power BI with me.
>
> **[0:06](https://www.linkedin.com/learning/power-bi-data-methods-23487089/continuing-on-with-power-bi?u=76281980&t=6)** We covered a lot here, and if you're interested in learning more about Power BI, check out other courses, including my own in the LinkedIn Learning Library.
>
> **[0:14](https://www.linkedin.com/learning/power-bi-data-methods-23487089/continuing-on-with-power-bi?u=76281980&t=14)** If you want to see more sample data visualizations and dashboards, check out my website, [helendatadesign.com](https://helendatadesign.com).
>
> **[0:21](https://www.linkedin.com/learning/power-bi-data-methods-23487089/continuing-on-with-power-bi?u=76281980&t=21)** You can also follow me on LinkedIn to see more of my contents and work.
>
> **[0:26](https://www.linkedin.com/learning/power-bi-data-methods-23487089/continuing-on-with-power-bi?u=76281980&t=26)** I'm always learning something new and I hope you are too.

> [!info]- Semantic Content
>
> **URLs:** [helendatadesign.com](https://helendatadesign.com) (1)
> **Cross-References:** we covered (1)
> **Speakers:** - we (1)


## Instructor

- [[Helen Wall]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/power-bi-data-methods-3812122/)

## Skills Covered

- Data Analysis
- Microsoft Power BI

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Analysis and Interpretation]]
← [[SQL- Data Reporting and Analysis]] | **8 of 9** | [[Program Evaluation for Data Science]] →

### In [[Master Microsoft Power BI]]
← [[Power BI- Working Together with ChatGPT]] | **2 of 6** | [[Power BI Dataflows Essential Training]] →

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Analysis and Interpretation]]
- [[Master Microsoft Power BI]]

## Related Courses

_Courses sharing skills:_

- [[Learning Power BI Desktop]] — Data Analysis, Microsoft Power BI
- [[Intermediate SQL- Data Reporting and Analysis]] — Data Analysis
- [[Data Analysis- Investigate with SQL]] — Data Analysis
- [[Advanced SQL for Data Scientists]] — Data Analysis
- [[Complete Guide to Excel Statistics with Copilot]] — Data Analysis

---

[↑ Back to top](#)