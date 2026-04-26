---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: css-inheritance-specificity-and-the-cascade
url: "https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade"
duration_minutes: 96
duration: 1h 36m
level: Intermediate
updated: 6/16/2022
learners: 8181
skills:
  - Cascading Style Sheets (CSS)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGwLxjQhKixlQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655150232771?e=2147483647&amp;v=beta&amp;t=Zch2qczrQv8q2Qy1SjsXWdPkuZPO49bBCecCs_ybzP0"
linkedin_topic: Web Development
learning_paths:
  - '[[Learn CSS]]'
prev_courses:
  - '[[CSS- Selectors]]'
next_courses:
  - '[[CSS- Images]]'
path_nav: '[{"path":"Learn CSS","position":4,"total":12,"prev":"CSS- Selectors","next":"CSS- Images"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/cascading-style-sheets-css
status: not-started
created: 2026-04-21
---

![CSS: Inheritance, Specificity, and the Cascade](https://media.licdn.com/dms/image/v2/C4E0DAQGwLxjQhKixlQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655150232771?e=2147483647&amp;v=beta&amp;t=Zch2qczrQv8q2Qy1SjsXWdPkuZPO49bBCecCs_ybzP0)

# CSS: Inheritance, Specificity, and the Cascade

> CSS properties? Easy. CSS layout? Sure. Figuring out which part of a CSS stylesheet applies to a document, especially when there are multiple parts that might apply? Much harder. In this course, Jen Kramer explains that, yes, CSS has powerful rules for addressing these situations, and helps you figure out how to efficiently combine styles to make your website look exactly how you want it to look. 

> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade) | 1h 36m | Intermediate | 8K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Jen Kramer]]

## Resources

- Exercise files available

## Skills Covered

- Cascading Style Sheets (CSS)

## Table of Contents

### Introduction

#### The big C in CSS
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=0)** - [Jen] CSS, Cascading Style Sheets.
>
> **[0:05](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=5)** The cascade is so important to their functioning, it's right in the name.
>
> **[0:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=9)** However, the cascade isn't straightforward to understand, leading to many developers insisting that CSS is broken or unpredictable.
>
> **[0:18](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=18)** In fact, the cascade is very predictable once you understand exactly what's happening and why.
>
> **[0:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=25)** There are three parts to the cascade that work together to determine what style is displayed on a webpage.
>
> **[0:32](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=32)** These include inheritance, specificity, and the cascade itself.
>
> **[0:37](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=37)** Frequently, these concepts are rolled together and called the cascade or sometimes they're all called specificity.
>
> **[0:43](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=43)** However, there are three independent concepts that work together to style your content.
>
> **[0:49](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=49)** In this course, we'll dig into each concept as independently as we can.
>
> **[0:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=53)** After a CSS terminology review, we'll start by looking at inheritance, including what properties inherit and which do not.
>
> **[1:01](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=61)** We'll also look at manipulating inheritance using the values of inherent, revert, and unset.
>
> **[1:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=67)** And we'll explore the all property.
>
> **[1:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=71)** Next, we'll move into specificity.
>
> **[1:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=74)** This concept is entwined with CSS selectors, which are covered in detail in another course.
>
> **[1:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=80)** Specificity decides which style rule is more heavily weighted to be displayed on the page when styles are in conflict.
>
> **[1:28](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=88)** Finally, we'll move to the cascade itself, which focuses on the origin of styles from different style sheets as well as their weighting of normal or important.
>
> **[1:38](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=98)** We'll look at how the cascade works with specificity and inheritance to predictably identify the final styling for a given page.
>
> **[1:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=106)** I'm Jen Kramer and I've worked with and taught CSS since 2004, ever since it began to be well-supported in most browsers.
>
> **[1:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=117)** Inheritance, specificity, and the cascade are some of the most misunderstood concepts in CSS, as evidenced by all of the bang important declarations littered throughout CSS.
>
> **[2:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=129)** We can do better with a little study of this topic.
>
> **[2:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-big-c-in-css?u=76281980&t=131)** So if you're ready, let's get started with CSS: Inheritance, Specificity, and the Cascade.

> [!info]- Semantic Content
>
> **Env Vars:** css (8)
> **Code Keywords:** finally, (1), let (1)
> **Speakers:** - [jen] (1)

#### CSS terminology refresher
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=0)** - [Instructor] Before we start, let's review many of the CSS terms we'll use in this course.
>
> **[0:06](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=6)** Throughout this video, I'll refer to this bit of code.
>
> **[0:10](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=10)** This, the whole thing, everything you see here on your screen, is a CSS rule.
>
> **[0:16](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=16)** There are several parts to a rule, which I'll describe in a moment.
>
> **[0:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=20)** You will have many rules in your CSS document.
>
> **[0:24](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=24)** Their interaction is governed by inheritance, specificity, and the cascade.
>
> **[0:29](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=29)** Let's go through all of the parts of the rule in detail.
>
> **[0:33](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=33)** Container P is a selector.
>
> **[0:35](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=35)** Specifically, this is a descendent selector.
>
> **[0:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=39)** This is the pattern in our HTML to which we'll apply the styles as specified.
>
> **[0:45](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=45)** In this case, the pattern is for all paragraph elements descended from an element with a class of container.
>
> **[0:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=52)** Selectors are written from left to right, but they're read from right to left.
>
> **[0:59](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=59)** You can learn more about selectors in my course, "CSS Selectors," available in the library.
>
> **[1:06](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=66)** Next, we have a series of properties and values.
>
> **[1:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=71)** Font size and border are properties.
>
> **[1:15](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=75)** One rem and one pixel solid red are our values.
>
> **[1:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=81)** The property is always on the left side of the colon while the value is always on the right.
>
> **[1:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=87)** A single property value pair is called a declaration.
>
> **[1:32](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=92)** This rule has two declarations in it.
>
> **[1:35](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=95)** Declarations are separated by semicolons.
>
> **[1:38](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=98)** The last declaration is not required to have a semicolon, but it's a good practice to do it anyway.
>
> **[1:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=106)** Declarations are grouped in a declaration block.
>
> **[1:50](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=110)** This particular declaration block has two declarations.
>
> **[1:55](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=115)** One for font size and one for border, but you could have as few as one declaration or you could have dozens within the same block.
>
> **[2:04](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/css-terminology-refresher?u=76281980&t=124)** With these terms in mind, we're ready to talk about inheritance, specificity, and the cascade.

> [!info]- Semantic Content
>
> **Env Vars:** css (4), html (1)
> **Code Keywords:** let (2), this, (1), case, (1)
> **Definitions:** is a  (3), is called (1)
> **Prerequisites:** before we start (1), required to (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)


### 1. Understanding Inheritance

#### What is inheritance?
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=0)** - [Instructor] Inheritance is one of the most overlooked parts of CSS.
>
> **[0:04](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=4)** You use it all the time, but it's so seamless that you don't even think about it much until it breaks something that is.
>
> **[0:13](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=13)** All selectors have the option to inherit properties from their ancestors.
>
> **[0:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=17)** Inherit is a CSS property itself, which has certain default settings.
>
> **[0:22](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=22)** If you visit MDN and look up any property online, you'll see a formal definition table which indicates whether a property is inherited or not.
>
> **[0:31](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=31)** For example, on the left is the formal definition portion of the page for the font family which is an inherited property.
>
> **[0:40](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=40)** And on the right, we have the formal definition portion of the page for the padding property, which is not inherited.
>
> **[0:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=47)** Think of inheritance as a way of scoping properties.
>
> **[0:51](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=51)** You can scope your CSS to be global or local.
>
> **[0:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=54)** Inherited properties placed at the top of the document object model or DOM tend to be inherited as they go through the document.
>
> **[1:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=63)** For example, here is a declaration for the body element and we've declared that we have a fond family of Arial a line height of 1.5 and a color of a nice dark gray.
>
> **[1:16](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=76)** This particular set of styles will be inherited by all successive HTML elements which will all appear this exact same way but our scoping can also be local in nature.
>
> **[1:29](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=89)** For example, we may wish to override these settings for headings on our page.
>
> **[1:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=94)** And so here we have all of our headings spelled out separated by commas and we've set this to have a font family of Times and that would override the font family of Arial.
>
> **[1:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=107)** Notice that we haven't specified any font sizes.
>
> **[1:49](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=109)** Why is that?
>
> **[1:51](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=111)** Because font sizes are inherited from the browsers style sheet.
>
> **[1:55](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=115)** If we like them, we can keep them.
>
> **[1:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=117)** If not, we can override them easily with more specific declarations.
>
> **[2:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=122)** As a rule of thumb, properties having to do with text will generally inherit through the DOM.
>
> **[2:08](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=128)** However, properties having to do with the box model generally do not inherit.
>
> **[2:13](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=133)** That's a good thing.
>
> **[2:15](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=135)** Imagine if you had to put a border on the body element and that border inherited, what a mess that webpage would be.
>
> **[2:22](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=142)** Let's also consider order.
>
> **[2:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=145)** Remember there's a browser style sheet that sets this document to have Times as the default font.
>
> **[2:31](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=151)** That's overridden here with the body element where we set the page to Arial.
>
> **[2:36](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=156)** Finally, in the h1 we set the font back to Times.
>
> **[2:40](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=160)** What would happen if we moved the h1 to the top of the document?
>
> **[2:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=164)** What do you think would happen?
>
> **[2:45](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=165)** Will the h1 appear in the Serif or the Sans Serif font?
>
> **[2:50](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=170)** It would actually appear in the Serif font and that's because the h1 is closer to the affected text, which is part of the CSS calculation process.
>
> **[2:59](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=179)** In this case, specifically inheritance.
>
> **[3:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=182)** The browser would go from Times to Arial, back to Times which is closest to the affected text.
>
> **[3:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-inheritance?u=76281980&t=189)** Let's dig further into some of these concepts because inheritance isn't necessarily as straightforward as it seems sometimes.

> [!info]- Semantic Content
>
> **Env Vars:** css (4), dom (2), mdn (1), html (1)
> **Code Keywords:** override (3), let (2), finally, (1), case, (1)
> **Analogies:** for example (3), imagine (1)
> **Definitions:** is a  (2), is an  (1)
> **Versions:** 1.5 (1)
> **Documentation:** mdn (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### Examples of inheritance
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=0)** - [Instructor] Now that you know what inheritance is, let's look at some simple examples.
>
> **[0:04](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=4)** So I am here inside of CodePen.
>
> **[0:06](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=6)** And in your exercise files, you'll find a link to the starting Pen.
>
> **[0:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=11)** And you will find that I have a very simple markup going on here inside of my HTML.
>
> **[0:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=17)** I have a div element that goes all the way around two paragraphs.
>
> **[0:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=21)** That div has been assigned an ID of div-id and a class of div-class.
>
> **[0:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=27)** Then we have two paragraphs.
>
> **[0:28](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=28)** Inside of the first paragraph, we have a link and a strong element.
>
> **[0:33](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=33)** And inside of the second paragraph, we have an em element.
>
> **[0:38](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=38)** That paragraph, that second paragraph, also has a class of p-class and an ID of p-id.
>
> **[0:45](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=45)** So the question is... Let's look at the words skincare regimen, right here on the screen.
>
> **[0:50](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=50)** They are currently showing in italic, which is the default browser presentation for an em element, the emphasized element.
>
> **[0:59](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=59)** And if you'll notice in our CSS, we have only one style rule here, and that is the div style.
>
> **[1:08](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=68)** So in other words, we have declared that our font family is going to be Barlow, and our line height is going to be 1.5.
>
> **[1:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=74)** And we did that well outside of any of these paragraphs or em elements.
>
> **[1:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=81)** So we can of course continue to style our div here.
>
> **[1:26](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=86)** For example, we could set our color to something like 648fff, which is a lovely shade of blue.
>
> **[1:36](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=96)** And obviously, the color of our text is going to change.
>
> **[1:40](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=100)** These are all various types of fonts and typography properties that we're working with here, and they all inherit, which is why we see the styling that we do.
>
> **[1:50](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=110)** So what would happen if I decide that I would like to change my styling a little bit.
>
> **[1:56](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=116)** I'm going to set my paragraphs to be something different.
>
> **[2:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=120)** So if I set my paragraphs to have a color... And let's just hide this away here for a moment Let's set our color to be dc267f.
>
> **[2:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=137)** So I am going to ask you before I reveal here what's going on, what color is the text?
>
> **[2:24](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=144)** Is it going to be the blue that we have here?
>
> **[2:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=147)** Or is it going to be this hot pink that I just specified here for the paragraph and why?
>
> **[2:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=154)** Let's do the big reveal?
>
> **[2:36](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=156)** And, oh my goodness.
>
> **[2:38](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=158)** Look at that.
>
> **[2:38](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=158)** It is hot pink text.
>
> **[2:41](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=161)** Why is that?
>
> **[2:42](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=162)** Well, some of you may say, "Well, hot pink comes later in our style sheet, and so therefore the text is going to be pink."
>
> **[2:49](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=169)** So if I were to rearrange this, if I were to move my paragraph style up above the div style, and when I paste here in just a moment, what color is this text going to be, blue or pink?
>
> **[3:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=183)** Make your choice.
>
> **[3:05](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=185)** And I'm going to paste this in.
>
> **[3:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=187)** And it is still pink, even though it comes first in the document, why is that?
>
> **[3:12](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=192)** This is inheritance in action.
>
> **[3:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=194)** So where we started with our div here at the top of the page, we said it was blue.
>
> **[3:19](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=199)** Then we go to our paragraph, which is closer to that affected text.
>
> **[3:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=203)** And now, we're saying it is going to be pink.
>
> **[3:26](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=206)** Now, some of you may be saying, "Oh, well, that's all well and good."
>
> **[3:29](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=209)** We have two HTML elements or type selectors that we're working with here.
>
> **[3:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=214)** What if we switch this up?
>
> **[3:36](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=216)** What if I change my div here to an ID instead?
>
> **[3:40](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=220)** So let's change this.
>
> **[3:42](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=222)** What is going to happen to color of the text?
>
> **[3:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=224)** Is it going to be pink or is it going to be blue?
>
> **[3:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=227)** Make your guess.
>
> **[3:49](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=229)** So we're going to change this to be div-id.
>
> **[3:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=237)** And it is still pink text, even though it is just a lowly type selector for the paragraph, even though it comes first in the document, that paragraph is still closer to the affected text, and so therefore it will remain pink.
>
> **[4:13](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=253)** So if we continue on here, we could of course continue to style.
>
> **[4:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=257)** Perhaps we want this em element to be styled in a different way.
>
> **[4:22](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=262)** Let's say that we would like it to have a background color of orange, ffb000.
>
> **[4:36](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=276)** And we'll give it a color of black, 000.
>
> **[4:42](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=282)** And we've put that later here in the document still so it is turning our emphasized element here to have this orange background and this black text rather than the pink that we had before.
>
> **[4:56](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=296)** What if, once again, we move this em element up to the very top of the document.
>
> **[5:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=303)** What is going to happen and why?
>
> **[5:06](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=306)** Take your bets.
>
> **[5:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=307)** And there we go.
>
> **[5:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=309)** So it is in fact going to stay exactly the same as it did before.
>
> **[5:15](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=315)** And that is because, once again, we're still working with inheritance here.
>
> **[5:19](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=319)** The affected text, which is the word skincare regimen inside of the em tag, those are going to take on those colors that are declared for them a little bit sooner in our inheritance properties series here.
>
> **[5:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=334)** And things from which they're inheriting, some of that comes through.
>
> **[5:38](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=338)** The line height of 1.5 is coming through, that font family of Barlow is coming through.
>
> **[5:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=344)** Those are inherited.
>
> **[5:45](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=345)** We have not overridden them with our paragraph or our em tag, nor are they specified in our browser default style sheet.
>
> **[5:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=352)** So that is why they are affected in this way.
>
> **[5:56](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=356)** Why is the link still blue?
>
> **[5:59](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=359)** Well, the link's still blue because that comes from the browser style sheet where links are specified to be blue and underlined.
>
> **[6:06](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=366)** But their font family isn't specified, so the font family is inherited from our div declaration, Barlow, but the color blue and the underline, that comes from our browser's default style sheet.
>
> **[6:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=380)** Finally, let me point out that it's good that some things don't inherit.
>
> **[6:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=383)** So here on my div, I'm going to add to this a border of four pixels solid blue, that same blue, 648fff.
>
> **[6:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=394)** So that we'll put a border on the div that is surrounding the two paragraphs here on the page.
>
> **[6:41](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=401)** And as you see, that border is not inherited.
>
> **[6:45](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=405)** If it was inherited, then we would wind up seeing borders around both paragraphs, borders around the links, borders around the strong, borders around the em element, but fortunately it is not.
>
> **[6:56](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=416)** Of course, border is one of the box model properties which are typically not inherited.
>
> **[7:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/examples-of-inheritance?u=76281980&t=422)** So hopefully, this gives you a sense of every day inheritance in a really simple example here and how that is going to play out in your own documents.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), continue (3), class. (1), this, (1), switch (1)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** html (2), css (1)
> **Versions:** 1.5 (2)
> **Definitions:** in other words (1), is a  (1)
> **Cross-References:** later in (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)

#### Controlling inheritance with inherit
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=0)** - [Instructor] We know that some properties inherit while other properties do not.
>
> **[0:06](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=6)** Is it possible to make properties inherit or is it possible to turn off the inheritance?
>
> **[0:12](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=12)** So here's my beginning code pen.
>
> **[0:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=14)** You'll find a link for this in your exercise files.
>
> **[0:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=17)** And the thing you should know as we get started is that inherit is a value, not a property.
>
> **[0:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=23)** So let's see how that works in our code pen.
>
> **[0:26](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=26)** And continuing here with our previous example, we put a border all the way around this div, that's right here on our div-id style.
>
> **[0:36](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=36)** We know that this border doesn't inherit, otherwise we'd have borders around all of those HTML elements.
>
> **[0:43](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=43)** But we can force that inheritance to happen.
>
> **[0:45](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=45)** So here on my paragraph, I could, for example say, border inherit and we will wind up with borders on our paragraphs.
>
> **[0:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=57)** Now that border property will be inherited from div-id.
>
> **[1:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=63)** That's because these paragraphs are children of that particular div.
>
> **[1:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=67)** So that's straightforward enough.
>
> **[1:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=69)** However, the inherit property is only going to work if the parent has that property.
>
> **[1:15](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=75)** So if I were to take border inherit and move it from the paragraph to the em, remember the em is inside of a paragraph and now my paragraph doesn't have a border on it, absolutely nothing happens.
>
> **[1:30](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=90)** And that's because the em element is trying to inherit from the paragraph.
>
> **[1:35](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=95)** The paragraph doesn't have a border on it and so the em inherits nothing.
>
> **[1:41](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=101)** But if I were to take that same border inherit and put it on the paragraph and put it on the em element, then we'll wind up getting the border around the em element that you might otherwise expect to see.
>
> **[1:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=117)** One more thing to remember is that this border property is a shorthand for border width, border style, and border color.
>
> **[2:06](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=126)** What if we want to keep the width and the color but change the style?
>
> **[2:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=131)** We can do that.
>
> **[2:13](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=133)** So instead of just saying border inherit here in other words, that is going to inherit exactly what comes from our div, four pixel solid blue.
>
> **[2:22](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=142)** Now I'm going to say my border-style will be dotted.
>
> **[2:29](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=149)** And so notice that my paragraphs now have a dotted style around them and that dotted style is what's inherited by the em element and this is happening because of course, border style comes second here inside of this paragraph declaration.
>
> **[2:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=166)** So in other words, we have our initial border inherit statement that is four pixels solid.
>
> **[2:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=173)** And then after that, we have our border style that is dotted instead.
>
> **[2:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=177)** If we reorder these, if I was to take border style dotted and put it before border inherit, we will now have solid borders around the paragraph in the em because the dotted comes first and the inherited properties of four pixels solid blue, that will override the dotted that we declared just before.
>
> **[3:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=201)** So that's a brief summary of how the inherit property works.
>
> **[3:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/controlling-inheritance-with-inherit?u=76281980&t=205)** It's a value that you assign to any property when you want that property to inherit the settings from the parent.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), in other words (2)
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** let (1), override (1)
> **Env Vars:** html (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Exploring initial, unset, revert, and all
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=0)** - [Instructor] We've seen the inherit value in action which allows styles to be inherited from a parent.
>
> **[0:06](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=6)** But what if we don't want inheritance to happen?
>
> **[0:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=9)** The issue here is how far back do you not want that inheritance to happen?
>
> **[0:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=14)** Parent, the grandparent, the browser style sheet, or even before that?
>
> **[0:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=20)** That's why there are different values to turn off inherited styling within a given property or set of properties.
>
> **[0:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=27)** So for this next series of examples, let's focus on the link in this document.
>
> **[0:33](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=33)** The link by default is blue and underlined.
>
> **[0:37](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=37)** And so we can of course, make changes to that.
>
> **[0:40](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=40)** I'm going to just scroll down to after the M style here and I'm going to add A and I'm going to set its color to be orange, fe6100.
>
> **[0:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=53)** And that will make our link orange.
>
> **[0:56](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=56)** When I roll my mouse over it, it's going to stay orange and underlined and that's because the A style here, styles all of the states of the link exactly the same by default.
>
> **[1:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=67)** So this is a great place to start exploring inheritance because it's easy to see the before and after of all of the various settings that we're about to explore.
>
> **[1:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=77)** And when I say all, I mean all.
>
> **[1:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=80)** Let's talk about all of these properties.
>
> **[1:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=83)** And so to get started with that, let's set up an a:hover, and we're going to say all:inherit.
>
> **[1:33](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=93)** Now you can of course, use inherit with individual properties.
>
> **[1:36](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=96)** All is a property that indicates all of the properties that are part of the style, many of which are going to be inherited.
>
> **[1:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=104)** So let's think about what comes in to style this hover state.
>
> **[1:49](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=109)** So we start off with a font size and a font family and a color.
>
> **[1:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=114)** That size is one REM and the family is Times New Roman and the color is black.
>
> **[1:59](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=119)** That's all coming from the browser style sheet.
>
> **[2:01](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=121)** And then that got overridden by the body element here.
>
> **[2:06](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=126)** Okay, so in the body element, we overrode that with Barlow as our font.
>
> **[2:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=131)** And of course, we've overridden the color here with the A element, first with the browser style sheet, which was blue and underlined and now with the A element, we've changed it to orange.
>
> **[2:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=141)** So these are all of the properties that we're talking about.
>
> **[2:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=143)** We are not joking when we say all.
>
> **[2:26](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=146)** So if we are going to inherit all of the properties from all of the things, what is going to happen when I roll over this link here?
>
> **[2:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=154)** Well, remember all of the properties including the ones that are not specified in the author style sheet, but we're going to inherit properties that come from the browser style sheet, when I roll my mouse over this, check out what happens.
>
> **[2:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=167)** Olive oil is all in its own line.
>
> **[2:49](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=169)** It has a border that goes all the way around it.
>
> **[2:51](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=171)** It stretches all the way across the page.
>
> **[2:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=173)** What is going on?
>
> **[2:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=174)** Well, it's inheriting all of the properties.
>
> **[2:58](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=178)** So right now, the link is in line for its display value.
>
> **[3:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=183)** When we roll over it, it becomes display block.
>
> **[3:05](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=185)** That's why it's on its own line.
>
> **[3:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=187)** It's inheriting the color of pink.
>
> **[3:10](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=190)** It's inheriting the border that it comes from the paragraph styling here.
>
> **[3:15](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=195)** So all of that is coming into play here as we hover over this particular element on the page.
>
> **[3:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=201)** So we're not joking when we say all inherit.
>
> **[3:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=205)** So that's what that is going to do.
>
> **[3:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=207)** Let's change inherit to unset.
>
> **[3:32](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=212)** And this is where I tell you that we are working with the all property and the value of unset here, but unset itself, that value, could it be applied to individual properties as well?
>
> **[3:41](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=221)** So we could say, for example, color: unset; and that would happen here.
>
> **[3:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=227)** So as you see here, we've unset the color from orange and it goes back to pink, which is what it was before.
>
> **[3:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=233)** But let's for fun, just continue with this all theme.
>
> **[3:56](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=236)** So all unset.
>
> **[3:58](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=238)** Unset specifies that the elements properties should be changed to their inherited values if they inherit by default or to their initial values, if not.
>
> **[4:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=249)** So if they inherit by default.
>
> **[4:12](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=252)** Things like, once again, font styles and font colors and so forth.
>
> **[4:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=257)** Or to their initial values, if not.
>
> **[4:19](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=259)** That would be things like with the box model.
>
> **[4:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=261)** So margins, borders, and padding and such.
>
> **[4:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=265)** So unset will remove that immediate styling provided by the parent element, in this case, the A element.
>
> **[4:31](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=271)** Now, when I roll my mouse over this particular link, it's going to turn pink and it's no longer underlined.
>
> **[4:37](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=277)** The underline part of course, comes from the browser style sheet, not from the parent.
>
> **[4:42](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=282)** So that underline is removed and the color goes back to what the parent was.
>
> **[4:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=287)** So that's going to essentially remove the styles that came from the A state of the link, setting the styling to the A's parent, the paragraph.
>
> **[4:55](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=295)** Those are the styles it's going to inherit.
>
> **[4:58](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=298)** That underline gets lost because initially there's no underline on hover before that's called out in the style sheet.
>
> **[5:04](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=304)** So let's go to the next one of these that we can try and this is called revert.
>
> **[5:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=309)** And again, once again, you can use this with individual properties as well.
>
> **[5:13](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=313)** So what revert is going to do is it's going to specify behavior that depends on the style sheet origin to which the declaration belongs.
>
> **[5:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=323)** So let's just see what that does.
>
> **[5:24](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=324)** When we roll over it, it looks like it goes back to blue and underlined.
>
> **[5:28](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=328)** So revert is going to revert the hover state to what it would be by default with some properties that are inherited.
>
> **[5:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=334)** In this case, it's going back to blue and underlined on hover or if we had visited the link, it would be purple and underlined.
>
> **[5:43](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=343)** The default link styling is inherited from the browser style sheet and the font family and size come from the body element.
>
> **[5:51](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=351)** So the ones from the body element carry through and the ones from the browser style sheet are going to override more specific link styling that we have here on the page.
>
> **[6:01](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=361)** And then we have one final value to explore here, and that is initial.
>
> **[6:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=367)** And so the initial value of a CSS property is its default value as listed in the definition table in the specification.
>
> **[6:15](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=375)** So by setting initial on our hover state, woo, look at that.
>
> **[6:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=380)** We are back to black Times New Roman text.
>
> **[6:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=383)** In other words, we've blown away all styling from all style sheets.
>
> **[6:29](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=389)** No blue underlined or purple underlined link, no font family, no size change.
>
> **[6:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=394)** We're back to the very beginning, the way the root element is styled.
>
> **[6:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=399)** So A is a great element to explore these styles because there's a lot of styling that's applied to links from the browser style sheet.
>
> **[6:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=406)** But if we take a look at some of these styles on the paragraph, just to see what happens there.
>
> **[6:55](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=415)** And we're going to get rid of all the styles that are here and let's instead say all:unset.
>
> **[7:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=420)** So we're going to do that for our paragraph.
>
> **[7:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=423)** So that will remove the margin on all the paragraphs that came from our browser style sheet.
>
> **[7:08](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=428)** That's why you see it collapse like this immediately.
>
> **[7:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=431)** The paragraphs also run into each other as one paragraph.
>
> **[7:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=434)** That's because by default, all elements are in line, not block.
>
> **[7:18](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=438)** So our default display of block was turned off as well.
>
> **[7:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=443)** If we go to revert for the paragraph, revert is going to inherit our styles in the normal way without any major changes.
>
> **[7:32](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=452)** So in other words, it is pulling in our styles that are coming from the browser style sheet.
>
> **[7:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=459)** So we have our margin and padding back and we are also inheriting normally from the div element here.
>
> **[7:45](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=465)** If we go to initial, this is going to revert our text to Times New Roman, plus we have very even spacing between all of the lines.
>
> **[7:55](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=475)** So if I make this window a little smaller, you'll see very very even spacing between all of the lines.
>
> **[8:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=482)** Notice that the text is running into each other and individual paragraphs are not honored as we're back to inline styling.
>
> **[8:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=489)** So where is this big chunk of spacing coming from here?
>
> **[8:13](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=493)** That is coming from the body with a line height of 1.5.
>
> **[8:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=497)** That value of line height was not initially set in the browser style sheet.
>
> **[8:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=501)** And so therefore, it is inherited going into this.
>
> **[8:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=505)** So that should give you a good sense of what happens with these various values of initial, unset, revert and the all property.
>
> **[8:35](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=515)** It's very interesting of how you can turn off various kinds of inheritance inside of your style sheet.
>
> **[8:41](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=521)** These may not be properties or values that you use very often, but if you have a situation where this might be useful to you, do consider doing this rather than writing a whole lot of additional styles to override what is being inherited from somewhere else.
>
> **[8:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/exploring-initial-unset-revert-and-all?u=76281980&t=537)** There may be a simpler solution by working with these particular properties and values.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), default. (2), case, (2), override (2), this, (1)
> **Definitions:** is a  (3), in other words (2), is called (1)
> **UI Navigation:** go to (3), scroll down (1)
> **CLI Commands:** make (3)
> **Env Vars:** rem (1), css (1)
> **Versions:** 1.5 (1)
> **Documentation:** specification (1)
> **Analogies:** for example (1)

#### Challenge: Working with inheritance
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-working-with-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-working-with-inheritance?u=76281980&t=0)** - [Instructor] Now that you have learned a little bit about inheritance, let's put that learning into action and think about this in the form of a challenge.
>
> **[0:12](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-working-with-inheritance?u=76281980&t=12)** So we've got the same old HTML we've worked with through this entire chapter.
>
> **[0:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-working-with-inheritance?u=76281980&t=17)** And underneath of that, I have two declarations here.
>
> **[0:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-working-with-inheritance?u=76281980&t=21)** So this first one is a star.
>
> **[0:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-working-with-inheritance?u=76281980&t=23)** That is the universal selector.
>
> **[0:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-working-with-inheritance?u=76281980&t=25)** In other words, select every single element, everything that is on the page, and apply this styling, font family, line height, and font size.
>
> **[0:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-working-with-inheritance?u=76281980&t=34)** And my second declaration is by the body element, those same exact declarations here about font family, line height, and font size.
>
> **[0:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-working-with-inheritance?u=76281980&t=46)** So think about this universal selector versus body for a little bit.
>
> **[0:51](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-working-with-inheritance?u=76281980&t=51)** We can start our document with all of the declarations for font family, line height, and font size with the universal selector, or we can do it with the body type selector.
>
> **[1:01](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-working-with-inheritance?u=76281980&t=61)** So what's the difference between these two?
>
> **[1:05](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-working-with-inheritance?u=76281980&t=65)** See if you can describe what happens with each type of selector and its impact on the document as well as any unforeseen circumstances that might arise with using each of these approaches.
>
> **[1:19](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-working-with-inheritance?u=76281980&t=79)** And I will talk to you about what I think the differences are and how this impacts your styling in the next video.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), in other words (1)
> **Code Keywords:** let (1)
> **Env Vars:** html (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Working with inheritance
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=0)** - [Instructor] So how'd you do on this challenge?
>
> **[0:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=7)** Hopefully you gave this some thought and you have an answer as to what's going on here.
>
> **[0:13](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=13)** So the body element is using inheritance to affect the elements in this document.
>
> **[0:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=20)** While the universal selector is going to assign each of these properties and values to each of the HTML elements at that level, not leveraging inheritance at all.
>
> **[0:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=34)** Sometimes, these things may be additive.
>
> **[0:36](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=36)** Now, normally, of course, you wouldn't write your document having both a universal selector and a body element.
>
> **[0:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=44)** There's no point in doing that, you'd use one of these.
>
> **[0:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=47)** But we do have an interesting phenomenon that's happening here because we have written this CodePen this way.
>
> **[0:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=54)** And that is, our font size seems rather large, don't you think?
>
> **[0:58](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=58)** Well, what's happening here is that, the body element says make the font size two REM and the universal selector is coming along and saying, "Hey, let's make it another two REM on top of that."
>
> **[1:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=71)** So this is actually four REMs of font size here.
>
> **[1:16](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=76)** And so that is additive, two REM plus two REM.
>
> **[1:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=80)** In the end, leveraging inheritance is more efficient than declaring each property on each element in the document.
>
> **[1:28](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=88)** And of course, you're going to wind up with these interesting bugs along the way, but by using inheritance, those bugs are not going to arise, plus you have the advantage of being able to control that inheritance through some of the methodologies that I showed you earlier in the course.
>
> **[1:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=104)** So my recommendation to you would be, going forward, use your body element or the HTML element, some people prefer that.
>
> **[1:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=112)** So you could use the HTML element or you could even go with, if you wanted, the root pseudo-class.
>
> **[2:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=122)** Any of these will allow these properties to be inherited by all of the HTML elements that are here on the page.
>
> **[2:10](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=130)** But if you go with the universal selector instead, you will wind up with interesting phenomena happening as a result.
>
> **[2:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-working-with-inheritance?u=76281980&t=140)** In this case, of course, we've got this interesting problem with font size that's happening along the way.

> [!info]- Semantic Content
>
> **Env Vars:** html (4), rem (4)
> **Code Keywords:** let (1), class. (1), case, (1)
> **CLI Commands:** make (2)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Understanding Specificity

#### What is specificity?
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=0)** - [Instructor] Specificity is another concept that you know and you generally understand how to work with it, until it throws you a curve ball.
>
> **[0:08](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=8)** For example, a class beats a type selector.
>
> **[0:12](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=12)** An ID beats a class.
>
> **[0:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=14)** That's all true until things don't quite work as you'd expect because specificity isn't the only part of the overarching CSS cascade.
>
> **[0:22](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=22)** We still have to factor in inheritance, whether styles are external, internal, or in line, whether bang important is used and many other factors.
>
> **[0:32](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=32)** But let's focus on just specificity for the moment.
>
> **[0:37](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=37)** MDN says, specificity is a weight that is applied to a given CSS declaration determined by the number of each selector type in the matching selector.
>
> **[0:48](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=48)** So what exactly does that mean?
>
> **[0:49](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=49)** Well, this is a table telling you about how selectors are scored.
>
> **[0:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=54)** This comes straight from MDN.
>
> **[0:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=57)** We have three different groups that are represented here and they are just called group X, Y, and Z, which is good enough.
>
> **[1:04](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=64)** They don't really have very official sorts of names.
>
> **[1:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=67)** In the first group, the most specific group, we have IDs.
>
> **[1:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=71)** If there's an ID, as you know, IDs beat most everything in terms of specificity.
>
> **[1:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=77)** They are the most specific of this bunch.
>
> **[1:19](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=79)** Group Y, all of these things are of the same specificity, classes, pseudo-classes and attribute selectors.
>
> **[1:28](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=88)** So you are probably pretty familiar with classes.
>
> **[1:30](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=90)** Pseudo classes are things like colon hover, colon active, colon visited, that type of thing.
>
> **[1:37](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=97)** And then attribute selectors are when you select HTML attributes.
>
> **[1:41](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=101)** So you might see the square brackets with something inside of it, like href, for example.
>
> **[1:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=106)** Those are attribute selectors.
>
> **[1:49](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=109)** Group Z consists of these elements, like type selectors and pseudo elements.
>
> **[1:55](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=115)** So a type selector, same thing as an HTML element.
>
> **[1:58](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=118)** So you'd see declarations for body or paragraph or whatever.
>
> **[2:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=123)** And then pseudo elements would be things like first line, first letter before and after.
>
> **[2:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=129)** Often they're written with two colons.
>
> **[2:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=131)** That is the most recent specification, but some of these pseudo elements have been around for a while and you'll see them written with one colon instead.
>
> **[2:19](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=139)** Now what we're going to do when we take a look at our selectors, we're going to count up however many of each group make up our selector.
>
> **[2:26](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=146)** This is going to create an array of three numbers.
>
> **[2:29](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=149)** Some people put these together as a three digit number, but this is incorrect.
>
> **[2:33](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=153)** And the selector with the highest specificity wins, again with all else being equal.
>
> **[2:38](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=158)** So let's look at a few examples of this.
>
> **[2:42](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=162)** So here we have a selector, widget div.container > h1.
>
> **[2:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=167)** So the first thing to notice is that we do have a parent child combinator.
>
> **[2:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=172)** That is the greater than sign that goes in between container and h1.
>
> **[2:56](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=176)** It indicates that that h1 is a direct child of the container.
>
> **[3:01](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=181)** And that has absolutely no bearing whatsoever on specificity.
>
> **[3:05](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=185)** So we can ignore that.
>
> **[3:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=187)** All we need to do now is just count up how many of each type of selector make up this larger selector overall.
>
> **[3:13](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=193)** So the first item is ID of widget.
>
> **[3:16](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=196)** So that would give us a one for group X.
>
> **[3:19](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=199)** We have a class of container.
>
> **[3:22](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=202)** That would give us a one for group Y.
>
> **[3:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=205)** And we have div and h1.
>
> **[3:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=207)** These are type selectors.
>
> **[3:29](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=209)** That would give us a two for group Z.
>
> **[3:32](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=212)** So if we were to look at the score, that score would be 1-1-2.
>
> **[3:37](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=217)** Let's do a few more of these so you can see how this works.
>
> **[3:40](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=220)** Here's another selector, the blockquote and then with a attribute selector here, id= danger.
>
> **[3:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=226)** Now this is a fun one.
>
> **[3:48](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=228)** I love this trick because it usually throws people for a loop.
>
> **[3:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=232)** The attribute selector of course, gives us one for group Y.
>
> **[3:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=237)** We have no actual IDs.
>
> **[3:59](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=239)** In other words, no hashtag or pound sign followed by that selector name.
>
> **[4:05](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=245)** So group X is a zero.
>
> **[4:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=247)** We have one for group Y and then for group Z, we also have one that's the blockquote element.
>
> **[4:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=254)** Why on earth would you ever want to put your id= danger as an attribute selector?
>
> **[4:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=260)** Why would you do this?
>
> **[4:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=261)** Because this will reduce the specificity overall and it may help you in writing out your cascade.
>
> **[4:28](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=268)** So rather than you want to use your ID as part of selecting some element on the page but you want it to rank at the same level as a class or a pseudo class, this is a great way to do it.
>
> **[4:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=279)** It's a great little trick.
>
> **[4:41](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=281)** And sure enough, when we take a look at the solution, 0-1-1.
>
> **[4:45](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=285)** So here's another one, article p:first-letter.
>
> **[4:48](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=288)** So once again, we need to figure out what everything is.
>
> **[4:51](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=291)** Remember, I just told you that some of the pseudo elements are old enough.
>
> **[4:55](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=295)** They come from the CSS two specification.
>
> **[4:58](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=298)** Sometimes you'll see them written with one colon.
>
> **[5:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=300)** Often one colon is your indication that it's a pseudo class but ones like first letter, first line before and after, those are actually pseudo elements.
>
> **[5:10](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=310)** So in this case, we have zero IDs, zero classes, pseudo classes, or attribute selectors, and three of the final category, two are type selectors and one is a pseudo element.
>
> **[5:24](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=324)** So watch out for those pseudo elements in terms of figuring out specificity.
>
> **[5:29](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=329)** Now, when you're done working through whatever selectors you happen to be working with, you're going to put them together and you're going to take a look at the numbers that are generated here.
>
> **[5:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=339)** Remember, these are arrays and you're going to sort them as such.
>
> **[5:43](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=343)** So you sort by the first number, the ID number.
>
> **[5:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=346)** In this case, we have one and two zeros.
>
> **[5:48](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=348)** Then you're going to sort by the second number.
>
> **[5:50](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=350)** In this case, we have 2-1-0, and then, and only then we worry about the third number.
>
> **[5:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=357)** So here, of course, even though article p:first-letter has three HTML elements, that is going to score much lower than our ID, which comes first and that is why these are in this particular order.
>
> **[6:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=371)** Now, obviously these selectors clearly apply to very different things on this page.
>
> **[6:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=377)** So you probably would never actually do this type of sorting this way.
>
> **[6:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-specificity?u=76281980&t=381)** But if you wound up with a real world example where you were trying to figure out the specificity of a given selector and why one was winning over another, this is the kind of calculation that you would do within all of your various style sheets and where styles are declared and scored.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (3), class. (1), this. (1), class, (1)
> **Env Vars:** css (3), html (3), mdn (2)
> **Definitions:** is a  (7), in other words (1)
> **Documentation:** mdn (2), specification (2)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Warnings:** watch out (1)
> **Speakers:** - [instructor] (1)

#### How selectors and ordering impact specificity
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=0)** - [Instructor] Let's take a look at a more real example of how specificity might work back in our starting CodePen, which I've given you in your exercise files folder.
>
> **[0:10](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=10)** As always, you should start by taking a look at your HTML.
>
> **[0:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=14)** You'll find that this is pretty similar to what we just saw in the inheritance chapter, except I've now wrapped three divs and they're all nested inside of each other.
>
> **[0:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=23)** Each of these divs has an id, id-1, -2 and -3 and a class.
>
> **[0:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=27)** And the class is all the same for these three divs.
>
> **[0:31](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=31)** And then I have styled these up as follows.
>
> **[0:35](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=35)** So we have just a generic div style here with a padding of 2rem and a background-color of orange.
>
> **[0:42](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=42)** We have a div div style that gives us a background-color of yellow.
>
> **[0:49](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=49)** And we have a div div div style that gives us a background-color of purple.
>
> **[0:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=54)** So let's start looking at these styles a little bit more closely and see how they impact things.
>
> **[0:59](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=59)** So we start with the first div here.
>
> **[1:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=62)** This of course applies to all of our divs.
>
> **[1:05](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=65)** So all of our divs wind up getting a padding of 2rem.
>
> **[1:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=69)** Every single div gets that.
>
> **[1:12](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=72)** But the background-color of orange here is declared on the div element, and it will actually apply to all three of these divs until we override them a little bit later on in our document.
>
> **[1:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=85)** We could change the padding for each div pretty easily here as well, because this initial div class is in a selector of 0-0-1.
>
> **[1:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=94)** And it's at the top of the document, changing this becomes easy as we move down the document.
>
> **[1:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=99)** So when I come to my second style here, I could say padding of 3rem.
>
> **[1:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=104)** And maybe when I get back to my inner div here I'll say padding of 1rem.
>
> **[1:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=112)** And it's no big deal.
>
> **[1:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=113)** We can easily override that padding style that we set on the very first div here.
>
> **[1:59](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=119)** We get more specific as we move through our style sheet.
>
> **[2:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=122)** And even though both previous divs apply to that inner div, the styles on the inner div win due to higher specificity which is going to displace inheritance so we can switch these around.
>
> **[2:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=134)** So if I switch around div div div with div div, let's see what happens.
>
> **[2:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=143)** Absolutely nothing.
>
> **[2:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=145)** And that's because div div div has a higher specificity than the div div style.
>
> **[2:30](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=150)** Then we're going to go ahead and switch those back again.
>
> **[2:33](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=153)** Now, what happens if I change this selector here for the very first style up here from div to div class?
>
> **[2:40](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=160)** Remember at div class, that's going to be an impact on all three of the divs.
>
> **[2:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=164)** They all have that same div class style.
>
> **[2:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=167)** So what is going to be the impact?
>
> **[2:49](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=169)** Think about that.
>
> **[2:51](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=171)** And then I'm going to change this class to .div-class.
>
> **[2:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=177)** So now you see they all have 2rems of padding and they all have an orange background, regardless of what happens with the other div styling that comes later in the document.
>
> **[3:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=189)** The specificity is higher here and that is going to trump inheritance.
>
> **[3:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=194)** So the specificity here of course is no longer 0-0-1, it is what?
>
> **[3:18](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=198)** 0-1-0.
>
> **[3:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=200)** And that is going to trump a specificity of 0-0-2 or 0-0-3.
>
> **[3:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=205)** Now what happens if I change this third style from div div div to div with an id-3?
>
> **[3:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=214)** So think about that for a moment.
>
> **[3:37](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=217)** What do you think is going to happen?
>
> **[3:40](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=220)** div-id-3.
>
> **[3:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=224)** So this specificity is no longer 0-0-3, that specificity is now 1-0-0.
>
> **[3:51](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=231)** And these styles are applying to this center purple square.
>
> **[3:55](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=235)** So clearly, this is going to override any of the styling that comes before.
>
> **[4:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=240)** Just to prove that to you, we could move this to the very first style here in our style sheet.
>
> **[4:06](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=246)** So rather than it being down here at the end, we could put it here at the beginning before our class styling and so forth.
>
> **[4:15](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=255)** And you'll see that the id styles still apply because this is the most specific styling that I have here.
>
> **[4:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=261)** How could we make a style that trumps this one with the id in it?
>
> **[4:26](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=266)** Well, it's actually pretty simple.
>
> **[4:28](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=268)** All we have to do is add another selector to triumph over that one.
>
> **[4:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=274)** So for example, we could put in after this or even before it.
>
> **[4:40](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=280)** Either way, it's going to still apply.
>
> **[4:43](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=283)** I'm going to write a selector with a specificity of 1-0-1, just to show you that it can be done.
>
> **[4:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=294)** And what I'll do here instead is say div#div-id-3.
>
> **[5:01](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=301)** And so what this is going to do is it's going to say any div element with an id of div-id-3.
>
> **[5:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=309)** When you put it all together like that with no spaces, that is what we're talking about.
>
> **[5:13](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=313)** So now if I say the background-color is going to be dc267f.
>
> **[5:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=323)** So now we have a nice hot pink square in the middle.
>
> **[5:26](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=326)** And we could say a padding of 1rem or whatever you wanted to do.
>
> **[5:31](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=331)** That's the same as what we had before.
>
> **[5:33](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=333)** Let's make it 4rem to make it big.
>
> **[5:35](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=335)** So once again, I could take this same CSS rule here and I could move it to the very top of our CSS document.
>
> **[5:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=344)** It's still going to trump everything else that's here inside of the document.
>
> **[5:48](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=348)** So anytime you wind up encountering id styling and you need to somehow override it, whether you have access to earlier in the document or earlier in all of the linked style sheets or whatever, you can always add an HTML element to things to help raise the specificity of your selector.
>
> **[6:10](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=370)** If you have no access to that HTML, you can't make changes to it.
>
> **[6:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=374)** You can't make changes to the CSS.
>
> **[6:16](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=376)** That's a situation that commonly happens when you're working with a content management system or some kind of no-code styling tool like Squarespace or Wix or something like that.
>
> **[6:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/how-selectors-and-ordering-impact-specificity?u=76281980&t=387)** These types of tricks are really, really helpful to override styling to inflict your will on that webpage.

> [!info]- Semantic Content
>
> **Code Keywords:** override (5), let (4), switch (3), class. (2), class, (1)
> **CLI Commands:** make (5), find (1)
> **Env Vars:** html (3), css (3)
> **Cross-References:** earlier in (2), later in (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Selectors with no specificity
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=0)** - [Instructor] Interestingly, there are some selectors that have zero specificity.
>
> **[0:05](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=5)** Their number is 0-0-0.
>
> **[0:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=9)** Let's talk about a few of these selectors.
>
> **[0:12](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=12)** First, the universal selector, the star, has no specificity to it.
>
> **[0:18](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=18)** If you see it in a selector, you essentially do not count it as if it were not there.
>
> **[0:24](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=24)** So let's look at these examples and let's determine the specificity of each one of these selectors.
>
> **[0:29](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=29)** So the very first one there, we have simply the star and the number for that particular one, group's X, Y and Z, would be 0-0-0.
>
> **[0:41](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=41)** It has absolutely no specificity whatsoever.
>
> **[0:43](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=43)** It is the easiest thing in the world to override.
>
> **[0:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=47)** The next declaration here has an attribute selector, plus the universal selector.
>
> **[0:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=53)** And so that would give us a number of 0-1-0.
>
> **[1:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=60)** We have one attribute selector.
>
> **[1:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=62)** We have the universal selector, which doesn't count and we don't have any IDs or HTML elements, so it's 0-1-0.
>
> **[1:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=69)** And in this last example down here on the bottom, we have two classes.
>
> **[1:15](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=75)** We have the universal selector, which doesn't count.
>
> **[1:18](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=78)** We have a parent, child combinator joining these two but that doesn't count for anything either.
>
> **[1:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=83)** So we have number here is 0-2-0.
>
> **[1:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=87)** So that's a little bit about the universal selector.
>
> **[1:29](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=89)** Pretty simple.
>
> **[1:30](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=90)** Just don't count it in terms of specificity calculations.
>
> **[1:35](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=95)** The sudo class of not works the same way as the universal selector with an interesting twist.
>
> **[1:43](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=103)** The actual sudo class of not is not counted as part of the specificity, but the selector inside of it is counted.
>
> **[1:51](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=111)** So in this case, we have this particular selector.
>
> **[1:55](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=115)** We are talking about an ID.
>
> **[1:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=117)** We have one ID, the ID of parrot.
>
> **[1:59](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=119)** It's strong, not dead, and so not is not counted.
>
> **[2:04](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=124)** That doesn't count towards our classes, but the class of dead inside of this does count.
>
> **[2:12](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=132)** So we have an ID of one.
>
> **[2:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=134)** We have classes of one and we have the strong type selector which also counts as one.
>
> **[2:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=140)** So our final count is 1-1-1.
>
> **[2:24](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=144)** And the HTML for this if you're wondering, might look something like this.
>
> **[2:28](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=148)** So here we have our div with an ID of parrot and then we're talking about a strong element that does not have the class of dead.
>
> **[2:35](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=155)** So this one has a class of not dead and that would certainly apply to the selector.
>
> **[2:40](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=160)** But if it had no class at all, if it was simply a strong element, it still satisfies that not selector.
>
> **[2:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=167)** It doesn't have a class of dead, so it would get the styling of block as well.
>
> **[2:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=173)** The new selectors of is and where, these sudo classes are important to point out in this regard, as well.
>
> **[3:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=180)** They are brand new selectors.
>
> **[3:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=182)** So let's just look at these briefly and then compare their differences because they've just come out like in the last six months and you may not really be familiar with them yet.
>
> **[3:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=191)** So let's say that you have some styling that you need to apply to certain elements and parts of your webpage and so here, we've got a series of descendant selectors.
>
> **[3:22](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=202)** They're all applying to h2's within certain parts of the webpage.
>
> **[3:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=205)** In this case, some sort of element with an ID of unique and HTML element of article and a class of featured.
>
> **[3:32](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=212)** And we want to put a three pixel solid blue border on the bottom of these h2's.
>
> **[3:37](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=217)** So normally we would write it just like this.
>
> **[3:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=219)** It would be a series of selectors, we separate 'em by commas and we put it on a page like this.
>
> **[3:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=226)** Well is and where will allow us to write this basically like this.
>
> **[3:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=232)** That is exactly the same syntax with both of these, just one is is, one is where.
>
> **[3:56](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=236)** So what we're going to do is put in those initial parent selectors of unique, article and featured.
>
> **[4:04](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=244)** We're going to put those inside of parenthesis and separate them by commas.
>
> **[4:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=247)** And the h2, which is in common to all of these, will be outside of that.
>
> **[4:12](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=252)** And so this is going to do exactly the same thing as writing these out as a series of comma separated descendant selectors.
>
> **[4:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=261)** But this time, we have dried out our code a little bit.
>
> **[4:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=265)** It's a little bit easier to read when we can write it this way.
>
> **[4:29](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=269)** So what winds up being the difference?
>
> **[4:32](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=272)** It is inside of these parenthesis.
>
> **[4:36](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=276)** So where has no specificity at all, while is is going to take on the specificity of its strongest selector.
>
> **[4:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=286)** And then to that, you're going to add what's outside of the parenthesis for the full specificity of this selector.
>
> **[4:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=292)** So in the first example with is, we want the strongest selector inside of the parenthesis.
>
> **[4:58](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=298)** So that would be our ID of unique and that would be one in that column.
>
> **[5:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=303)** And then outside of the parenthesis, we have an h2.
>
> **[5:06](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=306)** That is an HTML element that would count towards that group Z category.
>
> **[5:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=311)** So our final number there is 1-0-1.
>
> **[5:16](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=316)** Where does exactly the same thing as is.
>
> **[5:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=320)** It's just going to play games with the specificity.
>
> **[5:22](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=322)** So here with where, we are not going to count any of the selectors that are inside of the parenthesis.
>
> **[5:30](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=330)** We only count what comes outside of the parenthesis.
>
> **[5:33](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/selectors-with-no-specificity?u=76281980&t=333)** In this case, the h2, so our final count here is 0-0-1.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (4), case, (3), override (1)
> **Env Vars:** html (4)
> **CLI Commands:** sudo (3)
> **Cross-References:** in the last (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### The impact of inheritance on specificity
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=0)** - [Instructor] We've touched on inheritance and specificity a little bit before this video, but I'd like to take this opportunity to really dig into what is inheritance and what is specificity and how are they interacting as we take a look at our example.
>
> **[0:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=14)** So this is our starting CodePen.
>
> **[0:16](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=16)** The link is inside of your exercise files.
>
> **[0:18](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=18)** And as you can see here, this is the same example we've worked with several times before.
>
> **[0:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=23)** So we have a div on the outside of a paragraph.
>
> **[0:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=27)** The paragraph has some elements inside of it.
>
> **[0:30](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=30)** And then in our CSS, our div is declared to have orange as a text color.
>
> **[0:36](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=36)** Our paragraph has blue, our em element has pink.
>
> **[0:40](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=40)** And as you can see here, let's focus on that em element, once again, the text here is indeed pink.
>
> **[0:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=47)** It's not blue, it's not orange.
>
> **[0:49](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=49)** That is inheritance that's here at work.
>
> **[0:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=52)** And we know that because as we get closer and closer to our element from our div to our paragraph to our em, we have this color property declared again and again.
>
> **[1:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=63)** And so we are overriding the inheritance chain as we go through these particular elements.
>
> **[1:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=69)** Now all of these CSS rules here have a selector with the exactly the same type of selector.
>
> **[1:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=77)** And it has a specificity of 001.
>
> **[1:19](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=79)** They're all HTML elements.
>
> **[1:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=81)** They're all type selectors.
>
> **[1:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=83)** They all have a specificity of 001.
>
> **[1:26](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=86)** We can reorder them, but given the way inheritance works, nothing is going to change.
>
> **[1:31](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=91)** So if I took my em declaration here and I put it at the very top of the style sheet, absolutely nothing would change.
>
> **[1:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=99)** My em text is still going to be pink.
>
> **[1:42](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=102)** So we've gone over that before.
>
> **[1:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=104)** So now that you know a little bit about specificity, you may say, "Well, if we wanted to have orange text, let's make that div selector even more specific."
>
> **[1:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=114)** So we could do that.
>
> **[1:56](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=116)** That div has got an ID of div-id-1.
>
> **[1:58](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=118)** It's got a class of div-class.
>
> **[2:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=120)** Let's put all of those things together.
>
> **[2:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=122)** So we'll say div#div-id-1.div-class.
>
> **[2:10](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=130)** So that crazy thing there has no spaces in it and that's because we're saying we want the HTML div element with an ID of div-id-1 and a class of div-class.
>
> **[2:22](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=142)** All those things together in the same element and we're going to make an orange.
>
> **[2:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=145)** And as you can see, it has absolutely no impact on the document whatsoever.
>
> **[2:30](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=150)** And the reason why is inheritance is still troubling us in this particular document.
>
> **[2:36](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=156)** The only way to overcome this particular problem is to include the thing that you want to style and then make your selector either come later in the document or make it more specific.
>
> **[2:48](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=168)** So what do I mean by that?
>
> **[2:50](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=170)** Here we have our div, we're going to need to add to this the em that we're actually targeting.
>
> **[2:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=177)** When we add em that we're actually targeting, then we are now more specific and we're targeting the same element without inheritance getting in the way.
>
> **[3:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=187)** So instead of pink winning, even though it's later in the document, div em has a specificity of 002.
>
> **[3:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=197)** Even though it comes earlier in the document, it is going to win in this particular situation.
>
> **[3:22](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=202)** So let's compare what would happen if we did the same thing for our paragraph.
>
> **[3:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=207)** If we said paragraph em, what color is our em text going to be now?
>
> **[3:33](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=213)** Well, our paragraph go back to black because they no longer have a color specified for them.
>
> **[3:37](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=217)** And our paragraph em, the em that's inside of the paragraph, will now become blue.
>
> **[3:43](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=223)** And the div em which comes earlier in the document is going to be orange.
>
> **[3:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=227)** So now we have essentially broken our inheritance problem here.
>
> **[3:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=232)** Now we are simply looking at specificity.
>
> **[3:55](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=235)** So our last style here is a 001.
>
> **[3:59](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=239)** The first two styles are a 002, and they all apply to that word skincare regimen in the em tag.
>
> **[4:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=247)** Because paragraph em comes later, it is blue.
>
> **[4:10](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=250)** If I reorder these... So if we set the paragraph em first and the div em second, now our skincare regimen will be orange because the specificity is the same.
>
> **[4:22](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=262)** So the tiebreaker becomes its position inside of the document.
>
> **[4:26](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=266)** And this is where... Now, if we are concerned about the position here in the document or whatever, now, we can add to this our ID, div-id-1 and or our class,
>
> **[4:41](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=281)** making sure that we're still targeting that em.
>
> **[4:43](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=283)** And with this ID in here, we can place this style anywhere in our document, and it is going to beat any of the other styling that we have here which is much weaker.
>
> **[4:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=292)** So that is how specificity and inheritance are going to interact.
>
> **[4:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/the-impact-of-inheritance-on-specificity?u=76281980&t=297)** So you need to make sure that you are targeting what you think you're targeting and not relying on inheritance to be part of this chain so that you can really focus on the specificity part of this.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), class. (3), class, (1), this. (1)
> **CLI Commands:** make (5)
> **Cross-References:** later in (2), earlier in (2), go back to (1)
> **Env Vars:** css (2), html (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Explaining specificity
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=5)** - [Instructor] Now that we've taken a look at inheritance and we've taken a look at specificity, let's take a look at another challenge.
>
> **[0:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=11)** And in this particular challenge, code pen link is inside of your exercise files folder, you will find that I have given you a webpage and in this webpage, there's an article.
>
> **[0:24](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=24)** Inside of the article, there's a series of these bullets associated with parts of the webpage.
>
> **[0:30](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=30)** So we have hair, we have three bullets associated with hair.
>
> **[0:33](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=33)** We have three bullets here associated with hands and feet and we have two bullets here that are associated with the face.
>
> **[0:41](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=41)** So I've written out the styles down here.
>
> **[0:43](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=43)** We have hair LI, LI first child and LI.
>
> **[0:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=47)** And then article UL hands.
>
> **[0:50](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=50)** So we have a number of things that are going on here in these five selectors that are here inside of our CSS.
>
> **[0:58](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=58)** And the HTML is relatively straightforward, if you take a look at it.
>
> **[1:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=62)** It's all pretty much the same for these sections.
>
> **[1:05](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=65)** There's the H3 of hair.
>
> **[1:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=67)** We have a UL.
>
> **[1:08](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=68)** Sometimes it has a class and sometimes not.
>
> **[1:10](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=70)** And there's a series of bullets inside of that.
>
> **[1:12](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=72)** All of that is inside of our article, which is part of the particular document.
>
> **[1:18](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=78)** So what I'd like for you to do here for these styles that are here is first of all calculate their specificity.
>
> **[1:26](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=86)** So you want to go through, remember, count up the group X, Y and Z, and develop that three digit number.
>
> **[1:33](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=93)** Then I would like you to explain each of these selectors and why the affected LI styles look as follows.
>
> **[1:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=99)** So in the hair section here, why is the first bullet green and the other bullets are yellow?
>
> **[1:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=106)** Why are they all bold and italic?
>
> **[1:48](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=108)** So explain why they look this way based on the styles that you have here.
>
> **[1:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=113)** In the hands and feet section, the first bullet is green, the other bullets are purple and everything is bold and uppercase.
>
> **[2:01](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=121)** So explain why these look this way.
>
> **[2:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=123)** Why are these uppercase, whereas the hair bullets were not uppercase?
>
> **[2:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=129)** And then finally in the face section the first bullet is green, the other bullet is purple and everything is bold.
>
> **[2:15](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/challenge-explaining-specificity?u=76281980&t=135)** So explain what's going on based on the styles that you see here on the page, and I'll talk to you about my answers in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** css (1), html (1)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### Solution: Explaining specificity
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=5)** - [Instructor] So how'd you do with this challenge?
>
> **[0:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=7)** Hopefully it worked out okay for you.
>
> **[0:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=9)** Let's go through what I asked you to do in order.
>
> **[0:12](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=12)** So, first of all, let's calculate the specificity for each one of the selectors that are here below.
>
> **[0:19](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=19)** So if I scroll on down here I have put in these answers here for you inside of the code pen as comments.
>
> **[0:26](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=26)** So our first selector is a class of hair and an LI.
>
> **[0:30](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=30)** So in other words, this is going to affect all of the list items that are part of the hair UL.
>
> **[0:35](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=35)** There's a UL with a class of hair here and we have specified that these LI should be yellow and their font style should be italic.
>
> **[0:45](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=45)** And sure enough, we see that here in the two LIs that are children of the UL with the class of hair, but the first one is not.
>
> **[0:55](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=55)** Why is that?
>
> **[0:56](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=56)** Well, if you take a look at that, our LI first child, our next style, its specificity is also 011.
>
> **[1:04](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=64)** First child is a pseudo class.
>
> **[1:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=67)** LI is an HTML element, so 011.
>
> **[1:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=71)** and we've specified that this bullet should be green.
>
> **[1:15](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=75)** So the first child should be green.
>
> **[1:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=77)** Sure enough, it is.
>
> **[1:18](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=78)** So basically, that green is going to override the yellow.
>
> **[1:22](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=82)** What would happen if I swap these two styles?
>
> **[1:26](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=86)** What if I put first child, LI first child ahead of hair LI?
>
> **[1:30](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=90)** think about that for a minute and guess your answer.
>
> **[1:35](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=95)** And let me cut and paste that.
>
> **[1:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=99)** Now all of these are yellow and that is because they have exactly the same specificity for those two particular styles, so the one that wins is the one that comes later in the document.
>
> **[1:51](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=111)** That's why that happened.
>
> **[1:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=113)** And go ahead and move it back here.
>
> **[1:55](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=115)** So let's move on here.
>
> **[1:56](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=116)** We have our LI, just a generic LI all by itself.
>
> **[2:01](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=121)** That has a specificity of 001, so clearly this style does not beat the two that came up before it, even though it has to do with inheritance.
>
> **[2:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=131)** We might think about inheritance in that regard, but because these are all Lis, the inheritance is not something that we need to factor into it, at least for the hair section of the website.
>
> **[2:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=141)** For the hands and feet and the face portion of the website, we see that the other LIs are now purple and they're bold.
>
> **[2:30](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=150)** So that is true for the remaining LIs here, not for the ones that came first, for the hair section of the website.
>
> **[2:37](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=157)** We also see that that LI first child has affected those first bullets here under hands and feet and under face.
>
> **[2:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=164)** And that is because, of course, first child, LI first child is more specific than LI by itself, and so that is going to combine, the font weight of bold is going to apply, but the color is going to override the color that we had on the LI, that purple.
>
> **[3:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=182)** So we have our first LIs are green.
>
> **[3:05](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=185)** And then in the last style here, article UL hands.
>
> **[3:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=189)** So hands is an ID.
>
> **[3:12](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=192)** So that gives us one for our first number.
>
> **[3:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=194)** We have no classes, no attribute selectors and no pseudo classes, so that's a zero for the second number.
>
> **[3:19](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=199)** And we have article and UL.
>
> **[3:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=201)** Those are both HTML elements.
>
> **[3:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=203)** So that is a two for the third number.
>
> **[3:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=207)** Now here, we've called out our color of blue, but yet even though it has very high specificity and it's our last item here in this list, it is not affecting the hands and feet section of the bullets.
>
> **[3:41](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=221)** Why is that?
>
> **[3:43](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=223)** Well, it has to do with inheritance, right?
>
> **[3:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=226)** All of these other styles have an LI on them.
>
> **[3:49](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=229)** They are going to take priority, even though our article with the UL with an ID of hands is calling out a blue style for the color here.
>
> **[4:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=240)** Now, if we stuck an LI on the end of this, then absolutely those colors are going to turn blue.
>
> **[4:06](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=246)** And in fact, it's more specific than the LI first child, so it's going to override that, too, even if we move this up earlier in the document.
>
> **[4:15](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=255)** But right now what we have going on in terms of the colors of the LI have to do with inheritance, instead.
>
> **[4:22](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=262)** So that blue is not going to take effect, but the text transform is.
>
> **[4:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=267)** We haven't talked about text transform in any of our other LI styles that are here on the page, so that text transform applies to all of the bullets that are here within the hands and feet section of the website.
>
> **[4:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=279)** So hopefully you came up with a description somewhat similar to that.
>
> **[4:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=284)** Hopefully your calculations of specificity were matching what I got here.
>
> **[4:49](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/solution-explaining-specificity?u=76281980&t=289)** Now there's time to talk about the last part of this puzzle, which is the cascade.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), override (3), class. (1), this, (1)
> **Definitions:** is a  (3), is an  (2), in other words (1)
> **Env Vars:** html (2)
> **Cross-References:** in the last (1), earlier in (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)


### 3. Understanding the Cascade

#### What is the cascade?
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=0)** - [Instructor] Let's talk about the big C, CSS.
>
> **[0:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=3)** The Cascade.
>
> **[0:04](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=4)** Let's discuss how the Cascade is different but complimentary to inheritance and specificity.
>
> **[0:10](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=10)** It's impossible to completely separate the cascade from everything we do in CSS.
>
> **[0:15](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=15)** So you've seen it in action to some extent by this point in the course.
>
> **[0:19](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=19)** Let's see how else the Cascade affects our styles in the document.
>
> **[0:24](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=24)** MDN says that "The Cascade is an algorithm that defines how to combine property values originating from different sources.
>
> **[0:33](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=33)** What does that mean?
>
> **[0:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=34)** Let's take a look in a little bit more detail.
>
> **[0:37](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=37)** The Cascade starts by identifying all of the values that apply to a given element.
>
> **[0:43](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=43)** These styles may be attached via type selector, class, ID, descendant selector, pseudo class or many other choices.
>
> **[0:51](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=51)** Some of this may be driven by inheritance.
>
> **[0:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=54)** It will look for similar selectors with different styles in the same style sheet.
>
> **[0:59](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=59)** For example, you may have values change in a media query if applicable or you may override one style with another.
>
> **[1:06](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=66)** Your styles may also come from different places as a website author.
>
> **[1:10](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=70)** Separate documents, and HTML in the head of the page, or in-line in HTML tags.
>
> **[1:16](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=76)** Styles may also come from different origins from the browser, from the author, and from the user.
>
> **[1:22](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=82)** So let's look at that part in a little bit more detail.
>
> **[1:26](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=86)** To this point, we've done all of our work in code pen so all of our styles have two origins, the browser style sheet, and the CSS coding window.
>
> **[1:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=94)** But styles may be written in many locations from different sources.
>
> **[1:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=99)** There are three possible origins of style sheets.
>
> **[1:42](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=102)** The user agent style sheet, which is often called the browser style sheet.
>
> **[1:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=106)** This is the one that makes the text in Times New Roman black text, blue links and those honking ugly headings.
>
> **[1:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=114)** Author style sheets are the ones that you are going to write as a developer.
>
> **[1:59](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=119)** User style sheets are where the consumer of the webpage may apply their own style sheet.
>
> **[2:05](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=125)** This is especially useful where the user has a disability.
>
> **[2:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=129)** Some low-vision users for example, may find that a black background in white text is easier to read regardless of that website author's wishes.
>
> **[2:18](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=138)** The user may override those settings with their own style sheet, then we'll consider which ones have bang important associated with them, and which ones do not.
>
> **[2:29](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=149)** We'll also consider animations and transitions.
>
> **[2:32](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=152)** Here's a full table of origins and importance for style sheets from MDN.
>
> **[2:38](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=158)** For styles with a normal importance, which is how we normally think about styles, the browser style sheet or user agent style sheet is easily overwritten by the user style sheet.
>
> **[2:49](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=169)** The user style sheet is overridden by the author style sheet.
>
> **[2:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=173)** And a lot of people just think it ends there, but in fact, it goes beyond that.
>
> **[2:58](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=178)** When we get to the bang important levels, those levels are the reverse.
>
> **[3:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=183)** In other words, a browser style sheet with a bang important style will override any user style, and any author style, whether or not bang important is used.
>
> **[3:15](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/what-is-the-cascade?u=76281980&t=195)** With this in mind, let's explore all of these concepts in more detail.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), override (3), class, (1)
> **Env Vars:** css (3), mdn (2), html (2)
> **Documentation:** mdn (2)
> **Definitions:** is an  (1), in other words (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Identifying origins of CSS declarations using browser tools
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=0)** - [Instructor] One of the first steps of understanding the cascade is identifying all of the styles that impact a particular element on the page.
>
> **[0:08](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=8)** They may come from different style sheets or different locations within the same style sheet there's author, user, and browser style sheets.
>
> **[0:16](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=16)** You probably already use browser tools for variety of web development tasks.
>
> **[0:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=21)** However, you may not realize that your browser tools will show you the origins of all styles for a given element on the page.
>
> **[0:29](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=29)** Let's look at how this works in more detail with two different websites.
>
> **[0:32](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=32)** And the first website we're going to look at is this one, this is [TwoTreesOliveOil.com](https://TwoTreesOliveOil.com) and we are on the, about our story page.
>
> **[0:42](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=42)** So that's what we're looking at here.
>
> **[0:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=44)** And I am going to go up to my toolbar and I'm going to go to view developer tools.
>
> **[0:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=52)** This is Chrome on my Mac.
>
> **[0:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=54)** That's where that tool set is located.
>
> **[0:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=57)** If you're following along using Firefox or really any of the other major web browsers you'll find developer tools there as well.
>
> **[1:04](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=64)** They often have similar kinds of features and functionality but they may be arranged slightly differently than what you see here in Chrome.
>
> **[1:12](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=72)** So as you know, here from your developer tools at the top of this window, we have our HTML.
>
> **[1:18](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=78)** You can roll your mouse over each of these HTML elements and you will identify the various parts of our webpage here and where I'm going to start here is on this main element.
>
> **[1:30](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=90)** I'm going to open that up, open up the div inside of it, open up the next div inside of that.
>
> **[1:38](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=98)** And then we'll have a paragraph that will show up here.
>
> **[1:41](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=101)** And there is a first paragraph and there's a second paragraph.
>
> **[1:45](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=105)** So I'm just going to take a look at this first paragraph here.
>
> **[1:49](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=109)** The one for we are a family based business with a rich history of farming.
>
> **[1:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=113)** And then just to show you a little bit better now that you know where we are in the HTML, I'm going to pull up my CSS window to give us a little bit more space to look at here.
>
> **[2:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=123)** And specifically for the moment, I am going to focus over here on the styles panel.
>
> **[2:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=129)** So you can get here by clicking on styles and I will show you all of the styles that are here that pertain to that particular paragraph on the page.
>
> **[2:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=137)** I'm going to scroll all the way down to the bottom and this is going to start us down here at the very bottom of our document.
>
> **[2:24](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=144)** And from here working our way up to the top of the page, this will show us the origin of all of the styles that pertain to that one little paragraph.
>
> **[2:32](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=152)** So we start with down here at the bottom, you'll see that we have the pseudo before and after elements this particular declaration of star, colon after, colon before, where the box sizing a port box this turns on the border box, sizing property as opposed to the content box sizing property, it has to do with the way widths are calculated inside of the box model.
>
> **[2:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=177)** Then we have our HTML element which has certain styling attached to it.
>
> **[3:01](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=181)** Some of this has been overridden already or it's ignored.
>
> **[3:06](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=186)** And in this particular case, you'll see here we have some prefixed various types of declarations that are here, one for Firefox, one for Edge and one for probably just Microsoft in general, or maybe both of those are for Microsoft browsers, IE and Edge.
>
> **[3:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=205)** And those are ignored because of course I'm in Chrome.
>
> **[3:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=207)** So all that Chrome pays attention to here is the web kit that indicates that we have anti aliased fonts.
>
> **[3:35](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=215)** You'll notice that we did specify a background color of white and a text color of this dark black but that has a line through it.
>
> **[3:43](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=223)** And that's indicating that we have actually overridden this somewhere along the way.
>
> **[3:48](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=228)** Remember, of course, that these colors and the font family, those are all inherited.
>
> **[3:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=232)** And that is what this first part of this browser window is telling us is that we have styles that are inherited here.
>
> **[4:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=240)** So this is one of the distant relatives of that paragraph, one of the great grandparents or something.
>
> **[4:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=247)** We are inheriting a web kit box direction of normal from that.
>
> **[4:13](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=253)** And then finally, we start with what comes from after we get past all these various levels of inheritance down here we have what is coming from our user agent style sheet and these are properties that are not inherited.
>
> **[4:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=267)** So if you take a look at the paragraph here it is indicated that is a display block.
>
> **[4:32](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=272)** Remember all elements are in line by default in HTML but the paragraph is display block.
>
> **[4:38](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=278)** And then you see these four properties here you may not be familiar with this, this is a relatively recent type of syntax.
>
> **[4:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=287)** This is margin block start, margin block end, margin inline start and margin inline end.
>
> **[4:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=293)** And you are familiar with these from the world of margin top bottom left right.
>
> **[4:58](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=298)** Problem with margin top left right is that we have human languages that go right to left in addition to human languages that go left to right.
>
> **[5:06](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=306)** And so margin and padding of course have been reworked such that we are now going to talk about starts and ends relative to the human language.
>
> **[5:15](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=315)** And the block part of this is going to be top and bottom.
>
> **[5:19](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=319)** So in the case of English, which is a left to right language, the block start would be the top of the paragraph.
>
> **[5:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=325)** The block end would be the bottom of the paragraph and the inline start would be from left to right.
>
> **[5:31](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=331)** So inline start is on the left side, that's zero pixels.
>
> **[5:33](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=333)** Inline end is on the right side, that's zero pixels.
>
> **[5:36](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=336)** By the way, when you override this later on and you're still working with margin left right top bottom, you can override these properties with those, not a problem.
>
> **[5:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=347)** So after that, once again, we have our box sizing.
>
> **[5:50](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=350)** The border box is not necessarily inherited, it is in fact declared on every element via our friend, the universal selector so that is included here.
>
> **[5:59](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=359)** And then we have, you've seen this style before many times this is that one of those reset styles or normalized styles where we have no border, margin and padding are set to zero.
>
> **[6:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=371)** So that's for the paragraph itself.
>
> **[6:13](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=373)** So it was set to having some margin on the top and the bottom, that gets turned off and then we have our color.
>
> **[6:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=383)** So although we declared our color down here to be a slightly lighter shade of dark gray, now we have a slightly darker shade of dark gray.
>
> **[6:31](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=391)** We have a font size that comes from a separate style a font weight from another style, a line height from another style and a margin bottom from another style.
>
> **[6:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=399)** So this philosophy here of all of these different styles, this is similar to what you would see with a product like Tailwind, where you have a single property value declaration with each class.
>
> **[6:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=413)** And so they just sort of stack on top of each other.
>
> **[6:56](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=416)** So that's what's going on here for this particular paragraph.
>
> **[7:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=420)** And in the other panel that we get here in Chrome, we can see what exactly is the content area.
>
> **[7:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=427)** What is the padding, what's the border, what's the margin that might be associated here.
>
> **[7:12](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=432)** We can also group our properties together to see how they shake out.
>
> **[7:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=437)** So this is telling us about the box sizing and all the various box properties that are here.
>
> **[7:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=445)** We have the properties that pertain to the text and we have other properties that pertain to the appearance along the way.
>
> **[7:31](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=451)** And then a couple of other additional properties down here towards the bottom.
>
> **[7:35](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=455)** So that is how you would read this window and look at a page that is something like Tailwind in its approach.
>
> **[7:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=464)** So let's do the same thing here with this page.
>
> **[7:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=466)** And the styling looks a little odd because I've thrown in some styles that I'm going to talk about a little bit later here in the course, but this is the Hansel And Petal website.
>
> **[7:55](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=475)** It's a page that I built as part of my course on CSS variables and calc.
>
> **[8:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=483)** And so I am going to do the same thing here.
>
> **[8:06](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=486)** I am going to go view this with my developer tools and see how the styling here looks a little bit different.
>
> **[8:16](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=496)** So the first thing you'll notice if you look at this sort of middle window here, how much shorter it is because this type of CSS is leveraging much more from inheritance and from the cascade rather than declaring and re-declaring and re-declaring that we saw with more of that Tailwind kind of approach to building a webpage.
>
> **[8:35](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=515)** And if we start from down here at the bottom, once again we have several declarations that come from my specific style sheet here, and these are applying along the way here.
>
> **[8:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=526)** And then you'll see that we have some styles that apply to the user agent style sheet.
>
> **[8:51](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=531)** In other words, these are things coming from the web browser.
>
> **[8:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=534)** Here we have from the user agent style sheet, in the body, it displays as block and it has an eight pixel margin.
>
> **[9:01](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=541)** You've seen that before.
>
> **[9:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=542)** That's that little bit of white space that goes all the way around the edges of your webpage.
>
> **[9:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=547)** And I overrode that somewhere along the way probably up here in this body style where I turned off the margin and the padding.
>
> **[9:15](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=555)** If we go into the HTML for the page and let's compare one of the paragraphs that we have here with what we saw previously, we go over here to our content.
>
> **[9:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=565)** Let's say we want to go to our main area and we have a paragraph right here.
>
> **[9:30](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=570)** So I'm going to select that paragraph.
>
> **[9:32](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=572)** You'll see that in this case, we have once again from the bottom of the style sheet we have our pseudo elements before and after, setting us up with the border box style of measurement.
>
> **[9:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=586)** We have a whole bunch of things inherited from HTML specifically the pseudo class of root.
>
> **[9:51](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=591)** Most of these are variable declarations.
>
> **[9:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=594)** Then we have our body element here on the page and the font family and color are the things that we're inheriting from the body.
>
> **[10:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=602)** You'll notice that margin and padding seem to be slightly grayed out, that's because of course those values are not inherited.
>
> **[10:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=609)** The ones that are in inherited are the font family and the color.
>
> **[10:12](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=612)** Then we have our various paragraph declarations.
>
> **[10:15](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=615)** Same as what we saw for Two Trees Olive Oil we have our box sizing that's declared here.
>
> **[10:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=620)** And then our simple paragraph, which is going to use the variable of base size for the size of the text.
>
> **[10:28](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=628)** So the whole point of this is you can write very clean very sparse code by leveraging inheritance by leveraging the cascade, by working with what you're given in your browser's default style sheet and layering minimally on top of it.
>
> **[10:43](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=643)** So these are two very different approaches to working with CSS on a webpage, and that is reflected in the kinds of code that you'll see here inside of the web browser.
>
> **[10:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=654)** This is also a really great way to identify the origins of styles and where they're coming from.
>
> **[11:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/identifying-origins-of-css-declarations-using-browser-tools?u=76281980&t=660)** Very nicely, the browser developer tools will tell you whether they are from your style sheets as an author or from the user agent style sheet and what line you'll find those styles on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (2), override (2), finally, (1), this, (1)
> **Env Vars:** html (7), css (4)
> **Definitions:** is a  (4), in other words (1)
> **CLI Commands:** find (2)
> **Tools:** firefox (2)
> **UI Navigation:** go to (2)
> **URLs:** [twotreesoliveoil.com](https://twotreesoliveoil.com) (1)
> **Analogies:** similar to (1)

#### Sorting declarations by importance
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=0)** - [Instructor] Now that you have a sense of how to read the origins of styles within the browser tools, let's take a look specifically at style sheet ordering and how importance works.
>
> **[0:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=11)** So this is the hansel and petal webpage with a little bit of really ugly styling, that I've added to it, you'll find this inside of your exercise files folder.
>
> **[0:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=20)** And I've opened this up inside of my Chrome web browser, I've got my developer tools open here, and take a look at this h3.
>
> **[0:31](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=31)** So this is the h3 for the newsletter that's here.
>
> **[0:35](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=35)** And you'll see here that this particular h3 has an inline style associated with it, style is at the border, two pixel solid red here inside of that particular h3.
>
> **[0:49](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=49)** So once you have that selected there on your page, let's take a look at the CSS that's associated with this.
>
> **[0:56](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=56)** And I am going to look this from the bottom up once again, we have our friends before and after which are inheriting styling.
>
> **[1:04](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=64)** We have our various variables that are declared down here at the bottom of the page.
>
> **[1:10](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=70)** And then we get our list of elements that are inherited.
>
> **[1:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=74)** So inherited from the body style is our dark gray color, somewhere along the way we've overridden the base font-family, which used to be Source Sans Pro and now appears to be Comic Sans.
>
> **[1:26](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=86)** So as we continue to scroll up the page you'll see that we have our h3, this is from our user agent style sheet.
>
> **[1:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=94)** And by default, this is set to display: block, it has a font-size and a font-weight that got overridden along the way, and it has on margin on the top and the bottom of that particular h3.
>
> **[1:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=106)** So that's h3 you know and love, you've worked with this before, so that's where all of that is coming from.
>
> **[1:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=113)** After that, we have our box-sizing declared here which will be inherited.
>
> **[1:58](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=118)** All of the styles that I set up here from my h1 to h6, they're comma separated here, and I had originally set these up to have Libre Baskerville as my serif font with a margin and a border associated with them, but all of that has been overridden as well.
>
> **[2:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=137)** As we continue on here what this is, even though we're moving up here on our developer tools, notice that the line numbers are increasing, so we're actually, we're scrolling down through our style sheet, although we're scrolling up through the styles in our developer tools, maybe we should do something about our UX about that, but in any case, we have our h3 here, which is getting its font-size from a variable.
>
> **[2:42](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=162)** We had an aside h3, because that particular bit of HTML this would apply.
>
> **[2:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=167)** We've overridden that as we go into more specifically a class, that's a specificity issue there, right?
>
> **[2:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=174)** We've gone from aside h3 to a class of h3.
>
> **[2:59](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=179)** And so now this is where we had that green dotted border bottom, you can see that over here on recent blogs, and this is where the Comic Sans is coming from.
>
> **[3:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=189)** So the font family of Comic Sans is coming from this particular area.
>
> **[3:13](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=193)** And as you see, we have overridden this now several times.
>
> **[3:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=197)** We had started with Source Sans Pro here in the body, we overrode that then in the heading, and now we're overriding it again with a descendant selector, in this case, this is the font-family, which is associated with a class plus the h3.
>
> **[3:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=214)** And then finally at the very top, we have our inline style, the border, which is two pixels solid red.
>
> **[3:43](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=223)** So now that you've seen that let's switch our HTML here and compare that with what we see with the aside and the blogs.
>
> **[3:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=232)** So if we select the aside with the class of blogs and the h3 for recent blogs, I'm going to pull up my window again here.
>
> **[4:01](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=241)** You'll see that everything is the same, if you were to go back through the whole process of looking at all these properties, everything's pretty much the same until we get up to the top of the screen where our element.style doesn't have any styling associated with it, because there are no inline styles with recent blogs.
>
> **[4:19](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=259)** That also means that the border, which I had specified here inline for the newsletter is not overridden, so we have a border bottom of five pixel dotted in this green color, that's what's going on there.
>
> **[4:32](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=272)** So it's worth remembering that any of those inline styles, like the one that we see here on this h3, are going to override anything that we happen to see inside of our external style sheet, our author style sheet, the one that we wrote, and attached to this particular document.
>
> **[4:49](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/sorting-declarations-by-importance?u=76281980&t=289)** So anything that goes inline inside of the HTML will override anything that was inside of that author style sheet, unless we try to do something like assign an important statement somewhere here along the way, and that is what we're going to be getting to in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), continue (2), from. (2), case, (2), override (2)
> **Env Vars:** html (3), css (1)
> **UI Navigation:** scroll up (1), select the (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)
> **Prerequisites:** set up (1)

#### !important: Its use and abuse
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=0)** - [Instructor] Ah, important.
>
> **[0:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=2)** My least favorite development projects are working with someone else's code that's just peppered with bang important declarations.
>
> **[0:10](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=10)** Bang important is used as a last ditch effort, usually, by an inexperienced developer who just wants their style to apply, but has no idea how to make it happen.
>
> **[0:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=20)** So let's dive into how bang important fits into the cascade.
>
> **[0:24](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=24)** This is a reminder of what the cascade looks like.
>
> **[0:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=27)** Remember that normal styles, that's those without bang important after them, have a different and lower level of importance than the ones with the important on them.
>
> **[0:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=39)** They come later in the cascade.
>
> **[0:41](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=41)** Remember that the order of these particular style sheets reverses, so although the author is the most important one in the normal context, it is the least important one when we start throwing around bang importants.
>
> **[0:55](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=55)** And that is because we want our users to be able to override our styles if it's better for their user experience to have a different style sheet.
>
> **[1:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=63)** And then, of course, the browser can make us do crazy things, too, with its being important.
>
> **[1:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=69)** Animations and transitions are included on here because they, as you know, are in process of changing from one thing to another along the way.
>
> **[1:18](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=78)** What we don't want to have happen is as that animation or transition is occurring we have a drop in specificity somewhere along the way and the weird styling of something else in our document pops up as that animation is happening.
>
> **[1:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=94)** So that is why those are broken out as their own separate things and have their own lines here inside of this document.
>
> **[1:43](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=103)** So let's see how bang important could affect our Hansel and Petal website.
>
> **[1:48](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=108)** All right, so here we are back at our Hansel and Petal website.
>
> **[1:51](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=111)** This is the same one we've been looking at.
>
> **[1:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=114)** We have our H3 here that has the newsletter heading on it.
>
> **[1:59](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=119)** It has an inline style, two pixels, solid red for its border, and we also have our blog and inside of our blog we have an H3 there, as well.
>
> **[2:10](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=130)** That's the recent blogs item here and it does not have an inline style, and so the one with the inline style has a border of two pixels, solid red around it.
>
> **[2:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=140)** One of the things you may encounter in the course of doing web development is you have access to edit, maybe the HTML, but not the CSS, or the reverse is true.
>
> **[2:29](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=149)** You can edit the CSS or add to the CSS via one of those put your custom CSS here boxes, but you don't have access to the HTML.
>
> **[2:38](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=158)** So what could you do if you don't want that red border to show up on the page?
>
> **[2:43](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=163)** Well, because it's inline it is the most specific thing that's here on the page and it generally will show unless you have a bang importance somewhere else in your document.
>
> **[2:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=174)** So if we went back to our blue dotted border here on our H3 style and we wanted to add to this a bang important, so let's do that, that will override our inline style and that's pretty much the only way to do it.
>
> **[3:12](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=192)** If you have an inline style, the only way to override it is with some kind of bang important somewhere inside of your document.
>
> **[3:19](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=199)** Now, by doing that we had other consequences here inside of our style sheet.
>
> **[3:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=205)** One of them notably was previously we'd had this recent blogs actually had the blue on three sides and a green dotted border on the bottom, and now with that bang important on this shorthand property, we now have a blue dotted border on all four sides.
>
> **[3:40](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=220)** So if we wanted to keep this green dotted bottom border, we would need to add to it a bang important.
>
> **[3:48](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=228)** So you see here, we have a little arms race going on.
>
> **[3:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=232)** So bang important here, and that will bring back our dotted green border.
>
> **[3:58](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=238)** Now, if you wanted to keep that inline style, now that you've got those two bang importants here inside of your external style sheet, if you want that inline style to apply, well then yeah, guess what?
>
> **[4:10](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=250)** You're going to have to increase your specificity here, too, and raise your importance with important.
>
> **[4:19](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=259)** So now that will apply here, as well.
>
> **[4:22](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=262)** Now, where do these problems come in where people say, "Well, bang important, it didn't work for me."
>
> **[4:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=267)** Let's look at fonts here just for a moment.
>
> **[4:30](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=270)** We have several fonts in use in this particular document.
>
> **[4:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=274)** You'll see here right now the Comic Sans is what is applying.
>
> **[4:36](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=276)** That's because it is further down in the style sheet.
>
> **[4:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=279)** It also has a class plus an element associated with it, so it has higher specificity.
>
> **[4:45](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=285)** Earlier in the document, line 29, we had our H3, we had our Libra Baskerville font declared there.
>
> **[4:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=293)** And then even earlier in the document we had Source Sans Pro from the body.
>
> **[4:58](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=298)** Now what would happen if Source Sans Pro is what we really wanted for these headings?
>
> **[5:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=303)** Well, this is what often happens.
>
> **[5:05](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=305)** People say, "Oh well, Source Sans Pro, "That's the one that I want.
>
> **[5:08](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=308)** "Let me just stick a bang important on it "and that will solve all of my problems."
>
> **[5:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=314)** Well, if you notice, there it is.
>
> **[5:15](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=315)** I've just added it to the body, Source Sans Pro, but nothing has changed.
>
> **[5:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=321)** I still have the Baskerville font here on my H3.
>
> **[5:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=325)** And then for these affected items here, I have my Comic Sans.
>
> **[5:29](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=329)** So what's going on?
>
> **[5:31](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=331)** Well, this is inheritance.
>
> **[5:34](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=334)** Remember, inheritance is separate from the cascade.
>
> **[5:37](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=337)** It's separate from specificity.
>
> **[5:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=339)** Inheritance says that it's going to be Source Sans Pro, but we have something that is closer to the styled text.
>
> **[5:47](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=347)** That's our H3 here with the Libra Baskerville, which affects some of these.
>
> **[5:51](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=351)** And then we have another one with higher specificity.
>
> **[5:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=354)** So the class plus the H3 overrides all of that with the Comic Sans.
>
> **[5:59](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=359)** So this is what you need to be aware of with bang important.
>
> **[6:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=363)** First of all, once you start putting it in, you're going to have to put it in in several places, probably, to achieve the styling that you want.
>
> **[6:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=369)** And inheritance may still rule the day.
>
> **[6:13](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=373)** Bang important is not a catch all for everything that's out there.
>
> **[6:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/important-its-use-and-abuse?u=76281980&t=377)** So just be aware of that as you are working around the web.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), override (3), raise (1)
> **Env Vars:** css (4), html (2)
> **Cross-References:** earlier in (2), later in (1)
> **CLI Commands:** make (2)
> **Warnings:** be aware (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### @layer: Impacting specificity through components
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=0)** - [Instructor] As you probably know, today's front end developers would like nothing better than to package up a bunch of HTML, CSS and JavaScript, call it a component and distribute it as a component, hack these components together and then build anything on the front end.
>
> **[0:16](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=16)** Layers are an attempt to address this desire on the CSS side of things.
>
> **[0:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=21)** So let's take a look at how this might work.
>
> **[0:24](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=24)** So let's say we have two developers.
>
> **[0:26](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=26)** They've been working on various parts of the webpage and it comes time to integrate them.
>
> **[0:31](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=31)** So here is your super fine looking front end webpage here for Two Trees Olive Oil on the blog, have all your styles over here and such and somebody else has been working on the figure.
>
> **[0:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=44)** So here's a figure that we want to have appear inside of that blog.
>
> **[0:48](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=48)** So typically the first thing that we would do is we would copy over the HTML.
>
> **[0:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=53)** So let's highlight and copy our HTML.
>
> **[0:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=57)** And I'm going to put that into my HTML window, let's say just after the h2 here on around line seven.
>
> **[1:04](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=64)** And I am going to give this figure a class of float-right.
>
> **[1:13](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=73)** And pretty much nothing happens at the moment.
>
> **[1:16](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=76)** Figure is a block level element.
>
> **[1:18](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=78)** It's as large as its container, which right now is the article.
>
> **[1:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=81)** The article's contained by the body and so this is stretching all the way across the page.
>
> **[1:25](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=85)** We haven't copied over any of our figure styling.
>
> **[1:29](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=89)** So then we come back to our figure, we go into our CSS, we grab our CSS styling here, click and highlight, copy.
>
> **[1:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=104)** And then we're going to go to our CSS window, and we're going to paste in our CSS here.
>
> **[1:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=112)** We may find some duplicates.
>
> **[1:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=114)** So here, later on the body, we've got Barlow as a font family here, and we've got our 1.5 line height.
>
> **[2:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=122)** So maybe I want to knock some of these things back.
>
> **[2:05](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=125)** Maybe I just want to keep the body here and let some of this other styling come through from before.
>
> **[2:11](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=131)** But what happens is that we don't really have any way of prioritizing styles.
>
> **[2:17](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=137)** What is the most important styles?
>
> **[2:18](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=138)** What are the less important styles?
>
> **[2:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=140)** What comes later in the document overrides other things.
>
> **[2:23](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=143)** So for example, if I wanted Comic Sans, Comic Sans MS, down here, say for the figure, well now I've got it on the body and it's applying to the whole document, which is not desirable, right?
>
> **[2:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=159)** Not that font Comic Sans is ever desirable.
>
> **[2:41](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=161)** But in any case, what layers do is they can be used to group together your styles.
>
> **[2:46](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=166)** So what I'm going to do is I'm going to set up a layer here, @layer.
>
> **[2:51](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=171)** Give it any name you want.
>
> **[2:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=172)** I'm going to call mine figure because that's what it's for.
>
> **[2:55](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=175)** And then we can open our curly bracket and I'm going to close it down here at the bottom, clean up our CSS.
>
> **[3:05](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=185)** And you see here, now this is all packaged up in the figure layer.
>
> **[3:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=189)** Now what came before here, we can put this in a layer too, if we want.
>
> **[3:14](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=194)** I'm going to call this @layer core because these are our core styles.
>
> **[3:21](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=201)** And we are going to go from core down to the end of those styles.
>
> **[3:27](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=207)** And once again, format.
>
> **[3:30](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=210)** So now I have two layers.
>
> **[3:32](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=212)** I have the core layer and I have the figure layer.
>
> **[3:35](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=215)** And the very last thing that I add to this is a line at the top that says @layer and I could say core, figure.
>
> **[3:44](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=224)** And what this is going to do is it's going to say put in the core styles first, consider them first and then cascade and then consider our figure styles.
>
> **[3:52](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=232)** And this is the way the page looks.
>
> **[3:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=233)** Now we could also swap those.
>
> **[3:54](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=234)** We could say, put in the figure styles first, and then put in the core styles.
>
> **[4:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=240)** So if we were to do that, notice that the font family has changed.
>
> **[4:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=243)** Why is that?
>
> **[4:04](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=244)** Well, in the core layer of styles, our font family is set to be Barlow on the body element, and in the figure styles, our font family is set to be Comic Sans on the body.
>
> **[4:16](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=256)** So the one that takes priority is the one that's going to come later in the document.
>
> **[4:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=260)** And simply by reordering our layers, we can manipulate which one comes later in the document.
>
> **[4:26](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=266)** So right now, cores font family of Barlow comes later in the document.
>
> **[4:30](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=270)** That's why the whole document has Barlow.
>
> **[4:33](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=273)** And if I switch 'em back again, so that figure would come later, then the whole document would have Comic Sans.
>
> **[4:41](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=281)** Now it's also possible to leave things out of layers altogether.
>
> **[4:45](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=285)** I could just say, I have a layer called figure up here at the top of the screen and the core layer no longer exists.
>
> **[4:53](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=293)** And you'll notice that even though I called layer figure up here, this particular part of the layer, the body part of the layer has the Barlow font.
>
> **[5:03](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=303)** That is not in a layer at all.
>
> **[5:05](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=305)** That takes priority over anything that is in a layer.
>
> **[5:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=309)** So Barlow is going to be our font because the body declaration that we have here with Comic Sans inside of our figure layer, this is going to not be prioritized, even if it comes later because it's inside of a layer.
>
> **[5:26](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=326)** Now, what could we do if we really wanted Comic Sans inside of our figure?
>
> **[5:30](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=330)** Well, we just have to leverage inheritance here.
>
> **[5:32](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=332)** So rather than saying body, because it's not really the body that we're concerned with here for our figure.
>
> **[5:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=339)** We need to have this font family actually inside of the figure element.
>
> **[5:45](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=345)** And if we were to do that, take it out of body, put it in figure, then we can in fact have our Comic Sans here on our figure and Barlow in the rest of the document.
>
> **[5:57](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=357)** So these are some of the big concepts around layers.
>
> **[6:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=360)** There is much more to learn about layers.
>
> **[6:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=362)** This is not a layers course and so I'm not going into a huge amount of detail here but these are the important concepts to remember.
>
> **[6:09](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/layer-impacting-specificity-through-components?u=76281980&t=369)** Things that are out of layers take priority over things that are in layers, all else being equal and you can set the order of layers at the top of the document indicating which ones you want considered first and which ones you want considered later.

> [!info]- Semantic Content
>
> **Env Vars:** css (7), html (4)
> **Code Keywords:** let (5), super (1), case, (1), for. (1), switch (1)
> **Cross-References:** later in (4)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Versions:** 1.5 (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)


### Conclusion

#### Moving forward with CSS
> [LinkedIn Learning](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/moving-forward-with-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/moving-forward-with-css?u=76281980&t=0)** - [Jen] Hey, everybody. It's Jen Kramer.
>
> **[0:02](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/moving-forward-with-css?u=76281980&t=2)** Thank you so much for watching CSS Specificity, Inheritance, and the Cascade.
>
> **[0:07](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/moving-forward-with-css?u=76281980&t=7)** If you enjoyed this course and you're looking for more CSS instruction that talks about how things work, not just a bunch of code to sling around on the screen, you might be interested in some of my other courses.
>
> **[0:18](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/moving-forward-with-css?u=76281980&t=18)** So I would recommend starting with CSS Selectors.
>
> **[0:22](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/moving-forward-with-css?u=76281980&t=22)** This is a course that is going to talk about all of those crazy selectors that contribute to specificity and its calculation.
>
> **[0:31](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/moving-forward-with-css?u=76281980&t=31)** And that is available here inside of the library.
>
> **[0:35](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/moving-forward-with-css?u=76281980&t=35)** You may also be interested in CSS Variables and Fluid Layouts.
>
> **[0:39](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/moving-forward-with-css?u=76281980&t=39)** This is where the Hansel & Petal website was built.
>
> **[0:42](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/moving-forward-with-css?u=76281980&t=42)** So if you're curious about how I leveraged variables and manipulated variables using calc inside of that course and manipulated my CSS grid layouts and so forth, that is all explained here and the course CSS Variables and Fluid Layouts.
>
> **[1:00](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/moving-forward-with-css?u=76281980&t=60)** And then finally, if you are looking for more advanced CSS and possibly some things you don't know, you might enjoy my course on CSS Print Style Sheets.
>
> **[1:10](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/moving-forward-with-css?u=76281980&t=70)** There's a whole world of styling with CSS for print that a lot of people are just not aware of that there are interesting styles that are available that really are designed just for print.
>
> **[1:20](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/moving-forward-with-css?u=76281980&t=80)** So if you're interested in learning about how to make beautiful formatting for print and some of the best practices, be sure to check out my Print Style Sheets course.
>
> **[1:29](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/moving-forward-with-css?u=76281980&t=89)** All of these are available here in the library.
>
> **[1:31](https://www.linkedin.com/learning/css-inheritance-specificity-and-the-cascade/moving-forward-with-css?u=76281980&t=91)** I hope to see you in another course very soon.

> [!info]- Semantic Content
>
> **Env Vars:** css (9)
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [jen] (1)


## Path Context

### In [[Learn CSS]]
← [[CSS- Selectors]] | **4 of 12** | [[CSS- Images]] →

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