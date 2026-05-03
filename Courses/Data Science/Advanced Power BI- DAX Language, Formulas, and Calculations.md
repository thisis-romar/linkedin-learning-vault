---
type: course
cssclasses:
  - lle-course
slug: advanced-power-bi-dax-language-formulas-and-calculations-30982476
url: "https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476"
duration_minutes: 128
duration: 2h 8m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHnNg5EA08s6g/learning-public-crop_675_1200/B56ZwAWLKGHQAY-/0/1769532339395?e=2147483647&amp;v=beta&amp;t=U-rR08UzMmxG8yCW8uRtxCoeQl86tg5hIYtO5afuyKM"
linkedin_topic: Data Science
learning_paths:
  - '[[Explore a Career as a Power BI Specialist]]'
prev_courses:
  - '[[Complete Guide to Power BI for Data Analysts by Microsoft Press]]'
next_courses:
  - '[[Power BI Data Dashboards]]'
path_nav: '[{"path":"Explore a Career as a Power BI Specialist","position":3,"total":5,"prev":"Complete Guide to Power BI for Data Analysts by Microsoft Press","next":"Power BI Data Dashboards"}]'
path_count: 1
tags:
  - course
  - topic/data-science
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Advanced%20Power%20BI-%20DAX%20Language%2C%20Formulas%2C%20and%20Calculations.md)

![Advanced Power BI: DAX Language, Formulas, and Calculations](https://media.licdn.com/dms/image/v2/D560DAQHnNg5EA08s6g/learning-public-crop_675_1200/B56ZwAWLKGHQAY-/0/1769532339395?e=2147483647&amp;v=beta&amp;t=U-rR08UzMmxG8yCW8uRtxCoeQl86tg5hIYtO5afuyKM)

# Advanced Power BI: DAX Language, Formulas, and Calculations

> In this advanced course, expert Helen Wall deep dives into Power BI DAX. Learn sophisticated measure creation using functions like CALCULATE, ALL, FILTER, and DATEADD, focusing on time intelligence for trend analysis. Develop skills in constructing semantic models, connecting data sources, and implementing dynamic measures with variables and conditional logic. Discover efficient organization using

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476) | 2h 8m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Explore advanced features of Power BI](#explore-advanced-features-of-power-bi)
- [**1. DAX Overview**](#1-dax-overview) (5 videos)
  - [DAX intro](#dax-intro)
  - [Variables](#variables)
  - [GENERATESERIES](#generateseries)
  - [GENERATE and ROW](#generate-and-row)
  - [Measure groups and folders](#measure-groups-and-folders)
- [**2. Measures**](#2-measures) (7 videos)
  - [DAX measures](#dax-measures)
  - [X functions](#x-functions)
  - [POWER DAX function](#power-dax-function)
  - [Parameter harvesting formulas](#parameter-harvesting-formulas)
  - [Filtering and evaluating measures](#filtering-and-evaluating-measures)
  - [CALCULATE DAX function including filters](#calculate-dax-function-including-filters)
  - [SELECTEDVALUE](#selectedvalue)
- [**3. Time Intelligence**](#3-time-intelligence) (10 videos)
  - [CALENDAR and CALENDARAUTO](#calendar-and-calendarauto)
  - [FIRSTDATE and LASTDATE](#firstdate-and-lastdate)
  - [START or END period](#start-or-end-period)
  - [DATEADD](#dateadd)
  - [PARALLELPERIOD](#parallelperiod)
  - [Dates period to date](#dates-period-to-date)
  - [DATEBETWEEN](#datebetween)
  - [PREVIOUS or NEXT period](#previous-or-next-period)
  - [EOMONTH and EDATE](#eomonth-and-edate)
  - [DATEDIFF DAX function](#datediff-dax-function)
- [**4. Advanced DAX**](#4-advanced-dax) (7 videos)
  - [ALL and ALLSELECTED DAX function](#all-and-allselected-dax-function)
  - [FILTER DAX function](#filter-dax-function)
  - [BLANK and ISBLANK DAX functions](#blank-and-isblank-dax-functions)
  - [IF](#if)
  - [DIVIDE DAX function](#divide-dax-function)
  - [SWITCH](#switch)
  - [Filtering between disconnected tables](#filtering-between-disconnected-tables)
- [**5. Advanced DAX Calculations**](#5-advanced-dax-calculations) (4 videos)
  - [TMDL View](#tmdl-view)
  - [Field parameters](#field-parameters)
  - [Calculation groups](#calculation-groups)
  - [User-defined functions](#user-defined-functions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps and additional resources](#next-steps-and-additional-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore advanced features of Power BI](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/explore-advanced-features-of-power-bi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/explore-advanced-features-of-power-bi?u=76281980&t=0)** Do you want to spend more time analyzing data than cleaning it? We can build efficient [[Microsoft Power BI|Power BI]] data models that streamline analytics, ask what-if questions, and enable better insights into data trends. This course is what I wish I knew about semantic modeling and [[DAX]] formulas in Power BI when I started applying [[Data Modeling]] to real-world problems myself. Let's begin!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (2), [[DAX]] (1)
> **Env Vars:** dax (1)


### 1. DAX Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [DAX intro](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/dax-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/dax-intro?u=76281980&t=0)** [[DAX]] is a formula language that lets us build expressions for tables, columns, and, the magic of [[Microsoft Power BI|Power BI]], measures. We can create these formulas using DAX syntax and functions. You can see a comprehensive overview of all these functions in the [[Microsoft]] documentation. You'll recognize many of them if you work a lot in [[Microsoft Excel|Excel]]. We can choose the Enter Data option to input data tables directly into Power BI. We can create calculated tables directly with DAX formulas. Let's create a table in the Modeling tab. We'll create a loan duration table with a single column with two rows containing the values 15 years and 30 years in quotations using curly braces to construct the table and separating the rows with commas. Navigating to the Data view, we can see directly what the new calculated table looks like. Now let's create a calculated table with multiple columns. We can again use curly braces to construct a calculated table with nested parentheses within it to create columns. We'll first use the curly brace syntax to create a table expression with the values 1, 3, and 5. To add multiple columns, we need to add parentheses within the commas that separate each row into separate columns. Let's add another column with the values 2, 4, and 6. We can add a calculated column to this calculated table or any other Power BI table through
>
> **[1:35](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/dax-intro?u=76281980&t=95)** the modeling options or directly within the Selected Tables menu options. Let's add a new column that we'll set equal to the classic programming first words of Hello World. Then, we'll add another calculated column called Value 3 that adds the existing Value and value two columns together. The sigma notation icon next to this new column denotes that it's a calculated numeric column, while our previous calculated text column displays an fx icon next to the new column name. Now, let's add a DAX measure to our data table. We'll name it present value, and we can set it equal to the constant value of 100.
>
> **[2:20](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/dax-intro?u=76281980&t=140)** We can also set these measure formulas equal to a DAX function like pi. Notice these new measures display with a calculator icon to distinguish it from the other model fields. Unlike fields that are columns, we don't see the results appear directly in our new table. Instead, we need to navigate back to the report view and add this new measure field to a visual. Slashes create scalar values as their output, which we can then use in other functions as scalar inputs to create measure, table, or column outputs. If we want to add notes or comment out code within a DAX formula, we can add double forward slashes before the section that we want to comment out. We can recognize this commented out code because it will all display as green text within the formula.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (6), [[Microsoft Power BI|Power bi]] (3), [[Microsoft]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** dax (6)
> **Definitions:** is a  (1)

#### [Variables](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/variables?u=76281980&t=0)** We can use variables in [[DAX]] formulas to streamline and reuse our calculated steps and to better structure and document our formulas. We use the var keyword to create variable names that we set equal to DAX expressions. We can have as many of these named variables as we would like. These are local variables that we can only access within that DAX formula. At the end of the formula, we use the required return keyword to calculate the final return expression result. Let's explore how we can use variables to streamline existing DAX formulas. We have a table called data already in our model. Within our formula bar, after the section data equals, we'll hold down the shift and enter keys at the same time to move our [[Cursor]] to the start of the next line. We'll then make the existing calculated table a variable using the var syntax to assign it to the variable name table. We see a red squiggle appear within our new variable expression, which indicates there's a problem with the naming convention. We can't use reserved keywords like table as our variable names. Unlike DAX formula names, we can't have spaces in them either. Let's add the prefix initial followed by an underscore to our variable table name. Once we create a variable, we can use it in other variables within the formula or in the returned end expression. To do the latter, let's add a return keyword to the end of the formula followed
>
> **[1:36](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/variables?u=76281980&t=96)** by the local initial table variable that we just created. Notice how when we start typing in this variable name, we see it appears in the IntelliSense drop-down menu options with a variable icon, X, next to it. We'll then hit the Tab key to select it. This returns the same resulting table that we started with. Within the formula, the var and return keywords display in a blue font while the local variable names are teal. Now let's add the value3 column as the final table result by nesting the initial table variable inside the addColumns function. IntelliSense gives prompts for DAX function inputs as we build our formula. We then need to assign a name to this new column after the initial table, like value3. We'll then assign the expression results for this column so it equals the value1 plus the value 2 column added together. Notice this is calling the value 1 and value 2 columns from our initial table and not other outputs in our model. We can continue adding column names and their respective expressions as input parameter pairs. Within a DAX formula, our local variables don't have to calculate the same output type as our final returned expression either. For example, we can add another variable called pi val and
>
> **[3:15](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/variables?u=76281980&t=195)** we'll set it equal to the pi expression or we can set it equal to a measure in our model. Let's then add a column called pi that will set equal to the scalar expression of our new variable. We can also use variables to return a measure expression. Let's create a local table variable with the values 1, 2, and 3. Now we can return a count of the table rows as a measure using the countRows function on our table vals in the formula.
>
> **[3:57](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/variables?u=76281980&t=237)** Using variables makes our The formula is more efficient and easier to read, especially as we start to build out more complex calculations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (7)
> **Env Vars:** dax (7)
> **Code Identifiers:** addcolumns (1), countrows (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)

#### [GENERATESERIES](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/generateseries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/generateseries?u=76281980&t=0)** If we want to efficiently create calculated tables, it's helpful to tap into specific [[DAX]] table manipulation functions. Generate Series allows us to create a single column table of equidistant values where we specify the starting and ending values, including the interval between them. Let's add a new calculated table that we'll call Loan Period. We'll set the formula expression equal to the generateSeries function. To create these contiguous values, we'll input the two required parameters and one optional parameter into the function. Our required parameters are the start and end values. For a fixed rate on a 30-year mortgage loan, payments are monthly, so we'll want to set up our loan period series so it goes to 360, which equals 30 years multiplied by 12 months per year. Let's start the series at 1 and end it at 360. By default, generate series intervals use 1 as the increment between the individual row values, but we can change that to 2 with the optional third parameter. Because we're going to use 360 monthly periods in our financial model for loans, let's change this third parameter back to 1 and keep it in the formula as a reference. Lastly, we can see the field added in this new table has the name value in its only column.
>
> **[1:32](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/generateseries?u=76281980&t=92)** To make this name more descriptive and useful in future calculations, let's click directly into the field name to change it to loan period instead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** generateseries (1)
> **Env Vars:** dax (1)

#### [GENERATE and ROW](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/generate-and-row?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/generate-and-row?u=76281980&t=0)** The Cartesian product is a set theory concept in mathematics that we can also apply to [[Data Modeling]]. Let's say that we have a table with two sets, denoted as Set A and Set B. The Cartesian product of these two sets is the resulting set of ordered pairs that we get from all possible pairing combinations of both sets. Let's create a new calculated table called LoanDates. We'll define the columns to go in the final Cartesian product using the row function. This calculates a table with a single row and one or more columns. We can theoretically add as many columns as we would like, but each column requires a pair of two input parameters, the name and the expression that we set it equal to. Let's call our new column date and we'll set it equal to January 1st, 2026 using the date function. Let's first confirm this returns a table with a single row with a single date column. The month of the date function doesn't have to be between 1 and 12 either. Let's make it 800 instead. We get a date that's many years into the future. Now let's expand this expression across multiple rows in the calculated table. Let's comment out the existing row expression for now within the formula. Let's then use generateSeries() to create a single column of discrete contiguous values
>
> **[1:31](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/generate-and-row?u=76281980&t=91)** between 1 and 800. Once we confirm this table result, let's use the generate() function to create a single table representing the Cartesian product of two separate tables within the same [[DAX]] expression. The first function input parameter is the rows for the output table and the second function input parameter is for the columns. We'll use the generate series expression to create the rows and we'll uncomment the row expression representing the columns.
>
> **[2:17](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/generate-and-row?u=76281980&t=137)** We see the updated table returns two columns, value and date, but all the date values in this table are the same because we calculated the row expression without a connection to the value column created from the Generate Series expression within the same formula. Let's update the row expression to use the value field from the first table created by the Generate Series function instead of a fixed monthly input. Our final calculated table uses Generate Series to create a single column table with the value field that the row function then adds the columns to. Creating these calculated tables can ultimately help our [[Microsoft Power BI|Power BI]] models become more dynamic, especially if these states can potentially change in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Modeling]] (1), [[DAX]] (1), [[Microsoft Power BI|Power bi]] (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** generateseries (1)
> **Env Vars:** dax (1)
> **Definitions:** is a  (1)

#### [Measure groups and folders](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/measure-groups-and-folders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/measure-groups-and-folders?u=76281980&t=0)** Let's explore a few ways to keep the model organized. I find it helpful to put all my measures into a measures group. Let's start by manually adding a new table by choosing to enter data. We'll rename this table Calculations, then load it into our model without entering any data. Notice how this new table has a different icon next to it than the other tables because as we imported it into the model instead of creating it as [[DAX]] calculated table. Your icon for the table might look slightly different than mine. Let's then move our existing present value measure in the data table by selecting it directly in the field list then navigating to the measure tools menu. We can change the home table for this measure to the calculations table instead by opening the drop-down menu for the Home Table options. To convert this into a Measures group directly, we'll remove the Column 1 field displayed by default in the table. This automatically updates the Calculations table icon into a Measures group. Even if yours looks slightly different, it serves the same purpose. If we have other measures, we'll repeat this process.
>
> **[1:28](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/measure-groups-and-folders?u=76281980&t=88)** We can also add new measures directly to this Measures group through the same menu options for adding a measure to any other table.
>
> **[1:42](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/measure-groups-and-folders?u=76281980&t=102)** We can also add folders to the field list to group similar fields or measures together, even within a Measures group. We'll create these folders in the model view. We'll choose the fields that we want to put into a folder by selecting them and holding down the control key to select multiple fields at the same time. We'll then add the folder name to the display folder input box. This moves all of the selected fields to the same new folder within the semantic model. We can repeat this process again for other fields or we can add them directly to the folder within the group.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** dax (1)


### 2. Measures

[↑ Back to Table of Contents](#table-of-contents)

#### [DAX measures](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/dax-measures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/dax-measures?u=76281980&t=0)** To best understand measures, we should first understand the difference between row context and filter context. We can think of row context as performing a calculation on each row of the data table. Filter context is much more abstract. One way to think of it is as summarizing summarized data. The measure results change depending on the dimensions present in the visual. Summarized visuals can have none, one, or more than one dimension. Dimensions are typically qualitative or categorical fields defining the level of aggregation by grouping and segmenting the data. This includes states or categories, but numbers can also be dimensions depending on how we configure them in our visuals. We can create measures with [[DAX]] aggregation functions like sum, average, count, max, or min. I find it helpful to build visuals with the desired dimensions in them, then add measures directly for testing. We have a table visual containing the mortgage data dates and a card visual. Let's add the interest rate field to both of them. By default, [[Microsoft Power BI|Power BI]] aggregates numerical fields as sums. It returns the same results for the rates by date because we only have one rate for each date. In the card visual, however, it returns an enormous, comically large amount. Let's change both aggregations to averages. Let's create a calculated column for the average interest rate to see how row
>
> **[1:37](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/dax-measures?u=76281980&t=97)** context works.
>
> **[1:48](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/dax-measures?u=76281980&t=108)** In the card visual we see that it returns the sum of all the rates. In the rates table, however, it returns the same rate for each date in the table. It calculates the average across all the rate values instead of the current rows like our aggregate of the same field because the column uses row context to determine these results. Now let's calculate the average rate using the same average aggregation on the rate field. We see in the table that it returns the same average result for the aggregate as it does for the measure because the filter context is the same. This occurs because the pivot coordinates for the interest rate are a single date for each rate. Measurers work by first filtering our data tables to determine the rows to calculate the result over. Once we change the filtering for the evaluation of the measure by the rows to the individual dates, DAX then calculates the average using those pivot coordinates instead. Let's duplicate our existing page. We'll then change the date field into a date hierarchy with just the year and month. The visual now displays the average for the month and the year of the pivot coordinates. Because the rates come out weekly, there are 4 to 5 measurements each month. The measure results calculate the average across all those rates within each given
>
> **[3:27](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/dax-measures?u=76281980&t=207)** month and year. If we convert the table to a matrix and put the month in the columns, we see how this changes the appearance of the pivot coordinates but not its results. Measures create scalar values as their outputs, which we can then use in other calculations. Let's divide our average rate measure by 100 to convert it into a decimal instead of a percentage. On the surface stack, syntax often looks straightforward, but that belies the much more complex logic behind it that we need to understand behind the scenes. So build measures piece by piece along the way to understand how they work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (2), [[Microsoft Power BI|Power bi]] (1)
> **Env Vars:** dax (2)
> **CLI Commands:** find (1)
> **Prerequisites:** configure (1)

#### [X functions](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/x-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/x-functions?u=76281980&t=0)** We can calculate aggregations natively over an entire data table using functions with an X suffix like SUMX, AVERAGEX, MAXX, MINX, and PRODUCTX. These X functions take two input parameters. The table it's performing the aggregation over, and the expression that we want to perform in each row. Let's first create an expression similar to the average interest rate calculation that we already have in our model. Let's create a new measure for the interest rate using the AVERAGEX function. We'll use the 30-year mortgage rates table as our first input parameter. In the second input parameter, let's use the rate field from the same table. We can reference a table field directly or another measure as the expression we want to calculate each row over. We can also modify the expression input to divide the rate by 100 so that we get a decimal instead of a percentage in our results.
>
> **[1:18](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/x-functions?u=76281980&t=78)** When we add this new measure to the visuals, we see it returns the same result as our average rate measure using the AVERAGE function. Now let's explore another example where we use SUMX with variables in a new sum of totals measure. To set up our formula, we'll first create a table values variable equal to one and two in the first row, two and one in the second row, and one and three in the third row. Now let's add all the values in the first column together using the SUM function in our return statement. We access the columns within this table variable by referring to the tags that the variable output creates. Until a sense, though, won't let us pick up value 1 or value 2 from our table variable. Instead, let's use SUMX in our return statement. Within the SUMX function, we'll refer to our table values variable in the first input parameter. Now let's reference the tags within this table by referring to the value one column within the second function parameter. Our expected result should be four, and we see our actual result matches this. Now let's multiply the values in each row for both columns together and add the row totals up in our return statement. We'll go back into our formula, this time we'll multiply value 1 by value 2, and these
>
> **[2:55](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/x-functions?u=76281980&t=175)** are referring to the column tags within the table of values variable within the formula. Our result should be 1 times 2 plus 2 times 1 plus 1 times 3, which equals a total of 7. We see our actual results confirm that this calculation works correctly. Analyzing the X functions can help us streamline our model calculations because they let us do intermediary calculations within a single measure. In turn, this means we can do more complex calculations with different filter context scenarios.

> [!info]- Semantic Content
>
> **Env Vars:** sumx (4), averagex (2), maxx (1), minx (1), productx (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)

#### [POWER DAX function](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/power-dax-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/power-dax-function?u=76281980&t=0)** Operations and tax formulas support standard arithmetic operators like addition, subtraction, multiplication, division, and exponentiation. Mortgage rates are annualized, which means if we make monthly payments, we need to calculate the monthly rate. Instead of the caret symbol, we can use the power function to make complicated exponentiation calculations more efficient and their syntax cleaner to write. This function takes two input parameters. The first is the base value, which we'll set to 1 plus the average rate measure. Its second input is the exponent that will raise the base value to. For a monthly rate, this is one twelfth.
>
> **[0:54](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/power-dax-function?u=76281980&t=54)** It currently returns a value greater than 1 because we're calculating an interest factor. To return the monthly rate, let's subtract 1 from this measure result. Let's increase the number of decimal places to see the exact calculated rate.
>
> **[1:15](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/power-dax-function?u=76281980&t=75)** We can add this measure to the loan period table visual, where it returns the same result for each row because the date dimension we're calculating the average rate over isn't in the visual as the pivot coordinates. Conversely, if we add it to our weekly interest rate table, we see the results change accordingly because the date field is in the filter context for evaluating this measure. We can then use this measure in other calculations. Let's use it to calculate the equal monthly loan payment amount using the PMT financial function. This gives us hints about this function's inputs, which are all scalar values like measures. We'll set the interest rate to the new monthly rate measure that returns the same results for each loan period, but different results for each date in the mortgage table. We'll then manually input 360 as the number of periods and the loan amount as 100,000. Let's also multiply the result by negative 1 so our payment results return positive amounts. We can see how the changing interest rates impact the payments. We also see, we add it to our loan period table, that each payment is equal. This is because we're evaluating the payment using the same interest rate
>
> **[2:54](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/power-dax-function?u=76281980&t=174)** measure input for each payment result. We see in this example how the power function lets us calculate measure components that we can then use as scalar value inputs in other formulas.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** pmt (1)

#### [Parameter harvesting formulas](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/parameter-harvesting-formulas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/parameter-harvesting-formulas?u=76281980&t=0)** Because a measure uses filter context logic to determine its results, we can't reference a row value for a dimension directly. To extract these labels as scalar values, we need to use an aggregation function like MAX on the Reference Dimension field. The Average Rate and Payment measures return the same result for each row in the Loan Period table because the Mortgage Rate Date field isn't a dimension in this summarized table. But what if we want to calculate other financial measures that change with each loan period? Let's calculate the interest first using the IPMT function using the same monthly interest rate as the payment. Let's skip the second parameter for now, but we'll set the total periods to 360 and the loan amount to 100,000. Now let's go back to the second input parameter to reference the current period. When we try to reference the loan field directly, we can't. This is because we haven't aggregated its results. Let's set this function parameter equal to 1 for now. We need a way to reference the loan period for each period in the table visual as a scalar value. Let's create a new measure called loan period which will set equal to the max of the loan period field that's already in the table visual.
>
> **[1:33](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/parameter-harvesting-formulas?u=76281980&t=93)** We see it returns the same value in the current table visual rows because those are the pivot coordinates that the measure is filtering its results to. In the card visual, the same visual result returns 360 because that's the maximum loan period value. The loan period field isn't in the filter context for evaluating the measure result in this visual. Now let's update our interest formula to use the loan period measure as the current loan period. We're using the loan period measure as the calculated current period, but we can also use the formula with the MAX function directly on this field as an input parameter in the function. I'm going to use the loan period measure for consistency across other measure calculations that also reference the loan period. To calculate the principle, let's use the analogous PPMT function with the exact same function input parameters in the same order.
>
> **[2:43](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/parameter-harvesting-formulas?u=76281980&t=163)** Multiplying these measures by negative 1 makes their results positive.
>
> **[2:55](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/parameter-harvesting-formulas?u=76281980&t=175)** Let's also build the accrual factor measure using the power function to raise 1 plus the monthly interest rate to the power of the loan period measure that we just calculated.
>
> **[3:13](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/parameter-harvesting-formulas?u=76281980&t=193)** Each loan payment first pays off the interest for that loan period, and the remaining amount goes toward reducing the principal. The interest paid decreases slightly with each month because it's paying interest on a lower remaining loan balance. Let's use a function to calculate this accumulated principal over time. We'll input the parameters for the monthly interest rate, 360 for the periods, and 100,000 for the PV. We'll set the starting loan period to 1 and the ending loan period to our new loan period measure. Because we want our payments to occur at the beginning of each period, we'll set our final parameter as 0.
>
> **[4:03](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/parameter-harvesting-formulas?u=76281980&t=243)** We'll then add $100,000 to this calculation because that's the PV we used to start our balance off with in these calculations. This illustrates how the outstanding balance decreases gradually over each loan period. Finally, let's confirm that our balance goes to zero in the last loan period.

> [!info]- Semantic Content
>
> **Env Vars:** max (2), ipmt (1), ppmt (1)
> **Cross-References:** go back to (1), in the last (1)

#### [Filtering and evaluating measures](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/filtering-and-evaluating-measures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/filtering-and-evaluating-measures?u=76281980&t=0)** We can think of [[Microsoft Power BI|Power BI]] filter levels as a hierarchy. The filters from the report level impact the page-level filter, and the page-level filters impact the visual ones. Filters also impact calculations like [[DAX]] measures. In the Filters pane, we can filter the fields already in the visual, and we can add additional filters to the visual page and report level. Slicers are standard visuals that let the end-user filter fields within a Power BI model themselves. Other visuals can also filter related report page visuals, but slicers have formatting options to encourage the end-user to use them. Let's add a slicer for the selected date range from the mortgage rate data table.
>
> **[0:50](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/filtering-and-evaluating-measures?u=76281980&t=50)** We can also sync up this slicer with other potential slicer visuals on different report pages using the same field in the view options for the sync slicers.
>
> **[1:04](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/filtering-and-evaluating-measures?u=76281980&t=64)** Filter context isn't the same as these filtering processes, but filtering can impact the filter context. Both the filter pane and the slicer visual data selection impact the data used in the calculations because they filter the rows within the data tables. We can see how the measure results change accordingly with the filter context of the pivot coordinates in the visual as we select a narrower date range. The date selected impacts the date shown in the interest rate table. Now if we sync this up to the other page for our loan periods, we see how it
>
> **[1:48](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/filtering-and-evaluating-measures?u=76281980&t=108)** impacts the average rate as an aggregate because the data itself is disconnected from the loan period calculations. DAX evaluates measures against the data source and not against the visuals. It calculates each measure independently. When we add a measure to a visual, it evaluates the results for each pivot coordinate using the same logical iteration process each time. DAX starts the measure evaluation process by first determining the pivot coordinates or dimensions already present in the visual that we're adding the measure to. Next it uses this filter context and other applied filters to determine active rows from the data table source. It then calculates the arithmetic on these rows and returns the evaluated results. DAX continues this evaluation process in the same way for all these visual pivot coordinates. We have a loan period measure in our table visual and an accrual factor measure that calculates how much interest accrues with each loan period. We also have other calculations for the loan payments that reference this loan period measure as well. We can see that we can remove the other measures.
>
> **[3:13](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/filtering-and-evaluating-measures?u=76281980&t=193)** To prove that DAX evaluates measures independently against the data source and not the visual, let's remove the loan period measure entirely from the visual. The payment amount equals the interest plus principal for each loan period. We can add these two measures together, then subtract the payment to check that our formula is correct. Adding this to the table visual, we confirm that these payment interest and principal calculations are correct without any of these measures being present within the visual. This allows us to do more complex calculations without relying on the measures used to scale in the calculations to be present in the visual. It's a game changer in Power BI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (5), [[Microsoft Power BI|Power bi]] (3)
> **Env Vars:** dax (5)

#### [CALCULATE DAX function including filters](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calculate-dax-function-including-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calculate-dax-function-including-filters?u=76281980&t=0)** Calculate is an incredibly powerful measure function because it lets us add conditional logic. The aggregation component is the first function parameter, and the filtering component is the second. To understand its logic, we should think of the filtering component first. This function parameter is optional, so if it's omitted from the formula, Calculate won't apply any filter conditions on this data table. Conversely, if there are filter conditions, CALCULATE will make these rows active in the calculation. Once it filters the data table or uses all the tabled rows if there are no filtering conditions, it returns the aggregated results on these rows. In a sample model, let's first create a new measure for banana sales.
>
> **[0:54](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calculate-dax-function-including-filters?u=76281980&t=54)** We use the CALCULATE function to set the product field of the data table equal to bananas. We can set filtering conditions using equalities like this as well as inequalities and other [[DAX]] functions. This filters the table to only the rows with this product label. Now let's calculate the total sales using the sales field from the same data table. we get an error message because we haven't aggregated the first function parameter. Instead, we need to apply the sum aggregation function on this field. Alternatively, we can just reference the total sales measured directly as our aggregated scalar result. Bananas have a total value of 3. It returns a scalar value of 3 when we add it to a card visual without any dimensions. Conversely, if we add this new measure to a visual just containing the locations as the dimensions, it splits the bananas total out by each location. If we add it to a visual containing the [[Microsoft Products|products]] instead, the result overrides the context of the product dimension values in the visuals table rows. When the filter is already in the pivot coordinates, CALCULATE overrides the context that it evaluates the results at. We can see how it breaks down even further if we have both the location
>
> **[2:26](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calculate-dax-function-including-filters?u=76281980&t=146)** and product dimensions in the visual. We can add multiple filters to the second part of the CALCULATE function. Let's say we want to calculate the total sales if the products are bananas or oranges. We'll use the double pipe syntax or the OR function to test for multiple conditions simultaneously. Let's say we want the product to be bananas and oranges. We'll set up this condition using double ampersands or the AND function.
>
> **[3:13](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calculate-dax-function-including-filters?u=76281980&t=193)** We don't see any results returned because each row of the data only has one product label and they both can't be true at the same time. Let's update our formula so the second condition for the filter is the location A.
>
> **[3:35](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calculate-dax-function-including-filters?u=76281980&t=215)** We can set our filter conditions equal to dates in the loan model. Let's calculate the average rate on April 4th, 1971 by setting the mortgage rates date field equal to the scalar date value in the calculate function.
>
> **[3:57](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calculate-dax-function-including-filters?u=76281980&t=237)** This doesn't return any results because we don't have an interest rate measured on April 4th. change it to April 9th, which is the second week that we have data.
>
> **[4:16](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calculate-dax-function-including-filters?u=76281980&t=256)** It returns the same result for each date in the table visual because the CALCULATE function overrides these date mentions that are already in the table. We can nest the fields that we're using as our conditions within DAX functions themselves. Let's say that we're looking for the average interest rate in April 1971. We'll put the year and month functions around the same date field and connect them together using ampersands.
>
> **[4:49](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calculate-dax-function-including-filters?u=76281980&t=289)** We can also use equalities for numeric filters, like creating a date range between the years 1971 and 1975. There's an implicit total at the bottom of the table visual. Let's turn them off through the formatting options because these numbers returned from the calculate function can get confusing quite quickly. Instead, we want to calculate explicit totals using measure formulas and putting them in cards. Lastly, we want to test the calculations by adjusting the filters in the slicer visual to see what happens when the date that's selected is after April of 1971, for example. We see it still calculates the average rate during that time period because the calculate function has changed the evaluation context and we are able to get these results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (2), [[Microsoft Products|Products]] (2)
> **Env Vars:** calculate (5), dax (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)

#### [SELECTEDVALUE](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/selectedvalue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/selectedvalue?u=76281980&t=0)** Parameters let end users ask what-if questions. We create user-controlled parameters using slicers and selected values to connect the pieces together. Let's create a numeric parameter to dynamically set the loan amount through the parameter modeling options. We'll call this new parameter loan value, where we'll set the minimum equal to 0 and
>
> **[0:27](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/selectedvalue?u=76281980&t=27)** the maximum equal to 100,000. Confirming the parameter configurations automatically adds a new loan amount table as well as a slicer visual that uses these values as inputs. If we want to increment our loan amount by a larger interval, like 1,000 instead, we'll add this value as the optional third parameter in the Generate Series function.
>
> **[1:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/selectedvalue?u=76281980&t=60)** There's also a measure attached to this new table leveraging the Selected Value function. It references the selected value from this numeric parameter through the slicer selecting one value at a time. We'll add an optional second parameter within this selected value function for the default value to return 100,000 if no amount is otherwise selected. If we add this measure to a card, we see its output change as we adjust the slicer selection input. Right now there's nothing else connected to this measure, but let's change that by adjusting our existing measure formulas. We can't reference the loan amount directly within the formulas, but we can use this new loan value measure instead. Let's update our payment interest principle and outstanding balance measures to use this loan amount measure instead of the $100,000 that we hard-coded into the formulas.
>
> **[2:15](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/selectedvalue?u=76281980&t=135)** We see these calculation results now update as we choose different loan amounts in the Connected Slicer. We also want to make sure that we update all parts of the formula as well.
>
> **[2:37](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/selectedvalue?u=76281980&t=157)** We can also use selected value to reference other fields like the date or rate from the mortgage rate data. Let's configure the date slicer as a single selection input.
>
> **[2:56](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/selectedvalue?u=76281980&t=176)** Now let's add a selected value for this selected date.
>
> **[3:04](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/selectedvalue?u=76281980&t=184)** We'll call this Selected Rate, and we'll use the selected value on the Mortgage Rate field.
>
> **[3:19](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/selectedvalue?u=76281980&t=199)** Notice that the interest rate isn't even the slicer, but the slicer will filter the table accordingly because it selects the row when we select the date, which then returns the value of the rate for that single selection. From here, we could update our average interest rate by month, for example, to reference this selected rate instead of the average rate measure in the model.
>
> **[3:48](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/selectedvalue?u=76281980&t=228)** Let's copy the date slicer and we'll sync it to the other page in our model. The SelectedValue function differs from the Max function because it only allows us to select one value at a time to use as our measure scale or value, while the Max function enables calculations across many rows in a summarized data table, like interest rate by date.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)


### 3. Time Intelligence

[↑ Back to Table of Contents](#table-of-contents)

#### [CALENDAR and CALENDARAUTO](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calendar-and-calendarauto?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calendar-and-calendarauto?u=76281980&t=0)** Calendars in [[DAX]] are immensely helpful because they create contiguous date ranges. This enables many different built-in time intelligence calculations and analytics options for [[Forecasting]] and anomaly detection. Our interest rate data has weekly measurements starting in April 1971 and continuing until the beginning of 2026. Let's add a new DAX calculated table called DatesAuto that will set equal to the CalendarAuto function. We're using a standard calendar, so we'll leave the function's one optional input parameter blank. CalendarAuto implicitly references the date fields already in [[Microsoft Power BI|Power BI]] to determine the starting date. It then starts on January 1st of that year, and the ending date is on December 31st of the last year of data. It uses this implied date range to automatically create a contiguous date table. Now let's create another contiguous dates table where we have precise control over the date range using the calendar function. We'll set the start date equal to April 1st, 1971, using the date function,
>
> **[1:19](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calendar-and-calendarauto?u=76281980&t=79)** and the end date equal to January 31st, 2026. Let's use variables to set the input based on minimum and maximum date values already in Power BI. We'll set the first date variable equal to the min of the mortgage rate dates, and the last date equals the max of the same date field. Let's then update our calendar to return these endpoint dates.
>
> **[2:01](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calendar-and-calendarauto?u=76281980&t=121)** Alternatively, we can set the ending date to the current date using the TODAY function. This is a great way to create a dates table for working with historical data and you want to make sure that you have the current dates. Unfortunately, Power BI has much more limited datetime calendar options. For example, if we add the TIME function to vary the start and end dates to various points within a day, And we can also use the UTC now function to get the current UTC time. We see the calendar function still returns the date range day by day.
>
> **[2:46](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calendar-and-calendarauto?u=76281980&t=166)** Let's update to use the UTC today. We'll also display this date field as a short date. We can then join them together in the model view.
>
> **[3:04](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calendar-and-calendarauto?u=76281980&t=184)** I'm going to put the dates dimension above the mortgage rates, which is a fact table. Let's connect the tables by selecting the date field on one table and dragging it to the related date field in the other. Now let's create a table visual to show what the dates look like.
>
> **[3:33](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calendar-and-calendarauto?u=76281980&t=213)** And if we don't see this pull up as the date, I'm going to just adjust the formula. Now when we put these two date fields side-by-side, we see that because the mortgage rate data is weekly, there are holes in its timeline between these rate updates. We'll use this mortgage rate data and time intelligence calculations, but we'll also need to account for these date gaps between measurements as we're building our models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (3), [[DAX]] (2), [[Forecasting]] (1)
> **Env Vars:** utc (3), dax (2), today (1), time (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)

#### [FIRSTDATE and LASTDATE](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/firstdate-and-lastdate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/firstdate-and-lastdate?u=76281980&t=0)** We can think of [[DAX]] time intelligence calculations along a ruler. The first date function moves us to the beginning of the ruler, while the last date moves us to the end. First date and last date are agnostic to the time period that the filter context is in. If we want to move the ruler to the start or the end of a time period, we can do so for the day, week, month, quarter, or year. Let's calculate the average interest rate on the first date of the rates table using the first date function to alter the filtering context within the calculate function. Let's replicate this calculation with last date to move the calculated rate to the last date at the other end of the table dates.
>
> **[0:55](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/firstdate-and-lastdate?u=76281980&t=55)** In the card visual, these measures return the interest rates for the first and last dates that we have mortgage rate data in the model. We see the first rate matches the result on January 7, 2000, and the last rate matches the result on January 15, 2026. In the table visual where we're summarizing the results by the dates in the same data table, these measures return the same results as the average rate calculation for each date. This is because the dates are in the filter context of this calculation, and when we move it to the first or last date, the date that's in the table impacts the calculated results. If we refer to the contiguous states inside these filtering functions instead, the result will be empty if there's no right measurement on the first or last date.
>
> **[1:51](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/firstdate-and-lastdate?u=76281980&t=111)** We can also use Advanced Time Intelligence calendars for these calculations. If you don't see this option available in your version of [[Microsoft Power BI|Power BI]], you'll need to first enable it through the Preview Feature menu options. When we use these calendars in the Time Intelligence functions, we'll refer to the name of the calendar that we set up. Note that we built this calendar on the dates table in the model, but we want to refer to the calendar that's going to have the date fields matched up to their appropriate date dimensions. Again, we see that there are no results because the first date in the calendar table does does not match the first date in the mortgage rate data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (1), [[Microsoft Power BI|Power bi]] (1)
> **Prerequisites:** you'll need (1), set up (1)
> **Env Vars:** dax (1)
> **Warnings:** note that (1)

#### [START or END period](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/start-or-end-period?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/start-or-end-period?u=76281980&t=0)** Time intelligence logic, like rulers, contains periods of uniform measurement which help make these calculations consistent. Let's say that we're calculating a metric along this ruler sometime during the middle of a time period, like a month. We can use the startof period filter functions to move the ruler to the first available date at the start of that time period, and the endof period functions to move the dates to the end of that time period. We can calculate the start and end of the week, month, quarter, and year. Let's calculate the interest rate at the start of the month as a comparison to see how much the weekly interest rates change later that month. Let's create a measure where we'll use the start of month function on the contiguous date field. Let's then add it to the table visuals where we have the mortgage rate data date as the dimension and also the date dimension with a contiguous date range. Adding it to this summarized visual, we see that it only returns the interest rate if the first monthly rate occurs on the first date of the month. Months where that's not the case don't have any measure results. We can also use the calendar options to reference the configured calendar table in this time intelligence filter function, but we see that also runs into the same problem as other contiguous date range inputs.
>
> **[1:34](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/start-or-end-period?u=76281980&t=94)** Let's update our formula to use the date from the rate data table instead, where it will have a match for the filtered interest rate rows at the start of the month. Adding it to the table visual containing the mortgage rate dates gives us results without any gaps in the start of month rate measurement. This returns the average interest rate for the first date within each month that we have rate data. This rate remains the same until the start of the next month when it updates to the rate for the beginning of that month and continues for each month in our summarized table.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)

#### [DATEADD](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/dateadd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/dateadd?u=76281980&t=0)** If we think of time intelligence along a ruler, each current position is an evenly spaced tick mark along the way. We can move to another tick mark on the same ruler using the DateAdd filter function. We use DateAdd to filter a date field and move it by the specified number of units using the day, week, month, quarter, or year as the intervals. Like other [[DAX]] filtering functions, DateAdd isn't a stand-alone function within a measure calculation, but instead it needs to work in conjunction with an aggregation. Let's use the DateAdd function to determine the average interest rate for the previous week. We'll utilize DateAdd in the filter input of the Calculate function to move either the date field in the rate table or a calendar of contiguous states, our input parameter that we're trying to move for the date field. Let's move the date back seven days or a week by adding a negative seven in the second function parameter. Finally we'll set the interval to day.
>
> **[1:11](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/dateadd?u=76281980&t=71)** We see this calculation works for interest rates that are exactly seven days apart. But if the rate comes out on another date because of a holiday, then it doesn't have a previous interest rate and we have holes in our data. The DATAD function also supports week as a time interval if we use the configured calendar as a date input field. Let's move the average interest rate calculation back one week. We'll then reference the configured calendar for the Advanced Time Intelligence model and update our unit interval. We see this calculation doesn't move the interest rate back one week. We can explore the connections between the date table and the mortgage rate table. Alternatively, let's update our formula to use negative 7 and we'll return to this example later using another function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (1)
> **Env Vars:** dax (1), datad (1)
> **Definitions:** is an  (1)

#### [PARALLELPERIOD](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/parallelperiod?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/parallelperiod?u=76281980&t=0)** We can also use the ruler analogy to expand the filter context for the date range across multiple dates. Parallel Period is a Time Intelligence filter function that makes this possible. It lets us expand the date range across a week, month, quarter, or year. Let's use Parallel Period on the average rate to expand it across an entire week. Weekly calculation options are a new part of the advanced time intelligence [[DAX]] options available in [[Microsoft Power BI|Power BI]]. I've already configured the calendar that we'll use in these time intelligence calculations in the model. Without a calendar, we can't do these weekly calculations. Let's use calculate to expand the date range over each week with a parallel period function. Within this function, our date input is calendar that's already configured in the model. We're going to expand the period across the filter context of the current date, so we'll use zero as the second function parameter. Using a number other than zero will move the entire time period by the number we input here. Finally, we'll use week as the time interval to expand the date range over.
>
> **[1:22](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/parallelperiod?u=76281980&t=82)** When we add this weekly rate to the summary of the mortgage rate dates, we see this weekly rate matches the average rate that's already in the visual. We see in a summarized table visual that the contiguous rates occur each day, but the mortgage rates only occur once a week. So on one date out of an entire week, there's a mortgage rate update. We see the average rate calculated only on dates when we have mortgage rate data. We want this measure to calculate the weekly rate over all dates within a week rather than just the date on when the mortgage data updates. This measure calculates the results we wanted to when we add it to this table. We see what the weekly rates are for each contiguous date even if there are no rate updates on that date. If we change the date input on this dates table to reference the date field instead of the calendar, let's see what results we get. The formula errors out with the message that the final part of the parallel period needs to be either a day, month, quarter, or year. The week option is only available for the calendar because we explicitly assign a week label to it. Different parts of the world use different weekly interval schedules, so we have to create and assign the weeks in a calendar via the advanced time intelligence options. Some parts of the world use Sunday through Saturday while others use Monday through Sunday. If we adjust our formula to use the calendar again, we now have a helpful weekly measure
>
> **[2:56](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/parallelperiod?u=76281980&t=176)** that we can continue to build other time intelligence calculations with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (1), [[Microsoft Power BI|Power bi]] (1)
> **Env Vars:** dax (1)
> **Definitions:** is a  (1)

#### [Dates period to date](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/dates-period-to-date?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/dates-period-to-date?u=76281980&t=0)** From a given current date on a ruler, we can calculate running totals going back to a historically significant starting date, like the beginning of the calendar year. To do this, we'll need to expand our date range using time intelligence functions specifically for filtering date ranges beginning at the start of different time periods. These functions expand the dates-to-date on a weekly, monthly, quarterly, or yearly basis. Let's calculate the year-to-date average rates. We need to expand the filter range so we can calculate the average total interest rate from the first state in the year to the current date in the pivot coordinates in our visual. Like other filter functions in [[DAX]] measures, we want to use these states within an aggregation function. We can calculate the average interest rate as a running average for the year using the dates YTD function inside Calculate. We can refer to a date table in this model or we can refer to the calendar options configured for the dates. We don't see any results when we use the calendar function here, so let's update our calculation to use the mortgage rate state.
>
> **[1:26](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/dates-period-to-date?u=76281980&t=86)** Comparing these numbers side-by-side, we see the rates equal each other in the first period of the year, but the running total for the year shows less variation in the average rates because we're calculating them over a wider date range with each passing week. Then, in the next year, the average running total starts over again. If we want to calculate week-to-date numbers, we need to use the calendar options for Advanced Time Intelligence. This is currently in preview mode because the established existing time intelligence functions don't otherwise support weekly calculations. We can even set the dates in the standard option so that we can start the fiscal year on a date other than January 1st. This is an optional parameter in the datesYtd function as we see here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (1)
> **Env Vars:** dax (1), ytd (1)
> **Code Identifiers:** datesytd (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)

#### [DATEBETWEEN](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/datebetween?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/datebetween?u=76281980&t=0)** If we want to expand the filter context for [[DAX]] calculations to a customized date range instead of a standardized one like year-to-date calculations, DAX offers several useful, efficient time intelligence functions for this purpose. DatesBetween lets us expand the date range on a date field between a specified start and end date. The periods between them depend on the duration between the start date and the end date that we set as function parameters. The dates and period function also uses a date field with a set start date, but will set the number of periods to expand this date range by. The ending date depends on these two input parameters. These filtering functions can produce the same date range, but there are scenarios where one approach is easier to use than the other. We can use time intelligence filters within several powerful DAX functions to create measures. In addition to using them in CALCULATE, we can also use them in the X family of aggregation functions like SUMX or AVERAGEX. Let's stick with CALCULATE here though. Let's start by calculating the average rate between October 31, 2025 and January 2, 2026. We use the DatesBetween function to expand the date range between these two fixed points. We use our calendar as our date input, followed by the start date of October 31st, 2025, and
>
> **[1:34](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/datebetween?u=76281980&t=94)** the end date of January 2nd in the next year. We now have duplicated dates, and we don't want to see this here. Instead, let's remove one of the date fields. What's happening here is we have the contacts from the dates and we also have them in the calculation itself. This isn't a dynamic date range input, so we can actually just add it to a card to see how the results compare. We can replicate this calculation using a similar measure with dates and period as the date filter instead. We'll then input the calendar as our date field. We'll also use the same start date. There's 63 days between the dates that we used in the DatesBetween function, so we'll set those as our final two filter parameters. These measures return the same average interest because they're calculated over the exact same expanded date range within the measure formula. DatesBetween is incredibly useful for calculating running totals from customized or dynamic start dates where the ending date references the current date with the max function on the same field. I'm just going to use the mortgage rate date for this, but we can use other date
>
> **[3:11](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/datebetween?u=76281980&t=191)** fields as well. I'll use the same date in the max function that I'm applying the dates between filter over.
>
> **[3:31](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/datebetween?u=76281980&t=211)** We get an average rate running total beginning on the date after October 31st, so in November we see this calculation starts. This is a useful way to get a running total on this narrow set of dates. Dates and period is very useful for rolling averages because we can set the start date as the same current date, but we can set the number of periods to 20 to calculate the average over 20 days.
>
> **[4:03](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/datebetween?u=76281980&t=243)** If we want to do a rolling average with the current date as the midpoint date, we can subtract 10 from our starting date. The start, end, and number of periods in these functions must be scalar values like measure results, but otherwise they give us a lot of flexibility for building incredibly useful time intelligence calculations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (3)
> **Env Vars:** dax (3), calculate (2), sumx (1), averagex (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### [PREVIOUS or NEXT period](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/previous-or-next-period?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/previous-or-next-period?u=76281980&t=0)** On a Time Intelligence Ruler, let's say that we want to do a calculation where we both move the date to a neighboring time period and expand it over a wider date range. We can do these filtering functionalities with the Time Intelligence family of functions for the previous and next day, week, quarter, month, and year. Let's start by calculating the average rate over each previous month for the mortgage rates. We'll use the previous function to reference either the mortgage dates or the date field from the dates table.
>
> **[0:45](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/previous-or-next-period?u=76281980&t=45)** We also have the option of using a calendar in this calculation, but we don't have to. Choosing the calendar options, though, often gives us more flexibility and efficiency with building these time intelligence calculations. This returns to us the average rate for the entire previous month. So each date that we have data in our mortgage table, we see it calculates the average for each of these dates for the previous month. These interest rates come out every week, but not necessarily on the same day of the week. Using Previous Week to change the filter context of these dates is a game changer because weekly data models are often hard to work with but in high demand from the business. We'll create a similar measure using Previous Week to reference the entire configured calendar, not the week field from the dates table utilized to create the calendar.
>
> **[1:44](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/previous-or-next-period?u=76281980&t=104)** The previous week's rates don't appear in the Summarize Mortgage data table, but we'll try to add it to our Contiguous Date table.
>
> **[2:01](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/previous-or-next-period?u=76281980&t=121)** We now see the previous week's data for each week, even if the date for the rate shifts around. Notice that last week's rate is returning for every date in the contiguous date table, even though the average rate does not appear in every one of these dates. We can also confirm that the calculation is working correctly. We can then use these results for other financial model components, like determining the derivative of the weekly rate of change for the interest rate.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)

#### [EOMONTH and EDATE](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/eomonth-and-edate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/eomonth-and-edate?u=76281980&t=0)** For a given current date on a Time Intelligence Ruler, the oMonth function will take us to the end of the month however many months we specify in the past or future. eDate takes us to the same day however many months in the past or future that we tell it to move. oMonth or end of month is immensely helpful for matching up timelines for date calculations that otherwise are out of sync between parallel periods. For the selected date that we're using to calculate the interest rate in the loan model, let's have the actual calculations begin on the first day of the next month after locking in the rate on a date in the previous month. This function returns a scalar value and not a filtered table for a time intelligence calculation, so we'll create a measure for the forecast date using this function. The first input parameter will be the selected date measure and the second parameter is the value zero because we want to calculate the end of the month for the same month of the selected date.
>
> **[1:10](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/eomonth-and-edate?u=76281980&t=70)** This gets us to the end of the currently selected month as we change the selected date slicer. Adding one to this date scaler result gets us to the first day of the next month. Let's also use the End of Month function to determine the absolute first start date for any potential loan in the Loan Dates Calculated table. We'll calculate the first date using the same formula structure, except we'll swap out the selected date measure for the min date for the Rates Data table.
>
> **[1:46](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/eomonth-and-edate?u=76281980&t=106)** The first date is always going to be on the first day of the month, so we can easily update the column expression for the row function to use the edate function to move the first date forward by the value specified within the expression.
>
> **[2:07](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/eomonth-and-edate?u=76281980&t=127)** Our minimum selected date is in January and our loan dates start on March 1st. We need to subtract one from the value field so the first loan date starts on the calculated first date instead of the month after. Once we add our offset to the formula, we see the updated loan dates table confirms that the first date in the calculated table starts on the 1st of February after the loan is issued in January of 2000.

> [!info]- Semantic Content
>
> **Code Identifiers:** omonth (2), edate (1)

#### [DATEDIFF DAX function](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/datediff-dax-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/datediff-dax-function?u=76281980&t=0)** DATEDIF calculates the duration or difference between two dates along a ruler by the specified unit interval. The calculated table for the loan date starts on the first day of the next month after January 7th, the first date that we can select for the mortgage rate data, which means it begins on February 1st, 2000. It returns the first day of each month after the specified first date variable set in the formula. While the start date is correct, the ending date is an estimate. If we want to calculate a precise range of dates, let's use a similar formula to calculate the last date when the selected date can begin. Once we update the minimum of the rate to the max function, let's then use these two scalar values and calculate the number of months between them as another variable. We'll set this equal to the DateDiff expression on the first date and the last
>
> **[1:05](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/datediff-dax-function?u=76281980&t=65)** date. DateDiff calculates the duration between a start date and an end date by a specified date or time interval between them. The third function input parameter lets us choose the interval we want to calculate the difference over. IntelliSense shows us these options, and we'll choose month as our units. Because the total loan periods extend 360 months into the future after the last possible forecast date, which we calculated in the last date variable, we need to add 30 years of monthly loan payments to the total months calculation. Lastly, for these loan dates, let's update the Generate Series function to use this newly calculate a duration instead of the placeholder value of 800 because the total months isn't an estimate anymore. The updated loan dates table confirms our calculations are correct because the loan extends exactly 369 months, which is 30 years minus one month into the future from the ending date in the data. Now let's use our updated loan dates table to continue building more complex measures in this model. The loan model so far used the loan period values to determine the calculated loan results for each month. Now our calculations use the start of each month in the loan dates table. We need to calculate the loan period by taking the difference between the forecast rate and the current rate determined by the pivot coordinates in each row of this summarized
>
> **[2:40](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/datediff-dax-function?u=76281980&t=160)** loan dates table. We'll calculate our updated loan period formula by first determining the current month from the Loan PIVOT table coordinates. We'll then use the DATEDIF function again, but this time we'll refer to the difference between the forecast date and the current month variable that we just calculated, again using months as a time unit interval difference.
>
> **[3:10](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/datediff-dax-function?u=76281980&t=190)** Let's also add 1 to the loan period calculation so that our first period starts with 1 instead of 0. Calculating durations gives us a lot of model flexibility because we can use them in many different types of calculations that play many different roles in the model.

> [!info]- Semantic Content
>
> **Env Vars:** datedif (2), pivot (1)
> **Cross-References:** in the last (1)
> **Definitions:** is an  (1)


### 4. Advanced DAX

[↑ Back to Table of Contents](#table-of-contents)

#### [ALL and ALLSELECTED DAX function](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/all-and-allselected-dax-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/all-and-allselected-dax-function?u=76281980&t=0)** The filter context determines the results a measure returns. We use table manipulation functions like ALL and ALLSELECTED to override this filter context. Without the optional second parameter for the filter conditions within the CALCULATE function, the measure will return the same result as the initial measure input. The All function overrides any applied filters, including those in the Filter pane, data selected in other visuals like slicers, and filter conditions applied within measure formulas. Let's remove the filters on all the columns by referencing the entire data table as the input parameter for this All function. We'll create another similar measure except all will apply specifically to the Location column within the Data table. And we'll also create another measure applying all to the Product column.
>
> **[1:07](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/all-and-allselected-dax-function?u=76281980&t=67)** We'll then compare the results of these three measures when we add them to three table visuals using different combinations of dimensions as the pivot coordinates for their calculations. The All function removes the filter context from the pivot coordinates in these table visuals, but in different ways depending on what dimensions this All filter function overrides and what dimensions are already in the visual that we're adding the measure to. The All function on the entire table returns the same result for each pivot coordinate, regardless of the visual's dimensions. If the location dimension is already in the visual, then applying all on this field means that all the [[Microsoft Products|products]] within that location return the same result, regardless of whether the product is already in the visual. Conversely, if all removes the filters on the product dimension, then it will use the location as the pivot coordinates, but it removes the filters on this product field. Let's swap out all for all selected in the measure removing the filters from the entire data table. The difference between All and AllSelected is the way they negate filters. All overrides any external filters, including slicers, while AllSelected uses visuals, like slicers, to add to the filter context of the results. The total sales measure dynamically changes as we adjust the slicer selections, while the measures with the All function stay static.
>
> **[2:48](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/all-and-allselected-dax-function?u=76281980&t=168)** While the slicers impact the labels displayed in the visuals, they don't impact the totals if we're using ALL. Let's use the CALCULATE AN ALL function to sum the total interest amount across all 360 loan periods in the loan model.
>
> **[3:13](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/all-and-allselected-dax-function?u=76281980&t=193)** Regardless of whether we remove the filters for the entire table or just its single loan period column, the measure still returns the same results for each loan period as the payment amount. [[DAX]] doesn't understand what we're trying to calculate over all the loan periods. There's no sum aggregation already present in the payment formula. Instead, let's use SUMX for this aggregation.
>
> **[3:46](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/all-and-allselected-dax-function?u=76281980&t=226)** We'll input the loan period table as the first function parameter and the payment measure as the second. It still returns the payment amount for each period that we saw before. To sum these totals, we need to override the loan periods as the pivot coordinates in the table that we're referring to within the SUMX function. We'll do this by nesting the loan period table inside ALL. If we're using ALL or ALLSELECTED within an X function like this, we can also just refer to one table column to override its filter context. Once we confirm our measure properly calculates these results, we can also replicate the same DAX pattern to sum up other amounts in this loan model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (2), [[Microsoft Products|Products]] (1)
> **Env Vars:** allselected (2), calculate (2), dax (2), sumx (2)
> **Definitions:** means that (1)

#### [FILTER DAX function](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/filter-dax-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/filter-dax-function?u=76281980&t=0)** Filter is another table manipulation function that lets us filter tables in [[DAX]] for more complex scenarios like where a column equals a measure, formula, or another column or when a measure equals another measure, formula, or a fixed value. The mortgage rate data only comes out once a week, so if we select a date from the contiguous date field that's not a measurement date in the slicer, it returns a blank interest rate. If you see different results, you want to check and test different connections between the Rates and Dates table in your model view. Mine is currently using a many-to-one cardinality between the Rates and Dates table. Let's use the selected date as the starting point to build our daily mortgage rate measure calculation. We'll use the MIN function to determine the current date local variable where the selected date range begins. The current date variable returns a measure result that we'll use to calculate the last date variable. This is the last date from the rate data table that occurs before the selected current date. Essentially, we want to take the date when the last rate occurs and move that forward to the current selected date in the slicer. We'll use calculate to filter the date field in the rates table that's less than or equal to the current date. We then want to determine the max date from this filter table. When I'm building complex calculations like this, I break it down into smaller
>
> **[1:36](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/filter-dax-function?u=76281980&t=96)** pieces to test and triage formula components. Let's return the last date variable to see if our calculation so far is working correctly. As we select different dates in the slicer, we see a persistent problem with the measure results. We see that it returns a rate for a date when there is a mortgage rate, and it returns blank otherwise. To properly calculate this result, we'll wrap the Calculate Filtering Condition in the Filter function. The first function input is the rates table that we want to filter, and the second input is the existing filtering condition where the date field from this table is less than or equal to the current date.
>
> **[2:24](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/filter-dax-function?u=76281980&t=144)** We still don't see the date display when we select an empty date for the mortgage rates. This calculation doesn't work because the Date Slicer filters the key dates out of the calculation that occur before this selected date. We need to access these dates that occur about a week before the current date because one One of those states is the last state that the rates data updates. Let's expand the filter context for this calculation by nesting the table input in the filter function inside the all function. Once we confirm that the last state correctly calculates these results, let's update the return expression to calculate the average rate for the rate table where the value for its date field equals the last date variable that we just calculated.
>
> **[3:22](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/filter-dax-function?u=76281980&t=202)** If this doesn't return the calculated rate for all the contiguous fields, let's again add the filter function to this measure in the same way that we did for the last date variable. We now see the rate updates to display the daily mortgage rate even if the average rate measure results are blank. While filtering context can get confusing in DAX measure calculations, functions like filter can help us elegantly solve these tricky calculation challenges.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (2)
> **Env Vars:** dax (2), min (1)
> **Definitions:** is a  (1)

#### [BLANK and ISBLANK DAX functions](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/blank-and-isblank-dax-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/blank-and-isblank-dax-functions?u=76281980&t=0)** We can use functions like blank and isBlank as part of the [[Control Flow]] process for empty values. Let's first create a blank measure that will set equal to the function blank, which requires parentheses but doesn't have any inputs in them. When we add it to a visual to check the output, the result is empty as it returns a value that looks like an empty string. This would imply that blank returns an empty text label. But blank really returns a null and how it works can seem a bit confusing at first. Let's use another measure to combine the blank function with the [[Microsoft Word|word]] hello using an ampersand. Blank returns a null value but it doesn't behave as an empty string. Let's create another measure that subtracts one from the blank function.
>
> **[0:58](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/blank-and-isblank-dax-functions?u=76281980&t=58)** We see how blank operates like the number 0 in a numeric calculation, which is why it returns a negative 1 here. To properly use blank in calculations, we need to account and test for them. The total value measure calculates the sum of the data table values. The results contain three combinations of numbers, whole numbers greater than 0, 0, and blanks. In a new measure, let's subtract 1 from the total value. It subtracts 1 from each total value result, which we can see is 0-1 for both the 0 result and its blank counterparts. Let's next try another approach by testing whether the total value result equals 0. We'll set the total value measure equal to 0 on the other side of the expression. This result returns false for any number greater than zero, but it returns true for both the zero and blank results, which is problematic. If we want to explicitly test whether an input value is blank or not, we can tap into the IsBlank function specifically for this use case. It's a logical information function that returns a Boolean result that lets us test whether an input is blank or not. We see when we apply this function to the total value measure, it properly discerns whether the result is zero or blank and correctly returns true or false
>
> **[2:33](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/blank-and-isblank-dax-functions?u=76281980&t=153)** accordingly. We can also filter out blank values in the Filters pane. Another use for blanks is to return a result in conditional statements to clean up the output. It's often easier to read measures if they don't display anything rather than having to display zeros and explain why they're there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Control Flow]] (1), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** isblank (1)

#### [IF](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/if?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/if?u=76281980&t=0)** We can use the IF function to test for a condition. When the condition is true, it will return one result, otherwise it will return an optional alternative result. These loan periods can be quite large in magnitude, either in the positive or negative direction in our loan period measure results, as we see when we add them to our loan dates table. Let's create a new measure called loan period in selected dates to add a label for whether or not the loan period is within the loan duration. We'll then determine whether a loan period is between 1 and 360 using the IF function. We need to set the conditional statement that we're testing for in this calculation. There's unfortunately no function to directly test the conditional statement as to whether the value is between two other values. Let's start by using the OR function where we'll test whether either of the two input parameters within the function are true. The conditions if either the loan period measure is less than 1 or the loan period is greater than 360 can both either be true for this measure to return a false result.
>
> **[1:17](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/if?u=76281980&t=77)** If neither of those conditions are true, then the IF function will return the true result. This is a bit confusing. Alternatively, it's a bit cleaner to use the AND function to test for these equivalent conditions. This time, both of the conditions within the AND function must be true for the measure to return a true result. We'll say that both the same loan period measure must be greater than or equal to 1 and the loan period must be less than or equal to 360. If this condition is true, then we want our result to return a value of 1, otherwise we want it to return a value of 0. We can also return a blank value as one of the results, for example we can add it to the alternative results. I'm going to use a 0 here instead. When we add this measure to our summarized table visual, we see it returns the correct results as to whether the loan period is within the range of 1 to 360 or outside of it. We can also check that the date in this table with the loan period value of 1 matches our forecast date that we calculated. There are now a lot of dates in this table. We can also use this measure as a filter so we don't have to scroll through all these rows. In the Selected Measures filtering options, we'll open the Filter pane and then we'll
>
> **[2:49](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/if?u=76281980&t=169)** specify that this loan period and selected dates needs to equal 1.
>
> **[2:58](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/if?u=76281980&t=178)** We don't need to keep this measure in the table visual either for the filtering conditions to still apply. Once we apply this filter, we can then remove the measure entirely from the table visual. We see the tabled visual now only displays loan periods 1 through 360. When we're using the IF function, the conditions and results must match the output type that we're returning. In this example, we're comparing a measure and the condition is testing a measure and both the result and alternative result are also measures.

> [!info]- Semantic Content
>
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [DIVIDE DAX function](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/divide-dax-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/divide-dax-function?u=76281980&t=0)** [[DAX]] has a powerful suite of financial functions that we can use to calculate things like the outstanding balance for a loan. However, there are limitations to these functions. Currently, our loan model calculates the loan period using the dateDef function. The outstanding balance references this measure, so let's see how its results look. It errors out with a message telling us that a function argument is the wrong data type or its results are too large or too small. The updated loan period uses more complex calculation logic under the hood. Let's calculate the balance using other existing model components. The payment and accrual factor measures still work in our summarized visual, so let's use them in the updated balance calculation. We'll first calculate the accrued loan amount by multiplying the selected amount by the accrual factor.
>
> **[1:01](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/divide-dax-function?u=76281980&t=61)** Now we need to calculate the accumulated payment total for each loan period. We'll do this by creating a payment factor variable using the divide function. While similar to its arithmetic operator counterpart, this function allows us to build more efficient and cleaner division calculations. We'll set the accrual factor minus one as the numerator and the monthly interest rate as the denominator.
>
> **[1:37](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/divide-dax-function?u=76281980&t=97)** For the final result, we'll subtract the payment measure multiplied by the payment factor from the accrued loan amount RDNR return expression.
>
> **[1:51](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/divide-dax-function?u=76281980&t=111)** The results show the outstanding balance decreases each loan period as the payments are made toward the loan balance. The divide function requires numerator and denominator input parameters, but it also gives us the option to input a third parameter for the optional alternative result for otherwise undefined division calculations. One scenario where this would occur is if the interest rate is zero. Let's comment out the existing monthly interest rate measure and set it equal to zero for now instead.
>
> **[2:32](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/divide-dax-function?u=76281980&t=152)** Right now, divide defaults to returning a blank value for undefined results. We'll check this by putting a blank in the third function parameter. In a scenario where the interest rate equals zero, then the accrual factor would also be one for each loan period as it's not accruing any value. This also means the payment factor will just equal the loan period multiplied by one. Let's use the loan period measure as our alternative undefined result. Unfortunately, the result now errors out. This error message tells us that our alternative result within the divide function needs to be a constant numeric value. Let's set it equal to 1 instead. Let's focus on our current result which returns 1 for the payment factor. We can multiply the payment factor by the loan period in the returned expression. Our alternative results are now correct, but this now means that if the interest rate isn't zero, then we're unnecessarily multiplying the payment factor by the loan period, which will drastically skew the results. To offset this for scenarios where the interest rate isn't zero, let's divide the result by the loan period. We'll input it into the denominator as a multiplier for the existing input parameter.
>
> **[4:09](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/divide-dax-function?u=76281980&t=249)** Once we confirm that the zero interest rate scenario properly works, let's confirm it works with the calculated average rate that we started with by uncommenting the
>
> **[4:22](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/divide-dax-function?u=76281980&t=262)** measure result to calculate the average rate. Finally we'll use this to calculate the outstanding balance for the previous month, which then One calculates the interest in principle for this current month.
>
> **[4:44](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/divide-dax-function?u=76281980&t=284)** We see in these loan model calculations how using a function like divide can help simplify our complex model calculation scenarios.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (1)
> **Env Vars:** dax (1), rdnr (1)
> **Code Identifiers:** datedef (1)
> **Definitions:** means that (1)
> **Analogies:** similar to (1)

#### [SWITCH](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/switch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/switch?u=76281980&t=0)** The if function lets us test for simple conditional logic, but what if we're testing for more than one condition? We could use nested if statements, but that can get messy quite fast. We can also use the switch function to solve this [[Control Flow]] challenge. We can test for different conditional scenarios within switch. The first is testing whether one value is equal to different exact rates, and the second Function is testing for multiple conditions. First let's use switch to determine the name of the day of the week. We can calculate the value that we want to test for by applying max on the weekday in
>
> **[0:46](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/switch?u=76281980&t=46)** the table visual. The weekday function returns a value from 1 to 7 though and not the weekday name. And the switch function will reference the weekday scalar value as the first function input parameter. Once we set the input that we're testing for, we'll then input the value that we're testing for whether it equals and the result that we want it to return as a pair of function input parameters. Let's say that if it's one, then it's a Sunday. Two is Monday. Three is Tuesday. Four is Wednesday. Five is Thursday, six is Friday, and seven is Saturday. We can add an alternative result as the final unpaired return value if we would like as well. I'll set it equal to blank to keep our formula straightforward. We see what the results of our first switch measure look like. Now let's use switch to categorize interest rate levels. We have a table visual that summarizes the average rate for the mortgage rates by year. Because we're testing for multiple conditions here, we want the first input of our switch function to be true. Now notice that true is a key [[Microsoft Word|word]] in the [[DAX]] formula language. Now let's test for our first condition. If the average rate measure is higher than 15% or 0.1,
>
> **[2:23](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/switch?u=76281980&t=143)** then the rate level will be extremely high. If it's higher than 10% is the next level, it's going to be high.
>
> **[2:36](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/switch?u=76281980&t=156)** Now if it's lower than 5%, we're going to set it as low. Now let's create a catch-all for our switch function as our alternative result. We've categorized all the interest rates that are lower than 0.05 and greater than 0.10. Anything between 0.05 and 0.10 is going to be medium. Using the switch function saves us the hassle of creating complicated nested if statements as it's an elegant and clean way to write these types of conditional formulas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Control Flow]] (1), [[Microsoft Word|Word]] (1), [[DAX]] (1)
> **Versions:** 0.05 (2), 0.10 (2), 0.1 (1)
> **UI Navigation:** switch to (2)
> **Env Vars:** dax (1)
> **Definitions:** is a  (1)

#### [Filtering between disconnected tables](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/filtering-between-disconnected-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/filtering-between-disconnected-tables?u=76281980&t=0)** One of the most powerful concepts in [[Microsoft Power BI|Power BI]] is working with disconnected tables. This means the model tables in the calculations aren't intentionally connected, but instead utilize [[DAX]] formulas to link them up indirectly. In order for this concept to work, we actually have to sever the relationship between any tables we want to work with, otherwise the filters might not work as expected. So why would we want to use the concept of disconnected tables? It seems counterintuitive as linking tables together eliminates the potential for human error and maximizes how we can use fields within a semantic model. One of the best ways to illustrate how to use disconnected tables is by using dates. Let's use loans as an example. A loan has a start and end date, which means there are two dates that we need to account for in the life of the loan. The dates between these dates are when the loan is active. If we take these loans and put them on a timeline that works like a Gantt chart, we see that the loans look like they're stacked on top of one another. When we take a date and superimpose the active loans on it, like this Gantt chart, we can count the number of loans available. Now let's look at it from a loans data table that we want to calculate the loan count over for each period in the date table. So for April 1st, 2028, we have four loans that are active and we can count. In Power BI, we have a loan table and a dates table that we want to count it over. We're going to calculate the loan count for each state and the dates already in
>
> **[1:36](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/filtering-between-disconnected-tables?u=76281980&t=96)** the table visual using the count aggregation function. And count rows over the loan table.
>
> **[1:49](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/filtering-between-disconnected-tables?u=76281980&t=109)** This returns a loan count of 51 for each date because we don't actually know which ones are active yet. We'll then set up the filter for this calculation using the filter function to reference the loan data table. We'll then set up the first filtering condition by referencing the start date from the same disconnected loan table and checking if this is less than or equal to the current date determined by the pivot coordinates in the table visual we're adding it to. We'll set this up using the max function on the dates field. On the other side of the and condition, we'll use double ampersands. We then need to determine if the end date is greater than or equal to the dates that we referenced in the pivot coordinates.
>
> **[2:41](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/filtering-between-disconnected-tables?u=76281980&t=161)** Now our loan count in this summarized table shows the count for each date over the entire time period. However, neither the start date nor the end date need to be in the table for our calculations to properly work by returning the number of active loans for each date.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (2), [[DAX]] (1)
> **Prerequisites:** set up (2)
> **Env Vars:** dax (1)


### 5. Advanced DAX Calculations

[↑ Back to Table of Contents](#table-of-contents)

#### [TMDL View](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/tmdl-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/tmdl-view?u=76281980&t=0)** TMDL, or Tabular Model Definition Language, is the code behind the entire semantic model. The TMDL view in [[Microsoft Power BI|Power BI]] contains model components like table and column names, relationships between model tables, queries in [[Microsoft Power Query|Power Query]], measure formulas, and field formatting that we can update directly via these scripts. Let's say that we have a Power BI model for a 30-year mortgage loan. We built out the calculations for this model and put them in a folder so we know these set of calculations is specifically for a 30-year loan. We also have rate data for a 15-year mortgage loan that we want to create the same calculations for. One way to quickly add these 15-year calculations is through the TMDL view. If you don't see this option displayed on the left panel of your Power BI Desktop application, you want to ensure that you've enabled it through the Preview Feature menu options first. In the TM Deal view, let's select all the measures in the 30-Year Loan folder and drag them to the page. We can rename this script tab something more descriptive, like Updating 15-Year Calculations. We'll then use the Replace functionality through the keyboard shortcut, Ctrl-H. Let's then choose all the parts of this script containing 30 and change them to 15, and we'll
>
> **[1:35](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/tmdl-view?u=76281980&t=95)** replace all of these. Once Power BI makes these updates, let's select Apply to push them into our calculations. We receive an error message. This occurs because the new measures have the same tags as the original ones in the 30-year calculations folder. One way to quickly fix this issue is by going through the lineage tags for each of the items and incrementing each number by one and doing the same for letters.
>
> **[2:11](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/tmdl-view?u=76281980&t=131)** Now when we apply this updated script, it correctly runs and we see an entirely new table of folders for the 15-year rates. We also see all the calculations that we copied over from the 30-year rate folder. Using the TMDL view can help save us a lot of time. If we're consistent with how we build and label our semantic model, we can easily copy over these calculations through the TMDL view.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (4), [[Microsoft Power Query|Power query]] (1)
> **Env Vars:** tmdl (5)

#### [Field parameters](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/field-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/field-parameters?u=76281980&t=0)** Numeric and field parameters let us ask what-if questions about our [[Microsoft Power BI|Power BI]] models. We can create field parameters with our model fields using dimensions and measures. We have the payment and average interest rates for the 15-year and 30-year loan durations in a table visual summarizing these numbers by the dates when the mortgage rates update. In the modeling tab, let's choose to add a new parameter for fields. We can add any field within the model to our field parameter, and this includes measures. Let's add the measures for the payment and average interest rates for both the 30 and 15-year loans to our new field parameter. Before we confirm our selection, let's rename our new parameter, Select Loan Calculation Fields. We can select different values in the slicer and it doesn't do anything, at least yet. We can see its formula in the formula bar contains a table constructor and also the name of function. We can see what its results look like by adding the entire parameter to a visual.
>
> **[1:22](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/field-parameters?u=76281980&t=82)** Let's remove the existing fields in the table. Now let's say that we want to have the option to choose which durations to display within the visual. Let's add a group to our field parameters. We'll choose the field automatically added when we created the parameter and select New Group. We'll then put the 30-year calculations in one group and the 15-year calculations in the other.
>
> **[1:57](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/field-parameters?u=76281980&t=117)** Once we add this group to our semantic model, we can use the group names in a slicer. We'll then format the slicer to select any of the groups or all of them at the same time.
>
> **[2:16](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/field-parameters?u=76281980&t=136)** Now we can choose whether to display either or both of the loan duration calculations and we see that our visual updates accordingly. We can also interact with this model by updating the numeric parameter for the loan value. We see how parameters let us ask what-if questions about our data, both through the fields and numeric inputs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (1)

#### [Calculation groups](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calculation-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calculation-groups?u=76281980&t=0)** Let's say that we have measures for the interest rates for 15-year and 30-year loans. We can think of these interest rates as individual variables stored in the function Selected Measure within a calculation group in our [[Microsoft Power BI|Power BI]] model. For each of these interest rates, we want to calculate the payments, interest, principal, and outstanding balance. Each of these loan calculations that we want to perform with the Selected Measure inputs are the calculation items, which we can think of as wrappers to go around these selected measures, much like functions. All of these calculation items make up a calculation group column in a calculation group in our Power BI semantic model. We'll set up calculation groups in the model view by choosing the Calculation Group option. This automatically creates a new calculation group and a calculation item in the formula bar. Let's rename this formula interest rate and we'll keep it as the selected measure. Let's rename this calculation group column to loan calculations
>
> **[1:15](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calculation-groups?u=76281980&t=75)** and we'll do the same for the calculation group. In the report view, the calculation item is stored in a calculation column that we can add to our visuals. We see what this looks like when we convert it into a matrix visual. This functionality is particularly powerful when we combine it with other calculations. Let's go back into our model view to make updates. Let's calculate the monthly interest rate by copying the existing measure formula for that. We'll then replace this 30-year average rate with the selected measure.
>
> **[2:10](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calculation-groups?u=76281980&t=130)** We'll confirm this calculation works for both measures in the report view. Now let's calculate the payment as another calculation item. This is dependent on the duration of the loan, which is either 180 or 360 periods. One way that we can extract the duration is from the name of the selected measure using the function Selected Measure Name. I recommend mindfully naming measures like this so that we can extract that names and use them in other functions. We'll update our payment formula to reference the first two characters in the measure name using the left function. We'll then convert it into a value and multiply this result by 12 for the number
>
> **[3:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calculation-groups?u=76281980&t=180)** of months in a year. The payment calculation item now displays either 180 or 360 as the duration length. We'll then use the same PMT function that we're already using to calculate payment in the model.
>
> **[3:25](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calculation-groups?u=76281980&t=205)** We'll update the interest rate to use the monthly formula instead of the selected measure by itself. So let's copy our other calculation item, we can't reference it directly.
>
> **[3:44](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calculation-groups?u=76281980&t=224)** The duration that we just calculated goes in the second parameter of this function.
>
> **[3:54](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/calculation-groups?u=76281980&t=234)** We'll reference the same loan amount measure that we used in the original calculation. Now let's confirm our measure calculations. Our results display the names of these calculation items as well as the results evaluated in the context of the measures we added to the visual. The calculation group applies to all the calculation items we added to each of the measures in the visual. While calculation groups have drawbacks, like making it harder to specifically name measures, see in this example. They're also a great way to make [[DAX]] measures more efficient and scalable as we

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (2), [[DAX]] (1)
> **CLI Commands:** make (3)
> **Env Vars:** pmt (1), dax (1)
> **Prerequisites:** set up (1)

#### [User-defined functions](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/user-defined-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/user-defined-functions?u=76281980&t=0)** User-defined functions, or UDFs, let us create custom functions within our semantic model using [[DAX]] syntax and logic that we can then call in other DAX formulas like measures. To create a function, we'll give it a name using only alphanumeric characters, underscores, or periods, and no spaces. We'll then assign the function any of the input parameters that we want to pass into it, along with optionally including their data types. We'll then assign the expression to this function that we want the calculation to return. Let's first create our user-defined function in the DAX query view. There's an existing query within the space so we can use those guidelines. We'll use define followed by function to create our new function. We'll give it the name annual to monthly, right. We'll then set it equal to the result we want it to return and we'll add the input parameters within these parentheses. Our first input is the annual rate which is a decimal. I'm going to call this nthly so that I have one more parameter pass in. Annual rate's a decimal. The number of periods is also a decimal. We'll then assign this function its expression using the equal sign followed by the greater than sign. Now we
>
> **[1:35](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/user-defined-functions?u=76281980&t=95)** need to assign the expression to the function. I'm going to use variables. calc rate is equal to the annual rate divided by 100. We'll use the power function to raise 1 plus this rate we just calculated to the nth power and I'm
>
> **[2:01](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/user-defined-functions?u=76281980&t=121)** going to do 1 divided by n because n is the number of periods.
>
> **[2:11](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/user-defined-functions?u=76281980&t=131)** Now, let's test to see that our function works in the Evaluate section of the DAX query. We'll use curly braces to indicate that we're evaluating this expression for a
>
> **[2:26](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/user-defined-functions?u=76281980&t=146)** function. We'll calculate the monthly rate for a yearly input of 20%. We'll then run this query to make sure the function syntax is correct and also that we get the correct result. I just need to subtract one. Now the results are incorrect because they are whole numbers. Let's multiply by 100 and we see it is returning a result as we expect it to. Once we create this function and run it we're going to update our model with these changes. In the model view, we see our new function added to our [[Microsoft Power BI|Power BI]] semantic model. We can add user-defined functions from the model view as well, but I personally prefer to use the DAX query view because I can test them and evaluate to make sure that the calculation works. Let's calculate a DAX measure using this function. We'll say monthly rate for 15 years, we'll call our new function, then we'll
>
> **[3:41](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/user-defined-functions?u=76281980&t=221)** pass the average rate for 15 years into it, as well as 12.
>
> **[3:52](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/user-defined-functions?u=76281980&t=232)** Once we create this user-defined function, we can use it in as many calculations like measures as we would like within our model. It's a great way to gain efficiency when building more complex models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DAX]] (6), [[Microsoft Power BI|Power bi]] (1)
> **Env Vars:** dax (6)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps and additional resources](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/next-steps-and-additional-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-dax-language-formulas-and-calculations-30982476/next-steps-and-additional-resources?u=76281980&t=0)** If you'd like to continue learning about [[DAX]] modeling, I encourage you to apply the concepts in this course in your own work. There are a lot of great free public data sources out there to practice on including more datasets on the FRED website. I love exploring their data. Please check out other [[Microsoft Power BI|Power BI]] courses in the library if you want to learn more about the amazing capabilities of this tool. Follow me on [[LinkedIn]] if you would like to see current content on Power BI, AI, and data analytics, other tools like [[Python (Programming Language)|Python]], R, [[SQL]], and [[Microsoft Excel|Excel]], as well as the courses and projects that I'll be working on in the future. Never stop learning. See you soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (2), [[DAX]] (1), [[LinkedIn]] (1), [[Python (Programming Language)|Python]] (1), [[SQL]] (1)
> **Env Vars:** dax (1), fred (1), sql (1)
> **CLI Commands:** python (1)


## Instructor

- [[Helen Wall]]

## Path Context

### In [[Explore a Career as a Power BI Specialist]]
← [[Complete Guide to Power BI for Data Analysts by Microsoft Press]] | **3 of 5** | [[Power BI Data Dashboards]] →

## Appears In

- [[Explore a Career as a Power BI Specialist]]

---

[↑ Back to top](#)