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
  - '[Prepare for Digital Accessibility](../../Paths/Web%20Development/Learning%20Paths/Prepare%20for%20Digital%20Accessibility.md)'
prev_courses:
  - '[Accessibility for Web Design](Accessibility%20for%20Web%20Design.md)'
next_courses:
  - '[Architectural Design- The WE Way for Workplace Inclusivity](Architectural%20Design-%20The%20WE%20Way%20for%20Workplace%20Inclusivity.md)'
path_nav: '[{"path":"Prepare for Digital Accessibility","position":4,"total":8,"prev":"Accessibility for Web Design","next":"Architectural Design- The WE Way for Workplace Inclusivity"}]'
path_count: 1
tags:
  - course
  - topic/web-development
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/take-the-mystery-out-of-web-accessibility?u=76281980&t=0)** - Have you been delving into the world of [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md)? Heard terms like WCAG, ARIA, AXE, or JAWS? And been mildly confused or even utterly mystified? Not to worry. I designed this course to take the mystery out of web accessibility for developers. I'm Donia Robinson, a longtime builder of websites big and small. In this course, you'll learn just what it means to make a website accessible, how to test for it, and how to make some common repairs. When you're done, you'll be able to apply these methods to any site you're working on. Let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md) (2)
> **Env Vars:** wcag (1), aria (1), axe (1), jaws (1)
> **CLI Commands:** make (2)
> **Speakers:** - have (1)

#### [Why accessibility matters](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=0)** - [Instructor] Before we dive in, let's first ask ourselves, why does [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md) matter? What does web accessibility even mean? Who are the users that this impacts? And what's at stake for website owners trying to navigate these issues? In the physical world, we've watched many countries advance laws protecting the rights of people with disabilities. For example, in 1990, the United States passed the Americans with Disabilities Act, the ADA. These laws can ensure access to transportation in public locations, provide reasonable accommodations on the job, and more. Then the internet entered the picture in a widespread way. The internet was invented as a means of sharing information and has evolved into so much more. It is yet another place to take care in ensuring equal access too. But what exactly does that mean? Information has been placed out on the internet and is available for access via web browser or user agent. Browsers can be used by a broad population and are assistive in some ways to those with disabilities, but they don't provide a way to access all content, so some people use [Hardware](../../Topics/Hardware.md) and software assistive devices. These include screen readers, screen magnifiers, captioning, voice recognition, alternative keyboards, and alternative pointing devices. This means that websites need to be developed with these devices in mind to ensure they receive all information from the websites. Regardless of the number of people affected, this is a task worth pursuing, but the numbers might surprise you.
>
> **[1:34](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=94)** It is estimated that one in six people worldwide or approximately 1.3 billion people experience a significant disability. This is no small number of people that may have an accessibility need on a website. Add to that, that not all disabilities are permanent, so the estimate is a shifting number. As you can see here, accessibility needs can be permanent, temporary, or situational. We may think of accessibility needs as always being in the permanent column here, touch for example. But perhaps as a new parent, you've found yourself with a baby in your arms and not able to type with both hands, or you had an ear infection and couldn't hear a video on your computer, so you turned on the closed captions. These are situational and temporary accessibility needs, and are also helped out by our work on website accessibility. So what does this mean for website owners? Again, laws vary by country, but in the United States, the Department of Justice, DOJ, has stated that the ADA covers government and public business websites. Web accessibility lawsuits under the ADA are on the rise. Accessibility is not a nice to have or something that can be put off until the end. It should be incorporated into every aspect of the [Software Development](../../Topics/Software%20Development.md) lifecycle. And yet, looking at the top million websites on the internet, only about 4% of them are considered fully accessible. The websites that are not accessible contain many of the same issues. One top issue is low contrast text, which we'll learn about and it's very easy to repair.
>
> **[3:08](https://www.linkedin.com/learning/web-accessibility-for-developers/why-accessibility-matters?u=76281980&t=188)** Another issue is missing alternative text for images, which we'll also see is very easy to repair. Once you know how to check for these issues, and I'll show you how, it'll be easy to keep them out of your code base.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md) (3), [Hardware](../../Topics/Hardware.md) (1), [Software Development](../../Topics/Software%20Development.md) (1)
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
> **[0:01](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=1)** - The first method for testing a website for accessibility issues is to visit like someone using assistive technology would, and we only need our keyboard and computer to do it. Let's briefly navigate through a website, [binaryville.com](https://binaryville.com), using a mouse to get a feel for how the website functions. We have a main image, a few icons in the upper right, and four menu items. The whole site flows pretty naturally from top to bottom. As a mouse user, if I wanted to visit, say the blog, I would move my cursor to the blog button and click it. Now let's see how to navigate this same website without using a mouse. I'll be demonstrating on a Mac, but similar functionality exists for [Windows](../../Glossary/Service/Windows.md)-based computers as well. Check out the course handout for more information. We'll be navigating this website using our keyboard, and our computer will read instructions to us. On a Mac, this tool is called voiceover. One way of turning on voiceover is to go to the magnifying glass in the upper right corner of our screen, type voiceover, and toggle the pill button on. Instead of searching, we could also use Siri by saying, "Turn voiceover on." A third method we could use is to press command, F5. That's how I'm going to do it. Note that it will immediately begin reading your current state to you. This is not just for a web browser, but works anywhere on a Mac, here we go.
>
> **[1:26](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=86)** - [Narrator] Welcome to voiceover. Voiceover speaks descriptions of items on the screen and can be used to control the computer using only your keyboard.
>
> **[1:35](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=95)** - [Narrator] Voiceover on Firefox, Binaryville, Binaryville window, Binaryville Web content, has keyboard focus. You are currently on web content. To enter the web area, press control, option shift, down arrow.
>
> **[1:47](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=107)** - [Instructor] Let's reload the page so voiceover thinks we just arrived at this page. Voiceover is going to get chatty here. So I'll first describe what will happen. Voiceover will navigate through the page on its own unless we use a keyboard command or mouse press to stop it. At each item that a web developer has set up accessibility interactions for or that has them built in naturally, we'll hear a description and options presented to us. If this is done correctly, we have access to everything on the page. If these are missing, then we don't, let's do it.
>
> **[2:19](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=139)** - [Narrator] Image, visited link image, home. Heading level two, main navigation, list four items. Visited link, about link, shop link, blog link, contact link, image, account link, image, shopping cart. Heading level one, welcome to Binaryville. Heading level two, merchandise. Share your love of technology and spread link, image of Rex Rex. List 14 items, you are currently on the link, to click this link, press control option space.
>
> **[2:46](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=166)** - [Instructor] Okay, I think that gives a good feel for how voiceover navigates through the page automatically. We can also continue on manually using the tab key and choose from the options it gives us.
>
> **[2:56](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=176)** - [Narrator] Link, image of Dolores, Dolores. Link, image of Bubbles, Bubbles. Link, image of Fred, Fred, voiceover off.
>
> **[3:04](https://www.linkedin.com/learning/web-accessibility-for-developers/your-keyboard-and-computer?u=76281980&t=184)** - [Instructor] So that's voiceover. There are also many other keyboard commands available. I encourage you to check them out in the course handout to up your screen reader game.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (1), [Windows](../../Glossary/Service/Windows.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=0)** - [Instructor] Though a lot of testing can be done using just voiceover on a Mac or narrator on [Windows](../../Glossary/Service/Windows.md), in reality, these are not the most commonly used tools out there. Instead, there are more widely used screen readers developed by companies that specialize in [Building Accessibility](../../Skills/Web%20Development/Building%20Accessibility.md) tools. Let's look at two of them. NVDA and JAWS. NonVisual Desktop Access, or NVDA, is a free screen reader available for Windows PCs. It can be used in web browsers, email clients, [office](../../Skills/Web%20Development/Microsoft%20Office.md) programs, music players, and other programs. It has been translated into over 50 languages. According to user [Statistics](../../Skills/Data%20Science/Statistics.md) from the NV access server, there are an average of 47,000 users per day. Let's dig into how NVDA is used. To start using NVDA, a user would click Control+Alt+n. Once NVDA is turned on, like we saw for voiceover, there are a number of keyboard shortcuts for commonly used navigation scenarios. For navigating websites, here's a preview of some of the shortcuts available. For example, pressing the letter h repeatedly would move focus from heading to heading on the page. This is much like a visual user would scan the headings on a webpage. This gives us a feel for how a nonvisual user might navigate our website. For example, from heading level to heading level or link to link. We definitely want to make sure those are set up properly so a screen reader operates correctly. The world's most popular screen reader is Job Access With Speech or JAWS. It is available for purchase from Freedom Scientific via a yearly or perpetual license. It provides speech and braille output
>
> **[1:34](https://www.linkedin.com/learning/web-accessibility-for-developers/nvda-and-jaws?u=76281980&t=94)** for many popular computer applications on a Windows PC. It also has additional features like skim reading, text analyzer, and the ability to scan and read documents. JAWS has several special modes for navigating websites. The first is virtual cursor. Like NVDA, there are navigation quick keys to move the virtual cursor between features of the page, such as links and headings. In addition, users compress the arrow keys to read line by line, [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) by word, and character by character. Another mode for navigating websites is [Forms](../../Skills/Web%20Development/Forms.md) Mode. The virtual cursor keyboard commands will not pass through to form fields on the page. This protects users from unintentionally changing form field values. Instead, another keyboard shortcut F allows a user to navigate between form fields. In addition to these special modes, JAWS like other screen readers will honor all Accessible Rich Internet Applications, or ARIA, roles and attributes. Adding ARIA support for a webpage, generally does not change the behavior and presentation of the webpage to visual users. However, it is only as good as the context and information provided by the website maintainer. Thus, it's important to carefully apply ARIA markup to all portions of your websites. So all content is presented in a meaningful way to screen reader users. So remember, while voiceover and narrator are free and provided by operating systems, NVDA and JAWS are more feature rich and much more widely used screen readers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (3), cursor (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
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
> **[0:01](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=1)** - A lot of people are intimidated by website accessibility because there is so much information, they don't know where to begin. Luckily, you don't have to become an accessibility expert to build an accessible website thanks to WCAG. Web Content Accessibility Guidelines or WCAG are recommendations for making web content more accessible to people with disabilities. They're written by the [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md) Initiative, WAI, of the Worldwide Web Consortium, W3C. More specifically, continuous work is done by an accessibility guidelines working group to refine existing guidelines and create new guidelines. So why would you want to use WCAG? There are two ways to read this question. The first is, why would we take these recommendations instead of just trying our own way of solving accessibility issues? The answer to that is that countless hours and multiple iterations of guidelines have been contributed by accessibility experts to determine what best meets people's needs, as well as how to provide a solution. In most cases, they've done the heavy lifting for us. As you'll see, the recommendations are thoughtful and thorough, often providing information about why a guideline is necessary. The second way to read this question is why make our website more accessible? Like we discussed before, by following these recommendations, you'll make your website more accessible to people with a wide range of disabilities, such as blindness and low vision, deafness and hearing loss, and photosensitivity.
>
> **[1:34](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=94)** Individuals have diverse auditory, cognitive, physical, visual, and other abilities and barriers. While following the Web Content Accessibility Guidelines will make your content more accessible, it will not address every user and every need. It will address many of them though. Additionally, following the guidelines will likely never have a negative impact on your site. In fact, it can often have a net positive impact on other areas, such as improving SEO, by providing content-rich text and links that all users, including a search engine crawlers can easily use. So what is WCAG? WCAG is made up of four layers of guidance. There are principles, guidelines, success criteria, and sufficient in advisory techniques. Let's look at each layer. The top layer made up of four accessibility principles: perceivable, operable, understandable, and robust. The principles serve as general categories under which the other layers are organized for clarity. In later videos, we'll dive deeper into the four principles. The next layer under principles contains the 13 guidelines as of WCAG 2.2. These provide authors with overall objectives to work toward. Though guidelines are not testable, they provide general context and are meant to help authors better understand how to meet success criteria. And success criteria make up the third layer. The high-level guidelines are given testable success criteria so that conformance testing can be done on websites for regulations and contractual agreements. Less formally, they can let you know
>
> **[3:07](https://www.linkedin.com/learning/web-accessibility-for-developers/introduction-to-wcag?u=76281980&t=187)** if you've met your internal company or website goals. There are three levels of conformance: A, which is the lowest, AA, and AAA, which is the highest. We'll return to these later. Finally, the fourth layer has sufficient techniques, advisory techniques, and documented common failures. It also has examples, resource links, and code. Sufficient techniques are reliable ways to meet the success criteria while advisory techniques are suggested ways. Advisory techniques may be based on technology that is not yet stable or may not be testable. It's important to note that techniques are informative. The success criteria determine conformance, not the technique itself. And then finally, documented failures show authors what to avoid or ways to evaluate if content does not meet WCAG success criteria. Now that we have an overview of WCAG, let's dive in deeper to each of the principles, beginning with perceivable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md) (1)
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
> **[0:01](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=1)** - The first WCAG principle is perceivable, which states that information and user interface components must be presentable to users in ways they can perceive. In general, this means that information should be perceivable in multiple ways because your users will be using different senses and tools for perception. You can't just rely on, say, vision. Let's look at a specific example, use of color. The easiest way to access WCAG is to use the quick reference for How to Meet WCAG. If you take away only one thing from this course, it should be this link because this is WCAG. This has information on every requirement, success criteria, and technique. Let's click on 1.4., Distinguishable, "Make it easier for users to see and hear content, including separating foreground from background." This is one of those items that helps everyone and is critical when it comes to accessibility. Let's dig deeper and look at 1.4.3., Contrast. The visual presentation of text and images of text has a contrast ratio of at least 4.5:1. Clicking show full description gives us more information about the requirement, if there is any. Here we also get information about the exceptions. Now, let's click show techniques and failures. Under sufficient techniques, there are two sufficient techniques. That means these are reliable ways to meet the success criteria. In Situation A, if your text has a measurable contrast ratio of at least 4.5:1 between the text and background image,
>
> **[1:37](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=97)** you'll meet the success criteria. Here's where we get into the detailed and testable information. Up until now, information has been pretty high level, but now this is testable. That's going to come in really handy later. Let's click on this link to learn even more. If we scroll through this page, we see a lot of information, including rationale behind the requirement. The implementation of accessibility recommendations gets more complicated as your design increases in complexity. It can make even beginning an accessibility project feel daunting. My recommendation is to just begin. The development of a living site will never be finished, nor will its accessibility needs. Any page you make improvements on increases the accessibility for someone, and that's a win. Let's go back to the quick reference to look at the failure section for 1.4.3., Contrast. Let's now click on this first failure. An example of how this requirement could fail is, "due to specifying foreground colors without specifying background colors or vice versa." We may develop and be used to the standard colors that user agents provide and occasionally forget to override them with custom styles. Reading the description here, it tells us that, "individuals with low vision will find it much easier to see a webpage that has white text on a black background, and they may have set their user agent to present this contrast. Many user agents make it possible for users to choose a preference about the foreground or background colors they would like to see
>
> **[3:11](https://www.linkedin.com/learning/web-accessibility-for-developers/perceivable?u=76281980&t=191)** without overriding all author-specified styles." Like it goes on to say, unless you've specified both the foreground and background color, whether as text or images, you cannot guarantee the contrast will meet contrast requirements. So this is specific information about how this could fail. Color contrast is just one success criteria, but keep in mind that all information on websites should be presented in a way that adheres to the WCAG principle of perceivable.

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
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=0)** - [Narrator] WCAG Principle number two is operable, which states that user interface components and navigation must be operable. If any principle embodies the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) accessible, it is operable. It's basically letting us know that all parts of the site should be accessible by input devices, controllable regardless of the timing of events, and should be navigable. Let's again take a look at a specific example, Focus Order. Like before we'll go to the quick reference for how to meet WCAG. Let's stop and look at 2.4 Navigable, Provide ways to help users navigate, find content, and determine where they are. Focus order is 2.4.3, if a webpage can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability. That sounds like a lot of websites that get built, menu items in a row horizontally or vertically. Content often has an order on the page left to right, top to bottom, in countries that read in that manner. Keeping website content in this order helps maintain the overall guideline operable. One thing we didn't discuss before was level. 2.4.3 Focus Order is Level A, which is the lowest level of conformance. This level addresses accessibility issues for the broadest group of people. Think of it like a pyramid where Level A is at the bottom, AA is in the middle, and AAA is at the top. To achieve AAA compliance, you have to implement all of double A and single A as well.
>
> **[1:34](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=94)** Implementing only Level A of accessibility requirements is going to make a big difference to a lot of people, though most companies aim for AA. We'll dive into this a little deeper later on. Just like before, we have a link to show techniques and failures, which provides more information about this requirement. Under sufficient techniques, we see that there are several techniques that may be necessary to ensure the site is accessible. Let's click on this first one. This technique, placing the interactive elements in an order that follows sequences and relationships within the content is a sufficient technique to meet 2.4.3 Focus Order. It mentions that each technology defines its tab order, so the mechanism will be slightly different. Below it gives a few examples. Place the first input field first and the second input field second. Like I had mentioned previously, this is an instance where this isn't just good for people using assistive technology, this is helpful to everyone. A really important and helpful item on this page is the test. The procedure and expected result will help determine if the webpage meets the accessibility requirement. Now, there is some interpretation involved here, what is logical, but overall you get a good result from making a reasonable effort here and not leaving it to chance. Let's go back to the quick reference again, and let me show you one more really useful thing on this site, the Filter feature. It's up here in the tab with the gear icon. If you want to find all of the success criteria related to focus, you can filter for that.
>
> **[3:08](https://www.linkedin.com/learning/web-accessibility-for-developers/operable?u=76281980&t=188)** And here are our results. Most of them under Operable, so remember, having an accessible website means having an operable website and WCAG will tell you just how to do that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=0)** - [Instructor] The third and fourth WCAG principles are understandable and robust. Let's look at them separately. Understandable means that information and the operation of the user interface must be understandable. Well, that's not super descriptive, but if we look at the subsections, we see readable, predictable, and input assistance. That gives us a hint about what understandable really focuses on. We're going to hit two in this section. Let's first click on 3.2.4. Consistent identification. Components that have the same functionality within a set of webpages are identified consistently. We haven't discussed it yet, but a lot of these requirements overlap each other. This is a good example of that. The text and labels that you write should be consistent. Just like in website design where we might use a design system to maintain consistency, it is just as important to be consistent here. In fact, [Building Accessibility](../../Skills/Web%20Development/Building%20Accessibility.md) into your design system is a great idea. Let's click on requirement 3.3.3. Error suggestion. If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user. There are a lot of situations listed here because form handling is quite complex. The one thing you don't want to do is just make the boxer on the form field red when it is missing or incomplete. This is not understandable for any of your form users. Now, let's head down to robust, which means content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies.
>
> **[1:35](https://www.linkedin.com/learning/web-accessibility-for-developers/understandable-and-robust?u=76281980&t=95)** 4.1.2, name role value says, for all user interface components, including but not limited to form elements, links and components generated by scripts, the name and role can be programmatically determined. It's one thing to manually make sure your website has its accessibility properties looking good. Robust takes it a step further and ensures that dynamically generated content is also accessible. Now that we've got a solid base in the fundamentals of WCAG and how to look things up in the quick reference, we'll be looking at tools that can be used to view accessible content on webpages. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Building Accessibility](../../Skills/Web%20Development/Building%20Accessibility.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-find-information-on-wcag?u=76281980&t=0)** - [Instructor] Now that I've shown you how to navigate WCAG's Quick Reference, it's your turn to practice looking up information like you would on any given workday. First, open up a link to the WCAG's Quick Reference, which you can find in the course handout. The first item I want you to research is Success Criterion 1.1.1, which is Nontext Content and is conformance level A. What I want you to do is click the Understanding 1.1.1 button to get more information about the success criterion and look for an example of when the Success Criterion applies or should be used. The second item I want you to research is Success Criterion 1.4.3, which is Contrast Minimum, and is also conformance level A. One report that scans the top million pages for accessibility errors notes that low contrast text is the top accessibility error found. You can look in the course handout for more information on these [Statistics](../../Skills/Data%20Science/Statistics.md). What I want you to do is click on Show Techniques and Failures for this Success Criterion, read situations A and B, and determine if a 16-point non-bold font with 3:1 contrast ratio is sufficient to meet this Success Criterion. I'll meet you back in the next video to show you how I would find the answers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=0)** - [Instructor] Okay, I hope you had some success in finding information in WCAG's Quick Reference. But even if you didn't, it's really valuable just spending time getting used to navigating around in it. Let's take a look at the first exercise, which was researching non-text content 1.1.1. We'll open the WCAG Quick Reference, and conveniently for us, this is actually the first success criteria. So it's right at the top of the column. Let's click on understanding 1.1.1. First, we're going to find the full description from the prior page, if we had expanded it. If we look at the page contents menu, we can see all of the information available to us on this page. Intent adds context and additional information provides details and challenges related to fulfilling the success criterion for a particular web item. We're looking for examples. So let's click on that. Here are examples, so let's take a look at a couple. Remember, our intent is to present a text alternative that serves the equivalent purpose. The first one, a data chart, is a common example on a business website. A bar or pie chart is a nice visual representation. Unfortunately, it's just an image and impossible to describe with all text. Instead, ask for the tabled data behind the chart as well, and provide that as an accessible alternative. A second example is an audio recording of a press conference. In a business context,
>
> **[1:31](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=91)** you might think of this as a live Q&A with the CEO that is posted to the website. Besides just an audio and video recording, is a transcript available with applause, laughter, and other details that happened at the event? Let's move on to the second exercise, which was researching contrast minimum 1.4.3. We'll go back to the main Quick Reference page, find 1.4.3, and click on it. Then let's click on show full description. It reads, "The visual presentation of text and images of text has a contrast ratio of at least 4.5 to 1, except for large text." Okay, what is large text? We'll need to know that to figure out our question. Is a 16-point non-bold font with a three to one contrast ratio sufficient to meet this success criterion? Let's now click on show techniques and failures. It doesn't specifically say so, but situation A is describing regular text. Situation B is describing large text. We can look at either situation to figure this out, but let's look at B, which would qualify text to have a three to one ratio. Based on situation B, 18-point font and above can always be a three to one ratio, bold or not bold. 14 to 18-point font is large if it is bold, so it can be a three to one ratio and still be accessible. That's what we were looking for, so our answer is no. 16-point non-bold font with a three to one contrast ratio is not sufficient to meet the success criteria.
>
> **[3:05](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-find-information-on-wcag?u=76281980&t=185)** It would have to be bold or have a 4.5 to 1 ratio, per situation A. I hope you found this exercise helpful. And don't worry, we'll have more opportunities to get your feet wet with accessibility practice later in the course.

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
> **[0:01](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=1)** - Web browsers provide built-in tools for manually testing for accessibility issues, which you can later triage and fix. I'll be demonstrating web browser built-in accessibility tools in Firefox for Mac, but accessibility tools with varying functionality are available in all browsers for Mac and [Windows](../../Glossary/Service/Windows.md). Check out the course handout for instructions on how to access the tools in other browsers. In Firefox, let's go to [binaryville.com](https://binaryville.com). To access the built-in accessibility tools, we can right click anywhere on the page and select inspect accessibility properties, or use the keyboard shortcut command plus option plus C, and select the accessibility tab. The first tool we'll take a look at is the accessibility inspector. To activate it, click on the rectangle with the person. It has turned from black to blue, which means it's ready to inspect. As we're hovering around, it's inspecting anything we're hovering over. Let's take a look at the merchandise text that is overlaying the gradient. It's giving us a lowest contrast calculation of 2.37 and a red exclamation point, meaning this does not meet WCAG requirements. This is a really quick and easy way of checking contrast on your site without having to do any calculations yourself or use any other tools. If you had received a complaint or had a suspicion there was an issue on one section of your website, you could come into this tool and quickly inspect that section. The next accessibility tool in the browser we'll look at is the accessibility tree. Remember all those statements we heard voiceover readout. The accessibility tree will show those to us written out
>
> **[1:36](https://www.linkedin.com/learning/web-accessibility-for-developers/manual-testing?u=76281980&t=96)** in a tree view. Let's take a look at the menu. To find it quickly, right click on the menu on the webpage and choose inspect accessibility properties. On the right, we can see a child count of four. This matches what we saw with voiceover. Opening the tree up a bit and looking at the about item we see link and about. This also matches what we saw with voiceover, so using the browser we can anticipate what will be displayed with voiceover. During development, this is a good place to start with accessibility checks. Is this item functioning as we expect it to? Finally, we can actually begin checking for accessibility issues right in the browser. In that same bar above the accessibility tree, there's an option to check for issues, which has a dropdown menu. We can choose to view only contrast keyboard or text label issues, or we can view all issues. Let's check out contrast issues. It calls out that merchandise text we spotted before and lets us know it doesn't meet WCAG standards. Let's now choose all issues. Looks like in addition to the one contrast item, we've got quite a few text labels missing that we should look into. Pretty handy that we can do all this [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) from our browser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (1), [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=0)** - [Instructor] By adding an extension to our browser, we can supercharge our accessibility testing. axe is an extremely popular and powerful browser extension built by Deque Systems that provides immense insight into accessibility issues. To install axe, first open the Deque website. You'll see they offer the extension for Chrome, Firefox, and Edge. While in the browser you want to install the extension into, click on the button for that same browser. I'm going to install it in Firefox. On this screen, I'll click Add to Firefox, and that's it. The extension is now added. To run it on any website, we'll first open DevTools. We can do that in Firefox by right-clicking anywhere on a website and choosing Inspect or with the Mac keyboard shortcut Command + Option + I. Since we just installed the axe extension, we now have an extra tab right here labeled axe DevTools. Let's click it. All we have to do to scan the webpage that is currently open in the browser is click the button that reads, "Scan ALL of my page." This also works when you're developing locally as well. Let's check for issues. Our results show up on the right, and no surprise here that the Deque website has no issues. Later, we'll run this on a website with a few issues and see how those results get reported and what we can do about them. Now, automated testing shouldn't be used instead of [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md), but rather, in addition to manual testing to catch as many accessibility issues as possible. Now that we've seen how to use axes to look for accessibility issues, in the next video, we'll look at online tools
>
> **[1:33](https://www.linkedin.com/learning/web-accessibility-for-developers/automated-testing?u=76281980&t=93)** that can help us dig deeper into items like contrast checks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (2)
> **Tools:** firefox (4)
> **Prerequisites:** install (3)
> **UI Navigation:** open the (1), click on (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Helper tools](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/helper-tools?u=76281980&t=0)** - [Narrator] The first two tools in this chapter were tools to check for general accessibility issues on websites. These last two tools are specialized for both catching and repairing issues. First, let's look at an online contrast checker. Once you have found a color contrast issue on your website, how do you repair it? Some photo editors like [Figma](../../Skills/Web%20Development/Figma%20(Software).md) have plugins that can provide contrast information. However, if you don't have access to a tool like that or want a quick way to play with possible color combinations, an online contrast checker is the way to go. It also provides the WIC ag requirements right on the page. I can put any color in the foreground. Here are the problematic colors from that binary image, and then I can experiment with different colors in the background. The next tool we'll look at is a heading mapper. One important item for both accessibility and SEO is for headings to be arranged hierarchically. Particularly for content heavy webpage, this can be difficult to keep track of. Enter the Heading Mapper extension. Let's install it for Firefox. Now we can go back to Binaryville, run the extension, and see a map of the headings on the page. The numbers on the left indicate the header level. In our case, we actually have an H2 before the H1, which is not recommended. That would be a good repair to make for accessibility and SEO reasons. Both the contrast tool and heading mapper are great tools to have in your tool belt to help you repair accessibility issues. So be sure to keep them close by.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (1)
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
> **[0:01](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=1)** - Prior to doing any accessibility work on your website, you may want to first decide what your goals are for conformance. Making your website accessible is not simply a binary of, is my website accessible or not? Instead, WCAG guidelines are categorized into three levels of conformance to meet the needs of different websites and different situations. These three levels are A, which is the easiest, AA, which is in the middle, and AAA, which is the hardest to meet. As we'll see, these levels build progressively on each other. The working group assigns success criteria to a conformance level after taking a wide range of issues into consideration, such as, are they essential? Are they possible to satisfy for all websites and types of content? And can they be reasonably achieved by content creators? Let's look at the conformance levels. Level A is the easiest conformance level to meet, and generally does not have much impact on a website's structure or design. It sets a minimum level of accessibility, but does not achieve accessibility for many situations. WCAG success criteria indicate what level of conformance they meet as shown in the screenshot here. For your entire website, if you meet the success criterion for say, use of color, you can consider your website conforming to level A for use of color. If your entire website meets all level A success criteria, then your website meets WCAG level A conformance. Level AA is the middle conformance level. To meet it, you must meet all success criteria in level A
>
> **[1:37](https://www.linkedin.com/learning/web-accessibility-for-developers/identify-conformance-goals?u=76281980&t=97)** and then the additional items that are specified for level AA. It is the most common level that companies aim for in conformance goals. This level gets into items that may affect the design and functionality of a website, but at the same time provide accessible content to far more people. Again, WCAG guidelines will explicitly call out the conformance level so that developers and designers know exactly what conformance level they are developing or designing toward. The final level, level AAA, is the hardest conformance level to meet. It encompasses all level A and level AA success criteria, as well as its own list of success criteria. Part of what makes it so difficult to meet is that in some cases, it may not even be possible to meet for all content as shown in the example. This is partially why many people aim for level AA conformance. However, many level AAA criteria are still worth knowing about and aiming for, such as enhanced text contrast. Once your website has met a level of conformance, you can place a WCAG conformance logo on your website to indicate a claim of conformance. These logos are available at the W3C website. One final note about conformance: Conformance to a certain level does not have to be the end goal. Just making a website more accessible for people is a great goal. The WCAG Working Group has provided leveling as a way of prioritizing certain items over others, but as I've mentioned before, any work is helpful on the accessibility front.

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
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=0)** - [Instructor] Previously, we installed the axe browser extension in Firefox. Now, let's go ahead and run it on an actual website and see if it can spot some accessibility issues. As a reminder of how to use axe, we'll first go to the website we want to audit, in this case, Big Star Collectibles. Next, we'll open Developer Tools by pressing Command + Option + I on a Mac. Then we'll go to the axe DevTools tab. Like it says in the tool, let's get started. Click the button that says, "Scan ALL of my page." Okay, looks like we have five issues on the page. Let's dig into these a bit. On the left, along with the total number of issues, axe also categorizes them by severity. As we'll see when we triage these issues, these categories don't necessarily line up with conformance levels, but they at least give some indication of how severe a problem is to users. On the right, the issues are grouped by type of error. If we click on the first item, Elements must meet minimum color contrast ratio thresholds, axe provides a wealth of information to us. First, there is a Highlight button we can click that will show us which element has the accessibility issue. This is helpful for finding the element on the page. In this case, these are the menu items. Next, there's a more detailed description of the problem and a link to axe's website with even more details about the issue and potential solutions. Then, we see the code with the issue and a description of the specific problem on our page. In this case, it lists the offending colors. Finally, we see tags assigned to the issue.
>
> **[1:35](https://www.linkedin.com/learning/web-accessibility-for-developers/do-automated-testing?u=76281980&t=95)** This actually gives us the Success Criterion number for the issue, in this case, 1.4 0.3, so we can go to the WCAG Quick Reference and find more information. Moving down to the second issue, this one is Images must have alternate text. I'll click the Highlight button again to show which element on the page is affected. One other feature in axe to note is that if there are multiple elements with the same issue, we could press the next issue icon to see the next element with the issue for as many elements as there are in that category. Let's run axe on one more page on our website. Again, we go to DevTools, then axe DevTools, then press Scan ALL of my page. We see the menu item contrast issue again. We also have two Form elements must have labels and one Select element must have an accessible name, which I'll look to be related to form labels. I'm going to make a list of all of the issues we encountered so that we can triage them and decide in what priority order we'll fix them. So don't worry, we're definitely going to be fixing these errors we found with automated testing.

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
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=0)** - [Instructor] Like I mentioned before, X won't catch all accessibility issues on your website, so it's a good idea to do [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) as well. We'll use Firefox and our newly acquired accessibility knowledge to do some manual testing on our website. Let's open the contact page of Big Star Collectibles again. Like we learned for manual accessibility testing, we'll open dev tools and go to the built-in accessibility tab. On that tab, we'll choose text labels under check for issues. At the top, we can see text box, text box, combo box. That's actually notifying us of the form label issues we discovered using X, so we already know what those are. Now let's click on the link right below combo box. That's the [Instagram](../../Glossary/Service/Instagram.md) link right over here on the right. It says interactive elements must be labeled, and there are four links here. So all four of these social media icons probably have that same issue. So we'll find a solution and use it for all four. Now, let's turn check for issues off and look at tabbing order on the page, which is also how a screen reader traverses the page top to bottom. Let's click show tabbing order. Number one is a skip to main content hidden element, which is right here, and is used to allow screen reader users to skip the header element altogether, which is why it is tabbing element number one. Let's keep looking. Number two is the logo, three is home, four is [products](../../Skills/Software%20Development/Microsoft%20Products.md). Then 25 is about. This means if I were tabbing along,
>
> **[1:32](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=92)** tab number five would take me into the products menu instead of to the next top level menu item about. It's a little busy, but you can actually see that five through nine, 10 through 14, 15 through 19, 26 through 30, and 31 through 38 are menus. It's better to use the tab button to traverse the top level menu like a visual user would scan the menu with their eyes. Then use other buttons like the down arrow or return key to access the sub menus. Think about it like this. If a screen reader user wants to get to the contact menu item the way we have it here, as we can see, they have to go through the list for 39 announcements. It would be a much better experience to have it be six announcements away. In addition to testing at Firefox, sometimes testing is just going to be very manual. You have to get to know accessibility rules, and then keep an eye out that you and your team are doing the right thing. X and Firefox won't catch everything. Sometimes you just have to spot issues. As you get to know the success criteria better and the general goals, you'll have an easier time spotting these issues. Let's open the homepage of Big Star Collectibles and look at one more issue. There are four groups of characters on the page that we can find out more information about, and each has a button leading to more information. Here's the first one, and it reads Explore Binaryville and has an arrow. Scrolling down the second group's button reads, see all characters with an arrow. Still pretty descriptive,
>
> **[3:04](https://www.linkedin.com/learning/web-accessibility-for-developers/do-targeted-manual-testing?u=76281980&t=184)** and I think someone would understand just on the basis of the button alone what it would do. It is however different in format than the button above. Continuing to scroll, the next button reads see all with an arrow, and the fourth button just has an arrow. The fourth button really relies on the text over to the left for context, but the overall problem here is that the buttons all have the same functionality, so they should be identified consistently. It's pretty evident when it appears on a single page, but imagine these being spread across a website. You want to make sure these buttons are identified consistently even across the whole website. I'll add these items we caught with our manual testing to our list as well, and we'll get to triaging.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (3), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Instagram](../../Glossary/Service/Instagram.md) (1)
> **UI Navigation:** open the (2), go to (1), click on (1)
> **CLI Commands:** find (2), make (1)
> **Tools:** firefox (3)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Triage issues](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=0)** - [Instructor] Now that we have a list of the accessibility issues on our site, we can go ahead and triage them. Triaging refers to assigning priority levels to tasks to determine the order in which to address them. There are various ways those priority levels could be established, so let's talk through some of them. On this slide, I've consolidated all of the accessibility issues we found using both axe and [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) that we need to triage. There are six altogether. I've listed the issue, the WCAG Success Criterion and the Conformance Level. I want to first mention where the Success Criterion and Conformance Levels came from Back when we were using axe, when an accessibility issue came up, there were tags below it. In this image, one of these tags reads "wcag143." This is what indicates the Success Criterion 1.4.3. We can look this up using the WCAG Quick Reference under Principle 1, Perceivable, Section 4, Distinguishable. This is Success Criterion Contrast Minimum 1.4.3. Just to the left of the Success Criterion tag is wcag2aa. This indicates the Conformance Level AA, which we can also confirm on the Success Criterion webpage. When looking for accessibility issues manually, it can be a bit harder to classify the issues. Luckily, with a few clicks of the mouse, you can access additional information on some topics. Here's how. In Firefox, when we were looking into the text labels issue on the far right, there was a Learn More link.
>
> **[1:33](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=93)** Clicking on that takes us to the MDN website, a reputable website for developer information. It discusses accessibility guidelines, and at the bottom, it also provides links to related WCAG Success Criteria. It provides three possible options, but the top one happens to be the one that is applicable in this scenario. So now we're back to our list of issues. Perhaps your CEO has passed down a company-wide accessibility mandate. Perhaps you have legal obligations to fulfill, or perhaps you just want to make the most accessible website or web application possible. Whatever the reason, you now have a list of accessibility issues to complete and a limited budget and amount of time to complete them. What's a developer to do? Prioritize. One way of ordering this list would be simply by Conformance Level. Like we discussed before, a Conformance Level of single A is the easiest level to meet. In order to meet level AA, you would have to have all items in level single A met anyway. So this is certainly a good option. Another way of ordering our list of issues would be by taking the easier or smaller ones first. Many developers are familiar with the concept of sizing tickets for [Agile](../../Skills/DevOps/Agile%20Development.md) estimation, but here's a quick refresher. You can use actual number of hours, a relative scale of numbers, like the Fibonacci sequence, or another relative scale, like T-shirt sizing, to estimate how long each task will take. As you do more accessibility work, your estimates should become more accurate. It turns out most of our issues are small. We only have one issue that is large, so I think it would make a lot of sense
>
> **[3:05](https://www.linkedin.com/learning/web-accessibility-for-developers/triage-issues?u=76281980&t=185)** to prioritize it in this way. All of our small issues get prioritized first. Then the large issue gets put at the end. It is a level single A, but we should be able to do these small tasks pretty quickly and then plan when we want to work this large task in. But remember, triaging accessibility issues is going to be based on your priorities and goals. So let those be your guide when tackling an accessibility project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (1), [Agile](../../Skills/DevOps/Agile%20Development.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/challenge-run-axe-on-a-website?u=76281980&t=0)** - [Narrator] Now that I've shown you how to run axe, it's your turn to practice running it yourself on a website. First, if you haven't already installed it as a browser extension, follow the link in the course handout to install axe in your favorite browser. Then choose any two websites you like, your production website, a news website, a social media website, et cetera, and run axe on those websites. Pay close attention to the most common errors on each and see if you see any similarities. I'll meet you back in the next video to show you how I would run axe on a website.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Run axe on a website](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-run-axe-on-a-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/solution-run-axe-on-a-website?u=76281980&t=0)** - [Narrator] Okay, I hope you were able to run Axe on a few websites and find some interesting accessibility issues. Even better if you found a website without any issues. So if I were doing this challenge, here's what I would do. After installing the Axe browser extension, I would open the webpage to evaluate with Axe, either local or on the internet. Then I would open DevTools and go to the axe DevTools tab. Finally, I would click the Scan all of my page button and wait for it to complete its scan. Then I have my list of issues and I'm ready to triage.

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
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=0)** - [Instructor] Like I mentioned in the last video, I've decided to fix the five small issues discovered in my Accessibility Audit and put the large issue in the backlog for now. So let's get started fixing those issues. The first issue we'll repair is the menu item Contrast. ACCS already did the calculations for us and noted that the Contrast Ratio needs to be 4.5 to one. If we needed to determine the requirement ourselves, this is how we'd do it. First, we would find out how large the font is. We'd go to our webpage, inspect the element and check the computed size of the text itself. It's 18 pixels. The WIGAC success criterion is given in points, so we'd need to convert to points by multiplying by 0.75. This gives us about 14 points. Additionally, the font weight is 500, which is considered medium, so this is not a bold font. Lastly, we consult success criterion 1.4.3 to figure out which situation it falls in. There are really just two ways to fix this issue, either make the text lighter or the background darker. This is a good time in the process to consult a designer since this may cause changes to other areas throughout the site and impact design cohesiveness. To repair this issue, we'll increase the opacity of the white link color. This will essentially lighten it by showing less of the background color. We'll do this in the CSS file. Here's our selector in the webpage, and here it is in the CSS file. So again, we'll increase the opacity.
>
> **[1:36](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=96)** Like any [Software Development](../../Topics/Software%20Development.md), we would test this locally and iterate if needed. If the contrast ratio didn't pass locally in ACCs, we would adjust more. Once I deploy my changes and we run ACCs again in the next video, we should see that the issue has been resolved. The next item we'll repair is the missing alt tags on the robot images. The first two robot images under Explore Binaryville are missing alternate text. In the [HTML](../../Skills/Web%20Development/HTML.md) code, we'll find Delores's image. The nice thing here is that we literally just have to add what they're telling us to add, the alt tag and a description. Now, we could just write robot avatar and that would be somewhat descriptive, but there are a lot of robot avatars on this page. We could also write Delores's avatar, and that would be a little more descriptive, but does that really add much information about the image itself? Instead, let's describe her a bit. Let's see, she's a yellow robot with eyelashes.
>
> **[2:41](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=161)** Great, not too long, but gives a little bit of a description of what she really looks like. Now we'll do the same for Rex. Again, when I deploy my changes and run ACCS again, we should see the issues have been resolved. Finally, on our homepage, let's repair that little issue we found manually where the text for the links of the different sections isn't consistent. The first one reads Explore Binaryville. The second one reads, see all characters. The third one reads, see all, and so on. Since the heading text already reads, Explore Binaryville, I don't think we need to repeat that text. I think the text, see all characters, is probably a good solution here. So let's use that for all four links. We'll make that change on the A tags. Here's the first change and we would make the change for the other two that are different as well, and that's all we need to do for that one. There's one other page on our website that had two issues on it. The first issue was missing form labels. ACCS identified that the first three items in the form didn't have form labels, so let's repair that. As we can see in the code, the your email text is just a paragraph tag. It's not an actual label tag, so that's what we need to repair, and then we would repair it for your name and how can we help as well. Now screen readers can accurately associate the label with the form field itself due to the label tag and the four attribute. When we run ACCS again, we should no longer see that error.
>
> **[4:15](https://www.linkedin.com/learning/web-accessibility-for-developers/repair-accessibility-issues?u=76281980&t=255)** There's one final issue we caught in Firefox, and that was the social media images missing alt tags. So we'll go to this A tag for [Instagram](../../Glossary/Service/Instagram.md), and even though we don't have a real link in here, we'll go ahead and make sure we add in an alt tag for accessibility purposes. This adds an Aria label to the A tag despite the SVG icon being hid into screen readers, we'll make sure to do it for the other three social media icons as well. So there we go. We fixed all of the small issues on our list. The next step is to deploy these changes and then we can run ACCS again to make sure everything looks good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Instagram](../../Glossary/Service/Instagram.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=0)** - [Instructor] Now that we've made our repairs, we can use axe and [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) to verify that our repairs were successful. Before running axe, let's remind ourselves that our first page had two issues caught by axe, menu item contrast, and missing alt tags. Since we fixed both of those, we should see zero axe errors. Let's open up our first page that had issues and then we'll run axe. So there we go, we see zero automatic issues. The other item on this page was a manual item, the text of see all characters being different for each section. This one we can scan visually to ensure it's repaired. We should see four instances of buttons that read, see all characters. One, two, three, four, and there they are. We have one other page that we repaired. As a reminder, there was one issue discovered by axe on this page, missing form labels. So let's check that first. We'll run axe to ensure we're seeing zero issues, and that looks great. The final thing we need to do is check for the one type of manual issue that we discovered on this page. The issue was the missing alt tags on social media images, and we found it by looking at the Accessibility tab. So we can check to see if it was repaired the same way. Under Check for Issues, Text Labels, we had previously seen four issues for the four social media images on the right side of the page. If we've made our repairs correctly and choose that again, we should see a blank list. And there we go, our repairs look good.
>
> **[1:35](https://www.linkedin.com/learning/web-accessibility-for-developers/retest-after-repairs?u=76281980&t=95)** That's the last of the repairs we set out to do. Just to recap, we used axe and manual testing to find issues on our site. We identified five that we were going to repair immediately. We made our repairs, then we used axe and manual testing to verify the repairs had worked. Not a bad day's work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (3)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/web-accessibility-for-developers/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/web-accessibility-for-developers/next-steps?u=76281980&t=1)** - So that's a wrap. Congratulations on making it through the researching, triaging, and repairing of accessibility issues on a website. Now that you've built a foundation of accessibility knowledge, here are some next steps you can take. First, you can connect with me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) and share your accessibility journeys with me. Next, LinkedIn has many other courses on [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md), and I'd encourage you to keep learning. Here're some that I would recommend. So congratulations again on completing the course. With your help, there will be more accessible websites on the internet in no time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md) (1)
> **Speakers:** - so (1)


## Instructor

- [Donia Robinson](../../Instructors/Web%20Development/Donia%20Robinson.md)

## Path Context

### In [Prepare for Digital Accessibility](../../Paths/Web%20Development/Learning%20Paths/Prepare%20for%20Digital%20Accessibility.md)
← [Accessibility for Web Design](Accessibility%20for%20Web%20Design.md) | **4 of 8** | [Architectural Design- The WE Way for Workplace Inclusivity](Architectural%20Design-%20The%20WE%20Way%20for%20Workplace%20Inclusivity.md) →

## Appears In

- [Prepare for Digital Accessibility](../../Paths/Web%20Development/Learning%20Paths/Prepare%20for%20Digital%20Accessibility.md)

---

[↑ Back to top](#)