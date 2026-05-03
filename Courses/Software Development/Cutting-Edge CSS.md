---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: cutting-edge-css
url: "https://www.linkedin.com/learning/cutting-edge-css"
duration_minutes: 24
duration: 24m
level: Intermediate
updated: 12/15/2021
learners: 8181
skills:
  - Responsive Web Design
  - Cascading Style Sheets (CSS)
exercise_files: true
github: "https://github.com/LinkedInLearning/cutting-edge-css-2894333"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFYWtT8RGNRSA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1639417840343?e=2147483647&amp;v=beta&amp;t=Y-op1Zcu2Pu-xY3WKsdipwiBGQLFRMEdQzlgQZzC87I"
linkedin_topic: Software Development
learning_paths:
  - '[[The Top Skills Engineering Professionals Have Right Now]]'
prev_courses:
  - '[[Git from Scratch]]'
next_courses:
  - '[[SOLIDWORKS 2024 Essential Training]]'
path_nav: '[{"path":"The Top Skills Engineering Professionals Have Right Now","position":6,"total":9,"prev":"Git from Scratch","next":"SOLIDWORKS 2024 Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/responsive-web-design
  - skill/cascading-style-sheets-css
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Cutting-Edge%20CSS.md)

![Cutting-Edge CSS](https://media.licdn.com/dms/image/v2/C4E0DAQFYWtT8RGNRSA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1639417840343?e=2147483647&amp;v=beta&amp;t=Y-op1Zcu2Pu-xY3WKsdipwiBGQLFRMEdQzlgQZzC87I)

# Cutting-Edge CSS

> CSS evolves rapidly, and it can be difficult to stay on top of the most recent modules, features, and best practices. In this course, Morten Rand-Hendriksen aims to fill this gap by riding the bleeding edge of CSS to showcase what’s new, what’s possible, and how to use cutting edge CSS in a safe way in production. To do this, Morten uses one of the least-cutting edge methods possible, paper. But b

> [LinkedIn Learning](https://www.linkedin.com/learning/cutting-edge-css) | 24m | Intermediate | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Cutting-edge CSS](#cutting-edge-css)
  - [Exercise files](#exercise-files)
- [**1. Core Principles**](#1-core-principles) (3 videos)
  - [What are logical properties?](#what-are-logical-properties)
  - [Position explained](#position-explained)
  - [Why margins collapse](#why-margins-collapse)
- [**2. Selectors**](#2-selectors) (3 videos)
  - [Counting with CSS](#counting-with-css)
  - [Container queries](#container-queries)
  - [The difference between :is and :where](#the-difference-between-is-and-where)
- [**3. Layout**](#3-layout) (4 videos)
  - [How the clamp() function works](#how-the-clamp-function-works)
  - [Beyond viewport width](#beyond-viewport-width)
  - [Flex vs. grid: Content out or layout in?](#flex-vs-grid-content-out-or-layout-in)
  - [Making sense of grid-auto-flow](#making-sense-of-grid-auto-flow)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Cutting-edge CSS](https://www.linkedin.com/learning/cutting-edge-css/cutting-edge-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cutting-edge-css/cutting-edge-css?u=76281980&t=0)** (energetic music) - When I write CSS, I visualize what the code is doing in my head to turn abstract code into meaningful layout and design. I think one of the reasons CSS can sometimes be challenging or confusing or even mysterious is that CSS is a declarative programming language providing instructions to the browser about how to apply style to content. There's such a big distance between the code we write and the results the browser produces that it's often difficult to make complete sense of what is going on. So in this course, I'm inviting you into my brain, or rather, in this course, I'll try my best to visualize in video how I visualize CSS in my brain when I build websites. And to clear away as much distraction as possible, I'm using my favorite low-fi medium, paper, to do so. CSS is an amazingly broad, deep, and powerful programming language that can create within code pretty much any layout and any design you can imagine. Being able to visualize how CSS code relates to the browser output is key to mastering CSS, and I'm here to help you build a mental picture for yourself. Let's get cracking.

> [!info]- Semantic Content
>
> **Env Vars:** css (7)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** imagine (1), picture (1)
> **CLI Commands:** make (1)
> **Non-Speech:** (energetic music) (1)

#### [Exercise files](https://www.linkedin.com/learning/cutting-edge-css/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cutting-edge-css/exercise-files?u=76281980&t=0)** (energetic music)
>
> **[0:05](https://www.linkedin.com/learning/cutting-edge-css/exercise-files?u=76281980&t=5)** - [Instructor] Since the focus of this course is understanding the principles behind CSS properties and techniques, there are no exercise files with code examples. Instead I've created a list of relevant links, documenting all the features, properties, and techniques covered in each of the movies so you can dig deeper into each subject. The list of links is available at the [[GitHub]] repository for this course, and I've split it into chapters to make it easy to navigate. As you watch the course, be sure to have this list of links handy so you can click on the documentation links and learn more about what is covered.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** css (1)
> **Documentation:** the documentation (1)
> **Tools:** github (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 1. Core Principles

[↑ Back to Table of Contents](#table-of-contents)

#### [What are logical properties?](https://www.linkedin.com/learning/cutting-edge-css/what-are-logical-properties-14445691?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cutting-edge-css/what-are-logical-properties-14445691?u=76281980&t=0)** (energetic music)
>
> **[0:05](https://www.linkedin.com/learning/cutting-edge-css/what-are-logical-properties-14445691?u=76281980&t=5)** - [Instructor] In the traditional box model, we think of the CSS box as a physical box. It has a width, a height, and sides, top, right, bottom, and left. When we define the size of a box, we set the width and height properties. And when we define the padding or border or margin of a box, we set padding or border or margin top, right, bottom, left. Now, this box model is built on an assumption that text is always displayed on horizontal lines flowing left to right. That's not always the case, though. Some languages display text horizontally from right to left, and some display text vertically. And when the text direction changes, the traditional box model and its properties become illogical. With vertical text, this whole width and height and top, right, bottom, left way of thinking about the box gets confusing because the end of the line is now at the bottom, not the right, and the right side of the box is to the right of the first line of text, which is not the way we normally think about things. Here's the thing. Working with text, we don't set the width of a text. We define the length of the line. And we don't set the height of the text box. We set the length of the axis perpendicular to the line direction. This is why we now have logical properties. With logical properties, we control the layout of the box based on the logical flow of its contents rather than their physical direction. So instead of thinking about the width and height of a box, we think about the inline and block size of the box, inline being the inline dimension
>
> **[1:39](https://www.linkedin.com/learning/cutting-edge-css/what-are-logical-properties-14445691?u=76281980&t=99)** or axis the text flows along, and block being the dimension or axis perpendicular to inline. With logical properties, we set the inline size, the length along the inline axis, with the flow of the text, and the block size, the length perpendicular to that inline axis, so effectively the number of lines allowed in the box. And for the sides, the padding and border and margin, the logical properties become inline-start and inline-end, block-start and block-end. That way, when the text direction changes or writing mode changes from left to right to right to left or from horizontal to vertical, the logical properties follow suit, and the box size, padding, border, and margin all behave, well, logically.

> [!info]- Semantic Content
>
> **Env Vars:** css (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (energetic music) (1)

#### [Position explained](https://www.linkedin.com/learning/cutting-edge-css/position-explained-14448738?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cutting-edge-css/position-explained-14448738?u=76281980&t=0)** - [Narrator] By default, all elements have their position properties set to static. This means the element is positioned according to the normal flow of the document. If we change the position property to relative, the element is still positioned according to the normal flow of the document. But, if we then add top, right, bottom, left, or the logical equivalence, the element is shifted relative to its original position, without effecting the surrounding elements. So, block start minus one m and inline start minus one m, places the element one m up and one m to the left of its original position. All the other elements stay the same. Change to position property, to sticky and the element acts like it's relatively positioned until the containing block, usually the immediate parent element, hits a specified threshold, typically the top of the viewport, when this happens, the elements sticks to its current position in the viewport until it meets the opposite end of the containing block, at this point, it's unstuck and keep scrolling. As with position relative, use top, right, bottom, left or the logical properties to specify the location of the sticky element in relation to that viewport. So, static, relative and sticky all leave the surrounding content unchanged. Absolute positioning is a whole other story, set an element to position absolute, and it is taken out of the normal document flow and whatever space it took up, is filled with the other elements in the document. The element is now positioned
>
> **[1:33](https://www.linkedin.com/learning/cutting-edge-css/position-explained-14448738?u=76281980&t=93)** in the inline start block start corner of the closest positioned ancestor, meaning an element that is either relatively or sticky position, or if there is no position ancestor, the initial containing block, meaning the top level [[HTML]] element. Once placed, the absolutely position elements stays in place relative to the other content in the document. So, if the other content scrolls, so does the absolute positioned element. If you want the element of stay fixed relative to the viewport, set it to position fixed and it is pulled out of the document float just like with position absolute and fixed to a position where it stays even when you scroll the page. Now, for both absolute and fixed positioning, use top, right, bottom, left or logical properties to specify the location of the element in relation to the viewport. And one final note, when using position absolute and position fixed, keep in mind that the elements will cover other elements. So, that has to be accounted for in the design, otherwise we'll end up covering things on the page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** html (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Why margins collapse](https://www.linkedin.com/learning/cutting-edge-css/why-margins-collapse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cutting-edge-css/why-margins-collapse?u=76281980&t=0)** - Work with CSS for a few hours, and you'll invariably stumble into one of the most misunderstood features of CSS, collapsing margins. Here's an example. You have two containers, one after the other. You set margin block end on the first container to something like two REM, and then you think, Hmm, I need a bit more space between these two. So I'll set margin blocks, start on the second one to one REM and nothing happens. The space between the two items is still two REM. Even though you technically have three REMS of margin. To increase the space between the two items, you have to increase either margin block end of the first item or margin block start on the second item to more than two REM, otherwise one cancels out the other and the space remains two REM. This is collapsing margins. And even though it may look like a bug in CSS, it actually makes sense. The key is to think about the origin purpose of CSS, styling text in documents. Let's expand our example. We have a heading, two paragraphs and an image. We want consistent rhythm between these elements. And we don't know how many paragraphs or headings we will have in the document. Now, the heading and paragraphs have default block start and block end margins. The image has no margins. Now watch what happens when we put them together. If margins did not collapse, here's what we get. As you can see, there is inconsistency in the spacing between the items in particular between the paragraphs and the image. That's because the paragraph margins are set up
>
> **[1:36](https://www.linkedin.com/learning/cutting-edge-css/why-margins-collapse?u=76281980&t=96)** so the paragraph has enough block level white space above and below, regardless of what the next or previous element is. And when margins don't collapse, that space is doubled up between each paragraph. By collapsing the margins, meaning the browser picks whichever margin is greatest and overlaps it on top of the other one, we get consistent spacing between all elements. That way, if we have a layout like this, the rhythm of the spacing matches. And if we move the image up between the paragraphs, the rhythm remains because now the previously collapsed margins in the paragraphs un-collapse and work as actual margins. In short, margins collapse to make elements more reusable. Otherwise we'd have to specify rules, like "add a one REM margin only to the block start of the first paragraph, except when the previous element doesn't have a block in the margin, in which case add a one REM margin." Which would be really convoluted and error prone.

> [!info]- Semantic Content
>
> **Env Vars:** rem (7), css (4), rems (1)
> **CLI Commands:** make (1)
> **Best Practices:** the key is (1)
> **Prerequisites:** set up (1)
> **Speakers:** - work (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Selectors

[↑ Back to Table of Contents](#table-of-contents)

#### [Counting with CSS](https://www.linkedin.com/learning/cutting-edge-css/counting-with-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cutting-edge-css/counting-with-css?u=76281980&t=0)** (dramatic music)
>
> **[0:05](https://www.linkedin.com/learning/cutting-edge-css/counting-with-css?u=76281980&t=5)** - [Narrator] So you have a list store of the grouping of items, and you want to target a specific one, or a group of them based on counting. Could be give me the first item, or the last item, or the fifth item, or something more advanced like every second item, or every sixth item. How do you do this using CSS? Well, if you're looking for a single item, we have a bunch of custom pseudo-classes, which are pretty much self-explanatory. First-child, last-child, only-child. First-of-type, last-of-type, and only-of-type. But what about the other scenarios? For those we have nth-type pseudo-classes. Nth-child, nth-last-child, nth-of-type, and nth-last-of-type. Which begs the question, what on earth is an nth-of-something? This nth, refers to a counting mechanism, allowing us to set up a formula for what items we want. Here's how it works. If we wanted a third item from a list, we'd say nth-of-type and then three. For the fifth item would say, nth-of-type five. I think you see the pattern here. There are also two keyword values we can use here, odd an even. So if you want every odd item, you call nth-of-type odd, and for every even item you call nth-of-type even. So far, so good. Now comes the cool part. All of these ntf-type pseudo-classes receive functional notation in the form of An plus B. What does that mean?
>
> **[1:38](https://www.linkedin.com/learning/cutting-edge-css/counting-with-css?u=76281980&t=98)** It means we can do some fairly advanced math here. Say you want every third item. For that you need the A, which represents an integer step size and the n, representing all non-negative integers. Meaning it's a counter starting at zero and then moving up. So to get every third item, we say nth-of-type three-n. Now the browser goes, three times zero equals zero. Three times one equals three. Three times two equals six. Three times three equals nine, and so on, and so on, and so on. And we get every third item. The end here counts up from zero, and multiplies with the A value. All right, so what's the B then? Well, that's for when we need to offset the count somehow. Let's say you want every third item, starting from item number two. In that case, we call nth-of-type three-n for the third item. And then we add on two. This says start counting from number two. And the math becomes three times zero plus two equals two. Three times one plus two equals five. Three times two plus two equals eight, et cetera. Using these nth-type pseudo-classes. You can now count your way to pretty much any custom selection of items. (dramatic music)

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), refers to (1)
> **Non-Speech:** (dramatic music) (2)
> **Env Vars:** css (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [Container queries](https://www.linkedin.com/learning/cutting-edge-css/container-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cutting-edge-css/container-queries?u=76281980&t=0)** (energetic music)
>
> **[0:05](https://www.linkedin.com/learning/cutting-edge-css/container-queries?u=76281980&t=5)** - [Instructor] Media queries are a mainstay of modern [[Web Development]], but for all their amazingness, they have some severe limitations. Consider this example. We have a component containing two elements, an image and some text. When there is limited horizontal space, the image is displayed at the top of the component and the text below. When there is sufficient horizontal space, the image appears to the left and the text to the right. With old-school media queries, we can create a media query to trigger the layout change of this component at a specific viewport width. In other words, the layout of this component is controlled by the width of the overall viewport, which makes sense if we only ever used a component in one specific location and can design around it. But that's not how components are used. One of the major benefits of a component is it's supposed to be more or less standalone so we can place it anywhere in a layout, and it just works. For this to happen, the component must be able to control its own layout. Say we want to use this component twice in one layout. In the first location, there's limited horizontal space for the component. In a second location, there is ample horizontal space. In this scenario, a media query won't work because the viewport doesn't control the available space. The layout does. This is why container queries were created. With a container query, we can create style rules that respond to the size of a container. Here's how that works. First, we set the container type property for the outmost container within the area, so in our example, the root element of our component,
>
> **[1:38](https://www.linkedin.com/learning/cutting-edge-css/container-queries?u=76281980&t=98)** and we set it to inline-size. This means we want to use the layout across the inline axis as a basis for our container queries. Next, we set up a container query by saying @container, and then defining the query, in our case, min-width: 40rem, and then define the style rule triggered by this query. Now, instead of querying the viewport width to figure out the layout of the component, the browser will query the width of the specified container, so the component itself, and pick the appropriate style rules. That way, the same component can display in two different layouts based on the available space in the location it has been placed. (energetic music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Development]] (1)
> **Non-Speech:** (energetic music) (2)
> **Definitions:** in other words (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [The difference between :is and :where](https://www.linkedin.com/learning/cutting-edge-css/the-difference-between-is-and-where?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cutting-edge-css/the-difference-between-is-and-where?u=76281980&t=0)** (soft music)
>
> **[0:05](https://www.linkedin.com/learning/cutting-edge-css/the-difference-between-is-and-where?u=76281980&t=5)** - CSS has some very interesting pseudo class functions that allow us to both simplify and make more advanced queries for elements. Two of these are, is and where, and at first glance they seem weirdly similar. So let's take a closer look at what makes them different. Both is and where take a selector list and selects any element matching any of the selectors in that list. This is useful if for example you have several elements with the same class and you want to target a subgroup of them. So instead of saying class LI, class P, class button, you would say, class is LI, P, button and you get the same result. Now here's the thing, swap out is for where in this example, and you still get the same results. So what is the difference? It's in the specificity of this pseudo class. Let's say we have two buttons, styled with a button selector to have a background color yellow. Now we target one using is and one using where to set the background color to pink and blue. The question is, what color does each of these buttons now get? The first button targeted using is, gets a pink background. Why? Because is works like a class selector and class selectors have a higher specificity than element selectors. So even though the button rule is further down in the cascade, the is rule kicks in. The second button on the other hand targeted using where stays yellow. Why? Because where has zero specificity.
>
> **[1:40](https://www.linkedin.com/learning/cutting-edge-css/the-difference-between-is-and-where?u=76281980&t=100)** So the button rule further down in the cascades still applies. It's a subtle difference, but it can make a huge impact. To make it simple, I like to think of is as targeting classes and where as referencing classes.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Env Vars:** css (1)
> **Analogies:** for example (1)
> **Speakers:** - css (1)
> **Non-Speech:** (soft music) (1)


### 3. Layout

[↑ Back to Table of Contents](#table-of-contents)

#### [How the clamp() function works](https://www.linkedin.com/learning/cutting-edge-css/how-the-clamp-function-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cutting-edge-css/how-the-clamp-function-works?u=76281980&t=0)** - [Instructor] Responsive topography allows us to do fancy things like scale a font in relation to the size of the viewport. However, in most cases, we wanted to put upper and lower limits on the font size so the text doesn't get too small or too big. That's what the Clamp function does. Clamp takes three values, minimum, preferred and maximum, and the browser will try to apply the preferred value as long as the calculated size doesn't go below the minimum or above the maximum value. A typical use of clamp is to set the preferred value to some factor of the viewport width. That way, as the viewport gets wider, the font gets bigger. The minimum and maximum values literally clamp the font size so if the calculated preferred size goes below the minimum threshold, the size is fixed to that minimum threshold, and if it goes above the maximum threshold, it is also fixed to that maximum threshold.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Beyond viewport width](https://www.linkedin.com/learning/cutting-edge-css/beyond-viewport-width?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cutting-edge-css/beyond-viewport-width?u=76281980&t=0)** - [Instructor] Designers often one to set the width of an element, like an image to the full width of the viewport. For this, we have the viewport width and height or VW and VH units. Set it to 100 VW and you get 100% of the width of the viewport. 100 VH gives you 100% of the height of the viewport. But there's a problem. The width of the viewport includes the scroll bar. And if the scroll bar is always present, as it is in [[Windows]], that means the viewport with is wider than the actual displayed viewport. And as a result, an element set to 100 VW is wider than the displayed area and horizontal scrolling occurs so you can see the entire element. Not great. To solve this problem, the CSS working group is working on some new units. So consider this a preview of something that is coming. In addition to viewport width and viewport height, we will now have large viewport width and height, small viewport width and height and dynamic viewport width and height. The viewport width and height remain the same as before, the total width and height of the viewport. Large viewport width and height will be the viewport size assuming all interactive elements like scroll bars are minimized. Small viewport width and heights will be the viewport size assuming all interactive elements like scroll bars are maximized or open. And finally, dynamic viewport width and height respond
>
> **[1:34](https://www.linkedin.com/learning/cutting-edge-css/beyond-viewport-width?u=76281980&t=94)** to the interactive elements in the viewport and will shrink and grow depending on what elements are currently being displayed. That means if the scroll bar comes in, the width reduces. If the scroll bar goes away, the width increases. Additionally, for all of these new features, the units will also have logical values. So a viewport inline or VI and viewport block VB, and then the equivalent LVI, SVI, and DVI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1)
> **Env Vars:** css (1), lvi (1), svi (1), dvi (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Flex vs. grid: Content out or layout in?](https://www.linkedin.com/learning/cutting-edge-css/flex-vs-grid-content-out-or-layout-in?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cutting-edge-css/flex-vs-grid-content-out-or-layout-in?u=76281980&t=0)** (upbeat industrial music)
>
> **[0:05](https://www.linkedin.com/learning/cutting-edge-css/flex-vs-grid-content-out-or-layout-in?u=76281980&t=5)** - [Instructor] When I talk about the difference between the flex and grid display properties, I say flex is a content-out layout module, while a grid is a layout-in layout module. Let me show you what I mean by that. Say we have an element set to display flex. The size and layout of the box will flex to accommodate the size of each of the child elements inside. So if we have one small item and one large item, the containing element will flex to fit them and the layout inside will give the larger element more space than the small one. Swap these elements around and the box flexes to accommodate the elements. Introduce a smaller element and the box flexes again and so on. This is what I mean when I say content-out. The contents inside the flexible box dictate the layout of the box and if we want to change the layout, we change the size of the containing elements. Now let's look at grid. Here we first define a grid inside the containing element and then we place the child items on that grid. By default, the child elements are placed on the grid cells starting in the top right, or inline start block start corner. The child elements will then conform to the size of the cell or cells they are placed in. We can change the location of any child element by specifying what grid lines they should appear within and the elements will then conform to the new size given to them. This is what I mean when I say layout-in. The layout of the grid dictates the layout and size of the child items. If you want an item to be bigger,
>
> **[1:38](https://www.linkedin.com/learning/cutting-edge-css/flex-vs-grid-content-out-or-layout-in?u=76281980&t=98)** you either allow for it to span more than one grid cell or you have to change the grid. The child items do not impact the grid layout.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat industrial music) (1)

#### [Making sense of grid-auto-flow](https://www.linkedin.com/learning/cutting-edge-css/making-sense-of-grid-auto-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cutting-edge-css/making-sense-of-grid-auto-flow?u=76281980&t=0)** - [Instructor] Inside a grid container, grid items are placed automatically based on the grid-auto-flow setting. The default setting is row, meaning the first row is filled first, then the second row and so on. If the writing mode is set left to right, this means the grid is populated horizontally from left to right. We can change grid-auto-flow to column And now the grid is populated vertically, top the bottom, filling the first column first, and the second and the third, so you get the idea? This automatic flow works great as long as we don't have any grid items placed on the grid by specifying their location. But placing things manually on the grid is rather common thing to do when working with grid. That means in many cases, the auto-flowing doesn't produce the results we expect. Consider this scenario where one of the grid items is set to rowspan two, meaning it takes up two row cells along the row axis instead of one, effectively it's taller than the other cells. How does this impact the flow of the content? If the bigger item appears in its natural auto-placement position, the [[Representational State Transfer (REST)|rest]] of the items will just fill up the available space around the elements and we get an order like this, which is pretty logical. However, if we manually position the item one cell further along the column axis, something unexpected happens, we get a hole in the grid, an empty cell, a gap. And if we position the item two cells further along the axis, we get two empty cells.
>
> **[1:35](https://www.linkedin.com/learning/cutting-edge-css/making-sense-of-grid-auto-flow?u=76281980&t=95)** We get gaps in the grid because auto-flow moves forward according to the text direction and the writing mode, it doesn't go backwards and try to back fill empty cells. To work around this problem, we can add a keyword to grid-auto-flow that keyword is 'dense'. Now the algorithm will try to fill holes earlier in the grid. So in our example, a smaller item is moved in to take up that empty space. This makes for a cleaner grid, but there is an important caveat here, setting grid-auto-flow to dense can result in the content order being jumbled, as you can see clearly here. So the bottom line is grid-auto-flow dense can help clean up your layouts as long as you're careful about keeping your content order in order.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Cross-References:** earlier in (1)
> **Definitions:** is an  (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/cutting-edge-css/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cutting-edge-css/next-steps?u=76281980&t=0)** - [Morten] My goal with creating this course was to introduce you to a new and more conceptual way of thinking about CSS while at the same time, explaining some often misunderstood and lesser known features of the markup language. Now that you've completed this course, it's time to take the next steps in your learning journey. We have a long list of CSS courses in our library from basics to advanced techniques to CSS frameworks and beyond and I encourage you to go exploring and keep learning. Now, all that is left for me to say is, (speaking in foreign language). Go build some amazing things on the web using cutting edge CSS and I'll see you in the next course. (soft music)

> [!info]- Semantic Content
>
> **Env Vars:** css (4)
> **Non-Speech:** (upbeat music) (1), (soft music) (1)
> **CLI Commands:** go build (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [morten] (1)


## Instructor

- [[Morten Rand-Hendriksen]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/cutting-edge-css-2894333)

## Skills Covered

- Responsive Web Design
- Cascading Style Sheets (CSS)

## Path Context

### In [[The Top Skills Engineering Professionals Have Right Now]]
← [[Git from Scratch]] | **6 of 9** | [[SOLIDWORKS 2024 Essential Training]] →

## Appears In

- [[The Top Skills Engineering Professionals Have Right Now]]

## Related Courses

_Courses sharing skills:_

- [[Making Sense of the CSS Box Model]] — Cascading Style Sheets (CSS)
- [[React- Building Styles with CSS Modules]] — Cascading Style Sheets (CSS)
- [[Building Great Forms with HTML and CSS]] — Cascading Style Sheets (CSS)
- [[HTML & CSS- Creating Forms]] — Cascading Style Sheets (CSS)
- [[HTML and CSS- Linking]] — Cascading Style Sheets (CSS)

---

[↑ Back to top](#)