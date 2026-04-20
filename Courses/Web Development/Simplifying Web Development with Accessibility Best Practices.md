---
type: course
cssclasses:
  - lle-course
slug: simplifying-web-development-with-accessibility-best-practices
url: "https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices"
duration_minutes: 108
duration: 1h 48m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGvnExQWRvuDQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1622152004842?e=2147483647&amp;v=beta&amp;t=0qellubEwrYR9nJeO84vRKbAdxom225hGsHAiQj6a6g"
linkedin_topic: Web Development
learning_paths:
  - Prepare for Digital Accessibility
  - Explore a Career in Front-End Web Development
path_count: 2
tags:
  - course
  - topic/web-development
status: not-started
created: 2026-04-19
---

![Simplifying Web Development with Accessibility Best Practices](https://media.licdn.com/dms/image/v2/C560DAQGvnExQWRvuDQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1622152004842?e=2147483647&amp;v=beta&amp;t=0qellubEwrYR9nJeO84vRKbAdxom225hGsHAiQj6a6g)

# Simplifying Web Development with Accessibility Best Practices

> Too often in the world of web development, accessibility is given a low level of priority in the development stage of a site and is often relegated to experts for later implementation. But why spend the time and money hiring an outside consultant when you can set up a website for proper accessibility at the build stage? In this course, Morten Rand-Hendriksen shows the benefits of taking this appro

> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices) | 1h 48m
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Morten Rand-Hendriksen]]

## Table of Contents

### Introduction

#### Simplifying web development with accessibility
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility?u=76281980&t=0)** - [Instructor] Every once in a while, I come across a feature on the web that just isn't working right.
>
> **[0:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility?u=76281980&t=4)** Could be a form that doesn't submit, or a button that doesn't do what it says, or a button that just doesn't do anything at all.
>
> **[0:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility?u=76281980&t=10)** And when I look at the code, I often find that what I'm looking at isn't a button at all.
>
> **[0:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility?u=76281980&t=15)** It's a div with a bunch of JavaScript attached to make it look and work like a button, which got me thinking why would a developer use a div to do what a button element already does?
>
> **[0:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility?u=76281980&t=25)** So I did a bunch of research and soul searching, And the result is this course.
>
> **[0:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility?u=76281980&t=30)** I want to show you how working with the grain of the web actually simplifies your development work and practice.
>
> **[0:37](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility?u=76281980&t=37)** Accessibility best practices can drastically simplify your development practice, and I'm here to show you how to get it right. So let's get cracking.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** while, (1), let (1)
> **Speakers:** - [instructor] (1)


### 1. Back to Basics

#### Overcomplicating things that already work
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=0)** - [Instructor] Watching this course, there's a good chance you'll have quite a few, well, obviously moments where I show you something you already know or something that's plainly obvious to anyone looking.
>
> **[0:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=9)** That's kind of the whole point of this exercise.
>
> **[0:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=11)** Front-end web development is simple at its core, but can easily get complex because there are so many different ways of doing things and so much exploration and innovation and evolution happening all at the same time.
>
> **[0:21](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=21)** So I made this course to help reframe and re-anchor our thinking around how we build things for the web on one core principle: accessibility.
>
> **[0:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=30)** Why?
>
> **[0:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=31)** Because accessibility is the core promise of the web and because developing with accessibility in mind makes development a lot more straightforward and simplified.
>
> **[0:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=39)** This requires an example.
>
> **[0:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=41)** So here's the markup of a button generated by a popular React framework.
>
> **[0:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=45)** This is what we normally call a div button because it's a div that acts like a button.
>
> **[0:50](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=50)** Now thanks to the onclick attribute, this div is clickable and someFunction is triggered when you click it.
>
> **[0:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=56)** But this is not a button and the browser will never recognize this as a button at all.
>
> **[1:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=62)** Hover your mouse over it and the cursor remains a pointer.
>
> **[1:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=65)** Use keyboard navigation and it never gets into focus because this is just a div, and this div is not accessible.
>
> **[1:12](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=72)** To turn the div into a button the browser recognizes as a button, we have to add a ton of extra content, an ARIA label, custom CSS, and other extra features, and even then, it will never properly function as a button.
>
> **[1:26](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=86)** Or we can simply use a button element.
>
> **[1:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=89)** Just set up a button element, call the same function, and suddenly everything works properly.
>
> **[1:34](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=94)** This button element does the exact same thing as the div, except this is a button.
>
> **[1:40](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=100)** It triggers the mouse cursor, it's focusable, it's declared as a button by screen readers, et cetera, et cetera.
>
> **[1:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=106)** I'm not entirely sure why we often overcomplicate things like creating simple buttons by trying to turn divs into buttons, rather than just using the button element, but it is something that's become a bit of a pattern, and yes, this is an oversimplified example.
>
> **[2:01](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=121)** But if you look around on the web, you'll quickly discover many of our habits and examples, and even some best practices, rely on overcomplicating and building up from scratch things that we already have provided from the web platform out of the box.
>
> **[2:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/overcomplicating-things-that-already-work?u=76281980&t=135)** So in this course, we'll go back to basics and figure out how coding with accessibility in mind helps us leverage what the web platform has on offer and simplify our development practice.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2)
> **Env Vars:** aria (1), css (1)
> **Definitions:** is a  (1), is an  (1)
> **Code Identifiers:** somefunction (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### The purpose of the web
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-purpose-of-the-web?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-purpose-of-the-web?u=76281980&t=0)** - [Instructor] The purpose of the web is accessibility, quite literally.
>
> **[0:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-purpose-of-the-web?u=76281980&t=4)** When the web was originally created, it was to make academic documents accessible over the internet.
>
> **[0:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-purpose-of-the-web?u=76281980&t=9)** The core idea was to give anyone with an internet connection to capability of accessing documents and then parse them in a way that fit their environment and their abilities.
>
> **[0:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-purpose-of-the-web?u=76281980&t=18)** HTML has evolved a lot since the early 1990s, but that core premise still remains and has been solidified in the HTML design principles.
>
> **[0:27](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-purpose-of-the-web?u=76281980&t=27)** HTML is a declarative coding language using element tags to describe the contents without saying anything about how that content should be parsed by the user agent.
>
> **[0:37](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-purpose-of-the-web?u=76281980&t=37)** This is a heading level one, this is a main section, this is an unordered list, this is a link, et cetera.
>
> **[0:42](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-purpose-of-the-web?u=76281980&t=42)** And the interpretation of these declarative element tags has been standardized by the W3C, or World Wide Web Consortium, so no matter what browser you use, an H1 tag is always interpreted as a heading level one.
>
> **[0:55](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-purpose-of-the-web?u=76281980&t=55)** This means as long as we use HTML the way it was intended and take advantage of its built in features, we get accessibility out of the box.
>
> **[1:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-purpose-of-the-web?u=76281980&t=63)** It also means it's our job to ensure that accessibility is preserved, because the web is meaningless if it's not accessible

> [!info]- Semantic Content
>
> **Env Vars:** html (4), w3c (1)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** make (1)
> **Documentation:** w3c (1)
> **Speakers:** - [instructor] (1)

#### Why accessibility breaks
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=0)** - [Narrator] The web platform is accessible by design, yet many websites and applications have serious accessibility issues.
>
> **[0:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=6)** When something is not accessible on the web it is because something has gone wrong in its development.
>
> **[0:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=11)** Yes. What I'm saying is, accessibility problems are designed and built in by us.
>
> **[0:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=16)** It's not always a popular opinion and I've had plenty of people disagree with me when I say it, but it's true.
>
> **[0:21](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=21)** If something on the web is not accessible the job isn't done, accessibility is the job.
>
> **[0:27](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=27)** This begs the question, why web accessibility is so complicated and why accessibility issues occur in the first place?
>
> **[0:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=33)** So let me be very clear about this.
>
> **[0:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=35)** I have yet to see a single example of an accessibility issue introduced on purpose with the intent of reducing accessibility.
>
> **[0:42](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=42)** So it's not malice, it's also rarely carelessness because people do care about accessibility.
>
> **[0:47](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=47)** From my experience, it's mostly two things, lack of awareness and problems introduced through iteration.
>
> **[0:55](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=55)** Lack of awareness is an education and information problem, and you're already watching this course, so you're well on your way to reducing the issue on your own.
>
> **[1:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=62)** There's also a general move in the vibe community towards a stronger focus on accessibility.
>
> **[1:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=66)** So over time, I think this will become less of an issue.
>
> **[1:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=69)** This leaves us with problems introduced through iteration and this is where we need to do some work, and where development with accessibility in mind can really help us.
>
> **[1:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=78)** Take our previous button that isn't the button example.
>
> **[1:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=80)** How did we get to a point where it's common practice to build a div, and turn that into a button using JavaScript when we already have a button element?
>
> **[1:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=89)** Here's my hypothesis for how this could have happened.
>
> **[1:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=92)** We have a design for a card with some images and texts.
>
> **[1:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=95)** Now, the easiest way to mark this up is div wrapping around the image and text elements, then the design calls for the card to be an interactive element that opens some model pop-up.
>
> **[1:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=105)** So it's not a link because it doesn't navigate the visitor anywhere and the whole div needs to be clickable, so it doesn't look anything like a button.
>
> **[1:53](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=113)** So the easiest way to solve this problem is to add an onclick event to the wrapping div and add some CSS to make the cursor respond on hover.
>
> **[2:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=120)** And just like that, development iteration has resulted in an entirely inaccessible div button.
>
> **[2:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=126)** That's only usable with a mouse or by touching it with your finger.
>
> **[2:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=130)** So in this scenario, why would we not use a button to begin with?
>
> **[2:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=134)** Probably because buttons don't look anything like what we wanted out of the box.
>
> **[2:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=139)** They look like boring, HTML buttons and require a lot of CSS to reset.
>
> **[2:22](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=142)** We also don't think of a button as a card with an image and text insight, but what I just described is a button and should be marked up as a button.
>
> **[2:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=151)** Here you see an example of how we can accidentally create accessibility problems which result in a lot of work having to be done to fix those problems, when a fully accessible solution already exists.
>
> **[2:42](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=162)** To avoid these types of problems, We need to think with an accessibility mindset from the start.
>
> **[2:48](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=168)** In this example, that means first asking what is the functionality of this card before writing any other code?
>
> **[2:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=174)** Since we know the card is supposed to trigger a pop-up we can conclude a button needs to be added somewhere.
>
> **[3:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=180)** We can then either add an explicit button to the card making it abundantly clear what is happening or we can swap the development for button element and turn the entire card into a button.
>
> **[3:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=191)** Just keep in mind that the button element accepts only of subset of elements known as phrasing contents.
>
> **[3:17](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=197)** So you can't put all other HTML inside.
>
> **[3:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=200)** The image element is a phrasing elements but divs and headings and paragraphs are not.
>
> **[3:26](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/why-accessibility-breaks?u=76281980&t=206)** So if you want to put a bunch of content inside a button you need to get a little bit creative, regardless adding a button instead of using a div and some fancy JavaScript actually gives us everything we need the functionality and the accessibility which is built right in.

> [!info]- Semantic Content
>
> **Env Vars:** css (2), html (2)
> **Definitions:** is a  (2), is an  (1), known as (1)
> **Code Keywords:** let (1), this. (1), require (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)


### 2. Accessible Design

#### Designing an accessible color palette
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=0)** - [Instructor] Accessibility starts with design.
>
> **[0:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=2)** And this is often where accessibility problems and conflicts start appearing as well.
>
> **[0:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=5)** There is a misconception in the design world that accessible design means boring design, that's not the case.
>
> **[0:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=11)** What it does mean is we need to keep certain things in mind when designing, including colorblindness, color contrast, and font size.
>
> **[0:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=19)** Designing an accessible color palette for your project centers on two core principles, ensure there is sufficient color contrast between text and background and between elements that are supposed to contrast one another, and ensure you account for colorblindness in any designs where colors are meant to communicate something.
>
> **[0:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=35)** Contrast first, the WCAG or Web Content Accessibility Guidelines level AA recommend a contrast ratio between background color and text color of a 4.5 for small text, and three for larger texts, meaning bold 18 pixels or above or regular 24 pixels or above.
>
> **[0:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=54)** These contrast numbers are fairly high and they get higher the thinner your font gets.
>
> **[0:58](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=58)** In other words, that trend of thin gray font on a lighter background is simply not accessible.
>
> **[1:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=64)** As you work with your designs, and you're wondering if your font and background colors have sufficient contrast you can use a tool like web aims contrast checker, here you put in the foreground color, so that would be either the text color, or something else that's in the foreground, so I can set it to a gray color, and then you set the background color in this case, white and you can see the contrast ratio here is 7.57 so it's good, and I get a read out on the bottom showing what it would look like, and whether or not these color contrast pass.
>
> **[1:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=92)** Then if I start changing this, I can bring the foreground color down, you'll see as I bring it down, the different levels start failing.
>
> **[1:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=99)** So if you look at these icons here, let's see here, pass, pass, pass, pass, pass.
>
> **[1:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=103)** And then suddenly we start failing, failing, failing and down here towards 2.9, things are no longer accessible.
>
> **[1:50](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=110)** And if you look at the book, you can see this isn't really accessible because it's starting to get hard to read this text.
>
> **[1:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=116)** Now, the cool thing about this tool is going to go in and pick any color, so purple color, and let's see another purple color, let's see what happens.
>
> **[2:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=125)** So here it's really hard to get this to work, yeah, I can never actually pass the triple A level.
>
> **[2:12](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=132)** I can only pass the double A level.
>
> **[2:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=134)** To create an accessible color palette, you can also use a tool like Adobe color which tests for accessibility conflicts.
>
> **[2:21](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=141)** This is also a pretty neat tool, here you select the colors you want, they get put into the color wheel, and then you can see here on the side, potential color conflict, C, D and E are in conflict.
>
> **[2:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=151)** And it's illustrated with this line that you see here.
>
> **[2:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=153)** Now, if I want to fix this, I can grab one of the colors and it shows this visualization of what's happening in the relationship between the colors, so if I let go here, for instance you'll see the line now connects between what is this A and C and you see how that line intersects, so using this tool you can then work through your color palette to find color palettes that are actually accessible.
>
> **[2:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=176)** And there's one more cool feature here.
>
> **[2:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=177)** If you scroll down, you get a colorblind simulator that shows different types of colorblindness and what these colors up here would translate to.
>
> **[3:07](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=187)** Now keep in mind, people who are color blind don't actually see these colors.
>
> **[3:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=190)** So what's happening in a simulator like this is the simulator is trying to illustrate what that person would experience, even though if you're not color blind or can't really actually experience what a color blind person is experiencing.
>
> **[3:23](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=203)** But what you quickly see is that the color contrast between for instance this red here on this orange is very shallow for people with red, green colorblindness.
>
> **[3:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=212)** And you also see that the difference between this orange and this green basically it looks like just two different versions of the same color for someone with red green colorblindness, so this is important.
>
> **[3:42](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=222)** Worldwide about 8% of males are red-green colorblind meaning they cannot distinguish between the colors red and green.
>
> **[3:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=229)** Weirdly in our society, these two colors are commonly used to indicate on off status for interfaces which can cause a lot of problems for people with this type of colorblindness.
>
> **[3:59](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=239)** When creating a color palette, make sure you're not relying on this red, green color difference to indicate the different states of anything.
>
> **[4:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=246)** And any time you use color to indicate state, you should also use words.
>
> **[4:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-an-accessible-color-palette?u=76281980&t=250)** As an example, if you have a toggle indicating on off state then also add the words on off to ensure that even if the colors are not seen, or they're not communicating properly, the status is still accessible.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (8), let (4), this, (2), case. (1), case, (1)
> **Versions:** 4.5 (1), 7.57 (1), 2.9 (1)
> **UI Navigation:** select the (1), scroll down (1), toggle (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1), in other words (1)
> **Analogies:** for instance (2)
> **Env Vars:** wcag (1)
> **Warnings:** keep in mind (1)

#### Designing accessible typography
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=0)** - [Instructor] Most information on the web is text-based.
>
> **[0:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=2)** And creating accessible typography's therefore essential to ensure overall accessibility.
>
> **[0:07](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=7)** What do I mean by accessible typography?
>
> **[0:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=10)** I mean, presenting texts that has enough contrast to the background, is big enough to read, and it's using a font that is easily readable.
>
> **[0:17](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=17)** Here, we're not only considering vision problems but also accessibility concerns around reading difficulties like dyslexia, cognitive impairments, and other factors that affect comprehension and attention span, including stress, lack of sleep and other external and environmental factors.
>
> **[0:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=32)** Think of someone looking up a bus schedule while running towards the bus carrying a crying baby on a sunny day, and you sort of get the idea of what we're looking for here.
>
> **[0:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=41)** Designing accessible typography can be successfully done by following a few basic principles.
>
> **[0:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=46)** Number one. Larger font sizes within reason are preferred.
>
> **[0:51](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=51)** The default font size of a paragraph on the web is 12 pixels, which is very small.
>
> **[0:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=57)** A common upgraded standard is 16, which in my view is still too small.
>
> **[1:01](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=61)** I recommend either 18 pixels or 20 pixels as the default font size.
>
> **[1:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=66)** It's also falls in line with current design trends.
>
> **[1:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=68)** When picking a font size, look at what's comfortable to read on different screens and natural environments.
>
> **[1:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=74)** Open the page on your computer screen at a regular distance and on your phone screen at a regular distance, and so on.
>
> **[1:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=80)** In many cases, the comfortable font size on your phone screen is slightly smaller than that on your computer screen, but it all depends.
>
> **[1:27](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=87)** So you need to actually test it to see what's comfortable.
>
> **[1:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=90)** Number two, avoid complex fonts.
>
> **[1:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=92)** Standard fonts designed for screens are designed for readability.
>
> **[1:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=96)** When you start wading into the waters of custom non-standard fonts, readability tends to go way down.
>
> **[1:42](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=102)** Look for clean and minimalist Serif & Sans Design with clear differences between capitalized and lowercase letters.
>
> **[1:50](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=110)** For readability, it's also a good idea to avoid monospace fonts unless you are sharing code, because code should always be displayed with monospace fonts.
>
> **[1:59](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=119)** Number three. Avoid fancy fonts.
>
> **[2:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=122)** By this, I mean, fonts that use non-standard glyph shapes in an effort to look different.
>
> **[2:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=126)** A good example of this are the popular coding fonts that show different R and S symbols depending on use.
>
> **[2:12](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=132)** These are much harder to read for people like me who have severe dyslexia because the Rs and Ss are very difficult to tell apart.
>
> **[2:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=139)** I really can't see the difference unless I really think about it.
>
> **[2:23](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=143)** These fancy fonts may look cool, but they also increase the cognitive load on the reader significantly and make it very difficult to read and comprehend the text because you're so focused on just figuring out what the actual glyphs mean.
>
> **[2:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=156)** Finally, keep line lengths around 70 characters at most.
>
> **[2:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=161)** This is easily done on mobile devices since the screen isn't big enough for 70 characters, but on large computer screens, it becomes really important.
>
> **[2:50](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=170)** Longer lines are harder to read, and 70 to 80 characters is a commonly agreed upon comfortable line length.
>
> **[2:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=177)** We now have a CSS unit that makes setting the line length very simple.
>
> **[3:01](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=181)** Set the max width of a container to 70CH and you get a container with a width of exactly 70 characters.
>
> **[3:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=188)** So to sum up, large and comfortable fonts with clean and simple type faces.
>
> **[3:12](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=192)** No fancy body fonts, even if they look good.
>
> **[3:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-typography?u=76281980&t=195)** And keep line lengths reasonable.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), finally, (1)
> **CLI Commands:** make (1)
> **Env Vars:** css (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Designing accessible content hierarchies and flows
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=0)** - [Instructor] Almost all websites and applications are designed to communicate some form of information to the visitor and possibly get them to interact with something, maybe a video player, or a form, or a like button or something else.
>
> **[0:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=11)** There's also a good chance there is a lot of information presented to the visitor all at once.
>
> **[0:17](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=17)** A typical website has a header, at least one navigation area, a main content area, a sidebar, and a bunch of semi-related or unrelated content including related information, ads, social media links, et cetera, et cetera.
>
> **[0:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=31)** To ensure the goal of the web page, that communication of information is successful the content hierarchy and flow becomes really important.
>
> **[0:40](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=40)** People who communicate using languages read from left to right, top to bottom have a fairly consistent reading pattern we can design for.
>
> **[0:48](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=48)** They start in the top left and then scan down the page in a sort of diagonal fashion, meaning they'll see the header first, then whatever is to the left and towards the middle and then the middle content.
>
> **[0:59](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=59)** And, finally, the right and bottom content.
>
> **[1:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=62)** For accessibility and for success, our designs should, as much as possible, try to accommodate these patterns.
>
> **[1:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=68)** That means putting more important information towards the top left and less important information towards the bottom right.
>
> **[1:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=75)** When it comes to the main content, people also scan and read content in a specific way.
>
> **[1:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=80)** If an article has headings, or other elements that break the article apart, like images, people tend to scan past the body text and focus on these breaking elements first.
>
> **[1:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=90)** That means for successful communication, the content hierarchy within an article is important.
>
> **[1:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=96)** Headings, subheadings, and sub subheadings visually illustrate the relationship between different parts of the content.
>
> **[1:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=103)** And these also directly impact accessibility for readers using assistive technologies.
>
> **[1:47](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=107)** Screen readers use heading navigation, so the user can skip to a specific heading and read from that point.
>
> **[1:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=114)** Here, the hierarchy of headings becomes vital.
>
> **[1:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=117)** Finally, there's some interesting learned behaviors we need to take into consideration.
>
> **[2:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=122)** Because ads generally sit in the right-hand sidebar people have, over time, developed, what's known as, sidebar blindness.
>
> **[2:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=129)** They simply ignore what's in the right sidebar, even when it's something important.
>
> **[2:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=134)** In other words, anything in that space is likely to be ignored and if you really need a visitor to pay attention to it, you either need to place the information somewhere else in the design, or figure out a way of drawing their attention over to the sidebar and highlight that there's something important there.
>
> **[2:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=151)** The good news is HTML is built with content hierarchies in mind.
>
> **[2:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=156)** From heading levels between one and six to semantic elements like nav, header, main, aside, footer, and so on.
>
> **[2:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/designing-accessible-content-hierarchies-and-flows?u=76281980&t=163)** We can declare the hierarchies of our content in HTML and let the browser figure out how best to communicate that information to the visitor.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), else. (1), for. (1), let (1)
> **Definitions:** is a  (1), known as (1), in other words (1)
> **Env Vars:** html (2)
> **Speakers:** - [instructor] (1)


### 3. Hiding and Showing

#### Is hiding or showing content a good idea?
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=0)** - [Instructor] For the majority of users, the web is primarily a visual medium, and a lot of effort is put into making websites and applications look as good as possible.
>
> **[0:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=8)** That's why we have web design.
>
> **[0:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=11)** Part of this often includes hiding text content from the visual browser.
>
> **[0:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=15)** Classic example, social media buttons.
>
> **[0:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=18)** Having a row of social media buttons instead of a row of text links, saves space, looks nicer and is less intrusive.
>
> **[0:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=25)** So, what happens when we either hide text or omit text altogether in a situation like this?
>
> **[0:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=31)** As long as everything is working properly, everything works fine for the visual user.
>
> **[0:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=36)** For someone using assistive technologies, like screen readers, the experience, now, depends entirely on whether the developer marked up the button for accessibility.
>
> **[0:44](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=44)** The same goes for search engines.
>
> **[0:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=46)** If the button is just an image wrapped in a link without a descriptive text, or alt text, or anything else it's a mystery link without any context and it's unclear where that link goes.
>
> **[0:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=57)** In the case of social media buttons, when we think of the button in terms of accessibility and ease of development, we can find our way to some quick functional solutions.
>
> **[1:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=66)** Make the social media menu a list.
>
> **[1:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=69)** Add the social media icons and accompanying text inside the link in the list item, and use CSS to hide the text from the visual browser.
>
> **[1:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=78)** Now, if someone accesses the site using a screen reader, they'll hear the text read out.
>
> **[1:23](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=83)** While for visual browsers will only show the icon.
>
> **[1:26](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=86)** Let's look at a more complex example.
>
> **[1:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=88)** Say, you have some sort of navigation at the end of an article, maybe to the next article or a related article, or something else.
>
> **[1:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=95)** For the visual user, the separation between the article and this navigation is fairly obvious.
>
> **[1:40](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=100)** But if the visitor is using assistive technologies it may not be that obvious.
>
> **[1:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=105)** To remedy this, we can add a hidden heading inside the navigation telling the user they are switching context from the article to something else, relevant links, or post navigation, or whatever else is going on.
>
> **[1:58](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=118)** This, again, also helps search engines understand what's happening on the page.
>
> **[2:01](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=121)** We are declaring that there is a change in context.
>
> **[2:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=125)** So, as you can see, there are times when hiding content in a browser is necessary.
>
> **[2:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=130)** The question is how to do this in a way that doesn't hinder accessibility?
>
> **[2:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/is-hiding-or-showing-content-a-good-idea?u=76281980&t=134)** That's what we'll explore in the next couple of movies.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), let (1), else. (1), else, (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** css (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### How to hide visual content
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-visual-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-visual-content?u=76281980&t=0)** - [Instructor] The primary scenario for hiding content is hiding content from the visible browser.
>
> **[0:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-visual-content?u=76281980&t=5)** The challenge is to do this while at the same time not hiding it from screen readers.
>
> **[0:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-visual-content?u=76281980&t=9)** The reason this is the challenge is the screen reader tries as much as possible to make an accurate representation of what's on the screen.
>
> **[0:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-visual-content?u=76281980&t=16)** Thus the name screen reader as opposed to document reader or something else.
>
> **[0:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-visual-content?u=76281980&t=20)** And that means when content is hidden in the visual browser it's also hidden from screen readers which is often not what we want.
>
> **[0:27](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-visual-content?u=76281980&t=27)** That means the immediately obvious methods for hiding content from the browser like using CSS to set the display property to none or setting the visibility property to hidden or adding the hidden element attributes to an element.
>
> **[0:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-visual-content?u=76281980&t=39)** They do not work because the content is now also hidden from screen readers.
>
> **[0:44](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-visual-content?u=76281980&t=44)** Other tricks like setting opacity to zero also don't work because now we have content that still takes up space and if you set the width and height of an element to zero the screen reader probably won't read it because it's considered not present on the screen it's trying to read.
>
> **[0:58](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-visual-content?u=76281980&t=58)** The best way around this problem is a rather clever CSS hack.
>
> **[1:01](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-visual-content?u=76281980&t=61)** Create a CSS rule set with an obvious name like screen reader only, or SR only, or screen reader text or something like that and set up what you see here.
>
> **[1:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-visual-content?u=76281980&t=71)** This pile of code says clip the box to one pixel by one pixel and then inset it's path by 50%, effectively making the box zero by zero pixels.
>
> **[1:21](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-visual-content?u=76281980&t=81)** Then set the total width and height to one pixel by one pixel, so it's just a one pixel box, cut off any overflow to avoid surprising behavior then position it absolutely which puts it at the top left-hand corner of either the viewport or the current parent elements.
>
> **[1:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-visual-content?u=76281980&t=96)** And then shift off screen with the negative margin in all directions and you've effectively hidden the content even though it's technically still on the page.
>
> **[1:44](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-visual-content?u=76281980&t=104)** This way the content still exists in the flow but it's tucked away in a place a visual user can't see using CSS.
>
> **[1:52](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-visual-content?u=76281980&t=112)** Now you can apply this SR only class to any element that needs to be hidden from view knowing it's still accessible in the screen reader because it's technically still on the page it's just that it's clipped in such a way that you can't see it.

> [!info]- Semantic Content
>
> **Env Vars:** css (4)
> **CLI Commands:** make (1)
> **Code Keywords:** else. (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### How to hide content from screen readers
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=0)** - [Instructor] From time to time, you'll come across situations where you need to hide content from a screen reader.
>
> **[0:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=4)** Here's an example.
>
> **[0:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=6)** We have a card previewing an article.
>
> **[0:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=8)** The card contains an image, the title of the article, which has a link, a short description, and a link with the text "Read more."
>
> **[0:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=15)** For users of visual browsers, there's a good chance they'll just click on the "Read more" link, even though the title is also a link, because the "Read more" link is an explicit call to action, but they can also click on the title if they're used to doing that.
>
> **[0:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=29)** It'll take them to the same article.
>
> **[0:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=30)** Here's the problem though.
>
> **[0:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=31)** A screen reader user tabbing through this card will encounter two links to the same location.
>
> **[0:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=36)** First the title, and then the "Read more" link.
>
> **[0:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=39)** This is redundant, and if there are many cards, it'll get confusing.
>
> **[0:42](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=42)** Why are there double links to each article?
>
> **[0:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=45)** To get around this problem, we can actively hide one of the links from screen readers.
>
> **[0:50](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=50)** For this, we'll set the aria-hidden attribute to true.
>
> **[0:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=54)** This explicitly tells the screen reader, "Ignore this element and any child elements."
>
> **[0:59](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=59)** Now, that last part is important.
>
> **[1:01](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=61)** Aria-hidden applies to the current element and all child elements, so it has to be applied only to what you don't want read out and nothing else.
>
> **[1:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=70)** The best place to make sure you're only hiding the things you actually intend to hide is to test this using a screen reader.
>
> **[1:17](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=77)** Now, make sure you use this power only for good.
>
> **[1:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=80)** Hiding things from screen readers means screen reader users don't get access to them, and many screen reader users still look at the screen as they're using the screen reader.
>
> **[1:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=90)** This can lead to unexpected behavior, when you see content on the screen that is not being read out, so make sure you're only hiding things that should be hidden, like a redundant or repetitive pattern, like two links pointing at the same place.
>
> **[1:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=103)** And any time you're in doubt as to whether or not to hide something from a screen reader, don't hide it.
>
> **[1:48](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/how-to-hide-content-from-screen-readers?u=76281980&t=108)** Maybe change your design instead.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** this, (1), else. (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 4. Semantics and Interactivity

#### The role of semantic elements
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-role-of-semantic-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-role-of-semantic-elements?u=76281980&t=0)** - [Instructor] With HTML5, the markup language got a much needed semantic updates.
>
> **[0:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-role-of-semantic-elements?u=76281980&t=4)** Before, we pretty much just had a generic div to work with anytime we wanted to wrap and bundle content together, and there was no straightforward way of letting the browser or assistive technologies know what role any of those divs and their content really held.
>
> **[0:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-role-of-semantic-elements?u=76281980&t=19)** Now we have highly semantic elements that clearly state their intent and implicit roles, and we can further extend this communication feature using ARIA.
>
> **[0:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-role-of-semantic-elements?u=76281980&t=28)** Zooming out and looking at a standard web page, we have areas that are distinct from one another and serve distinct semantic purposes.
>
> **[0:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-role-of-semantic-elements?u=76281980&t=35)** There's a header, an advertising banner, a sidebar with some meta content, a main area containing the main article and links to three related articles, a sidebar with other content, and so on and so on.
>
> **[0:47](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-role-of-semantic-elements?u=76281980&t=47)** Using the semantic elements in HTML we can clearly identify each of these areas, and communicate their purpose without adding any extra code.
>
> **[0:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-role-of-semantic-elements?u=76281980&t=56)** The header gets a header element, the ad gets a div because it has no semantic relevance or value, the meta content gets an aside, the main content gets the main, the main article and the related articles gets article elements, and the sidebar gets an aside.
>
> **[1:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-role-of-semantic-elements?u=76281980&t=74)** Each of these semantic elements have implicit roles and landmarks that are automatically picked up by screen readers and other assistive technologies, so that the user can navigate through the landmarks or get the roles declared as they're navigating through the page.
>
> **[1:27](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-role-of-semantic-elements?u=76281980&t=87)** The header has the role, heading, and the landmark, banner, div has no role or landmark unless it's specified using ARIA, aside has the role and landmark, complimentary, main has the role and landmark, main, article has the role, article, but no landmark and footer has the role and landmark, contentinfo.
>
> **[1:47](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-role-of-semantic-elements?u=76281980&t=107)** This means if you use semantic elements in marking up your page, you get automatic landmarks and roles applied adding to the accessibility of the content and making your HTML documents easier to develop and read.
>
> **[1:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-role-of-semantic-elements?u=76281980&t=117)** As a bonus, these roles and landmarks also improve the SEO of your content, since search engines are effectively accessibility users and they map out the content based on these landmarks and roles.

> [!info]- Semantic Content
>
> **Env Vars:** aria (2), html (2), html5 (1), seo (1)
> **Speakers:** - [instructor] (1)

#### Elements with purpose
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=0)** - [Instructor] In addition to structural semantic elements, HTML has a laundry list of elements fit for specific purposes, adding any type of navigation, either a menu, some page navigation, like next or previous page, a slider control, or anything else navigation-wise, wrap it in a <nav> element and it gets the role and landmark navigation.
>
> **[0:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=20)** Need a data table?
>
> **[0:21](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=21)** Use the <table> element and get the benefits of all the table functionality built into the browser and assistive technologies.
>
> **[0:27](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=27)** Need a form?
>
> **[0:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=28)** Use <form> elements.
>
> **[0:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=29)** Need unordered or ordered lists?
>
> **[0:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=32)** Use list elements.
>
> **[0:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=33)** Need a drop-down select or any type of select element?
>
> **[0:37](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=37)** Use a <select> element.
>
> **[0:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=39)** Need a check box, a date picker, a color selector, a password or range selector, or anything else that requires input?
>
> **[0:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=46)** Use an <input> element.
>
> **[0:47](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=47)** Need a button?
>
> **[0:48](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=48)** Use a <button> element.
>
> **[0:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=49)** Need a link?
>
> **[0:50](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=50)** Use the <link> element.
>
> **[0:51](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=51)** I could go on, but I think you see my point here.
>
> **[0:53](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=53)** For almost any type of data or interaction, there is a dedicated HTML element ready to go in.
>
> **[0:58](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=58)** It's built into browser and has accessibility features built right in.
>
> **[1:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=62)** And even for not-so-commonly used features, like a sliding range selector, HTML has that feature built right in.
>
> **[1:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=69)** More often than not, I find that HTML actually provides what I need out of the box, where I thought I'd have to turn to a JavaScript library or a custom-build code to get the job done.
>
> **[1:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=79)** Maybe the most prominent example right now is the date picker, which is now a standard feature in modern browsers and only requires a JavaScript fallback for older browsers.
>
> **[1:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=89)** We'll look at that later on in the course.
>
> **[1:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=91)** The trick here is to always employ that accessibility mindset.
>
> **[1:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=95)** Anytime you want to do something, first identify the purpose of the thing you are developing and see if there is an existing HTML element that already serves that purpose.
>
> **[1:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=105)** If there is, use that element and extend its functionality where necessary instead of building a whole new feature from scratch.
>
> **[1:52](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/elements-with-purpose?u=76281980&t=112)** That way you get all the accessibility benefits and need to write much less code in the process.

> [!info]- Semantic Content
>
> **Env Vars:** html (5)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Link and button basics
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=0)** - [Instructor] HTML has two elements dedicated to direct interactivity as in click or touch or interact with this element and something happens: the anchor tag or link and the button element.
>
> **[0:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=10)** Out of the box, they present quite differently.
>
> **[0:12](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=12)** The link is a string of blue text with an underline and it changes colors depending on the state.
>
> **[0:17](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=17)** The button is a somewhat skeuomorphic button that simulates the appearance of an actual physical button that is being pressed into the page and then pops back up again.
>
> **[0:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=25)** Both links and buttons have various states with corresponding CSS pseudo classes.
>
> **[0:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=30)** We have hover, which is triggered when the user hovers over the element using a pointing device, usually a mouse.
>
> **[0:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=36)** We have active, which triggers any time the item is activated by the user actually clicking or selecting it.
>
> **[0:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=43)** You'll see the active state if you click your mouse and hold the mouse button down.
>
> **[0:47](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=47)** We have focus, meaning the element is currently in focus.
>
> **[0:50](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=50)** That would be, if you tab through the page with your keyboard, something is being focused even if you move your mouse somewhere and the hover state is somewhere else.
>
> **[0:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=57)** And you have focus-visible where the element has focus and should be visually focused.
>
> **[1:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=63)** So it's a slightly different scenario and you can test it in the browser and see how these two differ.
>
> **[1:07](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=67)** In addition, links also have link-specific pseudo classes that describe the link's relationship to what's happening in the browser.
>
> **[1:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=75)** The link pseudo class says this target has not yet been visited, the visited pseudo class says this target has been visited, and a local-link pseudo class says the target of this link is either somewhere inside the current page or is in the same domain.
>
> **[1:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=89)** So this is a link to the local site in some way.
>
> **[1:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=93)** Now because links and buttons look so different, we often choose to use either a link or a button depending on what we want the end result to look like.
>
> **[1:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=101)** That's not necessarily the best strategy because it might introduce unintended problems for our users and add more complexity to the development process because links have specific purposes and buttons have other specific purposes.
>
> **[1:53](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=113)** And if we use them for the wrong things, we're basically using the wrong tool for the wrong job.
>
> **[1:58](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=118)** So how do you decide when to use a link and when to use a button?
>
> **[2:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=122)** Here is a simple flow chart.
>
> **[2:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=123)** Ask this question.
>
> **[2:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=125)** Is it a navigation link taking the visitor to a new location in the document or a new document?
>
> **[2:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=130)** If the answer is yes, it's a link.
>
> **[2:13](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=133)** Is it an interactive element triggering some form of behavior in the existing context like opening a modal, or closing a modal, or sending a form, or toggling a menu, or something similar that doesn't involve navigation in the document, or to in your document, use a button element instead.
>
> **[2:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=149)** Using the right element for the right action gives us the tools and accessibility we need automatically.
>
> **[2:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=155)** A link automatically navigates the browser to the right location.
>
> **[2:38](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=158)** A button has all the tools to trigger browser behavior or a custom JavaScript built right in and ready to go.
>
> **[2:44](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/link-and-button-basics?u=76281980&t=164)** And for screen readers, a link declares itself as a navigation link while a button declares itself as a button.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **Env Vars:** html (1), css (1)
> **Code Keywords:** else. (1)
> **Speakers:** - [instructor] (1)

#### Links
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=0)** - [Instructor] In its most basic configuration, a link is an anchor tag with an href attribute containing the target URL either to a location in the current document or to a new document.
>
> **[0:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=11)** Click the link and the browser navigates to the specified location.
>
> **[0:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=14)** We can further specify the functionality of a link using URL schemes, for example, tel engages the phone capability on a device to call a provided number, if the device supports phone capability.
>
> **[0:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=25)** And mailto engages email capability on the device to start a new email to the provided address, again, if it's supported on the current device.
>
> **[0:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=33)** There are also lesser known and lesser used attributes including download, which is used to trigger a download for whatever file or asset is pointed at in the href attribute as long as it's on the same domain and target which controls in what window the link target is opened.
>
> **[0:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=49)** Now, the target attribute is actually a historical remnant of HTML from when we were using frame sets.
>
> **[0:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=57)** And when you opened multiple different pages in the same view so it's not something we generally use today.
>
> **[1:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=63)** The target attribute has often been used to open a link in a new window, but this is an accessibility anti-pattern because it navigates the user away from the context they're currently in with no clear way of getting back.
>
> **[1:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=74)** So, it's not recommended to do what you're seeing here on the screen, target blank.
>
> **[1:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=78)** Links are blue text with an underline by default.
>
> **[1:21](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=81)** While it's recommended to change the color, and font, and size and all the other visual aspects of the link it's not recommended to remove the underlines unless you have a good reason to, as in the link is sitting inside a box that's a button in a menu or something else.
>
> **[1:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=99)** That underline is an accessibility feature indicating this text is a link so it should always be preserved for text links.
>
> **[1:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=106)** Links are typically used to wrap around a string of text or an element like an image but this is not a limitation in the link element though.
>
> **[1:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=114)** You can wrap a link element around anything you want.
>
> **[1:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=117)** A single element, or a group of elements.
>
> **[2:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=120)** When you do this, though, it will probably be necessary to change to default CSS behavior to avoid all the text being underlined.
>
> **[2:07](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=127)** And you may need to either add extra screen reader content or hide some content from screen readers.
>
> **[2:13](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=133)** We'll look at that scenario a little later on in the course, but the basic thing is anytime you have a link the screen reader will try to read out everything that sits inside the link.
>
> **[2:21](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/links?u=76281980&t=141)** So, if you have a huge element with a ton of text content the link text becomes all the text content within that element, which may not be what you're looking for.

> [!info]- Semantic Content
>
> **Code Keywords:** default. (1), else. (1), this, (1), for. (1)
> **Env Vars:** url (2), html (1), css (1)
> **Definitions:** is an  (3), is a  (1)
> **Best Practices:** recommended (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Buttons
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980&t=0)** - [Instructor] In its most basic form a button on the web does nothing except be present and clickable.
>
> **[0:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980&t=5)** It doesn't have a default behavior because it can be used for many different things.
>
> **[0:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980&t=9)** To get a button, to do something it needs to be hooked to an existing browser or document or element behavior or some custom JavaScript.
>
> **[0:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980&t=16)** Typical uses for buttons include submit and reset buttons and forms, toggle buttons on accessible dropdown menus, navigation buttons inside sliders and carousels, the close button and a modal pop-up and so on.
>
> **[0:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980&t=29)** Buttons exist to be used anytime you need interactivity that doesn't involve navigation.
>
> **[0:34](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980&t=34)** But I often see developers use links instead of buttons in these instances.
>
> **[0:38](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980&t=38)** And when I ask the reason they provide is often that they don't like what a button looks like out of the box.
>
> **[0:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980&t=43)** So to remove this problem altogether here's a full button style reset for you.
>
> **[0:48](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980&t=48)** This block of code removes all default styling from the button except for the focus state and allows you to style it however you choose.
>
> **[0:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980&t=56)** Now, in most cases this full reset is excessive but it does give you a full picture of what user agent styles the browser provides out of the box.
>
> **[1:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980&t=64)** For my own projects I typically create a global default button style for the entire site and then use classes to apply custom styling where necessary.
>
> **[1:13](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980&t=73)** And in most cases, I try to modify the default appearance of a button to fit my style rather than do a full reset because then I have to build everything else up again from scratch which is a lot of work.
>
> **[1:24](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980&t=84)** That works in some cases, but not in all cases.
>
> **[1:27](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980&t=87)** The close button in a modal window, for example, usually requires a full reset and custom styles because otherwise it just doesn't look right in this context.
>
> **[1:37](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980&t=97)** Using a button when you're creating a button type behavior gives you automatic button accessibility and clear separation of concerns between navigation and interactivity.
>
> **[1:47](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980&t=107)** It also excludes the interactive behavior from the list of links on the page.
>
> **[1:51](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/buttons?u=76281980&t=111)** So if an accessibility user scrolls through the links only they don't also get a bunch of interactivity features mixed into that list.

> [!info]- Semantic Content
>
> **UI Navigation:** toggle (1), dropdown (1)
> **Analogies:** picture (1), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Screen reader–friendly links and buttons
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=0)** - [Instructor] Read more links, and close modal buttons, and next and previous buttons, and blocks of texts where we have links inside that sound like I've written more about this topic here, and here, and here, are good examples of when we might want to hide content from visual browsers while providing further context and improve accessibility to people using screen readers.
>
> **[0:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=19)** In a typical new site or blog, there are index pages and components showing snippets of articles with a link guiding the visitor to read the full article.
>
> **[0:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=28)** In the visual browser, those links typically have non-specific text like "read more" or "continue reading", because the design and content hierarchy clearly associate the link with the article snippet.
>
> **[0:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=39)** This is not great for people using screen readers and other accessibility tools, because it produces a long list of links that just say continue reading, continue reading, continue reading, continue reading, continue reading without any further context.
>
> **[0:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=54)** So it's impossible to know what's actually happening here.
>
> **[0:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=56)** You just know there's a bunch of links to more reading of something.
>
> **[1:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=60)** To solve this problem, we can add screen reader text to the links, text that is hidden from visual browsers, but available to screen readers and other accessibility tools.
>
> **[1:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=68)** The most straightforward way of doing this is that screen reader only CSS class that I talked about previously in the course.
>
> **[1:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=75)** We can apply this to any content we want to hide from the visual browser, but make available to screen readers.
>
> **[1:21](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=81)** In practice, it looks like this.
>
> **[1:23](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=83)** You have your continue reading link, and then you set up a span with a class sr-only, and then you put the name of the article or whatever else you're pointing at inside that span.
>
> **[1:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=93)** That way, the visual browser won't see that content, but a screen reader will read out, "Continue reading, pickled cheese is healthy."
>
> **[1:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=101)** This works for both links and for buttons, and it works the exact same way.
>
> **[1:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=105)** Wrap the content you want to hide from visual browsers inside a span, then put on the sr-only class, and it automatically gets hidden from visual browsers, but read out by screen readers.
>
> **[1:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=116)** One note of caution here.
>
> **[1:58](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=118)** When using screen reader only or visually hidden classes like this one, try to place all the screen reader text either before or after the visual text to avoid potential problems.
>
> **[2:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=128)** Sometimes in rare cases, if you have a little bit of screen reader text, and then some regular text, and then more screen reader text, and you just keep interchanging between them, it gets read out in a very strange way by screen readers.
>
> **[2:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/screen-reader-friendly-links-and-buttons?u=76281980&t=140)** So it's better to just bundle all the text either before or after the visible text.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (8), this. (1), class, (1)
> **CLI Commands:** make (1)
> **Env Vars:** css (1)
> **Warnings:** caution (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Icon links and buttons with SVG
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=0)** - There are many situations where we want to display a link or a button using an icon with or without accompanying text.
>
> **[0:07](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=7)** A classic example is a social media link where the standard practice is to display the icon of the social network rather than spell out, follow me on the social network in text.
>
> **[0:17](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=17)** For both links and buttons, the first step here is to use SVG for the icon.
>
> **[0:22](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=22)** There are a myriad of reasons for using SVG's including, they are a native graphics format to the web platform, they're stylable using CSS and you can make SVGs accessible.
>
> **[0:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=32)** There are also good reasons not to use alternative methods like icon fonts including the fact, they are fonts and therefore texts and screen readers will try to read them out.
>
> **[0:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=41)** And that icon fonts are non-standard approach to something we have a standard for, namely SVGs.
>
> **[0:47](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=47)** Let's look at a couple of examples.
>
> **[0:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=49)** First, an icon on its own without any visible text.
>
> **[0:52](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=52)** Since we're linking to an external resource, we'll use a link here.
>
> **[0:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=56)** Here, the aria-label attribute on the link defines what the screen reader will read out.
>
> **[1:01](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=61)** Now, this solution does not actively spell out the word, LinkedIn anywhere in the element.
>
> **[1:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=66)** So, if CSS fails and the icon is not displayed for some reason, the visitor will get no meaningful content which is not great but that's a fairly edged case scenario.
>
> **[1:17](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=77)** So, this is a workable solution you may want to use.
>
> **[1:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=80)** An alternative is to use a visually-hidden-class to hide the text inside the element.
>
> **[1:26](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=86)** Now we have actual texts in the element that's being hidden using CSS.
>
> **[1:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=90)** And if we wanted to later display the text or display it in some other scenario, we can just take away that visually-hidden class.
>
> **[1:37](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=97)** And we get an icon individual browser, go to the social network and screen readers and go to the social network if no CSS is available.
>
> **[1:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=105)** Both of these approaches work well for buttons and links with icons.
>
> **[1:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=109)** But what if we're in a scenario where we want to hide some extra screen reader texts from the visual browser?
>
> **[1:55](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=115)** Let's say, there's a "print this page" button somewhere on a page.
>
> **[2:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=120)** And we want to have a display, an icon for a printer and then print this page in the visual browser and the read out print and then the name of the page in the screen reader so the screen reader user actually knows what they're going to print.
>
> **[2:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=134)** In that scenario we can mix different approaches.
>
> **[2:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=136)** So, here we first have the word "print".
>
> **[2:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=138)** Then we have a span wrapping around the words, "this page" and this piece of text is hidden using aria-hidden-true, meaning the words "this page" will be displayed in visual browsers, but will not be read out by screen readers.
>
> **[2:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=151)** Then below we have the span of the class visually hidden and here we have the name of the article.
>
> **[2:37](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=157)** As a result the screen reader will read out "print pickled cheese recipes" while visual browsers will display the text, "print this page".
>
> **[2:44](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/icon-links-and-buttons-with-svg?u=76281980&t=164)** That way we're serving all user scenarios and giving the user the correct information for their context.

> [!info]- Semantic Content
>
> **Env Vars:** css (4), svg (2)
> **Code Keywords:** let (2), for, (1), class. (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - there (1)


### 5. Images, Graphics, and Media

#### Images, graphics, and media basics
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980&t=0)** - [Instructor] Visual media plays a central role on the web.
>
> **[0:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980&t=2)** And the web platform has a myriad of tools to make handling and communication of images, graphics, video, and audio both functional and accessible.
>
> **[0:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980&t=10)** The key is to take full advantage of what's provided by the platform and extend that functionality where necessary.
>
> **[0:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980&t=16)** Web-based media fall into two main categories: static assets, that'd be images and graphics, and dynamic assets, so video and audio.
>
> **[0:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980&t=25)** For static assets, we can break that category down further based on the purpose of the media element.
>
> **[0:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980&t=30)** Is it being displayed for information?
>
> **[0:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980&t=32)** Or is it an event trigger or navigation link?
>
> **[0:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980&t=35)** Or is it decoration?
>
> **[0:37](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980&t=37)** Defining the purpose of the assets becomes important when choosing how to mark them up and how to leverage the platform most effectively.
>
> **[0:44](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980&t=44)** For dynamic elements, we can mostly assume the purpose of the media is some form of information sharing with the rare exception of a purely visual, auto-play video playing in the background, which is something I strongly advise against for accessibility and performance reasons.
>
> **[1:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980&t=60)** If and when an audio or video asset contains any information, we have to think beyond the media asset itself to how to convey that information, even when the media asset is not being played or is not accessible.
>
> **[1:12](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980&t=72)** Meaning we should always provide complete verbatim, plain text transcripts.
>
> **[1:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980&t=78)** There are three good reasons for this.
>
> **[1:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980&t=80)** First, transcripts make the information accessible to anyone able to access text via visual browsers, visual screen readers, or text-to-speech browsers.
>
> **[1:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980&t=90)** And that includes people who prefer to read rather than watch or listen to content.
>
> **[1:34](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980&t=94)** Second, transcripts make the information searchable, copyable, and to a degree, translatable through auto-translation.
>
> **[1:42](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/images-graphics-and-media-basics?u=76281980&t=102)** And third, transcripts make the information indexable by search engines in a way that video files and audio files never can.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Keywords:** static (2), this. (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### The img element
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=0)** - [Instructor] The img element is an inline replaced element used to display a supportive image file within a container.
>
> **[0:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=6)** It has two required attributes; source which holds a URI to the image file location and alt which holds the alternative text provided if the image is not displayed.
>
> **[0:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=16)** It also has a series of optional attributes, including width and height to tell the browser of the proportions of the image before it's loaded, source set and sizes to provide the browser with responsive images options and loading for native lazy loading.
>
> **[0:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=30)** A good rule of thumb when using the image element is to always define the source, alt, width and height attributes and also take advantage of source set and sizes anytime you're working with large images.
>
> **[0:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=41)** It's also standard practice to declare a Global CSS reset for the image element.
>
> **[0:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=46)** Display block width 100% and height auto.
>
> **[0:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=49)** Now there is a more modern CSS remedy which displays the image element in a way many developers believe browsers should display images.
>
> **[0:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=57)** I tend to use the first one, but the remedy is gaining more traction and has some really good ideas behind it.
>
> **[1:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=63)** So you might want to shift towards that and see how that works for you.
>
> **[1:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=66)** Both of these resets make all images, responsive, block level elements out of the box so they can be further styled later in the style sheet.
>
> **[1:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=74)** The image element also accepts a title attributes though it's not recommended for use and here's why.
>
> **[1:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=80)** The title attribute usually appears as a tool tip if you hover over the image with your mouse or your cursor but you can't assume anyone will ever see it.
>
> **[1:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=89)** So while it's not technically wrong to use an title attribute on an image, in almost every case it's pointless information will never be seen by anyone and has no purpose.
>
> **[1:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=99)** Images are a great example of our accessibility techniques can both simplify development and introduce other benefits.
>
> **[1:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=105)** All image elements require the alt attribute to be defined.
>
> **[1:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=109)** This attribute provides a text description of the image when the image is not displayed.
>
> **[1:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=114)** That means when a search engine crawls your site it will index to all text and associated with your image and your site.
>
> **[2:01](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=121)** So for example, if I was a realtor in Burnaby, Canada, and I put up a picture of myself in front of my Realty office, I would put the old text, Burnaby Canada realtor, Martin, Ron Hendrickson at his office.
>
> **[2:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=135)** And then anyone who searches for Burnaby realtor or Burnaby Canada realtor would see my picture because that's what it is, is describing the picture and it's indexed as such.
>
> **[2:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=145)** Now this is not an invitation to exploits the alt attribute for SEO though, quite the opposite.
>
> **[2:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=151)** It's an opportunity to provide further context for your content and make that content easier to find.
>
> **[2:37](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=157)** When marking up an image, you often wonder what should I put in that alt text field?
>
> **[2:42](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=162)** Here's the alt decision tree from the W3C.
>
> **[2:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=166)** And it'll walk you through a process of figuring out what that is.
>
> **[2:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=169)** The basic process is.
>
> **[2:50](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=170)** Does the image contain text?
>
> **[2:52](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=172)** If so that textured probably go in the alt text field because the text has some meaning that needs to be conveyed.
>
> **[2:59](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=179)** There are some sub cases you need to read through here but that's the basic rule.
>
> **[3:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=183)** If it doesn't contain texts, then the next question is, is the image a link or a button?
>
> **[3:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=186)** If so the alt attributes should communicate the destination of the link or the action taken.
>
> **[3:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=191)** So when someone sees that there is an interactive element inside the image, they'll be told what happens when they click on that element.
>
> **[3:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=198)** If that's not the case then does the image contribute meaning to the current page or context.
>
> **[3:23](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=203)** So basically if the image has some form of information or is trying to convey information that is not described elsewhere, then put the description of the image in the alt text.
>
> **[3:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=213)** And finally, if the images for purely decorative uses, is just there as effectively clutter on the page, then leave the alt attribute empty.
>
> **[3:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=223)** There are also some edge cases here for example, if you have an image that's already described in a fig caption, so there's already a description of the image, then there's no point in regurgitating that same information because the user of a screen reader would then just get the same description twice.
>
> **[3:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=237)** But this alt decision tree goes through all of these different scenarios and will tell you quite clearly what you should use in any situation.
>
> **[4:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=245)** So I actually recommend printing this out and putting it next to your workstation.
>
> **[4:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=249)** So anytime you're wondering, what should the alt text be in this circumstance?
>
> **[4:12](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=252)** You have an alt text decision tree to help you guide your way.
>
> **[4:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=256)** And here's something really interesting.
>
> **[4:17](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=257)** If you have an image and there's actual content in the alt attribute, you can change the aria role of the image depending on what the function of that image is.
>
> **[4:27](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=267)** You can change the image from just an image to a button or a checkbox or a link or a menu item, or a bunch of other options.
>
> **[4:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=273)** There's a full list of this on MDN.
>
> **[4:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=276)** Just remember, changing the aria role of an image element, results in the screen reader declaring the image based on that new definition.
>
> **[4:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=283)** So instead of saying image, it would say button or checkbox or menu item or something else which gives you a lot more power to communicate with screen readers, even though you're still using an image.
>
> **[4:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=294)** What you see here is that an image on the web can perform a variety of different functions beyond just being an image which is why I said is important to define the purpose of the image before you add it.
>
> **[5:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-img-element?u=76281980&t=306)** Always use the accessibility mindset when you populate concept on the web 'cause it will help you build better content.

> [!info]- Semantic Content
>
> **Env Vars:** css (2), uri (1), seo (1), w3c (1), mdn (1)
> **Analogies:** picture (3), for example (2)
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** require (1), finally, (1), function (1)
> **UI Navigation:** checkbox (2), click on (1)
> **Definitions:** is an  (2), is a  (1)
> **Documentation:** w3c (1), mdn (1)
> **Best Practices:** rule of thumb (1), recommended (1)

#### The figure and figcaption elements
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-figure-and-figcaption-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-figure-and-figcaption-elements?u=76281980&t=0)** - [Instructor] In many cases, you'll have one or more images that include a caption describing or otherwise contextualizing the visuals.
>
> **[0:07](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-figure-and-figcaption-elements?u=76281980&t=7)** For this scenario, we have two dedicated elements: figure and figcaption.
>
> **[0:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-figure-and-figcaption-elements?u=76281980&t=11)** The figure element wraps around one or more image elements and can contain an optional figcaption element.
>
> **[0:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-figure-and-figcaption-elements?u=76281980&t=18)** In screen readers, it's declared as a figure followed by whatever images and captions it contains.
>
> **[0:24](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-figure-and-figcaption-elements?u=76281980&t=24)** The purpose of the figure and figcaption elements is to associate the caption with the images, otherwise it would be an image and then a separate text block and there's no clear connection between them.
>
> **[0:34](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-figure-and-figcaption-elements?u=76281980&t=34)** But using figure and figcaption, there is a clear connection because they belong together as a whole.
>
> **[0:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-figure-and-figcaption-elements?u=76281980&t=39)** The figcaption can contain any other HTML element including links, headings, and so on.
>
> **[0:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-figure-and-figcaption-elements?u=76281980&t=45)** This means if you have an image and some associated texts and you want them to be wrapped inside a container, the best option is probably to use a figure element.
>
> **[0:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-figure-and-figcaption-elements?u=76281980&t=54)** The great thing about the figure element is its versatility.
>
> **[0:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-figure-and-figcaption-elements?u=76281980&t=57)** If you have an image and it needs a wrapper, use a figure, because that's what it's for.
>
> **[1:01](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-figure-and-figcaption-elements?u=76281980&t=61)** If you have an image that needs a caption, use a figure and figcaption, because that's what they're for.
>
> **[1:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-figure-and-figcaption-elements?u=76281980&t=66)** If you have a group of images belonging together, maybe with a caption describing all the images or just the group of images belonging in a single block, use a figure, because that's what it's for.
>
> **[1:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-figure-and-figcaption-elements?u=76281980&t=76)** The figure element doesn't impulse any type of styling or other features on the images or caption inside with the exception of ample margin around the figure element.
>
> **[1:26](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-figure-and-figcaption-elements?u=76281980&t=86)** So in most cases, I reset the figure element with a global rule set like this.
>
> **[1:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/the-figure-and-figcaption-elements?u=76281980&t=90)** Figure, margin zero, and that way the figure is just a regular block element that I can work with like any other block element.

> [!info]- Semantic Content
>
> **Code Keywords:** for. (3), this. (1)
> **Env Vars:** html (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Accessible SVG
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessible-svg?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessible-svg?u=76281980&t=0)** - [Instructor] Anytime you have a vector graphic you want to add to your website or app, you probably want to use an SVG because of its many benefits including scalability, performance, CSS styling, et cetera.
>
> **[0:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessible-svg?u=76281980&t=10)** If the SVG is just an image and functions like an image, you can display it using an image element and add all text for non-visual browsers and a figcaption inside a figure if necessary.
>
> **[0:21](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessible-svg?u=76281980&t=21)** But the main advantage of an SVG is it's a native HTML element, so it doesn't have to be wrapped inside an image or figure.
>
> **[0:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessible-svg?u=76281980&t=29)** It can be a first level citizen of the document itself.
>
> **[0:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessible-svg?u=76281980&t=33)** When we use SVGs, we can extend their functionality by leveraging their accessibility features, effectively adding descriptive text into the SVG document itself.
>
> **[0:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessible-svg?u=76281980&t=43)** Because an SVG is a standalone web document which can be embedded into an HTML document, the SVG can contain its own title and description elements.
>
> **[0:52](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessible-svg?u=76281980&t=52)** We can then use the aria-describedby attribute to direct screen readers and other assistive technologies to pull out these text elements and read them.
>
> **[1:01](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessible-svg?u=76281980&t=61)** Here's an example of that.
>
> **[1:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessible-svg?u=76281980&t=62)** So we have a standard SVG, then inside the SVG declaration we have aria-labelledby, followed by a list of IDs, so icontitle and icondesc.
>
> **[1:12](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessible-svg?u=76281980&t=72)** These points add the ID for the title element and the description element, and when a screen reader comes to this SVG, it will say, "Oh, the SVG is described by these elements.
>
> **[1:23](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessible-svg?u=76281980&t=83)** I'll just read out what's in these elements."
>
> **[1:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessible-svg?u=76281980&t=85)** And that way we have a fully accessible graphic that is completely self-contained.
>
> **[1:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessible-svg?u=76281980&t=90)** The accessibility experts at Deque did a ton of testing on accessible SVGs and came up with a bunch of different examples for different scenarios and what they sound like using different assistive technologies.
>
> **[1:42](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessible-svg?u=76281980&t=102)** This article is well worth a look if you're in need of special results.
>
> **[1:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessible-svg?u=76281980&t=106)** If you don't want to read the entire article, that example I provided here gives you the best overall coverage of all screen readers and a fully accessible SVG.

> [!info]- Semantic Content
>
> **Env Vars:** svg (11), html (2), css (1)
> **Code Keywords:** self (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Making embedded videos more accessible
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=0)** - [Teacher] More and more content on the web comes in the form of either video or audio or both.
>
> **[0:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=4)** This type of content is usually embedded from a dedicated service like YouTube and this embedding introduces some tricky problems for performance, usability and accessibility perspectives.
>
> **[0:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=15)** The embed, an iFrame, will load even when the visitor never actually watches the video.
>
> **[0:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=20)** So that's a performance issue.
>
> **[0:22](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=22)** The embed slows down rendering of the page and can introduce errors.
>
> **[0:26](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=26)** Again, a performance and usability issue.
>
> **[0:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=28)** And because the embed is an iFrame, if a visitor navigates using a keyboard they may get trapped inside the iFrame and have a hard time exiting back into the main page even if they have no interest in the video.
>
> **[0:40](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=40)** In the case of a YouTube video, for example, they have to navigate through all the different controls inside the YouTube video before getting back into the regular page.
>
> **[0:47](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=47)** And this is a serious accessibility issue.
>
> **[0:50](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=50)** One of the ways to get around these problems is the surprisingly obvious solution of not loading the embedded media unless the visitor actively interacts with it.
>
> **[0:59](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=59)** Now this can be done with some clever manipulation of the iFrame code.
>
> **[1:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=62)** Let me show you what that looks like.
>
> **[1:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=64)** So here I've embedded a YouTube video.
>
> **[1:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=66)** Looks like an embedded YouTube video, and I can click the play button.
>
> **[1:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=70)** And when I click the play button, the iFrame is actually loaded into the browser.
>
> **[1:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=75)** That means when I reload this page here, what you're looking at right now is just a button.
>
> **[1:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=79)** There is a single button here and nothing else.
>
> **[1:21](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=81)** So if I tap through this, I would tap into the button and then out into the rest of the content.
>
> **[1:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=85)** There's no video being played here at all.
>
> **[1:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=88)** The video only plays when I click the arrow here and then the iFrame gets loaded in and you can see I can now navigate inside the iFrame.
>
> **[1:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=96)** So here I see I have all the controls.
>
> **[1:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=99)** The idea here is as simple as it is novel.
>
> **[1:42](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=102)** Inside this iFrame, I load an image with a button on top of it.
>
> **[1:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=106)** Then if and when that button is clicked, I go and load the embedded content, which is the video in this case, could be audio, could be something else.
>
> **[1:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=114)** This is possible thanks to the srcdoc iFrame attribute which defines the content of the iFrame.
>
> **[2:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=122)** Let's look at the code to see what's actually happening here.
>
> **[2:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=124)** So we have a standard iFrame setup with a width and a height and the source of the iFrame itself.
>
> **[2:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=130)** Nothing new here.
>
> **[2:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=131)** Then we have this srcdoc attribute.
>
> **[2:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=134)** And inside the srcdoc attribute, I've actually set up an entire webpage.
>
> **[2:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=138)** So we have some inline styling.
>
> **[2:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=140)** This just defines what the page is going to look like.
>
> **[2:24](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=144)** There's a link.
>
> **[2:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=145)** In the link we're pointing out the embed and setting it to autoplay.
>
> **[2:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=148)** Then there's an image that displays the YouTube preview window.
>
> **[2:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=152)** Then there's an image that displays the YouTube thumbnail.
>
> **[2:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=155)** There's an alt attribute that describes the video.
>
> **[2:38](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=158)** And then at the bottom here there's a span that has this weird piece of code here which just creates that little play arrow that you see.
>
> **[2:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=165)** So what's happening here is when this iFrame loads, all we're loading up is this custom document that was built inside the srcdoc here.
>
> **[2:52](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=172)** So that's what you're seeing here.
>
> **[2:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=174)** There's an image with a play button on top and it's all wrapped inside a link, which is why you can see wherever I move my mouse we have the clickable icon.
>
> **[3:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=182)** Then when the link is clicked, we navigate to the actual content which is the embedded YouTube video.
>
> **[3:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=188)** And that's why when I click it, the YouTube video plays.
>
> **[3:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=191)** The reason it plays is because autoplay is set to equal one.
>
> **[3:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=195)** So this works in all browsers and it's extremely efficient because we're now not loading the entire YouTube video we're just loading a picture with a button on top, and the functionality is the same as it would be if we loaded the entire YouTube video.
>
> **[3:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=209)** So how do you use this in your code?
>
> **[3:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=211)** Well, you can simply copy this code as it is and then just replace the IDs for the videos.
>
> **[3:37](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=217)** So you can see it repeats a couple of times here.
>
> **[3:40](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=220)** That ID comes from YouTube itself.
>
> **[3:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=221)** So you go and find the YouTube video you want and just copy the ID.
>
> **[3:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=225)** In this case, this one right here, and just paste it in these three locations, then change the alt text and change the title, which is down here.
>
> **[3:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=234)** And that's all you need to do.
>
> **[3:55](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=235)** Now you have a fully functioning accessible alternative to loading up a YouTube video.
>
> **[4:01](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=241)** One warning, though, this approach does require you to not use the embed code from YouTube.
>
> **[4:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=246)** Because if you go to YouTube and go down to share, you can get an embed code right here, but the code that I just showed you is not this embed code at all.
>
> **[4:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=254)** So you need to use that custom code I showed you.
>
> **[4:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/making-embedded-videos-more-accessible?u=76281980&t=256)** It was just right here and you can find it in the code snippets for this course.

> [!info]- Semantic Content
>
> **Code Identifiers:** iframe (13)
> **Code Keywords:** let (2), else. (2), case, (2), this, (1), require (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (2)
> **UI Navigation:** navigate to (1), go to (1)
> **Analogies:** for example (1), picture (1)
> **Prerequisites:** setup (1), set up (1)
> **Warnings:** warning (1)

#### Adding transcripts
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=0)** - [Narrator] If a webpage contains an audio or video file with information, it should also contain a full transcript.
>
> **[0:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=6)** As I said at the top of the chapter, the three main reasons for this, transcripts make the information available to anyone able to access text, transcripts make the information searchable, copyable and to a degree translatable and transcripts make the information indexable on search engines.
>
> **[0:22](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=22)** This brings up two immediate questions.
>
> **[0:24](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=24)** How do I create a transcript?
>
> **[0:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=25)** And how do I add it to a page without the transcript taking up the entire page?
>
> **[0:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=30)** Both of these questions become more pressing the longer and more expansive the media is.
>
> **[0:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=35)** The proper answer to the first question is every video and audio files should have a transcript written by a professional service and a human being.
>
> **[0:42](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=42)** That sounds expensive but it's getting cheaper by the day.
>
> **[0:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=45)** And more and more services are using some form of hybrid model with voice recognition software and then human editors at the end.
>
> **[0:53](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=53)** Transcription is a cost of doing business and it's well worth the money for all the reasons I listed before.
>
> **[0:59](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=59)** If you don't have the resources or time to get a professional transcription done there are services that use voice recognition to generate automatic transcriptions.
>
> **[1:07](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=67)** They are let's call it okay for whatever the reason they have a very hard time understanding me.
>
> **[1:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=74)** So the auto transcripts generated from videos where I talk are often very funny and not very helpful.
>
> **[1:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=79)** You can go check out my videos on YouTube and you'll see what I'm talking about.
>
> **[1:22](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=82)** So if you go with the auto transcription option prepared to spend a lot of time and maybe money fixing the transcripts manually before you publish them.
>
> **[1:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=90)** Whichever way you choose once you have a transcript you need to add it to your page as texts.
>
> **[1:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=96)** So it becomes searchable, indexable and part of the page.
>
> **[1:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=99)** In some cases, posting the transcript in full on the page makes sense, in others it may be necessary to partially hide it from the viewer or place it somewhere where they can independently scroll it.
>
> **[1:50](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=110)** This is especially true if the transcript is very long and accompanies an article or other information, the visitor should have access to which honestly is in most cases I've set up two different examples on how you can try to solve this problems.
>
> **[2:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=124)** And the first example, we just placed the transcript in a separate box that has a fixed height and set the overflow to auto, that way we get a scrollable box that can be placed anywhere on the page.
>
> **[2:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=134)** Usually next to the video that is independent of the rest of the contents, we can scroll the content on the page and the transcript independently.
>
> **[2:21](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=141)** And yet everything is indexed by search engines.
>
> **[2:24](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=144)** Everything is searchable.
>
> **[2:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=145)** You're able to copy and paste and do everything you want with this text.
>
> **[2:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=148)** The second option is a bit more advanced.
>
> **[2:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=151)** Here we use some JavaScript and CSS to hide or show the transcript.
>
> **[2:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=156)** So when you load this page, you get the video then you get the transcript but the transcript is sort of faded at the bottom.
>
> **[2:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=163)** And then when you click expand transcript to get the entire transcript.
>
> **[2:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=166)** This is a fairly straightforward process.
>
> **[2:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=169)** It's powered by some basic Java script.
>
> **[2:51](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=171)** We grab a button and adds a functionality to it.
>
> **[2:53](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=173)** So here you can see when we click the button then two things happen.
>
> **[2:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=176)** First is we're changing the text of the button.
>
> **[2:59](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=179)** It says expand transcript but then it'll change the club's transcript and back again.
>
> **[3:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=183)** And the second is we toggled the class collapse.
>
> **[3:07](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=187)** The collapsed class either sets a fixed height and adds this fade on the top or sets the height so auto and allows the transcript to take up the entire space.
>
> **[3:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=196)** So it's a really basic approach to this.
>
> **[3:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=198)** And we've done that in such a way that if JavaScript does not work for some reason the box never collapses.
>
> **[3:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=205)** So you see at the top here it says transcripts class lists add collapse.
>
> **[3:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=209)** That means when the page loads, the box is not collapsed then JavaScript loads and collapses the box.
>
> **[3:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=215)** So if something goes wrong you get the full transcript and it's all visible and accessible to the user out of the box.
>
> **[3:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/adding-transcripts?u=76281980&t=221)** That way we're progressively enhancing this accessibility feature rather than creating a situation where a user may come in and then not be able to access something because JavaScript is not working.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** this, (1), let (1), this. (1)
> **Definitions:** is a  (3)
> **Env Vars:** css (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)


### 6. Practical Examples

#### Mobile-friendly navigation menu
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=0)** - [Instructor] Let's see if we can put some of all this theory into practice.
>
> **[0:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=3)** In this chapter, I'll give you some practical examples of how you can simplify development using accessibility best practices.
>
> **[0:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=9)** These examples are prototypical and their purpose is to give you a starting point from which to build your own features once you're done with the course.
>
> **[0:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=16)** In other words, feel free to copy the examples, paste them into your own projects and expand them to fit your needs and don't trust that these are 100% perfect, they are a starting points.
>
> **[0:26](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=26)** The first example is the classic mobile navigation menu often also referred to as a hamburger menu.
>
> **[0:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=32)** There is a button with the navigation icon typically three horizontal lines that look kind of like a hamburger and when you click on that button, navigation menu appears you can then click on any of the navigation items and if it click anywhere outside or you click on the button again, the navigation menu collapses.
>
> **[0:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=49)** Our challenge is just to find the simplest way of marking up this menu, while at the same time ensuring it's accessible using keyboard navigation and a screen reader.
>
> **[0:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=57)** First there's a nav element containing the navigation.
>
> **[1:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=60)** We use the nav element because as I explained earlier, this is a navigation.
>
> **[1:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=65)** It has the navigation role in landmark, and it's announced as navigation two screen readers.
>
> **[1:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=70)** Inside that nav, we need a button to open and close the menu.
>
> **[1:13](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=73)** So we add a button element and yes this is not a link is not pointing anywhere, it is a button.
>
> **[1:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=80)** This element contains an SVG icon and some texts wrapped in a screen reader only class.
>
> **[1:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=85)** That way we see the icon in the browser and screen readers will read out the text main menu, or in this case, maybe it should say open main menu or something like that.
>
> **[1:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=95)** Well, it'll say main menu and then maybe it will change a JavaScript later.
>
> **[1:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=99)** Then we get the actual menu.
>
> **[1:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=101)** This is just an unordered list, with list items and links inside them.
>
> **[1:44](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=104)** So this is the standard menu you always built.
>
> **[1:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=106)** From here, we can then apply some basic CSS to make the menu button and the menu as a whole look and feel the way we want to and everything should work fine for the visual browser.
>
> **[1:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=117)** Click the button, menu appears.
>
> **[1:59](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=119)** But what about keyboard navigation and accessibility?
>
> **[2:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=122)** For that, we turn to a combination of JavaScript and CSS.
>
> **[2:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=125)** I've created a class called hide which sets the display property of whatever element is applied to none.
>
> **[2:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=131)** That hides the menu from the browser and the screen readers.
>
> **[2:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=134)** In JavaScript, I first find the navigation menu and then I apply the hide class.
>
> **[2:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=139)** That means when you open the page, the menu is actually open and then one JavaScript kicks in, the menu closes.
>
> **[2:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=145)** That way, it'll always be available even if JavaScript is not working.
>
> **[2:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=148)** At the same time down here, if we set the initial state for the button.
>
> **[2:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=152)** So you'll remember in the button, the text says Main menu.
>
> **[2:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=156)** Now we can use JavaScript to extend that by adding an aria label and the aria labels says, Open news menu.
>
> **[2:42](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=162)** That way, if you come in with a screen reader it'll actually read out, Open news menu rather than just say, menu button.
>
> **[2:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=169)** We also add the aria expanded false attribute to it so that it'll notify a screen reader.
>
> **[2:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=174)** The button is toggling something and that something is currently closed.
>
> **[2:59](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=179)** Then we add an event listener to the button and listen for the click.
>
> **[3:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=183)** When the click appears, we first get the aria attributes, so the aria-expanded attribute, we are just we'll be either true or false and this will tell us whether the button is currently open or closed.
>
> **[3:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=194)** Then we trigger the toggle menu function and pass up the current status, so open or closed up to this function here the function says, if the status is false meaning the menu is currently closed, then go in and find the menu, remove the hide class that means open the menu, then change the trigger attribute to say, true.
>
> **[3:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=215)** So the menu is open and change the text of the button to say, Close news menu so that when you top up to the button you can close the menu and then if that's not the case, meaning the money was currently open, we just do the reverse.
>
> **[3:47](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=227)** Add the class, hide, then set aria-expanded to false and set the aria label to, Open news menu.
>
> **[3:53](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=233)** Finally, at the very bottom we have some functionality to monitor two things.
>
> **[3:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=236)** One is if the user navigates with the tab key and exits the menu, in that case, we'll close the menu.
>
> **[4:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=244)** The other one is, if the user clicks anywhere except in the navigation menu, let me also close the menu.
>
> **[4:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=249)** So let's take a look at what that looks like in the browser.
>
> **[4:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=251)** This time using keyboard navigation instead.
>
> **[4:13](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=253)** So reload the page and then I'll hit the Tab key.
>
> **[4:17](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=257)** You can see the button highlights, then I'll hit the Space Bar that opens the menu and now I can Tab through the menu, Shift + Tab to go back.
>
> **[4:27](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=267)** If I click on the menu button again, it closest to menu as expected and if I tab out of the menu, so it's Tab, Tab, Tab, Tab, menu closes.
>
> **[4:37](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=277)** Tab again, open and then if I click somewhere with my mouse menu closes, so that works.
>
> **[4:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=283)** Now one final thing, let's see what happens if we use a screen reader here.
>
> **[4:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=286)** So I'll toggle on screen reader and Chrome
>
> **[4:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=289)** - [Screen Reader] Mobile nav tab, mobile nav, address and search bar 127.0.0.0.1:5,500/mobile/index.html.
>
> **[5:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=302)** - [Instructor] So first, I'll tab to the menu button.
>
> **[5:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=304)** - [Screen Reader] Open news menu, button collapsed.
>
> **[5:07](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=307)** - [Instructor] Open news menu button collapsed.
>
> **[5:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=309)** Then I'll trigger the menu.
>
> **[5:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=311)** - [Screen Reader] Close -news menu, button expanded.
>
> **[5:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=314)** - [Instructor] So now, it's telling me if I click again, I'll close the newsman menu and the button is expanded.
>
> **[5:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=318)** So here you hear both the aria text and the aria expanded attributes are being read out by the screen reader.
>
> **[5:24](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=324)** Then I can go through the menu.
>
> **[5:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=325)** - [Screen Reader] List with four items, home, news, about, contact.
>
> **[5:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=331)** - [Instructor] And if I go back up again.
>
> **[5:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=332)** - [Screen Reader] Close, news, menu.
>
> **[5:34](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=334)** Open, news, menu.
>
> **[5:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/mobile-friendly-navigation-menu?u=76281980&t=335)** - [Instructor] And now I have a fully accessible menu that tells me what's going on if I'm using a screen reader allows me to navigate using the tab key or navigate using my mouse.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (3), function (3), class. (2), pass (1)
> **Speakers:** - [instructor] (6), - [screen (5)
> **UI Navigation:** click on (4), open the (2), toggle (2)
> **CLI Commands:** find (3), make (1)
> **Definitions:** is a  (3), in other words (1)
> **Env Vars:** css (2), svg (1)
> **Versions:** 127.0.0 (1), 0.1 (1)
> **File Paths:** 500/mobile/index.html (1)

#### Multilevel navigation menu
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=0)** - [Instructor] Expanding on that mobile menu example, we can now build out a more advanced multi-level or dropdown navigation menu using the same button trigger modality.
>
> **[0:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=9)** Here's what it looks like in the browser.
>
> **[0:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=11)** I can hover over any one of these menu items.
>
> **[0:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=14)** If I click on one of the ones that has a down-pointing chevron, it opens a dropdown menu.
>
> **[0:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=18)** Click anywhere else, that dropdown closes, same with the other one, dropdown closes.
>
> **[0:23](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=23)** I can also tab through this.
>
> **[0:24](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=24)** And if you look, I'll say, if I hit the Tab key once, I get to skip navigation.
>
> **[0:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=29)** That's because this is a fairly large menu and I might want to give people the option of just not going through the navigation menu.
>
> **[0:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=36)** So, Skip navigation, we'll just skip past the navigation and into the main content.
>
> **[0:40](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=40)** If I keep tabing, I get through the Home button, then to the News button, here I can open the News tab through it.
>
> **[0:47](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=47)** When I go to the end of the news list and tab again, the News list automatically collapses, we go through About, then we're going to go to Another and Contact and then go back and say no, I want to open Another, go through these items, we'll go back.
>
> **[1:01](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=61)** Let me see this works as you would expect with keyboard navigation.
>
> **[1:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=65)** Let's listen to this page to see what's actually happening here using a screen reader as well before we continue.
>
> **[1:12](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=72)** So, I'm at the top of the page and I'll hit Tab once.
>
> **[1:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=75)** - [Screen Reader] Skip navigation, internal link.
>
> **[1:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=79)** - [Instructor] So this is a link, because it allows me to navigate somewhere else in the document that is past the navigation.
>
> **[1:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=85)** I've used a screen reader class and some other fancy stuff to just hide this when it's not in focus.
>
> **[1:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=89)** That's why you're only seeing it when I focus on it.
>
> **[1:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=92)** - [Screen Reader] List with five items, home.
>
> **[1:34](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=94)** - [Instructor] So now we're at the Home link and this is a link that points me to the homepage.
>
> **[1:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=99)** Then I hit Tab again and listen closely.
>
> **[1:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=101)** - [Screen Reader] List item, Open news menu, button collapsed.
>
> **[1:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=106)** - [Instructor] So this news item is a button, it's not a link.
>
> **[1:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=109)** And that's what we saw in the previous example as well.
>
> **[1:51](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=111)** We're using a button to trigger the opening and closing.
>
> **[1:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=114)** This here is different from the classic way of building these types of menus.
>
> **[1:58](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=118)** The common approach is to have a top level menu item that is a link and that have that via clickable link leading to a new page and then the sub menu items are related links.
>
> **[2:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=128)** However, this approach was created when we only cared about mouse hover states, and it doesn't really work well with touchscreens or keyboard navigation.
>
> **[2:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=136)** In a touchscreen scenario, for example, clicking on a link leads to the navigation even if what we wanted to do was open a sub menu.
>
> **[2:23](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=143)** So a solution that has been introduced then is to turn that little chevron on the side here into a separate button.
>
> **[2:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=150)** So you have the news link and then you have a button inside that points down to open the menu but this creates a really clunky user interface.
>
> **[2:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=159)** So it's actually better to force the mouse user to make an extra click than it is to force everyone else to suffer through things not working properly, which is why this is a button.
>
> **[2:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=169)** - [Screen Reader] Close news menu, button expanded.
>
> **[2:52](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=172)** - [Instructor] So now I can click through the menu.
>
> **[2:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=174)** - [Screen Reader] List, local news, space news, about.
>
> **[2:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=177)** - [Instructor] And now the menu closes again.
>
> **[2:59](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=179)** So if I skip back to the news items now.
>
> **[3:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=182)** - [Screen Reader] List item, open news menu, button collapsed.
>
> **[3:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=186)** - [Instructor] So again you here that the system is automatically updating the status of the news.
>
> **[3:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=189)** So we always know what's happening with each one of these items.
>
> **[3:13](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=193)** Let me turn the screen reader off and now we look at the code.
>
> **[3:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=195)** - [Screen Reader] Extensions tab.
>
> **[3:17](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=197)** - [Instructor] Looking at them mark up here, you'll see this is pretty much the same as what we had in the previous example, is just a bigger menu.
>
> **[3:23](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=203)** And instead of having not the very top in the nav section, we have buttons inside these sub items.
>
> **[3:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=208)** So here we have a list item that has a sub menu, has a class, has sub menu, it starts with a button for news, then it has to unordered list with all the list items and so on.
>
> **[3:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=219)** So of course we could expand this even further by also adding the mobile navigation on top.
>
> **[3:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=223)** I just didn't want to clutter this too much to make it too hard to figure out what's going on.
>
> **[3:47](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=227)** The overall functionality is the same as it was in the previous example.
>
> **[3:51](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=231)** We're using this hide class to hide content, but here since we may have multiple different drop-down menus, I'm using a, forEach loop to go through each of the sub menu items and then applying the hide class.
>
> **[4:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=243)** It also means if JavaScript is not working, when the menu opens, it'll open with all the drop-downs visible.
>
> **[4:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=249)** Now, of course I could build extra CSS for that eventuality.
>
> **[4:13](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=253)** So if there is no JavaScript, you don't get dropped on menus that cover content, but instead the menu would just be reconfigured to fit that scenario.
>
> **[4:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=260)** But that's a little bit outside of scope of what we're looking at.
>
> **[4:22](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=262)** Once we've hidden the menu item, I then need to find all of the menu triggers so that I can add functionality to each of the menu triggers in turn.
>
> **[4:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=270)** Then for each of the trigger buttons, we add the down arrow that's that little chevron on the right hand side we set the area attributes and we add an event listener to listen for the click or tab to events.
>
> **[4:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=281)** That toggles the toggle menu functionality and here we pass in both the parent.
>
> **[4:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=286)** So that would be the current sub menu we are in and the status of the menu up here in toggle menu we're doing the same thing we did in the previous movie, we grab, we figure out where we are.
>
> **[4:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=297)** So what unordered list we're currently sitting in, then we check the status of the current list is it open or closed and then we set the class and the attributes appropriately for the status we're currently in.
>
> **[5:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=308)** At the very bottom of the script, you'll again, find these two functions that just listen to see if the focus slips out of the unordered list meaning we're tabbing passed on ordered list and then that case, the whole menu closes or if we click anywhere outside the navigation menu, also, if that happens, then the navigation closes.
>
> **[5:26](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=326)** It's a really straightforward example and it just expands on what we've already covered in the previous movie.
>
> **[5:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/multilevel-navigation-menu?u=76281980&t=331)** The end result is we now have a fully accessible dropdown menu using links for links and buttons for buttons and this works across mouse users, touch screen users, keyboard users, visual users, and screen reader users and everyone is able to access all the content at all times.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (8), - [screen (7)
> **UI Navigation:** dropdown (5), open the (2), go to (2), toggle (2), click on (1)
> **Code Keywords:** let (3), else, (1), this. (1), continue (1), interface (1)
> **Definitions:** is a  (6)
> **CLI Commands:** make (2), find (2)
> **Code Identifiers:** foreach (1)
> **Env Vars:** css (1)
> **Analogies:** for example (1)

#### Basic card
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=0)** - [Instructor] Cards, so boxes with an image and some text and often a button or a link or something else have become a staple of websites and applications.
>
> **[0:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=8)** They're easy to design, easy to understand and allow us to create teasers for more content or cards that people can sift through and they just look good and encourage engagement.
>
> **[0:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=19)** Unfortunately, cards are also a significant accessibility challenge.
>
> **[0:23](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=23)** Let me explain.
>
> **[0:24](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=24)** Here I have three different documents with cards and they look exactly the same and seem to function exactly the same if you use a mouse.
>
> **[0:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=31)** So this is the first one.
>
> **[0:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=32)** Hover over it.
>
> **[0:34](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=34)** You can see there's a hover state here.
>
> **[0:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=36)** When I click on it, I would navigate somewhere.
>
> **[0:38](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=38)** Here's a second one.
>
> **[0:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=39)** Hover over it.
>
> **[0:40](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=40)** There's a click state and if I click it and navigate somewhere and a third one, hover over.
>
> **[0:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=45)** There's some form of click state and click on it and it goes somewhere.
>
> **[0:48](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=48)** Okay, so what's the difference here?
>
> **[0:50](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=50)** Well, let's turn on our screen reader and find out.
>
> **[0:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=54)** - [Narrator] Chrome card with link wrap tab.
>
> **[0:58](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=58)** First card, once upon a time there was a card.
>
> **[1:01](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=61)** The card had two friends.
>
> **[1:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=63)** List with three items.
>
> **[1:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=64)** First car, once upon a time there was a card.
>
> **[1:07](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=67)** The card had two friends.
>
> **[1:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=68)** Internal link list item.
>
> **[1:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=70)** - [Instructor] So in this first example, there's a link wrapping around the entire card.
>
> **[1:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=74)** So what happens now is the browser will read out all the contents within the card and in this case, it's just the title and a short description but it could be a lot longer.
>
> **[1:22](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=82)** And what you're hearing is all of that content is considered the link.
>
> **[1:26](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=86)** So if I tab to the next item here.
>
> **[1:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=88)** - [Narrator] The middle card.
>
> **[1:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=89)** The middle card always wanted to be in the middle of the pack.
>
> **[1:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=91)** Internal link list item.
>
> **[1:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=93)** The last card in the group.
>
> **[1:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=95)** The last card was always last, even when the text direction was set to RTL.
>
> **[1:40](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=100)** Internal link list item.
>
> **[1:42](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=102)** - [Instructor] What you're hearing here is that we've created a very cumbersome navigation process for an accessibility user.
>
> **[1:48](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=108)** They know that there are links here but you have to go through all of this text content to get to the link, which is really annoying and requires a lot of time and effort.
>
> **[1:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=117)** Although this looks good and functions and you're able to get to it, it's not ideal.
>
> **[2:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=123)** So how do we solve this?
>
> **[2:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=124)** Let's take a look at the code of the first cade.
>
> **[2:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=126)** So here we have one of the cards.
>
> **[2:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=128)** There's a list item.
>
> **[2:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=129)** Inside the little item, there's a link and then inside the link is all the contents.
>
> **[2:13](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=133)** So the image, the h2 and the paragraph.
>
> **[2:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=136)** So this is the code that is causing the problem we're seeing right now.
>
> **[2:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=139)** So how can we fix this problem?
>
> **[2:22](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=142)** Well, we already know that we have things like screen reader-only text and aria-hidden true, so maybe we can use that. So if we go into the same card and say okay, we have the image and the image doesn't have an alt attribute because there's something else here already explaining what is happening if you click on the image.
>
> **[2:38](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=158)** There's no reason to duplicate that information.
>
> **[2:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=161)** Then we have the h2 and here we have the name of the card.
>
> **[2:44](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=164)** So first card.
>
> **[2:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=165)** And then we can use a screen reader-only class here to wrap around text saying continue reading.
>
> **[2:51](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=171)** So the idea then is when you come to the card, it'll say first card, continue reading and then we use aria-hidden true to hide that card description at the bottom.
>
> **[3:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=180)** So let's listen to what that is like in the browser.
>
> **[3:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=183)** I'll turn my screen reader back on.
>
> **[3:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=185)** - [Narrator] Spoken feedback is ready.
>
> **[3:07](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=187)** Hard with hidden text.
>
> **[3:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=188)** First card, continue reading.
>
> **[3:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=190)** Internal link.
>
> **[3:12](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=192)** - [Instructor] Okay, so now it just says first card, continue reading, internal link.
>
> **[3:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=195)** - [Narrator] The middle card, continue reading.
>
> **[3:17](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=197)** Internal link list item.
>
> **[3:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=199)** The last card in the group, continue reading.
>
> **[3:22](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=202)** Internal link list item.
>
> **[3:24](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=204)** - [Instructor] So now we've eliminated that description at the bottom, the middle card always wanted to be in the middle, and all that stuff.
>
> **[3:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=210)** So we have less content in the link.
>
> **[3:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=212)** Now, this in itself is a bit of an accessibility problem because we now display text on the page that isn't being communicated to the screen reader user but it's possible to justify it simply because we are now reducing the content of the link.
>
> **[3:47](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=227)** However, this is still not ideal for precisely that reason.
>
> **[3:51](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=231)** There is now content on the page the screen reader user has no access to.
>
> **[3:55](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=235)** So I think we can take this one step further and fix the problem in a more graceful way.
>
> **[3:59](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=239)** Let's look at this example here.
>
> **[4:01](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=241)** So it's the same code, except I've moved the link.
>
> **[4:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=245)** So the link used to be directly after the list item and wrap around the image to h2 and the paragraph.
>
> **[4:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=250)** Now I've moved the link in.
>
> **[4:12](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=252)** So it's only wrapping around the title itself.
>
> **[4:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=255)** So here we have first card, continue reading.
>
> **[4:17](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=257)** That means I no longer need that aria-hidden true because there's no risk of the content being read out as part of the link.
>
> **[4:23](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=263)** Instead, if the user is just reading the page from top to bottom, they'll get all the content.
>
> **[4:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=268)** But if they just tab through the links, they'll only get the links and that's only the headings.
>
> **[4:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=273)** So what does that look like?
>
> **[4:34](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=274)** So now that the link is only wrapping around the headings, we get a much easier read out and it's also much clearer what's going on here.
>
> **[4:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=281)** - [Narrator] List item, first card continue reading.
>
> **[4:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=285)** Internal link heading two.
>
> **[4:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=286)** List item, the middle card continue reading.
>
> **[4:50](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=290)** Internal link, heading two, list item.
>
> **[4:53](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=293)** The last card in the group, continue reading.
>
> **[4:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=296)** Internal link, heading two.
>
> **[4:58](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=298)** - [Instructor] All right, so at this point, we've solved the accessibly problems for screen reader users and people who use keyboard navigation because now it's crystal clear what's happening.
>
> **[5:07](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=307)** We are going into the card and then only clicking on the link and only getting the link read out.
>
> **[5:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=311)** So I can turn off my screen reader.
>
> **[5:13](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=313)** The problem is now we've also introduced a bit of a problem of users who use a mouse or touchscreen because the only clickable part of this card is the actual link.
>
> **[5:24](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=324)** Now, this is interesting because you could say that only the link should be clickable and it's easy to make some CSS that makes it so when you hover inside the card, you could clearly see oh, there's one item here that's suddenly got an underline, so that must be the thing I click.
>
> **[5:38](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=338)** And chances are users will very quickly figure out this pattern and just click on the title.
>
> **[5:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=343)** But it's not exactly the right solution.
>
> **[5:47](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=347)** It's not as easy to use as these other examples where you can just click anywhere in the card and you get where you want to go.
>
> **[5:52](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=352)** So how do we solve this problem?
>
> **[5:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=354)** Well, there's a bit of a CSS hack we can use here.
>
> **[5:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=357)** It's clever.
>
> **[5:58](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=358)** We go and grab the anchor, so the link and then we say let's anchor after and then position the after element absolutely to the top left and set its width and height to 100%, display the block and content to nothing.
>
> **[6:12](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=372)** So what happens now is we get an entire box of nothing that sits on top of the entire card and effectively just extends the link.
>
> **[6:22](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=382)** So that means if I hover my mouse over it now, let's see, I'll reload it, I need to save to save.
>
> **[6:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=388)** And then reload and you can see now I hover over and I'm actually clicking on the link down here but I'm hovering over the entire card.
>
> **[6:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=395)** There's a drawback to this though.
>
> **[6:37](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=397)** I can no longer highlight the text because I'm now hovering onto that after element that sits on top as an invisible layer and it's blocking access to the text.
>
> **[6:47](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=407)** So we have to make some concessions here.
>
> **[6:50](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=410)** Either really good navigation for accessibility users or being able to highlight text with your mouse.
>
> **[6:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=417)** It's tricky.
>
> **[6:58](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=418)** You can fix all this with JavaScript too by making some really complicated stuff in the background but what you're seeing is when we try to make cards that do perfect things for everyone, we will run into issues where we have to trade a solution for one group for another group.
>
> **[7:13](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=433)** And the best solution is always one that serves all users the best.
>
> **[7:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=438)** So it might be that the card with the hidden text where we have full access to all the content and we can click on things and everything is the best option.
>
> **[7:26](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=446)** Or it might be that you need to go to the card with internal link.
>
> **[7:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=449)** Now, if you go to the next movie, we'll talk about some other solutions that may solve this entire problem by just approaching it in a different way.
>
> **[7:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/basic-card?u=76281980&t=455)** But here you have some options to choose from.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (10), let (7), function (1), case, (1), extends (1)
> **Speakers:** - [instructor] (6), - [narrator] (5)
> **UI Navigation:** click on (5), go to (2)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** css (2), rtl (1)
> **Definitions:** is a  (1)

#### Card with internal links
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=0)** - [Instructor] In the previous example, we looked at a simple card that had an image, a heading, and some texts.
>
> **[0:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=5)** And the idea is that you would collect on the entire card or just a heading to get to where you want to go.
>
> **[0:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=9)** But in many cases we have cards that have multiple different links or links and buttons or other interactive elements.
>
> **[0:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=16)** And we may need to give the user options on what to click on.
>
> **[0:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=20)** In those circumstances everything that I said in the past kind of falls to the wayside because we are now no longer working with a card where the expectation is, you can just click anywhere to go somewhere.
>
> **[0:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=29)** The card behavior is more nuanced.
>
> **[0:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=31)** And I think this is probably the direction you want to go.
>
> **[0:34](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=34)** In most cases with cards.
>
> **[0:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=35)** Give people a clear indication of what to click on and they will click on that.
>
> **[0:40](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=40)** So let's look at these examples.
>
> **[0:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=41)** Here we have three cards that have category information in addition to the title.
>
> **[0:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=46)** So to ensure that the user understands, hey, there's several different things to click on here.
>
> **[0:52](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=52)** We have to use some standard practice and we can also add some functionality to it.
>
> **[0:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=56)** So right now we have the news an interesting category in the first card and they're underline indicating that this is clickable text.
>
> **[1:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=63)** If you use your mouse, you can click on them.
>
> **[1:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=66)** You also see when I hover my mouse into the card the underline comes in under the first card as well indicating this is also a clickable text, depending on how you want to approach it, it may actually be a good idea to have that underline there, to begin with.
>
> **[1:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=78)** So it's not an interactive element.
>
> **[1:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=80)** And then instead, have the hover state do something else like add a drop shadow to the card so it kind of pops out when you're interacting with it.
>
> **[1:26](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=86)** But you want to make sure that the user understands which parts of the card are clickable.
>
> **[1:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=92)** The best way to figure that out is to actually do user testing.
>
> **[1:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=95)** Maybe print it out on a piece of paper and ask people to touch it or test it in the browser and see what people click on.
>
> **[1:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=101)** Now, if you look at the card at the end of the chain here I've done something else just to ensure that the user fully understands what they are expected to do.
>
> **[1:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=109)** At the bottom I've added a link that says read more.
>
> **[1:52](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=112)** And if you click on the read more link, you go to the same article you would get to if you click on the title.
>
> **[1:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=117)** Now, if you remember all the way back to the beginning of the course, I talked about this exact scenario where you have a card that has two links pointing at the same place.
>
> **[2:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=126)** And you know already know what to do.
>
> **[2:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=128)** You need to hide one of these two links from screen readers.
>
> **[2:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=131)** And that would be the read more link because it's redundant information that the screen reader will always have access to anyway.
>
> **[2:17](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=137)** All right, let's listen to this page using the screen reader.
>
> **[2:22](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=142)** - [Woman] Chrome VOC, mobile NAV tab.
>
> **[2:26](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=146)** News interesting first card read more once upon a time there was a card.
>
> **[2:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=150)** Alert, news, internal link.
>
> **[2:34](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=154)** Mobile NAV news alert news interesting first card, read more one list with three items list item list with two items.
>
> **[2:44](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=164)** News internal link list item.
>
> **[2:47](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=167)** - [Instructor] Okay. So what you heard there was, list with three items, that's all three cards, then list with two items that's the current internal navigation and the first item is news.
>
> **[2:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=177)** Then the next item is interesting.
>
> **[2:58](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=178)** - [Woman] Interesting, internal link list item.
>
> **[3:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=182)** First card read more internal link heading two.
>
> **[3:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=185)** - [Instructor] And here we have first card read more.
>
> **[3:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=188)** Now you can see there's nothing that says read more here in the card.
>
> **[3:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=191)** That doesn't matter.
>
> **[3:12](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=192)** That's because we've put in screen reader only texts from our previous example.
>
> **[3:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=196)** So this is just an extension of our previous example.
>
> **[3:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=199)** Now let's see what happens when I tab over to the last card, the one that has this read more link at bottom.
>
> **[3:24](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=204)** - [Woman] The term, the last card in the group read more.
>
> **[3:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=208)** Internal link, heading two, view site information button.
>
> **[3:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=212)** The last card in the group, read more internal link.
>
> **[3:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=216)** - [Instructor] So you can see when I'm on the title of the last card, the last card in the group, and I hit Tab I navigate outside the card and into the rest of the content of the page.
>
> **[3:44](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=224)** I never actually get to the read more button.
>
> **[3:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=226)** But because the screen reader text says, the last card in the group read more, the screen reader user will see, oh all the information I just heard is on the page so I'm not missing any information, we're not technically hiding anything because the words are still being read out.
>
> **[4:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=242)** But even so we're not forcing the screen reader user to go to a second link that points to the same location.
>
> **[4:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=248)** And that's kind of the whole point here.
>
> **[4:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=249)** We have to really think about the user's actions in the cards.
>
> **[4:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=254)** What they're going to do, how they want to get to places and how we can easily lead them where they want to go.
>
> **[4:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/card-with-internal-links?u=76281980&t=259)** And that includes combining many different scenarios to create this navigation that works exactly the way we intend to.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (8), go to (2)
> **Speakers:** - [instructor] (4), - [woman] (3)
> **Code Keywords:** let (3)
> **Env Vars:** nav (2), voc (1)
> **CLI Commands:** make (1)

#### Date picker
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=0)** - [Instructor] Date pickers are a common feature in websites and apps that is notoriously difficult to build and make accessible.
>
> **[0:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=6)** Actually, let me amend that statement.
>
> **[0:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=9)** Date pickers used to be notoriously difficult to build and make accessible.
>
> **[0:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=14)** Watch this.
>
> **[0:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=15)** Here we're in Firefox and we have a date picker that's set to the current date.
>
> **[0:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=18)** I can click on the current dates.
>
> **[0:21](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=21)** I get a date picker.
>
> **[0:22](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=22)** I can pick another date.
>
> **[0:23](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=23)** So if I say April 15, the end date here changes.
>
> **[0:27](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=27)** And if I click on that, you'll see I can't pick any date before April 16th.
>
> **[0:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=31)** And then I can just pick whatever date I want.
>
> **[0:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=33)** And I have now filled it out.
>
> **[0:34](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=34)** Now this date pickers fully accessible.
>
> **[0:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=36)** So here I can use my arrow keys to navigate through and pick whatever date I want.
>
> **[0:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=41)** I can also type in something 18, for example and I get the date I want.
>
> **[0:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=45)** So we have a fully accessible date picker in the site.
>
> **[0:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=49)** Right. Let's switch over to Chrome and take a look.
>
> **[0:51](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=51)** Same date. I can do the same thing here.
>
> **[0:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=54)** Pick a date, pick another date.
>
> **[0:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=56)** And again, this is fully accessible.
>
> **[0:58](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=58)** So if I use my arrow keys here, or I type in a number, I am able to gain access to exactly the same types of features and I can get control over this.
>
> **[1:07](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=67)** And it also reads out properly in screen readers.
>
> **[1:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=70)** Switch to Edge, and again, it's the same functionality.
>
> **[1:12](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=72)** We have a date picker, pick a date.
>
> **[1:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=74)** Everything is working as expected and it's fully accessible.
>
> **[1:17](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=77)** Now let's take a look at the backend of this.
>
> **[1:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=79)** Here we have the HTML for what you just saw.
>
> **[1:22](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=82)** It's an input field with the type set to date and that's what gives us a date picker.
>
> **[1:26](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=86)** That's really all there is to it because this date picker is now built into the web platform.
>
> **[1:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=91)** And there's a good reason for this.
>
> **[1:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=92)** As I mentioned, date pickers have become very popular on the web platform.
>
> **[1:37](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=97)** And different people are using them in very different ways and there are always accessibility issues around them.
>
> **[1:42](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=102)** Now, the thing is mobile devices like cell phones, tablets, and so on already have date picker functionality built in because so many different apps are already using date pickers.
>
> **[1:53](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=113)** And you need to make sure that that experience is consistent and accessible for mobile device users.
>
> **[1:59](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=119)** So the inputs type date field, hooks into whatever dates picker feature is built into the browser and those date picker features have now been migrated into desktop browsers as well.
>
> **[2:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=131)** As a result, when you use this field instead of designing your own date picker, you're using whatever natural and native date picker for the current browser in use.
>
> **[2:21](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=141)** You're leveraging all the functionality of the web without doing any of the work.
>
> **[2:26](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=146)** Now the input type date field can take some extra properties.
>
> **[2:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=150)** We have a value attribute that allows us to set the start value for the dates.
>
> **[2:34](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=154)** You're going to see here, 18,07,22, as what's displayed.
>
> **[2:38](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=158)** You have a min value.
>
> **[2:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=159)** The min value says you can pick any date after this date.
>
> **[2:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=163)** And then the max value says you can pick any date before this date.
>
> **[2:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=166)** So then you have complete control and that's what's happening in my example here.
>
> **[2:50](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=170)** There's some JavaScript that says, check what data set in the start date fields and then restrict the picker for the end date to any date after that date.
>
> **[3:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=180)** So since I picked the 14th, the first available date is the 15th.
>
> **[3:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=184)** And this is all done using JavaScript just feeding back into those date fields.
>
> **[3:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=188)** There is one challenge though and that is older browsers do not support this feature.
>
> **[3:13](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=193)** The good news is older browsers will still display the date field.
>
> **[3:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=196)** They just won't pop open an actual date picker.
>
> **[3:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=199)** So the user will still get a fully accessible date field where they can type in year, month, date or date month, year or whatever language standard you're using but they won't get that visual date picker they can click around it.
>
> **[3:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=211)** However, you can extend this functionality and say, hey browser, if you don't support a date picker, here's some JavaScript that you can use to display a date picker anyway.
>
> **[3:42](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=222)** So you can safely use this today in all your projects and leverage the web platform.
>
> **[3:47](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=227)** And if you need to support all the browsers you can use an additional shim for those browsers and say, if there's lack of support then use this library instead.
>
> **[3:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=236)** That gives you all the power and all the accessibility you need.
>
> **[3:59](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=239)** And you're still serving a proper user experience for older browsers as well.
>
> **[4:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=244)** And those older browsers I'm talking about in this circumstance are relatively old browsers with very little actual usage.
>
> **[4:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=251)** So this is entirely safe to use and it drives home the point I've been talking about through the entire course.
>
> **[4:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=256)** The web platform very often provides exactly the tools we need, but we've gotten so used to building our own custom solutions that we're not aware that the web platform does what we need out of the box.
>
> **[4:27](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=267)** And using the web platform tools we get much more accessible code.
>
> **[4:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=270)** And as you can see it's also way easier to work with.
>
> **[4:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=273)** The most complicated part of this example is the JavaScript.
>
> **[4:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=276)** And the only reason it's complicated is because these min and max date fields take year, year, year, dash month, month dash date, date, field and I need to convert the dates, numbers into those fields.
>
> **[4:50](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=290)** Which is what all this code is about, is just converting a field to a different type of output so that it can be put into the main fields.
>
> **[4:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=297)** That's all there is.
>
> **[4:58](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=298)** And if you follow the code, you'll see it's really straightforward.
>
> **[5:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/date-picker?u=76281980&t=300)** It's just passing the same values back and forth into those fields to get everything to work.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (4), let (3), switch (2)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (2), switch to (1)
> **Env Vars:** html (1)
> **Tools:** firefox (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 7. Proof and Pudding

#### Simplifying web development with accessibility best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility-best-practices?u=76281980&t=0)** - [Instructor] The purpose of this course is to show you how incorporating accessibility best practices can help simplify web development.
>
> **[0:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility-best-practices?u=76281980&t=6)** What I hope you see by now, is in many cases, working with the grain of the web platform by using an extending existing functionality, not only ensures your creations are accessible, but also simplifies the building and maintenance of your websites and the web applications.
>
> **[0:21](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility-best-practices?u=76281980&t=21)** This idea of using an extending platform features, rather than building things from scratch, has become especially important with the popularity of JavaScript front-end frameworks like React and Vue and Svelte and Angular et cetera.
>
> **[0:34](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility-best-practices?u=76281980&t=34)** All these frameworks are component-based, and when we build custom components, with custom functionality, it's easy to forget that the web platform, already has a huge library of components, aka HTML elements that can do a lot of what we want out of the box.
>
> **[0:51](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility-best-practices?u=76281980&t=51)** As you saw with a date picker example, it's always a good idea, to check if the web platform, already gives you what you need out of the box, and all you need to do is style it or add backwards compatibility, that way you don't end up reinventing the wheel, and create a solution that may have serious accessibility issues, when a solution already exists out of the box.
>
> **[1:13](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility-best-practices?u=76281980&t=73)** The best way to start this process is to ask three key questions, any time you add a new element, or start building a component.
>
> **[1:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility-best-practices?u=76281980&t=80)** Number one, is there an existing element that does what I need?
>
> **[1:24](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility-best-practices?u=76281980&t=84)** Number two, can I extend an existing element to do what I need?
>
> **[1:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility-best-practices?u=76281980&t=88)** And number three, can I use existing elements as part of my new component?
>
> **[1:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility-best-practices?u=76281980&t=93)** I've seen countless examples of framework components where devs are turned into headings or lists or links or buttons or other features and CSS and JavaScript has been added on top to make those devs do what the existing elements are already doing.
>
> **[1:48](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility-best-practices?u=76281980&t=108)** And as I explained, in the beginning of the course we don't do this because we're ignorant or lazy or have bad intentions, we do it because our iterative process, makes us forget what the platform already does for us.
>
> **[2:01](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/simplifying-web-development-with-accessibility-best-practices?u=76281980&t=121)** So always, always, always, check if there is an existing element that does what you need, or whether you can extend an existing element to do what you need, or whether you can use existing elements like buttons, like date pickers, like other things, in your components before you build something entirely from scratch, it'll save you a lot of time and improve accessibility in the process.

> [!info]- Semantic Content
>
> **Env Vars:** html (1), css (1)
> **CLI Commands:** make (1)
> **Cross-References:** as you saw (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Where to find more information
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=0)** - [Narrator] Watching all this, you're probably wondering where do I find more information and how do I verify that information is accurate?
>
> **[0:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=6)** 'Cause there's a lot of information about web development on the web.
>
> **[0:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=9)** A lot of it is outdated and a lot of it is based on outdated information.
>
> **[0:13](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=13)** So even though it's recently published, it may still be old and inaccurate to what we can currently do.
>
> **[0:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=19)** The answer is to go directly to official sources and also turn to authoritative sources, which just opens the another question.
>
> **[0:27](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=27)** How do I know what the official sources are and how do I know which sources are authoritative?
>
> **[0:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=31)** Whenever I'm working on anything, including examples for courses like this one, I always cross reference my own knowledge and new information with official documentation and sources I know to be reliable for this scope and concept.
>
> **[0:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=43)** So accessibility focused development, there are few key resources worth turning to, first off the MDN Web Docs, which pretty much are the official documentation for the web, for HTML, for CSS and JavaScript.
>
> **[0:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=56)** Here you find detailed information about all HTML elements, all CSS selectors and properties and JavaScript, keywords methods, primitives prototypes and everything else.
>
> **[1:07](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=67)** The MDN Web Docs also have a heavy accessibility focus, and when there are accessibility concerns around specific usage, it's highlighted right in the documents.
>
> **[1:17](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=77)** As an example, if you go to the image page that covers the image element, you'll see there's a section called accessibility concerns.
>
> **[1:24](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=84)** You go to it, it'll break down how to make sure your images are accessible by for example, using proper alt text.
>
> **[1:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=91)** So instead of just saying an image, you say a rock opera penguins standing on a beach and so on.
>
> **[1:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=96)** To find authoritative information beyond official documentation.
>
> **[1:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=99)** I always turn to well-known publications and follow the breadcrumbs that they leave, of notes are a list apart, smashing magazine, and CSS tricks.
>
> **[1:50](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=110)** All of which consistently publish well-researched articles on accessibility.
>
> **[1:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=114)** What I usually do is search for some information and say how do I make an accessible dropdown menu?
>
> **[1:59](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=119)** And then I add at the end of the search, a list apart or smashing magazine, or CSS tricks, because there's a good chance of finding an article in one of these sites that has links to code examples or links to experts in the field who can then lead me further down that breadcrumb trail until I find the information I'm looking for.
>
> **[2:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=136)** In particular I recommend checking out a specific article on smashing magazine called, 'A Complete Guide To Accessible Front-End Components.'
>
> **[2:24](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=144)** Now this is sort of a meta article.
>
> **[2:26](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=146)** So it's an article that highlights a bunch of other content published on the web around the subject.
>
> **[2:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=152)** You can see there's a massive list of different types of interfaces and how to make them accessible.
>
> **[2:38](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=158)** And each of these items drops into a small piece that explains what's going on followed by a ton of links to authoritative resources with further code examples, further articles, and more information about how all of this stuff works.
>
> **[2:53](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=173)** That way you'll quickly get an overview of what's available.
>
> **[2:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=176)** You can then dig into what you need to focus on, find people who really know what they're talking about and get their direct information.
>
> **[3:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=183)** And that information often involves direct research including things you've seen in this course.
>
> **[3:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=188)** Bottom line is always start with MDN because that's where you'll find the concrete information about how things work and then branch out to look for good examples that have been published in publications that do proper testing before they publish content.
>
> **[3:23](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/where-to-find-more-information?u=76281980&t=203)** And that includes a list apart, smashing magazine, CSS tricks, and several other applications not listed here.

> [!info]- Semantic Content
>
> **Env Vars:** css (5), mdn (3), html (2)
> **CLI Commands:** find (6), make (3)
> **Code Keywords:** this, (1), else. (1), for. (1)
> **Documentation:** mdn (3)
> **UI Navigation:** go to (2), dropdown (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Tools for manually testing sites
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=0)** - [Instructor] Accessibility testing is central to successful web development.
>
> **[0:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=4)** It's also not something we do naturally so it has to be built into our practice and a conscious choice that we make all the time.
>
> **[0:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=11)** There are a lot of tools and techniques for applying accessibility testing to your practice enough for an entire course.
>
> **[0:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=16)** So for now, I'll point you to some immediately available tools to get you started on that journey.
>
> **[0:22](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=22)** First off, get used to navigating your creations, using your keyboard only.
>
> **[0:27](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=27)** That means turning off your mouse or track pad or putting it somewhere out of reach and actually using only your keyboard to navigate through what you built on the web.
>
> **[0:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=36)** This can be quite daunting at first because it's not something we're used to and we quickly discovered that a lot of the things that we assume work really well don't work really well when we have other input methods.
>
> **[0:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=46)** But over time, you'll discover two things, one is that it's totally possible to make your sites entirely keyboard navigable, and secondly, that a lot of keyboard shortcuts that are really useful to know because then you'll have to rely on your mouse for all the things they're doing.
>
> **[1:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=60)** The basics are you use your Tab key to jump from link to link, Shift + Tab, to go backwards.
>
> **[1:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=66)** The return or Enter key is used to follow a focus link.
>
> **[1:09](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=69)** Arrow keys are used to scroll up and down the page.
>
> **[1:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=71)** The Space bar is used to jump down the page.
>
> **[1:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=74)** If you're focusing on a button you can also use a Space bar to trigger the button.
>
> **[1:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=78)** And if you're curious, you'll find full maps of all the keyboard shortcuts for all major browsers by doing a simple search on search engines.
>
> **[1:26](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=86)** Here, the Chrome keyboard shortcuts, there're keyboard shortcuts for Firefox and Edge and Safari, whatever browser you're using.
>
> **[1:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=93)** All these browsers have been built with advanced keyboard functionality.
>
> **[1:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=96)** And there's lots of accessibility features you can hook into if you want to.
>
> **[1:40](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=100)** So it's just a matter of finding the documentation and reading through it learning how it works and start applying it.
>
> **[1:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=105)** When navigating using your keyboard make sure you're able to access all interactive features and that all those interactive features work as intended.
>
> **[1:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=114)** Whenever you find yourself lost meaning there's focus somewhere, but you can't see where it is, or you find a link or a button or another interactive feature that is not behaving the way you expect.
>
> **[2:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=125)** That's an opportunity to improve your code.
>
> **[2:07](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=127)** And to be honest, a lot of the time improving your code means just going back to basics and taking away your style sheet, taking away your Java script, and just getting the feature to work the way it's intended to.
>
> **[2:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=138)** A very common error, I find when I do this, is I'll find a link or a button that I can focus but I can't see in the browser that I am focused on it.
>
> **[2:27](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=147)** You can see in this example here, as I'm tabbing through there's a black line around the items telling me I'm currently focusing on this item.
>
> **[2:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=155)** But that's often not the case.
>
> **[2:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=156)** And that's because we're using CSS resets that often take away the focus states and then we have to manually add it in and then someone forgot.
>
> **[2:44](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=164)** If that's the case, just go in and remove the focus style in the CSS reset and you'll likely get the focus that you need.
>
> **[2:51](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=171)** So instead of doing something complicated just don't override what the browser is already doing.
>
> **[2:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=176)** The second thing you need is a screen reader.
>
> **[2:58](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=178)** This is to make sure all the content on the page is accessible and screen reader users get the necessary information from links and buttons and interactive features to be able to parse all the content.
>
> **[3:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=188)** Now, both Mac OS and Windows have screen readers built in that you can utilize.
>
> **[3:13](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=193)** If you want to you can also install, browser level, screen readers.
>
> **[3:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=196)** The one I've been using in this course it's just called screen reader.
>
> **[3:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=199)** It used to be called Chrome Vox and you can install it in Chrome.
>
> **[3:23](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=203)** If you have a Chromebook it's already installed.
>
> **[3:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=205)** There also similar screen reader extensions for the other browsers.
>
> **[3:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=208)** The reason I'm using Chrome Vox is I can go into Chrome and turn it on and off at will but you can also do the same with other screen readers.
>
> **[3:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=215)** If you're very interested, you can also go actually acquire a proper screen reader application the one that's used by people who use screen readers all the time.
>
> **[3:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=223)** These take a little more setup and learning but once you're in that environment you'll then learn how people actually experienced the web without looking at it which can be a very interesting and educational experience.
>
> **[3:54](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=234)** Finally, all the browsers now have pretty advanced accessibility tools built right in that you can hook into.
>
> **[4:01](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=241)** Now, these tools are a little bit different and they do different things.
>
> **[4:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=243)** So it's useful to use them in conjunction with each other.
>
> **[4:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=246)** So test things both in Chrome and Firefox for example.
>
> **[4:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=250)** So let me show you where the tools are and how you can get access to them and give you a preview of what you can do.
>
> **[4:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=254)** To get to the accessibility tools in Chrome I'll go and inspect an element because they're part of developer tools.
>
> **[4:21](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=261)** Here there are two different parts.
>
> **[4:23](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=263)** So first of all, we can test our page for color blindness by going to this menu over here, more tools and then down to rendering.
>
> **[4:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=272)** And at the very bottom of the rendering panel you'll find emulate vision deficiencies.
>
> **[4:37](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=277)** Here you can set different types of deficiencies including blurred vision, which will just blur the content.
>
> **[4:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=283)** And you see becomes very difficult to read this text.
>
> **[4:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=286)** There's also different types of colorblindness.
>
> **[4:48](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=288)** So here's red, green colorblindness.
>
> **[4:50](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=290)** And again, as I explained previously, in the course, this isn't what a person with color blind sees.
>
> **[4:55](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=295)** What's happening here is the browsers trying to simulate what it's like to not be able to see the difference between two colors.
>
> **[5:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=302)** And it doesn't really make any sense when you're looking at a picture like this.
>
> **[5:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=305)** But if you had, let's say a red and a green button you would immediately see that they look the same now.
>
> **[5:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=310)** And that's what these tools are for.
>
> **[5:11](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=311)** They indicate to you that there's some color contrast that it's not working properly.
>
> **[5:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=316)** You can also change to other types of colorblindness that take away all the types of colors and you can even set it to black and white.
>
> **[5:22](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=322)** So you can see what the page looks like if there are no colors.
>
> **[5:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=325)** Now, in addition to this rendering option, if you go down here, let's see.
>
> **[5:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=329)** If you go down to where you have styles and computer layout and everything else there's also a panel called accessibility.
>
> **[5:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=335)** And here you get accessibility information about the page you're currently looking at.
>
> **[5:39](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=339)** So let's see, I'll click on the nav here.
>
> **[5:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=341)** When I do that, I get a bunch of information about the accessibility features.
>
> **[5:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=346)** But you see here first, this there are some aria attributes.
>
> **[5:48](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=348)** So we have aria label horizontal meaning this is the horizontal menu that's because this particular layout also has a vertical menu.
>
> **[5:55](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=355)** Then there's role navigation.
>
> **[5:56](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=356)** Now this role navigation is actually not necessary because this is a nav and it already declares itself as a role.
>
> **[6:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=363)** But the developer of this WordPress theme chose to also add the role in manually.
>
> **[6:07](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=367)** So clicking through different elements here you'll be able to get information about the aria attributes about landmarks and roles and everything else.
>
> **[6:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=375)** And this can be good to navigate through.
>
> **[6:18](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=378)** But the accessibility tools in Chrome are not much more advanced than what you're seeing here.
>
> **[6:23](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=383)** If you want really advanced tools, you need to go to Firefox.
>
> **[6:26](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=386)** Again, we can inspect an element here.
>
> **[6:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=389)** And go over to the accessibility section.
>
> **[6:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=393)** From here we have a lot more features.
>
> **[6:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=395)** For one, there is a tabbing order feature that allows you to see the actual tab order of the page.
>
> **[6:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=401)** So you can see here that we have one, let's see two, three, four, five, six, and you can tab through the different items.
>
> **[6:48](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=408)** The reason why it looks weird.
>
> **[6:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=409)** So you have six, seven, eight it's because this particular design hides the dropdown menu items by putting them over to the right hand side or left-hand side.
>
> **[6:58](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=418)** So that's why you're seeing seven and eight over here.
>
> **[7:01](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=421)** And you can see, as you scroll through all the different items that are highlighted.
>
> **[7:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=424)** You can also simulate colors.
>
> **[7:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=426)** So under simulate, you can simulate no red color or no green color, or low contrast.
>
> **[7:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=434)** So that just makes everything gray, which is really useful.
>
> **[7:17](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=437)** So again, it's a different thing from what you saw and you can get information about all the elements.
>
> **[7:22](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=442)** So if we go and select the same nav here.
>
> **[7:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=445)** I'll select, let's see go up, find the nav.
>
> **[7:29](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=449)** And go to the accessibility.
>
> **[7:31](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=451)** And you'll get that same information.
>
> **[7:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=453)** So here you have the nav with a bunch of information.
>
> **[7:36](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=456)** Now, the other interesting thing is you can from this panel run checks on your site.
>
> **[7:41](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=461)** So you can run checks for contrast and keyboard and text labels or just all issues.
>
> **[7:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=466)** And now Firefox will go through the page and just run a rudimentary check on what's going on.
>
> **[7:51](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=471)** And what it immediately finds for me is, there are a bunch of issues with text labels.
>
> **[7:55](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=475)** So here's an image that doesn't have a text label meaning the alt text is empty even though it's a functional image.
>
> **[8:02](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=482)** So I should really go and fix that.
>
> **[8:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=483)** And you'll see, there are more text labels.
>
> **[8:05](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=485)** For other pages, let's see if I go to the front page here through the same test, I'll get a different result because on this page there are different elements here.
>
> **[8:13](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=493)** There's just a figure that is missing a text label.
>
> **[8:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=496)** That's because in my case, I had text next to it so I didn't want to do that.
>
> **[8:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=499)** But the tool will start walking through your site and find issues and notify you about them.
>
> **[8:25](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/tools-for-manually-testing-sites?u=76281980&t=505)** So between keyboard navigation, screen reader and the built-in tools in your browser, you have a lot of features to start testing your creations and make sure that they're working the way they're supposed to, and that you're meeting your accessibility goals in the process.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (2), this, (1), case. (1), override (1)
> **CLI Commands:** find (8), make (6)
> **UI Navigation:** go to (3), scroll up (1), click on (1), dropdown (1), select the (1)
> **Tools:** firefox (4), safari (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (1), it's like (1), picture (1)
> **Prerequisites:** install (2), setup (1)
> **Env Vars:** css (2)

#### Lighthouse score and similar
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=0)** - [Instructor] Accessibility matters to the human beings who access the sites we built.
>
> **[0:04](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=4)** For this reason, accessibility is also given more and more weight in things like search engine optimization.
>
> **[0:10](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=10)** You can see this in action anytime you run a lighthouse report from the performance metrics tool built into Chrome.
>
> **[0:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=16)** So let's do that and see what actually happens.
>
> **[0:19](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=19)** So I have a site here.
>
> **[0:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=20)** This is one of our demo sites that we use for different courses, and let's go to Chrome and open lighthouse.
>
> **[0:27](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=27)** Inside lighthouse, you can choose to run an accessibility report and that will then test your site for accessibility.
>
> **[0:32](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=32)** So I'll do this using the mobile layout, click generate report and now lighthouse will spin up the site, do a bunch of accessibility testing on the site and give me a response back.
>
> **[0:43](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=43)** And this response will tell me if there are any problems, why those problems exist and what I can do about them.
>
> **[0:49](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=49)** So at the very top here, it says, background and foreground colors do not have sufficient contrast ratio.
>
> **[0:55](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=55)** If I open this, it'll first tell me what the problem is.
>
> **[0:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=57)** Low contrast text is difficult or impossible for many users to read, then it'll show me the failed elements.
>
> **[1:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=63)** And in this case, it's a link that you see when I hover over it, it's highlighted.
>
> **[1:07](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=67)** So if I scroll, I don't know where this link is, was this one, the Landon Hotel link.
>
> **[1:12](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=72)** So I know which element I needed to deal with.
>
> **[1:15](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=75)** And you can also see when I hover over this element it gives me the direct path to that element.
>
> **[1:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=80)** I can even click on it and it'll take me directly to the element in the inspector.
>
> **[1:24](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=84)** And this kind of gives you an idea of how powerful this tool is.
>
> **[1:27](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=87)** Now I can start scrolling down and look at each of the issues.
>
> **[1:30](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=90)** So links do not have a discernible name.
>
> **[1:33](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=93)** Here there's an explanation of why that's a problem.
>
> **[1:35](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=95)** And then it tells me which of the links are a problem.
>
> **[1:37](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=97)** So this issue is probably popping up because in the mobile view, there is no visible text rather than the desktop view there's texts so I need to fix that.
>
> **[1:46](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=106)** If I close this and go further down, it also says user scalable is (mumbles) So disabling Zoom is problematic for users with low vision who rely on screen magnification to properly see the contents.
>
> **[1:58](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=118)** Again, I can hover over the element and see exactly where it is or click on it to be taken directly to it.
>
> **[2:03](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=123)** Then I can experiment in the browser by fixing the problem and running the test again.
>
> **[2:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=128)** Or I can go in and just fix it in my code, reupload the page, rerun the test and then I'll get a better result.
>
> **[2:14](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=134)** The purpose of things like the lighthouse test is to make sure that you are meeting standards and these standards are what search engines use to index their site.
>
> **[2:23](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=143)** An accessibility score of 71 is simply not good enough for a site like this.
>
> **[2:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=148)** And what you'll see as you go through this list is all the issues that are on this list are totally fixable.
>
> **[2:34](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=154)** This site exists on the web and you can run the test yourself and then see if you can figure out how to fix them because these aren't major issues but they're classic accessibility issues that pop up in a lot of websites.
>
> **[2:44](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=164)** The other thing you'll notice is if you run this same test on the desktop instead, you get a different response.
>
> **[2:51](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=171)** We got 72 score for mobile, but on desktop, we get a score of 82 because the only real issue on desktop is this scalability issue.
>
> **[3:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=180)** So if we just fixed that scalability issue and nothing else we're already improving both mobile friendly sites and desktop friendly site.
>
> **[3:08](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=188)** That is to say whatever you do, always run this lighthouse test on everything you're building and do it continuously throughout your development process.
>
> **[3:16](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/lighthouse-score-and-similar?u=76281980&t=196)** Because even if you forget something lighthouse will notice it and will tell you not only what's wrong, but why it's not working properly and what you can do about it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1), case, (1), this. (1)
> **UI Navigation:** click on (2), go to (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Accessibility mindset
> [LinkedIn Learning](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessibility-mindset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessibility-mindset?u=76281980&t=0)** - [Morten] The core purpose of the Web is to make information accessible, and the Web platform is built to serve that purpose.
>
> **[0:06](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessibility-mindset?u=76281980&t=6)** By watching this course, you now understand how working with the grain of the platform and taking advantage of the accessibility features, built right in, not only makes your websites and apps more accessible, but also simplifies your development practice.
>
> **[0:20](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessibility-mindset?u=76281980&t=20)** Now that you understand the basics, I encourage you to take what you've learned, here, and apply it to your daily work, starting with the Accessibility Mindset.
>
> **[0:28](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessibility-mindset?u=76281980&t=28)** What is the functionality of the thing I'm trying to build, and what existing elements serve this functionality?
>
> **[0:34](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessibility-mindset?u=76281980&t=34)** Building semantic accessible code makes your content more accessible, makes your sites and apps easier to index on search engines and makes your job easier, win, win and win.
>
> **[0:45](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessibility-mindset?u=76281980&t=45)** Now that you see how important accessibility is to your own work, I encourage you to check out some of the other courses on accessible design and Web accessibility to broaden your knowledge base and continue your learning journey.
>
> **[0:57](https://www.linkedin.com/learning/simplifying-web-development-with-accessibility-best-practices/accessibility-mindset?u=76281980&t=57)** Now all that's left for me to say is (non English word) go simplify your web development practice with accessibility best practices and I'll see you in the next course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** continue (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [morten] (1)


## Path Context

### In [[Prepare for Digital Accessibility]]
← [[Foundations of Accessible Elearning]] | **7 of 8** | [[Using AI for Accessible Design Workflows]] →

### In [[Explore a Career in Front-End Web Development]]
← [[Web Programming Foundations]] | **7 of 11** | [[React Essential Training]] →

## Appears In

- [[Prepare for Digital Accessibility]]
- [[Explore a Career in Front-End Web Development]]

---

[↑ Back to top](#)