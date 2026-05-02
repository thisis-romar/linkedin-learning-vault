---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: html-tables
url: "https://www.linkedin.com/learning/html-tables"
duration_minutes: 84
duration: 1h 24m
level: Beginner
updated: 2/1/2024
learners: 11845
skills:
  - HTML
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEbYbJfxltcqA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1579284727023?e=2147483647&amp;v=beta&amp;t=SqSG-3VkApF_ZtGugV2jZnAdPnbbB0YF-bDrO21RKVo"
linkedin_topic: Web Development
learning_paths:
  - '[[Advance Your Skills in HTML]]'
prev_courses:
  - '[[HTML- Images and Figures]]'
next_courses:
  - '[[HTML- Metadata in the Head]]'
path_nav: '[{"path":"Advance Your Skills in HTML","position":5,"total":11,"prev":"HTML- Images and Figures","next":"HTML- Metadata in the Head"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/html
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/HTML-%20Tables.md)

![HTML: Tables](https://media.licdn.com/dms/image/v2/C4E0DAQEbYbJfxltcqA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1579284727023?e=2147483647&amp;v=beta&amp;t=SqSG-3VkApF_ZtGugV2jZnAdPnbbB0YF-bDrO21RKVo)

# HTML: Tables

> Sometimes you need to share data, and not just visualizations, directly with other people. HTML tables make this easy. While they have a complex history of use and misuse, HTML tables are great at their key purpose: presenting data. In this course, learn how to create table structures that fit your data precisely, are easy to style, and work well for sharing. Instructor Jen Kramer covers the essen

> [LinkedIn Learning](https://www.linkedin.com/learning/html-tables) | 1h 24m | Beginner | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Create semantic HTML tables](#create-semantic-html-tables)
  - [What you should know](#what-you-should-know)
  - [Working with CodePen](#working-with-codepen)
- [**1. Table Basics**](#1-table-basics) (10 videos)
  - [Display data semantically](#display-data-semantically)
  - [Understand table rows and table data](#understand-table-rows-and-table-data)
  - [Add content and data to table cells](#add-content-and-data-to-table-cells)
  - [Understand table headings](#understand-table-headings)
  - [Identify table head, body, and foot](#identify-table-head-body-and-foot)
  - [Include table captions](#include-table-captions)
  - [Group columns and apply to headers](#group-columns-and-apply-to-headers)
  - [Use colspan and rowspan](#use-colspan-and-rowspan)
  - [Challenge: Mark up a table](#challenge-mark-up-a-table)
  - [Solution: Mark up a table](#solution-mark-up-a-table)
- [**2. Styling HTML Tables**](#2-styling-html-tables) (6 videos)
  - [Style table borders and basic styling](#style-table-borders-and-basic-styling)
  - [Style the table caption](#style-the-table-caption)
  - [Style your table headers and footers](#style-your-table-headers-and-footers)
  - [Stripe table rows with background colors](#stripe-table-rows-with-background-colors)
  - [Challenge: Style HTML tables](#challenge-style-html-tables)
  - [Solution: Style HTML tables](#solution-style-html-tables)
- [**3. Making Tables Responsive**](#3-making-tables-responsive) (5 videos)
  - [Responsive tables with side scrolling](#responsive-tables-with-side-scrolling)
  - [Reformat a table for responsive layout](#reformat-a-table-for-responsive-layout)
  - [Final styling tweaks](#final-styling-tweaks)
  - [Challenge: Make tables responsive](#challenge-make-tables-responsive)
  - [Solution: Make tables responsive](#solution-make-tables-responsive)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Create semantic HTML tables](https://www.linkedin.com/learning/html-tables/create-semantic-html-tables-23413073?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-tables/create-semantic-html-tables-23413073?u=76281980&t=0)** - If it lives in a spreadsheet, it's probably suitable for an [[HTML]] table.
>
> **[0:05](https://www.linkedin.com/learning/html-tables/create-semantic-html-tables-23413073?u=76281980&t=5)** This course is all about bringing you up to speed on how to create simple and complex HTML tables.
>
> **[0:12](https://www.linkedin.com/learning/html-tables/create-semantic-html-tables-23413073?u=76281980&t=12)** By the end of this course, you'll have a solid working knowledge of how to code a table with HTML, style it with CSS and make it accessible for everyone on all devices.
>
> **[0:23](https://www.linkedin.com/learning/html-tables/create-semantic-html-tables-23413073?u=76281980&t=23)** I'm Jen Kramer and I've been teaching how to make meaningful, engaging HTML tables for over 20 years.
>
> **[0:31](https://www.linkedin.com/learning/html-tables/create-semantic-html-tables-23413073?u=76281980&t=31)** So if you're ready, let's get started with HTML tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5)
> **Env Vars:** html (5), css (1)
> **CLI Commands:** make (2)
> **Speakers:** - if (1)

#### [What you should know](https://www.linkedin.com/learning/html-tables/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-tables/what-you-should-know?u=76281980&t=1)** - [Instructor] Coming into this course you should have a working knowledge of [[HTML]].
>
> **[0:05](https://www.linkedin.com/learning/html-tables/what-you-should-know?u=76281980&t=5)** If you don't understand HTML, a gentle introduction is my course: Practical HTML for Marketing Projects.
>
> **[0:12](https://www.linkedin.com/learning/html-tables/what-you-should-know?u=76281980&t=12)** Even if you're not working on marketing, this will get you started with some background information about how HTML works.
>
> **[0:20](https://www.linkedin.com/learning/html-tables/what-you-should-know?u=76281980&t=20)** If you're also interested in styling your document, you should have a working knowledge of CSS as well.
>
> **[0:26](https://www.linkedin.com/learning/html-tables/what-you-should-know?u=76281980&t=26)** I recommend the CSS Essential Training one course for this type of background.
>
> **[0:32](https://www.linkedin.com/learning/html-tables/what-you-should-know?u=76281980&t=32)** I'll be working with [[CodePen]] in this course, available at [codepen.io](https://codepen.io).
>
> **[0:38](https://www.linkedin.com/learning/html-tables/what-you-should-know?u=76281980&t=38)** You can follow along with my examples directly in CodePen via the URL provided for each video without an account.
>
> **[0:47](https://www.linkedin.com/learning/html-tables/what-you-should-know?u=76281980&t=47)** However, creating an account if you want to save your work and then fork my examples to make your own saved changes.
>
> **[0:56](https://www.linkedin.com/learning/html-tables/what-you-should-know?u=76281980&t=56)** [[JavaScript]] is not included in this course, so no background in that is required.
>
> **[1:01](https://www.linkedin.com/learning/html-tables/what-you-should-know?u=76281980&t=61)** With a little knowledge of HTML and CSS you should be ready to start the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5), [[CodePen]] (3), [[JavaScript]] (1)
> **Env Vars:** html (5), css (3), url (1)
> **CLI Commands:** make (1)
> **URLs:** [codepen.io](https://codepen.io) (1)
> **Speakers:** - [instructor] (1)

#### [Working with CodePen](https://www.linkedin.com/learning/html-tables/working-with-codepen?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-tables/working-with-codepen?u=76281980&t=1)** - [Narrator] In this course, we'll be working with a product called [[CodePen]].
>
> **[0:04](https://www.linkedin.com/learning/html-tables/working-with-codepen?u=76281980&t=4)** CodePen is something of an industry standard at this point.
>
> **[0:08](https://www.linkedin.com/learning/html-tables/working-with-codepen?u=76281980&t=8)** It is a way that you can work with [[HTML]], CSS, and [[JavaScript]] online and where everyone can see your work.
>
> **[0:16](https://www.linkedin.com/learning/html-tables/working-with-codepen?u=76281980&t=16)** So, I have some of the examples that we'll be using in this course available here through the CodePen editor.
>
> **[0:22](https://www.linkedin.com/learning/html-tables/working-with-codepen?u=76281980&t=22)** As you watch each of the videos, you'll see a website address, a URL come up on your screen.
>
> **[0:30](https://www.linkedin.com/learning/html-tables/working-with-codepen?u=76281980&t=30)** All you'll need to do is put that into your browser bar and that will take you to whatever it is that I happened to be talking about at that particular moment.
>
> **[0:40](https://www.linkedin.com/learning/html-tables/working-with-codepen?u=76281980&t=40)** Now if you want, you can go on ahead and just start typing in here, hooray, I am editing this page, which is grand.
>
> **[0:53](https://www.linkedin.com/learning/html-tables/working-with-codepen?u=76281980&t=53)** But if you want to actually save this work, what I would recommend that you do is hit the fork button up here on the top.
>
> **[1:00](https://www.linkedin.com/learning/html-tables/working-with-codepen?u=76281980&t=60)** Forking is a term that indicates we're going to make a copy of this and then we're going to do something with it on our own.
>
> **[1:08](https://www.linkedin.com/learning/html-tables/working-with-codepen?u=76281980&t=68)** So, if you just click the fork button, it's going to give you the option of signing in.
>
> **[1:14](https://www.linkedin.com/learning/html-tables/working-with-codepen?u=76281980&t=74)** Feel free to enter your username or email address and your password, or you can also reset your password or you have the option of signing up for CodePen.
>
> **[1:23](https://www.linkedin.com/learning/html-tables/working-with-codepen?u=76281980&t=83)** Again, this would allow you to save your work if you want to do that.
>
> **[1:27](https://www.linkedin.com/learning/html-tables/working-with-codepen?u=76281980&t=87)** If you're not interested in signing up for the service, it's totally fine.
>
> **[1:31](https://www.linkedin.com/learning/html-tables/working-with-codepen?u=76281980&t=91)** You can just edit here, you just won't be able to save your work as you go.
>
> **[1:36](https://www.linkedin.com/learning/html-tables/working-with-codepen?u=76281980&t=96)** Either way works perfectly fine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CodePen]] (4), [[HTML]] (1), [[JavaScript]] (1)
> **Env Vars:** html (1), css (1), url (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)


### 1. Table Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Display data semantically](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=0)** - The concept of semantics has a rough history on the Web.
>
> **[0:03](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=3)** When the Web was first moving into the commercial space in the mid 1990s, CSS was so new that it was unavailable in the browser.
>
> **[0:12](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=12)** Therefor, styling was very much a part of [[HTML]].
>
> **[0:16](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=16)** Webpage layouts were pretty much limited to two methodologies.
>
> **[0:19](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=19)** We could layout webpages using frames an old methodology since deprecated by the W3C.
>
> **[0:26](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=26)** This led to unsightly scroll bars all over webpages, so it wasn't necessarily the best looking approach.
>
> **[0:34](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=34)** Or, there was a second approach, which heavily influenced the web world for the next 10 years or so.
>
> **[0:39](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=39)** In his book, "Creating Killer Websites", published in 1996, David Siegel advocated avoiding the use of most standard HTML tags and using tables for layout.
>
> **[0:51](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=51)** Combined with spacer GIFs and nesting tables many layers deep, this methodology became our first method for layout on the Web.
>
> **[0:59](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=59)** It was so popular you'll still see websites that use it today.
>
> **[1:05](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=65)** Unfortunately, there are huge problems with using tables for layout.
>
> **[1:09](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=69)** Notably, a problem with semantics.
>
> **[1:12](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=72)** Semantics is the concept that HTML tags in use should reflect their content.
>
> **[1:18](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=78)** For example, a heading tag should reflect a heading in the content.
>
> **[1:23](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=83)** An article tag reflects that this item is an article.
>
> **[1:26](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=86)** A paragraph tag reflects that this bit of content is a paragraph.
>
> **[1:30](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=90)** When tables are used for layout, we're implying that the page is all tabular data.
>
> **[1:36](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=96)** The kind of content that comes from a spreadsheet.
>
> **[1:39](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=99)** Over the next 10 years after that book's publication, the [[Web Standards]] Project led an intense campaign, encouraging developers to use semantic HTML that reflected the content of their webpages, and to separate presentation from markup using CSS.
>
> **[1:56](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=116)** While the project never said that tables were bad for displaying data, unfortunately, many developers took away the message that tables were inherently evil and should never be used in websites.
>
> **[2:09](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=129)** More than 20 years after "Designing Killer Websites" was first published, table-based layouts have mostly disappeared.
>
> **[2:16](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=136)** Tables tend to be used only for data, as they should be, but some developers seem to use CSS Grid, Flexbox and other layout methodologies for data that should be displayed in a table.
>
> **[2:29](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=149)** HTML was invented by a physicist who knew he'd want to share his data.
>
> **[2:34](https://www.linkedin.com/learning/html-tables/display-data-semantically?u=76281980&t=154)** With some background in HTML tables, you, too should share your data with the semantically correct HTML system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (7), [[Web Standards]] (1)
> **Env Vars:** html (7), css (3), w3c (1)
> **Definitions:** is an  (1), is a  (1)
> **Documentation:** w3c (1)
> **Analogies:** for example (1)
> **Speakers:** - the (1)

#### [Understand table rows and table data](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=1)** - [Instructor] Let's get started with coding some tables with [[HTML]].
>
> **[0:04](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=4)** I'm going to work here in [[CodePen]] to make things easier to see immediately and keep the focus on our code rather than working in something like VSCode where we would have to write the HTML and then individually view it in a browser.
>
> **[0:20](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=20)** To keep this really simple for now, I'm going to start by minimizing these [[Windows]] here.
>
> **[0:25](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=25)** You just grab them and drag them on down.
>
> **[0:28](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=28)** The only window that we're going to need is our HTML window and I'll make that just a little bit bigger so we can see what's going on here.
>
> **[0:36](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=36)** The next thing that I'm going to do is I'm just going to go ahead and get started writing a table.
>
> **[0:40](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=40)** And shockingly, that starts with a table tag.
>
> **[0:43](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=43)** And it finishes with a /table tag.
>
> **[0:48](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=48)** Just like a lot of things in HTML.
>
> **[0:51](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=51)** So that's the way you start and end a table, what goes inside of that?
>
> **[0:56](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=56)** Well a couple of things.
>
> **[0:58](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=58)** The next thing you should be aware of are rows.
>
> **[1:01](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=61)** And those are tr for table row.
>
> **[1:04](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=64)** And they have a starting and ending tag just as you'd expect.
>
> **[1:08](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=68)** You can have as many or as few of these as you want and each one of these will display as a row on the webpage.
>
> **[1:15](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=75)** Right now we don't see anything because we have no content and I have no CSS to outline any of the elements that I'm putting on here, so currently you're not going to see anything, and that's just fabulous.
>
> **[1:27](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=87)** And then the third key part of our table are the cells.
>
> **[1:32](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=92)** And cells actually come in two types, but the type we'll start with are called td for table data.
>
> **[1:39](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=99)** So unlike a spreadsheet where we have very specific rows and columns, here in our HTML tables we only have cells and we have rows.
>
> **[1:51](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=111)** And the fact that they form columns is a lovely thing but we don't actually necessarily have very strong ways of selecting those columns through our HTML.
>
> **[2:02](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=122)** So let's go on ahead and drop in then some table data
>
> **[2:10](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=130)** just like that, and an opening and a closing tag.
>
> **[2:13](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=133)** And then in between you can put in whatever you want for text.
>
> **[2:23](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=143)** And so I am just going to go ahead and add a few cells here so you can see what's going on.
>
> **[2:31](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=151)** So that now gives us as you see there, three cells over on the display side of the screen, and they each have a little bit of content.
>
> **[2:41](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=161)** I could just go on ahead and copy that whole row and I'm just going to paste that in again.
>
> **[2:50](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=170)** And at that point you can see that we've duplicated that.
>
> **[2:54](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=174)** We now have a series of rows and our cells inside of that.
>
> **[2:59](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=179)** You can certainly change your content if you wish,
>
> **[3:10](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=190)** just like that, and then those cells can say something different entirely.
>
> **[3:15](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=195)** So now let's add a little bit of CSS so that we can more clearly see what's going on here.
>
> **[3:21](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=201)** I'm going to go ahead and write some CSS now.
>
> **[3:23](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=203)** I'm not going to change my HTML any further, and just using straight CSS let's just go on ahead and drop in some borders and some colors just to make things really clear about what's going on here.
>
> **[3:34](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=214)** So I'm going to use just my table element selector and I can put a border of three pixels solid red and that'll show you the border of the table.
>
> **[3:46](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=226)** And let's make the text a little bit bigger as well.
>
> **[3:49](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=229)** So I'm going to say my font size will be 2rem.
>
> **[3:54](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=234)** Remember, a rem is a root relative M, and one em, e-m, is 16 pixels, so two of them is about 32 pixels.
>
> **[4:03](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=243)** In other words, nice big text that you see going on here.
>
> **[4:06](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=246)** Then we can add to this a tr.
>
> **[4:11](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=251)** And let's give that a background color.
>
> **[4:16](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=256)** Maybe a nice light shade of gray.
>
> **[4:20](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=260)** So you can see now that we have our rows are light gray, but you can see there's a little bit of space in between the cells themselves, and that's showing up as those white lines right there.
>
> **[4:33](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=273)** And then to this we can also add a TD style and here we can say our border is three pixels dotted blue.
>
> **[4:47](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=287)** Note that there's a tiny bit of default spacing between these table cells.
>
> **[4:52](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=292)** This may affect our styling later, but for right now we're just going to concentrate on how to mark up the tables.
>
> **[4:58](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=298)** So don't worry too much about how it looks at the moment.
>
> **[5:01](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=301)** This is just designed to give you a sense of how this particular table is going to look displayed on the screen.
>
> **[5:08](https://www.linkedin.com/learning/html-tables/understand-table-rows-and-table-data?u=76281980&t=308)** And in chapter two we'll go into much more detail about how to style these.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (7), [[CodePen]] (1), [[Windows]] (1)
> **Env Vars:** html (7), css (4)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2), in other words (1)
> **Analogies:** just like (3)
> **Warnings:** be aware (1), note that (1)
> **Speakers:** - [instructor] (1)

#### [Add content and data to table cells](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=0)** - [Instructor] Now that you have a sense of the basic [[HTML]] that goes into marking up a table, let's talk about how to get content from a spreadsheet into an HTML table.
>
> **[0:13](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=13)** So, this is the Wisdom Pet Medicine pricing spreadsheet and this is what we were given as content when we were asked to go ahead and put this on the website.
>
> **[0:23](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=23)** So, this is a very common thing that will happen, people will give you spreadsheets like this, and you'll be asked to just put 'em up on a website somewhere.
>
> **[0:32](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=32)** So the very first step that you're going to want to do is to get the data out of the spreadsheet and get it into your webpage.
>
> **[0:40](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=40)** Remember that we only have rows to work with in our HTML, we don't necessarily have columns.
>
> **[0:47](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=47)** So what we really need out of this spreadsheet is all of each of these cells to show up as little groups of data indicating where each row of our table will be.
>
> **[1:00](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=60)** So I went ahead and did that for you, this is also in your exercise files folder, so this is just a plain text file that has all of that information from that spreadsheet, everything organized row by row.
>
> **[1:13](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=73)** And that is what we are going to need to copy and paste into Code Pen.
>
> **[1:18](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=78)** So if you go on ahead and open up your Code Pen for this particular video.
>
> **[1:24](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=84)** You'll see here I've actually gone ahead and copied and pasted in that information for you, so there's all of that information from that text file, just pasted straight in here.
>
> **[1:37](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=97)** Of course, it looks terrible over here in the viewing window for obvious reasons, we have no markups, so it's all just displayed one thing after another, even though there are returns in it as you see over on the HTML side.
>
> **[1:49](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=109)** As for CSS, all I've done is changed the font family to Arial, because I think that's just so much prettier to look at than Times New Roman, otherwise, we can ignore that window completely.
>
> **[2:00](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=120)** So, now that we've got all of this lovely data here, let's go ahead and start marking that up.
>
> **[2:06](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=126)** So, the very first thing to do of course is just start by marking our table.
>
> **[2:11](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=131)** We're going to start the table here up at line one and we're going to end it down here on the bottom.
>
> **[2:21](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=141)** And, everything inside of here, we can consequently tab in.
>
> **[2:27](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=147)** I've just highlighted all that text and hit my tab button on my keyboard and that will indent things nicely.
>
> **[2:33](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=153)** I find that it's really important to keep up with your indents, in HTML in general, but really with labels because it's very easy to get lost in what row you're in or what table data you happen to be working with so I would encourage you to do the same.
>
> **[2:49](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=169)** So the next thing we'll do is to take each one of these and we're going to go ahead and set these up with table row and the table row is going to end here.
>
> **[3:02](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=182)** I'm just going to do two of these real quick for ya so you see how this goes.
>
> **[3:07](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=187)** We have a table row here and that one ends down here.
>
> **[3:14](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=194)** Okay, and we can take all of our information here and we'll indent this again, information inside of it we can indent, and then for each individual item, we're simply going to wrap around it a TD tag, a td/td just like this for each one of these particular items.
>
> **[3:42](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=222)** So I'm going to go ahead and I'm going to continue to mark up everything that I have here in this table all the way down here to the bottom, mark up my rows, mark up my cells, and if you'd like to go on ahead and pause the video and go on ahead and do that on your own, that would be great.
>
> **[4:12](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=252)** There we go, and here we are.
>
> **[4:15](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=255)** So hopefully you have gone through and you've marked up your entire table now.
>
> **[4:20](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=260)** We've just used three tags here.
>
> **[4:21](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=261)** We use the table tag, we use the tr, the table row tag, we used td, the table data tag, and we've sprinkled those all in the appropriate places and now you can start to see the outline of a table appearing on your webpage.
>
> **[4:37](https://www.linkedin.com/learning/html-tables/add-content-and-data-to-table-cells?u=76281980&t=277)** So, your table should look kind of like mine, no one is accusing it of being beautiful, no one is accusing it of having it be completely done, we have plenty of additional things to add to it, but you can definitely see the direction that we're headed here with our HTML just with these three simple tags.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6)
> **Env Vars:** html (6), css (1)
> **Analogies:** just like (1), kind of like (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Understand table headings](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=1)** - [Instructor] Now that we have our basic table structure in place, let's take a closer look at how we could improve this structure based on the content that we have represented.
>
> **[0:11](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=11)** Right now all we've got is a series of rows.
>
> **[0:13](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=13)** Inside of those rows we have some data.
>
> **[0:16](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=16)** Everything is exactly the same in this table and that's actually not true.
>
> **[0:21](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=21)** Some pieces of data are slightly different than others and it would be interesting to include that information in our [[HTML]] markup.
>
> **[0:28](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=28)** So for example, here we have a row of information that talks about the item number or the product or the service, the price and so forth.
>
> **[0:37](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=37)** And usually that type of information is called a header.
>
> **[0:40](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=40)** Usually it's maybe bolded or somehow displayed differently than the [[Representational State Transfer (REST)|rest]] of the information in the spreadsheet.
>
> **[0:47](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=47)** And so we would probably like to mark it up to reflect that difference between that header data and the data in the rest of the table.
>
> **[0:57](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=57)** And there is indeed a tag to do that and it's called the TH tag for the table heading.
>
> **[1:03](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=63)** So if we go ahead and just swap out these TDs for THs that's all that we need to do here.
>
> **[1:11](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=71)** And in fact here in [[CodePen]] all you have to do is change the first tag and it will be smart enough to change the closing tag for you, which is super-handy.
>
> **[1:21](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=81)** So what you're going to see here is as I change those cells from table data to table heading is that that text becomes bold and it looks like it's out of alignment a little bit.
>
> **[1:33](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=93)** By default pretty much your browser is going to display it bold and centered over the data that happens to be in the cells underneath.
>
> **[1:41](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=101)** We can fix that in CSS later and we definitely will.
>
> **[1:45](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=105)** Clearly the cells are too close together.
>
> **[1:48](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=108)** The headings are not really looking all that beautiful.
>
> **[1:52](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=112)** But one thing at a time.
>
> **[1:53](https://www.linkedin.com/learning/html-tables/understand-table-headings?u=76281980&t=113)** So first of all, we're just going to concentrate on this markup and we'll deal with all this pretty stuff in chapter two.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[HTML]] (1), [[CodePen]] (1)
> **Env Vars:** html (1), css (1)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Identify table head, body, and foot](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=1)** - [Instructor] [[HTML]] tables may be divided into three parts a head, a body, and a foot.
>
> **[0:07](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=7)** And I'd like to go ahead and to do that to my table now because the head, the body, and the foot serve different functions inside of this table so let's walk through how we might go about doing that.
>
> **[0:19](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=19)** So first of all is the table head and that is the part of the table that will contain the rows comprising the head of the table, shockingly.
>
> **[0:28](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=28)** In our table we have a single row that is responsible for this function.
>
> **[0:32](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=32)** We may have multiple rows in a more complicated table potentially, but in this particular situation the way we have our table right now it's really just this first row that corresponds to our head of the table.
>
> **[0:46](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=46)** So the thead is the tag.
>
> **[0:49](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=49)** We're going to go ahead and add this just before the start of the row and then we'll close that thead tag just after the end of that particular row.
>
> **[1:01](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=61)** So you definitely could have multiple rows in that head.
>
> **[1:05](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=65)** We may add some of that a little bit later on, but definitely at least this one row should be in there.
>
> **[1:12](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=72)** So what's the difference between the thead and the TH.
>
> **[1:15](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=75)** That might be something you're wondering at this point.
>
> **[1:17](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=77)** It's really just the scope of each tag.
>
> **[1:20](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=80)** The thead is going around the row or several rows whereas the TH is just for a column of data.
>
> **[1:27](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=87)** You'll notice that nothing looks different on the page.
>
> **[1:29](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=89)** Totally true.
>
> **[1:31](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=91)** The thead tag did not enhance the look of our table by default from the browser style sheet.
>
> **[1:37](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=97)** However, we could potentially use that thead tag later for further styling as you'll see in the next chapter.
>
> **[1:44](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=104)** Remember that our first goal here is semantics to make sure this table is communicating its information effectively.
>
> **[1:51](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=111)** So that's the first thing we need to be concerned with.
>
> **[1:54](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=114)** Once the thead is set up we can go ahead and set up the tbody tag, and that's going to come right after T head in this particular case because that is going to be all of these lovely rows here with all of our just regular old plain data in it.
>
> **[2:10](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=130)** And so I'm just going to go ahead and highlight those and dent them a little bit and then we can close our tbody after that.
>
> **[2:17](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=137)** Now it is possible to have your tables set up with just the thead and the tbody.
>
> **[2:23](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=143)** Or you could have none of those tags at all.
>
> **[2:25](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=145)** It could be that you have a very simple table that doesn't even need the thead and the tbody in place.
>
> **[2:31](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=151)** But generally speaking if you have a head you'll probably have a body as well.
>
> **[2:35](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=155)** The foot is completely optional.
>
> **[2:37](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=157)** Just as the head is optional it's possible that you could have just some data with a foot at the end.
>
> **[2:43](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=163)** And it sort of depends, again, on the data inside of your table and what you're trying to communicate.
>
> **[2:48](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=168)** In this case we actually, in the table that I've given you to this point we don't have any need for a tfoot tag, but to show you how this would work let's just go ahead and add one.
>
> **[2:59](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=179)** So this is tfoot is the start of the tag and then we can close it.
>
> **[3:04](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=184)** And then inside of that of course I'm going to put in a row.
>
> **[3:12](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=192)** And it doesn't make any sense to put it in totals of all of these columns, but let's just say that that was something that was important to us for whatever reason.
>
> **[3:22](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=202)** And so to do that, maybe this first cell, the one under the item number, that one is going to be empty.
>
> **[3:29](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=209)** So I'm just going to represent that by opening and a closing table data tag with nothing in between.
>
> **[3:35](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=215)** That will just occupy that empty cell.
>
> **[3:38](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=218)** And then in the second cell I'm going to put in the totals of these columns because you know, that translates what's going to come next.
>
> **[3:50](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=230)** And then after that I've done the math for you, so we can put in these totals, 125.04.
>
> **[4:03](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=243)** The next one is $1425.46.
>
> **[4:12](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=252)** The next one is $75.02.
>
> **[4:21](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=261)** Then we have $1350.43.
>
> **[4:30](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=270)** And finally, $150.05.
>
> **[4:37](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=277)** So then of course we end our row and we end our tfoot, and then end our table.
>
> **[4:44](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=284)** So just like with the thead tag, the tfoot tag is going to encompass one row or several rows of information.
>
> **[4:51](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=291)** Also note that since the first cell has no data, we didn't add any data here, although we still create the cell.
>
> **[4:58](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=298)** That's going to keep our formatting in place and keep our columns in line even though we have no data in that spot.
>
> **[5:03](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=303)** Without that cell, then things are going to get all out of whack here on this table.
>
> **[5:08](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=308)** So once again, thead, tbody, and tfoot are optional tags.
>
> **[5:11](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=311)** Not necessarily required in creating a simple table.
>
> **[5:15](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=315)** They're particularly helpful for grouping multiple rows of information.
>
> **[5:18](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=318)** It's possible to just have the thead and the tbody or just tbody and tfoot.
>
> **[5:23](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=323)** if those make more sense for your table.
>
> **[5:25](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=325)** However, these tags are generally not used by themselves like just a tbody or just a thead.
>
> **[5:31](https://www.linkedin.com/learning/html-tables/identify-table-head-body-and-foot?u=76281980&t=331)** You'll either use all three or you'll use two of them, but probably not a single one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Versions:** 125.04 (1), 1425.46 (1), 75.02 (1), 1350.43 (1), 150.05 (1)
> **CLI Commands:** make (3)
> **Prerequisites:** set up (3)
> **Env Vars:** html (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)

#### [Include table captions](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=1)** - [Instructor] We know what this table is about.
>
> **[0:02](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=2)** This is a list of [[Microsoft Products|products]] or services with the various prices associated with them for Wisdom Pet Medicine.
>
> **[0:09](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=9)** But would anyone else know that coming and visiting this webpage?
>
> **[0:13](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=13)** I suppose if they stared at this for a while they might get a sense that it's about the prices of some products or services for something to do with pets.
>
> **[0:21](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=21)** But fortunately there is a better way to identify the purpose of this table and that is through the table caption.
>
> **[0:29](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=29)** The table caption is designed to describe what this data is all about.
>
> **[0:33](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=33)** And they're very simple to add.
>
> **[0:35](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=35)** They add a tremendous amount of accessibility for the table so let's go ahead and add one.
>
> **[0:41](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=41)** The caption can be placed in one of two places.
>
> **[0:44](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=44)** It's either placed right here immediately after the table tag, which is where I'm going to put mine, and we're going to just use the caption tag.
>
> **[0:54](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=54)** We'll type in our text, Wisdom Pet Medicine Product Price List.
>
> **[1:06](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=66)** And then close your caption tag.
>
> **[1:09](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=69)** So it can go here or it can go at the very end of the table.
>
> **[1:16](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=76)** It can go all the way down here at the bottom just before the slash table tag.
>
> **[1:21](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=81)** But it is required in order to validate that the caption must either be the first child or the last child of the table tag.
>
> **[1:30](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=90)** So that is why I've put it in those places.
>
> **[1:32](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=92)** As you'll see here, regardless of where you put it it will actually show at the top of the table in your browser by default.
>
> **[1:41](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=101)** You can certainly change that with CSS.
>
> **[1:43](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=103)** It is possible that you actually do want the caption listed last in the table.
>
> **[1:47](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=107)** Maybe it's a description of the table information for a paper or something, kind of like a figure description.
>
> **[1:55](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=115)** But in our case it's going to make more sense to put it at the top.
>
> **[1:58](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=118)** So I'm going to go on ahead and move it back up to the top of the table here.
>
> **[2:05](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=125)** And it will continue to display in exactly the same place.
>
> **[2:09](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=129)** Obviously once again, that doesn't really look all that attractive.
>
> **[2:12](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=132)** It's not really standing out on the page.
>
> **[2:15](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=135)** All of that can be fixed with CSS and we'll do that in the next chapter.
>
> **[2:18](https://www.linkedin.com/learning/html-tables/include-table-captions?u=76281980&t=138)** But in any case do not forget to add a caption to every table that you create to identify the information and enhance the accessibility of that table to those with various types of disabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2)
> **Env Vars:** css (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### [Group columns and apply to headers](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=0)** - [Instructor] If you've noticed our data, you'll see that we have some retail prices and some case prices for our [[Microsoft Products|products]].
>
> **[0:08](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=8)** We may want to group these columns to show a relationship between these kinds of prices.
>
> **[0:13](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=13)** The way to do this is with a combination of a col group tag, and the col tag.
>
> **[0:20](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=20)** And that's going to spell out a model that we can then apply to the actual [[HTML]] tags that make up our table.
>
> **[0:29](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=29)** It's kind of like a model that runs on top of that code.
>
> **[0:32](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=32)** So, we'll start with the col group tag, and that should be placed just after the caption and before any T head that you have there in the document.
>
> **[0:41](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=41)** And we'll go ahead and put it in this way.
>
> **[0:43](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=43)** We have col group.
>
> **[0:45](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=45)** And then, of course a slash col group.
>
> **[0:51](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=51)** And then in between the col group tags, we're going to put in a series of tags that are simply col.
>
> **[0:57](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=57)** And we need to account for seven columns because that's what we have spelled out in the [[Representational State Transfer (REST)|rest]] of the document.
>
> **[1:06](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=66)** And, so, we have to have at least seven of these cols in one form or another.
>
> **[1:12](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=72)** So, we'll start here with the very first column, which is the item number.
>
> **[1:16](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=76)** We can assign col a class, let's give it a class of item.
>
> **[1:21](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=81)** So, that way, we can style it later.
>
> **[1:25](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=85)** Then, for the second one here, we'll just call it col.
>
> **[1:29](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=89)** Maybe I don't necessarily want to do anything with that column.
>
> **[1:32](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=92)** I don't want to give it a class or whatever.
>
> **[1:33](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=93)** Then, I have these next two columns, the price and the retail price.
>
> **[1:38](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=98)** Those are probably something that I want to group together.
>
> **[1:43](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=103)** So, what I'm going to do here, is I'm going to say col, and then I'm going to include a span equals two.
>
> **[1:52](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=112)** So, in other words, we are specifying that this particular col is going to span across two columns.
>
> **[2:01](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=121)** And we can also give that a class, let's call it retail.
>
> **[2:08](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=128)** And then finally, let's put in one final one of these.
>
> **[2:10](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=130)** In this case, it's the col with the span equals three, and that class will be case.
>
> **[2:21](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=141)** So, now you should be able to add these together.
>
> **[2:25](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=145)** Two and three is five, six, seven.
>
> **[2:27](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=147)** So, we have accounted for all seven columns now, in our col group.
>
> **[2:32](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=152)** Now, if you take a quick look at what's going on here, it looks like absolutely nothing has changed on the page.
>
> **[2:38](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=158)** And that is because the col group and these col tags themselves don't actually do anything to the look of the page, by default, with just the browser stylesheet.
>
> **[2:48](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=168)** But, we can go ahead and add some styles to this if you'd like.
>
> **[2:52](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=172)** So, for example, we could say retail will have a background color of red.
>
> **[3:02](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=182)** And you can see how that is going ahead and highlighting everything there in red, for those two columns.
>
> **[3:07](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=187)** Then, we can say case, which is going to have a background color of blue.
>
> **[3:16](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=196)** And that takes care of those other three.
>
> **[3:19](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=199)** And then item itself, maybe, for some reason we want that a color.
>
> **[3:23](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=203)** Background hyphen color will be yellow.
>
> **[3:27](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=207)** So, that is one way that you can use this col group and then the individual cols with classes, to demonstrate how information is related, here on your webpage.
>
> **[3:40](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=220)** So, now that we have these col groups and these cols in place, now what we need to do is associate them with our headers, our table headers, which are located here, further down in our document.
>
> **[3:54](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=234)** So, we are calling out some sort of arrangement of columns here.
>
> **[3:58](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=238)** So, now I want to be sure that these table headers, it's known that these are going to be part of a header on a column.
>
> **[4:06](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=246)** You can have table headers on rows.
>
> **[4:08](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=248)** In this case, we're going to have them on columns.
>
> **[4:10](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=250)** And, so, the way we specify that is by adding the scope attribute, with a value of col.
>
> **[4:16](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=256)** And if this happened to be a row, you, of course, could say row instead.
>
> **[4:21](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=261)** But, we're just going to keep it at col because that's, in fact, correct, for this particular set of data.
>
> **[4:26](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=266)** I'm simply going to take that and copy and paste that attribute inside of all of my TH tags.
>
> **[4:33](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=273)** So, that will, then, be very clear, about it's a header for a column and not a header for a row.
>
> **[4:41](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=281)** All right, so, that is how we can set up a general, sort of idea, of data here, in our document.
>
> **[4:50](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=290)** And relationships between certain columns of data, in this particular case.
>
> **[4:56](https://www.linkedin.com/learning/html-tables/group-columns-and-apply-to-headers?u=76281980&t=296)** And start to talk about all kinds of relationships that are going on in this table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[HTML]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** kind of like (1), for example (1)
> **CLI Commands:** make (1)
> **Env Vars:** html (1)
> **Definitions:** in other words (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Use colspan and rowspan](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=0)** - [Instructor] Now that we've grouped some of these columns together and we're showing a relationship between this type of data what if we wanted to add a big label across the top of all of those rows?
>
> **[0:11](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=11)** Like right now I've got some red columns and some blue columns, but it's not necessarily obvious as to why some are red and why some are blue.
>
> **[0:20](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=20)** It might be really, really nice to have a label over top of all of those.
>
> **[0:23](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=23)** And so let's go on ahead and add that now.
>
> **[0:26](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=26)** So the way I'm going to do that is inside of my T head before I have all of this information about the headers for each one of those columns I'm just going to put in another row.
>
> **[0:37](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=37)** So start with a TR, end with a /TR, and then inside of that I am going to map out a row for those particular labels.
>
> **[0:48](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=48)** So in that particular case we're going to start with a td.
>
> **[0:54](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=54)** That is where the cell would go above item, but I don't actually need this cell.
>
> **[0:59](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=59)** However, in order to keep all of my data lined up in this table I will have to put in basically what amounts to an empty cell.
>
> **[1:07](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=67)** So just a td, slash td, and that will go right there on top of the item column and line it there very, very nicely.
>
> **[1:16](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=76)** And of course I'm going to do exactly the same thing again for the second column as well.
>
> **[1:22](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=82)** I don't actually want a label on top of product or service but I'm going to have an empty cell just to hold space there.
>
> **[1:30](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=90)** Now for the next two I need to have a table header because that's what this is.
>
> **[1:37](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=97)** And we're going to call it retail slash th.
>
> **[1:42](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=102)** Now as you can see right now the table header by itself only goes over the price each column and I really would like this to go across price each and retail price in case.
>
> **[1:56](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=116)** And the way that I can make that happen is through an attribute called colspan.
>
> **[2:01](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=121)** So right inside of this TH or inside of a TD if that happens to be what you're working with you can say colspan, all one [[Microsoft Word|word]], and then equals however many columns you'd like it to span across.
>
> **[2:14](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=134)** So in this case I want to go across two columns so I just say colspan of two.
>
> **[2:19](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=139)** And then finally here I'm going to add, let me make this column a little bit bigger here.
>
> **[2:28](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=148)** I'm also going to add a th with a colspan of three.
>
> **[2:34](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=154)** And then here I'll say case will be my words.
>
> **[2:37](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=157)** Slash th.
>
> **[2:39](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=159)** So table header, because these are headings describing the information that's underneath of them.
>
> **[2:45](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=165)** And then td's here for my first two cells.
>
> **[2:48](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=168)** Those are just placeholders.
>
> **[2:49](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=169)** They don't have any particular meaning.
>
> **[2:51](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=171)** And if you happen to be wondering it is absolutely possible to go across rows as well.
>
> **[2:57](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=177)** Here we could used colspan to go across columns, but you could in fact go across rows.
>
> **[3:02](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=182)** So let's just say for example this item number here, this very first item number, I'd like it to span across two rows.
>
> **[3:11](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=191)** So to set that up the way I'd go about doing that is first of all let's find 100050 here in our [[HTML]].
>
> **[3:20](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=200)** It's on line 28.
>
> **[3:21](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=201)** And I'm going to set this up to as a rowspan of let's say two.
>
> **[3:28](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=208)** So if that goes across two rows, the next thing I'm going to have to do is eliminate one of the cells.
>
> **[3:37](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=217)** And I'm just going to comment this out.
>
> **[3:41](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=221)** And so now you can see that my item number here is going across those two rows.
>
> **[3:46](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=226)** So that is another type of span that you might find useful in your table.
>
> **[3:52](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=232)** Here it makes absolutely no sense whatsoever, so in fact I'm just going to go on ahead and take out that rowspan, but that's how you might go about adding one if you wanted to put it in.
>
> **[4:02](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=242)** Both colspan and row span may span those over as many columns or as rows are available or as few as required.
>
> **[4:11](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=251)** For example, if you have seven columns to start with, however many spans you've got involved plus any remaining columns equal that same seven number as well.
>
> **[4:20](https://www.linkedin.com/learning/html-tables/use-colspan-and-rowspan?u=76281980&t=260)** You never want to have more cells or fewer cells than the overall table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[HTML]] (1)
> **CLI Commands:** make (2), find (2)
> **Analogies:** for example (2)
> **Env Vars:** html (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Mark up a table](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=5)** - [Instructor] Now that we've talked about all of the basic [[HTML]] tags that you need to code a table, how about you go ahead and give it a try now.
>
> **[0:13](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=13)** This will be your first challenge, and it will be to mark up a table, so make sure you've downloaded the exercise files for this particular challenge.
>
> **[0:23](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=23)** If you take a look in there, I'll show you in just a second, there is a spreadsheet and a text file.
>
> **[0:29](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=29)** The spreadsheet will show you what we're looking for in terms of the way this page should be laid out, and the text file is the information from those rows all spelled out really nicely so you don't have to do a ton of copy/paste.
>
> **[0:43](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=43)** Then you're going to mark up that text that I've given you to make a meaningful semantic table, so in other words, what is the meaning that that table is trying to convey?
>
> **[0:52](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=52)** Make sure you're using the right tags in order to convey that meaning.
>
> **[0:56](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=56)** Think about all those tags we've covered: the table, the row, the data, the headers, the table head, table body, table foot, caption, and the col group and the col tag itself.
>
> **[1:07](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=67)** So let's take a quick peek at those exercise files.
>
> **[1:11](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=71)** This is the table that I'd like you to duplicate, so it's called a Weekly Time Sheet, and you'll see here that there are several cells in this table.
>
> **[1:21](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=81)** Remember that every column has to have the same number of cells, so even though it looks like there's some cells missing there in those last few rows, they aren't actually missing.
>
> **[1:31](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=91)** Remember how we put in cells that had empty content?
>
> **[1:36](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=96)** That'll be something that you'll want to think about as you put this together.
>
> **[1:40](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=100)** And then finally, let's take a look at that text file.
>
> **[1:42](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=102)** This is the starting data for your table, and you'll see here that I have included this funny &nbsp; And if you're not familiar with that notation, that is a fancy way of saying a nonbreaking space.
>
> **[1:59](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=119)** In other words, this is just a space.
>
> **[2:01](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=121)** There is no information in this particular table cell, so for example, here on Monday, there were several columns we could have chosen from to put in our hours.
>
> **[2:11](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=131)** We only put the total of eight hours in one column, but there are three other columns to account for.
>
> **[2:17](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=137)** Just to indicate that here on this text file, I've given you those three additional columns as nonbreaking spaces.
>
> **[2:24](https://www.linkedin.com/learning/html-tables/challenge-mark-up-a-table?u=76281980&t=144)** All right, so go on ahead and give it a shot, marking up this whole table, and you may want to step through it the same way that I did, starting with the simple table tags, going on and layering on some of the more complicated tags later, and in the next video, I'll show you my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Definitions:** is a  (2), in other words (2)
> **CLI Commands:** make (3)
> **Exercise Files:** exercise files (2)
> **Env Vars:** html (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Mark up a table](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=1)** - [Instructor] So how did you do with that table challenge?
>
> **[0:08](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=8)** I'm going to go ahead and walk you through what I did and why here in this particular document.
>
> **[0:13](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=13)** So, first of all remember that we are not really working with any styling here at all and so, this is going to wind up being a really ugly looking table, kind of hard to read, and we will definitely address styling here at a future point, but it should probably look something like this, if you put in no styles whatsoever.
>
> **[0:33](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=33)** So, let me just walk through this code with you from the beginning here.
>
> **[0:36](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=36)** So, of course, this is the table.
>
> **[0:39](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=39)** We start with a table tag.
>
> **[0:40](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=40)** We're going to end with a table tag, all the way down here at the bottom.
>
> **[0:44](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=44)** Then we're going to divide this into pieces, so remember that the very first child, or the very last child of the table must be the caption and I've given it an ID here.
>
> **[0:55](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=55)** Now you didn't have to do that, the ID we're going to leverage in a couple of chapters when we start talking about responsive styling.
>
> **[1:03](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=63)** But this is our caption, it's the weekly time sheet.
>
> **[1:06](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=66)** Following that, we have our call group and you may or may not have included one of these.
>
> **[1:12](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=72)** I included one of these because I thought that the date of Monday and then the actual calendar date were kind of related information, so I decided to put a span over those two and give it a class of day to show the relationship between that data.
>
> **[1:27](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=87)** You didn't have to do that if you didn't want to.
>
> **[1:30](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=90)** The other thing you could've done would be to indicate that the various kind of hours are all sort of related, you could have put together a group for those as well.
>
> **[1:40](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=100)** Then going down here, we have our table head and inside of that, a single row.
>
> **[1:45](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=105)** We have a whole different number of headings here.
>
> **[1:49](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=109)** The very first one, I actually wanted it to go across the day of the week and the date, so that's just the day column here coming from the call group.
>
> **[1:59](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=119)** And we have columns for all the [[Representational State Transfer (REST)|rest]] of these.
>
> **[2:04](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=124)** Then as we go down into the body itself, the body is relatively short.
>
> **[2:09](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=129)** Here we just have the day of the week, Monday, the date, November first, and then eight hours under regular time.
>
> **[2:16](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=136)** We have a whole bunch of cells here, if you left in the non breaking space that's great, you might've taken it out, that's fine too.
>
> **[2:23](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=143)** And then of course, one final number here in the total.
>
> **[2:27](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=147)** And, so that'll go on for all of those.
>
> **[2:30](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=150)** And then, this last part here, the total hours, hourly rate, and the total pay, this is part of the tfoot, so this is the very bottom part of that table.
>
> **[2:40](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=160)** And we have a row inside of that row, we're going to have some of these things are going to be headings.
>
> **[2:46](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=166)** So, total hours is a heading, so it's going to have a th, it's a scope of row as opposed to a scope of column because this whole row is about the total hours.
>
> **[2:56](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=176)** Likewise, the hourly rate is a th with a scope of row as well and the first cell in all of these is empty, and so, you could've once again leave in that non breaking space or you might've taken it out, but you definitely needed td/td there.
>
> **[3:12](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=192)** It wouldn't be a heading because that of course is just an empty cell so don't make it a heading.
>
> **[3:20](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=200)** The foot would end after you've entered all that information for the total hours, hourly rate, and the total pay.
>
> **[3:26](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=206)** You can close the table foot and you can close the table.
>
> **[3:29](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=209)** So that's the way that I approached this particular [[HTML]], you might've had a few variations on that.
>
> **[3:35](https://www.linkedin.com/learning/html-tables/solution-mark-up-a-table?u=76281980&t=215)** But as always, there are no one single true right or wrong answer for this type of thing and it all depends on what it is that you're trying to convey in terms of the value of this table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[HTML]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** html (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Styling HTML Tables

[↑ Back to Table of Contents](#table-of-contents)

#### [Style table borders and basic styling](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=0)** - [Instructor] Finally, we have gotten to the chapter where we start to make it pretty.
>
> **[0:05](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=5)** And I know a lot of you have been waiting for this with bated breath.
>
> **[0:09](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=9)** So we are going to take the table that we have been working on in the previous chapter and now we are going to apply some styling in order to make it pretty.
>
> **[0:17](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=17)** All of the usual rules about CSS apply here so you can apply any of the existing CSS properties to table cells, table rows, table data, table headers and so forth as appropriate.
>
> **[0:29](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=29)** You'll find a use in interesting CSS selectors in this chapter, and I'll explain those selectors, but if you're interested in learning more about selectors, you should probably take a look at my CSS selectors course, which is available here in the library.
>
> **[0:47](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=47)** All right, so the very first thing that I'm going to do here is I'm going to get rid of my fabulous red, blue, and yellow colors that I put in in the last chapter to demonstrate some of the features here in this table.
>
> **[0:58](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=58)** We just don't need them, bye bye.
>
> **[1:08](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=68)** Then, the next thing to do, once you usually start working with a table like this, is it's always helpful to put borders on things so you can understand where the edges of some of your table cells and the table itself are located.
>
> **[1:23](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=83)** So, let's just go ahead and start by doing that.
>
> **[1:26](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=86)** So we'll start by just putting in a table selector and let's just put in a border that's one pixel solid red.
>
> **[1:35](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=95)** And that's going to put a big red line all the way around our table.
>
> **[1:39](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=99)** Then, let's go ahead and put in a TD, and we'll put in a border here of one pixel solid blue.
>
> **[1:48](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=108)** And that is going to outline some of the cells, but not all of them, why is that?
>
> **[1:54](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=114)** Well remember not all of our cells are TD's, some of the cells are TH's.
>
> **[1:59](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=119)** In order to make this work for all of the cells, we'll need to say TD, comma, TH, and now all of the cells in the table are selected.
>
> **[2:09](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=129)** So that's a lovely look, it's very patriotic, but some of you are probably bothered by the sort of 90's ish sort of look that we have goin' on here if you remember those beveled tables from back in the day.
>
> **[2:23](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=143)** And, that's because by this little bit of space that we have here in between these cells.
>
> **[2:28](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=148)** One of the things that people really want to know how to do is get rid of that space.
>
> **[2:32](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=152)** It's actually very simple, here on the table selector, all we need to add is border hyphen collapse, the property, and the value of collapse.
>
> **[2:45](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=165)** And that will get rid of all of that unsightly space.
>
> **[2:50](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=170)** It also looks like it got rid of our table border, but what's happening here is that table border of red comes first, the TD's and TH's come second, and so those, the borders that are there on those cells are covering up that outside border on the table.
>
> **[3:10](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=190)** This is a totally fine look if that's what you're going for, you might be looking for something a little bit prettier so I'm going to start modifying some of my colors here and some of my other properties.
>
> **[3:23](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=203)** So down here on this TD and TH, I'm going to start by putting on a little bit of padding.
>
> **[3:29](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=209)** And half a rim, which would translate to about eight pixels, that'll just go ahead and give me a little bit of padding on the four sides and immediately, it's just easier to read this thing.
>
> **[3:41](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=221)** The other thing that you might want to think about doing is do you need a border on all four sides of all of your cells?
>
> **[3:48](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=228)** And so, one of the nicer things to do here is to add a bottom border.
>
> **[3:54](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=234)** See how much easier that is to read?
>
> **[3:56](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=236)** You don't need all of those vertical lines.
>
> **[3:59](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=239)** And, let's change the color blue to something a little bit more in line with the brand of Wisdom Pet Medicine, which would be CCAE51, which is a lovely shade of tan.
>
> **[4:13](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=253)** And then for the table itself, we could change its color to 3F 2B 21, and that'll be a nice dark brown.
>
> **[4:29](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=269)** Now that looks great, although you might be bothered by the very last line here in the table.
>
> **[4:35](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=275)** Remember as I said before, because the TD TH style comes later in the style sheet, it's border appears to be on top of the border that's associated with the table.
>
> **[4:46](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=286)** So one of the thing you might want to do is get rid of that line there, but only for that very last row on the table.
>
> **[4:55](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=295)** How might you go about selecting that?
>
> **[4:58](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=298)** Well, fortunately we have some great selectors for that, so what I'm going to do is I'm going to say in the tfoot, in that row in the tfoot, and the last child, in other words, the very last row, and all of the cells that are in there, I want to border bottom of none.
>
> **[5:22](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=322)** See how nicely that just turns off that line on the bottom and now it looks a little bit more symmetrical.
>
> **[5:29](https://www.linkedin.com/learning/html-tables/style-table-borders-and-basic-styling?u=76281980&t=329)** So these lovely borders are a great way to start adding a little bit of interest to your table, you can make them all different colors, you don't have to put them on all four sides, and you can apply them to different elements, different boxes inside of your table to give it a very clean and polished look.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (1)
> **Env Vars:** css (4), ccae51 (1)
> **Cross-References:** previous chapter (1), in the last (1), later in (1)
> **Definitions:** is a  (2), in other words (1)
> **Speakers:** - [instructor] (1)

#### [Style the table caption](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=0)** - [Instructor] Next up, let's think about styling that table caption.
>
> **[0:05](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=5)** It looks a little weak at the moment.
>
> **[0:07](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=7)** It's not even bold and it's centered and the text is the same size as everything else.
>
> **[0:12](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=12)** Let's make this text bigger, let's make it left-aligned, let's change its color, and let's make it bold.
>
> **[0:18](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=18)** We'd like to make the caption stand out.
>
> **[0:20](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=20)** It is what this whole table is about and people are actually more likely to read that than they are to read all the information here in the table.
>
> **[0:27](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=27)** So I'm just going to scroll on down here in my style sheet.
>
> **[0:31](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=31)** You'll remember that this caption here comes from the caption tag here in our [[HTML]].
>
> **[0:37](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=37)** And we can just go on ahead and leverage that.
>
> **[0:39](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=39)** Caption.
>
> **[0:42](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=42)** And so here we can give it a font weight of bold.
>
> **[0:48](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=48)** And we can say text align of left.
>
> **[0:54](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=54)** Looking better already.
>
> **[0:55](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=55)** And let's make it bigger.
>
> **[0:57](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=57)** So a font size of two rem.
>
> **[1:00](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=60)** There we go.
>
> **[1:01](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=61)** That's lovely and big.
>
> **[1:03](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=63)** Maybe we'd like a little space between the words and the table itself so let's put in some padding.
>
> **[1:09](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=69)** And if we say one rem zero, remember that's going to put one rem of space on the top and the bottom of that caption, nothing on the left and the right.
>
> **[1:18](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=78)** And then finally let's give it a color.
>
> **[1:22](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=82)** And let's use that CCAE51, nice shade of tan again.
>
> **[1:27](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=87)** And there we go.
>
> **[1:28](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=88)** So other things you might want to try doing is you could add a different font for example or plenty of other types of tweaks you could make to the design here to make this all lovely and beautiful.
>
> **[1:40](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=100)** But this is pretty straightforward out of the box.
>
> **[1:43](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=103)** There is nothing exciting here in the CSS.
>
> **[1:45](https://www.linkedin.com/learning/html-tables/style-the-table-caption?u=76281980&t=105)** It's just very effective and very straightforward to make a caption to stand out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **CLI Commands:** make (8)
> **Env Vars:** html (1), ccae51 (1), css (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Style your table headers and footers](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=0)** - [Instructor] Now for the part that so many of you have been waiting for.
>
> **[0:03](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=3)** What about these table headers?
>
> **[0:05](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=5)** They're difficult to read, they're badly aligned, and they totally need some attention.
>
> **[0:11](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=11)** What can we do here?
>
> **[0:12](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=12)** Well, there's tons of stuff we can do and tons of stuff that we will do.
>
> **[0:16](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=16)** So our table looks a little weak at the moment.
>
> **[0:19](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=19)** Let's add some color to it and make some stuff pop a little bit, and it'll be really much better table-looking, better-looking table once we're done here.
>
> **[0:28](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=28)** So I'm going to start with my th, and just by saying for your th your text-align of left.
>
> **[0:37](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=37)** Doing this one thing will immediately improve the look of your table, because now everything is aligned at least on top of each other and you have some nice sharp alignment going on.
>
> **[0:47](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=47)** But obviously we can go a little further than that.
>
> **[0:51](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=51)** Let's also give it a background color, and we'll use that same tan again, ccae51.
>
> **[1:01](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=61)** There we go.
>
> **[1:03](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=63)** And let's also change the color of the text to white.
>
> **[1:10](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=70)** Just make it stand out a little bit better.
>
> **[1:12](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=72)** Then, as you can see here, we haven't quite gotten everything, so we need to make some additional tweaks to what's going on here, and the way that I'm going to do that is I'm going to add the following items.
>
> **[1:28](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=88)** What I'd like to have happen is for this in the, this row here where we have retail and cases, this row, but not the row after it, just this very first row here, I would like to make it a sort of a dark brown color with the white text, and I'd actually like the words Retail and Cases to be centered, even though I just turned off the centering for all of my headers.
>
> **[1:55](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=115)** So the best way to approach this is to take a look at your [[HTML]] and think about what sets off that first row here in the table head.
>
> **[2:05](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=125)** What sets off that row from everything else?
>
> **[2:08](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=128)** Well, it is a first child, right?
>
> **[2:10](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=130)** It's the first child of the table head.
>
> **[2:13](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=133)** So we can leverage that to set up our selector.
>
> **[2:17](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=137)** So I'm going to say the thead, t colon first-child, or tr colon first-child.
>
> **[2:24](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=144)** And if we just do that, we can say our background hyphen color is 3f2b21,
>
> **[2:36](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=156)** and that's going to fill in that first cell there where we have no content, but notice it actually hasn't touched Retail and Cases.
>
> **[2:44](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=164)** So in order to make this work, we're going to need to add to this a second selector here.
>
> **[2:50](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=170)** So we're going to say thead tr colon first hyphen child th, and that will get all of the row.
>
> **[3:00](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=180)** So there's our nice dark brown color for the background.
>
> **[3:04](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=184)** I'm going to change my text-align to center, and then I'm going to add a border on the left only, and I'm going to make it one pixel solid white, and that'll add a little bit of definition there so it's clearer what things have to do with retail and what things have to do with cases.
>
> **[3:26](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=206)** And maybe I'll make this font just slightly bigger, so a font-size of 1.3rem.
>
> **[3:33](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=213)** So those words will now be just slightly bigger.
>
> **[3:37](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=217)** So now that we've paid all this attention to the header, maybe we should also pay some attention to our footer.
>
> **[3:42](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=222)** So remember that we have in our HTML, if we scroll all the way down to the bottom here, we have a tfoot.
>
> **[3:49](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=229)** Inside of the tfoot, we have a single row.
>
> **[3:51](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=231)** We can definitely do some styling there, as well.
>
> **[3:54](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=234)** So I'm going to say tfoot tr, and I'll set my background-color to 3f2b21,
>
> **[4:10](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=250)** my color to white, and my font weight to bold.
>
> **[4:19](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=259)** And doesn't that just look better?
>
> **[4:21](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=261)** It kind of feels very grounded now.
>
> **[4:23](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=263)** We have, it's very, very easy to read.
>
> **[4:26](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=266)** The color definitely brands it a little bit better.
>
> **[4:29](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=269)** It pops out on the page, looks a little bit more appealing.
>
> **[4:32](https://www.linkedin.com/learning/html-tables/style-your-table-headers-and-footers?u=76281980&t=272)** So those are very straightforward styles that we added here, and just with a couple of colors, we've really made a big impact on the readability of this table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **CLI Commands:** make (7)
> **Env Vars:** html (2)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Stripe table rows with background colors](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=0)** - [Instructor] Our table looks pretty good as it is.
>
> **[0:03](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=3)** I probably would leave it just like this if this was the only four [[Microsoft Products|products]] that I had in this particular table.
>
> **[0:10](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=10)** But it's more than likely, and as you can tell, these are only A, B, and C products, it's more than likely that we're going to have at least dozens of rows, if not hundreds of rows.
>
> **[0:21](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=21)** One of the things that we can do in order to make this table a little easier to read is to add a little bit of table striping.
>
> **[0:27](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=27)** In other words, maybe every other row might be shaded in a certain color.
>
> **[0:32](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=32)** And to do that, it's actually very straightforward.
>
> **[0:35](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=35)** Once again, all we have to do is leverage another col selector.
>
> **[0:39](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=39)** In this case, I only want to effect the tbody portion of this table, so I'm going to say my tbody and then the rows within it, I'm going to use the selector called nth-child.
>
> **[0:53](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=53)** And nth-child will let you select something other than the very first child or the very last child.
>
> **[0:59](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=59)** We can now select whichever children we want.
>
> **[1:02](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=62)** In this case, I'm going to put in the keyword even, and obviously you could use the keyword odd as well.
>
> **[1:09](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=69)** In other words, every other row we'd like to give it a background-color and let's just set that to a light gray at the moment, just to show you that that works.
>
> **[1:20](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=80)** You could change that even to odd and highlight the different rows if you want, but this is a very straightforward way of adding a little bit striping to the table.
>
> **[1:32](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=92)** Now, that color probably not the best.
>
> **[1:35](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=95)** What we'd really like to do is take that tan that we've been using and maybe add it to those particular rows.
>
> **[1:41](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=101)** Unfortunately, if we add it directly with its hex color, then those rows will wind up being the same color as our table header, probably not appropriate.
>
> **[1:50](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=110)** One of the things that we could do, is lighten up that color a little bit.
>
> **[1:54](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=114)** One way to do that is to give it a bit of transparency.
>
> **[1:58](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=118)** We need to take our hex value and change it into a value called RGBA, which is red, green, blue, and alpha, alpha has to do with transparency.
>
> **[2:08](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=128)** DuckDuckGo, is a search engine that is available and you just get to it at [duckduckgo.com](https://duckduckgo.com).
>
> **[2:17](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=137)** If you put in a hex value into DuckDuckGo, in this case #ccae51, and then do a search on it, DuckDuckGo will actually give you our hex color in a bunch of different formats that you could put immediately into your CSS.
>
> **[2:34](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=154)** In this case, the one we're going to look for is RGBA, right up here on the top.
>
> **[2:39](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=159)** And I'm going to go ahead and copy that.
>
> **[2:41](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=161)** For those of you who weren't aware that this was a thing, if you go to the picker, but it'll actually give you a color picker as well right here, so you can pick color schemes.
>
> **[2:51](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=171)** Notice it gives you analogous, it gives you a triad, it gives you a tetrad, based on that color, which is kind of cool.
>
> **[2:58](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=178)** I'm going to go back here to my table cells.
>
> **[3:01](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=181)** I'm going to change my hex value here to RGBA.
>
> **[3:05](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=185)** This is usually written in lowercase, rgba.
>
> **[3:09](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=189)** And then these are the values here, 204, 174, 81, for R, G, and B, A is the alpha.
>
> **[3:16](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=196)** Right now this is fully opaque at one, so if we put it at zero, then that would be completely transparent, so anything between zero and one will give you a level of transparency.
>
> **[3:30](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=210)** Here I'm going to try 0.2, and that looks pretty good.
>
> **[3:35](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=215)** I mean if you want to play around with it, you can try out all different kinds of numbers and see what you like best.
>
> **[3:42](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=222)** Personally, I like 0.2, but you're welcome to change that to whatever you want.
>
> **[3:47](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=227)** This is a very simple trick that you can use.
>
> **[3:50](https://www.linkedin.com/learning/html-tables/stripe-table-rows-with-background-colors?u=76281980&t=230)** Take one of the colors from your color palette, add a little bit of transparency to it, via the alpha value and you can generate conversion from your hex codes to an RGBA value, which will support that transparency, using a color picker like the one available at DuckDuckGo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2)
> **Env Vars:** rgba (4), css (1)
> **Definitions:** is a  (3), in other words (2)
> **Versions:** 0.2 (2)
> **CLI Commands:** make (1)
> **URLs:** [duckduckgo.com](https://duckduckgo.com) (1)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)

#### [Challenge: Style HTML tables](https://www.linkedin.com/learning/html-tables/challenge-style-html-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-tables/challenge-style-html-tables?u=76281980&t=0)** (bright music plays)
>
> **[0:05](https://www.linkedin.com/learning/html-tables/challenge-style-html-tables?u=76281980&t=5)** - (Instructor) Okay, so now that you've seen all of the different ways you might think about styling a table, it's time for you to go ahead and give it a try in this next challenge.
>
> **[0:14](https://www.linkedin.com/learning/html-tables/challenge-style-html-tables?u=76281980&t=14)** So, I've given you a starting [[CodePen]] that you can take a look at.
>
> **[0:19](https://www.linkedin.com/learning/html-tables/challenge-style-html-tables?u=76281980&t=19)** This is the same starting table, the mark-up that you created in the first challenge in this course.
>
> **[0:26](https://www.linkedin.com/learning/html-tables/challenge-style-html-tables?u=76281980&t=26)** I've given you it here.
>
> **[0:28](https://www.linkedin.com/learning/html-tables/challenge-style-html-tables?u=76281980&t=28)** You can keep working with the same [[HTML]] that you created in that challenge if you wish, and then using the principles that I've presented over the last few videos, along with your own tricks that you may bring to this as well, make that table look prettier than it does now.
>
> **[0:44](https://www.linkedin.com/learning/html-tables/challenge-style-html-tables?u=76281980&t=44)** Trust me, the bar is really low.
>
> **[0:46](https://www.linkedin.com/learning/html-tables/challenge-style-html-tables?u=76281980&t=46)** There's not a lot that you can do to make it look worse than it does now.
>
> **[0:50](https://www.linkedin.com/learning/html-tables/challenge-style-html-tables?u=76281980&t=50)** Test out some of the selectors that I showed you, rather than adding a zillion CSS classes.
>
> **[0:56](https://www.linkedin.com/learning/html-tables/challenge-style-html-tables?u=76281980&t=56)** So make use of first child and last child, make use of some of the element selectors rather than just creating a whole bunch of classes and stuffing your table with all of those classes.
>
> **[1:07](https://www.linkedin.com/learning/html-tables/challenge-style-html-tables?u=76281980&t=67)** Your starting Codepen is available here, and as you see, there isn't a whole lot that you can do to mess this up, so go on ahead and dig in.
>
> **[1:15](https://www.linkedin.com/learning/html-tables/challenge-style-html-tables?u=76281980&t=75)** See what you can do to make this table look a little bit prettier, and I'll show you my solution in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CodePen]] (2), [[HTML]] (1)
> **CLI Commands:** make (5)
> **Env Vars:** css (1)
> **Cross-References:** in the next (1)
> **Non-Speech:** (bright music plays) (1)

#### [Solution: Style HTML tables](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=0)** - [Woman] All right, so how did you do with that table challenge?
>
> **[0:09](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=9)** You might have run into some interesting styling dilemmas.
>
> **[0:13](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=13)** And so I want to walk through what I did in my particular solutions.
>
> **[0:17](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=17)** So I stuck with the same colors that I had been using in my previous example, but I styled things up a little bit differently here.
>
> **[0:26](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=26)** So let me just walk you through my CSS and the [[HTML]] I didn't change at all.
>
> **[0:32](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=32)** So, here of course one of the first things I do pretty much in anything that I've ever done is change the font family to a sans-serif.
>
> **[0:40](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=40)** That immediately makes everything look better in my opinion.
>
> **[0:43](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=43)** I put on the border collapse on this table, so that we don't get that unsightly little gap in between all of our cells.
>
> **[0:50](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=50)** And then of course took my ths' and aligned them all left and gave them that tan background color with white text.
>
> **[0:59](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=59)** I reformatted my caption, this time I didn't make it bold, just try to do something a little bit different.
>
> **[1:06](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=66)** And then I styled up my tds' and my ths' to have a little bit of padding and a black border on them.
>
> **[1:14](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=74)** Then I got a little bit crazier, so here in the body I strike the odd rows in the body and the even rows in the foot.
>
> **[1:25](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=85)** So that's how I got this striping across all of these sections.
>
> **[1:29](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=89)** Remember; Monday, Tuesday, Wednesday... That's the body.
>
> **[1:32](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=92)** Total hours, I really write total page, that's the foot.
>
> **[1:35](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=95)** So, by making one odd, the other one even and using that transparent color that we've developed in the previous video.
>
> **[1:46](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=106)** Now it looks very evenly stripped across all those numbers.
>
> **[1:50](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=110)** The other issue that we have here, particularly in the foot where these cells here that were at the beginning.
>
> **[1:56](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=116)** And you might be wondering, "How do I quote erase them?"
>
> **[2:00](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=120)** Well, this is the way I did it, in the tfoot, in the row the td, the first-child, 'cause this is the first cell in all of that HTML.
>
> **[2:10](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=130)** Remember if we scroll on down here and take a look at our HTML, our very first cell in all of those rows in the foot is empty.
>
> **[2:18](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=138)** Right?
>
> **[2:19](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=139)** So what I did here, as I simply said 'turn off the border', so for those cells only the border will be none and the background color will be white.
>
> **[2:28](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=148)** And that way it looks like those cells have simply been erased.
>
> **[2:32](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=152)** And then finally I put in a nice thick border here between the main body and all of the totals that go down here on the bottom.
>
> **[2:40](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=160)** Just by simply doing a border-top on the tfoot, I could also have done a border bottom on the tbody and that would've worked as well.
>
> **[2:47](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=167)** So here is where my styling ideas for this table, as you know styling there are no right or wrong answers.
>
> **[2:53](https://www.linkedin.com/learning/html-tables/solution-style-html-tables?u=76281980&t=173)** Maybe there's some things here for my styling that you can take and apply to your particular example.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3)
> **Env Vars:** html (3), css (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [woman] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Making Tables Responsive

[↑ Back to Table of Contents](#table-of-contents)

#### [Responsive tables with side scrolling](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=1)** - [Instructor] Now that we have this absolutely fabulous, beautiful table, the next problem that you might've noticed is that it's not very mobile friendly.
>
> **[0:11](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=11)** Now if I start to shrink my screen down here, it adjusts a little bit, but at some point, it starts to get cut off here.
>
> **[0:19](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=19)** And, it's likely that's somewhere in the time you've had your mobile phone, you've wound up looking at a table like this and you have to side scroll and up and down scroll to try to read the table and it's incredibly annoying, there's got to be a better way, right?
>
> **[0:35](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=35)** Well, fortunately there is.
>
> **[0:37](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=37)** Adrian Roselli wrote a fabulous article here about how to create a table that is both responsive and accessible, and I have taken my approach here from his description that's here in his article, so go on ahead and take a look at this.
>
> **[0:57](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=57)** If you have some additional questions, this is great reading, but Adrian Roselli is very well known for his work and accessibility.
>
> **[1:05](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=65)** All right, so one of the first things that we can do to make a table a little bit more easy to use on a phone is to allow it to scroll side to side, particularly horizontally, on a mobile device.
>
> **[1:20](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=80)** And so, let's go on ahead and start adding some additional markup and some styling that will make this possible.
>
> **[1:29](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=89)** So, the first thing that I'm going to do is around the table tag itself.
>
> **[1:34](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=94)** I'm going to add a div, and I'm going to give it a class of table scroll.
>
> **[1:42](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=102)** Why a div?
>
> **[1:43](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=103)** Because there's no semantic meaning to this whatsoever, it is truly meant to be just a big box right around our table and the div is what will contain our scroll bar.
>
> **[1:58](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=118)** So it's just a div, with a class of table scroll, and then, here in our CSS, we'll go on ahead and add to it our table scroll class, and in here, we'll say overflow of auto.
>
> **[2:17](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=137)** So this is going to give us now a scroll bar on that table directly when we need it.
>
> **[2:22](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=142)** So as I shrink this page down, you'll see that now, at the very bottom of the table, we do in fact have the ability to side scroll.
>
> **[2:30](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=150)** So that's pretty fabulous, it makes it a little easier for people who are reading it on phones, but this itself, is not accessible enough.
>
> **[2:40](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=160)** What's going to happen here is that as the screen reader starts to read this page, the screen reader is going to get caught in this div up here on the top and it will never actually get to read the table.
>
> **[2:52](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=172)** So, it only takes 10 seconds to fix this, so let's just go on ahead and do it.
>
> **[2:56](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=176)** What I'm going to do here is to my class, the div with the class of table scroll, I'm going to add a couple of other attributes here.
>
> **[3:05](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=185)** One is a role of region, and I'm going to add here an aria hyphen labeled by, all one [[Microsoft Word|word]], and I'm going to give it a name of pricelist because hey, that's what it is.
>
> **[3:23](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=203)** And then finally, I'm going to give this a tab index of zero.
>
> **[3:33](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=213)** So, what this is going to do is it's going to make this div a little bit more invisible to the screen readers, and ideally what's going to happen is when the screen reader hits this div, we now want to redirect its attention to another element, and we're going to connect those two things via this attribute here.
>
> **[3:52](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=232)** So the aria labeledby pricelist, we're going to attach that to the caption via the ID of pricelist.
>
> **[4:03](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=243)** So now we've computationally connected that div to the caption so the screen renew will know to go right from that div and ignore it, go right into the caption and keep on going.
>
> **[4:15](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=255)** The tab index that you see there means that the user could use the keyboard to side scroll in that area if they want to, that that is still an option available to some people who might be surfing without a mouse.
>
> **[4:27](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=267)** So, this is one approach to making your table quote, accessible to people who are using smaller devices.
>
> **[4:36](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=276)** And depending on the size of your table, this may be literally all you need, you just need to stick a scroll bar on it and it might be fine.
>
> **[4:42](https://www.linkedin.com/learning/html-tables/responsive-tables-with-side-scrolling?u=76281980&t=282)** But chances are, your table is a little bit bigger and a little bit more complicated and there are so many better approaches to this and I'm going to continue looking at Adrian Roselli's technique and expand on that a little bit more in the next few videos to show ya how we can make this even better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2), means that (1)
> **Env Vars:** css (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Reformat a table for responsive layout](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=0)** - [Instructor] While a side scroll bar is okay for some tables, there are still a ton of drawbacks in terms of reading a table on a mobile device, especially for a larger table.
>
> **[0:12](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=12)** Let's instead use CSS to make this table appear more like a report than a table when we get to smaller screens.
>
> **[0:21](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=21)** Normally, when building this kind of code, we do what's called mobile first.
>
> **[0:25](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=25)** That means that the mobile version of the code is the default outside of the media queries, while the larger screen CSS is hidden inside a media query.
>
> **[0:36](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=36)** However, when you're doing this type of work with a table, it actually works better to use desktop first.
>
> **[0:44](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=44)** In other words, the desktop styles are outside of the media query and the mobile version of this display will be inside the media query.
>
> **[0:53](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=53)** The reason why is you'll wind up writing less code in the end, and it will be more straightforward to understand what's going on.
>
> **[1:01](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=61)** You can, in fact, build your table this way using a desktop first approach, even if the [[Representational State Transfer (REST)|rest]] of your site is built with mobile first.
>
> **[1:10](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=70)** So I'm going to recommend that you go on ahead and do that.
>
> **[1:13](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=73)** So what I'm going to do, just to sort of fake things here for the moment, 'cause I'm really only interested in the mobile version, is I'm going to start my code, and I'm going to put it up here at the top of the CSS, so it's easier for you to see.
>
> **[1:27](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=87)** I'm going to start a media query, and I'm going to say, to start with, our max width is 1600 pixels.
>
> **[1:37](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=97)** And that is just so I can be sure that we can actually see what's going on here, and just to test that, let's just do a quick test.
>
> **[1:46](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=106)** If we say the body has a background color of red, that'll tell me if I've got a media query that's adequate in order for us to see the changes we're about to make.
>
> **[2:00](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=120)** That is not a real style, shockingly.
>
> **[2:03](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=123)** Okay, so what we're going to do here, then, you may know that the information that's here inside of your table has a certain value for its display property.
>
> **[2:14](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=134)** You might know display block, display inline, display flex, display grid.
>
> **[2:19](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=139)** Well, a lot of these pieces that are inside of a table are either a display type of table, various other types of table-related types of displays.
>
> **[2:30](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=150)** And so what we're going to change this to instead is block.
>
> **[2:34](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=154)** And as you might expect, when we change things to block, they'll stack on top of each-other, just like they do everywhere else in CSS.
>
> **[2:41](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=161)** So I'm going to say, for my table, my tr, and my td, what I'd like to do is to display block.
>
> **[2:51](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=171)** And as soon as I do that, everything is going to start stacking on top of each-other, just like this, so you can just sort of read this kind of like a report.
>
> **[3:01](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=181)** The headers up here on the top, I don't actually want to display at all, so I'm going to add to this a style of th and thead, both of them, for that matter, display of none.
>
> **[3:17](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=197)** And that'll just go on ahead and get rid of those.
>
> **[3:19](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=199)** Okay, so there we go, we're done, right?
>
> **[3:22](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=202)** There's the mobile version of our table.
>
> **[3:23](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=203)** Well, this is great, we have all of our values represented here, but we have no idea what any of these random values are.
>
> **[3:30](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=210)** We're missing that header information.
>
> **[3:32](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=212)** And so a way that we can replicate that is simply by doing the following.
>
> **[3:38](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=218)** So, once again, I'm going to make use of my nth-child selector.
>
> **[3:42](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=222)** I'm going to say here, td:nth-child, and specifically, the very first child, and in the information before that first child, then I'm going to go ahead and write in some content.
>
> **[4:00](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=240)** Content would be quote, item number colon, just like that.
>
> **[4:07](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=247)** So as I put that in, you can see here, stick in a space as well, you see here that in my table, it announces item number, and following that, item number.
>
> **[4:21](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=261)** I'm going to just go ahead and show you the next one, just so you can see what this work looks like.
>
> **[4:29](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=269)** So now the next one will be the nth-child two, right?
>
> **[4:34](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=274)** The second item.
>
> **[4:36](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=276)** And I don't want it to say item number anymore, now I want it to say product or service.
>
> **[4:43](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=283)** So you see how I just went ahead in assigning these various headers here all the way down the page.
>
> **[4:50](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=290)** And I'm just going to go ahead and put those in now, and I... You are welcome to go on ahead and keep this going.
>
> **[4:59](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=299)** We're going to take the headers that we established in the table earlier and we're going to include these as nth-child assigned to a certain number all the rest of the way down the table here.
>
> **[5:19](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=319)** All right!
>
> **[5:20](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=320)** So I've gone ahead and I've entered all of my headings here as this nth-child assigned to a specific number, and as you can see here, over in this fake mobile version of my site, I've got that text, it appears just before the text that actually appears in the cell, all the way down the page here.
>
> **[5:40](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=340)** So this is more like a report now, as opposed to it being a table.
>
> **[5:45](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=345)** Now, the next thing that I hear a lot as I talk about this technique is this bit of code that we just put in.
>
> **[5:52](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=352)** All of these nth-childs with these numbers on it.
>
> **[5:55](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=355)** Yes, those of you who are thinking, this is not very sustainable in terms of putting that information here into CSS, you are absolutely right.
>
> **[6:05](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=365)** This is something that you could write in with [[JavaScript]], this is something you could write in with some kind of server-side technique, maybe something with [[PHP]], or with [[Python (Programming Language)|Python]], or whatever it is you want to use.
>
> **[6:17](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=377)** Those languages and techniques could simply write in this information as well.
>
> **[6:21](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=381)** For the purposes of this video, I've done it here with CSS, because that is what we're focused on here, rather than trying to introduce a programming language on top of it in order to achieve this effect.
>
> **[6:32](https://www.linkedin.com/learning/html-tables/reformat-a-table-for-responsive-layout?u=76281980&t=392)** So you are absolutely right, doing this through CSS is probably not the best way to do it, but it is a possible way to do it, and there are definitely better ways to handle this type of thing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[JavaScript]] (1), [[PHP]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** css (7), php (1)
> **CLI Commands:** make (3), php (1), python (1)
> **Analogies:** just like (3), kind of like (1)
> **Definitions:** means that (1), in other words (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Final styling tweaks](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=1)** - [Instructor] Now that we have the big styling pieces in place, in order to reformat this table into this list type of approach mobile dimensions, now the very last step is to put in some final tweaks to your... polish this up, make it look really beautiful and to make it work at a media query dimension that is actually reasonable and probably something that we'd want to do, rather than this ridiculous 1600 pixel dimension.
>
> **[0:27](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=27)** So let's go on ahead and go through these.
>
> **[0:29](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=29)** I'm going to go ahead and scroll on down to my code here and I'm just going to keep adding inside of this media query.
>
> **[0:37](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=37)** So I'm going to add to this, the table style itself, and I'm going to say border of none.
>
> **[0:46](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=46)** We had that unsightly border going all the way around the page, that didn't look very good.
>
> **[0:50](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=50)** So we'll just get rid of it.
>
> **[0:52](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=52)** And then I'll go ahead and add on to this a tbody, tfoot.
>
> **[0:58](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=58)** And here what I'd like to have is a border around each of these items and that is going to be one pixel solid and then r3f2b21 color.
>
> **[1:15](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=75)** So by putting the border on the tbody and the tfoot, now we'll actually have this dark border going all the way around the table itself.
>
> **[1:24](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=84)** Just like that, looks great.
>
> **[1:27](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=87)** And then the last part of this is, if you scroll all the way down here to the bottom, where we get to our item number, this is doing what we told it to do.
>
> **[1:37](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=97)** Which is to put item number here right in the tfoot.
>
> **[1:41](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=101)** Even though there's normally nothing inside of this cell.
>
> **[1:45](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=105)** And also, we also have Product or Service:Totals of these columns.
>
> **[1:50](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=110)** Probably not what we want either.
>
> **[1:52](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=112)** So I'm going to turn off the content here for those two particular items.
>
> **[1:59](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=119)** Be sure that the style goes after all of these td:nth-child styles that you set up earlier.
>
> **[2:06](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=126)** So these have to go further down on the page, they're going to override what you did earlier.
>
> **[2:11](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=131)** And so here we're going to say, tfoot td:nth-child the very first one, and then ::before, tfoot td:inth-child
>
> **[2:28](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=148)** and this will be number 2, ::before and we'll just say content is going to be just "" just like that, with nothing inside of it.
>
> **[2:42](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=162)** And that will erase that items, or item number thing we don't want in the tfoot, it'll also erase the product or service that comes before Totals of these columns.
>
> **[2:52](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=172)** So there we go, much, much better, much cleaner looking.
>
> **[2:57](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=177)** And then the very last thing to do once you've got that in place, is to change our media query.
>
> **[3:02](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=182)** Right now we have a max width of 1600 pixels, maybe we really want something more like 600 pixels, so by changing it to that there's our table, it still looks great.
>
> **[3:12](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=192)** And then as we start to shrink it up, it's still relatively readable, okay?
>
> **[3:18](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=198)** We do have a scroll bar that jumps in here just temporarily for a little bit until we actually hit our break point where things start to stack on top of each other.
>
> **[3:29](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=209)** Just like with any media query, you can, 600 pixels is nothing magic, it just seems to work well with the content that we have in this table.
>
> **[3:38](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=218)** Your media query for your table may wind up being a slightly different number.
>
> **[3:42](https://www.linkedin.com/learning/html-tables/final-styling-tweaks?u=76281980&t=222)** You can certainly play around with your table display and pick a good spot to make that change.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Analogies:** just like (3)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Make tables responsive](https://www.linkedin.com/learning/html-tables/challenge-make-tables-responsive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-tables/challenge-make-tables-responsive?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/html-tables/challenge-make-tables-responsive?u=76281980&t=5)** - [Instructor] For your last challenge in this course, I'd like you to take the table that we've worked with over the last two challenges, and now we're going to take that same table and make it responsive.
>
> **[0:15](https://www.linkedin.com/learning/html-tables/challenge-make-tables-responsive?u=76281980&t=15)** So you'll start with a [[CodePen]] that I have given you that has all of my [[HTML]] and CSS as I configured it, if you'd like to start there, or if you want to keep working on the CodePen you've already been working on where you wrote your own HTML and your own CSS, you're welcome to do that, as well.
>
> **[0:34](https://www.linkedin.com/learning/html-tables/challenge-make-tables-responsive?u=76281980&t=34)** Then using the principles that I presented over the last few videos, along with whatever additional tricks you may have, make that table responsive an appropriate breakpoint.
>
> **[0:46](https://www.linkedin.com/learning/html-tables/challenge-make-tables-responsive?u=76281980&t=46)** Make sure you incorporate a scroll bar as backup just in case, it never hurts.
>
> **[0:52](https://www.linkedin.com/learning/html-tables/challenge-make-tables-responsive?u=76281980&t=52)** And let's just take a quick peek at that CodePen, so remember this is that weekly time sheet that we had talked about earlier where we have the fully marked up HTML, the fully styled CSS, but there are no media queries that are present for this.
>
> **[1:09](https://www.linkedin.com/learning/html-tables/challenge-make-tables-responsive?u=76281980&t=69)** So go on ahead and give this one a shot.
>
> **[1:12](https://www.linkedin.com/learning/html-tables/challenge-make-tables-responsive?u=76281980&t=72)** See if you can make this table responsive, and I will show you my solution in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CodePen]] (3), [[HTML]] (3)
> **Env Vars:** html (3), css (3)
> **CLI Commands:** make (4)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Make tables responsive](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=0)** - [Instructor] So how'd you do?
>
> **[0:07](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=7)** Hopefully you were able to make a responsive weekly time sheet, I'll just show you how mine looks, so that's the table as we had it styled before.
>
> **[0:17](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=17)** As I start to shrink the screen down, eventually we do get into the format here where we've got everything stacked on top of each other, and notice that I've changed some of the text down here on the bottom to make this work a little bit better.
>
> **[0:33](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=33)** I'll show you all of my secrets here in just a moment.
>
> **[0:36](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=36)** So that's how I styled my particular version of this time sheet.
>
> **[0:42](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=42)** So let's go and through my [[HTML]], my CSS, here is that scrollbar that I attached to the top of the page, and I called this the timesheet, so the caption has the ID of timesheet, that's the only change that I've made to the HTML, and the CSS, everything outside the media query is the same as it was before.
>
> **[1:02](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=62)** Here inside the media query I've gone ahead and, from this comment of responsive table, I guess this table scroll is actually outside the media query, but that and the following media query here, this is where the special sauce comes in.
>
> **[1:19](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=79)** So we've got, our table has the border turned off, we've got this display of block, not displaying the ths and the thead as we wanted before, here's all of the text that we wanted to display in place in front of the various numbers, okay so that's all there, but then we had a couple of exceptions to the rule down here in the tfoot.
>
> **[1:43](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=103)** So down here in the tfoot, if we look at the very first row and the very first child before that, so what we want to have is total hours in the following categories.
>
> **[1:56](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=116)** So what I've done is added some extra text there, and then likewise, in the second row here, there's going to be rates of pay in the following categories, and then for the last cell here where a total of an hourly rate makes no sense, we've actually just turned off the label for that particular cell there.
>
> **[2:16](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=136)** And then in the last row, the tr:last-child, the very first child before that, I've put in following text, total owed in the following categories.
>
> **[2:28](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=148)** So basically for these three cells that are here but have no content, I basically sort of put a little bit of content in these to make this a little bit easier to read as we scrunch this up and look at it in mobile format.
>
> **[2:42](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=162)** So we have our big thick border here that sort of designates the beginning of that tfoot, then I have my Total Hours in the following categories, so there we go, total Regular Hours, Overtime Hours, Sick, Vacation, and Total overall.
>
> **[2:58](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=178)** I have my rates of pay in the following categories and the total money owed in the following categories.
>
> **[3:04](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=184)** That to me made this table more readable, more understandable by adding that additional little bit of text.
>
> **[3:11](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=191)** Once again, you could do something with [[JavaScript]], or [[PHP]], or Pearl, or [[Python (Programming Language)|Python]], or any one of a number of different programming languages to throw that stuff in place.
>
> **[3:22](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=202)** I've done it here with CSS to keep simple HTML and CSS only, probably not the best way to implement this out in the real world however.
>
> **[3:32](https://www.linkedin.com/learning/html-tables/solution-make-tables-responsive?u=76281980&t=212)** Hopefully you came up with something that works really well for your table and it's styling as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[JavaScript]] (1), [[PHP]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** css (4), html (3), php (1)
> **CLI Commands:** make (3), php (1), python (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/html-tables/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-tables/next-steps?u=76281980&t=0)** - Hey everybody, it's Jen Kramer.
>
> **[0:02](https://www.linkedin.com/learning/html-tables/next-steps?u=76281980&t=2)** Thank you so much for watching [[HTML]] Tables.
>
> **[0:05](https://www.linkedin.com/learning/html-tables/next-steps?u=76281980&t=5)** I hope you took away some valuable learning, especially in making those responsive tables and doing great things with layouts on mobile devices.
>
> **[0:14](https://www.linkedin.com/learning/html-tables/next-steps?u=76281980&t=14)** If you're curious about learning more from me, I have two other courses you might want to take a look at.
>
> **[0:19](https://www.linkedin.com/learning/html-tables/next-steps?u=76281980&t=19)** The first one is called [[Crafting Meaningful HTML]], and that course will go through more Symantec use of HTML with a whole bunch of other tags beyond tables, and that will help you make web pages that are accessible and very meaningful to all types of users and readers.
>
> **[0:39](https://www.linkedin.com/learning/html-tables/next-steps?u=76281980&t=39)** The other course I'm going to recommend is my course, CSS Selectors, this course focuses on how to select things on a webpage without having to put in a bajillion different classes everywhere you look on your webpage.
>
> **[0:53](https://www.linkedin.com/learning/html-tables/next-steps?u=76281980&t=53)** So all that stuff I talked about in this course like first child, lance child and nth child and some of the descendant selectors that I used, all of that is covered in the selectors course, so I'll hope you'll check that out as well.
>
> **[1:06](https://www.linkedin.com/learning/html-tables/next-steps?u=76281980&t=66)** Thanks again for watching.
>
> **[1:07](https://www.linkedin.com/learning/html-tables/next-steps?u=76281980&t=67)** Hope to see you in another course sometime soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3)
> **Env Vars:** html (3), css (1)
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Speakers:** - hey (1)


## Instructor

- [[Jen Kramer]]

## Resources

- Exercise files available

## Skills Covered

- HTML

## Path Context

### In [[Advance Your Skills in HTML]]
← [[HTML- Images and Figures]] | **5 of 11** | [[HTML- Metadata in the Head]] →

## Appears In

- [[Advance Your Skills in HTML]]

## Related Courses

_Courses sharing skills:_

- [[HTML- Structured Semantic Data]] — HTML
- [[Building Great Forms with HTML and CSS]] — HTML
- [[HTML & CSS- Creating Forms]] — HTML
- [[HTML- Metadata in the Head]] — HTML
- [[HTML- Images and Figures]] — HTML

---

[↑ Back to top](#)