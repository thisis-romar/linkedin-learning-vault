---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: power-bi-data-modeling-with-dax-26160373
url: "https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373"
duration_minutes: 82
duration: 1h 22m
level: Intermediate
updated: 8/7/2025
learners: 56243
skills:
  - Microsoft Power BI
  - Data Modeling
  - DAX
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFpAAsh-X2U1w/learning-public-crop_675_1200/B4EZh3Kg7tGwAY-/0/1754345902655?e=2147483647&amp;v=beta&amp;t=xRxrLcjdmUuwllH4EW955FjrvBo0NiumGD1KiiQp1X8"
linkedin_topic: Data Science
learning_paths:
  - '[[Moving from Data Analyst to Data Scientist]]'
  - '[[Advance Your Business Analytics Skills]]'
prev_courses:
  - '[[Complete Guide to Tableau for Data Scientists]]'
  - '[[Using Tableau to Discover Powerful Business Insights]]'
next_courses:
  - '[[Actionable Insights and Business Data in Practice]]'
  - '[[SQL for Data Analysis]]'
path_nav: '[{"path":"Moving from Data Analyst to Data Scientist","position":10,"total":11,"prev":"Complete Guide to Tableau for Data Scientists","next":"Actionable Insights and Business Data in Practice"},{"path":"Advance Your Business Analytics Skills","position":5,"total":11,"prev":"Using Tableau to Discover Powerful Business Insights","next":"SQL for Data Analysis"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - skill/microsoft-power-bi
  - skill/data-modeling
  - skill/dax
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Power%20BI%20Data%20Modeling%20with%20DAX.md)

![Power BI Data Modeling with DAX](https://media.licdn.com/dms/image/v2/D4E0DAQFpAAsh-X2U1w/learning-public-crop_675_1200/B4EZh3Kg7tGwAY-/0/1754345902655?e=2147483647&amp;v=beta&amp;t=xRxrLcjdmUuwllH4EW955FjrvBo0NiumGD1KiiQp1X8)

# Power BI Data Modeling with DAX

> Power BI Desktop makes it easy to create basic data models. But if you need to report across time periods—for example, visualize year-over-year growth or compare sales or other data by month or quarter—you need Data Analysis Expressions (DAX). DAX is a language you can use to create formulas for Power BI that extend your data model. In this course, Gini von Courter covers the essentials of working

> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373) | 1h 22m | Intermediate | 56K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Build powerful data models with DAX](#build-powerful-data-models-with-dax)
  - [What you'll need](#what-youll-need)
- [**1. Set Up the Data Model**](#1-set-up-the-data-model) (4 videos)
  - [Data modeling: The basics](#data-modeling-the-basics)
  - [Get data for your model](#get-data-for-your-model)
  - [Check relationships](#check-relationships)
  - [Save your data model](#save-your-data-model)
- [**2. DAX Aggregate Functions**](#2-dax-aggregate-functions) (8 videos)
  - [Create a measure with SUM](#create-a-measure-with-sum)
  - [Understanding DAX syntax](#understanding-dax-syntax)
  - [Display the measure in a matrix](#display-the-measure-in-a-matrix)
  - [Format a measure](#format-a-measure)
  - [Create measures with COUNT functions](#create-measures-with-count-functions)
  - [Delete or edit a measure](#delete-or-edit-a-measure)
  - [Check your data with COUNTBLANK](#check-your-data-with-countblank)
  - [Create a measure with DISTINCTCOUNT](#create-a-measure-with-distinctcount)
- [**3. Measures and Calculated Columns**](#3-measures-and-calculated-columns) (6 videos)
  - [Add a calculated column](#add-a-calculated-column)
  - [Understand explicit and implicit measures](#understand-explicit-and-implicit-measures)
  - [Create a measure with operators](#create-a-measure-with-operators)
  - [Create a measure with DIVIDE](#create-a-measure-with-divide)
  - [Iterators and row context: SUMX](#iterators-and-row-context-sumx)
  - [Basic DAX date and time functions](#basic-dax-date-and-time-functions)
- [**4. DAX Logical and Filter Functions**](#4-dax-logical-and-filter-functions) (5 videos)
  - [Use FIND](#use-find)
  - [Use IF](#use-if)
  - [Use OR to handle case sensitivity](#use-or-to-handle-case-sensitivity)
  - [Use CALCULATE to create a simple filter](#use-calculate-to-create-a-simple-filter)
  - [Use SWITCH](#use-switch)
- [**5. Using DAX Time-Intelligence Functions**](#5-using-dax-time-intelligence-functions) (4 videos)
  - [DAX time-intelligence functions](#dax-time-intelligence-functions)
  - [Summarize year-to-date information with DATESYTD](#summarize-year-to-date-information-with-datesytd)
  - [Visualize cumulative YTD data](#visualize-cumulative-ytd-data)
  - [Compare totals with SAMEPERIODLASTYEAR](#compare-totals-with-sameperiodlastyear)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Build powerful data models with DAX](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/build-powerful-data-models-with-dax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/build-powerful-data-models-with-dax?u=76281980&t=0)** - [Narrator] [[DAX]] or Data Analysis Expressions is the language that's used to create formulas for [[Microsoft Power BI|Power BI]] that extend our data model. DAX gives us the ability to create additional information at runtime so that we can quickly and easily generate new information beyond the information that's in our model already. If you already know how to build data models in Power BI Desktop, DAX is a logical next step because there are things that we can do with DAX that we can't do as easily or at all without it. I'm Gini von Courter. I invite you to join me for this exploration of DAX in Power BI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (5), [[Microsoft Power BI|Power bi]] (3)
> **Env Vars:** dax (5)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [What you'll need](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/what-you-ll-need?u=76281980)


### 1. Set Up the Data Model

[↑ Back to Table of Contents](#table-of-contents)

#### [Data modeling: The basics](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/data-modeling-the-basics?u=76281980)

#### [Get data for your model](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/get-data-for-your-model?u=76281980)

#### [Check relationships](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=0)** - [Instructor] This is the model, or as many people think of, the Relationships view in [[Microsoft Power BI|Power BI]] Desktop for the Contoso Sales sample. Here, we see tables and the relationships between them, and there are a few things I'd like to point out to you here in this particular view. First, we have a main table here. This is the Sales sample, and so it's the Sales table. The Sales table has information about sales in it. It has columns like product, quantity, and price of the product. This table is our fact table. It's a data table. The other tables are supporting tables. They're called lookup tables. And so if I want to know information about the store that something was purchased in, it'll be in the Stores table: the [[Microsoft Products|products]], what category those products are in, that's out here on this branch. When I add data into a model, several tables, for example, from [[Microsoft SQL Server|SQL Server]] or any other data sources that are related, Power BI Desktop tends to lay them out like this, a star or a [[Snowflake]] arrangement with our fact table, our main table in the center, and the lookup tables around it. There is another equally valid way to lay these out, if you wish, and that is to lay them out with the lookup tables on the top. And then below them, the other tables, and really the fact table alone at the bottom. So each of these lookup tables at the top,
>
> **[1:33](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=93)** make sure you're dragging the tables by the top. If I look at a particular table, I can find the lookups tables related to that above it. Hopefully, one of these two methods seems intuitive to you. It might depend on whether you were working previously with [[Relational Databases]]. That usually will mean you'll favor the star layout, or if you've mostly worked with files from a more flat file world, or people who have worked with [[SharePoint]], I think, often say that they like this because they understand how lookups work in SharePoint. And there's also this sort of built in mnemonic, right? You look up to find the lookups. In addition to arranging the tables in some way that is comfortable for you as the modeler and for other modelers, you can look at the specific relationships between the tables. Double-click on the Relationship icon or on the line between the tables, and you'll see that we have two tables that are related: Sales and the Calendar. And Sales to Calendar is many-to-one. For every single date event in the calendar, there could be many sales in the Sales table, so sales to calendar, many-to-one. If you need to modify this relationship or remove a relationship, this is the place to do it, and you'll remove a relationship if it shouldn't be there. You've added a table to the model that's not related, but has columns with the same name as another table, and therefore there's a relationship that gets created that's not correct. Before you begin transforming your data, shaping your data using [[DAX]] with your data, make sure that your relationships
>
> **[3:08](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=188)** between the tables in your data model are correct and are arranged in a way that's going to work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (2), [[Microsoft Products|Products]] (2), [[SharePoint]] (2), [[Microsoft SQL Server|Sql server]] (1), [[Snowflake]] (1)
> **CLI Commands:** make (2), find (2)
> **Env Vars:** sql (1), dax (1)
> **UI Navigation:** double-click (1)
> **Analogies:** for example (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [instructor] (1)

#### [Save your data model](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/save-your-data-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/save-your-data-model?u=76281980&t=0)** - [Instructor] When we downloaded this file, we simply extracted it from the archive and therefore, it is actually read-only because we can't write back to this archive from here. So this is a good time to save our PBIX file. And all you need to do to do that is choose File and Save. And you'll see the file name, Contoso Sales Sample for [[Microsoft Power BI|Power BI]] Desktop, and you can put this wherever you wish. I'm going to leave this in my Documents folder, but for now, you could save this anywhere you wish to save it. Click Save. And at this point, the title should no longer say read-only because this saved copy of the file is now editable, saveable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (1)
> **Env Vars:** pbix (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. DAX Aggregate Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a measure with SUM](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/create-a-measure-with-sum?u=76281980)

#### [Understanding DAX syntax](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understanding-dax-syntax?u=76281980)

#### [Display the measure in a matrix](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/display-the-measure-in-a-matrix?u=76281980)

#### [Format a measure](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/format-a-measure?u=76281980)

#### [Create measures with COUNT functions](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/create-measures-with-count-functions?u=76281980)

#### [Delete or edit a measure](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/delete-or-edit-a-measure?u=76281980)

#### [Check your data with COUNTBLANK](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-your-data-with-countblank?u=76281980)

#### [Create a measure with DISTINCTCOUNT](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/create-a-measure-with-distinctcount?u=76281980)


### 3. Measures and Calculated Columns

[↑ Back to Table of Contents](#table-of-contents)

#### [Add a calculated column](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/add-a-calculated-column?u=76281980)

#### [Understand explicit and implicit measures](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=0)** - [Instructor] Let me show you another alternative to the measure that we created called Total Sales. I'm going to recreate this visualization. I'm going to start by choosing manufacturer. There it is, and scroll down. And then, what I want to do is, I'm going to simply choose sales amount, and I'm going to drag and drop it in here. And if you notice, this looks amazingly like Total Sales. I have the same value, few more decimal places. And since some recent changes to [[Microsoft Power BI|Power BI]], I can even rename this. I can rename this sales amount, so it says Total Sales, and it will look just like this. I can give this a little bit more space. But this renaming like any other formatting I do is actually for this instance of Total Sales, formerly the summarization of sales amount in this particular visualization. Watch what happens. I'm going to remove this. Sales amount isn't here anymore and I select to put it back. It's once again labeled sales amount, and any other formatting changes that I had made to this column of data are gone. It's totally temporary. This is what you call an implicit measure. It's a measure that's created on the fly simply by adding particular values into a visualization, but it's not the same as having a measure that I can format and reuse.
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=94)** And there's another important difference. When I'm creating a new measure, I can refer to existing measures in that measure because they are explicit. They exist here separately listed as measures in my tables, in my data model. I can't, however, call up these implicit measures that are created simply by using a column of data in a visualization. If the only thing that you need to do is check some values, sort of do a status check as you are working in Power BI, then this type of an implicit measure is great. But if over and over again, I want to be able to use Total Sales and have it formatted in a particular way and have it have the same meaning every time I use it, then I want to create an explicit measure as we've been doing thus far.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (2)
> **UI Navigation:** scroll down (1), drag and drop (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Create a measure with operators](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/create-a-measure-with-operators?u=76281980)

#### [Create a measure with DIVIDE](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/create-a-measure-with-divide?u=76281980)

#### [Iterators and row context: SUMX](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/iterators-and-row-context-sumx?u=76281980)

#### [Basic DAX date and time functions](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/basic-dax-date-and-time-functions?u=76281980)


### 4. DAX Logical and Filter Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Use FIND](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-find?u=76281980)

#### [Use IF](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-if?u=76281980)

#### [Use OR to handle case sensitivity](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=0)** - [Narrator] We have a calculated column in our data model that uses find to determine the position of the [[Microsoft Word|word]] mouse within a product name and then uses if to place the word mouse in our calculated column if there is indeed, a mouse in the product name. The problem when you're using find is that find is case sensitive, and there are two different ways you can deal with that. You could either convert for the purpose of comparison, the string to either upper or lower case, and do the same with the text that's in the product name. That's one option is a text conversion to upper or lowercase for both of the items that we're comparing. The other possibility is if we know something about our product names and we know that they are usually either lowercase or our proper case but never uppercase, then we really only have two choices. We could look for capital M mouse and all lowercase mouse. If either of those is found, then it will meet our conditions and so we're going to add yet another logical function, the function or to our calculated column/ Before we find, we're going to insert or and open our parentheses. And then our first logical test is whether we find uppercase mouse in the product name and if so, if that's greater than zero. So all of this right here
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=94)** is our very first logical expression in the or statement. I'm going to copy that. Now, I'm going to click and notice in my help, I notice that I'm in Logical2. I'm going to paste this in and I'm simply going to change one thing about it. I'm going to change the uppercase M to a lowercase M. So I have this long or statement and that or statement actually ends right here at the end of Logical2. And I'm going to close the parentheses on my or statement. I know that worked because now I'm being kicked back to my if statement and I need one more thing here. I need to put a comma so it knows that mouse, which comes next, is my result, if true. What I've done then is or to look at this piece of it. Our or function says either find upper or lowercase mouse. But unlike [[Microsoft Excel|Excel]], where I'm dealing with specific cell addresses and saying, "Look in this cell address and see if it's this or this," here in [[DAX]] in [[Microsoft Power BI|Power BI]], it's a lot more verbose. I'm not simply saying, "Look." I'm not simply saying, "Find proper case mouse or lowercase mouse." I have to say, "Find mouse in the product table, in product name, column and look starting in the first character of the product name and then return a result." And I have to do that twice. So this is much longer than it would look if I were in Excel and yet it's still going to work, whether mouse is upper
>
> **[3:10](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=190)** or lowercase by using or, I will have the appropriate result in my calculated column.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Microsoft Excel|Excel]] (2), [[DAX]] (1), [[Microsoft Power BI|Power bi]] (1)
> **CLI Commands:** find (8)
> **Env Vars:** dax (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Use CALCULATE to create a simple filter](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-calculate-to-create-a-simple-filter?u=76281980)

#### [Use SWITCH](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-switch?u=76281980)


### 5. Using DAX Time-Intelligence Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [DAX time-intelligence functions](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=0)** - [Instructor] [[Microsoft Power BI|Power BI]] includes built-in time intelligence functions. Time intelligence functions are used to be able to manipulate data using time periods, to filter results based on a particular time period, and to build calculations to compare results from one period to another. For example, one quarter to another, one year to another. There are some requirements to use the time intelligence functions. First, you have to be using a standard calendar. Many people will say the kind of calendar that hangs on your wall, January through December, and you have to have, in your model, a calendar table that includes all the dates in the period that you want to analyze. We have a table like that in our dataset. Sometimes people will create a table that's just their working days. That's not good enough. You can't skip weekends or holidays in this table. It has to account for every single date. So in a regular year, you'll have 365 rows within that table. Then a leap year, 366. The only exception in a way is if you start your data set in the middle of a year. If you go into business starting on September 1st, your first year will need only start with September 1st because you won't have data before that time. There are more than 30 time intelligence functions and they work in groups. The first set actually returns a table full of dates from your calendar or date table.
>
> **[1:37](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=97)** Dates year to date, for example, will return a table with all the dates to the current date for that year. There are two similar functions: quarter to date, DATESQTD, for quarter to date and DATESMTD, or month to date. Next, we have next year or next quarter month or day, which returns a table of all of the dates in that time period. Previous year or quarter or month or day is similar. It returns, again, a table with all of the dates in the previous year, the previous quarter, and so on. Same period last year takes the current period, whatever it is. If your context is this month, it will go find those same dates back a year. So same period last year returns a table of dates backed up a year from your current context. The next set of functions return specific dates. What is the date for the start of the year? There's also start of month and start of quarter. Similarly, end of year, end of month, end of quarter dates. Opening balance, which can be for year, month, or quarter finds the first date of that period. So opening balance year is used to find the opening balance on the first date of the year. Closing balance is the same. Total year to date and its companion functions, total quarter to date and month to date
>
> **[3:10](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=190)** are used to evaluate the value of the expression in your function for the dates that fall in that year, quarter, or month. [[Microsoft]] provides abundant help on the syntax and uses of all of these functions. The important thing is that you know that they exist, and we'll use a couple of them in the movies that follow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (1), [[Microsoft]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** datesqtd (1), datesmtd (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Summarize year-to-date information with DATESYTD](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/summarize-year-to-date-with-datesytd?u=76281980)

#### [Visualize cumulative YTD data](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/visualize-cumulative-ytd-data?u=76281980)

#### [Compare totals with SAMEPERIODLASTYEAR](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=0)** - [Instructor] Year-over-year sales are used frequently to view the performance of an organization. This is how we did this year. How did we do the year before? So let's see how we use same period last year to be able to create a new measure that will give us that information, which we can then add to our matrix. We already have a measure for total sales, so that's easy for us to use. And, in fact, we're using it here. I'm going to remove sales year to date so that all we have are our monthly sales. And in this case, the year is 2011. I'm going to actually change this to 2012 because we didn't start business until 2011, so we don't have any 2010 sales. If we looked at our previous year's sales, it would be a big, flat nothing. And let's begin by creating, then, a new measure. And the new measure that we want to create is our total sales last year, LY. And that is equal to. And we're going to use our general CALCULATE here, this very, very powerful function that we learned earlier. And we're going to base this on the total sales measure we already have. So you begin typing, and measures, of course, show up here as measures. So this is total sales. Calculate total sales. But what we want to do with total sales
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=94)** is now throw this same period last year function in to return a set of dates that match up to these dates, but in the prior year. There's one more argument that is needed here, and only one argument, and that argument is our date column, which, in our case, is called DateKey. And we'll just close this. And we've now created total sales for last year. I'm going to check this to add it. And here are my sales for this year and my total sales for the prior year. If I wanted to filter this, for example, by quarter or by month, I could do so, and I would only receive results from the same quarter or same month in the prior year. This is sweet. And from here, I might choose to create some additional measures that would, for example, show me the percentage of growth or perhaps lack of growth between this year and the last year. But remember that, although there's only one function, same period last year, you can use it not just for year, but for quarters and for months, as well.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **Env Vars:** calculate (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/next-steps?u=76281980)


## Instructor

- [[Gini von Courter]]

## Resources

- Exercise files available

## Skills Covered

- Microsoft Power BI
- Data Modeling
- DAX

## Path Context

### In [[Moving from Data Analyst to Data Scientist]]
← [[Complete Guide to Tableau for Data Scientists]] | **10 of 11** | [[Actionable Insights and Business Data in Practice]] →

### In [[Advance Your Business Analytics Skills]]
← [[Using Tableau to Discover Powerful Business Insights]] | **5 of 11** | [[SQL for Data Analysis]] →

## Appears In

- [[Moving from Data Analyst to Data Scientist]]
- [[Advance Your Business Analytics Skills]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning with Logistic Regression in Excel, R, and Power BI]] — Microsoft Power BI
- [[Excel VBA- Process Modeling]] — Data Modeling
- [[Power BI Top Skills]] — Microsoft Power BI
- [[Power BI Dataflows Essential Training]] — Microsoft Power BI
- [[Power BI- Working Together with ChatGPT]] — Microsoft Power BI

---

[↑ Back to top](#)