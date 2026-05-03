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
created: 2026-05-03
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
  - [Showing posts in pages using PHP](#showing-posts-in-pages-using-php)
  - [Using the exercise files on GitHub](#using-the-exercise-files-on-github)
- [**1. Pagination Fundamentals**](#1-pagination-fundamentals) (3 videos)
  - [Pagination overview](#pagination-overview)
  - [Finding the pagination variables](#finding-the-pagination-variables)
  - [Using total record count](#using-total-record-count)
- [**2. Database Record Pagination**](#2-database-record-pagination) (3 videos)
  - [Setting up the project database](#setting-up-the-project-database)
  - [SQL LIMIT, OFFSET, and COUNT](#sql-limit-offset-and-count)
  - [Paginating database records](#paginating-database-records)
- [**3. Links to Paginated Pages**](#3-links-to-paginated-pages) (4 videos)
  - [Adding links to previous and next pages](#adding-links-to-previous-and-next-pages)
  - [Creating pagination links](#creating-pagination-links)
  - [Showing an excerpt of the page list](#showing-an-excerpt-of-the-page-list)
  - [Remembering the current page](#remembering-the-current-page)
- [**4. Object-Oriented Pagination**](#4-object-oriented-pagination) (3 videos)
  - [Defining a pagination class](#defining-a-pagination-class)
  - [Outputting links for previous and next pages](#outputting-links-for-previous-and-next-pages)
  - [Outputting pagination links](#outputting-pagination-links)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Showing posts in pages using PHP](https://www.linkedin.com/learning/php-techniques-pagination/showing-posts-in-pages-using-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/showing-posts-in-pages-using-php?u=76281980&t=0)** - [Kevin] Pagination is a valuable skill for all [[PHP]] developers to learn. Presenting long lists of records as separate pages of results is a great user interface technique. It also reduces the strain of the web server so that web pages load faster and the server can handle more traffic. My name is Kevin Skoglund. I'm a web developer who's been using PHP for over 20 years. Let's get started learning how to use pagination in our PHP projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3)
> **CLI Commands:** php (3)
> **Env Vars:** php (3)
> **Definitions:** is a  (2)
> **Speakers:** - [kevin] (1)

#### [Using the exercise files on GitHub](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=0)** - [Instructor] All of the exercise files for this course are available in a [[GitHub]] repository. You can find it at this URL. It's a project hosted by the [[LinkedIn]] Learning account called [[PHP]]-techniques-pagination-2884225. The repository has branches that correspond to each of the videos in the course. You can use the branch pop-up menu to switch to a specific branch and review the code for a specific video. For example, the branch titled 01_03b would show you the code for chapter one and the third video. Branch names with the B at the end indicate they contain code as it is at the beginning of the video. Branch names ending with E contain its state at the end of the video. You can also download the code to work along with me. If you're a [[Git]] user, then you can clone the repository by clicking on the Code button and then clicking on the clipboard icon to copy the URL. Then you can type git clone and paste in the URL that you copied to your clipboard. You will also notice this is the same URL as the GitHub repository, but with .git at the end. Then you can navigate into the cloned project and check out the branch you want. The branch 01_01b is the start of the course. You don't need to know Git or have a GitHub account to follow along. If you choose the branch that you want, you can click on the Code button and then choose to download a ZIP file which will contain the code for that branch only. Once it downloads, you can decompress the file
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-pagination/using-the-exercise-files-on-github?u=76281980&t=95)** and open the project in a text editor to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (4), [[GitHub]] (3), [[LinkedIn]] (1), [[PHP]] (1)
> **CLI Commands:** git (4), find (1), php (1)
> **Env Vars:** url (4), zip (1)
> **Tools:** github (3)
> **UI Navigation:** switch to (1), click on (1), open the (1)
> **Exercise Files:** exercise files (1), download the (1), zip file (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Pagination Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [Pagination overview](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=0)** - Let's begin with an overview of pagination. We'll learn what it is and the underlying concepts that make it work. We use pagination as a user interface for displaying and working with a long list of items. A short list can fit on a single screen and it's easy to work with. For example, you might have a list of 15 colors used on a website. But when a list gets long, it becomes unwieldy. For example, if you had a list of 20,000 customers, they would not all fit on a single screen at once. The list is visually overwhelming to the user and they would have to scroll a lot to find a particular customer. It also requires the web server to do a lot of work, retrieving, processing, and displaying 20,000 customers. That requires time, processing power, and memory that a web server could use responding to other requests instead. Adding search features might help in this particular case, but there could still be a lot of customers in those search results. A better technique is to paginate the results. Pagination breaks the list into pages and shows one page at a time, a subset with links to get to the other pages. There might be a link to the next page, to the previous page, or a list of numbers to let you jump directly to a page. It's also common to show information about how the complete list compares to the subset that's being shown. It could be the number of total items, the total number of pages, or the number of items being shown on the current page. You've seen pagination in action if you've ever searched for anything online.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=93)** When I search for the [[Microsoft Word|word]] "pagination" on Bing, it tells me there are 43 million results. Now I certainly don't want to see all 43 million results in one long, scrolling page. Instead, I see a subset of those results. If I scroll all the way to the bottom, you'll see that there's a list of numbers here and a forward and back arrow. If I click on the forward arrow, it takes me to the next page of results. You can see up here that it tells me that it's records 25 through 38 out of those 43 million. [[Google]] does the same thing. If we scroll down to the bottom here, you'll see that it does its pagination by putting an O over every one of those numbers and a red O indicates the page that I'm on currently. This shows the basic idea. This is what we want to be able to do in our [[PHP]] projects. In this course, you have the option to apply pagination directly to one of your projects as we work, or you can use the exercise files and the demo project that I've included there. It's a very simple PHP project, primarily made up of these two pages here, customers dot PHP and customers no DB dot PHP. These are files that are there to help you. Let's take a look. Let's start by looking at customers no DB dot PHP. Most of the time when you're doing pagination, you're going to be working with a database because [[Databases]] are good at storing lots of records, but it doesn't have to be true. You could get your results from somewhere else. They might be coming from a CSB file or from a third-party API. This is going to demonstrate how we can work
>
> **[3:05](https://www.linkedin.com/learning/php-techniques-pagination/pagination-overview?u=76281980&t=185)** without using a database, while customers dot PHP is going to focus on using an [[SQL]] database. You'll see here that it includes initialized dot PHP. You can look at initialized dot PHP and see that that's loading in functions, database, and query functions, so that those are available to us. And you can browse through each one of those to see the kinds of functions that I've included already as a starter project. These functions will be familiar to anyone who took PHP with [[MySQL]] Essential Training. If we go back to customers no DB, you'll see that it's got some [[HTML]], and then it's just iterating through a list of the customers into a table. And we can see that if we go into Firefox, it'll just come up with a basic customer list. Right now that's a long, scrolling list. What we want to do is apply pagination to it. And then we'll learn how to do the same thing working with a MySQL database. Again, it's up to you how you want to follow along. You can put pagination straight into one of your projects. You can work on the no database version. Or you can set up a MySQL sample database to go with this project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (9), [[MySQL]] (3), [[Microsoft Word|Word]] (1), [[Google]] (1), [[Databases]] (1)
> **CLI Commands:** php (9), mysql (3), make (1), find (1)
> **Env Vars:** php (9), csb (1), api (1), sql (1), html (1)
> **UI Navigation:** click on (1), scroll down (1)
> **Exercise Files:** exercise files (1), starter project (1)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Tools:** firefox (1)

#### [Finding the pagination variables](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=0)** - In order to write code for pagination, we need to know three values. We're going to need to know the current page, the number of records per page, and the total record count. If we have these three pieces of information, we'll be able to calculate everything else we need to know for pagination. The first two are the most important. Let's look at those to begin with. The current page will be sent with the request, usually it's in the URL query parameters. That's how the web server knows which page of records it should return. If the URL has page one, it returns page one, if it has page five, it returns page five. We can retrieve that value in [[PHP]] using the GET superglobal. I'm also using the null coalesce operator introduced in PHP seven to default, to a value of one, anytime the value of page is not set. That's those two question marks there. It's important to know that the value that we get back from GET is always going to be a string. So you can see that I'm typecasting that value to be an integer using int. It's helpful for the current page to always be an integer because then I can compare it to other page numbers and add and subtract it in order to get the next and the previous pages. The next and previous page links would use the same URL as the current page, but they would use a different value for the page parameter. So you would start out on page one, clicking the next page link would send a page parameter of two, then PHP would grab that value and use it for the current page, and the value of next page would become three, and so on. The records per page is usually a variable that you set in your code. Some lists might show 20 records per page,
>
> **[1:34](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=94)** while others show 30. There's no set standard, you get to decide. I think values of 20 to 30 are the most common, but you can also set per page to be one, and get a slideshow type effect so that every time you clicked next, you see the next slide with the next item. If you know the current page and the records per page, then you can calculate the offset value for the current page. The offset is the number of records that need to be skipped over to get to the first record of the current page. You can think of it as how we find each pages starting point. This table gives you some examples of offsets that hopefully make this clearer. When the current page is one, we plugged that into the formula and we get back an offset of zero, because there's zero records we need to skip over. So we'll be viewing records one through 20. When we go to page two, now we need to skip over those first 20 records. So the offset becomes 20 and we're showing records 21 to 40. By the time we get to page five, we're skipping over 80 records and showing records 81 to 100. You get the idea. Let's try using these in our code. The items that we're paginating are most often going to be records stored in a database, because the database has have the ability to store lots of information, but they don't have to be. In the page customers_no_db.php, I'm instead going to be using an array of values, and they're found inside this file, customers_ray.php. If you look in there, you'll see that it's setting a variable of all customers equal to an array, and that array has 2000 elements
>
> **[3:07](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=187)** that are randomly generated customer names. So all those values are going to be set and available inside all customers. For now you can see I'm just setting customers, which is the ones I want to display, equal to all customers. Down here it just iterates through the customers to show each one of their first names and last name. What I want to do is instead of using all customers, I want to paginate that list. Right now, It's one long scrolling list. If we scroll down, you'll see it's a lot of names here. Instead, we want to return paginated results. So we'll begin by figuring out our per page value. Again, that's a value that we decide, I'm going to set it to be 20, and then we want to get the value of the current page. The current page is going to be equal to, whatever's in the GET superglobal for page, and if there is no value set, we want to set it to one, that's that null coalesce operator. I'm going to put that whole thing in parentheses, so that it happens first, and then whatever I get back it could be a string if it came in from the GET superglobal or it might be an integer. I'm going to make sure that it's an integer, by typecasting it like this. Now I have the current page value, and now I can calculate that offset. So the offset it's going to be equal to the per page value times, and then in parentheses, current page, minus one, because the first page does not have an offset. So that makes sense, It would be zero times per page, offset would be zero. Once we have this value,
>
> **[4:40](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=280)** now we can get a subset of all customers. Because it's an array, we'll do that using array slice. Array, slice, the PHP function, the first argument is going to be the array we want to use, that's all customers. And then the next value is the starting point. The starting point is going to be offset. Now you'll remember that arrays are zero indexed. So we actually need to subtract one from that because it's zero indexed, but we don't want to start with the offset, the offset is the number of records to skip, We want to start at the record after that. So it's plus one. So those cancel out and we can just use the offset. So the offset will be our starting point, and how many records do we want to return after that? We want to stop after we get two per page. So starting at offset, give me back 20 records. That's what this says. Let's save it. Let's go into Firefox and let's try it out. And we reload the page. You'll see that we get back just those first 20 records. That's it, it's not the long scrolling list anymore. If we come up here and we type page equals two, you'll see now we get the second page of results. And if I come up here and I type page equals five, we get back the fifth page of results. And so on. That's the basics of pagination. We just take a full set, we figure out what the current page is, how many items per page, we calculate the offset, and then we can find the subset of records that we're looking for, and display only those records.
>
> **[6:13](https://www.linkedin.com/learning/php-techniques-pagination/finding-the-pagination-variables?u=76281980&t=373)** But keep watching, because while the basics are simple, there are a lot of improvements we can make to this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (6)
> **CLI Commands:** php (6), make (3), find (2)
> **Env Vars:** php (4), url (3)
> **API Endpoints:** get  (3), get
 (1)
> **File Paths:** customers_no_db.php (1), customers_ray.php (1)
> **Code Identifiers:** customers_no_db (1), customers_ray (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Tools:** firefox (1)

#### [Using total record count](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=0)** - [Instructor] In this movie, we're going to improve on our pagination by using the total record count. In the last movie, we learned how to work with the first two pagination variables, current page and number of records per page. And that allowed us to get the offset and to do the core part of our pagination. But there's a third one that's very useful, which is determining the total record count. There are a number of different ways that we can figure out what this count is, and that value depends on where the items are being stored. If they're in an array, that we can use PHPs count function, in order to count them. if they're stored in a database, then we can write an [[SQL]] statement for it. We'll learn how to do that in a moment, the total number of pages, is going to be the total count divided by the number of records per page, and then we take the ceiling of that value. Think about that for a moment. If we had 20 records per page, and we had 25 records, then if we took total count 25 divided by 20, we would get one with a decimal after it. We want to round up, because the total pages would be two, those other five items, they have to go on the second page. So that's why we use the CEIL function in order to get this ceiling of that value to round up. Knowing the total number of pages is going to be helpful in a number of ways. It'll allow us to create links, to all of the number of pages, and we can tell if we've reached the last page or not. For example, we'll know for on the first page, if current page is equal to one, and we'll know if we're on the last page, if current page is equal to total pages, that can be helpful.
>
> **[1:31](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=91)** For example, we probably don't want to have a next link, when we're on the last page, we probably want to make that disabled or disappear altogether. Let's calculate the total count and see how we can use it in our project. Let's figure out the total account right here below customers. So we're going to use the total account, and because we're working with an array in [[PHP]], we can just use count. In order to do that, we want to count all customers, not just the customers on this page, which is what is inside this customer's variable, we want to use all customers. That's the original array that has 2000 customers in it. So that'll give me my total count, I should get back 2000, and then from there we can figure out our total pages. Total pages equals the ceiling, when we take the total count, and divide it by the records per page, okay? So once we have total pages, then we can display it. Let's come down here, I'll add some P tags, and I've already got a class in my style sheets for our page status. So if I use class equals page status, it'll be nicely centered for me. And we can take a look at what those are here, just so you can see page status, is just going to have width 100 text align center. So if we come back over here inside that page status, let's now add some PHP code, I'll put PHP echo, and then we'll put in some content here, I'll close my PHP tags, inside here let's do page, and we're going to be working with the current page, so the page is current page of,
>
> **[3:08](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=188)** and then we'll drop in the total pages. So page one of 10 for example, would be what kind of thing it would output. Let's save it, and let's take a look. Let's come back over here or reload our page, it was already on page five, so it gives me back page five of 100. If I change that to 15, now I'm on page 15 of 100. So that helps me to orient me, and to know where I am, and what page I'm looking at. We can also use it in another way, right now you'll notice that the page value can be absolutely anything that's submitted for the page. So for example, I can come up here, and I can put in page 10,000, right? And it tries to show me page 10,000 of 100, that doesn't make sense. You can also put negative numbers up there. Those don't really make sense, it's not really what we want. So I'm going to add some code here, to check and make sure that the current page, is within reasonable boundaries. So I'll do an if statement, and let's say if the current page is less than one, or if the current page is greater than the number of total pages, then it's out of bounds. And if it's out of bounds, then just that current page to be equal to one. So that'll make sure that whatever number I have here and even if I get garbage back in page, some random string in there, Int will make sure that it's turned into an integer, and it'll make sure that it's inside the boundaries, otherwise, they'll go to page one.
>
> **[4:40](https://www.linkedin.com/learning/php-techniques-pagination/using-total-record-count?u=76281980&t=280)** Now, of course I'm using total pages, but it's not defined till down here, so I need you to just take these, and just move them up, there they are, so now I have total pages available for me to use. So it's going to count all customers, figure out the total pages, get the current page, make sure that it's within the boundaries, then find that the offset using that value, and then do the pagination from there. Let's save it, let's go back and try it. I'll reload the page, you'll notice that I'm still on 10,000 but I get back page one. It just went to page one, regardless of what I put in there, and if I put in negative 10,000, I still get page one. So ignores anything that's not a valid value. So knowing the total number of pages can help you in a couple of different ways. And soon we'll learn how to use that number, in order to create a list of page numbers so that we can jump directly to a page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), [[SQL]] (1)
> **CLI Commands:** make (8), php (4), find (1)
> **Env Vars:** php (4), sql (1), ceil (1)
> **Analogies:** for example (4)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 2. Database Record Pagination

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up the project database](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=0)** - [Instructor] Now that we know the basics of pagination. Let's learn how to paginates the records in the database. Of course, to do that we'll need a database. You can use the database from an existing [[PHP]] project. But I'm going to show you how to set up a simple one to go with the exercise files. I've already taken a few basic steps to set things up. And you should do the same. Make sure that you have a user that can log into [[MySQL]]. Here I've created a new user called 'php user.' But you can use root or any other [[SQL]] user that you already have. Then you'll create the database. I'm calling it php_pagination. You want to make sure that your user has been granted privileges to be able to create tables and add records to that database and then flush those privileges at the end. Once you've done this basic setup, you should be able to go to the command line and access the database using that user. I can do that with mysql -u, then php_user -p to tell I'm going to enter the password and then the name of the database we want to access. php_pagination. When I hit return, it asks for my password. I type it in and then it drops me into mysql. So we know that that user now has access. So I'm going to exit out of there. Now I'm going to populate that database with information and the data that I'm going to populate, is in this customers.sql file. Let's take a look at what's in there. You can see that it just starts out with a create table statement. It's a very simple table. It just has a column for ID, first name and last name. And then it fills that table with 2000 records of sample data customer names. Using these Insert Statements that are here.
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=95)** You'll notice that the names like Tyler Spradley are the exact same names that we have in our customer array. The exact same 2000 names. We're just putting them in the database instead. In order to add those names we can hit the Up Arrow. So we have the same mysql command and then I'll use the less than sign. And then I want to use this file path. So you could type out the file path on the Mac. I can actually drag that in there and it'll auto complete it for me. So there's the path to that file. And when I hit return, it'll ask my password. And then it will execute all the SQL in that file. I'm going to go up and go into mysql again, without the file name after it. I'll type in the password. And now you can see that if I say show tables that I have the tables there. And if I say select all from customers. It'll return back all 2000 of those records. So now we have the data in our database ready to go. Now we just need to make sure that our project is able to access it. So I'll close this up. Inside db credentials.php. You want to make sure that you have the host name, the database name, the user, and the password. Hopefully your password is something better than secret but I'm going to keep it simple. Now I should be able to access it using PHP. Now there's already a lot of database functions that are in database.php that allow me to connect the database to make queries. These are the same useful functions we developed
>
> **[3:10](https://www.linkedin.com/learning/php-techniques-pagination/setting-up-the-project-database?u=76281980&t=190)** in the PHP with mysql as central training. And we're going to make use of those. Inside customers.php, you can see that it calls initialize which loads up all those functions. Then it calls db_connect, then it calls a function called find_customers. That's defined in query functions. Then you can see find_customers just takes that database connection, construct some SQL, select all from customers ordered by last name and first name. Then it calls db_query to query the database, and returns back the result. If we jumped back over here to customers, you'll see the customers then assigned that to customers. And down here we have a loop that fetches the association from each one, db_fetch association is also back here in database, db_fetch association just calls mysqli_fetch association. We're getting each one of those as an associative array and assign it to customer. So we can call customer first name, customer last name and so on. To prove that all this is working, let's go over to Firefox. And I should be able just to take this file name that's here and just change it to customers.php. And hit return. And it's an unpaginated list of all 2000 customers. You'll know that it's different because these are sorted alphabetically. So it's different than the array list because that was not sorted. Once you have a database, you have it populated with some sample data, and you have PHP set up to connect to it. Then we're ready to learn about how we paginated this list of results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (9), [[MySQL]] (6), [[SQL]] (4)
> **CLI Commands:** php (9), make (6), mysql (6)
> **Code Identifiers:** php_pagination (2), find_customers (2), db_fetch (2), php_user (1), db_connect (1)
> **Env Vars:** php (4), sql (3)
> **File Paths:** customers.php (2), customers.sql (1), credentials.php (1), database.php (1)
> **Prerequisites:** set up (2), setup (1)
> **Tools:** command line (1), firefox (1)
> **UI Navigation:** go to (1)

#### [SQL LIMIT, OFFSET, and COUNT](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=0)** - [Narrator] To paginate records stored in an [[SQL]] database, we need to learn a few techniques to retrieve a subset of the total records. We could retrieve all records and then put them in a [[PHP]] array and pick through them to find the ones we want to show but that's not very efficient. We'd be transferring a lot of data from the database that's quickly discarded and that could be thousands or even millions of records. So instead, we want to ask SQL to return just the data that we need. The first SQL we'll need is the LIMIT clause. LIMIT does what it sounds like, it limits the results returned in an SQL query to a maximum number. SELECT ALL FROM customers LIMIT 30, we'll return up to 30 records, not more. You can add it to the end of any SQL statement. If we want to retrieve one page with 30 records, the LIMIT will do that. It's a good alternative to retrieving millions of records and then working with only the first 30. But to work with records after the first 30, we'd need to use an OFFSET clause too. OFFSET works just like what we saw previously, it skips over a number of records when returning results. In SQL, we do it with SELECT ALL FROM customers OFFSET 30 that will skip the first 30 records and then return all resulting records after that. If we combine it together with LIMIT then it allows us to see pages beyond the first page. SELECT ALL FROM customers LIMIT 30 OFFSET 90, would return 30 results after skipping over the first 90. That means we'll be seeing the fourth page of results which are the records 91 through 120. Stop for a moment
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-pagination/sql-limit-offset-and-count?u=76281980&t=92)** and appreciate how much more efficient this is. If we have a database table that has one million records in it, we're still only transferring data out of the database for 30 records at a time. Just what we want to show the user. The web server only has to allocate memory to hold 30 records. Even if we ended up viewing every single page in the set, the web server would use less memory and be able to work on requests from other users at the same time. I'm using LIMIT and OFFSET on all customer records, but you could add them to the end of other SQL queries, just as easily. For example, you could query for all active customers in the United States who've made a purchase in the last six months sorted by last name and then use LIMIT and OFFSET to retrieve a single page of those results. LIMIT and OFFSET always go at the end, and LIMIT always goes before OFFSET. Another SQL function we need to learn is COUNT. COUNT returns the number of records that match a query, it does not retrieve the records themselves. Again, this is much faster and more memory efficient than retrieving all of the records from the database and using PHP to count them. COUNT goes into the SELECT clause. When SQL sees that you want to get back a count then it performs the query like normal but it doesn't transfer all the rows, just the number of rows that match. LIMIT, OFFSET and COUNT will be helpful in using the database to find the pagination variables we need and retrieving a subset of the records.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (9), [[PHP]] (2)
> **Env Vars:** limit (11), sql (9), offset (9), select (4), count (4)
> **CLI Commands:** php (2), find (2)
> **SQL:** select (4)
> **Analogies:** just like (1), for example (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [narrator] (1)

#### [Paginating database records](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=0)** - [Instructor] In the last movie, we learned how to use [[SQL]] limit, offset and count. Let's use those to paginate the database records in a [[PHP]] project. I already have my database set up, and "customers.php" is already pulling up an unpaginated list of those customers from the database. It's doing that using the "find customers" function, that's finding all the customers. And then down here, I'm going through and fetching the association out of that result set to show each one. If we go in "query functions", we'll find "find customers". I want to modify it now so that it can do pagination. You could create a separate function if you wanted. Just copy and paste it. But I'm actually going to keep the same name, and I'm just going to allow it to do limit and offset, the two parts that we need for it to do. I'm going to add limit as an argument to this function and then offset as well. So now those will default to zero. If it's sent in though, we want to add it to the end of our SQL query. So we'll tack it onto the end, "SQL equals", and I'm going to put a space just so that it appends nicely with ASC and then "space, limit, space". And then I'll append the value for limit. Now, I'm not going to do it if it's zero. There's no reason to have limit "zero". That's not good. So let's do "if there is a value of limit and it is greater than zero", then we'll add it on there. So if limit is greater than zero, put in the clause. Otherwise don't. There's one more thing I should do here.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=93)** This value is probably going to be a number. But let's make sure by making sure that we escape what value comes in there. In "database.php", I have a function called "db_escape" which calls my SQL real escape string, and make sure that I'm not open to an SQLi injection. So I'm going to just put in "db_escape", and then the first argument will be the database, and the second argument will be whatever I want to escape. That'll make sure that it's a safe value to use. And then let's do the same thing with "offset". Remember limit goes at the end, offset always goes after it Offset goes here, offset goes here. I'll copy this and paste it in here. So that's it. Now if limit and offset are passed in as values, then they'll be added. Now, if they're not, then nothing should change. So let's come here. Let's hit return. You see, it still gives me exactly the same thing an unpaginated list. But if we come over to "customers", and we were to put in values here for the per page and offset, then it would paginate them. Where do we get those values from? It's exactly like what we did with "customers, no db". I'm going to copy all of this here, and we'll reuse it. Let's come over here to "customers" and paste it in. Everything related to total pages, let's just comment out for now. So I'll comment out those lines and these lines here. Alright, so we just have the per page value. We get back current page, and we calculate the offset. Now, find "customers",
>
> **[3:06](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=186)** the limit is the per page value, and the offset is whatever we calculated. So I'll put those in there. We'll save it. We'll come back and reload this page. And now you'll see, I just get one page of results. And we come up here to the URL and I type "page equals five". Now I get back the fifth page of results. Now let's go and do this counting, so we get total pages. What we're going to do is find some way that we can count all customers. I'm going to to query functions. I'm going to write a new function that will do that for us. Going to copy "find customers". I'm going to make a new one here called "count_customers". We don't need any of this pagination inside there because the results will not be paginated. So I can take all of that out and I can take out the order clause because the order doesn't matter but I don't want to select all items from "customer". I want to select the count. That's the important part. Selecting the count from the customers that'll make the query. It'll still return back a result set. It doesn't return back just a number to me, it's a result set which I have to extract the number from just like I normally would use "db_fetch_association" to get back on a row as an associative array and then get the value out of it. I have to do that here as well. I could do that outside the function, but I'm going to go ahead and make the "count customers" function just handle all that for me so that it actually does just return back a number. So I'm going to go ahead and get the array out of it. Using "db_fetch_association" on the result,
>
> **[4:41](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=281)** then I'll get back to the first row of results, and then inside that array, the value that I actually want to give back is going to be this right here. That's the key, that it's going to have that value. So I'll just put the string for count and then "parentheses, exclamation point". So that'll retrieve a result set, get the first row, and then find the count where it's stored in that first row. It'll just return a number to me. Now I could go back over to "customers.php", and instead of all this being commented out, let's take it back in. Let's uncomment it again, and instead of "count all customers", let's change it to "count_customers" and then a parentheses. So," parentheses, parentheses". "Count_customers", that's that new function that we just wrote that will give us our total count which gives us total pages. And then we'll be able to make sure our current page is inside the pages. And then let's also display the pages by using this page status. We'll add that functionality back in as well from "customers, no db". We'll paste that in right here, above the table. Now we go back to our page, and we reload it. It tells us that we are on page five of 100. If we come up here, and we change it to be page 10 we get back page 10 of 100, and so on. Paginating database records is very similar to what we did when we were not working with the database. The fundamental principles are the same. What's different is in the way that we interact with the database,
>
> **[6:14](https://www.linkedin.com/learning/php-techniques-pagination/paginating-database-records?u=76281980&t=374)** whether it's to count the customers or whether it is to find a page of the customers efficiently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[PHP]] (4)
> **CLI Commands:** find (8), make (7), php (4)
> **Env Vars:** sql (4), php (1), asc (1), url (1)
> **Code Identifiers:** db_escape (2), count_customers (2), db_fetch_association (2)
> **File Paths:** customers.php (2), database.php (1)
> **Cross-References:** in the last (1), go back to (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)


### 3. Links to Paginated Pages

[↑ Back to Table of Contents](#table-of-contents)

#### [Adding links to previous and next pages](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=0)** - [Instructor] Now that we have the fundamentals of pagination for both a non database and a database version, I want to work on adding some features, starting with adding links to the previous and next pages. I'm going to be doing these in the customers .[[PHP]] file. You could also add the same thing to the customers nodb.PHP file, and it will work the same. Let's start by going down below our table. See I have a table tag here and right below that I'm going to add a P tag with a class of pagination. And that's where I'm going to put my pagination links. You could do these a lot different ways. You can do them as ULLI tags if you want. And I'm going to do them just as a simple list, all in one row inside these P tags. So the class is pagination, I already have a style for that here. It's a lot like my page status. It's just going to have the width 100 texts align center. I've also got some more here, which we'll come back and look at a little later. So I'm going to add a Previous and Next, and I'm also going to add a [[HTML]] character into the- for the left arrow and one here for the right arrow. Oops, miss type that they put an A there. All right. If we come over here and we just take a look at that in the page, we scroll down you'll see it says previous and next. You can see it has that nice arrow on either side of it. You can use whatever you want for these. It could be a link with a [[Microsoft Word|word]]. It can be a symbol, or it can be a link with an image so that an image links each one.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=93)** It's up to you, how you customize it. But the idea is the same. We're going to have something here that we click on to take us to previous and something that'll take us to next. I'm going to break them up a little bit so that we could deal with them separately. I'm going to want to use PHP here. So I'm going to put some PHP tags. I'm going to have a PHP and then let's do echo for now, let me just get rid of this extra one here. Semi-colon at the end and close my PHP tag and just work on previous. And let's get previous to show what we want it to show. So we want it to be a link. So I'm going to need tags around that. A H ref equals and then I'll use double quotes. That's inside double quotes. So I need to escape both of those. And then I'll close the tag. And then at the end, of course I'm going to have the closing tag. So now I've got a basic link and we can actually go over here and try that out. And you see it's a link but it doesn't actually go anywhere yet. So I'm going to fill that out here with a link. So where should the previous page go? We want it to go to the same page that we're on now which is customers dot PHP. And then we want to specify what page it is. And we want to drop in some PHP here. So I'm going to do double quotes so I can escape out of that string for a second. I'm going to concatenate together the value and I to use current page minus one that will give me the value current page is and integer.
>
> **[3:06](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=186)** I can subtract one from it. And that will be the previous page. If we come over here, we save it. We try that out. You'll see that. Now it gives me the page, I would expect. You can see it down at the very bottom. And if I hit previous, it takes me there. Now I'm on page nine. It previous again, I'm on page eight. So it works every time. It just counts down exactly as I'd expect. Now, of course, if I keep going here let's go back to page one. Now, previous would take me back to page zero. That doesn't make any sense. So I also want to just put something around this that says we're only going to do it. If the current page is greater than one. So if current page is greater than one then we will do this echo statement. And now if I come back over here and I reload the page you'll see the previous goes away. Now, next doesn't work yet. But it works exactly the same way. We can copy all of this and I'll come down here and paste it in right below next. I'll copy this bit here and put it in place of the content there. And of course it's not current page minus one. It's current page plus one. Now it's not as current page is greater than one but if current page is less than the total pages. If we're on the last one, then it's equal. We're at the last page. We don't want to show it. So as long as it's less than the total pages then we still want to show the next link. So now let's reload the page. Let we see next, it works.
>
> **[4:39](https://www.linkedin.com/learning/php-techniques-pagination/adding-links-to-previous-and-next-pages?u=76281980&t=279)** Click on it. Next, next, next. And so on. You can see I'm just going through all the pages. Let's jump here, up to page 99. You can see, I have the next link when I click it. Now, I'm on page 100 and the next link goes away, exactly as we'd expect. So that's all there is to being able to add the previous and next pages. I think it's helpful to step through it in those pieces. Just make sure that you've got something that looks right that it's sort of where you want it on the page and then worry about adding a link then worry about making the link, go to the right place and then add the bells and whistles like making it disappear when you get to those outside boundaries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (8), [[HTML]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** php (8), make (2)
> **Env Vars:** php (8), ulli (1), html (1)
> **UI Navigation:** click on (2), scroll down (1), go to (1)
> **File Paths:** nodb.php (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Creating pagination links](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=0)** - [Instructor] In this movie, we will learn how to add pagination links to take users directly to a certain page number. You remember when we looked at the example for Bing, earlier, it had the pagination at the bottom and it had the left and right arrows, and then it has a set of numbers in between, one, two, three, four, five and number one is underlined 'cause that's the current page I'm on. That's the kind of thing we want to do to our customer list. Instead of just having previous and next, we want to have numbers in between those. So I'm going to come over to customers.[[PHP]], and right here where that pipe is I'm going to take that out and, instead, I'll add some new PHP tags, and this is where I'm going to put my pagination links. I'm going to start by just doing a simple list of the numbers. I'm not going to worry about linking them yet. Let's just try doing a loop, so I'll do that with a for-loop. We can do that with I, will be our variable, equals one, and while I is less than or equal to the total pages
>
> **[1:02](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=62)** then we want to keep going, and we will increment I after every time, I plus plus. All right, so now we've got our for-loop, so it'll iterate through those a number of times and, for now, let's just say echo and then let's just have it output I, and then let's put a space after it, there we go, that'll make them spaced out. We come back over here, and we reload the page. Oops, total page, I've got a mistake, total pages, there we are. And there ya go. Now it's a very long list, all the pages from one to 100, but you see that it does work. We'll come back to figure out how to make the list a little more manageable later, but you could see how if you had a list of, like, 10 pages, for example, they would work out okay, or we could take the approach that Bing takes where we only show the first five pages. Let's see how we can make this into a link. The link is going to be very similar to what we had up here, so I'm just going to copy this, and I'll come down here and paste it in. It's not going to say previous anymore though. Instead, that link is going to be with the I in it, so I will just do an I interpolated in there, and the page number is also nothing fancy. The page number is also just going to be I as well. So that's it, it'll just go through those numbers from one up to the total pages, outputting each one of those as a link. Save it, go back and try it out, and there we go, we have that link. I don't have a space after it, so they're all, kind of, run together. Let's add a space at the end, there we go.
>
> **[2:38](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=158)** And now, for example, if I click on 18 it takes me straight to page 18. I click on 70, it takes me straight to page 70. Now if I'm on page 70, you see page 70 is still a link. Notice on Bing, though, we come back over here, they don't bother making one a link. One is not a link because we're already on page one, so that's a good practice as well. So let's add a check, here, to see whether we're on the current page or not. So if the current page is equal to I then we'll know we're on the current page, and we'll do one thing, otherwise we'll go ahead and make it a link. All right, and for this one let's come up here and, instead, just put an echo and let's put in just strong tags, and inside there, of course, will be I. So now I'll just put strong tags on it. I've also got a style here that just says that the color should change when I have a strong tag. You can make it be something else if you want. I also went ahead and just gave some styling and color to my pagination links, as well, just to make sure that they don't have weird colors to them. So here we go, you see there's no space after it, it did turn it blue, which is good, but I'm missing that space, so let me just put a space here, try it again, there we go. So now when I click on 22, I can tell on page 22 because it's highlighted, as well as saying it up at the top and it's not a link anymore. The other ones are links, but that one is not.
>
> **[4:10](https://www.linkedin.com/learning/php-techniques-pagination/creating-pagination-links?u=76281980&t=250)** So that's how you add pagination links to your pages. Of course, this doesn't work great when we've got a hundred different pages and we're working with 2000 records, but you can see how it would work well if, for example, we had five pages or eight pages. When we have a lot more pages, then we probably want to come up with some way that we can excerpt that page list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2)
> **CLI Commands:** make (6), php (2)
> **Analogies:** for example (3), similar to (1)
> **UI Navigation:** click on (3)
> **File Paths:** customers.php (1)
> **Env Vars:** php (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Showing an excerpt of the page list](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=0)** - In this movie, we're going to learn how to show less than the full set of pagination links. We saw the problem that we have in the last movie. If we're just paginating and we have 10 pages to show, it's simple, we just show the numbers one through 10, and they'll fit nicely at the bottom of the page. But what about when we have 100 pages, then suddenly we have this long list that wraps around and it's not so convenient. One way we can deal with this is to excerpt the page list so that we're only seeing a certain portion of it. I often refer to this as being the window of what we show. There are a number of different ways that we can handle this. For example, you can see that Bing shows us two numbers before and after our current page, it also shows us the number one, always, and then it has an excerpt here with the previous and next links on the outside. [[Google]] handles it differently. Google shows the five pages before, the current page, and then the four pages after that with previous and next links. There's no set rules on how you handle it, but there are some helpful techniques. If we go to our code here, instead of showing all the pages, what we want to do is we want to have a condition that checks to see whether to proceed with showing the page or not. Let's start by defining a value for our window. I'm going to set it equal to two. You want it to be a fairly small number. And I'll just make a note here that that's window size, I'm just using win 'cause it's nice and short. What I'm going to do is I'm going to make a conditional here that says if certain things are true, then don't go and output the page number, instead, just continue.
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=95)** Continue is a [[PHP]] function that tells the loop to just skip to the next iteration. It will never get to these lines down here anymore. All we have to do is figure out what logic we want to use for when it should skip over those pages. I'm going to write code that'll allow three possible cases. The first is when I is greater than one plus the window, which of course will be three, but I'll leave it as a variable, and the case in which I is less than the total pages minus the window. You can see, if it gets close to the edges it'll still show those numbers. It'll show 1, 2, and 3, but if it's greater than that, it won't. And then let's deal with the last case, which is and, and let's do the I minus the current page, we don't know which one's going to be larger, so I'm going to wrap that whole thing in the absolute value. So take the absolute value of the difference between I and the current page, and if it is greater than the window, then we'll continue. You can see how this works. If we come back over here to our page, it's got our customer list, I'm on page 22. I'm going to reload the page, and look at that, I get page 1, 2, 3, and then it starts skipping numbers because those numbers met those conditions. So we're hitting continue, continue, continue until we get to this condition here
>
> **[3:09](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=189)** where suddenly the value of I is close to the current page, so we get 20, 21, 23, 24. And then we get continue, continue, continue, and it just skips until we finally get near the end. Now we don't have those nice dot dot dots there, we could add that. Let's say, for example, echo dot, and then we'll get a bunch of dots here, but we don't want all those dots. What we really want is something that's more efficient than that, that realizes we're inside one of these gap areas. And when we're inside a gap area, don't just keep putting out dots, just put out a couple and then move on. So what I'm going to do for that, I'm going to write a little bit more code in here that just checks to see if we're inside one of those gap areas or not. So when we start out, of course, we're not inside a gap area, so gap is false. And then inside this code, before we continue, if we are not in a gap, right, if we're not already found out that we're in a gap then we're going to do the echo for those dots. I'll put three of them, but now we're inside a gap. So now we'll mark gap equals true. And so we'll keep track of it this way. Now, if we ever come back here and we get past this, then the first thing we want to do is say gap equals false again because we're about to output another number. Right, so that'll reset it again. So this should keep track. As we'll get this printed one time, then gap will be true, so we won't get it anymore until this condition isn't met, and we start getting numbers again,
>
> **[4:42](https://www.linkedin.com/learning/php-techniques-pagination/showing-an-excerpt-of-the-page-list?u=76281980&t=282)** in which case the gap will be turned off again. It'll make a little more sense if we save it, come back here and reload the page. And I think that's more what we're looking for. Could use a nice space after that. There we go, space, and let's reload the page. And there you go. 1, 2, 3, and then we get dot dot dot 20, 21, 22, 23, 24 dot dot dot to 98, 99, 100. Now of course, you can modify the window to be as large or as small as you want. You can rewrite the logic of this conditional statement a number of different ways, but you see the basic idea. As we're looping through there's some times we print numbers, there's some times that we skip numbers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[PHP]] (1)
> **CLI Commands:** make (3), php (1)
> **Analogies:** for example (2)
> **Env Vars:** php (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### [Remembering the current page](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=0)** - In this movie, I want to talk about a common issue when using pagination. That is, how do you remember the page that a user was on so that you can send them back to it? The problem is that anytime you click away from a paginated area, it will forget the current page. Let me explain what I mean. If we have a paginated list of records it's common to have a link that goes with them to view, edit, or delete the record. In this example, there are links to a page that will show more information about a customer. If you click on one of those links the current page number and the customer list will be lost. A user can still use the browser's back button to return to the page they were on. But if there are links on this new page to take the user back to the list, they would take the user back to page one again. That may be acceptable. The first question you should ask is if it is. If so, just let it go back to the default page. If you need to have links that send you back to the paginated page you were on then you have two options. The first is that you can maintain the page parameter in every URL. This works best when there are a few links after you click away from the paginated list. For example, if the show customer page only shows the customer information and then has a link that would go back to the list then you could include the page parameter with the link to go to the page and the page parameter for the link to come back. But that doesn't work so great if the show customer page has other links and actions that you can perform. Maybe there's a link to edit the customer that then takes you to a form which gets submitted and then redirects to the show customer page again.
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-pagination/remembering-the-current-page?u=76281980&t=95)** Or maybe you have the ability to add images, addresses phone numbers, and emails to a customer. It would be a hassle to make sure that every link and every form carries that page parameter with it. In that case, you'd be better off storing the page parameter in a cookie or in a session value. Then you can retrieve it whenever you need it again. You can use the stored value before using the default page value which is one. In other words, right after you find the current page, store it. Then anytime you come to that page and no page has been given, before you go with the default value check and see if there's a stored value first. If there's ever a time when you want a link to ignore that saved value and definitely send the user to the first page of the list, then you can explicitly include page equals 1 in the link. For example, if you're coming to that customer list from a top level menu you might want to always go to page one, but if you come from somewhere else, you might want to use the stored value. Hopefully these give you some strategies for remembering the last page viewed in the pagination as the user navigates beyond that page.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** go back to (2)
> **Analogies:** for example (2)
> **Env Vars:** url (1)
> **Definitions:** in other words (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - in (1)


### 4. Object-Oriented Pagination

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining a pagination class](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=0)** - [Instructor] In the previous chapters, we've been using [[Functional Programming]] for our pagination. In this chapter, we will learn to create an object-oriented pagination. It doesn't really matter whether the [[Representational State Transfer (REST)|rest]] of your code is functional or object-oriented. You can use either version of this pagination code. Both use [[PHP]] features that are always available to you. I've gone ahead and added a new file to the project. It's inside the private directory inside the classes directory and it's called pagination.class.php and it just has a simple placeholder for that pagination class. And I've also gone ahead and added to initialize PHP a line that will make sure that that class is loaded in and available to us. Now we just need to fill out that pagination class. The idea behind having this class for pagination is that it will contain all of the information that we need to know about pagination. It can have the logic that's associated with it all wrapped up into one class, so that's all in one place, and we can just call it whenever we need it. We're going to be using this page from one of our customers pages, but let's actually create a new one. I'm actually going to go here to customers and I'm just going to choose Duplicate to duplicate that file and then I'm going to rename it as being customers_oo for object-oriented. So that way I'll have both the functional version that we were working on and the object-oriented version. And I can compare between them and not worry that I might mess something up. All right, so in the object-oriented version of this, a lot of this code is going to be the same. But a lot of this logic that we're doing here is going to move into our pagination class. We already know that there are three key variables
>
> **[1:34](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=94)** that we need to keep track of. The current page, the number of records per page, and the total number of records. So let's go into our pagination class and let's keep track of those using a couple of class variables. So we're going to have public current_page, public $per_page, and public $total_count.
>
> **[2:01](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=121)** So those are going to be variables inside an instance of our class that will tell us what the current page is, what the per page is, and the total count. And we can go ahead and initialize our pagination class with those values right at the beginning. We'll create a constructor function, __construct, and then I'll put in the values, and I'm going to put 'em in in this order. Total_count first, I'll default it to zero. Hopefully we'll always have that value. The page will default to one and per_page will be equal to 20 by default. Okay, so now I've got my constructor function. I need to set these values when those are sent in. So let's do $this and the arrow per_page equals and let's typecast it as an integer whatever is passed in as the per_page value. I'm going to copy that and let's paste it twice more, because this one is going to set total_count equal to whatever the total_count passed in was. And this one is going to set current_page equal to whatever page was, it's a little bit different. I'm just using page here, so don't let that trip you up. So in every case, I'm just taking those values that are passed in, setting them to be integers, and then putting in those variables. Now that on its own is handy, because now I can have a pagination class and any time I want to refer to these values, I can get them out of there, but it can do a lot more. We can make our pagination class smarter. For example, we can create another function called offset
>
> **[3:39](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=219)** and this function can calculate the offset for us. Go back here to customers and here's our offset. I'm going to copy that. Let's paste it in. Now the offset, we don't need to actually have the value set. We're going to take per_page which is stored in the variable this per_page, so I need to add that in front of it, and it also needs to multiply this current_page minus one. And because it's a function, I need to return a value out of it. So that gives me the offset. I can also create another one, public function total_pages.
>
> **[4:16](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=256)** And we'll make this one return. And the formula for total_pages we've got back over here. I'll copy this, and let's paste it in, and it's returning the value using the ceiling. The total_count is stored in that variable and per_page is stored there. So that's it, now our pagination class can calculate the offset and the total pages for us. We don't need this code over here anymore. We also had code here that was checking to see if the current_page was set or not. Let's copy that code. Come back here and as soon as we get a current_page, let's check and see if it's valid or not. As long as we can calculate total_pages down here using the total_count and the per_page, then we can do the current_page and make sure it's inside the boundaries. So this again needs to have this in front of it and I'll put it there and let's put it here. And total_pages is a function, so we need to put the parentheses at the end of it. So there we go. Now it will do the same thing. It'll do that boundary checking for us. So let's save it and let's go back over here and let's create a new instance of this pagination class and let's use it. Let's do it right here above customers. Right before we find the customers, we want to get these values. So I'm going to create a variable called pagination and I'm going to set it equal to a new instance of the pagination class and I'm going to pass in the value for the total_count and whatever we have for the current_page. I'm going to call this just page
>
> **[5:49](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=349)** and the value for per_page. Okay, so we don't need this anymore, because the offset we can figure out. So down here where we want the offset, we know that it's just going to be the pagination class and then offset which is a function. Per_page is also something that's stored in pagination, per_page now, so we don't need to keep track of that anymore. In fact, I'm going to take this out here and let's just put this here. Let's just say it's 20. That way, we won't be tempted to use that variable on accident. So now per_page will be passed in or I can use the default value. I'm going to go ahead and make it explicit. We don't need this check anymore. This check is not bad. I'm going to change it to just be page though, because I don't want it to be confused, and I don't need to worry about making an integer anymore, because it will get typecast as an integer inside that class. So that will give me the page and then total_pages now, we have that we can calculate. So I'll take that bit out. And then let's come down here where we're calling total_pages. Let's make sure we're calling pagination total_pages. And in fact, I'm going to go ahead and just take a second to rewrite this a bit, so that it just says page outside of this. Echo current_page and let's just end that PHP tag of and we'll start a new PHP tag echo pagination total_pages and there we go.
>
> **[7:26](https://www.linkedin.com/learning/php-techniques-pagination/defining-a-pagination-class?u=76281980&t=446)** So page current_page, this is also going to be pagination current_page. And then pagination total_pages. They wrap kind of funny there, but don't worry about that. Okay, the page links down at the bottom here aren't going to work yet. So let's actually just select all those and take those out. We still have those in that other file if we ever want to grab them again. So let's just go ahead and get rid of them for now and let's just see if our pagination works. Notice how much smaller and simpler this is now. All we do is we count the customers, we get the page that's being sent in, we pass all that to the pagination class to get it set up, and then we find the customers based on the values that it has. All that logic is tucked away inside our class. In an object-oriented project, you might want to have your customers be object-oriented as well, so that you had a customer object and you were asking it to count the customers or asking it to find the customers. I'm not going to do that here. I'm just going to worry about making the pagination class object-oriented. So let's save it and let's see if it works. And instead of customers.php, customers_oo.php, and there we are, page one of 100. There are no pagination links at the bottom, but I can go to page equals 99, and it takes me to the end. So that's it, we now have a pagination class and we've moved a lot of the pagination logic inside of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (7), [[Functional Programming]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** per_page (11), current_page (10), total_pages (9), total_count (6), customers_oo (2)
> **CLI Commands:** php (7), make (6), find (3)
> **Env Vars:** php (4)
> **File Paths:** pagination.class.php (1), customers.php (1), customers_oo.php (1)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### [Outputting links for previous and next pages](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=0)** - [Instructor] Now that we have a pagination class, let's see how we can move the logic for creating the links to the previous and next pages inside of it. One of the nice things about object oriented programming is that we can take basic core functionality and move it into our objects. So the objects become a little more intelligent and they can calculate values that we need. For example, here we calculated the offset and the total pages. We can do the same thing with links. Our pagination class can know how to output a previous or a next link. If we go to customers.[[PHP]], we had that kind of code here inside pagination. What I want to do is take this code here and move it inside the class, so that the class itself can be asked to output this for us. So I'm going to copy this. Let's go into the pagination class and I'm going to start by just making a function called previous_link. And I'll paste that code in there. And I'm also going to make another one here. That's going to be called previous_page. And previous_page will be a little bit different. Previous_page will return to us the value of the previous page. And we know what that is, it's right here. Current page minus one. Current page though is stored now in this class variable, this current page minus one and we need to return that value. I'm also going to do one more thing to it which I'm going to store it in prev for a second. And then return. I'm going to check and see is prev going to be greater than zero? If it's zero, then it means that
>
> **[1:36](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=96)** we're already at the current page. So yeah, if it's greater than zero then return it, otherwise return false. So this will allow me to get previous page and I'll either get back a number or I'll get back false. So then in previous link I can make use of that. I can check and see whether previous page is false or not. So if previous page not equal to false then I'll have something to output. I need to make sure I put the dollar sign this and the arrow in front of it. And let's also, instead of using echo here that's a bad practice, I think, inside our objects. So instead I'm going to just build up a string that I will return. So here it's just called link. And at the end I will return back link, whatever value it is. And instead of echo, let's just append onto link. Whatever this value is. Now I don't need to use current page minus one anymore because previous page, if it's not false that will have the value that I want inside of it. And I'm actually going to take all of this to here and I'll put it inside curly braces and just paste it in there. I'm also going to go ahead and just break this line into a new line, just for clarity. There you are. So we have a link that'll go from customers.php with this current page value and it'll say previous on it. Let's put a space at the end just so we make sure that it's always has a space between whatever comes after it. Now customers.php may not be the only page I'm using. Right now it is, but I want this class to be something I can use
>
> **[3:09](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=189)** on a lot of pages. So let's take that out and let's just put in a variable for URL and the previous link will pass in whatever the URL is. It'll default to nothing. There we go. Now we have something that'll output the previous link. Let's do the same thing for our next link. I'll copy of this. You could go over to the next link and remind yourself how we did it if you want. But I'm going to go ahead and just do next page it's going to be equal to next, copy that. Now of course, the next page is going to be current page plus one, and we're not comparing it against zero here. We're checking to see if it's less than or equal to this total pages, right? Total pages we have up here. So it knows how many pages our next should always be less than or equal to total pages, if we're going to show it. And if so, we'll return it, otherwise will return false. So this is going to be next link and it will use next page. We'll check and see if it's false. All of that as the same, but this of course will be different. Instead, it's going to say next and rarr; for the [[HTML]] entity for the arrow. All right, so let's go and try these out. We now have an object that should know how to render previous and next links. So let's go back to our object oriented version of the customer's page. And let's scroll down here and below the table we'll put back in a P tag with a class of pagination and let's also then do PHP tags that will echo back
>
> **[4:48](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=288)** the value that we get from pagination previous_link.
>
> **[4:57](https://www.linkedin.com/learning/php-techniques-pagination/outputting-links-for-previous-and-next-pages?u=76281980&t=297)** And then what URL we want in this case the pass in customers_00.php There are a couple of different ways we could come up with that value. Let's just use that for now. And then let's put a PHP tag at the end. Now let's copy that value and let's paste it, and this one will be the next link. And for now, just to keep those separated let's put a pipe between them. I'll reload the page for customers_00.php. And you see, it says next, doesn't have a previous link, 'cause that was on page one. Now I have both previous and next. If I jumped forward to page 99, you'll see it as previous and next. When I click next again now I'm on page 100 and next goes away. So now that logic that we had before has been simplified down to just these two lines because it's all contained in our class. Our class can hold this logic and it's there for us to call it whenever we need it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (7), [[HTML]] (1)
> **CLI Commands:** php (7), make (4)
> **Env Vars:** url (3), php (2), html (1)
> **File Paths:** customers.php (3), customers_00.php (2)
> **Code Identifiers:** previous_link (2), previous_page (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)

#### [Outputting pagination links](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=0)** - [Instructor] In the previous movie, we moved all the logic for our previous and next links into our object. Let's do the same thing now with our Pagination links. You'll remember that in our customers.[[PHP]] file, we had all this code here, which output the different pagination links. I'm going to copy all of that because we're going to be moving it into our pagination class to use it there. I'll create public, function, and I'll call it a number underscore links. It'll also need a URL just like the other ones did, and it's also going to need a window. We talked about the window earlier. We'll allow that to be passed in. So if you decided you want a different window than two, you can pass it in otherwise it'll use two as default. So now let's go here and let's just paste in that code that we had. You can see that we have a lot of the same thing here, but I don't want to use echo again. So once again I'm going to put output equals, equals It'll start as an empty string, at the end, I will return back whatever output is, and I will just build it up and place it, these echoes I'll just do output dot equals. So that'll just depended on each time to the string, and then I'll return the string at the end. Okay a couple changes that we need to make here. One is we were using Wind before, and I'm using Window. I did that on purpose because instead of setting it to two here, I want to make sure that the value we're given is an integer, and we'll go ahead and use win which is a little shorter.
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=95)** So Window will be passed in default to two. We'll make sure it's an integer, but it'll still be set to the same thing we had before. All of this code will be the same, but some of these variables now are inside the class, or they've become functions. So for example total pages is this total pages, and I'll just copy that because we will replace this total pages with it as well, and current page is this, current page, and down here also , this current page, and, let's see we also need to change this so that it's not always customers. We want to make sure that it can be any URL. So whatever URL is being passed in the [[Representational State Transfer (REST)|rest]] of this logic is pretty much the same. I want to make one other addition, which is if when is set to zero, then we won't do a window at all. So I'm just going to change this to say when if it is, greater than zero, and all these other conditions, then we'll check and see if it needs to be gaped or not. If when is not set to zero, well than it'll just skip all of this code right here. It'll just go straight down to showing the pages. All right So let's save it and let's go back over to our customers underscore oh oh, and let's copy this, right here paste it in instead of Pagination link, it is now going to be called, Number, links. Exactly the same. Let me just make sure back here
>
> **[3:06](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=186)** that I had spaces after things. I did, space there good. All right So let's go back and try it out. Iron mountain customers Oh, oh, dot PHP. Let's go back to page one, scroll down, and we get what we would expect. Let's go to page three, page five, page seven. Ah there's our window. Right? See hard to see it. So everything is working exactly as we expected. So that's all there is to it. I'm going to make one more improvement. If I want to have all of these links, then let's go ahead and just put all of this logic into our class. So I'll take all of this and copy it. We'll come over to the Pagination class. Let's make another, function here public, function and I'm just going to call it page links. We'll pass in a URL, and inside there I'm going to to paste all of this, but of course I've got to build up this output over time just like we did before. So output is equal to an empty string at the start. Whatever we come up with at the end is what we're going to return back, output, and instead of having all these echo statements inside the PHP tags, I now want to check and see, change this here to be dollar sign output. I'll copy this, put that at the end. I'm also going to want to do it here. Output equals,
>
> **[4:40](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=280)** and I'll put quotes around the whole thing. Of course I need to escape these double quotes that are here, and let's do another output here, same thing put those double quotes around it. Semi-colon at the end, and I need to take away these closing PHP tags, that will do the trick for us, but we can also have one more improvement to it which is we can check and see if, this total pages, actually is greater than one. So do we have any pages to show or not, and if we do, then we're going to help with that. Otherwise we'll just output an empty string. All right So let's save it. Let's go back to customers oh,oh and all of this can be removed, and let me just simplify it down. Give me one second there we go, and instead of previous link, it's now going to be called page links, and that's it. One line in our code handles all of the pagination links for us now. let's come back over here and reload it. oop we had a problem. Ah ha I know what the problem is. If we come back here we forgot to change these to be this, instead. So all of these need to be this. We don't have this variable pagination anymore. Now We come back over here, reload it, and it works as expected. So hopefully you can see why it's nice to work with this object oriented version.
>
> **[6:12](https://www.linkedin.com/learning/php-techniques-pagination/outputting-pagination-links?u=76281980&t=372)** We've now got it down to something very simple. We just count the customers, create the pagination object, find the customers, and then when we show them the pagination links we just make one simple call in our code to find those links, and most importantly we can reuse all this functionality on other pages in our project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (9), php (4), find (2)
> **Env Vars:** url (4), php (3)
> **Cross-References:** go back to (2), we talked about (1)
> **Analogies:** just like (2), for example (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** customers.php (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/php-techniques-pagination/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-pagination/next-steps?u=76281980&t=0)** - [Instructor] I would like to thank you for taking "[[PHP]] Techniques: Pagination" with me. I hope you can immediately find uses for the pagination techniques that we've learned in this course. Once you have a good understanding of pagination, you may be interested in the chapter on infinite scrolling in "[[AJAX]] with PHP," another course in the library. Infinite scrolling loads results in pages, just like we learned in this course, but when the user scrolls to the bottom of the page, Ajax automatically loads the next page and adds it to the end. Many popular websites use this technique effectively and you can too. I wish you luck with pagination and until next time, happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[AJAX]] (2)
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