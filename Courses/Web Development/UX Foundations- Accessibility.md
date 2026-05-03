---
type: course
cssclasses:
  - lle-course
slug: ux-foundations-accessibility
url: "https://www.linkedin.com/learning/ux-foundations-accessibility"
duration_minutes: 80
duration: 1h 20m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQE8aHAaQbFcfQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567115647265?e=2147483647&amp;v=beta&amp;t=HouDOTxZsi8A_ZuAjqZV9ETz46XpjzUXYOEA00wddQI"
linkedin_topic: Web Development
learning_paths:
  - '[[Prepare for Digital Accessibility]]'
prev_courses:
  - '[[Practical Accessibility For Designers]]'
next_courses:
  - '[[Accessibility for Web Design]]'
path_nav: '[{"path":"Prepare for Digital Accessibility","position":2,"total":8,"prev":"Practical Accessibility For Designers","next":"Accessibility for Web Design"}]'
path_count: 1
tags:
  - course
  - topic/web-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/UX%20Foundations-%20Accessibility.md)

![UX Foundations: Accessibility](https://media.licdn.com/dms/image/v2/C4E0DAQE8aHAaQbFcfQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567115647265?e=2147483647&amp;v=beta&amp;t=HouDOTxZsi8A_ZuAjqZV9ETz46XpjzUXYOEA00wddQI)

# UX Foundations: Accessibility

> The Internet has removed many obstacles to communication and interaction. However, when websites, technologies, or tools are poorly designed, they can create barriers that exclude people with disabilities from using the web. In this course, you'll learn how accessibility lowers the barrier to entry, by providing equal access and opportunity to people with a diverse range of hearing, movement, sigh

> [LinkedIn Learning](https://www.linkedin.com/learning/ux-foundations-accessibility) | 1h 20m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Welcome](#welcome)
- [**1. What Is Accessibility?**](#1-what-is-accessibility) (3 videos)
  - [What is accessibility?](#what-is-accessibility)
  - [Views of accessibility](#views-of-accessibility)
  - [Accessibility and user experience](#accessibility-and-user-experience)
- [**2. Accessibility by Example**](#2-accessibility-by-example) (6 videos)
  - [Managing flow](#managing-flow)
  - [Re-creating visual interactions](#re-creating-visual-interactions)
  - [Ensuring proximity in your design](#ensuring-proximity-in-your-design)
  - [Setting expectations](#setting-expectations)
  - [Writing the perfect content](#writing-the-perfect-content)
  - [Designing for memory issues](#designing-for-memory-issues)
- [**3. Tools and Techniques**](#3-tools-and-techniques) (4 videos)
  - [Overview of voice recognition software](#overview-of-voice-recognition-software)
  - [Overview of screen magnifiers](#overview-of-screen-magnifiers)
  - [Overview of screen readers](#overview-of-screen-readers)
  - [Overview of hardware assistive technology](#overview-of-hardware-assistive-technology)
- [**4. Personas for People with Disabilities**](#4-personas-for-people-with-disabilities) (6 videos)
  - [People are people](#people-are-people)
  - [Vision issues](#vision-issues)
  - [Hearing issues](#hearing-issues)
  - [Mobility and dexterity issues](#mobility-and-dexterity-issues)
  - [Cognitive issues](#cognitive-issues)
  - [Aging into disability](#aging-into-disability)
- [**5. Integrating Accessibility into Your UX Work and Process**](#5-integrating-accessibility-into-your-ux-work-and-process) (5 videos)
  - [Accessibility in content strategy](#accessibility-in-content-strategy)
  - [Accessibility and layout](#accessibility-and-layout)
  - [Accessibility and visual design](#accessibility-and-visual-design)
  - [Accessibility and interaction design](#accessibility-and-interaction-design)
  - [Accessibility and user research](#accessibility-and-user-research)
- [**Conclusion**](#conclusion) (1 videos)
  - [More resources and next steps](#more-resources-and-next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/ux-foundations-accessibility/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/ux-foundations-accessibility/welcome?u=76281980&t=4)** - Hi, everyone, I'm Derek Featherstone and welcome to Foundations of UX Accessibility. In this course, we'll look at what Accessibility is and how it impacts people with disabilities on the web. Then, we'll take a look at several Accessibility concepts and what they mean to you as a designer. You'll also see first hand how different assistive technology works, the tools that people with disabilities use to get around your site or application. We'll cover all of this and more, including a look at functional needs for working with personas and integrating Accessibility into your work as a [[User Experience (UX)|user experience]] professional. And remember, this is just the tip of the iceberg but is designed to help you chart a course forward to crafting accessible sites. Now, let's get started with Foundations of UX Accessibility.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1)
> **Speakers:** - hi (1)


### 1. What Is Accessibility?

[↑ Back to Table of Contents](#table-of-contents)

#### [What is accessibility?](https://www.linkedin.com/learning/ux-foundations-accessibility/what-is-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/what-is-accessibility?u=76281980&t=0)** - People often talk about how their applications are accessible 24/7 over the internet. That's not what we're talking about. That is simply availability. We're talking about accessibility for people with disabilities. We want to ensure that when we're designing, building, and creating content for our sites and applications that we're taking into account the needs of people with disabilities. That means we're going to make really smart choices in our work that ensure that people with different abilities can use what we create. We're talking about people with one of a handful of a handful of different disabilities: visual, auditory or hearing, mobility and dexterity, or even cognitive difficulties. Each of these different type of issues can have a profound effect on how people use their computer and the web. Accessibility is the practice of ensuring that we create websites that can be used by anyone, regardless of their capabilities. Usability is a closely related concept. In the physical world we often think of usability as how easy it is to learn and use something. Think of your printer, for example. How easy is it to operate the touch screen on that printer? How easy is it to figure out what the error code means? How easy is it to load paper? If we think in broad terms [[User Experience (UX)|user experience]] is the overall feeling and satisfaction that we create for someone that is trying to use our product. Thinking about the printer again, the user experience includes everything from purchasing the printer, unpacking it, getting it set up for the first time, connecting it to your computer or to the network, troubleshooting ink cartridges or paper jams,
>
> **[1:33](https://www.linkedin.com/learning/ux-foundations-accessibility/what-is-accessibility?u=76281980&t=93)** all the way through to that feel that you get after you've printed. Does the printed page look the way the print preview did? Does the ink smudge when you touch it? All of those contribute to an overall experience with that printer. Usability is all about how easy each individual interaction is with the printer. Accessibility would be all about how easy that interaction is for someone with a disability. It seems very straightforward and easy to draw a line between accessibility and usability. This isn't the case. Many people view accessibility as something that's for web developers only, that the user experience for someone that is blind is already horrible in the first place so why do we even think about UX for people with disabilities? Many people would like accessibility to simply be about following a set of rules as a designer, developer, or content creator. Many people also say that ease of use for someone with a disability isn't truly an accessibility issue because it's a usability issue that affects everyone. This is often used as a justification to not address the accessibility issue. That's a pretty narrow view. The truth is when a usability issue exists in a site it affects everyone, but it tends to affect people with disabilities much more dramatically. What slows a person with full vision down by three seconds on a 30 second interaction might slow down a person that is blind for two or three minutes and make the interaction last five minutes. These types of problems are accessibility issues because they mean they're preventing people with disabilities from completing the tasks that they're trying to complete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (2)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - people (1)

#### [Views of accessibility](https://www.linkedin.com/learning/ux-foundations-accessibility/views-of-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/views-of-accessibility?u=76281980&t=0)** - Accessibility is often thought of as a legal or technical requirement. This makes sense. In many countries, there are laws in place that are supposed to ensure accessibility. Laws are black and white, right? You are either in compliance with the law, or you're not. The World Wide Web Consortium has an entire set of guidelines, the Web Content Accessibility Guidelines, that are usually cited as the standard for accessibility in those laws. But there's a problem. Earlier, we talked about accessibility being all about ease of use for people with disabilities. Just because a website meets those standards from the W3C doesn't mean that it'll be easy for someone to use if they have a disability. Here's why. Here's a typical map that you might find somewhere on the internet. There are a few things that are required to make this map compliant. One of the biggest is ensuring that it can be used with a keyboard. In order to do that, we need to make sure all on-screen tools used to pan around the map can be used by a keyboard. There are three ways to make that happen. We can use a link, we can use a button, or we can use a div and allow that div to be clickable with the keyboard. So we do that. But which choice is the right choice? Look at all of these buttons. The fact that we call them buttons should give you a clue what the right element choice is. The buttons all perform an action. Panning up, panning down, panning left, or panning right. They aren't like links.
>
> **[1:33](https://www.linkedin.com/learning/ux-foundations-accessibility/views-of-accessibility?u=76281980&t=93)** Links go to another page or go to somewhere else on the same page. From a functional perspective, they may all perform the same way. But from an assistive technology perspective, we are better off using buttons than all other options. They are more readily recognized by all types of assistive technologies and are more intuitive and have exactly the right functionality built into them. They are activated by the keyboard's enter or space bar, and the focus stays on the button after is has been activated. Creating a custom control is a lot of work for very little payoff. And using a native button creates exactly the right expectation for the user. While the other options can be compliant, the best, easiest to understand, and most broadly compatible choice is the button. We do a lot of accessibility assessments for our clients and in some cases, we actually disagree with an assessment that has been done by someone else. Shocking, I know, but it happens. Here's an example where someone asked us about using color to convey information. In general, you shouldn't use color alone to convey information because it relies on having good color vision, and of course, vision in general. Here you see a navigation bar and one of the top level navigation items includes a color change to say that it is the currently active section of the site. Effectively, it's a you-are-here indicator. The client said, what do we need to do here? We keep getting a fail from the reviewer because we're using color alone to indicate where we are in the site.
>
> **[3:07](https://www.linkedin.com/learning/ux-foundations-accessibility/views-of-accessibility?u=76281980&t=187)** It's true. That one link, on its own, uses color alone to convey where we are in the site. But take a look at the bigger picture. That link is part of a page, which is part of a site. In addition to color, there's a page title that says where we are. There's also a breadcrumb trail or topic path that orients the user. Finally, there's a big old heading as the first piece of content in the main part of the page. There's at least three other ways where the user is given clues about where they are. They're not in the navigation bar, so yes, that part isn't compliant. But in the big picture, it's very likely that the user will be just fine knowing where they are. A visible treatment that places an arrow or other symbol in that link would accomplish the same thing. Yes, this is easy to fix, but no, it wouldn't be at the top of my list of priorities for addressing accessibility. Here's one last example. We often say, for accessibility reasons, that we don't want to auto-play video or audio on a web page. It can startle people. It interferes with screen-reading technology. So, we have a rule that says never auto-play content on a website. The problem with that is that auto-play can actually be a desirable thing. For someone that has fine motor control or dexterity issues, manually starting a video on every page with the keyboard can be very difficult. What's good for one group of users might actually be the exact opposite
>
> **[4:41](https://www.linkedin.com/learning/ux-foundations-accessibility/views-of-accessibility?u=76281980&t=281)** of what another group of users needs. The rule should be, never auto-play content on a website, except for those people that benefit from auto-playing content. See the difference? Does this meet compliance simply isn't enough detail to know whether or not a person with a disability can actually use the solution we've designed and built. Context truly matters. Accessibility can't simply be about compliance. It has to be part of [[User Experience (UX)|user experience]]. And that's where your job comes in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** go to (2)
> **Analogies:** picture (2)
> **Env Vars:** w3c (1)
> **Cross-References:** we talked about (1)
> **Documentation:** w3c (1)
> **Definitions:** is a  (1)

#### [Accessibility and user experience](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-and-user-experience?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-and-user-experience?u=76281980&t=0)** - [[User Experience (UX)|User Experience]] is a broad field that includes a lot of different types of professionals. Content strategists, information architects, user researchers, designers, and developers. In any project, almost everyone should be responsible for accessibility at some stage of the game. Here's a quick look at how UX pros incorporate accessibility into their practice. The user research team ensures that people with disabilities are an integral part of the research activities. They include appropriate representation for people with different types of disabilities, in all aspects of the research. That includes interviews, talk-aloud sessions, focus groups, facilitated and remote [[Usability Testing]], and other dedicated accessibility testing. Early in the research phase of the project, the content strategist will work with people with disabilities to learn more about how they think about a problem and what kinds of content will help meet those needs. What's important to people with disabilities? How do we create clues with words that tell people where they are and the consequences of their actions? What will happen when I click on this link? What will happen when I activate this button? The information architect will determine what labels and terminology people use in a particular subject area. They'll also extend that to see if people with disabilities have their own terminology they use for that subject area, and if they use specific phrases for accessibility-specific topics for a site. The interaction designer will work with the insights provided from the overall research to create wireframes, task flows, and prototypes of the site.
>
> **[1:35](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-and-user-experience?u=76281980&t=95)** All of these are informed by the results of the research. Wireframes should take into account the positioning of buttons, error messages, and calls to action on the screen, particularly for those with low vision. They should also specify flows and source order to ensure the on-screen components are experienced in a logical order. Everyone has a job to do when it comes to accessibility. UX designers are no exception. In fact, you, the UX designer, are very well-positioned to make the biggest difference in the way that a person with a disability uses a website. Why? Your work happens much earlier in the project than a developer or a [[Quality Assurance]] specialist. It is much more cost-effective to do it well the first time. And designed with accessibility in mind, right from the get-go. You get to set the tone and chart the path for success. No pressure or anything.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), [[Usability Testing]] (1), [[Quality Assurance]] (1)
> **CLI Commands:** make (1)
> **Cross-References:** earlier in (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - user (1)


### 2. Accessibility by Example

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing flow](https://www.linkedin.com/learning/ux-foundations-accessibility/managing-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/managing-flow?u=76281980&t=0)** - We see issues with linear flow at both the macro and micro level in a website. Many people with different types of disabilities rely on a keyboard for input, either because they simply can't use a traditional mouse, because it is much more efficient for them to use the keyboard or maybe it is simply less painful for them to use the keyboard than it is to use a mouse. Using a keyboard to complete any interaction is a must-have for accessibility. Let me say that again just for emphasis. A user must be able to use the keyboard to complete all interactions, period. There are no exceptions to this. While your development team is primed and ready to ensure that keyboard access is properly implemented, you as the designer must ensure that keyboard access is properly designed. Let's take a look at a very simple form. We have a search field, a Search button, and a set of radio buttons that help filter the search. Take a few seconds to think about how you'd move through this form with a keyboard. Got it? In what order should you move through the fields and the button in order to submit the form? Hopefully you'll see that you need to move from the text field to the radio buttons and to the Search button. Often [[Forms]] like this aren't coded this way and instead are coded so that you move from the search field to the Search button and then the radio buttons. So what's the big deal here? Why is this important? If you're a sighted keyboard user
>
> **[1:33](https://www.linkedin.com/learning/ux-foundations-accessibility/managing-flow?u=76281980&t=93)** and had to move from the text field to the Search button and then to the radio buttons and back, you'd be unhappy. It would be much more efficient to move from the search field to the radio buttons and then to the Search button. Now, assume for a moment that you're blind and can't see the screen, and it is being read out to you as you move from one item to the next. What would happen if you move from the search field to the Search button before you get to the radio buttons? We've seen this happen many times in [[Usability Testing]] sessions. When a blind person tabs to the Search button, they generally think they're at the end of the form and don't even realize that there are other options available after the button that submits the form. We manage the flow of a small but important interaction. We do the same at a macro level as well. We want to ensure that the linear flow for an entire page is easy to use. Let's take a peek at another example, a bank login form. There are three main tasks on this page, login to online [[Banking]], remember my details so it's easier for me to login next time, or get more information about a certain banking topic. Now, watch as we tab through this interface like any keyboard user would, sighted or non-sighted. As we start to tab through the interface, the first tab stop is Card Number. Then we continue on from there and the next tab stop is Password.
>
> **[3:05](https://www.linkedin.com/learning/ux-foundations-accessibility/managing-flow?u=76281980&t=185)** If we keep going, you'll see the tab focus moves to the Login button, then to the Home link, My Accounts, Customer Service, Contact, and then the main logo for the bank. We move into the left-hand sidebar to the View details button then I come up into the Card Nickname field. If I continue from there, you'll see that for some reason the next focal point is the Password field. And when I continue from there, I move back to the Login button, back up into the main navigation. What ends up happening here is that for some reason, because of the way this form was coded, we get stuck in a loop where critical pieces are never experienced by the keyboard user. We're not able to get into the Tour Our Site links in the right-hand sidebar and we never get to the Forgot Password link and we don't get to the Remember my Card Number and Nickname check box. It was fairly easy to see that the interaction on that page didn't support all of those goals. And it was mostly because of the way the page was constructed. But if this was a problem with how the form was built, why am I telling you? You didn't build it, you just designed it. Right. The problem is that you as the designer need to be very clear to specify exactly what order things should appear in for a keyboard user. You need to map it out, show the developer, communicate exactly what order you'd like. Because if you don't,
>
> **[4:39](https://www.linkedin.com/learning/ux-foundations-accessibility/managing-flow?u=76281980&t=279)** the developer will likely have to guess. Both of these examples were about forms but this concept of linearization and flow applies to regular content as well and not just interaction with forms. Here's a final example. Just as you need to specify the order for form interactions, you should do the same for paragraphs of content. See these images and the paragraphs of text that go with them? They need to be together in order so that if a screen reader is reading through the content of the page, they experience it, image and paragraph, image and paragraph, image and paragraph, rather than image, image, image, paragraph, paragraph, paragraph. Yes, you look at it now and think, "Nobody would ever do it that way." But it happens more often than I'd care to admit. We need to think about the order in which content is encountered on the page. We do things on purpose, with intent, because that is design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (3), [[Banking]] (2), [[Usability Testing]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - we (1)

#### [Re-creating visual interactions](https://www.linkedin.com/learning/ux-foundations-accessibility/re-creating-visual-interactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/re-creating-visual-interactions?u=76281980&t=0)** - As designers. we create a lot of meaning with the visual treatments we give to parts of a page. A lot of that visual information needs to be expressed to somebody that can't see the screen. Here's a really simple example to show what we mean. Take a look at this navigation block for this site. Not only is it a functional part of the site but it also provides wayfinding and orientation for someone. How is color used to communicate meaning here? What about font weight? Or even the indentation of the navigation items. And what about those little arrows? All of those elements of the design are visual in nature. They tell us about which item is the current section, which items are parent and child pages, and which sections are expanded or collapsed. So how do we communicate all of those things to someone that can't see the screen? They'll need things that seem redundant but really aren't. Visual information must be represented in a non visual way for those that can't see or can't see the entire screen at once. Someone that is blind or has low vision needs other text-based ways of representing this information. They get it from the page title, from the headings on a page, and from textual ways of saying you are here in the navigation. The developer's job is to make sure all those things are coded properly. Your job as the designer is to ensure that there is redundancy, so that there are multiple ways of finding out the same piece of information.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - as (1)

#### [Ensuring proximity in your design](https://www.linkedin.com/learning/ux-foundations-accessibility/ensuring-proximity-in-your-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/ensuring-proximity-in-your-design?u=76281980&t=0)** - Proximity is a pretty important concept for everyone, especially for people with vision impairment. The last time I was in London, I stayed at a hotel. And I climbed into the shower, and noticed a hot water tap on the left, and a hot water tap on the right. So I got out of the shower, and I didn't know how to operate it. It didn't make sense until I turned around and saw a tile that said, "The left tap operates the shower, "the right tap operates the bath." So now I at least know if I'm going to burn my head or my feet. The problem with this interface is that the tile with the instructions is six feet away from the faucet, and on a completely different wall. If two things are closely related, then they need to be close together in the interface. This happens a lot in web interfaces, and the impact is huge. These types of things need to be specified in designs so that they can be implemented properly. Let's take a look at this example.
>
> **[0:55](https://www.linkedin.com/learning/ux-foundations-accessibility/ensuring-proximity-in-your-design?u=76281980&t=55)** - Link services.
>
> **[0:57](https://www.linkedin.com/learning/ux-foundations-accessibility/ensuring-proximity-in-your-design?u=76281980&t=57)** - Here we click on "What's this?" A link to some help content.
>
> **[1:00](https://www.linkedin.com/learning/ux-foundations-accessibility/ensuring-proximity-in-your-design?u=76281980&t=60)** - Visited link, What's this? Press financing, Luxury Auto, [[HTML]] content.
>
> **[1:06](https://www.linkedin.com/learning/ux-foundations-accessibility/ensuring-proximity-in-your-design?u=76281980&t=66)** - That will display some help content, and the screen reader will go through the page.
>
> **[1:10](https://www.linkedin.com/learning/ux-foundations-accessibility/ensuring-proximity-in-your-design?u=76281980&t=70)** - Link credit rating, link various different plans. Link Vehicle Service Contract. Link financing, list 10 items. Link Warrenties, link Credit application. Link Parts, link Tire Store. Entering group landmark, link Garage. Link Detailing, link Emissions Test. Link Book a drive, link Service specials. End of list. Leaving group landmark, entering footer landmark. Link Terms & conditions. Link [[Privacy]], link Contact. Link [[Facebook]], link Twitter. HTML markup, CSS, and-- Visited link Simply Accessible Incorporated. Leaving footer landmark. Entering application landmark. Open agreement with three items, dialog.
>
> **[1:50](https://www.linkedin.com/learning/ux-foundations-accessibility/ensuring-proximity-in-your-design?u=76281980&t=110)** - Finally, we get to the content that was inserted at the bottom of the page. Visually, we show the dialogue right where the link was. We clicked on the link. We didn't make the dialogue appear down near the bottom of the page. We brought it right to that link so that it was really obvious and visible. That is critical for someone with low vision. From a code perspective, the dialogue was added to the bottom of the page. And it took us about 50 keystrokes to get from the "What's This?" link all the way into the help content. In reality, it might as well not even be there. It's basically non-existent. That's the same principle as the faucet and instructions being six feet away from each other. Those things need to be together. We see the same thing in this layout. The pieces of information need to be chunked appropriately, and need to be together. Here's the difference, let's take a look at this one that we've fixed. It appears the same way visually, but now listen to how much easier it is to get at the help content for the screen reader.
>
> **[2:50](https://www.linkedin.com/learning/ux-foundations-accessibility/ensuring-proximity-in-your-design?u=76281980&t=170)** - Internal link Services. Internal link What's this? Open agreement with three items, dialog heading level three. Open agreement.
>
> **[2:58](https://www.linkedin.com/learning/ux-foundations-accessibility/ensuring-proximity-in-your-design?u=76281980&t=178)** - Did you notice that this example also shows the other principles that we've talked about? There's a proper linear flow that needs to be managed in this dialogue. And we're ensuring that we're recreating the visual relationship that exists between the link and the dialogue.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[Privacy]] (1), [[Facebook]] (1)
> **Speakers:** - link (2), - proximity (1), - here (1), - visited (1), - that (1)
> **Env Vars:** html (2), css (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### [Setting expectations](https://www.linkedin.com/learning/ux-foundations-accessibility/setting-expectations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/setting-expectations?u=76281980&t=0)** - There are many clues in an interface that help people orient themselves to figure out where they are, what they can do, and what will happen if they click on a link, submit a form, or perform some other action. But what happens when we're faced with the unexpected? We can get easily confused, lost, or even worse, stuck and unable to move forward. We often talk about disability as a usability amplifier, many challenges that a person with a disability face are also challenges for people without disabilities. Their disability amplifies the severity of the issue though, a problem that might slow me down by a few seconds may slow down someone with a disability by a few minutes. What happens when we combine these two? When something unexpected happens it can confuse anyone. When it happens to someone who has a disability, who relies on assistive technology to work their computer the effects can be much more profound. Our responsibility as UX Pros is to always strive for absolute clarity and that starts with setting expectations for interactions. Here's a very simple example that illustrates what we mean. If you look at this interface we have some tabs in the page, each tab's title or label sets an expectation about the content that will be found in that tab when you switch to it. You switch to the tab by clicking the tab itself. The tabs are typically built using a set of in page links that use some [[JavaScript]] to switch the visible content. That link then sets the expectation
>
> **[1:35](https://www.linkedin.com/learning/ux-foundations-accessibility/setting-expectations?u=76281980&t=95)** about what will be in that panel. When we switch the tabs with the mouse you can see the visual treatment that shows, this is the tab you're currently on. They get confirmation that they're in the right place and that the tab switched. For someone with a visual impairment that visual indicator isn't there. We need another means to tell that person the same thing, to confirm that the tab switched and that they're where they expect to be. Content is one of the best ways to make that happen. The first piece of content in the tab itself should be a heading and should also answer the question, what happens when I click this link? If a tabs title is upcoming trips then a logical first piece of content in that tab panel might be you have three upcoming trips followed by a list of those trips. The content confirms that the person is in the right place. We set the expectation and then we met it. Modal dialogs and other interactions are expected in a modern interface. They're not always used correctly but they are certainly becoming more commonplace. What happens when we display content in a dialog but the user wasn't expecting it. Here's an example of how confusing this interaction can be. If you use a smartphone for a lot of web browsing you're likely familiar with this problem. Here's a set of links in the left sidebar of a site. Every link there goes to another page, except for this one, LogIn. When you see a link as part of a navigation block the expectation is that it will take you to another page.
>
> **[3:11](https://www.linkedin.com/learning/ux-foundations-accessibility/setting-expectations?u=76281980&t=191)** When that expectation is broken, like it is here, it can be very confusing. Watch as I [[Zoom]] into the interface to read the links and then tap on the LogIn link. What happens? Nothing. I question myself, did I tap it or did I miss it? So I try again. It doesn't seem to be working. I tap again, nothing. It doesn't make sense until I zoom back out and see that I've been presented with a dialog to login before I can continue. The dialog was there, it was just off the part of the screen that I could see when I tapped. It might as well not have been there. My reaction of course was to blame myself, I must not have tapped it right. The dialog was there but it was out of sight. Out of sight, out of mind. Now then, think about this, this zoomed in scenario happens to people on a mobile often but really only when they're zoomed in and the dialog appears out of view. But it happens to people using a screen magnifier all the time because they're almost always zoomed in. Yes they can zoom out to reorient themselves and then zoom back in but that is inefficient . Dialogs like that are very easily missed and regularly cause a lot of confusion for low vision users. In many ways that mobile use zoom case is the same as using a screen magnifier. I'll leave this as a problem for you to think about further. From a design perspective can you think of a few ways
>
> **[4:44](https://www.linkedin.com/learning/ux-foundations-accessibility/setting-expectations?u=76281980&t=284)** to overcome this problem? How do we let someone know there is a dialog outside their view? How could you do that on a mobile device? What about on a desktop with a screen magnifier? One last example about expectations and forgive me if I get a little angry here, this particular issue gets me all the time. I'm a keyboard user, not because of any disability but because I find it incredibly inefficient to use the mouse or trackpad when I can just use the keyboard for everything. Please allow me to introduce you to the auto advancing field. These are often used when someone needs to enter a number in a form and for whatever reason that number has been split into separate chunks. It might be a ten digit telephone number split into a three digit area code and a three and four digit field for the other numbers or it might be a 16 digit credit card number broken up into four, four digit fields. The idea is that rather than make the user move from one field to the next we create some clever JavaScript that figures out that you've typed a certain number of characters in the field and then automatically moves the focus to the next field. This solution can actually be a nightmare for people with disabilities when they're not expecting that behavior. Let's take a look.
>
> **[6:02](https://www.linkedin.com/learning/ux-foundations-accessibility/setting-expectations?u=76281980&t=362)** - Five, five, five, edit text blank, five, five, six, sev, edit text blank, one, two, one, three, one, two, four, one, two, three, four, one two, three, four, insertion at end of text, one, two, one, two, three, four, insertion at end of text, edit text. Voiceover off.
>
> **[6:27](https://www.linkedin.com/learning/ux-foundations-accessibility/setting-expectations?u=76281980&t=387)** - When we use that auto advancing field with the screen reader the JavaScript takes over control of the interface and the user is left with unexpected changes of focus. This leaves them not knowing what has happened or what field their in. They don't have the context that they need to understand what's going on. Now let's take a look at the same example and how it affects somebody with low vision. Similar to the screen reader demo a low vision user loses context and has a difficult time not only completing the field but also correcting their work because the fields don't behave as expected. We've broken the expectation of how [[Forms]] and fields work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (5), [[JavaScript]] (3), [[Forms]] (1)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** switch to (2), in the tab (1)
> **Speakers:** - there (1), - five (1), - when (1)
> **Analogies:** similar to (1)

#### [Writing the perfect content](https://www.linkedin.com/learning/ux-foundations-accessibility/writing-the-perfect-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/writing-the-perfect-content?u=76281980&t=0)** - We work very hard to create brilliant designs that delight, and inspire, and are easy to use. Our development teams work very hard to deliver on time, and with the functionality and performance that is required. There's another player that is often underrepresented though, content. If you have technically perfect accessible coding techniques, and a brilliant [[Accessible Design]], that wont matter if the content doesn't include what people want and need. As part of the overall experience, we need to insure that we have the correct material and place for everyone. Including specific content that is targeted at people with disabilities. How do we know what people with disabilities need though? See, that's the wrong question. How would you answer this question? How do we know what people will need? Of course, we'd ask them. We'd observe how they work, and we'd take those results, and use them to shape the content that we deliver. It's exactly the same for people with disabilities. Ask them. Observe how they work, and use that to shape the content that you deliver. I travel to a bank that's four kilometers further away, because the wheelchair ramp is closer to the main entrance. At the bank location closer to my house, the ramp is to the side of the building instead of the front. I need to find movies that have captions available, and that seriously limits the movies that I can go see with my friends on the weekends. I'm looking for a phone that doesn't require a lot of hand or finger strength to push the buttons.
>
> **[1:33](https://www.linkedin.com/learning/ux-foundations-accessibility/writing-the-perfect-content?u=76281980&t=93)** Notice that all three of those examples aren't really about the accessiblity of the information you're presenting. Instead, those three are about presenting the right information. Once you figure out what the right information is, you can start to think about the right time and place for presenting that information. We want to present content in ways that fit people with disabilities needs, and mental models of how they approach a problem. If we don't involve people with disabilities in the framing of the problem, we won't understand how they think. And if we don't understand how they think, we won't know how to best serve their needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Accessible Design]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - we (1)

#### [Designing for memory issues](https://www.linkedin.com/learning/ux-foundations-accessibility/designing-for-memory-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/designing-for-memory-issues?u=76281980&t=0)** - Here's two scenarios where memory comes into play. It shouldn't surprise you that these are both working with [[Forms]]. You've heard the phrase out of sight, out of mind in this course already when we were discussing modal dialogs. This can be can good thing, or it can be a bad thing. It's a good thing when we hide superfluous information or form fields from view. But what about when we hide information that is important or we make it disappear? Not good. It's becoming more trendy to create minimalist interfaces where form field labels are either non-existent or are overlaid on the fields themselves. This has some significant impacts on how people use these forms. Let's take a look as we walk through the mechanics of filling out a form that uses this technique. Note how the prompt disappears once you start typing? That may not appear to be much of a big deal to you, but I'm sure this has happened to you before. You're looking to fill in a date, you start filling in the date, and then you need to check the exact date in another app or in another tab. You check it, you come back to filling in the form, and you forgot the date format. How do you recover from that? You either guess and fill in the form, potentially submitting the wrong date, or you submit the form with the wrong date format and it causes an error, or you start over with that form field so that you can verify the correct format. All of this because you can't remember. You got slightly distracted and more importantly,
>
> **[1:33](https://www.linkedin.com/learning/ux-foundations-accessibility/designing-for-memory-issues?u=76281980&t=93)** because the design didn't take that into account. Now take this a step further. You were distracted or couldn't remember because you needed to switch tasks and you simply forgot the right format. But what if you actually forgot without switching tasks? What if you were constantly distracted and always needed that date format to persist? That's what people with a variety of cognitive difficulties experience every day, and it is something that we can design for. It could be for any reason, head injury, ADHD, or any other cognitive issue that impacts memory. So we design for this. Design for memory related issues. Here's a revised example that uses the same visual style as the other example, but with a small change. Watch what happens this time as we start typing in the form field. There will always be some issues with solutions like this, but this certainly helps with the memory related issues. Let's take a look at the same problem, but on a larger scale. We often see error messages for form submissions listed in an error collection bucket at the top of the page. That error bucket works well as a summary mechanism for somebody that can see the whole screen at once. But for somebody that can't see the whole screen at once, or is in the act of fixing those errors, the usefulness of that collection bucket is questionable, because, you guessed it, out of sight, out of mind. The error collection bucket at the top is a great summary, but it requires you to remember all the errors
>
> **[3:08](https://www.linkedin.com/learning/ux-foundations-accessibility/designing-for-memory-issues?u=76281980&t=188)** in order to be able to fix them. We need to use techniques where we provide multiple methods of accomplishing the same task, especially when we consider designing for memory issues. I'm not saying take away the collection bucket, it has it's uses, but we need to come up with a mechanism to provide reminders of those error messages when the user is trying to fix the errors. We use that global error collection bucket at the top, and combine that with local field level error messaging so that if you forget or if you can't see that error collection bucket when you're looking at it, it provides you the summary of the error right beside the field. It's right where you need it, when you need it. Not only does this help with people with memory issues, it also helps with people that have low or no vision. It isn't so much that they'd forget the errors listed in the collection bucket because their vision issues, it's more that they only see a small portion of the screen at once. When we use local, field level errors, we create a system that allows everyone a better chance to actively fix the issues in their form.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (2)
> **CLI Commands:** make (1)
> **Env Vars:** adhd (1)
> **Definitions:** is a  (1)
> **Speakers:** - here (1)


### 3. Tools and Techniques

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of voice recognition software](https://www.linkedin.com/learning/ux-foundations-accessibility/overview-of-voice-recognition-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/overview-of-voice-recognition-software?u=76281980&t=0)** - If you have a modern smartphone, you have the power of voice recognition in your pocket. Voice recognition is used for a lot of different reasons. Sometimes it's for productivity and efficiency and other times it's specifically because of a particular disability. The basic premise is handsfree operation of a computing device. Dragon NaturallySpeaking is the most common desktop voice recognition software used by consumers today. It's often used by people with mobility or dexterity impairments. They'll use the software for two basic things: dictation and command and control. Dictation is used to write documents, [[Jetpack Compose|compose]] emails, fill in phone numbers and addresses or anything that requires typing. Command and control is all about manipulating the computer, dragging files from one folder to another, switching from your email program to your web browser, and clicking on buttons or links in a web page. People that rely on Dragon NaturallySpeaking may also use other tools like predictive text, onscreen keyboards, or other [[Hardware]] tools that make them more productive. When using Dragon, the user can switch between modes based on context. If they need to dictate their phone number, they'd switch to numbers mode so that it ends up typing the number 613 instead of spelling the words six, one, three. To spell out names that are complex or words that have difficult spelling, they can switch to letters mode and dictate using the phonetic alphabet, delta, echo, radar, echo, kangaroo.
>
> **[1:34](https://www.linkedin.com/learning/ux-foundations-accessibility/overview-of-voice-recognition-software?u=76281980&t=94)** Command mode is based on a simple premise, see it and say it. That means that a Dragon users sees what's on the screen, decides what they want to do, and then says it. For example, they might say, "Open Firefox" or "Switch to [[Microsoft Outlook|Outlook]]" to change which program they're working in. They might also use it to manipulate a web page. Here's a demonstration of some very typical commands using Dragon. Page down, page up, click link, click button, click Galaxies, go back, reload that, click Venus, scroll down, scroll up. That's the basics of command and control and should seem pretty straightforward. Of course, Nuance, the makers of Dragon, know that not everything is going to be perfectly accessible. In fact, they build their product to have all kinds of fall back mechanisms for the user. Sometimes things that are clickable just aren't links or buttons. So the Dragon user can't simply control those things by voice command addressing that object directly. Instead of saying "Click link" to show all the links available on the page, they'll need to use the mouse grid to narrow down what they'd like to click on. Here's the mouse grid in action. Click link,
>
> **[3:08](https://www.linkedin.com/learning/ux-foundations-accessibility/overview-of-voice-recognition-software?u=76281980&t=188)** page down, scroll up, click button, click link, mouse grid, four, two, three, four, click that, click that, mouse grid, four, eight, six, four, click that. Using the mouse grid isn't really efficient. It can take something that should be a one-step action and turn it into something that takes six separate commands. Dragon can also be used to control the cursor with commands like mouse move left, or mouse move up 200, and faster or slower, and stop. Much like the mouse grid, this mechanism works but it isn't really efficient.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (1), [[Hardware]] (1), [[Microsoft Outlook|Outlook]] (1), cursor (1)
> **UI Navigation:** switch to (3), scroll up (2), scroll down (1), click on (1)
> **CLI Commands:** make (1)
> **Tools:** firefox (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - if (1)

#### [Overview of screen magnifiers](https://www.linkedin.com/learning/ux-foundations-accessibility/overview-of-screen-magnifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/overview-of-screen-magnifiers?u=76281980&t=0)** - Some people with low vision need magnification in order to see the screen. They're not completely blind, but may need to magnify the screen in order to be able to read. We're talking in some pretty general terms here but we've done testing before with people that simply bump up the font size in their browser or change their font size on the computer and we've also done testing with people that magnify their screen up to ten times the default size. Magnification software is built into all operating systems these days. Though third party magnification software does exist, it often provides more options than the operating systems provide themselves. One of the challenges with low vision is that when they're magnified, they can only see a small portion of the screen at once. This creates difficulties with orientation, with layouts in multiple columns, and with dynamic content like mobile dialogues or other content that shows and hides on a page. Often we see that people using a magnifier, will use a split screen mode, either horizontal or vertical, where they can see both the magnified and non magnified views next to each other. This helps them get the detail they need from the magnified view, but also maintains some sense of orientation about where they are on the page with the unmagnified view. Some people will also use a picture and picture mode where they [[Zoom]] in only over top of the mouse cursor. So the magnified view follows the cursor around the page. Before we go into a quick demo of someone using a magnifier trying to fill in a form, keep this in mind.
>
> **[1:35](https://www.linkedin.com/learning/ux-foundations-accessibility/overview-of-screen-magnifiers?u=76281980&t=95)** We're only showing the magnified view here. This isn't a [[Simulation]] of the reason why somebody needs low vision assistance. You're just seeing the magnified view with relatively perfect vision. Someone with low vision may have part of their field of view blocked. They may have blurred vision from cataracts or tunnel vision from glaucoma, or the center of their field of vision may be blocked because of macular degeneration. Okay, here's the demo.
>
> **[2:28](https://www.linkedin.com/learning/ux-foundations-accessibility/overview-of-screen-magnifiers?u=76281980&t=148)** Did you notice how disorienting it is to use a site while using the magnifier? If you really needed the magnifier, you might also notice that your eyes get tired really quickly. In that scenario, you might want to use a screen reader with the magnifier. Using the magnifier for orientation and finding the content you're after, and then using the reader to read that content out to you so that you can [[Representational State Transfer (REST)|rest]] your eyes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (2), [[Zoom]] (1), [[Simulation]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** picture (2)
> **Speakers:** - some (1)

#### [Overview of screen readers](https://www.linkedin.com/learning/ux-foundations-accessibility/overview-of-screen-readers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/overview-of-screen-readers?u=76281980&t=0)** - A screen reader is most often used by someone that is blind to allow them to operate their computer, phone, or tablet. It may also be used by someone with reading difficulties, primarily as a literacy aid to highlight words as the software reads aloud. Screen readers are usually the first tool that non-disabled developers and designers turn to in order to understand accessibility. And for good reason. There are free screen readers available. Voiceover is built into the Mac OS. NVDA is a free screen reader available for [[Windows]], and there are even options on [[Linux]]. The basic premise is that as the user moves through a screen, they are told all kinds of information about what's there. On a webpage for example, the user might hear that the webpage has five headings, 42 links, and six form fields. As they move through the page, they'll get all kinds of detail about each individual object they encounter. When used for accessing the web, there are three basic modes for using a screen reader. There's a "say everything" mode, where the screen reading just starts at the top left of the screen and reads everything to the user. There's also "traditional keyboard navigation." Pressing the tab key moves between the links and form fields on a page and the arrow keys move up or down a line to the next item. And there's also ways to move around just based on the type of object that you're interested in. A JAWS user, for example, could press the "H" key to move from one heading to the next. Or they might press "F" to move from form to form to form.
>
> **[1:33](https://www.linkedin.com/learning/ux-foundations-accessibility/overview-of-screen-readers?u=76281980&t=93)** This allows the user to scan the page for specific types of content and once they find it, use it by reading it or filling in the form or whatever other task they're trying to complete. This filtered movement through the page could be with those specific keystrokes, or by using the rotor in VoiceOver, or even by using one of the utility lists that a screen reader provides like a links list, a headings list, a form fields list, or even a buttons list. Here's a quick demo of a screen reader user moving through the page. In this case, they're trying to figure out which page they're on, then find a particular piece of content, and then have that content read to them.
>
> **[2:39](https://www.linkedin.com/learning/ux-foundations-accessibility/overview-of-screen-readers?u=76281980&t=159)** That audio interface and that need to remember those keystrokes or gestures, takes some getting used to, but once a screen reader user has it, they're often able to accomplish some tasks more quickly than their sighted coworkers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Linux]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** nvda (1), jaws (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - a (1)

#### [Overview of hardware assistive technology](https://www.linkedin.com/learning/ux-foundations-accessibility/overview-of-hardware-assistive-technology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/overview-of-hardware-assistive-technology?u=76281980&t=0)** - The assistive technology we've looked at so far has all been software based. Many people need assistive technology that is [[Hardware]] based. There isn't a lot that you need to do as a designer to take that into account. All the hardware that you'll see either emulates keyboard or mouse input. These hardware devices open a whole new world for people. For some, it's as simple as finding a keyboard that's designed for single-handed use. For others, it's more complex and involves switches and switch software. This is a video from a young man named Christopher Hills. He's in a wheelchair and controls his iPad using switch devices mounted on his headrest combined with iOS gestures. The accessibility settings available are impressive allowing him to control and play games that he just wouldn't be able to otherwise. As a start, go and research the different types of keyboards and mice that are available for people with disabilities. Put yourself in their shoes. Ask yourself, why would someone need this keyboard or mouse in the first place, and what would it be like to use it all the time? And make sure you take some time to watch that video, either now or later, and you'll be blown away by what Christopher is able to accomplish.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3)
> **Code Identifiers:** ipad (1), ios (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)


### 4. Personas for People with Disabilities

[↑ Back to Table of Contents](#table-of-contents)

#### [People are people](https://www.linkedin.com/learning/ux-foundations-accessibility/people-are-people?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/people-are-people?u=76281980&t=0)** - Accessibility often seems abstract and difficult to understand. Unless you interact with someone who has a disability on a regular basis, it might not be something you consider in your design. But accessibility issues surround you all the time. Here are some quotes from real people facing challenges on the web. I usually don't go through the navigation of a site. I just use [[Google]] to get the page I want to, because it's way easier than trying to sort through all the menus with my keyboard. I get frustrated because it's a simple link. That's all I want to do, just click the link. But I can't, so I leave. I have to buy my gifts on another site where I can click the links. I filled out the form and spent a lot of time on it and then I submitted it and all I got back was a huge page of red words on it. I didn't know what to do. I just wanted to register my device for its warranty. I'm trying to figure out which bus routes are accessible and which bus routes have bike carriers on them for my son, but I really can't tell the difference between these icons. These quotes are from people very much like you. These four just happen to have a disability that impacts how they use the web. They're trying to accomplish something online, make a purchase, fill out a form, apply for a new job, read articles. Sure, people with disabilities sometimes need special content that others don't need. Like, which movies are playing at the theater that have captions? Or where is the accessible entrance to the building? How powerful does my computer need to be in order to run Dragon Naturally Speaking? More often than not though, people with different disabilities
>
> **[1:31](https://www.linkedin.com/learning/ux-foundations-accessibility/people-are-people?u=76281980&t=91)** want to complete exactly the same tasks as you and I. And that's good. It should help you understand motivations and desires when you're creating a design, a task flow or a simple screen. What it won't help you with though is understanding the functional needs of people with a variety of disabilities. I just finished a pre-conference workshop on responsive design and accessibility. I loved teaching at this conference because it has an incredibly diverse crowd. It's an international conference and a lot of attendees have disabilities. In a workshop of 80 people, we likely had about six blind people, several with low vision, about four people in motorized wheelchairs or scooters, one person that needed sign language interpretation, and one person that needed [[Real-Time]] CART transcription. And those were just the people with needs that we could see. We knew in planning for the workshop that we need to account for some logistical hurdles. What were the functional needs of people with disabilities that were participating? Some of them would need access to the workshop materials in advance in order to review those electronic versions. That would let them effectively prepare for all the activities we we're going to be completing. They might have been blind, have low vision, or maybe even have some literacy difficulties. Other people might want the ability to contribute to group discussion, and to be able to submit answers to questions electronically during the workshop. Again, those people might be blind or even have mobility or dexterity impairments. Some would need real-time CART or sign language interpretation and they would need that for all instruction and group discussion. Many of these people's accessibility needs
>
> **[3:05](https://www.linkedin.com/learning/ux-foundations-accessibility/people-are-people?u=76281980&t=185)** are fairly straightforward. But others are not so obvious and much more complex. During the workshop we setup a series of chalkboards for students to use during the activities. And with these we face some additional challenges. Blind participants wouldn't be able to read the questions or write their answers on the board. Folks in wheelchairs and scooters wouldn't be able to easily write their answers down for the questions that we'd written at top of the paper. Some people would have difficulty holding the chalk to write or they might not be able to finish timed activities in that group setting. This was a highly interactive workshop so the room was in constant [[Flux]]. Moving chairs, tables, people, everything. So imagine the chaos that it created for the participant that needed CART. Or for someone that was on the scooter and wanted to write on the board. Imagine what that does for the person that is providing CART services and then needs to move all of her equipment around the room multiple times. Our goal was that students could come and go as they pleased, that they could choose where they wanted to be and participate in different collaborative writing activities. All of these chaos simply because we wanted students to write on chalkboard. After the workshop ended, we looked for opportunities to improve. How could have we prevented these issues? How could personas have helped us? Let's take your existing personas and integrate functional needs for people with disabilities into them. We're not talking about creating separate personas. You already have your personas for the projects, that identify motivation, needs and goals for your users.
>
> **[4:40](https://www.linkedin.com/learning/ux-foundations-accessibility/people-are-people?u=76281980&t=280)** And some of those people have disabilities too. It's as simple as that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (2), [[Google]] (1), [[Flux]] (1)
> **Env Vars:** cart (4)
> **Analogies:** imagine (2)
> **CLI Commands:** make (1)
> **Prerequisites:** setup (1)
> **Speakers:** - accessibility (1)

#### [Vision issues](https://www.linkedin.com/learning/ux-foundations-accessibility/vision-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/vision-issues?u=76281980&t=0)** - Using a computer, tablet, or a mobile device without being able to see the screen might seem like quite a challenge to you. That's because it is. You've seen some of the tools that people with visual impairment use already; screen readers and screen magnifiers. In order to use these tools efficiently, people with a visual impairment have a few functional needs. When a blind person uses their screen reader to explore the screen, they need to know exactly what each object is, what it is called, and what it does. For example, when moving around your site, the screen reader will say things like, "link," "login", or "slider [[Zoom]] level 75%" or "Heading level three: "Getting started building your own shrink ray." In each of those cases, as the person explores the screen, they are told what type of object it is, a link, a slider, or a heading, and they are told what it's about. Log in, zoom level 75%, Getting started building your own shrink ray. In most of those cases, they aren't told exactly what they can do with that thing, but most of those items have some built in expectations about what they are. A link is activated by pressing "Enter" and a slider uses the arrow keys to change the values. Some screen readers will provide those extra clues to the user if they're on an object for a while and haven't moved on or haven't done anything with the object. So what are these functional needs? First, you get a lot of this for free with programmatic accessibility. Most of this is done by developers by using straightforward objects in their work. Links, Form fields, Buttons,
>
> **[1:33](https://www.linkedin.com/learning/ux-foundations-accessibility/vision-issues?u=76281980&t=93)** Headings, Lists, and other pieces of code all provide structure and programmatic accessibility. The screen reader understands what a link is, what a button is, and what a slider is all because of the way things are coded. As a UX designer you don't need to know too much about that. Just be aware that most of the work is done at the code level by development teams. A blind user can't see the screen and if they can't see the screen, they can't see where the mouse cursor is. So what do they do? They move around the screen, click links, submit [[Forms]], and navigate using the keyboard only. That's the second functional need. Creating interfaces that work really well with the keyboard is a must-have for accessibility. You should build that need into any personas that you're creating for your projects. It doesn't need to be for the persona, "Stacy the screen reader user." It can simply be for "Stacy, the statistician." Take that existing persona you already have and add the functional need for efficient keyboard access to it, and you've gone a long way to ensuring accessibility for your site because that screen reader user does everything with the keyboard. The third major functional need for a screen reader user, is having text-based representations of visuals on the screen. Think of a progress bar or a doughnut chart or any other graph. Those visual representations aren't useful to someone that can't see unless there's also some type of text-based representation of it available. It might be a brief description of the visual or it might be a table that provides
>
> **[3:06](https://www.linkedin.com/learning/ux-foundations-accessibility/vision-issues?u=76281980&t=186)** all the same data with a summary. Either way, this is what we call a "Text Alternative", and it is a must-have for accessibility. We also want to ensure that people with low vision are able to easily access our sites as well. Because they are often zoomed in and only see a portion of the screen at once, we need to take that into account when we're designing layouts. Here's a layout from an application we recently reviewed. Let's think about this from a task flow perspective. The person using this app comes here to edit the details of the event. They change the title and the date, and then they make some notes about why they changed what they did. Then they save their work and return to the previous screen. Let's do a really crude [[Simulation]] of low vision. Hold up your hand and pretend to hold on to a straw. Now take a look at that layout through the straw. Now go through that same task flow while looking through the straw and with your other eye closed. Edit the title, edit the date, make some notes, and then save. What did you notice about the position of the "Save" button? It's in the top right corner. How did that work for the task flow? We'd be much, much better off with that button down at the bottom of the form. It would be easier to find. One of the most important functional needs for a screen magnifier user is to have well-placed calls-to-action. Finally, people with low vision need flexibility in their interfaces. They need to be able to increase font size
>
> **[4:38](https://www.linkedin.com/learning/ux-foundations-accessibility/vision-issues?u=76281980&t=278)** and reflow the layout of forms into vertical stacks to make it easier to see all of the information presented to them. This flexibility creates the environment that they need to be able to customize the display of the site to work well for the way that their eyes work. You should design for that flexibility. Include it in your personas. I love designing for people with low vision because in many ways the same issues affect people using a mobile phone or tablet. Usually what works well for someone with low vision also works well for someone on a very small screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (2), [[Forms]] (2), cursor (1), [[Simulation]] (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (2), is called (1)
> **Prerequisites:** getting started (2)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - using (1)

#### [Hearing issues](https://www.linkedin.com/learning/ux-foundations-accessibility/hearing-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/hearing-issues?u=76281980&t=0)** - Podcasts are exploding in popularity. And for good reason. People are getting great content in an audio format that they can take with them and listen to on their commute, on longer trips, or even just while doing things around the house. They're a great format unless you can't hear them. In that case, you need an alternative format for the audio. If you can't hear, the audio file is of no use to you. You need the transcript of the podcast. If you're watching videos, you need captions to get all the details of the video that are contained in the audio portion of the video. Dialogue, narration, and even sound effects that are important to the video's meaning. What's the functional need here? A person that is deaf or hard of hearing, needs to have a text representation of all the things that are contained in the audio format. When we provide captions on a video, we almost always provide a transcript as well. Why? The reality is that providing captions means that the person has to watch the video in real time to get all the details of the content. But with a transcript, the person can get at all the content without being time-bound to watching the video. They can skim the content of a transcript to know whether or not the video will solve their problem. They can read the transcript quicker than watching the video's captions in real time. This functional need for flexibility in terms of how content is consumed is useful not only to people that are deaf or hard of hearing, but it's actually kind of good for everyone. It's just good design.

> [!info]- Semantic Content
>
> **Definitions:** means that (1)
> **Speakers:** - podcasts (1)

#### [Mobility and dexterity issues](https://www.linkedin.com/learning/ux-foundations-accessibility/mobility-and-dexterity-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/mobility-and-dexterity-issues?u=76281980&t=0)** - I'd like you to try something for just 30 seconds. Get yourself a pencil with an eraser on it. Now hold it in your fingertips and use it like it's a stylus. Put your other hand behind your back. I'd like you to use it to pause this movie. I'd like you to use it to turn captions on. I'd like you to use it to search the course for the [[Microsoft Word|word]] "magnifier." How easy was it? You should have noticed that it was at least a little bit difficult, but that you could accomplish every task. Why? This course video player and search functionality have outstanding keyboard accessibility. It may not be that easy on every site though. And here's an open invitation for you: try using that pencil as a stylus for ten minutes. Or an hour. Or even half a day in the course of your regular work. It'll change the way you look at the sites that you use. That's your number one functional requirement for someone that struggles with a mobility or dexterity issue. They may not be able to use a mouse, so many people with these issues rely on the keyboard to get things done. They may use a stylus, a mouth or head wand, or even voice recognition technology. But they all require keyboard access. That's not the only way people with mobility difficulties use the computer. Other challenges show up in a lot of different ways. Some people may have a tremor or shake in their hand and struggle to click on very small targets like radio buttons, checkboxes or pagination controls.
>
> **[1:37](https://www.linkedin.com/learning/ux-foundations-accessibility/mobility-and-dexterity-issues?u=76281980&t=97)** Some people have difficulty even holding on to the mouse because of arthritic joints, making drag and drop an almost insurmountable task. Some people can't use their hands or arms at all because of paralysis or perhaps repetitive stress injury. They may use voice recognition software and need programmatic accessibility and proper text alternatives just like screen reader users. Let's take a look at this example site where we try to use a flip card interface with Dragon NaturallySpeaking. Click flip. Click flip. Click flip. Scroll down. Click flip. When I first try to activate the call to action "flip" it doesn't work. I can't seem to get the software to activate the link to flip the cards, so I need to resort to another method to click those links. This time, I'll use the mouse grid. Mouse grid. Six. Five. Four. Eight. Click that. Click flip. Scroll down. Mouse grid. Six. Eight. One.
>
> **[3:10](https://www.linkedin.com/learning/ux-foundations-accessibility/mobility-and-dexterity-issues?u=76281980&t=190)** Click that. I had to do that because the text alternative didn't match. The visible call to action says flip, but the code underneath doesn't use that word. In order for this to work, we need to ensure that all calls to action are represented properly in their text alternatives. While we're using voice recognition software, let's take a look at one last example. In this case, we'll look at a fairly typical setup for a carousel with next and previous controls for moving through the photos. Notice that the next and previous arrows aren't shown by default. The voice recognition user lives by the mantra, "see it and say it." If those calls to action aren't visible on the screen, they won't even know that it's a carousel, or that there's the ability to move between photos. This shows you another major functional need. Visible calls to action. Take these three things and incorporate them as functional needs into your designs and personas and you will go a long way to ensuring that your content and functionality is accessible to everyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **UI Navigation:** scroll down (2), click on (1), drag and drop (1)
> **Analogies:** just like (1)
> **Prerequisites:** setup (1)
> **Speakers:** - i (1)

#### [Cognitive issues](https://www.linkedin.com/learning/ux-foundations-accessibility/cognitive-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/cognitive-issues?u=76281980&t=0)** - Cognitive issues are the least understood areas of accessibility. They're incredibly diverse and are sometimes difficult to accommodate. Many people even throw their hands up in frustration, not knowing how to take these into account in their designs. Most cognitive issues relate to one of the following types of brain function; memory, problem solving, attention and focus, literacy and reading, visual comprehension, or verbal comprehension. Some of these issues don't necessarily have anything to do with the disability either. They could simply be because someone is consuming content in their non-native language. There are a few things that we can do to help with some of these issues. These strategies won't eliminate the problems, but they certainly will help. First, design for forgetfulness. Remember the local field-level error messages? That's a great example of designing for forgetfulness. Assume that someone will forget and adjust your design accordingly. Second, write with plain language. Use the simplest possible language for explaining things. Avoid jargon where possible, and insure that acronyms are provided in long form. Finally, provide predictability in your interface. This seems obvious, but people with cognitive difficulties need pages and sites to behave in predictable ways. Your navigation should be consistent. You should tell people how many steps a process will take before they start the process. You should tell people in advance if something unexpected will happen like opening links in new tabs or [[Windows]].
>
> **[1:36](https://www.linkedin.com/learning/ux-foundations-accessibility/cognitive-issues?u=76281980&t=96)** The key to designing for cognitive difficulties is to avoid getting bogged down in medical diagnoses or causes. All of these needs could be permanent or maybe even temporary. Maybe you're struggling to remember things because you're extra tired from working overtime. Maybe you're having difficulty with a website because you're reading it in a different language while you're on vacation. Or maybe you can't pay attention because your children are playing in the other room while you just try to get something done. Focus on designing for those main functional issues like memory, literacy and attention. And, as we've said before, this focus will help you create sites that are better for everyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1)
> **Speakers:** - cognitive (1)

#### [Aging into disability](https://www.linkedin.com/learning/ux-foundations-accessibility/aging-into-disability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/aging-into-disability?u=76281980&t=0)** - As we grow older, our capabilities change. If we're lucky, we aren't affected too drastically by our changing eyesight or hearing, mobility, or other abilities. But the reality is, one in five of us will have some type of a disability over our lifetime. I try not to admit it, but I really can't read the words on a medicine container anymore. I don't have glasses or contacts but I often take photos of the dosage or instructions with my phone and then [[Zoom]] into the photo to read it. At some point, I'm sure it will be bad enough that I do need glasses. That's just the reality for so many of us. Remember that every persona that we've looked at and all the functional needs that we've discussed, are concepts that will help you design for any ability. Any permanent disability might also be temporary. Like a broken arm, or being in a loud environment where there's a lot of glare on your screen. As our population ages, the Baby Boomers are now at or approaching retirement age. They have disposable income. They are a huge demographic in terms of the population. They're becoming the Silver Tsunami, and their perfect vision, hearing, memory, and coordination are changing. Everything that we've talked about here is important to accessibility, not only in the here and now, but also in the future and possibly even your future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1)
> **Speakers:** - as (1)


### 5. Integrating Accessibility into Your UX Work and Process

[↑ Back to Table of Contents](#table-of-contents)

#### [Accessibility in content strategy](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-in-content-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-in-content-strategy?u=76281980&t=0)** - Twelve. That's the number of times someone using a [[Banking]] site we were working on, got lost in completing one simple transaction. They needed to add a bill and pay it, but they got lost. They weren't able to pay their bill, and they needed to call customer service. And, they described their overall satisfaction with the experience, frustrating. Their level of trust in the bank, they scored it a 3 out of 10. What were the biggest culprits in that study? There were three key things that caused these problems. Number one, it was difficult to determine which page they were on at any given time. Including getting lost in the middle of multi-step processes. Number two, when they submitted [[Forms]] they didn't know what was going to happen. Was it going to refresh the page? Would it take them to a new page? Was it going to display another part of the interface that had previously been hidden? Three, when they were in a mutli-step process they didn't understand which step they were on, and what was left to complete in order to successfully pay their bill. Sadly, this is typical. And, all of them are preventable when we create well thought out content that orients the user, creates interaction expectations, and provides the right feedback about the interaction. As a content strategist, you have three questions to ask about content as it relates to accessibility. First, does the content create clear expectations at all levels? That means page titles, links, form labels, and guiding or instructional text.
>
> **[1:34](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-in-content-strategy?u=76281980&t=94)** As an example, the page title for the bank we were working with was just "Online Banking for EZBANK," for the entire online banking site. Those page titles needed to be more like, "Add a Bill: Confirm your account number," or "Pay a Bill: Select your payment account," or "Confirmation: You successfully paid company ABC." Similarly, you wouldn't say, "To pay a bill click here" with the "click here" as the link. You'd write, "Pay a bill," and make that phrase the link itself. Be specific and be clear. That's good design for everyone, but it's even more important for people with disabilities. Second, is there any specific content that people with disabilities need? And if so, where should it be presented? Think about that same bank providing a list of branch locations. We've learned from working with people with different disabilities that sometimes they'll travel farther for accessibility. They may prefer to go to a bank that is five mile away because the ramp for the entrance is directly beside the front door. Whereas, the ramp for the bank that is one and a half miles away is at the side of the building. That stuff matters, and if we know that people with different disabilities make choices that way, we should build that into our mental models, and that ultimately influences where we place that type of information. Do we place it on a location listing page? Or, do we place it on the location detail page? Putting it on the listing page makes it much easier for someone with a disability to make their choice. Third, are there any specific needs
>
> **[3:07](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-in-content-strategy?u=76281980&t=187)** for customer service or commmunication for people with disabilities? Here's an example we see all the time. "Phone Number" is a required field on many contact forms, but many people that are deaf, or have other disabilities, may not even use a phone. So, perhaps we include a field that asks for "Preferred Communication Method," and give the option of "Phone, Text Chat, or Email." Your job as a content strategist is critical to any project, and even more so for effectively creating sites and applications that work well for people with disabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Banking]] (3), [[Forms]] (2)
> **CLI Commands:** make (3)
> **Env Vars:** ezbank (1), abc (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - twelve (1)

#### [Accessibility and layout](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-and-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-and-layout?u=76281980&t=0)** - When you're creating a design, there are a couple of key things that impact your work. We've talked briefly about these scenarios earlier in the course: multiple column layouts and line of sight for calls to action. These are significant challenges for people with low vision that have a limited view of the screen. Look to transform some of your [[Forms]] from a multiple column layout like this one into a single vertical stack. This will keep error messages, form field requirements, and other important information all in the field of view for a low-vision user. Here's a few sample layouts and wireframes to consider. We'll show each on the screen for a few seconds. Use that straw test to fill out and submit each form. Look for opportunities to use that straw test in your own work. It will help you identify areas where a low-vision user doesn't have a strong line of sight on a call to action. There's nothing that says you can't have multiple save buttons on a form and look for opportunities to create predictability and patterns in your layouts that lead the low-vision user to the call of action. You're already incorporating feedback from people with disabilities into your process. You are, aren't you? So feel free to test those layout choices with real people with low vision. The straw test is a good starting point, but getting feedback from real people will give you much better insight into how your layout will really work. And remember, you can't really test a wireframe or mockup for a person that is completely blind and uses a screen reader, but you can test with a person with low vision. You could even test using paper prototypes. The important thing is this:
>
> **[1:33](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-and-layout?u=76281980&t=93)** test with real people as part of your process. It'll get you a lot closer to an accessible site or app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Speakers:** - when (1)

#### [Accessibility and visual design](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-and-visual-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-and-visual-design?u=76281980&t=0)** - One of the most challenging things as a designer is ensuring that what you envision for the design is also carried through to development in an accessible way. You need to ensure the proper flow in a document or layout. You should work with the development team to manage and create that flow not just for one screen, but for all of them. Take a look at this wireframe from earlier. Make sure, that as part of your process, you work with the developer to come up with what you think is the best linear flow or source order for that wireframe or that component. It might be an image carousel or a date picker widget or something bigger like a product detail page with purchasing options. Regardless, make sure that you're working with the development team to determine the best order and then document that order in your designs. I'll often use numbers to indicate a source order or interaction sequence like this. This keeps everyone on the same page and eliminates a lot of the guesswork that often goes into our work. You'll also want to be sure that you're choosing colors that work well from a contrast perspective. Light text on a slightly darker background just doesn't work. It makes the text difficult to read for everyone and can easily cause eyestrain and discomfort in people with low vision. Both Jonathan Snook and Lea Verou have easy-to-use color contrast checkers that you can use to test different color combinations. Make sure that you use these tools early in your color combination exploration. Finally, you'll want to build in to your process time to review the feedback mechanisms that are used for things like success messages, error messages,
>
> **[1:35](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-and-visual-design?u=76281980&t=95)** and other transactions. These are often shown at the top of the page. Just remember that someone with low vision may miss those messages completely. If you're including your messages at the top of the page, consider using a redundant message that is similar that is in the line of sight for someone that has low vision. Here's an example mock-up of what that might look like. See how we have the error message at the top with an easily recognizable icon? Then down below where the transaction took place, we have a similar message that uses the same visual language. Your process needs to ensure that we review these pieces of design as early as possible. Again, if you're in doubt, ask or test with real people.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Speakers:** - one (1)

#### [Accessibility and interaction design](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-and-interaction-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-and-interaction-design?u=76281980&t=0)** - No two people will do things in exactly the same way, yet we often design like people have only one true path to completion for a task. That may be be true when we design a task, but it isn't always true for designing for something bigger. A user generally needs to complete a task not for it's own sake but because it contributes to some higher goal. If you're an interaction designer, you're responsible for creating those task flows and use cases but you're always thinking about the purpose of that task. For example, a task might be that a user can play the podcast using their keyboard. But the higher purpose is, the user wants to listen to the podcast to learn about creating their own shrink ray. The higher purpose there is a learning goal. So if we design with that purpose in mind, we might approach things a little differently. We want to create interactions that allow multiple methods of achieving the same goal. Why? No two people will do things in exactly the same way. So as part of our design process, we need to think about multiple methods for achieving that goal. How would a person with each of the different types of disabilities we've discussed, learn about building their own shrink ray from a podcast? A person that is blind or has no vision, may listen to the podcast, or may just want to access the transcript. A deaf person may want the transcript, but not on a web page. They may want it to be just as portable as an audio file so maybe they want a downloadable format that they can send to their e-book reader. A person with mobility or dexterity challenges
>
> **[1:34](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-and-interaction-design?u=76281980&t=94)** may have difficulties with the controls and the audio player on your site. And so they my be more likely to subscribe via iTunes or other podcast library tool. A person with a cognitive or memory related issue may not remember the details of what they heard in the podcast, so the written transcript form and a pictorial summary for building that shrink ray may be really useful to them. Some of these ideas may have little impact on your end design, but some of them will, and that's the important part. That you consider what ways people with different abilities might want to achieve a particular goal or accomplish a certain task. That's what you need to build into your process. We create interactions all the time that seem simple enough. But the reality is, that some of those interactions can be really difficult for people with disabilities. We always look for ways to create a simpler interaction where possible. Let's take a look at these sliders for example. We've made them fully keyboard accessible. But how does it work for someone with low vision? What happens if you use the straw test here? Go through the action of manipulating the sliders using the straw. What do you notice? A low vision user will have a difficult time with the slider because the number that changes, the feedback, is out of the field of view when they're manipulating the slider. So take a look at this modified version. In this case, we've helped to count for someone with low vision by incorporating the number directly onto the handle itself. You might make it appear above the handle,
>
> **[3:07](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-and-interaction-design?u=76281980&t=187)** but the point still stands, it is much easier to use when that number is in the line of sight. One other thing to note, the numbers that change are also in a text box. We've set this up so that not only can you change numbers by using the sliders, but you can also change numbers by directly editing the text fields themselves. Why? A person with a mobility impairment using dragging naturally speaking, will be able to change values in the fields much more quickly then they would be able to do the same with the slider handle. These are just a few examples of designing so that there are multiple ways of accomplishing the same goal. Keep this in mind as you design, to provide greater accessibility to everyone.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** itunes (1)
> **Definitions:** is a  (1)
> **Speakers:** - no (1)

#### [Accessibility and user research](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-and-user-research?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/accessibility-and-user-research?u=76281980&t=0)** - Listen Observe Discuss Probe Those are all things you'll do as a user researcher and you need to be sure to include people with disabilities in those activities too. You'll want to ask them the same questions. Observe them working. Invite them to talk aloud sessions and participate in card sorting exercises. The golden rule here is that if you're doing research include people with disabilities in everything. It isn't always easy. In fact, sometimes it poses significant challenges. Many researchers use online card sorting tools that require you to drag and drop virtual cards into different piles. That card sorting tool may not be accessible to people with disabilities though. Which means that your choice of tool automatically excludes a certain group of people. A group of people that you already know you need to engage with and include. Customer feedback survey tools pose the same challenges. They may be unusable to someone using Dragon NaturallySpeaking or may not even work with a keyboard at all. If you're doing a brainstorming session in a room with a whiteboard, how can people in wheelchairs or on scooters participate? Is there a mechanism for gathering electronic feedback from people that can't even hold a pen or pencil to write down their thoughts? As a user researcher, inclusion is your job. It will take some thought, but having the views and needs of people with disabilities represented in your research and the overall process, is worth it.

> [!info]- Semantic Content
>
> **UI Navigation:** drag and drop (1)
> **Definitions:** means that (1)
> **Speakers:** - listen (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [More resources and next steps](https://www.linkedin.com/learning/ux-foundations-accessibility/more-resources-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-foundations-accessibility/more-resources-and-next-steps?u=76281980&t=0)** - So there you have it. Thank you so much for watching this foundational look at accessibility. As we've said, this is just the tip of the iceberg. I encourage you to check out Zoe Gillenwater's course: [[Web Accessibility]] Principles right here on [Lynda.com](https://Lynda.com). A great resource with lots of articles on accessibility is the WebAIM site at: [webaim.org](https://webaim.org). There's always excellent accessibility content on magazines like: "A List Apart," "Smashing Magazine," and "SitePoint." Of course, I'd love it if you would check out my site: [SimplyAccessible.com](https://SimplyAccessible.com). I write a lot about accessibility concepts, principles, and techniques. Please do connect with me. I'm feather on Twitter, and I'd love to hear from you, receive your feedback, or learn more about what you want, and need to make your work more accessible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Accessibility]] (1)
> **URLs:** [lynda.com](https://lynda.com) (1), [webaim.org](https://webaim.org) (1), [simplyaccessible.com](https://simplyaccessible.com) (1)
> **CLI Commands:** make (1)
> **Speakers:** - so (1)


## Instructor

- [[Derek Featherstone]]

## Path Context

### In [[Prepare for Digital Accessibility]]
← [[Practical Accessibility For Designers]] | **2 of 8** | [[Accessibility for Web Design]] →

## Appears In

- [[Prepare for Digital Accessibility]]

---

[↑ Back to top](#)