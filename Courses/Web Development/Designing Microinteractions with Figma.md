---
type: course
cssclasses:
  - lle-course
slug: designing-microinteractions-with-figma
url: "https://www.linkedin.com/learning/designing-microinteractions-with-figma"
duration_minutes: 93
duration: 1h 33m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHCpW9FmFDj6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1682360217628?e=2147483647&amp;v=beta&amp;t=mGPYmxVztHq_7NA7bBeRzx1p26P2i5a1e2al1K-CY48"
linkedin_topic: Web Development
learning_paths:
  - '[Design User Experiences with Figma](../../Paths/Web%20Development/Learning%20Paths/Design%20User%20Experiences%20with%20Figma.md)'
prev_courses:
  - '[Figma- Designing with Variables and Conditionals](Figma-%20Designing%20with%20Variables%20and%20Conditionals.md)'
next_courses:
  - '[Figma- From Design to CSS Implementation](Figma-%20From%20Design%20to%20CSS%20Implementation.md)'
path_nav: '[{"path":"Design User Experiences with Figma","position":5,"total":6,"prev":"Figma- Designing with Variables and Conditionals","next":"Figma- From Design to CSS Implementation"}]'
path_count: 1
tags:
  - course
  - topic/web-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Designing%20Microinteractions%20with%20Figma.md)

![Designing Microinteractions with Figma](https://media.licdn.com/dms/image/v2/D4D0DAQHCpW9FmFDj6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1682360217628?e=2147483647&amp;v=beta&amp;t=mGPYmxVztHq_7NA7bBeRzx1p26P2i5a1e2al1K-CY48)

# Designing Microinteractions with Figma

> Figma is one of the go-to tools for UX designers to design microinteractions. In this course, expert Tetiana Gulei shows learners how Figma can be used to create various microinteractions from scratch. Learn what microinteractions are and why they are crucial to good UX design. Find out how to prototype and create animation in Figma. Explore ways to create simple microinteractions like drags, scro

> [LinkedIn Learning](https://www.linkedin.com/learning/designing-microinteractions-with-figma) | 1h 33m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Microinteractions in Figma](#microinteractions-in-figma)
  - [About microinteractions](#about-microinteractions)
- [**1. Figma Prototyping Basics**](#1-figma-prototyping-basics) (6 videos)
  - [Start prototyping in Figma](#start-prototyping-in-figma)
  - [Use Figma's presentation mode](#use-figmas-presentation-mode)
  - [Test microinteractions on different devices](#test-microinteractions-on-different-devices)
  - [Define triggers for interaction](#define-triggers-for-interaction)
  - [Use Figma's native animation types](#use-figmas-native-animation-types)
  - [Use smart animate for fluid microinteractions](#use-smart-animate-for-fluid-microinteractions)
- [**2. Simple Microinteractions**](#2-simple-microinteractions) (9 videos)
  - [Create an On Click toggle](#create-an-on-click-toggle)
  - [Implementing dragging with On Drag](#implementing-dragging-with-on-drag)
  - [Create a horizontal scrolling effect](#create-a-horizontal-scrolling-effect)
  - [Create a vertical scrolling effect](#create-a-vertical-scrolling-effect)
  - [Create a hover effect](#create-a-hover-effect)
  - [Open overlays for messages and notifications](#open-overlays-for-messages-and-notifications)
  - [Set a trigger delay for your action](#set-a-trigger-delay-for-your-action)
  - [Challenge: Create a background microinteraction](#challenge-create-a-background-microinteraction)
  - [Solution: Create a background microinteraction](#solution-create-a-background-microinteraction)
- [**3. Advanced Microinteractions**](#3-advanced-microinteractions) (7 videos)
  - [Create interactive components in Figma](#create-interactive-components-in-figma)
  - [Create a loading spinner](#create-a-loading-spinner)
  - [Implement a download button](#implement-a-download-button)
  - [Create a volume slider](#create-a-volume-slider)
  - [Create a drop-down menu](#create-a-drop-down-menu)
  - [Challenge: Create a like button](#challenge-create-a-like-button)
  - [Solution: Create a like button](#solution-create-a-like-button)
- [**Conclusion**](#conclusion) (1 videos)
  - [Feel confident designing your own Figma microinteraction](#feel-confident-designing-your-own-figma-microinteraction)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Microinteractions in Figma](https://www.linkedin.com/learning/designing-microinteractions-with-figma/microinteractions-in-figma?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/microinteractions-in-figma?u=76281980&t=0)** - [Tetiana] We see microinteractions when we scroll through our social media feeds, click buttons, and share posts with friends. And in this course, you will learn how to design the most common microinteractions from scratch in [Figma](../../Skills/Web%20Development/Figma%20(Software).md). Hi, I'm Tetiana Gulei. As a UX designer, I've designed many microinteractions in Figma to make [products](../../Skills/Software%20Development/Microsoft%20Products.md) more usable and engaging. We will design together simple and complex microinteractions with interactive components, such as a loading spinner, dropdown menu, volume slider, and more. There is definitely a lot to cover, so if you are ready, let's begin!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Tools:** figma (2)
> **CLI Commands:** make (1)
> **UI Navigation:** dropdown (1)
> **Analogies:** such as (1)
> **Speakers:** - [tetiana] (1)

#### [About microinteractions](https://www.linkedin.com/learning/designing-microinteractions-with-figma/about-microinteractions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/about-microinteractions?u=76281980&t=0)** - [Presenter] Let's talk about microinteractions. Microinteractions are tiny interaction moments that occur at a given time in the user interface. And overall, every micro interaction uses a trigger feedback mechanism that consists of four simple steps and those steps are trigger, rules, feedback, and finally, loops and modes. Trigger is the first step that initiates microinteraction. Triggers can be initiated either by a user or even by a system itself. A common example of a trigger that is initiated by a user is when you click, for example on a button or hover over it with your mouths. In contrast, when a system system initiates a trigger it involves a set of rules that have to be met in order for microinteraction to appear. So for example, a warning or a text notification that you see on your screen. The next step of microinteractions are rules and they define exactly what happens once the microinteraction is triggered. A very good example of a rule is a light switch on your phone. So after you triggered a light switch with your button then the light turns on and the rule is that this light is always on unless you switch it off. Now we have feedback which lets the users know that something has happened after microinteraction has been triggered. And very often feedback contains visual aspects
>
> **[1:35](https://www.linkedin.com/learning/designing-microinteractions-with-figma/about-microinteractions?u=76281980&t=95)** such as color change, tool tap appearance, or text notification. For example, when you interact with a web shop and click on the purchase or complete purchase button then you either see a confirmation or an error message that explicitly tells you that your payment has been completed or not. And this is in a sort of way is a good feedback that you as a user receive. Finally, we have loops and modes that define how microinteraction changes over time when used repeatedly, and going back to the web shop example the add to card button changes immediately to the checkout button after you clicked on it because the conditions changed and this is the change that we get in our microinteraction as well. And now let's quickly talk why microinteractions are so important. Well, microinteractions benefit both users and businesses as they attract new users and increase user retention. Microinteractions also provide users with context and let them know that something is currently happening. With [Real-Time](../../Skills/Database%20Management/Real-Time.md) feedback, microinteractions also prevent users from making errors which is actually leading to a better [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). And overall microinteractions give the user a feeling of control, increased engagement, and make the whole experience more joyful and pleasant.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Analogies:** for example (3), such as (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Warnings:** warning (1)
> **Speakers:** - [presenter] (1)


### 1. Figma Prototyping Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Start prototyping in Figma](https://www.linkedin.com/learning/designing-microinteractions-with-figma/start-prototyping-in-figma?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/start-prototyping-in-figma?u=76281980&t=0)** - [Instructor] [Figma](../../Skills/Web%20Development/Figma%20(Software).md) is a great tool for designing and [Prototyping](../../Skills/Software%20Development/Prototyping.md) micro interactions as it has native built-in prototyping features. And with this features you can create interactive flows and visually show how your micro interactions are triggered and how the users should interact with them. So, let's quickly open Figma and review the basics of this prototyping features. Make sure that you download the proper exercise file with this design so that we can get started quickly. In Figma, when you open your design, you will be by default located in a design section. but for us, we have to create our first prototype connection. And to do that, we'll have to activate the prototype mode by simply clicking on the prototype tab. So, as a designer, you'll have to create a starting point of your micro interaction and you can define it on your own. So, notice how this blue rectangle disappeared next to my first frame. And that means that this screen is going to be the starting point of my micro interaction. We can also change this starting point by simply dragging this rectangle to the second screen as an example. But in our project, it still makes sense to have our first screen as a starting point. Then, you can actually go and hover our layers in your frame and notice how this blue plus icon has disappeared. And we can simply click on it and drag it, and you can see the arrow disappeared, and we can make our first prototype connection. With the Interaction Details window,
>
> **[1:36](https://www.linkedin.com/learning/designing-microinteractions-with-figma/start-prototyping-in-figma?u=76281980&t=96)** we can set up all the triggers, transitions, and animations. So by default, it's set to On-click, which means that if we click on our start exploring button, we will navigate to the second screen. We will review this Interaction Details window in more details in the next videos through this course. So for now, I'm just going to close it. I also want to grab this arrow and connect it back to my first screen, so that I can navigate back to the initial frame. When you click on the gray area in your Figma project, you can see all connections that you just created in your file. You are also free to grab this arrow and change this connection to another frame if you have it. But in this case, we'll only have two frames, so let's leave this connection as it was before. You can also grab, for example, this arrow and click on the Delete key and remove the connection. And then, by clicking again on the gray area you can see that we only have one connection remaining. So, I will just select again this back button and connect it back to my first frame. And yeah, this is how we just created a very simple prototyping and connection for our first simple micro interaction with Figma.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (5), [Prototyping](../../Skills/Software%20Development/Prototyping.md) (4)
> **Tools:** figma (5)
> **UI Navigation:** click on (4), navigate to (1)
> **Definitions:** means that (2), is a  (1)
> **CLI Commands:** make (2)
> **Exercise Files:** download the (1), exercise file (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)

#### [Use Figma's presentation mode](https://www.linkedin.com/learning/designing-microinteractions-with-figma/use-figma-s-presentation-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/use-figma-s-presentation-mode?u=76281980&t=0)** - [Instructor] If you following me along, we just created simple prototype connections between two frames in [Figma](../../Skills/Web%20Development/Figma%20(Software).md). And now that we have our basic micro-interaction ready, it's time to test it out. So make sure that you navigate to the upper header and click on the Present button. And in the new tab we just open the presentation mode where we can see our interactive elements, and also interact with them. So remember how we connected this button with the second frame then notice how the mouse pointer is changing when I hover over this element. That indicates that this element is interactive. If you are also not sure which elements are interactive in your screen, you can also click on any area on your screen, and you'll see this blue highlights that indicate that specifically, those elements are interactive. So let's quickly click on the Start exploring button and we are immediately navigated to the second screen. The same way, I can hover over this back arrow icon and I can see the mouse pointer that just appeared. Let's click on that and we are back to our initial screen. So this is a very simple way on how you can test out your micro-interaction in the presentation mode in Figma.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (2)
> **UI Navigation:** click on (4), navigate to (1), open the (1)
> **Tools:** figma (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Test microinteractions on different devices](https://www.linkedin.com/learning/designing-microinteractions-with-figma/test-microinteractions-on-different-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/test-microinteractions-on-different-devices?u=76281980&t=0)** - [Instructor] Since we just reviewed Presentation mode, let's talk about devices. So in the Prototype tab, you have a Devices section with an option to choose a device in which we want to view our micro interactions. And by default, it's set to None, but if we open this dropdown, we have a huge list of all different options that we can choose. Notice how every device has its own dimensions in pixels. So the first digit means that this is the width and the second one means that it's the height of the device. If you're not sure which of these devices to apply to your project, you can actually select your frame, go back to the Design tab, and check the width and also the height of your frame. It's very important that each frame in your project has exactly the same dimensions in order to have the consistent device view in the Presentation mode. So as we can see, the width is 390 and the height is 844. Let's go back to the prototype. We'll have to click on the gray area in our project in order for the Devices section to appear. And let's go again to the list, and we can see that, for example, iPhone 14 has exactly the same dimensions as our prototype. Let's quickly select this device, and you can see that we can either have a vertical view or also horizontal view if you have a different type of micro interaction to test. We can also adjust the model types, so for example, if we want to have our device red or maybe even blue as an example.
>
> **[1:34](https://www.linkedin.com/learning/designing-microinteractions-with-figma/test-microinteractions-on-different-devices?u=76281980&t=94)** And another option that we can customize is actually the background color. So for example, let's make it very light. And in this way, we can really customize our Presentation mode to make our micro interaction more realistic and to present it in a more immersive way. So if we go back to the Presentation mode, you can see all these changes and it looks really amazing. So feel free to go back to the Device section and actually adjust all the settings to have a feeling of how this customization works.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (4)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **UI Navigation:** dropdown (1), click on (1)
> **Definitions:** means that (2)
> **Code Identifiers:** iphone (1)
> **Speakers:** - [instructor] (1)

#### [Define triggers for interaction](https://www.linkedin.com/learning/designing-microinteractions-with-figma/define-triggers-for-interaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/define-triggers-for-interaction?u=76281980&t=0)** - [Instructor] Let's talk about triggers and how you can define them in [Figma](../../Skills/Web%20Development/Figma%20(Software).md). So first of all, you will have to select your connection and then you can see that interaction details window appears. So by default as in a previous video, we saw that by default we have on tap or on click as our trigger. And that means if you click on an object or on the frame then you, for example, navigate to the second screen. If you open this dropdown, you have other triggers which we're about to review together. So first of all, let's select none, and that means that actually no trigger is set for this prototype. You can also immediately see that the connection just disappeared. And if we also go to our presentation mode the hotspot disappeared as well. So let's actually just click on our start exploring button and create our connection one more time because we know we just removed our connection and we are going to select the on drag trigger. And on drag lets you trigger micro interaction while dragging something on a screen. It can be also for a single element or for an entire frame. And on drag is commonly used for sliders to drag the volume levels, swipe the image carousels, or drag to refresh a page. So in the presentation mode let me quickly just try to drag on this button and then you can see how we navigate to the second screen. This is not the best example to show you how the on drag trigger works because in this way it looks
>
> **[1:35](https://www.linkedin.com/learning/designing-microinteractions-with-figma/define-triggers-for-interaction?u=76281980&t=95)** that I just clicked on the button. But this trigger works very well for sliders or swiping micro interactions. Then let's review while hovering trigger, and this is actually my favorite trigger that gives an action when you hover over the element or frame with your mouse. With hover you can apply interesting micro interactions such as showing more information, highlighting the tool depths notifications or changing the state of the buttons. So in the presentation mode, you can see if I just hover over this button, then we navigate to the second screen. I'm not clicking on anything, I'm just simply hovering over with my mouse, which also looks quite interesting. The next trigger we have while pressing, and this is a combination of click and hold with the mouse on your desktop or tap and hold with your finger on mobile devices. As an example, in a presentation mode, as long as I press with my mouse button on this element I can see the second frame. But as soon as I release my mouse button then I go back to my initial frame. So this is also a very interesting micro interaction to apply to some projects. The next trigger is key or game pad, and you can simulate the keyboard shortcut to trigger micro interaction. Notice how here you have an input field that you can actually press A key on your keyboard and select it for your trigger.
>
> **[3:09](https://www.linkedin.com/learning/designing-microinteractions-with-figma/define-triggers-for-interaction?u=76281980&t=189)** So for example, in my case, I'll click on A key and that means if in the presentation mode, I will again click on A key, then I will go to the second screen. So the same way we can test it this way. So notice how my mouse is outside of my frame and with the keyboard I click on A and then I go actually to the second screen. Keyboard trigger is very useful to apply for micro interactions, for video games or any other interactive apps.
>
> **[3:45](https://www.linkedin.com/learning/designing-microinteractions-with-figma/define-triggers-for-interaction?u=76281980&t=225)** Then we have another trigger section with a mouse enter mouse leave, touchdown and touch up. And this trigger show an interaction when you interact with your mouse in a hotspot area. So let's actually select mouse enter, and in the presentation mode we'll go back to the initial frame and you can see that as long as my mouse enters our button then we see the second screen. It looks a bit more like a hover effect, which just had but the difference is that with the hover effect, as soon as my mouse is actually outside of the element then I go back to the initial frame. But in this case, it's just a one time action. So if I enter with my mouse to this button again then I see the second frame. Finally, we have the last trigger that is called after delay and this trigger involves actually time. So you can see that for now, this trigger is disabled. It's just because we have our connection from our object inside of the frame. For delays, I'm going to quickly remove this connection and then select the whole frame and connect it to the second frame. Now we can see that the after delay is immediately activated.
>
> **[5:02](https://www.linkedin.com/learning/designing-microinteractions-with-figma/define-triggers-for-interaction?u=76281980&t=302)** So right here in the after delay we can set the delay that we want for our micro interaction. So by default we see 800 milliseconds. But for example, let's set a delay of 2,000 milliseconds which is two seconds. So that means that after this two seconds in the presentation mode, we'll see the second frame. So I will go again back to our initial frame and in two seconds we will see our second frame as well. So this is how after delay works, but you can of course create much more complicated micro interactions with this trigger. So throughout this course we'll build micro interactions with different triggers so that you can implement this knowledge into practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (1)
> **UI Navigation:** click on (5), navigate to (3), go to (2), select the (2), dropdown (1)
> **Cross-References:** go back to (3), previous video (1)
> **Definitions:** is a  (1), is called (1), means that (1)
> **Analogies:** for example (3)
> **Tools:** figma (1)
> **Speakers:** - [instructor] (1)

#### [Use Figma's native animation types](https://www.linkedin.com/learning/designing-microinteractions-with-figma/use-figma-s-native-animation-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/use-figma-s-native-animation-types?u=76281980&t=0)** - [Instructor] If you follow me along, we just reviewed triggers in [Figma](../../Skills/Web%20Development/Figma%20(Software).md) and now it's time to move to the animation section to review eight animation types that you can apply to your micro-interactions. So first of all, in this dropdown we have an instant animation, and this is a default animation type that gets applied as soon as you create your connection. And with instant, basically the destination frame will be immediately shown after you interact with the hotspot. In our case, when we immediately click on this button. Let's go again to this dropdown and select dissolve and in contrast with the destination frame, it will fade in on top of the initial frame. With dissolve, you also have easing settings that you can choose from this extensive list, but for now, let's keep it as ease out. You also have a duration input field. By default is 300 milliseconds, but you are free to change it to, for example, 600 milliseconds. In the presentation mode, let me quickly again test how this animation type works. So if I click on my button, you will see how the destination frame is fading in on top of the initial frame. Now, let's go to the move in animation type, and this transition slides the destination frame into the international frame. Here we can choose a direction, so for example, from right to left or other way around, from top to the bottom and so on.
>
> **[1:33](https://www.linkedin.com/learning/designing-microinteractions-with-figma/use-figma-s-native-animation-types?u=76281980&t=93)** We can also select different easing options and set our duration. This type of transition looks like a slide indirection that is commonly used for presentation or mobile applications. So let's go back to our initial frame and we can see that after we click on this button, the second frame actually slides in on top of the first frame. Now let's go to the move out transition, and this is just an opposite of the previous transition as instead of moving into the frame, it literally moves out of the initial frame. So maybe it sounds quite complicated, but if we go again to the presentation mode, we can see a slight difference between both of these transitions. Now, I'm going to skip push, and immediately select slide in and slide out because it's actually almost identical to move in and move out transitions. The main difference is that the slide in dissolves the initial frame and with moving in, the initial frame becomes stationary. So we can go again to the presentation mode to see how it looks like. So if we click on this frame, we see how the initial frame is getting dissolved. Maybe it was not that obvious, so we can actually increase our duration to 800 milliseconds and let's just go back again and see how the initial frame is slightly dissolving on the background.
>
> **[3:07](https://www.linkedin.com/learning/designing-microinteractions-with-figma/use-figma-s-native-animation-types?u=76281980&t=187)** And with the move-in, we can test it again. We can see how the initial frame was static and it was not moving at all.
>
> **[3:22](https://www.linkedin.com/learning/designing-microinteractions-with-figma/use-figma-s-native-animation-types?u=76281980&t=202)** Finally, we also have push transition and with this transition, it actually pushes out the initial frame to the destination frame. I'd like to use this transition, for example, to create a swiping micro-interaction. You can also select your directions the same way as with the previous transitions. So for example, we'll go again to the presentation mode and see how the first frame is pushed out by the second frame. I know that these transitions might look quite identical and have almost no difference, but I still encourage you to test them out on your own to make sure that you are comfortable while using them for your micro-interactions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (1)
> **UI Navigation:** click on (4), dropdown (2), go to (2)
> **Analogies:** for example (4)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Tools:** figma (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Use smart animate for fluid microinteractions](https://www.linkedin.com/learning/designing-microinteractions-with-figma/use-smart-animate-for-fluid-microinteractions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/use-smart-animate-for-fluid-microinteractions?u=76281980&t=0)** - [Instructor] Let's talk about Smart Animate, another animation type in [Figma](../../Skills/Web%20Development/Figma%20(Software).md) that we did not cover yet. With Smart Animate, you can create advanced micro interactions with fluid transitions. There are many examples of micro interactions that use Smart Animate and as an example, they are loading screens, progress bars, swiping gestures, different toggles and switches and many other micro interactions. The mechanism of Smart Animate is very simple as it matches similar layers across multiple frames. And in this way, it actually can detect the main differences that occur between the objects on those different frames. Eventually, Smart Animate recognizes this changes between two screens and it can apply fluid transition that actually increases user engagement and facilitates [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). So, Smart Animate takes into account the differences mainly in the size of an object, its positioned on X and Y coordinates, opacity, rotation of an object, and also color change. And now let's open Figma and see how Smart Animate works in practice. First of all, we are going to open an empty Figma project and what I'm going to do is show you a very simple example of Smart Animate. So, let's select a frame tool and we will go to the phone frames and select the iPhone 14 as our frame. I will quickly rename this layer to frame one
>
> **[1:34](https://www.linkedin.com/learning/designing-microinteractions-with-figma/use-smart-animate-for-fluid-microinteractions?u=76281980&t=94)** and what I'm going to do is very simple. I will just select a rectangle and by holding shift key, I will draw a basic square. Let's also quickly change its dimensions to be more precise, so for example, 100 by 100 pixels. In this way, I will also go to the fill and basically color my square into, for example, purple color. So, this was a very simple step one. The next step is to actually duplicate this frame and I will do that with a key combination Ctrl + D. Then by default, we have frame number two with exactly the same object and the same position. And important right now is to actually grab this square and move it right here to the bottom of the frame. So, this is in a way so that Smart Animate can detect the difference in the position of this layer. I will also go to the border radius settings and change the border radius to the value of 30 pixels. And as a final touch, I will also change the color to something like this.
>
> **[2:51](https://www.linkedin.com/learning/designing-microinteractions-with-figma/use-smart-animate-for-fluid-microinteractions?u=76281980&t=171)** Now since we have our basic design ready, we can go to the prototype tab and create our first basic connection. So, let me quickly select this first frame and I'm going to create my first connection. And in interaction details, I will make sure that with On Tap trigger, if I click anywhere on this frame, I will navigate immediately to the second frame. And in the animation type, let's make sure that we select Smart Animate. And with Smart Animate, you can see it's almost the same as with previous animations. You have easing settings that you can select from and you also have a duration. So, in this case, let's maybe increase our duration to the value of 2000 milliseconds.
>
> **[3:43](https://www.linkedin.com/learning/designing-microinteractions-with-figma/use-smart-animate-for-fluid-microinteractions?u=76281980&t=223)** And in the same way, I'm going to select our second frame and connect it back to our first frame with the same trigger on tab and with the exactly the same animation settings of Smart Animate and ease out easing with the duration of 2000 milliseconds. So, right now we can go to the presentation mode and test Smart Animate. So, right now we are in a presentation mode. And let me quickly click on this area and you can see this amazing micro interaction on how Smart Animate just detected the differences between the position, the color and other styling properties of this layer. If I click again, we can see how our object goes back to the initial styling that we set in our first frame. Let's maybe make this micro interaction a bit more complicated. I will go again to the tools and select the star. So, by holding shift, I will draw this star again. And with the fill, let's just maybe may be painted to something like green color. So, you might notice that we already duplicated the second frame, and in our second frame we do not have our star yet. So, what we have to do is actually to select the star, click on Ctrl + C key shortcut, select the second frame and then click on Ctrl + V shortcut to paste the star. And you might notice that the position of the star is identical in both of these layers.
>
> **[5:18](https://www.linkedin.com/learning/designing-microinteractions-with-figma/use-smart-animate-for-fluid-microinteractions?u=76281980&t=318)** And what I'm going to do is, again, I will just move it right here almost to the bottom of this frame. And also as an example, I will rotate the star a bit. Now we can go back again to our presentation mode and see the micro interaction which has created. So, let's quickly click on this frame and we can see this really simple, but really amazing micro interaction with smart animate. So, smart animate, again detected the position of my star and also it's rotation angle. So, in this way, this is how you can simply apply Smart Animate to your micro interaction project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (3), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **UI Navigation:** select the (4), click on (4), go to (3)
> **CLI Commands:** make (3)
> **Tools:** figma (3)
> **Analogies:** for example (2)
> **Code Identifiers:** iphone (1)
> **Speakers:** - [instructor] (1)


### 2. Simple Microinteractions

[↑ Back to Table of Contents](#table-of-contents)

#### [Create an On Click toggle](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-an-on-click-toggle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-an-on-click-toggle?u=76281980&t=0)** - [Instructor] You just learned the basics of [Prototyping](../../Skills/Software%20Development/Prototyping.md) in [Figma](../../Skills/Web%20Development/Figma%20(Software).md). It's time to create your first simple micro interaction from scratch. And in this exercise I'm going to grab this toggle and create an on-click micro interaction. So make sure that you download the proper exercise file as I already created this design for you so that we can focus on prototyping. So first of all, we have our first frame with the toggle being switched off. And what I have to do is create another frame by duplicating it with control + D shortcut. And in the second frame, we are going to change the styling of this toggle to specifically show to the user that this toggle is on. So let's quickly [Zoom](../../Skills/Software%20Development/Zoom.md) into this frame and what I'm going to do is first of all, double click on this ellipse and with my keys, I'm going to move it to the side. Then I will double click on the rectangle and I will also change its background color. So let's go to the fill and I will immediately go to the line near gradient. And in this way I will just drag this gradient markers to the side and also change their colors. So for example, with the first marker we'll have this purple color. Let's quickly duplicate the hex code with control + C shortcut. Then we'll go to the second marker, increase its capacity to 100% and paste this hex color code. In this way you don't see the difference between both of the colors definitely but we can just drag the shade of the color
>
> **[1:33](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-an-on-click-toggle?u=76281980&t=93)** and create some nice linear gradient transition.
>
> **[1:42](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-an-on-click-toggle?u=76281980&t=102)** And right now, when we are finished let's quickly close this window. So when I zoom out, we can immediately see visually the difference between both of the states of the toggles. And now we can quickly go to the prototype tab and actually connect both of these frames. So I'm going to select this toggle and connect it to the second frame. And in the interaction details I'm going to specifically choose the on-click trigger which means that it will navigate to the second frame. In the animation settings, let's quickly select dissolve with the ease out setting of 200 milliseconds. The same way, let's select this toggle and connect it back to our initial frame with the same trigger and animation settings. So when I click right here on the gray area we can see both of the connections that we just created for our micro interaction. And this is basically it. We can immediately go to the presentation mode to see if our micro interaction works properly. Alright, so if I hover my mouse over this toggle element I can see that this object is interactive. So let's quickly click on it and we can see a very simple toggle micro interaction. The same way, I can click on the toggle again and turn off push notifications in this screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Prototyping](../../Skills/Software%20Development/Prototyping.md) (2), [Zoom](../../Skills/Software%20Development/Zoom.md) (2), [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (1)
> **UI Navigation:** toggle (9), go to (5), click on (3), navigate to (1)
> **Exercise Files:** download the (1), exercise file (1)
> **CLI Commands:** make (1)
> **Tools:** figma (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Implementing dragging with On Drag](https://www.linkedin.com/learning/designing-microinteractions-with-figma/implementing-dragging-with-on-drag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/implementing-dragging-with-on-drag?u=76281980&t=0)** - [Instructor] In this exercise together we'll create a swiping micro interaction while using an on track trigger. Since I have my design ready, let's quickly select our first frame and navigate to the prototype tab. Here we are going to create our first connection between the first and second frame. So in the interaction details, make sure that you select on track trigger, and that we are going to navigate to the second screen. Also in the animation type, I will work with push animation where the second frame is going to push out my first frame. Also in the easing settings, let's work with ease out and duration of 300 milliseconds. In the same way, we are going to select our second frame and connect it back to our initial frame. Also in the interaction needles we'll work with on track trigger where we'll navigate to the first screen, and also with a push animation, we are going to have another direction where we will push out our second frame and place the first frame. Now we can quickly go to the presentation mode to test out our micro interaction. So if I'm going to drag on my screen, we can see how both of the frames are getting swiped and theoretically we achieved our swiping micro interaction. But in a real [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), you might have noticed that, for example, if you have these steps, they ideally remain static while other image is getting swiped. So we can achieve exactly the same behavior by going back to our [Figma](../../Skills/Web%20Development/Figma%20(Software).md) project and making some changes to our prototype settings.
>
> **[1:34](https://www.linkedin.com/learning/designing-microinteractions-with-figma/implementing-dragging-with-on-drag?u=76281980&t=94)** So in the animation section you can see the chat box with smart animate matching layers, and we are going to activate this chat box. And that means that smart animate will look for matching layers that exist across multiple frames. And in that way it will apply the fluid transition between both of the frames. So in our case, since Amsterdam and New York text layers are static, and they do not change their position, so in the presentation mode, they're supposed to also remain static. And the only differences that smart animate will detect are the changes in the position of this line, because you can see it on the first frame, it's located right here, and on the second frame, it's slowly moving to the right. And the same is going to happen with our images that will change their position in this frames. So let's again select the second interaction and click on this smart animate matching layers chat box. Now, if we go back to our presentation mode and we drag on our frames, we can see how our text layers remain static while other elements are getting swiped from the right to the left and other way around.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (1)
> **UI Navigation:** navigate to (2), go to (1), select the (1), click on (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Tools:** figma (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Create a horizontal scrolling effect](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-horizontal-scrolling-effect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-horizontal-scrolling-effect?u=76281980&t=0)** - [Instructor] In this exercise, let's create a horizontal scrolling micro interaction with a gallery of images on the mobile screen. You can see in this exercise file that I already prepared a set of different images that are placed outside of our main recipe app frame. So what we have to do first is to select all of this images, right click on the mouse, and click on frame selection. So right here in the layer section, you can immediately see that we just created frame that consists of all of these images. It's a very important step that you should not miss in order for this micro interaction to work. We're going to also rename our frame to something like images, and the next step will be to actually grab this frame and put it exactly inside of our main recipes frame. Right here with this blue markers, you can immediately see that the width of our images frame is quite different from the width of the recipe app frame. So important aspect of horizontal scrolling is that the width of the smaller frame should fit the main frame. So we are going to grab the size of this frame and reduce them exactly to the width of our recipe app frame. Finally, after you just did the step, we can go immediately to the prototype tab, and we are not going to create any type of interaction. We are just going to go to the overflow scrolling section, and by default you can see that no scrolling is set.
>
> **[1:36](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-horizontal-scrolling-effect?u=76281980&t=96)** So let's open up this dropdown and in this way we are going to select horizontal scrolling and that's basically it. We can immediately go to the presentation mode and see how the scrolling interaction is working. So right now I have my mobile application and if I'm going to drag to the side with my mouse I can see how I'm scrolling the side of the images in this mobile application.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), go to (2), dropdown (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Create a vertical scrolling effect](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-vertical-scrolling-effect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-vertical-scrolling-effect?u=76281980&t=0)** - [Instructor] Let's create a vertical scrolling micro interaction in [Figma](../../Skills/Web%20Development/Figma%20(Software).md). So in the exercise file, you can see again a set of images that I prepared for you to use for this exercise. So let's quickly grab them all together. Right click on the mouse and click on frame selection. Again, in the layer panel you can see that inside of this frame, we have a set of all of these images. So I will also double click on the frame one and rename it to Images2 just for my own reference. Then will just quickly grab this frame and put it inside of our mainframe. I will quickly also [Zoom](../../Skills/Software%20Development/Zoom.md) in and I want to create another title for this recipes app. So I'll just quickly duplicate the stacks layer with Control + D shortcut and place the stacks layer right here. Let me quickly rename it. And if I zoom out and actually select my images to frame, you can see specifically that the margins are going definitely outside of our main recipe app frame. So what we have to do is exactly the similar way as we did with the horizontal scrolling micro interaction. We will drag this margins right to the bottom margin of our main frame. And then let's quickly go to the prototype tab. And by selecting again our images to frame, we are going to go to the overflow scrolling section and select vertical scrolling overflow behavior. And the same way we can quickly go
>
> **[1:35](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-vertical-scrolling-effect?u=76281980&t=95)** to our presentation mode and test it out. So in our presentation mode, I'm going to vertically drag our images, and you can see that actually there are going above our other layers in the frame, which doesn't look that nice. So theoretically, the vertical scrolling micro interaction is working. But let's go back to the working area in Figma and make some final changes. So what we have to do is actually go back to our design tab and by selecting our Images2 frame, we will go to the frame section and click on clip content checkbox. And in this way, the elements within this frame are going to be clipped on scroll. And right now, if we go back to our presentation mode, let's test out our vertical scrolling micro interaction. And here I think it looks much better because we can scroll vertically but then our images are actually clipped inside of their own frame and they don't go above other layers inside of our recipe application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (2), [Zoom](../../Skills/Software%20Development/Zoom.md) (2)
> **UI Navigation:** click on (3), go to (2), checkbox (1)
> **Cross-References:** go back to (3)
> **Tools:** figma (2)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Create a hover effect](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-hover-effect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-hover-effect?u=76281980&t=0)** - [Instructor] You are about to discover how to create a hover micro-interaction of this image card that is going to change its background color and also show more information while the user hovers over it. So in the exercise file, you already have your first frame with the default state of the image card. So what we have to do is actually duplicate this frame with a key shortcut Control + D. And inside of the second frame, we are going to change the styling properties of this image card and also add additional text to create our hover state. First of all, let's go to the fill section and add another fill to this layer. Let's also change the opacity to 100% and instead of having a solid fill, we are going to work with linear gradient. I will immediately rotate the markers and make sure that zero opacity marker is located at the top of this image card. Then we'll also add a stroke. So the width of the stroke is going to be five pixels, and I will also change its background color to white. Then we can move on to our text tool and type in some headline. So for example, Home plant. I will select this text layer and in the text properties, I will increase the font size to the value of 26 pixels
>
> **[1:36](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-hover-effect?u=76281980&t=96)** and also change the font weight to semi-bold.
>
> **[1:45](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-hover-effect?u=76281980&t=105)** We can also duplicate this text layer one more time with Control + D key shortcut and place it right under our first text layer. And right here I will add some subheadline which is going to say, 20% Discount. I will also increase the size of this font to the value of 20 pixels and also change its weight to regular. Now we can duplicate this text layer one more time with the Control + D key shortcut and place it right under our second text layer. And here we are going to type the call to action which we are going to use for our button. And here I will also change the font weight to medium and I will also go to extra settings and add the underline decoration. Finally, by selecting the rectangle tool, I will also draw a rectangle which will serve as the base for our button. In the layer section, make sure that your rectangle is located under your text layer. And we can also change the color of this rectangle. Finally, I will select both of these layers and align them horizontally and vertically and also group them with the key shortcut Control + G.
>
> **[3:16](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-hover-effect?u=76281980&t=196)** So this is basically the hover state of our image card. So let's [Zoom](../../Skills/Software%20Development/Zoom.md) out to see both of the frames that we just created. And right now we can go to the prototype tab to create our own hover micro-interaction. So first of all, I will grab this first image card and connect it to my second frame. Inside of the interaction details, we are going to select While hovering, and we will make sure that we will navigate to the second desktop frame. In the animation type, you are free to choose any animation that you want to work with, but I will stick with dissolve. So the easing setting is going to be ease out and let's set a duration of 400 milliseconds.
>
> **[4:02](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-hover-effect?u=76281980&t=242)** And this is basically it. So for the hover micro-interaction, we only need to create one connection from the first initial state to our hover state. So let's quickly go to the presentation mode and test out our micro-interaction.
>
> **[4:22](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-hover-effect?u=76281980&t=262)** All right, so we are in the presentation mode and I'm going to hover over this card with my mouse and you can see how nicely we have more information with the title, subtitle, and call to action. And if I go away from the area of this image card, then all of this additional styling and text disappears. And one more time, you can see how nicely and easily we can create a hover micro-interaction in [Figma](../../Skills/Web%20Development/Figma%20(Software).md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (1), [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (1)
> **UI Navigation:** go to (4), navigate to (1)
> **CLI Commands:** make (3)
> **Tools:** figma (1)
> **Exercise Files:** exercise file (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Open overlays for messages and notifications](https://www.linkedin.com/learning/designing-microinteractions-with-figma/open-overlays-for-messages-and-notifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/open-overlays-for-messages-and-notifications?u=76281980&t=0)** - [Instructor] Let's create another simple micro-interaction where we'll show this pop-up message after the user clicks on the add to cart button. And, in this example we'll specifically work with overlays in [Figma](../../Skills/Web%20Development/Figma%20(Software).md), which allow us to place additional content, like this pop-up message, on top of the main frame. So first of all, let's quickly grab this group, and you can see that in the layers, it's a group that consists of other objects inside of it. So we are going to right click with our mouse and convert this group to the frame. Then just for the simplicity, again, I'm going to rename this frame, just for my own reference, and after this, I'm ready to jump into the prototype tab to start my micro-interaction. So first of all, we'll need to select our add to cart button and connect it to our pop-up frame. And right here in the interaction details, we are going to work again with on click trigger, but instead of working with navigate tool, we are going to open this dropdown menu and select open overlay. You can see immediately that our connection has changed and we don't have this arrow anymore, and this is just because we are going to place this message on top of our main frame. In open overlay, you have a lot of different settings, but for now, we are going just to open this first dropdown and select manual placement. With the manual placement, we are free to actually grab the position of our pop-up and place it in a position on the main frame that we want our pop-up to appear. So for example, maybe here a bit more to the top
>
> **[1:36](https://www.linkedin.com/learning/designing-microinteractions-with-figma/open-overlays-for-messages-and-notifications?u=76281980&t=96)** of our main frame. There are also other settings, like close when clicking outside, so it means if we activate this checkbox and we click on the outside of the frame, then this popup will disappear. Also, we can add background behind overlay, which also is great, because you can create more contrast between your popup message and the background. So in this case, I will just leave it as it is by default. We have this black color with the opacity of 25%. And the final thing I want to do is actually go to the animation section, and instead of having instant animation, I'm going to select dissolve. And with dissolve, I hope to create much more fluid and smooth transition between my pop-up message and main screen. So with the ease out settings, we can actually select linear, and also, for the duration, I will just slightly increase it to the value of 400 milliseconds. Alright, so I think we are ready, so let's quickly go to the presentation mode. Alright, so we are in our presentation mode, and let me quickly click on this add to cart button. And we can see this really nice smooth transition where the pop-up message has just appeared. But the thing is, because we did not activate click on outside in order to close the pop-up message, then this message forever stays right here on the main screen. So we can go back to our working area in Figma and we are going to create another micro-interaction
>
> **[3:13](https://www.linkedin.com/learning/designing-microinteractions-with-figma/open-overlays-for-messages-and-notifications?u=76281980&t=193)** In this way, in my pop-up frame, I'm going to select my close button and connect it back to the main frame. And right here, the interaction details are, again, very simple. It's on click trigger with a simple navigation to the main screen, and let's just leave the dissolve animation type with the same linear easing and duration of 400 milliseconds. And this is it, so now we have two different connections in our prototype and we can test it out one more time. Since in the presentation mode, I already have my pop-up message activated, now I can test if I can close it. And as you can see, it simply works in this way. So one more time, when we click on the add to cart button, we see our overlay with the pop-up notification, and if we close our notification, we go back to our initial frame.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (2)
> **UI Navigation:** click on (3), dropdown (2), checkbox (1), go to (1)
> **Cross-References:** go back to (2)
> **Tools:** figma (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Set a trigger delay for your action](https://www.linkedin.com/learning/designing-microinteractions-with-figma/set-a-trigger-delay-for-your-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/set-a-trigger-delay-for-your-action?u=76281980&t=0)** - [Instructor] In this exercise, we are going to create a basic countdown micro-interaction. And to achieve this micro-interaction, we are going to use the after delay trigger in [Figma](../../Skills/Web%20Development/Figma%20(Software).md). So in the exercise file, you will see five sample frames, where the first frame has a button, and we are going to use specifically this button to trigger our countdown. So I will immediately jump into the prototype tab, where I will create my first connection. So I'll quickly [Zoom](../../Skills/Software%20Development/Zoom.md) into my first frame. I will also select this button and connect it to the second screen. In the interaction details, just keep it as default, on-click trigger, where we'll navigate to the screen number two. And in the animation settings, we are going to work with smart animate. And with smart animate, we will set up the delay of 2,000 milliseconds and ease out as the easing setting. Now we can move on to the next frames, where we will have to select the screen two frame and connect it to our third frame. And right here, instead of the on-click trigger, we are going to use after delay. And right here, make sure that the delay is one second, which translates to 1,000 milliseconds. Also in the animation type, let's just keep it simple and select instant animation. I'm going to repeat exactly the same action with the remaining frames, where I will connect third frame to the fourth frame, and I will also select after delay of 1,000 milliseconds and animation is kept as instant.
>
> **[1:37](https://www.linkedin.com/learning/designing-microinteractions-with-figma/set-a-trigger-delay-for-your-action?u=76281980&t=97)** And finally, we will also connect the fourth frame to the fifth frame where we'll, again, select after delay with a duration of 1,000 milliseconds.
>
> **[1:52](https://www.linkedin.com/learning/designing-microinteractions-with-figma/set-a-trigger-delay-for-your-action?u=76281980&t=112)** And this is it. Now we can see that each frame has a connection and we can simply test our countdown micro-interaction in a presentation mode. Alright, so let me quickly click on this button. And right here, we are supposed to see a countdown with a one second delay between each of the frames. And I think it just worked great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (1), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **UI Navigation:** select the (1), click on (1)
> **CLI Commands:** make (1)
> **Tools:** figma (1)
> **Exercise Files:** exercise file (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a background microinteraction](https://www.linkedin.com/learning/designing-microinteractions-with-figma/challenge-create-a-background-microinteraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/designing-microinteractions-with-figma/challenge-create-a-background-microinteraction?u=76281980&t=5)** - [Instructor] Now that you learned how to create simple micro interactions, it's time for a first challenge. And in this challenge, you'll design another micro interaction that changes the background color of the screen after you interact with the button. In this exercise, make sure that you create at least two frames with different background colors. You will also have to design a basic button and use it as a starting hotspot. When you activate the prototype mode and create simple prototype connections make sure that you apply the on click trigger. And if you want to take this challenge even further, you can apply smart animate to create a fluid transition between both of these frames. Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Solution: Create a background microinteraction](https://www.linkedin.com/learning/designing-microinteractions-with-figma/solution-create-a-background-microinteraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/designing-microinteractions-with-figma/solution-create-a-background-microinteraction?u=76281980&t=5)** - [Instructor] So first of all, let's create a frame with a background color. So from the available presets, you can choose anything that you like but as an example, I will choose iPhone 14. Right here, I will quickly rename this frame for my own reference. The first step in our design is to change the background color. So in my case, I want to paint my frame into orange. Then I will draw a very simple button with a rectangle. And right here, I will also change its styling because I want to have corner radius with a value of 20 pixels. And I also want to change the color of this button to dark gray. Finally, I will also add a stroke and change its color to white, and also the width of the stroke will have the value of four pixels. Let's quickly make sure that this button is properly aligned to the center and the final touch will be to create a text label. In the text settings, you can see that I chose Inter as my font, and also the font weight is bold just to make it more readable. And also, the font size is 24. Finally, I will select both of these layers and align them properly to each other. And then I will also select a group with Control + G just to simply group both of these layers that I can move them around this frame. Finally, I can align again this button to the center
>
> **[1:40](https://www.linkedin.com/learning/designing-microinteractions-with-figma/solution-create-a-background-microinteraction?u=76281980&t=100)** to make sure it's properly placed. So the first step of our micro interaction is done. We will have to select our first screen and duplicate it with Control + D shortcut. And the only change in my second screen I will do to my background color. So right here, I will paint it to the green color. When your design is ready, make sure that you immediately navigate to the prototype tab. And right here we will select our first button in our first screen and make our first connection. So interaction details. We are going to work with on tap where we will navigate to the second screen. And with the animation type, by default, you will have it set as an instant animation. And in the animation section, instead of instant, we are going to work with smart animate. And right here, I will also work with linear easing and the duration is going to be 600 milliseconds. The same way as we just created our connection, we're going to connect also the button on the second screen to our first frame. Interaction details should remain the same where on tap is selected as our trigger, and then the animation will work with smart animate with a duration of 600 milliseconds. Basically, that's it. So if you're ready with [Prototyping](../../Skills/Software%20Development/Prototyping.md), we can go to the presentation mode to test our micro interaction. Let's quickly click on this button
>
> **[3:15](https://www.linkedin.com/learning/designing-microinteractions-with-figma/solution-create-a-background-microinteraction?u=76281980&t=195)** and here we can see how our micro interaction works and how we can change the background color of the mobile screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1)
> **CLI Commands:** make (5)
> **UI Navigation:** go to (1), click on (1)
> **Code Identifiers:** iphone (1)
> **Speakers:** - [instructor] (1)


### 3. Advanced Microinteractions

[↑ Back to Table of Contents](#table-of-contents)

#### [Create interactive components in Figma](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-interactive-components-in-figma?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-interactive-components-in-figma?u=76281980&t=0)** - [Instructor] Now we are slowly moving to the topic of advanced microinteractions in [Figma](../../Skills/Web%20Development/Figma%20(Software).md). And in order to create these complex microinteractions, we will work with interactive components. In theory, interactive components are reusable user interface elements that are also interactive. So that means that, in Figma, you can create them only one time and reuse multiple times in your design project. So during your design process of creating microinteractions, it definitely saves a lot of time and effort. To give you a brief example, if you remember that earlier in the course we created a simple toggle microinteraction where we only had to create two different frames. But what would happen if, on one screen, we had to include more than just one toggle? So, in theory, you would need to duplicate your frames multiple times and create a lot of connections for all of these toggles. And as you can see, that the Figma file becomes much more complicated, and, in general, it looks quite messy. So to speed up our design process in Figma, we will use interactive components while creating an advanced microinteraction for a toggle. So microinteractions, in the end, will be created between variants in a component set. If you feel that you want to learn more about components before jumping into this topic, I strongly recommend to watch my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course that is called "[Designing Accessible Components In Figma](Designing%20Accessible%20Components%20In%20Figma.md)."
>
> **[1:35](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-interactive-components-in-figma?u=76281980&t=95)** But if you are ready, let's open up Figma and create our first interactive component. So right here in Figma, I have exactly the same frames as we used earlier in this course while creating a toggle microinteraction, so the first step will be to go to the Prototype tab, and we are going to select our [Prototyping](../../Skills/Software%20Development/Prototyping.md) connections and actually remove them. So I will select the first connection and click on delete, and I'll do exactly the same with the remaining connection. Now let's go back to the Design tab and select both of these toggles. So I will select the first toggle, and while holding the Shift key, I will also click on the second toggle. So let's quickly drag these toggles outside of our frames. I will also put this toggle a bit closer to the second one, and also move them a bit here to the side. So for interactive components, we will have to keep it simple, because we will only need to use one frame. So that means I'm going to grab one of those frames and simply remove it. So for my own reference, I will grab the first group and rename it to the toggle off, and also I will rename the second group as well to the toggle on. And now we are ready to create our component set, so we will have to grab both of these groups, go to the component dropdown menu, and click on the Create component set.
>
> **[3:10](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-interactive-components-in-figma?u=76281980&t=190)** So here we just created a very simple component set, you can also see it in your Layers panel. If you open up this component set, you can see two variants, which are toggle on and toggle off. And now that we created a simple component set, we are ready to jump into the prototype tab and create our first prototyping connection. So first of all, I will grab my first toggle and connect it to the second toggle. So again, the interaction needles are going to happen with the on-click trigger, where we are going to change another property of our toggle, which is toggle on. In this dropdown, you can see both of the variants that we created in our component set. So, as an animation type, I will again select Dissolve, with the Ease out setting, and duration of 300 milliseconds. Then again, I will select the second toggle and connect it back to my first variant. And right here in the interaction details, we will keep exactly the same trigger, and we will make sure that our property is going to go back to the toggle off. Also make sure that you keep exactly the same animation settings for this prototyping connection. And, basically, that's it. So if you want to find your interactive component, simply navigate to the Assets tab, where you will see your local component that we just created. And now I can actually grab this component and place it into my main frame. So, right here,
>
> **[4:42](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-interactive-components-in-figma?u=76281980&t=282)** instead of actually designing everything from scratch, I have this component that I can reuse multiple times in my design project. So I will also go back to the Design tab, and also will navigate back to the Layers tab, because I will just simply Control + C and Control + V this interactive component multiple times.
>
> **[5:09](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-interactive-components-in-figma?u=76281980&t=309)** Let's also make sure that all of these toggles are aligned, and also that they a distance to the white box with a value of 10 pixels. And basically you can see that, with interactive components, we did not have to duplicate the frame multiple times, and we did not really have to create any prototyping connections, but only the one within our component set. So now let's quickly navigate to the presentation mode. And right here we can see that, actually, our toggles are interactive, and you can see, I can toggle on and off these elements multiple times, and at the same time. So in the end, we managed to actually create these interactive components, and we saved a lot of time and effort while designing this microinteraction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (7), [Prototyping](../../Skills/Software%20Development/Prototyping.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **UI Navigation:** toggle (18), select the (3), click on (3), go to (2), dropdown (2)
> **Tools:** figma (7)
> **Cross-References:** go back to (3), earlier in (2)
> **CLI Commands:** make (3), find (1)
> **Definitions:** means that (1), is called (1)
> **Speakers:** - [instructor] (1)

#### [Create a loading spinner](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-loading-spinner?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-loading-spinner?u=76281980&t=0)** - [Instructor] Since you just learned about interactive components, let's create a loading spinner micro interaction. So first of all, let's select an ellipse tool. And by holding Shift key, we are going to draw it right here in our working area. Make sure that the dimensions of this ellipse are 160x160 pixels. Now we are going to add a stroke and set its width to 30 pixels. And at the same time, I will remove fill because we do not need it for this micro interaction. In the stroke coloring settings, let's change from solid to [Angular](../../Skills/Web%20Development/Angular.md) gradient because it's going to serve us as a basis for our micro interaction. You are free to choose any color that you like. So as an example, we can choose this blue color. Let's also make sure that we select this hex code, copy it with Ctrl + C key shortcut, select the second marker, and then paste this color code just right here with Ctrl + V key shortcut. Then also, by making sure that I select the second marker, I'm going to change its position to the top of this ellipse. And finally, in a layer section, I'm going to rename it to spinner 1. Now, we'll have to simulate the rotation. So I'm going to duplicate this ellipse three times. So by using the key shortcut, Ctrl + D, let's duplicate our ellipse and place it right here.
>
> **[1:33](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-loading-spinner?u=76281980&t=93)** And now, you can repeat the same key shortcut, Ctrl + D, two more times. You can also see how these layers are created right here in a layer step. And then the numbering works just perfectly for our micro interaction. So now, I'm going to actually rotate each of these ellipse by 90 degrees. So let's set here 90 degrees. Then here we'll have to actually set 180 degrees. And finally, right here, we'll have to set 270 degrees. And you can see, it's immediately converted to minus 90 degrees in [Figma](../../Skills/Web%20Development/Figma%20(Software).md). So after we are ready with this four stages of our spinner, we can select all of these layers, go to the components dropdown, and click and create component set. In the layer step, you can also see the component set, which consists of four different variants, which we are going to prototype. Let's quickly activate our prototype mode. And we are going to set our first connection between the first and second spinner. And in this case, we are going to work with after delay trigger and also set the delay of one milliseconds. And this is quite small, but it's going to be compensated by smart animate. So make sure if you have it set by default as an instant that you change it to smart animate. In our ease in settings, you are free to choose any setting that you want. But for this micro interaction, it's better to work with linear easing. And also, the delay is going to have 300 milliseconds. We are going to repeat exactly the same prototype
>
> **[3:06](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-loading-spinner?u=76281980&t=186)** and connection with the remaining ellipses. So in the interaction details, let's set after delay with one millisecond and also make sure that we have smart animate with linear easing and 300 millisecond as a duration. Finally, let's not forget to connect our last spinner to the first spinner because we want this animation to be indefinite. So again, we will select after delay with one millisecond and also smart animate settings as previously we just did. So this is it. Make sure that all the connections are set up. And we are going to select a frame. And from our presets, we'll select iPhone 14. Let's go back to the design tab. And in our assets panel, we can see our interactive component as a local component. So let's quickly drag it right here to our mainframe and we are going to center it horizontally and vertically. Finally, just to make it more fun, we can type some text, for example, loading. You can see that here I use inter font, which is medium font weight and 20 pixels of the font size. We can also center it exactly to the horizontal centers. And then without actually creating any additional frames and connections, we can go to the presentation mode to see our micro interaction.
>
> **[4:41](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-loading-spinner?u=76281980&t=281)** So this is the final result of this exercise. I hope that you manage to recreate this loading spinner micro interaction with interactive components in Figma.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (2), [Angular](../../Skills/Web%20Development/Angular.md) (1)
> **CLI Commands:** make (6)
> **UI Navigation:** select the (2), go to (2), dropdown (1)
> **Tools:** figma (2)
> **Code Identifiers:** iphone (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)

#### [Implement a download button](https://www.linkedin.com/learning/designing-microinteractions-with-figma/implement-a-download-button?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/implement-a-download-button?u=76281980&t=0)** - [Instructor] Let's create a complex micro interaction for a download button that we are going to place just right here into our main mobile app screen. So as always, I'm going to move away from this main screen in order to create my initial button. So let's select the rectangle tool and draw a button with the dimensions of 140 by 46 pixels. In the fill settings, I'm going to select the pipette tool and make sure that I have exactly the same color as my primary text. Also, right here in the corner radius setting I'm going to type the value of 10 pixels. Also, we will have to create a label for this button. So with the text tool I'm going to type download, change this color to white and in the text section we will make sure that our font is open sans with a bold weight and the font size of 16 pixels. Now we'll select both of these layers and align them properly to the horizontal and vertical centers. Specifically for this exercise, we will have to grab both of these layers and convert them to the frame. So with the right click select frame selection and right here in the layers panel you can see how we just created another frame that consists of two layers with double click. I will quickly rename my frame to button slash default and this will mean that we just created our first default state of a button. Then I'm going to duplicate this frame
>
> **[1:36](https://www.linkedin.com/learning/designing-microinteractions-with-figma/implement-a-download-button?u=76281980&t=96)** with control plus D to shortcut. And let's quickly rename our layer to hover. And this frame we are going to use to create our hover micro interaction. Let's make sure that we select the rectangle because we are going to create an effect that it's a drop shadow. In the drop shadow settings. I'm going to also change my color to the green color and also decrease the capacity to 60%. I will also change this position on the x coordinate to the value of four and also increase the blur value to the value of eight. So this one is done. Let's again select our hover frame and with control plus D to shortcut, which has duplicated it where we are going to create our click state.
>
> **[2:27](https://www.linkedin.com/learning/designing-microinteractions-with-figma/implement-a-download-button?u=76281980&t=147)** And in this frame we are going to select again our rectangle and add a stroke, which is going to have a green color and it's width is going to have three pixels. So our first three states of a button already and we are going to make a complex micro interaction. So we will have to create additional states of this button that we are going to prototype later in this exercise. So I will have to again duplicate this frame with control plus D to shortcut. And right here I will again select the rectangle and actually duplicate it. So in the layer panel now we have two rectangles inside of our frame. Let's quickly remove our stroke from this layer and we will actually change the fill color to green. Then I'm going to grab this rectangle and actually move it to the side of this frame. Let's also remove effects because we don't need this drop shadow. And as we are going to work with smart animator detects the main differences between the frames. Let's quickly grab this rectangle, click on control plus C to shortcut and paste it to our previous frame with control plus V to shortcut. And right here I'm going just to hide it because on this stage I do not want to see this green rectangle. We will have to show, which is after some delay. Let's also quickly grab this frame and rename it to delay one.
>
> **[4:05](https://www.linkedin.com/learning/designing-microinteractions-with-figma/implement-a-download-button?u=76281980&t=245)** That will again grab this frame and duplicate it. And instead of having our rectangle with this shape we are going to expand it to the maximum width of our rectangle inside of this frame. Then I will also create two more states for this button. So I will duplicate again my latest frame and right here we will have to go to the frame settings and click on clip content. And that means that all of the content that is going to happen inside of this frame is going to be clipped and it'll not go outside of its margins. So that means that we will have to remove a drop shadow from this frame. In the same way, we'll have to check that the second rectangle also does not have any drop shadow and our text layer. I'm going to move to the top of this frame with my arrow keys. Let's make sure that this text layer goes outside of our visible frame. And instead I'm going to type here another call to action which is view tickets. Let's center this text layer right here to the middle of our frame and in the text layers. Just for now, I will hide it. And finally, as the final state of our button we will just make sure that our view tickets layer is visible. So it was a long way to create all of these states of our button but when you are ready with recreating these steps let's quickly select all of our states. Go to the components drop down
>
> **[5:38](https://www.linkedin.com/learning/designing-microinteractions-with-figma/implement-a-download-button?u=76281980&t=338)** and click on create a component set. In the assets panel you can also see how we just created our local component. And finally, we can start with actually going and [Prototyping](../../Skills/Software%20Development/Prototyping.md) our button. So in a component set we'll have to select our first default state and connect it to our hover state. And in the interaction details, we are going to use while hovering Trigger and as an animation type we'll work with Smart Animate the same way. We'll connect our hover state to the click state. And right here in the interaction details, we will work with on click trigger and the same animation settings. Let's go back to our layers because we will actually test our micro interaction with this initial connections. So in the assets panel I'm going to drag this download button right here to the middle of my screen. And right now if I hover over this button you can see the hover state, and if I click on it then we can see the stroke that we added in our click state. Let's move back to our component state where we are going to set another micro interaction. And in this way we are going to work with after delay I'm going to connect my click state to after delay one state and in the interaction details, let's select after delay.
>
> **[7:13](https://www.linkedin.com/learning/designing-microinteractions-with-figma/implement-a-download-button?u=76281980&t=433)** Here I will set 100 milliseconds, and in a smart animate we will work with 200 milliseconds of ease in duration. Then we will also select this variant and connect it to the next one. And we'll again work with after delay here we'll again change the delay to 100 milliseconds but the Smart Animate ease in is going to have a duration of two seconds. The next step is going to again, connect this frame to the next frame, and we will work again with after delay. In the same way, we'll set 100 milliseconds delay and easing out with a duration of 2000 milliseconds. Finally, we'll create our last prototype connection with after delay trigger. That is also going to have the duration of 100 milliseconds and Smart Animate will have the duration of 300 milliseconds.
>
> **[8:20](https://www.linkedin.com/learning/designing-microinteractions-with-figma/implement-a-download-button?u=76281980&t=500)** Since we just finished with creating our prototype and connections, we can go again to the presentation mode to test out our micro interaction. So again, right here I can hover over with my mouse over this button, and when I click on it then we can see extra steps that we just created in our component set. And I hope you managed to follow the steps to recreate this micro interaction to create a complex interaction for a download button.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1)
> **UI Navigation:** select the (4), click on (4), go to (1)
> **CLI Commands:** make (6)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Create a volume slider](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-volume-slider?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-volume-slider?u=76281980&t=0)** - [Instructor] You're about to learn how to create a volume slider or micro interaction in [Figma](../../Skills/Web%20Development/Figma%20(Software).md). In the exercise file, you'll see the video player frame, which we are going to use to test out our advanced micro interaction. But for now, we are going to move away from this frame, because we are going to create our interactive components. So right here you can see also the icons that we are going to use to create two variants. The first one is going to be the volume slider with the volume off, and the second one will be when the volume is on. So let's grab a rectangle and draw it right here in our working areas. So the width of this rectangle is going to have 400 pixels, and the height is going to have 32 pixels. I will also change the corner radius to the value of 20. And then I will also duplicate this rectangle by using the key shortcut Control + D. So make sure that the second rectangle is positioned exactly in the same place as the first rectangle. Then I will go to the Fill section, grab this pipet tool, and make sure that the fill color is the same as our volume icon. Now let's quickly drag the width of our rectangle to the minimum width, and this is needed to create our first variant of the volume slider. Then I'm going to draw a button
>
> **[1:32](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-volume-slider?u=76281980&t=92)** of this volume slider. So by holding Shift key, I will draw an ellipse with the dimensions of 50 by 50 pixels. Also, the fill of this ellipse is going to have exactly the same color as our volume-x icon.
>
> **[2:03](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-volume-slider?u=76281980&t=123)** So here we easily created our volume slider, and I'm going to grab these icons that I already prepared beforehand and place them next to our slider. So I will make sure that the distance between the slider and the icon is 15 pixels, and the same is going to be with another icon right here. So let's also grab all of these layers and align them to vertical centers. Now we can grab all of these layers again and group them with a key shortcut Control + G. Let's quickly rename our group to volume/off. Now we can grab this group and duplicate with Control + D key shortcut and place it right here to the bottom of our screen. So here we are going to specifically change the position of this ellipse and also change the fill of other elements. So let's actually move our ellipse to this side with arrow keys. I will move it all the way right here to the right edge of my rectangle. The same way I'm going to grab the sides of this rectangle and expand them all the way to the right edge. And we are doing it this way because we are about to apply smart animate that detects the main differences in the elements position, coloring, and other styling settings. Then we'll also grab this icon
>
> **[3:38](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-volume-slider?u=76281980&t=218)** and change its fill color to blue, and the same way we'll grab our first icon and also change its fill color to gray. Here we want to explicitly show that our volume is set at the max. So when you are finished with this modifications, you can also go to the Layers section and rename this group to volume/on. Finally, we can grab both of these groups, go to the components dropdown and click on Create components set. And again, when you open it in the Layers panel, you can see both of the variants where the first slider has the property volume/on, and the other one has the property volume/off. Let's quickly go to the Prototype tab where we are going to create our first prototype interaction. So we will have to select our outlets and connect it to our second variant. So here in the Interaction details we will use On drag trigger and with On drag trigger, we'll change to another property where the volume slider is set to the max. In the Animation type, we will work with Smart animate, and we will use also line easing with a duration of 300 milliseconds. The same way we are going to connect our second ellipse to another variant where we'll select On drag trigger, and change to the first property and also have Smart animate animation with linear easing and duration of 300 milliseconds.
>
> **[5:16](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-volume-slider?u=76281980&t=316)** That's basically our basic prototype and connection that we just created for our interactive component.
>
> **[5:34](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-volume-slider?u=76281980&t=334)** Now I can go back to our main frame, go also to the Assets panel, grab our local component, and place it exactly in the middle of the screen. And right now we are ready to test out our micro interaction where we will be able to interact with the volume slider. And now let's grab this ellipse and try to drag it to the sides, and you can see how we can interact with the volume slider. In the same way, when we are dragging our ellipse back, we can see how the icons are changing their colors. So in this way, with interactive components we could create another advanced micro interaction in Figma.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (2)
> **UI Navigation:** go to (4), dropdown (1), click on (1)
> **CLI Commands:** make (3)
> **Tools:** figma (2)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Create a drop-down menu](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-drop-down-menu?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-drop-down-menu?u=76281980&t=0)** - [Instructor] Right now we are going to create a complex micro interaction for a dropdown menu. In our exercise file you can see the main screen that we will use to test our micro interaction and also another frame that is called dropdown that we will use to create our component set. So this dropdown frame is going to be a default state of our dropdown menu. And first of all, what I have to do is actually duplicate this frame a few times in order to create other states of this dropdown menu. With ctrl + d key shortcut I'm going to make my first copy and I will right click on the mouse to actually ungroup this frame. Then I'm going to duplicate both of the layers that are rectangle and the text layers with ctrl + d key shortcut and place them exactly under my first rectangle. Right here, we are going to type in three options that we'll give to the user when they open this dropdown menu. I will also select this rectangle and in the corner radius settings, I will make sure that the lower corners have the value of zero pixels. Then I'm going to duplicate both of these layers with ctrl + d key shortcut and place them again under the second rectangle. In this case, all of the corners will have the value of zero and I will also change the text value to yellow. Finally, I'll make another copy
>
> **[1:33](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-drop-down-menu?u=76281980&t=93)** of this rectangle and text layers. And in my rectangle the lower corners will have the values of five pixels. Let's also not forget to change text in our text layer. Also, one of the last steps is to actually rotate our arrow by 180 degrees to show that our dropdown menu is open, right here I'm going to group actually all of these layers, right click with the mouse and convert them to frame. Right here in the layer section, let's change the layer name. Then we'll have to copy this frame three times because for each of the menu items we are going to create a hover state. So I will do that by clicking on ctrl + d key shortcut three times. And right here I will select my first rectangle which has red label. And in the fill I'll change the fill color to light blue. I will immediately copy this hex code of this fill so that I can apply it to another frame. Right here I will select another rectangle that has yellow text label and paste this fill color. Finally, I'll do exactly the same in the last frame. So let's also quickly rename our frames
>
> **[3:06](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-drop-down-menu?u=76281980&t=186)** just for our own reference.
>
> **[3:14](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-drop-down-menu?u=76281980&t=194)** Alright, that looks great. So finally, I will have to grab my initial dropdown frame and duplicate it again three times with ctrl + d key shortcut. So right here, why I'm going to duplicate it three more times is because I want to create other states on, when one of these items is selected from my dropdown menu. So right here, instead I'll choose a color text, I'm going to type the menu items that the user will choose. So for example, red, yellow, and green.
>
> **[3:48](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-drop-down-menu?u=76281980&t=228)** In the layer section I will again change the layer names just for the reference.
>
> **[3:58](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-drop-down-menu?u=76281980&t=238)** Perfect, since we are done with creating all of the different states for our component set, we are going to grab all of these frames and actually convert them to the components. So in the dropdown menu of the component let's select create component set. Perfect, and now inside of our component set we can set up our prototype connections. So I'm going to select the prototype tab and grab my first default dropdown and connect it to the open dropdown. So this micro interaction is going to happen with on click trigger and it will change its property to the open variant. Also in the animation tab you are free to use either instant or smart animate as an animation type. In my case, I also use ISO settings with 300 milliseconds of a duration. Then I'll have to move to my open dropdown and select each of these rectangles and link them to the hover states. So right here, instead of click, I will select while hovering, with the same smart animate settings. Let's also repeat the same action for the yellow item that we will link on hover to yellow hover state. And finally, the green item that we are going to link to the green hover state with a while hovering trigger. Now we have three different hover states that we are going to connect to the selected states and right here I will have to select again each of these rectangles.
>
> **[5:30](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-drop-down-menu?u=76281980&t=330)** So in this case, the light blue rectangle with red label, I'm going to link to the red selection item. The interaction's going to happen on click and it'll change the property to red. Let's also grab this light blue rectangle with the yellow label and link it to the yellow selected item. And finally, we are going to grab our third item and connect it to the green selection. Finally, let's also not forget to connect three of this variants to the open dropdown, because we still want our user to be able to choose other options. So right here from the red, I'm going to drag my arrow to the open dropdown, and the interaction is also going to happen with on click trigger. Then I'll do exactly the same prototype connection with the yellow selection, and finally also with the green item.
>
> **[6:36](https://www.linkedin.com/learning/designing-microinteractions-with-figma/create-a-drop-down-menu?u=76281980&t=396)** Perfect, so I think that we are done with our prototype connections and we can slowly navigate back to our mainframe and also from the assets panel we can grab our local component. I'm going to place it exactly in the center of my mainframe and basically I'll just select this frame and test our micro interaction in a presentation mode. Alright, so we are going to click on our dropdown to open three items and if I hover over this rectangles I actually can see my hover states for each of the items. So for example, we can also click on yellow and we can see that our favorite color that we just selected is yellow. Finally, I can open again my dropdown to select any other option that I want, so for example, red. And this was another perfect example of complex micro interaction with interactive components.

> [!info]- Semantic Content
>
> **UI Navigation:** dropdown (17), click on (2), select the (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (3)
> **Env Vars:** iso (1)
> **Cross-References:** in the last (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)

#### [Challenge: Create a like button](https://www.linkedin.com/learning/designing-microinteractions-with-figma/challenge-create-a-like-button?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/designing-microinteractions-with-figma/challenge-create-a-like-button?u=76281980&t=5)** - [Announcer] I challenge you to create a like button micro interaction with interactive components. In this challenge, you'll have to design three button states which are default, hover, and click. Then make sure that you grab those three states and create a component set where later, you'll have to apply proper connections, triggers, and animation types between these variants. As an extra challenge, design a simple image gallery screen and reuse this like button component multiple times. Then you should be able to like and unlike images and test your interactive component in a presentation mode. Good luck!

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [announcer] (1)

#### [Solution: Create a like button](https://www.linkedin.com/learning/designing-microinteractions-with-figma/solution-create-a-like-button?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/designing-microinteractions-with-figma/solution-create-a-like-button?u=76281980&t=5)** - [Instructor] Let's start with designing a Like button. I will quickly navigate to the Resources tab and then in Plugin section, I will search for Feather Icons plugin. I'm going to quickly run this plugin to find already existing icon from this gallery. So in the search bar, I will type like to find the heart-shaped Like button. To start, I will also quickly go to the Layers panel and change the layer name to heart/default As we also have to create two more variants for hover and click states, I'm going to duplicate this icon twice with Control + D key shortcut, and I will also quickly rename these layers in the Layers panel.
>
> **[0:59](https://www.linkedin.com/learning/designing-microinteractions-with-figma/solution-create-a-like-button?u=76281980&t=59)** Then, let's change the styling settings of Hover and Click states. So first of all, in this frame, I'm going to select my vector shape and I will add a fill. And the fill is going to have a light red color. In the same way, we are going to select another vector shape in our heart/click frame. And right here, I will change the stroke color to bright red. I will also copy this hex code with Control + CQ shortcut, add a fill, and also base exactly the same color with Control + VQ shortcut. When you are ready with changing styling settings of your icons, let's select all of these layers, go to the Components drop down and select Create Component Set. Here we have our heart component set with three different variants that we are going to prototype. In the Prototype tab, I'm going to select my first variant and create our first connection. So let's connect the first variant to the second variant where in the Interaction details we are going to use While Hovering trigger and we are going to change to the property that is Hover. In the Animation Type, I will also work with Smart Animate with Ease Out Easing and Duration of 300 milliseconds. Now, let's connect, actually, our second Hover state to the Click state. And in this way, we'll also work with onClick trigger that will change its property to the Click state and in the Animation settings,
>
> **[2:32](https://www.linkedin.com/learning/designing-microinteractions-with-figma/solution-create-a-like-button?u=76281980&t=152)** we will also work with Smart Animate with exactly the same settings for Easing and Duration. Finally, let's also not forget to connect our last variant with the first default variant because we would want to also un-click our Like button, so the Interaction middle settings remain also the same. And now, we just finish our first part of this challenge and we can slowly navigate to the Frame tool. And from the Frame presets, we are going to select iPhone 14. That is going to be our main frame for testing out our microinteraction. In this frame, I'm going to start with creating a title, which is going to be Your Gallery. Let's also increase the font size to 26 and also change the font weight to semi-bold. Then, I will also create three rectangles that are going to be my images that I will soon be able to like or unlike. I'm going to center this rectangle, right here in my frame, duplicate with Control + DQ shortcut, place it under my first rectangle and duplicate it again with exactly the same key shortcut. Let's again select all of these rectangles, align them exactly to the center and change the corner radius value to 20 pixels. I will also increase the space between all of these rectangles to the value of 30.
>
> **[4:07](https://www.linkedin.com/learning/designing-microinteractions-with-figma/solution-create-a-like-button?u=76281980&t=247)** Then, by selecting our first rectangle, I will go again to my Resources tab and instead of Feather Icons plugin, I will search for Unsplash.
>
> **[4:23](https://www.linkedin.com/learning/designing-microinteractions-with-figma/solution-create-a-like-button?u=76281980&t=263)** And Unsplash is another useful plugin to use for free stock images for your design projects. Let's quickly select one keyword, for example, minimal, and I'm going to search for some images that I would like to use for this project. And right now, I'm going to scroll down to find the images that I want to use for my project. So let's select also second rectangle and add another image. And in the same way, we'll also add the third image to our screen.
>
> **[4:58](https://www.linkedin.com/learning/designing-microinteractions-with-figma/solution-create-a-like-button?u=76281980&t=298)** That's it, we just created a very simple user interface for our mobile app. And in the Assets panel, we can see a local component with our Like button that we can quickly drag to our main screen. So I'm just going to place it right here in the upper right corner and make sure that the distance from the top and right margins is 20 pixels. Let's duplicate this Like button with Control + DQ shortcut and I'm going to position it also on top of the second image.
>
> **[5:35](https://www.linkedin.com/learning/designing-microinteractions-with-figma/solution-create-a-like-button?u=76281980&t=335)** And I will also duplicate this like button one more time with Control + DQ shortcut and make sure that it's properly positioned as well. Now, when you are ready with your design, let's quickly select our frame and navigate to the Presentation mode. So right here in the Presentation mode, I can hover over my Like button to see the Hover state. And if I click on my icon, I quickly see the Click state, which is created in our Component Set. In the same way, I can like another image right here and also this image as well. Let's also check if unlike interaction works. So yes, we can also unlike the button. And in this way, you just learned how to create a simple Like button microinteraction in [Figma](../../Skills/Web%20Development/Figma%20(Software).md) with interactive components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (1)
> **UI Navigation:** navigate to (3), go to (2), scroll down (1), click on (1)
> **CLI Commands:** find (3), make (2)
> **Code Identifiers:** onclick (1), iphone (1)
> **Tools:** figma (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Feel confident designing your own Figma microinteraction](https://www.linkedin.com/learning/designing-microinteractions-with-figma/feel-confident-designing-your-own-figma-microinteraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/designing-microinteractions-with-figma/feel-confident-designing-your-own-figma-microinteraction?u=76281980&t=0)** - [Instructor] Congratulations, you've made it to the end of the course! During this course, you learned about micro-interactions, their main benefits in [user experience design](../../Skills/Web%20Development/User%20Experience%20Design%20(UED).md), and also how to design micro-interactions from scratch in [Figma](../../Skills/Web%20Development/Figma%20(Software).md). You also discovered the basics of [Prototyping](../../Skills/Software%20Development/Prototyping.md) features in Figma and how to use presentation mode and devices to test your micro-interactions. We also covered different triggers, transitions, and animation types that we could use to create complex micro-interactions with interactive components. And as a next step I encourage you to use the gain knowledge about micro-interactions in your own design projects. Take a look at your favorite applications and websites and find examples of micro-interactions that inspire you and simply grab these examples and try to recreate them in Figma from scratch so that you can involve your skills even further. Good luck with your learning journey!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (3), [User experience design](../../Skills/Web%20Development/User%20Experience%20Design%20(UED).md) (1), [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1)
> **Tools:** figma (3)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Tetiana Gulei](../../Instructors/Web%20Development/Tetiana%20Gulei.md)

## Path Context

### In [Design User Experiences with Figma](../../Paths/Web%20Development/Learning%20Paths/Design%20User%20Experiences%20with%20Figma.md)
← [Figma- Designing with Variables and Conditionals](Figma-%20Designing%20with%20Variables%20and%20Conditionals.md) | **5 of 6** | [Figma- From Design to CSS Implementation](Figma-%20From%20Design%20to%20CSS%20Implementation.md) →

## Appears In

- [Design User Experiences with Figma](../../Paths/Web%20Development/Learning%20Paths/Design%20User%20Experiences%20with%20Figma.md)

---

[↑ Back to top](#)