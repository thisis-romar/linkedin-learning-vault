---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: wordpress-accessibility-22376834
url: "https://www.linkedin.com/learning/wordpress-accessibility-22376834"
duration_minutes: 170
duration: 2h 50m
level: Intermediate
updated: 6/9/2023
learners: 5709
skills:
  - Web Accessibility
  - Digital Accessibility
  - WordPress
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFTPDbgaebkNg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1686181045304?e=2147483647&amp;v=beta&amp;t=PN5YudqqOOHIILuUQizIX5Q_tNQcUNp_ProAXfwgChc"
linkedin_topic: Web Development
learning_paths:
  - '[[Getting Started with WordPress]]'
prev_courses:
  - '[[Creating Block Patterns in WordPress]]'
next_courses:
  - '[[JavaScript Essential Training]]'
path_nav: '[{"path":"Getting Started with WordPress","position":7,"total":10,"prev":"Creating Block Patterns in WordPress","next":"JavaScript Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/web-accessibility
  - skill/digital-accessibility
  - skill/wordpress
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/WordPress-%20Accessibility.md)

![WordPress: Accessibility](https://media.licdn.com/dms/image/v2/D560DAQFTPDbgaebkNg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1686181045304?e=2147483647&amp;v=beta&amp;t=PN5YudqqOOHIILuUQizIX5Q_tNQcUNp_ProAXfwgChc)

# WordPress: Accessibility

> WordPress has undergone a variety of major changes in recent years, including new features that help you build accessible websites. In this course, WordPress core contributor, developer, and web accessibility consultant Joe Dolson covers a wide array of topics relating to creating an accessible website in WordPress. Joe explains the different types of themes and how they impact your website. He di

> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-accessibility-22376834) | 2h 50m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Making accessible websites using WordPress](#making-accessible-websites-using-wordpress)
  - [WordPress base knowledge](#wordpress-base-knowledge)
- [**1. What Is Web Accessibility**](#1-what-is-web-accessibility) (3 videos)
  - [Web accessibility concepts](#web-accessibility-concepts)
  - [Accessibility and your business](#accessibility-and-your-business)
  - [Assistive technology overview](#assistive-technology-overview)
- [**2. Accessibility and WordPress**](#2-accessibility-and-wordpress) (6 videos)
  - [Understanding accessibility in WordPress](#understanding-accessibility-in-wordpress)
  - [WordPress core features](#wordpress-core-features)
  - [WordPress Classic themes](#wordpress-classic-themes)
  - [WordPress full site editing](#wordpress-full-site-editing)
  - [WordPress plugins](#wordpress-plugins)
  - [Creating accessible content](#creating-accessible-content)
- [**3. Accessibility in Your Theme**](#3-accessibility-in-your-theme) (7 videos)
  - [Examining accessible design](#examining-accessible-design)
  - [Accessible color](#accessible-color)
  - [Accessible navigation](#accessible-navigation)
  - [Perceivable images and icons](#perceivable-images-and-icons)
  - [Page architecture and HTML semantics](#page-architecture-and-html-semantics)
  - [Page builders](#page-builders)
  - [Block themes vs. classic themes vs. page builders](#block-themes-vs-classic-themes-vs-page-builders)
- [**4. Using Accessible WordPress Plugins**](#4-using-accessible-wordpress-plugins) (4 videos)
  - [How to assess plugin accessibility](#how-to-assess-plugin-accessibility)
  - [ARIA, AJAX, and other four-letter words](#aria-ajax-and-other-four-letter-words)
  - [Interacting with forms and their responses](#interacting-with-forms-and-their-responses)
  - [Authoring tools and accessibility guidelines](#authoring-tools-and-accessibility-guidelines)
- [**5. Accessibility Plugins for WordPress**](#5-accessibility-plugins-for-wordpress) (3 videos)
  - [Testing tools for WordPress](#testing-tools-for-wordpress)
  - [Accessibility overlays](#accessibility-overlays)
  - [Accessibility add-ons](#accessibility-add-ons)
- [**6. Authoring Accessible Content**](#6-authoring-accessible-content) (5 videos)
  - [Writing accessible content](#writing-accessible-content)
  - [Using audio and video](#using-audio-and-video)
  - [Organizing content on the page](#organizing-content-on-the-page)
  - [Accessibility support in the Block Editor](#accessibility-support-in-the-block-editor)
  - [Accessibility support in the Classic Editor](#accessibility-support-in-the-classic-editor)
- [**7. Testing for Accessibility**](#7-testing-for-accessibility) (5 videos)
  - [Automated and manual testing](#automated-and-manual-testing)
  - [Testing accessibility with the keyboard](#testing-accessibility-with-the-keyboard)
  - [Testing accessibility with WAVE by WebAIM](#testing-accessibility-with-wave-by-webaim)
  - [Testing accessibility with AXE by Deque](#testing-accessibility-with-axe-by-deque)
  - [Using bookmarklets for quick assessments](#using-bookmarklets-for-quick-assessments)
- [**8. Remediation Workshop**](#8-remediation-workshop) (4 videos)
  - [Finding the issue](#finding-the-issue)
  - [Identifying the source of an issue](#identifying-the-source-of-an-issue)
  - [What needs to change?](#what-needs-to-change)
  - [Making the change](#making-the-change)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Making accessible websites using WordPress](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-accessible-websites-using-wordpress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-accessible-websites-using-wordpress?u=76281980&t=0)** - [Instructor] Creating an optimal [[User Experience (UX)|user experience]] requires attention to accessibility.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-accessible-websites-using-wordpress?u=76281980&t=5)** You don't know what devices or abilities visitors bring to your site.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-accessible-websites-using-wordpress?u=76281980&t=8)** After I access a website for accessibility, I see a lot of frustration from clients when they need to rebuild their work.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-accessible-websites-using-wordpress?u=76281980&t=15)** Too often, accessibility is an afterthought, but it's hard to find and assemble all the different pieces needed for building and testing accessible websites.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-accessible-websites-using-wordpress?u=76281980&t=25)** So that's what I've done for you in this course.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-accessible-websites-using-wordpress?u=76281980&t=26)** You'll learn everything from accessibility concepts to [[WordPress]] tools and techniques to accessibility testing methods.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-accessible-websites-using-wordpress?u=76281980&t=34)** Many of these concepts apply to any website.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-accessible-websites-using-wordpress?u=76281980&t=37)** Let's get started.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-accessible-websites-using-wordpress?u=76281980&t=38)** Learning Accessibility in WordPress.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2), [[User Experience (UX)|User experience]] (1)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [WordPress base knowledge](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=0)** - [Instructor] In this course, you'll learn how to create a website that's accessible to people with disabilities, using the [[WordPress]] [[Content Management]] system.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=9)** This course is about WordPress, so you should be comfortable installing WordPress, adding themes and plugins, and be comfortable navigating settings in the WordPress admin.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=18)** You'll also need a basic understanding of [[HTML]] and CSS.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=23)** If you need a refresher, I do recommend watching [[WordPress Essential Training]] and the [[HTML Essential Training]] before starting this course.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=30)** While you don't necessarily need to know [[JavaScript]], a familiarity with what it is and how it's used will be useful.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=39)** On the accessibility side, there are a few terms I'll use frequently you'll want familiarity with.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=45)** WCAG, or W-C-A-G, refers to the Web Content Accessibility Guidelines, a standards recommendation published by the World Wide Web Consortium, or W3C.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=55)** The W3C also sets the standards for CSS and HTML.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=60)** These guidelines are broken up into a set of success criteria, each identified as being Level A, AA, or AAA.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=69)** The level of a guideline is one indicator of how widely applicable it is.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=74)** Meeting guidelines at Level A will generally help the largest numbers of users.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=79)** At Level AAA, conformance will be relevant to a smaller group of people.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=84)** These issues may only apply to one type of disability or only to a combination of disabilities.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=91)** Assistive technology, or AT, is a general term for technology to help people with disabilities.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=98)** It covers an enormous range of implementations in both [[Hardware]] and software.
>
> **[1:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=103)** Assistive technology includes screen readers, braille readers, voice control, text [[Zoom]], pointing tools and many other devices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (5), [[HTML]] (3), [[Content Management]] (1), [[JavaScript]] (1), [[Hardware]] (1)
> **Env Vars:** html (3), css (2), w3c (2), aaa (2), wcag (1)
> **Documentation:** w3c (2)
> **Definitions:** refers to (1), is a  (1)
> **Speakers:** - [instructor] (1)


### 1. What Is Web Accessibility

[↑ Back to Table of Contents](#table-of-contents)

#### [Web accessibility concepts](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=0)** - [Instructor] Let's start by breaking down the concept of [[Web Accessibility]] in four principles.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=6)** Perceivability, operability, understandability, and robustness.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=12)** These four principles are the foundation of what makes digital content accessible.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=17)** Write down some notes on these four principles, so you can easily answer the assessment questions that test your knowledge between videos.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=25)** These concepts were established by the Worldwide Web Consortium or W3C in a document called the Web Content Accessibility Guidelines or WCAG.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=35)** They describe a set of detailed criteria you can use to test your website content for accessibility.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=42)** Perceivability is about a user's ability to get information from web content.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=47)** Perceivable content is content that can be absorbed equally using more than one sense.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=54)** Images can be described with text, videos are provided with audio descriptions and captions.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=60)** Because plain text can be interpreted using text to audio software, written text is the foundation element of accessible information.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=71)** Operability is about interacting with content.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=74)** A website is operable if every item on the page can be used no matter what device is in use.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=83)** Any [[HTML]] link, button, or input field can be used with a mouse, with a keyboard, using a touchscreen such as a mobile phone or tablet, or with the more limited inputs in a switch system.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=97)** Understandability is about comprehension.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=101)** A user may be able to perceive the literal text on your website, but not be able to understand it.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=108)** A user may fail to understand your content for many reasons.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=111)** Failure to define the language of the content or provide the definitions of unusual words or abbreviations are a significant problem.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=120)** Consistency and predictability in navigation, and clarity of labels for input fields, or handling of errors are also important.
>
> **[2:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=129)** Robustness is all about future proofing.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=133)** A website is robust if it works reliably in current and future browsers and with assistive technologies.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=140)** This mostly requires that the code conforms to defined standards.
>
> **[2:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=146)** When writing according to standards, any device that is aware of that standard can display the content.
>
> **[2:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=153)** All of these principles work together to help you create documents that give users a fair chance at successfully using your website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Accessibility]] (1), [[HTML]] (1)
> **Env Vars:** w3c (1), wcag (1), html (1)
> **Documentation:** w3c (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Accessibility and your business](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=0)** - [Instructor] When your website isn't accessible, your denying access to your information, [[Microsoft Products|products]] and services to a large group of users.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=9)** Building a business website that arbitrarily denies access to members of the world's largest minority group, around one in six people worldwide, has no shortage of downsides.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=22)** [[Ethics]] alone would suggest that denying people access to your platform is the wrong thing to do, but an accessible website isn't just an ethics question.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=31)** Although creating an accessible website is unquestionably the right thing to do, it's also a legal obligation in many jurisdictions, including most of Europe, parts of Canada and the United States.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=43)** Failure to provide an accessible experience can expose you to significant legal risk.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=49)** Under the EU's Directive 2019/882, private sectors, including [[E-Commerce]], [[Banking]] and E-books, are all required to meet accessibility standards.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=61)** Member states of the EU were required to establish their own national laws by June 28th, 2022.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=69)** Enforcement will start on June 28th, 2025.
>
> **[1:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=73)** In Canada, the Accessible Canada Act became law on June 21st, 2019.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=80)** This act seeks to remove accessibility barriers across Canada.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=85)** It compliments several earlier laws in Canadian provinces.
>
> **[1:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=89)** The United States and Australia both have general purpose laws created in the early 1990s that require websites be accessible to people with disabilities.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=99)** In the US, that requirement is found in the Americans with Disabilities Act of 1990, and in Australia it's found in the Disability Discrimination Act of 1992.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=111)** Neither law specifies a particular standard to conform to, and no regulations have yet been written to elaborate this.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=119)** However, both laws broadly cover places of public accommodation, and courts in both Australia and the United States have repeatedly demonstrated that these laws apply to websites.
>
> **[2:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=132)** Lacking any regulations, your best choice is to work towards conformance with the latest version of WCAG, version 2.1 at level AA.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=142)** There are many advantages to having an accessible website for your business.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=147)** Implementing accessibility can set your business apart from others in the same industry.
>
> **[2:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=152)** People with disabilities represent a worldwide market of over a billion people with a spending power of greater than $8 trillion.
>
> **[2:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=162)** By implementing best practices for website accessibility, you can increase your potential market reach, improve usability for all website visitors and minimize your exposure to legal risk.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethics]] (2), [[Microsoft Products|Products]] (1), [[E-Commerce]] (1), [[Banking]] (1)
> **Env Vars:** wcag (1)
> **Versions:** version 2 (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Assistive technology overview](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=0)** - [Instructor] Okay.
>
> **[0:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=1)** What's assistive about assistive technology?
>
> **[0:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=4)** How does assistive tech help users?
>
> **[0:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=7)** And how can you help assistive technology?
>
> **[0:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=10)** Write down your thoughts and ideas and revisit them at the end of this course to add more ways you can help.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=17)** While not every person who depends on accessible websites makes use of additional software or [[Hardware]] every accessible web experience is intermediated by some kind of assistive technology.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=30)** Broadly speaking, assistive technology is any innovation that aids a person in using a computer.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=37)** Every user depends on technology to interact with computers.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=42)** Most people make use of the combination of keyboard, mouse and monitor.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=46)** Keyboards, computer mice and monitors are not in themselves assistive technology in the most traditional sense.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=53)** However, they illustrate an important concept in website accessibility, that everything on the web depends on the use of hardware and software to interact with it.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=65)** Assistive technology includes devices designed for many different purposes.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=70)** Some assistive technology is dedicated to providing alternate methods of input.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=75)** These include alternative format keyboards, alternative types of pointer devices, and switch input systems.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=81)** Most of the time, the method of input doesn't really impact the experience with one very important exception, when a website only supports one type of input.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=93)** If a site can only accept mouse or pointer input on any control, then a user who can only use a keyboard cannot use that site.
>
> **[1:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=102)** This is one of the most common problems on the web.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=105)** Most of the assistive technology we'll address in this course has to do with methods of handling website output.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=113)** People with visual impairments make use of software tools including screen readers which provide oral interpretations of the content of a website or [[Zoom]] interfaces which enlarge the content on the screen for low vision.
>
> **[2:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=128)** They may also use features built into their operating system to switch into high contrast mode.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=133)** People who are deaf or hard of hearing need text equivalence of audio materials.
>
> **[2:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=139)** You need to provide transcription or captions for all video or audio.
>
> **[2:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=144)** People with mobility impairments may have problems using a mouse for fine pointing actions if they have conditions that affect fine motor control, such as Parkinson's disease or multiple sclerosis.
>
> **[2:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=157)** Mobility impairments can also result in difficulty using a keyboard for users who are paraplegic or have no arms, missing fingers, or similar types of impairments.
>
> **[2:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=167)** Cognitive impairments can also be compensated for on the web.
>
> **[2:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=171)** Cognitive impairments can include dyslexia and related conditions, dyscalculia, dysmapia, Autism and ADHD.
>
> **[3:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=180)** These can be the most difficult issues to address as the experiences of each individual can be radically different.
>
> **[3:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=188)** While people with cognitive impairments may not use assistive technology, they will benefit significantly from design decisions that support their needs.
>
> **[3:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=198)** In many cases, these choices will also have benefits for all your users.
>
> **[3:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=203)** Most website accessibility issues are a failure to deal with one or more of these situations.
>
> **[3:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=210)** Screen reader users need visual elements to communicate what they are and what they do via oral means.
>
> **[3:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=218)** Keyboard users need links, controls, and input fields to work with the keyboard.
>
> **[3:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=224)** This combination alone is a significant percentage of accessibility issues.
>
> **[3:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=228)** Screen reader users are also largely dependent on keyboard navigation.
>
> **[3:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=233)** These two groups of errors account for a vast percentage of problems on the web.
>
> **[3:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=238)** For all of these users, assistive technology is a means to an end.
>
> **[4:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=243)** With a well-built website, assistive technology is how information is communicated between your website and your user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Zoom]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Env Vars:** adhd (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Accessibility and WordPress

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding accessibility in WordPress](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=0)** - [Instructor] Although [[WordPress]] offers a lot in the way of accessibility, you cannot simply install WordPress, set up a site with any theme, and expect it to be accessible.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=12)** This is because WordPress isn't a monolithic system.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=16)** Any website built with WordPress is a collection of many different pieces assembled together.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=22)** The core of WordPress generates part of the site, but much more of your website will come from your theme, your plugins, and your own choices when adding content.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=32)** Let's use the analogy that a WordPress website is like a house.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=36)** In this house, WordPress has set up the framing and the foundation.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=41)** You've got the bones of a home, but with WordPress alone, you don't have a house, at least not one that is at all usable.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=49)** When you add a classic theme, it will set up siding and roofing materials, it'll create doors, points where you can access your house, it'll add [[Windows]] and that all the ornamental elements that make your house look great from the street.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=62)** Your content is like what you put in each room, making sure that each room in your house serves a well-defined purpose and has all the pieces of furniture you need to communicate.
>
> **[1:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=73)** Plugins are the plumbing and mechanicals of your house, they're the pieces of a website that help with the necessary foundations for your website.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=82)** Plugins are what transform your house between a home, a home business, a retail store, or an apartment building.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=90)** With the right choice of plugins, the purpose of your new building takes shape.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=96)** Within this analogy, we can start to illustrate how accessibility can go wrong in WordPress.
>
> **[1:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=102)** No matter how solid the underlying framing and foundation may be, your theme, plugins, and content can cover up that foundation and create new problems.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=113)** The theme explicitly provides a set of colors and fonts, these fonts may be difficult to read, the colors chosen might create contrast problems to people who are colorblind have difficulty seeing.
>
> **[2:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=125)** While WordPress includes accessible search and comments [[Forms]], these can be replaced by the theme, so they may not be correctly labeled and they maybe can't be identified using a screen reader.
>
> **[2:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=137)** The [[HTML]] of the navigation menu comes from WordPress, but once it's styled by the theme using CSS and [[JavaScript]], it may no longer be navigable using the keyboard.
>
> **[2:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=149)** Plugins can add a whole new interaction experience to your website and WordPress has no control over what that experience might be like.
>
> **[2:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=158)** When you install a plugin, you're either changing part of how WordPress normally creates output or you're adding something totally new.
>
> **[2:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=166)** Whatever that plugin does and whatever claims it makes, you are responsible for checking.
>
> **[2:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=172)** Your content is a mixture of output from WordPress, from plugins, and your own creative decisions.
>
> **[2:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=178)** As we'll find in this course, the output created in WordPress, while fully capable of being accessible, needs to be considered with care.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=187)** A WordPress website can absolutely be accessible, but you'll need to become familiar with finding accessible resources, investigating the accessibility of your site, and learning the best and the worst of what WordPress has to offer.
>
> **[3:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=203)** What about Full Site Editing?
>
> **[3:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=205)** This is something that's rapidly changing with the addition of Full Site Editing in WordPress.
>
> **[3:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=210)** If you're using a block theme, this analogy doesn't work quite the same way.
>
> **[3:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=214)** I'll examine Full Site Editing in greater detail later in the course.
>
> **[3:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=218)** For now, know that with Full Site Editing, WordPress is taking a much greater role in generating the underlying framework of your site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (19), [[Windows]] (1), [[Forms]] (1), [[HTML]] (1), [[JavaScript]] (1)
> **Prerequisites:** set up (3), install (2), you'll need (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** html (1), css (1)
> **Definitions:** is a  (2)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [WordPress core features](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=0)** - [Instructor] What do you imagine is the direct impact [[WordPress]] has on the accessibility of your website?
>
> **[0:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=7)** The core WordPress software without a theme or plugins only generates a fraction of your site.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=14)** Knowing which pieces WordPress provides is an important part of assessing problems.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=19)** In a classic theme environment, there are only a handful of areas where WordPress directly provides output to your site, and many of those are commonly overridden by themes.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=31)** Since the introduction of the block editor, the ability of WordPress core to impact the accessibility of your site has grown, and in the context of a block theme, WordPress core provides a significant percentage of your site's output.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=46)** The differences between using a block theme and a classic theme are significant, so they really must be treated separately.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=54)** Features generated in a classic WordPress theme include your navigation menu [[HTML]], your search [[Forms]], comment forms, all of the core widgets, archive lists, category dropdowns, recent posts, recent comments, and a calendar of blog posts.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=70)** They include your images in content, your image galleries, and of course, blocks from the block post editor.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=78)** Almost all of this content as produced by WordPress core is fairly free of accessibility problems by itself.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=86)** However, that's because WordPress is almost always producing only the HTML for the output.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=92)** In general, as long as the HTML output is free of errors and uses semantically appropriate elements, it will be accessible.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=100)** But WordPress doesn't add any styles or behavior.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=104)** When authors add CSS for style and add [[JavaScript]] to change behaviors, they can introduce all sorts of accessibility problems.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=113)** It's not that raw HTML is always accessible, just that CSS and JavaScript can create accessibility problems, even if the HTML is great.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=124)** Structure, design, and behavior each have a role to play in the accessibility puzzle.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=130)** The WordPress navigation menu is a structured, unordered list with submenus in descendant lists.
>
> **[2:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=138)** This is a totally reasonable and understandable navigation structure.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=142)** However, WordPress doesn't add a nav element to set the menu as a navigation landmark targetable by screen readers.
>
> **[2:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=149)** That's up to the theme author, along with the design and dropdown behavior of that menu.
>
> **[2:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=155)** The most common problem for search and comment forms is that themes remove labels, either by hiding them using display none, a method that conceals them from all users, or by replacing the forms with their own label-free input fields.
>
> **[2:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=171)** The category archive widget breaks a major rule of form design when used as a dropdown widget: don't submit the form on a change event.
>
> **[3:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=181)** The widget sends users to a new archive page when they change the value, but when a screen reader or keyboard user navigates a select input using the keyboard, they can only discover the options by changing them.
>
> **[3:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=196)** As a result, you can't use this widget with a keyboard.
>
> **[3:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=199)** As soon as you start to explore, you are off on a new adventure.
>
> **[3:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=203)** If you use these widgets, be sure to leave the dropdown option disabled.
>
> **[3:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=209)** The output of WordPress blocks have been carefully designed to try and avoid errors in output, but there are still some issues to be aware of when creating new content either in the block editor or using the classic editor.
>
> **[3:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=222)** Later in the course, I'll address accessibility issues that WordPress can cause when you are offering content in either editor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (14), [[HTML]] (5), [[Forms]] (4), [[JavaScript]] (2)
> **Env Vars:** html (5), css (2)
> **UI Navigation:** dropdown (3)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** later in (1)
> **Analogies:** imagine (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [WordPress Classic themes](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=0)** - [Instructor] With classic themes, your theme choice can make or break the accessibility of your [[WordPress]] website.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=7)** Almost every piece of accessibility that WordPress core provides can be broken by your theme.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=11)** So your choices in selecting or developing a theme are crucial in creating an accessible WordPress website.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=18)** How much thought do you give to theme choice?
>
> **[0:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=21)** Do you look carefully at design, layout, and features?
>
> **[0:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=25)** Have you thought about the underlying accessibility of that theme?
>
> **[0:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=30)** To aid you in this, WordPress has written guidelines for creating accessibility ready WordPress themes.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=36)** These guidelines provide helpful references, both for creating themes and for testing them.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=42)** No WordPress theme can guarantee an accessible website.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=47)** Even in a well-designed theme, you can make choices in theme settings in [[Content Creation]] or in plug-in selection that interfere with the accessibility of the theme.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=56)** This is why themes are called accessibility-ready.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=60)** These themes are expected not to create accessibility problems, but they don't guarantee your end product.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=66)** Any theme tagged with accessibility-ready in the [wordpress.org](https://wordpress.org) theme repository was tested, prior to approval, against a set of 12 accessibility criteria that are fully in the control of the theme.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=79)** However, later theme updates could cause accessibility regressions.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=85)** Other theme repositories such as ThemeForest, also provide a selection of themes tagged as accessibility-ready, but there are no requirements in ThemeForest's author submission guide related to accessibility, so it's hard to be sure what that means.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=101)** An important part of what the WordPress accessibility-ready theme guidelines provide is instructions on how to test a theme for accessibility.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=110)** With this information, you can check for yourself whether the theme you want to use meets accessibility requirements.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=119)** The first item is keyboard navigation; whether every item in the theme can be reached from the keyboard with a visible focused indicator.
>
> **[2:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=128)** Then there's controls, whether all theme features that behave like buttons or links are constructed using appropriate [[HTML]] elements and provide clear indications of what the task is that they perform.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=142)** Skip links are a requirement, that means there needs to be a means to skip over the navigation of the site to reach the content more quickly.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=151)** Core WordPress [[Forms]] are checked, we will verify whether or not the native WordPress forms are available, and if they've been replaced, that the replacements are also accessible.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=163)** The structure of your headings is going to be checked.
>
> **[2:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=166)** It'll verify that the hierarchy of headings within your theme uses a legitimate organization.
>
> **[2:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=173)** We'll also verify ARIA landmark roles.
>
> **[2:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=176)** ARIA landmark roles help screen reader navigate around the larger sections of the page and will verify that all parts of the page have been demarcated within a landmark region so that access is available.
>
> **[3:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=190)** We'll also check the content links.
>
> **[3:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=192)** These are all of the links that are inside bodies of content, your posts and your pages and make sure that they are always underlined.
>
> **[3:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=199)** This isn't required under WCAG; this is something that is a special requirement for WordPress accessibility-ready themes.
>
> **[3:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=206)** We'll also verify that common repetitive link text is avoided.
>
> **[3:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=211)** This is that, read more or continue reading that you always have on a posts archive page.
>
> **[3:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=217)** We'll also check the contrasts of that WordPress theme and make sure that the default color contrast provided by your theme is accessible.
>
> **[3:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=227)** Images that are from the theme will be checked and made sure they all have alternative text or support the alternative text that you provide.
>
> **[3:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=235)** If the theme incorporates any video or audio or navigable materials like carousels, we will verify that they do not autoplay and that they don't change without any user interaction.
>
> **[4:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=248)** Finally, we'll verify that you have a screen reader text class available in the theme that hides text in a manner that's still accessible to screen readers and make sure you don't use any of the disallowed attributes, that's tab index that has a positive value, which will change the order that the keyboard focuses around the page, the use of the access key attribute or target attributes that spawn new tabs.
>
> **[4:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=275)** Each of these criteria is tested to benefit various groups of users with disabilities.
>
> **[4:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=280)** With all of these criteria followed, your theme should provide a great foundation for an accessible website.
>
> **[4:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=286)** Each individual test criteria will be talked about in more detail as we move through the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (12), [[Forms]] (2), [[Content Creation]] (1), [[HTML]] (1)
> **CLI Commands:** make (5)
> **Env Vars:** aria (2), html (1), wcag (1)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [WordPress full site editing](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=0)** - [Narrator] Full site editing introduces a new paradigm for building [[WordPress]] websites.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=6)** It's not a completely new concept, it's essentially a tool to manage your site design, a page builder using blocks like Elementor, Beaver Builder or Avada, but without requiring a plugin.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=20)** If you are using a block-based theme, you'll have access to the whole suite of the site editor and can use it to create menus and customize the design of your site.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=30)** The biggest change is that WordPress is now adding styles and behaviors for key parts of your website.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=37)** You build everything on the site with blocks.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=42)** When I said that WordPress navigation menus are just an unstructured list, well, that's not true with block-based themes they're not just an unstructured list.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=52)** Now WordPress provides the menu structure, the styles, the behaviors that create dropdown menus, the wrapping navigation landmarks and even handles the menu toggle button for mobile sites.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=65)** The WordPress core menu implementation has a high level of accessibility, with keyboard accessibility and dropdown menus and mobile navigation and accessible text for icon controls, you can still make choices that reduce the accessibility of the menu like choosing inaccessible color combinations but the overall degree of accessibility will remain high.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=88)** When building in a block theme, the whole architecture of your site is built in blocks.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=94)** As with any visual site builder, your choices are about content, design and layout.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=100)** In block themes these three topics are the primary considerations.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=104)** Thankfully, the accessibility of almost all default [[HTML]] output is already high.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=111)** Full site editing or block themes provide another strong foundation along with accessibility ready themes.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=118)** A block theme doesn't automatically meet the WordPress accessibility expectations, but it can give you a healthy start.
>
> **[2:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=127)** The introduction of full site editing has also introduced a new class of hybrid themes.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=133)** Themes that combine various facets of classic themes with full site editing.
>
> **[2:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=139)** Hybrid themes don't add anything new to the mix but they help to bridge gaps in support with classic tools like the customizer while starting to bring some of the tools of the site editing suite into focus.
>
> **[2:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=152)** From an accessibility perspective, hybrid themes will be a mix of classic and block theme parts, and should be treated like classic themes because they may work in a wide variety of different ways where a block theme is much more explicit about the accessibility it provides.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (6), [[HTML]] (1)
> **UI Navigation:** dropdown (2), toggle (1)
> **CLI Commands:** make (1)
> **Env Vars:** html (1)
> **Speakers:** - [narrator] (1)

#### [WordPress plugins](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=0)** - [Instructor] Key components on your site can only be added through [[WordPress]] plugins.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=5)** What impact do plugins have on the accessibility of your site?
>
> **[0:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=9)** If you had to guess, what do you think are the most common features WordPress doesn't provide out of the box?
>
> **[0:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=15)** Contact [[Forms]], event calendars, [[E-Commerce]] features?
>
> **[0:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=19)** These are probably among the most high demand services.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=22)** You'll install most of these features in your website using plugins.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=27)** Plugins are powerful.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=29)** They leverage a network of features called hooks in WordPress Core that allow them to manipulate the output of your website.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=36)** Many plugins add totally new features to your site.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=40)** Some plugins may alter existing features.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=43)** They may replace or modify your site's navigation, alter the content of your posts, add image galleries or offer new search tools.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=52)** If you can imagine it, somebody has probably done it.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=57)** What does this mean for accessibility?
>
> **[1:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=60)** It means that you need to be conscious of what a plugin changes on your site.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=64)** Looking at one specific type of accessibility, keyboard navigation, your tests of keyboard navigation on your theme may have no impact at all on the accessibility of the features a plugin has added to your site.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=78)** Your theme might have a perfectly accessible navigation menu, but the calendar plugin you've added has no keyboard support at all to help users find your events.
>
> **[1:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=89)** The simplest type of keyboard test is something you can try out right now.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=94)** Using the Tab key to navigate through your site, are you able to tell where you are on the site?
>
> **[1:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=100)** Can you reach items in the sub-menus of your navigation?
>
> **[1:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=104)** Are there some features you can reach, but others you can't?
>
> **[1:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=108)** When we're talking about the ability to reach and activate a tool from the keyboard, that functionality is 100% dependent on the code implemented by the plugin.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=119)** Whether your theme has this kind of a keyboard accessibility will have no impact on your plugins.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=126)** If we're talking about the visual focus aspect of accessibility, whether or not a visitor can see on your site where their keyboard is currently focused, that can be relevant to the plugin.
>
> **[2:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=137)** Although, it's not guaranteed.
>
> **[2:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=139)** The difference is due to what is inherited within a website and what is not.
>
> **[2:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=145)** [[HTML]] has no inheritance.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=147)** What the plugin creates has no fundamental relationship to your theme.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=151)** CSS, however, [[Cascading Style Sheets (CSS)|cascading style sheets]], pass their characteristics to everything on the site.
>
> **[2:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=158)** Any CSS included by a plugin can affect everything on the site.
>
> **[2:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=162)** So CSS that defines a good focus state in your theme is also applied to plugins, but the plugin can also add its own CSS, which could overwrite the focus accessibility in your theme.
>
> **[2:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=176)** Because of this, you can't always know how a plugin will directly impact the accessibility of your site.
>
> **[3:02](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=182)** The WordPress plugin repository doesn't have any equivalent to the theme repositories accessibility ready tag and provides no guidance on identifying accessible services.
>
> **[3:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=193)** Because of this, learning how to test features for accessibility is a critical part of building an accessible website for WordPress.
>
> **[3:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=201)** We'll cover accessibility testing extensively later on in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (5), [[Forms]] (1), [[E-Commerce]] (1), [[HTML]] (1), [[Cascading Style Sheets (CSS)|Cascading style sheets]] (1)
> **Env Vars:** css (4), html (1)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** find (1)
> **Analogies:** imagine (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Creating accessible content](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=0)** - [Host] Let's assume that you have an accessible theme and all of your site's plug-ins are accessible.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=7)** Do you have an accessible website?
>
> **[0:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=10)** Not necessarily.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=12)** The root of accessibility is about getting access to your content.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=16)** As the content creator, what parts of the accessibility of your site are you in direct control of?
>
> **[0:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=23)** When you write your site's content, you are taking control of the accessibility of that content, no matter how accessible your theme and plugins are, if you are not writing content with accessibility in mind, it won't really matter.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=39)** What's the most recent content you've published?
>
> **[0:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=41)** Take a look at it and think about it through the lens of accessibility.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=47)** The abbreviation, WCAG stands for Web Content Accessibility Guidelines.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=53)** Web Content Accessibility Guidelines and inaccessible navigation menu will prevent users from reaching your content.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=62)** If your content isn't accessible, there's no reason for anybody to bother.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=67)** The core editing environment for [[WordPress]] is the Block editor, although you can also use the Classic editor plugin to restore the editing experience prior to WordPress 5.0.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=79)** Both editors have advantages and disadvantages.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=82)** There are also many unique plug-ins for creating content within a site builder.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=87)** This course is primarily about the native experience with WordPress, but will also take a quick look at some popular site building plug-ins you may find yourself using.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=97)** Accessible content has the same requirements no matter what tool you use to create it but the tools can have a profound impact on your options.
>
> **[1:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=106)** They can make it easier to create accessible content and they can also make it impossible.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=112)** There are a few key concepts for understanding accessibility issues in content, text choices, directions, colors, link text and alignment, structure, lists, headings, tables, languages and pronunciation of those languages, images with their alternative text.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=133)** Media has captions and transcripts and then there's general writing, clarity and style.
>
> **[2:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=141)** Some parts of accessible content are totally independent of your editor.
>
> **[2:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=144)** Writing clearly is important anywhere but some items need support from your editor to generate the most accessible code from the decisions you make.
>
> **[2:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=155)** WordPress supports almost everything in this list out of the box, although the mechanisms will vary depending on which authoring context you're using.
>
> **[2:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=164)** For a few features like setting the language of a piece of text, you can install plug-ins for additional support.
>
> **[2:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=171)** With the Block editor's extensive layout tools, creating content is much more than just writing a document.
>
> **[2:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=179)** It can include columns, galleries, banner images, videos, all mixed with a variety of layout and color choices.
>
> **[3:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=186)** You can create elaborate layouts for your content but remember that the appearance of your page is only the experience that cited users will have.
>
> **[3:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=197)** How do screen readers and other assistive technology make sense of your layout?
>
> **[3:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=203)** If you included all the necessary alternative text and structured your code effectively, the experience with assistive technology shouldn't leave users stranded.
>
> **[3:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=213)** What makes your content accessible is shared between the code that lies behind your content and the decisions you make in writing the text.
>
> **[3:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=222)** WordPress gives you a great deal of control over your content but what is the impact of the code created behind it?
>
> **[3:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=230)** We'll talk in detail about how to recognize and create accessible content later in the course, you'll learn ways to recognize the importance of using code that reinforces the content displayed whether that content is a design element, a user interface, or written content.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (5)
> **CLI Commands:** make (5), find (1)
> **Env Vars:** wcag (1)
> **Versions:** 5.0 (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [host] (1)


### 3. Accessibility in Your Theme

[↑ Back to Table of Contents](#table-of-contents)

#### [Examining accessible design](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=0)** - [Instructor] From the beginning of the design process, accessibility should be a focal point.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=6)** While design is a creative process, design is not the same thing as art.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=11)** What you create needs to communicate information.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=15)** Design is the process of creating a [[User Experience (UX)|user experience]], and there are many aspects to design that aren't just visual.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=23)** Whether your visual design process starts with a mood board, a color palette, an image, or a call to action, you should be thinking about the user experience for all users.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=35)** There are aspects of accessibility that can't be addressed during design, but many key elements are essential parts of the design process.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=44)** Your design documentation can cover use of form labels, heading levels, focus and hover states for links and buttons, the use of icons and images, and of course color contrast.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=58)** Thorough interaction design is key for accessibility.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=63)** Buttons, links, form fields, and status messages all have different states to address.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=69)** What is the default appearance?
>
> **[1:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=71)** How does it look when it changes?
>
> **[1:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=73)** What does this control look like when it has a keyboard focus?
>
> **[1:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=77)** Does it look different under the mouse cursor?
>
> **[1:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=79)** What does a toggle look like when its control is open versus when it's closed?
>
> **[1:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=84)** What do error messages look like and where do they appear?
>
> **[1:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=88)** Focus states don't have to look different from hover states, but they do serve different purposes.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=96)** A hover state is a directed action, where the user controls the cursor to point it at a specific object.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=104)** The user is already looking at the object and they are expecting a change.
>
> **[1:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=109)** A focus state, on the other hand, is undirected.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=113)** The user moves to this position from somewhere else on the page, which may or may not be close to the new position.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=120)** The user will need to find the new focus point after it occurs.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=124)** Because of this, focus states shouldn't just barely meet requirements.
>
> **[2:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=129)** They need a bold design.
>
> **[2:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=131)** Form labels serve an important purpose both visually and for screen readers.
>
> **[2:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=137)** A design should make it clear what text is a label and which field it's for.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=142)** A placeholder text nested inside the form until you add your own content is not a label.
>
> **[2:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=149)** A label should be present both before and after you've filled in the field.
>
> **[2:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=154)** Heading levels are expected to follow a hierarchy.
>
> **[2:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=158)** Your design can show the organization of the page by indicating what heading text uses.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=163)** Headings act like a table of contents for screen reader users.
>
> **[2:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=167)** Whether you're designing a theme or choosing one, these are all questions you can ask yourself while visually examining the theme.
>
> **[2:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=176)** Go to the [[WordPress]] theme repository and pick a popular theme, any theme.
>
> **[3:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=181)** Ask yourself these questions while you review it.
>
> **[3:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=185)** Can I distinguish which elements are links and which are buttons?
>
> **[3:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=190)** When I navigate through this theme with the keyboard, can I easily tell where I am and what I'm doing?
>
> **[3:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=197)** What looks like a heading on this page?
>
> **[3:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=200)** Is it actually a heading?
>
> **[3:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=202)** Does the structure of those headings make sense to me?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (2), [[WordPress]] (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (3)
> **UI Navigation:** toggle (1), go to (1)
> **Speakers:** - [instructor] (1)

#### [Accessible color](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=0)** - [Instructor] Color is fundamental to effective design for many reasons.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=4)** Color contrast is fundamental to creating an accessible site.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=8)** How can you make the best choices about color in your design?
>
> **[0:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=13)** Color contrast is a major concern for many groups of website visitors.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=18)** Seven to 12% of men have some form of color vision deficiency.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=22)** Though colored vision deficiencies are only around one half of 1% of women.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=28)** Low vision conditions accelerate with age, so 50% of people over the age of 50 have some kind of presbyopia, ranging from a routine need for reading glasses or minor magnification to serious complications from macular degeneration, cataracts, and other eye conditions.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=48)** The global population is getting older.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=51)** By 2030, it's expected that one sixth of the world's population will be over 60.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=58)** If color contrast is too low, your site is posing barriers to users on mobile devices in bright sunlight as well as to users with vision impairments.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=69)** If color contrast is too high, it can create eye strain or exaggerate the sensitivity some dyslexic users have to extreme brightness.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=78)** There is no upper boundary in the web Content Accessibility Guidelines for excessive contrast, but in general, avoiding combinations at either end of the acceptable spectrum is a good idea.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=92)** Extremes of contrast, whether high or low, are rarely the best choice.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=98)** You can use two colors right next to each other that don't meet contrast guidelines in some cases.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=104)** What matters is whether a user needs to be able to distinguish between those colors in order to perceive the content.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=112)** The obvious case where color contrast definitely matters is text over a background.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=119)** Clearly this is important.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=121)** A more subtle case is an underline color on a text link.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=126)** The underline does need to meet color contrast against the background color, just like the text does, but it doesn't also need to meet color contrast guidelines against the neighboring text.
>
> **[2:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=139)** This contrast, at 5.27 to one against the background color, meets requirements for contrast.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=147)** The color of the link doesn't pass against the text, but it has a secondary characteristic, the underline.
>
> **[2:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=155)** If, for example, you're using a faint shade of gray to add striping to the rows in a table, the text over the stripe color needs to meet contrast rules, but that stripe color doesn't need to meet contrast guidelines against the other stripes.
>
> **[2:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=172)** These stripes are an aid to comprehension.
>
> **[2:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=175)** They aren't necessary to comprehension.
>
> **[2:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=178)** Distinguishing between a color used to enhance and a color used to communicate is crucial.
>
> **[3:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=185)** Color contrast is measured in terms of the ratio of luminosity between two colors.
>
> **[3:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=191)** Luminosity is a measurement that describes how bright or dark a hue is and discards most of the hue information in favor of its degree of intensity.
>
> **[3:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=201)** This algorithm helps ensure that colors that are very different, assuming standard color vision, red and green, for example, are recognized as very similar under conditions when those colors aren't distinct.
>
> **[3:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=214)** The maximum value is black and white with a ratio of 21 to one.
>
> **[3:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=219)** The minimum value is any two identical colors at one to one.
>
> **[3:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=225)** WCAG 2.1 requires a minimum ratio of 3.0 to one for large text, any text over a 24 pixel equivalent or 19 pixels in bold, and 4.5 to one for anything smaller.
>
> **[4:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=241)** Color contrast tools can help you find the ratio between two colors.
>
> **[4:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=247)** All the contrast scenarios I've talked about so far involve only two colors, a foreground and a background.
>
> **[4:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=254)** When you add in transparency or background images, the measurement gets more complicated.
>
> **[4:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=261)** The essentials are still true.
>
> **[4:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=263)** Over a background image, the text should meet contrast guidelines over the majority of the image.
>
> **[4:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=268)** If text or backgrounds are partially transparent, most testing tools won't pick these up correctly and only recognize the declared colors without the transparency.
>
> **[4:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=279)** Take a moment to look at your website.
>
> **[4:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=282)** Are there color combinations you find hard to see?
>
> **[4:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=285)** Take note of those combinations.
>
> **[4:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=287)** We'll talk more about how to test for color contrast later on.
>
> **[4:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=292)** Many [[WordPress]] themes have options available to shift your site's color palette.
>
> **[4:57](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=297)** In the block editor, you can easily change the text and background colors for any text, anywhere.
>
> **[5:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=304)** Most classic WordPress themes give you either a set of changes that tweak specific colors with little information about where those changes will apply, or a named theme palette with even fewer clues.
>
> **[5:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=316)** Full site editing is no different in this respect.
>
> **[5:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=319)** Style variations can still introduce all sorts of color contrast problems.
>
> **[5:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=324)** The full site editor does have a feature called the Style Book, which allows you to review the design of every block supported by your theme.
>
> **[5:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=332)** This is a good way of reviewing and modifying the default color contrast of every element in your site.
>
> **[5:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=339)** There is no equivalent in classic themes, so those just require a page by page review.
>
> **[5:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=344)** A great color palette tool can show you all of the color combinations resulting from changing one color.
>
> **[5:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=353)** When configuring a WordPress theme, colors are one of the most common configuration options that impacts accessibility.
>
> **[6:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=361)** When you choose colors for your website, you need to take responsibility for what impact those will have across the entire site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3)
> **Definitions:** is a  (4), is an  (1)
> **Versions:** 5.27 (1), 2.1 (1), 3.0 (1), 4.5 (1)
> **CLI Commands:** find (2), make (1)
> **Analogies:** for example (2), just like (1)
> **Env Vars:** wcag (1)
> **Speakers:** - [instructor] (1)

#### [Accessible navigation](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=0)** - [Narrator] Take a moment to look at your website or a website you like.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=4)** How does the navigation work?
>
> **[0:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=7)** Does it have just a few links or many?
>
> **[0:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=10)** Is it a mega menu or just lists of links?
>
> **[0:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=14)** Can you navigate through the links from your keyboard?
>
> **[0:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=16)** Does the choice of menu type make sense for this content?
>
> **[0:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=22)** The first step in building effective, accessible navigation, is to figure out the best menu pattern for your menu, one that matches the content you're navigating.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=32)** After determining what kind of pattern to use, you need to build it with accessibility in mind.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=38)** The core of [[WordPress]] Navigation menus is a series of nested lists.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=43)** This is a great way to organize many menus.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=45)** It has a clear hierarchy and a logical pattern to introduce drop-down navigation.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=51)** With no styles or scripting, it's as straight forward as you can get.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=55)** A list of links with contained lists of links with some added semantics to help understand the structure.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=62)** That's what most good navigation menus look like when navigated using a screen reader.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=67)** All of the visual gimmicks you see, animated menus, color changes, and separators between links, are just that, visual.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=76)** Although this is a good starting point for accessibility, there are a lot of ways a menu can be broken for many groups of users.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=83)** For screen reader users, for keyboard users, for people with dexterity problems, you name it, there's probably a way to make navigation a problem.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=92)** The number one most common problem in my years of testing is a lack of support for keyboard navigation on drop-down menus.
>
> **[1:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=102)** Theses appear in two primary ways.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=104)** Either the sub menus are invisible to the keyboard and are unfindable without a mouse, or the sub menus are hidden visually and don't become visible when they receive focus.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=116)** In the latter case, a screen reader user won't even know there is a problem.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=121)** But a visitor who is sighted but can't use a pointing device is going to be extremely frustrated.
>
> **[2:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=127)** The problem stems from a failure to consider the focus state of links in the menu and only test for the hover state.
>
> **[2:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=135)** When a user navigates with the keyboard, focus states apply to each link as they reach it.
>
> **[2:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=141)** If a set of rules are only defined for the hover states and not for these focus states, then people using the keyboard are left out.
>
> **[2:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=150)** Apply focus in a menu has some complications.
>
> **[2:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=155)** Hover states apply to their child elements.
>
> **[2:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=158)** If a hover state is defined for a list item and remember the list contains the sub menu of items as well, and your mouse is over a link that is inside that list item, then the hover state is triggered for the whole thing.
>
> **[2:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=173)** But focus is different as the name implies, a focus state is only relevant to the element you are on and not its parents or its descendants.
>
> **[3:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=184)** You can't use CSS to effect a focused elements neighbor, like a nested list.
>
> **[3:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=191)** When you construct accessible navigation with sub menus, you can't just copy over your hover styles into the focus style.
>
> **[3:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=198)** You need to add scripting so that your hover styles are applied when focus is present on any of the contained links.
>
> **[3:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=206)** Now, if you have drop-down menus that can be triggered using either a keyboard or a mouse, you're meeting the standards of accessibility in WCAG 2.0.
>
> **[3:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=215)** But the latest version of guidelines is WCAG 2.1 and you're not quite there yet.
>
> **[3:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=221)** In WCAG 2.1, that drop-down needs to be dismissible without changing focus.
>
> **[3:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=227)** That is, without using the tab key to navigate, and without moving the mouse pointer.
>
> **[3:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=234)** Mostly, that means you need to support the escape key to dismiss the menu.
>
> **[4:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=240)** Once all that is done, you've got a solid accessible menu for a small to medium website.
>
> **[4:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=246)** But the problems start to increase when you add a lot of content.
>
> **[4:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=250)** What I have just described requires a user to tab all the way through a menu to find the items inside it.
>
> **[4:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=257)** When you have 15 menu items, that's not a big deal.
>
> **[4:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=260)** At 30, it's a bit painful.
>
> **[4:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=264)** At 90, it's unbearable.
>
> **[4:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=268)** For large menus, you want to use a model where the user chooses to open the sub menu.
>
> **[4:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=274)** When the navigation item has a sub menu, either insert a button in the list item or make the top level item a button instead of a link.
>
> **[4:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=283)** You can then use this to expand the sub menu.
>
> **[4:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=287)** WordPress Classic themes don't have a native mechanism to create this type of menu.
>
> **[4:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=292)** But the WordPress navigation block does, so in the full site editor, there's an option to enable open on click for sub menus.
>
> **[5:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=301)** When this is enabled, your top level menu items are transformed into a button that opens sub menus.
>
> **[5:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=308)** The last type of navigation menu is the mega menu.
>
> **[5:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=313)** WordPress doesn't support this out of the box so implementations can be unpredictable.
>
> **[5:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=319)** A mega menu is an extension of the user-directed model I just described.
>
> **[5:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=324)** In this type of menu, you expect to have dozens of links at least in every sub menu.
>
> **[5:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=330)** The menu panel you open might also have additional semantics like headings used to group sub sections of the menu.
>
> **[5:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=339)** Every menu is slightly different, so there's no single best accessible navigation menu.
>
> **[5:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=345)** The size and complexity of your site should lead your decision making on navigation implementations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (4)
> **Definitions:** is a  (5), is an  (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** wcag (3), css (1)
> **Versions:** 2.1 (2), 2.0 (1)
> **UI Navigation:** in the menu (1), open the (1)
> **Speakers:** - [narrator] (1)

#### [Perceivable images and icons](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=0)** - [Instructor] First, what is an image?
>
> **[0:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=4)** We're not just talking about photos and animated gifs.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=8)** An image is any non-text graphic icon fonts, SVG elements, background images, and real image elements.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=18)** All images need some form of alternative text whether to ensure an image is ignored or to show why this image is present on the page and explain its purpose.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=30)** Alternative text is the text that a screen reader user will get as a substitute for the graphic, and there are many ways of providing that text depending on the type of image you are using.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=42)** Images fall into one of three groups decorative, content, or functional.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=49)** When you use an image, you should ask these questions.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=52)** Why is it here?
>
> **[0:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=53)** What is it for?
>
> **[0:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=56)** Do you have any decorative images on your site?
>
> **[0:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=59)** These are images for visual impact only.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=62)** They might be stock photography that reinforces content or an icon to enhance the clarity of an existing control, like a magnifying glass that's part of a search button.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=74)** What images are content images?
>
> **[1:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=76)** And image is content if it contributes to the meaning of the text, a chart, a graph, a picture of a specific person or an event.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=84)** These are clearly part of the content of the page.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=88)** They are needed to communicate what is shown in the image.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=93)** What are functional images?
>
> **[1:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=95)** These images do something when the user interacts with them.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=99)** They're a button with an icon and no additional text.
>
> **[1:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=103)** They're an image that links to a post or an icon that shows that a link opens in a new tab.
>
> **[1:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=109)** They need to communicate what the control does.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=112)** Where does this link go, and what does this control open?
>
> **[1:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=116)** Images are used to add visual interest to a website design.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=121)** Icons are used as a substitute for common buttons like search or menu.
>
> **[2:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=125)** How are these visual elements shared with users of screen readers?
>
> **[2:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=131)** An image can only be decorative if it doesn't contain any text, is not the sole content of a link or a button, and doesn't contribute anything to the meaning of surrounding text.
>
> **[2:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=143)** That last question is open to interpretation and that's okay.
>
> **[2:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=148)** For many images, you can freely choose whether it contributes to meaning.
>
> **[2:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=152)** What's important is that you make a decision about the image.
>
> **[2:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=157)** An image that makes your site prettier is fine.
>
> **[2:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=160)** Ornaments may not translate well non-visual.
>
> **[2:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=164)** If you decide an image is decorative, mark it up, so that screen readers ignore it.
>
> **[2:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=171)** Okay, how do you make a screen reader ignore an image?
>
> **[2:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=175)** First, background images are always ignored by screen readers, and they should never be used for content or for function.
>
> **[3:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=184)** But images that come from image elements, SVG sources or icon fonts need text alternatives.
>
> **[3:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=191)** Any image element with an empty alt attribute is also skipped by screen readers.
>
> **[3:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=197)** Any other type of alt attribute will result in feedback from the screen reader, including a missing alt attribute.
>
> **[3:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=203)** When ALT is empty, it explicitly says that the best alternative for this image is silence.
>
> **[3:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=211)** If the alt attribute is missing, it tells the screen reader that there is no defined alternative for the image.
>
> **[3:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=219)** The screen reader has no way to know whether this is important or not, so it is going to communicate something commonly the file name in the source attribute.
>
> **[3:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=229)** You can use similar techniques to hide SVGs and icon fonts, though the alt attribute only applies to image elements.
>
> **[3:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=238)** Icon fonts are graphics assigned in the private use area of Unicode.
>
> **[4:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=244)** They're text characters but they're usually not pronounceable.
>
> **[4:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=248)** There's no defined text equivalent of these characters.
>
> **[4:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=252)** As a result, an icon font can result in an unpronounceable text character.
>
> **[4:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=257)** Most commonly icon fonts are silent but that's not a guarantee.
>
> **[4:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=262)** Regardless, they won't be announced in any useful way to the user.
>
> **[4:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=267)** You can hide icon fonts by adding aria hidden equals true to the element the icon is appended to.
>
> **[4:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=274)** This will hide the element from screen readers.
>
> **[4:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=278)** SVG icons can be hidden in the same way.
>
> **[4:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=280)** An aria hidden attribute on the SVG markup will conceal it from screen readers.
>
> **[4:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=286)** Everything changes if your image is a content or a functional image.
>
> **[4:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=292)** In either of these cases that image needs alternative text that is equivalent information to what a cited user sees.
>
> **[5:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=301)** In some cases, this is very clear.
>
> **[5:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=303)** An image with text on it needs alternative text that is the same as the text.
>
> **[5:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=309)** A button image with submit on it needs alternative text that says Submit.
>
> **[5:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=314)** There's no room for exceptions there.
>
> **[5:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=316)** On an image element that's added using the Alt attribute.
>
> **[5:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=320)** For icon fonts, you can use a screen reader hidden text class that hides the alternative text from cited users.
>
> **[5:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=329)** Or you can add an Aria label while also using Aria hidden to hide the icon from screen readers.
>
> **[5:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=337)** For an SVG file, accessibility can get complicated.
>
> **[5:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=341)** For a simple SVG icon with no interaction, you can reference the SVG file from an image source attribute with an alt attribute.
>
> **[5:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=350)** However, this option restricts your ability to manipulate the SVG file using CSS.
>
> **[5:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=356)** So this is less commonly done.
>
> **[5:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=358)** To allow CSS manipulation, you do need to use an SVG element.
>
> **[6:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=364)** Because of limitations in the SVG mapping by the browser, you also need to give it an image role.
>
> **[6:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=371)** The title element must be the first child of its SVG parent.
>
> **[6:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=377)** Because browser support is inconsistent, you also need to add Aria labeled by and an ID attribute making an explicit connection between the SVG element and its title.
>
> **[6:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=390)** For any control, adding an Aria label overrides all other naming information.
>
> **[6:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=397)** If you are a [[WordPress]] theme or plugin developer, you are probably using icon fonts or SVG images pretty frequently.
>
> **[6:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=405)** When you're creating content, you'll mostly add images to posts and pages within your site.
>
> **[6:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=411)** Later on, I'll talk about how to take advantage of features in the WordPress editor to handle alternative text for images as a content creator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2)
> **Env Vars:** svg (13), css (2), alt (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Page architecture and HTML semantics](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=0)** - [Instructor] How do you perceive the organization of a webpage when you look at it?
>
> **[0:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=5)** Most sighted people will see separations in content, in how a section of the page will have a different background color or border, in a prominent block of large text, or in a series of brightly colored icons.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=18)** Using those visual cues, you're learning how to make sense of the document.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=23)** People who are using assistive technology also need to understand the organization of the page.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=29)** The power of [[Cascading Style Sheets (CSS)|cascading style sheets]] allows web developers to separate the content and structure of their websites from the instructions that shape it visually.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=39)** Just disabling the CSS on any website gives you an idea of how that website is structured under the glossy appearance.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=47)** The separation of visual appearance and meaningful structure is intentional.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=52)** The document should provide a great experience for all users, so developers are able to create visually stunning works with a structure that communicates clearly.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=61)** That's the theory anyway.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=65)** In reality, CSS allows developers to create a visual design that gives the effect they're looking for, regardless of the structure of the code behind it.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=74)** And while that can sometimes lead to a wonderful experience, it can also result in a div soup where every part of the site is built using an [[HTML]] div or span element.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=85)** Is there something inherently wrong with the div or span elements?
>
> **[1:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=90)** No.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=90)** They're perfectly useful utilitarian building blocks.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=94)** But they don't have any deeper meaning.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=96)** They should only be added after the necessary semantic elements are in place.
>
> **[1:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=102)** Semantics is the study of meaning.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=105)** In the context of HTML, we are talking about the meaning of each HTML element used to mark up your page.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=112)** HTML is loaded with semantic value.
>
> **[1:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=114)** And all of this plays into providing a good experience for users of assistive technology.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=120)** The non-visual experience uses the semantic value of an HTML element to get the structural information sighted people get visually.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=130)** To provide an equal experience, the underlying code needs to accurately reflect the design.
>
> **[2:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=137)** The most important structural elements are header, main, nav, aside, and footer.
>
> **[2:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=144)** These are commonly referred to as landmark regions because they can be used in a screen reader as landmarks to navigate through.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=151)** [[WordPress]] Steam developers should be using these larger structural elements to define the large scale structures of the page.
>
> **[2:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=160)** The next level of critical semantics is in the six heading levels, H1 through H6.
>
> **[2:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=167)** Using just these elements, a user with a screen reader can already navigate around the page pretty easily.
>
> **[2:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=173)** Headings work similarly to an outline.
>
> **[2:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=176)** H1 should define the principle topic of the page and be the only example of that heading on any page.
>
> **[3:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=181)** When an H2 is encountered, that represents a major section of content on the page.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=187)** Each level further down should be a section of content relevant to the text of the preceding heading.
>
> **[3:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=194)** When you are writing content, you should be making use of headings in the content that are complimentary to the choices made by the developer of your theme, and that means being aware of how your site is structured.
>
> **[3:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=206)** Where is the H1 heading on your website?
>
> **[3:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=210)** There are some great tools for quickly identifying the heading and landmark structures on your site.
>
> **[3:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=216)** One such tool is the HeadingsMap add-on for Firefox and Chrome.
>
> **[3:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=220)** This application produces a complete hierarchy of the headings on your site so you can easily spot errors.
>
> **[3:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=226)** When a screen reader navigates your site using headings they can jump from heading to heading.
>
> **[3:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=233)** They can either jump between headings at a specific level or through each heading individually.
>
> **[3:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=239)** You want to use the outline model to structure headings.
>
> **[4:02](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=242)** Too few headings means your content is hard to navigate.
>
> **[4:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=246)** Too many makes heading navigation too similar to just reading the content.
>
> **[4:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=252)** A useful tool for seeing the boundaries of your landmark regions is the landmark's bookmarklet.
>
> **[4:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=258)** At the press of a button, you can see information about how each section of the page is organized.
>
> **[4:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=264)** Every landmark region needs to have a name if it's not unique.
>
> **[4:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=269)** The main element should always be unique.
>
> **[4:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=271)** There should only be one.
>
> **[4:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=273)** But you'll frequently have more than one nav element.
>
> **[4:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=276)** They can be named using the aria label attribute such as nav aria-label equals main or nav aria-label equals footer.
>
> **[4:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=285)** Don't include the [[Microsoft Word|word]] navigation or menu.
>
> **[4:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=287)** Because you are using semantic HTML, the user already knows that.
>
> **[4:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=293)** In writing content, you'll make use of a much wider range of semantically useful elements like tables, lists, and text formatting tools.
>
> **[5:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=301)** I'll talk about those parts of HTML later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (7), [[Cascading Style Sheets (CSS)|Cascading style sheets]] (1), [[WordPress]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** html (7), css (2)
> **CLI Commands:** make (2)
> **Cross-References:** later in (1)
> **Tools:** firefox (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Page builders](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=0)** - [Instructor] For most websites, the theme shapes the largest part of the experience for all users.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=6)** By adding a page builder plugin you can assemble complex layouts without code and make choices that are significantly independent of your theme.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=17)** The introduction of full site editing into [[WordPress]] brings the concept of a page builder into WordPress Core alongside the many competing plugins that provide this kind of functionality.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=28)** But do all page builders perform equally?
>
> **[0:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=32)** Let's start by looking at how a page builder is different from a standard theme.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=37)** A page builder works by implementing a large number of component elements.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=42)** These components might include a navigation element, a site header, a content slider, an accordion or a modal.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=50)** Each component has a set of options you can use to design the interface and set up your content.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=56)** So a page builder is basically a plugin, adding functionality to your site on a supercharged scale.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=64)** Every interface element that comes from the page builder has the same potential set of problems any new interface or layout has.
>
> **[1:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=73)** You can assess these components the same way you would any plugin.
>
> **[1:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=77)** I start with three basic questions.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=80)** "Is the default output accessible?"
>
> **[1:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=83)** "Does the interface inform me if I make a choice that is not accessible?"
>
> **[1:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=88)** And, "Is the interface accessible to people with disabilities?"
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=93)** The last point is only relevant when the people managing content might be people with disabilities.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=98)** If your employees cannot do their jobs because your website isn't editable using their assistive technology then you're at high risk of violating their civil rights depending on your area of jurisdiction.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=110)** The accessibility of editing interfaces, however, could be an entirely separate course and it isn't the primary focus of this one.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=118)** It's still always a good question to ask when you're selecting your tools for building a website.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=124)** Let's look at a few common interfaces in a couple of page builders.
>
> **[2:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=128)** I'm going to look at Elementor and Kadence Blocks.
>
> **[2:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=131)** Kadence is based on Gutenberg, so it's more similar to core full site editing but still uses a lot of its own custom-built components.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=140)** I'm doing these tests using the free versions of these plugins so you can install them and follow along while I test.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=147)** In each builder, I'll set up a few simple design elements, an accordion, a simple icon, and a button link, then test the results.
>
> **[2:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=155)** This gives us a demo of some basic interactive and content elements.
>
> **[2:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=160)** Let's try Elementor first.
>
> **[2:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=164)** In Elementor, the first item we're going to look at is the accordion.
>
> **[2:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=168)** In Elementor's accordion, you can set an [[HTML]] title tag, so the default is a div but you're able to adjust it to a different type of element.
>
> **[2:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=179)** Let's see what that is.
>
> **[3:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=181)** So we can change it to any of the six heading levels.
>
> **[3:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=185)** Now, I would never recommend using an H1 and I don't think that should be there but changing it to an H2 would be a great setting for internal navigation using a screen reader.
>
> **[3:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=195)** Next, we'll look at the icon.
>
> **[3:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=199)** Now in Elementor's icon settings, you can clearly see that there's a link field so you're expected to set this icon up as a link to some resource.
>
> **[3:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=208)** That means you're probably going to need a way to set the name of this link as well.
>
> **[3:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=213)** However, I don't see any method to do that.
>
> **[3:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=218)** Under Elementor's attribute section, there is an option to set custom HTML attributes, which could be used to give an accessible name to this icon, but it's only available in Pro.
>
> **[3:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=229)** So using the free version, you don't have that available as an option.
>
> **[3:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=233)** Now we'll look at the button component.
>
> **[3:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=236)** The button component in Elementor is also expected to be a link, which is not surprising.
>
> **[4:02](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=242)** It has a type setting, and using that dropdown you can change it to different color combinations.
>
> **[4:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=251)** This is somewhat concerning because each of these color combinations is a quick easy setting, but they also almost all have color contrast problems that are going to violate wicking expectations.
>
> **[4:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=264)** Now let's take a look at what this is like on the front end.
>
> **[4:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=268)** On the front end, we've set these accordions to have a heading as their title element.
>
> **[4:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=275)** Now that means I should be able to navigate them using the screen reader's H key to jump from heading to heading
>
> **[4:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=280)** - [Screen Reader] No next heading.
>
> **[4:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=282)** - [Instructor] Curiously, the screen reader reports that there is no next heading, so I'm going to inspect this item to see why that is.
>
> **[4:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=292)** In the browser's inspector, I can look at this heading and what I notice is that it has a role assigned to it of tab.
>
> **[5:02](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=302)** Now that's an Aria role and that means that this is not a heading, it's an H2 element, but that role has been assigned to it and means it no longer has the heading behavior.
>
> **[5:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=314)** It will not be recognized as a heading in your screen reader.
>
> **[5:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=318)** So while changing to an H2 is actually better overall, the way it's been implemented in Elementor means that it's actually making things not work as well as they would otherwise.
>
> **[5:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=331)** Now, let's take a look at that icon.
>
> **[5:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=333)** I'm going to use the reading mode in the screen reader to get to it instead of using the tab mode.
>
> **[5:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=337)** So I'm going to use the down arrow key.
>
> **[5:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=340)** - [Screen Reader] Link [red30tech.com](https://red30tech.com).
>
> **[5:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=343)** - [Instructor] As expected, this did not have an accessible name.
>
> **[5:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=346)** What it did read is the link's URL.
>
> **[5:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=350)** Now, in this particular case, since I used the URL [red30tech.com](https://red30tech.com), that is a very readable URL so somebody would be able to figure out what that referred to.
>
> **[6:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=360)** However, if this had been a link to something much more obscure, maybe to a [[Google]] document with a long unending string of letters and numbers it would be a lot less clear.
>
> **[6:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=371)** Let's take a look at that button.
>
> **[6:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=373)** We already know that the contrast is below expectations.
>
> **[6:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=376)** - [Screen Reader] Elementor button button.
>
> **[6:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=378)** - [Instructor] Interestingly, it read it out as "Elementor button button."
>
> **[6:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=382)** Now what that tells me immediately is that this link has been given the role of button.
>
> **[6:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=390)** Similar to the heading above, by giving it the role of a button it is no longer considered a link.
>
> **[6:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=396)** It will potentially still have the functionality you expect of it because this is actually a fairly common mechanism but it is confusing to a user because they're now going to expect this button to commit some kind of a button action, to save something or change something on the page, rather than linking them off to a different source.
>
> **[6:57](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=417)** Now let's take a look at Kadence Blocks.
>
> **[7:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=421)** Once again, in our accordion, we have to look around and see what kind of options we have.
>
> **[7:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=430)** The Kadence Accordion also has an option in its advanced settings for changing that title tag to an H2.
>
> **[7:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=438)** So that's going to be something we'll try here as well and hopefully it'll work better than it did in Elementor.
>
> **[7:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=444)** Now we'll take a look at the icon.
>
> **[7:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=447)** We can see from the existence of a link field that this icon is also expected to be a link.
>
> **[7:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=455)** You also can find that it has a field below it that says, "Title for Accessibility."
>
> **[7:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=460)** This is a very intriguing field to have available to you because you really want to be able to provide additional accessibility information.
>
> **[7:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=467)** So I have pre-filled that and we'll see how that's exposed on the front end.
>
> **[7:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=472)** Now we'll take a look at the button block.
>
> **[7:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=476)** - [Screen Reader] Editor content region block.
>
> **[7:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=478)** Advanced buttons document block.
>
> **[8:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=481)** Single button document button.
>
> **[8:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=484)** Edit multi-line Kadence block button.
>
> **[8:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=487)** - [Instructor] This button is obviously also expected to be a link, so we've added a link to it and we'll see what that does.
>
> **[8:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=494)** We're also going to take a look at the advanced settings because this button does have an icon in it and we want to find out whether we can give any kind of a name to that.
>
> **[8:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=504)** - [Screen Reader] Editor settings region clickable advanced tab button.
>
> **[8:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=508)** - [Instructor] In the advanced settings, I can see that there is a field where it says, "Add Aria Label."
>
> **[8:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=514)** I've put in some information there for exclamation icon 'cause I'm hoping that this will give me some kind of a name for the icon.
>
> **[8:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=521)** That would be very useful if this was an icon only button.
>
> **[8:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=525)** As it is I've added text, but there is an option to remove that text and show only the icon, so we need to know what that will do.
>
> **[8:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=533)** Having made all of these settings, let's look at what it's done on the front end.
>
> **[8:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=538)** So here we are looking at our Kadence Blocks built page and now we're going to try and see whether I can navigate through these individual accordions using the H key.
>
> **[9:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=548)** - [Screen Reader] Main landmark accordion number one button collapsed heading level two.
>
> **[9:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=553)** - [Instructor] That's a great result.
>
> **[9:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=554)** I was clearly able to get to that first heading.
>
> **[9:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=558)** - [Screen Reader] This is an example button heading level two.
>
> **[9:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=560)** - [Instructor] I can also get to the next one.
>
> **[9:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=562)** This is a great sign that I'll be able to navigate this content effectively using my built-in screen reader tools.
>
> **[9:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=569)** Now, can I activate this using the keyboard
>
> **[9:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=571)** - [Screen Reader] Expanded.
>
> **[9:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=572)** Expanded.
>
> **[9:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=573)** - [Instructor] I can, and it informed me on doing that that it was now an expanded accordion item.
>
> **[9:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=580)** So I know what the state of this button is when I reach it.
>
> **[9:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=583)** It's going to tell me this is expanded or this is collapsed.
>
> **[9:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=586)** - [Screen Reader] Collapsed.
>
> **[9:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=588)** - [Instructor] This is a good example of an accessible accordion.
>
> **[9:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=590)** It uses buttons, it uses headings that don't have their semantics overwritten and I can use it effectively.
>
> **[9:57](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=597)** Now let's take a look at that icon.
>
> **[9:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=599)** - [Screen Reader] This is another example button heading level two link exclamation icon.
>
> **[10:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=604)** - [Instructor] So I didn't hear anything for the icon at all.
>
> **[10:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=609)** It jumped me directly to something that said that it was an exclamation mark and it was a link.
>
> **[10:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=616)** That means I've gotten all the way to that block button before ever getting to that icon.
>
> **[10:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=621)** Now if we construe from that that this icon is intended to be decorative, that's fine.
>
> **[10:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=628)** However, I did give it content.
>
> **[10:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=629)** I gave it that accessible title but I didn't hear that and I don't know where it is.
>
> **[10:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=634)** So let's take a look and see what they've actually done with that information.
>
> **[10:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=640)** It looks like that title field has been assigned to the SVG elements title element but there's no ARIA labeled by connection.
>
> **[10:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=650)** So this information isn't being communicated from the HTML to the screen reader.
>
> **[10:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=656)** This is not truly an accessibility field because it doesn't have all of the attributes required it would make that accessibility information projected to a user.
>
> **[11:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=667)** Let's take a look at that button now.
>
> **[11:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=672)** Now, when I tried to navigate the page to see the icon we actually heard the announcement of the exclamation icon.
>
> **[11:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=681)** However, we shouldn't have heard that in that context.
>
> **[11:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=686)** It should have been something that comes after the name of the button.
>
> **[11:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=689)** If that had been a label on the icon we would've heard Kadence block button, exclamation icon.
>
> **[11:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=695)** We didn't get that information, and that's because this Aria label is being attached to the anchor element itself, the entire button and because of that, the Aria label overrides all of the other content inside this block.
>
> **[11:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=710)** The effect of this Aria label is that we actually are losing information for people with disabilities.
>
> **[11:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=716)** They will not be able to get all of the text of this link.
>
> **[11:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=719)** This could be improved in Kadence Blocks with better communication about what that field represents.
>
> **[12:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=727)** So how do you feel about using a page builder?
>
> **[12:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=730)** In both the demos there were some good accessibility possibilities available.
>
> **[12:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=735)** However, neither Elementor nor Kadence Blocks used the most accessible options by default.
>
> **[12:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=741)** Kadence included multiple accessibility specific settings that were either irrelevant or potentially damaging to accessibility with the right knowledge.
>
> **[12:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=751)** Both of those tools can create accessible content but they did little to point the user in the right direction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[WordPress]] (2), [[Google]] (1)
> **Speakers:** - [instructor] (11), - [screen (10)
> **Definitions:** is a  (7), is an  (3), means that (1)
> **Env Vars:** html (3), url (3), svg (1), aria (1)
> **CLI Commands:** make (3), find (2)
> **Prerequisites:** set up (2), install (1)
> **URLs:** [red30tech.com](https://red30tech.com) (2)
> **Analogies:** similar to (2)

#### [Block themes vs. classic themes vs. page builders](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=0)** - [Instructor] How do the differences between block themes, classic themes and third-party page builders stack up?
>
> **[0:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=6)** What is the impact on the accessibility of your final product?
>
> **[0:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=11)** Full site editing is effectively a page builder.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=14)** Using it, you can edit pretty much every aspect of your site, changing colors, spacing, and choosing different types of navigation menus.
>
> **[0:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=21)** This isn't something brand new.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=24)** The option to manipulate every part of your site has long been a part of the page builder experience.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=30)** Previously, every tool that provided page building tools had a unique interface.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=35)** For every tool, there was a different path to success.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=38)** Elementor worked one way, Beaver Builder another, and Avada or Divvy have yet other totally different experiences.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=46)** However, when you work with a tool like Kadence Blocks the experience is very similar to using native [[WordPress]] site editing because that platform is extending the WordPress editing environment directly.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=59)** As you've seen before, the accessibility of most page builders is a mixed bag.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=64)** Some things are more accessible, some are less.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=68)** The core WordPress experience is not perfect either but creating accessible output is a high priority for the WordPress accessibility and editor teams.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=78)** The impact of different webpage editors on accessibility isn't a simple answer.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=84)** I can't say that using a full site editing theme will result in a more accessible website, nor can I say decisively that using Elementor will result in a less accessible website.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=94)** Your own knowledge and decisions influence your outcomes.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=99)** What I can say is that full site editing is trying to set you up for success and based on my experience in testing this isn't always true of third-party page builder plugins.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=111)** Block themes don't give the average user the same level of flexibility as a classic theme, but they give you a high level of flexibility without needing development skills like other page builders do.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=124)** For the average user, using a full site editing theme reduces the risk of major accessibility flaws.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=130)** Global issues like missing landmark regions, skip links, or inaccessible navigation.
>
> **[2:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=136)** It doesn't inherently help with issues like color contrast or distinguishable controls and focus states, though those are usually pretty fixable.
>
> **[2:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=146)** Most advanced user interface elements like accordions will require a separate plugin which may not be accessible.
>
> **[2:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=154)** Overall, the pros outweigh the cons with full site editing if you are a content creator with some accessibility knowledge but without development skills.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=163)** If, on the other hand, you're a knowledgeable developer with advanced skills and accessibility, you could accomplish all the same features in a classic theme by implementing them yourself.
>
> **[2:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=174)** That gives you more control and empowers you to make the decisions that suit your needs best.
>
> **[3:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=180)** If we compare all three options, page builders, block themes, and classic themes across the board, page builders pose the highest risk.
>
> **[3:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=189)** They have improved over the last few years, but they contain many interface components that are simply not designed for accessibility and poor defaults.
>
> **[3:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=199)** Classic themes are the most variable.
>
> **[3:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=202)** A classic theme with the accessibility-ready tag is probably a good starting point, but almost anything can happen outside of that.
>
> **[3:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=210)** Block themes offer a subset of major accessibility components that are built into the underlying structure of the site.
>
> **[3:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=218)** This doesn't make them conformant with accessibility standards, but it sets the starting bar at a good minimum.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (4)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 4. Using Accessible WordPress Plugins

[↑ Back to Table of Contents](#table-of-contents)

#### [How to assess plugin accessibility](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=0)** - [Instructor] [[WordPress]] plugins bring us into the funhouse mirror world WordPress.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=5)** Anything you think you know aout what WordPress does may no longer be true.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=10)** What about plugins makes this happen, and what is the impact of this change on accessibility?
>
> **[0:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=15)** To get a grasp on this issue, you need to know a little about how WordPress plugins work.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=22)** Think about some plugins you've used in the past.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=25)** Some of the plugins are features, like contact [[Forms]].
>
> **[0:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=28)** Others might implement changes to existing features, like implementing an [[AJAX]]-driven live search or adding custom accordion blocks.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=37)** All of these plugins are taking advantage of the rich network of actions and filters throughout WordPress.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=43)** This is the method used by plugins to change how WordPress works.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=48)** An action is where your code performs a task at a particular time in the WordPress code.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=56)** And a filter is where your code changes output or variables when they are being used by WordPress.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=63)** Actions and filters can change just about anything in WordPress, and these changes might be improvements or not.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=71)** Themes can also use actions and filters, although the default themes and themes on [wordpress.org](https://wordpress.org) are limited to design only.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=79)** Complex commercial themes and page building tools often build extensive plugin-like functionality into the theme.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=87)** In those cases, each feature you enable in themes settings can be thought of like you're enabling another plugin, and the additional functionality needs testing.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=97)** Ideally, a theme should be targeted at how your overall page is structured and what it looks like.
>
> **[1:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=103)** Plugins should be features that you still want to have even if you change your theme.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=108)** This is an issue of content portability.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=110)** You should be able to change your theme without losing critical features or access to content.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=116)** Plugins often build complex functions, contact forms, shopping carts, calendars, and event management or social media sharing.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=126)** So, what do most plugins do in the end?
>
> **[2:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=129)** Plugins usually create interfaces with form fields, buttons, and content, and they return responses.
>
> **[2:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=137)** Interfaces have interactive components: buttons, links, and form fields that create those form's accordions or carousels you're interacting with.
>
> **[2:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=148)** These features perform an action, and that action provides feedback to the user, usually via visible notification, but they also need to provide oral feedback and make explicit connections between related events or data.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=163)** Form fields need to be labeled.
>
> **[2:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=165)** Buttons need to be real buttons, not divs or spans with [[JavaScript]] handlers.
>
> **[2:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=170)** Buttons need to have accessible names.
>
> **[2:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=172)** Buttons need to communicate their state.
>
> **[2:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=175)** Content may have complex layouts requiring strong semantic [[HTML]] architecture, like headings.
>
> **[3:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=181)** And form responses need to be passed through to assistive technology.
>
> **[3:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=186)** In order for a form response to be accessible, it needs to either receive focus or be announced by the screen reader when it happens.
>
> **[3:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=196)** And the error can't be dependent on color to communicate its status.
>
> **[3:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=201)** Errors must be explicitly connected to the field that triggered the error so users know what to fix.
>
> **[3:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=208)** Let's imagine that you've built a great accessible site with a plain search form that's clearly labeled and provides clear [[Semantic Markup]] for the search results.
>
> **[3:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=219)** Now you install a plugin that sets up Ajax-driven searching.
>
> **[3:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=223)** It adds auto-completion to search results and produces those results live as you type without waiting for the user's form submission.
>
> **[3:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=232)** The plugin has changed your form from a text field to an auto-complete.
>
> **[3:57](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=237)** An auto-complete isn't a native HTML input type.
>
> **[4:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=240)** You're going to have to test that.
>
> **[4:02](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=242)** Many common auto-complete packages are not accessible.
>
> **[4:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=247)** Is the form still properly labeled?
>
> **[4:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=250)** Does it still submit the form so you can find the old search results by hitting Submit or pressing Enter, or is it totally dependent on the live search?
>
> **[4:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=261)** The plugin has changed how search results are presented.
>
> **[4:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=264)** Instead of a page refresh with a set of navigable post headings, that data is output directly in the page where you are as you go.
>
> **[4:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=272)** Are these changes being announced to the screen reader so they know the search has results?
>
> **[4:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=278)** Can your screen reader navigate the new search results, using their keyboard?
>
> **[4:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=282)** Fundamentally, these guidelines are the same as for any interface.
>
> **[4:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=287)** The challenge with plugins is always in identifying what needs to be tested.
>
> **[4:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=293)** This is why there's no equivalent of the theme directory's accessibility ready tag for plug-ins.
>
> **[4:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=299)** Themes have pretty fixed interfaces.
>
> **[5:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=301)** They all do more or less the same thing.
>
> **[5:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=305)** Plugins are enormously variable, so testing against even a subset of guidelines is vastly more time-consuming.
>
> **[5:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=312)** You need to test your configuration in your environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (10), [[Forms]] (2), [[AJAX]] (2), [[HTML]] (2), [[JavaScript]] (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** html (2)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [ARIA, AJAX, and other four-letter words](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=0)** - [Instructor] [[AJAX]] and ARIA are two technologies that are crucial in modern [[Web Development]].
>
> **[0:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=6)** AJAX, or asynchronous [[JavaScript]] and XML is used to send and receive information without refreshing the page.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=14)** And ARIA, accessible rich internet applications is used to make sure that screen readers can understand how parts of the page are related and communicate events that happen without refreshing the page.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=27)** ARIA is a framework for giving screen readers better context in complex interfaces.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=33)** The entire set of attributes is there to bridge the gap between how native operating system applications work and what [[HTML]] can do.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=42)** ARIA extends the semantics of native HTML elements.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=47)** The first rule of ARIA is that if you can use a native HTML element or attribute that has the semantics you need, then you should do so.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=57)** Basically, if you need a button, use a button.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=60)** But there are some important features that HTML just doesn't include and these are always good use cases for ARIA.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=67)** But before you choose to use ARIA attributes you should first make sure that you can't accomplish the same goal with standard HTML.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=75)** An example of misuse of ARIA is in creating a fake checkbox.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=81)** This example uses ARIA to turn a span into a checkbox set its state, provide an accessible name and uses tab index to make it focusable.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=91)** This will work in many environments but the exact set of relationships in state can also be set in standard HTML.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=99)** It's less code and it's more reliable across all environments.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=104)** But ARIA is great for many tasks.
>
> **[1:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=106)** These include setting relationships between HTML elements other than inputs and labels exposing the current state of a control and making announcements of dynamic changes to page content.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=118)** ARIA is used to translate visual relationships into meaningful information for screen reader users.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=126)** Let's look at a few ARIA attributes that are among the most important for general use.
>
> **[2:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=131)** ARIA expanded, ARIA label and ARIA labeled by ARIA hidden, ARIA described by, and ARIA live.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=140)** ARIA expanded informs a user whether the content controlled by a button is currently expanded.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=147)** For any content that is not revealed visibly at all times and is exposed by the click of a button it's valuable for a screen reader to recognize whether that panel is currently visible.
>
> **[2:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=159)** If the concealed panel contains a lot of information that a user would have to navigate through knowing that you can save a lot of key presses by closing the panel is great context.
>
> **[2:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=170)** ARIA current informs the user that a link refers to the current page or that a step in a process is their current place in that process.
>
> **[2:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=179)** In a navigation menu, it lets the user know that this link is the same page you're on.
>
> **[3:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=184)** In a calendar it can tell you you're on the current date and in a multi-step form it can tell you which step is active.
>
> **[3:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=192)** ARIA label, ARIA labeled by, and ARIA described by are all ways of providing or extending accessible names for an element.
>
> **[3:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=202)** The accessible name is the information in the HTML communicated to the browser and then to the operation system's accessibility API.
>
> **[3:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=211)** It's used by screen readers to understand the content.
>
> **[3:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=215)** ARIA label takes that name directly.
>
> **[3:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=218)** With button aria label equals closed modal It specifically says the name of this item is closed modal.
>
> **[3:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=226)** It should be used when an icon is used for visual labeling.
>
> **[3:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=229)** The ARIA label will replace all other naming information present.
>
> **[3:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=234)** The X in that button will be ignored by screen readers.
>
> **[3:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=238)** ARIA labeled by is used to improve names.
>
> **[4:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=241)** When the relevant text is present and visible on the page but not in the place where it needs to be read by the screen reader at that time.
>
> **[4:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=250)** Like ARIA label, it completely replaces other naming information, but it is useful because it can reference multiple elements which can give users better information.
>
> **[4:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=262)** Additionally, because the referenced element is visible content, it will be translated if you're using a tool like [[Google]]'s Translate feature to try and read the page.
>
> **[4:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=272)** This isn't the case with ARIA label.
>
> **[4:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=275)** ARIA labeled by is useful for naming regions like an aside landmark using a visible heading inside the landmark to take advantage of those automated translations.
>
> **[4:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=286)** ARIA described by is a way of associating additional information with an object that already has a label.
>
> **[4:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=293)** One of the best uses of this attribute is to ensure that form field instructions are read by a screen reader when the field is focused.
>
> **[5:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=301)** For example, when providing the format needed to enter date information.
>
> **[5:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=306)** It's also used to associate error messages directly with their relevant fields.
>
> **[5:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=312)** ARIA live tells screen readers that a region on the page is expected to change without a page refresh.
>
> **[5:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=319)** This lets the screen reader know that this region needs to be monitored so that when a change occurs the new information will be promptly read to the screen reader user without requiring them to move focus or browse the page.
>
> **[5:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=333)** A screen reader works using the version of the [[Document Object Model (DOM)|document object model]], or DOM that was built when the site first loaded.
>
> **[5:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=341)** When AJAX is used to generate a visual notification such as after submitting a contact form, the DOM is changed.
>
> **[5:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=350)** Without an ARIA live region designated to receive that update screen readers won't be notified that anything has changed.
>
> **[5:57](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=357)** If the element that's updated has an ARIA live attribute however the new content will be announced as soon as it's populated.
>
> **[6:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=366)** The use of AJAX and other dynamically updating content driven by JavaScript in modern development makes ARIA live a critical attribute in many environments.
>
> **[6:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=376)** Any request that updates the DOM without a page refresh requires some kind of notification to ensure that screen readers get any context for what's happening.
>
> **[6:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=387)** All of these characteristics will come into play as we dive into an example showing the differences between AJAX with ARIA and without.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (8), [[AJAX]] (5), [[JavaScript]] (2), [[Web Development]] (1), [[Google]] (1)
> **Env Vars:** aria (35), html (8), ajax (5), dom (3), xml (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), refers to (1)
> **UI Navigation:** checkbox (2)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Interacting with forms and their responses](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=0)** - [Instructor] To demonstrate the use of Aria and [[AJAX]], I'm going to run three similar demos.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=7)** First, a test using the default non-Ajax version of the [[WordPress]] comment form.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=13)** Second, a test using Ajax but without any considerations for accessibility.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=19)** And last, another test with accessible AJAX notifications put in place.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=27)** First, we're going to start with this standard comment form and I'm going to submit the form and trigger an error.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=35)** - [Automated Voice] Main landmark, name star, email star, website, edit, save post comment button, comments of mission failure, error.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=44)** Please fill the required fields link double left-pointing angle bracket back.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=51)** - [Instructor] So this is what WordPress does by default, you're going to land on a whole new page.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=55)** You'll get this message read to you and then you'll be told to go back.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=59)** You'll notice that it read that doubled-angled pointing brackets as part of the link, and that's something that's not terribly helpful, although it's not going to cause any serious problems.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=71)** On going back, you landed back on the page now because you went to a new page and you went back and forth, the location, your focus is going to land is really controlled by the browser.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=82)** It's going to be part of how your browser remembers where you were.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=85)** So this may or may not leave you in a useful location, but in this case, using Chrome with the NVDA screen reader it has.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=94)** So it's fairly clear and it's pretty straightforward.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=97)** We know what we've got out of this.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=99)** We're able to navigate the form.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=100)** Now, let's see what happens when we jump over to a version that has AJAX which makes it smoother for most users but might cause us some problems.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=110)** In this form, I'm going to do the same thing.
>
> **[1:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=114)** I'm going to submit the form and try and create an error.
>
> **[1:57](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=117)** Let's listen to what the screen reader does.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=120)** - [Automated Voice] Main landmark, name star, email star, website, edit.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=124)** Save my N post comment button.
>
> **[2:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=127)** - [Instructor] So for those of us who can see, we saw a bunch of errors show up.
>
> **[2:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=134)** We were notified visibly that there are errors in submitting this comment, that we need to complete those fields.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=140)** And which field was noted is the email field and it has a prominent error associated with it.
>
> **[2:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=146)** Let's see if I can find that information.
>
> **[2:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=148)** My focus hasn't changed, which is great so I'm going to find it by going backwards.
>
> **[2:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=154)** - [Automated Voice] Save my name.
>
> **[2:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=156)** Website edit, email star, edit required.
>
> **[2:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=158)** Your email address will not be published...blank.
>
> **[2:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=162)** - [Instructor] So it also didn't read us the error on this field.
>
> **[2:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=166)** I can tell it's blank, and because I know it's required and that's part of the standard WordPress form I can intuit that this is probably a problem but I wasn't actually notified that there was an error.
>
> **[2:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=176)** I don't even know that my comment wasn't submitted.
>
> **[3:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=180)** All I know is I pressed a button and I heard no response at all.
>
> **[3:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=185)** This is a terrible experience for a user because you have no idea whether anything has happened and there's a lot of exploration required to figure out whether this was successful, whether it was a failure, and if it was a failure, what you need to do next.
>
> **[3:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=199)** Now, let's take a look at the version where AJAX has been implemented but with accessibility in mind.
>
> **[3:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=206)** Once again, I'm going to do this same test.
>
> **[3:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=209)** - [Automated Voice] Main landmark, names, emails, website save post comment button.
>
> **[3:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=215)** There were errors in submitting your comment.
>
> **[3:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=218)** Complete the missing fields and try again.
>
> **[3:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=220)** - [Instructor] Now, on attempting to post this comment, I was immediately notified that there were errors in submitting your comment.
>
> **[3:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=227)** If this was a fully fleshed plugin, it would also tell me which error was happening in which field.
>
> **[3:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=234)** Although for a form as simple as a comment form with only four fields to fill out, it is not very difficult to discover.
>
> **[4:02](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=242)** Again, my focus hasn't changed.
>
> **[4:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=244)** I'm at the end of the form. This is fine.
>
> **[4:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=246)** Moving your focus to the top can work but it also might mean that that error gets read twice if it's both an Aria live field and it's also the place where your focus gets landed.
>
> **[4:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=258)** Let's navigate back to that email field and see whether we hear about this error.
>
> **[4:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=263)** - [Automated Voice] Save my website, email star edit.
>
> **[4:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=266)** Required error email is a required field.
>
> **[4:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=269)** - [Instructor] In this case, the email notification was read out as a required field, and this is great information.
>
> **[4:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=275)** You're clearly told where the error is and what happened.
>
> **[4:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=278)** In summary, AJAX can be very useful.
>
> **[4:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=281)** It allows you to quickly submit a form and get immediate feedback without having to go to a new page.
>
> **[4:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=288)** However, if accessibility hasn't been taken into account, it can be a completely disenfranchising experience for a user with a disability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AJAX]] (7), [[WordPress]] (3)
> **Speakers:** - [instructor] (6), - [automated (5)
> **Env Vars:** ajax (4), nvda (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Prerequisites:** required to (1)

#### [Authoring tools and accessibility guidelines](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=0)** - [Instructor] Do you have anybody working on your site who has a disability?
>
> **[0:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=4)** If you hired somebody with a disability, do you know whether they would be able to make edits to your website?
>
> **[0:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=11)** One of the most invisible discriminatory practices against people with disabilities is to require tools that aren't accessible.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=20)** Needing to use assistive technology doesn't inherently stop somebody from doing work on a website.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=26)** The tools required, however, may pose a major barrier.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=31)** The Authoring Tool Accessibility Guidelines, or ATAG, are closely related to WCAG.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=37)** Rather than being focused on content, they're focused on the process of creating content.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=43)** They are guidelines for checking whether a tool for creating content is usable by people with disabilities, and also whether it supports creating content that is consumable by people with disabilities.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=56)** Most day-to-day web editing tasks require many different parts, [[WordPress]] core features and multiple required plug-ins for content and [[Data Management]].
>
> **[1:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=68)** What do you do if a mission-critical part of the admin isn't accessible to your employees?
>
> **[1:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=74)** Take a moment to think about the administration of your own website if you have one.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=78)** What are the most critical tasks you need to do?
>
> **[1:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=82)** When it's time to test the accessibility of tasks you're going to hire people to do, a good starting point is to identify that employee's workflow.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=92)** What does your employee need to do in order to fulfill their role?
>
> **[1:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=97)** For a demonstration, I'm going to hypothesize that you've hired an events manager for your independent cinema.
>
> **[1:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=103)** You've got a graphic designer that makes images to use, but the person managing the website is blind.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=110)** In this demo, we're using a combination of several popular plug-ins to put together a complex event listing site.
>
> **[1:57](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=117)** When your employee adds a new film, they need to be able to do these several steps.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=124)** First and foremost, obviously they need to add a title for the event.
>
> **[2:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=131)** - [Computer] Edit multi-line blank.
>
> **[2:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=134)** - [Instructor] They're also going to need to be able to add a description.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=140)** Both of these are fairly straightforward because this is part of WordPress core and WordPress has made this fairly accessible.
>
> **[2:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=149)** The next thing they need to do is add a title slide.
>
> **[2:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=153)** - [Computer] Clickable move up button.
>
> **[2:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=154)** Move publish button.
>
> **[2:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=158)** Move up button.
>
> **[2:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=160)** Add button.
>
> **[2:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=161)** - [Instructor] This is one of the flaws that you're seeing with the Classic Editor in WordPress.
>
> **[2:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=167)** The fields aren't always in the order you might expect them to be.
>
> **[2:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=170)** To save time, I'm going to jump over to the slide section.
>
> **[2:57](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=177)** - [Computer] Clickable add slide link.
>
> **[2:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=179)** - [Instructor] Now we're ready to add a slide.
>
> **[3:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=181)** This is a clickable surface.
>
> **[3:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=183)** It didn't announce that it was a button, so I'm not totally sure what it's going to do.
>
> **[3:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=186)** But I'm going to try to activate it with the Enter key.
>
> **[3:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=189)** I can see visually that it's prompted me for an image or a video.
>
> **[3:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=194)** It didn't tell me it's done anything, however, so I really don't know what's going on.
>
> **[3:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=199)** Let's see if I can explore and try and find something more.
>
> **[3:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=202)** I'll start with the Tab key.
>
> **[3:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=204)** - [Computer] Toggle panel.
>
> **[3:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=205)** Film slideshow button expanded.
>
> **[3:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=207)** - [Instructor] That's left to the panel.
>
> **[3:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=209)** What about going forward?
>
> **[3:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=210)** - [Computer] Clickable add slide link.
>
> **[3:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=212)** Move up button move the events calendar box up.
>
> **[3:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=216)** - [Instructor] That's gone into the next meta box.
>
> **[3:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=218)** So I'm not finding any controls.
>
> **[3:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=220)** Nothing that's going to make it possible for me to add this slide.
>
> **[3:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=223)** That's our first barrier.
>
> **[3:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=225)** We've got a problem with adding that image.
>
> **[3:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=228)** Next, we need to set the start and end dates for these events.
>
> **[3:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=232)** - [Computer] Move down... Toggle table.
>
> **[3:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=234)** Row 2 column 1.
>
> **[3:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=236)** Table 3/29/2023, 8:00 AM to 5:00 PM. 3/29/20.
>
> **[4:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=243)** This event is add New event Red30 Tech Cinema WordPress document blank.
>
> **[4:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=249)** - [Instructor] So in the time and date section, first of all, our initial focus was a little strange, but let's try navigating through these start and end times.
>
> **[4:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=258)** - [Computer] Move up button, click top table, toggle panel, edit selected 3/29/2023.
>
> **[4:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=267)** Edit selected 5:00 PM. Edit selected 3/29/2023.
>
> **[4:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=275)** - [Instructor] So if you're listening carefully to what's being announced on these two fields, there's no label being provided.
>
> **[4:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=282)** I am not getting any idea of what these fields are for.
>
> **[4:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=285)** I do, however, have a time and a date field.
>
> **[4:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=289)** If I couldn't see the fact that this is actually the end time fields, I could very well think that these were the start time fields and I would, therefore, be entering the wrong information and it's in fact rather difficult to get to those start and end fields.
>
> **[5:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=306)** I'm not finding those, using normal keyboard transitions, using the Tab and Shift + Tab to find where I am.
>
> **[5:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=314)** It's not clear to me where in the tab order those other fields are.
>
> **[5:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=319)** Let's move forward and look at adding tickets.
>
> **[5:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=322)** - [Computer] Add new event Red30 Tech Cinema WordPress document blank.
>
> **[5:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=327)** This is the name.
>
> **[5:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=328)** Main Landmark add new event Red30 Tech Cinema WordPress document blank.
>
> **[5:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=332)** - [Instructor] Here we are, ready to add a new ticket.
>
> **[5:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=336)** - [Computer] Main landmark Type edit blank.
>
> **[5:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=340)** - [Instructor] I can also see visually here that there's some additional description for this field that isn't being reported to me.
>
> **[5:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=345)** That's not properly connected with the field.
>
> **[5:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=349)** - [Computer] Description. Edit multi-line blank.
>
> **[5:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=352)** Show description on front end ticket form.
>
> **[5:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=355)** Start sale, edit blank.
>
> **[5:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=358)** - [Instructor] I do want to be able to start a sale.
>
> **[6:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=360)** I'm assuming that this is going to be a date field, though it hasn't given me any default values, so I don't really know.
>
> **[6:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=367)** I'll see what I can do.
>
> **[6:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=369)** Because I haven't been notified of any kind of an automated way of completing this date field, though you can clearly see that there's a calendar popup, I'm just going to try and type something in.
>
> **[6:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=380)** - [Computer] 04/15/33.
>
> **[6:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=386)** - [Instructor] It seems to have worked, so I'm moving on.
>
> **[6:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=388)** - [Computer] Ticket start date, edit blank.
>
> **[6:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=391)** - [Instructor] So what I can see is that this is a time field, but what I've actually been told is that it's the ticket start date.
>
> **[6:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=398)** So now I'm confused because this is... Is this a date field or is this a time field?
>
> **[6:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=404)** Visually, I know it's a time field, but if all I had to go on was what I had heard, I wouldn't be able to tell that.
>
> **[6:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=411)** Let's keep going.
>
> **[6:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=412)** - [Computer] End sale ticket end date price.
>
> **[6:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=415)** Edit blank.
>
> **[6:57](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=417)** Capacity, grouping, capacity.
>
> **[7:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=420)** Radio button, checked one of three.
>
> **[7:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=423)** - [Instructor] I certainly do want to be able to set the capacity.
>
> **[7:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=426)** Though, I can clearly tell that the label I see for this capacity field has nothing in common with what I heard.
>
> **[7:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=434)** What are the other options?
>
> **[7:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=436)** I'll use the arrow keys to jump between the different radio buttons.
>
> **[7:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=440)** - [Computer] Capacity, capacity, capacity.
>
> **[7:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=443)** Radio button, check two of three.
>
> **[7:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=446)** - [Instructor] Even if you say capacity three times, it's not going to help me understand what I'm supposed to do here.
>
> **[7:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=452)** What about the other option?
>
> **[7:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=453)** - [Computer] Capacity. Unlimited capacity.
>
> **[7:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=456)** Capacity. Radio button, check three of three.
>
> **[7:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=459)** - [Instructor] This actually did tell me some information, but as an expert in accessibility, what it's telling me is that these labels are not put together appropriately and they don't share all of the information you actually need to be able to use this interface.
>
> **[7:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=476)** As you can see, many of those steps were readily accomplished using a screen reader in the classic editing view, however, there were quite a few that were causing problems and they aren't better in the block editor.
>
> **[8:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=488)** They're all coming from plug-ins.
>
> **[8:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=490)** These tasks are difficult to complete, using very popular and widely used tools, evidence that you can't assume popular tools are accessible.
>
> **[8:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=500)** Although accessibility is continuously improving in many plug-ins, the default state is still far from meeting standards, let alone providing an enjoyable experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (7), [[Data Management]] (1)
> **Speakers:** - [instructor] (16), - [computer] (15)
> **CLI Commands:** make (2), find (2)
> **UI Navigation:** toggle (3), in the tab (1)
> **Ports:** :00 (3)
> **Env Vars:** atag (1), wcag (1)
> **Definitions:** is a  (2)


### 5. Accessibility Plugins for WordPress

[↑ Back to Table of Contents](#table-of-contents)

#### [Testing tools for WordPress](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=0)** - [Instructor] There are a lot of commercial accessibility testing tools available, and you can do your testing using any of them successfully, but there can be advantages to using tools specifically designed for use with [[WordPress]].
>
> **[0:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=13)** There are only a few plugins that integrate with WordPress to provide accessibility feedback.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=19)** Each uses a significantly different approach, and not every workflow will work for your needs.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=25)** First, we'll look at Accessibility Checker by Equalize Digital.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=29)** Equalize Digital is a WordPress agency specializing in accessibility, and this plugin is available in both a free version and a premium version with more extensive features.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=40)** Equalize Digital's product is mostly going to be shown in the backend of your website.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=46)** In the backend, what they show is a panel where you have all of your errors.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=53)** At the footer of your editing page, they show a summary, a set of details, and some feedback on the readability of your page.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=61)** It'll give you immediate feedback when you make changes and update your page, so it can be very useful for quickly detecting the problems you might have.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=71)** In the details, each error is explicitly described and you can get more feedback about it.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=78)** In this case, it's telling you there's a missing table header.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=82)** Now what I know is really the problem here is that there's a table present, but it's the same fundamental problem.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=90)** Any table that doesn't have a header is really only being used presentationally because it doesn't have any heading information to provide that structure.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=100)** This will disclose to you the different types of errors found in your website.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=105)** It also does do readability testing, so it's going to look at your general reading grade level and suggest to you whether you might want to add some additional information.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=116)** In the Pro version, it also does extensive reporting and provides you with a detailed examination of your entire site, as well as other features in development.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=126)** A somewhat similar tool is WP ADA Compliance Check plugin by Alumni Online Web Services, LLC.
>
> **[2:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=136)** like Accessibility Checker, this plugin also has a free plugin with a premium version available.
>
> **[2:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=143)** Unlike Accessibility Checker, this plugin is primarily focused on reporting.
>
> **[2:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=148)** It's also limited in the free version, and it doesn't include tests for all of the things that it's able to do.
>
> **[2:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=155)** I consider this to be somewhat of a problem in any plugin, the fact that it doesn't actually provide all of the tests it's able to do if you're not paying them.
>
> **[2:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=166)** The reporting is also a valuable feature, but for me it's more critical that all of the tests are present.
>
> **[2:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=176)** It can do a scan of your entire site, but in the free version, it only does a subset of your pages.
>
> **[3:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=185)** Once you've run a scan, it gives you a table that shows you all of the errors it has detected on your website.
>
> **[3:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=192)** It's a little harder to use because it's not integrated directly into your content as you edit, but it does give you a lot of detail and a lot of data.
>
> **[3:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=202)** It allows you to ignore a particular issue, recheck it, edit the changes, or view where it's happening.
>
> **[3:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=208)** This can also be a useful plugin for users to do testing on their website.
>
> **[3:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=215)** A third tool to take a look at is Sa11y, or S-A-11-Y.
>
> **[3:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=221)** It's a simpler tool than either Accessibility Checker or the WP ADA compliance Check, but it can still be useful for a lot of reasons.
>
> **[3:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=229)** Unlike the other two tools, which are primarily focused on the backend of your site, and doing scanning of your content from that perspective, this is a frontend tool that only looks at your site from the front end.
>
> **[4:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=241)** It shows up as an icon in the bottom right corner.
>
> **[4:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=246)** When you activate it, it'll highlight a set of errors that it's found on your page, and give you some tools for navigating through it.
>
> **[4:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=253)** Now, it has a smaller set of tests than either of the other two plugins, 'cause it is entirely based on [[JavaScript]], where the other two plugins are also doing [[PHP]]-based analysis of the code and content of your page.
>
> **[4:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=267)** However, it is going to be rendering exactly what it sees.
>
> **[4:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=271)** So in terms of testing the total [[Document Object Model (DOM)|document object model]], it's a good tool to examine all of that information.
>
> **[4:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=279)** By clicking the Error button.
>
> **[4:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=282)** you can jump from one item to the next throughout the page.
>
> **[4:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=287)** it'll indicate problems and it will also flag things that it knows are well done, even though the very presence of alt text in an image does not mean that it's actually accessible it only means that the alt text is present.
>
> **[5:02](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=302)** The big advantage to testing tools integrated into WordPress is that your testing is simultaneous with [[Content Creation]].
>
> **[5:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=310)** The earlier you know about an accessibility issue, the better.
>
> **[5:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=314)** You should try each of these plugins and see what works best for you.
>
> **[5:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=318)** Schedule yourself some time to install each tool and play around.
>
> **[5:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=323)** You might find that one of them is the perfect match for your accessibility experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (4), [[JavaScript]] (1), [[PHP]] (1), [[Document Object Model (DOM)|Document object model]] (1), [[Content Creation]] (1)
> **Env Vars:** ada (2), llc (1), php (1)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** make (1), php (1), find (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Accessibility overlays](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=0)** - [Instructor] Have you ever been browsing around the web and encountered buttons on a website that have some kind of accessibility symbol on them?
>
> **[0:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=7)** That's a common way of displaying the most visible accessibility overlay, the accessibility toolbar.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=14)** These toolbars usually contain a wide variety of options, font size changes, color contrast, enabling focus states and more, that, in theory, improve the accessibility of the site you're using.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=27)** Another aspect of overlays is in accessibility automation, running a script that analyzes your website, finds errors, and fixes them automatically.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=38)** Both aspects work in the same way.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=40)** The difference is whether a set of features are implemented automatically or only when enabled by a user.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=47)** Pretty much all plugins that implement either aspect tend to do both.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=51)** They try to fix some issues automatically, and others only get changed when a toolbar option is enabled.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=58)** Usually, the distinction is between fixes that have no impact on the site appearance and those that do.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=65)** On the surface, this sounds fabulous.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=68)** Who wouldn't want to install a plugin that just magically fixes all the accessibility problems on your site?
>
> **[1:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=74)** Unfortunately, that's really not what's happening.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=79)** A high percentage of accessibility plugins in the [[WordPress]] plugin repository are overlays.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=85)** Most of those don't include any significant code, only the code necessary to include their script that comes from the service that owns the plugin.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=94)** All the real work is done by the script.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=98)** Even assuming that an accessibility overlay fixes your accessibility problems, having that script sourced remotely creates its own problems.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=107)** It creates [[Privacy Issues]].
>
> **[1:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=110)** The script may fail to function if there's a network interruption or a service outage.
>
> **[1:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=114)** And it may not work if remote scripts are blocked, like they could be behind a corporate firewall.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=121)** What is the value of an accessibility fix that only works when the service is up?
>
> **[2:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=127)** What happens if you pay a service to address your accessibility issues and then they shut down their service and you lose everything?
>
> **[2:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=135)** The risk that the accessibility overlay won't work is actually one of the smaller problems, however.
>
> **[2:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=141)** Many accessibility overlays simply don't work.
>
> **[2:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=144)** They make a host of assumptions about how to fix a website that may just be wrong.
>
> **[2:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=150)** But let's imagine that you've found an accessibility overlay that is able to fix everything it finds with perfect accessibility.
>
> **[2:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=158)** Pretty amazing, right?
>
> **[2:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=160)** Except that automation is still only able to reliably identify around 30% of accessibility issues.
>
> **[2:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=168)** One great example is form labels.
>
> **[2:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=171)** Automation can easily identify that a form doesn't have a label.
>
> **[2:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=175)** But can automation decide what the label should be?
>
> **[2:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=179)** Screen reader users can already explore the page to find any neighboring text that might help them out.
>
> **[3:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=185)** So what is automation going to do that will be better than that?
>
> **[3:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=189)** Some of the features that do work reliably, like high-contrast mode or increasing font sizes, are 100% duplicating functionality that already exists natively in browsers, in operating systems, or in assistive technology.
>
> **[3:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=203)** These features may be occasionally useful, but in reality, most users who need them need them all the time on every website, not just on yours.
>
> **[3:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=215)** What about using an overlay as a temporary fix, putting a BAND-AID in to mitigate risk while you get your website fixed professionally?
>
> **[3:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=224)** First, you need to be abundantly aware that an accessibility overlay does not mitigate risk.
>
> **[3:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=231)** It might be able to reduce the number of problems on your site, but that doesn't mitigate your risk of a lawsuit.
>
> **[3:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=238)** Second, you should be aware that some overlays can actually make users' experiences worse.
>
> **[4:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=246)** By attempting to automatically come up with solutions, overlays can make the wrong decision.
>
> **[4:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=252)** They can change a difficult-to-use site into an impossible-to-use site.
>
> **[4:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=258)** And it's not that the site was accessible before.
>
> **[4:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=261)** It's that these changes are bad decisions.
>
> **[4:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=263)** They may change the way the keyboard works on buttons, or they may apply a new label that doesn't match the function of this button.
>
> **[4:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=272)** A big warning sign that you should run away from an overlay is if it makes the claim that it will allow you to meet ADA compliance or meet WCAG standards with some certainty.
>
> **[4:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=283)** No plugin can guarantee that using automation.
>
> **[4:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=287)** You can't solve accessibility automatically.
>
> **[4:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=290)** It requires time, it requires research, and it requires work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (1), [[Privacy Issues]] (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** band (1), aid (1), ada (1), wcag (1)
> **Warnings:** be aware (1), warning (1)
> **Analogies:** imagine (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Accessibility add-ons](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=0)** - [Instructor] Accessibility plug-ins aren't always about fixing your site or about doing testing.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=6)** The major other category of accessibility plug-ins are accessibility solutions.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=11)** They help you create a more accessible experience for your users.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=16)** There are a lot of great tools available and I can't review them all, but I will go through a handful of key plug-ins and how they can help you.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=25)** First, let's look at a plug-in called Screen Reader Text Format.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=30)** This plug-in gives you an option to specify text that will only be available to screen readers.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=37)** It's available as an option in your block editor and when you select the item that includes it, it'll make it visible to you, but the [[Representational State Transfer (REST)|rest]] of the time, it's seen the way people who visit your website will see it.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=50)** Links need to have sufficient context for a screen reader user to know where it goes.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=54)** It may be best practice to use text that is visible, but the reality is that developers and content creators often work with designs and style guides that specifies something else like read more.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=67)** This tool is available inside your toolbar for the block and you can select Screen Reader Only to make something only available to that group.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=78)** Another useful tool is the laying attribute for the block editor plugin.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=85)** When text is in a language that isn't the main language of your website, it can have pronunciation problems for a screen reader.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=92)** Screen readers take their pronunciation cues from the language defined for the whole site and that's set in your [[WordPress]] settings.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=99)** But when you quote a French author in their original language, a screen reader expecting English may end up tricky to understand.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=108)** Using this plug-in, you can set the laying attribute to an appropriate value for that text.
>
> **[1:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=115)** This will enable screen readers to switch pronunciation when it's needed.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=120)** There are also plug-ins that include multiple tools in one.
>
> **[2:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=125)** Using the plug-in WP Accessibility, you can get a flag for missing alt attributes and videos without captions.
>
> **[2:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=132)** This image has alternative text assigned, so there's no flag, but if this was gone, it will specifically outline that image in a bold red outline and give a flag that says that the alt text is missing.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=147)** This can be a great way of quickly spotting what you've missed on your page.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=151)** The same thing can be done with video files.
>
> **[2:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=155)** This video doesn't have any captions or subtitles, so in order to change that, we can go to the text tracks and upload our VTT file.
>
> **[2:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=165)** That gives us a new set of captions that will be used with this file.
>
> **[2:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=172)** That may not be a real language, since I just wrote Pekinese.
>
> **[2:57](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=177)** But as you can see, as soon as I have selected the text track, that outline goes away and we know that this item has a set of captions.
>
> **[3:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=188)** Additionally, WP Accessibility can add information to your media library so you can find out that there are images that do or don't have alt text already assigned.
>
> **[3:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=200)** This can be helpful, but it only really identifies part of the problem.
>
> **[3:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=205)** Alt text missing in the media library doesn't mean this image is missing alt text in its post content and having alt text in the media library doesn't mean it has alt text in the post, 'cause all of these can be edited in context.
>
> **[3:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=219)** Fixing missing text in the library is useful because that will make it available for a future use of the image.
>
> **[3:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=227)** These kinds of plug-ins are useful no matter how accessible your website is because they give you tools that will help you create more accessible content.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[WordPress]] (1)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** select the (1), go to (1)
> **Env Vars:** vtt (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### 6. Authoring Accessible Content

[↑ Back to Table of Contents](#table-of-contents)

#### [Writing accessible content](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=0)** - [Instructor] Do you write content for any websites?
>
> **[0:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=3)** Do you help clients figure out how they can best phrase or layout their content?
>
> **[0:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=8)** Think about the content you work with, who do you imagine is the target audience?
>
> **[0:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=14)** For accessibility, the starting point is making the content understandable and perceivable.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=19)** You want to start with plain and clear language.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=22)** Short words and simple sentences are easier to understand.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=26)** This is true for everyone, but has a greater impact on people with cognitive impairments and learning disabilities.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=33)** When you can, choose a simple [[Microsoft Word|word]] over a complex one, your goal is communication, not art.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=39)** Non-native speakers, people in a hurry, and people with cognitive impairments will all appreciate your efforts.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=46)** Unnecessarily difficult language is always important to look out for.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=51)** This is something that Yoast SEO is useful for.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=55)** Yoast includes features that analyze your writing and make suggestions for improvement.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=60)** Suggestions might include sentence length, a lack of headings, and paying attention to those suggestions will really help your users.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=69)** Excessive use of abbreviations and acronyms will also increase complexity if your reader doesn't recognize the abbreviation.
>
> **[1:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=77)** Within your text you should write out the meaning of any abbreviation or acronym the first time it appears in the content.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=85)** For some topics, complexity is essential.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=88)** If you're writing on quantum mechanics using simple language may just not be an option.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=94)** However, if you're writing instructions for people to use a transit ticketing machine, every sentence should be clear to anybody who might use public transit.
>
> **[1:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=103)** Adding a simplified summary for complex topics is a way of giving people a window into content, even if it is beyond their understanding.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=112)** Lainey Feingold, a lawyer who writes on accessibility in the law, includes a simplified summary on every article.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=119)** Law is an example of a topic that's difficult to understand, but important to a very wide audience.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=126)** There are a few plugins that support adding simplified summaries.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=130)** WP Accessibility and Accessibility Checker by Equalized Digital are both able to take care of this.
>
> **[2:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=138)** Are you working on content that has similar characteristics?
>
> **[2:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=143)** In addition to the content of your text, think about how word choice can impact percievability.
>
> **[2:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=150)** Do your instructions make sense in all situations?
>
> **[2:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=154)** Some perceptions are purely contextual.
>
> **[2:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=157)** If you write in the graphic on the left that instruction may be unclear in some cases.
>
> **[2:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=164)** For a screen reader, there is no such thing as right or left.
>
> **[2:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=167)** If this page is being viewed on a mobile device, that graphic may appear above or below the text.
>
> **[2:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=174)** This isn't a problem with the user's understanding, it's a problem because you've given instructions that only applied to one view of the content.
>
> **[3:02](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=182)** Instead of using positional references, provide instructions that are unambiguous perhaps a link that targets the image.
>
> **[3:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=190)** Clearly labeling images can also help.
>
> **[3:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=192)** If you need two images to be compared, labeling them clearly as image one and image two could help clarify ambiguity.
>
> **[3:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=201)** Writers sometimes use color in a similar way.
>
> **[3:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=205)** Writing "click on the orange button" has many of the same risks.
>
> **[3:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=208)** Visitors who are colorblind or using a screen reader may not know which button you're talking about.
>
> **[3:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=213)** On a mobile device in bright sunlight, some colors may be impossible to distinguish, and again if the site is redesigned the orange button could be some other color entirely.
>
> **[3:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=225)** The visual appearance of your writing impacts people with reading related disabilities.
>
> **[3:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=230)** Color alignment, font, and spacing can all have a profound impact.
>
> **[3:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=235)** People with low vision, dyslexia, or dyscalculia, attention deficit hyperactivity disorder, and processing disorders will struggle with some design choices.
>
> **[4:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=246)** How can the way you style your text impact your users?
>
> **[4:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=250)** Take something as simple as text alignment.
>
> **[4:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=253)** The use of text that's either center-aligned or fully justified can cause unique problems.
>
> **[4:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=259)** Center alignment is particularly hard on people with low vision.
>
> **[4:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=263)** Because the use of zoomed text means that you can only see a few words at a time, using center alignment causes problems moving from one line to the next while the user hunts for the beginning of that next line.
>
> **[4:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=276)** Fully justified text creates significant problems for people with dyslexia.
>
> **[4:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=281)** The uneven spaces between words that run all the way down the page create an effect called rivers of white in which these channels of whiteness create an impression of motion that draws attention away from the text itself.
>
> **[4:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=295)** Having content that is easy to read, easy to follow, and supplies all the information needed to understand it will help make every page better for all your users.
>
> **[5:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=305)** Accessible content is a better experience for everybody.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Definitions:** is a  (2), is an  (1), means that (1)
> **CLI Commands:** make (3)
> **Env Vars:** seo (1)
> **UI Navigation:** click on (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Using audio and video](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=0)** - [Instructor] Multimedia content is everywhere on the web.
>
> **[0:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=3)** Podcasts, video blogs, a profusion of animated GIFs, video backgrounds, it's all multimedia.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=11)** The first hint at the accessibility problems with multimedia is right there in the name.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=17)** Multimedia is a resource that's compounded from multiple sensory mediums, mostly audio and video, although there are some haptic experiences with braille readers or device vibrations.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=29)** The tools for making multimedia content accessible are on the surface simpler than those for written content.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=37)** All media content, audio and video, breaks down to two characteristics: Making visual cues audible and making audio content readable.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=48)** Think about the video you are watching right now.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=51)** If you couldn't hear what I'm saying, how would you get the information?
>
> **[0:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=55)** [[LinkedIn]] Learning provides captions, you can enable them in the player right now.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=61)** Captions are one of the most critical parts in making a video accessible.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=66)** Captioning is technically different from subtitles, although in cases like this video, there may not be much difference.
>
> **[1:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=73)** Captions provide a text equivalent of the speech and other sounds in a video.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=78)** Subtitles only provide the spoken text.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=82)** The intent behind captioning is to support viewers who can't hear the speech and also need to be notified about other sounds in the background like a doorbell or other offscreen sounds.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=93)** It's not practical to include every sound.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=96)** A skilled captioner will judge the relevance and importance of each sound as they work.
>
> **[1:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=102)** Subtitles are intended to support viewers who need assistance, perhaps because they're not watching something in a language they know or are in a noisy environment.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=112)** LinkedIn also supports transcripts for these videos.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=116)** If you switch over to the Transcript tab below the video, you'll see what I'm talking about.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=121)** This allows users to search the text of the video and can help users keep track of a larger block of text than you'll see in captions and subtitles.
>
> **[2:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=131)** Another accessibility feature for video is audio description.
>
> **[2:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=135)** Audio description is a separate audio track that is synchronized with your video and provides a description of the visible components of a scene so that people who are blind can fully understand what's going on.
>
> **[2:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=148)** Not every video requires an audio description.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=151)** If a video incorporates slides, but the content of the slides is woven into the speech, then a separate audio description is not required.
>
> **[2:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=160)** If the text uses phrases that depend on visuals that aren't described in the speech, however, then an audio description may be needed.
>
> **[2:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=170)** While audio description is required under WCAG 2.0 at level AA, it is one of the more difficult requirements to meet.
>
> **[2:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=178)** It poses a significant barrier in [[Video Production]] in identifying where it's needed and in implementation on websites.
>
> **[3:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=188)** Most online video players have no support for secondary synchronized audio tracks.
>
> **[3:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=194)** As a result, meeting audio description requirements, usually needs you to produce two separate versions of a video, one with the audio description and one without.
>
> **[3:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=206)** Not every video needs all of these accommodations.
>
> **[3:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=209)** Videos with no spoken text won't require captions.
>
> **[3:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=214)** However, it may still be a good idea to provide a caption file that simply informs the viewer that the video has no text.
>
> **[3:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=221)** Otherwise, the user can't distinguish whether there's been a failure to provide an accessibility accommodation or that it just isn't needed.
>
> **[3:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=231)** Audio is simpler than video.
>
> **[3:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=234)** There's less information to communicate and no need to synchronize descriptions.
>
> **[3:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=239)** You need a transcript that replicates the text spoken within the audio and indicates who speaks each sentence.
>
> **[4:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=246)** This text needs to be marked up appropriately as it's still content like any other on your site, but that's pretty much most of what you need for audio.
>
> **[4:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=255)** The transcript isn't alternative to your audio file, so it should be placed on your site at an equal level of importance to the audio player and not hidden somewhere at the bottom of the page.
>
> **[4:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=267)** There is still one type of multimedia we haven't addressed, background videos and animated GIFs.
>
> **[4:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=273)** The number one concern for these is that users need to be able to stop them.
>
> **[4:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=278)** Any animation that starts automatically and runs for longer than five seconds must be plausible by the user.
>
> **[4:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=286)** Animation can be incredibly distracting for some visitors, wreaking havoc with their ability to focus and complete tasks.
>
> **[4:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=294)** It can make visitors with vestibular disorders, disorders of the inner ear, feel dizzy or nauseated such that they can't even look at your website.
>
> **[5:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=303)** Your CSS animation needs to respect operating system settings that prefer reduced motion, and animations with long durations must include a pause button.
>
> **[5:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=314)** The last step in making audio and video accessible is in the player itself.
>
> **[5:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=320)** The video player needs to follow all of the requirements discussed throughout this course.
>
> **[5:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=324)** The controls need to have accessible labels, they need to be operable from the keyboard or with a screen reader, and they need to clearly report their current state.
>
> **[5:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=333)** There are many different ways to add audio and video and [[WordPress]], and we'll walk through those later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Video Production]] (1), [[WordPress]] (1)
> **Env Vars:** wcag (1), css (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Versions:** 2.0 (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [Organizing content on the page](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=0)** - [Instructor] How do you approach writing content for the web?
>
> **[0:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=3)** When you're writing, do you think about how users with disabilities experience your content?
>
> **[0:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=9)** Most people navigate information using a fairly common set of techniques, scanning over the content to find major topics, looking for lists of details that suggest key information, and finding organized data to absorb.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=24)** Visually, these techniques look for blocks of small text that suggest groupings, lines of large print that suggest headings, groups of items proceeded by bullets or numbers, and information organized like charts or graphs.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=39)** People using non-visual navigation use similar techniques but they don't have these visual cues.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=45)** Instead, they depend on the [[HTML]] markup and navigation mechanisms in their assistive technology.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=52)** As a result, best practices expect both of these to be true.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=57)** If text is a heading, it should be marked up as a heading and it should look like a heading.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=63)** If a panel of data looks like a table, it should be a table element.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=67)** When the visual appearance matches the semantic value of the code, then users get a common experience.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=75)** Content needs to be represented in the HTML in the same order it appears in the code.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=81)** Depending on the underlying HTML, these six panels shown could be ordered as they seem to be, one through six, or they could be ordered 1, 4, 2, 5, and 3, 6.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=94)** If the latter is true, this is a major problem for a user with a screen reader.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=100)** If you're doing tech support and you're trying to answer questions, it's helpful for you and for your user if you can say, find the table labeled prices, then look at the cell in the second row and third column under the heading monthly.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=116)** If the table is marked up correctly, these instructions are accurate for everybody.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=120)** If your design only looks like a table, then those instructions are useless if the person you're trying to help is blind.
>
> **[2:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=129)** When marking up a page, there are many levels of useful HTML markup.
>
> **[2:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=134)** There are large structural pieces like landmark regions and headings, as we've discussed earlier.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=140)** Those large structural elements help people locate the main topic of the page, and find the content they need.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=147)** The internal structure of the page is also important.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=151)** Inside the post content, you might use the six levels of heading elements, which are like an outline format.
>
> **[2:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=158)** In the content of a [[WordPress]] post, every heading you use should descend from the post title.
>
> **[2:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=164)** Ideally, that's an H1, but there are many cases where it could be an H2.
>
> **[2:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=169)** Either is a reasonable choice and you should make your decisions based on what your theme does.
>
> **[2:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=175)** The depth of headings you'll need depends on your content but if the post starts with an H1, then the next subsection should start with an H2.
>
> **[3:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=185)** Headings need to precede other content.
>
> **[3:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=188)** A heading describes a relationship to the content that follows it.
>
> **[3:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=192)** Anything before it is part of the previous heading.
>
> **[3:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=195)** Headings should usually be followed by content that isn't also a heading.
>
> **[3:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=201)** The article card structure is a common format and it can break this expectation.
>
> **[3:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=207)** A card most commonly has an image, [[Metadata]], then a title and maybe some content.
>
> **[3:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=212)** This makes the relationship between the heading and the other information confusing.
>
> **[3:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=217)** The heading is about everything in the card, but it doesn't show up first.
>
> **[3:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=221)** Most types of content have an appropriate element for that content that has a specific meaning in assistive technology.
>
> **[3:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=229)** The p element is a paragraph of simple text.
>
> **[3:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=232)** The ul is a list of data in which the order is not significant, and the ol is a list of data in which the order does matter.
>
> **[4:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=241)** Some elements provide significant navigation bonuses for assistive technology.
>
> **[4:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=247)** Key among these is the table element.
>
> **[4:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=250)** It's possible that at some point in time you've heard that you should avoid using tables on websites but this is a bit of a misrepresentation of the truth.
>
> **[4:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=259)** Tables shouldn't be used just for layout because they are a structure for presenting data.
>
> **[4:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=265)** If data is well presented in a table, then that's the ideal HTML element to use.
>
> **[4:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=270)** Tables give screen readers two navigation features, the ability to move between cells either along a row or up and down columns, and they give them context about position based on the table heading elements used for that column and that row.
>
> **[4:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=288)** This information makes tables an invaluable tool for navigating complex data.
>
> **[4:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=293)** Communicating how items are related is the structural part of HTML that is key to building a meaningful understanding of a document.
>
> **[5:02](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=302)** It allows for correlation between the visual appearance and the oral description of that content.
>
> **[5:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=310)** Overall, you can help keep your content organized if you ensure that it's scannable.
>
> **[5:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=316)** Do this by breaking it up into digestible and relevant sections with headings, by matching the visual design of your data to the most appropriate HTML element, and by checking that your content is in the same order in the code as it appears to be on the page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (7), [[WordPress]] (1), [[Metadata]] (1)
> **Definitions:** is a  (8)
> **Env Vars:** html (7)
> **CLI Commands:** find (3), make (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Accessibility support in the Block Editor](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=0)** - [Instructor] The [[WordPress]] block post editor offers a number of helpful features you can use for better accessibility while rapidly generating complex content.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=11)** One useful feature is the ability to quickly find out problems with color contrast in your choices.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=20)** When you set the text and background color, you'll be prompted when you've chosen a color combination that could be hard for people to read and you'll be informed that you should perhaps change these colors to make a better experience for your users.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=33)** This option doesn't work for all blocks.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=36)** It won't work on complex blocks, only on blocks where color is applied to the entire block at once.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=43)** You can also create useful structures using the block editor.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=48)** One of the structures you can use, of course is the heading.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=52)** By default, WordPress assumes any heading you add is going to be an H2 heading, but you can change this quite easily and should keep that in mind when you know what the structure of your page should be and change it appropriately.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=67)** You can also create lists with a great deal of ease.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=74)** Lists are a great organizational tool for your page that allow users to find out how many items are in this group and easily scan the page.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=84)** WordPress also supports more complex structures like the column layout.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=92)** Columns can sometimes be a problem if they're not structured in a way that the order of the content is consistent, but in WordPress columns running left to right visually will always be top to bottom in mobile devices or for people using a screen reader.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=110)** Adding videos and adding captions is also a very helpful thing you can do in the WordPress editor.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=116)** When you add those captions they will work somewhat inconsistently because one of the tools you have to work with is the native video element.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=126)** When adding videos to your posts in WordPress' block editor it uses the browser's native video element.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=133)** It has mostly good accessibility, but it's not entirely consistent and some things may not work as accessibly as they should depending on the browser your visitor is using.
>
> **[2:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=145)** WordPress has support to add social links, and these social icons have support to customize their labels.
>
> **[2:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=153)** That means that you can use them more than once on a page and they can have a unique label for whoever's social media link this is.
>
> **[2:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=161)** The table block is a useful tool that's available in WordPress.
>
> **[2:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=166)** It's not perfect.
>
> **[2:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=168)** It doesn't have support for row headers, so you can only create simple [[Data Structures]] using it and it's not responsive, so you're not going to have as good of an experience as you might want with this on a mobile device, but it's still a useful tool.
>
> **[3:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=184)** In the block editor, you can also examine the overall structure of your page.
>
> **[3:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=189)** You can see how your content is organized and that'll show you the reading order that a user will encounter using a screen reader when they're trying to navigate.
>
> **[3:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=198)** You can see which column comes first and how the items in that column are organized.
>
> **[3:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=203)** You can also get an outline of your heading structure so you can examine that structure and see quickly whether your headings are appropriate to your content.
>
> **[3:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=213)** Overall, there are many tools built into the WordPress block editor that allow you to create better content and better structures for your users to read.
>
> **[3:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=222)** There are also a lot of tools that integrate with the block editor to further enhance your ability to create accessibility content.
>
> **[3:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=229)** Many of these support both the classic editor and the block editor, but a lot are unique now to the block editor and there are very few new tools being created for classic editing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (9), [[Data Structures]] (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Accessibility support in the Classic Editor](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=0)** - [Host] The [[WordPress]] Classic Editor still exists and it's not likely to go away anytime soon.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=6)** When the Block Editor first released, there were many reasons to continue to use the Classic Editor.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=12)** The Block Editor was buggy, difficult to use and there were very few plug-in integrations available.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=18)** However, that's not true anymore.
>
> **[0:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=21)** From the accessibility standpoint, there's nothing significant that you can do in the Classic Editor that you can't also do in the Block Editor.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=29)** There are a few differences.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=31)** If you upload audio or video in the Classic Editor, it'll be shown on your site using the Media Element JS Video Player.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=39)** This gives a common interface across all platforms that will be consistent.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=43)** The accessibility of this player is pretty strong although it's not perfect.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=48)** When using the Block Editor, the video player used as the native browser video element which can be inconsistent between browsers and has mixed accessibility heavily dependent on platform.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=61)** In the Block Editor, there are a few blocks that are pretty limited like the table block but this is not an advantage for the Classic Editor which requires you to add tables via custom [[HTML]].
>
> **[1:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=72)** You can also add custom HTML in the Block Editor.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=76)** At this point, if you're concerned about creating accessible content, you should probably be using the Block Editor.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=83)** There are sound reasons to continue to use the Classic Editor.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=87)** It's a much simpler experience, and if what you're doing is writing blog posts that are mostly text with a few headings, it's a quicker and easier experience.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=97)** And if you are writing your content using a screen reader, the Block Editor can be a chore to become comfortable with due to its complexity.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=105)** It is usable, but it has a steep learning curve unlike the Classic Editor.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=110)** With a little Knowledge, the Block Editor is a more effective way to create accessible content for the average user.
>
> **[1:57](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=117)** For users of assistive technology, the Classic Editor will continue to offer a simpler, more linear way of managing your content.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[WordPress]] (1)
> **Env Vars:** html (2)
> **Definitions:** is a  (1)
> **Speakers:** - [host] (1)


### 7. Testing for Accessibility

[↑ Back to Table of Contents](#table-of-contents)

#### [Automated and manual testing](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=0)** - [Instructor] If you want to know how accessible your new website is, where would you start?
>
> **[0:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=5)** Is hiring an expensive consultant to test your site, the best first step?
>
> **[0:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=11)** Accessibility testing is a multi-layered process.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=14)** I like to think of it as using four phases, like a design review, some automated testing, testing it manually, using tools, and user testing with various types of assistive technology.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=28)** So where do you start?
>
> **[0:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=29)** What types of testing can you do, by yourself with minimal equipment or time?
>
> **[0:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=35)** A design review is important, but it is limited.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=39)** You can identify problem colors, and you can flag problem areas, and [[Forms]] and buttons or with icons.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=45)** This is something that should happen, before a design is built.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=48)** It helps prevent a host of issues from ever being created.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=52)** Automated testing, either fully automated, or using tools to check a single page, seems like an ideal answer.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=60)** At the press of a button, you get a ton of immediate feedback and it can be great, but as often as not, the results of automated testing require expertise to interpret effectively.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=72)** Otherwise, you might be drowning in data.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=76)** Getting user testing with assistive technology requires expertise, equipment, and paying people with disabilities to perform those tests.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=84)** It can give you great feedback, and it's the only way to get good usability input.
>
> **[1:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=89)** A machine isn't going to tell you, whether something is hard to use, only whether it's impossible.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=96)** But it can also be a waste of resources, if the testing is done at the wrong point in the process.
>
> **[1:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=102)** But there's a middle ground, with a host of useful testing options, like what you get from a free [[WordPress]] plugin, like Equalized Digital's accessibility checker, or using Wave by Web Aim in your toolbar, and the most essential tool of [[Manual Testing]], the keyboard.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=120)** There are significant limitations to any machine testing, any accessibility testing that doesn't involve a human being is fundamentally incomplete.
>
> **[2:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=129)** That machine can't test for all accessibility issues, so why not?
>
> **[2:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=136)** A large percentage of [[Web Accessibility]] guidelines are based on the appropriateness of content, and how it relates to other content.
>
> **[2:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=145)** You can ask yourself these questions on any page.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=147)** Is this label an accurate presentation of the purpose of this input field?
>
> **[2:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=152)** Is that heading telling me the topic of the content that follows it?
>
> **[2:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=156)** Is this alt attribute for this image, a good description of the image?
>
> **[2:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=162)** These tests require interpretation, not just answering what, but why.
>
> **[2:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=168)** A human can easily tell whether two pieces of information relate to each other.
>
> **[2:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=172)** A machine still falls short without some human intervention.
>
> **[2:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=176)** [[Artificial Intelligence (AI)|Artificial intelligence]] works constantly, on that problem, and there are many tools available, that provide alternative text for images, and they are getting better and better, at accurately identifying what is in an image.
>
> **[3:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=190)** But alternative text only sometimes describes what's in the image.
>
> **[3:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=195)** Depending on context, the alternative text should be empty, should describe the page it's linking to, or convey information about a specific person, and AI doesn't always know that.
>
> **[3:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=208)** It's also difficult for machines to test the accessibility of interactions.
>
> **[3:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=214)** Most machine tests don't interact with your site.
>
> **[3:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=217)** They don't press buttons, they don't activate dropdown menus, and they don't fill in form fields.
>
> **[3:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=222)** They're not going to find error messages, to verify these messages are available for assistive technology.
>
> **[3:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=228)** Even with these limitations, using machine testing to get a rapid overview, of some problems is a significant time saver.
>
> **[3:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=235)** These tools can be used quickly, frequently, and they can identify issues for you to fix before they cause a problem.
>
> **[4:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=243)** Once you've done some quick testing with tools, pull out your old faithful keyboard.
>
> **[4:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=248)** One secret that the professionals know, the keyboard is an important piece of assistive technology.
>
> **[4:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=255)** It's the fundamental tool for users with mobility impairments like cerebral palsy, or multiple sclerosis, and it's a key part of how a screen reader interacts with content.
>
> **[4:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=266)** It's also frequently overlooked by developers.
>
> **[4:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=270)** Don't assume that using a keyboard will let you spot every accessibility problem, but you can quickly learn some important information.
>
> **[4:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=279)** Even when you're working with an accessibility professional to get your work tested.
>
> **[4:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=284)** Being able to do some tests for yourself is important.
>
> **[4:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=288)** Checking your work saves money and time, and you may learn something in the process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[WordPress]] (1), [[Manual Testing]] (1), [[Web Accessibility]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1)
> **UI Navigation:** dropdown (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### [Testing accessibility with the keyboard](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=0)** - [Narrator] Have you ever tried using your own website while only using the keyboard?
>
> **[0:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=5)** Using a website without a mouse can help spot many major accessibility errors.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=11)** Automated testing doesn't always have the right tools to find accessibility errors related to the keyboard.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=18)** If we do a quick run of the popular tool WAVE by webAIM on this test site, you'll see that it scores quite well in this testing.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=27)** There are no errors shown.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=30)** But if we test the same site using the keyboard, you'll see a very different picture.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=35)** I'm using a tool that keeps track of what key I'm pressing so you can tell that I'm actually doing something here.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=46)** With the expectation the keyboard focus travels to nearby items.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=51)** Those tab presses should have taken me through this navigation menu but I didn't see anything, yet this site didn't show any clear errors in WAVE.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=63)** Keyboard testing without a screen reader is different from testing with a screen reader.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=69)** When a screen reader is running, it intercepts key presses which can impact whether a custom keyboard controls work correctly.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=76)** There may be conflict between your keyboard shortcuts and the screen reader's shortcuts.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=82)** Important keys for the keyboard include the Tab key, the Shift key, Enter, Space, the Escape key and your Arrow keys.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=93)** Tab and Shift + Tab navigate around the page moving from one focusable element to another.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=100)** Natively, focusable elements include links, buttons, form fields and media elements.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=107)** Basically, anything you're expecting to interact with.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=111)** Any element can be made to receive focus using the attribute tab index equals zero.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=118)** But tab index doesn't make an element interactive.
>
> **[2:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=123)** When you test from the keyboard, you need to be able to demonstrate what is focused.
>
> **[2:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=129)** You need to be able to examine the visual aspect of keyboard navigation.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=133)** Can a user figure out what they're doing?
>
> **[2:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=137)** Focus changes are unlike other changes in that they are undirected.
>
> **[2:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=141)** The user moves away from a focused item to whatever is next in the [[Document Object Model (DOM)|document object model]] as opposed to actively choosing to point at a specific item.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=151)** As a result, the focus state should be strong enough to easily identify.
>
> **[2:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=157)** You also need to be able to demonstrate that you can reach all interactive elements.
>
> **[2:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=162)** Is there a button you can't move focus to?
>
> **[2:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=165)** That's probably because it's not really a button.
>
> **[2:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=168)** [[JavaScript]] can attach event handlers to any element so you can have a click event on a div, but if it's still just a normal div element then the keyboard can't reach it.
>
> **[3:02](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=182)** In addition, you need to be able to tell whether you can operate the control and operate it in the way you would expect to operate it.
>
> **[3:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=191)** Operating a control is where all of our other keys come into play.
>
> **[3:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=195)** When you reach a link you should be able to follow it by using the Enter key.
>
> **[3:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=199)** For a button you should be able to use either Enter or Space and if you use the Space key, you should be able to tab away from the item to prevent that button's event from firing when you release the Spacebar.
>
> **[3:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=210)** When you open a pop-up or a menu that covers content, you should be able to use Escape to close it.
>
> **[3:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=216)** Arrow keys cycle through options in radio button groups and select elements and may be used for other interfaces like tab panels or navigation menus.
>
> **[3:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=225)** So if you can't navigate those using a Tab key, try using the Arrow keys.
>
> **[3:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=231)** All interactive elements need to be available using the keyboard.
>
> **[3:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=235)** They all need to work as expected.
>
> **[3:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=238)** This is one of the reasons that anchors and buttons are not interchangeable.
>
> **[4:02](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=242)** They operate differently and users have different expectations of what they're going to do.
>
> **[4:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=248)** Behavior needs to be predictable on the website.
>
> **[4:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=252)** With this information, you can use the keyboard to test your site.
>
> **[4:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=256)** Pause this video and go to your website or any other site and give it a try now to see what happens.
>
> **[4:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=262)** Share what you found to be most challenging in the Q&A.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Document Object Model (DOM)|Document object model]] (1), [[JavaScript]] (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** wave (2)
> **Code Identifiers:** webaim (1)
> **UI Navigation:** go to (1)
> **Analogies:** picture (1)
> **Speakers:** - [narrator] (1)

#### [Testing accessibility with WAVE by WebAIM](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=0)** - [Instructor] The Wave browser add-on from [webaim.org](https://webaim.org) is a useful quick testing tool.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=6)** It helps you get an overview of many potential issues.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=11)** The tool is available as a browser toolbar, so you can use it on almost any browser.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=17)** When you trigger it, it gives you a panel of many different possible areas of errors.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=22)** It's divided into six groups, errors, alerts, structural elements, contrast errors, features, and ARIA.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=33)** Now, this is showing you a lot of information.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=35)** There are a lot of icons, it can be very complicated to understand what's going on.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=40)** But you can look at the details panel to get a lot of additional detail.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=44)** In the errors panel, you'll get a list of each item throughout the page that Wave has decided might be a possible point of risk.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=53)** Some of these are definite errors.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=55)** In this case, we have eight linked images without alternative text.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=59)** That means those images have no accessible name and that link won't be expressed usefully to a screen reader user.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=67)** But they also show a bunch of alerts.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=71)** These alerts are things that might be problems.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=74)** For example, a skipped heading level.
>
> **[1:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=77)** They're making the assumption that it's possible your heading level is reasonable for your use case.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=85)** It depends on what you're testing.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=87)** Also, there is the concern that heading levels are not strictly required under WCAG, so they're hesitant to describe it as an actual definite error.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=96)** They'll also mention possible headings.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=99)** A possible heading is anything that's large text that could maybe be something that's supposed to be a heading.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=107)** You need to judge these individually and determine whether or not it's an error.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=111)** This is true of all of the alerts that web aim brings forward.
>
> **[1:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=115)** They may be a problem, but they might just be fine.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=120)** There are also a lot of features listed.
>
> **[2:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=123)** Images that have alternative text are considered to be a feature.
>
> **[2:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=128)** Now, having alternative text doesn't mean it's not an error.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=133)** The problem with machine tests of alternative text is all they can verify is that you have alternative text, and that is a requirement and you have met it.
>
> **[2:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=143)** But it's not clear necessarily that that's the best text for this linked image.
>
> **[2:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=149)** They also show you problems you might have in color contrast.
>
> **[2:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=153)** This site doesn't have a lot of color contrast problems, but you can still find them and identify the issue.
>
> **[2:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=159)** It'll tell you what the colors are and what it's found.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=163)** Now, if this text was over a complex background image, this might be more deceptive because it's going to have tested the color contrast against the background color not against the image.
>
> **[2:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=175)** That doesn't mean it's not a problem, you can still have problems if that image doesn't load.
>
> **[3:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=181)** Web aim provides a lot of information.
>
> **[3:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=184)** There are many icons and they're complicated to use.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=187)** However, this information doesn't cover anything to do with keyboard tests, and it may be missing a lot of information, so you have to consider it carefully.
>
> **[3:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=196)** Well a flagged error is almost certainly a legitimate problem.
>
> **[3:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=200)** There are many issues it can't identify or might even flag as accessibility features.
>
> **[3:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=205)** The presence of an accessibility feature doesn't mean an accessible website.
>
> **[3:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=209)** If that feature isn't being used correctly it might make the website worse.
>
> **[3:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=214)** You always have to review the results of an evaluation very carefully.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Env Vars:** aria (1), wcag (1)
> **Definitions:** is a  (2)
> **URLs:** [webaim.org](https://webaim.org) (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Testing accessibility with AXE by Deque](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=0)** - [Instructor] Axe is an open source [[JavaScript]] library for accessibility testing created by the testing company Deque.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=8)** It's available as a browser extension for Chrome and is activated through the browser's inspector.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=15)** The inspector menu is reachable using the right click context menu, and also via keyboard shortcuts, which vary depending on the browser you're actually using.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=26)** In the inspector, you'll then need to select the appropriate tool, which is the Axe Dev Tools.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=32)** By default, Axe prompts you to choose a role.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=36)** It's not particularly important what you choose, but it might help personalize your experience when you choose something that's most like what you're going to do.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=45)** You then also have to accept the terms of service.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=48)** Axe provides many different ways to approach testing.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=53)** It can scan the whole page, it can scan just a part of the page.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=56)** However, that's dependent on having the Pro package.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=61)** It only scans portions of pages if you're using the Pro account.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=66)** With its ability to scan the whole page, it'll present a panel of issues showing all of the automatic issues it's found, how serious they are, and you can turn on and off an option about best practices.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=81)** They distinguish between whether they're testing for things that are actual web Content Accessibility Guidelines criteria or tools that are actually just recommendations and best practices.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=93)** I'm going to turn on the best practices because usually those are good suggestions.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=98)** It didn't have a significant impact on this particular test, and you'll notice that the number of issues brought up is really fairly low, vastly lower than you may have seen in the wave test.
>
> **[1:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=109)** This is because Axe is focused primarily on very, very high confidence issues.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=116)** Issues that they are absolutely certain are a problem on this page.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=121)** Eight of these issues are links that don't have any discernible text.
>
> **[2:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=125)** That's those image links on the page that didn't have any alternative text.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=130)** Axe can be a useful tool, but it doesn't contain a lot of details.
>
> **[2:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=136)** You could see that the Axe Inspector pulled up a very small list of results.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=140)** This isn't really a concern since automated testing is never the final step in any process, but it's only telling you about issues with a very high level of certainty.
>
> **[2:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=150)** It doesn't flag things that aren't clearly wrong.
>
> **[2:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=154)** The issues list is small and it requires a Pro upgrade if you want more thorough testing or testing on more discreet parts of the page.
>
> **[2:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=162)** This does give it a very high level of accuracy, and it's a quick way of clearing out high-certainty problems, but it limits the overall scope of the tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **UI Navigation:** select the (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Using bookmarklets for quick assessments](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=0)** - [Instructor] Do you know the term bookmarklet?
>
> **[0:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=3)** Bookmarklets are super easy to use.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=5)** They're small pieces of [[JavaScript]] that can be run from your browser's bookmarks.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=9)** They can be used to do quick checks for a lot of accessibility characteristics.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=15)** These are all things you can also check by using the browser's inspector, but bookmarklets are faster.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=20)** They give you an overview.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=22)** Instead of inspecting each issue one at a time, you get a quick look at every occurrence on the page.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=30)** One site that collects several simple but useful tools is [accessibilitybookmarklets.org](https://accessibilitybookmarklets.org).
>
> **[0:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=37)** All of these bookmarklets can be activated as a link on the page, or you can drag the link into your bookmarks bar to use it anywhere.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=46)** First, we want to look at the Landmarks Bookmarklet.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=50)** Activating this option highlights each area of the page that's marked as a landmark.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=55)** If you see content on the page that is not wrapped in a landmark region, you've got orphaned content.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=62)** Second, we have the Headings tool.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=65)** This tool will highlight all of the headings on a page so you can get a quick look at which part of the page are headings.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=72)** Next, we have the Lists tool.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=75)** The list highlights every list on the page, this is very handy way of finding out how content is organized.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=81)** Sometimes, lists don't look like lists.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=85)** Next, the Images tool.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=87)** While it's clearly an easy thing to identify whether or not an image is present, it's not always easy to figure out whether it has an alt text and where that accessible name is coming from.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=99)** But you can hover over the tag on each of these outlines and identify what the accessible name is for each of these tools.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=107)** Finally, we have the [[Forms]] tool.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=111)** The Forms tool highlights form-related information on the page.
>
> **[1:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=114)** It tells you about how they're labeled, what is grouped with them, what roles they have.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=121)** When there isn't a form on the page, it'll also notify you that it hasn't found anything of that type.
>
> **[2:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=127)** The important takeaway is that these tools are simple ways to find issues very quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (2), [[JavaScript]] (1)
> **CLI Commands:** find (1)
> **URLs:** [accessibilitybookmarklets.org](https://accessibilitybookmarklets.org) (1)
> **Speakers:** - [instructor] (1)


### 8. Remediation Workshop

[↑ Back to Table of Contents](#table-of-contents)

#### [Finding the issue](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=0)** - [Instructor] Navigation menus are a key global element of any website.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=4)** Being able to navigate is central to using the site so it's a good first test.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=9)** On our demo site, I'll start by exploring the navigation menu.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=13)** While I look at this site, you should think about whether you've seen a menu like this before.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=17)** If you ran the same tests, what would you learn?
>
> **[0:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=22)** Visually, I expect that this menu is going to have dropdown menus and that they'll probably be triggered on hover or possibly by clicking on that button.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=31)** I'll explore this.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=34)** They're not being triggered on hover, so hopefully they're going to happen by clicking on this caret figure, and they are.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=40)** So now I know what type of a menu I have and what I should be looking for.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=46)** Let's see how it works with the keyboard.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=49)** I'm going to turn on a bookmarklet called the key visualizer bookmarklet which will help track what keys I'm pressing as I work.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=58)** Pressing Tab, I can see that there's a clear, visible focus in the theme.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=61)** I can see this on the logo, what happens when I get to the menu?
>
> **[1:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=67)** I should be in the menu right now, but I'm not seeing any visible focus.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=72)** So I don't know what I'm doing, now I appear to have exited the menu.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=76)** I'm on the search that suggests strongly to me that there's no visible focus on the menu, but I don't know for sure what I was looking at.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=83)** So I'm going to enable another bookmarklet called the focus bookmarklet.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=88)** This injects a focus state so that I can tell where I am and what I'm looking at.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=93)** I'll Tab through again.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=97)** Yes, now I know for certain there's a missing focus state.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=101)** What I also know is that this toggle that is used to control the sub-menu isn't receiving focus.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=108)** That suggests that it's not a focusable element.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=110)** Let's inspect it and see what it is.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=118)** In the browser inspector, I can see that this control is a span element.
>
> **[2:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=123)** It doesn't have tab index, so there's been nothing done to make it focusable and it's not a native button or link element.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=130)** So it's not going to be able to ever receive focus as it is.
>
> **[2:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=135)** By doing some testing using basic tools the keyboard, the browsers' inspector tools, and with the aid of some useful bookmarklets, we've discovered a major barrier to keyboard users and to screen reader users.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=147)** Next, we need to figure out what to do about it.

> [!info]- Semantic Content
>
> **UI Navigation:** dropdown (1), in the menu (1), toggle (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Identifying the source of an issue](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=0)** - [Instructor] Having identified an accessibility problem, how do you identify the source of that problem?
>
> **[0:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=7)** Sometimes it's obvious.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=8)** If you have a problem with your contact form, there's a very good chance the problem is in your contact form plugin.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=16)** Navigation menus are usually structured by the core code of [[WordPress]] and displayed by the theme.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=22)** So a good first step is to switch your theme and see what problems still exist in this case.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=28)** Because the core themes are built with accessibility in mind, we'll start by switching to the most recent classic theme 2021.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=40)** When we switch to this theme, what we're going to find out is which types of things are still present in the theme after this change.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=49)** What I can see on looking at this is that there is an odd icon showing up in the navigation menu.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=56)** This is not part of the native theme and it looks pretty strange.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=61)** There is something strange going on here in that the menus are not showing up and these toggles aren't working, but I know that this should be working.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=69)** What that tells me is that the problem isn't in the theme, the problem is in a plugin.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=74)** So there's a plugin that's been modifying how this menu works.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=79)** We're going to go look at the plug-ins on this site and see what we can spot.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=86)** It can be highly variable what you're going to find in the plug-ins.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=90)** Sometimes things are obvious, sometimes they're not.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=94)** In this case, I did create a plug-in to do this so I know what I'm looking for.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=99)** In any case, you'd want to be looking for some kind of a plugin that seemed like it impacted navigation menus or changed something to do with how your website works.
>
> **[1:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=109)** If you can't tell what it is, you may need to disable large quantities of plugins all at once to see what happens.
>
> **[1:57](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=117)** I've deactivated Red30 Fancy Menu.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=120)** Fancy Menu seems a lot like something that might be changing how your navigation works.
>
> **[2:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=125)** So now I'll switch back to the original theme and retest.
>
> **[2:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=137)** Having switched to the original theme, let's tab through this navigation again.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=142)** It looks very similar, but does it work the same way?
>
> **[2:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=147)** Now we have navigation that works from the keyboard, navigating through each item.
>
> **[2:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=153)** We don't appear to still have a control that's separate, that enables us to expand that sub-menu.
>
> **[2:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=159)** So that's apparently what that plug-in was trying to do.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=163)** However, it did it in an inaccessible manner.
>
> **[2:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=166)** So this version is actually better than it was with the plug-in enabled.
>
> **[2:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=171)** What we've learned is that we have a more accessible site if we disable this plug-in that was supposed to be making our site better.
>
> **[2:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=178)** Next, we're going to take a close look at what was wrong with what that plugin did.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (1)
> **CLI Commands:** find (2)
> **UI Navigation:** switch to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [What needs to change?](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980&t=0)** - [Instructor] After completing your testing, it's good to summarize where you are and what needs to happen next.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980&t=6)** The summary is your description of what the problem is and what needs to change to make it accessible.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980&t=12)** Be clear and specific.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980&t=15)** Have you found any problems in your own sites while taking this course?
>
> **[0:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980&t=19)** Try writing down your description of any issues found.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980&t=23)** For sighted users dependent on keyboard navigation, links need a focus state, and this navigation menu didn't provide it.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980&t=31)** This is a CSS problem in which the focus state of the theme is overridden by the plugin.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980&t=37)** If it's not fixed by the plugin author, it can be fixed using custom CSS which can be added in the [[WordPress]] Additional CSS feature.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980&t=47)** For screen reader users, the dropdown menus are not available at all because the sub-menu toggle isn't focusable.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980&t=54)** This is caused by a plugin that's injecting toggles using [[JavaScript]] but isn't creating a keyboard focusable element.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980&t=62)** This should be fixed by changing the JavaScript in the plugin.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980&t=66)** You'll note that I didn't reference any WCAG criteria in these descriptions.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980&t=71)** Specifically, flagging violations of Web Content Accessibility Guidelines is useful when you want to raise awareness of legal risk.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980&t=79)** But your summary is for clarifying the issue.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980&t=82)** Focus on the description of [[User Experience (UX)|user experience]] and next steps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[WordPress]] (1), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** css (3), wcag (1)
> **UI Navigation:** dropdown (1), toggle (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Making the change](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=0)** - [Instructor] Okay, you've identified a problem.
>
> **[0:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=3)** You've found where it came from, and you've come up with a clear description of the problem.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=8)** Now what do you do?
>
> **[0:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=9)** Start with prioritizing.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=11)** What can you fix right now to make this work better?
>
> **[0:15](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=15)** Fixing the focus state is the easiest.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=17)** You can do that immediately by adding custom CSS in the [[WordPress]] customizer Additional CSS option.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=24)** Or if you're not comfortable with custom CSS, you can probably install WP Accessibility and enable the option to add outlines to elements on keyboard focus.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=35)** With the dropdown menus, you need to recognize that they are completely inaccessible right now.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=42)** You can fork the plugin and fix the [[JavaScript]], but this might not be something you can implement right away.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=49)** But your testing discovered that navigation is accessible with the plugin disabled, so your next step is to disable the problem plugin.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=58)** This is easy in this case, because you don't really lose a lot by disabling it, but if we were looking at a critical piece of site functionality, like disabling your entire sales platform, your priorities might need to shift.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=72)** Your site doesn't become more accessible if nobody can use it.
>
> **[1:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=77)** Fixing problems with a plugin or a theme can follow a few different routes, and every case is different.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=84)** To try and help all users of this plugin, my first preference is to contact the author or the vendor and report the issue as a bug.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=93)** If they are responsive, interact with them to follow up with the fixes.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=98)** You may also need to look for alternatives.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=101)** Is there another plugin that does the same thing?
>
> **[1:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=103)** Is there a more accessible theme that meets your needs?
>
> **[1:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=106)** With those resources, do they have accessibility statements or any indicators that the author has paid attention to accessibility?
>
> **[1:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=114)** Maybe they have a demo you can check out before you even install their tool.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=119)** With open source software, you may be able to take the code and create your own plug-in without those accessibility problems, but with large and complex plug-ins, this might not be a feasible option.
>
> **[2:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=132)** Of course, you can always fix it in post-production.
>
> **[2:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=136)** That's basically what an overlay is, and a custom overlay is where you use JavaScript to correct problems after the code runs on your site.
>
> **[2:25](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=145)** This can work, but it's a fragile technique.
>
> **[2:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=148)** When you're holding your site together with string, any change like a plug-in update could break your repairs without fixing the original problem.
>
> **[2:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=157)** The choice you make for fixing more complicated plug-in and theme issues is going to depend on your skillset, your budget, and how much time you have available, but a bug report is always a good starting point.
>
> **[2:50](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=170)** The more developers hear complaints about accessibility problems, the more they will learn and the better the overall WordPress ecosystem will become.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2), [[JavaScript]] (2)
> **Env Vars:** css (3)
> **CLI Commands:** make (2)
> **Prerequisites:** install (2)
> **UI Navigation:** dropdown (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/wordpress-accessibility-22376834/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/next-steps?u=76281980&t=0)** - [Joe] Congratulations.
>
> **[0:01](https://www.linkedin.com/learning/wordpress-accessibility-22376834/next-steps?u=76281980&t=1)** You've absorbed a ton of new information, accessibility concepts, [[WordPress]] tools and techniques, and methods of testing your website for problems.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/next-steps?u=76281980&t=11)** While everything is still fresh, consider writing down your three biggest takeaways.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/next-steps?u=76281980&t=16)** What stood out to you?
>
> **[0:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/next-steps?u=76281980&t=18)** What do you need to do most urgently in the websites you're responsible for?
>
> **[0:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/next-steps?u=76281980&t=22)** Share your thoughts in the Q&A to continue the conversation.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/next-steps?u=76281980&t=26)** For your next steps, think about how you might focus your accessibility knowledge.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/next-steps?u=76281980&t=30)** Do you want to do development or design?
>
> **[0:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/next-steps?u=76281980&t=33)** Or would you rather specialize in accessibility testing?
>
> **[0:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/next-steps?u=76281980&t=36)** I have prepared a resource list for you to download, and you can use that to keep digging in.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/next-steps?u=76281980&t=41)** It includes many of the resources I recommended in the class and some more information you can look at to learn more.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/next-steps?u=76281980&t=47)** I'm also the founder of an annual conference on WordPress accessibility, and you can follow me on [[LinkedIn]] for updates.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-accessibility-22376834/next-steps?u=76281980&t=54)** Thanks for spending your time with WordPress: Accessibility.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-accessibility-22376834/next-steps?u=76281980&t=57)** Keep learning so we can make the world a better place for people with disabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3), [[LinkedIn]] (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [joe] (1)


## Instructor

- [[Joe Dolson]]

## Resources

- Exercise files available

## Skills Covered

- Web Accessibility
- Digital Accessibility
- WordPress

## Path Context

### In [[Getting Started with WordPress]]
← [[Creating Block Patterns in WordPress]] | **7 of 10** | [[JavaScript Essential Training]] →

## Appears In

- [[Getting Started with WordPress]]

## Related Courses

_Courses sharing skills:_

- [[Troubleshoot and Repair Your WordPress Website]] — WordPress
- [[WordPress- Speeding Up Your Site]] — WordPress
- [[WordPress- SEO]] — WordPress
- [[Wordpress Ecommerce]] — WordPress
- [[WordPress- REST API]] — WordPress

---

[↑ Back to top](#)