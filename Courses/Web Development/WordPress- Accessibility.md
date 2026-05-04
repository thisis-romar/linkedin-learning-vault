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
  - '[Getting Started with WordPress](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20with%20WordPress.md)'
prev_courses:
  - '[Creating Block Patterns in WordPress](Creating%20Block%20Patterns%20in%20WordPress.md)'
next_courses:
  - '[JavaScript Essential Training](../Software%20Development/JavaScript%20Essential%20Training.md)'
path_nav: '[{"path":"Getting Started with WordPress","position":7,"total":10,"prev":"Creating Block Patterns in WordPress","next":"JavaScript Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/web-accessibility
  - skill/digital-accessibility
  - skill/wordpress
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-accessible-websites-using-wordpress?u=76281980&t=0)** - [Instructor] Creating an optimal [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) requires attention to accessibility. You don't know what devices or abilities visitors bring to your site. After I access a website for accessibility, I see a lot of frustration from clients when they need to rebuild their work. Too often, accessibility is an afterthought, but it's hard to find and assemble all the different pieces needed for building and testing accessible websites. So that's what I've done for you in this course. You'll learn everything from accessibility concepts to [WordPress](../../Skills/Web%20Development/WordPress.md) tools and techniques to accessibility testing methods. Many of these concepts apply to any website. Let's get started. Learning Accessibility in WordPress.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [WordPress base knowledge](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=0)** - [Instructor] In this course, you'll learn how to create a website that's accessible to people with disabilities, using the [WordPress](../../Skills/Web%20Development/WordPress.md) [Content Management](../../Skills/Web%20Development/Content%20Management.md) system. This course is about WordPress, so you should be comfortable installing WordPress, adding themes and plugins, and be comfortable navigating settings in the WordPress admin. You'll also need a basic understanding of [HTML](../../Skills/Web%20Development/HTML.md) and CSS. If you need a refresher, I do recommend watching [WordPress Essential Training](WordPress%20Essential%20Training.md) and the [HTML Essential Training](HTML%20Essential%20Training.md) before starting this course. While you don't necessarily need to know [JavaScript](../../Skills/Software%20Development/JavaScript.md), a familiarity with what it is and how it's used will be useful. On the accessibility side, there are a few terms I'll use frequently you'll want familiarity with. WCAG, or W-C-A-G, refers to the Web Content Accessibility Guidelines, a standards recommendation published by the World Wide Web Consortium, or W3C. The W3C also sets the standards for CSS and HTML. These guidelines are broken up into a set of success criteria, each identified as being Level A, AA, or AAA. The level of a guideline is one indicator of how widely applicable it is. Meeting guidelines at Level A will generally help the largest numbers of users. At Level AAA, conformance will be relevant to a smaller group of people. These issues may only apply to one type of disability or only to a combination of disabilities. Assistive technology, or AT,
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-base-knowledge?u=76281980&t=94)** is a general term for technology to help people with disabilities. It covers an enormous range of implementations in both [Hardware](../../Topics/Hardware.md) and software. Assistive technology includes screen readers, braille readers, voice control, text [Zoom](../../Skills/Software%20Development/Zoom.md), pointing tools and many other devices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (5), [HTML](../../Skills/Web%20Development/HTML.md) (3), [Content Management](../../Skills/Web%20Development/Content%20Management.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Env Vars:** html (3), css (2), w3c (2), aaa (2), wcag (1)
> **Documentation:** w3c (2)
> **Definitions:** refers to (1), is a  (1)
> **Speakers:** - [instructor] (1)


### 1. What Is Web Accessibility

[↑ Back to Table of Contents](#table-of-contents)

#### [Web accessibility concepts](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=0)** - [Instructor] Let's start by breaking down the concept of [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md) in four principles. Perceivability, operability, understandability, and robustness. These four principles are the foundation of what makes digital content accessible. Write down some notes on these four principles, so you can easily answer the assessment questions that test your knowledge between videos. These concepts were established by the Worldwide Web Consortium or W3C in a document called the Web Content Accessibility Guidelines or WCAG. They describe a set of detailed criteria you can use to test your website content for accessibility. Perceivability is about a user's ability to get information from web content. Perceivable content is content that can be absorbed equally using more than one sense. Images can be described with text, videos are provided with audio descriptions and captions. Because plain text can be interpreted using text to audio software, written text is the foundation element of accessible information. Operability is about interacting with content. A website is operable if every item on the page can be used no matter what device is in use. Any [HTML](../../Skills/Web%20Development/HTML.md) link, button, or input field can be used with a mouse, with a keyboard, using a touchscreen such as a mobile phone or tablet, or with the more limited inputs in a switch system.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/web-accessibility-concepts?u=76281980&t=97)** Understandability is about comprehension. A user may be able to perceive the literal text on your website, but not be able to understand it. A user may fail to understand your content for many reasons. Failure to define the language of the content or provide the definitions of unusual words or abbreviations are a significant problem. Consistency and predictability in navigation, and clarity of labels for input fields, or handling of errors are also important. Robustness is all about future proofing. A website is robust if it works reliably in current and future browsers and with assistive technologies. This mostly requires that the code conforms to defined standards. When writing according to standards, any device that is aware of that standard can display the content. All of these principles work together to help you create documents that give users a fair chance at successfully using your website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** w3c (1), wcag (1), html (1)
> **Documentation:** w3c (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Accessibility and your business](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=0)** - [Instructor] When your website isn't accessible, your denying access to your information, [products](../../Skills/Software%20Development/Microsoft%20Products.md) and services to a large group of users. Building a business website that arbitrarily denies access to members of the world's largest minority group, around one in six people worldwide, has no shortage of downsides. [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md) alone would suggest that denying people access to your platform is the wrong thing to do, but an accessible website isn't just an ethics question. Although creating an accessible website is unquestionably the right thing to do, it's also a legal obligation in many jurisdictions, including most of Europe, parts of Canada and the United States. Failure to provide an accessible experience can expose you to significant legal risk. Under the EU's Directive 2019/882, private sectors, including [E-Commerce](../../Skills/Web%20Development/E-Commerce.md), [Banking](../../Skills/Software%20Development/Banking.md) and E-books, are all required to meet accessibility standards. Member states of the EU were required to establish their own national laws by June 28th, 2022. Enforcement will start on June 28th, 2025. In Canada, the Accessible Canada Act became law on June 21st, 2019. This act seeks to remove accessibility barriers across Canada. It compliments several earlier laws in Canadian provinces. The United States and Australia both have general purpose laws created
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-and-your-business?u=76281980&t=93)** in the early 1990s that require websites be accessible to people with disabilities. In the US, that requirement is found in the Americans with Disabilities Act of 1990, and in Australia it's found in the Disability Discrimination Act of 1992. Neither law specifies a particular standard to conform to, and no regulations have yet been written to elaborate this. However, both laws broadly cover places of public accommodation, and courts in both Australia and the United States have repeatedly demonstrated that these laws apply to websites. Lacking any regulations, your best choice is to work towards conformance with the latest version of WCAG, version 2.1 at level AA. There are many advantages to having an accessible website for your business. Implementing accessibility can set your business apart from others in the same industry. People with disabilities represent a worldwide market of over a billion people with a spending power of greater than $8 trillion. By implementing best practices for website accessibility, you can increase your potential market reach, improve usability for all website visitors and minimize your exposure to legal risk.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **Env Vars:** wcag (1)
> **Versions:** version 2 (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Assistive technology overview](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=0)** - [Instructor] Okay. What's assistive about assistive technology? How does assistive tech help users? And how can you help assistive technology? Write down your thoughts and ideas and revisit them at the end of this course to add more ways you can help. While not every person who depends on accessible websites makes use of additional software or [Hardware](../../Topics/Hardware.md) every accessible web experience is intermediated by some kind of assistive technology. Broadly speaking, assistive technology is any innovation that aids a person in using a computer. Every user depends on technology to interact with computers. Most people make use of the combination of keyboard, mouse and monitor. Keyboards, computer mice and monitors are not in themselves assistive technology in the most traditional sense. However, they illustrate an important concept in website accessibility, that everything on the web depends on the use of hardware and software to interact with it. Assistive technology includes devices designed for many different purposes. Some assistive technology is dedicated to providing alternate methods of input. These include alternative format keyboards, alternative types of pointer devices, and switch input systems. Most of the time, the method of input doesn't really impact the experience with one very important exception, when a website only supports one type of input.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=93)** If a site can only accept mouse or pointer input on any control, then a user who can only use a keyboard cannot use that site. This is one of the most common problems on the web. Most of the assistive technology we'll address in this course has to do with methods of handling website output. People with visual impairments make use of software tools including screen readers which provide oral interpretations of the content of a website or [Zoom](../../Skills/Software%20Development/Zoom.md) interfaces which enlarge the content on the screen for low vision. They may also use features built into their operating system to switch into high contrast mode. People who are deaf or hard of hearing need text equivalence of audio materials. You need to provide transcription or captions for all video or audio. People with mobility impairments may have problems using a mouse for fine pointing actions if they have conditions that affect fine motor control, such as Parkinson's disease or multiple sclerosis. Mobility impairments can also result in difficulty using a keyboard for users who are paraplegic or have no arms, missing fingers, or similar types of impairments. Cognitive impairments can also be compensated for on the web. Cognitive impairments can include dyslexia and related conditions, dyscalculia, dysmapia, Autism and ADHD. These can be the most difficult issues to address as the experiences of each individual
>
> **[3:05](https://www.linkedin.com/learning/wordpress-accessibility-22376834/assistive-technology-overview?u=76281980&t=185)** can be radically different. While people with cognitive impairments may not use assistive technology, they will benefit significantly from design decisions that support their needs. In many cases, these choices will also have benefits for all your users. Most website accessibility issues are a failure to deal with one or more of these situations. Screen reader users need visual elements to communicate what they are and what they do via oral means. Keyboard users need links, controls, and input fields to work with the keyboard. This combination alone is a significant percentage of accessibility issues. Screen reader users are also largely dependent on keyboard navigation. These two groups of errors account for a vast percentage of problems on the web. For all of these users, assistive technology is a means to an end. With a well-built website, assistive technology is how information is communicated between your website and your user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (2), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=0)** - [Instructor] Although [WordPress](../../Skills/Web%20Development/WordPress.md) offers a lot in the way of accessibility, you cannot simply install WordPress, set up a site with any theme, and expect it to be accessible. This is because WordPress isn't a monolithic system. Any website built with WordPress is a collection of many different pieces assembled together. The core of WordPress generates part of the site, but much more of your website will come from your theme, your plugins, and your own choices when adding content. Let's use the analogy that a WordPress website is like a house. In this house, WordPress has set up the framing and the foundation. You've got the bones of a home, but with WordPress alone, you don't have a house, at least not one that is at all usable. When you add a classic theme, it will set up siding and roofing materials, it'll create doors, points where you can access your house, it'll add [Windows](../../Glossary/Service/Windows.md) and that all the ornamental elements that make your house look great from the street. Your content is like what you put in each room, making sure that each room in your house serves a well-defined purpose and has all the pieces of furniture you need to communicate. Plugins are the plumbing and mechanicals of your house, they're the pieces of a website that help with the necessary foundations for your website. Plugins are what transform your house between a home, a home business, a retail store, or an apartment building. With the right choice of plugins,
>
> **[1:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=92)** the purpose of your new building takes shape. Within this analogy, we can start to illustrate how accessibility can go wrong in WordPress. No matter how solid the underlying framing and foundation may be, your theme, plugins, and content can cover up that foundation and create new problems. The theme explicitly provides a set of colors and fonts, these fonts may be difficult to read, the colors chosen might create contrast problems to people who are colorblind have difficulty seeing. While WordPress includes accessible search and comments [Forms](../../Skills/Web%20Development/Forms.md), these can be replaced by the theme, so they may not be correctly labeled and they maybe can't be identified using a screen reader. The [HTML](../../Skills/Web%20Development/HTML.md) of the navigation menu comes from WordPress, but once it's styled by the theme using CSS and [JavaScript](../../Skills/Software%20Development/JavaScript.md), it may no longer be navigable using the keyboard. Plugins can add a whole new interaction experience to your website and WordPress has no control over what that experience might be like. When you install a plugin, you're either changing part of how WordPress normally creates output or you're adding something totally new. Whatever that plugin does and whatever claims it makes, you are responsible for checking. Your content is a mixture of output from WordPress, from plugins, and your own creative decisions. As we'll find in this course, the output created in WordPress, while fully capable of being accessible, needs to be considered with care.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/understanding-accessibility-in-wordpress?u=76281980&t=187)** A WordPress website can absolutely be accessible, but you'll need to become familiar with finding accessible resources, investigating the accessibility of your site, and learning the best and the worst of what WordPress has to offer. What about Full Site Editing? This is something that's rapidly changing with the addition of Full Site Editing in WordPress. If you're using a block theme, this analogy doesn't work quite the same way. I'll examine Full Site Editing in greater detail later in the course. For now, know that with Full Site Editing, WordPress is taking a much greater role in generating the underlying framework of your site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (19), [Windows](../../Glossary/Service/Windows.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Prerequisites:** set up (3), install (2), you'll need (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** html (1), css (1)
> **Definitions:** is a  (2)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [WordPress core features](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=0)** - [Instructor] What do you imagine is the direct impact [WordPress](../../Skills/Web%20Development/WordPress.md) has on the accessibility of your website? The core WordPress software without a theme or plugins only generates a fraction of your site. Knowing which pieces WordPress provides is an important part of assessing problems. In a classic theme environment, there are only a handful of areas where WordPress directly provides output to your site, and many of those are commonly overridden by themes. Since the introduction of the block editor, the ability of WordPress core to impact the accessibility of your site has grown, and in the context of a block theme, WordPress core provides a significant percentage of your site's output. The differences between using a block theme and a classic theme are significant, so they really must be treated separately. Features generated in a classic WordPress theme include your navigation menu [HTML](../../Skills/Web%20Development/HTML.md), your search [Forms](../../Skills/Web%20Development/Forms.md), comment forms, all of the core widgets, archive lists, category dropdowns, recent posts, recent comments, and a calendar of blog posts. They include your images in content, your image galleries, and of course, blocks from the block post editor. Almost all of this content as produced by WordPress core is fairly free of accessibility problems by itself. However, that's because WordPress is almost always producing only the HTML for the output. In general, as long as the HTML output is free of errors
>
> **[1:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=95)** and uses semantically appropriate elements, it will be accessible. But WordPress doesn't add any styles or behavior. When authors add CSS for style and add [JavaScript](../../Skills/Software%20Development/JavaScript.md) to change behaviors, they can introduce all sorts of accessibility problems. It's not that raw HTML is always accessible, just that CSS and JavaScript can create accessibility problems, even if the HTML is great. Structure, design, and behavior each have a role to play in the accessibility puzzle. The WordPress navigation menu is a structured, unordered list with submenus in descendant lists. This is a totally reasonable and understandable navigation structure. However, WordPress doesn't add a nav element to set the menu as a navigation landmark targetable by screen readers. That's up to the theme author, along with the design and dropdown behavior of that menu. The most common problem for search and comment forms is that themes remove labels, either by hiding them using display none, a method that conceals them from all users, or by replacing the forms with their own label-free input fields. The category archive widget breaks a major rule of form design when used as a dropdown widget: don't submit the form on a change event. The widget sends users to a new archive page when they change the value, but when a screen reader or keyboard user navigates a select input using the keyboard,
>
> **[3:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-core-features?u=76281980&t=191)** they can only discover the options by changing them. As a result, you can't use this widget with a keyboard. As soon as you start to explore, you are off on a new adventure. If you use these widgets, be sure to leave the dropdown option disabled. The output of WordPress blocks have been carefully designed to try and avoid errors in output, but there are still some issues to be aware of when creating new content either in the block editor or using the classic editor. Later in the course, I'll address accessibility issues that WordPress can cause when you are offering content in either editor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (14), [HTML](../../Skills/Web%20Development/HTML.md) (5), [Forms](../../Skills/Web%20Development/Forms.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=0)** - [Instructor] With classic themes, your theme choice can make or break the accessibility of your [WordPress](../../Skills/Web%20Development/WordPress.md) website. Almost every piece of accessibility that WordPress core provides can be broken by your theme. So your choices in selecting or developing a theme are crucial in creating an accessible WordPress website. How much thought do you give to theme choice? Do you look carefully at design, layout, and features? Have you thought about the underlying accessibility of that theme? To aid you in this, WordPress has written guidelines for creating accessibility ready WordPress themes. These guidelines provide helpful references, both for creating themes and for testing them. No WordPress theme can guarantee an accessible website. Even in a well-designed theme, you can make choices in theme settings in [Content Creation](../../Skills/Software%20Development/Content%20Creation.md) or in plug-in selection that interfere with the accessibility of the theme. This is why themes are called accessibility-ready. These themes are expected not to create accessibility problems, but they don't guarantee your end product. Any theme tagged with accessibility-ready in the [wordpress.org](https://wordpress.org) theme repository was tested, prior to approval, against a set of 12 accessibility criteria that are fully in the control of the theme. However, later theme updates could cause accessibility regressions. Other theme repositories such as ThemeForest, also provide a selection of themes tagged as accessibility-ready, but there are no requirements
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=93)** in ThemeForest's author submission guide related to accessibility, so it's hard to be sure what that means. An important part of what the WordPress accessibility-ready theme guidelines provide is instructions on how to test a theme for accessibility. With this information, you can check for yourself whether the theme you want to use meets accessibility requirements. The first item is keyboard navigation; whether every item in the theme can be reached from the keyboard with a visible focused indicator. Then there's controls, whether all theme features that behave like buttons or links are constructed using appropriate [HTML](../../Skills/Web%20Development/HTML.md) elements and provide clear indications of what the task is that they perform. Skip links are a requirement, that means there needs to be a means to skip over the navigation of the site to reach the content more quickly. Core WordPress [Forms](../../Skills/Web%20Development/Forms.md) are checked, we will verify whether or not the native WordPress forms are available, and if they've been replaced, that the replacements are also accessible. The structure of your headings is going to be checked. It'll verify that the hierarchy of headings within your theme uses a legitimate organization. We'll also verify ARIA landmark roles. ARIA landmark roles help screen reader navigate around the larger sections of the page and will verify that all parts of the page have been demarcated within a landmark region so that access is available.
>
> **[3:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=190)** We'll also check the content links. These are all of the links that are inside bodies of content, your posts and your pages and make sure that they are always underlined. This isn't required under WCAG; this is something that is a special requirement for WordPress accessibility-ready themes. We'll also verify that common repetitive link text is avoided. This is that, read more or continue reading that you always have on a posts archive page. We'll also check the contrasts of that WordPress theme and make sure that the default color contrast provided by your theme is accessible. Images that are from the theme will be checked and made sure they all have alternative text or support the alternative text that you provide. If the theme incorporates any video or audio or navigable materials like carousels, we will verify that they do not autoplay and that they don't change without any user interaction. Finally, we'll verify that you have a screen reader text class available in the theme that hides text in a manner that's still accessible to screen readers and make sure you don't use any of the disallowed attributes, that's tab index that has a positive value, which will change the order that the keyboard focuses around the page, the use of the access key attribute or target attributes that spawn new tabs. Each of these criteria is tested to benefit various groups of users with disabilities. With all of these criteria followed,
>
> **[4:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-classic-themes?u=76281980&t=282)** your theme should provide a great foundation for an accessible website. Each individual test criteria will be talked about in more detail as we move through the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (12), [Forms](../../Skills/Web%20Development/Forms.md) (2), [Content Creation](../../Skills/Software%20Development/Content%20Creation.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **CLI Commands:** make (5)
> **Env Vars:** aria (2), html (1), wcag (1)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [WordPress full site editing](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=0)** - [Narrator] Full site editing introduces a new paradigm for building [WordPress](../../Skills/Web%20Development/WordPress.md) websites. It's not a completely new concept, it's essentially a tool to manage your site design, a page builder using blocks like Elementor, Beaver Builder or Avada, but without requiring a plugin. If you are using a block-based theme, you'll have access to the whole suite of the site editor and can use it to create menus and customize the design of your site. The biggest change is that WordPress is now adding styles and behaviors for key parts of your website. You build everything on the site with blocks. When I said that WordPress navigation menus are just an unstructured list, well, that's not true with block-based themes they're not just an unstructured list. Now WordPress provides the menu structure, the styles, the behaviors that create dropdown menus, the wrapping navigation landmarks and even handles the menu toggle button for mobile sites. The WordPress core menu implementation has a high level of accessibility, with keyboard accessibility and dropdown menus and mobile navigation and accessible text for icon controls, you can still make choices that reduce the accessibility of the menu like choosing inaccessible color combinations but the overall degree of accessibility will remain high. When building in a block theme, the whole architecture of your site is built in blocks. As with any visual site builder,
>
> **[1:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-full-site-editing?u=76281980&t=97)** your choices are about content, design and layout. In block themes these three topics are the primary considerations. Thankfully, the accessibility of almost all default [HTML](../../Skills/Web%20Development/HTML.md) output is already high. Full site editing or block themes provide another strong foundation along with accessibility ready themes. A block theme doesn't automatically meet the WordPress accessibility expectations, but it can give you a healthy start. The introduction of full site editing has also introduced a new class of hybrid themes. Themes that combine various facets of classic themes with full site editing. Hybrid themes don't add anything new to the mix but they help to bridge gaps in support with classic tools like the customizer while starting to bring some of the tools of the site editing suite into focus. From an accessibility perspective, hybrid themes will be a mix of classic and block theme parts, and should be treated like classic themes because they may work in a wide variety of different ways where a block theme is much more explicit about the accessibility it provides.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (6), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **UI Navigation:** dropdown (2), toggle (1)
> **CLI Commands:** make (1)
> **Env Vars:** html (1)
> **Speakers:** - [narrator] (1)

#### [WordPress plugins](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=0)** - [Instructor] Key components on your site can only be added through [WordPress](../../Skills/Web%20Development/WordPress.md) plugins. What impact do plugins have on the accessibility of your site? If you had to guess, what do you think are the most common features WordPress doesn't provide out of the box? Contact [Forms](../../Skills/Web%20Development/Forms.md), event calendars, [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) features? These are probably among the most high demand services. You'll install most of these features in your website using plugins. Plugins are powerful. They leverage a network of features called hooks in WordPress Core that allow them to manipulate the output of your website. Many plugins add totally new features to your site. Some plugins may alter existing features. They may replace or modify your site's navigation, alter the content of your posts, add image galleries or offer new search tools. If you can imagine it, somebody has probably done it. What does this mean for accessibility? It means that you need to be conscious of what a plugin changes on your site. Looking at one specific type of accessibility, keyboard navigation, your tests of keyboard navigation on your theme may have no impact at all on the accessibility of the features a plugin has added to your site. Your theme might have a perfectly accessible navigation menu, but the calendar plugin you've added has no keyboard support at all to help users find your events. The simplest type of keyboard test is something you can try out right now.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=94)** Using the Tab key to navigate through your site, are you able to tell where you are on the site? Can you reach items in the sub-menus of your navigation? Are there some features you can reach, but others you can't? When we're talking about the ability to reach and activate a tool from the keyboard, that functionality is 100% dependent on the code implemented by the plugin. Whether your theme has this kind of a keyboard accessibility will have no impact on your plugins. If we're talking about the visual focus aspect of accessibility, whether or not a visitor can see on your site where their keyboard is currently focused, that can be relevant to the plugin. Although, it's not guaranteed. The difference is due to what is inherited within a website and what is not. [HTML](../../Skills/Web%20Development/HTML.md) has no inheritance. What the plugin creates has no fundamental relationship to your theme. CSS, however, [cascading style sheets](../../Skills/Web%20Development/Cascading%20Style%20Sheets%20(CSS).md), pass their characteristics to everything on the site. Any CSS included by a plugin can affect everything on the site. So CSS that defines a good focus state in your theme is also applied to plugins, but the plugin can also add its own CSS, which could overwrite the focus accessibility in your theme. Because of this, you can't always know how a plugin will directly impact the accessibility of your site. The WordPress plugin repository doesn't have any equivalent to the theme repositories accessibility ready tag
>
> **[3:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/wordpress-plugins?u=76281980&t=189)** and provides no guidance on identifying accessible services. Because of this, learning how to test features for accessibility is a critical part of building an accessible website for WordPress. We'll cover accessibility testing extensively later on in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (5), [Forms](../../Skills/Web%20Development/Forms.md) (1), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Cascading style sheets](../../Skills/Web%20Development/Cascading%20Style%20Sheets%20(CSS).md) (1)
> **Env Vars:** css (4), html (1)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** find (1)
> **Analogies:** imagine (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Creating accessible content](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=0)** - [Host] Let's assume that you have an accessible theme and all of your site's plug-ins are accessible. Do you have an accessible website? Not necessarily. The root of accessibility is about getting access to your content. As the content creator, what parts of the accessibility of your site are you in direct control of? When you write your site's content, you are taking control of the accessibility of that content, no matter how accessible your theme and plugins are, if you are not writing content with accessibility in mind, it won't really matter. What's the most recent content you've published? Take a look at it and think about it through the lens of accessibility. The abbreviation, WCAG stands for Web Content Accessibility Guidelines. Web Content Accessibility Guidelines and inaccessible navigation menu will prevent users from reaching your content. If your content isn't accessible, there's no reason for anybody to bother. The core editing environment for [WordPress](../../Skills/Web%20Development/WordPress.md) is the Block editor, although you can also use the Classic editor plugin to restore the editing experience prior to WordPress 5.0. Both editors have advantages and disadvantages. There are also many unique plug-ins for creating content within a site builder. This course is primarily about the native experience with WordPress, but will also take a quick look at some popular site building plug-ins
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=94)** you may find yourself using. Accessible content has the same requirements no matter what tool you use to create it but the tools can have a profound impact on your options. They can make it easier to create accessible content and they can also make it impossible. There are a few key concepts for understanding accessibility issues in content, text choices, directions, colors, link text and alignment, structure, lists, headings, tables, languages and pronunciation of those languages, images with their alternative text. Media has captions and transcripts and then there's general writing, clarity and style. Some parts of accessible content are totally independent of your editor. Writing clearly is important anywhere but some items need support from your editor to generate the most accessible code from the decisions you make. WordPress supports almost everything in this list out of the box, although the mechanisms will vary depending on which authoring context you're using. For a few features like setting the language of a piece of text, you can install plug-ins for additional support. With the Block editor's extensive layout tools, creating content is much more than just writing a document. It can include columns, galleries, banner images, videos, all mixed with a variety of layout and color choices. You can create elaborate layouts for your content
>
> **[3:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/creating-accessible-content?u=76281980&t=190)** but remember that the appearance of your page is only the experience that cited users will have. How do screen readers and other assistive technology make sense of your layout? If you included all the necessary alternative text and structured your code effectively, the experience with assistive technology shouldn't leave users stranded. What makes your content accessible is shared between the code that lies behind your content and the decisions you make in writing the text. WordPress gives you a great deal of control over your content but what is the impact of the code created behind it? We'll talk in detail about how to recognize and create accessible content later in the course, you'll learn ways to recognize the importance of using code that reinforces the content displayed whether that content is a design element, a user interface, or written content.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (5)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=0)** - [Instructor] From the beginning of the design process, accessibility should be a focal point. While design is a creative process, design is not the same thing as art. What you create needs to communicate information. Design is the process of creating a [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md), and there are many aspects to design that aren't just visual. Whether your visual design process starts with a mood board, a color palette, an image, or a call to action, you should be thinking about the user experience for all users. There are aspects of accessibility that can't be addressed during design, but many key elements are essential parts of the design process. Your design documentation can cover use of form labels, heading levels, focus and hover states for links and buttons, the use of icons and images, and of course color contrast. Thorough interaction design is key for accessibility. Buttons, links, form fields, and status messages all have different states to address. What is the default appearance? How does it look when it changes? What does this control look like when it has a keyboard focus? Does it look different under the mouse cursor? What does a toggle look like when its control is open versus when it's closed? What do error messages look like and where do they appear? Focus states don't have to look different from hover states,
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=93)** but they do serve different purposes. A hover state is a directed action, where the user controls the cursor to point it at a specific object. The user is already looking at the object and they are expecting a change. A focus state, on the other hand, is undirected. The user moves to this position from somewhere else on the page, which may or may not be close to the new position. The user will need to find the new focus point after it occurs. Because of this, focus states shouldn't just barely meet requirements. They need a bold design. Form labels serve an important purpose both visually and for screen readers. A design should make it clear what text is a label and which field it's for. A placeholder text nested inside the form until you add your own content is not a label. A label should be present both before and after you've filled in the field. Heading levels are expected to follow a hierarchy. Your design can show the organization of the page by indicating what heading text uses. Headings act like a table of contents for screen reader users. Whether you're designing a theme or choosing one, these are all questions you can ask yourself while visually examining the theme. Go to the [WordPress](../../Skills/Web%20Development/WordPress.md) theme repository and pick a popular theme, any theme. Ask yourself these questions while you review it. Can I distinguish which elements are links
>
> **[3:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/examining-accessible-design?u=76281980&t=189)** and which are buttons? When I navigate through this theme with the keyboard, can I easily tell where I am and what I'm doing? What looks like a heading on this page? Is it actually a heading? Does the structure of those headings make sense to me?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (2), cursor (2), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (3)
> **UI Navigation:** toggle (1), go to (1)
> **Speakers:** - [instructor] (1)

#### [Accessible color](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=0)** - [Instructor] Color is fundamental to effective design for many reasons. Color contrast is fundamental to creating an accessible site. How can you make the best choices about color in your design? Color contrast is a major concern for many groups of website visitors. Seven to 12% of men have some form of color vision deficiency. Though colored vision deficiencies are only around one half of 1% of women. Low vision conditions accelerate with age, so 50% of people over the age of 50 have some kind of presbyopia, ranging from a routine need for reading glasses or minor magnification to serious complications from macular degeneration, cataracts, and other eye conditions. The global population is getting older. By 2030, it's expected that one sixth of the world's population will be over 60. If color contrast is too low, your site is posing barriers to users on mobile devices in bright sunlight as well as to users with vision impairments. If color contrast is too high, it can create eye strain or exaggerate the sensitivity some dyslexic users have to extreme brightness. There is no upper boundary in the web Content Accessibility Guidelines for excessive contrast, but in general, avoiding combinations at either end of the acceptable spectrum is a good idea. Extremes of contrast,
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=93)** whether high or low, are rarely the best choice. You can use two colors right next to each other that don't meet contrast guidelines in some cases. What matters is whether a user needs to be able to distinguish between those colors in order to perceive the content. The obvious case where color contrast definitely matters is text over a background. Clearly this is important. A more subtle case is an underline color on a text link. The underline does need to meet color contrast against the background color, just like the text does, but it doesn't also need to meet color contrast guidelines against the neighboring text. This contrast, at 5.27 to one against the background color, meets requirements for contrast. The color of the link doesn't pass against the text, but it has a secondary characteristic, the underline. If, for example, you're using a faint shade of gray to add striping to the rows in a table, the text over the stripe color needs to meet contrast rules, but that stripe color doesn't need to meet contrast guidelines against the other stripes. These stripes are an aid to comprehension. They aren't necessary to comprehension. Distinguishing between a color used to enhance and a color used to communicate is crucial. Color contrast is measured in terms
>
> **[3:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=188)** of the ratio of luminosity between two colors. Luminosity is a measurement that describes how bright or dark a hue is and discards most of the hue information in favor of its degree of intensity. This algorithm helps ensure that colors that are very different, assuming standard color vision, red and green, for example, are recognized as very similar under conditions when those colors aren't distinct. The maximum value is black and white with a ratio of 21 to one. The minimum value is any two identical colors at one to one. WCAG 2.1 requires a minimum ratio of 3.0 to one for large text, any text over a 24 pixel equivalent or 19 pixels in bold, and 4.5 to one for anything smaller. Color contrast tools can help you find the ratio between two colors. All the contrast scenarios I've talked about so far involve only two colors, a foreground and a background. When you add in transparency or background images, the measurement gets more complicated. The essentials are still true. Over a background image, the text should meet contrast guidelines over the majority of the image. If text or backgrounds are partially transparent, most testing tools won't pick these up correctly and only recognize the declared colors without the transparency. Take a moment to look at your website.
>
> **[4:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-color?u=76281980&t=282)** Are there color combinations you find hard to see? Take note of those combinations. We'll talk more about how to test for color contrast later on. Many [WordPress](../../Skills/Web%20Development/WordPress.md) themes have options available to shift your site's color palette. In the block editor, you can easily change the text and background colors for any text, anywhere. Most classic WordPress themes give you either a set of changes that tweak specific colors with little information about where those changes will apply, or a named theme palette with even fewer clues. Full site editing is no different in this respect. Style variations can still introduce all sorts of color contrast problems. The full site editor does have a feature called the Style Book, which allows you to review the design of every block supported by your theme. This is a good way of reviewing and modifying the default color contrast of every element in your site. There is no equivalent in classic themes, so those just require a page by page review. A great color palette tool can show you all of the color combinations resulting from changing one color. When configuring a WordPress theme, colors are one of the most common configuration options that impacts accessibility. When you choose colors for your website, you need to take responsibility for what impact those will have across the entire site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3)
> **Definitions:** is a  (4), is an  (1)
> **Versions:** 5.27 (1), 2.1 (1), 3.0 (1), 4.5 (1)
> **CLI Commands:** find (2), make (1)
> **Analogies:** for example (2), just like (1)
> **Env Vars:** wcag (1)
> **Speakers:** - [instructor] (1)

#### [Accessible navigation](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=0)** - [Narrator] Take a moment to look at your website or a website you like. How does the navigation work? Does it have just a few links or many? Is it a mega menu or just lists of links? Can you navigate through the links from your keyboard? Does the choice of menu type make sense for this content? The first step in building effective, accessible navigation, is to figure out the best menu pattern for your menu, one that matches the content you're navigating. After determining what kind of pattern to use, you need to build it with accessibility in mind. The core of [WordPress](../../Skills/Web%20Development/WordPress.md) Navigation menus is a series of nested lists. This is a great way to organize many menus. It has a clear hierarchy and a logical pattern to introduce drop-down navigation. With no styles or scripting, it's as straight forward as you can get. A list of links with contained lists of links with some added semantics to help understand the structure. That's what most good navigation menus look like when navigated using a screen reader. All of the visual gimmicks you see, animated menus, color changes, and separators between links, are just that, visual. Although this is a good starting point for accessibility, there are a lot of ways a menu can be broken for many groups of users. For screen reader users, for keyboard users, for people with dexterity problems, you name it, there's probably a way to make navigation a problem. The number one most common problem in my years of testing
>
> **[1:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=96)** is a lack of support for keyboard navigation on drop-down menus. Theses appear in two primary ways. Either the sub menus are invisible to the keyboard and are unfindable without a mouse, or the sub menus are hidden visually and don't become visible when they receive focus. In the latter case, a screen reader user won't even know there is a problem. But a visitor who is sighted but can't use a pointing device is going to be extremely frustrated. The problem stems from a failure to consider the focus state of links in the menu and only test for the hover state. When a user navigates with the keyboard, focus states apply to each link as they reach it. If a set of rules are only defined for the hover states and not for these focus states, then people using the keyboard are left out. Apply focus in a menu has some complications. Hover states apply to their child elements. If a hover state is defined for a list item and remember the list contains the sub menu of items as well, and your mouse is over a link that is inside that list item, then the hover state is triggered for the whole thing. But focus is different as the name implies, a focus state is only relevant to the element you are on and not its parents or its descendants. You can't use CSS to effect a focused elements neighbor, like a nested list.
>
> **[3:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=191)** When you construct accessible navigation with sub menus, you can't just copy over your hover styles into the focus style. You need to add scripting so that your hover styles are applied when focus is present on any of the contained links. Now, if you have drop-down menus that can be triggered using either a keyboard or a mouse, you're meeting the standards of accessibility in WCAG 2.0. But the latest version of guidelines is WCAG 2.1 and you're not quite there yet. In WCAG 2.1, that drop-down needs to be dismissible without changing focus. That is, without using the tab key to navigate, and without moving the mouse pointer. Mostly, that means you need to support the escape key to dismiss the menu. Once all that is done, you've got a solid accessible menu for a small to medium website. But the problems start to increase when you add a lot of content. What I have just described requires a user to tab all the way through a menu to find the items inside it. When you have 15 menu items, that's not a big deal. At 30, it's a bit painful. At 90, it's unbearable. For large menus, you want to use a model where the user chooses to open the sub menu. When the navigation item has a sub menu, either insert a button in the list item or make the top level item a button instead of a link. You can then use this to expand the sub menu.
>
> **[4:47](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessible-navigation?u=76281980&t=287)** WordPress Classic themes don't have a native mechanism to create this type of menu. But the WordPress navigation block does, so in the full site editor, there's an option to enable open on click for sub menus. When this is enabled, your top level menu items are transformed into a button that opens sub menus. The last type of navigation menu is the mega menu. WordPress doesn't support this out of the box so implementations can be unpredictable. A mega menu is an extension of the user-directed model I just described. In this type of menu, you expect to have dozens of links at least in every sub menu. The menu panel you open might also have additional semantics like headings used to group sub sections of the menu. Every menu is slightly different, so there's no single best accessible navigation menu. The size and complexity of your site should lead your decision making on navigation implementations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (4)
> **Definitions:** is a  (5), is an  (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** wcag (3), css (1)
> **Versions:** 2.1 (2), 2.0 (1)
> **UI Navigation:** in the menu (1), open the (1)
> **Speakers:** - [narrator] (1)

#### [Perceivable images and icons](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=0)** - [Instructor] First, what is an image? We're not just talking about photos and animated gifs. An image is any non-text graphic icon fonts, SVG elements, background images, and real image elements. All images need some form of alternative text whether to ensure an image is ignored or to show why this image is present on the page and explain its purpose. Alternative text is the text that a screen reader user will get as a substitute for the graphic, and there are many ways of providing that text depending on the type of image you are using. Images fall into one of three groups decorative, content, or functional. When you use an image, you should ask these questions. Why is it here? What is it for? Do you have any decorative images on your site? These are images for visual impact only. They might be stock photography that reinforces content or an icon to enhance the clarity of an existing control, like a magnifying glass that's part of a search button. What images are content images? And image is content if it contributes to the meaning of the text, a chart, a graph, a picture of a specific person or an event. These are clearly part of the content of the page. They are needed to communicate what is shown in the image. What are functional images?
>
> **[1:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=95)** These images do something when the user interacts with them. They're a button with an icon and no additional text. They're an image that links to a post or an icon that shows that a link opens in a new tab. They need to communicate what the control does. Where does this link go, and what does this control open? Images are used to add visual interest to a website design. Icons are used as a substitute for common buttons like search or menu. How are these visual elements shared with users of screen readers? An image can only be decorative if it doesn't contain any text, is not the sole content of a link or a button, and doesn't contribute anything to the meaning of surrounding text. That last question is open to interpretation and that's okay. For many images, you can freely choose whether it contributes to meaning. What's important is that you make a decision about the image. An image that makes your site prettier is fine. Ornaments may not translate well non-visual. If you decide an image is decorative, mark it up, so that screen readers ignore it. Okay, how do you make a screen reader ignore an image? First, background images are always ignored by screen readers, and they should never be used for content or for function. But images that come from image elements, SVG sources or icon fonts need text alternatives.
>
> **[3:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=191)** Any image element with an empty alt attribute is also skipped by screen readers. Any other type of alt attribute will result in feedback from the screen reader, including a missing alt attribute. When ALT is empty, it explicitly says that the best alternative for this image is silence. If the alt attribute is missing, it tells the screen reader that there is no defined alternative for the image. The screen reader has no way to know whether this is important or not, so it is going to communicate something commonly the file name in the source attribute. You can use similar techniques to hide SVGs and icon fonts, though the alt attribute only applies to image elements. Icon fonts are graphics assigned in the private use area of Unicode. They're text characters but they're usually not pronounceable. There's no defined text equivalent of these characters. As a result, an icon font can result in an unpronounceable text character. Most commonly icon fonts are silent but that's not a guarantee. Regardless, they won't be announced in any useful way to the user. You can hide icon fonts by adding aria hidden equals true to the element the icon is appended to. This will hide the element from screen readers. SVG icons can be hidden in the same way. An aria hidden attribute on the SVG markup will conceal it from screen readers.
>
> **[4:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=286)** Everything changes if your image is a content or a functional image. In either of these cases that image needs alternative text that is equivalent information to what a cited user sees. In some cases, this is very clear. An image with text on it needs alternative text that is the same as the text. A button image with submit on it needs alternative text that says Submit. There's no room for exceptions there. On an image element that's added using the Alt attribute. For icon fonts, you can use a screen reader hidden text class that hides the alternative text from cited users. Or you can add an Aria label while also using Aria hidden to hide the icon from screen readers. For an SVG file, accessibility can get complicated. For a simple SVG icon with no interaction, you can reference the SVG file from an image source attribute with an alt attribute. However, this option restricts your ability to manipulate the SVG file using CSS. So this is less commonly done. To allow CSS manipulation, you do need to use an SVG element. Because of limitations in the SVG mapping by the browser, you also need to give it an image role. The title element must be the first child of its SVG parent. Because browser support is inconsistent,
>
> **[6:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/perceivable-images-and-icons?u=76281980&t=380)** you also need to add Aria labeled by and an ID attribute making an explicit connection between the SVG element and its title. For any control, adding an Aria label overrides all other naming information. If you are a [WordPress](../../Skills/Web%20Development/WordPress.md) theme or plugin developer, you are probably using icon fonts or SVG images pretty frequently. When you're creating content, you'll mostly add images to posts and pages within your site. Later on, I'll talk about how to take advantage of features in the WordPress editor to handle alternative text for images as a content creator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2)
> **Env Vars:** svg (13), css (2), alt (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Page architecture and HTML semantics](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=0)** - [Instructor] How do you perceive the organization of a webpage when you look at it? Most sighted people will see separations in content, in how a section of the page will have a different background color or border, in a prominent block of large text, or in a series of brightly colored icons. Using those visual cues, you're learning how to make sense of the document. People who are using assistive technology also need to understand the organization of the page. The power of [cascading style sheets](../../Skills/Web%20Development/Cascading%20Style%20Sheets%20(CSS).md) allows web developers to separate the content and structure of their websites from the instructions that shape it visually. Just disabling the CSS on any website gives you an idea of how that website is structured under the glossy appearance. The separation of visual appearance and meaningful structure is intentional. The document should provide a great experience for all users, so developers are able to create visually stunning works with a structure that communicates clearly. That's the theory anyway. In reality, CSS allows developers to create a visual design that gives the effect they're looking for, regardless of the structure of the code behind it. And while that can sometimes lead to a wonderful experience, it can also result in a div soup where every part of the site is built using an [HTML](../../Skills/Web%20Development/HTML.md) div or span element. Is there something inherently wrong with the div or span elements? No. They're perfectly useful utilitarian building blocks.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=94)** But they don't have any deeper meaning. They should only be added after the necessary semantic elements are in place. Semantics is the study of meaning. In the context of HTML, we are talking about the meaning of each HTML element used to mark up your page. HTML is loaded with semantic value. And all of this plays into providing a good experience for users of assistive technology. The non-visual experience uses the semantic value of an HTML element to get the structural information sighted people get visually. To provide an equal experience, the underlying code needs to accurately reflect the design. The most important structural elements are header, main, nav, aside, and footer. These are commonly referred to as landmark regions because they can be used in a screen reader as landmarks to navigate through. [WordPress](../../Skills/Web%20Development/WordPress.md) Steam developers should be using these larger structural elements to define the large scale structures of the page. The next level of critical semantics is in the six heading levels, H1 through H6. Using just these elements, a user with a screen reader can already navigate around the page pretty easily. Headings work similarly to an outline. H1 should define the principle topic of the page and be the only example of that heading on any page. When an H2 is encountered, that represents a major section of content on the page. Each level further down should be a section of content
>
> **[3:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=190)** relevant to the text of the preceding heading. When you are writing content, you should be making use of headings in the content that are complimentary to the choices made by the developer of your theme, and that means being aware of how your site is structured. Where is the H1 heading on your website? There are some great tools for quickly identifying the heading and landmark structures on your site. One such tool is the HeadingsMap add-on for Firefox and Chrome. This application produces a complete hierarchy of the headings on your site so you can easily spot errors. When a screen reader navigates your site using headings they can jump from heading to heading. They can either jump between headings at a specific level or through each heading individually. You want to use the outline model to structure headings. Too few headings means your content is hard to navigate. Too many makes heading navigation too similar to just reading the content. A useful tool for seeing the boundaries of your landmark regions is the landmark's bookmarklet. At the press of a button, you can see information about how each section of the page is organized. Every landmark region needs to have a name if it's not unique. The main element should always be unique. There should only be one. But you'll frequently have more than one nav element. They can be named using the aria label attribute such as nav aria-label equals main or nav aria-label equals footer.
>
> **[4:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-architecture-and-html-semantics?u=76281980&t=285)** Don't include the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) navigation or menu. Because you are using semantic HTML, the user already knows that. In writing content, you'll make use of a much wider range of semantically useful elements like tables, lists, and text formatting tools. I'll talk about those parts of HTML later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (7), [Cascading style sheets](../../Skills/Web%20Development/Cascading%20Style%20Sheets%20(CSS).md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** html (7), css (2)
> **CLI Commands:** make (2)
> **Cross-References:** later in (1)
> **Tools:** firefox (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Page builders](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=0)** - [Instructor] For most websites, the theme shapes the largest part of the experience for all users. By adding a page builder plugin you can assemble complex layouts without code and make choices that are significantly independent of your theme. The introduction of full site editing into [WordPress](../../Skills/Web%20Development/WordPress.md) brings the concept of a page builder into WordPress Core alongside the many competing plugins that provide this kind of functionality. But do all page builders perform equally? Let's start by looking at how a page builder is different from a standard theme. A page builder works by implementing a large number of component elements. These components might include a navigation element, a site header, a content slider, an accordion or a modal. Each component has a set of options you can use to design the interface and set up your content. So a page builder is basically a plugin, adding functionality to your site on a supercharged scale. Every interface element that comes from the page builder has the same potential set of problems any new interface or layout has. You can assess these components the same way you would any plugin. I start with three basic questions. "Is the default output accessible?" "Does the interface inform me if I make a choice that is not accessible?" And, "Is the interface accessible to people with disabilities?" The last point is only relevant when the people
>
> **[1:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=95)** managing content might be people with disabilities. If your employees cannot do their jobs because your website isn't editable using their assistive technology then you're at high risk of violating their civil rights depending on your area of jurisdiction. The accessibility of editing interfaces, however, could be an entirely separate course and it isn't the primary focus of this one. It's still always a good question to ask when you're selecting your tools for building a website. Let's look at a few common interfaces in a couple of page builders. I'm going to look at Elementor and Kadence Blocks. Kadence is based on Gutenberg, so it's more similar to core full site editing but still uses a lot of its own custom-built components. I'm doing these tests using the free versions of these plugins so you can install them and follow along while I test. In each builder, I'll set up a few simple design elements, an accordion, a simple icon, and a button link, then test the results. This gives us a demo of some basic interactive and content elements. Let's try Elementor first. In Elementor, the first item we're going to look at is the accordion. In Elementor's accordion, you can set an [HTML](../../Skills/Web%20Development/HTML.md) title tag, so the default is a div but you're able to adjust it to a different type of element. Let's see what that is. So we can change it to any of the six heading levels. Now, I would never recommend using an H1 and I don't think that should be there
>
> **[3:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=189)** but changing it to an H2 would be a great setting for internal navigation using a screen reader. Next, we'll look at the icon. Now in Elementor's icon settings, you can clearly see that there's a link field so you're expected to set this icon up as a link to some resource. That means you're probably going to need a way to set the name of this link as well. However, I don't see any method to do that. Under Elementor's attribute section, there is an option to set custom HTML attributes, which could be used to give an accessible name to this icon, but it's only available in Pro. So using the free version, you don't have that available as an option. Now we'll look at the button component. The button component in Elementor is also expected to be a link, which is not surprising. It has a type setting, and using that dropdown you can change it to different color combinations. This is somewhat concerning because each of these color combinations is a quick easy setting, but they also almost all have color contrast problems that are going to violate wicking expectations. Now let's take a look at what this is like on the front end. On the front end, we've set these accordions to have a heading as their title element. Now that means I should be able to navigate them using the screen reader's H key to jump from heading to heading
>
> **[4:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=280)** - [Screen Reader] No next heading.
>
> **[4:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=282)** - [Instructor] Curiously, the screen reader reports that there is no next heading, so I'm going to inspect this item to see why that is. In the browser's inspector, I can look at this heading and what I notice is that it has a role assigned to it of tab. Now that's an Aria role and that means that this is not a heading, it's an H2 element, but that role has been assigned to it and means it no longer has the heading behavior. It will not be recognized as a heading in your screen reader. So while changing to an H2 is actually better overall, the way it's been implemented in Elementor means that it's actually making things not work as well as they would otherwise. Now, let's take a look at that icon. I'm going to use the reading mode in the screen reader to get to it instead of using the tab mode. So I'm going to use the down arrow key.
>
> **[5:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=340)** - [Screen Reader] Link [red30tech.com](https://red30tech.com).
>
> **[5:43](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=343)** - [Instructor] As expected, this did not have an accessible name. What it did read is the link's URL. Now, in this particular case, since I used the URL [red30tech.com](https://red30tech.com), that is a very readable URL so somebody would be able to figure out what that referred to. However, if this had been a link to something much more obscure, maybe to a [Google](../../Glossary/Service/Google.md) document with a long unending string of letters and numbers it would be a lot less clear. Let's take a look at that button. We already know that the contrast is below expectations.
>
> **[6:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=376)** - [Screen Reader] Elementor button button.
>
> **[6:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=378)** - [Instructor] Interestingly, it read it out as "Elementor button button." Now what that tells me immediately is that this link has been given the role of button. Similar to the heading above, by giving it the role of a button it is no longer considered a link. It will potentially still have the functionality you expect of it because this is actually a fairly common mechanism but it is confusing to a user because they're now going to expect this button to commit some kind of a button action, to save something or change something on the page, rather than linking them off to a different source. Now let's take a look at Kadence Blocks. Once again, in our accordion, we have to look around and see what kind of options we have. The Kadence Accordion also has an option in its advanced settings for changing that title tag to an H2. So that's going to be something we'll try here as well and hopefully it'll work better than it did in Elementor. Now we'll take a look at the icon. We can see from the existence of a link field that this icon is also expected to be a link. You also can find that it has a field below it that says, "Title for Accessibility." This is a very intriguing field to have available to you because you really want to be able to provide additional accessibility information. So I have pre-filled that and we'll see how that's exposed on the front end.
>
> **[7:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=472)** Now we'll take a look at the button block.
>
> **[7:56](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=476)** - [Screen Reader] Editor content region block. Advanced buttons document block. Single button document button. Edit multi-line Kadence block button.
>
> **[8:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=487)** - [Instructor] This button is obviously also expected to be a link, so we've added a link to it and we'll see what that does. We're also going to take a look at the advanced settings because this button does have an icon in it and we want to find out whether we can give any kind of a name to that.
>
> **[8:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=504)** - [Screen Reader] Editor settings region clickable advanced tab button.
>
> **[8:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=508)** - [Instructor] In the advanced settings, I can see that there is a field where it says, "Add Aria Label." I've put in some information there for exclamation icon 'cause I'm hoping that this will give me some kind of a name for the icon. That would be very useful if this was an icon only button. As it is I've added text, but there is an option to remove that text and show only the icon, so we need to know what that will do. Having made all of these settings, let's look at what it's done on the front end. So here we are looking at our Kadence Blocks built page and now we're going to try and see whether I can navigate through these individual accordions using the H key.
>
> **[9:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=548)** - [Screen Reader] Main landmark accordion number one button collapsed heading level two.
>
> **[9:13](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=553)** - [Instructor] That's a great result. I was clearly able to get to that first heading.
>
> **[9:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=558)** - [Screen Reader] This is an example button heading level two.
>
> **[9:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=560)** - [Instructor] I can also get to the next one. This is a great sign that I'll be able to navigate this content effectively using my built-in screen reader tools. Now, can I activate this using the keyboard
>
> **[9:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=571)** - [Screen Reader] Expanded. Expanded.
>
> **[9:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=573)** - [Instructor] I can, and it informed me on doing that that it was now an expanded accordion item. So I know what the state of this button is when I reach it. It's going to tell me this is expanded or this is collapsed.
>
> **[9:46](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=586)** - [Screen Reader] Collapsed.
>
> **[9:48](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=588)** - [Instructor] This is a good example of an accessible accordion. It uses buttons, it uses headings that don't have their semantics overwritten and I can use it effectively. Now let's take a look at that icon.
>
> **[9:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=599)** - [Screen Reader] This is another example button heading level two link exclamation icon.
>
> **[10:04](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=604)** - [Instructor] So I didn't hear anything for the icon at all. It jumped me directly to something that said that it was an exclamation mark and it was a link. That means I've gotten all the way to that block button before ever getting to that icon. Now if we construe from that that this icon is intended to be decorative, that's fine. However, I did give it content. I gave it that accessible title but I didn't hear that and I don't know where it is. So let's take a look and see what they've actually done with that information. It looks like that title field has been assigned to the SVG elements title element but there's no ARIA labeled by connection. So this information isn't being communicated from the HTML to the screen reader. This is not truly an accessibility field because it doesn't have all of the attributes required it would make that accessibility information projected to a user. Let's take a look at that button now. Now, when I tried to navigate the page to see the icon we actually heard the announcement of the exclamation icon. However, we shouldn't have heard that in that context. It should have been something that comes after the name of the button. If that had been a label on the icon we would've heard Kadence block button, exclamation icon. We didn't get that information, and that's
>
> **[11:38](https://www.linkedin.com/learning/wordpress-accessibility-22376834/page-builders?u=76281980&t=698)** because this Aria label is being attached to the anchor element itself, the entire button and because of that, the Aria label overrides all of the other content inside this block. The effect of this Aria label is that we actually are losing information for people with disabilities. They will not be able to get all of the text of this link. This could be improved in Kadence Blocks with better communication about what that field represents. So how do you feel about using a page builder? In both the demos there were some good accessibility possibilities available. However, neither Elementor nor Kadence Blocks used the most accessible options by default. Kadence included multiple accessibility specific settings that were either irrelevant or potentially damaging to accessibility with the right knowledge. Both of those tools can create accessible content but they did little to point the user in the right direction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3), [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [Google](../../Glossary/Service/Google.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=0)** - [Instructor] How do the differences between block themes, classic themes and third-party page builders stack up? What is the impact on the accessibility of your final product? Full site editing is effectively a page builder. Using it, you can edit pretty much every aspect of your site, changing colors, spacing, and choosing different types of navigation menus. This isn't something brand new. The option to manipulate every part of your site has long been a part of the page builder experience. Previously, every tool that provided page building tools had a unique interface. For every tool, there was a different path to success. Elementor worked one way, Beaver Builder another, and Avada or Divvy have yet other totally different experiences. However, when you work with a tool like Kadence Blocks the experience is very similar to using native [WordPress](../../Skills/Web%20Development/WordPress.md) site editing because that platform is extending the WordPress editing environment directly. As you've seen before, the accessibility of most page builders is a mixed bag. Some things are more accessible, some are less. The core WordPress experience is not perfect either but creating accessible output is a high priority for the WordPress accessibility and editor teams. The impact of different webpage editors on accessibility isn't a simple answer. I can't say that using a full site editing theme will result in a more accessible website, nor can I say decisively that using Elementor will result in a less accessible website.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=94)** Your own knowledge and decisions influence your outcomes. What I can say is that full site editing is trying to set you up for success and based on my experience in testing this isn't always true of third-party page builder plugins. Block themes don't give the average user the same level of flexibility as a classic theme, but they give you a high level of flexibility without needing development skills like other page builders do. For the average user, using a full site editing theme reduces the risk of major accessibility flaws. Global issues like missing landmark regions, skip links, or inaccessible navigation. It doesn't inherently help with issues like color contrast or distinguishable controls and focus states, though those are usually pretty fixable. Most advanced user interface elements like accordions will require a separate plugin which may not be accessible. Overall, the pros outweigh the cons with full site editing if you are a content creator with some accessibility knowledge but without development skills. If, on the other hand, you're a knowledgeable developer with advanced skills and accessibility, you could accomplish all the same features in a classic theme by implementing them yourself. That gives you more control and empowers you to make the decisions that suit your needs best. If we compare all three options, page builders, block themes, and classic themes across the board, page builders pose the highest risk.
>
> **[3:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/block-themes-vs-classic-themes-vs-page-builders?u=76281980&t=189)** They have improved over the last few years, but they contain many interface components that are simply not designed for accessibility and poor defaults. Classic themes are the most variable. A classic theme with the accessibility-ready tag is probably a good starting point, but almost anything can happen outside of that. Block themes offer a subset of major accessibility components that are built into the underlying structure of the site. This doesn't make them conformant with accessibility standards, but it sets the starting bar at a good minimum.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (4)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 4. Using Accessible WordPress Plugins

[↑ Back to Table of Contents](#table-of-contents)

#### [How to assess plugin accessibility](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=0)** - [Instructor] [WordPress](../../Skills/Web%20Development/WordPress.md) plugins bring us into the funhouse mirror world WordPress. Anything you think you know aout what WordPress does may no longer be true. What about plugins makes this happen, and what is the impact of this change on accessibility? To get a grasp on this issue, you need to know a little about how WordPress plugins work. Think about some plugins you've used in the past. Some of the plugins are features, like contact [Forms](../../Skills/Web%20Development/Forms.md). Others might implement changes to existing features, like implementing an [AJAX](../../Skills/Web%20Development/AJAX.md)-driven live search or adding custom accordion blocks. All of these plugins are taking advantage of the rich network of actions and filters throughout WordPress. This is the method used by plugins to change how WordPress works. An action is where your code performs a task at a particular time in the WordPress code. And a filter is where your code changes output or variables when they are being used by WordPress. Actions and filters can change just about anything in WordPress, and these changes might be improvements or not. Themes can also use actions and filters, although the default themes and themes on [wordpress.org](https://wordpress.org) are limited to design only. Complex commercial themes and page building tools often build extensive plugin-like functionality into the theme. In those cases, each feature you enable in themes settings can be thought of like you're enabling another plugin,
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=93)** and the additional functionality needs testing. Ideally, a theme should be targeted at how your overall page is structured and what it looks like. Plugins should be features that you still want to have even if you change your theme. This is an issue of content portability. You should be able to change your theme without losing critical features or access to content. Plugins often build complex functions, contact forms, shopping carts, calendars, and event management or social media sharing. So, what do most plugins do in the end? Plugins usually create interfaces with form fields, buttons, and content, and they return responses. Interfaces have interactive components: buttons, links, and form fields that create those form's accordions or carousels you're interacting with. These features perform an action, and that action provides feedback to the user, usually via visible notification, but they also need to provide oral feedback and make explicit connections between related events or data. Form fields need to be labeled. Buttons need to be real buttons, not divs or spans with [JavaScript](../../Skills/Software%20Development/JavaScript.md) handlers. Buttons need to have accessible names. Buttons need to communicate their state. Content may have complex layouts requiring strong semantic [HTML](../../Skills/Web%20Development/HTML.md) architecture, like headings. And form responses need to be passed through to assistive technology.
>
> **[3:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=186)** In order for a form response to be accessible, it needs to either receive focus or be announced by the screen reader when it happens. And the error can't be dependent on color to communicate its status. Errors must be explicitly connected to the field that triggered the error so users know what to fix. Let's imagine that you've built a great accessible site with a plain search form that's clearly labeled and provides clear [Semantic Markup](../../Skills/Web%20Development/Semantic%20Markup.md) for the search results. Now you install a plugin that sets up Ajax-driven searching. It adds auto-completion to search results and produces those results live as you type without waiting for the user's form submission. The plugin has changed your form from a text field to an auto-complete. An auto-complete isn't a native HTML input type. You're going to have to test that. Many common auto-complete packages are not accessible. Is the form still properly labeled? Does it still submit the form so you can find the old search results by hitting Submit or pressing Enter, or is it totally dependent on the live search? The plugin has changed how search results are presented. Instead of a page refresh with a set of navigable post headings, that data is output directly in the page where you are as you go. Are these changes being announced to the screen reader so they know the search has results? Can your screen reader navigate the new search results,
>
> **[4:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/how-to-assess-plugin-accessibility?u=76281980&t=280)** using their keyboard? Fundamentally, these guidelines are the same as for any interface. The challenge with plugins is always in identifying what needs to be tested. This is why there's no equivalent of the theme directory's accessibility ready tag for plug-ins. Themes have pretty fixed interfaces. They all do more or less the same thing. Plugins are enormously variable, so testing against even a subset of guidelines is vastly more time-consuming. You need to test your configuration in your environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (10), [Forms](../../Skills/Web%20Development/Forms.md) (2), [AJAX](../../Skills/Web%20Development/AJAX.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=0)** - [Instructor] [AJAX](../../Skills/Web%20Development/AJAX.md) and ARIA are two technologies that are crucial in modern [Web Development](../../Topics/Web%20Development.md). AJAX, or asynchronous [JavaScript](../../Skills/Software%20Development/JavaScript.md) and XML is used to send and receive information without refreshing the page. And ARIA, accessible rich internet applications is used to make sure that screen readers can understand how parts of the page are related and communicate events that happen without refreshing the page. ARIA is a framework for giving screen readers better context in complex interfaces. The entire set of attributes is there to bridge the gap between how native operating system applications work and what [HTML](../../Skills/Web%20Development/HTML.md) can do. ARIA extends the semantics of native HTML elements. The first rule of ARIA is that if you can use a native HTML element or attribute that has the semantics you need, then you should do so. Basically, if you need a button, use a button. But there are some important features that HTML just doesn't include and these are always good use cases for ARIA. But before you choose to use ARIA attributes you should first make sure that you can't accomplish the same goal with standard HTML. An example of misuse of ARIA is in creating a fake checkbox. This example uses ARIA to turn a span into a checkbox set its state, provide an accessible name and uses tab index to make it focusable. This will work in many environments
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=93)** but the exact set of relationships in state can also be set in standard HTML. It's less code and it's more reliable across all environments. But ARIA is great for many tasks. These include setting relationships between HTML elements other than inputs and labels exposing the current state of a control and making announcements of dynamic changes to page content. ARIA is used to translate visual relationships into meaningful information for screen reader users. Let's look at a few ARIA attributes that are among the most important for general use. ARIA expanded, ARIA label and ARIA labeled by ARIA hidden, ARIA described by, and ARIA live. ARIA expanded informs a user whether the content controlled by a button is currently expanded. For any content that is not revealed visibly at all times and is exposed by the click of a button it's valuable for a screen reader to recognize whether that panel is currently visible. If the concealed panel contains a lot of information that a user would have to navigate through knowing that you can save a lot of key presses by closing the panel is great context. ARIA current informs the user that a link refers to the current page or that a step in a process is their current place in that process. In a navigation menu, it lets the user know that this link is the same page you're on. In a calendar it can tell you you're on the current date
>
> **[3:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=188)** and in a multi-step form it can tell you which step is active. ARIA label, ARIA labeled by, and ARIA described by are all ways of providing or extending accessible names for an element. The accessible name is the information in the HTML communicated to the browser and then to the operation system's accessibility API. It's used by screen readers to understand the content. ARIA label takes that name directly. With button aria label equals closed modal It specifically says the name of this item is closed modal. It should be used when an icon is used for visual labeling. The ARIA label will replace all other naming information present. The X in that button will be ignored by screen readers. ARIA labeled by is used to improve names. When the relevant text is present and visible on the page but not in the place where it needs to be read by the screen reader at that time. Like ARIA label, it completely replaces other naming information, but it is useful because it can reference multiple elements which can give users better information. Additionally, because the referenced element is visible content, it will be translated if you're using a tool like [Google](../../Glossary/Service/Google.md)'s Translate feature to try and read the page. This isn't the case with ARIA label. ARIA labeled by is useful for naming regions like an aside landmark
>
> **[4:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=280)** using a visible heading inside the landmark to take advantage of those automated translations. ARIA described by is a way of associating additional information with an object that already has a label. One of the best uses of this attribute is to ensure that form field instructions are read by a screen reader when the field is focused. For example, when providing the format needed to enter date information. It's also used to associate error messages directly with their relevant fields. ARIA live tells screen readers that a region on the page is expected to change without a page refresh. This lets the screen reader know that this region needs to be monitored so that when a change occurs the new information will be promptly read to the screen reader user without requiring them to move focus or browse the page. A screen reader works using the version of the [document object model](../../Skills/Web%20Development/Document%20Object%20Model%20(DOM).md), or DOM that was built when the site first loaded. When AJAX is used to generate a visual notification such as after submitting a contact form, the DOM is changed. Without an ARIA live region designated to receive that update screen readers won't be notified that anything has changed. If the element that's updated has an ARIA live attribute however the new content will be announced as soon as it's populated. The use of AJAX and other dynamically updating content driven by JavaScript in modern development makes ARIA live a critical attribute in many environments.
>
> **[6:16](https://www.linkedin.com/learning/wordpress-accessibility-22376834/aria-ajax-and-other-four-letter-words?u=76281980&t=376)** Any request that updates the DOM without a page refresh requires some kind of notification to ensure that screen readers get any context for what's happening. All of these characteristics will come into play as we dive into an example showing the differences between AJAX with ARIA and without.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (8), [AJAX](../../Skills/Web%20Development/AJAX.md) (5), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Web Development](../../Topics/Web%20Development.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** aria (35), html (8), ajax (5), dom (3), xml (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), refers to (1)
> **UI Navigation:** checkbox (2)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Interacting with forms and their responses](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=0)** - [Instructor] To demonstrate the use of Aria and [AJAX](../../Skills/Web%20Development/AJAX.md), I'm going to run three similar demos. First, a test using the default non-Ajax version of the [WordPress](../../Skills/Web%20Development/WordPress.md) comment form. Second, a test using Ajax but without any considerations for accessibility. And last, another test with accessible AJAX notifications put in place. First, we're going to start with this standard comment form and I'm going to submit the form and trigger an error.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=35)** - [Automated Voice] Main landmark, name star, email star, website, edit, save post comment button, comments of mission failure, error. Please fill the required fields link double left-pointing angle bracket back.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=51)** - [Instructor] So this is what WordPress does by default, you're going to land on a whole new page. You'll get this message read to you and then you'll be told to go back. You'll notice that it read that doubled-angled pointing brackets as part of the link, and that's something that's not terribly helpful, although it's not going to cause any serious problems. On going back, you landed back on the page now because you went to a new page and you went back and forth, the location, your focus is going to land is really controlled by the browser. It's going to be part of how your browser remembers where you were. So this may or may not leave you in a useful location, but in this case, using Chrome with the NVDA screen reader it has. So it's fairly clear and it's pretty straightforward. We know what we've got out of this. We're able to navigate the form. Now, let's see what happens when we jump over to a version that has AJAX which makes it smoother for most users but might cause us some problems. In this form, I'm going to do the same thing. I'm going to submit the form and try and create an error. Let's listen to what the screen reader does.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=120)** - [Automated Voice] Main landmark, name star, email star, website, edit. Save my N post comment button.
>
> **[2:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=127)** - [Instructor] So for those of us who can see, we saw a bunch of errors show up. We were notified visibly that there are errors in submitting this comment, that we need to complete those fields. And which field was noted is the email field and it has a prominent error associated with it. Let's see if I can find that information. My focus hasn't changed, which is great so I'm going to find it by going backwards.
>
> **[2:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=154)** - [Automated Voice] Save my name. Website edit, email star, edit required. Your email address will not be published...blank.
>
> **[2:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=162)** - [Instructor] So it also didn't read us the error on this field. I can tell it's blank, and because I know it's required and that's part of the standard WordPress form I can intuit that this is probably a problem but I wasn't actually notified that there was an error. I don't even know that my comment wasn't submitted. All I know is I pressed a button and I heard no response at all. This is a terrible experience for a user because you have no idea whether anything has happened and there's a lot of exploration required to figure out whether this was successful, whether it was a failure, and if it was a failure, what you need to do next. Now, let's take a look at the version where AJAX has been implemented but with accessibility in mind. Once again, I'm going to do this same test.
>
> **[3:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=209)** - [Automated Voice] Main landmark, names, emails, website save post comment button. There were errors in submitting your comment. Complete the missing fields and try again.
>
> **[3:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=220)** - [Instructor] Now, on attempting to post this comment, I was immediately notified that there were errors in submitting your comment. If this was a fully fleshed plugin, it would also tell me which error was happening in which field. Although for a form as simple as a comment form with only four fields to fill out, it is not very difficult to discover. Again, my focus hasn't changed. I'm at the end of the form. This is fine. Moving your focus to the top can work but it also might mean that that error gets read twice if it's both an Aria live field and it's also the place where your focus gets landed. Let's navigate back to that email field and see whether we hear about this error.
>
> **[4:23](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=263)** - [Automated Voice] Save my website, email star edit. Required error email is a required field.
>
> **[4:29](https://www.linkedin.com/learning/wordpress-accessibility-22376834/interacting-with-forms-and-their-responses?u=76281980&t=269)** - [Instructor] In this case, the email notification was read out as a required field, and this is great information. You're clearly told where the error is and what happened. In summary, AJAX can be very useful. It allows you to quickly submit a form and get immediate feedback without having to go to a new page. However, if accessibility hasn't been taken into account, it can be a completely disenfranchising experience for a user with a disability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [AJAX](../../Skills/Web%20Development/AJAX.md) (7), [WordPress](../../Skills/Web%20Development/WordPress.md) (3)
> **Speakers:** - [instructor] (6), - [automated (5)
> **Env Vars:** ajax (4), nvda (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Prerequisites:** required to (1)

#### [Authoring tools and accessibility guidelines](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=0)** - [Instructor] Do you have anybody working on your site who has a disability? If you hired somebody with a disability, do you know whether they would be able to make edits to your website? One of the most invisible discriminatory practices against people with disabilities is to require tools that aren't accessible. Needing to use assistive technology doesn't inherently stop somebody from doing work on a website. The tools required, however, may pose a major barrier. The Authoring Tool Accessibility Guidelines, or ATAG, are closely related to WCAG. Rather than being focused on content, they're focused on the process of creating content. They are guidelines for checking whether a tool for creating content is usable by people with disabilities, and also whether it supports creating content that is consumable by people with disabilities. Most day-to-day web editing tasks require many different parts, [WordPress](../../Skills/Web%20Development/WordPress.md) core features and multiple required plug-ins for content and [Data Management](../../Skills/Software%20Development/Data%20Management.md). What do you do if a mission-critical part of the admin isn't accessible to your employees? Take a moment to think about the administration of your own website if you have one. What are the most critical tasks you need to do? When it's time to test the accessibility of tasks you're going to hire people to do, a good starting point is to identify that employee's workflow. What does your employee need to do
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=94)** in order to fulfill their role? For a demonstration, I'm going to hypothesize that you've hired an events manager for your independent cinema. You've got a graphic designer that makes images to use, but the person managing the website is blind. In this demo, we're using a combination of several popular plug-ins to put together a complex event listing site. When your employee adds a new film, they need to be able to do these several steps. First and foremost, obviously they need to add a title for the event.
>
> **[2:11](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=131)** - [Computer] Edit multi-line blank.
>
> **[2:14](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=134)** - [Instructor] They're also going to need to be able to add a description. Both of these are fairly straightforward because this is part of WordPress core and WordPress has made this fairly accessible. The next thing they need to do is add a title slide.
>
> **[2:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=153)** - [Computer] Clickable move up button. Move publish button. Move up button. Add button.
>
> **[2:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=161)** - [Instructor] This is one of the flaws that you're seeing with the Classic Editor in WordPress. The fields aren't always in the order you might expect them to be. To save time, I'm going to jump over to the slide section.
>
> **[2:57](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=177)** - [Computer] Clickable add slide link.
>
> **[2:59](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=179)** - [Instructor] Now we're ready to add a slide. This is a clickable surface. It didn't announce that it was a button, so I'm not totally sure what it's going to do. But I'm going to try to activate it with the Enter key. I can see visually that it's prompted me for an image or a video. It didn't tell me it's done anything, however, so I really don't know what's going on. Let's see if I can explore and try and find something more. I'll start with the Tab key.
>
> **[3:24](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=204)** - [Computer] Toggle panel. Film slideshow button expanded.
>
> **[3:27](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=207)** - [Instructor] That's left to the panel. What about going forward?
>
> **[3:30](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=210)** - [Computer] Clickable add slide link. Move up button move the events calendar box up.
>
> **[3:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=216)** - [Instructor] That's gone into the next meta box. So I'm not finding any controls. Nothing that's going to make it possible for me to add this slide. That's our first barrier. We've got a problem with adding that image. Next, we need to set the start and end dates for these events.
>
> **[3:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=232)** - [Computer] Move down... Toggle table. Row 2 column 1. Table 3/29/2023, 8:00 AM to 5:00 PM. 3/29/20. This event is add New event Red30 Tech Cinema WordPress document blank.
>
> **[4:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=249)** - [Instructor] So in the time and date section, first of all, our initial focus was a little strange, but let's try navigating through these start and end times.
>
> **[4:18](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=258)** - [Computer] Move up button, click top table, toggle panel, edit selected 3/29/2023. Edit selected 5:00 PM. Edit selected 3/29/2023.
>
> **[4:35](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=275)** - [Instructor] So if you're listening carefully to what's being announced on these two fields, there's no label being provided. I am not getting any idea of what these fields are for. I do, however, have a time and a date field. If I couldn't see the fact that this is actually the end time fields, I could very well think that these were the start time fields and I would, therefore, be entering the wrong information and it's in fact rather difficult to get to those start and end fields. I'm not finding those, using normal keyboard transitions, using the Tab and Shift + Tab to find where I am. It's not clear to me where in the tab order those other fields are. Let's move forward and look at adding tickets.
>
> **[5:22](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=322)** - [Computer] Add new event Red30 Tech Cinema WordPress document blank. This is the name. Main Landmark add new event Red30 Tech Cinema WordPress document blank.
>
> **[5:32](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=332)** - [Instructor] Here we are, ready to add a new ticket.
>
> **[5:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=336)** - [Computer] Main landmark Type edit blank.
>
> **[5:40](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=340)** - [Instructor] I can also see visually here that there's some additional description for this field that isn't being reported to me. That's not properly connected with the field.
>
> **[5:49](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=349)** - [Computer] Description. Edit multi-line blank. Show description on front end ticket form. Start sale, edit blank.
>
> **[5:58](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=358)** - [Instructor] I do want to be able to start a sale. I'm assuming that this is going to be a date field, though it hasn't given me any default values, so I don't really know. I'll see what I can do. Because I haven't been notified of any kind of an automated way of completing this date field, though you can clearly see that there's a calendar popup, I'm just going to try and type something in.
>
> **[6:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=380)** - [Computer] 04/15/33.
>
> **[6:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=386)** - [Instructor] It seems to have worked, so I'm moving on.
>
> **[6:28](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=388)** - [Computer] Ticket start date, edit blank.
>
> **[6:31](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=391)** - [Instructor] So what I can see is that this is a time field, but what I've actually been told is that it's the ticket start date. So now I'm confused because this is... Is this a date field or is this a time field? Visually, I know it's a time field, but if all I had to go on was what I had heard, I wouldn't be able to tell that. Let's keep going.
>
> **[6:52](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=412)** - [Computer] End sale ticket end date price. Edit blank. Capacity, grouping, capacity. Radio button, checked one of three.
>
> **[7:03](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=423)** - [Instructor] I certainly do want to be able to set the capacity. Though, I can clearly tell that the label I see for this capacity field has nothing in common with what I heard. What are the other options? I'll use the arrow keys to jump between the different radio buttons.
>
> **[7:20](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=440)** - [Computer] Capacity, capacity, capacity. Radio button, check two of three.
>
> **[7:26](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=446)** - [Instructor] Even if you say capacity three times, it's not going to help me understand what I'm supposed to do here. What about the other option?
>
> **[7:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=453)** - [Computer] Capacity. Unlimited capacity. Capacity. Radio button, check three of three.
>
> **[7:39](https://www.linkedin.com/learning/wordpress-accessibility-22376834/authoring-tools-and-accessibility-guidelines?u=76281980&t=459)** - [Instructor] This actually did tell me some information, but as an expert in accessibility, what it's telling me is that these labels are not put together appropriately and they don't share all of the information you actually need to be able to use this interface. As you can see, many of those steps were readily accomplished using a screen reader in the classic editing view, however, there were quite a few that were causing problems and they aren't better in the block editor. They're all coming from plug-ins. These tasks are difficult to complete, using very popular and widely used tools, evidence that you can't assume popular tools are accessible. Although accessibility is continuously improving in many plug-ins, the default state is still far from meeting standards, let alone providing an enjoyable experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (7), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=0)** - [Instructor] There are a lot of commercial accessibility testing tools available, and you can do your testing using any of them successfully, but there can be advantages to using tools specifically designed for use with [WordPress](../../Skills/Web%20Development/WordPress.md). There are only a few plugins that integrate with WordPress to provide accessibility feedback. Each uses a significantly different approach, and not every workflow will work for your needs. First, we'll look at Accessibility Checker by Equalize Digital. Equalize Digital is a WordPress agency specializing in accessibility, and this plugin is available in both a free version and a premium version with more extensive features. Equalize Digital's product is mostly going to be shown in the backend of your website. In the backend, what they show is a panel where you have all of your errors. At the footer of your editing page, they show a summary, a set of details, and some feedback on the readability of your page. It'll give you immediate feedback when you make changes and update your page, so it can be very useful for quickly detecting the problems you might have. In the details, each error is explicitly described and you can get more feedback about it. In this case, it's telling you there's a missing table header. Now what I know is really the problem here is that there's a table present, but it's the same fundamental problem. Any table that doesn't have a header is really only being used presentationally
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=94)** because it doesn't have any heading information to provide that structure. This will disclose to you the different types of errors found in your website. It also does do readability testing, so it's going to look at your general reading grade level and suggest to you whether you might want to add some additional information. In the Pro version, it also does extensive reporting and provides you with a detailed examination of your entire site, as well as other features in development. A somewhat similar tool is WP ADA Compliance Check plugin by Alumni Online Web Services, LLC. like Accessibility Checker, this plugin also has a free plugin with a premium version available. Unlike Accessibility Checker, this plugin is primarily focused on reporting. It's also limited in the free version, and it doesn't include tests for all of the things that it's able to do. I consider this to be somewhat of a problem in any plugin, the fact that it doesn't actually provide all of the tests it's able to do if you're not paying them. The reporting is also a valuable feature, but for me it's more critical that all of the tests are present. It can do a scan of your entire site, but in the free version, it only does a subset of your pages. Once you've run a scan, it gives you a table
>
> **[3:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=188)** that shows you all of the errors it has detected on your website. It's a little harder to use because it's not integrated directly into your content as you edit, but it does give you a lot of detail and a lot of data. It allows you to ignore a particular issue, recheck it, edit the changes, or view where it's happening. This can also be a useful plugin for users to do testing on their website. A third tool to take a look at is Sa11y, or S-A-11-Y. It's a simpler tool than either Accessibility Checker or the WP ADA compliance Check, but it can still be useful for a lot of reasons. Unlike the other two tools, which are primarily focused on the backend of your site, and doing scanning of your content from that perspective, this is a frontend tool that only looks at your site from the front end. It shows up as an icon in the bottom right corner. When you activate it, it'll highlight a set of errors that it's found on your page, and give you some tools for navigating through it. Now, it has a smaller set of tests than either of the other two plugins, 'cause it is entirely based on [JavaScript](../../Skills/Software%20Development/JavaScript.md), where the other two plugins are also doing [PHP](../../Skills/Software%20Development/PHP.md)-based analysis of the code and content of your page. However, it is going to be rendering exactly what it sees. So in terms of testing the total [document object model](../../Skills/Web%20Development/Document%20Object%20Model%20(DOM).md), it's a good tool to examine all of that information. By clicking the Error button.
>
> **[4:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-tools-for-wordpress?u=76281980&t=282)** you can jump from one item to the next throughout the page. it'll indicate problems and it will also flag things that it knows are well done, even though the very presence of alt text in an image does not mean that it's actually accessible it only means that the alt text is present. The big advantage to testing tools integrated into WordPress is that your testing is simultaneous with [Content Creation](../../Skills/Software%20Development/Content%20Creation.md). The earlier you know about an accessibility issue, the better. You should try each of these plugins and see what works best for you. Schedule yourself some time to install each tool and play around. You might find that one of them is the perfect match for your accessibility experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Document object model](../../Skills/Web%20Development/Document%20Object%20Model%20(DOM).md) (1), [Content Creation](../../Skills/Software%20Development/Content%20Creation.md) (1)
> **Env Vars:** ada (2), llc (1), php (1)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** make (1), php (1), find (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Accessibility overlays](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=0)** - [Instructor] Have you ever been browsing around the web and encountered buttons on a website that have some kind of accessibility symbol on them? That's a common way of displaying the most visible accessibility overlay, the accessibility toolbar. These toolbars usually contain a wide variety of options, font size changes, color contrast, enabling focus states and more, that, in theory, improve the accessibility of the site you're using. Another aspect of overlays is in accessibility automation, running a script that analyzes your website, finds errors, and fixes them automatically. Both aspects work in the same way. The difference is whether a set of features are implemented automatically or only when enabled by a user. Pretty much all plugins that implement either aspect tend to do both. They try to fix some issues automatically, and others only get changed when a toolbar option is enabled. Usually, the distinction is between fixes that have no impact on the site appearance and those that do. On the surface, this sounds fabulous. Who wouldn't want to install a plugin that just magically fixes all the accessibility problems on your site? Unfortunately, that's really not what's happening. A high percentage of accessibility plugins in the [WordPress](../../Skills/Web%20Development/WordPress.md) plugin repository are overlays. Most of those don't include any significant code, only the code necessary to include their script that comes from the service that owns the plugin.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=94)** All the real work is done by the script. Even assuming that an accessibility overlay fixes your accessibility problems, having that script sourced remotely creates its own problems. It creates [Privacy Issues](../../Skills/Database%20Management/Privacy%20Issues.md). The script may fail to function if there's a network interruption or a service outage. And it may not work if remote scripts are blocked, like they could be behind a corporate firewall. What is the value of an accessibility fix that only works when the service is up? What happens if you pay a service to address your accessibility issues and then they shut down their service and you lose everything? The risk that the accessibility overlay won't work is actually one of the smaller problems, however. Many accessibility overlays simply don't work. They make a host of assumptions about how to fix a website that may just be wrong. But let's imagine that you've found an accessibility overlay that is able to fix everything it finds with perfect accessibility. Pretty amazing, right? Except that automation is still only able to reliably identify around 30% of accessibility issues. One great example is form labels. Automation can easily identify that a form doesn't have a label. But can automation decide what the label should be? Screen reader users can already explore the page to find any neighboring text that might help them out. So what is automation going to do
>
> **[3:06](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=186)** that will be better than that? Some of the features that do work reliably, like high-contrast mode or increasing font sizes, are 100% duplicating functionality that already exists natively in browsers, in operating systems, or in assistive technology. These features may be occasionally useful, but in reality, most users who need them need them all the time on every website, not just on yours. What about using an overlay as a temporary fix, putting a BAND-AID in to mitigate risk while you get your website fixed professionally? First, you need to be abundantly aware that an accessibility overlay does not mitigate risk. It might be able to reduce the number of problems on your site, but that doesn't mitigate your risk of a lawsuit. Second, you should be aware that some overlays can actually make users' experiences worse. By attempting to automatically come up with solutions, overlays can make the wrong decision. They can change a difficult-to-use site into an impossible-to-use site. And it's not that the site was accessible before. It's that these changes are bad decisions. They may change the way the keyboard works on buttons, or they may apply a new label that doesn't match the function of this button. A big warning sign that you should run away from an overlay is if it makes the claim that it will allow you to meet ADA compliance or meet WCAG standards
>
> **[4:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-overlays?u=76281980&t=282)** with some certainty. No plugin can guarantee that using automation. You can't solve accessibility automatically. It requires time, it requires research, and it requires work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [Privacy Issues](../../Skills/Database%20Management/Privacy%20Issues.md) (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** band (1), aid (1), ada (1), wcag (1)
> **Warnings:** be aware (1), warning (1)
> **Analogies:** imagine (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Accessibility add-ons](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=0)** - [Instructor] Accessibility plug-ins aren't always about fixing your site or about doing testing. The major other category of accessibility plug-ins are accessibility solutions. They help you create a more accessible experience for your users. There are a lot of great tools available and I can't review them all, but I will go through a handful of key plug-ins and how they can help you. First, let's look at a plug-in called Screen Reader Text Format. This plug-in gives you an option to specify text that will only be available to screen readers. It's available as an option in your block editor and when you select the item that includes it, it'll make it visible to you, but the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the time, it's seen the way people who visit your website will see it. Links need to have sufficient context for a screen reader user to know where it goes. It may be best practice to use text that is visible, but the reality is that developers and content creators often work with designs and style guides that specifies something else like read more. This tool is available inside your toolbar for the block and you can select Screen Reader Only to make something only available to that group. Another useful tool is the laying attribute for the block editor plugin. When text is in a language that isn't the main language of your website, it can have pronunciation problems for a screen reader. Screen readers take their pronunciation cues
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=94)** from the language defined for the whole site and that's set in your [WordPress](../../Skills/Web%20Development/WordPress.md) settings. But when you quote a French author in their original language, a screen reader expecting English may end up tricky to understand. Using this plug-in, you can set the laying attribute to an appropriate value for that text. This will enable screen readers to switch pronunciation when it's needed. There are also plug-ins that include multiple tools in one. Using the plug-in WP Accessibility, you can get a flag for missing alt attributes and videos without captions. This image has alternative text assigned, so there's no flag, but if this was gone, it will specifically outline that image in a bold red outline and give a flag that says that the alt text is missing. This can be a great way of quickly spotting what you've missed on your page. The same thing can be done with video files. This video doesn't have any captions or subtitles, so in order to change that, we can go to the text tracks and upload our VTT file. That gives us a new set of captions that will be used with this file. That may not be a real language, since I just wrote Pekinese. But as you can see, as soon as I have selected the text track, that outline goes away and we know that this item has a set of captions. Additionally, WP Accessibility can add information
>
> **[3:12](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-add-ons?u=76281980&t=192)** to your media library so you can find out that there are images that do or don't have alt text already assigned. This can be helpful, but it only really identifies part of the problem. Alt text missing in the media library doesn't mean this image is missing alt text in its post content and having alt text in the media library doesn't mean it has alt text in the post, 'cause all of these can be edited in context. Fixing missing text in the library is useful because that will make it available for a future use of the image. These kinds of plug-ins are useful no matter how accessible your website is because they give you tools that will help you create more accessible content.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=0)** - [Instructor] Do you write content for any websites? Do you help clients figure out how they can best phrase or layout their content? Think about the content you work with, who do you imagine is the target audience? For accessibility, the starting point is making the content understandable and perceivable. You want to start with plain and clear language. Short words and simple sentences are easier to understand. This is true for everyone, but has a greater impact on people with cognitive impairments and learning disabilities. When you can, choose a simple [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) over a complex one, your goal is communication, not art. Non-native speakers, people in a hurry, and people with cognitive impairments will all appreciate your efforts. Unnecessarily difficult language is always important to look out for. This is something that Yoast SEO is useful for. Yoast includes features that analyze your writing and make suggestions for improvement. Suggestions might include sentence length, a lack of headings, and paying attention to those suggestions will really help your users. Excessive use of abbreviations and acronyms will also increase complexity if your reader doesn't recognize the abbreviation. Within your text you should write out the meaning of any abbreviation or acronym the first time it appears in the content. For some topics, complexity is essential. If you're writing on quantum mechanics using simple language may just not be an option.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=94)** However, if you're writing instructions for people to use a transit ticketing machine, every sentence should be clear to anybody who might use public transit. Adding a simplified summary for complex topics is a way of giving people a window into content, even if it is beyond their understanding. Lainey Feingold, a lawyer who writes on accessibility in the law, includes a simplified summary on every article. Law is an example of a topic that's difficult to understand, but important to a very wide audience. There are a few plugins that support adding simplified summaries. WP Accessibility and Accessibility Checker by Equalized Digital are both able to take care of this. Are you working on content that has similar characteristics? In addition to the content of your text, think about how word choice can impact percievability. Do your instructions make sense in all situations? Some perceptions are purely contextual. If you write in the graphic on the left that instruction may be unclear in some cases. For a screen reader, there is no such thing as right or left. If this page is being viewed on a mobile device, that graphic may appear above or below the text. This isn't a problem with the user's understanding, it's a problem because you've given instructions that only applied to one view of the content. Instead of using positional references, provide instructions that are unambiguous
>
> **[3:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=187)** perhaps a link that targets the image. Clearly labeling images can also help. If you need two images to be compared, labeling them clearly as image one and image two could help clarify ambiguity. Writers sometimes use color in a similar way. Writing "click on the orange button" has many of the same risks. Visitors who are colorblind or using a screen reader may not know which button you're talking about. On a mobile device in bright sunlight, some colors may be impossible to distinguish, and again if the site is redesigned the orange button could be some other color entirely. The visual appearance of your writing impacts people with reading related disabilities. Color alignment, font, and spacing can all have a profound impact. People with low vision, dyslexia, or dyscalculia, attention deficit hyperactivity disorder, and processing disorders will struggle with some design choices. How can the way you style your text impact your users? Take something as simple as text alignment. The use of text that's either center-aligned or fully justified can cause unique problems. Center alignment is particularly hard on people with low vision. Because the use of zoomed text means that you can only see a few words at a time, using center alignment causes problems moving from one line to the next while the user hunts for the beginning of that next line. Fully justified text creates significant problems for people with dyslexia.
>
> **[4:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/writing-accessible-content?u=76281980&t=281)** The uneven spaces between words that run all the way down the page create an effect called rivers of white in which these channels of whiteness create an impression of motion that draws attention away from the text itself. Having content that is easy to read, easy to follow, and supplies all the information needed to understand it will help make every page better for all your users. Accessible content is a better experience for everybody.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2)
> **Definitions:** is a  (2), is an  (1), means that (1)
> **CLI Commands:** make (3)
> **Env Vars:** seo (1)
> **UI Navigation:** click on (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Using audio and video](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=0)** - [Instructor] Multimedia content is everywhere on the web. Podcasts, video blogs, a profusion of animated GIFs, video backgrounds, it's all multimedia. The first hint at the accessibility problems with multimedia is right there in the name. Multimedia is a resource that's compounded from multiple sensory mediums, mostly audio and video, although there are some haptic experiences with braille readers or device vibrations. The tools for making multimedia content accessible are on the surface simpler than those for written content. All media content, audio and video, breaks down to two characteristics: Making visual cues audible and making audio content readable. Think about the video you are watching right now. If you couldn't hear what I'm saying, how would you get the information? [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning provides captions, you can enable them in the player right now. Captions are one of the most critical parts in making a video accessible. Captioning is technically different from subtitles, although in cases like this video, there may not be much difference. Captions provide a text equivalent of the speech and other sounds in a video. Subtitles only provide the spoken text. The intent behind captioning is to support viewers who can't hear the speech and also need to be notified about other sounds in the background like a doorbell or other offscreen sounds.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=93)** It's not practical to include every sound. A skilled captioner will judge the relevance and importance of each sound as they work. Subtitles are intended to support viewers who need assistance, perhaps because they're not watching something in a language they know or are in a noisy environment. LinkedIn also supports transcripts for these videos. If you switch over to the Transcript tab below the video, you'll see what I'm talking about. This allows users to search the text of the video and can help users keep track of a larger block of text than you'll see in captions and subtitles. Another accessibility feature for video is audio description. Audio description is a separate audio track that is synchronized with your video and provides a description of the visible components of a scene so that people who are blind can fully understand what's going on. Not every video requires an audio description. If a video incorporates slides, but the content of the slides is woven into the speech, then a separate audio description is not required. If the text uses phrases that depend on visuals that aren't described in the speech, however, then an audio description may be needed. While audio description is required under WCAG 2.0 at level AA, it is one of the more difficult requirements to meet. It poses a significant barrier in [Video Production](../../Skills/Web%20Development/Video%20Production.md) in identifying where it's needed and in implementation on websites.
>
> **[3:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=188)** Most online video players have no support for secondary synchronized audio tracks. As a result, meeting audio description requirements, usually needs you to produce two separate versions of a video, one with the audio description and one without. Not every video needs all of these accommodations. Videos with no spoken text won't require captions. However, it may still be a good idea to provide a caption file that simply informs the viewer that the video has no text. Otherwise, the user can't distinguish whether there's been a failure to provide an accessibility accommodation or that it just isn't needed. Audio is simpler than video. There's less information to communicate and no need to synchronize descriptions. You need a transcript that replicates the text spoken within the audio and indicates who speaks each sentence. This text needs to be marked up appropriately as it's still content like any other on your site, but that's pretty much most of what you need for audio. The transcript isn't alternative to your audio file, so it should be placed on your site at an equal level of importance to the audio player and not hidden somewhere at the bottom of the page. There is still one type of multimedia we haven't addressed, background videos and animated GIFs. The number one concern for these is that users need to be able to stop them. Any animation that starts automatically
>
> **[4:41](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-audio-and-video?u=76281980&t=281)** and runs for longer than five seconds must be plausible by the user. Animation can be incredibly distracting for some visitors, wreaking havoc with their ability to focus and complete tasks. It can make visitors with vestibular disorders, disorders of the inner ear, feel dizzy or nauseated such that they can't even look at your website. Your CSS animation needs to respect operating system settings that prefer reduced motion, and animations with long durations must include a pause button. The last step in making audio and video accessible is in the player itself. The video player needs to follow all of the requirements discussed throughout this course. The controls need to have accessible labels, they need to be operable from the keyboard or with a screen reader, and they need to clearly report their current state. There are many different ways to add audio and video and [WordPress](../../Skills/Web%20Development/WordPress.md), and we'll walk through those later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Video Production](../../Skills/Web%20Development/Video%20Production.md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Env Vars:** wcag (1), css (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Versions:** 2.0 (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [Organizing content on the page](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=0)** - [Instructor] How do you approach writing content for the web? When you're writing, do you think about how users with disabilities experience your content? Most people navigate information using a fairly common set of techniques, scanning over the content to find major topics, looking for lists of details that suggest key information, and finding organized data to absorb. Visually, these techniques look for blocks of small text that suggest groupings, lines of large print that suggest headings, groups of items proceeded by bullets or numbers, and information organized like charts or graphs. People using non-visual navigation use similar techniques but they don't have these visual cues. Instead, they depend on the [HTML](../../Skills/Web%20Development/HTML.md) markup and navigation mechanisms in their assistive technology. As a result, best practices expect both of these to be true. If text is a heading, it should be marked up as a heading and it should look like a heading. If a panel of data looks like a table, it should be a table element. When the visual appearance matches the semantic value of the code, then users get a common experience. Content needs to be represented in the HTML in the same order it appears in the code. Depending on the underlying HTML, these six panels shown could be ordered as they seem to be, one through six, or they could be ordered 1, 4, 2, 5, and 3, 6. If the latter is true,
>
> **[1:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=96)** this is a major problem for a user with a screen reader. If you're doing tech support and you're trying to answer questions, it's helpful for you and for your user if you can say, find the table labeled prices, then look at the cell in the second row and third column under the heading monthly. If the table is marked up correctly, these instructions are accurate for everybody. If your design only looks like a table, then those instructions are useless if the person you're trying to help is blind. When marking up a page, there are many levels of useful HTML markup. There are large structural pieces like landmark regions and headings, as we've discussed earlier. Those large structural elements help people locate the main topic of the page, and find the content they need. The internal structure of the page is also important. Inside the post content, you might use the six levels of heading elements, which are like an outline format. In the content of a [WordPress](../../Skills/Web%20Development/WordPress.md) post, every heading you use should descend from the post title. Ideally, that's an H1, but there are many cases where it could be an H2. Either is a reasonable choice and you should make your decisions based on what your theme does. The depth of headings you'll need depends on your content but if the post starts with an H1, then the next subsection should start with an H2. Headings need to precede other content. A heading describes a relationship
>
> **[3:10](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=190)** to the content that follows it. Anything before it is part of the previous heading. Headings should usually be followed by content that isn't also a heading. The article card structure is a common format and it can break this expectation. A card most commonly has an image, [Metadata](../../Skills/Web%20Development/Metadata.md), then a title and maybe some content. This makes the relationship between the heading and the other information confusing. The heading is about everything in the card, but it doesn't show up first. Most types of content have an appropriate element for that content that has a specific meaning in assistive technology. The p element is a paragraph of simple text. The ul is a list of data in which the order is not significant, and the ol is a list of data in which the order does matter. Some elements provide significant navigation bonuses for assistive technology. Key among these is the table element. It's possible that at some point in time you've heard that you should avoid using tables on websites but this is a bit of a misrepresentation of the truth. Tables shouldn't be used just for layout because they are a structure for presenting data. If data is well presented in a table, then that's the ideal HTML element to use. Tables give screen readers two navigation features, the ability to move between cells either along a row or up and down columns, and they give them context about position based on the table heading elements
>
> **[4:45](https://www.linkedin.com/learning/wordpress-accessibility-22376834/organizing-content-on-the-page?u=76281980&t=285)** used for that column and that row. This information makes tables an invaluable tool for navigating complex data. Communicating how items are related is the structural part of HTML that is key to building a meaningful understanding of a document. It allows for correlation between the visual appearance and the oral description of that content. Overall, you can help keep your content organized if you ensure that it's scannable. Do this by breaking it up into digestible and relevant sections with headings, by matching the visual design of your data to the most appropriate HTML element, and by checking that your content is in the same order in the code as it appears to be on the page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (7), [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Definitions:** is a  (8)
> **Env Vars:** html (7)
> **CLI Commands:** find (3), make (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Accessibility support in the Block Editor](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=0)** - [Instructor] The [WordPress](../../Skills/Web%20Development/WordPress.md) block post editor offers a number of helpful features you can use for better accessibility while rapidly generating complex content. One useful feature is the ability to quickly find out problems with color contrast in your choices. When you set the text and background color, you'll be prompted when you've chosen a color combination that could be hard for people to read and you'll be informed that you should perhaps change these colors to make a better experience for your users. This option doesn't work for all blocks. It won't work on complex blocks, only on blocks where color is applied to the entire block at once. You can also create useful structures using the block editor. One of the structures you can use, of course is the heading. By default, WordPress assumes any heading you add is going to be an H2 heading, but you can change this quite easily and should keep that in mind when you know what the structure of your page should be and change it appropriately. You can also create lists with a great deal of ease. Lists are a great organizational tool for your page that allow users to find out how many items are in this group and easily scan the page. WordPress also supports more complex structures like the column layout. Columns can sometimes be a problem
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=94)** if they're not structured in a way that the order of the content is consistent, but in WordPress columns running left to right visually will always be top to bottom in mobile devices or for people using a screen reader. Adding videos and adding captions is also a very helpful thing you can do in the WordPress editor. When you add those captions they will work somewhat inconsistently because one of the tools you have to work with is the native video element. When adding videos to your posts in WordPress' block editor it uses the browser's native video element. It has mostly good accessibility, but it's not entirely consistent and some things may not work as accessibly as they should depending on the browser your visitor is using. WordPress has support to add social links, and these social icons have support to customize their labels. That means that you can use them more than once on a page and they can have a unique label for whoever's social media link this is. The table block is a useful tool that's available in WordPress. It's not perfect. It doesn't have support for row headers, so you can only create simple [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) using it and it's not responsive, so you're not going to have as good of an experience as you might want with this on a mobile device, but it's still a useful tool. In the block editor, you can also examine the overall structure of your page.
>
> **[3:09](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-block-editor?u=76281980&t=189)** You can see how your content is organized and that'll show you the reading order that a user will encounter using a screen reader when they're trying to navigate. You can see which column comes first and how the items in that column are organized. You can also get an outline of your heading structure so you can examine that structure and see quickly whether your headings are appropriate to your content. Overall, there are many tools built into the WordPress block editor that allow you to create better content and better structures for your users to read. There are also a lot of tools that integrate with the block editor to further enhance your ability to create accessibility content. Many of these support both the classic editor and the block editor, but a lot are unique now to the block editor and there are very few new tools being created for classic editing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (9), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Accessibility support in the Classic Editor](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=0)** - [Host] The [WordPress](../../Skills/Web%20Development/WordPress.md) Classic Editor still exists and it's not likely to go away anytime soon. When the Block Editor first released, there were many reasons to continue to use the Classic Editor. The Block Editor was buggy, difficult to use and there were very few plug-in integrations available. However, that's not true anymore. From the accessibility standpoint, there's nothing significant that you can do in the Classic Editor that you can't also do in the Block Editor. There are a few differences. If you upload audio or video in the Classic Editor, it'll be shown on your site using the Media Element JS Video Player. This gives a common interface across all platforms that will be consistent. The accessibility of this player is pretty strong although it's not perfect. When using the Block Editor, the video player used as the native browser video element which can be inconsistent between browsers and has mixed accessibility heavily dependent on platform. In the Block Editor, there are a few blocks that are pretty limited like the table block but this is not an advantage for the Classic Editor which requires you to add tables via custom [HTML](../../Skills/Web%20Development/HTML.md). You can also add custom HTML in the Block Editor. At this point, if you're concerned about creating accessible content, you should probably be using the Block Editor. There are sound reasons to continue to use the Classic Editor. It's a much simpler experience, and if what you're doing is writing blog posts that are mostly text with a few headings, it's a quicker and easier experience.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-accessibility-22376834/accessibility-support-in-the-classic-editor?u=76281980&t=97)** And if you are writing your content using a screen reader, the Block Editor can be a chore to become comfortable with due to its complexity. It is usable, but it has a steep learning curve unlike the Classic Editor. With a little Knowledge, the Block Editor is a more effective way to create accessible content for the average user. For users of assistive technology, the Classic Editor will continue to offer a simpler, more linear way of managing your content.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Env Vars:** html (2)
> **Definitions:** is a  (1)
> **Speakers:** - [host] (1)


### 7. Testing for Accessibility

[↑ Back to Table of Contents](#table-of-contents)

#### [Automated and manual testing](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=0)** - [Instructor] If you want to know how accessible your new website is, where would you start? Is hiring an expensive consultant to test your site, the best first step? Accessibility testing is a multi-layered process. I like to think of it as using four phases, like a design review, some automated testing, testing it manually, using tools, and user testing with various types of assistive technology. So where do you start? What types of testing can you do, by yourself with minimal equipment or time? A design review is important, but it is limited. You can identify problem colors, and you can flag problem areas, and [Forms](../../Skills/Web%20Development/Forms.md) and buttons or with icons. This is something that should happen, before a design is built. It helps prevent a host of issues from ever being created. Automated testing, either fully automated, or using tools to check a single page, seems like an ideal answer. At the press of a button, you get a ton of immediate feedback and it can be great, but as often as not, the results of automated testing require expertise to interpret effectively. Otherwise, you might be drowning in data. Getting user testing with assistive technology requires expertise, equipment, and paying people with disabilities to perform those tests. It can give you great feedback, and it's the only way to get good usability input. A machine isn't going to tell you, whether something is hard to use,
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=93)** only whether it's impossible. But it can also be a waste of resources, if the testing is done at the wrong point in the process. But there's a middle ground, with a host of useful testing options, like what you get from a free [WordPress](../../Skills/Web%20Development/WordPress.md) plugin, like Equalized Digital's accessibility checker, or using Wave by Web Aim in your toolbar, and the most essential tool of [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md), the keyboard. There are significant limitations to any machine testing, any accessibility testing that doesn't involve a human being is fundamentally incomplete. That machine can't test for all accessibility issues, so why not? A large percentage of [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md) guidelines are based on the appropriateness of content, and how it relates to other content. You can ask yourself these questions on any page. Is this label an accurate presentation of the purpose of this input field? Is that heading telling me the topic of the content that follows it? Is this alt attribute for this image, a good description of the image? These tests require interpretation, not just answering what, but why. A human can easily tell whether two pieces of information relate to each other. A machine still falls short without some human intervention. [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) works constantly, on that problem, and there are many tools available, that provide alternative text for images, and they are getting better and better,
>
> **[3:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=187)** at accurately identifying what is in an image. But alternative text only sometimes describes what's in the image. Depending on context, the alternative text should be empty, should describe the page it's linking to, or convey information about a specific person, and AI doesn't always know that. It's also difficult for machines to test the accessibility of interactions. Most machine tests don't interact with your site. They don't press buttons, they don't activate dropdown menus, and they don't fill in form fields. They're not going to find error messages, to verify these messages are available for assistive technology. Even with these limitations, using machine testing to get a rapid overview, of some problems is a significant time saver. These tools can be used quickly, frequently, and they can identify issues for you to fix before they cause a problem. Once you've done some quick testing with tools, pull out your old faithful keyboard. One secret that the professionals know, the keyboard is an important piece of assistive technology. It's the fundamental tool for users with mobility impairments like cerebral palsy, or multiple sclerosis, and it's a key part of how a screen reader interacts with content. It's also frequently overlooked by developers. Don't assume that using a keyboard will let you spot every accessibility problem, but you can quickly learn some important information. Even when you're working with an accessibility professional
>
> **[4:42](https://www.linkedin.com/learning/wordpress-accessibility-22376834/automated-and-manual-testing?u=76281980&t=282)** to get your work tested. Being able to do some tests for yourself is important. Checking your work saves money and time, and you may learn something in the process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (1), [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md) (1), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1)
> **UI Navigation:** dropdown (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### [Testing accessibility with the keyboard](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=0)** - [Narrator] Have you ever tried using your own website while only using the keyboard? Using a website without a mouse can help spot many major accessibility errors. Automated testing doesn't always have the right tools to find accessibility errors related to the keyboard. If we do a quick run of the popular tool WAVE by webAIM on this test site, you'll see that it scores quite well in this testing. There are no errors shown. But if we test the same site using the keyboard, you'll see a very different picture. I'm using a tool that keeps track of what key I'm pressing so you can tell that I'm actually doing something here. With the expectation the keyboard focus travels to nearby items. Those tab presses should have taken me through this navigation menu but I didn't see anything, yet this site didn't show any clear errors in WAVE. Keyboard testing without a screen reader is different from testing with a screen reader. When a screen reader is running, it intercepts key presses which can impact whether a custom keyboard controls work correctly. There may be conflict between your keyboard shortcuts and the screen reader's shortcuts. Important keys for the keyboard include the Tab key, the Shift key, Enter, Space, the Escape key and your Arrow keys.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=93)** Tab and Shift + Tab navigate around the page moving from one focusable element to another. Natively, focusable elements include links, buttons, form fields and media elements. Basically, anything you're expecting to interact with. Any element can be made to receive focus using the attribute tab index equals zero. But tab index doesn't make an element interactive. When you test from the keyboard, you need to be able to demonstrate what is focused. You need to be able to examine the visual aspect of keyboard navigation. Can a user figure out what they're doing? Focus changes are unlike other changes in that they are undirected. The user moves away from a focused item to whatever is next in the [document object model](../../Skills/Web%20Development/Document%20Object%20Model%20(DOM).md) as opposed to actively choosing to point at a specific item. As a result, the focus state should be strong enough to easily identify. You also need to be able to demonstrate that you can reach all interactive elements. Is there a button you can't move focus to? That's probably because it's not really a button. [JavaScript](../../Skills/Software%20Development/JavaScript.md) can attach event handlers to any element so you can have a click event on a div, but if it's still just a normal div element then the keyboard can't reach it. In addition, you need to be able to tell whether you can operate the control and operate it
>
> **[3:08](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-the-keyboard?u=76281980&t=188)** in the way you would expect to operate it. Operating a control is where all of our other keys come into play. When you reach a link you should be able to follow it by using the Enter key. For a button you should be able to use either Enter or Space and if you use the Space key, you should be able to tab away from the item to prevent that button's event from firing when you release the Spacebar. When you open a pop-up or a menu that covers content, you should be able to use Escape to close it. Arrow keys cycle through options in radio button groups and select elements and may be used for other interfaces like tab panels or navigation menus. So if you can't navigate those using a Tab key, try using the Arrow keys. All interactive elements need to be available using the keyboard. They all need to work as expected. This is one of the reasons that anchors and buttons are not interchangeable. They operate differently and users have different expectations of what they're going to do. Behavior needs to be predictable on the website. With this information, you can use the keyboard to test your site. Pause this video and go to your website or any other site and give it a try now to see what happens. Share what you found to be most challenging in the Q&A.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Document object model](../../Skills/Web%20Development/Document%20Object%20Model%20(DOM).md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** wave (2)
> **Code Identifiers:** webaim (1)
> **UI Navigation:** go to (1)
> **Analogies:** picture (1)
> **Speakers:** - [narrator] (1)

#### [Testing accessibility with WAVE by WebAIM](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=0)** - [Instructor] The Wave browser add-on from [webaim.org](https://webaim.org) is a useful quick testing tool. It helps you get an overview of many potential issues. The tool is available as a browser toolbar, so you can use it on almost any browser. When you trigger it, it gives you a panel of many different possible areas of errors. It's divided into six groups, errors, alerts, structural elements, contrast errors, features, and ARIA. Now, this is showing you a lot of information. There are a lot of icons, it can be very complicated to understand what's going on. But you can look at the details panel to get a lot of additional detail. In the errors panel, you'll get a list of each item throughout the page that Wave has decided might be a possible point of risk. Some of these are definite errors. In this case, we have eight linked images without alternative text. That means those images have no accessible name and that link won't be expressed usefully to a screen reader user. But they also show a bunch of alerts. These alerts are things that might be problems. For example, a skipped heading level. They're making the assumption that it's possible your heading level is reasonable for your use case. It depends on what you're testing. Also, there is the concern that heading levels are not strictly required under WCAG, so they're hesitant to describe it
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=94)** as an actual definite error. They'll also mention possible headings. A possible heading is anything that's large text that could maybe be something that's supposed to be a heading. You need to judge these individually and determine whether or not it's an error. This is true of all of the alerts that web aim brings forward. They may be a problem, but they might just be fine. There are also a lot of features listed. Images that have alternative text are considered to be a feature. Now, having alternative text doesn't mean it's not an error. The problem with machine tests of alternative text is all they can verify is that you have alternative text, and that is a requirement and you have met it. But it's not clear necessarily that that's the best text for this linked image. They also show you problems you might have in color contrast. This site doesn't have a lot of color contrast problems, but you can still find them and identify the issue. It'll tell you what the colors are and what it's found. Now, if this text was over a complex background image, this might be more deceptive because it's going to have tested the color contrast against the background color not against the image. That doesn't mean it's not a problem, you can still have problems if that image doesn't load. Web aim provides a lot of information. There are many icons and they're complicated to use.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-wave-by-webaim?u=76281980&t=187)** However, this information doesn't cover anything to do with keyboard tests, and it may be missing a lot of information, so you have to consider it carefully. Well a flagged error is almost certainly a legitimate problem. There are many issues it can't identify or might even flag as accessibility features. The presence of an accessibility feature doesn't mean an accessible website. If that feature isn't being used correctly it might make the website worse. You always have to review the results of an evaluation very carefully.

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
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=0)** - [Instructor] Axe is an open source [JavaScript](../../Skills/Software%20Development/JavaScript.md) library for accessibility testing created by the testing company Deque. It's available as a browser extension for Chrome and is activated through the browser's inspector. The inspector menu is reachable using the right click context menu, and also via keyboard shortcuts, which vary depending on the browser you're actually using. In the inspector, you'll then need to select the appropriate tool, which is the Axe Dev Tools. By default, Axe prompts you to choose a role. It's not particularly important what you choose, but it might help personalize your experience when you choose something that's most like what you're going to do. You then also have to accept the terms of service. Axe provides many different ways to approach testing. It can scan the whole page, it can scan just a part of the page. However, that's dependent on having the Pro package. It only scans portions of pages if you're using the Pro account. With its ability to scan the whole page, it'll present a panel of issues showing all of the automatic issues it's found, how serious they are, and you can turn on and off an option about best practices. They distinguish between whether they're testing for things that are actual web Content Accessibility Guidelines criteria or tools that are actually just recommendations and best practices.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/testing-accessibility-with-axe-by-deque?u=76281980&t=93)** I'm going to turn on the best practices because usually those are good suggestions. It didn't have a significant impact on this particular test, and you'll notice that the number of issues brought up is really fairly low, vastly lower than you may have seen in the wave test. This is because Axe is focused primarily on very, very high confidence issues. Issues that they are absolutely certain are a problem on this page. Eight of these issues are links that don't have any discernible text. That's those image links on the page that didn't have any alternative text. Axe can be a useful tool, but it doesn't contain a lot of details. You could see that the Axe Inspector pulled up a very small list of results. This isn't really a concern since automated testing is never the final step in any process, but it's only telling you about issues with a very high level of certainty. It doesn't flag things that aren't clearly wrong. The issues list is small and it requires a Pro upgrade if you want more thorough testing or testing on more discreet parts of the page. This does give it a very high level of accuracy, and it's a quick way of clearing out high-certainty problems, but it limits the overall scope of the tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **UI Navigation:** select the (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Using bookmarklets for quick assessments](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=0)** - [Instructor] Do you know the term bookmarklet? Bookmarklets are super easy to use. They're small pieces of [JavaScript](../../Skills/Software%20Development/JavaScript.md) that can be run from your browser's bookmarks. They can be used to do quick checks for a lot of accessibility characteristics. These are all things you can also check by using the browser's inspector, but bookmarklets are faster. They give you an overview. Instead of inspecting each issue one at a time, you get a quick look at every occurrence on the page. One site that collects several simple but useful tools is [accessibilitybookmarklets.org](https://accessibilitybookmarklets.org). All of these bookmarklets can be activated as a link on the page, or you can drag the link into your bookmarks bar to use it anywhere. First, we want to look at the Landmarks Bookmarklet. Activating this option highlights each area of the page that's marked as a landmark. If you see content on the page that is not wrapped in a landmark region, you've got orphaned content. Second, we have the Headings tool. This tool will highlight all of the headings on a page so you can get a quick look at which part of the page are headings. Next, we have the Lists tool. The list highlights every list on the page, this is very handy way of finding out how content is organized. Sometimes, lists don't look like lists. Next, the Images tool. While it's clearly an easy thing to identify whether or not an image is present,
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/using-bookmarklets-for-quick-assessments?u=76281980&t=93)** it's not always easy to figure out whether it has an alt text and where that accessible name is coming from. But you can hover over the tag on each of these outlines and identify what the accessible name is for each of these tools. Finally, we have the [Forms](../../Skills/Web%20Development/Forms.md) tool. The Forms tool highlights form-related information on the page. It tells you about how they're labeled, what is grouped with them, what roles they have. When there isn't a form on the page, it'll also notify you that it hasn't found anything of that type. The important takeaway is that these tools are simple ways to find issues very quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** find (1)
> **URLs:** [accessibilitybookmarklets.org](https://accessibilitybookmarklets.org) (1)
> **Speakers:** - [instructor] (1)


### 8. Remediation Workshop

[↑ Back to Table of Contents](#table-of-contents)

#### [Finding the issue](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=0)** - [Instructor] Navigation menus are a key global element of any website. Being able to navigate is central to using the site so it's a good first test. On our demo site, I'll start by exploring the navigation menu. While I look at this site, you should think about whether you've seen a menu like this before. If you ran the same tests, what would you learn? Visually, I expect that this menu is going to have dropdown menus and that they'll probably be triggered on hover or possibly by clicking on that button. I'll explore this. They're not being triggered on hover, so hopefully they're going to happen by clicking on this caret figure, and they are. So now I know what type of a menu I have and what I should be looking for. Let's see how it works with the keyboard. I'm going to turn on a bookmarklet called the key visualizer bookmarklet which will help track what keys I'm pressing as I work. Pressing Tab, I can see that there's a clear, visible focus in the theme. I can see this on the logo, what happens when I get to the menu? I should be in the menu right now, but I'm not seeing any visible focus. So I don't know what I'm doing, now I appear to have exited the menu. I'm on the search that suggests strongly to me that there's no visible focus on the menu, but I don't know for sure what I was looking at. So I'm going to enable another bookmarklet called the focus bookmarklet. This injects a focus state so that I can tell where I am and what I'm looking at.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-accessibility-22376834/finding-the-issue?u=76281980&t=93)** I'll Tab through again. Yes, now I know for certain there's a missing focus state. What I also know is that this toggle that is used to control the sub-menu isn't receiving focus. That suggests that it's not a focusable element. Let's inspect it and see what it is. In the browser inspector, I can see that this control is a span element. It doesn't have tab index, so there's been nothing done to make it focusable and it's not a native button or link element. So it's not going to be able to ever receive focus as it is. By doing some testing using basic tools the keyboard, the browsers' inspector tools, and with the aid of some useful bookmarklets, we've discovered a major barrier to keyboard users and to screen reader users. Next, we need to figure out what to do about it.

> [!info]- Semantic Content
>
> **UI Navigation:** dropdown (1), in the menu (1), toggle (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Identifying the source of an issue](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=0)** - [Instructor] Having identified an accessibility problem, how do you identify the source of that problem? Sometimes it's obvious. If you have a problem with your contact form, there's a very good chance the problem is in your contact form plugin. Navigation menus are usually structured by the core code of [WordPress](../../Skills/Web%20Development/WordPress.md) and displayed by the theme. So a good first step is to switch your theme and see what problems still exist in this case. Because the core themes are built with accessibility in mind, we'll start by switching to the most recent classic theme 2021. When we switch to this theme, what we're going to find out is which types of things are still present in the theme after this change. What I can see on looking at this is that there is an odd icon showing up in the navigation menu. This is not part of the native theme and it looks pretty strange. There is something strange going on here in that the menus are not showing up and these toggles aren't working, but I know that this should be working. What that tells me is that the problem isn't in the theme, the problem is in a plugin. So there's a plugin that's been modifying how this menu works. We're going to go look at the plug-ins on this site and see what we can spot. It can be highly variable what you're going to find in the plug-ins. Sometimes things are obvious, sometimes they're not.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=94)** In this case, I did create a plug-in to do this so I know what I'm looking for. In any case, you'd want to be looking for some kind of a plugin that seemed like it impacted navigation menus or changed something to do with how your website works. If you can't tell what it is, you may need to disable large quantities of plugins all at once to see what happens. I've deactivated Red30 Fancy Menu. Fancy Menu seems a lot like something that might be changing how your navigation works. So now I'll switch back to the original theme and retest.
>
> **[2:17](https://www.linkedin.com/learning/wordpress-accessibility-22376834/identifying-the-source-of-an-issue?u=76281980&t=137)** Having switched to the original theme, let's tab through this navigation again. It looks very similar, but does it work the same way? Now we have navigation that works from the keyboard, navigating through each item. We don't appear to still have a control that's separate, that enables us to expand that sub-menu. So that's apparently what that plug-in was trying to do. However, it did it in an inaccessible manner. So this version is actually better than it was with the plug-in enabled. What we've learned is that we have a more accessible site if we disable this plug-in that was supposed to be making our site better. Next, we're going to take a close look at what was wrong with what that plugin did.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **CLI Commands:** find (2)
> **UI Navigation:** switch to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [What needs to change?](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/what-needs-to-change?u=76281980&t=0)** - [Instructor] After completing your testing, it's good to summarize where you are and what needs to happen next. The summary is your description of what the problem is and what needs to change to make it accessible. Be clear and specific. Have you found any problems in your own sites while taking this course? Try writing down your description of any issues found. For sighted users dependent on keyboard navigation, links need a focus state, and this navigation menu didn't provide it. This is a CSS problem in which the focus state of the theme is overridden by the plugin. If it's not fixed by the plugin author, it can be fixed using custom CSS which can be added in the [WordPress](../../Skills/Web%20Development/WordPress.md) Additional CSS feature. For screen reader users, the dropdown menus are not available at all because the sub-menu toggle isn't focusable. This is caused by a plugin that's injecting toggles using [JavaScript](../../Skills/Software%20Development/JavaScript.md) but isn't creating a keyboard focusable element. This should be fixed by changing the JavaScript in the plugin. You'll note that I didn't reference any WCAG criteria in these descriptions. Specifically, flagging violations of Web Content Accessibility Guidelines is useful when you want to raise awareness of legal risk. But your summary is for clarifying the issue. Focus on the description of [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) and next steps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Env Vars:** css (3), wcag (1)
> **UI Navigation:** dropdown (1), toggle (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Making the change](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=0)** - [Instructor] Okay, you've identified a problem. You've found where it came from, and you've come up with a clear description of the problem. Now what do you do? Start with prioritizing. What can you fix right now to make this work better? Fixing the focus state is the easiest. You can do that immediately by adding custom CSS in the [WordPress](../../Skills/Web%20Development/WordPress.md) customizer Additional CSS option. Or if you're not comfortable with custom CSS, you can probably install WP Accessibility and enable the option to add outlines to elements on keyboard focus. With the dropdown menus, you need to recognize that they are completely inaccessible right now. You can fork the plugin and fix the [JavaScript](../../Skills/Software%20Development/JavaScript.md), but this might not be something you can implement right away. But your testing discovered that navigation is accessible with the plugin disabled, so your next step is to disable the problem plugin. This is easy in this case, because you don't really lose a lot by disabling it, but if we were looking at a critical piece of site functionality, like disabling your entire sales platform, your priorities might need to shift. Your site doesn't become more accessible if nobody can use it. Fixing problems with a plugin or a theme can follow a few different routes, and every case is different. To try and help all users of this plugin, my first preference is to contact the author or the vendor and report the issue as a bug. If they are responsive, interact with them
>
> **[1:36](https://www.linkedin.com/learning/wordpress-accessibility-22376834/making-the-change?u=76281980&t=96)** to follow up with the fixes. You may also need to look for alternatives. Is there another plugin that does the same thing? Is there a more accessible theme that meets your needs? With those resources, do they have accessibility statements or any indicators that the author has paid attention to accessibility? Maybe they have a demo you can check out before you even install their tool. With open source software, you may be able to take the code and create your own plug-in without those accessibility problems, but with large and complex plug-ins, this might not be a feasible option. Of course, you can always fix it in post-production. That's basically what an overlay is, and a custom overlay is where you use JavaScript to correct problems after the code runs on your site. This can work, but it's a fragile technique. When you're holding your site together with string, any change like a plug-in update could break your repairs without fixing the original problem. The choice you make for fixing more complicated plug-in and theme issues is going to depend on your skillset, your budget, and how much time you have available, but a bug report is always a good starting point. The more developers hear complaints about accessibility problems, the more they will learn and the better the overall WordPress ecosystem will become.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-accessibility-22376834/next-steps?u=76281980&t=0)** - [Joe] Congratulations. You've absorbed a ton of new information, accessibility concepts, [WordPress](../../Skills/Web%20Development/WordPress.md) tools and techniques, and methods of testing your website for problems. While everything is still fresh, consider writing down your three biggest takeaways. What stood out to you? What do you need to do most urgently in the websites you're responsible for? Share your thoughts in the Q&A to continue the conversation. For your next steps, think about how you might focus your accessibility knowledge. Do you want to do development or design? Or would you rather specialize in accessibility testing? I have prepared a resource list for you to download, and you can use that to keep digging in. It includes many of the resources I recommended in the class and some more information you can look at to learn more. I'm also the founder of an annual conference on WordPress accessibility, and you can follow me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) for updates. Thanks for spending your time with WordPress: Accessibility. Keep learning so we can make the world a better place for people with disabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [joe] (1)


## Instructor

- [Joe Dolson](../../Instructors/Web%20Development/Joe%20Dolson.md)

## Resources

- Exercise files available

## Skills Covered

- Web Accessibility
- Digital Accessibility
- WordPress

## Path Context

### In [Getting Started with WordPress](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20with%20WordPress.md)
← [Creating Block Patterns in WordPress](Creating%20Block%20Patterns%20in%20WordPress.md) | **7 of 10** | [JavaScript Essential Training](../Software%20Development/JavaScript%20Essential%20Training.md) →

## Appears In

- [Getting Started with WordPress](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20with%20WordPress.md)

## Related Courses

_Courses sharing skills:_

- [Troubleshoot and Repair Your WordPress Website](Troubleshoot%20and%20Repair%20Your%20WordPress%20Website.md) — WordPress
- [WordPress- Speeding Up Your Site](WordPress-%20Speeding%20Up%20Your%20Site.md) — WordPress
- [WordPress- SEO](WordPress-%20SEO.md) — WordPress
- [Wordpress Ecommerce](Wordpress%20Ecommerce.md) — WordPress
- [WordPress- REST API](../Cybersecurity/WordPress-%20REST%20API.md) — WordPress

---

[↑ Back to top](#)