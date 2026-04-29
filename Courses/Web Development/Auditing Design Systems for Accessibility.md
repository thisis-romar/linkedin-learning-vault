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
created: 2026-04-29
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
  - Auditing design systems for accessibility
  - What you should know
- [**1. Accessibility, Design, and Development**](#1-accessibility-design-and-development) (4 videos)
  - Why accessibility matters
  - Why accessibility matters in product design and development
  - Who to consider in accessible design and development
  - Digital accessibility standards
- [**2. Design Systems and Accessibility**](#2-design-systems-and-accessibility) (4 videos)
  - Atomic design principles
  - Checking an example system and design for accessibility
  - Addressing issues at a system level
  - Why design systems must consider accessibility
- [**3. Setting Up a Design System Audit**](#3-setting-up-a-design-system-audit) (5 videos)
  - What is an accessibility audit?
  - Considerations for an accessibility audit
  - What do you review in a design system accessibility audit?
  - Setting up an accessibility audit
  - Creating an accessibility audit document
- [**4. Auditing a Design System for Accessibility**](#4-auditing-a-design-system-for-accessibility) (4 videos)
  - Reviewing designs for accessibility
  - Automated testing for front-end code
  - Manual testing for front-end code
  - Reviewing documentation for accessibility
- [**5. Documenting a Design System Accessibility Audit**](#5-documenting-a-design-system-accessibility-audit) (4 videos)
  - Adding issues to your original document
  - Mapping issues to WCAG criterion
  - Prioritizing issues by impact
  - Grouping issues into themes
- [**6. Acting on a Design System Accessibility Audit**](#6-acting-on-a-design-system-accessibility-audit) (5 videos)
  - Sharing results with your team
  - Sharing results with organizational leaders
  - Prioritizing and acting on issues with your team
  - Sharing results with design system users
  - Using results to further motivate better research and advocacy with people who have disabilities
- [**Conclusion**](#conclusion) (1 videos)
  - There's no such thing as "perfect" accessibility

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Auditing design systems for accessibility
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/auditing-design-systems-for-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/auditing-design-systems-for-accessibility?u=76281980&t=0)** - Accessibility in our products is crucial to ensuring we're creating experiences that include people with disabilities.
>
> **[0:08](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/auditing-design-systems-for-accessibility?u=76281980&t=8)** But accessibility is also a fantastic way to build truly innovative and amazing products.
>
> **[0:14](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/auditing-design-systems-for-accessibility?u=76281980&t=14)** We are going to make it easier for you to understand the intersection between design systems and accessibility, and give you the tools you need to make more accessible experiences.
>
> **[0:26](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/auditing-design-systems-for-accessibility?u=76281980&t=26)** My name is Anna E. Cook.
>
> **[0:28](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/auditing-design-systems-for-accessibility?u=76281980&t=28)** I'm a short, neurodivergent white woman who uses she/her or they/them pronouns.
>
> **[0:33](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/auditing-design-systems-for-accessibility?u=76281980&t=33)** I'm a senior designer specializing in building inclusive products.
>
> **[0:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/auditing-design-systems-for-accessibility?u=76281980&t=38)** Accessibility is a team effort.
>
> **[0:40](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/auditing-design-systems-for-accessibility?u=76281980&t=40)** This course is for product managers, designers, developers, and more.
>
> **[0:45](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/auditing-design-systems-for-accessibility?u=76281980&t=45)** So take your time to soak in any information I share and discuss it with your peers.
>
> **[0:50](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/auditing-design-systems-for-accessibility?u=76281980&t=50)** I'm so looking forward to sharing this journey with you.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - accessibility (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=0)** - While you don't have to know anything about auditing design systems to take this course, there are a few things that can be helpful for you to understand before starting.
>
> **[0:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=11)** This is an accessibility and inclusive design driven course.
>
> **[0:15](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=15)** Having a basic knowledge of what accessibility is and why it matters can help you.
>
> **[0:20](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=20)** Though we will also discuss these subjects, I encourage you to take time to learn more about accessibility and disability rights outside this course.
>
> **[0:30](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=30)** Books like "Demystifying Disability" and "Disability Visibility" and LinkedIn Learning such as "Supporting Workers with Disabilities" and "Inclusion and Equity for Workers with Disabilities" are fantastic starting points for learning from the experiences of people with disabilities.
>
> **[0:48](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=48)** Please know that I will use both person first and identity First language in this course, with phrases like "people with disabilities" and "disabled people."
>
> **[0:58](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=58)** The use of person first language versus identity first language is a sensitive, important, and often deeply personal topic with many considerations.
>
> **[1:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=69)** There are no set rules about which to use when speaking broadly about accessibility like we do in this course.
>
> **[1:15](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=75)** That said, we need to consider community and individual preferences.
>
> **[1:20](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=80)** Some people may prefer person first language to describe their own disability, while others may prefer identity first.
>
> **[1:28](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=88)** Some communities may lean collectively towards using one type of language over the other.
>
> **[1:34](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=94)** While I use both types of language in this course, I recommend paying attention and asking people about their personal preferences when it's appropriate to do so.
>
> **[1:45](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=105)** Be sure to respect what people ask for.
>
> **[1:49](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=109)** Additionally, we'll talk a lot about the different parts of a product development process.
>
> **[1:54](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=114)** It will be helpful for you to have a basic knowledge of this process before we start.
>
> **[2:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=120)** We'll explore different accessibility considerations for product owners, designers, developers, and more.
>
> **[2:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=127)** You don't need to be an expert on any of these roles or responsibilities but you will find that the ones that you are most familiar with will be more meaningful to you.
>
> **[2:16](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=136)** For example, if you are a designer, you might find the section about reviewing designs more meaningful than reviewing code.
>
> **[2:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=144)** But regardless of your role or experience I recommend watching every part of this course because understanding how different roles handle accessibility is invaluable.
>
> **[2:34](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=154)** But again, you don't have to come to this learning with any knowledge to gain something valuable from following along.
>
> **[2:42](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=162)** I encourage you to join me on this journey even if you're just curious.
>
> **[2:46](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-you-should-know?u=76281980&t=166)** With that, let's dive in.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Code Keywords:** for. (1), let (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - while (1)


### 1. Accessibility, Design, and Development

> [↑ Back to Table of Contents](#table-of-contents)

#### Why accessibility matters
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=0)** - Let's talk about what accessibility is and why it matters.
>
> **[0:04](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=4)** Accessibility is about designing experiences that are open and usable for everyone.
>
> **[0:10](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=10)** Here's an example of accessibility in action.
>
> **[0:13](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=13)** A building has a staircase that people have to use to enter or exit.
>
> **[0:18](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=18)** For that building to be accessible, it would also need to have a well-designed ramp so that wheelchair users may also access it.
>
> **[0:26](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=26)** Now, this matters for many reasons, but most importantly, accessibility is a human right.
>
> **[0:31](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=31)** By making accessible experiences, we make sure that people with disabilities have the right to access critical products, services, environments, and more.
>
> **[0:43](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=43)** Our building ramp is an essential part of the design for wheelchair users, but many other people can also benefit.
>
> **[0:50](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=50)** When we solve this use case, that same design can extend to many other people, like a parent with a stroller, a person with a broken leg, or someone using a hand truck to carry heavy boxes.
>
> **[1:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=63)** Instead of thinking of disability as a personal health condition, think of disability more like a mismatched interaction between a person and an experience.
>
> **[1:14](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=74)** Take a moment to pause this video and consider, have you ever interacted with a product, service, or environment that you felt didn't meet your needs?
>
> **[1:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=84)** (uplifting music) When we consider people with permanent disabilities, such as someone with muscular dystrophy who is a wheelchair user, we design for people with other disabilities, such as someone with a broken leg, a temporary disability existing for a short time, and also someone with a more situational disability, like a parent with a child in a stroller.
>
> **[1:49](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=109)** In our example, if the building with a staircase didn't have a ramp, it would be a mismatch interaction that didn't serve the needs of its users.
>
> **[1:59](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=119)** It's our responsibility to know how our products affect these interactions and create those mismatches.
>
> **[2:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=127)** When we understand disability this way, we can fully understand the value of accessibility and create experiences that are far more usable for everyone.
>
> **[2:17](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=137)** So why does accessibility matter?
>
> **[2:20](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=140)** Because disability is a part of being human.
>
> **[2:23](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=143)** Many of us have, and all of us will experience disability in our lives.
>
> **[2:29](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=149)** So accessibility is essential to creating usable and valuable experiences.
>
> **[2:35](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=155)** Let's circle back to the product, service, or environment you thought didn't meet your needs.
>
> **[2:40](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=160)** Pause again, and ask yourself how that experience could have met those needs, and then ask yourself, who else could have benefited from that change?
>
> **[2:50](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=170)** (uplifting music) Accessibility is something we need to consider in all products, services, and environments because it's an opportunity to design well.
>
> **[3:02](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters?u=76281980&t=182)** By learning how to make an accessible experience, we can meet our users' needs while gaining competitive advantages for our product.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (1)
> **Code Keywords:** let (2), case, (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Non-Speech:** (uplifting music) (2)
> **Speakers:** - let (1)

#### Why accessibility matters in product design and development
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=0)** - One of my favorite things about digital experiences, is that they can adapt to each user's needs without affecting everyone.
>
> **[0:08](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=8)** This means our effort to make accessible experiences serves many people in unique contexts.
>
> **[0:15](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=15)** Check out this scenario.
>
> **[0:17](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=17)** Imagine a team has built an e-commerce website for a growing business.
>
> **[0:22](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=22)** While planning, designing, developing, and testing this site, the team has considered standard accessibility needs.
>
> **[0:31](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=31)** Now, one of the considerations is resizing text.
>
> **[0:35](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=35)** They've made sure that text on this site can be resized up to 200% without any loss of content or functionality.
>
> **[0:43](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=43)** This serves people with low vision who can now zoom in on the text.
>
> **[0:49](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=49)** This capability also benefits other people.
>
> **[0:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=52)** Someone with dyslexia might use this to help them read easier.
>
> **[0:57](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=57)** This can also benefit someone when there's less space, like a smartphone.
>
> **[1:01](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=61)** All the while, users who don't want to resize text, don't have to.
>
> **[1:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=66)** Just like all experiences, the digital experiences we create that meet the needs of permanent disabilities can branch out and serve many people.
>
> **[1:17](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=77)** In this situation, scalable text can benefit a person with a permanent disability who is blind, with partial vision, a person with a temporary disability, who has low vision due to cataracts, and a person who is on the go using their phone.
>
> **[1:33](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=93)** Like all accessibility, digital accessibility has the power to benefit everyone, each with their own needs and circumstances.
>
> **[1:41](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=101)** By meeting these needs, we can expand the impact of our work.
>
> **[1:46](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=106)** Accessibility in digital products can lead to innovative product designs, improved usability, and increased user retention.
>
> **[1:54](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=114)** This means our products can reach and engage more people, leading to huge competitive advantages and more market reach.
>
> **[2:02](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=122)** Here are the current top five webpage accessibility considerations: Sufficient contrast on text and graphics to make sure users can easily read and interact.
>
> **[2:14](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=134)** Well-written alternative or alt text on images, so that people who are blind, or have low vision, or have slow load times, know what is there.
>
> **[2:25](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=145)** Links and buttons with texts, labels, or alternative descriptions, so that people know where a link goes, or what a button does before selecting them.
>
> **[2:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=156)** Clear form labels and instructions, so that people can easily enter their information.
>
> **[2:42](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=162)** Indicating the language of an experience, so that it can easily be translated, or clearly spoken when using assistive technologies, like screen readers.
>
> **[2:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-accessibility-matters-in-product-design-and-development?u=76281980&t=172)** Considering accessibility early and often in our process, improves the lives of people using our products, and makes it easier for our team to succeed.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Analogies:** imagine (1), just like (1)
> **Code Keywords:** while, (1)
> **Speakers:** - one (1)

#### Who to consider in accessible design and development
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=0)** - For us to really consider accessibility, we have to listen and advocate with people with disabilities.
>
> **[0:08](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=8)** When we consider disabilities in digital interactions, we need to look at them from a physical and cognitive lens.
>
> **[0:16](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=16)** A physical lens means anything we interact with using our bodies, and a cognitive lens means anything we need to use our minds to interact with.
>
> **[0:26](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=26)** Every experience has a combination of physical and cognitive demands.
>
> **[0:33](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=33)** Interactions with technology have physical demands when we see, hear, speak, and touch.
>
> **[0:42](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=42)** So let's say a button on a page submits a form.
>
> **[0:45](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=45)** We can interact physically with this button in many different ways.
>
> **[0:50](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=50)** Here's a step-by-step.
>
> **[0:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=52)** One, the button is announced.
>
> **[0:54](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=54)** Some users will see it as they scan a page, some might hear it through a screen reader, and some might feel it on a braille keyboard.
>
> **[1:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=63)** Two, the user selects the button.
>
> **[1:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=67)** A mouse user might click the button, and a keyboard user might select it using the Enter key.
>
> **[1:12](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=72)** Some users may select this button using eye-tracking technology, some may use a mouth stick, and some may use voice commands.
>
> **[1:22](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=82)** And three, the user receives feedback that the button is selected and the form is submitted.
>
> **[1:28](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=88)** These are just a few examples of how people interact with technology physically.
>
> **[1:34](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=94)** Remember that the way you might interact with a button could be different than someone else.
>
> **[1:39](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=99)** Then what about cognitive inclusion?
>
> **[1:42](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=102)** Interactions with technology have cognitive demands when we learn, focus, make decisions, recall, and communicate.
>
> **[1:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=112)** Let's say we've created a patient form for a spa.
>
> **[1:56](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=116)** The form requires people to learn options and decide on a treatment within a time limit before being logged out.
>
> **[2:04](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=124)** To make this experience more cognitively inclusive, we could explain treatments for users who might not not be familiar with them, give users a good amount of time to choose, and warn users before being logged out so they can extend their session.
>
> **[2:22](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=142)** These are just a few ways an experience could consider cognitive needs.
>
> **[2:27](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=147)** Remember that what you need cognitively may be different from others.
>
> **[2:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=152)** This is why it's so important to listen to disabled people's perspectives and needs.
>
> **[2:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=158)** Because we all have biases.
>
> **[2:41](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=161)** By bringing in people who have different experiences, we can design more inclusively.
>
> **[2:47](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=167)** There are a few ways we can do this.
>
> **[2:49](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=169)** Use digital accessibility standards, which we will discuss more in upcoming videos, hire and retain people with disabilities on our teams, and conduct research to learn from disabled participants.
>
> **[3:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/who-to-consider-in-accessible-design-and-development?u=76281980&t=183)** Who we consider an accessible design and development is about making sure we advocate with people who have disabilities because we want to build experiences that can adapt to these needs and work well for everyone.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), else. (1), this. (1)
> **CLI Commands:** make (2)
> **Speakers:** - for (1)

#### Digital accessibility standards
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=0)** - When it comes to digital accessibility, the best place to start is with the Web Content Accessibility Guidelines or WCAG.
>
> **[0:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=9)** WCAG is a set of standards designed to make digital interactions more accessible.
>
> **[0:15](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=15)** These guides and other related standards such as the guides for authoring tools and user agents can evaluate websites, operating systems, mobile apps, really anything used digitally.
>
> **[0:28](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=28)** WCAG has four principles.
>
> **[0:31](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=31)** Explaining that digital content must be perceivable, operable, understandable, and robust.
>
> **[0:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=38)** Spelling the acronym, POUR.
>
> **[0:40](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=40)** Perceivable means removing barriers by providing alternative ways to access content.
>
> **[0:46](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=46)** For example, to make a video accessible, we would provide captions in a transcript.
>
> **[0:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=52)** Operable means that content and anything interactive can be controlled through various tools.
>
> **[0:59](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=59)** For example, making an experience work for someone who only uses their keyboard to navigate.
>
> **[1:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=66)** Understandable means using language and functionality that's understandable and consistent.
>
> **[1:12](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=72)** For example, making sure we use navigation consistently.
>
> **[1:16](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=76)** And finally, robust means content should work well across different platforms, technologies, and devices.
>
> **[1:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=84)** For example, using valid markup like HTML.
>
> **[1:29](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=89)** These principles are categories that hold our guidelines.
>
> **[1:34](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=94)** You don't need to memorize them, but understanding them can help frame the guidelines in a way that makes them easier for us to use.
>
> **[1:42](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=102)** Now let's practice looking at a guideline and understanding it.
>
> **[1:46](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=106)** In this view, we have our first principle, perceivable and some guidelines within it.
>
> **[1:51](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=111)** Guidelines usually apply in specific situations rather than across an experience.
>
> **[1:57](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=117)** So for an example, guideline 1.1 is for visuals like pictures and charts.
>
> **[2:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=123)** It means we have to offer non-visual ways of understanding anything presented visually, like alt text.
>
> **[2:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=131)** So we have our category and a sense of what we need to do.
>
> **[2:15](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=135)** But one more consideration here is the A levels of conformance.
>
> **[2:21](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=141)** There are three levels of accessibility conformance.
>
> **[2:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=144)** The A level is essential.
>
> **[2:27](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=147)** If this isn't meant, users with disabilities may be unable to read, understand, or fully operate and experience.
>
> **[2:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=156)** The AA level is ideal support required for multiple government and public institutions.
>
> **[2:42](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=162)** Many organizations set this as their baseline standard and the AA level tends to be considered specialized support.
>
> **[2:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=172)** This is usually for parts of experiences that serve specific audiences.
>
> **[2:57](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=177)** Most experiences meet varying conformance levels and there are different factors at play like what's on a page or what component we're using.
>
> **[3:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=187)** By understanding what WCAG is and how to interpret it, we can use this as a key reference point for reviewing our work.
>
> **[3:16](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=196)** Now it's your turn to practice.
>
> **[3:18](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/digital-accessibility-standards?u=76281980&t=198)** Download this video's exercise and spend 30 minutes interpreting WCAG criteria on your own.

> [!info]- Semantic Content
>
> **Env Vars:** wcag (5), pour (1), html (1)
> **Analogies:** for example (4)
> **Code Keywords:** finally, (1), let (1), public (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)
> **Versions:** 1.1 (1)
> **Speakers:** - when (1)


### 2. Design Systems and Accessibility

> [↑ Back to Table of Contents](#table-of-contents)

#### Atomic design principles
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=0)** - Now that we understand more about accessibility, how does this connect to design systems?
>
> **[0:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=6)** So a design system is like a single source of truth for a product, they're a powerful way to group related elements together, define their purpose, and clarify their delivery.
>
> **[0:17](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=17)** Basically, they establish reusable brand elements, components, and patterns.
>
> **[0:23](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=23)** With a design system we can do something once, apply it everywhere, and establish a better experience for everyone.
>
> **[0:31](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=31)** Organizations use them to make their products easier to build and scale.
>
> **[0:37](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=37)** But, most importantly, a design system is essential because it helps us scale accessibility.
>
> **[0:43](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=43)** Accessibility needs can be addressed at a system level and applied broadly, saving money, and time while benefiting our users.
>
> **[0:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=52)** This is because design systems use atomic design.
>
> **[0:57](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=57)** Atomic design is basically a mental model that helps us create scalable interfaces.
>
> **[1:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=63)** It has five distinct stages working together to create interface design systems which are: atoms, molecules, organisms, templates, and pages.
>
> **[1:16](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=76)** With atomic design, our components build on each other.
>
> **[1:20](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=80)** We start with atoms, which can be combined to create molecules, and can be further combined to form organisms.
>
> **[1:28](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=88)** These elements inform, and create templates that can apply to our pages on our platforms.
>
> **[1:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=96)** They're the easiest, and best way to scale, and interface.
>
> **[1:41](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=101)** Let's break down how atomic design scales with an example design system starting with subatomics.
>
> **[1:48](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=108)** Subatomics are things like brand colors, or typefaces.
>
> **[1:53](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=113)** They affect all the elements we create from our smallest scale to full-blown pages.
>
> **[1:59](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=119)** Atoms show all of our base styles at a glance.
>
> **[2:02](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=122)** They tend to be things like form labels, inputs, buttons, really anything that can't be broken down without ceasing to be functional.
>
> **[2:12](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=132)** For our example, we have a label, a dropdown selector, and a button each serving as a unique atom.
>
> **[2:19](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=139)** Molecules are relatively simple groups of atoms functioning together.
>
> **[2:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=144)** The result is a simple, portable, and reusable component that can be added anywhere.
>
> **[2:30](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=150)** For our example, our form label, dropdown selector, and save button can now be combined into a functional form field unit.
>
> **[2:39](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=159)** Organisms are more complex components made up of groups of molecules and/or atoms, and even other organisms.
>
> **[2:48](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=168)** They form distinct sections of an interface, demonstrate simpler components in action, and serve as repeatedly usable patterns.
>
> **[2:58](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=178)** Templates put components into a layout, and present a design's underlying content structure.
>
> **[3:04](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=184)** A template displays all the necessary page components functioning together, providing context for our relatively abstract molecules, and organisms.
>
> **[3:16](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=196)** And finally, pages are instances of templates with actual content in place.
>
> **[3:22](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=202)** They show our final interface as our users will see it, and are central for testing underlying elements.
>
> **[3:29](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=209)** Atomic design and design systems are powerful tools for accessibility.
>
> **[3:35](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/atomic-design-principles?u=76281980&t=215)** So clarifying atomic design will help us learn how we can apply accessibility at scale.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), let (1), abstract (1), finally, (1)
> **UI Navigation:** dropdown (2)
> **CLI Commands:** make (1)
> **Tools:** atom (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - now (1)

#### Checking an example system and design for accessibility
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=0)** - A well-scaled design system can make it infinitely easier to update products and meet users' needs.
>
> **[0:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=7)** Pretty easy, right? But here's the problem.
>
> **[0:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=11)** In the example design system we just created, we didn't consider accessibility.
>
> **[0:17](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=17)** So we need to step back to understand those implications.
>
> **[0:21](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=21)** Here are some of the issues we accidentally created.
>
> **[0:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=24)** We used a menu icon but didn't provide an alternative label.
>
> **[0:28](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=28)** So some users who can't see that button aren't going to know what it does because we don't have a non-visual menu label.
>
> **[0:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=38)** We didn't specify which form fields are required, so users might struggle to fill out the form without errors.
>
> **[0:47](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=47)** Our form fields have low contrast borders with a ratio of 1.48 to 1, meaning that some users may struggle to know the selection area of the field.
>
> **[0:58](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=58)** We also didn't include input instructions.
>
> **[1:01](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=61)** If we require information to be entered in a certain way, users won't be able to know that.
>
> **[1:08](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=68)** The color contrast on our save button is too low.
>
> **[1:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=71)** With a ratio of 2.38 to 1, users may struggle to read it.
>
> **[1:18](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=78)** If we create atoms, molecules, and organisms in our design system without considering accessibility, we'll have elements with accessibility issues all over a page, even across our entire experience.
>
> **[1:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=96)** Let's go back to the beginning and look at this page's accessibility, beginning with just one atom, our button.
>
> **[1:45](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=105)** Our example button may have a few shortcomings, but to keep it simple, let's focus on how it didn't meet color contrast conformance.
>
> **[1:54](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=114)** Our button has a light blue background color and white text on top.
>
> **[1:59](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=119)** The text size is 14 pixels, uppercase, and a semi bold weight.
>
> **[2:05](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=125)** We can tell this button doesn't meet contrast needs when we test it using a checker, such as the one from WebAIM.
>
> **[2:13](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=133)** This combination has a ratio of 2.39 to 1, and the contrast needs to be at least 4.5 to 1 if this button is used elsewhere.
>
> **[2:25](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=145)** This problem exists wherever it's used.
>
> **[2:29](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=149)** This issue relates to our atom and subatomics.
>
> **[2:33](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=153)** Those foundational elements can affect designs in big ways.
>
> **[2:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=158)** Now we can see the effects of using those foundations to create components without accessibility in mind.
>
> **[2:47](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=167)** But as mentioned, this combination of colors will affect more than just this component.
>
> **[2:53](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=173)** So now we know there's an issue with a component that will likely affect others because its problem is foundational.
>
> **[3:01](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/checking-an-example-system-and-design-for-accessibility?u=76281980&t=181)** This is only the beginning of our understanding of the impacts a design system can have on overall product accessibility.

> [!info]- Semantic Content
>
> **Versions:** 1.48 (1), 2.38 (1), 2.39 (1), 4.5 (1)
> **Code Keywords:** let (2), require (1)
> **Tools:** atom (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Analogies:** such as (1)
> **Speakers:** - a (1)

#### Addressing issues at a system level
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=0)** - We saw how building a design system without accessibility can cause issues, but let's talk about how adding accessibility to our system improves our products.
>
> **[0:10](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=10)** In our last video, we uncovered how a button using a certain combination of colors, font sizes and font weights could have too low of contrast, but could this same issue affect other components in our design system?
>
> **[0:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=24)** Because these colors are part of our brand, let's say our team decided to use this combination across many different components.
>
> **[0:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=32)** The same issue occurs in all components using this pattern.
>
> **[0:37](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=37)** In our example, this combination was also used on links, radio buttons, check boxes, tags, popovers, and much more.
>
> **[0:49](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=49)** This means that we didn't just create one issue in our system.
>
> **[0:54](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=54)** Turns out we actually made a lot of issues.
>
> **[0:57](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=57)** This can be a scary realization because suddenly, we find ourselves with one issue that actually branches into tens or hundreds of issues across our products.
>
> **[1:08](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=68)** But let's turn this negative into a positive.
>
> **[1:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=71)** While this issue impacts many pages and products, our fix can also impact at that same scale.
>
> **[1:18](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=78)** Let's start with that button and fix it.
>
> **[1:21](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=81)** The color contrast on the save button is not high enough with a current ratio of 2.38 to one.
>
> **[1:27](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=87)** The ratio needs to be at least 4.5 to one, but our brand palette has a darker blue that we can use for the background instead of the light blue.
>
> **[1:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=98)** If we use the dark blue background color, our color contrast would pass with a ratio of 6.63 to one.
>
> **[1:45](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=105)** If we go with this option, we can then apply the same color combination across all other components with the same issue and fix all of them simultaneously with less effort and time.
>
> **[1:58](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=118)** The positive side of this is that we can find this issue in one place, and with our design system, we can see how many other places it occurs.
>
> **[2:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=127)** Then we can fix it at the design system level and watch as we fix branches of the same issue across all applications.
>
> **[2:17](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=137)** That's the power of accessibility in our design systems.
>
> **[2:21](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/addressing-issues-at-a-system-level?u=76281980&t=141)** It may seem like a lot of work, but once you dive in, the benefits are so fantastic.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (1)
> **Versions:** 2.38 (1), 4.5 (1), 6.63 (1)
> **CLI Commands:** find (2)
> **Definitions:** means that (1)
> **Speakers:** - we (1)

#### Why design systems must consider accessibility
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=0)** - Accessibility needs exist across many different parts of a design system.
>
> **[0:05](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=5)** No matter how accessible the components themselves are, we have to support accessible implementation in designs and code.
>
> **[0:14](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=14)** Without that, our consuming teams can still make mistakes.
>
> **[0:18](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=18)** That's why we have to make accessible design systems.
>
> **[0:21](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=21)** We are the foundation for accessible products.
>
> **[0:25](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=25)** Design systems that fail to account for accessibility create products that fail accessibility conformance and most importantly, fail users.
>
> **[0:34](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=34)** Instead, creating a more accessible design system empowers teams to build more inclusive products and empowers users with disabilities, and frankly, all users to thrive using our products.
>
> **[0:49](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=49)** So what do we need to consider to make an accessible design system?
>
> **[0:54](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=54)** First, we need to support designers use of components.
>
> **[0:58](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=58)** Designers should have access to all components within design tools like Figma.
>
> **[1:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=63)** They need to know how a component should be used and when, because using a component incorrectly can have ramifications.
>
> **[1:13](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=73)** Even with an accessible design system, designers are still making decisions that impact product accessibility so we have to help them make the right decisions.
>
> **[1:23](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=83)** Secondly, we need to support developers' ability to implement accessible code.
>
> **[1:29](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=89)** We have to make sure that the component code itself is accessible but also provide clarity on what adjustments a developer can make or might need to make.
>
> **[1:39](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=99)** Developers should be empowered with testing tools and documentation to understand how a component should behave for certain interactions.
>
> **[1:48](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=108)** Like keyboard only interactions.
>
> **[1:51](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=111)** Like designers, developers also make decisions that impact product accessibility.
>
> **[1:57](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=117)** So again, we need to help them make informed decisions.
>
> **[2:02](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=122)** And finally, all consuming teams should be able to reference design system documentation to understand what components exist, as well as when and how to use them.
>
> **[2:13](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=133)** Documentation can also support needs around accessible content writing and can help clarify to teams any outstanding accessibility issues there may be.
>
> **[2:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=144)** We can support our teams by helping them learn when to use something, how to use it and how to test it.
>
> **[2:31](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=151)** These are opportunities for us to consider accessibility.
>
> **[2:35](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=155)** No matter our design system's maturity level.
>
> **[2:39](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/why-design-systems-must-consider-accessibility?u=76281980&t=159)** We can use these practices to improve our overall product accessibility across all disciplines, from design, to development and beyond.

> [!info]- Semantic Content
>
> **CLI Commands:** make (9)
> **Code Keywords:** finally, (1)
> **Tools:** figma (1)
> **Speakers:** - accessibility (1)


### 3. Setting Up a Design System Audit

> [↑ Back to Table of Contents](#table-of-contents)

#### What is an accessibility audit?
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=0)** - An accessibility audit is one of many ways to help us establish better accessibility in our design systems.
>
> **[0:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=7)** But what is an accessibility audit, and how can it help us achieve the goal of having an accessible design system?
>
> **[0:14](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=14)** Accessibility audits are a way to find and log issues so we can prioritize, describe, and ultimately fix them.
>
> **[0:22](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=22)** An audit can evaluate anything, from a single page to a single component, or even our entire design system.
>
> **[0:31](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=31)** This practice can be used for a mature system or even starting from our very first component.
>
> **[0:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=38)** We can review our designs, code, documentation, and more using WCAG to inform what we find and assess the impact.
>
> **[0:47](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=47)** We're going to discuss impact from a few different perspectives.
>
> **[0:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=52)** So first, we'll prioritize the impact on users.
>
> **[0:55](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=55)** Essentially, we need to understand how big of a barrier an issue creates for our end users.
>
> **[1:02](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=62)** We also need to look at the impact on our organization.
>
> **[1:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=66)** If a component has issues and is being used for something essential to our business or organization, it has a higher impact.
>
> **[1:14](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=74)** Then, we should understand the impact by usage.
>
> **[1:17](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=77)** If a component is being used in many places or across many products, it has a big impact.
>
> **[1:25](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=85)** Using a combination of considerations like these can help us prioritize issues to be fixed sooner rather than later, because our ultimate goal is to fix them.
>
> **[1:35](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=95)** Keep in mind that there's no perfect time to adopt accessibility auditing as a practice.
>
> **[1:41](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=101)** An audit doesn't need to be saved for the end of your development cycle.
>
> **[1:46](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=106)** It can be used throughout your design system's development cycle, and in fact, should be.
>
> **[1:51](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=111)** The sooner we review our work for accessibility, the more we can benefit our end users while also saving time and money.
>
> **[1:59](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=119)** As an accessibility issue moves through our development lifecycle, fixing it actually takes more time and money.
>
> **[2:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=126)** On average, an issue can cost five times more if it reaches development, 10 times more if it reaches component testing, 15 times more if it reaches acceptance testing, and 30 times more if it reaches production.
>
> **[2:23](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=143)** So if you're wondering when the right time to conduct an accessibility audit is, the answer is now.
>
> **[2:29](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=149)** We can use this no matter what stage our design system is in, or even what stage our experience itself is in.
>
> **[2:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=156)** Everything we'll discuss can be applied to our design system.
>
> **[2:40](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=160)** But it can also be applied to anything we do to build digital experiences.
>
> **[2:46](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-is-an-accessibility-audit?u=76281980&t=166)** Whether you're watching this while using a mature system, or you're watching, wondering how to make your new components accessible as you build them, accessibility auditing is going to be super helpful for your work.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** super (1)
> **Env Vars:** wcag (1)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - an (1)

#### Considerations for an accessibility audit
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=0)** - An audit empowers us to find and prioritize accessibility issues.
>
> **[0:05](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=5)** But what exactly needs to be considered for us to do this?
>
> **[0:10](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=10)** No matter what you plan to review, you will most likely use WCAG or similar guidelines like the authoring tools accessibility guidelines or user agent accessibility guidelines.
>
> **[0:21](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=21)** So it's important to understand WCAG and define your conformance level goals.
>
> **[0:27](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=27)** In our audit, we'll use WCAG to map and prioritize issues.
>
> **[0:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=32)** As we discussed, the A levels are the current method WCAG applies to conformance.
>
> **[0:37](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=37)** So before we start our audit, we need to ask ourselves, what level of accessibility are we reviewing for?
>
> **[0:45](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=45)** Take time with your team to define your goals.
>
> **[0:48](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=48)** If your team is using an accessibility audit as a starting point, maybe it's too early to define this.
>
> **[0:54](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=54)** So instead, I recommend checking for A and AA items.
>
> **[1:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=60)** Generally, we want to review all A and AA levels as these are ideal accessibility goals, but then how will we review for accessibility conformance?
>
> **[1:12](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=72)** Auditing should include two evaluation methods: automated testing and manual testing.
>
> **[1:18](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=78)** Automated accessibility testing means using automated tools to test for us.
>
> **[1:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=84)** This tends to be most useful when there's code to review because an automated tool can easily comb through and decipher code.
>
> **[1:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=92)** Some examples of automated testing tools are: Accessibility Insights, axe DevTools, axe-linter, and many more.
>
> **[1:42](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=102)** However, automated testing isn't perfect.
>
> **[1:44](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=104)** Using just automated testing in an audit can create major gaps.
>
> **[1:50](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=110)** Think of automated testing similar to spellchecker when you're creating a Word document.
>
> **[1:55](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=115)** Sometimes spellcheck might miss mistakes, and sometimes spellcheck might flag issues that aren't actually issues.
>
> **[2:02](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=122)** This is where manual review becomes helpful.
>
> **[2:05](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=125)** It divides these gaps between what automated testing can capture and what actually exists for users.
>
> **[2:13](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=133)** Manual testing is conducted by people like you and me, specifically accessibility specialists, assistive technology users, and people with disabilities.
>
> **[2:23](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=143)** Manual testing can help us find issues that automated tools can't catch, remove unnecessary issues, and include more comprehensive testing with tools like assistive technology.
>
> **[2:34](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=154)** Ideally, an accessibility audit should combine automated and manual testing.
>
> **[2:40](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=160)** But if you choose to start with just an automated test, that's okay too, just let your team know.
>
> **[2:47](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=167)** Remember, the right time to start your audit is now.
>
> **[2:50](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=170)** If you're looking for support on the automated and manual parts of any audit, you can hire individuals with these skills or bring in support from organizations like Deque, Fable, Knowability, and many more.
>
> **[3:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=187)** Remember, for a holistic accessibility audit, we need to use conformance guidelines like WCAG.
>
> **[3:13](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=193)** We also need to make sure we evaluate with automated and manual testing.
>
> **[3:18](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=198)** This will set us up for success so we can find, prioritize, and ultimately fix any issues we find.
>
> **[3:25](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/considerations-for-an-accessibility-audit?u=76281980&t=205)** For more testing tools and organizations, check out the resources document.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4), make (1)
> **Env Vars:** wcag (5)
> **Code Keywords:** this. (1), catch, (1), let (1)
> **Cross-References:** we discussed (1)
> **Analogies:** similar to (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - an (1)

#### What do you review in a design system accessibility audit?
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=0)** - Let's say we're reviewing a single webpage for accessibility.
>
> **[0:04](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=4)** Maybe this page had no design files, and the source code files have been lost.
>
> **[0:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=9)** So all of our review would happen on the webpage itself, even if some of our findings are related to design or code.
>
> **[0:17](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=17)** In our review, maybe only a few elements are being used on the page, so we don't really need to consider entire components with multiple uses as much as single elements.
>
> **[0:28](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=28)** It would likely be a shorter, simpler audit.
>
> **[0:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=32)** This example would look different than a design system review, which needs us to be way more comprehensive.
>
> **[0:39](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=39)** A design system audit is more detailed because design systems have much more nuance and complexity.
>
> **[0:45](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=45)** What makes a design system so powerful is also what makes it more complex to review.
>
> **[0:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=52)** While we can reduce a design system audit's scope, a more holistic review will include at least three things.
>
> **[0:59](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=59)** Designs, are components accessible by design?
>
> **[1:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=63)** Are we supporting designers' use of components within design files, like Figma, in a way that empowers accessibility in their design?
>
> **[1:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=71)** Development, are components accessible in code?
>
> **[1:15](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=75)** Are we ensuring all development frameworks we support, like React and Angular, include accessible implementation?
>
> **[1:23](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=83)** Are we supporting developers' use of components within code in a way that empowers accessibility in development and testing?
>
> **[1:31](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=91)** Documentation, do we clarify what components exist and how to use them with accessibility in mind?
>
> **[1:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=98)** Do we help people know how to test components for accessibility?
>
> **[1:42](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=102)** Are we transparent about known issues?
>
> **[1:46](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=106)** In our audit, we are still reviewing atoms, molecules, and organisms of a design system in each of these areas.
>
> **[1:53](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=113)** Still, our considerations are going to depend on where a component is used and who's using it.
>
> **[2:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=120)** These factors are all important and necessary for an effective design system review, no matter our scope.
>
> **[2:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=127)** This is because accessibility isn't just a designer's job or just a developer's job, accessibility is everyone's job.
>
> **[2:16](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=136)** To truly support our product accessibility, we have to support all disciplines and roles using our system.
>
> **[2:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=144)** Remember that these are only three factors that affect most design systems.
>
> **[2:29](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=149)** Every design system is a little different and has unique needs.
>
> **[2:33](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=153)** For example, if our design system outlines clear backend or server side development considerations, we might want to review our API structure for accessibility.
>
> **[2:44](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/what-do-you-review-in-a-design-system-accessibility-audit?u=76281980&t=164)** These are just the primary needs when reviewing components, so diverge and expand your audit in any way that benefits teams using your design system and the end users interacting with your components and patterns.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** api (1)
> **Tools:** figma (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - let (1)

#### Setting up an accessibility audit
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=0)** - Before starting an accessibility audit, we should know exactly what we want to review.
>
> **[0:05](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=5)** Let's go through the steps needed to plan our design system audit.
>
> **[0:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=9)** Accessibility conformance level.
>
> **[0:12](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=12)** The most important part of our audit is naturally the level of accessibility we're checking for.
>
> **[0:17](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=17)** Perhaps our team wants to start capturing only A level issues and then get to AA in the next audit.
>
> **[0:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=24)** We may want to capture issues specifically affecting certain audiences such as screen reader users.
>
> **[0:30](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=30)** While we want to make an experience as accessible as possible for all users, we may take multiple reviews to reach that point.
>
> **[0:39](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=39)** Establish goals.
>
> **[0:41](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=41)** Do we want to prove to leadership that accessibility issues exist?
>
> **[0:45](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=45)** Do we want to review new components in development?
>
> **[0:48](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=48)** Maybe we want to review our whole system.
>
> **[0:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=52)** Having goals before starting an audit can be a helpful way of making sure our motivations are clear.
>
> **[0:59](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=59)** Define scope.
>
> **[1:01](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=61)** Are we hoping to audit the entire existing design system?
>
> **[1:05](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=65)** Maybe we want to just audit what's currently used in one experience.
>
> **[1:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=69)** We have to define the scope before we begin.
>
> **[1:13](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=73)** Otherwise, we could find ourselves endlessly auditing with no delivery in sight.
>
> **[1:19](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=79)** Clarify timeline.
>
> **[1:21](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=81)** We need to make sure that we have enough time and resources to review everything we want and communicate with leadership about the time we need.
>
> **[1:30](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=90)** A timeline is also helpful for us to document so that when we come back to an audit later, we know what might have changed since the initial review.
>
> **[1:39](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=99)** Review process.
>
> **[1:41](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=101)** Will your audit only include automated testing or will it combine automated and manual testing?
>
> **[1:48](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=108)** If you're using automated tools, what will you use?
>
> **[1:51](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=111)** Will this audit include tests with assistive technology users?
>
> **[1:55](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=115)** Define these details to make it clear how issues were found and how to recreate them.
>
> **[2:02](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=122)** Establish a review team.
>
> **[2:04](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=124)** One person or many people can conduct an accessibility audit.
>
> **[2:08](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=128)** Whoever is included in your team should be capable of testing everything in scope.
>
> **[2:14](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=134)** So if we have a design specific review, we should bring in accessibility focused designers.
>
> **[2:19](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=139)** If we're only reviewing code, we might bring in accessibility focused developers.
>
> **[2:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=144)** With a combination of elements, we could benefit from having a larger team to review at different parts at the same time.
>
> **[2:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=152)** By planning the details of our audit, we can ensure it's complete and use it to make fixes.
>
> **[2:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=158)** Now it's your turn to practice planning your audit.
>
> **[2:42](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=162)** Open the accessibility audit spreadsheet template from your exercise files and navigate to the background page.
>
> **[2:49](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/setting-up-an-accessibility-audit?u=76281980&t=169)** Take 10 minutes to consider how you might fill out this section in your audit.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (1)
> **Code Keywords:** let (1), for. (1)
> **UI Navigation:** open the (1), navigate to (1)
> **Exercise Files:** template (1), exercise files (1)
> **Cross-References:** in the next (1)
> **Speakers:** - before (1)

#### Creating an accessibility audit document
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=0)** - Now that we know what we want to review, let's set up our documentation to store our results.
>
> **[0:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=6)** Documentation is an important way to log issues and keep track of progress as we fix them.
>
> **[0:12](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=12)** We should be able to store multiple data points per issue.
>
> **[0:16](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=16)** This is why many accessibility reviewers use spreadsheets or tables.
>
> **[0:20](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=20)** Automated testing tools can also automatically generate these documents.
>
> **[0:26](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=26)** As a starting point, some accessibility testers use automated tools to create their documentation, then fine-tune it as needed.
>
> **[0:35](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=35)** Whatever type of documentation you set up should include some key data points.
>
> **[0:40](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=40)** Consider including impact.
>
> **[0:43](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=43)** Any issue logged should account for impact, usually using three to five levels, such as low, moderate, high, and critical.
>
> **[0:53](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=53)** Theme.
>
> **[0:54](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=54)** If you notice reoccurring elements, you can group them into themes.
>
> **[0:58](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=58)** For example, if many of our issues are related to color contrast and usage, we might use color as a theme.
>
> **[1:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=66)** This will make it easier for us to present high-level data.
>
> **[1:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=69)** Component or Item name.
>
> **[1:12](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=72)** Every line item we add should include the name of the component or item we're reviewing.
>
> **[1:18](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=78)** WCAG criteria.
>
> **[1:19](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=79)** Include WCAG criteria to prioritize issues and show why they were added.
>
> **[1:25](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=85)** Conformance level.
>
> **[1:27](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=87)** Include the A level to show that the issue was captured in alignment with our goals.
>
> **[1:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=92)** This will also help us assess impact.
>
> **[1:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=96)** Description.
>
> **[1:37](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=97)** Include a description and any steps for recreating an issue.
>
> **[1:41](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=101)** Put this in plain language to help others understand the issue and who's impacted by it.
>
> **[1:47](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=107)** Fix recommendations.
>
> **[1:49](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=109)** Help your team understand possible fixes for an issue so they consider how to fix them.
>
> **[1:55](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=115)** Testing methods.
>
> **[1:56](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=116)** Note if the issue was captured with automated testing, manual testing, or a combination of the two.
>
> **[2:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=123)** Links.
>
> **[2:05](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=125)** Link to the issue so it can be found later.
>
> **[2:08](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=128)** This could be a link to a design file, a website, a code repository, or whatever works.
>
> **[2:15](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=135)** Date.
>
> **[2:16](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=136)** Even though we include a broad timeline in our background page, adding a date per item is also valuable.
>
> **[2:23](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=143)** Notes.
>
> **[2:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=144)** When we have additional resources or notes to add, having a dedicated spot for them could be helpful.
>
> **[2:31](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=151)** This document might seem like a lot to share with stakeholders, but don't worry about how it'll be presented to leadership just yet.
>
> **[2:39](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=159)** We'll get to that later.
>
> **[2:40](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=160)** Right now our goal is just to make it easy to log issues and capture what is needed to fix them.
>
> **[2:47](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=167)** Remember, this document is for you and your team.
>
> **[2:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=172)** If you need more or fewer data points, diverge from these recommendations.
>
> **[2:57](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=177)** What matters is that you have what you need to act on your audit.
>
> **[3:02](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=182)** Take another look at the accessibility audit spreadsheet template in your exercise files and navigate to the audit page.
>
> **[3:10](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=190)** Here you'll find all these data points already laid out for you.
>
> **[3:14](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/creating-an-accessibility-audit-document?u=76281980&t=194)** Take a few minutes to consider how you might add more, or less to your audit.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Env Vars:** wcag (2)
> **Exercise Files:** template (1), exercise files (1)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** set up (2)
> **Code Keywords:** let (1)
> **UI Navigation:** navigate to (1)
> **Definitions:** is an  (1)


### 4. Auditing a Design System for Accessibility

> [↑ Back to Table of Contents](#table-of-contents)

#### Reviewing designs for accessibility
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=0)** - Did you know that accessibility issues can actually originate in our designs?
>
> **[0:05](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=5)** In a case study audit by DQ, they found 67% of accessibility issues were design related.
>
> **[0:13](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=13)** So it's important to review design in terms of interaction, content and visual elements.
>
> **[0:19](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=19)** When reviewing designs, you can use files like Figma or even component repositories like Storybook.
>
> **[0:26](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=26)** With design review, we tend to use manual testing the most.
>
> **[0:31](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=31)** There are automated tools for some things like color contrast, but automated tools tend to be less effective because they can't comb through designs like they can code.
>
> **[0:42](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=42)** Designs are just too flexible.
>
> **[0:44](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=44)** A rectangle could represent a button in one place, but in another, it could just be a background color.
>
> **[0:51](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=51)** In design files, automated tools can struggle to understand our intentions, so we tend to do more manual review for design accessibility.
>
> **[1:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=60)** Because of this, the QuickCAD Quick Reference Guide and similar guides are our best review tools.
>
> **[1:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=67)** I mentioned reviewing interactions, content and visuals in design.
>
> **[1:12](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=72)** Let's break down what comes up in each of these categories.
>
> **[1:16](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=76)** In interaction design, we review for animation, bypass blocks, different states like focus and hover interactions, layout consistency, navigation and navigability, pointer gestures, responsiveness, tab order and reading order, and timing and timeouts.
>
> **[1:37](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=97)** For content design, we review for alternative text, captioning and transcripts, error suggestion, heading structure, input feedback, labels and instructions, page titles, and purposeful link text.
>
> **[1:53](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=113)** And for visual design, we want to review color contrast, color usage, consistent visuals, legible typeface usage, and visual interface design.
>
> **[2:05](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=125)** Let's look at a design issue from our sample system.
>
> **[2:08](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=128)** This is a form that uses a set of inputs.
>
> **[2:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=131)** Right now, we are showing a newsletter sign-up and the email input is the only one that's red.
>
> **[2:18](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=138)** This appears to be an error, but there's no description on how to fix it, and it relies on color to indicate that an error has occurred.
>
> **[2:26](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=146)** This design has created two accessibility issues relating to 3.3.3 Error Suggestion and 1.4.1 Use of Color.
>
> **[2:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=156)** By finding this issue, we can update our input errors to include icons to help distinguish the error beyond just the use of red and content that clarifies why the issue happened.
>
> **[2:49](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=169)** This component could have other issues, so this is just one opportunity for improvement.
>
> **[2:55](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=175)** Just remember, that accessible design is about more than just colors and fonts.
>
> **[2:59](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=179)** Like all user experience design, accessible design goes beyond visual considerations alone.
>
> **[3:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=186)** Take a moment to practice reviewing designs for accessibility.
>
> **[3:10](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=190)** This exercise will walk you through our interaction, content and visual design considerations in depth and show you how to review an example design.
>
> **[3:20](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=200)** To get started, create a Figma account if you don't already have one.
>
> **[3:25](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=205)** Open the reviewing designs for accessibility exercise folder.
>
> **[3:30](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=210)** Download the .fig file.
>
> **[3:33](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=213)** Import the Figma by either dragging it and dropping it into your app viewport, or by selecting the import file from one of your project pages.
>
> **[3:43](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-designs-for-accessibility?u=76281980&t=223)** Download any assets you need such as typefaces from the assets folder.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1), interface (1)
> **Tools:** figma (3)
> **Versions:** 3.3.3 (1), 1.4.1 (1)
> **Documentation:** reference guide (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### Automated testing for front-end code
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=0)** - It's time to switch gears from design to code.
>
> **[0:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=3)** Unlike reviewing designs, automated testing tools work well when reviewing code.
>
> **[0:08](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=8)** Automated accessibility testing uses software to scan pages, products and components for accessibility issues against predefined accessibility conformance standards.
>
> **[0:19](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=19)** That said, you should do both automated and manual testing to capture everything.
>
> **[0:25](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=25)** We'll talk about both types of review starting with automated testing.
>
> **[0:30](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=30)** Automated accessibility testing can happen in live experiences, component repositories, and even in code editors as we build.
>
> **[0:39](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=39)** In most audits, you will likely review live code.
>
> **[0:42](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=42)** This code has been pushed to production and is available for end users.
>
> **[0:48](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=48)** This could mean reviewing a website, a mobile app, or the like.
>
> **[0:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=52)** For design systems you might find reviewing code wherever you're hosting your components is easier and more efficient.
>
> **[1:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=60)** For many folks, that can be a place like Storybook.
>
> **[1:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=63)** Reviewing both live code and isolated components can help us see how components are being used while considering their underlying structure.
>
> **[1:13](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=73)** It's good to compare the intention of our component versus what developers actually do to implement it.
>
> **[1:21](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=81)** Let me show you how automated testing works.
>
> **[1:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=84)** For my review, I will use a site from a fake organization called the Orange Valley Community Arts Association.
>
> **[1:31](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=91)** I'll use a plugin called Accessibility Insights to run an automated test.
>
> **[1:37](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=97)** Keep in mind, most automated testing tools are similar in how they test and show issues, so you can choose whatever works best.
>
> **[1:47](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=107)** I'm going to turn on FastPass and then automated checks.
>
> **[1:54](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=114)** And in a moment we will notice that these little red boxes are overlaid on the site.
>
> **[1:59](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=119)** These are the issues that our tool found automatically.
>
> **[2:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=123)** Let's go ahead and select this one.
>
> **[2:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=127)** As I select this, I get a dialogue that tells me more about the issue.
>
> **[2:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=131)** In this case, the post date on our class list is too low in contrast, which would make it hard for people to read.
>
> **[2:20](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=140)** We also get some handy information about the issue in our dialogue, including what the issue relates to, color contrast, the WCAG success criteria, WCAG 1.4.3, the code snippet, the colors in the foreground and background, and even a recommendation for how we might fix it.
>
> **[2:44](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=164)** All of this information will be helpful for us as we add issues to our documentation.
>
> **[2:50](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=170)** Let's leave this dialogue so that I can show you another issue.
>
> **[2:56](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=176)** Let's select this other box around another post date.
>
> **[3:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=180)** When I open this dialogue, we can see the information is the same as the other one.
>
> **[3:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=186)** That's because this is the same issue happening in multiple instances of the same component.
>
> **[3:14](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=194)** So we might just log the first instance for our audit, since we can fix it at the component level.
>
> **[3:21](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=201)** Remember, even though I'm using a website for my review, your audit doesn't have to be a full experience.
>
> **[3:29](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=209)** You can test isolated components for many design system audits even if you also review a live experience.
>
> **[3:37](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=217)** What I shared is just one thing automated tools can do, so practicing yourself is worth it.
>
> **[3:43](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=223)** To practice, install one of the plugins in the resources exercise file under the automated testing tools header and open our test site at [orangevalleycaa.org](https://orangevalleycaa.org).
>
> **[3:57](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/automated-testing-for-front-end-code?u=76281980&t=237)** Try finding one or two things I didn't find in my review.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), switch (1), this, (1), case, (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** wcag (2)
> **URLs:** [orangevalleycaa.org](https://orangevalleycaa.org) (1)
> **Versions:** 1.4.3 (1)
> **Exercise Files:** exercise file (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** install (1)

#### Manual testing for front-end code
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=0)** - We've talked about automated testing but we know no audit is complete without manual tests.
>
> **[0:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=7)** Remember, manual testing is conducted by people like you and me.
>
> **[0:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=11)** Many automated tools these days also have guided manual tests, which means that we can get a little support.
>
> **[0:19](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=19)** Even though it looks a little different, manual testing can happen just about anywhere automated testing can, such as in live experiences, component repositories, and code editors.
>
> **[0:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=32)** For manual tests, we tend to review keyboard usability to find out if someone can use an experience without a mouse, screen reader usability to find out if someone can use the experience with a screen reader, such as JAWS, NVDA, Narrator, VoiceOver or TalkBack.
>
> **[0:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=52)** Magnification and zoom testing to find out if someone can zoom the experience up to at least 200%.
>
> **[0:59](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=59)** Different states.
>
> **[1:01](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=61)** Automated tools can't always figure out what happens when a user interacts.
>
> **[1:05](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=65)** For example, if a form can't submit and has an error message, that's a different state and we need to check it.
>
> **[1:13](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=73)** Valid markup.
>
> **[1:15](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=75)** Some markup isn't helpful even if our automated checker didn't notice.
>
> **[1:19](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=79)** For example, maybe we provided alt text for an image of a cat, but the alt text just reads image.
>
> **[1:27](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=87)** That's still not accessible.
>
> **[1:30](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=90)** Captions and transcripts.
>
> **[1:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=92)** If an experience includes videos, podcasts and other multimedia, it needs to include captions and/or transcripts.
>
> **[1:42](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=102)** I don't expect anyone to become an expert at manual testing just from these videos, but I do think it's a great time to start practicing.
>
> **[1:51](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=111)** One of the best starting points is by doing some keyboard testing.
>
> **[1:55](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=115)** Let's try it together.
>
> **[1:57](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=117)** I'll open our Orange Valley Community Arts Association site and try some keyboard tests.
>
> **[2:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=123)** Let's use Accessibility Insights again to help us.
>
> **[2:08](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=128)** I'll open FastPass again, but this time I'll select tab stops and use the visual helper to guide us.
>
> **[2:18](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=138)** When I go back to the Orange Valley site, the test has started so we can hit the tab key.
>
> **[2:26](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=146)** When we do this, our tool shows us the order that users would tab through interactive items on the page.
>
> **[2:33](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=153)** Our goal for this test is to make sure that all interactive elements can be reached using the tab and arrow keys, there are no interactive elements that trap input focus, all interactive elements have a visible indicator when in focus, the tab order is similar to the visual logical order, and focus does not move unexpectedly without a user initiating it.
>
> **[3:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=180)** As I go through this page, I can see that the tab order is similar to how the page is laid out but instead of me doing this whole test for you, I want you to try it on your own.
>
> **[3:13](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=193)** Try using your automated tool to do a guided test or just try tapping through this page and see what happens.
>
> **[3:21](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=201)** Consider the list of goals for us to make sure this experience is keyboard accessible.
>
> **[3:27](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=207)** Do you think it meets all of these goals?
>
> **[3:30](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=210)** Here's a hint.
>
> **[3:31](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=211)** Try going through this page using your tab and arrow keys without having any automated tools to help.
>
> **[3:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/manual-testing-for-front-end-code?u=76281980&t=218)** Is it clear what's in focus?

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (2), cat (1)
> **Analogies:** such as (2), for example (2), similar to (2)
> **Code Keywords:** let (2), this, (1)
> **Env Vars:** jaws (1), nvda (1)
> **Cross-References:** go back to (1)
> **Speakers:** - we (1)

#### Reviewing documentation for accessibility
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=0)** - You'll probably find you don't capture everything that needs to be made more accessible when just auditing your components.
>
> **[0:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=9)** That's because designers and developers tend to work in complex systems, and design systems are all about intent.
>
> **[0:18](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=18)** We intend for components to be used and built in specific ways, but then sometimes our components intent doesn't match how it's applied.
>
> **[0:28](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=28)** Sometimes our teams use or build them incorrectly, so there's always going to be circumstances where what you fix in your components doesn't fix how they're being used.
>
> **[0:41](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=41)** Your atoms might be excellent and accessible, but your organisms may need more attention because they're more unique to specific circumstances.
>
> **[0:50](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=50)** Or perhaps the implementation of your components isn't accessible because of things like the copy applied to them.
>
> **[0:58](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=58)** This is part of why we went through our atomic scale, to help us understand that there's a difference between intent and application.
>
> **[1:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=67)** Starting with the components will go very far, but it's not necessarily going to fix everything in your live experience because the application is different.
>
> **[1:18](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=78)** That's where our design system documentation becomes most helpful.
>
> **[1:23](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=83)** Designers and developers look to design system guidelines to help show them a component's intended use and how they should best apply it.
>
> **[1:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=92)** So without clear guidance, our teams may struggle.
>
> **[1:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=96)** We can review documentation to bridge these gaps.
>
> **[1:40](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=100)** In some cases, you may consider including documentation in your initial audit, but a documentation review can also happen after your initial audit.
>
> **[1:51](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=111)** As you conduct your audit and you dig into the results, it's possible that you discover its origins in your documentation, which may spur a documentation-specific audit.
>
> **[2:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=123)** Remember that our design system-consuming teams are also our users.
>
> **[2:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=129)** Start your documentation review by asking consuming teams how they use it and how they make their experiences accessible with what's provided.
>
> **[2:20](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=140)** Just like other parts of our audit, we can prioritize documentation improvements based on what teams use the most and what creates the most significant barriers to users.
>
> **[2:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=152)** Learn from design systems that are considering accessibility and how they do so to get a sense of how your team might start approaching better documentation.
>
> **[2:43](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=163)** Design systems such as Microsoft's Fluent have feedback embedded into component documentation.
>
> **[2:50](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=170)** Others, such as IBM's Carbon, choose to include documentation in a consistent context, like an accessibility tab for each component.
>
> **[3:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=180)** How each organization chooses to document accessibility is going to vary based on a team's needs.
>
> **[3:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=187)** Take time with your organization to consider unique needs and document opportunities for better clarity.
>
> **[3:15](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/reviewing-documentation-for-accessibility?u=76281980&t=195)** Learn from your teams to see how they use the system, and find ways to help them make the right decisions at the right time.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (2)
> **Analogies:** such as (2), just like (1)
> **Env Vars:** ibm (1)
> **Speakers:** - you (1)


### 5. Documenting a Design System Accessibility Audit

> [↑ Back to Table of Contents](#table-of-contents)

#### Adding issues to your original document
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=0)** - Now that we've found some issues, it's time to add them to the documentation we set up.
>
> **[0:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=7)** Everything we put in here should be actionable and easy to reference when our teams go to fix issues.
>
> **[0:14](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=14)** Remember, we want to use this both to capture and address issues, so it's really meant for us as reviewers and for our teams to use as a log to manage what's been fixed.
>
> **[0:28](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=28)** This documentation is not so much meant for stakeholders and leaders.
>
> **[0:34](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=34)** Since we're doing a design system specific audit, we should start with capturing each item by component name first.
>
> **[0:42](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=42)** Let's start by adding a color contrast issue to keep it simple.
>
> **[0:48](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=48)** On the Orange Valley Community Arts Association homepage, we found that the post dates for each class didn't pass needed contrast.
>
> **[0:58](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=58)** This issue happened multiple times on the homepage, so we might be tempted to add each instance to our audit, but since this is a design system audit, we don't have to do that.
>
> **[1:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=71)** We just need to log it once and describe its component or item name.
>
> **[1:17](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=77)** We do this because we only need to fix the component itself, not necessarily every instance it's used.
>
> **[1:25](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=85)** As we've discussed, one fix in our system branches out to all instances.
>
> **[1:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=92)** That said, if you want, you can also describe how often this issue occurs on this page or in this entire experience by adding another column for instances.
>
> **[1:43](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=103)** Add any details that are helpful for your audit and your team.
>
> **[1:48](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=108)** Let's go ahead and add the class name we can see in the markup post date to our Component/Item name column.
>
> **[1:57](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=117)** We can skip past the other columns for a moment.
>
> **[2:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=120)** We'll come back to them.
>
> **[2:02](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=122)** While I'm here, I'll be sure to select Automated Test in our Testing Method column.
>
> **[2:08](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=128)** Most color contrast issues are found with automated tools, and that's no different for us.
>
> **[2:14](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=134)** We did make sure that this issue was flagged correctly so we could potentially say Both in the Testing Method column.
>
> **[2:22](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=142)** Either approach is fine.
>
> **[2:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=144)** Just use your best judgment to decide.
>
> **[2:27](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=147)** I'm also going to add the URL of this issue to our audit so we have it for later.
>
> **[2:33](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=153)** In your audit, you might not link to a site, but instead, maybe a design file or a code repository.
>
> **[2:40](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=160)** You can link wherever.
>
> **[2:42](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=162)** Just make sure to add an example of where the issue is happening so we can find it later.
>
> **[2:48](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=168)** These are just the starting pieces of information we want to have for the issue we find.
>
> **[2:54](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/adding-issues-to-your-original-document?u=76281980&t=174)** We still have some things to add to our documentation, and we will discuss those in our next few videos.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (2)
> **Code Keywords:** let (2), pass (1)
> **Env Vars:** url (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)

#### Mapping issues to WCAG criterion
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=0)** - Now it's time to grab our WCAG criteria that's related to the issue.
>
> **[0:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=6)** Even if we found the issue with an automated tool or using another accessibility guide, we still have to map issues to WCAG.
>
> **[0:15](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=15)** This is because the WCAG are internationally and legally recognized standards.
>
> **[0:20](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=20)** They will have the most sway with our organizations and provide the most clarity on the issue.
>
> **[0:27](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=27)** Let's open our quick reference guide.
>
> **[0:30](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=30)** We know this is a color contrast issue, so let's go to that section.
>
> **[0:35](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=35)** Now in this section, we have two different contrast guidelines.
>
> **[0:39](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=39)** There is 1.4.3 contrast minimum, and 1.4.6 contrast enhanced.
>
> **[0:49](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=49)** But take note of the A levels here.
>
> **[0:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=52)** We want to use the minimum guideline because our audit only captures A and AA levels.
>
> **[0:58](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=58)** So we're going to copy and paste the WCAG title 1.4.3 contrast minimum and put that in our WCAG criteria column.
>
> **[1:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=69)** Since we know the A level too, let's put the AA level in the conformance level column.
>
> **[1:16](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=76)** I like using WCAG's quick reference tool because every guideline has an anchor link.
>
> **[1:22](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=82)** So I like to go in and grab the anchor link from the site and put it on the item I just added.
>
> **[1:29](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=89)** Doing this makes it easier for us to reference the issue later, and it's helpful for people who are less familiar with accessibility.
>
> **[1:37](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=97)** Having this link means anyone can learn more about this issue on their own whenever they want to.
>
> **[1:44](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=104)** We have our WCAG item and conformance level.
>
> **[1:47](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=107)** Let's also go ahead and put in a description for the issue while we're at it.
>
> **[1:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=112)** This is a great time for us to practice our skills in explaining WCAG criteria to others.
>
> **[1:58](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=118)** In the quick reference guide, you'll notice that there's a description for contrast issues.
>
> **[2:04](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=124)** We could just include that, but it's more helpful to summarize our issue in plainer language with specific details.
>
> **[2:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=131)** Instead of grabbing the quick reference description, let's describe it ourselves.
>
> **[2:16](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=136)** I'm going to say, "WCAG AA requires a contrast ratio of at least 4.5 to 1 for normal text.
>
> **[2:25](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=145)** The text on Post Date is 11 pixels with a bold weight, which means it's considered normal text.
>
> **[2:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=152)** You can see the foreground and background text displayed on the screen, and that current contrast ratio is only 1.9 to 1."
>
> **[2:40](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=160)** There.
>
> **[2:42](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=162)** That's a lot more clear than just a generic description.
>
> **[2:45](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=165)** This will make it a lot easier for us to reference later and for people to understand.
>
> **[2:51](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=171)** We might also want to add other related references.
>
> **[2:56](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=176)** Let's say we used a different guide to help us, like the A11Y project checklist.
>
> **[3:02](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=182)** Maybe we liked this guide because it helped us more easily understand the issue and we think it could help others.
>
> **[3:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=189)** In these cases, I'd like to include additions in the notes column.
>
> **[3:14](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=194)** Any time I think something can helps others learn about the issue or understand it better, I include it there.
>
> **[3:21](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=201)** A quick reminder.
>
> **[3:23](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=203)** If you used an automated tool to capture an issue, that tool might recommend guidelines for you.
>
> **[3:29](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=209)** You can use these recommendations in your audit instead of going through the process of checking the quick reference guide.
>
> **[3:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=216)** In times when you don't have a recommended guideline, it's still helpful to know how to find the one you need.
>
> **[3:44](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=224)** We've done a great job of adding WCAG information here.
>
> **[3:48](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/mapping-issues-to-wcag-criterion?u=76281980&t=228)** We're making great progress, and you only have a few things left.

> [!info]- Semantic Content
>
> **Env Vars:** wcag (10), a11y (1)
> **Code Keywords:** let (6)
> **Versions:** 1.4.3 (2), 1.4.6 (1), 4.5 (1), 1.9 (1)
> **Documentation:** reference guide (3)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Best Practices:** recommended (1)

#### Prioritizing issues by impact
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=0)** - [Instructor] Now that we have our WCAG criteria in here this is a perfect time for us to assess impact.
>
> **[0:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=7)** We've already talked a little about impact, but this is the first time we will try to assess it in an audit.
>
> **[0:15](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=15)** Including impact isn't us saying an issue isn't important.
>
> **[0:20](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=20)** It's a matter of prioritizing issues so that we can fix the most important ones first.
>
> **[0:26](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=26)** Remember that an issue's impact isn't a hard metric.
>
> **[0:30](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=30)** It's going to depend on a few factors.
>
> **[0:33](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=33)** Impact should be assessed using a combination of impact on users.
>
> **[0:39](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=39)** How significant of a barrier is created with this issue for our end users?
>
> **[0:45](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=45)** Impact on organization.
>
> **[0:46](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=46)** Does this component get used in essential interactions in our organization?
>
> **[0:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=52)** And impact by usage.
>
> **[0:54](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=54)** How often is this component used across all products?
>
> **[0:59](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=59)** Let's see if we can try to assess impact to our contrast issue.
>
> **[1:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=63)** Here are a few things we know about this issue.
>
> **[1:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=67)** For impact on users, the conformance level is AA.
>
> **[1:12](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=72)** That means we need to fix it, but it's not as urgent as an A level issue.
>
> **[1:18](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=78)** A level issues create much more significant barriers for users.
>
> **[1:23](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=83)** AA issues are still barriers but less critical.
>
> **[1:27](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=87)** For impact on business or organization, this issue could make it harder for people in the arts association to know when a class is happening.
>
> **[1:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=96)** Events and classes are a pretty important part of our organization's offerings.
>
> **[1:42](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=102)** And for impact by usage, we saw this issue happening in multiple places on the homepage.
>
> **[1:49](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=109)** That said it's not happening on the events page or elsewhere on the site.
>
> **[1:55](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=115)** What do you think the impact of this issue could be?
>
> **[1:58](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=118)** Take a minute to pause this video and consider the impact from four different levels: low, moderate, high and critical.
>
> **[2:10](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=130)** What level would you assign to this issue?
>
> **[2:13](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=133)** All right, let's see if your level match is mine.
>
> **[2:19](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=139)** Now, personally, I think this issue is medium or high impact.
>
> **[2:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=144)** Let me explain.
>
> **[2:26](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=146)** One of the biggest offerings of the Orange Valley Community Arts Association is classes and events, so that makes it more important.
>
> **[2:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=156)** This issue is happening in multiple places, making it more important, but then if users select the event, they can see the details on the page itself.
>
> **[2:46](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=166)** And finally, the AA level means it's important but not necessarily critical.
>
> **[2:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=172)** Did our answers match?
>
> **[2:54](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=174)** If not, that's okay.
>
> **[2:56](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=176)** Remember, impact is subjective.
>
> **[2:59](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=179)** My reasons for thinking this is medium or high might be different than your thinking.
>
> **[3:04](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=184)** We might even find that when we add more issues to our audit that this issue becomes more or less important in comparison.
>
> **[3:12](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=192)** Maybe we gather user feedback and that changes the impact of this issue.
>
> **[3:17](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=197)** Perhaps your team wants to include more considerations to evaluate impact than what I have here.
>
> **[3:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=204)** What matters most is we're considering the possible consequences of fixing or leaving an issue.
>
> **[3:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=212)** Many audits include impact because we want our teams to prioritize some issues first.
>
> **[3:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=218)** We also include impact to provide stakeholders and leadership an understanding of what's happening without going into technical details.
>
> **[3:47](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-issues-by-impact?u=76281980&t=227)** We're doing awesome work together and only have one data point left to add.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** wcag (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Grouping issues into themes
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=0)** - We've made it to the last piece of information we want to include in this audit for this issue, theme.
>
> **[0:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=7)** The theme is one of my favorite things to include because it means I'm beginning to think about issues at a system level, like in our design system and our whole product organization.
>
> **[0:19](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=19)** It also means I'm really thinking about ways I can talk about my audit with my team, stakeholders, and leaders.
>
> **[0:27](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=27)** When we add themes to an issue, it's for reoccurring elements.
>
> **[0:31](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=31)** This is especially valuable information for large-scale and design system audits because it's our way of saying, "Hey, this kind of issue is happening a lot."
>
> **[0:41](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=41)** This is valuable information because we can then ask how to address this issue more broadly.
>
> **[0:47](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=47)** For example, we could assign color as the theme for our color contrast issue.
>
> **[0:53](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=53)** If we find other color contrast issues elsewhere, we can group them into the same theme.
>
> **[1:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=60)** Suddenly, we can start to map trending issues and, most importantly, solve them.
>
> **[1:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=66)** Let's say that our audit includes a lot of issues in the color theme.
>
> **[1:12](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=72)** Think about where we usually define color in our product creation process.
>
> **[1:17](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=77)** Exactly, in design.
>
> **[1:19](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=79)** With this realization, we can start to act on our audit.
>
> **[1:23](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=83)** Here's what could happen.
>
> **[1:25](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=85)** Design system designers look at this one component and change it to meet color contrast conformance.
>
> **[1:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=92)** Design system designers also look at other components with the same issue and fix them as well.
>
> **[1:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=98)** And finally, we create training and resources to help designers across teams apply color to avoid this issue in the future.
>
> **[1:48](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=108)** It's not about assigning blame or criticism.
>
> **[1:51](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=111)** It's more about knowing who will address the issue and then asking ourselves how we can better support people in that role in the future.
>
> **[2:01](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=121)** I'll say it again.
>
> **[2:02](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=122)** The most important part of our audit is not finding issues.
>
> **[2:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=126)** It's about fixing them.
>
> **[2:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=129)** This means we fix them individually in products, we fix them in our design system, and we fix them in the product organization as a whole.
>
> **[2:18](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=138)** If done correctly, an audit is a short-term project with long-term benefits.
>
> **[2:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=144)** If you're looking at your document and thinking, "Oh, my gosh, that's a lot of detail to include for a lot of issues," I want to let you know that you'll get faster at this.
>
> **[2:35](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=155)** I can tell you this because that's what happened to me.
>
> **[2:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=158)** Like any skill, understanding digital accessibility takes time to practice and improve.
>
> **[2:45](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=165)** Every time I do an accessibility audit, I get faster and better.
>
> **[2:51](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=171)** I got to tell you, there's nothing more gratifying than seeing the impacts of those fixes for my organization and especially for end users.
>
> **[3:01](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=181)** So let's keep practicing.
>
> **[3:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=183)** Open the Accessibility Audit Spreadsheet Template again and look over the rest of the Orange Valley Community Arts Association homepage at [orangevalleycaa.org](https://orangevalleycaa.org).
>
> **[3:16](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=196)** Add three to four more issues you can find on this page to your document.
>
> **[3:22](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=202)** Remember, keep practicing.
>
> **[3:23](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/grouping-issues-into-themes?u=76281980&t=203)** These are super valuable skills.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (1), this. (1), super (1)
> **CLI Commands:** find (2)
> **URLs:** [orangevalleycaa.org](https://orangevalleycaa.org) (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - we (1)


### 6. Acting on a Design System Accessibility Audit

> [↑ Back to Table of Contents](#table-of-contents)

#### Sharing results with your team
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=0)** - So we successfully finished our audit. Now what?
>
> **[0:05](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=5)** This means it's time to share our results.
>
> **[0:08](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=8)** An accessibility audit is meant to be shared, not only to show the results, but also to educate others.
>
> **[0:15](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=15)** The best place to start is with our own design system team.
>
> **[0:20](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=20)** If our team has prioritized an accessibility audit in our deliverables, people will be interested in the results.
>
> **[0:29](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=29)** You might feel like the bearer of bad news presenting a list of issues, but actually, the audit we did is kind of a magical way to make our design system even better.
>
> **[0:40](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=40)** Think of it this way: without our work, it may have taken our team so much more time, energy, and money to find these opportunities.
>
> **[0:50](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=50)** We've created a path towards better usability in all of our products, so present your results with confidence.
>
> **[0:59](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=59)** For our design system team, we want to put together a presentation with the high-level results of our audit.
>
> **[1:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=66)** This will help our team understand what we found without immediately being inundated with the technical details.
>
> **[1:13](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=73)** We'll also use this presentation to share results with organizational leadership, so it's a valuable asset.
>
> **[1:21](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=81)** In our presentation, we're going to share a few different details.
>
> **[1:25](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=85)** Follow along with me by opening the Accessibility Audit Presentation Template in your Exercise files.
>
> **[1:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=92)** Overview: share what you'll discuss during the presentation before diving in.
>
> **[1:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=98)** This is an opportunity to set the stage for your discussion.
>
> **[1:43](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=103)** Background: what was in scope for your review?
>
> **[1:47](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=107)** What was the time period in which it was conducted?
>
> **[1:51](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=111)** What testing criteria and methods did you use?
>
> **[1:56](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=116)** Review process: explain how you audited at a high level.
>
> **[2:01](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=121)** Explain if you reviewed designs, code, documents, and anything that could be helpful to know.
>
> **[2:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=129)** Results: this is the bulk of your presentation.
>
> **[2:13](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=133)** How many items did you find?
>
> **[2:16](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=136)** What were the key themes you created in your audit?
>
> **[2:20](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=140)** Impact data: use your impact assessment to present high-level data.
>
> **[2:26](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=146)** Show your organization the percentage of items with low, medium, high, or critical impact.
>
> **[2:34](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=154)** Theme data: use the themes you created in your audit to explain reoccurring issues so your organization can understand where to focus its efforts.
>
> **[2:46](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=166)** Cross-section between impact and themes: we can usually find a cross-section between impact and themes.
>
> **[2:53](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=173)** Help your team understand the results better by breaking down this cross-section.
>
> **[3:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=180)** Recommendations: it's a good idea to recommend addressing the highest impact opportunities.
>
> **[3:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=187)** If you have more recommendations, include them.
>
> **[3:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=191)** And documentation: share your documentation files so your team can dig into the results when they're ready for those technical details.
>
> **[3:21](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=201)** Just like the other documents we've created for this audit, remember that this presentation should change to fit anything you need to suit your team and organization.
>
> **[3:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=212)** As you're presenting the results of your audit and afterward, give your team opportunities to ask about it.
>
> **[3:40](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=220)** Getting questions about your audit can feel intimidating, but in most cases, people want to learn from your experience.
>
> **[3:47](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-your-team?u=76281980&t=227)** This is a project share-out, but also an educational experience for so many, so be confident and open.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **Exercise Files:** template (1), exercise files (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - so (1)

#### Sharing results with organizational leaders
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=0)** - An accessibility audit is meant to be shared.
>
> **[0:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=3)** So yes, we should share it with leadership.
>
> **[0:05](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=5)** At the very least, we want to share our results with leaders so they continue to prioritize our efforts to find issues and fix them.
>
> **[0:14](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=14)** But a design system accessibility audit is about finding and fixing systemic issues, right?
>
> **[0:20](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=20)** So we need to share our work to ensure we are given the time and resources to fix the system and influence broad change organizationally.
>
> **[0:30](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=30)** Stakeholders and leaders in our organization are the key to making this happen.
>
> **[0:36](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=36)** Every organization has different levels of accessibility maturity.
>
> **[0:41](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=41)** Organizations with more leadership buy-in tend to have higher maturity levels, which leads to better accessibility internally and externally.
>
> **[0:51](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=51)** We've talked about why accessibility matters but some folks, including leaders, may not know about this.
>
> **[0:57](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=57)** Maybe they're focused on other needs or projects, maybe they haven't been introduced to accessibility before.
>
> **[1:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=66)** Even when we have support for some leaders others may still not know.
>
> **[1:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=71)** An audit can help us to advocate beyond just our own team.
>
> **[1:15](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=75)** By explaining the issues we find and why they matter, we have the chance to further the accessibility maturity of our organization.
>
> **[1:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=84)** Feeling nervous about sharing this type of work with leadership is okay.
>
> **[1:29](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=89)** It's also very normal.
>
> **[1:31](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=91)** Even with years of experience I can still feel that way when presenting work like this.
>
> **[1:37](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=97)** After your presentation to your team, rally with those who can help make a case with you, particularly folks who tend to be managers and leaders themselves.
>
> **[1:48](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=108)** They will have the most influence with leadership already, giving you a soft opening to the conversation.
>
> **[1:55](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=115)** Reuse the presentation you gave your team and make edits to refine it for a leadership presentation.
>
> **[2:02](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=122)** Some leaders will need to understand the value of accessibility more before learning about the audit and others may not.
>
> **[2:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=129)** Be sure to know your audience and include details they might be interested in.
>
> **[2:15](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=135)** If you're looking for more resources on how to make the case for accessibility in your organization, check out another LinkedIn Learning on just this from Microsoft Inclusive Design Director Christina Mallon.
>
> **[2:27](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=147)** Our work to educate others and ourselves on accessibility will always matter.
>
> **[2:33](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=153)** So be patient with their learning journey as well as your own.
>
> **[2:37](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-organizational-leaders?u=76281980&t=157)** Our efforts will lead to higher organizational accessibility maturity and growth over time.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (2)
> **Code Keywords:** this. (2), continue (1)
> **Speakers:** - an (1)

#### Prioritizing and acting on issues with your team
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=0)** - I've said it before, and I'll say it again.
>
> **[0:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=3)** The goal of an accessibility audit is to find issues but more importantly, to fix them.
>
> **[0:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=9)** So what happens next?
>
> **[0:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=11)** We put in the hard work of capturing issues in such detail and the great news is that it makes it so much easier for us to fix them.
>
> **[0:20](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=20)** We can use a lot of this information as a starting point for creating tickets in our project management tools.
>
> **[0:27](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=27)** Every team has different processes and systems but let's assume you are in a team that uses Agile and Scrum to approach planning, managing and executing work.
>
> **[0:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=38)** Although this isn't a series about Agile and Scrum this is how most digital product teams think about and deliver work.
>
> **[0:46](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=46)** Consider this just as a starting point for planning, managing, and fixing accessibility issues.
>
> **[0:53](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=53)** Let's take a look at how this might be approached in your Scrum team.
>
> **[0:59](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=59)** If you're in a team like this, you'll likely find that you can add each issue from your audit as a story and wrap all of your stories in an epic.
>
> **[1:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=67)** For our epic, let's call this Design System Accessibility Fixes July 20XX.
>
> **[1:14](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=74)** Now that we have an epic it's time to write one of these issues as a story.
>
> **[1:20](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=80)** Let's try this with our color contrast accessibility issue from the audit.
>
> **[1:24](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=84)** User stories tend to be written like this.
>
> **[1:28](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=88)** As a persona, I want to, so that.
>
> **[1:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=92)** So we might write our user story like this.
>
> **[1:35](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=95)** As a member of the arts association with low vision, I want to learn when classes are happening so that I might attend ones I'm interested in.
>
> **[1:45](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=105)** We can include other details from our audit here.
>
> **[1:49](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=109)** We could include an outcome that says something like, Post Date must have a ratio of at least 4.5 to 1 so that users can read it.
>
> **[1:58](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=118)** We can include other details such as the current caller contrast ratio and the WCAG criteria related to the issue.
>
> **[2:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=126)** Anything we think will be helpful can be included.
>
> **[2:10](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=130)** Our team will likely discuss the issue during its next planning meeting to determine how long it will take, or who should do it, and the like.
>
> **[2:19](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=139)** Be careful not to let your tickets gather dust in a backlog.
>
> **[2:23](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=143)** An audit that is left for months can quickly become outdated and irrelevant, which means lost effort, time and money.
>
> **[2:31](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=151)** If we're creating tickets for these issues, it's important that they are prioritized and added to our sprints sooner rather than later.
>
> **[2:40](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=160)** To ensure fixes are prioritized, include these efforts in larger team planning and goals, such as quarterly objectives and key results, also known as OKRs.
>
> **[2:51](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=171)** This will ensure we scale up the importance of our work to larger trackable organizational goals.
>
> **[2:58](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=178)** Your team might approach executing work differently but you can use this as a starting point for how you might approach creating tasks to fix issues from your audit.
>
> **[3:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/prioritizing-and-acting-on-issues-with-your-team?u=76281980&t=189)** If the right time to do an accessibility audit is now, the right time to act on it is as soon as possible.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (2), this, (1)
> **CLI Commands:** find (2)
> **Analogies:** such as (2)
> **Env Vars:** wcag (1)
> **Versions:** 4.5 (1)
> **Definitions:** known as (1)
> **Warnings:** be careful (1)
> **Speakers:** - i (1)

#### Sharing results with design system users
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=0)** - We've done a lot of great work finding issues in our audit as well as advocating and acting on them being fixed.
>
> **[0:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=7)** What happens between our audit and our fixes?
>
> **[0:10](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=10)** While we're working on addressing the issues we found, product teams working on live products may still use the existing system to design, develop, and implement work.
>
> **[0:22](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=22)** This means they may create projects and experiences with issues and dependencies.
>
> **[0:28](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=28)** It might be tempting to only let teams know about the issues after they've been addressed, but this can cause problems, particularly for their workflows and schedules.
>
> **[0:39](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=39)** Nothing is worse than being surprised with a big project to fix a product, so we want to inform our teams about this sooner rather than later.
>
> **[0:49](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=49)** That way, they know that some of the components they're currently using will change.
>
> **[0:54](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=54)** They can allocate time and resources of their own to integrate our fixed components and patterns.
>
> **[1:01](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=61)** We want to communicate with our teams so they can properly plan and prepare themselves.
>
> **[1:08](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=68)** And again, this is another opportunity to educate our organization about accessibility.
>
> **[1:14](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=74)** Accessibility needs don't end with our design system.
>
> **[1:18](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=78)** We need teams using this system to care about accessibility too.
>
> **[1:22](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=82)** Remember, even with a perfectly accessible system, teams can still make mistakes if they don't have the education and resources they need.
>
> **[1:32](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=92)** Better yet, the more we talk about accessibility, the more allies we gain from making accessibility a priority.
>
> **[1:39](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=99)** So how can we share the results and progress with teams using our design system?
>
> **[1:45](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=105)** There can be many different approaches to this, so as I continue to say, do what works well for your teams.
>
> **[1:52](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=112)** That said, if you can gather the entire product organization together, you can share the results with everyone at once with your existing presentation.
>
> **[2:01](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=121)** If you've done this after creating your project epic, you can also share the epic and stories in this presentation.
>
> **[2:09](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=129)** That way, they can see each story that's going to be addressed and get a sense of the general timeline for it to be done.
>
> **[2:17](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=137)** Then each team can work on its own plan for implementing fixes our design system team is making and prioritize them as needed.
>
> **[2:25](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=145)** Sharing your results with everyone is going to mean you'll get questions.
>
> **[2:29](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=149)** Sometimes the questions can be hard to answer, but you'll likely find people are excited to understand what you found and how you plan to address it.
>
> **[2:39](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=159)** Remember, teams using our design system are invested in it being a great system.
>
> **[2:45](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=165)** Most people understand that design systems are always improving and developing.
>
> **[2:51](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=171)** By sharing results with design system consumers, we can help them understand how our audit is an improvement.
>
> **[2:58](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/sharing-results-with-design-system-users?u=76281980&t=178)** From here, we can begin to have conversations that go to the next level for our organization's accessibility strategy.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1), continue (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - we (1)

#### Using results to further motivate better research and advocacy with people who have disabilities
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=0)** - For many organizations, an audit can be one of the first things that happens in its journey to becoming more accessible.
>
> **[0:08](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=8)** You'll likely use auditing again and again to check existing experiences.
>
> **[0:13](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=13)** You'll use these processes to check new work as much as you check what already exists.
>
> **[0:19](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=19)** That is a wonderful tool in our toolkit but accessibility is much bigger than an audit.
>
> **[0:26](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=26)** It's much bigger than a design system.
>
> **[0:29](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=29)** Accessibility influences every facet and system we exist in both professionally and personally.
>
> **[0:37](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=37)** Fundamentally, being an advocate and ally is about making sure we create accessible spaces and ensure equitable experiences for people who have disabilities.
>
> **[0:49](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=49)** We need to do this both for the people we work with or could work with and for people we serve with our experiences.
>
> **[0:58](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=58)** Remember, accessibility is a human right.
>
> **[1:03](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=63)** Yes, it also makes better designs and experiences while increasing our ability to meet organizational goals.
>
> **[1:11](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=71)** But at its core, accessibility is about people.
>
> **[1:16](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=76)** So wherever your organization is in its journey, use this tool to advocate for better accessibility.
>
> **[1:23](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=83)** Learn from disabled people by speaking with them and compensating for their input.
>
> **[1:29](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=89)** Get feedback early and often on new developments by granting your users with disabilities beta permissions and early access.
>
> **[1:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=98)** People with disabilities are some of the best designers, so listen to them.
>
> **[1:44](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=104)** I mentioned earlier that seeing the impact of the audit and the consequential fixes that come from it is the best part of this work.
>
> **[1:53](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=113)** Being an accessibility advocate and ally is something that makes the work we do so much more meaningful and impactful.
>
> **[2:01](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=121)** We have so much we can learn in the space of accessibility and auditing is just the start.
>
> **[2:08](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=128)** So use this to motivate your organization to do better research and advocate with people who have disabilities.
>
> **[2:16](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/using-results-to-further-motivate-better-research-and-advocacy-with-people-who-have-disabilities?u=76281980&t=136)** Because that's the key to the future of design, to building truly innovative and impactful work.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Speakers:** - for (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### There's no such thing as "perfect" accessibility
> [LinkedIn Learning](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=0)** - Congratulations on finishing the entire Auditing Design Systems for Accessibility series.
>
> **[0:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=6)** You've learned so much and can take this knowledge wherever you go.
>
> **[0:10](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=10)** The last thing I'll share with you is that you don't have to be perfect.
>
> **[0:15](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=15)** There's no such thing as perfect accessibility.
>
> **[0:18](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=18)** I learned this myself from accessibility and disability rights advocate Sheri Byrne-Haber.
>
> **[0:25](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=25)** I need to hear it and I regularly reference her words as someone who struggles with a fear of imperfection.
>
> **[0:31](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=31)** If you're looking to achieve 100% perfect accessibility in your efforts, you might find yourself stuck.
>
> **[0:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=38)** Accessibility is a design methodology, and because design involves people, there's no such thing as perfect.
>
> **[0:45](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=45)** People are always changing.
>
> **[0:47](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=47)** Accessibility is about accounting for baseline needs and adapting to unique needs.
>
> **[0:53](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=53)** This is one of the coolest parts of digital accessibility efforts.
>
> **[0:57](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=57)** We have the power to meet needs adaptively.
>
> **[1:01](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=61)** Don't be afraid of taking action, trying your audit, and pushing for more and better accessibility.
>
> **[1:07](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=67)** Just because there's no such thing as perfect design or perfect accessibility doesn't mean we shouldn't try for better.
>
> **[1:15](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=75)** That's the beautiful thing about this work.
>
> **[1:17](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=77)** It's about people, and there will always be opportunities to learn, improve, and build community.
>
> **[1:25](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=85)** If you take one thing away from this entire course, I want it to be that the right time to make things more accessible is now.
>
> **[1:34](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=94)** No matter where you are in your journey, you'll find that as you do this, you'll learn, and that's great.
>
> **[1:41](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=101)** Don't forget you're not alone.
>
> **[1:43](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=103)** I'm always learning new things, and I guarantee those around you are as well.
>
> **[1:48](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=108)** Have conversations with your colleagues about making more accessible work.
>
> **[1:53](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=113)** Build community wherever you are to help support efforts like your own.
>
> **[1:57](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=117)** That's what I do, and it makes this journey so fun and so meaningful.
>
> **[2:02](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=122)** So remember, take this learning and start acting on it.
>
> **[2:06](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=126)** Learn as you go and talk with others.
>
> **[2:10](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=130)** I'd love to connect with you and be a part of your community.
>
> **[2:13](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=133)** You can find me on LinkedIn and follow me at my blog at [annaecook.com](https://annaecook.com).
>
> **[2:19](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=139)** There is so much to learn when it comes to accessibility, so I encourage you to dig into all the amazing resources in the Resources document.
>
> **[2:29](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=149)** Keep up your journey towards accessibility and inclusive design, wherever you go.
>
> **[2:34](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=154)** I want to thank you all for taking the time to learn with me.
>
> **[2:38](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility/there-s-no-such-thing-as-perfect-accessibility?u=76281980&t=158)** It's been a delight.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **Code Keywords:** this, (1)
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