---
type: course
cssclasses:
  - lle-course
slug: auditing-design-systems-for-accessibility
url: "https://www.linkedin.com/learning/auditing-design-systems-for-accessibility"
duration_minutes: 91
duration: 1h 31m
updated: 8/3/2023
learners: 4937
skills:
  - Design Systems
  - Digital Accessibility
  - Accessibility Audits
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGImVlAf-KYqg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691086537263?e=2147483647&amp;v=beta&amp;t=OFUCqoFyx35GF1O4VRzXvUfvO1-6mP_24yGoeAyaB2o"
linkedin_topic: Web Development
learning_paths:
  - '[[Maintain Digital Accessibility]]'
prev_courses:
  - '[[Supporting Accessibility in a Hybrid Workplace]]'
path_nav: '[{"path":"Maintain Digital Accessibility","position":3,"total":3,"prev":"Supporting Accessibility in a Hybrid Workplace","next":null}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/design-systems
  - skill/digital-accessibility
  - skill/accessibility-audits
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Auditing%20Design%20Systems%20for%20Accessibility.md)

![Auditing Design Systems for Accessibility](https://media.licdn.com/dms/image/v2/D560DAQGImVlAf-KYqg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691086537263?e=2147483647&amp;v=beta&amp;t=OFUCqoFyx35GF1O4VRzXvUfvO1-6mP_24yGoeAyaB2o)

# Auditing Design Systems for Accessibility

> If a great design isn’t open and usable for everyone, how great is it? Designing accessibility into products is crucial to ensuring that you’re creating experiences that include people with disabilities. In this course, Anna E. Cook shows you how to conduct an accessibility audit on your design systems to ensure accessible experiences, helping you meet your users’ needs—while also gaining competit

> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility) | 1h 31m | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Auditing design systems for accessibility](#auditing-design-systems-for-accessibility)
  - [What you should know](#what-you-should-know)
- [**1. Accessibility, Design, and Development**](#1-accessibility-design-and-development) (4 videos)
  - [Why accessibility matters](#why-accessibility-matters)
  - [Why accessibility matters in product design and development](#why-accessibility-matters-in-product-design-and-development)
  - [Who to consider in accessible design and development](#who-to-consider-in-accessible-design-and-development)
  - [Digital accessibility standards](#digital-accessibility-standards)
- [**2. Design Systems and Accessibility**](#2-design-systems-and-accessibility) (4 videos)
  - [Atomic design principles](#atomic-design-principles)
  - [Checking an example system and design for accessibility](#checking-an-example-system-and-design-for-accessibility)
  - [Addressing issues at a system level](#addressing-issues-at-a-system-level)
  - [Why design systems must consider accessibility](#why-design-systems-must-consider-accessibility)
- [**3. Setting Up a Design System Audit**](#3-setting-up-a-design-system-audit) (5 videos)
  - [What is an accessibility audit?](#what-is-an-accessibility-audit)
  - [Considerations for an accessibility audit](#considerations-for-an-accessibility-audit)
  - [What do you review in a design system accessibility audit?](#what-do-you-review-in-a-design-system-accessibility-audit)
  - [Setting up an accessibility audit](#setting-up-an-accessibility-audit)
  - [Creating an accessibility audit document](#creating-an-accessibility-audit-document)
- [**4. Auditing a Design System for Accessibility**](#4-auditing-a-design-system-for-accessibility) (4 videos)
  - [Reviewing designs for accessibility](#reviewing-designs-for-accessibility)
  - [Automated testing for front-end code](#automated-testing-for-front-end-code)
  - [Manual testing for front-end code](#manual-testing-for-front-end-code)
  - [Reviewing documentation for accessibility](#reviewing-documentation-for-accessibility)
- [**5. Documenting a Design System Accessibility Audit**](#5-documenting-a-design-system-accessibility-audit) (4 videos)
  - [Adding issues to your original document](#adding-issues-to-your-original-document)
  - [Mapping issues to WCAG criterion](#mapping-issues-to-wcag-criterion)
  - [Prioritizing issues by impact](#prioritizing-issues-by-impact)
  - [Grouping issues into themes](#grouping-issues-into-themes)
- [**6. Acting on a Design System Accessibility Audit**](#6-acting-on-a-design-system-accessibility-audit) (5 videos)
  - [Sharing results with your team](#sharing-results-with-your-team)
  - [Sharing results with organizational leaders](#sharing-results-with-organizational-leaders)
  - [Prioritizing and acting on issues with your team](#prioritizing-and-acting-on-issues-with-your-team)
  - [Sharing results with design system users](#sharing-results-with-design-system-users)
  - [Using results to further motivate better research and advocacy with people who have disabilities](#using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities)
- [**Conclusion**](#conclusion) (1 videos)
  - [There's no such thing as "perfect" accessibility](#theres-no-such-thing-as-perfect-accessibility)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Auditing design systems for accessibility](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/auditing-design-systems-for-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/auditing-design-systems-for-accessibility?u=76281980&t=0)** - Accessibility in our [[Microsoft Products|products]] is crucial to ensuring we're creating experiences that include people with disabilities. But accessibility is also a fantastic way to build truly innovative and amazing products. We are going to make it easier for you to understand the intersection between [[Design Systems]] and accessibility, and give you the tools you need to make more accessible experiences. My name is Anna E. Cook. I'm a short, neurodivergent white woman who uses she/her or they/them pronouns. I'm a senior designer specializing in building inclusive products. Accessibility is a team effort. This course is for product managers, designers, developers, and more. So take your time to soak in any information I share and discuss it with your peers. I'm so looking forward to sharing this journey with you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[Design Systems]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - accessibility (1)

#### [What you should know](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=0)** - While you don't have to know anything about auditing [[Design Systems]] to take this course, there are a few things that can be helpful for you to understand before starting. This is an accessibility and inclusive design driven course. Having a basic knowledge of what accessibility is and why it matters can help you. Though we will also discuss these subjects, I encourage you to take time to learn more about accessibility and disability rights outside this course. Books like "Demystifying Disability" and "Disability Visibility" and [[LinkedIn]] Learning such as "Supporting Workers with Disabilities" and "Inclusion and Equity for Workers with Disabilities" are fantastic starting points for learning from the experiences of people with disabilities. Please know that I will use both person first and identity First language in this course, with phrases like "people with disabilities" and "disabled people." The use of person first language versus identity first language is a sensitive, important, and often deeply personal topic with many considerations. There are no set rules about which to use when speaking broadly about accessibility like we do in this course. That said, we need to consider community and individual preferences. Some people may prefer person first language to describe their own disability, while others may prefer identity first. Some communities may lean collectively towards using one type of language over the other.
>
> **[1:34](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=94)** While I use both types of language in this course, I recommend paying attention and asking people about their personal preferences when it's appropriate to do so. Be sure to respect what people ask for. Additionally, we'll talk a lot about the different parts of a [[Product Development]] process. It will be helpful for you to have a basic knowledge of this process before we start. We'll explore different accessibility considerations for product owners, designers, developers, and more. You don't need to be an expert on any of these roles or responsibilities but you will find that the ones that you are most familiar with will be more meaningful to you. For example, if you are a designer, you might find the section about reviewing designs more meaningful than reviewing code. But regardless of your role or experience I recommend watching every part of this course because understanding how different roles handle accessibility is invaluable. But again, you don't have to come to this learning with any knowledge to gain something valuable from following along. I encourage you to join me on this journey even if you're just curious. With that, let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Systems]] (1), [[LinkedIn]] (1), [[Product Development]] (1)
> **CLI Commands:** find (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - while (1)


### 1. Accessibility, Design, and Development

[↑ Back to Table of Contents](#table-of-contents)

#### [Why accessibility matters](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=0)** - Let's talk about what accessibility is and why it matters. Accessibility is about designing experiences that are open and usable for everyone. Here's an example of accessibility in action. A building has a staircase that people have to use to enter or exit. For that building to be accessible, it would also need to have a well-designed ramp so that wheelchair users may also access it. Now, this matters for many reasons, but most importantly, accessibility is a human right. By making accessible experiences, we make sure that people with disabilities have the right to access critical [[Microsoft Products|products]], services, environments, and more. Our building ramp is an essential part of the design for wheelchair users, but many other people can also benefit. When we solve this use case, that same design can extend to many other people, like a parent with a stroller, a person with a broken leg, or someone using a hand truck to carry heavy boxes. Instead of thinking of disability as a personal health condition, think of disability more like a mismatched interaction between a person and an experience. Take a moment to pause this video and consider, have you ever interacted with a product, service, or environment that you felt didn't meet your needs? (uplifting music) When we consider people with permanent disabilities, such as someone with muscular dystrophy
>
> **[1:33](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=93)** who is a wheelchair user, we design for people with other disabilities, such as someone with a broken leg, a temporary disability existing for a short time, and also someone with a more situational disability, like a parent with a child in a stroller. In our example, if the building with a staircase didn't have a ramp, it would be a mismatch interaction that didn't serve the needs of its users. It's our responsibility to know how our products affect these interactions and create those mismatches. When we understand disability this way, we can fully understand the value of accessibility and create experiences that are far more usable for everyone. So why does accessibility matter? Because disability is a part of being human. Many of us have, and all of us will experience disability in our lives. So accessibility is essential to creating usable and valuable experiences. Let's circle back to the product, service, or environment you thought didn't meet your needs. Pause again, and ask yourself how that experience could have met those needs, and then ask yourself, who else could have benefited from that change? (uplifting music) Accessibility is something we need to consider in all products, services, and environments because it's an opportunity to design well. By learning how to make an accessible experience, we can meet our users' needs
>
> **[3:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=187)** while gaining competitive advantages for our product.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Non-Speech:** (uplifting music) (2)
> **Speakers:** - let (1)

#### [Why accessibility matters in product design and development](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=0)** - One of my favorite things about digital experiences, is that they can adapt to each user's needs without affecting everyone. This means our effort to make accessible experiences serves many people in unique contexts. Check out this scenario. Imagine a team has built an [[E-Commerce]] website for a growing business. While planning, designing, developing, and testing this site, the team has considered standard accessibility needs. Now, one of the considerations is resizing text. They've made sure that text on this site can be resized up to 200% without any loss of content or functionality. This serves people with low vision who can now [[Zoom]] in on the text. This capability also benefits other people. Someone with dyslexia might use this to help them read easier. This can also benefit someone when there's less space, like a smartphone. All the while, users who don't want to resize text, don't have to. Just like all experiences, the digital experiences we create that meet the needs of permanent disabilities can branch out and serve many people. In this situation, scalable text can benefit a person with a permanent disability who is blind, with partial vision, a person with a temporary disability, who has low vision due to cataracts, and a person who is on the go using their phone. Like all accessibility, [[Digital Accessibility]]
>
> **[1:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=96)** has the power to benefit everyone, each with their own needs and circumstances. By meeting these needs, we can expand the impact of our work. Accessibility in digital [[Microsoft Products|products]] can lead to innovative product designs, improved usability, and increased user retention. This means our products can reach and engage more people, leading to huge competitive advantages and more market reach. Here are the current top five webpage accessibility considerations: Sufficient contrast on text and graphics to make sure users can easily read and interact. Well-written alternative or alt text on images, so that people who are blind, or have low vision, or have slow load times, know what is there. Links and buttons with texts, labels, or alternative descriptions, so that people know where a link goes, or what a button does before selecting them. Clear form labels and instructions, so that people can easily enter their information. Indicating the language of an experience, so that it can easily be translated, or clearly spoken when using assistive technologies, like screen readers. Considering accessibility early and often in our process, improves the lives of people using our products, and makes it easier for our team to succeed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[E-Commerce]] (1), [[Zoom]] (1), [[Digital Accessibility]] (1)
> **CLI Commands:** make (2)
> **Analogies:** imagine (1), just like (1)
> **Speakers:** - one (1)

#### [Who to consider in accessible design and development](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=0)** - For us to really consider accessibility, we have to listen and advocate with people with disabilities. When we consider disabilities in digital interactions, we need to look at them from a physical and cognitive lens. A physical lens means anything we interact with using our bodies, and a cognitive lens means anything we need to use our minds to interact with. Every experience has a combination of physical and cognitive demands. Interactions with technology have physical demands when we see, hear, speak, and touch. So let's say a button on a page submits a form. We can interact physically with this button in many different ways. Here's a step-by-step. One, the button is announced. Some users will see it as they scan a page, some might hear it through a screen reader, and some might feel it on a braille keyboard. Two, the user selects the button. A mouse user might click the button, and a keyboard user might select it using the Enter key. Some users may select this button using eye-tracking technology, some may use a mouth stick, and some may use voice commands. And three, the user receives feedback that the button is selected and the form is submitted. These are just a few examples of how people interact with technology physically. Remember that the way you might interact with a button
>
> **[1:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=96)** could be different than someone else. Then what about cognitive inclusion? Interactions with technology have cognitive demands when we learn, focus, make decisions, recall, and communicate. Let's say we've created a patient form for a spa. The form requires people to learn options and decide on a treatment within a time limit before being logged out. To make this experience more cognitively inclusive, we could explain treatments for users who might not not be familiar with them, give users a good amount of time to choose, and warn users before being logged out so they can extend their session. These are just a few ways an experience could consider cognitive needs. Remember that what you need cognitively may be different from others. This is why it's so important to listen to disabled people's perspectives and needs. Because we all have biases. By bringing in people who have different experiences, we can design more inclusively. There are a few ways we can do this. Use [[Digital Accessibility]] standards, which we will discuss more in upcoming videos, hire and retain people with disabilities on our teams, and conduct research to learn from disabled participants. Who we consider an [[Accessible Design]] and development is about making sure we advocate with people who have disabilities
>
> **[3:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=191)** because we want to build experiences that can adapt to these needs and work well for everyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Digital Accessibility]] (1), [[Accessible Design]] (1)
> **CLI Commands:** make (2)
> **Speakers:** - for (1)

#### [Digital accessibility standards](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=0)** - When it comes to [[Digital Accessibility]], the best place to start is with the Web Content Accessibility Guidelines or WCAG. WCAG is a set of standards designed to make digital interactions more accessible. These guides and other related standards such as the guides for authoring tools and user agents can evaluate websites, operating systems, mobile apps, really anything used digitally. WCAG has four principles. Explaining that digital content must be perceivable, operable, understandable, and robust. Spelling the acronym, POUR. Perceivable means removing barriers by providing alternative ways to access content. For example, to make a video accessible, we would provide captions in a transcript. Operable means that content and anything interactive can be controlled through various tools. For example, making an experience work for someone who only uses their keyboard to navigate. Understandable means using language and functionality that's understandable and consistent. For example, making sure we use navigation consistently. And finally, robust means content should work well across different platforms, technologies, and devices. For example, using valid markup like [[HTML]]. These principles are categories that hold our guidelines. You don't need to memorize them,
>
> **[1:35](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=95)** but understanding them can help frame the guidelines in a way that makes them easier for us to use. Now let's practice looking at a guideline and understanding it. In this view, we have our first principle, perceivable and some guidelines within it. Guidelines usually apply in specific situations rather than across an experience. So for an example, guideline 1.1 is for visuals like pictures and charts. It means we have to offer non-visual ways of understanding anything presented visually, like alt text. So we have our category and a sense of what we need to do. But one more consideration here is the A levels of conformance. There are three levels of accessibility conformance. The A level is essential. If this isn't meant, users with disabilities may be unable to read, understand, or fully operate and experience. The AA level is ideal support required for multiple government and public institutions. Many organizations set this as their baseline standard and the AA level tends to be considered specialized support. This is usually for parts of experiences that serve specific audiences. Most experiences meet varying conformance levels and there are different factors at play like what's on a page or what component we're using. By understanding what WCAG is and how to interpret it,
>
> **[3:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=191)** we can use this as a key reference point for reviewing our work. Now it's your turn to practice. Download this video's exercise and spend 30 minutes interpreting WCAG criteria on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Digital Accessibility]] (1), [[HTML]] (1)
> **Env Vars:** wcag (5), pour (1), html (1)
> **Analogies:** for example (4)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)
> **Versions:** 1.1 (1)
> **Speakers:** - when (1)


### 2. Design Systems and Accessibility

[↑ Back to Table of Contents](#table-of-contents)

#### [Atomic design principles](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=0)** - Now that we understand more about accessibility, how does this connect to [[Design Systems]]? So a design system is like a single source of truth for a product, they're a powerful way to group related elements together, define their purpose, and clarify their delivery. Basically, they establish reusable brand elements, components, and patterns. With a design system we can do something once, apply it everywhere, and establish a better experience for everyone. Organizations use them to make their [[Microsoft Products|products]] easier to build and scale. But, most importantly, a design system is essential because it helps us scale accessibility. Accessibility needs can be addressed at a system level and applied broadly, saving money, and time while benefiting our users. This is because design systems use atomic design. Atomic design is basically a mental model that helps us create scalable interfaces. It has five distinct stages working together to create interface design systems which are: atoms, molecules, organisms, templates, and pages. With atomic design, our components build on each other. We start with atoms, which can be combined to create molecules, and can be further combined to form organisms. These elements inform, and create templates that can apply to our pages on our platforms.
>
> **[1:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=96)** They're the easiest, and best way to scale, and interface. Let's break down how atomic design scales with an example design system starting with subatomics. Subatomics are things like brand colors, or typefaces. They affect all the elements we create from our smallest scale to full-blown pages. Atoms show all of our base styles at a glance. They tend to be things like form labels, inputs, buttons, really anything that can't be broken down without ceasing to be functional. For our example, we have a label, a dropdown selector, and a button each serving as a unique atom. Molecules are relatively simple groups of atoms functioning together. The result is a simple, portable, and reusable component that can be added anywhere. For our example, our form label, dropdown selector, and save button can now be combined into a functional form field unit. Organisms are more complex components made up of groups of molecules and/or atoms, and even other organisms. They form distinct sections of an interface, demonstrate simpler components in action, and serve as repeatedly usable patterns. Templates put components into a layout, and present a design's underlying content structure. A template displays all the necessary page components functioning together, providing context
>
> **[3:10](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=190)** for our relatively abstract molecules, and organisms. And finally, pages are instances of templates with actual content in place. They show our final interface as our users will see it, and are central for testing underlying elements. Atomic design and design systems are powerful tools for accessibility. So clarifying atomic design will help us learn how we can apply accessibility at scale.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Systems]] (4), [[Microsoft Products|Products]] (1)
> **UI Navigation:** dropdown (2)
> **CLI Commands:** make (1)
> **Tools:** atom (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - now (1)

#### [Checking an example system and design for accessibility](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=0)** - A well-scaled design system can make it infinitely easier to update [[Microsoft Products|products]] and meet users' needs. Pretty easy, right? But here's the problem. In the example design system we just created, we didn't consider accessibility. So we need to step back to understand those implications. Here are some of the issues we accidentally created. We used a menu icon but didn't provide an alternative label. So some users who can't see that button aren't going to know what it does because we don't have a non-visual menu label. We didn't specify which form fields are required, so users might struggle to fill out the form without errors. Our form fields have low contrast borders with a ratio of 1.48 to 1, meaning that some users may struggle to know the selection area of the field. We also didn't include input instructions. If we require information to be entered in a certain way, users won't be able to know that. The color contrast on our save button is too low. With a ratio of 2.38 to 1, users may struggle to read it. If we create atoms, molecules, and organisms in our design system without considering accessibility, we'll have elements with accessibility issues all over a page, even across our entire experience. Let's go back to the beginning
>
> **[1:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=98)** and look at this page's accessibility, beginning with just one atom, our button. Our example button may have a few shortcomings, but to keep it simple, let's focus on how it didn't meet color contrast conformance. Our button has a light blue background color and white text on top. The text size is 14 pixels, uppercase, and a semi bold weight. We can tell this button doesn't meet contrast needs when we test it using a checker, such as the one from WebAIM. This combination has a ratio of 2.39 to 1, and the contrast needs to be at least 4.5 to 1 if this button is used elsewhere. This problem exists wherever it's used. This issue relates to our atom and subatomics. Those foundational elements can affect designs in big ways. Now we can see the effects of using those foundations to create components without accessibility in mind. But as mentioned, this combination of colors will affect more than just this component. So now we know there's an issue with a component that will likely affect others because its problem is foundational. This is only the beginning of our understanding of the impacts a design system can have on overall product accessibility.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Versions:** 1.48 (1), 2.38 (1), 2.39 (1), 4.5 (1)
> **Tools:** atom (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Analogies:** such as (1)
> **Speakers:** - a (1)

#### [Addressing issues at a system level](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=0)** - We saw how building a design system without accessibility can cause issues, but let's talk about how adding accessibility to our system improves our [[Microsoft Products|products]]. In our last video, we uncovered how a button using a certain combination of colors, font sizes and font weights could have too low of contrast, but could this same issue affect other components in our design system? Because these colors are part of our brand, let's say our team decided to use this combination across many different components. The same issue occurs in all components using this pattern. In our example, this combination was also used on links, radio buttons, check boxes, tags, popovers, and much more. This means that we didn't just create one issue in our system. Turns out we actually made a lot of issues. This can be a scary realization because suddenly, we find ourselves with one issue that actually branches into tens or hundreds of issues across our products. But let's turn this negative into a positive. While this issue impacts many pages and products, our fix can also impact at that same scale. Let's start with that button and fix it. The color contrast on the save button is not high enough with a current ratio of 2.38 to one. The ratio needs to be at least 4.5 to one, but our brand palette has a darker blue that we can use
>
> **[1:35](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=95)** for the background instead of the light blue. If we use the dark blue background color, our color contrast would pass with a ratio of 6.63 to one. If we go with this option, we can then apply the same color combination across all other components with the same issue and fix all of them simultaneously with less effort and time. The positive side of this is that we can find this issue in one place, and with our design system, we can see how many other places it occurs. Then we can fix it at the design system level and watch as we fix branches of the same issue across all applications. That's the power of accessibility in our [[Design Systems]]. It may seem like a lot of work, but once you dive in, the benefits are so fantastic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[Design Systems]] (1)
> **Versions:** 2.38 (1), 4.5 (1), 6.63 (1)
> **CLI Commands:** find (2)
> **Definitions:** means that (1)
> **Speakers:** - we (1)

#### [Why design systems must consider accessibility](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=0)** - Accessibility needs exist across many different parts of a design system. No matter how accessible the components themselves are, we have to support accessible implementation in designs and code. Without that, our consuming teams can still make mistakes. That's why we have to make [[Accessible Design]] systems. We are the foundation for accessible [[Microsoft Products|products]]. [[Design Systems]] that fail to account for accessibility create products that fail accessibility conformance and most importantly, fail users. Instead, creating a more accessible design system empowers teams to build more inclusive products and empowers users with disabilities, and frankly, all users to thrive using our products. So what do we need to consider to make an accessible design system? First, we need to support designers use of components. Designers should have access to all components within design tools like [[Figma (Software)|Figma]]. They need to know how a component should be used and when, because using a component incorrectly can have ramifications. Even with an accessible design system, designers are still making decisions that impact product accessibility so we have to help them make the right decisions. Secondly, we need to support developers' ability to implement accessible code. We have to make sure that the component code itself is accessible but also provide clarity
>
> **[1:34](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=94)** on what adjustments a developer can make or might need to make. Developers should be empowered with testing tools and documentation to understand how a component should behave for certain interactions. Like keyboard only interactions. Like designers, developers also make decisions that impact product accessibility. So again, we need to help them make informed decisions. And finally, all consuming teams should be able to reference design system documentation to understand what components exist, as well as when and how to use them. Documentation can also support needs around accessible content writing and can help clarify to teams any outstanding accessibility issues there may be. We can support our teams by helping them learn when to use something, how to use it and how to test it. These are opportunities for us to consider accessibility. No matter our design system's maturity level. We can use these practices to improve our overall product accessibility across all disciplines, from design, to development and beyond.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Accessible Design]] (4), [[Microsoft Products|Products]] (4), [[Design Systems]] (1), [[Figma (Software)|Figma]] (1)
> **CLI Commands:** make (9)
> **Tools:** figma (1)
> **Speakers:** - accessibility (1)


### 3. Setting Up a Design System Audit

[↑ Back to Table of Contents](#table-of-contents)

#### [What is an accessibility audit?](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=0)** - An accessibility audit is one of many ways to help us establish better accessibility in our [[Design Systems]]. But what is an accessibility audit, and how can it help us achieve the goal of having an [[Accessible Design]] system? [[Accessibility Audits]] are a way to find and log issues so we can prioritize, describe, and ultimately fix them. An audit can evaluate anything, from a single page to a single component, or even our entire design system. This practice can be used for a mature system or even starting from our very first component. We can review our designs, code, documentation, and more using WCAG to inform what we find and assess the impact. We're going to discuss impact from a few different perspectives. So first, we'll prioritize the impact on users. Essentially, we need to understand how big of a barrier an issue creates for our end users. We also need to look at the impact on our organization. If a component has issues and is being used for something essential to our business or organization, it has a higher impact. Then, we should understand the impact by usage. If a component is being used in many places or across many [[Microsoft Products|products]], it has a big impact. Using a combination of considerations like these can help us prioritize issues to be fixed sooner rather than later, because our ultimate goal is to fix them.
>
> **[1:35](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=95)** Keep in mind that there's no perfect time to adopt accessibility auditing as a practice. An audit doesn't need to be saved for the end of your development cycle. It can be used throughout your design system's development cycle, and in fact, should be. The sooner we review our work for accessibility, the more we can benefit our end users while also saving time and money. As an accessibility issue moves through our development lifecycle, fixing it actually takes more time and money. On average, an issue can cost five times more if it reaches development, 10 times more if it reaches component testing, 15 times more if it reaches acceptance testing, and 30 times more if it reaches production. So if you're wondering when the right time to conduct an accessibility audit is, the answer is now. We can use this no matter what stage our design system is in, or even what stage our experience itself is in. Everything we'll discuss can be applied to our design system. But it can also be applied to anything we do to build digital experiences. Whether you're watching this while using a mature system, or you're watching, wondering how to make your new components accessible as you build them, accessibility auditing is going to be super helpful for your work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Systems]] (1), [[Accessible Design]] (1), [[Accessibility Audits]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** wcag (1)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - an (1)

#### [Considerations for an accessibility audit](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=0)** - An audit empowers us to find and prioritize accessibility issues. But what exactly needs to be considered for us to do this? No matter what you plan to review, you will most likely use WCAG or similar guidelines like the authoring tools accessibility guidelines or user agent accessibility guidelines. So it's important to understand WCAG and define your conformance level goals. In our audit, we'll use WCAG to map and prioritize issues. As we discussed, the A levels are the current method WCAG applies to conformance. So before we start our audit, we need to ask ourselves, what level of accessibility are we reviewing for? Take time with your team to define your goals. If your team is using an accessibility audit as a starting point, maybe it's too early to define this. So instead, I recommend checking for A and AA items. Generally, we want to review all A and AA levels as these are ideal accessibility goals, but then how will we review for accessibility conformance? Auditing should include two evaluation methods: automated testing and [[Manual Testing]]. Automated accessibility testing means using automated tools to test for us. This tends to be most useful when there's code to review because an automated tool can easily comb through and decipher code.
>
> **[1:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=92)** Some examples of automated testing tools are: Accessibility Insights, axe DevTools, axe-linter, and many more. However, automated testing isn't perfect. Using just automated testing in an audit can create major gaps. Think of automated testing similar to spellchecker when you're creating a [[Microsoft Word|Word]] document. Sometimes spellcheck might miss mistakes, and sometimes spellcheck might flag issues that aren't actually issues. This is where manual review becomes helpful. It divides these gaps between what automated testing can capture and what actually exists for users. Manual testing is conducted by people like you and me, specifically accessibility specialists, assistive technology users, and people with disabilities. Manual testing can help us find issues that automated tools can't catch, remove unnecessary issues, and include more comprehensive testing with tools like assistive technology. Ideally, an accessibility audit should combine automated and manual testing. But if you choose to start with just an automated test, that's okay too, just let your team know. Remember, the right time to start your audit is now. If you're looking for support on the automated and manual parts of any audit, you can hire individuals with these skills or bring in support from organizations like Deque, Fable, Knowability, and many more.
>
> **[3:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=187)** Remember, for a holistic accessibility audit, we need to use conformance guidelines like WCAG. We also need to make sure we evaluate with automated and manual testing. This will set us up for success so we can find, prioritize, and ultimately fix any issues we find. For more testing tools and organizations, check out the resources document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (5), [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (4), make (1)
> **Env Vars:** wcag (5)
> **Cross-References:** we discussed (1)
> **Analogies:** similar to (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - an (1)

#### [What do you review in a design system accessibility audit?](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=0)** - Let's say we're reviewing a single webpage for accessibility. Maybe this page had no design files, and the source code files have been lost. So all of our review would happen on the webpage itself, even if some of our findings are related to design or code. In our review, maybe only a few elements are being used on the page, so we don't really need to consider entire components with multiple uses as much as single elements. It would likely be a shorter, simpler audit. This example would look different than a design system review, which needs us to be way more comprehensive. A design system audit is more detailed because [[Design Systems]] have much more nuance and complexity. What makes a design system so powerful is also what makes it more complex to review. While we can reduce a design system audit's scope, a more holistic review will include at least three things. Designs, are components accessible by design? Are we supporting designers' use of components within design files, like [[Figma (Software)|Figma]], in a way that empowers accessibility in their design? Development, are components accessible in code? Are we ensuring all development frameworks we support, like [[React.js|React]] and [[Angular]], include accessible implementation? Are we supporting developers' use of components within code in a way that empowers accessibility in development and testing? Documentation, do we clarify what components exist
>
> **[1:34](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=94)** and how to use them with accessibility in mind? Do we help people know how to test components for accessibility? Are we transparent about known issues? In our audit, we are still reviewing atoms, molecules, and organisms of a design system in each of these areas. Still, our considerations are going to depend on where a component is used and who's using it. These factors are all important and necessary for an effective design system review, no matter our scope. This is because accessibility isn't just a designer's job or just a developer's job, accessibility is everyone's job. To truly support our product accessibility, we have to support all disciplines and roles using our system. Remember that these are only three factors that affect most design systems. Every design system is a little different and has unique needs. For example, if our design system outlines clear backend or server side development considerations, we might want to review our API structure for accessibility. These are just the primary needs when reviewing components, so diverge and expand your audit in any way that benefits teams using your design system and the end users interacting with your components and patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Systems]] (2), [[Figma (Software)|Figma]] (1), [[React.js|React]] (1), [[Angular]] (1)
> **Env Vars:** api (1)
> **Tools:** figma (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - let (1)

#### [Setting up an accessibility audit](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=0)** - Before starting an accessibility audit, we should know exactly what we want to review. Let's go through the steps needed to plan our design system audit. Accessibility conformance level. The most important part of our audit is naturally the level of accessibility we're checking for. Perhaps our team wants to start capturing only A level issues and then get to AA in the next audit. We may want to capture issues specifically affecting certain audiences such as screen reader users. While we want to make an experience as accessible as possible for all users, we may take multiple reviews to reach that point. Establish goals. Do we want to prove to leadership that accessibility issues exist? Do we want to review new components in development? Maybe we want to review our whole system. Having goals before starting an audit can be a helpful way of making sure our motivations are clear. Define scope. Are we hoping to audit the entire existing design system? Maybe we want to just audit what's currently used in one experience. We have to define the scope before we begin. Otherwise, we could find ourselves endlessly auditing with no delivery in sight. Clarify timeline. We need to make sure that we have enough time and resources to review everything we want and communicate with leadership about the time we need. A timeline is also helpful for us to document
>
> **[1:33](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=93)** so that when we come back to an audit later, we know what might have changed since the initial review. Review process. Will your audit only include automated testing or will it combine automated and [[Manual Testing]]? If you're using automated tools, what will you use? Will this audit include tests with assistive technology users? Define these details to make it clear how issues were found and how to recreate them. Establish a review team. One person or many people can conduct an accessibility audit. Whoever is included in your team should be capable of testing everything in scope. So if we have a design specific review, we should bring in accessibility focused designers. If we're only reviewing code, we might bring in accessibility focused developers. With a combination of elements, we could benefit from having a larger team to review at different parts at the same time. By planning the details of our audit, we can ensure it's complete and use it to make fixes. Now it's your turn to practice planning your audit. Open the accessibility audit spreadsheet template from your exercise files and navigate to the background page. Take 10 minutes to consider how you might fill out this section in your audit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (1)
> **CLI Commands:** make (4), find (1)
> **UI Navigation:** open the (1), navigate to (1)
> **Exercise Files:** template (1), exercise files (1)
> **Cross-References:** in the next (1)
> **Speakers:** - before (1)

#### [Creating an accessibility audit document](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=0)** - Now that we know what we want to review, let's set up our documentation to store our results. Documentation is an important way to log issues and keep track of progress as we fix them. We should be able to store multiple data points per issue. This is why many accessibility reviewers use spreadsheets or tables. Automated testing tools can also automatically generate these documents. As a starting point, some accessibility testers use automated tools to create their documentation, then fine-tune it as needed. Whatever type of documentation you set up should include some key data points. Consider including impact. Any issue logged should account for impact, usually using three to five levels, such as low, moderate, high, and critical. Theme. If you notice reoccurring elements, you can group them into themes. For example, if many of our issues are related to color contrast and usage, we might use color as a theme. This will make it easier for us to present high-level data. Component or Item name. Every line item we add should include the name of the component or item we're reviewing. WCAG criteria. Include WCAG criteria to prioritize issues and show why they were added. Conformance level. Include the A level to show that the issue was captured in alignment with our goals. This will also help us assess impact.
>
> **[1:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=96)** Description. Include a description and any steps for recreating an issue. Put this in plain language to help others understand the issue and who's impacted by it. Fix recommendations. Help your team understand possible fixes for an issue so they consider how to fix them. Testing methods. Note if the issue was captured with automated testing, [[Manual Testing]], or a combination of the two. Links. Link to the issue so it can be found later. This could be a link to a design file, a website, a code repository, or whatever works. Date. Even though we include a broad timeline in our background page, adding a date per item is also valuable. Notes. When we have additional resources or notes to add, having a dedicated spot for them could be helpful. This document might seem like a lot to share with stakeholders, but don't worry about how it'll be presented to leadership just yet. We'll get to that later. Right now our goal is just to make it easy to log issues and capture what is needed to fix them. Remember, this document is for you and your team. If you need more or fewer data points, diverge from these recommendations. What matters is that you have what you need to act on your audit. Take another look at the accessibility audit spreadsheet template in your exercise files and navigate to the audit page. Here you'll find all these data points
>
> **[3:12](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=192)** already laid out for you. Take a few minutes to consider how you might add more, or less to your audit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** wcag (2)
> **Exercise Files:** template (1), exercise files (1)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** set up (2)
> **UI Navigation:** navigate to (1)
> **Definitions:** is an  (1)


### 4. Auditing a Design System for Accessibility

[↑ Back to Table of Contents](#table-of-contents)

#### [Reviewing designs for accessibility](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=0)** - Did you know that accessibility issues can actually originate in our designs? In a case study audit by DQ, they found 67% of accessibility issues were design related. So it's important to review design in terms of interaction, content and visual elements. When reviewing designs, you can use files like [[Figma (Software)|Figma]] or even component repositories like Storybook. With design review, we tend to use [[Manual Testing]] the most. There are automated tools for some things like color contrast, but automated tools tend to be less effective because they can't comb through designs like they can code. Designs are just too flexible. A rectangle could represent a button in one place, but in another, it could just be a background color. In design files, automated tools can struggle to understand our intentions, so we tend to do more manual review for design accessibility. Because of this, the QuickCAD Quick Reference Guide and similar guides are our best review tools. I mentioned reviewing interactions, content and visuals in design. Let's break down what comes up in each of these categories. In interaction design, we review for animation, bypass blocks, different states like focus and hover interactions, layout consistency, navigation and navigability, pointer gestures, responsiveness, tab order and reading order,
>
> **[1:34](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=94)** and timing and timeouts. For content design, we review for alternative text, captioning and transcripts, error suggestion, heading structure, input feedback, labels and instructions, page titles, and purposeful link text. And for visual design, we want to review color contrast, color usage, consistent visuals, legible typeface usage, and visual interface design. Let's look at a design issue from our sample system. This is a form that uses a set of inputs. Right now, we are showing a newsletter sign-up and the email input is the only one that's red. This appears to be an error, but there's no description on how to fix it, and it relies on color to indicate that an error has occurred. This design has created two accessibility issues relating to 3.3.3 Error Suggestion and 1.4.1 Use of Color. By finding this issue, we can update our input errors to include icons to help distinguish the error beyond just the use of red and content that clarifies why the issue happened. This component could have other issues, so this is just one opportunity for improvement. Just remember, that [[Accessible Design]] is about more than just colors and fonts. Like all [[User Experience Design (UED)|user experience design]], accessible design goes beyond visual considerations alone. Take a moment to practice reviewing designs
>
> **[3:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=189)** for accessibility. This exercise will walk you through our interaction, content and visual design considerations in depth and show you how to review an example design. To get started, create a Figma account if you don't already have one. Open the reviewing designs for accessibility exercise folder. Download the .fig file. Import the Figma by either dragging it and dropping it into your app viewport, or by selecting the import file from one of your project pages. Download any assets you need such as typefaces from the assets folder.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (3), [[Accessible Design]] (2), [[Manual Testing]] (1), [[User Experience Design (UED)|User experience design]] (1)
> **Tools:** figma (3)
> **Versions:** 3.3.3 (1), 1.4.1 (1)
> **Documentation:** reference guide (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### [Automated testing for front-end code](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=0)** - It's time to switch gears from design to code. Unlike reviewing designs, automated testing tools work well when reviewing code. Automated accessibility testing uses software to scan pages, [[Microsoft Products|products]] and components for accessibility issues against predefined accessibility conformance standards. That said, you should do both automated and [[Manual Testing]] to capture everything. We'll talk about both types of review starting with automated testing. Automated accessibility testing can happen in live experiences, component repositories, and even in code editors as we build. In most audits, you will likely review live code. This code has been pushed to production and is available for end users. This could mean reviewing a website, a mobile app, or the like. For [[Design Systems]] you might find reviewing code wherever you're hosting your components is easier and more efficient. For many folks, that can be a place like Storybook. Reviewing both live code and isolated components can help us see how components are being used while considering their underlying structure. It's good to compare the intention of our component versus what developers actually do to implement it. Let me show you how automated testing works. For my review, I will use a site from a fake organization called the Orange Valley Community Arts Association. I'll use a plugin called Accessibility Insights
>
> **[1:35](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=95)** to run an automated test. Keep in mind, most automated testing tools are similar in how they test and show issues, so you can choose whatever works best. I'm going to turn on FastPass and then automated checks. And in a moment we will notice that these little red boxes are overlaid on the site. These are the issues that our tool found automatically. Let's go ahead and select this one. As I select this, I get a dialogue that tells me more about the issue. In this case, the post date on our class list is too low in contrast, which would make it hard for people to read. We also get some handy information about the issue in our dialogue, including what the issue relates to, color contrast, the WCAG success criteria, WCAG 1.4.3, the code snippet, the colors in the foreground and background, and even a recommendation for how we might fix it. All of this information will be helpful for us as we add issues to our documentation. Let's leave this dialogue so that I can show you another issue. Let's select this other box around another post date. When I open this dialogue, we can see the information is the same as the other one. That's because this is the same issue
>
> **[3:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=189)** happening in multiple instances of the same component. So we might just log the first instance for our audit, since we can fix it at the component level. Remember, even though I'm using a website for my review, your audit doesn't have to be a full experience. You can test isolated components for many design system audits even if you also review a live experience. What I shared is just one thing automated tools can do, so practicing yourself is worth it. To practice, install one of the plugins in the resources exercise file under the automated testing tools header and open our test site at [orangevalleycaa.org](https://orangevalleycaa.org). Try finding one or two things I didn't find in my review.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Manual Testing]] (1), [[Design Systems]] (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** wcag (2)
> **URLs:** [orangevalleycaa.org](https://orangevalleycaa.org) (1)
> **Versions:** 1.4.3 (1)
> **Exercise Files:** exercise file (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** install (1)

#### [Manual testing for front-end code](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=0)** - We've talked about automated testing but we know no audit is complete without manual tests. Remember, [[Manual Testing]] is conducted by people like you and me. Many automated tools these days also have guided manual tests, which means that we can get a little support. Even though it looks a little different, manual testing can happen just about anywhere automated testing can, such as in live experiences, component repositories, and code editors. For manual tests, we tend to review keyboard usability to find out if someone can use an experience without a mouse, screen reader usability to find out if someone can use the experience with a screen reader, such as JAWS, NVDA, Narrator, VoiceOver or TalkBack. Magnification and [[Zoom]] testing to find out if someone can zoom the experience up to at least 200%. Different states. Automated tools can't always figure out what happens when a user interacts. For example, if a form can't submit and has an error message, that's a different state and we need to check it. Valid markup. Some markup isn't helpful even if our automated checker didn't notice. For example, maybe we provided alt text for an image of a cat, but the alt text just reads image. That's still not accessible. Captions and transcripts. If an experience includes videos, podcasts
>
> **[1:35](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=95)** and other multimedia, it needs to include captions and/or transcripts. I don't expect anyone to become an expert at manual testing just from these videos, but I do think it's a great time to start practicing. One of the best starting points is by doing some keyboard testing. Let's try it together. I'll open our Orange Valley Community Arts Association site and try some keyboard tests. Let's use Accessibility Insights again to help us. I'll open FastPass again, but this time I'll select tab stops and use the visual helper to guide us. When I go back to the Orange Valley site, the test has started so we can hit the tab key. When we do this, our tool shows us the order that users would tab through interactive items on the page. Our goal for this test is to make sure that all interactive elements can be reached using the tab and arrow keys, there are no interactive elements that trap input focus, all interactive elements have a visible indicator when in focus, the tab order is similar to the visual logical order, and focus does not move unexpectedly without a user initiating it. As I go through this page, I can see that the tab order is similar to how the page is laid out but instead of me doing this whole test for you,
>
> **[3:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=191)** I want you to try it on your own. Try using your automated tool to do a guided test or just try tapping through this page and see what happens. Consider the list of goals for us to make sure this experience is keyboard accessible. Do you think it meets all of these goals? Here's a hint. Try going through this page using your tab and arrow keys without having any automated tools to help. Is it clear what's in focus?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Manual Testing]] (3), [[Zoom]] (2)
> **CLI Commands:** find (3), make (2), cat (1)
> **Analogies:** such as (2), for example (2), similar to (2)
> **Env Vars:** jaws (1), nvda (1)
> **Cross-References:** go back to (1)
> **Speakers:** - we (1)

#### [Reviewing documentation for accessibility](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=0)** - You'll probably find you don't capture everything that needs to be made more accessible when just auditing your components. That's because designers and developers tend to work in complex systems, and [[Design Systems]] are all about intent. We intend for components to be used and built in specific ways, but then sometimes our components intent doesn't match how it's applied. Sometimes our teams use or build them incorrectly, so there's always going to be circumstances where what you fix in your components doesn't fix how they're being used. Your atoms might be excellent and accessible, but your organisms may need more attention because they're more unique to specific circumstances. Or perhaps the implementation of your components isn't accessible because of things like the copy applied to them. This is part of why we went through our atomic scale, to help us understand that there's a difference between intent and application. Starting with the components will go very far, but it's not necessarily going to fix everything in your live experience because the application is different. That's where our design system documentation becomes most helpful. Designers and developers look to design system guidelines to help show them a component's intended use and how they should best apply it. So without clear guidance, our teams may struggle.
>
> **[1:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=96)** We can review documentation to bridge these gaps. In some cases, you may consider including documentation in your initial audit, but a documentation review can also happen after your initial audit. As you conduct your audit and you dig into the results, it's possible that you discover its origins in your documentation, which may spur a documentation-specific audit. Remember that our design system-consuming teams are also our users. Start your documentation review by asking consuming teams how they use it and how they make their experiences accessible with what's provided. Just like other parts of our audit, we can prioritize documentation improvements based on what teams use the most and what creates the most significant barriers to users. Learn from design systems that are considering accessibility and how they do so to get a sense of how your team might start approaching better documentation. Design systems such as [[Microsoft]]'s Fluent have feedback embedded into component documentation. Others, such as IBM's Carbon, choose to include documentation in a consistent context, like an accessibility tab for each component. How each organization chooses to document accessibility is going to vary based on a team's needs. Take time with your organization to consider unique needs
>
> **[3:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=191)** and document opportunities for better clarity. Learn from your teams to see how they use the system, and find ways to help them make the right decisions at the right time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Systems]] (3), [[Microsoft]] (1)
> **CLI Commands:** find (2), make (2)
> **Analogies:** such as (2), just like (1)
> **Env Vars:** ibm (1)
> **Speakers:** - you (1)


### 5. Documenting a Design System Accessibility Audit

[↑ Back to Table of Contents](#table-of-contents)

#### [Adding issues to your original document](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=0)** - Now that we've found some issues, it's time to add them to the documentation we set up. Everything we put in here should be actionable and easy to reference when our teams go to fix issues. Remember, we want to use this both to capture and address issues, so it's really meant for us as reviewers and for our teams to use as a log to manage what's been fixed. This documentation is not so much meant for stakeholders and leaders. Since we're doing a design system specific audit, we should start with capturing each item by component name first. Let's start by adding a color contrast issue to keep it simple. On the Orange Valley Community Arts Association homepage, we found that the post dates for each class didn't pass needed contrast. This issue happened multiple times on the homepage, so we might be tempted to add each instance to our audit, but since this is a design system audit, we don't have to do that. We just need to log it once and describe its component or item name. We do this because we only need to fix the component itself, not necessarily every instance it's used. As we've discussed, one fix in our system branches out to all instances. That said, if you want,
>
> **[1:33](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=93)** you can also describe how often this issue occurs on this page or in this entire experience by adding another column for instances. Add any details that are helpful for your audit and your team. Let's go ahead and add the class name we can see in the markup post date to our Component/Item name column. We can skip past the other columns for a moment. We'll come back to them. While I'm here, I'll be sure to select Automated Test in our Testing Method column. Most color contrast issues are found with automated tools, and that's no different for us. We did make sure that this issue was flagged correctly so we could potentially say Both in the Testing Method column. Either approach is fine. Just use your best judgment to decide. I'm also going to add the URL of this issue to our audit so we have it for later. In your audit, you might not link to a site, but instead, maybe a design file or a code repository. You can link wherever. Just make sure to add an example of where the issue is happening so we can find it later. These are just the starting pieces of information we want to have for the issue we find. We still have some things to add to our documentation, and we will discuss those in our next few videos.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (2)
> **Env Vars:** url (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - now (1)

#### [Mapping issues to WCAG criterion](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=0)** - Now it's time to grab our WCAG criteria that's related to the issue. Even if we found the issue with an automated tool or using another accessibility guide, we still have to map issues to WCAG. This is because the WCAG are internationally and legally recognized standards. They will have the most sway with our organizations and provide the most clarity on the issue. Let's open our quick reference guide. We know this is a color contrast issue, so let's go to that section. Now in this section, we have two different contrast guidelines. There is 1.4.3 contrast minimum, and 1.4.6 contrast enhanced. But take note of the A levels here. We want to use the minimum guideline because our audit only captures A and AA levels. So we're going to copy and paste the WCAG title 1.4.3 contrast minimum and put that in our WCAG criteria column. Since we know the A level too, let's put the AA level in the conformance level column. I like using WCAG's quick reference tool because every guideline has an anchor link. So I like to go in and grab the anchor link from the site and put it on the item I just added. Doing this makes it easier for us to reference the issue later,
>
> **[1:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=92)** and it's helpful for people who are less familiar with accessibility. Having this link means anyone can learn more about this issue on their own whenever they want to. We have our WCAG item and conformance level. Let's also go ahead and put in a description for the issue while we're at it. This is a great time for us to practice our skills in explaining WCAG criteria to others. In the quick reference guide, you'll notice that there's a description for contrast issues. We could just include that, but it's more helpful to summarize our issue in plainer language with specific details. Instead of grabbing the quick reference description, let's describe it ourselves. I'm going to say, "WCAG AA requires a contrast ratio of at least 4.5 to 1 for normal text. The text on Post Date is 11 pixels with a bold weight, which means it's considered normal text. You can see the foreground and background text displayed on the screen, and that current contrast ratio is only 1.9 to 1." There. That's a lot more clear than just a generic description. This will make it a lot easier for us to reference later and for people to understand. We might also want to add other related references. Let's say we used a different guide to help us, like the A11Y project checklist. Maybe we liked this guide because it helped us more easily understand the issue
>
> **[3:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=186)** and we think it could help others. In these cases, I'd like to include additions in the notes column. Any time I think something can helps others learn about the issue or understand it better, I include it there. A quick reminder. If you used an automated tool to capture an issue, that tool might recommend guidelines for you. You can use these recommendations in your audit instead of going through the process of checking the quick reference guide. In times when you don't have a recommended guideline, it's still helpful to know how to find the one you need. We've done a great job of adding WCAG information here. We're making great progress, and you only have a few things left.

> [!info]- Semantic Content
>
> **Env Vars:** wcag (10), a11y (1)
> **Versions:** 1.4.3 (2), 1.4.6 (1), 4.5 (1), 1.9 (1)
> **Documentation:** reference guide (3)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - now (1)

#### [Prioritizing issues by impact](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=0)** - [Instructor] Now that we have our WCAG criteria in here this is a perfect time for us to assess impact. We've already talked a little about impact, but this is the first time we will try to assess it in an audit. Including impact isn't us saying an issue isn't important. It's a matter of prioritizing issues so that we can fix the most important ones first. Remember that an issue's impact isn't a hard metric. It's going to depend on a few factors. Impact should be assessed using a combination of impact on users. How significant of a barrier is created with this issue for our end users? Impact on organization. Does this component get used in essential interactions in our organization? And impact by usage. How often is this component used across all [[Microsoft Products|products]]? Let's see if we can try to assess impact to our contrast issue. Here are a few things we know about this issue. For impact on users, the conformance level is AA. That means we need to fix it, but it's not as urgent as an A level issue. A level issues create much more significant barriers for users. AA issues are still barriers but less critical. For impact on business or organization, this issue could make it harder for people in the arts association to know when a class is happening.
>
> **[1:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=96)** Events and classes are a pretty important part of our organization's offerings. And for impact by usage, we saw this issue happening in multiple places on the homepage. That said it's not happening on the events page or elsewhere on the site. What do you think the impact of this issue could be? Take a minute to pause this video and consider the impact from four different levels: low, moderate, high and critical. What level would you assign to this issue? All right, let's see if your level match is mine. Now, personally, I think this issue is medium or high impact. Let me explain. One of the biggest offerings of the Orange Valley Community Arts Association is classes and events, so that makes it more important. This issue is happening in multiple places, making it more important, but then if users select the event, they can see the details on the page itself. And finally, the AA level means it's important but not necessarily critical. Did our answers match? If not, that's okay. Remember, impact is subjective. My reasons for thinking this is medium or high might be different than your thinking. We might even find that when we add more issues to our audit that this issue becomes more or less important
>
> **[3:10](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=190)** in comparison. Maybe we gather user feedback and that changes the impact of this issue. Perhaps your team wants to include more considerations to evaluate impact than what I have here. What matters most is we're considering the possible consequences of fixing or leaving an issue. Many audits include impact because we want our teams to prioritize some issues first. We also include impact to provide stakeholders and leadership an understanding of what's happening without going into technical details. We're doing awesome work together and only have one data point left to add.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** wcag (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Grouping issues into themes](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=0)** - We've made it to the last piece of information we want to include in this audit for this issue, theme. The theme is one of my favorite things to include because it means I'm beginning to think about issues at a system level, like in our design system and our whole product organization. It also means I'm really thinking about ways I can talk about my audit with my team, stakeholders, and leaders. When we add themes to an issue, it's for reoccurring elements. This is especially valuable information for large-scale and design system audits because it's our way of saying, "Hey, this kind of issue is happening a lot." This is valuable information because we can then ask how to address this issue more broadly. For example, we could assign color as the theme for our color contrast issue. If we find other color contrast issues elsewhere, we can group them into the same theme. Suddenly, we can start to map trending issues and, most importantly, solve them. Let's say that our audit includes a lot of issues in the color theme. Think about where we usually define color in our product creation process. Exactly, in design. With this realization, we can start to act on our audit. Here's what could happen. Design system designers look at this one component and change it to meet color contrast conformance. Design system designers
>
> **[1:33](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=93)** also look at other components with the same issue and fix them as well. And finally, we create training and resources to help designers across teams apply color to avoid this issue in the future. It's not about assigning blame or criticism. It's more about knowing who will address the issue and then asking ourselves how we can better support people in that role in the future. I'll say it again. The most important part of our audit is not finding issues. It's about fixing them. This means we fix them individually in [[Microsoft Products|products]], we fix them in our design system, and we fix them in the product organization as a whole. If done correctly, an audit is a short-term project with long-term benefits. If you're looking at your document and thinking, "Oh, my gosh, that's a lot of detail to include for a lot of issues," I want to let you know that you'll get faster at this. I can tell you this because that's what happened to me. Like any skill, understanding [[Digital Accessibility]] takes time to practice and improve. Every time I do an accessibility audit, I get faster and better. I got to tell you, there's nothing more gratifying than seeing the impacts of those fixes for my organization and especially for end users. So let's keep practicing. Open the Accessibility Audit Spreadsheet Template again
>
> **[3:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=187)** and look over the [[Representational State Transfer (REST)|rest]] of the Orange Valley Community Arts Association homepage at [orangevalleycaa.org](https://orangevalleycaa.org). Add three to four more issues you can find on this page to your document. Remember, keep practicing. These are super valuable skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Digital Accessibility]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (2)
> **URLs:** [orangevalleycaa.org](https://orangevalleycaa.org) (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - we (1)


### 6. Acting on a Design System Accessibility Audit

[↑ Back to Table of Contents](#table-of-contents)

#### [Sharing results with your team](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=0)** - So we successfully finished our audit. Now what? This means it's time to share our results. An accessibility audit is meant to be shared, not only to show the results, but also to educate others. The best place to start is with our own design system team. If our team has prioritized an accessibility audit in our deliverables, people will be interested in the results. You might feel like the bearer of bad news presenting a list of issues, but actually, the audit we did is kind of a magical way to make our design system even better. Think of it this way: without our work, it may have taken our team so much more time, energy, and money to find these opportunities. We've created a path towards better usability in all of our [[Microsoft Products|products]], so present your results with confidence. For our design system team, we want to put together a presentation with the high-level results of our audit. This will help our team understand what we found without immediately being inundated with the technical details. We'll also use this presentation to share results with [[Organizational Leadership]], so it's a valuable asset. In our presentation, we're going to share a few different details. Follow along with me by opening the Accessibility Audit Presentation Template in your Exercise files. Overview: share what you'll discuss
>
> **[1:35](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=95)** during the presentation before diving in. This is an opportunity to set the stage for your discussion. Background: what was in scope for your review? What was the time period in which it was conducted? What testing criteria and methods did you use? Review process: explain how you audited at a high level. Explain if you reviewed designs, code, documents, and anything that could be helpful to know. Results: this is the bulk of your presentation. How many items did you find? What were the key themes you created in your audit? Impact data: use your impact assessment to present high-level data. Show your organization the percentage of items with low, medium, high, or critical impact. Theme data: use the themes you created in your audit to explain reoccurring issues so your organization can understand where to focus its efforts. Cross-section between impact and themes: we can usually find a cross-section between impact and themes. Help your team understand the results better by breaking down this cross-section. Recommendations: it's a good idea to recommend addressing the highest impact opportunities. If you have more recommendations, include them.
>
> **[3:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=191)** And documentation: share your documentation files so your team can dig into the results when they're ready for those technical details. Just like the other documents we've created for this audit, remember that this presentation should change to fit anything you need to suit your team and organization. As you're presenting the results of your audit and afterward, give your team opportunities to ask about it. Getting questions about your audit can feel intimidating, but in most cases, people want to learn from your experience. This is a project share-out, but also an educational experience for so many, so be confident and open.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Organizational Leadership]] (1)
> **CLI Commands:** find (3), make (1)
> **Exercise Files:** template (1), exercise files (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - so (1)

#### [Sharing results with organizational leaders](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=0)** - An accessibility audit is meant to be shared. So yes, we should share it with leadership. At the very least, we want to share our results with leaders so they continue to prioritize our efforts to find issues and fix them. But a design system accessibility audit is about finding and fixing systemic issues, right? So we need to share our work to ensure we are given the time and resources to fix the system and influence broad change organizationally. Stakeholders and leaders in our organization are the key to making this happen. Every organization has different levels of accessibility maturity. Organizations with more leadership buy-in tend to have higher maturity levels, which leads to better accessibility internally and externally. We've talked about why accessibility matters but some folks, including leaders, may not know about this. Maybe they're focused on other needs or projects, maybe they haven't been introduced to accessibility before. Even when we have support for some leaders others may still not know. An audit can help us to advocate beyond just our own team. By explaining the issues we find and why they matter, we have the chance to further the accessibility maturity of our organization. Feeling nervous about sharing this type of work with leadership is okay. It's also very normal. Even with years of experience
>
> **[1:33](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=93)** I can still feel that way when presenting work like this. After your presentation to your team, rally with those who can help make a case with you, particularly folks who tend to be managers and leaders themselves. They will have the most influence with leadership already, giving you a soft opening to the conversation. Reuse the presentation you gave your team and make edits to refine it for a leadership presentation. Some leaders will need to understand the value of accessibility more before learning about the audit and others may not. Be sure to know your audience and include details they might be interested in. If you're looking for more resources on how to make the case for accessibility in your organization, check out another [[LinkedIn]] Learning on just this from [[Microsoft]] Inclusive Design Director Christina Mallon. Our work to educate others and ourselves on accessibility will always matter. So be patient with their learning journey as well as your own. Our efforts will lead to higher organizational accessibility maturity and growth over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[Microsoft]] (1)
> **CLI Commands:** make (3), find (2)
> **Speakers:** - an (1)

#### [Prioritizing and acting on issues with your team](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=0)** - I've said it before, and I'll say it again. The goal of an accessibility audit is to find issues but more importantly, to fix them. So what happens next? We put in the hard work of capturing issues in such detail and the great news is that it makes it so much easier for us to fix them. We can use a lot of this information as a starting point for creating tickets in our project management tools. Every team has different processes and systems but let's assume you are in a team that uses [[Agile Development|Agile]] and [[Scrum]] to approach planning, managing and executing work. Although this isn't a series about Agile and Scrum this is how most digital product teams think about and deliver work. Consider this just as a starting point for planning, managing, and fixing accessibility issues. Let's take a look at how this might be approached in your Scrum team. If you're in a team like this, you'll likely find that you can add each issue from your audit as a story and wrap all of your stories in an epic. For our epic, let's call this Design System Accessibility Fixes July 20XX. Now that we have an epic it's time to write one of these issues as a story. Let's try this with our color contrast accessibility issue from the audit. User stories tend to be written like this. As a persona, I want to, so that.
>
> **[1:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=92)** So we might write our user story like this. As a member of the arts association with low vision, I want to learn when classes are happening so that I might attend ones I'm interested in. We can include other details from our audit here. We could include an outcome that says something like, Post Date must have a ratio of at least 4.5 to 1 so that users can read it. We can include other details such as the current caller contrast ratio and the WCAG criteria related to the issue. Anything we think will be helpful can be included. Our team will likely discuss the issue during its next planning meeting to determine how long it will take, or who should do it, and the like. Be careful not to let your tickets gather dust in a backlog. An audit that is left for months can quickly become outdated and irrelevant, which means lost effort, time and money. If we're creating tickets for these issues, it's important that they are prioritized and added to our sprints sooner rather than later. To ensure fixes are prioritized, include these efforts in larger team planning and goals, such as quarterly objectives and key results, also known as OKRs. This will ensure we scale up the importance of our work to larger trackable organizational goals. Your team might approach executing work differently but you can use this as a starting point for how you might approach creating tasks
>
> **[3:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=186)** to fix issues from your audit. If the right time to do an accessibility audit is now, the right time to act on it is as soon as possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scrum]] (3), [[Agile Development|Agile]] (2)
> **CLI Commands:** find (2)
> **Analogies:** such as (2)
> **Env Vars:** wcag (1)
> **Versions:** 4.5 (1)
> **Definitions:** known as (1)
> **Warnings:** be careful (1)
> **Speakers:** - i (1)

#### [Sharing results with design system users](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=0)** - We've done a lot of great work finding issues in our audit as well as advocating and acting on them being fixed. What happens between our audit and our fixes? While we're working on addressing the issues we found, product teams working on live [[Microsoft Products|products]] may still use the existing system to design, develop, and implement work. This means they may create projects and experiences with issues and dependencies. It might be tempting to only let teams know about the issues after they've been addressed, but this can cause problems, particularly for their workflows and schedules. Nothing is worse than being surprised with a big project to fix a product, so we want to inform our teams about this sooner rather than later. That way, they know that some of the components they're currently using will change. They can allocate time and resources of their own to integrate our fixed components and patterns. We want to communicate with our teams so they can properly plan and prepare themselves. And again, this is another opportunity to educate our organization about accessibility. Accessibility needs don't end with our design system. We need teams using this system to care about accessibility too. Remember, even with a perfectly accessible system, teams can still make mistakes if they don't have the education and resources they need. Better yet, the more we talk about accessibility,
>
> **[1:35](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=95)** the more allies we gain from making accessibility a priority. So how can we share the results and progress with teams using our design system? There can be many different approaches to this, so as I continue to say, do what works well for your teams. That said, if you can gather the entire product organization together, you can share the results with everyone at once with your existing presentation. If you've done this after creating your project epic, you can also share the epic and stories in this presentation. That way, they can see each story that's going to be addressed and get a sense of the general timeline for it to be done. Then each team can work on its own plan for implementing fixes our design system team is making and prioritize them as needed. Sharing your results with everyone is going to mean you'll get questions. Sometimes the questions can be hard to answer, but you'll likely find people are excited to understand what you found and how you plan to address it. Remember, teams using our design system are invested in it being a great system. Most people understand that [[Design Systems]] are always improving and developing. By sharing results with design system consumers, we can help them understand how our audit is an improvement. From here, we can begin to have conversations that go to the next level for our organization's accessibility strategy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Design Systems]] (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - we (1)

#### [Using results to further motivate better research and advocacy with people who have disabilities](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=0)** - For many organizations, an audit can be one of the first things that happens in its journey to becoming more accessible. You'll likely use auditing again and again to check existing experiences. You'll use these processes to check new work as much as you check what already exists. That is a wonderful tool in our toolkit but accessibility is much bigger than an audit. It's much bigger than a design system. Accessibility influences every facet and system we exist in both professionally and personally. Fundamentally, being an advocate and ally is about making sure we create accessible spaces and ensure equitable experiences for people who have disabilities. We need to do this both for the people we work with or could work with and for people we serve with our experiences. Remember, accessibility is a human right. Yes, it also makes better designs and experiences while increasing our ability to meet organizational goals. But at its core, accessibility is about people. So wherever your organization is in its journey, use this tool to advocate for better accessibility. Learn from disabled people by speaking with them and compensating for their input. Get feedback early and often on new developments by granting your users with disabilities
>
> **[1:35](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=95)** beta permissions and early access. People with disabilities are some of the best designers, so listen to them. I mentioned earlier that seeing the impact of the audit and the consequential fixes that come from it is the best part of this work. Being an accessibility advocate and ally is something that makes the work we do so much more meaningful and impactful. We have so much we can learn in the space of accessibility and auditing is just the start. So use this to motivate your organization to do better research and advocate with people who have disabilities. Because that's the key to the future of design, to building truly innovative and impactful work.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Speakers:** - for (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [There's no such thing as "perfect" accessibility](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=0)** - Congratulations on finishing the entire Auditing [[Design Systems]] for Accessibility series. You've learned so much and can take this knowledge wherever you go. The last thing I'll share with you is that you don't have to be perfect. There's no such thing as perfect accessibility. I learned this myself from accessibility and disability rights advocate Sheri Byrne-Haber. I need to hear it and I regularly reference her words as someone who struggles with a fear of imperfection. If you're looking to achieve 100% perfect accessibility in your efforts, you might find yourself stuck. Accessibility is a design methodology, and because design involves people, there's no such thing as perfect. People are always changing. Accessibility is about accounting for baseline needs and adapting to unique needs. This is one of the coolest parts of [[Digital Accessibility]] efforts. We have the power to meet needs adaptively. Don't be afraid of taking action, trying your audit, and pushing for more and better accessibility. Just because there's no such thing as perfect design or perfect accessibility doesn't mean we shouldn't try for better. That's the beautiful thing about this work. It's about people, and there will always be opportunities to learn, improve, and build community. If you take one thing away from this entire course, I want it to be that the right time to make things more accessible is now.
>
> **[1:34](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=94)** No matter where you are in your journey, you'll find that as you do this, you'll learn, and that's great. Don't forget you're not alone. I'm always learning new things, and I guarantee those around you are as well. Have conversations with your colleagues about making more accessible work. Build community wherever you are to help support efforts like your own. That's what I do, and it makes this journey so fun and so meaningful. So remember, take this learning and start acting on it. Learn as you go and talk with others. I'd love to connect with you and be a part of your community. You can find me on [[LinkedIn]] and follow me at my blog at [annaecook.com](https://annaecook.com). There is so much to learn when it comes to accessibility, so I encourage you to dig into all the amazing resources in the Resources document. Keep up your journey towards accessibility and inclusive design, wherever you go. I want to thank you all for taking the time to learn with me. It's been a delight.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Systems]] (1), [[Digital Accessibility]] (1), [[LinkedIn]] (1)
> **CLI Commands:** find (3), make (1)
> **URLs:** [annaecook.com](https://annaecook.com) (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Anna Cook]]

## Resources

- Exercise files available

## Skills Covered

- Design Systems
- Digital Accessibility
- Accessibility Audits

## Path Context

### In [[Maintain Digital Accessibility]]
← [[Supporting Accessibility in a Hybrid Workplace]] | **3 of 3**

## Appears In

- [[Maintain Digital Accessibility]]

## Related Courses

_Courses sharing skills:_

- [[WordPress- Accessibility]] — Digital Accessibility
- [[Using Stark for Accessible Design Projects]] — Digital Accessibility
- [[React- Components, Context, and Accessibility]] — Digital Accessibility
- [[Microsoft Office Accessibility for Beginners]] — Digital Accessibility
- [[HTML Forms- Accessibility]] — Digital Accessibility

---

[↑ Back to top](#)