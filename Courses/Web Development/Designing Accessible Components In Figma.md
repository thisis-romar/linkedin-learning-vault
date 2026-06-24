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
  - '[Build for Digital Accessibility](../../Paths/Web%20Development/Learning%20Paths/Build%20for%20Digital%20Accessibility.md)'
prev_courses:
  - '[Accessibility and Inclusion with Figma](Accessibility%20and%20Inclusion%20with%20Figma.md)'
next_courses:
  - '[Accessible Layout for the Web](Accessible%20Layout%20for%20the%20Web.md)'
path_nav: '[{"path":"Build for Digital Accessibility","position":5,"total":12,"prev":"Accessibility and Inclusion with Figma","next":"Accessible Layout for the Web"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/figma-software
  - skill/computer-accessibility
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/why-does-accessibility-matter-in-figma?u=76281980&t=0)** - [Tetiana] Would you like to know how to create accessible components for web applications from scratch? You've come to the right place. With accessible components, you can make sure that your designs can be viewed and applied by every user, regardless of their physical or cognitive impairments. Hi, my name is Tetiana Gulei and I'm a UX designer with five years of design and [Software Development](../../Topics/Software%20Development.md) experience. In this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course, you'll discover the process of creating accessible components in [Figma](../../Skills/Web%20Development/Figma%20(Software).md), including buttons, image cards, a navigation menu bar, and many more. You'll also learn how to apply components in your design project to speed up your working process. If you're curious about accessibility and creating inclusive experiences, let's jump in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (1)
> **CLI Commands:** make (1)
> **Tools:** figma (1)
> **Speakers:** - [tetiana] (1)

#### [What are accessible components?](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=0)** - [Tetiana] Let's talk about accessible components. Components are design elements that are reused across mobile and web interfaces. When designed with accessibility in mind, they significantly simplify the user interaction and also improve [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). Think about the website that you recently visited. Most likely it had a header menu with a few items that you could click on or some buttons that you could also interact with. These are the examples of web components that we as users see every day, and as a designer, it is important to plan out your process ahead before you start designing accessible components. A very common approach is to use Web Content Accessibility Guidelines which is an international standard used by designers, developers, and organizations to make their websites and other digital [products](../../Skills/Software%20Development/Microsoft%20Products.md) accessible. Today, we'll cover four main disabilities that are crucial while designing accessible components. They are vision, hearing, mobility, and cognitive. Vision is a disability that is relevant for a wide group of users. To make your component accessible, make sure that you apply a specific contrast ratio defined by [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md) Guidelines. To differentiate your content, use some patterns instead of just simply relying on colors. This could be text, visual elements, icons, or symbols. Finally, your components should be perceived with assistive technologies, such as screen readers and magnifiers that are commonly used by this group of users. Hearing is especially relevant
>
> **[1:34](https://www.linkedin.com/learning/designing-accessible-components-in-figma/what-are-accessible-components?u=76281980&t=94)** for design components that emit sounds, so make sure that your components could function without hearing them. As an example, you could just simply provide text alternatives, such as subtitles or captions, for the users who cannot really hear these components. Mobility is especially relevant for users who cannot use the mouse to interact with your components. Give them an alternative. Make sure that your components can be accessed from keyboards or other assistive technologies, such as voice control software or physical switch controls. Users with cognitive limitations have some issues with memory, learning, and attention. As a designer, you could guide your users across the interface with some standard icon, symbols, or text. Also, make sure that you avoid distractions so that the users could focus on their tasks and complete them with an ease. We definitely did not cover all of the Web Accessibility Guidelines in this video and you also don't need to know them all, only the ones that are relevant for your accessible components and their functionality. I still encourage you to check WCAG website for more inspiration and information about web accessibility.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md) (3), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=0)** - [Instructor] You might want to work alongside me through this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course. To simplify your learning journey, I've created a [Figma](../../Skills/Web%20Development/Figma%20(Software).md) file with color and textiles for you to apply to your accessible components. In this way, you don't have to think about choosing the right color and font settings. You can download the Figma file in the exercise files under this video. To open the file in Figma, it is important that you have a Figma account and that you are logged in. In your personal dashboard, click on import files, and select the earlier downloaded files from your folder. It takes a few seconds for Figma to process your file. When it's ready, you can click on Done. To open the file, simply click twice on it. And right here on the right side, you can see all text and color styles that we will later apply for our accessible components. Let me quickly show you an example of how to apply text and color styles. Simply let's create the frame with desktop dimensions. I'm going to [Zoom](../../Skills/Software%20Development/Zoom.md) it in and I will just draw a simple rectangle right here. So instead of going to fill as you would normally do, just to select your color, you can simply click on this icon that is called style and select the color styles from this file. Easy as that, you already have an applicable color that we are going to use later on. The same goes with text. If you would like to type in something, for example, hello, instead of changing the font settings, the size, and so on, you could again click on style icon and select
>
> **[1:38](https://www.linkedin.com/learning/designing-accessible-components-in-figma/style-your-components?u=76281980&t=98)** any of the styles that is available in the dropdown, for example, the header one. Finally, color and textiles should speed up your learning journey and your design work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (5), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **UI Navigation:** click on (4), open the (2), select the (2), dropdown (1)
> **Tools:** figma (5)
> **Exercise Files:** download the (1), exercise files (1)
> **Analogies:** for example (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Create your first component in Figma](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=0)** - [Instructor] Before we start designing accessible components, let me quickly explain to you how to create a component in [Figma](../../Skills/Web%20Development/Figma%20(Software).md) and how to manage it across your design file. In Figma, you can create components from any layers, groups, and frames. It is a good practice to have at least two layers that you can later convert into a component. Let me quickly show you an example. So in our shapes dropdown, let's select an ellipse, and by holding Shift, I'm going to draw an ellipse in my canvas. Let's supply a fill from our color styles and I will also type in some text. Let's also quickly change the text properties from our text styles. So the next step will be to align both of the elements horizontally and vertically. And to create a component in Figma is very easy. All you have to do is actually to go to the upper menu bar and hit on this quadruple diamond diagram. Easy as that, you just created a component. In your layer section, you can see that you have a master component, which is the first component that you ever created. It consists of two layers, which is a text and an ellipse shape. When you duplicate your component, you immediately create instances. And instances are the copies of a master component. They have an empty diamond shape in the layers panel. Components can extremely speed up your design process. As when you modify a master component's properties, then all instances get the same changes. So for example, if I select an ellipse,
>
> **[1:35](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=95)** and I would like to change this background color, you can see all the changes happening in my instances as well. The same applies to the text. If we rename our text, we also see this changes in our instances. So instead of manually changing the same elements through your project, you can achieve the changes just in one click. It contrast to main components, when you change the properties of an instance, other instances are not being affected. But what is actually happening instead is known as a property override. Property overrides can be applied to the instances to change text, fill color, stroke, and other shape properties. So you can see I changed the fill color right here, and let me modify the text of another instance. So we just created a property override of the text. So if I go back to the main master component, and I would like to change all the instances at once, you can see that the components of property overrides are not being affected, so which means that the second instance is not having the change color as the other ones. The same applies for the text. If I type it right here, you can see that only two instances have this change, but the third one did not have it because we just had the property override. You can of course keep modifying your instance to the way you like. You can modify the shape. You can also add some effects, for example. However, if you notice that you are not happy
>
> **[3:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-your-first-component-in-figma?u=76281980&t=190)** with the changes, you can always reset them. And to do that, you can easily click on this button that is called reset all changes. And then you have exactly the same properties as your master component. Another tip to know is how to find the master component in your project. It is especially applicable if you have a lot of instances, you work with multiple design pages, and you cannot find your master component to quickly apply some changes. And to do that, you can easily select any of the instances, right-click on your mouse, and select go to the main component. And easy as that, you find your main component that you can later work with. Finally, if you want to separate the instance from the main component, you can simply detach it. And to do that, just select an instance that you want to detach, navigate to the right menu panel, click on instance options, and click on detach instance. You can immediately see the changes in the layers group because it is not a component anymore, it is simply a frame. And right now you can simply modify this frame properties without getting affected by the master component. And easy as that, we just covered the basics of components in Figma.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (4)
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
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=0)** - As we learn the basics of creating components in [Figma](../../Skills/Web%20Development/Figma%20(Software).md), let's design accessible buttons. Buttons are the primary components that communicate actions that users can take, and they're usually placed across the website user interface. Usually the buttons as well as other components can have multiple variations. Think about different styling, size, alignments and so on. Figma allows us to group similar components into the container with the so-called variants, and each variant has its unique properties that you as a designer can define. In this project, we are going to create different variants for our buttons. So we are going to work with two styles which are a primary button and also secondary button. And for each of the styles, we'll have four different states, which are normal, hover, click, and disabled states. When you open Figma file you can still reuse exactly the same file where we have our color and font styles. I encourage you to go to the pages section and hit on the plus button where you can create a new page. And in this page you can keep designing your accessible components. So every button can be easily drawn with a rectangle shape. So let's select the rectangle from our upper menu bar and draw the shape right here in our canvas. You can also set its dimensions right here in the right menu panel. I will change it's with the 168 pixel, and the height to 52 pixels. I will also modify the corner radius to the value of 50 pixels so that our button is smooth. And of course we will go to the fill, and select one of the colors from our color styles. In this case, it's going to be the bright purple color. Also, every button has a label which describes the action
>
> **[1:36](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=96)** that the user can take. So let's hit the text tool and type in some text. In this case, we are going to work with 'get started', called 'action'. I will also increase the width of the text field. And make sure that the body text style is selected from the dropdown of our text styles. Also, make sure that your text is aligned exactly in the center. So the final step will be to select both of these elements and align them horizontally and vertically. Don't forget to group both of these elements for the easiness of use. To group the elements, you can use control plus G shortcut. And a good practice is to rename our components according to the variance property. So variance property can have also hierarchy, and to separate this hierarchy you can achieve by typing in slash. So let me show you how it works. So let's just type in 'button primary ', because this is our style, and by slash we're going to separate different states of our primary button. So in this case we're going to call it 'normal'. Let's duplicate our button three times so that we can work on modifying the styling for three different states. To copy the buttons, you can do with the control plus D shortcut. So the hover state means what happens to the button visually when you hover over with your mouse. And for hover state, I like to add some effects, such as drop shadow. So hit on the plus icon and add a drop shadow. So by clicking on effect settings,
>
> **[3:09](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=189)** you can modify the settings, such as the position of the shadow, also blur, spread, and its colors. So let's just change some settings. We're going to modify the Y value to six, and also our blur is going to be decreased to the value of 10. Also, let's hit here on a color. And I would like to select exactly the same color as my button fill is, but you can see that the shadow looks just a bit too much, so a good practice is just to decrease this opacity to the value of 40% as an example. But you're welcome to play around with the styling to achieve the style that you want. Let's also quickly rename this button. So we are going to change its state to 'hover'. And for click and disabled, we are going to keep it easy because we are just going to modify the background fill. So in this case, we're going to select the purple click style, and for disabled is going to be the light gray. Also, let's rename the layers for the simplicity of our work.
>
> **[4:17](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=257)** Perfect, our primary buttons are ready. We are not going to convert them to components yet because I would like to also design secondary buttons just to show you how it all works properly. So let's duplicate our primary button with a normal state and we're going to create a secondary button which is not that important with the action for the user as a primary button. So usually secondary buttons should be not too much with a bright color. So instead of having a bright purple fill we are going to change the fill color to white and also add a stroke. And the stroke color is going to be dark red that you can select from the color styles. Let's also adjust the stroke width. And of course we also have to change the color of our text. Easy as that, we just created a basic secondary button for our project. Let's also name the text label because for example, we would like the user to ask for a free demo. Let's not forget to rename this layer. So it's going to be also normal state, but the styling of the button is secondary. So let's just distinguish that by naming it 'button secondary'. Let's duplicate the button three times so that we can modify the styling for each state. So for hover effect, we are going to create a shadow effect as well. It's going to be exactly the same shadow as we have in our primary button, but instead of creating the same effect from scratch which is also possible, we will go back to this hover button and click right here
>
> **[5:51](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=351)** on this style and create a new style out of this effect. So let's just name it 'button shadow'.
>
> **[6:03](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=363)** Perfect, and right now, instead of creating an effect from scratch, we will just go to our effect styles and apply button shadow, which is exactly the same as the one for the primary button. Perfect, for our click and disable states we will also modify the colors. So for click state itself, we just going to modify the rectangle stroke to the color that is purple, click. And for disabled, we will modify both of the selection colors to the light gray to be consistent with our primary button. Let's also make sure that our layers are renamed properly.
>
> **[6:49](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=409)** And finally, it's time to create our components. So let's select four of the buttons for our primary style. And instead of hitting on this quadruple icon, we are going to open the dropdown, and we are going to also click on create component set. And immediately you can see the container that has just been created with four variants. And this variance indicate four different states of our primary button. You can also check the properties of your variants which are displayed right here. If you click on the settings menu you can also rename the property, this is not mandatory, but imagine that you have 10 different properties, then it's quite wise to give a proper name to it. Let's repeat the same action with our secondary buttons. We are going to create a component set and right here we have four more variants with exactly the same properties but with different styling.
>
> **[7:44](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-buttons?u=76281980&t=464)** And if you would like to find your components, you can navigate to the assets panel and find your components right here. So simply drag them to your working area. Here we have a primary button and the secondary button. And the cool thing about variants is that you can immediately change its states with one click, so you don't have to redesign exactly the same state multiple times, especially if you have a lot of buttons in your design project. So the same here, you can immediately select the states for your primary button, and it's a really amazing feature of Figma that you should always apply while creating accessible components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (4)
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
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=0)** - [Instructor] Icons are a visual representation of an object or action using [User Interface Design](../../Skills/Web%20Development/User%20Interface%20Design.md). Accessible icons usually come along with the text labels to ensure that the users immediately understand their purpose and meaning. But in some cases, icons can also be self-explanatory, especially when it comes to social media icons. In fact, you can design icons from scratch. But very common practice between designers is to reuse the [Figma](../../Skills/Web%20Development/Figma%20(Software).md) plugins, with the right existing icons libraries. And right now, I'm going to show you one of the plugins that we are going to work with. Make sure that you go to your personal dashboard, and instead of being right here in your personal space, you need to navigate to the community section. In the community, you have a bunch of different plugins, design system, visual assets, designed by different creators from all over the world. But right now, let's simply type in the name Feather Icons. This is the plugin that we are going to work with. Make sure that you are in the plugin section, and you can immediately see this plugin coming out the first in a list. All you have to do is either click on it, you can read more information about that, read some comments. But important thing is that you have it installed on your Figma profile. So make sure that you just try it out. You will immediately be redirected to the project space, where you can just click on run, and test the plugin for yourself. When you are ready, make sure that you are back in your working area. All you have to do is to right click on the mouse and go to the plugin section. And right here you should see better icons plugin. Let's click on that.
>
> **[1:34](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=94)** And as you can see here, a bunch of different icons that you can use for the project. But today we are going to work with social media icons. So let's just type in [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). When you click on the icon, you can immediately see it appearing in your working area. Let's also add another icon for [Facebook](../../Glossary/Service/Facebook.md). And a third one for Twitter. As you can see right now, it looks a bit messy, but we are just going to separate icons from each other. What you can also do is to select all of these three icons, go to the design section, select tidy up, and type in some bigger value, so that you have more space between all the elements. So the great thing about this icons is this is all our vector shapes, so we can easily change their characteristics. So let's select all of these icons and we're going to modify its stroke value to one half. And we'll also apply a different color from our color styles. Let's select the dark gray color. So this is going to be our normal state. And to create a hover state and a click state, we are just going to duplicate all of this icons by the sequence Control+D. You can also use Control+C, Control+V if you find it easier. And hover state is just going to have a different color. So all we have to do is to go to the selection colors, and change the color to the purple click. Remember that before we create variants and component sets,
>
> **[3:09](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=189)** it is a good practice to rename our layers beforehand. So let's select each of these layers one by one and type in its state. So we are going to start with normal state. Let's repeat the same for the other icons. Don't forget to add the dash right here. And the same action will just repeat for our hover click icons. I'm just going to name them, click.
>
> **[3:45](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=225)** And right now, after you are done with renaming your layers, let's select both of the relevant groups, navigate to the component dropdown, and click on create component set. So we immediately created a variant for our first LinkedIn icon. The same action we are going to repeat with Facebook icon and also with Twitter icon.
>
> **[4:08](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-accessible-icons?u=76281980&t=248)** And as easy as that, we already created accessible icons. You can also find them in the asset panel. So right here, you can just drop them down in your working area. And in the variance menu, you can easily change the property from normal to click state, and apply the certain state that is relevant to your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Facebook](../../Glossary/Service/Facebook.md) (2), [User Interface Design](../../Skills/Web%20Development/User%20Interface%20Design.md) (1)
> **UI Navigation:** click on (6), go to (4), navigate to (2), select the (1), dropdown (1)
> **CLI Commands:** make (4), find (2)
> **Tools:** figma (2)
> **Best Practices:** good practice (1), don't forget (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Accessible radio buttons and checkboxes](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=0)** - [Instructor] Radio buttons and check boxes are elements for making selections. Usually, radio buttons allow the user to select one item from the predefined list, while check boxes let the user choose multiple items. To make both of the elements accessible, the item should be focusable, so that the user knows whether the checkbox or radio button is selected or deselected. It is also wise to add the relevant text labels, so that the user can get more context about the available choices. In [Figma](../../Skills/Web%20Development/Figma%20(Software).md), we are going to design each of the elements with three different states, which are normal, click and disable. Let's start with designing radio buttons. All you have to do is to navigate to the shapes drop down and select on ellipse. By holding shift key, we are going to draw an ellipse with a width and height of 20 pixels.
>
> **[0:51](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=51)** Let's change this field to white and also the stroke with a dark gray color from our color styles. It was easy, wasn't it? So, the next step is going to be duplicate this ellipse by control plus D shortcut and move it right here. Our click state should be more attention grabbing, so we are going to change its stroke color to purple bright. I will also duplicate, again, the same ellipse and I will change its fill to the bright purple color. Make sure that you select scale and we are also going to decrease its size to 12 pixels, width and height. By selecting both of the layers, we should align them horizontally and vertically. So easy as that, we just created a click state for the radio button. Finally, let's copy, again, the same element. Let's create a disabled state, which is going to be quite easy because all we have to do is to change the fill and stroke colors. We are going to select the light gray color.
>
> **[2:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=126)** Also, if you develop a design system with accessible components, it is wise to have some variations. So, we are going to select all of these three states, duplicate them, and provide an alternative. So, we are going to have an element with text labels and it's going to be very easy because we will just select the text tool and type in here some text, which is, for example, label. From the text styles, you can select body text, and just place it exactly in the center of your ellipse. The distance between both of the elements should be 12 pixels. Also, sometimes it happens that your label is going to have more text than it is right now. So, let's just move the container and we're going to extend the text area for the future user who is going to type in some text. Let's duplicate the same text to the remaining states.
>
> **[3:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=185)** Looks great. Let's group all of these elements so that we can create the component sets. To group the elements, just right click on your mouse and click on group selection. You can also group the elements with a sequence of control plus G shortcut. And remember again, it's very important that we just change the layer's name, so that we can get a proper variant with proper properties. So, the first one is going to be radio button normal.
>
> **[3:43](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=223)** That will have radio button click. And finally, radio button disabled. The same goes for this group. Let's just call it radio button Label.
>
> **[4:06](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=246)** Click is going to go right here. And finally, disabled. Easy as that, we are going to select three relevant components to each other, go again to our components menu and create component set. Let's repeat the same action with the radio buttons that have text labels. Perfect, we have variants. Let's check in our assets. You can see a radio button that you can drag to your working area, and the properties have different states that you can easily change. And the same goes with our label. You can play around and change its state to the one that you need for your design. All right, perfect. Let's move on to creating our check boxes. So, the idea is quite simple. We are going to have exactly the same approach. Just instead of using an ellipse shape, we are going to work with rectangle. So, let's select a rectangle and draw exactly the same shape with the width and height of 20 pixels.
>
> **[5:12](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=312)** Let's also modify the corner radius to the value of two, so our rectangle radius is smoother. We are also going to have exactly the same fill color, that is white, and the stroke color is going to be dark gray. So, this is our normal state. Let's quickly copy the rectangle and we are going to create a click state, which is going to be quite interesting because we are going to change its fill color to bright purple and remove the stroke. We don't need it right here. The next point is to add a check mark, so we can either draw it with a pencil, but let's just go, again, to our feather icons that we used earlier in this course. And let's search for the icon that is called a check mark. So, this is the perfect option. Let's paste it into our project. I'm going to ungroup this frame. You can do that by control shift G sequence. And by selecting the scale, let's decrease its size. I'm going to put it exactly right here inside of my check box. And it's also smart to change its color. So, let's make sure that it's all properly aligned, horizontally and vertically, and let's group both of the elements with a shortcut of control plus G. As you can see right here in the layer section, our group is outside of our frame, so let's put it inside, just for the convenience of our work. Finally, we are going to create a disabled state, so let's copy this group, move it a bit down, right here in our project area. And all we have to do is, again, to change the fill color to the light gray.
>
> **[6:45](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=405)** Perfect. So, we have three different check boxes with three different states. Let's copy all of them again and add some text labels. So, we can do exactly the same approach as with the radio buttons. I'm just going to type in some text called label and let's also change the text style to body text. So, we are going to have exactly the same distance between both of the elements, which is 12 pixels. And let's also extend its text area.
>
> **[7:21](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=441)** We can also [Zoom](../../Skills/Software%20Development/Zoom.md) out a bit and just to see, so that the text area matches the text area of our radio box. We can zoom out just to see that our text area has exactly the same width as the text area of our radio button. You can see it exactly with the red crosses of the disabled radio button. Perfect, I'm going to copy this text twice and make sure that it's aligned to the center of my checkbox. And again, let's select both of the elements and group them. Finally, an important part is to rename our layers. Let's call our first components checkbox normal, which means it's the normal state of the checkbox. Then we have checkbox click and checkbox disabled. The same goes to the other components set that has text labels. Let's just call it checkbox label slash normal.
>
> **[8:45](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=525)** That will have a click state
>
> **[8:53](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-radio-buttons-and-checkboxes?u=76281980&t=533)** and disable. Perfect, the most fun part is right now, just to convert everything to the component set. We have three similar components that become variants in the component set. And the same goes here, we are just selecting three of these elements and convert them to variants. If you want to check again if you did the right job, you can go to the assets panel and check if new components appeared right here. And of course, you can drag them to your working area. Try to change properties, to make sure that these accessible components meet your expectations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (2), [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=0)** - [Instructor] Images make website content more pleasing to watch, and easier to comprehend. In general, images can be either decorative or descriptive. Descriptive images explain the text content in a visual way so that the provided information is clear to the user. In contrast, decorative images usually serve no urgent purpose, besides adding some colors and textures to the webpage. In this exercise we're going to create three accessible image cards with descriptive images. You can either use your own images from your gallery or download the image assets from the exercise files under this video. First, let's throw the area where our images are going to be displayed. I'm going to hit a rectangle in [Figma](../../Skills/Web%20Development/Figma%20(Software).md) and make sure that its dimensions are 896 pixels and 508 pixel of the height. We're also going to change the corner radius to the value of 40 pixels, because as you remember we applied similar settings to our buttons, check boxes and other components that also have smooth corners. Let's add a drop shadow to this shape. We're going to go to our styles and apply the button shadow that we earlier created through the scores. However, I think that the drop shadow is a bit too much. Right now, It's too bright, but you can easily unpack the style by clicking on detached style button. And right here in the added settings, we are going to change the color of the shadow to the grayish color, and also decrease the opacity to the value of 30. Perfect. Let's draw another rectangle right here
>
> **[1:34](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=94)** and also have the corner radius with the value of 40. I will immediately color the shape to the bright purple color so that you can see the contrast between both of the elements. We'll also decrease the opacity of this element to the value of 30%. Let's also make sure that this rectangle is under our image so that it doesn't cover it. Finally, let's also check that the distance between both of the elements is 34 pixels. You can see the distances by pressing on alt key on your keyboard. I will again duplicate this shape by Ctrl + D shortcut and place it right here. I will also extend its width and change the pass through opacity to 100%. Here we'll also make sure that the distance from the bottom is 34 pixels, and from the side it has 40 pixels. Perfect. So the first canvas for our descriptive image is ready, but we are going to also create two more cards that we are going to reuse in our webpages. So I will hit the rectangle again, and the second image will have dimensions of 712 pixels and 566 pixels. Let's change the corner radius again to the value of 40
>
> **[3:09](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=189)** And let's apply a drop shadow again. But first of all, to speed up our process we can again create a new effect styles. And in this situation, we are going to name it image shadow. Let's apply this effect to the second image card.
>
> **[3:32](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=212)** And finally, I'm going to duplicate the shape and create the third image card with different dimensions which are going to be 570 pixels of width and 567 pixels of height. And right now what we have to do is actually to add our images. So you can do it by both ways. You either click on a shape and go to the fill. And instead of having a solid fill just open and drop down and select the image. So right here you can choose an image and also modify its settings if you would like to. So, let's select this image and click on open and easy as that we already have an image in our rectangle shape, so that was very easy. Let's also group all of this element so that we have the first card and we're going to name it image card one. Finally, let's also add two more images to the shapes and let me show you a very cool trick in Figma. All you have to do is to hit Ctrl + Shift + K and it immediately opens the folder where you can browse for your images. Let's select the two remaining images right here and click on open. And right here we can click exactly on the shapes where we want both of the images to be displayed. So first and second, and it was extremely easy and I really like this feature and I recommend to use it in your design process. Let's also, rename the image cards. And right here we're not going to work with variants,
>
> **[5:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=310)** we're just going to hit on the quadruple diamond to create a component for each of our image cards.
>
> **[5:22](https://www.linkedin.com/learning/designing-accessible-components-in-figma/creating-an-accessible-image-card?u=76281980&t=322)** And let's quickly check if these components appeared in our assets panel. And here we can see three accessible image cards that we can later reuse in our webpages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (2)
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
> **[0:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-create-accessible-input-fields?u=76281980&t=5)** - [Instructor] In this challenge, you'll create accessible components for input fields. These components are essential for users to enter their personal data on webpages. You've definitely interacted with input fields while trying to log in into the system or filling in some personal information in online [Forms](../../Skills/Web%20Development/Forms.md). In this challenge specifically, focus on creating two different component sets, which are one line and multiline input fields. For each component set, think about different states, which are normal states, hover, click, and disabled. To properly create your component sets with variants, make sure that you name your layers accordingly by using the hierarchy rule. Finally, always keep in mind accessibility guidelines while creating your components. An example is to include a text placeholder in your input field, and also to make sure that the contrast ratio between your text and background is high. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **CLI Commands:** make (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat synth music) (1)

#### [Solution: Create accessible input fields](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=0)** - [Instructor] Let's start with a one line input field. By default our component is going to have three different states which are normal, click and disabled. To create a component, let's quickly select a rectangle and draw the shape in our canvas. I will also change its dimensions to the value of 472 by 52 pixels. Let's also modify the corner radius value to the value of 30. The next step will be to add a stroke and select the color which is dark gray. And let's also modify the fill color of the component to white. Then we are going to add a text label which is going to be located above our input field. To do that, I will select a text tool and type in here text label. Make sure that you select the body text as a textile in your dropdown. We will also extend the text area in case a text label is a bit longer. Also, let's make sure that the distance between two layers is exactly eight pixels. I will also move the text label a bit to the left side. Then we are going to duplicate this layer with Control + D shortcut and place it exactly in the middle of our input field. To make sure that both of the layers are aligned properly. Let's align vertical centers of both of these layers. This is going to be our text placeholder
>
> **[1:33](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=93)** to let the user know which data they can input. We will change the content to enter your text. Also, it's important to change the fill color to light gray and also let's make sure that the tax label color is not black, but it has a dark gray color. And this is how we just created the first state of our one line input field. I'm going to select all of the layers and group them with a Control + G shortcut, and then we'll also go to the layers and rename the group. I will name it as one line slash normal state which is important to create different states of our variant. And then we are going to duplicate this group two times. Where we will change the styling of each state. While we click on the component. We immediately have a text place holder where we as users can immediately know that we can enter our text. So I will change the color of this text layer to purple click and I will also apply exactly the same color to the amplified stroke. Let's also not forget to rename the layer and specify its state. Finally, let's style our disabled state. We are going to modify the fill color from white to light gray. I will also unpack the style because I would like to have only 30 percent of the color. This is important so that the user can see the text place holder.
>
> **[3:07](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=187)** We'll also modify the stroke color to the light gray. And of course, let's not forget to rename the layer as well.
>
> **[3:21](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=201)** Perfect. We are halfway through our challenge so let's select these three groups and duplicate them. Right now we are going to select three multi-line input fields. Which are going to have exactly the same styling but they're going to have a different height. So important part is that we will select our group and make sure that we select rectangle and instead of having a height of 52 pixels we are going to change to the value of 181 pixel. This is how easily we create a multi-line input field. Let's repeat exactly the same action with the two remaining components.
>
> **[4:04](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=244)** Also, let's not forget to rename our component because we're going to create a totally different component set with a multi-line variants. So instead of having a one line as a name I'm going to change it to multi-line. The same name. I will apply to two different groups.
>
> **[4:30](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-create-accessible-input-fields?u=76281980&t=270)** Perfect. And now we can create our accessible components. So I will select this three groups and navigate to the component dropdown and click on create component set. Right here we have a one line component with three different states which you can see right here. Let's select three remaining elements and also create another component set. And here we have another multi-line component set with three different states. If you would like to make sure that you've done a correct job just navigate to your asset panel and check if your component list has been updated. In this case, we see new components right here which we can track in our working area and we can also play around with the properties of each component and change them to different states. Easy as that. We just completed our first challenge.

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
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=0)** - A header is a top part of a website which lets the user navigate across the different web pages. Usually a header consists of a company logo a few menu items and a button with which the user can interact. Accessible headers have a clear and consistent structure that is reused across the web pages. To create a header component in [Figma](../../Skills/Web%20Development/Figma%20(Software).md), we are going to work with a new concept of nested components and it means that we are going to use already existing components to create our header. It sounds a bit complicated, but it's definitely not. Let's immediately jump in and I will show you what I mean. When I create a header I start with setting up a layout grid. A layout grid gives me some sort of guidance on how to align my elements within the header. So let's hit on the plus icon in the layout grid section and we are going to select columns. A very common columns count in the webpages is 12. Let's also modify the margins to the value of 140 and the gutter value, which means the distance between the columns itself, is going to remain 20. Next, let's hit the rectangle and draw our shape in the canvas. Make sure that it's width is exactly 1,440 pixels and the height has the value of 88 pixels. I will immediately change the fill to the base color. Next, we will have to place a company logo. You can either use your own logo if you have it or you can also download the SVG vector file from the exercise files.
>
> **[1:35](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=95)** Let's hear the key combination control shift K and let's select our logo from the folder where it's located. I'm going to place it right here in the canvas and as you can see, it's already right here. So this is when we start to use our layout grid. So I'm going to make sure that the logo is actually touching the beginning of my first column, and also I will select both of the layers and align them so that the content is displayed exactly in the center.
>
> **[2:13](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=133)** Then we're going to type a few menu items which are going to be features, to start. Let's make sure that the textile is correct. I'm going to work with body text. I will duplicate this text three times and change its content, so it's going to be about section then case studies and contact. Also, let's select four of these layers and modify it's fill to dark gray. You do not see the difference between black and dark gray immediately, but it's definitely there. I will also tidy up all of my elements and make sure that the distance between them is 78 pixels. Let's also group these elements by hitting control + G shortcut and place it right here in the center of our menu header. Finally, we have to place a button with a certain call to action. We're not going to draw a button from the beginning because we already created different variants of the buttons that we can use right here so all we have to do is to go to the assets panel and find our buttons. This is what I meant with nested components where we are already reusing the already existing component which in this case is a button to create the nest component. I will also make sure that the button hits the margin of the last column,
>
> **[3:48](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-header-menus?u=76281980&t=228)** and also that the distance between the group is also 78 pixels to keep it consistent. Perfect. We are almost done. Let's select all of these layers and align them vertically. Let's select all of these layers and align them with vertical centers. And finally, we can hit on quadruple icon to create a component. Let's also rename this component so that we know that we work with the header and as you can see here in the layers panel which is created a master component for our header. You can also see how it looks like without the layout grid so here you can have a better impression of the colors used and also the alignment between the elements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (1)
> **CLI Commands:** make (5), find (1)
> **Definitions:** is a  (2), means that (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Env Vars:** svg (1)
> **Tools:** figma (1)
> **Speakers:** - a (1)

#### [Accessible footers](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=0)** - [Instructor] Now it's time to design an accessible footer. In general, a footer is an area at the bottom of each webpage that is being reused across the website. The information in footers may include company data, copyrights, hyperlinks, and social media links. To make our footer accessible, we need to make sure that the shown data has a high-contrast ratio with the footers background. All right, so we are back in our [Figma](../../Skills/Web%20Development/Figma%20(Software).md) file. Let's select the frame and make sure that the layout grid is activated again. And the reason for that is because we want our content inside of our footer to be aligned in the same way as the content in our header component. Let's hit the rectangle and make sure that its dimensions are 1,440 pixels by 372 pixels. I will also immediately align it to the center. So in this project, the footer will have exactly the same color as our header component. So let's quickly go to the color styles and change the fill to the beige color. All right, and this is where our layout grid will become extremely handy because we are going to split our content in five columns. So the first column is going to be a company logo and a short company description. So let's open again a file browser with the shortcut of Control + Shift + K and import our logo. I will just hit it exactly outside of my frame, but we'll also manually drag it inside of my footer area.
>
> **[1:40](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=100)** So let's make sure that the logo is aligned to the beginning of the first column, and also that the distance between the logo and the top of the footer is 60 pixels. The next step will be to create a container with a text where we'll type a short description of our company. Make sure that the text style is chosen as a body text and also that the fill has a dark gray color. Perfect, and we'll also make sure that the distance between our logo and text is 20 pixels. Then I will copy this text with the Control + D shortcut again and move it right here to the bottom. This is where we are going to type in our copyright statement. And instead of having a fixed container size of our text, we'll select auto width. And right here, you can see that our text is one pixel slightly not aligned, so we'll just move it a bit back. This is perfect to use our layout grid. And right here, I see that everything is perfectly aligned. Perfect, so now we have four columns remaining where we'll type in some hyperlinks, company contact information, and social media links. Let's type again here the header, which is called Help. I will immediately change the text style to the header three, and we'll also make sure that this element
>
> **[3:14](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=194)** is aligned with my layout grid. Perfect. Let's also make sure that the distance is 60 pixels between the top of the footer and this header. So we are going to use two layout grid columns per each text column. So let's duplicate this header a few times.
>
> **[3:44](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=224)** And let's also make sure that everything is properly aligned. So now we'll have to rename our headers to, for example, features, company, and follow us.
>
> **[4:01](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=241)** Great, so now we are going to grab a body text and duplicate it again and place under the help header. So right here, we are going to type in another content, which is about us, which will serve as a hyperlink where users can click and navigate to another page of our website. And let's, again, duplicate these hyperlinks a few times where we are going to type in other hyperlinks, which is pricing and case studies. Great, now we just selected three of this layers and duplicated them again, and we are going to slowly move them under features and also under company. And all we have to do is, of course, to change the content in these text layers.
>
> **[4:58](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=298)** Great, and the remaining thing to do is to add our social media icons in the last column. Let's quickly go to the assets panel and type in [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) to find our first icon that we are going to drag right here under the follow us headline. I will immediately [Zoom](../../Skills/Software%20Development/Zoom.md) in right here and make sure that this icon is properly aligned. The distance between the icon and the header should also be 20 pixels. That way we'll also add [Facebook](../../Glossary/Service/Facebook.md) icon that we are also going to position exactly next to our LinkedIn icon. Make sure that the distance is 12 pixels. And finally, we'll also have Twitter, which will also have exactly the same distance of 12 pixels. And I also wanted to mention this is where we, again, applied nested components approach where we just reused already existing component icons to create a footer. All right, let's quickly deactivate our layout grid to see how our footer looks like without the grids. So if you're not happy with your result, you can, of course, play around and add more data, or for example, change the layout position. But if you're happy with the result, let's go back to the layers section, select our elements, and hit the create component button. So this is how you see that we, again, created another component. We will quickly rename that so we know to what we refer. And if you open this component, you can see all of the elements within it
>
> **[6:31](https://www.linkedin.com/learning/designing-accessible-components-in-figma/accessible-footers?u=76281980&t=391)** that we just created in this video. You can also go back to the header component, open it up, and see the different elements that we reused to create this accessible component.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (1), [Zoom](../../Skills/Software%20Development/Zoom.md) (1), [Facebook](../../Glossary/Service/Facebook.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=0)** - [Instructor] Today we'll discuss two [Figma](../../Skills/Web%20Development/Figma%20(Software).md) plugins that can help you validate whether your components are accessible or whether you need to make more changes to your components to meet accessibility standards. In Figma, make sure that you are in a community section where together we are going to search for our accessibility plugins. Let's quickly go to the search bar and type in contrast. In the plugin section, we will search for our first plugin that will help us with accessibility. Contrast makes it easy to check the ratios of colors in your design process so make sure that you click on try it out so that the plugin is installed on your Figma account. In our accessibility project, we are going to choose one of our components and check for the contrast ratio with the plugin. So right here I'm going to choose one layer. Specifically I'm curious to see whether the text has a high contrast ratio with the background. So let's right click on the mouse and go to the plugins menu and search for the contrast plugin. Here we can immediately see that the layer meets the contrast ratio standards because it has the contrast ratio value of 18.41, and it also specified that it passes on double A and on a triple A standard. You can also select other layers to see whether they meet accessibility guidelines regarding the contrast ratio. For example, you can also select vector shape and we can see that it passes on a double A contrast standard, however it fails on a triple A contrast standard. So here you can make your conclusions
>
> **[1:35](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=95)** on whether you need to change your component to make it more accessible or whether you can live it as it is. The next plugin we are going to search for is called Color Blind. Let's go again to the plugins section and select this plugin. So colorblind allows you to view your designs in eight different types of color vision impairments. Make sure that you click on try it out. So you again install this plugin on your Figma account.
>
> **[2:12](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=132)** And to quickly show you how the plugin works, let's select the footer component that we created together, and click on the plugins and search for color blind. Here, you can also deselect some types of visual impairments if you would like to see only specific ones, or you can also select all of them just to see how it looks like for eight different visual impairments. When you are done, click on create views.
>
> **[2:42](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=162)** So here we have two different variations of our footer component. Let's quickly [Zoom](../../Skills/Software%20Development/Zoom.md) it in. We can see that colors are different, but this is how people with visual limitations can see our component. But still the important part is, that their contrast between text and background is so good that even with visual impairment our footer can be still understood by users.
>
> **[3:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/figma-plugins-for-accessibility?u=76281980&t=190)** So I encourage you to use both of these plugins to check your components on accessibility aspects. This is important to make sure that all users have inclusive and accessible experiences while checking your designs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (4), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=0)** - [Instructor] Finally we're finished creating accessible components, and now we're going to reuse them in our webpage design. We will create a homepage with accessible components from scratch. So make sure that you follow along. In your [Figma](../../Skills/Web%20Development/Figma%20(Software).md) project, first of all, let's select a frame, and also make sure that we select a desktop dimension. I will immediately extend the height of my frame because we are going to create multiple sections. Then we'll also add a layout grid with exactly the same dimensions that we used earlier through this course. This is crucial for us to align our content within the layout grid itself. And now this is where the fun begins. Let's quickly go to the assets panel and find all of our components. And to start, we are going to drag a header component to the top of our frame. Let's quickly align it to the center and also to the top of the frame. And here we are going to create a hero section which will consist of some text layers, buttons, and an image card. So I will quickly select a text tool and type in some headline. Make sure that you select header one as a text style for this header. And you can immediately see that the text is so big that it immediately takes all space in our frame. So we will just quickly drag the container of this text to the middle, and also make sure that the distance
>
> **[1:32](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=92)** between our headline and the header is 150 pixels.
>
> **[1:41](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=101)** Then we'll type in some basic description of the product right here. Also, make sure that you select the body text as your text style, and align it properly to the left side. Let's also make sure that the distance between two layers is 24 pixels. And I will also decrease the container width to make sure that everything is properly aligned. Then we'll add some buttons so that the user can make some actions. So it's going to be a primary button together with the secondary button right here. So let's align it to the center to each other and make sure that the distance between them is 16 pixels. We'll also make sure that the distance between the buttons and the text layer is 30 pixels. Perfect. And from our image cards, I will use the image card two and place it exactly here to the right side. I will also align it to the center of my layers from the left side and make sure that the distance between the header and the image is 67 pixels. Maybe you also notice that our image goes outside the layout grid, and this is totally fine. The important part of the layout grid is that the all crucial information, such as text, hyperlinks, input fields, and so on, are placed within the layout grid. And now let's move on to designing another section of the webpage. So I will just simply duplicate the headline, make sure that it has the header two as a style.
>
> **[3:15](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=195)** And also I will detach the style quickly because I would like to use the auto width of the text container instead of having the fixed width. Let's also align this text layer to the center.
>
> **[3:32](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=212)** The distance between the first section and this headline is going to be 100 pixels which is very common distance to separate two sections. Also, I will duplicate this body text, make sure that it's aligned to the center, and also type in another feature of the product. Right here I will extend it a bit because I would like to have only two rows of my body text, and also I will make sure that it's properly aligned to the center. The distance here will be also 20 pixels between both text layers. Great. And we'll also apply another image card that we have in our assets panel, and this is going to be image card number one. So we'll simply drag it right here. Make sure that the distance between the text layer and the image is 40 pixels, and just simply align it to the center. Easy as that we already created two sections of our homepage. Then let's go again to our assets and drag the image number three. I will align it to the left side of my layout grid and make sure that the distance between both of the layers is 160 pixels. Then I will grab again this layers and simply duplicate them because we are going to reuse almost exactly the same layout as in our hero section.
>
> **[5:10](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=310)** But the only difference is that we will again reuse the header two style instead of having header one, and also decrease the container width. We will also change the text content. And make sure that the distance between both of the layers is 20 pixels again. And right here we'll have also 34 pixels. And to make this section more interesting I'm going to change the background color. So I will just simply draw a rectangle shape, change the fill color to beige, and also I will make sure the rectangle is placed on the bottom of the layers. In this way we can easily see all of our important content. You can also make sure that it's all aligned so the distance between the image and the size of the rectangle should be 50 pixels. Perfect. We are almost there. So the last thing we have to do is to include our footer at the bottom of this frame. As we're going to really have space, we will just select the frame and extend its height. And in assets, the same as with the header, we will simply drag our footer. And I will align it to the center, and also make sure that it's aligned to my last section.
>
> **[6:44](https://www.linkedin.com/learning/designing-accessible-components-in-figma/create-a-simple-web-page-with-figma-components?u=76281980&t=404)** And the last touch is to remove the remaining area of my frame. Let's hide our layout grid just to see what we just created. I think it looks really great. And also we don't really spend so much time on redesigning everything from scratch, and everything looks also chic. So this is the basic example on how you can use accessible components to create accessible webpage for your company, for your portfolio, or just for yourself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (1)
> **CLI Commands:** make (21), find (1)
> **UI Navigation:** go to (1), select the (1)
> **Tools:** figma (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Design a contact page](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-design-a-contact-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/challenge-design-a-contact-page?u=76281980&t=0)** - [Instructor] I challenge you to design a contact page by reusing other accessible components from the assets panel. And for this challenge, you can use all your creativity. Make sure to also apply the accessible components that we did not use yet in a homepage design, but still stay critical about which components are important for your users to show and to interact with. If you need some inspiration, just look again at the homepage design that we created earlier in this course. Good luck and have fun.

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
> **[0:05](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=5)** - [Instructor] Right now I'm going to show you how to design a contact page with accessible components. First of all, let's select the frame and let's make sure that we apply desktop dimensions. Also, let's add a layout grid with exactly the same settings that we use for our homepage design to make sure that our alignment and styling are consistent. We will select columns and make sure that the count value is 12. And let's also change the margins value to 140 pixels. Then let's quickly check our assets panel and start using our accessible components to create a design. So first of all, I'm going to find my header and I will drag it exactly into the working area. Let's also align it exactly to the center and to the top of the screen. Then we are going to create a headline to specify that this is a contact page. So let's select a text tool and type in here contact. Let's quickly modify the fill color to dark gray and also make sure that we apply H2 as a text style. Now we are going to move it a bit to the side to make sure that the headline is aligned with the layout grid. And let's also decrease the distance between the header and the headline to the value of 60. The next step will be to use our input field components. So let's start with the one line input field, which we're going to place exactly under our headline. And we will have the distance of 24 pixels. So I'm going to go to the variant properties
>
> **[1:39](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=99)** and make sure that I select the click state, because I would like to show that the users can click on this input field to enter their data. Let's also modify the text label text to your email. Then we are going to also use a multiline input field, which we will place exactly right here and I will change the text label to the text which says your message. Perfect, I also would like to add some check boxes, so let's go to the check boxes with label and locate them exactly right here in the bottom. Let's also decrease the distance to the value of 24. So first label is going to say that I will agree with terms.
>
> **[2:29](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=149)** Let's duplicate this component with a control+D shortcut and we will have the distance of 14 pixels. Right here, I would like to change the text to make sure that the user can subscribe to my [Newsletters](../../Skills/Web%20Development/Newsletters.md). And also for the variety, let's change the state of the component to the value of click. Finally, it's important to have a call to action, so let's track the primary button and place it under our last checkbox, and it'll also have distance of 24 pixels. But instead of get started, I also will change text and it'll say send. I think it makes more sense than just to say get started. All right, we're almost there. To add some visual touch to this page, let's also select an image card, which we are going to position right here on the right side of the screen. Let's also make sure that it's aligned properly to the right side of the layout grid. And also let's decrease the distance to the value of 60. Perfect, not the only thing we have to do is to add our footer, but I will extend slightly the height of the frame because I think we will not have enough of space. So let's also find our footer, which we're going to drag exactly right here in our canvas and I will align it to the center, and also align to the bottom of the frame. Let's check the distance between the footer and the lowest component and it has the value of 49 pixel.
>
> **[4:03](https://www.linkedin.com/learning/designing-accessible-components-in-figma/solution-design-a-contact-page?u=76281980&t=243)** I think it looks more or less fine. So we will select the frame and hide our layout grid to see our design. So easy as that, we just completed the second challenge where we learned how to recreate another contact page with accessible components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Newsletters](../../Skills/Web%20Development/Newsletters.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/designing-accessible-components-in-figma/continue-designing-accessible-components?u=76281980&t=0)** - [Instructor] Congratulations on finishing the course. Now you know how to create accessible components in [Figma](../../Skills/Web%20Development/Figma%20(Software).md) and how to apply them in your design project. As a part of this course, we discovered the importance of accessibility in design. We reviewed the most common [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md) standards to create accessible components. Even more importantly, we designed a full set of accessible components in Figma, including buttons, image cards, header navigation, and so on. This allowed us to easily create home and contact pages by reusing accessible components. As a next step, I encourage you to create more components for your project to practice and also make sure that you check their accessibility with Figma plugins that we reviewed together. You should now feel confident about creating an accessible and inclusive design experience for the users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (3), [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md) (1)
> **Tools:** figma (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Tetiana Gulei](../../Instructors/Web%20Development/Tetiana%20Gulei.md)

## Resources

- Exercise files available

## Skills Covered

- Figma (Software)
- Computer Accessibility

## Path Context

### In [Build for Digital Accessibility](../../Paths/Web%20Development/Learning%20Paths/Build%20for%20Digital%20Accessibility.md)
← [Accessibility and Inclusion with Figma](Accessibility%20and%20Inclusion%20with%20Figma.md) | **5 of 12** | [Accessible Layout for the Web](Accessible%20Layout%20for%20the%20Web.md) →

## Appears In

- [Build for Digital Accessibility](../../Paths/Web%20Development/Learning%20Paths/Build%20for%20Digital%20Accessibility.md)

## Related Courses

_Courses sharing skills:_

- [Lo-Fi to Hi-Fi- Prototyping in Figma](Lo-Fi%20to%20Hi-Fi-%20Prototyping%20in%20Figma.md) — Figma (Software)
- [Figma for UX Research- Presentations that Stand Out](Figma%20for%20UX%20Research-%20Presentations%20that%20Stand%20Out.md) — Figma (Software)
- [Microsoft Office Accessibility for Beginners](Microsoft%20Office%20Accessibility%20for%20Beginners.md) — Computer Accessibility
- [Accessibility and Inclusion with Figma](Accessibility%20and%20Inclusion%20with%20Figma.md) — Figma (Software)

---

[↑ Back to top](#)