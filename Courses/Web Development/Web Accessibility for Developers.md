---
type: course
cssclasses:
  - lle-course
slug: web-accessibility-for-developers
url: "https://www.linkedin.com/learning/web-accessibility-for-developers"
duration_minutes: 55
duration: 55m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHoOSvIxsvTbA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1720454573295?e=2147483647&amp;v=beta&amp;t=50aAGLLWkOEq4jS3Y2SdycLbZcNhxcbSrM_fRpJaOtk"
linkedin_topic: Web Development
learning_paths:
  - '[[Prepare for Digital Accessibility]]'
prev_courses:
  - '[[Accessibility for Web Design]]'
next_courses:
  - '[[Architectural Design- The WE Way for Workplace Inclusivity]]'
path_nav: '[{"path":"Prepare for Digital Accessibility","position":4,"total":8,"prev":"Accessibility for Web Design","next":"Architectural Design- The WE Way for Workplace Inclusivity"}]'
path_count: 1
tags:
  - course
  - topic/web-development
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Web%20Accessibility%20for%20Developers.md)

![Web Accessibility for Developers](https://media.licdn.com/dms/image/v2/D560DAQHoOSvIxsvTbA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1720454573295?e=2147483647&amp;v=beta&amp;t=50aAGLLWkOEq4jS3Y2SdycLbZcNhxcbSrM_fRpJaOtk)

# Web Accessibility for Developers

> Knowing how to design an accessible website is an essential skill for modern-day developers. This course dispels the mystery of web accessibility, demonstrates why accessibility matters, and shows you how to get started assessing, testing, triaging, and improving website accessibility.Join instructor Donia Robinson as she provides an overview of the Web Content Accessibility Guidelines (WCAG), par

> [LinkedIn Learning](https://www.linkedin.com/learning/web-accessibility-for-developers) | 55m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Take the mystery out of web accessibility](#take-the-mystery-out-of-web-accessibility)
  - [Why accessibility matters](#why-accessibility-matters)
- [**1. Accessibly Access a Website**](#1-accessibly-access-a-website) (2 videos)
  - [Your keyboard and computer](#your-keyboard-and-computer)
  - [NVDA and JAWS](#nvda-and-jaws)
- [**2. Understand Accessibility Standards**](#2-understand-accessibility-standards) (6 videos)
  - [Introduction to WCAG](#introduction-to-wcag)
  - [Perceivable](#perceivable)
  - [Operable](#operable)
  - [Understandable and robust](#understandable-and-robust)
  - [Challenge: Find information on WCAG](#challenge-find-information-on-wcag)
  - [Solution: Find information on WCAG](#solution-find-information-on-wcag)
- [**3. Accessibility Tools**](#3-accessibility-tools) (3 videos)
  - [Manual testing](#manual-testing)
  - [Automated testing](#automated-testing)
  - [Helper tools](#helper-tools)
- [**4. Test and Triage Accessibility Issues**](#4-test-and-triage-accessibility-issues) (6 videos)
  - [Identify conformance goals](#identify-conformance-goals)
  - [Do automated testing](#do-automated-testing)
  - [Do targeted manual testing](#do-targeted-manual-testing)
  - [Triage issues](#triage-issues)
  - [Challenge: Run axe on a website](#challenge-run-axe-on-a-website)
  - [Solution: Run axe on a website](#solution-run-axe-on-a-website)
- [**5. Repair and Test Accessibility Issues Again**](#5-repair-and-test-accessibility-issues-again) (2 videos)
  - [Repair accessibility issues](#repair-accessibility-issues)
  - [Retest after repairs](#retest-after-repairs)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Take the mystery out of web accessibility](https://www.linkedin.com/learning/web-accessibility-for-developers/take-the-mystery-out-of-web-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/take-the-mystery-out-of-web-accessibility?u=76281980&t=0)** - Have you been delving into the world of [[Web Accessibility]]?
>
> **[0:03](https://www.linkedin.com/learning/web-accessibility-for-developers/take-the-mystery-out-of-web-accessibility?u=76281980&t=3)** Heard terms like WCAG, ARIA, AXE, or JAWS?
>
> **[0:07](https://www.linkedin.com/learning/web-accessibility-for-developers/take-the-mystery-out-of-web-accessibility?u=76281980&t=7)** And been mildly confused or even utterly mystified?
>
> **[0:10](https://www.linkedin.com/learning/web-accessibility-for-developers/take-the-mystery-out-of-web-accessibility?u=76281980&t=10)** Not to worry.
>
> **[0:12](https://www.linkedin.com/learning/web-accessibility-for-developers/take-the-mystery-out-of-web-accessibility?u=76281980&t=12)** I designed this course to take the mystery out of web accessibility for developers.
>
> **[0:17](https://www.linkedin.com/learning/web-accessibility-for-developers/take-the-mystery-out-of-web-accessibility?u=76281980&t=17)** I'm Donia Robinson, a longtime builder of websites big and small.
>
> **[0:21](https://www.linkedin.com/learning/web-accessibility-for-developers/take-the-mystery-out-of-web-accessibility?u=76281980&t=21)** In this course, you'll learn just what it means to make a website accessible, how to test for it, and how to make some common repairs.
>
> **[0:29](https://www.linkedin.com/learning/web-accessibility-for-developers/take-the-mystery-out-of-web-accessibility?u=76281980&t=29)** When you're done, you'll be able to apply these methods to any site you're working on.
>
> **[0:33](https://www.linkedin.com/learning/web-accessibility-for-developers/take-the-mystery-out-of-web-accessibility?u=76281980&t=33)** Let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Accessibility]] (2)
> **Env Vars:** wcag (1), aria (1), axe (1), jaws (1)
> **CLI Commands:** make (2)
> **Speakers:** - have (1)

#### [Why accessibility matters](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=0)** - [Instructor] Before we dive in, let's first ask ourselves, why does [[Web Accessibility]] matter?
>
> **[0:05](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=5)** What does web accessibility even mean?
>
> **[0:08](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=8)** Who are the users that this impacts?
>
> **[0:10](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=10)** And what's at stake for website owners trying to navigate these issues?
>
> **[0:15](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=15)** In the physical world, we've watched many countries advance laws protecting the rights of people with disabilities.
>
> **[0:21](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=21)** For example, in 1990, the United States passed the Americans with Disabilities Act, the ADA.
>
> **[0:27](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=27)** These laws can ensure access to transportation in public locations, provide reasonable accommodations on the job, and more.
>
> **[0:35](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=35)** Then the internet entered the picture in a widespread way.
>
> **[0:38](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=38)** The internet was invented as a means of sharing information and has evolved into so much more.
>
> **[0:43](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=43)** It is yet another place to take care in ensuring equal access too.
>
> **[0:48](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=48)** But what exactly does that mean?
>
> **[0:51](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=51)** Information has been placed out on the internet and is available for access via web browser or user agent.
>
> **[0:57](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=57)** Browsers can be used by a broad population and are assistive in some ways to those with disabilities, but they don't provide a way to access all content, so some people use [[Hardware]] and software assistive devices.
>
> **[1:10](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=70)** These include screen readers, screen magnifiers, captioning, voice recognition, alternative keyboards, and alternative pointing devices.
>
> **[1:19](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=79)** This means that websites need to be developed with these devices in mind to ensure they receive all information from the websites.
>
> **[1:27](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=87)** Regardless of the number of people affected, this is a task worth pursuing, but the numbers might surprise you.
>
> **[1:34](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=94)** It is estimated that one in six people worldwide or approximately 1.3 billion people experience a significant disability.
>
> **[1:43](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=103)** This is no small number of people that may have an accessibility need on a website.
>
> **[1:48](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=108)** Add to that, that not all disabilities are permanent, so the estimate is a shifting number.
>
> **[1:53](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=113)** As you can see here, accessibility needs can be permanent, temporary, or situational.
>
> **[1:59](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=119)** We may think of accessibility needs as always being in the permanent column here, touch for example.
>
> **[2:05](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=125)** But perhaps as a new parent, you've found yourself with a baby in your arms and not able to type with both hands, or you had an ear infection and couldn't hear a video on your computer, so you turned on the closed captions.
>
> **[2:16](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=136)** These are situational and temporary accessibility needs, and are also helped out by our work on website accessibility.
>
> **[2:25](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=145)** So what does this mean for website owners?
>
> **[2:27](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=147)** Again, laws vary by country, but in the United States, the Department of Justice, DOJ, has stated that the ADA covers government and public business websites.
>
> **[2:37](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=157)** Web accessibility lawsuits under the ADA are on the rise.
>
> **[2:41](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=161)** Accessibility is not a nice to have or something that can be put off until the end.
>
> **[2:46](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=166)** It should be incorporated into every aspect of the [[Software Development]] lifecycle.
>
> **[2:51](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=171)** And yet, looking at the top million websites on the internet, only about 4% of them are considered fully accessible.
>
> **[2:58](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=178)** The websites that are not accessible contain many of the same issues.
>
> **[3:02](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=182)** One top issue is low contrast text, which we'll learn about and it's very easy to repair.
>
> **[3:08](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=188)** Another issue is missing alternative text for images, which we'll also see is very easy to repair.
>
> **[3:14](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=194)** Once you know how to check for these issues, and I'll show you how, it'll be easy to keep them out of your code base.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Accessibility]] (3), [[Hardware]] (1), [[Software Development]] (1)
> **Env Vars:** ada (3), doj (1)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** for example (2), picture (1)
> **Versions:** 1.3 (1)
> **Speakers:** - [instructor] (1)


### 1. Accessibly Access a Website

[↑ Back to Table of Contents](#table-of-contents)

#### [Your keyboard and computer](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=1)** - The first method for testing a website for accessibility issues is to visit like someone using assistive technology would, and we only need our keyboard and computer to do it.
>
> **[0:11](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=11)** Let's briefly navigate through a website, [binaryville.com](https://binaryville.com), using a mouse to get a feel for how the website functions.
>
> **[0:19](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=19)** We have a main image, a few icons in the upper right, and four menu items.
>
> **[0:24](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=24)** The whole site flows pretty naturally from top to bottom.
>
> **[0:29](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=29)** As a mouse user, if I wanted to visit, say the blog, I would move my cursor to the blog button and click it.
>
> **[0:35](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=35)** Now let's see how to navigate this same website without using a mouse.
>
> **[0:39](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=39)** I'll be demonstrating on a Mac, but similar functionality exists for [[Windows]]-based computers as well.
>
> **[0:45](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=45)** Check out the course handout for more information.
>
> **[0:48](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=48)** We'll be navigating this website using our keyboard, and our computer will read instructions to us.
>
> **[0:54](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=54)** On a Mac, this tool is called voiceover.
>
> **[0:57](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=57)** One way of turning on voiceover is to go to the magnifying glass in the upper right corner of our screen, type voiceover, and toggle the pill button on.
>
> **[1:08](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=68)** Instead of searching, we could also use Siri by saying, "Turn voiceover on."
>
> **[1:12](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=72)** A third method we could use is to press command, F5.
>
> **[1:16](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=76)** That's how I'm going to do it.
>
> **[1:18](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=78)** Note that it will immediately begin reading your current state to you.
>
> **[1:21](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=81)** This is not just for a web browser, but works anywhere on a Mac, here we go.
>
> **[1:26](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=86)** - [Narrator] Welcome to voiceover.
>
> **[1:28](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=88)** Voiceover speaks descriptions of items on the screen and can be used to control the computer using only your keyboard.
>
> **[1:35](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=95)** - [Narrator] Voiceover on Firefox, Binaryville, Binaryville window, Binaryville Web content, has keyboard focus.
>
> **[1:42](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=102)** You are currently on web content.
>
> **[1:43](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=103)** To enter the web area, press control, option shift, down arrow.
>
> **[1:47](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=107)** - [Instructor] Let's reload the page so voiceover thinks we just arrived at this page.
>
> **[1:51](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=111)** Voiceover is going to get chatty here.
>
> **[1:52](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=112)** So I'll first describe what will happen.
>
> **[1:55](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=115)** Voiceover will navigate through the page on its own unless we use a keyboard command or mouse press to stop it.
>
> **[2:01](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=121)** At each item that a web developer has set up accessibility interactions for or that has them built in naturally, we'll hear a description and options presented to us.
>
> **[2:10](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=130)** If this is done correctly, we have access to everything on the page.
>
> **[2:14](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=134)** If these are missing, then we don't, let's do it.
>
> **[2:19](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=139)** - [Narrator] Image, visited link image, home.
>
> **[2:22](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=142)** Heading level two, main navigation, list four items.
>
> **[2:25](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=145)** Visited link, about link, shop link, blog link, contact link, image, account link, image, shopping cart.
>
> **[2:33](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=153)** Heading level one, welcome to Binaryville.
>
> **[2:35](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=155)** Heading level two, merchandise.
>
> **[2:36](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=156)** Share your love of technology and spread link, image of Rex Rex.
>
> **[2:39](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=159)** List 14 items, you are currently on the link, to click this link, press control option space.
>
> **[2:46](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=166)** - [Instructor] Okay, I think that gives a good feel for how voiceover navigates through the page automatically.
>
> **[2:51](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=171)** We can also continue on manually using the tab key and choose from the options it gives us.
>
> **[2:56](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=176)** - [Narrator] Link, image of Dolores, Dolores.
>
> **[2:58](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=178)** Link, image of Bubbles, Bubbles.
>
> **[3:00](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=180)** Link, image of Fred, Fred, voiceover off.
>
> **[3:04](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=184)** - [Instructor] So that's voiceover.
>
> **[3:06](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=186)** There are also many other keyboard commands available.
>
> **[3:08](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=188)** I encourage you to check them out in the course handout to up your screen reader game.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1)
> **Speakers:** - [narrator] (4), - [instructor] (3), - the (1)
> **URLs:** [binaryville.com](https://binaryville.com) (1)
> **Tools:** firefox (1)
> **UI Navigation:** toggle (1)
> **Definitions:** is called (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)

#### [NVDA and JAWS](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=0)** - [Instructor] Though a lot of testing can be done using just voiceover on a Mac or narrator on [[Windows]], in reality, these are not the most commonly used tools out there.
>
> **[0:09](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=9)** Instead, there are more widely used screen readers developed by companies that specialize in [[Building Accessibility]] tools.
>
> **[0:15](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=15)** Let's look at two of them.
>
> **[0:16](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=16)** NVDA and JAWS.
>
> **[0:18](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=18)** NonVisual Desktop Access, or NVDA, is a free screen reader available for Windows PCs.
>
> **[0:25](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=25)** It can be used in web browsers, email clients, [[Microsoft Office|office]] programs, music players, and other programs.
>
> **[0:31](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=31)** It has been translated into over 50 languages.
>
> **[0:34](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=34)** According to user [[Statistics]] from the NV access server, there are an average of 47,000 users per day.
>
> **[0:41](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=41)** Let's dig into how NVDA is used.
>
> **[0:44](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=44)** To start using NVDA, a user would click Control+Alt+n.
>
> **[0:48](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=48)** Once NVDA is turned on, like we saw for voiceover, there are a number of keyboard shortcuts for commonly used navigation scenarios.
>
> **[0:55](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=55)** For navigating websites, here's a preview of some of the shortcuts available.
>
> **[0:59](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=59)** For example, pressing the letter h repeatedly would move focus from heading to heading on the page.
>
> **[1:05](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=65)** This is much like a visual user would scan the headings on a webpage.
>
> **[1:09](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=69)** This gives us a feel for how a nonvisual user might navigate our website.
>
> **[1:13](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=73)** For example, from heading level to heading level or link to link.
>
> **[1:17](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=77)** We definitely want to make sure those are set up properly so a screen reader operates correctly.
>
> **[1:22](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=82)** The world's most popular screen reader is Job Access With Speech or JAWS.
>
> **[1:27](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=87)** It is available for purchase from Freedom Scientific via a yearly or perpetual license.
>
> **[1:32](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=92)** It provides speech and braille output for many popular computer applications on a Windows PC.
>
> **[1:37](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=97)** It also has additional features like skim reading, text analyzer, and the ability to scan and read documents.
>
> **[1:44](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=104)** JAWS has several special modes for navigating websites.
>
> **[1:47](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=107)** The first is virtual cursor.
>
> **[1:49](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=109)** Like NVDA, there are navigation quick keys to move the virtual cursor between features of the page, such as links and headings.
>
> **[1:57](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=117)** In addition, users compress the arrow keys to read line by line, [[Microsoft Word|word]] by word, and character by character.
>
> **[2:04](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=124)** Another mode for navigating websites is [[Forms]] Mode.
>
> **[2:07](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=127)** The virtual cursor keyboard commands will not pass through to form fields on the page.
>
> **[2:11](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=131)** This protects users from unintentionally changing form field values.
>
> **[2:15](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=135)** Instead, another keyboard shortcut F allows a user to navigate between form fields.
>
> **[2:21](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=141)** In addition to these special modes, JAWS like other screen readers will honor all Accessible Rich Internet Applications, or ARIA, roles and attributes.
>
> **[2:31](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=151)** Adding ARIA support for a webpage, generally does not change the behavior and presentation of the webpage to visual users.
>
> **[2:38](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=158)** However, it is only as good as the context and information provided by the website maintainer.
>
> **[2:44](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=164)** Thus, it's important to carefully apply ARIA markup to all portions of your websites.
>
> **[2:49](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=169)** So all content is presented in a meaningful way to screen reader users.
>
> **[2:54](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=174)** So remember, while voiceover and narrator are free and provided by operating systems, NVDA and JAWS are more feature rich and much more widely used screen readers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Microsoft Word|Word]] (2), [[Microsoft Office|Office]] (1), [[Statistics]] (1), [[Forms]] (1)
> **Env Vars:** nvda (7), jaws (5), aria (3)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Understand Accessibility Standards

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to WCAG](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=1)** - A lot of people are intimidated by website accessibility because there is so much information, they don't know where to begin.
>
> **[0:08](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=8)** Luckily, you don't have to become an accessibility expert to build an accessible website thanks to WCAG.
>
> **[0:15](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=15)** Web Content Accessibility Guidelines or WCAG are recommendations for making web content more accessible to people with disabilities.
>
> **[0:23](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=23)** They're written by the [[Web Accessibility]] Initiative, WAI, of the Worldwide Web Consortium, W3C.
>
> **[0:31](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=31)** More specifically, continuous work is done by an accessibility guidelines working group to refine existing guidelines and create new guidelines.
>
> **[0:40](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=40)** So why would you want to use WCAG?
>
> **[0:42](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=42)** There are two ways to read this question.
>
> **[0:45](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=45)** The first is, why would we take these recommendations instead of just trying our own way of solving accessibility issues?
>
> **[0:52](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=52)** The answer to that is that countless hours and multiple iterations of guidelines have been contributed by accessibility experts to determine what best meets people's needs, as well as how to provide a solution.
>
> **[1:05](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=65)** In most cases, they've done the heavy lifting for us.
>
> **[1:08](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=68)** As you'll see, the recommendations are thoughtful and thorough, often providing information about why a guideline is necessary.
>
> **[1:16](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=76)** The second way to read this question is why make our website more accessible?
>
> **[1:20](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=80)** Like we discussed before, by following these recommendations, you'll make your website more accessible to people with a wide range of disabilities, such as blindness and low vision, deafness and hearing loss, and photosensitivity.
>
> **[1:34](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=94)** Individuals have diverse auditory, cognitive, physical, visual, and other abilities and barriers.
>
> **[1:41](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=101)** While following the Web Content Accessibility Guidelines will make your content more accessible, it will not address every user and every need.
>
> **[1:49](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=109)** It will address many of them though.
>
> **[1:51](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=111)** Additionally, following the guidelines will likely never have a negative impact on your site.
>
> **[1:56](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=116)** In fact, it can often have a net positive impact on other areas, such as improving SEO, by providing content-rich text and links that all users, including a search engine crawlers can easily use.
>
> **[2:08](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=128)** So what is WCAG?
>
> **[2:10](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=130)** WCAG is made up of four layers of guidance.
>
> **[2:13](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=133)** There are principles, guidelines, success criteria, and sufficient in advisory techniques.
>
> **[2:19](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=139)** Let's look at each layer.
>
> **[2:20](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=140)** The top layer made up of four accessibility principles: perceivable, operable, understandable, and robust.
>
> **[2:28](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=148)** The principles serve as general categories under which the other layers are organized for clarity.
>
> **[2:33](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=153)** In later videos, we'll dive deeper into the four principles.
>
> **[2:37](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=157)** The next layer under principles contains the 13 guidelines as of WCAG 2.2.
>
> **[2:42](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=162)** These provide authors with overall objectives to work toward.
>
> **[2:46](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=166)** Though guidelines are not testable, they provide general context and are meant to help authors better understand how to meet success criteria.
>
> **[2:54](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=174)** And success criteria make up the third layer.
>
> **[2:57](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=177)** The high-level guidelines are given testable success criteria so that conformance testing can be done on websites for regulations and contractual agreements.
>
> **[3:05](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=185)** Less formally, they can let you know if you've met your internal company or website goals.
>
> **[3:10](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=190)** There are three levels of conformance: A, which is the lowest, AA, and AAA, which is the highest.
>
> **[3:16](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=196)** We'll return to these later.
>
> **[3:19](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=199)** Finally, the fourth layer has sufficient techniques, advisory techniques, and documented common failures.
>
> **[3:25](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=205)** It also has examples, resource links, and code.
>
> **[3:28](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=208)** Sufficient techniques are reliable ways to meet the success criteria while advisory techniques are suggested ways.
>
> **[3:35](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=215)** Advisory techniques may be based on technology that is not yet stable or may not be testable.
>
> **[3:41](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=221)** It's important to note that techniques are informative.
>
> **[3:43](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=223)** The success criteria determine conformance, not the technique itself.
>
> **[3:48](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=228)** And then finally, documented failures show authors what to avoid or ways to evaluate if content does not meet WCAG success criteria.
>
> **[3:57](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=237)** Now that we have an overview of WCAG, let's dive in deeper to each of the principles, beginning with perceivable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Accessibility]] (1)
> **Env Vars:** wcag (8), wai (1), w3c (1), seo (1), aaa (1)
> **CLI Commands:** make (4)
> **Analogies:** such as (2)
> **Versions:** 2.2 (1)
> **Cross-References:** we discussed (1)
> **Documentation:** w3c (1)
> **Warnings:** note that (1)

#### [Perceivable](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=1)** - The first WCAG principle is perceivable, which states that information and user interface components must be presentable to users in ways they can perceive.
>
> **[0:11](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=11)** In general, this means that information should be perceivable in multiple ways because your users will be using different senses and tools for perception.
>
> **[0:20](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=20)** You can't just rely on, say, vision.
>
> **[0:22](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=22)** Let's look at a specific example, use of color.
>
> **[0:26](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=26)** The easiest way to access WCAG is to use the quick reference for How to Meet WCAG.
>
> **[0:32](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=32)** If you take away only one thing from this course, it should be this link because this is WCAG.
>
> **[0:38](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=38)** This has information on every requirement, success criteria, and technique.
>
> **[0:43](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=43)** Let's click on 1.4., Distinguishable, "Make it easier for users to see and hear content, including separating foreground from background."
>
> **[0:52](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=52)** This is one of those items that helps everyone and is critical when it comes to accessibility.
>
> **[0:58](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=58)** Let's dig deeper and look at 1.4.3., Contrast.
>
> **[1:02](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=62)** The visual presentation of text and images of text has a contrast ratio of at least 4.5:1.
>
> **[1:10](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=70)** Clicking show full description gives us more information about the requirement, if there is any.
>
> **[1:15](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=75)** Here we also get information about the exceptions.
>
> **[1:18](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=78)** Now, let's click show techniques and failures.
>
> **[1:22](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=82)** Under sufficient techniques, there are two sufficient techniques.
>
> **[1:26](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=86)** That means these are reliable ways to meet the success criteria.
>
> **[1:30](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=90)** In Situation A, if your text has a measurable contrast ratio of at least 4.5:1 between the text and background image, you'll meet the success criteria.
>
> **[1:39](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=99)** Here's where we get into the detailed and testable information.
>
> **[1:44](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=104)** Up until now, information has been pretty high level, but now this is testable.
>
> **[1:48](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=108)** That's going to come in really handy later.
>
> **[1:51](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=111)** Let's click on this link to learn even more.
>
> **[1:54](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=114)** If we scroll through this page, we see a lot of information, including rationale behind the requirement.
>
> **[2:00](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=120)** The implementation of accessibility recommendations gets more complicated as your design increases in complexity.
>
> **[2:07](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=127)** It can make even beginning an accessibility project feel daunting.
>
> **[2:11](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=131)** My recommendation is to just begin.
>
> **[2:14](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=134)** The development of a living site will never be finished, nor will its accessibility needs.
>
> **[2:20](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=140)** Any page you make improvements on increases the accessibility for someone, and that's a win.
>
> **[2:26](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=146)** Let's go back to the quick reference to look at the failure section for 1.4.3., Contrast.
>
> **[2:32](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=152)** Let's now click on this first failure.
>
> **[2:36](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=156)** An example of how this requirement could fail is, "due to specifying foreground colors without specifying background colors or vice versa."
>
> **[2:44](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=164)** We may develop and be used to the standard colors that user agents provide and occasionally forget to override them with custom styles.
>
> **[2:52](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=172)** Reading the description here, it tells us that, "individuals with low vision will find it much easier to see a webpage that has white text on a black background, and they may have set their user agent to present this contrast.
>
> **[3:05](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=185)** Many user agents make it possible for users to choose a preference about the foreground or background colors they would like to see without overriding all author-specified styles."
>
> **[3:15](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=195)** Like it goes on to say, unless you've specified both the foreground and background color, whether as text or images, you cannot guarantee the contrast will meet contrast requirements.
>
> **[3:26](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=206)** So this is specific information about how this could fail.
>
> **[3:30](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=210)** Color contrast is just one success criteria, but keep in mind that all information on websites should be presented in a way that adheres to the WCAG principle of perceivable.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (1)
> **Env Vars:** wcag (5)
> **Versions:** 1.4.3 (2), 4.5 (2), 1.4 (1)
> **UI Navigation:** click on (3)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - the (1)

#### [Operable](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=0)** - [Narrator] WCAG Principle number two is operable, which states that user interface components and navigation must be operable.
>
> **[0:07](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=7)** If any principle embodies the [[Microsoft Word|word]] accessible, it is operable.
>
> **[0:12](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=12)** It's basically letting us know that all parts of the site should be accessible by input devices, controllable regardless of the timing of events, and should be navigable.
>
> **[0:22](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=22)** Let's again take a look at a specific example, Focus Order.
>
> **[0:26](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=26)** Like before we'll go to the quick reference for how to meet WCAG.
>
> **[0:30](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=30)** Let's stop and look at 2.4 Navigable, Provide ways to help users navigate, find content, and determine where they are.
>
> **[0:38](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=38)** Focus order is 2.4.3, if a webpage can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.
>
> **[0:53](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=53)** That sounds like a lot of websites that get built, menu items in a row horizontally or vertically.
>
> **[0:59](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=59)** Content often has an order on the page left to right, top to bottom, in countries that read in that manner.
>
> **[1:05](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=65)** Keeping website content in this order helps maintain the overall guideline operable.
>
> **[1:10](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=70)** One thing we didn't discuss before was level.
>
> **[1:12](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=72)** 2.4.3 Focus Order is Level A, which is the lowest level of conformance.
>
> **[1:18](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=78)** This level addresses accessibility issues for the broadest group of people.
>
> **[1:22](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=82)** Think of it like a pyramid where Level A is at the bottom, AA is in the middle, and AAA is at the top.
>
> **[1:29](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=89)** To achieve AAA compliance, you have to implement all of double A and single A as well.
>
> **[1:34](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=94)** Implementing only Level A of accessibility requirements is going to make a big difference to a lot of people, though most companies aim for AA.
>
> **[1:42](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=102)** We'll dive into this a little deeper later on.
>
> **[1:45](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=105)** Just like before, we have a link to show techniques and failures, which provides more information about this requirement.
>
> **[1:52](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=112)** Under sufficient techniques, we see that there are several techniques that may be necessary to ensure the site is accessible.
>
> **[1:58](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=118)** Let's click on this first one.
>
> **[2:00](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=120)** This technique, placing the interactive elements in an order that follows sequences and relationships within the content is a sufficient technique to meet 2.4.3 Focus Order.
>
> **[2:12](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=132)** It mentions that each technology defines its tab order, so the mechanism will be slightly different.
>
> **[2:18](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=138)** Below it gives a few examples.
>
> **[2:20](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=140)** Place the first input field first and the second input field second.
>
> **[2:24](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=144)** Like I had mentioned previously, this is an instance where this isn't just good for people using assistive technology, this is helpful to everyone.
>
> **[2:33](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=153)** A really important and helpful item on this page is the test.
>
> **[2:36](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=156)** The procedure and expected result will help determine if the webpage meets the accessibility requirement.
>
> **[2:42](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=162)** Now, there is some interpretation involved here, what is logical, but overall you get a good result from making a reasonable effort here and not leaving it to chance.
>
> **[2:52](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=172)** Let's go back to the quick reference again, and let me show you one more really useful thing on this site, the Filter feature.
>
> **[2:59](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=179)** It's up here in the tab with the gear icon.
>
> **[3:02](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=182)** If you want to find all of the success criteria related to focus, you can filter for that.
>
> **[3:08](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=188)** And here are our results.
>
> **[3:11](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=191)** Most of them under Operable, so remember, having an accessible website means having an operable website and WCAG will tell you just how to do that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Env Vars:** wcag (3), aaa (2)
> **Versions:** 2.4.3 (3), 2.4 (1)
> **CLI Commands:** find (2), make (1)
> **UI Navigation:** go to (1), click on (1), in the tab (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** think of it like (1), just like (1)
> **Cross-References:** go back to (1)

#### [Understandable and robust](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=0)** - [Instructor] The third and fourth WCAG principles are understandable and robust.
>
> **[0:04](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=4)** Let's look at them separately.
>
> **[0:06](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=6)** Understandable means that information and the operation of the user interface must be understandable.
>
> **[0:12](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=12)** Well, that's not super descriptive, but if we look at the subsections, we see readable, predictable, and input assistance.
>
> **[0:19](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=19)** That gives us a hint about what understandable really focuses on.
>
> **[0:23](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=23)** We're going to hit two in this section.
>
> **[0:26](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=26)** Let's first click on 3.2.4.
>
> **[0:28](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=28)** Consistent identification.
>
> **[0:31](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=31)** Components that have the same functionality within a set of webpages are identified consistently.
>
> **[0:36](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=36)** We haven't discussed it yet, but a lot of these requirements overlap each other.
>
> **[0:41](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=41)** This is a good example of that.
>
> **[0:42](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=42)** The text and labels that you write should be consistent.
>
> **[0:46](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=46)** Just like in website design where we might use a design system to maintain consistency, it is just as important to be consistent here.
>
> **[0:53](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=53)** In fact, [[Building Accessibility]] into your design system is a great idea.
>
> **[0:58](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=58)** Let's click on requirement 3.3.3.
>
> **[1:01](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=61)** Error suggestion.
>
> **[1:02](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=62)** If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user.
>
> **[1:11](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=71)** There are a lot of situations listed here because form handling is quite complex.
>
> **[1:15](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=75)** The one thing you don't want to do is just make the boxer on the form field red when it is missing or incomplete.
>
> **[1:21](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=81)** This is not understandable for any of your form users.
>
> **[1:25](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=85)** Now, let's head down to robust, which means content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies.
>
> **[1:35](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=95)** 4.1.2, name role value says, for all user interface components, including but not limited to form elements, links and components generated by scripts, the name and role can be programmatically determined.
>
> **[1:50](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=110)** It's one thing to manually make sure your website has its accessibility properties looking good.
>
> **[1:55](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=115)** Robust takes it a step further and ensures that dynamically generated content is also accessible.
>
> **[2:01](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=121)** Now that we've got a solid base in the fundamentals of WCAG and how to look things up in the quick reference, we'll be looking at tools that can be used to view accessible content on webpages.
>
> **[2:10](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=130)** Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Building Accessibility]] (1)
> **Versions:** 3.2.4 (1), 3.3.3 (1), 4.1.2 (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (2)
> **Env Vars:** wcag (2)
> **UI Navigation:** click on (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Find information on WCAG](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-find-information-on-wcag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-find-information-on-wcag?u=76281980&t=0)** - [Instructor] Now that I've shown you how to navigate WCAG's Quick Reference, it's your turn to practice looking up information like you would on any given workday.
>
> **[0:13](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-find-information-on-wcag?u=76281980&t=13)** First, open up a link to the WCAG's Quick Reference, which you can find in the course handout.
>
> **[0:18](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-find-information-on-wcag?u=76281980&t=18)** The first item I want you to research is Success Criterion 1.1.1, which is Nontext Content and is conformance level A.
>
> **[0:27](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-find-information-on-wcag?u=76281980&t=27)** What I want you to do is click the Understanding 1.1.1 button to get more information about the success criterion and look for an example of when the Success Criterion applies or should be used.
>
> **[0:39](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-find-information-on-wcag?u=76281980&t=39)** The second item I want you to research is Success Criterion 1.4.3, which is Contrast Minimum, and is also conformance level A.
>
> **[0:48](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-find-information-on-wcag?u=76281980&t=48)** One report that scans the top million pages for accessibility errors notes that low contrast text is the top accessibility error found.
>
> **[0:55](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-find-information-on-wcag?u=76281980&t=55)** You can look in the course handout for more information on these [[Statistics]].
>
> **[1:00](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-find-information-on-wcag?u=76281980&t=60)** What I want you to do is click on Show Techniques and Failures for this Success Criterion, read situations A and B, and determine if a 16-point non-bold font with 3:1 contrast ratio is sufficient to meet this Success Criterion.
>
> **[1:15](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-find-information-on-wcag?u=76281980&t=75)** I'll meet you back in the next video to show you how I would find the answers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1)
> **Versions:** 1.1.1 (2), 1.4.3 (1)
> **CLI Commands:** find (2)
> **Env Vars:** wcag (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Find information on WCAG](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=0)** - [Instructor] Okay, I hope you had some success in finding information in WCAG's Quick Reference.
>
> **[0:10](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=10)** But even if you didn't, it's really valuable just spending time getting used to navigating around in it.
>
> **[0:15](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=15)** Let's take a look at the first exercise, which was researching non-text content 1.1.1.
>
> **[0:22](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=22)** We'll open the WCAG Quick Reference, and conveniently for us, this is actually the first success criteria.
>
> **[0:27](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=27)** So it's right at the top of the column.
>
> **[0:29](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=29)** Let's click on understanding 1.1.1.
>
> **[0:33](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=33)** First, we're going to find the full description from the prior page, if we had expanded it.
>
> **[0:37](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=37)** If we look at the page contents menu, we can see all of the information available to us on this page.
>
> **[0:43](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=43)** Intent adds context and additional information provides details and challenges related to fulfilling the success criterion for a particular web item.
>
> **[0:53](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=53)** We're looking for examples.
>
> **[0:54](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=54)** So let's click on that.
>
> **[0:56](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=56)** Here are examples, so let's take a look at a couple.
>
> **[1:00](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=60)** Remember, our intent is to present a text alternative that serves the equivalent purpose.
>
> **[1:06](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=66)** The first one, a data chart, is a common example on a business website.
>
> **[1:10](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=70)** A bar or pie chart is a nice visual representation.
>
> **[1:14](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=74)** Unfortunately, it's just an image and impossible to describe with all text.
>
> **[1:19](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=79)** Instead, ask for the tabled data behind the chart as well, and provide that as an accessible alternative.
>
> **[1:26](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=86)** A second example is an audio recording of a press conference.
>
> **[1:30](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=90)** In a business context, you might think of this as a live Q&A with the CEO that is posted to the website.
>
> **[1:36](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=96)** Besides just an audio and video recording, is a transcript available with applause, laughter, and other details that happened at the event?
>
> **[1:45](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=105)** Let's move on to the second exercise, which was researching contrast minimum 1.4.3.
>
> **[1:51](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=111)** We'll go back to the main Quick Reference page, find 1.4.3, and click on it.
>
> **[1:58](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=118)** Then let's click on show full description.
>
> **[2:01](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=121)** It reads, "The visual presentation of text and images of text has a contrast ratio of at least 4.5 to 1, except for large text."
>
> **[2:11](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=131)** Okay, what is large text?
>
> **[2:13](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=133)** We'll need to know that to figure out our question.
>
> **[2:15](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=135)** Is a 16-point non-bold font with a three to one contrast ratio sufficient to meet this success criterion?
>
> **[2:23](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=143)** Let's now click on show techniques and failures.
>
> **[2:26](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=146)** It doesn't specifically say so, but situation A is describing regular text.
>
> **[2:31](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=151)** Situation B is describing large text.
>
> **[2:35](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=155)** We can look at either situation to figure this out, but let's look at B, which would qualify text to have a three to one ratio.
>
> **[2:42](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=162)** Based on situation B, 18-point font and above can always be a three to one ratio, bold or not bold.
>
> **[2:49](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=169)** 14 to 18-point font is large if it is bold, so it can be a three to one ratio and still be accessible.
>
> **[2:55](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=175)** That's what we were looking for, so our answer is no.
>
> **[2:58](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=178)** 16-point non-bold font with a three to one contrast ratio is not sufficient to meet the success criteria.
>
> **[3:05](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=185)** It would have to be bold or have a 4.5 to 1 ratio, per situation A.
>
> **[3:10](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=190)** I hope you found this exercise helpful.
>
> **[3:12](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=192)** And don't worry, we'll have more opportunities to get your feet wet with accessibility practice later in the course.

> [!info]- Semantic Content
>
> **Versions:** 1.1.1 (2), 1.4.3 (2), 4.5 (2)
> **UI Navigation:** click on (5), open the (1)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** wcag (2), ceo (1)
> **CLI Commands:** find (2)
> **Cross-References:** go back to (1), later in (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Accessibility Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Manual testing](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=1)** - Web browsers provide built-in tools for manually testing for accessibility issues, which you can later triage and fix.
>
> **[0:08](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=8)** I'll be demonstrating web browser built-in accessibility tools in Firefox for Mac, but accessibility tools with varying functionality are available in all browsers for Mac and [[Windows]].
>
> **[0:20](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=20)** Check out the course handout for instructions on how to access the tools in other browsers.
>
> **[0:26](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=26)** In Firefox, let's go to [binaryville.com](https://binaryville.com).
>
> **[0:29](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=29)** To access the built-in accessibility tools, we can right click anywhere on the page and select inspect accessibility properties, or use the keyboard shortcut command plus option plus C, and select the accessibility tab.
>
> **[0:43](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=43)** The first tool we'll take a look at is the accessibility inspector.
>
> **[0:46](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=46)** To activate it, click on the rectangle with the person.
>
> **[0:50](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=50)** It has turned from black to blue, which means it's ready to inspect.
>
> **[0:54](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=54)** As we're hovering around, it's inspecting anything we're hovering over.
>
> **[0:58](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=58)** Let's take a look at the merchandise text that is overlaying the gradient.
>
> **[1:02](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=62)** It's giving us a lowest contrast calculation of 2.37 and a red exclamation point, meaning this does not meet WCAG requirements.
>
> **[1:10](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=70)** This is a really quick and easy way of checking contrast on your site without having to do any calculations yourself or use any other tools.
>
> **[1:17](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=77)** If you had received a complaint or had a suspicion there was an issue on one section of your website, you could come into this tool and quickly inspect that section.
>
> **[1:26](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=86)** The next accessibility tool in the browser we'll look at is the accessibility tree.
>
> **[1:30](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=90)** Remember all those statements we heard voiceover readout.
>
> **[1:33](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=93)** The accessibility tree will show those to us written out in a tree view.
>
> **[1:37](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=97)** Let's take a look at the menu.
>
> **[1:39](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=99)** To find it quickly, right click on the menu on the webpage and choose inspect accessibility properties.
>
> **[1:48](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=108)** On the right, we can see a child count of four.
>
> **[1:51](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=111)** This matches what we saw with voiceover.
>
> **[1:53](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=113)** Opening the tree up a bit and looking at the about item we see link and about.
>
> **[1:58](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=118)** This also matches what we saw with voiceover, so using the browser we can anticipate what will be displayed with voiceover.
>
> **[2:05](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=125)** During development, this is a good place to start with accessibility checks.
>
> **[2:09](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=129)** Is this item functioning as we expect it to?
>
> **[2:12](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=132)** Finally, we can actually begin checking for accessibility issues right in the browser.
>
> **[2:16](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=136)** In that same bar above the accessibility tree, there's an option to check for issues, which has a dropdown menu.
>
> **[2:23](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=143)** We can choose to view only contrast keyboard or text label issues, or we can view all issues.
>
> **[2:28](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=148)** Let's check out contrast issues.
>
> **[2:31](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=151)** It calls out that merchandise text we spotted before and lets us know it doesn't meet WCAG standards.
>
> **[2:37](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=157)** Let's now choose all issues.
>
> **[2:39](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=159)** Looks like in addition to the one contrast item, we've got quite a few text labels missing that we should look into.
>
> **[2:46](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=166)** Pretty handy that we can do all this [[Manual Testing]] from our browser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Manual Testing]] (1)
> **UI Navigation:** click on (2), go to (1), select the (1), dropdown (1)
> **Env Vars:** wcag (2)
> **Tools:** firefox (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **URLs:** [binaryville.com](https://binaryville.com) (1)
> **Versions:** 2.37 (1)

#### [Automated testing](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=0)** - [Instructor] By adding an extension to our browser, we can supercharge our accessibility testing.
>
> **[0:05](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=5)** axe is an extremely popular and powerful browser extension built by Deque Systems that provides immense insight into accessibility issues.
>
> **[0:14](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=14)** To install axe, first open the Deque website.
>
> **[0:17](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=17)** You'll see they offer the extension for Chrome, Firefox, and Edge.
>
> **[0:21](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=21)** While in the browser you want to install the extension into, click on the button for that same browser.
>
> **[0:27](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=27)** I'm going to install it in Firefox.
>
> **[0:29](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=29)** On this screen, I'll click Add to Firefox, and that's it.
>
> **[0:35](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=35)** The extension is now added.
>
> **[0:37](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=37)** To run it on any website, we'll first open DevTools.
>
> **[0:41](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=41)** We can do that in Firefox by right-clicking anywhere on a website and choosing Inspect or with the Mac keyboard shortcut Command + Option + I.
>
> **[0:49](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=49)** Since we just installed the axe extension, we now have an extra tab right here labeled axe DevTools.
>
> **[0:55](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=55)** Let's click it.
>
> **[0:56](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=56)** All we have to do to scan the webpage that is currently open in the browser is click the button that reads, "Scan ALL of my page."
>
> **[1:03](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=63)** This also works when you're developing locally as well.
>
> **[1:06](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=66)** Let's check for issues.
>
> **[1:07](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=67)** Our results show up on the right, and no surprise here that the Deque website has no issues.
>
> **[1:13](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=73)** Later, we'll run this on a website with a few issues and see how those results get reported and what we can do about them.
>
> **[1:19](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=79)** Now, automated testing shouldn't be used instead of [[Manual Testing]], but rather, in addition to manual testing to catch as many accessibility issues as possible.
>
> **[1:28](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=88)** Now that we've seen how to use axes to look for accessibility issues, in the next video, we'll look at online tools that can help us dig deeper into items like contrast checks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (2)
> **Tools:** firefox (4)
> **Prerequisites:** install (3)
> **UI Navigation:** open the (1), click on (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Helper tools](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=0)** - [Narrator] The first two tools in this chapter were tools to check for general accessibility issues on websites.
>
> **[0:06](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=6)** These last two tools are specialized for both catching and repairing issues.
>
> **[0:10](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=10)** First, let's look at an online contrast checker.
>
> **[0:14](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=14)** Once you have found a color contrast issue on your website, how do you repair it?
>
> **[0:18](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=18)** Some photo editors like [[Figma (Software)|Figma]] have plugins that can provide contrast information.
>
> **[0:23](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=23)** However, if you don't have access to a tool like that or want a quick way to play with possible color combinations, an online contrast checker is the way to go.
>
> **[0:31](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=31)** It also provides the WIC ag requirements right on the page.
>
> **[0:35](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=35)** I can put any color in the foreground.
>
> **[0:37](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=37)** Here are the problematic colors from that binary image, and then I can experiment with different colors in the background.
>
> **[0:44](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=44)** The next tool we'll look at is a heading mapper.
>
> **[0:47](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=47)** One important item for both accessibility and SEO is for headings to be arranged hierarchically.
>
> **[0:53](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=53)** Particularly for content heavy webpage, this can be difficult to keep track of.
>
> **[0:58](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=58)** Enter the Heading Mapper extension.
>
> **[1:01](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=61)** Let's install it for Firefox.
>
> **[1:03](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=63)** Now we can go back to Binaryville, run the extension, and see a map of the headings on the page.
>
> **[1:11](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=71)** The numbers on the left indicate the header level.
>
> **[1:14](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=74)** In our case, we actually have an H2 before the H1, which is not recommended.
>
> **[1:19](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=79)** That would be a good repair to make for accessibility and SEO reasons.
>
> **[1:23](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=83)** Both the contrast tool and heading mapper are great tools to have in your tool belt to help you repair accessibility issues.
>
> **[1:28](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=88)** So be sure to keep them close by.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (1)
> **Env Vars:** seo (2), wic (1)
> **Tools:** figma (1), firefox (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** install (1)


### 4. Test and Triage Accessibility Issues

[↑ Back to Table of Contents](#table-of-contents)

#### [Identify conformance goals](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=1)** - Prior to doing any accessibility work on your website, you may want to first decide what your goals are for conformance.
>
> **[0:08](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=8)** Making your website accessible is not simply a binary of, is my website accessible or not?
>
> **[0:14](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=14)** Instead, WCAG guidelines are categorized into three levels of conformance to meet the needs of different websites and different situations.
>
> **[0:23](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=23)** These three levels are A, which is the easiest, AA, which is in the middle, and AAA, which is the hardest to meet.
>
> **[0:30](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=30)** As we'll see, these levels build progressively on each other.
>
> **[0:34](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=34)** The working group assigns success criteria to a conformance level after taking a wide range of issues into consideration, such as, are they essential?
>
> **[0:43](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=43)** Are they possible to satisfy for all websites and types of content?
>
> **[0:47](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=47)** And can they be reasonably achieved by content creators?
>
> **[0:51](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=51)** Let's look at the conformance levels.
>
> **[0:53](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=53)** Level A is the easiest conformance level to meet, and generally does not have much impact on a website's structure or design.
>
> **[1:01](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=61)** It sets a minimum level of accessibility, but does not achieve accessibility for many situations.
>
> **[1:08](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=68)** WCAG success criteria indicate what level of conformance they meet as shown in the screenshot here.
>
> **[1:14](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=74)** For your entire website, if you meet the success criterion for say, use of color, you can consider your website conforming to level A for use of color.
>
> **[1:23](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=83)** If your entire website meets all level A success criteria, then your website meets WCAG level A conformance.
>
> **[1:30](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=90)** Level AA is the middle conformance level.
>
> **[1:33](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=93)** To meet it, you must meet all success criteria in level A and then the additional items that are specified for level AA.
>
> **[1:41](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=101)** It is the most common level that companies aim for in conformance goals.
>
> **[1:45](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=105)** This level gets into items that may affect the design and functionality of a website, but at the same time provide accessible content to far more people.
>
> **[1:55](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=115)** Again, WCAG guidelines will explicitly call out the conformance level so that developers and designers know exactly what conformance level they are developing or designing toward.
>
> **[2:05](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=125)** The final level, level AAA, is the hardest conformance level to meet.
>
> **[2:09](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=129)** It encompasses all level A and level AA success criteria, as well as its own list of success criteria.
>
> **[2:17](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=137)** Part of what makes it so difficult to meet is that in some cases, it may not even be possible to meet for all content as shown in the example.
>
> **[2:25](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=145)** This is partially why many people aim for level AA conformance.
>
> **[2:29](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=149)** However, many level AAA criteria are still worth knowing about and aiming for, such as enhanced text contrast.
>
> **[2:37](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=157)** Once your website has met a level of conformance, you can place a WCAG conformance logo on your website to indicate a claim of conformance.
>
> **[2:45](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=165)** These logos are available at the W3C website.
>
> **[2:48](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=168)** One final note about conformance: Conformance to a certain level does not have to be the end goal.
>
> **[2:54](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=174)** Just making a website more accessible for people is a great goal.
>
> **[2:58](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=178)** The WCAG Working Group has provided leveling as a way of prioritizing certain items over others, but as I've mentioned before, any work is helpful on the accessibility front.

> [!info]- Semantic Content
>
> **Env Vars:** wcag (6), aaa (3), w3c (1)
> **Analogies:** such as (2)
> **Documentation:** w3c (1)
> **Definitions:** is a  (1)
> **Speakers:** - prior (1)

#### [Do automated testing](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=0)** - [Instructor] Previously, we installed the axe browser extension in Firefox.
>
> **[0:05](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=5)** Now, let's go ahead and run it on an actual website and see if it can spot some accessibility issues.
>
> **[0:11](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=11)** As a reminder of how to use axe, we'll first go to the website we want to audit, in this case, Big Star Collectibles.
>
> **[0:18](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=18)** Next, we'll open Developer Tools by pressing Command + Option + I on a Mac.
>
> **[0:23](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=23)** Then we'll go to the axe DevTools tab.
>
> **[0:26](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=26)** Like it says in the tool, let's get started.
>
> **[0:29](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=29)** Click the button that says, "Scan ALL of my page."
>
> **[0:32](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=32)** Okay, looks like we have five issues on the page.
>
> **[0:34](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=34)** Let's dig into these a bit.
>
> **[0:37](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=37)** On the left, along with the total number of issues, axe also categorizes them by severity.
>
> **[0:42](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=42)** As we'll see when we triage these issues, these categories don't necessarily line up with conformance levels, but they at least give some indication of how severe a problem is to users.
>
> **[0:53](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=53)** On the right, the issues are grouped by type of error.
>
> **[0:56](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=56)** If we click on the first item, Elements must meet minimum color contrast ratio thresholds, axe provides a wealth of information to us.
>
> **[1:04](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=64)** First, there is a Highlight button we can click that will show us which element has the accessibility issue.
>
> **[1:11](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=71)** This is helpful for finding the element on the page.
>
> **[1:13](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=73)** In this case, these are the menu items.
>
> **[1:16](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=76)** Next, there's a more detailed description of the problem and a link to axe's website with even more details about the issue and potential solutions.
>
> **[1:25](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=85)** Then, we see the code with the issue and a description of the specific problem on our page.
>
> **[1:30](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=90)** In this case, it lists the offending colors.
>
> **[1:33](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=93)** Finally, we see tags assigned to the issue.
>
> **[1:35](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=95)** This actually gives us the Success Criterion number for the issue, in this case, 1.4 0.3, so we can go to the WCAG Quick Reference and find more information.
>
> **[1:45](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=105)** Moving down to the second issue, this one is Images must have alternate text.
>
> **[1:50](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=110)** I'll click the Highlight button again to show which element on the page is affected.
>
> **[1:54](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=114)** One other feature in axe to note is that if there are multiple elements with the same issue, we could press the next issue icon to see the next element with the issue for as many elements as there are in that category.
>
> **[2:07](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=127)** Let's run axe on one more page on our website.
>
> **[2:10](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=130)** Again, we go to DevTools, then axe DevTools, then press Scan ALL of my page.
>
> **[2:17](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=137)** We see the menu item contrast issue again.
>
> **[2:19](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=139)** We also have two Form elements must have labels and one Select element must have an accessible name, which I'll look to be related to form labels.
>
> **[2:29](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=149)** I'm going to make a list of all of the issues we encountered so that we can triage them and decide in what priority order we'll fix them.
>
> **[2:36](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=156)** So don't worry, we're definitely going to be fixing these errors we found with automated testing.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (4), click on (1)
> **CLI Commands:** find (1), make (1)
> **Versions:** 1.4 (1), 0.3 (1)
> **Env Vars:** wcag (1)
> **Tools:** firefox (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Do targeted manual testing](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=0)** - [Instructor] Like I mentioned before, X won't catch all accessibility issues on your website, so it's a good idea to do [[Manual Testing]] as well.
>
> **[0:08](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=8)** We'll use Firefox and our newly acquired accessibility knowledge to do some manual testing on our website.
>
> **[0:14](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=14)** Let's open the contact page of Big Star Collectibles again.
>
> **[0:18](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=18)** Like we learned for manual accessibility testing, we'll open dev tools and go to the built-in accessibility tab.
>
> **[0:25](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=25)** On that tab, we'll choose text labels under check for issues.
>
> **[0:29](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=29)** At the top, we can see text box, text box, combo box.
>
> **[0:34](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=34)** That's actually notifying us of the form label issues we discovered using X, so we already know what those are.
>
> **[0:40](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=40)** Now let's click on the link right below combo box.
>
> **[0:44](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=44)** That's the Instagram link right over here on the right.
>
> **[0:48](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=48)** It says interactive elements must be labeled, and there are four links here.
>
> **[0:52](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=52)** So all four of these social media icons probably have that same issue.
>
> **[0:56](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=56)** So we'll find a solution and use it for all four.
>
> **[1:00](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=60)** Now, let's turn check for issues off and look at tabbing order on the page, which is also how a screen reader traverses the page top to bottom.
>
> **[1:09](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=69)** Let's click show tabbing order.
>
> **[1:11](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=71)** Number one is a skip to main content hidden element, which is right here, and is used to allow screen reader users to skip the header element altogether, which is why it is tabbing element number one.
>
> **[1:22](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=82)** Let's keep looking.
>
> **[1:24](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=84)** Number two is the logo, three is home, four is [[Microsoft Products|products]].
>
> **[1:28](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=88)** Then 25 is about.
>
> **[1:30](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=90)** This means if I were tabbing along, tab number five would take me into the products menu instead of to the next top level menu item about.
>
> **[1:39](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=99)** It's a little busy, but you can actually see that five through nine, 10 through 14, 15 through 19, 26 through 30, and 31 through 38 are menus.
>
> **[1:50](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=110)** It's better to use the tab button to traverse the top level menu like a visual user would scan the menu with their eyes.
>
> **[1:57](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=117)** Then use other buttons like the down arrow or return key to access the sub menus.
>
> **[2:03](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=123)** Think about it like this.
>
> **[2:04](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=124)** If a screen reader user wants to get to the contact menu item the way we have it here, as we can see, they have to go through the list for 39 announcements.
>
> **[2:13](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=133)** It would be a much better experience to have it be six announcements away.
>
> **[2:17](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=137)** In addition to testing at Firefox, sometimes testing is just going to be very manual.
>
> **[2:23](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=143)** You have to get to know accessibility rules, and then keep an eye out that you and your team are doing the right thing.
>
> **[2:29](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=149)** X and Firefox won't catch everything.
>
> **[2:31](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=151)** Sometimes you just have to spot issues.
>
> **[2:34](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=154)** As you get to know the success criteria better and the general goals, you'll have an easier time spotting these issues.
>
> **[2:41](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=161)** Let's open the homepage of Big Star Collectibles and look at one more issue.
>
> **[2:45](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=165)** There are four groups of characters on the page that we can find out more information about, and each has a button leading to more information.
>
> **[2:53](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=173)** Here's the first one, and it reads Explore Binaryville and has an arrow.
>
> **[2:58](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=178)** Scrolling down the second group's button reads, see all characters with an arrow.
>
> **[3:03](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=183)** Still pretty descriptive, and I think someone would understand just on the basis of the button alone what it would do.
>
> **[3:08](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=188)** It is however different in format than the button above.
>
> **[3:12](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=192)** Continuing to scroll, the next button reads see all with an arrow, and the fourth button just has an arrow.
>
> **[3:19](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=199)** The fourth button really relies on the text over to the left for context, but the overall problem here is that the buttons all have the same functionality, so they should be identified consistently.
>
> **[3:30](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=210)** It's pretty evident when it appears on a single page, but imagine these being spread across a website.
>
> **[3:35](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=215)** You want to make sure these buttons are identified consistently even across the whole website.
>
> **[3:40](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=220)** I'll add these items we caught with our manual testing to our list as well, and we'll get to triaging.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (3), [[Microsoft Products|Products]] (2)
> **UI Navigation:** open the (2), go to (1), click on (1)
> **CLI Commands:** find (2), make (1)
> **Tools:** firefox (3)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Triage issues](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=0)** - [Instructor] Now that we have a list of the accessibility issues on our site, we can go ahead and triage them.
>
> **[0:06](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=6)** Triaging refers to assigning priority levels to tasks to determine the order in which to address them.
>
> **[0:12](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=12)** There are various ways those priority levels could be established, so let's talk through some of them.
>
> **[0:17](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=17)** On this slide, I've consolidated all of the accessibility issues we found using both axe and [[Manual Testing]] that we need to triage.
>
> **[0:24](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=24)** There are six altogether.
>
> **[0:26](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=26)** I've listed the issue, the WCAG Success Criterion and the Conformance Level.
>
> **[0:32](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=32)** I want to first mention where the Success Criterion and Conformance Levels came from Back when we were using axe, when an accessibility issue came up, there were tags below it.
>
> **[0:42](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=42)** In this image, one of these tags reads "wcag143."
>
> **[0:46](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=46)** This is what indicates the Success Criterion 1.4.3.
>
> **[0:51](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=51)** We can look this up using the WCAG Quick Reference under Principle 1, Perceivable, Section 4, Distinguishable.
>
> **[0:58](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=58)** This is Success Criterion Contrast Minimum 1.4.3.
>
> **[1:03](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=63)** Just to the left of the Success Criterion tag is wcag2aa.
>
> **[1:08](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=68)** This indicates the Conformance Level AA, which we can also confirm on the Success Criterion webpage.
>
> **[1:14](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=74)** When looking for accessibility issues manually, it can be a bit harder to classify the issues.
>
> **[1:20](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=80)** Luckily, with a few clicks of the mouse, you can access additional information on some topics.
>
> **[1:25](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=85)** Here's how.
>
> **[1:27](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=87)** In Firefox, when we were looking into the text labels issue on the far right, there was a Learn More link.
>
> **[1:33](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=93)** Clicking on that takes us to the MDN website, a reputable website for developer information.
>
> **[1:38](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=98)** It discusses accessibility guidelines, and at the bottom, it also provides links to related WCAG Success Criteria.
>
> **[1:45](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=105)** It provides three possible options, but the top one happens to be the one that is applicable in this scenario.
>
> **[1:51](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=111)** So now we're back to our list of issues.
>
> **[1:54](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=114)** Perhaps your CEO has passed down a company-wide accessibility mandate.
>
> **[1:58](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=118)** Perhaps you have legal obligations to fulfill, or perhaps you just want to make the most accessible website or web application possible.
>
> **[2:05](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=125)** Whatever the reason, you now have a list of accessibility issues to complete and a limited budget and amount of time to complete them.
>
> **[2:12](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=132)** What's a developer to do? Prioritize.
>
> **[2:16](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=136)** One way of ordering this list would be simply by Conformance Level.
>
> **[2:20](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=140)** Like we discussed before, a Conformance Level of single A is the easiest level to meet.
>
> **[2:25](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=145)** In order to meet level AA, you would have to have all items in level single A met anyway.
>
> **[2:30](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=150)** So this is certainly a good option.
>
> **[2:32](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=152)** Another way of ordering our list of issues would be by taking the easier or smaller ones first.
>
> **[2:38](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=158)** Many developers are familiar with the concept of sizing tickets for [[Agile Development|Agile]] estimation, but here's a quick refresher.
>
> **[2:44](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=164)** You can use actual number of hours, a relative scale of numbers, like the Fibonacci sequence, or another relative scale, like T-shirt sizing, to estimate how long each task will take.
>
> **[2:55](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=175)** As you do more accessibility work, your estimates should become more accurate.
>
> **[3:00](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=180)** It turns out most of our issues are small.
>
> **[3:02](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=182)** We only have one issue that is large, so I think it would make a lot of sense to prioritize it in this way.
>
> **[3:07](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=187)** All of our small issues get prioritized first.
>
> **[3:10](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=190)** Then the large issue gets put at the end.
>
> **[3:12](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=192)** It is a level single A, but we should be able to do these small tasks pretty quickly and then plan when we want to work this large task in.
>
> **[3:20](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=200)** But remember, triaging accessibility issues is going to be based on your priorities and goals.
>
> **[3:25](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=205)** So let those be your guide when tackling an accessibility project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (1), [[Agile Development|Agile]] (1)
> **Env Vars:** wcag (3), mdn (1), ceo (1)
> **CLI Commands:** make (2)
> **Versions:** 1.4.3 (2)
> **Definitions:** refers to (1), is a  (1)
> **Cross-References:** we discussed (1)
> **Documentation:** mdn (1)
> **Tools:** firefox (1)

#### [Challenge: Run axe on a website](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-run-axe-on-a-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-run-axe-on-a-website?u=76281980&t=0)** - [Narrator] Now that I've shown you how to run axe, it's your turn to practice running it yourself on a website.
>
> **[0:10](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-run-axe-on-a-website?u=76281980&t=10)** First, if you haven't already installed it as a browser extension, follow the link in the course handout to install axe in your favorite browser.
>
> **[0:18](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-run-axe-on-a-website?u=76281980&t=18)** Then choose any two websites you like, your production website, a news website, a social media website, et cetera, and run axe on those websites.
>
> **[0:27](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-run-axe-on-a-website?u=76281980&t=27)** Pay close attention to the most common errors on each and see if you see any similarities.
>
> **[0:32](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-run-axe-on-a-website?u=76281980&t=32)** I'll meet you back in the next video to show you how I would run axe on a website.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Run axe on a website](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-run-axe-on-a-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-run-axe-on-a-website?u=76281980&t=0)** - [Narrator] Okay, I hope you were able to run Axe on a few websites and find some interesting accessibility issues.
>
> **[0:11](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-run-axe-on-a-website?u=76281980&t=11)** Even better if you found a website without any issues.
>
> **[0:14](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-run-axe-on-a-website?u=76281980&t=14)** So if I were doing this challenge, here's what I would do.
>
> **[0:17](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-run-axe-on-a-website?u=76281980&t=17)** After installing the Axe browser extension, I would open the webpage to evaluate with Axe, either local or on the internet.
>
> **[0:24](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-run-axe-on-a-website?u=76281980&t=24)** Then I would open DevTools and go to the axe DevTools tab.
>
> **[0:28](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-run-axe-on-a-website?u=76281980&t=28)** Finally, I would click the Scan all of my page button and wait for it to complete its scan.
>
> **[0:33](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-run-axe-on-a-website?u=76281980&t=33)** Then I have my list of issues and I'm ready to triage.

> [!info]- Semantic Content
>
> **UI Navigation:** open the (1), go to (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Repair and Test Accessibility Issues Again

[↑ Back to Table of Contents](#table-of-contents)

#### [Repair accessibility issues](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=0)** - [Instructor] Like I mentioned in the last video, I've decided to fix the five small issues discovered in my Accessibility Audit and put the large issue in the backlog for now.
>
> **[0:09](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=9)** So let's get started fixing those issues.
>
> **[0:12](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=12)** The first issue we'll repair is the menu item Contrast.
>
> **[0:16](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=16)** ACCS already did the calculations for us and noted that the Contrast Ratio needs to be 4.5 to one.
>
> **[0:22](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=22)** If we needed to determine the requirement ourselves, this is how we'd do it.
>
> **[0:26](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=26)** First, we would find out how large the font is.
>
> **[0:29](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=29)** We'd go to our webpage, inspect the element and check the computed size of the text itself.
>
> **[0:37](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=37)** It's 18 pixels.
>
> **[0:39](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=39)** The WIGAC success criterion is given in points, so we'd need to convert to points by multiplying by 0.75.
>
> **[0:46](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=46)** This gives us about 14 points.
>
> **[0:49](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=49)** Additionally, the font weight is 500, which is considered medium, so this is not a bold font.
>
> **[0:55](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=55)** Lastly, we consult success criterion 1.4.3 to figure out which situation it falls in.
>
> **[1:01](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=61)** There are really just two ways to fix this issue, either make the text lighter or the background darker.
>
> **[1:08](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=68)** This is a good time in the process to consult a designer since this may cause changes to other areas throughout the site and impact design cohesiveness.
>
> **[1:16](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=76)** To repair this issue, we'll increase the opacity of the white link color.
>
> **[1:20](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=80)** This will essentially lighten it by showing less of the background color.
>
> **[1:24](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=84)** We'll do this in the CSS file.
>
> **[1:27](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=87)** Here's our selector in the webpage, and here it is in the CSS file.
>
> **[1:33](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=93)** So again, we'll increase the opacity.
>
> **[1:36](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=96)** Like any [[Software Development]], we would test this locally and iterate if needed.
>
> **[1:41](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=101)** If the contrast ratio didn't pass locally in ACCs, we would adjust more.
>
> **[1:46](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=106)** Once I deploy my changes and we run ACCs again in the next video, we should see that the issue has been resolved.
>
> **[1:52](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=112)** The next item we'll repair is the missing alt tags on the robot images.
>
> **[1:57](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=117)** The first two robot images under Explore Binaryville are missing alternate text.
>
> **[2:02](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=122)** In the [[HTML]] code, we'll find Delores's image.
>
> **[2:06](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=126)** The nice thing here is that we literally just have to add what they're telling us to add, the alt tag and a description.
>
> **[2:12](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=132)** Now, we could just write robot avatar and that would be somewhat descriptive, but there are a lot of robot avatars on this page.
>
> **[2:21](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=141)** We could also write Delores's avatar, and that would be a little more descriptive, but does that really add much information about the image itself?
>
> **[2:30](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=150)** Instead, let's describe her a bit.
>
> **[2:33](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=153)** Let's see, she's a yellow robot with eyelashes.
>
> **[2:41](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=161)** Great, not too long, but gives a little bit of a description of what she really looks like.
>
> **[2:46](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=166)** Now we'll do the same for Rex.
>
> **[2:49](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=169)** Again, when I deploy my changes and run ACCS again, we should see the issues have been resolved.
>
> **[2:55](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=175)** Finally, on our homepage, let's repair that little issue we found manually where the text for the links of the different sections isn't consistent.
>
> **[3:03](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=183)** The first one reads Explore Binaryville.
>
> **[3:06](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=186)** The second one reads, see all characters.
>
> **[3:09](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=189)** The third one reads, see all, and so on.
>
> **[3:13](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=193)** Since the heading text already reads, Explore Binaryville, I don't think we need to repeat that text.
>
> **[3:19](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=199)** I think the text, see all characters, is probably a good solution here.
>
> **[3:23](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=203)** So let's use that for all four links.
>
> **[3:26](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=206)** We'll make that change on the A tags.
>
> **[3:29](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=209)** Here's the first change and we would make the change for the other two that are different as well, and that's all we need to do for that one.
>
> **[3:37](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=217)** There's one other page on our website that had two issues on it.
>
> **[3:41](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=221)** The first issue was missing form labels.
>
> **[3:44](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=224)** ACCS identified that the first three items in the form didn't have form labels, so let's repair that.
>
> **[3:49](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=229)** As we can see in the code, the your email text is just a paragraph tag.
>
> **[3:54](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=234)** It's not an actual label tag, so that's what we need to repair, and then we would repair it for your name and how can we help as well.
>
> **[4:04](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=244)** Now screen readers can accurately associate the label with the form field itself due to the label tag and the four attribute.
>
> **[4:12](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=252)** When we run ACCS again, we should no longer see that error.
>
> **[4:15](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=255)** There's one final issue we caught in Firefox, and that was the social media images missing alt tags.
>
> **[4:21](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=261)** So we'll go to this A tag for Instagram, and even though we don't have a real link in here, we'll go ahead and make sure we add in an alt tag for accessibility purposes.
>
> **[4:32](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=272)** This adds an Aria label to the A tag despite the SVG icon being hid into screen readers, we'll make sure to do it for the other three social media icons as well.
>
> **[4:43](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=283)** So there we go.
>
> **[4:44](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=284)** We fixed all of the small issues on our list.
>
> **[4:47](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=287)** The next step is to deploy these changes and then we can run ACCS again to make sure everything looks good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1), [[HTML]] (1)
> **Env Vars:** accs (5), css (2), wigac (1), html (1), svg (1)
> **CLI Commands:** make (6), find (2)
> **Versions:** 4.5 (1), 0.75 (1), 1.4.3 (1)
> **Cross-References:** in the last (1), in the next (1)
> **UI Navigation:** go to (2)
> **Tools:** firefox (1)
> **Definitions:** is a  (1)

#### [Retest after repairs](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=0)** - [Instructor] Now that we've made our repairs, we can use axe and [[Manual Testing]] to verify that our repairs were successful.
>
> **[0:07](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=7)** Before running axe, let's remind ourselves that our first page had two issues caught by axe, menu item contrast, and missing alt tags.
>
> **[0:15](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=15)** Since we fixed both of those, we should see zero axe errors.
>
> **[0:18](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=18)** Let's open up our first page that had issues and then we'll run axe.
>
> **[0:24](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=24)** So there we go, we see zero automatic issues.
>
> **[0:27](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=27)** The other item on this page was a manual item, the text of see all characters being different for each section.
>
> **[0:34](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=34)** This one we can scan visually to ensure it's repaired.
>
> **[0:38](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=38)** We should see four instances of buttons that read, see all characters.
>
> **[0:42](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=42)** One, two, three, four, and there they are.
>
> **[0:47](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=47)** We have one other page that we repaired.
>
> **[0:50](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=50)** As a reminder, there was one issue discovered by axe on this page, missing form labels.
>
> **[0:55](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=55)** So let's check that first.
>
> **[0:58](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=58)** We'll run axe to ensure we're seeing zero issues, and that looks great.
>
> **[1:03](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=63)** The final thing we need to do is check for the one type of manual issue that we discovered on this page.
>
> **[1:08](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=68)** The issue was the missing alt tags on social media images, and we found it by looking at the Accessibility tab.
>
> **[1:15](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=75)** So we can check to see if it was repaired the same way.
>
> **[1:19](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=79)** Under Check for Issues, Text Labels, we had previously seen four issues for the four social media images on the right side of the page.
>
> **[1:28](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=88)** If we've made our repairs correctly and choose that again, we should see a blank list.
>
> **[1:33](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=93)** And there we go, our repairs look good.
>
> **[1:35](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=95)** That's the last of the repairs we set out to do.
>
> **[1:38](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=98)** Just to recap, we used axe and manual testing to find issues on our site.
>
> **[1:43](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=103)** We identified five that we were going to repair immediately.
>
> **[1:46](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=106)** We made our repairs, then we used axe and manual testing to verify the repairs had worked.
>
> **[1:52](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=112)** Not a bad day's work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (3)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/web-accessibility-for-developers/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/web-accessibility-for-developers/next-steps?u=76281980&t=1)** - So that's a wrap.
>
> **[0:02](https://www.linkedin.com/learning/web-accessibility-for-developers/next-steps?u=76281980&t=2)** Congratulations on making it through the researching, triaging, and repairing of accessibility issues on a website.
>
> **[0:09](https://www.linkedin.com/learning/web-accessibility-for-developers/next-steps?u=76281980&t=9)** Now that you've built a foundation of accessibility knowledge, here are some next steps you can take.
>
> **[0:15](https://www.linkedin.com/learning/web-accessibility-for-developers/next-steps?u=76281980&t=15)** First, you can connect with me on [[LinkedIn]] and share your accessibility journeys with me.
>
> **[0:20](https://www.linkedin.com/learning/web-accessibility-for-developers/next-steps?u=76281980&t=20)** Next, LinkedIn has many other courses on [[Web Accessibility]], and I'd encourage you to keep learning.
>
> **[0:26](https://www.linkedin.com/learning/web-accessibility-for-developers/next-steps?u=76281980&t=26)** Here're some that I would recommend.
>
> **[0:28](https://www.linkedin.com/learning/web-accessibility-for-developers/next-steps?u=76281980&t=28)** So congratulations again on completing the course.
>
> **[0:32](https://www.linkedin.com/learning/web-accessibility-for-developers/next-steps?u=76281980&t=32)** With your help, there will be more accessible websites on the internet in no time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Web Accessibility]] (1)
> **Speakers:** - so (1)


## Instructor

- [[Donia Robinson]]

## Path Context

### In [[Prepare for Digital Accessibility]]
← [[Accessibility for Web Design]] | **4 of 8** | [[Architectural Design- The WE Way for Workplace Inclusivity]] →

## Appears In

- [[Prepare for Digital Accessibility]]

---

[↑ Back to top](#)