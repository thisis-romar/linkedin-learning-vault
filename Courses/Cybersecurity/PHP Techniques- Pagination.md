---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: php-techniques-pagination
url: "https://www.linkedin.com/learning/php-techniques-pagination"
duration_minutes: 71
duration: 1h 11m
level: Intermediate
updated: 6/15/2021
learners: 35332
skills:
  - PHP
exercise_files: true
github: "https://github.com/LinkedInLearning/php-techniques-pagination-2884225"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGTEjxoHoClkw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1647638529487?e=2147483647&amp;v=beta&amp;t=ijjXafCHfCB21Avkq9_pWqoL2WdXW0K5OpbPFwicpdY"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Advance Your PHP Skills]]'
prev_courses:
  - '[[PHP- User Authentication]]'
next_courses:
  - '[[Advanced PHP- Debugging Techniques]]'
path_nav: '[{"path":"Advance Your PHP Skills","position":6,"total":7,"prev":"PHP- User Authentication","next":"Advanced PHP- Debugging Techniques"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/software-development
  - topic/web-development
  - skill/php
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/PHP%20Techniques-%20Pagination.md)

![PHP Techniques: Pagination](https://media.licdn.com/dms/image/v2/C4E0DAQGTEjxoHoClkw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1647638529487?e=2147483647&amp;v=beta&amp;t=ijjXafCHfCB21Avkq9_pWqoL2WdXW0K5OpbPFwicpdY)

# PHP Techniques: Pagination

> Learn how to paginate a list of items or database records using PHP. In this course, Kevin Skoglund reviews the fundamentals of pagination, a helpful design pattern for breaking down large data sets into smaller, more manageable sections. He provides use cases and shows how to write the actual PHP code to find records and display a certain number per page. He then shows how to paginate records fro

> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-pagination) | 1h 11m | Intermediate | 35K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Showing posts in pages using PHP
  - Using the exercise files on GitHub
- [**1. Pagination Fundamentals**](#1-pagination-fundamentals) (3 videos)
  - Pagination overview
  - Finding the pagination variables
  - Using total record count
- [**2. Database Record Pagination**](#2-database-record-pagination) (3 videos)
  - Setting up the project database
  - SQL LIMIT, OFFSET, and COUNT
  - Paginating database records
- [**3. Links to Paginated Pages**](#3-links-to-paginated-pages) (4 videos)
  - Adding links to previous and next pages
  - Creating pagination links
  - Showing an excerpt of the page list
  - Remembering the current page
- [**4. Object-Oriented Pagination**](#4-object-oriented-pagination) (3 videos)
  - Defining a pagination class
  - Outputting links for previous and next pages
  - Outputting pagination links
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Showing posts in pages using PHP
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-pagination/showing-posts-in-pages-using-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/showing-posts-in-pages-using-php?u=76281980&t=0)** - [Kevin] Pagination is a valuable skill for all PHP developers to learn.
>
> **[0:04](https://www.linkedin.com/learning/php-techniques-pagination/showing-posts-in-pages-using-php?u=76281980&t=4)** Presenting long lists of records as separate pages of results is a great user interface technique.
>
> **[0:10](https://www.linkedin.com/learning/php-techniques-pagination/showing-posts-in-pages-using-php?u=76281980&t=10)** It also reduces the strain of the web server so that web pages load faster and the server can handle more traffic.
>
> **[0:16](https://www.linkedin.com/learning/php-techniques-pagination/showing-posts-in-pages-using-php?u=76281980&t=16)** My name is Kevin Skoglund.
>
> **[0:17](https://www.linkedin.com/learning/php-techniques-pagination/showing-posts-in-pages-using-php?u=76281980&t=17)** I'm a web developer who's been using PHP for over 20 years.
>
> **[0:21](https://www.linkedin.com/learning/php-techniques-pagination/showing-posts-in-pages-using-php?u=76281980&t=21)** Let's get started learning how to use pagination in our PHP projects.

> [!info]- Semantic Content
>
> **CLI Commands:** php (3)
> **Env Vars:** php (3)
> **Code Keywords:** interface (1), let (1)
> **Definitions:** is a  (2)
> **Speakers:** - [kevin] (1)

#### Using the exercise files on GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=0)** - [Instructor] All of the exercise files for this course are available in a GitHub repository.
>
> **[0:05](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=5)** You can find it at this URL.
>
> **[0:07](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=7)** It's a project hosted by the LinkedIn Learning account called php-techniques-pagination-2884225.
>
> **[0:17](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=17)** The repository has branches that correspond to each of the videos in the course.
>
> **[0:21](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=21)** You can use the branch pop-up menu to switch to a specific branch and review the code for a specific video.
>
> **[0:28](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=28)** For example, the branch titled 01_03b would show you the code for chapter one and the third video.
>
> **[0:36](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=36)** Branch names with the B at the end indicate they contain code as it is at the beginning of the video.
>
> **[0:41](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=41)** Branch names ending with E contain its state at the end of the video.
>
> **[0:45](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=45)** You can also download the code to work along with me.
>
> **[0:47](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=47)** If you're a Git user, then you can clone the repository by clicking on the Code button and then clicking on the clipboard icon to copy the URL.
>
> **[0:58](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=58)** Then you can type git clone and paste in the URL that you copied to your clipboard.
>
> **[1:03](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=63)** You will also notice this is the same URL as the GitHub repository, but with .git at the end.
>
> **[1:09](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=69)** Then you can navigate into the cloned project and check out the branch you want.
>
> **[1:14](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=74)** The branch 01_01b is the start of the course.
>
> **[1:19](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=79)** You don't need to know Git or have a GitHub account to follow along.
>
> **[1:22](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=82)** If you choose the branch that you want, you can click on the Code button and then choose to download a ZIP file which will contain the code for that branch only.
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=92)** Once it downloads, you can decompress the file and open the project in a text editor to get started.

> [!info]- Semantic Content
>
> **CLI Commands:** git (4), find (1), php (1)
> **Env Vars:** url (4), zip (1)
> **Tools:** github (3)
> **UI Navigation:** switch to (1), click on (1), open the (1)
> **Exercise Files:** exercise files (1), download the (1), zip file (1)
> **Code Keywords:** switch (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Pagination Fundamentals

> [↑ Back to Table of Contents](#table-of-contents)

#### Pagination overview
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=0)** - Let's begin with an overview of pagination.
>
> **[0:03](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=3)** We'll learn what it is and the underlying concepts that make it work.
>
> **[0:06](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=6)** We use pagination as a user interface for displaying and working with a long list of items.
>
> **[0:12](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=12)** A short list can fit on a single screen and it's easy to work with.
>
> **[0:16](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=16)** For example, you might have a list of 15 colors used on a website.
>
> **[0:20](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=20)** But when a list gets long, it becomes unwieldy.
>
> **[0:23](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=23)** For example, if you had a list of 20,000 customers, they would not all fit on a single screen at once.
>
> **[0:29](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=29)** The list is visually overwhelming to the user and they would have to scroll a lot to find a particular customer.
>
> **[0:35](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=35)** It also requires the web server to do a lot of work, retrieving, processing, and displaying 20,000 customers.
>
> **[0:43](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=43)** That requires time, processing power, and memory that a web server could use responding to other requests instead.
>
> **[0:50](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=50)** Adding search features might help in this particular case, but there could still be a lot of customers in those search results.
>
> **[0:57](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=57)** A better technique is to paginate the results.
>
> **[1:00](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=60)** Pagination breaks the list into pages and shows one page at a time, a subset with links to get to the other pages.
>
> **[1:09](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=69)** There might be a link to the next page, to the previous page, or a list of numbers to let you jump directly to a page.
>
> **[1:16](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=76)** It's also common to show information about how the complete list compares to the subset that's being shown.
>
> **[1:22](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=82)** It could be the number of total items, the total number of pages, or the number of items being shown on the current page.
>
> **[1:29](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=89)** You've seen pagination in action if you've ever searched for anything online.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=93)** When I search for the word "pagination" on Bing, it tells me there are 43 million results.
>
> **[1:38](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=98)** Now I certainly don't want to see all 43 million results in one long, scrolling page.
>
> **[1:43](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=103)** Instead, I see a subset of those results.
>
> **[1:47](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=107)** If I scroll all the way to the bottom, you'll see that there's a list of numbers here and a forward and back arrow.
>
> **[1:54](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=114)** If I click on the forward arrow, it takes me to the next page of results.
>
> **[1:59](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=119)** You can see up here that it tells me that it's records 25 through 38 out of those 43 million.
>
> **[2:05](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=125)** Google does the same thing.
>
> **[2:06](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=126)** If we scroll down to the bottom here, you'll see that it does its pagination by putting an O over every one of those numbers and a red O indicates the page that I'm on currently.
>
> **[2:17](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=137)** This shows the basic idea.
>
> **[2:19](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=139)** This is what we want to be able to do in our PHP projects.
>
> **[2:22](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=142)** In this course, you have the option to apply pagination directly to one of your projects as we work, or you can use the exercise files and the demo project that I've included there.
>
> **[2:33](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=153)** It's a very simple PHP project, primarily made up of these two pages here, customers dot PHP and customers no DB dot PHP.
>
> **[2:42](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=162)** These are files that are there to help you.
>
> **[2:43](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=163)** Let's take a look.
>
> **[2:44](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=164)** Let's start by looking at customers no DB dot PHP.
>
> **[2:48](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=168)** Most of the time when you're doing pagination, you're going to be working with a database because databases are good at storing lots of records, but it doesn't have to be true.
>
> **[2:56](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=176)** You could get your results from somewhere else.
>
> **[2:59](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=179)** They might be coming from a CSB file or from a third-party API.
>
> **[3:03](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=183)** This is going to demonstrate how we can work without using a database, while customers dot PHP is going to focus on using an SQL database.
>
> **[3:11](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=191)** You'll see here that it includes initialized dot PHP.
>
> **[3:14](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=194)** You can look at initialized dot PHP and see that that's loading in functions, database, and query functions, so that those are available to us.
>
> **[3:20](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=200)** And you can browse through each one of those to see the kinds of functions that I've included already as a starter project.
>
> **[3:27](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=207)** These functions will be familiar to anyone who took PHP with MySQL Essential Training.
>
> **[3:33](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=213)** If we go back to customers no DB, you'll see that it's got some HTML, and then it's just iterating through a list of the customers into a table.
>
> **[3:41](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=221)** And we can see that if we go into Firefox, it'll just come up with a basic customer list.
>
> **[3:46](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=226)** Right now that's a long, scrolling list.
>
> **[3:48](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=228)** What we want to do is apply pagination to it.
>
> **[3:51](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=231)** And then we'll learn how to do the same thing working with a MySQL database.
>
> **[3:55](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=235)** Again, it's up to you how you want to follow along.
>
> **[3:57](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=237)** You can put pagination straight into one of your projects.
>
> **[4:00](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=240)** You can work on the no database version.
>
> **[4:03](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=243)** Or you can set up a MySQL sample database to go with this project.

> [!info]- Semantic Content
>
> **CLI Commands:** php (9), mysql (3), make (1), find (1)
> **Env Vars:** php (9), csb (1), api (1), sql (1), html (1)
> **Code Keywords:** let (4), interface (1), case, (1), else. (1)
> **UI Navigation:** click on (1), scroll down (1)
> **Exercise Files:** exercise files (1), starter project (1)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Tools:** firefox (1)

#### Finding the pagination variables
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=0)** - In order to write code for pagination, we need to know three values.
>
> **[0:05](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=5)** We're going to need to know the current page, the number of records per page, and the total record count.
>
> **[0:11](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=11)** If we have these three pieces of information, we'll be able to calculate everything else we need to know for pagination.
>
> **[0:17](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=17)** The first two are the most important.
>
> **[0:18](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=18)** Let's look at those to begin with.
>
> **[0:20](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=20)** The current page will be sent with the request, usually it's in the URL query parameters.
>
> **[0:25](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=25)** That's how the web server knows which page of records it should return.
>
> **[0:29](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=29)** If the URL has page one, it returns page one, if it has page five, it returns page five.
>
> **[0:34](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=34)** We can retrieve that value in PHP using the GET superglobal.
>
> **[0:38](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=38)** I'm also using the null coalesce operator introduced in PHP seven to default, to a value of one, anytime the value of page is not set.
>
> **[0:46](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=46)** That's those two question marks there.
>
> **[0:48](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=48)** It's important to know that the value that we get back from GET is always going to be a string.
>
> **[0:53](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=53)** So you can see that I'm typecasting that value to be an integer using int.
>
> **[0:58](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=58)** It's helpful for the current page to always be an integer because then I can compare it to other page numbers and add and subtract it in order to get the next and the previous pages.
>
> **[1:08](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=68)** The next and previous page links would use the same URL as the current page, but they would use a different value for the page parameter.
>
> **[1:15](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=75)** So you would start out on page one, clicking the next page link would send a page parameter of two, then PHP would grab that value and use it for the current page, and the value of next page would become three, and so on.
>
> **[1:27](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=87)** The records per page is usually a variable that you set in your code.
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=92)** Some lists might show 20 records per page, while others show 30.
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=95)** There's no set standard, you get to decide.
>
> **[1:38](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=98)** I think values of 20 to 30 are the most common, but you can also set per page to be one, and get a slideshow type effect so that every time you clicked next, you see the next slide with the next item.
>
> **[1:50](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=110)** If you know the current page and the records per page, then you can calculate the offset value for the current page.
>
> **[1:57](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=117)** The offset is the number of records that need to be skipped over to get to the first record of the current page.
>
> **[2:04](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=124)** You can think of it as how we find each pages starting point.
>
> **[2:07](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=127)** This table gives you some examples of offsets that hopefully make this clearer.
>
> **[2:12](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=132)** When the current page is one, we plugged that into the formula and we get back an offset of zero, because there's zero records we need to skip over.
>
> **[2:19](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=139)** So we'll be viewing records one through 20.
>
> **[2:22](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=142)** When we go to page two, now we need to skip over those first 20 records.
>
> **[2:26](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=146)** So the offset becomes 20 and we're showing records 21 to 40.
>
> **[2:30](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=150)** By the time we get to page five, we're skipping over 80 records and showing records 81 to 100.
>
> **[2:36](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=156)** You get the idea.
>
> **[2:37](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=157)** Let's try using these in our code.
>
> **[2:40](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=160)** The items that we're paginating are most often going to be records stored in a database, because the database has have the ability to store lots of information, but they don't have to be.
>
> **[2:49](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=169)** In the page customers_no_db.php, I'm instead going to be using an array of values, and they're found inside this file, customers_ray.php.
>
> **[3:00](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=180)** If you look in there, you'll see that it's setting a variable of all customers equal to an array, and that array has 2000 elements that are randomly generated customer names.
>
> **[3:10](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=190)** So all those values are going to be set and available inside all customers.
>
> **[3:14](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=194)** For now you can see I'm just setting customers, which is the ones I want to display, equal to all customers.
>
> **[3:20](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=200)** Down here it just iterates through the customers to show each one of their first names and last name.
>
> **[3:26](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=206)** What I want to do is instead of using all customers, I want to paginate that list.
>
> **[3:31](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=211)** Right now, It's one long scrolling list.
>
> **[3:34](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=214)** If we scroll down, you'll see it's a lot of names here.
>
> **[3:36](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=216)** Instead, we want to return paginated results.
>
> **[3:40](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=220)** So we'll begin by figuring out our per page value.
>
> **[3:43](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=223)** Again, that's a value that we decide, I'm going to set it to be 20, and then we want to get the value of the current page.
>
> **[3:50](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=230)** The current page is going to be equal to, whatever's in the GET superglobal for page, and if there is no value set, we want to set it to one, that's that null coalesce operator.
>
> **[4:03](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=243)** I'm going to put that whole thing in parentheses, so that it happens first, and then whatever I get back it could be a string if it came in from the GET superglobal or it might be an integer.
>
> **[4:13](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=253)** I'm going to make sure that it's an integer, by typecasting it like this.
>
> **[4:17](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=257)** Now I have the current page value, and now I can calculate that offset.
>
> **[4:22](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=262)** So the offset it's going to be equal to the per page value times, and then in parentheses, current page, minus one, because the first page does not have an offset.
>
> **[4:34](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=274)** So that makes sense, It would be zero times per page, offset would be zero.
>
> **[4:38](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=278)** Once we have this value, now we can get a subset of all customers.
>
> **[4:44](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=284)** Because it's an array, we'll do that using array slice.
>
> **[4:48](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=288)** Array, slice, the PHP function, the first argument is going to be the array we want to use, that's all customers.
>
> **[4:57](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=297)** And then the next value is the starting point.
>
> **[4:59](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=299)** The starting point is going to be offset.
>
> **[5:02](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=302)** Now you'll remember that arrays are zero indexed.
>
> **[5:05](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=305)** So we actually need to subtract one from that because it's zero indexed, but we don't want to start with the offset, the offset is the number of records to skip, We want to start at the record after that.
>
> **[5:17](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=317)** So it's plus one.
>
> **[5:18](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=318)** So those cancel out and we can just use the offset.
>
> **[5:22](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=322)** So the offset will be our starting point, and how many records do we want to return after that?
>
> **[5:26](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=326)** We want to stop after we get two per page.
>
> **[5:29](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=329)** So starting at offset, give me back 20 records.
>
> **[5:32](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=332)** That's what this says.
>
> **[5:33](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=333)** Let's save it.
>
> **[5:35](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=335)** Let's go into Firefox and let's try it out.
>
> **[5:37](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=337)** And we reload the page.
>
> **[5:39](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=339)** You'll see that we get back just those first 20 records.
>
> **[5:42](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=342)** That's it, it's not the long scrolling list anymore.
>
> **[5:45](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=345)** If we come up here and we type page equals two, you'll see now we get the second page of results.
>
> **[5:53](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=353)** And if I come up here and I type page equals five, we get back the fifth page of results.
>
> **[5:58](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=358)** And so on.
>
> **[5:59](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=359)** That's the basics of pagination.
>
> **[6:01](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=361)** We just take a full set, we figure out what the current page is, how many items per page, we calculate the offset, and then we can find the subset of records that we're looking for, and display only those records.
>
> **[6:13](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=373)** But keep watching, because while the basics are simple, there are a lot of improvements we can make to this.

> [!info]- Semantic Content
>
> **CLI Commands:** php (6), make (3), find (2)
> **Code Keywords:** let (5), this. (2), return. (1), default, (1), function (1)
> **Env Vars:** php (4), url (3)
> **API Endpoints:** get  (3), get
 (1)
> **File Paths:** customers_no_db.php (1), customers_ray.php (1)
> **Code Identifiers:** customers_no_db (1), customers_ray (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Tools:** firefox (1)

#### Using total record count
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=0)** - [Instructor] In this movie, we're going to improve on our pagination by using the total record count.
>
> **[0:05](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=5)** In the last movie, we learned how to work with the first two pagination variables, current page and number of records per page.
>
> **[0:11](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=11)** And that allowed us to get the offset and to do the core part of our pagination.
>
> **[0:15](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=15)** But there's a third one that's very useful, which is determining the total record count.
>
> **[0:20](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=20)** There are a number of different ways that we can figure out what this count is, and that value depends on where the items are being stored.
>
> **[0:26](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=26)** If they're in an array, that we can use PHPs count function, in order to count them.
>
> **[0:31](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=31)** if they're stored in a database, then we can write an SQL statement for it.
>
> **[0:35](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=35)** We'll learn how to do that in a moment, the total number of pages, is going to be the total count divided by the number of records per page, and then we take the ceiling of that value.
>
> **[0:47](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=47)** Think about that for a moment.
>
> **[0:48](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=48)** If we had 20 records per page, and we had 25 records, then if we took total count 25 divided by 20, we would get one with a decimal after it.
>
> **[1:00](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=60)** We want to round up, because the total pages would be two, those other five items, they have to go on the second page.
>
> **[1:07](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=67)** So that's why we use the CEIL function in order to get this ceiling of that value to round up.
>
> **[1:13](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=73)** Knowing the total number of pages is going to be helpful in a number of ways.
>
> **[1:16](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=76)** It'll allow us to create links, to all of the number of pages, and we can tell if we've reached the last page or not.
>
> **[1:22](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=82)** For example, we'll know for on the first page, if current page is equal to one, and we'll know if we're on the last page, if current page is equal to total pages, that can be helpful.
>
> **[1:31](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=91)** For example, we probably don't want to have a next link, when we're on the last page, we probably want to make that disabled or disappear altogether.
>
> **[1:38](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=98)** Let's calculate the total count and see how we can use it in our project.
>
> **[1:42](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=102)** Let's figure out the total account right here below customers.
>
> **[1:45](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=105)** So we're going to use the total account, and because we're working with an array in PHP, we can just use count.
>
> **[1:51](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=111)** In order to do that, we want to count all customers, not just the customers on this page, which is what is inside this customer's variable, we want to use all customers.
>
> **[2:01](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=121)** That's the original array that has 2000 customers in it.
>
> **[2:05](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=125)** So that'll give me my total count, I should get back 2000, and then from there we can figure out our total pages.
>
> **[2:11](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=131)** Total pages equals the ceiling, when we take the total count, and divide it by the records per page, okay?
>
> **[2:20](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=140)** So once we have total pages, then we can display it.
>
> **[2:22](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=142)** Let's come down here, I'll add some P tags, and I've already got a class in my style sheets for our page status.
>
> **[2:31](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=151)** So if I use class equals page status, it'll be nicely centered for me.
>
> **[2:36](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=156)** And we can take a look at what those are here, just so you can see page status, is just going to have width 100 text align center.
>
> **[2:45](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=165)** So if we come back over here inside that page status, let's now add some PHP code, I'll put PHP echo, and then we'll put in some content here, I'll close my PHP tags, inside here let's do page, and we're going to be working with the current page, so the page is current page of, and then we'll drop in the total pages.
>
> **[3:11](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=191)** So page one of 10 for example, would be what kind of thing it would output.
>
> **[3:17](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=197)** Let's save it, and let's take a look.
>
> **[3:18](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=198)** Let's come back over here or reload our page, it was already on page five, so it gives me back page five of 100.
>
> **[3:25](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=205)** If I change that to 15, now I'm on page 15 of 100.
>
> **[3:29](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=209)** So that helps me to orient me, and to know where I am, and what page I'm looking at.
>
> **[3:33](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=213)** We can also use it in another way, right now you'll notice that the page value can be absolutely anything that's submitted for the page.
>
> **[3:42](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=222)** So for example, I can come up here, and I can put in page 10,000, right?
>
> **[3:48](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=228)** And it tries to show me page 10,000 of 100, that doesn't make sense.
>
> **[3:52](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=232)** You can also put negative numbers up there.
>
> **[3:54](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=234)** Those don't really make sense, it's not really what we want.
>
> **[3:57](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=237)** So I'm going to add some code here, to check and make sure that the current page, is within reasonable boundaries.
>
> **[4:03](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=243)** So I'll do an if statement, and let's say if the current page is less than one, or if the current page is greater than the number of total pages, then it's out of bounds.
>
> **[4:21](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=261)** And if it's out of bounds, then just that current page to be equal to one.
>
> **[4:26](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=266)** So that'll make sure that whatever number I have here and even if I get garbage back in page, some random string in there, Int will make sure that it's turned into an integer, and it'll make sure that it's inside the boundaries, otherwise, they'll go to page one.
>
> **[4:40](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=280)** Now, of course I'm using total pages, but it's not defined till down here, so I need you to just take these, and just move them up, there they are, so now I have total pages available for me to use.
>
> **[4:52](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=292)** So it's going to count all customers, figure out the total pages, get the current page, make sure that it's within the boundaries, then find that the offset using that value, and then do the pagination from there.
>
> **[5:03](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=303)** Let's save it, let's go back and try it.
>
> **[5:05](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=305)** I'll reload the page, you'll notice that I'm still on 10,000 but I get back page one.
>
> **[5:11](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=311)** It just went to page one, regardless of what I put in there, and if I put in negative 10,000, I still get page one.
>
> **[5:17](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=317)** So ignores anything that's not a valid value.
>
> **[5:20](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=320)** So knowing the total number of pages can help you in a couple of different ways.
>
> **[5:23](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=323)** And soon we'll learn how to use that number, in order to create a list of page numbers so that we can jump directly to a page.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8), php (4), find (1)
> **Code Keywords:** let (11), function (2)
> **Env Vars:** php (4), sql (1), ceil (1)
> **Analogies:** for example (4)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 2. Database Record Pagination

> [↑ Back to Table of Contents](#table-of-contents)

#### Setting up the project database
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=0)** - [Instructor] Now that we know the basics of pagination.
>
> **[0:02](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=2)** Let's learn how to paginates the records in the database.
>
> **[0:05](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=5)** Of course, to do that we'll need a database.
>
> **[0:07](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=7)** You can use the database from an existing PHP project.
>
> **[0:10](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=10)** But I'm going to show you how to set up a simple one to go with the exercise files.
>
> **[0:14](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=14)** I've already taken a few basic steps to set things up.
>
> **[0:17](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=17)** And you should do the same.
>
> **[0:18](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=18)** Make sure that you have a user that can log into mysql.
>
> **[0:21](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=21)** Here I've created a new user called 'php user.'
>
> **[0:25](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=25)** But you can use root or any other SQL user that you already have.
>
> **[0:28](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=28)** Then you'll create the database.
>
> **[0:30](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=30)** I'm calling it php_pagination.
>
> **[0:33](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=33)** You want to make sure that your user has been granted privileges to be able to create tables and add records to that database and then flush those privileges at the end.
>
> **[0:42](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=42)** Once you've done this basic setup, you should be able to go to the command line and access the database using that user.
>
> **[0:48](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=48)** I can do that with mysql -u, then php_user -p to tell I'm going to enter the password and then the name of the database we want to access.
>
> **[0:58](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=58)** php_pagination.
>
> **[1:00](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=60)** When I hit return, it asks for my password.
>
> **[1:02](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=62)** I type it in and then it drops me into mysql.
>
> **[1:06](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=66)** So we know that that user now has access.
>
> **[1:08](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=68)** So I'm going to exit out of there.
>
> **[1:10](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=70)** Now I'm going to populate that database with information and the data that I'm going to populate, is in this customers.sql file.
>
> **[1:17](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=77)** Let's take a look at what's in there.
>
> **[1:18](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=78)** You can see that it just starts out with a create table statement.
>
> **[1:21](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=81)** It's a very simple table.
>
> **[1:23](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=83)** It just has a column for ID, first name and last name.
>
> **[1:27](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=87)** And then it fills that table with 2000 records of sample data customer names.
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=92)** Using these Insert Statements that are here.
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=95)** You'll notice that the names like Tyler Spradley are the exact same names that we have in our customer array.
>
> **[1:41](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=101)** The exact same 2000 names.
>
> **[1:43](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=103)** We're just putting them in the database instead.
>
> **[1:46](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=106)** In order to add those names we can hit the Up Arrow.
>
> **[1:49](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=109)** So we have the same mysql command and then I'll use the less than sign.
>
> **[1:54](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=114)** And then I want to use this file path.
>
> **[1:56](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=116)** So you could type out the file path on the Mac.
>
> **[1:59](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=119)** I can actually drag that in there and it'll auto complete it for me.
>
> **[2:02](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=122)** So there's the path to that file.
>
> **[2:04](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=124)** And when I hit return, it'll ask my password.
>
> **[2:08](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=128)** And then it will execute all the SQL in that file.
>
> **[2:12](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=132)** I'm going to go up and go into mysql again, without the file name after it.
>
> **[2:18](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=138)** I'll type in the password.
>
> **[2:19](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=139)** And now you can see that if I say show tables that I have the tables there.
>
> **[2:24](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=144)** And if I say select all from customers.
>
> **[2:31](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=151)** It'll return back all 2000 of those records.
>
> **[2:34](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=154)** So now we have the data in our database ready to go.
>
> **[2:37](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=157)** Now we just need to make sure that our project is able to access it.
>
> **[2:41](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=161)** So I'll close this up.
>
> **[2:42](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=162)** Inside db credentials.php.
>
> **[2:44](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=164)** You want to make sure that you have the host name, the database name, the user, and the password.
>
> **[2:54](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=174)** Hopefully your password is something better than secret but I'm going to keep it simple.
>
> **[2:57](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=177)** Now I should be able to access it using PHP.
>
> **[3:00](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=180)** Now there's already a lot of database functions that are in database.php that allow me to connect the database to make queries.
>
> **[3:07](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=187)** These are the same useful functions we developed in the PHP with mysql as central training.
>
> **[3:12](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=192)** And we're going to make use of those.
>
> **[3:14](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=194)** Inside customers.php, you can see that it calls initialize which loads up all those functions.
>
> **[3:20](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=200)** Then it calls db_connect, then it calls a function called find_customers.
>
> **[3:24](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=204)** That's defined in query functions.
>
> **[3:26](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=206)** Then you can see find_customers just takes that database connection, construct some SQL, select all from customers ordered by last name and first name.
>
> **[3:35](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=215)** Then it calls db_query to query the database, and returns back the result.
>
> **[3:40](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=220)** If we jumped back over here to customers, you'll see the customers then assigned that to customers.
>
> **[3:46](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=226)** And down here we have a loop that fetches the association from each one, db_fetch association is also back here in database, db_fetch association just calls mysqli_fetch association.
>
> **[3:58](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=238)** We're getting each one of those as an associative array and assign it to customer.
>
> **[4:02](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=242)** So we can call customer first name, customer last name and so on.
>
> **[4:05](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=245)** To prove that all this is working, let's go over to Firefox.
>
> **[4:09](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=249)** And I should be able just to take this file name that's here and just change it to customers.php.
>
> **[4:16](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=256)** And hit return.
>
> **[4:17](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=257)** And it's an unpaginated list of all 2000 customers.
>
> **[4:21](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=261)** You'll know that it's different because these are sorted alphabetically.
>
> **[4:25](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=265)** So it's different than the array list because that was not sorted.
>
> **[4:28](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=268)** Once you have a database, you have it populated with some sample data, and you have PHP set up to connect to it.
>
> **[4:34](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=274)** Then we're ready to learn about how we paginated this list of results.

> [!info]- Semantic Content
>
> **CLI Commands:** php (9), make (6), mysql (6)
> **Code Identifiers:** php_pagination (2), find_customers (2), db_fetch (2), php_user (1), db_connect (1)
> **Code Keywords:** let (3), return, (2), function (1), return. (1)
> **Env Vars:** php (4), sql (3)
> **File Paths:** customers.php (2), customers.sql (1), credentials.php (1), database.php (1)
> **Prerequisites:** set up (2), setup (1)
> **Tools:** command line (1), firefox (1)
> **UI Navigation:** go to (1)

#### SQL LIMIT, OFFSET, and COUNT
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=0)** - [Narrator] To paginate records stored in an SQL database, we need to learn a few techniques to retrieve a subset of the total records.
>
> **[0:07](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=7)** We could retrieve all records and then put them in a PHP array and pick through them to find the ones we want to show but that's not very efficient.
>
> **[0:15](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=15)** We'd be transferring a lot of data from the database that's quickly discarded and that could be thousands or even millions of records.
>
> **[0:22](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=22)** So instead, we want to ask SQL to return just the data that we need.
>
> **[0:26](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=26)** The first SQL we'll need is the LIMIT clause.
>
> **[0:29](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=29)** LIMIT does what it sounds like, it limits the results returned in an SQL query to a maximum number.
>
> **[0:35](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=35)** SELECT ALL FROM customers LIMIT 30, we'll return up to 30 records, not more.
>
> **[0:40](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=40)** You can add it to the end of any SQL statement.
>
> **[0:43](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=43)** If we want to retrieve one page with 30 records, the LIMIT will do that.
>
> **[0:47](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=47)** It's a good alternative to retrieving millions of records and then working with only the first 30.
>
> **[0:51](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=51)** But to work with records after the first 30, we'd need to use an OFFSET clause too.
>
> **[0:57](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=57)** OFFSET works just like what we saw previously, it skips over a number of records when returning results.
>
> **[1:03](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=63)** In SQL, we do it with SELECT ALL FROM customers OFFSET 30 that will skip the first 30 records and then return all resulting records after that.
>
> **[1:12](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=72)** If we combine it together with LIMIT then it allows us to see pages beyond the first page.
>
> **[1:17](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=77)** SELECT ALL FROM customers LIMIT 30 OFFSET 90, would return 30 results after skipping over the first 90.
>
> **[1:25](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=85)** That means we'll be seeing the fourth page of results which are the records 91 through 120.
>
> **[1:30](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=90)** Stop for a moment and appreciate how much more efficient this is.
>
> **[1:34](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=94)** If we have a database table that has one million records in it, we're still only transferring data out of the database for 30 records at a time.
>
> **[1:41](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=101)** Just what we want to show the user.
>
> **[1:43](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=103)** The web server only has to allocate memory to hold 30 records.
>
> **[1:47](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=107)** Even if we ended up viewing every single page in the set, the web server would use less memory and be able to work on requests from other users at the same time.
>
> **[1:55](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=115)** I'm using LIMIT and OFFSET on all customer records, but you could add them to the end of other SQL queries, just as easily.
>
> **[2:02](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=122)** For example, you could query for all active customers in the United States who've made a purchase in the last six months sorted by last name and then use LIMIT and OFFSET to retrieve a single page of those results.
>
> **[2:14](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=134)** LIMIT and OFFSET always go at the end, and LIMIT always goes before OFFSET.
>
> **[2:19](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=139)** Another SQL function we need to learn is COUNT.
>
> **[2:23](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=143)** COUNT returns the number of records that match a query, it does not retrieve the records themselves.
>
> **[2:28](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=148)** Again, this is much faster and more memory efficient than retrieving all of the records from the database and using PHP to count them.
>
> **[2:36](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=156)** COUNT goes into the SELECT clause.
>
> **[2:38](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=158)** When SQL sees that you want to get back a count then it performs the query like normal but it doesn't transfer all the rows, just the number of rows that match.
>
> **[2:47](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=167)** LIMIT, OFFSET and COUNT will be helpful in using the database to find the pagination variables we need and retrieving a subset of the records.

> [!info]- Semantic Content
>
> **Env Vars:** limit (11), sql (9), offset (9), select (4), count (4)
> **CLI Commands:** php (2), find (2)
> **SQL:** select (4)
> **Code Keywords:** function (1), match. (1)
> **Analogies:** just like (1), for example (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [narrator] (1)

#### Paginating database records
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=0)** - [Instructor] In the last movie, we learned how to use SQL limit, offset and count.
>
> **[0:05](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=5)** Let's use those to paginate the database records in a PHP project.
>
> **[0:09](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=9)** I already have my database set up, and "customers.php" is already pulling up an unpaginated list of those customers from the database.
>
> **[0:17](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=17)** It's doing that using the "find customers" function, that's finding all the customers.
>
> **[0:23](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=23)** And then down here, I'm going through and fetching the association out of that result set to show each one.
>
> **[0:28](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=28)** If we go in "query functions", we'll find "find customers".
>
> **[0:31](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=31)** I want to modify it now so that it can do pagination.
>
> **[0:34](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=34)** You could create a separate function if you wanted.
>
> **[0:36](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=36)** Just copy and paste it.
>
> **[0:37](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=37)** But I'm actually going to keep the same name, and I'm just going to allow it to do limit and offset, the two parts that we need for it to do.
>
> **[0:45](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=45)** I'm going to add limit as an argument to this function and then offset as well.
>
> **[0:50](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=50)** So now those will default to zero.
>
> **[0:52](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=52)** If it's sent in though, we want to add it to the end of our SQL query.
>
> **[0:56](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=56)** So we'll tack it onto the end, "SQL equals", and I'm going to put a space just so that it appends nicely with ASC and then "space, limit, space".
>
> **[1:08](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=68)** And then I'll append the value for limit.
>
> **[1:12](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=72)** Now, I'm not going to do it if it's zero.
>
> **[1:14](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=74)** There's no reason to have limit "zero".
>
> **[1:17](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=77)** That's not good.
>
> **[1:18](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=78)** So let's do "if there is a value of limit and it is greater than zero", then we'll add it on there.
>
> **[1:27](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=87)** So if limit is greater than zero, put in the clause.
>
> **[1:30](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=90)** Otherwise don't.
>
> **[1:31](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=91)** There's one more thing I should do here.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=93)** This value is probably going to be a number.
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=95)** But let's make sure by making sure that we escape what value comes in there.
>
> **[1:40](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=100)** In "database.php", I have a function called "db_escape" which calls my SQL real escape string, and make sure that I'm not open to an SQLi injection.
>
> **[1:49](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=109)** So I'm going to just put in "db_escape", and then the first argument will be the database, and the second argument will be whatever I want to escape.
>
> **[1:59](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=119)** That'll make sure that it's a safe value to use.
>
> **[2:01](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=121)** And then let's do the same thing with "offset".
>
> **[2:04](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=124)** Remember limit goes at the end, offset always goes after it Offset goes here, offset goes here.
>
> **[2:12](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=132)** I'll copy this and paste it in here.
>
> **[2:15](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=135)** So that's it.
>
> **[2:16](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=136)** Now if limit and offset are passed in as values, then they'll be added.
>
> **[2:20](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=140)** Now, if they're not, then nothing should change.
>
> **[2:23](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=143)** So let's come here.
>
> **[2:23](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=143)** Let's hit return.
>
> **[2:25](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=145)** You see, it still gives me exactly the same thing an unpaginated list.
>
> **[2:28](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=148)** But if we come over to "customers", and we were to put in values here for the per page and offset, then it would paginate them.
>
> **[2:36](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=156)** Where do we get those values from?
>
> **[2:38](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=158)** It's exactly like what we did with "customers, no db".
>
> **[2:41](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=161)** I'm going to copy all of this here, and we'll reuse it.
>
> **[2:46](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=166)** Let's come over here to "customers" and paste it in.
>
> **[2:50](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=170)** Everything related to total pages, let's just comment out for now.
>
> **[2:55](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=175)** So I'll comment out those lines and these lines here.
>
> **[2:59](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=179)** Alright, so we just have the per page value.
>
> **[3:01](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=181)** We get back current page, and we calculate the offset.
>
> **[3:04](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=184)** Now, find "customers", the limit is the per page value, and the offset is whatever we calculated.
>
> **[3:12](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=192)** So I'll put those in there.
>
> **[3:13](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=193)** We'll save it.
>
> **[3:15](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=195)** We'll come back and reload this page.
>
> **[3:16](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=196)** And now you'll see, I just get one page of results.
>
> **[3:20](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=200)** And we come up here to the URL and I type "page equals five".
>
> **[3:24](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=204)** Now I get back the fifth page of results.
>
> **[3:28](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=208)** Now let's go and do this counting, so we get total pages.
>
> **[3:32](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=212)** What we're going to do is find some way that we can count all customers.
>
> **[3:35](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=215)** I'm going to to query functions.
>
> **[3:36](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=216)** I'm going to write a new function that will do that for us.
>
> **[3:39](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=219)** Going to copy "find customers".
>
> **[3:42](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=222)** I'm going to make a new one here called "count_customers".
>
> **[3:46](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=226)** We don't need any of this pagination inside there because the results will not be paginated.
>
> **[3:51](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=231)** So I can take all of that out and I can take out the order clause because the order doesn't matter but I don't want to select all items from "customer".
>
> **[3:59](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=239)** I want to select the count.
>
> **[4:01](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=241)** That's the important part.
>
> **[4:04](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=244)** Selecting the count from the customers that'll make the query.
>
> **[4:08](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=248)** It'll still return back a result set.
>
> **[4:11](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=251)** It doesn't return back just a number to me, it's a result set which I have to extract the number from just like I normally would use "db_fetch_association" to get back on a row as an associative array and then get the value out of it.
>
> **[4:25](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=265)** I have to do that here as well.
>
> **[4:27](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=267)** I could do that outside the function, but I'm going to go ahead and make the "count customers" function just handle all that for me so that it actually does just return back a number.
>
> **[4:35](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=275)** So I'm going to go ahead and get the array out of it.
>
> **[4:39](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=279)** Using "db_fetch_association" on the result, then I'll get back to the first row of results, and then inside that array, the value that I actually want to give back is going to be this right here.
>
> **[4:51](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=291)** That's the key, that it's going to have that value.
>
> **[4:54](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=294)** So I'll just put the string for count and then "parentheses, exclamation point".
>
> **[4:59](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=299)** So that'll retrieve a result set, get the first row, and then find the count where it's stored in that first row.
>
> **[5:06](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=306)** It'll just return a number to me.
>
> **[5:08](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=308)** Now I could go back over to "customers.php", and instead of all this being commented out, let's take it back in.
>
> **[5:16](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=316)** Let's uncomment it again, and instead of "count all customers", let's change it to "count_customers" and then a parentheses.
>
> **[5:26](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=326)** So," parentheses, parentheses".
>
> **[5:28](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=328)** "Count_customers", that's that new function that we just wrote that will give us our total count which gives us total pages.
>
> **[5:34](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=334)** And then we'll be able to make sure our current page is inside the pages.
>
> **[5:37](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=337)** And then let's also display the pages by using this page status.
>
> **[5:42](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=342)** We'll add that functionality back in as well from "customers, no db".
>
> **[5:47](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=347)** We'll paste that in right here, above the table.
>
> **[5:50](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=350)** Now we go back to our page, and we reload it.
>
> **[5:53](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=353)** It tells us that we are on page five of 100.
>
> **[5:56](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=356)** If we come up here, and we change it to be page 10 we get back page 10 of 100, and so on.
>
> **[6:03](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=363)** Paginating database records is very similar to what we did when we were not working with the database.
>
> **[6:08](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=368)** The fundamental principles are the same.
>
> **[6:10](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=370)** What's different is in the way that we interact with the database, whether it's to count the customers or whether it is to find a page of the customers efficiently.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (8), return. (1)
> **CLI Commands:** find (8), make (7), php (4)
> **Env Vars:** sql (4), php (1), asc (1), url (1)
> **Code Identifiers:** db_escape (2), count_customers (2), db_fetch_association (2)
> **File Paths:** customers.php (2), database.php (1)
> **Cross-References:** in the last (1), go back to (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)


### 3. Links to Paginated Pages

> [↑ Back to Table of Contents](#table-of-contents)

#### Adding links to previous and next pages
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=0)** - [Instructor] Now that we have the fundamentals of pagination for both a non database and a database version, I want to work on adding some features, starting with adding links to the previous and next pages.
>
> **[0:11](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=11)** I'm going to be doing these in the customers .PHP file.
>
> **[0:14](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=14)** You could also add the same thing to the customers nodb.PHP file, and it will work the same.
>
> **[0:20](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=20)** Let's start by going down below our table.
>
> **[0:23](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=23)** See I have a table tag here and right below that I'm going to add a P tag with a class of pagination.
>
> **[0:31](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=31)** And that's where I'm going to put my pagination links.
>
> **[0:34](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=34)** You could do these a lot different ways.
>
> **[0:35](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=35)** You can do them as ULLI tags if you want.
>
> **[0:40](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=40)** And I'm going to do them just as a simple list, all in one row inside these P tags.
>
> **[0:44](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=44)** So the class is pagination, I already have a style for that here.
>
> **[0:48](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=48)** It's a lot like my page status.
>
> **[0:50](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=50)** It's just going to have the width 100 texts align center.
>
> **[0:54](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=54)** I've also got some more here, which we'll come back and look at a little later.
>
> **[0:57](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=57)** So I'm going to add a Previous and Next, and I'm also going to add a HTML character into the- for the left arrow and one here for the right arrow.
>
> **[1:13](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=73)** Oops, miss type that they put an A there.
>
> **[1:16](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=76)** All right. If we come over here and we just take a look at that in the page, we scroll down you'll see it says previous and next.
>
> **[1:22](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=82)** You can see it has that nice arrow on either side of it.
>
> **[1:24](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=84)** You can use whatever you want for these.
>
> **[1:26](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=86)** It could be a link with a word.
>
> **[1:28](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=88)** It can be a symbol, or it can be a link with an image so that an image links each one.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=93)** It's up to you, how you customize it.
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=95)** But the idea is the same. We're going to have something here that we click on to take us to previous and something that'll take us to next.
>
> **[1:41](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=101)** I'm going to break them up a little bit so that we could deal with them separately.
>
> **[1:44](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=104)** I'm going to want to use PHP here.
>
> **[1:47](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=107)** So I'm going to put some PHP tags.
>
> **[1:49](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=109)** I'm going to have a PHP and then let's do echo for now, let me just get rid of this extra one here.
>
> **[2:01](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=121)** Semi-colon at the end and close my PHP tag and just work on previous.
>
> **[2:06](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=126)** And let's get previous to show what we want it to show.
>
> **[2:08](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=128)** So we want it to be a link.
>
> **[2:10](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=130)** So I'm going to need tags around that.
>
> **[2:13](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=133)** A H ref equals and then I'll use double quotes.
>
> **[2:17](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=137)** That's inside double quotes.
>
> **[2:19](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=139)** So I need to escape both of those.
>
> **[2:21](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=141)** And then I'll close the tag.
>
> **[2:23](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=143)** And then at the end, of course I'm going to have the closing tag.
>
> **[2:29](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=149)** So now I've got a basic link and we can actually go over here and try that out.
>
> **[2:32](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=152)** And you see it's a link but it doesn't actually go anywhere yet.
>
> **[2:35](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=155)** So I'm going to fill that out here with a link.
>
> **[2:38](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=158)** So where should the previous page go?
>
> **[2:40](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=160)** We want it to go to the same page that we're on now which is customers dot PHP.
>
> **[2:45](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=165)** And then we want to specify what page it is.
>
> **[2:48](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=168)** And we want to drop in some PHP here.
>
> **[2:51](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=171)** So I'm going to do double quotes so I can escape out of that string for a second.
>
> **[2:55](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=175)** I'm going to concatenate together the value and I to use current page minus one that will give me the value current page is and integer.
>
> **[3:06](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=186)** I can subtract one from it.
>
> **[3:07](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=187)** And that will be the previous page.
>
> **[3:09](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=189)** If we come over here, we save it.
>
> **[3:11](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=191)** We try that out.
>
> **[3:12](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=192)** You'll see that. Now it gives me the page, I would expect.
>
> **[3:14](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=194)** You can see it down at the very bottom.
>
> **[3:16](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=196)** And if I hit previous, it takes me there.
>
> **[3:18](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=198)** Now I'm on page nine.
>
> **[3:19](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=199)** It previous again, I'm on page eight.
>
> **[3:22](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=202)** So it works every time.
>
> **[3:23](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=203)** It just counts down exactly as I'd expect.
>
> **[3:26](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=206)** Now, of course, if I keep going here let's go back to page one.
>
> **[3:31](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=211)** Now, previous would take me back to page zero.
>
> **[3:33](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=213)** That doesn't make any sense.
>
> **[3:35](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=215)** So I also want to just put something around this that says we're only going to do it.
>
> **[3:40](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=220)** If the current page is greater than one.
>
> **[3:42](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=222)** So if current page is greater than one then we will do this echo statement.
>
> **[3:51](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=231)** And now if I come back over here and I reload the page you'll see the previous goes away.
>
> **[3:55](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=235)** Now, next doesn't work yet.
>
> **[3:57](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=237)** But it works exactly the same way.
>
> **[3:59](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=239)** We can copy all of this and I'll come down here and paste it in right below next.
>
> **[4:04](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=244)** I'll copy this bit here and put it in place of the content there.
>
> **[4:10](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=250)** And of course it's not current page minus one.
>
> **[4:14](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=254)** It's current page plus one.
>
> **[4:16](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=256)** Now it's not as current page is greater than one but if current page is less than the total pages.
>
> **[4:26](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=266)** If we're on the last one, then it's equal.
>
> **[4:28](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=268)** We're at the last page.
>
> **[4:30](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=270)** We don't want to show it.
>
> **[4:31](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=271)** So as long as it's less than the total pages then we still want to show the next link.
>
> **[4:35](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=275)** So now let's reload the page.
>
> **[4:36](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=276)** Let we see next, it works.
>
> **[4:39](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=279)** Click on it.
>
> **[4:39](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=279)** Next, next, next.
>
> **[4:43](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=283)** And so on.
>
> **[4:44](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=284)** You can see I'm just going through all the pages.
>
> **[4:46](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=286)** Let's jump here, up to page 99.
>
> **[4:52](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=292)** You can see, I have the next link when I click it.
>
> **[4:55](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=295)** Now, I'm on page 100 and the next link goes away, exactly as we'd expect.
>
> **[5:00](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=300)** So that's all there is to being able to add the previous and next pages.
>
> **[5:04](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=304)** I think it's helpful to step through it in those pieces.
>
> **[5:07](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=307)** Just make sure that you've got something that looks right that it's sort of where you want it on the page and then worry about adding a link then worry about making the link, go to the right place and then add the bells and whistles like making it disappear when you get to those outside boundaries.

> [!info]- Semantic Content
>
> **CLI Commands:** php (8), make (2)
> **Env Vars:** php (8), ulli (1), html (1)
> **Code Keywords:** let (8)
> **UI Navigation:** click on (2), scroll down (1), go to (1)
> **File Paths:** nodb.php (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Creating pagination links
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=0)** - [Instructor] In this movie, we will learn how to add pagination links to take users directly to a certain page number.
>
> **[0:06](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=6)** You remember when we looked at the example for Bing, earlier, it had the pagination at the bottom and it had the left and right arrows, and then it has a set of numbers in between, one, two, three, four, five and number one is underlined 'cause that's the current page I'm on.
>
> **[0:20](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=20)** That's the kind of thing we want to do to our customer list.
>
> **[0:22](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=22)** Instead of just having previous and next, we want to have numbers in between those.
>
> **[0:27](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=27)** So I'm going to come over to customers.php, and right here where that pipe is I'm going to take that out and, instead, I'll add some new PHP tags, and this is where I'm going to put my pagination links.
>
> **[0:40](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=40)** I'm going to start by just doing a simple list of the numbers.
>
> **[0:43](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=43)** I'm not going to worry about linking them yet.
>
> **[0:44](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=44)** Let's just try doing a loop, so I'll do that with a for-loop.
>
> **[0:50](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=50)** We can do that with I, will be our variable, equals one, and while I is less than or equal to the total pages
>
> **[1:02](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=62)** then we want to keep going, and we will increment I after every time, I plus plus.
>
> **[1:10](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=70)** All right, so now we've got our for-loop, so it'll iterate through those a number of times and, for now, let's just say echo and then let's just have it output I, and then let's put a space after it, there we go, that'll make them spaced out.
>
> **[1:25](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=85)** We come back over here, and we reload the page.
>
> **[1:27](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=87)** Oops, total page, I've got a mistake, total pages, there we are.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=93)** And there ya go.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=93)** Now it's a very long list, all the pages from one to 100, but you see that it does work.
>
> **[1:39](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=99)** We'll come back to figure out how to make the list a little more manageable later, but you could see how if you had a list of, like, 10 pages, for example, they would work out okay, or we could take the approach that Bing takes where we only show the first five pages.
>
> **[1:51](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=111)** Let's see how we can make this into a link.
>
> **[1:53](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=113)** The link is going to be very similar to what we had up here, so I'm just going to copy this, and I'll come down here and paste it in.
>
> **[1:59](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=119)** It's not going to say previous anymore though.
>
> **[2:02](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=122)** Instead, that link is going to be with the I in it, so I will just do an I interpolated in there, and the page number is also nothing fancy.
>
> **[2:15](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=135)** The page number is also just going to be I as well.
>
> **[2:19](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=139)** So that's it, it'll just go through those numbers from one up to the total pages, outputting each one of those as a link.
>
> **[2:27](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=147)** Save it, go back and try it out, and there we go, we have that link.
>
> **[2:30](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=150)** I don't have a space after it, so they're all, kind of, run together.
>
> **[2:33](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=153)** Let's add a space at the end, there we go.
>
> **[2:38](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=158)** And now, for example, if I click on 18 it takes me straight to page 18.
>
> **[2:42](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=162)** I click on 70, it takes me straight to page 70.
>
> **[2:45](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=165)** Now if I'm on page 70, you see page 70 is still a link.
>
> **[2:49](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=169)** Notice on Bing, though, we come back over here, they don't bother making one a link.
>
> **[2:54](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=174)** One is not a link because we're already on page one, so that's a good practice as well.
>
> **[2:59](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=179)** So let's add a check, here, to see whether we're on the current page or not.
>
> **[3:02](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=182)** So if the current page is equal to I then we'll know we're on the current page, and we'll do one thing, otherwise we'll go ahead and make it a link.
>
> **[3:17](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=197)** All right, and for this one let's come up here and, instead, just put an echo and let's put in just strong tags, and inside there, of course, will be I.
>
> **[3:32](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=212)** So now I'll just put strong tags on it.
>
> **[3:34](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=214)** I've also got a style here that just says that the color should change when I have a strong tag.
>
> **[3:39](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=219)** You can make it be something else if you want.
>
> **[3:41](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=221)** I also went ahead and just gave some styling and color to my pagination links, as well, just to make sure that they don't have weird colors to them.
>
> **[3:49](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=229)** So here we go, you see there's no space after it, it did turn it blue, which is good, but I'm missing that space, so let me just put a space here, try it again, there we go.
>
> **[4:00](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=240)** So now when I click on 22, I can tell on page 22 because it's highlighted, as well as saying it up at the top and it's not a link anymore.
>
> **[4:08](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=248)** The other ones are links, but that one is not.
>
> **[4:10](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=250)** So that's how you add pagination links to your pages.
>
> **[4:13](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=253)** Of course, this doesn't work great when we've got a hundred different pages and we're working with 2000 records, but you can see how it would work well if, for example, we had five pages or eight pages.
>
> **[4:23](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=263)** When we have a lot more pages, then we probably want to come up with some way that we can excerpt that page list.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this, (1), if, (1)
> **CLI Commands:** make (6), php (2)
> **Analogies:** for example (3), similar to (1)
> **UI Navigation:** click on (3)
> **File Paths:** customers.php (1)
> **Env Vars:** php (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Showing an excerpt of the page list
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=0)** - In this movie, we're going to learn how to show less than the full set of pagination links.
>
> **[0:05](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=5)** We saw the problem that we have in the last movie.
>
> **[0:07](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=7)** If we're just paginating and we have 10 pages to show, it's simple, we just show the numbers one through 10, and they'll fit nicely at the bottom of the page.
>
> **[0:15](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=15)** But what about when we have 100 pages, then suddenly we have this long list that wraps around and it's not so convenient.
>
> **[0:21](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=21)** One way we can deal with this is to excerpt the page list so that we're only seeing a certain portion of it.
>
> **[0:27](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=27)** I often refer to this as being the window of what we show.
>
> **[0:31](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=31)** There are a number of different ways that we can handle this.
>
> **[0:34](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=34)** For example, you can see that Bing shows us two numbers before and after our current page, it also shows us the number one, always, and then it has an excerpt here with the previous and next links on the outside.
>
> **[0:47](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=47)** Google handles it differently.
>
> **[0:49](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=49)** Google shows the five pages before, the current page, and then the four pages after that with previous and next links.
>
> **[0:56](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=56)** There's no set rules on how you handle it, but there are some helpful techniques.
>
> **[1:00](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=60)** If we go to our code here, instead of showing all the pages, what we want to do is we want to have a condition that checks to see whether to proceed with showing the page or not.
>
> **[1:11](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=71)** Let's start by defining a value for our window.
>
> **[1:14](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=74)** I'm going to set it equal to two.
>
> **[1:16](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=76)** You want it to be a fairly small number.
>
> **[1:18](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=78)** And I'll just make a note here that that's window size, I'm just using win 'cause it's nice and short.
>
> **[1:22](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=82)** What I'm going to do is I'm going to make a conditional here that says if certain things are true, then don't go and output the page number, instead, just continue.
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=95)** Continue is a PHP function that tells the loop to just skip to the next iteration.
>
> **[1:40](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=100)** It will never get to these lines down here anymore.
>
> **[1:44](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=104)** All we have to do is figure out what logic we want to use for when it should skip over those pages.
>
> **[1:50](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=110)** I'm going to write code that'll allow three possible cases.
>
> **[1:53](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=113)** The first is when I is greater than one plus the window, which of course will be three, but I'll leave it as a variable, and the case in which I is less than the total pages minus the window.
>
> **[2:14](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=134)** You can see, if it gets close to the edges it'll still show those numbers.
>
> **[2:17](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=137)** It'll show 1, 2, and 3, but if it's greater than that, it won't.
>
> **[2:22](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=142)** And then let's deal with the last case, which is and, and let's do the I minus the current page, we don't know which one's going to be larger, so I'm going to wrap that whole thing in the absolute value.
>
> **[2:40](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=160)** So take the absolute value of the difference between I and the current page, and if it is greater than the window, then we'll continue.
>
> **[2:49](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=169)** You can see how this works.
>
> **[2:50](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=170)** If we come back over here to our page, it's got our customer list, I'm on page 22.
>
> **[2:55](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=175)** I'm going to reload the page, and look at that, I get page 1, 2, 3, and then it starts skipping numbers because those numbers met those conditions.
>
> **[3:04](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=184)** So we're hitting continue, continue, continue until we get to this condition here where suddenly the value of I is close to the current page, so we get 20, 21, 23, 24.
>
> **[3:16](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=196)** And then we get continue, continue, continue, and it just skips until we finally get near the end.
>
> **[3:23](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=203)** Now we don't have those nice dot dot dots there, we could add that.
>
> **[3:28](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=208)** Let's say, for example, echo dot, and then we'll get a bunch of dots here, but we don't want all those dots.
>
> **[3:38](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=218)** What we really want is something that's more efficient than that, that realizes we're inside one of these gap areas.
>
> **[3:44](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=224)** And when we're inside a gap area, don't just keep putting out dots, just put out a couple and then move on.
>
> **[3:50](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=230)** So what I'm going to do for that, I'm going to write a little bit more code in here that just checks to see if we're inside one of those gap areas or not.
>
> **[3:57](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=237)** So when we start out, of course, we're not inside a gap area, so gap is false.
>
> **[4:02](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=242)** And then inside this code, before we continue, if we are not in a gap, right, if we're not already found out that we're in a gap then we're going to do the echo for those dots.
>
> **[4:14](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=254)** I'll put three of them, but now we're inside a gap.
>
> **[4:18](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=258)** So now we'll mark gap equals true.
>
> **[4:20](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=260)** And so we'll keep track of it this way.
>
> **[4:22](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=262)** Now, if we ever come back here and we get past this, then the first thing we want to do is say gap equals false again because we're about to output another number.
>
> **[4:30](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=270)** Right, so that'll reset it again.
>
> **[4:32](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=272)** So this should keep track.
>
> **[4:33](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=273)** As we'll get this printed one time, then gap will be true, so we won't get it anymore until this condition isn't met, and we start getting numbers again, in which case the gap will be turned off again.
>
> **[4:44](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=284)** It'll make a little more sense if we save it, come back here and reload the page.
>
> **[4:48](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=288)** And I think that's more what we're looking for.
>
> **[4:50](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=290)** Could use a nice space after that.
>
> **[4:53](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=293)** There we go, space, and let's reload the page.
>
> **[4:56](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=296)** And there you go.
>
> **[4:57](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=297)** 1, 2, 3, and then we get dot dot dot 20, 21, 22, 23, 24 dot dot dot to 98, 99, 100.
>
> **[5:05](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=305)** Now of course, you can modify the window to be as large or as small as you want.
>
> **[5:10](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=310)** You can rewrite the logic of this conditional statement a number of different ways, but you see the basic idea.
>
> **[5:16](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=316)** As we're looping through there's some times we print numbers, there's some times that we skip numbers.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (10), let (5), this. (1), function (1), case, (1)
> **CLI Commands:** make (3), php (1)
> **Analogies:** for example (2)
> **Env Vars:** php (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### Remembering the current page
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=0)** - In this movie, I want to talk about a common issue when using pagination.
>
> **[0:04](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=4)** That is, how do you remember the page that a user was on so that you can send them back to it?
>
> **[0:10](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=10)** The problem is that anytime you click away from a paginated area, it will forget the current page.
>
> **[0:16](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=16)** Let me explain what I mean.
>
> **[0:18](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=18)** If we have a paginated list of records it's common to have a link that goes with them to view, edit, or delete the record.
>
> **[0:25](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=25)** In this example, there are links to a page that will show more information about a customer.
>
> **[0:30](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=30)** If you click on one of those links the current page number and the customer list will be lost.
>
> **[0:34](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=34)** A user can still use the browser's back button to return to the page they were on.
>
> **[0:39](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=39)** But if there are links on this new page to take the user back to the list, they would take the user back to page one again.
>
> **[0:46](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=46)** That may be acceptable.
>
> **[0:48](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=48)** The first question you should ask is if it is.
>
> **[0:50](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=50)** If so, just let it go back to the default page.
>
> **[0:53](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=53)** If you need to have links that send you back to the paginated page you were on then you have two options.
>
> **[0:59](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=59)** The first is that you can maintain the page parameter in every URL.
>
> **[1:03](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=63)** This works best when there are a few links after you click away from the paginated list.
>
> **[1:08](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=68)** For example, if the show customer page only shows the customer information and then has a link that would go back to the list then you could include the page parameter with the link to go to the page and the page parameter for the link to come back.
>
> **[1:21](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=81)** But that doesn't work so great if the show customer page has other links and actions that you can perform.
>
> **[1:27](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=87)** Maybe there's a link to edit the customer that then takes you to a form which gets submitted and then redirects to the show customer page again.
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=95)** Or maybe you have the ability to add images, addresses phone numbers, and emails to a customer.
>
> **[1:40](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=100)** It would be a hassle to make sure that every link and every form carries that page parameter with it.
>
> **[1:47](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=107)** In that case, you'd be better off storing the page parameter in a cookie or in a session value.
>
> **[1:52](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=112)** Then you can retrieve it whenever you need it again.
>
> **[1:55](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=115)** You can use the stored value before using the default page value which is one.
>
> **[1:59](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=119)** In other words, right after you find the current page, store it.
>
> **[2:03](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=123)** Then anytime you come to that page and no page has been given, before you go with the default value check and see if there's a stored value first.
>
> **[2:12](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=132)** If there's ever a time when you want a link to ignore that saved value and definitely send the user to the first page of the list, then you can explicitly include page equals 1 in the link.
>
> **[2:22](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=142)** For example, if you're coming to that customer list from a top level menu you might want to always go to page one, but if you come from somewhere else, you might want to use the stored value.
>
> **[2:32](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=152)** Hopefully these give you some strategies for remembering the last page viewed in the pagination as the user navigates beyond that page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), delete (1), case, (1), else, (1)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** go back to (2)
> **Analogies:** for example (2)
> **Env Vars:** url (1)
> **Definitions:** in other words (1)
> **Prerequisites:** you need to have (1)


### 4. Object-Oriented Pagination

> [↑ Back to Table of Contents](#table-of-contents)

#### Defining a pagination class
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=0)** - [Instructor] In the previous chapters, we've been using functional programming for our pagination.
>
> **[0:04](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=4)** In this chapter, we will learn to create an object-oriented pagination.
>
> **[0:08](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=8)** It doesn't really matter whether the rest of your code is functional or object-oriented.
>
> **[0:12](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=12)** You can use either version of this pagination code.
>
> **[0:15](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=15)** Both use PHP features that are always available to you.
>
> **[0:18](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=18)** I've gone ahead and added a new file to the project.
>
> **[0:22](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=22)** It's inside the private directory inside the classes directory and it's called pagination.class.php and it just has a simple placeholder for that pagination class.
>
> **[0:31](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=31)** And I've also gone ahead and added to initialize PHP a line that will make sure that that class is loaded in and available to us.
>
> **[0:39](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=39)** Now we just need to fill out that pagination class.
>
> **[0:41](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=41)** The idea behind having this class for pagination is that it will contain all of the information that we need to know about pagination.
>
> **[0:49](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=49)** It can have the logic that's associated with it all wrapped up into one class, so that's all in one place, and we can just call it whenever we need it.
>
> **[0:57](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=57)** We're going to be using this page from one of our customers pages, but let's actually create a new one.
>
> **[1:02](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=62)** I'm actually going to go here to customers and I'm just going to choose Duplicate to duplicate that file and then I'm going to rename it as being customers_oo for object-oriented.
>
> **[1:15](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=75)** So that way I'll have both the functional version that we were working on and the object-oriented version.
>
> **[1:19](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=79)** And I can compare between them and not worry that I might mess something up.
>
> **[1:22](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=82)** All right, so in the object-oriented version of this, a lot of this code is going to be the same.
>
> **[1:27](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=87)** But a lot of this logic that we're doing here is going to move into our pagination class.
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=92)** We already know that there are three key variables that we need to keep track of.
>
> **[1:36](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=96)** The current page, the number of records per page, and the total number of records.
>
> **[1:41](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=101)** So let's go into our pagination class and let's keep track of those using a couple of class variables.
>
> **[1:47](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=107)** So we're going to have public current_page, public $per_page, and public $total_count.
>
> **[2:01](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=121)** So those are going to be variables inside an instance of our class that will tell us what the current page is, what the per page is, and the total count.
>
> **[2:08](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=128)** And we can go ahead and initialize our pagination class with those values right at the beginning.
>
> **[2:13](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=133)** We'll create a constructor function, __construct, and then I'll put in the values, and I'm going to put 'em in in this order.
>
> **[2:23](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=143)** Total_count first, I'll default it to zero.
>
> **[2:27](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=147)** Hopefully we'll always have that value.
>
> **[2:29](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=149)** The page will default to one and per_page will be equal to 20 by default.
>
> **[2:36](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=156)** Okay, so now I've got my constructor function.
>
> **[2:39](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=159)** I need to set these values when those are sent in.
>
> **[2:42](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=162)** So let's do $this and the arrow per_page equals and let's typecast it as an integer whatever is passed in as the per_page value.
>
> **[2:55](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=175)** I'm going to copy that and let's paste it twice more, because this one is going to set total_count equal to whatever the total_count passed in was.
>
> **[3:07](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=187)** And this one is going to set current_page equal to whatever page was, it's a little bit different.
>
> **[3:13](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=193)** I'm just using page here, so don't let that trip you up.
>
> **[3:16](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=196)** So in every case, I'm just taking those values that are passed in, setting them to be integers, and then putting in those variables.
>
> **[3:23](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=203)** Now that on its own is handy, because now I can have a pagination class and any time I want to refer to these values, I can get them out of there, but it can do a lot more.
>
> **[3:31](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=211)** We can make our pagination class smarter.
>
> **[3:34](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=214)** For example, we can create another function called offset and this function can calculate the offset for us.
>
> **[3:42](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=222)** Go back here to customers and here's our offset.
>
> **[3:46](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=226)** I'm going to copy that.
>
> **[3:48](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=228)** Let's paste it in.
>
> **[3:49](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=229)** Now the offset, we don't need to actually have the value set.
>
> **[3:53](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=233)** We're going to take per_page which is stored in the variable this per_page, so I need to add that in front of it, and it also needs to multiply this current_page minus one.
>
> **[4:03](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=243)** And because it's a function, I need to return a value out of it.
>
> **[4:06](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=246)** So that gives me the offset.
>
> **[4:08](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=248)** I can also create another one, public function total_pages.
>
> **[4:16](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=256)** And we'll make this one return.
>
> **[4:19](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=259)** And the formula for total_pages we've got back over here.
>
> **[4:23](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=263)** I'll copy this, and let's paste it in, and it's returning the value using the ceiling.
>
> **[4:29](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=269)** The total_count is stored in that variable and per_page is stored there.
>
> **[4:37](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=277)** So that's it, now our pagination class can calculate the offset and the total pages for us.
>
> **[4:42](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=282)** We don't need this code over here anymore.
>
> **[4:45](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=285)** We also had code here that was checking to see if the current_page was set or not.
>
> **[4:49](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=289)** Let's copy that code.
>
> **[4:51](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=291)** Come back here and as soon as we get a current_page, let's check and see if it's valid or not.
>
> **[4:55](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=295)** As long as we can calculate total_pages down here using the total_count and the per_page, then we can do the current_page and make sure it's inside the boundaries.
>
> **[5:04](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=304)** So this again needs to have this in front of it and I'll put it there and let's put it here.
>
> **[5:12](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=312)** And total_pages is a function, so we need to put the parentheses at the end of it.
>
> **[5:17](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=317)** So there we go.
>
> **[5:18](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=318)** Now it will do the same thing.
>
> **[5:19](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=319)** It'll do that boundary checking for us.
>
> **[5:22](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=322)** So let's save it and let's go back over here and let's create a new instance of this pagination class and let's use it.
>
> **[5:28](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=328)** Let's do it right here above customers.
>
> **[5:29](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=329)** Right before we find the customers, we want to get these values.
>
> **[5:33](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=333)** So I'm going to create a variable called pagination and I'm going to set it equal to a new instance of the pagination class and I'm going to pass in the value for the total_count and whatever we have for the current_page.
>
> **[5:47](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=347)** I'm going to call this just page and the value for per_page.
>
> **[5:54](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=354)** Okay, so we don't need this anymore, because the offset we can figure out.
>
> **[5:57](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=357)** So down here where we want the offset, we know that it's just going to be the pagination class and then offset which is a function.
>
> **[6:07](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=367)** Per_page is also something that's stored in pagination, per_page now, so we don't need to keep track of that anymore.
>
> **[6:16](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=376)** In fact, I'm going to take this out here and let's just put this here.
>
> **[6:19](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=379)** Let's just say it's 20.
>
> **[6:21](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=381)** That way, we won't be tempted to use that variable on accident.
>
> **[6:24](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=384)** So now per_page will be passed in or I can use the default value.
>
> **[6:27](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=387)** I'm going to go ahead and make it explicit.
>
> **[6:29](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=389)** We don't need this check anymore.
>
> **[6:31](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=391)** This check is not bad.
>
> **[6:33](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=393)** I'm going to change it to just be page though, because I don't want it to be confused, and I don't need to worry about making an integer anymore, because it will get typecast as an integer inside that class.
>
> **[6:43](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=403)** So that will give me the page and then total_pages now, we have that we can calculate.
>
> **[6:50](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=410)** So I'll take that bit out.
>
> **[6:52](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=412)** And then let's come down here where we're calling total_pages.
>
> **[6:57](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=417)** Let's make sure we're calling pagination total_pages.
>
> **[7:04](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=424)** And in fact, I'm going to go ahead and just take a second to rewrite this a bit, so that it just says page outside of this.
>
> **[7:11](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=431)** Echo current_page and let's just end that PHP tag of and we'll start a new PHP tag echo pagination total_pages and there we go.
>
> **[7:26](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=446)** So page current_page, this is also going to be pagination current_page.
>
> **[7:32](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=452)** And then pagination total_pages.
>
> **[7:34](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=454)** They wrap kind of funny there, but don't worry about that.
>
> **[7:36](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=456)** Okay, the page links down at the bottom here aren't going to work yet.
>
> **[7:41](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=461)** So let's actually just select all those and take those out.
>
> **[7:43](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=463)** We still have those in that other file if we ever want to grab them again.
>
> **[7:46](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=466)** So let's just go ahead and get rid of them for now and let's just see if our pagination works.
>
> **[7:51](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=471)** Notice how much smaller and simpler this is now.
>
> **[7:54](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=474)** All we do is we count the customers, we get the page that's being sent in, we pass all that to the pagination class to get it set up, and then we find the customers based on the values that it has.
>
> **[8:06](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=486)** All that logic is tucked away inside our class.
>
> **[8:09](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=489)** In an object-oriented project, you might want to have your customers be object-oriented as well, so that you had a customer object and you were asking it to count the customers or asking it to find the customers.
>
> **[8:19](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=499)** I'm not going to do that here.
>
> **[8:20](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=500)** I'm just going to worry about making the pagination class object-oriented.
>
> **[8:24](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=504)** So let's save it and let's see if it works.
>
> **[8:26](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=506)** And instead of customers.php, customers_oo.php, and there we are, page one of 100.
>
> **[8:35](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=515)** There are no pagination links at the bottom, but I can go to page equals 99, and it takes me to the end.
>
> **[8:44](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=524)** So that's it, we now have a pagination class and we've moved a lot of the pagination logic inside of it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (27), function (8), class. (6), public (4), this, (2)
> **Code Identifiers:** per_page (11), current_page (10), total_pages (9), total_count (6), customers_oo (2)
> **CLI Commands:** php (7), make (6), find (3)
> **Env Vars:** php (4)
> **File Paths:** pagination.class.php (1), customers.php (1), customers_oo.php (1)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### Outputting links for previous and next pages
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=0)** - [Instructor] Now that we have a pagination class, let's see how we can move the logic for creating the links to the previous and next pages inside of it.
>
> **[0:08](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=8)** One of the nice things about object oriented programming is that we can take basic core functionality and move it into our objects.
>
> **[0:15](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=15)** So the objects become a little more intelligent and they can calculate values that we need.
>
> **[0:19](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=19)** For example, here we calculated the offset and the total pages.
>
> **[0:23](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=23)** We can do the same thing with links.
>
> **[0:24](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=24)** Our pagination class can know how to output a previous or a next link.
>
> **[0:29](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=29)** If we go to customers.php, we had that kind of code here inside pagination.
>
> **[0:35](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=35)** What I want to do is take this code here and move it inside the class, so that the class itself can be asked to output this for us.
>
> **[0:43](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=43)** So I'm going to copy this.
>
> **[0:44](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=44)** Let's go into the pagination class and I'm going to start by just making a function called previous_link.
>
> **[0:55](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=55)** And I'll paste that code in there.
>
> **[0:57](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=57)** And I'm also going to make another one here.
>
> **[1:00](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=60)** That's going to be called previous_page.
>
> **[1:04](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=64)** And previous_page will be a little bit different.
>
> **[1:06](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=66)** Previous_page will return to us the value of the previous page.
>
> **[1:09](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=69)** And we know what that is, it's right here.
>
> **[1:12](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=72)** Current page minus one.
>
> **[1:14](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=74)** Current page though is stored now in this class variable, this current page minus one and we need to return that value.
>
> **[1:22](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=82)** I'm also going to do one more thing to it which I'm going to store it in prev for a second.
>
> **[1:27](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=87)** And then return.
>
> **[1:29](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=89)** I'm going to check and see is prev going to be greater than zero?
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=95)** If it's zero, then it means that we're already at the current page.
>
> **[1:38](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=98)** So yeah, if it's greater than zero then return it, otherwise return false.
>
> **[1:44](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=104)** So this will allow me to get previous page and I'll either get back a number or I'll get back false.
>
> **[1:50](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=110)** So then in previous link I can make use of that.
>
> **[1:53](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=113)** I can check and see whether previous page is false or not.
>
> **[1:58](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=118)** So if previous page not equal to false then I'll have something to output.
>
> **[2:03](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=123)** I need to make sure I put the dollar sign this and the arrow in front of it.
>
> **[2:06](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=126)** And let's also, instead of using echo here that's a bad practice, I think, inside our objects.
>
> **[2:12](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=132)** So instead I'm going to just build up a string that I will return.
>
> **[2:16](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=136)** So here it's just called link.
>
> **[2:17](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=137)** And at the end I will return back link, whatever value it is.
>
> **[2:21](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=141)** And instead of echo, let's just append onto link.
>
> **[2:25](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=145)** Whatever this value is.
>
> **[2:27](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=147)** Now I don't need to use current page minus one anymore because previous page, if it's not false that will have the value that I want inside of it.
>
> **[2:35](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=155)** And I'm actually going to take all of this to here and I'll put it inside curly braces and just paste it in there.
>
> **[2:43](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=163)** I'm also going to go ahead and just break this line into a new line, just for clarity.
>
> **[2:50](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=170)** There you are.
>
> **[2:50](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=170)** So we have a link that'll go from customers.php with this current page value and it'll say previous on it.
>
> **[2:57](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=177)** Let's put a space at the end just so we make sure that it's always has a space between whatever comes after it.
>
> **[3:03](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=183)** Now customers.php may not be the only page I'm using.
>
> **[3:06](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=186)** Right now it is, but I want this class to be something I can use on a lot of pages.
>
> **[3:10](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=190)** So let's take that out and let's just put in a variable for URL and the previous link will pass in whatever the URL is.
>
> **[3:17](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=197)** It'll default to nothing.
>
> **[3:19](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=199)** There we go.
>
> **[3:20](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=200)** Now we have something that'll output the previous link.
>
> **[3:23](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=203)** Let's do the same thing for our next link.
>
> **[3:27](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=207)** I'll copy of this.
>
> **[3:28](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=208)** You could go over to the next link and remind yourself how we did it if you want.
>
> **[3:31](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=211)** But I'm going to go ahead and just do next page it's going to be equal to next, copy that.
>
> **[3:39](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=219)** Now of course, the next page is going to be current page plus one, and we're not comparing it against zero here.
>
> **[3:45](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=225)** We're checking to see if it's less than or equal to this total pages, right?
>
> **[3:52](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=232)** Total pages we have up here.
>
> **[3:54](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=234)** So it knows how many pages our next should always be less than or equal to total pages, if we're going to show it.
>
> **[3:59](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=239)** And if so, we'll return it, otherwise will return false.
>
> **[4:02](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=242)** So this is going to be next link and it will use next page.
>
> **[4:08](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=248)** We'll check and see if it's false.
>
> **[4:09](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=249)** All of that as the same, but this of course will be different.
>
> **[4:13](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=253)** Instead, it's going to say next and rarr; for the HTML entity for the arrow.
>
> **[4:21](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=261)** All right, so let's go and try these out.
>
> **[4:23](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=263)** We now have an object that should know how to render previous and next links.
>
> **[4:28](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=268)** So let's go back to our object oriented version of the customer's page.
>
> **[4:31](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=271)** And let's scroll down here and below the table we'll put back in a P tag with a class of pagination and let's also then do PHP tags that will echo back the value that we get from pagination previous_link.
>
> **[4:57](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=297)** And then what URL we want in this case the pass in customers_00.php There are a couple of different ways we could come up with that value.
>
> **[5:06](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=306)** Let's just use that for now.
>
> **[5:07](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=307)** And then let's put a PHP tag at the end.
>
> **[5:10](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=310)** Now let's copy that value and let's paste it, and this one will be the next link.
>
> **[5:16](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=316)** And for now, just to keep those separated let's put a pipe between them.
>
> **[5:19](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=319)** I'll reload the page for customers_00.php.
>
> **[5:23](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=323)** And you see, it says next, doesn't have a previous link, 'cause that was on page one.
>
> **[5:27](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=327)** Now I have both previous and next.
>
> **[5:30](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=330)** If I jumped forward to page 99, you'll see it as previous and next.
>
> **[5:35](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=335)** When I click next again now I'm on page 100 and next goes away.
>
> **[5:39](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=339)** So now that logic that we had before has been simplified down to just these two lines because it's all contained in our class.
>
> **[5:47](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=347)** Our class can hold this logic and it's there for us to call it whenever we need it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), class, (2), this. (2), return. (2), pass (2)
> **CLI Commands:** php (7), make (4)
> **Env Vars:** url (3), php (2), html (1)
> **File Paths:** customers.php (3), customers_00.php (2)
> **Code Identifiers:** previous_link (2), previous_page (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)

#### Outputting pagination links
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=0)** - [Instructor] In the previous movie, we moved all the logic for our previous and next links into our object.
>
> **[0:06](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=6)** Let's do the same thing now with our Pagination links.
>
> **[0:09](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=9)** You'll remember that in our customers.php file, we had all this code here, which output the different pagination links.
>
> **[0:16](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=16)** I'm going to copy all of that because we're going to be moving it into our pagination class to use it there.
>
> **[0:22](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=22)** I'll create public, function, and I'll call it a number underscore links.
>
> **[0:29](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=29)** It'll also need a URL just like the other ones did, and it's also going to need a window.
>
> **[0:36](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=36)** We talked about the window earlier.
>
> **[0:39](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=39)** We'll allow that to be passed in.
>
> **[0:40](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=40)** So if you decided you want a different window than two, you can pass it in otherwise it'll use two as default.
>
> **[0:46](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=46)** So now let's go here and let's just paste in that code that we had.
>
> **[0:49](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=49)** You can see that we have a lot of the same thing here, but I don't want to use echo again.
>
> **[0:53](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=53)** So once again I'm going to put output equals, equals It'll start as an empty string, at the end, I will return back whatever output is, and I will just build it up and place it, these echoes I'll just do output dot equals.
>
> **[1:14](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=74)** So that'll just depended on each time to the string, and then I'll return the string at the end.
>
> **[1:19](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=79)** Okay a couple changes that we need to make here.
>
> **[1:21](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=81)** One is we were using Wind before, and I'm using Window.
>
> **[1:24](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=84)** I did that on purpose because instead of setting it to two here, I want to make sure that the value we're given is an integer, and we'll go ahead and use win which is a little shorter.
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=95)** So Window will be passed in default to two.
>
> **[1:37](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=97)** We'll make sure it's an integer, but it'll still be set to the same thing we had before.
>
> **[1:41](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=101)** All of this code will be the same, but some of these variables now are inside the class, or they've become functions.
>
> **[1:46](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=106)** So for example total pages is this total pages, and I'll just copy that because we will replace this total pages with it as well, and current page is this, current page, and down here also , this current page, and, let's see we also need to change this so that it's not always customers.
>
> **[2:15](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=135)** We want to make sure that it can be any URL.
>
> **[2:17](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=137)** So whatever URL is being passed in the rest of this logic is pretty much the same.
>
> **[2:21](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=141)** I want to make one other addition, which is if when is set to zero, then we won't do a window at all.
>
> **[2:27](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=147)** So I'm just going to change this to say when if it is, greater than zero, and all these other conditions, then we'll check and see if it needs to be gaped or not.
>
> **[2:39](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=159)** If when is not set to zero, well than it'll just skip all of this code right here.
>
> **[2:44](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=164)** It'll just go straight down to showing the pages.
>
> **[2:47](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=167)** All right So let's save it and let's go back over to our customers underscore oh oh, and let's copy this, right here paste it in instead of Pagination link, it is now going to be called, Number, links.
>
> **[3:03](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=183)** Exactly the same.
>
> **[3:05](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=185)** Let me just make sure back here that I had spaces after things.
>
> **[3:08](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=188)** I did, space there good.
>
> **[3:11](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=191)** All right So let's go back and try it out.
>
> **[3:13](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=193)** Iron mountain customers Oh, oh, dot PHP.
>
> **[3:16](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=196)** Let's go back to page one, scroll down, and we get what we would expect.
>
> **[3:21](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=201)** Let's go to page three, page five, page seven.
>
> **[3:28](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=208)** Ah there's our window.
>
> **[3:29](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=209)** Right?
>
> **[3:30](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=210)** See hard to see it.
>
> **[3:31](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=211)** So everything is working exactly as we expected.
>
> **[3:33](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=213)** So that's all there is to it.
>
> **[3:35](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=215)** I'm going to make one more improvement.
>
> **[3:37](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=217)** If I want to have all of these links, then let's go ahead and just put all of this logic into our class.
>
> **[3:43](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=223)** So I'll take all of this and copy it.
>
> **[3:45](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=225)** We'll come over to the Pagination class.
>
> **[3:47](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=227)** Let's make another, function here public, function and I'm just going to call it page links.
>
> **[3:56](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=236)** We'll pass in a URL, and inside there I'm going to to paste all of this, but of course I've got to build up this output over time just like we did before.
>
> **[4:07](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=247)** So output is equal to an empty string at the start.
>
> **[4:10](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=250)** Whatever we come up with at the end is what we're going to return back, output, and instead of having all these echo statements inside the PHP tags, I now want to check and see, change this here to be dollar sign output.
>
> **[4:28](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=268)** I'll copy this, put that at the end.
>
> **[4:34](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=274)** I'm also going to want to do it here.
>
> **[4:37](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=277)** Output equals, and I'll put quotes around the whole thing.
>
> **[4:44](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=284)** Of course I need to escape these double quotes that are here, and let's do another output here, same thing put those double quotes around it.
>
> **[4:56](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=296)** Semi-colon at the end, and I need to take away these closing PHP tags, that will do the trick for us, but we can also have one more improvement to it which is we can check and see if, this total pages, actually is greater than one.
>
> **[5:12](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=312)** So do we have any pages to show or not, and if we do, then we're going to help with that.
>
> **[5:19](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=319)** Otherwise we'll just output an empty string.
>
> **[5:21](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=321)** All right So let's save it.
>
> **[5:22](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=322)** Let's go back to customers oh,oh and all of this can be removed, and let me just simplify it down.
>
> **[5:33](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=333)** Give me one second there we go, and instead of previous link, it's now going to be called page links, and that's it.
>
> **[5:42](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=342)** One line in our code handles all of the pagination links for us now.
>
> **[5:47](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=347)** let's come back over here and reload it.
>
> **[5:48](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=348)** oop we had a problem.
>
> **[5:50](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=350)** Ah ha I know what the problem is.
>
> **[5:52](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=352)** If we come back here we forgot to change these to be this, instead.
>
> **[5:57](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=357)** So all of these need to be this.
>
> **[6:00](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=360)** We don't have this variable pagination anymore.
>
> **[6:03](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=363)** Now We come back over here, reload it, and it works as expected.
>
> **[6:08](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=368)** So hopefully you can see why it's nice to work with this object oriented version.
>
> **[6:12](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=372)** We've now got it down to something very simple.
>
> **[6:14](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=374)** We just count the customers, create the pagination object, find the customers, and then when we show them the pagination links we just make one simple call in our code to find those links, and most importantly we can reuse all this functionality on other pages in our project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), this, (5), function (3), public (2), pass (2)
> **CLI Commands:** make (9), php (4), find (2)
> **Env Vars:** url (4), php (3)
> **Cross-References:** go back to (2), we talked about (1)
> **Analogies:** just like (2), for example (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** customers.php (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-pagination/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/next-steps?u=76281980&t=0)** - [Instructor] I would like to thank you for taking "PHP Techniques: Pagination" with me.
>
> **[0:04](https://www.linkedin.com/learning/php-techniques-pagination/next-steps?u=76281980&t=4)** I hope you can immediately find uses for the pagination techniques that we've learned in this course.
>
> **[0:09](https://www.linkedin.com/learning/php-techniques-pagination/next-steps?u=76281980&t=9)** Once you have a good understanding of pagination, you may be interested in the chapter on infinite scrolling in "Ajax with PHP," another course in the library.
>
> **[0:18](https://www.linkedin.com/learning/php-techniques-pagination/next-steps?u=76281980&t=18)** Infinite scrolling loads results in pages, just like we learned in this course, but when the user scrolls to the bottom of the page, Ajax automatically loads the next page and adds it to the end.
>
> **[0:29](https://www.linkedin.com/learning/php-techniques-pagination/next-steps?u=76281980&t=29)** Many popular websites use this technique effectively and you can too.
>
> **[0:34](https://www.linkedin.com/learning/php-techniques-pagination/next-steps?u=76281980&t=34)** I wish you luck with pagination and until next time, happy coding.

> [!info]- Semantic Content
>
> **CLI Commands:** php (2), find (1)
> **Env Vars:** php (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Kevin Skoglund]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/php-techniques-pagination-2884225)

## Skills Covered

- PHP

## Path Context

### In [[Advance Your PHP Skills]]
← [[PHP- User Authentication]] | **6 of 7** | [[Advanced PHP- Debugging Techniques]] →

## Appears In

- [[Advance Your PHP Skills]]

## Related Courses

_Courses sharing skills:_

- [[Essential Statamic for PHP and Laravel Developers]] — PHP
- [[Essential Jigsaw for PHP and Laravel Developers]] — PHP
- [[Advanced PHP- Debugging Techniques]] — PHP
- [[PHP- User Authentication]] — PHP
- [[PHP- Creating Secure Websites]] — PHP

---

[↑ Back to top](#)