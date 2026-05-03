---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: protopie-for-ux-design
url: "https://www.linkedin.com/learning/protopie-for-ux-design"
duration_minutes: 66
duration: 1h 6m
level: Intermediate
updated: 10/14/2021
learners: 101046
skills:
  - User Experience Design (UED)
  - ProtoPie
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEqLK7R7bdWHg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1634060303945?e=2147483647&amp;v=beta&amp;t=VMi_D0BVPl_HVc9Zol5g6z_DG4AkF956zQbQJ9StPlI"
linkedin_topic: Web Development
learning_paths:
  - '[[Improve Your UX Prototyping Skills]]'
prev_courses:
  - '[[Lo-Fi to Hi-Fi- Prototyping in Figma]]'
next_courses:
  - '[[Sketching For Ux Designers]]'
path_nav: '[{"path":"Improve Your UX Prototyping Skills","position":4,"total":6,"prev":"Lo-Fi to Hi-Fi- Prototyping in Figma","next":"Sketching For Ux Designers"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/user-experience-design-ued
  - skill/protopie
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/ProtoPie%20for%20UX%20Design.md)

![ProtoPie for UX Design](https://media.licdn.com/dms/image/v2/C560DAQEqLK7R7bdWHg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1634060303945?e=2147483647&amp;v=beta&amp;t=VMi_D0BVPl_HVc9Zol5g6z_DG4AkF956zQbQJ9StPlI)

# ProtoPie for UX Design

> ProtoPie is a code-free prototyping tool that helps you build highly-interactive prototypes for mobile apps easily and quickly, so you can share your designs with clients and colleagues on any device. In this course, Ronnie McBride starts with the basics of ProtoPie, from installation to an overview of the prototyping interface to the core concept that drives the interactive methodology of ProtoPi

> [LinkedIn Learning](https://www.linkedin.com/learning/protopie-for-ux-design) | 1h 6m | Intermediate | 101K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [What to expect from this course](#what-to-expect-from-this-course)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Exploring the Interface**](#1-exploring-the-interface) (3 videos)
  - [Reviewing the Jumpstart screen](#reviewing-the-jumpstart-screen)
  - [Interface overview](#interface-overview)
  - [Process and core concept of ProtoPie](#process-and-core-concept-of-protopie)
- [**2. Interaction Basics**](#2-interaction-basics) (5 videos)
  - [Importing assets](#importing-assets)
  - [Containers, scrolling, paging](#containers-scrolling-paging)
  - [Scenes](#scenes)
  - [Creating triggers and responses](#creating-triggers-and-responses)
  - [Timeline and animation curves explained](#timeline-and-animation-curves-explained)
- [**3. Formulas**](#3-formulas) (1 videos)
  - [Formula and variables basic overview](#formula-and-variables-basic-overview)
- [**4. Components**](#4-components) (1 videos)
  - [Component basics](#component-basics)
- [**5. Exporting and Sharing**](#5-exporting-and-sharing) (3 videos)
  - [ProtoPie Player](#protopie-player)
  - [ProtoPie Cloud](#protopie-cloud)
  - [Recording](#recording)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [What to expect from this course](https://www.linkedin.com/learning/protopie-for-ux-design/what-to-expect-from-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protopie-for-ux-design/what-to-expect-from-this-course?u=76281980&t=0)** - [Ronnie] Hello, my name is Ronnie McBride and I'll be your instructor for this [[ProtoPie]] essential course. I'll begin this course with an overview of the ProtoPie interface, then we'll go through the core concepts and processes for [[Prototyping]]. Next, I'll demonstrate various methods for importing assets. I'll cover interactions like paging and scrolling. And we'll talk about organizing your layers, creating components and defining variables and formulas. There is much to cover, but after completing this course, I hope you feel confident and proficient at navigating and applying what you learned here in your own personal work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ProtoPie]] (2), [[Prototyping]] (1)
> **Speakers:** - [ronnie] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/protopie-for-ux-design/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protopie-for-ux-design/using-the-exercise-files?u=76281980&t=0)** - [Narrator] I've provided exercise files to use with this course. If you open up the folder, you'll find chapters that correspond with the chapters that are in the course. If you click on one of those folders, you'll find the files that I'm using. If you click on one of those files, you can follow along. But if you don't have access to those files, you can just watch the video and apply what you've learned to your own files.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **UI Navigation:** click on (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [narrator] (1)


### 1. Exploring the Interface

[↑ Back to Table of Contents](#table-of-contents)

#### [Reviewing the Jumpstart screen](https://www.linkedin.com/learning/protopie-for-ux-design/reviewing-the-jumpstart-screen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protopie-for-ux-design/reviewing-the-jumpstart-screen?u=76281980&t=0)** - [Instructor] Okay, so by now you should have [[ProtoPie]] installed, and if you don't have ProtoPie installed head on over to [protopie.io](https://protopie.io) and there you'll click on Try for Free. And when you click the Try for Free button, they'll take you to another page where you'll enter a little bit of information, just your name and your email address, and that's so you can start the cloud account that you need to create for ProtoPie as well as start your 30 day free trial. Once you've added that information in, it'll take you to this page here. On this page, you'll see that there are three different versions. There is one that supports the macOS Intel, and then there's a version that supports the macOS Apple Silicon, so if you have an older Mac or a newer Mac you're supported, so there's no worries there. [[Windows]] users will use the Windows 64-bit, and you'll just download that and install. Now the other thing I'd like for you to download, if you're going to create any application that's going to be on a mobile device, whether it's a tablet or a phone, you want to make sure that you download the ProtoPie Player. Now the ProtoPie Player is used when you're testing your application on your phone, itself, whether it's plugged in or over your network, or by using the QR code that's set up within ProtoPie for you to be able to access your application, so make sure you go ahead and download that. Once you've downloaded those things, then you're ready to start ProtoPie. So I'm going to go ahead and I'm going to take a look at ProtoPie. When you start ProtoPie, you'll be presented with what is called the Jumpstart screen. In this screen, you'll see that there are a couple of basic examples that, kind of, walk you through some of the basic
>
> **[1:34](https://www.linkedin.com/learning/protopie-for-ux-design/reviewing-the-jumpstart-screen?u=76281980&t=94)** and fundamental tools that are used in creating an application within ProtoPie. So you could start any one of those and just be able to, kind of, peruse and look at how it's laid out. At the bottom, you'll see that there are other supporting materials, like the documentation for the application. There are also tutorials that are created, by ProtoPie itself, and then there's a great community around it. And if you have any particular problems, you can always go to support, here. Over here, these two little icons, if I click on this you'll see my account information that's set up for me, and yours will be here, too, as well. And if you click on this button, you'll be taken to the Preferences screen, which, as everyone knows, you can reach Preferences by going up here, to the top of your screen, and click Preferences, but it's also handy that it's right here in the Jumpstart screen. Now, if you move on over here, you'll be presented with the preset area. The preset area is where you will select the preset for the mobile device that you may be using, or it could be for desktop, or it could be HD, and you also have an option for portrait and landscape. And, down here, you can also create a custom preset as well, too, so if you're a designer or UI designer that works for, maybe, a car company, you may be working with a specific size screen and so that you can create a custom preset and that'll be added to your list. Also, down here, you have a System Status Bar for supporting people who need to see
>
> **[3:08](https://www.linkedin.com/learning/protopie-for-ux-design/reviewing-the-jumpstart-screen?u=76281980&t=188)** system status information for the iOS or the [[Android]] device, so you can select that here. We're going to keep it, by default, on None, and then you also have an option, over here, where you can change the background color that's on the canvas itself. So some people like a lite canvas color, some people like a dark canvas cover, so it's really up to you which one you prefer. Over here, in Networks, what you'll notice is, oop, I got a little error here, it says enter numerical value because I have custom created and it's looking for something, but we're going with preset. If we go up here and we click Network, you'll see that there is a setting for proxy. So if you're working on a network that has a proxy setting you'll definitely want to put that information here, so that you could share your ProtoPie app across the network without issue or allow people to access it. So that proxy information is here. And, then, here, this is just a little area for you to be able to say yes, that you would like to participate in supporting ProtoPie as far as allowing them to see, you know, the data and the issues that may be created so they can make the experience of this application better. You could either opt in by clicking Yes or you could not click it at all, and you don't have to worry about any information being sent to ProtoPie. Okay, and one last thing, this area is dark because we haven't created an application yet, but once you start creating files your ProtoPie file will be listed in the splash screen right here, so you can go to whatever file you've worked on in the past
>
> **[4:43](https://www.linkedin.com/learning/protopie-for-ux-design/reviewing-the-jumpstart-screen?u=76281980&t=283)** and find it right here in this list, at least the most recent ones. Also, when you start at ProtoPie, it always starts up with the previous application that you created, or demo, or whatever you're working on. Also, you could create a new Pie just by clicking on New Pie, here, and start from scratch. And when you create a new Pie, it'll use those preset values unless you say otherwise. And you could also change that in the application. So that's everything you need to know about the Jumpstart screen, and we're going to go ahead and start a new Pie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ProtoPie]] (17), [[Windows]] (2), [[Android]] (1)
> **UI Navigation:** click on (3), go to (2), select the (1)
> **CLI Commands:** make (3), find (1)
> **Code Identifiers:** macos (2), ios (1)
> **Prerequisites:** set up (2), install (1)
> **Definitions:** is called (1), is a  (1)
> **URLs:** [protopie.io](https://protopie.io) (1)
> **Documentation:** the documentation (1)

#### [Interface overview](https://www.linkedin.com/learning/protopie-for-ux-design/interface-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protopie-for-ux-design/interface-overview?u=76281980&t=0)** - [Instructor] In this video, I'd like to walk you through the [[ProtoPie]] interface. If you've worked in other design applications, you'll find that the commonalities between ProtoPie's interface and those other applications should feel familiar. What I wanted to do, was make sure that designers that were designing within this application could easily pick it up and so they've made sure that the environment they were working in had those kind of similarities that would make them feel comfortable. So if you look over here on the left-hand side, we'll start at the top of the toolbar of the interface. And if you click Import, you'll see that you can import [[Figma (Software)|Figma]] files, Adobe, XD files, and sketch files. These three programs all have plugins that allow you to import from those applications or from within Figma itself. So those are the most popular ones. If you're using another application, you'll be able to export from that application and import it a different way. That way would be here. If you click on Media, you can import those individual assets right into your application, and then start [[Prototyping]]. The next tool is the Shape tool. There's some basic shapes in here for you to use, ProtoPie is not a design application, it's a prototyping application. And so you would do all your design work in those other applications, but then you would use the tools in ProtoPie to create the interactivity to build out your prototype. If you click on Text, you'll be able to create static text or input text. If you click on Container, you'll be able to import three different types of containers
>
> **[1:34](https://www.linkedin.com/learning/protopie-for-ux-design/interface-overview?u=76281980&t=94)** and containers are little groups that have specific functionalities applied to them and we'll talk about those later. You'll see that you could add a new component here too as well from this area. And we'll talk more about components later. And if you go over here to the left and click on this little icon, it'll take you to the screen manager. And the screen manager is somewhat similar to art boards in another application. So you may be creating a whole experience for your user and have different art boards for different points in that experience. And those would be represented here in the screen manager. You can pin this open as well, too, so it's always open, but when you close it, it's the layer manager. Now you don't see anything because we don't have anything inside here. So I'm going to add a couple of things, I'm going to add a rectangle here, and you'll see that it says rectangle. And I'm going to add an oval here as well too. And what you'll notice is that the rectangle oval here are sitting on different layers and you can interact with them just as you would in other applications, you can click and drag them. You can turn visibility on and off. You could lock them as well, double-clicking on that name, you can change the name of those objects as well too. So that is the basics of layers. And I'm just going to go ahead and delete that. Down here at the bottom is the component manager. And here you'll see that you could add those components here and you could see the components are little reusable, bits of information or interactivity that you could use over and over again. So if you're creating a button,
>
> **[3:06](https://www.linkedin.com/learning/protopie-for-ux-design/interface-overview?u=76281980&t=186)** there's no need for you to create that button and then create the triggers and the responses for that button over and over again. Just make it a component. So components are very similar to symbols and other applications. You can also make team libraries and those libraries could be shared across your whole entire team. So if you're all working on different parts of an application, but you need to use the same assets, you can share them through the team library. And that is actually attached to when you have a team account with ProtoPie. So there are the individual accounts and there is a team account. You can also create your own personal libraries. And then of course they have public libraries as well, too. So things like material design and the iOS UI kit, which is very popular when you're building applications, if you need access to those, you could do it right here through the public library. At the bottom here, you'll see that there is those icons that were in the jump start screen that we talked about in the beginning. You had to manage my account and I'm not going to open that, but also here there's the preference panel. So if you click on that, those preferences that we modified, you could access that here as well too. I'm going to go ahead and cancel that. Now, moving over to the center part of the screen here, this is our canvas area so that should be very familiar to you. You'll see that there's these two arrows also at the top of the screen. If you click on the Scene manager and you add a bunch of scenes, to be able to move between those scenes, all you have to do is click on the arrows.
>
> **[4:41](https://www.linkedin.com/learning/protopie-for-ux-design/interface-overview?u=76281980&t=281)** So you'll see right here is changing from scene one, scene two, scene three. And if you need to delete any of those, just select it and delete it. Moving across here at the top, if you click on this, you'll see that it says iPhone 11. This is actually where you have all those presets we talked about at the beginning. Those would be listed here. So you could actually change it from within the application and of course you can create your own custom preset as well. This area over here is where you add all your triggers and your responses. So just by clicking on that, you'll see that there is a whole barrage of different types of triggers. We have some conditional statements, some mouse triggers as well, too. If you're a focused on desktop and not just working on a mobile app, we have key triggers as well, inputs. We even have sensors, some really cool stuff here. As you get more advanced, you can use voice commands, you can do sounds. You could use the gyroscope in your phone as well too, or copies. So there's a lot of different types of triggers that you could access here. Over here on the right hand side, you see where it says Scene 1. Well, you could see that this is the, your properties area. So if I go ahead here and I add a rectangle, you'll notice that that rectangle here is listed and this where you would manipulate all your properties. So you have position, size, rotation, the origin of that. So if you're trying to scale something up from one of these points, you could change the origin here, you have constraints, opacity, the radius, the fill. There's a lot of properties here that you could use
>
> **[6:15](https://www.linkedin.com/learning/protopie-for-ux-design/interface-overview?u=76281980&t=375)** to change how something looks or appears based on a trigger or a response, or just how it starts off. At the top, you have your basic alignment tools, you should be very familiar to most designers. And then if we look over here all the way at the top, we have what is the preview window. And the preview window is to be able to preview your application as it actually functions in this little preview window when you click on it. So anything that unchanging in this application will actually change in a preview window. Now, this is great. If I was working out a little bit more screen real estate, I would be able to put this preview window in another screen and you could see live me moving things around. So you could actually test at the same time. And then within that window, you can actually record your interactions. So you could actually share that and send that to your team or to a stakeholder for review. Over here, if you click on device, this gives you a little QR code. And if you download the ProtoPie player on whichever device that you're using, whether it's a [[Android]] device, or if it's an iOS device, you'll be able to preview your prototype within your device, which is really cool. Over here, you could actually run on the device your application. So again, if you click on this and your device is actually plugged directly into your laptop or your desktop, you'll actually run it on your phone. Over here is your cloud area, your cloud manager area,
>
> **[7:49](https://www.linkedin.com/learning/protopie-for-ux-design/interface-overview?u=76281980&t=469)** as you can see it has given me a little alert saying, I have not saved this pi, but once I've saved this pi, I would be able to upload it into the cloud. And the cloud is the area where you'd end up sending your pi so that you could share it to somebody who doesn't have ProtoPie, who doesn't have a player, or anything like that. And they could review it and they can put comments, all those kind of basic functionalities as you would need with your team to communicate what's working and what's not working and what's the experience feels like, and we'll get into that in more detail later. And here you would click on this to upload this particular prototype that you created up to the cloud. It'll open up a browser and then you'll be able to manage that and share that link with your team or your stakeholders. So that's generally the entire layout of the interface. And I just wanted to give you a kind of a rundown, so you can really feel comfortable where things are. And as you can see, it's should feel pretty familiar. So in the next videos, we'll get a little bit deeper into using the application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ProtoPie]] (7), [[Figma (Software)|Figma]] (2), [[Prototyping]] (2), [[Android]] (1)
> **UI Navigation:** click on (12)
> **CLI Commands:** make (4), find (1)
> **Code Identifiers:** ios (2), iphone (1)
> **Cross-References:** we talked about (2), in the next (1)
> **Tools:** figma (2)
> **Definitions:** is a  (2)
> **Analogies:** similar to (2)

#### [Process and core concept of ProtoPie](https://www.linkedin.com/learning/protopie-for-ux-design/process-and-core-concept-of-protopie?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protopie-for-ux-design/process-and-core-concept-of-protopie?u=76281980&t=0)** - [Narrator] I'd like to talk a little bit about the process and where [[ProtoPie]] fits within that process. First, you need to create your design in a tool like [[Figma (Software)|Figma]], Sketch, or XD or any other design tool. You're going to export those assets into ProtoPie so you can do all your interactivity there and create your prototype. You're going to test that prototype using the preview tool inside of ProtoPie, or you're going to preview it on your device. And then, you're going to upload it to the Cloud, where you'll share a link to your co-workers, to your team, to stakeholders, whoever you need to look at your UI design. Maybe they are people that are going to leave some sort of comments. And all that happens on the Cloud. Now, the other thing I'd like to talk about is the conceptual model for the way that ProtoPie works. And ProtoPie is based on this idea of you prototype the way you speak. So you have objects, triggers and responses. And the way that ProtoPie works is it's set up for designers to actually create these interactive type prototypes in a way that they would describe it to somebody else. So I may say to you, you know, when you tap this rocket, it takes off. Okay, so the rocket is the object. The trigger is tap. And taking off is the response. So it's going to move to another location. So when I tap on the rocket, it takes off. So it moves, that's the response. Now, you'll see here I have a little hidden button here.
>
> **[1:35](https://www.linkedin.com/learning/protopie-for-ux-design/process-and-core-concept-of-protopie?u=76281980&t=95)** And I want to click on that. And it brings the rocket back, okay. And the way that this works is it's not like having an animation timeline where you have just your beginning keyframe and your end keyframe. And then once it executes that, it's done and then maybe you'll loop it back or you tell it to go back to the beginning, something like that. It doesn't work that way. The way that it works is that no matter when you click a trigger, and it could be multiple triggers. I could have a tap. I could have a swipe. And they all could have different types of responses. It's always constantly listening to what's happening on-screen. So for instance, if I click on this rocket and it's taking off and then I go ahead and I click again, notice it didn't even finish its animation because it was hit with another tap trigger that told it to come back, okay. So that's kind of the conceptual model that you'll work within when you're creating these applications because they want to make it very simple for you to be able to interact with the UI in a way that makes sense to you. And the best way to make sense to someone is, well, prototype the way that you speak.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ProtoPie]] (6), [[Figma (Software)|Figma]] (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Cross-References:** go back to (1)
> **Tools:** figma (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)


### 2. Interaction Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Importing assets](https://www.linkedin.com/learning/protopie-for-ux-design/importing-assets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protopie-for-ux-design/importing-assets?u=76281980&t=0)** - [Instructor] In this video, I'd like to talk about importing assets. If you own [[Figma (Software)|Figma]], Sketch, or [[Adobe XD]], you'd be happy to know that these three industry standard applications have the plugin support for [[ProtoPie]]. So all you need to do is head on over to your plugin manager or your plugin exchange found in your tool of choice, and search for the ProtoPie plugin. And go ahead and install that. I've already installed it, I'm using Adobe XD. XD is free to download and use. The other applications do not have a free version of it, but I do encourage you to try their trials and see which one works best for you. Now I'm going to go ahead and go over to XD. Now I have this file. This file is included in your exercise file folder under Chapter 02. And what I have set up here is I have a, just a little application interface here, looks kind of similar to something kind of social media-like. This is just a wire frame, because I just want you guys to kind of focus on, not so much the design, but to focus on what we're going to be doing with the prototype. And how we're going to import this. So if you look at this file, you'll see that it's structured with the menu group at the top, the bottom menu as well, just below that. The send icon, you can actually put that with the card group. And we'll just close that, just to clean things up. And we have it set up this way, because what I want to do is I want to import this into ProtoPie,
>
> **[1:33](https://www.linkedin.com/learning/protopie-for-ux-design/importing-assets?u=76281980&t=93)** and then I want to be able to add scroll functionality. And I would like for all these assets here in the center part to be able to scroll below the menu bars. Okay. So what you need to do is if you go down here to this little icon, this is your plugin component. And I've already installed ProtoPie in here. So if you have any other plugins, then they would be listed under plugins here as well, too. So if you click here, I have some icons here as a plugin. But I want to focus on ProtoPie. So what you need to do is click on your artboard, and you'll notice that ProtoPie will just show a little image, a little thumbnail of your artboard. And if you hit export, just that quick, ProtoPie has exported all the assets. And if we just take a look at our layers here, you'll see that all my groupings are exactly the same how I have everything set up. And if I had made any changes, let's just say in the design, I would like to change the color of maybe this little image here. I would just go back into Adobe, and I would make that change here. So all your design changes happen inside your application, your design application. In ProtoPie, you want to just focus on your [[Prototyping]] there. So I'm going to go ahead and I'm going to select my artboard again, hit export.
>
> **[3:09](https://www.linkedin.com/learning/protopie-for-ux-design/importing-assets?u=76281980&t=189)** And you notice it automatically updated. So even if I moved anything around in here, I added something to the design as well. It will automatically update upon exporting from XD, back into ProtoPie. Okay? So I'm going to just go back here, Command-Z to get rid of that. And that is it. That's everything you need to know about importing. Now, if you don't have any of these applications, you're going to import a little bit differently. You're going to export all your assets from your tool. Let's just say you were using Photoshop, or Adobe InDesign, or something like that. And you would export each one of your assets from those tools, and import them separately by going to media. And these are the types of files that you could actually import. So when you do it one by one, then you'd have to actually reconstruct each one of these folders. And every time that you exported an update, you would have to go back and replace that update as well, too. So it's a little bit more work if you're using another tool that doesn't have plugin support. And hopefully in the future, ProtoPie will create more plugin support for other applications. Okay. And so this is still purple if you notice here, and I just want to change that back. So again, back in XD again, I hit export, and it's updated. And that's everything you need to know about importing your design assets into ProtoPie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ProtoPie]] (11), [[Adobe XD]] (2), [[Figma (Software)|Figma]] (1), [[Prototyping]] (1)
> **Prerequisites:** set up (3), install (1)
> **CLI Commands:** make (1)
> **Tools:** figma (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Containers, scrolling, paging](https://www.linkedin.com/learning/protopie-for-ux-design/containers-scrolling-paging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protopie-for-ux-design/containers-scrolling-paging?u=76281980&t=0)** - [Instructor] I'd like to take a moment and talk about containers. Up until now, we've been using containers as a method of grouping a bunch of elements into a group. Now, anything that you create in the group in your other design applications will come in as a container. So groups are containers, and containers are groups. Now, let's take a look at the file that we have set up here. I have the top menu, the bottom menu, and a vertical scroll area. If you can tell, these little icons represent containers. Now, at the top of the screen here, you have three different types of containers. You have the basic container. You have a scroll container, and a paging container. Now, I could also at any time, by going into the Properties area over here on the righthand side, I could change the type of container functionality. So if I click over here and make this Scroll, that container is now a scrollable container. But you may not have a bunch of elements already created to scroll within that container. So anything that you want to scroll has to be within this area, and under this group. So I have the cards that we had in that group, within this container, called the vertical scroll container. And I'm going to go ahead and I'm going to turn these on, just so you could see that I've made a few duplicates of that center vertical scroll area exactly the same. Now, it may be a little bit hard to see, because you can't really tell the top menu and the bottom menu.
>
> **[1:33](https://www.linkedin.com/learning/protopie-for-ux-design/containers-scrolling-paging?u=76281980&t=93)** Okay, so I need to change the color of that. If you go to the top menu, and you try to change the background, you'll see that it's actually been imported as an image, so I can't really change it here. And you don't want to. You want to change it and manage your design in your design application. So if I hit Command Tab here and go over to XD, I'm going to go ahead and change these colors here. So for the bottom one, I'm going to change the fill and I'm going to make it this pink color here. And for the top menu item, I'm going to go ahead into this layer and change this background to the same pink, so you can actually see it. Then I'm going to go back and select my art board. I hit Export. And now you can see that it's made an update to those menu items there. So remember, you want to do all your managing of your design within your design application. Now that I have that in place, you can see that it always defaults back to the scene, just so that, you know, you're always looking at the scenes that you have. Right now we only have one scene, so we're not really going to be concerned. But if you ever see this, this, remember, is the toggle for layers and scenes. So just turn that off. Now, if we just go ahead and close this, you'll see how everything is oriented. We have the top and bottom menu. They're above the scrollable area. Okay, so now, what I'm going to do is, if this is not set up in your file,
>
> **[3:07](https://www.linkedin.com/learning/protopie-for-ux-design/containers-scrolling-paging?u=76281980&t=187)** you'll just go over to your Properties, change it to Scroll. Remember, it might be at default as None, because that's a basic group. But we're going to make this a scrolling area. Now, that's all you need to do to make this scrollable. You just need to have this selected as Scroll, and you need to have multiple items within that scroll area to actually scroll. So let's just take a look over here at the Preview. You click on Preview. You'll see, when I tap and drag, I have that scrolling functionality here. So in [[ProtoPie]], it's super easy to create a scrolling area, so if you have a design and it's a very long page, just make it a group and make the elements that fit inside that group as long as you'd like, and you can easily scroll up and down in the demo. Okay? So now, let's close that. Let's take a look at paging. Paging has a little bit of a different functionality. So paging basically is like what you would see when you're scrolling through a bunch of images, and it kind of snaps to the next image. So I've set up this file here, if you take a look. We're going to just go into the vertical area, and you'll notice that you can actually nest these types of functionalities within each other. So we have the vertical scroll. And in that scroll, you'll see, as I'm clicking, the four card groups. The first one is the only one
>
> **[4:41](https://www.linkedin.com/learning/protopie-for-ux-design/containers-scrolling-paging?u=76281980&t=281)** that I'm going to worry about right now. I've created this little indicator here to show that, "Hey, there's more images." And so if you open that up, and we scroll on down to image paging, I'm going to turn that on. And oh, open that up. And I'm going to turn on the elements that are there, too. So we have this one. We have this one. Make sure we turn that on. And you'll see that I have these three elements here. Now, if you look here, this icon looks just like this paging container icon here. So I could have created that box just by clicking Container, Paging Container, and then draw that box out, and then everything within that group that's nested inside of it, as you can see, that's nested inside of it, as I scroll over, is now an element that can be paged. If you did not do it that way, and you just created a basic container, remember, you can go over to Properties and just change that to Paging, okay? So this vertical scroll area in Card 1, if you scroll on down, has a paging element. And you see that is highlighted, because it's paging. Now, what does that mean? Because if you click Preview, I can scroll up and down. And I can scroll to the left. Now, I've added another piece of functionality,
>
> **[6:17](https://www.linkedin.com/learning/protopie-for-ux-design/containers-scrolling-paging?u=76281980&t=377)** which is this little indicator, and that's going to have a little bit more specific advanced features called conditions. So basically, what I have set up here, and I'll just take a brief look at it real quick, and we'll go into more detail later. If you take a look, I have a couple conditions here at the start that sets the opacity for all of these elements at 100%, and then as you scroll through these elements, this little Detect, and if I could just open this up, this little Detect trigger uses this condition that says, "Hey, once you reach this certain position in the x-axis, "that the opacity of this element here is 100% "and the other elements are 10%." When it hits a certain condition here, these elements here are set to a different setting. So the second element is 100%, and 1 and 3 are at 10%. And then the same thing, another condition here. So I'll go in more detail later on that, but I just wanted to kind of show you that, and we just want to show that functionality one more time by hitting Preview. And all you need to do is swipe. And swipe back. So that's exactly how you use containers and scrolling and paging in ProtoPie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ProtoPie]] (2)
> **CLI Commands:** make (7)
> **UI Navigation:** scroll up (2), go to (1), toggle (1), click on (1)
> **Prerequisites:** set up (4), you need to have (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Scenes](https://www.linkedin.com/learning/protopie-for-ux-design/scenes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protopie-for-ux-design/scenes?u=76281980&t=0)** - [Instructor] So up until now, we only worked on importing one art board at a time to create our interactions in [[ProtoPie]]. In this video, I'd like to focus on importing multiple art boards and turning those art boards into scenes in the ProtoPie so you could add your micro interactions and interactivity. Now we always start with our design in our design apple choice, whether it's sketch, XD or [[Figma (Software)|Figma]] or some other design tool, but we're going to use those three particular tools because they have the plugin for ProtoPie. So I'm going to head on over to my XD file, show you what I have going on. So I have a very simple wire frame, just so that we're not focused on design, we're focused on the interactivity and what we're trying to bring across here. I'll keep it very simple for you. Now, if we look at the screen here, we have a homepage, we have a cart view, we have a product details page, and we would want all of these pages to interact with each other. So we need to get them all over into ProtoPie. So to do that, we go down here to our plugin setting and we could run ProtoPie here and I'm going to click, hold down the Shift key and multi-select these art boards. And as you see, as I'm adding them, they're all showing up here and it's showing up as Export S3 scenes to ProtoPie. So art boards are scenes and scenes are art boards. So if you're trying to make that relationship, that's exactly what we're looking at. Now that I have those selected, I'm going to go ahead and I'm going to hit Export. It's going to take a few seconds here,
>
> **[1:33](https://www.linkedin.com/learning/protopie-for-ux-design/scenes?u=76281980&t=93)** it says recording three scenes from [[Adobe XD]], and there you go. It opens up the scene manager and you see the homepage, cart view and product details page, and you can move those around, however you'd like. So if you want to change the order of that, just for your own visual reference, you could just click and drag those items. And I'm going to leave that like that. And over here on the right hand side, you could also navigate through these art boards just by hitting the arrow key. So if you don't want to go through the manager, and you're just working with a few screens, like I am here, it may be quicker for you to just click on that. So now that we have those in, we want to kind of interconnect them so that you get a full idea of the experience that you're going for for the user. So I'm going to start with the homepage here. So let me go over here to my scenes, I'm going to click on Homepage, double click, and it's going to open up that art board or that scene. And over here in this hero area, I have just like a little bit of a product detail, maybe it's a sale or something like that that represents maybe the image for that particular product. And then there's this button that says, check it out. So we will add a little interactivity to the button itself. So I'm going to double click on that and you'll see that I have this as a group already. And I going to go ahead and just make sure that I named this. So I know what I'm looking for later, and I'm going to say, check it out. And I'm going to say btn for button.
>
> **[3:07](https://www.linkedin.com/learning/protopie-for-ux-design/scenes?u=76281980&t=187)** So I know that that's a button. Now, what I'd like to do is I'd like to make this button go over to the details page, the product page, where we have all the details on the product and the pricing, and that's the interactivity that I want to happen here. So I'm going to click on that, and I'm going to head on over here, I'm going to add a trigger and that trigger is going to be Tap. So when you tap this, I want this to happen. And what I'd like this to be would be to Jump. Now, jump allows you to make a selection here in the properties and you need to select the scenes. So you want to jump to scene. And the scene I would like to jump to is the product details. Now, I'm going to go ahead and test that. You click on it, it goes to product details. Now, if for some reason you have this file grouped in a certain way, and that functionality didn't work, if you go over here and you select the button, the checkout button, and you scroll on down, it may be in a group. And that group, sometimes you're hindered from being able to actually interact with that part, so what you need to do is click on this little check area here and says, make lower layers touchable. That's just if you run into that, I didn't run into that issue, but I'm going to leave it on. It's not a big deal, it's actually a better fit for me if I have any other inner activity
>
> **[4:40](https://www.linkedin.com/learning/protopie-for-ux-design/scenes?u=76281980&t=280)** that's happening within that group that may be within that button or something if it was a specialized button. Now, I'm just going to back out of this, so you guys could see a little bit better. So now I have this in the preview going to the product details page. And now I would like to add it to the cart. Now to add that functionality, I'm going to head on over to the [[Microsoft Products|products]] detail page. I'm going to double click on that, now that is open and I'm going to double click on, Add to cart button, and we're going to add our trigger and we're going to say Tap. And when I tap it, I would like for it to jump and jump to where, the cart view. And so now that should be set. I'm going to hit, Add to cart, it heads on over to the cart view. So that's how you can interconnect different scenes together to create a whole experience. So you can have a lot of different micro interactions on each one of these scenes. Maybe every time I click in this area, there is an up and down arrow to add a quantity or to delete, or maybe I have a trash can over here to delete whole item out of here and move everything up. You can really create the full experience on each one of these individual screens and give the appearance that they're all interconnected creating a whole entire prototype that really displays the experience the user would go through.
>
> **[6:14](https://www.linkedin.com/learning/protopie-for-ux-design/scenes?u=76281980&t=374)** So that's how you would create scenes and navigate scenes in ProtoPie. And I just wanted to show you how to do that quickly and easily by just importing and starting to link those scenes together through the interactivity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ProtoPie]] (7), [[Figma (Software)|Figma]] (1), [[Adobe XD]] (1), [[Microsoft Products|Products]] (1)
> **UI Navigation:** click on (8), select the (2)
> **CLI Commands:** make (5)
> **Tools:** figma (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Creating triggers and responses](https://www.linkedin.com/learning/protopie-for-ux-design/creating-triggers-and-responses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protopie-for-ux-design/creating-triggers-and-responses?u=76281980&t=0)** - [Instructor] In an earlier video, we covered the core concepts of adding triggers and responses to your prototype project. And in this video, I want to walk you through how you would go about applying triggers and responses in prototype to create more intricate interaction. So we have a different setup here, we have just a simple little application and we have these menus down here. And what we're trying to recreate would be this little interaction. So anytime you select one of these menu items, they become bold, you also have a little change of the icon to represent what section you're in here just by clicking through. Now, I haven't added the interaction to this one if that's the one that we're going to add to this prototype. So first, let's take a look at the setup of this file. Now, if you'd like to follow along, you could find these files in the chapter folder that came with this course. Now, if you look, we've already imported this in and we have these little containers set up with little groupings. And as you see, when I click on them, the interactions on the side here open up, okay? So let's just look at some of the things that are in here. We have this little thing called the slider, which is this item here, we have the ellipse that's behind this home button here, we have the menu background itself, and then we have the background. So if I turn off the background, the menu background, you'll see that it's basically all these icons
>
> **[1:36](https://www.linkedin.com/learning/protopie-for-ux-design/creating-triggers-and-responses?u=76281980&t=96)** are sitting in a little circle. And what I'm doing is when the slider, and I'm going to turn this back on. When this little slider comes across, it moves into position and then the circle is at a certain scale size, I have it scaled down. So it gives this illusion of being focused in that area. You could see it as it scales just a little bit there, okay? So, now let's take a look over here on the right-hand side and see what we have set up. And I'm just going to close these down just so you could see everything. So get in the habit of naming your layers. And then on the right-hand side, make sure that you try to keep your interactions as organized as possible, because trust me, as you work on more complex projects, you end up having a lot of different interaction layers, and it can get very confusing. So, what I have here is a group, and within that group, I have a few triggers. And here in this other group, which is called screen element, I have a few other triggers. These triggers here that are called screen elements are the triggers that affect this area of the application. And this group here at the top are focused on the interactions that are happening down here in the menu. So I just called those buttons. Now, if you look inside one of these triggers, for instance, the tap trigger, so anytime a user taps on this little area here,
>
> **[3:11](https://www.linkedin.com/learning/protopie-for-ux-design/creating-triggers-and-responses?u=76281980&t=191)** whether it's their finger, or if it's a fuller size application, maybe on a tablet, then these instructions would happen. So basically, we would have the move slider move into position, we scaled down that circle, we changed the opacity to 100%. Then we would scale up all the other circles just in case they were all scaled down at a previous time, and then we would change the opacity of some of those other objects. So, let's go ahead and create a new tab object for the mail button right here on the end. So first thing that we're going to do is, when you're over here in this section here, you can click add trigger, then quick tap. And we're going to say, when we tap on this object here, which we're going to focus on the mail button, We want a few things to happen. So we want the slider to move, so let's go ahead and click on move as a response, and we're going to go here and select down here a slider, and you can also type in this area slider, and you'll see it'll pop up. So again, that's why it's very important for you to name your layers 'cause you could find things a little bit quicker. Then the slider we wanted to move to, let's say 70 in the X position, and nothing in a Y because Y is up and down, X is left and right. We're going to add another response here,
>
> **[4:44](https://www.linkedin.com/learning/protopie-for-ux-design/creating-triggers-and-responses?u=76281980&t=284)** and we're going to add a scale response. In the scale response, you could see that it's defaulting on this slider here, that's because if I wanted to, I could actually, let's see, I can actually select the object itself. So let's see, we're under mail, here's the icon, mail ellipse, okay? Now you see over here on the screen, it's selected that object. And we're going to scale to 62 pixels because I already know that it's 72 pixels and that actually, it shows you, it gives you a little hint of what's the size of it, currently. We'll set that to 72, 62 rather, okay? And now let's add a opacity call. So, let's say, I'm going to go here, and you can see now, this is getting long and I would have to keep going down here and scrolling to get the trigger. But you'll notice that there is a little plus button here, so you can go ahead and add another response. And this response, we're going to, let's see, I'm going to say the mail icon itself, we're going to change the opacity to 100%, then we're going to add another opacity trigger here, and we're going to select one of the other icon, so let's say the home icon, and we're going to make sure that set to 50%,
>
> **[6:21](https://www.linkedin.com/learning/protopie-for-ux-design/creating-triggers-and-responses?u=76281980&t=381)** at 50%, okay? Now I can go ahead for the other two and keep hitting this plus button, but what I could also do, 'cause I could say, I can click on this interaction, hold down Shift, click the other interaction, then use command C to copy, and then command V the paste. And now it's made a duplicate of these two. So now, all I need to do is select this one, and we're going to look at the camera. So I'm going to type in camera, that makes this easier. So the camera icon, and we're going to set that to 50% because the only thing we want bold is the mail icon, it return on that. And then the last one here, we have the settings. So I'm going to go ahead and I'm going to just double click into settings, and now I have the settings icon selected. And what I can do there is, I'm going to add an opacity setting here, set that to 50%. And that now has set the opacity to 50% for that particular icon. Now, what I'll do is I want to get rid of this one, I just wanted to show you that you could actually select an object and then apply the trigger to that object, so you're saying, this object, apply this trigger and this response, okay? And just for organization, I'm going to leave this here, and we'll see this all over opacity,
>
> **[7:57](https://www.linkedin.com/learning/protopie-for-ux-design/creating-triggers-and-responses?u=76281980&t=477)** and all our settings for scale, and let's go ahead and preview that and see what we have going on here. So if I click chat, that's fine, I click the mail button here and all those are set, but the only thing that didn't change was the chat bubble didn't change color. So let's go ahead and make sure that we have chat selected. So we have the home icon, setting icon, camera icon, double setting icon, okay? So this one, I'm going to click here and I'm going to hit chat, and say chat icon, and you'll see that the preview window automatically refreshed right there. And so now when I hit this, now we have a working interaction between all the icons. When you select them, the slider moves over, it changes opacity, the 100% changes all the other ones to 50%. And that's all you need to do to create a small, simple micro interaction by selecting that object, adding a tap, adding a few responses, and once you've done that, you have created a nice micro-interaction.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (2)
> **UI Navigation:** click on (3), in the menu (1), select the (1)
> **Prerequisites:** setup (2), set up (2)
> **Definitions:** is a  (2), is called (1)
> **Cross-References:** we covered (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Timeline and animation curves explained](https://www.linkedin.com/learning/protopie-for-ux-design/timeline-and-animation-curves-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protopie-for-ux-design/timeline-and-animation-curves-explained?u=76281980&t=0)** - In the previous video, I've demonstrated how to use triggers and responses to create interactions in [[ProtoPie]]. And, in this video, I'd like to spend a little bit more time on this area over here, to talk about the timeline and these bars and how they relate to each other. So, if you look here, I'm looking at this first response here of a move slider and you see that it has a duration of 0.2. Now you can actually... Drag that out and bring it to 0.8 of a second. And, what you'll notice is this will now animate slower. So, I'm going to go ahead and open up the preview. You see, it moves a little bit slower. I'm going to exaggerate that a bit here. The drag that out a little bit more... Now when you click it, it's slower, Okay? So, that's how that works. Now, if we look at the bar itself and you click and you drag it to the right, you are now telling ProtoPie to start it at 0.4 and it still keeps the same duration. So, you can really change the sequence of timing of how these things animate, just by changing the length of the duration or when it actually starts. So what it's saying now is that, all these actions, all these responses will take place 0.2 seconds before this slider actually even moves, which will take 0.2 seconds in duration to actually execute. So it's faster now,
>
> **[1:34](https://www.linkedin.com/learning/protopie-for-ux-design/timeline-and-animation-curves-explained?u=76281980&t=94)** but it's going to start later and you're going to see a bunch of weird things happening down here. So, it's already just gone through and it's changed the opacity of all these things. It's hard to see. So, what I'll do is I'll just kind of pull these out, all kinds of randomly. And you'll notice a little bit better if I stretch this out... Now, when I execute. So all these things happen, but they all happen quickly at different times. We'll see one that really stands out to me right now as whole. So we'll make that go dark later, push it towards the end here and now always hit preview, and play that. See, it took a little bit longer for the home button to change to the 50%. So I'm going to Cmd+Z all this. (hard typing sound) And I want to point out one other thing here. We have the animation easing in and easing out, so it starts slowly and it ends slowly. And you could change that you could ease in, or you could just have it ease out. So it gets starts fast and it's go slowly at the end of the curve. And we could add a little springiness to it, where we have some options for tension and friction. And so, I'll show you what that looks like, see how it has a little bounce to it. And I could increase that tension a bit, and there's a tighter bounce.
>
> **[3:09](https://www.linkedin.com/learning/protopie-for-ux-design/timeline-and-animation-curves-explained?u=76281980&t=189)** So, you could see here, there's some options for, how those things animate and you can do it pretty quickly. And if you ever want to see what the differences and the different types, then all you need to do is, click on this little question mark here. And it'll take you to the ProtoPie page where it'll explain all the different animations. So, I just wanted to take a little time to kind of explain that and get you guys comfortable and understanding like, what exactly is it happening over here and how to actually use it to your benefit when you're creating animations or little micro interactions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ProtoPie]] (3)
> **Versions:** 0.2 (3), 0.8 (1), 0.4 (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - in (1)
> **Non-Speech:** (hard typing sound) (1)


### 3. Formulas

[↑ Back to Table of Contents](#table-of-contents)

#### [Formula and variables basic overview](https://www.linkedin.com/learning/protopie-for-ux-design/formula-and-variables-basic-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protopie-for-ux-design/formula-and-variables-basic-overview?u=76281980&t=0)** - [Educator] Formulas and variables are a bit more of a intermediate to advanced topic, but I just wanted to make sure that you're aware of its potential. When you use formulas and variables in your prototype, you give your design the ability to be more dynamic. And by using formulas and variables, you could access layer properties, you can run calculations, you can manipulate different types of data, and you can do advanced math right inside your prototype. And this is a feature I have not seen in any other application. So, if we take a look at the prototype that we've been developing, over here under the Mail Tap trigger, we have the Move slider, and I had a position of 70 pixels. So, I wanted this slider to move over here. The center point is 70 pixels. Now, there's one way you could find out by just clicking on the mail object over here or the mail group. And you'll see that the position is 70 X. So, I made sure that the middle of the slider, which if we click on slider, the middle of the slider here, the center point, would line up with 70 pixels, and that would put a dead center. Now, there's another way you could find out the X position of an object by using variables and formulas. So, if you click on Variable, and you say for this scene, and we're going to say, we're going to call this Mail underscore center underscore point. And now, we have a variable set up for that. Now, if we go over here to properties, you could see that you could declare a variable as a number or as text, or even as a color.
>
> **[1:35](https://www.linkedin.com/learning/protopie-for-ux-design/formula-and-variables-basic-overview?u=76281980&t=95)** But we're going to leave it as a number because we want a number value. And I'm going to use formulas. Now, when you click in the formula box, if you click on this little FX, you get this other box here. In this box, if you hit the plus sign, you choose an object. And that object that we're trying to find out, the center point is mail. Then, if you hit period on your keyboard, you can actually get all the different properties that you can derive from that particular object. I want the X position, I'm going to say, okay. So, now I have a variable that gives me the X position. Now, I'm going to go back over to the slider, and in the slider, I'm going to get rid of this 70. And I'm going to go ahead and tap Effects, and I'm going to type in M-A, and as you can see, it already completes it here, mail center point. That's exactly what I want. So, now what I've told this slider to do is the, pull the X value of mail center point, which we know that the mail center point X value is 70. So, this should operate just the same way as it did before. And there you go. So, if I were to, let's say, add 50 to that,
>
> **[3:03](https://www.linkedin.com/learning/protopie-for-ux-design/formula-and-variables-basic-overview?u=76281980&t=183)** you see it pushes it over 50. So, you can see with variables and using formulas, you can really make things really dynamic and have more control and find out more information. Let me show you one more thing too. If you go over here to the variable, you see this little bug here. If you're trying to figure out like, what is that value without actually running it, what is the value of X, you click on this little button here and you could drag this little box here. And this doesn't output into the player, you could just turn that off, but this is just for you to be able to debug what you're doing. So, you could actually see that it's 70 here. And if I went ahead and I said, plus 50, now it's 120, right? So, you could see the outcome of that variable with the debugger. And then when you're finished debugging, you just turn that off. Hopefully, you have a basic awareness of the variable in formula feature in [[ProtoPie]]. I encourage you to dig deeper into the topic because the more you know about the advanced features, the more dynamic your prototypes will be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ProtoPie]] (1)
> **CLI Commands:** find (4), make (2)
> **UI Navigation:** click on (4)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [educator] (1)


### 4. Components

[↑ Back to Table of Contents](#table-of-contents)

#### [Component basics](https://www.linkedin.com/learning/protopie-for-ux-design/component-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protopie-for-ux-design/component-basics?u=76281980&t=0)** - Components are grouped objects and interactions that can be saved for reuse across your prototype. This is a common feature that you'll find in most popular design applications, but [[ProtoPie]] does it a little bit different because it allows you to save the graphic along with the interactions. And that is a lot more powerful than just one or the other. So let's take a look at this file that I've set up and let me walk you through how to create your first component. Now there's a few ways that you can create a component. The first way is to select your item and click component right here at the top to create a component, or you could right click to create a component, or you can create a component by clicking on the component manager and clicking add component, and then create your component here. So in this editor, you can create it from scratch, and then you could add it into your design. But we're not going to do that. We're going to go back to our design here and I'm going to just make sure I delete that because we don't need that empty component there. And we're going to go ahead and select it. And I'm going to right click this time. And I'm going to say, create component. Now what you'll notice over here on the right-hand side in the properties, that there is this little icon that says Menu Dark that is now a component, and you can edit that component just by clicking on 'go to main component'. And there you see the component. And then when you're done editing, you can just hit this little button and you're back in your main screen. Now to add a component to a design, all you need to do is click over here
>
> **[1:33](https://www.linkedin.com/learning/protopie-for-ux-design/component-basics?u=76281980&t=93)** on the component manager. And you'll see that my component is here and I can just drag that out. Now, if you're not sure about the power of components, let me just show you another way. If you had imported a scene and let's say you had multiple scenes, let's say you had three or four of them, and you had to have this menu on each one of these scenes and you had to code each one of these menus over and over again. That could be a bit cumbersome. So with components, now I could have a scene. I can go to my second scene here. I could take one component. I could drop one there. I can go to my Scene 4 and I can drop one here. And so now this menu is on each one of those scenes. Now, if I need to make an edit at any time to this component, all I need to do is select the item, go to main component, and inside main components, I can make a change. So let me just make a change to the focus color, and I'll change it to this salmon color here and double click on that. Now that should be updated through all my screens. So if we take a look at the screen manager, you could see that each one of these have an updated color. So I didn't have to go to each one of these different menus and update them. Now, one more thing I'd like to show you with components is, let me go back to the Scene 2. I have a light version as well, too. So I'm going to create a component just by clicking on it,
>
> **[3:09](https://www.linkedin.com/learning/protopie-for-ux-design/component-basics?u=76281980&t=189)** instead of right clicking, I'm going to click the top here. It creates a component. You can see, I can edit that component independently. And now I have two versions that I could use throughout my entire design, just by going to a particular scene and dragging that component in. Now, you'll notice that when you're creating components that your library will get larger and larger and you may even save your library to export and share with your team. So you want it to be a little bit more organized. So if you change the name of the component by just adding a slash mark in front of menu, it'll take everything that has that slash mark menu in front of it. Let's look at the light one here. I'll put a slash. Now you'll see there's a group called menu. So every item that's a menu item, I could create a component group and then that I could save into a library and I could actually export that. So now I've showed you how to create a component. I've showed you how to edit the component and I've showed you how to group a component. And those are the three basic things that you need to know about working with components in ProtoPie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ProtoPie]] (2)
> **UI Navigation:** go to (5), select the (1), click on (1)
> **CLI Commands:** make (4), find (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - components (1)


### 5. Exporting and Sharing

[↑ Back to Table of Contents](#table-of-contents)

#### [ProtoPie Player](https://www.linkedin.com/learning/protopie-for-ux-design/protopie-player?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protopie-for-ux-design/protopie-player?u=76281980&t=0)** - So up until to now, we've been testing our prototypes within [[ProtoPie]] using the preview feature. So if you click on the preview, we've been testing it this way. Now this is great. But if you really want to have a good feeling for how a design is working, you need to test it on the device that you're designing for. And protopie has a solution for that. It's called protopie player. So if we close this and we head on over to the website, you could download the player by going to [prototype.io](https://prototype.io), clicking on, download, scrolling to the middle of the page here and download the player for iOS or iPad, iOS or [[Android]]. And that's what is currently supporting. Now, once you've done that, then what you want to do is go over here to this button where it says device, click on that. Now you'll see there's a IP address here. This is my internal network and a QR code, and we're going to use that QR code to actually send this prototype to my device. So what do you want to do is start up the prototype player and click on, scan QR code and hold it up to the QR code and it will load up. And there you go. Now you could see that I have this prototype working right in my device. Now this is a great solution for you to be able to share this with other people, get them to kind of test whatever prototype that you're making. And it was really hands-on. It really gives you a good idea for the experience. Now at the bottom, if you click on this little bar at the bottom and drag up, you have a few options and those options are exit,
>
> **[1:37](https://www.linkedin.com/learning/protopie-for-ux-design/protopie-player?u=76281980&t=97)** restart and save. You could exit the protopie, you can restart it or, you can save it.
>
> **[1:44](https://www.linkedin.com/learning/protopie-for-ux-design/protopie-player?u=76281980&t=104)** - Now ,if we click save what'll happen is it'll save it to your device, which is great because you don't have to actually be in the proximity of your studio, and you don't have to worry about it being connected to the internet or anything. You can actually take this anywhere. Now, this pie is actually downloaded to your phone and it's now functioning within prototype player as an application, which I think is really nifty. So now if you actually go back now to our studio environment, you'll notice that there's a little button down here that says Delilah connection ready? Well, that is my phone. My phone is called Delilah. And now I could actually just go ahead and either exit that out, or I could just click, play and it'll, restart that pie on my phone again, if you want. So it gives you real control over, you know, how that pie connects to your phone. Okay? So now that's everything you need to know about using prototype player, as far as sending it to your phone and being able to actually work with your prototypes in the next video, we'll talk about the cloud and how we could send your prototype up to the cloud and share it with other stakeholders and have them download it to their phone, or be able to just interact on the website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ProtoPie]] (4), [[Android]] (1)
> **UI Navigation:** click on (4)
> **Code Identifiers:** ios (2), ipad (1)
> **Exercise Files:** download the (2)
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - so (1), - now (1)
> **URLs:** [prototype.io](https://prototype.io) (1)
> **Cross-References:** in the next (1)

#### [ProtoPie Cloud](https://www.linkedin.com/learning/protopie-for-ux-design/protopie-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protopie-for-ux-design/protopie-cloud?u=76281980&t=0)** - So previously I showed you how to test and share your prototype by using the [[ProtoPie]] Player. But there's another way that you can share your Pies with people who are not in the same space as you. That way is to upload it to the Cloud. So ProtoPie has a service called ProtoPie Cloud, which allows you to upload your prototypes to the Cloud and share a link with somebody else so they can actually test your prototype. The way that you would go about doing that is if you go over here to Cloud and you click on this first, it'll show you that the prototype has not been uploaded to the cloud yet. So the first thing that you want to do is click on upload. Now, if you have a Teams account, you'll be able to upload this to different spaces so that you're not sharing all of the prototypes that you've been working on with everybody who just wants to go and test your prototype. So once this comes up, just click on personal space, and you can learn more about Teams down here at the bottom. Now you can copy this link and share it. Now I'm not going to copy it just yet. I just want to show you what this says now. When you click on Cloud, you get that link and you get the QR code to be able to test on your device. Or you can send that to somebody else. Now, remember you have to have the ProtoPie Player to be able to test it. Now, every time that you make an update to this file, any sort of changes, you want to make sure that you click upload so the latest update is uploaded to the Cloud. Now, if I click Cloud and I go down here,
>
> **[1:32](https://www.linkedin.com/learning/protopie-for-ux-design/protopie-cloud?u=76281980&t=92)** there's this other little item called the Cloud manager. I'm going to go ahead and click on that. Now, this takes you to the back side of your account. As a account holder, what you're able to do is organize your Pies and you'll see all your Pies as they're listed, and if you have a Teams account, they'll be in sub categories. And you can also select your Pies and delete them for space. Also, if you look over here in the top right hand corner, and you open that up, you can edit some information about that Pie. So you can give it a title, you can give it some description information, and then save those changes. You can change the access settings, so you can show who can actually view this file, whether it's a person with a link, or if it's only you. You can password protect it, or you can also allow people to download your prototype. So I'm going to go ahead and cancel that, and we're going to take a look at this pie. Now, this is what everyone will see when you send them a link, with only this part missing. They will have access settings, of course. And because I'm logged in, you can see over here, I'm logged in. I have this option. Also, you can click on this thing here. They'll get this as well. They'll have the QR code. So if they have the player on their device, they can actually just hold it up and it'll load onto their player. And then down here, we have a few other settings. Down here, you can restart the pie so it reloads it. You can turn on touch hints.
>
> **[3:04](https://www.linkedin.com/learning/protopie-for-ux-design/protopie-cloud?u=76281980&t=184)** You can go full screen, which is very useful if you want to just get all the other distractions out of the way. I'm going to hit escape on my keyboard and get out of that. You can go to focus mode and focus mode will remove the items to the right and the left and keep you in this screen right here. So now you're just focused on the device itself, and as you click through, it's just working like butter, just as it would on your device or in the studio. And to get out of that, just hit escape. You can change the speed and you can change the cursor type. So if this Pie were a desktop or maybe it was some sort of other screen that you were designing for, you might not want the touch points. You might want an arrow instead. Okay. So that's pretty much everything you need to know about uploading your prototypes to the Cloud and being able to share and copy those links and be able to test and download the prototypes to your phone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ProtoPie]] (4), cursor (1)
> **UI Navigation:** click on (6), go to (1)
> **CLI Commands:** make (2)
> **Speakers:** - so (1)

#### [Recording](https://www.linkedin.com/learning/protopie-for-ux-design/recording?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protopie-for-ux-design/recording?u=76281980&t=0)** - [Instructor] In the previous video, I showed you how to share your prototypes using the cloud. I also showed you how to share your prototypes using the prototype player. There is one more method for sharing, and I'd like to demonstrate that method. That method is the method of being able to share a video. Now, if you go to preview and you click record, start clicking your prototype, (mouse clicking) demonstrating the experience, and then hit stop, and then it'll open up a window and you could save a dot MP4 file anywhere on your hard drive, and then you could email that to a client or to your team and then that way they could actually see how your interaction is supposed to work without actually interacting with the tool. It's also good for sharing in a presentation as well too. Or if you're one of those that like to use a Dribbble account and you want to do a one-shot, well, this is another method for you to be able to make that recording. And if you're someone who likes to use something like Dribbble, and you're trying to make a one-shot that you'd like to share, this would be the other method for you to record an interaction and share. Now that's everything that you need to know about sharing using the player, using the cloud or recording. You should be able to now share your prototypes everywhere you go.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** mp4 (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (mouse clicking) (1)


## Instructor

- [[Ronnie McBride]]

## Resources

- Exercise files available

## Skills Covered

- User Experience Design (UED)
- ProtoPie

## Path Context

### In [[Improve Your UX Prototyping Skills]]
← [[Lo-Fi to Hi-Fi- Prototyping in Figma]] | **4 of 6** | [[Sketching For Ux Designers]] →

## Appears In

- [[Improve Your UX Prototyping Skills]]

## Related Courses

_Courses sharing skills:_

- [[Miro for UX- Brainstorming and Collaboration]] — User Experience Design (UED)
- [[Design Powered by Data- Getting Started with UX Web Analytics (2022)]] — User Experience Design (UED)
- [[UX Deep Dive- Mapping]] — User Experience Design (UED)
- [[UX for AI- Design Practices for AI Developers]] — User Experience Design (UED)
- [[Empathy in UX Design]] — User Experience Design (UED)

---

[↑ Back to top](#)