---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: css-fundamentals-unlock-the-power-of-web-styling
url: "https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling"
level: Beginner
updated: 4/7/2025
learners: 32063
skills:
  - Cascading Style Sheets (CSS)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHjUKCxwq_Ciw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1656092319307?e=2147483647&amp;v=beta&amp;t=95IrNDbR2RY9qkesxk5VxR6sQhcemjC5_Nm1DMMhVxg"
linkedin_topic: Web Development
learning_paths:
  - '[[Learn CSS]]'
next_courses:
  - '[[CSS Essential Training (2023)]]'
path_nav: '[{"path":"Learn CSS","position":1,"total":12,"prev":null,"next":"CSS Essential Training (2023)"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/cascading-style-sheets-css
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Css%20Fundamentals%20Unlock%20The%20Power%20Of%20Web%20Styling.md)

![Css Fundamentals Unlock The Power Of Web Styling](https://media.licdn.com/dms/image/v2/C560DAQHjUKCxwq_Ciw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1656092319307?e=2147483647&amp;v=beta&amp;t=95IrNDbR2RY9qkesxk5VxR6sQhcemjC5_Nm1DMMhVxg)

# Css Fundamentals Unlock The Power Of Web Styling

> Once you have learned the basics of HTML, it's time to start exploring Cascading Style Sheets (CSS), the language that makes HTML look great in the browser. This course gives you a tour of the possibilities, showing what CSS is capable of doing and the basics you need to make it work for you. Join Carrie Dils as she explains what CSS is and how it works with HTML, discusses authoring options, and 

> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling) | Beginner | 32K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - Time to learn some CSS
- [**1. CSS Basics**](#1-css-basics) (8 videos)
  - What is CSS?
  - What are default browser styles?
  - What is basic CSS lexicon?
  - What are basic selector types?
  - What are CSS combinators?
  - How does CSS work with HTML?
  - What options are available to write your styles?
  - How do browsers render styles?
- [**2. CSS Concepts**](#2-css-concepts) (7 videos)
  - Why CSS reset and normalize matter
  - Working with fonts
  - Understanding the box model
  - Setting margins and padding
  - Working with color
  - Applying borders and backgrounds
  - Understanding the units of measurement
- [**3. A Closer Look at the Cascade**](#3-a-closer-look-at-the-cascade) (3 videos)
  - Understanding cascading order
  - Calculating specificity
  - Considering the rule !important
- [**4. Layouts**](#4-layouts) (5 videos)
  - Structuring a page with CSS
  - Understanding how flexbox works
  - Understanding how the CSS Grid works
  - Understanding CSS frameworks
  - Creating responsive layouts
- [**5. Working with CSS**](#5-working-with-css) (4 videos)
  - Organizing your code
  - Using browser inspection tools
  - Using the "Can I use..." for a CSS property
  - Validating your CSS with tools
- [**Conclusion**](#conclusion) (1 videos)
  - Learning more about CSS

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Time to learn some CSS
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/time-to-learn-some-css-25724800?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/time-to-learn-some-css-25724800?u=76281980&t=0)** - CSS, or Cascading Style Sheets, is a core building block of the web.
>
> **[0:05](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/time-to-learn-some-css-25724800?u=76281980&t=5)** It takes plain old HTML and turns it into something visually appealing.
>
> **[0:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/time-to-learn-some-css-25724800?u=76281980&t=9)** Basically, it's the secret sauce that makes the internet a prettier place.
>
> **[0:14](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/time-to-learn-some-css-25724800?u=76281980&t=14)** In this course, I'll introduce you to the basics of CSS, how it works with HTML and browsers, key concepts you need to know, and the most common ways you'll use it in real projects.
>
> **[0:25](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/time-to-learn-some-css-25724800?u=76281980&t=25)** My name is Carrie Dils, and I've been wrangling CSS for over 20 years.
>
> **[0:30](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/time-to-learn-some-css-25724800?u=76281980&t=30)** If you're ready to get comfortable with CSS and start styling the web like a pro, you are in the right spot.
>
> **[0:36](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/time-to-learn-some-css-25724800?u=76281980&t=36)** Ready to go?
>
> **[0:37](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/time-to-learn-some-css-25724800?u=76281980&t=37)** Saddle up your horses and let's hit the trail.

> [!info]- Semantic Content
>
> **Env Vars:** css (4), html (2)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - css (1)


### 1. CSS Basics

> [↑ Back to Table of Contents](#table-of-contents)

#### What is CSS?
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=0)** - [Instructor] If you're a designer or developer trying to stay on top of current web technology, you may feel overwhelmed at the sheer volume of languages, and technologies out there.
>
> **[0:10](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=10)** I frequently hear folks say that they're not even sure where to begin, and I remember thinking the same thing when I started out.
>
> **[0:18](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=18)** I'd like to introduce you to CSS, and show you how it fits into the bigger picture of web development.
>
> **[0:25](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=25)** CSS stands for cascading style sheets.
>
> **[0:27](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=27)** It's a style language used to control the appearance of market languages like HTML.
>
> **[0:33](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=33)** So you can think of HTML as controlling the structure of the web while CSS controls the presentation of it.
>
> **[0:40](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=40)** In other words, CSS is what makes the web pretty.
>
> **[0:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=44)** Think of the HTML as the structure of a new building.
>
> **[0:48](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=48)** You can see the structure as it's being built, but you don't really know what it's going to look like.
>
> **[0:54](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=54)** That's where CSS comes in.
>
> **[0:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=56)** It's the skin that shows what the outside of the structure will look like.
>
> **[1:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=60)** By separating structure and presentation in this way, you can change how things look simply by changing the CSS.
>
> **[1:07](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=67)** You don't have to change the underlying structure.
>
> **[1:10](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=70)** Now, when it comes to syntax, CSS is not a markup language like HTML or a scripting language like JavaScript.
>
> **[1:18](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=78)** It's a style sheet language.
>
> **[1:20](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=80)** That means that CSS comes with its own set of formatting rules to identify elements in a document and specify what style should be applied.
>
> **[1:30](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=90)** When it comes to using CSS with HTML, there are a few ways to apply CSS to a file.
>
> **[1:36](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=96)** First, you can apply the styles inline directly to an element.
>
> **[1:41](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=101)** Next, you can apply styles in a style block directly inside of a document.
>
> **[1:47](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=107)** Or you can apply styles from an external style sheet that ends in a .CSS extension.
>
> **[1:53](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=113)** You can also use multiple style sheets for a single web page or website.
>
> **[1:58](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=118)** The cascading part of CSS means that style information from multiple sources can be combined.
>
> **[2:04](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=124)** For instance, you could have several external style sheets as well as inline styles.
>
> **[2:10](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=130)** The tricky part comes into play when there are multiple style rules for a particular piece of HTML.
>
> **[2:16](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=136)** Which style takes precedent?
>
> **[2:18](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=138)** There has to be a way of figuring out which specific style sheet rule wins.
>
> **[2:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=143)** The rule used is chosen by cascading down from the most general rules to the most specific.
>
> **[2:30](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=150)** The most specific rule is always the one that wins the contest.
>
> **[2:34](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=154)** A simple way to think of it might be government laws.
>
> **[2:37](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=157)** There are broad laws at a federal or a country level that apply.
>
> **[2:41](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=161)** There are additional state or province laws, but ultimately it's the local laws that rule.
>
> **[2:47](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=167)** Similarly, external style sheets tend to offer the broadest style roles.
>
> **[2:51](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=171)** However, it's the inline styles that ultimately win if they exist.
>
> **[2:57](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=177)** Talking about the benefits of CSS probably the biggest one is that it provides a separation between style and structure.
>
> **[3:04](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=184)** Going back to our building example, we could paint it a different color without changing a thing about its structure.
>
> **[3:11](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=191)** You can also speed development, and site maintenance by controlling the formatting for an entire site through a single style sheet.
>
> **[3:19](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=199)** Another great benefit of CSS is that it enables us to define and tailor styles based on how the content is being consumed.
>
> **[3:27](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=207)** For instance, you could optimize the presentation based on whether the webpage was being printed or someone's viewing it on a phone or a tablet or desktop or whatever other ways technology gives us to experience the web.
>
> **[3:41](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=221)** So how does CSS fit into the bigger picture of web development?
>
> **[3:45](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=225)** Well, it's an essential part of the process.
>
> **[3:47](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-css?u=76281980&t=227)** So if you want to learn front end web development, learning CSS is a must.

> [!info]- Semantic Content
>
> **Env Vars:** css (16), html (6)
> **Definitions:** means that (2), stands for (1), in other words (1), is a  (1)
> **Analogies:** picture (2), for instance (2)
> **Speakers:** - [instructor] (1)

#### What are default browser styles?
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=0)** - [Instructor] Have you ever opened an HTML file that didn't have a style sheet?
>
> **[0:04](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=4)** If so, it might have looked something like this.
>
> **[0:07](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=7)** Now, some people would refer to this as unstyled content, and while it certainly does look that way it's not entirely accurate.
>
> **[0:15](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=15)** Before users were allowed to control HTML pages through cascading style sheets, browsers had to have some way of displaying HTML content visually.
>
> **[0:25](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=25)** These were called default browser styles or user agent styles.
>
> **[0:29](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=29)** Essentially, those default styles provide some basic structure to elements on a page so that you're not just looking at a big jumble of text and images and such.
>
> **[0:38](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=38)** There is some order here.
>
> **[0:41](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=41)** Now, each browser has its own default styles, which means that the same markup can appear inconsistently from browser to browser.
>
> **[0:49](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=49)** Ask any developer who's been around a while about the struggle of getting a design to look the same across multiple browsers.
>
> **[0:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=56)** And they'll tell you the old war stories of their battles against Netscape and early versions of Internet Explorer.
>
> **[1:02](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=62)** So why should you care about this?
>
> **[1:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=66)** Well, when you write CSS, one of the things you're actually doing is overwriting those default browser styles and replacing them with how you want the elements to look.
>
> **[1:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=77)** A lot of developers use something called CSS normalization or CSS resets to address these browser inconsistencies.
>
> **[1:25](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=85)** In essence, normalization helps provide more consistency across browsers while the CSS resets approach strips out all default browser styling so that you can style elements precisely the way you want.
>
> **[1:38](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=98)** The other important thing to remember is that users can override your styles anytime they want via most browser preferences, they can choose a default font or font size to use, or even change the color contrast.
>
> **[1:51](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=111)** Modern browsers, even allow users to specify a dark mode.
>
> **[1:55](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=115)** If you're a designer that spent hours perfecting the layout, typography and color palette for a design that might make you cringe.
>
> **[2:02](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=122)** But the important thing to remember is this, the goal of any website should be to make the content accessible to the individual user.
>
> **[2:11](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=131)** Some people might have colorblindness or trouble reading low contrast text.
>
> **[2:15](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=135)** Others could be using a screen reader or a translation tool that doesn't care about the styles.
>
> **[2:20](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=140)** That said is design still important?
>
> **[2:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=143)** Absolutely.
>
> **[2:24](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=144)** And should you use CSS to control the presentation of your content?
>
> **[2:28](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=148)** You betcha.
>
> **[2:29](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=149)** Just be aware that default browser styles are a thing as well as a user's ability to customize how a browser displays content.
>
> **[2:37](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-default-browser-styles?u=76281980&t=157)** These are the facts of life for a front end developer.

> [!info]- Semantic Content
>
> **Env Vars:** css (5), html (3)
> **Code Keywords:** this. (1), override (1), this, (1)
> **CLI Commands:** make (2)
> **Definitions:** means that (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### What is basic CSS lexicon?
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=0)** - [Instructor] Like any programming language, CSS has its own syntax or set of formatting rules to use.
>
> **[0:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=6)** Thankfully it's pretty minimal.
>
> **[0:07](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=7)** So it's not too difficult to learn.
>
> **[0:10](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=10)** The most basic description of the syntax is that it includes a selector and a declaration block.
>
> **[0:16](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=16)** The selector points to the element that you want to style.
>
> **[0:19](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=19)** And in this case, it's the HTML paragraph element represented by P.
>
> **[0:25](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=25)** And the declaration block, which is enclosed in these curly braces and can contain one or more declarations.
>
> **[0:33](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=33)** These declarations are simply the formatting instructions.
>
> **[0:36](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=36)** So here, we've got a couple of declarations or rules, one telling the browser which font to use, and another setting the font size.
>
> **[0:45](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=45)** The rules themselves are made up of two parts, the property and the value.
>
> **[0:49](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=49)** These are separated by colons, and there's a semicolon to tell the browser to stop evaluating and move on to the next role.
>
> **[0:57](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=57)** That's really the basics of CSS syntax.
>
> **[1:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=60)** Even though the syntax itself is pretty straightforward, there are tons of selectors and selector combinations that make it possible to get really granular control over page elements.
>
> **[1:10](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=70)** You'll also need to learn the various properties you can set for each HTML element and the values that are allowed for that property.
>
> **[1:19](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=79)** Now, while we're talking about syntax, I do want to mention the use of spacing.
>
> **[1:24](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=84)** As a general rule of thumb, spacing inside the declaration block doesn't matter.
>
> **[1:29](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=89)** In the example you see here, we get the same result with each of these options.
>
> **[1:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=95)** The spacing is primarily used for readability while you're writing your styles.
>
> **[1:40](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=100)** And then, once you've finished, you could minimize your styles, meaning that you can take all of the white space out.
>
> **[1:47](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=107)** When it comes to the selector, however, spaces do matter and are used intentionally to target specific elements.
>
> **[1:54](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=114)** You'll see more examples of this as we move through the course, but know that it's important to be familiar with when spacing is important and when it's not.
>
> **[2:03](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=123)** CSS also lets you group selectors together if they share the same declarations.
>
> **[2:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=129)** This is done by separating each selector with a comma.
>
> **[2:12](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=132)** In this example, both our P and our H6 elements were 18 pixels.
>
> **[2:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=137)** So we could go ahead and group those together and use a single declaration block.
>
> **[2:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=143)** Like other programming languages, CSS allows for comments.
>
> **[2:27](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=147)** Comments are used to explain code and come in really handy when you edit your CSS at a later date, or when someone else is viewing your code or trying to understand what's going on.
>
> **[2:37](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=157)** Comments are ignored by browsers, meaning they're purely there for documentation.
>
> **[2:41](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=161)** They don't impact the styles in any way.
>
> **[2:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=164)** There are a couple of ways that you can write these comments in CSS.
>
> **[2:48](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=168)** There's the single line and multi line, as you can see in these examples.
>
> **[2:52](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=172)** Both start with the back slash asterisk, and then end with an asterisk and a back slash.
>
> **[3:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=180)** So beyond what we've covered so far in this movie, there are certain syntax rules you'll need to learn, such as shorthand notation, pseudo elements, pseudo classes, and inline style rules.
>
> **[3:11](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=191)** You'll see plenty of examples of these during the course.
>
> **[3:14](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=194)** My recommendation is to focus on these most basic elements of CSS syntax first.
>
> **[3:19](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-is-basic-css-lexicon?u=76281980&t=199)** You'll be surprised at how quickly you pick up the rest.

> [!info]- Semantic Content
>
> **Env Vars:** css (7), html (2)
> **CLI Commands:** make (1)
> **Code Keywords:** case, (1)
> **Analogies:** such as (1)
> **Best Practices:** general rule (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### What are basic selector types?
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=0)** - CSS selectors are what we use to find or target particular bits of HTML.
>
> **[0:07](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=7)** The foremost common selectors are type selectors, you may also hear these referred to as element selectors, the class selector, the ID selector and the descendant selector.
>
> **[0:19](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=19)** And the first one I want to start with is the most basic, and that's the type selector.
>
> **[0:25](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=25)** Type selectors are global in nature, meaning they're going to affect every element of that type in a document.
>
> **[0:31](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=31)** You just need to know what the tag is for a given HTML element in order to style it.
>
> **[0:37](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=37)** For example, to style paragraphs, you'll use p, for heading ones, you'll use h1, for an unordered list, you'll use a ul and so forth.
>
> **[0:47](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=47)** While these selectors are very efficient, they're also pretty broad, which is why they're most often used to set global site-wide styles.
>
> **[0:55](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=55)** Another basic selector is the class selector.
>
> **[0:59](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=59)** These match elements based on the contents of their class attribute.
>
> **[1:03](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=63)** So in this example, I've got a CSS class called error, and in my HTML, I've got a paragraph tag with the class attribute containing the word error.
>
> **[1:13](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=73)** And the output of this code combo will give us the word oops in red.
>
> **[1:19](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=79)** The syntax for a class selector is a period followed by the class name.
>
> **[1:24](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=84)** You can name a class anything you want and use it on as many elements and as many times on a page as you need.
>
> **[1:31](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=91)** This makes CSS classes pretty popular and one of the most common selectors that you'll encounter.
>
> **[1:37](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=97)** Next, we've got ID selectors.
>
> **[1:40](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=100)** Unlike classes, IDs can only be used once on a page.
>
> **[1:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=104)** In this example, the browser would find the element on a page with an ID attribute set to content, and then it would apply the styling specified by that ID selector.
>
> **[1:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=116)** IDs are identified by the pound symbol in front of the ID name.
>
> **[2:02](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=122)** Lastly, let me introduce you to the descendant selector.
>
> **[2:05](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=125)** The descendant selector matches all elements that are descendants of a specified element.
>
> **[2:11](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=131)** So in this example, the browser would find any span elements nested inside of a div element, regardless of how many levels deep down that span tag is.
>
> **[2:21](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=141)** That's an important thing to note about descendant selectors.
>
> **[2:24](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=144)** They can apply to any nested element, regardless of how deep it's found within the page structure.
>
> **[2:30](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=150)** The syntax for this type of selector is written by stringing the selectors together and separating them with a space.
>
> **[2:38](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=158)** The parent selectors are added first, followed by each successive nested selector.
>
> **[2:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=164)** While there isn't a limit as to how many of those you can string together, you don't want to go crazy, more than four starts to get in efficient, as in there are performance implications.
>
> **[2:54](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=174)** And being over specific with your styling makes it really difficult to override that style later if you need to.
>
> **[3:01](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=181)** That said, let's take a look at a couple of examples of how you could use descendant selectors.
>
> **[3:07](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=187)** In this first example represented by the orange here, the browser would locate any paragraph found within a div tag and then apply the styling.
>
> **[3:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=197)** In the second one here represented by the blue, we're going to look for any anchor element inside of a paragraph which also happens to be inside of a div, and then we'll apply the styling.
>
> **[3:28](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=208)** If we use both of these together, you can see that the style from the more specific selector combination is used.
>
> **[3:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=215)** And that's the anchor inside the paragraph inside the div.
>
> **[3:40](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=220)** As you can see, descendant selectors allow you to be very specific.
>
> **[3:45](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=225)** Although there are certainly more selectors available than the ones I've shown here, most of your styles will probably be written using the ones we've just covered.
>
> **[3:54](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-basic-selector-types?u=76281980&t=234)** Learning how to write efficient selectors based on your document structure gives you the power to style every element on the page exactly how you want.

> [!info]- Semantic Content
>
> **Env Vars:** css (3), html (3)
> **CLI Commands:** find (3)
> **Code Keywords:** let (2), override (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - css (1)

#### What are CSS combinators?
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=0)** - [Instructor] In CSS lingo, a Combinator is something we can use to explain the relationship between selectors.
>
> **[0:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=6)** There are four of them, starting with the descendant selector that you learned about in the previous lesson.
>
> **[0:12](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=12)** It's noted by a space between selectors.
>
> **[0:15](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=15)** Next there's the direct child selector, indicated by the greater than sign.
>
> **[0:20](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=20)** The adjacent sibling selector, indicated by the plus sign.
>
> **[0:24](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=24)** And the general sibling selector, indicated by the tilde.
>
> **[0:29](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=29)** This will make more sense when you see it in action.
>
> **[0:31](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=31)** So let's take a look.
>
> **[0:34](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=34)** So here's the descendant selector, and this says that any span inside of a div matches.
>
> **[0:41](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=41)** It doesn't matter if it's directly after the div or nested a few levels deep, all the spans inside of this div are targeted.
>
> **[0:49](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=49)** Let's turn this into a child selector by adding the greater than sign between our div and our span.
>
> **[0:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=56)** In this case, only span elements that are a direct child of the div are selected.
>
> **[1:02](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=62)** There's another span there inside of a paragraph, but it's not a match since it's not a direct child of the div.
>
> **[1:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=69)** Unlike descendant in child selectors which deal with parent-child elements, sibling elements are on the same level, meaning they're not nested.
>
> **[1:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=77)** The adjacent sibling selector uses a plus sign to separate two selectors and adjacent means immediately following.
>
> **[1:25](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=85)** So this selector means that we get a match, only if we find a span after we've closed our div.
>
> **[1:33](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=93)** The last Combinator I want to take a look at is the general sibling selector.
>
> **[1:37](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=97)** Unlike the adjacent sibling selector, which only grabs the first instance after the specified element, the general sibling selector targets all instances.
>
> **[1:47](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=107)** So in this case, we've got all of the span elements adjacent to that div that would be a match.
>
> **[1:55](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=115)** Now, all in all, working with Combinators is definitely more on the advanced side of CSS, but I wanted to introduce it to you at a high level, in case you find yourself looking at some CSS and wondering what these characters mean, the plus sign, the tilde, et cetera.
>
> **[2:10](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-are-css-combinators?u=76281980&t=130)** In short, those characters help explain the relationship between selectors to help you target exactly the bit of markup you want.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (2), match, (1), match. (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** css (3)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### How does CSS work with HTML?
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=0)** - [Instructor] I'd like to take a few minutes to talk about how CSS works with HTML structure.
>
> **[0:05](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=5)** Now remember, that to style elements in your documents, you'll need to write selectors that target those elements.
>
> **[0:12](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=12)** The more efficient and logical your HTML, the easier it is to write efficient CSS.
>
> **[0:19](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=19)** CSS works with the structure of your HTML document, allowing the browser to parse the HTML code, find the right element and style it accordingly.
>
> **[0:28](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=28)** Having well-structured, consistent HTML, and being familiar with that structure, makes it a lot easier to write CSS for it.
>
> **[0:36](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=36)** So let's talk about some best practices that you can follow when writing HTML and how it impacts your CSS.
>
> **[0:43](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=43)** For starters, try to use meaningful names for IDs and classes.
>
> **[0:49](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=49)** What do I mean by that?
>
> **[0:50](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=50)** Well, let's take a look at this in my code editor here.
>
> **[0:55](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=55)** Here, I've got lots of classes and some IDs to define styling for all of these elements.
>
> **[1:01](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=61)** Now, as far as functionality goes, this would work just fine, but in terms of good HTML structure, this is definitely not it.
>
> **[1:11](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=71)** Well-structured semantic HTML should help you define your content and give it meaning.
>
> **[1:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=77)** Take this class here, "red-text".
>
> **[1:20](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=80)** By itself, it means absolutely nothing other than I intend for this text to be red.
>
> **[1:26](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=86)** But what if later on, maybe in a design update, this bit of text should become blue.
>
> **[1:32](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=92)** Then I have a class that doesn't match my intention for that text.
>
> **[1:36](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=96)** Classes and IDs should be meaningful.
>
> **[1:39](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=99)** Let me show you maybe a better way to go about this.
>
> **[1:43](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=103)** So here on the left, I've got the original and then here on the right is my attempt to clean this up a little bit.
>
> **[1:50](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=110)** You can see at a glance that I've removed a lot of the extraneous classes and IDs and replaced it with some more meaningful markup.
>
> **[1:58](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=118)** For instance, here, we have a div and it's got an ID of "wrapper", and that's an indicator that this div will contain all of our HTML.
>
> **[2:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=129)** Now here, I've got a section with an ID of "main-content" instead of "section1".
>
> **[2:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=137)** And that tells me a little bit more about what's going to go into this section.
>
> **[2:22](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=142)** Now here, instead of this div with an ID of "section2", I'm using the HTML5 markup of a side and giving it an ID of "sidebar" because that's what it is.
>
> **[2:36](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=156)** So right off the bat, you can see that aside with that ID selector of "sidebar" is much more meaningful than a div with an ID of "section2", and so forth, and so on.
>
> **[2:48](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=168)** Now, in terms of getting rid of all of these extraneous classes, that's because I don't need them to style these elements.
>
> **[2:54](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=174)** For instance, let's say that all of my paragraphs are set to display at 16 pixels.
>
> **[3:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=180)** So I don't need to give a special class to each paragraph element, unless I want something to stand out or be different than the default.
>
> **[3:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=189)** The next rule of thumb is to make sure that your HTML is structured consistently across your site.
>
> **[3:15](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=195)** There's more than one way to structure the same kind of content.
>
> **[3:18](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=198)** And sometimes, different authors do something differently on different pages and that can make it considerably more difficult to write global styles for an entire site.
>
> **[3:28](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=208)** Let's take a look at this quote, for example.
>
> **[3:32](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=212)** On one page, it's structured with a div tag.
>
> **[3:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=215)** On another page, it's structured with a block quote.
>
> **[3:38](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=218)** And on that last page is just represented in a normal paragraph.
>
> **[3:42](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=222)** But both a div and the paragraph have a class of quote applied.
>
> **[3:47](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=227)** To style this consistently across the site, you'd need several different rules that are essentially doing the exact same thing, but if you have a guideline for how content should be structured and then making sure that you're consistent in following those guidelines, you can make the process of writing styles much easier for yourself.
>
> **[4:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=246)** My final piece of advice is to try and structure the code so that you're adding meaning to the content without even thinking about the styling.
>
> **[4:14](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=254)** This approach might seem a little weird, but remember, the purpose of HTML is to provide a structure for your content that helps convey meaning.
>
> **[4:22](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=262)** And if you're able to do this for your content, you'll find that you end up with much leaner, more descriptive code.
>
> **[4:28](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=268)** That's a lot easier to style.
>
> **[4:31](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-does-css-work-with-html?u=76281980&t=271)** If you're still getting your feet wet with HTML and want to dig deeper into learning semantic markup, there's a great course in the library I'd recommend.

> [!info]- Semantic Content
>
> **Env Vars:** html (12), css (5), html5 (1)
> **Code Keywords:** let (5), this. (1), default. (1)
> **CLI Commands:** make (3), find (2)
> **Analogies:** for instance (2), for example (1)
> **Best Practices:** rule of thumb (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### What options are available to write your styles?
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=0)** - [Narrator] When authoring CSS, you have a few options available as to where you can write your styles.
>
> **[0:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=6)** In this lesson, I want to cover those options and how they'll impact your overall site.
>
> **[0:11](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=11)** Styles can essentially be located in one of three locations.
>
> **[0:15](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=15)** First, you can write CSS in a separate file, which is called an external style sheet.
>
> **[0:21](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=21)** Second, you can place styles in the head of an existing HTML document, this is referred to as embedded styles.
>
> **[0:29](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=29)** And finally, you can apply styles directly to an HTML element, which is referred to as inline styles.
>
> **[0:36](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=36)** Let's take a look at each of these in more detail.
>
> **[0:40](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=40)** External style sheets are simply text files with a .css extension.
>
> **[0:45](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=45)** You'll commonly see them named style.css or styles.css, but the name doesn't matter, so long as it has a .css extension.
>
> **[0:54](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=54)** You can author them with any text editor and they'll generally hold multiple styles that are used to control an entire site or maybe a section of a site.
>
> **[1:04](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=64)** And these styles are applied to pages by using a link tag in the head of an HTML document.
>
> **[1:11](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=71)** External style sheets are probably the most efficient way of applying styles globally across the site.
>
> **[1:18](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=78)** And then we have embedded styles, sometimes referred to as an internal style sheet.
>
> **[1:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=83)** And this is only applied to the documents that they're found in, which makes them pretty inefficient and repetitive for site-wide styling, but perfect for targeted styles or for a particular page.
>
> **[1:36](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=96)** And finally, we've got inline styles.
>
> **[1:40](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=100)** These are styles added to an element as an HTML attribute.
>
> **[1:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=104)** The syntax involves starting with the style attribute and then following that with a semicolon separated list of CSS roles.
>
> **[1:52](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=112)** I'm not a huge fan of inline styles because they're very hard to overwrite and maintain over time.
>
> **[1:58](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=118)** Editing an inline style means that you have to track down the element that the style's applied to and edit the HTML code directly.
>
> **[2:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=126)** It's cumbersome and just plain inefficient.
>
> **[2:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=129)** In terms of the cascade, inline style rules must always win so it makes them very hard to overwrite.
>
> **[2:16](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=136)** While there are some use cases for inline styles.
>
> **[2:19](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=139)** be intentional about how you use them.
>
> **[2:22](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=142)** For the most part, you'll find that the majority of your projects rely on external CSS files, with some occasional embedded styles used to overwrite those global styles.
>
> **[2:32](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=152)** Regardless of where you place your styles, the most important thing is to have an overall strategy that controls site wide styling with consistency.
>
> **[2:40](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/what-options-are-available-to-write-your-styles?u=76281980&t=160)** That'll make it easier for you to maintain or edit styles when necessary.

> [!info]- Semantic Content
>
> **Env Vars:** html (5), css (4)
> **Code Keywords:** finally, (2), let (1)
> **File Paths:** style.css (1), styles.css (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is called (1), means that (1)
> **Speakers:** - [narrator] (1)

#### How do browsers render styles?
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=0)** - [Presenter] When a browser displays a document, it's combining the document's content with its style information.
>
> **[0:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=6)** This process happens in stages.
>
> **[0:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=9)** Now, if you're on a high speed internet connection, you'll probably never even notice a delay, but if you're loading up, say, on a slow mobile connection, well, you've probably seen times where the text of a webpage rendered before all the styles or images did.
>
> **[0:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=23)** All the same browsers do handle documents in a streaming fashion, and as your learning CSS, it's important to understand how browsers render styles and apply them to documents.
>
> **[0:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=35)** First, I want to look at how browsers read CSS Selectors.
>
> **[0:39](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=39)** As a native English speaker, I would look at this and read it from left to right, so I'd be looking for an ID of main-content, a p-element, and then a span element.
>
> **[0:50](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=50)** CSS actually reads this from right to left, however.
>
> **[0:54](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=54)** This tells the browser to find any text within a span tag, which is also inside of a paragraph tag, which is also found with an element with an ID of main-content.
>
> **[1:07](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=67)** Next, I want to talk more about the concept of the Cascade.
>
> **[1:11](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=71)** Cascading style sheets get their name from the source order of the styles as they're applied within the browser.
>
> **[1:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=77)** And this usually means that user agent styles are applied first, followed by external style sheets, then embedded styles, finally followed by inline styles.
>
> **[1:28](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=88)** Now, if these rules conflict with each other, the most recent set of styles will override the earlier styles.
>
> **[1:34](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=94)** Really, the Cascade can be summed up in one sentence, the last, most specific rule applied wins.
>
> **[1:43](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=103)** Styles are applied in the order that they're found, and recent styles always overwrite earlier styles in the event of a conflict.
>
> **[1:50](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=110)** That's the Cascade.
>
> **[1:53](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=113)** Take a look at this style sheet, and notice that we've got two paragraph selectors and they've got conflicting styles.
>
> **[2:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=120)** One has a margin bottom of 14 pixels and the other has a bottom margin of 18 pixels.
>
> **[2:07](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=127)** So of the two of these, the last selector, the one with the margin bottom of 18 pixels, that'll be the style that's applied.
>
> **[2:15](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=135)** Just remember that no matter where the styles are found, the last rule applied wins.
>
> **[2:22](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=142)** Take this example, since the external style sheet link appears after the embedded styles, the external styles would actually overwrite any of the conflicting embedded styles.
>
> **[2:32](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=152)** This concept even applies to style sheets themselves.
>
> **[2:37](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=157)** Next, I want to talk about an important concept called Inheritance, which means that child elements will inherit some of the properties applied to a parent, though, not all of them, but take this very common rule, for example, here we've got a body selector that has a font color, a font family, and a font size.
>
> **[2:57](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=177)** You can overwrite this, however.
>
> **[2:59](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=179)** Let's say that I wanted all my main headings to be blue.
>
> **[3:02](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=182)** Well, I could simply write a rule for that H1 tag and set the color.
>
> **[3:07](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=187)** When there's a conflict, the most specific rule wins.
>
> **[3:12](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=192)** Now imagine writing separate rules for every single element on the page to define a font and a font color.
>
> **[3:19](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=199)** Since these are all the same, we could simply assign that color to the body selector and let all the other elements inherit it, that's a lot more efficient.
>
> **[3:29](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=209)** The last thing I want to touch on is Specificity.
>
> **[3:32](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=212)** If you have two or more conflicting CSS rules that point to the same element, there's some basic rules that a browser follows to determine which one is the most specific and therefore wins.
>
> **[3:43](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=223)** Basically, if the Cascade or Inheritance can't resolve a conflict, then we look to Specificity to make a decision.
>
> **[3:51](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/how-do-browsers-render-styles?u=76281980&t=231)** We're going to dig deeper into this a little later.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), override (1), this, (1)
> **Env Vars:** css (4)
> **CLI Commands:** find (1), make (1)
> **Definitions:** means that (2)
> **Analogies:** for example (1), imagine (1)
> **Speakers:** - [presenter] (1)


### 2. CSS Concepts

> [↑ Back to Table of Contents](#table-of-contents)

#### Why CSS reset and normalize matter
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=0)** - [Instructor] Earlier, we talked about user agent style sheets, or default browser styles.
>
> **[0:05](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=5)** I also briefly mentioned that developers have options when it comes to, quote-unquote, taming those default styles.
>
> **[0:12](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=12)** Namely, Reset CSS, created by Eric Meyer, and normalize.
>
> **[0:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=17)** There are actually a variety of other browser resets in the wild, but for the sake of simplicity, we'll limit the discussion to these two.
>
> **[0:26](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=26)** Both of these approaches attempt to solve the problem of cross browser inconsistencies, but they go about it in really different ways.
>
> **[0:34](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=34)** Let me show you an example.
>
> **[0:37](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=37)** Using CodePen, I've dumped some test HTML in with all sorts of elements.
>
> **[0:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=44)** I've not actually applied any styles to this, but it does look like styled content.
>
> **[0:50](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=50)** In this case, I'm using the Firefox browser.
>
> **[0:52](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=52)** So what we're seeing is actually just Firefox user agent styles.
>
> **[0:58](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=58)** The reset CSS approach is meant to completely wipe out the built-in styling for HTML elements.
>
> **[1:03](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=63)** And that's done via this short and sweet bit of CSS.
>
> **[1:08](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=68)** Now, if I go back to my CodePen, I'm going to open up the settings, and there's an option here for CSS where I can apply reset.
>
> **[1:16](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=76)** I'm going to go ahead and do that.
>
> **[1:21](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=81)** And whoa, that is a major difference.
>
> **[1:25](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=85)** That's stripped out all the styles.
>
> **[1:27](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=87)** So this approach basically gives you a completely clean slate, but the downside is that you would have to go back and style each of these elements, which could create more work for you.
>
> **[1:38](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=98)** Next, let's check out normalize.
>
> **[1:42](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=102)** It's a more modern approach to reset, and it's under ongoing development.
>
> **[1:47](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=107)** So instead of wiping out all styles, it specifically targets only the styles that are inconsistent across browsers.
>
> **[1:55](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=115)** For instance, here are some styles for the H1 element, but not for any of the other heading levels.
>
> **[2:01](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=121)** That's because the other heading levels already behave consistently across browsers.
>
> **[2:05](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=125)** So normalize only resets the styles for the H1.
>
> **[2:10](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=130)** Now let's go back to our CodePen, and let's go back to just the user agent styles.
>
> **[2:18](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=138)** Here we go.
>
> **[2:19](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=139)** And now, let's try applying normalize.
>
> **[2:27](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=147)** While there is a visible difference with normalize, it's not nearly as drastic as CSS reset.
>
> **[2:33](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=153)** So should you use normalize or reset CSS or one of the many other variants out there?
>
> **[2:40](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=160)** My friend Morton asked the question of should you even be using a reset at all?
>
> **[2:45](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=165)** I believe developers should use the tools that fit them and their projects' needs best.
>
> **[2:49](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/why-css-reset-and-normalize-matter?u=76281980&t=169)** So I'd encourage you to try out both, and see the results to get a better feel for how it's impacting your design.

> [!info]- Semantic Content
>
> **Env Vars:** css (6), html (2)
> **Code Keywords:** let (5), this, (1), case, (1)
> **Cross-References:** go back to (3)
> **Tools:** firefox (2)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Working with fonts
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=0)** - [Instructor] If you're a designer, you know that typography is incredibly important to a design and the message you're trying to communicate.
>
> **[0:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=6)** So it's no surprise that when learning CSS, a lot of folks start with fonts.
>
> **[0:12](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=12)** The CSS specification gives us all sorts of controls when working with fonts.
>
> **[0:16](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=16)** But for this course, I want to zero in on the most basic font properties, specifically the four most common ones you'll see when working with CSS.
>
> **[0:27](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=27)** First, we've got font-family, next font-weight, font-style, and finally font-size.
>
> **[0:34](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=34)** Now let's take a look at each one in turn.
>
> **[0:37](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=37)** So here's the font-family and what we've got, we're specifying the font for an element.
>
> **[0:43](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=43)** In this example, it's the paragraph element.
>
> **[0:46](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=46)** Then we've got a prioritized list of fonts and we're also including a fallback font.
>
> **[0:51](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=51)** So in this example here, the first font that we want would be Times New Roman.
>
> **[0:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=56)** Should that not be available, then we'll go to Times.
>
> **[0:59](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=59)** And finally, if Times wasn't available, then we'll just fall back to whatever the system's default serif is.
>
> **[1:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=66)** Next up, we've got font-weight and that lets us specify how heavy or light a font is.
>
> **[1:14](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=74)** Now, if we head over to the specification for the font-weight property, we can see that it's got quite a few values here, normal, bold, bolder, lighter.
>
> **[1:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=83)** And then these numerical values where 100 is the very lightest and 900 is the heaviest.
>
> **[1:32](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=92)** Now not every font has every weight available.
>
> **[1:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=95)** So let's say you specify a medium weight for a font and it's not available, well, it would fall back to normal.
>
> **[1:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=104)** Next up we've got font-style.
>
> **[1:46](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=106)** And as the name implies, this lets us specify the style for a font.
>
> **[1:51](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=111)** We've got three possible values here, normal, which is just default, italic and oblique.
>
> **[1:57](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=117)** Now just like all the font-weights aren't available for every family.
>
> **[2:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=120)** So not every font family has an metallic or oblique version.
>
> **[2:05](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=125)** So if you specify one of those and the style is not available, then the browser will try to effectively fake it by tilting it.
>
> **[2:13](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=133)** And this might not bother most people, but if you love typography, this could drive you nuts.
>
> **[2:18](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=138)** So just be aware of that.
>
> **[2:21](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=141)** The last of these most common properties is the font size.
>
> **[2:24](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=144)** And as you've probably guessed, this is how you can specify the size for a given element.
>
> **[2:31](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=151)** Now when it comes to choosing a font for your website, I want to talk about a couple of options.
>
> **[2:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=155)** First, there are system fonts, and then there are web fonts.
>
> **[2:40](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=160)** In the past, we were limited to using a small set of fonts that come pre-installed on almost every machine.
>
> **[2:46](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=166)** These are called system fonts or fallback fonts.
>
> **[2:50](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=170)** And here we're looking at a list that the W3C, the World Wide Web Consortium recommends using for fallback fonts.
>
> **[2:58](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=178)** You're probably familiar with quite a few of these, Times New Roman, Georgia, Ariel, Tahoma, et cetera.
>
> **[3:07](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=187)** CSS also gives us the ability to display fonts that are not on a client's machine.
>
> **[3:13](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=193)** These are called web fonts.
>
> **[3:16](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=196)** Some of them are free such as Google fonts and others require payment or licensing like Adobe fonts.
>
> **[3:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=203)** Web fonts are basically external style sheets that you can include in your project and there's a few ways you can go about that.
>
> **[3:30](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=210)** First, there's the CSS font face rule.
>
> **[3:33](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=213)** This allows you to download a particular font from your web server to render a webpage if the user doesn't have that font installed.
>
> **[3:42](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=222)** Similarly, we also have the import rule.
>
> **[3:46](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=226)** You can use this from within an existing CSS file to import an external font resource.
>
> **[3:52](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=232)** I don't actually recommend this method as it's not the most efficient in terms of performance.
>
> **[3:58](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=238)** That brings me to the last couple of options for including web fonts.
>
> **[4:02](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=242)** You can link to an external style sheet or you can bring in a style sheet via JavaScript.
>
> **[4:08](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=248)** The latter method is what you'll commonly see if you're working with web fonts via Google fonts, Adobe fonts, or a similar service.
>
> **[4:16](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=256)** So those are some of the ways that you can use fonts in your CSS.
>
> **[4:20](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=260)** External fonts are really powerful as they give us the ability for brands to match typography across both the website and printed assets.
>
> **[4:28](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=268)** Be mindful however that for every font style and weight that you load on a site, there's a corresponding performance implication.
>
> **[4:37](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-fonts?u=76281980&t=277)** If you want to dig in further on working with web fonts and optimizing them on a site, there's a whole chapter dedicated to web fonts in this course.

> [!info]- Semantic Content
>
> **Env Vars:** css (7), w3c (1)
> **Code Keywords:** let (2), finally, (1), default, (1), require (1)
> **Documentation:** specification (2), w3c (1)
> **Analogies:** just like (1), such as (1)
> **UI Navigation:** go to (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Understanding the box model
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=0)** - [Instructor] The CSS Box Model is the foundation of layout on the web.
>
> **[0:04](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=4)** The box model is the term used to describe the rules surrounding the physical properties of all HTML elements.
>
> **[0:11](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=11)** Basically, you can think about it this way.
>
> **[0:13](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=13)** Every single element on your webpage is considered to be in a rectangular box, images, text, forms, everything.
>
> **[0:21](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=21)** And the properties of each box its width, height, border, margin, and padding.
>
> **[0:26](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=26)** These define not only the size of an element, but also, how it relates to the elements around it.
>
> **[0:33](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=33)** Let's start with the basics.
>
> **[0:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=35)** So here we've got a visual representation of a paragraph.
>
> **[0:39](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=39)** Moving from the inside out, the first property I want you to notice is simply the element's edge.
>
> **[0:45](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=45)** If you don't specify a width or a height, then that's determined automatically based on how much space the content takes up.
>
> **[0:52](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=52)** You could also just specify a width and the height would be calculated automatically.
>
> **[0:58](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=58)** So in this case, let's say that the element is 100 pixels.
>
> **[1:03](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=63)** By default, in the CSS Box Model, the box-sizing property is set to content box.
>
> **[1:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=69)** That means that if you set an element to 100 pixels, as in this case, then just the content box equals that 100 pixels.
>
> **[1:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=77)** Any borders or padding would be added on top of that.
>
> **[1:21](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=81)** So the next thing we encounter is padding.
>
> **[1:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=83)** Padding is the space added to an element outside the element's edge.
>
> **[1:27](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=87)** And note that you can define padding individually for the top, right, bottom or left sides of an element.
>
> **[1:33](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=93)** When you add padding, you increase the size of the box accordingly.
>
> **[1:37](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=97)** So here we've got 100-pixel wide box with 20 pixels of padding on all sides that would give us a total of 140 pixels of total width.
>
> **[1:48](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=108)** To change that behavior, you could change the box-sizing property to a border box, which tells the browser to account for any border and padding in the overall width that you specify for an element.
>
> **[2:01](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=121)** Wrapping around the padding is the border.
>
> **[2:04](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=124)** Now, while padding is just clear space, a border is visible and can have color and thickness applied to it.
>
> **[2:10](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=130)** Like padding, a border can be applied specifically from top to right to bottom to left.
>
> **[2:16](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=136)** It can also be styled as solid, dotted, dashed, or a few other options.
>
> **[2:22](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=142)** Finally, we have margin.
>
> **[2:25](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=145)** This represents the space outside the border and it's used to define the space between elements on a page.
>
> **[2:32](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=152)** Like padding, it's simply space and can be defined specifically for each side of the element top, right, bottom, left.
>
> **[2:39](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=159)** Now, unlike padding and borders, margin do not factor into the overall width of the element.
>
> **[2:46](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=166)** The box model itself, really isn't too difficult once you start to look at it, but there are a few gotchas that can get you if you're not careful.
>
> **[2:54](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=174)** First, just because a property isn't declared don't assume that its value is zero.
>
> **[2:59](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=179)** Remember that all browsers have default styles and if you don't override them the default value will be applied.
>
> **[3:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=186)** It's also quite common to see authors set the width of an element to 100% in order to try and make it fit fully within apparent element.
>
> **[3:14](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=194)** For the most part that's okay, but unless you're using that box-sizing property any values for borders and padding will force that total width to be over 100%.
>
> **[3:24](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=204)** There are certainly other aspects besides these to the box model, but these are the most basic ones that allow you to control the dimensions of an element on a page.
>
> **[3:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=215)** If you want to get another instructor's take on how the box model works, here's an entire course dedicated to it.
>
> **[3:42](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=222)** The title of this lesson also mentions something called normal flow or flow layout.
>
> **[3:47](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=227)** What the heck is that?
>
> **[3:49](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=229)** Well, if the box model determines how elements on a page relate to one another, then think of normal flow as the way elements are laid out on a page, according to the HTML DOM.
>
> **[4:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=240)** Since this is an intro course, I don't want to get into the weeds of the ways that you can manipulate the flow of elements, but I did want to simply introduce you to the term.
>
> **[4:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-box-model?u=76281980&t=249)** We'll touch a little more on that later when we discuss layouts.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (2), default, (1), finally, (1), override (1)
> **Env Vars:** css (2), html (2), dom (1)
> **Definitions:** means that (1), is an  (1)
> **CLI Commands:** make (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Setting margins and padding
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=0)** - [Instructor] As you work with CSS, you'll undoubtedly work a lot with margins and paddings.
>
> **[0:05](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=5)** In this lesson, I'd like to look a little closer at these properties.
>
> **[0:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=9)** Padding is that clear or transparent space that sits between the edge of an element and its border.
>
> **[0:14](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=14)** And you can specify padding in several ways.
>
> **[0:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=17)** First, you can define padding individually for each side of the element, moving from clockwise from top, right, bottom, and left.
>
> **[0:25](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=25)** Now keep in mind, however, that setting padding in only one direction is not the same as setting padding to zero and the others.
>
> **[0:33](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=33)** For instance, if I set the padding top to 40 pixels, that doesn't necessarily mean that the right, bottom, and left paddings are set to zero.
>
> **[0:42](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=42)** Remember, there may be some default browser styles at play.
>
> **[0:46](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=46)** As an alternative to specifying the padding for each side individually, you can also use a shorthand notation, and there are four variations on this.
>
> **[0:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=56)** First, we can define four separate values separated by white space.
>
> **[1:01](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=61)** Now these values are going to apply in the order of top, right, bottom, and left, respectively.
>
> **[1:07](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=67)** Next, you can use three values.
>
> **[1:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=69)** In this case, the first value will be applied to the top, the second value for the left and right sides, and the last value will be applied to the bottom.
>
> **[1:20](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=80)** Now next, if your top and bottom padding are the same values and your right and left padding are the same values, you can use a shorthand notation with just two values.
>
> **[1:30](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=90)** In this case, the first value applies to the top and bottom, while the second value will apply to the left and right sides.
>
> **[1:38](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=98)** Finally, if all sides share the same value, then you can note that via shorthand by just setting a single value for the padding that's used for all sides equally.
>
> **[1:48](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=108)** The rules for padding are actually pretty straightforward, and if you're using a browser reset, then most elements start with no padding at all.
>
> **[1:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=116)** Now let's move on to margins.
>
> **[1:59](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=119)** Margins are applied outside of an element's border, and represent the space between elements.
>
> **[2:04](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=124)** And while it's not factored in to the total width of an element, it does affect the amount of space that an element takes up on the page.
>
> **[2:11](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=131)** It's an important part of achieving proper spacing between elements.
>
> **[2:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=137)** Many elements have a default margin applied by user agents that you might need to account for when structuring your layouts.
>
> **[2:24](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=144)** Of course, if you've used a CSS reset or similar to default your margins to zero, then you don't have to worry about it.
>
> **[2:31](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=151)** But margins use the same syntax as padding.
>
> **[2:36](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=156)** So you can either specify margins for each side individually, or use the shorthand notation that works just the same as padding.
>
> **[2:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=164)** For the most part, margins are pretty straightforward as well, but there is one aspect of margins that tends to trip up even the most experienced of developers.
>
> **[2:54](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=174)** Unlike horizontal margins, vertical margins are sometimes combined or collapsed into a single margin whose size is the largest of the individual margins.
>
> **[3:05](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=185)** That means that if you have two elements stacked on top of one another, only one of the elements' top and bottom margins are applied.
>
> **[3:13](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=193)** I cannot tell you how many times this has tripped me up.
>
> **[3:16](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=196)** Whenever you're working with CSS, if something doesn't behave as expected, either you have incorrectly targeted an element or there's a nuanced rule that you might not be aware of.
>
> **[3:28](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/setting-margins-and-padding?u=76281980&t=208)** That said, as you begin working with margins and padding, you'll get the hang of it, and there are always developer docs you can search when it comes to understanding those more nuanced behaviors.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), this. (1), finally, (1), let (1)
> **Env Vars:** css (3)
> **Warnings:** keep in mind (1), note that (1), be aware (1)
> **Definitions:** means that (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Working with color
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=0)** - [Instructor] When you're working with color in CSS, there are three primary properties you'll use.
>
> **[0:05](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=5)** We've got our background color property, border color, and color property.
>
> **[0:10](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=10)** Many people often refer to this last one as the foreground color.
>
> **[0:14](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=14)** So in terms of elements like paragraphs or headings or lists, this refers to the color of the text.
>
> **[0:21](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=21)** Now, whether you're defining color for the borders, backgrounds, or an element, you have a number of options in terms of how you want to define the color.
>
> **[0:30](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=30)** I'll highlight them quickly, and then we'll look at each one in turn.
>
> **[0:34](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=34)** First, you can use color keywords, next there's hexadecimal or hex notation.
>
> **[0:40](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=40)** Then there's RGB color system, that stands for red, green, blue.
>
> **[0:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=44)** And lastly HSL, which stands for hue, saturation, and light.
>
> **[0:49](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=49)** There are additional ways to define color values in CSS, but these are the primary ones that you'll come across.
>
> **[0:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=56)** Let's start by using keywords.
>
> **[0:58](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=58)** You can choose from one of the many color keywords supported by the CSS color module.
>
> **[1:03](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=63)** These keywords map to a predetermined set of values that browsers will use to display the color, and note that these keywords work with all browsers.
>
> **[1:13](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=73)** Now, if you want a specific color and there's not a keyword for it, which is very likely, there are a few ways to represent colors as numbers.
>
> **[1:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=83)** The first is RGB, which generates all the colors from the combination of red, green, and blue.
>
> **[1:30](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=90)** The color is indicated by the letters, RGB, and then it's followed by three numbers separated by commas, where the first number indicates the intensity of the red, the second indicates the intensity of the green, and the third is for blue.
>
> **[1:46](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=106)** Intensities are measured on a zero to 255 scale, where zero measures the absence of that color, and 255 is the highest.
>
> **[1:54](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=114)** So in this case, we've got a box which is red at its highest intensity, which is 255.
>
> **[2:02](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=122)** However, we can see that there are zero elements of either the green or the blue at play here.
>
> **[2:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=129)** Now, if we reduce the intensity of the red all the way down to zero, the color gets progressively darker and darker as we get to the absence of all colors, which is black, written as RGB 0, 0, 0.
>
> **[2:24](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=144)** On the other hand, if we represent the color with red and green at their highest values, we go through different shades of orange up to the color yellow, which is a mixture of red and green at their highest intensities with no trace of blue.
>
> **[2:38](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=158)** And then if we increase the intensity of blue all the way up to 255, we get all three colors mixed at their highest intensity, which creates the color white.
>
> **[2:49](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=169)** So, by changing these intensities, we can go through the whole spectrum of colors in this RGB notation.
>
> **[2:59](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=179)** Next we've got the hexadecimal notation to represent color values.
>
> **[3:04](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=184)** Essentially, hex notation is another way of representing RGB color.
>
> **[3:08](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=188)** It's noted as a pound sign followed by three hex pairs representing the red, green, and blue values of a color.
>
> **[3:16](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=196)** With RGB, this full saturation of red is represented as 25, 0, 0.
>
> **[3:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=203)** With hex notation, it's represented as #FF for red, 00 for no green, and 00 for no blue.
>
> **[3:34](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=214)** And similar to what we saw with the RGB color picker, we can use the scale to help us determine exactly what the notation would be.
>
> **[3:43](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=223)** Now, because the calculations involved in converting RGB to hex, I think the hex color value is not quite as intuitive, but you will still see it commonly used.
>
> **[3:54](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=234)** And then there's HSL, which is a mixture of a color's hue, saturation, and lightness.
>
> **[4:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=240)** This is a more intuitive method of defining color, I think.
>
> **[4:04](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=244)** So the HSL notation is specified by the letters HSL, and then the parenthesis and three values that correspond to hue, saturation, and lightness.
>
> **[4:15](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=255)** Now, the color's hue is represented as an angle on the color wheel, which ranges from zero to 360.
>
> **[4:22](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=262)** Red is zero. Green is 120, and blue is 240.
>
> **[4:26](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=266)** And other colors such as yellow, orange, and violet are found in between those values.
>
> **[4:34](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=274)** The saturation represents the amount of color with 100% being fully saturated and 0% being gray scale.
>
> **[4:42](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=282)** And then lightness tells us how brighter dark the color is.
>
> **[4:47](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=287)** So here, let's pick a particular blue and let's say the saturation is maybe going to be around 50% and our lightness is going to be, oh, around 30%.
>
> **[5:01](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=301)** So that's how you would note that.
>
> **[5:03](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=303)** And actually in this example, you can actually see how the color value is referenced with both RGB and hex.
>
> **[5:12](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=312)** Now, one more thing I want to show you about colors.
>
> **[5:14](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=314)** For both RGB and HSL, CSS gives us an additional alpha channel, which specifies the opacity for a color.
>
> **[5:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=323)** To do this, we use the RGBA notation instead of RGB, and that fourth parameter represents the alpha on a scale of zero to one, where zero is fully transparent and one is fully opaque.
>
> **[5:36](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=336)** And here, you can see how those values translate to varying degrees of opacity for this red color.
>
> **[5:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=344)** The idea is similar for HSL with alpha.
>
> **[5:46](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=346)** The notation becomes HSLA with the fourth parameter representing the alpha value.
>
> **[5:53](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=353)** Adding this fourth value to both RGB and HSL definitions allows you to have individual transparency settings for backgrounds, borders, and foreground colors.
>
> **[6:04](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/working-with-color?u=76281980&t=364)** I know that's a whole lot, but just wanted you to see that CSS gives us tremendous flexibility when it comes to the way that we define colors for borders, backgrounds, and elements.

> [!info]- Semantic Content
>
> **Env Vars:** rgb (13), hsl (7), css (5), rgba (1), hsla (1)
> **Code Keywords:** let (3), module (1), case, (1), this, (1)
> **Definitions:** is a  (3), stands for (2), refers to (1)
> **Analogies:** similar to (1), such as (1)
> **Warnings:** note that (2)
> **Speakers:** - [instructor] (1)

#### Applying borders and backgrounds
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=0)** - [Instructor] In this lesson, I'd like to talk with you about borders and backgrounds.
>
> **[0:03](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=3)** And we'll start with borders.
>
> **[0:05](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=5)** The CSS border properties allow you to specify the style, width, and color of an element's border.
>
> **[0:12](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=12)** Similar to margins and paddings, borders can be defined from the top, right, bottom, and left sides individually.
>
> **[0:19](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=19)** Borders syntax can get really wordy if you're specifying the style, width, and color individually.
>
> **[0:26](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=26)** That's why I recommend going with the shorthand notation.
>
> **[0:30](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=30)** This lets you set all three border properties at the same time for each individual side.
>
> **[0:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=35)** Now, if all four sides are going to be identical, you can actually condense this shorthand further and just simply say border and then give it the properties that you want.
>
> **[0:46](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=46)** One important thing to remember about borders and that's that they do affect the overall width of an element.
>
> **[0:52](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=52)** Border widths begin at the edge of padding widths and then extend outward.
>
> **[0:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=56)** So in this instance, we've got an element that's 100 pixels wide.
>
> **[1:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=60)** It's got 20 pixels of padding on either side, bringing the width to 140 pixels.
>
> **[1:05](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=65)** And then a five pixel border on either side, bringing the total width for this element to 150 pixels.
>
> **[1:13](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=73)** Now let's talk a little bit about border styles.
>
> **[1:16](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=76)** Border styles can be set in one of 10 values.
>
> **[1:20](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=80)** There's none and hidden, which are very similar, except when tables come into play, and then there's solid, dotted, dashed, double, groove, ridge, inset, and outset.
>
> **[1:31](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=91)** Now solid, dotted, and dash styles create a single flat line.
>
> **[1:36](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=96)** And correspondingly, it's either solid broken into dots or broken into dashes.
>
> **[1:42](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=102)** These remaining values create a dimensional line effect that often require a width value of more than one in order to see the result.
>
> **[1:51](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=111)** Now how about that border color property?
>
> **[1:55](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=115)** This allows you to define a specific color for your border that's independent of an element's foreground or background color.
>
> **[2:03](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=123)** Now, before we move on, I want to take a moment to discuss the difference between a border and an outline.
>
> **[2:10](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=130)** Their syntax is very similar, but there's an important distinction.
>
> **[2:13](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=133)** An outline is drawn just outside of the border's edge.
>
> **[2:18](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=138)** While you'll see the border property used more frequently, outlines play a very important role too, specifically, in the realm of usability and accessibility.
>
> **[2:28](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=148)** Let me show you an example.
>
> **[2:30](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=150)** So here I've got just a super basic HTML form and I've applied an outline that will display whenever a form field comes into focus.
>
> **[2:41](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=161)** And by focus, I mean that either, a user has clicked their cursor on a field or has navigated to a field via keyboard.
>
> **[2:48](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=168)** Now the outline, which I have super exaggerated for this example, draws attention to the element.
>
> **[2:54](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=174)** This might seem minor in this instance, but imagine a really crowded page or a page with maybe a bunch of form fields, and it's easy to lose your cursor or your focus.
>
> **[3:04](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=184)** In this case, the outline provides a visual indicator showing me where I am on the page.
>
> **[3:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=189)** And that's pretty helpful.
>
> **[3:11](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=191)** Here are a few notes if you're using outlines.
>
> **[3:15](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=195)** It draws a line outside all sides of the box.
>
> **[3:18](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=198)** So you can't specify particular sides like you could with a border.
>
> **[3:22](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=202)** Also, it's not part of the box model.
>
> **[3:24](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=204)** So it does not affect the position of the element or nearby elements.
>
> **[3:29](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=209)** And lastly, assigning outline a value of zero, or none, will remove the browser's default focus style.
>
> **[3:37](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=217)** If an element can be interacted with, it needs a visible focus indicator.
>
> **[3:43](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=223)** Moving on, let's talk about backgrounds.
>
> **[3:46](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=226)** The background property lets us add visual sophistication and style to even basic content.
>
> **[3:52](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=232)** The word background is actually shorthand CSS, letting you define all background style properties at once such as color, image, size, et cetera.
>
> **[4:02](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=242)** Now the default style for most elements is to have a transparent background, meaning you can see right through 'em.
>
> **[4:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=249)** By explicitly setting the background property, you can choose to display solid colors, gradients, or even images behind an element's content.
>
> **[4:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=257)** They're really pretty cool.
>
> **[4:20](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=260)** When specifying a background image versus, say, a color, you can control its position; whether it repeats along an axis, the background image size, and more.
>
> **[4:33](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=273)** I should point out as well that it's an entirely possible for an element to have both a background color and a background image.
>
> **[4:40](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=280)** Background colors are layered underneath background images and allow you to combine the two for interesting visual effects.
>
> **[4:48](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/applying-borders-and-backgrounds?u=76281980&t=288)** To sum up, borders and backgrounds are a great way to both add visual interest and draw attention to specific elements on a page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), super (2), require (1), case, (1)
> **Env Vars:** css (2), html (1)
> **Analogies:** similar to (1), imagine (1), such as (1)
> **Speakers:** - [instructor] (1)

#### Understanding the units of measurement
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=0)** - [Instructor] There are times when you need to set a link for a CSS element.
>
> **[0:04](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=4)** CSS offers support for many units of measurement, including those for both onscreen and print.
>
> **[0:10](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=10)** Some of these units are absolute or fixed length while others are relative.
>
> **[0:15](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=15)** I'm going to limit our discussion here to the foremost common types that you'll run across as you're learning CSS.
>
> **[0:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=23)** First, we have pixels.
>
> **[0:25](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=25)** Then we have ems, rems, and finally, percentages.
>
> **[0:29](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=29)** So pixels are referred to as an absolute value and just like an inch takes up a physical amount of space, so does a pixel.
>
> **[0:38](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=38)** With CSS, we can use pixels to define heights and widths for things like block-level elements, padding, margin, font sizes, and here's a couple of examples of those things in action.
>
> **[0:51](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=51)** Next we have ems, and unlike pixels, these are considered relative values.
>
> **[0:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=56)** They're relative to the font size of a parent element.
>
> **[1:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=60)** So the name actually comes from print topography and it roughly means the value of text at its default size.
>
> **[1:07](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=67)** What does that mean?
>
> **[1:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=69)** Well, let's say that we set our parent container to a 20-pixel font size.
>
> **[1:14](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=74)** That would be equal to one em.
>
> **[1:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=77)** Two ems would be 40 pixels and so on.
>
> **[1:21](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=81)** From there, you could set your paragraphs to one em, maybe your headings to three em, and you could even use that em value for other properties like margin or padding.
>
> **[1:31](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=91)** The cool thing about ems is that you can change the starting point of the parent element and the overall size of em units will get bigger or smaller as you've designated, but the relationship between those elements will stay exactly the same.
>
> **[1:45](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=105)** Next up, we have rems, or root ems, which are very similar to ems in that they are also a relative value, but instead of being relative to the value of their parent element, they're relative to the font size of the root element, which is the HTML element.
>
> **[2:02](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=122)** And if the HTML element doesn't have a specified font size, the browser default value of 16 pixels is used.
>
> **[2:11](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=131)** So one rem would be 16 pixels, two will be 32 pixels, et cetera.
>
> **[2:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=137)** This gives you a little more predictable control than ems, since we're relative to the root versus relative to a parent container.
>
> **[2:26](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=146)** Now, in the development and design communities, there's a lot of debate over which unit of measurement is best for font sizes and ultimately, that's going to be up to you and your design.
>
> **[2:37](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=157)** Finally, we have percentages.
>
> **[2:39](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=159)** And these are great for responsive layout, as they let containers expand or shrink based on the size of the parent element.
>
> **[2:46](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=166)** And just a note here, percentages are typically used on block level elements and not used for font sizing.
>
> **[2:53](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=173)** I'm just scratching the surface.
>
> **[2:55](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=175)** There's really a lot more when it comes to working with these and other units of measurement.
>
> **[3:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-the-units-of-measurement?u=76281980&t=180)** So just be aware that there are various options available to you when it comes to setting the link of elements in CSS.

> [!info]- Semantic Content
>
> **Env Vars:** css (5), html (2)
> **Code Keywords:** finally, (2), let (2)
> **Analogies:** just like (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 3. A Closer Look at the Cascade

> [↑ Back to Table of Contents](#table-of-contents)

#### Understanding cascading order
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=0)** - [Instructor] When I first started working with CSS, one of the hardest concepts I struggled with was the cascade.
>
> **[0:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=6)** It made sense in theory but then I'd find myself struggling to get my code to do what I wanted.
>
> **[0:12](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=12)** In this lesson, I'd like to demystify the cascade.
>
> **[0:16](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=16)** So the CSS specification defines the cascade like this.
>
> **[0:21](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=21)** The cascade takes an unordered list of declared values for a given property on a given element.
>
> **[0:27](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=27)** It sorts them by their declarations precedence and then outputs a single cascaded value.
>
> **[0:34](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=34)** There's a lot there, so let's unpack that.
>
> **[0:37](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=37)** We know that we can assign values to CSS properties and then target the element that it applies to.
>
> **[0:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=44)** So that's the first part of the definition.
>
> **[0:46](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=46)** So in this example, we've got multiple declared values for CSS properties that all apply to the site title.
>
> **[0:54](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=54)** The next part of that definition is that it sorts this list of styles by the declaration's precedence.
>
> **[1:01](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=61)** We'll talk shortly about what all goes into that but just make a mental note here that if any of these selectors existed in isolation, the resulting output would be different for each.
>
> **[1:12](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=72)** The final part of that definition is that it outputs a single cascade value.
>
> **[1:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=77)** Essentially, it weighs the options and determines how to combine those.
>
> **[1:21](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=81)** How does it do that?
>
> **[1:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=83)** Well, the cascade is actually an algorithm.
>
> **[1:26](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=86)** It factors in the various parts of a declaration and assigns each one a weight.
>
> **[1:31](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=91)** The algorithm continues to cascade down until it finds a winner.
>
> **[1:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=95)** Here are the things that the cascade algorithm checks, listed in order from highest weight to least weight.
>
> **[1:42](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=102)** We've got origin and importance, specificity, the order of appearance, and inheritance.
>
> **[1:50](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=110)** The highest weighted attribute that the cascade checks is a combination of the origin and importance of a rule.
>
> **[1:57](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=117)** Origins can be either the user agent styles, any browser overrides set by an individual user, and then the CSS that you, as the developer, bring to the party.
>
> **[2:08](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=128)** The importance of a CSS declaration is determined by the aptly named important syntax.
>
> **[2:14](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=134)** Adding important to a CSS rule automatically jumps it to the front of the cascade algorithm.
>
> **[2:21](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=141)** The next part of the algorithm involves specificity.
>
> **[2:25](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=145)** This is how the browser decides which rule applies if multiple rules have different selectors, but could still apply to the same element.
>
> **[2:33](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=153)** For instance, here I've got the H1 element selector saying that any H1s should be orange.
>
> **[2:39](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=159)** But then I've got a class selector called entry header and it's applied to that H1 and it says that the color should be blue.
>
> **[2:47](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=167)** Well, what wins?
>
> **[2:49](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=169)** In this case, the blue wins.
>
> **[2:50](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=170)** That's because a class selector is more specific than an element selector.
>
> **[2:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=176)** Now, source order refers to where the style rule is coming from, whether that's from a user agent styles, an external style sheet, et cetera.
>
> **[3:05](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=185)** But it can even refer to the order that rules are written within a single style sheet.
>
> **[3:10](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=190)** For example, here are two rules that could apply to the H1 element.
>
> **[3:14](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=194)** The H1 ends up being colored orange because both rules have an identical element selector and therefore carry the same specificity, but the last one in the source order wins.
>
> **[3:27](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=207)** The next concept is inheritance.
>
> **[3:30](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=210)** Some CSS property values set on parent elements are inherited by their child elements.
>
> **[3:36](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=216)** For example, font color or font family can be set on parent elements and then inherited by child elements.
>
> **[3:43](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=223)** In this case, we're saying that we're going to set all text in the document to black, and then that's going to be inherited through all child elements unless a more specific rule pops up.
>
> **[3:53](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=233)** And in this case, we have set spans to the color orange.
>
> **[3:57](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=237)** Now, child elements don't always inherit properties from the parent.
>
> **[4:02](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=242)** For example, if we set a width of 50% on a parent element, we wouldn't want all descendants to be 50% of that width.
>
> **[4:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=249)** We'd get incrementally smaller and smaller.
>
> **[4:13](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=253)** So in a nutshell, that's how origins and importance, specificity, source order, and inheritance work together to control how CSS is applied to HTML.
>
> **[4:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-cascading-order?u=76281980&t=263)** And that my friend is the cascade.

> [!info]- Semantic Content
>
> **Env Vars:** css (9), html (1)
> **Code Keywords:** case, (3), this. (1), let (1), from, (1)
> **Analogies:** for example (3), for instance (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1), refers to (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)

#### Calculating specificity
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=0)** - [Instructor] Fun fact, each CSS rule actually has a weight score based on the elements that make up the selector.
>
> **[0:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=6)** So the score is comprised of how many IDs are used, classes, and elements.
>
> **[0:11](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=11)** And you get points respectively for each of those.
>
> **[0:14](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=14)** So let's say we have an ID.
>
> **[0:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=17)** Well, that gives us a point in this column.
>
> **[0:20](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=20)** So our specificity score will be 1,0,0.
>
> **[0:24](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=24)** But you could generally just read this as the number, 100.
>
> **[0:28](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=28)** Now, if we have a Class that's going to be 010 or you could read it as 10.
>
> **[0:34](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=34)** And just a regular ole HTML element is going to get you one point.
>
> **[0:40](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=40)** Let's play ~with some combinations here and see how this works.
>
> **[0:45](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=45)** So here, I've got an ID of sitetitle and that's worth 100.
>
> **[0:50](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=50)** Now, what if I want to specify that that only belongs on the heading one?
>
> **[0:55](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=55)** Well, that's adding an element which adds a point.
>
> **[0:59](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=59)** And then what if we want to take this further and attach a class to it?
>
> **[1:03](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=63)** Well, then we get another point there for a specificity score of 111.
>
> **[1:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=69)** So you can see that if you were using say just the class of logo to target a specific element, but then somewhere else in your CSS, you had the even just the ID that would weigh more.
>
> **[1:24](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=84)** Or if you had the HTML element in the mix that would weigh more as well.
>
> **[1:30](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=90)** And when we talk about weighing more, well, it's the highest score that wins, which makes it the most specific of the bunch.
>
> **[1:38](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/calculating-specificity?u=76281980&t=98)** Practically speaking, I rarely find myself doing this math but I did want to show you these calculations to show you that there actually is a method to the madness that is CSS specificity.

> [!info]- Semantic Content
>
> **Env Vars:** css (3), html (2)
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** let (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Considering the rule !important
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=0)** - [Instructor] In CSS, you can apply the !important property to add more weight or importance to a property value pair than normal.
>
> **[0:08](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=8)** For instance, in terms of the cascade, we know that, selectors being equal, the last rule specified takes precedence over any previous declarations.
>
> **[0:19](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=19)** So in this instance, our text is orange because the second h1 declaration overrides the first.
>
> **[0:26](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=26)** But what if we add !important to the declaration?
>
> **[0:30](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=30)** Well, in this case, our heading is blue.
>
> **[0:33](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=33)** Applying !important to the declaration is a very powerful way to ensure that a particular style is applied.
>
> **[0:40](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=40)** So when should you use it?
>
> **[0:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=44)** A common-use case is when you're working with code that you don't have control over.
>
> **[0:49](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=49)** For instance, maybe you're embedding some code from a third party site, like a HubSpot form, a YouTube video, or a real estate listing.
>
> **[0:58](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=58)** The in embed code may contain styles that you have no control over.
>
> **[1:03](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=63)** Having !important in your toolbox allows you to target the elements you want in style and override styles included with that embed.
>
> **[1:10](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=70)** But with great power comes great responsibility.
>
> **[1:15](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=75)** Generally speaking, do everything you can to avoid using !important.
>
> **[1:20](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=80)** It's considered a bad practice because it breaks the natural cascade algorithm making debugging much more difficult.
>
> **[1:28](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=88)** So when you're tempted to use !important, here are some rules of thumb to consider.
>
> **[1:33](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=93)** Always look for a way to use greater specificity before resorting to !important.
>
> **[1:39](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=99)** In other words, make a better use of the cascade by using more specific rules.
>
> **[1:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=104)** Next only use !important on page specific CSS that overrides CSS from an outside source.
>
> **[1:52](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=112)** Completely avoid !important if you're writing code for other developers to use and avoid !important on site-wide CSS as it'll make your job harder in those instances where you want to override a style.
>
> **[2:05](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/considering-the-rule-important?u=76281980&t=125)** So !important is a tool you have available in your CSS toolbox, but try to use it only if you have to.

> [!info]- Semantic Content
>
> **Env Vars:** css (5)
> **Code Keywords:** override (2), case, (1)
> **Definitions:** is a  (2), in other words (1)
> **CLI Commands:** make (2)
> **Analogies:** for instance (2)
> **Best Practices:** bad practice (1)
> **Speakers:** - [instructor] (1)


### 4. Layouts

> [↑ Back to Table of Contents](#table-of-contents)

#### Structuring a page with CSS
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=0)** - [Narrator] In this movie, I want to introduce you to some layout concepts so that you'll be familiar with them as you begin to experiment with and learn the various nuances around controlling page layouts with CSS.
>
> **[0:12](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=12)** So a browser reads an HTML document from the top down.
>
> **[0:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=17)** Now if there's no CSS intervention, that HTML will appear on the page as a bunch of stacked elements.
>
> **[0:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=23)** So the question is, how do you take all of these elements stacked on top of each other like little blocks and arrange them into rows and columns to make an attractive layout?
>
> **[0:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=35)** Well, there are a few approaches to taking an HTML document and bending it to your will.
>
> **[0:40](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=40)** The first is tables.
>
> **[0:42](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=42)** Back in the day, there was no CSS.
>
> **[0:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=44)** We just used tables to create row and column-based layouts.
>
> **[0:48](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=48)** This was terrible in so many ways as that's not really what HTML table markup was meant for and it left us with a mess of unsemantic HTML, inaccessible layouts, and code that was very difficult to maintain.
>
> **[1:03](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=63)** Then came along cascading style sheets with its box model to modify normal flow with floats and positioning.
>
> **[1:10](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=70)** While this wasn't really a layout system, it did give us the ability to manipulate where elements appeared on a page relative to their neighboring elements.
>
> **[1:20](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=80)** In the late 2000s, we started to see CSS grid systems appearing either on their own or as part of larger CSS frameworks like Bootstrap or Foundation.
>
> **[1:31](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=91)** Now I'm calling all of these HTML layouts because they primarily rely on the actual structure of the HTML document to put content where you'd want it on the page.
>
> **[1:43](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=103)** Even with grid systems, a lot of them relied on excessive CSS classes added to the HTML markup in order to achieve the desired layout.
>
> **[1:53](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=113)** In 2016, the World Wide Web Consortium officially made a recommendation for Flexbox.
>
> **[1:59](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=119)** This is a one-dimensional flexible box module that lets us distribute content evenly and flexibly to fill all the available space.
>
> **[2:08](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=128)** This was a huge step forward in CSS layouts and is commonly used today.
>
> **[2:13](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=133)** We also now have something called CSS Grid.
>
> **[2:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=137)** This is the first true two-dimensional layout tool in CSS that lets us treat the view port like a canvas.
>
> **[2:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=143)** The CSS grid radically changes how we design page layouts for the web.
>
> **[2:29](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=149)** Now other than tables, you'll still find the rest of these methods used in some degree to another to create page layouts.
>
> **[2:36](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=156)** You'll even find them working together in harmony.
>
> **[2:39](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=159)** For instance, sometimes CSS Grid may be used for overall structure of a layout while Flexbox might be used for smaller modules within the overall layout.
>
> **[2:48](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/structuring-a-page-with-css?u=76281980&t=168)** Really the main thing to remember is that when you're starting off a new web project, be strategic about which approach you plan to take so that you can be consistent with how you're applying CSS to your HTML markup.

> [!info]- Semantic Content
>
> **Env Vars:** css (12), html (9)
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** module (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### Understanding how flexbox works
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=0)** - Flexbox is shorthand for flexible box.
>
> **[0:04](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=4)** It's a layout module for CSS that gives you an efficient way to arrange, organize and size website elements to create responsive designs.
>
> **[0:13](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=13)** Front end web developers have embraced Flexbox for web-based layouts because it lets us arrange items within a parent container, and then get pretty specific about how we want those items to behave in relationship to one another.
>
> **[0:26](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=26)** The way Flexbox works is pretty straightforward.
>
> **[0:29](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=29)** You have a container it's called the flex container or parent then you have the elements within the container and these are referred to as flex items or children.
>
> **[0:39](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=39)** The flex items are placed along flex lines which are either a vertical or horizontal access.
>
> **[0:47](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=47)** These items can be manipulated in layout, size, spacing and even change order along the flex line.
>
> **[0:54](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=54)** Let me say that one again.
>
> **[0:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=56)** You can manipulate the order of flex children with Flexbox without touching the HTML structure.
>
> **[1:03](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=63)** Very cool.
>
> **[1:04](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=64)** This allows you to take advantage of the available view port space and lets elements arrange themselves automatically as the view port dictates.
>
> **[1:13](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=73)** Flexbox is a one dimensional presentation model.
>
> **[1:16](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=76)** That means that layouts are processed in one dimension at a time, either as a row or a column.
>
> **[1:24](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=84)** You can define how space is distributed between elements and how they should be aligned in relationship to the parent container.
>
> **[1:33](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=93)** There's a lot of benefits to Flexbox.
>
> **[1:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=95)** Out of the gate, it's responsive and mobile friendly.
>
> **[1:38](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=98)** It gives you a lot of control over how you position child elements and you can easily change the presentation order without ever touching the HTML.
>
> **[1:48](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=108)** Also, you can easily alter and control both the width and the height to best work within the parent element.
>
> **[1:55](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=115)** So while Flexbox can do some really cool things it generally works best on small scale layouts.
>
> **[2:01](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=121)** Fully tackling Flexbox is out of the scope for this course but just in case I've got your curiosity peaked, I'll share with you one of my very favorite resources for Flexbox and that's this guide on "CSS Tricks".
>
> **[2:16](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=136)** There's even a poster depicting Flexbox layouts that I bought from here and hung in my office.
>
> **[2:21](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-flexbox-works?u=76281980&t=141)** My friends call it my nerd poster and I'm pretty sure it's a compliment.

> [!info]- Semantic Content
>
> **Env Vars:** css (2), html (2)
> **Code Keywords:** module (1), let (1)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - flexbox (1)

#### Understanding how the CSS Grid works
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=0)** - [Instructor] CSS Grid is a newer CSS specification that gives us the most powerful way yet to control page layouts.
>
> **[0:08](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=8)** Unlike Flexbox, CSS Grid is a two-dimensional layout system.
>
> **[0:13](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=13)** This allows developers to place HTML elements in a Grid based layout using both rows and columns simultaneously.
>
> **[0:22](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=22)** With Grid, we can apply a Grid to a container and then put content wherever we want within that Grid.
>
> **[0:28](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=28)** Completely independent of semantic HTML markup.
>
> **[0:32](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=32)** Very cool.
>
> **[0:33](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=33)** It's the equivalent of a print based Grid layout with the flexibility of responsive design.
>
> **[0:39](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=39)** So let's take a look at some basic CSS Grid concepts and terminology.
>
> **[0:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=44)** So a Grid is an element with its display properties set to Grid.
>
> **[0:49](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=49)** Grids have rows, and those are horizontal lines, and columns, which are the vertical lines.
>
> **[0:55](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=55)** Next we've got Grid lines.
>
> **[0:58](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=58)** Grid lines are the lines that make up the Grid and they can be horizontal or vertical.
>
> **[1:04](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=64)** And a Grid track is the space between two Grid lines.
>
> **[1:08](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=68)** Grid tracks can also be horizontal or vertical, representing rows or columns.
>
> **[1:12](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=72)** A Grid cell is the space between four Grid lines.
>
> **[1:16](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=76)** Top, right, bottom, and left.
>
> **[1:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=77)** And then a Grid area is any area within the Grid defined by its four outer most Grid lines.
>
> **[1:24](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=84)** And a Grid area can cover multiple lines and contain multiple cells.
>
> **[1:30](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=90)** In short, you define a Grid and you either allow items to be automatically placed into cells defined by that Grid, or control their positioning.
>
> **[1:39](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=99)** This is a huge step forward from where we've been with layout options.
>
> **[1:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=104)** I mentioned earlier that Flexbox was a huge improvement over previous methods of organizing and positioning elements, but that it wasn't quite perfect as a full layout tool, and that's where CSS Grid really shines.
>
> **[1:57](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=117)** And actually, CSS Grid and Flexbox can work quite well together.
>
> **[2:02](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-how-the-css-grid-works?u=76281980&t=122)** There's an in-depth course in the library showing how to combine these technologies.

> [!info]- Semantic Content
>
> **Env Vars:** css (6), html (2)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)

#### Understanding CSS frameworks
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-css-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-css-frameworks?u=76281980&t=0)** - [Instructor] Earlier in the course, we talked about CSS reset and normalized CSS.
>
> **[0:05](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-css-frameworks?u=76281980&t=5)** Those are bits of code other developers have written that you can use in your code to save you the time of writing it yourself.
>
> **[0:13](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-css-frameworks?u=76281980&t=13)** Well, imagine that concept on a broader scale and you've got yourself a CSS library or framework.
>
> **[0:20](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-css-frameworks?u=76281980&t=20)** A CSS framework is a collection of CSS files with predefined rules for commonly used things like typography, UI components, layouts, and yes, even browser resets.
>
> **[0:34](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-css-frameworks?u=76281980&t=34)** There are benefits to using a framework, such as cross-browser compatibility, consistent styling, responsive layouts, speeding up your development time, and even learning CSS just by studying other people's code.
>
> **[0:49](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-css-frameworks?u=76281980&t=49)** There are a ton of CSS frameworks out there and many have come and gone over the years.
>
> **[0:55](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-css-frameworks?u=76281980&t=55)** Some of the more popular ones today include foundation sites, bootstrap, and tailwind.
>
> **[1:02](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-css-frameworks?u=76281980&t=62)** Now as flex box and grid have matured, I see CSS frameworks playing a lesser role in web development than maybe they did a few years ago.
>
> **[1:10](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-css-frameworks?u=76281980&t=70)** That said, CSS frameworks are certainly still alive and well.
>
> **[1:14](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/understanding-css-frameworks?u=76281980&t=74)** And it's just up to you whether you choose to use one.

> [!info]- Semantic Content
>
> **Env Vars:** css (9)
> **Cross-References:** earlier in (1), we talked about (1)
> **Analogies:** imagine (1), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Creating responsive layouts
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=0)** - [Narrator] The way people visit and interact with the web has changed significantly as technology has evolved.
>
> **[0:07](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=7)** In the past, web development was focused mainly on desktop computers and large monitors, but now we have smartphones, smart TVs, wearable technologies, and all other sorts of ways to consume the web.
>
> **[0:21](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=21)** Responsive web design is a term used to describe an approach to web design or a set of best practices that are used to create a layout that can respond to a device.
>
> **[0:31](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=31)** CSS gives us multiple ways to achieve this.
>
> **[0:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=35)** One of the oldest ways to do this is through the use of CSS media queries.
>
> **[0:40](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=40)** Media queries can be used to check many things, such as the width and height of a viewport, the width and height of a device, the orientation, like whether it's in landscape or portrait mode, as well as the resolution of a device.
>
> **[0:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=56)** The media role can even detect whether the device is a printer, an actual screen, or speech, for screen readers that read a page out loud.
>
> **[1:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=66)** Media queries let us perform these conditional checks and then write CSS accordingly.
>
> **[1:12](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=72)** Next there are modern layout methods such as Flexbox and Grid and these are responsive by default.
>
> **[1:18](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=78)** In Flexbox, flex items will shrink and distribute space between the items according to the space available in their parent container.
>
> **[1:27](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=87)** You can specify values to indicate how you want those items to behave when there's either more space or less space around them.
>
> **[1:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=95)** CSS Grid allows the distribution of available space in a container across grid tracks.
>
> **[1:41](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=101)** So Grid responds natively to whatever the container size is.
>
> **[1:47](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=107)** Using media queries, we can also make typography responsive.
>
> **[1:51](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=111)** For example, let's say we have a base font size of 20 pixels.
>
> **[1:55](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=115)** We could then scale that up or down accordingly using rem units.
>
> **[2:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=120)** Alternatively, you could use the viewport width to dynamically calculate font size.
>
> **[2:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=126)** While an in-depth look at creating responsive layouts is outside the scope of this course, I wanted you to know that one, it's a thing, and two, that it's a very important thing.
>
> **[2:19](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=139)** Creating responsive sites has become so important to web design that in 2015, Google started actively penalizing sites that weren't mobile-friendly.
>
> **[2:29](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=149)** As you're learning CSS, be sure to keep in mind that while you're making beautiful websites, you also want them to be accessible to as many people as possible.
>
> **[2:38](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=158)** If you'd like to dig deeper into responsive web design, I'd encourage you to search the library.
>
> **[2:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/creating-responsive-layouts?u=76281980&t=164)** There are plenty of resources.

> [!info]- Semantic Content
>
> **Env Vars:** css (5)
> **Code Keywords:** let (2), this. (1), default. (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)


### 5. Working with CSS

> [↑ Back to Table of Contents](#table-of-contents)

#### Organizing your code
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=0)** - [Instructor] It's entirely possible to write valid, working CSS but have the actual code be a hot mess of confusion and inconsistency.
>
> **[0:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=9)** I'd like to share some tips for keeping your CSS clean and well organized.
>
> **[0:14](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=14)** My first piece of advice is to use comments liberally.
>
> **[0:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=17)** Comments help other people understand your code, and frankly they help you understand your code if you've been away for a while and come back to it.
>
> **[0:25](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=25)** Sometimes I'll look at old code that I've written and thank my past self for leaving my future self comments.
>
> **[0:33](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=33)** Let's take a look at an example.
>
> **[0:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=35)** So here we've got normalize CSS and if we look at the source code we can see that indeed, the author has commented things liberally.
>
> **[0:47](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=47)** The comments are used to break code up into sections, and then within sections we've got descriptions of exactly what's happening.
>
> **[0:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=56)** CSS comments can be single or multi-line.
>
> **[0:59](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=59)** They just need to start with a forward slash asterisk and end with the same.
>
> **[1:03](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=63)** But the characters in between can be whatever.
>
> **[1:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=66)** Various developers have their own systems for commenting CSS.
>
> **[1:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=69)** So you'll see some different styles as you look through other people's code but the bottom line is whatever you choose do definitely use comments.
>
> **[1:18](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=78)** The next thing I want to mention is to use consistent naming conventions.
>
> **[1:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=83)** And when I'm talking about naming conventions, I'm talking about how you name your CSS selectors like your classes and your IDs.
>
> **[1:31](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=91)** Are you using dashes, underscores, camel case, uppercase, lowercase?
>
> **[1:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=95)** Developers can get pretty opinionated over which conventions are best but really whatever you use, the key is just to be consistent.
>
> **[1:44](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=104)** The next thing I want to mention is to use consistent formatting.
>
> **[1:49](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=109)** What do I mean by that?
>
> **[1:50](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=110)** Well, here in this example, we've got some CSS written and it's kind of all over the place.
>
> **[1:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=116)** Now, all of this is actually legitimate CSS.
>
> **[1:59](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=119)** It works totally fine, but it's hard to read and a little bit ugly.
>
> **[2:05](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=125)** For instance, here we are defining a color for our paragraphs.
>
> **[2:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=129)** It's all on a single line and we've got no spaces.
>
> **[2:13](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=133)** On the next line, we also have a single line declaration, but we are using spaces.
>
> **[2:19](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=139)** Moving further on, we've got this h1 that's on multi-line but we've got one line indented, another line not indented and additional extra line that's not used at all and so forth and so on.
>
> **[2:32](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=152)** These sorts of inconsistencies in formatting makes CSS really difficult to read.
>
> **[2:39](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=159)** So again, different developers have different opinions for whether they want to do tabs, spaces, two tabs, four tabs, whatever.
>
> **[2:48](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=168)** Unless you're trying to follow a specific standard, it doesn't matter which one you choose.
>
> **[2:54](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=174)** The key is just to do it consistently.
>
> **[2:57](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=177)** I also wanted to mention that you should group like styles whenever possible.
>
> **[3:01](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=181)** So taking this example, I've got my header one and my header two further down the document.
>
> **[3:08](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=188)** Ideally, you would group all your headings in a single place.
>
> **[3:11](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=191)** Likewise, you would group your header components maybe your site title, your logo, your navigation in a certain area and likewise for other sections on your site.
>
> **[3:22](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=202)** So that's just a general rule of thumb that I prefer to follow when writing my CSS.
>
> **[3:28](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=208)** My last step is to consider splitting up your files.
>
> **[3:31](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=211)** Now this isn't always necessary.
>
> **[3:34](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=214)** It just depends on how much CSS you write or how large the project is you're working on.
>
> **[3:39](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=219)** By splitting up your CSS files into smaller chunks that can make it easier to maintain, because you can jump really quickly into say the typography style sheet and make adjustments rather than having to look through a really long style sheet to maybe find those typography settings.
>
> **[3:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/organizing-your-code?u=76281980&t=236)** The bottom line here is that by keeping your CSS organized, you'll ensure that your code is easier to read and maintain over time.

> [!info]- Semantic Content
>
> **Env Vars:** css (13)
> **Code Keywords:** self (2), let (1), case, (1)
> **CLI Commands:** make (2), find (1)
> **Best Practices:** the key is (2), general rule (1)
> **Exercise Files:** source code (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Using browser inspection tools
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=0)** - [Instructor] Modern browsers have built in developer tools that are incredibly helpful when building websites.
>
> **[0:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=6)** As you're learning CSS, you'll find the inspection tool to be something of magic.
>
> **[0:11](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=11)** Let me show you what I mean.
>
> **[0:13](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=13)** So here I am on the [wordpress.org](https://wordpress.org) site, and the website really doesn't matter, I just want to illustrate the tool.
>
> **[0:19](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=19)** So I'm using Firefox, and if I right click anywhere on the page, I get this popup menu and I want to click Inspect.
>
> **[0:28](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=28)** Now, one part of this tool is actually seeing the CSS and HTL markup behind the page.
>
> **[0:34](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=34)** So on this left panel, I have the HTML markup, and on this right side, I have the corresponding styles.
>
> **[0:45](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=45)** So for instance, if I wanted to see this main container with a class of site header, I could go over here to the right in my CSS and see the styles for that.
>
> **[0:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=56)** And here we've got the padding, we've got the background color, et cetera.
>
> **[1:01](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=61)** Now here's the really fun part.
>
> **[1:03](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=63)** The CSS on this is a live editor, meaning that you can test things out right here in the browser.
>
> **[1:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=69)** So for instance, let's say that I wanted to change the padding, we'll make it something absurd.
>
> **[1:20](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=80)** And maybe we want to change the background color, let's make it red.
>
> **[1:27](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=87)** Now, I'm not actually saving this page or making changes to the actual document, it's just letting me manipulate it here in the browser.
>
> **[1:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=95)** This is a really cool way to play with different CSS properties.
>
> **[1:39](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=99)** It also shows you the total computed width of elements on the page.
>
> **[1:47](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=107)** You can also scroll through the HTML and it'll highlight the corresponding element on the page.
>
> **[1:54](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=114)** If nothing else, I find this tool is incredibly helpful just for getting some of the basics of working with CSS properties.
>
> **[2:01](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=121)** Here, I'm using Firefox, but different tools exist for all the major browsers.
>
> **[2:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=126)** And I should note, there's no need to install these developer tools, they just come with the browser.
>
> **[2:12](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=132)** So here they are for Firefox.
>
> **[2:15](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=135)** Here's how to access the DevTools in Chrome.
>
> **[2:20](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=140)** Here's how to access the developer menu in Safari.
>
> **[2:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=143)** And lastly, the DevTools that are part of Microsoft Edge.
>
> **[2:29](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=149)** Now, if that went too fast, just pause, and rewind this video to see the URL for the browser that you'd like to use.
>
> **[2:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-browser-inspection-tools?u=76281980&t=155)** As you start to style websites with CSS, you'll find these tools one of your most favorite in your toolbox.

> [!info]- Semantic Content
>
> **Env Vars:** css (7), html (2), htl (1), url (1)
> **CLI Commands:** find (3), make (2)
> **Code Keywords:** let (3), else, (1)
> **Tools:** firefox (3), safari (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (2)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **Prerequisites:** install (1)

#### Using the "Can I use..." for a CSS property
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=0)** - [Instructor] CSS is continually evolving.
>
> **[0:03](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=3)** As a developer, you may want to take some new or experimental features for a spin before they're fully supported in all browsers.
>
> **[0:11](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=11)** What we're looking at here is the official documentation for various specification modules, as well as their status.
>
> **[0:19](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=19)** For instance, here we have the Flex Box module and we can see that it's got a status of CR.
>
> **[0:27](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=27)** Now, if we go down the page further we can get an explanation for these status codes.
>
> **[0:32](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=32)** And CR in this case means Candidate Recommendation.
>
> **[0:36](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=36)** These are basically stages that modules can move through from their very initial development, all the way through to being a recommendation and fully supported or mostly fully supported in browsers.
>
> **[0:49](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=49)** Now, this is some pretty dense documentation on this page and odds are you don't want to have to dig through it to find out whether you can use a particular CSS property.
>
> **[0:59](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=59)** I'd like to introduce you to your new best friend when it comes to understanding adoption of CSS features across browsers.
>
> **[1:06](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=66)** [Caniuse.com](https://Caniuse.com) provides up-to-date browser support tables showing which frontend web technologies, like JavaScript, HTML5, and CSS, are available for use.
>
> **[1:18](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=78)** What does that mean?
>
> **[1:19](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=79)** Well, you can simply type in the feature that you want to use, in this case we'll type in flexbox.
>
> **[1:26](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=86)** And what I get is a table here showing support across various browsers and browser versions.
>
> **[1:35](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=95)** There's also a statistic you can look at quickly to gauge how well a feature is supported.
>
> **[1:40](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=100)** In the case of flexbox we're over 95% usage.
>
> **[1:43](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=103)** So that's pretty darn good.
>
> **[1:45](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=105)** We can still see that the status code is in CR or a Candidate Recommendation, so does that mean you shouldn't use flexbox?
>
> **[1:53](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=113)** No, it just means that it's still moving through the process of consensus.
>
> **[1:57](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=117)** So let's take a look at another one, the animation property in this case.
>
> **[2:04](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=124)** And here you can see pretty widespread usage and it's only actually in the status of Working Draft.
>
> **[2:13](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=133)** Can you use it?
>
> **[2:14](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=134)** Well, unless you happen to know the majority of your users are on ancient versions of Firefox, Safari, or Opera, I'd say it's pretty safe to use it.
>
> **[2:25](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/using-the-can-i-use-for-a-css-property?u=76281980&t=145)** Of course, there are a lot of other resources on this page but basically I just wanted to introduce you to [caniuse.com](https://caniuse.com) and to share that if you're ever in doubt about using a particular CSS property, this is your easiest source of truth.

> [!info]- Semantic Content
>
> **Env Vars:** css (5), html5 (1)
> **Code Keywords:** module (1), let (1), case. (1)
> **URLs:** [caniuse.com](https://caniuse.com) (2)
> **Tools:** firefox (1), safari (1)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** find (1)
> **Documentation:** specification (1)
> **Analogies:** for instance (1)

#### Validating your CSS with tools
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/validating-your-css-with-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/validating-your-css-with-tools?u=76281980&t=0)** - [Narrator] Validating CSS or any code, for that matter, is simply a process of making sure that there are no syntax errors or invalid code.
>
> **[0:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/validating-your-css-with-tools?u=76281980&t=9)** It's important that before you add your styles to a live website, that you're sure everything is error-free and working as you intended.
>
> **[0:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/validating-your-css-with-tools?u=76281980&t=17)** I wanted to show you a couple of online tools that you can use to validate your CSS.
>
> **[0:23](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/validating-your-css-with-tools?u=76281980&t=23)** So here we have the [w3c.org](https://w3c.org) CSS validator and you can use it simply by typing in a web address.
>
> **[0:31](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/validating-your-css-with-tools?u=76281980&t=31)** You could actually upload a CSS file or just paste your CSS directly in there.
>
> **[0:37](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/validating-your-css-with-tools?u=76281980&t=37)** There's another similar tool called CSS Lint and when you hear the term lint or linting or linter, we're not talking about what's deep in your pocket.
>
> **[0:47](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/validating-your-css-with-tools?u=76281980&t=47)** We're talking about a code cleaner of sorts, a code check or validator.
>
> **[0:52](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/validating-your-css-with-tools?u=76281980&t=52)** Depending on which code editor you use, you can generally find linters to add directly to your editor.
>
> **[0:59](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/validating-your-css-with-tools?u=76281980&t=59)** So while these online tools are great for validating CSS, it's even better if you could test it right there in your code editor.
>
> **[1:07](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/validating-your-css-with-tools?u=76281980&t=67)** Now along with validating your CSS, there are also some tools for helping you clean up your styles and make sure that your formatting is consistent.
>
> **[1:17](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/validating-your-css-with-tools?u=76281980&t=77)** One of them is this CSS Beautifier tool.
>
> **[1:20](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/validating-your-css-with-tools?u=76281980&t=80)** Now I'm going to take some ugly CSS and paste it into this spot and I get some options for how I want this indented, and you can see over here on the right that it's cleaned up the output.
>
> **[1:34](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/validating-your-css-with-tools?u=76281980&t=94)** It's made the spacing more consistent and the indentation consistent, et cetera.
>
> **[1:40](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/validating-your-css-with-tools?u=76281980&t=100)** Again, there are similar tools like this that you could add directly to your code editor if you didn't want to use an online tool.
>
> **[1:46](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/validating-your-css-with-tools?u=76281980&t=106)** It doesn't matter how you go about it.
>
> **[1:48](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/validating-your-css-with-tools?u=76281980&t=108)** The bottom line is that it's up to you to produce valid, clean CSS.

> [!info]- Semantic Content
>
> **Env Vars:** css (11)
> **CLI Commands:** find (1), make (1)
> **URLs:** [w3c.org](https://w3c.org) (1)
> **Documentation:** w3c (1)
> **Speakers:** - [narrator] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Learning more about CSS
> [LinkedIn Learning](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/learning-more-about-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/learning-more-about-css?u=76281980&t=0)** - [Carrie] Thank you so much for joining me on this learning journey.
>
> **[0:03](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/learning-more-about-css?u=76281980&t=3)** We've covered a lot of territory and now you are equipped to continue exploring on your own.
>
> **[0:09](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/learning-more-about-css?u=76281980&t=9)** In addition to the other resources I've mentioned throughout the course, I'd like to highlight some resources in the library to help better equip you to work with CSS.
>
> **[0:18](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/learning-more-about-css?u=76281980&t=18)** The first is CSS Essential Training.
>
> **[0:21](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/learning-more-about-css?u=76281980&t=21)** This course takes the topics I've introduced to you here and expands on them in much greater detail.
>
> **[0:28](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/learning-more-about-css?u=76281980&t=28)** Next, there's [[HTML & CSS- Creating Forms]].
>
> **[0:32](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/learning-more-about-css?u=76281980&t=32)** As a web professional, it's almost guaranteed that you'll work with forms at some point.
>
> **[0:38](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/learning-more-about-css?u=76281980&t=38)** This course teaches the ins and outs of building forms properly with HTML and then styling them with CSS.
>
> **[0:46](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/learning-more-about-css?u=76281980&t=46)** Finally, there's Semantic HTML and CSS Code Challenges.
>
> **[0:50](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/learning-more-about-css?u=76281980&t=50)** I love this course.
>
> **[0:52](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/learning-more-about-css?u=76281980&t=52)** You'll get down and dirty writing code and putting your knowledge into practice.
>
> **[0:56](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/learning-more-about-css?u=76281980&t=56)** This short course can really dial in your skills.
>
> **[0:59](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/learning-more-about-css?u=76281980&t=59)** All right.
>
> **[1:00](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/learning-more-about-css?u=76281980&t=60)** I think I've given you enough to keep you busy, so I'm going to leave you to it.
>
> **[1:03](https://www.linkedin.com/learning/css-fundamentals-unlock-the-power-of-web-styling/learning-more-about-css?u=76281980&t=63)** I appreciate you watching and I hope to see you in another course soon.

> [!info]- Semantic Content
>
> **Env Vars:** css (5), html (3)
> **Code Keywords:** continue (1), finally, (1)
> **Speakers:** - [carrie] (1)


## Skills Covered

- Cascading Style Sheets (CSS)

## Path Context

### In [[Learn CSS]]
**1 of 12** | [[CSS Essential Training (2023)]] →

## Appears In

- [[Learn CSS]]

## Related Courses

_Courses sharing skills:_

- [[Making Sense of the CSS Box Model]] — Cascading Style Sheets (CSS)
- [[React- Building Styles with CSS Modules]] — Cascading Style Sheets (CSS)
- [[Cutting-Edge CSS]] — Cascading Style Sheets (CSS)
- [[Building Great Forms with HTML and CSS]] — Cascading Style Sheets (CSS)
- [[HTML & CSS- Creating Forms]] — Cascading Style Sheets (CSS)

---

[↑ Back to top](#)