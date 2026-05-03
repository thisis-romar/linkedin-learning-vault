---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: excel-power-query-for-beginners-25101020
url: "https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020"
duration_minutes: 26
duration: 26m
level: Beginner
updated: 12/16/2024
learners: 174443
skills:
  - Microsoft Power Query
  - Microsoft Excel
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFYLUkSWYIveg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1733350326024?e=2147483647&amp;v=beta&amp;t=-DEEY8XhDNT7DiYGsQvcDUzrUn371yaanjKWjcoNWHo"
linkedin_topic: Data Science
learning_paths:
  - '[[Master Excel for Data Science]]'
prev_courses:
  - '[[Excel- Filtering Data for Beginners]]'
path_nav: '[{"path":"Master Excel for Data Science","position":7,"total":7,"prev":"Excel- Filtering Data for Beginners","next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/microsoft-power-query
  - skill/microsoft-excel
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Excel-%20Power%20Query%20for%20Beginners.md)

![Excel: Power Query for Beginners](https://media.licdn.com/dms/image/v2/D4E0DAQFYLUkSWYIveg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1733350326024?e=2147483647&amp;v=beta&amp;t=-DEEY8XhDNT7DiYGsQvcDUzrUn371yaanjKWjcoNWHo)

# Excel: Power Query for Beginners

> If any part of your job involves using Microsoft Excel, you’ve likely encountered disorganized or messy spreadsheets. Instead of feeling frustrated, use Power Query in Excel to import and clean data efficiently. In this course, Excel expert Dave Ludwig guides you through Power Query's robust features, showing you how to connect to data sources, filter data, and create conditional columns. Dave als

> [LinkedIn Learning](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020) | 26m | Beginner | 174K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [What is Power Query in Excel?](#what-is-power-query-in-excel)
  - [What you should know](#what-you-should-know)
- [**1. Getting Data with Power Query**](#1-getting-data-with-power-query) (2 videos)
  - [Getting data from another file](#getting-data-from-another-file)
  - [Getting data from an open workbook](#getting-data-from-an-open-workbook)
- [**2. Cleaning and Transforming Data with Power Query**](#2-cleaning-and-transforming-data-with-power-query) (5 videos)
  - [Common cleaning tasks](#common-cleaning-tasks)
  - [Filtering and sorting data](#filtering-and-sorting-data)
  - [Splitting columns](#splitting-columns)
  - [Conditional columns](#conditional-columns)
  - [Column by example](#column-by-example)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Power Query in Excel?](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/what-is-power-query-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/what-is-power-query-in-excel?u=76281980&t=0)** - Often you're given some data, but it's not always in great shape. You might have blank rows data that isn't sorted logically, or you might have columns that need to be split. Well, I've got a solution for you and that's [[Microsoft Power Query|Power Query]]. Power Query lets you import and clean data. It can take data like this and clean it up like this. When your data is clean, you can more easily create formulas, [[Pivot Tables]], and even charts. And furthermore, you can refresh this data just in case the original data changes in the future. So let's get started with Power Query and [[Microsoft Excel|Excel]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (3), [[Pivot Tables]] (1), [[Microsoft Excel|Excel]] (1)
> **Speakers:** - often (1)

#### [What you should know](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/what-you-should-know?u=76281980&t=0)** - [Instructor] So before you continue this course, it's a good idea to know the prerequisites so that you know what you should know. First of all, it's best if you have an intermediate knowledge of [[Microsoft Excel|Excel]]. In other words, you should know how to enter data inside cells, you should know how to insert rows and columns and you should also know how to delete them, and you should also know how to sort and filter. The other thing you need to know is that this course is for Excel for [[Windows]], and I'm using the one you get with an [[Microsoft 365|M365]] subscription. If you're using a Mac or Excel for the Web, the buttons and menus there are quite different, and in fact, some features aren't even available there yet. You might find you can follow along just fine, but if something is missing, it's not your fault. It's just that your version of Excel just doesn't have that functionality yet. Another thing to note, when opening the practice files, you might see this security warning here. You can click Enable Content since the file came from this course. Now you might also get this warning here, and this just means the version of Excel I was using might be a little different from yours. You can go ahead and click Close and things will work just fine. With all that out of the way, let's proceed with the course and get going with [[Microsoft Power Query|Power Query]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5), [[Windows]] (1), [[Microsoft 365|M365]] (1), [[Microsoft Power Query|Power query]] (1)
> **Warnings:** warning (2)
> **CLI Commands:** find (1)
> **Env Vars:** m365 (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Data with Power Query

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting data from another file](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/getting-data-from-another-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/getting-data-from-another-file?u=76281980&t=0)** - [Instructor] More often than not, you'll get data in the form of a file, and you'll want to clean it up using [[Microsoft Power Query|Power Query]]. For example, I double clicked this CSV file here from the Practice Files folder. It's called 01_01_SalesData.csv. Now, instead of just opening this file, how can I import it into another workbook? I'll show you how. First, I'll bring up a brand new workbook here by going to the File tab, Home, and then Blank workbook. And I'll [[Zoom]] in just a little bit here so you can see better. And now I'm going to import that CSV file into this new file, and to do that, I'll go to Data and click Get Data, From File, and then this option here, From Text/CSV, or if you don't have this option, you might see a New Query button where you can choose the CSV option. So I'm going to choose this one, and I'm going to go ahead and double-click that CSV file in the Exercise Files folder. And I get this helpful Import dialogue box that shows me a preview of the data. And in particular, I really want to get rid of these blank rows here, so I'm going to go ahead and clean these up. And to do that, I'm going to click Transform Data. And then the Power Query window opens. Specifically, it's called the Power Query Editor window, and this is where you do all that cleaning I was talking about. So for example, I want to remove those blank rows. So I'm going to go to Remove Rows,
>
> **[1:34](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/getting-data-from-another-file?u=76281980&t=94)** Remove Blank Rows, and there they are. They've gone away. Now, just one quick note about this window, while it's open, you can't really do anything here in [[Microsoft Excel|Excel]], so you got to be finished with this window first to do stuff in Excel. So I'm going to go ahead and click Close & Load. And it went ahead and imported the data without those blank rows. A couple things to point out here. It added a new tab to the file called 01_01_SalesData, and that presumably came from the file name. And then over here, there's the Queries & Connections pane, and this shows that you have a query inside this workbook. This query goes out to that CSV file, and it brings in that data, and in fact, it brings in 210 rows of data. Now what happens if the data in the CSV file changes? Will this data change? It sure can. Let's test it out. I'm going to go ahead and switch over to the CSV file we had open earlier by going to the View tab, Switch [[Windows]], and then I'll choose that file that's still open. And let's say Nancy's sales here were really 10,000. So we'll type 10,000. Enter. We'll save that, and then we'll switch back on over to the the new file we had open, and it still has that older amount here. But if we go ahead and go to the Data tab
>
> **[3:07](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/getting-data-from-another-file?u=76281980&t=187)** and click Refresh All, you'll see that it gets that update of 10,000. So importing is the first step on your journey to working with Power Query. Fairly simple and straightforward, but without importing, you can't do all the other handy things that Power Query offers to make the data more useful to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (5), [[Microsoft Excel|Excel]] (2), [[Zoom]] (1), [[Windows]] (1)
> **Env Vars:** csv (8)
> **UI Navigation:** go to (3), double-click (1)
> **Analogies:** for example (2)
> **File Paths:** 01_01_salesdata.csv (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Getting data from an open workbook](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/getting-data-from-an-open-workbook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/getting-data-from-an-open-workbook?u=76281980&t=0)** - So with [[Microsoft Power Query|Power Query]], you can import and clean data from an external source like a CSV file or another database, but a lot of people don't know that you can actually clean data that's already in a workbook. For example, I have this [[Microsoft Excel|Excel]] file open called 01_02 SalesData, and you can see this looks very much like the CSV file we used earlier, but it's already in an Excel file. Can we clean this data up? We sure can. First we need to tell Power Query which data to clean up, and to do that, I'm going to select all of this data, including the blank rows, and I happen to know that the very last row of this data is row 215. So I'm going to go down there to 215, then I'm going to click the cell J215. That's this one here, and then to make sure I select all of this data up and to the left, I'm going to press control shift home, and that will make sure I select all of this data, including the blank rows. Now, Power Query will know the data I need to clean up with it selected here. Now I'm going to go to the Data tab and I'm going to go up here and choose Get Data From Other Sources and choose From Table Range. This is the option that lets me clean up the data that's already here in this file. And sure enough, A1 through J215 is the range I want to clean up, and I do have headers, so I'm going to go ahead and click OK.
>
> **[1:40](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/getting-data-from-an-open-workbook?u=76281980&t=100)** And now you can see that we go immediately into the Power Query window. We can see those blank rows. Let's fix those. We did that before. We'll go to Remove Rows, Remove Blank Rows, and then let's put this clean data back into Excel by clicking close and load. What just happened? Well, Excel put in a new sheet here called Table 1 and it looks like those blank rows are gone. So this is the clean data, and of course, we have our original data here, which is in Sheet 1. Now this might be a little fussy, but what I like to do is rename and reorder these so they make more sense to me. This sheet here is the original, so I'm going to double click that name and I'm going to go ahead and type Original. And this one here has the clean data, so I'm going to type Cleaned. Then I like to move the Cleaned tab after the original. So I'll click and drag and then let go, and there you go. We've got the original data and the cleaned data. And again, this is all refreshable 'cause we're using Power Query. So let's go over to the original sheet. Let's change Nancy's sales to 10,000 again, and then we'll go over the Cleaned tab and we'll refresh, and this 100 will change to 10,000. So again, not only can you import data from other sources, but you can also get and clean data
>
> **[3:12](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/getting-data-from-an-open-workbook?u=76281980&t=192)** that's already in the workbook you have open.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (5), [[Microsoft Excel|Excel]] (4)
> **Env Vars:** csv (2), j215 (2)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (2)
> **Analogies:** for example (1)
> **Speakers:** - so (1)


### 2. Cleaning and Transforming Data with Power Query

[↑ Back to Table of Contents](#table-of-contents)

#### [Common cleaning tasks](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/common-cleaning-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/common-cleaning-tasks?u=76281980&t=0)** - [Instructor] Okay, let's go over some common cleaning tasks when working with Data and [[Microsoft Power Query|Power Query]]. These are the tasks that I do almost every time, and it's good to cover them right off the bat. I've got the 02_01 SalesData file open and notice that I've got the Queries and Connections pane open over here on the right. Let's close that if it's open so we have more room to work with. So now is the moment of truth. We've got to clean up this data even more. So I'm going to go over to the data tab and I'm going to click Get Data, and then I'm going to choose Launch Power Query Editor. This will let us edit the query we already have here. Now, if I have a date column, I like to move that to the very left. That's just my preference. I like that date to always be the left most column. So I'm going to go and I'm going to find that date column. Here it is, Order Date, and I'm going to right click it and I'm going to choose Move and then to Beginning Option. And the other thing I want to do is remove the columns I don't need. And to do that, I'm going to select the first column I don't want, and that's the company name column. I'm going to go ahead and select that column and then I'm going to hold down the control key and I'm going to select the SKU ID, Call Total,
>
> **[1:27](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/common-cleaning-tasks?u=76281980&t=87)** Order and Rank Columns. And with those five columns selected, I'll go up here and choose Remove Columns. Something to notice that's a bit interesting over here, you have this Query Settings pane, and you have the applied steps. As you go cleaning data and choosing options in this window, Power Query will record the steps that you're making, and if you wanted to, you could undo the last thing by clicking the X, but I don't need to do that at the moment. So for now, this looks good. One thing I am going to do though, is I'm going to rename the query to something a little more intuitive rather than just table one so I'm going to select that text and I'm going to just name this 2025 sales. Great, now, to finish up and load this data into [[Microsoft Excel|Excel]], I'm going to click Close and Load, and it's going to run all those cleaning steps, and it's going to move that date column to the first position. It's going to remove all the other columns I didn't want, and this is looking pretty good. Once you get this data into Power Query, you do these initial tasks, you're on your way to working with cleaner data that can be pivoted, charted, and so forth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (4), [[Microsoft Excel|Excel]] (1)
> **UI Navigation:** select the (2)
> **CLI Commands:** find (1)
> **Env Vars:** sku (1)
> **Speakers:** - [instructor] (1)

#### [Filtering and sorting data](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/filtering-and-sorting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/filtering-and-sorting-data?u=76281980&t=0)** - [Instructor] Often data will come to you with rows that you just don't need. For example, down here at row 50, I've got some test entry rows that's not going to be helpful later. And then down at 100, I've got some rows that have the value N/A, that's also not going to be helpful. So how do we remove those? We use [[Microsoft Power Query|Power Query]] to filter them out. I've got the 02_02 sales data file open. I've also got the Queries & Connections pane open. I'm going to close that just to give myself some more room. And now to filter those rows out, I'm going to Data, Get Data, Launch Power Query Editor. Now let's remove those rows that we don't want. So I'll go ahead and go over here to the Contact name column. I'll click the filter button and I can see I have those N/As here, so I'll deselect N/A. And then I also have test entry here. I'll deselect test entry, click OK. And now when we get down there to row 50 or thereabouts, we're going to see that there are no test entries there anymore, which is great. And then when we go down to around 100, we'll also see that there are no N/A values there either. So that's super. Let's say we also don't need all these sales regions. Let's say we only want to know the North Region sales. So we'll go ahead and we'll click that filter button and we'll click this check box to deselect everything and then only select North and click okay.
>
> **[1:36](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/filtering-and-sorting-data?u=76281980&t=96)** And again, we applied another filter that only shows the North sales. Let's do another one, let's set the date filter so that we only see the year 2025 sales. So we'll go to the Order date column. Click the filter button. We will choose Date/Time filters, and we'll say after, let's say December 31st. Maybe even use this calendar button here. We want all sales after December 31st, 2024, and we'll click okay. Things are looking pretty good. We've got all our 2025 rows here, let's do one more thing. Let's sort the sales amount from greatest to least, and we'll do that here. We'll click the button here and we'll choose Sort Descending. We've got just the 2025 sales. We've got just the North region and we've sorted from greatest to least. Let's go ahead and click close and load and see how it looks in [[Microsoft Excel|Excel]]. And there we go, 2025, North, and a sort from greatest to least. So we filtered, we sorted, and we did so all using Power Query. And why did we do that? Because again, if the original data changes in any way, let's say new rows are added, removed, or changed, we can always refresh this query and apply all of those cleaning steps automatically.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (3), [[Microsoft Excel|Excel]] (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Splitting columns](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/splitting-columns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/splitting-columns?u=76281980&t=0)** - [Narrator] So often, you'll get data where people's first and last names are both within one column. This can be problematic if you need to take this data to another mailing program that generates labels or envelopes. So what we need to do in this situation is we need to split this column into two, one column for the first name and one for the last name. And we're going to do that with [[Microsoft Power Query|Power Query]]. I've got the 02_03 file open. And first, I recommend closing this pane if it's open, just to give yourself some more room. And let's split that column. We're going to go to Data, and we're going to choose Get Data, Launch Power Query Editor. I'll select the Contact Name column, and we'll do Split Column by Delimiter. We're going to specify a space. It looks like Power Query auto-detected that there were spaces here, so it shows space for me, which is great. But there are other options too, in case you need them. And I'm going to split at the left-most delimiter, the first space in the text. I'll click OK, and there we go. The column has been split. We've got the first name and the last name, but the column names are not very intuitive. So let's go ahead and double-click the first one and say, rename that to First name, and then double-click the second one. Rename that to Last name. Now that that's all done, I'll click Close and Load and we can take a look at it in [[Microsoft Excel|Excel]].
>
> **[1:34](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/splitting-columns?u=76281980&t=94)** And there we go, we've got that column that contained both first and last name is now in two columns, First name and Last name. So that's splitting a column, which is helpful not only for a column of names, but you might have a column with product codes where certain characters or numbers need to be split out into their own columns, or you might have a situation where you have a column that contains a list of things separated by commas, and you could use the comma as the delimiter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (3), [[Microsoft Excel|Excel]] (1)
> **UI Navigation:** double-click (2), go to (1), select the (1)
> **Speakers:** - [narrator] (1)

#### [Conditional columns](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/conditional-columns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/conditional-columns?u=76281980&t=0)** - [Instructor] I have lots of rows that represent sales transactions here, and each of the [[Microsoft Products|products]] are very specific. We've got apples, we have bananas, we've got broccoli and celery, we've got coffee. What if I want a higher level category breakdown? For example, what if I want to know the beverage sales versus the vegetable sales versus the fruit sales? It's almost like I need a new column here that tells me that category or department that the product belongs to. So let's add that column. We'll do that by adding a conditional column in [[Microsoft Power Query|Power Query]]. I've got the 0204 sales data file open, and I'm going to remove this to give myself some more room. And to add that column, I'm going to go to the data tab and then click get data, launch Power Query editor. And here we are in Power Query. I'm going to click add column at the top and choose conditional column. So I'm making a new column. The column's going to be called category for the category of product or department of the product. And this is a conditional column. So the column will depend on the value in the row. So what do I mean by that? If the column name is product name, if product name equals coffee, then put in the conditional column beverage, then we'll add another clause.
>
> **[1:35](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/conditional-columns?u=76281980&t=95)** If the product name equals T, then output the value beverage for the category column. If the product name equals celery, then I'll put vegetable. I think you understand where I'm going here. We're basically adding a bunch of clauses that will allow for the different values in the product name column, and then outputting the category name. I'm going to type broccoli here, and then I'm going to type vegetable, of course, add another clause. If product name equals apples, then that's the category fruit. One more here. We won't do them all, but we'll do one more here for bananas and we'll output fruit for that as well. And just in case there's anything that I didn't account for, I will put an unknown for else. So if none of those above are found here, if there's something else that comes into the data, we'll just say unknown at this moment. I will go ahead and click okay. And you see we've got that new conditional column that's been added here. And because this row says apples, the category value is fruit, same for bananas, fruit.
>
> **[3:12](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/conditional-columns?u=76281980&t=192)** And then down here we've got broccoli, vegetable, celery, vegetable and beverage for tea, so forth and so on. Let's click close and load on the home tab and see what it looks like. There it is, the category column with all of our category values. You can even see in some cases, oh, it looks like we only have fruit, vegetable, and beverage here, because we have filtered out lots of other rows because of our earlier video on filtering. But you can see that general idea there of that conditional column giving you special values depending on the product that it is. Conditional columns, they're great for adding a column based on your own logic, your own business logic, really. And you can add that into Power Query. And that helps because it gives you slightly more information than what you had in the first place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (4), [[Microsoft Products|Products]] (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Column by example](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/column-by-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/column-by-example?u=76281980&t=0)** - [Instructor] Let's take creating columns with [[Microsoft Power Query|Power Query]] One Step further, let's create a new column using data from another column. This is also known as creating a column by example. So what I mean by that is, let's say I want another column for just the day of the date, like Sunday, Monday, Tuesday, Wednesday, et cetera. We can do that with Power Query, here's how. I've got the 0205 sales data file open, and I'm going to close this pane to give myself a little more room and then I will go to the data tab, click get data, and then Launch Power Query Editor. I'm going to make sure the order date column is selected and then I'm going to click the add column tab, column from examples and then from selection. And so what it's going to do, Power Query is going to create a sort of working column over here and it's going to base its values on the column I had selected. So here's our working column here, and when I double click in here, it will give me some suggestions of values based on the order date column. There's lots of different options you can choose from here. I'm going to double click Sunday 'cause I just want the name of the day to appear. And then I'm going to hit enter and look at that, it surmised each day from the date of this order date column. Pretty handy.
>
> **[1:32](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/column-by-example?u=76281980&t=92)** I'm going to click okay to accept that new column and it put it here at the end at the very right, which is great. Let's try another column by example. Let's select the sales amount column and go up here and choose column from example from selection again. And I'll scroll over just a little bit so you can see this sales amount here. We're basing this new column by example based on these examples here. Let's say I wanted ranges to appear here, like $5,000 ranges that show me which $5,000 range the product was sold in. I'll double click the first sell in the working column here. And 38,000 16 cents, I'm going to say that's in the 35,000 to 40,000 range. I'm going to hit enter. And sure enough, Power Query looked at these examples and automatically slotted in the right $5,000 range for us. So for 25,000, it added the 25,000 to 30,000 range. For the 8,800 value here, it slotted in the 5,000 to 10,000 range. That's pretty handy. We'll click okay for that one too. And we've got those two new columns by example. We'll go ahead and click close and load and see how it looks.
>
> **[3:08](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/column-by-example?u=76281980&t=188)** And there those two new columns are, we've got the day name and the range. Why did we do this? Well, it's easier. It's easier than making very complicated [[Microsoft Excel|Excel]] formulas to extract, for example, the day name or to extract the range. And with just a few clicks in Power Query, we've got these two new columns. And furthermore, these new columns can be very helpful when you need to chart the data later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (6), [[Microsoft Excel|Excel]] (1)
> **UI Navigation:** go to (1), select the (1)
> **CLI Commands:** make (1)
> **Definitions:** known as (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/next-steps?u=76281980&t=0)** - So let's review what we did in this course, and I also want to show you some fun tips for taking advantage of all the [[Data Cleaning]] we did. Furthermore, I want to give you some additional topics to learn about, because believe it or not, we really just scratched the surface of what you can do with [[Microsoft Power Query|Power Query]]. Okay, here's what we did. We started with our original data and it had all sorts of problems. Then we cleaned it up on this sheet with Power Query. Now what do we do? Well, most likely you want to chart this data, or you want to make a PivotTable to get more insights. There's a lot to teach when it comes to those two things, but here are some quick tips to get going. First, I'll select just the Sales amount column, and then I'll hold down the Ctrl key and select the Day Name column as well. Then I'll head on over to the Insert tab and click Recommended Charts. Right off the bat, this chart looks great. I'm going to go ahead and click OK. Another way to get quick insights is to select anywhere in your data and then click Analyze Data on the Home tab. [[Microsoft Excel|Excel]] will give you AI suggestions of [[Pivot Tables]] and PivotCharts that might be helpful to you. I particularly like this one that shows the sales amount by day, name, and category. I'll go ahead and insert that one. And this is really the endgame
>
> **[1:33](https://www.linkedin.com/learning/excel-power-query-for-beginners-25101020/next-steps?u=76281980&t=93)** after you do all that cleaning with Power Query. You want to visualize, or pivot, to get more findings from the data. And in this case, we can see that our most active sales days are Sunday through Tuesday, and it looks like that's because Beverages is the leading category on those days. Now, in this course, I covered a lot, but believe it or not, I just showed you the tip of the iceberg. There's a lot more to learn about Power Query. Here are two topics that I highly recommend searching for on [[LinkedIn]] Learning, Power Query and data types. There are several courses on this topic, and data types are really important to understand when it comes to Power Query in Excel. And probably the most important, joins in Power Query. This concept is super important, and once you learn joins, you'll save lots of time. So that's it for this course. You've got the basics, but you also have more topics to explore as you go about your Power Query journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power Query|Power query]] (8), [[Microsoft Excel|Excel]] (2), [[Data Cleaning]] (1), [[Pivot Tables]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Best Practices:** recommended (1)
> **Speakers:** - so (1)


## Instructor

- [[Dave Ludwig]]

## Resources

- Exercise files available

## Skills Covered

- Microsoft Power Query
- Microsoft Excel

## Path Context

### In [[Master Excel for Data Science]]
← [[Excel- Filtering Data for Beginners]] | **7 of 7**

## Appears In

- [[Master Excel for Data Science]]

## Related Courses

_Courses sharing skills:_

- [[Excel- Working Together with Power Query and Power Pivot]] — Microsoft Excel, Microsoft Power Query
- [[Excel- Filtering Data for Beginners]] — Microsoft Excel
- [[Excel- Tracking Data Easily and Efficiently]] — Microsoft Excel
- [[Excel for Business Analysts]] — Microsoft Excel
- [[Complete Guide to Excel Statistics with Copilot]] — Microsoft Excel

---

[↑ Back to top](#)