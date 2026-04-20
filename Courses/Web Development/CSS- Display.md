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
  - Learn CSS
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/cascading-style-sheets-css
status: not-started
created: 2026-04-20
---

![CSS: Display](https://media.licdn.com/dms/image/v2/C4E0DAQF629fARgLMzA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1612547411492?e=2147483647&amp;v=beta&amp;t=L4rdXNyTwfbgLY7DSVSlWqhzJapMIySkqnMFxImHg3g)

# CSS: Display

> Every CSS layout relies on the display property to tell it basic rules for how to present content. In this course, instructor Jen Kramer explains why the display property is so important and walks you through basic display values and newer display values that you need to understand to make effective use of this property. Learn about inline-level elements and the inline display value. Explore block

> [LinkedIn Learning](https://www.linkedin.com/learning/css-display) | 41m | Intermediate | 32K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Jen Kramer]]

## Resources

- Exercise files available

## Skills Covered

- Cascading Style Sheets (CSS)

## Table of Contents

### Introduction

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/css-display/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-display/welcome?u=76281980&t=0)** - The mighty display property is truly a wonder for displaying elements in the way you want, and it's probably a bit more complicated than you thought.
>
> **[0:08](https://www.linkedin.com/learning/css-display/welcome?u=76281980&t=8)** For example, you might know display: flex, but what about inline-flex?
>
> **[0:13](https://www.linkedin.com/learning/css-display/welcome?u=76281980&t=13)** Did you know about the flow-root property, and how it might help you with floats?
>
> **[0:18](https://www.linkedin.com/learning/css-display/welcome?u=76281980&t=18)** Maybe you'll finally understand what inline block really means, a term that confuses so many developers.
>
> **[0:25](https://www.linkedin.com/learning/css-display/welcome?u=76281980&t=25)** And, finally, what's the difference between display none and visibility hidden?
>
> **[0:29](https://www.linkedin.com/learning/css-display/welcome?u=76281980&t=29)** I'm Jen Kramer, and for 25 years, I've been teaching students that CSS is the language of art on the web.
>
> **[0:35](https://www.linkedin.com/learning/css-display/welcome?u=76281980&t=35)** So if you're ready, let's get started with CSS display.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **Env Vars:** css (2)
> **Analogies:** for example (1)
> **Speakers:** - the (1)


### 1. Basic Display Values

#### Inline elements
> [LinkedIn Learning](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=1)** - By default, before applying any browser or author style sheet, every html element is set to a value of inline for its display property.
>
> **[0:11](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=11)** The browser style sheet will override many of those html elements to block values instead.
>
> **[0:17](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=17)** And I'm going to talk about block more in the next video.
>
> **[0:20](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=20)** For now, let's focus on inline.
>
> **[0:22](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=22)** What exactly does this mean?
>
> **[0:24](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=24)** Which html elements are impacted, and how does this behave in the browser?
>
> **[0:30](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=30)** So I'm going to start here with this code pen and I'm just going to start by, first of all, let's put a border around our paragraphs so we can clearly see where it's located.
>
> **[0:40](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=40)** So I'm going to say a border of three pixels, solid black.
>
> **[0:46](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=46)** And if you'll notice here, this particular border stretches all the way across the area that's displaying this portion of the webpage.
>
> **[0:54](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=54)** We're in code pen so it's only that little white area over on the right hand side.
>
> **[0:59](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=59)** And this paragraph is contained inside of the body tag.
>
> **[1:03](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=63)** The body tag doesn't have a width set on it and so the paragraph is a block level element, it will expand to take up the width of its parent.
>
> **[1:12](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=72)** So in other words it's going to go all the way across the page and you can see that we have a very clean box that goes all the way around our paragraph text.
>
> **[1:21](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=81)** Now I'm going to add here P star.
>
> **[1:26](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=86)** You see here in my html above, I have a paragraph.
>
> **[1:29](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=89)** Inside of it I have a link, an emphasize, and a strongly emphasized tag.
>
> **[1:35](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=95)** By setting my selector to P star, I'm going to be able to select all of the things that are descended from the paragraph.
>
> **[1:41](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=101)** In other words, all three of those elements.
>
> **[1:43](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=103)** Let's go in ahead and set a border to three pixels dotted green.
>
> **[1:50](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=110)** And that will put a lovely box around those three elements.
>
> **[1:54](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=114)** So you can see here we have a link, we have emphasized text and strongly emphasized text.
>
> **[1:59](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=119)** Notice that those elements though are only as big as their content.
>
> **[2:04](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=124)** In other words, they don't stretch all the way across the page; they only stretch to the width of the words.
>
> **[2:09](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=129)** And that's because A, M, and strong are three very commonly encountered inline html elements.
>
> **[2:17](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=137)** In other words, they're in line with the text.
>
> **[2:20](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=140)** And what you're seeing here is one of the big differences between block and inline elements.
>
> **[2:25](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=145)** Inline only as wide as its content, block as large as its containing element.
>
> **[2:31](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=151)** These three elements, A, M, and strong are some of the most commonly encountered ones, but there's others like lots of form elements like input, button, and select.
>
> **[2:41](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=161)** There's media elements like video, image, or picture that are in line, and there's some text oriented elements like Q, code, and small.
>
> **[2:52](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=172)** The generic inline element without any semantic meaning is the span tag.
>
> **[2:57](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=177)** So there's some other things you should know about inline elements.
>
> **[3:00](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=180)** I'm going to demonstrate three more properties, one on each one of these inline tags.
>
> **[3:04](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=184)** And I'm going to start with the strong tag here.
>
> **[3:09](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=189)** So for my strong tag, what I'm going to do is give it a background color of yellow and then I'm going to give it padding of 2rem.
>
> **[3:23](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=203)** So this is applied padding on all four sides of my strong tag.
>
> **[3:29](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=209)** And as you can see here, it very happily overlaps all of the things that are inside of this paragraph and actually even goes outside of this paragraph.
>
> **[3:38](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=218)** But it maintains its inline nature here.
>
> **[3:41](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=221)** In other words, this text is still part of that paragraph.
>
> **[3:45](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=225)** If I hadn't set the background color to yellow, you'd actually be able to see the text in the paragraph there, which is currently behind that big yellow box.
>
> **[3:53](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=233)** We can make that padding a little bit smaller, it's a little excessive at the moment.
>
> **[3:58](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=238)** So you get a better sense of what I'm talking about.
>
> **[4:00](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=240)** So this is one of the properties of inline elements.
>
> **[4:04](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=244)** You can add padding.
>
> **[4:05](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=245)** The padding can be added on all four sides, but if the padding is exceeding, say, some of its neighboring text, it's going to expand to go over top of all of that neighboring text.
>
> **[4:16](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=256)** A feature, not a bug.
>
> **[4:19](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=259)** All right, the next property I want to demonstrate is on the M tag itself and here I'll set the background color to pink and then I'm going to set the margin to 1rem.
>
> **[4:33](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=273)** Now, here you might expect to see exactly the same behavior that you saw with the strong tag.
>
> **[4:38](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=278)** In other words, margin on all four sides.
>
> **[4:41](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=281)** But as you see here, very clearly, I have got some margin on the left side, I've got some on the right side, but as you see here, the top of the emphasized box intersects with the top of the paragraph here and no margin has actually been applied at all to the M tag.
>
> **[5:00](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=300)** It happens to be that margin is a property that can be applied to the left and the right sides of an inline element, but not to the top and the bottom.
>
> **[5:11](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=311)** And then finally, I'm going to reset.
>
> **[5:15](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=315)** I'm going to take off this padding here just for a moment here so we can actually see the link.
>
> **[5:20](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=320)** And then I'm going to go ahead and add to this.
>
> **[5:23](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=323)** Styling for this link in the A tag, let's say I set its width to 1000 pixels, which would be honking big.
>
> **[5:32](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=332)** And as you'll see here, absolutely nothing changes.
>
> **[5:35](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=335)** Why is that?
>
> **[5:37](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=337)** Well, this is another property of inline elements.
>
> **[5:40](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=340)** They are defined as being as wide as their content.
>
> **[5:44](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=344)** The width property has no impact whatsoever on an inline element.
>
> **[5:50](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=350)** So we can summarize properties of inline elements as follows.
>
> **[5:53](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=353)** So first of all, remember that they are as wide as their content.
>
> **[5:56](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=356)** Adding a width property has no effect on them at all.
>
> **[6:00](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=360)** The padding is offered on all four sides, but the padding may overlap other elements, not push them out of the way.
>
> **[6:08](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=368)** And finally, margin is going to be honored on the left and the right of an element only.
>
> **[6:14](https://www.linkedin.com/learning/css-display/inline-elements?u=76281980&t=374)** Not on the top and the bottom.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (2), default, (1), override (1), this. (1)
> **Definitions:** in other words (6), is a  (2), defined as (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** picture (1)
> **Speakers:** - by (1)

#### Block elements
> [LinkedIn Learning](https://www.linkedin.com/learning/css-display/block-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=1)** - [Instructor] Block elements are the other default value you'll encounter with your HTML elements.
>
> **[0:06](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=6)** In general, a block element is one that holds big blocks of information, elements like section, article, aside, header, footer, and body are all block level, but a number of other elements that contain content are also block level, like paragraphs, headings, tables and lists.
>
> **[0:24](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=24)** The generic block level element without semantic meaning is the div element.
>
> **[0:31](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=31)** So let's take a look at these block elements in more detail.
>
> **[0:35](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=35)** I'm going to start by putting a border around the h1 that I have here on line two.
>
> **[0:41](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=41)** So say h1 and then I'm going to say border, three pixels dotted green.
>
> **[0:49](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=49)** And you'll see here that that stretches all the way across the page.
>
> **[0:54](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=54)** Notice that as I start to flex the display section of the page here, that green box stays the same width which is the width of that display area over there on the side of the page.
>
> **[1:09](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=69)** The h1 is a block level element so it's as wide as it's containing element.
>
> **[1:14](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=74)** What is its containing element?
>
> **[1:16](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=76)** Well, it would be this section tag here.
>
> **[1:19](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=79)** And what is the section tag's containing element?
>
> **[1:21](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=81)** It's the body element, even though we don't see it here in CodePen, you know that it's there.
>
> **[1:27](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=87)** Let's go ahead and turn on borders for all of those.
>
> **[1:29](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=89)** So I'm going to go ahead and say body, let's say border three pixels solid red.
>
> **[1:43](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=103)** After that, we'll say section and border will be three pixels, dashed blue.
>
> **[1:53](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=113)** So as you see here there are all of the block level elements, h1, contained by section, which is contained by body.
>
> **[2:01](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=121)** And once again, as I flex this back and forth, you can see that they are all flexing together, just like that.
>
> **[2:09](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=129)** Now, if I set a width on the body that will constrain the h1 and this section.
>
> **[2:15](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=135)** Notice that how the height is going to increase when I do this but the height is still going to be set by the height of the content.
>
> **[2:22](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=142)** Just the width is going to change.
>
> **[2:24](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=144)** So here to the body tag, let's go ahead and set this to a width of, let's say 300 pixels.
>
> **[2:34](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=154)** And you'll see here that very happily our h1 is going to shrink up.
>
> **[2:39](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=159)** And our section is going to shrink up just as the body shrinks up.
>
> **[2:43](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=163)** But the height here is defined by the content.
>
> **[2:46](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=166)** In other words, there's no extra white space down here on the bottom.
>
> **[2:50](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=170)** There's nothing more than what we have present here in the document.
>
> **[2:56](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=176)** Now, these paragraphs are also block level elements.
>
> **[2:58](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=178)** Let's set a border on them too.
>
> **[3:02](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=182)** Border three pixels, solid black.
>
> **[3:09](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=189)** And now I'm also going to add to this a margin of three rem.
>
> **[3:16](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=196)** Now, if you notice here a very interesting thing just occurred with these paragraphs.
>
> **[3:21](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=201)** So this distance here let's assume that that is in fact three rem just as I called out and the distance over here looks eyeball, that's about the same.
>
> **[3:31](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=211)** on the top here, probably about the same and underneath this paragraph about the same, but notice that in between these two paragraphs, the distance here, this distance, looks like about three rem.
>
> **[3:46](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=226)** The same as it is over here on this side and this side.
>
> **[3:50](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=230)** Why is that?
>
> **[3:51](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=231)** Well, we have three rems of bottom margin on that first paragraph, three rems of margin on the top paragraph.
>
> **[4:00](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=240)** You would think that when those came together three plus three will equal six, but in the case of block level elements, those margins collapse so that the distance between these two elements is in fact three rem.
>
> **[4:13](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=253)** That would not be true with padding.
>
> **[4:15](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=255)** If I go ahead and add padding let's also say three rem for that, it starts to get a little bit ridiculous.
>
> **[4:24](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=264)** Now you see here that we have in fact added three rems of padding down here.
>
> **[4:28](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=268)** There's our border, there's our margin.
>
> **[4:30](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=270)** And then we have padding that is appearing down here as well.
>
> **[4:34](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=274)** So the padding does not add, but the margin, in fact, does.
>
> **[4:37](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=277)** I'm going to go ahead and take that padding out.
>
> **[4:40](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=280)** If you're feeling confused because clearly we don't quite have three rems of padding over here on the side, that's solely driven by the fact that these are very long words and the content is eating into the padding here.
>
> **[4:52](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=292)** There's ways you can deal with that in terms of hyphenation and so forth, but I'm not going to cover that at the moment.
>
> **[4:59](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=299)** So our block level elements may be summarized as follows.
>
> **[5:02](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=302)** First of all, they're as wide as there containing element.
>
> **[5:05](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=305)** The width property will constrain them and their children unless their children have a with assigned to them.
>
> **[5:12](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=312)** The padding and the margin are honored on all four sides.
>
> **[5:15](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=315)** But remember that the vertical margins do collapse when you have two block level elements that intersect each other.
>
> **[5:22](https://www.linkedin.com/learning/css-display/block-elements?u=76281980&t=322)** And finally, the height is going to be determined by the height of the content, not the height of the browser window.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), finally, (1)
> **Definitions:** is a  (1), in other words (1)
> **Env Vars:** html (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Understanding proper nesting of block and inline elements
> [LinkedIn Learning](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=1)** - [Instructor] As you've seen in the last two videos, block and inline are two really core concepts to CSS and to HTML.
>
> **[0:10](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=10)** And so I thought I'd present the last very important concept in terms of block and inline.
>
> **[0:16](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=16)** And that is how you can nest block and inline HTML elements within your document.
>
> **[0:23](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=23)** Because I see these kinds of mistakes made often and I just want to point out what is so-called legal and illegal, where this is concerned.
>
> **[0:33](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=33)** So let's just go on through these one by one.
>
> **[0:36](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=36)** I put a little comment up here at the top to tell you what's legal and what's illegal.
>
> **[0:41](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=41)** All right.
>
> **[0:42](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=42)** So we can have block elements inside of block elements.
>
> **[0:45](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=45)** That is a given.
>
> **[0:47](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=47)** All of our block level elements are going to go inside of the body tag, which itself is a block level element.
>
> **[0:52](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=52)** So this has to be legal, otherwise we can't build a webpage.
>
> **[0:56](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=56)** Inline elements can go inside of block elements.
>
> **[0:59](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=59)** We've seen that before.
>
> **[1:00](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=60)** Say here on line 14, where we have a paragraph and we want to put a link and a strong inside of it.
>
> **[1:06](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=66)** Well, obviously links and Strongs are inline and a paragraph is block.
>
> **[1:11](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=71)** So that is of course legal as well.
>
> **[1:14](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=74)** You can also have inline inside of inline elements.
>
> **[1:17](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=77)** So here on line 15, I have an example of a paragraph that has an emphasized bit of text, that has a link inside of it.
>
> **[1:26](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=86)** And that is completely legal as well.
>
> **[1:29](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=89)** That will validate and be very, very happy.
>
> **[1:31](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=91)** But the thing that's illegal happens to be this one right here.
>
> **[1:36](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=96)** putting block elements inside of inline elements.
>
> **[1:39](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=99)** And this is a big no-no.
>
> **[1:42](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=102)** And I see a lot of people do it when it comes to links.
>
> **[1:46](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=106)** So in other words, we take a link and then we're going to wrap it around, say a paragraph or many people like to make a whole card that's clickable.
>
> **[1:56](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=116)** And so they code it with the link on the outside and they might have a paragraph in here, and an image and subtext and all of it is one great, big, huge honking link.
>
> **[2:05](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=125)** This is not legal.
>
> **[2:07](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=127)** It will not validate through the validator.
>
> **[2:09](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=129)** And this is poorly formed HTML.
>
> **[2:12](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=132)** So this is a fashion no.
>
> **[2:13](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=133)** Do not put your inline tags around your block level elements.
>
> **[2:19](https://www.linkedin.com/learning/css-display/understanding-proper-nesting-of-block-and-inline-elements?u=76281980&t=139)** All of the other combinations, those are all legal.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), in other words (1)
> **Env Vars:** html (3), css (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Display: none vs. visibility: hidden
> [LinkedIn Learning](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=1)** - [Lecturer] Display none is one of CSS's favorite tricks and it's likely one you're already familiar with.
>
> **[0:07](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=7)** I'll demo it for you anyway.
>
> **[0:08](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=8)** But chances are you're probably familiar with it.
>
> **[0:11](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=11)** But there's also another property called visibility, with a value of hidden.
>
> **[0:16](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=16)** Sounds like the same thing.
>
> **[0:18](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=18)** Doesn't it?
>
> **[0:18](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=18)** Well, there are subtly different.
>
> **[0:20](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=20)** So let's look at that difference now.
>
> **[0:23](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=23)** So here inside of this CodePen, this is the same sort of section with the heading and the paragraph with some inline elements inside of it that you've seen before.
>
> **[0:34](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=34)** I'm going to go ahead and write some CSS here to demonstrate this.
>
> **[0:38](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=38)** So for example if I say strong, let's take all of the strong tags and let's display none.
>
> **[0:47](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=47)** As you'll see here, all of the strong texts simply disappears.
>
> **[0:52](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=52)** Notice that the space that it used to occupy has also disappeared.
>
> **[0:57](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=57)** So if I set this back to inline, which is its default value, you'll see there are all that text comes back.
>
> **[1:05](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=65)** And if I change it back to none, it disappears and the space that it occupied, it goes away as well.
>
> **[1:14](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=74)** So let's contrast that with em.
>
> **[1:17](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=77)** And so you see here we have a nice long sentence down here in this third paragraph.
>
> **[1:23](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=83)** So I'm going to go ahead and say em, and I'm going to say visibility, hidden.
>
> **[1:32](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=92)** Aha, so that is the difference.
>
> **[1:33](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=93)** So visibility hidden means that the text will in fact not display, but as you see the space that it occupied is maintained.
>
> **[1:46](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=106)** So if you're familiar with positioning in CSS these are kind of like absolute and relative positioning.
>
> **[1:52](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=112)** Absolute positioning means that whatever is absolutely positioned, that element disappears completely, the space that it occupies goes away as opposed to relative positioning, which means that when you send something to a position of relative, you can move it around on the page, and the space that it previously occupied is maintained.
>
> **[2:14](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=134)** So let's also do a little contrasting, a little bit further down the document here, I have an h2 and an h3.
>
> **[2:20](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=140)** So, I'm going to go ahead and set up another, I shall just add it here to my em tag, my h3, visibility hidden.
>
> **[2:28](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=148)** Notice that that goes away and it leaves a big gap here as well between the h2 and the paragraph.
>
> **[2:37](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=157)** But if I take the h2 and I set it to display none, that space that it occupied will go away, page tightens up.
>
> **[2:46](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=166)** We still have space there for h3, but the h2 space is completely disappeared.
>
> **[2:53](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=173)** So, if you happen to be in a situation where you want to hide some texts, but you want to keep the space, that may be very well true for something with JavaScript for example, where we are making something appear and disappear, and you don't want the whole page to wiggle around and everything goes squirrely on it.
>
> **[3:10](https://www.linkedin.com/learning/css-display/display-none-vs-visibility-hidden?u=76281980&t=190)** Visibility hidden may be a better choice for you than something like display none, which will actually remove the space that the text previously occupied.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (1)
> **Env Vars:** css (3)
> **Definitions:** means that (3)
> **Analogies:** for example (2), kind of like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [lecturer] (1)


### 2. Newer Display Values

#### Understanding layouts with inline flex and grid
> [LinkedIn Learning](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=1)** - [Instructor] To this point, we've only looked at block and inline elements, and the block and inline values for the display property.
>
> **[0:08](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=8)** By now, you've probably realized that display property is a property that does not inherit its values.
>
> **[0:15](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=15)** In other words, if I set this div with the class of road to have a value of inline, the div with a class of box and the paragraph are not going to inherit that inline characteristic from it.
>
> **[0:29](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=29)** However, as we move on to Flexbox and grid, we have a new type of layout structure in which the display type is declared on the parent.
>
> **[0:39](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=39)** And then the children are going to receive some interesting properties as a result.
>
> **[0:44](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=44)** So in this particular example, I've got a div with a class of row.
>
> **[0:49](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=49)** You've seen this kind of HTML before, all kinds of places.
>
> **[0:53](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=53)** Got a div with a glass of row.
>
> **[0:54](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=54)** And then we have a series of divs with a class of box.
>
> **[0:57](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=57)** Inside of those, we have paragraphs that have numbers, right?
>
> **[1:01](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=61)** That's what we've got here.
>
> **[1:03](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=63)** Four of those.
>
> **[1:04](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=64)** And then down here, all I've done is take row and box as those classes and put borders on those things.
>
> **[1:10](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=70)** So, now what I'm going to do here in the row class, which is the one that wraps all the way around the HTML here, I'm going to set its display to flex.
>
> **[1:23](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=83)** And simply by doing that, you can see here that the row itself, which has the red border, looks to be actually unchanged.
>
> **[1:33](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=93)** It's displaying exactly the way it was before.
>
> **[1:36](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=96)** It's stretching all the way across it's containing element the body here, and it's as high as its content, which it was before as well.
>
> **[1:44](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=104)** But what has changed is the layout of these boxes, and these boxes are now as wide as their content.
>
> **[1:52](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=112)** And they're filling up the height of the row.
>
> **[1:55](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=115)** Grid has a similar behavior.
>
> **[1:57](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=117)** I'm going to focus on Flexbox in these particular examples, but you could do everything that I'm doing here with grid and see similar kinds of behavior.
>
> **[2:07](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=127)** You may not have thought much about this if you've worked with Flexbox before.
>
> **[2:11](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=131)** However, display flex is one of the few CSS properties which changes both the parent and the child.
>
> **[2:19](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=139)** That meaning behind this has to do with what's called inner and outer layout.
>
> **[2:24](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=144)** Once you understand this concept, then Flexbox and grid, and less used properties like inline flex, and inline grid start to make more sense.
>
> **[2:34](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=154)** The outer layout is this outside box, which, in this particular example is a row, and it's often a row in Flexbox.
>
> **[2:44](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=164)** When display is set to the flex property, what we're going to do is display this outside row here as a block level display.
>
> **[2:54](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=174)** In other words, the row is as large as its containing element.
>
> **[2:57](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=177)** In this case, the body tag.
>
> **[2:59](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=179)** However, if I set this road, have a display of inline flex, like that, then the row is only going to be as wide as its content, exactly as you would expect with an inline element.
>
> **[3:13](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=193)** So that's the outer layout portion of the display property.
>
> **[3:17](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=197)** In other words, it's going to control whether that box is going to stretch all the way across the page or only to the width of its content.
>
> **[3:26](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=206)** Now, the inner layout refers to the properties that are bestowed on the children of this element.
>
> **[3:31](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=211)** In this case, in our row.
>
> **[3:33](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=213)** So I'm going to go ahead and set my display back to flex so that my row stretches all the way across the page.
>
> **[3:41](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=221)** And now here on the box, which is the child of the row, I'm going to set it to one of its special properties, like flex basis of let's say 20%.
>
> **[3:53](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=233)** And that will give each one of those boxes a width of 20%.
>
> **[3:58](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=238)** And as you can see here, there's some space left over.
>
> **[4:01](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=241)** About 20%, if you do the math.
>
> **[4:04](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=244)** And that is what would be here in the end of this row.
>
> **[4:08](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=248)** If I switched back again to inline flex, then that outside box, once again, is going to collapse to just the width of all of those properties, and that flex basis value is no longer paid attention to in this particular situation.
>
> **[4:27](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=267)** There is a new system of display properties that have two values to reflect this outer and inner display value going forward.
>
> **[4:35](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=275)** In this case, it would be, say, inline space flex.
>
> **[4:40](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=280)** That particular syntax at this point is only supported by Firefox.
>
> **[4:44](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=284)** You would say inline space flex, or you would say block space flex.
>
> **[4:49](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=289)** I'm using Chrome here.
>
> **[4:50](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=290)** So this particular format doesn't work in this particular browser, but do try opening this code pen in Firefox.
>
> **[4:57](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=297)** And you'll see that in fact it does work there.
>
> **[5:01](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=301)** For now, though, the values that are going to work across all browsers are simply flex.
>
> **[5:06](https://www.linkedin.com/learning/css-display/understanding-layouts-with-inline-flex-and-grid?u=76281980&t=306)** If you want the block behavior of flex, which is probably what you use most of the time now, and inline hyphen flex, if you want to have more of that inline behavior for your outer element.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), in other words (3)
> **Code Keywords:** case, (3), class, (1), let (1)
> **Env Vars:** html (2), css (1)
> **Tools:** firefox (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Flow-root and floats
> [LinkedIn Learning](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=1)** - [Narrator] Ah, floats.
>
> **[0:02](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=2)** Everybody loves to hate a float.
>
> **[0:05](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=5)** They look so nice when our text is aligned next to our images, maybe wrapping around them, but then something weird always happens.
>
> **[0:13](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=13)** So here I've got an example in this code pen, you can see I have a section, I have a paragraph, I have my adorable kitten from place kitten.
>
> **[0:22](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=22)** Your kitten might be slightly different but it will be the same dimensions, uh, in this lovely paragraph of text.
>
> **[0:29](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=29)** And I am just going to go ahead and float that image because of course, image is an inline element.
>
> **[0:35](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=35)** It is indeed in-line with the rest of the words in my paragraph, but it looks a little weird because of course the text aligned to the bottom of the image by default.
>
> **[0:43](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=43)** So all we need to do is say img and then we can say something like float left, and uh, if you want to put a margin around it and so forth, you can do that as well.
>
> **[0:53](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=53)** But this is what happens.
>
> **[0:55](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=55)** We have this lovely background.
>
> **[0:57](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=57)** And what we'd really like to have happen is we'd like this border to stretch on down with the color, maybe beneath this picture.
>
> **[1:05](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=65)** But if this is the look you're looking for, there's absolutely nothing wrong with doing this having the picture hanging out of the box like that.
>
> **[1:12](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=72)** People do that kind of thing, but usually you want that box to encompass the picture.
>
> **[1:17](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=77)** And it never does, and people get really frustrated.
>
> **[1:21](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=81)** So now normally what you do is something like a hack, of some kind or another, frequently in the old days, we'd put in a break tag, a BR tag, we'd give it a class of clear fix, and we'd make it clear underneath the picture, that was really hacky.
>
> **[1:39](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=99)** These days, we'd do something with the section maybe.
>
> **[1:42](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=102)** We'd say something like overflow auto and that would go ahead and give us a clear on the picture.
>
> **[1:50](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=110)** And then the box would expand on down the page.
>
> **[1:53](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=113)** Problem here is that this overflow auto, which is a better solution than that hacky, clear fix thing we did, because we don't have to use that line break to hold the clear fixed class in place.
>
> **[2:06](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=126)** But overflow was meant to deal with overflowing content, often used for dealing with scroll bars or clipped drop shadows.
>
> **[2:13](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=133)** If you're using it to deal with this float, then you may not have it available to use it when it's really needed.
>
> **[2:20](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=140)** Fortunately, there's a new and better way of doing this instead of using overflow auto to fix this problem, you can instead say display flow, hyphen, route.
>
> **[2:35](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=155)** And flow route is designed to actually fix these problems with your floats.
>
> **[2:42](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=162)** So here I've put it on the section.
>
> **[2:44](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=164)** If I had multiple floating images inside of the section of this page, it would deal with all of those really nicely.
>
> **[2:50](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=170)** I don't have to worry about clearing images on an image by image basis.
>
> **[2:54](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=174)** To me, this is a real game changer.
>
> **[2:56](https://www.linkedin.com/learning/css-display/flow-root-and-floats?u=76281980&t=176)** Too bad flow route came too late for all of the floats we used to have in our layout, but it's here now, and you will definitely love using flow route when you work with your images next, floated inside of your documents.

> [!info]- Semantic Content
>
> **Analogies:** picture (5)
> **Definitions:** is a  (2), is an  (1)
> **Code Keywords:** default. (1), for, (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### Inline-block
> [LinkedIn Learning](https://www.linkedin.com/learning/css-display/inline-block?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=1)** - [Instructor] There's a few different ways of laying out horizontal navigation bars.
>
> **[0:05](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=5)** And one of those is by using display inline block.
>
> **[0:11](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=11)** The other one being Flexbox, and you may have used inline block has a way of creating nav bars for quite some time now, but the term inline block, itself, is really pretty confusing.
>
> **[0:24](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=24)** And in light of what you just learned about outer and inner display values, maybe inline block will start to make more sense to you now, as we take a look at it in a bit more depth.
>
> **[0:37](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=37)** So here I've put together a simple navigation bar for you.
>
> **[0:42](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=42)** And if you notice the markup here, this is the way navigation bars should be marked up all the time.
>
> **[0:48](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=48)** I can't believe the crazy HTML I see these days of people trying not to use lists for navigation bars, but the nav tag goes around the outside of this.
>
> **[0:58](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=58)** It's an unordered list because this is a list of links.
>
> **[1:01](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=61)** They can be visited in any particular order.
>
> **[1:03](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=63)** So this is the correct semantic markup for any navigation bar that's out there.
>
> **[1:08](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=68)** Now, if you take a look at our CSS styling underneath of that you'll see here that I've just pre-configured a few things here for you.
>
> **[1:17](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=77)** I turned off the bullets and got rid of the margin and padding on the UL.
>
> **[1:22](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=82)** And I applied some styling here to our links.
>
> **[1:25](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=85)** So, they look like this right now.
>
> **[1:27](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=87)** And what I'd like to do first is I'd like to take a look at the LI elements.
>
> **[1:33](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=93)** And LIs, by default, are block level.
>
> **[1:36](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=96)** And we can tell that if we put a border on them, two pixels solid blue, you'll see that these are going to stretch all the way across the page.
>
> **[1:47](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=107)** So if I want the nav bar to go horizontal on this page, what I could do is I need to somehow get these links next to each other.
>
> **[1:57](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=117)** The first thing you might think of is, well, let's go ahead and say a display of inline.
>
> **[2:04](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=124)** See how nicely that works?
>
> **[2:07](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=127)** Immediately everything goes all on one line because the links themselves, of course, the a tag is an inline tag, and the LI now will shrink to be as wide as its content, which is the a tag.
>
> **[2:21](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=141)** So everything goes on one line like this.
>
> **[2:24](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=144)** And then we can add some padding, let's say 0.5rem, just so they can get off their border a little bit there.
>
> **[2:32](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=152)** And then we can add a margin.
>
> **[2:34](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=154)** 0.5rem as well.
>
> **[2:37](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=157)** So we have a little bit of space in between them.
>
> **[2:41](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=161)** Now, these LIs are in line.
>
> **[2:43](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=163)** You can't get margin on all four sides.
>
> **[2:45](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=165)** You'll only get the margin on the left and the right.
>
> **[2:48](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=168)** If you want to add the margin to all four sides but you still want the links to show up next to each other, this is where inline block comes into play.
>
> **[2:58](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=178)** Because here we're to preserve the ability to place margin on all four sides, like a block level element, but we're going to keep the box as big as the content, like an inline element.
>
> **[3:08](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=188)** And that is why it's called inline block.
>
> **[3:12](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=192)** So let's go ahead And switch this from display inline on the LI to inline block.
>
> **[3:19](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=199)** And now you see, we have margin on all the sides, which is more reflective of what we were Trying to get.
>
> **[3:26](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=206)** Now, before I Leave this navbar, let's address the clickable area issue which is another annoyance on many webpages.
>
> **[3:34](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=214)** The current clickable area on these buttons is only the shaded area that you see there.
>
> **[3:40](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=220)** In other words, the area inside of the link itself.
>
> **[3:43](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=223)** The clickable area is not expanding to fill the full button.
>
> **[3:47](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=227)** And in this particular situation, that's not an enormous deal because we don't have a lot of non-clickable area inside of these buttons, but I'm sure you've encountered this on other websites where you expect to be able to click somewhere and have something activate, and it doesn't.
>
> **[4:03](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=243)** So how can we make the shaded area bigger to fill out the full list item and make it all one color?
>
> **[4:12](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=252)** Well, there's a couple of possible solutions to this, but I'm going to suggest the best way to do this is the following.
>
> **[4:18](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=258)** So here on my a tag, I'm going to add to this a display block.
>
> **[4:26](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=266)** In other words, we're going to expand our a, such that it is going to fill the entire area in which it's contained.
>
> **[4:35](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=275)** I'm also going to take the padding off of the LI, and I'm going to move it to the a, instead of putting it on the LI.
>
> **[4:45](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=285)** And the reason why here is because then, that padding is going to fill the whole area with color, instead of having some of that white outlining that's in between.
>
> **[4:56](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=296)** And now with those two changes, you'll see here, we have buttons that look like buttons.
>
> **[5:01](https://www.linkedin.com/learning/css-display/inline-block?u=76281980&t=301)** They change together as a unit, they have lovely large clickable areas, and they are far more usable than they were when we started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (2), default, (1), switch (1), this, (1)
> **Definitions:** in other words (2), is a  (1), is an  (1)
> **CLI Commands:** make (3)
> **Env Vars:** html (1), css (1)
> **Speakers:** - [instructor] (1)

#### Table, inline-table, and its internal structures
> [LinkedIn Learning](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=1)** - [Instructor] In terms of markup in HTML table is about as complicated as things get.
>
> **[0:07](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=7)** There are so many different tags that are used inside of a table, and they have a very specific way in which they can be nested.
>
> **[0:15](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=15)** And every single one of those tags has its own special display value.
>
> **[0:20](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=20)** So I'd like to go through those right now, but first of all let me just point you to my course on tables.
>
> **[0:28](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=28)** My, the course is called HTML Tables.
>
> **[0:30](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=30)** It's available here at LinkedIn Learning and it will walk you through the process of marking up a table, styling it and making it responsive.
>
> **[0:39](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=39)** And if you don't have a background in how to put together a table this is the best place to start because I don't have time to walk you through all of the table tags and exactly how they're nested in this example.
>
> **[0:52](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=52)** But for now, I've actually taken to code from that course.
>
> **[0:56](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=56)** And I've used it here as my example just so you can see how this is put together.
>
> **[1:01](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=61)** So starting from the beginning here, a display table has occasional uses elsewhere in your document.
>
> **[1:08](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=68)** That may be one that you'll want to use on occasion for various types of layout problems but in any case display table is the block form of this.
>
> **[1:17](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=77)** In other words, the table will stretch to fill it's containing element.
>
> **[1:20](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=80)** Display inline table would be the table would only be as wide as its content.
>
> **[1:26](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=86)** You've seen now inline flex, inline grid, inline block and now here's inline table, the same type of thing.
>
> **[1:34](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=94)** For a table caption, that's this thing up here at the top where it says Wisdom Pet Medicine Product Price List, that is the caption.
>
> **[1:42](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=102)** And it has the value of display table caption.
>
> **[1:46](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=106)** The head is a group of tags at the top of the page.
>
> **[1:50](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=110)** In this case, those are shown here in blue.
>
> **[1:52](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=112)** And just to point to you where that is, as you see here T head starts on line 13, there's a row that has some cells inside of it and a second row with more values inside of it.
>
> **[2:03](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=123)** And then T head is grouping those two rows together.
>
> **[2:06](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=126)** So that would be table hyphen header, hyphen group for the display value.
>
> **[2:11](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=131)** The body is shown here in yellow and that is display of table hyphen row, hyphen group.
>
> **[2:18](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=138)** And then the foot is the pink down here on the bottom.
>
> **[2:22](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=142)** And that is display table hyphen footer, hyphen group.
>
> **[2:27](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=147)** The rows themselves have values, If I take off the comment here everything will turn gray on this page because everything is in a row and this comes later in my document.
>
> **[2:39](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=159)** It's also closer to the contents.
>
> **[2:41](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=161)** There's a couple of reasons why this background color of gray will take priority over what I said previously.
>
> **[2:48](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=168)** So as you see here, this is displaying as a table row.
>
> **[2:51](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=171)** I'm going to put back in that comment.
>
> **[2:54](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=174)** Then we have our individual cells and our individual headers.
>
> **[2:58](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=178)** These are each of these cells that are here, and I have put a border of two pixels dotted blue around both regular cells and header cells.
>
> **[3:08](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=188)** These are both controlled by display of table cell.
>
> **[3:11](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=191)** So even though there are different tags, their display properties are the same.
>
> **[3:15](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=195)** Call and call group have display properties of table column, and table column group respectively.
>
> **[3:21](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=201)** Although you will find that they don't actually display here on this webpage.
>
> **[3:26](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=206)** Call and call group their purpose is to indicate how this information which is retail and cases is going to display over these words here and how these various columns are grouped together and so forth.
>
> **[3:38](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=218)** So they don't typically show up on the webpage itself but yet they have these display properties that you could leverage.
>
> **[3:45](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=225)** So that's sort of an outline here of tables and their display properties.
>
> **[3:50](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=230)** There's a lot to know about tables to really appreciate all of the nuances of this.
>
> **[3:54](https://www.linkedin.com/learning/css-display/table-inline-table-and-its-internal-structures?u=76281980&t=234)** And once again if you need to learn more about tables, I recommend my course on the topic.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), let (1), case, (1)
> **Definitions:** is called (1), in other words (1), is a  (1)
> **Env Vars:** html (2)
> **CLI Commands:** find (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### List-item
> [LinkedIn Learning](https://www.linkedin.com/learning/css-display/list-item?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=1)** - Next up, it's possible to turn anything into a list item in terms of its display.
>
> **[0:07](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=7)** Why would you want to do this?
>
> **[0:08](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=8)** Well, remember that if you want to convey the semantic meaning of a list like steps that have to be completed in a certain order or a list of things, that those need to be marked up as a list with either the UL for unordered lists or the OL for ordered list, plus LI for your individual list items.
>
> **[0:29](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=29)** You need to use semantic HTML to convey the meaning of what it is that you want to show.
>
> **[0:35](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=35)** However, if you want the look of a list without conveying the meaning of a list, you can replicate this with a list item display property.
>
> **[0:46](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=46)** So to set this up, let's start by setting our display to list item.
>
> **[0:51](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=51)** So if you're inside of it, I have a span with a class of list because I wanted to show you you can make a list in the middle of a sentence.
>
> **[0:58](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=58)** So let's go on ahead and establish that we have a class of list here.
>
> **[1:02](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=62)** And then inside of this, we can simply say display list-item.
>
> **[1:08](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=68)** I don't know why you'd want to do this, but you can, so here you go.
>
> **[1:12](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=72)** Now, by default here, you see that the words, particular words are on their own line as you would expect a list item to be, but there is no bullet in front of this.
>
> **[1:22](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=82)** You might expect that there's a bullet here for this list item by default.
>
> **[1:27](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=87)** And there is indeed that, there is a bullet by default type called a disc, but it is styled outside of this element and it's actually out of range for you to be able to see here.
>
> **[1:38](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=98)** So there's a couple of ways that you can do this.
>
> **[1:41](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=101)** If you're not familiar with the list style position property, that is one way of fixing this.
>
> **[1:50](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=110)** Right now, this is set to a value of outside.
>
> **[1:53](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=113)** So that bullet was off the screen and someplace where we could not see it by saying inside we're pulling the bullet in to be in line here with the text that's around it.
>
> **[2:05](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=125)** So this is one possible solution, definitely works okay.
>
> **[2:09](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=129)** And I'll just show you to prove to you that this is in fact, the case.
>
> **[2:12](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=132)** We could switch it to the default value of outside and you'll see that now the bullet is off the screen again.
>
> **[2:18](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=138)** The other possibility, of course is, well, the issue is we don't have any margin here.
>
> **[2:23](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=143)** So we could put in our own margin, say 1.5 rem.
>
> **[2:29](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=149)** And that would go on ahead and push over our text enough such that our bullet is now visible.
>
> **[2:35](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=155)** And of course, since I put 1.5 rem on all four sides, you see that we have margin on all sides of that box.
>
> **[2:42](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=162)** And we could of course, put a border on this, one pixel solid red, and you'll see that as you would expect there's a box that goes around that particular list item.
>
> **[2:55](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=175)** So what is the right solution to this particular problem?
>
> **[2:59](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=179)** It depends, in this particular case, you're using list item not to convey any semantic meaning at all.
>
> **[3:05](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=185)** We are just trying to get this to look the way we want it to look.
>
> **[3:08](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=188)** So what's the right answer?
>
> **[3:10](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=190)** Anything you want, that looks the way you want.
>
> **[3:13](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=193)** So in this particular solution that I have here, get rid of that border.
>
> **[3:17](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=197)** The solution with the margin gives us a little bit more space around the whole thing.
>
> **[3:21](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=201)** If I said, list style position inside, I could do that in addition to my margin, then it's really going to push over.
>
> **[3:32](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=212)** So this is the artistry of CSS.
>
> **[3:35](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=215)** And now you can pick whatever type of solution that you want in order to make this look the way you want.
>
> **[3:42](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=222)** I do worry that a display of a list item may lead to bad habits with HTML.
>
> **[3:47](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=227)** It allows you to continue to mark everything up as a div or a paragraph, and then rely heavily on CSS to give you the list look that you really want.
>
> **[3:55](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=235)** Please, please don't do this.
>
> **[3:57](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=237)** If it's a list, there's a perfectly good HTML tag set that you can use to mark it up as such.
>
> **[4:04](https://www.linkedin.com/learning/css-display/list-item?u=76281980&t=244)** And you're going to convey accessibility to a lot of people and search engines, it will just be better in the long run for your webpage to mark things up, to convey the meaning you wish to convey.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (4), this, (3), let (2), default. (1), case. (1)
> **Env Vars:** html (3), css (2)
> **CLI Commands:** make (2)
> **Versions:** 1.5 (2)
> **Definitions:** is a  (1)
> **Speakers:** - next (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/css-display/next-steps-25753009?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-display/next-steps-25753009?u=76281980&t=0)** - Hey everybody, it's Jen Kramer.
>
> **[0:02](https://www.linkedin.com/learning/css-display/next-steps-25753009?u=76281980&t=2)** Thanks so much for watching CSS Display.
>
> **[0:05](https://www.linkedin.com/learning/css-display/next-steps-25753009?u=76281980&t=5)** I hope you learned a new display value that you'll use in your next project.
>
> **[0:09](https://www.linkedin.com/learning/css-display/next-steps-25753009?u=76281980&t=9)** If you liked me here, you'll like me in some of my other courses as well.
>
> **[0:13](https://www.linkedin.com/learning/css-display/next-steps-25753009?u=76281980&t=13)** How much do you know about the inheritance in CSS?
>
> **[0:17](https://www.linkedin.com/learning/css-display/next-steps-25753009?u=76281980&t=17)** How do you calculate specificity, and how does the cascade really work?
>
> **[0:22](https://www.linkedin.com/learning/css-display/next-steps-25753009?u=76281980&t=22)** Find out more in my course "[[CSS- Inheritance, Specificity, and the Cascade]]."
>
> **[0:27](https://www.linkedin.com/learning/css-display/next-steps-25753009?u=76281980&t=27)** You know media queries are used in responsive design with screen widths, but did you know they can be used for color detection, aspect ratio, and more?
>
> **[0:36](https://www.linkedin.com/learning/css-display/next-steps-25753009?u=76281980&t=36)** Check out "Advanced CSS Media Queries" to learn more about the media and media queries.
>
> **[0:42](https://www.linkedin.com/learning/css-display/next-steps-25753009?u=76281980&t=42)** Left, right, top, and bottom makes sense in a left to right world.
>
> **[0:47](https://www.linkedin.com/learning/css-display/next-steps-25753009?u=76281980&t=47)** But what about in a right to left world or in a vertical world?
>
> **[0:51](https://www.linkedin.com/learning/css-display/next-steps-25753009?u=76281980&t=51)** Logical properties allow designers to work with text regardless of its writing mode.
>
> **[0:56](https://www.linkedin.com/learning/css-display/next-steps-25753009?u=76281980&t=56)** Learn how to incorporate these properties into your projects through a series of 12 hands-on exercises in my course "Coding Exercises: CSS Logical Properties."
>
> **[1:08](https://www.linkedin.com/learning/css-display/next-steps-25753009?u=76281980&t=68)** Thanks again for watching, and I'll see you soon in another course.

> [!info]- Semantic Content
>
> **Env Vars:** css (5)
> **CLI Commands:** find (1)
> **Speakers:** - hey (1)


## Path Context

### In [[Learn CSS]]
← [[CSS- Animation]] | **7 of 12** | [[Advanced Responsive Layouts with CSS Flexbox]] →

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