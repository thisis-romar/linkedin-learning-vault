---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: css-advanced-layouts-with-grid-24947327
url: "https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327"
duration_minutes: 148
duration: 2h 28m
level: Advanced
updated: 11/20/2024
learners: 66073
skills:
  - CSS Grid Layout
  - Web Development
  - Front-End Development
  - Cascading Style Sheets (CSS)
exercise_files: true
github: "https://github.com/LinkedInLearning/CSS-advanced-layouts-with-Grid-5945075/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFOaU21-ZRu1w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1730501541268?e=2147483647&amp;v=beta&amp;t=kOleIg_3SjFTudBCCB9LnYC2T_7BxgtjGTk1kAZGpD8"
linkedin_topic: Web Development
learning_paths:
  - '[[Learn CSS]]'
prev_courses:
  - '[[Advanced Responsive Layouts with CSS Flexbox]]'
next_courses:
  - '[[CSS- Variables and Fluid Layouts]]'
path_nav: '[{"path":"Learn CSS","position":9,"total":12,"prev":"Advanced Responsive Layouts with CSS Flexbox","next":"CSS- Variables and Fluid Layouts"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/css-grid-layout
  - skill/web-development
  - skill/front-end-development
  - skill/cascading-style-sheets-css
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/CSS-%20Advanced%20Layouts%20with%20Grid.md)

![CSS: Advanced Layouts with Grid](https://media.licdn.com/dms/image/v2/D560DAQFOaU21-ZRu1w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1730501541268?e=2147483647&amp;v=beta&amp;t=kOleIg_3SjFTudBCCB9LnYC2T_7BxgtjGTk1kAZGpD8)

# CSS: Advanced Layouts with Grid

> The course provides a brief overview of what the CSS grid layout module is and provides some context for using it alongside (or instead of) more traditional layout methods. It additionally provides working examples of five common grid patterns used for modern web layouts. Instructor Carrie Dils covers CSS grid core concepts, shows how to use CSS grid to achieve a desired layout, provides practical

> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327) | 2h 28m | Advanced | 66K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. CSS Grid: Core Concepts]]** (9 videos)
- **[[#2. Planning for Grid Layouts]]** (5 videos)
- **[[#3. Multi-Column Layout]]** (7 videos)
- **[[#4. Full-Bleed Layout]]** (4 videos)
- **[[#5. A Very Uniform Card Layout]]** (4 videos)
- **[[#6. A Variable Card Layout]]** (7 videos)
- **[[#7. Asymmetrical or Broken Layout]]** (5 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Welcome to CSS Grid
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/welcome-to-css-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/welcome-to-css-grid?u=76281980&t=0)** - Have you ever seen a really interesting web layout and wanted to recreate it, but weren't sure how?
>
> **[0:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/welcome-to-css-grid?u=76281980&t=5)** Or has a designer ever handed off a Figma file for you to convert into a layout and you're thinking, "How am I going to pull that off?"
>
> **[0:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/welcome-to-css-grid?u=76281980&t=12)** Well, you don't have to wonder anymore.
>
> **[0:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/welcome-to-css-grid?u=76281980&t=15)** In this course, we'll explore the CSS Grid Layout Module and how you can use it to create two dimensional responsive layouts for the web.
>
> **[0:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/welcome-to-css-grid?u=76281980&t=23)** We'll start by getting you oriented with the grid specification.
>
> **[0:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/welcome-to-css-grid?u=76281980&t=27)** From there, we'll cover some best practices for planning and executing grid layouts in the real-world.
>
> **[0:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/welcome-to-css-grid?u=76281980&t=32)** And then we'll dive deep into advanced layouts with CSS Grid.
>
> **[0:36](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/welcome-to-css-grid?u=76281980&t=36)** Together we'll dig into the code to create a multi column layout, a full bleed layout, various card layouts, and even an asymmetrical layout.
>
> **[0:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/welcome-to-css-grid?u=76281980&t=44)** At the end of this course, you'll feel confident in your ability to create interesting and complex layouts with CSS Grid.
>
> **[0:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/welcome-to-css-grid?u=76281980&t=51)** I'm Carrie Dils, and I'm here to guide you.
>
> **[0:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/welcome-to-css-grid?u=76281980&t=53)** If you're ready, saddle up your horse and let's hit the trail.

> [!info]- Semantic Content
>
> **Env Vars:** css (3)
> **Code Keywords:** module (1), let (1)
> **Documentation:** specification (1)
> **Tools:** figma (1)
> **Speakers:** - have (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-you-should-know?u=76281980&t=0)** - [Narrator] This course is all about the CSS grid layout module.
>
> **[0:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-you-should-know?u=76281980&t=4)** You'll get the most from this course if you already have a solid understanding of how CSS works.
>
> **[0:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-you-should-know?u=76281980&t=9)** If you need a refresher on the basics of CSS, I'd recommend checking out our library and going through the CSS essential training course for a deep dive into all things CSS or the CSS Fundamentals course for a quick primer.
>
> **[0:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-you-should-know?u=76281980&t=24)** Next, this course assumes you have a basic working knowledge of HTML and how HTML works with CSS..
>
> **[0:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-you-should-know?u=76281980&t=30)** And if you want to follow along with the exercise files, you'll want to be familiar with working both with a code editor and browser developer tools.
>
> **[0:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-you-should-know?u=76281980&t=38)** Other than that, all you need is a little curiosity and an eagerness to learn.

> [!info]- Semantic Content
>
> **Env Vars:** css (7), html (2)
> **Code Keywords:** module (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Using GitHub Codespaces with this course
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Instructor] For this course, we're using GitHub Codespaces for the exercise files I show in the course.
>
> **[0:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=5)** In order to open up GitHub Codespaces for this project, there are two ways to get there.
>
> **[0:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=10)** The first is to go directly to the GitHub repository for this course, and click this Code button.
>
> **[0:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=16)** From there, you would want to go to the Codespaces tab, and from here you can either create a new codespace or access any existing codespaces that already exist.
>
> **[0:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=27)** You can also simply add /codespaces to the end of the URL, and that'll take you to this screen.
>
> **[0:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=33)** The second way to access Codespaces is from the course homepage where you're watching this.
>
> **[0:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=38)** You'll see a link to open GitHub Codespaces.
>
> **[0:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=42)** If you happen to already have a codespace for this course, you can access it by clicking on the name of the codespace, or you'll see the screen button that says Create a codespace on main, and, in this instance, that's what we're going to do.
>
> **[0:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=56)** When you initially create the codespace, it may take a few minutes to set up.
>
> **[1:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=60)** Once the editor finishes loading, you can see all of the files and folders for the project over here.
>
> **[1:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=66)** Now, if you want to navigate to a specific lesson, first, go into this source, or src folder, look for the corresponding chapter, and then inside that folder, look for the lesson.
>
> **[1:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=78)** The naming convention I'm using is the chapter number, underscore, followed by the lesson number.
>
> **[1:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=84)** And on some you'll note that the folder name ends with a B or an E.
>
> **[1:28](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=88)** The B stands for beginning.
>
> **[1:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=90)** So, for example, this 01_03b represents the starting state or beginning of the code used for that lesson, while the E stands for end.
>
> **[1:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=101)** So 01_03e has the code for the ending state of the lesson.
>
> **[1:47](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=107)** Additionally, you can click this Go Live button to view a live preview of this code in the browser.
>
> **[1:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=113)** So from this route directory, we could go to source, and from there go into the individual chapter and lesson we want to view.
>
> **[2:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=122)** Any changes you make in the editor will be reflected in real time in the browser, giving you the opportunity to experiment as we move through this course.
>
> **[2:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=131)** Codespace offers a powerful and interactive way to follow along and participate.
>
> **[2:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-github-codespaces-with-this-course?u=76281980&t=135)** I'd highly encourage you to use this feature and learn as you go.

> [!info]- Semantic Content
>
> **Tools:** github (4)
> **UI Navigation:** go to (2), navigate to (1)
> **Definitions:** stands for (2)
> **CLI Commands:** make (1)
> **Code Keywords:** this. (1)
> **Env Vars:** url (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)


### 1. CSS Grid: Core Concepts

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is CSS Grid?
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-is-css-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-is-css-grid?u=76281980&t=0)** - [Instructor] CSS Grid is a powerful layout system that revolutionized web design.
>
> **[0:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-is-css-grid?u=76281980&t=5)** Before Grid, CSS didn't give us a lot of tools for creating complex layouts, so we relied on clunky or even hacky techniques, like using tables in ways they weren't meant to be used, floating elements or heavily nesting divs or other markup.
>
> **[0:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-is-css-grid?u=76281980&t=21)** Then CSS Frameworks came along and helped us achieve grid-style layouts through the use of predefined columns.
>
> **[0:28](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-is-css-grid?u=76281980&t=28)** These typically involved very opinionated HTML markup and ready-made CSS classes.
>
> **[0:34](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-is-css-grid?u=76281980&t=34)** While they were certainly better than previous methods, they were still limited and forced us to up our HTML in a very regimented way.
>
> **[0:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-is-css-grid?u=76281980&t=41)** Finally, the CSS Grid layout module came along, and we've seen increasing adoption of it since 2017.
>
> **[0:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-is-css-grid?u=76281980&t=48)** Grid gives us unprecedented control over positioning elements within a two dimensional space.
>
> **[0:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-is-css-grid?u=76281980&t=54)** It allows us to place elements precisely along both a horizontal and a vertical axis, giving us the ability to create some really interesting and intricate layouts without resorting to workarounds.
>
> **[1:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-is-css-grid?u=76281980&t=65)** Consider this your briefest of introductions, and let's start getting into the details.

> [!info]- Semantic Content
>
> **Env Vars:** css (5), html (2)
> **Code Keywords:** finally, (1), module (1), let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Grid terminology
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=0)** - CSS grid brings some new vocabulary to the mix.
>
> **[0:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=3)** Let's go over some key terminology, as it will lay the foundation for how grid works.
>
> **[0:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=8)** It starts with a grid container.
>
> **[0:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=11)** This is a parent element that defines the grid structure, and contains the grid.
>
> **[0:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=15)** To make an element a grid container, it needs to have its display property set to grid.
>
> **[0:20](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=20)** In a single view or webpage, you can have as few or as many grid containers as you want.
>
> **[0:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=25)** You can also nest grid containers inside of other grid containers, and you'll see plenty of examples of that in this course.
>
> **[0:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=31)** The first level descendants, or child elements of the grid container are called grid items.
>
> **[0:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=37)** By default, these are automatically placed on the grid, although we have the ability to specifically place them anywhere within the grid.
>
> **[0:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=44)** It's important to note that only first level descendants are placed on the grid.
>
> **[0:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=48)** The grid doesn't affect any child elements of those descendants.
>
> **[0:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=52)** The grid lines are the dividing lines that create the grid structure.
>
> **[0:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=56)** They can be vertical column grid lines, or horizontal row grid lines, and you can imagine them living on either side of a row or column respectively.
>
> **[1:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=65)** Grid lines are referenced by number, starting and ending with the outer edges of the grid container.
>
> **[1:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=70)** The left and top edges are typically counted as line one, and then each line is given an incremental number.
>
> **[1:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=77)** I say typically, because CSS grid respects the text direction of the current document, or even element.
>
> **[1:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=83)** So in left to right text settings, the left outer edge is line one, and the last line is the line on the right outer edge of the container.
>
> **[1:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=92)** In a right to left text direction, this is reversed, with the right outer edge being line one, and the last line being on the left outer edge.
>
> **[1:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=100)** You can refer to a grid line by its number, or you can assign custom names, and refer to them by that for easier reference.
>
> **[1:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=108)** A grid cell is the space between a grid row and a grid column.
>
> **[1:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=112)** You can think of it sort of like a table cell.
>
> **[1:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=114)** And then there are grid tracks.
>
> **[1:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=117)** This is the space between two grid lines, representing rows and columns.
>
> **[2:01](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=121)** Road tracks are horizontal, and column tracks are vertical.
>
> **[2:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=125)** Next, we have a grid area.
>
> **[2:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=128)** This is a space between four defined grid lines, and can cover one or more cells.
>
> **[2:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=133)** Defining grid areas gives us a way to reference a specific place on the grid we want to place a grid item.
>
> **[2:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=139)** The last term I want to give you is grid gap.
>
> **[2:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=142)** By default, grid lines have no width, meaning each grid track is right up against the next one.
>
> **[2:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=147)** You can add space between them using grid gap.
>
> **[2:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=150)** This gap creates a uniform gutter between each track, and you can define a column gap, a row gap, or set the same gap for both columns and rows.
>
> **[2:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=159)** Okay, so that's a lot of terminology I've just thrown at you.
>
> **[2:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=162)** I promise as we move forward, this will make more sense.
>
> **[2:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-terminology?u=76281980&t=165)** Just bear with me, and let's keep rolling.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), default, (2)
> **CLI Commands:** make (2)
> **Env Vars:** css (2)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1)
> **Speakers:** - css (1)

#### Create a grid
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=0)** - [Instructor] To really make sense of Grid, it helps to see it in action.
>
> **[0:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=3)** For that, I've created a demo webpage we can use to experiment with Grid, and that's what you're seeing on the screen right now.
>
> **[0:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=10)** It's got a series of boxes with different background colors and each one is tagged with a class name, so it'll be easy to identify which one we're working with.
>
> **[0:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=19)** You're welcome to open up the Exercise Files for this lesson in Codespaces.
>
> **[0:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=24)** So, we're in Chapter 1, and note I'm starting in 01_03b, where b stands for beginning.
>
> **[0:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=32)** Any changes I make during this lesson will be reflected in 01_03e, where e stands for the end state of the files after this lesson.
>
> **[0:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=42)** So, let's go ahead and open up 01_03b and this index.html.
>
> **[0:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=48)** Now, this is the code for what we were just looking at in the browser.
>
> **[0:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=52)** We've got a body tag with a class of site, and within that, our a series of first-level descendants.
>
> **[0:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=57)** First, we've got the skip-link for accessibility, and even though it's a direct descendant of site, it won't be placed on our Grid, and that's because this is styled using absolute positioning, removing it from the normal flow of the document.
>
> **[1:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=71)** The rest of our first-level descendants include this header with a class of masthead, a div with a class of page-title, main with the class of main-content, and we have an aside and a footer.
>
> **[1:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=83)** So, in the browser, these elements show up one after the other, exactly as we would expect.
>
> **[1:28](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=88)** Now, let's see what happens if we make this a Grid.
>
> **[1:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=91)** To do that, I'll head back to my editor here, and just to keep things separate and easy, I'm going to create a new style sheet.
>
> **[1:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=100)** I'll call it style-grid.css, and we need to link that from our HTML, so I'll just copy this, and change the reference.
>
> **[1:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=113)** There we go.
>
> **[1:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=116)** So, I want to target this body with a class of site, so over in my style sheet, I'll just say site and set the display property to grid.
>
> **[2:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=127)** Oh, let's go refresh, and everything looks exactly the same.
>
> **[2:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=132)** And that's actually what it should look like, because even though we've defined the Grid, we haven't defined where individual items should go.
>
> **[2:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=139)** In the absence of manually defining where each of these Grid items go, they've been automatically placed on the Grid stacked in the order they appear in the DOM.
>
> **[2:28](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=148)** Let's use our browser developer tools and I'll show you something cool.
>
> **[2:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=152)** Now, I'm using Chrome, but Firefox, Safari, any modern browser will have these built-in developer tools that will work very similarly.
>
> **[2:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=160)** So, yours may look a little different than mine, but you should be able to see what I'm about to show you.
>
> **[2:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=165)** I'll right-click anywhere on the page and say Inspect, and that opens up the developer tools.
>
> **[2:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=171)** From the Elements screen, I'll click on body, and from there, I'll head to the Layout tab.
>
> **[2:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=179)** Now here, I can see that there's one Grid on this page and that's on this body element, and if I check this, it turns on a Grid overlay.
>
> **[3:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=188)** And now you can see these lines overlaying the Grid container.
>
> **[3:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=191)** Then we get a few display settings.
>
> **[3:14](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=194)** We can extend the Grid lines, and you can see these dotted lines going out to the edges of the window.
>
> **[3:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=199)** Sometimes that's helpful for visualizing.
>
> **[3:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=202)** I should also note that depending on the colors on your page, you may be able to increase the visibility of the Grid overlay by changing the color, and you can do that by going to the Grid overlay, picking this little color box, and you can pick a color that's maybe got a little better contrast.
>
> **[3:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=219)** Another thing we can do is display line numbers.
>
> **[3:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=223)** So, here at the top left, we've got this one indicating the very beginning of this vertical or column grid line, and here on the right, we have the number two indicating the end of this column grid line.
>
> **[3:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=236)** There's also this minus one, and in grid terminology, minus one also indicates the final line in a column or row.
>
> **[4:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=244)** And then back over here on the left, we've got this 1, 2, 3, et cetera, and those indicate our horizontal or row grid lines.
>
> **[4:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=253)** There's also options to show line names and grid area names, but we haven't specified any of those yet, so that doesn't really do us any good to toggle that on.
>
> **[4:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-a-grid?u=76281980&t=263)** As we start creating more complex grids, you'll find this tool really helpful for seeing exactly what's going on in your grid.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (2)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** right-click (1), click on (1), toggle (1)
> **File Paths:** index.html (1), style-grid.css (1)
> **Env Vars:** html (1), dom (1)
> **Tools:** firefox (1), safari (1)
> **Definitions:** stands for (2)
> **Exercise Files:** exercise files (1)

#### Grid lines and units
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=0)** - [Instructor] Now that we've got a grid container defined in our style sheet, we can start declaring grid lines to create rows and columns.
>
> **[0:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=7)** This is done using two properties called grid-template-columns and grid-template-rows.
>
> **[0:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=13)** There's also a shorthand property that combines these two, called grid-template.
>
> **[0:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=18)** Let's click on this to see the documentation, and just as an example, each of those properties takes a space-separated list of values, and the size values are what determine the width of columns and the height of the rows within a grid.
>
> **[0:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=31)** Let's head over to Codespaces, and I'll show you what I mean.
>
> **[0:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=35)** Right now, we've got our grid container, and by default, this has one column that spans the full width of the grid.
>
> **[0:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=42)** We've got this grid column line one over here on the left side, and grid column line two over here on the right.
>
> **[0:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=49)** Now, if I wanted to split this space into two equal width columns, we could go over into our CSS, and we'll say grid-template-columns.
>
> **[1:01](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=61)** 50% for the first column, and 50% for the second column.
>
> **[1:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=66)** So let's save that, and refresh.
>
> **[1:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=70)** And now we have two equal width columns.
>
> **[1:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=73)** So we've got this grid line one on the left, two in the middle, and now a third grid line over here on the right.
>
> **[1:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=81)** So this grid-template-columns property is saying, find the first grid line, which is our left outer edge, and then place a second grid line at 50% of the total width of the grid container, and then place another grid line in the remaining 50%.
>
> **[1:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=97)** Now, by default, the width of any row or column you create is auto, meaning as tall or wide as the content wants within the available space of the grid.
>
> **[1:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=105)** So let's just say grid-template-rows: auto.
>
> **[1:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=115)** But we don't actually see any change here, as that's the default value.
>
> **[1:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=119)** There are lots of values you can assign to these grid-template properties, and you can even mix and match measurement units as you please.
>
> **[2:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=126)** You can mix pixel widths with ems, rems, percentages, viewport widths and height, and a variety of other values within the same declaration.
>
> **[2:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=135)** Let's try it out.
>
> **[2:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=136)** Let's make a funky, four-column grid.
>
> **[2:20](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=140)** And we'll say the first column is 20 pixels.
>
> **[2:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=143)** The second is six em, the third is 25%, and the final column is 50% of the viewport width.
>
> **[2:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=153)** Let's save that and take a look, and whoo, this is ugly.
>
> **[2:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=157)** But now we can see this first grid line at 20 pixels, the next one at six ems, the next one at 25%, and then the final one at 50% of the viewport width.
>
> **[2:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=169)** You may also notice this grid container isn't as wide before, and that's just because of how we declared that grid-template-columns property.
>
> **[2:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=177)** Now, we are not done with measurement units yet.
>
> **[3:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=180)** CSS Grid gives us more interesting options.
>
> **[3:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=183)** The first is a flexible measurement unit called fr, and it represents a fraction of the available space within the grid container.
>
> **[3:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=191)** So let's go back to our declaration for grid-template-columns again, and change this to 1fr 1fr.
>
> **[3:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=201)** So if we save that and look, now we get two equal width columns again.
>
> **[3:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=206)** The fr unit gives us a way to work with fractions, so let's change it to say that we want this first column to take up one fr of space, and then the second column to take up two frs.
>
> **[3:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=220)** So in this example, I'm essentially saying, we have three sections, and I want the first column to get one fraction of that space and the second column to get two fractions of that.
>
> **[3:50](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=230)** This is basically a more precise way than using a measurement like 33.33333% to get a column that's one-third of the space wide.
>
> **[4:01](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=241)** We also have the minmax function available to us.
>
> **[4:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=244)** It defines a size range greater than or equal to min, and less than or equal to max.
>
> **[4:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=249)** In plain English, it allows us to declare a minimum and maximum width or height of a column or row, respectively.
>
> **[4:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=257)** So just for example here, let's set our grid-template-rows.
>
> **[4:20](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=260)** So the first row is going to be 100 pixels.
>
> **[4:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=264)** And for the second row, we'll use minmax.
>
> **[4:28](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=268)** And say that we want a minimum height of 20ems, and a maximum of 30ems.
>
> **[4:34](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=274)** And for the final row, it could just take up whatever remaining space is left.
>
> **[4:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=282)** Oops, and I clearly have it typoed, let's head back.
>
> **[4:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=285)** Should be em, not ems unit.
>
> **[4:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=288)** Now I'm just making things up.
>
> **[4:50](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=290)** Okay, so now when we look at this page again, we can see this first row is 100 pixels high.
>
> **[4:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=295)** This second row has a minimum height of 20 ems, and a maximum of 30.
>
> **[5:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=300)** And for the final row, it can take up one fr of whatever space is left.
>
> **[5:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=305)** Minmax is especially useful for responsive design because we can specify something like, this column should never be less than 100 pixels and wider than 200 pixels, or whatever.
>
> **[5:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=317)** The last thing I want to share with you in this lesson is the repeat function.
>
> **[5:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=321)** This is a handy shorthand notation you can use if you're creating a list of similar columns.
>
> **[5:28](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=328)** For example, let's say we want four columns of one fr each.
>
> **[5:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=333)** Instead of typing out 1fr 1fr 1fr, I could just say repeat(4, 1fr).
>
> **[5:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=344)** And this repeats this 1fr four times.
>
> **[5:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=351)** We can even get fancier with our accommodations here.
>
> **[5:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=353)** So say that we want to repeat four 1fr, and then 20 pixels, to give us eight columns total.
>
> **[6:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=362)** So now we have 1fr, followed by a 20 pixel column, followed by one fr, a 20 pixel column, and on and on.
>
> **[6:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=370)** And in this case, I don't have enough grid items to even fill out eight columns.
>
> **[6:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=373)** So we see some empty columns here.
>
> **[6:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=376)** So that's an example with grid-template-columns.
>
> **[6:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-lines-and-units?u=76281980&t=378)** But you could use this exact same approach for rows as well, giving you full control over every bit of how your grid is sized.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), default, (2), function (2), case, (1)
> **Exercise Files:** template (11)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** css (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Versions:** 33.33333 (1)
> **Cross-References:** go back to (1)

#### Placing grid items
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=0)** - [Instructor] Earlier we saw that when we define a grid, grid items are automatically placed on the grid.
>
> **[0:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=5)** And if we go into the style sheet for this lesson, I'm actually going to close this explorer view just to give us a little more room.
>
> **[0:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=13)** So let's define our grid template columns as 2fr's, and then we're going to repeat two columns at one fr each.
>
> **[0:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=24)** And then let's declare our grid template rows as auto 1fr and 3fr.
>
> **[0:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=33)** So now our grid items are automatically distributed within this grid, starting from the top left, all the way down to the bottom right.
>
> **[0:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=42)** And with this grid overlay turned on, you can see that there are empty grid cells and that's because I don't have enough items to automatically fill out all the cells that I've defined.
>
> **[0:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=51)** This automatic placement is a handy feature of grid, especially when you're working with dynamic content or unsure how many items you'll have.
>
> **[0:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=59)** You can define an explicit grid using a combination of grid template columns and grid template rows, and then just let the browser auto-populate the grid based on whatever grid items are available in the dom.
>
> **[1:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=70)** But I've already hinted that the most powerful thing about grid is our ability to put any grid item anywhere on the grid using only CSS.
>
> **[1:20](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=80)** So far, we've looked at a couple of properties that apply to the grid container, grid template columns, and grid template rows.
>
> **[1:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=87)** But if we want to start wielding power over where individual grid items are placed, we need to look at properties that apply to grid items.
>
> **[1:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=95)** Let's start with grid column and grid row.
>
> **[1:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=99)** The most basic way to place grid items on the grid is to declare grid column and grid row values for each individual item.
>
> **[1:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=106)** Both of these properties take values corresponding with the lines on a grid.
>
> **[1:50](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=110)** So if you want to place some grid items, say between column lines two and four, you'd declare grid column two slash four.
>
> **[2:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=120)** That means I want this item to start at grid column line two and extend to grid column line four.
>
> **[2:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=126)** And if you also wanted that item to span two rows, say starting on the first grid row line and ending on the third, you'd declare grid row one slash three.
>
> **[2:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=137)** Using this method, you can take each grid item in any layout and put it where you want on the grid.
>
> **[2:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=143)** Going back to our example for this chapter, let's move each of these items around to create the layout we want.
>
> **[2:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=149)** For starters, I want to move this masthead over to the right-hand side so that it spans these two columns from two to four.
>
> **[2:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=158)** Also, I want to move it down to the second row.
>
> **[2:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=161)** So it would be starting on grid row line two and ending on grid row line three.
>
> **[2:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=166)** So to do that over here in my CSS, I'll create a rule for masthead.
>
> **[2:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=172)** I'll say grid column two slash four and grid row two slash three.
>
> **[3:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=185)** Whoops, let's get our trailing semicolon there.
>
> **[3:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=188)** And if we refresh, now we can see that masthead has been moved and it's starting.
>
> **[3:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=195)** If we scroll up to the top, we can see that line number.
>
> **[3:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=198)** It's starting at grid line two, it ending at grid line four.
>
> **[3:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=202)** And as for rows, it's starting at grid row two and ending at row line three.
>
> **[3:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=209)** So notice that moving this one grid item out of the way caused all the other grid items to flow up and take up the new available space.
>
> **[3:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=217)** So the page title now flows up to that first position and everything else flows in and fills up the grid automatically.
>
> **[3:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=224)** Next, let's take the page title.
>
> **[3:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=226)** I want this to span the full width and occupy this first row.
>
> **[3:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=231)** So I'll say page title.
>
> **[3:58](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=238)** I'll set the grid column to one slash four.
>
> **[4:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=243)** Alternatively, you could say one and then minus one, and that would also span the full width.
>
> **[4:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=251)** So now we've got page title spanning the full width, and then the items flow below that with the exception of this masthead, which has already been specifically placed on the grid.
>
> **[4:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=262)** So let's keep doing this with all of our items.
>
> **[4:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=264)** I want the main content to sit in this first column and span two rows.
>
> **[4:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=270)** We'll say main content grid column, start at line one, end at line two, and then for grid row, we're going to start at line two and end at line four.
>
> **[4:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=288)** So now we just have the sidebar and footer taking up the remaining space.
>
> **[4:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=292)** So actually want the sidebar to be over here on the side, and I want to move the footer down below.
>
> **[4:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=299)** But something I want to point out here, I've only explicitly defined three rows, so I'm actually trying to move the footer into a row that doesn't exist.
>
> **[5:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=308)** How do we do that?
>
> **[5:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=310)** Well, this is where we get something called an implicit grid.
>
> **[5:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=313)** These are grid lines that the browser creates to accommodate items that are placed outside of an explicit grid.
>
> **[5:20](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=320)** They're auto-sized by default, but you can use the grid auto-columns and grid auto-rows properties on the grid container to size them.
>
> **[5:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=329)** So going back to our example, let's have this sidebar span these two columns.
>
> **[5:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=333)** So create a new rule for sidebar and we'll say grid column.
>
> **[5:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=341)** I want to start at line two, end at line four, and we'll also have it occupy that remaining row that we've explicitly defined.
>
> **[5:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=348)** So we'll say grid row, start at line three, end at line four.
>
> **[5:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=355)** Now when we save that with our grid overlay here, we can see that we've got some additional implicit grid lines created for one row to accommodate this footer content section, and it maintains these three columns.
>
> **[6:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=368)** This implicit grid makes sure that our grid stays structurally sound.
>
> **[6:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=372)** So let's say we want the footer content to span the full width, so from this first grid line to this fourth.
>
> **[6:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=382)** So let's create a rule for that,
>
> **[6:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=392)** and it helps when I use the correct CSS class.
>
> **[6:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=395)** So let's go footer content, there we go.
>
> **[6:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=399)** So now it spans this full width from this first grid line to the fourth, and it's actually starting at grid row line four, even though we didn't specify that it should.
>
> **[6:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=409)** It's automatically placing itself at this implicit row line.
>
> **[6:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=412)** And note that this row is auto-sized because we didn't specify that row size ourselves.
>
> **[6:58](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=418)** There's one more thing I want to show you when it comes to declaring grid column and grid row, and that's the span keyword.
>
> **[7:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=425)** In addition to saying what line we want an item to start and stop at, we can specify how many rows or columns we want an item to span across.
>
> **[7:14](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=434)** Let me show you how that works.
>
> **[7:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=436)** So here for this footer content we said we wanted to start at grid line one and end at grid line four, but we could also write this as start at grid line one and then span three.
>
> **[7:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=450)** So now, we're still starting at grid line one and we're spanning three additional grid lines to end at line four.
>
> **[7:36](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=456)** So that's just another way that you can define grid column or grid row.
>
> **[7:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=460)** At this point, we've used both grid column and grid row to place our grid items exactly where we want them.
>
> **[7:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/placing-grid-items?u=76281980&t=466)** As we move deeper into this course, you'll see many more examples of this.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), default, (1), class. (1), this. (1)
> **Exercise Files:** template (6)
> **Env Vars:** css (3)
> **UI Navigation:** scroll up (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Grid areas
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=0)** - It's great that we can use grid line numbers to place items exactly where we want on the grid, but these numbers aren't always the easiest to work with.
>
> **[0:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=8)** For starters, it can be difficult to keep track of where various lines are on the grid.
>
> **[0:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=12)** Really, it's not an intuitive approach to creating layouts.
>
> **[0:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=16)** For instance, when you look at a layout, you're not thinking line one, two, three, et cetera.
>
> **[0:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=21)** You're probably thinking more along the lines of, this is the header up top.
>
> **[0:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=25)** I want my main content here to span a couple of rows.
>
> **[0:28](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=28)** I've got my masthead, my sidebar, and then down here I've got my footer.
>
> **[0:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=33)** CSS grid solves for this by giving us two methods for placing items on the grid by name, instead of line number.
>
> **[0:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=40)** We'll cover the first in this movie and another in the next.
>
> **[0:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=44)** The first method is grid-template-areas.
>
> **[0:47](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=47)** The short version of it works like this, using the grid-template-areas property, on the grid container, we can use grid areas to define rectangular areas that span one or more cells within the grid and then give those areas names.
>
> **[1:01](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=61)** Essentially, we turn the grid into a map, then we can use the grid area property, on individual grid items to place them on our grid map.
>
> **[1:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=70)** This is truly one of the coolest things about CSS grid, and when my brain finally clicked on using, grid-template-areas, it made grid so much more approachable and easier to work with for me.
>
> **[1:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=82)** This will make more sense when you see it in action.
>
> **[1:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=84)** So let's take a look.
>
> **[1:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=87)** Here's the style sheet for this lesson, and I'm going to go ahead and close our explorer view just to give us more room.
>
> **[1:34](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=94)** And the first thing I'm going to do is remove these grid column and row references for each of the grid items.
>
> **[1:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=106)** So if we refresh, this gets us back to our original grid where items are auto placed.
>
> **[1:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=112)** Now I'm going to leave our grid template columns and grid template rows in place, but this time I'm going to add a new property called grid-template-areas.
>
> **[2:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=123)** This property is magical.
>
> **[2:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=125)** This is where I create my map of named grid areas.
>
> **[2:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=128)** Now before I do that, let's go back and remember what I want my map to look like.
>
> **[2:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=132)** So I want the page title to span across the top.
>
> **[2:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=137)** I want the main content to sit in that first column below it and span two rows.
>
> **[2:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=142)** I want the masthead over here in the last column and second row and the sidebar to sit just below that.
>
> **[2:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=150)** And then I want my footer across the very bottom.
>
> **[2:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=153)** So with that layout in mind, let's draw our map.
>
> **[2:36](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=156)** So I've got this grid template areas property, and I'll start a new line.
>
> **[2:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=162)** Open my quotes.
>
> **[2:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=163)** And let's think of this as the first row in our grid.
>
> **[2:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=166)** It has three columns, and I want the page title to span all three.
>
> **[2:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=169)** So I'll just say title, title, title.
>
> **[2:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=173)** I'll drop to the next row.
>
> **[2:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=174)** And in this case, I want the main content, in the first column and the masthead to span the next two.
>
> **[2:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=179)** So I'll say main masthead, masthead.
>
> **[3:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=185)** And for the third row, I'll continue with, main and the first column.
>
> **[3:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=189)** And then sidebar, sidebar.
>
> **[3:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=192)** And finally, I want the footer to span all three columns of the last row.
>
> **[3:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=196)** So we'll say footer, footer, footer.
>
> **[3:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=201)** I'll save that.
>
> **[3:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=202)** And if we go back and look, nothing has changed visually, but now if we head to this layout tab and let's hide the line numbers and say show area names.
>
> **[3:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=215)** And there, now I can see here's title, here's main, here's masthead, et cetera.
>
> **[3:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=221)** So now my grid overlay is showing, each of those named template areas.
>
> **[3:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=226)** So our job now is to go back and map our individual grid items to the correct named areas.
>
> **[3:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=231)** And to do that, we're going to use, the grid area property on each of these grid items.
>
> **[3:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=236)** So starting with masthead, we'll say grid area is masthead.
>
> **[4:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=245)** The grid area for page title is called title.
>
> **[4:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=250)** The grid area for main content is main.
>
> **[4:14](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=254)** And you can see over here in real time that this is placing items in those named areas.
>
> **[4:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=259)** Pretty cool. Let's go ahead and finish up.
>
> **[4:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=261)** We'll place our sidebar, in the sidebar template area.
>
> **[4:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=269)** And our footer content, goes in the footer template area.
>
> **[4:36](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=276)** So here in the browser, you could see that we've successfully mapped each of these grid items to the template areas defined on our grid.
>
> **[4:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=284)** No grid lines were used in the process.
>
> **[4:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=286)** I wasn't kidding when I said this was magical.
>
> **[4:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=289)** So right now, this entire layout, is defined within this site rule, using this grid-template-areas property.
>
> **[4:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=296)** That means all I have to do is change this property and I can move content around in my layout, without changing anything about the individual grid items.
>
> **[5:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=305)** For instance, if I wanted main to span two columns and put masthead in that third column, and same, we'll let main span two columns in that row.
>
> **[5:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=317)** And now you can see that it spans two columns and the masthead and sidebar take up those third columns.
>
> **[5:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=323)** Or if I wanted to change the position of the sidebar and the masthead, let's just swap these rows.
>
> **[5:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=329)** And there you go. I hope you're starting to see how powerful this is.
>
> **[5:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=337)** Now where this really shines is for responsive layouts.
>
> **[5:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=340)** Instead of rewriting all of your CSS to move items around, we can use a media query on our grid container and simply redefine our template areas.
>
> **[5:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=349)** I'll show you how that could work.
>
> **[5:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=351)** Let me make the editor a little bigger here.
>
> **[5:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=354)** So within this role, I'll nest a media query.
>
> **[5:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=357)** We'll say media, and we'll set it at 600 pixels.
>
> **[6:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=365)** So the browser would read these styles first, and then once it gets to 600 pixels or larger, it would read anything within this media query.
>
> **[6:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=375)** And since I know this is the layout, I want for the larger screen, I'm going to actually just copy all of that and paste it right in here.
>
> **[6:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=383)** And then here for the rules for screens below 600, I'll simplify the grid template columns to just be a single column at 1fr.
>
> **[6:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=392)** And then simplify our grid template areas to be a single column as well.
>
> **[6:36](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=396)** So we'll say title, masthead, main, sidebar and footer.
>
> **[6:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=409)** Alright, we'll save that and go back to the browser.
>
> **[6:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=414)** And let me pop into a responsive view mode here so I can get the browser below 600 pixels.
>
> **[7:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=420)** And now... when we go below 600 pixels, we drop to this single column layout.
>
> **[7:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=426)** This my friends, is the power of grid-template-areas.
>
> **[7:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=429)** If you've worked with responsive designs before, you know how tedious it can be to rewrite CSS for multiple breakpoints, CSS grid and in particular grid-template-areas, open up the door to get really creative with your layouts and not have to write a ton of CSS, just to make it responsive.
>
> **[7:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=447)** Now there's one more cool thing I want to show you, while we're on the topic of grid-template-areas.
>
> **[7:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=452)** Using this exact approach, you can create empty white spaces within your layout.
>
> **[7:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=457)** So for example, for this main sidebar, sidebar, if we replace this sidebar with a dot, that's creating a null space in that column.
>
> **[7:47](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=467)** This is an empty cell with no content in it and everything else just flows around it.
>
> **[7:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-areas?u=76281980&t=471)** It's magic and not a single transparent gif, was harmed in the process.

> [!info]- Semantic Content
>
> **Exercise Files:** template (18)
> **Code Keywords:** let (10), this, (1), case, (1), continue (1), finally, (1)
> **Env Vars:** css (6)
> **CLI Commands:** make (3)
> **Cross-References:** in the next (1), in the last (1), go back to (1)
> **Analogies:** for instance (2), for example (1)
> **Definitions:** is called (1), is an  (1)
> **UI Navigation:** in the sidebar (1)

#### Named grid lines
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=0)** - [Instructor] Named grid areas aren't the only alternative to using grid line numbers to place grid items.
>
> **[0:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=5)** We can also name grid lines, and we do that using the grid-template-columns and grid-template-rows properties on the grid container.
>
> **[0:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=13)** In this example, we're using grid-template-columns to specify the size of each vertical track in the grid, and we're doing the same for our horizontal tracks with this grid-template-rows.
>
> **[0:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=23)** And then, we're placing items on the grid using line numbers.
>
> **[0:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=27)** Now, these line numbers, you can imagine your grid lines being on either side of these defined tracks.
>
> **[0:34](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=34)** So, there's the first grid line at the left edge of this first grid track.
>
> **[0:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=38)** We have the second grid line after that, one after this 1fr, and finally, a grid line at the end.
>
> **[0:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=46)** And if we want to name these lines, we can do that inside square brackets here in this track listing.
>
> **[0:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=52)** An important thing to remember here is that we're naming the line, not the track that comes after it.
>
> **[0:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=57)** So once we name the lines, we can swap line numbers for names when placing items on the grid.
>
> **[1:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=63)** So, for our first line, let's name it outer-start.
>
> **[1:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=69)** And then, for our second line, let's name this halfway since that's the center point of our grid.
>
> **[1:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=76)** And this third line, I'll name quarter.
>
> **[1:20](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=80)** And that final grid line, I'll name outer-end.
>
> **[1:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=85)** Now, let's go save that and look in the browser.
>
> **[1:28](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=88)** Refresh.
>
> **[1:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=91)** And from our developer tools on the layout tab, we can now say Show line names.
>
> **[1:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=97)** And here we go.
>
> **[1:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=98)** So now we see that outer-start, the halfway, the quarter, and the outer-end.
>
> **[1:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=103)** Visually, nothing else has changed.
>
> **[1:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=105)** The important thing to note about this is that even though we've named our lines, we haven't actually used them, which means that our references to grid line numbers are still intact.
>
> **[1:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=115)** So, we can reference named grid lines or their number to place items on the grid.
>
> **[2:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=120)** To keep going with this example, let's swap out our grid column definitions to our new named grid lines.
>
> **[2:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=126)** So, for the masthead, we had that starting at grid line 2, which corresponds with this name, halfway.
>
> **[2:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=135)** So we'll say halfway/, and we want it to end on the fourth line, which is this outer-end.
>
> **[2:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=143)** For page-title, we want to swap out this 1 for the named grid line, outer-start, which is the very first one.
>
> **[2:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=152)** And we want that to go all the way to outer-end, which is that fourth grid line.
>
> **[2:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=157)** And I'll go ahead and update the rest of these.
>
> **[2:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=165)** I'll save that.
>
> **[2:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=166)** We'll go back and take a look.
>
> **[2:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=169)** And everything looks exactly the same.
>
> **[2:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=171)** Just, this time, we've referenced named lines instead of numbers to place everything.
>
> **[2:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=176)** And just so you know I'm not cheating, let's find, here we go, for masthead, and instead of halfway, let's say quarter, and now you can see that the masthead starts on this grid line named quarter.
>
> **[3:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=191)** Before we move on, there's a couple more things I want to tell you about naming grid lines.
>
> **[3:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=195)** For starters, you can name these lines anything you want with the exception of the keyword, span.
>
> **[3:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=201)** Also, just make sure that if there's more than one word, like this outer-start, you're using a hyphen, not a space or an underscore.
>
> **[3:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=209)** You can also name a line more than one thing.
>
> **[3:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=211)** For instance, let's say we wanted to add this last line and also call it quarter-end in addition to outer-end.
>
> **[3:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=218)** Well, I could just add quarter-end and leave a space between these two names.
>
> **[3:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=225)** And if we go back and look, we can now see that this is updated with both names.
>
> **[3:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=231)** Really, the idea here, if you choose to name grid lines, name them in a way that makes sense for your project.
>
> **[3:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=237)** The last thing I wanted to share on this subject is pretty cool.
>
> **[4:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=240)** If you're using this naming convention of -start and -end on a pair of line names, that actually creates a grid area named whatever word comes before the dash, so, in this case, outer.
>
> **[4:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=252)** And we could use the grid area property to reference that.
>
> **[4:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=256)** So, for example, since our page-title spans from outer-start to outer-end, we could delete this grid-column property and just say grid-area: outer.
>
> **[4:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=271)** And now you can see that the page-title occupies this outer grid area.
>
> **[4:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=275)** To sum this up, grid is extremely flexible in the ways it gives us to place items.
>
> **[4:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=280)** We can place items by referencing line numbers, named lines, and named template areas.
>
> **[4:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/named-grid-lines?u=76281980&t=286)** And you can use a combination of these, as you've just seen in this example, in whatever way makes the most sense to you and for your project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), finally, (1), case, (1), delete (1)
> **Exercise Files:** template (5)
> **Analogies:** imagine (1), for instance (1), for example (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Grid gap
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=0)** - [Speaker] Another feature of CSS grid I'd like to show you is the grid gap.
>
> **[0:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=4)** As our grid currently stands, you can see that each item in our columns and rows, but right up against each other.
>
> **[0:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=11)** Maybe you want that for your design or maybe you want some space in between these.
>
> **[0:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=16)** Now, you could solve this by going into an individual element, say this masthead and adding some margin around it.
>
> **[0:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=23)** So we'll say margin 1em, but all we've done here is create space around the individual cell.
>
> **[0:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=31)** We're not dealing with how the grid is laid out.
>
> **[0:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=35)** The better way would be to create actual space between each of these grid lines or gutters.
>
> **[0:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=41)** And for that, we have the gap property.
>
> **[0:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=44)** It's the same as the property available in Flexbox and works exactly the same way.
>
> **[0:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=49)** So let's go to our grid container and we'll say gap is 1em.
>
> **[0:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=55)** And now we have a 1em gap between each row and between each column.
>
> **[1:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=60)** And you'll notice that when we have items spanning multiple rows or columns, we don't get any gap there.
>
> **[1:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=65)** So that's nice.
>
> **[1:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=67)** Now what if you want to set a gap just between columns but not between rows?
>
> **[1:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=72)** Well, you could do that with column gap.
>
> **[1:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=77)** And now we just have that 1em of space between our columns.
>
> **[1:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=82)** Or you could do the opposite and say we only want space between our rows.
>
> **[1:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=85)** And for that, we would use the row gap property.
>
> **[1:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=89)** We can also use the shorthand gap property to set both our row and column gaps.
>
> **[1:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=95)** So the first value that we specify here applies to rows and the second applies to columns.
>
> **[1:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=102)** There's one thing I want to point out here, and that's that this gap only applies inside the grid.
>
> **[1:47](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=107)** It does not wrap around the edges of the grid.
>
> **[1:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=109)** So if you want to have the appearance of the gap spanning outside of the grid, you need to apply some kind of margin or padding around the grid container as well.
>
> **[1:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=119)** So if we open up our inspect elements, and let's click on site.
>
> **[2:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=125)** And from our base style sheet here, you can see we actually have this margin of 1em around that container.
>
> **[2:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=131)** So if we were to change that to zero, you can see that space disappears.
>
> **[2:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-gap?u=76281980&t=135)** In short, you can use grid gap to create space between each column or row inside your grid to get exactly the look you want.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **UI Navigation:** go to (1), click on (1)
> **Env Vars:** css (1)
> **Speakers:** - [speaker] (1)

#### Grid alignment
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=0)** - [Instructor] The last feature I want to show you before we dive into grid layouts is grid alignment.
>
> **[0:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=5)** You're well aware at this point that CSS grid is a two-dimensional grid system letting us place items wherever we want, along both the vertical and horizontal axes.
>
> **[0:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=15)** What I want to talk about in this lesson is how to align items within their individual grid cells or grid areas.
>
> **[0:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=23)** On the vertical axis, so basically along our columns, we can use the align-self property on a grid item to align the content along the starting edge of a grid cell.
>
> **[0:34](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=34)** We can center it vertically or we can align it with the end of a grid cell.
>
> **[0:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=40)** Additionally, we can stretch an item to fill the entire height of a grid cell.
>
> **[0:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=44)** And there's also a baseline value that allows you to align items along the text baseline.
>
> **[0:50](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=50)** This is a little hard to visualize since it truly depends on whatever the text is inside of the grid cell, or grid area.
>
> **[0:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=57)** We get these same alignment options along the horizontal axis, but for this, we use the justify-self property.
>
> **[1:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=64)** We can justify against the starting edge, the center, or the ending edge.
>
> **[1:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=70)** We can stretch the entire width of the grid cell, or grid area, or we can justify along the baseline of whatever content is in that grid item.
>
> **[1:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=79)** And of course, you could use both the align-self and justify-self properties on the same item to very specifically align that item along both axes.
>
> **[1:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=89)** So for example, if you wanted an item to be both vertically centered and horizontally centered, you could say align-self center and justify-self center.
>
> **[1:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=100)** Or, if you wanted something to be vertically aligned centered, but horizontally aligned to the right, you could say, align-self-center and justify self end.
>
> **[1:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=111)** You already knew you could get really specific over where an item should be placed in a grid, but now you know that you can get really specific over how you want that item aligned within itself.
>
> **[2:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=122)** So you can manually set these alignments at the grid item level using align-self or justify-self, but if you wanted the same settings to apply to every item within a grid container, you could use the align-items and justify-items properties respectively.
>
> **[2:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=138)** Let's say you have a grid container and set the align-items property to center, and the justify-items property to center.
>
> **[2:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=145)** That's akin to setting the align-self and justify-self properties to center for each grid item.
>
> **[2:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=151)** You might commonly find yourself using the technique of setting alignment at the grid level and then overriding for individual cells as needed.
>
> **[2:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=158)** The final grid alignment options I wanted to mention are align-content and justify-content.
>
> **[2:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=164)** Each of these is a property that can be applied to a grid container and a function similarly.
>
> **[2:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=169)** The primary difference is what they target.
>
> **[2:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=171)** Align-items and justify-items target individual grid items and control the alignment of grid items within their individual cells.
>
> **[3:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=180)** Align-content and justify-content on the other hand, target the entire grid container and are used to control the alignment of the grid itself within its parent container.
>
> **[3:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/grid-alignment?u=76281980&t=191)** This should give you a good idea of how to get started with grid alignment, but if you wanted to check out the full range of settings along with some shorthand properties available for grid alignment, I'd encourage you to check out this reference in the MDN WebDocs.

> [!info]- Semantic Content
>
> **Code Keywords:** self (12), this, (1), let (1), function (1)
> **Definitions:** is a  (3)
> **Env Vars:** css (1), mdn (1)
> **CLI Commands:** find (1)
> **Documentation:** mdn (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Planning for Grid Layouts

> [[#Table of Contents|↑ Back to Table of Contents]]

#### When to use Grid?
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=0)** - [Instructor] CSS gives us a lot of layout options for the web, though grid is the most powerful method we have.
>
> **[0:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=6)** That said, allow me to give you a quick overview of the CSS flexbox layout module as compared to grid, and when you might choose to use one over the other, or even use a combination of both.
>
> **[0:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=18)** For starters, flexbox is a one-dimensional layout, meaning you can either create a row or a column along a single axis.
>
> **[0:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=26)** If you want to create the appearance of additional rows or columns, that could be done by wrapping flex items along that same axis, but it's not a true grid.
>
> **[0:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=35)** If you need to work with both rows and columns at the same time, grid is the better option.
>
> **[0:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=41)** With both flexbox and grid we get the ability to order elements within the container however we want, so source order doesn't necessarily have to match the display order.
>
> **[0:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=52)** This is a powerful feature of both, but can create some accessibility issues if you're not careful.
>
> **[0:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=57)** More on that in another lesson.
>
> **[0:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=59)** Flexbox is considered content-first or inside out, whereas grid is considered layout first or outside in.
>
> **[1:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=67)** What do I mean by that?
>
> **[1:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=69)** With flexbox, we're arranging items along a single axis, and the size and distribution of the items is primarily determined by the content itself.
>
> **[1:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=79)** Grid, on the other hand, describes a grid structure with rows and columns, so the outside container, if you will, and then content is placed within that.
>
> **[1:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=87)** As such, this makes Flexbox well suited for simple layouts when you're not sure exactly what your content will be, or components such as navigation bars, where you're wanting to distribute items along that single axis.
>
> **[1:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=99)** Grid, on the other hand, is perfect for more complex layouts with multiple rows and columns, and when you need to position elements precisely.
>
> **[1:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=108)** Grid and flexbox are meant to be used together as well.
>
> **[1:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=111)** For example, you might use Grid for an overall site layout, but use Flexbox for the navigation.
>
> **[1:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=117)** Or you could lay out cards on a Grid, but use flexbox to arrange the items within each individual card.
>
> **[2:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=124)** Really, the approach you take will be determined by the needs of your layout, the content you're working with, and the spatial relationship you need to establish between items on the page.
>
> **[2:14](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/when-to-use-grid?u=76281980&t=134)** As we work through examples in this course, and you take time to experiment, you'll get a good feel for when you might choose grid, flexbox, or even a combination of the two.

> [!info]- Semantic Content
>
> **Env Vars:** css (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), for example (1)
> **Code Keywords:** module (1)
> **Speakers:** - [instructor] (1)

#### Drawing layouts with pen and paper
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980&t=0)** - [Instructor] This may sound silly, but in my earliest days of working with the web, long before CSS Grid was available, or even Flexbox for that matter, I would take a pencil and paper and draw out the layout I wanted.
>
> **[0:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980&t=12)** At that point, I was using this technique to help me understand how to write logical and semantic HTML.
>
> **[0:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980&t=19)** Fast forward to present, and this is still a technique I like to use, except now in addition to visualizing a page layout, it's helping me think through how I'm going to use grid.
>
> **[0:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980&t=29)** Because grid works from the outside in, you have to define your grids before you start placing items in them.
>
> **[0:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980&t=35)** Which means having a rough idea of what your grid or even multiple grids will look like before you start writing CSS.
>
> **[0:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980&t=44)** So here's an approach I like, and just for the record, I'm not pulling out my ruler to make straight lines or do any formal wire framing.
>
> **[0:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980&t=51)** Literally just taking a pen or pencil to a piece of paper.
>
> **[0:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980&t=55)** First, I start with some drafts about how I want my layouts to appear on a mobile, tablet, and desktop view respectively.
>
> **[1:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980&t=62)** I'm not actually targeting specific screen widths, I'm just getting an idea of how the layout shifts based on available screen space.
>
> **[1:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980&t=70)** Next, I draw my grid lines over the layouts to help me visualize how content aligns or naturally groups.
>
> **[1:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980&t=77)** This also informs me if I need to redefine my grid lines as the screen width increases.
>
> **[1:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980&t=83)** Finally, break the grid apart into multiple grids if needed.
>
> **[1:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980&t=86)** Remember that we can nest grids within grids or bring Flexbox into the mix too.
>
> **[1:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980&t=92)** After this process, I typically end up with one primary layout that handles the header footer content area and sidebar, and then another grid or maybe multiple nested grids focused on the main content area.
>
> **[1:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980&t=105)** Splitting grids apart gives you the freedom to create modular layouts that are easier to work with.
>
> **[1:50](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980&t=110)** From there, just repeat the process for whatever layouts or views are needed for a site.
>
> **[1:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/drawing-layouts-with-pen-and-paper?u=76281980&t=115)** While you certainly don't have to take these steps, I find them very helpful for getting my head wrapped around how I'm going to lay out both a full page and its individual components.

> [!info]- Semantic Content
>
> **Env Vars:** css (2), html (1)
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### Using Grid generators
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=0)** - [Instructor] Admittedly, CSS Grid can take a little getting used to.
>
> **[0:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=4)** After all, that's probably why you're taking this course.
>
> **[0:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=7)** In this lesson, I wanted to introduce you to tools known collectively as grid generators that can help you get more comfortable working with Grid.
>
> **[0:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=15)** There's a bunch of these generators online that are free to use.
>
> **[0:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=18)** Some are more intuitive to use than others, but they can each vary in the features offered.
>
> **[0:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=24)** I'll show you the CSS Grid Generator first, just to give you an idea of how these work.
>
> **[0:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=29)** So for this one, I could come in and say, I want three columns and four rows.
>
> **[0:36](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=36)** I want a 20-pixel gap between both rows and columns.
>
> **[0:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=40)** Now, along this column axis, I can say I want this first track to be 100 pixels and this final one to be 30%.
>
> **[0:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=51)** And this middle column should take up the remaining space, so I'll just leave that at 1fr.
>
> **[0:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=56)** Then as for the rows, I'll just leave those at 1fr as well.
>
> **[1:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=60)** Now, if I click this button for code, I get the rule set needed to create the grid.
>
> **[1:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=65)** So we've got our display set to grid.
>
> **[1:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=67)** We've got our grid template columns.
>
> **[1:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=69)** That first track is 100 pixels, the second track is 1fr, and the final one is 30%.
>
> **[1:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=75)** Our grid template rows are set to repeat four rows at 1fr each, and then we've got our gaps defined as well.
>
> **[1:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=83)** As a quick aside, these two gap properties, grid-column-gap and grid-row-gap reflect an older grid specification syntax.
>
> **[1:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=92)** Browsers still support it, but if you use these properties individually, drop the grid prefix and simply use row-gap or column-gap.
>
> **[1:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=102)** Anyhow, as you can see, this is a quick way to generate a pretty straightforward grid in a visual way.
>
> **[1:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=109)** Now, if you wanted more customization options that could help you create a more complex grid, say grid items spanning multiple cells or named grid areas, there are grid generators that can help you do that too.
>
> **[2:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=122)** Feel free to do an online search and experiment with what you find.
>
> **[2:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=126)** My only caution here is to not over rely on generators.
>
> **[2:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=130)** They can be a great learning tool for beginners or even help experience developers generate CSS more quickly for a grid.
>
> **[2:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/using-grid-generators?u=76281980&t=137)** But my goal for you in this course is to help you understand the intricacies of Grid so that you're empowered to create whatever kind of layout you can dream up, or a designer hands off to you for development.

> [!info]- Semantic Content
>
> **Env Vars:** css (3)
> **Exercise Files:** template (2)
> **Definitions:** defined as (1), is a  (1)
> **CLI Commands:** find (1)
> **Documentation:** specification (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### Mobile-first approach
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/mobile-first-approach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/mobile-first-approach?u=76281980&t=0)** - [Instructor] Responsive design is the defacto standard of the modern web, and thank goodness, layout modules like Flexbox and CSS Grid make that easier for us as developers than ever before.
>
> **[0:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/mobile-first-approach?u=76281980&t=12)** I know you know that, but before we dive into creating grid layouts together, I want to emphasize the mobile-first approach.
>
> **[0:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/mobile-first-approach?u=76281980&t=18)** A mobile-first approach means that we start by designing and developing for the smallest screen size, and then gradually modify the layout for larger screens.
>
> **[0:28](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/mobile-first-approach?u=76281980&t=28)** In terms of CSS Grid, this involves defining a basic grid structure for mobile, if we even need it, and then using media queries to adjust the grid for larger view ports.
>
> **[0:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/mobile-first-approach?u=76281980&t=38)** As a simple example, let's say we have an element with the class product container.
>
> **[0:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/mobile-first-approach?u=76281980&t=43)** We define it as a grid, and then we define some automatically sized columns.
>
> **[0:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/mobile-first-approach?u=76281980&t=48)** Each column will be at least 200 pixels wide, but can expand to fill the available space.
>
> **[0:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/mobile-first-approach?u=76281980&t=53)** This is the base appearance for any items in this grid.
>
> **[0:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/mobile-first-approach?u=76281980&t=56)** Then for larger screens, let's say anything over 768 pixels wide, we want to make each column a little bit bigger, so we re-declare our grid template columns as still being equal and automatically sized, but this time we want them at a minimum of 300 pixels.
>
> **[1:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/mobile-first-approach?u=76281980&t=73)** The key to this approach is that we're prioritizing the mobile layout first and foremost, ensuring a good user experience on smaller screens.
>
> **[1:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/mobile-first-approach?u=76281980&t=81)** Then, media queries let us enhance and expand the layout for larger screens without affecting the mobile experience.
>
> **[1:28](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/mobile-first-approach?u=76281980&t=88)** This approach comes with an additional bonus.
>
> **[1:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/mobile-first-approach?u=76281980&t=91)** Because base styles are optimized for the smallest screen size, and additional styles are only loaded for larger screens via media queries, mobile users don't have to process as much CSS as desktop users.
>
> **[1:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/mobile-first-approach?u=76281980&t=103)** This can be a performance boost for mobile devices on slower networks.
>
> **[1:47](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/mobile-first-approach?u=76281980&t=107)** The bottom line really is, that by following a mobile-first approach, you're doing your part to create a responsive and user-friendly web.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Env Vars:** css (3)
> **CLI Commands:** make (2)
> **Exercise Files:** template (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Accessibility considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/accessibility-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/accessibility-considerations?u=76281980&t=0)** - [Instructor] Just like when using any other web technology, our main focus when using CSS Grid is accessibility.
>
> **[0:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/accessibility-considerations?u=76281980&t=7)** While it's not yet as ubiquitous as responsive design, building an accessible web should be top of mind for any web developer.
>
> **[0:14](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/accessibility-considerations?u=76281980&t=14)** The good news is that CSS Grid makes building accessible websites easier, by separating the visual layout from the HTML markup order, we no longer need to compromise the structure of our HTML to achieve interesting designs and layouts.
>
> **[0:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/accessibility-considerations?u=76281980&t=30)** Also, because CSS Grid gives us a true two-dimensional grid, we don't have to do weird things, like nest a bunch of containers just to get items to appear next to one another, which makes for cleaner, simpler, and more accessible markup.
>
> **[0:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/accessibility-considerations?u=76281980&t=44)** So that's the good news.
>
> **[0:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/accessibility-considerations?u=76281980&t=46)** But CSS Grid does give us some power that we need to use with caution.
>
> **[0:50](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/accessibility-considerations?u=76281980&t=50)** Namely, that's the ability to reorder content, which can lead to the visual order of items differing from the DOM order.
>
> **[0:58](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/accessibility-considerations?u=76281980&t=58)** Assistive technologies like screen readers follow the DOM order, so it's important that the logical reading order of content in the DOM remains intact.
>
> **[1:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/accessibility-considerations?u=76281980&t=67)** To this end, use the order property and grid placement properties only when the visual ordering does not disrupt the logical reading order of the content.
>
> **[1:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/accessibility-considerations?u=76281980&t=76)** In the same vein, if you're reordering elements, you want to make sure that the tab order aligns with the logical reading order and that the focus items are clearly visible.
>
> **[1:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/accessibility-considerations?u=76281980&t=86)** When in doubt, bring in an accessibility expert to do a site audit to make sure your site meets WCAG or web content accessibility guidelines.
>
> **[1:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/accessibility-considerations?u=76281980&t=95)** The whole point of publishing content on the web is for people to be able to access that content, and that's only possible if your content is accessible.

> [!info]- Semantic Content
>
> **Env Vars:** css (4), dom (3), html (2), wcag (1)
> **CLI Commands:** make (2)
> **Analogies:** just like (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)


### 3. Multi-Column Layout

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What you're creating: A multi-column layout
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-multi-column-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-multi-column-layout?u=76281980&t=0)** - [Narrator] An obvious use case for CSS grid is for creating multi-column layouts.
>
> **[0:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-multi-column-layout?u=76281980&t=5)** In this chapter, I'll show you how to create a single column, two-column, and three-column layout that responds based on the viewport width.
>
> **[0:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-multi-column-layout?u=76281980&t=12)** So here's that single column, and if we make this a little wider, there we get our two column, and finally, at full desktop size, we get this third column.
>
> **[0:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-multi-column-layout?u=76281980&t=23)** We'll also cover centering techniques and even refactor our code at the end of the chapter to use named grid areas, and we'll do all of this using the same HTML document as our foundation.
>
> **[0:34](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-multi-column-layout?u=76281980&t=34)** Let's get going.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **Env Vars:** css (1), html (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### Overview of the starting point
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=0)** - [Instructor] Over in Codespaces, you'll find the exercise files for this movie.
>
> **[0:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=4)** You'll see the base HTML document that we're using along with the styles for our three-column layout.
>
> **[0:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=9)** Now, if you were to open this up in the browser, all you'll see right now is the single-column layout.
>
> **[0:14](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=14)** There's no grid in place yet, and this is just the baseline styles from mobile, but we're looking at it in a wider screen.
>
> **[0:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=21)** All I've done on this div with the class of site is to set a maximum width.
>
> **[0:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=27)** And when we scroll down, we're just seeing all of these elements stacked one on top of the other in this native flow layout.
>
> **[0:34](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=34)** This is easy to read and great for mobile, but it's not the three-column layout that we want for bigger screens.
>
> **[0:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=39)** Before we dive in, let's take a quick look at our HTML to understand the structure.
>
> **[0:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=46)** First, we're referencing this base stylesheet that I've used for this entire course.
>
> **[0:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=51)** It's got some basic typography styles and also styles for my skip links, which we'll get to shortly.
>
> **[0:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=56)** Next, I've got this styles specific for this lesson.
>
> **[1:01](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=61)** From there, we've got our opening body tag and the skip link I mentioned.
>
> **[1:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=66)** This link is absolutely positioned offscreen and only appears if you use the Tab key to tab through things on this page.
>
> **[1:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=73)** This is an accessibility feature and is required for this page to pass an accessibility test.
>
> **[1:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=79)** You don't need to worry about it in terms of our layout.
>
> **[1:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=81)** For starters, our grid actually doesn't start until the site element, but even if this was within the grid container, any elements that are positioned absolutely or fixed, get taken out of the grid context so it wouldn't be placed on our grid anyway.
>
> **[1:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=95)** So next, we've got this div with a class of site, and this is actually our grid container.
>
> **[1:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=100)** And then within that, a series of first-level children.
>
> **[1:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=103)** So we've got this header section with a class of masthead, that's got our logo, then we've got our main content area, and this has a featured image, a heading, and some text.
>
> **[1:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=117)** After that, we've got two aside elements.
>
> **[2:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=120)** The first has this class sidebar-primary, and the second has this class sidebar-secondary.
>
> **[2:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=126)** This first one contains some navigation and the second one has a couple of featured articles.
>
> **[2:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=132)** Finally, below that, we have the footer.
>
> **[2:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=135)** So at this point, if we look at our stylesheet, this is pretty light.
>
> **[2:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=139)** I've got a color set for the body text, and here you can see on that site div, I'm restricting the max-width to 80% of the viewport width.
>
> **[2:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=147)** And then I have a few more styles pertaining to the logo, the sidebar headers, and the chapter navigation that's in my primary sidebar.
>
> **[2:36](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=156)** And then finally, we've got some basic styles for our footer credits.
>
> **[2:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=161)** So going back to our page, the first thing I want to do here is take this chapter navigation and put it in a left column underneath this logo.
>
> **[2:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=171)** I want to place the main content in a center column and then place the secondary sidebar in a third column over on the right.
>
> **[2:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=179)** So I'll keep with this header at full span, and if we go down to the bottom, we'll have this footer span the full width of the screen as well.
>
> **[3:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point?u=76281980&t=188)** So now that you've seen the starting point, let's go ahead and get started with this layout.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (2), pass (1)
> **Env Vars:** html (2)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Create the main grid
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=0)** - [Instructor] All right, we're ready to create our grid.
>
> **[0:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=3)** As we would with any other web layout, we'll start mobile first, and then scale the viewport up to find out where the natural breakpoints are for our grid.
>
> **[0:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=11)** So to do that, I will open up my developer tools, and right now, we're previewing this in our responsive design mode.
>
> **[0:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=23)** So here on this small screen, all of this looks just fine as a single column layout, but as I make the viewport wider, we do get to a natural point where there's enough screen space available that this content would look better and be more readable with columns.
>
> **[0:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=40)** So here we are at 820 pixels.
>
> **[0:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=43)** Let's go down and say about 800.
>
> **[0:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=46)** This is sort of an intermediate width.
>
> **[0:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=48)** So at this point, I just want to introduce a second column.
>
> **[0:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=51)** There's not quite enough room for a third column.
>
> **[0:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=54)** So let's head to our code.
>
> **[0:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=56)** I'm in the chapter three folder, and then in the O3_O3b folder, I'll open up this style sheet.
>
> **[1:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=63)** And then I'm going to start by writing a media query on this site element.
>
> **[1:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=75)** So we'll say at a min width of 800 pixels.
>
> **[1:20](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=80)** And then the first thing I want to do as part of this media query is to get rid of this width restriction.
>
> **[1:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=86)** So we'll say max width is none.
>
> **[1:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=89)** And then let's go ahead and set this to display grid, and we'll give it a grid gap of 1em.
>
> **[1:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=100)** Now I only want two columns at this particular breakpoint.
>
> **[1:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=103)** So I'll define grid template columns.
>
> **[1:47](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=107)** And let's say the first column is 225 pixels, and the second is 1fr unit.
>
> **[1:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=116)** So if we go look at this real fast, let me refresh, we can see that we've got this first column at 225 pixels and a second column taking up the remaining space.
>
> **[2:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=127)** And then each of these first level descendants of the grid container are auto placing themselves on the grid within these two columns.
>
> **[2:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=135)** So the next thing we should do is to find some rows.
>
> **[2:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=139)** So the logo and the start of the main content are going to take up the first row.
>
> **[2:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=144)** And then in the second row, I'll put my primary sidebar below the masthead and then span to accommodate the rest of the main content.
>
> **[2:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=151)** The third row, that's going to be where we place featured articles or a secondary sidebar.
>
> **[2:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=158)** And then we'll have a fourth row at the bottom for our footer.
>
> **[2:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=163)** So let's set that up.
>
> **[2:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=165)** I'll add the grid-template-rows property, and set the first row that's going to have my logo in it.
>
> **[2:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=172)** We'll say that's 150 pixels tall.
>
> **[2:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=175)** The next row for the primary sidebar and the rest of the main content all set to auto, and the third row, this is just for my secondary sidebar, so I'll set that to auto as well.
>
> **[3:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=185)** And that means the row height will expand to accommodate whatever content is in there.
>
> **[3:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=190)** And the final row, which is where the footer will sit, let's say that's also 150 pixels.
>
> **[3:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=198)** So let's go back and refresh and turn on our grid overlay.
>
> **[3:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=204)** So head to the Layout tab and select the overlay or this div.site.
>
> **[3:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=210)** So we can see here that our columns and rows are defined, but this layout looks really broken.
>
> **[3:36](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=216)** So in the case of the second column, we've got grid items overlapping each other.
>
> **[3:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=223)** And that's because this main content takes up more than the 150 pixels allotted for it in the first row.
>
> **[3:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=229)** But that secondary sidebar is automatically placed in the next available grid cell, which happens to overlap that main content.
>
> **[3:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=236)** But this is okay.
>
> **[3:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=237)** We're not done yet.
>
> **[3:58](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-main-grid?u=76281980&t=238)** Our next step is to manually place each of these items where we want, and we'll do that in the next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** in the next (2)
> **Exercise Files:** template (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Manual grid item placement
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=0)** - [Instructor] We've defined two columns and four rows for this layout so far.
>
> **[0:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=4)** And now we need to place our grid items on here.
>
> **[0:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=7)** If we look at our HTML here in the inspector, let me make that a little bit bigger.
>
> **[0:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=11)** Let's grab the classes for each of the grid items that we want to place.
>
> **[0:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=15)** So our div with a class of site is our grid container.
>
> **[0:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=18)** So the descendants are this header with a class of masthead, this main with a class of main area, and aside with a class of sidebar-primary, another aside with a class of sidebar-secondary.
>
> **[0:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=31)** And then finally below that we've got the footer.
>
> **[0:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=35)** So let's start with this masthead.
>
> **[0:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=38)** This has our logo in it, and we want to put that in the first column and first row.
>
> **[0:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=43)** So let's head over to our style sheet.
>
> **[0:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=46)** I'm in 03_04b and below the site rule set, I'll create a new rule for masthead and we'll say grid-column.
>
> **[0:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=56)** We want to start at line one and end at line two.
>
> **[1:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=60)** And same thing for our grid row.
>
> **[1:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=63)** We want to start that at line one and end at line two.
>
> **[1:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=68)** Now for our main area, we want to place that in the second column.
>
> **[1:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=71)** So we'll set our grid column to start at line two and end over here on line three.
>
> **[1:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=77)** And then for our grid row, we want to start up here at line one, but we want it to span two columns.
>
> **[1:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=83)** So let's head back to our style sheet and we'll add a new rule for main area and set grid column to start at two and at three.
>
> **[1:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=95)** And for grid row, we'll start at one and then span two columns.
>
> **[1:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=102)** If we go back and refresh, there.
>
> **[1:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=106)** Already this is starting to look better.
>
> **[1:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=108)** Now this primary sidebar is already automatically placed where I want it, which is in this first column and the second row, same as we saw with the masthead being automatically placed in the right spot.
>
> **[2:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=120)** But I do want to go ahead and explicitly defined where it's placed on the grid anyway.
>
> **[2:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=125)** And I do this for a couple of reasons.
>
> **[2:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=127)** One, because it makes it easier to read the CSS and understand what's happening with each grid item.
>
> **[2:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=132)** And secondly, should something change about the way my grid container is set up, this would be an obvious reminder to me that I might need to update placement for this grid item.
>
> **[2:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=142)** So let's go ahead and create a rule for our sidebar-primary and say our grid-column should start at line one and to end at line two, and our grid-row should start at line two and end at line three.
>
> **[2:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=165)** So this didn't change anything about this particular layout, but I changed this from an automatic to a manual grid placement.
>
> **[2:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=173)** So moving along to the secondary sidebar, I actually want to put that here in the second column.
>
> **[3:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=182)** So let's add a rule for sidebar-secondary.
>
> **[3:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=188)** And we want that to start at grid-column 2 and end at line 3.
>
> **[3:14](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=194)** And we want this to occupy the third row, which sits in between the third and fourth grid lines.
>
> **[3:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=205)** All right, there we go.
>
> **[3:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=207)** So the only thing left to do here is to make this footer span both columns.
>
> **[3:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=212)** So let's go back.
>
> **[3:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=215)** Create a rule for footer, and I'll say grid-column will start at line 1 and then end at the final grid line.
>
> **[3:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=224)** So I can say -1.
>
> **[3:47](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=227)** Let's save that.
>
> **[3:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=229)** And now when we look, we see this footer spanning both of those columns.
>
> **[3:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=233)** Fantastic.
>
> **[3:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=234)** So now we have created a two column layout and manually placed each of our grid items where we want them.
>
> **[4:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=240)** But remember, this is for an intermediate screen size.
>
> **[4:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=243)** If we continue to size our browser up, now we need to make this smaller.
>
> **[4:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=251)** If we keep going up maybe somewhere here around 1100 pixels, I think we've got room to add in that third column.
>
> **[4:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/manual-grid-item-placement?u=76281980&t=258)** So we'll do that in the next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), continue (1)
> **CLI Commands:** make (3)
> **Env Vars:** html (1), css (1)
> **Cross-References:** as we saw (1), in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Add third column for wider viewports
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=0)** - [Instructor] Now that we've got more screen real estate, let's add a third column for this desktop layout.
>
> **[0:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=5)** I'm going to start by adding a new media query, and this time we'll say, it's a min-width of 1100 pixels.
>
> **[0:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=11)** So I'm just going to actually copy this.
>
> **[0:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=15)** Paste it, change this to 1100, and then we can get rid of this display grid, and this gap, and the max width since all of that will be inherited from this media query.
>
> **[0:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=30)** So we just need to redefine our grid template columns and rows.
>
> **[0:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=35)** I'm going to keep these first two columns sized as is.
>
> **[0:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=37)** So 225 pixels for the first column, 1 FR unit for the second.
>
> **[0:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=43)** And then let's add a fixed width column of 250 pixels for our third column.
>
> **[0:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=48)** And then I'm going to keep this grid template rows as is just for the moment.
>
> **[0:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=53)** So let's get started by adjusting our grid items.
>
> **[0:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=57)** So for this masthead, I actually want this to span all three columns.
>
> **[1:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=63)** So I'm going to add a media query within this rule.
>
> **[1:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=70)** So at 1100 pixels, we're going to say the mass head starts at the first grid line and extend through the last grid line.
>
> **[1:20](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=80)** So I could say three or minus one.
>
> **[1:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=83)** And because I've already got a grid item occupying the first row, I want to manually set this masthead in the first row.
>
> **[1:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=91)** So I'm going to say grid row will start at line one, and end at line two.
>
> **[1:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=100)** Okay, so right now we've got this content sitting in that first grid row.
>
> **[1:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=104)** So we will get to that and change it.
>
> **[1:47](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=107)** So we still want it in that second column.
>
> **[1:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=109)** So the starting at grid line two and ending at three is correct.
>
> **[1:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=112)** We'll leave that as is, but now we'll add a media query to push this into the second row.
>
> **[2:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=120)** So we'll say grid row, start at line two and end at line three.
>
> **[2:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=128)** And there that goes.
>
> **[2:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=129)** Now for this sidebar primary, this is actually still where I want it sitting in that first column and occupying the second row.
>
> **[2:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=135)** So I don't need to do anything here.
>
> **[2:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=137)** And then for this secondary sidebar, I want to move that over here to this third column.
>
> **[2:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=147)** So let's go into the rule for sidebar secondary, add that media query.
>
> **[2:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=158)** And we want to start that at grid line three, and end it at four.
>
> **[2:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=165)** We'll check that out.
>
> **[2:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=168)** Oh, and we actually need to move it up into the second row.
>
> **[2:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=173)** So we'll say grid row, start at grid line two, and end at grid row line three.
>
> **[3:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=182)** Okay, perfect.
>
> **[3:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=188)** So our footer is already set up to span all available columns, so we don't need any additional responsive styles for that.
>
> **[3:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=196)** Note though, that we never specifically placed this in a particular row.
>
> **[3:20](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=200)** When there were enough grid items to occupy a fourth row, that's where it sat.
>
> **[3:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=204)** But now this page content only takes up three rows in this layout.
>
> **[3:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=207)** So even though we have a fourth row to find, it's empty.
>
> **[3:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=211)** So I'm not going to add any further styles to footer, but I will go back to this grid templates row definition.
>
> **[3:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=217)** Here we go, for this media query.
>
> **[3:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=221)** And I want to keep the top and bottom rows at 150.
>
> **[3:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=224)** So we're just going to get rid of that extra row at auto.
>
> **[3:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=228)** So now if we go back and look, we can see we've got exactly the number of defined rows and columns we want to work with.
>
> **[3:58](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=238)** Now we've achieved this three column layout that's mobile-responsive.
>
> **[4:01](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=241)** So we go from three columns to two columns to a single column based on the available viewport width.
>
> **[4:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=248)** We've done all of this without changing a single line of our HTML.
>
> **[4:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=252)** We didn't have to add extra containers to get our sidebars to appear on either side of our main content, or use floats, or anything like that.
>
> **[4:20](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/add-third-column-for-wider-viewports?u=76281980&t=260)** This is CSS grid, and it opens so much potential for creating interesting web layouts.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (1)
> **Env Vars:** html (1), css (1)
> **Exercise Files:** template (2)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Justify the grid
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=0)** - [Instructor] This layout we've created is restricted to 80% of the viewport width until we get up to our first media query, or see, right there, where we're overriding that restriction.
>
> **[0:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=11)** Now this layout will continue to be full width, no matter how wide the viewport gets, and that might be what you're going for, or it might not be.
>
> **[0:20](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=20)** And this lesson, I wanted to show you an interesting way to restrict the max width of a grid layout without using traditional methods.
>
> **[0:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=27)** And then I'll show you how to justify the entire grid container.
>
> **[0:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=31)** So let's head to our style sheet.
>
> **[0:34](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=34)** To start with the width restriction, let's go to our media query for this 1100 pixels, and instead of the center column taking up 1fr, let's change this to minmax.
>
> **[0:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=46)** We'll say auto, 30em.
>
> **[0:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=51)** So this says, at a minimum, this column width can auto size itself, but at a maximum it should never be more than 30ems.
>
> **[1:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=60)** So let's reload this, and we need to go above 1100 pixels to get to that break point.
>
> **[1:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=66)** There we go.
>
> **[1:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=69)** So now we see in our updated layout that no matter how wide the viewport gets, this second column will never be greater than 30ems.
>
> **[1:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=76)** Notice, though, that our layout is now left aligned, and that's because we haven't specified otherwise.
>
> **[1:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=82)** What if we wanted to center align it or even align it along the right-hand side?
>
> **[1:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=87)** Earlier in the course, when we talked about grid alignment, I introduced you to the justify-contents property, and it's so much easier to make sense of that in a live demo.
>
> **[1:36](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=96)** justify-contents targets the alignment of the grid container itself.
>
> **[1:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=101)** In other words, this container that holds the grid, how is the grid positioned within that container?
>
> **[1:47](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=107)** By default, because the text direction is left to right, it's positioned over on the left, but I can change that to center.
>
> **[1:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=114)** So here, just in the browser, I'm going to add a new property, justify-content, and I'll say center.
>
> **[2:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=123)** And it's strange.
>
> **[2:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=124)** It's not letting me add that property here.
>
> **[2:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=126)** So we'll just create a new property for site and say justify-content: center.
>
> **[2:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=131)** There we go.
>
> **[2:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=133)** And now the grid shifts into the center, or I can set it to the right, and you can see how it now sits along the right-hand side.
>
> **[2:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=141)** So if you wanted to position a grid in the center without using traditional methods of setting a max width and then using margin left and margin right to position it, you can simply add justify-content: center to center your grid container.
>
> **[2:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/justify-the-grid?u=76281980&t=155)** I'll go ahead and add that in my style sheet, and that's it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), continue (1), for, (1), this, (1), default, (1)
> **Cross-References:** earlier in (1), we talked about (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Bonus: Refactor using grid areas
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=0)** - [Instructor] In this chapter, we've built a multi-column layout by defining our grid columns and rows and then manually placing items on the grid using line numbers.
>
> **[0:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=8)** While that obviously works and is one method we can use, I wanted to show you what this would look like if we used named grid areas instead.
>
> **[0:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=16)** So in this lesson, we're going to refactor our CSS to use grid areas, and this will actually reduce the amount of CSS we need to write it since this will let us get rid of the media queries on our grid items.
>
> **[0:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=27)** You'll see this in just a moment.
>
> **[0:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=29)** So to start, let's go back and look at our page around 800 pixels and reorient ourselves with the layout.
>
> **[0:36](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=36)** So we've got our masthead over in the first column, followed by our main content in the second.
>
> **[0:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=42)** And then that second row, second column, we have this primary sidebar, and we'll start there.
>
> **[0:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=49)** So from our style sheet, I'm going to go to that break point for 800 pixels, and we'll say grid, template, areas.
>
> **[0:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=59)** And in that first column where my masthead is, I'll just say header.
>
> **[1:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=64)** And that second column where the main content is, I'll just say main.
>
> **[1:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=68)** We'll drop down to our second row.
>
> **[1:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=70)** And now this is going to be where our first sidebar is.
>
> **[1:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=73)** So I'll say sidebar one.
>
> **[1:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=76)** And then we still have our main content spanning into that section.
>
> **[1:20](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=80)** So I'll just say main.
>
> **[1:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=83)** Now if we go look at our third row, we actually have an empty column here, this first column, and then our secondary sidebar is in the second column.
>
> **[1:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=93)** So I'll just put a period, full stop.
>
> **[1:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=97)** And then in that second column, we've got the other sidebar.
>
> **[1:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=100)** So I'll say sidebar two.
>
> **[1:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=104)** Then in the final row, we want our footer to span both columns.
>
> **[1:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=109)** So we'll just say footer, footer.
>
> **[1:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=114)** Okay, so now let's bump up to our three-column layout.
>
> **[1:58](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=118)** And in this first row, I want the header to span all three columns.
>
> **[2:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=123)** So we'll add a grid template areas to this breakpoint.
>
> **[2:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=129)** And for the first row, we'll say header, header, header.
>
> **[2:14](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=134)** And for that second row, we've got the primary sidebar, the main content, and the secondary sidebar.
>
> **[2:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=143)** So we'll say sidebar one, main, and sidebar two.
>
> **[2:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=150)** And then in this final row, the footer should span all columns.
>
> **[2:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=155)** So I'll say footer, footer, footer to account for each of those three columns.
>
> **[2:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=160)** Let's save that.
>
> **[2:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=162)** And if we go back and look, let's reload.
>
> **[2:47](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=167)** Now, absolutely nothing has changed with my layout, and that's because everything is still manually placed using grid lines.
>
> **[2:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=174)** But let's head over here to our layout tab and turn off these line numbers.
>
> **[2:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=179)** There we go.
>
> **[3:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=180)** Now you can see these named grid areas showing up, and we can see that these actually line up with where I want my grid items to go.
>
> **[3:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=189)** So now that we have our named template areas, the only thing left to do is actually use them to place our grid items.
>
> **[3:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=196)** So going back to our code for masthead, I'm going to go ahead and delete this, and we'll map this to grid area, header.
>
> **[3:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=209)** And for my main area, let's delete the manual placement with lines and change to a manual placement with names.
>
> **[3:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=218)** So I'll say grid area, main.
>
> **[3:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=220)** Same thing for the sidebar, I'll say grid area.
>
> **[3:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=223)** And that is sidebar one.
>
> **[3:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=229)** For sidebar secondary, that grid area is sidebar two.
>
> **[3:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=234)** And finally, for our footer, this grid area is footer.
>
> **[4:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=240)** So let's go ahead, save that, take a look.
>
> **[4:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=245)** Okay, and everything is exactly where it should be, except this time, we're placing grid items into our named grid areas instead of placing them by line numbers.
>
> **[4:14](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=254)** And just to scroll down to that second breakpoint, you can see where those named areas are as well.
>
> **[4:20](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=260)** Honestly, this method feels like cheating to me, and that's because it's easier to wrap my head around using named areas versus line numbers.
>
> **[4:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=267)** And using this method saved us from writing media queries for our grid items, making our CSS both simpler and leaner while still being responsive.
>
> **[4:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/bonus-refactor-using-grid-areas?u=76281980&t=277)** For really basic grids, you might not want to use template areas, but for complex layouts, you might find them easier to work with.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), delete (2), this, (1), finally, (1)
> **Exercise Files:** template (4)
> **Env Vars:** css (3)
> **UI Navigation:** go to (1), scroll down (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 4. Full-Bleed Layout

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What you're creating: A full-bleed layout
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-full-bleed-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-full-bleed-layout?u=76281980&t=0)** - [Tutor] CSS Grid is perfect for creating full-Bleed Layouts, and by that, I mean layouts that extend the full width of the browser.
>
> **[0:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-full-bleed-layout?u=76281980&t=8)** But within these layouts, you typically see some components extending the full width of the viewboard, while other components are confined to a maximum width, and then centered.
>
> **[0:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-full-bleed-layout?u=76281980&t=18)** Doing this without CSS Grid, requires a lot of extra container nesting, and the HTML can get pretty cluttered.
>
> **[0:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-full-bleed-layout?u=76281980&t=25)** With Grid, the HTML is nice and clean, but how we make this layout work, might not be obvious from the start.
>
> **[0:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-full-bleed-layout?u=76281980&t=32)** Here's the challenge.
>
> **[0:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-full-bleed-layout?u=76281980&t=33)** Technically, what we're looking for is a four-column grid where full-bleed content takes up all four columns, and then centered content takes up the two middle columns.
>
> **[0:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-full-bleed-layout?u=76281980&t=43)** But a single global grid won't work in this case as each individual section would be a grid item, and that doesn't give us the alignment options that we're looking for.
>
> **[0:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-full-bleed-layout?u=76281980&t=52)** The solution is to apply the same grid to each section, effectively making a list of matching grids.
>
> **[0:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-full-bleed-layout?u=76281980&t=59)** Then, we can align the grid items within each of those sections to the grid, while simultaneously controlling the overall layout, because each grid is controlled using the same CSS Roll.
>
> **[1:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-full-bleed-layout?u=76281980&t=70)** Make sense?
>
> **[1:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-full-bleed-layout?u=76281980&t=71)** If not, I promise it will soon.

> [!info]- Semantic Content
>
> **Env Vars:** css (3), html (2)
> **CLI Commands:** make (2)
> **Code Keywords:** for. (1)
> **Definitions:** is a  (1)
> **Speakers:** - [tutor] (1)

#### Overview of the starting point
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=0)** - [Instructor] Over in Codespaces, you'll find the baseline HTML document and styles for our full bleed layout.
>
> **[0:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=6)** Looking at index.html, you'll see a standard HTML page.
>
> **[0:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=11)** We start out with our body tag, and next we have our skip to content link, which is required for accessibility.
>
> **[0:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=17)** From there, we have our div with a class of site, and this contains our header, and that header contains the logo and navigation.
>
> **[0:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=26)** And next we've got a main content area, and this has a featured section, it's got a related articles section, and then below that we have this interrupt section, and following that, we have this section with a class of twins, and each of those sections have their own content.
>
> **[0:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=48)** Finally, at the bottom, we have this footer element with a class credits.
>
> **[0:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=53)** Right now, all of this is styled with a basic mobile first layout that restricts the total content width and center aligns everything on screen, so this will be our fallback design as we move forward.
>
> **[1:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=65)** So if we scroll down, everything looks nice and neat with all of the content stacked top to bottom, and everything is easy to read.
>
> **[1:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=73)** If we expand our viewport here, you'll see at a certain point, right there around a thousand, the total width of the content is restricted, and that's using this max width of 50 ems, but everything is still stacked and easy to read.
>
> **[1:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=86)** The only thing missing here is our full bleed component.
>
> **[1:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=90)** So scrolling down to the middle, you'll notice these three boxes.
>
> **[1:34](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=94)** These are using Flexbox to display one next to the other so we get these equal heighth columns.
>
> **[1:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=99)** I'm using Flexbox here, and actually on this navigation bar here too, because it's one dimensional.
>
> **[1:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=105)** Flexbox can handle this just fine.
>
> **[1:47](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=107)** So scrolling toward the bottom, you'll find these two boxes.
>
> **[1:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=112)** Now, in our full bleed layout, the idea is that these boxes should each take up half of the available viewport space and display side by side next to each other.
>
> **[2:01](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=121)** Finally, we end with our footer section.
>
> **[2:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=124)** Now, there's absolutely nothing wrong with this fallback layout.
>
> **[2:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=127)** It may not be the most beautiful thing in the world, but it's easy to read and it flows.
>
> **[2:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=132)** So where do we take it from here?
>
> **[2:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=135)** Well, I want this header with the blue background to be full bleed.
>
> **[2:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=139)** This section beneath it, I want the tan background to extend the full width of the viewport, but I want this text inside to be constrained to a max width and centered in the viewport.
>
> **[2:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=150)** I want the same thing for this three box section and this interrupt section.
>
> **[2:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=157)** For our two boxes here, I want them side by side, the first one taking up 50% of the viewport on the left, and the second one taking up the remaining viewport on the right.
>
> **[2:47](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=167)** And then here for this footer, I want the background color to span the full browser width, and then the content inside to be constrained.
>
> **[2:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=174)** So that's our mission.
>
> **[2:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24688169?u=76281980&t=176)** Let's get to it.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (1)
> **CLI Commands:** find (2)
> **Env Vars:** html (2)
> **File Paths:** index.html (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Create the shared grid
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=0)** - [Instructor] The first thing I want to do here is remove this width constriction on our site container.
>
> **[0:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=6)** So here I am in the beginning style sheet for this lesson, and I've already got a media query set up for 800 pixels.
>
> **[0:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=15)** And within this I've got a rule applying flex box to my three related articles.
>
> **[0:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=19)** So within this media query, I'll go ahead and set this site to a max width of none, which will override this max width declaration.
>
> **[0:28](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=28)** So if we go save that in the browser, and refresh, we can see that now everything is full bleed.
>
> **[0:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=35)** But we need to use grid if we're going to align these items like we want.
>
> **[0:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=40)** So you'll remember from the intro movie to this chapter, that we can't use a single global grid here.
>
> **[0:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=46)** Instead, we need to create a grid rule that applies to each of these sections individually.
>
> **[0:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=51)** But we use the same rule for each of them.
>
> **[0:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=54)** So before we do that, let's reorient ourselves with the HTML markup to find out exactly where we want to apply a grid.
>
> **[1:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=62)** So this div with a class of site, is our global container, but that's not actually where we want the grid.
>
> **[1:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=69)** In the case of this header, it's already spanning the full width, and that's exactly what I want.
>
> **[1:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=73)** So I don't need a grid there.
>
> **[1:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=75)** Now when it comes to this main element, with a class of main area, I want each of these sections within that to be an independent grid.
>
> **[1:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=84)** Also, I want this aside within the footer that has a class of credits to be a grid.
>
> **[1:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=90)** So by applying a grid on those elements, all of their first level descendants become grid items.
>
> **[1:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=95)** So everything within each of these sections and everything within this footer, I can align it however I want to their individual grids.
>
> **[1:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=103)** So going back to our media query, we'll use the selector combinator, main area, and then the child combinator symbol, and the universal selector.
>
> **[1:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=117)** So this essentially says to select all direct child elements of the element with this class, main area.
>
> **[2:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=126)** So that'll be this section, feature, this section, related articles, this section, interrupt, and this section, twin.
>
> **[2:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=135)** And then we also want to capture this footer with the class of credits.
>
> **[2:20](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=140)** So I'll just say comma, credits.
>
> **[2:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=145)** And from here we'll go ahead and say display grid.
>
> **[2:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=151)** So let's save that and refresh.
>
> **[2:34](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=154)** And if we go back and look, nothing has visually changed, but if we head over to our Layouts tab, let me make this a little bigger.
>
> **[2:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=164)** We can see now that we have these five grids.
>
> **[2:47](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=167)** Section feature, section related articles, section interrupt, section twins, and footer credits.
>
> **[2:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=172)** So these are each individual grids that I've defined them using the same rule.
>
> **[2:58](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-shared-grid?u=76281980&t=178)** In the next lesson, we'll take a look at defining our columns and placing items within each grid.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), override (1), class, (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** html (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Define columns and position grid items
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=0)** - [Speaker] Our design has a four column layout, where the two center columns are constrained to a max width, and the two outer columns, so the first and last columns, take up the remaining viewport space.
>
> **[0:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=11)** To add a little complication into the mix, towards the bottom we have these two twin columns that span across two columns each.
>
> **[0:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=19)** To make this work, we'll use a combination of FR units, the repeat keyword, and the minmax function.
>
> **[0:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=26)** So here in the rule where we've defined our grid, I'll add grid template columns.
>
> **[0:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=33)** We'll set the first column to 1FR, and then for those two middle columns, I'll say repeat two.
>
> **[0:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=40)** And we'll use minmax to say that at a minimum these can auto size, and at a max we want them no more than 25ems.
>
> **[0:50](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=50)** So these two middle columns could take up a max of 50ems.
>
> **[0:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=55)** And then we'll end it with the last column, also being 1Fr.
>
> **[1:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=60)** We'll save it.
>
> **[1:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=62)** And now when we go look in the browser, everything is not looking so good.
>
> **[1:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=67)** All of the content is aligned on the left side and this layout looks very broken.
>
> **[1:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=73)** This is happening because right now the browser is auto-populating each grid and placing each grid item in the first column, which is on the left side.
>
> **[1:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=82)** So the next step in our process here is to manually place our grid items on the correct line.
>
> **[1:28](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=88)** Let me turn on one of our grid overlays to make this a little easier to see.
>
> **[1:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=92)** We will turn it on for footer credits.
>
> **[1:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=95)** And let's turn on our line numbers.
>
> **[1:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=98)** There we go.
>
> **[1:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=99)** So essentially I want all the content on the page to be placed between the second grid line and this fourth grid line.
>
> **[1:47](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=107)** So going over to our index.html, now we can see what we're targeting.
>
> **[1:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=114)** Our grids are defined on each of these first level children.
>
> **[1:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=117)** So we've got a grid on feature.
>
> **[2:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=120)** We've got a grid on related articles.
>
> **[2:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=123)** We've got a grid on interrupt.
>
> **[2:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=128)** We have a grid on twins.
>
> **[2:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=130)** And then we have a grid on this footer, with a class of credits.
>
> **[2:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=135)** We're actually going to ignore this twins section right now.
>
> **[2:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=138)** So just taking those classes that we want, we'll head back over to our style sheet and add a new role.
>
> **[2:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=145)** Feature content.
>
> **[2:28](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=148)** Related.
>
> **[2:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=152)** Interrupt content.
>
> **[2:34](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=154)** And we want the aside that is a direct descendant of that credits grid.
>
> **[2:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=161)** And inside of this rule we'll do a manual placement, so we'll say grid column.
>
> **[2:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=166)** We want each of these items to start at line two and end at line four.
>
> **[2:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=173)** Let's refresh and take a look.
>
> **[2:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=176)** Okay, so with the exception of these twins boxes, each of our grid items is placed between lines two and four.
>
> **[3:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=183)** There we can see it for footer.
>
> **[3:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=185)** Here we can see it for this interrupt section.
>
> **[3:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=189)** Here we can see it on our related articles.
>
> **[3:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=192)** And finally we can see it here on feature.
>
> **[3:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=195)** And you can turn on the individual grid overlays for these if you want to see a little bit more about exactly what's going on.
>
> **[3:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=202)** So the only thing left here is to style out these twin boxes.
>
> **[3:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=207)** Now, looking at our HTML here, this section has two divs each with a class of twin.
>
> **[3:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=215)** And I want each one to take up 50% of the viewport.
>
> **[3:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=218)** So basically I want it to span from line one to line three for the first one, and then from line three to line five for that second one.
>
> **[3:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=228)** So let's go back and create a rule for that twin class.
>
> **[3:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=234)** And here I can actually simply say, grid column span two.
>
> **[4:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=242)** And if we save that and look, we can see that the grid automatically placed the first grid item with this class twin at the first grid line.
>
> **[4:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=250)** And it spans two columns to end at the third grid line.
>
> **[4:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=253)** And then this next grid item is placed there, and it spans those remaining two columns.
>
> **[4:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=258)** So if we scroll up, we've got this header spanning the full width, no grid required in this case.
>
> **[4:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=265)** This next section where the background color is full bleed, but the content in it is contained.
>
> **[4:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=271)** Then we've got our three related articles confined and also centered, with a full bleed background.
>
> **[4:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=278)** Same thing for this text interrupt section.
>
> **[4:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=281)** We've got our twin boxes taking up half the view port each and displaying side by side.
>
> **[4:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=285)** And finally, our footer spanning the full width while the grid item inside is placed between that second and fourth column.
>
> **[4:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=292)** And if we downsize the screen when we hit 800, there it goes.
>
> **[4:58](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=298)** We go back to this fallback layout, which is single column all the way.
>
> **[5:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-columns-and-position-grid-items?u=76281980&t=303)** And that, friends, is how you can make an interesting full bleed layout with CSS Grid.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (1), class. (1), case. (1), finally, (1)
> **CLI Commands:** make (3)
> **Env Vars:** html (1), css (1)
> **File Paths:** index.html (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll up (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)


### 5. A Very Uniform Card Layout

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What you're creating: A uniform card layout
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-uniform-card-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-uniform-card-layout?u=76281980&t=0)** - [Instructor] So far, we've seen how to make a multi-column layout with grid and a full bleed layout using multiple grids defined with the same rule.
>
> **[0:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-uniform-card-layout?u=76281980&t=8)** In this chapter, I want to cover another very common layout pattern you'll find on the web, which is a card layout.
>
> **[0:14](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-uniform-card-layout?u=76281980&t=14)** Card layouts are well-suited for things like product category or search results pages, blog post archives, or really anytime you need to show a preview of information for a lot of items.
>
> **[0:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-uniform-card-layout?u=76281980&t=26)** I'm calling what we're building in this chapter, a uniform card layout and by that I simply mean that every card is identical in how it's arranged, and the overall layout is organized neatly into columns and rows.
>
> **[0:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-uniform-card-layout?u=76281980&t=38)** At first glance, you might think this is a better fit for Flexbox, and you'd be right in the sense that Flexbox could totally handle this layout that flows along a single horizontal axis and wraps into additional columns as needed.
>
> **[0:50](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-uniform-card-layout?u=76281980&t=50)** But using GRID, lets us do something interesting in this case, which is to stack grid items.
>
> **[0:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-uniform-card-layout?u=76281980&t=56)** In this case, we have two grid items occupying the same grid cell, giving this appearance of an overlay.
>
> **[1:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-uniform-card-layout?u=76281980&t=62)** Let's get into it.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), let (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (2)
> **Env Vars:** grid (1)
> **Speakers:** - [instructor] (1)

#### Overview of card markup and starter styles
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=0)** - [Instructor] Let's start by taking a look at the markup we're working with.
>
> **[0:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=3)** Our index.html is different in this chapter than it was in the previous.
>
> **[0:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=8)** So starting with our opening body tag, we see our skip link for accessibility, and then we have a header element.
>
> **[0:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=15)** Beyond that, we have this div with a class of cards, and within that, we've got nine of these divs with a class of card singular, and these will be the cards that make up our grid.
>
> **[0:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=29)** Within each card, we have a figure, and that's our featured image.
>
> **[0:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=33)** Then we have some info and that includes a name and a title, and the same pattern follows for each of these nine individual cards.
>
> **[0:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=41)** And then at the very end, we get this footer.
>
> **[0:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=44)** We're not actually doing anything with the footer or even the header in this chapter.
>
> **[0:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=49)** Instead, we're focusing on an overall layout for this card section, and then a layout that applies to how each single card is displayed within that.
>
> **[0:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=57)** Let's take a look at this file on the browser so that you can see what we're starting with.
>
> **[1:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=62)** These are the robots of Binaryville, and they've volunteered to help me with a little visual interest.
>
> **[1:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=68)** So far, there's not much going on.
>
> **[1:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=70)** If we use our inspect tool, we can see that for each card we've got a five pixel solid white border set.
>
> **[1:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=79)** We've got a box shadow, and we have a max width set.
>
> **[1:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=83)** And then if we look at the individual elements within a card, we start with this figure with a class of featured-image, and if we click on image, we can see that we have a max height of 400 pixels set and the width set to auto.
>
> **[1:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=97)** That gives us some uniformity, even if our source images aren't all the same size.
>
> **[1:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=102)** Then for this div with a class of info, we've got a background color that's a sort of purple, and we're using an HSL color value with an alpha transparency of 0.7 or 70%.
>
> **[1:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=114)** Our text color is set to white and we have two ems of padding so that the text in this container doesn't bump right up against the edge.
>
> **[2:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=122)** Beyond that, we've got some typographical styles for both our name and our title.
>
> **[2:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=128)** One other thing I want to point out here, and that's when I hover over this info div, my background color changes.
>
> **[2:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=135)** Let's go look at our style sheet.
>
> **[2:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=138)** And if we go down to where we've styled this info selector, you can see that we've got these focus and hover styles.
>
> **[2:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=147)** So whether we hover our mouse or we have keyboard focus on that element, we're going to change out the background color.
>
> **[2:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=155)** Other than that, we've got a few base styles here, but nothing related to the actual layout.
>
> **[2:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup-and-starter-styles?u=76281980&t=160)** We'll get started with that in the next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **File Paths:** index.html (1)
> **CLI Commands:** make (1)
> **Env Vars:** hsl (1)
> **Versions:** 0.7 (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Define the main grid
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=0)** - [Instructor] The next step is to create our primary grid that will hold each of these cards.
>
> **[0:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=4)** So we want to target this container div with a class of cards, and I'm going to set my browser to a responsive view.
>
> **[0:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=12)** So let's go down to maybe a mobile size.
>
> **[0:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=16)** We'll start here and then we'll move up to larger screens.
>
> **[0:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=19)** So far, you can see these cards are already stacked, one on top of the other, which is exactly what we want for the small viewport, but there's no spacing between items.
>
> **[0:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=29)** So over in the style sheet for this lesson, under this layout comment, I'm going to create a new rule for cards.
>
> **[0:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=37)** We'll set the display to grid and use gap to set a 2m gap between each card or grid item.
>
> **[0:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=46)** So if we save that and refresh, now we can see that gap between each row.
>
> **[0:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=55)** So let's go ahead and start expanding our viewport up.
>
> **[0:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=59)** And you can see on this card, we've got this width restraint of 360 pixels.
>
> **[1:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=65)** And right now that is justified over here on the left side of the grid.
>
> **[1:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=70)** This would actually look better if it were centered from the get go.
>
> **[1:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=73)** So let's head back to our style sheet.
>
> **[1:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=76)** And here where we've defined the grid, we'll just say justify-content: center.
>
> **[1:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=82)** And now we can see that centered in the grid. Perfect!
>
> **[1:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=86)** If we keep going up in our viewport, we can see maybe around 700 pixels or even a little smaller, we get to a point where we have room for a second column.
>
> **[1:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=97)** So let's go back to cards and add a media query.
>
> **[1:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=106)** We'll start at 660 pixels and see how that looks.
>
> **[1:50](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=110)** And now when our screen is at least this size, let's set our grid template columns to be a repeat to equal columns and we'll say minmax of at least auto sized at the minimum and 360 pixels wide at the maximum.
>
> **[2:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=130)** So if we go back and look at that, perfect!
>
> **[2:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=133)** We've now got these two side-by-side cards, drops to one column, and then at 660, we go to the second column.
>
> **[2:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=141)** So now let's keep going up and see when maybe we could add a third column and make that smaller, maybe here around this 1100 mark, let's give that a try.
>
> **[2:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=158)** So I'm going to copy this media rule I already have.
>
> **[2:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=163)** Set a new one, and this time, I'll update the minimum width to 1100 pixels.
>
> **[2:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=169)** And instead of saying repeat two columns at this minmax(auto, 360), let's just add a third column.
>
> **[2:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=177)** We'll save that. And now we get the third column.
>
> **[3:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=182)** And in this case, it looks like this image of our robot Belle here is a little larger than say, Dolores or Rex.
>
> **[3:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=189)** And so this column appears to be taking up more space.
>
> **[3:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=193)** So instead of using that auto width at a minimum, let's change that, we'll say 300 pixels.
>
> **[3:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=203)** And if we come back and refresh, there.
>
> **[3:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=206)** Now we get a little bit more uniformity on that card size.
>
> **[3:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=209)** So I'll go back and change that for our smaller break point.
>
> **[3:34](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=214)** And if we refresh, scale down, there we go to two side by side and finally one.
>
> **[3:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=223)** So perfect!
>
> **[3:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=224)** We now have a responsive grid layout with each of these cards, which are the grid items, just auto placing themselves on the primary grid that controls the overall layout.
>
> **[3:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=234)** And just to be nice to my future self, I'm going to go ahead and add a comment letting me know that this bit of code applies to my primary grid.
>
> **[4:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid-24687419?u=76281980&t=243)** In the next lesson, we'll turn our attention to the individual cards.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), try. (1), case, (1), self (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Create grid for each card
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=0)** - [Instructor] At this point, we've defined our grid for the overall layout, but beyond some basic styling, we haven't really done anything to control the layout of each individual card.
>
> **[0:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=9)** It's just defaulting to a flow layout where each element stacks on top of the other based on where it's placed in the dom.
>
> **[0:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=16)** So here with an each card, we've got the figure with the image followed by this div with a class of info, and then within that we've got the name and that's stacked on top of title.
>
> **[0:28](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=28)** So here's where things can start to get interesting.
>
> **[0:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=31)** One of the cool things you can do with grid is stack items.
>
> **[0:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=35)** You already know that grid lets you place any grid item in any cell, but we haven't really had a good example yet of placing two grid items in the same grid cell.
>
> **[0:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=44)** Let's try it out.
>
> **[0:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=46)** So over in my style sheet for this lesson, I'll go below where we've set our primary grid, and let's add a comment that we're creating a secondary grid for the individual card layout and I'll start with the rule targeting the card selector.
>
> **[1:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=63)** Set it to display grid.
>
> **[1:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=64)** And in the case of this grid, I'm only going to have a single column and a single row.
>
> **[1:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=69)** I can explicitly set that, but even if I didn't, that would be the default anyway.
>
> **[1:14](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=74)** But I'll go ahead and say grid template columns, one column at 1fr, and the same for grid template rows.
>
> **[1:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=85)** So this single rule will now apply to every card on the page.
>
> **[1:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=89)** So basically we've created nine nested grids.
>
> **[1:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=93)** So nothing is visibly changed yet, but if we go to the layout tab, we can see each of these grids that we've created for our individual cards.
>
> **[1:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=102)** So our next item up is to target the individual grid items and manually place them in that first column and the first row.
>
> **[1:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=109)** We could do that by targeting the featured image selector and the info selector.
>
> **[1:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=114)** Or we can just come over and say, I'm going to create a nested rule here.
>
> **[1:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=119)** We use the universal selector along with a descendant combinator, and that will target both of those grid items.
>
> **[2:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=129)** So we'll say grid column starts at line one, and grid row starts at line one.
>
> **[2:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=136)** I'm using a shorthand notation here and not explicitly setting the end line for either the row or the column.
>
> **[2:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=143)** When you don't specify a column end line or a row end line, the default behavior is to span only one line.
>
> **[2:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=151)** So looking in the browser here, we've got the overlay turned on for one of these cards, and you can see that both the featured image grid item over here in styles, let's see, is placed in grid column one and grid row one.
>
> **[2:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=165)** And the same thing for this info.
>
> **[2:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=168)** It's also placed in grid column one and grid row one.
>
> **[2:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=172)** And that's creating this stacked effect.
>
> **[2:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=175)** It's probably obvious now why I have this purple background with a little alpha transparency.
>
> **[3:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=180)** If I didn't, we wouldn't be able to see the grid item underneath.
>
> **[3:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=184)** So at this point, we have our card layout almost the way we want it.
>
> **[3:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=189)** The last step is to position these grid items.
>
> **[3:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=193)** I'm actually happy with the positioning of the info, but I'd like to align this image along the right edge of the grid.
>
> **[3:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=201)** If I wanted the same positioning for all grid items, so both the featured image and the info, I could set justify items to end or whatever positioning we wanted.
>
> **[3:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=212)** But I don't actually want this, I just want to target the featured image.
>
> **[3:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=215)** So I'll create a new rule for that and set this to justify self, end.
>
> **[3:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=225)** So now if we refresh, we can see that the featured image is now aligned along this right edge of the inline axis.
>
> **[3:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=235)** Alright, so this now looks exactly like what we set out to create.
>
> **[4:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=240)** Just to recap what we've learned in this chapter, we've used grid to do something very straightforward, which is create a uniform layout for cards in predefined columns.
>
> **[4:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=250)** Each card or grid item has automatically placed itself on this grid based on its order in the dom.
>
> **[4:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=256)** From there, we use the same rule to create an individual grid for each card.
>
> **[4:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=261)** Each card has two grid items, that featured image and the info, and we used manual grid placement to stack those items on top of each other, creating a unique effect that would be significantly harder to accomplish without grid.
>
> **[4:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=275)** Grid truly does open the door for all sorts of interesting layouts.
>
> **[4:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card-24690135?u=76281980&t=279)** If you can dream a layout, you can probably do it with grid.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1), self (1)
> **UI Navigation:** go to (1), open the (1)
> **Exercise Files:** template (2)
> **Speakers:** - [instructor] (1)


### 6. A Variable Card Layout

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What you're creating: A variable card layout
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-variable-card-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-variable-card-layout?u=76281980&t=0)** - [Instructor] CSS Grid shines for a lot of reasons that you've already seen.
>
> **[0:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-variable-card-layout?u=76281980&t=4)** In this chapter, I want to show you a different sort of card layout using Grid.
>
> **[0:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-variable-card-layout?u=76281980&t=8)** Instead of a very uniform layout like we saw in the previous chapter, this chapter focuses on a variable card layout.
>
> **[0:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-variable-card-layout?u=76281980&t=15)** In this case, each individual card is a grid with a unique grid definition, and the overall layout for these cards is non-uniform.
>
> **[0:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-variable-card-layout?u=76281980&t=24)** For instance, in this design you're seeing here, the first set of three cards has two cards taking up the first couple of rows and the first two columns, and the third card sits in that final column and spans two rows, and then the next set of three cards reverses this pattern.
>
> **[0:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-variable-card-layout?u=76281980&t=41)** This in and of itself is interesting and takes more specific grid placement per item than we've seen so far.
>
> **[0:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-variable-card-layout?u=76281980&t=48)** Beyond that, each card is a grid, and some of these grids share the same layout, while others do not.
>
> **[0:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-a-variable-card-layout?u=76281980&t=53)** As we get deeper into the chapter, I'll show you how to create each of these grids to accomplish a variable card layout.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Keywords:** case, (1)
> **Env Vars:** css (1)
> **Cross-References:** previous chapter (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Overview of card markup
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=0)** - [Instructor] We're starting at a fairly similar point as the previous chapter in terms of our index.html.
>
> **[0:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=6)** After this opening body tag, we've got our skip link for accessibility, followed by our header.
>
> **[0:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=12)** One difference from the previous chapter is that I've wrapped the cards in a div with this class of site, I've used that to set a max container width for the content, as well as add a little margin to the top and bottom of this container.
>
> **[0:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=25)** And from here it should look familiar.
>
> **[0:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=27)** We've got a div with a class of cards, plural, and then we go into each of our individual cards.
>
> **[0:34](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=34)** Now for these, I've reduced the total number of cards to six.
>
> **[0:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=37)** So for each of these individual cards with the class of card, we've got the featured image with an image, and then from there a div with a class of info.
>
> **[0:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=46)** And inside of that we've got the name and title.
>
> **[0:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=49)** This time we've just added a third paragraph with a class of description.
>
> **[0:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=53)** With those exceptions, the remainder of the markup is what you've already seen.
>
> **[0:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=57)** We close out the site container, and after that we have the footer.
>
> **[1:01](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=61)** The same as the previous chapter, we're not doing anything with the header or footer here.
>
> **[1:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=66)** We're only focusing on an overall layout for the card section and then layouts for each individual card.
>
> **[1:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=72)** So let's take a look at this file in the browser and you can see what we're starting with.
>
> **[1:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=77)** I'll go ahead and open up the inspector and we can see what styles have already been applied.
>
> **[1:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=82)** So starting with this div container with a class of site, we've got a max width set on that to constrain everything within it.
>
> **[1:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=90)** And then a top and bottom margin of two Ms, followed by a left and right margin set to auto, which centers this container in the viewport.
>
> **[1:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=99)** And then if we move on to cards, we don't have any styling there yet.
>
> **[1:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=104)** Drilling down into a single card, you can see that we've got a background color set.
>
> **[1:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=109)** We've got a little border with a border color.
>
> **[1:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=112)** We've got a border radius to get those rounded corners.
>
> **[1:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=114)** And then a little padding.
>
> **[1:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=117)** Drilling further down into our card, we've got this featured image.
>
> **[2:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=120)** There are no styles set on that yet.
>
> **[2:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=122)** And within that we have got the image and it's got a max height set and it's width set to auto.
>
> **[2:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=129)** This is helpful if you're working in a situation where you don't always know the dimensions of an image, you can constrain it to a particular height or width.
>
> **[2:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=138)** In this case, we're constraining the height and then set the opposite dimension.
>
> **[2:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=142)** In this case, the width, to auto.
>
> **[2:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=145)** That tells the image to constrain itself to a maximum of 300 pixels.
>
> **[2:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=149)** And then this auto width just means that the image will scale while keeping its original aspect ratio.
>
> **[2:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=155)** So, you can see what that looks like turned off and why we need it.
>
> **[2:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=159)** From there, we go to this div with a class of info, and there are no styles on that yet.
>
> **[2:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=165)** And then for name, title, and description, we just have some basic typography settings.
>
> **[2:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=171)** So, that's the browser view.
>
> **[2:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=173)** But if you open up our style sheet for this lesson in 06_02, I've got all of these styles we just looked at listed here under General Styles.
>
> **[3:01](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=181)** So this is our official starting point.
>
> **[3:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-card-markup?u=76281980&t=183)** Join me in the next lesson and we'll set up the primary grid for the card layout.

> [!info]- Semantic Content
>
> **Cross-References:** previous chapter (3), in the next (1)
> **Code Keywords:** case, (2), let (1)
> **File Paths:** index.html (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Define the main grid
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=0)** - [Instructor] Our first mission is to create the overall grid layout that we'll use to place each of these cards.
>
> **[0:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=6)** To make it a little easier to visualize here in the browser, I'll use the inspector to show what we want.
>
> **[0:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=11)** This div with a class of cards, that's what will hold each of these individual cards.
>
> **[0:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=15)** And this will be my main grid.
>
> **[0:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=17)** So I'll go ahead and create a new rule for that and just say display grid.
>
> **[0:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=24)** I also note that I want three equal width columns on desktop, so I'll go ahead and say grid-template-columns.
>
> **[0:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=32)** We'll say repeat three columns at 1fr each.
>
> **[0:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=37)** And let's go over to this layout tab and turn on the overlay for this grid we just created.
>
> **[0:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=43)** There, now, this is a little bit easier to visualize.
>
> **[0:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=46)** So what I'm going for is a three-column layout for a desktop view where this first card takes up the first two columns and the second card takes up the next two columns and the row beneath it.
>
> **[0:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=57)** And then this third card takes up the third column, but spans the first row and into a second row.
>
> **[1:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=64)** And for the next trio, I want this fourth card to occupy the first column and span two rows.
>
> **[1:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=70)** The fifth card can go here, taking up the second and third columns in a single row.
>
> **[1:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=75)** And then finally, this sixth card could sit right below that fifth card, occupying the second and third columns.
>
> **[1:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=82)** Since this is a little more complex layout, I'm actually going to start writing CSS for this desktop view.
>
> **[1:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=87)** And then we'll come back and add break points as needed to keep the design looking good.
>
> **[1:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=92)** So let's head to our style sheet for this lesson and we'll start by adding a large comment for layout.
>
> **[1:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=105)** And beneath that, I'll add a little comment where we'll create our primary grid.
>
> **[1:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=113)** So I'll start by replicating what we just did in the browser.
>
> **[1:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=116)** So we've got a rule for cards, set the display to grid.
>
> **[2:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=123)** Our grid-template-columns are a repeat of three columns at 1fr.
>
> **[2:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=128)** I also know that I want a row-gap of 60 pixels and a column-gap of 20 pixels.
>
> **[2:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=138)** And just because I like my properties to be in alphabetical order, I'm going to relocate this column-gap right there.
>
> **[2:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=146)** So now it's time to strategize how we want to eventually place these grid items.
>
> **[2:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=151)** And we know we can do that for each card by using the grid column and grid row properties to set our starting and ending grid lines but that's going to get pretty cumbersome for this layout.
>
> **[2:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=162)** This layout is actually a perfect time to bring in grid-template-areas and place cards by our named areas.
>
> **[2:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=168)** So let's say grid-template-areas.
>
> **[2:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=175)** And for a straightforward naming convention, I'll just say card1, card1, and card3.
>
> **[3:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=183)** So in this case, card1 is in the first and second columns, and card3 is over here in the third column.
>
> **[3:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=190)** For the next row, we'll say card2, card2, and then card3.
>
> **[3:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=196)** So card2 will take up these first two columns.
>
> **[3:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=199)** And now I've got card3 taking up the third column and now spanning two rows.
>
> **[3:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=205)** Now, for the next row, I essentially want to flip the pattern.
>
> **[3:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=209)** So card4 will be in the first column, and then card5 spans the next two columns.
>
> **[3:36](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=216)** And our final row also starts with card4.
>
> **[3:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=219)** And then we have card6 spanning the remaining two columns.
>
> **[3:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=225)** I'll save that.
>
> **[3:47](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=227)** And if we head back and refresh, using the inspector here, we can see these defined columns and we've got this 20 pixel column gap and then this larger 60 pixel row gap.
>
> **[3:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=239)** Now, right now, each of these cards is automatically placing itself on the grid, even though I've defined the grid template areas.
>
> **[4:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=246)** And we can see that over here on the layout tab if we say show area names.
>
> **[4:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=252)** Let's turn off line numbers to make that a little easier to read.
>
> **[4:14](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=254)** Okay, so card1, card3, below that, card2.
>
> **[4:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=261)** And then we have these empty rows and columns that haven't been populated yet.
>
> **[4:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=265)** So even though we've defined those grid template areas, we still need to manually place these cards in those defined areas to get it to show up where I want.
>
> **[4:34](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-main-grid?u=76281980&t=274)** And we'll do that in the next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (1), case, (1)
> **Exercise Files:** template (6)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Env Vars:** css (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Place cards on the grid
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=0)** - [Instructor] Looking at our index.html here, you'll note that each of the cards we want to place has a class called card.
>
> **[0:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=7)** There's no other unique idea or class we can use to differentiate this first card from say the second or maybe third.
>
> **[0:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=15)** That's a common scenario you might run up against if you're writing styles for html you don't control.
>
> **[0:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=21)** This is where the nth-of-type selector is going to come in handy.
>
> **[0:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=24)** There are some other approaches we could use to sequentially target each of these cards, but nth-of-type does the job really cleanly, so that's what we'll use.
>
> **[0:34](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=34)** So let's go and open up the style sheet for this lesson.
>
> **[0:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=38)** And for the sake of code organization and readability, I'm going to nest the individual card rules under this existing cards rule where we've defined our primary grid.
>
> **[0:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=49)** So I'll start with the card selector and then add the nth-of-type.
>
> **[0:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=56)** And specifically, we want to target the first card.
>
> **[0:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=59)** So we'll say one.
>
> **[1:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=62)** And now we want to use grid area to place that in our defined grid area of this card one.
>
> **[1:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=71)** And we'll do that for each card.
>
> **[1:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=72)** So here, card, nth-of-type two, and the grid area is card two.
>
> **[1:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=81)** And so forth and so on.
>
> **[1:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=84)** We'll go ahead and save that.
>
> **[1:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=87)** And if we head back to the browser, let's do a refresh.
>
> **[1:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=91)** There we go.
>
> **[1:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=92)** Now each of these cards is occupying its defined grid area.
>
> **[1:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=95)** So let's turn on our grid overlay.
>
> **[1:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=99)** And we've got our area names checked.
>
> **[1:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=101)** Okay, so here's card one and that's in the card one space.
>
> **[1:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=105)** Card three over here in the third column and first two rows.
>
> **[1:50](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=110)** Card two sits just below card one.
>
> **[1:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=115)** We've got card four over here in this left hand column spanning two rows.
>
> **[2:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=120)** And then we've got card five and underneath that, card six.
>
> **[2:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=124)** Now that we've got each card placed where we want it, and visually this grid is starting to come together.
>
> **[2:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=130)** Now let's go back in and add some responsiveness to this grid.
>
> **[2:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=133)** So if I go into responsive mode here, I can see from the site container, let me go to the Styles tab, that we've got a max width set of 1,200 pixels.
>
> **[2:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=145)** So if we make this smaller, maybe around here, 980 pixels or so, this is where I want to drop to a single column layout.
>
> **[2:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=155)** So back to our grid container, let's drop in a nested media query.
>
> **[2:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=161)** We'll say at 980 pixels.
>
> **[2:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=164)** And I'll just copy and paste this grid template columns and grid template areas into that since I know that's the desktop layout I want.
>
> **[2:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=173)** And then here for my default or my mobile view that's less than that, I'll say the grid template columns are just a single column at 1fr.
>
> **[3:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=182)** And then I'll rewrite the grid template areas to follow that single column model.
>
> **[3:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=187)** So first row is card one, second row is card two, third row is card three.
>
> **[3:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=198)** The next row, card four.
>
> **[3:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=201)** After that, card five.
>
> **[3:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=205)** And then finally, card six.
>
> **[3:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=207)** And since we're using named grid template areas and placing each card in an area, we don't need to write any responsive queries for these.
>
> **[3:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=215)** They'll just be placed however we've defined those grid template areas.
>
> **[3:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=219)** So let's go refresh.
>
> **[3:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=223)** Now, if we make our viewport smaller than 980 pixels, we see this go down to a single column.
>
> **[3:50](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=230)** And then above that, we go up to that three column layout.
>
> **[3:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=233)** We may need to adjust this later, but at least we're starting with a basic responsive layout.
>
> **[3:58](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/place-cards-on-the-grid?u=76281980&t=238)** In the next lesson, we'll look at the layout for each of these individual cards.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), type. (1), finally, (1)
> **Exercise Files:** template (6)
> **CLI Commands:** make (2)
> **File Paths:** index.html (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Create grid for each card
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-grid-for-each-card?u=76281980)

#### Position items within the card grid
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=0)** - [Instructor] Now that we have our grid for each card defined along with our template areas, the next step is to place the grid items on the grid.
>
> **[0:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=7)** So just to reorient ourselves here in the HTML, card is where our grids are defined.
>
> **[0:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=13)** So our grid items are just going to be the first level descendants of this grid.
>
> **[0:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=17)** So we've got figure with the class of featured-image and a div with a class of info.
>
> **[0:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=23)** And those are the two selectors that I'm after.
>
> **[0:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=26)** So back over in my style sheet for this lesson, I'm going to go down to our card grid.
>
> **[0:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=33)** And within that, under these nth-of-type selectors, I'll just add two rules.
>
> **[0:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=38)** One for featured-image and another for info.
>
> **[0:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=45)** So the featured-image we want to place in the grid area that we've been calling image.
>
> **[0:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=49)** So I'll just say grid-area: image.
>
> **[0:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=52)** And then for our info, we want to place that in the grid area we've called text.
>
> **[0:58](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=58)** So grid-area: text.
>
> **[1:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=63)** So if we go back to the browser, I'll refresh here.
>
> **[1:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=66)** And for this first card, let's turn on the grid overlay.
>
> **[1:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=70)** And here, you can see the image is in the image grid area, and the info is over here in the text grid area.
>
> **[1:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=79)** If we turn on the overlay for the second card, we can see our text is where it should be as is our featured image.
>
> **[1:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=87)** And for this third card, we've got the image in the first row and the text in the second.
>
> **[1:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=92)** This is looking really close, a bit of fine-tuning, and that is I want to horizontally center the image within its grid cell.
>
> **[1:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=99)** And I want to do this for every card.
>
> **[1:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=101)** So for example, let me go to my Styles tab and click on the featured-image.
>
> **[1:47](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=107)** So if I say justify-self center, and you can see that positions the images in the center.
>
> **[1:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=115)** And the last bit of alignment I want to do, and that's going to be for this third card and this fourth card, I don't want these to fill the entire available space like they currently do.
>
> **[2:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=126)** So I want to change the alignment of those two in relationship to the primary layout grid.
>
> **[2:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=132)** So let's go back to our style sheet.
>
> **[2:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=135)** And here for featured-image, I'll just add, justify-self: center, and you've seen what that does.
>
> **[2:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=143)** And then for aligning that third and fourth card, I could set the alignment here.
>
> **[2:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=147)** These are the correct selectors, but just for the sake of keeping this easier to read and understand in the future, I'm going to go back up to where I have laid out my primary grid and add that alignment within this role.
>
> **[2:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=160)** So let's go to our nth-of-type(3).
>
> **[2:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=165)** For this one, I want to align this vertically to the starting grid line.
>
> **[2:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=168)** So I'll say align-self: start.
>
> **[2:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=172)** And for the fourth one, I want to align that along the ending grid line.
>
> **[3:01](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=181)** Let's save that and refresh.
>
> **[3:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=185)** And let me toggle on this parent grid, just so we can see.
>
> **[3:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=192)** And now for this card three, we can see that it is set to, oops, I'm on the wrong one.
>
> **[3:20](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=200)** There we go. Align-self: start.
>
> **[3:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=202)** So it's at that starting grid line.
>
> **[3:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=203)** And so now it doesn't take up that entire available space.
>
> **[3:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=206)** There's a little extra space left over.
>
> **[3:28](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=208)** And then for card four, if we turn on and look at the styles for that, we can see this is set to align-self: end.
>
> **[3:36](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=216)** So it's vertically aligning itself at the bottom of this grid line and creates just a little extra space up top.
>
> **[3:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/position-items-within-the-card-grid?u=76281980&t=223)** So just by using grid alignment here, I'm getting an interesting layout that's still balanced, but doesn't look like a standard card layout.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), self (5), type( (1)
> **UI Navigation:** go to (2), click on (1), toggle (1)
> **Cross-References:** go back to (2)
> **Env Vars:** html (1)
> **Exercise Files:** template (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Make sure it's responsive
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=0)** - [Narrator] Now that we've got both a primary grid defined with the cards placed on it and individual grids for each card with their items placed, the last thing I want to do here is make sure that this design looks good at different viewport sizes.
>
> **[0:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=13)** You may remember from earlier that we've already got this site container set with a max width of 1200 pixels.
>
> **[0:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=19)** And on this cards container, which is our primary grid, we've got a break point at 980 pixels to go from a one column to a three column layout.
>
> **[0:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=30)** But if we keep making the viewport smaller and looks like somewhere around 600 pixels, this is where things start to get a little squished on these cards.
>
> **[0:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=38)** So let's add a break point here, where our two column cards drop to a single column.
>
> **[0:44](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=44)** And note that cards three here with Fred and four here with Cosmo, these are already single column so they can stay as is.
>
> **[0:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=53)** Let's head over to our style sheet for this lesson and here, where we've defined the grid for our single cards, I'll add a break point.
>
> **[1:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=67)** We'll add it for 600 pixels.
>
> **[1:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=69)** And this is actually where we want to go into that two column layout.
>
> **[1:13](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=73)** So we'll say grid template columns is 1fr, 1fr, and anything less than that should just be a single column.
>
> **[1:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=81)** There we go.
>
> **[1:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=83)** Now we've got these grid template areas defined for two column layout for the first, fifth, second, and sixth cards.
>
> **[1:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=90)** The third and fourth are at one column, but we do have these rows defined.
>
> **[1:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=95)** And then below that, we are placing our grid items.
>
> **[1:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=98)** I'm going to take all of these rules and actually dump them into this media query.
>
> **[1:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=112)** These rules only need to apply when we're in a two column layout, so let's save that and look.
>
> **[2:01](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=121)** Looks like we need to refresh.
>
> **[2:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=124)** Okay, now I've got every card uniform and a single column layout with the image on top and the text below.
>
> **[2:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=131)** The only thing I'm seeing here that I lost is this image centering.
>
> **[2:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=135)** So I need to define a rule for that outside of that media query.
>
> **[2:20](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=140)** And here it is, that featured image that's in the media query, and I want the grid area defined within that, but I can remove that just by itself and then come just below that media query and we'll paste this in and get rid of that grid area.
>
> **[2:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=158)** Okay, so within the media query, we're placing this in the image grid area and outside of the media query.
>
> **[2:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=166)** So for every breakpoint, we've got this justify self set to center.
>
> **[2:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=172)** And there we go, that looks better.
>
> **[2:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=174)** So here, if we widen our viewport above 600 pixels, we go back to two column card layout, and at 980 pixels, we go to this three column layout.
>
> **[3:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=188)** And now we have it, a fully responsive variable or non-uniform layout, created with nested grids.
>
> **[3:14](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/make-sure-its-responsive?u=76281980&t=194)** This is just one more cool way you can lay out content with grid without relying on hacks or excessive HTL markup.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), self (1)
> **Exercise Files:** template (2)
> **CLI Commands:** make (1)
> **Env Vars:** htl (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)


### 7. Asymmetrical or Broken Layout

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What you're creating: An asymmetrical layout
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-an-asymmetrical-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-an-asymmetrical-layout?u=76281980&t=0)** - [Instructor] Because Grid gives us such specific placement options, we can actually create grid-based layouts where elements are asymmetrical or even appear broken.
>
> **[0:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-an-asymmetrical-layout?u=76281980&t=9)** By that, I mean at a glance, there are no obvious rows and columns, so it looks like we've defied the typical grid.
>
> **[0:16](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-an-asymmetrical-layout?u=76281980&t=16)** Our challenge here is to create a primary grid with two columns that will hold our nested grids and, of course, we'll make sure it's responsive.
>
> **[0:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-an-asymmetrical-layout?u=76281980&t=24)** From there, we'll create two separate grids with different configurations that will help us to achieve this asymmetrical look.
>
> **[0:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/what-we-re-creating-an-asymmetrical-layout?u=76281980&t=31)** Let's dive in.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Overview of the starting point
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=0)** - [Instructor] As always, when we start this process, let's look at the existing HTML markup and styles that we're using as our base.
>
> **[0:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=7)** So here in our document head, we've got two style sheets.
>
> **[0:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=10)** The first is generic or base styles that I've used throughout the course, and the second is the specific style sheet to this lesson with some starter styles.
>
> **[0:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=19)** Beyond that, we have our opening body tag, our skip link for accessibility, and our header.
>
> **[0:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=26)** Then we've got this main element with a class of main area, and this has two top level descendants.
>
> **[0:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=32)** The first is this div with the class of intro, and the second is this div with the class of gallery.
>
> **[0:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=38)** Within intro, we've got some text and an image, and then within gallery, we've got a couple of images.
>
> **[0:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=45)** At the very end of the file, we have our footer.
>
> **[0:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=48)** We're not concerning ourselves with the header or footer for this chapter, we're going to be focused on this main element.
>
> **[0:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=55)** Let's take a look at the browser and you can see what we've got.
>
> **[0:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=59)** I'll open up my developer tools by right clicking and saying, inspect.
>
> **[1:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=64)** And here you can see that markup that we were just looking at.
>
> **[1:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=67)** So if we click on this main area, you can see that we've got two Ms of space on the top and bottom, and then the left and right margins are set to auto.
>
> **[1:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=77)** This just gives us a little space between the header and the footer.
>
> **[1:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=81)** Then here we have a max width set on this container at 1200 pixels.
>
> **[1:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=86)** Moving along, we've got no styles on intro, but if we look in here, we've got some typography settings on this class of title.
>
> **[1:34](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=94)** And then here within this figure, with the class of rivet, we've got an image, and on that image, we've got some size constraints on it.
>
> **[1:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=102)** Beyond that, we'll move on to our div with the class of gallery, and there are no styles on that yet.
>
> **[1:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=108)** The figure with a class of lake has an image and that's got some styling.
>
> **[1:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=113)** We're saying we want this image to be at this defined aspect ratio.
>
> **[1:58](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=118)** We're setting a max width and we're telling the CSS, with this object fit property, how to resize this image to fit its container.
>
> **[2:05](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=125)** And we're doing something similar with this moonscape figure.
>
> **[2:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/overview-of-the-starting-point-24684956?u=76281980&t=129)** So here's the canvas we'll be working with in this chapter, and in the next lesson, we'll get started defining that primary grid.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Env Vars:** html (1), css (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Define the primary grid layout
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=0)** - [Instructor] The first thing I want to do is create the primary grid that will hold this intro and this gallery section.
>
> **[0:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=7)** If I put my browser into responsive mode, I know that at some point I want this to start as a single column layout, and then once we get to a larger viewport width, we'll bump up to two columns so that the intro will sit in the first column and the gallery will sit in the second.
>
> **[0:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=24)** So I want to define my grid on this main element with a class of main area.
>
> **[0:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=30)** Let's go ahead and do that.
>
> **[0:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=33)** Coming into our style sheet here, we've already got a rule defined for main area, so we'll just add to this.
>
> **[0:40](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=40)** Let's add a comment that this will be our primary grid, and then we'll just say display grid.
>
> **[0:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=49)** Let's go ahead and start with a gap of 1em.
>
> **[0:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=53)** Now I know I want my default or fallback layout to be a single column, so I'll go ahead and define my grid template columns as a single column, sized at 1fr.
>
> **[1:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=66)** And I also know at some point that we want to redefine this grid to have two columns, so let's go ahead and create a media query.
>
> **[1:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=77)** I'm going to say 600 pixels for now, but we can change that once we have more of our layout done, if that doesn't look so good.
>
> **[1:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=83)** And in here, we'll redefine our grid template columns to repeat two columns at 1fr each.
>
> **[1:31](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=91)** So these will be equal width columns.
>
> **[1:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=93)** So let's save that and check out what we've got.
>
> **[1:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=97)** We'll refresh.
>
> **[1:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=99)** And now we can see our grid in action.
>
> **[1:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=102)** I'm going to head to this layout tab and turn on the overlay for this grid so we can see exactly what's happening.
>
> **[1:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=108)** And since there are only two grid items here, this intro and this gallery, they've auto placed themselves nicely on this grid.
>
> **[1:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=115)** I'm not even going to bother with manual grid item placement in this case.
>
> **[1:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=119)** So if we drop our size down, there, we finally get that at 600 pixels, but this is actually looking pretty smooshed about here.
>
> **[2:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=129)** So maybe let's update that break point to let's say about 800 pixels.
>
> **[2:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=139)** We'll save that.
>
> **[2:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=141)** Okay, and now we drop to one column at 800 pixels.
>
> **[2:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=145)** That looks better.
>
> **[2:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=146)** Okay, with our primary grid in place, we are off to a great start.
>
> **[2:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/define-the-primary-grid-layout?u=76281980&t=150)** In our next lesson, we'll continue by creating the first of our two nested grids.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this. (1), case. (1), continue (1)
> **Exercise Files:** template (2)
> **Speakers:** - [instructor] (1)

#### Create the first nested grid
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=0)** - [Instructor] In this lesson, we're going to lay out this intro section.
>
> **[0:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=3)** To reorient you with the markup, we've got this div with a class of intro.
>
> **[0:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=7)** And inside that we have a paragraph with a class of title, a second paragraph with a class of description, and a figure with a class named after our robot Rivet.
>
> **[0:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=19)** And within that figure, we've got an image element.
>
> **[0:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=22)** So we're going to create a unique grid on this intro div, and that will give us three top-level descendants that we're working with: the title, the description, and Rivet.
>
> **[0:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=33)** To get this asymmetrical layout we're going for, we need to think about how we're going to arrange this in the context of rows and columns.
>
> **[0:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=41)** While there are three sort of obvious rows in this layout, the first row with the title, the second row with the description, and the third with the image, how we lay out our columns isn't as immediately clear.
>
> **[0:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=52)** In thinking through this design, I decided to use four equal-width columns, and then use manual grid item placement to position my content in the correct columns.
>
> **[1:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=63)** So let's head over to our style sheet for this lesson.
>
> **[1:06](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=66)** And we'll start by defining that grid on the intro div.
>
> **[1:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=70)** And we'll do that beneath the primary grid.
>
> **[1:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=72)** I'll just add a new comment, and we'll call that the intro grid.
>
> **[1:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=78)** So let's create a new role for intro, and then say display grid.
>
> **[1:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=84)** Next, let's go ahead and define those four equal-width columns.
>
> **[1:28](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=88)** And I'll do that by saying grid template columns.
>
> **[1:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=92)** We're going to repeat four.
>
> **[1:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=95)** And for the column size, I'll use minmax to say, at a minimum, let the content auto-size itself, but at a maximum never get bigger than 150 pixels.
>
> **[1:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=106)** So let's go ahead and look at that.
>
> **[1:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=111)** And we'll turn on our grid overlay, just so it's obvious what's going on.
>
> **[1:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=117)** Here you can see these four columns, and these grid items have auto-placed themselves in the first three columns.
>
> **[2:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=123)** Now, as for placement, I want this title to start at the first grid line and span to the fourth.
>
> **[2:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=130)** So let's go ahead and add that to our style sheet.
>
> **[2:14](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=134)** I'll just nest the selector right here within intro.
>
> **[2:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=138)** And we'll say title.
>
> **[2:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=141)** And the grid-column, let's start at lime 1 and end at lime 4.
>
> **[2:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=147)** And now that's placed where I want it.
>
> **[2:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=149)** And these other two grid items are just naturally flowing along the grid.
>
> **[2:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=153)** Next, let's take this description, and we want to bring this down into a second row, and we want it to start here at this grid-column line 2, and go all the way to the edge of the grid: so either minus 1 or grid line 5.
>
> **[2:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=166)** So let's go ahead and add that to our styles.
>
> **[2:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=174)** grid-column, start at line 2 and at line 5.
>
> **[3:01](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=181)** And now that's right where we want it.
>
> **[3:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=184)** And the last item of business here, I want to place Rivet, our robot, over here in this third grid-column.
>
> **[3:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=189)** And specifically, I want him to hug this right edge of this fourth grid line.
>
> **[3:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=195)** So going back to our style sheet, we'll create a new rule for Rivet and place him in grid-column 3.
>
> **[3:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=204)** I won't define it inline, and I'll let that default to just spanning one grid line.
>
> **[3:29](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=209)** And then we can go ahead and say justify-self, end, and that will position him along the outer edge of the grid line.
>
> **[3:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=217)** So I'll go ahead and save that.
>
> **[3:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=219)** And now we can see, each of these three components is right where I want it.
>
> **[3:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=223)** So I do want to point out something.
>
> **[3:45](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=225)** And let me turn off this grid overlay and instead turn on the grid overlay for our parent grid.
>
> **[3:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=231)** So right now, these two grid-columns are equal height by default.
>
> **[3:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=235)** And because the content in this second column takes up more vertical space than the first column, the result is we're getting these auto-sized rows in our nested grid that are just taking up the available space.
>
> **[4:07](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=247)** If I wanted to tighten this up, I would have a couple of options.
>
> **[4:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=251)** First, I could use the grid template rows property on the intro grid to specifically size these rows.
>
> **[4:17](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=257)** Another approach I can take is to vertically align the contents of the cell within the context of its parent grid.
>
> **[4:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=264)** So for instance, if I go over here to styles, and let's go to our nested grid on intro, and we'll say align-self, center, which would align this content in the center of itself.
>
> **[4:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=282)** Or we could say start, and now it's aligned along that top grid line, or even end to align it along the bottom grid line.
>
> **[4:50](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=290)** You can see how each of those settings impacts the layout.
>
> **[4:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=293)** Now, I'm actually going to leave this as is with no self-alignment, but know that you can experiment with grid alignment and get some interesting results.
>
> **[5:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=302)** The last thing I want to do before we call this first nested grid a done deal is to check the responsiveness.
>
> **[5:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=308)** So let me turn on responsive mode in my developer tools.
>
> **[5:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=312)** We'll size this down.
>
> **[5:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=315)** Here we drop to that single column.
>
> **[5:18](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=318)** And if I keep making this smaller, I can get all the way down to a mobile screen size.
>
> **[5:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=322)** And this still looks good.
>
> **[5:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-first-nested-grid?u=76281980&t=324)** So I'm not actually going to add any responsive styles, and let this layout remain regardless of the viewport size.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), self (3), for, (1), default. (1)
> **Exercise Files:** template (2)
> **UI Navigation:** go to (1)
> **Definitions:** we call this (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Create the second nested grid
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=0)** - [Instructor] With our parent grid and our first nested grid for this intro section in place, the last thing we need to do is to create a grid layout for these two images within this gallery div.
>
> **[0:11](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=11)** Let's take a look at the layout that I'm trying to accomplish.
>
> **[0:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=15)** We've got two images and we want to create an overlay effect.
>
> **[0:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=19)** I've shown you in a previous chapter how to stack two grid items in the same grid cell.
>
> **[0:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=23)** But what we're looking at here is sort of a staggered look.
>
> **[0:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=26)** It's not just one item directly on top of another, one image appears sort of offset.
>
> **[0:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=32)** There are several approaches you might take to get this look, but after planning, I decided to go with a three column layout where the first two columns are somewhat narrow and the third column can take up the remaining space.
>
> **[0:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=43)** And we only need one row to accomplish this, because we want both images sitting in the same row.
>
> **[0:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=49)** We just need them in different columns.
>
> **[0:51](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=51)** Let's make this happen.
>
> **[0:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=53)** So looking at our Source Markup here, we've got this div with a class of gallery, and that's where we'll define our grid.
>
> **[1:00](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=60)** And then we've got two descendants, these figures with a class of lake and moonscape, and these will become our grid items.
>
> **[1:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=68)** Let's start by defining our grid and setting up our columns, and then we'll come back and place these grid items.
>
> **[1:14](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=74)** So over here in our style sheet, let's drop below this intro grid.
>
> **[1:20](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=80)** We'll add a new comment and call it gallery grid.
>
> **[1:24](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=84)** And we'll target that gallery selector and just say display grid.
>
> **[1:30](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=90)** And now we want to define those two columns.
>
> **[1:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=93)** So we'll say grid template columns.
>
> **[1:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=95)** And I want these first two columns to be smaller than the third.
>
> **[1:38](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=98)** So let's start at 100 pixels each and see what that gets us.
>
> **[1:42](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=102)** So I'll say repeat(2, 100px) and then that final third column track can take up 1fr of the remaining space.
>
> **[1:53](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=113)** Let's go back and refresh.
>
> **[1:56](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=116)** And with our grid overlay turned on, we can see these grid items have auto placed themselves on the grid in those first two, 100 pixel columns.
>
> **[2:04](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=124)** Now what we actually want is for this first grid item to sit between the first grid line and the third and the second image to sit between the second grid line and the fourth so let's create rules for lake and moonscape and go ahead and set that up.
>
> **[2:21](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=141)** And I'll nest those selectors right here within the gallery selector.
>
> **[2:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=147)** We'll say lake and for the grid column, we'll place it starting at line one and ending at line three.
>
> **[2:37](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=157)** And for moonscape, we'll set that grid column to start at line two and end at line four, which is that final line.
>
> **[2:46](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=166)** Now if we save that and look, our grid items are occupying the correct columns, but they're sitting in two different rows.
>
> **[2:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=174)** So we need to manually place both of these in the first grid row.
>
> **[2:57](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=177)** Let's go back and do that.
>
> **[2:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=179)** So I'll say grid row 1, and I'm not specifying an end grid row because it will just default to spanning 1 line, and I will add that to moonscape as well.
>
> **[3:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=192)** Let's go look and we're getting closer.
>
> **[3:15](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=195)** But now we're covering up part of this lake image with the moonscape because they're both occupying the same grid cell here.
>
> **[3:23](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=203)** The lake was placed on the grid first because that's the order it is in the DOM, and then the moonscape was placed on the grid after that, giving the appearance of covering it up.
>
> **[3:32](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=212)** There's a couple of things we could do here.
>
> **[3:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=215)** First, we could set a higher Z-index on this lake image.
>
> **[3:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=219)** So just for example, if we go over here to styles, we could say Z-index as 1 and that visually brings it forward in the stacking order.
>
> **[3:52](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=232)** As an alternative to this, since we're using grid for this layout, we can take advantage of the order property.
>
> **[3:59](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=239)** By default, each grid item has a default order value of 0, and items are laid out according to their DOM order, but grid lets us change that to rearrange the visual appearance of grid items.
>
> **[4:10](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=250)** This is a property you have to use carefully because it only affects the visual order of elements and not the logical DOM order or tab order.
>
> **[4:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=259)** This can create accessibility issues, as I mentioned earlier in the course.
>
> **[4:22](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=262)** So just be mindful if you choose to use it.
>
> **[4:25](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=265)** Now in our case, we've got two images and we're just rearranging them visually, which doesn't negatively impact our keyboard users or anyone using an assistive device.
>
> **[4:35](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=275)** So I'm going to remove this Z-index, and instead, I'll say order.
>
> **[4:41](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=281)** And right now it's defaulted at 0, but we'll say order 1 and now it appears visually on top of the moonscape.
>
> **[4:49](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=289)** There are also a couple of alignment adjustments I want to make to this grid cell.
>
> **[4:54](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=294)** So for starters, I want to vertically align it in the center of the cell, so I need to use the aligned self property to make that happen.
>
> **[5:01](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=301)** Secondly, I want this lake image horizontally aligned along the ending grid line, so we'll use the justify self property for that.
>
> **[5:09](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=309)** Let's pop over to our style sheet and add those.
>
> **[5:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=312)** So here for lake, we'll say order 1, justify-self at the end and align-self at the center.
>
> **[5:27](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=327)** And if we go back and refresh, now this grid is laid out exactly how I want.
>
> **[5:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=333)** Woo hoo!
>
> **[5:34](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=334)** The last thing I want to do is check how this looks as the viewport width changes.
>
> **[5:39](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=339)** We're already in responsive mode, so let's just make this smaller.
>
> **[5:43](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=343)** Here at 800, we drop down to that one column layout.
>
> **[5:48](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=348)** And as we scroll down we can see things changing but actually this still looks okay to me.
>
> **[5:55](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=355)** Since these are abstract images and the offset overlay is still interesting, it is a design element, I'm okay leaving this as is.
>
> **[6:02](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=362)** Obviously, based on the actual images you were using and if you were using them to convey a specific message, you might want to make some adjustments to accommodate your design intentions.
>
> **[6:12](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/create-the-second-nested-grid?u=76281980&t=372)** That said, here's a final example in the course of another type of interesting grid layout you can add to your toolbox.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), self (4), this, (2), default, (1), case, (1)
> **CLI Commands:** make (5)
> **Env Vars:** dom (3)
> **Cross-References:** previous chapter (1), earlier in (1)
> **Definitions:** is a  (2)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** template (1)
> **Analogies:** for example (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/next-steps?u=76281980&t=1)** - Great job working your way through this course.
>
> **[0:03](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/next-steps?u=76281980&t=3)** My hope is that you feel confident to tackle a variety of layouts with CSS Grid.
>
> **[0:08](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/next-steps?u=76281980&t=8)** I've published all of the code exercises you've seen in this course on GitHub, and you can explore them via Codespaces, so you're welcome to continue experimenting, exploring, and developing.
>
> **[0:19](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/next-steps?u=76281980&t=19)** Now that you're an old pro with CSS Grid, I'd invite you to check out our additional CSS courses in the library.
>
> **[0:26](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/next-steps?u=76281980&t=26)** From advanced media queries and image manipulation to controlling CSS with JavaScript, we've got you covered.
>
> **[0:33](https://www.linkedin.com/learning/css-advanced-layouts-with-grid-24947327/next-steps?u=76281980&t=33)** And with that, I'm going to leave you to create your next interesting layout with Grid, and I hope to see you in another course soon.

> [!info]- Semantic Content
>
> **Env Vars:** css (4)
> **Code Keywords:** continue (1)
> **Tools:** github (1)
> **Speakers:** - great (1)


## Instructor

- [[Carrie Dils]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/CSS-advanced-layouts-with-Grid-5945075/codespaces)

## Skills Covered

- CSS Grid Layout
- Web Development
- Front-End Development
- Cascading Style Sheets (CSS)

## Path Context

### In [[Learn CSS]]
← [[Advanced Responsive Layouts with CSS Flexbox]] | **9 of 12** | [[CSS- Variables and Fluid Layouts]] →

## Appears In

- [[Learn CSS]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — Web Development, Front-End Development
- [[Learning Functional Programming with JavaScript ES6+]] — Web Development, Front-End Development
- [[Building Modern Projects with React]] — Web Development, Front-End Development
- [[CSS Layouts- From Float to Flexbox and Grid]] — Cascading Style Sheets (CSS), CSS Grid Layout
- [[jQuery Essential Training]] — Web Development, Front-End Development

---

[↑ Back to top](#)