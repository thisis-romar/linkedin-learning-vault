---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: css-layouts-from-float-to-flexbox-and-grid
url: "https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid"
duration_minutes: 102
duration: 1h 42m
level: Intermediate
updated: 10/21/2025
learners: 5568
skills:
  - CSS Grid Layout
  - Cascading Style Sheets (CSS)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHliL819SNhiA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668687340?e=2147483647&amp;v=beta&amp;t=b48vZ4onuKXTSIizDzljCLkawojHNuI4ucBSaNTDaCY"
linkedin_topic: Web Development
learning_paths:
  - '[[Learn CSS]]'
prev_courses:
  - '[[CSS- Variables and Fluid Layouts]]'
next_courses:
  - '[[CSS- Print Style Sheets]]'
path_nav: '[{"path":"Learn CSS","position":11,"total":12,"prev":"CSS- Variables and Fluid Layouts","next":"CSS- Print Style Sheets"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/css-grid-layout
  - skill/cascading-style-sheets-css
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/CSS%20Layouts-%20From%20Float%20to%20Flexbox%20and%20Grid.md)

![CSS Layouts: From Float to Flexbox and Grid](https://media.licdn.com/dms/image/v2/C4E0DAQHliL819SNhiA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668687340?e=2147483647&amp;v=beta&amp;t=b48vZ4onuKXTSIizDzljCLkawojHNuI4ucBSaNTDaCY)

# CSS Layouts: From Float to Flexbox and Grid

> For decades, CSS developers fiddled with floats to create flexible layouts that worked across browsers. But their brilliant hack had a lot of downsides. The latest generation of CSS specs offers a better and vastly more intuitive set of tools, but moving from floats to Grid, Flexbox, or both means adjusting how you think. In this course, Christina Truong guides you though this process, from initia

> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid) | 1h 42m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. An Overview of Page Layouts]]** (3 videos)
- **[[#2. Float, Display, and Position]]** (10 videos)
- **[[#3. Flexbox]]** (8 videos)
- **[[#4. Grid]]** (7 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/welcome-26990147?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/welcome-26990147?u=76281980&t=0)** - Creating page layouts is one of the cornerstones of writing CSS, and it's gone through a lot of changes since the early days of HTML tables.
>
> **[0:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/welcome-26990147?u=76281980&t=8)** From floating and positioning elements to creating rows and columns, there are many different options.
>
> **[0:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/welcome-26990147?u=76281980&t=14)** Hi, I'm Christina Truong, and I've been building websites for almost 20 years.
>
> **[0:18](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/welcome-26990147?u=76281980&t=18)** Together, we'll explore working with floats and all its quirks, how to use the position property for laying out smaller page components, and how to transition to modern CSS with Grid and Flexbox.
>
> **[0:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/welcome-26990147?u=76281980&t=30)** By the end, you'll understand the difference between the various techniques, and how to support new and legacy projects.

> [!info]- Semantic Content
>
> **Env Vars:** css (2), html (1)
> **Speakers:** - creating (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/what-you-should-know?u=76281980&t=0)** - [Instruktor] Da biste izvukli maksimum iz ovog kursa, ne morate biti stručnjak za HTML ili CSS.
>
> **[0:05](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/what-you-should-know?u=76281980&t=5)** Fokusiraću se na različite tehnike CSS rasporeda iz temelja, tako da će biti nekih instrukcija o osnovnim temama.
>
> **[0:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/what-you-should-know?u=76281980&t=13)** Ali preporučuje se osnovno znanje o HTML i CSS sintaksi i nekim osnovnim konceptima.
>
> **[0:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/what-you-should-know?u=76281980&t=20)** Trebalo bi da budete u stanju da imate opšte razumevanje ovog primera koda.
>
> **[0:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/what-you-should-know?u=76281980&t=24)** Ako u bilo kom trenutku imate bilo kakvih pitanja o HTML-u ili CSS-u, preporučujem da prvo pogledate [[HTML Essential Training]] i CSS Essential Training.

> [!info]- Semantic Content
>
> **Env Vars:** css (5), html (4)
> **Speakers:** - [instruktor] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/using-the-exercise-files-26971303?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/using-the-exercise-files-26971303?u=76281980&t=0)** - [Christina] The exercise files for this course can be found underneath this video, next to the instructor details.
>
> **[0:06](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/using-the-exercise-files-26971303?u=76281980&t=6)** Click the show all link to download the zip file.
>
> **[0:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/using-the-exercise-files-26971303?u=76281980&t=9)** You can also get a copy from my GitHub account.
>
> **[0:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/using-the-exercise-files-26971303?u=76281980&t=12)** Just select code, then download zip.
>
> **[0:18](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/using-the-exercise-files-26971303?u=76281980&t=18)** Unzip the folder, and save it somewhere easy to find, like your desktop.
>
> **[0:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/using-the-exercise-files-26971303?u=76281980&t=23)** We'll also be linking to a lot of online resources and examples, so for your convenience a links PDF is also included in the exercise files.
>
> **[0:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/using-the-exercise-files-26971303?u=76281980&t=34)** As we're going through the course, the exercises will be presented in two formats.
>
> **[0:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/using-the-exercise-files-26971303?u=76281980&t=38)** The first will be small code samples using an online tool called CodePen, which is great for experimenting and seeing the output right away.
>
> **[0:48](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/using-the-exercise-files-26971303?u=76281980&t=48)** All of the CodePen exercises in this course can be found in my collection.
>
> **[0:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/using-the-exercise-files-26971303?u=76281980&t=53)** You're not required to sign up for the service, but if you'd like to keep a personal copy, then you'll need to sign up for a free account.
>
> **[1:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/using-the-exercise-files-26971303?u=76281980&t=62)** The second format will be building out page layouts with different techniques in a text editor.
>
> **[1:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/using-the-exercise-files-26971303?u=76281980&t=68)** I'll be using Visual Studio Code, but you can use any editor you prefer.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (2), download the (1), zip file (1)
> **CLI Commands:** unzip (1), find (1)
> **Tools:** github (1), visual studio (1)
> **Prerequisites:** required to (1), you'll need (1)
> **Env Vars:** pdf (1)
> **Speakers:** - [christina] (1)


### 1. An Overview of Page Layouts

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Layouts with HTML
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=0)** - [Instructor] In the early days of the web, it was common to use HTML Tables for page layouts because of its ability to create columns and rows.
>
> **[0:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=8)** As CSS matured, it became standard practice to separate content from style, and eventually, it became a recommendation not to use tables for layouts.
>
> **[0:18](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=18)** HTML Tables were originally intended for tabular data, and can still be used for this purpose.
>
> **[0:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=24)** Let's look at a basic table layout on CodePen.
>
> **[0:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=28)** Before we jump in the code, I just want to make a change to the Editor setting in CodePen.
>
> **[0:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=33)** I'm going to select this Change View button and dock my code panels to the left.
>
> **[0:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=38)** I'll also minimize the JS panel as well, since we won't be writing any JavaScript.
>
> **[0:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=43)** And then I'll just resize this panel as well.
>
> **[0:47](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=47)** Okay, let's look at this table.
>
> **[0:49](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=49)** This is an example of displaying content as tabular data.
>
> **[0:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=53)** It could be a list of names or maybe addresses.
>
> **[0:56](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=56)** Basically, data that you would display similar to a spreadsheet layout.
>
> **[1:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=62)** Each of the tr tags are used to create the table rows, and in each row, the th tags are used for table headings, and the td tags are used for table data.
>
> **[1:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=73)** There used to be quite a few attributes for adding styles that are now deprecated and no longer supported.
>
> **[1:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=79)** But as you can see, CSS can be applied to these table elements, just like any other element.
>
> **[1:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=86)** Traditionally, the call span and row span attributes were added to make the table cells span across columns and rows.
>
> **[1:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=94)** If I wanted to make this td tag span across both rows to create a sidebar look, I would add rowspan to the first td.
>
> **[1:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=103)** (mouse clicks) (keyboard clicking) And I'll set that value to 2 so it gets spanned across both rows.
>
> **[1:52](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=112)** Then I would have to remove this table data in the second row, because the one we added the rowspan to is now taking up both spots.
>
> **[2:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=121)** This was great for building layouts, but using too many row spans and call span attributes as well as nested tables introduced accessibility issues.
>
> **[2:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=130)** Screen readers may have issues navigating from one area to another in logical order.
>
> **[2:17](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=137)** Back in the day, tables versus CSS was a big debate, but these days, the only time you'll see tables used extensively is with HTML emails.
>
> **[2:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=146)** Different email applications have a variety of rendering engines, so, emails have to be built for the lowest common denominator, which means, older techniques such as tables and inline CSS must be used.
>
> **[2:42](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=162)** If you find yourself in a situation where you have to use tables for more than just displaying some data, here is an extensive guide on CSS tricks.

> [!info]- Semantic Content
>
> **Env Vars:** css (5), html (3)
> **CLI Commands:** make (3), find (1)
> **Analogies:** similar to (1), just like (1), such as (1)
> **Code Keywords:** let (2)
> **Definitions:** is an  (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard clicking) (1)

#### Layouts with CSS
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-css-26966362?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-css-26966362?u=76281980&t=0)** - [Narrator] CSS includes a variety of layout methods.
>
> **[0:03](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-css-26966362?u=76281980&t=3)** In this course, we'll cover these techniques.
>
> **[0:05](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-css-26966362?u=76281980&t=5)** The normal flow, which defines the default layout behavior before any CSS is added.
>
> **[0:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-css-26966362?u=76281980&t=11)** Floats, which was a technique used to create page layouts as we moved away from HTML table based layouts.
>
> **[0:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-css-26966362?u=76281980&t=19)** Positioning is also used to move elements from the normal flow, but it's generally used for smaller components within a page layout.
>
> **[0:27](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-css-26966362?u=76281980&t=27)** Flexbox introduced more efficient ways to align and distribute content in either columns or rows.
>
> **[0:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-css-26966362?u=76281980&t=33)** Grid allows for more complex layouts since page content can be arranged in columns and rows at the same time.
>
> **[0:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-css-26966362?u=76281980&t=41)** The multi-column layout is another newer technique that allows content to be displayed in newspaper style columns.
>
> **[0:49](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-css-26966362?u=76281980&t=49)** It's not as commonly used for page layouts, so I won't be covering it in this course.
>
> **[0:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-css-26966362?u=76281980&t=53)** But if you'd like to learn more, you can view these examples from the MDN, Mozilla Developer Network, web docs.
>
> **[0:59](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-css-26966362?u=76281980&t=59)** You can also check out the official and latest published version maintained by the W3C.
>
> **[1:05](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-css-26966362?u=76281980&t=65)** Each layout technique has its own purpose and understanding what each method is designed to do will help you choose the best layout solution for the task at hand.

> [!info]- Semantic Content
>
> **Env Vars:** css (2), html (1), mdn (1), w3c (1)
> **Documentation:** mdn (1), w3c (1)
> **Speakers:** - [narrator] (1)

#### Browser support and CSS standards
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=0)** - [Instruktor] Na ovom kursu ću mnogo govoriti o starijim tehnikama i novijim tehnikama, a upravo sam spomenuo W3C u poslednjoj lekciji.
>
> **[0:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=8)** Ali ko su oni tačno?
>
> **[0:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=11)** Pre nego što pređemo na CSS rasporede, hajde da razgovaramo malo o tome gde se ovi standardi formiraju i kako odrediti šta je staro, a šta novo.
>
> **[0:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=20)** Vorld Vide Veb konzorcijum ili skraćeno V3C je međunarodna zajednica koja se sastoji od organizacija članica, osoblja sa punim radnim vremenom i javnosti.
>
> **[0:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=30)** Oni su odgovorni za razvoj veb standarda, smernica i tehničkih specifikacija.
>
> **[0:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=36)** Poboljšanjima i standardizacijom CSS-a upravlja V3C CSS radna grupa.
>
> **[0:45](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=45)** Sve specifikacije su javno objavljene na sajtu V3C-a, uključujući prošle, trenutne i radne nacrte.
>
> **[0:55](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=55)** Tako da možemo da pogledamo istorijske specifikacije, pročitamo trenutne specifikacije, a takođe vidimo šta je u izradi gledajući nacrte.
>
> **[1:04](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=64)** Kada gledate ove publikacije, obavezno obratite pažnju na statusne kodove, koji se koriste da ukažu u kojoj fazi je određena specifikacija.
>
> **[1:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=72)** Proces standardizacije se uglavnom sastoji od šest faza.
>
> **[1:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=76)** Samo pripazite na preporuku.
>
> **[1:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=79)** To su dobri i trenutni su standard za veb.
>
> **[1:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=83)** Kandidat i predložene preporuke su postavljeni da postanu formalizovana V3C preporuka, ali i dalje zahtevaju konačno odobrenje.
>
> **[1:32](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=92)** Standardi u ovoj fazi su generalno u redu da počnu da se sprovode, ali samo imajte na umu da je to tehnički još uvek rad u toku.
>
> **[1:39](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=99)** Radni nacrti su eksperimentalni u ovoj fazi i možda neće raditi u svim pretraživačima.
>
> **[1:44](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=104)** Oni su podložni promenama i mogu čak biti potpuno uklonjeni.
>
> **[1:48](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=108)** A zamenjena preporuka je specifikacija koja je zamenjena novijom verzijom.
>
> **[1:54](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=114)** Ne morate da čitate sve publikacije V3C u celini da biste naučili i bili u toku sa CSS-om.
>
> **[2:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=121)** Postoje mnogi drugi resursi i tutorijali koji su lako dostupni na mreži, ali pomaže da se s vremena na vreme proveri zvanični vodič.
>
> **[2:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=129)** While the specifications Iako su specifikacije u različitim fazama standardizacije, are at the various phases of standardization, podrška pretraživača takođe varira.
>
> **[2:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=133)** browser support varies, too.
>
> **[2:15](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=135)** [Caniuse.com](https://Caniuse.com) is great reference for checking browser support [Caniuse.com](https://Caniuse.com) je odlična referenca za proveru podrške pretraživača za određene osobine i module.
>
> **[2:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=139)** for specific properties and modules.
>
> **[2:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=142)** You can do a search for a specific CSS property.
>
> **[2:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=142)** Možete da uradite pretragu za određenu CSS imovinu.
>
> **[2:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=146)** The results will show browser support Rezultati će pokazati podršku pretraživača i sve srodne informacije.
>
> **[2:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=149)** and any related information.

> [!info]- Semantic Content
>
> **Env Vars:** css (6), v3c (5), w3c (1)
> **URLs:** [caniuse.com](https://caniuse.com) (2)
> **Code Keywords:** module (1)
> **Documentation:** w3c (1)
> **Speakers:** - [instruktor] (1)


### 2. Float, Display, and Position

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Inline and block elements
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980&t=0)** - [Pripovedač] Normalan tok je način na koji pretraživač podrazumevano postavlja HTML elemente kada CSS nije primenjen.
>
> **[0:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980&t=7)** Elementi su prikazani u istom redosledu u kojem se pojavljuje u HTML-u.
>
> **[0:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980&t=12)** Većina elemenata će se pojaviti naslagani jedan na drugi i poznati su kao elementi na nivou bloka.
>
> **[0:18](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980&t=18)** Neki uobičajeni primeri su elementi sekcije, kao što su zaglavlje i stranu, kao i naslovi, paragrafi i liste.
>
> **[0:27](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980&t=27)** Postoje i drugi elementi koji se prikazuju unutar horizontalne linije, rame uz rame.
>
> **[0:32](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980&t=32)** Oni se nazivaju inline elementi, i mogu biti uključeni u blok element, kao link u paragrafu ili samostalno.
>
> **[0:40](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980&t=40)** Nešto što treba napomenuti, kategorija blokova na nivou u odnosu na inline elemente je korišćena u HTML specifikacijama do verzije 4.01, ali u HTML5, ovo je zamenjeno složenijim skupom kategorija sadržaja grupisanih po sličnim karakteristikama.
>
> **[0:57](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980&t=57)** Kategorizacija elemenata na nivou inline i bloka i dalje se primenjuje u smislu CSS-a, koji ćemo dalje istraživati, ali možda ćete videti i određene elemente na koje se odnose ove HTML5 kategorije sadržaja.
>
> **[1:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980&t=72)** Kada koristite CSS za kreiranje rasporeda, elementi se udaljavaju od normalnog toka kako bi kreirali kolone i redove i postavili elemente u određene delove stranice.
>
> **[1:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980&t=82)** Međutim, možda ćete otkriti da su mnogi elementi na vašoj stranici u redu u normalnom toku.
>
> **[1:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980&t=88)** Na primer, za mobilne rasporede, sa ograničenjem veličine ekrana, većina elemenata je ionako obično složena u jednu kolonu.
>
> **[1:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980&t=97)** Zbog toga je početak sa dobro strukturiranim HTML that lays all the content in a logical manner dokumentom koji postavlja sav sadržaj na logičan način is important for readability and accessibility.
>
> **[1:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980&t=103)** važan za čitljivost i pristupačnost.
>
> **[1:47](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980&t=107)** Organize the content first, Prvo organizujte sadržaj, a zatim koristite CSS da biste then use CSS to only change what you need.
>
> **[1:49](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980&t=109)** promenili samo ono što vam je potrebno.

> [!info]- Semantic Content
>
> **Env Vars:** css (5), html (4), html5 (2)
> **Versions:** 4.01 (1)
> **Speakers:** - [pripoveda (1)

#### The box model properties
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=0)** - [Instruktor] Sada kada smo malo razgovarali o normalnom toku, hajde da pričamo o tome kako ovi elementi međusobno deluju.
>
> **[0:06](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=6)** Svaki element pretraživač posmatra kao pravougaoni okvir.
>
> **[0:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=10)** CSS Bok model opisuje kako se ove kutije generišu za svaki HTML element.
>
> **[0:17](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=17)** Postoji pet osobina koje se mogu koristiti za definisanje modela kutije.
>
> **[0:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=20)** Širina se koristi za podešavanje širine područja sadržaja, koji sadrži stvarni sadržaj dodat između oznaka.
>
> **[0:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=28)** Visina postavlja visinu područja sadržaja.
>
> **[0:31](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=31)** Padding dodaje ili uklanja prostor unutar elementa.
>
> **[0:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=36)** Margina dodaje ili uklanja razmak oko elementa.
>
> **[0:39](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=39)** I granica se dodaje između oblaganja i margine.
>
> **[0:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=43)** Pogledajmo kako se ove osobine primenjuju na blok i inline elemente.
>
> **[0:48](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=48)** Blok elementi su iste visine kao i sadržaj sadržan između njihovih oznaka, ali oni obuhvataju celu širinu njihovog sadržanog elementa, čak i ako sam sadržaj nema.
>
> **[0:59](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=59)** To je razlog zašto blok elementi uvek počinju na novoj liniji.
>
> **[1:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=62)** Elementi na nivou bloka će se slagati jedan na drugi, ali će biti razdvojeni bilo kojim marginalnim prostorom.
>
> **[1:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=69)** Ako dva susedna elementa imaju marginalni prostor, područje u kojem se dodiruju dve margine završava zauzimanjem istog prostora.
>
> **[1:17](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=77)** To se zove urušavanje marže.
>
> **[1:21](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=81)** Padding dodaje prostor unutar elementa, a margina dodaje prostor oko elementa.
>
> **[1:27](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=87)** Dodaci oba će gurnuti ostale elemente dalje na vertikalne i horizontalne ose.
>
> **[1:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=94)** Inline elementi zauzimaju istu visinu i širinu kao i sadržaj sadržan u njihovim oznakama.
>
> **[1:39](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=99)** Elementi se poravnavaju jedan pored drugog, počevši sa leve strane, sve dok postoji prostor unutar elementa koji sadrži.
>
> **[1:46](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=106)** Ako nema dovoljno prostora, onda će se tekst ili elementi pomeriti dole u novu liniju.
>
> **[1:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=113)** Oblaganje i margina mogu se primeniti na ugrađene elemente, ali element će samo gurnuti okolne elemente dalje na horizontalnoj osi.
>
> **[2:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=121)** Pogledajmo ove osobine u primeru.
>
> **[2:05](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=125)** Jednostavan način da proverite da li je element blok ili inline je da dodate boju pozadine.
>
> **[2:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=130)** Hajde da un-komentarišemo pozadinske stilove i za p i za selektor.
>
> **[2:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=136)** Ako se boja proteže širinom kontejnera, to je blok element.
>
> **[2:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=140)** Ako obuhvata samo veličinu sadržaja, onda je to ugrađeni element.
>
> **[2:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=144)** Sada, hajde da pokušamo da dodamo svojstvo širine u paragraf.
>
> **[2:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=150)** Takođe možemo da ga dodamo u vezu, takođe, ali ugrađeni elementi ignorišu svojstva širine i visine.
>
> **[2:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=158)** Postoji određeni razmak između elemenata jer postoje podrazumevane gornje i donje margine na ovim oznakama pasusa.
>
> **[2:44](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=164)** Ali primetite kako je razmak između paragrafa isti kao i razmak na margini na vrhu prvog paragrafa.
>
> **[2:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=171)** Zapamtite, kada su dve margine susedne, one zauzimaju isti prostor, inače poznat kao urušavanje margine.
>
> **[3:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=181)** Hajde da povećamo marginu na svim stranama paragrafa.
>
> **[3:05](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=185)** Elementi će sada biti premešteni vertikalno i horizontalno kako bi se prilagodio dodatni prostor.
>
> **[3:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=192)** Isto je i sa podstavom.
>
> **[3:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=194)** Kada se margina primeni na ugrađene elemente, oni će biti premešteni samo horizontalno.
>
> **[3:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=200)** Isto je i sa podstavom.
>
> **[3:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=203)** The display property can be used Osobina prikaza može biti korišćena da se podesi ovo to adjust this default behavior.
>
> **[3:25](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=205)** podrazumevano ponašanje.
>
> **[3:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=208)** Let's talk more about display in the next lesson.
>
> **[3:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=208)** Hajde da pričamo više o prikazu u sledećoj lekciji.

> [!info]- Semantic Content
>
> **Env Vars:** css (1), html (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instruktor] (1)

#### The display property
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=0)** - [Instruktor] Da biste napravili promene rasporeda, mnoge metode, ali sve, koristite svojstvo prikaza.
>
> **[0:06](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=6)** Blok, inline, i inline-blok vrednosti menjaju podrazumevano ponašanje prikaza elemenata u normalnom toku. prikaz se takođe koristi za pokretanje rasporeda Grid i Flekbok, o čemu ćemo detaljnije govoriti kasnije u ovom kursu.
>
> **[0:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=23)** Hajde da otvorimo vežbu i testiramo različite vrednosti prikaza.
>
> **[0:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=28)** Trenutno, elementi koje koristim, odeljak, div i span, nemaju podrazumevane margine ili stilove oblaganja.
>
> **[0:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=36)** Hajde da dodamo neke boje pozadine kako bismo lakše videli granice svakog elementa.
>
> **[0:42](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=42)** Takođe možemo dodati elemente visine i širine, ali zapamtite, podrazumevano, inline elementi će ignorisati vrednosti visine i širine.
>
> **[0:52](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=52)** Dakle, hajde da dodamo prikaz sa vrednošću bloka, prvo na inline elemente.
>
> **[0:57](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=57)** Sada će se prikazati baš kao element bloka.
>
> **[1:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=60)** Visina i širina se primenjuju, a elementi se slažu.
>
> **[1:04](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=64)** Sada, hajde da pokušamo da podesite prikaz u liniji na element bloka, prikaz: u liniji i završimo ga tačka-zarezom.
>
> **[1:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=74)** Sada, ovo će učiniti da se elementi bloka ponašaju kao ugrađeni element.
>
> **[1:18](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=78)** Iako to može biti korisno u nekim slučajevima, postoji još jedna vrednost koja je korisnija za rasporede, inline-block.
>
> **[1:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=86)** Ova vrednost će primeniti karakteristike i inline i bloka na elemente.
>
> **[1:31](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=91)** Hajde da promenimo vrednost i za div i span selektore.
>
> **[1:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=96)** Tako da ću ga promeniti u inline-block, a sada se primenjuju vrednosti širine i visine, baš kao i elementi bloka, ali elementi su prikazani jedan pored drugog, baš kao i inline elementi.
>
> **[1:55](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=115)** Postoje neke hirove sa ovom metodom.
>
> **[1:58](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=118)** Iako nema margine ni na jednom od ovih elemenata, postoji mali razmak između elemenata.
>
> **[2:04](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=124)** Ovo zapravo dolazi iz preloma reda u HTML-u.
>
> **[2:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=128)** Ako stavimo oznake na istu liniju, prostor će biti uklonjen.
>
> **[2:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=133)** Postoje i druge neobične ispravke kao što je korišćenje HTML komentara sa početnom oznakom u jednoj liniji i završnom oznakom komentara u sledećoj liniji.
>
> **[2:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=144)** Iako ove tehnike uklanjaju razmaka, pisanje vašeg HTML-a ovako bi otežalo čitanje, pa hajde da samo preoblikujemo taj HTML.
>
> **[2:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=154)** Još jedno rešenje za uklanjanje prostora je da koristite marginu sa negativnom vrednošću samo da biste je malo gurnuli.
>
> **[2:42](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=162)** Hajde da dodamo našu osobinu margin-left, i negativna četiri piksela bi trebalo da bude dovoljno, i možemo dodati ovu osobinu i divu i rasponu.
>
> **[2:52](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=172)** Ovo će raditi samo sa marginom, a ne sa paddingom, jer padding ne prihvata negativne vrednosti.
>
> **[2:59](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=179)** Druga opcija je da se smanji razmak između elemenata postavljanjem osobine font-size na nulu u elementu kontejnera.
>
> **[3:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=187)** Dakle, hajde da uklonimo negativnu marginu i umesto toga dodamo nulu veličine fonta u kontejner.
>
> **[3:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=194)** Ova tehnika će se osloboditi prostora jer se veličina fonta ne odnosi samo na slova i brojeve, već se odnosi i na znakove prostora. font-size je nasledni stil, tako da font-size će morati da bude ponovo deklarisan da bi potomački element premostio ovaj nasleđeni stil.
>
> **[3:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=213)** Tako da možemo ponovo proglasiti veličinu fonta u div i span oznakama.
>
> **[3:40](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=220)** Dakle, osim estetike, drugi put kada biste morali da uklonite taj prostor je ako ste koristili ugrađene elemente koji su bili određene širine unutar kontejnera koji je takođe bio određene veličine.
>
> **[3:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=231)** Trenutno imamo četiri elementa koji su široki 200 piksela.
>
> **[3:57](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=237)** Dakle, ako podesim širinu kontejnera na 800 piksela, svi elementi bi trebalo da se uklope, ali ako uklonim nultu veličinu fonta, dodatni prostor je uključen u stavke i više se neće uklopiti u kontejner.
>
> **[4:15](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=255)** Kada su plovci još uvek bili primarni način za kreiranje rasporeda stranica, prikaz se često koristio za kreiranje for creating smaller components within the page.
>
> **[4:21](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=261)** manjih komponenti unutar stranice.
>
> **[4:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=264)** At the time, there were a lot of discussions U to vreme, bilo je mnogo diskusija o korišćenju prikaza u about using display versus floats for page layouts odnosu na plovke za raspored stranica, jer plovci takođe since floats also come with its own quirks.
>
> **[4:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=270)** dolaze sa svojim kuirks.
>
> **[4:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=274)** Here's an article that goes into detail Evo članka koji ide u detalje ako ste zainteresovani za if you're interested in the history of the display versus float conversation.
>
> **[4:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=277)** istoriju razgovora o prikazu u odnosu na float.
>
> **[4:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=281)** Fast forward to now, and it's really not necessary Brzo napred do sada, i zaista nije neophodno više voditi to have this debate anymore ovu raspravu jer su Grid i Flekbok prilično zamenili prikaz since Grid and Flexbox have pretty much replaced i plovak za kreiranje rasporeda cele stranice, ali još uvek display and float for creating full page layouts, postoje neki slučajevi korišćenja za promenu ponašanja but there are still some use cases for changing the display behavior prikaza, kao što je stilizovanje ugrađenih elemenata sa such as when styling inline elements različitim svojstvima modela kutije.
>
> **[4:56](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=296)** with various box model properties.

> [!info]- Semantic Content
>
> **Env Vars:** html (4)
> **Analogies:** such as (1)
> **Speakers:** - [instruktor] (1)

#### The box model and layouts
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=0)** - [Instruktor] Važan deo kreiranja rasporeda bilo kojom tehnikom je razumevanje kako elementi zauzimaju prostor.
>
> **[0:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=7)** CSS bok model uključuje pet svojstava koja se mogu koristiti za definisanje modela kutije.
>
> **[0:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=13)** Sve ove osobine zajedno određuju ukupnu površinu svakog elementa.
>
> **[0:18](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=18)** Pogledajmo primer.
>
> **[0:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=20)** Trenutno imam samo div sa nekom bojom i visinom i širinom koja se primenjuje na njega.
>
> **[0:25](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=25)** Hajde da dodamo u podlogu.
>
> **[0:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=29)** Obratite pažnju da je element povećan u veličini, iako nismo napravili nikakve promene u širini ili visini.
>
> **[0:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=35)** Element je sada veličine širine i visine plus prostor za oblaganje.
>
> **[0:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=41)** Ako dodamo granicu, element će se takođe povećati.
>
> **[0:47](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=47)** Ako dodamo marginu, to neće povećati veličinu elementa, ali povećava količinu prostora koji element zauzima.
>
> **[0:55](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=55)** Kada elementi ostanu u svom normalnom toku, to ne utiče previše na podrazumevani raspored.
>
> **[1:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=61)** Ali kada počnemo da kreiramo rasporede koji zahtevaju da se ove komponente poravnaju jedna pored druge, razumevanje kako ove osobine kutije zauzimaju prostor će biti neophodno da bi se osiguralo da se poravnaju kako se očekuje.
>
> **[1:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=73)** Uobičajeno ponašanje može biti izmenjeno sa osobinom veličine kutije.
>
> **[1:17](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=77)** Početna vrednost veličine kutije je content-box.
>
> **[1:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=82)** To znači da kada se dodaju stilovi oblaganja i granica, oni povećavaju veličinu elementa.
>
> **[1:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=89)** Međutim, vrednost okvira granice će gurnuti sadržaj prema unutra kako bi uključila prostor za oblaganje i granicu kako bi se održale vrednosti širine i visine postavljene u CSS-u.
>
> **[1:39](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=99)** Margina samo dodaje prostor oko elementa i ne utiče na veličinu samog elementa.
>
> **[1:45](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=105)** Ovo se često naziva popravkom modela kutije, a prvi put je dokumentovao Paul Irish.
>
> **[1:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=111)** Da biste koristili ovaj popravak, dodajte isječak CSS koda svim svojim projektima na vrhu CSS datoteke.
>
> **[1:59](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=119)** Ovaj isečak je već dodan u našem primeru kodnog pina, pa hajde da se vratimo i dodamo ga.
>
> **[2:06](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=126)** Ukloniću komentare, a sada će element zadržati povećane vrednosti širine čak i kada je dodato oblaganje i granica.
>
> **[2:17](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=137)** Postoji još jedna stvar koju treba da znamo o svojstvima i rasporedu modela kutije, posebno o osobini margine.
>
> **[2:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=143)** Margina se koristi za dodavanje određene količine prostora oko elementa.
>
> **[2:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=148)** Ali ako podesimo levu i desnu vrednost na auto, to će horizontalno centrirati naše elemente na nivou bloka linija.
>
> **[2:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=156)** Hajde da se vratimo na CodePen i ažuriramo vrednost margine.
>
> **[2:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=161)** Prvi broj se odnosi na gornje i donje vrednosti.
>
> **[2:44](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=164)** Dakle, to bi moglo biti postavljeno na bilo šta.
>
> **[2:46](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=166)** Ostaviću ga kako jeste.
>
> **[2:48](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=168)** Drugi broj se odnosi na levu i desnu vrednost.
>
> **[2:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=171)** Mi ćemo to podesiti na auto.
>
> **[2:54](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=174)** Da bi ovo funkcionisalo, potrebno je podesiti našu širinu.
>
> **[2:57](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=177)** Ovo sprečava element da se proteže po celoj širini svog from spanning the entire width of its container.
>
> **[2:59](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=179)** kontejnera.
>
> **[3:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=181)** If I was to remove it, Ako bih ga uklonio, ova kutija bi išla skroz preko.
>
> **[3:03](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=183)** this box would go all the way across.
>
> **[3:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=187)** So the element will span the specified width, Dakle, element će obuhvatiti određenu širinu, a preostali then the remaining space prostor će biti podeljen između dve margine koje će ga will be split between the two margins centrirati u svom kontejneru.
>
> **[3:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=193)** which will center align it within its container.

> [!info]- Semantic Content
>
> **Env Vars:** css (4)
> **Speakers:** - [instruktor] (1)

#### The float property
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=1)** - [Narator] U ranim danima, veb stranice su često bile rekreacije uobičajenih rasporeda koji se koriste u štampanim medijima, kao što su brošure i časopisi.
>
> **[0:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=9)** Svojstvo float je uvedeno za implementaciju jednostavnih rasporeda kao što je omotavanje teksta oko slike.
>
> **[0:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=14)** Element se pomera levo ili desno od svog kontejnera i uklanja iz normalnog toka.
>
> **[0:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=20)** Plutajući element menja ponašanje tog elementa i elemenata koji ga prate.
>
> **[0:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=26)** Svojstvo float ima četiri vrednosti.
>
> **[0:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=28)** Nijedan, koji određuje da uopšte nema plutanja i to je podrazumevana vrednost.
>
> **[0:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=33)** Levo i desno, lebdi elemente levo ili desno.
>
> **[0:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=37)** I naslediti, koji određuje da float vrednost treba da bude nasleđena od roditeljskog elementa.
>
> **[0:44](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=44)** Pošto se float može primeniti na bilo koji element, nije prošlo mnogo vremena dok su čitavi rasporedi kreirani plutajućim delovima stranice, stvarajući kolone unutar traka.
>
> **[0:54](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=54)** Sa standardizacijom flekbok-a i mreže, float se može vratiti da se koristi za svoju prvobitnu svrhu.
>
> **[1:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=60)** Ali i dalje je korisno razumeti hirove korišćenja plovaka za izgled, bez obzira da li podržavate nasleđeni projekat ili samo plutate sliku.
>
> **[1:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=70)** Pogledajmo primer olovke.
>
> **[1:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=72)** Trenutno postoje dva odvojena razvoja sa klasom omotača.
>
> **[1:17](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=77)** Svaki od ovih programera se koristi da sadrži elemente ugnežđene u njima.
>
> **[1:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=82)** Proširiću svoj panel kako bih napravio više prostora za html.
>
> **[1:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=86)** Tu je moj prvi omot i tu je moj drugi omot.
>
> **[1:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=93)** U redu, hajde da nastavimo i dodamo plovak elementu slike.
>
> **[1:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=97)** Pomerite se nadole do linije 16 i odkomentarišite ovaj stil da biste dodali plovak.
>
> **[1:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=103)** U redu, sada je moj tekst lebdio oko slike.
>
> **[1:47](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=107)** Ali zapamtite, postoje dva programera kontejnera.
>
> **[1:50](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=110)** Pa zašto bi se tekst u drugom kontejneru omotavao oko slike u drugom kontejneru?
>
> **[1:56](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=116)** Hajde da dodamo stil granice u klasi omotača.
>
> **[2:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=120)** Sada možemo da vidimo dva kontejnera malo jasnije.
>
> **[2:04](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=124)** Takođe možemo dodati i dno margine samo da dodamo malo prostora između dva kontejnera.
>
> **[2:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=130)** Sada možemo videti da će bilo koji element koji prati plutajući element popuniti prostor oko njega.
>
> **[2:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=136)** Takođe, može izgledati kao da su paragrafi poredani pored plutajućeg elementa, ali on zapravo radi iza plutajućeg elementa.
>
> **[2:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=144)** Hajde da dodamo ovu boju pozadine paragrafima.
>
> **[2:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=150)** Takođe možemo dodati malo margine oko slike samo da dodamo malo prostora oko nje kako bismo pomogli da se ovaj efekat vidi malo lakše.
>
> **[2:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=161)** Dodavanje boje pozadine pokazuje da paragraf zapravo radi iza plutajuće slike.
>
> **[2:46](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=166)** Ali sadržaj unutar, stvarni tekst, će se uskladiti unutar raspoloživog prostora.
>
> **[2:52](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=172)** Takođe primetite da je omotač obrisa samo oko paragrafa, ne plutajući elementi.
>
> **[2:59](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=179)** Roditeljski kontejner će se srušiti kada se elementi plutaju i prepoznaće samo visinu neplutajućih elemenata.
>
> **[3:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=187)** Dakle, da se vrati u normalan protok nakon što je element plutao moramo da obrišete plovak.
>
> **[3:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=194)** Ovaj primer ćemo ponovo koristiti u sledećoj lekciji, pa ga držite otvorenim da biste ga pratili.
>
> **[3:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=196)** so keep it open to follow along.

> [!info]- Semantic Content
>
> **Speakers:** - [narator] (1)

#### Clearing floats
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=0)** - [Instructor] Elements are floated, so other elements will wrap around it, but sometimes we need to be able to have control over which elements will wrap around the floated element.
>
> **[0:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=11)** To return the elements back to the normal flow, use the clear property with one of the following values, left, right, or both.
>
> **[0:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=20)** To decide which element to apply the clear to depends on where you want the layout to return to the normal flow.
>
> **[0:27](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=27)** Let's go back to the code pin example from the previous lesson.
>
> **[0:31](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=31)** I've already created a class for the clear, also named clear down on line 12.
>
> **[0:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=37)** So we can add this to any element.
>
> **[0:40](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=40)** The value is set to both to clear a left or a right float.
>
> **[0:44](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=44)** So let's say I wanted just the first paragraph to wrap around the image.
>
> **[0:49](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=49)** I can apply the clear to the second paragraph.
>
> **[0:52](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=52)** So let's add that to the HTML.
>
> **[0:54](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=54)** Here's my second paragraph, so I'll give it the class of clear, class equals clear in quotes.
>
> **[1:04](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=64)** And now the elements will return to the normal flow from this point on.
>
> **[1:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=70)** The image no longer appears outside of the boundaries of its wrapper.
>
> **[1:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=74)** But what if you wanted the second paragraph to wrap as well?
>
> **[1:18](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=78)** Then applying the clear here won't work.
>
> **[1:21](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=81)** We could try adding it to the next element instead, the second wrapper.
>
> **[1:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=86)** Let's remove the clear from here and add it to the second wrapper.
>
> **[1:32](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=92)** When using multiple classes, just remember to add a space in between the different class names.
>
> **[1:39](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=99)** Well, this kind of worked.
>
> **[1:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=101)** The second wrapper has now been returned to the normal flow and appears underneath the image, but the parent element still doesn't wrap around the floated element.
>
> **[1:52](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=112)** Let's hide the second container.
>
> **[1:55](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=115)** In this scenario where there's no element to apply the clear to, we'll have to find another way.
>
> **[2:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=121)** The clear must then be applied to the parent container instead.
>
> **[2:04](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=124)** This is often referred to as self clearing, and there are three ways to do this.
>
> **[2:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=130)** One way is adding this snippet, usually referred to as the clear fix hack.
>
> **[2:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=136)** This involves using the content property and the after sudo element to generate a space after the element and applying a clear to it.
>
> **[2:25](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=145)** This class is applied to the parent of the floated element.
>
> **[2:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=149)** When adding the class to the HTML, don't include the after.
>
> **[2:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=153)** This is a sudo element and is used in conjunction with another selector in the CSS.
>
> **[2:39](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=159)** This fix is commonly referred to as the clear fix hack because when it was first created, that was the class name that was being used.
>
> **[2:46](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=166)** But you can use any other class name.
>
> **[2:48](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=168)** Just make sure it matches to the CSS and the HTML.
>
> **[2:52](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=172)** Similar to the box model fix, this has been created and maintained by the developer community.
>
> **[2:59](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=179)** It is gone through some iterations over the years as browsers have updated.
>
> **[3:03](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=183)** CSS-tricks has an article documenting the history of this fix.
>
> **[3:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=189)** Another option is to use the overflow property.
>
> **[3:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=192)** When size dimensions are added to a container element, there may be times where the content may extend past the dimensions and overflow.
>
> **[3:21](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=201)** Different overflow values can be used to determine how to display the overflow of content.
>
> **[3:27](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=207)** Hidden clips the overflow of content.
>
> **[3:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=210)** Auto adds a scroll bar, but only when there is overflowing content.
>
> **[3:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=215)** And scroll will always show a scroll bar on the x and y axis even when the content does not flow outside of its container.
>
> **[3:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=223)** In the context of self clearing floats, hidden works best because it won't show any scroll bars.
>
> **[3:50](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=230)** This option works fine in most cases, but if you need to use overflow for the purposes of maintaining overflowing content, then you may run into some issues.
>
> **[4:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=240)** This option works fine in most cases, but if you need to use overflow for the purposes of maintaining overflowing content, then you may want to use another option.
>
> **[4:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=252)** The newest solution for this issue is with the display property set to flow-root.
>
> **[4:17](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=257)** It's supported by modern browsers, so unless you need to support older browsers, this is the recommended option.
>
> **[4:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=263)** Let's go back to the example and try out these different methods.
>
> **[4:27](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=267)** In this example, there's no overflow of content, so we were able to self clear the float in the parent element without clipping any content.
>
> **[4:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=276)** In this case, we didn't have to worry about any overflowing content.
>
> **[4:40](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=280)** So this method self cleared the parent element just fine.
>
> **[4:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=283)** It now wraps around the floated image.
>
> **[4:48](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=288)** Now let's hide the overflow property and use display with flow-root instead.
>
> **[4:56](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=296)** This will also self clear the float in the parent element since this value was created specifically for this purpose.
>
> **[5:03](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=303)** And now let's comment out the display property and try the clear fix option.
>
> **[5:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=311)** I've already added the snippet to the CSS, so all we have to do is add the class name to the class attribute in the parent element.
>
> **[5:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=319)** I'll add it after the wrapper class and that works as well.
>
> **[5:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=326)** To recap, clear the float on the following sibling element if one exists in the layout.
>
> **[5:31](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=331)** If one doesn't exist, then self clear the float on the parent element.
>
> **[5:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=335)** Use the display flow-root option unless you need to support older browsers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), self (6), this. (1), case, (1)
> **Env Vars:** css (4), html (3)
> **CLI Commands:** sudo (2), find (1), make (1)
> **Cross-References:** go back to (2)
> **Best Practices:** remember to (1), recommended (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Setting up your project
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=0)** - [Speaker] In this course, we're going to build the same layout using Float, Flexbox, and Grid to compare the different methods.
>
> **[0:06](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=6)** In the exercise files, there's a start folder containing an HTML file and three CSS files.
>
> **[0:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=14)** For each exercise, we'll use the same HTML and just swap out the CSS file.
>
> **[0:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=19)** I like having backups, so I'm going to make a copy of the entire start folder.
>
> **[0:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=26)** Then I'll rename this folder to layout exercises.
>
> **[0:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=38)** The other folders in the exercise files named by chapter and video numbers contain the final versions of each exercise.
>
> **[0:48](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=48)** If you don't have access to the exercise files, you can also download them from my GitHub repo.
>
> **[0:54](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=54)** Just select the clone or download button and download zip.
>
> **[0:59](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=59)** I like having backups, so I'm going to make a copy of the whole start folder and then save the copy to my desktop and rename the folder to CSS layouts.
>
> **[1:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=76)** These will be the files that I'll be working from for the remainder of these exercises.
>
> **[1:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=82)** These other folders in the exercise files are named by chapter and video and contain the final version of each exercise for that chapter.
>
> **[1:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=90)** Let's look at the index.html file in the browser and go over what we're going to build.
>
> **[1:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=97)** You can use any browser you'd like.
>
> **[1:39](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=99)** I'm using Firefox.
>
> **[1:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=101)** The layout will be basic, but a commonly used layout.
>
> **[1:45](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=105)** We're going to have the header and footer span across the top and the bottom, and then we're going to have the nav lineup on the left, main content in the middle and the sidebar on the right.
>
> **[1:57](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=117)** Earlier, I mentioned having your HTML and content arranged in logical order.
>
> **[2:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=121)** Well, the header and the footer are usually at the top and the bottom, and then what often follows the header is the navigation, but I've decided to add the main content first, and here's why.
>
> **[2:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=133)** For accessibility, having the main content come before the navigation will help keyboard and screen reader users get to the content without moving through a list of navigation links, possibly a sub-list of links, search bars, or any other items normally added in the navigation or header area.
>
> **[2:32](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=152)** This article on [webaim.org](https://webaim.org) goes into more detail about this, but they also recommend adding a skip navigation link that takes the user straight to the main content.
>
> **[2:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=163)** And this will be especially useful for when we can't put the navigation after the main content.
>
> **[2:48](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=168)** We'll talk more about that when we start adding to our float-based CSS.
>
> **[2:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=173)** And speaking of CSS, let's look at what is currently there now.
>
> **[2:57](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=177)** Let's open our project files in your text editor of choice.
>
> **[3:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=181)** I'll be using Adam.
>
> **[3:04](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=184)** Let's open up the index page and the float CSS file since we'll be working on this one first.
>
> **[3:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=190)** All the CSS files have the same base CSS, and right now, there's just some simple styles, such as background colors for each section just to help us identify the boundaries of these elements.
>
> **[3:21](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=201)** And I've also included some basic font styles and the border box fix.
>
> **[3:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=208)** Alright, we got all our files ready-to-go.
>
> **[3:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=210)** In the next lesson, we'll use float to create the page layout.

> [!info]- Semantic Content
>
> **Env Vars:** css (8), html (3)
> **Code Keywords:** let (4), this, (1)
> **Exercise Files:** exercise files (4), github repo (1)
> **CLI Commands:** make (2)
> **Tools:** github (1), firefox (1)
> **File Paths:** index.html (1)
> **URLs:** [webaim.org](https://webaim.org) (1)
> **Cross-References:** in the next (1)

#### Exercise: Build a layout with float
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=0)** - [Instructor] We'll first take a look at the HTML markup to decide which elements to apply the CSS styles to.
>
> **[0:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=7)** We have a header nav tag at the top, followed by a main tag for the main page content.
>
> **[0:15](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=15)** There is also an aside tag used for related sidebar content and the footer to close out the page.
>
> **[0:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=22)** All of these components are contained within a div with a class of "container".
>
> **[0:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=28)** For this exercise, we'll start by setting the width for the entire page layout.
>
> **[0:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=33)** We'll do this by adding the style to the container element.
>
> **[0:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=37)** Let's switch over to the float.css file.
>
> **[0:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=41)** Using the existing container block down in line 21, we'll add the width property.
>
> **[0:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=53)** I'll set this value to 1200 pixels and end it with a semicolon.
>
> **[0:59](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=59)** I'll also add margin and set it to zero for the top and bottom and auto for the left and right.
>
> **[1:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=69)** This will center align it horizontally.
>
> **[1:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=72)** Let's save the file and switch over to the browser.
>
> **[1:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=76)** Refresh the browser to see the changes.
>
> **[1:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=79)** The width has been applied and the container is now center aligned, but since it's set to a fixed size, any viewport width or resolution smaller than 1200 pixels will not have enough space to display the content.
>
> **[1:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=98)** You'll need to scroll horizontally to see all of the content.
>
> **[1:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=103)** Back when float-based layouts were used, responsive web design wasn't a standard practice yet.
>
> **[1:48](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=108)** The two common resolutions to target based on width were either 1280 pixels or 1024 pixels.
>
> **[1:55](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=115)** To make this layout flexible for both of these sizes, let's go back to the CSS file and make an adjustment.
>
> **[2:03](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=123)** We'll use the max-width property instead of width.
>
> **[2:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=131)** Now, let's save this file, and see how this change displays in the browser.
>
> **[2:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=136)** When using max-width, when the browser viewport reaches the maximum value of 1200 pixels or larger, the container width stops at 1200 pixels.
>
> **[2:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=146)** When it's smaller, it becomes a hundred percent of its container.
>
> **[2:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=156)** Now let's go back to the CSS file to add the three columns in the middle.
>
> **[2:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=161)** We'll keep it simple and make the nav and sidebar the same size.
>
> **[2:45](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=165)** We have 1200 pixels to work with, so we could set them both to 300 pixels, which would leave 600 pixels for the main section, but we can also use percentage values instead to keep the layout flexible.
>
> **[2:59](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=179)** So let's set the width for the nav inside bar, which is contained in the aside element, to 25%.
>
> **[3:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=192)** I'll just copy this and add it to the aside block, which then leaves 50% for the main element.
>
> **[3:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=206)** All right, let's save the file again, and see how it looks in the browser.
>
> **[3:31](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=211)** The widths have been applied, but they're still stacked on top of each other.
>
> **[3:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=215)** So here's where we can apply the float.
>
> **[3:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=218)** Let's go back to the CSS file.
>
> **[3:42](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=222)** Since we've set the widths of the nav, main and sidebar to equal a hundred percent of its container, we can set a float left to all three elements to get them to line up side by side in the order that they appear in the HTML.
>
> **[3:57](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=237)** We can use a selector list to apply the style to all three sections at once.
>
> **[4:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=242)** I'm going to add it just before the nav block, nav, comma, main, comma, then aside, and the curly brackets.
>
> **[4:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=254)** Inside here, I'll add the float property set to left.
>
> **[4:18](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=258)** Let's save the file and see the changes in the browser.
>
> **[4:25](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=265)** The elements are now lined up side by side, but now the footer is doing something funny.
>
> **[4:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=270)** You can see a bit of it here as well as some of it here.
>
> **[4:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=274)** When elements are floated, they're moved outside of the normal flow, so the footer has moved up to occupy any available space.
>
> **[4:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=283)** So here is where we can apply the clear to return the footer and any content that may come after back to the normal flow.
>
> **[4:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=291)** Let's go back to the CSS file.
>
> **[4:54](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=294)** In the existing footer selector, we'll add the clear property.
>
> **[5:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=302)** Even though we only used left floats, I like to use a value of both.
>
> **[5:06](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=306)** This will clear any left or right floats.
>
> **[5:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=309)** So if the layout changes later to require a right float, this clear value will still apply.
>
> **[5:15](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=315)** Let's save the file and return to the browser.
>
> **[5:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=319)** Refresh to see the changes, and now the footer has been cleared.
>
> **[5:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=324)** We've also created a flexible three-column layout.
>
> **[5:31](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=331)** By using percentage widths for the nav, sidebar and main section, if we change the width of the container, the three columns will adjust proportionally.
>
> **[5:40](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=340)** Using the max width property gives you control over the size, while also maintaining flexibility.
>
> **[5:45](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=345)** Even though we were able to create the desired layout with floats, there are some quirks and limitations, for example, the lack of equal column heights.
>
> **[5:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=353)** Notice how the background color in the nav and sidebar doesn't extend all the way down.
>
> **[6:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=360)** The element is only as tall as its content.
>
> **[6:03](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=363)** There are workarounds, but with the widespread browser support for Flexbox and Grid, we now have much better solutions.
>
> **[6:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=370)** The purpose of this exercise was to understand how basic float based layouts were created for reference in case you need to work with legacy code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), switch (2), require (1)
> **Env Vars:** css (5), html (2)
> **Cross-References:** go back to (4)
> **CLI Commands:** make (3)
> **File Paths:** float.css (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Position: Relative and absolute
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=0)** - [Instruktor] Osobina pozicije se takođe može koristiti za promenu toka dokumenta raspoređivanjem elemenata u odnosu na njegovu trenutnu poziciju, element koji sadrži ili prikaz pretraživača.
>
> **[0:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=11)** Iako se pozicija ne koristi za kreiranje rasporeda cele stranice, korisna je za fino podešavanje komponenti unutar stranice.
>
> **[0:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=19)** Pogledajmo kako funkcioniše relativno i apsolutno pozicioniranje u primeru CodePen-a.
>
> **[0:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=24)** Napravio sam osnovni raspored stranice bez plovaka ili drugih stilova rasporeda.
>
> **[0:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=29)** Samo neki stilovi za razlikovanje komponenti jedni od drugih.
>
> **[0:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=33)** Počnimo tako što ćemo pogledati relativnu vrednost.
>
> **[0:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=36)** U ovom primeru, kutija se nalazi u glavnom području sadržaja.
>
> **[0:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=41)** Koristi klasu koja se zove relativna.
>
> **[0:44](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=44)** Hajde da ga nađemo u CSS panelu.
>
> **[0:47](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=47)** To je dole na liniji 31.
>
> **[0:49](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=49)** Hajde da nastavimo i dodamo taj stil.
>
> **[0:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=53)** Relativni je jedini pozicionirani element koji ostaje u toku rasporeda.
>
> **[0:57](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=57)** Dakle, dodavanje ove vrednosti ne menja automatski svoju poziciju.
>
> **[1:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=61)** Ali sada možemo dodati jednu od četiri svojstva ofseta kutije, gore, desno, dole ili levo, da odredimo pravac i položaj elementa.
>
> **[1:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=70)** Ova svojstva se mogu koristiti sa bilo kojom jedinicom dužine, kao što su pikseli ili procenat.
>
> **[1:15](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=75)** Dodajmo tu levu vrednost od 50 piksela.
>
> **[1:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=79)** Ovo će gurnuti element 50 piksela dalje od leve strane njegove trenutne pozicije.
>
> **[1:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=86)** Dodajmo donju vrednost od 20 piksela.
>
> **[1:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=89)** Ovo se može osećati pomalo kontraintuitivno jer izgleda kao da se element upravo pomerio gore.
>
> **[1:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=95)** Pa, pomerio se jer je element gurnut 20 piksela odavde, na dno njegovog pozicioniranja.
>
> **[1:44](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=104)** Dakle, ako bismo umesto toga koristili najvišu vrednost, ona bi gurnula dole jer sada gura element iz gornjeg dela svoje trenutne pozicije.
>
> **[1:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=113)** Dok su elementi pozicionirani sa relativnim ostaje u toku rasporeda, drugi elementi se ne vrše pozicioniranim elementima, za razliku od plovaka.
>
> **[2:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=121)** To može dovesti do ponekad preklapanja elemenata, što može ili ne mora biti vaša namera.
>
> **[2:06](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=126)** Hajde da pogledamo sledeće apsolutno pozicioniranje.
>
> **[2:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=129)** Kada dodamo apsolutnu poziciju elementu, on ga potpuno pomera iz normalnog toka rasporeda stranice.
>
> **[2:17](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=137)** Sada je u osnovi u svom sloju.
>
> **[2:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=140)** Element koji ga prati, u ovom primeru, relativna kutija će se pomeriti gore da popuni sada prazno mesto.
>
> **[2:27](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=147)** Leva i gornja vrednost za relativnu kutiju je sada pozicionirana sa svog novog mesta u toku stranice.
>
> **[2:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=153)** Elementi se poravnavaju na horizontalnoj i vertikalnoj osi, ali zapravo postoji i treća, z-osa, gde se elementi slažu jedan na drugi u slojevima.
>
> **[2:42](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=162)** Zbog toga se ova dva elementa preklapaju.
>
> **[2:46](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=166)** Za pozicionirane elemente, ovaj redosled slaganja se zasniva na njihovom redosledu u HTML-u.
>
> **[2:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=171)** Onaj koji dolazi posle relativne kutije u ovom primeru ima veći redosled slaganja.
>
> **[2:56](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=176)** Dakle, ako bih želeo da apsolutni okvir sedi na vrhu relativnog okvira, mogao bih samo da promenim redosled u HTML-u.
>
> **[3:06](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=186)** Ali ponekad, nema smisla menjati HTML redosled na osnovu sadržaja koji je sadržan u njemu.
>
> **[3:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=192)** Ako je to slučaj, redosled rasporeda može biti promenjen sa osobinom Z-indeksa.
>
> **[3:17](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=197)** Ova osobina radi samo sa pozicioniranim elementima.
>
> **[3:21](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=201)** Podrazumevana vrednost Z-indeksa je nula, tako da što je veća vrednost, to je veći redosled steka.
>
> **[3:27](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=207)** Dakle, ako dam ovom apsolutnom pozicioniranju Z-indeks od samo jednog, sada će biti veći od podrazumevane vrednosti Z-indeksa relativnog nula.
>
> **[3:39](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=219)** Elementi sa pozicioniranim apsolutom će biti u odnosu na najbliži pozicionirani element predaka.
>
> **[3:45](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=225)** Ako ne postoji, to će biti u odnosu na element tela.
>
> **[3:49](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=229)** Ovom pozicioniranom apsolutnom elementu dali smo vrednost Z-indeksa, ali još uvek nismo definisali nikakve osobine ofseta, tako da kutija i dalje sedi na istom mestu.
>
> **[3:58](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=238)** Dakle, hajde da dodamo te vrhunske i desne osobine.
>
> **[4:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=242)** Apsolutni okvir je sada trenutno pozicioniran u odnosu na telo, što je vidljivo područje u pretraživaču.
>
> **[4:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=249)** Dakle, to je 20 piksela sa desne strane i 20 piksela sa vrha početnog vidljivog područja.
>
> **[4:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=256)** Većinu vremena kada koristite apsolutno, želećete da sadržite element u određenoj oblasti, a to možemo uraditi dodavanjem pozicije elementu koji sadrži.
>
> **[4:25](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=265)** Hajde da ga dodamo ovom glavnom elementu, ovoj žutoj kutiji ovde.
>
> **[4:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=269)** Ovo je roditeljski element apsolutne kutije.
>
> **[4:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=274)** Dakle, hajde da se pomerimo do linije 21 i dodamo u poziciji relativno.
>
> **[4:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=281)** Može se koristiti bilo koja pozicionirana vrednost, ali u ovom slučaju, relativna je dobar izbor jer ne želimo da glavni element bude uklonjen iz prirodnog toka stranice.
>
> **[4:49](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=289)** Mi samo želimo da sadržimo apsolutnu kutiju.
>
> **[4:52](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=292)** Dakle, sada je pozicioniran unutar glavnog elementa.
>
> **[4:57](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=297)** Apsolutna kutija je sada pozicionirana 20 piksela od vrha i 20 piksela desno od najbližeg pozicioniranog elementa pretka.
>
> **[5:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=308)** There are three more position values, Postoje još tri vrednosti pozicije, pa držite ovu vežbu otvorenom.
>
> **[5:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=310)** so keep this exercise open.
>
> **[5:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=311)** We're going to come back to it in the next video.
>
> **[5:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=311)** Vratićemo se na to u sledećem videu.

> [!info]- Semantic Content
>
> **Env Vars:** html (3), css (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instruktor] (1)

#### Position: Fixed, sticky, and static
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=0)** - [Speaker] Continuing from the last exercise.
>
> **[0:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=2)** Let's jump back in with fixed positioning.
>
> **[0:05](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=5)** Go to the nav selector block on line 14 and add-in position fixed.
>
> **[0:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=13)** We're going to create a navbar that's always displayed in the viewport, even on page scroll, but it looks like it just disappeared.
>
> **[0:21](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=21)** It didn't.
>
> **[0:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=22)** It's actually under the main element.
>
> **[0:25](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=25)** Remember, we talked about position in the z-index, right?
>
> **[0:27](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=27)** Well, we added position relative to the main element, and it comes after the nav in the HTML.
>
> **[0:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=35)** So by default, it has a higher stack order.
>
> **[0:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=37)** So the nav is just underneath the main content.
>
> **[0:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=41)** We can just add a z-index value to the nav to make sure it stays on top.
>
> **[0:46](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=46)** And often when creating a fixed nav, it's good to give it a high number because we want that to always be on top of all elements.
>
> **[0:54](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=54)** So let's add that in.
>
> **[0:56](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=56)** And the navigation bar is back.
>
> **[0:58](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=58)** With position fixed and absolute.
>
> **[1:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=61)** If the block element doesn't have a width applied to it, it will automatically adjust to the size of the content.
>
> **[1:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=67)** So we can set the width to 100% here to make it span all the way across.
>
> **[1:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=73)** And you may have noticed that the navigation bar is now on top of the absolute box as well, and that's what we want.
>
> **[1:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=80)** We want that navigation bar to sit on top of everything.
>
> **[1:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=83)** So let's just give it a top value so we can move it right to the top of the page.
>
> **[1:27](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=87)** So we'll set that to zero and now it's moved up.
>
> **[1:32](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=92)** So I'm going to resize the view-port so we can get the page to scroll.
>
> **[1:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=97)** Now the navigation bar is always fixed at the top, but we need to push that header down since the navigation bar is now sitting on top of that as well.
>
> **[1:47](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=107)** So we can just add a margin top here in the header and just make it the same size as the navigation bar.
>
> **[1:56](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=116)** Next, we'll take a look at how the newest value sticky works with positioning.
>
> **[2:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=122)** Back in line 14, we'll update the position of the nav by changing the value to sticky.
>
> **[2:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=128)** So now, we see it's back under the header.
>
> **[2:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=130)** With sticky positioning, it stays in its initial spot until you scroll the page.
>
> **[2:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=136)** Then it becomes fixed when the value in the offset property has been met.
>
> **[2:21](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=141)** So in this example, that's zero from the top.
>
> **[2:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=143)** So when we scroll, the navigation bar is going to stay where it is, and once we hit zero from the top, it becomes fixed.
>
> **[2:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=153)** So it's kind of a mix between relative and fixed positioning.
>
> **[2:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=157)** So now we can also remove the margin from the header.
>
> **[2:46](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=166)** There's one more value, static, which is the initial default value.
>
> **[2:50](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=170)** Elements are not positioned at all and will display in the normal flow.
>
> **[2:54](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=174)** So if you don't want to position an element, you don't need to declare this value in the CSS unless you want to override the value.
>
> **[3:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=182)** For example, you may want to remove the position absolute for a smaller screen size.
>
> **[3:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=187)** Let's go down to the media query right at the bottom of the panel.
>
> **[3:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=191)** Here, we can add styles for a specific condition.
>
> **[3:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=194)** In this case, view-ports that are 600 pixels or smaller and will add-in the static value.
>
> **[3:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=203)** So now the absolute box will not be positioned until the viewport is 600 pixels or larger.
>
> **[3:40](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=220)** When learning how to use the position property, it can be tempting to use it for creating entire page layouts since you can arrange components in specific positions.
>
> **[3:49](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=229)** But positioning should not be used in this way since it takes the element out of the natural stacking order and the normal flow with the exception of relative.
>
> **[3:58](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=238)** If you find that you're using large offset values to position your elements, consider using alternative layout methods instead, such as grid or flexbox, and stick to using physician for styling smaller page components rather than full-page layouts.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), static (2), default, (1), override (1), case, (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** html (1), css (1)
> **Cross-References:** we talked about (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [speaker] (1)


### 3. Flexbox

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Getting started with Flexbox
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=0)** - [Pripovedač] Fleksibilni raspored kutija ili skraćeno Flekbok, pruža mnogo načina za usklađivanje sadržaja, naručivanje stavki i implementaciju fleksibilne veličine.
>
> **[0:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=10)** Dugo vremena, plovci su korišćeni za kreiranje rasporeda stranica.
>
> **[0:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=14)** To nam je omogućilo da kreiramo složenije rasporede od tabela, ali bilo je i drugih ograničenja kao što je stvaranje jednakih visina kolona, koje smo videli u prethodnoj vežbi float.
>
> **[0:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=24)** Flekbok je olakšao rešavanje ovih vrsta problema sa rasporedom.
>
> **[0:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=29)** Flekbok je potpuno novi modul rasporeda, tako da to znači novu terminologiju i mnoštvo svojstava zasnovanih na flek-u.
>
> **[0:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=36)** Takođe se često naziva jednodimenzionalnim rasporedom, jer su stavke postavljene na jednoj osi ili kao kolone ili redovi.
>
> **[0:45](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=45)** Mi ćemo dobiti više u to znači malo kasnije.
>
> **[0:49](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=49)** Flek kontejner je roditeljski element i samo potomci elementi flek kontejnera su flek stavke, a ne potomci elementi.
>
> **[0:57](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=57)** Možete, međutim, gnezdo flek kontejnera u drugom flek kontejneru.
>
> **[1:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=67)** Da biste koristili Flekbok, prvo mora biti definisan kontejner za flek.
>
> **[1:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=72)** Ranije smo koristili osobinu prikaza da promenimo ponašanje elemenata na nivou inline i bloka, ali prikaz se takođe koristi za podešavanje kontejnera flek sa jednom od dve vrednosti, flek ili inline-flek.
>
> **[1:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=84)** Evo primera dva kontejnera koji sadrže pet blok elemenata u normalnom toku.
>
> **[1:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=90)** Elementi su složeni i obuhvataju širinu kontejnera.
>
> **[1:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=94)** Kada se displej flek doda u roditeljski element, on je sada definisan kao flek kontejner i svaki potomak element je sada flek stavka.
>
> **[1:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=103)** Flek stavke se prikazuju u nizu i postaju iste veličine kao i njihov sadržaj, ali flek kontejneri i dalje obuhvata širinu svog kontejnera.
>
> **[1:52](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=112)** Ako podesite vrednost prikaza na inline-flek - flek kontejner će obuhvatiti širinu svog sadržaja, flek stavke i prikazuje u liniji na druge flek kontejnere.
>
> **[2:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=122)** Dakle, to ne menja način na koji se prikazuju flek stavke, umesto toga čini flek kontejner prikaz u liniji.
>
> **[2:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=129)** Iako se fleksibilne stavke automatski menjaju veličinu prema veličini njihovog sadržaja, možete podesiti i određene veličine, o čemu ćemo uskoro govoriti.
>
> **[2:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=140)** Kada koristite nasleđene tehnike kao što je float, svaka stavka je iste visine kao i njen sadržaj, što smo upravo videli u našoj prethodnoj vežbi.
>
> **[2:27](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=147)** Just by adding the flex display value, Samo dodavanjem vrednosti flek prikaza, flek stavke se the flex items are automatically arranged automatski raspoređuju u fleksibilne stavke jednake visine, into flexible equal height items, međutim, ima više flek svojstva da dodatno prilagodite however, there are more flex properties svoje rasporede.
>
> **[2:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=157)** to further customize your layouts.

> [!info]- Semantic Content
>
> **Speakers:** - [pripoveda (1)

#### Orientation with flex-direction and flex-wrap
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=0)** - [Instruktor] Ranije u ovom kursu smo razgovarali o korišćenju svojstva prikaza za poravnavanje elemenata kao inline ili blok ili inline-block.
>
> **[0:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=7)** Što bi se u suštini moglo koristiti za kreiranje redova i kolona, ali sa nekoliko hirova.
>
> **[0:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=13)** Isto je i sa plovcima, sa flekbok-om, flek stavke se lako mogu rasporediti u redove ili kolone bez ikakvih dodatnih ispravki.
>
> **[0:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=22)** Flekbok poravnava stavke na osnovu dve ose, glavne ose i poprečne ose.
>
> **[0:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=29)** Stavke su takođe raspoređene na osnovu početne i krajnje tačke.
>
> **[0:32](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=32)** Glavni početak i glavni kraj na glavnoj osi i unakrsni početak i unakrsni kraj na poprečnoj osi.
>
> **[0:39](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=39)** Pravac glavne ose određen je svojstvom flek-pravca.
>
> **[0:45](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=45)** Kada je smer flek-podešen na red, što je podrazumevano, glavna osa je horizontalna, a glavni početak i glavni kraj će se odvijati s leva na desno počevši od leve strane.
>
> **[0:56](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=56)** Kada su flek stavke postavljene na kolone, glavna osa je vertikalna i glavni kraj radi od vrha do dna počevši od vrha.
>
> **[1:05](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=65)** Smer Flek-a takođe prihvata još dve vrednosti, obrnuti red i obrnutu kolonu.
>
> **[1:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=71)** Kada se koriste ove vrednosti pravac glavnog početka i glavnog kraja se okreće.
>
> **[1:15](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=75)** Za pristupačnost, korišćenje obrnutih vrednosti ne bi trebalo da bude zamena za stvarni redosled sadržaja u html-u.
>
> **[1:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=83)** Preuređivanje je samo vizuelno.
>
> **[1:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=86)** Glavni početak i glavni kraj takođe zavisi od načina pisanja dokumenta.
>
> **[1:31](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=91)** Na primer, glavni početak i glavni kraj će se pokrenuti s leva na desno za jezik s leva na desno kao što je engleski.
>
> **[1:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=98)** A za jezik s desna na levo onda će glavni početak i glavni kraj takođe raditi s desna na levo.
>
> **[1:45](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=105)** Kada koristite flekbok, sve stavke će se poravnati na jednoj osi, čak i ako se stavke mogu preliti.
>
> **[1:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=111)** Svojstvo flek-vrap može da se koristi za promenu ovog ponašanja.
>
> **[1:55](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=115)** Novrap je početna vrednost što znači da se flek stavke neće umotati i promeniće veličinu da se uklope u jednu liniju.
>
> **[2:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=122)** Vrednost omota će postaviti stavke u više redova ako nema dovoljno prostora da stane sve stavke u jednu liniju.
>
> **[2:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=129)** Iako Flekbok koristi raspored jedne ose, stavke za pakovanje mogu stvoriti izgled redova i kolona.
>
> **[2:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=136)** Takođe možemo istovremeno promeniti pravac koristeći obrnutu vrednost.
>
> **[2:21](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=141)** Imajte na umu da su samo unakrsni početak i unakrsni kraj obrnuti.
>
> **[2:25](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=145)** The items are still in the same order on the main axis.
>
> **[2:25](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=145)** Stavke su i dalje u istom redosledu na glavnoj osi.
>
> **[2:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=150)** Flex-wrap and flex decoration can also be applied Flek-vrap i flek dekoracija može da se primeni korišćenjem skraćenice imovine flek-protok.
>
> **[2:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=153)** using the shorthand property flex-flow.

> [!info]- Semantic Content
>
> **Speakers:** - [instruktor] (1)

#### Flexible sizing
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=0)** - [Pripovedač] Kada se pokrene flek kontejner, flek stavke automatski menjaju veličinu.
>
> **[0:06](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=6)** Ali ponekad ćete možda morati da podesite određenu veličinu za flek stavke.
>
> **[0:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=11)** Definisanje aspekt flek rasporeda je sposobnost da se flek stavke flek, menja njihovu širinu ili visinu da popuni raspoloživi prostor u glavnoj dimenziji.
>
> **[0:21](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=21)** Postoje tri osobine koje se koriste zajedno za podešavanje veličine flek stavki.
>
> **[0:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=26)** Flek-baza postavlja početnu veličinu.
>
> **[0:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=28)** Flek-raste određuje kako će se stavke proširiti ako postoji dodatni prostor u kontejneru.
>
> **[0:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=34)** I flek-shrink određuje kako će se predmeti smanjiti ako nema dovoljno prostora u kontejneru.
>
> **[0:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=41)** V3C preporučuje korišćenje skraćenog svojstva, flek, kako bi se izbeglo resetovanje bilo koje vrednosti koje nisu posebno definisane.
>
> **[0:49](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=49)** Da biste koristili skraćenicu svojstvo, prvo proglasite vrednost flek-rast.
>
> **[0:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=53)** Zatim vrednost flek-shrink, završava sa flek-bazne vrednosti.
>
> **[0:58](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=58)** Flek-raste i flek-skuplja svojstva su definisana sa numeričkom vrednošću bez jedinica.
>
> **[1:03](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=63)** Osnovna vrednost se može koristiti sa bilo kojim vrednostima dužine, procentima ili ključnim rečima.
>
> **[1:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=69)** Hajde da otvorimo Codepen primer da vidimo pregled kako se ove vrednosti primenjuju na flek stavke.
>
> **[1:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=76)** Prvo, mi ćemo definisati flek kontejner dodavanjem displeja flek.
>
> **[1:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=79)** Dole u liniji sedam, hajde da to odkomentarišemo.
>
> **[1:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=84)** Stavke će automatski promeniti veličinu na veličinu svog sadržaja i poravnati u nizu.
>
> **[1:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=90)** Hajde da se spustimo na flek stavke i eksperimentišemo sa vrednostima flek-a.
>
> **[1:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=96)** Vrednosti koje su ovde trenutno deklarisane, nula, jedan i auto, su podrazumevane vrednosti.
>
> **[1:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=101)** Dakle, dodavanje ove osobine neće napraviti nikakve promene.
>
> **[1:45](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=105)** Dakle, počnimo sa bližim pogledom na treću vrednost prvi.
>
> **[1:49](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=109)** Flek-osnova.
>
> **[1:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=111)** Razmislite o tome kao o svojoj idealnoj veličini.
>
> **[1:54](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=114)** Hajde da promenimo ovu vrednost na 100 piksela.
>
> **[1:57](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=117)** Budući da postoji šest stavki unutar kontejnera širine 600 piksela, svaka stavka je savršeno dimenzionisana prema deklaraciji o flek-osnovi.
>
> **[2:06](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=126)** Ali ako promenim kontejner na 400 piksela ... Druga vrednost preuzima, flek-shrink, koji je postavljen na jedan.
>
> **[2:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=136)** To u osnovi znači, smanjite sve stavke za istu količinu prostora kako bi se uklopili u niz.
>
> **[2:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=142)** Dakle, to je razlog zašto se flek-baza naziva početnom veličinom, jer nije zagarantovana.
>
> **[2:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=148)** Ako ima dovoljno prostora, napravite sve flek stavke veličine deklarisane sa flek-baznom vrednošću.
>
> **[2:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=154)** Ako ne, onda se smanjite ili raste u skladu sa prve dve vrednosti.
>
> **[2:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=158)** Dakle, prva vrednost je flek-rast, i podrazumeva se na nulu.
>
> **[2:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=163)** To znači da ako u kontejneru ima dodatnog prostora, nemojte se širiti da biste popunili prostor.
>
> **[2:48](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=168)** Hajde da promenimo širinu kontejnera na 800 piksela.
>
> **[2:54](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=174)** Svaka stavka je sada široka 100 piksela, jer ima dovoljno prostora.
>
> **[2:58](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=178)** Ali sada je ostalo i malo prostora.
>
> **[3:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=181)** Ako promenimo vrednost flek-raste na jedan, dodatni prostor će biti ravnomerno podeljen između svih flek stavki.
>
> **[3:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=187)** I proširiće se za isti iznos da popuni prostor.
>
> **[3:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=193)** Sada, ako podesite vrednost flek-shrink na nulu, druga vrednost, to znači da se neće smanjiti uopšte.
>
> **[3:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=203)** Trenutno nećemo videti promenu, jer postoji 200 piksela dodatnog prostora koji se popunjava vrednošću flek-a.
>
> **[3:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=209)** Ali ako vratimo kontejner na 400 piksela, videćemo promenu.
>
> **[3:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=217)** Sada će se sadržaj preliti izvan kontejnera za flek jer smo postavili vrednost flek shrink na nulu, što znači da se neće smanjiti.
>
> **[3:45](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=225)** A Flekbok je jednodimenzionalni raspored.
>
> **[3:48](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=228)** Pokušaće da organizuje sve stavke u jednoj liniji, čak i ako se ne uklapa.
>
> **[3:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=233)** Hajde da dodamo u flek-vrap, podesite da završi.
>
> **[3:57](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=237)** Predmeti će se sada zamotati i više neće preplaviti.
>
> **[4:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=241)** Ali kako to da je drugi red predmeta sada širi od prvog reda?
>
> **[4:05](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=245)** Pa omogućava da se razbiju trenutne vrednosti fleka.
>
> **[4:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=248)** Flek je trenutno postavljen na jednu nulu 100.
>
> **[4:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=251)** Dakle, ova deklaracija kaže, ako ima dovoljno prostora, neka svaka stavka bude 100 piksela.
>
> **[4:17](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=257)** Ako ne, nemojte se smanjivati.
>
> **[4:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=260)** Pošto smo proglasili flek-vrap, dve stavke koje se nisu uklopile u prvi red umotane su u drugi red.
>
> **[4:27](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=267)** Flek-raste vrednost jednog kaže, ako postoji dodatni prostor, primenite ga ravnomerno na trenutni broj stavki u tom redu.
>
> **[4:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=275)** A pošto postoje samo dve stavke, pet i šest, u drugom redu, ima više dodatnog prostora za distribuciju među fleksibilnim stavkama.
>
> **[4:42](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=282)** I zato su veći od četiri stavke u gornjem redu.
>
> **[4:42](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=282)** And that's why they're bigger than the four items in the top row.
>
> **[4:47](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=287)** Sada, ako promenimo smer flek-a u kolone, vrednosti flek-a Now if we change the flex direction to columns, the flex values will now apply to height instead of width.
>
> **[4:50](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=290)** će se sada primenjivati na visinu umesto na širinu.
>
> **[4:54](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=294)** Da bi se kolone završile, potrebno nam je podesiti vrednost To make the columns wrap, we need set a height value.
>
> **[4:57](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=297)** visine.
>
> **[5:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=300)** So when we set the flex-direction to column, Dakle, kada smo postavili flek-smer na kolonu, ista pravila the same rules apply, except for now, važe, osim za sada, to se primenjuje na vrednosti visine.
>
> **[5:04](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=304)** it's being applied to the height values.
>
> **[5:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=307)** We can also apply different flex values Takođe možemo da primenimo različite vrednosti fleksa na pojedinačne stavke fleksa kako bismo ih različito to individual flex items to size them differently from each other.
>
> **[5:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=311)** dimenzionisali.
>
> **[5:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=313)** We'll discuss these additional options in the next lesson.
>
> **[5:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=313)** Razgovaraćemo o ovim dodatnim opcijama u sledećoj lekciji.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** v3c (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [pripoveda (1)

#### Sizing multiple flex items
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980&t=0)** - [Instructor] In the last lesson, we talked about sizing flex items using the flex property.
>
> **[0:05](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980&t=5)** But we applied the same flex values to all of the items within the container.
>
> **[0:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980&t=10)** But sometimes you may want to have flex items that are not all the same size.
>
> **[0:15](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980&t=15)** The numerical value used for flex-grow represents a ratio.
>
> **[0:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980&t=19)** If you want all items to grow by the same amount, then set the flex-grow to 1.
>
> **[0:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980&t=24)** But if you want the items to be different sizes, then define different flex-grow values for the individual flex-items.
>
> **[0:31](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980&t=31)** For example, if one item is set to a flex-grow value of 1, and another is set to a flex-grow value of 2, that doesn't mean that one will be twice as big as the other.
>
> **[0:42](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980&t=42)** Flex looks at the flex-basis value first and applies it if there is space.
>
> **[0:47](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980&t=47)** Any extra space is what gets divided among the flex-grow distribution.
>
> **[0:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980&t=53)** So the item with the flex-grow value of 1 will get one third of the extra space, and the other will get two thirds of the extra space.
>
> **[1:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980&t=62)** And that space is added in addition to the amount of space the item already occupies, which was determined by the flex-basis value.
>
> **[1:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980&t=72)** For a more even space distribution setting the flex spaces to zero will reduce the elements to its smallest possible width, depending on the content.
>
> **[1:21](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980&t=81)** And then, the flex-grow space distribution will be based on all the available space rather than just the extra space.
>
> **[1:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980&t=89)** Flex-grow can be used with any numeric value, such as 45 or 93 or 1.7, but personally I find it easier to just stick with simple numbers.
>
> **[1:39](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980&t=99)** When we create our page layout with Flexbox, we'll be incorporating different flex sizes for different flex-items.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (1), we talked about (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** find (1)
> **Versions:** 1.7 (1)
> **Speakers:** - [instructor] (1)

#### The order property
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-order-property-26968366?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-order-property-26968366?u=76281980&t=0)** - [Narrator] Another new Flexbox property is order, which is used to change the layout order of flex items without changing the HTML.
>
> **[0:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-order-property-26968366?u=76281980&t=8)** This is something that was previously unavailable with traditional layout techniques, but note this will only visually change the order.
>
> **[0:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-order-property-26968366?u=76281980&t=16)** To make sure the content itself is still accessible, the source order of the content in the HTML should make sense.
>
> **[0:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-order-property-26968366?u=76281980&t=23)** The order value is defined by a single number.
>
> **[0:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-order-property-26968366?u=76281980&t=26)** By default, all flex items have an order value of zero and are laid out in the same order as they appear in the HTML.
>
> **[0:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-order-property-26968366?u=76281980&t=34)** When using order, the flex container will lay out its flex items starting from the lowest number.
>
> **[0:40](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-order-property-26968366?u=76281980&t=40)** You can also use negative values to make items appear earlier than items set at zero.
>
> **[0:46](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-order-property-26968366?u=76281980&t=46)** Again, this is only for making a visual change.
>
> **[0:49](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-order-property-26968366?u=76281980&t=49)** Make sure the content in the HTML follows a logical order.
>
> **[0:54](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-order-property-26968366?u=76281980&t=54)** In the floats layout exercise, we weren't able to align the navigation before the main content without changing the HTML.
>
> **[1:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-order-property-26968366?u=76281980&t=61)** So instead, we added a skip navigation link to increase accessibility for keyboard and screen reader users to avoid cycling through a potentially long list of navigation links with the order property.
>
> **[1:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-order-property-26968366?u=76281980&t=73)** We'll be able to keep the logical order in the HTML, but change the visual order with CSS.

> [!info]- Semantic Content
>
> **Env Vars:** html (6), css (1)
> **CLI Commands:** make (4)
> **Code Keywords:** default, (1)
> **Speakers:** - [narrator] (1)

#### Nesting flex containers
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=0)** - [Insructor] Flekbok se prvenstveno koristi za raspored flek stavki u jednoj osi.
>
> **[0:05](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=5)** Ali možemo stvoriti izgled redova i kolona tako što ćemo omotati stavke fleka.
>
> **[0:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=9)** Takođe možemo gnezditi fleksibilne kontejnere kako bismo kreirali složenije rasporede.
>
> **[0:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=13)** Flek stavka takođe može biti flek kontejner za svoje dečije elemente.
>
> **[0:18](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=18)** Flek stavke u ugnežđenom flek kontejneru mogu biti raspoređeni duž iste ili suprotne ose svog roditeljskog flek kontejnera.
>
> **[0:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=26)** Pogledajmo primer u CodePen-u.
>
> **[0:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=29)** U ovom primeru, kontejner za omotavanje stranice ima dva potomečka elementa, bočni i glavni element.
>
> **[0:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=35)** Glavni element takođe sadrži neke dečije elemente, ali do toga ćemo doći malo kasnije.
>
> **[0:40](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=40)** Počnimo dodavanjem prikaza: flek na stranicu-vrap.
>
> **[0:45](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=45)** Sada su bočni i glavni elementi fleksibilni stavke unutar kontejnera za omotavanje stranica i raspoređeni su rame uz rame u redovima.
>
> **[0:54](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=54)** Sada, hajde da definišemo veličinu bočnih i glavnih elemenata sa svojstvima flek.
>
> **[0:59](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=59)** Hajde da dodamo stilove u liniji 9 i liniji 14.
>
> **[1:04](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=64)** Glavne osobine rastu vrednost je postavljena tri puta veća od strane raste vrednost.
>
> **[1:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=69)** Zato što želim da bude veći od strane.
>
> **[1:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=72)** Za oba elementa vrednost skupljanja je podešena na jedan.
>
> **[1:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=74)** Tako da se mogu smanjiti za isti iznos.
>
> **[1:17](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=77)** Flek-osnova je postavljena na nulu, tako da veličina stavke nije uključena u obračun kada se radi raspodela prostora sa flek-rast.
>
> **[1:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=86)** Tada glavni element takođe ima dečije elemente, ove tri kutije sa sadržajem.
>
> **[1:31](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=91)** Hajde da ovo pretvorimo u fleksibilni kontejner, osim što ćemo ih ovog puta poravnati u kolonama umesto u redovima.
>
> **[1:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=98)** Hajde da dodamo displej: flek na glavni element, dole na liniji 15.
>
> **[1:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=103)** Po defaultu, oni će se rasporediti u redove, ali želim da budu u kolonama, pa hajde da dodamo kolonu flek-pravac.
>
> **[1:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=111)** Sada želim da ove kolone imaju jednaku visinu unutar svog kontejnera.
>
> **[1:55](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=115)** Hajde da podesite veličinu stavki sa flek-om.
>
> **[1:58](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=118)** Ove kutije su sadržane u elementu odeljka.
>
> **[2:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=121)** Ovde na liniji 20 je mesto gde ćemo dodati flek-stil.
>
> **[2:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=127)** Obratite pažnju na to kako, iako smo koristili isti odnos za fleks-scroll i flex-shrink, oba su postavljena na jedan, prvi okvir sa sadržajem je veći od druga dva.
>
> **[2:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=136)** To je zato što auto, veličina koja je trenutno podešena za flek-bazu, uzima u obzir veličinu sadržaja, a zatim dodaje deo raspoloživog prostora postojećoj veličini sadržaja.
>
> **[2:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=148)** Dakle, ako podesite flek-bazu na nulu umesto kao što smo uradili sa spoljnim flek kontejnerom, trenutna veličina sadržaja nije uključena u proračun.
>
> **[2:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=158)** Sada su sve tri kutije iste visine.
>
> **[2:42](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=162)** Takođe, zapamtite, pošto smo promenili smer flek-u u kolonu, vrednosti flek-baze se primenjuju na visinu umesto širine.
>
> **[2:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=171)** Postoji važna stvar koju treba napomenuti, ako je ukupni prostor kontejnera manji od sadržaja, onda će se samo smanjiti koliko god može bez obrezivanja sadržaja.
>
> **[3:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=180)** Recimo, visina preloma stranice je 350 umesto toga.
>
> **[3:05](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=185)** Ja ću ići ovde i promeniti vrednost visine na liniji 3, sada će stavke pokušati da se smanji proporcionalno, ali prvi okvir sa sadržajem je veći od druga dva kako bi se izbeglo prelivanje sadržaja.
>
> **[3:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=200)** Gniježđenje fleksibilnih kutija unutar drugih fleksibilnih kutija omogućava kreiranje složenijih rasporeda.
>
> **[3:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=206)** Ali Flekbok je jednodimenzionalan po dizajnu.
>
> **[3:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=208)** So, while we're creating the looks of rows and columns, Dakle, dok stvaramo izgled redova i kolona, još uvek we're still laying out the items on a single axis.
>
> **[3:31](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=211)** postavljamo stavke na jednoj osi.
>
> **[3:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=214)** Rows in the outer flex container Redovi u spoljnom kontejneru flek i kolone u unutrašnjem and columns in the inner flex container.
>
> **[3:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=216)** kontejneru flek.

> [!info]- Semantic Content
>
> **Speakers:** - [insructor] (1)

#### Exercise: Build a layout with Flexbox, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=0)** - [Speaker] Since we're using the same HTML for all three layout exercises, let's start by switching to the flexbox.css file.
>
> **[0:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=10)** This gives us a fresh place to start with just the base presentational styles and no float CSS from the previous layout exercise.
>
> **[0:18](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=18)** Now we can decide which element we can make our flex container.
>
> **[0:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=23)** Since the container Div wraps all of the content, we'll use this as the flex container.
>
> **[0:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=29)** Let's close the floats.css file and open the flexbox.css file instead.
>
> **[0:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=36)** The first thing we'll do is initiate the flexbox layout.
>
> **[0:40](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=40)** In the existing container block.
>
> **[0:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=43)** Let's add display set to flex.
>
> **[0:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=51)** We also want the items to wrap, so we can style the header and footer on their own row and the nav, main, and side as another row.
>
> **[0:59](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=59)** So we could use the flex-wrap property set to wrap.
>
> **[1:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=70)** Then save the file and see how it looks in the browser.
>
> **[1:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=73)** By default, the width of a flex item is equal to its content and they line up side-by-side in a row.
>
> **[1:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=80)** But since the main area has a lot of content, it spans the entire width.
>
> **[1:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=84)** Let's use the flex property to size them.
>
> **[1:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=88)** Back in the CSS file.
>
> **[1:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=90)** We'll start by sizing the header and footer.
>
> **[1:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=93)** We want both of these areas to span the width of the container.
>
> **[1:39](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=99)** So for the flex value, I'll set it to one, zero, 100%.
>
> **[1:49](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=109)** By setting the flex bases to 100%, we're setting the initial value to equal 100% of its container.
>
> **[1:56](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=116)** This will make it the only item in the row, but for good measure, we set the flex grow value to one, to apply any extra space to this item.
>
> **[2:05](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=125)** The flex shrink value of zero will ensure that it won't shrink to a size less than 100% set with the flex bases value.
>
> **[2:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=133)** Let's add this style to the footer selector as well.
>
> **[2:21](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=141)** Then save the file so we can see the changes in the browser.
>
> **[2:25](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=145)** The header and footer now span the entire width of the container.
>
> **[2:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=149)** Next, we'll resize the remaining blocks.
>
> **[2:32](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=152)** Just like the layout exercise, we'll make the nav sidebar the same size and align them to the left and right sides of the container with the main content in the middle.
>
> **[2:42](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=162)** Let's go back to the CSS file.
>
> **[2:45](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=165)** With the flex property, we can combine fixed values with flexible values to retain some precise control over the sizing of elements without giving up flexibility.
>
> **[2:55](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=175)** For the nav, I'll set the flex value to one, zero, 200 pixels.
>
> **[3:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=187)** The flex grow value of one will ensure that extra space will be distributed evenly.
>
> **[3:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=192)** The flex shrink value of zero will keep the flex item from shrinking any smaller than 200 pixels, which is the flex space's value.
>
> **[3:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=199)** Let's add this to the aside selector as well.
>
> **[3:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=203)** To make it the same size as the nav.
>
> **[3:25](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=205)** (clicks loudly) For the main content, I want it to be bigger.
>
> **[3:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=214)** So let's set the flex property value to one, one, 500 pixels.
>
> **[3:40](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=220)** The flex grow value of one will ensure that extra space will be distributed evenly.
>
> **[3:45](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=225)** The flex shrink value is set to one, because for this flex item, we want it to shrink for smaller screens.
>
> **[3:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=231)** The third value is the flex bases set to 500 pixels.
>
> **[3:56](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=236)** Let's save the file and see how the different flex settings will work in the browser.
>
> **[4:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=242)** Even though I use a fixed value for the flex bases, the flex grow property adds the ability to create a flexible layout by proportionally distributing the extra space on larger screens.
>
> **[4:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=254)** Also, all of the flex items in the same row have the same column heights equal to the flex item with the most content.
>
> **[4:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=262)** We can tell because the background color spans the full height of the row.
>
> **[4:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=268)** This was something we couldn't achieve using float-based layouts without complicated hacks.
>
> **[4:32](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=272)** Right now, the flex container is the same size as the browser viewport.
>
> **[4:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=278)** The total of the flex bases widths for the nav, main, and sidebar is equal to 900 pixels.
>
> **[4:44](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=284)** So when the container or viewport is larger than 900 pixels, the extra space is distributed evenly among the flex items.
>
> **[4:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=293)** But when it's smaller than 900 pixels, the items that don't fit will wrap to the next line.
>
> **[5:04](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=304)** The nav and sidebar sections are set to a flex shrink value of zero, meaning they will not shrink, so when the screen gets too narrow, the sidebar will wrap to the next line because it can't fit in the same row while maintaining the width-defined, width of flex basis value of 200 pixels, the nav sidebar and main sections also have a flex grow value set to one.
>
> **[5:31](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=331)** When the sidebar wraps to the next line, it spans all the way across because now it's the only item in that row, so all the extra space gets applied to it.
>
> **[5:42](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=342)** For the nav and main sections, it will redistribute any extra space between these two areas.
>
> **[5:49](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=349)** Once you get to a smaller viewport size where the nav and main content doesn't fit in the same row, the main section will wrap to the next line, and all the sections will be displayed in one column.
>
> **[6:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=369)** So I'm basically creating a responsive layout without media queries.
>
> **[6:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=376)** In the previous layout exercise with floats, we added a width to the whole page layout and center aligned it.
>
> **[6:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=382)** If you'd like to do that with this layout as well, keep your project files open and join me in the next exercise.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), default, (1)
> **CLI Commands:** make (4)
> **Env Vars:** css (3), html (1)
> **File Paths:** flexbox.css (2), floats.css (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** open the (1)
> **Analogies:** just like (1)
> **Speakers:** - [speaker] (1)

#### Exercise: Build a layout with Flexbox, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=0)** - [Speaker] Continuing from the previous layout exercise, let's add a width to the container and center align it so the content doesn't span all the way across on larger screens.
>
> **[0:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=11)** We could use the same technique as with the float layout exercise, use margin set to auto, to center align it.
>
> **[0:18](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=18)** But since this is a flexbox layout, let's try using a flex-based property instead.
>
> **[0:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=24)** Let's go back to the index.html file.
>
> **[0:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=28)** Flex items are aligned horizontally with the justify content property, which is added to the flex-container.
>
> **[0:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=36)** Looking at the HTML, let's decide which element to apply this style to.
>
> **[0:42](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=42)** We can't add it to the container div because we want to align the whole container, not the flex items within, however the container is nested within the body element.
>
> **[0:56](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=56)** This means, we can use body as the flex-container, which would then in turn make the container div its flex item.
>
> **[1:04](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=64)** Remember, you can nest flex-containers within another flex container.
>
> **[1:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=69)** Let's switch over to the flexbox CSS file.
>
> **[1:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=74)** Using the body selector, add the display property set to flex.
>
> **[1:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=79)** Now we'll be able to align the container div as a flex item.
>
> **[1:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=89)** Add the justify-content property, set to center.
>
> **[1:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=94)** If we leave this as is, we won't see a change because we still need to define the size of the container like we did with the float exercise.
>
> **[1:46](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=106)** So scroll down to the container style block and we'll add the max width property.
>
> **[1:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=113)** (clicks loudly) I'll set it to 1200 pixels for this layout as well.
>
> **[2:05](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=125)** Save the file and go back to the browser and refresh to see the changes.
>
> **[2:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=130)** Now, when the browser viewport is wider than 1200 pixels, the container in its content doesn't span the whole width of the page.
>
> **[2:18](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=138)** It maxes out at 1200 pixels and stays centered.
>
> **[2:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=142)** When it's smaller, the different sections will still grow or shrink according to its flex values.
>
> **[2:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=157)** In the float exercise, we added the width to the container first, but if you use flexible sizing, it doesn't matter if you added at the beginning or at the end.
>
> **[2:46](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=166)** The items inside of the container will always adjust based on the container's width.
>
> **[2:58](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=178)** This is just one way to use Flexbox for page layouts.
>
> **[3:03](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=183)** Another option is to treat each row as its own flex-container rather than using flex-wrap.
>
> **[3:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=188)** No two projects are the same, and there are often different ways to do the same thing.
>
> **[3:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=193)** Take some time to experiment and practice.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), switch (1)
> **Env Vars:** html (1), css (1)
> **Cross-References:** go back to (2)
> **Non-Speech:** (typing loudly) (2)
> **File Paths:** index.html (1)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)


### 4. Grid

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Grid vs. Flexbox
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=0)** - [Narator] Glavna razlika između Grid i Flekbok je Flekbok je dizajniran za jednodimenzionalne rasporede ili red ili kolonu.
>
> **[0:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=8)** Ali, kao što smo videli u našoj poslednjoj vežbi rasporeda, postoje načini da koristite Flekbok za kreiranje izgleda redova i kolona bilo omotavanjem flek stavki ili gnežđenjem flek kutija.
>
> **[0:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=19)** Ali čak i sa ovim tehnikama flek i dalje radi samo u jednoj dimenziji.
>
> **[0:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=23)** Iako ovo nije nužno loša stvar, Grid je generalno bolji za rad sa redovima i kolonama u isto vreme.
>
> **[0:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=30)** Za to je dizajniran.
>
> **[0:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=33)** Na primer, Grid kreira rasporede koji se poravnavaju duž obe dimenzije čak i ako kutije nisu iste veličine ili u istom položaju.
>
> **[0:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=41)** U rasporedu Flekbok-a, svaki red ili kolona poravnava svoje stavke nezavisno od drugih redova ili kolona.
>
> **[0:48](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=48)** Između ova dva modela, Grid je noviji, ali sada kada su oba modula rasporeda VKSNUMKSC preporuke to ne znači da će Grid zameniti Flekbok.
>
> **[0:57](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=57)** Svaki od njih ima svoje specijalitete.
>
> **[1:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=60)** Iako obe ove metode mogu biti korisne za rasporede, Flekbok je odličan za raspodelu prostora stavki unutar iste ose.
>
> **[1:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=67)** Veliki slučaj upotrebe bi bio za horizontalnu navigaciju, jer su stavke raspoređene u jednom pravcu.
>
> **[1:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=74)** Mreža je idealna za rasporede koji zahtevaju veću kontrolu sa redovima i kolonama.
>
> **[1:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=80)** Takođe se mogu koristiti zajedno.
>
> **[1:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=82)** For example, you may create the Na primer, možete kreirati raspored stranice pomoću mreže, page layout with Grid, but align ali poravnati horizontalnu navigaciju sa Flekbok-om.
>
> **[1:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=86)** your horizontal nav with Flexbox.
>
> **[1:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=89)** The two layout modules do share Dva modula rasporeda dele neke zajedničke karakteristike i some common features and properties.
>
> **[1:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=90)** svojstva.
>
> **[1:32](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=92)** So as we go through the specification Dakle, dok prolazimo kroz specifikaciju, neki delovi će se some parts of it will feel familiar osećati poznato, jer smo upravo saznali za Flekbok.
>
> **[1:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=96)** since we just learned about Flexbox.

> [!info]- Semantic Content
>
> **Env Vars:** vksnumksc (1)
> **Documentation:** specification (1)
> **Analogies:** for example (1)
> **Speakers:** - [narator] (1)

#### Grid, grid systems, and CSS Grid
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=1)** - [Instruktor] Pre nego što zaronimo u raspored CSS mreže, Hajde da pređemo na neke potencijalno zbunjujuće pojmove.
>
> **[0:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=7)** mreža, mrežni sistem i CSS mreža.
>
> **[0:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=10)** Mreža je u osnovi obrazac, koji koriste grafički i veb dizajneri da postroje elemente dizajna kako bi pomogli u stvaranju konzistentnog protoka i simetričnih rasporeda.
>
> **[0:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=20)** Rešetke su podeljene na jednake širine i ravnomerno raspoređene kolone.
>
> **[0:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=24)** Ponekad se redovi dodaju kao vodič, kako bi se komponente poredale i horizontalno.
>
> **[0:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=30)** Oluci, prostor između redova ili kolona, obično se dodaju kako bi se omogućio dosledan razmak između kolona.
>
> **[0:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=38)** Komponente stranice su zatim raspoređene unutar kolona i mogu se protezati preko jedne ili više kolona.
>
> **[0:45](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=45)** Postoje različiti načini za definisanje mreže, ali uobičajeni raspored za veb stranice je da koristite mrežu jednakih kolona KSNUMKS. KSNUMKS je lako deljiv sa dva, tri, četiri i šest, što olakšava kreiranje konzistentnih responzivnih dizajna.
>
> **[1:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=60)** Rasporedi zasnovani na mreži bili su uobičajeni u štampanju i veb dizajnu, pre nego što je uveden modul CSS mrežnog rasporeda.
>
> **[1:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=67)** Prilikom prevođenja ovih dizajna na veb stranice, jedna tehnika je postavljanje svake komponente stranice blok po blok i njihovo dimenzionisanje u skladu s tim.
>
> **[1:15](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=75)** Slično onome što smo radili sa našim prethodnim vežbama rasporeda.
>
> **[1:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=80)** Iako nema ništa loše u ovom pristupu, stvaranje CSS mrežnog sistema, počelo je da postaje popularno, posebno za složenije rasporede.
>
> **[1:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=88)** U mrežnom sistemu, kolone i oluci se ponovo kreiraju pomoću CSS-a - Gomila unapred dizajniranih CSS skupova pravila je definisana i vezana za imena klasa specifična za mrežu.
>
> **[1:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=98)** Ta imena klasa se koriste za raspored komponenti stranice.
>
> **[1:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=101)** Na primer, ako bih želeo da napravim komponentu koja se protezala preko četiri kolone, a drugu koja se protezala preko osam kolona, koristio bih klasu koja se zove cal-4 i cal-8.
>
> **[1:52](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=112)** Ili nešto slično.
>
> **[1:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=113)** Kako je koncept CSS mrežnih sistema rastao u popularnosti, pojavila su se mnoga rešenja nezavisnih proizvođača.
>
> **[1:59](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=119)** Neki su ponudili osnovni CSS mrežni šablon, dok su drugi kreirali okvire u punom obimu.
>
> **[2:04](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=124)** Jedan od najpopularnijih okvira je Bootstrap.
>
> **[2:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=128)** Iako ovaj okvir uključuje unapred napisane komponente, kao što su značke, dugmad, kartice i još mnogo toga, sam okvir je izgrađen na mrežnom sistemu.
>
> **[2:18](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=138)** Čak i pre nego što je uvedena CSS mreža, bilo je nekih prednosti i mana koje treba uzeti u obzir kada se koriste okviri nezavisnih proizvođača, kao što su naduvavanje koda ili ograničenja i prilagođavanja.
>
> **[2:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=148)** Ali sada kada je CSS mreža dostupna, postalo je mnogo lakše kreirati redove i kolone sami.
>
> **[2:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=154)** Nećemo pokrivati okvire na ovom kursu, ali ako planirate da ga koristite, preporučio bih da uradite neko istraživanje o I would recommend doing some research on the pros and cons of CSS frameworks, and checking to see prednostima i nedostacima CSS okvira i proverite da li je if it's been updated to the latest CSS layout techniques.
>
> **[2:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=163)** ažuriran na najnovije tehnike CSS rasporeda.

> [!info]- Semantic Content
>
> **Env Vars:** css (14), ksnumks (2)
> **Speakers:** - [instruktor] (1)

#### Create a basic Grid layout
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=0)** - [Instruktor] Da biste započeli sa Grid-om, prvo se mora definisati kontejner mreže.
>
> **[0:04](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=4)** Slično rasporedu flekbok-a, mreža-kontejner je roditeljski element, a direktni potomci elementi su stavke mreže.
>
> **[0:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=11)** Da biste definisali kontejner mreže, koristite osobinu prikaza.
>
> **[0:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=14)** I mreže i inline-grid vrednosti će označiti potomke elemente kao stavke mreže.
>
> **[0:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=20)** Sa mrežnom vrednošću, kontejner će biti prikazan kao element na nivou bloka i slagati će se na vrh drugih mrežnih kontejnera.
>
> **[0:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=28)** Sa inline-grid vrednosti, grid stavke će i dalje prikazati u koloni, ali osim ako nije drugačije definisano, grid-kontejner i grid stavke će biti iste širine kao i njihov sadržaj.
>
> **[0:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=38)** Mreža-kontejner će takođe prikazati inline, i da će se postrojiti sa drugim inline-grid kontejnera.
>
> **[0:45](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=45)** Da biste kreirali kolone i redove, koristite svojstvo kolona šablona mreže i svojstvo redova šablona mreže definisano u kontejneru mreže.
>
> **[0:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=53)** Vrednosti se mogu deklarisati sa procentom ili bilo kojom jedinicom dužine CSS-a.
>
> **[0:59](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=59)** Hajde da otvorimo primer u CodePen-u.
>
> **[1:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=62)** Počnimo dodavanjem u mrežu prikaza.
>
> **[1:05](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=65)** Ovde, na liniji osam, hajde da odkomentarišemo ovo, i dodamo stil.
>
> **[1:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=69)** Trenutno nećemo videti nikakve promene, ali možemo početi da kreiramo naše redove i kolone.
>
> **[1:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=74)** Hajde da dodamo u imovinu kolona šablona mreže.
>
> **[1:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=79)** Ovde imamo definisane tri vrednosti, tako da to znači tri kolone.
>
> **[1:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=83)** Dakle, stavke četiri i pet automatski počinju u novom redu, iako još uvek ima prostora u kontejneru.
>
> **[1:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=90)** Samo ću proširiti ovaj panel tako da možemo imati kod u jednoj liniji.
>
> **[1:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=95)** Takođe možemo definisati redove sa redovima šablona mreže.
>
> **[1:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=98)** Postoje dve vrednosti, tako da to znači dva reda.
>
> **[1:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=101)** Takođe, primetite da stavke mreže ne pokušavaju automatski da popune dodatni prostor.
>
> **[1:47](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=107)** Sada, recimo da se predomislim, i umesto toga želim četiri kolone.
>
> **[1:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=111)** Mogao bih samo da dodam još jednu vrednost, ali postoji još jedan način.
>
> **[1:54](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=114)** Možemo koristiti funkciju ponavljanja.
>
> **[1:57](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=117)** Da biste koristili funkciju ponavljanja, počnite sa ponavljanjem i zagradama, a umesto pisanja 100 piksela četiri puta, počećemo sa količinom kolona, četiri, zatim zarezom, a zatim veličinom kolona.
>
> **[2:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=131)** Dakle, u ovom primeru, 100 piksela.
>
> **[2:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=134)** Funkcija ponavljanja se takođe može koristiti za ponavljanje svih ili samo dela liste numera.
>
> **[2:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=139)** Ovo bi bilo korisno za podešavanje različitih vrednosti za svaku kolonu ili red.
>
> **[2:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=143)** Različite jedinice se takođe mogu koristiti zajedno.
>
> **[2:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=146)** Na primer, mogu da podesim svoju prvu kolonu na 25%, a zatim se preostala tri mogu podesiti na 100 piksela.
>
> **[2:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=155)** Prvo ću dodati 25% i razmak, a preostale tri kolone mogu se podesiti na 100 piksela.
>
> **[2:46](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=166)** Recimo da sam želeo da napravim mrežu fleksibilnom i popunim prostor.
>
> **[2:49](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=169)** Mogu da ažuriram vrednost ponavljanja na četiri kolone, svaka na 25%.
>
> **[3:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=181)** Sada, oni popunjavaju dodatni prostor.
>
> **[3:03](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=183)** Takođe možemo da koristimo GAP da dodamo oluke između kolona i redova, ali sada imamo mali problem.
>
> **[3:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=191)** Oluk izaziva stavke da se prelivaju horizontalno.
>
> **[3:15](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=195)** Izgleda da ne utiče na to vertikalno, jer dodatni prostor samo čini stavke mreže dužim.
>
> **[3:21](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=201)** Širina kolone od četiri stavke, podešena na 25% svaki, sada zauzima 100% svog kontejnera, tako da nema prostora za GAP.
>
> **[3:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=210)** Mogao bih da smanjim veličinu kolone i koristim procenat za oluk, ali mreža je uvela novu fleksibilnu jedinicu dužine koju možemo koristiti umesto da radimo sve ove procentualne proračune.
>
> **[3:42](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=222)** FR je fleksibilna jedinica, koja predstavlja delić raspoloživog prostora u kontejneru mreže.
>
> **[3:48](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=228)** Dakle, hajde da ažuriramo kolone šablona mreže i podesite ga na jedan FR četiri puta umesto toga.
>
> **[3:56](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=236)** Ovo će sada podeliti mrežu na četiri jednake staze.
>
> **[3:59](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=239)** I, sada, GAP radi sasvim dobro sa vrednošću piksela.
>
> **[4:03](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=243)** Pošto je FR frakcija, ona deli preostali prostor i raspoređuje ga u skladu s tim.
>
> **[4:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=249)** Takođe možemo koristiti FR jedinicu za kreiranje kolona i redova različitih veličina.
>
> **[4:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=252)** of different sizes.
>
> **[4:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=254)** Dakle, hajde da podesite prvu kolonu na dva FR izvan So, let's set the first column to two FR outside of the repeat function, funkcije ponavljanja, a zatim, u funkciji ponavljanja, and then, in the repeat function, we'll bring it back down to two columns vratićemo je na dve kolone po jednom FR.
>
> **[4:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=264)** at one FR each.
>
> **[4:27](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=267)** Vratili smo se na tri kolone, ali prva je dvostruko veća od We're back down to three columns, but the first one is twice as big as the other two.
>
> **[4:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=270)** druge dve.
>
> **[4:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=273)** Ako već niste primetili, mreža ima jednostavniji pristup If you haven't already noticed, grid has a more straightforward approach kreiranju redova i kolona, jer je to prilično ono za šta je to creating rows and columns, since this is pretty much what it was created for.
>
> **[4:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=278)** stvorena.
>
> **[4:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=281)** U poređenju sa flekbok-om, ovo je prilično osnovni In comparison to flexbox, this is a pretty basic layout, raspored, tako da nije baš očigledno da li je jedan bolji so it's not really obvious if one is better than the other od drugog u ovom scenariju, ali lepa stvar u vezi sa mrežom in this scenario, but the nice thing about grid je da možemo proglasiti različite veličine za redove i is we can declare different sizes for rows and columns kolone u istoj osobini, umesto da dodajemo vrednost svakoj in the same property, rather than adding a value to each individual item.
>
> **[4:54](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=294)** pojedinačnoj stavci.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (1), for. (1)
> **Env Vars:** gap (3), css (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instruktor] (1)

#### Columns, rows, and gutters with Grid
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=0)** - [Instructor] In the last lesson, we were able to create a basic grid with just a few properties, gap, grid template columns, and grid template rows.
>
> **[0:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=8)** Well, there's a little more to know about these properties.
>
> **[0:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=11)** Gap is used for creating grid gutters, and is shorthand for row-gap and column-gap.
>
> **[0:17](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=17)** One value sets the gutter for both rows and columns, and two values sets the gutter for the rows then the columns.
>
> **[0:25](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=25)** Gap can be used with any length unit, calc function, or a percentage, but not an FR unit.
>
> **[0:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=33)** And one last thing about gap.
>
> **[0:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=35)** Originally, the grid layout defined the gap property as grid gap and the longhand properties as grid row gap and grid column gap.
>
> **[0:44](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=44)** The property was updated to be used for both Flexbox and grid, but right now gap is only supported for Flexbox in Firefox.
>
> **[0:52](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=52)** Gap for grid layouts and the previous grid prefixed properties are supported in all modern browsers.
>
> **[0:59](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=59)** To check for current browser support for specific CSS properties, you can do a search for the property on [canIuse.com](https://canIuse.com).
>
> **[1:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=69)** In the last lesson, we created columns and rows with various types of values using the grid template columns and grid template rows property.
>
> **[1:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=76)** We used pixels, length units, and percentages.
>
> **[1:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=79)** We also tried out the new grid unit fr, a flexible unit which represents a fraction, and the repeat function, making it easier to make multiple columns in rows.
>
> **[1:32](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=92)** Rows and columns can also be defined with the MinMax function to set a range greater than or equal to a minimum value and less than or equal to a maximum value.
>
> **[1:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=101)** For example, if I set the grid template rows value to 100 pixels, it means the row height will equal exactly 100 pixels.
>
> **[1:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=111)** But if I use the min-max function and set it to 100 pixels and auto, the minimum row height will be a hundred pixels.
>
> **[1:59](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=119)** But if the content is longer, it will expand to fit.
>
> **[2:03](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=123)** You can even use the MinMax function as a value of the repeat function.
>
> **[2:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=128)** In this example, we've defined the height for two rows, which will both have a minimum value of 100 pixels and a maximum value of auto.
>
> **[2:17](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=137)** You can get quite advanced and create specific conditions with the repeat notation.
>
> **[2:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=143)** All of the possible values are listed here in the Mozilla developer networks documentation.
>
> **[2:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=150)** Let's go to the previous Code Pen example and try out the MinMax value.
>
> **[2:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=153)** I'll change the grid template rows to a MinMax of a hundred pixels in auto.
>
> **[2:42](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=162)** The syntax for MinMax is MinMax, no space, all lowercase.
>
> **[2:47](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=167)** And in the parentheses I'll set it to a hundred pixels as my minimum value and auto as my max.
>
> **[2:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=173)** I'm also going to use the repeat notation, so I can define the size for both rows.
>
> **[3:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=180)** So I'm going to add in the repeat notation first, repeat with the parentheses, and then I want to define two rows followed by a comma, and then I'll copy this MinMax value and paste it into my repeat notation.
>
> **[3:15](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=195)** This won't look different from how it was before because the min value is the same as the value I set before.
>
> **[3:21](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=201)** But if I go up to the HTML panel and add in the extra content, we'll be able to see some changes.
>
> **[3:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=213)** Since the max value is set to auto, the row will expand to make space for the extra content.
>
> **[3:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=218)** But if I was to set the max to a smaller value, let's say 200 pixels, the content will now overflow because it's longer than the max value.
>
> **[3:50](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=230)** So it's probably best to leave it at auto.
>
> **[3:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=233)** The min-max value would be useful for when you want to send a minimum height or width for when there's not enough content to fill the grid item space, but keep it flexible for longer content.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (2)
> **Exercise Files:** template (6)
> **CLI Commands:** make (2)
> **Env Vars:** css (1), html (1)
> **Cross-References:** in the last (2)
> **Code Identifiers:** caniuse (1)
> **URLs:** [caniuse.com](https://caniuse.com) (1)
> **Tools:** firefox (1)

#### Positioning with Grid
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=0)** - [Ženski glas] Sada kada smo prešli na to kako da kreiramo mrežu i definišemo redove i veličine kolona, hajde da pričamo o tome kako da pozicioniramo stavke na mreži.
>
> **[0:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=8)** Mrežne linije dele mrežu na kolone i redove i numerisane su s leva na desno i odozgo na dno.
>
> **[0:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=14)** I vertikalne i horizontalne linije mreže počinju u jednom.
>
> **[0:18](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=18)** Za jezike s leva na desno kao što je engleski, linija jedan počinje na levoj strani mreže.
>
> **[0:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=24)** A stavka će obuhvatiti jednu mrežnu ćeliju, koja se završava na drugoj liniji.
>
> **[0:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=29)** Ako radite na jeziku s desna na levo, onda su linije mreže numerisane s desna na levo počevši sa desne strane.
>
> **[0:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=36)** Takođe možete koristiti negativan numerički indeks da biste upućivali na suprotni kraj mreže.
>
> **[0:42](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=42)** Podrazumevano, stavke se pojavljuju u istom redosledu kao i HTML unutrašnji smešten u jednu mrežnu ćeliju.
>
> **[0:48](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=48)** Možemo da promenimo položaj stavki mreže tako što ćemo odrediti početnu i završnu liniju sa sledećim svojstvima.
>
> **[0:55](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=55)** Početak mrežne kolone, kraj mrežne kolone, početak mrežnog reda i kraj mrežnog reda.
>
> **[1:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=60)** Ove osobine su skraćenica za mrežnu kolonu i mrežni red.
>
> **[1:05](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=65)** Do sada smo gledali svojstva koja se primenjuju na kontejner mreže kako bi definisali strukturu mreže.
>
> **[1:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=71)** Ove osobine zasnovane na položaju moraju se primeniti na specifične stavke mreže kako bi se odredilo njihovo postavljanje unutar mreže.
>
> **[1:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=79)** Ove osobine se koriste ne samo za postavljanje stavke mreže u određenu liniju mreže, već se mogu koristiti i za obuhvat jedne ili više ćelija mreže sa početnom i krajnjom vrijednošću.
>
> **[1:29](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=89)** Na primer, ako bih želeo da određena stavka mreže počne u drugoj koloni i da se proteže preko dve kolone, početna vrednost mrežne kolone bi bila dva.
>
> **[1:39](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=99)** Krajnja vrednost kolone mreže bi bila četiri.
>
> **[1:42](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=102)** Da biste to proglasili koristeći skraćenu vrednost, koristite mrežnu kolonu sa vrednošću dva za početak odvojen naprednom kosom crtom i četiri za krajnju vrednost.
>
> **[1:52](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=112)** Hajde da probamo ovo na primeru.
>
> **[1:55](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=115)** Uzećemo ovaj podrazumevani raspored blokova i koristiti postavljanje zasnovano na mrežnoj liniji da bismo kreirali ovaj izgled.
>
> **[2:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=121)** Prva stvar koju treba da uradimo je da odlučimo koliko redova i kolona nam je potrebno.
>
> **[2:06](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=126)** U željenom rasporedu nalaze se tri kolone i dva reda.
>
> **[2:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=132)** Hajde da otvorimo ovaj primer u CodePen-u.
>
> **[2:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=136)** Prva stvar koju ćemo uraditi je da ćemo dodati u mrežu šablona kolone i osobine redova.
>
> **[2:23](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=143)** Ovde sam koristio funkciju ponavljanja da bih dodao tri kolone i dva reda.
>
> **[2:27](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=147)** Pogledajmo sada prvu kutiju.
>
> **[2:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=150)** Želeli smo da počnemo od vrha i završimo na dnu.
>
> **[2:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=153)** Dakle, startna linija će početi u jedan, krajnja linija će biti jedan, dva, tri.
>
> **[2:40](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=160)** Tako da sam koristio n-ti selektor za odabir prve stavke, a takođe sam koristio skraćenicu mrežnog reda da podesim početnu vrednost na jedan i krajnju vrednost na tri.
>
> **[2:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=171)** Dakle, sledeće u željenom rasporedu, želeli smo da obuhvatimo ovu kutiju počevši odavde i završavajući ovde.
>
> **[2:55](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=175)** starting from here and ending here.
>
> **[2:58](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=178)** So to do so my start line is going to be one, two.
>
> **[2:58](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=178)** Dakle, da to uradim moja startna linija će biti jedan, dva.
>
> **[3:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=182)** And then my end line will be three, four.
>
> **[3:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=182)** A onda će moja krajnja linija biti tri, četiri.
>
> **[3:06](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=186)** So this is item two.
>
> **[3:06](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=186)** Dakle, ovo je tačka dva.
>
> **[3:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=188)** Let's go down to nth-child two.
>
> **[3:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=188)** Idemo dole na n-to dete dva.
>
> **[3:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=191)** With a start value of two ending at four.
>
> **[3:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=191)** Sa početnom vrednošću dva koja se završava na četiri.
>
> **[3:15](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=195)** And that's it.
>
> **[3:15](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=195)** I to je to.
>
> **[3:17](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=197)** Comparing this to using floats for layout, Upoređujući ovo sa korišćenjem plovaka za raspored, uspeli we were able to complete this fairly easily.
>
> **[3:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=199)** smo da to završimo prilično lako.
>
> **[3:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=202)** No extra container divs, Nema dodatnih kontejnerskih divova, nema kliringa plovaka.
>
> **[3:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=204)** no clearing floats.
>
> **[3:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=206)** Comparing this to the flex layout, Upoređujući ovo sa fleksibilnim rasporedom, takođe možemo we can also see how being able to videti kako mogućnost kontrole stavki mreže u redovima i control the grid items in both rows and columns kolonama samo čini malo jednostavnijim prilikom just makes it a little bit more straightforward postavljanja stavki u oba smera koje se protežu preko when laying out the items in both directions redova i kolona.
>
> **[3:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=217)** spanning across rows and columns.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** html (1)

#### Exercise: Build a layout with Grid
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=0)** - [Speaker] In our previous codepen exercise, we got some practice building a basic grid layout.
>
> **[0:05](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=5)** In this exercise, we're going to do the same, but take it a step further and create a 12-column grid system to lay out the page components.
>
> **[0:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=12)** Let's update the CSS file path to grid CSS and open the file.
>
> **[0:18](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=18)** (clicks loudly) The first thing we'll do is set up the dimensions.
>
> **[0:25](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=25)** In the container block, add display grid to define this div as the grid container.
>
> **[0:32](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=32)** (clicks loudly) Then we'll use grid template columns with the repeat function.
>
> **[0:46](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=46)** Inside the parentheses, let's set the first value to 12 for 12 columns, followed by a comma.
>
> **[0:53](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=53)** For the size value, we'll use the minmax function.
>
> **[0:58](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=58)** The space between the comma and the minmax isn't required, but I like to add it for readability.
>
> **[1:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=67)** For the minmax value, we'll set the first value, which is the minimum to zero.
>
> **[1:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=74)** When there's no content, an empty column will not be displayed.
>
> **[1:18](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=78)** Then add a comma and set the max value.
>
> **[1:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=82)** I'll use 1fr to make all 12 columns the same size.
>
> **[1:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=88)** Let's save the file and see how this looks in the browser.
>
> **[1:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=94)** There are currently only five-grid items, so they'll automatically fit into the first five columns.
>
> **[1:40](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=100)** Each will span one grid cell by default, the header and footer should span all the way across.
>
> **[1:47](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=107)** Just like the last exercise, we can use grid column to change their position and make them span across multiple columns.
>
> **[1:54](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=114)** The start value is going to be one, and the end value is going to be 13.
>
> **[1:58](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=118)** It kind of feels like the end value should be 12 since there are 12 columns.
>
> **[2:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=122)** But remember, the grid lines are numbered on the left and right side of the grid items.
>
> **[2:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=127)** For example, this last grid item is currently ending in line six, one, two, three, four, five, six.
>
> **[2:18](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=138)** Let's go back to the grid CSS file.
>
> **[2:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=142)** Starting with the header, add the grid column property, set to one for the start value, which is the left side.
>
> **[2:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=148)** Then add a forward slash followed by 13 for the end value.
>
> **[2:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=158)** Add the same style to the footer.
>
> **[2:42](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=162)** (clicks loudly)
>
> **[2:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=171)** Let's save this update and see how it looks in the browser.
>
> **[2:55](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=175)** The header and footer now span across all 12 columns, which currently equals the full width of the browser viewport.
>
> **[3:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=182)** For the remaining three-grid items, we can distribute them across the 12 columns by allocating three columns each to the nav inside bar, which leaves six columns for the main content.
>
> **[3:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=194)** Let's go back to the CSS file.
>
> **[3:17](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=197)** Let's scroll-up to the nav section and we'll add the grid column property.
>
> **[3:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=202)** And for the value, we'll start with one for the left-edge, followed by a forward slash and four for the end value.
>
> **[3:31](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=211)** This will make it span across the first three columns.
>
> **[3:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=215)** For the main section.
>
> **[3:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=217)** For the main section, we'll set the start grid column value to four.
>
> **[3:45](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=225)** This will make it line up right next to the nav.
>
> **[3:48](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=228)** Add the forward slash and the end value of 10 to make it span across the next six columns.
>
> **[3:56](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=236)** For the aside, we'll add the grid column property here as well.
>
> **[4:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=240)** The start value is going to be 10 to line up next to the main element and the end value will be 13 to line up to the right-end of the grid container.
>
> **[4:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=251)** Let's save this update and switch over to the browser.
>
> **[4:15](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=255)** And there you have it.
>
> **[4:16](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=256)** The nav, main, and sidebar sections are now distributed across our 12-column grid layout.
>
> **[4:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=262)** If you need to adjust the dimensions, just modify the grid column, start and end values.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (2), default, (1), switch (1)
> **CLI Commands:** make (5)
> **Env Vars:** css (4)
> **Cross-References:** go back to (2)
> **Analogies:** just like (1), for example (1)
> **Non-Speech:** (typing loudly) (2)
> **UI Navigation:** open the (1)
> **Exercise Files:** template (1)

#### Exercise: Create a sticky footer with Grid
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=0)** - [Instructor] When the overall page content is shorter than the height of the browser, we'll see empty space after the last page component.
>
> **[0:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=8)** But we also tend to expect a footer to be displayed at the bottom of the page.
>
> **[0:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=13)** But by default, any container element is only as tall as its content.
>
> **[0:17](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=17)** To make the footer stay at the bottom of the page, often referred to as a sticky footer.
>
> **[0:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=22)** We can use CSS grid to size the rows to fit the height of the view port.
>
> **[0:28](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=28)** Let's switch over to the grid CSS file.
>
> **[0:32](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=32)** All page content is added inside the body element, and even though it represents the browser view port, the height of the body element is the same as its content.
>
> **[0:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=41)** So the first style we need to add is height to the body element to make it expand the height of the view port.
>
> **[0:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=51)** It's common to add this style to both the HTML and body selector.
>
> **[0:54](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=54)** So let's create a new selector list.
>
> **[0:58](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=58)** I'm going to put it right above the body, starting with HTML comma body, add the left and right curly brackets, and we'll set the height to a hundred percent.
>
> **[1:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=70)** This will make the HTML and body elements span 100% of the view port height when the content is shorter than the view port.
>
> **[1:20](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=80)** If the content is longer, they will expand to match the height of the content.
>
> **[1:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=86)** Next, we'll add a height to the container.
>
> **[1:32](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=92)** We'll set this to a hundred percent as well to make the grid span the height of its parent element, the body element.
>
> **[1:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=103)** Let's save the file and see how this looks in the browser.
>
> **[1:47](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=107)** Now we can see that the grid container has spanned the full height of the browser view port.
>
> **[1:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=111)** The height of the rows automatically adjusts to fill the space.
>
> **[1:56](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=116)** However, a typical page layout tends to keep the header and footer sized to the height of their content.
>
> **[2:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=122)** This approach is more common than evenly distributing the extra space across all rows.
>
> **[2:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=127)** I'm going to zoom out a bit in my browser to show how the page would look on a larger screen.
>
> **[2:15](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=135)** The taller the view port, the more space will be added below the content in each row.
>
> **[2:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=139)** Let's go back to the CSS file one more time and specify the row heights.
>
> **[2:25](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=145)** In the container block, add the grid template rows property.
>
> **[2:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=155)** For the three rows, we'll set the following height values, auto for the header, 1FR for the middle content area and auto for the footer, save the file and go back to the browser.
>
> **[2:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=171)** Now that the header and footer is set to a row height of auto, it makes them the same height as their content.
>
> **[2:58](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=178)** The middle row was set to a height of 1FR so it expands to fill the remaining space.
>
> **[3:03](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=183)** As a result, the footer will always be placed at the bottom of the page, no matter how tall your browser view port.
>
> **[3:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=199)** You can also create a sticky footer using Flexbox, though it works better if you are working only with columns.
>
> **[3:25](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=205)** When creating layouts with both rows and columns, grid is usually the better choice.
>
> **[3:31](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=211)** However, there's no one size fits all solution.
>
> **[3:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=213)** It depends on what you're trying to accomplish, and both Flexbox and Grid offer many options.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), default, (1), switch (1)
> **Env Vars:** css (3), html (3)
> **CLI Commands:** make (4)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps and resources
> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/next-steps-and-resources-26970311?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/next-steps-and-resources-26970311?u=76281980&t=0)** - In this course, we've explored the evolution and core concepts of CSS layouts.
>
> **[0:05](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/next-steps-and-resources-26970311?u=76281980&t=5)** If you're wondering where to go next, here are some suggestions.
>
> **[0:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/next-steps-and-resources-26970311?u=76281980&t=8)** Practice the exercises again, independently, and use the videos to check your work.
>
> **[0:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/next-steps-and-resources-26970311?u=76281980&t=13)** You can also dive deeper into the Flexbox and Grid Layout Modules.
>
> **[0:17](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/next-steps-and-resources-26970311?u=76281980&t=17)** The Mozilla Developer Network is my go-to resource.
>
> **[0:21](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/next-steps-and-resources-26970311?u=76281980&t=21)** They have reference guides, and I've also included links to additional tutorials.
>
> **[0:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/next-steps-and-resources-26970311?u=76281980&t=26)** We covered a lot in this course, so maybe your next step might be to just take a little break, because you've definitely earned it, and just come back when you're ready and learn some more.

> [!info]- Semantic Content
>
> **Code Keywords:** break, (1)
> **Env Vars:** css (1)
> **Cross-References:** we covered (1)
> **Speakers:** - in (1)


## Instructor

- [[Christina Truong]]

## Resources

- Exercise files available

## Skills Covered

- CSS Grid Layout
- Cascading Style Sheets (CSS)

## Path Context

### In [[Learn CSS]]
← [[CSS- Variables and Fluid Layouts]] | **11 of 12** | [[CSS- Print Style Sheets]] →

## Appears In

- [[Learn CSS]]

## Related Courses

_Courses sharing skills:_

- [[CSS- Advanced Layouts with Grid]] — Cascading Style Sheets (CSS), CSS Grid Layout
- [[Making Sense of the CSS Box Model]] — Cascading Style Sheets (CSS)
- [[React- Building Styles with CSS Modules]] — Cascading Style Sheets (CSS)
- [[Cutting-Edge CSS]] — Cascading Style Sheets (CSS)
- [[Building Great Forms with HTML and CSS]] — Cascading Style Sheets (CSS)

---

[↑ Back to top](#)