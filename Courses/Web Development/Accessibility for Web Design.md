---
type: course
cssclasses:
  - lle-course
slug: accessibility-for-web-design
url: "https://www.linkedin.com/learning/accessibility-for-web-design"
duration_minutes: 118
duration: 1h 58m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFEldSjvm_oGg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655410107982?e=2147483647&amp;v=beta&amp;t=yBzaHJwb36X3FR4o11qUaIdyzTF1ol-eXOPxh297Nyg"
linkedin_topic: Web Development
learning_paths:
  - '[[Prepare for Digital Accessibility]]'
prev_courses:
  - '[[UX Foundations- Accessibility]]'
next_courses:
  - '[[Web Accessibility for Developers]]'
path_nav: '[{"path":"Prepare for Digital Accessibility","position":3,"total":8,"prev":"UX Foundations- Accessibility","next":"Web Accessibility for Developers"}]'
path_count: 1
tags:
  - course
  - topic/web-development
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Accessibility%20for%20Web%20Design.md)

![Accessibility for Web Design](https://media.licdn.com/dms/image/v2/C4E0DAQFEldSjvm_oGg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655410107982?e=2147483647&amp;v=beta&amp;t=yBzaHJwb36X3FR4o11qUaIdyzTF1ol-eXOPxh297Nyg)

# Accessibility for Web Design

> Are you doing everything you can to make sure your sites are accessible and easy to use? Learn practical accessibility techniques to ensure your web designs can be viewed and used by everyone. Internationally recognized accessibility expert Derek Featherstone walks through examples of common web interaction flows, and then steps through considerations and tactical strategies for each component, to

> [LinkedIn Learning](https://www.linkedin.com/learning/accessibility-for-web-design) | 1h 58m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Making the digital world accessible](#making-the-digital-world-accessible)
- [**1. Real-World Scenarios**](#1-real-world-scenarios) (2 videos)
  - [An ecommerce purchase](#an-ecommerce-purchase)
  - [Personas](#personas)
- [**2. Accessible Visual Design**](#2-accessible-visual-design) (5 videos)
  - [The use of color](#the-use-of-color)
  - [Color contrast](#color-contrast)
  - [Animation, movement, and flashing](#animation-movement-and-flashing)
  - [Proximity and grouping in design](#proximity-and-grouping-in-design)
  - [Effective visual focus indicators](#effective-visual-focus-indicators)
- [**3. Keyboard Interaction**](#3-keyboard-interaction) (3 videos)
  - [Keyboard functionality](#keyboard-functionality)
  - [Avoiding keyboard traps](#avoiding-keyboard-traps)
  - [Linear flow of content](#linear-flow-of-content)
- [**4. Touch Interfaces**](#4-touch-interfaces) (3 videos)
  - [Accessibility and touch](#accessibility-and-touch)
  - [Target sizes](#target-sizes)
  - [Working with gestures](#working-with-gestures)
- [**5. Images and Multimedia Accessibility**](#5-images-and-multimedia-accessibility) (4 videos)
  - [Working with audio and video](#working-with-audio-and-video)
  - [Understanding media types](#understanding-media-types)
  - [The importance of text equivalents](#the-importance-of-text-equivalents)
  - [Accessibility for complex visuals](#accessibility-for-complex-visuals)
- [**6. Form Accessibility**](#6-form-accessibility) (4 videos)
  - [Labeling forms](#labeling-forms)
  - [The placeholder attribute](#the-placeholder-attribute)
  - [HTML5 form inputs](#html5-form-inputs)
  - [Form validation and error messaging](#form-validation-and-error-messaging)
- [**7. Flexibility and Accessibility**](#7-flexibility-and-accessibility) (3 videos)
  - [Flexible vs. fixed width designs](#flexible-vs-fixed-width-designs)
  - [Responsive design and accessibility](#responsive-design-and-accessibility)
  - [Designing for text resizing](#designing-for-text-resizing)
- [**8. Structured Content**](#8-structured-content) (3 videos)
  - [Content hierarchy and headings](#content-hierarchy-and-headings)
  - [The importance of page titles](#the-importance-of-page-titles)
  - [Page structure](#page-structure)
- [**Conclusion**](#conclusion) (1 videos)
  - [A challenge for you](#a-challenge-for-you)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Making the digital world accessible](https://www.linkedin.com/learning/accessibility-for-web-design/making-the-digital-world-accessible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/making-the-digital-world-accessible?u=76281980&t=0)** - 14.
>
> **[0:02](https://www.linkedin.com/learning/accessibility-for-web-design/making-the-digital-world-accessible?u=76281980&t=2)** That's the number of times one person got stuck when I was doing [[Usability Testing]] with people with disabilities for an [[E-Commerce]] flow early in my web career.
>
> **[0:13](https://www.linkedin.com/learning/accessibility-for-web-design/making-the-digital-world-accessible?u=76281980&t=13)** The design and code had some pretty significant flaws for people with disabilities, and each one of them was completely preventable with a small bit of effort and care.
>
> **[0:24](https://www.linkedin.com/learning/accessibility-for-web-design/making-the-digital-world-accessible?u=76281980&t=24)** I saw the parallels between these barriers and accessibility in the physical world that I had seen with my grandfather after he had a stroke.
>
> **[0:32](https://www.linkedin.com/learning/accessibility-for-web-design/making-the-digital-world-accessible?u=76281980&t=32)** And at that point, I knew that my web career was going to be dedicated to making the digital world more accessible.
>
> **[0:40](https://www.linkedin.com/learning/accessibility-for-web-design/making-the-digital-world-accessible?u=76281980&t=40)** I'm Derek Featherstone, and this is the course on accessibility for [[Web Design]].
>
> **[0:46](https://www.linkedin.com/learning/accessibility-for-web-design/making-the-digital-world-accessible?u=76281980&t=46)** I'm an international expert on accessibility and have been for almost 15 years.
>
> **[0:50](https://www.linkedin.com/learning/accessibility-for-web-design/making-the-digital-world-accessible?u=76281980&t=50)** And I've taught tens of thousands of designers and developers how to make things easier to use for people with disabilities.
>
> **[0:58](https://www.linkedin.com/learning/accessibility-for-web-design/making-the-digital-world-accessible?u=76281980&t=58)** This course will help you design things that work for the 20% of the world's population that has a disability.
>
> **[1:06](https://www.linkedin.com/learning/accessibility-for-web-design/making-the-digital-world-accessible?u=76281980&t=66)** We'll look at designing from a few perspectives.
>
> **[1:08](https://www.linkedin.com/learning/accessibility-for-web-design/making-the-digital-world-accessible?u=76281980&t=68)** Visual design for focus states, color contrast, and target size.
>
> **[1:13](https://www.linkedin.com/learning/accessibility-for-web-design/making-the-digital-world-accessible?u=76281980&t=73)** On the interaction design front, we'll look at keyboard interactions, linear flow, and touch interfaces.
>
> **[1:20](https://www.linkedin.com/learning/accessibility-for-web-design/making-the-digital-world-accessible?u=76281980&t=80)** And we'll round that out with a lot of discussion points for you and your development team to work on together.
>
> **[1:27](https://www.linkedin.com/learning/accessibility-for-web-design/making-the-digital-world-accessible?u=76281980&t=87)** Okay, let's dig in to accessibility for web design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Design]] (2), [[Usability Testing]] (1), [[E-Commerce]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - 14 (1)


### 1. Real-World Scenarios

[↑ Back to Table of Contents](#table-of-contents)

#### [An ecommerce purchase](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=0)** - In this course, we're going to explore [[Accessible Design]] from a lot of different angles using three typical scenarios.
>
> **[0:07](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=7)** They're pretty common tasks that people will do online.
>
> **[0:09](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=9)** And there are things that you the designer or developer need to think about as you're building sites for yourself or your clients.
>
> **[0:17](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=17)** Here's a high-level walkthrough of those scenarios that we'll work through in this course.
>
> **[0:21](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=21)** Let's say you're looking to buy a gift for your best friend to celebrate an occasion.
>
> **[0:25](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=25)** Think about that process for a minute.
>
> **[0:28](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=28)** How do you find that gift?
>
> **[0:30](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=30)** You're going to go through several steps.
>
> **[0:32](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=32)** You'll spend time looking for different ideas.
>
> **[0:35](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=35)** Looking for inspiration.
>
> **[0:37](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=37)** You read reviews.
>
> **[0:38](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=38)** You research pricing.
>
> **[0:40](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=40)** You do a lot of comparison.
>
> **[0:43](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=43)** After all of that process, you find just the right thing.
>
> **[0:46](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=46)** You check the price, select the color, maybe enter a promo code, and you add it to the shopping cart.
>
> **[0:53](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=53)** You're ready to check out.
>
> **[0:54](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=54)** So you fill in the shipping details, and payment details.
>
> **[0:58](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=58)** You mark the order as a gift, which allows you to add a note, a gift receipt, and maybe even get it wrapped.
>
> **[1:04](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=64)** Then you craft a meaningful, and playful message and you send off the order.
>
> **[1:09](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=69)** You'll wait patiently for the shipping notice, and look for the gift to arrive so you can make your best friend's day.
>
> **[1:15](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=75)** You need to arrange for a lawn mowing service to come and take care of your lawn for the upcoming summer season.
>
> **[1:20](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=80)** You and your partner will be gone on a three month trip with your two teenage children.
>
> **[1:25](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=85)** You saw an advertisement for a local landscaping service, so you go to their website, and look for their lawn maintenance packages.
>
> **[1:32](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=92)** You review their services.
>
> **[1:34](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=94)** Find that they have a weekly option, and then you fill out their form asking for a quote.
>
> **[1:39](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=99)** You send it their way and wait for an email confirmation that tells you they've received your inquiry, and will get back to you as soon as they can.
>
> **[1:46](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=106)** You love how popular podcasting has become.
>
> **[1:50](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=110)** It's your main source for getting up-to-date information.
>
> **[1:53](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=113)** To stay in-sync, you regularly load podcasts onto your phone.
>
> **[1:58](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=118)** You share episodes you love with your friends, and colleagues, and you're always researching new podcasts for your library.
>
> **[2:04](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=124)** You'll take them with you on your commute to work and listen every day as you travel to and from the [[Microsoft Office|office]] 25 minutes each way.
>
> **[2:11](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=131)** Now that's a really high-level overview of those scenarios.
>
> **[2:16](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=136)** Put yourself in the shoes of the person that is completing each of those tasks.
>
> **[2:19](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=139)** Better yet.
>
> **[2:20](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=140)** Put yourself inside their heads.
>
> **[2:22](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=142)** Thinking about people with disabilities, and how they use digital things often seems very different to us, and yet it isn't.
>
> **[2:30](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=150)** If you woke up and suddenly had no use of your hands, would your job change?
>
> **[2:35](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=155)** Would your hobbies change if your vision started to deteriorate?
>
> **[2:39](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=159)** No.
>
> **[2:40](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=160)** The requirements of your job would stay the same, and your interests would stay the same.
>
> **[2:45](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=165)** People with disabilities are trying to accomplish the same goals, and same tasks as you or me.
>
> **[2:50](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=170)** They just might use specialized tools to do it.
>
> **[2:53](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=173)** Here's what that means for you.
>
> **[2:55](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=175)** As a designer, you'll need to keep a few things in mind as you're designing and working with others to write content, and build your sites.
>
> **[3:02](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=182)** Okay, it's more than a few things but if you take some very specific actions, you're going to go a long way to making things accessible for everyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Accessible Design]] (1), [[Microsoft Office|Office]] (1)
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** select the (1), go to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - in (1)

#### [Personas](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=0)** - When we talk about accessibility, we really mean that we want to make things work easily for everyone, regardless of their abilities or the tools that they're using to consume our content or transactions.
>
> **[0:11](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=11)** We often use personas that include some functional needs for people with disabilities to help remind us how we can best meet their needs.
>
> **[0:18](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=18)** These are five personas that we use pretty regularly in our work.
>
> **[0:22](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=22)** It's important to remember though, that these aren't artifacts that are set in stone.
>
> **[0:27](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=27)** They're based on research and they vary from project to project and client to client.
>
> **[0:32](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=32)** There are two critical pieces of these personas.
>
> **[0:35](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=35)** First, they serve as a reminder of these people's mindsets, motivations, and goals.
>
> **[0:41](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=41)** Second, they incorporate reminders of functional needs for people with disabilities.
>
> **[0:46](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=46)** So let's run through them quickly.
>
> **[0:48](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=48)** First is Giovanni.
>
> **[0:50](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=50)** He's 27 years old, single with no kids.
>
> **[0:52](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=52)** And is a gallery artist that works from home.
>
> **[0:55](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=55)** He uses his artwork to create awareness around civil rights issues.
>
> **[0:59](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=59)** He needs simple, clear instructions, wants to avoid getting lost in details, and frequently feels overwhelmed.
>
> **[1:06](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=66)** He's looking for a gift for his best friend who helped him with his last gallery show.
>
> **[1:11](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=71)** Giovanni is somewhere on the spectrum.
>
> **[1:13](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=73)** In other words, he's been diagnosed with autism spectrum disorder or ASD.
>
> **[1:19](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=79)** Rose is next.
>
> **[1:21](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=81)** She's 34 years old, married with no kids.
>
> **[1:24](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=84)** She's a graduate student and a journalist and works quite unusual hours.
>
> **[1:29](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=89)** She takes a mix of short and long trips for her work.
>
> **[1:33](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=93)** She manages most of her whole life while she's on the move.
>
> **[1:36](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=96)** And she keeps up with recent events with daily podcasts.
>
> **[1:39](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=99)** She lives by her mobile phone.
>
> **[1:42](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=102)** And she needs her life to be effortless and forward thinking, ready for whatever's next.
>
> **[1:47](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=107)** She really doesn't have patience for wasting time and she's been almost completely deaf since birth.
>
> **[1:53](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=113)** Mary is 48 years old.
>
> **[1:55](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=115)** She's married with two teenage girls.
>
> **[1:58](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=118)** She's an exceptional musician.
>
> **[2:00](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=120)** She plays over 11 instruments and she's a professor of ethnomusicology.
>
> **[2:05](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=125)** She wants to inspire her students with new ways of creating music.
>
> **[2:08](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=128)** And she just received a grant for remote music learning for the K to 12 space.
>
> **[2:13](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=133)** She's planning to use podcasts and video as part of her online coursework for those students.
>
> **[2:18](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=138)** She's traveling for three months this summer with her family and is arranging services to watch over their home while they're gone.
>
> **[2:25](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=145)** She gets things done very quickly when she's focused.
>
> **[2:27](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=147)** And was blind by the age of 13.
>
> **[2:31](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=151)** She really needs significant trust in everybody that she works with.
>
> **[2:35](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=155)** Sean is a 31 year old UI engineer in Palo Alto.
>
> **[2:39](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=159)** He's engaged, but doesn't have any kids yet.
>
> **[2:42](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=162)** Sean is very, very competitive and driven.
>
> **[2:45](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=165)** He's always staying up to date on the latest technology and trends and works about 85 hours a week.
>
> **[2:51](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=171)** He does almost all of his shopping online and is quickly bored with technology.
>
> **[2:57](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=177)** Sean has low vision and he needs to view the screen at 400% magnification.
>
> **[3:03](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=183)** Finally, we have Maxine.
>
> **[3:05](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=185)** She's 68 years old, is widowed, has two children, and five grandchildren.
>
> **[3:11](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=191)** She manages medical claims for a large insurance company.
>
> **[3:14](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=194)** She's looking to retire this year and travel to spend more time with her grandchildren.
>
> **[3:18](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=198)** And she plans on spoiling each and every one of them this year.
>
> **[3:22](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=202)** She wants to find some help around the house, especially while she's away.
>
> **[3:26](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=206)** She's an extrovert with very strong people skills, but has severe arthritis from years of computer work.
>
> **[3:33](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=213)** These personas can act as touchstones for you as we progress through the course.
>
> **[3:37](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=217)** Keep them in mind. as we look at each example and scenario.
>
> **[3:40](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=220)** How would this work for Sean, Maxine, Rose, Giovanni, or Mary?
>
> **[3:47](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=227)** Their functional needs are things that we as designers need to be conscious of every single day.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), in other words (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** asd (1)
> **Speakers:** - when (1)


### 2. Accessible Visual Design

[↑ Back to Table of Contents](#table-of-contents)

#### [The use of color](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=0)** - For years, accessibility has been seen as the domain of the developer.
>
> **[0:05](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=5)** Sure, there are lots of things that happen in code to make sure that digital things are accessible, but design and content are just as important, or maybe even more important.
>
> **[0:15](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=15)** Why?
>
> **[0:16](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=16)** As a designer, you're in a unique position to influence the final product by creating more accessible designs from the beginning of a project, rather than adding it in part way through.
>
> **[0:27](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=27)** Ultimately, you need a great mix of [[Accessible Design]], accessible development skills, and accessible content.
>
> **[0:33](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=33)** Let's look at how all these pieces come together to create an accessible experience.
>
> **[0:38](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=38)** We'll start with looking at what accessibility means from a visual perspective.
>
> **[0:42](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=42)** When we create designs, we use several tools to communicate.
>
> **[0:46](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=46)** One of the most obvious tools we use is color.
>
> **[0:50](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=50)** We use it as a design element in meaningful ways.
>
> **[0:53](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=53)** Color communicates status and helps us distinguish one thing from another.
>
> **[0:57](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=57)** Take a look at this graph.
>
> **[0:59](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=59)** It shows the number of different pieces of fruit eaten over a week.
>
> **[1:03](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=63)** Now you're likely aware that some people are colorblind.
>
> **[1:06](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=66)** In fact, one in 12 men and one in 200 women have some form of colorblindness.
>
> **[1:12](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=72)** That means that about 4.5% of the world's population is going to have difficulty perceiving different color combinations because of colorblindness.
>
> **[1:20](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=80)** That's almost 315 million people in the world.
>
> **[1:24](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=84)** Knowing that, how would you change the graph to make sure that you don't rely on color?
>
> **[1:29](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=89)** You'd use other methods to distinguish one line of data from the other.
>
> **[1:34](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=94)** You'd use shape or patterns to show the difference between lines.
>
> **[1:38](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=98)** Notice I didn't say how would you change the graph to not use color?
>
> **[1:43](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=103)** I changed it so that the graph didn't rely on color.
>
> **[1:47](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=107)** There's a big difference.
>
> **[1:49](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=109)** Use color to your advantage, yes, but make sure it isn't the only method to communicate your message.
>
> **[1:55](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=115)** There's lots of great material out there on colorblindness and designing accessible color palettes.
>
> **[2:00](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=120)** In fact, check out Gerri Coady's book, "Color Accessibility Workflows" for the science behind colorblindness as well as methods for creating great color combinations that work for everyone, including people that are colorblind.
>
> **[2:13](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=133)** Now that we've got that sorted, let's put it into practice.
>
> **[2:17](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=137)** Let's apply this to that [[E-Commerce]] site selling T-shirts.
>
> **[2:20](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=140)** Notice the color swatches on the right hand side of the page above the add to cart button?
>
> **[2:25](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=145)** If you were colorblind or couldn't see color at all, how would you know which color is which?
>
> **[2:31](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=151)** This is fairly easy to solve.
>
> **[2:33](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=153)** We combine the color names with the color swatches, and we've now made this much more accessible.
>
> **[2:39](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=159)** Here's a different scenario.
>
> **[2:41](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=161)** Take a look at this podcast page we've created.
>
> **[2:44](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=164)** Each search result comes back color coded to show if the keyword was found in the podcast name, episode titles, or the content of the podcast itself.
>
> **[2:53](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=173)** Now take a look at what happens when we take the color away.
>
> **[2:58](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=178)** See what happens?
>
> **[2:59](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=179)** We actually lose some meaning.
>
> **[3:01](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=181)** We can't easily tell the difference between podcasts, episodes, and transcripts.
>
> **[3:07](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=187)** Like the last example, we can come up with several different ways to distinguish these items that do not rely on color alone.
>
> **[3:13](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=193)** Now, pause this video and take 30 seconds to come up with at least three different methods.
>
> **[3:17](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=197)** Explore different ideas.
>
> **[3:20](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=200)** Many people will jump straight into a single solution without considering others.
>
> **[3:24](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=204)** Really, I'm serious.
>
> **[3:25](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=205)** Pause the video and come up with three.
>
> **[3:33](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=213)** Okay.
>
> **[3:34](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=214)** Now that we're back, here's some possibilities.
>
> **[3:37](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=217)** There is no right answer, but did you consider using shape, circles, squares, and triangles to denote the difference between the three types of search results?
>
> **[3:47](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=227)** Did you consider prefixing each result with podcast colon, episode colon, or transcript colon?
>
> **[3:54](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=234)** Or how about simply putting an uppercase P, E, or T in the color block?
>
> **[3:59](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=239)** Any of those would work.
>
> **[4:01](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=241)** They use different mechanisms that don't rely on color to convey the details.
>
> **[4:06](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=246)** Which one you choose will be up to you.
>
> **[4:09](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=249)** And if you can't decide, put it to [[Usability Testing]].
>
> **[4:12](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=252)** There's nothing better than getting the answer directly from people that are using what you're creating.
>
> **[4:17](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=257)** We've been talking about this from the perspective of someone that is colorblind, but here's the best part.
>
> **[4:22](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=262)** By making our designs so that they don't rely on color alone, not only do we make them work better for people that are colorblind and have difficulty distinguishing between colors, we also make them work well for people that can't see color at all or are blind or have low vision.
>
> **[4:39](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=279)** There's almost another 300 million or so people in the world that have significant visual impairment that isn't just related to color.
>
> **[4:47](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=287)** Approximately 40 million people are considered blind, and another 250 million or so have low vision.
>
> **[4:53](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=293)** By doing this right, you're helping a lot of people.
>
> **[4:58](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=298)** You can and should apply the same principles to other uses of color that are common in digital interfaces today.
>
> **[5:04](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=304)** We often use green to signify a success message and red to indicate an error.
>
> **[5:09](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=309)** As a designer, we need to find multiple ways of providing the same message.
>
> **[5:14](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=314)** What will you do to ensure that you're conveying the same message to everyone?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Accessible Design]] (1), [[E-Commerce]] (1), [[Usability Testing]] (1)
> **CLI Commands:** make (5), find (1)
> **Versions:** 4.5 (1)
> **Definitions:** means that (1)
> **Speakers:** - for (1)

#### [Color contrast](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=0)** - Designers also need to take care when choosing their color palettes for their work.
>
> **[0:05](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=5)** Ensuring that there's enough color contrast between the foreground and background is important.
>
> **[0:10](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=10)** Remember Sean, our persona with low vision?
>
> **[0:13](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=13)** Because of his low vision, he has difficulty detecting the differences between colors that are too similar.
>
> **[0:19](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=19)** There are lots of color combinations that just don't work well from a contrast perspective.
>
> **[0:24](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=24)** Let's step into the lab and try a few combinations out.
>
> **[0:30](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=30)** The first tool is Lea Verou's contrast checker.
>
> **[0:40](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=40)** The second tool is Jonathan Snook's checker, which includes sliders to allow you to easily nudge colors in different directions to find combinations that work.
>
> **[0:50](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=50)** The key is to understand that too little difference in the colors means that you can't tell the difference between them.
>
> **[0:55](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=55)** And that means people with less than perfect vision will likely struggle to read the interface.
>
> **[1:01](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=61)** These ratios are obtained by calculating the difference in the color based on brightness and luminosity.
>
> **[1:08](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=68)** Don't worry too much about what that means.
>
> **[1:11](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=71)** Just know this very straightforward advice.
>
> **[1:13](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=73)** The contrast for things in an interface, whether it is text, icons or something else that has meaning needs to be 4.5 to 1.
>
> **[1:22](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=82)** For large or bold items, it can be three to one.
>
> **[1:25](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=85)** Anything less and you're making people work much harder than they need to.
>
> **[1:29](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=89)** Oh, and just so you're aware, these numbers come from the Web Content Accessibility Guidelines version 2.0.
>
> **[1:35](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=95)** They're a set of guidelines that help you know what things you should and shouldn't do from an accessibility perspective.
>
> **[1:42](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=102)** Let's take a look back at our podcast interface.
>
> **[1:45](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=105)** See the page where we've got the [[Metadata]] listed for each result?
>
> **[1:49](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=109)** The text has a color of 999999 and it is set on white background with color FFFFFF.
>
> **[1:57](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=117)** That just doesn't have enough contrast.
>
> **[2:00](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=120)** Since that text is small, we need to increase the contrast.
>
> **[2:04](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=124)** Here we used 333333 to do the trick.
>
> **[2:08](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=128)** That's plenty of contrast but it could have easily been 777777.
>
> **[2:13](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=133)** That gives us a ratio of exactly 4.5 to 1, the minimum required for normal sized text.
>
> **[2:20](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=140)** There're a lot of tools out there that can help you with contrast.
>
> **[2:23](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=143)** It doesn't matter too much which one you choose.
>
> **[2:25](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=145)** Just remember to use one.
>
> **[2:27](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=147)** The key thing to remember is that it isn't so much about the colors themselves but how they're used in combination with other colors.
>
> **[2:34](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=154)** When you're building pattern libraries, styles guides and [[Design Systems]], make sure that you're always showing colors in pairs that show enough contrast and provide warnings about which colors shouldn't be used together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1), [[Design Systems]] (1)
> **Versions:** 4.5 (2), version 2 (1)
> **CLI Commands:** find (1), make (1)
> **Best Practices:** the key is (1), remember to (1)
> **Env Vars:** ffffff (1)
> **Speakers:** - designers (1)

#### [Animation, movement, and flashing](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=0)** - When was the last time you saw an animation or motion on the web?
>
> **[0:04](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=4)** There's a good chance it was within the last day or two.
>
> **[0:07](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=7)** Animation and motion techniques are becoming more popular, as they create engagement and a sense of excitement in our designs.
>
> **[0:15](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=15)** They can be used in very functional ways, too, to attract attention.
>
> **[0:19](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=19)** When you attempt to log into a site like [icloud.com](https://icloud.com) or use Stripe Checkout to pay for something online, the entire login form will shake when you enter incorrect information.
>
> **[0:30](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=30)** It's a subtle way of getting your attention to say, "Hey, something went wrong."
>
> **[0:35](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=35)** Many sites also use large animated background images or videos as a way of pulling you into the interface.
>
> **[0:42](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=42)** Parallax effects are used to create a sense of depth in interfaces.
>
> **[0:46](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=46)** You'll see it when you're scrolling down a screen and it looks like a photo is actually behind the surface of the page, because the page and the photo are moving at slightly different speeds.
>
> **[0:56](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=56)** Have you ever stood at the bottom of a tall building and looked up and experienced that feeling of vertigo, where your reference points to the ground are gone and you start to feel almost dizzy and maybe even nauseous?
>
> **[1:08](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=68)** Or maybe you've experienced some serious headaches when you've been looking at the screen for too long.
>
> **[1:13](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=73)** What if I told you that some people feel that vertigo, dizziness, nausea, or even pain because of those animations?
>
> **[1:21](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=81)** It's a real thing.
>
> **[1:22](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=82)** You may not have heard of it, but these effects are loosely grouped into what we call vestibular disorders.
>
> **[1:28](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=88)** People experience these things every single day, often when they experience unexpected large-scale animations.
>
> **[1:36](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=96)** This is an area of accessibility we're only just starting to learn about, but we see fairly widespread evidence of it in social media, people posting that their mobile phone's predictive text keyboard showing up and disappearing is making them dizzy or that the Parallax effect on a webpage when scrolling is giving them headaches.
>
> **[1:55](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=115)** Look for the hashtag dizzy or vestibular on your social media.
>
> **[1:59](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=119)** If you want to see more detail on how it has impacted people in the past, go see this summary article I wrote at Sateach.es/vestibular.
>
> **[2:07](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=127)** That's S-A-T-E-A-C-H.E-S/vestibular.
>
> **[2:13](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=133)** Does that mean we can't use animations?
>
> **[2:16](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=136)** Not really, we can use them, but we need to do it responsibly.
>
> **[2:20](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=140)** Using animation and motion in a webpage responsibly means a few things.
>
> **[2:25](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=145)** Allow a person the choice to turn animations off.
>
> **[2:28](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=148)** There's a reduced motion setting in iOS that does just that system-wide.
>
> **[2:33](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=153)** Your webpages can actually look for that setting and respect it.
>
> **[2:38](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=158)** Make sure your site or app doesn't rely on animation.
>
> **[2:42](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=162)** What happens if someone does prefer reduced motion?
>
> **[2:45](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=165)** Can they still get all the content and the functionality?
>
> **[2:48](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=168)** Finally, we want to create stateful animations, where we define a logical start and end state.
>
> **[2:55](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=175)** If someone prefers for things not to animate, instead of a slide-in effect, they could use a dissolve effect to get from start to end.
>
> **[3:03](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=183)** Flashing content can also have a profound effect.
>
> **[3:06](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=186)** For people with photosensitive epilepsy, content that flashes, like a strobe light, can trigger a seizure.
>
> **[3:13](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=193)** You'll often see trigger warnings going into movie theaters or even some amusement park rides letting people know of the strobe effects in advance.
>
> **[3:22](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=202)** While we don't often put trigger warnings on the web, we know that content that flashes more than three times per second can set off a seizure.
>
> **[3:29](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=209)** Oh, and if you noticed, I didn't include any visual examples of those types of animation or flashing content in this video, why?
>
> **[3:38](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=218)** I didn't want to trigger any issues.
>
> **[3:39](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=219)** And there's plenty of great examples out there that you can find on the web.
>
> **[3:43](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=223)** For great resources on animation, you'll definitely want to connect with Val Head on Twitter @vlh and Rachel Nabors, @rachelnabors.
>
> **[3:53](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=233)** Animation and motion in webpages is a growing trend, and yes, it can be quite powerful.
>
> **[3:59](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=239)** So yes, use animation.
>
> **[4:01](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=241)** For most sites some-small scale animations can be very effective in your design.
>
> **[4:06](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=246)** And remember the famous words from Uncle Ben, "With great power comes great responsibility."

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** ios (1)
> **URLs:** [icloud.com](https://icloud.com) (1)
> **Speakers:** - when (1)

#### [Proximity and grouping in design](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=0)** - Earlier in the course, I shared five personas with you.
>
> **[0:04](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=4)** One of them was Sean.
>
> **[0:05](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=5)** He's 31 years old, does all his shopping online, and has low vision.
>
> **[0:11](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=11)** He uses a magnifier at 400%, so that he can see things on the screen.
>
> **[0:16](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=16)** That means that he'll only be able to see a small portion of the screen at once.
>
> **[0:20](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=20)** Most people with low vision will start at the top left of a page; call that their home base, and they orient themselves.
>
> **[0:27](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=27)** Then they'll move through the [[Representational State Transfer (REST)|rest]] of the content of the page.
>
> **[0:30](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=30)** Let's simulate that.
>
> **[0:32](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=32)** We're going to use something that I call the straw test.
>
> **[0:35](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=35)** I remember hearing from several people with low vision that their particular vision makes it like they're looking through a straw all the time.
>
> **[0:43](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=43)** So, I started using that analogy to help designers find opportunities for making their designs work better for people with low vision.
>
> **[0:51](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=51)** Go and get an actual straw, or hold up your fist like you're holding a straw, and look through it at the screen.
>
> **[1:01](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=61)** We've effectively limited your view there, just like Sean might experience.
>
> **[1:06](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=66)** I'm going to show our podcast page on the screen, and what you need to do is hold up your straw, and while you're looking through it, go through the motion to skip ahead to the 19 minute mark of the podcast.
>
> **[1:19](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=79)** Take 10 seconds or so to do that now.
>
> **[1:32](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=92)** What did you notice when you were sliding the player across to 19 minutes?
>
> **[1:37](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=97)** Unless your straw was really, really big, you wouldn't have been able to see the thumb on the audio player and the time counter at the same time.
>
> **[1:45](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=105)** The limited field of view makes it impossible.
>
> **[1:49](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=109)** So, how can you solve that?
>
> **[1:51](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=111)** I can think of a couple of ways fairly quickly.
>
> **[1:54](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=114)** First, you could just put the time counter above or below the sliding thumb, so that as you moved it across, you could see the time too.
>
> **[2:03](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=123)** You could also make it so that the time counter is editable, and when you type a new value in, the podcast skips ahead to that time.
>
> **[2:11](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=131)** In both of those cases, we made a very small change to the interface, but with huge benefits to Sean.
>
> **[2:17](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=137)** Now, let's look at this eCommerce transaction, and how it might impact someone with low vision.
>
> **[2:24](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=144)** Here's a view of the t-shirt page.
>
> **[2:26](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=146)** Watch as I click on Add To Cart.
>
> **[2:28](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=148)** The Shopping Cart in the top right corner of the page updates.
>
> **[2:32](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=152)** Now, I want you to see what it might be like for Sean.
>
> **[2:36](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=156)** If we use the magnifier built into [[Windows]], you'll see that this is quite similar to the straw test in that we're only able to see a small portion of the screen.
>
> **[2:45](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=165)** We're over on the right hand side of the page, and when we click Add To Cart, the part of the page that updates is so far away, you can't see it while you're magnified.
>
> **[2:55](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=175)** There are lots of ways to help address this issue.
>
> **[2:58](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=178)** The easiest is building in some visual feedback to the Add To Cart button.
>
> **[3:03](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=183)** Here's a version where the digit, 1, shows on the button after the click, and then moves up to the cart.
>
> **[3:10](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=190)** This is a simple strategy.
>
> **[3:12](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=192)** It helps provide feedback right away that something happened.
>
> **[3:16](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=196)** Sean should be able to see it because it'll be in his field of view.
>
> **[3:20](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=200)** In [[User Experience (UX)|user experience]] terms, this is often referred to as the principle of proximity.
>
> **[3:25](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=205)** We need to group related items together, near one another, to show the relationship between them, and to help people succeed in our user task flows.
>
> **[3:34](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=214)** This is especially important to people with low vision.
>
> **[3:37](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=217)** Some people may have the screen magnified 200%, 400%, or even more.
>
> **[3:44](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=224)** Just to put that into perspective, if the screen is magnified to 400%, that means that they're seeing only 1/16 of the page at a time.
>
> **[3:54](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=234)** Let's look at another example from the shipping page.
>
> **[3:58](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=238)** As we fill in the form while magnified, we enter a zip code, and that automatically updates the shipping cost.
>
> **[4:05](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=245)** Unfortunately, it's a long way away from the source of the action.
>
> **[4:10](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=250)** Knowing what you now know, how could you improve this design?
>
> **[4:14](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=254)** The easiest method is likely to include some visual feedback near the shipping field, so that it's in the view while magnified.
>
> **[4:22](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=262)** That doesn't mean it can't also be updated in the sidebar.
>
> **[4:25](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=265)** This is a case of finding a way to leave the design as is, but adding in a small update to make it better for someone like Sean.
>
> **[4:34](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=274)** The straw test is an easy way to help you identify areas in your design where proximity needs some attention.
>
> **[4:40](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=280)** I like to use the straw test on everything from wire frames to interactive prototypes, and to sites that are in production.
>
> **[4:47](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=287)** It's a simple tool that can have a huge impact.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Windows]] (1), [[User Experience (UX)|User experience]] (1)
> **Definitions:** means that (2), is a  (2), is an  (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (1), in the sidebar (1)
> **Analogies:** just like (1), similar to (1)
> **Code Identifiers:** ecommerce (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - earlier (1)

#### [Effective visual focus indicators](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=0)** - One of the most fundamental principles of accessibility is the need for keyboard navigation.
>
> **[0:07](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=7)** If you think back to our personas, both Mary and Maxine need keyboard interactivity to use the web.
>
> **[0:13](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=13)** They use the tab key, enter, arrow keys, and space bar to move through the page and to activate buttons and links.
>
> **[0:22](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=22)** There's only one fundamental difference between them.
>
> **[0:25](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=25)** They rely on the keyboard for different reasons.
>
> **[0:28](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=28)** Mary is blind and can't see the screen to see where a mouse cursor is.
>
> **[0:33](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=33)** She listens to the web by using a screen reader.
>
> **[0:36](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=36)** As she uses her arrow keys and tab key to move around, her screen reader will read text to her, let her know which form field she's in, or which button she's on.
>
> **[0:47](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=47)** Maxine, on the other hand, can see the screen.
>
> **[0:50](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=50)** Even though she could see the mouse cursor, using the mouse is too painful because of her arthritis.
>
> **[0:57](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=57)** Maxine is what we'd call a sighted keyboard user, and this next technique is aimed directly at her.
>
> **[1:03](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=63)** As she moves through the page, she doesn't hear things being read out to her.
>
> **[1:08](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=68)** She needs to see where the cursor is, and that means she needs a good, visible focus indicator.
>
> **[1:15](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=75)** When a sighted keyboard user moves through the page, they need to see the focus outline.
>
> **[1:20](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=80)** Now, there's a default focus outline included in every browser.
>
> **[1:24](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=84)** Safari and Chrome use a blue glow focus indicator, and Internet Explorer and Firefox use a thin, dark gray dotted line.
>
> **[1:33](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=93)** Here you can see, as we tab through the page in Safari, we can't see where the focus is on many parts of the page.
>
> **[1:40](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=100)** This is likely because these indicators don't look like they're integrated into the design.
>
> **[1:46](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=106)** So a designer asks to suppress it with a simple bit of CSS.
>
> **[1:51](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=111)** They'll put outline: none in their pages, which makes that focus indicator disappear.
>
> **[1:57](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=117)** This isn't good for Maxine.
>
> **[1:59](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=119)** She can't see where the focus is reliably for all those active elements of the page.
>
> **[2:05](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=125)** The maintenance packages don't look like they ever received the focus nor does the Request a quote button.
>
> **[2:11](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=131)** If we switch to the other tab, you'll see that the default focus indicator is back, and as we tab through the navigation, packages, and quote button, we have really clear focus indicators on every active part of the page.
>
> **[2:25](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=145)** We see a similar effect in Internet Explorer.
>
> **[2:28](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=148)** The first tab doesn't have a good :focus state all the way through the page.
>
> **[2:32](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=152)** And the second tab does, all because of the presence of outline: none.
>
> **[2:38](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=158)** The default focus indicator may be slightly different for every browser.
>
> **[2:42](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=162)** So now I'm going to tell you to do exactly the opposite of what you think I might.
>
> **[2:48](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=168)** Most people will likely tell you not to use outline: none in your CSS, but I'm going to tell you use outline: none.
>
> **[2:56](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=176)** Why?
>
> **[2:58](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=178)** In some blue designs, the default focus indicator in WebKit is hardly noticeable.
>
> **[3:03](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=183)** And in dark designs, the default focus indicator in IE and Firefox is hardly noticeable.
>
> **[3:10](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=190)** You need to follow the golden rule.
>
> **[3:12](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=192)** If you take away something that is natively part of the browser, you need to replace it with something that is as good or even better.
>
> **[3:20](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=200)** So don't rely on the default focus indicator, take some time to really plan your :focus states, combine outline: none with well designed :focus states on everything, reuse your :hover colors for :focus colors, use text decoration: underline, and use background-color changes to indicate focus.
>
> **[3:40](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=220)** Once you design :focus states for all your work, make sure the developer follows through by testing fully with the keyboard.
>
> **[3:47](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=227)** Do that, and you'll make the interface really easy to use for a sighted keyboard user like Maxine.

> [!info]- Semantic Content
>
> **Tools:** safari (2), firefox (2)
> **CLI Commands:** make (2)
> **Env Vars:** css (2)
> **UI Navigation:** switch to (1)
> **Speakers:** - one (1)


### 3. Keyboard Interaction

[↑ Back to Table of Contents](#table-of-contents)

#### [Keyboard functionality](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=0)** - One of the most important requirements for accessibility is keyboard usage, why?
>
> **[0:06](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=6)** Because this actually affects people with many different types of disabilities.
>
> **[0:10](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=10)** When you make things accessible to use with a keyboard, you make it work for anyone who can't use a mouse.
>
> **[0:17](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=17)** Some people like Maxine have mobility challenges or issues with dexterity.
>
> **[0:22](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=22)** And some people like Mary can't see the screen and need to use a keyboard.
>
> **[0:26](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=26)** You also make it accessible to people that use other assistive technologies like voice recognition software, switches or other devices.
>
> **[0:35](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=35)** Remember, we don't have those technologies or disabilities represented in our personas, and that's okay.
>
> **[0:41](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=41)** As you learn more, you'll create new personas that represent these functional needs in different ways.
>
> **[0:47](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=47)** Here's the key principle to remember.
>
> **[0:49](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=49)** You must be able to complete all tasks using a keyboard.
>
> **[0:53](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=53)** Must, this is not optional.
>
> **[0:56](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=56)** And it's the very first thing I test when I'm looking at a client site to see how accessible it is, and it should be the very first thing you look at too.
>
> **[1:04](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=64)** The simplest way to understand it is to look at some examples.
>
> **[1:08](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=68)** We've got an example here where I'll start to Tab through the page using the keyboard and you can see that I can access the things in the navigation.
>
> **[1:20](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=80)** You can see that they're changing as I Tab through them.
>
> **[1:24](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=84)** But when I make it to the next part or the main part of the page, you can see that the keyboard skipped over every block of content that's here.
>
> **[1:38](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=98)** I can click on each one of these to select them with the mouse, but it requires the mouse.
>
> **[1:45](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=105)** There's no keyboard mechanism for me to be able to do this.
>
> **[1:48](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=108)** So as I Tab through, you can see the Tab focus goes straight from the navigation, down to the Request a Quote button at the bottom.
>
> **[1:56](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=116)** In this version of the page, we've actually enabled all the keyboard navigation that we need.
>
> **[2:03](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=123)** So as I Tab through, I Tab through the navigation, and I get to the main content.
>
> **[2:10](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=130)** And I can use my arrow keys to move between these blocks of content.
>
> **[2:18](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=138)** And I can Tab off of that block and onto the Request a Quote button.
>
> **[2:23](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=143)** This was a simple case of not using the right element.
>
> **[2:26](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=146)** When the site was built, it was built using divs with [[JavaScript]] attached to them.
>
> **[2:32](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=152)** You can't Tab to a div by default.
>
> **[2:35](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=155)** Sure, the JavaScript made the click actions happen, but only for a mouse user.
>
> **[2:40](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=160)** The solution was to use something that was focusable in the first place, a simple link.
>
> **[2:44](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=164)** And then attaching the JavaScript to the link instead of to a div.
>
> **[2:49](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=169)** From a design perspective, the why behind it doesn't matter so much, but you as a designer are in charge of making sure that you take inventory of all functionality available to a mouse user, and then ensuring there's an equivalent keyboard mechanism.
>
> **[3:04](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=184)** Let's look at a more complex example.
>
> **[3:08](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=188)** The main functionality on this page is a map.
>
> **[3:11](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=191)** And there's a lot of different controls on it that I can click.
>
> **[3:14](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=194)** I can pan up, pan down, pan left, pan right multiple times.
>
> **[3:23](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=203)** I can recenter the map.
>
> **[3:25](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=205)** I can [[Zoom]] in, zoom out, and I even have little flags available that tell me some data about each pin on the map when I click on it.
>
> **[3:40](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=220)** So in order to make sure that we're providing equal functionality for all different users, we need to make sure that all of that functionality is available for somebody using a keyboard.
>
> **[3:52](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=232)** We can do that quite easily by making sure that each one of the controls that we clicked on with the mouse is a simple button.
>
> **[4:01](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=241)** So as I Tab through the interface, we'll take the focus down into the map.
>
> **[4:07](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=247)** You can see as I use the keyboard, each control inside the map takes the focus.
>
> **[4:13](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=253)** Right now, you can see that it's on pan up.
>
> **[4:17](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=257)** And if I hit the Enter key, it pans up.
>
> **[4:21](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=261)** If I hit Tab, I move to pan left.
>
> **[4:24](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=264)** The Enter key will pan left, hit Tab to center, to pan right, to pan down, all of those work with the keyboard.
>
> **[4:40](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=280)** If I continue on, I should get to the zoom in control
>
> **[4:48](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=288)** which I can activate using the keyboard.
>
> **[4:52](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=292)** I can also zoom out using the keyboard.
>
> **[4:56](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=296)** All of that functionality was equivalent to what is provided for a mouse user.
>
> **[5:02](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=302)** But we've actually gone to the point of making this even a little bit better for a keyboard user.
>
> **[5:07](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=307)** A mouse user has the ability to drag the map and move it fairly easily within the interface.
>
> **[5:17](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=317)** It's not quite that simple to do drag and drop for a keyboard user.
>
> **[5:21](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=321)** But what we have done, is enabled some really simple navigation techniques.
>
> **[5:26](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=326)** So if I Tab through the interface, you'll see that the map as a whole takes the focus.
>
> **[5:32](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=332)** And you can tell by that big, blue focus outline around it.
>
> **[5:36](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=336)** We've also set this up so that when the map takes the focus, I can use the arrow keys to pan left, pan right, pan up, pan down, and I can use the plus key to zoom in and the minus key to zoom out.
>
> **[5:56](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=356)** So as you can see, we've created the exact same functionality for a keyboard user that a mouse user has.
>
> **[6:03](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=363)** The final piece of the puzzle was all of these little pins within the map that have a mouse click on them that show some data about that pin.
>
> **[6:16](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=376)** Unfortunately, with [[Google]] Maps, there's no way to use the keyboard to get at each of those pins.
>
> **[6:22](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=382)** If I Tab through the interface, you'll see that I can go through all of the other components that are there, but the focus never gets to those pins themselves.
>
> **[6:34](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=394)** So in order to make sure that people have access to that data that's in those little call-outs, that show when we click on the pins, we've replicated all of that information down below the map so that somebody that's a keyboard user can get at it and not have to rely on the mouse.
>
> **[6:54](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=414)** One thing to keep in mind.
>
> **[6:56](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=416)** Making sure that we can do everything with the keyboard doesn't mean that we need to be able to Tab to all of the content.
>
> **[7:02](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=422)** Some people often misinterpret.
>
> **[7:04](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=424)** You need to be able to do everything with the keyboard and make every single paragraph of text on the page tabbable, that's not the case.
>
> **[7:12](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=432)** Just focus on the function of the interface, and carefully think through how you'll accomplish every task with a keyboard.
>
> **[7:20](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=440)** Links, buttons and form fields are your friends here.
>
> **[7:23](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=443)** They've got all the keyboard access you need built right in.
>
> **[7:26](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=446)** So use those elements and you'll be in good shape.
>
> **[7:30](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=450)** And if you have to create a custom element, try to base it off of those simple elements that are already keyboard-accessible.
>
> **[7:37](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=457)** The map controls are just button elements.
>
> **[7:39](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=459)** The thumb on the podcast player is just an anchor element.
>
> **[7:43](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=463)** There's rarely a case where you need to use a div.
>
> **[7:46](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=466)** So stick with simple elements and you'll make things keyboard-accessible by default.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (6), [[JavaScript]] (3), [[Google]] (1)
> **CLI Commands:** make (9)
> **UI Navigation:** click on (4), drag and drop (1)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - one (1)

#### [Avoiding keyboard traps](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=0)** - When we're designing and building sites, we often need to put in some custom functionality for custom widgets, like audio and video players, sliders, maps, or other complex controls.
>
> **[0:12](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=12)** In almost all of those cases, we need to use some [[JavaScript]] to make that magic happen.
>
> **[0:18](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=18)** Sometimes the JavaScript can go wrong, and we create something known as a keyboard trap.
>
> **[0:23](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=23)** A scenario where the keyboard cursor will get stuck.
>
> **[0:26](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=26)** Usually that's because the person that designed and built that custom control or that task flow was really thinking about people that use a mouse, and not keyboard users.
>
> **[0:36](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=36)** Here's three examples of keyboard traps.
>
> **[0:38](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=38)** Each one is slightly different, but the end result is the same; a person getting stuck and not being able to access some of the content or functionality that they need using their keyboard.
>
> **[0:49](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=49)** In this first example, I can use the keyboard to fill out the billing form.
>
> **[0:53](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=53)** But something isn't quite right.
>
> **[0:55](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=55)** I can tab through the fields, and fill them out easily.
>
> **[0:59](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=59)** I enter my name, credit card, and expiry date, and press tab to move into the security code field.
>
> **[1:05](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=65)** I realize that I entered the wrong expiry date.
>
> **[1:08](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=68)** So I press shift tab to go back into the expiry field.
>
> **[1:12](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=72)** And that's where it breaks.
>
> **[1:13](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=73)** I can't leave the security code field.
>
> **[1:16](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=76)** I can't move backwards through the form, and I can't move forward to get to the next step button.
>
> **[1:21](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=81)** I'm stuck in a keyboard trap.
>
> **[1:24](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=84)** This is likely because security code is a required field, and there's some JavaScript on there that is saying, "No, you can't leave this field until you've entered your security code."
>
> **[1:34](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=94)** For a person using a mouse, this keyboard trap isn't a big problem.
>
> **[1:38](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=98)** They can just click somewhere else on the page and continue.
>
> **[1:41](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=101)** But for someone that has no choice but to use a keyboard, this is pretty bad.
>
> **[1:46](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=106)** They get stuck in this field, and they have to close the browser to start all over again, or give up entirely.
>
> **[1:53](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=113)** Here's another example.
>
> **[1:54](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=114)** It's slightly different.
>
> **[1:56](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=116)** We often see auto tabbing scripts where some JavaScript will be used to auto advance the cursor when typing each part of a phone number in three fields.
>
> **[2:06](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=126)** We type three numbers, and the cursor automatically moves ahead.
>
> **[2:10](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=130)** Then another three, and it moves ahead.
>
> **[2:12](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=132)** And finally, the last four.
>
> **[2:15](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=135)** If I need to make a correction, I can't move backwards because the JavaScript sees there are three characters in there, and it advances the cursor to the next field again.
>
> **[2:24](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=144)** This is particularly troublesome for someone like Mary, using a screen reader.
>
> **[2:28](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=148)** She can't see what she typed in.
>
> **[2:30](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=150)** So to verify that she typed her number in correctly, she needs to move backwards through the fields.
>
> **[2:37](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=157)** Keep this in mind.
>
> **[2:38](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=158)** And this is important.
>
> **[2:39](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=159)** These problems aren't caused just because there was JavaScript on those fields.
>
> **[2:43](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=163)** It's happening in both of these cases because the JavaScript isn't well written, and it didn't take into account that people might need to correct their work using a keyboard.
>
> **[2:54](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=174)** Maybe it was incomplete testing, or scenarios that weren't on the radar when the script was designed.
>
> **[2:59](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=179)** Why doesn't matter so much?
>
> **[3:01](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=181)** We just need to know that we can't let this happen.
>
> **[3:05](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=185)** Here's a final example.
>
> **[3:06](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=186)** This bank login form.
>
> **[3:09](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=189)** As I tab through, you can follow the cursor through all the fields.
>
> **[3:13](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=193)** Card number, password, log in button, main navigation, view details button, card nickname field, then back to password.
>
> **[3:26](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=206)** We get stuck in that cycle.
>
> **[3:28](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=208)** So there are key parts of the interface we can't get to with the keyboard.
>
> **[3:32](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=212)** The remember my card number, and nickname check box, and all these links in the right-hand side bar.
>
> **[3:38](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=218)** I know what you're thinking.
>
> **[3:40](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=220)** "That would never happened to me or my team.
>
> **[3:42](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=222)** That's just bad JavaScript."
>
> **[3:45](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=225)** Except it does happen, all the time, to great teams.
>
> **[3:50](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=230)** Here's the key to preventing it.
>
> **[3:52](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=232)** As a designer, you should document the tab order for things so that a developer knows how the keyboard flow should work.
>
> **[3:59](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=239)** When you document keyboard flows, you communicate with the development team and the testing team.
>
> **[4:04](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=244)** You provide the expected behaviors.
>
> **[4:07](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=247)** It helps you build keyboard functionality into all your work as a baseline expectation for everyone.
>
> **[4:13](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=253)** And when you do that, these kinds of things, like keyboard traps, have much less chance of making it to your live site, making it much easier for anyone that relies on a keyboard to get things done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (8)
> **CLI Commands:** make (2)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - when (1)

#### [Linear flow of content](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=0)** - One of the simplest and yet most important concepts in accessibility is making sure that things are read in the right order.
>
> **[0:08](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=8)** Mary, who uses a screen reader, generally reads content in the order in which it's placed on the page in the source order.
>
> **[0:15](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=15)** So if there are two columns of text on a page, whichever one appears in the source order first will be what she hears first, if she's reading the page from top to bottom.
>
> **[0:25](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=25)** Giovanni, someone with autism, who might describe himself as neurodivergent, expects a certain amount of predictability in the interface.
>
> **[0:33](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=33)** When he's tabbing through pages, he expects the cursor to follow a typical pattern of going from top to bottom and left to right.
>
> **[0:41](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=41)** Sean has low vision and magnifies the screen.
>
> **[0:44](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=44)** We mentioned earlier that the top left corner of the page is his home base.
>
> **[0:49](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=49)** Since he can't see the entire page at once it can be disorienting to look for content that is way off in the right hand side bar.
>
> **[0:56](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=56)** Order matters for a lot of people.
>
> **[0:59](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=59)** In the eCommerce billing flow, we have two blocks of content, the block on the left with the billing form and the block on the right with the order summary and the ability to add gift wrap and include a note for the recipient.
>
> **[1:12](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=72)** Now let's think about this from a top to bottom, left to right perspective.
>
> **[1:18](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=78)** Should we interact with the billing form first or should we interact with the order summary first?
>
> **[1:24](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=84)** You'll need to make that decision at some point.
>
> **[1:26](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=86)** So let's look at both options.
>
> **[1:29](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=89)** If we put the billing form first, and then the order summary second with our current design, the interaction to fill out and submit the form would go something like this for a keyboard user: move through the billing fields and fill them out, move to the next step button, read the order summary, add gift wrap in a note, move backwards through the order summary, move backwards to the next step button, and then activate the next step button.
>
> **[1:57](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=117)** What about the other scenario, where we put the order summary first and then the billing form?
>
> **[2:02](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=122)** Here's what that experience might be like for a keyboard user: read the order summary, add gift wrap and note, move through the billing fields and fill them out, move to the next step button and activate the next step button.
>
> **[2:17](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=137)** Which content flow is better?
>
> **[2:19](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=139)** From a keyboard perspective, having the order summary come first not only requires less work with the keyboard, but it also makes more sense.
>
> **[2:28](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=148)** It'd be good to get a reminder of what you're buying before you get to the next step button.
>
> **[2:33](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=153)** If we have the billing form block of content appear first, then a keyboard user who can't see the screen may even get to the next step button and not realize there's any content after it.
>
> **[2:44](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=164)** That person might just submit the button without knowing about the gift wrap and message options.
>
> **[2:50](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=170)** At this point, we'd likely decide to put the order summary first in the source order.
>
> **[2:54](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=174)** You can even see the impact of it immediately by digging in through the inspector and reordering the code.
>
> **[3:01](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=181)** Here's a headings list in voiceover, the screen reader that comes built in with an apple computer.
>
> **[3:07](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=187)** I'll pull that up using control option U and you can see that it shows the billing heading first, and then the order summary one.
>
> **[3:15](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=195)** We can switch the content order by taking this aside and dragging it to be before the article in the Dom.
>
> **[3:22](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=202)** Now the aside content that contains the order summary is above the billing form.
>
> **[3:27](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=207)** If we close the inspector and pull up the headings list and voice over again, you can see that the order summary is first now, and that's the order that we're after.
>
> **[3:36](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=216)** We made no changes to the CSS, just a simple change to the order of the code, and we've created a much better experience by creating a better linear flow.
>
> **[3:47](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=227)** I encourage you to always be thinking about the steps someone would need to follow to complete a transaction or navigate and read content with just a keyboard.
>
> **[3:56](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=236)** It's your responsibility as a designer to put thought into this.
>
> **[4:00](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=240)** Be intentional with the order of the content on the page and you'll make things much more accessible for a lot of people.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Identifiers:** ecommerce (1)
> **Env Vars:** css (1)
> **Cross-References:** we mentioned (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - one (1)


### 4. Touch Interfaces

[↑ Back to Table of Contents](#table-of-contents)

#### [Accessibility and touch](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=0)** - Designing and building touch friendly interfaces that work for people with all kinds of different needs serves as an important step in making your content more inclusive.
>
> **[0:09](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=9)** In fact, it was the advent of touchscreen interfaces that caused a lot of people to think about accessibility differently.
>
> **[0:16](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=16)** When creating more accessible content online, the mantra used to be "Keyboard, keyboard, keyboard," but it really isn't as simple as that anymore.
>
> **[0:25](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=25)** Touch interfaces vary in size, as you can imagine.
>
> **[0:28](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=28)** Anywhere from the 38-millimeter Apple Watch, all the way up to 28-inch diagonal [[Microsoft]] Surface Studio, and everything in between.
>
> **[0:37](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=37)** They all use touch, multi-touch, gestures, and in some cases, 3D touch.
>
> **[0:42](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=42)** And all of these have an impact on accessibility.
>
> **[0:45](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=45)** In order to understand touchscreens a little better, we need to expand our understanding of accessibility a little more.
>
> **[0:52](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=52)** We need to understand how people with disabilities might use these new ways of interacting with your content.
>
> **[0:58](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=58)** Think back to our personas.
>
> **[1:00](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=60)** Sean has low vision.
>
> **[1:01](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=61)** Mary is blind.
>
> **[1:03](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=63)** Maxine has dexterity issues.
>
> **[1:05](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=65)** Rose is deaf.
>
> **[1:06](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=66)** And Giovanni is autistic.
>
> **[1:09](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=69)** And it's really likely that all of them have some sort of touch-enabled device.
>
> **[1:13](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=73)** Let's add another one to the mix.
>
> **[1:16](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=76)** Renata is a product owner at a national insurance company.
>
> **[1:20](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=80)** A few years ago, she lost both of her arms above the elbow during her tour overseas as a reserve officer in the military.
>
> **[1:27](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=87)** When she returned, Renata went through about 18 months of rehabilitation and she transitioned to working as a product owner again.
>
> **[1:35](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=95)** At work, she's able to use the same systems as before, with some additional software and [[Hardware]] technologies.
>
> **[1:42](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=102)** She's just as enthusiastic as before about her job, and she uses podcasts to keep up with the [[Agile Development|Agile]] industry.
>
> **[1:49](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=109)** Renata loves her smartphone when she's on the go, but she prefers her tablet when she's home with her family.
>
> **[1:56](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=116)** There are some specific accessibility concepts we need to keep in mind when we're designing for touch screens, but the most important is this.
>
> **[2:04](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=124)** We're not all the same.
>
> **[2:07](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=127)** Let's think about that for a minute.
>
> **[2:09](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=129)** How do you use your smartphone?
>
> **[2:12](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=132)** Do you use your thumbs for scrolling, or your fingers?
>
> **[2:16](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=136)** How do you type?
>
> **[2:17](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=137)** Do you hold it in one hand or two?
>
> **[2:19](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=139)** Does it depend?
>
> **[2:21](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=141)** Maybe you don't even have a regular pattern.
>
> **[2:24](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=144)** What about Renata?
>
> **[2:26](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=146)** She doesn't have any thumbs or fingers.
>
> **[2:29](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=149)** What if I told you she uses her feet to operate her tablet?
>
> **[2:33](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=153)** How would that change your design if you literally optimized your design for foot operation?
>
> **[2:40](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=160)** Mary might make her screen reader cursor move with a swipe or double-tap gesture to read the objects on the screen.
>
> **[2:47](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=167)** Sean may use voiceover with magnification and a Bluetooth keyboard attached, where he literally doesn't ever touch the screen at all.
>
> **[2:55](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=175)** And what about Christopher Hills?
>
> **[2:57](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=177)** He has cerebral palsy, and operates his touchscreen devices with a switch that he activates with his head.
>
> **[3:04](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=184)** If you haven't seen his YouTube videos before, you should definitely go check them out for a different perspective.
>
> **[3:10](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=190)** That's what I meant when I said, "We're not all the same."
>
> **[3:14](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=194)** We've seen scenarios before where a screen says, "Tap anywhere on the screen to continue."
>
> **[3:20](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=200)** And while that might work for someone that can touch the screen, for a person using a screen reader, it's much better to have an actual button to activate to continue.
>
> **[3:30](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=210)** We have to remember to design things that take into account these differences.
>
> **[3:34](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=214)** When you design touch interfaces, consider that some people may never physically touch the screen.
>
> **[3:40](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=220)** How can you make sure that they can achieve the same functionality?
>
> **[3:44](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=224)** Answer this question, and you're on the right path to making your sites and apps more accessible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[Hardware]] (1), [[Agile Development|Agile]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Best Practices:** remember to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - designing (1)

#### [Target sizes](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=0)** - You've likely experienced this before.
>
> **[0:02](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=2)** You try to touch or tap something on your phone, and you miss.
>
> **[0:06](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=6)** Think radio button or a checkbox.
>
> **[0:09](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=9)** They're both pretty small targets.
>
> **[0:11](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=11)** Or how about a link or a button that submits a form?
>
> **[0:15](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=15)** How about that image carousel that includes little dots to allow you to choose an item in the carousel?
>
> **[0:21](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=21)** They're all too small.
>
> **[0:22](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=22)** And when you tap, you miss and don't activate anything.
>
> **[0:26](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=26)** Or maybe they're too close together and you hit the wrong one.
>
> **[0:30](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=30)** You end up zooming the interface to be able to have a big enough target to tap, or so that the interface is big enough so that you can make sure you hit the right link.
>
> **[0:39](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=39)** It's easy enough to fix.
>
> **[0:41](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=41)** Make things a little bigger and give them some breathing room.
>
> **[0:45](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=45)** Take a look at this podcast search results page.
>
> **[0:48](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=48)** In this case, there's 74 search results.
>
> **[0:51](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=51)** So there's some results pagination at the bottom.
>
> **[0:54](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=54)** Those will already be difficult for Maxine to tap.
>
> **[0:57](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=57)** Her arthritis sometimes acts up and makes it difficult to hit those targets with accuracy.
>
> **[1:03](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=63)** And Renata, she uses her feet.
>
> **[1:06](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=66)** Or what about someone that searched using their phone with voice recognition, and now needs to page through the results but taps using their nose?
>
> **[1:14](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=74)** Yes, with their nose.
>
> **[1:17](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=77)** We can make things much easier by increasing the size of the targets and spacing them out.
>
> **[1:22](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=82)** Not only are they larger, but they're also spread out, making it easier to activate for everyone.
>
> **[1:28](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=88)** And while we're focused on touch devices here, the larger target size will also benefit people with dexterity issues that use a mouse or a switch device.
>
> **[1:37](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=97)** It's win-win.
>
> **[1:39](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=99)** Apple, [[Google]], and [[Microsoft]] all have guidance for designing for touch to make sure that targets are big enough.
>
> **[1:45](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=105)** Their guidance varies from 34-by-34 pixels for Microsoft, 44 by 44 for Apple, and 48 by 48 for Google.
>
> **[1:54](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=114)** There's a bit of debate though about whether or not these sizes are even big enough.
>
> **[1:58](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=118)** Bottom line, make them bigger and test your interfaces with people with disabilities in the real world.
>
> **[2:05](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=125)** So those are two quick principles for you to remember.
>
> **[2:07](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=127)** Make targets big enough and space them out a little.
>
> **[2:10](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=130)** That'll make them more accessible for everyone regardless of how they operate the touchscreen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Microsoft]] (2)
> **CLI Commands:** make (7)
> **UI Navigation:** checkbox (1)
> **Speakers:** - you (1)

#### [Working with gestures](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=0)** - Gestures are powerful ways of directly manipulating touchscreen interfaces.
>
> **[0:05](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=5)** And they open new methods for people with disabilities to use touchscreens.
>
> **[0:09](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=9)** Gestures are practically essential for a blind person to operate a touchscreen device.
>
> **[0:14](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=14)** With gestures, they have the ability to swipe through an interface to move a cursor around the screen.
>
> **[0:20](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=20)** Very similar to the way they can use a keyboard to move the cursor on a desktop computer.
>
> **[0:25](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=25)** This is an effective technique because they can't see the screen.
>
> **[0:29](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=29)** They manipulate the cursor with swipes and flicks, up, down, left, right and many others.
>
> **[0:36](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=36)** Here's why that matters to you.
>
> **[0:38](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=38)** When you're designing an interface, remember not everyone will use the touchscreen the same way as you.
>
> **[0:45](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=45)** I recently worked with a client that had come up with a swipe to confirm your transaction functionality.
>
> **[0:50](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=50)** It was designed to help ensure that people really wanted to make that transaction.
>
> **[0:55](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=55)** And they knew they needed to dive a little deeper when it came to accessibility.
>
> **[0:59](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=59)** We talked through a few scenarios.
>
> **[1:01](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=61)** Maxine with arthritis might have a difficult time swiping the control across the screen.
>
> **[1:07](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=67)** Mary who was blind couldn't swipe across the screen the same way because a swipe for her means something else when she uses her screen reader.
>
> **[1:15](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=75)** Renata sometimes uses her feet, but also uses a switch device to operate the interface because gestures are more difficult with her feet.
>
> **[1:25](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=85)** For each of these people, the designers needed to make sure that their assistive technology worked with that swipe to confirm.
>
> **[1:33](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=93)** For Mary, it was making sure that when her screen reader was on, double tapping the control would activate it.
>
> **[1:39](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=99)** For Renata, it was making sure that the swipe mechanism was easy to use while using a switch.
>
> **[1:44](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=104)** And for Maxine, it was making sure that the swipe start, the path on which it traveled and the swipe endpoint had some additional flexibility.
>
> **[1:53](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=113)** They could increase the physical size of the slider to make it easier and allow for the swipe to go slightly off the path for people that might have dexterity issues.
>
> **[2:02](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=122)** So what are the gestures?
>
> **[2:04](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=124)** There's too many to name here, but the best source to understand gestures for assistive technologies on touch screens is to go straight to [[Google]]'s, Apple's and [[Microsoft]]'s documentation.
>
> **[2:16](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=136)** What do you do if a gesture you want to use conflicts with a gesture in use by assistive technology?
>
> **[2:22](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=142)** It's pretty simple actually, design and build another mechanism to accomplish the same thing.
>
> **[2:28](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=148)** For example, we've built a sortable table before where a swipe up or down a column will sort ascending or descending on that column.
>
> **[2:37](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=157)** It was kind of cool, except that swipe up or down is used by a screen reader to either move to the previous or next item or just explore the screen and hear what's under their finger.
>
> **[2:49](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=169)** So what did we do?
>
> **[2:51](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=171)** We needed to build in another mechanism.
>
> **[2:54](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=174)** We made it so that the sort wasn't reliant on the swipe by making the table header cell tappable to toggle between sorting and ascending or descending order.
>
> **[3:04](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=184)** As a side benefit, by doing that, we also just happen to make it work better for someone that uses a keyboard as well since they can't swipe.
>
> **[3:12](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=192)** Take a look at all your designs for touch in this critical way.
>
> **[3:16](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=196)** How would things work if that gesture couldn't be completed?
>
> **[3:20](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=200)** This is just like everything else.
>
> **[3:22](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=202)** I'm not saying don't use gestures.
>
> **[3:25](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=205)** I'm saying use gestures and make sure there's another mechanism to do the same thing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[Microsoft]] (1)
> **CLI Commands:** make (5)
> **Analogies:** similar to (1), for example (1), just like (1)
> **UI Navigation:** toggle (1)
> **Definitions:** is an  (1)
> **Speakers:** - gestures (1)


### 5. Images and Multimedia Accessibility

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with audio and video](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=0)** - The web used to be a text based medium, but that changed when we started adding the ability for browsers to render images.
>
> **[0:08](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=8)** Then came embedded audio and video players.
>
> **[0:11](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=11)** Now we find ourselves where there are more than 400 hours of video uploaded to YouTube, and over 200,000 images uploaded to [[Facebook]] every 60 seconds.
>
> **[0:22](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=22)** There are literally hundreds of thousands of hours of podcasts and audio files available on the internet at all times.
>
> **[0:30](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=30)** Video, audio and images are media rich content.
>
> **[0:34](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=34)** So how do we ensure that the same richness can be shared with people with disabilities?
>
> **[0:39](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=39)** How will Rose access the content she can't hear?
>
> **[0:42](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=42)** How will Mary or Sean access the content that they can't see?
>
> **[0:46](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=46)** in order to understand how we'll make that type of content accessible, we'll need to understand one thing first.
>
> **[0:52](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=52)** What is the purpose of that content?
>
> **[0:56](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=56)** When we understand the purpose of the content, how we expect people to use it, and what their goals are, we can make better decisions about how to make it accessible.
>
> **[1:05](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=65)** Let's take a look at a couple of examples.
>
> **[1:09](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=69)** We specifically mentioned two personas that are very interested in multimedia.
>
> **[1:14](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=74)** Rose is an avid consumer of podcasts to keep up with her fast-paced world on the move as a journalist.
>
> **[1:21](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=81)** And Mary is a music teacher that is planning on using podcasts and video as a teaching tool for her online music courses.
>
> **[1:28](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=88)** So first, let's look at our podcast page.
>
> **[1:32](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=92)** The main content we're talking about here is the podcast itself.
>
> **[1:35](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=95)** And that content is in the MP3 file that lives inside this audio player.
>
> **[1:41](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=101)** How do we expect people would use that content?
>
> **[1:44](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=104)** Rose is on the go all the time and uses it to keep up with the world around her.
>
> **[1:49](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=109)** She frequently travels and downloads and syncs podcasts for offline access to her favorite content.
>
> **[1:56](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=116)** And what about Mary's students?
>
> **[1:58](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=118)** She'll use native audio and video for her online course delivery.
>
> **[2:02](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=122)** We can envision her students learning to play the violin, the flute, or the guitar as beginners.
>
> **[2:09](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=129)** Not only do they need to hear the things that Mary is saying, they'll want to see the techniques that Mary is demonstrating.
>
> **[2:15](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=135)** How to hold the flute or the bow, or where to place their fingers on the guitar fronts.
>
> **[2:20](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=140)** And as beginners, they're likely going to pause and rewind the video a lot for repetition of certain parts of the video.
>
> **[2:27](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=147)** And they're likely going to struggle a little with putting their fingers in exactly the right place without looking at their own fingers.
>
> **[2:34](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=154)** Okay, what are the important parts of those use cases?
>
> **[2:39](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=159)** For Rose, she regularly downloads and syncs for offline access.
>
> **[2:44](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=164)** Mary's students, they need to look at their hands for proper placement, they need the details from the video, they need clear instructions, and they need to be able to easily repeat clips.
>
> **[2:56](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=176)** This step might seem obvious to you, but it's something that we cannot skip in our design process.
>
> **[3:02](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=182)** We need a deeper understanding of how people are going to use that content, whether it's audio, video, or even just plain old images.
>
> **[3:10](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=190)** When we have that level of detail, we can take that forward to make better, more informed decisions about what techniques we need to use to make things accessible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Facebook]] (1)
> **CLI Commands:** make (5), find (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** mp3 (1)
> **Speakers:** - the (1)

#### [Understanding media types](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=0)** - Whether we're talking about images, interactives, audio, or video content, we need to follow a decision making process to determine how we'll make that content accessible.
>
> **[0:12](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=12)** Here's how we normally break content down into groups.
>
> **[0:15](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=15)** First, some types of media content that is considered informational, this is what we call content that is important in and of its own right, where important information is contained in that image, video, or audio.
>
> **[0:28](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=28)** This kind of content needs a text equivalent.
>
> **[0:32](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=32)** Here's some familiar examples of that type of content.
>
> **[0:35](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=35)** The image of the T-shirt on the product page, that likely needs a small description of the T-shirt to go with the information that's conveyed visually.
>
> **[0:44](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=44)** Or think of the podcast.
>
> **[0:46](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=46)** If there is no text based equivalent for the audio file, the content is just outright missing for people with certain disabilities.
>
> **[0:54](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=54)** For Mary, as she creates her content for her students, there's a lot of detail in the visuals, either images or video that is useful to her students.
>
> **[1:05](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=65)** We also have content that is considered functional.
>
> **[1:09](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=69)** This includes images that are part of links or form controls, and that are used for navigation or for performing tasks within the browser.
>
> **[1:17](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=77)** Think of those images on the Green Thumb Lawncare site that provide the pricing for the various services, and the logo in the header of the site.
>
> **[1:25](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=85)** Each of those is part of a link, and therefore, active or functional.
>
> **[1:30](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=90)** The SVG graphics used for the play and pause button on the audio player is also functional.
>
> **[1:37](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=97)** These images are important because they will tell someone about the link, or the function that the buttons will perform.
>
> **[1:44](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=104)** Similar to informational media, this content needs a text equivalent.
>
> **[1:50](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=110)** Finally, we have content that is considered decorative.
>
> **[1:54](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=114)** This includes images or other media that aren't really that important to the page.
>
> **[1:59](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=119)** Think of the arrows in the navigation of our shopping cart.
>
> **[2:02](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=122)** There's not much value in those arrows.
>
> **[2:05](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=125)** So they're likely just fine being considered decorative.
>
> **[2:08](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=128)** A decorative image or other media does not need a text equivalent.
>
> **[2:13](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=133)** A good rule of thumb is to ask yourself, "If this media was gone, will the meaning of the content or page be affected?"
>
> **[2:21](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=141)** If the answer is yes, you need a text equivalent.
>
> **[2:24](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=144)** And if the answer is no, you don't.
>
> **[2:27](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=147)** Now, let's review each scenario and make some decisions on each piece of media on the page.
>
> **[2:33](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=153)** We'll start with the podcast and its audio player.
>
> **[2:37](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=157)** The controls on the player.
>
> **[2:38](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=158)** Are they informational, functional, or decorative?
>
> **[2:44](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=164)** They're functional because they're going to be used to tell someone what function that button performs.
>
> **[2:50](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=170)** They need a text equivalent, and they're pretty straightforward.
>
> **[2:54](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=174)** The text equivalent will depend on the button that's showing, play or pause.
>
> **[2:59](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=179)** What about the podcast audio content itself?
>
> **[3:03](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=183)** Rose loves podcasts, and is deaf.
>
> **[3:06](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=186)** Is that content informational, functional, or decorative?
>
> **[3:11](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=191)** I hope this one is pretty clear.
>
> **[3:13](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=193)** It's informational.
>
> **[3:15](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=195)** The content is valuable in and of its own right, so she needs a text equivalent.
>
> **[3:22](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=202)** The best way to provide a text equivalent for a podcast is to publish a transcript of the audio.
>
> **[3:28](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=208)** Here's an example.
>
> **[3:29](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=209)** We usually publish the transcript on the same page as the podcast itself so that all the different formats of the content are in the same place.
>
> **[3:39](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=219)** Finally, let's look at the product page.
>
> **[3:42](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=222)** We've got the shirt itself, the color swatches, and the arrows in the site's breadcrumb navigation.
>
> **[3:49](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=229)** The shirt, we've already decided that's informational.
>
> **[3:52](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=232)** So it needs a text equivalent that conveys the visual information.
>
> **[3:57](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=237)** How about something like, "Front view of our sky blue crew neck T-shirt."
>
> **[4:02](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=242)** That should convey the same detail as the photo.
>
> **[4:05](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=245)** And what about the color swatches?
>
> **[4:08](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=248)** They're functional, and so they need a text equivalent that conveys their function.
>
> **[4:13](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=253)** Simply using the color names is fine.
>
> **[4:15](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=255)** Blue, olive green, red, or pink.
>
> **[4:19](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=259)** These equivalents let the person know which color of shirt they're selecting.
>
> **[4:23](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=263)** The arrows, this is a bit of a judgment call, but there's not much value to them.
>
> **[4:28](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=268)** They convey a small amount of hierarchy, but that detail is of limited value since it's already available in many other places on the site, in the header and in the navigation.
>
> **[4:39](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=279)** So we can allow those arrows to be decorative, which means they don't need a text equivalent.
>
> **[4:45](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=285)** There you have it.
>
> **[4:46](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=286)** This can get pretty complicated, but the bottom line is that almost all media fits into one of those three types.
>
> **[4:54](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=294)** Ask yourself each time you're designing and building something, is this informational, functional, or decorative?

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** svg (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - whether (1)

#### [The importance of text equivalents](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=1)** - Now let's look a little more closely at our scenarios to understand the impact and importance of getting text equivalents right.
>
> **[0:08](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=8)** We'll start with the podcast here.
>
> **[0:11](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=11)** We see this very often.
>
> **[0:12](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=12)** People will publish show notes to go along with their podcast.
>
> **[0:17](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=17)** They're usually just a quick bullet point summary of the topics that were covered and are often published instead of transcripts.
>
> **[0:25](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=25)** But that's not a good text equivalent when we compare it to the entire content of the podcast.
>
> **[0:31](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=31)** Even without knowing the content of this podcast episode, you can tell that these show notes don't cut it.
>
> **[0:38](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=38)** Is this list of bullet points enough for someone that can't hear to get the content of the audio?
>
> **[0:43](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=43)** It simply isn't.
>
> **[0:45](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=45)** People that are deaf or hard of hearing need the transcript.
>
> **[0:50](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=50)** While you as the publisher might look at it as an add-on or additional format, for someone that's deaf, it's their main format for consumption.
>
> **[0:59](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=59)** Look back at Rose's persona.
>
> **[1:01](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=61)** She likes podcasts and downloads and syncs for offline access because she travels a lot.
>
> **[1:07](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=67)** Having the transcript is essential for her to consume that content.
>
> **[1:12](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=72)** And if you want to level up a little, make the transcript easily downloadable in a nice, easy to read format.
>
> **[1:19](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=79)** Now, that will make it easy for Rose to consume the podcast.
>
> **[1:24](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=84)** Okay, what about our [[E-Commerce]] purchase?
>
> **[1:27](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=87)** We've already seen two versions of this page.
>
> **[1:29](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=89)** One where there's just color swatches and one where those color swatches are paired with text versions of the color names.
>
> **[1:37](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=97)** In the first version, without the text, the swatches needed a text equivalent because it was the only way to get the color selection.
>
> **[1:46](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=106)** On those, we used aria label equals color name so that assistive technologies could announce the color selections when a blind person was reading the page.
>
> **[1:56](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=116)** But what about when we put the text out there for everyone to see?
>
> **[2:01](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=121)** Now the swatches themselves don't need aria label because they've got a text equivalent right beside them.
>
> **[2:07](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=127)** So now we can use aria hidden equals true to avoid repetition.
>
> **[2:13](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=133)** We're using SVG here so the mechanism is a little different than if we were using images.
>
> **[2:18](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=138)** If we were using PNGs or another image format, we'd use alt text, like this.
>
> **[2:23](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=143)** Alt equals olive green.
>
> **[2:25](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=145)** And then when the text is beside the swatch image, alt equals quote quote.
>
> **[2:30](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=150)** This null alt attribute will tell assistive technology that it doesn't need to read anything out when it encounters that image.
>
> **[2:37](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=157)** The same is also true for aria hidden.
>
> **[2:41](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=161)** If we look at our lawn care customer, we have two scenarios to consider.
>
> **[2:45](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=165)** One, the person reading the page with a screen reader, and two, the person navigating the page using voice recognition.
>
> **[2:53](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=173)** Let's take a look at some examples of alt text done wrong and then compare that to alt text done right.
>
> **[2:59](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=179)** All of those images are part of a link.
>
> **[3:02](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=182)** Do you remember what we call that type of image?
>
> **[3:04](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=184)** I'll give you a hint.
>
> **[3:06](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=186)** It begins with an F and ends in unctional.
>
> **[3:09](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=189)** That's right, a functional image.
>
> **[3:12](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=192)** They're all part of a call to action.
>
> **[3:15](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=195)** So for each image, there's a meaningful text equivalent.
>
> **[3:19](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=199)** Let's listen to a screen reader run through those links.
>
> **[3:23](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=203)** - [Computer] Green Thumb Lawn Care link, Home link, Services link, Packages link, About Us link, Contact Us link, dollar 149 link, dollar 59 link, dollar 79 link, package dash landscape dash price dot PNG link.
>
> **[3:39](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=219)** - Did you hear the alt text?
>
> **[3:42](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=222)** Did it match what was on the screen?
>
> **[3:44](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=224)** Sometimes yes and sometimes no.
>
> **[3:48](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=228)** Unfortunately, the screen reader read out $149 for the weekly maintenance package.
>
> **[3:53](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=233)** Maybe it was just a typo, or perhaps that was the old price for that service.
>
> **[3:58](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=238)** Either way, the alt text is wrong and a person using a screen reader isn't getting the right message.
>
> **[4:05](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=245)** The custom landscaping image had no alt text on it at all, so the screen reader read out the image's source attribute.
>
> **[4:12](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=252)** It was part of a link so it had to read out something and hope for the best.
>
> **[4:18](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=258)** There have been numerous accessibility-related legal cases in the past decade.
>
> **[4:22](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=262)** And many of them include scenarios just like this, where a person using a screen reader gets incorrect content or sometimes no content at all.
>
> **[4:32](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=272)** They miss deals, content, or even get different pricing altogether.
>
> **[4:38](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=278)** The alt text should be more like this.
>
> **[4:41](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=281)** - [Computer] Headings links, Services link, Packages link, About Us link, Contact Us link, dollar 49 weekly maintenance link, dollar 59 semi-monthly maintenance link, dollar 79 weed maintenance link, starting at dollar 900 Custom Landscaping link.
>
> **[4:59](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=299)** - The alt text needs to convey the same message that is shared visually.
>
> **[5:04](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=304)** Screen reader users aren't the only ones that use alt text.
>
> **[5:08](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=308)** People using Dragon naturally speaking need it too.
>
> **[5:12](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=312)** When we use voice recognition software, we see the thing on the screen that we want to activate and we say it, like this.
>
> **[5:19](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=319)** Click $49 or click custom landscaping.
>
> **[5:23](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=323)** If the alt text isn't right, a Dragon user won't be able to easily operate that interface.
>
> **[5:29](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=329)** Let's take a walk through the same example using voice commands.
>
> **[5:34](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=334)** Click $49, click $59.
>
> **[5:41](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=341)** Go back, scroll down.
>
> **[5:47](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=347)** Click custom landscaping.
>
> **[5:51](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=351)** Scroll up, click $49.
>
> **[5:57](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=357)** Since those base-level commands didn't work, a person using Dragon will need to use a fallback mechanism to activate those links.
>
> **[6:06](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=366)** In this case, we'll use the mouse grid.
>
> **[6:10](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=370)** Mouse grid four, nine, click that.
>
> **[6:20](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=380)** That mouse grid is a convenient method for activating things that don't work the way they're supposed to.
>
> **[6:27](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=387)** Unfortunately it might take three, four, or sometimes five or six steps to narrow down on the thing that you want to click.
>
> **[6:35](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=395)** Our goal is to make things easy to use for everyone.
>
> **[6:39](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=399)** Making someone use the mouse grid is not the way to do that.
>
> **[6:43](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=403)** If we switch tabs and look at a repaired version with the right alt text, you'll see a big difference in the way it works with voice recognition.
>
> **[6:52](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=412)** Click $49, go back, scroll down, click custom landscaping, go back.
>
> **[7:05](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=425)** Hopefully you can see the difference.
>
> **[7:08](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=428)** Getting text equivalents right is one of the most important things you can do for people with all kinds of disabilities.
>
> **[7:15](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=435)** Doing this well requires thought, care, and intention, but it pays off with great success and ensures that people with disabilities can use the sites and content that you create.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (1)
> **Speakers:** - [computer] (2), - now (1), - did (1), - the (1)
> **CLI Commands:** make (3)
> **UI Navigation:** scroll down (2), scroll up (1)
> **Env Vars:** svg (1), png (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (1)

#### [Accessibility for complex visuals](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=0)** - All the scenarios we've reviewed so far in terms of text equivalents are pretty straightforward.
>
> **[0:06](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=6)** It isn't always that simple though.
>
> **[0:08](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=8)** Sometimes, a visual is part decorative, part informational, and part functional all wrapped up in one.
>
> **[0:16](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=16)** Here's some scenarios that require a bit more thought when we're deciding how to implement a text equivalent.
>
> **[0:23](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=23)** In each case, here's the approach that you should take.
>
> **[0:26](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=26)** One, ask yourself what is the overall purpose of this visual?
>
> **[0:32](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=32)** Two, ask yourself what is the best way to convey that?
>
> **[0:38](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=38)** And three, ask yourself which parts of this visual are decorative, informational, or functional?
>
> **[0:44](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=44)** Once you answer those questions, you'll have a better handle on what to do.
>
> **[0:49](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=49)** In this first scenario, we'll look at the Green Thumb Lawncare locations.
>
> **[0:55](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=55)** What's the overall purpose of the map?
>
> **[0:57](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=57)** This has a multi-part answer, but in terms of importance, it shows the locations around the city, presumably so that people can get in touch with an [[Microsoft Office|office]] that might serve their part of the city.
>
> **[1:09](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=69)** That's informational, so it needs a text equivalent that represents that.
>
> **[1:15](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=75)** Easy enough.
>
> **[1:16](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=76)** That detail is provided as text outside the map with a listing of the locations and contact information.
>
> **[1:24](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=84)** There's also the ability to manipulate the map.
>
> **[1:27](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=87)** The images in the corners that are used to move around and [[Zoom]] in and out enable that.
>
> **[1:33](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=93)** Those are functional images and therefore need a text equivalent that tells their purpose.
>
> **[1:38](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=98)** Pan left, pan right, zoom in, zoom out.
>
> **[1:43](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=103)** Finally, there's the map tiles themselves.
>
> **[1:47](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=107)** While they're interesting, they aren't really that important to the overall visual.
>
> **[1:51](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=111)** For the most part, we consider those decorative because the main purpose of the map was about the locations of their offices.
>
> **[1:59](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=119)** So we don't worry about a text equivalent for every single map tile that's on the page.
>
> **[2:05](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=125)** In this second map, we're looking at a route to go from one place to another rather than listing locations.
>
> **[2:11](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=131)** So what's the purpose of the main map?
>
> **[2:15](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=135)** It's all about showing a route, and that's informational.
>
> **[2:18](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=138)** So we need a text equivalent.
>
> **[2:21](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=141)** The solution, show a text-based version of the directions outside the map itself that communicates the same thing that the visual rendering communicates.
>
> **[2:31](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=151)** We also talked about Mary a little earlier and her interest in using podcasts and video to teach her students music.
>
> **[2:39](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=159)** The visuals she's creating for her video lessons are complex too.
>
> **[2:43](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=163)** They show her finger positions on the violin, the angle at which she holds her violin bow, and there's a lot of complexity in some of the drills.
>
> **[2:51](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=171)** So the students need to look at their own hands while they're practicing.
>
> **[2:56](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=176)** Much of that is informational content represented in video form.
>
> **[3:01](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=181)** Mary's first step is to provide captions for her video.
>
> **[3:05](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=185)** They're a text equivalent that visually show during her videos for people that are deaf or hard of hearing.
>
> **[3:12](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=192)** But what do we do for her students that are blind and can't see where Mary is putting her fingers?
>
> **[3:18](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=198)** In this case, we need something more detailed.
>
> **[3:21](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=201)** Her videos need some audio description where she describes the positions of her fingers and the angle of her bow to the students.
>
> **[3:29](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=209)** Audio description is often used with television shows and movies so people can understand what's happening on the screen without being able to see it.
>
> **[3:39](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=219)** Mary might provide that just by describing it herself in her videos, or she might provide a separate audio-described video that gives that detail.
>
> **[3:49](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=229)** Audio description is effectively a text equivalent for important things that are happening on the screen.
>
> **[3:56](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=236)** And when that audio description makes its way into the transcript of the video, she'll have a great resource with detailed instructions that almost reads like a screenplay.
>
> **[4:06](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=246)** While its audience is primarily people with vision and hearing-related issues, it'll end up being useful for everyone.
>
> **[4:14](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=254)** The final two examples show more interactive visuals, a visual representation of some data.
>
> **[4:21](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=261)** The first is some [[Statistics]] from an accessibility assessment our team completed.
>
> **[4:26](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=266)** It shows a breakdown of the affected population for the issues that we found.
>
> **[4:31](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=271)** In this case, this is both informational and functional.
>
> **[4:36](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=276)** Informational because it represents data and functional because you can click on each bar in the chart, and it'll take you to those details.
>
> **[4:45](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=285)** Some people will need a text equivalent, and we can provide that by creating a toggle that allows a person to view the data as a simple table instead of as a graph.
>
> **[4:55](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=295)** In the second one, we've got a visual agenda.
>
> **[4:59](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=299)** It's also interactive and explorable.
>
> **[5:02](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=302)** And instead of having a toggle in the interface to switch between views, it made more sense to show the text equivalent for the visual all the time.
>
> **[5:11](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=311)** This can get quite complex, but your job as a designer remains the same.
>
> **[5:17](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=317)** Figure out the purpose of the visual, figure out which parts are decorative, informational, and functional, and then make sure your design takes into account appropriate text equivalents for everyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (3), [[Microsoft Office|Office]] (1), [[Statistics]] (1)
> **UI Navigation:** toggle (2), click on (1)
> **CLI Commands:** make (1)
> **Speakers:** - all (1)


### 6. Form Accessibility

[↑ Back to Table of Contents](#table-of-contents)

#### [Labeling forms](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=0)** - Labeling form fields is one of the simplest things you can do to ensure that [[Forms]] are more accessible.
>
> **[0:07](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=7)** They create a programmatic relationship between the on-screen text and the form control itself so that the forms can be understood and used by people that can't see the screen.
>
> **[0:17](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=17)** When placed correctly on the page they help people with low vision better understand which piece of information goes where in the form.
>
> **[0:25](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=25)** They help people with mobility and dexterity impairments because they create bigger targets for clicking, and they help make things work with voice recognition and other assistive technology.
>
> **[0:37](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=37)** They're also useful for anyone with memory-related issues, which let's be honest, that happens to all of us at some point.
>
> **[0:45](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=45)** Form labels help everyone, so here's the number one thing you need to consider when designing and building forms.
>
> **[0:53](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=53)** Every form field needs a label.
>
> **[0:57](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=57)** There's lots of different ways you can accomplish that, but the bottom line is that you need a label for every single form field.
>
> **[1:05](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=65)** We've talked a lot about screen reader usage in this course so far, so we'll just talk through the basics here.
>
> **[1:11](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=71)** Every time you move to a form field the screen reader tells the person what the name of the form field is and what type of control it is.
>
> **[1:19](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=79)** That lets them understand how they should use the control.
>
> **[1:23](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=83)** When Mary hears it's a text box she knows she can just type, but when she hears it's a checkbox she knows to check it off using her space bar.
>
> **[1:33](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=93)** And when she hears it's a radio button she knows to use her arrow keys.
>
> **[1:38](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=98)** Labeling the form fields lets her hear exactly what she's doing and what information she should be providing.
>
> **[1:46](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=106)** Here's some typical forms.
>
> **[1:48](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=108)** I want to show you some of the benefits of labeling forms for people with mobility and dexterity issues, and I'll share some typical gotchas for good measure so that you know to watch out for them.
>
> **[1:59](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=119)** Maxine heard about podcasts from her grandchildren, and she's decided to go look for some listening material.
>
> **[2:06](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=126)** Remember though, Maxine has pretty severe arthritis.
>
> **[2:10](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=130)** She uses her keyboard for a lot of things, and uses her mouse to a certain degree.
>
> **[2:15](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=135)** Clicking on small targets is a challenge for her.
>
> **[2:19](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=139)** She doesn't have the steadiness in her hand to click radio buttons easily.
>
> **[2:24](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=144)** Here's our podcast search form.
>
> **[2:26](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=146)** Notice these radio buttons and the text beside them.
>
> **[2:30](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=150)** Clicking on the radio buttons with a mouse might be quite difficult for Maxine.
>
> **[2:35](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=155)** If she's off by even a few pixels she won't select that radio button for searching podcast titles only.
>
> **[2:43](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=163)** However, if we use a proper label for the radio button the clickable area now becomes much bigger and includes the text podcast titles only.
>
> **[2:53](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=173)** Here's a version that is properly labeled, and you can see that as we click on the words beside the radio button the radio button is selected.
>
> **[3:02](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=182)** When we use that label correctly we make it easier for people to access its field.
>
> **[3:08](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=188)** This same holds true for any form field.
>
> **[3:12](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=192)** Clicking the label or tapping it on its touch screen will place the focus in that field or select it, depending on the type of control it is.
>
> **[3:20](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=200)** We can use that fact to very quickly test and see if we've done all of our form field labeling properly.
>
> **[3:28](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=208)** In the shipping form example you can click on every visible label and see where the focus goes.
>
> **[3:34](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=214)** If it goes nowhere the form field isn't likely labeled at all.
>
> **[3:39](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=219)** If it goes to the wrong field like it does here when I click on Last Name and the focus moves to the First Name field, that's usually a copy and paste error.
>
> **[3:49](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=229)** Try this on the forms that you have on your own sites.
>
> **[3:52](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=232)** Click the label, and what happens?
>
> **[3:55](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=235)** Does the focus move to the right spot?
>
> **[3:58](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=238)** Does the checkbox or radio button toggle its state?
>
> **[4:01](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=241)** If not, get in there and fix them up.
>
> **[4:05](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=245)** Remember I said that every form field needs a label?
>
> **[4:09](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=249)** How does that work here for Street Address?
>
> **[4:12](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=252)** We've got a visible label saying street address, but there are two fields under it, presumably for a two-line address.
>
> **[4:20](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=260)** Visually the words street address applies to both, but how does that work for someone that can't see the screen?
>
> **[4:28](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=268)** We build in a hidden label for the second line of the address using aria-label or even a hidden label.
>
> **[4:35](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=275)** So, while it looks like not every form field is labeled, they really are.
>
> **[4:40](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=280)** One of the best indicators of accessibility for a form is to check for one-to-one relationships between form controls and their labels.
>
> **[4:48](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=288)** Sometimes you'll have two form controls with one label like the shipping address, and other times you'll have two or three pieces of information that go with a single form control.
>
> **[4:59](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=299)** They all need to be related together programmatically.
>
> **[5:03](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=303)** One-to-one is your guide.
>
> **[5:05](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=305)** Think about that when you're designing, and think about it when you're developing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (6)
> **UI Navigation:** click on (3), checkbox (2), toggle (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Warnings:** watch out (1)
> **Speakers:** - labeling (1)

#### [The placeholder attribute](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=0)** - The placeholder is a relatively recent addition to the [[HTML]] tools we have available to us.
>
> **[0:06](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=6)** It is supposed to be used to provide a hint on how to fill out certain form fields.
>
> **[0:11](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=11)** You can use a placeholder to show a date format, for example.
>
> **[0:15](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=15)** Here's how we use it.
>
> **[0:17](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=17)** We use the placeholder here in the Start Date field to show that we want the format to be MM/DD/YYYY.
>
> **[0:26](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=26)** One of the challenges though is that the placeholder disappears as soon as you start typing.
>
> **[0:32](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=32)** The fact that we've got a useful piece of information in the placeholder that disappears makes it a little bit less useful.
>
> **[0:39](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=39)** It can have a pretty significant impact on someone with literacy or memory related issues.
>
> **[0:45](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=45)** One of the techniques we use to make it a little more useful is to make the placeholder persist.
>
> **[0:52](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=52)** When we place focus in the field and start typing, we take the value of the placeholder and append it to the existing label.
>
> **[0:59](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=59)** That ensures that it'll help everyone.
>
> **[1:02](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=62)** Another common trend is using the placeholder as a label.
>
> **[1:07](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=67)** We really shouldn't do that.
>
> **[1:09](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=69)** The placeholder and label performed two different functions.
>
> **[1:13](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=73)** Designers started doing this for a couple of reasons.
>
> **[1:17](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=77)** One, they saved vertical space by putting the label where the placeholder is.
>
> **[1:22](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=82)** And two, they created less visual noise by keeping the text and the field as one visual unit so that it was theoretically easier to digest.
>
> **[1:33](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=93)** This had some impacts though.
>
> **[1:35](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=95)** People with low vision or cognitive issues often thought the form was already filled out and that they didn't need to do anything with it, subsequently causing errors.
>
> **[1:46](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=106)** The placeholder is also a little lighter color by default in browsers, and was easy for a person with low vision to miss completely.
>
> **[1:54](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=114)** It also meant that form fields were effectively unlabeled.
>
> **[1:59](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=119)** Without a programmatic label, it became more difficult for people using screen readers and voice recognition to easily fill out the form.
>
> **[2:08](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=128)** We've started to see this pattern emerge, and it's a reasonable compromise.
>
> **[2:13](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=133)** We get some of the space saving benefits, but without many of the drawbacks of using just a placeholder.
>
> **[2:20](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=140)** There hasn't been enough research on the potential impacts of this type of design on Giovanni, who is on the autism spectrum.
>
> **[2:27](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=147)** It might be completely unpredictable for him and create a certain amount of anxiety.
>
> **[2:34](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=154)** That'll be something that we'll need to explore more before we can fully understand its impact to people on the spectrum.
>
> **[2:40](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=160)** In this form, all the form fields use a label that lives in the placeholder spot.
>
> **[2:45](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=165)** And when we focus on the field, the label animates and fades its way to a spot above the field.
>
> **[2:52](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=172)** This is only one possible visual treatment.
>
> **[2:55](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=175)** We've seen versions where the label will slide down or to the right, and sometimes stays visually within the bounding box of the form field.
>
> **[3:04](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=184)** For all of them though, there is always a visible programmatic label, and that makes it more accessible for everyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** html (1), yyyy (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - the (1)

#### [HTML5 form inputs](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=0)** - One of the best features for accessibility has been the ease of use that is provided when we use the new HTML5 form inputs.
>
> **[0:09](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=9)** I say new, like they're fresh, but they were first formally proposed as early as 2005.
>
> **[0:17](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=17)** Of course, it took time for them to be codified and implemented in browsers, but we're in a place now where support for HTML5 form types is quite good.
>
> **[0:28](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=28)** These include specialized versions of text boxes, like tel, URL, email, number, date, search, and a host of others.
>
> **[0:40](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=40)** The biggest reason these are an accessibility benefit is that they're recognized on mobile devices as being different by the operating system.
>
> **[0:50](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=50)** [[Forms]] are designed for input.
>
> **[0:53](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=53)** So when we use these form types on most modern mobile devices, we end up with a keyboard that is customized to that particular type of field.
>
> **[1:03](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=63)** Here's some examples from our Green Care Lawn quote form.
>
> **[1:07](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=67)** When we use the phone number field, which has a type equal to tel, we get a keyboard that is optimized for telephone number entry.
>
> **[1:17](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=77)** This is a huge benefit for everyone, but especially Mary, who uses her screen reader to enter her phone number, and Maxine, who appreciates the large button sizes.
>
> **[1:28](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=88)** When we use the email field with a type equal to email, we get a keyboard that shows the @ symbol and dot by default.
>
> **[1:37](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=97)** Finally, the date fields use a type equal to date, which shows a native date selector widget with a convenient method to clear the date that you've already entered.
>
> **[1:48](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=108)** All of these make entering text easier because of the context sensitive keyboard.
>
> **[1:54](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=114)** Unfortunately, we don't have the same set of tools on the desktop yet.
>
> **[1:59](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=119)** Some people with mobility challenges use an onscreen keyboard.
>
> **[2:03](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=123)** It would be highly beneficial for those keyboards to be context-sensitive too.
>
> **[2:09](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=129)** As you can see here, the same fields don't have the same benefits on desktop.
>
> **[2:15](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=135)** Keep all of these things in mind when you're creating your designs and working with the implementation team to make sure that you're documenting which specific types of form fields you should be using.
>
> **[2:26](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=146)** Build them into your pattern libraries, [[Design Systems]], and project-level design specs to make sure all these details are included, and you'll make it easier for everyone to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Design Systems]] (1)
> **CLI Commands:** make (4)
> **Env Vars:** html5 (2), url (1)
> **Definitions:** is a  (1)
> **Speakers:** - one (1)

#### [Form validation and error messaging](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=0)** - When we use [[Forms]], we need to make sure that the input for those forms has both the correct format and expected values.
>
> **[0:08](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=8)** And when they don't, we need to show some kind of error messaging to help people fix the issues.
>
> **[0:15](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=15)** It's not the most glamorous of topics, but it's certainly one that you need to consider as a designer.
>
> **[0:21](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=21)** It isn't as simple as show an error message on the page.
>
> **[0:25](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=25)** I've seen lots of strategies for that that just don't work.
>
> **[0:29](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=29)** Have you seen an error displayed in a modal dialog and then had the modal disappear, taking the error message along with it?
>
> **[0:37](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=37)** Have you seen the error message at a consistent spot at the top of the page but nowhere near the field it relates to?
>
> **[0:45](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=45)** Have you seen error messages off to the right side of form fields and then had them fade away after 10 seconds?
>
> **[0:52](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=52)** All of these strategies may seem like good design ideas when we come up with them, but they're not helpful for anyone, including people with disabilities.
>
> **[1:02](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=62)** So, what should you do?
>
> **[1:05](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=65)** Let's think of all the best practices for the design of error messaging.
>
> **[1:10](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=70)** First, establishing a consistent placement and pattern for the error messages is a good thing.
>
> **[1:16](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=76)** You might always show the error message above the form field and always include the same error icon.
>
> **[1:23](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=83)** That helps everyone, but especially people that expect that predictability, like Giovanni, who is on the autistic spectrum.
>
> **[1:31](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=91)** It's also useful for people using screen readers, as they'll have a consistent method for identifying errors.
>
> **[1:38](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=98)** They know that when a field's data is wrong, there will always be an icon that is announced as error, and they can read the exact error by pressing the left arrow key, for example.
>
> **[1:49](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=109)** Second, the error should be close to the field that it pertains to.
>
> **[1:54](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=114)** It needs to be in visual proximity of the field in error so that it's easily discoverable.
>
> **[2:00](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=120)** This is a very high priority for people like Sean with low vision.
>
> **[2:05](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=125)** When he's magnified at 400% and looking at a form field, the error message should be somewhere in his line of sight.
>
> **[2:13](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=133)** Third, the error message content should be as simple as possible.
>
> **[2:19](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=139)** No jargon, and written in plain language so that it's easy to understand for everyone.
>
> **[2:25](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=145)** This helps people with literacy-related issues, people that are deaf or hard of hearing, and anyone that doesn't natively speak the same language as your website's interface.
>
> **[2:36](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=156)** Finally, the error should be programmatically connected to the field.
>
> **[2:42](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=162)** This isn't as much of a necessity for designers to take care of.
>
> **[2:45](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=165)** It'll usually be coded to connect to the field by a developer.
>
> **[2:49](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=169)** We often put the error message right inside the label for the form field or use aria-describedby to make sure a screen reader user hears that the field has an error.
>
> **[3:00](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=180)** All of those principles are reflected in this simple error message on our billing form.
>
> **[3:07](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=187)** When I activate the Next step button without filling in the form, I immediately get some feedback and error messages for many of the fields.
>
> **[3:16](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=196)** There's a few things to note about them.
>
> **[3:18](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=198)** They use consistent placement and iconography.
>
> **[3:21](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=201)** They're visually close to the fields they apply to.
>
> **[3:25](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=205)** They use plain language, and they're properly connected to the fields by putting the messages in the label.
>
> **[3:32](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=212)** You'll need to think about how to apply this to other scenarios.
>
> **[3:36](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=216)** The design we have here isn't your design, so don't just expect to drop this into your designs and have a cohesive error messaging system.
>
> **[3:46](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=226)** You'll need to think about how it applies in other scenarios and how it fits your design.
>
> **[3:51](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=231)** How will it work for error messages that are longer?
>
> **[3:55](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=235)** How will they respond to text resizing?
>
> **[3:58](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=238)** How will they work in a different language?
>
> **[4:01](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=241)** There's lots to consider, but if you consider them, you're doing your job really well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (2)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Prerequisites:** you'll need (2)
> **Analogies:** for example (1)
> **Speakers:** - when (1)


### 7. Flexibility and Accessibility

[↑ Back to Table of Contents](#table-of-contents)

#### [Flexible vs. fixed width designs](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=0)** - Which resolution do we design for?
>
> **[0:03](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=3)** In the early days of the web, it was 640 x 480.
>
> **[0:07](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=7)** Then, when our analytics showed us the dominant screen resolution was 800 x 600, we rejoiced and quickly moved to making all our designs fit that 800 x 600 screen.
>
> **[0:19](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=19)** We did the same when we jumped to 1024 x 768.
>
> **[0:24](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=24)** Many people moved from designing for print to designing for the web, and they naturally created fixed width, pixel perfect designs, just like it was being output on paper.
>
> **[0:35](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=35)** It didn't have to be that way, though.
>
> **[0:37](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=37)** Even in the early days of [[Web Design]], we could design things that had flexibility built into them.
>
> **[0:43](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=43)** Rather than confining things to a fixed number of pixels, we could use percent units for specifying widths.
>
> **[0:50](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=50)** In fact, there was a many years long debate between designers about fixed versus flexible width designs.
>
> **[0:58](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=58)** That's hard to believe now.
>
> **[0:59](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=59)** When we ask the same question today, which resolution do we design for, the only answer is, all of them.
>
> **[1:08](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=68)** Today, creating more flexible designs seems to just be accepted as how we design for the web.
>
> **[1:15](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=75)** Maybe it's because more people are coming to the web design without having a print background, or maybe it's because responsive design techniques encourage us to design things that work well at all kinds of different resolutions.
>
> **[1:28](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=88)** Either way, it doesn't really matter.
>
> **[1:31](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=91)** Designing with flexibility in mind generally makes things better from an accessibility perspective.
>
> **[1:37](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=97)** Here's a few reasons why.
>
> **[1:39](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=99)** Fixed layouts don't often respond well to text resizing, and many people need that text resizing, whether they've got low vision or are simply getting older and need to bump up the font size on their screen.
>
> **[1:52](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=112)** Flexible layouts adapt better to different size screens than fixed widths do.
>
> **[1:57](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=117)** Which means that flexible layouts respond better to things like font size changes in the browser or at the operating system level.
>
> **[2:04](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=124)** Fixed layouts introduce horizontal scrolling on smaller screens, either smaller devices or smaller [[Windows]] that aren't maximized on a desktop or laptop screen.
>
> **[2:16](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=136)** Watch here as we take our podcast page and resize the browser.
>
> **[2:21](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=141)** When we get to the point where the screen is quite small, the fixed width introduces horizontal scrolling.
>
> **[2:28](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=148)** That makes it very hard for Sean to read because he has low vision.
>
> **[2:32](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=152)** He has to work a lot harder to read the transcript when he has to scroll, because he has to do a lot of left and right scrolling to get at the content, because the design doesn't adapt to fit the screen he's working on.
>
> **[2:46](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=166)** If we compare that to the same page that is designed to be both flexible and responsive, you can see that the content adapts to the smaller browser view port size and doesn't introduce any need for scrolling.
>
> **[2:58](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=178)** That'll it much easier for Sean to consume that content.
>
> **[3:03](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=183)** Sometimes we design just certain parts of the interface to be flexible.
>
> **[3:07](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=187)** Here's a look at that Lawncare Locations page in a resizing browser window.
>
> **[3:13](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=193)** The flexibility on the width of the map makes it such that this page works well at a number of different viewport widths.
>
> **[3:20](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=200)** Now, remember, it's not like people out there in the real world sit there and resize their browser windows like we do.
>
> **[3:27](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=207)** We do it because we're seeing how the layout will [[React.js|react]] to being at different sizes, not because people resize their browsers all day.
>
> **[3:36](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=216)** The reality is, though, if we can design things well that work for a resizing browser window, we're going to create things that work for small screens, big screens, and all the sizes in between.
>
> **[3:48](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=228)** One of the biggest ideals for designing and building for accessibility is to take people's needs into account, no matter how they're viewing or working with what we've created.
>
> **[3:59](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=239)** When we design our page templates to be flexible, and we design parts of our pages to be flexible, we take into account text resizing, user settings, and preferences.
>
> **[4:10](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=250)** When we do that, we make things better and more accessible by meeting people where they are.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Design]] (2), [[Windows]] (2), [[React.js|React]] (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** just like (1)
> **Speakers:** - which (1)

#### [Responsive design and accessibility](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=0)** - Responsive design is well known for reflowing content and parts of the page to work well at different sizes, usually known as mobile, tablet, and desktop.
>
> **[0:11](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=11)** Those names imply too much certainty about the device that a person is using though.
>
> **[0:16](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=16)** So many have reframed mobile, tablet, and desktop to be small, medium, and large glass.
>
> **[0:22](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=22)** Responsive design is a huge benefit to accessibility.
>
> **[0:26](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=26)** The most important accessibility benefit to responsive design is the conscious, intentional reflowing of content to fit appropriately in different viewport sizes.
>
> **[0:38](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=38)** We go well beyond the fixed versus flexible width debates of old.
>
> **[0:42](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=42)** Even when we were using flexible widths, we still ended up squishing too much content on the screen at once.
>
> **[0:49](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=49)** Now, using responsive design techniques, we're making much smarter decisions about how we should reflow content on different sized screens.
>
> **[0:59](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=59)** That ability to reflow content intelligently is incredibly helpful to people with low vision.
>
> **[1:06](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=66)** When you're reflowing content in a responsive design, here's the number one thing you need to remember.
>
> **[1:13](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=73)** Linear order matters.
>
> **[1:15](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=75)** We've already covered this topic in other chapters, but it bears repeating because it is so important for accessibility.
>
> **[1:22](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=82)** Linear order matters to someone that uses a keyboard, both when tabbing through an interface at a page level and at a micro level when tabbing through a form.
>
> **[1:33](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=93)** So we need to make sure that all your content flows in a logical order at all breakpoints, small, medium, and large.
>
> **[1:42](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=102)** That helps make it read properly and also makes for a logical interaction flow.
>
> **[1:48](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=108)** Some really tricky areas are making sure that navigation works correctly in responsive designs.
>
> **[1:55](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=115)** Mary uses a screen reader on her phone.
>
> **[1:58](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=118)** When she visits a site and activates the main menu, the navigation slides in from the left of the screen.
>
> **[2:05](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=125)** If she keeps moving forward from that point using her screen reader, the next thing that takes the focus should be the newly exposed navigation menu, except it very often doesn't.
>
> **[2:16](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=136)** The menu came in from the left and was usually before the activation toggle in the source.
>
> **[2:23](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=143)** That means you'd need to move backwards to get to the navigation, and that's not intuitive at all.
>
> **[2:30](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=150)** We need to ensure a logical flow of all content independently at all different viewport sizes or breakpoints that we're creating.
>
> **[2:40](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=160)** Now, even if we do a perfect job of getting the linear flow right, that doesn't make the [[Representational State Transfer (REST)|rest]] of our responsive design automatically accessible.
>
> **[2:50](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=170)** There's a few things that we need to take into account to make sure that our designs are accessible to everyone.
>
> **[2:56](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=176)** Take your multicolumn [[Forms]] and reflow them into a single vertical stack at smaller viewport sizes.
>
> **[3:03](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=183)** Or consider just making them a single vertical stack on all viewports, and you'll help everyone at all viewport sizes.
>
> **[3:11](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=191)** Use the smallest size to prioritize what should be in the interface.
>
> **[3:16](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=196)** If it isn't important to have at the smallest size of the interface, why should it be present in the largest size?
>
> **[3:22](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=202)** Maybe it shouldn't.
>
> **[3:24](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=204)** If you make your interface simpler, you'll make it easier to use for everyone.
>
> **[3:29](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=209)** Remember that some people may want to resize the interface on a touchscreen using pinch, [[Zoom]].
>
> **[3:36](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=216)** There's code out there that lets you disable zooming on the interface on touchscreens.
>
> **[3:40](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=220)** I'm not even going to show it to you because I don't want you to use it.
>
> **[3:44](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=224)** Some people need to resize the interface, period, so we're doing our job by letting them.
>
> **[3:52](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=232)** Here's a few other scenarios to consider.
>
> **[3:56](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=236)** My father-in-law had low vision, hearing issues, and some dexterity problems when using a mouse.
>
> **[4:04](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=244)** He used a large, 21-inch monitor, but his resolution was set at 832 by 624 pixels.
>
> **[4:12](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=252)** Why?
>
> **[4:14](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=254)** That's the size he needed to be able to see stuff on the screen comfortably.
>
> **[4:19](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=259)** Knowing that he likely didn't always run his browser window maximized means that his viewport height and width was likely considered tablet or medium glass.
>
> **[4:30](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=270)** We've also seen designs that assumed tablet equals touch.
>
> **[4:35](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=275)** If we make that assumption that he's on a touchscreen and show a design that specifically relies on touch interactions to operate, we'd be wrong.
>
> **[4:45](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=285)** Viewport size can't be used as a proxy for anything.
>
> **[4:50](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=290)** Our team regularly conducts [[Usability Testing]] sessions with people with disabilities.
>
> **[4:55](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=295)** On several occasions, we've worked with screen reader users in those sessions that didn't use a monitor.
>
> **[5:01](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=301)** Why?
>
> **[5:02](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=302)** They didn't need them.
>
> **[5:04](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=304)** They couldn't see the screen anyway, and they didn't share their computer with anyone else.
>
> **[5:09](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=309)** And in many of those sessions, we saw screen reader users open up a browser window, completely unaware of the browser window's size.
>
> **[5:18](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=318)** They were using a keyboard and their screen reader but interacting with the small and medium glass size designs because their browser window was half the width of the screen.
>
> **[5:28](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=328)** Or it was 150 pixels by 150 pixels because that was the size of the last window that was open.
>
> **[5:36](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=336)** The opposite is true as well.
>
> **[5:38](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=338)** Large touchscreen devices are becoming more common.
>
> **[5:42](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=342)** Hopefully both of these make this point clear.
>
> **[5:45](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=345)** When you know the viewport size, don't assume a small viewport is a touchscreen.
>
> **[5:51](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=351)** Don't assume a large viewport isn't a touchscreen.
>
> **[5:55](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=355)** Don't assume they will or won't be using a keyboard.
>
> **[6:00](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=360)** Don't assume you know anything other than viewport size.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Forms]] (1), [[Zoom]] (1), [[Usability Testing]] (1)
> **CLI Commands:** make (8)
> **Definitions:** is a  (2), known as (1)
> **UI Navigation:** toggle (1)
> **Speakers:** - responsive (1)

#### [Designing for text resizing](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=0)** - One of the things that we do quite well with responsive and flexible designs is designed for flexible widths.
>
> **[0:08](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=8)** That's fantastic as it allows for a lot of variation in line length, tech sizes and [[Zoom]] levels, and that benefits people with all kinds of different disabilities.
>
> **[0:18](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=18)** However, there's one thing that we consistently forget about in the design process, designing with flexible height as well.
>
> **[0:27](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=27)** In this chapter, I'll show you why you need to design with flexible height in mind, as well as width.
>
> **[0:32](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=32)** And we'll explore some of the settings that people use to make text look the way they want it to.
>
> **[0:38](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=38)** First, let's look at a setting that some people with low vision might use.
>
> **[0:43](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=43)** When thinking about low vision, we thought a lot about Sean, and how he might work with websites.
>
> **[0:48](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=48)** He needs 400% magnification, but that's just him.
>
> **[0:54](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=54)** Because he needs that level of magnification, he's likely using an actual screen magnifier, either one that's built into the operating system or a third-party magnifier like ZoomText.
>
> **[1:05](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=65)** Other people with low vision will need more magnification than Sean.
>
> **[1:09](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=69)** Maybe even up to 1600%.
>
> **[1:13](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=73)** Some people might need less, and some people might combine browser text resizing with operating system settings, and magnifier settings to get it just right for them.
>
> **[1:25](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=85)** Personally, I don't have low vision, though I will admit, my eyes aren't as good as they used to be.
>
> **[1:32](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=92)** Sometimes I need to bump up the font size to 150 or 175% so that I can read the screen more comfortably.
>
> **[1:41](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=101)** Here's what I do.
>
> **[1:43](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=103)** I set my browser to zoom the text only.
>
> **[1:47](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=107)** This strategy is also used by some people with low vision.
>
> **[1:51](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=111)** Why?
>
> **[1:52](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=112)** I don't need to increase the zoom on images or other things on the page.
>
> **[1:56](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=116)** I just want to make the text bigger.
>
> **[2:00](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=120)** When I zoom the entire interface, usually things get to a point where all the content becomes too wide for the viewport and causes horizontal scrolling.
>
> **[2:10](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=130)** Now it has become more difficult to read rather than easier.
>
> **[2:16](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=136)** When I zoom the text only, effectively resizing the text, that means that the content still fits in the viewport, and I don't get the horizontal scroll.
>
> **[2:26](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=146)** Now I can read the text comfortably.
>
> **[2:29](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=149)** Almost all browsers have this capability built-in.
>
> **[2:33](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=153)** And those that don't, have easy to find extensions that make it easy to add-on.
>
> **[2:38](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=158)** It serves as low-tech assistive technology, and it's in a familiar tool, the browser.
>
> **[2:45](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=165)** Let's look at two versions of our lawn care packages page.
>
> **[2:50](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=170)** The first one uses fixed heights on the packages containers, and the second uses flexible heights on the packages containers On the fixed height version, we've set the container size at 225 pixels.
>
> **[3:04](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=184)** When we resize the text, that means that content gets cut off.
>
> **[3:10](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=190)** On the other hand, when we don't set a fixed height but use a relative height like 14 M or 14 REM, we end up with a container that shows all the content, and flexes according to its content.
>
> **[3:25](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=205)** It's as simple as that really.
>
> **[3:27](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=207)** We're always checking to make sure that we design specifically for text that resizes.
>
> **[3:32](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=212)** It's like stress testing your design.
>
> **[3:35](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=215)** In our podcast page, we've designed that with flexible heights for everything.
>
> **[3:40](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=220)** That allows content to drop to two lines easily as tech size increases.
>
> **[3:46](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=226)** If we placed a fixed height on this navigation, we'd end up with white texts on a white background, and it wouldn't be readable.
>
> **[3:54](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=234)** In these examples, we saw content getting cut off but that's not the only thing to watch out for.
>
> **[4:01](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=241)** You should be able to resize text up to 200% and everything should still be usable.
>
> **[4:08](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=248)** That means that, content doesn't get cut off or disappear.
>
> **[4:13](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=253)** Content doesn't overlap other content making it unreadable.
>
> **[4:18](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=258)** No meaning or functionality is missing.
>
> **[4:21](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=261)** We say functionality because this can just as easily happen to [[Forms]] as it does to text, and other types of content.
>
> **[4:29](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=269)** And content blocks don't get so narrow that they become unusable.
>
> **[4:34](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=274)** These are all things to take into account at the design stage.
>
> **[4:38](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=278)** So please make sure you take your time and think them through, and specify in your design documentation that containers for things need to account for text resize, and should use relative sizing for widths and heights.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (5), [[Forms]] (1)
> **CLI Commands:** make (5), find (1)
> **Definitions:** means that (3)
> **Env Vars:** rem (1)
> **Analogies:** it's like (1)
> **Warnings:** watch out (1)
> **Speakers:** - one (1)


### 8. Structured Content

[↑ Back to Table of Contents](#table-of-contents)

#### [Content hierarchy and headings](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=0)** - Your friend sends you a link, and you click it.
>
> **[0:04](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=4)** It opens up in your browser.
>
> **[0:06](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=6)** You likely look around a little before you dig in.
>
> **[0:09](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=9)** You start to think to yourself, "What site is this?
>
> **[0:12](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=12)** What is this page even about?
>
> **[0:14](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=14)** Okay, it's an article.
>
> **[0:16](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=16)** I likely should read it, but should I read it now or save it for later?
>
> **[0:21](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=21)** Hmm.
>
> **[0:22](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=22)** How long is the article?
>
> **[0:23](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=23)** Okay, not that long.
>
> **[0:25](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=25)** Let's read a bit and then decide."
>
> **[0:28](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=28)** As you are having that conversation with yourself, you're likely engaging in some pretty typical behaviors.
>
> **[0:35](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=35)** You likely look around the page a little to see what site the article is on.
>
> **[0:39](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=39)** Your eye is drawn to the main heading or the large graphics that go with the article.
>
> **[0:44](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=44)** Maybe your eye jumps around a little distracted by those ads, but you come back to the main article.
>
> **[0:50](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=50)** You start in and read the intro.
>
> **[0:53](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=53)** Then you scan down the page to see what else might be in the article.
>
> **[0:56](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=56)** Maybe you stop part way down when you see a heading fly by as you scroll.
>
> **[1:01](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=61)** You read a bit of that content.
>
> **[1:04](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=64)** You decide you can't read it all right now, but you're going to save it for later.
>
> **[1:10](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=70)** People with disabilities are generally speaking, going to do the exact same thing.
>
> **[1:16](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=76)** They might read the whole thing, but they might not.
>
> **[1:19](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=79)** It all depends on their mindset, their interest in the article, and how they respond to the content that they started to read.
>
> **[1:27](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=87)** They'll scan the page too just like you did.
>
> **[1:31](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=91)** The only difference is that some people with disabilities use different tools to actively read and scan.
>
> **[1:38](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=98)** Behavior is behavior, it's just the tools that are different.
>
> **[1:44](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=104)** The most significantly different tool that people use is a screen reader.
>
> **[1:48](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=108)** Mary uses one.
>
> **[1:50](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=110)** Sean uses a magnifier almost exclusively on the desktop, but sometimes he switches to a screen reader on his mobile phone so that he can give his eyes a [[Representational State Transfer (REST)|rest]] from working with that tiny screen.
>
> **[2:03](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=123)** So how would Mary or Sean use the same page we looked at?
>
> **[2:07](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=127)** It'll vary from person to person, but here's what it might look like.
>
> **[2:12](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=132)** The page loads, and then Mary presses the one key.
>
> **[2:16](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=136)** That takes her to the first H1 on the page.
>
> **[2:20](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=140)** She listens to that heading.
>
> **[2:21](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=141)** and it sounds interesting, so she presses the right arrow to read the next thing that's there.
>
> **[2:27](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=147)** She hears the author's name and the date the article was published.
>
> **[2:31](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=151)** Still interested so she moves forward more.
>
> **[2:34](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=154)** She starts to read the summary of the article.
>
> **[2:37](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=157)** In the middle of that paragraph she presses the keys to read out the title of the window she's in because she wants to verify the site that she's on.
>
> **[2:45](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=165)** She hears it and then goes back to reading the intro paragraph.
>
> **[2:50](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=170)** She wants to figure out how long the page is, so she switches to headings mode, and flicks through the headings in the article.
>
> **[2:58](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=178)** She listens them from top to bottom, and then goes back from bottom towards the top until she gets about halfway through.
>
> **[3:06](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=186)** She starts reading the next paragraph, and then realizes she'll need to read this later.
>
> **[3:11](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=191)** It's too long for her to read right now.
>
> **[3:15](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=195)** It's the exact same as you.
>
> **[3:17](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=197)** So don't think of it any differently.
>
> **[3:20](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=200)** Make sure your content is written in a way that helps people make decisions quickly.
>
> **[3:24](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=204)** Should they read more or not?
>
> **[3:27](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=207)** Your main heading and introductory paragraphs will help with that.
>
> **[3:32](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=212)** Put the important things first so that it can be consumed quickly.
>
> **[3:37](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=217)** People with literacy issues will use the heading structure as well.
>
> **[3:40](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=220)** Sometimes they'll have tools that figure out the headings on a page so that people with literacy, and comprehension difficulties can click on a heading, and consume just the content between that heading and the next one, effectively presenting just one section at a time.
>
> **[3:57](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=237)** Ask yourself.
>
> **[3:58](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=238)** "If someone just reads the headings in my page, will they get a good understanding of what's on the page?
>
> **[4:05](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=245)** What if someone only reads the first sentence of every paragraph?"
>
> **[4:10](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=250)** Reading just the headings or the first sentence of every paragraph are both easy to do with assistive technology.
>
> **[4:15](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=255)** So make sure your heading structure reflects the content in the page, and is well-structured with appropriate levels of headings.
>
> **[4:23](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=263)** There are some simple tools you can use to accomplish that.
>
> **[4:27](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=267)** The Web Developer extension for Chrome is just one.
>
> **[4:30](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=270)** It includes a tool to examine the document outline.
>
> **[4:35](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=275)** Here we use it on some of our pages like the podcast pages to see if the headings are logical, and make sense.
>
> **[4:42](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=282)** Do they help people scan the page, and make decisions about whether or not they want to read further?
>
> **[4:49](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=289)** It's as simple as saying view document outline, and the heading structure opens in a new tab for you to examine.
>
> **[4:56](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=296)** Does the heading structure tell the story of your page?
>
> **[5:00](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=300)** If it does, you're creating reasonably accessible content.
>
> **[5:04](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=304)** If it doesn't, you've got some work to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (5)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - your (1)

#### [The importance of page titles](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=0)** - Page titles are useful to everyone.
>
> **[0:03](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=3)** They are visible in the browser's window title bar or the tab and are used by default when bookmarking a page.
>
> **[0:11](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=11)** Titles are particularly important to people like Sean and Mary who can't see the screen well or at all.
>
> **[0:18](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=18)** Why?
>
> **[0:19](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=19)** The title of the page is the first thing announced by a screen reader when a page loads.
>
> **[0:25](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=25)** It's an orientation cue that lets people know what the page is about and usually confirms that they're on the website or page they expect to be on.
>
> **[0:35](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=35)** It's important that each page in a site have a unique title.
>
> **[0:40](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=40)** It doesn't make sense to have every single page of the Green Thumb Lawncare site have a title of Green Thumb Lawncare.
>
> **[0:48](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=48)** They need to distinguish one page from another.
>
> **[0:50](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=50)** So we use Lawncare Package-Green Thumb Lawncare.
>
> **[0:56](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=56)** Locations-Green Thumb Lawncare.
>
> **[1:00](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=60)** Contact Us-Green Thumb Lawncare.
>
> **[1:04](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=64)** When we are checking out to buy our new T-shirt from the Merch warehouse, we want titles like this.
>
> **[1:10](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=70)** T-shirts-Merch Warehouse.
>
> **[1:13](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=73)** Sky blue crew-neck T-shirt-Merch Warehouse.
>
> **[1:16](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=76)** Billing information-Merch Warehouse.
>
> **[1:19](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=79)** And shipping information-Merch Warehouse.
>
> **[1:24](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=84)** I usually recommend creating titles that read from specific to general.
>
> **[1:29](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=89)** That puts the distinguishing information first.
>
> **[1:32](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=92)** If you look at the list of titles from the Merch Warehouse, it would be a little less convenient to listen to Merch Warehouse first in each title.
>
> **[1:41](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=101)** By putting the distinguishing information first, we help people confirm quicker that they are where they expect to be.
>
> **[1:49](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=109)** You might even get more specific.
>
> **[1:51](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=111)** What about billing information, checkout, Merch Warehouse.
>
> **[1:56](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=116)** Shipping information, checkout, Merch Warehouse.
>
> **[2:00](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=120)** Why?
>
> **[2:02](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=122)** This tells you that you're filling out billing and shipping information in the checkout process and not while you're logged in managing your account.
>
> **[2:12](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=132)** You should also make it read similarly to the h1 on the page.
>
> **[2:17](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=137)** The page title and the h1 should work together to say here's the main topic of this page.
>
> **[2:23](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=143)** These are small details but they are very useful for people with disabilities and specifically, visual impairments as an orientation and wayfinding cue.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Speakers:** - page (1)

#### [Page structure](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=0)** - We've already talked about heading structure and page titles.
>
> **[0:04](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=4)** Using good, clean markup on the [[Representational State Transfer (REST)|rest]] of your page is an extension of that same concept.
>
> **[0:10](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=10)** Use meaningful markup in a logical order.
>
> **[0:13](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=13)** You should use [[HTML]] markup the way it was designed to be used.
>
> **[0:19](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=19)** Choose the most meaningful [[Semantic Markup]] possible.
>
> **[0:22](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=22)** That will ensure that the visual structure of your brilliant design is conveyed to someone that can't see it.
>
> **[0:29](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=29)** Look for opportunities to understand and use HTML5 elements like the header element, the footer element, the aside, article, paragraph, main, nav, button,
>
> **[0:50](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=50)** use table for tabular data like our shopping cart and the order summary.
>
> **[0:55](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=55)** Use description lists, ordered lists, and unordered lists.
>
> **[1:00](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=60)** They're all elements that convey meaning.
>
> **[1:04](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=64)** The least meaningful markup we have in HTML are spans, divs, and sections.
>
> **[1:11](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=71)** Use those in cases where there's no other appropriate element.
>
> **[1:15](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=75)** But for things that are meaningful, use the appropriate elements listed in the HTML5 specification.
>
> **[1:22](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=82)** There are all kinds of tools that rely on this markup.
>
> **[1:26](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=86)** Voice recognition software like Dragon NaturallySpeaking, screen magnifiers like ZoomText, or screen readers like VoiceOver, NVDA, or JAWS.
>
> **[1:37](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=97)** They're all more efficient and easy to use when we have a good solid base of semantic markup.
>
> **[1:44](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=104)** When you make sure your implementations use good, solid semantic markup, we also enable people to create their own tools that help them consume things more readily.
>
> **[1:55](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=115)** Work with your development teams to get this markup into your pattern libraries and [[Design Systems]].
>
> **[2:01](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=121)** When you create this type of markup, people using assistive technologies can use it to their advantage.
>
> **[2:07](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=127)** It usually helps you standardize your practice too, and that tends to speed you up and ensure consistency.
>
> **[2:13](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=133)** It does all that and makes it more accessible.
>
> **[2:17](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=137)** It's a win-win.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Semantic Markup]] (3), [[HTML]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Design Systems]] (1)
> **Env Vars:** html (2), html5 (2), nvda (1), jaws (1)
> **CLI Commands:** make (1)
> **Documentation:** specification (1)
> **Definitions:** is an  (1)
> **Speakers:** - we (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [A challenge for you](https://www.linkedin.com/learning/accessibility-for-web-design/a-challenge-for-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/accessibility-for-web-design/a-challenge-for-you?u=76281980&t=1)** - Almost everyone I talk with about accessibility says they want to make their work more accessible.
>
> **[0:07](https://www.linkedin.com/learning/accessibility-for-web-design/a-challenge-for-you?u=76281980&t=7)** But not nearly enough take action, and not nearly enough change the way that they work.
>
> **[0:12](https://www.linkedin.com/learning/accessibility-for-web-design/a-challenge-for-you?u=76281980&t=12)** So here's my challenge to you, review this course over and over again and pick one thing each time that you go through the course that you can do differently than you do now, and then work on making that happen.
>
> **[0:26](https://www.linkedin.com/learning/accessibility-for-web-design/a-challenge-for-you?u=76281980&t=26)** If you make one improvement every two weeks, your work is going to be much more accessible in a year.
>
> **[0:33](https://www.linkedin.com/learning/accessibility-for-web-design/a-challenge-for-you?u=76281980&t=33)** And when you work in concert with developers, you get the opportunity to make a huge difference, not just through creating accessible [[Microsoft Products|products]], but by creating new processes that embrace accessibility and inclusion.
>
> **[0:46](https://www.linkedin.com/learning/accessibility-for-web-design/a-challenge-for-you?u=76281980&t=46)** If you're looking for more, you'll always find great articles and books from A List Apart, A Book Apart, and Smashing Magazine.
>
> **[0:55](https://www.linkedin.com/learning/accessibility-for-web-design/a-challenge-for-you?u=76281980&t=55)** And check out my site at [simplyaccessible.com](https://simplyaccessible.com), where my team and I have been working to create more great accessibility content for you.
>
> **[1:04](https://www.linkedin.com/learning/accessibility-for-web-design/a-challenge-for-you?u=76281980&t=64)** I'm feather on Twitter and derekfeatherstone on [[LinkedIn]].
>
> **[1:08](https://www.linkedin.com/learning/accessibility-for-web-design/a-challenge-for-you?u=76281980&t=68)** I'd love to connect with you and hear more about what you're working on and what you want to learn next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (3), find (1)
> **URLs:** [simplyaccessible.com](https://simplyaccessible.com) (1)
> **Speakers:** - almost (1)


## Instructor

- [[Derek Featherstone]]

## Path Context

### In [[Prepare for Digital Accessibility]]
← [[UX Foundations- Accessibility]] | **3 of 8** | [[Web Accessibility for Developers]] →

## Appears In

- [[Prepare for Digital Accessibility]]

---

[↑ Back to top](#)