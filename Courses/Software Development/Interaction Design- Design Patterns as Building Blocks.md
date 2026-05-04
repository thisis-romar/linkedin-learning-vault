---
type: course
cssclasses:
  - lle-course
slug: interaction-design-design-patterns-as-building-blocks
url: "https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks"
duration_minutes: 68
duration: 1h 8m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHLTJSpdM1eXw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1572301751430?e=2147483647&amp;v=beta&amp;t=u0vnfKYm4oEEf8ESg2hKuUdVVZW4UuTYFlyDxxWdHxk"
linkedin_topic: Software Development
learning_paths:
  - '[Exploring a Career in Interaction Design](../../Paths/Software%20Development/Learning%20Paths/Exploring%20a%20Career%20in%20Interaction%20Design.md)'
prev_courses:
  - '[Interaction Design- Flow](Interaction%20Design-%20Flow.md)'
next_courses:
  - '[Interaction Design- Projects and Platforms](Interaction%20Design-%20Projects%20and%20Platforms.md)'
path_nav: '[{"path":"Exploring a Career in Interaction Design","position":8,"total":9,"prev":"Interaction Design- Flow","next":"Interaction Design- Projects and Platforms"}]'
path_count: 1
tags:
  - course
  - topic/software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Interaction%20Design-%20Design%20Patterns%20as%20Building%20Blocks.md)

![Interaction Design: Design Patterns as Building Blocks](https://media.licdn.com/dms/image/v2/C4E0DAQHLTJSpdM1eXw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1572301751430?e=2147483647&amp;v=beta&amp;t=u0vnfKYm4oEEf8ESg2hKuUdVVZW4UuTYFlyDxxWdHxk)

# Interaction Design: Design Patterns as Building Blocks

> Design patterns offer solutions for common design problems. UX designers rely on design patterns and best practices to design usable and consistent interfaces more quickly. This course introduces new patterns, approaches, and contexts to designing common interface elements such as navigation, buttons, forms, links, progress indicators, and search boxes. Rather than having you copy common patterns,

> [LinkedIn Learning](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks) | 1h 8m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Using design patterns](#using-design-patterns)
- [**1. Patterns Overview**](#1-patterns-overview) (5 videos)
  - [What is a design pattern?](#what-is-a-design-pattern)
  - [Why are design patterns useful?](#why-are-design-patterns-useful)
  - [Design pattern library vs. style guides](#design-pattern-library-vs-style-guides)
  - [When to break a pattern](#when-to-break-a-pattern)
  - [Anti patterns or dark patterns](#anti-patterns-or-dark-patterns)
- [**2. Page Structure and Organization**](#2-page-structure-and-organization) (5 videos)
  - [Global navigation](#global-navigation)
  - [Cards](#cards)
  - [Tabs](#tabs)
  - [Side navigation](#side-navigation)
  - [Accordions](#accordions)
- [**3. Form and Data Controls**](#3-form-and-data-controls) (8 videos)
  - [Fitts's law, grouping, and cognitive load](#fittss-law-grouping-and-cognitive-load)
  - [Text input](#text-input)
  - [Checkboxes, radio buttons, and dropdowns](#checkboxes-radio-buttons-and-dropdowns)
  - [Tooltips and popovers](#tooltips-and-popovers)
  - [Buttons](#buttons)
  - [Links and breadcrumbs](#links-and-breadcrumbs)
  - [Toggle switches](#toggle-switches)
  - [Modals](#modals)
- [**4. Indicating Progress and Feedback**](#4-indicating-progress-and-feedback) (5 videos)
  - [Feedback in UX](#feedback-in-ux)
  - [System messaging](#system-messaging)
  - [Progress indicators](#progress-indicators)
  - [Progress meters](#progress-meters)
  - [Progress indicators: Spinners](#progress-indicators-spinners)
- [**5. Search and Filtering**](#5-search-and-filtering) (4 videos)
  - [Search input](#search-input)
  - [Autocomplete](#autocomplete)
  - [Search results](#search-results)
  - [Filtering](#filtering)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next Steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Using design patterns](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/using-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/using-design-patterns?u=76281980&t=0)** - [Diane] As UX designers we're challenged to sift through hundreds of potential interactions to create great interactive experiences. With [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) you can establish consistency for the [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) and get to better designs faster. You'll become versed in pattern design and understand some of the thinking behind common design paradigms. We'll also take a look at examples on how various companies apply them. Using the concepts and ideas presented you'll be immersed in standard design patterns. In my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course I'll explain what design patterns are and how to apply them as well as key considerations when using them. I'm a UX designer experienced in creating and driving design pattern libraries. So, join me, Diane Cronenwett, as we walk through some common design use cases and scenarios on when and how to apply design patterns to your next project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (4), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Speakers:** - [diane] (1)


### 1. Patterns Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a design pattern?](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/what-is-a-design-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/what-is-a-design-pattern?u=76281980&t=0)** - [Instructor] As UX designers, we approach designing interfaces by using [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md). Design patterns are common solutions for common design problems. The pattern concept is rooted from architecture. In 1977, a book called "The Pattern Language" was written by Christopher Alexander and other co-authors on how to organize towns and cities using common understandings people have around space and using repeatable solutions. Patterns in UX are also repeatable solutions. Design patterns are documented interactions and best practices for how and when to use the correct user interface element. Design patterns typically consist of the following elements: interaction and behavior, description, and best practices. Depending on the pattern library, the pattern may have both visual and technical specifications if they've been developed into reusable components that engineers can use when developing the experience. Let's take a look at how pattern interactions are constructed. In this example, we have a pattern for a calendar in a text box input. While this seems like a very straightforward interaction, there are some key states and considerations when diving into the details of this calendar input. One consideration is whether or not the calendar is invoked from the icon or the field. In this description, it's invoked by the focus on the field, not just the icon. The next interaction is with the calendar itself. Some questions we want to answer
>
> **[1:33](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/what-is-a-design-pattern?u=76281980&t=93)** for how this pattern works is: What will the date default to? How does this user change the date if they want to select something for next year? Can the user just enter the date into the field? In this case, they can. We then have the end state and how the date is formatted after the user selects the date from the calendar. Will it be shown like in this example or will it be using the month written out as September? All of these interactions and states should be documented in the pattern itself. Specs that highlight key interactions are also included in the pattern documentation. In our example, we walk through a calendar pattern. This pattern didn't include any visual or technical elements, this was just a design pattern that focused on interactions. Patterns establish consistency for interactions and sets expectations on how the user should interact with an interface element. The other element of design patterns is the visual design. Oftentimes, design patterns are a subtle reflection of the brand. For example, looking at a simple element like a radio button, we can see how different brands handle color to reinforce their identity. Like in this example from E-Trade, a financial trading platform, and this example from MailChimp, a marketing automation platform. The combination of interaction patterns, technical, and visual specifications are collectively known as a design system. [Design Systems](../../Skills/Web%20Development/Design%20Systems.md) are comprehensive and are used to help expedite development while maintaining visual and interaction consistency.
>
> **[3:09](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/what-is-a-design-pattern?u=76281980&t=189)** Design systems help design scale. Using this accordion example, we can visualize the interaction design as how the accordion behaves when we click on the panel. The code snippet is the underlying code that componentized this element and the visual design is the color, type, and icons used on the element itself. Design systems have a combination of interaction, code, and visual design. Interaction patterns are the foundation of usable and consistent interface design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (6), [Design Systems](../../Skills/Web%20Development/Design%20Systems.md) (3)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Why are design patterns useful?](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/why-are-design-patterns-useful?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/why-are-design-patterns-useful?u=76281980&t=0)** - [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) are reusable design solutions for common design problems. They document how interaction should work for interface elements. In UX, there are some key advantages to using patterns. The first is that patterns help create usable interfaces. As UX designers, we use patterns to keep our experiences in alignment with common paradigms that users expect. Design solutions become patterns because they work in various contexts. When common patterns are broken, this could lead to frustration, and an unusable experience. If you've ever tried to pull open a door that says push, you may have experienced this firsthand. Patterns have typically gone through rounds of usability tests to ensure that the interaction works as expected for users. If you're creating your own pattern library, you'll want to wireframe the interactions you want, prototype it, and usability test it to make sure it's usable by your users before it becomes codified into a component. The second reason is that patterns help us design faster. Patterns enable us to focus on bigger experience problems, rather than trying to design something that already has a common functionality. For example, if we're designing a reservation experience, using our previous example of the date picker pattern, we don't have to think about how a date picker works. We can just focus on how to help the user set up their reservation. As you become more familiar with patterns and how to apply them,
>
> **[1:32](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/why-are-design-patterns-useful?u=76281980&t=92)** you'll also be able to work faster and come to faster design solutions. The third reason is that patterns speed up development. If you're working with a design pattern library that has been componentized, it's much easier to use patterns that have been built, so engineers can easily pick up the code and use it. Even if you don't have components, there are code libraries for engineers, and they can use an off-the-shelf version of the pattern to implement easily. Sometimes, designers find the idea behind patterns limiting or restrictive. I find the opposite to be true. Patterns are great for solving easy problems, allowing us to think more about challenging design problems. Another thing to note is that design patterns are not a substitute for design. Rather, they're helpful foundational building blocks. Just because you use patterns doesn't mean that your design will be good, or that you're solving the right design problems. For example, we can create a form based on patterns, but we can't ensure that we're collecting the right information from our user. We will always need to apply [Design Thinking](../../Skills/Software%20Development/Design%20Thinking.md) to any design we approach, including designing with patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (2), [Design Thinking](../../Skills/Software%20Development/Design%20Thinking.md) (1)
> **CLI Commands:** find (2), make (1)
> **Analogies:** for example (2)
> **Prerequisites:** set up (1)
> **Speakers:** - design (1)

#### [Design pattern library vs. style guides](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/design-pattern-library-vs-style-guides?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/design-pattern-library-vs-style-guides?u=76281980&t=0)** - [Instructor] Let's talk about the difference between design pattern libraries and style guides. Design pattern libraries focus on the interactions of user interface elements, whereas style guides focus on the branding aspect of the design. Style guides are primarily focused on the brand, including logo assets, color values, writing guidelines for voice and tone, and directives on how to use photography. The focus of a style guide is the expression of the brand through all touchpoints, including advertising, letterhead, and how the brand is expressed through the web and mobile presence. Here's an example of a brand style guide from Spotify. You can see in these guidelines that there's an emphasis on logo usage and color palettes. This particular guide doesn't include any [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md). The primary focus behind design patterns is to establish consistency in interaction. As I mentioned previously, the user interface should be usable, and design patterns communicate how and when a pattern should be used with the goal of achieving a consistent and usable experience. Here's an example of a design pattern library from the United States [Web Design](../../Skills/Web%20Development/Web%20Design.md) System. These guidelines focus on what the pattern is, when to use it, and when to consider something else in the usage section. This library has also been componentized so it includes code snippets as well. Since the user interface is a reflection of the brand through style of interaction, animations, [Typography](../../Skills/Data%20Science/Typography.md) and color, it's not uncommon to see style guides combined
>
> **[1:33](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/design-pattern-library-vs-style-guides?u=76281980&t=93)** with design pattern libraries. Let's look at an example of a guide that contains both design libraries and brand guidelines. [Atlassian](../../Glossary/Service/Atlassian.md) does this well. The brand guidelines are sectioned off, and the product guidelines include the design patterns or components with detail on how the patterns are used in all their interaction states. The visual expression of a design pattern is a reflection of the brand. Style guides and design patterns can work in conjunction, but design patterns focus on the interaction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (6), [Web Design](../../Skills/Web%20Development/Web%20Design.md) (1), [Typography](../../Skills/Data%20Science/Typography.md) (1), [Atlassian](../../Glossary/Service/Atlassian.md) (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [When to break a pattern](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/when-to-break-a-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/when-to-break-a-pattern?u=76281980&t=0)** - [Instructor] Patterns are generally thought of as guidelines, meaning that as a UX Designer, you'll always want to use your best judgment on when to apply a pattern and how to do so. If the pattern satisfies your use case, then it's probably a good idea to go ahead and use it. However, [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) are only intended to cover about 80% of use cases. For simple [Forms](../../Skills/Web%20Development/Forms.md), or for simple flows, you'll likely find what you need using design patterns. However, there are times when the design pattern in its default state may not work for your use case. We usually refer to these situations as one-offs. One-offs are solutions in which a pattern doesn't quite work in its typical state, and you either have to break the pattern, or create a different design. One-off solutions are highly contextual to your design project, but here's a couple of situations that I've encountered that require either breaking a pattern, or creating a one-off approach. The first is technical constraints. Sometimes, there's technical constraints that simply can't accommodate the experience you want. As designers, we're not experts in how the code is structured, so we may not be able to get exactly what we want. The second are patterns that lead to a watered down experience. Sometimes when using patterns, the experience might not be as compelling. It'll be usable, and it'll get the job done, but it may not just be as interesting to use. Let me offer a personal example. I worked on a project where radio button was the most straightforward option,
>
> **[1:32](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/when-to-break-a-pattern?u=76281980&t=92)** it just didn't look as good. I wanted to show the item as an image, and allow the user to select the item directly. The functionality was still a mutually exclusive selection, but my organization didn't have a pattern for this type of use case. I went off-pattern to accommodate a use case that I felt was important enough to merit deviating from the standard pattern. Going off-pattern is a designer's personal judgment. If you do decide to go off-pattern, make sure that you aren't reinventing common paradigms that may frustrate users. You can usability test your design just to make sure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Anti patterns or dark patterns](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/anti-patterns-or-dark-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/anti-patterns-or-dark-patterns?u=76281980&t=0)** - [Instructor] Design is a powerful mechanism to influence and encourage user behavior. While [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) encourage usable and consistent [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md), dark patterns use deceptive practices to influence behavior. In fact, this practice has recently gained some attention in the United States, with the proposed legislative bill encouraging tech companies to have their own review boards to ensure user interfaces aren't manipulative or intending to deceive consumers. The New York Times also wrote an article about dark patterns in [E-Commerce](../../Skills/Web%20Development/E-Commerce.md), shedding light on shady practices of falsifying data and using fake names, locations, and data to create a fear of missing out on a deal. As UX designers, we represent the voice of the user while meeting the needs of the business. Sometimes, there's tensions in this role. For example, you might be told that a requirement is to increase credit card sign-ups at checkout. There are multiple ways in which to approach the design for this scenario. Here is one approach. In this version, the credit card offer is clear, bold, and it's on the right-hand side of the checkout button, so it's clear that it's a selection. In this second example, the credit card offer is treated as a lightweight opt in with the checkout experience. This design makes signing up for credit cards seem easy and it might be overlooked in this checkout experience. While this is an egregious example, as designers, these are the type of decisions we influence when creating user experience. It's important that we consider the [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md)
>
> **[1:34](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/anti-patterns-or-dark-patterns?u=76281980&t=94)** of the design and the user's choices and options, especially for e-commerce scenarios or for a task as serious as signing up for a credit card. Our role is to find the right balance between the user and business need, and most times we can do that through continuous feedback and iteration with customers. Sometimes customers will not want to sign up for that credit card, and that's fine. It's better consumers have the choice rather than having 20% more sign-ups, which could lead to customer complaints on how they ended up with a credit card. We have to be careful to not use dark patterns and be mindful of how this impacts the business and the user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (2), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (2), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1), [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md) (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 2. Page Structure and Organization

[↑ Back to Table of Contents](#table-of-contents)

#### [Global navigation](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/global-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/global-navigation?u=76281980&t=0)** - [Instructor] Global navigation is a foundational element of any digital [user experience design](../../Skills/Web%20Development/User%20Experience%20Design%20(UED).md). The global navigation reflects how your experience is organized and helps establish a sense of place while defining its structure. If you want to learn more about structure, check out my [Interaction Design- Structure](Interaction%20Design-%20Structure.md) course. Global navigation typically has a few common elements, logo, tabs, menus, and a search bar. We'll delve into the details of each of these elements throughout the course. You can separate your navigation structure into primary, secondary, and tertiary if it makes sense for your design and use cases. Primary navigation is the main navigation that most users will be engaged with. Secondary navigation are for a subset of tasks that may not engage general visitors to the sight but cater to a selection of users or tasks. Tertiary navigation is for navigating within the content of the page. Let's walk through redesigning a global navigation for the Roux Academy website using the global navigation pattern. Now, there's a few issues with the way this navigation has been designed for this site. The first is I don't have a good way of glancing through the variety of programs being offered at this academy. As designed, I have to click into the tab to see the offerings. There also isn't any good way to search for things on this site in the global navigation. In approaching this redesign, the first thing I did was reorganize and rename each of these navigation items
>
> **[1:33](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/global-navigation?u=76281980&t=93)** into a primary and secondary navigation. I placed Calendars, Alumni, and the Student Login, and Search in the secondary navigation. This navigation bar is catering to alumni and current students. For the primary navigation, I added a hover state so when the user rolls over each navigation item, they can see what's in the menu. One thing to be mindful of when designing this type of interaction is how long the menu item stays open. If it opens and closes too quickly, this might make the menu unusable. For the Academics tab, I employed a mega menu pattern. This pattern is best for sites with large amounts of categories and selections. In this prototype, I created in Axure, I added the rollover state and a selected state interaction. This interaction matches what I was hoping to achieve. So I'll move on to the next part of the design. If you're creating a new pattern, or creating a pattern library, it's always a good idea to prototype the pattern to as close as the actual interaction as possible. We want to make sure all states are accounted for, and we can use the prototype for [Usability Testing](../../Skills/Web%20Development/Usability%20Testing.md) the patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [User experience design](../../Skills/Web%20Development/User%20Experience%20Design%20(UED).md) (1), [Usability Testing](../../Skills/Web%20Development/Usability%20Testing.md) (1)
> **CLI Commands:** make (2)
> **UI Navigation:** in the menu (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Cards](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/cards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/cards?u=76281980&t=0)** - [Tutor] Cards are a design pattern that work best for information summaries or for browsing behaviors. They can be interactive. For example, expanding on hover. Cards don't work as well for situations where most information is needed at a glance or if you're searching for something. Cards group and display information and lend themselves to a mobile-friendly experience. They can be clickable and have a selected state or have a call to action. The basic structure of a card is to display information. This can include images, text, or both. Cards typically have an image or some type of media to increase visual appeal and engagement. The first thing I want to do is create some card layouts for the different types of content. I've created layouts for images, events, student spotlights, media, and text-based content. Although we're using a standard card pattern we still have to use our own judgment and design skills to make sure that the pattern can be adjusted for our site's use case. In the case of Roux Academy's website I want the card to be clickable for image-type cards, and the image to be at the bottom so that the title is clear. I've designed this card so that the entire card is clickable and navigates the user to the corresponding page or story. My goal for this homepage is to highlight various aspects of the academy for prospective students. I prototyped this interaction for the cards to make sure it's working as I'd like it to.
>
> **[1:33](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/cards?u=76281980&t=93)** I added a hover state for the card itself to show that it's clickable when on desktop. So you can see when I hover over the card it shows this black outline. For the text card I have a call to action link. I wanted this link to be its own call to action, so on hover the text displays in uppercase for the desktop. Now these hover states won't display on mobile, so I've made the call to action text clear enough so it appears like a separate link for mobile users. The homepage is now using a card layout, and we've designed these cards the way we want them to look and interact. This card pattern is perfect for showing summaries of information for this website.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Speakers:** - [tutor] (1)

#### [Tabs](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/tabs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/tabs?u=76281980&t=0)** - [Instructor] Tabs are a familiar pattern for organizing information. They contain information using a navigation menu to hide and show elements, depending on which navigation item is selected. We touched on tabs briefly when designing the global navigation. But the rules for global navigation are slightly different. The tabs and menu items for global navigation govern the entire site, so you can link off into different pages in the site. When the tab pattern is used within the context of the page, the common paradigm is that the user will remain on the page. They usually aren't navigated anywhere else. Tabs control the visibility of elements within a container, so you can view the information corresponding to the tab selected. Tabs aren't the right pattern if the amount of information exceeds this tab container. For example, if you have 12 tabs on a container, that might be a signal that the information should be reorganized so that it goes either on separate pages or the tabs can be reduced to a lower number, like five or six. Tabs come in different visual styles, but the interaction and structure is the same. We can visually style tabs the way we want and here is examples of different versions of tabs with the same underlying interaction behavior. Let's put our tab pattern to work on the root website. For the Fine Arts program, I've created a page for it and I'm using the tab paradigm for each area of content. Similar to the global navigation menu,
>
> **[1:33](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/tabs?u=76281980&t=93)** I want these tabs to have a selected state, a hover state, and an off state. After designing this tab, I prototype the interaction to make sure all states are accounted for. I also set this up so that the content would display and show based on the tab that is being selected. Now let's go through this flow. I select the Fine Arts program from the Academics mega menu, and on load, the Academic navigation item is selected in the global navigation. And now I see the page I created for the Fine Arts program, with the fully functional tabs. The tab pattern helps us organize information within the page.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), similar to (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Side navigation](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/side-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/side-navigation?u=76281980&t=0)** - [Instructor] Let's examine the side navigation pattern, or vertical tab pattern, to help us further organize our site. Side navigation is similar to the tab pattern in that it's used for organizing information on a page and uses a navigation menu to hide and show elements. The side navigation pattern works well when you have a lot of content on the site and you want to further organize within the existing navigation. This pattern is prevalent on sites with a lot of content. For example, you might see this pattern when using help documentation. Here's an example from Visual Studio Code. You can see the side navigation on the left side, and when you click into each top level, there's another layer below. The side navigation pattern can work together with the tab pattern, but there's some hierarchical considerations to take into account. Side navigation can have multiple levels of hierarchy, including a top level and a level below. It's not recommended to go beyond two or three levels, as it becomes difficult to find where you are. Let's take a look at how I've used this pattern on the Roux website. In the Fine Arts Program area, I have more content to organize within a tab structure for the Courses area. For this design, I opted for two levels of hierarchy under each section. In my example, I have Education, Curriculum, and Course Catalog as the top sections. In my case, I've made the sections selectable, but they don't have to be.
>
> **[1:32](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/side-navigation?u=76281980&t=92)** This was a personal design choice. Here's the prototype of the interaction. One of the key elements to this design pattern is that when the item is selected, the page or section should indicate what's been selected. In my example, I've treated the navigation as links, but I've also put a section heading on the page to reinforce the selection so it's clear what section we're reading about. Side navigation is a good pattern if you have a lot of content you want to organize on the page but you have more tabs.

> [!info]- Semantic Content
>
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** find (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Accordions](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/accordions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/accordions?u=76281980&t=0)** - [Instructor] The accordion pattern reveals content through progressive disclosure. The selected panel exposes content hidden from view. The accordion pattern works well for situations where you have a lot of content to display and you don't want to show it all at once. This could be a good pattern to utilize if you have limited space and the information can be categorized into discreet areas. One of the questions to ask yourself when using this pattern, is whether or not, the hidden content should be hidden by default. There should be some thought put into why you're hiding content and what content you're choosing to show by default. Since the user has to take an extra action to open the panel, we don't want to hide content they might find useful at the outset. The accordion pattern has a couple of different interaction variations. Panels can be opened simultaneously or they can open one at a time. By default, panels are usually in a collapsed state. For situations where accordions are used for content, you may want to allow the panels to open simultaneously, if there isn't a need for the user to focus on one panel at a time. Accordion patterns rely on some visual cues to make it clear that the panel is expandable. Sometimes, this is a plus sign and when the user opens the panel, it toggles to a minus sign. The icon has two states to reinforce which state the user is looking at. For the Real Academy website, I've opted for an arrow icon that rotates when the user selects the panel. It's common to have the entire panel clickable
>
> **[1:34](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/accordions?u=76281980&t=94)** including the arrow icon. Here's my prototype of this interaction. Sometimes the icon is on the right. It's a personal preference on where you decide to put it. I prefer it on the left. For this use case, I wanted the accordion pattern to be used in the course catalog area because this is an overview of all the classes per term. This is a lot of information to display at the outset, so I wanted to show the course name by default on the panel and if the user wants to read about the course details, they can select the panel to open it. The accordion pattern is very useful for organizing information for the user.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** open the (1), select the (1)
> **Speakers:** - [instructor] (1)


### 3. Form and Data Controls

[↑ Back to Table of Contents](#table-of-contents)

#### [Fitts's law, grouping, and cognitive load](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/fitts-s-law-grouping-and-cognitive-load?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/fitts-s-law-grouping-and-cognitive-load?u=76281980&t=0)** - There's some foundational concepts in UX that are rooted in psychology. The first is Fitts's Law. Fitts's Law is the psychological principle behind how long it takes your hand to travel to an object, and how the size of the target influences that time frame. Let's take a look at what that means. In this very simplified example, if you were trying to use your mouse to travel from the bottom right corner and click on one of these squares, you'll find that it's more difficult to click on the smaller object because of its small size and how far it is from where your mouse was. The larger object would be easier to click, because it's bigger and it's closer to where your cursor was. We take this principle into consideration when we design interfaces, because we need to ensure our targets our big enough for users to interact with while reducing errors. A small example of this is using a primary button for stronger calls to action while using a link for secondary actions. In this call-to-action Sign In, when we treat it as a link, it's a much more difficult target to click on in comparison to the button. Another fundamental psychological concept that we take into account when designing interfaces is grouping. Grouping is rooted from Gestalt Principles of Proximity, which describe how objects near each other appear related. Grouped elements in interface design help the user identify where things are based on the groupings. For example, when you use a document editing program like [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) or [Google](../../Glossary/Service/Google.md) Docs, you'll see the actions grouped
>
> **[1:34](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/fitts-s-law-grouping-and-cognitive-load?u=76281980&t=94)** across the top. [Dashboards](../../Skills/Data%20Science/Dashboards.md) are another clear example of the grouping principle at work. Areas of the interface are sectioned off into related grouped information. Grouping makes it easier for users to look for the information when it's been organized and grouped into areas that map to their understanding. Another important concept rooted in educational psychology is cognitive load. Cognitive load refers to the mental energy used on how we process information and store it in our memory. We want to create experiences which reduce the amount of mental energy needed to complete tasks. If you've ever had the feeling of being overwhelmed by a website, either because the design was confusing or the task was daunting, you've likely experienced cognitive load. Typically, we can avoid overwhelming our users by simplifying the experience. [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) are helpful in reducing cognitive load, since we're presenting familiar paradigms to the user and they don't have to use their mental energy to use something like a dropdown. Creating tasks into smaller sub tasks also help with simplification and reducing cognitive load. When organizing data and [Forms](../../Skills/Web%20Development/Forms.md), we have to take these principles into account to create a simple experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Google](../../Glossary/Service/Google.md) (1), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **UI Navigation:** click on (3), dropdown (1)
> **CLI Commands:** find (1)
> **Definitions:** refers to (1)
> **Analogies:** for example (1)
> **Speakers:** - there (1)

#### [Text input](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/text-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/text-input?u=76281980&t=0)** - [Instructor] Text inputs are ubiquitous on the internet, and if you've ever encountered a form, you've encountered a text input. Designing form elements require taking some of the smallest details into consideration to create a good form experience. Generally speaking, people don't like filling out [Forms](../../Skills/Web%20Development/Forms.md) and oftentimes will drop out of the form if it's too long or the data being collected isn't clear. Text inputs, or text fields, are a single-input form that allows users to enter data. They don't work as well for situations in which a user is better off selecting from a list of options rather than entering information directly. Text inputs have four key states: the default state, in which no data has been entered, the active state, in which a cursor has entered the field, and an error state. There is also a disabled state, but that's often used on a case-by-case basis. The default state is typically an empty field but sometimes has placeholder text. Placeholder text can sometimes cause issues if it's the only method of communicating guidance. For example, once the user starts typing into the field, this clears the field and clears the directive helpful text. Active states for text inputs can highlight the field or give an indication that the field can be interacted with. Text inputs have a corresponding field label, and it's a best practice to place the label on top of a field, as it's much easier to read when filling out the form, but this will depend on your use case.
>
> **[1:34](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/text-input?u=76281980&t=94)** I would recommend that the form be adapted to a mobile layout so the fields display properly in mobile. Field labels should be short and easy to read, and you shouldn't remove the field label. Forms are much easier to scan in a single column rather than a two-column layout. In the case when an error does occur when the user is filling out information, it's convenient to have an inline validation to capture the error in [Real-Time](../../Skills/Database%20Management/Real-Time.md) before the user submits the form. Inline validation can occur when the user tabs out of the field or moves the mouse out of the field, or in real-time as the user is typing. Error messages should be contextual to the field. Sometimes the messages are above the field, under the field label, or below the field. Let's take a look at how we put some of this knowledge into practice with our Roux Academy website. After designing some of the website, I'm now designing the application flow. The first part of the application is to either create an account or to log back into an account that was already created. I've created an account sign-up screen in which the user either has to create an account or sign in. I've accounted for the default state, the active state, and the error state for the text inputs. I wanted to have a real-time validation for the Email field, and here's what that looks like when I missed information in that field. When the user has entered their cursor into the field and tabs out or places their mouse in a different field, they get an error message for that field. Text inputs are commonly used patterns for forms and applications, so we want to ensure
>
> **[3:09](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/text-input?u=76281980&t=189)** our users can get through the form without issue.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (3), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (3), cursor (2)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Checkboxes, radio buttons, and dropdowns](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/checkboxes-radio-buttons-and-dropdowns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/checkboxes-radio-buttons-and-dropdowns?u=76281980&t=0)** - [Instructor] Radio buttons, checkboxes, and drop-downs are common interface elements, but they're sometimes used incorrectly. Radio buttons are used when they should be checkboxes, and vice versa. Checkboxes are used as a multi-select option for scenarios where the user can select multiple items at a time. By default, they can be unselected, and there's no requirement for them to be selected, so you sometimes see them as opt-ins at the bottom of [Forms](../../Skills/Web%20Development/Forms.md). By comparison, radio buttons are used for a single selection use case, and by default, one should be selected. Radio buttons are useful for scenarios where you want the user to see a short list of options and you have a reasonable default option. Here's an example of checkboxes being used when it shouldn't be. This is a question on selecting your business type. You can only select one of these business types but the selection is presented as if you could select multiple types. In this scenario, checkboxes are not the correct interface element because you can only identify as one type of business. This question is intending to communicate a mutually-exclusive choice. This means that you can only select one at a time. While in principle this makes sense, we have to take into consideration the data we're presenting to make this mutually-exclusive choice clear. We could simply change these checkboxes to radio buttons. Radio buttons are an element
>
> **[1:31](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/checkboxes-radio-buttons-and-dropdowns?u=76281980&t=91)** that communicates a one-at-a-time choice, but then we run into another issue by making this into radio buttons. We now have rows of unselected radio buttons. It's not a best practice to leave radio buttons unselected, because once you select a radio button, you can't unselect it. Since we're asking the user to identify their business type, we don't want to select an option by default in case the user scans over the question and ends up filing the wrong business type. We want the user to actively select an answer. Another interface element that can communicate a one-at-a-time option is a drop-down. Drop-downs allow for a default selection that directs the user to select an option. Drop-downs are very useful for use cases in which a user has to select a single option and the default is neutral. In this case, we can have a default option to select the business type so we don't have to select one for them. Drop-downs don't work as well for scenarios in which the user needs to see the options to make a choice or if there are too many options in the drop-down. For drop-downs with a lot of values, we want to make sure the user can type in a letter to help find and select the option they're looking for. Looking at our application form for Roux Academy, I've added all three form elements: the drop-down for the user to select their program, radio buttons to select their term, and checkboxes for how they heard about the program. Checkboxes, drop-downs, and radio buttons are key elements for form design.
>
> **[3:05](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/checkboxes-radio-buttons-and-dropdowns?u=76281980&t=185)** It's important to know when to use the right element for the right situation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (2), means that (1)
> **UI Navigation:** select the (2)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Tooltips and popovers](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/tooltips-and-popovers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/tooltips-and-popovers?u=76281980&t=0)** - [Instructor] Tooltips are small, helpful lines of text that provide guidance on an action, or more information to describe an element. They act as in-line help, and provide additional contextual information. Tooltips appear in a small pop-up that's activated by hovering over an icon, a field, or sometimes a link. If you need more information that needs to be visible, Tooltips may not be the right pattern. They're intended for very concise information, with no more than three lines of text. There's no standard approach to where Tooltips appear. Sometimes they're above, below, or next to the element. You just want to be mindful of whether or not it's blocking something important while it's in an open state. When Tooltips are activated on hover, they usually don't stay open long enough to have any buttons or links inside. So, it's a best practice to only have text in Tooltips when activated on hover. Tooltips are similar to popovers, another element that offers contextual information to the element. However, popovers are usually activated on click rather than hover. Because they're activated on click, popovers can be used when you might need more information exposed. They can contain buttons, images, or links for users to interact with. You may also need a close icon if it works for your use case. Although these elements are similar, the important distinction is whether it's activated on hover or click. For some use cases, you may only want to activate something on click.
>
> **[1:35](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/tooltips-and-popovers?u=76281980&t=95)** For [Forms](../../Skills/Web%20Development/Forms.md) that have a lot of fields, or using language that users might not understand, I find it best to use a hover interaction if placing Tooltips within form fields. This simplifies the experience, so the users don't have to click on everything to find more information, they can simply hover. For in-line help that would benefit from supplementary images and text, I find that click interactions work best, so the users can have a moment to read and absorb the information. For the Roux Academy website, I've added some help icons on some of the fields in the application to provide extra contextual information. I wanted to supplement some of these questions with Tooltips to give more clarity on what types of information is required. Tooltips provide extra help for users without taking up too much space on the interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **CLI Commands:** find (3)
> **UI Navigation:** click on (1)
> **Analogies:** similar to (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Buttons](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/buttons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/buttons?u=76281980&t=0)** - [Instructor] Buttons are used to trigger an action. Buttons are a standard interface element for submitting [Forms](../../Skills/Web%20Development/Forms.md), logging out or downloading items. They can be used any time you have an action you want the user to take. Buttons have different states. Default, hover, active, focus and sometimes disabled state. When buttons are grouped with other buttons, typically there's a primary and a secondary button. Primary buttons are visually different to indicate that it's the main action. They can be either on the right or the left, depending on your preference. I tend to prefer having the primary call to action on the right. Primary buttons are reserved, and usually there's only one primary on each page so it draws the user's attention to the action. If you have a scenario in which you have multiple buttons, and you have no real primary action favored, it's best to treat them all as secondary buttons, rather than all of them as primary. Buttons can also have icons to further reinforce how the button is used. The icon should support the button label if a button label is present. Buttons can also have a drop down. These are sometimes called convo buttons or split buttons. These types of buttons are used for situations when there's a main call to action, but there are other options the user can select from. Concise labeling on buttons is a must. Button text must be clear on what action the user will be taking
>
> **[1:33](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/buttons?u=76281980&t=93)** to make sure they're able to perform the correct action. Taking a look at the Roux Academy website, I placed a button group on the bottom of the application page so the user can save or cancel the application. I've included a default, hover and focus state, which you can see when I tab to the button. In this case, next is a primary call to action, so I placed it on the right. I used a gray button for the secondary call to action to reduce the visual weight of the button, and used a link for canceling out of the flow. Clicking on back allows us to go back in the application. Keep in mind that buttons indicate a primary action, so you'll want to use them with care.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Best Practices:** it's best to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Links and breadcrumbs](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/links-and-breadcrumbs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/links-and-breadcrumbs?u=76281980&t=0)** - Links are a pattern used for navigating a user from one area to another. They can also be used as a lower-priority call-to-action. Links, or hyperlinks are a fairly standard design element and most users are familiar with how to use them. If you need a stronger call-to-action, it's best to use a button. Links needs to be clearly labeled. Since the element is embedded within content, the label sets expectations for the user on where they're going to go when they select it. The navigation should also be clear when they land in their new destination. Links should be front-loaded with the action so when the user reads the link, the first thing they see is the most important information. This helps when users are quickly scanning content. When links are used to calls to action, typically, they're the secondary or tertiary because they have a lighter visual footprint. For example, if used with a primary button it can be the secondary cancel link. It can also be used as a call-to-action. For example, to update information like a lost username or password. When contextually used in a sentence, it can be a call-to-action if using the right language. Within blocks of text, links are use contextually, without call-to-action type language. In this example, the link is in a block of content and the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) alumni is linked to the alumni page. We don't have to say, view alumni, which we would do if this was a standalone call-to-action.
>
> **[1:34](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/links-and-breadcrumbs?u=76281980&t=94)** We can just give it clear language to set expectations on where the user might go if they click on it. When links are used as breadcrumbs, it's typically documented as its own specific pattern because it may have specific interactions. Breadcrumbs can have different levels of hierarchy but generally they reflect the page structure as it's mapped from the primary navigation. Breadcrumbs are useful in reinforcing the site's information architecture and showing users where they are in the site. Depending on the use case, the interaction pattern can vary. For simple websites with up to three layers of hierarchy, the breadcrumbs can be fairly straightforward. Each link represents the destination of where the user came from. For sites that have deeper hierarchies, breadcrumbs can truncate after a certain amount of layers of hierarchy. For example, more than three. Breadcrumbs can also truncate if the text is too long but it's not usually required for less hierarchical sites. For the Roux Academy website, I have a basic breadcrumb structure since our hierarchy isn't very deep. When the user clicks on one of these cards, they're navigated to the feature. In this case, if they select the Roux Art Mag feature, they'll see the navigation structure and navigate to either Home or to the Roux Art Mag. Links are a well-known interface element for navigating users from place to place. It's important the labels are considered when using this pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **UI Navigation:** click on (1), select the (1), navigate to (1)
> **Analogies:** for example (3)
> **Best Practices:** it's best to (1)
> **Speakers:** - links (1)

#### [Toggle switches](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/toggle-switches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/toggle-switches?u=76281980&t=0)** - [Instructor] Toggle switches are interface elements that offer binary options, showing the selected state is On and the unselected state is Off. Toggles can also have a disabled state in which they are inactive. This element is also referred to as a switch because it's derived from a light-switch interaction of turning something on and off. Toggles have an immediate action associated with them. When a toggle button switch is applied, the results are applied in Real Time and don't require a form submission or any other action. Toggles are sometimes grouped into a layout in which each line item has a toggle element or a single toggle can control an entire section. To reinforce the instantaneous effect the toggle switch, it should be clear to the user, the switch has been enabled or not, through clear labels. Toggles are similar to Checkboxes, in that they are both binary choices. If you're wondering if you should use a checkbox or toggle, consider whether or not the requirement is to have an immediate action take place when the user selects either binary option. If the answer is "Yes", then the toggle switch is the correct element. For the Roux website, I've created a profile for the student and used a toggle switch for users to control which personal information they want to show up in the Student Directory. The toggle switch works for my use case. Consider the toggle design pattern when you need to take immediate effect and don't require a form submission.

> [!info]- Semantic Content
>
> **UI Navigation:** toggle (10), checkbox (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Modals](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/modals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/modals?u=76281980&t=0)** - [Instructor] Modals are [Windows](../../Glossary/Service/Windows.md) that focus the user's attention. They're intended to keep users in the context of the task at hand rather than pulling them out of the experience. Modals can be used for onboarding, exiting, continuing tasks, or for creating a task. When modals are activated, the user can only interact with the modal window and must take an action to dismiss the modal. As a result of its highly focused behavior, modals should be used sparingly. They're not as useful for a confirmation, system alert, or for messages that don't require an interruption. A better pattern would be a system message for these use cases. Exceptions to this would be if you're exiting a flow and you want to display a confirmation before the user leaves. Sometimes you'll see this pattern on [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) websites. When modals are active, they typically have an opaque overlay over the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the interface to communicate to the user that they can't interact with the background. Usually, you'll need to close the modal manually or take an action. When used for onboarding, modals will sometimes have text or include images to reinforce how to use the product. Modals are sometimes used when exiting flows or prompting the user to save something. When used within a task flow, modals are sometimes used to either edit data or to create something new, for example, if you're in a dashboard and you want to add a new filter. In this use case, there might be too many filters
>
> **[1:34](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/modals?u=76281980&t=94)** to show inline and the best way to display the filters are in a modal rather than having them leave the page. Modals are sometimes used in a flow of multi-step tasks. Modal flows are best for subtasks that are within a larger experience. For example, if you're on an e-commerce site and you want to simultaneously add an item to a wishlist while creating a wishlist, this might be presented in a modal to keep the users in context of the product page while allowing them to add and create a wishlist. Modals are also used in combination with progress indicator patterns if there's a process that is page-level and needs to be communicated to the user. The size of modals depend on the use case but can be small or large depending on the need. I'm using a modal interaction for the Roux website event. When the user clicks on the event, they get more information on it. This also populates an opaque layer and keeps the users in context to the page. This works for my design. Modals are a great pattern for when you want to keep your users in context but also draw their attention to the task at hand. Just make sure you use them sparingly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 4. Indicating Progress and Feedback

[↑ Back to Table of Contents](#table-of-contents)

#### [Feedback in UX](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/feedback-in-ux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/feedback-in-ux?u=76281980&t=0)** - [Presenter] One of the most important mechanisms we employ in UX is feedback. Feedback is the system's response to the user's action. If you've ever submitted a form and not received a response, you've likely felt confused on whether the system worked and whether you had to do it again. Feedback gives users the confidence that their action was acknowledged by the system. Feedback is incorporated into everything we design, from how buttons behave on click to receiving an email confirmation on your new account signup. Jacob Nielsen, a prominent usability expert, has detailed three crucial time periods when it comes to time delay responses, less than a second, one second, and 10 seconds. Less than a second is a short enough delay that the user doesn't require any special indication of an activity that has occurred. For example, if you click on a link and you're immediately navigated to a page, this happens fast enough for you to continue your task. At one second, users will notice the delay. In the same example, if you click on a link and there's a one second delay, you'll probably feel like it was too slow. In order to reduce the perception of the time delay, we can show progress indicators so it doesn't feel as long. You may have even seen a loading animation in these scenarios. At 10 seconds, users will want to do something else while waiting for the task to finish. If you clicked on a link and had to wait 10 seconds, you'd probably give up on that website. For a task that can take up to 10 seconds,
>
> **[1:35](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/feedback-in-ux?u=76281980&t=95)** showing a progress bar and informing the user that an action is taking place will prevent them from navigating away or restarting their computer. Delivering a good feedback experience isn't limited to a single interface element. Often, it's a series of interactions that make up the experience. If you consider making a purchase of a T-shirt from a website, there's multiple ways in which we receive feedback on actions we've taken. For example, if I type "T-shirt" into the search box, I'll see an auto-complete with the term "T-shirt." If I click on the T-shirt, I can see a transition pattern, which dims out the page and loads the shirts. And when I select the color for the T-shirt, the interface updates again. These are all examples of feedback. Every time the users takes an action, the system should [react](../../Skills/Web%20Development/React.js.md) to the input. In every part of what we design, we always have to consider when it's appropriate to give feedback and which patterns are the correct patterns to reinforce the feedback.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (1)
> **UI Navigation:** click on (3), select the (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### [System messaging](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/system-messaging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/system-messaging?u=76281980&t=0)** - [Instructor] System messages are a messaging pattern to communicate system events that have taken place. Usually as banner at the top of the page. Sometimes this pattern is also called an alert or a notification pattern. This messaging pattern is at the global page level, so it reflects whatever is happening on the page. This pattern doesn't work as well for situations in which the message is more effective if it's contextual, rather than at the global page level. Usually these messages are in a banner style because of the global nature of the message. Global messages go at the top of the page to ensure the user sees it. System messages are usually in the form of confirmations or success messages, errors, warnings or general updates and informational messages. Confirmation or success messages are used to confirm to the user that an action has taken place. Sometimes you might see this message after you've added something to your shopping cart, or after you've submitted a form. This pattern is used to give feedback, and make sure the user is aware that the system has acknowledged their action. Warning messages are shown in situations that don't rise to the level of an error, and the user doesn't have to take an action yet, but probably should. You might see this type of message if you need to update your credit card information because it's expiring soon. You can still order what you need, but you'll have to take an action soon. General updates are generic messages that don't fall into either of the other categories. An example might be a system maintenance that's upcoming,
>
> **[1:34](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/system-messaging?u=76281980&t=94)** or an update to a terms of service. No action is required of the user, but they'll need to be informed. Errors are used for page level errors. Global error messages can work in conjunction with page level inline errors. For example, you can have both an inline error and a global error communicating the same information. System level error messages are displayed when a form has been submitted for example, and not all required fields have been completed. System level messages can have calls to action to help the user fix the error or address the warning. If using a banner style pattern, actions can be in the form of a link or a button. Most importantly, the messages have to be clearly written so the user knows what action they need to take, and understand the severity of the action itself. The message can be timed to clear within seconds, like a self-dismissing message. Or they can be pervasive, and require the user to dismiss the message. Banner style messages are usually only one at a time, so priority must be determined if there are multiple issues. They don't usually stack on each other. For the Roux Academy website I created a tour sign up form, and when the user submits the form they see a confirmation message. This pattern works well for this use case. System messages are a good way of providing feedback to the user for a wide variety of system issues and confirmations.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **Warnings:** warning (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Progress indicators](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/progress-indicators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/progress-indicators?u=76281980&t=0)** - [Instructor] Progress indicators show progression and steps in a user flow. The progress indicator informs the user of how many steps they have left and which step they're currently on. Progress indicators are best for continuous flow, so users can see where they are in the process. Creating smaller sub-tests within a larger flow creates a manageable experience for the user. Generally speaking, progress indicators have three states communicated to the user, the current step, the unvisited step, and the previously visited steps. The steps in the flow typically range between three and five. For steps longer than five, you might want to take a look at the information grouping and see if there's opportunities to condense the information. Progress indicators differ in how users can interact with the indicator itself. In some cases, the user can interact directly with the progress meter by clicking on it to revisit previous steps. Usually, there's buttons at the bottom of the form to match up to the progress indicator. So if the progress meter isn't clickable, the user can still navigate to the previous state using the buttons. Whether or not you allow the user to interact with the progress meter depends on the use cases for your design. Moving forward in the flow might be dependent on whether or not they've saved their previous and current information. The content labels for each step should be clear and concise on what each step entails. It signals whether or not the user is ready to fill up the next step or save for later. Looking at the Roux website, I added a progress meter to the application flow
>
> **[1:33](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/progress-indicators?u=76281980&t=93)** which I broke out into three different areas, background information, program information, and essay question. I also created the states for the progress meter and here's the final application of how that appears. Progress indicators are good pattern for variety of use cases in which the user has multiple steps and needs to know where they are in the process.

> [!info]- Semantic Content
>
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)

#### [Progress meters](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/progress-meters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/progress-meters?u=76281980&t=0)** - [Instructor] Progress meters are a type of progress indicator that provides feedback by visualizing the completion of a process. Sometimes, these are also referred to as a progress bar. Progress meters visualize completion by showing a bar filling up. They can be used for both determinate and indeterminate processes. If used for determinate use cases, adding descriptive process data is helpful in giving more information on how far along the process is. For example, you can show the numeric percentage completed as the meter is filling up. If the process said page level, these are sometimes displayed in a modal over the page or within the page itself. The meter is displayed in a modal for use cases in which the user can't engage with the page level content until the process has been completed. Sometimes, progress meters can display simultaneously if there are multiple processes occurring. An example of this type of scenario is a multiple file upload. Users can upload multiple files and stay informed on the status of each file uploading in real time. The progress meter in this case is contextual to the element that's processing. Sometimes progress meters have an option to cancel the process. It might be a good idea to add a cancel button if the process will take a long time, so the user can have the option to do it later. If using a progress meter for an indeterminate process, there is less detailed information you can give to the user. You may want to explore a generic animation, rather than showing progress of something filling up. Progress meters are good pattern
>
> **[1:35](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/progress-meters?u=76281980&t=95)** when you need to visualize the process of completion for a longer period of time.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Progress indicators: Spinners](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/progress-indicators-spinners?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/progress-indicators-spinners?u=76281980&t=0)** - [Instructor] Spinners are used for showing an indeterminate process, or for a process that doesn't have a clear end time. Spinners don't show specific information for when a process will be completed, rather they provide feedback to the user that something is happening. Spinners are typically used for loading states and are most useful if the information takes longer than a second, otherwise the time period is too short to display a spinner. Typically, if something's going to take around two to three seconds, you may want to show a spinner as it might be perceived as waiting too long without some sort of system feedback. Spinners are sometimes used inline, or at page level. When used inline, they're typically used on buttons if the button has triggered the action. The button usually has a state change to show that it's committing the action. They can also be used inline if an action was taken in an area of the page so the user can see the feedback. In situations in which there's multiple items loading on different parts of the page, multiple spinners can be displayed in each location. This scenario can occur with experiences loading different types of data, [Dashboards](../../Skills/Data%20Science/Dashboards.md), for example. For page level processes, spinners can display in a modal overlay when waiting for the entire page to load, or within the page itself. Spinners are sometimes used in conjunction with other patterns to show that something is loading. It may be paired with wireframe-style graphics in which you'll see the page load with placeholder images until the content loads,
>
> **[1:33](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/progress-indicators-spinners?u=76281980&t=93)** or the content will be grayed out while the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the page is still loading. Spinners are a common pattern for indeterminate processes and useful in a lot of different scenarios.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 5. Search and Filtering

[↑ Back to Table of Contents](#table-of-contents)

#### [Search input](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/search-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/search-input?u=76281980&t=0)** - [Narrator] Designing for search can be a complex undertaking. Although the user interacts with a simple text input, there are various ways on how users seek information. There are a couple basic concepts to consider when designing for search. Searching and browsing. Searching refers to users typing in queries directly into the search box. The user has a specific goal in mind to find what they want. For example, if you're looking for a specific book in the library catalog and type the name of the book into the search, this is a search activity. Browsing refers to looking for information in the navigation or through categories in the sight to find what you need. Using the same library catalog example, instead of directly typing the name of the book in the search box, you might look in the non-fiction section and view the best sellers collection to browse books. Both browsing and searching behaviors should be supported since users have different goals in mind when they come to your sight looking for something. You can look through search logs and talk to users on how they look for information to get a better understanding of how they find things. The search input itself allows for enough characters to enter a search query. Sometimes the search icon is stand alone and when you select it a search box is exposed and activated, or sometimes it's an open field displayed with or without a search button. Typically the search is submitted by pressing the enter or return key. Placeholder text gives context on how users can search on your site. For example, in [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning search,
>
> **[1:34](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/search-input?u=76281980&t=94)** there's placeholder text that allows you to search for skills, subjects, or software. This provides guidance on how to find information. A common search pattern is to scope the search to a category. Scoping the search restricts the search. This pattern is best for scenarios when users understand how their item is categorized. For example, if you're on an ecommerce site looking for a teapot, you might change the category to kitchen rather than searching through the entire selection of categories. This allows the user to hone in on that specific category to find what they need. The input state for search works like a standard input field. However, it has an activated state in which the search term has been entered. Once the term has been entered, the user usually has to manually clear the term. You can clear a search term by selecting an X icon or sometimes there's a link to clear. When the search has been submitted, results are returned. Even if the results have been returned, users still have to clear the term or sometimes it displays as a history and a dropdown below rather than the field itself. The search term helps users remember which term they used. Search is a commonly understood paradigm but requires some thought on how to best apply the right search patterns for your use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** find (5)
> **Definitions:** refers to (2), is a  (2)
> **Analogies:** for example (3)
> **UI Navigation:** dropdown (1)
> **Speakers:** - [narrator] (1)

#### [Autocomplete](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/autocomplete?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/autocomplete?u=76281980&t=0)** - [Instructor] Autocomplete is a pattern used to assist users in finding the term for the item they're looking for in real time. Recognition is easier than recall when it comes to our memory, and this pattern reflects this idea. Autocomplete refers to the behavior of typing two to three characters and seeing a [Real-Time](../../Skills/Database%20Management/Real-Time.md) listing of results in the text input dropdown menu. The terms from the autocomplete are usually derived from the sites controlled vocabulary or the selected terminology that the site uses to describe their [products](../../Skills/Software%20Development/Microsoft%20Products.md) or services. For example, vehicle and car can both be common terms, but the site might use one term over the other. Both terms can be used in the search to make sure people find what they're looking for. The interaction details for this pattern can vary, but usually terms show up bolded or treated with a highlight in the dropdown below. This pattern saves the effort of typing terms into the search field, eliminating potential mistakes. When the term the user wants displays in the list, they can select the term which then shows up in the search field, and they can press Enter to submit the term. Autocomplete results can display terms within categories, and this is used in situations where the item might be categorized in multiple places. Autocomplete can also be a good place to surface items or to provide quick bits of information using personalization. For example, on a project that I was working on, I came up with a series of information snippets to display directly into autocomplete
>
> **[1:33](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/autocomplete?u=76281980&t=93)** for common search terms. Combined with personalization, autocomplete can be very helpful for users. A related concept to autocomplete is autosuggest. Autosuggest is similar to autocomplete in that they both show results as a user is typing, but the results are broader and not necessarily reflective of the underlying controlled vocabulary. Users may not notice this differentiation. From their perspective, both autosuggest and autocomplete saves them the effort of typing out terms. Autocomplete is a prevalent pattern, and it can be very helpful in aiding users to find what they need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **CLI Commands:** find (2), make (1)
> **UI Navigation:** dropdown (2), select the (1)
> **Definitions:** is a  (2), refers to (1)
> **Analogies:** for example (2), similar to (1)
> **Speakers:** - [instructor] (1)

#### [Search results](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/search-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/search-results?u=76281980&t=0)** - [Instructor] The goal of the search results page are to give the user enough clarity to determine if their search resulted in the information they were looking for. Search results pages have various layouts, but there's some standard [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) which include the following elements: the search term used, the number of results, sorting, and filtering. We'll talk more about filtering in a different video. Showing the search term helps the user understand why they're viewing the results. For example, if the search term entered was pants, you might get results with brand names that include the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) pants. This helps the user understand why they're seeing a result that isn't a pair of pants, but rather, the brand name including the work pants. The number of results helps the user decide if they need to further refine. If they aren't seeing what they need and there's hundreds of results returned, they may want to use an advanced search or think of another way to refine the results. Relevancy is an important factor in deciding if the search result matches the user's search intent. Relevancy is highly dependent on the specific use cases that you're designing for. For example, if you're searching the corporate internet looking for time-off information, you'll likely want the most recent published document. Last year's guidelines might be different than this year's. If you're searching for an article about the best vacations, you might want the most popular article. In some cases, your location dictates relevance. This is especially true if you want to order food online. When looking for a restaurant that delivers,
>
> **[1:34](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/search-results?u=76281980&t=94)** your results should reflect location. One of the easiest ways to give users the option to find which search result is relevant is by allowing them to sort their results. The options to sort should reflect the user's preferences and other options that you want to highlight, which may not be obvious to the user. Sorting helps the user refine the results by grouping them. For example, if you're looking for t-shirts on sale, you might sort your results by lowest price or by sale. Search results have key considerations based on which information you want the user to focus on. For content-rich sites, you may want to include [Metadata](../../Skills/Web%20Development/Metadata.md) about the content, like tags, and a snippet of the content to help users determine if this is the content they want. Search results have various layouts and require some experimentation on what might work for your use case. When designing search results, consider what relevance means for your use case to ensure you're highlighting what your users need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Analogies:** for example (3)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Filtering](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/filtering?u=76281980&t=0)** - [Instructor] Filters help narrow down information. When filters are used with search, they give users the ability to refine search results. When filters are applied in real time, this is sometimes referred to as live filtering. Filters represent descriptive properties of the item the user is searching for. For example, if you're searching for a fragrance, some of the attributes might include how people think about the scent, whether it smells floral or woodsy, what brand it is, or if it's a roll-on or a spray. Any of these attributes can be represented in a filter to help guide users into narrowing down their search. The type of filters varies by product experience. But typically, filters are displayed with a combination of check boxes, sliders, and radial buttons. The filters themselves are usually organized in an accordion-style pattern. Filters can either be on the left, right, or top of the search results. The layout is dictated by the amount of filters, visibility, and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). If more filters are added, then spacial constraints need to be taken into consideration. Filters laid out vertically can scale easier as filters are added. If filters are displayed in an accordion-panel, it's fairly standard to have a mix of open and closed panels. Which filters are opened are closed are dictated by common user activity. For example when shopping for t-shirts, size and color might be common filters so those could stay open by default.
>
> **[1:33](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/filtering?u=76281980&t=93)** Fabric weight however, may not be as common. So the default could be closed for that. When filters are represented as check boxes, there's no need for a submit button. In this use case, check boxes represent an action and the action takes place immediately. Sometimes when filters are engaged, the filter area is treated with an overlay indicating the user can't interact with them. More commonly, the results area has an opaque layer when the filters are engaged and the results dissolve in. For numeric range values, sliders can be used as a filter. Sometimes sliders are used for price ranges or to specify time ranges. Once filters are applied, the filters are sometimes displayed as tags. Tags are removal by clicking on the X, but they're intended to guide the user in seeing how their filters have been applied. The tags have an option to clear, and usually there's an option to clear all. Filters help users narrow down their results and are vital to a good search experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next Steps](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interaction-design-design-patterns-as-building-blocks/next-steps?u=76281980&t=0)** - [Instructor] Thanks for watching. You might find yourself working on an unfamiliar project and needing to ramp up on foundational [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) quickly. The techniques you've learned in this course for navigation, form and data controls, and communicating progress and feedback can be applied to creating sterling experiences that encourage usable and consistent [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). Download the handouts as a guide to help you with your next project. You can check out my other courses, [Interaction Design- Structure](Interaction%20Design-%20Structure.md) and [UX Foundations- Prototyping](../Web%20Development/UX%20Foundations-%20Prototyping.md) to learn more, relevant material. If you have any follow-up questions, feel free to post them on the Q&A on this course's page. I look forward to hearing your thoughts and questions. Also, feel free to follow me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) or Twitter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1), [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** find (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Diane Cronenwett](../../Instructors/Software%20Development/Diane%20Cronenwett.md)

## Path Context

### In [Exploring a Career in Interaction Design](../../Paths/Software%20Development/Learning%20Paths/Exploring%20a%20Career%20in%20Interaction%20Design.md)
← [Interaction Design- Flow](Interaction%20Design-%20Flow.md) | **8 of 9** | [Interaction Design- Projects and Platforms](Interaction%20Design-%20Projects%20and%20Platforms.md) →

## Appears In

- [Exploring a Career in Interaction Design](../../Paths/Software%20Development/Learning%20Paths/Exploring%20a%20Career%20in%20Interaction%20Design.md)

---

[↑ Back to top](#)