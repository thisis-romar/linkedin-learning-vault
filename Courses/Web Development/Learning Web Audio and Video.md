---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-web-audio-and-video
url: "https://www.linkedin.com/learning/learning-web-audio-and-video"
duration_minutes: 89
duration: 1h 29m
level: Intermediate
updated: 8/17/2020
learners: 10984
skills:
  - Web Standards
  - Interactive Web Content
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQFqwMRtOdtvLQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1597422032215?e=2147483647&amp;v=beta&amp;t=kXq1JbiVYCdzKk6De6bxvI5Op_419cu4wU2EUIySwds"
linkedin_topic: Web Development
learning_paths:
  - '[[Advance Your Skills in HTML]]'
prev_courses:
  - '[[Building Great Forms with HTML and CSS]]'
next_courses:
  - '[[HTML- Structured Semantic Data]]'
path_nav: '[{"path":"Advance Your Skills in HTML","position":9,"total":11,"prev":"Building Great Forms with HTML and CSS","next":"HTML- Structured Semantic Data"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/web-standards
  - skill/interactive-web-content
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Learning%20Web%20Audio%20and%20Video.md)

![Learning Web Audio and Video](https://media.licdn.com/dms/image/v2/C4D0DAQFqwMRtOdtvLQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1597422032215?e=2147483647&amp;v=beta&amp;t=kXq1JbiVYCdzKk6De6bxvI5Op_419cu4wU2EUIySwds)

# Learning Web Audio and Video

> Need to share video or audio on your sites, but dropping it on YouTube or a podcasting engine isn't an option? Native web technologies—HTML, CSS, and JavaScript—provide direct support for audio and video, letting you incorporate media and fully customize the playback experience. This introductory course with instructor Joseph Labrecque helps you build interactive audio and video into your websites

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-web-audio-and-video) | 1h 29m | Intermediate | 11K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Build interactive audio and video into your websites and applications](#build-interactive-audio-and-video-into-your-websites-and-applications)
  - [What you should know](#what-you-should-know)
  - [Use the exercise files](#use-the-exercise-files)
  - [What's new in this update](#whats-new-in-this-update)
- [**1. Get Started with Web-Based Media**](#1-get-started-with-web-based-media) (6 videos)
  - [Set up your environment](#set-up-your-environment)
  - [Create a new document](#create-a-new-document)
  - [Link to media content](#link-to-media-content)
  - [Use embedded media](#use-embedded-media)
  - [Challenge: Remove the iframe border](#challenge-remove-the-iframe-border)
  - [Solution: Remove the iframe border](#solution-remove-the-iframe-border)
- [**2. Work with Audio Elements**](#2-work-with-audio-elements) (7 videos)
  - [Modify your document for audio](#modify-your-document-for-audio)
  - [Specify an audio source](#specify-an-audio-source)
  - [Specify multiple audio sources](#specify-multiple-audio-sources)
  - [Include fallback content](#include-fallback-content)
  - [Additional audio attributes](#additional-audio-attributes)
  - [Challenge: Increase audio accessibility with tags](#challenge-increase-audio-accessibility-with-tags)
  - [Solution: Increase audio accessibility with tags](#solution-increase-audio-accessibility-with-tags)
- [**3. Work with Video Elements**](#3-work-with-video-elements) (6 videos)
  - [Modify your document for video](#modify-your-document-for-video)
  - [Specify height and width](#specify-height-and-width)
  - [Use a poster image](#use-a-poster-image)
  - [Media accessibility](#media-accessibility)
  - [Challenge: Fill the background with looping video](#challenge-fill-the-background-with-looping-video)
  - [Solution: Fill the background with looping video](#solution-fill-the-background-with-looping-video)
- [**4. Create Media Playback Controls**](#4-create-media-playback-controls) (6 videos)
  - [Disable default media controls](#disable-default-media-controls)
  - [Add playback buttons](#add-playback-buttons)
  - [Include text elements](#include-text-elements)
  - [Create a progress bar](#create-a-progress-bar)
  - [Challenge: Overlay the media controls](#challenge-overlay-the-media-controls)
  - [Solution: Overlay the media controls](#solution-overlay-the-media-controls)
- [**5. Style Media Playback Controls**](#5-style-media-playback-controls) (6 videos)
  - [Define CSS styles in a document](#define-css-styles-in-a-document)
  - [Design your buttons](#design-your-buttons)
  - [Style your text](#style-your-text)
  - [Design your progress bar](#design-your-progress-bar)
  - [Challenge: Use web fonts](#challenge-use-web-fonts)
  - [Solution: Use web fonts](#solution-use-web-fonts)
- [**6. Work with the Media API**](#6-work-with-the-media-api) (7 videos)
  - [Overview of media API](#overview-of-media-api)
  - [Listen for Media events](#listen-for-media-events)
  - [Program button controls](#program-button-controls)
  - [Dynamic time display](#dynamic-time-display)
  - [Wire up the progress bar](#wire-up-the-progress-bar)
  - [Challenge: Show and hide the controls](#challenge-show-and-hide-the-controls)
  - [Solution: Show and hide the controls](#solution-show-and-hide-the-controls)
- [**Conclusion**](#conclusion) (1 videos)
  - [Further information](#further-information)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Build interactive audio and video into your websites and applications](https://www.linkedin.com/learning/learning-web-audio-and-video/build-interactive-audio-and-video-into-your-websites-and-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/build-interactive-audio-and-video-into-your-websites-and-applications?u=76281980&t=0)** - [Joseph] Hi, I'm Joseph Labrecque.
>
> **[0:02](https://www.linkedin.com/learning/learning-web-audio-and-video/build-interactive-audio-and-video-into-your-websites-and-applications?u=76281980&t=2)** In this course, we'll examine how to work with audio and video on the web using native web technologies.
>
> **[0:09](https://www.linkedin.com/learning/learning-web-audio-and-video/build-interactive-audio-and-video-into-your-websites-and-applications?u=76281980&t=9)** [[HTML]], CSS, and [[JavaScript]].
>
> **[0:12](https://www.linkedin.com/learning/learning-web-audio-and-video/build-interactive-audio-and-video-into-your-websites-and-applications?u=76281980&t=12)** First, we'll begin with an overview of web-based media and see how to link to and embed such media as part of an existing webpage.
>
> **[0:21](https://www.linkedin.com/learning/learning-web-audio-and-video/build-interactive-audio-and-video-into-your-websites-and-applications?u=76281980&t=21)** We'll then proceed with an examination of the usage of both native audio and video HTML5 elements, and their common attributes.
>
> **[0:31](https://www.linkedin.com/learning/learning-web-audio-and-video/build-interactive-audio-and-video-into-your-websites-and-applications?u=76281980&t=31)** Next, we'll set about creating and styling a custom set of media playback controls in order to standardize the look and functionality of our playback across web browsers.
>
> **[0:43](https://www.linkedin.com/learning/learning-web-audio-and-video/build-interactive-audio-and-video-into-your-websites-and-applications?u=76281980&t=43)** Finally, we'll make it all truly interactive through the use of the HTML5 media API, giving the user full control over web-based audio and video media.
>
> **[0:54](https://www.linkedin.com/learning/learning-web-audio-and-video/build-interactive-audio-and-video-into-your-websites-and-applications?u=76281980&t=54)** Alright, let's get going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[JavaScript]] (1)
> **Env Vars:** html5 (2), html (1), css (1), api (1)
> **CLI Commands:** make (1)
> **Speakers:** - [joseph] (1)

#### [What you should know](https://www.linkedin.com/learning/learning-web-audio-and-video/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/what-you-should-know?u=76281980&t=0)** - [Instructor] While you don't necessarily need to know any advanced programming skills to begin working with this content, it is helpful to have a background in native web technologies.
>
> **[0:09](https://www.linkedin.com/learning/learning-web-audio-and-video/what-you-should-know?u=76281980&t=9)** In this course, we'll be dealing with [[HTML]], CSS and [[JavaScript]].
>
> **[0:14](https://www.linkedin.com/learning/learning-web-audio-and-video/what-you-should-know?u=76281980&t=14)** Again, while you don't really need anything but basic knowledge of these concepts to get started, it might be helpful to review some of the basics.
>
> **[0:23](https://www.linkedin.com/learning/learning-web-audio-and-video/what-you-should-know?u=76281980&t=23)** There are a plethora of courses on [[LinkedIn]] Learning that can help you build up these skills.
>
> **[0:28](https://www.linkedin.com/learning/learning-web-audio-and-video/what-you-should-know?u=76281980&t=28)** I suggest having a look at [[HTML Essential Training]] with James Williamson, Introduction to CSS with Carrie Dils, and [[JavaScript Essential Training]] with Morton Rand-Hendriksen.
>
> **[0:43](https://www.linkedin.com/learning/learning-web-audio-and-video/what-you-should-know?u=76281980&t=43)** You may also be interested in other details of HTML audio and video not covered in this course.
>
> **[0:49](https://www.linkedin.com/learning/learning-web-audio-and-video/what-you-should-know?u=76281980&t=49)** For a great overview of the history of web media and various codex involved, I recommend Learning HTML5 Video with Tom Green and Delivering Video and Web Experiences with Tom Green.
>
> **[1:02](https://www.linkedin.com/learning/learning-web-audio-and-video/what-you-should-know?u=76281980&t=62)** Once familiar with these foundational concepts, you'll be ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[JavaScript]] (2), [[LinkedIn]] (1)
> **Env Vars:** html (3), css (2), html5 (1)
> **Speakers:** - [instructor] (1)

#### [Use the exercise files](https://www.linkedin.com/learning/learning-web-audio-and-video/use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/use-the-exercise-files?u=76281980&t=0)** - [Instructor] The exercise files for this course are separated into specific folders.
>
> **[0:05](https://www.linkedin.com/learning/learning-web-audio-and-video/use-the-exercise-files?u=76281980&t=5)** You can either follow along from the beginning, which is what I recommend, or you can jump in at any specific movie.
>
> **[0:12](https://www.linkedin.com/learning/learning-web-audio-and-video/use-the-exercise-files?u=76281980&t=12)** Each folder has a selection of files inside.
>
> **[0:15](https://www.linkedin.com/learning/learning-web-audio-and-video/use-the-exercise-files?u=76281980&t=15)** Most are going to be just a simple index.[[HTML]], but you can also find snippets.txt files here and there.
>
> **[0:24](https://www.linkedin.com/learning/learning-web-audio-and-video/use-the-exercise-files?u=76281980&t=24)** You can copy the contents of each of these folders into your own project to jump to any specific point.
>
> **[0:30](https://www.linkedin.com/learning/learning-web-audio-and-video/use-the-exercise-files?u=76281980&t=30)** Note that all media being used can be found in the media folder at the root of our exercise files.
>
> **[0:37](https://www.linkedin.com/learning/learning-web-audio-and-video/use-the-exercise-files?u=76281980&t=37)** This is in order to avoid duplication of large media files across the project.
>
> **[0:43](https://www.linkedin.com/learning/learning-web-audio-and-video/use-the-exercise-files?u=76281980&t=43)** Once you have all your project files organized, you'll be ready to follow along.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **File Paths:** index.html (1), snippets.txt (1)
> **Exercise Files:** exercise files (2)
> **CLI Commands:** find (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [What's new in this update](https://www.linkedin.com/learning/learning-web-audio-and-video/what-s-new-in-this-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/what-s-new-in-this-update?u=76281980&t=0)** - [Instructor] This course has been updated with new videos.
>
> **[0:04](https://www.linkedin.com/learning/learning-web-audio-and-video/what-s-new-in-this-update?u=76281980&t=4)** The new videos appear at the end of each chapter as a pair.
>
> **[0:08](https://www.linkedin.com/learning/learning-web-audio-and-video/what-s-new-in-this-update?u=76281980&t=8)** You will first be presented with a specific challenge which expands upon what you've learned from the chapter with one possible solution being shown in the second video immediately afterwards.
>
> **[0:21](https://www.linkedin.com/learning/learning-web-audio-and-video/what-s-new-in-this-update?u=76281980&t=21)** I suggest you try and solve the challenge yourself before viewing the solution video.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 1. Get Started with Web-Based Media

[↑ Back to Table of Contents](#table-of-contents)

#### [Set up your environment](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=0)** - [Instructor] We need to install and configure a text editor for editing [[HTML]] markup.
>
> **[0:05](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=5)** We'll be using [[Microsoft]] Visual Studio Code for this course, but you can use any editor that you wish.
>
> **[0:11](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=11)** Visual Studio Code is a free cross-platform, powerful editor for native web technologies.
>
> **[0:17](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=17)** You can download Visual Studio Code by visiting code.[visualstudio.com](https://visualstudio.com).
>
> **[0:23](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=23)** Then you simply click the download button for your platform.
>
> **[0:27](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=27)** I'm on [[Windows]] here, so I'm going to download the Windows stable build.
>
> **[0:32](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=32)** The Visual Studio Code setup installer is now being installed to my Windows machine.
>
> **[0:38](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=38)** With the installer downloaded to my downloads folder, I can go ahead and double-click to install this.
>
> **[0:45](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=45)** As you can see, I already have Visual Studio Code currently installed and running on this machine, so I don't need to install it.
>
> **[0:54](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=54)** I'll hit cancel.
>
> **[0:55](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=55)** However, if you have not installed Visual Studio Code yet, be sure to go through with the installation.
>
> **[1:01](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=61)** We'll now pop over to Visual Studio Code itself.
>
> **[1:05](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=65)** One additional thing that might be useful, and it's not entirely necessary, but it's something I like to do when working with native web technologies, is to install an extension called Live Server.
>
> **[1:16](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=76)** For that, we can go into our extensions, which is this icon right here.
>
> **[1:21](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=81)** And then we can search for Live Server.
>
> **[1:26](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=86)** And here we are.
>
> **[1:27](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=87)** We select Live Server and click install.
>
> **[1:30](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=90)** When you install extensions inside of Visual Studio Code, you must reload the entire application for them to become activated.
>
> **[1:38](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=98)** All right, as we can see, we now have Live Server installed and activated within Visual Studio Code.
>
> **[1:47](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=107)** We now have all the tools necessary to work with audio and video playback for the web.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[HTML]] (1), [[Microsoft]] (1)
> **Tools:** visual studio (9)
> **Prerequisites:** install (6), configure (1), setup (1)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **Env Vars:** html (1)
> **UI Navigation:** double-click (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)

#### [Create a new document](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=0)** - [Instructor] We'll now establish a project folder and create a new [[HTML]] document with standard boiler plate structures.
>
> **[0:07](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=7)** We'll establish a documents head, body and the necessary meta data elements.
>
> **[0:12](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=12)** As you can see, I already have a project folder established.
>
> **[0:16](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=16)** I've simply called it project.
>
> **[0:18](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=18)** You can call this whatever you wish and to actually open up your project folder inside of Visual Studio Code, all you need to do is just drag and drop inside of the window and as you can see, it's now open.
>
> **[0:34](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=34)** I don't have any files in here yet so let's create a new file inside of our project by clicking on the new file icon.
>
> **[0:42](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=42)** I'll name this new file index.html.
>
> **[0:49](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=49)** With this index created, I'm going to insert some boiler plate code through copy and paste inside of my editor.
>
> **[0:57](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=57)** Here we go ahead and define our document type as HTML.
>
> **[1:01](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=61)** We set the language to English or EN and then we enter the head of our document.
>
> **[1:08](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=68)** Every HTML document has both a head and a body.
>
> **[1:12](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=72)** Within the head, we set the character set in a meta tag to utf-8.
>
> **[1:17](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=77)** Inside of title, we can give this any sort of title we want.
>
> **[1:21](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=81)** I'm just calling it audio and video because that's what we're covering in this course.
>
> **[1:26](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=86)** I'm then using a style tag to define the bodies background color to a nice dark charcoal.
>
> **[1:34](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=94)** We then close out the head and establish the body itself.
>
> **[1:38](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=98)** The body is where any of the visual elements that we create including audio and video tags will appear.
>
> **[1:46](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=106)** Let's go ahead and just add an extra line to our body to prepare for additional code.
>
> **[1:52](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=112)** Be sure to save using file, save or control or command S.
>
> **[1:59](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=119)** We now have a basic HTML document to work within.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5)
> **Env Vars:** html (4)
> **File Paths:** index.html (1)
> **Tools:** visual studio (1)
> **UI Navigation:** drag and drop (1)
> **Speakers:** - [instructor] (1)

#### [Link to media content](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=0)** - [Instructor] We'll now see how to establish standard links to media files via [[HTML]] tags using anchor elements.
>
> **[0:07](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=7)** This includes both a standard link, and a more modern direct download link.
>
> **[0:12](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=12)** What we're going to first do is add in a piece of media, which is a video mp4 file into our project.
>
> **[0:20](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=20)** To do that, we'll first establish a media folder within the project by clicking the new folder icon, and we'll give it a name of media.
>
> **[0:31](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=31)** With that created, we can look within our exercise files, within the media folder, and find all the different pieces of media we'll be using in this course.
>
> **[0:42](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=42)** I'm going to choose video.mp4, and what we'll do is just drag this out and into the media folder inside of Visual Studio Code.
>
> **[0:52](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=52)** As you can see the mp4 is placed within the media folder, and we can always collapse or expand that folder as we wish.
>
> **[1:00](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=60)** If Visual Studio Code also tries to open up that file in a new tab, we can see that the file's not able to be displayed, we can just close that, we don't need that to be open.
>
> **[1:12](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=72)** What we'll do next is actually create an anchor element that points to that file.
>
> **[1:17](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=77)** So create an anchor element, and set the href attribute equal to the media folder and the video.mp4 file within it.
>
> **[1:32](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=92)** We'll close out that tag and add a little bit of text for the value.
>
> **[1:38](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=98)** The text we'll add will simply say video file.
>
> **[1:42](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=102)** Alright, now since we added a new element, this anchor element, let's go ahead and add some definition for that in our CSS styles.
>
> **[1:53](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=113)** I'm going to do some quick formatting here, just some basic indents and new lines to make this a bit more readable.
>
> **[2:06](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=126)** Alright, there's our body, and now we're going to put in an anchor tag CSS definition.
>
> **[2:14](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=134)** And what we'll do is simply change the color.
>
> **[2:18](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=138)** So put that color style in there, and we'll set that to Alice blue.
>
> **[2:24](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=144)** The color Alice blue is going to work really well against our dark gray background.
>
> **[2:30](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=150)** Go ahead and do a Cmd or Ctrl + S to save, and then we'll test this out in the browser.
>
> **[2:36](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=156)** Let's make use of the live server extension that we installed.
>
> **[2:40](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=160)** As you'll note here, we have the option to go live, and I'll just click on that, and it lets us know that the server's started on port 5500.
>
> **[2:52](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=172)** Popping over to our web browser we see that we have our video file link here, and if we click on it, right now it just opens up that mp4 in the tab that we're currently in, and it just begins playing.
>
> **[3:07](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=187)** Let's hit back so we're back at index.html, and then we'll pop back over to Visual Studio Code, and we'll make some additions and changes to this code.
>
> **[3:19](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=199)** So there's the video file right there, I'm going to go ahead, select that and copy it with Ctrl or Cmd + C, and on a new line I'll put a little pipe character, and then paste in that same code.
>
> **[3:33](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=213)** Now instead of video file, I'm going to change the text here to download video file, because we want this to be a direct download.
>
> **[3:43](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=223)** I'll copy the path media/video.mp4, again using Cmd or Ctrl + C, and what we can do is set a download attribute.
>
> **[3:56](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=236)** And we'll paste in that exact same value.
>
> **[4:00](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=240)** What this does is tells the browser that we actually want to directly download the file and not play it back inside the web browser at all.
>
> **[4:09](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=249)** Let's go ahead and once again Ctrl or Cmd + S to save, and then pop back over to your web browser.
>
> **[4:16](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=256)** Alright, as you can see, we have both video file, and the new download video file option.
>
> **[4:23](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=263)** If we click download video file, there we go, the video file downloads to our downloads folder, and then we're able to play it back in any software that supports mp4 playback.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **CLI Commands:** make (3), find (1)
> **Tools:** visual studio (3)
> **UI Navigation:** click on (2), in the tab (1)
> **Env Vars:** css (2)
> **Exercise Files:** exercise files (1), download the (1)
> **File Paths:** index.html (1)
> **Ports:** port 5500 (1)

#### [Use embedded media](https://www.linkedin.com/learning/learning-web-audio-and-video/use-embedded-media?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/use-embedded-media?u=76281980&t=0)** - [Instructor] We can also use iframe elements to embed externally hosted media content directly within our [[HTML]] from any service that supplies and allows cross-domain embed codes.
>
> **[0:13](https://www.linkedin.com/learning/learning-web-audio-and-video/use-embedded-media?u=76281980&t=13)** Let's go ahead and add that to our body, and we'll place it directly after our download video file link, we'll put some space in there, and scroll down a bit, and the first thing I'll actually put in here is a horizontal rule, so an HR element just to separate both of these.
>
> **[0:34](https://www.linkedin.com/learning/learning-web-audio-and-video/use-embedded-media?u=76281980&t=34)** With that done, we'll now insert an iframe that points to our video.
>
> **[0:40](https://www.linkedin.com/learning/learning-web-audio-and-video/use-embedded-media?u=76281980&t=40)** So establishing an iframe element will set a src, or source attribute, and this is going to point to the exact same spot that our anchors point to.
>
> **[0:53](https://www.linkedin.com/learning/learning-web-audio-and-video/use-embedded-media?u=76281980&t=53)** Media/video.mp4.
>
> **[0:59](https://www.linkedin.com/learning/learning-web-audio-and-video/use-embedded-media?u=76281980&t=59)** We'll also set a direct width and height for this iframe, so we'll set the width equal to 640 pixels, and we'll set the height to 360 pixels.
>
> **[1:16](https://www.linkedin.com/learning/learning-web-audio-and-video/use-embedded-media?u=76281980&t=76)** With that done we'll close out our iframe and hit Cmd or Ctrl + S to save.
>
> **[1:23](https://www.linkedin.com/learning/learning-web-audio-and-video/use-embedded-media?u=76281980&t=83)** Notice that I have my live server still running on port 5500, but if it wasn't running right now, I could just click it again and it would fire the live server up for me.
>
> **[1:35](https://www.linkedin.com/learning/learning-web-audio-and-video/use-embedded-media?u=76281980&t=95)** If you ever want to stop the live server, you can of course just click it to close the server, it's basically a toggle.
>
> **[1:42](https://www.linkedin.com/learning/learning-web-audio-and-video/use-embedded-media?u=76281980&t=102)** Let's pop back over to our web browser to see the iframe content.
>
> **[1:47](https://www.linkedin.com/learning/learning-web-audio-and-video/use-embedded-media?u=76281980&t=107)** (waves crash) An iframe allows us to embed the video for playback directly within our html page view.
>
> **[1:59](https://www.linkedin.com/learning/learning-web-audio-and-video/use-embedded-media?u=76281980&t=119)** You can also use an iframe to display other media, even additional html documents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3)
> **UI Navigation:** scroll down (1), toggle (1)
> **Ports:** port 5500 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Remove the iframe border](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-remove-the-iframe-border?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-remove-the-iframe-border?u=76281980&t=0)** - [Instructor] The iframe works well for displaying our video, but by default, browsers render an ugly border around the content.
>
> **[0:15](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-remove-the-iframe-border?u=76281980&t=15)** This is undesirable.
>
> **[0:17](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-remove-the-iframe-border?u=76281980&t=17)** How might we clean up the display of this iframe content by removing the border?

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Remove the iframe border](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-remove-the-iframe-border?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-remove-the-iframe-border?u=76281980&t=0)** - [Instructor] All right, one possible solution to this is to actually use CSS in order to redefine the border value of the iframe.
>
> **[0:18](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-remove-the-iframe-border?u=76281980&t=18)** If we look a little down here, there's our iframe, and we haven't actually done anything to the iframe attributes whatsoever.
>
> **[0:30](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-remove-the-iframe-border?u=76281980&t=30)** But up above inside of our style block, within the head of our [[HTML]] document, what we have is an iframe definition.
>
> **[0:40](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-remove-the-iframe-border?u=76281980&t=40)** And in there, we target the border attribute and we set its value to none.
>
> **[0:47](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-remove-the-iframe-border?u=76281980&t=47)** This effectively removes the border from our iframe and things look a lot nicer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** css (1), html (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Work with Audio Elements

[↑ Back to Table of Contents](#table-of-contents)

#### [Modify your document for audio](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=0)** - [Instructor] We'll now clear out our [[HTML]] document, removing all linked content and embeds, and prepare it for working with audio elements and attributes exclusively.
>
> **[0:10](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=10)** So, what we'll do, I'll go ahead and just collapse our style.
>
> **[0:15](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=15)** Inside of Visual Studio Code, you're able to go ahead and use these little widgets here to expand and collapse different elements and the nested elements within them.
>
> **[0:25](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=25)** So to make things a little bit easier to see, I'm going to collapse the entire head tag.
>
> **[0:30](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=30)** Here we have our different links and iframe embeds for the body, and removing them is just as easy as selecting them and hitting delete or Backspace.
>
> **[0:42](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=42)** With that done, we can now insert our basic audio tag.
>
> **[0:46](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=46)** So I'll start out an HTML tag with that character there, and as you can see, Visual Studio Code is going to suggest a number of different elements to us, and here is audio right here, we can either select that or type it out.
>
> **[1:03](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=63)** I'm going to select it by arrowing down in the list and then hitting Return or Enter, and now we have audio.
>
> **[1:10](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=70)** If I close that off, it closes the audio tag completely.
>
> **[1:15](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=75)** Let's go ahead and see how this looks in the web browser, but first, save your document using Command or Control + S, and then as you note here, our live server is running, and here inside of our HTML, we don't see anything whatsoever.
>
> **[1:31](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=91)** I'm going to go ahead and choose Inspect.
>
> **[1:33](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=93)** I'm using [[Google]] Chrome here, but just about every web browser has the ability to inspect elements through developer tools.
>
> **[1:43](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=103)** I'm going to turn off that mobile view, and just have look at the different elements that we have inside the body here.
>
> **[1:50](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=110)** Alright, so there's our audio element that we just created, and you'll notice that it has no visual properties whatsoever.
>
> **[1:58](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=118)** Let's go back to Visual Studio Code and change that.
>
> **[2:02](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=122)** So, inside our audio tag, the audio tag itself in HTML has absolutely no visual styling, unless you apply the browser based controls to it, and the way you do that is just to insert an element, and the way you do that is to just insert an attribute called controls, just like that.
>
> **[2:25](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=145)** What this is going to do is to tell the web browser that we want it to take over and apply its own visual stylistic controls to our audio element.
>
> **[2:35](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=155)** We'll go ahead and save this once again, and have a look in the browser.
>
> **[2:40](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=160)** Alright, as we can see here, our element definitely has controls now, however, there is no actual audio file that's being used with this audio element, so we can't actually play anything back just yet.
>
> **[2:54](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=174)** Note also that adding the controls attribute, it tells the browser to render its own visual style upon the element.
>
> **[3:02](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=182)** Every single browser is going to style this differently, so if it looks different in yours, that's why.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[Google]] (1)
> **Env Vars:** html (4)
> **Tools:** visual studio (3)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Specify an audio source](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-an-audio-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-an-audio-source?u=76281980&t=0)** - [Instructor] The source attribute allows us to specify the source file for our audio playback.
>
> **[0:05](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-an-audio-source?u=76281980&t=5)** This is the audio content that will play using the [[HTML]] audio element.
>
> **[0:10](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-an-audio-source?u=76281980&t=10)** The first thing we're going to have to do is have a look inside of our media folder within the project because right now we only have an MP4 video file.
>
> **[0:20](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-an-audio-source?u=76281980&t=20)** If we have a look inside of our exercise files within the media folder, we can see audio.mp3.
>
> **[0:29](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-an-audio-source?u=76281980&t=29)** This is an audio file that we can use in our project, we'll just copy and paste that or even just drag it into the media folder inside of Visual Studio Code.
>
> **[0:39](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-an-audio-source?u=76281980&t=39)** It now exists inside our MP4, inside the media folder, and again, if it opens up inside of Code in a tab, we can close that tab.
>
> **[0:49](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-an-audio-source?u=76281980&t=49)** With that file within our media folder, we can now set a source or SRC attribute on the audio element.
>
> **[1:00](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-an-audio-source?u=76281980&t=60)** And we can set it equal to media/audio.mp3.
>
> **[1:07](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-an-audio-source?u=76281980&t=67)** Let's go ahead and test this out inside of the browser.
>
> **[1:11](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-an-audio-source?u=76281980&t=71)** All right, we can already see that we have a duration here populated.
>
> **[1:15](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-an-audio-source?u=76281980&t=75)** Some of it's been preloaded and so forth.
>
> **[1:19](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-an-audio-source?u=76281980&t=79)** Let's go ahead and hit play, and note we're also able to drag things around and just use these full controls on the audio element.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** mp4 (2), html (1), src (1)
> **Tools:** visual studio (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Specify multiple audio sources](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=0)** - [Instructor] The source attribute allows us to specify a single audio file source.
>
> **[0:05](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=5)** But nesting multiple source elements within our audio element allows us to specify primary and secondary sources.
>
> **[0:13](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=13)** Let's go ahead and actually remove the src or source attribute here, I'm going to use Command or Control + X to simply cut this out 'cause we can repurpose it for the different source texts we're going to create.
>
> **[0:28](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=28)** Within the audio element itself, we're going to nest additional elements.
>
> **[0:34](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=34)** And these are of type source.
>
> **[0:36](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=36)** So just type in source and we're going to paste in, using Control or Command + V, the source src attribute here.
>
> **[0:46](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=46)** Initially, the primary source is going to point to this mp3 file.
>
> **[0:50](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=50)** Now you've got some additional attributes you can use for the source, such as the type.
>
> **[0:56](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=56)** This helps inform the browser in terms of exactly what codec is being used and what container.
>
> **[1:03](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=63)** So if we set type equal to audio in this case and mpeg for MPEG, this is going to let the web browser know that this a MIME type of audio/mpeg.
>
> **[1:17](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=77)** We'll then close that out and set our secondary source.
>
> **[1:22](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=82)** The secondary source exists if the browser is unable to play the first source, or the primary source.
>
> **[1:28](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=88)** And it's set up exactly the same way.
>
> **[1:31](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=91)** So we'll set the source tag and here I'm setting it to media/audio.mp3 but that doesn't make a lot of sense because we need to use a different file type.
>
> **[1:42](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=102)** I'm going to use a file type called ogg.
>
> **[1:45](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=105)** Of course, I need to actually use this file inside of our project.
>
> **[1:51](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=111)** So let's bring up our File Explorer once again.
>
> **[1:54](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=114)** So here, you'll note that along with our audio.mp3, we also have an audio.ogg.
>
> **[2:01](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=121)** This is the exact same file, except this one's been encoded to a different format.
>
> **[2:07](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=127)** Go ahead and drag that OGG file into your media folder within Visual Studio Code and that makes it available for us to use.
>
> **[2:16](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=136)** Here, we'll once again set the type and this time it's going to be audio/ogg.
>
> **[2:22](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=142)** Note that you can additionally specify specific codec being used.
>
> **[2:27](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=147)** In this case, we're using an Ogg Vorbis codec.
>
> **[2:31](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=151)** So, we'll put a semi-colon in there, right after the MIME type and specify codecs equals vorbis.
>
> **[2:40](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=160)** With that done, we'll then close out our source element.
>
> **[2:44](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=164)** Go ahead and save your file and we can have a look in the web browser.
>
> **[2:49](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=169)** Now, you're not going to notice anything different because [[Google]] Chrome can play back an mp3 file just fine.
>
> **[2:56](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=176)** However, if you are using a browser that could not play back an mp3 file, the Ogg Vorbis audio file would be loaded up in its place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **Env Vars:** mime (2), mpeg (1), ogg (1)
> **Warnings:** note that (2)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Include fallback content](https://www.linkedin.com/learning/learning-web-audio-and-video/include-fallback-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/include-fallback-content?u=76281980&t=0)** - [Instructor] What would happen if an older web browser is being used which doesn't support the [[HTML]] 5 audio element at all?
>
> **[0:07](https://www.linkedin.com/learning/learning-web-audio-and-video/include-fallback-content?u=76281980&t=7)** We can easily specify fallback content in such cases.
>
> **[0:11](https://www.linkedin.com/learning/learning-web-audio-and-video/include-fallback-content?u=76281980&t=11)** What we'll do is just insert a little bit of content within the audio tag just directly after our different source listings.
>
> **[0:20](https://www.linkedin.com/learning/learning-web-audio-and-video/include-fallback-content?u=76281980&t=20)** So, I'll paste in a little text message here that says sorry, your browser does not support the audio element.
>
> **[0:26](https://www.linkedin.com/learning/learning-web-audio-and-video/include-fallback-content?u=76281980&t=26)** Now we have a fallback in case it's an HTML 5 compatible browser that does not support MP3.
>
> **[0:33](https://www.linkedin.com/learning/learning-web-audio-and-video/include-fallback-content?u=76281980&t=33)** It'll go to OGG, and if it doesn't support the audio element altogether, it'll display this fallback content.
>
> **[0:41](https://www.linkedin.com/learning/learning-web-audio-and-video/include-fallback-content?u=76281980&t=41)** Note that you could also use something like an image here if you wished.
>
> **[0:45](https://www.linkedin.com/learning/learning-web-audio-and-video/include-fallback-content?u=76281980&t=45)** We'll go ahead and save this and have a look inside the web browser.
>
> **[0:50](https://www.linkedin.com/learning/learning-web-audio-and-video/include-fallback-content?u=76281980&t=50)** Of course, since [[Google]] Chrome does support the HTML 5 audio element and the MP3 file format, that's what's being loaded here.
>
> **[0:59](https://www.linkedin.com/learning/learning-web-audio-and-video/include-fallback-content?u=76281980&t=59)** However, we can see in the source code that our fallback text does exist.
>
> **[1:06](https://www.linkedin.com/learning/learning-web-audio-and-video/include-fallback-content?u=76281980&t=66)** For older browsers that don't support the HTML 5 audio element, you could even fall back to Adobe Flash Player to support audio playback instead of this simple text message or an image.
>
> **[1:18](https://www.linkedin.com/learning/learning-web-audio-and-video/include-fallback-content?u=76281980&t=78)** You have a lot of choices here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[Google]] (1)
> **Env Vars:** html (4), mp3 (2), ogg (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** source code (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Additional audio attributes](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=0)** - [Instructor] We'll now look at some additional audio element attributes such as autoplay, loop, muted and preload.
>
> **[0:08](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=8)** These impact the [[User Experience (UX)|user experience]] and are important to consider.
>
> **[0:12](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=12)** We're going to be dealing with the audio element itself here and right now we have a control's attribute set that's going to make the controls visible.
>
> **[0:21](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=21)** However, we can add a number of additional attributes here such as autoplay.
>
> **[0:26](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=26)** If we set autoplay, what will happen is as soon as we save this and look in the browser, you can see that everything autoplays.
>
> **[0:39](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=39)** Here's our element with autoplay and a control selected and even if we refresh this, the audio track is playing automatically.
>
> **[0:50](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=50)** Now, this can be very strange for the user if they don't expect audio to be playing and then they visit a website and the audio starts playing.
>
> **[0:59](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=59)** So, back into Visual Studio Code, I would almost always suggest unless you had a very good reason to include the autoplay attribute, to just not have that at all.
>
> **[1:11](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=71)** Loop works in a similar way.
>
> **[1:13](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=73)** If you have loop defined, and then we save, and go back to the web browser.
>
> **[1:19](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=79)** If we play this, and then jump ahead towards the end, once it reaches the end it automatically seeks directly back to the zero mark and begins playing it again.
>
> **[1:35](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=95)** Loop is going to loop forever.
>
> **[1:40](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=100)** Alright, back to Visual Studio Code.
>
> **[1:43](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=103)** Now another attribute is muted.
>
> **[1:46](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=106)** This is also an attribute that I would suggest you don't use unless you have a very good reason to do so.
>
> **[1:53](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=113)** The reason for this, if we look in the browser, is that muted is going to automatically set the volume to mute.
>
> **[2:01](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=121)** So if somebody goes and tries to play this, they're not going to hear anything and they might not realize that muted has been set.
>
> **[2:11](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=131)** Of course they can override this by clicking the mute button if it exists, toggling the volume back on.
>
> **[2:19](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=139)** Back to Visual Studio Code to look at one additional attribute and that is the attribute preload.
>
> **[2:28](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=148)** Now preload gets three different values, you can't just set it.
>
> **[2:32](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=152)** You got auto, [[Metadata]] and none.
>
> **[2:37](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=157)** I prefer to use metadata, however auto is going to leave up what is preloaded to the browser.
>
> **[2:44](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=164)** Metadata, as I have here, is going to ask the browser to at least preload the metadata which includes data attributes like the length of duration of the actual audio.
>
> **[2:57](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=177)** None of course is going to request that the browser doesn't preload anything.
>
> **[3:01](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=181)** We'll save this and have a look in the web browser once again.
>
> **[3:05](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=185)** So we can tell that the metadata has preloaded simply because we do get the duration displayed in our controls.
>
> **[3:12](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=192)** However it is important to note that preload as an attribute only provides a hint or suggestion to the web browser in terms of what you would like it to do.
>
> **[3:23](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=203)** The browser does not necessarily have to abide by what you're asking it here.
>
> **[3:28](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=208)** You can of course experiment with these attributes to find the best settings for your own use cases when playing audio on the web.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (5), [[User Experience (UX)|User experience]] (1)
> **Tools:** visual studio (3)
> **CLI Commands:** make (1), find (1)
> **Analogies:** such as (2)
> **Cross-References:** go back to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Increase audio accessibility with tags](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-increase-audio-accessibility-with-tags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-increase-audio-accessibility-with-tags?u=76281980&t=0)** - [Instructor] Accessibility is so important on the web, especially when it comes to audio, video and image content.
>
> **[0:13](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-increase-audio-accessibility-with-tags?u=76281980&t=13)** What might be an additional method of making audio content more accessible to users through the use of [[HTML]]?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** html (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Increase audio accessibility with tags](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-increase-audio-accessibility-with-tags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-increase-audio-accessibility-with-tags?u=76281980&t=0)** - [Instructor] One possible solution to this is if we look down here we'll find our audio element with a number of source elements and other properties associated with it.
>
> **[0:18](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-increase-audio-accessibility-with-tags?u=76281980&t=18)** You can see that I've added some additional elements wrapping our audio source.
>
> **[0:26](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-increase-audio-accessibility-with-tags?u=76281980&t=26)** I have a figure element and also a figcaption element with a little descriptive text.
>
> **[0:35](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-increase-audio-accessibility-with-tags?u=76281980&t=35)** This is going to add an additional layer of accessibility through standard descriptors in [[HTML]].
>
> **[0:43](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-increase-audio-accessibility-with-tags?u=76281980&t=43)** Note that I've also gone ahead and added a rule to our CSS styles, which defines the font family, color and a little bit of padding.
>
> **[0:55](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-increase-audio-accessibility-with-tags?u=76281980&t=55)** Having a look at the result.
>
> **[0:56](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-increase-audio-accessibility-with-tags?u=76281980&t=56)** We can see that the audio file now has a bit more context to it and it is therefore much more accessible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** html (1), css (1)
> **CLI Commands:** find (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Work with Video Elements

[↑ Back to Table of Contents](#table-of-contents)

#### [Modify your document for video](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-video?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-video?u=76281980&t=0)** - [Instructor] We'll now clear out our [[HTML]] document, removing all references to our audio content and prepare it for working with video elements and attributes exclusively, building upon what we've already learned.
>
> **[0:12](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-video?u=76281980&t=12)** We'll go ahead and just select and delete all of that material.
>
> **[0:17](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-video?u=76281980&t=17)** Now before moving on, note that just about everything we've previously seen applied to the audio element is also valid for the video element.
>
> **[0:26](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-video?u=76281980&t=26)** We will not be repeating these things here where it can be helped.
>
> **[0:29](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-video?u=76281980&t=29)** Let's create our video element, and there it is, video, and just as the case with audio, the video element by itself has no visual styling.
>
> **[0:41](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-video?u=76281980&t=41)** Let's go ahead and add the controls attribute, and then we can close out of our video element with a closing tag.
>
> **[0:49](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-video?u=76281980&t=49)** We'll save that and have a look in the web browser.
>
> **[0:52](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-video?u=76281980&t=52)** There it is.
>
> **[0:53](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-video?u=76281980&t=53)** Adding the controls attribute tells the browser to render its own visual style upon the element, but just as with audio, every browser styles it differently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Specify height and width](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=0)** - [Instructor] Unlike audio elements when dealing with a video tag, we can specify a specific width and height.
>
> **[0:06](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=6)** In order to properly display the visual aspects of the video file, first, we need to specify a source file.
>
> **[0:14](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=14)** Just as with audio, the video element can have a single source specified as an attribute or a number of source elements nested within the video element itself.
>
> **[0:25](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=25)** We'll use a single SRC attribute to keep things simple.
>
> **[0:30](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=30)** So directly on the video element, SRC equals... And we already have some videos within our media folder for this project.
>
> **[0:38](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=38)** So we can go into media and there's our video.mp4.
>
> **[0:43](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=43)** There we are.
>
> **[0:44](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=44)** Let's go ahead and save this and then have a look in the web browser.
>
> **[0:49](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=49)** Now you can see here, it's quite large because the video is displaying at its native resolution.
>
> **[0:57](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=57)** We can play it back and use the controls, as specified, with he controls attribute.
>
> **[1:02](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=62)** However, it's much, much too large.
>
> **[1:05](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=65)** We're going to constrain this with the width attribute.
>
> **[1:09](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=69)** Going back to Visual Studio Code, add in an attribute of width and we'll set that to 600.
>
> **[1:17](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=77)** That's going to be 600 pixels.
>
> **[1:20](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=80)** We'll save and go back to the web browser.
>
> **[1:23](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=83)** All right, notice the browser automatically adjusts the height to ensure the video's native aspect ratio is preserved.
>
> **[1:32](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=92)** Of course you can override this behavior with a height attribute as well.

> [!info]- Semantic Content
>
> **Env Vars:** src (2)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Use a poster image](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=0)** - [Instructor] A poster image allows us to display a static image while the video loads or before the user clicks to play.
>
> **[0:08](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=8)** This is defined via a poster attribute.
>
> **[0:10](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=10)** If you do not define a poster attribute, the first available frame of the video is displayed.
>
> **[0:16](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=16)** So, before we actually modify this code, let's have a look in the browser to see how it's being displayed right now.
>
> **[0:24](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=24)** Alright, we just have a black frame in Chrome, which isn't very user friendly.
>
> **[0:29](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=29)** Let's fix that in Visual Studio Code.
>
> **[0:32](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=32)** Before we actually refer to a poster attribute, we're going to need to add the actual PNG file that I've created as a still.
>
> **[0:43](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=43)** Looking inside exercise files within the media folder, you'll find still.png.
>
> **[0:51](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=51)** This is a simple, still image composite that I created in [[Adobe Photoshop]] and exported as a PNG image.
>
> **[0:59](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=59)** Drag and drop this directly into the media folder in your project.
>
> **[1:04](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=64)** Now, Visual Studio Code can display image data and it's showing us this right here in a new tab, but we don't really need to see it, so we'll close that tab and here, we're going to go ahead and specify that poster attribute.
>
> **[1:20](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=80)** Poster=media/still.png.
>
> **[1:28](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=88)** Let's go back to the browser and see how that looks.
>
> **[1:31](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=91)** Alright.
>
> **[1:32](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=92)** So it's showing us the actual poster image as a still instead of that black frame.
>
> **[1:37](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=97)** Of course, if we start playing back, that goes away and we get the actual video.
>
> **[1:45](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=105)** Note that other attributes like autoplay, loop, muted and even preload work the same with the video element as they do with audio.
>
> **[1:55](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=115)** Let's go ahead and add a preload attribute here and we'll set this to [[Metadata]] just as we did with the audio.
>
> **[2:02](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=122)** Now be sure to add this preload attribute to load in your metadata as we're going to need this later on as the course progresses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (2), [[Adobe Photoshop]] (1)
> **Env Vars:** png (2)
> **Tools:** visual studio (2)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** drag and drop (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Media accessibility](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=0)** - [Narrator] Captions, Subtitles, Chapters and Descriptions can be added to either Audio or Video Playback, which will describe the content in different ways for accessibility and descriptive purposes.
>
> **[0:12](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=12)** Once again look inside the Exercise Files in your media folder and you'll find captions.vtt.
>
> **[0:20](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=20)** This is a captions file that I've created, which just sort of describes some things.
>
> **[0:25](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=25)** It gives a good example of how to use vtt files.
>
> **[0:28](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=28)** Let's go ahead and drag this into our Media Folder once again, and it opens it up for us.
>
> **[0:35](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=35)** Now, in a vtt file, you basically specify time code for when you want a specific descriptor to begin and then when you want it to end.
>
> **[0:44](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=44)** I just say, "These are English language captions," and then a little while later, I pop up, "You are watching footage of a beach in Rhode Island," and then finally, "Pretty cool, huh?"
>
> **[0:57](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=57)** That's really all there is to it.
>
> **[0:59](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=59)** Let's go ahead and close that vtt file.
>
> **[1:02](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=62)** Then, we'll tie it to the video element by using a track element within it.
>
> **[1:08](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=68)** This works very similar to source elements in that you place it within the video file.
>
> **[1:14](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=74)** Right between the opening and closing video tags, I'm going to add an element of type track.
>
> **[1:21](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=81)** We're going to set this as the default track.
>
> **[1:26](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=86)** We're going to give it a label and this should be what language it's in, or something around it that describes it and differentiates it from other tracks.
>
> **[1:38](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=98)** This is just our English captions, so I'm just going to put a label of "English".
>
> **[1:44](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=104)** We can say what kind it is.
>
> **[1:46](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=106)** Are these captions, chapters, descriptions?
>
> **[1:49](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=109)** Is this [[Metadata]] or subtitles?
>
> **[1:52](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=112)** We want to be as correct here as possible.
>
> **[1:55](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=115)** I'm just going to put captions in.
>
> **[1:57](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=117)** Then you can also say what the source language is.
>
> **[2:01](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=121)** So srclang, and this is going to be English.
>
> **[2:06](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=126)** We're going to use the code for English here, en.
>
> **[2:10](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=130)** Finally, we have to point to the vtt itself.
>
> **[2:14](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=134)** So, src equals and we're going to go into media and then find captions.vtt and select that.
>
> **[2:23](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=143)** There we are.
>
> **[2:24](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=144)** We'll now close out our opening track tag. Perfect.
>
> **[2:29](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=149)** You'll note that tracks do not have a closing track tag.
>
> **[2:33](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=153)** If you wanted you could always put a self closing element there.
>
> **[2:37](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=157)** I'm just going to leave it this style.
>
> **[2:39](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=159)** Alright, let's save this and test it out.
>
> **[2:42](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=162)** As we can see in our Elements panel here, all of those different attributes exist, including our track element and its attributes.
>
> **[2:53](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=173)** Let's go ahead and play and see how it looks.
>
> **[2:56](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=176)** (Ocean waves crashing) Alright. These are English language captions.
>
> **[3:04](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=184)** There we go. Very descriptive captions that we have along with this particular video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1)
> **CLI Commands:** find (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Fill the background with looping video](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-fill-the-background-with-looping-video?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-fill-the-background-with-looping-video?u=76281980&t=0)** (soft upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-fill-the-background-with-looping-video?u=76281980&t=6)** - [Instructor] A common practice in modern [[Web Design]] is to use video not as content, but as a design element behind the content as part of the page background.
>
> **[0:19](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-fill-the-background-with-looping-video?u=76281980&t=19)** How would we convert our video content to a looping background design element?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Design]] (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (soft upbeat music) (1)

#### [Solution: Fill the background with looping video](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-fill-the-background-with-looping-video?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-fill-the-background-with-looping-video?u=76281980&t=0)** - [Instructor] So one possible solution to this challenge, if we look down here inside of our [[HTML]], I've separated out my video element into an containing element called video-container, and I've also added in a little bit of content here in the form of a h1 element.
>
> **[0:30](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-fill-the-background-with-looping-video?u=76281980&t=30)** And that's wrapped within a div named content-container.
>
> **[0:37](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-fill-the-background-with-looping-video?u=76281980&t=37)** Now all we need to do is tweak the CSS a little bit in order for this to work.
>
> **[0:44](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-fill-the-background-with-looping-video?u=76281980&t=44)** So for the ID of video-container, I've set the height to a specific height, here 450, and the width is set to 100% so that it spans the entire page.
>
> **[1:00](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-fill-the-background-with-looping-video?u=76281980&t=60)** The overflow property has been set to hidden, so anything that spills over these boundaries is not going to be shown.
>
> **[1:08](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-fill-the-background-with-looping-video?u=76281980&t=68)** The position is fixed to the very top of the page.
>
> **[1:13](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-fill-the-background-with-looping-video?u=76281980&t=73)** For my content-container ID, I've set its position to be relative, and I've also set it to the top of the page.
>
> **[1:25](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-fill-the-background-with-looping-video?u=76281980&t=85)** Note that depending upon exactly how things are working and what your server setup is, you may need to add some additional tags to your video content.
>
> **[1:36](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-fill-the-background-with-looping-video?u=76281980&t=96)** I've said allowfullscreen here, I've set it to autoplay, I've set it to loop and I've manually set the width to 100% here as well, just to ensure that that actually kicks off.
>
> **[1:52](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-fill-the-background-with-looping-video?u=76281980&t=112)** All right, let's go ahead and have a look and see how this came out.
>
> **[1:57](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-fill-the-background-with-looping-video?u=76281980&t=117)** There it is, our looping background video.
>
> **[2:01](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-fill-the-background-with-looping-video?u=76281980&t=121)** We have our video playing in the background, it's going to loop over and over again.
>
> **[2:06](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-fill-the-background-with-looping-video?u=76281980&t=126)** It autoplays and our content is overlaying it, since it is to be used as background video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** html (1), css (1)
> **Warnings:** note that (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Create Media Playback Controls

[↑ Back to Table of Contents](#table-of-contents)

#### [Disable default media controls](https://www.linkedin.com/learning/learning-web-audio-and-video/disable-default-media-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/disable-default-media-controls?u=76281980&t=0)** - [Instructor] If you'd like to create and style your own controls for media playback, you can disable the default playback controls provided by the web browser in preparation for your own.
>
> **[0:11](https://www.linkedin.com/learning/learning-web-audio-and-video/disable-default-media-controls?u=76281980&t=11)** So looking in the web browser here, since we have the controls attribute as part of our video element, all of the different controls are being rendered by the browser itself.
>
> **[0:22](https://www.linkedin.com/learning/learning-web-audio-and-video/disable-default-media-controls?u=76281980&t=22)** Since I'm using [[Google]] Chrome here, these are the specific controls that are rendered by Chrome.
>
> **[0:29](https://www.linkedin.com/learning/learning-web-audio-and-video/disable-default-media-controls?u=76281980&t=29)** In both audio and video tags, the look and style of the controls are going to be determined by a specific browser being used.
>
> **[0:38](https://www.linkedin.com/learning/learning-web-audio-and-video/disable-default-media-controls?u=76281980&t=38)** Let's go back to Visual Studio code, and our project, and we're going to clean some stuff up here.
>
> **[0:44](https://www.linkedin.com/learning/learning-web-audio-and-video/disable-default-media-controls?u=76281980&t=44)** One thing we're going to do is actually remove that controls attribute.
>
> **[0:50](https://www.linkedin.com/learning/learning-web-audio-and-video/disable-default-media-controls?u=76281980&t=50)** In order to keep our code simple, I'm also going to go ahead and delete the entire track element that we have here, giving us just a simple opening and closing video tag.
>
> **[1:05](https://www.linkedin.com/learning/learning-web-audio-and-video/disable-default-media-controls?u=76281980&t=65)** Let's go ahead and save this, and go back to the web browser.
>
> **[1:10](https://www.linkedin.com/learning/learning-web-audio-and-video/disable-default-media-controls?u=76281980&t=70)** Alright, so now we can see that there are no controls overlaying our content.
>
> **[1:15](https://www.linkedin.com/learning/learning-web-audio-and-video/disable-default-media-controls?u=76281980&t=75)** Additionally though, there's no way that we can start playback, that we can seek, change the volume, or anything.
>
> **[1:23](https://www.linkedin.com/learning/learning-web-audio-and-video/disable-default-media-controls?u=76281980&t=83)** We'll need to add additional playback controls of our own making, and later on, wire them up with [[JavaScript]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[JavaScript]] (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Add playback buttons](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=0)** - [Instructor] We'll now use a set of [[HTML]] button elements in order to replicate and customize the controls that users would normally expect to have when interacting with audio and video content.
>
> **[0:12](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=12)** We'll use standard HTML elements to add in some of these controls.
>
> **[0:17](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=17)** The first thing we'll do is just add some space underneath our video element.
>
> **[0:23](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=23)** And here we're going to create a container div.
>
> **[0:27](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=27)** It's going to have and ID and we'll give the ID the name of media controls.
>
> **[0:38](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=38)** Go ahead and close that out.
>
> **[0:40](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=40)** And now we have a div element with the ID media controls.
>
> **[0:45](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=45)** This is going to hold all of the different controls we create to interact with the video element.
>
> **[0:52](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=52)** Let's go ahead and create some playback buttons.
>
> **[0:55](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=55)** For this, we'll actually use the button element.
>
> **[1:00](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=60)** So set button with an ID.
>
> **[1:04](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=64)** And this first button is going to be our play button, so we'll give it the ID of play button.
>
> **[1:14](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=74)** And we'll add in a text value of play.
>
> **[1:17](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=77)** This is basically the label of the button.
>
> **[1:20](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=80)** On the next line we'll create a button to pause the video.
>
> **[1:26](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=86)** So button with an ID attribute of pause button.
>
> **[1:34](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=94)** And for a label here, we'll give it the text value of pause.
>
> **[1:40](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=100)** All right, let's go ahead and save this and have a look in our web browser.
>
> **[1:45](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=105)** As you can see, we now have a play button and a pause button, both appearing directly beneath the visible video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Env Vars:** html (2)
> **Speakers:** - [instructor] (1)

#### [Include text elements](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=0)** - [Instructor] When displaying text in [[HTML]], we have many different tags to choose from.
>
> **[0:05](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=5)** We'll use a simple time element to display the current position and total duration of the media playback.
>
> **[0:12](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=12)** Let's go ahead and add another line directly below our two buttons.
>
> **[0:16](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=16)** And we'll create a container element for this of type div.
>
> **[0:22](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=22)** And we'll give it an ID of time display.
>
> **[0:25](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=25)** This will contain both our position and duration readouts.
>
> **[0:33](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=33)** Let's close that out.
>
> **[0:35](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=35)** And then nested within the time display div, we'll have our two time elements.
>
> **[0:41](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=41)** So set that time, and we'll give this the initial value of 00:00.
>
> **[0:51](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=51)** Since we need two time elements, we're just going to copy this one, control or command + C, add a new line, control, command + V.
>
> **[1:01](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=61)** For each of these, we'll give them a specific ID.
>
> **[1:05](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=65)** And for all of these different elements, the IDs are generally, so that we're able to target them through [[JavaScript]] and the media API later on.
>
> **[1:14](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=74)** Let's name this one position display.
>
> **[1:19](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=79)** And that's going to actually show us the current position of playback.
>
> **[1:26](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=86)** And this secondary ID attribute, we'll call duration display.
>
> **[1:30](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=90)** This will hold the duration of the entire piece of media content.
>
> **[1:36](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=96)** Let's now have a look inside of the web browser to see how these appear.
>
> **[1:41](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=101)** All right, as you can see, it's hard to tell right now because they're black.
>
> **[1:46](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=106)** Let's go ahead and change our CSS a little bit to add some contrasting color.
>
> **[1:51](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=111)** Back to Visual Studio Code, let's expand our head and expand our style.
>
> **[1:58](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=118)** So note here that our anchor elements are being colored Alice blue.
>
> **[2:02](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=122)** Let's go ahead and apply this to time elements as well.
>
> **[2:08](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=128)** So we'll just add ,time.
>
> **[2:11](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=131)** Now the color Alice blue is going to apply to both anchors and time elements.
>
> **[2:17](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=137)** Be sure to save again and have a look in the web browser.
>
> **[2:21](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=141)** There we are.
>
> **[2:22](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=142)** We now have visible time placeholders for both the current position and media duration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[JavaScript]] (1)
> **Env Vars:** html (1), api (1), css (1)
> **Ports:** :00 (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Create a progress bar](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-progress-bar?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-progress-bar?u=76281980&t=0)** - [Instructor] The progress bar will need to adjust dynamically, in reflection of the current playback position.
>
> **[0:06](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-progress-bar?u=76281980&t=6)** In the future, we'll use the same information used to display our time, via time elements, to calculate these different aspects.
>
> **[0:16](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-progress-bar?u=76281980&t=16)** The control bar, or seek bar, is going to have both a rail, which represents visually the entire duration of the video, and then within that, a little bit of control bar fill, which is going to expand or shrink, depending upon the current position of the media itself.
>
> **[0:37](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-progress-bar?u=76281980&t=37)** So, let's go ahead and create that beneath time display.
>
> **[0:41](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-progress-bar?u=76281980&t=41)** This'll once again be a div element that we give a specific id to.
>
> **[0:48](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-progress-bar?u=76281980&t=48)** We'll set this id to controlbarrail, this'll be the container.
>
> **[0:55](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-progress-bar?u=76281980&t=55)** Within controlbarrail, we'll have another div for the controlbarfill.
>
> **[1:05](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-progress-bar?u=76281980&t=65)** And simply close it out just like that.
>
> **[1:09](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-progress-bar?u=76281980&t=69)** If we save this and have a look in the web browser, you'll note that the control bar has no visual elements yet, whatsoever.
>
> **[1:18](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-progress-bar?u=76281980&t=78)** We'll take care of this, and the styling of other elements for playback, in the next set of videos.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Overlay the media controls](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-overlay-the-media-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-overlay-the-media-controls?u=76281980&t=0)** - [Instructor] There are, of course, many ways to present media playback controls to the user.
>
> **[0:11](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-overlay-the-media-controls?u=76281980&t=11)** With this challenge, we want to change the position and stacking of the existing video controls so they are more integrated with the video display itself.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Overlay the media controls](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-overlay-the-media-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-overlay-the-media-controls?u=76281980&t=0)** - [Instructor] Firstly, if we look down inside of the body, you can see what steps I've taken in order to accomplish this.
>
> **[0:16](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-overlay-the-media-controls?u=76281980&t=16)** One thing I've done is I've created a new element called media controls, which is a simple development.
>
> **[0:24](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-overlay-the-media-controls?u=76281980&t=24)** It's within the video container itself.
>
> **[0:27](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-overlay-the-media-controls?u=76281980&t=27)** And within my media controls element, of course, are my various media controls.
>
> **[0:34](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-overlay-the-media-controls?u=76281980&t=34)** In order to make this do anything, we have to style it with CSS.
>
> **[0:41](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-overlay-the-media-controls?u=76281980&t=41)** So here I'm targeting the ID of media controls and then I set the following rules.
>
> **[0:47](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-overlay-the-media-controls?u=76281980&t=47)** Position to absolute.
>
> **[0:50](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-overlay-the-media-controls?u=76281980&t=50)** And absolutely position this 20 pixels to the left and 20 pixels to the bottom.
>
> **[0:58](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-overlay-the-media-controls?u=76281980&t=58)** To make this absolute positioning work in relation to our video container, we also have to set an ID for a video container and provide the rule their, position of relative.
>
> **[1:13](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-overlay-the-media-controls?u=76281980&t=73)** This is going to set the media controls, absolutely positioned, relative to our video container element.
>
> **[1:25](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-overlay-the-media-controls?u=76281980&t=85)** As we see here, the result is that our media controls show up 20 pixels from the left and 20 pixels from the bottom overlaying our video display.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** css (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Style Media Playback Controls

[↑ Back to Table of Contents](#table-of-contents)

#### [Define CSS styles in a document](https://www.linkedin.com/learning/learning-web-audio-and-video/define-css-styles-in-a-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/define-css-styles-in-a-document?u=76281980&t=0)** - [Instructor] Our custom playback components are bare and ugly as they are right now.
>
> **[0:05](https://www.linkedin.com/learning/learning-web-audio-and-video/define-css-styles-in-a-document?u=76281980&t=5)** We'll get ready to stylize them properly using some CSS within our [[HTML]] document.
>
> **[0:11](https://www.linkedin.com/learning/learning-web-audio-and-video/define-css-styles-in-a-document?u=76281980&t=11)** For this we need to pop back over to Visual Studio Code and then scrolling up and looking within our head element, we'll find the style tag that we've added a couple of small styles to, just around color right now.
>
> **[0:26](https://www.linkedin.com/learning/learning-web-audio-and-video/define-css-styles-in-a-document?u=76281980&t=26)** There's a lot more that can be done here.
>
> **[0:28](https://www.linkedin.com/learning/learning-web-audio-and-video/define-css-styles-in-a-document?u=76281980&t=28)** For instance, inside of our body element, let's go ahead and just apply the color of aliceblue to any text.
>
> **[0:37](https://www.linkedin.com/learning/learning-web-audio-and-video/define-css-styles-in-a-document?u=76281980&t=37)** So, we can actually just copy and paste, color aliceblue, right beneath the background-color definition within our body tag.
>
> **[0:47](https://www.linkedin.com/learning/learning-web-audio-and-video/define-css-styles-in-a-document?u=76281980&t=47)** Let's also add a little bit of padding to this, because if we look in our web browser right now, we can see that things are just butting up against the sides really, really close.
>
> **[0:59](https://www.linkedin.com/learning/learning-web-audio-and-video/define-css-styles-in-a-document?u=76281980&t=59)** We want some more room to breathe here.
>
> **[1:02](https://www.linkedin.com/learning/learning-web-audio-and-video/define-css-styles-in-a-document?u=76281980&t=62)** So, we'll add some padding and we'll set that padding on all four sides to 2rem.
>
> **[1:10](https://www.linkedin.com/learning/learning-web-audio-and-video/define-css-styles-in-a-document?u=76281980&t=70)** Additionally, to make sure that all we're dealing with is padding on the body element, we'll set the margins equal to zero.
>
> **[1:19](https://www.linkedin.com/learning/learning-web-audio-and-video/define-css-styles-in-a-document?u=76281980&t=79)** This will ensure that only padding is being used for space here.
>
> **[1:23](https://www.linkedin.com/learning/learning-web-audio-and-video/define-css-styles-in-a-document?u=76281980&t=83)** Let's pop back over to the browser and see how it looks.
>
> **[1:27](https://www.linkedin.com/learning/learning-web-audio-and-video/define-css-styles-in-a-document?u=76281980&t=87)** All right, that's a lot more readable and additionally adds some spacing around our document edges for a bit of breathing room.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** css (1)
> **Tools:** visual studio (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Design your buttons](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=0)** - [Instructor] The button element renders differently depending upon the operating system and browser being used.
>
> **[0:06](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=6)** We'll now make the buttons visually appealing and help standardize their parents across all platforms.
>
> **[0:13](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=13)** Once again within our style tag, let's add a button rule just below body here.
>
> **[0:22](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=22)** The first thing we'll do is add in a background color definition to get rid of that gray that we currently see.
>
> **[0:30](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=30)** I'm going to set this to a specific hex value of 3d followed by four zeros.
>
> **[0:38](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=38)** For this nice kind of rusty dark red color.
>
> **[0:42](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=42)** The next definition will be our boarder color.
>
> **[0:48](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=48)** We'll set this equal to an RGB value that's red, green, and blue, and this value's going to be 82 for red, 82 for green, and finally 82 for blue.
>
> **[1:06](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=66)** Having them all be the same value is going to give us the gray color you see here for a nice boarder around the button edges.
>
> **[1:16](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=76)** All right, moving along.
>
> **[1:17](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=77)** Let's change the actual boarder radius so it's not a complete tight angle.
>
> **[1:24](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=84)** So we'll set boarder radius, and we're going to set this for all four of the corners to eight pixels.
>
> **[1:32](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=92)** That'll give us some nice curved edges.
>
> **[1:35](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=95)** Next we'll set the text color within our buttons so the label of the button.
>
> **[1:41](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=101)** And that's just color.
>
> **[1:43](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=103)** We'll set this, once again, to RGB.
>
> **[1:48](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=108)** This will be another kind of gray, but this time we'll use the value for 180 for each red, green and blue.
>
> **[1:59](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=119)** That gives us a much lighter gray.
>
> **[2:02](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=122)** Still dealing with our text, let's change the font size, and we'll set this to 1.2 rem.
>
> **[2:11](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=131)** That'll make it a bit larger than our normal document size for fonts.
>
> **[2:16](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=136)** We want it to stand out a bit too, so let's increase the font weight to 600.
>
> **[2:22](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=142)** Finally, we'll standardize the height of each of these buttons to 36 pixels.
>
> **[2:31](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=151)** All right, that looks good.
>
> **[2:32](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=152)** Let's have a look at how things have changed within the browser itself.
>
> **[2:38](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=158)** All right so we can see that it's taken care of most things, but we get this strange bevel around the button, and on some operating system, the bevel is the normal boarder style for a button instance, but we can always override that through CSS as well.
>
> **[2:58](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=178)** Let's go back to Visual Studio Code and all we need to do is set our boarder style to solid.
>
> **[3:13](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=193)** Make sure to save once again and then verify in the browser.
>
> **[3:17](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=197)** There we go.
>
> **[3:18](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=198)** Now we get a nice solid boarder instead of that bevel.
>
> **[3:22](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=202)** Any button elements that we use in this document will now be styled to our exact specifications.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Env Vars:** rgb (2), css (1)
> **Versions:** 1.2 (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Style your text](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=0)** - [Instructor] We have a set of time elements to hold and display text values but that element has no inherent styles.
>
> **[0:08](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=8)** Using CSS, we'll apply specific visual properties to this bit of text.
>
> **[0:14](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=14)** Now, notice here that our time display containing both of our time elements also exists as a child of mediacontrols.
>
> **[0:24](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=24)** And really, all of our controls exist within mediacontrols.
>
> **[0:28](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=28)** Let's also set some style information on mediacontrols.
>
> **[0:33](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=33)** So, scrolling up here, we can go to the bottom and actually, we don't need the color definition for anchors and time anymore, because what we're going to do right now is going to really override that.
>
> **[0:46](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=46)** Anyway, so let's remove that bit of CSS, and replace it with mediacontrols, since mediacontrols is an ID, we're going to use the hash to identify this as an ID of mediacontrols.
>
> **[1:06](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=66)** Right below that, we'll create a definition for our time display, which, looking down here, timedisplay contains both of our time elements.
>
> **[1:16](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=76)** So, we'll go ahead, and once again use a hash, since we are targeting a specific ID of timedisplay.
>
> **[1:25](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=85)** With these two definitions created, we now have to add some style rules to them.
>
> **[1:30](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=90)** So, for mediacontrols, we want to set a width, and the width we use, we want to actually match our video element, which, as you can see here, is 600 pixels.
>
> **[1:42](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=102)** So, we'll set the width of mediacontrols to 600 px,
>
> **[1:50](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=110)** and then we'll set the margin top to 0.3rems.
>
> **[2:00](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=120)** Setting a bit of margin on the top is going to put some space between the video element itself and all of our controls.
>
> **[2:08](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=128)** So, a little more breathing room.
>
> **[2:11](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=131)** Let's go ahead and also set margin-bottom to the same value.
>
> **[2:15](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=135)** We'll just copy and paste that and change top to bottom.
>
> **[2:21](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=141)** There we go.
>
> **[2:22](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=142)** The last thing we'll do is set position to relative.
>
> **[2:30](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=150)** Now, setting mediacontrols position to relative isn't really going to change how mediacontrols is laid out and positioned at all.
>
> **[2:39](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=159)** What it will do, is allow us to absolutely position any of the controls within mediacontrols, relative to the mediacontrols container.
>
> **[2:51](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=171)** Let's pop over to timedisplay, and see exactly how that works.
>
> **[2:55](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=175)** So, within timedisplay, I've got a couple of lines of CSS I'm going to paste in here.
>
> **[3:01](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=181)** That's nothing new.
>
> **[3:03](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=183)** We're basically going to set the font family to Courier New.
>
> **[3:08](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=188)** So, this is a monospace font, and it falls back to Courier, which is also monospaced, which falls back to the default operating system monospace, whatever the user has on their system.
>
> **[3:20](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=200)** Each character is a specifically spaced width, so you don't get that shifting as a 1 changes to a 2 and so forth.
>
> **[3:30](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=210)** We're going to set the color of the text to the same value that we actually used for the color of our button border.
>
> **[3:38](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=218)** And the font size, we'll make it a nice big, 1.4rem.
>
> **[3:43](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=223)** All right, so, onto positioning, which is the important bit here, as mentioned, we're going to set the position of our time display absolutely.
>
> **[3:53](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=233)** So we'll set it to absolute.
>
> **[3:56](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=236)** Now, this is positioned absolute to the container element, and the container element for timedisplay is mediacontrols, right?
>
> **[4:05](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=245)** Let's go ahead and specify how the time controls are going to be absolutely positioned.
>
> **[4:12](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=252)** We'll position them absolutely, zero pixels to the right.
>
> **[4:18](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=258)** This is going to pull timedisplay all the way across to the right side of this 600 pixel box called mediacontrols.
>
> **[4:29](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=269)** We'll set the top, how it's positioned from the top, to 15 pixels from the top.
>
> **[4:39](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=279)** And that should be it.
>
> **[4:40](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=280)** Let's go ahead and have a look in the browser, see how it looks.
>
> **[4:45](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=285)** All right, as you can see, we do have that monospace font.
>
> **[4:49](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=289)** So, each one of these characters is exactly the same width, and they're absolutely positioned to the right, at 0 pixels and 15 pixels from the top.

> [!info]- Semantic Content
>
> **Env Vars:** css (3)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Design your progress bar](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=0)** - [Instructor] The progress bar as it currently exists, has absolutely no visual properties whatsoever.
>
> **[0:06](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=6)** We'll now use CSS to style and size the progress bar so that it's useful to the user interacting with our playback.
>
> **[0:14](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=14)** Inside of visual studio code, let's have a look and see how our progress bar is made.
>
> **[0:22](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=22)** So we have our div here, which is a control bar rail id.
>
> **[0:27](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=27)** And this is going to be, sort of the container for our control bar fill div.
>
> **[0:33](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=33)** So we need definitions for both of these.
>
> **[0:36](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=36)** And we'll create those in our style block right up here.
>
> **[0:40](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=40)** Since these are both divs with ids.
>
> **[0:44](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=44)** We can target them specifically with an id.
>
> **[0:47](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=47)** So we use hash, control bar rail.
>
> **[0:49](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=49)** And we can just copy and paste that.
>
> **[0:54](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=54)** And change that to control bar fill.
>
> **[0:58](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=58)** Now for control bar rail, we need some visual, stylistic elements to these.
>
> **[1:04](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=64)** So we're going to set a background color, height and we'll even set a little bit of margin to it to space things out nicely.
>
> **[1:12](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=72)** So we'll set background color.
>
> **[1:16](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=76)** And we're just going to set this to dark red.
>
> **[1:20](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=80)** So if you haven't used colors in CSS before.
>
> **[1:24](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=84)** You'll notice we've done it a number of different ways in this course.
>
> **[1:28](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=88)** So here we've set the background color to a named color of dark red.
>
> **[1:33](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=93)** Here in time display we are using an rgb value specifying the red, green and blue channels.
>
> **[1:39](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=99)** And additionally at some times we use a nice x value.
>
> **[1:45](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=105)** So it really doesn't matter, whatever works for you.
>
> **[1:49](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=109)** Now that we have our background colors set to dark red.
>
> **[1:52](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=112)** Let's set a height of three pixels.
>
> **[1:57](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=117)** This will ensure that it always has some sort of height because if we don't have a height then it's not going to display at all 'cause it's going to be zero pixels in height.
>
> **[2:07](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=127)** So even with the background color it wouldn't show up.
>
> **[2:10](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=130)** Here we'll set the margin bottom to 0.6 rem.
>
> **[2:19](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=139)** And again this is going to set a little bit of spacing between our control bar and whatever follows.
>
> **[2:26](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=146)** Additionally since this will be interactive, we want the user to know that they can click on it.
>
> **[2:31](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=151)** So we can change the cursor to a pointer whenever anybody hovers over this element.
>
> **[2:37](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=157)** And there we are.
>
> **[2:38](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=158)** Let's go ahead and have a look in the browser and see how control bar rail is shaping up before we move on to control bar fill.
>
> **[2:46](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=166)** One thing you'll immediately notice is that our control bar rail is rendering but it's showing up underneath everything else.
>
> **[2:55](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=175)** We actually want it to show up above the buttons and the time.
>
> **[2:59](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=179)** So let's pop over to visual studio code and what we're going to need to do is simply cut both control bar rail and control bar fill from its current position at the end of media controls and then just paste it in up top.
>
> **[3:16](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=196)** If I save this now and we look at the browser.
>
> **[3:19](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=199)** That looks a lot better and we can see that that bottom margin is pushing these buttons down so that they're in line with everything else.
>
> **[3:28](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=208)** Really nice.
>
> **[3:30](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=210)** Alright let's go finish up.
>
> **[3:31](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=211)** Our definition for control bar fill.
>
> **[3:34](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=214)** Scrolling back up to our styles.
>
> **[3:36](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=216)** We're going to set the background color of control bar fill to an rgb value.
>
> **[3:46](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=226)** And here we'll set this to some varying values.
>
> **[3:50](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=230)** The red channel will be 236, green will be 216 and blue is going to be 172.
>
> **[3:59](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=239)** And that gives us that nice sort of orangy yellow color.
>
> **[4:04](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=244)** We can set the height to 3 pixels and this is going to absolutely match the control bar rail.
>
> **[4:13](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=253)** And we'll set the cursor to a pointer.
>
> **[4:16](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=256)** Just as we did before.
>
> **[4:20](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=260)** Okay so if we go ahead and test this now in the browser.
>
> **[4:24](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=264)** You can see that the control bar rail actually completely covers control bar fill.
>
> **[4:30](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=270)** If we wanted to see what they both looked like, sort of in action, what we would have to do is set a temporary width for control bar fill.
>
> **[4:38](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=278)** Back in visual studio code let's just see how that looks.
>
> **[4:46](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=286)** I'll just set a width of 60 pixels just to preview this.
>
> **[4:50](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=290)** And now we can see what it would look like if it was actually playing back a little bit and filling up.
>
> **[4:57](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=297)** Now we've only added this width to test our visual styling.
>
> **[5:01](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=301)** Let's go back inside our visual studio code and remove that width definition as we're going to determine with programmatically moving forward with [[JavaScript]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Tools:** visual studio (4)
> **Env Vars:** css (2)
> **Versions:** 0.6 (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Use web fonts](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-use-web-fonts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-use-web-fonts?u=76281980&t=0)** - [Instructor] While reliance upon standard web-safe fonts is okay, we can always do better.
>
> **[0:12](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-use-web-fonts?u=76281980&t=12)** How would we expand upon the stylistic elements already present in the existing CSS rules to integrate proper web fonts within the video-playback user-interface controls?

> [!info]- Semantic Content
>
> **Env Vars:** css (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Use web fonts](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=0)** - [Instructor] There are a number of ways to use web fonts.
>
> **[0:09](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=9)** But this is the solution that I found to be the most straightforward for this project.
>
> **[0:16](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=16)** And that is through use of [[Google]] Web Fonts.
>
> **[0:20](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=20)** If we look in our project here, we have a link to a Google Web Fonts URL outline six.
>
> **[0:28](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=28)** This is going to include the web fonts for us to use.
>
> **[0:32](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=32)** All you have to do is go to fonts.[google.com](https://google.com) and locate either a specific font or simply browse for a font.
>
> **[0:41](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=41)** So, if I wanted to clear my search, maybe we want to use this one right here.
>
> **[0:46](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=46)** So I could click that and select this style.
>
> **[0:52](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=52)** Once a style is selected, it'll show up in our selected families up here.
>
> **[1:00](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=60)** And we can choose to review or embed these fonts.
>
> **[1:05](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=65)** And there we go, there's the little link that's provided to us that we can place in the head of our [[HTML]].
>
> **[1:12](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=72)** We also get the CSS rule to actually use this family.
>
> **[1:18](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=78)** Referring back to our HTML we can see that link right up here.
>
> **[1:24](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=84)** And if we scroll down inside of our button, we're using that font family that was chosen from Google Web Fonts.
>
> **[1:36](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=96)** Let's have a look and see how this appears inside the web browser.
>
> **[1:40](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=100)** All right, here we can see the chosen web font applied and visible on our buttons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (4), [[HTML]] (2)
> **Env Vars:** html (2), url (1), css (1)
> **UI Navigation:** go to (1), scroll down (1)
> **URLs:** [google.com](https://google.com) (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Work with the Media API

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of media API](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=0)** - [Instructor] Both audio and video elements can tap into the [[HTML]] 5 media API.
>
> **[0:05](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=5)** We'll make use of this application programming interface to not only wire up expected playback controls, but also to read certain media properties, and respond to various events.
>
> **[0:17](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=17)** What we'll need to do is to create a script tag within our content here.
>
> **[0:22](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=22)** So let's go all the way down to the bottom of our body, and we'll insert a script tag.
>
> **[0:31](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=31)** Adding any [[JavaScript]] at the end of our body is going to insure that all of these different items have rendered already, and are addressable via JavaScript.
>
> **[0:41](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=41)** One additional change we'll need to make, is to put an ID on our video element, so that we can address it through the API.
>
> **[0:49](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=49)** We'll set ID equal to videoelement.
>
> **[0:56](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=56)** And there we are.
>
> **[0:59](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=59)** Going back down to our script tag here, all we're going to do is set up and define a bunch of variables that point to some of these specific document elements.
>
> **[1:10](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=70)** We'll create a new variable with the keyword var, and the variable name is going to be media.
>
> **[1:17](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=77)** This is going to point to our audio or video.
>
> **[1:20](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=80)** In this case, our video.
>
> **[1:22](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=82)** We'll set that equal to document.querySelector,
>
> **[1:31](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=91)** and we're going to query for the video element ID.
>
> **[1:36](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=96)** So this will be a string, we'll use a hash since this is an ID, and this is the video element that we just gave the ID name of #videoelement.
>
> **[1:50](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=110)** So pretty straightforward.
>
> **[1:52](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=112)** We're going to go ahead and create a bunch of these, so I'm just going to copy this, and paste it as we need it.
>
> **[2:00](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=120)** So the next thing is pointing to our play button, which we'll call play.
>
> **[2:06](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=126)** Once again, this is going to point to an ID of #playbutton.
>
> **[2:14](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=134)** We'll do the same thing for the pause button.
>
> **[2:17](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=137)** We'll set that to a variable name of pause, and the ID its targeting is #pausebutton.
>
> **[2:27](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=147)** We'll also need to set variables for the position and duration text elements.
>
> **[2:36](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=156)** There is position, and that's going to target position display.
>
> **[2:48](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=168)** And then we'll have duration.
>
> **[2:51](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=171)** Which of course targets duration display.
>
> **[2:59](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=179)** The final two pieces we need are of course our progress bar rail and fill.
>
> **[3:05](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=185)** So I'll put in two more of these lines here, one for a rail which targets #controlbarrail, and then fill, targeting #controlbarfill.
>
> **[3:22](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=202)** Okay, we've now set up simple references to all the dom elements we'll need to address through code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[HTML]] (1)
> **Env Vars:** api (2), html (1)
> **CLI Commands:** make (2)
> **Prerequisites:** set up (2)
> **Code Identifiers:** queryselector (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Listen for Media events](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=0)** - [Instructor] Through the HTML5 media API, we can listen for certain events and respond to those events as a function of our custom playback controls.
>
> **[0:09](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=9)** This allows us to monitor and respond to user actions and playback events.
>
> **[0:14](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=14)** Within our script tag, we're going to add a couple more empty lines here, right after our variable definitions.
>
> **[0:22](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=22)** And here we can add some event listeners to the play button, pause button, rail, and our actual media element.
>
> **[0:31](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=31)** First of all, we're do so for play, which once again refers to our play button.
>
> **[0:38](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=38)** We'll add an event listener of type click.
>
> **[0:46](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=46)** So this'll fire off whenever the user performs some sort of a click action upon the button.
>
> **[0:52](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=52)** When that happens, it's going to invoke a specific function.
>
> **[0:55](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=55)** We're going to name this function playMedia because that's what it's going to do is play the media for us.
>
> **[1:04](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=64)** Notice in my function definition here that I've actually used an uppercase M.
>
> **[1:09](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=69)** This is going to be very important because we need this name to match exactly with our function name.
>
> **[1:16](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=76)** On the next line, we'll create the function itself.
>
> **[1:20](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=80)** So declare it with the name function, and then name the function playMedia.
>
> **[1:28](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=88)** We're not going to have anything within the body of the function just yet.
>
> **[1:32](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=92)** We simply want to set up these different event listeners for now.
>
> **[1:37](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=97)** We'll add all of the logic later.
>
> **[1:40](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=100)** Alright, so we can actually copy this and reuse it for our pause button.
>
> **[1:44](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=104)** So if I copy and then paste, all we need to do is change play to pause.
>
> **[1:52](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=112)** So pause.addEventListener of type click, and for that we want to pause our media, and don't forget to change the function name as well.
>
> **[2:04](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=124)** There we are.
>
> **[2:06](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=126)** The next thing we'll do is actually add event listeners to both the rail and the fill.
>
> **[2:14](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=134)** So rail.addEventListener, and this again is going to be of type click, and this will perform a seek for us across the timeline.
>
> **[2:24](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=144)** So we're going to name this function seekMedia.
>
> **[2:31](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=151)** There we are.
>
> **[2:32](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=152)** We also are going to add this for our fill, because we want the user to be able to click on either the rail or the fill.
>
> **[2:41](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=161)** It really doesn't matter and interestingly enough, this is going to also fire that exact same function seekMedia.
>
> **[2:54](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=174)** Now the difference here is we want to pass in the event that gets fired, this click event through seekMedia, so that we can use it later on.
>
> **[3:05](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=185)** So we just pass that in as a little argument called e.
>
> **[3:09](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=189)** You could actually name it whatever you like.
>
> **[3:11](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=191)** I find e to be pretty descriptive because it stands for event.
>
> **[3:19](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=199)** There we are.
>
> **[3:20](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=200)** Now, the last type of events we want to listen for are a little bit different because they're based on the video element or media itself.
>
> **[3:28](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=208)** We want to update the time whenever the [[Metadata]] is initially loaded in our video, and whenever a time update event fires within our video.
>
> **[3:39](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=219)** So let's go ahead and add some event listeners for both of those particular events.
>
> **[3:48](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=228)** So setting media.addEventListener, and of course this isn't going to be of type click whatsoever, we want to listen for loaded metadata.
>
> **[4:02](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=242)** When a loadedmetadata event happens, we want to update our time so we will invoke a function called updateTime.
>
> **[4:13](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=253)** That looks pretty good.
>
> **[4:16](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=256)** I'm going to copy this because we also want to listen for the timeupdate event.
>
> **[4:26](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=266)** When the timeupdate event fires, we also want to update our time so we're going to actually invoke that same exact function updateTime.
>
> **[4:36](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=276)** The last thing we need to do is just create the function.
>
> **[4:44](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=284)** And there we are.
>
> **[4:45](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=285)** So while these functions don't yet contain any instructions whatsoever, all the interactive elements we've established are now appropriately connected and just waiting to be given the appropriate commands.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (2)
> **Code Identifiers:** addeventlistener (3), seekmedia (3), playmedia (2), updatetime (2)
> **Env Vars:** html5 (1), api (1)
> **Definitions:** refers to (1), stands for (1)
> **CLI Commands:** find (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Program button controls](https://www.linkedin.com/learning/learning-web-audio-and-video/program-button-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/program-button-controls?u=76281980&t=0)** - [Instructor] We've created a set of button elements representing core playback functions, but even though these buttons are stylized nicely, they will not yet respond to user interaction.
>
> **[0:12](https://www.linkedin.com/learning/learning-web-audio-and-video/program-button-controls?u=76281980&t=12)** We'll change that through use of the media API.
>
> **[0:15](https://www.linkedin.com/learning/learning-web-audio-and-video/program-button-controls?u=76281980&t=15)** Let's go down to where we created our different event listeners and we'll find our play and pause functions that play and pause our media.
>
> **[0:26](https://www.linkedin.com/learning/learning-web-audio-and-video/program-button-controls?u=76281980&t=26)** For each of these, we'll want to add a line in between the curly brackets, this is where our function commands are going to go, and it's actually super simple to get the media to play and pause.
>
> **[0:40](https://www.linkedin.com/learning/learning-web-audio-and-video/program-button-controls?u=76281980&t=40)** All we need to do is refer to our video element variable, which we've named media, and for media we'll just say play for play media, and we're going to do something very similar for pause media, we'll say media pause, and that's really all there is to it.
>
> **[1:05](https://www.linkedin.com/learning/learning-web-audio-and-video/program-button-controls?u=76281980&t=65)** Let's test it out in the web browser.
>
> **[1:07](https://www.linkedin.com/learning/learning-web-audio-and-video/program-button-controls?u=76281980&t=67)** If I hit play.
>
> **[1:09](https://www.linkedin.com/learning/learning-web-audio-and-video/program-button-controls?u=76281980&t=69)** (waves crash) There it goes.
>
> **[1:12](https://www.linkedin.com/learning/learning-web-audio-and-video/program-button-controls?u=76281980&t=72)** And pause.
>
> **[1:14](https://www.linkedin.com/learning/learning-web-audio-and-video/program-button-controls?u=76281980&t=74)** The media API already has direct access to the play and pause functions.
>
> **[1:19](https://www.linkedin.com/learning/learning-web-audio-and-video/program-button-controls?u=76281980&t=79)** We've just wired up our buttons to take full advantage of that.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Dynamic time display](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=0)** - [Instructor] Using the HTML5 media API we can read the current position and duration of our audio or video content.
>
> **[0:08](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=8)** And display a user readable time for each value within the established time element.
>
> **[0:14](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=14)** Let's go ahead and look to our updateTime function which right now is way at the bottom of our script tag.
>
> **[0:21](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=21)** And, if you remember, this is called whenever meta data is loaded into our video and also whenever the time is updated.
>
> **[0:30](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=30)** So this is the current time if it's playing.
>
> **[0:33](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=33)** So, within updateTime, what we need to do is actually set the text content of both our position and duration elements to the media current time and media duration.
>
> **[0:46](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=46)** Let's do position first.
>
> **[0:50](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=50)** So we'll set position.textContent.
>
> **[0:55](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=55)** This is the value of the text between our position tags and our time element.
>
> **[1:02](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=62)** If we go ahead and scroll back up to refresh ourselves, we can see there's positiondisplay and here is the text content right there.
>
> **[1:11](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=71)** Just a placeholder for now.
>
> **[1:13](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=73)** That's what we'll be changing inside of updateTime.
>
> **[1:16](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=76)** And to change that we'll set it equal to timeDisplay.
>
> **[1:23](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=83)** And timeDisplay is a function that does not yet exist.
>
> **[1:27](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=87)** What it does is converts raw time to a user readable time of minutes and seconds.
>
> **[1:34](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=94)** It's going to accept a piece of raw time.
>
> **[1:37](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=97)** In this case we'll grab it from media.
>
> **[1:40](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=100)** So we'll set media.currentTime.
>
> **[1:48](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=108)** Media.currentTime is the current time or the play head position of our video element.
>
> **[1:54](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=114)** Now, as mentioned the timeDisplay function itself doesn't exist yet.
>
> **[1:59](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=119)** If you look within the exercise files for this specific chapter and video you'll find a snippets.txt file.
>
> **[2:08](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=128)** Inside of snippets.txt is our timeDisplay function, which I'm going to paste in right down here.
>
> **[2:17](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=137)** And just perform some formatting on it so it looks a bit nicer.
>
> **[2:22](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=142)** You don't necessarily have to do that but I always like things to look nice in my code.
>
> **[2:29](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=149)** There we go.
>
> **[2:30](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=150)** So, this particular function timeDisplay, as mentioned, it takes in some raw time and then it determines both minutes and seconds based on the time that we pass in.
>
> **[2:41](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=161)** And what it'll do is actually check to see if minutes is actually less than 10.
>
> **[2:48](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=168)** If it is, then it prepends a zero to our minutes and the same thing for seconds.
>
> **[2:54](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=174)** If seconds are less than 10 it'll prepend a zero to that, and then it'll stick minutes and seconds on either side of a colon before returning it.
>
> **[3:06](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=186)** So, when it returns it, it's going to set it to that text content.
>
> **[3:12](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=192)** Now, we don't just need to do this for position.
>
> **[3:15](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=195)** We need to do it for duration as well.
>
> **[3:17](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=197)** So let's copy and paste in order to duplicate this and change it for duration.textContent.
>
> **[3:27](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=207)** And instead of media.currentTime, we're going to set this to media.duration.
>
> **[3:36](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=216)** All right, let's have a look and see how this works.
>
> **[3:40](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=220)** Going back to the web browser.
>
> **[3:43](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=223)** Okay, we can see immediately that we have a 46 second duration video.
>
> **[3:50](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=230)** And if I play, the current time or position is updated as things move along.
>
> **[4:00](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=240)** Of course pausing is going to pause that and playing with continue playing.
>
> **[4:09](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=249)** We now have this great dynamic time readout that lets the user know both the current time and the total duration of our media.

> [!info]- Semantic Content
>
> **Code Identifiers:** timedisplay (5), updatetime (3), currenttime (3), textcontent (2)
> **File Paths:** snippets.txt (2)
> **Env Vars:** html5 (1), api (1)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Wire up the progress bar](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=0)** - [Lecturer] Using the same data gathered from the HTML5 Media API for discovering the values of our text element we can determine how wide to adjust the progress bar itself and also allow the user to seek across the duration of the media by interacting with the progress bar.
>
> **[0:19](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=19)** The first thing we need to pay attention to is the seekMedia function.
>
> **[0:23](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=23)** So if we scroll down here to seekMedia, this is invoked whenever somebody clicks on the rail or the fill, either one does the exact same thing, it invokes seekMedia.
>
> **[0:36](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=36)** And so here is where we need to actually set some values up, what we're going to set is the current time of our media element, based upon where the user has clicked on this bar.
>
> **[0:48](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=48)** So I'll set media.currentTime equal to, and here is where our little argument for our click comes into play, this is an event, a click event that comes through and we identify that here as e, so we can gather different information from e.
>
> **[1:13](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=73)** So, for example, we want to get from our event the offsetX, now this is the x position of where the mouse actually clicked on either the rail or the fill.
>
> **[1:29](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=89)** We're going to divide that value by the offsetWidth of our rail, so the rail being the full, filled up length of our progress bar.
>
> **[1:41](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=101)** So we'll say rail, and from here we're going to use the offsetWidth.
>
> **[1:51](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=111)** Once we have the offsetX from our click event divided by the offsetWidth of rail all we need to do is multiply this by the duration of our media element.
>
> **[2:07](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=127)** The duration is going to represent the entire filled bar.
>
> **[2:12](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=132)** All right, so that's going to set the currentTime that will effectively seek our media but we still need to go ahead and adjust the fill of our progress bar to make sure that it's in line with what's been played so far and the current active position of our media.
>
> **[2:33](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=153)** To do that we need to go ahead and go back to updateTime which is right below here, and as the time updates we're going to, of course, change the textContent of our position and duration time elements but we also need to change the width of the fill.
>
> **[2:53](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=173)** To do that we're going to create a new variable called currentLength.
>
> **[2:57](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=177)** So, var currentLength and we'll set this equal to the clientWidth of our rail, so rail.clientWidth and we'll multiply this by, and be sure to put these in parentheses here, coz we need these to calculate first before they're multiplied by clientWidth of the rail, and that is the media.currentTime divided by the media.duration All right, that's going to give us the width in pixels to apply to our fill, so we'll set fill.style.width
>
> **[3:51](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=231)** and we'll simply set that to our currentLength and this has to be in pixels, so we'll append a string of `px` to the currentLength.
>
> **[4:06](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=246)** All right, let's go ahead and test it in the browser.
>
> **[4:11](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=251)** We'll hit Play and we can see there is our actual rail filling up nicely in line with the time that's been elapsed, and if I click on that rail anywhere, we do seek and the bar fills up accordingly.
>
> **[4:29](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=269)** - [Man in The Video] I can smell the ocean.
>
> **[4:32](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=272)** - [Lecturer] Not only does the progress bar act as a UI element itself but it also acts as just another visual indicator, letting the user know his or her current position in our media.

> [!info]- Semantic Content
>
> **Code Identifiers:** currentlength (4), seekmedia (3), currenttime (3), offsetwidth (3), clientwidth (3)
> **Speakers:** - [lecturer] (2), - [man (1)
> **Env Vars:** html5 (1), api (1)
> **UI Navigation:** scroll down (1), click on (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)

#### [Challenge: Show and hide the controls](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-show-and-hide-the-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-show-and-hide-the-controls?u=76281980&t=0)** - [Instructor] In order to keep the user-focused on video content alone, it might be beneficial to hide the toolbar when not in use.
>
> **[0:14](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-show-and-hide-the-controls?u=76281980&t=14)** And then activate it when we detect user interest.
>
> **[0:18](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-show-and-hide-the-controls?u=76281980&t=18)** How might we program our content to show and hide the video playback controls based upon user interaction?

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Show and hide the controls](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=0)** - The solution I came up with for this involves a little bit of [[JavaScript]].
>
> **[0:12](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=12)** So if we scroll down, into our JavaScript area, what we do is define a new variable called mc.
>
> **[0:25](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=25)** We perform a querySelector on our document for an id of mediacontrols.
>
> **[0:31](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=31)** Mediacontrols encompasses all of our media controls, as we can see right here.
>
> **[0:39](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=39)** We're going to add two EventListeners to the actual media object, which we've already defined before this challenge.
>
> **[0:49](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=49)** This is the videoelement.
>
> **[0:53](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=53)** We set an EventListener onto media for a mouseenter event.
>
> **[0:59](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=59)** And we set another event on media for a mouseleave event.
>
> **[1:05](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=65)** When a mouseenter is detected, we're going to showControls, and we invoke a function to do so.
>
> **[1:13](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=73)** That function is directly beneath here.
>
> **[1:16](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=76)** Function showControls, and for that we're simply setting the mediacontrols style display attribute to block.
>
> **[1:27](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=87)** That's going to ensure that we can see our controls.
>
> **[1:31](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=91)** Because when we perform a mouseleave, and invoke the hideControls function, we set that style.display attribute to none, which basically is going to make our controls invisible to the user.
>
> **[1:49](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=109)** Let's see how this works out inside of our content.
>
> **[1:54](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=114)** So here is our video element.
>
> **[1:56](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=116)** Once it detects a mouse enter, the control's display attribute is set to block, and once it leaves, the control's display attribute is set once again to none.
>
> **[2:10](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=130)** Note, of course, that you also need to set the display attribute to none if you wanted to start in its invisible state.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **Code Identifiers:** showcontrols (2), queryselector (1), hidecontrols (1)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - the (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Further information](https://www.linkedin.com/learning/learning-web-audio-and-video/further-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/further-information?u=76281980&t=0)** - [Joseph] In this course, we explored the use of audio and video on the web.
>
> **[0:05](https://www.linkedin.com/learning/learning-web-audio-and-video/further-information?u=76281980&t=5)** We began with an overview of web based media and followed that up with an examination of the usage of both native audio and video elements of the modern web.
>
> **[0:16](https://www.linkedin.com/learning/learning-web-audio-and-video/further-information?u=76281980&t=16)** We then set about creating and styling a custom set of media playback controls.
>
> **[0:21](https://www.linkedin.com/learning/learning-web-audio-and-video/further-information?u=76281980&t=21)** Finally, we made it all truly interactive with the use of the HTML5 Media API giving the user full control over web based audio and video media.
>
> **[0:32](https://www.linkedin.com/learning/learning-web-audio-and-video/further-information?u=76281980&t=32)** I'm Joseph Labrecque and thanks for joining me.

> [!info]- Semantic Content
>
> **Env Vars:** html5 (1), api (1)
> **Speakers:** - [joseph] (1)


## Instructor

- [[Joseph Labrecque]]

## Resources

- Exercise files available

## Skills Covered

- Web Standards
- Interactive Web Content

## Path Context

### In [[Advance Your Skills in HTML]]
← [[Building Great Forms with HTML and CSS]] | **9 of 11** | [[HTML- Structured Semantic Data]] →

## Appears In

- [[Advance Your Skills in HTML]]

## Related Courses

_Courses sharing skills:_

- [[CSS- Animation]] — Interactive Web Content

---

[↑ Back to top](#)