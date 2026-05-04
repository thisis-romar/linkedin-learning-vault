---
type: course
cssclasses:
  - lle-course
slug: accessibility-and-inclusion-with-figma
url: "https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma"
duration_minutes: 100
duration: 1h 40m
updated: 12/21/2023
learners: 12740
skills:
  - Digital Accessibility
  - Figma (Software)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGej-kCGWen5A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702942360733?e=2147483647&amp;v=beta&amp;t=-fsVDINc_vFNf80PIB-w7699jpxo_qaZhgXoIApODMQ"
linkedin_topic: Web Development
learning_paths:
  - '[Build for Digital Accessibility](../../Paths/Web%20Development/Learning%20Paths/Build%20for%20Digital%20Accessibility.md)'
  - '[Design User Experiences with Figma](../../Paths/Web%20Development/Learning%20Paths/Design%20User%20Experiences%20with%20Figma.md)'
prev_courses:
  - '[Advanced Accessible PDFs](Advanced%20Accessible%20PDFs.md)'
  - '[UX Foundations- Prototyping](UX%20Foundations-%20Prototyping.md)'
next_courses:
  - '[Designing Accessible Components In Figma](Designing%20Accessible%20Components%20In%20Figma.md)'
  - '[Figma- Designing with Variables and Conditionals](Figma-%20Designing%20with%20Variables%20and%20Conditionals.md)'
path_nav: '[{"path":"Build for Digital Accessibility","position":4,"total":12,"prev":"Advanced Accessible PDFs","next":"Designing Accessible Components In Figma"},{"path":"Design User Experiences with Figma","position":3,"total":6,"prev":"UX Foundations- Prototyping","next":"Figma- Designing with Variables and Conditionals"}]'
path_count: 2
tags:
  - course
  - topic/web-development
  - skill/digital-accessibility
  - skill/figma-software
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Accessibility%20and%20Inclusion%20with%20Figma.md)

![Accessibility and Inclusion with Figma](https://media.licdn.com/dms/image/v2/D4E0DAQGej-kCGWen5A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702942360733?e=2147483647&amp;v=beta&amp;t=-fsVDINc_vFNf80PIB-w7699jpxo_qaZhgXoIApODMQ)

# Accessibility and Inclusion with Figma

> Figma is a powerful collaborative design tool, but have you ever wondered about your options for supporting more inclusive, accessible design experiences and products? In this course, teacher, author, and professor Tom Green guides you through six different plugins and utilities for Figma that will help your design work be more inclusive and accessible. Deep dive into the Stark plugin, including i

> [LinkedIn Learning](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma) | 1h 40m | 13K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Figma accessibility plugins](#figma-accessibility-plugins)
- [**1. Stark**](#1-stark) (12 videos)
  - [Accessibility](#accessibility)
  - [Installing the Stark plugin for Figma](#installing-the-stark-plugin-for-figma)
  - [Using Stark’s contrast checker](#using-starks-contrast-checker)
  - [Using Stark’s typography checker](#using-starks-typography-checker)
  - [Reviewing alt text](#reviewing-alt-text)
  - [Correct focus order](#correct-focus-order)
  - [Using Stark’s vision simulator](#using-starks-vision-simulator)
  - [Touch targets](#touch-targets)
  - [Adding landmarks](#adding-landmarks)
  - [Add Aria notes](#add-aria-notes)
  - [Using Sidekick](#using-sidekick)
  - [The Stark accessibility checklist widget](#the-stark-accessibility-checklist-widget)
- [**2. Adee**](#2-adee) (5 videos)
  - [Installing Adee](#installing-adee)
  - [Using Adee’s contrast checker](#using-adees-contrast-checker)
  - [Using the alt text generator](#using-the-alt-text-generator)
  - [Using Adee’s color blindness simulator](#using-adees-color-blindness-simulator)
  - [Checking touch sizes](#checking-touch-sizes)
- [**3. Contrast Checkers**](#3-contrast-checkers) (3 videos)
  - [Installing Able and Ally](#installing-able-and-ally)
  - [Checking color contrast with Able](#checking-color-contrast-with-able)
  - [Checking color contrast with Ally](#checking-color-contrast-with-ally)
- [**4. Humaaans**](#4-humaaans) (4 videos)
  - [Inclusion](#inclusion)
  - [Using Humaaans with Figma](#using-humaaans-with-figma)
  - [Create an onboarding frame](#create-an-onboarding-frame)
  - [Persona](#persona)
- [**5. Lokalise**](#5-lokalise) (2 videos)
  - [An overview of Lokalise](#an-overview-of-lokalise)
  - [Changing text to French](#changing-text-to-french)
- [**6. Inclusivity Sources**](#6-inclusivity-sources) (2 videos)
  - [An overview of inclusive design in Microsoft](#an-overview-of-inclusive-design-in-microsoft)
  - [Cards for Humanity](#cards-for-humanity)
- [**Taking Accessibilty and Inclusivity Forward**](#taking-accessibilty-and-inclusivity-forward) (1 videos)
  - [Next steps for accessible, inclusive design](#next-steps-for-accessible-inclusive-design)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Figma accessibility plugins](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/figma-accessibility-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/figma-accessibility-plugins?u=76281980&t=0)** - [Tom] Well, hello there. My name is Tom Green, and welcome to Accessibility and Inclusion in [Figma](../../Skills/Web%20Development/Figma%20(Software).md). In this course, we're going to go deep into the major accessibility plug-ins for Figma, such as [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md), AD, and Able to become aware of how those with sight impairments will view our work. We will also dig deep into inclusion and use the Humaaans plugin to create diverse line art, create an onboarding sequence, look at a way to add diversity to a persona, and accommodate language. There is a lot to cover in this course, so let's get started with accessibility.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (2), [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) (1)
> **Tools:** figma (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [tom] (1)


### 1. Stark

[↑ Back to Table of Contents](#table-of-contents)

#### [Accessibility](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/accessibility?u=76281980&t=0)** - [Instructor] I have approached this course in a manner you may not expect. When you really dig into the topic of accessibility, it actually splits into two distinct pieces, perception and inclusion. The first half of the course deals with accessibility, and when you really think about it, the accessibility plugins for [Figma](../../Skills/Web%20Development/Figma%20(Software).md) deal with perception. The Cambridge Dictionary defines perception as, "An awareness of things through physical senses, especially sight." The Oxford Dictionary is a bit more concise. "Perception is the faculty of perceiving, the ability or power to perceive." In either case, Oxford or Cambridge dictionaries, deal with how users see something and understand what they are seeing. It is all too easy to regard [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md), Adee, and Able, as dealing mainly with vision issues. In certain respects, this is indeed true, but go deeper and you discover they deal with how people perceive onscreen elements, how they move around your interfaces and perceive your color choices, all of which affect their access to understanding. When you look at this image, you are aware of a path through a lush green meadow in the Swiss Alps. Not everybody will be aware of our perception of this image. Others, with a vision issue,
>
> **[1:34](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/accessibility?u=76281980&t=94)** will perceive this image as being a little out of focus. Or this image, what looks like it has been color graded. Does this infer that as UX designers, we need to accommodate all of these issues in our work? Not really. Instead, we are asked to become aware of how others will perceive our work and to make informed, I'm going to stress that [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), informed accessibility decisions around our work. They also ask us to change our assumptions of how our work is perceived and used. With that in mind, accessibility is something to be considered in your research phase and maybe even before you start research. In this way, the design team will become aware of the accessibility issues to be addressed before they start work, rather than suddenly realizing they need to address these issues before developer handoff. In this section, we're going to be looking at three accessibility plugins for Figma, and the first one, of course is Stark. We're going to be looking at another one called Adee and another one called Able. Though their interfaces and features may be different, they all do the same thing, just a little bit differently. What they have in common is they ask you to change your assumptions regarding how your work will be perceived and used. This is important. The risk of alienating a large group of potential users
>
> **[3:09](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/accessibility?u=76281980&t=189)** can only have a negative effect upon the broad acceptance of your work and all that implies. So let's start changing our assumptions with Stark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) (3), [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Tools:** figma (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Installing the Stark plugin for Figma](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/installing-the-stark-plugin-for-figma?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/installing-the-stark-plugin-for-figma?u=76281980&t=0)** - [Instructor] In many respects, [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) has become somewhat of a standard accessibility tool in [Figma](../../Skills/Web%20Development/Figma%20(Software).md). If you head over to the Stark homepage and select the Product drop-down, you'll get a sense of that last observation. Not only is it available for a number of applications, but it's also available for FigJam and Figma itself. The difference between the two is the FigJam plugin is geared to roles: developer, designer, product manager, whereas the Figma plugin is geared more towards UX design. If you have never used Stark, you can get a free trial, but you need to understand you will be offered a limited feature set, and access to the plugin will be cut off at the end of that period. As you may have guessed, access to the full feature set requires a paid account. Gaining access to the plugin can be done either through the Stark homepage or through Figma by selecting it in the plugins page. In either case, if this is your first install, the free version will be installed, and you will be asked to create an account with Stark. Once the plugin is installed, you will then be prompted to log into your Stark account. Once that is done, the plugin opens, and you can get to work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) (6), [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (4)
> **Tools:** figma (4)
> **UI Navigation:** select the (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Using Stark’s contrast checker](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-stark-s-contrast-checker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-stark-s-contrast-checker?u=76281980&t=0)** - [Instructor] There was a time back in the early 2000s when gray text on a dark gray background was regarded as being just too way cool. It may have been, but it was impossible to read. And when it came to being aware of accessibility, cool won out every time. Thankfully, that has all changed, and [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md)'s Contrast Checker is designed to bring contrast up to the current WCAG standard. If you're unfamiliar with the standard, it is a rather extensive collection of web content accessibility guidelines, which you can check out here. Before we start, you need to know the Contrast Checker does not check the contrast of images, it checks the contrast between elements, such as text and the background color. So let's get started. And so, if you want to follow along, open the contrast.fig file found in your chapter download. Come on over to the Trails and select it. And then we're going to open the Stark Accessibility Tools, and we're going to check contrast. And if we check the Trails, the checker tells you it fails both the AA and AAA compliance for both large and normal sized texts. So let's work our way down this dialogue box. The two colors shown here are the two colors detected, which would be this color and the text color. And you can see it, there's the background color
>
> **[1:35](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-stark-s-contrast-checker?u=76281980&t=95)** and there's the text color. The large number right here shows you the contrast ratio. In this case, the ratio is far too low, and it is indicated by the xs down here. And you can see that they contain the ratios that it's detected. By the way, the higher the number here, the better the contrast. So these numbers basically give you a guide as to how to increase the contrast. So let's see how we can make this work. And what you can do is just click on Suggestions here. Now, there's the background color and there's the text color. So let's try the background color by changing it to dark. And you can see it passes three of the tests, but not this AAA test, so we'll try another color And you can see it passes all of them. And then what you can do is you can change the color by selecting Apply suggestions. Okay, let's go back and let's work with the text. So if we select the text and make it black, it still sort of falls in, but if we come over here, it's going to pass this. We've got some issues with the text, so the way to work it is to work the background color. So we'll just change that back. And that's how you do that by the way, you click this and there's the color chip that you started with. So let's work with the text color. Black doesn't work, dark gray doesn't work, a lighter gray doesn't work.
>
> **[3:07](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-stark-s-contrast-checker?u=76281980&t=187)** So we're going to come back and we can select this, change it to white, and you can see it fails on the AA, so if we change that or the background, we can still move in, and again, here we are in compliance. And you'll notice this number is really large now, which is good. And if we apply the suggestion, it's applied and it looks great. Okay, let's move up to the Places area and take a look at this badge. So we'll just select Places, open it up, and we're looking for Favorite. And you can see it fails completely. So the issue here is the text. So if we click on the second one here, it passes. And you'll notice that when you click it, these suggestions shows up here, so we're changing the text color. If we come here, it's going to pass completely. So there you have it, using Stark's Contrast Checker to ensure compliance with the contrast standard laid out by the WCAG.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) (3)
> **UI Navigation:** open the (2), click on (2), select the (1)
> **Env Vars:** wcag (2), aaa (2)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [Using Stark’s typography checker](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-stark-s-typography-checker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-stark-s-typography-checker?u=76281980&t=0)** - [Instructor] I belong to the [Figma](../../Skills/Web%20Development/Figma%20(Software).md) User Group on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md), and hardly a day goes by where someone doesn't post something they're working on and asking what we think of their work. Many of those projects drive me up a wall across the ceiling and down the other wall because of poor [Typography](../../Skills/Data%20Science/Typography.md). The issues range from font choice to letting and practically everything else you can think of. The most common issue though are text blocks where the text is too small and is neither readable nor legible. [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) contains a typography tool right here that doesn't do what the name implies, solve typography issues, but it does address a major accessibility issue. Let's see how that works and to get yourself started, open the typography.fig file found in your chapter, download and [Zoom](../../Skills/Software%20Development/Zoom.md) in on this trails. What that typography tool does is to highlight improper font sizes and alignment. By that I mean it will point out text that may be too small to be legible or alignment that affects readability. Even though text contrast passes the test, it may be illegible. This is important, as I used to tell my students, if the text is not legible and readable, you've prevented the user from access to understanding. Let's get started. So what we're going to do is we're going to select this little text block right here, and we're going to open the typography tool.
>
> **[1:33](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-stark-s-typography-checker?u=76281980&t=93)** And you can see that we've got an issue. It's 11 pixels in size and it fails this test. It's below 12 pixels. Well, you can quickly fix that, just by clicking the plus sign here. So if you want to make it a little bigger, it will do it for you, and then it will apply the suggestion. Now, there's another issue that you might want to pay attention to. If we scroll up to the top and select this text block, it's justified text and you can see that there are holes in the text. So what you want to do is just change the alignment. You can set it to flush left, and it moves back into compliance. So there you go. Using the typography checker in Stark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Typography](../../Skills/Data%20Science/Typography.md) (7), [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) (2), [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **UI Navigation:** open the (2), scroll up (1)
> **CLI Commands:** make (1)
> **Tools:** figma (1)
> **Speakers:** - [instructor] (1)

#### [Reviewing alt text](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/reviewing-alt-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/reviewing-alt-text?u=76281980&t=0)** - In this exercise, we are going to use the Alt-Text tool. To get yourself started, open the AltText.fig file in your chapter download, and when it opens, Launch [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) tools and [Zoom](../../Skills/Software%20Development/Zoom.md) in on this image. Before we start, I don't know about you, but I have always found writing Alt-Text for images to be difficult. As such, it is all too easy to simply ignore this task and move on. Take this attitude and you have just made your work inaccessible to a potentially large group of users. Though Alt-Text may appear optional, you would be making a huge mistake. In today's UX industry, Alt-Text is mandatory, and what I love about Stark is it makes the process so much easier by removing common errors. Also, Alt-Text is rather nuanced, and this tool does a lot more than provide you with a text input box. So what we do is we just select Alt-Text, and we select this image. And it tells me that Alt-Text is required so I'm going to add it. So what we've got here is a text input box, a Suggestion down at the bottom, and we can select decorative, which means no Alt-Text is required, but in this case it is. And down here is To-Do, and this is the maximum number of characters that you can have.
>
> **[1:34](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/reviewing-alt-text?u=76281980&t=94)** So we're going to ignore the suggestion and enter our own text. So we'll start with, A picture of, and you notice it is immediately stricken, or it's got to strike through on it. And the reason for this is we don't normally need to start with saying, A picture. We already know that. So what we're going to do is I'm going to actually enter honest to goodness text that will pass. A wooden house, of course it would help if I spaced it, house and barn in a Swiss valley
>
> **[2:34](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/reviewing-alt-text?u=76281980&t=154)** with snow capped mountains in the background. And you notice, we pass. And notice it also changes to Written. So To-Do says, Hey, you need the Alt-Text. And when you've got the proper stuff in, it says Written. And I click Done. And you can see that the Alt-Text is now added to the layer stack. And if I twirl it down, it tells me where it is, and it tells me where the Alt-Text is. So there you go. There's using the Alt-Text tool in Stark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) (3), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **Analogies:** picture (2)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - in (1)

#### [Correct focus order](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/correct-focus-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/correct-focus-order?u=76281980&t=0)** - [Instructor] In this exercise, we are going to use the focus order tool. What this tool does is accommodate those users who use the keyboard or other methods to navigate through a screen or webpage. What this tool does is to annotate the design by setting both the sections of the design and the order in which the elements of the section are accessed. Do this and the development team knows exactly how to wire up the tabbing order to accommodate ease of navigation. So to get yourself started, open the focus order dot fig file found in your chapter download and come on up here to the top. I'm using a 70% view here 'cause I want to see the whole thing. We're going to work with this. So to get started, let's select focus order and we're going to come to here and we're going to select that. And we're going to come to travel and we're going to add an item. Now, you notice you got two choices up here, items and sequences. Let's choose sequence first. So, we'll just name this sequence "Nav." And now we've got the first focus-able element set, travel add the item. And you notice it gets a little one. And we'll do the same thing with hotels,
>
> **[1:37](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/correct-focus-order?u=76281980&t=97)** events, and highlights. And if you roll over these, you can see that you can edit them. So you can change the name, you can delete them if you don't need them. And what this does is allow you to change the order. So if I want to move travel into number two, I just move it there. Which I don't want to do, but you notice it also changes. So we'll just put it over number one again, where it belongs. Finally, as you can see, the focus order is annotated on the screen. That's those numbers. They won't show when you test it or anything like that. And the focus order has been added to the layer stack. So this layer will travel when the project is shared or handed off.

> [!info]- Semantic Content
>
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Using Stark’s vision simulator](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-stark-s-vision-simulator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-stark-s-vision-simulator?u=76281980&t=0)** - [Instructor] In this exercise, we're going to take a look at the Vision Simulator tool. And to get yourself started, open the VisionSimulator.fig file from your chapter download. Now, the Vision Simulator has two purposes. The first is to sensitize you to how various users with specific vision issues will perceive your screens or page. The second is to point out any issues that will make your pages and screens somewhat inaccessible and give you the opportunity to make an informed, I add the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) informed, decision as to how to deal with it. So let's open up the Vision Simulator.
>
> **[0:49](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-stark-s-vision-simulator?u=76281980&t=49)** And you can see it's a pretty busy place. You got two choices, generate or [Simulation](../../Skills/Hardware/Simulation.md). We'll use both in a minute, but let's take a look at some of the areas for simulation. And as you can see, this is broken down into colorblind and other issues. So we'll start with simulation. And there's the art board and you can choose a [Zoom](../../Skills/Software%20Development/Zoom.md) level for a better look at it. Now you can come over to the simulation and you can choose a way that someone with Deuteranopia would see it. And as you can see, the mountains and the valley, the green trees sort of changed color. So as we go through them, deuteranopia, somewhat similar, but it's still a little bit wrong. And then there's this one in which they have no color perception and it's all grayscale. So people with this condition will actually see grayscale images. Blurred? Well, that explains it. If we've been to the eye doctor lately, you know exactly what I'm talking about. Ghosting is a little bit different. I'm going to zoom right in here because I want you to see what I'm talking about.
>
> **[2:26](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-stark-s-vision-simulator?u=76281980&t=146)** Notice we've got a little ghosting here on the words and the images. That's almost like double vision. Yellow ink? Well, that's self-explanatory. And we'll take that back out to a hundred percent. Loss of contrast. You notice everything just gets dull 'cause there's no contrast between the items. And good old bright light. And basically, bright light looks like the luminance color value of the art board has been seriously increased. As a UX designer, simulation mode gives you a good idea of how users with vision issues will perceive your work. So let's go over to generate. Now, this is a rather neat feature because what it does is generate copies of the selected art board that have the issue you examined in the simulation. So let's see what I'm talking about. I'm going to select all simulations and then I'm just going to click Generate. And you can see all the simulations appear on separate art boards. And they also appear up here, so that members on your team can see how people with vision issues, or specific vision issues, will perceive your work.
>
> **[4:03](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-stark-s-vision-simulator?u=76281980&t=243)** You can also assume that each art board is live, meaning you can edit each one to accommodate the issues if you so choose. And you can even share these art boards with your team and stakeholders. So there you have it, Vision Simulator, a quick way to become aware of how users with vision issues will perceive your art boards.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Simulation](../../Skills/Hardware/Simulation.md) (6), [Zoom](../../Skills/Software%20Development/Zoom.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Touch targets](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/touch-targets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/touch-targets?u=76281980&t=0)** - [Instructor] Nothing irritates me more than tapping on a button or a link in an app on my iPhone and nothing happens. This inevitably requires me to [Zoom](../../Skills/Software%20Development/Zoom.md) in on the offending element and then tap it to get where I want to go. With the Touch Targets tool in [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md), I can quickly identify the offenders and make adjustments. To see how this works, open the TouchTargets.fig file in your chapter download, and select Touch Targets in your Stark lineup. And then let's zoom in on the favorite button right here. So we've got Touch Targets. And we're going to select the button. And you can see that the button fails. Now, you're looking at iOS and Material Design. Think of Material Design as being [Google](../../Glossary/Service/Google.md)'s design system, which is used primarily on websites and [Android](../../Glossary/Sdk/Android.md) devices. So basically, the height is all wrong. And by the way, if you don't trust these measurements, come on over here, 75, 25. Well, this isn't just helpful for me, it is also helpful for users with mobility, dexterity, and fine motor disabilities. Others to keep in mind are users with one hand or maybe even use part of their finger or fingers. This tool is also useful for those with low vision who have difficulty seeing this button.
>
> **[1:34](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/touch-targets?u=76281980&t=94)** What you can't do is use the tool to move the button into compliance. And what we're going to do is we're going to bring the height into compliance. So I'm just going to come over here, and we'll go with 48 pixels.
>
> **[1:54](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/touch-targets?u=76281980&t=114)** Do select it, select it, and you can see it's in compliance. Now, what this tells you is you may have to think about a redesign. So a good rule of thumb here is, try out your little buttons and things like that, using the Touch Target tool as you are developing your components or your design system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (2), [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) (2), [Google](../../Glossary/Service/Google.md) (1), [Android](../../Glossary/Sdk/Android.md) (1)
> **Code Identifiers:** iphone (1), ios (1)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Best Practices:** rule of thumb (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Adding landmarks](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/adding-landmarks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/adding-landmarks?u=76281980&t=0)** - [Instructor] In this exercise, we are going to add landmarks to our design. To get yourself started, open the landmarks.fig file found in your chapter download. What landmarks do is to annotate each section of the design with the appropriate label. The benefit to adding landmarks is to make your developer's life easier, because he or she is not put into the frustrating situation of guessing where landmarks are to be placed in the code. Even more important than the developer, landmarks permit users who use screen readers, the keyboard, and those with visual impairments to navigate through the page or screen. Nothing is more frustrating to those users than to be constantly tapping through all of the various elements before they reach what they are looking for. So let's get started. And to get yourself started, open the Landmarks tool. Now, this is a rather simple tool to use. And the first thing we're going to do is we're going to open up our layers panel and select the Nav group, and we're going to make it a landmark. And, of course, it's Nav, right? So we'll just add that. And then we'll come down to our Hero group, and we'll make that a section and we'll add that. And then we'll come down to the Footer group, and we'll make that the Footer, and we can add it.
>
> **[1:43](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/adding-landmarks?u=76281980&t=103)** Now if I [Zoom](../../Skills/Software%20Development/Zoom.md) in and scroll down, you can see
>
> **[1:58](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/adding-landmarks?u=76281980&t=118)** that the landmarks have all been added. They're indicated by the dash lines. And if you twirl down the landmarks, they are all there. And again, these all travel with the document. So on handoff, your developer now has an idea of where the various landmarks on the page are actually located.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **CLI Commands:** make (4)
> **UI Navigation:** open the (2), select the (1), scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Add Aria notes](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/add-aria-notes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/add-aria-notes?u=76281980&t=0)** - [Speaker] Screen readers are wonderful devices, but they can also hinder accessibility. This is where ARIA comes in. ARIA is short for accessible rich internet applications, and is a set of roles and attributes that define ways to make web content and web applications more accessible to those with disabilities. If you look at this modal, it's pretty straightforward. You can use Twitter X or [Facebook](../../Glossary/Service/Facebook.md) to log in, or you can enter your username and a password. All of this can be picked up by a screen reader and made accessible. All of this, except this little puppy right here, the close icon. A screen reader will most likely say X, and move on. That does not define the function of that letter. We all know it's a close button, but the screen reader doesn't, and this is where the ARIA notes come in. So if you want to work along with me, open up the ARIA dot fig file, found in your chapter download. So of course, we're going to open up [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md).
>
> **[1:17](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/add-aria-notes?u=76281980&t=77)** And what we're going to do is going to select that letter there, their close button, and we're going to select ARIA notes. So with the item selected, we can now add the item. This is where the annotation goes, and this is where the label goes. So we'll just call this close button. Sometimes obvious is better. So to make sure that everybody knows it is a close button, you can enter into the text area, ARIA dash label equals close.
>
> **[2:05](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/add-aria-notes?u=76281980&t=125)** And the note to the developer says, "Well, this is the close button." Though it may seem self-evident, it never hurts to state the obvious. When you click done, the note is attached to the selected element. You may also want to call the user's attention to the modal before the close attribute. In this case, what you would do is you'd select the frame, add an item, and this is modal, or whatever you want to add in there, I'll just do this, and you got a couple of choices here. You can type in ARIA dash live equals polite,
>
> **[2:57](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/add-aria-notes?u=76281980&t=177)** or conversely, ARIA dash modal equals true.
>
> **[3:09](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/add-aria-notes?u=76281980&t=189)** And that doesn't tell me anything about it. So we can really change it to modal has focus. And of course, it'll help if I spell true correctly. Click done, and you can see it's attached, and both notes are there. And now you can delete a note by just clicking the trashcan if you don't need it. And again, it's attached to the layer stack, and the notes will move with the file when it's shared or handed off to development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Facebook](../../Glossary/Service/Facebook.md) (1), [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) (1)
> **Env Vars:** aria (8)
> **Definitions:** is a  (2), short for (1)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [speaker] (1)

#### [Using Sidekick](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-sidekick?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-sidekick?u=76281980&t=0)** - [Instructor] One of the slickest additions to the [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) lineup is Sidekick, so let's check it out. And to get yourself started, open the Sidekick.fig file found in your chapter download. To this point, you may be thinking, "walking through each of those tools to isolate accessibility issues is a rather time-consuming process." You're not going to get an argument on me from that one. Sidekick, though, zips through the selected artboard and flags all of the issues. Before you start accusing me of wasting your time, I have introduced Sidekick at this point deliberately. Sidekick flags the issues but doesn't tell you how to solve them. And if you don't know how to solve them, well then you've got a problem, don't you? So let's run this artboard through Sidekick. So what you do is you open Sidekick. And right off the bat, I've got 23 violations, three potential violations, and I've passed on 34 of them, which is not bad. Okay? So there's no alt text. Now remember, if you don't know how to add alt text, because if it select this, guess what opens? The alt text tool. There is no alt text, so I'm missing a lot of alt text on all the images. And, oh, again, there's the contrast tool. If you don't know how to use it, you got a problem.
>
> **[1:37](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-sidekick?u=76281980&t=97)** Three potentials. And, again, there are no landmarks or headings annotated for various frames. And the 34 that passed were font sizes. The bottom line about sidekick: It is an extremely efficient way of applying the Stark tool set to an artboard. Though it will flag the problem, it would not hurt to know how to use the suggested tool to solve it. And on top of that, Sidekick, as you saw, adds suggestions at the bottom of the tools, you can choose to ignore them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) (2)
> **Cross-References:** as you saw (1)
> **UI Navigation:** open the (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [The Stark accessibility checklist widget](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/the-stark-accessibility-checklist-widget?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/the-stark-accessibility-checklist-widget?u=76281980&t=0)** - [Instructor] We are going to finish this [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) overview with a Stark widget that should be included with every project. So to get yourself started, open the widget.fig file found in your chapter download. As you have proceeded through this chapter, you will have been given an opportunity to explore all of the tools in Stark's toolbox. Even so, each project will most likely have accessibility requirements that must be met. Stark provides you and the team with a widget that lets everyone know you have accomplished some of the accessibility tasks. Now, what you're going to do is you're going to come over here, and we're going to look for a widget. And we're going to Manage widgets. And you're going to look for Stark. Okay? So Stark has a widget. And it's this one right here, the Stark Accessibility Checklist. Now, when you click it, you notice it comes up as a separate frame. And I'm going to move this up. And now I'm going to [Zoom](../../Skills/Software%20Development/Zoom.md) in on it, because now it gets really important stuff.
>
> **[1:23](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/the-stark-accessibility-checklist-widget?u=76281980&t=83)** As you can see, this checklist relates to designers, engineers, and product managers, basically the three major groups that work on any UX project. Each one of these three items will have its own checklist. Now, you got to be careful with this 'cause I'll show you what I'm talking about. Let's take a look at the designer checklist. So I click it. And there it is. And you can see it shows up the same. So I do not know this is the designer's checklist. So I'm going to name this one Designer.
>
> **[2:04](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/the-stark-accessibility-checklist-widget?u=76281980&t=124)** And what the designer can do is open it up. And if you want to find out what the general requirements are, well, that gives you a little hint as to what they are, and then the designer can say, "Okay, fine. I've reviewed this." Color, Contrast, [Typography](../../Skills/Data%20Science/Typography.md), they've all got it. Interactions and Patterns to Avoid. Well, again, if don't know what that is, Stark's going to tell you.
>
> **[2:42](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/the-stark-accessibility-checklist-widget?u=76281980&t=162)** And you can even add a note. Now, these are sticky notes. So if I come over here and there's a sticky note from me. And when I deselect, you can see that I have applied a sticky note regarding patterns to avoid. And this, again, will travel with the project. Okay, let's take a look at the engineers. Now, this is another thing that will drive you crazy. It just opens up right on top of the designers. So I'm just going to come over here, push it over. And they get to do the same thing, but they have an area for semantics, an area with models and pop-ups, and motion. And things to check for motion. And again, the designers can just go through the checklist, check, check, check, check, check, and that will move with the document. Okay, so let's see what our product managers have. And you can see it's even shorter. But you notice Inclusion is in here. And away we go there. So you can make sure that, as a product manager, you've covered off some of these points with inclusion.
>
> **[4:17](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/the-stark-accessibility-checklist-widget?u=76281980&t=257)** And again, all of this travels with the documents. You can quickly see who's done what, where, making sure that things have been checked off, that we're really all on the same page, and away we go. Now, again, see? Designer Checklist. Well, I don't want that. So I'm just going to name this one PM
>
> **[4:46](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/the-stark-accessibility-checklist-widget?u=76281980&t=286)** and this one DEV. So there you go. There's using the widget. And I think it's something that should be included with every project your team works on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) (8), [Zoom](../../Skills/Software%20Development/Zoom.md) (1), [Typography](../../Skills/Data%20Science/Typography.md) (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** dev (1)
> **UI Navigation:** open the (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 2. Adee

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing Adee](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/installing-adee?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/installing-adee?u=76281980&t=0)** - [Instructor] Adee is one of those accessibility tools you might want to stick in your back pocket. In fact, even the name. Adee Comprehensive Accessibility Checker, tells you there's a lot under the hood. Like many plugins of the genre, there is a limited-time free version of the plugin, which you can obtain here, but there are other pricing models available. You can get a seven-day free trial, a professional account, or an enterprise account, and you're going to need to have one of these three to use the Adee plugin. So we're going back to the homepage, and as you can see, the [Figma](../../Skills/Web%20Development/Figma%20(Software).md) plugin is available to you right off the homepage. Now, I'm going to pop over to Figma and show you another place where you can get it. If you come here to Plugins, Manage Plugins, you get the plugin, you can install it, and you can get a little bit more information about what it does by just viewing the details. But just remember the spelling is A-D-E-E. With that out of the way, let's get to work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (2)
> **Tools:** figma (2)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Using Adee’s contrast checker](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-adee-s-contrast-checker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-adee-s-contrast-checker?u=76281980&t=0)** - [Instructor] In this exercise, we're going to take a quick tour of the Adee interface and then dig into the contrast checker. To get yourself started, open the Adee contrast file found in your chapter download, and next, open the Adee contrast checker in your plugins. And remember, you're going to have to log in before you can open the Adee tool set. And when the Adee interface opens, all of the tools are available to you. So let's move down through the icons here on the left side. This is the contrast checker. This is alt text. This one is the colorblind simulator. And this one deals with touch targets. This one will pop you over to the pricing page if you want to upgrade your account, and this gets you to support if you have any questions. Okay, so let's go to work. So what we want to do is test this button here. Obviously, the contrast is just horrible. Now, you can't work with a group, as you notice, nothing lights up. So if you're working with a group, don't use a group, select the individual layers. And as you can see, this button fails miserably right across the board. Now, the way you work with this is you use the slider. So this dark gray here is the text, and you can see that it says testing, so I can just move it. And you notice how it comes into compliance
>
> **[1:33](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-adee-s-contrast-checker?u=76281980&t=93)** just by changing the text. I can do the same thing with the background color, only I'll probably have to go darker, and even then, it slowly moves in. So we'll adjust the text. And again, don't worry about the AAA here, this is for alerts and emergencies and things like that. And you'll also notice that the contrast ratio has seriously gone up. Now, you have two choices once you've got this done. Apply will actually apply the changes made to the text, or you can click generate. And if I move that out of the way, it just generates a report telling you that this button is in compliance and it is attached to the layer stack, and as usual can be shared or moved around the group.

> [!info]- Semantic Content
>
> **UI Navigation:** open the (3), go to (1), select the (1)
> **Env Vars:** aaa (1)
> **Speakers:** - [instructor] (1)

#### [Using the alt text generator](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-the-alt-text-generator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-the-alt-text-generator?u=76281980&t=0)** - [Instructor] There is nothing worse than handing off a project only to have the developer, or, God forbid, a user ask why there's no alt text. I'm making an assumption here, but I'm willing to bet many of you will simply toss in some alt text and be done with it. Big mistake and full disclosure, I am just as guilty. So to set the stage for this exercise, the goal of alt text is to describe images for those who use screen readers or have other issues that prevent them from being able to identify an image. There is another reason for adding alt text. In those rare instances where images fail to load, users will get an idea of what they are not seeing. I should also remind you that starting alt text with photograph of or image of is redundant, don't do it. Having said that, Adee's Alt Text tool makes this whole process rather pain free, so let's get started. And to get yourself started, open the Adeealt.fig file found in your chapter download and open up the Adee Accessibility Tool. So what we have here are a series of screens, and none of the images or icons of alt text added to them. So we're going to get started. Now, you can approach this process in one of two ways, and I'm going to suggest you do this, select an image. Now you can also use this little pop down here, and it will go through the whole document,
>
> **[1:31](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-the-alt-text-generator?u=76281980&t=91)** isolating all the images and whatever that needs to have alt text. I'm going to get rid of that. It's a little difficult, 'cause you don't know what's what, especially if the naming convention is not the same. So, I'm just going to select this image, and then over here you see a thumbnail appears, meaning you can select it and start adding some alt text. So what you do is you click this little icon here, which is text input, and it's telling me this is an SVG image. Now, an SVG image requires a different way of handling alt text, which I'll get to. You also have a pop down here, Informative or Descriptive. Descriptive will require alt text and Decorative ignores the need for alt text. Now moving down, this is where things change. SVG images both require a title and a description. The title should be human readable. In this case, Woman hiking a trail.
>
> **[2:46](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-the-alt-text-generator?u=76281980&t=166)** And then the description would be Woman walking a dog
>
> **[2:56](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-the-alt-text-generator?u=76281980&t=176)** on a trail with lush trees
>
> **[3:06](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-the-alt-text-generator?u=76281980&t=186)** on either side of the trail. And it shows you spelling errors, so I'll just do that, and you notice I got a maximum of 125 characters, and I can generate the alt text for that image, and you can see that it gets added to the image and will move with the file. Okay, let's deal with the jpeg, which would be this image here. So we're going to select the waterfall, and you can see it's a JPEG or PNG, so we're going to generate some text for that, but first we got to add the alt text. And you notice, it doesn't need a title. So if it's decorative, it's like a little icon that really doesn't add information. You can just say it's decorative. So this is informative, and this will be the alt text attached to the image. Waterfall in a forest with lush green trees on either side. And again, I just generate it and it gets attached.
>
> **[4:34](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-the-alt-text-generator?u=76281980&t=274)** And you can see that each of these has its own area called Adee-Alt, and this is the alt text that was added to this image, and this is the alt text that was added to this image, and you might want to rename them. And once you do that, off you go. You can share it with the group, or send it to everybody for review. So there you have it, using alt text in Adee.

> [!info]- Semantic Content
>
> **Env Vars:** svg (3), jpeg (1), png (1)
> **UI Navigation:** open the (1), select the (1)
> **Definitions:** is an  (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [Using Adee’s color blindness simulator](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-adee-s-color-blindness-simulator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-adee-s-color-blindness-simulator?u=76281980&t=0)** - [Instructor] It is interesting how memories work. I remember a conversation during my teens with someone who mentioned there was a relationship between color blindness and traffic lights. My friend told me people who are colorblind have trouble seeing colors of a traffic light. And I thought this was odd and said, "I don't see how this can be an issue since there are only three colors and their order never changes." And with that, I moved on. Had I dug deeper into the subject, I would've realized color blindness is not a generic term, but how people afflicted with this condition perceive color. Adee's color blindness simulator shows you how colors are perceived, which sensitizes us to color blindness, which is a condition that affects 4 1/2% of the world's population and 8% of all males. Thus, we need to be aware there is a segment of our users who are not seeing color clearly, getting colors mixed up, or being able to differentiate between certain colors. To see what I'm talking about, open the adeecolorblind.fig file found in your chapter download and open the Adee tool. So what we have here is a tent on a campsite. Those of us with normal vision will see an orange tent sitting on a brown forest floor surrounded by green leafy trees. And what we're going to do is we're going to select colorblindness and we're going to select the tent.
>
> **[1:34](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-adee-s-color-blindness-simulator?u=76281980&t=94)** And this pop down here lets you see how people afflicted with these conditions will see the tent. Now here's the really interesting thing. As you make the change, you'll be able to do a comparison. I think this is a really slick addition to a simulator. So let's start with deuteranopia. And you can see that my tent is yellow where it should be orange, and this is the most common type of color deficiency, and as you move the slider, the tent is drastically going to change color, not to mention the trees. This is because the user viewing it has an issue with perceiving the red/green color combinations, thus, the brown trees and the yellowish tent. Move the slider and you are aware of this condition. Let's try another one. And we'll come down and we'll look at tritanopia. The colors, especially for the tent, have undergone a rather radical change. A user with tritanopia can't distinguish between blue and yellow. This explains why the yellow tent is suddenly red. Let's try one more. Achromatopsia.
>
> **[3:07](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-adee-s-color-blindness-simulator?u=76281980&t=187)** Well, our rather interesting image shifts over to gray scale. Users with this condition have a partial or total loss of color vision. They can't perceive color. They only see black and white and shades of gray. This begs the question, do you adjust your images to accommodate color blindness? Not really. That is something that should be determined before the design process gets underway. What awareness of how color blinds perceive our work, though, is invaluable. What it comes down to is this, colorblind users have difficulty with color tones. This could lead to a bunch of issues such as unreadable text, inconspicuous buttons, and so on. This is because colorblind users rely on luminance contrast to distinguish objects. Now there are a couple other little buttons here and generate will actually generate just this one and it'll add another frame and it'll add it up here. And you could generate all of them if you wish, and you just get a whole pile of them. And again, that is up to you. If you want to include it with the project, feel free, and you might want to point this out to the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the team, that there are people that will have issues, and here's one issue I think we really should be aware of, and show it to them. So there you have it, colorblind mode in Adee.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Definitions:** is a  (4)
> **UI Navigation:** open the (2), select the (1)
> **Warnings:** be aware (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Checking touch sizes](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/checking-touch-sizes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/checking-touch-sizes?u=76281980&t=0)** - [Instructor] We have all had this experience. You open an app on your [Android](../../Glossary/Sdk/Android.md) or iOS device and when you touch a button, nothing happens. Or God forbid you're taken to a screen you didn't expect. Here's another scenario. You open a webpage and the buttons are so small you need to [Zoom](../../Skills/Software%20Development/Zoom.md) in to click them. For us, an annoyance, for those with visual and physical disabilities, it is much more than an annoyance. They essentially have no access to the information. The issue, the size of the touch area, whether it be the element itself or of an interactive overlay to increase the target size may be an issue. Adee has a solution for that. And to take a look at it, open the AdeeTouchTarget.fig file, found in your chapter download, and launch the Adee Touch Size Checker. Before we dig into a device, let's deal with buttons. To meet the WCAG standard, they need to be a minimum of 44 pixels on the height or the width, depending on the button shape. this can easily be accomplished thanks to the extra space in a webpage by simply increasing the size of the button. In the case of links, one could add an interactive overlay. In either case, those with a physical impairment can easily fire a button. Devices are a whole different category. There is no mouse. It is replaced with fingers or an assistive device. As well, there is no WCAG standard for touch devices
>
> **[1:39](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/checking-touch-sizes?u=76281980&t=99)** other than suggesting a 44 pixel minimum size. In this case, the standard is left to the operating system and even then when it comes to Android, it is the wild west. So let's see how we can deal with this issue using the Adee Touch Size Checker. So to get yourself started, open the AdeeTouchTarget.fig file found in your chapter download and launch Adee. And what we're going to do is to select a device.
>
> **[2:12](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/checking-touch-sizes?u=76281980&t=132)** And we'll deal with, say the iPhone Pro Max. And as you can see, these are just generic devices. Now, if you close this and select Advanced Mode and then select, you've got a phenomenal number of devices to choose from. So let's go with an Apple iPhone 8 with iOS 11. And if we select the boat, you can see it kind of fails on the Apple iPhone 8. As you can see, those are the sizes that it is and these are the minimum. So I need to explain these. And by the way, the only way you're going to be able to fix this is to adjust the size in the Properties panel. So the suggested sizes are 100 pixels for Apple, 49 for Android, 64 for Nielsen, and the WCAG standard is 74 pixels. So what's with all these different numbers? Well, these two here use different ways of operating. This assumes it is a 2X resolution. So if you divide that 100 pixels by half, you're going to come into compliance with Android.
>
> **[3:48](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/checking-touch-sizes?u=76281980&t=228)** Nielsen is a little bit different. It converts inches and millimeters to pixels. And the WCAG standard may seem a little odd, but what it is using are CSS device pixels. These are all differing measures, but Adee brings it back to pixels. So what's the takeaway from this exercise? big buttons and target areas on webpages, bigger buttons or touch areas on devices. And if you tell people that a button doesn't work, you can generate a report and it will attach it to the file. So there you go, touch targets inside of Adee.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Android](../../Glossary/Sdk/Android.md) (4), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **Code Identifiers:** iphone (3), ios (2)
> **Env Vars:** wcag (4), css (1)
> **UI Navigation:** open the (2), select the (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 3. Contrast Checkers

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing Able and Ally](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/installing-able-and-ally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/installing-able-and-ally?u=76281980&t=0)** - [Instructor] There will be occasions where the accessibility suites of [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) and AD may be just a bit too much. In these instances, having a tool that does one thing exceedingly well may be all you need. This is where the free Able and A11y plugins just might be all you need. Able and A11y are both designed to work with color contrast when it comes to text, where they differ is Able works with elements such as buttons, whereas A11y works with entire screens. As an added bonus, Able allows you to preview various colorblindness conditions as they relate to the selected elements. So let's look at where you can grab both of them because A11y is a little bit different. So you got to go through this. So we're going to go to plugins, manage plugins, and we're going to come here, so might as well work here. And we'll for look Able. And there it is, friction-free accessibility, and it opens up, and we're going to look for A11Y. Now, it's not what you think it is, so pay close attention to what I'm doing here. It's a different name, capital A, the number one, the number one, Y, and there it is. And by the way, this contrast checker comes from [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md).
>
> **[1:38](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/installing-able-and-ally?u=76281980&t=98)** So just keep in mind, they both do the same thing, they just do it a bit differently. Which to choose? Up to you. And we'll start with Able.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** a11y (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Checking color contrast with Able](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/checking-color-contrast-with-able?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/checking-color-contrast-with-able?u=76281980&t=0)** - [Instructor] In this exercise, we're going to use the Able Contrast Checker. To get yourself started, open the able.fig file found in your chapter download. And when it opens, you will see three buttons with contrast that is obviously not acceptable. And if we come over here to the Layers panel, you can see the button is loose layers right here, a group and a component. I have done this to explain how the component works with how a button may be created. The most dangerous one is the component. Change the contrast, and that change ripples through every screen that uses the component. Or if it's part of a design system, that change will ripple through every document using the design system. Thus, if it is a part of a design system, it is the wise designer who checks with the dev team before doing the check and making the change. So let's start with the Base and the CLICK layers down here, the loose layers. And let's open Able. And we can see that there is a comparison. So we've got a contrast ratio up here. It's failed on large text and it's failed on small text. And if you're looking for guidelines, you can click this,
>
> **[1:34](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/checking-color-contrast-with-able?u=76281980&t=94)** and you'll be given some information on what they are. Down here is a preview that shows you what it looks like with small text and large text. Though there is no failure with the contrast ratio, that value will get larger as the contrast moves into acceptable territory. So let's start with the text color. So we'll choose the text color, and you're going to do it over here in the panel. And let's move it up into compliance. And as you can see, as you change, not only does the ratio increase, which is good, this is a good thing, it should be basically 3:1 here, but on small text, it fails. But that's not a big deal, simply because of the fact this isn't small text. Now, down here is something really interesting. We can actually see what our contrast would look like based upon various vision impairments. We have no green, ooh. Weak blue. Well, that's okay. Low color.
>
> **[3:09](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/checking-color-contrast-with-able?u=76281980&t=189)** And by the way, these numbers are the percentage of the blind population. So if we've got weak red, this button is going to really change color. So there you have it, using the Able Color Contrast Checker. It does one thing and one thing only exceedingly well.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **Env Vars:** click (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Checking color contrast with Ally](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/checking-color-contrast-with-ally?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/checking-color-contrast-with-ally?u=76281980&t=1)** - [Instructor] As you saw in the previous exercise, Able is a granular approach to solving potential contrast issues when it comes to interface elements such as components and buttons and things like that. Ally from [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) approaches this on a more global scale by examining the frame and presenting the issues. So let's find out, and to get yourself started open the ally.fig file found in your chapter download. And then, we're going to load up the Ally plugin, and I guess we better go at it. And remember it's A-1-1-Y and there's the contrast checker, and it opens up. Now I'm going to move the image over just a little bit here. So the first thing it's going to do it's going to ask you to select a frame, not an item, but a frame. And they'll go through all the visible text objects to see if everything is in compliance. So we're going to select original, click check, and we have a problem. We have four errors. Now again, the contrast ratio has to be a little bit higher, and if you scroll through them, you'll see that a couple of them pass the AA standard, but a couple of them don't. So let's deal with this one that doesn't.
>
> **[1:36](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/checking-color-contrast-with-ally?u=76281980&t=96)** So let's change the contrast, and you can see it's this button over here, and this one fails miserably, so let's change the background.
>
> **[1:53](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/checking-color-contrast-with-ally?u=76281980&t=113)** Now at this point, you can accept or reject the change by clicking the reset button. If you reset, it just goes back to its original state, see? So we'll just bump the text up a little bit more to bring it into compliance. There we go. And when you click done, the change has been applied. So there you have it, a global approach to dealing with color contrast and accessibility.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **CLI Commands:** find (1)
> **Cross-References:** as you saw (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 4. Humaaans

[↑ Back to Table of Contents](#table-of-contents)

#### [Inclusion](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/inclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/inclusion?u=76281980&t=0)** - Before we dig into [Figma](../../Skills/Web%20Development/Figma%20(Software).md), I am pretty sure inclusion is not something you expected to see in this course. Let me explain. As UX designers, we tend to overlook this subject. But it creates accessibility issues because many users may not be able to relate to the project and move on. How many of you, for example, include those confined to wheelchairs, seniors, or other people from other cultures in your personas? How many of your projects include a version in other languages? These people are all potential users and their different ways of accessing your content or perceiving it need to be at least accommodated or considered before a single pixel is lit up. Let me tell you a story about that. Being Canadian, my US friends always find it amusing that all of our packaging, such as ice cream cone boxes that you see here, are in French and English. What they don't understand is that Canada has two official languages, French and English. As such, federal law requires those two languages be used. What my US friends also don't understand is there are two versions of French. Classic French, sometimes referred to as Parisian and Quebec French, which in many respects has more to do with history and dialect than anything else. The differences between the two versions are subtle,
>
> **[1:37](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/inclusion?u=76281980&t=97)** but they are there. How many of you have looked at your applications or website [Statistics](../../Skills/Data%20Science/Statistics.md) to see where your visitors are coming from? Now let me ask you a question. Are you speaking to them in their language and including them in your story? Most likely not. But you just might want to. Think about that for a moment. If I were to ignore the two official languages in Canada and only use English, I have cut off 21% of the Canadian population who only speak French. In the US, you will have cut off 13% of the Spanish speaking population. And there is another trend that is rising in Canada, and I suspect elsewhere as well. 12% of the Canadian population speak a language other than French or English at home. Our world is becoming more and more diverse and we need to consider how to accommodate those segments of our potential markets. As such, we're going to be looking at a few Figma plugins that will allow you to explore inclusion. We'll be looking at a plugin, Humaaans, that gives us the opportunity to build characters reflecting disability and diversity. These figures are ideal for onboarding sequences. We'll look at creating a persona,
>
> **[3:09](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/inclusion?u=76281980&t=189)** using a plugin that lets you include people from various cultures. We'll walk through a rather neat translation plugin, Lokalise, and learn how to accommodate Canadian users. And we'll wrap up with a review of [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md)'s inclusion efforts. And then we're going to look at a rather interesting inclusion plugin that will challenge the entire UX team. So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (2), [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Tools:** figma (2)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** find (1)
> **Speakers:** - before (1)

#### [Using Humaaans with Figma](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-humaaans-with-figma?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-humaaans-with-figma?u=76281980&t=0)** - [Instructor] Finding diverse and inclusive line art for onboarding sequences or other uses, well, that's usually an issue. Ah, but there is a solution, "Humaaans" from Pablo Stanley. This royalty-free collection of bits and pieces of inclusive line art opens up a significant number of creative opportunities, and this collection is available as a plugin for [Figma](../../Skills/Web%20Development/Figma%20(Software).md). Or, if you come to this page, you can download a collection of line art images and templates, and there's quite a bit you can do with this. So if I just scroll through it, you can see there's a lot you can do with this application. In fact, we're going to be using one of these templates in the next exercise, so we'll get into Figma right now. So let's shift over to Figma. And what you do is you install the Humaaans plugin right there, it's Humaaans for Figma, not by Iconduck. And the reason I suspect it's three As in there, is because the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) humans probably was already taken as a domain. Somebody probably had two As in humans, and Pablo managed to get three. Now, if you want to work along with me, feel free to install Humaaans and when it installs, open it in the Humaaans.fig file
>
> **[1:36](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-humaaans-with-figma?u=76281980&t=96)** found in your chapter download. And if we scroll through the number of items that are available to us, it really is quite extensive. You've got a whole bunch of people, but you can also build your own people. And you can even put them in scenes and backgrounds using these pieces. So how do you use this? Well, let's work with this guy. So we'll take the gentleman in the wheelchair, click it, and you can see it comes in in its own frame. So we'll just move him into the artboard, and I am going to pull 'em out of the frame and into Humaaans,
>
> **[2:28](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-humaaans-with-figma?u=76281980&t=148)** and I can get rid of this frame. Now these things are fully editable, and I'm just going to close this, because a couple of things you can do here. If I select my character, and I come to the selection colors over here, you can see all of the colors that are in this drawing. So you can change all of the colors, which is kind of difficult if you can't tell what's what. So what I do is I twirl it down, and I decide, okay, fine, I want to change his shirt color. And you can see the shirt is selected, and I'm going to change it to a red, and I have changed his shirt color. Okay, so this time we're going to build somebody. So I'm just going to take this guy and move him over.
>
> **[3:32](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-humaaans-with-figma?u=76281980&t=212)** Of course, it would help if it wasn't locked. I'm just going to move him over there, and let's build a person. So again, we're going to take the Humaaans,
>
> **[3:51](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-humaaans-with-figma?u=76281980&t=231)** and we'll come down to the people bits, and I like that one.
>
> **[4:04](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-humaaans-with-figma?u=76281980&t=244)** And let's give her some pants.
>
> **[4:14](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-humaaans-with-figma?u=76281980&t=254)** And I think these will be fine.
>
> **[4:23](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-humaaans-with-figma?u=76281980&t=263)** And again, we'll just take this and move it in and get rid of these two frames, 'cause we don't need them. And she, of course, probably needs a head. So let's move these two symbols down so we can find a head.
>
> **[4:58](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-humaaans-with-figma?u=76281980&t=298)** And we'll use this head.
>
> **[5:07](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-humaaans-with-figma?u=76281980&t=307)** So we'll just drag it in, and we'll move her into position. And you notice it's just says Symbols, so we have to name them, and we'll just call it Head, Body, Body, Legs, and we'll group them, and we'll call it Woman. And let's resize to fit, so we can get her on the screen. So I've got the selection tool, and with the shift key held down, I'm just going to scale her up. And now we've just got to adjust a few things on the Woman group.
>
> **[6:17](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-humaaans-with-figma?u=76281980&t=377)** So obviously, I've named these wrong, so this is the legs,
>
> **[6:27](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/using-humaaans-with-figma?u=76281980&t=387)** and this is the body, and there you have it, a diverse illustration created using Humaaans.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (4), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Tools:** figma (4)
> **Prerequisites:** install (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Create an onboarding frame](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/create-an-onboarding-frame?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/create-an-onboarding-frame?u=76281980&t=0)** - [Instructor] In this exercise, we are going to create an interactive onboarding sequence using a template that I downloaded from Pablo Stanley's Humaaans site that we saw in the previous exercise. And when the file opens, you'll see three art boards with pagination. So the plan here is to create an onboarding sequence using a pre-designed illustration. So let's get started. So the first thing I want to do is open up Humaaans, and I'm going to add this guy right here to art board number two.
>
> **[0:46](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/create-an-onboarding-frame?u=76281980&t=46)** And we'll get rid of the frame and let's just put him into position.
>
> **[0:59](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/create-an-onboarding-frame?u=76281980&t=59)** And everybody seems to be walking this way, so we're going to change him to the other direction. And that's easily done by using Shift + H on either the Mac or the PC, and you see it just shifts it horizontally. So he's in place. And then we come over to Stroll and we're going to build a character. Let's find a body. And again, this is going to go into art board number three, so we're just going to pull it in.
>
> **[1:51](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/create-an-onboarding-frame?u=76281980&t=111)** Yeah, we'll just pull her over to art board number three.
>
> **[2:03](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/create-an-onboarding-frame?u=76281980&t=123)** And we obviously need a head. I think we'll have this guy in a red coat And into frame three.
>
> **[2:22](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/create-an-onboarding-frame?u=76281980&t=142)** And really should have some pants.
>
> **[2:32](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/create-an-onboarding-frame?u=76281980&t=152)** And we'll just move it into frame three,
>
> **[2:42](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/create-an-onboarding-frame?u=76281980&t=162)** move it into position. And I'm going to call this one Pants. This is the head, and this is the body. And of course, the pants need to go below the body and we can get rid of the frame, and the head should be behind the body as well. There we go. And if I [Zoom](../../Skills/Software%20Development/Zoom.md) out, I can just go move 'em into position.
>
> **[3:44](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/create-an-onboarding-frame?u=76281980&t=224)** And what we have done, using a Pablo Stanley template, is to create an onboarding sequence, which you can then wire up using a prototype and it's reflecting [Diversity and Inclusion](../../Skills/Software%20Development/Diversity%20and%20Inclusion.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (1), [Diversity and Inclusion](../../Skills/Software%20Development/Diversity%20and%20Inclusion.md) (1)
> **Exercise Files:** template (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Persona](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/persona?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/persona?u=76281980&t=0)** - [Instructor] I'm going to start by asking a simple question. How many of you include people from a variety of backgrounds, ethnicities, or with disabilities in your personas? This is not meant to make you uncomfortable. Instead, it is to make you aware of the fact our populations are becoming diverse and our work is available to a global audience. If your usage [Statistics](../../Skills/Data%20Science/Statistics.md) include a large enough segment involving individuals from countries that speak Spanish, Portuguese, or from non-Western cultures such as Arabic or Indian, you might want to consider reflecting them in your personas in order to make the UX team aware of these cultural differences. The key [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) here is aware, and it could be something as simple as including them in a persona. To see what I'm talking about, open the persona.fig file found in your chapter download. You will also need to download a copy of the photos plugin. And with that out of the way, let's get started. Now, the photos plugin, if you do a search,
>
> **[1:24](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/persona?u=76281980&t=84)** it's right here, okay? So you can just load it up. Now, here's why I like using photos. A common one is UI faces, and I'm not seeing a lot of diversity here other than hair color, gender, and emotion.
>
> **[1:54](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/persona?u=76281980&t=114)** Photos goes out into the web, searches a bunch of sites for exactly what you're looking for. So let's assume you wish to make the crew aware of an Indian woman, and her name is Jostnya. So we're going to have to change your name. And she comes from Mumbai, India.
>
> **[2:24](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/persona?u=76281980&t=144)** Obviously, we need to provide context to the name Jostnya, and a photo will fit the bill. At that point, we've got the photos plugin open and we could get away with assuming that the photo you see is indeed Jostnya, but it really does not reflect Jostnya coming from India. So I'm going to select the image and I'm going to search for Indian woman.
>
> **[3:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/persona?u=76281980&t=180)** Having searched for Indian woman through all these sites, I can now scroll through and find something that's a little more relevant and makes the point. And I think this one will work. So I'm going to select the frame, click on the image, and there she is. Now, let's do a little bit more inclusion. Let's search for South African Male. Let's search for South African Male. And again, but you see that you get suddenly get all kinds of images of potential South African males that you can use for your personas. Let's try Arab woman. And again, there's your diversity, folks, and your inclusion. One more, how about disabled?
>
> **[4:13](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/persona?u=76281980&t=253)** And again, you get the choices that you can make. So there you go, a rather easy way to make your personas more diverse and inclusive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (6), find (1)
> **UI Navigation:** select the (2), open the (1), click on (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 5. Lokalise

[↑ Back to Table of Contents](#table-of-contents)

#### [An overview of Lokalise](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/an-overview-of-lokalise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/an-overview-of-lokalise?u=76281980&t=0)** - [Presenter] As a Canadian, I always find it amusing that my US colleagues are fascinated with the fact that cereal boxes are in both French and English. This is due to a Canadian law that establishes we have two official languages, French and English. The reasons are both historical and pragmatic. Canada was a major source of furs and other items in the 1600s. The traders and explorers who were involved were primarily from France and England. On the pragmatic side, one of Canada's major provinces, Quebec, is primarily French-speaking. As a result of this law, French and English versions of everything from Cornflake packages to apps must have both French and English versions, which brings me to the topic of this chapter, localization. If your market includes a significant population of non-English speakers, it only makes sense to provide Localize versions of your work. This is where Localize comes in. It will translate your text into a variety of languages, right into [Figma](../../Skills/Web%20Development/Figma%20(Software).md). I need to warn you. Translation is a tricky subject and you would be wise to have your translator check it out for accuracy before releasing the project. Even so, the value of Localize is not only the translation, but you also get to see the translation on the screen and be able to make the necessary adjustments
>
> **[1:37](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/an-overview-of-lokalise?u=76281980&t=97)** to the text area containing the translation. And if you're on the site, you can see that there's all kinds of benefits here for developers, so if we scroll down here, it tells you everything that you can use as a developer, which is pretty cool, and I really like this. And if I go back, there are resources for designers. So we can see those. And you notice there's a sketch plugin, a Figma plugin, which I will be getting into in the next exercise and a few other things, and if you are an XD user, there's also a plugin for XD. Now, before you use Localize, you need to know it is a subscription service and I'm just going to open up the lineup here. So that means to use Localize in Figma, you need to have a Localize account, but if you intend to add Localize to your lineup, you will need a paid account, which has monthly pricing tailored to use and size. With that out of the way, let's figure out how this thing works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (3)
> **Tools:** figma (3)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [presenter] (1)

#### [Changing text to French](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/changing-text-to-french?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/changing-text-to-french?u=76281980&t=0)** - [Instructor] In this demonstration, I'm not going to be going through all of the features of the localized plugin. They are deep and indulgent and include, among others, the ability to add your team and the ability to add multiple translations to your project. What I am going to do is walk through how the text you see here will be translated to Canadian French, right on the [Figma](../../Skills/Web%20Development/Figma%20(Software).md) artboard. For those of you that do have a free account, if you want to work along with me, open the localized.fig file found in your chapter download. The text I'm going to be working with is part of the script I narrated in the previous exercise. Just keep in mind, this project could be iOS, web, or [Android](../../Glossary/Sdk/Android.md) with buttons, text blocks, links, and so on. The beauty of Lokalise is it will translate the entire page. Notice the use of the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) page. The fundamental rule when working with Lokalise is one page, one language. With that out of the way, let's get started. So the first step in the process, of course, is to launch the localized plugin, and it's going to ask you to connect to your Lokalise account. My suggestion is be logged into Lokalise before you come here. This will make it a whole lot smoother. So I'm going to connect to my Lokalise account,
>
> **[1:33](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/changing-text-to-french?u=76281980&t=93)** and it says it wants to access. I'm going to allow access, and I can go back to Figma. And this dialog box opens up. All Lokalise projects require a file name, and I'm going to use Figma Translate. That's the name that will be used in the Lokalise dashboard. The next thing you want to do is set the language, the base language, that's the language you are working from. In this case, of course, I'm working from English, so I'm going to leave it there. By the way, you can also include a team from Lokalise in this section here. So I'm going to ignore iOS and going to select Web, and you need to have a key. This is how Figma and Lokalise connect to each other. So I'm going to roll down here, and we'll just use Element_text. And I've done that, and I'm going to finish set-up, and another dialogue box opens up, and I'm going to select the text here, and you can see it shows up. Now you notice right here, the key is grayed out. Just keep that in mind, because it's important. So you click Export, and it gives you some options
>
> **[3:08](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/changing-text-to-french?u=76281980&t=188)** that you can take advantage of. Nothing here that concerns us. Click export. And this is where you're going to get tripped up. You would think that all you have to do is click on this big blue button to return to Figma, and the translation will be there. No, it won't. Your next step is to click Open Lokalise. And this is the Lokalise interface that you're going to be working with. So, because I'm using French (Canadian), it's just going to be bilingual, and I'm going to set the language. And check out the languages that this application translates to as I scroll through.
>
> **[4:03](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/changing-text-to-french?u=76281980&t=243)** And I'll just speed it up a bit here, 'cause I want to find French Canadian. And there it is. I'm going to add that language. And we're going from English to English, no, we're going from English to French. So you see you've added that language to the pop down. So if you wanted to do French, English, Portuguese, Spanish, Italian, they'd all appear in here, so I'm just going to use French (Canada). So, where did it go? You would think there would be a translation in here. Well, it's going to show up in here. What you do to get your translation is you click this word here, empty. And if you scroll through the various translations, it kicks out. It can kick out with a number of translation services, but I'm going to use the AI translate, the Lokalise AI. Now to add this text, all you do is click on it, and there it is. And you click Save. Okay, back to Figma. Now we can return to the main page, and you notice that key is lit up. Okay, so what you want to do is create a copy, 'cause remember, it's going to give you a separate page. And this is another place where you can get tripped up. You want a separate page, so you create page with languages,
>
> **[5:41](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/changing-text-to-french?u=76281980&t=341)** and there's my French (Canada), and I click Create, and you can see, there it is there. So I'm going to close this, select that, and there we go. Now, what really caught my eye was the correct use of the accents. And if you take a look at this word here, commerçants it's got the cédille. Finally, you may think this is a lot of work to create a simple translation. Instead, you need to put this into context. In many instances, the text will be sent to a translation service, and we'll say, a week or so later, it arrives. The translation gets flowed into Figma, and the odds are pretty good accents and special characters will have to be manually added and submitted back to the translators for approval. So let's assume the process from sending for translation to getting the final approval takes another two days. I did the whole thing in less than 10 minutes. Now here's the really neat thing about Lokalise. If your translation service has access to your Lokalise account, they can edit, in this case, the French write in Lokalise. At this point, you just reflow the edited text into Figma and move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (8), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [Android](../../Glossary/Sdk/Android.md) (1)
> **Tools:** figma (8)
> **UI Navigation:** click on (2), open the (1), select the (1)
> **CLI Commands:** make (1), find (1)
> **Code Identifiers:** ios (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Best Practices:** the key is (1)


### 6. Inclusivity Sources

[↑ Back to Table of Contents](#table-of-contents)

#### [An overview of inclusive design in Microsoft](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/an-overview-of-inclusive-design-by-microsoft?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/an-overview-of-inclusive-design-by-microsoft?u=76281980&t=0)** - [Instructor] As you may have gathered from this section of the course, inclusion is the other half of accessibility, and inclusion is not exactly top of mind when it comes to accessibility. The problem with overlooking inclusion and even diversity is you run a real risk of losing a valuable market segment because they feel excluded. A personal example of what I'm talking about is I am constantly being bombarded with recruiting opportunities on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md), and when I check out the company that is bombarding me and its executives, I never see my cohort. I should tell you I am north of 50/ Or there are very few women in the lineup. This is not to shame anyone, but you need to start thinking about inclusion, and you're probably wondering where to start. This is a great starting point, the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Inclusive Design Principles, and they're pretty clear that exclusion will happen unless product creators learn from people with disabilities, apply insights to product creation, and extend benefits across a broad range of people. In many respects, it is a tremendous summary of the intent of this section. So let's take a quick look at the site. If we scroll down, you can see the principles in action,
>
> **[1:35](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/an-overview-of-inclusive-design-by-microsoft?u=76281980&t=95)** and then they give you some tools. And there are three PDF guides here that you might want to download and share with your team. The Inclusive 100 Guidebook walks you through why inclusion and diversity has to be a part of everyday work. The Cognition Guidebook explains how people process information differently, and for me, the important one is the Pursuit of Inclusive [Artificial Intelligence](../../Topics/Artificial%20Intelligence%20(AI).md). Bias is a huge issue when it comes to AO, and this guide explains what Microsoft is doing to mitigate it. Further down are a series of documents that deal with the specifics. The activity cards are interesting, but I'm going to show you a game that's just as good as these cards. And finally, at the bottom of the page is this collection of 12 inclusivity videos produced by Microsoft. I suggest the first three should be required viewing for all members of your team. Their purpose is not to tell you what you have to do. They support the intent of this part of the course to increase your awareness of inclusivity. Having said that, inclusivity and accessibility are now inseparable. Inclusivity is no longer a nice-to-have feature. It is a must-have.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1)
> **Definitions:** is a  (4)
> **Env Vars:** pdf (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Cards for Humanity](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/cards-for-humanity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/cards-for-humanity?u=76281980&t=0)** - [Instructor] In this exercise, we're going to take a quick look at a [Figma](../../Skills/Web%20Development/Figma%20(Software).md) plugin that is a lot of fun, but also forces your team to consider solutions around adding inclusivity to your work. The plugin you want to search for is called "Cards For Humanity." Right down here. And when it opens, this is what you see. Now, you don't have to have anything open other than a blank document in Figma, and it kind of tells you how it works. You're going to get a person and a trait and you're going to work out how to meet their needs. And they are going to be random cards, and you and your team are going to figure out how to solve the issue. So I'm going to deal the cards. So, Kristyn likes to plan everything in advance, but does not like speaking on the phone. Now, if you don't like this scenario, okay, fine deal a new pair. Well, Lashanda is excitable and has a sprained ankle. How would you deal with her? Now the other thing you can do is swap this card. And you can swap this card, so you don't have to get a new pair. And here's a great example. So Pedro, age 90, is meticulous and has dementia. So the question is, how would you accommodate Pedro with your app or webpage?
>
> **[1:34](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/cards-for-humanity?u=76281980&t=94)** There are a couple of clues, of course. His age might indicate a minor cognition issue. Dementia is one of them. He is not physically disabled, but he may have sight issues. On top of that, you could make the assumption that Spanish, Portuguese, or French are one of his native languages. So right off the bat, small text may be an issue on a smartphone or tablet. And you might want to consider offering localized versions of the project. Now, I did this really quickly, but rather than do what I did and come up with a quick solution, my advice is to really dig into it from the perspective of how would this affect a project? Is it important? Are there other ways of including Pedro? My final bit of advice regarding this game is "Cards For Humanity" is best played either just before or during the creation of the personas. There is nothing worse than making major changes during the design phase of a project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (2)
> **Tools:** figma (2)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### Taking Accessibilty and Inclusivity Forward

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps for accessible, inclusive design](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/next-steps-for-accessible-inclusive-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-and-inclusion-with-figma/next-steps-for-accessible-inclusive-design?u=76281980&t=0)** - [Tom] Well, here we are at the end of the course, and you may be wondering, "Where can I get some further learning around the topics you've covered?' Well, here at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, we have one of the top accessibility experts in the world, as far as I'm concerned, Derek Featherstone, who has done several courses for us, and my suggestion is [UX Foundations- Accessibility](UX%20Foundations-%20Accessibility.md) and [Accessibility for Web Design](Accessibility%20for%20Web%20Design.md). Both are tremendous courses. As for [Diversity and Inclusion](../../Skills/Software%20Development/Diversity%20and%20Inclusion.md), Dereca Blackmon's Foundations of Diversity, Equity, Inclusion, and Belonging is a great place to start. I would also be remiss in not suggesting you bookmark the Web Content Accessibility Guidelines. They will guide you in your work, and they will keep you current with the standards as they change, and they change constantly. And finally, of course, the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Inclusive Design site. I think it is a tremendous resource for becoming sensitive to inclusivity and diversity in our work. And I'm going to end this with a question. Are you now more aware of accessibility and inclusivity after taking this course? If your answer is yes, I have done my job, and I thank you for your time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Web Design](../../Skills/Web%20Development/Web%20Design.md) (1), [Diversity and Inclusion](../../Skills/Software%20Development/Diversity%20and%20Inclusion.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Definitions:** is a  (2)
> **Speakers:** - [tom] (1)


## Instructor

- [Tom Green](../../Instructors/Web%20Development/Tom%20Green.md)

## Resources

- Exercise files available

## Skills Covered

- Digital Accessibility
- Figma (Software)

## Path Context

### In [Build for Digital Accessibility](../../Paths/Web%20Development/Learning%20Paths/Build%20for%20Digital%20Accessibility.md)
← [Advanced Accessible PDFs](Advanced%20Accessible%20PDFs.md) | **4 of 12** | [Designing Accessible Components In Figma](Designing%20Accessible%20Components%20In%20Figma.md) →

### In [Design User Experiences with Figma](../../Paths/Web%20Development/Learning%20Paths/Design%20User%20Experiences%20with%20Figma.md)
← [UX Foundations- Prototyping](UX%20Foundations-%20Prototyping.md) | **3 of 6** | [Figma- Designing with Variables and Conditionals](Figma-%20Designing%20with%20Variables%20and%20Conditionals.md) →

## Appears In

- [Build for Digital Accessibility](../../Paths/Web%20Development/Learning%20Paths/Build%20for%20Digital%20Accessibility.md)
- [Design User Experiences with Figma](../../Paths/Web%20Development/Learning%20Paths/Design%20User%20Experiences%20with%20Figma.md)

## Related Courses

_Courses sharing skills:_

- [WordPress- Accessibility](WordPress-%20Accessibility.md) — Digital Accessibility
- [Lo-Fi to Hi-Fi- Prototyping in Figma](Lo-Fi%20to%20Hi-Fi-%20Prototyping%20in%20Figma.md) — Figma (Software)
- [Figma for UX Research- Presentations that Stand Out](Figma%20for%20UX%20Research-%20Presentations%20that%20Stand%20Out.md) — Figma (Software)
- [Auditing Design Systems for Accessibility](Auditing%20Design%20Systems%20for%20Accessibility.md) — Digital Accessibility
- [Using Stark for Accessible Design Projects](Using%20Stark%20for%20Accessible%20Design%20Projects.md) — Digital Accessibility

---

[↑ Back to top](#)