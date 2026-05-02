---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: designing-accessible-components-in-figma
url: "https://www.linkedin.com/learning/designing-accessible-components-in-figma"
duration_minutes: 71
duration: 1h 11m
level: Intermediate
updated: 11/18/2022
learners: 20386
skills:
  - Figma (Software)
  - Computer Accessibility
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFwb1J1h7dTIA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668634087377?e=2147483647&amp;v=beta&amp;t=zc0jEsWGPGCatR_URS6J0b1H1X_ubBn6p0I8imSzZQ0"
linkedin_topic: Web Development
learning_paths:
  - '[[Build for Digital Accessibility]]'
prev_courses:
  - '[[Accessibility and Inclusion with Figma]]'
next_courses:
  - '[[Accessible Layout for the Web]]'
path_nav: '[{"path":"Build for Digital Accessibility","position":5,"total":12,"prev":"Accessibility and Inclusion with Figma","next":"Accessible Layout for the Web"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/figma-software
  - skill/computer-accessibility
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Designing%20Accessible%20Components%20In%20Figma.md)

![Designing Accessible Components In Figma](https://media.licdn.com/dms/image/v2/C560DAQFwb1J1h7dTIA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668634087377?e=2147483647&amp;v=beta&amp;t=zc0jEsWGPGCatR_URS6J0b1H1X_ubBn6p0I8imSzZQ0)

# Designing Accessible Components In Figma

> From toggles to tabs, accessible components need to work across multiple devices and for a wide variety of users, including ones with disabilities. Good UX designs can help users navigate more comfortably and get more value out of apps and websites. In this course, expert Tetiana Gulei guides you through why accessibility matters and how you can design accessible components in Figma. Learn how to 

> [LinkedIn Learning](https://www.linkedin.com/learning/designing-accessible-components-in-figma) | 1h 11m | Intermediate | 20K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Why does accessibility matter in Figma?](#why-does-accessibility-matter-in-figma)
  - [What are accessible components?](#what-are-accessible-components)
- [**1. Accessible Components**](#1-accessible-components) (8 videos)
  - [Style your components](#style-your-components)
  - [Create your first component in Figma](#create-your-first-component-in-figma)
  - [Create accessible buttons](#create-accessible-buttons)
  - [Create accessible icons](#create-accessible-icons)
  - [Accessible radio buttons and checkboxes](#accessible-radio-buttons-and-checkboxes)
  - [Creating an accessible image card](#creating-an-accessible-image-card)
  - [Challenge: Create accessible input fields](#challenge-create-accessible-input-fields)
  - [Solution: Create accessible input fields](#solution-create-accessible-input-fields)
- [**2. Advanced Components**](#2-advanced-components) (6 videos)
  - [Accessible header menus](#accessible-header-menus)
  - [Accessible footers](#accessible-footers)
  - [Figma plugins for accessibility](#figma-plugins-for-accessibility)
  - [Create a simple web page with Figma components](#create-a-simple-web-page-with-figma-components)
  - [Challenge: Design a contact page](#challenge-design-a-contact-page)
  - [Solution: Design a contact page](#solution-design-a-contact-page)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continue designing accessible components](#continue-designing-accessible-components)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why does accessibility matter in Figma?](https://www.linkedin.com/learning/designing-accessible-components-in-figma/why-does-accessibility-matter-in-figma?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/why-does-accessibility-matter-in-figma?u=76281980&t=0)** - [Tetiana] Would you like to know how to create accessible components for web applications from scratch?
>
> **[0:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/why-does-accessibility-matter-in-figma?u=76281980&t=5)** You've come to the right place.
>
> **[0:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/why-does-accessibility-matter-in-figma?u=76281980&t=6)** With accessible components, you can make sure that your designs can be viewed and applied by every user, regardless of their physical or cognitive impairments.
>
> **[0:15](https://www.linkedin.com/learning/designing-accessible-components-in-figma/why-does-accessibility-matter-in-figma?u=76281980&t=15)** Hi, my name is Tetiana Gulei and I'm a UX designer with five years of design and [[Software Development]] experience.
>
> **[0:22](https://www.linkedin.com/learning/designing-accessible-components-in-figma/why-does-accessibility-matter-in-figma?u=76281980&t=22)** In this [[LinkedIn]] learning course, you'll discover the process of creating accessible components in [[Figma (Software)|Figma]], including buttons, image cards, a navigation menu bar, and many more.
>
> **[0:32](https://www.linkedin.com/learning/designing-accessible-components-in-figma/why-does-accessibility-matter-in-figma?u=76281980&t=32)** You'll also learn how to apply components in your design project to speed up your working process.
>
> **[0:38](https://www.linkedin.com/learning/designing-accessible-components-in-figma/why-does-accessibility-matter-in-figma?u=76281980&t=38)** If you're curious about accessibility and creating inclusive experiences, let's jump in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1), [[LinkedIn]] (1), [[Figma (Software)|Figma]] (1)
> **CLI Commands:** make (1)
> **Tools:** figma (1)
> **Speakers:** - [tetiana] (1)

#### [What are accessible components?](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=0)** - [Tetiana] Let's talk about accessible components.
>
> **[0:02](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=2)** Components are design elements that are reused across mobile and web interfaces.
>
> **[0:08](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=8)** When designed with accessibility in mind, they significantly simplify the user interaction and also improve [[User Experience (UX)|user experience]].
>
> **[0:16](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=16)** Think about the website that you recently visited.
>
> **[0:18](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=18)** Most likely it had a header menu with a few items that you could click on or some buttons that you could also interact with.
>
> **[0:24](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=24)** These are the examples of web components that we as users see every day, and as a designer, it is important to plan out your process ahead before you start designing accessible components.
>
> **[0:36](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=36)** A very common approach is to use Web Content Accessibility Guidelines which is an international standard used by designers, developers, and organizations to make their websites and other digital [[Microsoft Products|products]] accessible.
>
> **[0:50](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=50)** Today, we'll cover four main disabilities that are crucial while designing accessible components.
>
> **[0:55](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=55)** They are vision, hearing, mobility, and cognitive.
>
> **[1:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=60)** Vision is a disability that is relevant for a wide group of users.
>
> **[1:04](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=64)** To make your component accessible, make sure that you apply a specific contrast ratio defined by [[Web Accessibility]] Guidelines.
>
> **[1:12](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=72)** To differentiate your content, use some patterns instead of just simply relying on colors.
>
> **[1:17](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=77)** This could be text, visual elements, icons, or symbols.
>
> **[1:21](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=81)** Finally, your components should be perceived with assistive technologies, such as screen readers and magnifiers that are commonly used by this group of users.
>
> **[1:32](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=92)** Hearing is especially relevant for design components that emit sounds, so make sure that your components could function without hearing them.
>
> **[1:40](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=100)** As an example, you could just simply provide text alternatives, such as subtitles or captions, for the users who cannot really hear these components.
>
> **[1:49](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=109)** Mobility is especially relevant for users who cannot use the mouse to interact with your components.
>
> **[1:54](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=114)** Give them an alternative.
>
> **[1:56](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=116)** Make sure that your components can be accessed from keyboards or other assistive technologies, such as voice control software or physical switch controls.
>
> **[2:04](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=124)** Users with cognitive limitations have some issues with memory, learning, and attention.
>
> **[2:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=130)** As a designer, you could guide your users across the interface with some standard icon, symbols, or text.
>
> **[2:16](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=136)** Also, make sure that you avoid distractions so that the users could focus on their tasks and complete them with an ease.
>
> **[2:23](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=143)** We definitely did not cover all of the Web Accessibility Guidelines in this video and you also don't need to know them all, only the ones that are relevant for your accessible components and their functionality.
>
> **[2:34](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=154)** I still encourage you to check WCAG website for more inspiration and information about web accessibility.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Accessibility]] (3), [[User Experience (UX)|User experience]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (6)
> **Analogies:** such as (3)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** wcag (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [tetiana] (1)


### 1. Accessible Components

[↑ Back to Table of Contents](#table-of-contents)

#### [Style your components](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=0)** - [Instructor] You might want to work alongside me through this [[LinkedIn]] Learning course.
>
> **[0:04](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=4)** To simplify your learning journey, I've created a [[Figma (Software)|Figma]] file with color and textiles for you to apply to your accessible components.
>
> **[0:11](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=11)** In this way, you don't have to think about choosing the right color and font settings.
>
> **[0:16](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=16)** You can download the Figma file in the exercise files under this video.
>
> **[0:21](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=21)** To open the file in Figma, it is important that you have a Figma account and that you are logged in.
>
> **[0:26](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=26)** In your personal dashboard, click on import files, and select the earlier downloaded files from your folder.
>
> **[0:33](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=33)** It takes a few seconds for Figma to process your file.
>
> **[0:36](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=36)** When it's ready, you can click on Done.
>
> **[0:39](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=39)** To open the file, simply click twice on it.
>
> **[0:44](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=44)** And right here on the right side, you can see all text and color styles that we will later apply for our accessible components.
>
> **[0:52](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=52)** Let me quickly show you an example of how to apply text and color styles.
>
> **[0:56](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=56)** Simply let's create the frame with desktop dimensions.
>
> **[1:01](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=61)** I'm going to [[Zoom]] it in and I will just draw a simple rectangle right here.
>
> **[1:08](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=68)** So instead of going to fill as you would normally do, just to select your color, you can simply click on this icon that is called style and select the color styles from this file.
>
> **[1:19](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=79)** Easy as that, you already have an applicable color that we are going to use later on.
>
> **[1:24](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=84)** The same goes with text.
>
> **[1:26](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=86)** If you would like to type in something, for example, hello, instead of changing the font settings, the size, and so on, you could again click on style icon and select any of the styles that is available in the dropdown, for example, the header one.
>
> **[1:44](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=104)** Finally, color and textiles should speed up your learning journey and your design work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (5), [[LinkedIn]] (1), [[Zoom]] (1)
> **UI Navigation:** click on (4), open the (2), select the (2), dropdown (1)
> **Tools:** figma (5)
> **Exercise Files:** download the (1), exercise files (1)
> **Analogies:** for example (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Create your first component in Figma](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=0)** - [Instructor] Before we start designing accessible components, let me quickly explain to you how to create a component in [[Figma (Software)|Figma]] and how to manage it across your design file.
>
> **[0:09](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=9)** In Figma, you can create components from any layers, groups, and frames.
>
> **[0:13](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=13)** It is a good practice to have at least two layers that you can later convert into a component.
>
> **[0:18](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=18)** Let me quickly show you an example.
>
> **[0:20](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=20)** So in our shapes dropdown, let's select an ellipse, and by holding Shift, I'm going to draw an ellipse in my canvas.
>
> **[0:29](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=29)** Let's supply a fill from our color styles and I will also type in some text.
>
> **[0:38](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=38)** Let's also quickly change the text properties from our text styles.
>
> **[0:44](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=44)** So the next step will be to align both of the elements horizontally and vertically.
>
> **[0:49](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=49)** And to create a component in Figma is very easy.
>
> **[0:51](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=51)** All you have to do is actually to go to the upper menu bar and hit on this quadruple diamond diagram.
>
> **[0:58](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=58)** Easy as that, you just created a component.
>
> **[1:01](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=61)** In your layer section, you can see that you have a master component, which is the first component that you ever created.
>
> **[1:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=66)** It consists of two layers, which is a text and an ellipse shape.
>
> **[1:12](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=72)** When you duplicate your component, you immediately create instances.
>
> **[1:17](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=77)** And instances are the copies of a master component.
>
> **[1:19](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=79)** They have an empty diamond shape in the layers panel.
>
> **[1:23](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=83)** Components can extremely speed up your design process.
>
> **[1:26](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=86)** As when you modify a master component's properties, then all instances get the same changes.
>
> **[1:32](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=92)** So for example, if I select an ellipse, and I would like to change this background color, you can see all the changes happening in my instances as well.
>
> **[1:42](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=102)** The same applies to the text.
>
> **[1:45](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=105)** If we rename our text, we also see this changes in our instances.
>
> **[1:51](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=111)** So instead of manually changing the same elements through your project, you can achieve the changes just in one click.
>
> **[1:59](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=119)** It contrast to main components, when you change the properties of an instance, other instances are not being affected.
>
> **[2:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=126)** But what is actually happening instead is known as a property override.
>
> **[2:11](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=131)** Property overrides can be applied to the instances to change text, fill color, stroke, and other shape properties.
>
> **[2:18](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=138)** So you can see I changed the fill color right here, and let me modify the text of another instance.
>
> **[2:26](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=146)** So we just created a property override of the text.
>
> **[2:30](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=150)** So if I go back to the main master component, and I would like to change all the instances at once, you can see that the components of property overrides are not being affected, so which means that the second instance is not having the change color as the other ones.
>
> **[2:46](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=166)** The same applies for the text.
>
> **[2:49](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=169)** If I type it right here, you can see that only two instances have this change, but the third one did not have it because we just had the property override.
>
> **[2:59](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=179)** You can of course keep modifying your instance to the way you like.
>
> **[3:04](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=184)** You can modify the shape.
>
> **[3:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=185)** You can also add some effects, for example.
>
> **[3:08](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=188)** However, if you notice that you are not happy with the changes, you can always reset them.
>
> **[3:13](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=193)** And to do that, you can easily click on this button that is called reset all changes.
>
> **[3:17](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=197)** And then you have exactly the same properties as your master component.
>
> **[3:22](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=202)** Another tip to know is how to find the master component in your project.
>
> **[3:26](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=206)** It is especially applicable if you have a lot of instances, you work with multiple design pages, and you cannot find your master component to quickly apply some changes.
>
> **[3:35](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=215)** And to do that, you can easily select any of the instances, right-click on your mouse, and select go to the main component.
>
> **[3:44](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=224)** And easy as that, you find your main component that you can later work with.
>
> **[3:51](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=231)** Finally, if you want to separate the instance from the main component, you can simply detach it.
>
> **[3:56](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=236)** And to do that, just select an instance that you want to detach, navigate to the right menu panel, click on instance options, and click on detach instance.
>
> **[4:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=246)** You can immediately see the changes in the layers group because it is not a component anymore, it is simply a frame.
>
> **[4:14](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=254)** And right now you can simply modify this frame properties without getting affected by the master component.
>
> **[4:24](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=264)** And easy as that, we just covered the basics of components in Figma.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (4)
> **UI Navigation:** click on (3), go to (2), dropdown (1), right-click (1), navigate to (1)
> **Definitions:** is a  (2), known as (1), means that (1), is called (1)
> **Tools:** figma (4)
> **CLI Commands:** find (3)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Best Practices:** good practice (1)

#### [Create accessible buttons](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=0)** - As we learn the basics of creating components in [[Figma (Software)|Figma]], let's design accessible buttons.
>
> **[0:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=5)** Buttons are the primary components that communicate actions that users can take, and they're usually placed across the website user interface.
>
> **[0:12](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=12)** Usually the buttons as well as other components can have multiple variations.
>
> **[0:16](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=16)** Think about different styling, size, alignments and so on.
>
> **[0:21](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=21)** Figma allows us to group similar components into the container with the so-called variants, and each variant has its unique properties that you as a designer can define.
>
> **[0:30](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=30)** In this project, we are going to create different variants for our buttons.
>
> **[0:33](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=33)** So we are going to work with two styles which are a primary button and also secondary button.
>
> **[0:38](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=38)** And for each of the styles, we'll have four different states, which are normal, hover, click, and disabled states.
>
> **[0:45](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=45)** When you open Figma file you can still reuse exactly the same file where we have our color and font styles.
>
> **[0:51](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=51)** I encourage you to go to the pages section and hit on the plus button where you can create a new page.
>
> **[0:56](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=56)** And in this page you can keep designing your accessible components.
>
> **[1:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=60)** So every button can be easily drawn with a rectangle shape.
>
> **[1:03](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=63)** So let's select the rectangle from our upper menu bar and draw the shape right here in our canvas.
>
> **[1:08](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=68)** You can also set its dimensions right here in the right menu panel.
>
> **[1:13](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=73)** I will change it's with the 168 pixel, and the height to 52 pixels.
>
> **[1:18](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=78)** I will also modify the corner radius to the value of 50 pixels so that our button is smooth.
>
> **[1:23](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=83)** And of course we will go to the fill, and select one of the colors from our color styles.
>
> **[1:28](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=88)** In this case, it's going to be the bright purple color.
>
> **[1:33](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=93)** Also, every button has a label which describes the action that the user can take.
>
> **[1:37](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=97)** So let's hit the text tool and type in some text.
>
> **[1:42](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=102)** In this case, we are going to work with 'get started', called 'action'.
>
> **[1:46](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=106)** I will also increase the width of the text field.
>
> **[1:52](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=112)** And make sure that the body text style is selected from the dropdown of our text styles.
>
> **[1:58](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=118)** Also, make sure that your text is aligned exactly in the center.
>
> **[2:01](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=121)** So the final step will be to select both of these elements and align them horizontally and vertically.
>
> **[2:08](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=128)** Don't forget to group both of these elements for the easiness of use.
>
> **[2:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=130)** To group the elements, you can use control plus G shortcut.
>
> **[2:14](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=134)** And a good practice is to rename our components according to the variance property.
>
> **[2:19](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=139)** So variance property can have also hierarchy, and to separate this hierarchy you can achieve by typing in slash.
>
> **[2:26](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=146)** So let me show you how it works.
>
> **[2:28](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=148)** So let's just type in 'button primary ', because this is our style, and by slash we're going to separate different states of our primary button.
>
> **[2:37](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=157)** So in this case we're going to call it 'normal'.
>
> **[2:41](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=161)** Let's duplicate our button three times so that we can work on modifying the styling for three different states.
>
> **[2:50](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=170)** To copy the buttons, you can do with the control plus D shortcut.
>
> **[2:54](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=174)** So the hover state means what happens to the button visually when you hover over with your mouse.
>
> **[3:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=180)** And for hover state, I like to add some effects, such as drop shadow.
>
> **[3:04](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=184)** So hit on the plus icon and add a drop shadow.
>
> **[3:07](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=187)** So by clicking on effect settings, you can modify the settings, such as the position of the shadow, also blur, spread, and its colors.
>
> **[3:15](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=195)** So let's just change some settings.
>
> **[3:16](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=196)** We're going to modify the Y value to six, and also our blur is going to be decreased to the value of 10.
>
> **[3:24](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=204)** Also, let's hit here on a color.
>
> **[3:26](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=206)** And I would like to select exactly the same color as my button fill is, but you can see that the shadow looks just a bit too much, so a good practice is just to decrease this opacity to the value of 40% as an example.
>
> **[3:39](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=219)** But you're welcome to play around with the styling to achieve the style that you want.
>
> **[3:45](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=225)** Let's also quickly rename this button.
>
> **[3:48](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=228)** So we are going to change its state to 'hover'.
>
> **[3:52](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=232)** And for click and disabled, we are going to keep it easy because we are just going to modify the background fill.
>
> **[3:58](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=238)** So in this case, we're going to select the purple click style, and for disabled is going to be the light gray.
>
> **[4:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=245)** Also, let's rename the layers for the simplicity of our work.
>
> **[4:17](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=257)** Perfect, our primary buttons are ready.
>
> **[4:19](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=259)** We are not going to convert them to components yet because I would like to also design secondary buttons just to show you how it all works properly.
>
> **[4:27](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=267)** So let's duplicate our primary button with a normal state and we're going to create a secondary button which is not that important with the action for the user as a primary button.
>
> **[4:37](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=277)** So usually secondary buttons should be not too much with a bright color.
>
> **[4:42](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=282)** So instead of having a bright purple fill we are going to change the fill color to white and also add a stroke.
>
> **[4:49](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=289)** And the stroke color is going to be dark red that you can select from the color styles.
>
> **[4:53](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=293)** Let's also adjust the stroke width.
>
> **[4:57](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=297)** And of course we also have to change the color of our text.
>
> **[5:02](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=302)** Easy as that, we just created a basic secondary button for our project.
>
> **[5:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=306)** Let's also name the text label because for example, we would like the user to ask for a free demo.
>
> **[5:17](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=317)** Let's not forget to rename this layer.
>
> **[5:19](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=319)** So it's going to be also normal state, but the styling of the button is secondary.
>
> **[5:23](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=323)** So let's just distinguish that by naming it 'button secondary'.
>
> **[5:27](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=327)** Let's duplicate the button three times so that we can modify the styling for each state.
>
> **[5:35](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=335)** So for hover effect, we are going to create a shadow effect as well.
>
> **[5:39](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=339)** It's going to be exactly the same shadow as we have in our primary button, but instead of creating the same effect from scratch which is also possible, we will go back to this hover button and click right here on this style and create a new style out of this effect.
>
> **[5:55](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=355)** So let's just name it 'button shadow'.
>
> **[6:03](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=363)** Perfect, and right now, instead of creating an effect from scratch, we will just go to our effect styles and apply button shadow, which is exactly the same as the one for the primary button.
>
> **[6:16](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=376)** Perfect, for our click and disable states we will also modify the colors.
>
> **[6:20](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=380)** So for click state itself, we just going to modify the rectangle stroke to the color that is purple, click.
>
> **[6:29](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=389)** And for disabled, we will modify both of the selection colors to the light gray to be consistent with our primary button.
>
> **[6:38](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=398)** Let's also make sure that our layers are renamed properly.
>
> **[6:49](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=409)** And finally, it's time to create our components.
>
> **[6:52](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=412)** So let's select four of the buttons for our primary style.
>
> **[6:55](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=415)** And instead of hitting on this quadruple icon, we are going to open the dropdown, and we are going to also click on create component set.
>
> **[7:03](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=423)** And immediately you can see the container that has just been created with four variants.
>
> **[7:07](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=427)** And this variance indicate four different states of our primary button.
>
> **[7:11](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=431)** You can also check the properties of your variants which are displayed right here.
>
> **[7:16](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=436)** If you click on the settings menu you can also rename the property, this is not mandatory, but imagine that you have 10 different properties, then it's quite wise to give a proper name to it.
>
> **[7:29](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=449)** Let's repeat the same action with our secondary buttons.
>
> **[7:32](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=452)** We are going to create a component set and right here we have four more variants with exactly the same properties but with different styling.
>
> **[7:44](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=464)** And if you would like to find your components, you can navigate to the assets panel and find your components right here.
>
> **[7:52](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=472)** So simply drag them to your working area.
>
> **[7:55](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=475)** Here we have a primary button and the secondary button.
>
> **[7:58](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=478)** And the cool thing about variants is that you can immediately change its states with one click, so you don't have to redesign exactly the same state multiple times, especially if you have a lot of buttons in your design project.
>
> **[8:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=490)** So the same here, you can immediately select the states for your primary button, and it's a really amazing feature of Figma that you should always apply while creating accessible components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (4)
> **UI Navigation:** select the (3), go to (2), dropdown (2), click on (2), open the (1)
> **CLI Commands:** make (3), find (2)
> **Tools:** figma (4)
> **Analogies:** such as (2), for example (1), imagine (1)
> **Best Practices:** good practice (2), don't forget (1), you should always (1)
> **Cross-References:** go back to (1)
> **Speakers:** - as (1)

#### [Create accessible icons](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=0)** - [Instructor] Icons are a visual representation of an object or action using [[User Interface Design]].
>
> **[0:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=6)** Accessible icons usually come along with the text labels to ensure that the users immediately understand their purpose and meaning.
>
> **[0:13](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=13)** But in some cases, icons can also be self-explanatory, especially when it comes to social media icons.
>
> **[0:19](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=19)** In fact, you can design icons from scratch.
>
> **[0:21](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=21)** But very common practice between designers is to reuse the [[Figma (Software)|Figma]] plugins, with the right existing icons libraries.
>
> **[0:28](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=28)** And right now, I'm going to show you one of the plugins that we are going to work with.
>
> **[0:32](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=32)** Make sure that you go to your personal dashboard, and instead of being right here in your personal space, you need to navigate to the community section.
>
> **[0:41](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=41)** In the community, you have a bunch of different plugins, design system, visual assets, designed by different creators from all over the world.
>
> **[0:48](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=48)** But right now, let's simply type in the name Feather Icons.
>
> **[0:53](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=53)** This is the plugin that we are going to work with.
>
> **[0:56](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=56)** Make sure that you are in the plugin section, and you can immediately see this plugin coming out the first in a list.
>
> **[1:02](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=62)** All you have to do is either click on it, you can read more information about that, read some comments.
>
> **[1:07](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=67)** But important thing is that you have it installed on your Figma profile.
>
> **[1:11](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=71)** So make sure that you just try it out.
>
> **[1:14](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=74)** You will immediately be redirected to the project space, where you can just click on run, and test the plugin for yourself.
>
> **[1:21](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=81)** When you are ready, make sure that you are back in your working area.
>
> **[1:24](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=84)** All you have to do is to right click on the mouse and go to the plugin section.
>
> **[1:29](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=89)** And right here you should see better icons plugin.
>
> **[1:33](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=93)** Let's click on that.
>
> **[1:34](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=94)** And as you can see here, a bunch of different icons that you can use for the project.
>
> **[1:38](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=98)** But today we are going to work with social media icons.
>
> **[1:41](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=101)** So let's just type in [[LinkedIn]].
>
> **[1:44](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=104)** When you click on the icon, you can immediately see it appearing in your working area.
>
> **[1:48](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=108)** Let's also add another icon for [[Facebook]].
>
> **[1:52](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=112)** And a third one for Twitter.
>
> **[1:57](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=117)** As you can see right now, it looks a bit messy, but we are just going to separate icons from each other.
>
> **[2:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=126)** What you can also do is to select all of these three icons, go to the design section, select tidy up, and type in some bigger value, so that you have more space between all the elements.
>
> **[2:21](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=141)** So the great thing about this icons is this is all our vector shapes, so we can easily change their characteristics.
>
> **[2:28](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=148)** So let's select all of these icons and we're going to modify its stroke value to one half.
>
> **[2:34](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=154)** And we'll also apply a different color from our color styles.
>
> **[2:38](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=158)** Let's select the dark gray color.
>
> **[2:41](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=161)** So this is going to be our normal state.
>
> **[2:43](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=163)** And to create a hover state and a click state, we are just going to duplicate all of this icons by the sequence Control+D.
>
> **[2:52](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=172)** You can also use Control+C, Control+V if you find it easier.
>
> **[2:57](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=177)** And hover state is just going to have a different color.
>
> **[2:59](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=179)** So all we have to do is to go to the selection colors, and change the color to the purple click.
>
> **[3:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=186)** Remember that before we create variants and component sets, it is a good practice to rename our layers beforehand.
>
> **[3:12](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=192)** So let's select each of these layers one by one and type in its state.
>
> **[3:17](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=197)** So we are going to start with normal state.
>
> **[3:22](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=202)** Let's repeat the same for the other icons.
>
> **[3:24](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=204)** Don't forget to add the dash right here.
>
> **[3:31](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=211)** And the same action will just repeat for our hover click icons.
>
> **[3:36](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=216)** I'm just going to name them, click.
>
> **[3:45](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=225)** And right now, after you are done with renaming your layers, let's select both of the relevant groups, navigate to the component dropdown, and click on create component set.
>
> **[3:55](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=235)** So we immediately created a variant for our first LinkedIn icon.
>
> **[3:58](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=238)** The same action we are going to repeat with Facebook icon and also with Twitter icon.
>
> **[4:08](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=248)** And as easy as that, we already created accessible icons.
>
> **[4:11](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=251)** You can also find them in the asset panel.
>
> **[4:13](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=253)** So right here, you can just drop them down in your working area.
>
> **[4:17](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=257)** And in the variance menu, you can easily change the property from normal to click state, and apply the certain state that is relevant to your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (2), [[LinkedIn]] (2), [[Facebook]] (2), [[User Interface Design]] (1)
> **UI Navigation:** click on (6), go to (4), navigate to (2), select the (1), dropdown (1)
> **CLI Commands:** make (4), find (2)
> **Tools:** figma (2)
> **Best Practices:** good practice (1), don't forget (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Accessible radio buttons and checkboxes](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=0)** - [Instructor] Radio buttons and check boxes are elements for making selections.
>
> **[0:04](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=4)** Usually, radio buttons allow the user to select one item from the predefined list, while check boxes let the user choose multiple items.
>
> **[0:12](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=12)** To make both of the elements accessible, the item should be focusable, so that the user knows whether the checkbox or radio button is selected or deselected.
>
> **[0:21](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=21)** It is also wise to add the relevant text labels, so that the user can get more context about the available choices.
>
> **[0:28](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=28)** In [[Figma (Software)|Figma]], we are going to design each of the elements with three different states, which are normal, click and disable.
>
> **[0:34](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=34)** Let's start with designing radio buttons.
>
> **[0:36](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=36)** All you have to do is to navigate to the shapes drop down and select on ellipse.
>
> **[0:40](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=40)** By holding shift key, we are going to draw an ellipse with a width and height of 20 pixels.
>
> **[0:51](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=51)** Let's change this field to white and also the stroke with a dark gray color from our color styles.
>
> **[0:57](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=57)** It was easy, wasn't it?
>
> **[0:59](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=59)** So, the next step is going to be duplicate this ellipse by control plus D shortcut and move it right here.
>
> **[1:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=66)** Our click state should be more attention grabbing, so we are going to change its stroke color to purple bright.
>
> **[1:15](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=75)** I will also duplicate, again, the same ellipse and I will change its fill to the bright purple color.
>
> **[1:27](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=87)** Make sure that you select scale and we are also going to decrease its size to 12 pixels, width and height.
>
> **[1:37](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=97)** By selecting both of the layers, we should align them horizontally and vertically.
>
> **[1:42](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=102)** So easy as that, we just created a click state for the radio button.
>
> **[1:46](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=106)** Finally, let's copy, again, the same element.
>
> **[1:50](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=110)** Let's create a disabled state, which is going to be quite easy because all we have to do is to change the fill and stroke colors.
>
> **[1:57](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=117)** We are going to select the light gray color.
>
> **[2:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=126)** Also, if you develop a design system with accessible components, it is wise to have some variations.
>
> **[2:11](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=131)** So, we are going to select all of these three states, duplicate them, and provide an alternative.
>
> **[2:17](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=137)** So, we are going to have an element with text labels and it's going to be very easy because we will just select the text tool and type in here some text, which is, for example, label.
>
> **[2:28](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=148)** From the text styles, you can select body text, and just place it exactly in the center of your ellipse.
>
> **[2:37](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=157)** The distance between both of the elements should be 12 pixels.
>
> **[2:42](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=162)** Also, sometimes it happens that your label is going to have more text than it is right now.
>
> **[2:47](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=167)** So, let's just move the container and we're going to extend the text area for the future user who is going to type in some text.
>
> **[2:55](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=175)** Let's duplicate the same text to the remaining states.
>
> **[3:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=185)** Looks great.
>
> **[3:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=186)** Let's group all of these elements so that we can create the component sets.
>
> **[3:12](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=192)** To group the elements, just right click on your mouse and click on group selection.
>
> **[3:16](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=196)** You can also group the elements with a sequence of control plus G shortcut.
>
> **[3:25](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=205)** And remember again, it's very important that we just change the layer's name, so that we can get a proper variant with proper properties.
>
> **[3:34](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=214)** So, the first one is going to be radio button normal.
>
> **[3:43](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=223)** That will have radio button click.
>
> **[3:50](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=230)** And finally, radio button disabled.
>
> **[3:54](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=234)** The same goes for this group.
>
> **[3:56](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=236)** Let's just call it radio button Label.
>
> **[4:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=246)** Click is going to go right here.
>
> **[4:08](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=248)** And finally, disabled.
>
> **[4:16](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=256)** Easy as that, we are going to select three relevant components to each other, go again to our components menu and create component set.
>
> **[4:23](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=263)** Let's repeat the same action with the radio buttons that have text labels.
>
> **[4:30](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=270)** Perfect, we have variants.
>
> **[4:31](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=271)** Let's check in our assets.
>
> **[4:32](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=272)** You can see a radio button that you can drag to your working area, and the properties have different states that you can easily change.
>
> **[4:39](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=279)** And the same goes with our label.
>
> **[4:43](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=283)** You can play around and change its state to the one that you need for your design.
>
> **[4:48](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=288)** All right, perfect.
>
> **[4:49](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=289)** Let's move on to creating our check boxes.
>
> **[4:51](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=291)** So, the idea is quite simple.
>
> **[4:53](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=293)** We are going to have exactly the same approach.
>
> **[4:55](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=295)** Just instead of using an ellipse shape, we are going to work with rectangle.
>
> **[4:59](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=299)** So, let's select a rectangle and draw exactly the same shape with the width and height of 20 pixels.
>
> **[5:12](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=312)** Let's also modify the corner radius to the value of two, so our rectangle radius is smoother.
>
> **[5:18](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=318)** We are also going to have exactly the same fill color, that is white, and the stroke color is going to be dark gray.
>
> **[5:24](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=324)** So, this is our normal state.
>
> **[5:26](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=326)** Let's quickly copy the rectangle and we are going to create a click state, which is going to be quite interesting because we are going to change its fill color to bright purple and remove the stroke.
>
> **[5:37](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=337)** We don't need it right here.
>
> **[5:38](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=338)** The next point is to add a check mark, so we can either draw it with a pencil, but let's just go, again, to our feather icons that we used earlier in this course.
>
> **[5:48](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=348)** And let's search for the icon that is called a check mark.
>
> **[5:52](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=352)** So, this is the perfect option.
>
> **[5:54](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=354)** Let's paste it into our project.
>
> **[5:56](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=356)** I'm going to ungroup this frame.
>
> **[5:59](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=359)** You can do that by control shift G sequence.
>
> **[6:03](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=363)** And by selecting the scale, let's decrease its size.
>
> **[6:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=370)** I'm going to put it exactly right here inside of my check box.
>
> **[6:13](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=373)** And it's also smart to change its color.
>
> **[6:16](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=376)** So, let's make sure that it's all properly aligned, horizontally and vertically, and let's group both of the elements with a shortcut of control plus G.
>
> **[6:26](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=386)** As you can see right here in the layer section, our group is outside of our frame, so let's put it inside, just for the convenience of our work.
>
> **[6:34](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=394)** Finally, we are going to create a disabled state, so let's copy this group, move it a bit down, right here in our project area.
>
> **[6:40](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=400)** And all we have to do is, again, to change the fill color to the light gray.
>
> **[6:45](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=405)** Perfect.
>
> **[6:46](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=406)** So, we have three different check boxes with three different states.
>
> **[6:51](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=411)** Let's copy all of them again and add some text labels.
>
> **[6:54](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=414)** So, we can do exactly the same approach as with the radio buttons.
>
> **[6:58](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=418)** I'm just going to type in some text called label and let's also change the text style to body text.
>
> **[7:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=426)** So, we are going to have exactly the same distance between both of the elements, which is 12 pixels.
>
> **[7:13](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=433)** And let's also extend its text area.
>
> **[7:21](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=441)** We can also [[Zoom]] out a bit and just to see, so that the text area matches the text area of our radio box.
>
> **[7:30](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=450)** We can zoom out just to see that our text area has exactly the same width as the text area of our radio button.
>
> **[7:36](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=456)** You can see it exactly with the red crosses of the disabled radio button.
>
> **[7:43](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=463)** Perfect, I'm going to copy this text twice and make sure that it's aligned to the center of my checkbox.
>
> **[7:56](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=476)** And again, let's select both of the elements and group them.
>
> **[8:04](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=484)** Finally, an important part is to rename our layers.
>
> **[8:07](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=487)** Let's call our first components checkbox normal, which means it's the normal state of the checkbox.
>
> **[8:18](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=498)** Then we have checkbox click and checkbox disabled.
>
> **[8:31](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=511)** The same goes to the other components set that has text labels.
>
> **[8:35](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=515)** Let's just call it checkbox label slash normal.
>
> **[8:45](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=525)** That will have a click state
>
> **[8:53](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=533)** and disable.
>
> **[8:56](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=536)** Perfect, the most fun part is right now, just to convert everything to the component set.
>
> **[9:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=540)** We have three similar components that become variants in the component set.
>
> **[9:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=545)** And the same goes here, we are just selecting three of these elements and convert them to variants.
>
> **[9:16](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=556)** If you want to check again if you did the right job, you can go to the assets panel and check if new components appeared right here.
>
> **[9:25](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=565)** And of course, you can drag them to your working area.
>
> **[9:28](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=568)** Try to change properties, to make sure that these accessible components meet your expectations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (2), [[Figma (Software)|Figma]] (1)
> **UI Navigation:** checkbox (7), select the (2), click on (2), navigate to (1), go to (1)
> **CLI Commands:** make (5)
> **Cross-References:** earlier in (1)
> **Tools:** figma (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Creating an accessible image card](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=0)** - [Instructor] Images make website content more pleasing to watch, and easier to comprehend.
>
> **[0:04](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=4)** In general, images can be either decorative or descriptive.
>
> **[0:08](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=8)** Descriptive images explain the text content in a visual way so that the provided information is clear to the user.
>
> **[0:14](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=14)** In contrast, decorative images usually serve no urgent purpose, besides adding some colors and textures to the webpage.
>
> **[0:22](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=22)** In this exercise we're going to create three accessible image cards with descriptive images.
>
> **[0:27](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=27)** You can either use your own images from your gallery or download the image assets from the exercise files under this video.
>
> **[0:34](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=34)** First, let's throw the area where our images are going to be displayed.
>
> **[0:38](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=38)** I'm going to hit a rectangle in [[Figma (Software)|Figma]] and make sure that its dimensions are 896 pixels and 508 pixel of the height.
>
> **[0:48](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=48)** We're also going to change the corner radius to the value of 40 pixels, because as you remember we applied similar settings to our buttons, check boxes and other components that also have smooth corners.
>
> **[1:02](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=62)** Let's add a drop shadow to this shape.
>
> **[1:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=65)** We're going to go to our styles and apply the button shadow that we earlier created through the scores.
>
> **[1:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=70)** However, I think that the drop shadow is a bit too much.
>
> **[1:13](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=73)** Right now, It's too bright, but you can easily unpack the style by clicking on detached style button.
>
> **[1:19](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=79)** And right here in the added settings, we are going to change the color of the shadow to the grayish color, and also decrease the opacity to the value of 30.
>
> **[1:29](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=89)** Perfect.
>
> **[1:32](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=92)** Let's draw another rectangle right here and also have the corner radius with the value of 40.
>
> **[1:39](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=99)** I will immediately color the shape to the bright purple color so that you can see the contrast between both of the elements.
>
> **[1:47](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=107)** We'll also decrease the opacity of this element to the value of 30%.
>
> **[1:52](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=112)** Let's also make sure that this rectangle is under our image so that it doesn't cover it.
>
> **[2:03](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=123)** Finally, let's also check that the distance between both of the elements is 34 pixels.
>
> **[2:09](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=129)** You can see the distances by pressing on alt key on your keyboard.
>
> **[2:16](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=136)** I will again duplicate this shape by Ctrl + D shortcut and place it right here.
>
> **[2:22](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=142)** I will also extend its width and change the pass through opacity to 100%.
>
> **[2:30](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=150)** Here we'll also make sure that the distance from the bottom is 34 pixels, and from the side it has 40 pixels.
>
> **[2:39](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=159)** Perfect. So the first canvas for our descriptive image is ready, but we are going to also create two more cards that we are going to reuse in our webpages.
>
> **[2:49](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=169)** So I will hit the rectangle again, and the second image will have dimensions of 712 pixels and 566 pixels.
>
> **[2:59](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=179)** Let's change the corner radius again to the value of 40
>
> **[3:09](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=189)** And let's apply a drop shadow again.
>
> **[3:11](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=191)** But first of all, to speed up our process we can again create a new effect styles.
>
> **[3:16](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=196)** And in this situation, we are going to name it image shadow.
>
> **[3:23](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=203)** Let's apply this effect to the second image card.
>
> **[3:32](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=212)** And finally, I'm going to duplicate the shape and create the third image card with different dimensions which are going to be 570 pixels of width and 567 pixels of height.
>
> **[3:50](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=230)** And right now what we have to do is actually to add our images.
>
> **[3:53](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=233)** So you can do it by both ways.
>
> **[3:54](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=234)** You either click on a shape and go to the fill.
>
> **[3:58](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=238)** And instead of having a solid fill just open and drop down and select the image.
>
> **[4:03](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=243)** So right here you can choose an image and also modify its settings if you would like to.
>
> **[4:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=250)** So, let's select this image and click on open and easy as that we already have an image in our rectangle shape, so that was very easy.
>
> **[4:19](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=259)** Let's also group all of this element so that we have the first card and we're going to name it image card one.
>
> **[4:27](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=267)** Finally, let's also add two more images to the shapes and let me show you a very cool trick in Figma.
>
> **[4:33](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=273)** All you have to do is to hit Ctrl + Shift + K and it immediately opens the folder where you can browse for your images.
>
> **[4:40](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=280)** Let's select the two remaining images right here and click on open.
>
> **[4:44](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=284)** And right here we can click exactly on the shapes where we want both of the images to be displayed.
>
> **[4:49](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=289)** So first and second, and it was extremely easy and I really like this feature and I recommend to use it in your design process.
>
> **[4:57](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=297)** Let's also, rename the image cards.
>
> **[5:07](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=307)** And right here we're not going to work with variants, we're just going to hit on the quadruple diamond to create a component for each of our image cards.
>
> **[5:22](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=322)** And let's quickly check if these components appeared in our assets panel.
>
> **[5:26](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=326)** And here we can see three accessible image cards that we can later reuse in our webpages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (2)
> **UI Navigation:** go to (2), click on (2), select the (2)
> **CLI Commands:** make (4)
> **Tools:** figma (2)
> **Exercise Files:** download the (1), exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create accessible input fields](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-create-accessible-input-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-create-accessible-input-fields?u=76281980&t=0)** (upbeat synth music)
>
> **[0:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-create-accessible-input-fields?u=76281980&t=5)** - [Instructor] In this challenge, you'll create accessible components for input fields.
>
> **[0:09](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-create-accessible-input-fields?u=76281980&t=9)** These components are essential for users to enter their personal data on webpages.
>
> **[0:15](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-create-accessible-input-fields?u=76281980&t=15)** You've definitely interacted with input fields while trying to log in into the system or filling in some personal information in online [[Forms]].
>
> **[0:23](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-create-accessible-input-fields?u=76281980&t=23)** In this challenge specifically, focus on creating two different component sets, which are one line and multiline input fields.
>
> **[0:31](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-create-accessible-input-fields?u=76281980&t=31)** For each component set, think about different states, which are normal states, hover, click, and disabled.
>
> **[0:38](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-create-accessible-input-fields?u=76281980&t=38)** To properly create your component sets with variants, make sure that you name your layers accordingly by using the hierarchy rule.
>
> **[0:46](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-create-accessible-input-fields?u=76281980&t=46)** Finally, always keep in mind accessibility guidelines while creating your components.
>
> **[0:51](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-create-accessible-input-fields?u=76281980&t=51)** An example is to include a text placeholder in your input field, and also to make sure that the contrast ratio between your text and background is high.
>
> **[1:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-create-accessible-input-fields?u=76281980&t=60)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **CLI Commands:** make (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat synth music) (1)

#### [Solution: Create accessible input fields](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=0)** - [Instructor] Let's start with a one line input field.
>
> **[0:08](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=8)** By default our component is going to have three different states which are normal, click and disabled.
>
> **[0:14](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=14)** To create a component, let's quickly select a rectangle and draw the shape in our canvas.
>
> **[0:21](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=21)** I will also change its dimensions to the value of 472 by 52 pixels.
>
> **[0:28](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=28)** Let's also modify the corner radius value to the value of 30.
>
> **[0:33](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=33)** The next step will be to add a stroke and select the color which is dark gray.
>
> **[0:37](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=37)** And let's also modify the fill color of the component to white.
>
> **[0:44](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=44)** Then we are going to add a text label which is going to be located above our input field.
>
> **[0:50](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=50)** To do that, I will select a text tool and type in here text label.
>
> **[0:57](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=57)** Make sure that you select the body text as a textile in your dropdown.
>
> **[1:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=60)** We will also extend the text area in case a text label is a bit longer.
>
> **[1:07](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=67)** Also, let's make sure that the distance between two layers is exactly eight pixels.
>
> **[1:12](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=72)** I will also move the text label a bit to the left side.
>
> **[1:15](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=75)** Then we are going to duplicate this layer with Control + D shortcut and place it exactly in the middle of our input field.
>
> **[1:23](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=83)** To make sure that both of the layers are aligned properly.
>
> **[1:26](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=86)** Let's align vertical centers of both of these layers.
>
> **[1:30](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=90)** This is going to be our text placeholder to let the user know which data they can input.
>
> **[1:35](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=95)** We will change the content to enter your text.
>
> **[1:37](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=97)** Also, it's important to change the fill color to light gray and also let's make sure that the tax label color is not black, but it has a dark gray color.
>
> **[1:53](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=113)** And this is how we just created the first state of our one line input field.
>
> **[1:58](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=118)** I'm going to select all of the layers and group them with a Control + G shortcut, and then we'll also go to the layers and rename the group.
>
> **[2:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=125)** I will name it as one line slash normal state which is important to create different states of our variant.
>
> **[2:14](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=134)** And then we are going to duplicate this group two times.
>
> **[2:19](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=139)** Where we will change the styling of each state.
>
> **[2:23](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=143)** While we click on the component.
>
> **[2:25](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=145)** We immediately have a text place holder where we as users can immediately know that we can enter our text.
>
> **[2:32](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=152)** So I will change the color of this text layer to purple click and I will also apply exactly the same color to the amplified stroke.
>
> **[2:42](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=162)** Let's also not forget to rename the layer and specify its state.
>
> **[2:50](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=170)** Finally, let's style our disabled state.
>
> **[2:53](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=173)** We are going to modify the fill color from white to light gray.
>
> **[2:58](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=178)** I will also unpack the style because I would like to have only 30 percent of the color.
>
> **[3:03](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=183)** This is important so that the user can see the text place holder.
>
> **[3:07](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=187)** We'll also modify the stroke color to the light gray.
>
> **[3:11](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=191)** And of course, let's not forget to rename the layer as well.
>
> **[3:21](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=201)** Perfect.
>
> **[3:22](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=202)** We are halfway through our challenge so let's select these three groups and duplicate them.
>
> **[3:28](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=208)** Right now we are going to select three multi-line input fields.
>
> **[3:32](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=212)** Which are going to have exactly the same styling but they're going to have a different height.
>
> **[3:38](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=218)** So important part is that we will select our group and make sure that we select rectangle and instead of having a height of 52 pixels we are going to change to the value of 181 pixel.
>
> **[3:50](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=230)** This is how easily we create a multi-line input field.
>
> **[3:53](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=233)** Let's repeat exactly the same action with the two remaining components.
>
> **[4:04](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=244)** Also, let's not forget to rename our component because we're going to create a totally different component set with a multi-line variants.
>
> **[4:12](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=252)** So instead of having a one line as a name I'm going to change it to multi-line.
>
> **[4:19](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=259)** The same name.
>
> **[4:20](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=260)** I will apply to two different groups.
>
> **[4:30](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=270)** Perfect.
>
> **[4:30](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=270)** And now we can create our accessible components.
>
> **[4:32](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=272)** So I will select this three groups and navigate to the component dropdown and click on create component set.
>
> **[4:38](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=278)** Right here we have a one line component with three different states which you can see right here.
>
> **[4:47](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=287)** Let's select three remaining elements and also create another component set.
>
> **[4:51](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=291)** And here we have another multi-line component set with three different states.
>
> **[4:59](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=299)** If you would like to make sure that you've done a correct job just navigate to your asset panel and check if your component list has been updated.
>
> **[5:08](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=308)** In this case, we see new components right here which we can track in our working area and we can also play around with the properties of each component and change them to different states.
>
> **[5:21](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=321)** Easy as that.
>
> **[5:22](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=322)** We just completed our first challenge.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (2), dropdown (2), click on (2), navigate to (2), go to (1)
> **CLI Commands:** make (6)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Advanced Components

[↑ Back to Table of Contents](#table-of-contents)

#### [Accessible header menus](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=0)** - A header is a top part of a website which lets the user navigate across the different web pages.
>
> **[0:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=5)** Usually a header consists of a company logo a few menu items and a button with which the user can interact.
>
> **[0:12](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=12)** Accessible headers have a clear and consistent structure that is reused across the web pages.
>
> **[0:17](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=17)** To create a header component in [[Figma (Software)|Figma]], we are going to work with a new concept of nested components and it means that we are going to use already existing components to create our header.
>
> **[0:27](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=27)** It sounds a bit complicated, but it's definitely not.
>
> **[0:30](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=30)** Let's immediately jump in and I will show you what I mean.
>
> **[0:33](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=33)** When I create a header I start with setting up a layout grid.
>
> **[0:36](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=36)** A layout grid gives me some sort of guidance on how to align my elements within the header.
>
> **[0:42](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=42)** So let's hit on the plus icon in the layout grid section and we are going to select columns.
>
> **[0:48](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=48)** A very common columns count in the webpages is 12.
>
> **[0:53](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=53)** Let's also modify the margins to the value of 140 and the gutter value, which means the distance between the columns itself, is going to remain 20.
>
> **[1:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=65)** Next, let's hit the rectangle and draw our shape in the canvas.
>
> **[1:13](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=73)** Make sure that it's width is exactly 1,440 pixels and the height has the value of 88 pixels.
>
> **[1:22](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=82)** I will immediately change the fill to the base color.
>
> **[1:25](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=85)** Next, we will have to place a company logo.
>
> **[1:28](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=88)** You can either use your own logo if you have it or you can also download the SVG vector file from the exercise files.
>
> **[1:35](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=95)** Let's hear the key combination control shift K and let's select our logo from the folder where it's located.
>
> **[1:43](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=103)** I'm going to place it right here in the canvas and as you can see, it's already right here.
>
> **[1:48](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=108)** So this is when we start to use our layout grid.
>
> **[1:51](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=111)** So I'm going to make sure that the logo is actually touching the beginning of my first column, and also I will select both of the layers and align them so that the content is displayed exactly in the center.
>
> **[2:13](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=133)** Then we're going to type a few menu items which are going to be features, to start.
>
> **[2:19](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=139)** Let's make sure that the textile is correct.
>
> **[2:22](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=142)** I'm going to work with body text.
>
> **[2:26](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=146)** I will duplicate this text three times and change its content, so it's going to be about section then case studies and contact.
>
> **[2:40](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=160)** Also, let's select four of these layers and modify it's fill to dark gray.
>
> **[2:44](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=164)** You do not see the difference between black and dark gray immediately, but it's definitely there.
>
> **[2:50](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=170)** I will also tidy up all of my elements and make sure that the distance between them is 78 pixels.
>
> **[2:59](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=179)** Let's also group these elements by hitting control + G shortcut and place it right here in the center of our menu header.
>
> **[3:11](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=191)** Finally, we have to place a button with a certain call to action.
>
> **[3:15](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=195)** We're not going to draw a button from the beginning because we already created different variants of the buttons that we can use right here so all we have to do is to go to the assets panel and find our buttons.
>
> **[3:31](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=211)** This is what I meant with nested components where we are already reusing the already existing component which in this case is a button to create the nest component.
>
> **[3:40](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=220)** I will also make sure that the button hits the margin of the last column, and also that the distance between the group is also 78 pixels to keep it consistent.
>
> **[3:58](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=238)** Perfect. We are almost done.
>
> **[3:59](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=239)** Let's select all of these layers and align them vertically.
>
> **[4:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=245)** Let's select all of these layers and align them with vertical centers.
>
> **[4:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=250)** And finally, we can hit on quadruple icon to create a component.
>
> **[4:15](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=255)** Let's also rename this component so that we know that we work with the header and as you can see here in the layers panel which is created a master component for our header.
>
> **[4:27](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=267)** You can also see how it looks like without the layout grid so here you can have a better impression of the colors used and also the alignment between the elements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (1)
> **CLI Commands:** make (5), find (1)
> **Definitions:** is a  (2), means that (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Env Vars:** svg (1)
> **Tools:** figma (1)
> **Speakers:** - a (1)

#### [Accessible footers](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=0)** - [Instructor] Now it's time to design an accessible footer.
>
> **[0:03](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=3)** In general, a footer is an area at the bottom of each webpage that is being reused across the website.
>
> **[0:09](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=9)** The information in footers may include company data, copyrights, hyperlinks, and social media links.
>
> **[0:17](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=17)** To make our footer accessible, we need to make sure that the shown data has a high-contrast ratio with the footers background.
>
> **[0:24](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=24)** All right, so we are back in our [[Figma (Software)|Figma]] file.
>
> **[0:27](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=27)** Let's select the frame and make sure that the layout grid is activated again.
>
> **[0:31](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=31)** And the reason for that is because we want our content inside of our footer to be aligned in the same way as the content in our header component.
>
> **[0:40](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=40)** Let's hit the rectangle and make sure that its dimensions are 1,440 pixels by 372 pixels.
>
> **[0:48](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=48)** I will also immediately align it to the center.
>
> **[0:51](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=51)** So in this project, the footer will have exactly the same color as our header component.
>
> **[0:55](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=55)** So let's quickly go to the color styles and change the fill to the beige color.
>
> **[1:02](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=62)** All right, and this is where our layout grid will become extremely handy because we are going to split our content in five columns.
>
> **[1:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=70)** So the first column is going to be a company logo and a short company description.
>
> **[1:15](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=75)** So let's open again a file browser with the shortcut of Control + Shift + K and import our logo.
>
> **[1:25](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=85)** I will just hit it exactly outside of my frame, but we'll also manually drag it inside of my footer area.
>
> **[1:40](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=100)** So let's make sure that the logo is aligned to the beginning of the first column, and also that the distance between the logo and the top of the footer is 60 pixels.
>
> **[1:54](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=114)** The next step will be to create a container with a text where we'll type a short description of our company.
>
> **[2:04](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=124)** Make sure that the text style is chosen as a body text and also that the fill has a dark gray color.
>
> **[2:11](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=131)** Perfect, and we'll also make sure that the distance between our logo and text is 20 pixels.
>
> **[2:17](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=137)** Then I will copy this text with the Control + D shortcut again and move it right here to the bottom.
>
> **[2:23](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=143)** This is where we are going to type in our copyright statement.
>
> **[2:30](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=150)** And instead of having a fixed container size of our text, we'll select auto width.
>
> **[2:37](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=157)** And right here, you can see that our text is one pixel slightly not aligned, so we'll just move it a bit back.
>
> **[2:44](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=164)** This is perfect to use our layout grid.
>
> **[2:47](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=167)** And right here, I see that everything is perfectly aligned.
>
> **[2:54](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=174)** Perfect, so now we have four columns remaining where we'll type in some hyperlinks, company contact information, and social media links.
>
> **[3:02](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=182)** Let's type again here the header, which is called Help.
>
> **[3:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=186)** I will immediately change the text style to the header three, and we'll also make sure that this element is aligned with my layout grid.
>
> **[3:19](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=199)** Perfect.
>
> **[3:20](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=200)** Let's also make sure that the distance is 60 pixels between the top of the footer and this header.
>
> **[3:27](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=207)** So we are going to use two layout grid columns per each text column.
>
> **[3:31](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=211)** So let's duplicate this header a few times.
>
> **[3:44](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=224)** And let's also make sure that everything is properly aligned.
>
> **[3:49](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=229)** So now we'll have to rename our headers to, for example, features, company, and follow us.
>
> **[4:01](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=241)** Great, so now we are going to grab a body text and duplicate it again and place under the help header.
>
> **[4:08](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=248)** So right here, we are going to type in another content, which is about us, which will serve as a hyperlink where users can click and navigate to another page of our website.
>
> **[4:19](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=259)** And let's, again, duplicate these hyperlinks a few times where we are going to type in other hyperlinks, which is pricing and case studies.
>
> **[4:31](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=271)** Great, now we just selected three of this layers and duplicated them again, and we are going to slowly move them under features and also under company.
>
> **[4:47](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=287)** And all we have to do is, of course, to change the content in these text layers.
>
> **[4:58](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=298)** Great, and the remaining thing to do is to add our social media icons in the last column.
>
> **[5:04](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=304)** Let's quickly go to the assets panel and type in [[LinkedIn]] to find our first icon that we are going to drag right here under the follow us headline.
>
> **[5:14](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=314)** I will immediately [[Zoom]] in right here and make sure that this icon is properly aligned.
>
> **[5:20](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=320)** The distance between the icon and the header should also be 20 pixels.
>
> **[5:24](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=324)** That way we'll also add [[Facebook]] icon that we are also going to position exactly next to our LinkedIn icon.
>
> **[5:30](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=330)** Make sure that the distance is 12 pixels.
>
> **[5:33](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=333)** And finally, we'll also have Twitter, which will also have exactly the same distance of 12 pixels.
>
> **[5:43](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=343)** And I also wanted to mention this is where we, again, applied nested components approach where we just reused already existing component icons to create a footer.
>
> **[5:57](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=357)** All right, let's quickly deactivate our layout grid to see how our footer looks like without the grids.
>
> **[6:04](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=364)** So if you're not happy with your result, you can, of course, play around and add more data, or for example, change the layout position.
>
> **[6:11](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=371)** But if you're happy with the result, let's go back to the layers section, select our elements, and hit the create component button.
>
> **[6:21](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=381)** So this is how you see that we, again, created another component.
>
> **[6:24](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=384)** We will quickly rename that so we know to what we refer.
>
> **[6:27](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=387)** And if you open this component, you can see all of the elements within it that we just created in this video.
>
> **[6:34](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=394)** You can also go back to the header component, open it up, and see the different elements that we reused to create this accessible component.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Figma (Software)|Figma]] (1), [[Zoom]] (1), [[Facebook]] (1)
> **CLI Commands:** make (12), find (1)
> **UI Navigation:** go to (2), select the (1), navigate to (1)
> **Cross-References:** go back to (2), in the last (1)
> **Definitions:** is an  (1), is called (1)
> **Analogies:** for example (2)
> **Tools:** figma (1)
> **Speakers:** - [instructor] (1)

#### [Figma plugins for accessibility](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=0)** - [Instructor] Today we'll discuss two [[Figma (Software)|Figma]] plugins that can help you validate whether your components are accessible or whether you need to make more changes to your components to meet accessibility standards.
>
> **[0:11](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=11)** In Figma, make sure that you are in a community section where together we are going to search for our accessibility plugins.
>
> **[0:19](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=19)** Let's quickly go to the search bar and type in contrast.
>
> **[0:24](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=24)** In the plugin section, we will search for our first plugin that will help us with accessibility.
>
> **[0:29](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=29)** Contrast makes it easy to check the ratios of colors in your design process so make sure that you click on try it out so that the plugin is installed on your Figma account.
>
> **[0:41](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=41)** In our accessibility project, we are going to choose one of our components and check for the contrast ratio with the plugin.
>
> **[0:49](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=49)** So right here I'm going to choose one layer.
>
> **[0:51](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=51)** Specifically I'm curious to see whether the text has a high contrast ratio with the background.
>
> **[0:56](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=56)** So let's right click on the mouse and go to the plugins menu and search for the contrast plugin.
>
> **[1:01](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=61)** Here we can immediately see that the layer meets the contrast ratio standards because it has the contrast ratio value of 18.41, and it also specified that it passes on double A and on a triple A standard.
>
> **[1:16](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=76)** You can also select other layers to see whether they meet accessibility guidelines regarding the contrast ratio.
>
> **[1:23](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=83)** For example, you can also select vector shape and we can see that it passes on a double A contrast standard, however it fails on a triple A contrast standard.
>
> **[1:33](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=93)** So here you can make your conclusions on whether you need to change your component to make it more accessible or whether you can live it as it is.
>
> **[1:45](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=105)** The next plugin we are going to search for is called Color Blind.
>
> **[1:51](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=111)** Let's go again to the plugins section and select this plugin.
>
> **[1:56](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=116)** So colorblind allows you to view your designs in eight different types of color vision impairments.
>
> **[2:02](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=122)** Make sure that you click on try it out.
>
> **[2:04](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=124)** So you again install this plugin on your Figma account.
>
> **[2:12](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=132)** And to quickly show you how the plugin works, let's select the footer component that we created together, and click on the plugins and search for color blind.
>
> **[2:21](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=141)** Here, you can also deselect some types of visual impairments if you would like to see only specific ones, or you can also select all of them just to see how it looks like for eight different visual impairments.
>
> **[2:33](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=153)** When you are done, click on create views.
>
> **[2:42](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=162)** So here we have two different variations of our footer component.
>
> **[2:46](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=166)** Let's quickly [[Zoom]] it in.
>
> **[2:47](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=167)** We can see that colors are different, but this is how people with visual limitations can see our component.
>
> **[2:53](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=173)** But still the important part is, that their contrast between text and background is so good that even with visual impairment our footer can be still understood by users.
>
> **[3:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=190)** So I encourage you to use both of these plugins to check your components on accessibility aspects.
>
> **[3:16](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=196)** This is important to make sure that all users have inclusive and accessible experiences while checking your designs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (4), [[Zoom]] (1)
> **UI Navigation:** click on (5), go to (2), select the (1)
> **CLI Commands:** make (7)
> **Tools:** figma (4)
> **Versions:** 18.41 (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)

#### [Create a simple web page with Figma components](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=0)** - [Instructor] Finally we're finished creating accessible components, and now we're going to reuse them in our webpage design.
>
> **[0:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=6)** We will create a homepage with accessible components from scratch.
>
> **[0:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=10)** So make sure that you follow along.
>
> **[0:12](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=12)** In your [[Figma (Software)|Figma]] project, first of all, let's select a frame, and also make sure that we select a desktop dimension.
>
> **[0:20](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=20)** I will immediately extend the height of my frame because we are going to create multiple sections.
>
> **[0:30](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=30)** Then we'll also add a layout grid with exactly the same dimensions that we used earlier through this course.
>
> **[0:37](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=37)** This is crucial for us to align our content within the layout grid itself.
>
> **[0:42](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=42)** And now this is where the fun begins.
>
> **[0:45](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=45)** Let's quickly go to the assets panel and find all of our components.
>
> **[0:49](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=49)** And to start, we are going to drag a header component to the top of our frame.
>
> **[0:54](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=54)** Let's quickly align it to the center and also to the top of the frame.
>
> **[0:59](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=59)** And here we are going to create a hero section which will consist of some text layers, buttons, and an image card.
>
> **[1:08](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=68)** So I will quickly select a text tool and type in some headline.
>
> **[1:16](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=76)** Make sure that you select header one as a text style for this header.
>
> **[1:21](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=81)** And you can immediately see that the text is so big that it immediately takes all space in our frame.
>
> **[1:26](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=86)** So we will just quickly drag the container of this text to the middle, and also make sure that the distance between our headline and the header is 150 pixels.
>
> **[1:41](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=101)** Then we'll type in some basic description of the product right here.
>
> **[1:45](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=105)** Also, make sure that you select the body text as your text style, and align it properly to the left side.
>
> **[1:52](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=112)** Let's also make sure that the distance between two layers is 24 pixels.
>
> **[1:58](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=118)** And I will also decrease the container width to make sure that everything is properly aligned.
>
> **[2:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=125)** Then we'll add some buttons so that the user can make some actions.
>
> **[2:08](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=128)** So it's going to be a primary button together with the secondary button right here.
>
> **[2:13](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=133)** So let's align it to the center to each other and make sure that the distance between them is 16 pixels.
>
> **[2:19](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=139)** We'll also make sure that the distance between the buttons and the text layer is 30 pixels.
>
> **[2:28](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=148)** Perfect. And from our image cards, I will use the image card two and place it exactly here to the right side.
>
> **[2:35](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=155)** I will also align it to the center of my layers from the left side and make sure that the distance between the header and the image is 67 pixels.
>
> **[2:48](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=168)** Maybe you also notice that our image goes outside the layout grid, and this is totally fine.
>
> **[2:54](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=174)** The important part of the layout grid is that the all crucial information, such as text, hyperlinks, input fields, and so on, are placed within the layout grid.
>
> **[3:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=185)** And now let's move on to designing another section of the webpage.
>
> **[3:09](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=189)** So I will just simply duplicate the headline, make sure that it has the header two as a style.
>
> **[3:15](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=195)** And also I will detach the style quickly because I would like to use the auto width of the text container instead of having the fixed width.
>
> **[3:23](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=203)** Let's also align this text layer to the center.
>
> **[3:32](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=212)** The distance between the first section and this headline is going to be 100 pixels which is very common distance to separate two sections.
>
> **[3:40](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=220)** Also, I will duplicate this body text, make sure that it's aligned to the center, and also type in another feature of the product.
>
> **[3:54](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=234)** Right here I will extend it a bit because I would like to have only two rows of my body text, and also I will make sure that it's properly aligned to the center.
>
> **[4:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=245)** The distance here will be also 20 pixels between both text layers.
>
> **[4:12](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=252)** Great. And we'll also apply another image card that we have in our assets panel, and this is going to be image card number one.
>
> **[4:19](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=259)** So we'll simply drag it right here.
>
> **[4:24](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=264)** Make sure that the distance between the text layer and the image is 40 pixels, and just simply align it to the center.
>
> **[4:31](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=271)** Easy as that we already created two sections of our homepage.
>
> **[4:40](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=280)** Then let's go again to our assets and drag the image number three.
>
> **[4:45](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=285)** I will align it to the left side of my layout grid and make sure that the distance between both of the layers is 160 pixels.
>
> **[4:57](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=297)** Then I will grab again this layers and simply duplicate them because we are going to reuse almost exactly the same layout as in our hero section.
>
> **[5:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=310)** But the only difference is that we will again reuse the header two style instead of having header one, and also decrease the container width.
>
> **[5:20](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=320)** We will also change the text content.
>
> **[5:25](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=325)** And make sure that the distance between both of the layers is 20 pixels again.
>
> **[5:32](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=332)** And right here we'll have also 34 pixels.
>
> **[5:39](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=339)** And to make this section more interesting I'm going to change the background color.
>
> **[5:43](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=343)** So I will just simply draw a rectangle shape, change the fill color to beige, and also I will make sure the rectangle is placed on the bottom of the layers.
>
> **[5:53](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=353)** In this way we can easily see all of our important content.
>
> **[6:01](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=361)** You can also make sure that it's all aligned so the distance between the image and the size of the rectangle should be 50 pixels.
>
> **[6:12](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=372)** Perfect. We are almost there.
>
> **[6:13](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=373)** So the last thing we have to do is to include our footer at the bottom of this frame.
>
> **[6:21](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=381)** As we're going to really have space, we will just select the frame and extend its height.
>
> **[6:27](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=387)** And in assets, the same as with the header, we will simply drag our footer.
>
> **[6:32](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=392)** And I will align it to the center, and also make sure that it's aligned to my last section.
>
> **[6:44](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=404)** And the last touch is to remove the remaining area of my frame.
>
> **[6:51](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=411)** Let's hide our layout grid just to see what we just created.
>
> **[6:55](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=415)** I think it looks really great.
>
> **[6:56](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=416)** And also we don't really spend so much time on redesigning everything from scratch, and everything looks also chic.
>
> **[7:03](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=423)** So this is the basic example on how you can use accessible components to create accessible webpage for your company, for your portfolio, or just for yourself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (1)
> **CLI Commands:** make (21), find (1)
> **UI Navigation:** go to (1), select the (1)
> **Tools:** figma (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Design a contact page](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-design-a-contact-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-design-a-contact-page?u=76281980&t=0)** - [Instructor] I challenge you to design a contact page by reusing other accessible components from the assets panel.
>
> **[0:12](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-design-a-contact-page?u=76281980&t=12)** And for this challenge, you can use all your creativity.
>
> **[0:15](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-design-a-contact-page?u=76281980&t=15)** Make sure to also apply the accessible components that we did not use yet in a homepage design, but still stay critical about which components are important for your users to show and to interact with.
>
> **[0:27](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-design-a-contact-page?u=76281980&t=27)** If you need some inspiration, just look again at the homepage design that we created earlier in this course.
>
> **[0:33](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-design-a-contact-page?u=76281980&t=33)** Good luck and have fun.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** earlier in (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Design a contact page](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=0)** (upbeat synth music)
>
> **[0:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=5)** - [Instructor] Right now I'm going to show you how to design a contact page with accessible components.
>
> **[0:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=10)** First of all, let's select the frame and let's make sure that we apply desktop dimensions.
>
> **[0:15](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=15)** Also, let's add a layout grid with exactly the same settings that we use for our homepage design to make sure that our alignment and styling are consistent.
>
> **[0:25](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=25)** We will select columns and make sure that the count value is 12.
>
> **[0:29](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=29)** And let's also change the margins value to 140 pixels.
>
> **[0:34](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=34)** Then let's quickly check our assets panel and start using our accessible components to create a design.
>
> **[0:40](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=40)** So first of all, I'm going to find my header and I will drag it exactly into the working area.
>
> **[0:46](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=46)** Let's also align it exactly to the center and to the top of the screen.
>
> **[0:52](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=52)** Then we are going to create a headline to specify that this is a contact page.
>
> **[0:56](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=56)** So let's select a text tool and type in here contact.
>
> **[1:02](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=62)** Let's quickly modify the fill color to dark gray and also make sure that we apply H2 as a text style.
>
> **[1:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=70)** Now we are going to move it a bit to the side to make sure that the headline is aligned with the layout grid.
>
> **[1:16](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=76)** And let's also decrease the distance between the header and the headline to the value of 60.
>
> **[1:24](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=84)** The next step will be to use our input field components.
>
> **[1:28](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=88)** So let's start with the one line input field, which we're going to place exactly under our headline.
>
> **[1:33](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=93)** And we will have the distance of 24 pixels.
>
> **[1:36](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=96)** So I'm going to go to the variant properties and make sure that I select the click state, because I would like to show that the users can click on this input field to enter their data.
>
> **[1:48](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=108)** Let's also modify the text label text to your email.
>
> **[1:53](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=113)** Then we are going to also use a multiline input field, which we will place exactly right here and I will change the text label to the text which says your message.
>
> **[2:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=126)** Perfect, I also would like to add some check boxes, so let's go to the check boxes with label and locate them exactly right here in the bottom.
>
> **[2:17](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=137)** Let's also decrease the distance to the value of 24.
>
> **[2:20](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=140)** So first label is going to say that I will agree with terms.
>
> **[2:29](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=149)** Let's duplicate this component with a control+D shortcut and we will have the distance of 14 pixels.
>
> **[2:36](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=156)** Right here, I would like to change the text to make sure that the user can subscribe to my [[Newsletters]].
>
> **[2:44](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=164)** And also for the variety, let's change the state of the component to the value of click.
>
> **[2:50](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=170)** Finally, it's important to have a call to action, so let's track the primary button and place it under our last checkbox, and it'll also have distance of 24 pixels.
>
> **[3:01](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=181)** But instead of get started, I also will change text and it'll say send.
>
> **[3:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=185)** I think it makes more sense than just to say get started.
>
> **[3:09](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=189)** All right, we're almost there.
>
> **[3:11](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=191)** To add some visual touch to this page, let's also select an image card, which we are going to position right here on the right side of the screen.
>
> **[3:20](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=200)** Let's also make sure that it's aligned properly to the right side of the layout grid.
>
> **[3:30](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=210)** And also let's decrease the distance to the value of 60.
>
> **[3:37](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=217)** Perfect, not the only thing we have to do is to add our footer, but I will extend slightly the height of the frame because I think we will not have enough of space.
>
> **[3:46](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=226)** So let's also find our footer, which we're going to drag exactly right here in our canvas and I will align it to the center, and also align to the bottom of the frame.
>
> **[3:57](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=237)** Let's check the distance between the footer and the lowest component and it has the value of 49 pixel.
>
> **[4:03](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=243)** I think it looks more or less fine.
>
> **[4:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=245)** So we will select the frame and hide our layout grid to see our design.
>
> **[4:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=250)** So easy as that, we just completed the second challenge where we learned how to recreate another contact page with accessible components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Newsletters]] (1)
> **CLI Commands:** make (8), find (2)
> **UI Navigation:** select the (3), go to (2), click on (1), checkbox (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat synth music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continue designing accessible components](https://www.linkedin.com/learning/designing-accessible-components-in-figma/continue-designing-accessible-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/continue-designing-accessible-components?u=76281980&t=0)** - [Instructor] Congratulations on finishing the course.
>
> **[0:03](https://www.linkedin.com/learning/designing-accessible-components-in-figma/continue-designing-accessible-components?u=76281980&t=3)** Now you know how to create accessible components in [[Figma (Software)|Figma]] and how to apply them in your design project.
>
> **[0:09](https://www.linkedin.com/learning/designing-accessible-components-in-figma/continue-designing-accessible-components?u=76281980&t=9)** As a part of this course, we discovered the importance of accessibility in design.
>
> **[0:13](https://www.linkedin.com/learning/designing-accessible-components-in-figma/continue-designing-accessible-components?u=76281980&t=13)** We reviewed the most common [[Web Accessibility]] standards to create accessible components.
>
> **[0:19](https://www.linkedin.com/learning/designing-accessible-components-in-figma/continue-designing-accessible-components?u=76281980&t=19)** Even more importantly, we designed a full set of accessible components in Figma, including buttons, image cards, header navigation, and so on.
>
> **[0:30](https://www.linkedin.com/learning/designing-accessible-components-in-figma/continue-designing-accessible-components?u=76281980&t=30)** This allowed us to easily create home and contact pages by reusing accessible components.
>
> **[0:36](https://www.linkedin.com/learning/designing-accessible-components-in-figma/continue-designing-accessible-components?u=76281980&t=36)** As a next step, I encourage you to create more components for your project to practice and also make sure that you check their accessibility with Figma plugins that we reviewed together.
>
> **[0:46](https://www.linkedin.com/learning/designing-accessible-components-in-figma/continue-designing-accessible-components?u=76281980&t=46)** You should now feel confident about creating an accessible and inclusive design experience for the users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (3), [[Web Accessibility]] (1)
> **Tools:** figma (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Tetiana Gulei]]

## Resources

- Exercise files available

## Skills Covered

- Figma (Software)
- Computer Accessibility

## Path Context

### In [[Build for Digital Accessibility]]
← [[Accessibility and Inclusion with Figma]] | **5 of 12** | [[Accessible Layout for the Web]] →

## Appears In

- [[Build for Digital Accessibility]]

## Related Courses

_Courses sharing skills:_

- [[Lo-Fi to Hi-Fi- Prototyping in Figma]] — Figma (Software)
- [[Figma for UX Research- Presentations that Stand Out]] — Figma (Software)
- [[Microsoft Office Accessibility for Beginners]] — Computer Accessibility
- [[Accessibility and Inclusion with Figma]] — Figma (Software)

---

[↑ Back to top](#)