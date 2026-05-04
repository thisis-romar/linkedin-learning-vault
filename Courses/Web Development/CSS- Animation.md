---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: css-animation-14153685
url: "https://www.linkedin.com/learning/css-animation-14153685"
duration_minutes: 110
duration: 1h 50m
level: Intermediate
updated: 11/9/2022
learners: 5568
skills:
  - Cascading Style Sheets (CSS)
  - Interactive Web Content
exercise_files: true
github: "https://github.com/LinkedInLearning/css-animation-2882049/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQE9uYdz7sm7Mw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668021326670?e=2147483647&amp;v=beta&amp;t=QLJ9vKjw6QjuMcPy0oy2pjU8WAxkM5JDrid6vimzvgQ"
linkedin_topic: Web Development
learning_paths:
  - '[Learn CSS](../../Paths/Web%20Development/Learning%20Paths/Learn%20CSS.md)'
prev_courses:
  - '[CSS- Images](CSS-%20Images.md)'
next_courses:
  - '[CSS- Display](CSS-%20Display.md)'
path_nav: '[{"path":"Learn CSS","position":6,"total":12,"prev":"CSS- Images","next":"CSS- Display"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/cascading-style-sheets-css
  - skill/interactive-web-content
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/CSS-%20Animation.md)

![CSS: Animation](https://media.licdn.com/dms/image/v2/C4E0DAQE9uYdz7sm7Mw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668021326670?e=2147483647&amp;v=beta&amp;t=QLJ9vKjw6QjuMcPy0oy2pjU8WAxkM5JDrid6vimzvgQ)

# CSS: Animation

> In recent years, web animation has grown into a powerful option for enhancing user experience on the web, and CSS animation has become a core skill for web designers and developers. In this course, Val Head leads you through the CSS animation skills you need to bring motion into your interactive projects. Val introduces CSS transforms and transitions—the foundation of most CSS animations—and shows

> [LinkedIn Learning](https://www.linkedin.com/learning/css-animation-14153685) | 1h 50m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [CSS animation advantages](#css-animation-advantages)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Overview of CSS Transitions and Transforms**](#1-overview-of-css-transitions-and-transforms) (5 videos)
  - [CSS transform basics](#css-transform-basics)
  - [Simple 3D transforms](#simple-3d-transforms)
  - [CSS transitions](#css-transitions)
  - [Challenge: Adding a transition](#challenge-adding-a-transition)
  - [Solution: Adding a transition](#solution-adding-a-transition)
- [**2. Understanding CSS Animations**](#2-understanding-css-animations) (8 videos)
  - [CSS keyframe animation fundamentals](#css-keyframe-animation-fundamentals)
  - [animation-delay and animation-fill-mode](#animation-delay-and-animation-fill-mode)
  - [A closer look at animation-fill-mode](#a-closer-look-at-animation-fill-mode)
  - [animation-direction](#animation-direction)
  - [Timing functions and easing](#timing-functions-and-easing)
  - [The steps() timing function](#the-steps-timing-function)
  - [Challenge: Adding keyframes to an animation](#challenge-adding-keyframes-to-an-animation)
  - [Solution: Adding keyframes to an animation](#solution-adding-keyframes-to-an-animation)
- [**3. CSS Animation Building Blocks**](#3-css-animation-building-blocks) (6 videos)
  - [Infinitely looping animations](#infinitely-looping-animations)
  - [Pause and play with animation-play-state](#pause-and-play-with-animation-play-state)
  - [Animating 3D transforms](#animating-3d-transforms)
  - [Chaining multiple keyframe animations](#chaining-multiple-keyframe-animations)
  - [Challenge: Adding a third animation to the chain](#challenge-adding-a-third-animation-to-the-chain)
  - [Solution: Adding a third animation to the chain](#solution-adding-a-third-animation-to-the-chain)
- [**4. Animating SVGs with CSS**](#4-animating-svgs-with-css) (3 videos)
  - [Preparing an SVG for animation](#preparing-an-svg-for-animation)
  - [SVG exporting and optimization settings](#svg-exporting-and-optimization-settings)
  - [Animating SVG with CSS](#animating-svg-with-css)
- [**5. Advanced CSS Animation Techniques**](#5-advanced-css-animation-techniques) (4 videos)
  - [Creating a motion path for CSS with offset-path](#creating-a-motion-path-for-css-with-offset-path)
  - [Animating CSS motion path with offset-path](#animating-css-motion-path-with-offset-path)
  - [Dynamic CSS animation with CSS variables](#dynamic-css-animation-with-css-variables)
  - [Animating variable fonts with CSS](#animating-variable-fonts-with-css)
- [**6. Tools for Creating CSS Animations**](#6-tools-for-creating-css-animations) (1 videos)
  - [Using browser animation inspection tools](#using-browser-animation-inspection-tools)
- [**Conclusion**](#conclusion) (1 videos)
  - [Helpful online tools for CSS](#helpful-online-tools-for-css)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [CSS animation advantages](https://www.linkedin.com/learning/css-animation-14153685/css-animation-advantages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/css-animation-advantages?u=76281980&t=0)** - Motion design is quickly becoming a core skill for web designers. Designers and developers are realizing the power of web animation to engage, delight, and communicate with their users. I'm Val Head and I'll be leading you through this course on CSS animation. I've spent much of the last few years helping folks to learn how to make web animation work for them and to get their brand in motion in a meaningful way. I'm the author of Designing Interface Animation published by Rosenfeld Media, and I'm excited to introduce you to the world of CSS animation. This course is for web designers and developers who have some experience with CSS and want to take their understanding of CSS animation to the next level. I'll show you how CSS can be used to animate both [HTML](../../Skills/Web%20Development/HTML.md) elements and SVG. We'll also discuss how to get the best performance out of your animation, as well as tools that will help you build and troubleshoot your animation work. Over the past few years, web animation has grown into a powerful option for enhancing the [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) on the web. CSS animation is the perfect place to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Env Vars:** css (6), html (1), svg (1)
> **CLI Commands:** make (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - motion (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/css-animation-14153685/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Ray] This is Ray Villalobos, Senior Staff Instructor at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, and I'm going to show you how to work with LinkedIn Learning courses using [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md). Codespaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real world, hands-on practice that mirrors [Software Development](../../Topics/Software%20Development.md) in the workplace. This course was created using GitHub Codespaces. Using Codespaces, you have everything you need to get going without needing complex installations or build tools. One click and you're ready to go. First, make sure you've signed up for a free GitHub account and that you've logged in. You just see your profile icon right here. When you go to the repository for one of our courses, look for the Code button. Click on Create codespace. The first time you open up a codespace, it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers. The cloud editor's menu lives in a hamburger icon inside the activity bar. The menu will let you see the keyboard shortcuts for your operating system. Let's find the shortcut for the Command Palette. Look in the hamburger menu, under View, and then look for the keyboard shortcut for your operating system. The activity bar has the most common tools you'll need to work with projects.
>
> **[1:33](https://www.linkedin.com/learning/css-animation-14153685/using-github-codespaces-with-this-course?u=76281980&t=93)** You can, for example, show or hide the Explorer, do a search and replace for content, manage features of the repository, and much more. By the way, if for any reason you lose the activity bar, you can get it back using the Command Palette. Your course can have one or more extensions pre-installed, based on the course you're taking. Those can be found in the Extensions panel. Because this is a browser, it's easy to inadvertently close the browser window and lose the editor. If you do that, don't panic. Codespaces saves everything you're doing on a virtual machine. You can always get the codespace back for this repo by going to the Code menu and finding your codespace right here. Notice that it even remembered that I had opened the Extensions panel. This is a sample of what a multi-branch repository looks like, which is more common when you're working with web frameworks. If you go to the Branch icon on the status bar, you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a b at the end of the branch, that's how the the code looked at the beginning. If you see an e, that's how the code looked at the end. Let's switch to how the code looked on chapter two
>
> **[3:07](https://www.linkedin.com/learning/css-animation-14153685/using-github-codespaces-with-this-course?u=76281980&t=187)** and the third video. I'll choose the beginning branch. As you work through a course, you might make some changes on a branch. I'm going to make a minor edit on the index.[HTML](../../Skills/Web%20Development/HTML.md) file right here. I'm going to go ahead and save that, and you can see that I've modified this file, because there's an M right here and the branch name now has an asterisk on it. If I try to switch to another branch that causes major changes, like, say, 0703e, I may see a dialog box like this. If you don't care about saving your changes, you can simply hit the Force Checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Forking lets you create your own copy of the repository on your account, so that you can keep any changes that you've made, even if you've deleted the codespace. To create your own fork, you can click on the Fork button on the repository. I'm going to hit Create fork. I now have my own copy of this repository, and if I want to, I can start a new codespace on that fork.
>
> **[4:33](https://www.linkedin.com/learning/css-animation-14153685/using-github-codespaces-with-this-course?u=76281980&t=273)** This fork version is almost exactly like the original repository, but it will let you push your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[4:54](https://www.linkedin.com/learning/css-animation-14153685/using-github-codespaces-with-this-course?u=76281980&t=294)** I'm going to save it. You'll note that there's an M right here, as well as an asterisk on this branch. In the Source Control panel, you can also see a one for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the Commit button, and I'll ask it to go ahead and stage the changes, and then I'm going to hit this button here to commit this onto my own version of the repo. I'll hit OK. You can also let it go ahead and run [Git](../../Skills/Software%20Development/Git.md) [Fetch](../../Skills/Web%20Development/Fetch.md). That way it'll automatically sync with your forked repo. Now that change will be stored in your own version of this repository. Don't worry if you forget to fork a repo and then try to push changes. Codespaces will also ask you if you want to create a fork automatically. Some courses will let you work with live previews or create other ports so that you can have a web view of what you're doing. This is managed through the Ports panel in the status bar. Right now, there are no ports forwarded, but if I open up the Live Server extension, you can see a preview of that file. Now, if we go back to the codespace to manage ports, you can click on the icon in the status bar and take a look at the currently available ports.
>
> **[6:28](https://www.linkedin.com/learning/css-animation-14153685/using-github-codespaces-with-this-course?u=76281980&t=388)** If you want to open this up in a browser, you can click right here. Look for additional course specific tips from the instructor. Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (6), [GitHub](../../Skills/Software%20Development/GitHub.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **UI Navigation:** switch to (4), click on (3), go to (2)
> **CLI Commands:** make (4), find (1), git (1)
> **Tools:** github (4), visual studio (2)
> **Definitions:** is a  (4)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)


### 1. Overview of CSS Transitions and Transforms

[↑ Back to Table of Contents](#table-of-contents)

#### [CSS transform basics](https://www.linkedin.com/learning/css-animation-14153685/css-transform-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/css-transform-basics?u=76281980&t=0)** - [Instructor] Transforms, transitions, and animations are all things that CSS can do, but their names are so similar they can sometimes be confusing. All three terms sound like they could possibly make things move, but not all three of them do. The focus of this course is on CSS keyframe animation. But since all three of these are frequently used together in web animation, we'll cover transforms and transitions briefly as well. Let's dive into transforms first. I like to think of these as the yoga of CSS. We can use them to bend and twist those flat rectangular [HTML](../../Skills/Web%20Development/HTML.md) objects into all sorts of configurations. I'll use this robot image here to demonstrate some of the things that transforms can do. Transforms are often used to translate or move an object around the browser window, so we'll start with that. For example, in our CSS, we can apply a transform of a translation to our robot to move it slightly across the screen. So we'll add a transform of a translation on the x-axis and we'll move this image 300 pixels to the right on the x-axis. The x-axis is the horizontal one. So when we save this and go back to refresh our browser, we'll see that our robot image has moved 300 pixels to the right. Translations can take other units as well, like amps and percentages, for example. But know that for transforms, the percentage refers to the object itself, not as container.
>
> **[1:33](https://www.linkedin.com/learning/css-animation-14153685/css-transform-basics?u=76281980&t=93)** So if we go back to our CSS and change that 300 pixels to 100%, when we save and refresh our page once more, we'll see that our robot has moved to the right the equivalent distance of its own width, which happens to be slightly less than 300 pixels in this particular case. We can also translate on both the x and y-axes by using the translate function and giving it two coordinates. So for example, we can change this translate x to just translate and then give it two numbers: the first one for the translation on the x-axis and the second for the translation on the y-axis. So we can say 100 pixels on the x-axis and perhaps 200 pixels on the y-axis. So when we save that and refresh our robot once more, the image has moved slightly over 100 pixels to the right and down 200 pixels. Transforms can also scale and rotate objects in addition to translating them. We can also perform those on both the x and y-axis at the same time or separately. So let's add some rotation and scale to our robot and see what happens. I'll add a scale of two after our translation and then a rotation of 45 degrees. So that will make our robot double in size, the scale of two, and rotate it 45 degrees. If we save that and refresh our page once more, we'll see that our translation stayed in place
>
> **[3:07](https://www.linkedin.com/learning/css-animation-14153685/css-transform-basics?u=76281980&t=187)** and our robot is now twice its size and rotated 45 degrees. Notice how each time we refresh our page, our robot shows up in a slightly different position and scale and rotation, but we never see any movement or anything like that. Transforms will change how our object appears, but they won't create animation. Transforms have a stacking order, which means the order you apply each transformation in will affect the overall look. Each additional transformation is compounded on top of the ones that have come before it in the list. So if we go back to our CSS and change the order of these transformed functions, we'll see a slightly different result. So for example, I can take this rotation and move it to the beginning of our transform list. And then maybe I'll also take the scale and move it before the translation as well. And now when we save that and refresh our page, our robot is in a slightly different position because our transforms were applied in a different order. So that goes to show that it's important to remember when we're using the transform property like this, that the order of the transform functions will affect the end result. I should note that some browsers are starting to support independent transform properties behind an experimental flag. But at the time of recording, this isn't yet widely supported so we'll be using the single transform property like we just saw in this example. So that's a quick look into transforms and how you can use them to change the appearance of elements on your page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** css (6), html (1)
> **Analogies:** for example (4)
> **Cross-References:** go back to (3)
> **CLI Commands:** make (2)
> **Definitions:** refers to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Simple 3D transforms](https://www.linkedin.com/learning/css-animation-14153685/simple-3d-transforms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/simple-3d-transforms?u=76281980&t=0)** - [Instructor] One of the most interesting things about CSS transforms is how easily they allow us to create the effect of 3D. I'll be touching on the basics of 3D transforms in this video, but there are other CSS courses in the library that cover this in much more depth as well. Getting to 3D in CSS can be as straightforward as just rotating around the x or y-axis. Doing that angles part of the object on screen away from you and that makes you get a 3D effect. I'll use this robot image to demonstrate. It's just an image sitting in a [HTML](../../Skills/Web%20Development/HTML.md) page, but I can still apply 3D transforms to it. In my CSS file, I'll add a transform rule to our robot image. So we will transform this and we will give it a rotation on the x-axis of 45 degrees. In browsers, the x-axis is the one that runs horizontally, so it's essentially like we are rotating around a pole going through the middle of this image. If we save this and preview it in our browser, it may not be exactly what you were expecting. It looks a little bit misshapen and not quite right just yet. To get 3D transforms to look right or at least as we expect, we need to add some perspective. Going back to our CSS, there are two places we can add perspective. We could add it to the transform rule itself or we can set the perspective property on a parent element. I prefer to set this on the parent element. That way if I decide to add any additional elements
>
> **[1:33](https://www.linkedin.com/learning/css-animation-14153685/simple-3d-transforms?u=76281980&t=93)** for 3D transforms later, they'll use the same perspective setting. So I'll go up to my parent element which in this case happens to be my body and I will add a perspective of 1,000 pixels. The perspective length can be set in pixels or ems and it represents an approximation of how far away you are from the transforming element. Lower values show a more drastic effect and higher values show a flatter effect. So if we save and preview our 1,000-pixel perspective, the rotation looks a little bit more like you were expecting. We get that kind of 45-degree lean back feel to it. To contrast, take a look at what that same rotation looks like with a 100-pixel perspective. So if we go back and change our 1,000 pixels to 100 pixels, the effect is much more dramatic. Rotating around the y-axis will get you a similar result as just rotating on the up and down or vertical axis, and you can also rotate around both the x and y-axis for a combined effect. So we can add an additional rotation on the y-axis of 20 degrees and I will also go back and change that perspective to 1,000 instead of 100 so we can be a little bit less drastic. When I save and refresh that, you can see we have rotation on both the x and y-axis and we've transformed this robot a little bit more within 3D space. You can also move objects in 3D space using the translate3d function.
>
> **[3:07](https://www.linkedin.com/learning/css-animation-14153685/simple-3d-transforms?u=76281980&t=187)** The translate3d function takes three numbers, one for each of the x, y, and z-axes. So if we go back to our CSS, we can add a translate3d and we can move our robot say 100 pixels on the x-axis, 200 pixels down on the y-axis, and minus 100 pixels on the z-axis. So essentially what this will do is move our robot slightly over to the right by 100 pixels, slightly down by 200 pixels on the y-axis, and slightly back in space with that negative 100 pixels on the z-axis. So if we save and preview our robot now, it kind of looks like our image just got smaller. It should, it's further away from us now, but it's difficult to see that distance when we just have one object on screen. Translations like this are much more visually effective when they're animated or transitioned so we can see that movement backward into space. So that's a dust a short look at what CSS transforms can do to give us a look of 3D space.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** css (7), html (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [CSS transitions](https://www.linkedin.com/learning/css-animation-14153685/css-transitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/css-transitions?u=76281980&t=0)** - [Narrator] CSS transitions are one of the ways we can create animation with CSS even though they're not called animations. It's confusing, but true. By definition, animation means causing change over time and transitions absolutely do that. They just do it in a different way then CSS key frame animations do. Let's start with creating a button that transforms on hover to take a quick look at what CSS transitions can do. Transitions need a beginning and end state to transition between, that's why we tend to use them for things like hover states. The initial styles on our element, like what we're seeing here, are the beginning state and the hover states we define end up being our end state. So let's start by defining our hover state first. We'll go to our CSS and a hover state for our button and on hover, I'd like to have this button both grow a little bit and change color. So we'll add a transform with a scale to have that growing and we'll make it 1.3 so it'll grow just a little bit and we'll add a background color to change the color, and I'm going to change this to that same purple that we have on the border of the button. And then to make sure we have good contrast, I will also change the color of the text. So if we save that in preview our page now, we have our hover state but it's just a hard cut to those change properties. There's no nice animated change that we wanted to see.
>
> **[1:35](https://www.linkedin.com/learning/css-animation-14153685/css-transitions?u=76281980&t=95)** So let's go back to our CSS and add a transition to smooth things out. We apply the transition property to our button directly. It's kind of like we're setting a property to say, hey button, if any of your properties happen to change in the future, here's how you should handle it. So add a transition to our button and the minimum we need for a transition is a duration, so we'll set the duration to 0.5 seconds here. This is probably a good time to stop and note that we can use both seconds or milliseconds for durations in CSS. Milliseconds are one one thousandth of a second, so 0.5 seconds is the same as 500 milliseconds and 500 milliseconds is the same as 0.5 seconds. In most cases, it's just a matter of preference as far as which one you prefer to use. So if we save this and go back and preview our button once more, we can see a nice smooth transition when we hover on and off our button. Notice how setting that single transition animates both the movement into the hover, as well as back to the initial properties when we hover off the button. Right now, both our changing properties are transitioning at the same time, but we can have even more granular control over our transition effects by giving each property its own transition values. So let's first assign a transition to just our background property. We can have that take 0.3 seconds and give it an easing of ease-in. Then we comma separate the transitions
>
> **[3:08](https://www.linkedin.com/learning/css-animation-14153685/css-transitions?u=76281980&t=188)** for our separate properties and we can go and have a separate transition defined for our transform properties. And we'll have this one take slightly less time of 0.2 seconds and give it an easing of ease-in-out. When you're writing multiple transforms, make sure to comma separate the different rules. Now, when we save and preview our button one more time our background color and scale transform change at slightly different rates. Just by separating out these two different transitioning properties, we've created a slightly more nuanced effect. Transitions can also be delayed, so let's add a delay to just one of our transitioning properties to see how that changes the look of things. In the short hand notation I'm using, the second time-based value will be used as the transition delay. So I'll add a 0.1 second delay to the transition on our transform property. So this first time-based value, the 0.2 seconds, is our duration for our transition and that second time-based value, the 0.1 seconds, is the delay for our transform transition. So we'll save that and preview our button one more time. And now we can see that our scale transform starts transitioning just a little bit after our background color starts changing. So that's the basics of how we can create some simple state-based animation with CSS transitions. There are a whole lot of interesting animated effects you can make with transitions.

> [!info]- Semantic Content
>
> **Versions:** 0.5 (3), 0.2 (2), 0.1 (2), 1.3 (1), 0.3 (1)
> **Env Vars:** css (8)
> **CLI Commands:** make (4)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** kind of like (1)
> **Best Practices:** make sure to (1)

#### [Challenge: Adding a transition](https://www.linkedin.com/learning/css-animation-14153685/challenge-adding-a-transition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/challenge-adding-a-transition?u=76281980&t=0)** (bright electronic music)
>
> **[0:05](https://www.linkedin.com/learning/css-animation-14153685/challenge-adding-a-transition?u=76281980&t=5)** - [Instructor] We've been working with basic transforms and transitions, so for a nice follow-up challenge, let's add an additional transition to the button we were just working on. You can use the files that you've already been using or the exercise files I provided for this challenge. This is a nice short challenge. You should spend about five minutes or so adjusting your additional transition and then watch the solution to see what I came up with.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)

#### [Solution: Adding a transition](https://www.linkedin.com/learning/css-animation-14153685/solution-adding-a-transition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/solution-adding-a-transition?u=76281980&t=0)** - [Narrator] For my solution, I added an additional transition to the border radius property, so my hover now looks like this. To show you what I did, I'll go back to my CSS file. And what I did was add a border radius of 20 pixels to the button's hover styles. And then I added an additional property to the transition for border radius. I gave it a duration of 0.3 seconds, just like our background color, and the same easing of ease in like our background color, just to have a couple of things line up with the same timing and easing. And then the end result is what we saw here. And there we have a hover effect with one more transitioning property, and some practice with CSS transitions.

> [!info]- Semantic Content
>
> **Env Vars:** css (2)
> **Versions:** 0.3 (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music begins) (1)


### 2. Understanding CSS Animations

[↑ Back to Table of Contents](#table-of-contents)

#### [CSS keyframe animation fundamentals](https://www.linkedin.com/learning/css-animation-14153685/css-keyframe-animation-fundamentals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/css-keyframe-animation-fundamentals?u=76281980&t=0)** - [Narrator] Let's get started with some CSS keyframe animation. In this lesson, we'll create a simple animation of tech scaling up into view with a little bit of an overshoot to demonstrate the main components of CSS keyframe animations. The [HTML](../../Skills/Web%20Development/HTML.md) behind our example is pretty straightforward. Our text is in H2 sitting within our container div. If we move to our CSS file, we have some text sizing rules and some basic positioning going on, and that's about it. So let's start adding some animation. There are two main parts to any CSS animation. We need to define the animation keyframes in the @keyframes rule, and then we need to assign those keyframes to a specific element or elements. You can do these two steps in any order, but I prefer to define the animation first and then assign it to something. So moving to our CSS file, we'll start by creating our CSS animation by defining its keyframes using the @keyframes rule. And we'll give this animation a name because otherwise we won't be able to assign it later, and we'll call this one scaleIn because that's essentially the effect we're creating. Once we have our @keyframes block, we define the values for the animating properties at various points during the animation. Any property that you want to have changed over the course of one cycle of the animation needs to be listed in your keyframes. There are multiple options available for how to define the keyframes within your @keyframes rule. We can use key words like to and from for keyframe animations that are animating
>
> **[1:33](https://www.linkedin.com/learning/css-animation-14153685/css-keyframe-animation-fundamentals?u=76281980&t=93)** only between two states, but in my case I'm going to use percentages to define my keyframes for maximum flexibility. The 0% keyframe or the "from" keyframe represents the start of the animation and the 100% keyframe or the "to" keyframe represents the end state of the animation. And we can use percentage values in between to define as many additional stages of the animation as we want along the way. So I'm going to start our text at a small size, say 20% of its full size or a scale of 0.2 for our 0% keyframe. For this effect, I know I want it to grow to be a bit oversized before it animates back to its intrinsic size to give it a bit of that overshoot feel. So we'll add a scale of 1.1 or 110% of the given size at the 85% keyframe. And then, at the end of the animation I want things to go back to their given size or a scale of one, so that will be our 100% keyframe. And that completes our @keyframes block. But if we previewed our file right now, nothing would happen. There would be no animation to see. We've defined the keyframes for our animation but we still need to assign it to a specific element in order to see it in action. To assign an animation to an element, we give that element some additional CSS properties. So in this case, that's our H2. The first one we'll need to define is the animation name and we'll set this to be the same thing we called our keyframe block.
>
> **[3:06](https://www.linkedin.com/learning/css-animation-14153685/css-keyframe-animation-fundamentals?u=76281980&t=186)** And this is essentially saying to our H2, hey, use this specific set of keyframes, the one we called scaleIn. The second property we absolutely have to add is animation duration. Our keyframe block defines what will change over the course of the animation but we need to tell it how long to take as well. So let's set this to two seconds. Now when we preview our file we see some animation happening. We've just set the minimum needed to create a CSS keyframe animation. We've got the keyframes, we assigned it to an element and we set a duration. So now we've completed our first CSS keyframe animation, our title scales up with a bit of an overshoot and it's looking pretty neat. Next, we'll look at some additional properties that let us fine tune our animations for even more control over the effect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** css (9), html (1)
> **Code Identifiers:** scalein (2)
> **Versions:** 0.2 (1), 1.1 (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)

#### [animation-delay and animation-fill-mode](https://www.linkedin.com/learning/css-animation-14153685/animation-delay-and-animation-fill-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/animation-delay-and-animation-fill-mode?u=76281980&t=0)** - [Instructor] Let's look at how properties like animation-delay and animation-fill-mode can help us do more with our key frame animations. Both of these properties are ones I use a lot in my work and I bet you'll find them super useful too. We'll start with animation-delay. It works exactly like transition-delay except it's applied to key frame animations. Animation-delay lets you specify a certain amount of time that should pass before the key frame animation takes effect on the object you've applied it to. Let's add a delay to the text animation we've been working on to see how it works. We'll go to our h2 rule and add one more animation property, and that property is animation-delay, and I'll give it a delay of five seconds, which is probably excessively long in most cases, but that way, we'll really be able to see what's happening. Now when we refresh the page, there's a five second delay before animation starts. However, it might not look exactly how you expected. We see the text at full size for those five seconds of the animation-delay. The first key frame of our animation, that 0% key frame, has styles to scale the text down to 20% of its normal size, but that key frame styles are only applied once the animation starts, not during any initial delay. So that's why we see the text at full size during those five seconds delay, even though that's not where the animation starts, and it's also where animation-fill-mode comes in handy. The animation-fill-mode property essentially describes how time around the animations actively play in duration should be handled.
>
> **[1:34](https://www.linkedin.com/learning/css-animation-14153685/animation-delay-and-animation-fill-mode?u=76281980&t=94)** That means it lets you control what happens during the delays before an animation starts and also what happens after an animation's duration ends. So if we go back to our CSS, in addition to the animation-delay property, I'm going to add an animation-fill-mode value of backwards. The animation-fill-mode value of backwards means that the styles from the animation's first key frame, in this case, the 0% key frame, will be applied backwards in time to fill the time during our delay. Now when we preview our text animation, we see the behavior we were expecting during that five second delay at the beginning. I bet you're starting to see why animation-delay and animation-fill-mode are two properties that are used together so often.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Env Vars:** css (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [A closer look at animation-fill-mode](https://www.linkedin.com/learning/css-animation-14153685/a-closer-look-at-animation-fill-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/a-closer-look-at-animation-fill-mode?u=76281980&t=0)** - [Instructor] Animation-film-mode is a very useful property for CSS animation, but it can be a bit confusing at first. The way I like to think of it is that the animation-film-mode property determines how the time around an animation is filled in. Animation-film-mode is set to none by default, which is why you might notice that certain CSS animations like this one here, jump back to their starting position after an animation that moves them somewhere else has completed. The key frames behind that robot animation, tell it to start from where it is and to move 900 pixels to the right. But once it finishes playing, the robot goes right back to where it was and that feels really weird at first. I mean, we just told that to go over there, but now it went back here, and you might notice a similar behavior during animation delays like we saw in the last video. The reason for all this is that CSS animations are temporal in nature. Once the duration of the animation completes, the styles in that animations key frames are no longer acting on the element they animated. That is, not unless we use animation-film-mode to specify we want them to. If you want your animating element to take on the styles of the first keyframe of an animation, in other words, if you want it to look like the first keyframes property's already applied during an animation delay, set your animation-film-mode to backwards. That will take the styling from the first keyframe in the animation and kind of pull it backwards in time during the animation delay. On the other hand, if you want your animating element
>
> **[1:34](https://www.linkedin.com/learning/css-animation-14153685/a-closer-look-at-animation-fill-mode?u=76281980&t=94)** to stay in place once an animation that moves it has finished, or in other words, you want the element to keep the properties defined in the last keyframe of the animation past the animation's duration, set your animation-film-mode property to forwards. That essentially takes the styles from the last keyframe of the animation and pushes them forward in time or holds them forward in time. However you prefer to think about it. Conveniently, animation-film-mode also has the option of both. Which gives the behavior of forwards and backwards combined. Personally, I tend to use both most often. And I'll even assign it to all my animations when I'm [Prototyping](../../Skills/Software%20Development/Prototyping.md) something even if I'm not sure I need it yet. It saves me that extra step of wondering why things look funny and having to go back and add it in later. You might find that to be a helpful trick too. In any case, know that if the element you're animating isn't looking quite right during any animation delay or after the animation has finished, the animation-film-mode property will most likely fix that for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1)
> **Env Vars:** css (3)
> **Definitions:** in other words (2), is a  (1)
> **Cross-References:** in the last (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [animation-direction](https://www.linkedin.com/learning/css-animation-14153685/animation-direction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/animation-direction?u=76281980&t=0)** - [Instructor] We've been talking about the various properties outside of the keyframe definition that we can use to change how an animation looks. One of those properties that can be especially useful for this is animation-direction. Animation-direction lets us manipulate what order our keyframes are executed in, and we have a few different values to choose from for this property. We can set the animation-direction to normal, which is default or reverse or alternate or alternate-reverse. Animation-direction is easiest to demonstrate by animating position, like the animation we're looking at here. But now that this property can be applied with any CSS keyframe animations, not just one's animating position. Right now, we've got our robot moving across the screen from left to right using this set of keyframes. You might notice the lack of a 0% keyframe here. That's a handy trick you can use when you want an object 0% keyframe styles to be the same as whatever styles are currently applied to that object. If there's no 0% keyframe present, the current styles applied to the object are used instead. So our robot image starts from where it was positioned intrinsically on the page and animates a distance 700 times its width on the X axis to the right. If we look at the properties applied to our robot image, you'll notice two things. The first is this animation iteration count of three, which is why we saw our robot moving across the screen three times, and you'll also notice that we have no animation-direction set. So we're seeing it animate with the default value
>
> **[1:33](https://www.linkedin.com/learning/css-animation-14153685/animation-direction?u=76281980&t=93)** of normal for animation-direction, which in this case is from left to right. If we want our keyframes to execute in the opposite order and have the animation play in reverse, in that case, this would mean going from right to left. We can add the animation-direction property of reverse, and when we preview our robot now, it's moving in the opposite direction. That's pretty neat, especially because we didn't have to adjust any of the keyframe values to make this happen. Of course, we aren't going to stop there. We have two more possible values for animation-direction to compare. Let's give our robot the animation-direction value of alternate instead. Now this is one where animation iteration count of three is very important. To use the animation-direction of alternate, you need to have more than one iteration happening and you'll see why in a second. When we save and preview our robot now, you'll notice that the robot is moving forwards and then backwards and then forwards again. It's alternating its direction each time the animation executes. That's why it's so important to have an animation iteration count higher than one. Last but not least, we'll assign our robot the animation-direction of alternate-reverse. When we save and preview that, this gives us the same back and forth motion as the last time, except this time it starts playing the reverse direction first and then the normal direction. Again, it's important for the animation iteration count property to be higher than one, otherwise there wouldn't be anything to alternate and reverse.
>
> **[3:06](https://www.linkedin.com/learning/css-animation-14153685/animation-direction?u=76281980&t=186)** Now you know the power of animation-direction and how it can change up the look of your animation without having to edit the underlying keyframes. It's a property I'm sure you'll be using a lot in your CSS animation work.

> [!info]- Semantic Content
>
> **Env Vars:** css (2)
> **CLI Commands:** make (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [Timing functions and easing](https://www.linkedin.com/learning/css-animation-14153685/timing-functions-and-easing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/timing-functions-and-easing?u=76281980&t=0)** - \[\[Narrator] Easing is one of those things that I don't think web designers talk about enough. The easing you choose has the power to greatly affect the way your animation is perceived and what it communicates. And that makes it an important factor of any animation. By definition, easing is what describes the speed changes of your animation over the course of its duration. Easing is used in many types of animation, and there are almost endless variations of easing functions out there. In CSS, easing is handled by the animation timing function property, or the transition timing function property if you're using transitions. We have three options for defining animation-timing-functions. We have our predefined easing keywords, the steps function, or custom cubic-bezier functions. Let's start our look at easing and CSS with the predefined easing keyword options. The easing keyword options available in CSS are ease, ease-in-out, ease-in, ease-out and linear. These might all sound a little repetitive, but they reflect common patterns you'll see in all sorts of easing, even beyond CSS. Let's go back to one of our robot animations from before and see how these different animation-timing-function keywords can affect the way the animation looks. I don't have an animation-timing-function defined yet. So I'll add one to start things off. And I'll start with a keyword of linear. So we can save that, go to our browser, to preview our robot, and here's what we see.
>
> **[1:38](https://www.linkedin.com/learning/css-animation-14153685/timing-functions-and-easing?u=76281980&t=98)** The robot moves across their screen, and it stays at a constant speed the entire time. Linear easing means there's no speeding up or slowing down over the course of an animation. Just one constant rate of change across the entire duration. Linear is the default setting for easing in many other animation tools, but not in CSS. To get linear easing and CSS, you have to set it explicitly like I just did. Linear easing is often perceived as feeling very mechanical since nothing in real life actually moves at a constant speed like that. To be fair, that could work for a robot, but let's keep looking at our other keyword options for easing to see how they compare. If we change our robots, animation-timing-function, to ease-in, we'll start to see some speed changes over the course of its animation. So I'll save this and go back to our robot, refresh it again. The robot starts out a little slow and then speeds up towards the end of the animation when it stops abruptly. It gives it a feel as if the robot is accelerating into the movement and then reaching its top speed near the end of the movement. Any easing function that creates this behavior of accelerating into the movement of the animation could be considered an ease-in. But the easing keyword in CSS refers to one specific definition of easing in. Next up on our list of CSS keyword easing values is ease-out. So we'll just change this a little bit, then we can save and preview to see how our robots movement has changed. With the ease out keyword, our robot starts at a high rate of speed and then starts to decelerate
>
> **[3:12](https://www.linkedin.com/learning/css-animation-14153685/timing-functions-and-easing?u=76281980&t=192)** or slow down before it comes to a stop at the end of its movement. Based on what we saw with those last two options, I bet you're starting to guess what the ease-in-out keyword will do. So let's add that to our robot now. Use the animation-timing-function of ease-in-out. When we save that and preview our robot once more, our robot both accelerates into its movement and slows down before coming to a stop. It's the behavior we saw with the ease-in and the ease-out combined in one together. We have one last easing keyword left to see. And that's the keyword of ease. So we'll go back and make our animation-timing-function be just ease. Ease is also the default value for animation-timing-function. So if you've been doing animation before and haven't defined an animation-timing-function explicitly, you are using ease and you just got it by default. If we save our robot with the ease timing function, and then go and preview it, to see how things look, we can see a distinct speeding up into the movement and slowing down before the robot stops. But it's a little bit of a different speeding up and different slowing down than we saw with the ease-in-out. So both the easing we get from the ease keyword and the easing we get from the ease-in-out keyword are variations of the greater category of the ease-in-out pattern. The CSS keywords are a great way to get started with easing, especially if you're brand new to it.
>
> **[4:45](https://www.linkedin.com/learning/css-animation-14153685/timing-functions-and-easing?u=76281980&t=285)** But there's even more we can do with easing and CSS. Thanks to the cubic-bezier function. Cubic-bezier functions are one of our options for the animation-timing-function property. Cubic-beziers may look a little bit unusual at first, but we've actually been using them already. Each of those keyword options can also be defined by a cubic-bezier curve. The keywords are a bit like a shortcut to a specific cubic-bezier function. For example, the cubic-bezier equivalent of the ease-out keyword is this cubic-bezier function we're looking at right now. The four numbers in the cubic-bezier function represent two X,Y coordinates. As you can see here on [cubic-bezier.com](https://cubic-bezier.com). Sites like [cubic-bezier.com](https://cubic-bezier.com), make it easier to visualize what the values of the cubic-bezier functions we'll do by showing you both the function itself, as well as a graph view and a preview of the easing in action. So here's how the cubic-bezier graphs work. The start and end points, or the graph are fixed. Your animation does have to start, and it does have to end. But the cubic-bezier curve describes what happens between the start and end points in time. Moving the two control handles will change the number of the function as well as the shape of the curve. The curve indicates how fast or slow the rate of change will be for the animating property. Where the curve is steepest, the rate of change will be fastest and where the curve is flatter, the rate of change will be slower. So for example, this curve would start out slower, it's a little bit flat and then speed up as it gets steeper. The cubic-bezier function allows you to create
>
> **[6:19](https://www.linkedin.com/learning/css-animation-14153685/timing-functions-and-easing?u=76281980&t=379)** just about any variation of easing that you want to use. Another great resource for a system of cubic-bezier functions is on [easings.net](https://easings.net). This site has both the graph and function representation of commonly used power equations. Also known as the Penner equations translated to cubic-beziers and ready for you to use in your CSS. These same easing curves are available in a lot of animation libraries as well, so their names might look familiar. While we're looking at [easings.net](https://easings.net), I'm going to pick this one right here and go and copy and paste it's cubic-bezier function so we can use it on our robot. Go back to my CSS, and then we can paste that cubic-bezier function right here for the animation-timing-function property. With that in place, when we go back and preview our robot, it's going to look just a bit different. With that cubic-bezier function in place for easing, we see our robot go a little bit past its destination, kind of overshoot with a tiny bit of a bounce and then settle back into place. And that's all thanks to the cubic-bezier function that we selected. Now that we've taken this more in-depth look into our easing options in CSS, you'll be able to fine tune your animations with easing choices that reflect the feel you want your animations to have. There's so much power to communicate with the easing you select for your animations. I encourage you to find a cubic-beizer editing tool that works best for you and use them in all of your web animation work. It will make your animation efforts look so much more expressive.

> [!info]- Semantic Content
>
> **Env Vars:** css (13)
> **CLI Commands:** make (3), find (1)
> **URLs:** [cubic-bezier.com](https://cubic-bezier.com) (2), [easings.net](https://easings.net) (2)
> **Cross-References:** go back to (3)
> **Analogies:** for example (2)
> **UI Navigation:** go to (1)
> **Definitions:** known as (1)

#### [The steps() timing function](https://www.linkedin.com/learning/css-animation-14153685/the-steps-timing-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/the-steps-timing-function?u=76281980&t=0)** - [Tutor] We have one last timing function to look at, and that's the steps function. Steps work a little differently than our other options for animation timing functions. And they can seem a little confusing at first, but here's how I like to picture it. The steps function essentially splits the total duration of your animation into equal blocks of time. Each one of those blocks is a step. Each of those tiny blocks also take up some amount of time, even if it's just a fraction of a second. So instead of continuous motion, your animation is divided up into a series of holds something like this. And you can use the jumpstart and jump and keywords for finer control over how the whole effect behaves. Let's create a typing on effect animation to get a feel for how steps works. The basis of this effect is to animate the width of our H1 to reveal the letters one at a time as if they're typing on. And that one at a time part, is what steps will make possible. So I already have things partly started and I've written some key frames that we'll use to animate the cursor blinking. But we still need some key frames to make the type on effect and essentially reveal the h1, one letter at a time. So I'll start my @keyframes block, and I'm going to call this animation typing. And we'll set up these key frames, very similar to how we've done in previous examples. We want to start our h1 with a width of zero. So our 0% key frame, we'll set the width of zero pixels, and then we want it to end at its full size. So start being basically invisible 'cause it's so thin
>
> **[1:33](https://www.linkedin.com/learning/css-animation-14153685/the-steps-timing-function?u=76281980&t=93)** and end being wide enough to see all the letters. So that's our 100% key frame and we'll set the width there at 100%. With those key frames in place. We'll assign this animation to our h1. So we'll give it the animation name of typing, like we just had below. And we'll give it an animation duration of three seconds and we'll additionally, give it the animation timing function of steps. Now we have to give it a number of steps to take. And in this case we have 14 letters. So I'm going to use 14 steps, one for each letter. So if I save that and preview our file, we start to see our typing on effect. The letters are appearing one at a time as the h1 expands and that's thanks to the steps function. There's one more thing we want to add to get this full effect. And that's the blinking cursor. Right now, it's just kind of hanging out. So let's give it an animation as well. And we'll also use steps to get that blinking effect. So we'll go back to our CSS. And what we're going to do, is apply both the blinking key frames and the typing key frames to our h1. The typing will adjust the width to show the letters and the blinking will adjust the border color on the far right side to create our cursor. When we're applying more than one animation to an element, it becomes a lot easier if we start using the animation shorthand. So I'm going to take what we've got right here and replace it with the shorthand version, to make it easier to add the second animation as well. So, for our shorthand version,
>
> **[3:07](https://www.linkedin.com/learning/css-animation-14153685/the-steps-timing-function?u=76281980&t=187)** we're going to use the animation property, and we're going to give it the animation name of typing. We'll give it a duration of three seconds. The first number with time associated with it in the shorthand will be used as the duration. And we know we want three seconds. That's what we used before. And I'll give it the animation timing function of steps. And we use 14 there before, so we'll use 14 there again. So this is the shorthand version of what we had written a few seconds ago. Now I'll a comma here to separate our two animations. And I like to move to a new line because it just makes it easier to read, but that is completely optional. So I'll add a second animation of blinking. That's going to be for the cursor, which is a border on our h1. We're going to give it a duration of 0.5 seconds because the blinking is going to happen rather quickly. And we'll give it the animation timing function also of steps. And we're going to give this one, a step of one. And we'll also tell it to repeat infinitely. So that's essentially the animation iteration count of infinite. Because to look like a real cursor, we want to have it blinking even after we stop typing. So if we save this and preview it now, we have our letters showing up one at a time typing on thanks to our typing key frames animation. And we have the cursor blinking thanks to our blinking animation. Both of which are powered by the steps timing function. So that's our quick look at the steps function for CSS animation and the sort of look it can give your animations. Steps don't tend to get used as often as other timing functions,
>
> **[4:40](https://www.linkedin.com/learning/css-animation-14153685/the-steps-timing-function?u=76281980&t=280)** but it's still good to know about for those times when it's the right solution for what you need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (6)
> **CLI Commands:** make (3)
> **Env Vars:** css (2)
> **Definitions:** is a  (2)
> **Analogies:** picture (1), similar to (1)
> **Versions:** 0.5 (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)

#### [Challenge: Adding keyframes to an animation](https://www.linkedin.com/learning/css-animation-14153685/challenge-adding-keyframes-to-an-animation?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/css-animation-14153685/challenge-adding-keyframes-to-an-animation?u=76281980&t=5)** - [Instructor] We've covered a lot about how CSS keyframe animations work. So for a nice followup challenge, let's change up the keyframes for the Hello animation we were working on earlier. You can use the files that you've already been working on, or the exercise files I provided for this challenge. And for this one, you can either write an entirely new set of keyframes or add an additional keyframe to what's already there. The choice is yours. This is a nice short challenge. You should spend about five to 10 minutes or so adjusting your animation. And then watch the solution video to see what I made.

> [!info]- Semantic Content
>
> **Env Vars:** css (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Adding keyframes to an animation](https://www.linkedin.com/learning/css-animation-14153685/solution-adding-keyframes-to-an-animation?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/css-animation-14153685/solution-adding-keyframes-to-an-animation?u=76281980&t=5)** - [Instructor] Here's my solution to the adding key frames challenge. I replaced our scale in effect with a bit of a wiggle effect. Here's what I did in the CSS. I created a new set of key frames and called it wiggle since I was making a bit of a wiggle effect. And in the key frames, I adjusted both the translation on the X axis and the rotation to give it just a little bit of a movement and a bit of a rotation back and forth. Another thing I changed was the transform origin over h2. And that makes the rotation look just a bit different because we're rotating from a slightly different point. Then I applied the animation of wiggle. I gave it a quite short duration since wiggles generally happen kind of quickly. Had it repeat infinitely and used this cubic-bezier for the easing. There's no right or wrong answer for this challenge. So whatever you did to adjust the key frames and create a slightly different effect, you're on the right track.

> [!info]- Semantic Content
>
> **Env Vars:** css (1)
> **Speakers:** - [instructor] (1)


### 3. CSS Animation Building Blocks

[↑ Back to Table of Contents](#table-of-contents)

#### [Infinitely looping animations](https://www.linkedin.com/learning/css-animation-14153685/infinitely-looping-animations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/infinitely-looping-animations?u=76281980&t=0)** - [Instructor] Let's look at creating infinitely looping animations. CSS is great for this type of animation because of how easily we can set an animation on an infinite loop. We'll be creating a couple of animated clouds that will drift across the sky in Binaryville just like we see here. Both our Binaryville logo and the clouds are images. And in our [HTML](../../Skills/Web%20Development/HTML.md), we have both the cloud images and the Binaryville images, and we've set them in different divs so we can absolutely position the clouds behind the Binaryville scene. In our CSS, we have rules to set that positioning and we can start to add some animation too. So I'm going to start by adding there at key frames block. And I know we want to have our clouds move from all the way off to the left where we can't see them to somewhere off to the right where they're out of view. So I'm going to start our key frames block and call it float. Then on our 0% key frame, I'm going to add a transform of a translation on the X axis of negative 150 pixels. And I know from looking at my image files, that that will move our clouds all the way off to the left where we can't see them. And then for our 100% key frame, I'm going to move them all the way over to the right, or at least as far as they need to go to not be in view anymore. That'll be a translation on the X axis of 820 pixels. Normally it might take some trial and error to get these numbers right, but I figured them out ahead of time to save us some time here.
>
> **[1:33](https://www.linkedin.com/learning/css-animation-14153685/infinitely-looping-animations?u=76281980&t=93)** So now that we have our key frames written, we can assign them to our two different clouds. Our first cloud has a class of cloud01, and we'll assign that cloud this float animation. So we'll use the shorthand. So that's going to be animation and we'll give it the animation name of float. I'm going to give it a long duration of 25 seconds because this float is going to be fairly slow. It's just kind of an ambient cloud situation. I'm going to give it the easing or timing function of linear, just to keep this drift simple. And we're going to have it repeat infinitely. Our second cloud is cloud02 and we're going to assign it that same set of key frames, the float key frames, but we're going to change things up just a little bit so they'll be moving at slightly different speeds and won't loop exactly the same way over and over. So first I'll assign it that float animation again, but I'll give it a longer duration so it's moving at a different speed than cloud one. I'll give it a duration of 30 seconds. And I'll also add a delay in our animation shorthand, the second number with time associated with it will be the animation delay so they don't start at exactly the same time, just offset their movement a little bit. I'll also give this one the easing of linear for the same reason as the first and give it the animation iteration count of infinite so that is looping infinitely. The difference in speed and the offset and timing will help make the clouds look slightly different each time they pass through our view and make the looping effect more interesting. One last thing we'll add to cloud two is the animation film mode of backwards.
>
> **[3:08](https://www.linkedin.com/learning/css-animation-14153685/infinitely-looping-animations?u=76281980&t=188)** And this will ensure that we don't see cloud two hanging out in its intrinsic position before the key frames take place during that five second delay. If we save this and preview our animation now, our two clouds float through Binaryville and behave just a little bit differently despite the fact that they're using the exact same key frames. We've also used the different durations and the offset in time with the delay to create a little bit of difference each time they come through the scene. Being able to reuse animations on multiple elements like this is a nice feature of CSS animations. Animating multiple elements with the same key frames, but slightly different properties is a great way to get extra mileage out of your key frame animations. You can create all sorts of different effects without ever needing to edit a single key frame at all.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** css (3), html (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Pause and play with animation-play-state](https://www.linkedin.com/learning/css-animation-14153685/pause-and-play-with-animation-play-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/pause-and-play-with-animation-play-state?u=76281980&t=0)** - [Instructor] So far, we've been creating animations that play automatically on page load. But there are definitely times where you might want to change when an animation starts or temporarily pause an animation while it's playing. The animation-play-state property can be very useful for both those things. For this example, we're using this spinning sub sticker image. It's a little silly, but it totally works for what we're demonstrating here. We're going to use the animation-play-state property to have this sub spin only when we're hovering over it. And be paused when we're not. We're using hover in this example, because it's an easy input event for CSS to access. But you might find that changing the animation-play-state on events like click or scroll with the help of [JavaScript](../../Skills/Software%20Development/JavaScript.md) to be even more useful. I've already got the keyframes for the spinning animation here, and we just saw it in action a minute ago. But I can actually simplify these keyframes even further by removing the 0% keyframe. Without a 0% keyframe, the current styles on our element will be used in its place. And since our 0% keyframes weren't changing anything, it was just a rotation of nothing, that will give us the same results visually. I've also assigned the rotate keyframes to our sticker, giving it a duration of 10 seconds. So it's a slow spin. The animation timing function of linear. And we're having it repeat infinitely. We're using linear for easing here. So there'll be no speed changes while it's spinning. This is one of those cases where linear easing actually looks better than some of the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). So let's move on to adding the play and pause functionality. The thing we'll want to do is add the animation-play-state
>
> **[1:35](https://www.linkedin.com/learning/css-animation-14153685/pause-and-play-with-animation-play-state?u=76281980&t=95)** property to our sticker so that the animation is paused at first. So we can do that by adding animation-play-state here. And we're going to give it the value of paused. If we save and preview our file right now, I'll refresh it. You can see that our animation is paused. Our sub sticker is not currently spinning. Paused animations aren't as fun as ones that play. So let's add the condition when our animation will actively play. To do that I'm going to start by adding a rule for the sticker hover. The two most useful values that the animation-play-state property can take are the value of paused like we just used, and the value of running. So we'll add the value of running here. While the animation-play-state. And then a value of running. So this means that when we're hovering over the sticker, the animation-play-state will be changed to running. Even though it's initially set to pause on our sticker in the few lines above. So if we save this and preview it now, we'll refresh our page. And our sticker is just hanging out there at first, when we hover over it, it starts spinning. And when we hover off it stops. And you'll notice the animation just picks up where it left off when we hover over it again. You can use the same technique to play and pause a CSS animation on other input triggers using JavaScript. Or just start a whole group of animations playing at the same time, or any other situation where you might want to have one or more animations all start playing, or all pause at the same time. Animation-play-state is an often overlooked property
>
> **[3:10](https://www.linkedin.com/learning/css-animation-14153685/pause-and-play-with-animation-play-state?u=76281980&t=190)** of CSS keyframe animations, but it has a lot of potential to be useful in your animation work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** css (3)
> **Definitions:** means that (1), is an  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Animating 3D transforms](https://www.linkedin.com/learning/css-animation-14153685/animating-3d-transforms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/animating-3d-transforms?u=76281980&t=0)** - [Instructor] Let's look at how we can use 3D Transforms in our CSS key frame animations. We'll create a short text effect like the one you see here. By animating 3D Transforms on each letter and using animation delay to create an offset to have that wave like motion across our full text. We'll be rotating each letter around the X axis, which is the axis that runs horizontal across the browser window. In our [HTML](../../Skills/Web%20Development/HTML.md), we have each letter wrapped in its own span so we can target them individually. There are helpful [JavaScript](../../Skills/Software%20Development/JavaScript.md) libraries like Splitting JS and others that will do this wrapping of each letter in a span automatically for you at runtime. But for the purposes of this example, adding them manually works just fine. So let's move to our CSS to start creating our animation. Since I already know I'll be using 3D Transforms. I'm going to start by setting two properties on the parent H2 element to ensure that all of our letters will have the same perspective and vanishing point to make 3D effect look a little more convincing. So the first property I'll add is perspective. And the value I usually start with for this is 1000. And perspective is essentially the distance away that we are from the effect. And I'm also going to add the transform style of preserved 3D. Next up, I'll start the key frames for this animation. So I'm going to call this animation, flip up because that's essentially what our letters will be doing. And I know that I want to have the letters all start folded
>
> **[1:36](https://www.linkedin.com/learning/css-animation-14153685/animating-3d-transforms?u=76281980&t=96)** back in space as if they're laying flat on the ground. You know, like if there was a ground. And then we'll have them rotate up to the normal standing position. To achieve this, I'll start with a rotation on the X axis of 90 degrees. And just to mix things up a little bit, I'm going to use the from and two key words to define our key frames instead of the percentages. But are from keyword is the same as a 0% key frame. So we'll add a rotation on the X axis of 90 degrees. And then for our two key frame, which is the same as a 100% key frame. We'll add a rotation of zero degrees. Our key frames are all set. So let's apply this animation to our letters. Now we know that all of our letters are wrapped in a span, so we can apply the animation to all of them here. We can say animation and we're going to assign the animation of flip-up. Since those are the key frames we just defined, I'm going to give it a duration of one second. And then I'm going to give it the timing function of a custom cubic-bezier. And I'm going to give it the animation film mode of both since we will be adding some delays. To create that wave lake offset effect, we want each letter to start rotating up just slightly after the one before it. To accomplish that, we'll add a delay to each letter after the first one. And I'm going to add a very small delay of 0.2 seconds. We'll target each subsequent letter using the Nth child rule
>
> **[3:11](https://www.linkedin.com/learning/css-animation-14153685/animating-3d-transforms?u=76281980&t=191)** for our span. So, this one is our second letter and we'll give it an animation delay of 0.2 seconds. And then we'll keep adding 0.2 seconds to our delay for each subsequent letter. So our third letter will have an animation delay of 0.4 seconds. And I'll keep going down the list. If you're using a CSS pre-processor, you can write a loop to take care of this in one fell swoop. But for our example, I'm going to do it manually since we only have a few letters. With our delays in place, we can save and preview our animation now. We can see that our key frames and animation delay are working as expected, but our letters are all rotating from the middle of themselves which is the default behavior. The effect I was going for though was to have them seem like they're rotating from the bottom of themselves, as if they're sitting on a kind of imaginary floor. So to do that, we're going to adjust the transform origin for each of our letters. The transform origin is the point around which transforms are applied. In our case, that's the rotation on the X axis. And we're going to move it to a point that's at the bottom of each letter, instead of the middle of each letter to create the effect we're going for. Finding the exact transform origin values you want often takes a bit of trial and error. But I've done that ahead of time and I know that I want to set my transform origin for each of these letters to 50% of the way across each letter's bounding box and 70% of the way down.
>
> **[4:45](https://www.linkedin.com/learning/css-animation-14153685/animating-3d-transforms?u=76281980&t=285)** Transform origin coordinates are always measured from the top left when we're using percentages, pixels or AMS. So if we save that and preview our file once more, we see that with that transform origin adjustment our letters look like if they are rotating from the bottom of themselves and that creates the effect of them flipping up from laying on the floor which is exactly what we were going for. So that's how to use 3D Transforms and key frame animations. And how to use animation delay to create offsets when animating multiple objects. You can use both these techniques to create all sorts of animated effects on text or HTML objects in your own work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** css (3), html (2), ams (1)
> **Versions:** 0.2 (3), 0.4 (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Chaining multiple keyframe animations](https://www.linkedin.com/learning/css-animation-14153685/chaining-multiple-keyframe-animations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/chaining-multiple-keyframe-animations?u=76281980&t=0)** - [Tutor] So far, we've been creating mostly individual animations to create our effects, but in practice, you might want to combine multiple animations to create the overall movement you're going for. In this video, we'll be adding to our up and over text animation and we'll create one more set of key frames to handle the over part of the up and over motion. And the letters will end up hanging upside down. Our [HTML](../../Skills/Web%20Development/HTML.md) and CSS are the same as we left them in the last video. So let's head straight to our CSS to add in the second set of key frames for us to use. For this set of key frames, I want the letters to flip down towards me, so they end up upside down. That's going to be a rotation on the X axis of negative 180 degrees. So I'll start this new set of key frames. I'm going to call it flipDown. And since we'll be using this set of key frames to pick up right where the last set of key frames left off, we can skip straight to the two key frame or the end state of our animation. So our two key frame will be a rotation on the X axis of negative 180 degrees. So that's flipping the letter all the way over. Of course, after defining those key frames, we'll have to assign them to our letters, which we did here in the span rule. And to add a second animation to this element, we're going to use a comma to separate the two animations. So we'll add a comma, and then flip down, we'll give it a duration of one second as well. And I'll use the same custom cubic-bezier. And I'm going to give this second animation,
>
> **[1:35](https://www.linkedin.com/learning/css-animation-14153685/chaining-multiple-keyframe-animations?u=76281980&t=95)** a very long delay. Specifically 0.275 seconds. And I chose 2.75 seconds because that's enough time for all of the letters to perform their flip up animation, have a little bit of a pause between the two animations before this one takes place. So when we're chaining two animations on the same object, the way we have one happen after the other, is by giving the second one a delay that's equal to or longer than the duration of the first one. Last, but not least, I'm going to give this animation film mode of forwards so that way our letters will stay flipped upside down, once the animation is over. We achieved the wave-like offset effect for the flip up animation, by giving each letter a slight delay so that each letter would start just a bit after the one before it. We can add a second delay to all of our letters to apply to the flip down animation, to get that same effect there as well. So I can go to my second letter and just like we comma separated the two animations, we can comma separate the two animation delays to signify which animation each delay applies to. In this case, since this is my second letter, and I know my first letter is starting at 2.75 seconds, I will give my second letter a delay of 2.95 seconds so that it starts 0.2 seconds after the first one. We'll use that same 0.2 second delay throughout second animation as well. And basically we just have to do a lot of adding for those second delays. So our third letter will be 3.15 seconds, and on down the line.
>
> **[3:16](https://www.linkedin.com/learning/css-animation-14153685/chaining-multiple-keyframe-animations?u=76281980&t=196)** And of course, if you're using a CSS pre-processor, you could write a loop to automate these values, but I'm doing it manually since I have such a short number of letters to add delays to. With all those delays in place, let's save and preview how our animation is looking. We have the flip-up animation that we established before, then we have a little bit of a pause, and then our second flipped down animation takes place on the letters, leaving them upside down in the end. It's worth mentioning that we could have pulled off this same effect with one set of key frames, essentially by duplicating the values in the middle to create a hold frame. But it's really up to your preference. Personally, I prefer to split up the animations because it gives me more flexibility. For example, with these two sets of key frames, if I wanted to change the delay value for just the flip down animation, that would be relatively straightforward. So that's how to chain multiple animations on one element using animation delay to space them out. It's a great technique for creating slightly more complex effects or spacing out animations in time. One [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) of advice, though, if you find yourself creating a chain of animations, that's more than three or four long in CSS, that's a good time to consider moving to [JavaScript](../../Skills/Software%20Development/JavaScript.md) for your animation efforts. Managing all those delays in order can get really tedious in CSS. And a JavaScript based animation solution, will allow you to control a large number of animations in a more robust and flexible way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Versions:** 2.75 (2), 0.2 (2), 0.275 (1), 2.95 (1), 3.15 (1)
> **Env Vars:** css (5), html (1)
> **Analogies:** just like (1), for example (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** flipdown (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)

#### [Challenge: Adding a third animation to the chain](https://www.linkedin.com/learning/css-animation-14153685/challenge-adding-a-third-animation-to-the-chain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/challenge-adding-a-third-animation-to-the-chain?u=76281980&t=0)** - [Narrator] We've been working on chaining multiple CSS key frame animations together to create longer effects. And for this challenge, I'd like you to add one additional animation to the chain. You can use the files you've been working on already, or the exercise files I've provided for this challenge. This is a nice short challenge. You should spend maybe five or 10 minutes creating a new set of key frames, and then adding it to the chain of animations. Then watch the solution video to see what I made.

> [!info]- Semantic Content
>
> **Env Vars:** css (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music begins) (1)

#### [Solution: Adding a third animation to the chain](https://www.linkedin.com/learning/css-animation-14153685/solution-adding-a-third-animation-to-the-chain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/solution-adding-a-third-animation-to-the-chain?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/css-animation-14153685/solution-adding-a-third-animation-to-the-chain?u=76281980&t=6)** - [Instructor] Here's my solution to this challenge. After the letters go up and down, I added a little kick on the R for a third animation in the chain. I thought that would give it a little bit of, I don't know, fun. And here's what I did to add that third animation to the chain. First, I added one new set of keyframes in our CSS. I called it flick 'cause that's kind of what the R is doing, and I used a couple of tricks in this keyframe block. First, since I knew I wanted the R to start and end in the same place, I comma separated the zero and 100% keyframes to assign their styles at the same time. You can use this anytime you're reusing properties in two sets of keyframes. The other thing I did was I chose to set the animation timing function in the keyframe definitions themselves so that I could use a different easing on the way out and the way in essentially of that flick movement, and this is something you can do instead of adding just one animation timing function across the entire animation, if you want to. Once I had this third set of keyframes in place, I went and assigned it to only the last letter, which happens to be our nth-child seven. Previously, we were having the flip up and flip down animation assignments cascading to all the spans and just setting the animation delay, but since I wanted to add a third animation in the chain just to this one letter, I rewrote those animations, comma separated them as we did before, so that I could add the third one to the chain just for this particular letter. I assigned the animation of flicks since that's what I named my keyframes.
>
> **[1:38](https://www.linkedin.com/learning/css-animation-14153685/solution-adding-a-third-animation-to-the-chain?u=76281980&t=98)** I gave it a duration of .95 seconds, and I delayed it by 4.95 seconds. So again, a little bit longer than the duration of the one before it, so there is a bit of a break in between. I assigned it the animation timing function of linear since I specified animation timing functions in the keyframes themselves, linear is the best choice here, and I gave it the animation film mode of forwards so it would hold its end position past the end of the animation. So that was my solution. Again, this is a challenge where there's no right or wrong answer. Whatever you did to add a third animation to the chain was great practice in making CSS animations.

> [!info]- Semantic Content
>
> **Env Vars:** css (2)
> **Definitions:** is a  (2)
> **Versions:** 4.95 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 4. Animating SVGs with CSS

[↑ Back to Table of Contents](#table-of-contents)

#### [Preparing an SVG for animation](https://www.linkedin.com/learning/css-animation-14153685/preparing-an-svg-for-animation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/preparing-an-svg-for-animation?u=76281980&t=0)** - [Instructor] Whether you're planning to use CSS or [JavaScript](../../Skills/Software%20Development/JavaScript.md) to animate your SVG in the end, you'll want to make sure your SVG file is set up in a way that's going to be good for animation. There are many ways to draw shapes in SVG, and your ability to animate the shapes you see in a particular graphic depend on how the SVG was drawn. It's useful to take a look to make sure you have the pieces you need to animate. That could save you a lot of headaches later. The first thing you'll want to do is look for distinct whole objects that you could translate, rotate, or scale within the SVG. I have an example SVG here from Undraw that we can use as an example. To inspect the SVG a little more closely, I opened it in my vector editor of choice. For me, that's XD, but you can do this in any vector editing software. So for example, as I click around the layers, I can see that this check mark is an independent object, so if I wanted to animate that I could, and the square behind it is as well. And those are probably two of the things I would animate if I was animating this illustration. So those are looking good, but it is possible for things to look like separate shapes, but not actually be separate shapes. For example, if I wanted to animate the kind of body of this avatar and head of this avatar, I can't because they are actually together in one path. And we can tell because when I go to move one of them, both of them move, and they are both part of this path called path 198. So if I wanted to animate those separately, I would need to edit this illustration further to separate that path, or possibly find a different illustration
>
> **[1:33](https://www.linkedin.com/learning/css-animation-14153685/preparing-an-svg-for-animation?u=76281980&t=93)** that has those things separated out depending on what I wanted to do. In this case, I know I only want to animate the checkboxes and that big rectangle behind those avatars, so I know I'll be fine. My second tip for checking your SVG is to name the layers or the paths, depending on how your file is set up, that you'll be animating so it's easier to find them later. To animate an SVG, we need to have it inline in our [HTML](../../Skills/Web%20Development/HTML.md). If we name the shapes we plan to use in our animation, it will be a lot easier to find them and target them with CSS rules when we're writing the animations. So I'll go back to XD, and I'm going to name this first check, check1, and this box, maybe checkbox1, and I'll do the same for the second box, and the second check mark. And I think you're getting the idea here. I'll go through the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of my layers now and make sure that everything I'm planning on using in my animation has a name so I can find it later. You don't need to worry about naming every single object though, just the ones you know you'll want to use in your animation. Most SVG illustrations have a whole lot of elements in them, far more than you'll want to take the time to name individually, especially if you're not going to use all of those objects in your animation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** svg (10), css (2), html (1)
> **CLI Commands:** find (4), make (3)
> **Analogies:** for example (2)
> **Prerequisites:** set up (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)

#### [SVG exporting and optimization settings](https://www.linkedin.com/learning/css-animation-14153685/svg-exporting-and-optimization-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/svg-exporting-and-optimization-settings?u=76281980&t=0)** - [Instructor] To animate your SVG you'll need to have an inline in your [HTML](../../Skills/Web%20Development/HTML.md), so you'll want to take a slightly different approach to exporting and optimizing it than you might otherwise. You'll want the code to be readable and manageable while you're working on your animation. Different vector editing tools serve as different levels of options for exporting SVGs, so you might see different options depending on the tool you're using. The main things you'll have options for when exporting SVG are a choice between presentation attributes or internal CSS, a choice between linked images or embedded images, and the option to minify the SVG file. Let's look at each of these options more closely to see what they mean for our exported code. That first option on my list lets you choose whether you prefer to have your SVG's fill and stroke attributes displayed in CSS at the top of your file or as presentation attributes directly on the SVG elements. The choice here is mostly up to personal preference. Both are flexible in similar ways and it just kind of comes down to what you prefer or what's most useful for the way you tend to work. If you choose the CSS option, you'll get a block like this at the top of your SVG file. This makes for an easy central place to make changes to your strokes and fills as needed and you can copy and paste the CSS directly into your CSS file as well. This is my preferred option. But like I said, it's really up to personal preference. If you select presentation attributes, that same information that's in the CSS will instead be attributes on the elements themselves. So for example, this path has the fill set directly on it
>
> **[1:35](https://www.linkedin.com/learning/css-animation-14153685/svg-exporting-and-optimization-settings?u=76281980&t=95)** as opposed to in a block of CSS at the top of the SVG file. Next on the list is the question of linked or embedded images. Personally I rarely have images embedded in my SVG files that I'm animating. But if you do, it's important to know that choosing embed here will result in a higher file size, so link is generally the best choice. Linked images will also give you a greater flexibility to change the image without re-exporting the entire SVG. The biggest one to look out for is the last one on my list about minifying. Minifying your SVG might sound like a good idea for file size, but you'll want to keep the code human-readable while you're animating, and minified code is pretty impossible to read. You can always modify the file later once your animation is finalized, but I highly recommend not minifying while you're in the process of working on your animation. With all that in mind, I'll head to XD to export my SVG file from the last video. So I will go here. I'm going to do File, Export, and Selected.
>
> **[2:44](https://www.linkedin.com/learning/css-animation-14153685/svg-exporting-and-optimization-settings?u=76281980&t=164)** And as I said, I'm going to select Internal CSS. I'm going to select linked images even though it doesn't matter for this particular one 'cause I have no images and I'm going to leave the minify unchecked. I'll export my SVG and then we'll move on to our next step of optimizing that SVG. Optimizing your SVG after you've exported it is a good next step because optimizing can lead to better performance. My current SVG optimizer of choice is Jake Archibald's SVGOMG. I like that it's easy to access in the browser and it lets you switch between the code and image preview views so you can make sure your optimizations aren't adversely affecting any visual things in your SVG. Once I'm here, I can upload my SVG just by dragging and dropping it on the site, and you'll see my SVG just like we saw in XD. There are some default optimizations already made for us here and I'm not going to go through every option here. But there are a couple of settings you'll want to watch out for when you're optimizing for animation. The first is this one, Shapes to smaller paths. Small is generally better when you're looking to save file size but this setting may fundamentally change the nature of the objects in your SVG, and that can make them harder to target for animation. So use this one with caution. If your animation relies on having things like circles and rectangles in your SVG, you'll want to turn this off because it will turn those circles and rectangles into paths. In many cases that won't make a difference, but it's one to look out for just in case it does for you. The same goes for this Merge paths option.
>
> **[4:21](https://www.linkedin.com/learning/css-animation-14153685/svg-exporting-and-optimization-settings?u=76281980&t=261)** If you're planning to animate any of your paths, double check that this setting doesn't merge any paths you need to keep separate before going through with the optimization. Merged paths generally means fewer paths. But if you needed those individual paths to animate them, that could be a problem. You'll also want to keep an eye on this Round or rewrite paths. Keeping this turned on is usually fine, but it can cause distortions in the shapes of an SVG especially if that SVG is drawn at a very small size. Most of the time, the default settings are exactly what you need and everything looks good both visually and in the Markup tab. Once you've got your settings in place and everything looks good to you, you can either download your SVG using the Download button or you can go to the Markup tab and copy and paste the code of your SVG directly into your project. Either way, your SVG is optimized and ready to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** svg (25), css (8), html (1), svgomg (1)
> **CLI Commands:** make (4)
> **Analogies:** for example (1), just like (1)
> **Warnings:** watch out (1), caution (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)

#### [Animating SVG with CSS](https://www.linkedin.com/learning/css-animation-14153685/animating-svg-with-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/animating-svg-with-css?u=76281980&t=0)** - [Instructor] Let's take what we know about CSS animation and apply it to SVG elements too. We'll create this heart filling animation with this SVG heart to create an effect that you might see when liking a post or photo or something like that. My SVG code is inline here in my [HTML](../../Skills/Web%20Development/HTML.md). This is our SVG. And inside our SVG, we have two main shapes. We have our heart outline that I've given the idea of outline, and we have our heart fill that I've given the idea of heart fill. We're working with a simplified SVG for this example, an SVG with just two shapes, but CSS animations can be applied to SVGs with more shapes and more complexities as well. We're just keeping it focused for this example. Over in my CSS, I have the two sets of key frames we'll be using to create this animation. The first is a set of key frames I've called beat, and we'll use this on the fill shape of the heart. It will take the fill shape starting very, very small, a scale of 0.1, and then at 80% of the animation, it will scale the fill shape up to be bigger than normal, a scale of 1.25. And at the end of the animation, the heart fill will go back to its intrinsic size with a scale of one. I also have a set of key frames named fade, which I'll be using on both the outline and heart filled shape. These key frames take whatever element I apply it to from the opacity of one to an opacity of zero. So let's apply these key frame animations to our SVG elements.
>
> **[1:34](https://www.linkedin.com/learning/css-animation-14153685/animating-svg-with-css?u=76281980&t=94)** Since our SVG is in line, we can target its internal objects like our two heart shapes with CSS selectors. Like we saw in the HTML, I gave them both IDs, so these are the two selectors I'll use to target those internal SVG shapes, the heart fill and outline, like the IDs I gave them. Our filled heart shape is the one with the ID of heart fill. So I'll start applying the animations to that one first. And I know I'm going to use the beat animation as I described. I'll give that a duration of 0.8 seconds and the easing of linear. Then I'm going to use a comma to separate the two animations because I want to apply the fade to the shape as well. I think it'll look a lot nicer if it kind of fades in, instead of just appears even when it's starting at that very small size. So we'll apply the fade key frames. I'll give that a very short duration of 0.25 seconds. And I'm going to have that set of key frames play in reverse so it fades in. And I'll give it the fill mode of both. So that should take care of our heart fill scaling up and in to view. But if we save and preview our file now, things may not look exactly as you expected. And here we've run into one of the big things that makes animating SVG elements different from animating dom elements and that's the SVG coordinate space. The complexities of SVG coordinate space are more than we can get into in this course. But the key point to know is that the origin point of SVGs coordinate system is at the top left.
>
> **[3:08](https://www.linkedin.com/learning/css-animation-14153685/animating-svg-with-css?u=76281980&t=188)** And that's also the point from which SVG child elements will transform from by default. And that's what we're seeing here. It's coming from the top left instead of the middle of the heart shape itself. Luckily we can make some adjustments in our CSS to make the heart scale from the middle of itself instead of the top left of the SVG. And there are two properties I'm going to use to do this. The first is setting a transform origin of 50% 50%, which essentially says use a transformed point from 50% across the element and 50% down the element, so the middle of the element. This new transform origin point though, will still typically calculate from the SVG itself. So that top left position. So we can add one additional property to tell the heart shape to calculate is transform origin from within the shape itself instead of the SVG it's a part of. And that property is the property of transform box and we'll set this to fill box. And this means that the transform origin will be calculated based on the fill box of our heart shape. And that's more the look that we want. So if we save now with those two properties added and refresh our heart animation, our heart is now scaling up from the middle of itself instead of the top left of the SVG. As one last step, I'll add the fade key frames to our heart outline shape as well. That way it will fade out as the fill is scaling in, just for a little subtle difference on the effect. So I gave that shape the ID outline,
>
> **[4:40](https://www.linkedin.com/learning/css-animation-14153685/animating-svg-with-css?u=76281980&t=280)** and I'll add an animation to it. I'll give it the animation of fade. I'm going to have the animation take 0.25 seconds, and I'm going to delay it by 0.4 seconds so it doesn't start fading out quite right away. I'll give it the easing of linear and the fill mode of both as well. So now when we save that and preview our animation once more, we can see that subtle difference of the outline fading out just before the fill fully scales in. So there you have it. We've animated SVG elements with CSS, and that's pretty powerful. Animating SVG with CSS is useful for small bits of animation. But if you're planning on doing a lot of SVG animation, I highly recommend using a [JavaScript](../../Skills/Software%20Development/JavaScript.md) solution like GreenSock or another JavaScript animation library. JavaScript animation libraries and especially GreenSock are built to take care of the common quirks of animating SVG for you right out of the box. So using one of them can save you a lot of time and effort.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **Env Vars:** svg (22), css (7), html (2)
> **Versions:** 0.25 (2), 0.1 (1), 1.25 (1), 0.8 (1), 0.4 (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 5. Advanced CSS Animation Techniques

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a motion path for CSS with offset-path](https://www.linkedin.com/learning/css-animation-14153685/creating-a-motion-path-for-css-with-offset-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/creating-a-motion-path-for-css-with-offset-path?u=76281980&t=0)** - [Instructor] Motion Paths are fairly new to CSS right now, but as support for them increases, you'll be able to use them more and more in your own work. CSS Motion Paths are created using the offset-path property. This might sound a bit weird at first, but the reason for this is that you can use the offset-path to do more than just motion. So it makes a little more sense in that context. To create an offset-path, the first thing you need is, well, a path. At the moment, paths defined with SVG path syntax are the most widely supported, but there are other options that may gain greater support in the near future. For now, we'll use the SVG path syntax option. You can get this SVG path definition from anywhere you typically draw or code SVGs. I drew this path here in XD and I'm going to use that for the source of my SVG path code. So for this one, I will right-click and say Copy SVG Code, got that on my clipboard, and then I'll move to my Code Editor just to paste this into a blank document so you can see what kind of code we're working with. In this case, I've copied the code for the entire SVG, which normally would be exactly what I want, but in this case, I only want that path shape, so the only part of this SVG I need is this part right here in the D equals. From this capital N all the way down to the 219.99. Everything within these quotes, that's what we'll need for our path definition. One thing to note if you're getting your path definition from a visual drawing tool, these tools often add a transform onto your path,
>
> **[1:35](https://www.linkedin.com/learning/css-animation-14153685/creating-a-motion-path-for-css-with-offset-path?u=76281980&t=95)** so for example, I have a transform right here. If you see very large numbers in this transform property, there's a good chance your path will show up in a completely different place than you intend it to, so keep an eye out for that. So I'm going to grab this path definition. I'm going to copy it and head over to my CSS to put this into an offset-path. I'm going to use this path definition to make one of our robots do a loop-de-loop across the screen. That robot is an image with a class of bot, so I'm going to assign it an offset-path property. And in that offset-path, I'm going to use the path definition I just copied from my SVG. So I'll give that the offset-path of path and then paste in the path information I copied from my SVG, finish off that line and I'll save my CSS. If I preview my file and my browser right now, I don't really see anything at all. I have my robot image and it has a path applied, but I haven't told it what to do with that offset-path, and we'll look at how to do that next.

> [!info]- Semantic Content
>
> **Env Vars:** svg (9), css (4)
> **CLI Commands:** make (1)
> **Versions:** 219.99 (1)
> **UI Navigation:** right-click (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Animating CSS motion path with offset-path](https://www.linkedin.com/learning/css-animation-14153685/animating-css-motion-path-with-offset-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/animating-css-motion-path-with-offset-path?u=76281980&t=0)** - [Narrator] Now that we have our offset path assigned to our element, it's time to animate it. Just to recap, our robot is an image in our [HTML](../../Skills/Web%20Development/HTML.md) and in our CSS we've assigned an offset path to our robot image. There are a few different properties that work along with the offset path property, but the two that are most useful for animation are the offset distance and the offset rotation. Offset distance represents how far along the offset path the element in question is, you can use this to place a number of elements spaced out along a particular path, or in our case, we'll use it to move an element along a path by animating it's offset distance value. I'll start by writing a set of key frames to animate that offset distance value. I'm going to call this set of key frames fly because that's kind of what the robot will be doing, and I'll start at the 0% key frame with an offset distance of 0%. So that is 0% of the way along the path, effectively the start of the path. And I'll create a 100% key frame with an offset distance of 100%, which is all the way across to the end of the path. This will make whichever element we apply this to animate from the very start of the path to the very end of the path. I should note that the key frame percentages and the offset distance percentages don't have to match exactly. It's just how it worked out for this particular example. With those key frames in place, we can assign those key frames to our robot image.
>
> **[1:35](https://www.linkedin.com/learning/css-animation-14153685/animating-css-motion-path-with-offset-path?u=76281980&t=95)** So I'll give our robot image the animation of fly. I'm going to give it a duration of nine seconds because it's got a lot of ground to cover. I'm going to use a custom cubic bezier for the easing and I'll give it an animation film mode of both, that way it will stay at the end of the path once it's animated to that offset distance of 100%. If we save this in preview it now, our robot animates along the path we set as the offset path and that's pretty cool. You'll notice that our robot image is rotating as it goes along the path, and that's because the offset rotate property is set to auto by default. So we didn't set an offset rotate property, but right now it's as if we wrote this and that will make the element that's following the path auto rotate to keep itself oriented to the path. If we wanted to, we can add an angle in addition to this auto. So I could add, let's say an additional 45 degrees, which essentially says follow the path with the offset rotate of auto, but lean forward just by 45 degrees in addition to that. So if we save that in preview our robot again, now we have the robot following along the path but leaning just a little bit forward and maybe that's a kind of fun effect, I don't know, I think personally I prefer just the straight up auto value, but I wanted to show you that there were some options there as well. So I'll go back to auto and preview our robot once more, and our robot animates along the path in that loop shape. As I mentioned, offset path is still a fairly new property
>
> **[3:10](https://www.linkedin.com/learning/css-animation-14153685/animating-css-motion-path-with-offset-path?u=76281980&t=190)** and it will most definitely be evolving. It can also be a bit tricky when you have to use the SVG path syntax. Animating with offset path is definitely something worth knowing about and trying out for yourself, but at the time of recording, it's not something I'd recommend using in production, at least not until it's more widely supported by browsers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** html (1), css (1), svg (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### [Dynamic CSS animation with CSS variables](https://www.linkedin.com/learning/css-animation-14153685/dynamic-css-animation-with-css-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/dynamic-css-animation-with-css-variables?u=76281980&t=0)** - [Instructor] CSS custom properties, otherwise known as CSS variables, make it possible to create key frames that are more dynamic and flexible. In the earlier days of web animation, one drawback of CSS key frame animation was the fact that you couldn't change or alter the key frames once they were written. CSS variables change all of that. In short, CSS variables allow you to define and reuse your own custom values within your CSS. There are a number of things that make CSS variables different than, say, preprocessor variables that you might've used before. But three things that really stand out are the fact that they can be changed at runtime, they follow the CSS cascade, and they can be easily accessed by [JavaScript](../../Skills/Software%20Development/JavaScript.md). When it comes to animation, we can use CSS variables both in our key frame definitions and when we're assigning animation properties to individual elements. So there's a lot of potential for flexibility. Let's take a look at all of this in action and use one set of key frames and create four words that animate in in different ways. To start out our example, I have a set of key frames that transforms elements along the X axis from somewhere far off to the left with a scale of one and no rotation to a place exactly where they would normally be with a scale of 1.5 and a rotation of 10 degrees. I've applied this animation to all of my paragraphs with the same duration and the same easing. That means when I go to preview our files so far, we'll see this, all four of my paragraphs animate in
>
> **[1:33](https://www.linkedin.com/learning/css-animation-14153685/dynamic-css-animation-with-css-variables?u=76281980&t=93)** with the exact same animation and start and end in the exact same place. Now if I wanted all four of these words to animate in in slightly different ways, I could write four different animations, one for each [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), or I could use CSS variables to make my key frames more dynamic and adjust the animation slightly for each different word. And that's the route I'm going to take for this example. So I'll head back to my CSS and start adding some CSS variables to use. I'm going to start by declaring some CSS variables at the root of my document. And since my animation is moving things a certain distance scaling to a certain scale amount and rotating to a certain number of degrees, those are the three things I'll make variables for first. So I'll make a CSS variable of distance or dist rather, and I will set its default at 0%. I'll create a CSS variable of scale, and I'll set its default at two. I'll create a CSS variable degrees or deg, I guess, is how you might say that, and I will set that default to 10 degrees. With those all set, I'll go and reference them in my key frames. So at my 100% key frame, instead of translating to 0%, I'll translate to the variable of distance or dist, as I wrote above, And instead of scaling to the hard-coded number of 1.5, I'll scale to my variable of scale.
>
> **[3:09](https://www.linkedin.com/learning/css-animation-14153685/dynamic-css-animation-with-css-variables?u=76281980&t=189)** And the same for rotation. And now that I have those variable set for my 100% key frame, I can adjust those variables for each individual paragraph thanks to the CSS cascade. I'll start with my first paragraph and adjust some or all of these variable values for each of my paragraphs so that the visual results of the 100% key frame will be slightly different for each. So starting with my first paragraph, I'll give it the scale variable value of 1.75. I'll give it the dist variable value of 80% and the degree of variable value of five degrees. So changing all of the values, at least slightly, for our first paragraph. For our second paragraph, I'm not going to change all of the values for this one. I'll let one of them use the default value set up at the root. So I will give it the scale variable value of 1.5. And I will give it the dist variable value of 30%. I haven't given my second paragraph a degree variable value. So that means it will default to use the one that set up here in my root, which will be the degree rotation of 10 degrees. I'm sure you're starting to see the power of CSS variables here. For my third paragraph, I'm going to let it use the root value of the scale variable, but I'll give it a degree variable of minus five degrees, so the rotation will be slightly different
>
> **[4:43](https://www.linkedin.com/learning/css-animation-14153685/dynamic-css-animation-with-css-variables?u=76281980&t=283)** than the ones above. And then I'll give it the distance variable of 100%. Last but not least, I will give my fourth paragraph the scale variable value of 1.9, the deg or degree variable value of 15 degrees. And I think I'll leave it at that. So if I save our file now and preview what we've got, all four words are still animating in with the same duration, the same easing, but their ending point is visually different, because we've used those CSS variables to change the 100% key frame values for each of those paragraphs. That's already pretty great, but we can make our animations even more dynamic if we use variables in our animation assignment as well as in the key frames. So let's go back to our CSS and do a little of that. I'm going to go back to where I define my variables at the root. And I'm going to add three variables we can use for our animation assignment. Specifically, that will be a dur or duration variable. And I'll set that by default at two seconds, since that's already what we have in our animation assignment. I'll create a delay variable, and I will set that default value to zero seconds. And I'll create an ease variable and give it the default value of linear. Next, I'll use those variables in our animation assignment
>
> **[6:20](https://www.linkedin.com/learning/css-animation-14153685/dynamic-css-animation-with-css-variables?u=76281980&t=380)** that we've assigned to all of our paragraphs. So for example, here I have the duration of two seconds in the shorthand, and I can replace that with the variable of dur or duration. I don't have a delay set on this currently, but I could add a variable for delay here. The second number with time in the animation shorthand will be the delay, and that counts the same when we're using variables as well. And last but not least, I will replace our linear easing with our easing variable. So that means that the variable values will be used in place of the hard-coded numbers and easing I had here before. Just like we did with our 100% key frame variables, we can adjust the value of these variables for each of our individual paragraphs, and that will give us even more of a dynamic look to our animations. So for paragraph one, I'm going to give it a different duration of, say, 1.9 seconds. It'll be a little bit faster than the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). And I will give it a custom easing with the ease variable, and that will be a cubic Bezier.
>
> **[7:37](https://www.linkedin.com/learning/css-animation-14153685/dynamic-css-animation-with-css-variables?u=76281980&t=457)** For paragraph two, I'll give it a delay variable value of maybe 0.5 seconds, just a little bit of a delay. And I'm going to give it an easing variable value of its own cubic Bezier as well. For paragraph three, let's just give it a different easing value. So we'll use the ease variable and give it a cubic Bezier value as well. And I'll do the same for our fourth paragraph as well. With those additions in place, we can save and preview our file once again. And as you can see, with those additional variables, we've made the animation even more different for each individual word. They're all still using the same set of key frames and the same animation assignment. But thanks to our CSS variables, they've all got a slightly different look. And this is just the start of how we can make our CSS animations even more dynamic with CSS variables. We could take this even further by using JavaScript to change the values of these variables at runtime, and even more. So CSS variables are really wonderful when they're paired with CSS animation. If you found this example interesting, I highly recommend learning more about CSS variables and the powerful things they can do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** css (26)
> **CLI Commands:** make (7)
> **Versions:** 1.5 (3), 1.9 (2), 1.75 (1), 0.5 (1)
> **Cross-References:** go back to (2)
> **Definitions:** known as (1), means that (1)
> **Analogies:** for example (1), just like (1)
> **Prerequisites:** set up (2)

#### [Animating variable fonts with CSS](https://www.linkedin.com/learning/css-animation-14153685/animating-variable-fonts-with-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/animating-variable-fonts-with-css?u=76281980&t=0)** - [Instructor] Variable fonts are a game changer for web [Typography](../../Skills/Data%20Science/Typography.md). A variable font is a font file that is able to store a continuous range of design variants and we can animate those variants with CSS. The key to animating variable fonts is the font-variation-settings property. We can animate any access of variation defined in the font itself with the font-variation-settings property. The variants available to animate will vary from font to font and a site like [wakamaifondue.com](https://wakamaifondue.com) can help show you the options that are available for any given variable font. For example, if I drop a copy of the Recursive variable font on the site, it will give me this report of all the characteristics and variable axes available in this particular font. I can even test them out right here to see what they look like. Many fonts will show their variable properties on their websites as well like Recursive does here. Looking at the demo section of the page, we can see that Recursive has five axes of variation, mono, casual, weight, slant, and cursive. Each axis has its own four-letter name and each of these can take a range of values as shown in the demo. As those values change, the appearance of the font changes and the font-variation-settings property lets us animate those value changes. Let's go look at some of this in action in our own CSS. I'm using the same font we just looked at, Recursive, here in my example. Let's animate some of the variable aspects of Recursive
>
> **[1:34](https://www.linkedin.com/learning/css-animation-14153685/animating-variable-fonts-with-css?u=76281980&t=94)** with a key frame animation. So I'll write my key frame block and I'll name this animation VARS since we're animating a variable font. I'll start with my 0% key frame and this is where I can start to use the font-variation-settings property. We know from its site that Recursive has axes for casual, cursive, weight, and slant. I'll use these in the font-variation-settings to create my animation. So we'll start with the font-variation-settings property. And first, I'll use the name of the casual axis which is CASL and start with a value of one. Then onto the cursive axis which is CRSV. Give that a value of one as well. And for weight which is WGHT, we'll go with 300. And slant which is SLNT. We'll give that a value of zero. I'm going to go on and add a couple more key frames for 25% and 75% with different settings in the font-variation-settings just for a little variation in our animation. At 25, I'll set the casual axis to zero. Cursive also to zero. Weight to 600 to get a little bit heftier in the weight and the slant to minus 10.
>
> **[3:14](https://www.linkedin.com/learning/css-animation-14153685/animating-variable-fonts-with-css?u=76281980&t=194)** At 75%, I'll set the casual back to zero. The cursive remaining at zero. The weight at 300 and our slant at minus 10. And since I'm going to have this animation repeating infinitely, I will make our 100% key frame equal to our 0% key frame so that way it'll start and end in exactly the same place. Last but not least, I'll assign this animation to our h1. So we'll give it animation of VARS and I'll have it take eight seconds. Make it a little bit long. Have it repeat infinitely and I'm going to use the easing of linear just so we can really get a sense of how the variable font itself is changing and animating as it goes. So we can save this and preview it in our browser, refresh. And you can see we have our h1 that has the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) hello in it animating through the variations of the axis we adjusted through our key frame animation. There's so much potential in what we can do with animating variable fonts and they allow us to create animation effects that wouldn't be possible without them. But I should note that at the time of recording, variable fonts are still fairly new, so there are a couple of things to keep in mind if you're using them for animation. First is that not all variable fonts are created equal. Some may have very interesting axes for you to animate for creative effects while others may have a very limited range.
>
> **[4:48](https://www.linkedin.com/learning/css-animation-14153685/animating-variable-fonts-with-css?u=76281980&t=288)** It might take a bit of time to find the ones that have the range you like. The second is that animating variable fonts is currently not very performant, so it's best to use it sparingly in production. This might change as variable fonts see more use, but keep an eye on your animation performance if you're using variable font animations in your projects. Variable fonts are very interesting to experiment with for many reasons, so I highly recommend checking them out and taking a look at the power they bring to the web.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Typography](../../Skills/Data%20Science/Typography.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** css (2), vars (2), casl (1), crsv (1), wght (1)
> **CLI Commands:** make (2), find (1)
> **Warnings:** note that (1), keep in mind (1)
> **URLs:** [wakamaifondue.com](https://wakamaifondue.com) (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** it's best to (1)


### 6. Tools for Creating CSS Animations

[↑ Back to Table of Contents](#table-of-contents)

#### [Using browser animation inspection tools](https://www.linkedin.com/learning/css-animation-14153685/using-browser-animation-inspection-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/using-browser-animation-inspection-tools?u=76281980&t=0)** - [Instructor] Both Chrome and Firefox browsers have some very useful animation debugging tools within their developer tools. These tools can be extremely helpful both in debugging and designing your CSS animations. They let you see what's going on in the code behind any given CSS animation. Let's take a look at Firefox's tools first. I have one of the animations from earlier in this course open in my Firefox browser. To get to the animation tools, you need to open the web developer tools, which you can do from the tools menu, to browser tools and web developer tools, or you can use the keyboard shortcut. Depending on the layout of your web developer tools, you may need to go to this arrow and make sure animations is checked to be able to see it in this right-hand pane. And I'll also make mine just a little bit bigger so I can see all the sections at once. The details in this tab will only show up once an element or elements have played their animation, so you might need to refresh your page to get them to show up. Once I do, you'll see that my animations pane has been populated, and we can see the element that an animation is applied to. We can see the name of the animation and some general information about it here. And in this bottom pane, we can see more information around which property is being transformed, and we can even hover over each individual keyframe to get the values of that property at each of these keyframes. And if you don't see this lower pane initially, you can just click on that top listing of the animation. From here, we can also scrub through the animation and we can even have it play at different speeds, either very slow or very fast. And I find that playing animations in slow motion can be especially useful for debugging them.
>
> **[1:40](https://www.linkedin.com/learning/css-animation-14153685/using-browser-animation-inspection-tools?u=76281980&t=100)** One last thing to point out that we'll see in the middle pane when we have the animating element selected, and I'll just refresh so we get our animations populated again, is the easing editor right here. So on this little gray icon, we can open the timing function editor, and this will let us play with different cubic-beizer easing options right within our browser, so that's a pretty neat tool as well. And this tool can be especially helpful when you're trying to get the easing just right for a particular animation. So that's a look at the animation tools in Firefox. Let's take a look at the ones we have available to us in Chrome as well. I have this same animation open in Chrome now, and to get to the Chrome developer tools, we want to go to view, developer, and developer tools. To open up the animation specific pane, you need to go to this three dots menu on the right, go to more tools, and then animations, and you'll get the animation pane opening up below. I'm going to make my dev tools just a bit bigger so we can see what's going on. The first thing you'll see is a message saying listening for animations, and you'll need to trigger your animations with this panel open to inspect them. So I'll refresh the page and now we'll see a little thumbnail which represents our animation. So we can click on that thumbnail to see the animation that it captured. If you have multiple animations going on on your page, you might see multiple thumbnails, but we only have one animation so we only see one thumbnail. Clicking on the thumbnail opens up the timeline for that particular animation.
>
> **[3:12](https://www.linkedin.com/learning/css-animation-14153685/using-browser-animation-inspection-tools?u=76281980&t=192)** And we can see things like its name, its overall duration, the placement of the keyframes and the easing used. We can also play and pause animation or have it play back at different speeds just like we saw in the Firefox Inspector.
>
> **[3:36](https://www.linkedin.com/learning/css-animation-14153685/using-browser-animation-inspection-tools?u=76281980&t=216)** In the Chrome Inspector, we can also do things like move the keyframes around in time. But note that any changes you make in this Inspector will not be saved anywhere. So you'll want to make note of any changes you make in this panel. Chrome also has a handy easing editor that you can access from the elements property listing. Look for this dark gray icon next to any easing assignment to open the cubic-bezier editor. And you'll see some very similar functionality to what we saw in the Firefox editor, where we can look through some easing presets, see a little preview and even adjust the handles ourselves to create custom easing right here in our browser. Both of these animation inspectors are hugely helpful for debugging and designing web animation. They've saved me a lot of headaches when animations just weren't playing back as expected and I'm sure there'll be just as helpful for you too.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (4), open the (3), click on (2)
> **CLI Commands:** make (6), find (1)
> **Tools:** firefox (6)
> **Env Vars:** css (2)
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Helpful online tools for CSS](https://www.linkedin.com/learning/css-animation-14153685/helpful-online-tools-for-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-animation-14153685/helpful-online-tools-for-css?u=76281980&t=0)** - [Val] The [Web Design](../../Skills/Web%20Development/Web%20Design.md) community is full of helpful people. And because of that, we've got a lot of great online tools to help you create CSS animation. We've touched on some of these tools throughout the course, and now we'll look at them all in one place. For custom or expanded easing options, [cubic-bezier.com](https://cubic-bezier.com) and [easings.net](https://easings.net) have you covered. On [cubic-bezier.com](https://cubic-bezier.com), you can edit the handles and adjust to your own curve and even preview it right here on the site, as well as copy and paste it for use in your own work. [Easings.net](https://Easings.net) lets you preview a number of commonly used easing equations, including the power equations or Penner's equations as they're sometimes called. You can preview each of these to see how they look and also copy the CSS for use in your own work. For optimizing your SVGs before animating them, svgomg is my go-to SVG optimization tool. This is the browser-based version and you can also use other formats of it as well, but this one is my favorite. And speaking of SVG, if you want to do more extensive SVG animation, I highly recommend using the [JavaScript](../../Skills/Software%20Development/JavaScript.md) animation library, GreenSock. They have specialized plugins for SVG like Draw SVG and Morph SVG that can save you a whole lot of time. Overall, I think it's the best animation library out there to work with SVG animation right now. If you're looking for some ready-made CSS animations to jumpstart a project, the next three sites are all great places to start for that. Animate.css and [animxyz.com](https://animxyz.com) feature an extensive collection of ready to use CSS animation effects. You can use them out of the box or build off them
>
> **[1:35](https://www.linkedin.com/learning/css-animation-14153685/helpful-online-tools-for-css?u=76281980&t=95)** to create your own animation effects like you've learned in this course. [Animistic.net](https://Animistic.net) is similar to those last two, but it also has a robust customization visualizer, which can be really useful for learning in addition to customizing the effect you want. And last but not least, browsing [codepen.io](https://codepen.io) is a great place to find CSS animation inspiration, and pick up on some new coding techniques. I hope you'll find all of these sites useful in your CSS animation work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Design](../../Skills/Web%20Development/Web%20Design.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [CodePen](../../Glossary/Tool/CodePen.md) (1)
> **Env Vars:** svg (7), css (6)
> **URLs:** [cubic-bezier.com](https://cubic-bezier.com) (2), [easings.net](https://easings.net) (2), [animxyz.com](https://animxyz.com) (1), [animistic.net](https://animistic.net) (1), [codepen.io](https://codepen.io) (1)
> **CLI Commands:** find (2)
> **File Paths:** animate.css (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [val] (1)


## Instructor

- [Val Head](../../Instructors/Web%20Development/Val%20Head.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/css-animation-2882049/codespaces)

## Skills Covered

- Cascading Style Sheets (CSS)
- Interactive Web Content

## Path Context

### In [Learn CSS](../../Paths/Web%20Development/Learning%20Paths/Learn%20CSS.md)
← [CSS- Images](CSS-%20Images.md) | **6 of 12** | [CSS- Display](CSS-%20Display.md) →

## Appears In

- [Learn CSS](../../Paths/Web%20Development/Learning%20Paths/Learn%20CSS.md)

## Related Courses

_Courses sharing skills:_

- [Making Sense of the CSS Box Model](Making%20Sense%20of%20the%20CSS%20Box%20Model.md) — Cascading Style Sheets (CSS)
- [React- Building Styles with CSS Modules](React-%20Building%20Styles%20with%20CSS%20Modules.md) — Cascading Style Sheets (CSS)
- [Cutting-Edge CSS](../Software%20Development/Cutting-Edge%20CSS.md) — Cascading Style Sheets (CSS)
- [Learning Web Audio and Video](Learning%20Web%20Audio%20and%20Video.md) — Interactive Web Content
- [Building Great Forms with HTML and CSS](Building%20Great%20Forms%20with%20HTML%20and%20CSS.md) — Cascading Style Sheets (CSS)

---

[↑ Back to top](#)