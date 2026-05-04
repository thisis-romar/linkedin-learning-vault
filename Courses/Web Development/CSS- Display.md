---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: css-display
url: "https://www.linkedin.com/learning/css-display"
duration_minutes: 41
duration: 41m
level: Intermediate
updated: 4/28/2025
learners: 32063
skills:
  - Cascading Style Sheets (CSS)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQF629fARgLMzA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1612547411492?e=2147483647&amp;v=beta&amp;t=L4rdXNyTwfbgLY7DSVSlWqhzJapMIySkqnMFxImHg3g"
linkedin_topic: Web Development
learning_paths:
  - '[Learn CSS](../../Paths/Web%20Development/Learning%20Paths/Learn%20CSS.md)'
prev_courses:
  - '[CSS- Animation](CSS-%20Animation.md)'
next_courses:
  - '[Advanced Responsive Layouts with CSS Flexbox](Advanced%20Responsive%20Layouts%20with%20CSS%20Flexbox.md)'
path_nav: '[{"path":"Learn CSS","position":7,"total":12,"prev":"CSS- Animation","next":"Advanced Responsive Layouts with CSS Flexbox"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/cascading-style-sheets-css
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/CSS-%20Display.md)

![CSS: Display](https://media.licdn.com/dms/image/v2/C4E0DAQF629fARgLMzA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1612547411492?e=2147483647&amp;v=beta&amp;t=L4rdXNyTwfbgLY7DSVSlWqhzJapMIySkqnMFxImHg3g)

# CSS: Display

> Every CSS layout relies on the display property to tell it basic rules for how to present content. In this course, instructor Jen Kramer explains why the display property is so important and walks you through basic display values and newer display values that you need to understand to make effective use of this property. Learn about inline-level elements and the inline display value. Explore block

> [LinkedIn Learning](https://www.linkedin.com/learning/css-display) | 41m | Intermediate | 32K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Welcome](#welcome)
- [**1. Basic Display Values**](#1-basic-display-values) (4 videos)
  - [Inline elements](#inline-elements)
  - [Block elements](#block-elements)
  - [Understanding proper nesting of block and inline elements](#understanding-proper-nesting-of-block-and-inline-elements)
  - [Display: none vs. visibility: hidden](#display-none-vs-visibility-hidden)
- [**2. Newer Display Values**](#2-newer-display-values) (5 videos)
  - [Understanding layouts with inline flex and grid](#understanding-layouts-with-inline-flex-and-grid)
  - [Flow-root and floats](#flow-root-and-floats)
  - [Inline-block](#inline-block)
  - [Table, inline-table, and its internal structures](#table-inline-table-and-its-internal-structures)
  - [List-item](#list-item)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/css-display/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-display/welcome?u=76281980&t=0)** - The mighty display property is truly a wonder for displaying elements in the way you want, and it's probably a bit more complicated than you thought. For example, you might know display: flex, but what about inline-flex? Did you know about the flow-root property, and how it might help you with floats? Maybe you'll finally understand what inline block really means, a term that confuses so many developers. And, finally, what's the difference between display none and visibility hidden? I'm Jen Kramer, and for 25 years, I've been teaching students that CSS is the language of art on the web. So if you're ready, let's get started with CSS display.

> [!info]- Semantic Content
>
> **Env Vars:** css (2)
> **Analogies:** for example (1)
> **Speakers:** - the (1)


### 1. Basic Display Values

[↑ Back to Table of Contents](#table-of-contents)

#### [Inline elements](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=1)** - By default, before applying any browser or author style sheet, every [HTML](../../Skills/Web%20Development/HTML.md) element is set to a value of inline for its display property. The browser style sheet will override many of those html elements to block values instead. And I'm going to talk about block more in the next video. For now, let's focus on inline. What exactly does this mean? Which html elements are impacted, and how does this behave in the browser? So I'm going to start here with this code pen and I'm just going to start by, first of all, let's put a border around our paragraphs so we can clearly see where it's located. So I'm going to say a border of three pixels, solid black. And if you'll notice here, this particular border stretches all the way across the area that's displaying this portion of the webpage. We're in code pen so it's only that little white area over on the right hand side. And this paragraph is contained inside of the body tag. The body tag doesn't have a width set on it and so the paragraph is a block level element, it will expand to take up the width of its parent. So in other words it's going to go all the way across the page and you can see that we have a very clean box that goes all the way around our paragraph text. Now I'm going to add here P star. You see here in my html above, I have a paragraph. Inside of it I have a link, an emphasize, and a strongly emphasized tag.
>
> **[1:35](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=95)** By setting my selector to P star, I'm going to be able to select all of the things that are descended from the paragraph. In other words, all three of those elements. Let's go in ahead and set a border to three pixels dotted green. And that will put a lovely box around those three elements. So you can see here we have a link, we have emphasized text and strongly emphasized text. Notice that those elements though are only as big as their content. In other words, they don't stretch all the way across the page; they only stretch to the width of the words. And that's because A, M, and strong are three very commonly encountered inline html elements. In other words, they're in line with the text. And what you're seeing here is one of the big differences between block and inline elements. Inline only as wide as its content, block as large as its containing element. These three elements, A, M, and strong are some of the most commonly encountered ones, but there's others like lots of form elements like input, button, and select. There's media elements like video, image, or picture that are in line, and there's some text oriented elements like Q, code, and small. The generic inline element without any semantic meaning is the span tag. So there's some other things you should know about inline elements. I'm going to demonstrate three more properties, one on each one of these inline tags. And I'm going to start with the strong tag here. So for my strong tag, what I'm going to do is
>
> **[3:13](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=193)** give it a background color of yellow and then I'm going to give it padding of 2rem. So this is applied padding on all four sides of my strong tag. And as you can see here, it very happily overlaps all of the things that are inside of this paragraph and actually even goes outside of this paragraph. But it maintains its inline nature here. In other words, this text is still part of that paragraph. If I hadn't set the background color to yellow, you'd actually be able to see the text in the paragraph there, which is currently behind that big yellow box. We can make that padding a little bit smaller, it's a little excessive at the moment. So you get a better sense of what I'm talking about. So this is one of the properties of inline elements. You can add padding. The padding can be added on all four sides, but if the padding is exceeding, say, some of its neighboring text, it's going to expand to go over top of all of that neighboring text. A feature, not a bug. All right, the next property I want to demonstrate is on the M tag itself and here I'll set the background color to pink and then I'm going to set the margin to 1rem. Now, here you might expect to see exactly the same behavior that you saw with the strong tag. In other words, margin on all four sides. But as you see here, very clearly, I have got some margin on the left side, I've got some on the right side,
>
> **[4:47](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=287)** but as you see here, the top of the emphasized box intersects with the top of the paragraph here and no margin has actually been applied at all to the M tag. It happens to be that margin is a property that can be applied to the left and the right sides of an inline element, but not to the top and the bottom. And then finally, I'm going to reset. I'm going to take off this padding here just for a moment here so we can actually see the link. And then I'm going to go ahead and add to this. Styling for this link in the A tag, let's say I set its width to 1000 pixels, which would be honking big. And as you'll see here, absolutely nothing changes. Why is that? Well, this is another property of inline elements. They are defined as being as wide as their content. The width property has no impact whatsoever on an inline element. So we can summarize properties of inline elements as follows. So first of all, remember that they are as wide as their content. Adding a width property has no effect on them at all. The padding is offered on all four sides, but the padding may overlap other elements, not push them out of the way. And finally, margin is going to be honored on the left and the right of an element only. Not on the top and the bottom.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (5)
> **Definitions:** in other words (6), is a  (2), defined as (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** picture (1)
> **Speakers:** - by (1)

#### [Block elements](https://www.linkedin.com/learning/css-display/block-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=1)** - [Instructor] Block elements are the other default value you'll encounter with your [HTML](../../Skills/Web%20Development/HTML.md) elements. In general, a block element is one that holds big blocks of information, elements like section, article, aside, header, footer, and body are all block level, but a number of other elements that contain content are also block level, like paragraphs, headings, tables and lists. The generic block level element without semantic meaning is the div element. So let's take a look at these block elements in more detail. I'm going to start by putting a border around the h1 that I have here on line two. So say h1 and then I'm going to say border, three pixels dotted green. And you'll see here that that stretches all the way across the page. Notice that as I start to flex the display section of the page here, that green box stays the same width which is the width of that display area over there on the side of the page. The h1 is a block level element so it's as wide as it's containing element. What is its containing element? Well, it would be this section tag here. And what is the section tag's containing element? It's the body element, even though we don't see it here in [CodePen](../../Glossary/Tool/CodePen.md), you know that it's there. Let's go ahead and turn on borders for all of those. So I'm going to go ahead and say body, let's say border three pixels solid red.
>
> **[1:43](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=103)** After that, we'll say section and border will be three pixels, dashed blue. So as you see here there are all of the block level elements, h1, contained by section, which is contained by body. And once again, as I flex this back and forth, you can see that they are all flexing together, just like that. Now, if I set a width on the body that will constrain the h1 and this section. Notice that how the height is going to increase when I do this but the height is still going to be set by the height of the content. Just the width is going to change. So here to the body tag, let's go ahead and set this to a width of, let's say 300 pixels. And you'll see here that very happily our h1 is going to shrink up. And our section is going to shrink up just as the body shrinks up. But the height here is defined by the content. In other words, there's no extra white space down here on the bottom. There's nothing more than what we have present here in the document. Now, these paragraphs are also block level elements. Let's set a border on them too. Border three pixels, solid black. And now I'm also going to add to this a margin of three rem. Now, if you notice here
>
> **[3:17](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=197)** a very interesting thing just occurred with these paragraphs. So this distance here let's assume that that is in fact three rem just as I called out and the distance over here looks eyeball, that's about the same. on the top here, probably about the same and underneath this paragraph about the same, but notice that in between these two paragraphs, the distance here, this distance, looks like about three rem. The same as it is over here on this side and this side. Why is that? Well, we have three rems of bottom margin on that first paragraph, three rems of margin on the top paragraph. You would think that when those came together three plus three will equal six, but in the case of block level elements, those margins collapse so that the distance between these two elements is in fact three rem. That would not be true with padding. If I go ahead and add padding let's also say three rem for that, it starts to get a little bit ridiculous. Now you see here that we have in fact added three rems of padding down here. There's our border, there's our margin. And then we have padding that is appearing down here as well. So the padding does not add, but the margin, in fact, does. I'm going to go ahead and take that padding out. If you're feeling confused because clearly we don't quite have three rems of padding over here on the side, that's solely driven by the fact that these are very long words and the content is eating into the padding here.
>
> **[4:52](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=292)** There's ways you can deal with that in terms of hyphenation and so forth, but I'm not going to cover that at the moment. So our block level elements may be summarized as follows. First of all, they're as wide as there containing element. The width property will constrain them and their children unless their children have a with assigned to them. The padding and the margin are honored on all four sides. But remember that the vertical margins do collapse when you have two block level elements that intersect each other. And finally, the height is going to be determined by the height of the content, not the height of the browser window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1), [CodePen](../../Glossary/Tool/CodePen.md) (1)
> **Definitions:** is a  (1), in other words (1)
> **Env Vars:** html (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Understanding proper nesting of block and inline elements](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=1)** - [Instructor] As you've seen in the last two videos, block and inline are two really core concepts to CSS and to [HTML](../../Skills/Web%20Development/HTML.md). And so I thought I'd present the last very important concept in terms of block and inline. And that is how you can nest block and inline HTML elements within your document. Because I see these kinds of mistakes made often and I just want to point out what is so-called legal and illegal, where this is concerned. So let's just go on through these one by one. I put a little comment up here at the top to tell you what's legal and what's illegal. All right. So we can have block elements inside of block elements. That is a given. All of our block level elements are going to go inside of the body tag, which itself is a block level element. So this has to be legal, otherwise we can't build a webpage. Inline elements can go inside of block elements. We've seen that before. Say here on line 14, where we have a paragraph and we want to put a link and a strong inside of it. Well, obviously links and Strongs are inline and a paragraph is block. So that is of course legal as well. You can also have inline inside of inline elements. So here on line 15, I have an example of a paragraph that has an emphasized bit of text, that has a link inside of it. And that is completely legal as well. That will validate and be very, very happy. But the thing that's illegal happens to be
>
> **[1:35](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=95)** this one right here. putting block elements inside of inline elements. And this is a big no-no. And I see a lot of people do it when it comes to links. So in other words, we take a link and then we're going to wrap it around, say a paragraph or many people like to make a whole card that's clickable. And so they code it with the link on the outside and they might have a paragraph in here, and an image and subtext and all of it is one great, big, huge honking link. This is not legal. It will not validate through the validator. And this is poorly formed HTML. So this is a fashion no. Do not put your inline tags around your block level elements. All of the other combinations, those are all legal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3)
> **Definitions:** is a  (4), in other words (1)
> **Env Vars:** html (3), css (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Display: none vs. visibility: hidden](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=1)** - [Lecturer] Display none is one of CSS's favorite tricks and it's likely one you're already familiar with. I'll demo it for you anyway. But chances are you're probably familiar with it. But there's also another property called visibility, with a value of hidden. Sounds like the same thing. Doesn't it? Well, there are subtly different. So let's look at that difference now. So here inside of this [CodePen](../../Glossary/Tool/CodePen.md), this is the same sort of section with the heading and the paragraph with some inline elements inside of it that you've seen before. I'm going to go ahead and write some CSS here to demonstrate this. So for example if I say strong, let's take all of the strong tags and let's display none. As you'll see here, all of the strong texts simply disappears. Notice that the space that it used to occupy has also disappeared. So if I set this back to inline, which is its default value, you'll see there are all that text comes back. And if I change it back to none, it disappears and the space that it occupied, it goes away as well. So let's contrast that with em. And so you see here we have a nice long sentence down here in this third paragraph. So I'm going to go ahead and say em, and I'm going to say visibility, hidden. Aha, so that is the difference.
>
> **[1:33](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=93)** So visibility hidden means that the text will in fact not display, but as you see the space that it occupied is maintained. So if you're familiar with positioning in CSS these are kind of like absolute and relative positioning. Absolute positioning means that whatever is absolutely positioned, that element disappears completely, the space that it occupies goes away as opposed to relative positioning, which means that when you send something to a position of relative, you can move it around on the page, and the space that it previously occupied is maintained. So let's also do a little contrasting, a little bit further down the document here, I have an h2 and an h3. So, I'm going to go ahead and set up another, I shall just add it here to my em tag, my h3, visibility hidden. Notice that that goes away and it leaves a big gap here as well between the h2 and the paragraph. But if I take the h2 and I set it to display none, that space that it occupied will go away, page tightens up. We still have space there for h3, but the h2 space is completely disappeared. So, if you happen to be in a situation where you want to hide some texts, but you want to keep the space, that may be very well true for something with [JavaScript](../../Skills/Software%20Development/JavaScript.md) for example, where we are making something appear and disappear, and you don't want the whole page to wiggle around
>
> **[3:08](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=188)** and everything goes squirrely on it. Visibility hidden may be a better choice for you than something like display none, which will actually remove the space that the text previously occupied.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CodePen](../../Glossary/Tool/CodePen.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** css (3)
> **Definitions:** means that (3)
> **Analogies:** for example (2), kind of like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [lecturer] (1)


### 2. Newer Display Values

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding layouts with inline flex and grid](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=1)** - [Instructor] To this point, we've only looked at block and inline elements, and the block and inline values for the display property. By now, you've probably realized that display property is a property that does not inherit its values. In other words, if I set this div with the class of road to have a value of inline, the div with a class of box and the paragraph are not going to inherit that inline characteristic from it. However, as we move on to Flexbox and grid, we have a new type of layout structure in which the display type is declared on the parent. And then the children are going to receive some interesting properties as a result. So in this particular example, I've got a div with a class of row. You've seen this kind of [HTML](../../Skills/Web%20Development/HTML.md) before, all kinds of places. Got a div with a glass of row. And then we have a series of divs with a class of box. Inside of those, we have paragraphs that have numbers, right? That's what we've got here. Four of those. And then down here, all I've done is take row and box as those classes and put borders on those things. So, now what I'm going to do here in the row class, which is the one that wraps all the way around the HTML here, I'm going to set its display to flex. And simply by doing that, you can see here that the row itself, which has the red border, looks to be actually unchanged. It's displaying exactly the way it was before.
>
> **[1:36](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=96)** It's stretching all the way across it's containing element the body here, and it's as high as its content, which it was before as well. But what has changed is the layout of these boxes, and these boxes are now as wide as their content. And they're filling up the height of the row. Grid has a similar behavior. I'm going to focus on Flexbox in these particular examples, but you could do everything that I'm doing here with grid and see similar kinds of behavior. You may not have thought much about this if you've worked with Flexbox before. However, display flex is one of the few CSS properties which changes both the parent and the child. That meaning behind this has to do with what's called inner and outer layout. Once you understand this concept, then Flexbox and grid, and less used properties like inline flex, and inline grid start to make more sense. The outer layout is this outside box, which, in this particular example is a row, and it's often a row in Flexbox. When display is set to the flex property, what we're going to do is display this outside row here as a block level display. In other words, the row is as large as its containing element. In this case, the body tag. However, if I set this road, have a display of inline flex, like that, then the row is only going to be as wide as its content,
>
> **[3:10](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=190)** exactly as you would expect with an inline element. So that's the outer layout portion of the display property. In other words, it's going to control whether that box is going to stretch all the way across the page or only to the width of its content. Now, the inner layout refers to the properties that are bestowed on the children of this element. In this case, in our row. So I'm going to go ahead and set my display back to flex so that my row stretches all the way across the page. And now here on the box, which is the child of the row, I'm going to set it to one of its special properties, like flex basis of let's say 20%. And that will give each one of those boxes a width of 20%. And as you can see here, there's some space left over. About 20%, if you do the math. And that is what would be here in the end of this row. If I switched back again to inline flex, then that outside box, once again, is going to collapse to just the width of all of those properties, and that flex basis value is no longer paid attention to in this particular situation. There is a new system of display properties that have two values to reflect this outer and inner display value going forward. In this case, it would be, say, inline space flex. That particular syntax at this point
>
> **[4:42](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=282)** is only supported by Firefox. You would say inline space flex, or you would say block space flex. I'm using Chrome here. So this particular format doesn't work in this particular browser, but do try opening this code pen in Firefox. And you'll see that in fact it does work there. For now, though, the values that are going to work across all browsers are simply flex. If you want the block behavior of flex, which is probably what you use most of the time now, and inline hyphen flex, if you want to have more of that inline behavior for your outer element.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **Definitions:** is a  (3), in other words (3)
> **Env Vars:** html (2), css (1)
> **Tools:** firefox (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Flow-root and floats](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=1)** - [Narrator] Ah, floats. Everybody loves to hate a float. They look so nice when our text is aligned next to our images, maybe wrapping around them, but then something weird always happens. So here I've got an example in this code pen, you can see I have a section, I have a paragraph, I have my adorable kitten from place kitten. Your kitten might be slightly different but it will be the same dimensions, uh, in this lovely paragraph of text. And I am just going to go ahead and float that image because of course, image is an inline element. It is indeed in-line with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the words in my paragraph, but it looks a little weird because of course the text aligned to the bottom of the image by default. So all we need to do is say img and then we can say something like float left, and uh, if you want to put a margin around it and so forth, you can do that as well. But this is what happens. We have this lovely background. And what we'd really like to have happen is we'd like this border to stretch on down with the color, maybe beneath this picture. But if this is the look you're looking for, there's absolutely nothing wrong with doing this having the picture hanging out of the box like that. People do that kind of thing, but usually you want that box to encompass the picture. And it never does, and people get really frustrated. So now normally what you do is something like a hack, of some kind or another, frequently in the old days, we'd put in a break tag, a BR tag, we'd give it a class of clear fix,
>
> **[1:35](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=95)** and we'd make it clear underneath the picture, that was really hacky. These days, we'd do something with the section maybe. We'd say something like overflow auto and that would go ahead and give us a clear on the picture. And then the box would expand on down the page. Problem here is that this overflow auto, which is a better solution than that hacky, clear fix thing we did, because we don't have to use that line break to hold the clear fixed class in place. But overflow was meant to deal with overflowing content, often used for dealing with scroll bars or clipped drop shadows. If you're using it to deal with this float, then you may not have it available to use it when it's really needed. Fortunately, there's a new and better way of doing this instead of using overflow auto to fix this problem, you can instead say display flow, hyphen, route. And flow route is designed to actually fix these problems with your floats. So here I've put it on the section. If I had multiple floating images inside of the section of this page, it would deal with all of those really nicely. I don't have to worry about clearing images on an image by image basis. To me, this is a real game changer. Too bad flow route came too late for all of the floats we used to have in our layout, but it's here now, and you will definitely love using flow route when you work with your images next,
>
> **[3:08](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=188)** floated inside of your documents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Analogies:** picture (5)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Inline-block](https://www.linkedin.com/learning/css-display/inline-block?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=1)** - [Instructor] There's a few different ways of laying out horizontal navigation bars. And one of those is by using display inline block. The other one being Flexbox, and you may have used inline block has a way of creating nav bars for quite some time now, but the term inline block, itself, is really pretty confusing. And in light of what you just learned about outer and inner display values, maybe inline block will start to make more sense to you now, as we take a look at it in a bit more depth. So here I've put together a simple navigation bar for you. And if you notice the markup here, this is the way navigation bars should be marked up all the time. I can't believe the crazy [HTML](../../Skills/Web%20Development/HTML.md) I see these days of people trying not to use lists for navigation bars, but the nav tag goes around the outside of this. It's an unordered list because this is a list of links. They can be visited in any particular order. So this is the correct [Semantic Markup](../../Skills/Web%20Development/Semantic%20Markup.md) for any navigation bar that's out there. Now, if you take a look at our CSS styling underneath of that you'll see here that I've just pre-configured a few things here for you. I turned off the bullets and got rid of the margin and padding on the UL. And I applied some styling here to our links. So, they look like this right now. And what I'd like to do first is I'd like to take a look at the LI elements. And LIs, by default, are block level.
>
> **[1:36](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=96)** And we can tell that if we put a border on them, two pixels solid blue, you'll see that these are going to stretch all the way across the page. So if I want the nav bar to go horizontal on this page, what I could do is I need to somehow get these links next to each other. The first thing you might think of is, well, let's go ahead and say a display of inline. See how nicely that works? Immediately everything goes all on one line because the links themselves, of course, the a tag is an inline tag, and the LI now will shrink to be as wide as its content, which is the a tag. So everything goes on one line like this. And then we can add some padding, let's say 0.5rem, just so they can get off their border a little bit there. And then we can add a margin. 0.5rem as well. So we have a little bit of space in between them. Now, these LIs are in line. You can't get margin on all four sides. You'll only get the margin on the left and the right. If you want to add the margin to all four sides but you still want the links to show up next to each other, this is where inline block comes into play. Because here we're to preserve the ability to place margin on all four sides, like a block level element, but we're going to keep the box as big as the content, like an inline element.
>
> **[3:08](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=188)** And that is why it's called inline block. So let's go ahead And switch this from display inline on the LI to inline block. And now you see, we have margin on all the sides, which is more reflective of what we were Trying to get. Now, before I Leave this navbar, let's address the clickable area issue which is another annoyance on many webpages. The current clickable area on these buttons is only the shaded area that you see there. In other words, the area inside of the link itself. The clickable area is not expanding to fill the full button. And in this particular situation, that's not an enormous deal because we don't have a lot of non-clickable area inside of these buttons, but I'm sure you've encountered this on other websites where you expect to be able to click somewhere and have something activate, and it doesn't. So how can we make the shaded area bigger to fill out the full list item and make it all one color? Well, there's a couple of possible solutions to this, but I'm going to suggest the best way to do this is the following. So here on my a tag, I'm going to add to this a display block. In other words, we're going to expand our a, such that it is going to fill the entire area in which it's contained. I'm also going to take the padding off of the LI, and I'm going to move it to the a, instead of putting it on the LI.
>
> **[4:45](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=285)** And the reason why here is because then, that padding is going to fill the whole area with color, instead of having some of that white outlining that's in between. And now with those two changes, you'll see here, we have buttons that look like buttons. They change together as a unit, they have lovely large clickable areas, and they are far more usable than they were when we started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1), [Semantic Markup](../../Skills/Web%20Development/Semantic%20Markup.md) (1)
> **Definitions:** in other words (2), is a  (1), is an  (1)
> **CLI Commands:** make (3)
> **Env Vars:** html (1), css (1)
> **Speakers:** - [instructor] (1)

#### [Table, inline-table, and its internal structures](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=1)** - [Instructor] In terms of markup in [HTML](../../Skills/Web%20Development/HTML.md) table is about as complicated as things get. There are so many different tags that are used inside of a table, and they have a very specific way in which they can be nested. And every single one of those tags has its own special display value. So I'd like to go through those right now, but first of all let me just point you to my course on tables. My, the course is called HTML Tables. It's available here at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning and it will walk you through the process of marking up a table, styling it and making it responsive. And if you don't have a background in how to put together a table this is the best place to start because I don't have time to walk you through all of the table tags and exactly how they're nested in this example. But for now, I've actually taken to code from that course. And I've used it here as my example just so you can see how this is put together. So starting from the beginning here, a display table has occasional uses elsewhere in your document. That may be one that you'll want to use on occasion for various types of layout problems but in any case display table is the block form of this. In other words, the table will stretch to fill it's containing element. Display inline table would be the table would only be as wide as its content. You've seen now inline flex, inline grid, inline block and now here's inline table, the same type of thing. For a table caption,
>
> **[1:35](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=95)** that's this thing up here at the top where it says Wisdom Pet Medicine Product Price List, that is the caption. And it has the value of display table caption. The head is a group of tags at the top of the page. In this case, those are shown here in blue. And just to point to you where that is, as you see here T head starts on line 13, there's a row that has some cells inside of it and a second row with more values inside of it. And then T head is grouping those two rows together. So that would be table hyphen header, hyphen group for the display value. The body is shown here in yellow and that is display of table hyphen row, hyphen group. And then the foot is the pink down here on the bottom. And that is display table hyphen footer, hyphen group. The rows themselves have values, If I take off the comment here everything will turn gray on this page because everything is in a row and this comes later in my document. It's also closer to the contents. There's a couple of reasons why this background color of gray will take priority over what I said previously. So as you see here, this is displaying as a table row. I'm going to put back in that comment. Then we have our individual cells and our individual headers. These are each of these cells that are here, and I have put a border of two pixels dotted blue around both regular cells and header cells. These are both controlled by display of table cell.
>
> **[3:11](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=191)** So even though there are different tags, their display properties are the same. Call and call group have display properties of table column, and table column group respectively. Although you will find that they don't actually display here on this webpage. Call and call group their purpose is to indicate how this information which is retail and cases is going to display over these words here and how these various columns are grouped together and so forth. So they don't typically show up on the webpage itself but yet they have these display properties that you could leverage. So that's sort of an outline here of tables and their display properties. There's a lot to know about tables to really appreciate all of the nuances of this. And once again if you need to learn more about tables, I recommend my course on the topic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Definitions:** is called (1), in other words (1), is a  (1)
> **Env Vars:** html (2)
> **CLI Commands:** find (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [List-item](https://www.linkedin.com/learning/css-display/list-item?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=1)** - Next up, it's possible to turn anything into a list item in terms of its display. Why would you want to do this? Well, remember that if you want to convey the semantic meaning of a list like steps that have to be completed in a certain order or a list of things, that those need to be marked up as a list with either the UL for unordered lists or the OL for ordered list, plus LI for your individual list items. You need to use semantic [HTML](../../Skills/Web%20Development/HTML.md) to convey the meaning of what it is that you want to show. However, if you want the look of a list without conveying the meaning of a list, you can replicate this with a list item display property. So to set this up, let's start by setting our display to list item. So if you're inside of it, I have a span with a class of list because I wanted to show you you can make a list in the middle of a sentence. So let's go on ahead and establish that we have a class of list here. And then inside of this, we can simply say display list-item. I don't know why you'd want to do this, but you can, so here you go. Now, by default here, you see that the words, particular words are on their own line as you would expect a list item to be, but there is no bullet in front of this. You might expect that there's a bullet here for this list item by default. And there is indeed that, there is a bullet by default type called a disc, but it is styled outside of this element
>
> **[1:34](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=94)** and it's actually out of range for you to be able to see here. So there's a couple of ways that you can do this. If you're not familiar with the list style position property, that is one way of fixing this. Right now, this is set to a value of outside. So that bullet was off the screen and someplace where we could not see it by saying inside we're pulling the bullet in to be in line here with the text that's around it. So this is one possible solution, definitely works okay. And I'll just show you to prove to you that this is in fact, the case. We could switch it to the default value of outside and you'll see that now the bullet is off the screen again. The other possibility, of course is, well, the issue is we don't have any margin here. So we could put in our own margin, say 1.5 rem. And that would go on ahead and push over our text enough such that our bullet is now visible. And of course, since I put 1.5 rem on all four sides, you see that we have margin on all sides of that box. And we could of course, put a border on this, one pixel solid red, and you'll see that as you would expect there's a box that goes around that particular list item. So what is the right solution to this particular problem? It depends, in this particular case, you're using list item not to convey any semantic meaning at all. We are just trying to get this
>
> **[3:07](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=187)** to look the way we want it to look. So what's the right answer? Anything you want, that looks the way you want. So in this particular solution that I have here, get rid of that border. The solution with the margin gives us a little bit more space around the whole thing. If I said, list style position inside, I could do that in addition to my margin, then it's really going to push over. So this is the artistry of CSS. And now you can pick whatever type of solution that you want in order to make this look the way you want. I do worry that a display of a list item may lead to bad habits with HTML. It allows you to continue to mark everything up as a div or a paragraph, and then rely heavily on CSS to give you the list look that you really want. Please, please don't do this. If it's a list, there's a perfectly good HTML tag set that you can use to mark it up as such. And you're going to convey accessibility to a lot of people and search engines, it will just be better in the long run for your webpage to mark things up, to convey the meaning you wish to convey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3)
> **Env Vars:** html (3), css (2)
> **CLI Commands:** make (2)
> **Versions:** 1.5 (2)
> **Definitions:** is a  (1)
> **Speakers:** - next (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/css-display/next-steps-25753009?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-display/next-steps-25753009?u=76281980&t=0)** - Hey everybody, it's Jen Kramer. Thanks so much for watching CSS Display. I hope you learned a new display value that you'll use in your next project. If you liked me here, you'll like me in some of my other courses as well. How much do you know about the inheritance in CSS? How do you calculate specificity, and how does the cascade really work? Find out more in my course "[CSS- Inheritance, Specificity, and the Cascade](CSS-%20Inheritance%2C%20Specificity%2C%20and%20the%20Cascade.md)." You know media queries are used in responsive design with screen widths, but did you know they can be used for color detection, aspect ratio, and more? Check out "Advanced CSS Media Queries" to learn more about the media and media queries. Left, right, top, and bottom makes sense in a left to right world. But what about in a right to left world or in a vertical world? Logical properties allow designers to work with text regardless of its writing mode. Learn how to incorporate these properties into your projects through a series of 12 hands-on exercises in my course "Coding Exercises: CSS Logical Properties." Thanks again for watching, and I'll see you soon in another course.

> [!info]- Semantic Content
>
> **Env Vars:** css (5)
> **CLI Commands:** find (1)
> **Speakers:** - hey (1)


## Instructor

- [Jen Kramer](../../Instructors/Web%20Development/Jen%20Kramer.md)

## Resources

- Exercise files available

## Skills Covered

- Cascading Style Sheets (CSS)

## Path Context

### In [Learn CSS](../../Paths/Web%20Development/Learning%20Paths/Learn%20CSS.md)
← [CSS- Animation](CSS-%20Animation.md) | **7 of 12** | [Advanced Responsive Layouts with CSS Flexbox](Advanced%20Responsive%20Layouts%20with%20CSS%20Flexbox.md) →

## Appears In

- [Learn CSS](../../Paths/Web%20Development/Learning%20Paths/Learn%20CSS.md)

## Related Courses

_Courses sharing skills:_

- [Making Sense of the CSS Box Model](Making%20Sense%20of%20the%20CSS%20Box%20Model.md) — Cascading Style Sheets (CSS)
- [React- Building Styles with CSS Modules](React-%20Building%20Styles%20with%20CSS%20Modules.md) — Cascading Style Sheets (CSS)
- [Cutting-Edge CSS](../Software%20Development/Cutting-Edge%20CSS.md) — Cascading Style Sheets (CSS)
- [Building Great Forms with HTML and CSS](Building%20Great%20Forms%20with%20HTML%20and%20CSS.md) — Cascading Style Sheets (CSS)
- [HTML & CSS- Creating Forms](HTML%20%26%20CSS-%20Creating%20Forms.md) — Cascading Style Sheets (CSS)

---

[↑ Back to top](#)