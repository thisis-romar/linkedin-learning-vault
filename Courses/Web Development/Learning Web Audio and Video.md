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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/build-interactive-audio-and-video-into-your-websites-and-applications?u=76281980&t=0)** - [Joseph] Hi, I'm Joseph Labrecque. In this course, we'll examine how to work with audio and video on the web using native web technologies. [[HTML]], CSS, and [[JavaScript]]. First, we'll begin with an overview of web-based media and see how to link to and embed such media as part of an existing webpage. We'll then proceed with an examination of the usage of both native audio and video HTML5 elements, and their common attributes. Next, we'll set about creating and styling a custom set of media playback controls in order to standardize the look and functionality of our playback across web browsers. Finally, we'll make it all truly interactive through the use of the HTML5 media API, giving the user full control over web-based audio and video media. Alright, let's get going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[JavaScript]] (1)
> **Env Vars:** html5 (2), html (1), css (1), api (1)
> **CLI Commands:** make (1)
> **Speakers:** - [joseph] (1)

#### [What you should know](https://www.linkedin.com/learning/learning-web-audio-and-video/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/what-you-should-know?u=76281980&t=0)** - [Instructor] While you don't necessarily need to know any advanced programming skills to begin working with this content, it is helpful to have a background in native web technologies. In this course, we'll be dealing with [[HTML]], CSS and [[JavaScript]]. Again, while you don't really need anything but basic knowledge of these concepts to get started, it might be helpful to review some of the basics. There are a plethora of courses on [[LinkedIn]] Learning that can help you build up these skills. I suggest having a look at [[HTML Essential Training]] with James Williamson, Introduction to CSS with Carrie Dils, and [[JavaScript Essential Training]] with Morton Rand-Hendriksen. You may also be interested in other details of HTML audio and video not covered in this course. For a great overview of the history of web media and various codex involved, I recommend Learning HTML5 Video with Tom Green and Delivering Video and Web Experiences with Tom Green. Once familiar with these foundational concepts, you'll be ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[JavaScript]] (2), [[LinkedIn]] (1)
> **Env Vars:** html (3), css (2), html5 (1)
> **Speakers:** - [instructor] (1)

#### [Use the exercise files](https://www.linkedin.com/learning/learning-web-audio-and-video/use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/use-the-exercise-files?u=76281980&t=0)** - [Instructor] The exercise files for this course are separated into specific folders. You can either follow along from the beginning, which is what I recommend, or you can jump in at any specific movie. Each folder has a selection of files inside. Most are going to be just a simple index.[[HTML]], but you can also find snippets.txt files here and there. You can copy the contents of each of these folders into your own project to jump to any specific point. Note that all media being used can be found in the media folder at the root of our exercise files. This is in order to avoid duplication of large media files across the project. Once you have all your project files organized, you'll be ready to follow along.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/what-s-new-in-this-update?u=76281980&t=0)** - [Instructor] This course has been updated with new videos. The new videos appear at the end of each chapter as a pair. You will first be presented with a specific challenge which expands upon what you've learned from the chapter with one possible solution being shown in the second video immediately afterwards. I suggest you try and solve the challenge yourself before viewing the solution video.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 1. Get Started with Web-Based Media

[↑ Back to Table of Contents](#table-of-contents)

#### [Set up your environment](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=0)** - [Instructor] We need to install and configure a text editor for editing [[HTML]] markup. We'll be using [[Microsoft]] Visual Studio Code for this course, but you can use any editor that you wish. Visual Studio Code is a free cross-platform, powerful editor for native web technologies. You can download Visual Studio Code by visiting code.[visualstudio.com](https://visualstudio.com). Then you simply click the download button for your platform. I'm on [[Windows]] here, so I'm going to download the Windows stable build. The Visual Studio Code setup installer is now being installed to my Windows machine. With the installer downloaded to my downloads folder, I can go ahead and double-click to install this. As you can see, I already have Visual Studio Code currently installed and running on this machine, so I don't need to install it. I'll hit cancel. However, if you have not installed Visual Studio Code yet, be sure to go through with the installation. We'll now pop over to Visual Studio Code itself. One additional thing that might be useful, and it's not entirely necessary, but it's something I like to do when working with native web technologies, is to install an extension called Live Server. For that, we can go into our extensions, which is this icon right here. And then we can search for Live Server. And here we are. We select Live Server and click install. When you install extensions inside of Visual Studio Code,
>
> **[1:34](https://www.linkedin.com/learning/learning-web-audio-and-video/set-up-your-environment?u=76281980&t=94)** you must reload the entire application for them to become activated. All right, as we can see, we now have Live Server installed and activated within Visual Studio Code. We now have all the tools necessary to work with audio and video playback for the web.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=0)** - [Instructor] We'll now establish a project folder and create a new [[HTML]] document with standard boiler plate structures. We'll establish a documents head, body and the necessary meta data elements. As you can see, I already have a project folder established. I've simply called it project. You can call this whatever you wish and to actually open up your project folder inside of Visual Studio Code, all you need to do is just drag and drop inside of the window and as you can see, it's now open. I don't have any files in here yet so let's create a new file inside of our project by clicking on the new file icon. I'll name this new file index.html. With this index created, I'm going to insert some boiler plate code through copy and paste inside of my editor. Here we go ahead and define our document type as HTML. We set the language to English or EN and then we enter the head of our document. Every HTML document has both a head and a body. Within the head, we set the character set in a meta tag to utf-8. Inside of title, we can give this any sort of title we want. I'm just calling it audio and video because that's what we're covering in this course. I'm then using a style tag to define the bodies background color to a nice dark charcoal. We then close out the head and establish the body itself.
>
> **[1:38](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-new-document?u=76281980&t=98)** The body is where any of the visual elements that we create including audio and video tags will appear. Let's go ahead and just add an extra line to our body to prepare for additional code. Be sure to save using file, save or control or command S. We now have a basic HTML document to work within.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=0)** - [Instructor] We'll now see how to establish standard links to media files via [[HTML]] tags using anchor elements. This includes both a standard link, and a more modern direct download link. What we're going to first do is add in a piece of media, which is a video mp4 file into our project. To do that, we'll first establish a media folder within the project by clicking the new folder icon, and we'll give it a name of media. With that created, we can look within our exercise files, within the media folder, and find all the different pieces of media we'll be using in this course. I'm going to choose video.mp4, and what we'll do is just drag this out and into the media folder inside of Visual Studio Code. As you can see the mp4 is placed within the media folder, and we can always collapse or expand that folder as we wish. If Visual Studio Code also tries to open up that file in a new tab, we can see that the file's not able to be displayed, we can just close that, we don't need that to be open. What we'll do next is actually create an anchor element that points to that file. So create an anchor element, and set the href attribute equal to the media folder and the video.mp4 file within it. We'll close out that tag and add a little bit of text
>
> **[1:36](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=96)** for the value. The text we'll add will simply say video file. Alright, now since we added a new element, this anchor element, let's go ahead and add some definition for that in our CSS styles. I'm going to do some quick formatting here, just some basic indents and new lines to make this a bit more readable. Alright, there's our body, and now we're going to put in an anchor tag CSS definition. And what we'll do is simply change the color. So put that color style in there, and we'll set that to Alice blue. The color Alice blue is going to work really well against our dark gray background. Go ahead and do a Cmd or Ctrl + S to save, and then we'll test this out in the browser. Let's make use of the live server extension that we installed. As you'll note here, we have the option to go live, and I'll just click on that, and it lets us know that the server's started on port 5500. Popping over to our web browser we see that we have our video file link here, and if we click on it, right now it just opens up that mp4 in the tab that we're currently in, and it just begins playing. Let's hit back so we're back at index.html,
>
> **[3:11](https://www.linkedin.com/learning/learning-web-audio-and-video/link-to-media-content?u=76281980&t=191)** and then we'll pop back over to Visual Studio Code, and we'll make some additions and changes to this code. So there's the video file right there, I'm going to go ahead, select that and copy it with Ctrl or Cmd + C, and on a new line I'll put a little pipe character, and then paste in that same code. Now instead of video file, I'm going to change the text here to download video file, because we want this to be a direct download. I'll copy the path media/video.mp4, again using Cmd or Ctrl + C, and what we can do is set a download attribute. And we'll paste in that exact same value. What this does is tells the browser that we actually want to directly download the file and not play it back inside the web browser at all. Let's go ahead and once again Ctrl or Cmd + S to save, and then pop back over to your web browser. Alright, as you can see, we have both video file, and the new download video file option. If we click download video file, there we go, the video file downloads to our downloads folder, and then we're able to play it back in any software that supports mp4 playback.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/use-embedded-media?u=76281980&t=0)** - [Instructor] We can also use iframe elements to embed externally hosted media content directly within our [[HTML]] from any service that supplies and allows cross-domain embed codes. Let's go ahead and add that to our body, and we'll place it directly after our download video file link, we'll put some space in there, and scroll down a bit, and the first thing I'll actually put in here is a horizontal rule, so an HR element just to separate both of these. With that done, we'll now insert an iframe that points to our video. So establishing an iframe element will set a src, or source attribute, and this is going to point to the exact same spot that our anchors point to. Media/video.mp4. We'll also set a direct width and height for this iframe, so we'll set the width equal to 640 pixels, and we'll set the height to 360 pixels. With that done we'll close out our iframe and hit Cmd or Ctrl + S to save. Notice that I have my live server still running on port 5500, but if it wasn't running right now, I could just click it again and it would fire
>
> **[1:33](https://www.linkedin.com/learning/learning-web-audio-and-video/use-embedded-media?u=76281980&t=93)** the live server up for me. If you ever want to stop the live server, you can of course just click it to close the server, it's basically a toggle. Let's pop back over to our web browser to see the iframe content. (waves crash) An iframe allows us to embed the video for playback directly within our html page view. You can also use an iframe to display other media, even additional html documents.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-remove-the-iframe-border?u=76281980&t=0)** - [Instructor] The iframe works well for displaying our video, but by default, browsers render an ugly border around the content. This is undesirable. How might we clean up the display of this iframe content by removing the border?

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Remove the iframe border](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-remove-the-iframe-border?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-remove-the-iframe-border?u=76281980&t=0)** - [Instructor] All right, one possible solution to this is to actually use CSS in order to redefine the border value of the iframe. If we look a little down here, there's our iframe, and we haven't actually done anything to the iframe attributes whatsoever. But up above inside of our style block, within the head of our [[HTML]] document, what we have is an iframe definition. And in there, we target the border attribute and we set its value to none. This effectively removes the border from our iframe and things look a lot nicer.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=0)** - [Instructor] We'll now clear out our [[HTML]] document, removing all linked content and embeds, and prepare it for working with audio elements and attributes exclusively. So, what we'll do, I'll go ahead and just collapse our style. Inside of Visual Studio Code, you're able to go ahead and use these little widgets here to expand and collapse different elements and the nested elements within them. So to make things a little bit easier to see, I'm going to collapse the entire head tag. Here we have our different links and iframe embeds for the body, and removing them is just as easy as selecting them and hitting delete or Backspace. With that done, we can now insert our basic audio tag. So I'll start out an HTML tag with that character there, and as you can see, Visual Studio Code is going to suggest a number of different elements to us, and here is audio right here, we can either select that or type it out. I'm going to select it by arrowing down in the list and then hitting Return or Enter, and now we have audio. If I close that off, it closes the audio tag completely. Let's go ahead and see how this looks in the web browser, but first, save your document using Command or Control + S, and then as you note here, our live server is running, and here inside of our HTML, we don't see anything whatsoever. I'm going to go ahead and choose Inspect.
>
> **[1:33](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-audio?u=76281980&t=93)** I'm using [[Google]] Chrome here, but just about every web browser has the ability to inspect elements through developer tools. I'm going to turn off that mobile view, and just have look at the different elements that we have inside the body here. Alright, so there's our audio element that we just created, and you'll notice that it has no visual properties whatsoever. Let's go back to Visual Studio Code and change that. So, inside our audio tag, the audio tag itself in HTML has absolutely no visual styling, unless you apply the browser based controls to it, and the way you do that is just to insert an element, and the way you do that is to just insert an attribute called controls, just like that. What this is going to do is to tell the web browser that we want it to take over and apply its own visual stylistic controls to our audio element. We'll go ahead and save this once again, and have a look in the browser. Alright, as we can see here, our element definitely has controls now, however, there is no actual audio file that's being used with this audio element, so we can't actually play anything back just yet. Note also that adding the controls attribute, it tells the browser to render its own visual style upon the element. Every single browser is going to style this differently, so if it looks different in yours, that's why.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-an-audio-source?u=76281980&t=0)** - [Instructor] The source attribute allows us to specify the source file for our audio playback. This is the audio content that will play using the [[HTML]] audio element. The first thing we're going to have to do is have a look inside of our media folder within the project because right now we only have an MP4 video file. If we have a look inside of our exercise files within the media folder, we can see audio.mp3. This is an audio file that we can use in our project, we'll just copy and paste that or even just drag it into the media folder inside of Visual Studio Code. It now exists inside our MP4, inside the media folder, and again, if it opens up inside of Code in a tab, we can close that tab. With that file within our media folder, we can now set a source or SRC attribute on the audio element. And we can set it equal to media/audio.mp3. Let's go ahead and test this out inside of the browser. All right, we can already see that we have a duration here populated. Some of it's been preloaded and so forth. Let's go ahead and hit play, and note we're also able to drag things around and just use these full controls on the audio element.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=0)** - [Instructor] The source attribute allows us to specify a single audio file source. But nesting multiple source elements within our audio element allows us to specify primary and secondary sources. Let's go ahead and actually remove the src or source attribute here, I'm going to use Command or Control + X to simply cut this out 'cause we can repurpose it for the different source texts we're going to create. Within the audio element itself, we're going to nest additional elements. And these are of type source. So just type in source and we're going to paste in, using Control or Command + V, the source src attribute here. Initially, the primary source is going to point to this mp3 file. Now you've got some additional attributes you can use for the source, such as the type. This helps inform the browser in terms of exactly what codec is being used and what container. So if we set type equal to audio in this case and mpeg for MPEG, this is going to let the web browser know that this a MIME type of audio/mpeg. We'll then close that out and set our secondary source. The secondary source exists if the browser is unable to play the first source, or the primary source. And it's set up exactly the same way. So we'll set the source tag
>
> **[1:33](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-multiple-audio-sources?u=76281980&t=93)** and here I'm setting it to media/audio.mp3 but that doesn't make a lot of sense because we need to use a different file type. I'm going to use a file type called ogg. Of course, I need to actually use this file inside of our project. So let's bring up our File Explorer once again. So here, you'll note that along with our audio.mp3, we also have an audio.ogg. This is the exact same file, except this one's been encoded to a different format. Go ahead and drag that OGG file into your media folder within Visual Studio Code and that makes it available for us to use. Here, we'll once again set the type and this time it's going to be audio/ogg. Note that you can additionally specify specific codec being used. In this case, we're using an Ogg Vorbis codec. So, we'll put a semi-colon in there, right after the MIME type and specify codecs equals vorbis. With that done, we'll then close out our source element. Go ahead and save your file and we can have a look in the web browser. Now, you're not going to notice anything different because [[Google]] Chrome can play back an mp3 file just fine. However, if you are using a browser that could not play back an mp3 file, the Ogg Vorbis audio file would be loaded up in its place.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/include-fallback-content?u=76281980&t=0)** - [Instructor] What would happen if an older web browser is being used which doesn't support the [[HTML]] 5 audio element at all? We can easily specify fallback content in such cases. What we'll do is just insert a little bit of content within the audio tag just directly after our different source listings. So, I'll paste in a little text message here that says sorry, your browser does not support the audio element. Now we have a fallback in case it's an HTML 5 compatible browser that does not support MP3. It'll go to OGG, and if it doesn't support the audio element altogether, it'll display this fallback content. Note that you could also use something like an image here if you wished. We'll go ahead and save this and have a look inside the web browser. Of course, since [[Google]] Chrome does support the HTML 5 audio element and the MP3 file format, that's what's being loaded here. However, we can see in the source code that our fallback text does exist. For older browsers that don't support the HTML 5 audio element, you could even fall back to Adobe Flash Player to support audio playback instead of this simple text message or an image. You have a lot of choices here.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=0)** - [Instructor] We'll now look at some additional audio element attributes such as autoplay, loop, muted and preload. These impact the [[User Experience (UX)|user experience]] and are important to consider. We're going to be dealing with the audio element itself here and right now we have a control's attribute set that's going to make the controls visible. However, we can add a number of additional attributes here such as autoplay. If we set autoplay, what will happen is as soon as we save this and look in the browser, you can see that everything autoplays. Here's our element with autoplay and a control selected and even if we refresh this, the audio track is playing automatically. Now, this can be very strange for the user if they don't expect audio to be playing and then they visit a website and the audio starts playing. So, back into Visual Studio Code, I would almost always suggest unless you had a very good reason to include the autoplay attribute, to just not have that at all. Loop works in a similar way. If you have loop defined, and then we save, and go back to the web browser. If we play this, and then jump ahead towards the end, once it reaches the end it automatically seeks directly back to the zero mark and begins playing it again.
>
> **[1:35](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=95)** Loop is going to loop forever. Alright, back to Visual Studio Code. Now another attribute is muted. This is also an attribute that I would suggest you don't use unless you have a very good reason to do so. The reason for this, if we look in the browser, is that muted is going to automatically set the volume to mute. So if somebody goes and tries to play this, they're not going to hear anything and they might not realize that muted has been set. Of course they can override this by clicking the mute button if it exists, toggling the volume back on. Back to Visual Studio Code to look at one additional attribute and that is the attribute preload. Now preload gets three different values, you can't just set it. You got auto, [[Metadata]] and none. I prefer to use metadata, however auto is going to leave up what is preloaded to the browser. Metadata, as I have here, is going to ask the browser to at least preload the metadata which includes data attributes like the length of duration of the actual audio. None of course is going to request that the browser doesn't preload anything. We'll save this and have a look in the web browser once again. So we can tell that the metadata has preloaded simply
>
> **[3:08](https://www.linkedin.com/learning/learning-web-audio-and-video/additional-audio-attributes?u=76281980&t=188)** because we do get the duration displayed in our controls. However it is important to note that preload as an attribute only provides a hint or suggestion to the web browser in terms of what you would like it to do. The browser does not necessarily have to abide by what you're asking it here. You can of course experiment with these attributes to find the best settings for your own use cases when playing audio on the web.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-increase-audio-accessibility-with-tags?u=76281980&t=0)** - [Instructor] Accessibility is so important on the web, especially when it comes to audio, video and image content. What might be an additional method of making audio content more accessible to users through the use of [[HTML]]?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** html (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Increase audio accessibility with tags](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-increase-audio-accessibility-with-tags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-increase-audio-accessibility-with-tags?u=76281980&t=0)** - [Instructor] One possible solution to this is if we look down here we'll find our audio element with a number of source elements and other properties associated with it. You can see that I've added some additional elements wrapping our audio source. I have a figure element and also a figcaption element with a little descriptive text. This is going to add an additional layer of accessibility through standard descriptors in [[HTML]]. Note that I've also gone ahead and added a rule to our CSS styles, which defines the font family, color and a little bit of padding. Having a look at the result. We can see that the audio file now has a bit more context to it and it is therefore much more accessible.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/modify-your-document-for-video?u=76281980&t=0)** - [Instructor] We'll now clear out our [[HTML]] document, removing all references to our audio content and prepare it for working with video elements and attributes exclusively, building upon what we've already learned. We'll go ahead and just select and delete all of that material. Now before moving on, note that just about everything we've previously seen applied to the audio element is also valid for the video element. We will not be repeating these things here where it can be helped. Let's create our video element, and there it is, video, and just as the case with audio, the video element by itself has no visual styling. Let's go ahead and add the controls attribute, and then we can close out of our video element with a closing tag. We'll save that and have a look in the web browser. There it is. Adding the controls attribute tells the browser to render its own visual style upon the element, but just as with audio, every browser styles it differently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Specify height and width](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=0)** - [Instructor] Unlike audio elements when dealing with a video tag, we can specify a specific width and height. In order to properly display the visual aspects of the video file, first, we need to specify a source file. Just as with audio, the video element can have a single source specified as an attribute or a number of source elements nested within the video element itself. We'll use a single SRC attribute to keep things simple. So directly on the video element, SRC equals... And we already have some videos within our media folder for this project. So we can go into media and there's our video.mp4. There we are. Let's go ahead and save this and then have a look in the web browser. Now you can see here, it's quite large because the video is displaying at its native resolution. We can play it back and use the controls, as specified, with he controls attribute. However, it's much, much too large. We're going to constrain this with the width attribute. Going back to Visual Studio Code, add in an attribute of width and we'll set that to 600. That's going to be 600 pixels. We'll save and go back to the web browser. All right, notice the browser automatically adjusts the height to ensure the video's native aspect ratio is preserved. Of course you can override this behavior
>
> **[1:35](https://www.linkedin.com/learning/learning-web-audio-and-video/specify-height-and-width?u=76281980&t=95)** with a height attribute as well.

> [!info]- Semantic Content
>
> **Env Vars:** src (2)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Use a poster image](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=0)** - [Instructor] A poster image allows us to display a static image while the video loads or before the user clicks to play. This is defined via a poster attribute. If you do not define a poster attribute, the first available frame of the video is displayed. So, before we actually modify this code, let's have a look in the browser to see how it's being displayed right now. Alright, we just have a black frame in Chrome, which isn't very user friendly. Let's fix that in Visual Studio Code. Before we actually refer to a poster attribute, we're going to need to add the actual PNG file that I've created as a still. Looking inside exercise files within the media folder, you'll find still.png. This is a simple, still image composite that I created in [[Adobe Photoshop]] and exported as a PNG image. Drag and drop this directly into the media folder in your project. Now, Visual Studio Code can display image data and it's showing us this right here in a new tab, but we don't really need to see it, so we'll close that tab and here, we're going to go ahead and specify that poster attribute. Poster=media/still.png. Let's go back to the browser and see how that looks. Alright.
>
> **[1:32](https://www.linkedin.com/learning/learning-web-audio-and-video/use-a-poster-image?u=76281980&t=92)** So it's showing us the actual poster image as a still instead of that black frame. Of course, if we start playing back, that goes away and we get the actual video. Note that other attributes like autoplay, loop, muted and even preload work the same with the video element as they do with audio. Let's go ahead and add a preload attribute here and we'll set this to [[Metadata]] just as we did with the audio. Now be sure to add this preload attribute to load in your metadata as we're going to need this later on as the course progresses.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=0)** - [Narrator] Captions, Subtitles, Chapters and Descriptions can be added to either Audio or Video Playback, which will describe the content in different ways for accessibility and descriptive purposes. Once again look inside the Exercise Files in your media folder and you'll find captions.vtt. This is a captions file that I've created, which just sort of describes some things. It gives a good example of how to use vtt files. Let's go ahead and drag this into our Media Folder once again, and it opens it up for us. Now, in a vtt file, you basically specify time code for when you want a specific descriptor to begin and then when you want it to end. I just say, "These are English language captions," and then a little while later, I pop up, "You are watching footage of a beach in Rhode Island," and then finally, "Pretty cool, huh?" That's really all there is to it. Let's go ahead and close that vtt file. Then, we'll tie it to the video element by using a track element within it. This works very similar to source elements in that you place it within the video file. Right between the opening and closing video tags, I'm going to add an element of type track. We're going to set this as the default track. We're going to give it a label and this should be what language it's in, or something around it that describes it
>
> **[1:33](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=93)** and differentiates it from other tracks. This is just our English captions, so I'm just going to put a label of "English". We can say what kind it is. Are these captions, chapters, descriptions? Is this [[Metadata]] or subtitles? We want to be as correct here as possible. I'm just going to put captions in. Then you can also say what the source language is. So srclang, and this is going to be English. We're going to use the code for English here, en. Finally, we have to point to the vtt itself. So, src equals and we're going to go into media and then find captions.vtt and select that. There we are. We'll now close out our opening track tag. Perfect. You'll note that tracks do not have a closing track tag. If you wanted you could always put a self closing element there. I'm just going to leave it this style. Alright, let's save this and test it out. As we can see in our Elements panel here, all of those different attributes exist, including our track element and its attributes. Let's go ahead and play and see how it looks. (Ocean waves crashing) Alright. These are English language captions. There we go. Very descriptive captions that we have
>
> **[3:07](https://www.linkedin.com/learning/learning-web-audio-and-video/media-accessibility?u=76281980&t=187)** along with this particular video.

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
> **[0:06](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-fill-the-background-with-looping-video?u=76281980&t=6)** - [Instructor] A common practice in modern [[Web Design]] is to use video not as content, but as a design element behind the content as part of the page background. How would we convert our video content to a looping background design element?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Design]] (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (soft upbeat music) (1)

#### [Solution: Fill the background with looping video](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-fill-the-background-with-looping-video?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-fill-the-background-with-looping-video?u=76281980&t=0)** - [Instructor] So one possible solution to this challenge, if we look down here inside of our [[HTML]], I've separated out my video element into an containing element called video-container, and I've also added in a little bit of content here in the form of a h1 element. And that's wrapped within a div named content-container. Now all we need to do is tweak the CSS a little bit in order for this to work. So for the ID of video-container, I've set the height to a specific height, here 450, and the width is set to 100% so that it spans the entire page. The overflow property has been set to hidden, so anything that spills over these boundaries is not going to be shown. The position is fixed to the very top of the page. For my content-container ID, I've set its position to be relative, and I've also set it to the top of the page. Note that depending upon exactly how things are working and what your server setup is, you may need to add some additional tags to your video content.
>
> **[1:36](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-fill-the-background-with-looping-video?u=76281980&t=96)** I've said allowfullscreen here, I've set it to autoplay, I've set it to loop and I've manually set the width to 100% here as well, just to ensure that that actually kicks off. All right, let's go ahead and have a look and see how this came out. There it is, our looping background video. We have our video playing in the background, it's going to loop over and over again. It autoplays and our content is overlaying it, since it is to be used as background video.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/disable-default-media-controls?u=76281980&t=0)** - [Instructor] If you'd like to create and style your own controls for media playback, you can disable the default playback controls provided by the web browser in preparation for your own. So looking in the web browser here, since we have the controls attribute as part of our video element, all of the different controls are being rendered by the browser itself. Since I'm using [[Google]] Chrome here, these are the specific controls that are rendered by Chrome. In both audio and video tags, the look and style of the controls are going to be determined by a specific browser being used. Let's go back to Visual Studio code, and our project, and we're going to clean some stuff up here. One thing we're going to do is actually remove that controls attribute. In order to keep our code simple, I'm also going to go ahead and delete the entire track element that we have here, giving us just a simple opening and closing video tag. Let's go ahead and save this, and go back to the web browser. Alright, so now we can see that there are no controls overlaying our content. Additionally though, there's no way that we can start playback, that we can seek, change the volume, or anything. We'll need to add additional playback controls of our own making, and later on, wire them up with [[JavaScript]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[JavaScript]] (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Add playback buttons](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=0)** - [Instructor] We'll now use a set of [[HTML]] button elements in order to replicate and customize the controls that users would normally expect to have when interacting with audio and video content. We'll use standard HTML elements to add in some of these controls. The first thing we'll do is just add some space underneath our video element. And here we're going to create a container div. It's going to have and ID and we'll give the ID the name of media controls. Go ahead and close that out. And now we have a div element with the ID media controls. This is going to hold all of the different controls we create to interact with the video element. Let's go ahead and create some playback buttons. For this, we'll actually use the button element. So set button with an ID. And this first button is going to be our play button, so we'll give it the ID of play button. And we'll add in a text value of play. This is basically the label of the button. On the next line we'll create a button to pause the video. So button with an ID attribute of pause button. And for a label here, we'll give it the text value of pause.
>
> **[1:40](https://www.linkedin.com/learning/learning-web-audio-and-video/add-playback-buttons?u=76281980&t=100)** All right, let's go ahead and save this and have a look in our web browser. As you can see, we now have a play button and a pause button, both appearing directly beneath the visible video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Env Vars:** html (2)
> **Speakers:** - [instructor] (1)

#### [Include text elements](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=0)** - [Instructor] When displaying text in [[HTML]], we have many different tags to choose from. We'll use a simple time element to display the current position and total duration of the media playback. Let's go ahead and add another line directly below our two buttons. And we'll create a container element for this of type div. And we'll give it an ID of time display. This will contain both our position and duration readouts. Let's close that out. And then nested within the time display div, we'll have our two time elements. So set that time, and we'll give this the initial value of 00:00. Since we need two time elements, we're just going to copy this one, control or command + C, add a new line, control, command + V. For each of these, we'll give them a specific ID. And for all of these different elements, the IDs are generally, so that we're able to target them through [[JavaScript]] and the media API later on. Let's name this one position display. And that's going to actually show us the current position of playback. And this secondary ID attribute, we'll call duration display. This will hold the duration
>
> **[1:31](https://www.linkedin.com/learning/learning-web-audio-and-video/include-text-elements?u=76281980&t=91)** of the entire piece of media content. Let's now have a look inside of the web browser to see how these appear. All right, as you can see, it's hard to tell right now because they're black. Let's go ahead and change our CSS a little bit to add some contrasting color. Back to Visual Studio Code, let's expand our head and expand our style. So note here that our anchor elements are being colored Alice blue. Let's go ahead and apply this to time elements as well. So we'll just add ,time. Now the color Alice blue is going to apply to both anchors and time elements. Be sure to save again and have a look in the web browser. There we are. We now have visible time placeholders for both the current position and media duration.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/create-a-progress-bar?u=76281980&t=0)** - [Instructor] The progress bar will need to adjust dynamically, in reflection of the current playback position. In the future, we'll use the same information used to display our time, via time elements, to calculate these different aspects. The control bar, or seek bar, is going to have both a rail, which represents visually the entire duration of the video, and then within that, a little bit of control bar fill, which is going to expand or shrink, depending upon the current position of the media itself. So, let's go ahead and create that beneath time display. This'll once again be a div element that we give a specific id to. We'll set this id to controlbarrail, this'll be the container. Within controlbarrail, we'll have another div for the controlbarfill. And simply close it out just like that. If we save this and have a look in the web browser, you'll note that the control bar has no visual elements yet, whatsoever. We'll take care of this, and the styling of other elements for playback, in the next set of videos.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Overlay the media controls](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-overlay-the-media-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-overlay-the-media-controls?u=76281980&t=0)** - [Instructor] There are, of course, many ways to present media playback controls to the user. With this challenge, we want to change the position and stacking of the existing video controls so they are more integrated with the video display itself.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Overlay the media controls](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-overlay-the-media-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-overlay-the-media-controls?u=76281980&t=0)** - [Instructor] Firstly, if we look down inside of the body, you can see what steps I've taken in order to accomplish this. One thing I've done is I've created a new element called media controls, which is a simple development. It's within the video container itself. And within my media controls element, of course, are my various media controls. In order to make this do anything, we have to style it with CSS. So here I'm targeting the ID of media controls and then I set the following rules. Position to absolute. And absolutely position this 20 pixels to the left and 20 pixels to the bottom. To make this absolute positioning work in relation to our video container, we also have to set an ID for a video container and provide the rule their, position of relative. This is going to set the media controls, absolutely positioned, relative to our video container element. As we see here, the result is that our media controls show up 20 pixels from the left and 20 pixels from the bottom
>
> **[1:33](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-overlay-the-media-controls?u=76281980&t=93)** overlaying our video display.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/define-css-styles-in-a-document?u=76281980&t=0)** - [Instructor] Our custom playback components are bare and ugly as they are right now. We'll get ready to stylize them properly using some CSS within our [[HTML]] document. For this we need to pop back over to Visual Studio Code and then scrolling up and looking within our head element, we'll find the style tag that we've added a couple of small styles to, just around color right now. There's a lot more that can be done here. For instance, inside of our body element, let's go ahead and just apply the color of aliceblue to any text. So, we can actually just copy and paste, color aliceblue, right beneath the background-color definition within our body tag. Let's also add a little bit of padding to this, because if we look in our web browser right now, we can see that things are just butting up against the sides really, really close. We want some more room to breathe here. So, we'll add some padding and we'll set that padding on all four sides to 2rem. Additionally, to make sure that all we're dealing with is padding on the body element, we'll set the margins equal to zero. This will ensure that only padding is being used for space here. Let's pop back over to the browser and see how it looks. All right, that's a lot more readable and additionally adds some spacing around our document edges for a bit of breathing room.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=0)** - [Instructor] The button element renders differently depending upon the operating system and browser being used. We'll now make the buttons visually appealing and help standardize their parents across all platforms. Once again within our style tag, let's add a button rule just below body here. The first thing we'll do is add in a background color definition to get rid of that gray that we currently see. I'm going to set this to a specific hex value of 3d followed by four zeros. For this nice kind of rusty dark red color. The next definition will be our boarder color. We'll set this equal to an RGB value that's red, green, and blue, and this value's going to be 82 for red, 82 for green, and finally 82 for blue. Having them all be the same value is going to give us the gray color you see here for a nice boarder around the button edges. All right, moving along. Let's change the actual boarder radius so it's not a complete tight angle. So we'll set boarder radius, and we're going to set this for all four of the corners to eight pixels.
>
> **[1:32](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=92)** That'll give us some nice curved edges. Next we'll set the text color within our buttons so the label of the button. And that's just color. We'll set this, once again, to RGB. This will be another kind of gray, but this time we'll use the value for 180 for each red, green and blue. That gives us a much lighter gray. Still dealing with our text, let's change the font size, and we'll set this to 1.2 rem. That'll make it a bit larger than our normal document size for fonts. We want it to stand out a bit too, so let's increase the font weight to 600. Finally, we'll standardize the height of each of these buttons to 36 pixels. All right, that looks good. Let's have a look at how things have changed within the browser itself. All right so we can see that it's taken care of most things, but we get this strange bevel around the button, and on some operating system, the bevel is the normal boarder style for a button instance, but we can always override that through CSS as well. Let's go back to Visual Studio Code and all we need to do is set our boarder style to solid.
>
> **[3:13](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-buttons?u=76281980&t=193)** Make sure to save once again and then verify in the browser. There we go. Now we get a nice solid boarder instead of that bevel. Any button elements that we use in this document will now be styled to our exact specifications.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=0)** - [Instructor] We have a set of time elements to hold and display text values but that element has no inherent styles. Using CSS, we'll apply specific visual properties to this bit of text. Now, notice here that our time display containing both of our time elements also exists as a child of mediacontrols. And really, all of our controls exist within mediacontrols. Let's also set some style information on mediacontrols. So, scrolling up here, we can go to the bottom and actually, we don't need the color definition for anchors and time anymore, because what we're going to do right now is going to really override that. Anyway, so let's remove that bit of CSS, and replace it with mediacontrols, since mediacontrols is an ID, we're going to use the hash to identify this as an ID of mediacontrols. Right below that, we'll create a definition for our time display, which, looking down here, timedisplay contains both of our time elements. So, we'll go ahead, and once again use a hash, since we are targeting a specific ID of timedisplay. With these two definitions created, we now have to add some style rules to them. So, for mediacontrols, we want to set a width, and the width we use,
>
> **[1:34](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=94)** we want to actually match our video element, which, as you can see here, is 600 pixels. So, we'll set the width of mediacontrols to 600 px,
>
> **[1:50](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=110)** and then we'll set the margin top to 0.3rems.
>
> **[2:00](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=120)** Setting a bit of margin on the top is going to put some space between the video element itself and all of our controls. So, a little more breathing room. Let's go ahead and also set margin-bottom to the same value. We'll just copy and paste that and change top to bottom. There we go. The last thing we'll do is set position to relative. Now, setting mediacontrols position to relative isn't really going to change how mediacontrols is laid out and positioned at all. What it will do, is allow us to absolutely position any of the controls within mediacontrols, relative to the mediacontrols container. Let's pop over to timedisplay, and see exactly how that works. So, within timedisplay, I've got a couple of lines of CSS I'm going to paste in here. That's nothing new. We're basically going to set the font family to Courier New. So, this is a monospace font, and it falls back to Courier, which is also monospaced, which falls back to the default operating system monospace, whatever the user has on their system. Each character is a specifically spaced width, so you don't get that shifting as a 1 changes to a 2 and so forth. We're going to set the color of the text
>
> **[3:32](https://www.linkedin.com/learning/learning-web-audio-and-video/style-your-text?u=76281980&t=212)** to the same value that we actually used for the color of our button border. And the font size, we'll make it a nice big, 1.4rem. All right, so, onto positioning, which is the important bit here, as mentioned, we're going to set the position of our time display absolutely. So we'll set it to absolute. Now, this is positioned absolute to the container element, and the container element for timedisplay is mediacontrols, right? Let's go ahead and specify how the time controls are going to be absolutely positioned. We'll position them absolutely, zero pixels to the right. This is going to pull timedisplay all the way across to the right side of this 600 pixel box called mediacontrols. We'll set the top, how it's positioned from the top, to 15 pixels from the top. And that should be it. Let's go ahead and have a look in the browser, see how it looks. All right, as you can see, we do have that monospace font. So, each one of these characters is exactly the same width, and they're absolutely positioned to the right, at 0 pixels and 15 pixels from the top.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=0)** - [Instructor] The progress bar as it currently exists, has absolutely no visual properties whatsoever. We'll now use CSS to style and size the progress bar so that it's useful to the user interacting with our playback. Inside of visual studio code, let's have a look and see how our progress bar is made. So we have our div here, which is a control bar rail id. And this is going to be, sort of the container for our control bar fill div. So we need definitions for both of these. And we'll create those in our style block right up here. Since these are both divs with ids. We can target them specifically with an id. So we use hash, control bar rail. And we can just copy and paste that. And change that to control bar fill. Now for control bar rail, we need some visual, stylistic elements to these. So we're going to set a background color, height and we'll even set a little bit of margin to it to space things out nicely. So we'll set background color. And we're just going to set this to dark red. So if you haven't used colors in CSS before. You'll notice we've done it a number of different ways in this course. So here we've set the background color to a named color of dark red.
>
> **[1:33](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=93)** Here in time display we are using an rgb value specifying the red, green and blue channels. And additionally at some times we use a nice x value. So it really doesn't matter, whatever works for you. Now that we have our background colors set to dark red. Let's set a height of three pixels. This will ensure that it always has some sort of height because if we don't have a height then it's not going to display at all 'cause it's going to be zero pixels in height. So even with the background color it wouldn't show up. Here we'll set the margin bottom to 0.6 rem.
>
> **[2:19](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=139)** And again this is going to set a little bit of spacing between our control bar and whatever follows. Additionally since this will be interactive, we want the user to know that they can click on it. So we can change the [[Cursor]] to a pointer whenever anybody hovers over this element. And there we are. Let's go ahead and have a look in the browser and see how control bar rail is shaping up before we move on to control bar fill. One thing you'll immediately notice is that our control bar rail is rendering but it's showing up underneath everything else. We actually want it to show up above the buttons and the time. So let's pop over to visual studio code and what we're going to need to do is simply cut both control bar rail and control bar fill from its current position at the end of media controls and then just paste it in up top. If I save this now and we look at the browser. That looks a lot better and we can see that that bottom margin is pushing these buttons down so that they're in line with everything else. Really nice. Alright let's go finish up. Our definition for control bar fill. Scrolling back up to our styles. We're going to set the background color of control bar fill to an rgb value. And here we'll set this to some varying values. The red channel will be 236, green will be 216
>
> **[3:56](https://www.linkedin.com/learning/learning-web-audio-and-video/design-your-progress-bar?u=76281980&t=236)** and blue is going to be 172. And that gives us that nice sort of orangy yellow color. We can set the height to 3 pixels and this is going to absolutely match the control bar rail. And we'll set the cursor to a pointer. Just as we did before. Okay so if we go ahead and test this now in the browser. You can see that the control bar rail actually completely covers control bar fill. If we wanted to see what they both looked like, sort of in action, what we would have to do is set a temporary width for control bar fill. Back in visual studio code let's just see how that looks. I'll just set a width of 60 pixels just to preview this. And now we can see what it would look like if it was actually playing back a little bit and filling up. Now we've only added this width to test our visual styling. Let's go back inside our visual studio code and remove that width definition as we're going to determine with programmatically moving forward with [[JavaScript]].

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-use-web-fonts?u=76281980&t=0)** - [Instructor] While reliance upon standard web-safe fonts is okay, we can always do better. How would we expand upon the stylistic elements already present in the existing CSS rules to integrate proper web fonts within the video-playback user-interface controls?

> [!info]- Semantic Content
>
> **Env Vars:** css (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Use web fonts](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=0)** - [Instructor] There are a number of ways to use web fonts. But this is the solution that I found to be the most straightforward for this project. And that is through use of [[Google]] Web Fonts. If we look in our project here, we have a link to a Google Web Fonts URL outline six. This is going to include the web fonts for us to use. All you have to do is go to fonts.[google.com](https://google.com) and locate either a specific font or simply browse for a font. So, if I wanted to clear my search, maybe we want to use this one right here. So I could click that and select this style. Once a style is selected, it'll show up in our selected families up here. And we can choose to review or embed these fonts. And there we go, there's the little link that's provided to us that we can place in the head of our [[HTML]]. We also get the CSS rule to actually use this family. Referring back to our HTML we can see that link right up here. And if we scroll down inside of our button, we're using that font family that was chosen from Google Web Fonts.
>
> **[1:36](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-use-web-fonts?u=76281980&t=96)** Let's have a look and see how this appears inside the web browser. All right, here we can see the chosen web font applied and visible on our buttons.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=0)** - [Instructor] Both audio and video elements can tap into the [[HTML]] 5 media API. We'll make use of this application programming interface to not only wire up expected playback controls, but also to read certain media properties, and respond to various events. What we'll need to do is to create a script tag within our content here. So let's go all the way down to the bottom of our body, and we'll insert a script tag. Adding any [[JavaScript]] at the end of our body is going to insure that all of these different items have rendered already, and are addressable via JavaScript. One additional change we'll need to make, is to put an ID on our video element, so that we can address it through the API. We'll set ID equal to videoelement. And there we are. Going back down to our script tag here, all we're going to do is set up and define a bunch of variables that point to some of these specific document elements. We'll create a new variable with the keyword var, and the variable name is going to be media. This is going to point to our audio or video. In this case, our video. We'll set that equal to document.querySelector,
>
> **[1:31](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=91)** and we're going to query for the video element ID. So this will be a string, we'll use a hash since this is an ID, and this is the video element that we just gave the ID name of #videoelement. So pretty straightforward. We're going to go ahead and create a bunch of these, so I'm just going to copy this, and paste it as we need it. So the next thing is pointing to our play button, which we'll call play. Once again, this is going to point to an ID of #playbutton.
>
> **[2:14](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=134)** We'll do the same thing for the pause button. We'll set that to a variable name of pause, and the ID its targeting is #pausebutton. We'll also need to set variables for the position and duration text elements.
>
> **[2:36](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=156)** There is position, and that's going to target position display.
>
> **[2:48](https://www.linkedin.com/learning/learning-web-audio-and-video/overview-of-media-api?u=76281980&t=168)** And then we'll have duration. Which of course targets duration display. The final two pieces we need are of course our progress bar rail and fill. So I'll put in two more of these lines here, one for a rail which targets #controlbarrail, and then fill, targeting #controlbarfill. Okay, we've now set up simple references to all the dom elements we'll need to address through code.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=0)** - [Instructor] Through the HTML5 media API, we can listen for certain events and respond to those events as a function of our custom playback controls. This allows us to monitor and respond to user actions and playback events. Within our script tag, we're going to add a couple more empty lines here, right after our variable definitions. And here we can add some event listeners to the play button, pause button, rail, and our actual media element. First of all, we're do so for play, which once again refers to our play button. We'll add an event listener of type click. So this'll fire off whenever the user performs some sort of a click action upon the button. When that happens, it's going to invoke a specific function. We're going to name this function playMedia because that's what it's going to do is play the media for us. Notice in my function definition here that I've actually used an uppercase M. This is going to be very important because we need this name to match exactly with our function name. On the next line, we'll create the function itself. So declare it with the name function, and then name the function playMedia. We're not going to have anything within the body of the function just yet.
>
> **[1:32](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=92)** We simply want to set up these different event listeners for now. We'll add all of the logic later. Alright, so we can actually copy this and reuse it for our pause button. So if I copy and then paste, all we need to do is change play to pause. So pause.addEventListener of type click, and for that we want to pause our media, and don't forget to change the function name as well. There we are. The next thing we'll do is actually add event listeners to both the rail and the fill. So rail.addEventListener, and this again is going to be of type click, and this will perform a seek for us across the timeline. So we're going to name this function seekMedia. There we are. We also are going to add this for our fill, because we want the user to be able to click on either the rail or the fill. It really doesn't matter and interestingly enough, this is going to also fire that exact same function seekMedia. Now the difference here is we want to pass in the event that gets fired, this click event through seekMedia, so that we can use it later on.
>
> **[3:05](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=185)** So we just pass that in as a little argument called e. You could actually name it whatever you like. I find e to be pretty descriptive because it stands for event. There we are. Now, the last type of events we want to listen for are a little bit different because they're based on the video element or media itself. We want to update the time whenever the [[Metadata]] is initially loaded in our video, and whenever a time update event fires within our video. So let's go ahead and add some event listeners for both of those particular events. So setting media.addEventListener, and of course this isn't going to be of type click whatsoever, we want to listen for loaded metadata. When a loadedmetadata event happens, we want to update our time so we will invoke a function called updateTime. That looks pretty good. I'm going to copy this because we also want to listen for the timeupdate event. When the timeupdate event fires, we also want to update our time so we're going to actually invoke that same exact function updateTime. The last thing we need to do is just create the function.
>
> **[4:44](https://www.linkedin.com/learning/learning-web-audio-and-video/listen-for-media-events?u=76281980&t=284)** And there we are. So while these functions don't yet contain any instructions whatsoever, all the interactive elements we've established are now appropriately connected and just waiting to be given the appropriate commands.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/program-button-controls?u=76281980&t=0)** - [Instructor] We've created a set of button elements representing core playback functions, but even though these buttons are stylized nicely, they will not yet respond to user interaction. We'll change that through use of the media API. Let's go down to where we created our different event listeners and we'll find our play and pause functions that play and pause our media. For each of these, we'll want to add a line in between the curly brackets, this is where our function commands are going to go, and it's actually super simple to get the media to play and pause. All we need to do is refer to our video element variable, which we've named media, and for media we'll just say play for play media, and we're going to do something very similar for pause media, we'll say media pause, and that's really all there is to it. Let's test it out in the web browser. If I hit play. (waves crash) There it goes. And pause. The media API already has direct access to the play and pause functions. We've just wired up our buttons to take full advantage of that.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Dynamic time display](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=0)** - [Instructor] Using the HTML5 media API we can read the current position and duration of our audio or video content. And display a user readable time for each value within the established time element. Let's go ahead and look to our updateTime function which right now is way at the bottom of our script tag. And, if you remember, this is called whenever meta data is loaded into our video and also whenever the time is updated. So this is the current time if it's playing. So, within updateTime, what we need to do is actually set the text content of both our position and duration elements to the media current time and media duration. Let's do position first. So we'll set position.textContent. This is the value of the text between our position tags and our time element. If we go ahead and scroll back up to refresh ourselves, we can see there's positiondisplay and here is the text content right there. Just a placeholder for now. That's what we'll be changing inside of updateTime. And to change that we'll set it equal to timeDisplay. And timeDisplay is a function that does not yet exist. What it does is converts raw time to a user readable time of minutes and seconds. It's going to accept a piece of raw time.
>
> **[1:37](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=97)** In this case we'll grab it from media. So we'll set media.currentTime. Media.currentTime is the current time or the play head position of our video element. Now, as mentioned the timeDisplay function itself doesn't exist yet. If you look within the exercise files for this specific chapter and video you'll find a snippets.txt file. Inside of snippets.txt is our timeDisplay function, which I'm going to paste in right down here. And just perform some formatting on it so it looks a bit nicer. You don't necessarily have to do that but I always like things to look nice in my code. There we go. So, this particular function timeDisplay, as mentioned, it takes in some raw time and then it determines both minutes and seconds based on the time that we pass in. And what it'll do is actually check to see if minutes is actually less than 10. If it is, then it prepends a zero to our minutes and the same thing for seconds. If seconds are less than 10 it'll prepend a zero to that, and then it'll stick minutes and seconds on either side of a colon before returning it. So, when it returns it, it's going to set it to that text content.
>
> **[3:12](https://www.linkedin.com/learning/learning-web-audio-and-video/dynamic-time-display?u=76281980&t=192)** Now, we don't just need to do this for position. We need to do it for duration as well. So let's copy and paste in order to duplicate this and change it for duration.textContent. And instead of media.currentTime, we're going to set this to media.duration. All right, let's have a look and see how this works. Going back to the web browser. Okay, we can see immediately that we have a 46 second duration video. And if I play, the current time or position is updated as things move along. Of course pausing is going to pause that and playing with continue playing. We now have this great dynamic time readout that lets the user know both the current time and the total duration of our media.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=0)** - [Lecturer] Using the same data gathered from the HTML5 Media API for discovering the values of our text element we can determine how wide to adjust the progress bar itself and also allow the user to seek across the duration of the media by interacting with the progress bar. The first thing we need to pay attention to is the seekMedia function. So if we scroll down here to seekMedia, this is invoked whenever somebody clicks on the rail or the fill, either one does the exact same thing, it invokes seekMedia. And so here is where we need to actually set some values up, what we're going to set is the current time of our media element, based upon where the user has clicked on this bar. So I'll set media.currentTime equal to, and here is where our little argument for our click comes into play, this is an event, a click event that comes through and we identify that here as e, so we can gather different information from e. So, for example, we want to get from our event the offsetX, now this is the x position of where the mouse actually clicked on either the rail or the fill. We're going to divide that value by the offsetWidth of our rail,
>
> **[1:35](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=95)** so the rail being the full, filled up length of our progress bar. So we'll say rail, and from here we're going to use the offsetWidth. Once we have the offsetX from our click event divided by the offsetWidth of rail all we need to do is multiply this by the duration of our media element. The duration is going to represent the entire filled bar. All right, so that's going to set the currentTime that will effectively seek our media but we still need to go ahead and adjust the fill of our progress bar to make sure that it's in line with what's been played so far and the current active position of our media. To do that we need to go ahead and go back to updateTime which is right below here, and as the time updates we're going to, of course, change the textContent of our position and duration time elements but we also need to change the width of the fill. To do that we're going to create a new variable called currentLength. So, var currentLength and we'll set this equal to the clientWidth of our rail,
>
> **[3:10](https://www.linkedin.com/learning/learning-web-audio-and-video/wire-up-the-progress-bar?u=76281980&t=190)** so rail.clientWidth and we'll multiply this by, and be sure to put these in parentheses here, coz we need these to calculate first before they're multiplied by clientWidth of the rail, and that is the media.currentTime divided by the media.duration All right, that's going to give us the width in pixels to apply to our fill, so we'll set fill.style.width and we'll simply set that to our currentLength and this has to be in pixels, so we'll append a string of `px` to the currentLength. All right, let's go ahead and test it in the browser. We'll hit Play and we can see there is our actual rail filling up nicely in line with the time that's been elapsed, and if I click on that rail anywhere, we do seek and the bar fills up accordingly.
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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/challenge-show-and-hide-the-controls?u=76281980&t=0)** - [Instructor] In order to keep the user-focused on video content alone, it might be beneficial to hide the toolbar when not in use. And then activate it when we detect user interest. How might we program our content to show and hide the video playback controls based upon user interaction?

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Show and hide the controls](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=0)** - The solution I came up with for this involves a little bit of [[JavaScript]]. So if we scroll down, into our JavaScript area, what we do is define a new variable called mc. We perform a querySelector on our document for an id of mediacontrols. Mediacontrols encompasses all of our media controls, as we can see right here. We're going to add two EventListeners to the actual media object, which we've already defined before this challenge. This is the videoelement. We set an EventListener onto media for a mouseenter event. And we set another event on media for a mouseleave event. When a mouseenter is detected, we're going to showControls, and we invoke a function to do so. That function is directly beneath here. Function showControls, and for that we're simply setting the mediacontrols style display attribute to block. That's going to ensure that we can see our controls. Because when we perform a mouseleave,
>
> **[1:34](https://www.linkedin.com/learning/learning-web-audio-and-video/solution-show-and-hide-the-controls?u=76281980&t=94)** and invoke the hideControls function, we set that style.display attribute to none, which basically is going to make our controls invisible to the user. Let's see how this works out inside of our content. So here is our video element. Once it detects a mouse enter, the control's display attribute is set to block, and once it leaves, the control's display attribute is set once again to none. Note, of course, that you also need to set the display attribute to none if you wanted to start in its invisible state.

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
> **[0:00](https://www.linkedin.com/learning/learning-web-audio-and-video/further-information?u=76281980&t=0)** - [Joseph] In this course, we explored the use of audio and video on the web. We began with an overview of web based media and followed that up with an examination of the usage of both native audio and video elements of the modern web. We then set about creating and styling a custom set of media playback controls. Finally, we made it all truly interactive with the use of the HTML5 Media API giving the user full control over web based audio and video media. I'm Joseph Labrecque and thanks for joining me.

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