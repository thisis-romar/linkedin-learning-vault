---
type: course
cssclasses:
  - lle-course
slug: excel-formulas-and-functions-quick-tips-25627720
url: "https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720"
duration_minutes: 46
duration: 46m
updated: 4/10/2025
learners: 10313
skills:
  - Microsoft Excel
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGOmmKsj8ZwZg/learning-public-crop_675_1200/B4EZXYyFgPHcAg-/0/1743098764145?e=2147483647&amp;v=beta&amp;t=e4Nsh1G8SuFjU5lYzvVObLSzm-MgTSSK5L3scS9VIF0"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Skills with Excel Formulas and Functions]]'
prev_courses:
  - '[[Excel Introduction To Formulas And Functions]]'
next_courses:
  - '[[Excel- Lookup Functions in Depth]]'
path_nav: '[{"path":"Advance Your Skills with Excel Formulas and Functions","position":2,"total":5,"prev":"Excel Introduction To Formulas And Functions","next":"Excel- Lookup Functions in Depth"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/microsoft-excel
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Excel%20Formulas%20and%20Functions%20Quick%20Tips.md)

![Excel Formulas and Functions Quick Tips](https://media.licdn.com/dms/image/v2/D4E0DAQGOmmKsj8ZwZg/learning-public-crop_675_1200/B4EZXYyFgPHcAg-/0/1743098764145?e=2147483647&amp;v=beta&amp;t=e4Nsh1G8SuFjU5lYzvVObLSzm-MgTSSK5L3scS9VIF0)

# Excel Formulas and Functions Quick Tips

> The myriad formulas and functions in Excel are a large part of what makes it such a uniquely powerful program. But for many of us, figuring out how to apply these formulas and functions to solve everyday problems can seem overwhelming. In this course, tech trainer and M365 expert Jess Stratton demystifies these powerful features, sharing bite-sized tips designed to help you work faster and more ef

> [LinkedIn Learning](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720) | 46m | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Calculate data with ease in Excel](#calculate-data-with-ease-in-excel)
- [**1. Formula and Function Basics**](#1-formula-and-function-basics) (5 videos)
  - [Build a formula in a cell with =](#build-a-formula-in-a-cell-with)
  - [Create a named range](#create-a-named-range)
  - [Reference cells and worksheets](#reference-cells-and-worksheets)
  - [Join text with an ampersand](#join-text-with-an-ampersand)
  - [Follow along with Excel when creating functions](#follow-along-with-excel-when-creating-functions)
- [**2. Identifying Values**](#2-identifying-values) (7 videos)
  - [Calculate a total with SUM](#calculate-a-total-with-sum)
  - [Sum values that meet specific criteria with SUMIF](#sum-values-that-meet-specific-criteria-with-sumif)
  - [Find the mean value with AVERAGE](#find-the-mean-value-with-average)
  - [Test for valid data with IF](#test-for-valid-data-with-if)
  - [Create complex tests with AND and OR](#create-complex-tests-with-and-and-or)
  - [Find record values with MAX, MIN, SMALL, and LARGE](#find-record-values-with-max-min-small-and-large)
  - [Perform date calculations with TODAY()](#perform-date-calculations-with-today)
- [**3. Count Functions**](#3-count-functions) (4 videos)
  - [Count cells that contain numbers with COUNT](#count-cells-that-contain-numbers-with-count)
  - [Count nonblank cells with COUNTA](#count-nonblank-cells-with-counta)
  - [Return a number of occurrences with COUNTIF](#return-a-number-of-occurrences-with-countif)
  - [Checking in on your course progress](#checking-in-on-your-course-progress)
- [**4. Text Functions**](#4-text-functions) (7 videos)
  - [Format numbers and dates with TEXT](#format-numbers-and-dates-with-text)
  - [Extract characters with LEFT AND RIGHT](#extract-characters-with-left-and-right)
  - [Extract substrings with MID](#extract-substrings-with-mid)
  - [Count characters with LEN](#count-characters-with-len)
  - [Identify where a character occurs with FIND](#identify-where-a-character-occurs-with-find)
  - [Join strings with delimiters with TEXTJOIN](#join-strings-with-delimiters-with-textjoin)
  - [Change text with SUBSTITUTE and REPLACE](#change-text-with-substitute-and-replace)
- [**5. Index, Match, and Lookups**](#5-index-match-and-lookups) (4 videos)
  - [Retrieve a specific value with XLOOKUP](#retrieve-a-specific-value-with-xlookup)
  - [Use INDEX and MATCH to retrieve a value](#use-index-and-match-to-retrieve-a-value)
  - [Use GROUPBY to aggregate data](#use-groupby-to-aggregate-data)
  - [Use PIVOTBY to aggregate data with more columns](#use-pivotby-to-aggregate-data-with-more-columns)
- [**6. Avoiding Errors and Invalid Formulas**](#6-avoiding-errors-and-invalid-formulas) (2 videos)
  - [Remove leading spaces with TRIM](#remove-leading-spaces-with-trim)
  - [Include IFERROR to trap errors in formulas](#include-iferror-to-trap-errors-in-formulas)
- [**Conclusion**](#conclusion) (0 videos)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Calculate data with ease in Excel](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/calculate-data-with-ease-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/calculate-data-with-ease-in-excel?u=76281980&t=0)** - Hello, my [[Microsoft Excel|Excel]] using friends. How many times have you tried to learn Excel formulas only to drown in a sea of parentheses and overly complicated examples? Yeah, me too, but I've got you covered. Come spend 40 minutes with me and I'm going to take you through over 25 widely used Excel functions, and this is the important part, using real, but simple scenarios. The best part, I can show you them in about a minute and a half each. My name is Jess Stratton. It's so quick, what have you got to lose?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3)
> **Speakers:** - hello (1)


### 1. Formula and Function Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Build a formula in a cell with =](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/build-a-formula-in-a-cell-with?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/build-a-formula-in-a-cell-with?u=76281980&t=0)** - [Narrator] A function is a built-in [[Microsoft Excel|Excel]] calculation that you initiate by calling with a formula. Type an equal sign into the cell. This lets Excel know that you're building a formula. Reference a different cell by clicking on it with your mouse, or you can also just type the location in directly. You can perform calculations with additional operators or functions.
>
> **[0:37](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/build-a-formula-in-a-cell-with?u=76281980&t=37)** Hit the Enter key to calculate your formula. To use a built-in Excel function, put parentheses around the beginning and the end.
>
> **[0:54](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/build-a-formula-in-a-cell-with?u=76281980&t=54)** The colon tells Excel to include all the cells between the start and endpoints. I'll close my parentheses and hit Enter.
>
> **[1:09](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/build-a-formula-in-a-cell-with?u=76281980&t=69)** You can also drag with the mouse to select the cells that are near each other. This formula adds these values. These are the most important building blocks to start building formulas in Excel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Create a named range](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/create-a-named-range?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/create-a-named-range?u=76281980&t=0)** - [Narrator] You can define a name for a specific area of cells to make it easier for you to work with formulas. This named area is called a range. You can name a single cell by selecting it and giving it a name in the name bar. Now you don't need to remember the rate, just the reference [[Microsoft Word|word]]. You can also name a range of cells. Select your cells, change to the Formulas tab, and click Create From Selection. Select anywhere that you have header rows, or columns.
>
> **[0:52](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/create-a-named-range?u=76281980&t=52)** You can edit or delete these values by clicking Name Manager. You can also see what they're called. Now, you can use these names anywhere that you can use a formula.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Speakers:** - [narrator] (1)

#### [Reference cells and worksheets](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/reference-cells-and-worksheets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/reference-cells-and-worksheets?u=76281980&t=0)** - [Instructor] You can reference cells on other worksheets in the same workbook. Let's take a look at this passing grade, which is located in cell H1 on the worksheet labeled Grades. We can reference this on another sheet. I'll place the equal sign, and before referencing the cell, I'll include the worksheet name followed by an exclamation mark. In this case, Grades. (mouse clicks) If the range is already named, you don't have to specify the sheet, just the range name is fine. You can also reference a cell as an absolute reference. A relative reference means it's relative to the location of the cell. An absolute reference means the reference is locked in place, even if the cell value changes its location. Let's look at this formula. This is testing the value of a passing grade according to the grade of the student. Right now, it's testing the value of cell H1. Let's make this an absolute value, just in case that cell location ever changes. You can make a cell reference an absolute value by selecting it and hitting the F4 key on your keyboard. A Mac user will also need the Function key to be held down. You'll see dollar signs, and the cell reference is now absolute. Now, if the testing cell ever changes location, the formulas stay in place,
>
> **[1:34](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/reference-cells-and-worksheets?u=76281980&t=94)** and the values of the cells will change accordingly.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Join text with an ampersand](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/join-text-with-an-ampersand?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/join-text-with-an-ampersand?u=76281980&t=0)** - [Instructor] Some tasks can be performed without needing a function. Let's join the contents of these two cells together using an ampersand. After putting in my equal sign, I'll type in my first cell. Now we need our ampersand to join the contents of the second cell, but before that, we need a space in between the two names to add literal text, and close it in quotation marks. In this case, a single space. I'll join that text with another ampersand, and now I can put in the remaining cells. Hit the enter key and the formula is complete. [[Microsoft Excel|Excel]] even autofill the contents of this for me. If it didn't do that for you, you can select the cells, and from the home ribbon tab, select fill and then down. A common question is when to use the ampersand, and when to use the full [[Microsoft Word|word]] AND, use an ampersand when you're joining text strings together. Use AND as an operator to perform logic tests. We're going to be doing that in later videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), [[Microsoft Word|Word]] (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Follow along with Excel when creating functions](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/follow-along-with-excel-when-creating-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/follow-along-with-excel-when-creating-functions?u=76281980&t=0)** - [Instructor] [[Microsoft Excel|Excel]] makes it easy to get assistance while working with functions. When you type the function, the help file will pop up a window telling you what it does. The moment you hit the open parenthesis, a list of parameters the function uses displays on screen. The current parameter is in boldface. When you type a comma, the help moves with you, and the next parameter will be in bold. Any parameter that has a bracket around it is optional. That is, it's not required to make the function work, and you don't need to include it. Finally, you can hover your mouse over the function itself. Click the link to get more help. You'll see what the function does, and you can scroll down and see all the parameters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)


### 2. Identifying Values

[↑ Back to Table of Contents](#table-of-contents)

#### [Calculate a total with SUM](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/calculate-a-total-with-sum?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/calculate-a-total-with-sum?u=76281980&t=0)** - [Instructor] The SUM function adds numbers that you specify, or a range of cells and returns the result. I'll type =SUM, put in my open parentheses, and I can either type in my range manually, or click and drag to select the range. I'll close the parentheses, hit Enter, and get my sum. It's important to note that you can always select a range of cells, and down at the bottom of the screen on the right hand side, [[Microsoft Excel|Excel]] will return the sum for you. You can also select a range of cells and click AutoSum from the Home ribbon tab.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **Env Vars:** sum (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Sum values that meet specific criteria with SUMIF](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/sum-values-that-meet-specific-criteria-with-sumif?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/sum-values-that-meet-specific-criteria-with-sumif?u=76281980&t=0)** - [Instructor] The SUMIF function adds values that meet specific criteria. This column contains Sales Associates, and this column contains the Amount of values of gift certificates that they've sold. Let's use the SUMIF function to find out the total amount of gift certificates that Jess has sold. (mouse clicks) The first value is the range, in this case, the column of Sales Associates. I'll put in my comma to add the next parameter. The second criteria is what we're searching on. It can be a number, text expression, or a function that returns any of those things. Text or mathematical operators must be in quotation marks, such as Jess. (mouse clicks) The last parameter is the sum range. In this case, my column of gift certificate Amounts. I'll close out my formula, hit the Enter key, and there's the Total.

> [!info]- Semantic Content
>
> **Env Vars:** sumif (2)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Find the mean value with AVERAGE](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/find-the-mean-value-with-average?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/find-the-mean-value-with-average?u=76281980&t=0)** - [Instructor] The average function returns the arithmetic mean of numbers. It's calculated by adding a group of numbers and then dividing by the count. This function ignores cells containing text or empty cells. Type =AVRAGE, open the parentheses, and then you can specify numbers separated by commas, individual cell values, or you can also select a range. Close the parentheses, hit Enter, and you'll get the average. It's important to note that you can also select your range and look down at the bottom right hand side of the screen to view the average. The AVERAGEA function is similar, except you can also include numbers represented as text and true and false values as 1 and 0. Any cell containing other text will have a reference value of 0.

> [!info]- Semantic Content
>
> **Env Vars:** avrage (1), averagea (1)
> **UI Navigation:** open the (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Test for valid data with IF](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/test-for-valid-data-with-if?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/test-for-valid-data-with-if?u=76281980&t=0)** - [Instructor] The IF function allows you to make logical comparisons. Let's find out if the students have passed or failed, knowing that a passing grade is 70 or higher. I'll put equal sign if and open my parentheses. The first parameter is the test. Let's find out if the value in cell C two is greater than or equal to 70. I'll put in my comma. And the second parameter is what happens if the comparison is true, in this case, we'll type pass. I'll add a comma, and the third parameter is what happens if the comparison is false. In this case, it's a fail. I'll close my parentheses and hit the enter key. If I want to fill this formula down, I can click and drag with my mouse, select fill on the top right hand side of the screen and choose down. It can also return nothing. Let's do this again, except this time we'll only mark the students who failed. (keyboard clicking) This time, I'm going to use the absolute value that's in the cell, J one.
>
> **[1:36](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/test-for-valid-data-with-if?u=76281980&t=96)** The value, if it's true, will be the empty string, that is nothing. I'll close my parentheses, and here it is. This time, I'll fill it down by hovering my mouse over the bottom right corner of the cell and double clicking. Now I can only see students who failed.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard clicking) (1)

#### [Create complex tests with AND and OR](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/create-complex-tests-with-and-and-or?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/create-complex-tests-with-and-and-or?u=76281980&t=0)** - [Instructor] You can combine the functions AND and OR with IF to open limitless possibilities in [[Microsoft Excel|Excel]]. Let's find out which students passed both of these exams. The passing grade is in cell J1 and is 70. My test is the values in C2 and D2, so we'll start with an AND. I'll put in a new open parentheses and I'll put in the value of my cells in the test. I'm putting in the absolute value of J1. I'll put in a comma and the second part of that AND. I'll close the parentheses and I'll add a comma because I still need to finish my IF test. If the value is true, they passed both exam one and exam two. I'll place an X in the cell, otherwise I'll leave it blank.
>
> **[1:07](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/create-complex-tests-with-and-and-or?u=76281980&t=67)** Let's fill down. Now I can very quickly see who's passed both exams. This time let's find out who's passed at least one exam. We'll do the same thing except this time instead of AND I'll use an OR. This time I can see who's passed at least one exam because we're testing the value of either of these cells.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **Non-Speech:** (typing) (3), (typing continues) (1)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### [Find record values with MAX, MIN, SMALL, and LARGE](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/find-record-values-with-max-min-small-and-large?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/find-record-values-with-max-min-small-and-large?u=76281980&t=0)** - [Narrator] The MAX and MIN functions will give you the highest and lowest values in a range. Let's find out what the highest temperature is from column B. I'll use the MAX function and we can do the same thing with MIN to find the low.
>
> **[0:27](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/find-record-values-with-max-min-small-and-large?u=76281980&t=27)** The SMALL and LARGE functions work in a similar fashion, except we get an extra parameter to use to find the nth value. For example, let's use the LARGE function to find the second highest number,
>
> **[0:51](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/find-record-values-with-max-min-small-and-large?u=76281980&t=51)** and once again, we'll do it with SMALL to find the second lowest number. The parameter of K, that is in this case, the second number, can be any number that you can choose within this range of numbers.

> [!info]- Semantic Content
>
> **Env Vars:** max (2), min (2), small (2), large (2)
> **CLI Commands:** find (5)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Perform date calculations with TODAY()](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/perform-date-calculations-with-today?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/perform-date-calculations-with-today?u=76281980&t=0)** - [Instructor] The TODAY function has no parameters and returns the current date. I'll put in an equal sign, write today and use my open and close parentheses. The date is based on the date of the computer that [[Microsoft Excel|Excel]] is running on. This date will change and update every time this Excel file is opened. But you can use Today to perform calculations. Let's find out how many days this gift card has been active for. Cell A2 contains the date it was issued. We can subtract that from today's date.
>
> **[0:43](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/perform-date-calculations-with-today?u=76281980&t=43)** Excel will put an odd date in there by default. If I look in the ribbon I can see that it's formatting it as a date field. You can fix this by changing to the number data cell type. You can also decrease the decimal to get a count of days.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3)
> **CLI Commands:** find (1)
> **Env Vars:** today (1)
> **Speakers:** - [instructor] (1)


### 3. Count Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Count cells that contain numbers with COUNT](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/count-cells-that-contain-numbers-with-count?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/count-cells-that-contain-numbers-with-count?u=76281980&t=0)** - [Instructor] The COUNT function counts the number of cells within a range that contain numbers. Use this function when the values of those numbers are not what's important. Let's look at this column. Let's find out how many of these [[Microsoft Products|products]] sold at least something in 2021. (mouse clicks) I'll select my range, and close the parentheses. The number that's returned is only counting numbers in this range, including dates and times. Blank cells and cells containing non-numerical values are ignored. Let's expand the range. (mouse clicks) I'll select the first range. This time, I'll include a comma and include a second range. Close the parentheses, hit Enter, and now, both ranges are included in the count.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** count (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Count nonblank cells with COUNTA](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/count-nonblank-cells-with-counta?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/count-nonblank-cells-with-counta?u=76281980&t=0)** - [Instructor] The COUNTA function counts the number of cells within a range that contain any value at all. It returns the number of non-empty cells. This is different than the COUNT function that only counts cells that have numbers or date and time values. This is a way that these students have been approved for the photography class. Their presence has all been recorded in different ways. Equal sign CountA and we'll select the range. Close the parentheses and there's our value.
>
> **[0:41](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/count-nonblank-cells-with-counta?u=76281980&t=41)** I can do this using lowercase, that's perfectly fine, too.
>
> **[0:56](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/count-nonblank-cells-with-counta?u=76281980&t=56)** This is an easy way to tell us how many students signed up for each class.

> [!info]- Semantic Content
>
> **Env Vars:** counta (1), count (1)
> **Definitions:** is a  (1), is an  (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Return a number of occurrences with COUNTIF](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/return-a-number-of-occurrences-with-countif?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/return-a-number-of-occurrences-with-countif?u=76281980&t=0)** - [Narrator] With the COUNTIF function, you can specify criteria and then count the number of cells in a range that meet that criteria. Let's find out how many people are in the state of Florida. I'll put in my range, that is the entire column of E. I'll include a comma and put what I'm looking for in quotes. I'll close the parentheses and here's my number. The COUNTIFS function does the same thing, except it allows me to specify multiple criteria. Let's do this one more time, except I'm going to use COUNTIFS. I'll start it the exact same way,
>
> **[0:52](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/return-a-number-of-occurrences-with-countif?u=76281980&t=52)** and now, I'll put in a comma and put in a second criteria, that is how many people from Florida are active. It is going to search the next column over. While you can put text in quotes, it's much better practice to use cell references as values instead. Let's do that one more time. I'll put in my range, and this time, I'll use what's in the value of cell H1, which in this case is Florida. And again, we'll do COUNTIFS
>
> **[1:45](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/return-a-number-of-occurrences-with-countif?u=76281980&t=105)** and this time, What's in the value of cell H2. Now I can change these states and get different answers. The numbers change on the fly.

> [!info]- Semantic Content
>
> **Env Vars:** countifs (3), countif (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### [Checking in on your course progress](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/checking-in-on-your-course-progress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/checking-in-on-your-course-progress?u=76281980&t=0)** - Hello. I wanted to take a quick break and check-in with you and see how it's going. We've done a lot of formulas. We've gone quickly. Don't be afraid of that Q&A tab if you have any questions. There's also exercise files that you can follow along with, and it's very helpful to pause the video if you have to, do the formula on your own and then come back and keep going, just to connect how it's supposed to work. I also recommend that after you finish the course, wait two weeks and then watch it again. It's such a quick course and it's going to help reinforce everything that you learned if you go over it a second time. I promise it will help make things that much easy to remember for when you really need to use it to solve your problem. Again, I hope you're enjoying the course, let's keep going.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - hello (1)


### 4. Text Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Format numbers and dates with TEXT](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/format-numbers-and-dates-with-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/format-numbers-and-dates-with-text?u=76281980&t=0)** - [Instructor] The TEXT function allows you to reformat numbers and dates as text as a specific way of using codes. These codes can be found on the Home ribbon tab. Click General, More Number Formats, and then Custom.
>
> **[0:20](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/format-numbers-and-dates-with-text?u=76281980&t=20)** You can view all the formatting options here. A common problem when importing addresses in the United States is that [[Microsoft Excel|Excel]] will often remove the first leading zero. We'll use text to put it back. I'll start with =TEXT, open parentheses. The value is the contents of cell E2. I'll put in a comma, and now I need five characters, so I'm going to tell Excel with quotes to fill in the missing characters with zero. I'll close the quotes and parentheses, and I get my value that I can then fill down. Let's look at a more complex example. This time I'm going to use the pound sign as a number placeholder. I'll start with a text string.
>
> **[1:28](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/format-numbers-and-dates-with-text?u=76281980&t=88)** I'll use an ampersand to join the text, and now I'll put in my value. I first need to compute the sales bonus. I'll put in my comma and format it.
>
> **[1:57](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/format-numbers-and-dates-with-text?u=76281980&t=117)** Close the quotes and the parentheses, and I get my sentence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2)
> **Env Vars:** text (2)
> **Speakers:** - [instructor] (1)

#### [Extract characters with LEFT AND RIGHT](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/extract-characters-with-left-and-right?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/extract-characters-with-left-and-right?u=76281980&t=0)** - [Narrator] You can extract characters from a string with the LEFT and RIGHT functions. These extractions are called substrings. In this name column, let's include the first initial and last name of this person. I'll start with my equals sign, add LEFT, and the open parentheses. I want to pull it from the value of cell A2. I'll add my comma and I want to extract the first character from the left. I'll close my parentheses and now I'll finish the formula by including a space and the last name. (keys clicking)
>
> **[0:49](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/extract-characters-with-left-and-right?u=76281980&t=49)** I'll fill this down. And in this column we'll add the zip code. The zip code is always going to be five characters over from the right-hand side. (keys clicking) I want to pull it from cell D2. I'll add my comma, and I want to grab five characters from the right. Here's my zip code and I can fill that down.

> [!info]- Semantic Content
>
> **Env Vars:** left (2), right (1)
> **Non-Speech:** (keys clicking) (2)
> **Speakers:** - [narrator] (1)

#### [Extract substrings with MID](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/extract-substrings-with-mid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/extract-substrings-with-mid?u=76281980&t=0)** - Is The mid function will give you a set number of characters from a string starting where you specify based on how many characters you specify. In this cell, I'm interested in the three middle characters. I need to pull that number out. I'll start typing equals mid, open my parentheses, and put in my cell reference for text, in this case, the contents of cell A2. After the comma, I need to specify the position of the first character that I want to extract. In this case, I need the third character over. I'll put in a comma and now I need to specify how many characters I want to extract. Again, in this case, three. I'll close the parentheses and here's my middle extracted number. I can fill down to get the information that I need.

> [!info]- Semantic Content
>
> **Speakers:** - is (1)

#### [Count characters with LEN](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/count-characters-with-len?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/count-characters-with-len?u=76281980&t=0)** - [Instructor] The LEN function counts characters within a text string. Let's find out how many characters are in this email address. Equal sign LEN, open parentheses. Put the text or cell reference that you want to count the characters in and then close the parentheses. There's 24 characters in this email address. LEN counts letters, numbers, special characters and spaces. There's 118 characters in this paragraph. LEN is commonly used with other functions. Let's use it with if.
>
> **[0:50](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/count-characters-with-len?u=76281980&t=50)** If the length of cell A2 is greater than or equal to 78 I'll put OK, otherwise something else.

> [!info]- Semantic Content
>
> **Env Vars:** len (4)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Identify where a character occurs with FIND](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/identify-where-a-character-occurs-with-find?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/identify-where-a-character-occurs-with-find?u=76281980&t=0)** - [Instructor] FIND will locate the position of text within text. (keyboard clicking) I'll put the text that I want to find, and then, I'll specify where to look, in this case, sell C two. Optionally, I could specify where to start from the left. If I don't specify where to start, it's going to start from the beginning. I can fill down, and here I can see that the at symbol and cell C two as it position 13 in this entire string. The FIND function is commonly used with other functions. For example, we can FIND out by using the LEN function, how many characters there are total in this email address. And using a combination of the two, I can return just the email domain part of this email address, that is, everything to the right of the at symbol. I'll search cell C two, and I need to tell it how many characters to return from the right hand side. (keyboard clicking) I don't know this, but I do know that I can subtract the total characters minus the position that I'm looking for. So the number of characters that I want is the length of the entire cell, (keyboard clicking) minus the position of the at symbol.
>
> **[1:40](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/identify-where-a-character-occurs-with-find?u=76281980&t=100)** I need to close two sets of parentheses, and then I'll get my email domain. FIND is a case sensitive search. If you're looking to do the same functionality without case sensitivity, use the search function instead.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5)
> **Env Vars:** find (4), len (1)
> **Non-Speech:** (keyboard clicking) (3)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Join strings with delimiters with TEXTJOIN](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/join-strings-with-delimiters-with-textjoin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/join-strings-with-delimiters-with-textjoin?u=76281980&t=0)** - [Instructor] TEXTJOIN combines a range of data with a delimiter that you specify. It's only available with [[Microsoft Excel|Excel]] 2019 or higher, or with a [[Microsoft 365]] subscription. It's similar to using the ampersand or CONCAT function to combine text. Let's use TEXTJOIN to join the first, middle, and last names. (mouse clicks) The delimiter in this case will be a space. Not everybody has a middle name, so I'll include the TRUE parameter to ignore empty cells. And finally, the range is cell A2 through C2. (mouse clicks) I'll fill down, and you can see that not everybody has a middle name. Let's do this one more time, except instead of a range, let's use the LEFT function and just have the first letter of the middle name A. This time, I'm going to include a comma, and now we can include the LEFT function. (mouse clicks) I'll end it with C2, the Last name. We can even change the delimiter. (mouse clicks) Finally, TEXTJOIN also works with rows. (mouse clicks) I'll use a comma as my delimiter,
>
> **[1:35](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/join-strings-with-delimiters-with-textjoin?u=76281980&t=95)** and I'll use the column as the range. (mouse clicks)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), [[Microsoft 365]] (1)
> **Env Vars:** textjoin (3), left (2), concat (1), true (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Change text with SUBSTITUTE and REPLACE](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/change-text-with-substitute-and-replace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/change-text-with-substitute-and-replace?u=76281980&t=0)** - [Narrator] The SUBSTITUTE function replaces text based on the content of the text. Everything that's 1099 in this column, I'd like to change to 1199. I'll use SUBSTITUTE. I'll select my range, put in a comma, add my old text, include another comma, and then put in my new text. I'll close the parentheses and everywhere there was a 1099 is now an 1199. Everything else remains unchanged. It can also replace specific instances of text. I need to update this last 20 with a 24, but I don't want to change both of them.
>
> **[1:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/change-text-with-substitute-and-replace?u=76281980&t=60)** I'll put in the cell, the old text, the new text, and now I'll use an optional parameter called instance number. I only want to change the second instance of a 20. We can also accomplish this using the REPLACE function. The REPLACE function changes text based on its position in the string. Once again, we're testing cell A2. This time, I'm replacing text seven positions over. I'm replacing two characters and I'm replacing them with the characters 23.

> [!info]- Semantic Content
>
> **Env Vars:** substitute (2), replace (2)
> **Speakers:** - [narrator] (1)


### 5. Index, Match, and Lookups

[↑ Back to Table of Contents](#table-of-contents)

#### [Retrieve a specific value with XLOOKUP](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/retrieve-a-specific-value-with-xlookup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/retrieve-a-specific-value-with-xlookup?u=76281980&t=0)** - [Instructor] XLOOKUP enables you to retrieve values based on a lookup value from the same row. The function is currently only available for [[Microsoft Excel|Excel]] 2021, 2024, and [[Microsoft 365]] users. Let's look up the state from Column E and retrieve the status from Column F. We'll look up the state from Column I. (mouse clicks) Start your XLOOKUP and open a parentheses. The lookup value is in cell I1. The lookup array is from Column E. (mouse clicks) and the return array is column F, the State. (mouse clicks) We are returning the status. The following parameters are optional. We can return an error message if nothing is found. (mouse clicks) We can specify whether or not we want to search for an exact match, and finally, how we want to search. I'll leave these last two parameters empty. I'll close the parentheses, and it retrieves my value. (mouse clicks) I can change the state, and it will update the status. Let's change the lookup column and retrieve the phone number instead. XLOOKUP has similar functionality to VLOOKUP, except with XLOOKUP,
>
> **[1:34](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/retrieve-a-specific-value-with-xlookup?u=76281980&t=94)** the lookup can be any column, not just the leftmost, and VLOOKUP is available for every version of Excel. (mouse clicks) Now, it's returning the phone number.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Microsoft 365]] (1)
> **Env Vars:** xlookup (4), vlookup (2)
> **Speakers:** - [instructor] (1)

#### [Use INDEX and MATCH to retrieve a value](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/use-index-and-match-to-retrieve-a-value?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/use-index-and-match-to-retrieve-a-value?u=76281980&t=0)** - [Instructor] If you can't use XLOOKUP, you can use the functions INDEX and MATCH in combination to perform similar functionality. Let's use INDEX and MATCH together to find out if the state of Arkansas is active or inactive in this column. The MATCH function will return the position of the required value, in this case where the state of Arkansas is from this range in column E. The lookup value is Arkansas, which is currently in cell I1. The lookup array is from column E,
>
> **[0:46](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/use-index-and-match-to-retrieve-a-value?u=76281980&t=46)** and our match type will be an exact match, so I'll put a zero in. In this case, Arkansas is in place four from this range from column E. The INDEX function will return a specific value at a specific position, so now we can find out what's in place four in the status column. Let's put these together and use INDEX to return the value at this location that MATCH returned.
>
> **[1:23](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/use-index-and-match-to-retrieve-a-value?u=76281980&t=83)** Our array this time is from column F. The row number that I want to return is the location that MATCH is going to return, so we can use the same MATCH formula.
>
> **[1:51](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/use-index-and-match-to-retrieve-a-value?u=76281980&t=111)** I need to close this out with two sets of parentheses, and there's the status. I can change the state, and it will use the function again.

> [!info]- Semantic Content
>
> **Env Vars:** match (6), index (4), xlookup (1)
> **SQL:** index (4)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### [Use GROUPBY to aggregate data](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/use-groupby-to-aggregate-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/use-groupby-to-aggregate-data?u=76281980&t=0)** - [Instructor] You can aggregate data easily using the new GROUPBY function. The function can group and display your data like a pivot table. However, GROUPBY is only available for [[Microsoft 365]] users.
>
> **[0:16](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/use-groupby-to-aggregate-data?u=76281980&t=16)** GROUPBY has three required elements. What to group, in this case, all group product category. The specific values to collect. In this case, I want a total quantity sold of each category and the function that we want to use to aggregate the data, such as a sum, or an average. Close the parentheses, and here's my table. GROUPBY will update automatically when the data changes. You can also include the headers as an optional parameter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft 365]] (1)
> **Env Vars:** groupby (4)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Use PIVOTBY to aggregate data with more columns](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/use-pivotby-to-aggregate-data-with-more-columns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/use-pivotby-to-aggregate-data-with-more-columns?u=76281980&t=0)** - [Narrator] The PIVOTBY function is similar to GROUPBY. You can aggregate data and display it like a pivot table. It's also only available for [[Microsoft 365]] users. PIVOTBY has one extra required field. A specific column that you want to see the data for.
>
> **[0:23](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/use-pivotby-to-aggregate-data-with-more-columns?u=76281980&t=23)** The first parameter is what we want to group. I want to see the product categories. The second parameter is the specific one for PIVOTBY. This is a specific column that you want to see the data for. In this case, I want to see which ones sold that we're wholesale versus retail. The third parameter is what we're going to be actually looking at. In this case, the quantity of units sold and the last required parameter is how I want to see that data, and because I want to see the total quantity sold, that's a sum. For this PIVOTBY, I'm going to use one of the optional parameters, and that's to show the headers. As soon as I hit the Enter key, I can see all of my quantity sold, grouped by retail and wholesale.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft 365]] (1)
> **Env Vars:** pivotby (4), groupby (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)


### 6. Avoiding Errors and Invalid Formulas

[↑ Back to Table of Contents](#table-of-contents)

#### [Remove leading spaces with TRIM](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/remove-leading-spaces-with-trim?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/remove-leading-spaces-with-trim?u=76281980&t=0)** - [Instructor] The TRIM function removes leading and trailing spaces from a text string. Let's use the LEN function to test cell A2.
>
> **[0:14](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/remove-leading-spaces-with-trim?u=76281980&t=14)** Including spaces, it's 81 characters. It passes this test. However, if we use the TRIM function to remove any leading and trailing spaces, because I can see that there's some spaces in the beginning of this paragraph, let's see what we get. It's going to wrap the entire A2 cell around TRIM. This time, we get a completely different number because now it's not counting any leading or trailing spaces in the cell. In this test, let's return the first initial from cell A2. I'll use the LEFT function.
>
> **[1:05](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/remove-leading-spaces-with-trim?u=76281980&t=65)** It will return the first character, and I'm expecting a C. But I got a blank. That's because if I look closely at the cell, I can see that there's a space in front of the name Calli. We can fix this by using TRIM. I'll add the TRIM function and wrap that around my cell.
>
> **[1:38](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/remove-leading-spaces-with-trim?u=76281980&t=98)** Now it's returning what I expect. It TRIM function is good practice for avoiding errors and possible pitfalls.

> [!info]- Semantic Content
>
> **Env Vars:** trim (6), len (1), left (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Include IFERROR to trap errors in formulas](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/include-iferror-to-trap-errors-in-formulas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-formulas-and-functions-quick-tips-25627720/include-iferror-to-trap-errors-in-formulas?u=76281980&t=0)** - [Instructor] IFERROR is a great function for trapping and handling errors that can otherwise wreck a formula. This formula uses INDEX and MATCH to look up the status of a particular state found in column E. But if I put something in here that doesn't have a listing in column E, I'll get a nasty, confusing error. Let's wrap the entire formula around the IFERROR function. Here's my formula. Right after the equal sign, I'm going to wrap the entire thing around IFERROR. I'll open my parentheses. I can keep this formula exactly how it is, and all the way at the end, I'll put a comma. Now, I can write what happens if there's an error. In this case, I'll write "Not found". Close the parentheses, hit Enter, and my error handling is working already. If it finds something legit, it's still going to complete the formula.

> [!info]- Semantic Content
>
> **Env Vars:** iferror (3), index (1), match (1)
> **SQL:** index (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)


## Instructor

- [[Jess Stratton]]

## Resources

- Exercise files available

## Skills Covered

- Microsoft Excel

## Path Context

### In [[Advance Your Skills with Excel Formulas and Functions]]
← [[Excel Introduction To Formulas And Functions]] | **2 of 5** | [[Excel- Lookup Functions in Depth]] →

## Appears In

- [[Advance Your Skills with Excel Formulas and Functions]]

## Related Courses

_Courses sharing skills:_

- [[Excel- Power Query for Beginners]] — Microsoft Excel
- [[Excel- Filtering Data for Beginners]] — Microsoft Excel
- [[Excel- Tracking Data Easily and Efficiently]] — Microsoft Excel
- [[Excel for Business Analysts]] — Microsoft Excel
- [[Complete Guide to Excel Statistics with Copilot]] — Microsoft Excel

---

[↑ Back to top](#)