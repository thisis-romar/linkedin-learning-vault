---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: excel-creating-a-basic-dashboard-2022
url: "https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022"
duration_minutes: 66
duration: 1h 6m
level: Intermediate
updated: 2/8/2022
learners: 78039
skills:
  - Microsoft Excel
  - Excel Dashboards
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHYbdaw-bwG6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1644001786468?e=2147483647&amp;v=beta&amp;t=C7MJtbg02T_--d6ERATRWC9LF0LSk6hjESQ4ZETvf7g"
linkedin_topic: Data Science
learning_paths:
  - '[[Prepare for the Excel Expert - Microsoft Office Specialist Exam for M365 Apps (MO-211)]]'
prev_courses:
  - '[[Excel- PivotTables in Depth]]'
next_courses:
  - '[[Cert Prep- Excel Expert - Microsoft Office Specialist for Microsoft 365 Apps]]'
path_nav: '[{"path":"Prepare for the Excel Expert - Microsoft Office Specialist Exam for M365 Apps (MO-211)","position":6,"total":7,"prev":"Excel- PivotTables in Depth","next":"Cert Prep- Excel Expert - Microsoft Office Specialist for Microsoft 365 Apps"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/microsoft-excel
  - skill/excel-dashboards
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Excel-%20Creating%20a%20Basic%20Dashboard.md)

![Excel: Creating a Basic Dashboard](https://media.licdn.com/dms/image/v2/C560DAQHYbdaw-bwG6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1644001786468?e=2147483647&amp;v=beta&amp;t=C7MJtbg02T_--d6ERATRWC9LF0LSk6hjESQ4ZETvf7g)

# Excel: Creating a Basic Dashboard

> In this course, instructor Curt Frye shows you how to summarize spreadsheet data effectively to support decision-making throughout your organization. Curt explains how to set up a supporting workbook, including how to manage and filter data, streamline charts for dashboards, and create sparklines. He also goes over the process of creating a dashboard worksheet. Curt covers creating and managing ce

> [LinkedIn Learning](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022) | 1h 6m | Intermediate | 78K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Improve decision-making by creating dashboards](#improve-decision-making-by-creating-dashboards)
  - [What you should know](#what-you-should-know)
- [**1. Setting Up the Supporting Workbook**](#1-setting-up-the-supporting-workbook) (8 videos)
  - [Manage data using Excel tables](#manage-data-using-excel-tables)
  - [Manage PivotTables and PivotCharts](#manage-pivottables-and-pivotcharts)
  - [Summarize Excel table and PivotTable data](#summarize-excel-table-and-pivottable-data)
  - [Filter Excel table and PivotTable data](#filter-excel-table-and-pivottable-data)
  - [Define conditional formats](#define-conditional-formats)
  - [Define an icon set conditional format](#define-an-icon-set-conditional-format)
  - [Streamline charts for dashboards](#streamline-charts-for-dashboards)
  - [Create sparklines](#create-sparklines)
- [**2. Creating a Dashboard Worksheet**](#2-creating-a-dashboard-worksheet) (5 videos)
  - [Create and manage cell links](#create-and-manage-cell-links)
  - [Link cell contents to a shape](#link-cell-contents-to-a-shape)
  - [Use PivotTable data in a formula](#use-pivottable-data-in-a-formula)
  - [Extend your dashboard using hidden rows](#extend-your-dashboard-using-hidden-rows)
  - [Hide gridlines and set zoom levels](#hide-gridlines-and-set-zoom-levels)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Improve decision-making by creating dashboards](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/improve-decision-making-by-creating-dashboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/improve-decision-making-by-creating-dashboards?u=76281980&t=0)** - [Curt] Creating [[Dashboards]] in [[Microsoft Excel]] provides a powerful tool for summarizing and evaluating the performance of your business or organization. Mastering those skills you need to create effective dashboards will let you work quickly and make great decisions. In this course, I will use real-world examples to demonstrate how you can apply the incredible power of [[Excel Dashboards]] to your data. I'm Curt Frye. Join me at [[LinkedIn]] Learning for an introduction to the essential skills that will let you unlock the power of worksheet-based dashboards in [[Microsoft Excel|Excel]] for [[Microsoft 365]]. Excel for Microsoft 365 is a cloud-based product that updates frequently with new capabilities. You can also change the user interface's appearance on your own. So, don't worry if your user interface doesn't look exactly like what you see on the screen. Everything will be in the same place, and the program will operate exactly as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (3), [[Microsoft Excel|Excel]] (2), [[Microsoft 365]] (2), [[Microsoft Excel]] (1), [[Excel Dashboards]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [curt] (1)

#### [What you should know](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/what-you-should-know?u=76281980&t=0)** - [Instructor] Thanks for your interest in this course. Before I get started, I wanted to review a few things that you should know to get the most out of this course. The first is that I do assume basic [[Microsoft Excel|Excel]] skills, but I teach everything else that you need. So, if you know how to open your workbooks and to create formulas, you should be ready for this course. Next, you'll need to have some information about how your business operates. You're going to be summarizing information about a business or other organization, so the more you know, the better you can work. Also, I encourage you and, in fact, am directing you to make your own design decisions. I have kept formatting minimal in this course, one, because it's an individual decision, and second, I'm not very good at it. I hire designers whenever I need anything done visually, and if you're good at it, terrific. If not, keep it simple. Finally, I want to emphasize that this course is an overview. I mention [[Pivot Tables]] and also conditional formatting, but I don't go into any great depth. If you want to learn more, there are plenty of resources available in the online training library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), [[Pivot Tables]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up the Supporting Workbook

[↑ Back to Table of Contents](#table-of-contents)

#### [Manage data using Excel tables](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/manage-data-using-excel-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/manage-data-using-excel-tables?u=76281980&t=0)** - [Man] Your first step in creating a dashboard in [[Microsoft Excel]] should be to store your data in the most efficient and flexible manner possible. In [[Microsoft Excel|Excel]], that often means you should use Excel tables to summarize, store, and combine your data for use in [[Dashboards]] and other presentations. In this movie, I will demonstrate how to create and work with Excel tables. My sample file is 01_01_ExcelTable and you can find it in the chapter one folder of the exercise files collection. In this workbook, I have a data list and it has several important properties, all of which you need for an Excel table. The first thing to know is that each row contains a discrete set of information about a particular entity that is summarized by the list. So for example, if you look at row number two, you'll see that it summarizes sales data for bath [[Microsoft Products|products]] in the month of January for the year 2020 that happens to be quarter number one. In other words, the first three months of the year, and sales were $939.69. Each row below that row gives a different piece of information. For example, in row three, we have the same month with sales, for gift baskets. So each row contains a complete set of facts and each of the columns contains one of those facts. So we have the year in column A, quarter in B, and so on. You don't really need to have column labels such as year end quarter to create an Excel table, but it is very helpful.
>
> **[1:33](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/manage-data-using-excel-tables?u=76281980&t=93)** If you don't have them, Excel will simply add its own, such as column one, column two, and you'll need to change it later. So it's best to put 'em in from the start. As I scroll down, you'll also notice that there are no blank lines. In other words, there are no gaps in this data list. And also that there's no extra data either to the right, below, or to the left. If you look to the left, you'll see the edge of the worksheet and all the cells to the right of my data list are also blank. And there was nothing below it, either. If there were data to the left, right, or below, then that data would be included in the table and it wouldn't make any sense. Right, so with all that in mind, let's go ahead and create our Excel table from this data list. I'll scroll back up to the top and I'll click any cell within the data list. And then on the home tab of the ribbon, I'll go to the styles group and click format as table. And from here, you can select a style. I'll just select light, which is at the top left, the create table dialogue box appears, and it asks where the data is and it has identified the proper range. You can see it outlined in the worksheet. And also the, my table has headers boxes checked. So that's good. I'll go ahead and click okay. And Excel has created my table, and displayed the table design contextual tab on the ribbon. One of the first things that I do when I create a table is change its name. If you look on the table design,
>
> **[3:06](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/manage-data-using-excel-tables?u=76281980&t=186)** contextual tab of the ribbon, all the way to the left, you will see that the table name box contains the name Table One. The next table that I create would be called Table Two and so on. That's accurate, but not informative. It doesn't tell me anything about the data. So in this case, I will click in the table name box and change it to monthly sales. With that change in place, if I refer to this table in a formula, I'll see that the table contains monthly sales which is much better than simply saying that it's table number one. There are other ways that you can work with a table on the table design tab. So I'll just click away to release the selection. For example, you can have table style options where you can have banded rows. Right now that box is checked. So you can see that we go gray, white, gray, white. If I were to clear banded rows, then everything is white and there's no banding. And if I check the box again, it comes back. And one other item that is very useful is the total row. So I'll go ahead and click to check that box. And at the bottom, a total row has been added. So this is part of the table, but it doesn't affect the data. And you can see that the total of all sales summarized in this table were $1.7 million plus a little. You can also summarize other table columns. So for example, if you wanted to calculate the number of rows, which given the data they have,
>
> **[4:40](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/manage-data-using-excel-tables?u=76281980&t=280)** is really the only sensible calculation you could create. You can click inside of the total row for another column, click the down arrow and select any of the functions that are displayed, or more functions to have a broader selection. So in this case, I'll click count, and I see that there are 72 rows, which makes sense. I have three categories and monthly data for two years. So 3 times 12 is 36, times 2 is 72. If I wanted to change the summary operation for sales, I could click that cell. Click its down arrow, and select another value. In this case I won't, because you've already seen me do it once. And that's it. Excel tables are very powerful on their own, but they're even more powerful when you combine them with [[Pivot Tables]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (9), [[Microsoft Excel]] (1), [[Dashboards]] (1), [[Microsoft Products|Products]] (1), [[Pivot Tables]] (1)
> **Analogies:** for example (4), such as (2)
> **CLI Commands:** find (1), make (1)
> **Versions:** 939.69 (1), 1.7 (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Definitions:** in other words (2)
> **Exercise Files:** exercise files (1)
> **Best Practices:** it's best to (1)

#### [Manage PivotTables and PivotCharts](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/manage-pivottables-and-pivotcharts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/manage-pivottables-and-pivotcharts?u=76281980&t=0)** - [Instructor] [[Microsoft Excel|Excel]] tables let you store and summarize your data in a flexible and efficient manner. You can greatly extend the capability of Excel tables by creating PivotTables and PivotCharts, which let you rearrange and summarize your data quickly. In this movie, I will show you how to create and work with PivotTables and also PivotCharts. My samples file is "01_02_CreatePivot," and you can find it in the chapter one folder of the exercise files collection. In this workbook, I have an Excel table that contains monthly sales data for three different categories, and I'd like to create both a PivotTable and a PivotChart. You can create both at the same time, but for this example, I will show you how to create a PivotTable and then create a PivotChart from that. To begin, click any cell in your Excel table, and then on the Insert tab of the ribbon, click the PivotTable down arrow, and click From Table/Range. So I have a PivotTable from a table or range. The table name is "MonthlySales," and that's the data that's selected in the worksheet. I want to add it on a new worksheet, and I am not going to add this data to the data model. The data model is a more advanced topic that's beyond the scope of this course. With that selection place, I'll go ahead and click OK. And my PivotTable has been created. From here, I can go over to the PivotTable Fields task pane, and I can add fields to the PivotTable itself.
>
> **[1:36](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/manage-pivottables-and-pivotcharts?u=76281980&t=96)** If you look down, you'll see we have four areas. We have Filters, which is used to apply a filter to a PivotTable without changing its layout, then Columns, Rows, and Values. And rather than explain, I'll just demonstrate what happens when we put a field in each of those places. So I'll start by putting the Year field in Rows, and you can see that I have a list of 2020 and 2021, which are the two years for which I have data. Below that, I will add Quarter. So I have a second level of organization. And then in the Columns area, I will drag Category. So there we have bath [[Microsoft Products|products]], gift basket, and olive oil. And then I'll drag Sales to the Values area. And you can see that we have summaries of total sales by quarter for each of our three product categories for the years 2020 and 2021. I will [[Zoom]] in a little bit by increasing the zoom level so it's easier to see all of the data. And I'll scroll down there. If I wanted to change the organization of the PivotTable, for example, if I wanted to limit my analysis to just years instead of quarters, I could drag the Quarter field back to the Fields list, and you can see that it's been taken away from the organization of the PivotTable. And if I wanted to drag it back down, I could. And I could also put Category below Year and Month,
>
> **[3:11](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/manage-pivottables-and-pivotcharts?u=76281980&t=191)** so I would have a single column of data. So if I drag Category below Month, and you can see a green line indicating where it will go when I drop it. So there I have January bath products for 2020, gift basket, olive oil, then move on to February, and so on. If I move down here and I drag Category above Month, then you'll see that I have bath products for the entire year of 2020, followed by the same for gift baskets, olive oil, and then repeating for 2021. In this case, I think it's better to have the category back in Columns. So I'll drag Category to the Columns area and scroll back up. And I still have months in place. So I will drag Month to the Field list. And now I have my data displayed only by year. You probably noticed that the values in the Values area are not formatted. If we go back to the original table, you'll see that we have accounting format here for the sales data, and that does not carry over to a PivotTable. If you want to apply formatting to the Values field, you can right-click any Value field cell, and then click Value Field Settings. Then in the bottom left, click Number Format, and here you can select the format that you want. I'll click Accounting again. Two decimal places, dollar sign is fine. Click OK. OK again.
>
> **[4:42](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/manage-pivottables-and-pivotcharts?u=76281980&t=282)** And the format has been applied. As you can see, PivotTables can summarize a lot of data in a very compact space. The same is true for a PivotChart. And if I want to create a PivotChart, I can click any cell on the PivotTable, then on the Insert tab, I can go to the Charts group and click the type of chart I want to create. In this case, I will go up to the Column or Bar Chart button, click that, then I'll click 2-D Column, and you can see that I have my summary. And again, it is broken down by category, for bath products, gift baskets, and olive oil. If I want to change the arrangement of the PivotChart, then I can simply make that change over in the PivotTable Fields task pane. I'll drag Category below Year. And you can see that I now have Year and Category as subsets. And just compare, if I drag Category back, you can see that I have a slightly different arrangement. As always, experiment with different configurations, and find the one that works best for your dashboard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4), [[Microsoft Products|Products]] (4), [[Zoom]] (2)
> **UI Navigation:** scroll down (1), right-click (1), select the (1), go to (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Summarize Excel table and PivotTable data](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/summarize-excel-table-and-pivottable-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/summarize-excel-table-and-pivottable-data?u=76281980&t=0)** - [Instructor] [[Pivot Tables]] let you reorganize your data dynamically, but you're not limited to just changing its arrangement. You can also select the summary operation to be used within the pivot table itself. In this movie, I will demonstrate how to make those changes. My sample file is 01_03_Summarize and you can find it in the chapter one folder of the exercise files collection. in this workbook, on sheet two, I have a pivot table that summarizes yearly sales data for three different categories of [[Microsoft Products|products]], bath products, gift baskets, and olive oil. The current summary operation that is used in the values area is sum, and you can see that bath products in 2020 accounted for almost $20,000 of sales. Same thing a little bit higher, in 2021 and similar values for gift baskets and olive oil. If I wanted to change the summary operation from sum to, for example, average, I could right-click any cell in the values area. And then in the shortcut menu that appears, point to Summarize Values By, and then click another. Let's say that I'll do average. And here I have average values for each of these data points. So I can see that average monthly sales, which is the lowest level that I have in my data set, for bath products is %1,651 and 93 cents. We have a similar value for the year 2021 and you can see the monthly totals or monthly averages for the other products for each year.
>
> **[1:36](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/summarize-excel-table-and-pivottable-data?u=76281980&t=96)** In this case, the grand total also represents an average. So the average of $1,651.93 and $1,664.49 is the value you see in cell D5, and the grand total for each year represents the average of all sales. So you can see that olive oil accounts for the vast majority of the sales, about 85 or 90%, but if you look at the average monthly sales and include every product category in it, you can see that the average per month is about $22,500 in 2020, and in 2021, the value is slightly higher. So that is how you can change the summary operation from sum to average, I'll go ahead and change it back. So I'll right-click any data cell, point to Summarize Values By, and go back to sum. You can also look for a percentage change within a particular row or a column. Again, I will right-click any cell in the values area, and I will click value field settings. And then in the value field settings dialogue box, I will click the Show Values As tab and then to select the calculation next to Show Values As, I will click its list box's down arrow and doing so displays a list of all of the calculations that I can perform. So I can have the percentage of the grand total, which would take the sum, in this case, of all sales across both years in all categories,
>
> **[3:10](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/summarize-excel-table-and-pivottable-data?u=76281980&t=190)** and give me the percentage for each cell including total cells within my pivot table. You can also, so do percentage of column total, percentage of row total, and other changes that I won't get into here. Let's say that I want to summarize my data as percentage of column total. So I'll go ahead and click that and click Okay. And I can see here that my earlier estimate appears to be correct. So I have bath products for 2020, accounting for 2.44% of all sales for that column, gift baskets are up around eight and a half percent, and olive oil is right around 89, and we see similar values for 2021. And most importantly, if we look down in the grand total row, we'll see that each column, including the grand total, adds up to 100%. That means that the calculation is being performed accurately. If you need to make your pivot table fit within a small space, you can always get rid of grand totals if you're just interested in the individual values. So for example, if I click any cell in the body of the pivot table, then go up to Design, and then in the Layout group at the left end of the ribbon tab, I can turn off grand totals by clicking the grand totals button and then clicking Off for rows and columns. And I'm down to just my individual values. You can also do the same thing for subtitles by clicking the Subtitles button
>
> **[4:43](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/summarize-excel-table-and-pivottable-data?u=76281980&t=283)** and selecting the option you want, but in this case, I don't have any changes to make so I'll just go back to the worksheet and continue with my analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (6), [[Pivot Tables]] (1)
> **UI Navigation:** right-click (3), select the (2)
> **CLI Commands:** make (3), find (1)
> **Versions:** 651.93 (1), 664.49 (1), 2.44 (1)
> **Cross-References:** go back to (2)
> **Analogies:** for example (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)

#### [Filter Excel table and PivotTable data](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/filter-excel-table-and-pivottable-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/filter-excel-table-and-pivottable-data?u=76281980&t=0)** - [Instructor] The art of creating a dashboard is in determining which data to include and which to exclude. [[Microsoft Excel|Excel]] lets you focus the data shown in a worksheet by creating different types of filters and also sorting your data. In this movie, I will show you how to create several different types of filters, sort your data, and finally create the very useful top 10 filter. My sample file is 0104 filter and you can find it in the chapter one folder of the exercise files collection. I've started on a sheet one of this workbook and that has the Excel table that I used to create my pivot table. I don't normally use Excel tables in a dashboard simply because they take up too much space. However, if you want to include a filtered table that could make sense. And let's see what that might look like. In my Excel table, I have monthly sales data for three different product categories. Let's say that I want to only see data for the olive oil category. To create that filter, I'll make sure that any cell within the pivot table is selected and then click the filter arrow next to, in this case, the category column header. So I'll click there and you see that I can sort and I can also define a filter. In this case I will filter so I only see olive oil. So I'll clear the select all checkbox then check the olive oil box, click okay. And you can see that I am down to only olive oil within this particular table.
>
> **[1:35](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/filter-excel-table-and-pivottable-data?u=76281980&t=95)** I can create filters for other columns. So for example, if I go to quarter and click its filter arrow I can select the quarter or quarters that I want. In this case I'll clear select all and just do quarter number two, click okay. And you can see that I have my data for 2020 and 2021. And this is just about small enough to fit in a dashboard. When I'm done with the filters, I can press Control + Z to undo them which I just did to get rid of the filter for quarter. You can also go back to the filter arrow for a column that has a filter applied, click it. Click clear filter from whatever the name of the column is and that will remove the filter for of that column. And in this case, it was the last one. Now I'll switch over to my pivot table and show you how to create filters there. So I will switch to sheet two and here I have my data again summarized by year and by quarter but I haven't broken it down by category. So let's say that I only want to see sales for quarters with $250,000 or more. To do that, I can click any cell on the pivot table and then I want to filter by quarter. So I will go to the row labels, header button and click its filter arrow. And at the top, because I have multiple fields in the rows area, I need to select my field. So instead of year, I'll click the down arrow and click quarter.
>
> **[3:08](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/filter-excel-table-and-pivottable-data?u=76281980&t=188)** And then I want to filter on the values in the sum of sales column or area. So I'll point to value filters and click greater than or equal to. Now I'm filtering by quarter which you can see here in parentheses. Sum of sales greater than or equal to. So then in the value box, I'll type 250,000 and click okay. And when I do, I see that I have two quarters turns out it was quarter four in both 2020 and 2021, that meet that filter criteria. I'll go ahead and press Control + Z, to undo the filter. Now see what happens when I add month to the rows area. I will drag month to the rows area underneath quarter. And when I do you see something very interesting happen. Instead of the month names being in chronological order. So for example, January, February, March, they're in alphabetical order. So for example in quarter number two, we have April, June and May. So May and June are an alphabetical order, but are reversed. So the question is, if you run into this type of situation how do you sort based on month name? To do that you need to use a built in custom list to create your sort. So I will click in cell A6, and then I'll go to row labels, click its filter arrow. And I do want to sort based on month and I'll click more sort options.
>
> **[4:42](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/filter-excel-table-and-pivottable-data?u=76281980&t=282)** In the sort by month dialogue box, I will select the descending A to Z by month option. Then I'll click more options and clear the sort automatically every time the report is updated check box. And now I can set my first key sort order. Currently it says no calculation, but if you click this list box's down arrow, you'll see that you have a numbers built in list. And I'll click the third one which is January, February March, the three letter abbreviations. Click okay. Click okay again. And you can see that my data is now sorted appropriately. So you can have the three letter abbreviations for each of the months or you can have the month names spelled out completely. Finally, I want to demonstrate how to create a top 10 filter. To make it easier to see more of the data, I will remove quarter by dragging it back to the field list. So let's say that I want to see the top six months of sales for 2020 and 2021. To create that filter, I will again go to the row labels header, click its filter arrow, and then I want to filter based on value and then I'll click top 10. So I have top 10 filter by month based on sum of sales, I do want the top values, you can also do the bottom. And I will scroll down to see the top six items, you could also go by per percent or sum, click okay.
>
> **[6:19](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/filter-excel-table-and-pivottable-data?u=76281980&t=379)** And I have the top six for each of my two years. So I have 2020 and 2021. And if I only wanted to see sales for 2020, I could go back to the row labels header click it's filter arrow, and then change the field to year. And I'm interested in 2020, so I'll clear the 2021 check box, click okay. And I only have the values for 2020. I'm sure you can see how filters and sorting are important to you and the decision makers you support. Filtering your data effectively, means that you can filter focus on exactly what's important.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4)
> **UI Navigation:** go to (4), select the (2), checkbox (1), switch to (1), scroll down (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** for example (3)
> **Cross-References:** go back to (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Define conditional formats](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/define-conditional-formats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/define-conditional-formats?u=76281980&t=0)** - [Instructor] When you analyze and summarize business data, it's not always easy to tell how one value compares to another, or how a value compares to a benchmark. In this movie, I will show you how to create conditional formats that change the appearance of data based on value comparisons that you define within a worksheet. My sample file is 01 05 conditional, and you can find it in the chapter one folder of the exercise files collection. In this workbook, I have sales data for three different product categories. You can see those in column C. They're broken down by year for 2020 and 2021. And then I have the sales data in column D and the sales goal in column E. And what I'd like to do for this dashboard application is to use a color format to identify values that have met or exceeded the goal. I'll start by selecting cell [[D3.js|D3]], and then on the Home tab of the ribbon, I'll go to the Styles group, click the Conditional Formatting button, and I will point to Highlight Cells Rules, and let's say that I want to identify a cell with values greater than the goal. So, I'll click Greater Than, and format cells that are greater than a particular goal, and in this case, I'll just type it in directly. So, that's 20,000, and you can see in the background that when the value to compare against was 2,000, the format was applied, but when I make it 20,000, the rule is not. Now, I'm not going to finish applying this rule
>
> **[1:36](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/define-conditional-formats?u=76281980&t=96)** because I only have the option for greater than when what I want is greater than or equal to. So, I will click Cancel, although I could click Okay if I wanted to continue. And instead, I will define a rule in a slightly different way. So, with D3 still selected I will go to Conditional Formatting again, and then I will click New Rule. In the New Formatting Rule dialogue box, I'll go to onto the bottom item in the Select a Rule Type panel, which is use a formula to determine which cells to format. So, I'll click there. Then in the Format values where this formula is true box, I will click to ensure the insertion point is there, and then I'll type in my comparison formula. And I will drag the dialogue box a bit to the right so you can see the worksheet behind it. In [[Microsoft Excel|Excel]], all formulas start with an equal sign, even here, so I'll type equal. And what we're doing is comparing the values in D3 and E3. So I'll type D3, and we're asking if it is greater than or equal to the value in E3. So I'll type that in. Note that I have used relative references so these can change when I copy the conditional format to other cells. So, I have no format set so far. So, I'll click Format. I've worked in the Format Cells dialogue box earlier, so I open up on the Fill tab. You might open up on Font. In either case, make sure Fill is displayed and then click a square.
>
> **[3:09](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/define-conditional-formats?u=76281980&t=189)** I'll click this medium green and click Okay, and click Okay again. And you can see the rule has not been applied on D3 because the value is less than the goal in E3. If I were to change the goal in E3 to 18,000 then the rule would be applied. I'll undo that change by pressing Control + Z. To copy the conditional format I just created to another cell, I'll click cell D3, and then on the Home tab of the ribbon in the Clipboard group, I'll click the Format Painter. And then you can see that my mouse pointer changes to a white cross with a paintbrush, and when I click cell D4, the conditional format and actually all the other formats from that other cell is applied, and I have have a green background because sales are greater than the goal. And I can do the same thing copying the formula from D4 down to D5. And from D5, if I click the Format Painter and drag over cells D7 through D9, you can see that the format has been applied correctly, and I'm looking at only one cell in 2021 where the sales goal was met. Although the others are close. Conditional formats are great ways to provide more information about values that appear in your [[Dashboards]]. Don't use too much color because it can be overwhelming, but using the right amount can be very informative.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[D3.js|D3]] (6), [[Microsoft Excel|Excel]] (1), [[Dashboards]] (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (2)
> **Exercise Files:** exercise files (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Define an icon set conditional format](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/define-an-icon-set-conditional-format?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/define-an-icon-set-conditional-format?u=76281980&t=0)** - [Instructor] Conditional formats let you control the formatting that is applied to a cell based on that cell's value. In this movie, I will show you how to create a specific kind of conditional format that's very popular in [[Dashboards]], and those are icon sets. My sample file is 01 06 icon sets, and you can find it in the chapter one folder of exercise files collection. In this workbook, I have growth data for product categories for the years 2020 and 2021. So in column B you can see the years, in C, the product categories, and then in column D, the growth. The cells to which I want to apply my rules are in column D. So, I will select cells [[D3.js|D3]] through D5, and then I'll hold down the Control key, and select cells D7 through D9. On the Mac, I would use the Command key to make this type of selection. With those cells selected, I'll go to the Home tab of the ribbon, which I already have displayed. Then in the Styles group, I'll click the Conditional Formatting button, and I could click a group from the Icon Sets fly out, but I actually find it easier to go through the Manage Rules dialogue box. So I'll go down to the bottom of the button list. Click Manage Rules and there we are. I want to create a rule for the currently selected cells. So that's fine, and I'll click the New Rule button. With Format all cells based on their values selected, I'll go down to the Edit the Rule Description panel,
>
> **[1:35](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/define-an-icon-set-conditional-format?u=76281980&t=95)** and then click the Format Style list box's down arrow, and here I'll click Icon Sets. And you can see here that I have Icon Sets and I can choose the style and also the settings. So I'll drag the New Formatting Rule dialogue box to the side. And the first thing I'll do is select the new icon set. So I will click the down arrow next to Icon Style, and the one that I prefer to use, and this is the most common, is the three traffic lights rimmed. If the users of your dashboard have low color vision, then you might want to use an icon set that combines shapes or fills in addition to changes in color. It can make it easier to distinguish. In this case, I'll go with the most popular. So, three traffic lights rimmed, and now I can identify rules which are based on the values in my cells. Green is traditionally used for the best value. So, I'll leave the icons in the original order. And for any value that is greater than 0.2, or 20%, I will want to display green. So, I will go over to the green row, the top row, of the icons, and I'll change the type from percent to number. And I do understand this is a little confusing because the values in the worksheet are expressed as percentages, but what I'm doing is using them as numbers. So, 20% is equivalent to 0.2.
>
> **[3:08](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/define-an-icon-set-conditional-format?u=76281980&t=188)** If I created a rule based on percent then I would have green for the top, say, 1/3 of the values above 67%. Then for yellow, I would have between 67 and 33% based on the range of values. And that's not what I want in this case. I want to have absolute comparisons. Another thing to note is that you always want to change the type first, because if you change the value and then you change the type, as you can see, changing the type, changes the value. In this case, to zero, and that's not what you want. So, with all that in mind, our value will be 0.2, and then for yellow I'll click the Type down arrow and click Number. And for that, let's say that we want to have 12%. So, 0.12. Good. So, we have 0.2 and 0.12. Anything below 0.12, or 12%, will be red. And when I click Okay, and okay, again, you can see that the rules have been applied. So, the two items above 20% are in green. Between 20 and 12, we have yellow, and then one value below 12 is displayed with a red icon. Icon sets are extremely popular in dashboarding. You'll especially run into them if you use key performance indicators, or KPIs, in your company. And now that you know what they are, you can add them to your dashboards too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (2), [[D3.js|D3]] (1)
> **Versions:** 0.2 (4), 0.12 (3)
> **CLI Commands:** find (2), make (2)
> **UI Navigation:** go to (1), select the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Streamline charts for dashboards](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/streamline-charts-for-dashboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/streamline-charts-for-dashboards?u=76281980&t=0)** - [Instructor] Human beings can easily comprehend and compare a couple of values at a time, but comparing multiple numbers can be difficult. Creating charts, which are visual representations of data, makes it easier to compare values quickly and identify overall trends that can be investigated in more depth. In this movie, I will show you how to work with charts in the context of an [[Microsoft Excel|Excel]] dashboard. My sample file is 01_07_Chart and you can find it in the Chapter 1 folder of the Exercise Files collection. In this workbook, I have monthly sales data in an Excel table, and you can see that I have it for the months of January through November, and that is intentional. We'll add December later. I have time-based data, so I should probably create something like a line chart, which is perfect for showing values as they move over time. So I'll make sure I have any cell within the Excel table selected. Then I'll go to the Insert tab of the ribbon, and then in the Charts group I will click the Insert Line or Area Chart button, and I'll just click the basic 2-D Line chart type at the top. There I have my chart, and probably the first thing you notice is that it is large. It takes up most of the screen space. I can always resize it by dragging one of the handles. If I drag a corner handle then it'll change both its horizontal and vertical size. So I will drag down from the corner to resize it, and you can see that's already a little bit better,
>
> **[1:32](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/streamline-charts-for-dashboards?u=76281980&t=92)** except that it would take up a large part of the screen on a dashboard, and I try to keep everything on one window without scrolling. So if I make it smaller then that's a little bit better, although it's still taking up a lot of space. That's not too bad, but there are ways we can make it even better. The first is to get rid of the chart title. We already know that we're looking at sales data, so if I want to get rid of a chart element I make sure the chart is selected, click the Chart Elements button to the right, and then I see that Chart Title is checked so I'll clear that check box, and there we have it. I have a little bit more detail in the graph. I can also change the font size. So if I right click, in this case I'll do the vertical axis, and then click Font, the font dialogue box appears and I can change the text size, color, and so on. In this case, all I want to do is change the size, so clicking the spin button takes it down 1/10 of a point. So I will just type in 6 and click OK. So there we have six point, that looks great, and I'll do the same thing for the horizontal axis. So I'll right click that, click Font, and I'll take the size down to six. Click OK, and there we go. Now, when I resize the chart, you can see that we are taking up a lot less room and it is still reasonably easy to read. I'm actually pretty happy
>
> **[3:07](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/streamline-charts-for-dashboards?u=76281980&t=187)** with the chart that I have here right now. I have made it small enough so that I only have the axes 100,000 and 50,000 with no intermediate grid lines. Now, earlier, I mentioned that I like to use Excel tables for charts, and that's because if you add a new row to the Excel table, it's added to the chart the next time the worksheet is recalculated. So I will drag the chart back up so we can see it a little more easily, and then I'll click cell B12, press Tab, and I'm going to add another row to the chart, or rather to the Excel table that provides the values for the chart. So in A13 I'll type Dec, which is the three-letter abbreviation for December. You can see it's been added, and I'll put in sales of $111,342.50, and I'll press Enter. And when I scroll back up, you can see that the chart has had the new December data added. And as you can see, because the month labels are displayed vertically, the chart didn't have to increase in size. So this, as it turns out, is a pretty good size for the chart and it can probably fit on most [[Dashboards]]. And if not, you can use the techniques that I just showed you to make sure that it does fit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (6), [[Dashboards]] (1)
> **CLI Commands:** make (5), find (1)
> **Env Vars:** b12 (1), a13 (1)
> **Versions:** 342.50 (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Create sparklines](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/create-sparklines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/create-sparklines?u=76281980&t=0)** - [Instructor] You can use standard [[Microsoft Excel]] charts to summarize large data collections quickly. However, you might not always want to summarize a huge range of data, or have your chart take up a lot of space in your dashboard. In this movie, I will show you how to create sparklines, which are [[Microsoft Word|word]] sized charts that fit within a single worksheet cell, and were made popular recently by designer Edward Tufty. I will work with the data in sample file 0108sparkline, and you can find it in the chapter one folder of the exercise files collection. In this workbook, I have a table that shows monthly sales data. You can see the sales data in column B, and then we'll use that data in B for the first two sparkline types. And then finally, we will compare the actual sales versus the goals in column C, generating a result in column D. And we'll use that result to create what's called a win/loss sparkline. We'll start, however, by creating a line sparkline, which is essentially a small line chart. So I'll click in cell F2. And then, on the Insert tab of the ribbon, I'll go to the sparklines group and click Line. And I'll select my data range, making sure that the insertion point is flashing in the data range box. And I'll select cells B2 through B13. I don't want to select any labels or any other data. And click OK.
>
> **[1:32](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/create-sparklines?u=76281980&t=92)** And there you see the sparkline. So I have the line itself, and it shows the general trend of the data. I can create a similar type of sparkline called a column sparkline. So I'll go ahead and click in cell G2, go back to Insert. And this time, in the sparklines group, I'll click Column. My location range is already G2, so I can select my data range. And again, for this, that will be B2 through B13. Looks good, click OK. And there you see the call column chart. Normally, I would use a column sparkline for a column data, as opposed to time series data. I like lines better for time data, but it works just as well in this case. Finally, there is a win/loss sparkline, and this is actually win/loss or tie. If you look at the data in column D, you'll that we have positive numbers where sales exceeded the goal, negative numbers where sales were lower than the goal, and then also, for July in cell D8, you see that there's a zero, and that's where sales exactly met its goal. It's unlikely, but I wanted to include it as an example, so you see what happens. To create the win/loss sparkline, I'll click cell H2, go back to Insert, and then under sparklines, click Win/Loss. Location range is H2, and the data range is the result, again, with the positive, negative, and zero values on D2 to D13. Okay, and there it is.
>
> **[3:09](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/create-sparklines?u=76281980&t=189)** And by just a quick word of explanation, all of the blue markers above the middle line indicate a win. The red markers below the center line represent a loss. And you have this gap here representing July, which is where the value was exactly zero. So it's a tie. If you want to format a sparkline, you can click the cell that contains it, and then go to the sparkline contextual tab of the ribbon. You see that you can select different styles. You can change the color of different elements. You can also indicate different types of points. So for example, with the line sparkline in F2, I could indicate the high point with a marker. I could also indicate the low point, and you see the other check marks available. In most cases, you probably won't need to do that. So I will go ahead and clear those check boxes, so that we have the original line. Sparklines are great for saving space and summarizing data in a dashboard. You don't get all the details that you get with a regular size chart, but they make up for it in the space that you save.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Microsoft Excel]] (1)
> **Env Vars:** b13 (2), d13 (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)


### 2. Creating a Dashboard Worksheet

[↑ Back to Table of Contents](#table-of-contents)

#### [Create and manage cell links](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/create-and-manage-cell-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/create-and-manage-cell-links?u=76281980&t=0)** - [Instructor] Dashboard summarized data from other worksheets and often other workbooks. In this movie, I will show you how to create formulas that include links to cells in other workbooks and also other worksheets within the active workbook. I will also demonstrate how to create a hyperlink to allow users to go to specific destinations on the web. My sample that I'll start with is 02_01_Links and you can find that in the chapter two folder of the exercise files collection. I also have a second file open and I'll use Alt + Tab to switch to it. And it is warehouse data, which you should also open and you can find in the exercise files folder as well. So I'll press Alt + Tab to go back and I'm on the elements worksheet of 02_01_Links. In cell B3, I want to create a link to a cell that summarizes gift basket revenue. And I happen to have that in a table on the support table's worksheet of the 02_01_Links workbook. So I will click the elements sheet tab again to go back. And then in cell B3, I'll type in equal sign. So now I'm entering the formula and I can create a link to a cell on a separate worksheet by clicking that worksheets tab. So support tables, and you can see the name of the worksheet appears in the formula bar. And the cell I want to use is at the bottom right corner of the table. And that's the grand total for the sales column. To start I'll click another cell in that same column.
>
> **[1:33](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/create-and-manage-cell-links?u=76281980&t=93)** So F2. And then to move down, I'll press Control + down arrow. And this moves me to the last cell in this column that contains the data. And you can also note that the reference in the formula bar has changed. So it points to gift basket sales, which is the name of the table, and then the total row in the sales column. That looks good. So I'll go ahead and press Enter. And the value of 67,701 appears in cell B3. You can do the same thing to create a link to a cell and another workbook. So here I will click cell B6, type an equal sign, and now I will go back to the warehouse expenses workbook. So I'll Alt + Tab to go there. And this time I'll just click cell B14 directly and you can see that the formula bar now contains the address of this cell. Because we're in a different workbook, we have the workbook name at the start in square brackets followed by the name of the worksheet and then in the exclamation mark followed by the name of the table and again, totals row and the expense column. So that looks good. I'll press Enter. And there I have my link. You do need to manage links to external workbooks. So I'll show you how to do that now before I create the hyperlink. I'll click in cell B6 and then on the data tab of the ribbon, I'll go to the queries and connections group and click edit links.
>
> **[3:07](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/create-and-manage-cell-links?u=76281980&t=187)** The edit links dialogue box appears, and you see that I have a link to warehousedata.xlxs. That's the one that I just created. I have the location of the file. And also at the bottom, I have automatic updating and manual updating. You're not always able to change from automatic to manual updating. However, if you can, and it takes a long time to load, or if you're getting network errors, then do switch to manual. And that will let you keep the value that is currently in the worksheet instead of getting delays from trying to update. Over on the right side of edit links, you have update values which you can use if your data changers frequently. For example, if rows are added to a table. You can edit by changing the source. You can open the source workbook and in this is already open so we don't need to do that. You can break the link to the cell in the other workbook and that will leave you with just the current value but it won't update anymore. And finally, you can click check status. You see the currently status is unknown. If you click check status, then you see we have update level A and status that the source is open. That indicates that everything is ready to go. And if you want, you can look at the other workbook because it's currently active. In this case, I don't need to change anything else so I'll click close and continue working. My final task is to create a link to a website.
>
> **[4:42](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/create-and-manage-cell-links?u=76281980&t=282)** You can also use the same technique to create links to other files or even locations within this workbook. But in this case, I'll just focus on what I think is a very common use. I want to create the link in cell B8, which currently has the text [[LinkedIn]] Learning site. Then I will go to the insert tab. And then in the links group, I'll click the main body of the link button. And that displays the insert hyperlink dialogue box. Over on the left, you have a number of different destinations to which you can link. You can link to an existing file or webpage, a place in this document. You can also create a new document or set an email address. Clicking an email address link will open your email program with a message and that can be assigned an address and also a subject line which of course can be changed. In this case though, I do want to link to an existing file or webpage and the address box, I'll type the address for LinkedIn Learning.
>
> **[5:54](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/create-and-manage-cell-links?u=76281980&t=354)** There we go, [linkedin.com/learning](https://linkedin.com/learning). Click OK. And you can see that the cell text appears as a hyperlink, which I will click. And my web browser opens to LinkedIn Learning. And from here I can sign in or if I were already signed in I could start looking for courses. Links to external data are useful as are links within the workbook and links to resources available on the World Wide Web.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (4)
> **UI Navigation:** go to (3), switch to (2), open the (1)
> **CLI Commands:** find (2)
> **Exercise Files:** exercise files (2)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Env Vars:** b14 (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### [Link cell contents to a shape](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/link-cell-contents-to-a-shape?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/link-cell-contents-to-a-shape?u=76281980&t=0)** - [Instructor] Creating links to data in other cells is a great way to create summaries on a dashboard. However, you can also create links between cells and images or shapes. Doing so gives you control over how the information appears in your dashboard, and also lets you move it on the dashboard without having to update your formulas that appear in the worksheet cells. In this movie, I will show you how to create a link between a data cell and a shape. My sample file is 02_02_LinkToShape, and you can find that in the chapter two folder of the exercise files collection. I have two worksheets in this workbook, and I've started building a Dashboard. So you can see, I have revenue for gift basket cell in B3, and also warehouse expenses in cell B6. And then on the SupportTables worksheet, and I'll click this tab now. You see that I have gift basket revenue, and it's broken down by month for the year 2021. And my total is in cell E16. My goal is to create a shape that has my daily average sales for gift baskets. So I'm going to divide the number in E16 by 365, which is the number of days in the year 2021. However, you probably also noted that in cell G1, I have a label that say daily average sales. So to look ahead, the formula that I'm going to create at first will generate an error, but then we'll be able to fix it by adding a formula in cell G2.
>
> **[1:34](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/link-cell-contents-to-a-shape?u=76281980&t=94)** So let me show you what goes wrong, and then I'll show you how to do it correctly. So I'll go back to my dashboard. And I want to add a shape, so I'll go to the insert tab, and then I'll click illustrations. And this group will probably be expanded on your computer, but on my monitor it's not. So illustrations, I'll click shapes, and I will use just a standard rectangle, which I will draw on the body of the worksheet. I'll change its formatting by going to shape styles, click the more button, and I'll select the basic format at the top left. Now with the shape still selected, I will type = and I can start creating a formula. So I'll go to SupportTables, and the cell that I want to use is E16. And I will divide that value by 365, number of days in the year, press enter, and there is my error. This formula is missing a range reference or a defined name. And nothing to do but click OK, so I will. And the reason we got this error is because you can't refer to a table with this kind of formula. So instead, what I need to do first is we press escape, and that gets rid of the formula being edited. And I will go back to the SupportTables worksheet, and I'll scroll up to G2 type in =. And now I will click the total cell that I had before, and divide by 365, again as I did before.
>
> **[3:11](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/link-cell-contents-to-a-shape?u=76281980&t=191)** So now and sell G2, I have the value $185.48. And that will appear in the shape once I link to cell G2. So go back to the Dashboard worksheet, ensure that the shape is selected. Click in the formula bar, type =. Go to SupportTables, click G2, enter. And there is my value. Now I can format the shape. So for example, I currently have the text at the top left, and I can change both of those elements to center them. So I'll go to the home tab of the ribbon, again, with the shape selected. And I'll click middle align, and that is the vertical alignment, and then center, which centers the value within the shape. I'll make it bold so it's easier to read, and then I will resize the shape so that it takes up as little room as possible. And obviously, if you decrease the font size, you can make the shape even smaller. I'd also like to add a label so I'm going to create a new shape. So I'll just click away for a moment. Insert, illustrations, shapes, and I'll create another rectangle. And I will draw it above the shape I created before. And I'll click a style to use, in this case, because I have black and white, I'll do a black background with white text. And then with the shape still selected, I will type AVG Daily Revenue, and I'll need to resize the shapes so the text appears,
>
> **[4:55](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/link-cell-contents-to-a-shape?u=76281980&t=295)** and I'll drag it over to the side. I'm trying to make the text small enough so that it all fits on one line. So I'll click home and there we go. I've decreased the size of the text enough. And again, I will center and align middle. Move up and then I will leave the label where it is, and I will control click the shape below it to select both. Then on the shape format contextual tab, I'm going to do two things. The first is I'm going to align them center so that their middles are in the exact same place. Oh, I already gotten it pretty close. So we have a little bit of movement there, but not much. And I will also group them so that I can move them together. So I'll click group and then click group again. And you can see that there's a single outline. And when I drag them, I'm not dragging them separately, I'm dragging them together so I can move that item anywhere I want on my Dashboard. And if I want to edit the text, I can click inside of that shape and edit it normally. And when I'm done, just click away.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (4), select the (1), scroll up (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** e16 (3), avg (1)
> **Cross-References:** go back to (3)
> **Versions:** 185.48 (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Use PivotTable data in a formula](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/use-pivottable-data-in-a-formula?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/use-pivottable-data-in-a-formula?u=76281980&t=0)** - [Instructor] One of the benefits of summarizing data using a pivot table is that you can refer to a pivot table cell such as a subtotal or grand total in your dashboard. That way you get all the benefits of a pivot table with the compact data display of a dashboard. In this movie, I will show you how to link to a pivot table cell and also a cool trick that lets you display the data that you want from a pivot table by changing the value in one cell. My sample file is 0203 link to pivot and you can find it in the Chapter 2 folder of the exercise files collection. This workbook contains four worksheets and I'm already on dashboard where I've started creating a dashboard to summarize category revenue. On the pivot table worksheet I have a pivot table. And then on the data sheet, I have the data from which I created the pivot table. And you can see that I have three different categories, bath [[Microsoft Products|products]], gift basket, and olive oil. And then on my helper table's worksheet I currently just have one, and it is named categories, And it has a list of the categories from my data table. Now I'll switch back to dashboard and create a link to the pivot table. In the cell B3, I want to summarize gift basket revenue. So I will start first by clicking the cell which I'd already done, type in equal sign, and then will go to the pivot table worksheet and gift basket revenue, the grand total is in F6. And you can see that a very long get pivot data function
>
> **[1:33](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/use-pivottable-data-in-a-formula?u=76281980&t=93)** appears in the formula bar. The reason it's so long is that it needs to specify a lot of information about the pivot table and where this particular formula is pointing. As you read through, you can see different parts of the pivot table, but what I want to focus on is this bit at the far right, that says gift basket, so that is the category that we're looking at. Right, everything is good, I'll go ahead and press enter. And you can see we get our revenue in cell B3. Now I'll show you how to use a similar formula but one that allows you to change the category from within your dashboard. I'm going to start by creating a [[Data Validation]] list in cell C6, so I'll click there. And then on the data tab of the ribbon, I'll go to the data tools group and click the data valid button. And the dialogue box that appears on the settings tab. I'll click the allow boxes down the arrow and click list. Now in the source box, I could either type the values individually, separated by a comma or if I have them in my worksheet, I can select the list. So I will click the collapse dialogue button, click helper tables, and select cells, A2 through A4, expand the dialogue, and then make sure that I have an in cell dropdown check mark that will give a down arrow beside the cell, click okay, and there it is. And you see next to cell C6, I have a dropdown arrow and I can select any one of these three values.
>
> **[3:11](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/use-pivottable-data-in-a-formula?u=76281980&t=191)** I'll go ahead and select gift basket because we already have that value above and we can verify that it's working. Now, I will copy the formula from B3 down to B6. So B3, control C, or command C on a Mac in cell B6 and then control or command V. There we go. And I'll press enter. There we go. And now I can edit this formula so that it will take the value that is currently in cell C6. So I'll click cell B6 again. And then on the formula bar, I'm going to start editing with the text that says gift basket. So I'll go there. And what I need to do is replace gift basket with the cell address for cell C6. I'm working with text, so I need to type a double quote then an ampersand which is the concatenation operator, then C6 which is the cell address, another ampersand, and then we need to add in another double quote, so [[Microsoft Excel|Excel]] understands that the right bracket is also part of a longer text string. And don't worry if you don't get this right on the first try it had been a while since I had implemented this technique in a worksheet and it took me three tries. So be patient, you'll get it right. Everything's good, I'll press enter. And there we have the value of $67, 701 for gift basket. And if I click cell C6, click the down arrow and change to bath products, then I get an update.
>
> **[4:48](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/use-pivottable-data-in-a-formula?u=76281980&t=288)** Do the same thing for olive oil. And I get updated for that value. Including pivot table data in a dashboard using the get pivot data function is a powerful technique. When you combine it with the data validation list and formula edit that I showed it'll give you even more flexibility and it'll allow you to discover more information about your business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Data Validation]] (2), [[Microsoft Excel|Excel]] (1)
> **UI Navigation:** go to (2), dropdown (2), select the (1)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Extend your dashboard using hidden rows](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/extend-your-dashboard-using-hidden-rows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/extend-your-dashboard-using-hidden-rows?u=76281980&t=0)** - [Instructor] Dashboard summarized data in a compact format. You should avoid the temptations to display too many items on a dashboard, but there will be times when you want to make certain information available even if it's not shown all the time. You can do so by hiding or grouping worksheet rows that contains some of the details displayed in the dashboard. I will show you how to enable users to show or high detail rows in this movie. My sample file is 0204 hidden. And you can find it in the chapter two folder of the exercise files collection. In this workbook, I have the start of a dashboard that summarizes category sales. And then I have a color scheme that shows yellow for good performance, green for excellent performance. And if I had anything less than good, it would be displayed with red indicating that there is a problem. And you can see the rules that I use. What constitutes excellent or good performance in rows eight through 11. This is good information to know but it doesn't have to be displayed all the time in the dashboard. What you can do is add controls that allow users to either show or hide detail. I want to work with rows eight through 11 so I will select them. Then on the data tab of the ribbon I'll go to the outline button. This will probably be a fully expanded group on your screen. Click there, then click the main body of the group button. And you can see that I have a control
>
> **[1:32](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/extend-your-dashboard-using-hidden-rows?u=76281980&t=92)** over on the left side of the screen that allows me to show or hide detail. The hide detail button looks like a minus sign, so I'll click that. And you see that I have rows eight through 11 hidden. However, there is an indicator that there is more detail to be had. So I'll click the show detail button and the rows come back. Now, of course, we are trading a little bit of space on the left side of the screen in exchange for the controls to show our hide detail, but because most screens are wider than they are tall, and also because I'm working with a fairly small resolution, you should have space and I think it's a useful trade off. If you want to add or insert a row above the information that you're hiding, you can right click a row header and click insert and you now have an extra row to put in your information. You can also change the [[Zoom]] level. And when you're ready just go back down and hide the details. And you now have more room to work in the main body of your dashboard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1), is an  (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Hide gridlines and set zoom levels](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/hide-gridlines-and-set-zoom-levels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/hide-gridlines-and-set-zoom-levels?u=76281980&t=0)** - [Instructor] When you create a worksheet in [[Microsoft Excel|Excel]] it comes with a standard [[Zoom]] level which refers to the general size of objects on the screen. Excel also shows grid lines which mark boundaries between cells by default. If you want to change the amount of information displayed on a worksheet at a time or turn grid lines on or off, you can do so quickly. I will demonstrate using 0205 grid lines and this is an Excel workbook you can find in the chapter two folder of the exercise files collection. On my dashboard worksheet, I have the start of a dashboard that summarizes sales for two categories, bath [[Microsoft Products|products]] and gift basket. I'm at the standard zoom level which you can see at the bottom right hand corner. It's current only 100%. And if I want to change the zoom level then I can click the zoom in button at the bottom right and you can see the information on the screen is larger and easier to read. If I want to hide the rows that I have here for sales criteria, I can click the high detail button and I have a little more room. So I'll go up and probably 140% is about right. And in fact, I could put more information in the bottom left corner of this worksheet. If it turns out that I do want to display that other information, I can show the detail and you see that I scrolled down or if I wanted, I could decrease the zoom level. So it all is displayed. If you want, you can also create a plain background without grid lines. This can help if you have a lot of items such as charts that have their own borders
>
> **[1:34](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/hide-gridlines-and-set-zoom-levels?u=76281980&t=94)** on your dashboard worksheet. And so it reduces the visual clutter. To turn off the grid lines, go to the view tab on the ribbon and then in the show group, uncheck grid lines. And you can see that you now have a plain white background. I usually turn off grid lines on any dashboard worksheet but that's a design choice that you can make.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (5), [[Microsoft Excel|Excel]] (3), [[Microsoft Products|Products]] (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** refers to (1), is an  (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-creating-a-basic-dashboard-2022/next-steps?u=76281980&t=0)** - [Instructor] Thanks again for your interest in this course. Before I go, I'd like to give you the names of three books that you can read to get more information about creating [[Dashboards]], especially in [[Microsoft Excel|Excel]]. The first book is "Information Dashboard Design" by Stephen Few and is published by O'Reilly. This is not a book specifically about Excel, but it's a terrific resource for designing dashboards in any application. For Excel-based work, I highly recommend "[[Microsoft Excel]] Data Analysis and Business Modeling" by Wayne Winston. This book has gone through several additions and Dr. Winston is a terrific analyst. Even though Dr. Winston's book does not deal directly with creating dashboards, you can find all kinds of interesting analyses and summaries and apply them to your own work. And finally, there's a great book, and it came out in 2016, named "Good Charts" by Scott Berinato. It's published by Harvard Business Review Press, and it's used in a lot of business schools to teach people how to create information dashboards. I've read the book, and I think its design principles will translate very well to Microsoft Excel. Thanks again for your interest in the course, and I wish you luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (4), [[Microsoft Excel|Excel]] (3), [[Microsoft Excel]] (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Curt Frye]]

## Resources

- Exercise files available

## Skills Covered

- Microsoft Excel
- Excel Dashboards

## Path Context

### In [[Prepare for the Excel Expert - Microsoft Office Specialist Exam for M365 Apps (MO-211)]]
← [[Excel- PivotTables in Depth]] | **6 of 7** | [[Cert Prep- Excel Expert - Microsoft Office Specialist for Microsoft 365 Apps]] →

## Appears In

- [[Prepare for the Excel Expert - Microsoft Office Specialist Exam for M365 Apps (MO-211)]]

## Related Courses

_Courses sharing skills:_

- [[Excel- Power Query for Beginners]] — Microsoft Excel
- [[Excel- Filtering Data for Beginners]] — Microsoft Excel
- [[Excel- Tracking Data Easily and Efficiently]] — Microsoft Excel
- [[Excel for Business Analysts]] — Microsoft Excel
- [[Complete Guide to Excel Statistics with Copilot]] — Microsoft Excel

---

[↑ Back to top](#)