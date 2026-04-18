---
type: course
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
tags:
  - course
  - topic/data-science
  - skill/microsoft-power-bi
  - skill/data-modeling
  - skill/dax
status: not-started
created: 2026-04-17
---

# Power BI Data Modeling with DAX

> Power BI Desktop makes it easy to create basic data models. But if you need to report across time periods—for example, visualize year-over-year growth or compare sales or other data by month or quarter—you need Data Analysis Expressions (DAX). DAX is a language you can use to create formulas for Power BI that extend your data model. In this course, Gini von Courter covers the essentials of working

> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373) | 1h 22m | Intermediate | 56K learners

## Instructor

- [[Gini von Courter]]

## Resources

- Exercise files available

## Skills Covered

- Microsoft Power BI
- Data Modeling
- DAX

## Table of Contents

### Introduction

#### Build powerful data models with DAX
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/build-powerful-data-models-with-dax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/build-powerful-data-models-with-dax?u=76281980&t=0)** - [Narrator] DAX or Data Analysis Expressions is the language that's used to create formulas for Power BI that extend our data model.
>
> **[0:10](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/build-powerful-data-models-with-dax?u=76281980&t=10)** DAX gives us the ability to create additional information at runtime so that we can quickly and easily generate new information beyond the information that's in our model already.
>
> **[0:23](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/build-powerful-data-models-with-dax?u=76281980&t=23)** If you already know how to build data models in Power BI Desktop, DAX is a logical next step because there are things that we can do with DAX that we can't do as easily or at all without it.
>
> **[0:37](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/build-powerful-data-models-with-dax?u=76281980&t=37)** I'm Gini von Courter.
>
> **[0:39](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/build-powerful-data-models-with-dax?u=76281980&t=39)** I invite you to join me for this exploration of DAX in Power BI.

> [!info]- Semantic Content
>
> **Env Vars:** dax (5)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### What you'll need
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/what-you-ll-need?u=76281980)


### 1. Set Up the Data Model

#### Data modeling: The basics
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/data-modeling-the-basics?u=76281980)

#### Get data for your model
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/get-data-for-your-model?u=76281980)

#### Check relationships
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=0)** - [Instructor] This is the model, or as many people think of, the Relationships view in Power BI Desktop for the Contoso Sales sample.
>
> **[0:08](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=8)** Here, we see tables and the relationships between them, and there are a few things I'd like to point out to you here in this particular view.
>
> **[0:15](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=15)** First, we have a main table here.
>
> **[0:17](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=17)** This is the Sales sample, and so it's the Sales table.
>
> **[0:21](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=21)** The Sales table has information about sales in it.
>
> **[0:25](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=25)** It has columns like product, quantity, and price of the product.
>
> **[0:31](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=31)** This table is our fact table.
>
> **[0:33](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=33)** It's a data table.
>
> **[0:34](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=34)** The other tables are supporting tables.
>
> **[0:37](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=37)** They're called lookup tables.
>
> **[0:39](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=39)** And so if I want to know information about the store that something was purchased in, it'll be in the Stores table: the products, what category those products are in, that's out here on this branch.
>
> **[0:51](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=51)** When I add data into a model, several tables, for example, from SQL Server or any other data sources that are related, Power BI Desktop tends to lay them out like this, a star or a snowflake arrangement with our fact table, our main table in the center, and the lookup tables around it.
>
> **[1:09](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=69)** There is another equally valid way to lay these out, if you wish, and that is to lay them out with the lookup tables on the top.
>
> **[1:18](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=78)** And then below them, the other tables, and really the fact table alone at the bottom.
>
> **[1:25](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=85)** So each of these lookup tables at the top,
>
> **[1:33](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=93)** make sure you're dragging the tables by the top.
>
> **[1:35](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=95)** If I look at a particular table, I can find the lookups tables related to that above it.
>
> **[1:40](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=100)** Hopefully, one of these two methods seems intuitive to you.
>
> **[1:43](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=103)** It might depend on whether you were working previously with relational databases.
>
> **[1:48](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=108)** That usually will mean you'll favor the star layout, or if you've mostly worked with files from a more flat file world, or people who have worked with SharePoint, I think, often say that they like this because they understand how lookups work in SharePoint.
>
> **[2:01](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=121)** And there's also this sort of built in mnemonic, right?
>
> **[2:03](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=123)** You look up to find the lookups.
>
> **[2:06](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=126)** In addition to arranging the tables in some way that is comfortable for you as the modeler and for other modelers, you can look at the specific relationships between the tables.
>
> **[2:16](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=136)** Double-click on the Relationship icon or on the line between the tables, and you'll see that we have two tables that are related: Sales and the Calendar.
>
> **[2:26](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=146)** And Sales to Calendar is many-to-one.
>
> **[2:31](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=151)** For every single date event in the calendar, there could be many sales in the Sales table, so sales to calendar, many-to-one.
>
> **[2:39](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=159)** If you need to modify this relationship or remove a relationship, this is the place to do it, and you'll remove a relationship if it shouldn't be there.
>
> **[2:48](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=168)** You've added a table to the model that's not related, but has columns with the same name as another table, and therefore there's a relationship that gets created that's not correct.
>
> **[2:59](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-relationships?u=76281980&t=179)** Before you begin transforming your data, shaping your data using DAX with your data, make sure that your relationships between the tables in your data model are correct and are arranged in a way that's going to work.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (2)
> **Env Vars:** sql (1), dax (1)
> **Code Keywords:** this, (1)
> **UI Navigation:** double-click (1)
> **Analogies:** for example (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [instructor] (1)

#### Save your data model
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/save-your-data-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/save-your-data-model?u=76281980&t=0)** - [Instructor] When we downloaded this file, we simply extracted it from the archive and therefore, it is actually read-only because we can't write back to this archive from here.
>
> **[0:10](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/save-your-data-model?u=76281980&t=10)** So this is a good time to save our PBIX file.
>
> **[0:15](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/save-your-data-model?u=76281980&t=15)** And all you need to do to do that is choose File and Save.
>
> **[0:20](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/save-your-data-model?u=76281980&t=20)** And you'll see the file name, Contoso Sales Sample for Power BI Desktop, and you can put this wherever you wish.
>
> **[0:27](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/save-your-data-model?u=76281980&t=27)** I'm going to leave this in my Documents folder, but for now, you could save this anywhere you wish to save it.
>
> **[0:34](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/save-your-data-model?u=76281980&t=34)** Click Save.
>
> **[0:37](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/save-your-data-model?u=76281980&t=37)** And at this point, the title should no longer say read-only because this saved copy of the file is now editable, saveable.

> [!info]- Semantic Content
>
> **Env Vars:** pbix (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. DAX Aggregate Functions

#### Create a measure with SUM
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/create-a-measure-with-sum?u=76281980)

#### Understanding DAX syntax
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understanding-dax-syntax?u=76281980)

#### Display the measure in a matrix
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/display-the-measure-in-a-matrix?u=76281980)

#### Format a measure
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/format-a-measure?u=76281980)

#### Create measures with COUNT functions
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/create-measures-with-count-functions?u=76281980)

#### Delete or edit a measure
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/delete-or-edit-a-measure?u=76281980)

#### Check your data with COUNTBLANK
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/check-your-data-with-countblank?u=76281980)

#### Create a measure with DISTINCTCOUNT
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/create-a-measure-with-distinctcount?u=76281980)


### 3. Measures and Calculated Columns

#### Add a calculated column
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/add-a-calculated-column?u=76281980)

#### Understand explicit and implicit measures
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=0)** - [Instructor] Let me show you another alternative to the measure that we created called Total Sales.
>
> **[0:07](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=7)** I'm going to recreate this visualization.
>
> **[0:09](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=9)** I'm going to start by choosing manufacturer.
>
> **[0:12](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=12)** There it is, and scroll down.
>
> **[0:15](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=15)** And then, what I want to do is, I'm going to simply choose sales amount, and I'm going to drag and drop it in here.
>
> **[0:22](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=22)** And if you notice, this looks amazingly like Total Sales.
>
> **[0:28](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=28)** I have the same value, few more decimal places.
>
> **[0:32](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=32)** And since some recent changes to Power BI, I can even rename this.
>
> **[0:36](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=36)** I can rename this sales amount, so it says Total Sales, and it will look just like this.
>
> **[0:45](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=45)** I can give this a little bit more space.
>
> **[0:48](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=48)** But this renaming like any other formatting I do is actually for this instance of Total Sales, formerly the summarization of sales amount in this particular visualization.
>
> **[1:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=60)** Watch what happens. I'm going to remove this.
>
> **[1:03](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=63)** Sales amount isn't here anymore and I select to put it back.
>
> **[1:08](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=68)** It's once again labeled sales amount, and any other formatting changes that I had made to this column of data are gone.
>
> **[1:17](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=77)** It's totally temporary.
>
> **[1:19](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=79)** This is what you call an implicit measure.
>
> **[1:22](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=82)** It's a measure that's created on the fly simply by adding particular values into a visualization, but it's not the same as having a measure that I can format and reuse.
>
> **[1:34](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=94)** And there's another important difference.
>
> **[1:37](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=97)** When I'm creating a new measure, I can refer to existing measures in that measure because they are explicit.
>
> **[1:45](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=105)** They exist here separately listed as measures in my tables, in my data model.
>
> **[1:52](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=112)** I can't, however, call up these implicit measures that are created simply by using a column of data in a visualization.
>
> **[2:01](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=121)** If the only thing that you need to do is check some values, sort of do a status check as you are working in Power BI, then this type of an implicit measure is great.
>
> **[2:12](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/understand-explicit-v-implicit-measures?u=76281980&t=132)** But if over and over again, I want to be able to use Total Sales and have it formatted in a particular way and have it have the same meaning every time I use it, then I want to create an explicit measure as we've been doing thus far.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (3), let (1)
> **UI Navigation:** scroll down (1), drag and drop (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Create a measure with operators
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/create-a-measure-with-operators?u=76281980)

#### Create a measure with DIVIDE
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/create-a-measure-with-divide?u=76281980)

#### Iterators and row context: SUMX
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/iterators-and-row-context-sumx?u=76281980)

#### Basic DAX date and time functions
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/basic-dax-date-and-time-functions?u=76281980)


### 4. DAX Logical and Filter Functions

#### Use FIND
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-find?u=76281980)

#### Use IF
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-if?u=76281980)

#### Use OR to handle case sensitivity
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=0)** - [Narrator] We have a calculated column in our data model that uses find to determine the position of the word mouse within a product name and then uses if to place the word mouse in our calculated column if there is indeed, a mouse in the product name.
>
> **[0:19](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=19)** The problem when you're using find is that find is case sensitive, and there are two different ways you can deal with that.
>
> **[0:28](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=28)** You could either convert for the purpose of comparison, the string to either upper or lower case, and do the same with the text that's in the product name.
>
> **[0:40](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=40)** That's one option is a text conversion to upper or lowercase for both of the items that we're comparing.
>
> **[0:48](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=48)** The other possibility is if we know something about our product names and we know that they are usually either lowercase or our proper case but never uppercase, then we really only have two choices.
>
> **[1:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=60)** We could look for capital M mouse and all lowercase mouse.
>
> **[1:05](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=65)** If either of those is found, then it will meet our conditions and so we're going to add yet another logical function, the function or to our calculated column/ Before we find, we're going to insert or and open our parentheses.
>
> **[1:21](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=81)** And then our first logical test is whether we find uppercase mouse in the product name and if so, if that's greater than zero.
>
> **[1:31](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=91)** So all of this right here is our very first logical expression in the or statement.
>
> **[1:39](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=99)** I'm going to copy that.
>
> **[1:40](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=100)** Now, I'm going to click and notice in my help, I notice that I'm in Logical2.
>
> **[1:45](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=105)** I'm going to paste this in and I'm simply going to change one thing about it.
>
> **[1:49](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=109)** I'm going to change the uppercase M to a lowercase M.
>
> **[1:53](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=113)** So I have this long or statement and that or statement actually ends right here at the end of Logical2.
>
> **[2:02](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=122)** And I'm going to close the parentheses on my or statement.
>
> **[2:06](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=126)** I know that worked because now I'm being kicked back to my if statement and I need one more thing here.
>
> **[2:11](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=131)** I need to put a comma so it knows that mouse, which comes next, is my result, if true.
>
> **[2:17](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=137)** What I've done then is or to look at this piece of it.
>
> **[2:23](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=143)** Our or function says either find upper or lowercase mouse.
>
> **[2:27](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=147)** But unlike Excel, where I'm dealing with specific cell addresses and saying, "Look in this cell address and see if it's this or this," here in DAX in Power BI, it's a lot more verbose.
>
> **[2:41](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=161)** I'm not simply saying, "Look."
>
> **[2:44](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=164)** I'm not simply saying, "Find proper case mouse or lowercase mouse."
>
> **[2:48](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=168)** I have to say, "Find mouse in the product table, in product name, column and look starting in the first character of the product name and then return a result."
>
> **[3:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=180)** And I have to do that twice.
>
> **[3:01](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-or-to-handle-case-sensitivity?u=76281980&t=181)** So this is much longer than it would look if I were in Excel and yet it's still going to work, whether mouse is upper or lowercase by using or, I will have the appropriate result in my calculated column.

> [!info]- Semantic Content
>
> **CLI Commands:** find (8)
> **Code Keywords:** function (3), case, (1), this, (1)
> **Env Vars:** dax (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Use CALCULATE to create a simple filter
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-calculate-to-create-a-simple-filter?u=76281980)

#### Use SWITCH
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/use-switch?u=76281980)


### 5. Using DAX Time-Intelligence Functions

#### DAX time-intelligence functions
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=0)** - [Instructor] Power BI includes built-in time intelligence functions.
>
> **[0:05](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=5)** Time intelligence functions are used to be able to manipulate data using time periods, to filter results based on a particular time period, and to build calculations to compare results from one period to another.
>
> **[0:20](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=20)** For example, one quarter to another, one year to another.
>
> **[0:24](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=24)** There are some requirements to use the time intelligence functions.
>
> **[0:29](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=29)** First, you have to be using a standard calendar.
>
> **[0:34](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=34)** Many people will say the kind of calendar that hangs on your wall, January through December, and you have to have, in your model, a calendar table that includes all the dates in the period that you want to analyze.
>
> **[0:47](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=47)** We have a table like that in our dataset.
>
> **[0:52](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=52)** Sometimes people will create a table that's just their working days. That's not good enough.
>
> **[0:57](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=57)** You can't skip weekends or holidays in this table.
>
> **[1:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=60)** It has to account for every single date.
>
> **[1:03](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=63)** So in a regular year, you'll have 365 rows within that table. Then a leap year, 366.
>
> **[1:11](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=71)** The only exception in a way is if you start your data set in the middle of a year.
>
> **[1:15](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=75)** If you go into business starting on September 1st, your first year will need only start with September 1st because you won't have data before that time.
>
> **[1:24](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=84)** There are more than 30 time intelligence functions and they work in groups.
>
> **[1:29](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=89)** The first set actually returns a table full of dates from your calendar or date table.
>
> **[1:37](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=97)** Dates year to date, for example, will return a table with all the dates to the current date for that year.
>
> **[1:44](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=104)** There are two similar functions: quarter to date, DATESQTD, for quarter to date and DATESMTD, or month to date.
>
> **[1:54](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=114)** Next, we have next year or next quarter month or day, which returns a table of all of the dates in that time period.
>
> **[2:04](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=124)** Previous year or quarter or month or day is similar.
>
> **[2:08](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=128)** It returns, again, a table with all of the dates in the previous year, the previous quarter, and so on.
>
> **[2:15](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=135)** Same period last year takes the current period, whatever it is.
>
> **[2:21](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=141)** If your context is this month, it will go find those same dates back a year.
>
> **[2:28](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=148)** So same period last year returns a table of dates backed up a year from your current context.
>
> **[2:34](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=154)** The next set of functions return specific dates.
>
> **[2:37](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=157)** What is the date for the start of the year?
>
> **[2:39](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=159)** There's also start of month and start of quarter.
>
> **[2:42](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=162)** Similarly, end of year, end of month, end of quarter dates.
>
> **[2:48](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=168)** Opening balance, which can be for year, month, or quarter finds the first date of that period.
>
> **[2:56](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=176)** So opening balance year is used to find the opening balance on the first date of the year.
>
> **[3:02](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=182)** Closing balance is the same.
>
> **[3:05](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=185)** Total year to date and its companion functions, total quarter to date and month to date are used to evaluate the value of the expression in your function for the dates that fall in that year, quarter, or month.
>
> **[3:19](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=199)** Microsoft provides abundant help on the syntax and uses of all of these functions.
>
> **[3:25](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/dax-time-intelligence-functions?u=76281980&t=205)** The important thing is that you know that they exist, and we'll use a couple of them in the movies that follow.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Env Vars:** datesqtd (1), datesmtd (1)
> **Analogies:** for example (2)
> **Code Keywords:** function (1)
> **Speakers:** - [instructor] (1)

#### Summarize year-to-date information with DATESYTD
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/summarize-year-to-date-with-datesytd?u=76281980)

#### Visualize cumulative YTD data
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/visualize-cumulative-ytd-data?u=76281980)

#### Compare totals with SAMEPERIODLASTYEAR
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=0)** - [Instructor] Year-over-year sales are used frequently to view the performance of an organization.
>
> **[0:06](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=6)** This is how we did this year.
>
> **[0:07](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=7)** How did we do the year before?
>
> **[0:09](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=9)** So let's see how we use same period last year to be able to create a new measure that will give us that information, which we can then add to our matrix.
>
> **[0:24](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=24)** We already have a measure for total sales, so that's easy for us to use.
>
> **[0:28](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=28)** And, in fact, we're using it here.
>
> **[0:30](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=30)** I'm going to remove sales year to date so that all we have are our monthly sales.
>
> **[0:36](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=36)** And in this case, the year is 2011.
>
> **[0:39](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=39)** I'm going to actually change this to 2012 because we didn't start business until 2011, so we don't have any 2010 sales.
>
> **[0:48](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=48)** If we looked at our previous year's sales, it would be a big, flat nothing.
>
> **[0:53](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=53)** And let's begin by creating, then, a new measure.
>
> **[0:59](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=59)** And the new measure that we want to create is our total sales last year, LY.
>
> **[1:09](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=69)** And that is equal to.
>
> **[1:11](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=71)** And we're going to use our general CALCULATE here, this very, very powerful function that we learned earlier.
>
> **[1:17](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=77)** And we're going to base this on the total sales measure we already have.
>
> **[1:21](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=81)** So you begin typing, and measures, of course, show up here as measures.
>
> **[1:26](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=86)** So this is total sales.
>
> **[1:28](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=88)** Calculate total sales.
>
> **[1:30](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=90)** But what we want to do with total sales is now throw this same period last year function in to return a set of dates that match up to these dates, but in the prior year.
>
> **[1:45](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=105)** There's one more argument that is needed here, and only one argument, and that argument is our date column, which, in our case, is called DateKey.
>
> **[1:54](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=114)** And we'll just close this.
>
> **[1:57](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=117)** And we've now created total sales for last year.
>
> **[2:00](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=120)** I'm going to check this to add it.
>
> **[2:03](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=123)** And here are my sales for this year and my total sales for the prior year.
>
> **[2:08](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=128)** If I wanted to filter this, for example, by quarter or by month, I could do so, and I would only receive results from the same quarter or same month in the prior year.
>
> **[2:20](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=140)** This is sweet.
>
> **[2:21](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=141)** And from here, I might choose to create some additional measures that would, for example, show me the percentage of growth or perhaps lack of growth between this year and the last year.
>
> **[2:32](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/compare-totals-with-sameperiodlastyear?u=76281980&t=152)** But remember that, although there's only one function, same period last year, you can use it not just for year, but for quarters and for months, as well.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (2), case, (2), throw (1), this. (1)
> **Analogies:** for example (2)
> **Env Vars:** calculate (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/power-bi-data-modeling-with-dax-26160373/next-steps?u=76281980)


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
