---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: power-bi-mistakes-to-avoid-27804086
url: "https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086"
duration_minutes: 58
duration: 58m
level: Intermediate
updated: 11/6/2025
learners: 2993
skills:
  - Microsoft Power BI
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHTsj7H8uVsOg/learning-public-crop_675_1200/B4EZoYUD9ZIMAY-/0/1761344504410?e=2147483647&amp;v=beta&amp;t=2ZJo0bTFw9B8QCHnr8iqCnS2AIsf6HthRg1Owi3Xlsw"
linkedin_topic: Data Science
learning_paths:
  - '[[Become a Power BI Specialist]]'
prev_courses:
  - '[[Power BI Quick Tips]]'
path_nav: '[{"path":"Become a Power BI Specialist","position":5,"total":5,"prev":"Power BI Quick Tips","next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/microsoft-power-bi
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Power%20BI%20Mistakes%20to%20Avoid.md)

![Power BI Mistakes to Avoid](https://media.licdn.com/dms/image/v2/D4E0DAQHTsj7H8uVsOg/learning-public-crop_675_1200/B4EZoYUD9ZIMAY-/0/1761344504410?e=2147483647&amp;v=beta&amp;t=2ZJo0bTFw9B8QCHnr8iqCnS2AIsf6HthRg1Owi3Xlsw)

# Power BI Mistakes to Avoid

> As a data expert using Power BI, your goal is to always be growing your skills. However, and regardless of if you even realize it, there are mistakes you're likely making that keep you from moving to the next level. In this course, learn the top Power BI mistakes: from misunderstanding business problems and using the wrong models to misaligning data and more.Whether you're new to Power BI or a sea

> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086) | 58m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Improve your Power BI skills](#improve-your-power-bi-skills)
- [**1. Next-Level Power BI**](#1-next-level-power-bi) (4 videos)
  - [Main challenges of Power BI?](#main-challenges-of-power-bi)
  - [Systems thinking vs. ad hoc analysis](#systems-thinking-vs-ad-hoc-analysis)
  - [Being an effective analyst](#being-an-effective-analyst)
  - [Keys to effective data visualization](#keys-to-effective-data-visualization)
- [**2. Connecting to Data**](#2-connecting-to-data) (4 videos)
  - [Don't pull in too much data](#dont-pull-in-too-much-data)
  - [Eliminate extra applied steps](#eliminate-extra-applied-steps)
  - [Remember to profile your data sources](#remember-to-profile-your-data-sources)
  - [Remove unnecessary rows and columns](#remove-unnecessary-rows-and-columns)
- [**3. Modeling Data**](#3-modeling-data) (5 videos)
  - [Create a lookup table](#create-a-lookup-table)
  - [Use star schema](#use-star-schema)
  - [Eliminate two-way relationships](#eliminate-two-way-relationships)
  - [Apply user-friendly value replacements](#apply-user-friendly-value-replacements)
  - [Define the right level of granularity](#define-the-right-level-of-granularity)
- [**4. Visualizing and Analyzing Data**](#4-visualizing-and-analyzing-data) (8 videos)
  - [Visualizing time series data](#visualizing-time-series-data)
  - [Use groups to break up the analysis](#use-groups-to-break-up-the-analysis)
  - [Use slicers to improve usability](#use-slicers-to-improve-usability)
  - [Use a custom tooltip to add detail](#use-a-custom-tooltip-to-add-detail)
  - [Be careful with pie charts](#be-careful-with-pie-charts)
  - [When to use Top-N analysis](#when-to-use-top-n-analysis)
  - [The full potential of visualizations](#the-full-potential-of-visualizations)
  - [Use color sparingly](#use-color-sparingly)
- [**Conclusion**](#conclusion) (1 videos)
  - [Additional resources](#additional-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Improve your Power BI skills](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/improve-your-power-bi-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/improve-your-power-bi-skills?u=76281980&t=0)** - [[Microsoft Power BI|Power BI]] is a really powerful tool for analyzing data and creating [[Business Intelligence (BI)|business intelligence]] reports. But whether you realize it or not, there are a set of mistakes and errors that can keep you from making the most out of Power BI. My name is [[John the Ripper|John]] David Ariansen and I'm an analytics expert consultant, and I have years of experience teaching analytics both in and outside of the classroom. I'm also the host of the "How to Get an Analytics Job" Podcast, where we've interviewed over 100 analytics experts to date. In this course, I'm going to help you avoid mistakes and get the most out of power BI from cleaning your data effectively to ensuring your data model is optimized and even visualizing, analyzing, and optimizing reports for usability. So are you ready to up your game with Power BI? Then let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (4), [[Business Intelligence (BI)|Business intelligence]] (1), [[John the Ripper|John]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - power (1)


### 1. Next-Level Power BI

[↑ Back to Table of Contents](#table-of-contents)

#### [Main challenges of Power BI?](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/main-challenges-of-power-bi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/main-challenges-of-power-bi?u=76281980&t=0)** - [Instructor] [[Microsoft Power BI|Power BI]] is an amazing tool that can really help an organization make the most of their data. When used effectively, Power BI can help you take large [[Unstructured Data]] sources and turn them into reports that your management team can use to make better decisions. According to the [[Microsoft]] certification exam, Power BI breaks down into five main functions. Number one, we have connecting to data, number two, we have modeling data, three is visualizing data, four is analyzing data, and finally, number five is sharing insights. Now onto the major challenges of Power BI. The modeling the data section of this exam accounts for up to 30% of exam questions, so let's say it's safe to argue that this is probably the area of Power BI where most of the mistakes are made. For those of you who are brand new to [[Business Intelligence (BI)|business intelligence]], creating a data model is the process of combining your data sources together. You can think of your data model as the blueprint for how your data sources fit together. The next area of commonly made mistakes is analyzing data. I've noticed that a lot of Power BI users do not take a very effective approach to analyzing their data. Finding insights can be tough, and you need to take a disciplined approach to your analysis. You need to find a balance between your depth of analysis and the width of your scope. Essentially, you can focus deep on one specific problem, or you can take a holistic approach to analysis
>
> **[1:36](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/main-challenges-of-power-bi?u=76281980&t=96)** that looks across your entire organization, but if you try focusing on deep analysis across your entire organization, then you're going to run into the problem of struggling to communicate all the available insights. I typically advise my students to be disciplined in their analysis and try to solve one business problem at a time. And finally, I see visualizing data as another common area of mistakes for Power BI users. Visualizing data effectively can be a tough challenge to overcome, but if you get this right, then your management team is much more likely to use and get value out of the reports you build. Power BI reports view is where you can build all of your different kinds of visualizations. You need to make sure that you select the best visualization to communicate your findings. There are all kinds of resources all over the internet on visualization best practice. I would strongly suggest that you do some research on this topic, especially, if you want to make the most out of your analysis within Power BI. In order for you to be an effective Power BI user, remember to study up on [[Data Modeling]], visualizing, and analyzing data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (10), [[Unstructured Data]] (1), [[Microsoft]] (1), [[Business Intelligence (BI)|Business intelligence]] (1), [[Data Modeling]] (1)
> **CLI Commands:** make (4), find (1)
> **Best Practices:** best practice (1), remember to (1)
> **UI Navigation:** select the (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Systems thinking vs. ad hoc analysis](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/systems-thinking-vs-ad-hoc-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/systems-thinking-vs-ad-hoc-analysis?u=76281980&t=0)** - [Instructor] A seasoned [[Business Intelligence (BI)|business intelligence]] developer knows how to take a systems approach to their analysis. This kind of approach helps you eliminate human errors and build reports much faster. When I first started my consulting agency, I often took a reactive approach to my client engagements. They would approach me with a problem, then I would get to work digging through the data to analyze that problem. Conducting analysis just as questions arise, is an ad hoc approach to analysis. This means you're building one-time reports to address specific questions, and there are a couple downsides to this approach. Namely, it is time consuming, so you take a lot of time to manually create these reports every time, and since you're manually creating these reports, they are prone to human error. After consulting for a few years, I realized that I needed to take a more proactive approach to my consulting interactions. So I developed a framework that would help clients run through a three-step process. Number one, I would help them define their goals and problems. Number two, we would define key metrics, and number three, we would conduct a [[Data Governance]] audit. Once we ran through these three steps, the analysis became a whole lot more clear. I would then build a reporting infrastructure that cleaned the data, modeled the data, and visualize all the key data points. Now from time to time, there are specific questions that still arise within my client interactions, but I now have a foundation to start from when I start
>
> **[1:34](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/systems-thinking-vs-ad-hoc-analysis?u=76281980&t=94)** to dig through the data to actually uncover insights. You can think of this as a system or a systems approach. Since the data is cleaned and updated automatically, I can now just add a new page within my [[Microsoft Power BI|Power BI]] workbook to start some brand new analysis. I no longer have to manually pull, clean, and model the data every time a new question arises. Are you taking a systems approach to your analysis? This approach can help you eliminate errors and work much faster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Business Intelligence (BI)|Business intelligence]] (1), [[Data Governance]] (1), [[Microsoft Power BI|Power bi]] (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Being an effective analyst](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/being-an-effective-analyst?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/being-an-effective-analyst?u=76281980&t=0)** - [Instructor] Before you even sit down and start working with [[Microsoft Power BI|Power BI]], you should know a thing or two about data analysis. Now, there are three things that make an analyst really effective, and they are, number one, business domain knowledge. Number two, empathy. You need to have your end user in mind and understand how the person who's going to consume your analysis actually thinks. And finally, you need to have the technical skills to actually implement on your analysis. So let's talk about domain knowledge. Business domain knowledge is very important because it helps you truly understand the problem or the end goal of the analysis. Understanding how the business functions means you can take a more holistic approach to your analysis. For example, your manager or CEO may notice a negative trend and ask you to do some analysis to better understand what's going on. This negative trend might be a symptom of a much deeper problem, though. If you have a deep knowledge of your business, then you can take a step back, consider the system at play, and spot the true issue that is causing a negative business outcome. Next, we have empathy. And empathy comes into play, when it comes time to build a presentation or communicate your findings. You need to communicate in a way that resonates with those who consume your reports. In my consulting practice, I've worked both with CFOs and CMOs,
>
> **[1:34](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/being-an-effective-analyst?u=76281980&t=94)** and there's a major difference between how these two professionals like to consume information. It's been my experience that chief marketing officers are a little bit more comfortable with visualization and like using the interactive components of data visualization tools like Power BI. Now, on the other hand, I have had a consulting engagement where a chief financial officer asked me specifically to design the reports so that he could later pull out the data out of Power BI and into [[Microsoft Excel|Excel]]. He wanted to do further analysis on his own within Excel, where he was much more comfortable. Once you deeply understand the business and have taken your end user's perspective into account, then it's time to do your analysis. This is where your technical skills come into play. Power BI is an amazing tool that can help you take huge amounts of raw data and turn them into reports that uncover insights. Now, breaking Power BI down a little bit further, the core skills you need to develop to be an effective Power BI developer are [[Data Modeling]], data visualization, analysis, and how to use Power BI service. You may also want to learn how to use [[DAX]] and M Code to customize your reports even further. DAX is the library of functions and operators that help you further analyze your data, and M Code is the language Power BI uses to create custom queries to a data source.
>
> **[3:08](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/being-an-effective-analyst?u=76281980&t=188)** There is more to being an effective analyst than just knowing how to use Power BI. Make sure you understand the business and keep your end users in mind when you're conducting your analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (9), [[Microsoft Excel|Excel]] (2), [[DAX]] (2), [[Data Modeling]] (1)
> **Env Vars:** dax (2), ceo (1)
> **CLI Commands:** make (2)
> **Prerequisites:** you need to have (2)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Keys to effective data visualization](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/keys-to-effective-data-visualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/keys-to-effective-data-visualization?u=76281980&t=0)** - [Instructor] The amount of data we produce every day is truly mind-boggling. This creates a unique problem. How do you cut through all the noise and really understand what's happening? Well, you do this through data visualization. Now, the term is somewhat self-explanatory. Data visualization is the presentation of quantitative information in a graphical form. Data visualization has some fundamental concepts underlying it. The first is that you wanna keep your visualizations simple. For example, more color does not mean you are making better visualizations. You actually hit a point where you're using so many different colors that all the colors start to lose their significance. It's much better to use color sparingly. Using color to highlight or call the end user's eye to a key data point is a much more effective approach. The next principle is that you wanna focus on the most important metrics. You'll often have way more data than you'll ever use, but don't let that get you distracted. Defining your key metrics is a process that you should undertake before you even start analyzing data. The key here is to think through which data points can mark success or failure in your business objectives. Once you've done this, then you can start to break these metrics into dimensions. These dimensions can help you better understand why a metric is over or underperforming. The third fundamental is to use the right visualization
>
> **[1:35](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/keys-to-effective-data-visualization?u=76281980&t=95)** to uncover the trend. Not all visualizations are created equally. For example, pie charts are not a great tool to visualize metrics that are broken down into very many parts. So for example, if you had 100 different clients, then using a pie chart to understand the difference in sales between your different clients would be a very big mistake. Just think of it this way, would you ever cut your pizza into 100 different slices? Now, unless your pizza is 10 feet wide, then this is a pretty ridiculous thing to do. A bar chart would be a much more effective way to visualize this scenario. You could even then sort the bars from largest to smallest to get a greater view of the differences in sales. Data visualization is both an art and a science. Make sure you're applying data visualization best practice when it comes time to build your reports.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### 2. Connecting to Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Don't pull in too much data](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/don-t-pull-in-too-much-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/don-t-pull-in-too-much-data?u=76281980&t=0)** - [Instructor] A common mistake that [[Microsoft Power BI|Power BI]] users often make is that they pull in way too much data into Power BI. Then later use the [[Microsoft Power Query|Power Query]] editor to filter in only the data that they need. So let's walk through a use case of why this problem might arise. So I've gone ahead and pulled in our sales data source into Power BI, and let's head over to the transform data button and open up the Power Query editor, so we can walk through a very simple use case. And let's say that our manager asks us to just pull in the IT-slash-technology industry information. So what we've done is connected to the full data set, and we can go over and hit this dropdown menu within industry and filter in only IT and technology. So if we hit okay, now the data is only showing US data relevant to this specific industry. And you'll see that under Applied Steps, filtered rows has shown up within this pane. So this is a major problem because what we've done is connected to the full data set, then filtered it to get the data that's relevant for us. A better solution in this situation is just to change the query to our original data source to only include IT and technology. This is going to greatly improve your model performance. So just remember, only pull in as much data as you need. Think the minimal effective dose in terms of
>
> **[1:33](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/don-t-pull-in-too-much-data?u=76281980&t=93)** how much data you're pulling into Power BI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (4), [[Microsoft Power Query|Power query]] (2)
> **CLI Commands:** make (1)
> **UI Navigation:** dropdown (1)
> **Definitions:** is a  (1)
> **Warnings:** common mistake (1)
> **Speakers:** - [instructor] (1)

#### [Eliminate extra applied steps](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/eliminate-extra-applied-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/eliminate-extra-applied-steps?u=76281980&t=0)** - [Instructor] You need to optimize your model for performance whenever possible. One tactical way to do this is to reduce your amount of applied steps. So let's walk through a quick situation. I've gone ahead and connected to our Sales Data source, and let's say that our manager only wants to look at the past two years and one specific industry. One way that we could clean up our query would be to only filter in the last two years in the industry that we want to analyze. So if we did this, what we could do is head over to our Transform tab, head over to our Close Date, and then let's select our Date and extract the Year. So then we could filter based on the last two years. And we can also filter our industry, let's say it's IT and Technology. So this data set is not actually huge, but if you're working with a billion-dollar company, you're probably going to have rows and rows and columns and columns. And optimizing your model for performance is much more important as your data source starts to get bigger and bigger. But what I wanted to call your attention to is that what we've done is we've created some extra applied steps to just get to our core data source. And unfortunately, we're connecting to a flat file, and I need to uncover or unpack the concept of folding queries.
>
> **[1:34](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/eliminate-extra-applied-steps?u=76281980&t=94)** So what's happening in [[Microsoft Power BI|Power BI]] now is we're connecting to the full data source, then applying these steps to manipulate it. Unfortunately, the steps that we just applied didn't really improve our performance too much. Now, if we were connecting to a database with a live connection, then we could push these applied steps back to the core data set and only pull what we need. So in this situation, what I would advise you to do is to go back to the place where you're pulling your [[Microsoft Excel|Excel]] file. So for example, I have a client who sells through Lowe's [[Hardware]] and Home Depot, and what we have to do is we go into those big organizations' data sets, and then pull queries out. So in that situation, I wouldn't pull the full query of all of the past five years and all of the industries. I would only pull the last two years and the specific industry that my client needed me to study. So that is what you need to bear in mind when you are trying to optimize for performance. You know, if you're using a flat file, applying a bunch of steps to get the data source down is not really doing much in terms of optimization. What you need to do instead is go to the core data set and just make it smaller.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (1), [[Microsoft Excel|Excel]] (1), [[Hardware]] (1)
> **Cross-References:** in the last (1), go back to (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Remember to profile your data sources](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/remember-to-profile-your-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/remember-to-profile-your-data-sources?u=76281980&t=0)** - [Host] A very common mistake that analysts often make, and this even supersedes just [[Microsoft Power BI|Power BI]] users, is that they fail to profile their data. So what does this mean? It means that you take a look at your [[Data Quality]] before you put your reports together and present them to your manager or end user. What happens if you don't do this is you might run the risk of presenting bad data. And what happens in that situation is that you start to lose trust. If your end user doesn't trust the data, then they're not going to use the analysis that you build for them. Luckily, Power BI actually has some great data profiling tools baked right into the platform. I've gone ahead and connected to our sales data source and let's go ahead and open up the [[Microsoft Power Query|Power Query]] editor. So click the transform data button, and now what you'll notice along the top of these rows, you'll see a green bar. And this gives us a very high level view of the quality. Now within our account number field, we can quickly see that we have a hundred percent valid rows. There are zero errors and zero empty rows. But if we head over to Age and hover over that bar, we can see that it's only 99% valid and there's actually one empty row. So that doesn't seem like a huge data quality issue. But if your end user needs this
>
> **[1:35](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/remember-to-profile-your-data-sources?u=76281980&t=95)** to be a hundred percent accurate, you need to go back to your data source and address this data quality issue. You can actually get an even deeper dive into your data profile if you head over to View within the Power Query editor. So right now we can select column distribution, and that's going to show us a breakdown of how each of these row values are distributed within a given field. And we can also click on column profile to show a column [[Statistics]] breakdown. So we can see that there are 99 rows, zero errors in empty, there's 360 distinct values. And this just gives you a very good statistical breakdown of your column. So if you spot anything that looks wrong, you can go back and address a data quality issue before you present it to your end user and kind of make a fool of yourself in a presentation. And also here you can see a better vision of the breakdown of that column. So if we take a look at close date, we can also see that, oh, there is one empty. So just remember to profile your data before you put it in front of any end user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (4), [[Microsoft Power BI|Power bi]] (2), [[Microsoft Power Query|Power query]] (2), [[Statistics]] (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (1)
> **Definitions:** means that (1)
> **Best Practices:** remember to (1)
> **Warnings:** common mistake (1)
> **Speakers:** - [host] (1)

#### [Remove unnecessary rows and columns](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/remove-unnecessary-rows-and-columns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/remove-unnecessary-rows-and-columns?u=76281980&t=0)** - [Presenter] One of the common mistakes that my [[Microsoft Power BI|Power BI]] students often make is that they pull in too much data. And what you wanna do is remove as many rows and columns from your query as possible. So let's walk through why this is the case. So you kinda wanna think of your Power BI workbook as an engine. So your engine needs to be running as clean and as powerfully as possible. So having too much data, or too many columns or rows, means that your pistons just aren't going to be firing. Now, if you're working with a small amount of data, that's probably not a big issue, but as your data sources start to scale up, performance becomes increasingly important. Especially if you're working with billions or even trillions of rows, you need to optimize your data model for performance. And one of the most effective ways to do that is to remove redundant columns. So I've gone ahead and pulled up our sales data source into the [[Microsoft Power Query|Power Query]] Editor, and if we scroll over, I wanted to call your attention to Size of Team, Team Size Code, and also Team Size. So these are redundant. So there are three columns here, when in reality we only need one. They're all communicating the exact same data point. So what you need to do is understand, what does the end user want to see? Do they use the Team Size Code to actually drive their decision?
>
> **[1:34](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/remove-unnecessary-rows-and-columns?u=76281980&t=94)** Is that speaking in a language that they wanna hear? Or is it Team Size? So once you understand that end user, you can go ahead and remove the excess columns. So let's say for this example, Team Size is pretty obvious. So what we can do is come up to our Home tab and remove these excess columns. Then come over to Size of Sales Team as well. So that is an effective way to very quickly improve the performance of your data model. And also, what you can do is remove excess columns. So for example, if we were looking at our Industry, what we could do is filter our Industry based on what our end user needs to see. If they are only looking across a few different industries, we could hit this dropdown menu, and select Agriculture, Aviation, and Construction. Maybe they're the product manager for those specific industries. So we can filter it there. Now, I do wanna caveat this. So these applied steps only are really effective at proving the data model if you are connecting directly to a database, because this will fold the query. In other words, these applied steps will be pushed to the original data source. So Power BI will only connect to the three industries we selected, and also only to Team Size, as opposed to the other two columns.
>
> **[3:08](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/remove-unnecessary-rows-and-columns?u=76281980&t=188)** So if you have a flat file, such as an [[Microsoft Excel|Excel]] file, like in this example, you need to go back to your data source and only pull the data that is necessary. So the data cleanup in that process is actually before you get it into Power BI. Getting your data model nailed tight can be a struggle, but just remember to only pull the data that is necessary, and remove all your excess columns and rows, and that is a small step that will go a long way at helping you improve your data model performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (4), [[Microsoft Power Query|Power query]] (1), [[Microsoft Excel|Excel]] (1)
> **Definitions:** means that (1), is an  (1), in other words (1), is a  (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** dropdown (1)
> **Best Practices:** remember to (1)
> **Warnings:** caveat (1)


### 3. Modeling Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a lookup table](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/create-a-lookup-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/create-a-lookup-table?u=76281980&t=0)** - [Instructor] Creating a data model can be a major challenge, and a common mistake that I see often is that [[Microsoft Power BI|Power BI]] users fail to create a fact or a lookup table. What this does is it enables you to connect all of your data sources to one central point with a key set of facts. So let's go ahead and walk through how to create a fact table. So I've pulled up Power BI, and let's go ahead and click Get data. The sample files for this course are [[Microsoft Excel|Excel]] files, so let's go ahead and connect to Excel, And we can go ahead and connect to our POWER_MISTAKES_DATA. So within this Excel file, there are four different sheets. Let's go ahead and connect to each and every one of these. So our Lead Code sheet, our Marketing Budget, our Sales Data, and also our Sales Representative. And what we're going to do is head straight over to the [[Microsoft Power Query|Power Query]] editor so we can go ahead and create that lookup table. So let's select Transform Data, and this is going to open up the Power Query editor. So before we jump into actually creating the fact table, let's walk through each individual data source. So our Lead Code data actually needs to be cleaned up a little bit. So let's head over to Transform and we can Use First Rows as Headers. So now we have our lead source and our lead code. In our Marketing Budget data source,
>
> **[1:34](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/create-a-lookup-table?u=76281980&t=94)** we have our industry and the budget for marketing for each industry. And our Sales Data source, we actually have a really rich data source here. And within our Sales Representative data source, we have our account numbers and then the sales rep that manage each individual account number. So let's go ahead and select our Sales Data source. And what we can do to create our fact table is right-click on that query and select Duplicate. So now we've made a carbon copy of our sales data source, and you'll notice that we have all of our different account numbers, but within our Sales Data source, there are multiple rows per each account number. And the key thing about a fact table is you want to create one row per each important data point. And in this example, our important data point is our account number. So if we go over to Account Number and right-click, we can select Remove Duplicates. So now we've cleaned up the data source somewhat, so if we head back over to the Home tab, we then can choose to include the columns that will tie the entire data source together. So let's go ahead and deselect. So our Account Number column will tie our fact table back to our Sales Data source and our Sales Representative data source. And also our Industry is going to be able to tie our fact table back to our Marketing Budget. And finally, Lead Source
>
> **[3:08](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/create-a-lookup-table?u=76281980&t=188)** will tie our fact table back to our Lead Code source. So let's hit OK. So now let's double-click here and we can call this Fact Table. So now we can Close & Apply all of these queries, and then head over to the Modeling view to see how we can create our data model. All right, so let's head over to the Data Model view. We can see that there are already some relationships that have been auto detected. So let's go and make this a little bit neater to look at. So we can go ahead and remove these extra relationships.
>
> **[3:56](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/create-a-lookup-table?u=76281980&t=236)** And now we have a data model that's working. So you'll notice that if we open up the properties for one of these relationships, we're going to have a one to many different relationship. Or in this situation, the cardinality is a many to one. So now we can successfully tie back all of our individual tables together. So that wraps up how to create a lookup or a fact table. This is a key step, especially if you need to build a data model that ties multiple data sources together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[Microsoft Power BI|Power bi]] (2), [[Microsoft Power Query|Power query]] (2)
> **UI Navigation:** right-click (2), double-click (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** power_mistakes_data (1)
> **Warnings:** common mistake (1)
> **Speakers:** - [instructor] (1)

#### [Use star schema](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/use-star-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/use-star-schema?u=76281980&t=0)** - [Instructor] In my consulting practice, I have worked with some massive data sets. And when you're working with this volume of data, it's very important that you choose the right schema. In fact, this is one of the most common errors that I see [[Microsoft Power BI|Power BI]] users often make. So, what do I mean by this? Well, first, let's define a schema. A schema is essentially the blueprint for your data model. And this is very important because the correct schema allows you to do a few different things. So number one, you can combine all of your data sources together. Then you can map out the relationships between your various different data sources. And finally, if you nail those first two points, it can help you optimize your data model for performance. So there are two commonly used schemas. The first is a [[Snowflake]] schema. The snowflake schema actually does somewhat resemble a snowflake. So this is a lot of different relationships, and having this many relationships can actually hurt your model performance. This is why you should always use the star schema. It has direct relationships to each and every dimension table. Reducing the amount of relationships will greatly improve your model's performance. So remember, when you're working with a large amount of data, it really does matter the schema that you choose.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (3), [[Microsoft Power BI|Power bi]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)

#### [Eliminate two-way relationships](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/eliminate-two-way-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/eliminate-two-way-relationships?u=76281980&t=0)** - [Instructor] Creating an effective data model can be a major task. There's some situations where it's difficult to create a one-to-many relationship. This is because there's no unique value per row in one of your data sources. In these situations, it's necessary for you to create a compound key. And essentially what this means is that you are combining two fields together to create a unique value. What we're going to do in this lecture is actually create two very short and small data sources that don't have a unique value per row. Then, create a composite key to join them together. So, the first step is let's go ahead and click Enter data. And the first table we're going to create is our Sales table. We can call this Item and type in 1, 1, 2 and 2. So, we don't have a unique value per row for our item. And next, we're going to type in our color. So we can say, this is blue, this is red, blue and red. So, I wanted to pause here to point out that there is no unique value for item or color per row. But if you look at them in combination, there is one row for the item number 1 that is blue, the item number 1 that is red, and so on and so forth. And then, we can go ahead and type in our sales. So, let's say that this is 12, 10, 11, and 9. So, we can load this.
>
> **[1:41](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/eliminate-two-way-relationships?u=76281980&t=101)** Next, let's create our Feedback table. So, we can type in Enter data once again. And let's call this or Ratings Table. So, we can type in Item and we're going to do the same thing. So 1, 1, 2, 2. And then, for the color we can do the same, which would be red, blue, red, and blue. So now, we can type in our ratings. So, we can say this is a 5-star. We can say this is a 4.2, say this is a 3. And we can say this is a 4. So, now we have our two different tables that don't have a unique value per row for any given field. The next step is to actually open up the [[Microsoft Power Query|Power Query]] Editor. So, click the Transform Data button. And what we can do is before we add our column, we actually need to change our item from a number to a text.
>
> **[2:51](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/eliminate-two-way-relationships?u=76281980&t=171)** And do this for both of these tables. Yes, replace current. So, now we can head over to Add column and then select Custom column. And what we can do is call this Composite Key,
>
> **[3:14](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/eliminate-two-way-relationships?u=76281980&t=194)** insert our item, and then instead of Add type in the ampersand, and now we can type in our color. So, let's hit OK. And now, we have that composite key. So, there is a unique value per each row within this data source. So, let's go ahead and do this within our Sales table. So we can add, well, let's clean this up a little bit. We can remove this column. So, now let's head back to Add column and click Custom column. So, let's enter in our item, and our ampersand, and our color. So, let's rename this Composite.
>
> **[4:07](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/eliminate-two-way-relationships?u=76281980&t=247)** So, if we head back to the Home tab, we can close and apply this. And now, the last step is just to head over to the Model view and we can actually combine these data sources together. And you can see that they are now combined. So, that was just a quick walkthrough on how you can actually create a composite key to combine data sources together that don't have that one-to-many set up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (1)
> **Definitions:** is a  (5)
> **Versions:** 4.2 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Apply user-friendly value replacements](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/apply-user-friendly-value-replacements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/apply-user-friendly-value-replacements?u=76281980&t=0)** - [Instructor] There are situations that you might run across where you have to change some of the core data structure. Now, a common mistake here would be to assume that you need to actually go back to your data source files and change the underlying data. What you can do instead is actually open up the [[Microsoft Power Query|Power Query]] Editor and very quickly assign a value replacement. So I've opened up our [[Microsoft Power BI|Power BI]] workbook and I've connected to our sales data source. So let's open up our Transform Data button here. So now you can see the Power Query Editor is open. And what we can do is actually go over, for example, let's talk about Industry. Let's say that our Utilities has actually changed, and we're wanting to call these [[Electronics]] instead of Utilities. What we can simply do is right-click on this one box here and select Replace Values. So now you can change all instances where it says Utilities to Electronics. And one thing that I wanna call your attention to is that this is now a part of your applied steps. So this is a great tactic to use, especially if you're in a pinch. Now, you're going to want to change the underlying data structure so that the industry is correct, but if you need to turn a report around by tomorrow with this new industry, you now can quickly use Power BI to replace those values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (2), [[Microsoft Power BI|Power bi]] (2), [[Electronics]] (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** right-click (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** common mistake (1)
> **Speakers:** - [instructor] (1)

#### [Define the right level of granularity](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/define-the-right-level-of-granularity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/define-the-right-level-of-granularity?u=76281980&t=0)** - [Instructor] As an analyst, you need to define the appropriate level of granularity. So what does this mean? What is granularity? Granularity is how specific or granular your data source is. For example, you may be asked to do some sales-by-geography analysis. And if your end user asked you to do a sales breakdown by zip code, but your data source is only collecting sales at the state level, you're going to run into an issue, because you can't actually execute on that form of analysis. Your data source is just not detailed enough. If you understand and define the appropriate level of granularity, you can communicate this fact to your end user. So instead of digging into the data and realizing that you can't actually conduct that analysis and wasting some time, you can quickly shoot back an email, or if you're in an in-person meeting, you can immediately shoot back and say, "Hey, we don't have this level of detail within our data source. Is it okay for us to do sales by state? Is that enough information for you to get the insight you're looking for, or do we need to go back to our [[Data Governance]] process and change the way that we're tracking our sales across our geography?" So how does this manifest within [[Microsoft Power BI|Power BI]]? Well, I've gone ahead and connected to our Sales Data source, and let's run through a very quick use case. So right now, we can pull in our sales amount by our close date.
>
> **[1:34](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/define-the-right-level-of-granularity?u=76281980&t=94)** So this is letting us know how much business actually closed within a given time period. So we can see that sales are actually down in 2019 compared to 2018. And within this Visualization pane, we have our axis and then we have our value. And within our axis, we can actually see our levels of granularity. So right now, we have sales by year, but we can quickly eliminate that, and now we're seeing sales by quarter. We can eliminate this and see sales by month. And finally, we can see sales by day. So in this specific use case, our sales over time, our specific level of granularity is the day level. So if our end manager asked us to do some analysis across the hour or the minute level of granularity, we'd have to immediately shoot back and say, "Hey, we can't do this analysis. Do we need to go back to the drawing board and rework our data sources?" So just remember when you're analyzing data to understand the lowest level of granularity. If you understand this fact, you can communicate much more effectively with your end user and you can save a bunch of time by not having to dig through the data to understand what kind of analysis you can and you cannot conduct.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Governance]] (1), [[Microsoft Power BI|Power bi]] (1)
> **Cross-References:** go back to (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. Visualizing and Analyzing Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Visualizing time series data](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/visualizing-time-series-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/visualizing-time-series-data?u=76281980&t=0)** - [Instructor] Let's talk about [[Time Series Analysis]]. So if your manager asked you to study sales over time, how would you visualize that data? So what we can do is actually walk through this example together. So I've gone ahead and connected to our sales data source, and let's pull in total amount, and then we can also pull in our close date. So automatically [[Microsoft Power BI|Power BI]] has created a bar chart, but we need to talk about data visualization theory right quick. A bar chart is a fantastic way to visualize data, but to get a little bit more nuanced, a line chart is a much more effective way of showing time series analysis. In fact, that is the best practice. When you're working with time series data, a line chart is a very effective communication tool so that your manager or your CEO or whoever you're building reports for, can very quickly spot trends. So if we head over to the visualization pane, we can very quickly change this to a line chart. And what's cool about our line chart here is that we can very quickly change the axis, and now we're seeing our sales by month and we can start to spot seasonality. It looks like in our summer months, we're actually not having a huge amount of sales, but in the fall it looks like our sales spike. So if you are ever working with time series data, it is usually the best practice to use a line chart.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Time Series Analysis]] (2), [[Microsoft Power BI|Power bi]] (1)
> **Definitions:** is a  (3)
> **Best Practices:** best practice (2)
> **Env Vars:** ceo (1)
> **Speakers:** - [instructor] (1)

#### [Use groups to break up the analysis](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/use-groups-to-break-up-the-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/use-groups-to-break-up-the-analysis?u=76281980&t=0)** - [Instructor] As you get out into the business world, you're almost inevitably going to run into some form of analysis where there are way too many data points. I've gone ahead and connected to our sales data source, and let's quickly pull in our sales amount and our industry. So this is pretty much illustrating the exact point that I laid out. So there are so many different industries here, and I would say a rookie mistake would be to present this visual to your end user. And yes, you can see some insights from this. For example, we can see that our sales by the military industry are extremely high in relation to all of our other industries, but you can't really tell the difference between our HR services and our aviation or aerospace industries. In this situation, I think it makes a ton of sense to actually break all of our industries into subgroups. And you can very quickly do this within the field's pane of your reports view. So if we right click on industry, we can then select new group. Now in this example, I'm just going to group them somewhat arbitrarily so we can select, you know, the first maybe 10 or 12, and then select group. So this can be group one. But if you're actually going to be creating groups,
>
> **[1:33](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/use-groups-to-break-up-the-analysis?u=76281980&t=93)** you need to run this by your end user and say, hey, we've got 57 different industries. How can we sit down and group them appropriately? So it's kind of like you're turning your industries into sub industries and then identifying some groupings that would be kind of your mainstay industry groups. So now we can select our second group and let's call this group two. Then we can select another set of industries.
>
> **[2:12](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/use-groups-to-break-up-the-analysis?u=76281980&t=132)** And then finally, our last group here. So group four. So now, you'll see in the fields pane, we now have our industry group, and if we unselect our industry and then select our industry group, now you're seeing a visualization that is focused on five different groups. So we do have our groups 1, 2, 3, and 4. And then there's also this blank, which might speak to a [[Data Quality]] issue. So you may want to investigate what's going on there, but now what you've done is you've grouped your industries by a sorting mechanism. So maybe all of your consulting services are one of these major groups, and maybe one of your other groups might be grouped by retail sales. So you need to think through how to logically group these industries together. But once you start to group the industries logically, then you can start to make better visualizations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (1)
> **Analogies:** for example (1), kind of like (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Use slicers to improve usability](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/use-slicers-to-improve-usability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/use-slicers-to-improve-usability?u=76281980&t=0)** - [Instructor] One of the most potent features of [[Microsoft Power BI|Power BI]] is that you can create interactive visualizations. So what this means is if you create a dashboard with a bar chart, a pie chart, and a map, you could click on one of the bars within that bar chart and filter all of the other visualizations. But I would say it's a mistake to limit this interactivity to just using visualizations as filters. Instead, you should incorporate slicers whenever possible. This can help you improve the usability and the user interface of your visualizations. I've gone ahead and pulled in our sales data source. Let's go ahead and click in our total sales amount, and we can look at our sales by team size. So let's blow this up a little bit. And now, we can see a bar chart that's clearly visualizing the sales by different team sizes. But what we can do is add in a slicer to better understand, how are these sales occurring? So if we deselect this visualization by clicking in this area right here, we can then head over to the visualizations pane and add in a slicer. So now, we can select a lead source within the slicer. So what we've done here is we've included some user interface. Essentially, if you were to share this to your end user, they're going to intuitively understand that,
>
> **[1:35](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/use-slicers-to-improve-usability?u=76281980&t=95)** "Oh, I can filter this visualization by lead source." So if I'm planning to make out a new pay-per-click ad campaign, I can very quickly click on this, and it's gonna help me understand what size of team should I target for my paid ad campaigns. So this is such a cool functionality, 'cause essentially what you're doing is you're creating little data apps. Power BI is an extremely powerful tool. Just remember to think through how you can make your visualizations more user-friendly, and you're going to be such a better and more effective [[Business Intelligence (BI)|business intelligence]] developer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (2), [[Business Intelligence (BI)|Business intelligence]] (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Definitions:** is an  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Use a custom tooltip to add detail](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/use-a-custom-tooltip-to-add-detail?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/use-a-custom-tooltip-to-add-detail?u=76281980&t=0)** - [Narrator] If you're brand new to [[Microsoft Power BI|Power BI]], then you may not be familiar with the concept of a tooltip. The long and the short of it is a tooltip allows you to add additional information to your visualizations. And not understanding or even knowing about tooltips is a common mistake that I see all the time with my students. So what we're going to do in this lecture is actually create a base visualization, then open up a new tab and create a tooltip. So if we head over to our fields pane, you can see that I've already connected to our sales data source. So let's go ahead and pull in our sales amount, and then we can look at it by our team size. So now we have our base or foundational visualization. Next, let's open up a new tab and we're going to have to format this so it is a tooltip. If you head over to the format pane here within our visualization pane, we can toggle on the tooltip setting. And one other step is to change the page size so that it is also a tooltip. So what we can visualize here is a different dimension of our sales team size. So if we click in our sales team size, we can also pull in our age. And let's change this so that the age is actually the average age 'cause that would be some interesting information to know
>
> **[1:34](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/use-a-custom-tooltip-to-add-detail?u=76281980&t=94)** when you're looking at the sales by team size. So if we head back over to page one, we can select our visualization and then head over to the Formatting tab and scroll down to the tooltip area. Now within our page, we can select page two. So now if we hover over our visualization, we can see the breakdown, both of total sales, but also the average age of the accounts within that group. So just remember that the tooltip is a great way to add additional information to your visualizations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (1)
> **Definitions:** is a  (5)
> **UI Navigation:** toggle (1), scroll down (1)
> **Warnings:** common mistake (1)
> **Speakers:** - [narrator] (1)

#### [Be careful with pie charts](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/be-careful-with-pie-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/be-careful-with-pie-charts?u=76281980&t=0)** - [Instructor] One common mistake that [[Microsoft Power BI|Power BI]] users often make is that they use the wrong kind of visualization. In fact, not all visualizations are created equal, and some are extremely effective at uncovering trends and others, not so much. So what we're going to do in this lecture is talk through pie charts. And pie charts are actually a relatively controversial form of data visualization. So let's walk through why this is the case and why people are making this argument. So I've gone ahead and connected to the sales data tab from our exercise files, and let's go ahead and pull in account number and amount into the workspace. So automatically we've created a bar chart, but if we head over to the visualization pane, we can very quickly click pie chart and change this into a pie chart. So now, let's drag account number from values into legend. And now we have a pie chart that's showing us the different amounts of sales broken down across account number. And this, this is a mess. This does not look good at all because you can see that we have these two big account numbers here, but what's going on with these smaller accounts, we can't really decipher them at all. So let me break down from a data visualization standpoint why this is so problematic. So our eyes are not very good at understanding the difference between angles, and that's essentially what we're having here. We have different pies that represent different angles,
>
> **[1:34](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/be-careful-with-pie-charts?u=76281980&t=94)** and that's how they're visualizing the amount of each slice or how many sales occurred across each account number. But what we can do is very quickly change this from a pie chart to a tree map. And now we can very quickly understand the differences in size between our largest account number, which is 1218, and one of our smaller ones like 1067. So now we can see that this is very much bigger than this one, but if we toggle this back over to a pie chart, there's no way that we can kind of break down and do some comparative analysis. So now you understand that pie charts are a controversial form of data visualization, and if you're ever going to be analyzing data that has very many different data points, you probably should not use a pie chart moving forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (1)
> **CLI Commands:** make (1)
> **UI Navigation:** toggle (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Warnings:** common mistake (1)
> **Speakers:** - [instructor] (1)

#### [When to use Top-N analysis](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/when-to-use-top-n-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/when-to-use-top-n-analysis?u=76281980&t=0)** - [Instructor] If you've been working as an analyst for a while, then you've probably come across a massive data set. A common problem that [[Microsoft Power BI|Power BI]] users often come across is trying to analyze too much data at a time. There's one specific tactic, though, that you can deploy to cut these huge data sets down to size. I've gone ahead and pulled up our Sales Data tab and connected it to Power BI. So in this example, let's say that our manager wants a pie chart to better understand how sales are distributed across different industries. So in that example, we can go ahead and pull in industry and amount into the workspace. And next, under the Visualization pane, we can select Pie Chart. So let's blow this up to take up the full screen. And one thing that I wanna bring attention to is that in this cluster of industries here, it's really hard to understand what's going on. But, what we can do is cut these industries out because they are making up very, very small percentages of total sales. And to do this, if we head over to the Filter pane, underneath Industry, we can hit this dropdown menu. And under Filter Type, let's change this from basic filtering to top end. And what we can do is just isolate the top 10 industries, and we can drag by amount into the value.
>
> **[1:35](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/when-to-use-top-n-analysis?u=76281980&t=95)** So now let's apply this filter, and you have a pie chart that is telling a much more compelling story. So we can see that this industry right here, military, is accounting for a huge amount of sales, and then we have industrial, and we have medical devices. So this is a huge improvement in terms of data visualization's best practice. You don't have too many data points on one pie chart anymore. Analysts often try to analyze too much data. Remember that you can use top end analysis to cut these huge data sets down to a much more digestible size.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (2)
> **UI Navigation:** dropdown (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [The full potential of visualizations](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/the-full-potential-of-visualizations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/the-full-potential-of-visualizations?u=76281980&t=0)** - [Instructor] A common mistake that [[Microsoft Power BI|Power BI]] users often make is that they don't leverage the full potential of their visualizations. So let's talk about the bar chart. Now, the bar chart is one of the simplest [[Forms]] of data visualization, yet I'd argue it's one of your most effective tools to quickly analyze data. The reason for this is that our eyes are especially good at understanding and differentiating between different lengths. And with a bar chart, you have a series of bars that end at a common point, and our eyes can very quickly see which bars are longer and which bars are shorter than others. You could even take this a step further and sort the entire bar chart from longest bar to shortest bar. So now let's walk through an example of how we can use a bar chart to analyze data. I've gone ahead and connected to our sales data source, and let's quickly pull in our total sales amount; and then we can look at our sales by our different lead sources. So we can blow this up to take up the full screen. And now we have a very simple bar chart. Now, this is an effective form of analysis. We can quickly see that the other category of lead source is our highest sales generator, and we can see that our web chat and our call-in just aren't performing as well. But we haven't yet fully utilized the value of a bar chart. So I wanna call your attention to the color of the bars. You'll notice that they're all one color.
>
> **[1:36](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/the-full-potential-of-visualizations?u=76281980&t=96)** And color is actually an opportunity for you to further this visualization. So if we were very quickly to head over to our fields pane and select our type, we can see that we now have different colored bars. We can see that our existing business is a dark blue, and we can see our new business is an orange. We could even change this to a stacked bar chart. And now we can see the relationship between our existing business and our new business by our lead source. I really like the stacked bar chart in this example because you can really see the ratio between our existing business and our new business. So just remember that there's more than one way to analyze data. And make sure that you're using the full potential of each of your visualizations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (1), [[Forms]] (1)
> **Definitions:** is an  (2), is a  (1)
> **CLI Commands:** make (2)
> **Warnings:** common mistake (1)
> **Speakers:** - [instructor] (1)

#### [Use color sparingly](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/use-color-sparingly?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/use-color-sparingly?u=76281980&t=0)** - [Narrator] A common mistake for [[Microsoft Power BI|Power BI]] users to make is that they use color excessively. Now, I'm gonna walk through a scenario, where we're going to need to use color, but I'm going to offer a solution to make sure that we're using color strategically. So I've gone ahead and connected to our sales data source. Let's go ahead and pull in our total sales amount and also our lead source. So let's say that our end user wants each individual lead source as a different color. So what we can very quickly do is just click on Lead Source and drag it into the legend. But I would say that this is not a very good use of color. I mean, we have so many different colors here that color is no longer important. So in this situation, what you might want to do is go ahead and create this report, as is, with all of your different lead sources having a different color. But we can also send a second report that actually uses color a little bit more strategically. So in the second report, what I would do is actually delete the legend. And what we can do is use color to show which of our lead sources are below a certain threshold. So if we hop over to our visualizations pane, let's click on the Format button here, and then we can select data colors. And this is where conditional formatting can come into play. So let's go ahead and click the
>
> **[1:33](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/use-color-sparingly?u=76281980&t=93)** Conditional Formatting button. And now what we can do is change this from a color scale to a format by rules functionality. So what we can say is that if the value is greater than zero, and we want this to be a number, not a percent, and is less than, let's say 2 million,
>
> **[2:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/use-color-sparingly?u=76281980&t=120)** let's flash that as red. So these are lead sources that are not generating a ton of different leads for us. So we can hit Okay, and now we can see that those bottom stragglers are highlighted in red, and those may need some extra attention, or you know, from a strategic standpoint, that can help your manager know that, okay, these aren't great for generating leads. So we shouldn't spend a whole lot of a budget towards these lead sources. So just remember, use color strategically. If you're using tons and tons of colors, chances are you're using an excessive amount of color.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Warnings:** common mistake (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Additional resources](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/additional-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-mistakes-to-avoid-27804086/additional-resources?u=76281980&t=0)** - Congratulations on making it all the way through the course. What you can do now is follow me here on [[LinkedIn]]. I post regularly all about analytics and even [[Microsoft Power BI|Power BI]]. I also have a YouTube channel where I live stream my Greensboro College Analytics and I post my interview with analytics experts. on our How to Get an Analytics Job YouTube channel, we have over 100 hours worth of content where you get to hear firsthand from senior analysts, analytics, hiring managers and executives both in and around the analytics industry. Thank you so much for taking this course. There is one specific video that I wanted to highlight in this podcast episode. Jenny Tumay, a senior analyst, talks about how she learned Power BI, covers some Power BI best practices, and even reviewed one of my students' Power BI [[Dashboards]]. Check out this episode if you wanna see a deep dive in how a true expert uses Power BI day to day. Good luck on your journey with Power BI. And remember, by avoiding these common mistakes, you'll bring some true value to your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (6), [[LinkedIn]] (1), [[Dashboards]] (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Madecraft]]

## Resources

- Exercise files available

## Skills Covered

- Microsoft Power BI

## Path Context

### In [[Become a Power BI Specialist]]
← [[Power BI Quick Tips]] | **5 of 5**

## Appears In

- [[Become a Power BI Specialist]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning with Logistic Regression in Excel, R, and Power BI]] — Microsoft Power BI
- [[Power BI Top Skills]] — Microsoft Power BI
- [[Power BI Dataflows Essential Training]] — Microsoft Power BI
- [[Power BI- Working Together with ChatGPT]] — Microsoft Power BI
- [[Power BI Challenges- 15 Skills-Building Analytics Exercises for Data Professionals]] — Microsoft Power BI

---

[↑ Back to top](#)