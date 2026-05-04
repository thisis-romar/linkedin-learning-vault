---
type: course
cssclasses:
  - lle-course
slug: adobe-xd-essential-training-prototype
url: "https://www.linkedin.com/learning/adobe-xd-essential-training-prototype"
duration_minutes: 77
duration: 1h 17m
updated: 10/5/2022
learners: 101046
skills:
  - Adobe XD
  - User Interface Prototyping
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEXXWYA_QRuDw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1635877344665?e=2147483647&amp;v=beta&amp;t=5rcMogn5-W2jzc436Frp4YlETSFrWfO3lGwfDMIMFOQ"
linkedin_topic: Web Development
learning_paths:
  - '[Improve Your UX Prototyping Skills](../../Paths/Web%20Development/Learning%20Paths/Improve%20Your%20UX%20Prototyping%20Skills.md)'
prev_courses:
  - '[UX Deep Dive- Usability Testing](UX%20Deep%20Dive-%20Usability%20Testing.md)'
next_courses:
  - '[Lo-Fi to Hi-Fi- Prototyping in Figma](Lo-Fi%20to%20Hi-Fi-%20Prototyping%20in%20Figma.md)'
path_nav: '[{"path":"Improve Your UX Prototyping Skills","position":2,"total":6,"prev":"UX Deep Dive- Usability Testing","next":"Lo-Fi to Hi-Fi- Prototyping in Figma"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/adobe-xd
  - skill/user-interface-prototyping
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Adobe%20XD%20Essential%20Training-%20Prototype.md)

![Adobe XD Essential Training: Prototype](https://media.licdn.com/dms/image/v2/C560DAQEXXWYA_QRuDw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1635877344665?e=2147483647&amp;v=beta&amp;t=5rcMogn5-W2jzc436Frp4YlETSFrWfO3lGwfDMIMFOQ)

# Adobe XD Essential Training: Prototype

> Fixing a fundamental mistake in a web app after it has been released can be costly and time-consuming. In this course, learn how to avoid such problems by building a high-fidelity, fully interactive prototype that can help you spot issues early in the design process. Instructor Dani Beaumont, a principal product manager on Adobe XD, shares insider tips for creating, sharing, and revising prototype

> [LinkedIn Learning](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype) | 1h 17m | 101K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Welcome to Adobe XD: Prototype](#welcome-to-adobe-xd-prototype)
- [**1. Windows Management**](#1-windows-management) (3 videos)
  - [Desktop preview app](#desktop-preview-app)
  - [Setting viewport height](#setting-viewport-height)
  - [Fixed position while scrolling](#fixed-position-while-scrolling)
- [**2. Triggers and Interactions**](#2-triggers-and-interactions) (10 videos)
  - [Tap and Previous Artboard transition](#tap-and-previous-artboard-transition)
  - [Hover transition](#hover-transition)
  - [Overlay transitions](#overlay-transitions)
  - [Copy and paste interaction](#copy-and-paste-interaction)
  - [Adding menu navigation](#adding-menu-navigation)
  - [Anchor links (Scroll To interaction)](#anchor-links-scroll-to-interaction)
  - [Preserving scroll position](#preserving-scroll-position)
  - [Keyboards and game pads](#keyboards-and-game-pads)
  - [Voice triggers with speech playback](#voice-triggers-with-speech-playback)
  - [Hyperlinks](#hyperlinks)
- [**3. Auto-Animate Interactions**](#3-auto-animate-interactions) (5 videos)
  - [Introducing auto-animate](#introducing-auto-animate)
  - [Drag interaction](#drag-interaction)
  - [Integrating video](#integrating-video)
  - [Integrating Lottie](#integrating-lottie)
  - [Exporting to After Effects](#exporting-to-after-effects)
- [**4. Conclusion**](#4-conclusion) (1 videos)
  - [Where to go to from here](#where-to-go-to-from-here)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome to Adobe XD: Prototype](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/welcome-to-adobe-xd-prototype?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/welcome-to-adobe-xd-prototype?u=76281980&t=1)** - In the world of [Prototyping](../../Skills/Software%20Development/Prototyping.md), it's pretty well understood that the best way to validate an experience is to, well, validate the experience. You can wave your hands and talk all you want, but your customer and the stakeholder that's paying your bill will likely not really understand what you mean until they can see it and interact with the solution themselves. My name is Dani Beaumont and I'm a principal product manager on the [Adobe XD](../../Skills/Web%20Development/Adobe%20XD.md) team. In part two of this three-part series, we're going to take the designs we created in part one and start to add interactivity. Now, you're welcome to jump in here, having not done part one in the course, but I'm going to assume you have some familiarity with the XD application. If you'd like to follow along with me, what you want to do is download the exercise files associated with the course. In it, you'll find both a before and after version of the file. You can decide if you'd like to follow along with me using the before version, or if you prefer to look at the after version, and then just look at the changes that I've made. You're going to want to also make sure you download the latest version of Adobe XD. With that said, let's go ahead and get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Adobe XD](../../Skills/Web%20Development/Adobe%20XD.md) (2), [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1)
> **Exercise Files:** download the (2), exercise files (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - in (1)


### 1. Windows Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Desktop preview app](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/desktop-preview-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/desktop-preview-app?u=76281980&t=0)** - [Instructor] Well, now that we have those housekeeping items in order, let's start looking at some [Prototyping](../../Skills/Software%20Development/Prototyping.md) features in [Adobe XD](../../Skills/Web%20Development/Adobe%20XD.md). As I proceed through the exercise file that I've given you, I'm going to give you a shout out, letting you know what area of the exercise file I'm on and what particular art boards. So for now, I'm beginning in the Basic Wires area of the exercise file. And I'm focused here on this first home art board. If you want to follow along with me and move to that area easily, you can look for the names that I shout out here in the layers panel, come on in and select them. And then in the view menu, select [Zoom](../../Skills/Software%20Development/Zoom.md) to selection. That will bring you to that area of the overall practice file. Nice and easily. Okay. So I want to look at this first art board. And actually when I do zoom out, you can see it's a rather tall one. What it's simulating is an iOS device, basically an iPhone and like most screens it's going to be fixed in width and variable in height. So the viewer tends to scroll down on the page. To take a look at this design. I can always stop my work and bring up the desktop preview window, which is built into XD. It's terrific for both seeing what your design looks like within the view port of your current device, and also understanding how any interactions will work. You can't really see interactions on the design canvas directly. So to bring up the desktop preview, I need to let XD know what it is I want to preview. I'll click on this home screen here
>
> **[1:34](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/desktop-preview-app?u=76281980&t=94)** and I'll do so by clicking on its title. Next, I'm going to come here in the upper right-hand corner and click on the desktop preview icon. Here within the desktop preview app, I can see again, the art board that I have selected. Now, since this one is so tall and thin, the preview window only gets so narrow. So I start to get some black bars on the left and right. What I want to do next is actually define the height or the view port for my particular device. And we'll do that in the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (2), [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1), [Adobe XD](../../Skills/Web%20Development/Adobe%20XD.md) (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Exercise Files:** exercise file (3)
> **Code Identifiers:** ios (1), iphone (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Setting viewport height](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/setting-viewport-height?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/setting-viewport-height?u=76281980&t=0)** - [Instructor] So when I place an art board on the canvas in [Adobe XD](../../Skills/Web%20Development/Adobe%20XD.md), that art board by default is simulating a particular device, and it has a fixed height and width. As I design, I tend to grow the length of that art board to compensate for the content that I want to show. In order to preview the content the way the viewer would, what I need to do is come in and define a viewport height, where the height of my view area. With my art board still selected here on the left, in the properties inspector in the scrolling area here, notice that it's currently set to none. In the drop-down, if I switched that to vertical, it's going to default to the height of the current art board, which of course just encompasses all my content. For this particular art board, I want to change that height to be 896. So I'm going to type that value in and hit return. What XD does is adjusts the desktop preview app for the height that I've defined. I can come in, and just give it a little bit more help here, and take away those bars on the top and bottom. So I get an accurate view of my currently selected art board. Notice here in the scrolling area, I can see it set to vertical, and what that value is. Back on the design canvas, when I added my viewport height, I have a little handle here in the visual indicator of where that's falling in my design. That makes it easier for me to make sure that my content sits above the fold as it said. So maybe I'll come on in,
>
> **[1:33](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/setting-viewport-height?u=76281980&t=93)** and select this here and move it up just a smidge so that it's not coming so close to the bottom of my screen. I can always come in, and visually adjust the viewport height here on the design canvas by pressing and dragging that dotted blue line. But since I'm actually trying to simulate a real device, I'm going to stick with what I know to be the viewport height, which is that 896 value. Now that I have that set, I can come in and start to scroll through all of the content on the art board, and interact with any of the interactive elements I might have defined.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Adobe XD](../../Skills/Web%20Development/Adobe%20XD.md) (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Fixed position while scrolling](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/fixed-position-while-scrolling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/fixed-position-while-scrolling?u=76281980&t=0)** - [Instructor] One thing I've realized when I teach [Prototyping](../../Skills/Software%20Development/Prototyping.md) in [Adobe XD](../../Skills/Web%20Development/Adobe%20XD.md) is it's very difficult to take a linear approach because interactive features work together with one another. And it's easiest to understand how they work together using specific examples. So for the next few chapters, I'm going to take some real world scenarios and show you how triggers and interactions work together to achieve that scenario. I have the first art board that we looked at just a moment ago. If I click on it here, I can see that it's that very long art board. And in the desktop preview, I can scroll on down to see the full content. Now what happens though is my top navigation here, scrolls off the screen right now. What I'd like to do is have what's known as persistent navigation and make sure my users can always navigate away from this page, or at least understand where they are knowing that they're on the landing page by seeing that top navigation. In order to do that what I want to do is select that content and define it as fixed position. So something that's not going to scroll when everything else does. This is a feature I showed you in the design course as well. And it happens to be available in both design mode and prototype mode. So we'll stick with design mode for now. What I want to do is come on into this art board. So I'm going to click to actually select content that's on the art board. When you're defining something that is fixed in position, when everything else scrolls,
>
> **[1:32](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/fixed-position-while-scrolling?u=76281980&t=92)** you're going to want to make sure that it's sitting on top of the content that's scrolling. So if I come and click on the header content that which I want to remain fixed here on the design Canvas notice in the layers panel, it's actually sitting just below this title, amazing health benefits. And it's kind of weird when that happens, where that amazing health benefits would end up scrolling on top of my fixed content. So I'm going to go ahead and select my nav mobile top, and I'm going to press and drag it so it is at the very top of the layer list for this art board. With it still selected here in the properties inspector, in the transform area towards the bottom there's a checks box for fixed position when scrolling. I'm going to go ahead and check it to enable that. When I now come to my desktop preview and scroll notice I get that nice behavior where my navigation is remaining fixed and the content below it is scrolling. I can do that with footer content as well. I can do it with things like back to top. So there are lots of scenarios where having that pin navigation makes a lot of sense.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1), [Adobe XD](../../Skills/Web%20Development/Adobe%20XD.md) (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Triggers and Interactions

[↑ Back to Table of Contents](#table-of-contents)

#### [Tap and Previous Artboard transition](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/tap-and-previous-artboard-transition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/tap-and-previous-artboard-transition?u=76281980&t=0)** - [Instructor] Now that we have the view port height set and our fixed navigation there at the top. What I'd like to do is actually navigate between our boards. So, I'm going to go ahead and magnify these two art boards, just a bit more so that we can see the details. The behavior I'd like to use is one such that when the user scrolls down on this art board, when they get down to that preparation button, what I want to do is have it so that they can navigate from that button to this second preparing page, very simple interaction, very common. In order to do that, in order to define this tap interaction, I'm going to change from design mode to prototype mode. And to do that, I'm going to come here to the upper left-hand corner of the app and I'm going to click on prototype. Go ahead and move this down just a bit more. What I'd like to do now is define my interaction. So as I mentioned, I want it to be such that when you click on this button, it takes you to this next art board. When I come in and click on the button, notice that I get a blue highlight. I'm going to magnify this even more so you can see it, a blue selection state. This is a quick way for you to realize that you're in prototype mode. There are some design capabilities that you can achieve, in prototype mode, but for the most part, it's really for defining [Prototyping](../../Skills/Software%20Development/Prototyping.md). And all of the design features are over in design mode. This is where we want to be though. We're going to go ahead and I'm going to close out the desktop preview here, for a moment. And with that preparation button selected,
>
> **[1:34](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/tap-and-previous-artboard-transition?u=76281980&t=94)** what I want to do is come in and navigate now to my second art board. Now, this is one of those things, it takes a little while for your brain to get used to. When you're defining an interaction or a wire, you can select an entire art board or any individual item within that art board. And as you select it, what you want to do is kind of tunnel through the hierarchy. So, if I were to click once, I'm going to select the entire art board. That's not the experience I want because if my user clicks anywhere, it would show a transition. And that's not a real world scenario. What I'll do is I want to get in on this button. So, I'm going to double click a second time, which tunnels me through the hierarchy, to where I can see that button here in that list. So, one thing that you can do is come in the layers panel to make that selection, but you want to make sure you have just the area that you want the viewer to tap on, in order to transition selected. From here, I can see a blue arrow on the right-hand side. This is where I can drag a wire or cause the interaction to take place. When I go to drag that wire, it honestly does not matter where I'm dragging it on the second art board, although you can have many trigger points, starting points from your source art board, you're really always going to arrive at the second art board, basically through the same front door. So, it doesn't matter where I release this wire, as long as I release it somewhere in the second art board, notice that I now can see the wire and as I hover over it, it tells me some tool tip details
>
> **[3:10](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/tap-and-previous-artboard-transition?u=76281980&t=190)** about the wire that's been placed. So, with that wire still selected on the desktop, here in the properties inspector. Again, making sure I'm in prototype mode. I can see some of the details that are here. This happens to be a button that has states to it and we're on the default state. So, the main upstate that's terrific. I can define an interaction, this is where I'm going to tell it that I want that tap behavior. You'll notice by default in the dropdown under trigger, tap is selected. There are a number of other interactions or triggers that I could define. We're going to stick with tap for now. And then I want to just kind of double check my details. The action is that it's going to transition from this first art board to the second. Under destination, it's just basically telling me the name of the art board that I selected. I could choose any other art board that I have, currently in this project. Dragging is a great way to flag it because you can see without actually defining all that much. I've got a ton of art boards to choose from. So, dragging onto the art board that I want to be the result of the trigger is a great way to go. Under animation, it's grayed out because it doesn't apply for a transition. Notice I can choose my easing options. If you're familiar with interactivity and the idea of easing, it's kind of simulating that natural transition. So, kind of the way a human body will get started running slowly and then speed up once it's running
>
> **[4:43](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/tap-and-previous-artboard-transition?u=76281980&t=283)** and maybe slow down towards the end. Again, if you're not familiar with easing, go ahead and play with some of these. We're going to go ahead and go with easing in and out. I can set the duration of that animation, 0.3 seconds is terrific. And then we're going to leave it right there with just those options. So, what I've done is gone in and dragged this wire and told it I want a tap behavior to transition, to the second art board. Let's check out our work. I'll go ahead and [Zoom](../../Skills/Software%20Development/Zoom.md) back out so that I can see what I got going on here a bit better. I'm going to click on that first art board and I'll bring back up the desktop preview. Here in the desktop preview, as I scroll down on the screen, I still have my fixed position header. I'll scroll all the way down to where I see that button. Now, what you'll notice is as I point to content here, in my desktop preview, it looks fine, when I hover over anything that's an interactive area, anything that has a trigger defined for it. My cursor changes to the hand tool, letting me know that I can click. When I go ahead and click that, I get that nice ease transition to the second art board and notice that it takes me right there, up to the top of that art board, where I scroll down and look at the content that I have here. I'm going to go ahead and kind of make this a round trip. So, I'll show you a second trigger real quickly. If I come back now to my second art board, and I'm just going to do this from this zoom view, I'm going to double click until I get right on the bowl. And I can see that it says icon bowl logo.
>
> **[6:17](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/tap-and-previous-artboard-transition?u=76281980&t=377)** I have two choices to get my viewer back to that first art board. If I press and drag a wire from that first art board to the second, XD is going to match what I just did, in the options here. So, a tap gesture transitioning to that first art board using ease in and out in three tenths of a second. It basically is sticky and it remembers what I said. And it's going to transition me back over there. That's one way that I can do it. Another one, if you get a complex design is you may not always want to have one-to-one behaviors between forward and back. So, I'm going to stick with tap and the trigger options, but under type, instead of transition, I'm going to go with previous art board. That's basically telling XD, you know what, wherever it was you just came from, go back the way you came whenever you click on this bowl. So, with that set now, I can come in and click on the bowl, in the desktop preview, takes me back to my first art board. Scroll down on the page, click on preparation, takes me to my second art board.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (2), [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1), cursor (1)
> **UI Navigation:** click on (7), scroll down (3), select the (1), go to (1), dropdown (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (3)
> **Versions:** 0.3 (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)

#### [Hover transition](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/hover-transition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/hover-transition?u=76281980&t=0)** - [Instructor] Well now that I have a nice tab gesture that is going to navigate me between these two art boards, let's make the interaction just a little bit richer. What I'd like to do is go ahead and show off the states that I've defined for this button, as part of the interaction. So for that I'm going to go ahead and [Zoom](../../Skills/Software%20Development/Zoom.md) in a bit tighter so I can see these two art boards side-by-side pretty well. I'm going to make sure I'm in prototype mode. I'll go ahead and click on that Preparation button. I can make sure I have it selected properly here in the layers panel, and that looks pretty good. The state's buttoned padded, that's what I want, and I can see the wire that we defined just a few moments ago. What I want to do is come in and add a second wire on the same object. So notice that if I roll over this wire without clicking a little tool tip lets me know that we've already defined a tab gesture for this button. What I want to do is come to the plus sign here just to the right of the selected object, I can also come here in the properties inspector and under Interaction, click on the plus sign there. It's just important that I have the object that I want to apply this to selected in the layers panel. So with it selected I'm going to click on the plus sign here in the properties inspector I can now come in and define what I want to be the second interaction for this same object. In the Trigger dropdown, I'm going to go ahead and select Hover, because I want to add a hover interaction. When I select that, I now have the ability to decide what the interaction is,
>
> **[1:36](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/hover-transition?u=76281980&t=96)** we haven't talked about Auto Animate yet, so let's just stick with Transition, I can then come in and under Destination, choose a state, right? Because I'm showing a hover interaction and so hover interactions really only work with the same component. I don't have a list of all the art boards right now that I have in my project here, I just have a list of all the states for my currently selected object. I'm going to go ahead and select Hover State, and I want it to dissolve as an animation easing in and out that all looks pretty terrific. So I'm going to leave that alone now, and let's just go back to the original interaction. So I'm going to click on that first art board, make sure I have it selected, here I am in my desktop preview window, if you close that out, you may want to go ahead and open it up once again, by clicking on the play button there in the upper right-hand corner, I can now come and scroll down on my design, I could click on the preparation button we know that, but notice now when I hover over it, it changes the look of the button to show off the hover state for that button. So I can include that hover state as an interaction, when I click on the button, it'll take me to that second art board and so forth so I can continue this level of interaction that we've defined so far.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **UI Navigation:** click on (6), dropdown (1), scroll down (1)
> **CLI Commands:** make (4)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Overlay transitions](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/overlay-transitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/overlay-transitions?u=76281980&t=0)** - [Instructor] If you're following along with me, I'm in the overlays area of the exercise file. Let's talk a little bit about overlays. When you're designing an experience, let's say it's a website or a mobile application, you may end up with hundreds of art boards, and there's content or elements that might reoccur across all of those art boards, things like a keyboard that slides up from the bottom or a menu that slides out from the side rather than require you to create a different version of every single art board to indicate the keyboard or the menu you can use the overlay feature. So the idea behind an overlay is that it is going to lie on top of the content that you apply it to. If I click over here on the overlay menu art board, and just bring that into view a bit more, what you can see is I went into the art board, and I defined a background fill that was transparent. So I set it to none. This allows you to then see through the content that's going to be underneath it. I also can create just a very small art board because I can control where that will be placed in relationship to the content that's underneath it. We'll look at that in just a second. But with this overlay menu set to be transparent, it's going to allow me to show the menu again on top of the content that's here for each art board. What I want to do now is go on back out again so that I can see all of them. Actually, we're going to start with just first two art boards. So I want to see the overlay pre-order art board,
>
> **[1:33](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/overlay-transitions?u=76281980&t=93)** and then the overlay menu. What I want to do now is define what it is that you tap on that'll cause the menu to appear. For that, I'll come here to the overlay pre-order art board, and I'll click on it. And I'm going to click a second time to tunnel into that header area. I'll click yet again. I'm going to double click one too. I can always navigate in the layers panel here, but I want to get to this state's menu slider. So that area that's defined just there. What I want to do is press and drag a wire from that hamburger menu to my overlay menu. When I release, I can see the properties here in the properties inspector. Now, if you happen to click off and lose the wire, don't panic, it's still there. Click on the title of that art board again. There I can see it disabled. When I click to select it, I'm back in a place where I can start to define specific attributes. So with the wire selected here in the properties inspector. Under trigger, we're going to stick with tab. Under action in the type area, instead of transition, I want you to select overlay. This is going to allow the art board to overlay now on top of the selected art board. When I do that, things happen there on the design canvas, hold that thought for a moment. Under animation. I want to come in and select slide left so I can choose from a variety of options here. I want it to slide to the left or come from the side of the screen. That's great. Under easing, I'll set it to none. And then under duration, I'm going to go ahead and set it to .6 seconds.
>
> **[3:07](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/overlay-transitions?u=76281980&t=187)** So it exaggerates that animation just a bit so that you can really see the details. With that all said, I want to now see what the interactions like. So I come back here on the design canvas and make sure I have that first art board selected, and I'll bring up the desktop preview app. Here in the desktop preview, I can go ahead and scroll down on my content. I've got my sign-up form, things like that. If I want to bring up the menu, all I need to do is come here in the upper right, click on that menu icon, and I get this nice sliding behavior. Now I'm not in love with the way that menu is kind of interfering with my top navigation. And that's where the preview here on the design canvas starts to be really handy. What this green cross here with the control point in the center allows me to do is visually decide where I want my overlay menu to occur. So notice now with that clicked on, I can press and drag and decide exactly where I want the menu to fall when it's triggered. I've moved it down just a little bit, and I'm a little more comfortable with that. In fact, let's bring it down even a little more and let's go ahead and refresh that preview. So back here in the desktop preview, I'm going to click on the menu to bring that up. And I have some nice space now between my top navigation and that menu. Now, as you noticed, I can dismiss an overlay by clicking off of it on the side. So I'm going to go ahead and do that.
>
> **[4:41](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/overlay-transitions?u=76281980&t=281)** If I click off, it'll bring me back to this main window. The next thing I'm going to show you is how you can easily apply this now to all of the art boards in this sequence.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), scroll down (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Copy and paste interaction](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/copy-and-paste-interaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/copy-and-paste-interaction?u=76281980&t=0)** - [Instructor] Now that I have this nice overlay behavior all set for my menu. I'm going to show you a trick for quickly applying it to the other art boards in this flow. So to do that, I want to come in, and select the object that has the interaction that I like. So I'll come here on the desktop, and I'm going to double-click until I get right on that menu. Once again, I can tell it's selected because I see the wire highlighted. With it selected, I'm going to click on edit, and then I'm going to click on copy. So in essence, copy that to the clipboard. I'll go ahead and close out the desktop preview, and I'm going to move here towards the left so that I can see those three remaining art boards pretty well. What I want to do now is select the object that I apply an interaction to. So that's going to be the menu here. I'll double-click until I get into select it. Then under edit, what I want to do is not select paste. I want to select paste interaction. So XD is going to apply just the interaction attributes to this selected object. When I release, I can go ahead and click on that wire, and confirm it has all the same details that I just set a moment ago on that first art board. I'm going to do that a few more times. So I'll come here to the second one in the sequence, paste those interactions. And again, I'll do it to the first, and paste those interactions. Now when I bring up the desktop preview, notice I'm here on that first art board. I can navigate through it, and go to that menu and dismiss it.
>
> **[1:33](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/copy-and-paste-interaction?u=76281980&t=93)** But I'm not able yet to navigate between these art boards because I've not defined any links here. So let's do that in this next section.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), select the (2), double-click (2), go to (1)
> **Speakers:** - [instructor] (1)

#### [Adding menu navigation](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/adding-menu-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/adding-menu-navigation?u=76281980&t=0)** - [Instructor] Now that we've linked the overlay art board to all of the art boards in this flow, let's add some navigation so that when you click here inside the Menu, it can take you to individual art boards. For that I'll close the desktop preview and here on the design canvas, I'm going to go ahead and navigate over to my overlay menu art board. I bring that into view and actually I'm going to kind of keep it pretty small, so that I can see all of the other art boards. When I'm linking our boards together, if you can see them in drag to them, it's usually easier than picking it from a complex dropdown list. What I want to do now is come in and select my individual navigation items, so if I double click here, it's selecting the group, double click a second time to make sure I just have that preparation menu item selected. Now that I have that selected, I'm going to press in drag it to the overlay, preparing art board. Now a funny thing happened that I want to explain. I had mentioned earlier on that XDs [Prototyping](../../Skills/Software%20Development/Prototyping.md) options are sticky. XD tries to be helpful and remember your last set of settings in this case it's not helpful because I don't want an overlay behavior to happen here. I want it to go back to a traditional tap gesture that transitions from one art board to another. So with that wire still selected here in the properties inspector I want to make sure I change it. So I want the trigger to be tab under the type I just want it to be a transition that goes to the art board that I selected by dissolving.
>
> **[1:33](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/adding-menu-navigation?u=76281980&t=93)** I can go ahead and ease in and out for that and we can keep that slower timeline, that slower duration. Now that I have that set, let's go ahead and apply the same behavior to the other menu items. I'll click on FAQ this time I'm going to press and drag to the FAQ art board. Notice that it remembered it was sticky and it remembered the settings that I just defined for the preparing page. Let's do it one more time for contact us, press and drag until it gets to the overlay pre-order art board that we'll do. Now that I have that set, let's look at our work. I'll click on the first art board in the sequence, and I'll bring up the desktop preview. Here in the desktop preview I can navigate down on my page. I can come in and bring up that menu. Notice in the menu, I can click on an individual art board, let's say FAQ's does a nice dissolve transition to that. I can look at that page content, okay we have now completed this flow. I'm going to continue building in this course on some of the knowledge that I've just given you. So things are going to get pretty exciting and speed up pretty well as we now proceed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1)
> **UI Navigation:** click on (3), dropdown (1), in the menu (1)
> **Env Vars:** faq (3)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Anchor links (Scroll To interaction)](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/anchor-links-scroll-to-interaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/anchor-links-scroll-to-interaction?u=76281980&t=0)** - [Instructor] If you're following along with me, I'm in the scroll to area of the exercise file. Let's talk about how you can define what's often known as anchor tags or hyperlinks that allow you to navigate to different locations on the same screen or same art board. I have an art board here, and if we take a quick look at it, you'll notice that I've got a header area, then I've defined a middle area for [products](../../Skills/Software%20Development/Microsoft%20Products.md), and below that I have what would be recipes. Back up at the top if I take a closer look here, you can see that in the top navigation in the header, I added three icons. One will take me to recipes, the next to the product area in the middle and then another to bring me back up to the top. I went ahead and made sure that all of this content is pinned. I can see that here with this pin indication. It's also checked in the properties inspector as a fixed position when scrolling layer. So I'm all set there. What I want to do now is actually wire these individual icons to those locations on the page. For that I'm going to tunnel through the hierarchy to get to the individual icons. So I'll start with products. I'm going to double click until I have it selected. Now, instead of pressing and dragging a wire here, I need to click and release. XD wouldn't really understand if I drag the wire onto myself, so I'm going to take a different approach. When I click and release here in the properties inspector I can define all of these attributes for the currently selected object. So it's important that you make sure you have that selected.
>
> **[1:34](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/anchor-links-scroll-to-interaction?u=76281980&t=94)** Here in the properties inspector, I'm going to stick with the tap trigger, under type, I want to change that to the scroll to type of action. From there I'm allowed to not necessarily choose another art board, but choose a layer within the current art board, and this is where my naming, my groups and my layers, well, will really help me out. So under destination, I'm going to go ahead and choose the Matcha products as a destination for that one. And I'll leave the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the behaviors here. I've got a nice easing behavior, and a slow down duration so that you can see the effect that we're applying. I'll go ahead and do that again with recipes. So I'll come in to select it. I'll click and release on that plus sign. Again I wanted to tap and I want the scroll to behavior this time to go to recipes. And I'm going to come back up to the top icon there, click and release on it, and I'm going to go ahead and have the scroll to take me to the nav mobile top. Now we're almost there, but I want to show you one other bit of [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) before we actually do it. So with that all set, I'll go ahead and make sure I click on the title of the art board and I'll bring up the desktop preview. Here in the desktop preview I can scroll down, as we know, from anywhere on the design, I can click in one of my anchor icons and it's going to take me to that location. If I on products, it'll take me there, I get right on that. Now, I'm not in love with how it's scrolling though. Notice that yes,
>
> **[3:07](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/anchor-links-scroll-to-interaction?u=76281980&t=187)** it's scrolling to the middle of the art board, but I can't see the title, and I can't control that with my link when I just click. If I come back to my design, so I'm going to keep this desktop preview up as I do this and click on, let's say products. I'll go ahead and click on the wire that I defined. Notice that there is another option here called y-offset. Now you might think, okay, how do I know how much to offset it? It's difficult to guess at that. So let's go ahead and make sure I can see where I am here. And as I enter the y-offset values, so I'm going to start with a value of 10 by typing that in and it'll come back up here. If I hit the tab key, notice that the value of 10 is now appearing here on the canvas. Now XD is going to do me a favor now that I've defined that y-offset and similar to the view port indicator that's here. I can come in and set where I want the y-offset to be. Now we're accommodating for that top level nav, that's why we have trouble. So if I press and drag this value up, let's just go ahead and guess that that's a good spot to be. I can quickly check myself, I'll click on recipes, still scrolling badly. But now when I come to products, pretty good. It's closer, I want it to go even further. So I'm going to go ahead and drag this up. Again, we're having to compensate for this top level heavy navigation, which is why we have to have such a big gap.
>
> **[4:39](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/anchor-links-scroll-to-interaction?u=76281980&t=279)** Let's go back to recipes, click on products, almost there. I'm going to bring it just a bit further. We're at 167 in the negative direction for that. Let's go ahead and navigate away from it. I'll click on top nav and then we'll come back to products. Pretty good. I'm going to go ahead and increase this to 175. So negative 175 and I'll hit enter, and we'll test it one more time, jumping over to recipes, back to products. Nice. I like that. So I have a y-offset of 175. Let's apply that same y-offset to the other two now. So I'll go ahead and click on top to select it. This is not as important because we're there all the way at the top, but for good measure, we're going to set this to negative 175. And for recipes, I'm going to come in and select that one. Make sure it's set to negative 175 and hit enter. Let's bring back up desktop preview. Here in desktop preview, I'm going to click on recipes, navigates me nicely there. I can jump over to products. Again, I'm in good shape. And when I select back to top, it takes me back to the top.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (10), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) (1)
> **UI Navigation:** click on (7), navigate to (1), go to (1), scroll down (1)
> **CLI Commands:** make (4)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise file (1)
> **Analogies:** similar to (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)

#### [Preserving scroll position](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/preserving-scroll-position?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/preserving-scroll-position?u=76281980&t=0)** - [Instructor] If you're following along with me, I'm in the scroll position area of the exercise file and I'm going to look at these first two art boards, scroll position proceed and scroll position back. This is a simple concept that I want to show you in action and I want to show you a real world scenario. It's much simpler than what we just did with scroll to, so be patient (chuckles) As I look at these first two art boards here, notice that I've broken them out into three sections, top, middle, and bottom. The behavior I'm looking for is if I were to click on "Proceed" in the bottom area, I want it to jump to this second art board, but I wanted to scroll down to the same location. This is something known as preserve scroll position. So to apply this interaction, I'm going to make sure I'm here in prototype mode still and I can see that I am, and I'll come in to select one of the buttons. So if I double-click on this first one here, proceed, notice that I can get in there and select it. And there's already a wire associated with that button. It's a hover interaction. So I can see that here in the properties inspector, when you hover over the button, it shows the hover state that's basically been defined. As you get more skilled with XD, I want you to start to juggle more complex scenarios. So we're going to go ahead and leave that wire there. XD allows you to have multiple interactions associated with the same object. XD is going to make sure that you don't apply conflicting interactions on the same object.
>
> **[1:33](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/preserving-scroll-position?u=76281980&t=93)** So in the properties inspector, you're only going to see the options that you're allowed to apply to an object when you're defining more than one interaction. With that first interaction set though, I'm going to come here on the design canvas and I'm going to press on this plus sign and drag a second wire to that second art board. Here in the properties inspector, I want this to be a tap interaction, and I want it to go ahead and transition to that second art board that I've defined. All I need to do to make sure that it not only takes me to that art board, but scrolls me to the same location in the up and down direction is to click on this preserve scroll position checkbox. All right, let's do that one more time. I'm going to click on this proceed, I'm going to click on the plus sign. Actually, I did that wrong. I'm going to press and drag on that plus sign to drag a second wire. I want to make sure that it is again a tap gesture that transitions, and it's going to go to the scroll position back upward, and we're going to just leave all those settings and make sure that preserved scroll position is still selected. This is where those sticky settings are really handy. Let's do it one more time. We're going to come to the last bottom proceed button, press and drag a wire, and I'm going to leave all of those default settings. Now I want the same behavior coming back. So I'm going to click on the second art board in this go back button and I'll just come on and make sure I have it selected, I'll press and drag a wire.
>
> **[3:07](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/preserving-scroll-position?u=76281980&t=187)** Make sure that that tap gesture is going to transition me back to my first art board and that preserved scroll position is selected. Do this once again, press and drag the wire, make sure the settings are all right, and let's do that for the bottom button as well, press and drag and all is good with the world. Let's take a look at our work. I'm going to come back to the first art board in the sequence and click on it. And then I'll bring up the desktop preview. Here in the desktop preview, I can scroll down on the page. Let's say I want to go all the way to the bottom and I click on proceed. Notice that it takes me to that second art board. So I see the yellow buttons. I can jump up to middle and say, go on back and it's going to bring me to the first art board right there in the middle. It's kind of so seamless. It's hard to tell that the magic is happening, but it's really toggling between the two art boards at the same horizontal location between those two. All right, I promised you a real world scenario. Let's move the desktop preview over to the side and I'm going to click on this pre-order art board instead, and I'll go ahead and resize my desktop preview and we'll kind of scroll up a bit. Let's assume for a moment I have a contact form. A lot of times, people like to get a confirmation when they submit a form, letting them know that it actually went through. Just having a dead screen can be very disconcerting. So as I scroll down here, there's also a nice Easter egg in here. I'm showing you different states for a contact form.
>
> **[4:41](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/preserving-scroll-position?u=76281980&t=281)** So each time I click on any of these, it's actually populating the content in the fields and I'm doing that using states for each of these form elements. Once I'm done in theory signing up for this form and I'm ready to click the sign up button, when I click it, I get this nice slow fade transition. I've got a background blur applied, you can see that here and I can have a nice confirmation letting the user know your submission has been received, we'll get back to you when we can. When I click on dismiss, it's going to gracefully transition me back to that first art board. So a nice real world example of the preserved scroll position behavior.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (8), scroll down (3), double-click (1), checkbox (1), scroll up (1)
> **CLI Commands:** make (8)
> **Definitions:** is a  (1), known as (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Keyboards and game pads](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/keyboards-and-game-pads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/keyboards-and-game-pads?u=76281980&t=0)** - If you're just joining me, I'm on the keyboard game pad area of the exercise file. So far in this course, we've talked about how you can use some traditional means to interact with prototypes with XD. So tap gestures, scrolling, preserved navigation, preserved position. What I'd like to do now is talk about some other scenarios where you might interact with a prototype using different sorts of devices. So keyboards and game pads. If I wanted to prototype a gaming experience like an X-Box, I can attach an X-Box controller game pad controller, and actually interact with my prototype. It's pretty amazing. We're not going to look at that right now, but what I do want to show you is how I can use keyboard shortcuts on my Macintosh here to interact with the interface. So the example I have here is a recipe book that would run on a native Macintosh application. And I'm going to go ahead and define the traditional tap gestures that navigate from one art board to another. But I also want to add a keyboard shortcut as well. So here on the right of this prototype, I have a recipe help screen that I was designing. And the idea is that there are a number of keyboard shortcuts you can look at to determine how to interact with the interface. What I want to do is go ahead and now link that to my main recipe screen here. I'm going to [Zoom](../../Skills/Software%20Development/Zoom.md) in so that I can see both art boards, this one on the right and this on the left. Just a bit more clearly. Next what I want to do is come here in prototype mode
>
> **[1:35](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/keyboards-and-game-pads?u=76281980&t=95)** and click on this help area. It's rather small so you're welcome to actually click on the art board, then here in the layers panel, click on that help area. I want to go ahead and add an interaction. So I'm going to press and drag a wire. When I release it here in the properties inspector, notice under trigger, I have the tap gesture and I want it to actually transition over to that help art board the recipe help using a dissolve transition. I'm going to leave all of the defaults there. I'm going to come in now and drag a second wire. So I'm going to click on that plus sign and drag a second wire here. Notice in the dropdown, I now have tap and I also have drag. In the trigger dropdown tap isn't there anymore. The reason is XD doesn't want to get confused in building out that prototype. It wouldn't understand what you meant if I had two ways to tap from the same object. So it actually takes it away from the dropdown menu. I'm going to come in this time and select what is still available to me and that's keys in game pad. And I'm going to go ahead and use a keyboard shortcut, basically shift and the question mark, to indicate that I want help to actually navigate to get there. Notice now I have those two interactions here, we're just going to keep this simple, I'll go ahead and click on that first art board and want to bring up desktop preview. If you don't want to come all the way over here and click on desktop preview directly, you can also hold command or control on the Macintosh and then type return.
>
> **[3:09](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/keyboards-and-game-pads?u=76281980&t=189)** That's going to bring up the desktop preview with that keyboard shortcut. As I mentioned, I now can bring up help by coming here and just actually clicking it or tapping on the keyboard. There's my help screen. I'll navigate back over. So I'm going to actually close that out. Go back to our first screen one more time. And then I want to show you that second interaction. So you're just going to have to believe me on this one because he can't see my hands, but instead of clicking on that help area, I'll bring my pointer here towards the side. And instead I'm going to hold down the shift key and then type the question mark on the keyboard, which transitions me over there. If you want to play around with this more, this design is set up such that if you come in and click on this side panel, you can minimize the side panel and then toggle it back up by clicking back up to return. And you can also create a new recipe by typing the plus sign here in the left-hand corner to bring up a new recipe. We're going to go ahead and scurry off to look at how you can use voice commands to transition between objects and art boards in the next section of this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **UI Navigation:** click on (7), dropdown (3), navigate to (1), toggle (1)
> **Cross-References:** go back to (1), in the next (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - if (1)

#### [Voice triggers with speech playback](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/voice-triggers-with-speech-playback?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/voice-triggers-with-speech-playback?u=76281980&t=0)** - [Announcer] If you're following along with me, I am in the voice area of the exercise file. Okay we just talked about how you can use keyboard shortcuts and game pad controllers to interact with prototypes. Voice is kind of a whole world on Twitam. And using voice that basically is the spoken [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), right? So speaking to your prototype, once you've produced it in XD will actually allow you to navigate between objects and art boards. This is a heavy idea for an essentials course topic. So I've gone in and actually pre-wired up this voice interaction. And what I want to do is explain to you how I set it up and give you the opportunity to interact with it. I'm going to [Zoom](../../Skills/Software%20Development/Zoom.md) in here to these first two art boards. So I'll select them and I'm going to magnify them a bit and I'll go ahead and hide all my panels so we can really see what we've got going on here. When you're dealing with voice interaction, there's kind of two different behaviors. One it's called voice trigger. So when I say something, it triggers a behavior and the other one is called speech playback. And often that is kind of validating when you actually navigate to another location, you can speak something appropriate for that. So let's assume I'm [Prototyping](../../Skills/Software%20Development/Prototyping.md) here. The Alexa echo show. Which is an Alexa echo that has a screen that you can look at it. And the idea is that I can use my voice to transition between art boards.
>
> **[1:34](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/voice-triggers-with-speech-playback?u=76281980&t=94)** And you'll see here I'm giving you the user of this prototype some cues about how to interact with the prototype and voice triggers that I've defined. If I click on voice begin, you'll notice I've defined a wire that's here, clicking on it comes up here in the properties inspector and shows you that the trigger is a voice trigger. And it's one that I typed in a command. So I can come in and say the words that it says right here in the prototype, Alexa, open matcha goodness. When you do that, I've set it up so that a transitions you to that second art board using animation behaviors that we're kind of familiar with so far. If I now click on that second art board, notice that there are two triggers that sit behind that. The first one, when I click on it is using something known as a time trigger. So with time triggers, you can say, hey after a certain amount of time, when anybody lands on this art board, I want to behavior to take place. You could delay that time trigger by a few seconds. So if the viewer of the art board doesn't interact with it within five seconds, often you'll bring up some onboarding help that explains, hey, are you not sure what to do now? Let me tell you what your options are. We use this also with the voice prototyping feature set to allow you to have that speech playback. So the first wire that's here is a time trigger, that has been set with zero delay.
>
> **[3:10](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/voice-triggers-with-speech-playback?u=76281980&t=190)** So it's going to play right automatically and under action instead of things like a transition or an overlay, I've selected speech playback. So I want the prototype to speak to me when I land on this art board and then I can choose which voice I'd like, this is a dialect or an accent. I speak English obviously. So I'm seeing all of the dialects or accents that are available with the speech engine in English. And what I'm seeing here will also be available as far as accents and such when I prototype this in a web browser or put it in front of a client. So it's based on my native language if I spoke German, I'd see different German voices in this dropdown. I'll go ahead and stick with Joanne. I'm going to have her say welcome to matcha goodness. The next thing I want to have happen is I want to enable [Speech Recognition](../../Skills/Software%20Development/Speech%20Recognition.md) when I say these words, Alexa search for Matcha smoothies. So I've added a second wire. I can click on that second wire. And it says basically the trigger is my voice. And when I say Alexa, search for matcha smoothies, go ahead and transition to the destination, which is this voice smoothies art board. From here I can now come and interact with this by clicking on the first art board in the sequence and bringing up that desktop preview. Whenever you interact with a prototype, you have to hold down the Space Bar
>
> **[4:43](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/voice-triggers-with-speech-playback?u=76281980&t=283)** to enable speech recognition. So I'm going to go ahead and do that. I'm here and I'm going to hold the Space Bar and speak my command. Alexa, open matcha goodness.
>
> **[4:57](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/voice-triggers-with-speech-playback?u=76281980&t=297)** - [Joanne] Welcome to matcha goodness.
>
> **[5:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/voice-triggers-with-speech-playback?u=76281980&t=300)** - [Announcer] So what just happened is it transitioned to that second art board and then Joanne spoke the command basically, welcome to matcha goodness. I can keep proceeding here. I'm going to hold the Space Bar, Alexa search for matcha smoothies. And so on, so she has heard the words that I've said, and Alexa has now transitioned to any of the smoothies that are here that have matcha in them. I think you get the idea. As I mentioned, this is just a cursory look at how you can integrate voice recognition and speech playback with your transitions. If you experiment with the prototype example I've given you here, I think you can start to get a little bit of a better sense about how you define those flows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Prototyping](../../Skills/Software%20Development/Prototyping.md) (2), [Speech Recognition](../../Skills/Software%20Development/Speech%20Recognition.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **Definitions:** is a  (4), is called (1), is an  (1), known as (1)
> **UI Navigation:** click on (4), navigate to (1), dropdown (1)
> **Speakers:** - [announcer] (2), - [joanne] (1)
> **Exercise Files:** exercise file (1)

#### [Hyperlinks](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/hyperlinks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/hyperlinks?u=76281980&t=0)** - [Instructor] If you're following along with me, I'm in the hyperlinks area of the exercise file. Now, we've just covered the ability to navigate from artboard to artboard using wires and tap or overlay interactions, and these work really well when you're navigating within the same prototype. What they don't allow you to do is easily navigate to other web surfaces, other web pages. You'll want to use hyperlinks for that, and I'll give you a few examples of those in action. So here in the hyperlinks area, I have two artboards. I'm going to go ahead and move towards this first artboard, Hyperlinks Home, and I'm going to come down on that artboard to this organic little tile lock up here, and I'll bring it into view a bit more clearly. Next, what I want to do is go ahead and click on this see more button. So to select it, I'm going to double click once, try to get right on the button, and double click so that I select that button. And I can see here in the layers panel that I have the button selected. Next, what I want to do is come over to prototype mode. So I'll click on that in the upper left hand corner of the app, and over on the right, you can see that this button already has a hover interaction on it. That's fine, I can see it there on the canvas, and here in the properties inspector, I see that it's got a default state and a hover state. What I want to do is add a second interaction, so I'll come to the interaction area, and in the right there, I'm going to click the plus sign. XD's going to suggest a tap interaction. If it suggested something different, I do want tap,
>
> **[1:35](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/hyperlinks?u=76281980&t=95)** and I can control that here in the trigger dropdown. So I'll make sure that tap is selected in the action area under type. By default, I'll probably have transition here. I want to come on in and instead select hyperlink. From there, I can come in and define my hyperlink destination. Now, XD is going to quickly check whatever destination I define to make sure it does resolve, so you can play with that a little bit. I'll show you what I mean. If I come here and, let's say I want to drive to the [adobe.com](https://adobe.com) webpage I'm going to go to https:www.[adobe.com](https://adobe.com).
>
> **[2:17](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/hyperlinks?u=76281980&t=137)** And when I press enter or return on the keyboard, notice that XD gives me an error. It's saying that I can't resolve that URL, and it's giving me a sense of the structure I need to follow. So I'm going to click back in that URL and I'll add that. And then once again, when I hit return, XD's going to check to make sure it's appropriate, and indeed it resolved, so I get a little check mark. That will now navigate to [adobe.com](https://adobe.com) for me. Let's look at another example. Let's say I have a block of text. So if I came up to, let's say this Bamboo Spoon area here on the second artboard. This can be any content, any block of text that you have. So if I wanted to define a hyperlink but I want it to be in line, so in the paragraph text itself, what I can do is come in and select the text that I want to apply that link to, so I'll double click here to get inside this text object. I'm actually going to switch back over to design mode, right, 'cause we're editing the text, and I'll double click and just select that [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) measure. With that selected now, here in the properties inspector, if I roll on down, notice that in the text area, there's insert URL here. So it's a little hard to find, but just to make sure we're on the same page here, I've selected some text. It's important that I select the text to see this hyperlink option. And once again, I can come in and decide that I want this
>
> **[3:51](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/hyperlinks?u=76281980&t=231)** to go to [https://adobe.com](https://adobe.com). Now when I hit return, it resolves, I get that little check mark, and notice on the design canvas, it automatically applies an underline to that word so that the viewer of my content knows that it's a link. It's something that they can click on in order to drive to that external webpage. Another way you can use this is if you need to support a lot of downloadable files. Let's say you have 30 PDF documents that you want to make available and you want to show how viewers would be able to download those PDF files easily if those files are on a CDN, so if they exist somewhere out there on the web as downloadable files, you want to make sure you have that path, the URL for each of the files, and you just paste it, in either in line or on a per object basis, as I've shown you. The last thing that is worth mentioning is, and this is definitely sort of a niche case for hyperlinks, is the ability to actually use the mail to command to actually send an email. So there are lots of ways that you'll do this with buttons and [Forms](../../Skills/Web%20Development/Forms.md) and such, but if you did want a simple mail to command, that is supported in XD. Let's say I came here to learn more and I wanted to have them send me an email whenever they wanted to learn more about this product.
>
> **[5:26](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/hyperlinks?u=76281980&t=326)** I'll come on in and select the text that I want to highlight, so here I am in design mode. I'm going to come on in, select it on the design canvas. With it selected, in the properties inspector there, in that text area where it says insert URL, this time, what I'm going to do is just type mailto:danny@[adobe.com](https://adobe.com) So, any proper email address. When I hit return, XD's going to check me, make sure that that seems at least structured appropriately. I get a check mark, and when I bring that up, now if I were to click on that link, it's going to open up the mail client on my local machine and open up an email that I could then send to danny@[adobe.com](https://adobe.com). With that all set now, let's take a look at a second type of link that's going to take you to a specific location on the same artboard or another artboard, and that's known as an anchor link in XD.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **UI Navigation:** click on (4), select the (3), go to (2), dropdown (1), navigate to (1)
> **CLI Commands:** make (7), find (1)
> **Env Vars:** url (5), pdf (2), cdn (1)
> **URLs:** [adobe.com](https://adobe.com) (5), [https://adobe.com](https://adobe.com) (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** known as (1)
> **Prerequisites:** make sure you have (1)


### 3. Auto-Animate Interactions

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing auto-animate](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/introducing-auto-animate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/introducing-auto-animate?u=76281980&t=0)** - If you're following along with me, I'm in the auto-animate area of the exercise file. If you've not seen auto-animate in XD before, buckle your chin strap, this is an incredibly fun capability. It's difficult to get your head wrapped around it. So I'm going to just show it to you first and then we'll talk about it a bit more broadly. What I have here is an artboard and in the artboard, I have a tea product and it's within a tile. What I want to do is create a second artboard and I want to show a detailed view of that tea. Auto-animate will allow me to create a micro interaction between artboards to show that. You can apply auto-animate between art boards and also very powerfully between components states. The rule that you want to follow that makes auto-animate a lot easier to understand is you really want to start with an artboard, duplicate it, and then make your changes. The way auto-animate knows to animate between two artboards or two states, is it looks for the same name in the layers panel between the two artboards or states. And if you don't name them exactly the same, things just aren't going to work. So I have gone in and made this a little easier for us in a couple ways. Let's just go ahead and start duplicating and working on it. So I'm going to come in and select this first artboard, and I'm going to go back to design mode and I'm going to press and drag a second copy. I'll hold the shift key and the option key,
>
> **[1:35](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/introducing-auto-animate?u=76281980&t=95)** which allows me to duplicate, and then I'll let go of that second artboard, and I'll come on in now and give the second one a better name. So we're going to call this animate tea detail. And as I mentioned, I just kind of want to show the detail of the tea here and almost a lightbox view for the user. So what I want to do is first get rid of the content that I don't want to be visible on the second artboard. And this is where I made things a little easy for you. If you click on featured loose teas here in the second artboard, notice here in the layers panel, I created a group and I named it hide me. When I click on that group, I'm going to go ahead and hide it from that artboard. I can just, here in the layers panel, click on that eyeball, which is going to hide it. I also want to lock it so that I don't select it accidentally. So I'm going to click on that lock icon next to it as well. And with the content that remains, I now want to design up a bit of a different layout. So what I'll do is come on in and let's see. I'm going to move this background up a bit higher and I'll leave everything below the fold blank, because for what we're looking at now, actually let's go ahead and reduce the size of the artboard. Cause I don't need this to scroll. So I'll make it the actual height of the viewport area. I'm going to take the title and I'm double clicking to tunnel inside of the group here
>
> **[3:11](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/introducing-auto-animate?u=76281980&t=191)** to select it. And I'm just going to drag it up a bit. I can make it even a bit larger. I'll bring it down. I want a little bit of room in the upper corner there. I'll do the same with the price. I'm going to bring it up and I'm going to increase the size of the price. And then I'm going to get to that tea view there. I'm going to resize it's container so that it's much larger and takes up this white space that we've made available. I can exaggerate this as well. I can go inside the mask and really start to show the tea detail if I'd like, something like this. I'll go ahead and click off. Now that I've resized the tea and I want to just come in and add one more thing, which is an ability to close out this lightbox view. For that, I will come here in the panels, to the assets panel, and I'm just going to search for close. I've got a number of close icons here. I'm going to select the menu, small close, and I'll just press and drag that onto the canvas here. I'm going to go ahead and cut it to the clipboard. I'm going to double click here inside this artboard. So one two. If I go back to the layers panel, you can see I'm moving inside the hierarchal structure of this artboard. I'm going to paste that close button and I'm going to bring it up into view. So I just wanted to get it inside the content that we have here and I can see it's now inside this artboard
>
> **[4:45](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/introducing-auto-animate?u=76281980&t=285)** up towards the top. So what we want to do now is animate between these two different states of these artboards. I'll come back to the first artboard. I'm going to double click on the tile. I'm going to switch over to prototype mode. With that tile selected, I'm going to press and drag a wire. Here in the properties inspector, under trigger, I still want to tap trigger, but this time I want the type of trigger to be an animation, auto-animate. And I want it to animate to this second artboard. The easing behavior is fine. I'm going to leave the duration at 0.6 seconds, which is rather long, to exaggerate it so you can see that detail. Once the viewer has looked at the detailed view, I want to let them escape and come back to the main tile view. So on the second artboard, I'm going to click on this close button here, and with it selected, I'll press and drag back to that first artboard. Once again, a tap trigger is going to auto-animate to the first tile using easing for easing out here in a duration of 0.6 seconds. So very simple transition in and out. With that all set now, I'm going to click on that first artboard and I'm going to bring up the desktop preview app. Notice that I have the app, I can scroll down on it. When I hover over the tile, I get an indicator letting me know that I can click there. When I click on the tile, it's kind of subtle, but I have this nice animation that animates my details. My close button dissolves or appears using a dissolve.
>
> **[6:21](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/introducing-auto-animate?u=76281980&t=381)** The text becomes larger. The image here becomes larger. All the other images disappeared or faded away. If I want to go back and go back to that first artboard, I'll click on that close icon, which animates me back. You can kind of play with this a few times and just really watch all the details of what happens. So the content that we hid on that second artboard, fades away nicely, and that which we added, fades in nicely, and just the sizes and locations of things change. All right, that is your primer for auto-animate. Let's look at how we can combine auto-animate now with some of the other amazing features in XD that I have already shown you.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (9), select the (1), scroll down (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (3)
> **Definitions:** is an  (3)
> **Versions:** 0.6 (2)
> **Exercise Files:** exercise file (1)
> **Speakers:** - if (1)

#### [Drag interaction](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/drag-interaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/drag-interaction?u=76281980&t=0)** - [Instructor] If you're following along with me, I'm in the drag interaction area of the exercise file. We've just talked about auto animate and how powerful it is to create a micro interaction between art boards or between component states. Part of this essential course is for you to understand individual ideas, but then also see quickly how you can apply them with other XD features to create some really powerful prototypes. So what we're going to do here is take a layout that I've worked on. And in it, I've basically applied that auto animate transition that we just did. Such that when you click on this tile, it can bring you to a detailed view of the tea product using the auto animate micro interaction. What I want to do now is combine that with the drag gesture, an interactive feature that you can use in combination with auto animate really beautifully. So if you'd like to follow along with me. What I want to do is click on this first art board here, and you can see that, on the art board I've got my main tile. And then sort of just off the screen, I've placed a second tile that's smaller. What I'm simulating in two dimensions is this three-dimensional concept of a carousel, where objects, as you bring them closer to you get larger and as they move away, they get smaller. So I want the behavior to be that when my viewer drags on this tile and brings it into view, it actually moves the first tea off to the left
>
> **[1:35](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/drag-interaction?u=76281980&t=95)** and brings the second tea into view. To do that, I'm going to go ahead and switch over to prototype mode. Notice I've already got wires that are defined here, these shouldn't frighten you, these are the wires that are auto animating the transition to the detail view of the tea. There's also wires defined here showing the hover states of this button. I'm going to come in a little tighter so that I can see this tile that's hanging off the side here. With it selected, I want to press and drag a wire to that second art board. Here in the interaction area, I don't want to tap trigger, this time I want a drag gesture or a drag trigger. And I want to use auto animate to animate to that second art board that's there. Now this goes back and forth, so I'm going to come to the second art board. I'm going to click on it, maybe once, click a second time to select the tile that's hanging off the left edge there. I'm going to grab the wire arrow and press and drag it back to that first art board. And the sticky properties will probably help me out here. I've got a drag trigger that's going to auto animate back to that first art board. And I don't need to apply any easing to this. Let's go ahead and just look at what we've just done here. For that I'm going to come back to the first art board and I'm going to click on it. And I'll bring up the desktop preview. I can see it here, we're not going to do anything else for a moment.
>
> **[3:08](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/drag-interaction?u=76281980&t=188)** We're going to come to that second tile. And instead of clicking, if you have a track pad or a mouse, you want to press and drag to transition between art boards. So press and drag, and I get that nice carousel transition. Now things are looking a little funny 'cause I've slowed this thing down. And I am using auto animate to simulate this drag transition. But I get that nice behavior, in addition to that I can always go to that detailed view. I even added a little bit of sound as part of that transition to kind of go in and transition between the two. I haven't wired up the close box here, there we go. If I go back now to my first art board, and go on into that detailed view, I can bring it up and I can close this back out. So, we have a combination of those two techniques now here, you have auto animate between art boards and you also have auto animate combined with drag gestures. Let's keep going.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), select the (1), go to (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Integrating video](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/integrating-video?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/integrating-video?u=76281980&t=0)** - [Instructor] If you're following along with me, I'm in the video interactions area of the exercise file. So in an earlier course, we talked about video as a media type that you can work with in the design course in this three-part series. In this course, we talked about [Prototyping](../../Skills/Software%20Development/Prototyping.md) using auto-animate to transition between art boards. What I want to do is show you how combining the two together, can be a lot of fun and quite powerful. So I have an extraordinarily simple example just so that you can understand the concept. If I come here to the first two art boards and [Zoom](../../Skills/Software%20Development/Zoom.md) in a little more tightly, I've got a landing art board, and I have a button here for preparing matcha. I want it to be such that when you click that button it takes you to a video view. Now ordinarily, if you were looking at this video in full screen, you probably would change the orientation of your phone to be landscape. I'm going to keep it as portrait, it's just a little simpler when you're using the desktop preview app, but you'll get the basic concept that I'm trying to communicate here, I think pretty easily. So we're going to go ahead and use auto-animate to transition between the two art boards. So I'll select this art board and I'm going to press and drag a second copy as we did a little earlier. Next I want to come in and make changes to show that fuller screen view of the video. So I'll take my headline here and I'm just going to go ahead and hide it and we'll lock it so I don't select it accidentally. I'll select my expand icon here in my video, and I'm going to bring it up closer
>
> **[1:36](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/integrating-video?u=76281980&t=96)** towards the top of the art board. Now I had meant to actually check to see my video settings here. So I'm going to click on that video and in the layers panel, take a quick look. As I look here in the properties inspector, it's set to play whenever you tap on it, that's great. It's also set to loop, which is great. The audio is turned off, you can turn it on. It's just a little difficult to listen to me in the video and listen to me speaking to you at the same time, but it'll help you understand or appreciate how the video continues to play without interruption. So I'm going to leave those settings as they are, they're fine. Next, what I want to do is come in and just expand this video. So I'll start by selecting the mask, and I'm just going to make it awfully big. Then I'm going to double click inside of that and make sure that my actual video expands within that as well. So I just want to exaggerate this for this example, I've got a larger version of that video. So as it stands now, I've got a larger view and this smaller thumbnail view with this video. What I want to do is use auto-animate to transition between the two art boards. It's auto-animate that's going to enable the continuous playing of the video. So I'll go ahead and switch over to prototype mode. I want to click on that expand icon. I'll press and drag it to the second art board and once again, I want to use the tap trigger to auto-animate to that second art board, and I'll leave the default settings that are here. I'll go ahead and double click on the title of this
>
> **[3:09](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/integrating-video?u=76281980&t=189)** to make it a little clearer. This third one, I will call it Making Matcha Big. Next I'll come in to that icon there, and I'm going to toggle it to the Collapse state. So here in the properties inspector, I can click on Collapse, so it shows the icon pointing down. Next I'm going to press and drag to add an auto-animate transition between the two and again, tap trigger, auto-animate, back to that first art board, it's perfect. Let's go ahead and take a look now at what we've done. I'll click on the first art board in the sequence, and then I'll bring up desktop preview. As I look here I can come in and click over to Preparing Matcha, that's where my video is. I'll start playing the video by clicking once to tap on it. That video starts playing. As it's playing, when I expand or go to my next art board, notice that the video keeps playing? I can go ahead and contract it and go back to that first art board by clicking on that second icon and the video keeps playing. So it's a bit of a kludgy example but I could show it to you rather quickly. Just notice how it continues to play, it's on loop. That's just going to keep happening as I toggle between these two art boards with the video continuing to play.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **UI Navigation:** click on (5), toggle (2), go to (1)
> **CLI Commands:** make (4)
> **Cross-References:** we talked about (2), go back to (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Integrating Lottie](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/integrating-lottie?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/integrating-lottie?u=76281980&t=0)** - If you're following along with me, I'm in the Lottie interactions area of the exercise file. I want to show you the combination of auto animate with one more file type, and that's going to be a Lottie animation and the way that you can use that to simulate a loading screen. So I have two art boards here, and if I go in and look at them a little more closely, you notice on the first art board, I have a note that says, please wait while we load your selection. So the idea is that the viewer might have loaded or search for a certain type of tea. And I want to simulate the time it will take to find that data on the backend, and I'm going to use the interface to do that. So what I want to do is bring in my lobby animation for that I'll go out to my computer, desktop, to the exercises folder. Here in the exercises file folder, I've got my Lottie animations. I'm going to open that up and I want to just select the animated bowl, bubbles, Jason file. I'm going to press and drag that onto the design canvas. And I'm going to resize it just a bit so that it's slightly smaller and in position here. I can go ahead and look at what's happening there. So I'll click on that initial art board and I'll bring it up in the desktop preview. And you can see that that animation is all set to play automatically when I load the art board. Right now, it just plays and stops. What I want to do is add one more step here. So I'm going to go ahead and click on that Lottie animation. I'm going to switch over to prototype mode.
>
> **[1:33](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/integrating-lottie?u=76281980&t=93)** You'll notice there's already a wire defined for this Lottie animation that happened when I placed it on the design canvas. Lottie files will play automatically when you place them, unless you change that setting in design mode. What happens is here in prototype mode, a wire is automatically added when you do set it to play automatically. And I can take a look at it. Here's the wire selected on the design canvas and in the properties inspector, I can see it's a time trigger that says right away start playing that animation. And here's the Lottie animation that I want you to play and the behavior that I wanted to have. What I want to do now is add a second interaction to the same Lottie file. So I'm going to press and drag a second wire. This time in the trigger dropdown, I want to select end of playback that tells the prototype when you're done playing that animation however long, it is automatically transition to the next art board. So at the end of playback, do a transition for me to the search results, our board here. And again, I can set the easing and the duration it's set to actually exaggerated at 0.6 seconds. So we'll leave it at that. And let's go ahead and just look at the work we've done. So I'm going to click on that first art board. So with it selected, I'll bring up the desktop preview. I can see the lobby animations playing, those bubbles are going to rise up about twice when it gets to the end of the lobby, animation, it dissolves or transitions over to that next art board.
>
> **[3:08](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/integrating-lottie?u=76281980&t=188)** So I can simulate the time it would take for that loading animation.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), select the (1), dropdown (1)
> **CLI Commands:** find (1)
> **Versions:** 0.6 (1)
> **Exercise Files:** exercise file (1)
> **Warnings:** note that (1)
> **Speakers:** - if (1)

#### [Exporting to After Effects](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/exporting-to-after-effects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/exporting-to-after-effects?u=76281980&t=0)** - [Instructor] If you're following along with me, I'm back in the auto animate area of the exercise file. And I want to talk a little bit about handing off your micro interactions, your auto animate interactions to After Effects. If you work with an interaction designer that's familiar with After Effects, it can be a real leg up to take anything you might have prototyped, and show in your design, and gotten sign off from your stakeholders, and be able to reuse that content. When you create auto animate transitions, you have the ability to export the pieces, and parts of that animation directly to After Effects. So let's assume for a moment this small, and large view of my tea art boards here is something that I do want to build out in After Effects for my end result, my end coding environment. What I can do is come in, and select two little art boards here. So I'll press and drag to select them. Under file, I'm going to go ahead and select export, and in the sub menu there, I'm going to select After Effects. XD is going to export that content. So the assets, the interaction associated with it, and bring it over into After Effects. I can see here, my various details. I've got an asset sub folder that has lots of the content or the specific pieces in here. Notice here towards the timeline down below, I have all of the parts that were used for that auto animate micro interaction
>
> **[1:35](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/exporting-to-after-effects?u=76281980&t=95)** as pieces that I can now in After Effects start to take forward as I develop out the finished product. In addition to being able to export those interactions to After Effects, there's also the fact that Lottie files can easily be created in After Effects, and then saved back out as [JSON](../../Skills/Web%20Development/JSON.md). So the partnership between XD and After Effects, in my opinion, is going to continue to get stronger over the next period of time because the two tools do work quite well together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** json (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)


### 4. Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Where to go to from here](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/where-to-go-to-from-here?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/adobe-xd-essential-training-prototype/where-to-go-to-from-here?u=76281980&t=1)** - Well, I hope you enjoyed that as much as I did. There are obviously a wide variety of combinations where you can take triggers and interactions to create immersive experiences. And hopefully this has given you some ideas for how to apply these capabilities to your own projects. Come join me now for part three in the three-part series where we take this interactive prototype and present it in a variety of ways, get feedback from stakeholders and end users, and then hand off the design to the development process. Again, my name is Dani Beaumont, and I hope to see you there.

> [!info]- Semantic Content
>
> **Speakers:** - well (1)


## Instructor

- [Dani Beaumont](../../Instructors/Web%20Development/Dani%20Beaumont.md)

## Resources

- Exercise files available

## Skills Covered

- Adobe XD
- User Interface Prototyping

## Path Context

### In [Improve Your UX Prototyping Skills](../../Paths/Web%20Development/Learning%20Paths/Improve%20Your%20UX%20Prototyping%20Skills.md)
← [UX Deep Dive- Usability Testing](UX%20Deep%20Dive-%20Usability%20Testing.md) | **2 of 6** | [Lo-Fi to Hi-Fi- Prototyping in Figma](Lo-Fi%20to%20Hi-Fi-%20Prototyping%20in%20Figma.md) →

## Appears In

- [Improve Your UX Prototyping Skills](../../Paths/Web%20Development/Learning%20Paths/Improve%20Your%20UX%20Prototyping%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Principle for UX Design](Principle%20for%20UX%20Design.md) — User Interface Prototyping
- [Lo-Fi to Hi-Fi- Prototyping in Figma](Lo-Fi%20to%20Hi-Fi-%20Prototyping%20in%20Figma.md) — User Interface Prototyping

---

[↑ Back to top](#)