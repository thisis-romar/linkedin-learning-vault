---
type: course
cssclasses:
  - lle-course
slug: excel-lookup-functions-in-depth-24287728
url: "https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728"
duration_minutes: 95
duration: 1h 35m
updated: 12/17/2024
learners: 259257
skills:
  - Microsoft Excel
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFmPgikXok2PA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1732666105347?e=2147483647&amp;v=beta&amp;t=8IlepcWVjFYxCIELc_xxN0qsLH0SZheEHvP7T2_-RXI"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Skills with Excel Formulas and Functions]]'
prev_courses:
  - '[[Excel Formulas and Functions Quick Tips]]'
next_courses:
  - '[[Excel- Financial Functions in Depth]]'
path_nav: '[{"path":"Advance Your Skills with Excel Formulas and Functions","position":3,"total":5,"prev":"Excel Formulas and Functions Quick Tips","next":"Excel- Financial Functions in Depth"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/microsoft-excel
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Excel-%20Lookup%20Functions%20in%20Depth.md)

![Excel: Lookup Functions in Depth](https://media.licdn.com/dms/image/v2/D4D0DAQFmPgikXok2PA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1732666105347?e=2147483647&amp;v=beta&amp;t=8IlepcWVjFYxCIELc_xxN0qsLH0SZheEHvP7T2_-RXI)

# Excel: Lookup Functions in Depth

> Leverage the power of Excel's lookup functions with expert Dennis Taylor. This course demystifies key lookup functions, enables you to skillfully retrieve and manipulate data, and empowers you to streamline your workflow and tackle complex data analysis tasks with confidence. Explore ways to optimize your data structures for efficient lookups and examine practical examples to integrate these funct

> [LinkedIn Learning](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728) | 1h 35m | 259K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Transform your Excel skills with in-depth lookup functions](#transform-your-excel-skills-with-in-depth-lookup-functions)
- [**1. Locating Data with MATCH, INDEX, and XMATCH Functions**](#1-locating-data-with-match-index-and-xmatch-functions) (3 videos)
  - [Locating data with the MATCH and XMATCH functions](#locating-data-with-the-match-and-xmatch-functions)
  - [Retrieving information by location with the INDEX function](#retrieving-information-by-location-with-the-index-function)
  - [Using the XMATCH and INDEX functions together](#using-the-xmatch-and-index-functions-together)
- [**2. VLOOKUP, HLOOKUP, and XLOOKUP**](#2-vlookup-hlookup-and-xlookup) (5 videos)
  - [Structuring data for use with lookup functions](#structuring-data-for-use-with-lookup-functions)
  - [Finding exact and approximate matches with VLOOKUP and HLOOKUP](#finding-exact-and-approximate-matches-with-vlookup-and-hlookup)
  - [Using the XLOOKUP function for exact matches](#using-the-xlookup-function-for-exact-matches)
  - [Using the XLOOKUP function for approximate matches](#using-the-xlookup-function-for-approximate-matches)
  - [New and expanded capabilities using XLOOKUP](#new-and-expanded-capabilities-using-xlookup)
- [**3. Finding Matching Data Without Using External Lists**](#3-finding-matching-data-without-using-external-lists) (2 videos)
  - [Finding table-like information within a function using the CHOOSE function](#finding-table-like-information-within-a-function-using-the-choose-function)
  - [Using the SWITCH function for formula-embedded selection](#using-the-switch-function-for-formula-embedded-selection)
- [**4. Other Functions with Lookup Capabilities**](#4-other-functions-with-lookup-capabilities) (4 videos)
  - [Extracting and counting unique entries using the UNIQUE function](#extracting-and-counting-unique-entries-using-the-unique-function)
  - [Using FILTER and CHOOSECOLS for multiple column retrieval](#using-filter-and-choosecols-for-multiple-column-retrieval)
  - [Use the SORT and SORTBY functions to create new lists](#use-the-sort-and-sortby-functions-to-create-new-lists)
  - [Use the INDIRECT function to return references specified by text strings](#use-the-indirect-function-to-return-references-specified-by-text-strings)
- [**5. Recently Introduced Functions with Lookup Capabilities**](#5-recently-introduced-functions-with-lookup-capabilities) (5 videos)
  - [CHOOSEROWS and CHOOSECOLS: Return lists with selected rows or columns](#chooserows-and-choosecols-return-lists-with-selected-rows-or-columns)
  - [TAKE and DROP: Copy from lists selecting or ignoring consecutive rows or columns](#take-and-drop-copy-from-lists-selecting-or-ignoring-consecutive-rows-or-columns)
  - [TOROW and TOCOL: Convert array data into a single row or column](#torow-and-tocol-convert-array-data-into-a-single-row-or-column)
  - [WRAPROWS and WRAPCOLS: Convert row or column data into an array](#wraprows-and-wrapcols-convert-row-or-column-data-into-an-array)
  - [VSTACK and HSTACK: Stack multiple arrays into a vertical or horizontal array](#vstack-and-hstack-stack-multiple-arrays-into-a-vertical-or-horizontal-array)
- [**Conclusion**](#conclusion) (1 videos)
  - [Your next steps in Excel](#your-next-steps-in-excel)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Transform your Excel skills with in-depth lookup functions](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/transform-your-excel-skills-with-in-depth-lookup-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/transform-your-excel-skills-with-in-depth-lookup-functions?u=76281980&t=0)** - [Dennis] Lookup functions change the way you use [[Microsoft Excel|Excel]].
>
> **[0:03](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/transform-your-excel-skills-with-in-depth-lookup-functions?u=76281980&t=3)** They open up new horizons as you work with formulas and functions.
>
> **[0:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/transform-your-excel-skills-with-in-depth-lookup-functions?u=76281980&t=7)** In this course, I'll be covering many of those functions, including the all important XLOOKUP, as well as FILTER, SORT, TAKE and DROP, and many more.
>
> **[0:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/transform-your-excel-skills-with-in-depth-lookup-functions?u=76281980&t=16)** These are some of the most important functions many Excel users need and use frequently.
>
> **[0:22](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/transform-your-excel-skills-with-in-depth-lookup-functions?u=76281980&t=22)** Hi, I'm Dennis Taylor.
>
> **[0:24](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/transform-your-excel-skills-with-in-depth-lookup-functions?u=76281980&t=24)** I've been working with Excel for many years, and I'm looking forward to showing you many of Excel's powerful and important lookup functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4)
> **Env Vars:** xlookup (1), filter (1), sort (1), drop (1)
> **Speakers:** - [dennis] (1)


### 1. Locating Data with MATCH, INDEX, and XMATCH Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Locating data with the MATCH and XMATCH functions](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=0)** - [Instructor] On this worksheet called Match in our chapter one file, we've got a short list over in column G of some ID numbers and we'd like to know if they exist in the much larger list over in columns A through E, specifically in column B.
>
> **[0:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=14)** This list is over 200 rows.
>
> **[0:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=16)** Does this ID number exist?
>
> **[0:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=19)** Now, possibly we could sort the list, maybe look for it that way, but we want to keep the list in this order that's alphabetized by employee name.
>
> **[0:27](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=27)** We have the option here of using two different functions, the match function, which has been in [[Microsoft Excel|Excel]] from the beginning or the recently introduced XMatch.
>
> **[0:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=36)** Ultimately XMatch is the better choice, but it's helpful to know both functions.
>
> **[0:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=40)** Let's start with match, equal match.
>
> **[0:43](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=43)** What is it we're looking for?
>
> **[0:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=44)** The data in cell G2, that 4027.
>
> **[0:48](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=48)** Comma, where are we looking?
>
> **[0:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=50)** We're looking at the data over in column B.
>
> **[0:52](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=52)** Now the list might grow, might shrink.
>
> **[0:54](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=54)** Let's just click column B so that allows for both possibilities without readjustment of the formula.
>
> **[1:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=60)** Comma, are we looking for a number that's closest to but less than or closest to but greater than?
>
> **[1:06](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=66)** In some scenarios, if you're looking through a list and looking for break points, that could be relevant, but we need an exact match here, so we put in zero and enter and we found it within that list and it's in the sixth position.
>
> **[1:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=81)** If you use a column reference as we're doing here, that sixth position does correspond to the row number and there you see it over in row six of column B, 4027.
>
> **[1:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=92)** I'm going to drag this using that fill hand on the lower right hand corner into the next cell.
>
> **[1:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=97)** Now sometimes we won't find it.
>
> **[1:39](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=99)** This entry is not in the list and we could certainly leave it there.
>
> **[1:43](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=103)** There's nothing wrong with that that raises a red flag.
>
> **[1:46](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=106)** If you wanted, you could for example include, and there are a couple of different approaches here, but a function like If Error, if this calculation or if this use of the function is going to cause an error, comma what do we want to display?
>
> **[2:02](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=122)** Within double quotes, perhaps a phrase like not found.
>
> **[2:06](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=126)** Anything you want within double quotes, right parenthesis enter.
>
> **[2:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=129)** If it is found, it gives us a correct answer.
>
> **[2:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=132)** Let's make sure this works on the cell above.
>
> **[2:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=134)** Again, dragging that fill handle in the lower right hand corner upward.
>
> **[2:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=137)** Yep, it does.
>
> **[2:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=139)** And into the next few it's working fine.
>
> **[2:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=141)** This wasn't found either, but this one was in row 27.
>
> **[2:25](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=145)** Quick check there, row 27, 2117, yep, that's the one.
>
> **[2:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=150)** Now, just as easily we could have used XMatch here and a couple of advantages.
>
> **[2:34](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=154)** A quick advantage is every time you type XMatch equal XM, just press tab.
>
> **[2:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=160)** No other function begins with those two letters, so that's handy.
>
> **[2:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=164)** What we're looking for, cell G6 comma and where we're looking, we're looking in column B.
>
> **[2:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=169)** And if it's exact match, that's all we need to do.
>
> **[2:52](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=172)** The default setting for XMatch is exact match.
>
> **[2:55](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=175)** We'll simply press enter.
>
> **[2:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=176)** It has those other capabilities that we saw with match, but we don't need them here, so enter, there we go.
>
> **[3:03](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=183)** And here too, we'll drag that down with a fill handle and we can make the same kind of adjustment here like we did with if error here.
>
> **[3:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=191)** On this next worksheet called XMatch, let's point out some advantages that we have, some additional capabilities using XMatch.
>
> **[3:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=199)** Not only can we do a standard top down search, we saw that with the match function, but we can do a bottom up search.
>
> **[3:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=206)** Here's a list, much larger, over 700 rows, and it's ordered chronologically.
>
> **[3:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=211)** We're showing day by day here the sales by these different persons here in different cities and the names of course are repeating often as are the cities.
>
> **[3:41](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=221)** The first sale from Cincinnati, nothing special here.
>
> **[3:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=224)** We just use XMatch as we have in that previous example, XM tab.
>
> **[3:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=229)** We're looking for Cincinnati.
>
> **[3:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=230)** This is in cell F1 right now.
>
> **[3:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=233)** Comma, where are we looking?
>
> **[3:54](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=234)** We're looking in column B.
>
> **[3:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=236)** Enter, there it is, it's in row 10 and you can see that pretty clearly by looking in column B.
>
> **[4:01](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=241)** That's the first occurrence of Cincinnati.
>
> **[4:03](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=243)** It's in row 10, but let's do a bottom up search here.
>
> **[4:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=247)** Same general idea.
>
> **[4:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=248)** In fact, I could drag this downward and then make an adjustment.
>
> **[4:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=254)** We're looking for Cincinnati, that's in F1.
>
> **[4:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=256)** We're looking in column B comma.
>
> **[4:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=260)** Now we're looking for here is an exact match and that's the implied for the default setting here.
>
> **[4:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=266)** We can put in either zero or simply put in a comma and jump to the next set of options.
>
> **[4:33](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=273)** This is the search last-to-first.
>
> **[4:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=276)** If we put in one, it's just doing a top down search.
>
> **[4:38](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=278)** Search last-to-first, you can type in the minus one or simply double click it and enter.
>
> **[4:45](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=285)** And the last occurrence of Cincinnati, remember we're looking at cell F1 there, column B is in row 755, so I'll click over in column B somewhere and press control down arrow and there's the end of the list at 769.
>
> **[4:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=299)** As we look upward here, the last time we see Cincinnati, there it is right there in row 755.
>
> **[5:06](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=306)** So the bottom up search is an advantage that we don't have with match.
>
> **[5:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/locating-data-with-the-match-and-xmatch-functions?u=76281980&t=312)** So whether it's match or XMatch, a lot of times you can use either one, but I think you can see XMatch is smoother, a little bit faster as you type it, and we have the advantage of doing a bottom up search as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is an  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Retrieving information by location with the INDEX function](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=0)** - [Instructor] [[Microsoft Excel|Excel]]'s INDEX function allows us to pull information out of an array of cells based on a row and column reference.
>
> **[0:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=7)** And in this worksheet, in column O, we've got a large list of items listed here, and they have to be shipped to different zones, we see that in column P, and they are of different sizes.
>
> **[0:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=18)** And based on the zone and size, we look in this list to the left.
>
> **[0:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=23)** It's been enhanced with the use of conditional formatting, so-called heat map.
>
> **[0:27](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=27)** So in row two, if an item is to be shipped to zone five, we'd be looking right here in row seven at these entries.
>
> **[0:34](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=34)** If it's size three, it's going to be 23.60.
>
> **[0:38](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=38)** And obviously we want to do this by way of a formula.
>
> **[0:41](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=41)** And it's that INDEX function that we'll be using here to pick up information from this list based on a row and column reference.
>
> **[0:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=49)** So the zones relate to the rows within the list, the sizes relate to the columns.
>
> **[0:54](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=54)** =INDEX, parenthesis, the location of that range right here.
>
> **[1:01](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=61)** And we'll be using that over and over in all the entries below, so pressing the function key F4 makes that reference absolute so that when we copy this, it will not change.
>
> **[1:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=72)** So that's the array reference, comma, now we need a row reference, and that's the zone entry found here in cell P2, comma.
>
> **[1:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=81)** And we also need a column reference.
>
> **[1:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=83)** Which column are we getting the data out of?
>
> **[1:25](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=85)** It's based on the size.
>
> **[1:27](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=87)** We see that in cell Q2.
>
> **[1:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=89)** Enter, and we've got the correct answer.
>
> **[1:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=92)** Always test this out.
>
> **[1:34](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=94)** Drag down a few cells.
>
> **[1:35](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=95)** How about this entry right here?
>
> **[1:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=97)** That's zone five, size two.
>
> **[1:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=100)** Looking at zone five right here.
>
> **[1:42](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=102)** And you can see size 2, 19.86.
>
> **[1:45](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=105)** Looking good.
>
> **[1:46](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=106)** We'll double-click that fill hand on the lower right-hand corner and copy these all the way down the column.
>
> **[1:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=113)** Now, another way to use INDEX does involve the use of an additional function called COUNTA.
>
> **[2:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=120)** If you've never used this, this can come in handy at times.
>
> **[2:03](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=123)** An obvious use of it here would be if we're saying, how many entries are in column T?
>
> **[2:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=130)** How many cells have data?
>
> **[2:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=131)** Numbers, texts, we don't care what it is.
>
> **[2:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=134)** Click column T.
>
> **[2:15](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=135)** What do we see here?
>
> **[2:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=136)** Enter.
>
> **[2:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=137)** There are 13 entries.
>
> **[2:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=139)** COUNTA, it simply counts the number of entries within a range.
>
> **[2:24](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=144)** So let's use the index function here, because what we want to know is as this list grows day by day by day, eventually we're going to have to scroll to see it, we always want to know what that last reporting data is.
>
> **[2:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=156)** In other words, what's the last entry here?
>
> **[2:38](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=158)** We also want to know the latest sales entry.
>
> **[2:41](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=161)** So we'll use INDEX here along with COUNTA.
>
> **[2:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=164)** Remember, INDEX function says I've got a list here.
>
> **[2:48](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=168)** I want to pull information out of it based on a row and column reference.
>
> **[2:52](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=172)** In this case, it's only a single column though.
>
> **[2:55](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=175)** We're looking at column T.
>
> **[2:57](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=177)** Comma.
>
> **[2:58](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=178)** The row that we want to get from here is based on a count of how many of those cells have data.
>
> **[3:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=184)** This is where COUNTA comes into play again.
>
> **[3:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=187)** COUNTA, we're also looking at column T.
>
> **[3:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=190)** Remember, at the moment that's going to be 13.
>
> **[3:13](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=193)** Comma, which column is it in?
>
> **[3:15](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=195)** Well, there's only one column, so we put in one.
>
> **[3:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=198)** But that's not even necessary.
>
> **[3:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=200)** We don't need to put that in, because it's implied.
>
> **[3:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=203)** Right parenthesis, Enter, we've got a correct answer.
>
> **[3:27](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=207)** And as a test of course, we'll go down to T13 here.
>
> **[3:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=211)** Drag that fill hand on the lower right-hand corner downward.
>
> **[3:35](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=215)** And what's happening up here, it's reporting that correctly.
>
> **[3:38](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=218)** Now, if I drag this rightward, we will get the correct answer, but it will look funny at first 'cause it'll copy the format.
>
> **[3:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=224)** But once we get here, I'll just take one of these formats.
>
> **[3:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=227)** And with the right mouse button, drag an edge on top of that, release it, copy here as formats only.
>
> **[3:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=233)** So that's correct too for the moment.
>
> **[3:55](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=235)** The last entry, in this case in column U, is 2,243.
>
> **[4:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=240)** But if we put in the new entry down in cell U14, 2,500, Enter, and we see that appearing there.
>
> **[4:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=248)** So one by one as we make entries here and the list grows and grows and grows, we will always know the last entry based on using the INDEX function this way.
>
> **[4:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/retrieving-information-by-location-with-the-index-function?u=76281980&t=258)** So the index function has some real power and capability, pulling information out of an array of data based on a row and column reference.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **Env Vars:** index (7), counta (5), t13 (1), u14 (1)
> **SQL:** index (7)
> **Versions:** 23.60 (1), 19.86 (1)
> **CLI Commands:** make (1)
> **UI Navigation:** double-click (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Using the XMATCH and INDEX functions together](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=0)** - [Instructor] On this worksheet called "INDEX with MATCH", we've got a list over in columns A through F.
>
> **[0:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=5)** And you could imagine in a real life scenario, we might have something like this much larger.
>
> **[0:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=9)** We've got months down the left side in column A.
>
> **[0:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=12)** We could just as easily have weeks, it would be about 52 or so for a year, and we could have different fiscal years.
>
> **[0:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=19)** So the list could be much larger.
>
> **[0:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=20)** Of course, we could have many, many more items across the top.
>
> **[0:24](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=24)** What we'd like to be able to do, and by way perhaps of a pick list, but in this example we'll simply do some typing, we want to be able to put in a Month here in cell J2, and then a Product and come up with a number.
>
> **[0:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=37)** Now of course, because the list is small, we can see the answers ahead of time.
>
> **[0:41](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=41)** We know this is going to be 6196.
>
> **[0:43](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=43)** We're looking in the row for May and the column for Desks, and sure enough, it's 6196.
>
> **[0:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=50)** But let's do this by way of a formula.
>
> **[0:52](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=52)** And again, imagine how we would use this if the list were much larger too.
>
> **[0:57](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=57)** We're going to be using a combination of INDEX and MATCH or perhaps even better, INDEX and XMATCH.
>
> **[1:03](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=63)** Let's begin with this idea.
>
> **[1:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=65)** We simply are saying we want to pull information from this list based on the Month, May, the Product, Desks.
>
> **[1:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=74)** Index, pulling information from a list.
>
> **[1:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=77)** That list is these yellow cells here, including by the way, a total and also a combined in column F.
>
> **[1:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=86)** Comma. Now we need to pull out information based on a row.
>
> **[1:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=90)** The row that we're interested in is May.
>
> **[1:33](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=93)** Now May, the [[Microsoft Word|word]] May, is in column A.
>
> **[1:35](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=95)** It's not part of our list, but if we use the XMATCH function, xm tab, remember, let's get that word May.
>
> **[1:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=104)** It's in cell J2. Comma.
>
> **[1:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=107)** Where are we looking for that?
>
> **[1:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=109)** It's going to be found in those cells A2 down to A14.
>
> **[1:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=113)** Remember, XMATCH returns when it's an exact match, a number that's the reference point within that list, so it will be the fifth entry.
>
> **[2:02](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=122)** We're not seeing that on the screen at the moment, but when you are writing functions, keep in mind that you can highlight a coherent portion of it.
>
> **[2:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=130)** And as you highlight this and release the mouse button, you'll see that's the number 5.
>
> **[2:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=134)** So that's going to give us a 5 there.
>
> **[2:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=136)** It finds the word May in that list in the fifth position.
>
> **[2:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=141)** So that's the row reference that we want. Comma.
>
> **[2:24](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=144)** How about the column reference?
>
> **[2:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=146)** The word Desk is what we're looking for here, but we'll use XMATCH again.
>
> **[2:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=150)** By the way, if you're using match, we'd be doing the same thing right here, but we'd have to follow with a comma zero.
>
> **[2:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=156)** Choose XMATCH, again, xm tab.
>
> **[2:39](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=159)** And we're looking for the word Desks, comma, and where we're looking for that?
>
> **[2:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=164)** In cells B1 over to F1. Right parenthesis.
>
> **[2:48](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=168)** Where is Desks in that list? It's in the third position.
>
> **[2:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=171)** Once again, you don't have to do this every time, but highlighting this, we can see right above, the number 3.
>
> **[2:57](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=177)** It's in the third position.
>
> **[2:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=179)** So, if we're looking at this index list here from B2 over and down to F14, if we pull out information from the fifth row in the third column, what do we get?
>
> **[3:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=190)** Enter 6196.
>
> **[3:13](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=193)** And of course we want to test this.
>
> **[3:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=196)** Instead of May up here, I'll put in February, F-e-b.
>
> **[3:22](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=202)** And sure enough, February, Desks, as we look at the entry there, 6491, there it is.
>
> **[3:28](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=208)** Same function, of course, being used the same way.
>
> **[3:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=211)** This number of course we don't want anymore.
>
> **[3:33](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=213)** And try this with a different product as well too.
>
> **[3:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=216)** How about Rugs?
>
> **[3:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=220)** So you can see one by one, as we change any of these entries here or any of these here, that our formula, combination of XMATCH and INDEX, are working properly.
>
> **[3:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=230)** Now another use of this could be something like what we see off to the right.
>
> **[3:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=233)** Imagine a huge list and we need to find out who these IDs belong to.
>
> **[3:58](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=238)** Now, possibly x lookup or v lookup could be better.
>
> **[4:01](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=241)** You might not have seen those just yet, but here too, we'll use INDEX.
>
> **[4:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=245)** And this time, as we use INDEX, we really are only looking in a single column.
>
> **[4:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=252)** We're looking in column M.
>
> **[4:13](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=253)** We want to return information from there.
>
> **[4:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=256)** We're looking for an employee name.
>
> **[4:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=258)** So here, we'll need a row reference, but we won't need a column reference.
>
> **[4:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=263)** But the row reference here, xm tab, is going to be based on looking up this ID number, comma, in column N.
>
> **[4:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=276)** And that's going to give us a certain number that represents the row number.
>
> **[4:39](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=279)** We don't need a column reference number here.
>
> **[4:42](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=282)** Now, we could put in comma 1 to indicate column, but it's not truly necessary here.
>
> **[4:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=287)** We do need a right parenthesis. I'll press ctrl enter.
>
> **[4:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=290)** There we go. Terry Anderson.
>
> **[4:52](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=292)** And that happens to be early in the list.
>
> **[4:54](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=294)** There he is, right there, in row 6.
>
> **[4:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=296)** There's the 4027 that we're seeing here.
>
> **[4:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=299)** So we'll double click to copy this down for the remainder of the cells.
>
> **[5:02](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=302)** And there it is.
>
> **[5:03](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=303)** One of these is not found, but here's another one close by, Brenda Barnett.
>
> **[5:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=308)** There she is right there. 8386.
>
> **[5:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=310)** Roy Butler, farther down here, 2117.
>
> **[5:13](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=313)** There he is right there. So this is working properly.
>
> **[5:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=317)** So here's the use of INDEX and MATCH, but we don't need a column reference in this example.
>
> **[5:22](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=322)** And earlier we saw how INDEX and MATCH, much more powerfully used here, could work to pull out information from this list.
>
> **[5:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=330)** And in a real life scenario, with more rows and more columns, you can imagine this being set up by way of a pick list using [[Data Validation]].
>
> **[5:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xmatch-and-index-functions-together?u=76281980&t=337)** So, powerful tools as we work with these together, INDEX and XMATCH.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (5), [[Data Validation]] (1)
> **Env Vars:** index (9), xmatch (7), match (4), a14 (1), f14 (1)
> **SQL:** index (9)
> **Analogies:** imagine (4)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. VLOOKUP, HLOOKUP, and XLOOKUP

[↑ Back to Table of Contents](#table-of-contents)

#### [Structuring data for use with lookup functions](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=0)** - [Lecturer] Before discussing actual lookup functions, the more powerful ones, XLOOKUP, VLOOKUP and HLOOKUP, it's important to note that many times when you're looking up information by way of these functions, you're looking for what's called an exact match.
>
> **[0:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=14)** If we've got two different lists here, column A through D, and another one column G through J, maybe these were gathered from different sources, different people, or maybe it's both your files, you found them on different worksheets.
>
> **[0:27](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=27)** Whenever you're trying to pull together information by way of lookup functions, it's always best whenever possible to put these lists on the same worksheet, and if possible, nearby.
>
> **[0:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=37)** Now, you can't always do that, but if you do, you eliminate that drudgery of having to work with awkward formulas that are on different sheets or in different workbooks.
>
> **[0:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=47)** In this list here, what we'd eventually be trying to do, for example, is expand this list on the left here and maybe initially include the salary, maybe even the rating, or even the department, or maybe all three.
>
> **[0:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=59)** We'll throw away the other list eventually maybe.
>
> **[1:02](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=62)** But we would be needing to make some comparison here to pull this together by way of the fact that both lists have ID numbers.
>
> **[1:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=70)** And that's what we refer to as an exact match.
>
> **[1:13](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=73)** In earlier movies, you might have seen how the X match function makes an exact match be the default setting.
>
> **[1:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=80)** And you'll see that also with XLOOKUP.
>
> **[1:22](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=82)** Now, another list off to the right here, and these two are common, but maybe depending upon your environment not as common.
>
> **[1:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=91)** Here's a list here.
>
> **[1:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=92)** We might be looking up the tax rate here.
>
> **[1:35](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=95)** And for this kind of a list here, what we'd be comparing that salary with is some kind of a tax table or tax list.
>
> **[1:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=104)** And here's one of those lists. It's organized vertically.
>
> **[1:48](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=108)** We'd be using VLOOKUP there.
>
> **[1:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=109)** This one's organized horizontally.
>
> **[1:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=111)** They have a exactly the same data.
>
> **[1:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=113)** I think for most people, the vertically oriented list is the one you'd likely be using.
>
> **[1:58](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=118)** But keep in mind here, we wouldn't be looking for an exact match.
>
> **[2:02](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=122)** If we're looking at the salary of 63,981, we don't see that in the list exactly.
>
> **[2:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=128)** We're looking for break points.
>
> **[2:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=130)** And sometimes you might have a more sophisticated use where it's multi-column, multi-row, you're looking up a salary, and then maybe based on dependence you're looking at another column.
>
> **[2:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=140)** Sometimes you might have a combination of these.
>
> **[2:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=143)** But in these examples, as we see here, the two sets of yellow cells there, we're looking up information in what we call an approximate match.
>
> **[2:33](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=153)** And the different times as you're looking up documentation for lookup functions, you'll see that term, an approximate match as opposed to what we suggested earlier with an exact match.
>
> **[2:43](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=163)** And so in these different uses of the lookup functions, keep in mind the idea, it's always best to have these lookup lists nearby the data, makes formula writing simpler and easier.
>
> **[2:54](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=174)** Another aspect of this that we're not seeing just yet is that some of you are familiar with the term table in [[Microsoft Excel|Excel]].
>
> **[3:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=180)** If we convert a list to a table, there are some advantages.
>
> **[3:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=184)** And we want to be careful when we use the [[Microsoft Word|word]] table, not to say that this is a table.
>
> **[3:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=189)** But also, and you'll see this in some of the subsequent examples, when we do convert a list to a table, we gain some advantages in terms of handling information, but it does introduce some problems with certain kinds of formulas.
>
> **[3:22](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=202)** So, we'll talk more about that in later movies.
>
> **[3:25](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=205)** But again, recapping some of the things here, just the idea of whenever you're using the lookup functions, sometimes you need an exact match, sometimes an approximate match.
>
> **[3:35](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=215)** And wherever possible, make sure the relevant cells that you're comparing or using for lookup purposes are on the same worksheet.
>
> **[3:43](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/structuring-data-for-use-with-lookup-functions?u=76281980&t=223)** And most of the time, you're likely to want to have your data oriented vertically for those lookup lists and for wherever possible, keep the information nearby.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** xlookup (2), vlookup (2), hlookup (1)
> **Warnings:** keep in mind (2), note that (1), be careful (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [lecturer] (1)

#### [Finding exact and approximate matches with VLOOKUP and HLOOKUP](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=0)** - [Instructor] On this worksheet called ExactMatch, we've got some ratings in column E, but we want to convert them into a numerical score based on that list over in columns A and B.
>
> **[0:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=10)** You'll see the same list off to the right.
>
> **[0:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=12)** Now, we could be using VLOOKUP or HLOOKUP, and I think almost immediately people would say, "Well, the list to the left is a lot easier to read and work with."
>
> **[0:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=21)** VLOOKUP, think of V for vertical, means we're going to be comparing this entry here with the leftmost column.
>
> **[0:28](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=28)** By definition, VLOOKUP means compare a value with the leftmost column of a list somewhere.
>
> **[0:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=36)** Equal, as you type it, you can press VL + Tab.
>
> **[0:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=40)** We're looking up the [[Microsoft Word|word]] fair, comma, over in these cells here.
>
> **[0:45](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=45)** If there's nothing else in these columns, we can simply drag across columns A and B.
>
> **[0:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=50)** That's easier to read.
>
> **[0:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=51)** Comma.
>
> **[0:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=53)** Now, it's a little bit strange at first, if you've never worked with VLOOKUP, we indicate the column index number.
>
> **[1:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=60)** What does that mean?
>
> **[1:01](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=61)** Based on what we've highlighted, and we've highlighted data from two different columns, we put in the number two because we want to get our answers out of the second column reading from left to right.
>
> **[1:13](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=73)** Comma, if this is an exact match, we put in the word FALSE.
>
> **[1:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=79)** Now you can double click it or type it into place, doesn't have to be uppercase, or you could use zero.
>
> **[1:24](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=84)** I don't think any one of these is exactly obvious, but that's it.
>
> **[1:27](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=87)** Enter, we have a correct answer.
>
> **[1:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=90)** If we copy this down the column, copy it into a few cells, it's going to work.
>
> **[1:34](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=94)** Now one of those entries over there might not be in the list, and that's what we get when that happens.
>
> **[1:39](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=99)** You can leave this here, it certainly sends up a red flag.
>
> **[1:42](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=102)** We'd make an adjustment probably, but we could work around using IF functions to display something else, but nevertheless, that's working just fine.
>
> **[1:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=110)** If you do use exact addresses, for example, like this, you do need to make sure that's absolute before copying it.
>
> **[1:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=119)** Harder to read than that AB, but nevertheless, that's going to work just as well, and we could copy that down the column in the same way.
>
> **[2:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=127)** If we're using the other list to the right, we'd be using HLOOKUP, and we'd have to refer to that list exactly, that's over here, and that would have to be absolute as well, function key F4, and the number two would stay the same, but it would have a different meaning.
>
> **[2:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=143)** Here we're looking up the word fair across the top row of that list, getting our answers out of the second row.
>
> **[2:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=150)** So here the two means the second row.
>
> **[2:33](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=153)** Now, for approximate matches, it's easier.
>
> **[2:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=157)** It's almost as if when these functions were designed back in the late 1980s, maybe the idea of an approximate match, which we need here was more common.
>
> **[2:46](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=166)** What are we about to do here?
>
> **[2:48](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=168)** We want to look up this salary in the list here and come up with the appropriate tax rate and the way this is going to work is this 63,981 is not reaching the 70,000 level, therefore it will be 3.5%.
>
> **[3:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=187)** Now by definition, VLOOKUP means take a value, always look in the left column of the list, but in this case of an approximate match, this must be in ascending order.
>
> **[3:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=198)** If these are somehow out of sync or if you had 80,000 sticking right in there somewhere, you're going to get weird answers, but VLOOKUP is shorter now, as we work with it here for an approximate match, equal VL + Tab, we're looking up this salary right here in cell C2, comma.
>
> **[3:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=217)** Here's our list off to the right.
>
> **[3:39](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=219)** We could highlight it this way, press the function key F4 to make sure that's an absolute address, comma, which column of the list are we getting our answers from?
>
> **[3:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=229)** Reading from left to right, the second column, and that's all we need to do.
>
> **[3:54](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=234)** Nothing about ExactMatch here, not needed.
>
> **[3:57](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=237)** We need not put anything else in here.
>
> **[3:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=239)** Enter, we've got it.
>
> **[4:02](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=242)** Copy it down the column, and you'll see, check out any one of 'em.
>
> **[4:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=245)** The other answers are correct, for example, this one here.
>
> **[4:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=249)** We could do the same thing with the horizontal table here and as you saw on the previous example, same idea, this would be an H.
>
> **[4:15](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=255)** We'd have a different range of course for our LOOKUP table over there, beginning in cell J1 and moving right.
>
> **[4:22](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=262)** But the two there, again, would mean second row, so it could be using HLOOKUP there but I think you can see, again, when we're comparing the two, the vertically-oriented table was easier to work with and here too, like we saw earlier, we could be using a column reference here as I click and drag across columns G and H, it's going to be easier to read, and we can copy that down column D easily, as long as we know for sure there's no data below this, so that's going to work just fine.
>
> **[4:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-exact-and-approximate-matches-with-vlookup-and-hlookup?u=76281980&t=291)** So I've seen different examples here of using VLOOKUP, occasional example with HLOOKUP as well for an ExactMatch, seemingly more awkward to work with and an approximate match.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3)
> **Env Vars:** vlookup (7), hlookup (4), false (1), lookup (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (2)
> **Versions:** 3.5 (1)
> **Cross-References:** as you saw (1)
> **Speakers:** - [instructor] (1)

#### [Using the XLOOKUP function for exact matches](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=0)** - [Instructor] [[Microsoft Excel|Excel]]'s XLOOKUP function was introduced in late 2019, and for many Excel users, it's been a real game changer.
>
> **[0:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=8)** Not only is it easier to work with than either VLOOKUP or HLOOKUP, it encompasses all the capabilities of those functions and it's got a few more attributes as well.
>
> **[0:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=19)** Some of these you'll see in the blue panel listed below here.
>
> **[0:22](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=22)** Also, as we work with this, you'll see some additional capabilities you see in that yellow box to the right there.
>
> **[0:28](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=28)** We'd like to take the ratings that we see in column E here on this worksheet called XLOOKUP Exact.
>
> **[0:35](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=35)** We want to convert that into a numerical score.
>
> **[0:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=37)** You might have seen something similar in the previous movie as we talked about how VLOOKUP and HLOOKUP can handle this kind of a situation.
>
> **[0:45](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=45)** =xl, just press Tab, it pops it into place.
>
> **[0:48](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=48)** What are we looking up?
>
> **[0:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=50)** This value Fair.
>
> **[0:52](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=52)** And where are we trying to find this?
>
> **[0:54](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=54)** It's in column B.
>
> **[0:55](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=55)** Now, whether it's in column B or column A or any other column, we don't have to worry about whether this is in the left column of a list somewhere.
>
> **[1:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=64)** We're just looking this up, see if we can find it over in column B.
>
> **[1:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=69)** So we indicate just by clicking column B.
>
> **[1:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=71)** So in this case too, you want to make sure nothing is below this anywhere in column B.
>
> **[1:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=76)** We're looking in column B comma, and when we find a match, we want to get the data out of column A.
>
> **[1:22](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=82)** And that's all we need to do.
>
> **[1:24](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=84)** If this is an exact match, that's it, we found it, 71.
>
> **[1:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=89)** Drag it down a few cells.
>
> **[1:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=90)** It's working fine.
>
> **[1:33](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=93)** Same issue that we saw with VLOOKUP.
>
> **[1:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=96)** If the item is not in the list, we get N/A automatically.
>
> **[1:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=100)** However, with XLOOKUP, we've got a fourth argument, a potential fourth argument, comma, if not found.
>
> **[1:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=107)** We can provide a message if not found.
>
> **[1:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=110)** There's nothing truly wrong with that N/A, but within double quotes, this is how typically we would do this, just put in a message, maybe simply not found or incorrect, something like that within double quotes.
>
> **[2:01](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=121)** That's it. Works just fine there.
>
> **[2:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=124)** And we can drag it downward and then drag it upward just to make sure it's working for all cases here.
>
> **[2:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=131)** There we are.
>
> **[2:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=132)** So we have that optional argument if needed.
>
> **[2:15](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=135)** Now, I wouldn't recommend that we use the horizontally oriented table, but we could do that too.
>
> **[2:22](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=142)** In other words, this takes the place of HLOOKUP.
>
> **[2:25](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=145)** So where are we looking here?
>
> **[2:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=146)** We're again looking at that [[Microsoft Word|word]] Fair in cell E2, but instead of looking in column B, now we're looking in these cells right here, H2 over to N2.
>
> **[2:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=157)** And when we find it, the answer there, we would look into the corresponding cells above it.
>
> **[2:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=164)** And same general idea.
>
> **[2:45](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=165)** And we're going to get the same answers.
>
> **[2:48](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=168)** So it's a lot more flexible as we work with the data this way.
>
> **[2:52](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=172)** And what I didn't do there and should have, now we'll correct it, this needs to be an absolute address.
>
> **[2:58](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=178)** So we can't use column letters the way we did for the vertical list.
>
> **[3:01](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=181)** So highlight these, press the function key F4, highlight these, press the function key F4, Control + Enter to keep it in place, drag downward, and we've got our answers in the same way.
>
> **[3:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=194)** So we're encompassing the idea that we can do what VLOOKUP can do, we can do what HLOOKUP can do, and furthermore, we can also provide an answer when not found much more logically here without using additional functions.
>
> **[3:28](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=208)** So you can begin to see the power of XLOOKUP.
>
> **[3:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=210)** You might say that its native mode, its default mode is exact match.
>
> **[3:35](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-exact-matches?u=76281980&t=215)** And we saw how simple that was to set up, particularly when working with a vertical list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** xlookup (4), vlookup (4), hlookup (4)
> **CLI Commands:** find (4), make (2)
> **Definitions:** is an  (1), in other words (1)
> **Cross-References:** we talked about (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Using the XLOOKUP function for approximate matches](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=0)** - [Instructor] On this worksheet called XLOOKUP Approximate, in column D, we'd like to come up with the tax rate for each of the people listed over in column A.
>
> **[0:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=8)** Their salaries are in column C, and based on the salary and that list that we see over to the right in columns G and H, we want to come up with the appropriate tax rate.
>
> **[0:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=17)** If we were using VLOOKUP, we'd have to rearrange the left to right order of these columns.
>
> **[0:22](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=22)** But with XLOOKUP, it makes no difference.
>
> **[0:25](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=25)** Keep in mind too, that when you are using XLOOKUP, you need to go to an additional set of arguments.
>
> **[0:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=32)** With earlier examples of XLOOKUP, we saw how we could use a fourth argument, if not found, it's optional.
>
> **[0:38](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=38)** But that fifth argument, it's called match mode, is what we'll be using here.
>
> **[0:42](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=42)** So for an approximate match, XLOOKUP equal XL tab.
>
> **[0:48](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=48)** What are we looking up?
>
> **[0:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=50)** The salary in cell C2.
>
> **[0:52](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=52)** 63, 981.
>
> **[0:54](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=54)** Comma.
>
> **[0:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=56)** Where are we looking to find this?
>
> **[0:58](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=58)** Now remember, this is not going to be an exact match.
>
> **[1:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=60)** We're looking in column H.
>
> **[1:03](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=63)** And when we find the match, the appropriate match, what do we want to return?
>
> **[1:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=67)** Comma, the data in column G, the corresponding data.
>
> **[1:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=72)** Comma.
>
> **[1:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=74)** If not found, we don't have to use this argument at all.
>
> **[1:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=78)** But if we don't find it, we could put in double quote not found, or any text we want.
>
> **[1:22](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=82)** If we simply want to ignore it, we do have to account for it by putting in a comma 'cause we want to move to the next option, which is the match mode.
>
> **[1:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=91)** And what we're trying to find here is an exact match or next smaller item.
>
> **[1:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=97)** That's exactly what VLOOKUP does.
>
> **[1:39](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=99)** There, it does it a bit more efficiently, you might say.
>
> **[1:41](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=101)** You don't have to make this kind of a choice, but that's what we have to do here if we want this to work just like VLOOKUP.
>
> **[1:48](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=108)** And if we're looking at the numbers momentarily, that salary of 63,981, the logic that we're using here is we're looking down column H until we see a value that's too large.
>
> **[2:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=120)** It's a reminder too that these numbers in column H must be in ascending order if you want this to work properly.
>
> **[2:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=127)** So the logic is we approach looking down the column, 70,000 is too large, the match is at 60,000.
>
> **[2:15](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=135)** Then we're going to get our answers out of the column to the left in column G.
>
> **[2:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=140)** So we're looking for an exact match or next smaller item.
>
> **[2:24](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=144)** And we don't need to use the sixth argument here, the search mode, we simply press Enter.
>
> **[2:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=149)** And there it is, 3.5%.
>
> **[2:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=151)** Let's drag this down a few cells just to make sure.
>
> **[2:34](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=154)** And one by one, just pick this one for the moment, 88,000, hasn't reached the 90,000 level, therefore it's 4.5% and that's working properly too.
>
> **[2:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=164)** If, for some reason, you had a scheme whereby you had to pick the next larger entry, you would be using just the one without the minus.
>
> **[2:52](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=172)** And if we change the left to right order of these, if I drag column G to the right, column H, I'll just select column H, point to the right, hold down Shift, drag it to the right, function works perfectly, and it made the automatic adjustment.
>
> **[3:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=187)** So when you're using XLOOKUP for an approximate match, you need to put in the additional argument here.
>
> **[3:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=192)** You can step over the if not found argument, but at least put in a comma there for it.
>
> **[3:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=197)** And then minus one if you want this to work the way VLOOKUP does.
>
> **[3:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-xlookup-function-for-approximate-matches?u=76281980&t=201)** And I think most of the time in these lookup kind of scenarios, that's the number you're more likely to use.

> [!info]- Semantic Content
>
> **Env Vars:** xlookup (6), vlookup (4)
> **CLI Commands:** find (4), make (2)
> **Versions:** 3.5 (1), 4.5 (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [New and expanded capabilities using XLOOKUP](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=0)** - [Narrator] In earlier movies in this chapter, we talked about the capabilities of XLOOKUP matching all possibilities of using VLOOKUP and HLOOKUP.
>
> **[0:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=8)** But there are some additional capabilities as well.
>
> **[0:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=11)** We can do what's referred to as a wild card search.
>
> **[0:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=14)** We can also do a bottom up search.
>
> **[0:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=17)** In columns, D, E, and F, we've got a list.
>
> **[0:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=19)** These licenses that are being used here have been altered over the years in terms of the scheme being used.
>
> **[0:24](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=24)** We're looking for licenses that have the letter P.
>
> **[0:27](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=27)** We want to find the first one.
>
> **[0:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=29)** Now, quick eyeballing here, you can find it right here.
>
> **[0:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=31)** But imagine a real life scenario where maybe these licenses are a lot bigger or there are thousands of them, trying to find the first license that has the letter P in it.
>
> **[0:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=40)** So we'll be using the wild card option.
>
> **[0:43](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=43)** At the bottom of the screen here in this orange panel, you'll see as a reminder the six different arguments that we could be using with XLOOKUP.
>
> **[0:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=51)** Remember, only the first three are required.
>
> **[0:54](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=54)** So in cell A3 equal [[Microsoft Excel|Excel]] tab.
>
> **[0:58](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=58)** Now, what are we looking for?
>
> **[1:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=60)** If you've not worked with wild cards, a little bit of background here.
>
> **[1:03](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=63)** We are looking for within double quotes, the letter P, but it might be preceded by one or more characters.
>
> **[1:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=71)** So we use the asterisk symbol as a substitute for what could be zero characters, one character, or a few characters.
>
> **[1:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=79)** We're indefinite there.
>
> **[1:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=80)** We put in the letter P and we also follow it with an asterisk as well, too.
>
> **[1:25](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=85)** So if the letter P occurs anywhere in there, we embed that asterisk P asterisk within double quotes.
>
> **[1:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=92)** That's what we're looking for.
>
> **[1:33](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=93)** That's a wild card construction.
>
> **[1:35](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=95)** Comma, where are we looking?
>
> **[1:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=97)** We're looking in column F, comma, and what do we want to return?
>
> **[1:41](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=101)** The employee's name, I'll click column D, comma.
>
> **[1:45](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=105)** But the fourth argument in XLOOKUP is if not found, we don't need to provide a message.
>
> **[1:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=110)** We could put in phrase like "not found" if we don't find it.
>
> **[1:54](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=114)** We could ignore that by simply putting in a comma.
>
> **[1:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=116)** Is this an exact match? No, not this time.
>
> **[1:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=119)** It's a wild card match.
>
> **[2:01](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=121)** We put in the number two and the sixth argument search mode, we don't have to worry about that.
>
> **[2:06](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=126)** It's the one, we could put that in.
>
> **[2:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=128)** It's the default anyway.
>
> **[2:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=129)** We'll simply ignore it and press enter.
>
> **[2:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=132)** Jennifer Keith, we see her name right here, but off to the right, that's the first occurrence in any of these entries here where we see the letter P.
>
> **[2:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=140)** A quick test here, I'll double click on the second one.
>
> **[2:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=143)** Put in a letter P out there.
>
> **[2:25](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=145)** Maybe you'll make it the third character enter and that name will appear, Albert Cole, because now we see the letter P there.
>
> **[2:34](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=154)** Now, a bottom up search.
>
> **[2:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=156)** You might have seen something similar here in the XMATCH function.
>
> **[2:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=160)** This is a chronological list here.
>
> **[2:42](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=162)** We want to know the last time that Karen Roy had a sales entry here.
>
> **[2:46](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=166)** These are sales amounts in column L.
>
> **[2:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=169)** So the names are recurring here.
>
> **[2:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=170)** Here's her name again down here as well.
>
> **[2:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=173)** So we're going to do a bottom up search.
>
> **[2:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=176)** Again, XLOOKUP equal Excel tab.
>
> **[2:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=179)** And we are looking for, and I'll just pick her name out of the list here right now.
>
> **[3:03](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=183)** There we are, Karen Roy, comma, but we're looking in column J for her name, comma, but we don't want to be looking top down.
>
> **[3:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=196)** Now, when we find her name, we do want to return the date.
>
> **[3:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=198)** So we put in column K, comma, but the if not found argument, like in the previous example, we'll just skip over that.
>
> **[3:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=206)** We're not providing a message here, like "not found".
>
> **[3:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=209)** Let's just put in another comma to ignore that.
>
> **[3:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=211)** And the match mode here, it's an exact match.
>
> **[3:35](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=215)** We can put in zero or a comma either way, makes no difference, comma.
>
> **[3:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=220)** But the last argument here, the search mode here, minus one, we want to search from the last, that's bottom up, minus one, as it is with XMATCH as well too.
>
> **[3:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=231)** Enter here, and we find a sales date.
>
> **[3:55](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=235)** When you work with dates, sometimes it's awkward, you don't always get the appropriate format.
>
> **[3:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=239)** So I'll click on one of the entries over here and with the right mouse button, drag this on top of this entry here and copy here is formats only.
>
> **[4:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=248)** So it's December 29th and we'll confirm that by clicking in column K, control down arrow.
>
> **[4:15](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=255)** Here's the bottom of the list.
>
> **[4:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=256)** Where's the last time we see Karen Roy? It's right here.
>
> **[4:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=260)** It's on December 29th. So we did a bottom up search.
>
> **[4:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=263)** Something you cannot do with VLOOKUP and HLOOKUP.
>
> **[4:27](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=267)** Now another capability which you can do with the other functions, but often it's ignored, is we want to focus either one by one or for the moment on just one person here, Kevin Aguilar, what his totals are.
>
> **[4:41](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=281)** So we've got a number there already.
>
> **[4:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=284)** In other words, if we were to highlight these entries here, that is 216, you'll see the total at the bottom of the screen in the status bar.
>
> **[4:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=291)** If you don't see those numbers in the status bar, do a right click, check all these numbers.
>
> **[4:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=296)** It's going to be handy in the future as well, too.
>
> **[4:58](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=298)** So let's actually get rid of this and use XLOOKUP for this, equal Excel tab.
>
> **[5:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=304)** And we are looking for Kevin Aguilar, comma, in column T.
>
> **[5:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=309)** But what do we want to return? Columns U through Y.
>
> **[5:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=314)** Now if we simply do this and press enter, we will get not only an answer, but five answers, because we've asked for a return here of data from five consecutive columns, columns U through Y, and that by itself, of course, could be helpful.
>
> **[5:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=329)** On the other hand, we might want to total these or average these.
>
> **[5:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=332)** I'll just put the sum function to surround the XLOOKUP that we have already and right parenthesis, enter.
>
> **[5:39](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=339)** So not only can we tabulate data from different locations here, we can do this on an individual basis or use different functions.
>
> **[5:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/new-and-expanded-capabilities-using-xlookup?u=76281980&t=347)** And earlier we saw some of the extended capabilities of XLOOKUP, searching up from the bottom and also using wild cards.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3)
> **Env Vars:** xlookup (7), vlookup (2), hlookup (2), xmatch (2)
> **CLI Commands:** find (6), make (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (1), in other words (1)
> **Cross-References:** we talked about (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)


### 3. Finding Matching Data Without Using External Lists

[↑ Back to Table of Contents](#table-of-contents)

#### [Finding table-like information within a function using the CHOOSE function](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=0)** - [Instructor] The function choose is a lookup function, but it's different in the others in that it does not require an external list.
>
> **[0:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=7)** And at certain points as you're using [[Microsoft Excel|Excel]], that could be really handy.
>
> **[0:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=12)** On this worksheet, we've got some dates in column A.
>
> **[0:15](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=15)** And all we're trying to do, relatively straightforward, is to calculate the quarter.
>
> **[0:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=19)** And depending upon your environment or where you work, maybe it's just better to use a formula.
>
> **[0:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=23)** There's a formula here in cell B2.
>
> **[0:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=26)** Get rid of that leading space and press enter.
>
> **[0:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=29)** We're calculating the quarter, fourth quarter, December.
>
> **[0:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=32)** Done that way.
>
> **[0:33](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=33)** That could be totally acceptable and exactly what you need.
>
> **[0:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=36)** No external table, not even using a lookup function.
>
> **[0:39](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=39)** Another way to do it, down here in cell B8, we see the INT function.
>
> **[0:43](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=43)** That means integer.
>
> **[0:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=44)** What both of these calculations have in common is that they are using another function called month that pulls out the number of the month.
>
> **[0:52](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=52)** That answer, the result there, can only be 1 through 12.
>
> **[0:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=56)** Now, a lot of people would use the next lookup function.
>
> **[0:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=59)** I might.
>
> **[1:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=60)** It's compact, but it does require an external table, like we see over in columns F and G.
>
> **[1:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=65)** And so we're simply looking up the number of a month.
>
> **[1:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=68)** It's over there in column A.
>
> **[1:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=69)** First example, that's the 12th month.
>
> **[1:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=72)** We're looking in column G to find a 12.
>
> **[1:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=74)** And when we do, we move into column F and pick up that answer.
>
> **[1:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=78)** And that's straightforward and good documentation as well.
>
> **[1:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=81)** The choose function, on the other hand, doesn't need that table, but it is longer.
>
> **[1:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=86)** And sometimes using this function is really unwieldy.
>
> **[1:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=90)** But here's how this works.
>
> **[1:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=91)** Here we're saying, "Go get that month out of the data over in column A."
>
> **[1:35](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=95)** And what we pick up here can only be the numbers 1 through 12.
>
> **[1:39](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=99)** And so we have to provide 12 different answers.
>
> **[1:42](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=102)** When this result is one, in other words, when it's January, we want to put in one for first quarter.
>
> **[1:48](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=108)** When this result is two, we go to the second entry here.
>
> **[1:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=111)** We also put in a one because February is in the first quarter as well too.
>
> **[1:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=116)** And March is first quarter.
>
> **[1:57](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=117)** I think you get the idea.
>
> **[1:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=119)** April, second quarter, and so on and so on and so on.
>
> **[2:02](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=122)** It doesn't use an external list, so that's its advantage.
>
> **[2:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=125)** And again, not terribly unwieldy, but I think you could imagine in certain other situations how it might be.
>
> **[2:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=131)** The problem sometimes when you're using this function is what if the numbers that we're gathering out of some other calculation are much larger than 1, 2, 3, or just up to 12, something like that?
>
> **[2:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=143)** What if they're in the hundreds or thousands?
>
> **[2:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=146)** We have to do some work to make that work coherently.
>
> **[2:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=149)** And here's an example here of how this doesn't work so well and X lookup function is going to be a lot better.
>
> **[2:35](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=155)** We've got some salaries listed over in column J.
>
> **[2:38](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=158)** We're trying to come up with a salary level based on the data that we're seeing right here over in columns P and Q.
>
> **[2:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=164)** Now, we can use the choose function to get there without relating to this table.
>
> **[2:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=169)** But with X lookup, it's much more direct.
>
> **[2:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=171)** And I'm using it right here.
>
> **[2:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=173)** We're looking up the salary level over in column J.
>
> **[2:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=176)** J2, 96,000.
>
> **[3:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=180)** And we're looking in column Q to find it.
>
> **[3:02](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=182)** We don't find it exactly.
>
> **[3:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=184)** But when we find something close enough, we'll come into column P to get our results.
>
> **[3:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=189)** But the -1 here indicates that we're looking until we see a value.
>
> **[3:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=194)** Is this value too large?
>
> **[3:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=196)** Yes, it is.
>
> **[3:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=196)** Is that too large?
>
> **[3:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=197)** Yes, it is.
>
> **[3:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=198)** Is this one?
>
> **[3:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=199)** No, it isn't, so that's our answer, column C.
>
> **[3:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=201)** And that works reasonably straightforwardly.
>
> **[3:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=203)** But here's what we'd have to do with choose.
>
> **[3:28](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=208)** And I think we've reached the point here, in this example, at least, that this is probably too unwieldy for most people.
>
> **[3:34](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=214)** Again, its advantage, if any, it doesn't require the table.
>
> **[3:38](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=218)** We're not using the data in columns P and Q.
>
> **[3:41](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=221)** We don't need that at all.
>
> **[3:42](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=222)** We're coming up with our answer this way.
>
> **[3:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=224)** And there are probably a couple of other ways to do this too.
>
> **[3:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=227)** But the key thought here is when you use the choose function, that initial value has to be somewhere in the range of the lower numbers.
>
> **[3:55](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=235)** Because when that's equal to one, the answer's G.
>
> **[3:58](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=238)** When it's equal to two, the answer's F, and so on and so on and so on.
>
> **[4:02](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=242)** So a bit unwieldy there.
>
> **[4:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=245)** Now another bit of flexibility.
>
> **[4:06](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=246)** I'll go back to this previous list that we saw earlier that's going to be handy if you're using this for calculating quarters.
>
> **[4:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=252)** If you work in an environment where the fiscal year begins in July, then when January, in other words, when this value is one, our answer's going to be three.
>
> **[4:24](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=264)** So if your fiscal year begins in July, you want to take these numbers right here.
>
> **[4:28](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=268)** I'll just press Ctrl + X and put them at the beginning.
>
> **[4:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=272)** Ctrl + V and put in that extra comma.
>
> **[4:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=276)** And then get rid of the comma at the end.
>
> **[4:38](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=278)** So if it's January, February, March, it's in the third quarter, April, May, June, fourth quarter, if your fiscal year begins in July.
>
> **[4:46](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=286)** And if you work for the federal government in the United States, fiscal year begins in October.
>
> **[4:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=290)** Shift these all to the right again and put the twos at the beginning.
>
> **[4:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=293)** So I think you can see an advantage there too.
>
> **[4:55](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=295)** But nevertheless, it's a function that from time to time you might have a need for.
>
> **[4:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/finding-table-like-information-within-a-function-using-the-choose-function?u=76281980&t=299)** It does not require an external list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** find (4), make (1)
> **Definitions:** in other words (2), is a  (1)
> **Cross-References:** coming up (1), go back to (1)
> **Env Vars:** int (1)
> **UI Navigation:** go to (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Using the SWITCH function for formula-embedded selection](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=0)** - [Instructor] [[Microsoft Excel|Excel]]'s SWITCH function is not truly a lookup function.
>
> **[0:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=4)** If you were searching for it on the Formulas tab in the ribbon, you'd find it under Logical.
>
> **[0:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=9)** SWITCH.
>
> **[0:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=10)** But it's very similar to the CHOOSE function, and it's often used with lookup type capabilities, and its advantage, as with CHOOSE is, we don't need an external list somewhere to pick up information from.
>
> **[0:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=23)** On the other hand, from time to time, it's going to be really unwieldy.
>
> **[0:27](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=27)** Sometimes it's also compared with the IFS function.
>
> **[0:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=30)** Let's first look at a simple example with XLOOKUP.
>
> **[0:33](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=33)** We've got a list here in columns, D, E, and F.
>
> **[0:35](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=35)** We're trying to come up with the scores and we're using, for example, in cell F2 here, the XLOOKUP function to look up the [[Microsoft Word|word]] Fair.
>
> **[0:43](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=43)** We're looking that up over in column B, then returning the number that's next to it, which is 71.
>
> **[0:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=49)** We also have the option of XLOOKUP of returning a text entry Not Found when the match doesn't work.
>
> **[0:57](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=57)** Now, we can do this with a SWITCH function too, and if there is an advantage, it's that idea that we don't need the data over in columns A and B, it's all going to be embedded within the function, and surely you don't want to watch me type this, so I've prepared it ahead of time.
>
> **[1:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=72)** But this is how it works, and we cannot use CHOOSE in this example because we're working with text, not numerical information.
>
> **[1:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=80)** We're looking at the entry in cell E2.
>
> **[1:22](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=82)** Now, it happens to be the word Fair, so with the SWITCH function, we begin with something we're trying to evaluate.
>
> **[1:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=89)** This case, it's in cell E2, the word FAIR, and the logic is as we're looking there, is it equal to Excellent?
>
> **[1:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=96)** Well, if it is, we're going to put in a 99.
>
> **[1:38](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=98)** It's not, so we go onto the next test.
>
> **[1:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=100)** If it is, we put in a 92, if not, we keep checking to the right.
>
> **[1:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=104)** So, every other one of these is a possible entry, and if we don't find any of them at the very end, that's what we put in.
>
> **[1:52](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=112)** So, if this were not to work properly, if we didn't find that F, A, I, R, then we put in a 50.
>
> **[1:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=119)** So, I'll press Enter here, we are getting the answer 71, the same as this, and as I drag it downward after moving this panel out of the way, click and drag from that corner there, you'll see we're going to get the same answers, but here we put in a 50.
>
> **[2:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=132)** Now, we could, or we do have the option of putting in that same text entry if we wanted to, instead of the 50, we could put in text like Not Found, but notice how lengthy it is, and that's the issue, that's the trade off.
>
> **[2:25](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=145)** If you wanted to use SWITCH, we could get rid of columns A and B.
>
> **[2:28](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=148)** I could do that right now just as a test we can undo it.
>
> **[2:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=151)** I'll delete columns A and B, and all of our XLOOKUP entries of course fail, but this is still working just fine.
>
> **[2:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=160)** Doesn't require any external data.
>
> **[2:43](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=163)** Let me escape and press Control-Z to undo that last action.
>
> **[2:46](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=166)** So, at different times when you're working with this too, and you may have seen examples in the previous movie where we used CHOOSE to calculate the quarter, which is relatively straightforward or a bit broad, but here's where a SWITCH you might say it works, but that's really stretching it a bit, and I think if you work with this every day, maybe that you're right on top of this, but how is this working And just a brief explanation.
>
> **[3:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=191)** We're calculating based on the month that we pull out of cell J2.
>
> **[3:15](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=195)** First example here, that would be December.
>
> **[3:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=198)** If it's equal to one, our answer's one.
>
> **[3:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=201)** If it's two meaning February, it's also a one meaning first quarter.
>
> **[3:25](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=205)** Three, March, first quarter, and so on.
>
> **[3:27](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=207)** So, every other one of these is the result and the next one is the value, and I think you can see how quickly that gets out of hand.
>
> **[3:34](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=214)** One other example of this too, and again, I think I'm making the case maybe for not using it, but at the same time, you can see at different times where it could make sense.
>
> **[3:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=224)** This one involves some calculation using the INT function.
>
> **[3:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=227)** And once again, major advantage in some scenarios is we don't need any external list to refer to, we do it by way of calculation.
>
> **[3:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=236)** So, it has a certain appeal for those who like some problem-solving challenges.
>
> **[4:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-the-switch-function-for-formula-embedded-selection?u=76281980&t=240)** Nevertheless, the SWITCH function at different times, and I think particularly in that first use maybe, and it would work even better if some of our entries were shorter, but nevertheless, don't need that external list, everything is embedded in here and we do have that option at the end to indicate what happens if we don't find a match.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** switch (7), choose (4), xlookup (4), ifs (1), fair (1)
> **CLI Commands:** find (4), make (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** similar to (1), for example (1)
> **Speakers:** - [instructor] (1)


### 4. Other Functions with Lookup Capabilities

[↑ Back to Table of Contents](#table-of-contents)

#### [Extracting and counting unique entries using the UNIQUE function](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=0)** - [Instructor] In the early 2020s, [[Microsoft]] introduced a number of new functions, often categorized as dynamic array functions.
>
> **[0:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=8)** And a number of them are in the lookup and reference category.
>
> **[0:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=11)** One is called UNIQUE.
>
> **[0:13](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=13)** We've got a big list over here in columns A through C.
>
> **[0:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=16)** It's about 900 rows or so, actually 999 to be exact.
>
> **[0:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=21)** We want a list of all of our different departments.
>
> **[0:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=23)** We don't want the names to be repeated either.
>
> **[0:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=26)** So a common use of UNIQUE is to say, "I've got a list here with lots of recurring entries.
>
> **[0:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=31)** Just give me a list with every item that's listed there.
>
> **[0:34](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=34)** Once, once and only once."
>
> **[0:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=37)** So in cell E2, I'll type =UNIQUE and where's that array?
>
> **[0:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=44)** Now this is not a table off to the right.
>
> **[0:46](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=46)** We do see the same data as a table, so we'll show a couple different ways to do this.
>
> **[0:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=50)** If I simply click column B, I'm going to get some answers with a little bit of extra information, but it's going to work quickly and easily.
>
> **[0:57](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=57)** We're looking in column B, that's all we need.
>
> **[1:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=60)** Enter.
>
> **[1:01](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=61)** As I scroll up and down, you'll see that's a list of all the departments, including by the way, the [[Microsoft Word|word]] Department on top and a zero at the bottom.
>
> **[1:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=69)** Let's say for the moment, that's not going to bother us.
>
> **[1:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=71)** This is in the same order.
>
> **[1:13](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=73)** Here's Quality Control as actually appears in the list.
>
> **[1:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=76)** We don't see Quality Control a second time, however.
>
> **[1:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=79)** So this is in sync with the data.
>
> **[1:22](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=82)** And because it's a dynamic array function, the formula itself, which was only in cell E2 spills into other cells.
>
> **[1:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=91)** If you click on one of the other cells and look in the formula bar, it's in gray print except for the top one, it's in black print.
>
> **[1:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=100)** If there's a change here, if David Adams here is about to join the new marketing department, I'm going to put in Marketing here.
>
> **[1:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=109)** As I press enter, it appears in the list over here as well too.
>
> **[1:54](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=114)** And so this is in sync automatically with this list.
>
> **[1:57](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=117)** We could precede this with the word sort, automatically the list will be sorted alphabetically.
>
> **[2:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=125)** sort. There it is.
>
> **[2:06](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=126)** Same list there.
>
> **[2:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=127)** And it's in sync with the data at all times.
>
> **[2:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=130)** Possibly you have this on a different worksheet or way off to the right or maybe even in a different workbook.
>
> **[2:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=136)** And as the data changes and adjusts as departments within this organization get removed or we add new ones, we'll see that appear in the list.
>
> **[2:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=146)** But if the list is not going to be changing, and we know for the moment it's 999 rows, we'll put in B2:B999, and now we don't have the word department in it, nor that trailing zero.
>
> **[2:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=160)** Now if it is a table, same data off to the right, I haven't changed Marketing over there just yet.
>
> **[2:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=167)** We could do this perhaps a little bit more efficiently.
>
> **[2:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=169)** =UNIQUE and I'll simply putting the mouse right here.
>
> **[2:55](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=175)** Double click and enter.
>
> **[2:58](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=178)** And there it is.
>
> **[2:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=179)** It's not sorted. We could imply that too.
>
> **[3:01](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=181)** It puts in the word Department there.
>
> **[3:03](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=183)** So I could have actually dragged this upward.
>
> **[3:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=185)** In fact, I'll do that right now.
>
> **[3:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=187)** We have the heading with it.
>
> **[3:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=189)** There we are. So again, now rather than typing this, I simply did a double click there to pick up the information, including the heading.
>
> **[3:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=196)** So same general idea here.
>
> **[3:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=198)** And once again, I'll change David Adams here to Marketing and we'll see that in the list right there.
>
> **[3:27](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=207)** Same general idea.
>
> **[3:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=209)** Now there could be times when you're saying I only want to see entries that appear once in a list.
>
> **[3:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=216)** So here's a list over here of all of our salespersons and there are 438 of 'em and they're in different states and they're more or less based on the population of the states.
>
> **[3:46](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=226)** So some states you can see already California's got three already in the top group there.
>
> **[3:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=231)** But how many of these states appear in here once and only once?
>
> **[3:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=236)** States with just one salesperson?
>
> **[3:58](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=238)** =UNIQUE.
>
> **[4:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=240)** We're looking in column P comma, and the next option will simply click comma since we don't need to use it.
>
> **[4:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=248)** But the third option here, the third argument, return items that appear exactly once.
>
> **[4:15](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=255)** The word TRUE. You can put in one if you wish, one or true. And there it is.
>
> **[4:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=260)** If we were scrolling up and down the list or sorting, we'd only see Delaware in here once North Dakota, South Dakota, etcetera.
>
> **[4:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=266)** So the states with less population appear once and only once.
>
> **[4:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=270)** And of course this too would be dynamic if for example, I'll change this Texas here to Alaska and press enter, we will not see Alaska in the list over in column S 'cause it's there twice instead of once.
>
> **[4:45](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=285)** So I think you get the idea if a valuable function that's UNIQUE function, a lookup function that's pulling data from another source.
>
> **[4:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/extracting-and-counting-unique-entries-using-the-unique-function?u=76281980&t=293)** Either as we saw here, picking those entries that appear exactly once or giving us a list here where each department is listed once, although it occurs many times within the list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (5), [[Microsoft]] (1)
> **Env Vars:** unique (6), b999 (1), true (1)
> **UI Navigation:** scroll up (1), click on (1)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** as we saw (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using FILTER and CHOOSECOLS for multiple column retrieval](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=0)** - [Instructor] If you've worked with lists in [[Microsoft Excel|Excel]], no doubt you're familiar with Excel's filtering capability.
>
> **[0:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=5)** There are times when you've got a big list, you don't want to see all of it, you just want to see people, for example, in a certain department, those above a certain salary level, and so on.
>
> **[0:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=14)** But you are altering at least temporarily, a list.
>
> **[0:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=17)** What we're going to be doing with the new FILTER function is creating a new list.
>
> **[0:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=21)** It'll be dependent upon a source list, but at different times we might have any number of different filter lists based on this master list.
>
> **[0:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=30)** If the master list changes, the filtered list will too.
>
> **[0:34](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=34)** The FILTER function, we're going to be using it in column G.
>
> **[0:38](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=38)** We've got a list over here. It's 999 rows.
>
> **[0:41](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=41)** Let's say for the moment we're only interested in seeing a list of the people who have been here 15 or more years.
>
> **[0:46](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=46)** = filter.
>
> **[0:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=50)** And the data starts from column A over to column E down to row 999.
>
> **[0:55](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=55)** I'll just highlight it down to row nine and type in those final two nines.
>
> **[0:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=59)** We'll also contrast how this function will work with a table, which might be recommended in this example.
>
> **[1:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=65)** But we've got a list over there from A2 over and down to E999, comma.
>
> **[1:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=70)** What we're concerned about is the year entries in column D.
>
> **[1:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=74)** So I'm going to be highlighting D2 down to D9, then typing those final two nines.
>
> **[1:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=80)** We're interested only in the data where the column D entry is greater than or equal to 15.
>
> **[1:27](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=87)** We could just as easily have said greater than 14.
>
> **[1:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=90)** And that's all we need. Enter.
>
> **[1:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=92)** And there it is. Our complete list, our entire list.
>
> **[1:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=96)** Of course, it's shorter than the other one because we're only looking for people with a certain number of years.
>
> **[1:43](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=103)** Now, what you might include with this, and it is a feature covered in another movie, a new function called CHOOSECOLS.
>
> **[1:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=110)** Maybe we don't want to see all these columns here.
>
> **[1:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=113)** And as we look at the data here, off to the left, maybe we only want to see the person's name, and then the salary, then the department, we don't have the column headings for it, but we can do that by way of this function called CHOOSECOLS.
>
> **[2:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=128)** Can also use this with some other functions as well too.
>
> **[2:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=131)** So based on the list that we're going to be getting here, I'll put a comma after this.
>
> **[2:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=136)** Imagine as we're looking at the data from left to right over there, we want data out of the first column.
>
> **[2:22](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=142)** That's the employee name, one, comma, and also the salary, that's the fifth column.
>
> **[2:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=149)** And maybe we want to pick up the department too, that's in the second column, comma two, that can be in any order, right?
>
> **[2:35](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=155)** (1,5,2) refers to employee name column, the salary column, and the department column.
>
> **[2:43](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=163)** Enter. And there it is.
>
> **[2:45](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=165)** Headings are not in place, formatting's not in shape, but we've got what we want to see here just by using the CHOOSECOLS function.
>
> **[2:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=173)** But let's shift the focus back to filter and show how we will use this function when we've got multiple criteria.
>
> **[2:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=179)** Maybe we still want to confine our list to those 15 or more years, but also those in the operations department.
>
> **[3:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=187)** So two criteria need to be true.
>
> **[3:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=190)** And when we have multiple criteria, we need to put each criteria within parentheses, and we separate them, not with a comma, but with an asterisk.
>
> **[3:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=200)** So the first criterion, and it makes no difference the left to right order of these, but the criterion that we already had in place is here's the service, 15 or more, right?
>
> **[3:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=210)** Parenthesis, then an asterisk.
>
> **[3:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=212)** And now within parentheses, the other criterion we want, the department, that's in column B from B2 down to B999, equal to operations.
>
> **[3:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=227)** Now, I happen to have put that in place already in cell J1, so I'll simply click on it, and that needs to be in parentheses, and the final parenthesis as well.
>
> **[3:57](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=237)** And there's our list.
>
> **[3:58](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=238)** Everybody in this list is from operations and you see their years of service.
>
> **[4:02](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=242)** And to emphasize the idea that this list has a dependency on the other list, Jason Skinner in here, we just found out was actually hired in 2006.
>
> **[4:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=251)** So he falls into that same category as the others for years of service.
>
> **[4:15](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=255)** So I'm going to make an adjustment to Jason Skinner.
>
> **[4:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=257)** He's right here in row 11.
>
> **[4:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=258)** We don't see him in the list to the right, but I'm going to change his hire date to be 2006.
>
> **[4:25](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=265)** And as I press Enter, the years number to the right will change and his name will also appear in the list.
>
> **[4:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=272)** And there he is, right there at the top. Now qualifies.
>
> **[4:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=276)** And you can imagine other changes made to these higher dates or similar changes would occur in our subordinate list.
>
> **[4:42](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=282)** Now, off to the right is a list that's a table.
>
> **[4:45](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=285)** It's called EMPL, the name of this table.
>
> **[4:48](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=288)** And there's a formula already set up in column U, and you can see by the list there using FILTER, we're looking for just those employee salaries under 40,000.
>
> **[4:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=299)** So we've got a list off to the right.
>
> **[5:02](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=302)** And remember, on a table, when you add information at the bottom, it automatically becomes part of the table and therefore formulas will [[React.js|react]].
>
> **[5:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=311)** If we're saying we want to see all the people whose salaries are under 40,000, let's zip into the list here, I'll press Ctrl + down arrow, and we're going to add a new person.
>
> **[5:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=320)** I'll simply copy an existing one and change the salary.
>
> **[5:24](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=324)** There's Daniel White.
>
> **[5:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=326)** Imagine that's another Daniel White down here.
>
> **[5:28](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=328)** I'm going to change this salary here to be 36,000.
>
> **[5:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=332)** And let's click over into column U and zip up top, and what do we see?
>
> **[5:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=336)** There's Daniel White in the list here because he makes under 40,000.
>
> **[5:42](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=342)** Now, if there's a later change, maybe I made a mistake there, he really gets 46,000.
>
> **[5:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=347)** There's a salary here, so we'll change that to be 46,000.
>
> **[5:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=351)** As you might expect, the list has automatically updated.
>
> **[5:55](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=355)** We don't see his name in the list anymore.
>
> **[5:57](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=357)** So we've seen different examples of using the FILTER function.
>
> **[6:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=360)** It's a powerful tool, and I think you could imagine too, having a variety of filtered lists based on a master list, perhaps located in a different worksheet even, or even in a different workbook.
>
> **[6:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/using-filter-and-choosecols-for-multiple-column-retrieval?u=76281980&t=371)** Powerful, easy to use, the FILTER function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[React.js|React]] (1)
> **Env Vars:** filter (5), choosecols (3), e999 (1), b999 (1), empl (1)
> **Analogies:** imagine (4), for example (1)
> **Definitions:** is a  (2), refers to (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)

#### [Use the SORT and SORTBY functions to create new lists](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=0)** - [Instructor] In the previous movie we talked about the filter function and we compared it with the filter command.
>
> **[0:06](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=6)** The same thing is true of a sort function, similar to the sort capability, the sort command found on the data tab, and there's also another function called sort by, and we might be using the same idea as we did with filter.
>
> **[0:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=19)** We want to create a new list somewhere that's based upon another list, and whether it's adjacent to the source data or on a different worksheet or often a different part of this worksheet, it's relatively easy to set up.
>
> **[0:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=32)** The list to the left is my master list, it's currently has been sorted by salary, but I want to have another list and I'll use it frequently, let's say I want to look up employee names and other information about them.
>
> **[0:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=44)** I want an alphabetized list.
>
> **[0:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=47)** So, equal sort.
>
> **[0:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=49)** The list in question is from cells A2 over and down to E999.
>
> **[0:55](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=55)** I'm not using a table here, so at times we might have to adjust the address.
>
> **[1:01](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=61)** If we only want to sort by the leftmost column and no subordinate sorting columns, we'll simply press enter and there it is.
>
> **[1:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=69)** It's as simple as that.
>
> **[1:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=70)** It's an alphabetized list and it is dependent upon the other list regardless of whether we have it adjacent to the data or not.
>
> **[1:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=77)** So if I were to jump over here, here's Kes Bowen, and that Kes actually is a misspelling, he has two S's there.
>
> **[1:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=83)** I'll put a final S there in row 16 and find him over in the list here among the Bs there.
>
> **[1:33](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=93)** There he is right there, there's the double S, that wasn't there before.
>
> **[1:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=97)** So they're in sync with each other.
>
> **[1:39](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=99)** If you change data, of course, other elements of the original list, of course it's going to change over here too, but we don't always want to sort by the leftmost column.
>
> **[1:48](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=108)** I want another list Instead, for the moment.
>
> **[1:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=111)** I'm going to take that same list, but following the location of the source, I put in a comma.
>
> **[1:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=116)** I might want to sort this data by years of service.
>
> **[2:01](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=121)** That's in column D. That's the fourth column.
>
> **[2:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=124)** So if I put in a four and enter, I'll get, automatically, an ascending sort based on the data in that fourth column from the left, which is years.
>
> **[2:13](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=133)** So the people who have been here the fewest years will appear first.
>
> **[2:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=138)** There they are. 3s, 4s, 5.
>
> **[2:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=141)** And by the way, if you're looking at this at a later date, which undoubtedly you will, this is late October of 2024 as I'm recording this.
>
> **[2:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=149)** Some of these numbers will have changed but the main idea here is that we've sorted the data based on what's in the fourth column in ascending order.
>
> **[2:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=156)** And as we scroll up and down that list there and see how the years keep going upward, we've sorted in ascending order.
>
> **[2:43](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=163)** But you can imagine wanting to sort in descending order.
>
> **[2:46](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=166)** So, when you sort in descending order following the column reference, comma, and we could have put in the one, which would be redundant in this case, but certainly not wrong meaning ascending, if that's what we wanted, but descending minus one.
>
> **[3:02](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=182)** Now we're going to see the entire list flipped upside down.
>
> **[3:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=185)** That list that we see from columns H through L that is, there it is.
>
> **[3:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=189)** So the people who have been here the longest are appearing off to the right.
>
> **[3:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=194)** We can see that years in column K.
>
> **[3:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=197)** Now, if you're using multiple columns for sorting, in other words a subordinate sort, you can do this with sort but I would recommend sort by.
>
> **[3:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=206)** If we want to have a subordinate sort here, in other words, we do want them by years, but within that we want them alphabetical by name.
>
> **[3:33](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=213)** We need to include, within curly braces, the two fields that we're referring to and, also within curly braces, the order in which they're going to appear.
>
> **[3:45](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=225)** And this will work better as I [[Zoom]] in, I think we'll see it a bit better this way.
>
> **[3:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=233)** We do want that fourth column, that's the years, but we want another column as well.
>
> **[3:58](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=238)** We want the major grouping to be by years, comma, but a subordinate grouping by the employee name, that's in column one.
>
> **[4:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=248)** So we want to be sorting on the fourth column and the first column, comma, and the order that we want for column four, those are the years, we want that to be in descending order, that's minus one , comma, but the order for the first column, which is what the one refers to here, we want that to be in ascending order, we need to put in the one there, that's not going to be implied in any way.
>
> **[4:35](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=275)** So now we'll get a sort based on years, within that there'll be alphabetical by name, and let me zoom back here.
>
> **[4:42](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=282)** So here are all the people that have been here 25 years and quite a few of them it looks like.
>
> **[4:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=287)** They're sorted alphabetically and when we come to the next cluster of names, the people have been here 24 years, they're alphabetical as well too.
>
> **[4:55](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=295)** So that, maybe, is a little bit awkward, a little bit strange.
>
> **[4:58](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=298)** So instead, let's use the sort by function and we start off in the same way here, but now we refer to the cells in question.
>
> **[5:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=310)** We want to keep that same order.
>
> **[5:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=311)** We'll highlight D2, again, we'd be typing or highlighting down to D999.
>
> **[5:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=319)** We want that to be in and notice how we've indicated what it is we want to sort by, but then, comma, which order do we want this to be in?
>
> **[5:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=329)** Descending minus one.
>
> **[5:33](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=333)** And if there's another subordinates sort column, and there is, we want this to be based on the data in column A.
>
> **[5:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=340)** I could just type it this time, A2 call it A999.
>
> **[5:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=347)** Comma. We want that to be in ascending order one and there we are.
>
> **[5:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=353)** So this is in order, as we saw before, but simpler, I wouldn't say simpler necessarily, but simply, I think for most people, easier to adjust.
>
> **[6:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=364)** Here's one of our columns that we're looking at.
>
> **[6:06](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=366)** We want it in descending order, and then a second one, and sometimes a third, a fourth, and so on.
>
> **[6:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=372)** So we've got these in pairs. This is what we're sorting.
>
> **[6:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=376)** This is the array that we're sorting.
>
> **[6:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=378)** This is the order and subordinate to that, it's another array and it's order.
>
> **[6:25](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-sort-and-sortby-functions-to-create-new-lists?u=76281980&t=385)** So I think you can see similar to filter, we sometimes want to create additional lists based on our source data and sorted in a particular order.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (2)
> **Definitions:** is a  (2), in other words (2), refers to (1)
> **Env Vars:** e999 (1), d999 (1), a999 (1)
> **Analogies:** similar to (2), imagine (1)
> **Cross-References:** we talked about (1), as we saw (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll up (1)
> **Prerequisites:** set up (1)

#### [Use the INDIRECT function to return references specified by text strings](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=0)** - [Instructor] A completely different kind of lookup function is one called INDIRECT.
>
> **[0:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=4)** If you're on the Formulas tab and you click Lookup & Reference and scroll down just a bit, you'll see INDIRECT.
>
> **[0:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=12)** Returns the reference specified by a text string.
>
> **[0:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=16)** We've got a situation here where we've got a summary worksheet, summary data based on information from four separate sheets.
>
> **[0:25](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=25)** At the bottom of the screen, you'll see there's a California sheet, Texas, Florida, New York.
>
> **[0:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=29)** They all have exactly the same layout.
>
> **[0:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=32)** And in each case, there's a blue cell that's been highlighted, over in cell G6.
>
> **[0:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=37)** It's the total.
>
> **[0:38](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=38)** And what we'd like to be able to do is, on this Indirect sheet, show the California total.
>
> **[0:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=44)** Now, up above our other formulas and one by one in this section right here, each one of these is similar.
>
> **[0:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=51)** I'll just double click one of them.
>
> **[0:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=53)** We're gathering data from multiple sheets, simple 3D-type formula.
>
> **[0:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=59)** Now, if I simply want to get the data for California, it's total, I'll type =, this is one of a couple ways, probably the fastest way to type =, click on the California sheet, click that cell, and press Enter.
>
> **[1:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=72)** So I've got data for California.
>
> **[1:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=74)** I think you know, if I pull this down from the corner using that fill handle, I'm going to get data not from Texas, Florida, and New York, but from the California Sheet, one cell below it.
>
> **[1:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=86)** So that's obviously not what we want to do.
>
> **[1:28](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=88)** Now, I want to move this formula off to the right and double click, put a space in front of it to remind us what it looks like.
>
> **[1:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=96)** What we'll be using here is a function called INDIRECT.
>
> **[1:39](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=99)** Now, one thought might be, could we somehow combine the [[Microsoft Word|word]] California with the address?
>
> **[1:45](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=105)** Could we do this manually by actually saying something like =, let's bring in California and let's combine this with, what do we need there within double quotes?
>
> **[1:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=116)** An exclamation point and a G6.
>
> **[2:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=120)** Well, if we do that, we simply get a string here, a text string that doesn't give us anything.
>
> **[2:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=125)** However, if we use the INDIRECT function in effect we're saying, bring in California and use it in the formula, and because it is a sheet name, sheet names are followed by an exclamation point, we saw how it worked manually off to the right, we'll simply press Enter and we've got a correct answer.
>
> **[2:28](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=148)** Formatting, we will worry about later.
>
> **[2:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=150)** Now, if we drag this down into the next three cells, we do have correct answers.
>
> **[2:34](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=154)** Remember, in each one of these, we're picking up the data from the cell to its left and combine that with those other characters that we need.
>
> **[2:43](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=163)** Now, I use spaces in sheet names a lot, but I do know that when you're working with formulas, many times, it introduces unwanted clutter and sometimes confusion.
>
> **[2:54](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=174)** So when I'm using worksheets that have state names in them, those states like New Hampshire and New York and so on, I leave out the space.
>
> **[3:02](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=182)** It's just easier to work with formulas.
>
> **[3:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=185)** Let's show what happens here if I do one of two things, either in column A, right here, if I introduce a space between New and York, formula doesn't work, or if I undo that and go to the sheet name and put in a space, it doesn't work.
>
> **[3:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=200)** However, the work around here, and it's a bit tedious and I'm trying to make it short, is that as we go back here, suppose both of these have spaces, well, it's still not working.
>
> **[3:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=211)** So how might we approach this?
>
> **[3:34](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=214)** If we started with the state that had a space in it, perhaps we'd see this, but I'm going to write a formula just for New York here manually.
>
> **[3:41](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=221)** =, I'll click the New York sheet, click cell G6 and Enter, and this formula here, and I'll copy it off to the right to compare it with the California formula that we wrote initially.
>
> **[3:57](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=237)** What's different?
>
> **[3:58](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=238)** Because there's a space in it, when you use sheet names in formulas and there's a space in the sheet name, [[Microsoft Excel|Excel]] embeds the sheet name in single quotes as well.
>
> **[4:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=250)** So if we were to somehow rework our formula for here to account for that, and I've done this ahead of time, 'cause I think it might be boring to watch me type it, we choose this kind of a formula here, INDIRECT.
>
> **[4:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=263)** And that's without saying too much about it, double quote, single quote, double quote, and A12 and double quote, single quote, exclamation point, G6, double quote.
>
> **[4:34](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=274)** We're getting a little geeky here, but that would work and we could drag that upward and it would work for the other states.
>
> **[4:41](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=281)** But anytime you're working with formulas that involve sheet tabs, that could be a potential problem.
>
> **[4:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=287)** Nevertheless, the INDIRECT function works great here.
>
> **[4:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=289)** It's the one we want.
>
> **[4:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/use-the-indirect-function-to-return-references-specified-by-text-strings?u=76281980&t=291)** And although it's different than most other lookup formulas, it gets the job done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** indirect (6), a12 (1)
> **UI Navigation:** scroll down (1), click on (1), go to (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 5. Recently Introduced Functions with Lookup Capabilities

[↑ Back to Table of Contents](#table-of-contents)

#### [CHOOSEROWS and CHOOSECOLS: Return lists with selected rows or columns](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=0)** - [Instructor] In this worksheet, I've got a list in columns, A through E, and I want to make a copy of it, but I don't want all the columns.
>
> **[0:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=7)** And I might be doing this adjacent to the data as I have set it up right here, or possibly on a different worksheet, different workbook.
>
> **[0:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=14)** I only want to see data from the employee salary and region columns.
>
> **[0:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=19)** And the function we'll be using here is called CHOOSECOLS, meaning columns, and there's a companion, CHOOSEROWS for choosing just certain rows.
>
> **[0:28](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=28)** Less likely to be used in this kind of a scenario.
>
> **[0:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=31)** Equal CHOOSECOLS. The data that we're looking at, if we only want to employ, salary, and region, covers this range of cells here.
>
> **[0:43](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=43)** And in this list, it's all the way down to row 700.
>
> **[0:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=47)** I'll highlight that down to row seven and put in the two zeros.
>
> **[0:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=49)** This is not a table.
>
> **[0:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=51)** So there's the range of data that we're looking at.
>
> **[0:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=53)** The data array, comma, we want data from the leftmost column, that's the employee name.
>
> **[0:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=59)** We put in the number one, think of that as column number one, comma.
>
> **[1:03](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=63)** But then we want the salary, that's the fourth column in the list that we're extracting it from.
>
> **[1:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=68)** Four, comma, and then region, that's the third column.
>
> **[1:13](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=73)** And that's it. We've got our list.
>
> **[1:15](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=75)** It is in sync with the data at all times.
>
> **[1:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=78)** We can also use these functions in combination with others.
>
> **[1:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=81)** I'm going to be hiding these columns, right-click and hide, and use the XLOOKUP function here.
>
> **[1:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=89)** Imagine I might have a pick list set up here.
>
> **[1:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=92)** From time to time, I'll pick a name.
>
> **[1:33](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=93)** I only want to see salary, rating, and region, and just for that person.
>
> **[1:38](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=98)** So I'll use the XLOOKUP function first.
>
> **[1:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=100)** [[Microsoft Excel|Excel]] tab, looking for Ed Fox, in column B, and when I find his name, I'm going to pull out data from columns, C, D, and E.
>
> **[1:52](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=112)** Let's just drag across those.
>
> **[1:55](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=115)** Now, if I simply press enter, I've got the data, but it's not in the order that I want.
>
> **[2:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=120)** So out of the columns that I'm looking at here and using column C, D, and E, I want to pick them in a certain order.
>
> **[2:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=127)** I want salary first.
>
> **[2:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=128)** So we're going to use CHOOSECOLS outside of this.
>
> **[2:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=131)** You can also use it inside, which I'll show a bit too.
>
> **[2:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=134)** CHOOSECOLS, so from that list, take what XLOOKUP has given us, and then we want certain columns, so from the list that's being extracted, salary is in the third column, rating is in the first column, one, and region is in the second column, two, right parenthesis, enter, we've got our list.
>
> **[2:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=160)** And it looks like that.
>
> **[2:42](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=162)** Now, for comparison, and I prepared this ahead of time, bring this up here.
>
> **[2:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=167)** We could have used this function.
>
> **[2:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=169)** And here's CHOOSECOLS inside of XLOOKUP.
>
> **[2:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=173)** So you can use it either way.
>
> **[2:54](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=174)** These would both give us the same answers, same idea, same amount of typing, and so on.
>
> **[3:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=180)** But we're using it in combination with other functions.
>
> **[3:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=184)** Now, we also have a CHOOSEROWS.
>
> **[3:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=187)** In my experience, I haven't used this whole lot, I haven't had the need to use it.
>
> **[3:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=191)** But here's a list, and once again, what we're setting up could be located elsewhere.
>
> **[3:15](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=195)** I just want to see from here, certain rows, let's say the even numbered years.
>
> **[3:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=200)** So, CHOOSEROWS based on this list here,
>
> **[3:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=209)** I do want that top row, it's row one.
>
> **[3:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=211)** Now, at the moment, it's coincidence that we are using the top of the worksheet.
>
> **[3:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=216)** So the row numbers, the actual worksheet row numbers and the rows from the list are going to be identical.
>
> **[3:41](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=221)** I want the even numbered years that's in the second row, the 2016 row and the fourth row and the sixth row and the eighth row and the 10th row.
>
> **[3:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=231)** I only want data from those rows.
>
> **[3:54](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=234)** And so there's our list.
>
> **[3:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=236)** And you could imagine possibly a combination of CHOOSECOLS and CHOOSEROWS to maybe only pick up certain months out of the list as well too.
>
> **[4:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=244)** So formula here is simply saying, out of that list, let's pick just certain rows.
>
> **[4:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=250)** Now, perhaps a better use of this, although somewhat limited and how often you would use it, I'm going to use CHOOSEROWS right here from that list because I want to pick up the last entry in the list, possibly a list like this as relevant in terms of its timing.
>
> **[4:24](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=264)** And even though we don't see dates here, so I'll use CHOOSEROWs here from this list here, all the way down to row 700, I'm going to put in minus one.
>
> **[4:38](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=278)** This is going to pick up the last row. And there it is.
>
> **[4:42](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=282)** And I'll zip over here to the list, press control down arrow. There it is.
>
> **[4:46](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=286)** Gil Bates, 43,000, the date is correct.
>
> **[4:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=291)** Now, if this were a table and I do have a table like this off to the right, it's going to be a lot more efficient 'cause it's all set up here too. So same general idea here.
>
> **[5:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=300)** This is a list that's going to grow and shrink, let's say, often.
>
> **[5:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=304)** So here, I'll use CHOOSEROWS based on this table.
>
> **[5:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=308)** Now, the table has a name called EMPL.
>
> **[5:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=310)** I happen to have remembered that.
>
> **[5:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=312)** And of course, if you're using it, you would too.
>
> **[5:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=314)** EMPL, That's the table, minus one, enter.
>
> **[5:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=321)** And looks like we're seeing nothing here.
>
> **[5:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=323)** So let's zip into the list, go down to the bottom.
>
> **[5:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=329)** Well, I'm going to add a name. Let's see what happens here.
>
> **[5:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=331)** That should work okay, I'll just copy one of these and make a change or two and make it stand out
>
> **[5:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=344)** and zip up top.
>
> **[5:46](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=346)** Yeah, there it is, Mark Myers.
>
> **[5:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=347)** That's the one I added at the bottom.
>
> **[5:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=349)** So using CHOOSEROWS from a list, this is a table that has the name EMPL, minus one.
>
> **[5:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=356)** And at different times, as I make changes to this list, I add more to the bottom, add a new name.
>
> **[6:02](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=362)** It's going to appear here all the time.
>
> **[6:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=365)** So I've seen how to use the CHOOSEROWS function to pick up the last data and list, the last row.
>
> **[6:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/chooserows-choosecols-return-lists-with-selected-rows-or-columns?u=76281980&t=372)** And earlier we saw how to use CHOOSECOLS and a number of different ways, even in combination with the XLOOKUP function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **Env Vars:** chooserows (8), choosecols (7), xlookup (5), empl (3)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** imagine (2)
> **Prerequisites:** set up (2)
> **UI Navigation:** right-click (1)
> **Speakers:** - [instructor] (1)

#### [TAKE and DROP: Copy from lists selecting or ignoring consecutive rows or columns](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=0)** - [Instructor] With the two functions, TAKE and DROP, from a list, we can either take certain columns, consecutive columns from the left side or from the right side or certain rows from the top or from the bottom.
>
> **[0:13](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=13)** And we can use the two in combination at times too.
>
> **[0:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=16)** I've got a list over in columns A through E.
>
> **[0:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=18)** It is a table, it's got a name, it's called Staff.
>
> **[0:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=21)** If I only want to see data from the three columns on the left-hand side, and imagine I might be doing this on a different worksheet or off to the right somewhere, I'm building a temporary list or maybe I'm going to keep it around for a while, but it's based on the data we see over in columns A through E.
>
> **[0:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=37)** So in cell G2, =TAKE.
>
> **[0:41](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=41)** Remember, I can take so many columns from the left or right side or so many rows from the top or bottom.
>
> **[0:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=47)** So from this array, from this list called Staff, comma, I'm not interested in picking so many rows, so I'll just skip over that option.
>
> **[0:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=56)** So the rows option comes first.
>
> **[0:58](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=58)** I'm ignoring it, meaning I want all of them, but I want three columns.
>
> **[1:03](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=63)** If I put in 3, what do we get?
>
> **[1:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=65)** The three left most columns.
>
> **[1:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=67)** It's the entire list, but just the data that we're seeing over in columns A, B, and C.
>
> **[1:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=72)** If I had used -3, that would be three columns from the right.
>
> **[1:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=77)** So we'd be seeing Status, Comp, and Rating.
>
> **[1:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=79)** Of course, now, the headings are going to be off, but that's what we're getting there too, Status, Comp, and Rating.
>
> **[1:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=86)** So pressing Ctrl + Z to undo.
>
> **[1:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=89)** And after seeing how TAKE works, you probably could figure out how DROP is working.
>
> **[1:34](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=94)** From this list called Staff, I want to drop the three columns on the right side.
>
> **[1:39](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=99)** I don't want to do anything with the rows, so I'll put in a comma, and then -3.
>
> **[1:45](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=105)** And we see what's happening.
>
> **[1:46](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=106)** So I think you can imagine different ways to approach this.
>
> **[1:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=110)** Now, we've got some other data here off to the right.
>
> **[1:54](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=114)** And let's say the tasks are already listed here.
>
> **[1:57](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=117)** Show only the last four rows from the bottom of the list.
>
> **[2:01](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=121)** And this has already been done in cell O2.
>
> **[2:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=124)** Very simple and easy too.
>
> **[2:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=125)** From that list called Staff, -4.
>
> **[2:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=128)** Those are the four rows at the bottom of the list.
>
> **[2:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=131)** And if that list grows, these entries here will change.
>
> **[2:15](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=135)** I'm going to click over in column D.
>
> **[2:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=136)** And before I go down to the bottom, you might remember a name or two here.
>
> **[2:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=140)** Blackwell, Stevens, Lopez, and Montgomery are the names.
>
> **[2:24](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=144)** And those are the ones we see at the bottom of the list over here, Blackwell, Stevens, Lopez, and Montgomery.
>
> **[2:28](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=148)** And of course, as this list grows or shrinks, that list that we saw up above is going to change, the one off to the right here.
>
> **[2:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=156)** And again, after manipulating a few of these, I think you get the handle pretty quickly.
>
> **[2:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=160)** Take only the last six rows from the bottom of the list and just the three left most columns.
>
> **[2:46](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=166)** And again, this is a little bit unusual perhaps, but nevertheless, and this is already in place in cell O5.
>
> **[2:52](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=172)** From that Staff entry, we're taking -6, meaning six from the bottom, and the three left most columns.
>
> **[3:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=184)** Now, in earlier movies, perhaps you saw the one on INDEX, here's a formula here for coming up with the last entry in a list in a table.
>
> **[3:13](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=193)** And at the moment, we can see that at the bottom.
>
> **[3:15](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=195)** It's actually coming up, there's a formula in place.
>
> **[3:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=198)** It's going to be a lot simpler here instead to use TAKE.
>
> **[3:25](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=205)** And list is called Sales, it's a table.
>
> **[3:28](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=208)** Comma, -1, the last row.
>
> **[3:33](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=213)** And there it is, confirms what we have.
>
> **[3:35](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=215)** And sure enough, in this list here, if the next entry that I put in down here, 1/4/25, already, that's been changed, you can see it happening there.
>
> **[3:48](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=228)** Cell to the right of this is empty for the moment, but as soon as I put in that entry, which is 2,400, you see how that's working as well too.
>
> **[3:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=236)** So there are a lot of different situations here when you're extracting data from a list that you only want certain columns from the left or right or rows from the top or bottom.
>
> **[4:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/take-drop-copy-from-lists-selecting-ignoring-consecutive-rows-columns?u=76281980&t=244)** We've seen a variety of different examples of how these two functions, TAKE and DROP, work.

> [!info]- Semantic Content
>
> **Env Vars:** drop (3), index (1)
> **Definitions:** is a  (2), is called (1)
> **Cross-References:** coming up (2)
> **Analogies:** imagine (2)
> **SQL:** index (1)
> **Speakers:** - [instructor] (1)

#### [TOROW and TOCOL: Convert array data into a single row or column](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=0)** - [Instructor] With the two functions called "TOCOL" and "TOROW", we can take an array of data and display it in a single column or a single row.
>
> **[0:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=9)** On this worksheet, we've got a list in columns E through R, month by month data over the period from 2012 to 2025.
>
> **[0:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=17)** I've got a chart associated with it.
>
> **[0:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=19)** And although there might be other reasons for changing that look that we're seeing up above, putting that data into a column, the chart doesn't look so great.
>
> **[0:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=26)** I want something that really shows the trend better than this.
>
> **[0:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=30)** If I do take that chart, I'll click on it and up in the menu system, go into Chart Design, change this chart type to a line.
>
> **[0:39](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=39)** Either one of these choices is not very satisfactory.
>
> **[0:43](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=43)** But what I do want to see is this data... Rephrase.
>
> **[0:46](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=46)** So what I'd like to do, and this wouldn't be the only reason for creating what we're about to create, what if we could display all this data in a single column and also have it automatically update as we add new monthly entries?
>
> **[0:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=59)** I need to see the lists... In other words, I want to see all these months together, certainly at times, but I also want to be able to create a nice chart and also scan up and down the data in column B.
>
> **[1:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=70)** So in cell B3, "=tocol".
>
> **[1:15](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=75)** We want to take that data and represent it in a single column.
>
> **[1:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=78)** We're talking about this data right here.
>
> **[1:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=81)** And it will grow too as we fill in column R.
>
> **[1:24](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=84)** So that's the data we're looking at, comma, then we indicate what we want to do if there are blanks, and there are here, we want to ignore them.
>
> **[1:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=91)** So we put in a one, comma.
>
> **[1:34](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=94)** And if we scan by row, the data we're going to be seeing in column B will be 315, 1,005, 795.
>
> **[1:42](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=102)** In other words, it's going to be picking up all the Januarys at once.
>
> **[1:46](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=106)** What we really want to do is pick up all the 2012 data at once.
>
> **[1:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=110)** So we're going to be scanning by column.
>
> **[1:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=113)** And enter.
>
> **[1:54](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=114)** And there it is.
>
> **[1:55](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=115)** The entries for 2012 are right here, and that corresponds with the data in column E.
>
> **[2:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=120)** Then starting in January, 2013, 1,005, we're seeing that right here.
>
> **[2:05](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=125)** And if I put a new entry in column R, it will change the entry in column B.
>
> **[2:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=130)** So as I click on column B, I'll press "ctrl+down arrow".
>
> **[2:13](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=133)** At the bottom right now, we're seeing that March of 2025 is the last entry.
>
> **[2:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=138)** Suppose the April numbers have just come in, I'm going to put in 11,000, but I'll do it in the list above, right there.
>
> **[2:25](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=145)** Here's the new entry for April, 11,000.
>
> **[2:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=150)** And sure enough, in the list over in column B, clicking over there, press "ctrl+down arrow", the 11,000 has popped into place.
>
> **[2:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=157)** So the function is rather straightforward.
>
> **[2:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=160)** And from this new list too, what we could then do, "alt+F1".
>
> **[2:45](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=165)** By clicking inside the data press "alt+F1", you get a chart immediately.
>
> **[2:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=169)** And as I convert this by way of change chart type to a line chart, now I've got a chart more useful.
>
> **[2:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=176)** I'll probably make some adjustments there too, but that's a lot easier to read and to work with.
>
> **[3:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=180)** I still want to keep my grid look up above because I do need to see the data this way as well too.
>
> **[3:06](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=186)** The companion function, and you would've guessed it already, but it's on the next worksheet called "TOROW".
>
> **[3:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=192)** In cell G1 on this worksheet, we want to use the function "TOROW".
>
> **[3:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=197)** We want to take all this data here and display it across row one there, starting in cell G1, then H1, et cetera.
>
> **[3:25](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=205)** And we'll have the option of either putting in all the New England states first, or moving across the row, and I think it's going to make sense to use "TOROW", reading downward for the New England states, then Mid-Atlantic and so on.
>
> **[3:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=217)** So "=torow".
>
> **[3:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=220)** Left parenthesis.
>
> **[3:42](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=222)** And here's the data that we're interested in.
>
> **[3:45](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=225)** Lots of spaces in there, we'll take care of those.
>
> **[3:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=227)** Comma, we want to ignore those blanks.
>
> **[3:52](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=232)** Comma.
>
> **[3:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=233)** Now, we could scan by row, that would pick up Maine, New York, Ohio, et cetera, cross row two first.
>
> **[3:59](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=239)** It'll make a lot more sense to do scan by column.
>
> **[4:03](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=243)** And enter.
>
> **[4:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=244)** And there we see it, Maine, New Hampshire, Vermont, and New England states.
>
> **[4:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=247)** Then we see New York popping up and there are no empty cells out there whatsoever.
>
> **[4:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=252)** Obviously if we're going to be using these, we will adjust the column widths and so on.
>
> **[4:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=257)** So the "TOROW" function displays this array of data over here as a single row.
>
> **[4:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=263)** And earlier in this movie, you saw how the "TOCOL" function works.
>
> **[4:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/torow-tocol-convert-array-data-into-a-single-row-or-column?u=76281980&t=266)** I think you're more likely to use that more often, but nevertheless, both of these functions give us this ability to take an array of data and display that information as a single column or as a single row.

> [!info]- Semantic Content
>
> **Env Vars:** torow (5), tocol (2)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (2), in the menu (1)
> **Definitions:** in other words (2)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### [WRAPROWS and WRAPCOLS: Convert row or column data into an array](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=0)** - [Instructor] On this worksheet called Wrap, we've got a list in columns A and B.
>
> **[0:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=4)** Imagine we've been recording these sales, small business may be out of your home, month by month, starting in 2012.
>
> **[0:10](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=10)** And as I press Control + Down Arrow, imagine it's early 2025, we've recorded some numbers there.
>
> **[0:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=16)** The business has grown.
>
> **[0:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=17)** We've been putting our monthly entries in one by one every month in column B.
>
> **[0:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=23)** What we'd like to be able to do in addition to this is have a grid type list here.
>
> **[0:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=29)** We could create a chart from it.
>
> **[0:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=30)** We'd like to see all those numbers at once.
>
> **[0:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=32)** And as we continue to add new data in that column, we want them to appear up in column S for 2025.
>
> **[0:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=40)** The function we're about to use is called WRAPCOLS, C-O-L-S.
>
> **[0:45](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=45)** We're going to be wrapping some columns of data.
>
> **[0:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=47)** Think of these as potential columns.
>
> **[0:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=49)** Here's the 2012 data.
>
> **[0:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=51)** We want to put that over in column F or a copy of it.
>
> **[0:55](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=55)** We want to do that for all the other months as well too.
>
> **[0:58](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=58)** So a companion function is called WRAPROWS.
>
> **[1:02](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=62)** In cell F2, we will use the function wrap.
>
> **[1:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=64)** And as soon as you see that, you can double click it, WRAPCOLS, and the data in question is from cell B2, all the way down, all the way down to the bottom here.
>
> **[1:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=76)** And we'll even go past the existing data to match up with the data over in column A through 2025.
>
> **[1:24](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=84)** Comma, and the wrap_count, meaning how often do we want to change columns as we're pulling this data in, and it's every 12 months.
>
> **[1:35](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=95)** And we do want to include those opening months so that we're in sync with full years.
>
> **[1:39](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=99)** So we started actually in cell B2, even though those first three cells are empty.
>
> **[1:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=104)** If there are empty cells, we want to pad those with nothing.
>
> **[1:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=107)** Now, this also can be affected by the number format as we'll see.
>
> **[1:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=111)** So we simply want all that data in column B to also appear in this grid.
>
> **[1:55](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=115)** And every 12 items that we see in column B are going to be ending up in a separate column here, as I press Enter.
>
> **[2:02](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=122)** And there we see those numbers, and these April numbers, April through December here, certainly correspond with the numbers we're seeing over to the left, those original source numbers.
>
> **[2:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=131)** Every one of these is dependent upon the data in column B.
>
> **[2:15](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=135)** And if I jump to the bottom here, and first of all, as we look in column S at the 2025 data, imagine we've just got our March numbers.
>
> **[2:22](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=142)** Now, we're not going to fill them in here, we'll do what we've been doing.
>
> **[2:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=146)** In column B, I'll click anywhere in column B, Control + Down Arrow.
>
> **[2:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=150)** Imagine we've got a new entry for March of 2025, 10,400.
>
> **[2:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=157)** Now, although we're not looking at the screen up above, that entry has been made, I'll press Control + Home, and off to the right there we see it, the 10,400 for March of 2025, all based on this formula that we have in cell F2.
>
> **[2:52](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=172)** And because it is an array formula, every one of these cells has the same formula.
>
> **[2:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=176)** Notice how in the formula bar, it's gray, but this one's black.
>
> **[3:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=180)** So if we wanted to get rid of this completely, we simply delete cell F2.
>
> **[3:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=184)** Now, we want to do the same kind of thing here, but here we want to WRAPROWS.
>
> **[3:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=188)** We want to put data across rather than down.
>
> **[3:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=191)** So same general idea.
>
> **[3:13](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=193)** We could almost copy this for you and make some adjustments.
>
> **[3:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=196)** So I'll just highlight it, for example, and press Control + C, Escape.
>
> **[3:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=201)** And then down here, I'm scrolling to the left, so we can see our other data.
>
> **[3:25](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=205)** In cell F16, click right here equal, and I'll paste in with Control + V that previous function and make this be WRAPROWS.
>
> **[3:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=217)** Same source data as before.
>
> **[3:41](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=221)** And we want to wrap this every 12, so every 12 entries here that we see in column B, we want to wrap them into rows.
>
> **[3:48](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=228)** For example, right here across the row for 2012, we want to see those numbers.
>
> **[3:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=233)** Three blanks, then 333 and 555 and so on.
>
> **[3:57](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=237)** Same syntax as WRAPCOLS.
>
> **[4:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=240)** And there it is, we're seeing the same numbers, but now we're looking across and these are the 2012 numbers and so on.
>
> **[4:06](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=246)** If it's a table, it's even easier to write.
>
> **[4:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=249)** And actually this is already in place.
>
> **[4:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=251)** The data here over in columns A and B is all sales.
>
> **[4:14](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=254)** That's the name of this table.
>
> **[4:16](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=256)** And so the formula right here, and I'll [[Zoom]] in a bit so we can see it more clearly, WRAPCOLS, and we're simply taking the sales entry there and wrapping it 12 times in the same way.
>
> **[4:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=266)** And here too, we could be doing the same thing down below.
>
> **[4:29](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=269)** I'll simply copy this, Control + C and click in cell F16, Control + V, and it's going to be WRAPROWS here, in the same way that we saw earlier.
>
> **[4:43](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=283)** And this time, we do have the table name all sales and the field name in place.
>
> **[4:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=287)** So same general idea.
>
> **[4:49](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=289)** So valuable tool.
>
> **[4:50](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/wraprows-wrapcols-convert-row-column-data-into-an-array?u=76281980&t=290)** In a certain sense, these are the opposite of what you might've seen in earlier movies, the functions TOCOL and TOROW where you've just used WRAPROWS, and before that, WRAPCOLS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1)
> **Env Vars:** wrapcols (5), wraprows (5), f16 (2), tocol (1), torow (1)
> **Analogies:** imagine (4), for example (2)
> **Definitions:** is called (2), is an  (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** wrap_count (1)
> **Speakers:** - [instructor] (1)

#### [VSTACK and HSTACK: Stack multiple arrays into a vertical or horizontal array](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=0)** - [Instructor] [[Microsoft Excel|Excel]]'s VSTACK and HSTACK functions allow, as their name suggests, stacking data.
>
> **[0:06](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=6)** V for vertical, H for horizontal.
>
> **[0:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=9)** On this worksheet called VSTACK, we've got three separate lists here.
>
> **[0:13](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=13)** Each of them is a table, a full-time table, it's green.
>
> **[0:17](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=17)** We've got an orange table in the middle, part-time.
>
> **[0:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=20)** And the blue table is a contract table.
>
> **[0:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=23)** And they've got different numbers of rows in them.
>
> **[0:25](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=25)** You can see as I scroll up and down here.
>
> **[0:27](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=27)** And imagine these might be our master lists.
>
> **[0:30](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=30)** And in real life, of course, they would probably have a lot more columns than this.
>
> **[0:33](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=33)** What we want to do is to create a subordinate list, and maybe we've done it manually already over columns, M, N, and O, where we've taken all that data and essentially stacked it up.
>
> **[0:44](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=44)** Then, we might want to sort it and do other things with it.
>
> **[0:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=47)** But at different times, these tables will change.
>
> **[0:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=51)** New employees, employees leave.
>
> **[0:53](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=53)** It's going to be changing a lot, let's say.
>
> **[0:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=56)** And we want our list over in column M to always be up-to-date and reflect any changes.
>
> **[1:01](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=61)** And it will if we create the data by using VSTACK.
>
> **[1:06](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=66)** So, I'll highlight the existing data here.
>
> **[1:08](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=68)** Press Control + Shift + Down Arrow here, and press Delete.
>
> **[1:13](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=73)** It's gone. Let's use VSTACK.
>
> **[1:15](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=75)** Remember, each of these tables here has a name suggested by what's in the status column.
>
> **[1:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=80)** So, =VSTACK, as you're typing it, =VS + Tab.
>
> **[1:24](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=84)** Full-time comes first.
>
> **[1:26](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=86)** Says we see it in the list there, we can double-click it, comma, then part-time.
>
> **[1:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=92)** There it is, double-click, comma and contract.
>
> **[1:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=96)** There it is, double click, that's it.
>
> **[1:38](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=98)** Enter, we got it.
>
> **[1:40](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=100)** So, any changes we make in the other tables, the three tables to the left will automatically be displayed in our list over here.
>
> **[1:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=107)** We've stacked the data vertically, VSTACK.
>
> **[1:51](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=111)** Now on the next worksheet, HSTACK, we've got a different need here.
>
> **[1:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=116)** We've got four different sets of quarterly data here, and we want to stack these horizontally.
>
> **[2:01](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=121)** We want to see them across the screen, and here too.
>
> **[2:04](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=124)** You might imagine this being done on a separate worksheet.
>
> **[2:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=127)** It'll always be in sync with the data that we see over in columns A, B, and C.
>
> **[2:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=132)** But we want to stack these horizontally, =HS + Tab.
>
> **[2:20](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=140)** And here's the first set of data right here.
>
> **[2:23](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=143)** Comma, and the next set, comma, and the next one, comma and one more.
>
> **[2:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=152)** And Enter. We've got our data.
>
> **[2:34](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=154)** Not exactly as readable as it might be.
>
> **[2:36](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=156)** So what we could consider doing is, let's do this all over again, but include that empty column to the right, column D.
>
> **[2:45](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=165)** So starting all over again, why not again, =HS + Tab and include the empty column to the right, column D, comma.
>
> **[2:56](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=176)** And we'll do this for all four sets of data there.
>
> **[3:02](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=182)** After I just highlighted the last range, Enter.
>
> **[3:06](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=186)** And we've got our list.
>
> **[3:07](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=187)** That looks a lot better than what we saw before.
>
> **[3:11](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=191)** Now without going into the details, you'll find at different times that HSTACK can also be used with other kinds of functions.
>
> **[3:19](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=199)** Now, it's beyond the scope of this course to be talking about the GROUPBY function in detail, but over in column A here, we're using a function called GROUPBY, and notice how HSTACK is being used here.
>
> **[3:32](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=212)** It's stacking two different kinds of criteria that are needed.
>
> **[3:37](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=217)** So, without going into detail, in this list here, instead of using just one field here, which is most common, if you need to use two or more, you'll be using HSTACK.
>
> **[3:47](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=227)** So, you might run into situations where HSTACK is going to be used in that context.
>
> **[3:52](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=232)** It seems completely different from what we saw previously, but on the other hand, it's a reminder that these functions have uses that sometimes we don't even think about as we first hear the description of them.
>
> **[4:03](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=243)** So, HSTACK stacking data horizontally.
>
> **[4:06](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=246)** In this case, a whole range of cells within a formula.
>
> **[4:09](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=249)** And earlier, we saw VSTACK.
>
> **[4:12](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=252)** I think this is likely to be used more commonly by most people, but again, we know how Excel is used by so many different kinds of people with so many different kinds of uses.
>
> **[4:21](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/vstack-hstack-stack-mutiple-arrays-into-a-vertical-horizontal-array?u=76281980&t=261)** No question. Two viable functions, VSTACK and HSTACK.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2)
> **Env Vars:** vstack (8), hstack (8), groupby (2)
> **UI Navigation:** double-click (2), scroll up (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (2)
> **Analogies:** imagine (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Your next steps in Excel](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/your-next-steps-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/your-next-steps-in-excel?u=76281980&t=0)** - [Lecturer] After viewing this course, you might be saying, "What's up next?
>
> **[0:03](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/your-next-steps-in-excel?u=76281980&t=3)** "What else do I need to learn about [[Microsoft Excel|Excel]]?"
>
> **[0:06](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/your-next-steps-in-excel?u=76281980&t=6)** As you explore [[LinkedIn]] Learning, you'll find many courses on this software including charts, formatting, [[Pivot Tables]], tips and tricks, essentials, and quite a few others.
>
> **[0:18](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/your-next-steps-in-excel?u=76281980&t=18)** Most Excel courses are identified by the Excel version and many of them explore additional features related to topics covered in this course.
>
> **[0:27](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/your-next-steps-in-excel?u=76281980&t=27)** Be sure to check back often as new courses are continually being released.
>
> **[0:31](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/your-next-steps-in-excel?u=76281980&t=31)** I hope you found this course valuable.
>
> **[0:33](https://www.linkedin.com/learning/excel-lookup-functions-in-depth-24287728/your-next-steps-in-excel?u=76281980&t=33)** Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[LinkedIn]] (1), [[Pivot Tables]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - [lecturer] (1)


## Instructor

- [[Dennis Taylor]]

## Resources

- Exercise files available

## Skills Covered

- Microsoft Excel

## Path Context

### In [[Advance Your Skills with Excel Formulas and Functions]]
← [[Excel Formulas and Functions Quick Tips]] | **3 of 5** | [[Excel- Financial Functions in Depth]] →

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