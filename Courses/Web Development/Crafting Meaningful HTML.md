---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: crafting-meaningful-html
url: "https://www.linkedin.com/learning/crafting-meaningful-html"
duration_minutes: 103
duration: 1h 43m
level: Intermediate
updated: 2/1/2024
learners: 23509
skills:
  - HTML
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQGGGPRrXtqcCQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1578939393521?e=2147483647&amp;v=beta&amp;t=cKv6r7SvAbH7XCeHa-0NIV_x3LE-4jZPIkFv36npceU"
linkedin_topic: Web Development
learning_paths:
  - '[[Advance Your Skills in HTML]]'
prev_courses:
  - '[[HTML Essential Training]]'
next_courses:
  - '[[HTML and CSS- Linking]]'
path_nav: '[{"path":"Advance Your Skills in HTML","position":2,"total":11,"prev":"HTML Essential Training","next":"HTML and CSS- Linking"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/html
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Crafting%20Meaningful%20HTML.md)

![Crafting Meaningful HTML](https://media.licdn.com/dms/image/v2/C4D0DAQGGGPRrXtqcCQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1578939393521?e=2147483647&amp;v=beta&amp;t=cKv6r7SvAbH7XCeHa-0NIV_x3LE-4jZPIkFv36npceU)

# Crafting Meaningful HTML

> HTML is a powerful tool kit that gives your code superpowers, if you choose to use them. Thanks to the built-in behaviors in HTML, you can reduce the amount of explicit code you need. Structure your documents so that they work well as well as look good, and you can make your content available to more people and more programs. In this course, Jen Kramer shows you how to craft semantic, meaningful H

> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html) | 1h 43m | Intermediate | 24K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Craft meaningful HTML
  - Working with CodePen
  - Working with Visual Studio Code
- [**1. Convert Content to Semantic HTML Markup**](#1-convert-content-to-semantic-html-markup) (7 videos)
  - Explore content and add it to CodePen
  - Identify major elements of a page
  - Identify headings and paragraphs
  - Enhance an article with emphasis and links
  - Ordered, unordered, and definition lists
  - Challenge: First pass at article markup
  - Solution: First pass at article markup
- [**2. Build the Rest of the Webpage**](#2-build-the-rest-of-the-webpage) (9 videos)
  - Move your code from CodePen to Visual Studio Code (VS Code)
  - Understand the head code
  - Add semantic navigation
  - Add images, figures, and figure captions
  - Add footers with address, time, and date
  - Add quotes, line breaks, and citations
  - When to use div and span elements
  - Challenge: Identify semantic problems
  - Solution: Identify semantic problems
- [**3. Additional Important Semantic Elements**](#3-additional-important-semantic-elements) (5 videos)
  - Controlling breaks with <wbr> or &shy;
  - Displaying code with <code>, <samp>, and <kbd>
  - Providing scripting alternatives with <noscript>
  - Providing details with <details> and <summary>
  - Understanding the misunderstood <hr>
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Craft meaningful HTML
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/craft-meaningful-html-23412209?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/craft-meaningful-html-23412209?u=76281980&t=0)** - Semantic HTML means HTML with meaning behind its elements.
>
> **[0:05](https://www.linkedin.com/learning/crafting-meaningful-html/craft-meaningful-html-23412209?u=76281980&t=5)** It's the UX of HTML, and good semantics mean good accessible user experiences.
>
> **[0:12](https://www.linkedin.com/learning/crafting-meaningful-html/craft-meaningful-html-23412209?u=76281980&t=12)** With accessibility at the forefront of developers' minds and with lawsuits about inaccessible websites in the news, there's never been a better time to learn the rest of HTML.
>
> **[0:22](https://www.linkedin.com/learning/crafting-meaningful-html/craft-meaningful-html-23412209?u=76281980&t=22)** Let me show you how to improve accessibility and user experience.
>
> **[0:26](https://www.linkedin.com/learning/crafting-meaningful-html/craft-meaningful-html-23412209?u=76281980&t=26)** I'm Jen Kramer, and for over 20 years, I've been teaching students that the Hypertext Markup Language is about identifying the types of content on a webpage, not about providing the scaffolding for hanging CSS classes and JavaScript events.
>
> **[0:42](https://www.linkedin.com/learning/crafting-meaningful-html/craft-meaningful-html-23412209?u=76281980&t=42)** So if you're ready, let's get started crafting some meaningful HTML.

> [!info]- Semantic Content
>
> **Env Vars:** html (5), css (1)
> **Code Keywords:** let (2)
> **Speakers:** - semantic (1)

#### Working with CodePen
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-codepen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-codepen?u=76281980&t=0)** - [Instructor] In this course, we'll be working with a product called CodePen.
>
> **[0:04](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-codepen?u=76281980&t=4)** CodePen is something of an industry standard at this point, it is a way that you can work with HTML, CSS, and JavaScript online and where everyone can see your work.
>
> **[0:15](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-codepen?u=76281980&t=15)** So I have some of the examples that we'll be using in this course available here through the CodePen editor.
>
> **[0:22](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-codepen?u=76281980&t=22)** As you watch each of the videos, you'll see a website address, a URL come up on your screen.
>
> **[0:29](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-codepen?u=76281980&t=29)** All you'll need to do is put that into your browser bar and that will take you to whatever it is that I happen to be talking about at that particular moment.
>
> **[0:40](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-codepen?u=76281980&t=40)** Now, if you want you can go on ahead and just start typing in here.
>
> **[0:45](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-codepen?u=76281980&t=45)** Hooray, I am editing this page.
>
> **[0:50](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-codepen?u=76281980&t=50)** Which is grand, but if you want to actually save this work, what I would recommend that you do is hit the Fork button up here on the top.
>
> **[0:58](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-codepen?u=76281980&t=58)** Forking is a term that indicates we're going to make a copy of this and then we're going to do something with it on our own.
>
> **[1:06](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-codepen?u=76281980&t=66)** So if you just click the Fork button it's going to give you the option of signing in.
>
> **[1:12](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-codepen?u=76281980&t=72)** Feel free to enter your username or email address and your password, you can also reset your password or you have the option of signing up for CodePen.
>
> **[1:21](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-codepen?u=76281980&t=81)** Again, this would allow you to save your work if you want to do that.
>
> **[1:25](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-codepen?u=76281980&t=85)** If you're not interested in signing up for the service it's totally fine, you can just edit here, you just won't be able to save your work as you go.
>
> **[1:34](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-codepen?u=76281980&t=94)** Either way it works perfectly fine.

> [!info]- Semantic Content
>
> **Env Vars:** html (1), css (1), url (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Working with Visual Studio Code
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-vs-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-vs-code?u=76281980&t=0)** - [Instructor] While this course starts in CodePen, we will be moving into Visual Studio Code, also called VS Code.
>
> **[0:09](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-vs-code?u=76281980&t=9)** This is one of approximately one bajillion different editors that are out there and available for editing HTML and CSS.
>
> **[0:18](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-vs-code?u=76281980&t=18)** CodePen is a really great product, but unfortunately, it doesn't allow us to see into the head of our document and we are going to need to take a look at the head of our document in order to completely understand all of the ramifications of semantics that we'll be looking at in this course.
>
> **[0:34](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-vs-code?u=76281980&t=34)** So once we work through some examples with CodePen, we're going to move that code here over to Visual Studio Code.
>
> **[0:40](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-vs-code?u=76281980&t=40)** If you want to use a different editor it's totally fine with me, whatever you're comfortable with is fine, but if you like to follow along with exactly what I use, this is the product that I'm using.
>
> **[0:49](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-vs-code?u=76281980&t=49)** So this is at code.[visualstudio.com](https://visualstudio.com), this is a Microsoft product, it's something of an industry standard, and we're going to start right here on the home page, there's a big button.
>
> **[0:59](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-vs-code?u=76281980&t=59)** I am using a Mac and so this says download for Mac, if you are using a PC, it's going to say download for Windows.
>
> **[1:07](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-vs-code?u=76281980&t=67)** So I'm going to go ahead and click the download button, it's going to go ahead and download this program for me and then I'm going to go ahead and install it on my computer and you should go ahead and do the same thing.
>
> **[1:20](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-vs-code?u=76281980&t=80)** Once you've gone ahead and installed Visual Studio Code, VS Code as it's also called, just go on ahead and open it up, you should see a screen that's very similar to this one, and if you've got that then you're totally in the right place.
>
> **[1:33](https://www.linkedin.com/learning/crafting-meaningful-html/working-with-vs-code?u=76281980&t=93)** When we start using VS Code, I will walk you through everything you'll need to do at that point in time, but for now, if you download VS Code, get it installed, and see this screen, you're in great shape and you're ready to start the rest of the course.

> [!info]- Semantic Content
>
> **Tools:** vs code (4), visual studio (3)
> **Env Vars:** html (1), css (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), you'll need (1)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 1. Convert Content to Semantic HTML Markup

> [↑ Back to Table of Contents](#table-of-contents)

#### Explore content and add it to CodePen
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=0)** - [Instructor] Before you start building a website, the very first thing you should do is look at the text that you're going to be given.
>
> **[0:08](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=8)** All of the content that makes up that website.
>
> **[0:11](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=11)** Typically, you'll be given this as a Word document and it will have certain items marked in bold or with headings and so forth.
>
> **[0:18](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=18)** To keep this experiment as straightforward as possible, I have set up all the content that we're going to be using to work with in this particular course as plain text so you don't have to have Word.
>
> **[0:31](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=31)** So, if you take a look inside of your Exercise Files folder, look inside of the folder called "01-01," you'll find a file here called "Dressing up a Salad.txt."
>
> **[0:43](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=43)** And if you open that up, it will open up in your computer's text editor.
>
> **[0:49](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=49)** And what I would encourage you to do is just go ahead and pause the video and do a quick read of this information so that you have a sense of what this page is all about.
>
> **[1:00](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=60)** If you don't actually read your content, you have no idea how you should mark it up.
>
> **[1:05](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=65)** So go on ahead and give this a read and think about how you might identify different parts of this text.
>
> **[1:12](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=72)** What are headings, what are paragraphs, what might be a list, what seems like navigation, what might be a site name.
>
> **[1:18](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=78)** That type of thing.
>
> **[1:19](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=79)** You don't have to know the tags, just sort of think about the functionality.
>
> **[1:23](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=83)** Go on ahead and do that now.
>
> **[1:24](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=84)** Okay, so hopefully you've identified a few elements in this document that stand out to you.
>
> **[1:30](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=90)** You might see, as I said, headings or lists and paragraphs and that kind of thing and we're going to mark all of those up.
>
> **[1:36](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=96)** But the way we're going to do that is with CodePens.
>
> **[1:38](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=98)** So what I'd like for you to do, is go on ahead and just copy everything you see here.
>
> **[1:43](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=103)** Go ahead, highlight it all and then copy it on your computer.
>
> **[1:48](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=108)** And then go ahead and open up a web browser.
>
> **[1:52](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=112)** And you're going to go to [codepen.io](https://codepen.io).
>
> **[1:55](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=115)** And if you're not logged in, you can log in.
>
> **[1:58](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=118)** If you're not interested in saving your work, you don't have to log in.
>
> **[2:02](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=122)** What you're going to do is over here in the upper left-hand corner where it says "Create a Pen," go on ahead and click on that and that's going to give you a pen.
>
> **[2:09](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=129)** You can pull these things around.
>
> **[2:12](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=132)** In this course, we're really going to spend all of our time up here in HTML, no time at all in Java Script, and almost no time in CSS.
>
> **[2:20](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=140)** Go on ahead and paste in the text that you just copied from that text document, and that is our starting point for this course.
>
> **[2:30](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=150)** You can go on ahead and hit Save after that.
>
> **[2:33](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=153)** And Codepen will go ahead and save this into your account.
>
> **[2:36](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=156)** You can give this a name as you wish.
>
> **[2:39](https://www.linkedin.com/learning/crafting-meaningful-html/explore-content-and-add-it-to-codepen?u=76281980&t=159)** You can say this is "01-01: "Starting with CodePen" or anything else you want to call it that might help you find this later on and from this point forward we can start thinking about how to mark up our document.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Env Vars:** html (1), css (1)
> **UI Navigation:** go to (1), click on (1)
> **File Paths:** salad.txt (1)
> **URLs:** [codepen.io](https://codepen.io) (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Identify major elements of a page
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=0)** - Now that we have our text here available to us in CodePen, the first thing I want to do is set just a few critical tags that are important to understand this document overall.
>
> **[0:12](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=12)** And the types of tag that usually we encounter for this type of thing are things like a header, maybe a section, maybe an article and maybe an aside.
>
> **[0:20](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=20)** And I'll tell you about all of those tags as we go through this information.
>
> **[0:25](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=25)** So, first of all, as you read this particular article hopefully you have realized that we have here a couple of things going on.
>
> **[0:32](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=32)** First of all, we have this article called, Dressing up a Salad.
>
> **[0:35](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=35)** So this is all about dressing up a salad, and it's about salad dressing and things to think about along the way.
>
> **[0:41](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=41)** So there's all kinds of stuff going on here in the text.
>
> **[0:44](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=44)** And, just before Dressing up a Salad, we have a little bit of introductory information here talking about our blog.
>
> **[0:51](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=51)** And then before that looks like maybe a site name, the Two Trees Olive Oil.
>
> **[0:56](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=56)** So, what I'm going to do here in order to get this started is I'm going to set a few of these things that'll help us identify what's going on here.
>
> **[1:03](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=63)** For our site name, Two Trees Olive Oil.
>
> **[1:07](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=67)** This typically goes in a tag called the header tag, and that's because this is the top of the web page.
>
> **[1:14](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=74)** It always starts with header and it's going to end with slash header.
>
> **[1:18](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=78)** This is our site name that's available here, and usually this is going to set by itself right?
>
> **[1:25](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=85)** If you think about a fully styled website, maybe it's a logo or in some way it's really going to be branded so that you know that this is the name of the website.
>
> **[1:34](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=94)** So, there's that.
>
> **[1:35](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=95)** The next thing we can take a look at is the article itself.
>
> **[1:38](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=98)** So Dressing up a Salad right here, clearly this is an article, and there is a tag called the article tag that goes with that.
>
> **[1:47](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=107)** So we're going to stick in that Dressing up a Salad, that title along with all of the text that goes with it.
>
> **[1:53](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=113)** That is all going to be part of this, and it looks like this articles going to end here after this, "trick to making a brilliant salad dressing," blah blah, "abundance of healthy foods and flavors."
>
> **[2:06](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=126)** That looks like pretty much the end of the article right there.
>
> **[2:09](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=129)** And so, I'm going to go ahead and end this article, but by ending that article there we have some other information that goes here.
>
> **[2:18](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=138)** So, here's information about the author who wrote this article.
>
> **[2:21](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=141)** Definitely it's related to the article, but it's really not part of it.
>
> **[2:26](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=146)** It's sort of its own little piece of content here that needs to be kept with the article, but it can go at the bottom, it can go at the top sort of depends.
>
> **[2:35](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=155)** So, there's that.
>
> **[2:36](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=156)** There's also this little bit of text up here at the very top where we talk about our blog.
>
> **[2:41](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=161)** All of this I'm going to wrap in a thing called a section.
>
> **[2:44](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=164)** In other words, we're indicating that this information is all related.
>
> **[2:48](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=168)** We have a section of information that's all about the blog.
>
> **[2:51](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=171)** We have an article in here that's part of the blog.
>
> **[2:54](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=174)** We might have several articles that'll be inside this section, and then this information here, definitely part of this as well.
>
> **[3:04](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=184)** And then we're going to go ahead and close this section right here at the bottom.
>
> **[3:09](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=189)** All right, and then this very last part down here at the bottom.
>
> **[3:13](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=193)** This looks like we have some categories and then we have some words after it, beauty, environment, events, and health and so forth.
>
> **[3:20](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=200)** These are probably categories of blog posts for this website.
>
> **[3:24](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=204)** And so, this is in all likelihood, what's called an aside.
>
> **[3:29](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=209)** In other words, this is information that supports the web page, but if it were to disappear we wouldn't lose our fundamental understanding of this web page.
>
> **[3:40](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=220)** This is still helpful information.
>
> **[3:42](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=222)** It's really great that it's there, but if it went away it would not be a monumental tragedy.
>
> **[3:48](https://www.linkedin.com/learning/crafting-meaningful-html/identify-major-elements-of-a-page?u=76281980&t=228)** So, that is how I would start to think about the design of this web page.

> [!info]- Semantic Content
>
> **Definitions:** in other words (2), is an  (1), is a  (1)
> **Code Keywords:** this, (2)
> **Speakers:** - now (1)

#### Identify headings and paragraphs
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=0)** - [Instructor] Now that we have the major segments of the page in place, let's add some more elements inside of our article and our aside, and our section.
>
> **[0:09](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=9)** The headings are going to indicate a hierarchy on the website, rather like an outline.
>
> **[0:14](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=14)** H1, or heading one, is generally the name of the website and there's usually only one h1 on a page.
>
> **[0:24](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=24)** After that, the other headings are usually numbered from two to six, with two being the most important and six being the least important.
>
> **[0:33](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=33)** And, of course, we also have paragraphs and they're just that, they're just paragraphs of information.
>
> **[0:39](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=39)** So, typically, there's only one h1 on the website, after that we're going to use our headings from h2, three, four, five, and six, depending on how many levels deep we have our content and one of the very most key things to think about here is that this is where you're going to actually start getting something of a visual here on this code pen.
>
> **[1:01](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=61)** People often use the headings to size their text.
>
> **[1:06](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=66)** And that is a big no no.
>
> **[1:07](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=67)** You can always change the size of the text later with CSS, here we're very concerned about the meaning that we're communicating in this document.
>
> **[1:17](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=77)** So let's go ahead and drop in some of these headings and the paragraphs.
>
> **[1:20](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=80)** I'll start here at the top on line two with Two Trees Olive Oil.
>
> **[1:23](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=83)** This is the name of the website, so we're going to give it an h1.
>
> **[1:27](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=87)** It is the most important thing on the page, the name of the website And, then here, we have some additional information.
>
> **[1:36](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=96)** We have Our Blog.
>
> **[1:37](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=97)** You never want to skip a heading level as you put these in your document.
>
> **[1:41](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=101)** So this is going to be an h2, and so there's that information about our blog.
>
> **[1:48](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=108)** And, then after that, we have Our blog is the place for the latest news and information, well that is a paragraph right?
>
> **[1:54](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=114)** So we'll go ahead and drop in a paragraph there.
>
> **[1:58](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=118)** Okay, then after that, we have our article, which starts next right after that and our article has a title.
>
> **[2:07](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=127)** And it will also get an h2, it's at the same level as that introductory text there in the section about our blog.
>
> **[2:16](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=136)** That may be one way of doing this, the other way of doing it, is you could argue that this is an h3 because this is secondarily important to the blog, where the words Our Blog is going to be in charge of that whole section, we're going to have a series of articles, each of those will have an h3, so it just depends on what you want to convey semantically once again.
>
> **[2:38](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=158)** So we'll continue through our document, we have paragraphs of information here.
>
> **[2:42](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=162)** We then have Make your own salad dressing.
>
> **[2:46](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=166)** Chances are, this is one size smaller, or one size lower than what you had previously there with Dressing up a Salad, so this is probably an h4.
>
> **[2:59](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=179)** K, and then we're going to have a few more paragraphs.
>
> **[3:07](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=187)** And the paragraph tag of course is just the letter p.
>
> **[3:10](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=190)** You can open it and then you can close it.
>
> **[3:15](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=195)** Then we have a section here called Homemade salad dressing is good for your health.
>
> **[3:19](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=199)** Well that's probably about the same level as Make your own salad dressing, so this will also be an h4.
>
> **[3:29](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=209)** And then we have some more paragraphs.
>
> **[3:36](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=216)** We have a basic combination here, and a closing paragraph once again.
>
> **[3:44](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=224)** Then we have Make it to your taste.
>
> **[3:47](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=227)** Make it to your taste is probably, once again, an h4.
>
> **[3:54](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=234)** K, then we've got some additional paragraphs going on here.
>
> **[4:02](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=242)** And an additional paragraph here.
>
> **[4:04](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=244)** And now, inside of this section here called Make it to your taste, we have a little introductory paragraph, and then we're going to talk about a bunch of different things.
>
> **[4:12](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=252)** We're going to talk about Acids, Vinegars, Fruit juices, and some Sweeteners.
>
> **[4:18](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=258)** And, these may not necessarily be at the same level as Make it to your tastes, here we are describing a whole bunch of different types of ingredients that we might have here.
>
> **[4:28](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=268)** So, chances are Acids is a sub section of Make it to your taste, so here we're going to make this an h5.
>
> **[4:40](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=280)** Sweeteners here, we're going to make that an h5.
>
> **[4:46](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=286)** And I am skipping over the Vinegars and the Fruit juices for the moment, but we should probably put in a paragraph here for this paragraph that starts The two most common acids.
>
> **[4:58](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=298)** Make sure we mark that up.
>
> **[5:00](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=300)** Then under Sweeteners, we have this paragraph talking about sugar.
>
> **[5:08](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=308)** Here under Spice, that's probably also an h5,
>
> **[5:17](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=317)** and then we have another paragraph.
>
> **[5:22](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=322)** And another paragraph, something of a closing paragraph there.
>
> **[5:30](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=330)** And then that's the end of that article.
>
> **[5:32](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=332)** So here we are, back here to the discussion of the particular author.
>
> **[5:38](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=338)** I'm going to go ahead and add some text on top of this and I'm going to set it to be h3 because that's going to be at the same level as the article title up here on the top.
>
> **[5:52](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=352)** So this is going to be About the Author.
>
> **[5:58](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=358)** And then, the information here about our author is a paragraph.
>
> **[6:07](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=367)** And then that would be the end of our section.
>
> **[6:10](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=370)** As for the aside, this is really a list of various kinds of categories, and we have the Categories here itself.
>
> **[6:17](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=377)** The Categories probably deserves a heading and it's probably an h2 because this is at the same level as the Blog area.
>
> **[6:27](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=387)** So we have a section with an h2, we have an aside with the h2.
>
> **[6:31](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=391)** Inside of the section, we have articles with an h3.
>
> **[6:34](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=394)** So this is how we are showing the structure here of this document using headings and their various levels and using paragraphs.
>
> **[6:44](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=404)** Now I know a lot of you are very curious about what this page is looking like and you can take a look at it over here on the side.
>
> **[6:51](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=411)** You probably won't be really happy with the way it looks.
>
> **[6:54](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=414)** Remember that again, this course is focusing very much on making sure that we craft HTML that's meaningful.
>
> **[7:01](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=421)** It does not cover the CSS portion of this to make this look beautiful.
>
> **[7:06](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=426)** So, we are not going to spend a whole lot of time looking at this page.
>
> **[7:10](https://www.linkedin.com/learning/crafting-meaningful-html/identify-headings-and-paragraphs?u=76281980&t=430)** You can do anything with CSS to make it look how you want.

> [!info]- Semantic Content
>
> **CLI Commands:** make (12)
> **Definitions:** is a  (4), is an  (1)
> **Code Keywords:** let (2), this, (1), continue (1)
> **Env Vars:** css (3), html (1)
> **Speakers:** - [instructor] (1)

#### Enhance an article with emphasis and links
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=0)** - [Instructor] The next tags I'd like to take a look at include the strong tag, the M tag, and the A tag, which is for links.
>
> **[0:09](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=9)** So first of all, let's talk about strong and M, and these two tags you may be familiar with already.
>
> **[0:16](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=16)** They are two of the most abused tags in all of HTML.
>
> **[0:21](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=21)** Typically, people use the strong tag for making things bold and the M tag for making things emphasized, but that's not how they're supposed to be used at all.
>
> **[0:31](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=31)** So the strong tag is supposed to draw attention to these particular words, as they are super important and we must pay attention to them.
>
> **[0:41](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=41)** See how I did that?
>
> **[0:43](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=43)** Whereas the M tag is a voice stress, like, we refused to eat boring salad!
>
> **[0:50](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=50)** So remember that strong and M are successors to things like the B and the I tags.
>
> **[0:57](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=57)** The letter B for bold was a tag that made things bold back in the day, but it's not used for that purpose anymore.
>
> **[1:03](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=63)** Likewise, don't use the M tag to make those things italic.
>
> **[1:07](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=67)** Don't use I to make things italic, that has a different meaning also.
>
> **[1:11](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=71)** If you want to make things bold or italic, you should be using CSS.
>
> **[1:17](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=77)** So here in our text, we have some places where we'd like to emphasize some of the things that are being said here.
>
> **[1:24](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=84)** So first of all, down here on line 15.
>
> **[1:27](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=87)** Sure, the grocery store is full of salad dressings, but often they're full of preservatives that impact the taste and nutritional value of the dressing.
>
> **[1:38](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=98)** This is really important and I want to draw some attention to it, so I'm going to use the strong tag to do that.
>
> **[1:44](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=104)** So I'm going to start by putting that strong tag here, right before the word often, and I'm going to end it here, just before the period.
>
> **[1:58](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=118)** I'm emphasizing that grocery store salad dressings are full of preservatives that impact the taste and nutritional value of the dressing.
>
> **[2:06](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=126)** And then, up here on line 11, as you'll see here, as you read along, however, at Two Trees, we refuse to eat boring, tasteless salads.
>
> **[2:15](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=135)** You can imagine it being said that way.
>
> **[2:17](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=137)** You would not read it as, however, at Two Trees, we refuse to eat boring, tasteless salads.
>
> **[2:22](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=142)** That would be so incredibly boring and tasteless.
>
> **[2:24](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=144)** So let's put in a little bit of emphasis.
>
> **[2:27](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=147)** At Two Trees, we refuse to eat boring, tasteless salads.
>
> **[2:31](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=151)** So that would be the M tag, because we are emphasizing, vocally, the word refuse.
>
> **[2:39](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=159)** So that's how you might go about using the M tag correctly.
>
> **[2:43](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=163)** It will make the text italic, that is sort of beside the point.
>
> **[2:47](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=167)** You can absolutely go and change that in your CSS.
>
> **[2:51](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=171)** And then, last of all, let's take a look at how we might go about putting in a link.
>
> **[3:00](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=180)** So here we have, on line 23, some text that refers to a basic combination and our bite-sized Caprese salad appetizer using mini mozzarella balls and cherry tomatoes, although there's no link that goes to that.
>
> **[3:14](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=194)** So I've gone ahead and found a recipe for that.
>
> **[3:16](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=196)** Let's go ahead and put in that link, and I'm going to start it here, just before the word bite-size.
>
> **[3:23](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=203)** When you're using links, you want to have the words that appear in the link be the thing that is describing to the place that that link will take you.
>
> **[3:31](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=211)** You don't want to make words like click here or read more become the clickable words.
>
> **[3:38](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=218)** To learn more information, click here!
>
> **[3:41](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=221)** That is a terrible way of doing things.
>
> **[3:43](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=223)** It is very difficult to understand what it is that you'll see if you just look at the words click here, so have some descriptive words for that link.
>
> **[3:52](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=232)** I'm going to put in an ahref.
>
> **[3:56](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=236)** A is the tag for the link, href is the attribute that's going to allow us to go somewhere, and the URL is [https://www.allrecipies.com/recipe/212896/caprece-appetizer](https://www.allrecipies.com/recipe/212896/caprece-appetizer).
>
> **[4:28](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=268)** And then we can say target=_blank, indicating that this is going to open in a new window.
>
> **[4:35](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=275)** Because this is not the website that we're developing right now, you probably want that to go elsewhere, and so this is the bite-sized Caprese salad appetizers, slash A, here we go.
>
> **[4:46](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=286)** And that is going to go ahead and give you a link.
>
> **[4:49](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=289)** Anytime you put in a link, I always recommend that you test it, so if you scroll on down here in the version of the site where you can see this, I'm just going to right-click and say open it in a new tab.
>
> **[5:00](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=300)** And there is the appetizer that I was referring to, so there it is.
>
> **[5:05](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=305)** So once again, think carefully about your placement of the strong tags, the M tags, make sure that you are either trying to draw very important attention to something on the page you don't want people to miss, that's the strong tag.
>
> **[5:18](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=318)** Maybe you are vocally emphasizing something in the text.
>
> **[5:22](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=322)** We refuse to eat bottled salad dressing!
>
> **[5:25](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=325)** That would be the M tag.
>
> **[5:27](https://www.linkedin.com/learning/crafting-meaningful-html/enhance-an-article-with-emphasis-and-links?u=76281980&t=327)** And then, for your links, make sure that the words in between the starting and ending link tag are meaningful and describe where you are going.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7)
> **Code Keywords:** let (4), super (1), this, (1)
> **Env Vars:** css (2), html (1), url (1)
> **Definitions:** is a  (2), refers to (1)
> **URLs:** [https://www.allrecipies.com/recipe/212896/caprece-appetizer](https://www.allrecipies.com/recipe/212896/caprece-appetizer) (1)
> **UI Navigation:** right-click (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Ordered, unordered, and definition lists
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=0)** - [Instructor] There are three types of lists that are used on websites, the ordered list, the unordered list and what's called either a definition or a description list.
>
> **[0:12](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=12)** You might be familiar with ordered and unordered lists.
>
> **[0:15](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=15)** Sometimes we call these number lists and bullet lists because of how they appear in the browser, but we don't want to pick the list-type by its appearance, we need to pick it by its function.
>
> **[0:27](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=27)** Once again, you can apply CSS to make an unordered list have numbers or an ordered list have bullets.
>
> **[0:34](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=34)** We need to think about the function of the list before we pick out what kind that we're going to code.
>
> **[0:40](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=40)** I'm going to scroll all the way down here to the bottom where we have our aside, we have our various categories here and then this is just a list of, perhaps categories for our various types of blog posts.
>
> **[0:53](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=53)** Clearly that's a list of things.
>
> **[0:56](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=56)** And while marketing may tell you that this has to go in a certain order, the truth of the matter is, we don't have to visit the Beauty page first and then follow that by the Environment page and then follow that by the Events page.
>
> **[1:09](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=69)** We can go in whatever order we want to go to explore those categories or skip some all together.
>
> **[1:15](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=75)** Therefore, this is best marked-up as an unordered list.
>
> **[1:19](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=79)** The way that we go about doing that, is we're going to start with ul and we're going to end with /ul at the bottom of all of these items.
>
> **[1:30](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=90)** And then each of these items, themselves, indent them a little bit, they are going to have an li around them, li stands for list item.
>
> **[1:45](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=105)** And I often do this in a lazy way, I sort of close all my tags first, just copying and pasting all the way on down my list and then I'm going to start all of my tags, put those in place.
>
> **[2:01](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=121)** If you do it in the other order, then you'll wind up getting a whole bunch of indenting going on and a lot of confusion in the part of the web editor, so do your last one first.
>
> **[2:11](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=131)** This is going to create for us, if you take a quick peek over at the appearance, this is that traditional bulleted list, as it's so called.
>
> **[2:20](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=140)** Remember those bullets only come from the browser style sheet.
>
> **[2:23](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=143)** The important part here is the semantic meaning of the list, the unordered list.
>
> **[2:28](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=148)** If I change this instead to an ol, ol and CodePen will automatically change the last tag for you, this becomes a numbered list, so in other words we have a series of numbers in front of all of those things.
>
> **[2:42](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=162)** However, as I had mentioned, it's better marked-up as an unordered list because we don't have to do these things in a certain order.
>
> **[2:50](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=170)** Alright, now let's take a look at the definition or description list, and I'm going to look at this bit of text here on vinegars and fruit juices.
>
> **[3:00](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=180)** If you think about these words here, I'm going to reformat this a little bit in the form of a list, we have vinegars and then we have certain kinds of vinegars.
>
> **[3:08](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=188)** We have apple cider, rice and balsamic vinegars.
>
> **[3:10](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=190)** And we have fruit juice and we have kinds of fruit juice, lemon, lime, orange and grapefruit.
>
> **[3:16](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=196)** Those two things go together.
>
> **[3:18](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=198)** Vinegar is sort of the definition, it's the term that we're talking about and apple cider, rice and balsamic are various kinds of that vinegar.
>
> **[3:29](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=209)** The way we would go about coding this is as follows.
>
> **[3:33](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=213)** This is going to start with the dl tag and it will end with the /dl tag, or course, dl, definition or descriptive list.
>
> **[3:43](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=223)** After that, then the very first word, the one that will describe the things that come after, is a dt, as in a definition term, so /dt.
>
> **[3:57](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=237)** And then each of these items winds up becoming a dd.
>
> **[4:03](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=243)** Apple cider, /dd and then rice, dd, /dd and balsamic, dd, /dd.
>
> **[4:24](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=264)** Okay?
>
> **[4:25](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=265)** And I'm just going to drop the rest of that sentence and then we're going to go to fruit juices.
>
> **[4:34](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=274)** This is now back to the dt again, cause that's the term.
>
> **[4:41](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=281)** And then we're going to have lemon, as a dd, lime as a dd, and orange as a dd, and grapefruit, and I'll drop the rest of that sentence as well.
>
> **[5:11](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=311)** The key here is that for each dt, there needs to be at least one dd, you may have more than one but there needs to be at least one matching dd.
>
> **[5:22](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=322)** And that will form the basis of your definition list.
>
> **[5:25](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=325)** If you're wondering what that looks like, if you take a quick peek over here in the view, you'll see we have vinegars, along with the types listed underneath, fruit juices with the types listed underneath here.
>
> **[5:37](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=337)** Again, that's the default display, you can absolutely do some incredibly cool styling with definition lists to really draw attention to these and make it very clear the relationship between the term and the various types of things described by that term.
>
> **[5:53](https://www.linkedin.com/learning/crafting-meaningful-html/ordered-unordered-and-definition-lists?u=76281980&t=353)** Definition lists may be something that are not in your normal repertoire but they're incredibly helpful, useful and deserve your time and attention to master that in your HTML repertoire.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (1)
> **Definitions:** stands for (1), in other words (1), is a  (1)
> **CLI Commands:** make (2)
> **Env Vars:** css (1), html (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Challenge: First pass at article markup
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980&t=0)** - [Instructor] Ready for a little challenge now that you've had some introduction to some of these HTML tags?
>
> **[0:11](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980&t=11)** Let's see if you can apply them to a new document.
>
> **[0:14](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980&t=14)** So I have a starting Codepen available for you.
>
> **[0:17](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980&t=17)** What I would like for you to do first is to read the text.
>
> **[0:21](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980&t=21)** Always start by reading the text.
>
> **[0:24](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980&t=24)** Think about what the text is saying, how it functions on the website, what's the purpose of the page, what kinds of content are present, and you might start thinking about how you would mark it up.
>
> **[0:35](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980&t=35)** Then I would like you to go through and mark the text up to create a meaningful, semantic document.
>
> **[0:40](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980&t=40)** And you want to consider some of the tags that I've talked about like h1 and all of its related headings.
>
> **[0:47](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980&t=47)** Paragraph, strong, and em.
>
> **[0:49](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980&t=49)** Various kinds of links, and ordered, unordered, and definition lists are all things that you can think about.
>
> **[0:55](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980&t=55)** Now in this particular document I've done this a little bit differently for you.
>
> **[1:00](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980&t=60)** Rather than envisioning this as a full web page, I've got this set up as an individual document.
>
> **[1:06](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980&t=66)** In other words, there aren't actually any parts to this page in terms of this being an article, or a section, or having a header, or anything like that.
>
> **[1:15](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980&t=75)** This is just, basically it's an article.
>
> **[1:17](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980&t=77)** It has a title and it has some text inside of it.
>
> **[1:20](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980&t=80)** So what I'd like for you to do is to think about how you might go through and mark this up as an article.
>
> **[1:28](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-first-pass-at-article-markup?u=76281980&t=88)** And I will go ahead and show you my solution in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** html (1)
> **Cross-References:** in the next (1)
> **Definitions:** in other words (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat chime) (1)

#### Solution: First pass at article markup
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=0)** - [Instructor] So, how'd you do with that particular challenge?
>
> **[0:08](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=8)** In this particular case, once again, remember I said this was an article and that we didn't have to consider anything else.
>
> **[0:15](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=15)** That we're just going to mark this up all by itself.
>
> **[0:18](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=18)** So, in that particular case, we don't need to worry about a header.
>
> **[0:22](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=22)** We don't need to worry about the article tag.
>
> **[0:23](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=23)** We don't need to worry about the section.
>
> **[0:25](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=25)** We're just going to start marking this up, really starting with an H1.
>
> **[0:29](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=29)** The title for the whole document.
>
> **[0:31](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=31)** And, so, that's why I chose the H1 here for Olive Oil as a Natural Moisturizer.
>
> **[0:37](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=37)** And, then, as I read through this, listening to the little voice in my head, the little drama queen I got living in there, it said have you ever wondered about the benefits of olive oil?
>
> **[0:47](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=47)** Sure it has amazing health benefits when eaten, so I went ahead and mark that up as emphasized.
>
> **[0:53](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=53)** And then of course it's not just for cooking anymore.
>
> **[0:58](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=58)** That's like really important because people may not be a little weirded out by reading this article and it's talking about olive oil but it's also talking about hair and hands, and feet, and so forth.
>
> **[1:08](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=68)** So then I went through the rest of the document here.
>
> **[1:12](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=72)** Because I started with H1.
>
> **[1:13](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=73)** My next level heading is an H2.
>
> **[1:15](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=75)** I have a paragraph and then I had what seemed like a list of tips that I might consider.
>
> **[1:21](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=81)** And so I went ahead and marked those up as lists.
>
> **[1:27](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=87)** And like wise for the hands and feet section paragraph.
>
> **[1:30](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=90)** And unordered lists.
>
> **[1:32](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=92)** And then finally in face here I decided to make use of a link.
>
> **[1:36](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=96)** And I went ahead and added that.
>
> **[1:38](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=98)** A suggested recipe.
>
> **[1:40](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=100)** So I went ahead and looked up a recipe for an olive oil eye makeup remover.
>
> **[1:46](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=106)** You might have found this article or maybe you found something else, Or maybe you just skipped right over that.
>
> **[1:50](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=110)** So some differences you may have in your document that I have in mine, you may have decided to go ahead and put an article tag around this whole thing.
>
> **[1:59](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=119)** There's certainly nothing wrong with that.
>
> **[2:00](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=120)** You may have started with H2 as your heading, up here on the top.
>
> **[2:05](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=125)** And followed that up with some H3's, for hair, for hands and feet, and for face.
>
> **[2:11](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=131)** And that would be acceptable too, in that particular situation your assuming that the H1 is the name of the website and it comes sooner in that particular document, that somewhere else there's that single H1 that exists.
>
> **[2:25](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=145)** That isn't always true, sometimes the name of the website is actually an image it's a logo.
>
> **[2:32](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=152)** And so therefore you start off with an H1 somewhere on the webpage.
>
> **[2:38](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=158)** Something has to be the most important thing with that H1. So something that I see a lot out there on websites these days.
>
> **[2:44](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=164)** People just skip over H1 entirely.
>
> **[2:47](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=167)** And they just start with a whole bunch of H2's.
>
> **[2:49](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=169)** That works only if something else is identified, just the H1 on the page.
>
> **[2:54](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=174)** It's very important for accessibility reasons not to skip over heading levels.
>
> **[2:57](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=177)** So make sure you start with the right level.
>
> **[3:00](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=180)** Make sure you fill in all of the sub-levels correctly, And that you count one, two, three, four, five, six.
>
> **[3:07](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=187)** Rather than skipping from one to three to six back to two.
>
> **[3:12](https://www.linkedin.com/learning/crafting-meaningful-html/solution-first-pass-at-article-markup?u=76281980&t=192)** That is not the correct way to manage your headings.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), else. (1), this, (1), else, (1)
> **CLI Commands:** make (3)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Build the Rest of the Webpage

> [↑ Back to Table of Contents](#table-of-contents)

#### Move your code from CodePen to Visual Studio Code (VS Code)
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=0)** - [Instructor] Now that you know a little bit of the basics of HTML that go in the body portion of the webpage, I want to move everything on over to VSCode.
>
> **[0:12](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=12)** And the reason why is it's going to give us access to the head of the document, there's some things we need to talk about there.
>
> **[0:19](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=19)** We're also going to wind up having to drop in some images, and the free version of Codepen won't allow you to work with images here directly within Codepen.
>
> **[0:28](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=28)** You have to do some other things in order to make that work.
>
> **[0:31](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=31)** So let's go on ahead and move this HTML that we've written so far into VSCode.
>
> **[0:36](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=36)** So the way to do that is you're going to start here with the Codepen for this particular chapter.
>
> **[0:42](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=42)** And we'll just go on ahead and copy the HTML that we have.
>
> **[0:46](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=46)** Just highlight everything, and then you can just go to edit, copy.
>
> **[0:52](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=52)** Then what I'd like you to do is open up VSCode and you can just grab your Exercise Files folder.
>
> **[1:02](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=62)** If you just grab it and just drop onto the VSCode screen, notice how I don't want it just to go on half the screen.
>
> **[1:10](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=70)** I want it to go on the whole screen.
>
> **[1:12](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=72)** And this is going to go ahead and load in my exercise files, and I've got access to all of my folders here.
>
> **[1:19](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=79)** It just makes things a little easier as you work through stuff.
>
> **[1:22](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=82)** You can close this welcome screen.
>
> **[1:25](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=85)** So now what we're going to do is we're going to make a new document.
>
> **[1:29](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=89)** If you go to File, New File, this will go ahead and open up a new window for you.
>
> **[1:35](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=95)** The first thing you need to do is save this.
>
> **[1:37](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=97)** So we're going to File, Save.
>
> **[1:41](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=101)** And I'm going to call this salad.html.
>
> **[1:45](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=105)** I'm going to save it directly on my desktop, and that's going to be where I'm just going to keep this as a working file.
>
> **[1:52](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=112)** Go ahead and say save.
>
> **[1:54](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=114)** It's very important that you save this file first, even though there's nothing in it, for this next step to work.
>
> **[2:00](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=120)** If you don't save the file first, this next step will not work.
>
> **[2:04](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=124)** In this next step what you want to do is type in exclamation point.
>
> **[2:09](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=129)** And as you'll see here this is an Emmet Abbreviation.
>
> **[2:11](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=131)** Emmet is short pan methodology.
>
> **[2:13](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=133)** It's baked into VSCode.
>
> **[2:16](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=136)** Go ahead and type that exclamation point and hit the tab key.
>
> **[2:20](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=140)** And this is going to go ahead and write in the basic format of an HTML document.
>
> **[2:26](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=146)** In other words, it comes in with a whole bunch of stuff in the head of the document, and then we have the body.
>
> **[2:32](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=152)** Now inside the body we can go ahead and say Edit Paste.
>
> **[2:36](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=156)** That's all that code that we just brought over from Codepen, and you'll just paste it here into the document.
>
> **[2:43](https://www.linkedin.com/learning/crafting-meaningful-html/move-your-code-from-codepen-to-visual-studio-code-vs-code?u=76281980&t=163)** Once you've got that in place, go on ahead and hit save, and we'll be ready to move on here into our next video.

> [!info]- Semantic Content
>
> **Env Vars:** html (4)
> **CLI Commands:** make (2)
> **Code Keywords:** let (1), this. (1)
> **UI Navigation:** go to (2)
> **Exercise Files:** exercise files (2)
> **Definitions:** is an  (1), in other words (1)
> **File Paths:** salad.html (1)
> **Cross-References:** next video (1)

#### Understand the head code
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=0)** - All right so we just put our content from CodePen into a brand new fresh HTML document.
>
> **[0:07](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=7)** And I said this was so that you can see what's going on in the head of the document.
>
> **[0:12](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=12)** So I wanted to talk through now what actually goes in the head of the document.
>
> **[0:16](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=16)** What are all these lines of code that we have here.
>
> **[0:19](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=19)** So, first of all, in the very first line of code here in Line one.
>
> **[0:23](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=23)** This is a doc type declaration.
>
> **[0:26](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=26)** When you see a doc type that looks like this, this indicates that this document is written with HTML5.
>
> **[0:31](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=31)** As you can tell from the number, there have been other versions of HTML.
>
> **[0:35](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=35)** There's been an HTML 4, and an HTML 3, and so forth.
>
> **[0:39](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=39)** An HTML 5 is pretty much what everybody is using these days.
>
> **[0:42](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=42)** It's been out about 10 years now.
>
> **[0:44](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=44)** But you may occasionally see a different a doc type at the top of the document.
>
> **[0:49](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=49)** Make sure this goes here that tells the browser exactly how to render your code.
>
> **[0:53](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=53)** The second line, line 2, is the start of our HTML document and so it starts here with HTML.
>
> **[0:59](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=59)** And if you scroll all the way down the bottom of your document you'll that it closes down here on line 84.
>
> **[1:05](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=65)** So that is the HTML tag, and inside of it there's an attribute for the language.
>
> **[1:12](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=72)** The language here is English, and the standard international format of the two letter abbreviation, 'EN'.
>
> **[1:19](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=79)** If you were writing this webpage in a different language, you should definitely change that to say 'FR' for French, or 'ES' for Spanish.
>
> **[1:27](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=87)** That would be where you would make that change.
>
> **[1:30](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=90)** So make sure the correct language of the content is reflected there in the HTML line.
>
> **[1:35](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=95)** We then have a bunch of lines here that go inside of the head of the document. The head of the document is basically there for machines.
>
> **[1:43](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=103)** So that they can see exactly what goes on.
>
> **[1:46](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=106)** With this particular document and how it should be rendered.
>
> **[1:49](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=109)** The meta character set here is the default character coding for the web.
>
> **[1:54](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=114)** So it's what codes the alphabet and the numbers.
>
> **[1:57](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=117)** If you're using a different language, maybe you're using Russian or you're using Chinese for example.
>
> **[2:03](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=123)** Something with a different alphabet you may want to change this character set.
>
> **[2:07](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=127)** The next line, this meta name equals viewport and this content type.
>
> **[2:12](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=132)** This has to do with responsive design, and it is responsible for rendering the correct page width.
>
> **[2:19](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=139)** If you ever been one of those pages on a mobile phone.
>
> **[2:23](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=143)** That is the desktop version of the site.
>
> **[2:24](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=144)** That you actually see on your mobile phone and you can't read it and it teensy tiny.
>
> **[2:28](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=148)** It's probably missing this particular tag.
>
> **[2:31](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=151)** That's what it's there for.
>
> **[2:32](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=152)** The next line here is a uniquely Microsoft line of code, and it's here because of course VS Code is a Microsoft product.
>
> **[2:42](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=162)** This is telling Internet Explorer, which is a type of web browser, to render the page at the highest support available.
>
> **[2:49](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=169)** There's some debate on whether this tag is needed, but it's a Microsoft product and that's why it's here.
>
> **[2:55](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=175)** 'IE=edge' indicates that it should render at the highest support available you may see different content here.
>
> **[3:01](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=181)** That would render it say a lower version of Internet Explorer. But at this point 'IE =" which is probably what you want.
>
> **[3:08](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=188)** And then finally, we have title tag here which is the HTML title of the document.
>
> **[3:13](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=193)** This is really critical to search engines optimization.
>
> **[3:17](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=197)** It's critical for what words are going to show up in the tab of your web browser that you're looking at.
>
> **[3:23](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=203)** And so we want to be sure that we put in something meaningful here in this spot.
>
> **[3:27](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=207)** So let's go on ahead and type something meaningful for the title tag. So I'm going to say something like 'Two Trees Olive Oil'.
>
> **[3:38](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=218)** Maybe 'Blog'. Maybe 'Dressing up a Salad'.
>
> **[3:44](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=224)** And there's a lot of thinking on this for search engine optimization.
>
> **[3:47](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=227)** Some people will tell you that if this should actually go in the reverse order.
>
> **[3:51](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=231)** Dressing up a salad block two trees olive oil.
>
> **[3:54](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=234)** It depends on you're thinking about this particular problem you can experiment with the search engine optimization.
>
> **[4:01](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=241)** This isn't an exhaustive list of types of tags that you might find in the head of the document.
>
> **[4:07](https://www.linkedin.com/learning/crafting-meaningful-html/understand-the-head-code?u=76281980&t=247)** There are some other ones that are pretty common like links to styles sheets or links to favicons. Some other things, but this is what comes with VS Code out of the box. And that's what all those lines are and what they do.

> [!info]- Semantic Content
>
> **Env Vars:** html (10), html5 (1)
> **Code Keywords:** this, (1), type. (1), for. (1), finally, (1), let (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (4)
> **Tools:** vs code (2)
> **UI Navigation:** in the tab (1)
> **Analogies:** for example (1)
> **Speakers:** - all (1)

#### Add semantic navigation
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=0)** - The next thing I'd like to add to my webpage is a navigation bar and if we think about a navigation bar, what exactly is it?
>
> **[0:09](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=9)** It's just a list of links, right?
>
> **[0:11](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=11)** They don't need to be in any particular order, we don't need to visit one thing first and one thing second, it's just a list of stuff.
>
> **[0:19](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=19)** So, if we think about that, it's navigation which is a list of links, in no particular order, all of those things put together just described exactly what our mark ups should be.
>
> **[0:33](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=33)** Inside of your exercise files folder you'll find this document, navigation.txt.
>
> **[0:38](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=38)** These are going to be our navigation items for this page.
>
> **[0:41](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=41)** I'm going to go ahead and copy those and I'm going to now add this to my document.
>
> **[0:47](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=47)** Now, where this navigation should go, probably at the top of the webpage.
>
> **[0:52](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=52)** It could go inside of our header but it doesn't have to.
>
> **[0:57](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=57)** It could also go outside of our header as it's own thing, either way is just fine.
>
> **[1:03](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=63)** You'll find developers code navigation bars both ways sometimes inside of the header tag, sometimes by itself outside of it.
>
> **[1:11](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=71)** Either is fine and acceptable, you can decide what you want to do.
>
> **[1:14](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=74)** I'll go ahead and put it outside of my header tag just to show you how that works.
>
> **[1:20](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=80)** And so now we can go ahead and mark this up as an unordered list, and we'll link to a bunch of dummy pages.
>
> **[1:26](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=86)** So I'm going to go ahead and indent this a little bit, and we'll start this an unordered list and of course that unordered list is going to close down here after all of our items.
>
> **[1:43](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=103)** Then inside of this, each one of these, is going to get an li and then vs code likes to go on ahead and make a closing tag so you may have to move those.
>
> **[1:56](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=116)** Then we'll go ahead and to those an a href= and we're not going to link to anything in particular.
>
> **[2:04](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=124)** And I'm not going to add any sort of target to this because I want it to link within the same tab.
>
> **[2:11](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=131)** People expect their navigation not to go offsite or go to other pages so we'll need just that much for a link.
>
> **[2:18](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=138)** You would fill in this hashtag or pound sign here with some sort of path to another page on your website.
>
> **[2:25](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=145)** And then we can go ahead and put this in for all of our other navigation items.
>
> **[2:30](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=150)** Once again, my methodology is to put in the closing tags first makes things a little easier on the copy paste, and then we'll go on ahead and put the opening ones in.
>
> **[2:41](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=161)** And I'm just copying and pasting those in place.
>
> **[2:46](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=166)** So, there we go, an unordered list indent that a little bit there.
>
> **[2:50](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=170)** This is now an unordered list, it happens to be a bunch of links.
>
> **[2:55](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=175)** But this particular group of links is very, very special, it's the main navigation for our webpage.
>
> **[3:01](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=181)** And so, there is a tag that helps us differentiate this from any other navigation we have on the website and that is our nav tag. n-a-v.
>
> **[3:10](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=190)** So we are going to put our nav tag all the way around our list just like that.
>
> **[3:17](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=197)** And we can indent everything a little bit further and there you go.
>
> **[3:22](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=202)** So, the nav tag is particularly important because that is an indication of where the main navigation is for this webpage.
>
> **[3:33](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=213)** Now it's possible we might have other navigation on this webpage.
>
> **[3:36](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=216)** A place that you might think of immediately as we scroll on down the page is here at the end where we have our categories and we don't necessarily have these set up as links but we could certainly go on ahead and do that.
>
> **[3:49](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=229)** If we did set these up as links, would we need to put a nav tag around these?
>
> **[3:55](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=235)** The answer is probably not because this isn't major navigation for this website.
>
> **[3:59](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=239)** This is a list of links but it is not the main way that people are navigating around this website.
>
> **[4:07](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=247)** So, personally I would not put a nav tag around these.
>
> **[4:10](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=250)** However I will go on ahead and mark these up as links.
>
> **[4:18](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=258)** So we are going to go ahead and put in a /a and then I can just go on ahead and copy that and drop that in here for these other items here in our categories.
>
> **[4:35](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=275)** And then over here at the beginning, we'll just go on ahead and put in our a href= and the # and we'll go ahead and copy all of that and paste those in as well.
>
> **[4:53](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=293)** So this nav tag is something you may see in a bunch of different places on your website.
>
> **[4:59](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=299)** It's not necessarily a hard and fast rule that the navigation is only for the main navigation.
>
> **[5:04](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=304)** There is some conflicting advice out there about how many times a nav tag should be used on the page but my tendency is to use it once on the page just to mark the main navigation of the website.
>
> **[5:15](https://www.linkedin.com/learning/crafting-meaningful-html/add-semantic-navigation?u=76281980&t=315)** Anything else, any other list of links like this, not really the navigation and so no navigation tag is required.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** this, (2), else, (1)
> **File Paths:** navigation.txt (1)
> **Tools:** vs code (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)

#### Add images, figures, and figure captions
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=0)** - [Instructor] Next up, let's add some images to this document.
>
> **[0:03](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=3)** We can add images just as images.
>
> **[0:06](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=6)** You may already know how to do that even.
>
> **[0:08](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=8)** Or we can add our images as a figure.
>
> **[0:12](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=12)** Which is the right choice for your document?
>
> **[0:14](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=14)** As always, it depends on the information you want to convey.
>
> **[0:17](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=17)** And I'm going to give you an example of both approaches.
>
> **[0:20](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=20)** So before we start, the first thing I'd like you to do is to go to folder number four inside of chapter two in your exercise files folder you will find two images in the begin folder.
>
> **[0:33](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=33)** One is of salad dressing and the other is of Jennifer, who wrote this article.
>
> **[0:39](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=39)** Go ahead and copy those images off to your desktop, in addition to that salad, that html document that you're working with.
>
> **[0:47](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=47)** And then we can go ahead and drop those images into our webpage.
>
> **[0:52](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=52)** What we're going to do here is first of all that lovely picture of salad dressing, I would like to add here inside of my article.
>
> **[1:01](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=61)** It's probably going to appear somewhere towards the top of this document.
>
> **[1:05](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=65)** And honestly, this picture is just beautiful.
>
> **[1:07](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=67)** It's very nice.
>
> **[1:08](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=68)** It looks lovely.
>
> **[1:10](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=70)** But it doesn't need a caption or anything else.
>
> **[1:12](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=72)** It should be relatively obvious what this is a picture of given the title and the text that's here in this document.
>
> **[1:18](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=78)** Where I'm going to put this just sort of depends on, in fact, a little bit of the page layout.
>
> **[1:25](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=85)** I could drop it right here.
>
> **[1:26](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=86)** So image src equals and then we're going to pick dressing.jpg.
>
> **[1:34](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=94)** So I could put it here.
>
> **[1:36](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=96)** I could also take this same image and if I prefer, if I'm going to say for example float it with CSS, I could put it inside of the paragraph here, if that's a better placement for it.
>
> **[1:48](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=108)** It honestly doesn't matter because this image is just pretty.
>
> **[1:52](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=112)** I'm going to leave it where I have it and hopefully a lot of you just cringed as I was typing in that tag because I left off one incredibly important piece of information.
>
> **[2:01](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=121)** What did I leave off?
>
> **[2:02](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=122)** Oh, the so called alt tag as people call it.
>
> **[2:06](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=126)** It's actually an attribute, an alt attribute.
>
> **[2:09](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=129)** This is the text description of this picture.
>
> **[2:12](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=132)** And this poor attribute has been so abused through the years.
>
> **[2:17](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=137)** You'll find people that'll just say dressing.jpg or they'll say dressing.jpg 600 by 400 pixels.
>
> **[2:28](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=148)** Sometimes it's this kind of information.
>
> **[2:30](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=150)** This is not the purpose of the alt tag.
>
> **[2:33](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=153)** The alt tag should be a text description of what goes on in this picture.
>
> **[2:39](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=159)** Here we might say something like bowl of olive oil and lemon juice.
>
> **[2:48](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=168)** Something like that because that is in fact what it is.
>
> **[2:52](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=172)** If you start typing in your alt tag and your text starts scrolling off the screen, one of the things you'll see going on here now that we're in the article is our sentences have gotten ridiculously long on this page.
>
> **[3:03](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=183)** By default, VS Code does not have word wrap turned on.
>
> **[3:08](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=188)** You can turn on word wrap by going to view, toggle word wrap, and that'll cause all of these sentences to wrap really nicely.
>
> **[3:16](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=196)** Okay, so now we have a beautiful image here at the top of this document.
>
> **[3:20](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=200)** But further down the page I'd like to add another picture.
>
> **[3:24](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=204)** Down here, with about the author.
>
> **[3:26](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=206)** And in this case I want to add a picture of our author, Jennifer Vespes.
>
> **[3:32](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=212)** So there's a picture and then clearly this information here is a description of that picture to a large extent.
>
> **[3:40](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=220)** We have a picture of Jennifer and then we have a little bit of her bio.
>
> **[3:44](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=224)** So we could make the argument that this is in fact a figure.
>
> **[3:48](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=228)** A figure is usually an image, an illustration or a diagram, or a code snippet, a whole lot of other things, that can be referenced in the main flow of the document but it can easily be moved elsewhere on the page.
>
> **[4:02](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=242)** We could put it in an appendix.
>
> **[4:03](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=243)** We could put it over to the sidebar.
>
> **[4:05](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=245)** We could put it at top of the page, the bottom of the page.
>
> **[4:08](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=248)** And we would not affect the main flow of the document.
>
> **[4:12](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=252)** This fills all of those requirements.
>
> **[4:14](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=254)** This is just author information.
>
> **[4:16](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=256)** And so this is likely a figure.
>
> **[4:18](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=258)** So the way we go ahead and start this, we're going to leave this as about the author.
>
> **[4:22](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=262)** If you want a heading for this, that's totally fine.
>
> **[4:26](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=266)** Then, after that, we're going to put in our figure tag.
>
> **[4:30](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=270)** And, of course, that's going to close.
>
> **[4:33](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=273)** And the figure tag is going to close after the description of Jennifer.
>
> **[4:39](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=279)** The image itself is going to go right after the figure tag, inside of it here.
>
> **[4:44](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=284)** We'll just put in a standard image tag.
>
> **[4:47](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=287)** So we're going to say image source equals and then we'll put Jennifer.jpg.
>
> **[4:53](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=293)** And the alt here would be Jennifer Vespes.
>
> **[5:01](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=301)** And then we have this lovely description right here.
>
> **[5:05](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=305)** This is actually the caption for the picture, right?
>
> **[5:08](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=308)** So we're going to put in a fig caption tag right here.
>
> **[5:15](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=315)** You can leave the paragraph in place.
>
> **[5:17](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=317)** Figure captions may have multiple paragraphs, depending on what it's a picture of.
>
> **[5:22](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=322)** The paragraph is just fine to stay there.
>
> **[5:25](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=325)** And we'll close the figure caption just after the end of the paragraph.
>
> **[5:29](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=329)** Then we can take this whole figure and we can indent it a little bit along with our h3.
>
> **[5:35](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=335)** Make everything line up so nicely.
>
> **[5:38](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=338)** And that would be how you'd go about adding a figure to your document.
>
> **[5:43](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=343)** So you can either have an image by itself that's something pretty, maybe with no obvious description of it on a page.
>
> **[5:49](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=349)** Other images are a little bit more complicated.
>
> **[5:52](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=352)** You'll need to have a longer caption that goes with them.
>
> **[5:55](https://www.linkedin.com/learning/crafting-meaningful-html/add-images-figures-and-figure-captions?u=76281980&t=355)** In which case, use the figure tag along with the figure caption.

> [!info]- Semantic Content
>
> **Analogies:** picture (12), for example (1)
> **Code Keywords:** this, (2), let (1), else. (1), default, (1), case, (1)
> **CLI Commands:** find (2), make (2)
> **UI Navigation:** go to (1), toggle (1)
> **Definitions:** is a  (2)
> **Prerequisites:** before we start (1), you'll need (1)
> **Env Vars:** css (1)
> **Tools:** vs code (1)

#### Add footers with address, time, and date
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=0)** - [Instructor] One of the elements missing from this as a webpage now that we have site identity, we have a navigation bar, we have some text, we have images, we don't have a footer.
>
> **[0:11](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=11)** Typically the footer is at the bottom of the webpage and it contains information like a disclaimer, links to privacy policies, social media, contact information, and a copyright statement, all that stuff usually winds up in the footer.
>
> **[0:24](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=24)** So, I've gone ahead and created a footer for you, here's some text from your exercise files.
>
> **[0:31](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=31)** If you go ahead and take a look at the begin folder for chapter two video number five, you'll find this document.
>
> **[0:38](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=38)** And what I'd like to do is add this to our document and mark the whole thing up.
>
> **[0:43](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=43)** So if you go ahead and copy that text, then we'll go ahead and scroll down to the bottom of our document.
>
> **[0:49](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=49)** Before slash body but after slash aside, so we're down here around line 98.
>
> **[0:55](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=55)** We'll go ahead and paste in all of that text that we just had.
>
> **[1:00](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=60)** So the first thing that we need to do is add here a footer tag.
>
> **[1:04](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=64)** And shockingly that's just footer.
>
> **[1:07](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=67)** And that we'll go on ahead and open and close with that tag.
>
> **[1:13](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=73)** So we'll put that footer tag down here at the bottom after all of the text that we just added.
>
> **[1:18](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=78)** Take a look at this for a moment, you might have some ideas of how this should be marked up pretty quickly.
>
> **[1:24](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=84)** First of all, here's our copyright statement, that probably is just a paragraph.
>
> **[1:35](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=95)** No big deal.
>
> **[1:36](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=96)** The site last updated, when did we last update the site?
>
> **[1:39](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=99)** Some people like to include this information.
>
> **[1:41](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=101)** So we'll go ahead and add that as well.
>
> **[1:45](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=105)** Probably marked up as a paragraph.
>
> **[1:48](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=108)** Down here at the bottom we have a little bit of a disclaimer; this is probably a paragraph as well.
>
> **[1:56](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=116)** So that's pretty straight forward.
>
> **[2:00](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=120)** We also have here, what looks like a couple of little links, this should be an unordered list, but it's not a list that requires a navigation tag.
>
> **[2:10](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=130)** Anything that appears in the footer typically is just extra information.
>
> **[2:14](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=134)** Here we have a link to the about page, contact page, and our privacy policy.
>
> **[2:18](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=138)** So, we can just mark this up as a simple, unordered list.
>
> **[2:23](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=143)** So once again opening and closing ULs, and this will be a list item, a slash A.
>
> **[2:36](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=156)** Href equals something.
>
> **[2:44](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=164)** And the word about.
>
> **[2:48](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=168)** Then we can go on ahead and copy the ending tags, copy paste.
>
> **[2:53](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=173)** Copy the beginning tags, copy paste.
>
> **[2:59](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=179)** Lovely.
>
> **[3:01](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=181)** Okay, then we get into some additional things that we might want to mark up that are probably tags you may not necessarily have encountered before.
>
> **[3:09](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=189)** First of all, let's look at this address here.
>
> **[3:12](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=192)** So this is the address for Two Tree Olive Oil and clearly this is for navigation purposes or whatever.
>
> **[3:20](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=200)** We do actually have an address tag and that is the way this should be marked up because it's an address.
>
> **[3:27](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=207)** So we're going to start the address tag and end it at the end of the address.
>
> **[3:32](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=212)** All this contact information.
>
> **[3:35](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=215)** Inside of this, in all likelihood, you're going to want to put in a couple of line breaks.
>
> **[3:40](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=220)** The line breaks are done by the BR tag, one of the more overused tags that we have in HTML.
>
> **[3:46](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=226)** The BR tag is designed for a purpose like this where an address is never written all on one line or almost never written all in one line.
>
> **[3:54](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=234)** Usually there's a series of line breaks.
>
> **[3:56](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=236)** Poems are like this as well.
>
> **[3:58](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=238)** This is an appropriate place to use the line break tag.
>
> **[4:01](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=241)** So we'll go on ahead and drop that in.
>
> **[4:04](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=244)** Then we can go ahead and make a link to our email address.
>
> **[4:08](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=248)** That would be a href equals and then mail to: info@[twotreesoliveoil.com](https://twotreesoliveoil.com).
>
> **[4:23](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=263)** And then our closing tag is going to go on the other side of that.
>
> **[4:31](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=271)** Before the BR.
>
> **[4:32](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=272)** So this is the way you make an email link so when you click on the mail to link it will open up, hopefully, a blank email where you can enter your information and send email to that particular address and we can also make a clickable phone number.
>
> **[4:46](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=286)** Something more people should do on their websites now that we have phone were we can click on it.
>
> **[4:52](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=292)** The way you set that up is tel, and then colon, and then a plus sign with a one, at least in the United States, and then you can put in 1234567890 quote and bracket.
>
> **[5:10](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=310)** And then we'll end that tag over here.
>
> **[5:13](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=313)** Slash A.
>
> **[5:14](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=314)** So why the extra one?
>
> **[5:16](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=316)** Well, landlines may still require you to enter one in order to call long distance and so what we have here is a phone number that could be used by a landline potentially.
>
> **[5:28](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=328)** If you feel like pretty much the only people who are going to use this are people in the United States only and only using mobile phones, you might consider leaving that off, but this is going to work on a phone or on a landline and it'll work in the United States and out of the United States, so this may be a better way to mark that up.
>
> **[5:45](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=345)** Something else we want to add, a couple of other things.
>
> **[5:49](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=349)** Up here at the top where we've got our copyright statement, I'm going to add to this a couple of other things.
>
> **[5:55](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=355)** First of all, I'm going to add the small tag.
>
> **[5:59](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=359)** So this might be a tag you are unfamiliar with.
>
> **[6:02](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=362)** The small tag was originally created back in the days when we didn't have CSS and it made text small, shockingly, but it has been repurposed now to indicate that this is side comments or fine print, like in a legal disclaimer or copyright statement, or something else.
>
> **[6:23](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=383)** So it actually has nothing to do with the styling of the presentation, although you will find that most browsers will make this text a little bit smaller.
>
> **[6:31](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=391)** It actually has more to do with: this is fine print on the website.
>
> **[6:35](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=395)** With that same argument in mind, our disclaimer down here at the bottom should probably also have a small tag.
>
> **[6:42](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=402)** So let's go on ahead and add that as well.
>
> **[6:48](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=408)** Also up here in our copyright statement, we've been a little lazy and put a C inside a parentheses to indicate a copyright symbol.
>
> **[6:57](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=417)** That's actually not the correct symbol for copyright, we can look up the right symbol for copyright though.
>
> **[7:02](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=422)** If you just simply do a Google search for HTML copyright symbol, you will find, as comes up right here in our search results, the sign that you are looking for is indeed the copyright symbol and here's the code: ampersand copy semicolon.
>
> **[7:19](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=439)** You can just copy that and drop that right on in here.
>
> **[7:24](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=444)** There we go.
>
> **[7:26](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=446)** So that'll give you the copyright symbol.
>
> **[7:28](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=448)** And one final thing I would like to point you to here is the site last updated.
>
> **[7:34](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=454)** Believe it or not we have another tag available to us called the time tag.
>
> **[7:38](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=458)** And the time tag is designed for machines to be able to tell exactly when a site was last updated.
>
> **[7:45](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=465)** There are approximately five bajillion ways to write a date.
>
> **[7:49](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=469)** European formats, US formats, written out, in numbers, all kinds of craziness.
>
> **[7:54](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=474)** So if we write it consistently so machines can read it, it becomes more useful to things like search engines and other various types of machines, robots.
>
> **[8:04](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=484)** So the way we're going to add this is simply the time tag.
>
> **[8:08](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=488)** So it's time, just like that, and the time will show up here on the other end.
>
> **[8:16](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=496)** Then inside of the time tag, we'll add an attribute of datetime, all one word, and inside of this we'll say 2019-11-30, which is one of the many formats.
>
> **[8:30](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=510)** There are lots of different formats for date time that are all legitimate.
>
> **[8:34](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=514)** You can also include, as the tag implies, an actual time of day, if you would like to include that.
>
> **[8:40](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=520)** You can look all of these up in various kinds of documentation, I always recommend the Mozilla Developer Network, MDN, but there are many other resources out there online as well where you can look up this information.
>
> **[8:53](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=533)** Wow so you thought this footer was just a whole bunch of a couple quick links and just a few paragraphs and we were done.
>
> **[8:59](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=539)** No, look at this.
>
> **[9:00](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=540)** We used a whole bunch of different tags to meaningfully mark up our footer.
>
> **[9:05](https://www.linkedin.com/learning/crafting-meaningful-html/add-footers-with-address-time-and-date?u=76281980&t=545)** And it's no much more accessible to search engines, machines and to people with accessibility issues.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (3)
> **Code Keywords:** let (2), this, (1), require (1), else. (1), include, (1)
> **Env Vars:** html (2), css (1), mdn (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Definitions:** is an  (1), is a  (1)
> **URLs:** [twotreesoliveoil.com](https://twotreesoliveoil.com) (1)
> **Documentation:** mdn (1)
> **Exercise Files:** exercise files (1)

#### Add quotes, line breaks, and citations
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=0)** - [Instructor] Next up, let's talk about adding quotations of various types to your documents.
>
> **[0:05](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=5)** Remember that there's two parts to a quote.
>
> **[0:07](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=7)** There's a thing that was said, and there's likely a person who said it.
>
> **[0:12](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=12)** Our Two Trees Olive Oil example doesn't have any quotes in it, so I've set up some examples for you here in codepen.
>
> **[0:20](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=20)** So I've got two quotations here from Shakespeare, and the first one is from "Hamlet."
>
> **[0:28](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=28)** And we have a citation here that's going to go with that.
>
> **[0:31](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=31)** If you take a look over at the shakespeare.[mit.edu](https://mit.edu) website, I've gone ahead and copied this little bit of Shakespeare from here.
>
> **[0:40](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=40)** And you can see I have a full website address where that information came from.
>
> **[0:45](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=45)** And so if we take a look over here, "Neither a borrower nor a lender be."
>
> **[0:50](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=50)** And then of course I've got my William Shakespeare as the author, "Hamlet" as the name of the play, and where it came from, act one, scene three.
>
> **[0:59](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=59)** So let's go ahead and mark this up, if this was something you wanted to include in your document.
>
> **[1:04](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=64)** So we're going to use the blockquote tag, because this is a longer quotation that's likely going to stand alone.
>
> **[1:14](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=74)** Particularly this being a play, the line breaks are really important to it, and this is probably going to stand out by itself.
>
> **[1:22](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=82)** So we'll go on ahead and close our blockquote after that.
>
> **[1:27](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=87)** Inside of this, we need to include our citation, so inside of the blockquote tag, we're going to put in a cite attribute.
>
> **[1:36](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=96)** And we can then link to the play.
>
> **[1:39](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=99)** So all we have to do is copy our website address from here, and inside of the quotation marks, we can link to exactly where we got this information, in this case, this particular webpage.
>
> **[1:53](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=113)** Now inside of that, we have our text.
>
> **[1:57](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=117)** Clearly this is a paragraph.
>
> **[2:00](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=120)** He's going to talk for some time.
>
> **[2:01](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=121)** We're only citing a portion of this.
>
> **[2:06](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=126)** And the paragraph's going to end here, but as I mentioned before, the line breaks are important.
>
> **[2:12](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=132)** So we are going to use the br tag, because those are critical as well, those individual line breaks.
>
> **[2:21](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=141)** All right, so there is the quotation.
>
> **[2:23](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=143)** We have our blockquote tag.
>
> **[2:25](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=145)** We know where it came from.
>
> **[2:26](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=146)** We have the full thing that was said.
>
> **[2:28](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=148)** Now who said it?
>
> **[2:30](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=150)** Where does that come from?
>
> **[2:31](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=151)** Well, William Shakespeare, "Hamlet," all of this, is called the footer of the blockquote, so we're actually going to use that same footer tag that we used previously in the Two Trees Olive Oil webpage.
>
> **[2:43](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=163)** We're actually going to use it here in this quote.
>
> **[2:46](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=166)** And then inside of that, we'll use the cite tag, so don't get confused.
>
> **[2:53](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=173)** There's a cite attribute, and there's a cite tag.
>
> **[2:57](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=177)** So in this case, the cite tag is going to identify the author and the name of the work.
>
> **[3:04](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=184)** So this is William Shakespeare, "Hamlet."
>
> **[3:07](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=187)** And you'll close your citation tag here.
>
> **[3:10](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=190)** Act one, scene three is helpful information, but it's not part of the citation necessarily, so it can go ahead and stay outside of the cite tag.
>
> **[3:18](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=198)** If you wanted to include a link here, as well, what you'll notice in the display is that that link to the shakespeare.[mit.edu](https://mit.edu) website is not going to display anywhere in the blockquote here.
>
> **[3:30](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=210)** It's merely in the source code, so if you actually want to have something that people can click on to see this whole thing, you would need to code an actual link somewhere.
>
> **[3:40](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=220)** So we could, for example, say a href equals, there's the Shakespeare link again.
>
> **[3:49](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=229)** And then say target equals underscore blank.
>
> **[3:57](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=237)** Act one, scene three, for example.
>
> **[3:59](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=239)** Slash a, and then that will give you an actual clickable link where you can go and refer to the text of the "Hamlet" play.
>
> **[4:08](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=248)** Okay, so that's our first example here, this little bit of "Hamlet."
>
> **[4:13](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=253)** Now for our second example, we're talking about "Romeo and Juliet," and I've rewritten the quotation here a little bit differently.
>
> **[4:22](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=262)** It's just as if Juliet was speaking, so, "'Romeo, Romeo? Wherefore are thou Romeo?' pleaded Juliet."
>
> **[4:28](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=268)** In this particular situation, we're going to mark this up a little bit differently.
>
> **[4:33](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=273)** First of all, of course it is going to be a paragraph.
>
> **[4:37](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=277)** This might be something that you read in a book, but what was said is going to be marked up with the q tag.
>
> **[4:45](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=285)** And usually, you take the quotation marks out when you do this.
>
> **[4:49](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=289)** The reason why is, you can see over here in the display, is that those quotations that I had in before, the straight quote marks, using the q tag, it'll put in the beautiful, curly quotes, or the smart quotes, like Microsoft Word calls them.
>
> **[5:04](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=304)** And it will look lovely here on the page.
>
> **[5:08](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=308)** So the q tag is for an inline quote like this that is definitely not its own paragraph.
>
> **[5:14](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=314)** So that is why we are using the q tag here instead of the blockquote tag.
>
> **[5:19](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=319)** And you can certainly include that cite attribute again.
>
> **[5:24](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=324)** So here is my citation from the Shakespeare play here again at the shakespeare.mit website, so I can include inside of my q tag again a cite, if I want.
>
> **[5:39](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=339)** Just like that, so that we have appropriately accredited this particular quote to the right location.
>
> **[5:46](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=346)** Obviously, once again, because we're using the cite attribute, there's nothing clickable here.
>
> **[5:50](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=350)** If you want something clickable, you'll need to add that afterwards.
>
> **[5:56](https://www.linkedin.com/learning/crafting-meaningful-html/add-quotes-line-breaks-and-citations?u=76281980&t=356)** So hopefully that explains to you the difference between the blockquote tag, which is designed for quotes that are of length, and the inline q tag, which is for shorter quotes that are not their own paragraph.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), from. (2), this, (2), case, (2), this. (2)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for example (2), just like (1)
> **URLs:** [mit.edu](https://mit.edu) (2)
> **Prerequisites:** set up (1), you'll need (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### When to use div and span elements
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=0)** - (Narrator) Div and span, have no semantic meaning by themselves.
>
> **[0:05](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=5)** Although it seems like everyone turns to these elements as some of their first choices in marking up a document.
>
> **[0:11](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=11)** Div and span should be used, only when there's no other element available to convey meaning, or when the purpose of the element, is to hold a CSS class or in some way to group together other elements on a page.
>
> **[0:27](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=27)** So let's see some examples of that in action.
>
> **[0:30](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=30)** So once again, here I am in code pen.
>
> **[0:32](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=32)** And I've given you a very simple example, here we have three paragraphs, there they are.
>
> **[0:39](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=39)** We also have a little bit of CSS down here.
>
> **[0:41](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=41)** I've already put in some classes for a class of warning, which will give things a red background with white letters.
>
> **[0:48](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=48)** Also created a class of bold and a class of italic.
>
> **[0:51](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=51)** So for example, let's just say that these three paragraphs are some kind of warning that we want to draw attention to on our web page.
>
> **[1:00](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=60)** And we want to do that, making them red backgrounds, and white letters and so forth.
>
> **[1:06](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=66)** One way that we can do that, would simply be to use the div tag.
>
> **[1:10](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=70)** Remember the div tag is a black level tag, it's appropriate to ness block level elements like a paragraph inside of a block level tag, all we have to do is say div with a class of warning.
>
> **[1:23](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=83)** (keyboard clicking) Then inside of that, we have our three paragraphs, and then we can go ahead and close our div.
>
> **[1:32](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=92)** Okay, so that might be one possibility, if this is the lengthy warning about the use of a very dangerous product.
>
> **[1:39](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=99)** This may be exactly what we want to do, we want to highlight these paragraphs, and we want to make sure we draw a lot of attention to them.
>
> **[1:46](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=106)** So a div with a class of warning is a great way to do that.
>
> **[1:49](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=109)** The other possibility is that, we have a warning in one paragraph that we don't necessarily have in other paragraphs.
>
> **[1:56](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=116)** And so for example, we could simply put a class of warning on one paragraph or another, but maybe not necessarily all of them.
>
> **[2:06](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=126)** So that would be another way of making use of this.
>
> **[2:10](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=130)** You could certainly take the same class of warning and apply individually to each of these paragraphs as well.
>
> **[2:16](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=136)** It gives you a slightly different style in this particular situation, rather than having that unifying div that's going to make the whole thing fill in.
>
> **[2:24](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=144)** Now, we actually have separate paragraphs, each of them with the warning applied that way.
>
> **[2:29](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=149)** So the difference here simply has to do with how this looks, we've not changed the meaning of these paragraphs at all.
>
> **[2:37](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=157)** We've not changed the meaning whether the div is there or not.
>
> **[2:41](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=161)** The next thing I want to do is show you how to make your text bold and italic the right way.
>
> **[2:47](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=167)** So rather than using those strong and M tags that I talked about earlier, you're going to actually use a span tag in order to do this correctly.
>
> **[2:56](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=176)** So where it says, "Make me a italic here," this inside of the paragraph, we want this to go across just a few words here, we're going to use span because that is an inline element, it goes across just a few words.
>
> **[3:11](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=191)** It's only as big as its content, as opposed to a block level element which is as large as its containing element.
>
> **[3:18](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=198)** In this case, these paragraphs are contained in the body tag, how big is the body tag, it's as big as the whole webpage.
>
> **[3:24](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=204)** So the span tag is only as big as its content.
>
> **[3:27](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=207)** That's what we need here.
>
> **[3:28](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=208)** So here, I'm simply going to say span with a class of italic (keyboard clicking) and then we can close that span tag.
>
> **[3:42](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=222)** So in this case, I'm making this text italic only because it looks pretty or I want to visually add some interest here for some reason, I'm not trying to change the meaning of the document.
>
> **[3:55](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=235)** And so that is the reason that we would choose to use a span with a class of italic over the M tag, for example, likewise here, where it says "Make me bold," we can do that with span with a class of bold.
>
> **[4:12](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=252)** (keyboard clicking) Make me bold, so once again, there may be some reason you want to make those letters bold, something of visual interest.
>
> **[4:21](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=261)** But we're not trying to emphasize the meaning of this particular text or draw a whole lot of attention to it for whatever reason.
>
> **[4:28](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=268)** This is simply a stylistic kind of thing.
>
> **[4:31](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=271)** And in those situations you wanted to use a span tag instead.
>
> **[4:35](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=275)** We're not drawing any sort of conclusions about the meaning of this document.
>
> **[4:39](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=279)** So those are the reasons to be using div and span.
>
> **[4:42](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=282)** In other words, you can use these tags to hold a class or to group things together.
>
> **[4:48](https://www.linkedin.com/learning/crafting-meaningful-html/when-to-use-div-and-span-elements?u=76281980&t=288)** But you're not implying anything about the overall meaning of the webpage when you make use of these tags.

> [!info]- Semantic Content
>
> **Warnings:** warning (9)
> **CLI Commands:** make (8)
> **Code Keywords:** let (2), case, (2), this. (1)
> **Definitions:** is a  (2), is an  (1), in other words (1)
> **Analogies:** for example (3)
> **Non-Speech:** (keyboard clicking) (3)
> **Env Vars:** css (2)

#### Challenge: Identify semantic problems
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-identify-semantic-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-identify-semantic-problems?u=76281980&t=0)** - [Instructor] Now that you've learned all of these fabulous new tags that you can incorporate into your documents it's time for another challenge.
>
> **[0:13](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-identify-semantic-problems?u=76281980&t=13)** And in this particular challenge I've given you this starting html document.
>
> **[0:18](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-identify-semantic-problems?u=76281980&t=18)** It is unfortunately marked up the way I see many html documents marked up out there on the web today.
>
> **[0:26](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-identify-semantic-problems?u=76281980&t=26)** So what I would like for you to do is I'd like for you to go ahead and read through the document.
>
> **[0:32](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-identify-semantic-problems?u=76281980&t=32)** Notice I'm not putting in a web browser.
>
> **[0:34](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-identify-semantic-problems?u=76281980&t=34)** I don't care what it looks like.
>
> **[0:36](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-identify-semantic-problems?u=76281980&t=36)** This is about the html and how meaningful the html is to this particular document.
>
> **[0:42](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-identify-semantic-problems?u=76281980&t=42)** Go on ahead and take a look at all this.
>
> **[0:44](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-identify-semantic-problems?u=76281980&t=44)** Read through it and what I'd like for you to do is to think very carefully about how you could improve the mark up here in this document.
>
> **[0:55](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-identify-semantic-problems?u=76281980&t=55)** There's, as always, never one right answer to all of this.
>
> **[0:59](https://www.linkedin.com/learning/crafting-meaningful-html/challenge-identify-semantic-problems?u=76281980&t=59)** But I will go ahead and give you my solution in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Identify semantic problems
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=0)** - [Narrator] So how'd you do with that particular challenge?
>
> **[0:08](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=8)** Hopefully you were able to put into use a lot of those fabulous HTML tags that you didn't know about into this new document.
>
> **[0:17](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=17)** As always, there are lots of solutions to this particular challenge.
>
> **[0:20](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=20)** I'm going to give you my answers and I'll point out some areas where you might have a slightly different answer than I do along the way.
>
> **[0:28](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=28)** So let's go ahead and get started.
>
> **[0:30](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=30)** First of all, at the top of the document we have a header.
>
> **[0:33](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=33)** The header has the name of the website inside of an H1 and then we have a nav bar.
>
> **[0:38](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=38)** That nav bar is marked up with a nav tag because it's the main navigation for the website.
>
> **[0:44](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=44)** It's in the form of an unordered list with all the links.
>
> **[0:47](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=47)** And I put that nav bar inside of the header just to do something a little bit different this time.
>
> **[0:53](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=53)** You could definitely leave that outside of the header as well as I did in an earlier example.
>
> **[0:58](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=58)** Either way is fine, you'll see it both ways on the web.
>
> **[1:01](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=61)** Next up is our article because clearly how we make our olive oil is an article here in our document.
>
> **[1:07](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=67)** We've marked up our next heading with an H2 because we've already used H1 on the page.
>
> **[1:12](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=72)** This is the next most important thing on the page and we don't skip levels.
>
> **[1:17](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=77)** So there's our H2.
>
> **[1:19](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=79)** And then you can go ahead and go through and mark things up.
>
> **[1:22](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=82)** In this first paragraph though, bonus points to those of you who realized that all of the abbreviations that I have here in this paragraph need to be marked up as well.
>
> **[1:34](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=94)** I did not tell you about the abbreviation tag but it is another very lovely semantic tag that's out there and available.
>
> **[1:41](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=101)** So this is the ABBR tag.
>
> **[1:44](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=104)** All we need to do is wrap that around any abbreviation that appears on our web page and we'll give it the title attribute what that abbreviation stands for all spelled out.
>
> **[1:54](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=114)** If you take a look at that in a web browser, I'm using Firefox here.
>
> **[1:59](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=119)** Not all web browsers do this but Firefox does.
>
> **[2:03](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=123)** When you roll your mouse over one of these abbreviations a little tool tip will come up and show you what these various abbreviations stand for.
>
> **[2:13](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=133)** So that's really nice feature and it's good accessibility to go on ahead and do that.
>
> **[2:19](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=139)** Moving on here, cultivating, harvesting, cleaning, these are all parts of the article.
>
> **[2:24](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=144)** They are not at the same level as the title of the article so we mark them up as H3's.
>
> **[2:28](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=148)** And we have paragraphs associated with those.
>
> **[2:31](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=151)** And then it looks like we have a second article after that first one is possible and absolutely possible to have more than one article on a web page.
>
> **[2:40](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=160)** So we're moving on to a second type of article.
>
> **[2:44](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=164)** This is a frequently asked questions in a H2 because it's at the same level as the previous article.
>
> **[2:50](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=170)** And then inside of that, oh my goodness, look at this.
>
> **[2:54](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=174)** It's a description list that I have used here for my frequently asked questions.
>
> **[2:59](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=179)** Why?
>
> **[3:00](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=180)** Because there's a relationship between the question and the answer.
>
> **[3:04](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=184)** So we have our question, how does extra virgin olive oil compare to regular olive oil?
>
> **[3:10](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=190)** And then we have an answer that comes after that.
>
> **[3:14](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=194)** And as I'm looking at this, I'm realizing that I left off the abbreviation tags for a couple of those EVOO's so make sure you include those also.
>
> **[3:23](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=203)** And then down here at the bottom, we had an aside, this likely wind up in a sidebar somewhere along the way, a few testimonials.
>
> **[3:31](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=211)** I always prefer to put my testimonials in a sidebar, maybe it's just because people never click on a link that says testimonials.
>
> **[3:38](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=218)** It'll all be good stuff, people don't go there to read it but if you put your testimonials throughout your document, then you have a better chance of people looking at them.
>
> **[3:47](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=227)** So my testimonials are in H2, the same level as my article titles.
>
> **[3:52](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=232)** Inside of that, we have people who are talking about the olive oil.
>
> **[3:56](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=236)** What they said was paragraph and then we have who said it.
>
> **[4:00](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=240)** So those are in the footer, we have person who said it and those are all contained inside of block quotes.
>
> **[4:07](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=247)** Then finally at the bottom of the document we have a footer.
>
> **[4:11](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=251)** The footer includes the address and includes our follow us with links to Facebook and Twitter.
>
> **[4:17](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=257)** And of course, our address is marked up appropriately here with the address tag.
>
> **[4:22](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=262)** We've made a clickable phone number, we've made our email address clickable to send an email.
>
> **[4:28](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=268)** And at the very bottom here, we have links to Facebook and Twitter.
>
> **[4:32](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=272)** Those are in an unordered list but no nav tag because, again, it's not the main navigation for the website.
>
> **[4:38](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=278)** So those are all the things that I did in this document in terms of marking it up semantically.
>
> **[4:43](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=283)** Now that it's in this state, your next stage would be to take all of the semantic mark up and we're going to start thinking about how to lay this out with CSS.
>
> **[4:55](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=295)** At that point in time, you may wind up adding some divs or spans to this particular document if necessary.
>
> **[5:02](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=302)** Otherwise, you could simply include any CSS classes inside of the tags that already exist.
>
> **[5:07](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=307)** You can write very simple style sheets, leveraging the element selectors here.
>
> **[5:12](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=312)** And style up this page in a very nice way.
>
> **[5:15](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=315)** So that would be the next thing to do.
>
> **[5:17](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=317)** In other words, always take your HTML, push it as far as possible first.
>
> **[5:21](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=321)** Then you're going to layer on the CSS.
>
> **[5:24](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=324)** And then if you are using it, then you would layer on the JAVA Script on top of that.
>
> **[5:29](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=329)** So always push your HTML as far as possible.
>
> **[5:32](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?u=76281980&t=332)** It leads to better accessibility and better readability and a much more meaningful document than marking everything up with a bunch of dibs and spans.

> [!info]- Semantic Content
>
> **Env Vars:** html (3), css (3), abbr (1), evoo (1), java (1)
> **Code Keywords:** let (1), for. (1), this. (1), this, (1)
> **Definitions:** stands for (1), is a  (1), in other words (1)
> **CLI Commands:** make (2)
> **Tools:** firefox (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Additional Important Semantic Elements

> [↑ Back to Table of Contents](#table-of-contents)

#### Controlling breaks with <wbr> or &shy;
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=0)** - [Instructor] In this next chapter, I'd like to take a look at some other tags that are still semantic HTML and are very important but didn't conveniently fit into other parts of the course.
>
> **[0:10](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=10)** I'm going to start here with the WBR tag, and words in the English language are often not too long, relatively speaking, however, every so often you'll encounter a really long word, like dichlorodifluoromethane, which is a bit longer than average.
>
> **[0:27](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=27)** When that appears in the middle of a paragraph it looks fine, however, if it appears at the end of the line it may make the rag of your paragraph look a little bit odd.
>
> **[0:36](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=36)** By the rag, I'm talking about the edge of the paragraph here.
>
> **[0:40](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=40)** When we don't justify on both the left and the right-hand side, you expect to see a little unevenness on the right side of the paragraph here, but sometimes it can get worse than other times.
>
> **[0:50](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=50)** So for example, here just the word chlorofluorocarbon is wrapping here onto the next line.
>
> **[0:54](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=54)** You see the big space that that's causing there, but we can make this problem even worse as the screen changes size here, as it might do in a responsive design type of environment.
>
> **[1:05](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=65)** So here we've got a great big huge gap where dichlorodifluoromethane wraps onto another line.
>
> **[1:10](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=70)** So what are we going to do?
>
> **[1:11](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=71)** Well, in the printing world, you'd add some hyphens, but we don't necessarily know where hyphens are going to be required and when they're not, and there's two possible ways to address this particular problem.
>
> **[1:22](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=82)** One is with the WBR tag, which stands for word break opportunity, WBR, and there's also a special character called the shy hyphen, which is specified via the "&shy;" I'm going to demonstrate both of these for you so you can see the difference for both of these.
>
> **[1:43](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=103)** So what you're going to do with the word break tag is you're going to indicate where the browser might break this word into syllables, and I picked dichlorodifluoromethane, even though it's kind of an odd thing to talk about in a non-chemistry course, because it is pretty clear where exactly we can break this.
>
> **[2:01](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=121)** So for example, after dichloro, we could put in a WBR tag here.
>
> **[2:08](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=128)** And I'm just going to go ahead and copy that.
>
> **[2:12](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=132)** And then I'm just going to paste that a bunch of times.
>
> **[2:14](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=134)** So dichloro, word break, difluoro, word break, methane.
>
> **[2:19](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=139)** We can also do that here, at chloro, fluoro, carbon, just like that, word breaks in between chloro and fluoro and fluoro and carbon.
>
> **[2:29](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=149)** And of course we'll need to do this again for dichlorodifluoromethane, once again in the second instance.
>
> **[2:37](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=157)** And, so what this is going to do, you can just already see it updating here in my code pen, when it needs to wrap, it will in fact wrap that word to the next line.
>
> **[2:46](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=166)** So, a rag is a little bit less dramatic, shall we say?
>
> **[2:51](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=171)** So, as you see here, there's chlorofluorocarbon and so forth.
>
> **[2:56](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=176)** As we changed the width of the page, then those breaks were going to happen.
>
> **[3:01](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=181)** If the browser determines that that is a reasonable place to wrap a word onto the next line, it'll find the closest word break and do exactly that.
>
> **[3:09](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=189)** Now, grammarians will notice that, in fact, this is lovely, but there's no hyphen here.
>
> **[3:16](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=196)** And you may be bothered by that particular fact, 'cause of course you would like to have a hyphen there.
>
> **[3:21](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=201)** So how do we go about doing that?
>
> **[3:23](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=203)** So we don't have hyphens when they're not needed but we have them show up when they are needed.
>
> **[3:27](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=207)** Well, and the way we're going to do that is with this shy hyphen character.
>
> **[3:32](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=212)** I'm just going to go copy that same paragraph we just worked on and paste it right underneath here, but everywhere I have a WBR, I'm going to change this to "&shy;" just like that.
>
> **[3:48](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=228)** And as I said, this is called the shy hyphen, it's kind of an alternative here to this word break tag, and what this is going to do, as I go through here and substitute all of those, we'll see them together.
>
> **[4:05](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=245)** Likewise, as you can see already over here in the display view of my code pen, this will actually break the word and put in a hyphen where needed.
>
> **[4:15](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=255)** So, as the page gets bigger, here we go, there's chlorofluoro hyphen, dichlorodifluoro hyphen, as opposed to the word break up here on the top where those hyphens don't occur.
>
> **[4:28](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=268)** And this shy character's going to work exactly the same way as the word break tag, but it will put in a hyphen for you as well.
>
> **[4:39](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=279)** So, which one of these approaches should you use?
>
> **[4:41](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=281)** Well, it depends.
>
> **[4:42](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=282)** Just like all great things in web design.
>
> **[4:45](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=285)** If the hyphen is important, then you should use the ampersand shy hyphen character.
>
> **[4:51](https://www.linkedin.com/learning/crafting-meaningful-html/2401501?u=76281980&t=291)** Otherwise, the WBR tag is going to give you a break in the word without the hyphen.

> [!info]- Semantic Content
>
> **Env Vars:** wbr (6), html (1)
> **Analogies:** just like (3), for example (2)
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** break, (2), this. (1)
> **Cross-References:** next chapter (1)
> **Speakers:** - [instructor] (1)

#### Displaying code with <code>, <samp>, and <kbd>
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=0)** - [Instructor] Unsurprisingly, HTML offers several tags for marking up code, keyboard inputs, and screen outputs.
>
> **[0:07](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=7)** It's easy to confuse which tag is used for what.
>
> **[0:11](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=11)** So if you're a coding person, here's what you need to know about marking up code with HTML.
>
> **[0:18](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=18)** This is my starting code pen for this particular example.
>
> **[0:21](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=21)** And as you see here, there are some instructions to do some work, and then there's some code inside of this pre tag, so here's what you're going to do.
>
> **[0:29](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=29)** You're going to write an alert dialog box using JavaScript.
>
> **[0:33](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=33)** You're going to use command option I to open up your browser's coding console.
>
> **[0:37](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=37)** And then you're going to type in some code here, some JavaScript into that.
>
> **[0:41](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=41)** Hit return, and then you're going to see a pop-up box that's going to show up after that.
>
> **[0:46](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=46)** That's what our text is.
>
> **[0:48](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=48)** And right now, this is just marked up with a series of paragraphs, except for our little bit of code right here, which uses the pre-tag, this is the pre formatted tag.
>
> **[0:57](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=57)** And that tag indicates that whatever's inside of this should display exactly as written.
>
> **[1:03](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=63)** Pre has been used for displaying code for a long time, but it's not specifically for that purpose.
>
> **[1:09](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=69)** All this pre tag says is to display this code exactly as typed.
>
> **[1:14](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=74)** You could use this pre tag for ASCII art for example, you don't have to use it just for code.
>
> **[1:19](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=79)** So let's add some more meaningful tags that are typically used in the context of teaching and sharing code.
>
> **[1:26](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=86)** So, first of all, here in the second paragraph, you'll notice that we have command option I.
>
> **[1:32](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=92)** it's a, obviously a series of keys that you need to press together in order to open your browser's coding console.
>
> **[1:38](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=98)** There is in fact, a tag for marking these up, it's the keyboard tag, KBD.
>
> **[1:46](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=106)** And of course, you close that with a slash KBD.
>
> **[1:51](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=111)** And so we'll go ahead and put that around each one of these, KBD slash KBD.
>
> **[2:03](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=123)** Now, as you'll notice that by default, the keyboard tag itself causes this to display in just a monospace font, pretty much the same as the pre tag does here as well.
>
> **[2:15](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=135)** This is your browser and what it is doing by default with the browser style sheet.
>
> **[2:21](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=141)** You could make those keyboard buttons though look a little bit more keyboardy, all you have to do is just write a little style for that.
>
> **[2:28](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=148)** So if we said, for example, KBD, we want these to look buttony.
>
> **[2:33](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=153)** A good start is to always put a border on it.
>
> **[2:36](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=156)** One pixel solid and maybe a nice shade of gray.
>
> **[2:40](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=160)** We could give it a little bit of padding on all four sides.
>
> **[2:46](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=166)** We could give it a border radius to give us a little bit of rounded corners.
>
> **[2:52](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=172)** And then, you could probably leverage the box shadow property, which by default, this will just give you some black underneath here.
>
> **[3:02](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=182)** You can blur out that drop shadow a little bit which I'm going to do here with this 10 pixels, so you know that blurs just a little bit.
>
> **[3:10](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=190)** And then if that shadows still looks a little dark to you, you could give it a different color.
>
> **[3:14](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=194)** All of this can be done in the same declaration right here in your CSS.
>
> **[3:19](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=199)** So that'll make your keyboard buttons look a little bit more keyboardy.
>
> **[3:23](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=203)** And we also have the return key specified down here on line 10, let's go ahead and add a keyboard tag around that as well.
>
> **[3:34](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=214)** That pretty much covers the keyboard tag.
>
> **[3:37](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=217)** Obviously, anytime you tell people to hit something on their keyboard, this is a good tag to use.
>
> **[3:42](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=222)** Now let's focus on this code here just for a moment.
>
> **[3:45](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=225)** You may very well want the code to display exactly like this, but technically speaking, you need to have a code tag in here to specifically mark this as code.
>
> **[3:56](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=236)** Because after all, as I said, it could be just ASCII art or anything else where you want it to appear exactly the way you've typed it in.
>
> **[4:04](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=244)** And we are taking this to the next level by specifying that this is code.
>
> **[4:08](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=248)** So all you need to do here is simply add the code tag before and after that specific code just like that, and that will be fine.
>
> **[4:20](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=260)** Now you might be wondering what happens if you just take the pre tag out here.
>
> **[4:24](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=264)** Well, if you did that, everything would show up on one line altogether, it's definitely flagged as code here now semantically speaking, but it's not displaying the way that you want.
>
> **[4:34](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=274)** So you probably want to keep both of those tags.
>
> **[4:37](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=277)** Finally, down here at the bottom of our screen, we have the output here.
>
> **[4:45](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=285)** What happens?
>
> **[4:45](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=285)** Once you actually type all of this code into your console, this is going to generate a little pop-up window for you.
>
> **[4:52](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=292)** And that pop-up window depends on what browser you're using, but if you're using Chrome like I am, it'll say at the top, something like LinkedIn learning says, and then hello world, it'll look kind of like this.
>
> **[5:03](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=303)** And there's actually a way of semantically marking this up as well.
>
> **[5:08](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=308)** This is called the sample tag and the sample tag is what you use anytime you're specifying what will show up on the computer screen once you've asked someone to do something.
>
> **[5:18](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=318)** So here we are, we've told them what to click on the keyboard, we've told them what code to type in, and now we're going to tell them what they're going to see on the screen when they've done all that successfully.
>
> **[5:27](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=327)** So rather than marking this up with paragraph tag, let's mark it up with the S-A-M-P, sample tag, just like that.
>
> **[5:37](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=337)** And you'll see down here at the very bottom of the display here, it says LinkedIn learning says, hello world, again, in that same monospace font.
>
> **[5:44](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=344)** In fact, if you type this in and follow the instructions that are here, they do in fact work and do this exact thing.
>
> **[5:51](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=351)** You'll discover that LinkedIn learning says will be on one line, hello world will be on another.
>
> **[5:57](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=357)** So a good thing to do, if you want to break those is to use the BR, the line break tag in order to more specifically reflect what they will actually see when they see this pop-up window.
>
> **[6:11](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=371)** So that's a whole pile of tags that are useful for talking about or teaching code in HTML.
>
> **[6:19](https://www.linkedin.com/learning/crafting-meaningful-html/2397633?u=76281980&t=379)** That would be the code tag, the sample tag, the keyboard tag, and the pre formatting tag.

> [!info]- Semantic Content
>
> **Env Vars:** kbd (5), html (3), ascii (2), css (1)
> **Code Keywords:** let (4), default, (2), return, (1), this, (1), finally, (1)
> **Analogies:** for example (2), just like (2), kind of like (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), is called (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### Providing scripting alternatives with <noscript>
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=0)** - [Instructor] So many pages are powered primarily by JavaScript these days.
>
> **[0:04](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=4)** However, there are situations where people may disable JavaScript or have some other reason that they can't run the JavaScript on your website.
>
> **[0:13](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=13)** What happens in those situations?
>
> **[0:16](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=16)** Well, I've written a really simple, really basic sort of CodePen here, just a single line of JavaScript inside of some script tags.
>
> **[0:24](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=24)** And this does in fact work.
>
> **[0:26](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=26)** If you go in ahead and hit Return here, you will eventually see, you may have to hit Return a couple times but you'll eventually see, there we go, a little alert box coming up here that says, "Welcome to my website."
>
> **[0:38](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=38)** And that's great because I have JavaScript turned on and that works just fine.
>
> **[0:42](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=42)** But if I didn't have JavaScript turned on, what would this actually look like?
>
> **[0:46](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=46)** Well, it would look like this over here.
>
> **[0:48](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=48)** Absolutely nothing at all.
>
> **[0:49](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=49)** In other words, I would get a webpage where I see nothing.
>
> **[0:54](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=54)** I would not have no way of knowing whether it's the website is just broken, it didn't load, or whether I have something misconfigured on my computer.
>
> **[1:03](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=63)** But probably the end result would be I would go away and not come back.
>
> **[1:07](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=67)** In real life, your JavaScript example's going to be way more complicated than this but the end result may be the same.
>
> **[1:13](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=73)** The user's going to see nothing and they have no idea why they see nothing and they have no idea how to fix the problem.
>
> **[1:19](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=79)** So how can we get around this issue in a world where JavaScript is being used more and more in webpage design?
>
> **[1:26](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=86)** And one way of doing this is with the noscript tag.
>
> **[1:30](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=90)** So I'm just going to start this by commenting out this particular bit of script right here in my HTML.
>
> **[1:38](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=98)** Otherwise, as I type, I'm going to get that little alert box coming up over and over again.
>
> **[1:43](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=103)** It gets really, really annoying.
>
> **[1:44](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=104)** So I'll uncomment that here at the end.
>
> **[1:47](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=107)** I'm going to put in a noscript tag just like this, /noscript.
>
> **[1:55](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=115)** And in between these noscript tags, you can put whatever you want.
>
> **[2:00](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=120)** You can have as many additional HTML tags as you want or no tags at all.
>
> **[2:04](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=124)** It's completely up to you.
>
> **[2:05](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=125)** It can be an entire webpage.
>
> **[2:07](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=127)** It can be just a few lines of text.
>
> **[2:09](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=129)** Whatever it is, noscript will accommodate it.
>
> **[2:13](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=133)** So I'm going to make a paragraph here that says, "Welcome to my website: Be sure to enable JavaScript
>
> **[2:24](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=144)** "for best results, or call 1234567890 for assistance."
>
> **[2:38](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=158)** And then we'll end our paragraph.
>
> **[2:41](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=161)** So now, if I uncomment my script tag here on the top, there's my little alert.
>
> **[2:52](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=172)** So right now I would see that because again, I have JavaScript turned on.
>
> **[2:55](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=175)** I need JavaScript in order to run CodePen.
>
> **[2:57](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=177)** But if I didn't have JavaScript enabled, I would see this text that would show up here inside of the no code tag instead.
>
> **[3:05](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=185)** Note that just telling people to enable JavaScript may not actually be all that helpful.
>
> **[3:11](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=191)** People don't know how to do that necessarily or there's some really good reason that JavaScript isn't available most likely.
>
> **[3:20](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=200)** Give them some alternative for getting the job done.
>
> **[3:23](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=203)** Give them an email address to contact or a phone number to call.
>
> **[3:27](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=207)** That's a really good start because otherwise all they see is turn the JavaScript on and then, you know, the kingdom will open to you.
>
> **[3:36](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=216)** Well, that's just not very welcoming and it's not accessible and it's not accommodating.
>
> **[3:41](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=221)** Give people an alternative way to get in touch with you if they can't use your website.
>
> **[3:47](https://www.linkedin.com/learning/crafting-meaningful-html/2402517?u=76281980&t=227)** And this noscript box is a great way to get that done.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (1), this, (1)
> **Env Vars:** html (2)
> **Cross-References:** coming up (2)
> **Definitions:** in other words (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Providing details with <details> and <summary>
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=0)** - [Instructor] Next up, let's look at these frequently asked questions from the Two Trees Olive Oil Website.
>
> **[0:06](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=6)** These could definitely be marked up a bit better than they are.
>
> **[0:09](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=9)** We could use a definition list perhaps, to mark this up.
>
> **[0:12](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=12)** The series of questions and answers and a definition list might be a good way of doing that.
>
> **[0:18](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=18)** The question becomes our definition term while the answer would be the definition itself.
>
> **[0:23](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=23)** But there is another structure we could use here though that would allow us to skim through the questions and give us a little interactivity in order to see the answer.
>
> **[0:32](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=32)** This is the new details tag along with the summary tag.
>
> **[0:36](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=36)** So let's start marking this up appropriately.
>
> **[0:40](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=40)** And so the way this is going to work is as follows.
>
> **[0:44](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=44)** What we're going to do is around the question and the answer, we are going to add a tag called details.
>
> **[0:53](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=53)** And then after that answer we'll go on ahead and put in a slash details tag.
>
> **[1:01](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=61)** And of course you can indent your HTML inside of that and then we're going to do the same thing again here.
>
> **[1:08](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=68)** Details slash details.
>
> **[1:13](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=73)** And so if you notice here all I've done is just add these HTML tags.
>
> **[1:17](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=77)** Look how much the view has changed.
>
> **[1:19](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=79)** So now over here, just as details.
>
> **[1:22](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=82)** When I click on it, it opens up like an accordion panel, is it not nice.
>
> **[1:27](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=87)** And inside of that is our question and our answer.
>
> **[1:30](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=90)** So that is the default configuration here for the details tag, it will display your information closed by default and it will display the word details.
>
> **[1:42](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=102)** Now that's awesome, that's super fun.
>
> **[1:44](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=104)** But chances are a page where you just see a whole series of details is not really going to compel people to click on it.
>
> **[1:52](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=112)** Wouldn't it be nice if instead we could actually see the question and people would click on it to have that open up and you could see the answer.
>
> **[2:00](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=120)** While in fact that is do able, the way we do that is with the summary tag.
>
> **[2:05](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=125)** The summary tag needs to be a first child of the details tag.
>
> **[2:09](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=129)** In other words, right after details the summary needs to happen right here in this position.
>
> **[2:16](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=136)** And slash summary.
>
> **[2:20](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=140)** So the very first thing that's listed there is the summary.
>
> **[2:23](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=143)** And then that will substitute for the word details as the actual in this case, a question.
>
> **[2:29](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=149)** And when you click on it then you'll see the answer here underneath.
>
> **[2:33](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=153)** So we can do that again for the second one as well.
>
> **[2:35](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=155)** This becomes summary slash summary and then of course you have the answer underneath.
>
> **[2:45](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=165)** Just like that.
>
> **[2:47](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=167)** So the details tag will combine with summary is pretty exciting.
>
> **[2:51](https://www.linkedin.com/learning/crafting-meaningful-html/2402518?u=76281980&t=171)** It allows you to have accordion like functionality inside of your webpage without even implementing any JavaScript at all and it can communicate this information in an accessible way with just HTML.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), super (1), case, (1)
> **UI Navigation:** click on (4)
> **Env Vars:** html (3)
> **Definitions:** in other words (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Understanding the misunderstood <hr>
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=0)** - The HR tag is one of those early tags you might learn in web development.
>
> **[0:05](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=5)** Historically HR stands for horizontal rule.
>
> **[0:08](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=8)** In other words, draw a horizontal line on the page.
>
> **[0:12](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=12)** That's it, the line didn't mean anything but you could easily add a line wherever you wanted it.
>
> **[0:19](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=19)** There's no semantic meaning behind a horizontal line however, and so for a long time developers stopped using HR in their documents in favor of putting in horizontal lines, using borders and CSS, which is a much better way to do this.
>
> **[0:34](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=34)** Today, however, the HR tag has been redefined to indicate a change in theme.
>
> **[0:39](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=39)** Within the same section or article, there may be different minor changes that happen.
>
> **[0:44](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=44)** The HR tag indicates where those changes happen.
>
> **[0:47](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=47)** For example, here we have a title for this portion of the page, which is a description of how olive oil is made.
>
> **[0:54](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=54)** We can wrap a section tag around this, or even an article tag might be more appropriate as this might be a story about how to make olive oil.
>
> **[1:02](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=62)** But just to keep this a bit more generic for the moment, let's just use section.
>
> **[1:07](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=67)** So I'm going to go ahead and put that section tag here at the top section, here we go, this article goes on for some time, and then we have a closing section.
>
> **[1:19](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=79)** Here we go.
>
> **[1:21](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=81)** And we can indent everybody a little bit.
>
> **[1:25](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=85)** Within this section, we have short instructions about what happens in each step of making olive oil.
>
> **[1:31](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=91)** In other words, we have a thematic shift between each of these paragraphs, even though they're all related.
>
> **[1:38](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=98)** The whole thing is the process of how to make olive oil, but first, we're going to talk about cultivating, then we're going to talk about harvesting.
>
> **[1:44](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=104)** Then we're going to talk about cleaning, they're thematic changes.
>
> **[1:48](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=108)** Therefore, an HR tag here is appropriate to indicate the change in theme.
>
> **[1:53](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=113)** If you don't want to show the line, you can always restyle that to whatever you want or to nothing at all.
>
> **[1:59](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=119)** And so let's go ahead and drop in some of these HR tags to demonstrate that.
>
> **[2:04](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=124)** So, here we've talked about cultivating, now we're going to change our theme to harvesting.
>
> **[2:10](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=130)** There we go.
>
> **[2:11](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=131)** And then we're going to change our theme again here to cleaning, and so that is worth another HR tag at that point in time.
>
> **[2:19](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=139)** Now, there's a bunch of things you could do now if you don't actually want that line to appear.
>
> **[2:25](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=145)** So of course, obviously the simplest thing to do., is simply say HR, and then something like display none, which will hide that HR entirely.
>
> **[2:34](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=154)** So it's there in the markup, and indicates the change in theme, but you don't actually see it displayed on the page.
>
> **[2:41](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=161)** That's an easy choice there, just don't display it, or of course you could go to the other extreme which is make them look kind of exciting.
>
> **[2:49](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=169)** So you could give them maybe a height of 20 pixels, you could give them border of none.
>
> **[2:56](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=176)** That was the little box that you were seeing there, it was from a border, you could get rid of that.
>
> **[3:02](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=182)** Then you could give it something like a background color.
>
> **[3:07](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=187)** Let's just say yellow, get relatively inoffensive, obviously you could pick whatever color you wanted.
>
> **[3:13](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=193)** Other things you could do here, you could put in some kind of background image, either tiled or not tiled that would fill up that particular space and help to divide things thematically you could put in a gradient.
>
> **[3:24](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=204)** There's lots of ways you can write gradients with CSS, and drop that in websites like [cssgradients.io](https://cssgradients.io), are a way of easily making a gradient, and then you can just copy the code and drop it on in here.
>
> **[3:38](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=218)** So there's lots of ways you can make your HRs look exciting and different with CSS, If you choose to display your HRs.
>
> **[3:45](https://www.linkedin.com/learning/crafting-meaningful-html/2400519?u=76281980&t=225)** Otherwise you can just hide them with display none.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1), this, (1)
> **Definitions:** in other words (2), is a  (2), stands for (1)
> **CLI Commands:** make (4)
> **Env Vars:** css (3)
> **URLs:** [cssgradients.io](https://cssgradients.io) (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - the (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/crafting-meaningful-html/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/crafting-meaningful-html/next-steps?u=76281980&t=0)** - Hi, everybody, it's Jen Kramer.
>
> **[0:02](https://www.linkedin.com/learning/crafting-meaningful-html/next-steps?u=76281980&t=2)** Thank you so much for watching Crafting Meaningful HTML.
>
> **[0:07](https://www.linkedin.com/learning/crafting-meaningful-html/next-steps?u=76281980&t=7)** If you enjoyed this course, there's so much more to learn.
>
> **[0:10](https://www.linkedin.com/learning/crafting-meaningful-html/next-steps?u=76281980&t=10)** I didn't have time to cover all of the HTML tags in this course, but there's some additional courses that may help you.
>
> **[0:16](https://www.linkedin.com/learning/crafting-meaningful-html/next-steps?u=76281980&t=16)** I have a separate course called HTMl Tables which is all about crafting tables for data including marking them up and styling them and making them responsive across mobile devices.
>
> **[0:30](https://www.linkedin.com/learning/crafting-meaningful-html/next-steps?u=76281980&t=30)** That may be something that's of interest to you.
>
> **[0:33](https://www.linkedin.com/learning/crafting-meaningful-html/next-steps?u=76281980&t=33)** The other thing you might want to watch is my course on CSS Selectors, and this particular course will cover how to select things on a webpage.
>
> **[0:41](https://www.linkedin.com/learning/crafting-meaningful-html/next-steps?u=76281980&t=41)** It doesn't all have to be classes.
>
> **[0:43](https://www.linkedin.com/learning/crafting-meaningful-html/next-steps?u=76281980&t=43)** There's all kinds of interesting attribute selectors and descendant selectors, all kinds of interesting types of selectors out there that may be a better choice for you than putting classes all over your webpage to go with your newly semantic HTML.
>
> **[1:01](https://www.linkedin.com/learning/crafting-meaningful-html/next-steps?u=76281980&t=61)** Thanks again so much for watching, and I look forward to seeing you in another course.

> [!info]- Semantic Content
>
> **Env Vars:** html (3), css (1)
> **Speakers:** - hi (1)


## Instructor

- [[Jen Kramer]]

## Resources

- Exercise files available

## Skills Covered

- HTML

## Path Context

### In [[Advance Your Skills in HTML]]
← [[HTML Essential Training]] | **2 of 11** | [[HTML and CSS- Linking]] →

## Appears In

- [[Advance Your Skills in HTML]]

## Related Courses

_Courses sharing skills:_

- [[HTML- Structured Semantic Data]] — HTML
- [[Building Great Forms with HTML and CSS]] — HTML
- [[HTML & CSS- Creating Forms]] — HTML
- [[HTML- Metadata in the Head]] — HTML
- [[HTML- Tables]] — HTML

---

[↑ Back to top](#)