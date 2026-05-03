---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: making-sense-of-the-css-box-model-2
url: "https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2"
duration_minutes: 71
duration: 1h 11m
level: Beginner
updated: 11/14/2019
learners: 5709
skills:
  - Cascading Style Sheets (CSS)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C510DAQErdG7cyqqxlA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1573752417155?e=2147483647&amp;v=beta&amp;t=UGuGG6jtZs5eWyfmqg2T0xrk5H_XHx9ynyceYu2YZ7M"
linkedin_topic: Web Development
learning_paths:
  - '[[Getting Started with WordPress]]'
prev_courses:
  - '[[CSS Essential Training (2023)]]'
next_courses:
  - '[[HTML Essential Training]]'
path_nav: '[{"path":"Getting Started with WordPress","position":4,"total":10,"prev":"CSS Essential Training (2023)","next":"HTML Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/cascading-style-sheets-css
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Making%20Sense%20of%20the%20CSS%20Box%20Model.md)

![Making Sense of the CSS Box Model](https://media.licdn.com/dms/image/v2/C510DAQErdG7cyqqxlA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1573752417155?e=2147483647&amp;v=beta&amp;t=UGuGG6jtZs5eWyfmqg2T0xrk5H_XHx9ynyceYu2YZ7M)

# Making Sense of the CSS Box Model

> Based on old-school typography blocks, the CSS box model is the key to modern web design. Once you master it, you can build any layout you want—and troubleshoot most of the common CSS alignment and positioning woes. In this course, Morten Rand-Hendriksen offers a "four course meal" approach to the CSS box model, breaking it down into easily digestible chunks. He covers techniques such as styling t

> [LinkedIn Learning](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2) | 1h 11m | Beginner | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Making sense of the CSS Box Model](#making-sense-of-the-css-box-model)
- [**1. Appetizer: The Web Is Made of Boxes**](#1-appetizer-the-web-is-made-of-boxes) (3 videos)
  - [Displaying information through the web](#displaying-information-through-the-web)
  - [The web is made of boxes](#the-web-is-made-of-boxes)
  - [Designing with boxes](#designing-with-boxes)
- [**2. Entrée: The Origin of the Box in Typography**](#2-entre-the-origin-of-the-box-in-typography) (3 videos)
  - [Understanding the basics of type](#understanding-the-basics-of-type)
  - [Change the type, change the box](#change-the-type-change-the-box)
  - [Text flow in the box](#text-flow-in-the-box)
- [**3. Main Course: Understanding the Box Model**](#3-main-course-understanding-the-box-model) (8 videos)
  - [What is the CSS Box Model?](#what-is-the-css-box-model)
  - [Changing the contents within the box](#changing-the-contents-within-the-box)
  - [Understanding the display porperty](#understanding-the-display-porperty)
  - [Sidebar: Images are inline elements](#sidebar-images-are-inline-elements)
  - [Position is everything](#position-is-everything)
  - [Floating and clearing content](#floating-and-clearing-content)
  - [Using the clearfix](#using-the-clearfix)
  - [Pseudo elements: Making the browser hallucinate](#pseudo-elements-making-the-browser-hallucinate)
- [**4. Dessert: The Brave New World of Layouts**](#4-dessert-the-brave-new-world-of-layouts) (5 videos)
  - [Modern layout modules](#modern-layout-modules)
  - [Flex: Content-based layouts](#flex-content-based-layouts)
  - [Flex in depth](#flex-in-depth)
  - [Grid: Layout-based layouts](#grid-layout-based-layouts)
  - [Grid in depth](#grid-in-depth)
- [**5. Nightcap**](#5-nightcap) (2 videos)
  - [Shapes](#shapes)
  - [Going further with CSS and web standards](#going-further-with-css-and-web-standards)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Making sense of the CSS Box Model](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/making-sense-of-the-css-box-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/making-sense-of-the-css-box-model?u=76281980&t=0)** - I'm Morten Rand-Hendriksen and in this course, I'll take you on a journey through the CSS Box Model. We'll start by looking at how boxes make up the web pages we visit every day and how these boxes originate in traditional [[Typography]]. We'll look at the CSS Box Model in detail exploring things like text styles, display properties, positioning, and beyond. And finally, we'll touch on some CSS tools and techniques that move us beyond the traditional box model and into the future. Having a comprehensive understanding of how the CSS Box Model works is an invaluable asset for web designers and developers alike, and in this course, I'll help you build that understanding through practical, real-world examples and demonstrations. So, let's get crackin' with making sense of the CSS Box Model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Typography]] (1)
> **Env Vars:** css (5)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - i (1)


### 1. Appetizer: The Web Is Made of Boxes

[↑ Back to Table of Contents](#table-of-contents)

#### [Displaying information through the web](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/displaying-information-through-the-web?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/displaying-information-through-the-web?u=76281980&t=1)** - When you look at a well-designed and communicative website, you have to make a conscious effort to remember what you see is not actually the content itself but rather the browser's visualized interpretation of code: [[HTML]] and CSS Markup, [[JavaScript]], images, videos, and other media. In its presentational nature, the web is a profoundly skeuomorphic environment. We use the internet, computers, and screens to make visual representations of information that register to the human eye as if they existed in real life. A simple document looks like a printed document but is, in reality, just light and dark pixels on a screen. An image looks like a photo but is, in reality, just projected hues, saturation, and lightness generated by the computer when and if we tell it to do so. The items themselves don't really exist. Instead, what we're presented with are temporary manifestations, or reproductions really, of the items in the context of the screen, and these manifestations are generated by the web browser. If we establish as a baseline that the web is a tool to communicate information from the publisher to the visitor and vice versa and we combine this with the knowledge that the web browser creates temporary manifestations of this information in whatever form the visitor requests, we can identify the job of the web designer and developer as being responsible for providing the browser with the necessary instructions to present the content in the most accessible way for the visitor. This could mean many things: providing proper accessible markup
>
> **[1:34](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/displaying-information-through-the-web?u=76281980&t=94)** to allow the visitor to choose how they want to consume the information, providing responsive designs to present the content in the best possible way across all screens, creating informational user experiences that are easily understood by the visitor, the list goes on. To meet these goals, it's vital to understand how the browser sees the content and know how to instruct the browser to display the content in the best possible way for humans. After all, the browser has no comprehension of the information. It just seems Markup and parses it to be displayed on a screen based on pre-configured [[Algorithms]]. Start printing out text from the top left-hand corner in the default font. Display images in line. Use the available space. By understanding how the browser sees the content and how to instruct the browser to display the content in the best possible way, we can change the presentation of that content into anything we want. On the web, content and the presentation of that content are separated between HTML and CSS, meaning we have an almost unlimited canvas to work with, and it all starts with the simple realization that the web is made of boxes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[JavaScript]] (1), [[Algorithms]] (1)
> **Env Vars:** html (2), css (2)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Speakers:** - when (1)

#### [The web is made of boxes](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/the-web-is-made-of-boxes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/the-web-is-made-of-boxes?u=76281980&t=0)** - [Instructor] Let's start at the very beginning with what the browser sees when it's asked to open a document. Ignoring the whole head section of the markup, and looking only at the body, the browser is a percent of various content wrapped inside element tags. Some of the content is plain text placed in between tags that identify it as a heading, a paragraph, a block quote or even a link. Other content, like images, is not actually placed in the document but rather referenced through specialized attributes. The browser sees the reference, goes to the source location, and pulls the actual content in to be displayed alongside the other content. The element tags that wrap the various content in a document is what constitutes the markup in hypertext markup language, or [[HTML]]. They split apart the content, identify different components, their roles and attributes, and allows the browser to make sense of the structure of the content without understanding its meaning. The element tags that wrap the various content in a document also serve as the core components of what's known as the CSS box model. Every time a browser encounters a beginning tag, be that a div or a paragraph or an anchor or an image or anything else, it starts to draw a box that wraps around all the content between the beginning and the end tags. On the visual web, therefore, every tag is a box. Using browser tools, you can see these boxes on all websites.
>
> **[1:33](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/the-web-is-made-of-boxes?u=76281980&t=93)** Looking at a standard webpage with no style and just basic markup, some of the boxes are immediately obvious. Headings are displayed as block level elements, meaning they take up the whole width of the viewport. Same with individual paragraphs, block quotes, lists and list items. Links, emphasized and strongly emphasized text, buttons and other content that would typically appear as part of a sentence are displayed inline and their boxes are therefore less obvious to spot. One interesting anomaly is that images fall under the inline category. The original specification of the image element, the image tag, is used to incorporate the inline graphics, typically icons or small graphics, into an HTML document. This means, if you add an image inside a paragraph, it'll appear as an element alongside the other text on the line. When we design and develop content for the web, we use additional tags to wrap boxes around groups of content to create further separation. These are often basic block level divs or inline spans for small sections and can also be sematic tags like header, nav, main, section, article, aside, footer, etc; for structural separation. One style is applied to these tags through CSS markup with the help of IDs, classes, and selectors. The result is a complex array of boxes displayed in a carefully crafted patchwork pattern in the browser. To actually see how many of these boxes there are
>
> **[3:08](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/the-web-is-made-of-boxes?u=76281980&t=188)** and how they fit together, we can use a tool that Firefox's 3D view to inspect a page. The result can be quite stunning in its complexity and shows in a very real way that the web is made of boxes and that by understanding how to manipulate these boxes through the CSS box model, we can get the browser to display the boxes and the content within them in pretty much any way we want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Env Vars:** css (3), html (2)
> **Definitions:** is a  (3), known as (1)
> **CLI Commands:** make (1)
> **Documentation:** specification (1)
> **Tools:** firefox (1)
> **Speakers:** - [instructor] (1)

#### [Designing with boxes](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/designing-with-boxes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/designing-with-boxes?u=76281980&t=0)** - Before we dive any deeper into the CSS box model, let's take a step back and look at what the realization that the web is made of boxes means for the [[Web Design]] and development process. If you ask me, I think a comprehensive understanding of the CSS box model is the most important skill for anyone working as a web designer and developer. Knowing on a fundamental level that the web is made of boxes makes the process of designing and developing a site to look and function the way you want into a simple task of creating and stacking boxes of content. So let me show you what I mean. Most of my web design projects start with a simple idea and pen and paper or a whiteboard. Starting with the core content, a video, an article, some sort of content model, I sketch out in rough terms what I envision it will look like. This is wire framing and rapid [[Prototyping]] at its very simplest and most effective. Once I have a general sketch of what the core content will look like, I move on to the [[Representational State Transfer (REST)|rest]] of the elements on the page, header, menus, sidebars, footers, meta content. Whatever needs to be, or might want to be, on the page. The result of this process is usually a pile of different sketches that show various iterations and implementations around a common theme, typically at different screen widths and in different scenarios. This is where the CSS box model comes in. Even at this early stage, before a single line of code or content is written, even before I have a firm idea of what this entire thing will end up looking like
>
> **[1:35](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/designing-with-boxes?u=76281980&t=95)** I can start [[Sketching]] out the main boxes and create a map for myself of how everything will be put together. During this process it's easy to identify grouped content, like a meta section, an article header, and so on. And find out what blocks of content belong together and what blocks need to be separated or contained further to allow for different layout solutions. The end result is a comprehensive map of the different boxes that in the end will make up the full layout of the view, complete with nesting, positioning and relationships. Once the boxes are established, work can start on both design and development. Fonts, colors, spacing and positioning can be refined and perfected on the design end, while the boxes will work as a map that shows the semantic structure of the [[HTML]] markup for the page. Remember, every HTML tag is a box. So for every box drawn there will be an accompanying tag. And using this process, the biggest challenge, which really isn't a challenge at all, will be figuring out what tags to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Design]] (2), [[HTML]] (2), [[Prototyping]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Sketching]] (1)
> **Env Vars:** css (3), html (2)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Speakers:** - before (1)


### 2. Entrée: The Origin of the Box in Typography

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding the basics of type](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/understanding-the-basics-of-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/understanding-the-basics-of-type?u=76281980&t=1)** - When we talk about the CSS box model, it's a good idea to start at the core and work our way out. On the web, that core is basic type. The majority of content published on the web is text and the majority of features in CSS are there to help us configure and format the display of that text. These features are in turn inherited from classic typesetting and [[Typography]], so let's start there with basic typesetting principles, see how they work and how they translate into CSS. In the beginning, we have a frame in which we'll build the page. Within this frame, we can start setting up a basic page. If I were to print this on paper using an old letter press printing press, I collect the necessary letter press type letters and place them one after the other in a block until I get a full sentence. Each of the letter press type pieces have the width of the individual letter and the predefined minimum line height. As we place the letters side by side, we can draw a line directly under the letters. This is known as the baseline. Below the baseline there is space to allow for letters that have descenders, the lowest point of a J or Y or a G. And above the mean line, there is space to allow for letters to have ascenders, the highest point of an L or an F or a K. The height of the letter from descender to ascender is known as the point size and this is also the pixel size of a digital font. One M is the height and width of an uppercase M
>
> **[1:37](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/understanding-the-basics-of-type?u=76281980&t=97)** of whatever font and size you're currently working with. Traditionally, these letters were cast as square blocks called em quads or mutton quads. We'll get back to this later. When the sentence is complete, I can draw a line around the type pieces. This is the CSS box the browser creates. Right now the box is the size of the sentence and if I add more letters or words, it grows with it. The size of the box is confined by the contained it's held inside, in this case, the frame that is the size of a page. That means as I keep adding more words, eventually we run out of space and another line has to be added. This increases the vertical height of the box to two lines. Working like this with letter press type, you can clearly see how some of the core principles of typography and the CSS box model work. If I want to make a paragraph, I string together letters into words and then words into sentences and handle them as individual blocks. Then I separate them vertically by adding space through padding or margin to the top and bottom. This produces block level elements, each element, a paragraph, a heading, a quote, is a block. Having built several blocks, I can move them around as individual units and reorganize them. I can also change the appearance of individual blocks, maybe change the width or positioning or swap out one font for another without interfering with the other blocks. Working with in-line elements
>
> **[3:11](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/understanding-the-basics-of-type?u=76281980&t=191)** is also easy to understand in this context. When I add a letter or [[Microsoft Word|word]] of a different size or font into the block, it changes the structure of the line that that letter is on. If the letter is taller, the line height is increased for that line only. If the letter is taller and on the first line, the increased line height appears to push the entire line down. Using just these basic components, a frame and a bunch of individual letters, I can create a pretty sophisticated page layout that is comprised of various boxes. And this corresponds closely to what happens in the web browser in the most basic sense.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Typography]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** css (5)
> **Definitions:** known as (2), is a  (1)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - when (1)

#### [Change the type, change the box](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/change-the-type-change-the-box?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/change-the-type-change-the-box?u=76281980&t=1)** - All fonts and all type have a standard point size, line height, leading, tracking, and kerning. These are terms that describe how lines and letters related to each other and changing them changes both the appearance of the final text and the size of the box. The most obvious way to change the box is to change the type itself. Changing the font-face or font size will also change the size of the box. Bigger fonts create bigger boxes. Smaller fonts, smaller boxes. The standard line height of fonts is often insufficient. In these cases, we add leading, literally thin strips of lead above and below the lines to push them apart. In CSS we do the equivalent by changing the line height property. Setting the line height property of a font displayed at 12 pixels to 16 pixels will add four pixels to the total height. Two at the top and two at the bottom. Likewise, we can change the space between the each letter by altering the tracking or letter spacing. Here we add uniform space between each letter to space them further apart. In letterpress printing that means sticking small pieces of metal between the letters. In CSS, it means altering the letter spacing property. A positive number adds more space, a negative number brings the letters closer together. In letterpress printing, tracking was often used to justify alignment of texts to fit within columns and was done on a line by line basis. On the web, alignment is handled separately.
>
> **[1:34](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/change-the-type-change-the-box?u=76281980&t=94)** So letter spacing is done purely to alter the visual appearance of words and sentences. The major difference and major advantage, really, of working with digital type is that all of these adjustments, font-face and size, line height and letter spacing, are changeable through simple CSS properties. That tedious process of resetting paragraphs and adding leading and tracking shims is replaced with quick changes that take immediate effect in the final medium, the browser, and as the changes take place, the box changes with it. Change the type, change the box.

> [!info]- Semantic Content
>
> **Env Vars:** css (3)
> **Speakers:** - all (1)

#### [Text flow in the box](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/text-flow-in-the-box?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/text-flow-in-the-box?u=76281980&t=1)** - The text we display in any medium is restricted by the limits of the outermost container. A bigger container can take more text. A smaller container takes less. In traditional printing, on paper, the limits of the outermost container are easy to perceive and relate to. Paper typically has a specific size. A four letter size, legal, and we know that as long as we stick to one specific paper size, it will be consistent. Screens are different in this respect. A screen and from it, the size of a browser viewport, can be any size, and it's only limited by the size and number of available pixels. A browser window can be one-by-one pixels or 1000-by-1000. This poses a challenge for [[Typography]], that until the introduction of the world wide web was more or less non-existent. In print typography, the limits of the container or the page, provided robust framework inside which a layout can be created. The printed layout typically becomes a permanent part of the paper, and once printed, there's no expectation for the content to change it's appearance. If a change is needed, a new version will be printed and the old discarded. The print medium is rigid and permanent. Digital screen print, on the other hand, is fluid and ephemeral, and with this fluidity, many traditional ideas about typography need to be updated. While the maximum width of the outermost container on a screen is limited, there's no absolute limits to how wide or tall the content can be because the browser allows the user to scroll left and right, up and down. To simplify the [[User Experience (UX)|user experience]],
>
> **[1:35](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/text-flow-in-the-box?u=76281980&t=95)** the convention is to limit default scrolling to only the vertical Y-axis and limit the width of the content to the width of the viewport, but this can be overridden as we see in some interfaces like [[Microsoft]] [[Windows]]. This situation has a significant impact on our boxes. As we add more content to a box, it increases in size, first from the top lefthand corner and out to the right, then down to the next line towards the bottom righthand corner. Without restrictions, the box will widen to the maximum width of the container, and then start growing vertically. In traditional printing, we constantly have to keep this in mind to ensure there's enough space on the line and on the page. In digital printing, on the other hand, we can use the fluidity and ephemeral nature of the display of the content to our advantage to create responsive layouts that change depending on the available space, to resize fonts depending on the width of the viewport, to change the relationships between different elements depending on the context in which they are displayed. For each box, we can use CSS to specify a fixed minimum or maximum width or height creating fixed or fluid layouts. As we change the width of the box, the text inside will reflow from the top left to the bottom right corner and alter the height of the box. If we limit the maximum height of the box, the text will continue to flow outside, but other elements will be allowed to display outside the edges of the box causing it to overlap. To remedy this, we can either instruct the browser to equip the box with scrollbars
>
> **[3:09](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/text-flow-in-the-box?u=76281980&t=189)** or we can tell it to hide the overflow text. These are old features exclusive to the fluid screen environment and they have no analog in traditional print. It is for this reason that even though the idea of [[Responsive Web Design]] was introduced half a decade ago, our approach to [[Web Design]] and text layout, with boxes in particular, is still very much anchored in the skeuomorphic art of trying to make content on the web look as if it was printed on paper. Look no further than your favorite social media or news site and you'll see rigid grids, and design languages that are deeply rooted in print publishing. There's nothing wrong with that, but this is a limitation based on tradition not actual constraints.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Typography]] (3), [[User Experience (UX)|User experience]] (1), [[Microsoft]] (1), [[Windows]] (1), [[Responsive Web Design]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** css (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)


### 3. Main Course: Understanding the Box Model

[↑ Back to Table of Contents](#table-of-contents)

#### [What is the CSS Box Model?](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/what-is-the-css-box-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/what-is-the-css-box-model?u=76281980&t=1)** - [Instructor] With the typographical terminology and principles in place, it's time to take a look at what's known as the CSS Box Moxel, the main subject of this course. As I explained earlier, when we add content to a document wrapped inside tags, the browser draws a box around that content. Each tag or element is represented as a rectangular box. We can then change the contents and appearance of the content of the box as well as the different properties of the box itself using CSS or rather we can provide the browser with instructions on how to render the box once it's encountered. The CSS Box Model is the premise on which these instructions are based. In short, using the CSS Box Model, we can tell the browser exactly how we want a particular box and its contents to be displayed. To see how this works, we'll look at one paragraph of type in isolation. In CSS, each of the rectangular boxes that wrap the contents of an [[HTML]] element is described using a box model that describes the content of the space taken up by that element. The CSS box has four separate edges that can be moved relative to one another. From the inside out, they are the content edge, the outer edge of the content itself, the padding edge, the border edge, and finally the margin edge. If we imagine for a moment that the box has no CSS properties applied to it, the four edges will all be the same.
>
> **[1:33](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/what-is-the-css-box-model?u=76281980&t=93)** This is rarely the case though. Even if you don't provide any specifications the browser will usually apply a set of user agent styles that provide some basic styling. Our plain box without style currently has a width and a height. As explained in the previous chapter, we can change these sizes either by altering the contents inside the box or by specifying a fixed minimum or maximum width or height. Next, we can increase the overall size of the box and add transparent space between the content edge and the padding edge by adding padding. The padding is added from top to right to bottom to left and has the effect of adding actual padding outside the content. It pushes the padding border and margin edges out with whatever thickness the padding has. You can apply individual padding thicknesses to each side independently. When you add padding to a box, you increase the size of the box accordingly. So a 100-pixel-wide box with a 20-pixel padding around all the edges is displayed as a 140-pixel box. This behavior can be changed by setting the box sizing property to border box, which tells the box to retain its original display size by moving the content edge inwards instead of moving the padding edge outwards. Wrapping around the padding is the border. While padding is transparent and essentially just space the border is visible.
>
> **[3:07](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/what-is-the-css-box-model?u=76281980&t=187)** A CSS border can have any color and thickness again applied to the individual sides from top to right to bottom to left and can be either solid, dashed, dotted, or even double, grooved, ridged,
>
> **[3:28](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/what-is-the-css-box-model?u=76281980&t=208)** inset, or outset, though these last four are seldom used anymore. Like padding, the border is added to the width of the box. So a two-pixel border all around increases the displayed width of our box to 144 pixels. Wrapping around the border is the final box model property, margin. Whereas the padding increases space inside the box and border adds a physical border, margin pushes the box away from adjacent content using invisible space. The effect is what designers refer to as white space or breathing space. By default, boxes line up without space between them. Margin allows us to add as much or as little space as we want. Margin is interesting because you can also apply negative values, thereby moving the box up, right, bottom, or left relative to its normal position. Knowing how the box model works, content, padding, border, and margin, from top to right to bottom to left allows us to start using the power of CSS for advanced layouts and designs. And as you can see, once you think of these properties in real life, they're both easy to understand and easy to implement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** css (9), html (1)
> **Cross-References:** previous chapter (1)
> **Definitions:** known as (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Changing the contents within the box](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/changing-the-contents-within-the-box?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/changing-the-contents-within-the-box?u=76281980&t=0)** - [Instructor] Working from the inside out, the first thing we can do with the CSS box is change the appearance of the contents within the box itself. Because the nature of the box is mainly as a text layout tool, a large number of the properties we have available to us relate to how text is displayed. As you've seen before, the most basic change you can make to the contents in the box is changing the font. We can change the font family, providing either a single or a list of fonts for the browser to use. We can also change the font size, font weight, and font style from normal, to italic to oblique. We can also change the appearance of text in other ways. We've already talked about letter spacing and line height. There's also a [[Microsoft Word|word]] spacing property that adds space between each word. And we can align text left, center, right or justified, and add indentation to the first line with text indent. CSS can also be used to control the font display. Using text transform, we can force the text to be capitalized, all upper case, or all lower case. And text decoration can add an underline, either straight or wavy to the text within the box. The default blue line you see under [[HTML]] anchors, or links is just such a text decoration underline. The color of the text itself is controlled with the color property. You can also add a drop shadow to the text using the text shadow property. Moving beyond the text itself,
>
> **[1:33](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/changing-the-contents-within-the-box?u=76281980&t=93)** you can change the background of the box in one of several ways. The most basic change is to give the box a background color. You can also set a background image that is single or tiled along the x-axis or y-axis or both. The background image can be positioned top, bottom, left, center or right, or a percentage or pixel value. And with CSS3, we can use the background size attribute to control the size of the background image. The most interesting of these might be the cover value that ensures the image is as small as possible while still filling out the frame of the box. Finally, we have the ability to change what happens right outside the box. Add a box shadow behind and outside the box with the box shadow property, and give the box rounded corners using border radius. This is how you can make box into a circle if you want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[HTML]] (1)
> **Env Vars:** css (2), html (1), css3 (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Understanding the display porperty](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/understanding-the-display-porperty?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/understanding-the-display-porperty?u=76281980&t=0)** - [Instructor] Every [[HTML]] element has a default display property setting. Most commonly either block, as in the case of headings, paragraphs, block quotes, lists, divs, and HTML semantic dividers, like section, nav, article, aside, header, and footer, or inline as emphasized and strongly emphasized, links, spans, code, and images. Now that we know how to manipulate the box itself, we can look at how it interacts with other adjacent boxes and this all starts with the display property. Let's look at display block and display inline first. Display block makes the box into a block level element, meaning it spans the full width of available space and that no other content will display to the left or right. When adding padding, border, and margin to block level elements, they add to the size of the box and push all other content away. Display inline makes the box into an inline element that appears on the same baseline as the adjacent text. The box is literally in line with the other content. When adding margin, padding, and border to an inline element, the horizontal axes grow and the vertical axes are added relative to the normal position of the box. This means the overall box can end up either covering or being covered by lines above and below the content itself. If you need an item to remain inline but still behave like a block level element, you can change its display property to inline block. When you do this, it's important to remember
>
> **[1:36](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/understanding-the-display-porperty?u=76281980&t=96)** that the size of the inline block box will override any line height and force the lines further apart just like what would happen if you added a [[Microsoft Word|word]] with larger font in a block of type the old fashioned way. While block, inline, and inline block are the most common display values, there are a couple of others worth mentioning because they can do some pretty interesting things. The first one is flex, which we'll discuss more extensively later. Flex turns the first level children of any container into flexible items that share the available space. Flex, also known as flexbox, is one of the most exciting innovations in CSS and for this reason we'll dedicate a whole movie to it later on in this course. The other value, or group of values, worth mentioning is table. Display table and table-cell in particular are often used to perform complex actions, like creating equal height columns with unequal height content or vertically centering content. These are all things that are handled better with flex, but if you're looking for backwards compatibility table and table-cell might be your best options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** html (2), css (1)
> **Definitions:** known as (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Sidebar: Images are inline elements](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/sidebar-images-are-inline-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/sidebar-images-are-inline-elements?u=76281980&t=1)** - At this point, it's necessary to take a quick sidebar and address images. As I've mentioned several times earlier, in [[HTML]] images are considered inline elements due to their original definition as small figures or graphics to extenuate text. To see what I mean think about how emoji are added to a sentence. You have words, then the emoji appears and then you have more words. The emoji appear inline and by default the image acts in the same way. You have the words, then your emoji then an image and all of them appear inline. This has some specific consequences that need to be considered when applying the box model to images. If you add an image to a HTML document within another element, it will appear inline with the [[Representational State Transfer (REST)|rest]] of the content. This however is not how we normally want to display images. In fact, I can find very few instances where default display setting for the image element makes any sense. The way people usually discover this rather odd choice of display property for the image element is when they try to wrap a box around an image. By default, the CSS box that surrounds the image will have space on the bottom for the descender of the current font. This space is often misunderstood as stray padding or margin but is in fact there because the image sits on the baseline of the text line. To solve this, I think all images should be displayed as block level elements and in modern [[Web Design]], we typically want our images to be block level elements
>
> **[1:34](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/sidebar-images-are-inline-elements?u=76281980&t=94)** so text and other elements can wrap around and above and below them. We also want to treat our images as block level elements because this means we can add padding, orders, margins, drop shadow and other useful stylistic elements to them. To facilitate this, it's usually a good idea to change the display property of the image element to block that way the box will match the actual size of the image and any property and value that we apply to the box will behave as expected. We can further extend the display of the image box by wrapping it in a figure tag, which is block level by default but I still prefer to have the image as a block level element in addition. That's it for the sidebar and now back to our regularly scheduled programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Web Design]] (1)
> **Env Vars:** html (2), css (1)
> **CLI Commands:** find (1)
> **Speakers:** - at (1)

#### [Position is everything](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/position-is-everything?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/position-is-everything?u=76281980&t=1)** - When we first set up a document, whether it be with type or [[HTML]], all the content is placed based on its natural position. That means the boxes are displayed one after the other in the natural flow of the content. In CSS we can change the position of an element in various ways and it all starts with understanding the position property. When an HTML element is added to a document, its default position is static. That means the element will be placed in the normal flow of the content. If we change position to relative, we can use the top, right, bottom, left, and zed-index properties to position the box relative to its original location without changing the overall layout. This is akin to cutting out a [[Microsoft Word|word]] or an image from a document and moving it somewhere else. A hole is left where it used to be and the box may end up overlapping other content. The position of an element is often set to relative, not to move it, but to make it the reference box for positioning of other contained elements, as we'll see in a second. Whereas position relative allows us to position a box relative to its original position, position absolute pulls the box out of its natural location and positions it relative to the closest position ancestor to the containing block, AKA, the full document as rendered in the browser. Since the box is pulled out of its original document context, no hole is left and the remaining content will fill in
>
> **[1:33](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/position-is-everything?u=76281980&t=93)** the space available. If we position a box absolutely on a page, it will be placed in the top left-hand corner of the viewport and we can use top, right, bottom, left, and zed-index to further specify its position. If the box lives inside another box that has its position set to something other than static, it will be positioned relative to the top left corner of that containing box. Absolute positioning is typically used to do things like place text on top of an image or lock a specific element to the bottom of another larger ancestor container. Position fixed works much like position absolute with one major difference, that the position is relative to the viewport. This means fixed items with top and left set to 2ems will always appear 2ems from the top left corner, no matter where you are in the document. So as you scroll up and down, it remains fixed. The box is literally fixed to the viewport. This leaves us with position sticky, which at present, has limited browser support. The idea of sticky is that the element will behave like an absolutely positioned element until it hits the edges of the viewport, at which point its behavior changes to that of a fixed position element. However, until better browser support is provided for this property value, we have to turn to [[JavaScript]] to produce this particular effect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[Microsoft Word|Word]] (1), [[JavaScript]] (1)
> **Env Vars:** html (2), css (1), aka (1)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll up (1)
> **Prerequisites:** set up (1)
> **Speakers:** - when (1)

#### [Floating and clearing content](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/floating-and-clearing-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/floating-and-clearing-content?u=76281980&t=1)** - Positioning content relative to its original position, ancestral container, or the viewport is all well and good, but if you want to truly lay out and design a document we need to be able to place boxes next to one another. In traditional CSS, this is done using the float property. Using the float property, we can visually float a box to the left or right allowing for the adjacent content to fill in the newly available space. In traditional printing this is equivalent to text wrapping, but in [[Web Design]] we often use the float property to position multiple boxes in a layout grid. Using the float property is both straightforward and confounding due to its effect on other content. If you float an element, say an image, left and set its width to 50%, the remaining 50% of the space will be filled with the adjacent content. In this situation, the floated box appears on top of the top left corner of the adjacent box and the content is moved out of the way by the float property. If we want two equal adjacent boxes, we can choose to float them both to the left or float one left and one right. The challenge appears when a floated element interacts with another block level element in an unexpected way. Say for example that you float an image to the left and want to display a heading next to it. Depending on how that heading is set up, it may clear left, meaning it can't have any floated content to the left of it. This would push the heading down below the floated item.
>
> **[1:36](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/floating-and-clearing-content?u=76281980&t=96)** This could be something you want or it could be a mistake. Knowing how floats and clears work will help you find the right solution here and prevent confusion. All elements can be cleared left, right, or both and this will impact how they are displayed next to floated items. If they're cleared, they appear above or below. If they're not cleared, they appear adjacent. Using floats and clears we can create advanced layouts and designs, but these properties have severe limitations. For example, it's challenging to create two equal height columns using floats and clears. It's also challenging to create a virtual column under a floated item. For these scenarios we have a better option, the aforementioned display flex property. Conveniently, flex also overrides floats and clears automatically. So, if you use flex and want to fall back for older browsers, you can combine it with floats and clear. The browser will use whichever model it's able to understand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Design]] (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Env Vars:** css (1)
> **Prerequisites:** set up (1)
> **Speakers:** - positioning (1)

#### [Using the clearfix](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/using-the-clearfix?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/using-the-clearfix?u=76281980&t=0)** - [Instructor] We can't talk about floating and clearing without talking about the clearfix. This requires a bit of background. Let's say you have a box, and within that box, you have another two boxes, each filled with content. When all the boxes are displayed as normal, the browser understands that the size of the containing box must be at least the size of the two contained boxes combined. The problem arises when we float the contained boxes. When a box is floated, the browser is no longer able to automatically determine the height of the contained boxes. As a result, the containing box collapses down to the height of whatever non-floated content it contains. This is a point of endless strife for new web designers, and unless you know what's going on, it can be quite frustrating. So let's pick the problem apart and find a workable solution. What's happening here is that the floated boxes are taken out of the normal flow of the content, and for this reason, the containing box no longer has a height reference for the floated content. If we were to give the containing box a background color and a border color, you can see how when I float the contained box, the containing box collapses. To let the containing box know how tall the containing boxes are, we need to add some content directly after them. If I simply add a letter after the boxes, you can see the containing box regains its height, but this looks pretty weird. Another solution would be to add an empty div below the content, but this is poor semantics and brings presentational elements into our [[HTML]]. The current best solution is to employ what's known
>
> **[1:33](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/using-the-clearfix?u=76281980&t=93)** as a CSS clearfix. The clearfix uses the pseudo-elements before and after in combination with an empty content property to inject invisible content before and after floated boxes. To the browser, these invisible elements have a physical size, and must therefore be accounted for by growing the containing box to wrap around them. To the site viewer and in the HTML of the document, these invisible elements do not exist, and as a result we get a box sized correctly without any interfering content. Pretty clever, right? And here again, I need to point out that with flex, this is no longer an issue. Flexboxes know their height and the height of their contained elements and do not require a clearfix to work. In fact, in certain fringe situations, the clearfix may end up interfering with a flex because the invisible items will be treated as real items in the browser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Env Vars:** html (2), css (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Pseudo elements: Making the browser hallucinate](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/pseudo-elements-making-the-browser-hallucinate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/pseudo-elements-making-the-browser-hallucinate?u=76281980&t=0)** - [Instructor] Now that I've shown you the power of the clear fix, it's worth taking a moment to address the technology that makes this possible, pseudo elements. In CSS we have a long list of pseudo classes that allow us to target specific states of elements. These are classes like active, focus, hover, nth-child, and so on. These classes can be used to alter the display or behavior of all the content inside an element box. In contrast, pseudo elements allow us to apply style to a certain part of an element or document. Furthermore, these pseudo elements are regular CSS boxes an adhere to the CSS box model in the same way that other elements would. That gives us some pretty cool opportunities. The available pseudo elements that we have are before, after, first-letter, first-line, selection, and the pretty much unsupported backdrop. The four that are well supported are used for different things and can be quite useful. Before and after are used together with a content property to add cosmetic content before or after an element. As an example, you can use before and after to add fancy quotation marks before and after a block quote. The quotation marks do not exist in the [[HTML]] markup and are therefore not available to be selected in the browser, but they are displayed. Because these quotation marks are surrounded by their own boxes, we can use all standard CSS properties to change them to fit our needs.
>
> **[1:34](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/pseudo-elements-making-the-browser-hallucinate?u=76281980&t=94)** First-letter targets the first letter of an element allowing us to apply custom styling to just that first letter. The most obvious use of this pseudo element is CSS only drop caps. Again, because the first letter is surrounded by its own box we can use all standard CSS properties to change it to fit our needs. First-line works like first-letter, but targets the entire first line of the element. This could be used to highlight the first line by making it bold, increasing the font size, or changing the color. And, in case you're wondering, if you want to target the first item of a series, let's say the first paragraph of an article, you can do so using the pseudo selector, first of type. The fourth pseudo element is one that's quickly becoming more popular due to how people share longer quotes on social media through images. Selection allows us to use CSS to style the appearance of selected or highlighted items in the browser. It's important to note that for this particular pseudo element only color, background color, [[Cursor]], outline, text decoration, text emphasis color, and text shadow can be used to alter its appearance. For support in Firefox you also need to add the dash moz dash prefix.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** css (7), html (1)
> **Tools:** firefox (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 4. Dessert: The Brave New World of Layouts

[↑ Back to Table of Contents](#table-of-contents)

#### [Modern layout modules](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/modern-layout-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/modern-layout-modules?u=76281980&t=1)** - [Instructor] In the time since I first recorded this course, the web, and especially web layouts, have evolved. So let's catch up with the latest in modern layout modules and how they relate to the box model. Short version, as you've learned through this course so far, web layouts were always based on a vertical, single-column layout where each box stacked on top of the next box, and anytime you wanted to put one thing next to another thing, we had to either float the box or do some sort of hack involving [[JavaScript]]. This is no longer the case thanks to two powerful new layout modules, flex and grid, and now you're able to use float, flex, and grid in combination to create flexible, responsive, advanced layouts. Now, here's a quick breakdown to help you get your bearings. Float is for floating content within its current context. Think floating an image to the left or right and letting the surrounding content float up and fill in the available space. So here in my example, I have a block quote and a paragraph that are both sitting inside the same wrapper. So inside the same context. If I now target this block quote with a class floated quote and apply float right to it, you'll see the block quote floats up to the right-hand side and the remaining content in the same context will float up to the left and underneath to fill in the available space. I can now move this block quote to the left-hand side by saying float left. Save, and it floats over to the left
>
> **[1:33](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/modern-layout-modules?u=76281980&t=93)** and the remaining content floats over to the right. So as you can see, the box model is still in effect. We have a box here and we have a box around everything. But because we are floating content within its current context, this content over here doesn't look like a box, but in reality it is. It's just accommodating for this floated box within the same context. Flex is for laying out content across one dimension, either horizontally or vertically, with or without wrapping, by flexing the containing box to fit the items within and give them appropriate space. Here in my example, I have a container that wraps around three elements, a red one, a yellow one, and a blue one, and right now they're stacked vertically, one box on top of the other, as is default. Now I can target this flex container in the CSS and set its display property to flex. Save that and you'll see the display of this container changes dramatically, and so does the display of the items within. What's happening is we now created a flex container that wraps around these items. The flex container will say I am flexible and so are the items within me, so I'm going to give each of the items as much space as they need to fit their intrinsic size, meaning what's inside each of these items defines how big they are and what the layout ends up looking like. So that's why the biggest item with the most content takes up more space than the smallest item with less content. You'll also notice a flex container
>
> **[3:05](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/modern-layout-modules?u=76281980&t=185)** automatically produces same height columns out of the box. Previously, this was almost impossible to achieve and you had to use JavaScript, but now simply setting display flex gives you equal height columns out of the box. Finally, grid is for laying out content across two dimensions, both horizontally and vertically, by defining a grid and placing items within it. In this example, I have five items that are sitting inside a container that I can target using the class grid container. Now, if I set its display property to grid and define grid template columns, meaning I set up how many lines, vertical lines I want inside my grid and tell the browser to just distribute the items automatically, we end up with a grid. And here this grid has the five items where the second item has been declared to take up two rows instead of one row. So here we have this dynamic, responsive layout that looks like a grid, and this can be used to create any type of two-dimensional grid and any type of two-dimensional layout you want. Now that you have your bearings, let's take a closer look at flex and grid.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **Env Vars:** css (1)
> **Exercise Files:** template (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Flex: Content-based layouts](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/flex-content-based-layouts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/flex-content-based-layouts?u=76281980&t=1)** - [Instructor] Flex, also known as flex box is a content first or content out layout module in CSS, which is applied to a parent container, called the flex container, and affects both this flex container and its immediate children called flex items. It works like this, in my browser, I have an unordered list with some list items, this is a standard navigation menu, you can see it over here, now I want to turn the unordered list into a flex container, I do that by targeting the container in CSS in this setting display flex. This creates a new flex container around the child items, which are now flex items, and each of these flex items are given an equal share of the available space based on their intrinsic size. You'll notice that some of these items have more content in them, so they're taking up more space, and some of the items are taller than other items, so in this case we have this standards and such item which is two lines instead of one, and the flex container accommodates all of this and creates equal height columns along the way. This is because the flex container sizes itself to fit its children and ensures all children are laid out in a consistent manner. The result in this most basic case is a horizontal list of child items and we get equal height columns, something which is pretty much impossible to achieve prior to flex. Horizontal menus become incredibly easy to create. Now the flex module also introduces a whole slew of other new layout features to CSS
>
> **[1:33](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/flex-content-based-layouts?u=76281980&t=93)** including proper, horizontal, and vertical alignment based on layout, rather than text alignment. I'ma show you what I mean. In this example I have a large view with a single card in it. Now if I grab the main body element here, you'll see that the body element has set its height to 100VH, meaning the body element takes up the entire vertical space. If I now set the body element to display flex, and then set justify content to center, it will automatically center align the content along the main axis, so that's normally the horizontal axis, and as you can see, the card now centers itself horizontally, then if I set align items to center as well, I'll align the items across the vertical axis, so now the card sits vertically in the center as well. If you ever try to do vertical centering before using CSS, you'll know it's impossible, you'll have to use [[Java]] script to calculate the viewport height and all that, no longer necessary. Flex box, or flex, allows you to vertically align content. Finally, if you have a long list of items, say a navigation menu like you see here, you can tell the flex container to wrap these items if there isn't enough space to fit them all. You see, out of the box, if I resize this window, there isn't enough space to fit all of the items, and since the flex container hasn't been told to wrap, we have to scroll sideways, however, if I go to the flex container and I add a new properties called
>
> **[3:08](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/flex-content-based-layouts?u=76281980&t=188)** flex wrap and set it to wrap you'll see now the items will naturally wrap depending on the available space. So we get this nice, dynamic, responsive display that will always accommodate the items inside the flex container.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Env Vars:** css (4)
> **Definitions:** is a  (3), known as (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Flex in depth](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/flex-in-depth?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/flex-in-depth?u=76281980&t=1)** - [Instructor] Flex is an advanced layout module and we have entire courses dedicated to showing you how to use it in-depth. Even so, I want to show you some key features and browser tools, which will help you explore the Flex Module and how it relates to the box model. As of this recording, Firefox has the best developer tools to visualize and work with both Flex and Grid, so, that's the browser I'll be using. When you encounter a flex container, like the navigation menu up here or the three cards below, you'll notice it's highlighted as a flex container in the [[HTML]] Inspector and in the CSS Inspector and under the layout panel, you'll find flex container is populated, any time you select a flex container, from here you can activate a visual indicator, either by clicking the toggle under the layout or just by clicking on the flex identifier in the HTML Inspector and what you get is a visualization of the box model applied to the flex container and it's children right in the browser. So, here we can see that we have a flex container and there's an available space that's highlighted with this raster pattern on the right-hand side, from here, we can now start playing around with the various flex layout properties, these properties alone, allow you to do a lot of things that you could not do before, for example, if you have a navigation menu like this in the form of an unordered list, you can now change it's alignment and display by changing the justify-content property alone. So, if I go to breadcrumbs ul, select flex here, hit Enter and type in justify-content,
>
> **[1:37](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/flex-in-depth?u=76281980&t=97)** I can now justify the content, meaning change how the available space is distributed and here we have a long list of options, I can center align it by setting justify-content to center and now you see the available space is distributed evenly on the left and right-hand side. I can set it to end, meaning I'm right aligning the menu, flex-end does the same thing, flex-start brings it back to the center and at the bottom here, you'll see we have options like space-around, which distributes the available space evenly around each item. So, we have one space here and then one space here and then another one next to it and so on, then we have space-between, which distributes the available space evenly between the items and finally, space-evenly, which will evenly display the contents, now there's an even space on all sides. Combined, these different justify-content options gives you new display modes that previously were pretty much impossible to achieve using pure CSS.
>
> **[2:41](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/flex-in-depth?u=76281980&t=161)** We also have align-items, which aligns items inside the flex container, along the cross axis, this is the vertical axis in most cases. If I go into breadcrumbs ul again and say align-items, again, I get a long list of options, so the default here is normal but if I change it to baseline, the items will be aligned along the baseline of the text content inside each item, if I set it to center, they'll be center-aligned, if I set it to end, they'll be end-aligned, so you can see here, we can create all sorts of interesting layouts by simply changing the align-items option. Furthermore, you can change the flex direction of any flex container from the default, which is row to column, which gives you a vertical column, column-reverse, which reverses the content within the column, so the first item appears last and the last item appears first and you can do the same with row, so, you can have row, which is just horizontal, left to right or row-reverse, which is right to left and right aligned. So, here you have a long list of different options to play with and that's not all, there's an even more powerful feature hiding in plain sight here. Flex honors the current text direction. My default text direction is left to right, since I type in English but if I change the text direction of my browser to right to left, as many languages do, the flex items automatically display right to left. I can show you by going up here in the HTML Inspector
>
> **[4:17](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/flex-in-depth?u=76281980&t=257)** and saying html "en" and then dir="rlt" and now you'll see the entire layout changes from left to right, to right to left and the order of the flex items also change, first card, second card, third card, first item, second, third and so on and all of the properties that we played around with, will now apply in the reverse order, so right to left, meaning you no longer have to create custom styles for right to left displays. This is really important if you design multilingual sites and one of the languages is right to left because now you can use flexbox and you don't need to create separate layout styles. Of course, we've barely scratched a surface of what Flex can do here but you get the idea. Flex changes how the box model works to accommodate the contents within the flex items, allowing you to create content-based or content-out layouts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4)
> **Env Vars:** html (3), css (2)
> **UI Navigation:** toggle (1), go to (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Tools:** firefox (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Grid: Layout-based layouts](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/grid-layout-based-layouts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/grid-layout-based-layouts?u=76281980&t=1)** - [Instructor] While flex creates layouts based on the size of the flex items, the grid layout module creates layouts by applying a grid to a container and placing its immediate child items within that grid. This is an entirely new way of thinking about layouts on the web, which relates more to classic print layouts than what we think of as web layouts. That said, the grid layout module is designed for the responsive web and it's a great tool for creating advanced responsive layouts. So how do grid layouts work? Well, first, you need a container with a set of child items. So, here, I have this div with a class grid container, and it has a series of first-level children. Now, if I take grid container and I set its display property to grid, I turn it into a grid container, and the first-level children become grid items. Out of the box, we now have a single-column grid with however many rows are necessary to fill in the available first-level children. Next, I need to declare however many grid lines I want to create columns. And if I want to, I can also declare grid rows to define the size of the rows. I do this using the grid template columns property. And, here, I've set up three equal-width columns each denoted with 1fr, 1fr, and 1fr, which is one fraction of the available space. As a result, we get a grid with three columns and two rows, because we have five items. So, as you can see, the rows are added automatically by the browser.
>
> **[1:32](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/grid-layout-based-layouts?u=76281980&t=92)** Once the grid is created, the browser will automatically place items within that grid from top left to bottom right. And from here, you can then decide how you want these items to be displayed, because you can place them anywhere within the grid you want to. Using the developer tools in Firefox, we can now visualize the grid to see the grid lines. It's done the same way we did with Flexbox. You can either click on the grid icon up here in the [[HTML]] inspector or you can go down here to layouts, and under grid, click the overlay grid option. This shows you the grid in its entirety, so you can see this purple line they show us here. That's the grid container, and then, here, we have the different grid lines that are defined. I can also toggle on display line numbers, which gives us the line numbers for each of the grid items. I can display area names, but there are currently no area names. And I can extend lines indefinitely if I want to do some layout work around the grid. What you see here is the box model still applies to everything, but in a new and very different way. The grid container is a box, and each of the child items is a box, but the box wrapping the grid items is now restrained by the grid lines. So you can see they're expanding to fill out the available space within each of the grid cells. This is what I mean when I say grid is layout in. Unlike with flex where each item decides its own size, in grid, the layout of the grid is impulsed on the items, and they have to conform to the space they are given.
>
> **[3:08](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/grid-layout-based-layouts?u=76281980&t=188)** Of course, it's a bit more complicated than that, but that's the general idea.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** click on (1), toggle (1)
> **Env Vars:** html (1)
> **Tools:** firefox (1)
> **Exercise Files:** template (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Grid in depth](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/grid-in-depth?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/grid-in-depth?u=76281980&t=1)** - [Instructor] Grid is a complex layout module with a lot of advanced features, and we have several courses that explore them in detail. In this course, I want to give you a quick tour of some of the most notable features and how you can take advantage of them immediately. In this example, I've taken a flex box example with the cards and converted it to a grid layout. So, these cards are now in a grid layout. Looks almost the same, but it works quite differently , and you'll see that you have a lot more control than you did with flex. First off, you may have noticed previously I use this FR units to define the grid lines of my grid container. The FR unit denotes a fraction of the available space. So if I go in here to grid template columns, and I say one FR, two FR. One FR you will see each of the grid lines that I've created will take up one fraction of the space, then two fractions of the space, then one fraction of the space. And this is completely dynamic based on what space is available. The cool thing is you can now mix units within your definition. So, I can say, 100 pixels. So that means the first column will have 100 pixels of width all the time. Then the second column will be one FR, takes up one fraction of the available space. And the third column is 20%. So that will be 20% of the available space. And here you see the power of the FR unit, the FR unit will just take whatever space is available, and divide it between all the items that have an FR unit applied, and just fill in the grid,
>
> **[1:34](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/grid-in-depth?u=76281980&t=94)** so it looks decent however you do it. And this is incredibly powerful because you can now create layouts that are somewhat fixed, and somewhat flexible, using whatever units fits the best for your particular purpose. There are also some more advanced features that allow you to make truly flexible rows and columns. If you look again, at grid template columns here, you'll see I've used this min max function and I've declared min max 18 RAMs and one FR. That means each of these cards has a minimum width of 18 RAMs, that cannot be smaller than 18 RAMs. And if there's more space that can be however big they need to be to fill out the available space. I've combined min max with the repeat function, which allows me to tell the browser, Hey, just spin up however many columns that I tell you to, and then I use the auto fill keyword to tell the browser. Actually I want you to spin up however many columns are necessary and available to fill in the available space. As a result, I get a completely responsive grid, even though it's a grid. So if I resize the window here, you'll see when a card reduces his waist ,two below 18 rems, instead of getting squished. We now get a new row, and the cards suddenly take up more space that's because of this min max property here. And then as I scale down, eventually the grid will turn into a vertical Stack. That's because of this auto fill keyword, which tells the browser auto fill in however many columns are available based on the available space.
>
> **[3:11](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/grid-in-depth?u=76281980&t=191)** Cool, but there's more. If we go over to another example, you'll see here I've created a standard web layout using grid. If I activate the grid , here you'll see I've defined both template roles. Those are the horizontal lines, and template columns. Those are the vertical lines to create a fairly advanced grid and then I've placed items within that grid. Now, if we just let the browser place these items automatically, they would go 1234. From the top, and the layout would not look like this at all. When you work with grid, you can do one of two things. You can either place items by targeting grid lines, and you can do that either by defining, targeting the grid line numbers or by naming the lines. Or you can use something called grid areas. The grid areas are defined using the grid template areas property, and they allow you to quite literally draw out different areas within your grid, and then please contents within those areas. So here you can see we have a masthead area at the top, a main area over here on the main section, a side bar area, first twin and second twin area, and finally a photo area. And all of these are defined here in grid template areas. Now I can place contents within any one of these areas without changing the [[HTML]] in the process. So for example, if I want to move the sidebar from the sidebar area. Down to the footer area, all they have to do is find the sidebar elements here. Find the declaration for grid area so we say sidebar grid area set a side bar. So I'll set it to footer instead.
>
> **[4:44](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/grid-in-depth?u=76281980&t=284)** And now the sidebar will appear in the footer, but there's the footer element on top. So I also need to remove the footer element. So I got to call upon here, fine grid area, and set that the sidebar. Any now you can see even though I didn't change the HTML and anybody The footer now appears in the sidebar area, and the sidebar appears in the footer area. And this is the true magic of grid layouts. With grid layouts, you're no longer tied to the content order or content layout. You can change your layout in pure CSS based on the available space and create some truly dynamic responsive layouts on the process. Now, if you watch this and you think Okay, so we have these three different layout modules, float, flex, and grid, which one should I use? which one is best? The answer is, grid flex, and float are meant to be used together. It's perfectly acceptable and even advisable to have a grid layout with the flex container inside, and maybe a floated item inside that, all at the same time. Each of these has its purpose and use together like create prematch, whatever layout you can think of.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Exercise Files:** template (6)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** html (2), css (1)
> **UI Navigation:** in the sidebar (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 5. Nightcap

[↑ Back to Table of Contents](#table-of-contents)

#### [Shapes](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/shapes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/shapes?u=76281980&t=1)** - [Instructor] This entire course is about the CSS Box Model, and everything we've talked about has been centered around boxes, squares and rectangles with nice square corners. What if I told you the box doesn't have to be a box anymore? That the box part of the box model is evolving into something more flexible. That's what we get the shape-outside property. To see how this works, we need to activate the Firefox developer tools because here we can actually work with shape-outside in the browser. In this document, I have some paragraphs and a div with a glyph inside it and it's floated to the left. Right now, the element floated to the left is a box, so everything wrapping around it has a hard vertical and horizontal border, but look what happens if I apply the shape-outside circle property to the floated element. Now the content around the floated element acts as if the box is a circle because it is, and if we activate the developer tool here, this polygon visualizer, you can actually see the circle in the browser, and you also get these toggles where you can change the shape of the circle, so I can make it smaller, I can make it larger, I can change its center point relative to the bounding box, and what you see here are two things. First of all, the box is still there, and when you scale the radius up, you can see it. What's happening here is, the box now functions as a bounding box for the elements, the outer limits of the element,
>
> **[1:33](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/shapes?u=76281980&t=93)** meaning as long as the circle is smaller than the bounding box, it'll be applied, but if it's larger than the bounding box, as you can see here, then the floating content around the floated element will align with the bounding box. The second thing you see is, as you make changes using the developer tools here, the code changes over here in the code inspector, so that means you can actually use the developer tools to figure out exactly how you want to apply these shape-outside properties, because as you'll see when we start adding different types of shapes, it can be really hard to figure out exactly how those shapes apply in real life just by typing out the code, especially if you're building an advanced polygon, because as it turns out, circle is not the only shape-outside you can define. If I turn off circle, I can turn off shape-outside ellipse instead. Now, and ellipse is an elongated circle, and the elongated circle will be shaped by the bounding box. So right now my bounding box is 180 by 180, a square, so therefore we get a perfect circle, but if I change it to something like 380 by 180, you'll see here we have an ellipses. Now, the developer tools for the ellipses aren't as good, so if I click here, you'll see we just get this dot and we can move the center point of the ellipses, but you can't augment the ellipses in any other way, so if you want to change the ellipses, you have to change the overall bounding box up here. We also have shape-outside inset.
>
> **[3:06](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/shapes?u=76281980&t=186)** Here, you define inset and set a value, and what happens is you tell the browser, hey, I know there's a bounding box here, but ignore the bounding box entirely and use this inset size as the bounding box instead. So basically I'm saying, you're allowed to float content inside my bounding box right now, you can see the bounding box here, and then I'll just define a space within the bounding box that you can't touch. So as a result, you get text overflow inside a box, which can produce some really interesting results, especially if you use this with something like an image or a graphic. Finally, we have the property I think is most interesting, shape-outside polygon. Here you use a comma separated list of X Y coordinates to define points inside a polygon. If I activate the display tool here, you can see the polygon in action, and here I can drag the points to shape the polygon in any way I want, so for example, if I want to create a shape that looks like the T here, what I need to do is just add a bunch of new points, and I do that by going into the code, in this CSS inspector, and just adding points, so X and Y coordinates, and it doesn't actually matter where I set these coordinates because I can use the developer tool to pull them to where I want them to be.
>
> **[4:39](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/shapes?u=76281980&t=279)** And then we can get the exact shape around we want. Ah, there's one more piece to this, there's also a new property called shape-margin which, as it sounds, applies a margin outside the custom shape. So between shape-outside and shape-margin, you can now shape your boxes to pretty much any shape you want. Now, there is caveat here, both shape-outside and shape-margin are still cutting-edge CSS, so some browsers don't support them. The good news is, if a browser doesn't support these properties, it just falls back to the box, so the very worse thing that can happen if you use shape-outside and shape-margin is people will see text aligned to straight lines and the box instead of the fancy curves or polygons you created. So, the box is still a box, except sometimes the box has other interesting shapes.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Env Vars:** css (3)
> **Definitions:** is a  (2), is an  (1)
> **Tools:** firefox (1)
> **Analogies:** for example (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### [Going further with CSS and web standards](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/going-further-with-css-and-web-standards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/making-sense-of-the-css-box-model-2/going-further-with-css-and-web-standards?u=76281980&t=0)** - [Morten] As we come to the end of this course, I hope you have a new found appreciation and understanding of the CSS box model and all it can do for you. Now that you see the web for what it is, a patchwork of boxes, and you know how to manipulate those boxes and their contents to your liking, I'm sure you're itching to dive deeper into the world of CSS and [[Web Design]]. To this end, we have a long list of great courses right here in the [Lynda.com](https://Lynda.com) library. In particular, I would recommend checking out James Williamson's epic CSS Fundamentals and CSS: Selectors courses that will teach you everything you ever needed to know about CSS itself. And while you're at it, you should also check out Val Head's CSS: Animations course and let James teach you about CSS: Frameworks and Grids. Finally, I love hearing from you about how you used what you've learned in my courses. If you have a question, rant or rave, or just want to talk about web design, find me on Twitter at Morten, 'cause that's my name, where I talk about web design, [[WordPress]], music, philosophy, and post terrible photos of random things. Now all there's left for me to say is (speaking foreign language). Make friends with the CSS box model and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Design]] (3), [[WordPress]] (1)
> **Env Vars:** css (8)
> **CLI Commands:** find (1), make (1)
> **URLs:** [lynda.com](https://lynda.com) (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [morten] (1)


## Instructor

- [[Morten Rand-Hendriksen]]

## Skills Covered

- Cascading Style Sheets (CSS)

## Path Context

### In [[Getting Started with WordPress]]
← [[CSS Essential Training (2023)]] | **4 of 10** | [[HTML Essential Training]] →

## Appears In

- [[Getting Started with WordPress]]

## Related Courses

_Courses sharing skills:_

- [[React- Building Styles with CSS Modules]] — Cascading Style Sheets (CSS)
- [[Cutting-Edge CSS]] — Cascading Style Sheets (CSS)
- [[Building Great Forms with HTML and CSS]] — Cascading Style Sheets (CSS)
- [[HTML & CSS- Creating Forms]] — Cascading Style Sheets (CSS)
- [[HTML and CSS- Linking]] — Cascading Style Sheets (CSS)

---

[↑ Back to top](#)