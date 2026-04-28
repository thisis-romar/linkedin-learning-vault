---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: css-variables-and-fluid-layouts
url: "https://www.linkedin.com/learning/css-variables-and-fluid-layouts"
duration_minutes: 122
duration: 2h 2m
level: Advanced
updated: 4/28/2025
learners: 5568
skills:
  - Cascading Style Sheets (CSS)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEPyNySxD5aOg/learning-public-crop_675_1200/B4DZYmS.4.GkAY-/0/1744399232878?e=2147483647&amp;v=beta&amp;t=P9YglCxaatDQ99RbpBVjQrcX2gwZq540kv3-b-E8aiY"
linkedin_topic: Web Development
learning_paths:
  - '[[Learn CSS]]'
prev_courses:
  - '[[CSS- Advanced Layouts with Grid]]'
next_courses:
  - '[[CSS Layouts- From Float to Flexbox and Grid]]'
path_nav: '[{"path":"Learn CSS","position":10,"total":12,"prev":"CSS- Advanced Layouts with Grid","next":"CSS Layouts- From Float to Flexbox and Grid"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/cascading-style-sheets-css
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/CSS-%20Variables%20and%20Fluid%20Layouts.md)

![CSS: Variables and Fluid Layouts](https://media.licdn.com/dms/image/v2/D4D0DAQEPyNySxD5aOg/learning-public-crop_675_1200/B4DZYmS.4.GkAY-/0/1744399232878?e=2147483647&amp;v=beta&amp;t=P9YglCxaatDQ99RbpBVjQrcX2gwZq540kv3-b-E8aiY)

# CSS: Variables and Fluid Layouts

> When responsive web design was first introduced, it was at once magical and inefficient. Designers had to work with floats to lay out their grid-based systems, as well as hack media queries. Recent advances in CSS simplify this process, letting your design adapt to circumstances more fluidly. But leveraging these new features requires abandoning current practices and shifting to a model where you 

> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts) | 2h 2m | Advanced | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. Learn CSS calc()** (4 videos)
- **3. 2. Learn CSS Custom Properties** (7 videos)
- **4. 3. Create Layouts** (8 videos)
- **5. 4. Refactor a Web Page** (4 videos)
- **6. Conclusion** (1 videos)

### 1. Introduction

#### The evolution of responsive design
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/the-evolution-of-responsive-design-25743926?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/the-evolution-of-responsive-design-25743926?u=76281980&t=0)** - After 30 years of CSS, we are finally getting some cool new tools for developers, including the ability to do math with the calc function and the new CSS custom properties or variables as they're often called.
>
> **[0:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/the-evolution-of-responsive-design-25743926?u=76281980&t=13)** Unlike SaaS variables, CSS custom properties may have their values changed in media queries.
>
> **[0:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/the-evolution-of-responsive-design-25743926?u=76281980&t=20)** This is a huge game changer for all of us, meaning we can streamline our CSS to new levels rather than having to repeat our styles in media queries with new values.
>
> **[0:29](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/the-evolution-of-responsive-design-25743926?u=76281980&t=29)** CSS custom properties are impacting type sizing, page layouts and much more in our work.
>
> **[0:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/the-evolution-of-responsive-design-25743926?u=76281980&t=35)** In this course, I'll walk you through the basics of calc and custom properties, including their positives and negatives, and we'll walk through multiple examples leveraging these properties, including a type example, an example with a flexbox layout, and an example with a grid layout.
>
> **[0:50](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/the-evolution-of-responsive-design-25743926?u=76281980&t=50)** So if you're ready, let's get started with CSS variables and fluid layouts.

> [!info]- Semantic Content
>
> **Env Vars:** css (6)
> **Code Keywords:** function (1), let (1)
> **Definitions:** is a  (1)
> **Speakers:** - after (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is a much more advanced course in HTML and CSS.
>
> **[0:05](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=5)** And so, there's a number of prerequisites that you should have either the knowledge of or you've looked at our courses on those topics before you watch this course in order to get the most out of it.
>
> **[0:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=15)** So, first of all, one of the most important things to know is HTML, the semantics of HTML, and so forth.
>
> **[0:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=21)** And a great place to get that background is with our [[HTML Essential Training]] course.
>
> **[0:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=26)** Second, you should have a really good, strong background in CSS, generally and specifically in a couple of areas.
>
> **[0:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=35)** If you're looking for a general background, a great place to get that is here, CSS Essential Training.
>
> **[0:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=41)** There are three parts to this.
>
> **[0:42](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=42)** The first two are going to be most relevant to the course that we'll be working on.
>
> **[0:47](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=47)** You can also take a look at my CSS Selectors course.
>
> **[0:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=51)** This one talks about how to form selectors in CSS.
>
> **[0:55](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=55)** You'll find me using a number of wildly different selectors in this course for various reasons.
>
> **[1:01](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=61)** And so, if you're wondering how I went about forming those selectors, this course will walk you through that.
>
> **[1:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=67)** You'll definitely need a background in Flexbox and in Grid Layouts.
>
> **[1:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=71)** If you don't have any background in that, because these are relatively new technologies, this is the course where you should start looking at that.
>
> **[1:19](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=79)** The Responsive Layout course will walk you through the basics of Flexbox and Grid, and we're going to build on those skills in this course.
>
> **[1:25](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=85)** And then finally, although I'm not going to work with Sass directly in this course, I do talk about it a number of times, I make references to how to integrate Sass with various types of CSS variables, and custom properties, and calc.
>
> **[1:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=101)** So, if you want to be really clear about what Sass is and how it works, you can always take a look at our Sass Essential Training course.
>
> **[1:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/what-you-should-know?u=76281980&t=109)** So, that's sort of the background that you should have coming into this course, in other words, strong working knowledge of HTML and CSS, and definitely have a background with Flexbox and Grid before you start to layer on all of the new stuff that I'll be introducing here.

> [!info]- Semantic Content
>
> **Env Vars:** css (7), html (5)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** this. (1), finally, (1)
> **Definitions:** is a  (1), in other words (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Learn CSS calc()

#### CSS calc() overview
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=0)** - [Instructor] To get started let's take a closer look at calc, a new specification which allows you to do math directly in your CSS.
>
> **[0:09](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=9)** Math in CSS, how could that be useful?
>
> **[0:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=13)** The calc specification is compatible with several types of CSS properties including length, this is likely the first type of property that comes to mind.
>
> **[0:23](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=23)** Consider that we can use math with widths and heights as well as properties like flex spaces.
>
> **[0:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=30)** Frequency, angle, and time are common properties associated with the CSS animations and transitions.
>
> **[0:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=37)** While we won't be using these properties in this course, you will find interesting applications for calc with animations and transitions.
>
> **[0:47](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=47)** Numbers and integers are present throughout CSS.
>
> **[0:50](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=50)** Font sizes, margin and padding are properties that come immediately to mind, but there are many other properties that use numbers and integers.
>
> **[1:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=60)** Declaring a calculation is fairly simple.
>
> **[1:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=62)** You have a property value pair, just like you do throughout CSS.
>
> **[1:06](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=66)** But here, you'll include the calc function as part of the value with the numbers that you want to combine inside.
>
> **[1:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=73)** In this example, we're adding one rem to two pixels.
>
> **[1:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=78)** The browsers will run this math and display the font at the appropriate size.
>
> **[1:23](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=83)** As you might expect, you can do the usual types of math with calc using the usual symbols for calculations including addition, subtraction, multiplication, and division.
>
> **[1:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=95)** The usual rule about the order of operations applies in terms of which calculations are performed first and second.
>
> **[1:42](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=102)** Can't remember, reach back to the fourth grade and remember to please, excuse my dear aunt Sally.
>
> **[1:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=109)** Parentheses, exponents, multiplication and division, and addition and subtraction.
>
> **[1:55](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=115)** There are two big advantages to using calc over doing math inside of SaaS or another CSS pre-processor.
>
> **[2:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=123)** First, with calc you can manipulate two numbers with different units, for example, try subtracting 20 pixels from 95%, SaaS would not be happy.
>
> **[2:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=135)** But calc will happily do the math for you and display the result.
>
> **[2:19](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=139)** Second, calc is a great way to document where odd numbers come from.
>
> **[2:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=144)** While you may be able to see this type of documentation with SaaS, you couldn't see it in the compiled CSS, something you might be doing if you're reading someone else's code, calc is a great way to show your work.
>
> **[2:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=157)** For disadvantages, well the usual suspect is browser support there's buggy support in Internet Explorer 9, 10, and 11 and there's a few little bugs in Firefox as well.
>
> **[2:48](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=168)** Nonetheless, as of this recording, about 96% of users are using a browser that supports calc.
>
> **[2:55](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-calc-overview?u=76281980&t=175)** Check [caniuse.com](https://caniuse.com) for the latest information about browser support.

> [!info]- Semantic Content
>
> **Env Vars:** css (8)
> **Code Keywords:** let (1), function (1), from. (1)
> **Documentation:** specification (2)
> **Definitions:** is a  (2)
> **Analogies:** just like (1), for example (1)
> **CLI Commands:** find (1)
> **URLs:** [caniuse.com](https://caniuse.com) (1)
> **Tools:** firefox (1)

#### Applying calc() in a layout example
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=0)** - [Instructor] Now that you have a sense of how Kelp works, let's apply it to an example.
>
> **[0:05](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=5)** This is CodePen and this CodePen is available to you at the address that's on the screen here.
>
> **[0:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=13)** You can go ahead and create an account, you can fork this and save your edits.
>
> **[0:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=18)** If you don't want to create an account, and you don't want to fork the code, that's fine, you can just edit directly.
>
> **[0:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=24)** It just means that your changes won't be saved.
>
> **[0:27](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=27)** So what I have going on here as you can see, over here on the right side, is a four column layout.
>
> **[0:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=32)** And I've built this using Flexbox.
>
> **[0:34](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=34)** If you just take a quick peek at the CSS over here, the HTML and the CSS down here on the bottom, you can see exactly what I did here and where all the numbers come from.
>
> **[0:46](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=46)** Totally obvious what I did, right?
>
> **[0:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=49)** You totally get it.
>
> **[0:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=51)** Well, if not then I'm going to need to explain this in a little bit more detail.
>
> **[0:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=56)** And the big thing you might be wondering about here is what is going on with these numbers down here, with the Flex bases.
>
> **[1:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=63)** They look kind of random.
>
> **[1:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=64)** How did I generate those particular numbers?
>
> **[1:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=67)** Well, let me go into that in a little bit more detail.
>
> **[1:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=72)** So, in my code here, one of the first things that I talk about in the parent property is, I've said, the justified content is set to space-around.
>
> **[1:23](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=83)** So space-around, uh, is defined as saying "Place half of the available space "on each side of the box."
>
> **[1:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=90)** So if I have that row of four boxes, you think about that as a hundred divided by four, that's 25 percent.
>
> **[1:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=97)** But I'd like to have a little bit of space in between so I'm going to divide that space in half, let's say it's one percent, just as a starting place.
>
> **[1:46](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=106)** That would put half a percent of the space on either side of the box.
>
> **[1:50](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=110)** And so, when I go into a layout like this what we're going to see is in the first row, each box is 24 percent wide.
>
> **[1:58](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=118)** I've got a one percent gap in between two boxes because that's half a percent plus a half of percent and then a half of percent on the outside.
>
> **[2:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=127)** Because of the way I've done my math here, I simply took those one percents and removed them from various places and the various combinations of layouts here.
>
> **[2:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=138)** And this is my drawing of that screen and how my space is going to shake out.
>
> **[2:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=146)** And what that means is I can code my little grid system pretty easily here, and that's how my numbers were derived.
>
> **[2:34](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=154)** But that's a really long explanation, isn't it?
>
> **[2:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=157)** Wouldn't it be better if I did this some other way, maybe showing you the math instead?
>
> **[2:44](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=164)** All right, so instead of writing it this way, maybe we can just sort of explain it and right here in the code.
>
> **[2:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=171)** So, there's my row and as you would expect display Flex.
>
> **[2:55](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=175)** Flex flows over a wrap, justify content, space-around, maybe right about here we can just put in a quick comment.
>
> **[3:01](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=181)** And we'll say, "The one percent of extra space "is assigned to the left and right of each box by Flexbox
>
> **[3:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=195)** "via the space-around property."
>
> **[3:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=201)** Okay?
>
> **[3:22](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=202)** So, that's my little comment.
>
> **[3:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=204)** And then, instead of just spelling out Flex spaces of 24 percent, ya know, why is this one 24 percent, that one's 49, that one's 74, we don't understand.
>
> **[3:34](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=214)** We could just simply spell this out as a formula instead.
>
> **[3:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=217)** So I'll just say CALC and I could say 25 percent minus one percent.
>
> **[3:46](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=226)** So that's a little bit more obvious about what's going on here because a box that would span two rows you would expect it to be 50 percent, but we're actually going to make it just a little bit smaller instead.
>
> **[3:58](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=238)** Likewise, it spanning three you'd expect it to be 75 but this is a little bit less than that.
>
> **[4:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=244)** And of course, the last one, you expect to be 100 percent, but it's going to be just short of that because again we want to account for the gap on the outside of that box.
>
> **[4:17](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=257)** So, this is a very quick, very simple way of explaining the math that I have here for my layout.
>
> **[4:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/applying-calc-in-a-layout-example?u=76281980&t=264)** I'm using CALC to describe exactly how that layout is derived.

> [!info]- Semantic Content
>
> **Env Vars:** css (2), calc (2), html (1)
> **Definitions:** is a  (3), means that (1), defined as (1)
> **Code Keywords:** let (3), from. (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Creating a type scale
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=0)** - [Instructor] Now that you have a little bit of background about how calc works, let's apply it to a real-world problem.
>
> **[0:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=15)** And one of those real-world problems happens to be this concept of a type scale.
>
> **[0:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=20)** This website is [type-scale.com](https://type-scale.com).
>
> **[0:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=24)** And the concept of a type scale is something that comes from the print world, is now carried over to the web world.
>
> **[0:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=30)** What we have going on here is a harmonious shift in the sizes of our type here from sort of a readable size that we might use in just standard text reading on a page, all the way on up here to some larger sizes that maybe might be used as headings or something on our webpage.
>
> **[0:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=51)** And what this website will do for us is we set our base font size.
>
> **[0:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=56)** 16 pixels is generally the base, which is what your browser will use, and that's considered to be 1m.
>
> **[1:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=63)** Then we're going to scale it by some number.
>
> **[1:06](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=66)** If you're a music person, you might recognize the Minor Second, Major Second, Minor Third.
>
> **[1:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=71)** If not, just consider that these are numbers that as they get larger, say, to a Perfect Fifth, or the Golden Ratio, that is a large difference between these type sizes, as in some cases ridiculously large, and as we reduce the size of our type scale, the differences between these sizes get smaller.
>
> **[1:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=92)** Pretty straightforward.
>
> **[1:34](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=94)** So, what I would like for you to do is to set this up with the Minor Third, a pretty popular type size variation here on the web.
>
> **[1:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=105)** And the font that I'm going to use here is called Roboto,
>
> **[1:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=113)** because that's something we're going to be using in a later example.
>
> **[1:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=116)** And you'll see here this is doing some calculations.
>
> **[2:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=120)** What it's done is it's taken our base font size, so let's say here at the 1m size.
>
> **[2:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=127)** The next size is 1m times 1.2, that'll give us the size here, or second size up.
>
> **[2:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=135)** 1.44 is the previous size times our Minor Third again, that gives us 1.44.
>
> **[2:22](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=142)** This one becomes the previous size times 1.2.
>
> **[2:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=146)** And so, this will give you a very harmonious set of type sizes rather than just randomly picking type sizes, whatever it is that you want to use on your webpage.
>
> **[2:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=155)** So, this is a great way to manage font sizes on your website in a way that your graphic designer friends will enjoy looking at your type.
>
> **[2:44](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=164)** So, what I'd like for you to do now is in the CodePen that I've given you, I've given you the starting HTML and the CSS that comes right out of the type scale website, and as you see here, it's gone ahead and exported a whole bunch of different type sizes here.
>
> **[3:01](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=181)** I'd like you to go through as part of your challenge and rework these font sizes.
>
> **[3:06](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=186)** So, you're going to instead of saying 1.2m's, I actually want to see the math there.
>
> **[3:14](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=194)** How did you get that 1.2m?
>
> **[3:16](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=196)** So, go on ahead and write a calc statement that would show how that is derived.
>
> **[3:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=200)** And just go on ahead and do that for h1 to h5.
>
> **[3:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=204)** And don't forget about down here at the bottom, there is a small size also.
>
> **[3:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=210)** How might you get 0.833m's?
>
> **[3:33](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-creating-a-type-scale?u=76281980&t=213)** And I'll show you my answer in the next video.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is called (1)
> **Versions:** 1.2 (2), 1.44 (2)
> **Code Keywords:** let (2), type. (1)
> **Env Vars:** html (1), css (1)
> **URLs:** [type-scale.com](https://type-scale.com) (1)
> **Cross-References:** in the next (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Solution: Creating a type scale
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=0)** (exciting music)
>
> **[0:06](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=6)** - [Instructor] So how'd you do on that challenge?
>
> **[0:08](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=8)** You might of found that challenge a little bit let's say challenging, because one of the things you probably really wanted in order to solve this problem was an exponent.
>
> **[0:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=18)** In other words you could have said 1.2 to the 5th power.
>
> **[0:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=21)** And that would've been a much nicer way of writing this stuff.
>
> **[0:25](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=25)** But unfortunately Calc only supports addition, subtraction, multiplication, and division.
>
> **[0:31](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=31)** And since the goal here is to document where these numbers are coming from, this is the way I wound up writing these.
>
> **[0:38](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=38)** So we started with a paragraph with our font size of 1M, base font size I'm just going to use the default browser size of 16 pixels.
>
> **[0:46](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=46)** The H5 then is 1M times 1.2, the H4 is 1M times 1.2 times 1.2, and so on and so forth as we get to the larger numbers.
>
> **[0:57](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=57)** When we go down to those smaller sizes, we just divide.
>
> **[1:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=60)** And if we had even smaller sizes we would continue dividing just the same way we multiplied before.
>
> **[1:06](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=66)** Now some of you might have written here for these answers an answer sort of like instead of H4 is 1M times 1.2 times 1.2, maybe you said something like 1.2 times 1.2 or 1.44 times 1.2, something like that.
>
> **[1:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=86)** But then it's not as necessarily as clear where those numbers are coming from.
>
> **[1:31](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=91)** While this is incredibly awkward and really wordy, it is very clear exactly how each number is derived.
>
> **[1:40](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=100)** And there is a much better way to write this.
>
> **[1:44](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=104)** And that will involve using some variables.
>
> **[1:47](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=107)** And that will make our lives so much easier.
>
> **[1:50](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-creating-a-type-scale?u=76281980&t=110)** We'll start to talk about those variables in our next chapter.

> [!info]- Semantic Content
>
> **Versions:** 1.2 (9), 1.44 (1)
> **Code Keywords:** let (1), from, (1), continue (1), from. (1), this. (1)
> **Definitions:** in other words (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** next chapter (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (exciting music) (1)


### 3. 2. Learn CSS Custom Properties

#### CSS custom properties overview
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=0)** - [Instructor] Recently available for our use, custom properties are an exciting new development in CSS.
>
> **[0:06](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=6)** A custom property is similar to a variable, which you might've encountered in other programming languages or in Sass.
>
> **[0:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=15)** And if you haven't programmed in other languages, well, you've likely encountered our old friend x when you did algebra back in school.
>
> **[0:23](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=23)** X could mean anything you wanted it to mean.
>
> **[0:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=26)** Substitute x in a math problem and we know how to use the value of x to get that math problem computed.
>
> **[0:34](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=34)** Custom properties work just like these kinds of variables, but there's a few differences to be aware of.
>
> **[0:40](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=40)** First of all, define a variable within a CSS declaration.
>
> **[0:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=45)** In other words, you'll have to declare a selector with values in it in order to declare the variable rather than just saying x equals two.
>
> **[0:55](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=55)** Next, values of variables inherit.
>
> **[0:59](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=59)** If you place a variable value at the top level of a webpage, then all of the webpage can access that value.
>
> **[1:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=67)** If you place it at the paragraph level, then only the paragraph and its children can access that value.
>
> **[1:14](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=74)** This is the concept of scoping, where a value is available in selected portions of your webpage, and in this case, it's based on the DOM, the document object model.
>
> **[1:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=86)** Just like everything else in CSS, the value of a given variable may be overridden by leveraging the cascade and inheritance.
>
> **[1:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=95)** All of the usual CSS rules you've come to know and love are still in effect here.
>
> **[1:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=101)** And finally, CSS custom properties may be accessed and manipulated through JavaScript.
>
> **[1:48](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=108)** This is beyond the scope of this course, but you'll find plenty of online resources showing examples of this behavior.
>
> **[1:55](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=115)** There are tons of big advantages to working with custom properties.
>
> **[2:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=120)** First of all, don't repeat yourself.
>
> **[2:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=123)** Instead of spelling out values over and over and over again in your style sheet, declare them once and refer to their values over and over.
>
> **[2:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=132)** Second, custom property values may be changed in media queries.
>
> **[2:17](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=137)** This is a huge advantage, one that custom properties have over Sass and other CSS preprocessors.
>
> **[2:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=144)** We'll be talking about how to leverage this big advantage in many of the coming videos.
>
> **[2:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=150)** Since custom properties are native to CSS, there's no compiling required as there is when you use a CSS processor like Sass.
>
> **[2:39](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=159)** And finally, there is not a major hit to the performance of your website by using calc or custom properties.
>
> **[2:46](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=166)** You'll be better served to improve your performance by reducing image sizes, minimizing your hosted fonts, and StreamLiving your JavaScript.
>
> **[2:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=176)** So, if custom properties are so amazing, what's the disadvantage?
>
> **[3:01](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=181)** Ya got it, browser support.
>
> **[3:05](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=185)** As you can see here on [caniuse.com](https://caniuse.com), there's no support for custom properties in Internet Explorer.
>
> **[3:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=192)** As of this recording, IE11 is almost six years old, and the only versions are even older.
>
> **[3:19](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=199)** We'll see IE disappear from the web landscape shortly.
>
> **[3:22](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=202)** Indeed, many developers have already dropped support for this browser.
>
> **[3:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=206)** Still, at 92% support, we aren't far from being able to use this technology on most websites, and some developers already are.
>
> **[3:36](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-overview?u=76281980&t=216)** As always, be sure to be familiar with the browsers most important to your target audience before implementing these new technologies.

> [!info]- Semantic Content
>
> **Env Vars:** css (8), dom (1), ie11 (1)
> **Code Keywords:** finally, (2), case, (1)
> **Analogies:** just like (2), similar to (1)
> **Definitions:** in other words (1), is a  (1)
> **CLI Commands:** find (1)
> **URLs:** [caniuse.com](https://caniuse.com) (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Configure CSS custom properties
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=0)** - [Female narrator] Now that you've heard a little background about custom properties, let's see how to configure them and use them in your CSS.
>
> **[0:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=7)** Declaring a variable is really easy.
>
> **[0:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=11)** First of all, configure your CSS declaration with a selector and a declaration body, just as you always do.
>
> **[0:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=18)** Notice here I'm using the pseudo-class of root.
>
> **[0:22](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=22)** This is a more specific selector than the usual HTML element selector, which may be an advantage.
>
> **[0:28](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=28)** The root selector also selects the full root of the document where the HTML elements selector may not do that, and that may matter especially if you're manipulating these values with JavaScript.
>
> **[0:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=41)** By using the root selector, you're making any variable declarations here available to your full document, wherever you'd like to call on the variables.
>
> **[0:50](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=50)** So essentially anything that's here is scoped globally.
>
> **[0:55](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=55)** Inside of the declaration body, declare your variables starting with a double hyphen followed by the name of the variable you'll use plus it's value.
>
> **[1:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=63)** Here, I've called my variable font-size-large and I've given it a value of 2rem, which makes sense.
>
> **[1:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=71)** Be aware that there's no error checking here in this declaration.
>
> **[1:14](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=74)** So if I set my font-size-large to blue, CSS would be perfectly happy with that.
>
> **[1:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=81)** Next, you're going to call the variable elsewhere in your document.
>
> **[1:25](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=85)** Here, I've set a class of wrapper to have a font size value of 2rem using the variable that I declared earlier.
>
> **[1:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=92)** You declare the variable by using var with a set of parenthesis, and inside the parenthesis include the variable name with the double hyphens.
>
> **[1:42](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=102)** You can declare pretty much anything as a CSS custom property.
>
> **[1:46](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=106)** Here are some examples, including colors, font sizes, file paths, short-hand values, or even something like a cubic bezier used in CSS animation.
>
> **[1:57](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=117)** Once again, I want to emphasize that CSS does not have a typed variable of any kind.
>
> **[2:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=123)** Here, I've said the wrapper will have a font size of an image?
>
> **[2:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=127)** Yep, perfectly legal and it will happily pass validation.
>
> **[2:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=131)** However, the browser will recognize this as not valid and will skip over this font size declaration here in the wrapper.
>
> **[2:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/configure-css-custom-properties?u=76281980&t=138)** So be careful when you're using your variables, it's really easy to make a mistake that may not be obvious in the debugging process.

> [!info]- Semantic Content
>
> **Env Vars:** css (6), html (2)
> **Code Keywords:** let (1), var (1), pass (1)
> **Warnings:** be aware (1), be careful (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [female (1)

#### CSS custom properties and inheritance
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=0)** - Lets take a closer look at how inheritance works with custom properties.
>
> **[0:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=4)** It's just like other aspects of CSS inheritance.
>
> **[0:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=7)** However, for whatever reason I find that people are surprised by the way custom properties behave in terms of inheritance.
>
> **[0:14](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=14)** So let's look at an example in a little bit more detail and in isolation.
>
> **[0:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=18)** So its starting here we have some HTML.
>
> **[0:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=21)** We have an H1.
>
> **[0:23](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=23)** We have a paragraph and then we have an article.
>
> **[0:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=26)** Inside of that article we have an H2 and another paragraph.
>
> **[0:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=30)** And those two paragraphs are what we are going to focus on a lot of the time here.
>
> **[0:34](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=34)** Down in my CSS, as you'll see, I have my root declaration and I've set up a variable called the color and the color is set to red.
>
> **[0:43](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=43)** And then I have just some empty declarations right now for the article and the paragraph.
>
> **[0:48](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=48)** So the first thing that I want to do is I want to declare that my article will have a color of red.
>
> **[0:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=56)** In other words, the text color is going to wind up being red.
>
> **[1:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=60)** So what is going to show as red on this page as soon as I type in that code?
>
> **[1:06](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=66)** Think about that for just a second, what is going to turn red when I declare that the article has red text?
>
> **[1:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=75)** Okay, so if you've thought about that we'll simply say the word color and then we'll say var in parentheses, double dash, color and a semicolon.
>
> **[1:27](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=87)** So hopefully you said that both the H2 and the paragraph would be the color of red.
>
> **[1:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=92)** Color property is one of those that's inherited so it will be article has that declaration of color, the H2 inherits the color from the article of the paragraph inherits that color from the article.
>
> **[1:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=105)** So this is just straightforward CSS, this is exactly what you'd expect to happen.
>
> **[1:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=113)** Now what would happen if I took that same line of code that I have here on line five, the color is the variable of color and I move that into the paragraph declaration instead.
>
> **[2:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=124)** What will now have the text color of red?
>
> **[2:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=127)** Think about that for a second.
>
> **[2:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=130)** What would you expect to see?
>
> **[2:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=135)** So now I'm going to move that here into the paragraph and hopefully you said that both of the paragraphs would have the color of red, because of course we said that the paragraphs will have the red.
>
> **[2:27](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=147)** And so the paragraph outside the article has the color of red, that first paragraph and paragraph two that is in the article, that is also red.
>
> **[2:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=157)** So now I'm going to do something kind of funky here, so at the beginning we have our root declaration with the color red.
>
> **[2:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=165)** Now I'm going to re-declare that variable here inside of this article.
>
> **[2:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=169)** So I'm going to make this become blue.
>
> **[2:52](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=172)** And my question to you now is, what color is paragraph one, and what color is paragraph two?
>
> **[3:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=180)** When I'm going ahead and make this declaration happen.
>
> **[3:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=183)** So if I declare in my article that the color will be blue, and in the following declaration I have a paragraph declaration there, and I've just called for a color, what color is the two paragraphs?
>
> **[3:19](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=199)** Okay, so in this situation, we have two paragraphs of different colors.
>
> **[3:25](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=205)** How on earth does that work?
>
> **[3:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=206)** Well remember that here, in paragraph one, we're inheriting the color declaration from the root of the article, in other words the color is red.
>
> **[3:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=215)** But inside of the second paragraph, that's inside of the article, so we have red declared way outside at the very top of the document object model that that whole tree of HTML, then we have the article that re-declares the color as blue and since the second paragraph is inside of the article, it will inherit blue from the article rather than red from the root.
>
> **[4:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=243)** So we actually can wind up with two paragraphs of different colors even though that looks like they have the same declaration there.
>
> **[4:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=251)** And so this is what I'm really talking about when I say custom properties are going to inherit their properties just the same way regular CSS works.
>
> **[4:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-inheritance?u=76281980&t=260)** This is pretty different than what you normally see with variable declarations in other programming languages.

> [!info]- Semantic Content
>
> **Env Vars:** css (4), html (2)
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** let (1), var (1)
> **Definitions:** in other words (2)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - lets (1)

#### CSS custom properties and Sass variables
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=0)** - Now that you've seen how custom properties work, in terms of their inheritance and values and so forth, let's try that same experiment again, this time using Sass variables.
>
> **[0:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=10)** So this is exactly the same HTML that we had in the previous example where we have one paragraph outside the article, one paragraph inside the article.
>
> **[0:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=21)** And of course our syntax is going to be different here in this CSS panel because this is actually Sass.
>
> **[0:27](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=27)** Remember that with Sass, we simply declare a variable by putting the dollar sign in front of it and just saying color in this case that is color the variable name.
>
> **[0:36](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=36)** And we've assigned it a value of red.
>
> **[0:39](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=39)** So in order to declare this, if I do exactly the same thing as I did before, if I declare the text color inside of my article to be red, what would you expect to see here on the screen?
>
> **[0:52](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=52)** Think about that just for a second.
>
> **[0:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=56)** And so here I'll say the color property is the color variable and this is exactly the same response that we had with the CSS custom properties, both H2 and the paragraph inherit the color red from the article declaration and everything is red there.
>
> **[1:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=75)** Obviously the paragraph outside the article doesn't have anything to do with that declaration and so it stays black.
>
> **[1:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=84)** Now, what happens if I move this color declaration that I put on the article?
>
> **[1:29](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=89)** What if I move that to the paragraph just as I did before?
>
> **[1:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=92)** So instead of declaring the color here in the article, what's going to happen if I move this to the paragraph declaration?
>
> **[1:39](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=99)** Think about that for a second.
>
> **[1:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=101)** Pretty straightforward, right?
>
> **[1:43](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=103)** Basically the same thing that happened with custom properties as well and both of our paragraphs wind up being the color red.
>
> **[1:52](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=112)** Okay, so now I'm going to move that color declaration back to my article and then what I'm going to do here in between my article declaration and my paragraph declaration I'm going to re-declare my Sass variable.
>
> **[2:09](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=129)** So I'm going to have a color of color here both on my article and on my paragraph and in between here I'm going to redefine the value of color.
>
> **[2:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=144)** So this syntax is a little bit different than what you saw with the custom properties but effectively it's the same kind of thing.
>
> **[2:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=152)** I'm going to just re-declare this to be blue.
>
> **[2:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=155)** What do you expect to see now in terms of the color arrangement here on this page?
>
> **[2:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=161)** So think about that for a second.
>
> **[2:46](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=166)** And so this is the way the colors wind up working now.
>
> **[2:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=169)** So in other words let's think about this, here I have my Sass variable declared here, color of red, and the article comes after that.
>
> **[2:59](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=179)** It takes on that red color and you see over in the display the H2, My article, that is red.
>
> **[3:08](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=188)** Then I re-declare my color of blue, a little bit later on, and the paragraph that comes after that, well, it takes on the color of the previous declaration, in other words this declaration on line five is overriding what you saw on line one.
>
> **[3:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=204)** So now my paragraphs are both blue instead of being red.
>
> **[3:29](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/css-custom-properties-and-sass-variables?u=76281980&t=209)** And that's just a little bit of the difference here between Sass and the custom properties and how their inheritance works.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (2)
> **Env Vars:** css (2), html (1)
> **Definitions:** in other words (2), is a  (1)
> **Speakers:** - now (1)

#### Using Sass variables
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=0)** - [Instructor] As I've talked about calc and custom properties in my classes and at conferences, a common question I get is whether it makes sense to continue using Sass.
>
> **[0:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=12)** Yes, absolutely.
>
> **[0:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=15)** Remember that Sass has lots of features that aren't yet available in CSS including mixins and extends.
>
> **[0:23](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=23)** Remember, these are ways that we can reuse little bits of code.
>
> **[0:27](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=27)** We can either extend that code.
>
> **[0:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=30)** In other words, continue to add on to styles with an extend, or we can have some code where we're passing in values.
>
> **[0:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=37)** That's a thing that we can do with mixins.
>
> **[0:40](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=40)** There's nesting, one of the most favorite features of Sass for all the programmers out there.
>
> **[0:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=45)** Nesting makes your Sass a little bit easier to read.
>
> **[0:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=49)** All of those wonderful file management functions like the partial files where you can split your Sass up over a whole bunch of different files.
>
> **[0:57](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=57)** Doesn't matter how many 'cause when you compile, it compiles down to a single CSS file.
>
> **[1:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=62)** And then all of those wonderful built-in functions that are available to you with Sass.
>
> **[1:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=67)** Some of my favorites are the lighten and the darken functions.
>
> **[1:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=70)** Those are just so easy to just access and use for color manipulation, or you have properties like rounding and many, many other built-in functions in Sass.
>
> **[1:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=80)** And of course, you can write your own functions as well.
>
> **[1:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=84)** So when should you use Sass versus custom properties?
>
> **[1:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=90)** Well what I recommend is as follows.
>
> **[1:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=92)** First of all, use your Sass variables, or Sass math, when you're establishing something that's going to be universal throughout your document.
>
> **[1:40](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=100)** For example, it's unlikely you're going to change your color scheme across your media queries, or maybe your font families.
>
> **[1:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=109)** Those are all going to be exactly the same between your mobile and your desktop layouts.
>
> **[1:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=113)** However, you might change a font size depending on where you are in your media queries, and that would be better dealt with via custom properties.
>
> **[2:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=123)** Second, you can use custom properties for variables and math where the values will be changing in the media queries.
>
> **[2:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=132)** For example, you might change your font sizes for your mobile devices, and that might be totally different than what you're doing on a desktop device.
>
> **[2:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=141)** Rather than repeating the same styles over and over again with the new values inside of your media queries, we're going to establish that logic for the layout outside of the media query as a default.
>
> **[2:34](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=154)** So in other words, we're going to establish the layout where there's no media queries.
>
> **[2:38](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=158)** That's the mobile first approach, and that's where we're going to put in all of the logic for how the page should be laid out.
>
> **[2:46](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=166)** And then inside of the media query, this is where we're going to change the values of the custom property rather than redeclaring our styles over and over again.
>
> **[2:58](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=178)** If this approach isn't exactly clear to you, I will be going through this in great detail in the coming videos.
>
> **[3:06](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=186)** Remember that Sass can't change its variable values inside of media queries and impact the design in the way that custom properties can.
>
> **[3:16](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/using-sass-variables?u=76281980&t=196)** If you want to change a variable value within a media query, custom properties are always the way to go.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (2), extends (1), default. (1)
> **Env Vars:** css (2)
> **Definitions:** in other words (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Challenge: Add custom properties to type scale
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=0)** - [Instructor] Remember the type scale challenge from the calc chapter?
>
> **[0:09](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=9)** We wrote a whole bunch of code to use calc in calculating our type scale, but ultimately we're not really happy with this result.
>
> **[0:17](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=17)** It's clear how to derive each value in the scale, but oh my goodness, it's so repetitious, no one wants to look at this.
>
> **[0:25](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=25)** So, let's rewrite this type scale using custom properties, now that you know a little bit more about them.
>
> **[0:31](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=31)** To get you started on this, I'll give you a few hints.
>
> **[0:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=35)** One of the things you probably want to do is think about what are the numbers that you're going to multiply together to take the place of all of these numbers that are repeated over and over again here?
>
> **[0:47](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=47)** So, think about that for a second.
>
> **[0:50](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=50)** So, you're probably going to do something like this.
>
> **[0:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=53)** You'll have your root declaration here and inside of that we'll say something like our base size will be 1m, correct?
>
> **[1:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=64)** And maybe we'll have a type scale with that.
>
> **[1:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=67)** And I'm going to give that a value of 1.2.
>
> **[1:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=71)** So then, instead of all of this math that's going on here, what we can do down here for our font size instead of just saying 1m, we would say instead our var would be the base-size, yeah?
>
> **[1:27](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=87)** Much nicer to look at.
>
> **[1:29](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=89)** And then, if we had some kind of math that we were doing, let's say this small down here, instead of doing our calc of 1m divided by 1.2, we would say what?
>
> **[1:40](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=100)** Our var is a base-size divided by our var of type scale.
>
> **[1:52](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=112)** Just like that.
>
> **[1:54](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=114)** And so, now that math will happen using the variables rather than all those different numbers.
>
> **[2:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=122)** So, in this challenge, what I'd like for you to do is to take a look at h1 to h5 and see if you can rewrite those leveraging the importance of the base-size and the type scale.
>
> **[2:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=135)** Protip, this may not be all of the variables that you want to declare here.
>
> **[2:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=140)** Maybe there's some other variables you'd like to declare as well.
>
> **[2:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-add-custom-properties-to-type-scale?u=76281980&t=144)** I'll show you my answer in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** var (3), this. (2), let (2), this, (1)
> **Versions:** 1.2 (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Add custom properties to type scale
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-add-custom-properties-to-type-scale?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-add-custom-properties-to-type-scale?u=76281980&t=0)** - So, how'd you do with that challenge?
>
> **[0:09](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-add-custom-properties-to-type-scale?u=76281980&t=9)** Hopefully you got most of these the way that I've done them here.
>
> **[0:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-add-custom-properties-to-type-scale?u=76281980&t=12)** Some of you, I suspect, might have taken your H1 to H5 here and just substituted the variable names for all of those 1.2's that we were multiplying by, so like five of them.
>
> **[0:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-add-custom-properties-to-type-scale?u=76281980&t=24)** Instead, what I did here was I simply defined my various heading sizes and then did the math from here just to make things a little bit easier to read.
>
> **[0:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-add-custom-properties-to-type-scale?u=76281980&t=35)** So we started with our H5 which previously had been just, uh, 1M times 1.2 I went ahead and wrote that here as our H5, So our base size times our type scale and set that to be the value of H5, and then declared that value down here so we just go ahead and do that math and that becomes the size of our H5.
>
> **[0:59](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-add-custom-properties-to-type-scale?u=76281980&t=59)** Then for H4 all I have to do is take the value of H5 and multiply it by the type scale again and write it here as an H4, and we just continue to work through that series, and write out all of the values down here in our headings, so it's a little bit clearer.
>
> **[1:16](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-add-custom-properties-to-type-scale?u=76281980&t=76)** Now I've called these variables H1 through H5.
>
> **[1:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-add-custom-properties-to-type-scale?u=76281980&t=80)** You could call them whatever, font size base, font size larger, or font size two, or font size three, something like that.
>
> **[1:29](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-add-custom-properties-to-type-scale?u=76281980&t=89)** You could certainly do that.
>
> **[1:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-add-custom-properties-to-type-scale?u=76281980&t=90)** The way that this is formatted, obviously in real html and CSS your headings have a very specific semantic meaning, but remember that your variable declarations here do not.
>
> **[1:43](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-add-custom-properties-to-type-scale?u=76281980&t=103)** So, for example, if later on I wanted to have an H1 that was a very small size, I could say that H1, probably not the selector, but probably something like, whatever, a section H1 or something like that would have a font size of H5.
>
> **[1:59](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-add-custom-properties-to-type-scale?u=76281980&t=119)** That would give me a smaller H1 font size.
>
> **[2:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-add-custom-properties-to-type-scale?u=76281980&t=122)** So it's possible to mix and match our variable names, but don't confuse that with the semantics of what's going on here in your html.
>
> **[2:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-add-custom-properties-to-type-scale?u=76281980&t=133)** Obviously those tags have very specific meaning and that should be honored, but your variable names can be called whatever you want.

> [!info]- Semantic Content
>
> **Versions:** 1.2 (2)
> **CLI Commands:** make (1)
> **Code Keywords:** continue (1)
> **Env Vars:** css (1)
> **Analogies:** for example (1)
> **Speakers:** - so (1)
> **Non-Speech:** (upbeat music) (1)


### 4. 3. Create Layouts

#### Mark up a simple four-column grid system
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=0)** - [Instructor] In this next chapter, I'll walk you through step by step creating a flex box based grid system, using the principles of responsive design 2.0.
>
> **[0:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=10)** We'll be creating a simple four column grid system.
>
> **[0:14](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=14)** However, you can use the principles that I'm going to introduce here to create your own grid system.
>
> **[0:19](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=19)** No matter how many or how few columns you'd like to use, because we're going to leverage calc and custom properties as part of our process.
>
> **[0:28](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=28)** I showed you one way to start coding a four column grid system back in the first chapter, but I didn't include any media queries.
>
> **[0:36](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=36)** So, over the course of this chapter, we're going to go through the whole process using a slightly different methodology than what I used in the first chapter.
>
> **[0:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=45)** And, we'll be adding CSS.
>
> **[0:47](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=47)** We'll be adding media queries.
>
> **[0:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=49)** We'll work with calc.
>
> **[0:50](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=50)** We'll work with custom properties.
>
> **[0:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=51)** All of that.
>
> **[0:52](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=52)** But, in order to get started, the very first thing that we have to do is we have to start with some quality mark up.
>
> **[0:58](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=58)** That should always be your first stop in terms of laying out a webpage.
>
> **[1:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=62)** So let's just take a quick peak about what we've got going on here in our HTML.
>
> **[1:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=67)** We have a div with a class of wrapper.
>
> **[1:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=70)** That's going to go all the way around our article.
>
> **[1:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=72)** You'll see wrappers all over the web.
>
> **[1:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=75)** And inside of this, we have a series of articles.
>
> **[1:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=78)** These are of course little syndicational bits of content.
>
> **[1:23](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=83)** We can take whatever this is here with the weddings, the picture, the little paragraph of introduction and the read more and we could syndicate that little bit of content, so we've marked that up as an article.
>
> **[1:34](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=94)** And this is going to ultimately be row one.
>
> **[1:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=97)** It'll be four individual boxes.
>
> **[1:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=101)** Then you'll see that I have a comment here where I have row two.
>
> **[1:43](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=103)** It's two boxes each spanning two rows.
>
> **[1:46](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=106)** We have row three, a narrow left column with a wide right column.
>
> **[1:50](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=110)** We have row four, which will be one big, fat column.
>
> **[1:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=113)** And then finally in row five, we're going to have one of those one-two-one arrangements, so the first article will take up one column, the second will take up two and the third column take one column, as well.
>
> **[2:05](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=125)** And these are desktop descriptions of what it is that we're looking for.
>
> **[2:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=130)** Obviously on something like a mobile site, this is just going to stack these things on top of each other.
>
> **[2:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=135)** So, what is the core of Flexbox?
>
> **[2:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=138)** We think about it, always have to think about parents and children, flex containers and flex items, so remember that with the flex container, we have a certain set of properties that will describe how this page is going to look.
>
> **[2:31](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=151)** The flex items inherent certain characteristics, as well.
>
> **[2:34](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=154)** The grandchildren, that third level in the flexbox in that Document Object Model, that HTML tree of tags, they are not going to inherit anything at all.
>
> **[2:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=165)** So, let's go on ahead and start putting this together.
>
> **[2:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=169)** Probably what I want to do is group these rows, maybe with something like a div with a class of row.
>
> **[2:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=176)** And that will ultimately be our flex parent or the flex container.
>
> **[3:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=183)** And I'm going to end that row down here just before that next comment.
>
> **[3:08](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=188)** So, here my div with a class of row is going to start on line three and it will end on line 28.
>
> **[3:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=195)** Let's go on ahead and put in a few more of those.
>
> **[3:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=198)** I'll put one around the next row here, a div with a class of row.
>
> **[3:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=204)** That's on line 30 and then we'll go ahead and end that on line 43.
>
> **[3:33](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=213)** Then on row three, we'll go ahead and start a div with a class of row, here on line 45 and then on line 57.
>
> **[3:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=231)** The next div with class of row on line 60 ending on line 67.
>
> **[4:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=243)** And then finally one more here on line 69.
>
> **[4:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=252)** And we can end that on line 88.
>
> **[4:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=258)** Great, so now we have our rows established.
>
> **[4:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=261)** The next thing to do is to throw on some columns and we'll put some classes to make that happen.
>
> **[4:27](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=267)** So, in our first row, which starts here on line three, we want to have four individual boxes, each one going across the page.
>
> **[4:36](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=276)** So I'm just going to call these, right in my article tag, I'll add a class here of col hyphen one.
>
> **[4:43](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=283)** In other words, this is the definition of one column wide.
>
> **[4:47](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=287)** So we'll just go on ahead and copy that class with col-1.
>
> **[4:50](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=290)** We'll go on ahead and paste that into the article in line 10, the article in line 16 and the article here on line 22.
>
> **[5:01](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=301)** So that takes care of our first row.
>
> **[5:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=304)** Our second row, we're going to have two boxes each box spanning two columns.
>
> **[5:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=310)** And so, here with article on line 31 that should be a class of col-2 and our article on line 37 will also have a class of col-2.
>
> **[5:25](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=325)** Then down here on row three, we're going to have a narrow left column and a wide right column.
>
> **[5:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=332)** So the article on line 46, we're going to give this a class of col-1 that would be a narrow left column, I think.
>
> **[5:42](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=342)** And then the other article that is on line 52 we'll give that class of col-3.
>
> **[5:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=349)** In other words, it will be three columns wide.
>
> **[5:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=353)** And then finally down here on row four.
>
> **[5:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=356)** We have our single article tag, we'll just give that a class of col-4.
>
> **[6:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=363)** And then down here for our one-two-one arrangement, I'm sure you can guess what comes here.
>
> **[6:09](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=369)** This will be article with a class of col-1 on line 70, article with a class of col-2 on line 76 and article with a class of col-1 on line 82.
>
> **[6:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=384)** Okay great, so now we have our markup established here for our layout, we have rows that are going to wind up being our flex parents, the flex containers, and we have a series of classes from col-1 to col-4 that are going to be our individual flex items and they are going to vary in width.
>
> **[6:43](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/mark-up-a-simple-four-column-grid-system?u=76281980&t=403)** Now that we have that structure established, we're ready to take a look at the CSS.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1), for. (1), throw (1)
> **Env Vars:** css (2), html (2)
> **Definitions:** in other words (2)
> **CLI Commands:** make (1)
> **Versions:** 2.0 (1)
> **Cross-References:** next chapter (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Create a starting CSS for the grid system
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=0)** - [Instructor] Now that we have our HTML all marked up with our wrapper and rows and our columns, let's go ahead and start writing some Flexbox for a desktop-based layout.
>
> **[0:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=11)** So first of all, I'm going to start by putting in some colors here for col one.
>
> **[0:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=21)** Let's put in a background color of a lovely shade of pale yellow.
>
> **[0:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=30)** And then for col two, I'll put in a nice purple.
>
> **[0:42](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=42)** For col three, I'll put in this blue here.
>
> **[0:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=51)** And then for col four, there we go, so we'll put in this nice purple here for col four.
>
> **[1:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=62)** So there we go.
>
> **[1:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=63)** We've just put in some background colors so that we can see what we're doing.
>
> **[1:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=67)** Anytime you're working with layout problems like this, putting in some borders, putting in some background colors is always super helpful and if you pick ugly colors like I did, well, you won't forget to take them out when you decide to put this code into production.
>
> **[1:22](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=82)** So that's the whole purpose of those colors there.
>
> **[1:25](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=85)** And now with that in place, let's go on ahead and start in on the Flexbox.
>
> **[1:31](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=91)** So just before line 16 here, I've got a border box declaration here.
>
> **[1:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=97)** I'm using my border box sizing instead of the default content box sizing.
>
> **[1:42](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=102)** Remember, border box sizing says that we're going to consider the width of something.
>
> **[1:48](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=108)** We'll include the padding and the border in that width as opposed to the content box model, which says that the width is determined only by the content and that the padding, border, and margin are a separate calculation.
>
> **[2:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=122)** So that's what this little bit of code is here.
>
> **[2:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=124)** As you can see, there is an article here by Paul Irish where you can go read more about that.
>
> **[2:08](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=128)** Down here, we just have some general styling for some other things.
>
> **[2:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=132)** You're welcome to take a look at that, but there, we won't be touching that code.
>
> **[2:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=135)** That's just basic styling for this code pen.
>
> **[2:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=138)** So now I'm going to go ahead and set up my row.
>
> **[2:22](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=142)** And inside of this, we'll go ahead and say, first of all, of course, display flex.
>
> **[2:28](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=148)** So just by doing that, that'll be enough to go on ahead and put our content together into the rows that we want.
>
> **[2:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=155)** They're all the wrong widths and the layout is a mess, but everything is at least on the right row just by saying display flex.
>
> **[2:43](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=163)** So then we're going to say our flex flow is row wrap because of course, we want things to be laid out in a row.
>
> **[2:50](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=170)** We want things to wrap onto the next line if there's not room on them in one row.
>
> **[2:55](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=175)** And that will flip this over into a stackable layout.
>
> **[2:59](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=179)** Why is that?
>
> **[3:01](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=181)** Well, each of these items doesn't have a flex basis yet, so the width of each box is the width of its content, and then it just sort inherently means because of the text and the pictures that we've chosen here pretty much every box winds up on its own line for the moment, so that's what's going on there.
>
> **[3:19](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=199)** And then I'm going to say my justify content will be space between.
>
> **[3:27](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=207)** And so space between, remember there's a whole bunch of values here for justify content, but space between in particular says we're going to take all of these boxes.
>
> **[3:36](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=216)** We're going to shove them all the way to the edges of the screen and we're going to take any extra space that happens to be available and we're going to turn that into the space in between each of these boxes.
>
> **[3:48](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=228)** Okay, great.
>
> **[3:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=229)** That'll become super relevant later on, although we don't see it in action here just yet.
>
> **[3:54](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=234)** So now what we need to do is simply take col one and we can start by saying its flex basis will be 25%.
>
> **[4:06](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=246)** So this is just sort of what we had talked about earlier in some of our earlier examples.
>
> **[4:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=251)** We're just going to go ahead and set this up, sort of rough it out a little bit.
>
> **[4:17](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=257)** Our col two is going to have a flex basis of 50%, so that'll put those two boxes next to each other.
>
> **[4:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=264)** So far, so good.
>
> **[4:28](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=268)** Shockingly, our col three will be, what?
>
> **[4:31](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=271)** 75%.
>
> **[4:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=275)** There we go there, and then our col four will be 100%.
>
> **[4:46](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=286)** Okay?
>
> **[4:47](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=287)** So good, now things are of the same width.
>
> **[4:50](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=290)** They line up.
>
> **[4:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=291)** We still aren't quite pretty yet, but it's a pretty reasonable working prototype.
>
> **[4:57](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=297)** All right, now at the moment, because my flex basis is occupying the full width of these rows, everything runs into each other.
>
> **[5:05](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=305)** We'd like to have a little bit of space in between each one of these boxes so we can do some quick math to make that happen.
>
> **[5:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=313)** If we have a col three on a row, we're only going to have one gap.
>
> **[5:19](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=319)** So let's call that 1%.
>
> **[5:22](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=322)** Obviously, if we have a col four here, we have no gaps and there's no need to make a change there.
>
> **[5:27](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=327)** But here, we'd have one gap.
>
> **[5:29](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=329)** Let's call that 1%.
>
> **[5:31](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=331)** If we have two boxes next to each other like this, we have potentially two gaps there, so let's call that 2% and here with these three boxes on the top, let's say we have three gaps.
>
> **[5:44](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=344)** Let's call it 3%.
>
> **[5:46](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=346)** So I'm going to modify my values here to reflect that.
>
> **[5:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=349)** We'll make each of these boxes 22% to give it a little bit of gap in between each of those gaps should be 1%, because we've shoved everything to the edges of the row and we're putting the space in between the boxes.
>
> **[6:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=364)** So here on col two, we'll make that 48%.
>
> **[6:08](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=368)** For col three, we'll make it 74%, and we'll leave col four alone at 100%, so you can see that our gaps are lining up nicely here.
>
> **[6:17](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=377)** That math is working out really, really well for us.
>
> **[6:23](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=383)** Now roughing things out this way means that we're going to have flexible space that still lines up with the cells above and below that space.
>
> **[6:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=392)** This is the heart of Flexbox.
>
> **[6:33](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=393)** So rather than using margin and spelling out a margin for each of these, margin would not be necessarily flexible.
>
> **[6:42](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=402)** Here, we're letting Flexbox manage the flex basis property rather than the width and Flexbox is now managing the gap rather than managing that via margin.
>
> **[6:54](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/create-a-starting-css-for-the-grid-system?u=76281980&t=414)** So now that this is working with a desktop layout, let's add some media queries and get this working on tablet and mobile.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this, (3), super (2)
> **CLI Commands:** make (5)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** html (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Add media queries to your grid system
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=0)** - [Instructor] Now that we have our prototype working in a desktop layout, let's rework this with mobile and tablet configuration.
>
> **[0:08](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=8)** So first of all, we are going to take these styles here for column one to column four, and we'll just go on ahead and put these in a media query at media min width of, say, 768 pixels.
>
> **[0:29](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=29)** And we'll go ahead and open up the set of curly braces.
>
> **[0:33](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=33)** We'll close them down here after col four.
>
> **[0:40](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=40)** Indent everybody to make it pretty, and so that's ultimately where we're going to be.
>
> **[0:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=45)** So if we make our screen size over here narrower than that, what happens, we're back to that weird, everything just sort of stacks on top of each other, right?
>
> **[0:54](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=54)** We'll have no flex basis of any particular width, why?
>
> **[0:58](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=58)** Because the only place we're currently declaring our flex basis, right here inside of this media query.
>
> **[1:05](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=65)** So let's set up a second media query for, let's say, tablet dimensions.
>
> **[1:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=70)** I'm just going to copy what I already have here and paste it and I'm going to change my value in the media query from 768 pixels to let's say, 480 pixels.
>
> **[1:23](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=83)** Okay, so let's just go on ahead and see what happens when we get down there.
>
> **[1:28](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=88)** Well, things are looking kind of skinny.
>
> **[1:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=92)** We'd probably like things to wrap around a little bit.
>
> **[1:34](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=94)** This is, I mean, it sort of vaguely works, but probably there's more that we can do here to make this beautiful, so let's see about changing some of these numbers.
>
> **[1:44](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=104)** For example, here with these column ones, maybe what I'd like is for each one of those to take up two columns at this dimension.
>
> **[1:52](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=112)** So in other words, we'd have a row with two boxes on it and a second row with two boxes on it, and I could do that pretty easily just by changing my flex basis value here to say 48%.
>
> **[2:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=124)** Hey, that worked great.
>
> **[2:05](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=125)** So now I've got two boxes on top of two boxes, that looks good.
>
> **[2:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=130)** These look fine.
>
> **[2:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=132)** And but oops, this is not working here, is it?
>
> **[2:16](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=136)** So here, I've got a flex basis of 48% and this one has still got a flex basis of 74%, so now I've got a situation where I have two different behaviors for my column one.
>
> **[2:28](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=148)** Got one behavior, it's going to look like this where it's going to go from spanning one column to spanning two columns.
>
> **[2:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=155)** Down here, I've got a situation where I really want this one to span all the way across 100%, and so what I'm going to need are some more classes to make that happen.
>
> **[2:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=165)** So let's go on ahead and drop those in real quick.
>
> **[2:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=169)** Up here in our HTML, I'm going to scroll down here to line 46 and I'm going to change the name of this one here to column one hyphen four because I want it to go from one column wide to four columns wide, and the ones that I had up here at the top of my page, these are going to be column one hyphen two because it's going to go from one column wide to two columns wide.
>
> **[3:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=193)** And so now I just need to change all of those class names here in my row.
>
> **[3:25](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=205)** And remember, down here at the very bottom I also had some column ones down here.
>
> **[3:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=210)** These, I'm going to want to go from one column wide to two columns wide, and we'll probably have some reordering we're going to need to do down here at the bottom.
>
> **[3:39](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=219)** I'm not going to address that just yet, but just sort of file that away for the moment.
>
> **[3:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=225)** Now by changing my class names here, I've broken my colors.
>
> **[3:48](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=228)** I've probably also broken parts of my layout, so let's go back and fix those issues.
>
> **[3:54](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=234)** If I go to my colors here, right now, instead of having just a col one, I have a col two, one hyphen two, and a col hyphen one hyphen four.
>
> **[4:05](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=245)** If you wanted to make those different colors, you could certainly do that.
>
> **[4:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=251)** Down here in my desktop media query, these are going to behave the same, so col hyphen one hyphen two and col hyphen one hyphen four, they're going to do the same thing.
>
> **[4:27](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=267)** But when we get up here to our tablet media query, we're going to change behaviors here.
>
> **[4:33](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=273)** Column hyphen one hyphen two is going to have this 48% width, which is going to be the same as column hyphen two, so we could actually just combine those into one style.
>
> **[4:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=291)** And just streamline things a little bit there.
>
> **[4:54](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=294)** There we go.
>
> **[4:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=296)** So how's that looking now?
>
> **[4:58](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=298)** Okay, better.
>
> **[5:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=300)** Column three definitely needs some attention still, right?
>
> **[5:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=304)** And as I mentioned here, we have an ordering issue going on down here in row five.
>
> **[5:08](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=308)** Let's just leave that alone for the moment.
>
> **[5:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=310)** We'll come back and revisit that.
>
> **[5:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=313)** So here with column three, what I actually want it to do here is go to 100%.
>
> **[5:19](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=319)** There we go, and then in the media query, we want it to go to 74.
>
> **[5:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=324)** So with the exception of row five, I think we've got things pretty well under control here.
>
> **[5:29](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=329)** Let's just test.
>
> **[5:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=330)** If we go back to a width that will work for our desktop media query, this is still looking the same.
>
> **[5:39](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=339)** Good, and if we narrow this up to our table size, then things are looking good except for the ordering issue we have going on down here in row number five.
>
> **[5:52](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=352)** And then the last thing that I want to do is set up a default flex basis value because as you know, when I go down here to a mobile dimension, these are all basically the width of their content and they look like they're lining up really nicely now, but let's go ahead and explicitly spell out exactly what we want here.
>
> **[6:14](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=374)** It's very simple to do outside the media query.
>
> **[6:17](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=377)** All we have to do is put in an attribute selector.
>
> **[6:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=381)** So I could say here that the class is going to start equal quote col hyphen.
>
> **[6:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=390)** So what does that mean?
>
> **[6:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=392)** Remember that attribute selector is going to select for the attribute of the class rather than the HTML tag, so here, any class that has C-O-L hyphen in it, which is all of them will be affected by the style, and we'll just say our flex hyphen basis is 100%.
>
> **[6:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=411)** So that'll take care of that mobile version of this.
>
> **[6:54](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=414)** Now the last part, let's deal with that final row and we'll start by just looking at our HTML here.
>
> **[7:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=422)** If this is the order that I want to display at the desktop arrangement, what I need to think about is how is this going to work here when I get to a tablet arrangement?
>
> **[7:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=435)** Maybe here, what I'd like to have happen is this pink box.
>
> **[7:19](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=439)** Okay, the middle, the main content, I want that to span across all four columns with these two yellow boxes, the Corporate Functions and Keen on Green, I'd like them spanning two boxes.
>
> **[7:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=452)** So in order to get that funky arrangement to work here, what we're going to first do is we're going to reorder.
>
> **[7:38](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=458)** So I'm going to put Other Events as the very first cell in my row.
>
> **[7:47](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=467)** Okay, so there it is, our very first cell in our row.
>
> **[7:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=473)** Okay, and now I can make that span across all of those columns.
>
> **[7:57](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=477)** So I'm going to call this one two hyphen four, so that it's going to go from two columns wide to four columns wide.
>
> **[8:06](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=486)** And then in my CSS, I can just add that in.
>
> **[8:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=492)** So here at desktop dimensions, we'll have a column two and a column hyphen two hyphen four.
>
> **[8:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=501)** Up here at our tablet dimensions, this is going to behave more like column three and four, right?
>
> **[8:27](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=507)** So we can combine these together, so col hyphen two hyphen four comma, column three.
>
> **[8:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=517)** And for column four, these are all going to have a flex basis of 100%, right?
>
> **[8:46](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=526)** Great, so let's just take a quick peek at that.
>
> **[8:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=529)** Okay, oh, we need to add the color for that row, so let's go on ahead and add that, as well.
>
> **[8:58](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=538)** Col hyphen two hyphen four, there we go.
>
> **[9:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=540)** Now that's pink, so that looks great here on our tablet, but when I go back here, now the pink's over here on the left side.
>
> **[9:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=551)** I really need to have these reordered.
>
> **[9:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=553)** So we're going to add to this in our HTML, well, all we have to do now is add some classes for this.
>
> **[9:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=561)** So what I'm going to do is I'm going to call this first one here.
>
> **[9:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=566)** We can just add a second class.
>
> **[9:27](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=567)** I'm going to add this as order hyphen A because that's the one I want to have come first.
>
> **[9:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=575)** This next one here is going to be order hyphen B, and then we're going to have the very last one here, the last article will be order hyphen C.
>
> **[9:48](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=588)** And then all I have to do is write some CSS for those.
>
> **[9:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=591)** So here, inside of our desktop media query, we'll go on ahead and add some classes for order hyphen A.
>
> **[10:01](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=601)** My order value will be two, okay.
>
> **[10:05](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=605)** So in other words, it's going to come second.
>
> **[10:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=613)** B is going to wind up being number one,
>
> **[10:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=621)** and letter C will wind up being number three.
>
> **[10:31](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=631)** Great.
>
> **[10:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=635)** Then of course, let's just take a quick peek and see how we're doing here.
>
> **[10:40](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=640)** So here we are at desktop dimensions.
>
> **[10:43](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=643)** Now my row is in the correct order here and if I narrow things up into tablet dimensions, that's looking great.
>
> **[10:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=651)** We have this on top, these two underneath, and if we narrow up to mobile dimensions, then they're all just going to stack on top of each other.
>
> **[11:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=660)** Fabulous, okay.
>
> **[11:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=662)** So this is our starting prototype, then, for our Flexbox-based grid system, and this is pretty much state of the art for what we're doing right now with CSS.
>
> **[11:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=672)** Everything is all spelled out here.
>
> **[11:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=673)** We have flex basis, we're managing our gap with space between, but we are repeating ourselves over and over again.
>
> **[11:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=680)** As you can see here, we're redefining flex basis over and over again in these various spots, redefining these numbers over and over again and things are getting a little bit long.
>
> **[11:31](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/add-media-queries-to-your-grid-system?u=76281980&t=691)** So the next thing to do is now let's go on ahead and apply calc and custom properties and see how we can streamline this code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), this. (2), for, (1), class. (1)
> **Env Vars:** html (4), css (3)
> **CLI Commands:** make (6)
> **UI Navigation:** go to (3), scroll down (1)
> **Definitions:** in other words (2)
> **Prerequisites:** set up (2)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)

#### Rewrite CSS to integrate calc() and custom properties
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=0)** - [Female Instructor] Now that we have our code working with regular CSS, let's refactor it using responsive design 2.0, with custom properties and with calc.
>
> **[0:09](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=9)** We're going to start with what's in the mobile display first.
>
> **[0:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=13)** We're going to put all of our logic right there in the mobile display and we'll just leave those declarations of flex basis further down here in the media queries, just for the moment.
>
> **[0:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=24)** Once we get that formula that we're going to put in up there and correct at the beginning, then we'll go ahead and make changes in the media queries.
>
> **[0:33](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=33)** So, first of all, what we want to do is we want to calculate the flex basis of these cells and that way we have to come up with that number is basically, how do we know that certain cells are that particular width?
>
> **[0:50](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=50)** So let's talk about that first row where we have four boxes.
>
> **[0:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=53)** We originally started by saying each of those boxes was 25 percent.
>
> **[0:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=56)** What was the math that we did in order to figure that out?
>
> **[0:59](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=59)** Well we said we have four columns, and each of those columns is going to have one box.
>
> **[1:06](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=66)** So one divided by four is point two five.
>
> **[1:09](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=69)** And then we multiplied that by a hundred percent to give us 25 percent.
>
> **[1:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=75)** So let's go ahead and just write some code that would actually reflect that.
>
> **[1:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=80)** And so here in our CSS, I'm going to start with the row, just to show you that you can do this, now I'm going to make a couple of variable declarations here.
>
> **[1:31](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=91)** I could put them in the root declaration, but just to show you that it's possible to scope your variables and you can declare these anywhere in your code, I'm going to go ahead and put these a little bit closer to where we're using them.
>
> **[1:42](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=102)** So here on the row I'm going to declare that I have a variable called columns and I'm going to give it a value of four.
>
> **[1:50](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=110)** In other words, there are four columns in our design.
>
> **[1:52](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=112)** So far so good?
>
> **[1:54](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=114)** And then here, in my class equals call, in other words all of thy columns, I'm going to establish another variable I'll just call width.
>
> **[2:05](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=125)** So these are the width of each of the boxes, how many columns is it going to occupy?
>
> **[2:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=132)** While at mobile dimensions, each one of those boxes is going to occupy four columns.
>
> **[2:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=138)** Okay.
>
> **[2:19](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=139)** And so then we'll simply say a value of a variable called initial basis because this is the value of the initial flex basis we're going to calculate.
>
> **[2:29](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=149)** We'll say that this is calc and we're going to calculate the variable of width, and we're going to divide that by the variable of columns, and then we're going to multiply that by a hundred percent.
>
> **[2:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=169)** So in this first example, this is pretty straightforward.
>
> **[2:52](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=172)** The width would be four, the columns would be four, four divided by four is one, times a hundred percent is?
>
> **[2:58](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=178)** A hundred percent.
>
> **[3:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=180)** So that's going to calculate the value of the initial basis variable, but we're not actually declaring it yet.
>
> **[3:05](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=185)** Where would we declare it?
>
> **[3:06](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=186)** Right here where it says flex basis of a hundred percent.
>
> **[3:09](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=189)** All we'd have to do now is say a variable of initial basis.
>
> **[3:17](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=197)** Just like that.
>
> **[3:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=198)** Now some of you might be bothered by the fact that I'm calling for variables here, that don't have a default value.
>
> **[3:25](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=205)** In other words, what would happen if I tried to run that math and those variables were, for whatever reason, they were not defined?
>
> **[3:33](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=213)** Well it's possible to have that default value available to us, so we could say for example, that the default value for width is whatever you want it to be, let's say it's one.
>
> **[3:43](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=223)** And the value for columns, the default value will be four.
>
> **[3:47](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=227)** Maybe you've changed it somewhere along the way.
>
> **[3:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=229)** So just by putting a comma with a number after it, these are not actually going to be used in the calculations, but they're here in case for whatever reason, those variables weren't defined, those are the default values that they'll use.
>
> **[4:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=243)** Okay so now let's move on to these media queries.
>
> **[4:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=247)** And obviously we're not looking at this gap just yet, we're just going to start with the same basic math that we had before, where we said it was 25 percent, 50 percent, 75 percent, a hundred percent.
>
> **[4:17](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=257)** I'll go back and factor in the gap in another video.
>
> **[4:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=260)** So instead of then declaring here in our media queries that the flex basis is 48 percent or a hundred percent, what could we do instead?
>
> **[4:31](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=271)** Well all we'd have to do here is simply re-declare the value of width.
>
> **[4:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=277)** So here the value of width is just going to be two.
>
> **[4:40](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=280)** That's pretty much it.
>
> **[4:42](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=282)** All of these other values here, they currently have that flex basis of a hundred percent, we could certainly go on ahead and re-declare this with a width of four, but in fact, the width is already four going into the media query, so this style here actually isn't even needed at all.
>
> **[5:01](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=301)** You could just go ahead and get rid of that and it will carry on into this media query.
>
> **[5:05](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=305)** Only these two styles, the call one two and the call two, will actually change, and the width value needs to change with that.
>
> **[5:14](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=314)** Then as we move into our desktop media query, and by the way, let's just check that tablet here real quick.
>
> **[5:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=321)** So if I go to tablet dimensions, sure enough, that looks pretty good.
>
> **[5:28](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=328)** That's all exactly what we would expect it to be.
>
> **[5:31](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=331)** Obviously we're missing the gap, but that's okay.
>
> **[5:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=335)** And there's all of the values stacked on top of each other, there at mobile dimensions.
>
> **[5:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=341)** So, so far it's looking pretty good.
>
> **[5:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=345)** Now let's go to desktop.
>
> **[5:46](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=346)** We still have a gap here because in some cases we're working with these hard values, that we've declared here for flex basis.
>
> **[5:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=353)** So now let's go through and manipulate these.
>
> **[5:58](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=358)** So instead of declaring a flex basis of 22 percent here, for our first declaration, we'll simply say that we have a width of one.
>
> **[6:09](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=369)** Here for the column two four, up here the width of two is going to carry into our desktop media query, so here all we have to do is just say that this width is two.
>
> **[6:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=381)** For column three, that's actually carrying down from the four, from the mobile.
>
> **[6:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=386)** Not re-declared here in the tablet, so we carry it down here, so we need to change its value.
>
> **[6:33](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=393)** And the width will be three here.
>
> **[6:38](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=398)** And these order properties, we can just leave them alone for the moment.
>
> **[6:42](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=402)** With order two one and three.
>
> **[6:44](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=404)** That's just fine.
>
> **[6:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=405)** If you wanted to go through and you wanted to make a variable for each one of these order values and you wanted to put that outside the media query and change the values here, that's certainly doable, but I don't really feel like I'm getting a lot of advantage by doing that here, based on the fact that this is just a very simple declaration with one property value pair.
>
> **[7:05](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=425)** I don't think I really get a lot of mileage out of doing that, but you can do it if you wish.
>
> **[7:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=432)** So now at this point, we are back to where we were a couple of videos ago.
>
> **[7:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=438)** We have all of these boxes that are stacked so nicely on top of each other, things are looking exactly the way we want them to look, with a fraction of the code of what we had before.
>
> **[7:31](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=451)** So rather than doing all of that complicated math, now I just have a formula up here on the top that's doing it for me.
>
> **[7:38](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=458)** I'm taking the width, dividing it by the columns, multiplying by a hundred percent, and I get an initial layout on the page.
>
> **[7:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-calc-and-custom-properties?u=76281980&t=465)** So there's just one thing that we're missing now, which is the gaps between the cells, and in the next video I'll show you how to put those in place.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (1)
> **CLI Commands:** make (3)
> **Definitions:** in other words (3)
> **Env Vars:** css (2)
> **UI Navigation:** go to (2)
> **Analogies:** just like (1), for example (1)
> **Versions:** 2.0 (1)
> **Cross-References:** in the next (1)

#### Rewrite CSS to integrate gaps between grid cells
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=0)** - [Instructor] Now that we have the initial layout scoped for our prototype and it's working, everything is good, now we need to add that gap in between each cell, so let's just start to think about this particular problem.
>
> **[0:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=13)** We have a number here called columns.
>
> **[0:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=15)** That's how many columns we have in our layout.
>
> **[0:17](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=17)** We know there's four columns, four columns all the time, and each one of these cells that we're looking at here, we give them a width, which is how many columns they occupy, so each of the widths here is one column.
>
> **[0:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=30)** These are two columns and so forth.
>
> **[0:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=32)** Now, lets think about the gaps.
>
> **[0:34](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=34)** Well, in a row like this where I have four cells, how many gaps do I have?
>
> **[0:40](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=40)** Remember we're using the justify content of space between, so we shove the first cell all the way to the left, the last cell all the way to the right, we distribute the space evenly in between.
>
> **[0:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=51)** How many gaps do we have?
>
> **[0:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=53)** Well, in a row of four like that, we have three gaps.
>
> **[0:57](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=57)** In a row where we have, say, three cells like this, how many gaps do we have?
>
> **[1:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=62)** Two gaps.
>
> **[1:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=64)** In a row like this where we have two cells, how many gaps do we have?
>
> **[1:08](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=68)** One gap.
>
> **[1:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=70)** In row like this where we have one giant cell, how many gaps do we have?
>
> **[1:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=75)** No gaps.
>
> **[1:17](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=77)** Are you detecting a pattern?
>
> **[1:19](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=79)** Okay, so that can always point you to the math if you can detect a pattern like that.
>
> **[1:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=84)** Let's go on ahead and just write what we just did, so I'm going to create a variable called gap, and that gap, basically, all we have to do is subtract the number of columns minus the width, so if I have four columns and the width is one because I have four cells lined up, that would be four minus one which would be three, multiply that by something like 1%, which would be 3%, that would be the space for all of the gaps, and then because we're using justify content of space between, that space would be distributed evenly, so let's just go ahead and write that.
>
> **[2:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=124)** Calc of first of all the variable of columns,
>
> **[2:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=133)** and you can put in your default values here, once again, if you wish, and we're going to subtract from that, the variable of width, and that's just the default value there, and then I'm going to multiply that whole thing by 1%.
>
> **[2:28](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=148)** Now, why 1%?
>
> **[2:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=150)** Remember earlier, when we did this math, I said each one of those cells on that first row there, they were 22% wide, which gave us a little bit of space in between that we could use the justify content and all the math worked out really, really well for that.
>
> **[2:47](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=167)** Does it have to be 1%?
>
> **[2:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=169)** No, you could absolutely, if you don't want the gap that big, you could make that number smaller.
>
> **[2:54](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=174)** Now, half a percent or .1%, or of course, you could make that number larger if you want a bigger gap in between your cells, so that is the math of the gap, so now what is the flex basis.
>
> **[3:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=187)** Well, all we have to do is what, take our initial basis that we calculated here, and then subtract the gap.
>
> **[3:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=195)** That becomes the value of our flex basis.
>
> **[3:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=198)** Ah, so let's just go on ahead and write that.
>
> **[3:23](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=203)** Once again, we're going to calc our variable of initial basis, and we're going to subtract from that our variable of the gap.
>
> **[3:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=217)** Boom, that's all we have to do, and suddenly, the gap shows up.
>
> **[3:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=221)** It shows up on all of our cells.
>
> **[3:43](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=223)** Look at that, isn't that amazing because now we don't have to go through and edit 5,000 different things to make sure the gap's in all the same place, and then we have to worry about the media queries, right?
>
> **[3:54](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=234)** Oh, because the media queries, the math's already done for us, look at that.
>
> **[3:59](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=239)** This is fabulous, right?
>
> **[4:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=242)** Okay, and the everything stacks up so nice once we get down here to modal dimensions, so this is truly a beautiful thing that we have going on here, this little formula right here.
>
> **[4:14](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=254)** This is super flexible, you can apply this to a whole bunch of different places and, in fact, you can use it in more than one place in your document if you wanted to do so, so if you had some other layout problems, maybe you could actually reuse this little bit of code and apply it to those other layout problems.
>
> **[4:33](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/rewrite-css-to-integrate-gaps-between-grid-cells?u=76281980&t=273)** Something to think about.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (1), super (1)
> **CLI Commands:** make (3)
> **Speakers:** - [instructor] (1)

#### Make the layout formula even more flexible
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=0)** - [Instructor] All right, so we've laid out our whole webpage using the cool little formula that we've got going on here.
>
> **[0:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=7)** But I've just added onto this another piece of HTML.
>
> **[0:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=11)** You know how clients are.
>
> **[0:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=12)** They come back to you and they want to lay yet something else out.
>
> **[0:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=15)** And so what's going on here now is I've added to this the very top of our HTML, always look at that first, at the very top of our HTML, I have a note from the client that says we want to have one image across here at mobile, this is going to be an image gallery, and then we're going to have it go two images across at the tablet dimension and three images across at a desktop dimension.
>
> **[0:43](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=43)** So we have our row declared here.
>
> **[0:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=45)** We have our div with a class of col four because this is going to occupy the full width of the screen, but inside of that, we have an unordered list with individual list items.
>
> **[0:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=56)** There's six of them, six doesn't go anywhere near the four that we've been building so far.
>
> **[1:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=60)** What are we going to do?
>
> **[1:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=62)** And then we have some images that are here inside of that.
>
> **[1:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=67)** All right, so that's what's going on.
>
> **[1:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=70)** What could we do at this point?
>
> **[1:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=71)** Well obviously, we could sit down and code something and make it do exactly what it says it wants to do, but we can actually leverage the formula we already have.
>
> **[1:22](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=82)** How cool is that?
>
> **[1:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=84)** And apply it directly to this list to make it do exactly what we want it to do.
>
> **[1:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=92)** So let's go on ahead and make that magic happen.
>
> **[1:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=95)** As always, the very best place to start here is identifying parents and children, and so we have this lovely unordered list here.
>
> **[1:44](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=104)** Our parent or the flex container will wind up being our UL.
>
> **[1:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=109)** The children or the flex item will wind up being our LIs.
>
> **[1:54](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=114)** So if we apply a Flexbox layout using the UL as our parent, the LIs as the children, we should be able to lay this out exactly as is described there and so let's go into our CSS down here.
>
> **[2:09](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=129)** So right now, we have a row and when we have an individual class that's going to have this formula attached to it, what could we do instead here?
>
> **[2:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=138)** Well, we could say something like instead of row, we could just say row comma, so in addition to also for col hyphen four UL, you could just say UL, it is the only list that is in the HTML we're working with, but chances are, you're going to have other lists that are going to wind up being in your website, so let's be a little more specific.
>
> **[2:40](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=160)** And then here where it says class equals call, what we're going to say is also dot col hyphen four LI.
>
> **[2:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=171)** So now we've gone ahead and applied our various logic here to this and why isn't it wanting to go up on rows?
>
> **[3:01](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=181)** Because none of the desktop dimensions down here have a width that's set that will work at the screen dimension that I'm working with right now.
>
> **[3:09](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=189)** So that's the next problem.
>
> **[3:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=192)** How do we go on ahead and manipulate some of these variables to reflect what it is that we want to do?
>
> **[3:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=198)** So here at mobile dimensions, what we're going to do is we're going to add to this a little bit.
>
> **[3:25](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=205)** So here, where it says image gallery styles, we have our col four of UL.
>
> **[3:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=210)** This is the stuff that turns off the bullets.
>
> **[3:33](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=213)** Let's add to this, instead of sticking with four columns, let's go to six because six is going to allow us to go three across and then two across and then one across, very, very nicely with six images, so we're going to say columns now has a new value of six.
>
> **[3:52](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=232)** And we had it assigned up here in our initial declaration up here that starts around line 18 of four, but because this comes later in the document, this is going to take priority, so we now have six columns for the UL and then for the LI, we can just say dot col hyphen four LI.
>
> **[4:14](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=254)** What do we want to do here?
>
> **[4:16](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=256)** Let's say its width to start with is also six because at the mobile layout, we want it to be one item per row and then we could also do something like say, text align of center because obviously, these are not taking up the full width of the screen, and just to drive that home, let's add to this a color so we can see what's going on.
>
> **[4:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=281)** And the color I'm going to add, I'm going to put it up here with my other colors where I have all my other background color declarations, so here I'm going to say dot col four LI.
>
> **[4:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=293)** Let's give this a background color of FA zero.
>
> **[5:01](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=301)** So a really hot orange so we can see what's going on here within our list items.
>
> **[5:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=307)** All right, so that's our mobile dimensions.
>
> **[5:09](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=309)** Now we can go on.
>
> **[5:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=311)** Let's address what happens in the media queries, so as we scroll on down here to our media queries, so at 480 pixels, we're going to make a change here.
>
> **[5:22](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=322)** We want this now to have two images across and so we'll just go on ahead and add to this a style of dot col four LI, and here, we'll say that the width is three.
>
> **[5:36](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=336)** So that will give us two images per row, so there it is.
>
> **[5:40](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=340)** That's all we needed to do.
>
> **[5:43](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=343)** See how easy it is to take the same formula and now we can just apply it here on the screen?
>
> **[5:48](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=348)** When we hit our break point here, then these images will stack on top of each other.
>
> **[5:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=353)** Okay, good.
>
> **[5:55](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=355)** And then of course, we need to do something at the desktop, so here for the desktop, we just simply add dot col hyphen four LI and our width value here will be two.
>
> **[6:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=370)** So now we wind up with our three pictures going across here at desktop dimensions.
>
> **[6:16](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=376)** We go to two at tablet dimensions and then one each stacked on top of each other here at mobile dimensions.
>
> **[6:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=386)** Now some of you may not be very happy with what's going on with our gap.
>
> **[6:33](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=393)** If you look at our gap, our gap gets a little bit wide here, and that's because in our original formula, we set our gap to be this math times 1%.
>
> **[6:48](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=408)** So to make this formula even more flexible, what if we take that 1% and turn that into a variable as well?
>
> **[6:59](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=419)** So simply after initial basis, we could create something called, let's say, gap hyphen constant, because that's basically what this is.
>
> **[7:08](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=428)** It's the constant, and we'll make that 1% as our initial declaration and then in our gap formula, we'll change this.
>
> **[7:16](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=436)** So if we say calc, we can say calc again because we're going to do this little bit of math.
>
> **[7:22](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=442)** We're going to subtract our columns minus our width and then instead of 1%, we'll multiply that by our variable, gap hyphen constant.
>
> **[7:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=457)** Okay, so basically we've changed nothing so far.
>
> **[7:40](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=460)** All we've done is just take out that hard-coded number of 1%, substituted it with a gap constant.
>
> **[7:47](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=467)** Now when I go down to my col four LI, I can now pass in a different value for the gap constant.
>
> **[7:55](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=475)** So let's just say that we want our gap hyphen constant to be 0.3%.
>
> **[8:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=483)** So we could do something like that, so now we have a narrower space in between our images.
>
> **[8:09](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=489)** If you don't like that, we could always make it, you know, 0.1% or you could make it larger, half a percent, so whatever you want it to be, you can just change the value of the gap constant there.
>
> **[8:22](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=502)** It'll override what comes earlier in the style sheet where that gap constant was declared at 1%.
>
> **[8:29](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=509)** So essentially, we've written an entire grid layout all in these two declarations, very simply.
>
> **[8:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=517)** We wrote it here with our initial declaration for the parent.
>
> **[8:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=521)** That is display flex, row wrap, space between, and then with this lovely bit of individual variables and the math, we've actually spelled out exactly what the gap should be and how many gaps there should be, and how many boxes we're going to have on each row.
>
> **[8:57](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=537)** We could now change our columns, change our widths, change our gap constant, and apply this formula anywhere else in our document and come up with completely different layouts or even different layouts across media queries without having to write a bazillion styles like we used to do when we wrote things like bootstrap.
>
> **[9:19](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/make-the-layout-formula-even-more-flexible?u=76281980&t=559)** It's very, very exciting to see where this type of layout is going in CSS.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this, (1), this. (1), pass (1), override (1)
> **CLI Commands:** make (8)
> **Env Vars:** html (4), css (2)
> **Versions:** 0.3 (1), 0.1 (1)
> **Cross-References:** later in (1), earlier in (1)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)

#### Challenge: Media query integration
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-media-query-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-media-query-integration?u=76281980&t=0)** - [Instructor] So, time for another challenge, and we're going to continue on with the same challenge that we've been working on over the last few chapters, in terms of writing a type scale, in this particular challenge, scaling that type scale across different devices.
>
> **[0:22](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-media-query-integration?u=76281980&t=22)** So so far you've wrote out some stuff with Calk, we've went back and we added some custom properties, and so now it's time to add some media queries, so down here at the bottom, you'll see that I've added two empty media queries that are just waiting for you to think about how this type scale might change across devices.
>
> **[0:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-media-query-integration?u=76281980&t=41)** So what I'd like for you to do is to think about how you might go about making some changes to the type on these different devices, whatever makes sense to you, whatever you think looks good, and let me remind you that we got this type scale originally from the Type Scale website at [type-scale.com](https://type-scale.com).
>
> **[1:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-media-query-integration?u=76281980&t=63)** You can come here and you can take a look at the different kinds of type scales that we have, you can certainly think about changing something like that, you could think about maybe making a change to the base font size, or some other type of change that you might want to make.
>
> **[1:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/challenge-media-query-integration?u=76281980&t=80)** And in the next video, I'll tell you what my solution is.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1), let (1)
> **CLI Commands:** make (1)
> **URLs:** [type-scale.com](https://type-scale.com) (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Media query integration
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=0)** - [Instructor] So, how'd you do with that challenge?
>
> **[0:09](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=9)** This is my particular solution.
>
> **[0:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=11)** As before, we don't really need to touch the HTML at all, and I actually didn't touch any of the code that we wrote already either.
>
> **[0:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=20)** So what I've done here is simply gone ahead and worked with a different type scale at mobile dimensions.
>
> **[0:27](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=27)** 1.125 is the major second, and if you take a look here, all of that math is all still the same.
>
> **[0:36](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=36)** Then down here in my media queries, all I did was change the factor for my type scale.
>
> **[0:42](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=42)** So if you watch my type over here, you see we start at mobile dimensions with not a lot of difference between those type sizes, and as I hit my various breakpoints, those type sizes will increase.
>
> **[0:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=56)** Now the base is always the same.
>
> **[0:59](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=59)** The base font size was set to be 16 pixels or one m.
>
> **[1:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=64)** And in fact, in the math that we have here, that's just currently set to one m. here, and you could have changed that to a different base size.
>
> **[1:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=75)** For example, you could make it bigger by making it 1.2 m.
>
> **[1:19](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=79)** That would scale everything in your particular layout proportionately.
>
> **[1:23](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=83)** You could have certainly made that smaller.
>
> **[1:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=86)** So if we start with a smaller type size, we obviously as we change our dimensions here, the type is going to change proportionately as well as it changes through the various scaling factors, in addition to changing that base font size.
>
> **[1:43](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=103)** So, those were two things that you could have changed.
>
> **[1:46](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=106)** Chances are, you shouldn't really have changed our math.
>
> **[1:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=109)** It will keep the type scale here in place.
>
> **[1:52](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/solution-media-query-integration?u=76281980&t=112)** So probably one of those two things are what you changed as part of the challenge, and both of those would be absolutely great choices.

> [!info]- Semantic Content
>
> **Versions:** 1.125 (1), 1.2 (1)
> **CLI Commands:** make (1)
> **Env Vars:** html (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. 4. Refactor a Web Page

#### Project: Use calc() and custom properties
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=0)** - [Narrator] In this next project, over this next chapter, we're going to apply these calc and custom property skills we've been developing this whole course long, and we're going to apply this to a webpage that's been laid out using CSS grid.
>
> **[0:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=15)** I am showing you here three screenshots.
>
> **[0:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=18)** These are from your exercise files, so make sure you've downloaded your exercise files.
>
> **[0:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=24)** We take a look in your exercise files folder in the folder numbered zero four dash zero one.
>
> **[0:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=32)** You will find these three screenshots that are called desktop, tablet, and mobile, and just go on ahead and open those up so you can follow along.
>
> **[0:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=41)** So this was the specification given to us by the graphic designer, and as you can see here, all the way over on the far right side, this is mobile.
>
> **[0:50](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=50)** We've got a series of boxes that are stacked on top of each other.
>
> **[0:54](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=54)** So we have this leading, artfully arranged thing on the top with the boxes for the newsletter and the recent blogs, and then some articles under all of that, nice footer.
>
> **[1:06](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=66)** On the tablet display, we're going to make that big, beautiful crocus picture, those are purple crocuses, we're going to make that a little bit bigger.
>
> **[1:14](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=74)** We'll have to put the newsletter and the blogs underneath, and then more articles under that, and then finally on the desktop, we're going to arrange it a little bit differently again.
>
> **[1:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=84)** So that is the pictures that you should have in your head as we're working through this material, and so the other thing to go through at this point in time is just to show you what our starting files look like.
>
> **[1:38](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=98)** So I am going to be working with Visual Studio Code, and if you have not worked with Visual Studio Code before this is just yet another editor that does HTML, CSS, JavaScript, a bunch of stuff, and this is what it would look like if you go and download it and install it, and the way we get this configured to be really, really simple.
>
> **[2:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=122)** I'm just going to grab my exercise files folder and then all I need to do is just drag and drop it here on VS Code and this will give me a list of my files and folders over here on the side.
>
> **[2:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=135)** Then go ahead and close the welcome window and then if I go on ahead and open this up, you'll see that we have the HTML file, that's here, and then I'm going to make a couple of changes to the way this looks.
>
> **[2:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=150)** It's got this little mini map over here in the corner.
>
> **[2:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=152)** I am not a fan of that so I'm going to turn that off under view, show mini map.
>
> **[2:36](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=156)** I'm going to turn that off, and the other thing I'd like to see is my CSS at the same time.
>
> **[2:42](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=162)** So in my CSS folder, if you right click on style and say "open to the side", this will open the HTML and CSS side by side, next to each other, which is really great, and if you want your file structure to go away, just click this top button up here on the top.
>
> **[3:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=180)** That'll give you a little bit more room to work with.
>
> **[3:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=183)** You can select either side of these and go to view, toggle word wrap.
>
> **[3:09](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=189)** That'll wrap your HTML and your CSS, there we go, so that you can see what's going on here, and then the last thing is, one of the things I really loved about Sublime Text was that if I right click somewhere in here, there was an option on this menu to open my webpage in a browser and that's missing here in VS Code, but we can add it.
>
> **[3:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=210)** If you look at this icon down here at the very bottom, this is the extensions, go ahead and click that and then inside of this box if you type in "open in browser", the very first search result here is called open in browser 2.0.0 from TechER.
>
> **[3:50](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=230)** If you just go on ahead and hit the install button, it will go ahead and install this extension for you, and once that is installed, when we go back to our files and go back to our HTML.
>
> **[4:08](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=248)** So if you just right click somewhere over here, a little menu is going to come up, we'll say "open in default browser."
>
> **[4:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=255)** The default browser on this computer is Chrome so it's going to go ahead and open this up in Chrome, and you can take a look at the way this looks now.
>
> **[4:23](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=263)** You see we have a header, we have a nav bar, we have pictures, and so forth.
>
> **[4:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=270)** So a lot of the styling is already done for you, and if you revisit that styling and so forth here in your HTML and your CSS, I would encourage you to take a look at all of that before you move on to the next video, just so you can familiarize yourself with what's going on.
>
> **[4:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=289)** In short, we have a wrapper, we've got headers, we've got nav bars, we've got some content with some asides in it.
>
> **[4:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=296)** Those are the various little lists of blog posts, so the newsletter and so forth, whole bunch of asides.
>
> **[5:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=303)** We have a footer down here on the bottom, and then in our CSS styles, you'll see once again we've got our little preamble here about working in the border box model, and as we scroll down through the page here you'll see we've got various kinds of styling applied here for images, the header, the navigation, and the way that's going to work.
>
> **[5:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=321)** Buttons and the button styling, and so forth.
>
> **[5:25](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=325)** When we get down to layout, it's down here at the bottom, and there's not a whole lot that's here.
>
> **[5:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=330)** We just have a little bit of information about our margins and we have some empty media queries.
>
> **[5:36](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=336)** Obviously this where we're going to be doing all of our work.
>
> **[5:38](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/project-use-calc-and-custom-properties?u=76281980&t=338)** So in the next video, we'll go ahead and get started.

> [!info]- Semantic Content
>
> **Env Vars:** css (8), html (6)
> **UI Navigation:** drag and drop (1), click on (1), open the (1), go to (1), toggle (1)
> **CLI Commands:** make (4), find (1)
> **Cross-References:** go back to (2), next chapter (1), next video (1), in the next (1)
> **Tools:** visual studio (2), vs code (2), sublime (1)
> **Exercise Files:** exercise files (4)
> **Prerequisites:** install (3)
> **Versions:** 2.0.0 (1)

#### Step 1: Apply the grid layout
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=0)** - [Instructor] Let's first, to get started here on this webpage layout, we are going to apply CSS Grid to the page as it is without adding calc or custom properties just yet.
>
> **[0:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=13)** Let's just first get the layout working with CSS Grid.
>
> **[0:17](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=17)** So our first step is to get it working in a mobile layout and fortunately, that's complete.
>
> **[0:22](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=22)** So if you take a look at this, this is the webpage in a mobile layout.
>
> **[0:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=26)** Everything's stacked on top of each other, so we're done with that.
>
> **[0:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=30)** But of course, nothing else is written yet, so as I expand my webpage, it continues to stay in mobile layout and starts to look kind of silly.
>
> **[0:39](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=39)** So it is time to go on ahead and start working on the tablet layout.
>
> **[0:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=45)** Let's go on ahead and think about that.
>
> **[0:48](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=48)** Remember that my tablet displays are going to cascade to the desktop, so let's go on ahead and start with that and if we just take a quick peek again at the tablet display to remind us what this looks like, we're going to have one big box on the top and these two underneath.
>
> **[1:06](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=66)** Remember that eventually, these two are going to stack over here on the side next to the purple flowers and then we've got these other three that are here underneath.
>
> **[1:16](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=76)** So what we're going to think about is a three-column layout.
>
> **[1:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=80)** A three-column layout is going to work great here on the desktop, there's our three columns.
>
> **[1:25](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=85)** Here's a single column.
>
> **[1:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=86)** We have two here for the flowers, and then when we go to our tablet layout, we're going to reduce this two a two-column layout where we have a single cell spanning two columns and then everything else sort of folding in underneath.
>
> **[1:42](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=102)** So that's sort of the strategy of what it is that we're doing here.
>
> **[1:47](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=107)** Let's just go ahead and start by coding this, then, with that in mind and then we'll just want to connect where our code is in our HTML so that we have the right handles in order to write the CSS.
>
> **[2:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=120)** And so if we take a quick peek at our HTML here, scroll on down here line 24, we have this div with a class of content and so content is going to wind up being our grid container.
>
> **[2:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=133)** It's the parent.
>
> **[2:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=135)** And if you take a look at what's inside of that, we simply have all of these, a main, and then all of these asides.
>
> **[2:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=144)** These are the immediate children of that container with the class of content.
>
> **[2:29](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=149)** So the main and the asides would be the grid items and the div of the class of content is going to be the grid container or the parent.
>
> **[2:38](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=158)** So each row is going to be two columns wide except for the very first one, so this layout will wind up being really easy to write.
>
> **[2:46](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=166)** We'll just go on ahead and scroll on down here to our media queries.
>
> **[2:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=169)** We're going to start with our 600 pixel media query and so what we're going to do is the following.
>
> **[2:55](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=175)** We're going to start with our class of content and shockingly, we'll want to display this as grid.
>
> **[3:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=184)** Exactly as you would expect, and then at that point, we can think about how exactly we want to run this layout.
>
> **[3:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=192)** Chances are, it's something like we want to do our grid hyphen template hyphen columns, and in this case, we're going to just say repeat.
>
> **[3:22](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=202)** We want two columns and each will be one fraction large.
>
> **[3:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=206)** Remember that F R syntax is unique to the grid system and it just simply means take the page, in this case, take the page and divide it into two parts.
>
> **[3:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=217)** Each part is one fraction large, so the browser just does that math for you.
>
> **[3:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=221)** It's a beautiful thing.
>
> **[3:43](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=223)** Then I'm going to want some space in between those, so let's put in a grid hyphen gap.
>
> **[3:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=229)** And I'm going to make that three rem because I want it kind of a sizable gap in between those.
>
> **[3:55](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=235)** We might also think about a max width.
>
> **[3:57](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=237)** One of the things that I have going on here, if you take a look at my code very carefully and those designs, my header and my nav bar go the full width of the browser window, but my content is restricted in its width and that's by design.
>
> **[4:14](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=254)** You don't want your content stretching all the way across the page.
>
> **[4:16](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=256)** The lines get so long, it's difficult to read, but by using this technique with a maximum width here, of let's say, 550 pixels, what'll happen is that this content will stay nice and narrow, easy to read, and then the header and the nav bar and the footer will stretch the full width of the browser window, whatever it happens to be, and make the design sort of feel like it's a little bit more full.
>
> **[4:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=281)** Okay, once that's in place, then we can go ahead and add a margin of three rem and auto and that'll give us, again, some space at the end of our content before our headers, the navigation, and the footer, so that's really great.
>
> **[4:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=296)** And then the other thing that we'll need to add here then is for main, we're going to have to spell out how wide is this particular layout?
>
> **[5:06](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=306)** So main, remember, is going to be those purple flowers and it's going to be two columns wide.
>
> **[5:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=312)** So if I use my grid hyphen column syntax, I can just simply count the number.
>
> **[5:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=320)** So if we start with over here, if we think about it this way, over here to the left of all these boxes, this is number one.
>
> **[5:29](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=329)** The middle line here is number two, and the end line over here is number three, so with this syntax, what we have to say here with grid column is simply say one slash three, so we're telling it to span across everything that is there.
>
> **[5:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=345)** Because of our grid template columns of two comma one fraction, what'll happen with all of the other children of the div with the class of content, they'll just fill in one box, one after the other all the way down the list.
>
> **[6:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=360)** There's actually no additional code we need to write to lay that page out.
>
> **[6:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=364)** And then finally, for my aside, I'm going to override some styling that happened earlier.
>
> **[6:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=371)** We'll say that margin on the bottom is zero.
>
> **[6:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=375)** Otherwise, it's going to get a little bit big and a little bit horsey looking.
>
> **[6:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=380)** So let's go on ahead and refresh our page.
>
> **[6:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=386)** And of course, we don't have any desktop styles in yet, so it does show up here at this very large dimension.
>
> **[6:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=392)** There's our header and our nav bar stretching all the way across the dimension.
>
> **[6:36](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=396)** Our footer goes all the way across on the bottom, but here in the middle, there's main stretching across the full two columns and then here's all of the other pieces that are going to wrap in here underneath, and each one of those children, each one of those grid items takes up exactly one column all the way through.
>
> **[6:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=416)** Now we can go ahead and write the styles here for our desktop display.
>
> **[7:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=420)** So here in this media query with the minimum width of 1000 pixels, once again, we're going to start with content.
>
> **[7:08](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=428)** Same idea, again, although we're going to change how many columns we have, so here, our grid hyphen template hyphen columns is going to be repeat three comma one fraction.
>
> **[7:22](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=442)** So now, we're up to a three-column layout instead and once again, we may want a max width.
>
> **[7:28](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=448)** Let's say 1000 pixels, and again, that's really just art direction.
>
> **[7:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=452)** You can decide what you want to do.
>
> **[7:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=455)** Now in terms of our numbers and in terms of our layout, let's go on ahead and look at that again.
>
> **[7:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=461)** If we look at our desktop dimension here, now we have our lines at one over here to the left of corporate functions.
>
> **[7:48](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=468)** One, two, three, and four.
>
> **[7:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=473)** So let's figure out what we've got going on here.
>
> **[7:55](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=475)** For main, then, we are starting at the column numbers.
>
> **[8:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=480)** We're starting at column number two and we're going over three to number four, but we're also spanning some rows, so we're also going to use the grid row property.
>
> **[8:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=490)** What rows are we spanning over?
>
> **[8:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=492)** Well, those start up here on the top with number one, number two, and number three.
>
> **[8:17](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=497)** So that should give us exactly what we need to put in here for main.
>
> **[8:23](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=503)** So our grid hyphen column will wind up being two slash four and our grid hyphen row will wind up being one slash three, and that's where those numbers came from.
>
> **[8:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=517)** Now for the news and the blogs, those are the other things we need to think about.
>
> **[8:43](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=523)** These two asides here because their layout is a little bit different also.
>
> **[8:47](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=527)** If we look again at that desktop dimension, they're over here, which is a little bit unusual because of course, in our source code, main comes first so we need to specify where the newsletter and the recent blogs boxes are, as well.
>
> **[9:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=543)** So we can go ahead and do that.
>
> **[9:06](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=546)** So for news, we'll have a grid hyphen column of one slash two, and then for blogs, we'll have a grid hyphen column of one slash two, as well.
>
> **[9:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=564)** And what will happen is that again, grid is going to assume that you want news before blogs because that's the order of the source order, so we don't need to spell out the grid row for that particular situation.
>
> **[9:38](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=578)** Go ahead and save your CSS.
>
> **[9:40](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=580)** Let's take a quick peek at the way the website is looking.
>
> **[9:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=585)** And so now, you should see newsletter and recent blogs here to the left of the big main area.
>
> **[9:52](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=592)** Your three boxes down here on the bottom.
>
> **[9:55](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=595)** As we start to narrow up our screen, everything should stack in this lovely manner, exactly as our screenshot showed, and then if we scrunch it down one more time, we'll go to our mobile version and everything stacks on top of each other.
>
> **[10:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-1-apply-the-grid-layout?u=76281980&t=611)** So this is looking absolutely fabulous, and we're pretty much done with how the webpage looks because this is exactly the way we wanted it to look, but now we're going to recode it to take advantage of calc and custom properties.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), this, (2), case, (2), finally, (1), override (1)
> **Env Vars:** css (4), html (2)
> **Exercise Files:** template (3), source code (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)

#### Step 2: Add custom properties to grid layout
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=0)** - [Instructor] With our grid layout in place and understood let's rework what we have here with custom properties.
>
> **[0:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=7)** Remember the goal is to put all of the logic and all of the declarations in one place, which is outside the media queries in our mobile layout and then anything that's going to change from the mobile layout into our media queries that will become something with a custom property.
>
> **[0:27](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=27)** So let's just take a look at our layout here to start with.
>
> **[0:31](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=31)** I have a little comment up here on the top.
>
> **[0:33](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=33)** As part of our layout, we had some margins in place that worked really well for mobile dimensions.
>
> **[0:40](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=40)** And if you notice, I changed some of those values here inside the media query.
>
> **[0:45](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=45)** So for example, we can start with the content.
>
> **[0:48](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=48)** Here, I have a margin of two rem, one rem here outside of the media queries.
>
> **[0:54](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=54)** When we go into the media queries, I change that margin to three rem auto.
>
> **[0:59](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=59)** And that's pretty much where it stays.
>
> **[1:01](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=61)** We don't really change anything again down here at desktop.
>
> **[1:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=64)** Pretty much those margin changes are just happening between mobile and tablet.
>
> **[1:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=70)** And then of course, they'll carry into the desktop layout.
>
> **[1:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=73)** So we've got that one there.
>
> **[1:15](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=75)** That's one change that's happening.
>
> **[1:17](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=77)** And another change that's happening is here where we go from a margin bottom of three rem here on the Aside and Main to at least on the Aside, we have a margin bottom of zero.
>
> **[1:29](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=89)** And so that is something else that we want to reflect as we go forward.
>
> **[1:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=95)** So a way that we could go about writing this would be as follows.
>
> **[1:39](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=99)** Let's go ahead and start here on layout.
>
> **[1:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=101)** We can just go on ahead and declare this with root.
>
> **[1:46](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=106)** And if you want to scope it by putting it on some other portion of the document tree and declare your values there that will work also, so we'll go ahead and let's call it content-margin because that's what it is and we'll give it a value of two rem, one rem because that's what it is to get us started.
>
> **[2:09](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=129)** And then here in content instead of saying margin two, one rem, we'll just say var content-margin.
>
> **[2:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=141)** Okay, so that's how we get that started.
>
> **[2:25](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=145)** And then when we go to our media query, what we're going to do here is we're going to read a clear root again and with root, then all we have to do is declare our content-margin to now have a new value and that new value is going to be three rem auto.
>
> **[2:47](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=167)** So in other words, we no longer hear with our content.
>
> **[2:50](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=170)** We no longer need to make this declaration here for margins.
>
> **[2:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=173)** So with that we'll just go away.
>
> **[2:57](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=177)** Let's go through another example of this so here for a sided main, we have a bottom margin of three rem down here on the aside.
>
> **[3:05](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=185)** We have a margin bottom of zero.
>
> **[3:07](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=187)** So once again, we could go ahead and set up our variable here of bottom-margin of three rem, and then here instead of just saying it is three rem, we'll go ahead and declare it with a variable.
>
> **[3:31](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=211)** Just like that.
>
> **[3:33](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=213)** And then here on the aside, we're going to change the value here of bottom-margin.
>
> **[3:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=221)** So remember this is just on the aside.
>
> **[3:44](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=224)** It's not on aside and Main so while I could just simply redefine my variable value here in root, that would then apply to both aside and Main.
>
> **[3:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=236)** What if I want it to just apply to aside?
>
> **[3:58](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=238)** Well, there's nothing that says I have to put it here in root.
>
> **[4:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=242)** I could choose just to redefine that value right here on the aside so I could just say instead bottom-margin is going to be zero here.
>
> **[4:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=252)** So we just redefined that value here for the purpose of aside, not for main and we still get the benefit of just redefining these values.
>
> **[4:23](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=263)** So that's pretty much the big changes that we're making between the mobile layout and our tablet layout believe it or not.
>
> **[4:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=272)** If you go through all of the code that's up here on the top all of this margin and background color and border and all the rest of it, there's definitely stuff that repeats itself in here and you should take a look at this and think about how you could leverage something like SaaS to prevent so much repetition in the code here that makes absolute sense.
>
> **[4:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=293)** You can think about all of the SaaS structures applied to that code in order to make it dryer.
>
> **[5:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=300)** So you could look at variables.
>
> **[5:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=302)** You could look at mix-ins you could look at it extends and that would clean up this code here but you don't necessarily need to spend time working on custom properties because we're not changing any of this layout look here into the media queries.
>
> **[5:19](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=319)** So we're just focusing on that for these custom properties.
>
> **[5:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=324)** All right, so then the next thing we want to look at is what changes as we go from tablet in the desktop now that we have our mobile stuff that's redefined here.
>
> **[5:34](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=334)** Let's go ahead and take a look at what's going on for the tablet into our desktop.
>
> **[5:41](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=341)** So one of the things that changes here is that the display grid happens and we're going to change our number of grid template columns, see how that changes.
>
> **[5:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=351)** We're going to change our max-width.
>
> **[5:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=353)** That's also going to change.
>
> **[5:55](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=355)** So let's go ahead and set that up.
>
> **[5:58](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=358)** So here in root again, we'll just continue to add onto this.
>
> **[6:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=362)** We'll have calls.
>
> **[6:05](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=365)** And that would be repeat two comma one fr.
>
> **[6:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=371)** So now I could just make that change here var.
>
> **[6:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=380)** Calls, here we go and then we also have a max as a maximum width value.
>
> **[6:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=390)** 550 pixels and then here for max-width, we'll go ahead and call that.
>
> **[6:44](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=404)** So if we look at this content display here then, we have a I'm just going to put in a comment so you can understand what's going on.
>
> **[6:52](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=412)** This will carry into desktop.
>
> **[6:57](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=417)** So here for carry into desktop our grid and our grid-gap are both going to carry into the desktop display.
>
> **[7:05](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=425)** And then these two values here, they are a little bit different.
>
> **[7:08](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=428)** These values change on desktop.
>
> **[7:16](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=436)** So these will be a little bit different.
>
> **[7:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=441)** What else is changing as we go from our tablet into our desktop, our value of grid-column is changing.
>
> **[7:28](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=448)** So we've got we're going from one, three to two four.
>
> **[7:33](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=453)** So that's something that we can put up here as a custom property.
>
> **[7:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=457)** So I'm going to call that main-call and the initial value will be one three.
>
> **[7:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=471)** And then down here again for main we can get rid of that declaration all together.
>
> **[7:58](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=478)** We can get rid of this declaration all together.
>
> **[8:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=482)** We can get rid of this declaration all together.
>
> **[8:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=484)** Right, all these things have been defined for us already in the tablet.
>
> **[8:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=490)** So now all we have to do is come up with our desktop values and so here, we'll go ahead and put those in.
>
> **[8:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=500)** Here the calls will be repeat.
>
> **[8:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=504)** Three comma one fr and our max here will be 1,000 pixels.
>
> **[8:38](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=518)** And our main columns will be 2/4.
>
> **[8:44](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=524)** All right, so sweet, we've really refactored this layout very, very nicely so we don't have to repeat ourselves over and over again in those media queries.
>
> **[8:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=533)** The media queries are now displaying their logic at least just one time.
>
> **[8:59](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=539)** So even though we're not really using any grid layout here outside the media query, we're just assuming that the default of display block is going to happen.
>
> **[9:08](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=548)** These boxes will display on top of each other.
>
> **[9:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=551)** You could if you wanted to display grid outside the media query, you could set all of that up if you wanted.
>
> **[9:17](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=557)** I didn't do it that way.
>
> **[9:18](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=558)** I declared the grid inside the media query here.
>
> **[9:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=561)** So once again, we've declared our logic one time and then we're changing values of our variables every time after that.
>
> **[9:31](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=571)** So by the time you get down here to our desktop, things are very different.
>
> **[9:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-2-add-custom-properties-to-grid-layout?u=76281980&t=577)** So the only things that are added here so like news blogs and this grid row under main, this is logic that didn't exist anywhere else in previous media queries or in the mobile layout which is why they're declared here, but everything that had been declared before, we've now refactored in some way to include a custom property.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), var (2), extends (1), continue (1), this. (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (1), just like (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Definitions:** in other words (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Step 3: Apply a type scale and custom properties
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=0)** - [Instructor] Our website is looking absolutely fabulous!
>
> **[0:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=3)** But at this point, if ya take a look at the style sheet in detail, one of the things you'll notice that I did not address at all are font sizes.
>
> **[0:12](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=12)** And that was actually by design.
>
> **[0:14](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=14)** I haven't addressed font size anywhere in this document.
>
> **[0:17](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=17)** Basically so far we're working with browser default font sizes for our headings and our paragraphs and so forth.
>
> **[0:25](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=25)** But we've written this great code over the course of several challenges.
>
> **[0:29](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=29)** And this is using custom properties to change the size of our type, as we are going through various media queries and so forth.
>
> **[0:40](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=40)** What I'd like to do is, I'd like to grab that old code and integrate it into the page that we're working on.
>
> **[0:47](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=47)** We can tweak it a little bit.
>
> **[0:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=49)** And make it look great for this particular web design.
>
> **[0:53](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=53)** What I'd like for you to do, is look in your Exercise Files folder.
>
> **[0:57](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=57)** This is 04_04 in the Begin folder.
>
> **[1:01](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=61)** You'll find a file called starting css.txt.
>
> **[1:05](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=65)** And if you just go on ahead and just copy all of that code that's there.
>
> **[1:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=70)** I'll just go on ahead and copy it.
>
> **[1:13](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=73)** And then over in our CSS, we can just go on ahead and add that.
>
> **[1:19](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=79)** And the place I'm going to add this, is actually outside of all of our media queries.
>
> **[1:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=86)** And I'm just gon' stick it here before layout, that's not really important where it exactly it goes.
>
> **[1:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=92)** Let's just drop it here.
>
> **[1:36](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=96)** I'm puttin' in a comment that this is font sizes.
>
> **[1:38](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=98)** And then go on ahead and paste it in what I have from here before.
>
> **[1:43](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=103)** You can certainly make some modifications of this at this point because for example, my design doesn't incorporate h4 and h5.
>
> **[1:52](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=112)** And yeah it's possible that I will never use h4 and h5.
>
> **[1:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=116)** Just to sort of demonstrate that we can take things out of this.
>
> **[2:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=120)** Absolutely we can make modifications here.
>
> **[2:04](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=124)** Let's just say we don't have h4 and h5.
>
> **[2:08](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=128)** We'll get rid of those.
>
> **[2:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=130)** And then we're going to have to somehow modify our h4 and our h5 here.
>
> **[2:16](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=136)** Our h3 now is going to become our base-size times our type-scale.
>
> **[2:25](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=145)** That's what our h3 will be doing.
>
> **[2:27](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=147)** We'll leave on our h2 and our h1.
>
> **[2:30](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=150)** Notice that I've just knocked down the size of my h1 and h2 a little bit here, by just making that simple change here to this particular code.
>
> **[2:39](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=159)** The other thing I'm going to do is, I'm going to change my type-scale from 1.125 to a 1.2.
>
> **[2:47](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=167)** I just thought that that looked better for this particular design.
>
> **[2:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=171)** And then down here of course, we want to get rid of the h4 and h5 declarations.
>
> **[2:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=176)** Those no longer have variables that go with them.
>
> **[2:58](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=178)** There's our h1, h2 and h3, and our paragraph.
>
> **[3:03](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=183)** And then as I get to my larger sizes here in my media queries, for larger screens, I'm actually going to bump up my font size a little bit.
>
> **[3:14](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=194)** Here inside of my root query, I'll go ahead and add a type-scale of 1.33.
>
> **[3:25](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=205)** There we go.
>
> **[3:26](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=206)** Now this will have larger text when I go to larger screen sizes.
>
> **[3:31](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=211)** I thought this worked just fine just for the tablet.
>
> **[3:33](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=213)** And the desktop, you could do a different one for desktop if you wanted to go through that.
>
> **[3:37](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=217)** The other question that some of you might have is, I have a root declaration here around line 110 and I have a root declaration down here around line 130.
>
> **[3:48](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=228)** And I have one part that's here for font sizes, one part that's here for layout.
>
> **[3:52](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=232)** Should you combine those?
>
> **[3:54](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=234)** Or can you combine those?
>
> **[3:56](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=236)** Absolutely you can go ahead and have a single root declaration.
>
> **[3:59](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=239)** You can put all your variables inside of it.
>
> **[4:01](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=241)** I would recommend if you go that route that you definitely comment, so you know what's font sizes, what's layout, what's various other things you might be changing along the way.
>
> **[4:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=251)** Just so you can find things easily.
>
> **[4:14](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=254)** It's totally legal to leave these separate also.
>
> **[4:17](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=257)** The way I have it here, CSS doesn't particularly care.
>
> **[4:21](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=261)** It'll just go, "Oh more root."
>
> **[4:22](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=262)** And it'll just continue to add things on just as it would with any other kind of CSS.
>
> **[4:27](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=267)** Let's go ahead and save that.
>
> **[4:29](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=269)** We'll go ahead and take a look at the result here in our browser.
>
> **[4:32](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=272)** And here in the browser, you'll see we have some lovely fonts here at desktop dimensions.
>
> **[4:40](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=280)** And because I've marked this up using just plain ole headings, all those plain ole headings just immediately take effect here, with the styling that I've added.
>
> **[4:49](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=289)** If for some reason, you happen to use classes on your headings or whatever, you can certainly modify the code that we copied in, to leverage those classes instead of leveraging HTML elements.
>
> **[5:01](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=301)** And as we narrow down this page here, you'll see our font size stayed the same between our desktop and our tablet.
>
> **[5:09](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=309)** That was exactly what we coded.
>
> **[5:11](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=311)** And then when we get down to mobile dimensions, we are definitely going to a smaller sized font there.
>
> **[5:19](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=319)** So there we go!
>
> **[5:20](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=320)** That was just so easy to go ahead and add a type-scale to our design.
>
> **[5:24](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/step-3-apply-a-type-scale-and-custom-properties?u=76281980&t=324)** It'll be great to manage and easy to make changes as people decide they want to tweak the typography.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type, (1), this, (1), this. (1), continue (1)
> **CLI Commands:** make (4), find (2)
> **Env Vars:** css (3), html (1)
> **Versions:** 1.125 (1), 1.2 (1), 1.33 (1)
> **File Paths:** css.txt (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)


### 6. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/next-steps-25743925?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/next-steps-25743925?u=76281980&t=0)** - Hey, everybody, it's Jen Kramer.
>
> **[0:02](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/next-steps-25743925?u=76281980&t=2)** Thanks so much for watching CSS: Variables and Fluid Layouts.
>
> **[0:06](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/next-steps-25743925?u=76281980&t=6)** I hope you learn some new techniques that you'll use in your next project.
>
> **[0:10](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/next-steps-25743925?u=76281980&t=10)** If you like me here, you'll like me in some of my other courses as well.
>
> **[0:14](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/next-steps-25743925?u=76281980&t=14)** How much do you know about inheritance in CSS?
>
> **[0:17](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/next-steps-25743925?u=76281980&t=17)** How do you calculate specificity, and how does the cascade really work?
>
> **[0:22](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/next-steps-25743925?u=76281980&t=22)** Find out more in my course [[CSS- Inheritance, Specificity, and the Cascade]].
>
> **[0:27](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/next-steps-25743925?u=76281980&t=27)** Left, right, top, and bottom make sense in a left-to-right world, but what about in a right-to-left world, or in a vertical world?
>
> **[0:35](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/next-steps-25743925?u=76281980&t=35)** Logical properties allow designers to work with text regardless of its writing mode.
>
> **[0:40](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/next-steps-25743925?u=76281980&t=40)** Learn how to incorporate these properties into your projects through a series of 12 hands-on exercises in my course, Coding Exercises: CSS Logical Properties.
>
> **[0:51](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/next-steps-25743925?u=76281980&t=51)** Finally, how well do you know all of the wonderful kinds of CSS selectors available?
>
> **[0:57](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/next-steps-25743925?u=76281980&t=57)** From your basic element or descendant selector to the newest pseudo-classes like :has, :where, and :is, I've got you covered in CSS: Selectors.
>
> **[1:08](https://www.linkedin.com/learning/css-variables-and-fluid-layouts/next-steps-25743925?u=76281980&t=68)** Thanks again for watching, and I'll see you in another course soon.

> [!info]- Semantic Content
>
> **Env Vars:** css (6)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - hey (1)


## Instructor

- [[Jen Kramer]]

## Resources

- Exercise files available

## Skills Covered

- Cascading Style Sheets (CSS)

## Path Context

### In [[Learn CSS]]
← [[CSS- Advanced Layouts with Grid]] | **10 of 12** | [[CSS Layouts- From Float to Flexbox and Grid]] →

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