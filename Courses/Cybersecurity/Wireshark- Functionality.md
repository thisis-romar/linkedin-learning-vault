---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: wireshark-functionality
url: "https://www.linkedin.com/learning/wireshark-functionality"
duration_minutes: 115
duration: 1h 55m
level: Intermediate
updated: 3/3/2025
learners: 75249
skills:
  - Wireshark
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFsc2XCsoi4YA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669466188?e=2147483647&amp;v=beta&amp;t=wE5vDdBeUMgueC-_bw928NnVThsgegEiDwa_PW6I9dc"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Wireshark- Network Traffic Analysis]]'
prev_courses:
  - '[[Wireshark Essential Training]]'
next_courses:
  - '[[Wireshark- Network Troubleshooting]]'
path_nav: '[{"path":"Wireshark- Network Traffic Analysis","position":2,"total":5,"prev":"Wireshark Essential Training","next":"Wireshark- Network Troubleshooting"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/wireshark
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Wireshark-%20Functionality.md)

![Wireshark: Functionality](https://media.licdn.com/dms/image/v2/C4E0DAQFsc2XCsoi4YA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669466188?e=2147483647&amp;v=beta&amp;t=wE5vDdBeUMgueC-_bw928NnVThsgegEiDwa_PW6I9dc)

# Wireshark: Functionality

> Speed up your workflow and enhance your analysis by becoming better acquainted with the Wireshark interface and its core features. In this course, join Lisa Bock as she helps to familiarize you with this powerful protocol analysis tool. Lisa reviews the menu choices, explains each of the toolbars available, and shares tips for modifying the Wireshark interface to suit your needs. Discover capture 

> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-functionality) | 1h 55m | Intermediate | 75K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Improve your Wireshark workflow](#improve-your-wireshark-workflow)
  - [What you need to know](#what-you-need-to-know)
- [**1. Menus and Toolbars**](#1-menus-and-toolbars) (8 videos)
  - [File: Open, Import, and Save](#file-open-import-and-save)
  - [Export packets or objects and print](#export-packets-or-objects-and-print)
  - [Edit menu](#edit-menu)
  - [View menu](#view-menu)
  - [Statistics menu](#statistics-menu)
  - [Using graphs](#using-graphs)
  - [Additional menu choices](#additional-menu-choices)
  - [Exploring the Telephony menu](#exploring-the-telephony-menu)
- [**2. Capturing Traffic**](#2-capturing-traffic) (9 videos)
  - [Capture options](#capture-options)
  - [Use a ring buffer](#use-a-ring-buffer)
  - [Challenge: Ring buffer with coloring rules](#challenge-ring-buffer-with-coloring-rules)
  - [Solution: Ring buffer with coloring rules](#solution-ring-buffer-with-coloring-rules)
  - [Capture filters](#capture-filters)
  - [Display filters](#display-filters)
  - [Find packets](#find-packets)
  - [Mark packets](#mark-packets)
  - [Fine-tune columns](#fine-tune-columns)
- [**3. Personalizing the Interface**](#3-personalizing-the-interface) (7 videos)
  - [File and packet comments](#file-and-packet-comments)
  - [Configuration profiles](#configuration-profiles)
  - [Appearance and layout](#appearance-and-layout)
  - [Columns, font, and colors](#columns-font-and-colors)
  - [Name resolution](#name-resolution)
  - [Challenge: Create a button](#challenge-create-a-button)
  - [Solution: Create a button](#solution-create-a-button)
- [**Conclusion**](#conclusion) (1 videos)
  - [What's next?](#whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Improve your Wireshark workflow](https://www.linkedin.com/learning/wireshark-functionality/improve-your-wireshark-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/improve-your-wireshark-workflow?u=76281980&t=0)** - [Lisa] We all know that [[Wireshark]] is a great tool, but how do you make a great tool even better? By becoming more familiar with the many basic features that help you navigate easier in Wireshark. Network administrators, programmers and students all show continued interest in analyzing network traffic using Wireshark. By taking this course, you'll have a solid understanding of the Wireshark interface to improve your workflow. Hello, I'm Lisa Bock, and I'm a security ambassador. Wireshark functionality begins with a more detailed look at the menu choices and toolbars. I then move into ways to capture traffic and move about Wireshark to locate, mark and copy packets. I then summarize with ways to personalize the Wireshark interface to enhance your analysis. I am super excited to bring you this course on Wireshark functionality so that you can improve your skills in packet analysis. Are you ready? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (8)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [lisa] (1)

#### [What you need to know](https://www.linkedin.com/learning/wireshark-functionality/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/what-you-need-to-know?u=76281980&t=0)** - [Lecturer] This course is an intermediate course for network administrators, students, teachers and anyone with an interest in learning about packet analysis, and the importance of understanding and identifying traffic on your network. To troubleshoot, identify latency issues, and actively identify network attacks. I'll be walking you through the basics so no previous experience with [[Wireshark]] is necessary. We'll examine precaptured packets from online repositories. A high-level knowledge of networking technology will clarify some of the concepts discussed in this course, however if you have a basic understanding of network terms and concepts, and an interest in the subject, you should be able to easily follow along with the lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1)
> **Definitions:** is an  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [lecturer] (1)


### 1. Menus and Toolbars

[↑ Back to Table of Contents](#table-of-contents)

#### [File: Open, Import, and Save](https://www.linkedin.com/learning/wireshark-functionality/file-open-import-and-save?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/file-open-import-and-save?u=76281980&t=0)** - [Instructor] When working with the [[Wireshark]] interface, file is many times the go-to menu choice. Now there are many items in this menu choice. Let's start with open. Now this'll start with a dialog box which will allow you to load a pre-captured file. It'll go to the location and allow you to select that file. The next one is open recent, and as you can see, there are other packet captures in there. Every once in awhile, it gets very busy, at least in mine, so then I go down to the bottom and clear the menu. And we can see that it will freshen up that interface and take away those old entries. Now, the next one is where we can see merge. Now if you have a file capture open, and you're doing some troubleshooting, this would merge that capture that you obtained with the one you currently have open. Now it's really important that the time values are perfect, because it will use the time value to synchronize the two files. The next one is import from hex dump. Now, every once in awhile, you're going to get a hex dump where someone from another device will send it to you for analysis. So let's take a look. We'll go to browse, and I have a hex dump in here, and we'll open that. Now we have some choices, and of course the offset's a hexadecimal, and then down below, you see the encapsulation type, and I'll drop this down. We are using the ethernet encapsulation format, but as you can see, there are a lot of other choices.
>
> **[1:35](https://www.linkedin.com/learning/wireshark-functionality/file-open-import-and-save?u=76281980&t=95)** And then I'll say import. And now we've got it loaded in so we can manipulate it within the Wireshark interface. Now we also see close, and closes when you're done. It'll close the current capture, and if you haven't saved it, it will ask you if you'd like to save it. If you've done anything with the file, here this allows you to save it, and then sometimes you wanna save it as something else. And we'll go to save as. So, it brings us into my folder, and as you can see, when you do this, and I'll center this right here, the really great thing about Wireshark is all the different file formats that it interchanges with. Now I'm not gonna save that, but as you can see, there are a lot of choices. We'll cancel that. Every once in awhile, you'll be working with a number of files. I'll go to list files. For example, you're doing a firewall rule set, and you're going through maybe a whole month's worth of files to just see what it is you want to allow or deny. And you'll have all your files in a file set. So this allows you to go through, and it will keep track, and as you can see, there is only one, but if there is more than one, you can go to the next file or the previous file. Now the last thing here is where we can quit, and if we do quit, this is going to ask you if you want to save your captured file if you haven't previously saved it. So those are commonly accessed
>
> **[3:09](https://www.linkedin.com/learning/wireshark-functionality/file-open-import-and-save?u=76281980&t=189)** menu choices from the file menu.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3)
> **UI Navigation:** go to (5)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Export packets or objects and print](https://www.linkedin.com/learning/wireshark-functionality/export-packets-or-objects-and-print?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/export-packets-or-objects-and-print?u=76281980&t=0)** - [Instructor] Some of the more creative things that you can do with a file and a capture is export specified packets, print, or export objects. So first of all, we'll go to the choice Export Specified Packets. Now, when we get in here, this allows us to select only a subset of the traffic that we have. For example, if I've marked any, and then I want just the ones I've marked, you can actually do a range. And in this case, I'll just say one to 20. And that would give me just the first 20 packets. And why I would do that, well, for example, if I'm seeing a lot of a certain type of traffic, I'll save that subset and then roll it into a report. So let's put this into maybe something that I would just, say, question, 'cause I really don't know what it is, and that's maybe for me, and I'll say Save. And as you can see, we have a lot of other choices here, but we'll just save it as the default. Now we can also go to Export Packet Dissections. All right, so now let me just do something here. I'm going to follow the stream.
>
> **[1:20](https://www.linkedin.com/learning/wireshark-functionality/export-packets-or-objects-and-print?u=76281980&t=80)** I'll go to stream 120. And really all I'm going to do is export those packets, which there are 755 of them, and we're going to save that subset in hex format. So we'll go to File and Export Packet Dissections. And here we can see that we can save it as plain text, as a common separated value, or C arrays, or some other choices. We'll save it as plain text. Now, once you're in here, we'll save it, just say subset for this exercise. And here you can see down below, it says, what would you like to save? Now, in this case, I just want the displayed ones, but now you have something here that you might not have seen before. How do you want that exported? Now, it will say, would you like the packet summary line? We're going to take that off. And we don't want the packet details. All we want are the packet bytes. So now we'll just save that, and now you have only the packet bytes. And now we'll go into packet bytes. Now, of course, we've just done that, but this is another way that you can get to that. Also there's Export Protocol Data Units to File, and then here's one, Export Transport Layer Security Session Keys. Now, I'll select that, and it will tell me that there are no keys to save. You would have first have to capture those in order for you to use them. And of course, if you wanted to decrypt the traffic,
>
> **[2:54](https://www.linkedin.com/learning/wireshark-functionality/export-packets-or-objects-and-print?u=76281980&t=174)** you would have to have the keys. Now down below, there's something else, and I'm going to go to another file. So now I'm into a file, and I would like to save and export the server message block objects. So let's go to File and Export Objects. And here you can see, there are a lot of choices in what you might want to export. And a lot of times I go in and if it's in plain text, I export the HTTP objects, perhaps a JPEG or an entire web page. But in this case, this is the server message block, and it's a transaction and a file transfer, so I have something to export. So Export Objects, SMB. It locates them, and as you can see down below, there was a quick search for objects. And it did locate that, in a nice big file, 19 megs, and we'll say Save. So here it is, and what we'll do is take off that front matter, just so I have it nice and neat, and as you can see, the Solaris install. And make sure that whenever you do do Export or Save As in [[Wireshark]], that it does have that extension. Sometimes it doesn't, and your operating system won't know how to associate it. So I'll say Save, and then we'll close that. So as you can see, you can save different objects. And the last thing is something that you might want to do is print. All right, why would you want to print? Well, in some cases you might, again, have something
>
> **[4:28](https://www.linkedin.com/learning/wireshark-functionality/export-packets-or-objects-and-print?u=76281980&t=268)** that's really kind of important, and you want to include it in a report. If I go to Print, it says, what would you like to print? And we'll say, just for this exercise, we'll put the summary line and the details. But again, maybe just save one through 10. That would be just a nice, short summary, and we're going to save it as a PDF. That way, I can bring it into a report. And I'll say Print, and it says [[Microsoft]] Print to PDF, but you probably have other options, as well. And I'll say Print. And what would you like to print it as? And I'll just say traffic, and it is saved as a PDF, and we'll just close that. Now, we'll go in and get the PDF. I'll right click, and I'll say open with, and we'll get into the Adobe. Now, this is where you could do something with this by perhaps maybe highlighting it or maybe importing it into a report so you can take a look at it or bring it up in a meeting. So as you can see, with the File menu choice, there are some more advanced options such as exporting different types of objects, SSL keys, or even printing part of the capture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1), [[Microsoft]] (1)
> **Env Vars:** pdf (4), http (1), jpeg (1), smb (1), ssl (1)
> **UI Navigation:** go to (7)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Edit menu](https://www.linkedin.com/learning/wireshark-functionality/edit-menu?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/edit-menu?u=76281980&t=0)** - [Instructor] When working with a packet capture, the file menu choice Edit allows you to go in, find a packet, make a time reference, copy and also provide detailed information on creating a configuration profile, or preferences. So first let's take a look at Copy. Now, in this case All Visible Items, All Visible Selected Tree Items, and other options are available. Now, I'll go down below and I'll expand the Internet Protocol header. So now this is expanded. I'll place my [[Cursor]] on the IP header and I'll go to Edit and Copy, All Visible Selected Tree Items that I've expanded. That puts it on the clipboard. Now, I've opened up a Notepad and now I can paste it. Now this is just for a simple quick copy and paste of something you've found interesting. Of course, if you wanted a more detailed, or more expansive amount of data, you would export it as text. Also, you see the next three all have to do with finding packets. Finding the packet, Find Next, Find Previous and those are for you, if you needed some advanced search options or even string values within a capture. Now, once you're in a packet capture, you might do something which is called marking a packet. For example, this Router Advertisement, I might want to highlight it and right click and say Mark. Now that makes it black.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-functionality/edit-menu?u=76281980&t=92)** Now that might be of some interest to me at some point, and we can go down below and mark another packet. And now they're highlighted in some way and we can do a lot with marked packets. In this case, it says Mark All that are Displayed, and it will select all that are displayed in that window. I'll go back in and Unmark All Displayed. Then you can see you have some other options in which you can get around with manipulating and finding the different marked packets. Now, every once in a while, there's something that's called Ignore, and Ignore or Unignore the Packet. So with this, we'll pretend that the packet really didn't ever exist. So again, we'll do the Router Advertisement and I'll say Ignore the Packet. Now, when you see this, as you see it's quickly dimmed, it doesn't exist. So any [[Statistics]] it won't show up in, it won't show up in a flow graph, it's simply ignored. Now, with the three functions, we can go back in here, you can see there's other choices, Ignore all that are displayed or Unignore all that are displayed. I'll go back and put it back where it belongs. And here we can see down below is Set or Unset Time Reference. For example, if I have a string of packets that I want to see exactly how long the delay was in between those packets, there's something I could do, is set the time reference.
>
> **[3:06](https://www.linkedin.com/learning/wireshark-functionality/edit-menu?u=76281980&t=186)** Now, let's scroll down in this packet capture and look at something that I might want to see as a time reference. And here we can see a lot of black. And in this case you can see that the exchange of these two are trying to keep the session alive. I put that in there and we did follow the stream, so we just have one actual contiguous stream. We see the time reference here, and these are going to be huge gaps in the transmission. But let's go in and Set/Unset Time Reference. Now, there it says Reference. And that's a starting point for anything else, and any subsequent calculations. And this is gonna be in reference, as you can see, to that packet that I put the time reference on. We'll go in and uncheck that, and that'll clear it up. Now, whenever you have a packet capture, and in most cases we're going to trust that the time value is correct, but maybe it isn't. Maybe you got this from one side of the country and then another site somehow we didn't translate that time correctly, and we have to do a time shift. So we'll go into Edit and we'll do a Time Shift. And here you can see how we can shift the packets and it provides details on the format. And set the time packet to whatever. Just be very careful with the time shift, because you gotta be very precise in what the time shift is or everything will be thrown off.
>
> **[4:41](https://www.linkedin.com/learning/wireshark-functionality/edit-menu?u=76281980&t=281)** I'll close that. Now, there's a couple other things that we can do including Packet Comments. And that would be if I wanted to reference certain things. I'll show you here, if I go in to this HTTP packet right here. All right, I'll go into Edit and I put Packet Comment. And there's just that single packet 45043. And I'll just put This is a goat picture and say OK. Now there you see it says, Packet comments. It says This is a goat picture. Now, up above you see Goats has an asterisk. And that means that there is comments and it has changed this file. So it's sort of reminding you that you want to save those comments. If you want to save comments for the entire packet capture, you'll have to go to Statistics, and here you can go to Capture File Properties, and here you can put your comments down below. Now, here you can see Delete All Packet Comments, and that cleans it up. For example, you put it in for your own purpose and now you want to take that out. And I say Yes. And then the last two are more advanced options. The Configuration Profile and that will provide you an opportunity to create a configuration profile for your own needs. For example, you're working with a certain type of equipment
>
> **[6:14](https://www.linkedin.com/learning/wireshark-functionality/edit-menu?u=76281980&t=374)** and you have settings and protocols that are designed specifically for that configuration profile, you can save it. And the last option is Preferences. And this brings up the Preference dialogue box which allows you to modify the preference on the appearance, on how you capture the statistics and also the protocols. So the Edit menu choice in [[Wireshark]] allows us to manipulate and edit packets within Wireshark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (3), [[Wireshark]] (2)
> **Analogies:** for example (4), picture (2)
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** go to (3), scroll down (1)
> **Definitions:** is a  (2), is called (1), means that (1)
> **Env Vars:** http (1)
> **Speakers:** - [instructor] (1)

#### [View menu](https://www.linkedin.com/learning/wireshark-functionality/view-menu-14522232?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/view-menu-14522232?u=76281980&t=0)** - [Instructor] When working with [[Wireshark]], many times you'll find yourself up at the View menu choice, where you can alter the appearance of those captured packets, including how you want them colorized, zooming on the font or showing a packet in a separate window. So let's take a look. I'm at View, I've dropped it down and the first four things are to do with toolbars. Of course, we have our Main Toolbar, which is up in the top and as you can see in the background right here, and then we have the Filter Toolbar, so you can put your display filter. Now the third one is the Wireless Toolbar. Now I'll select this, but if you notice this is not supported in this version of Wireshark, so we're going to take that away. Now, the last toolbar is the Status Bar. All right, let me go down below, all the way at the bottom is the Status Toolbar. Now, if I take that off, which we'll go to View and Status Bar, that removes that. But I do like that Status Bar because it tells us a couple of things. For example, I can see how many packets are displayed and also the expert information is easily accessible in the lower left-hand corner. Every once in a while, you want a little bit more landscape to put a few more packets on to that page, and that can be achieved by going to Full Screen. Now I'll just show you that really, it just pulls it up just a little bit. I have the font increased, so it's not that big of a difference, but it can be helpful, especially if you're showing people the captured packets.
>
> **[1:35](https://www.linkedin.com/learning/wireshark-functionality/view-menu-14522232?u=76281980&t=95)** Now I'll just undo that so it's normal-sized. Now the three down below are about the packets and how we want them displayed in the panels. So the first one is the Packet List, then the details of a single frame or packet, and then the Packet Bytes. Now you can see that all three are checked, but where are the Packet Bytes? Well, they're down below. I just pull this up and as you can see, I can modify how each of these set, when normally I don't keep that Packet Bytes open because it really doesn't help me. I just uncheck that and it gives me more landscape to take a look at the captured packets. Now, here we see all about the time and how we display that time, including the format and what level of precision. And Name Resolution, which can be enabled if you like. For example, the physical address, which is coming from a file, and that will match the organizationally unique identifier, which is the first six digits of a Mac address and tell you the name of the vendor for that [[NIC]] card. [[Zoom]] is how we want to modify that font. For example, Zoom In. As you see, it's just a little bit larger. I'll go back and we'll Zoom Out and that'll bring it back to what it was when we started. Now down below, you can see that if I'm down in a packet, let's go here and I'll select the IP header. I'll go to View and then I'll say Expand the Subtrees. So what's that doing, is just as we know
>
> **[3:11](https://www.linkedin.com/learning/wireshark-functionality/view-menu-14522232?u=76281980&t=191)** that that little arrow sign down or caret, when I select it, it expands the subtrees. Now we can go back in and collapse them and we can also ask to Expand All or Collapse All. Now, these of course are done easily when you're in the packet capture, but there are also shortcuts for the keyboard, including Expand All and Collapse All, Collapse the Subtrees, or Expand the Subtrees. Now we've talked about colorization and if it distracts you and sometimes it does, I uncheck that and that takes away the coloring rules. They're still there and they can be applied very easily, but that takes it off so it doesn't distract you, and I've used Wireshark for many years and we didn't always have coloring, so sometimes I do take it off, but I'll pull it back on. And then there's a section about Coloring Rules and there's a whole lot of information about how we can customize the packet capture and how they're displayed for us using the Color Rules. Now, once in a while, you might have something interesting you're following, for example, let's just go down here, frame 32. I see that it's already colored, but let's go and ask it to colorize that conversation only with a unique color. So we'll go down to Colorize Conversation and let's select Color 10. Okay, so now you can see that it's using that brown or buff color, and that can help you
>
> **[4:44](https://www.linkedin.com/learning/wireshark-functionality/view-menu-14522232?u=76281980&t=284)** follow that conversation a little easier if you were watching for a certain thing. Now I'll just take that off and I'll just say Reset the Colorization. And then once you're in there, you can also easily add a new coloring rule, which is all the way at the bottom. Down below, you can modify the way it's laid out. I'll just ask to Reset the Layout and that just pulls it back so it's a little bit more even, and then you can also Resize the Columns if you want. Internals are actually for any of the developers, but the last thing is Supported Protocols, which is accessible in other areas as well. And there you can see all of the Supported Protocols for Wireshark, and all the dissectors. Every once in a while, you might just wanma pop out that packet in a new window. All right, just select that and that just brings up that single frame. This is very simple, and then you can take a look at it a little closer, or maybe again, you're demonstrating this in front of a group and then down below you can reload and just set it up. For example, if you have modified this packet capture in any way, you can reload it and it bring up fresh, you take away any markings or comments that you put on there. Just so you know, some of these options, including this Reload might cause Wireshark to freeze up or stall, it just does so. And as you can see what it did was bring it up and I'll go back here, the File Format Capture, and that's just all that is.
>
> **[6:19](https://www.linkedin.com/learning/wireshark-functionality/view-menu-14522232?u=76281980&t=379)** And I'll just say Reload, and then I'll bring back the original file. So you can see, there are a lot of things you can do in the View menu choice, including how you want those packets colored, resizing the column values, or zooming in on a packet capture, or actually popping it out in its own separate window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (5), [[Zoom]] (3), [[NIC]] (1)
> **Analogies:** for example (5)
> **UI Navigation:** go to (2), select the (1)
> **CLI Commands:** find (1)
> **Env Vars:** nic (1)
> **Speakers:** - [instructor] (1)

#### [Statistics menu](https://www.linkedin.com/learning/wireshark-functionality/statistics-menu-24560124?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/statistics-menu-24560124?u=76281980&t=0)** - [Instructor] In [[Wireshark]], the [[Statistics]] menu offers a variety of tools to provide insights into a capture file. In this segment, we'll review some of the options including protocol hierarchy, service response times, conversations, and endpoints. To demonstrate some of the concepts. I have a great packet capture we can use called Small Flows. If you'd like to follow along, you can find it here. Just select this file, download it, and open it in Wireshark. Once here, we'll start with capture file properties. Now if we open this, this gives us a snapshot of that single capture. Now keep in mind if you download a file from the internet, it might not have all of the information, but what it will tell you is what it knows about that capture, including when it was captured, how long it was captured for, and any other information it could derive during the capture. And down below we see some statistics on that packet capture, and here's where we can edit or add comments. I'll cancel that and close that. Another tool that I like to use is the protocol hierarchy. Now, this loaded pretty quickly, but understand if it's a really large capture, it might take a few seconds to load.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-functionality/statistics-menu-24560124?u=76281980&t=93)** Now, once it's fully loaded, we can see all the protocols that are in the packet capture, and I'll scroll down. And you can quickly see if there's something that really shouldn't be on the network. Now what's really great is that within this, if I right click, I can filter and use a shortcut on any of the protocols. For example, server message block, and I'll say "apply as a filter" and select it. And it will run that filter. And I'll close that. And here we see only server message block protocol, and I'll close that. Another helpful tool that I like to use is conversations and endpoints. So let's talk about this concept. Now, any device that is used to connect to the internet is considered an endpoint, and that includes mobile devices, VoIP phones and [[IoT]] devices, servers and cloud resources, specialized devices such as point of sale terminals and industrial control systems, along with network devices including firewalls and routers. And a conversation refers to communications between two endpoints. So now once you're in your capture, go to statistics and then endpoints. And here we can see that there are some tabs along the top. Now we can add to those.
>
> **[3:07](https://www.linkedin.com/learning/wireshark-functionality/statistics-menu-24560124?u=76281980&t=187)** For example, I might want to add Bluetooth. And if there is an endpoint using Bluetooth, it would appear here. Well, there isn't, so I can uncheck that. Now commonly I'll see the following, ethernet, IP version four, IP version six, TCP, and UDP. But I'll close that. Now, the endpoint statistics provides a lot of information, but what I find more interesting is conversations. Now it has the same look and feel as endpoints, but what's different with this is now I'm here and I can see the conversations and what's happening between the two endpoints. And when you're in each of the tabs, we can sort by any of the column headers, for example, bytes. And here we can see the largest to smallest or smallest to largest. And some of the other information, you can open this and see some of the information that is found within this single statistics option. A lot of times what I'm doing a capture analysis, especially when looking for malware, I'll sort by port and I'll scroll through and see if I can identify any ports that are related to malware. And I would do the same with UDP. I'll close that. Another thing that we can take a look at is service response times. Now lay my [[Cursor]] right here. And here you can see all of the different types of protocols that we can see how quickly I'm getting a response.
>
> **[4:42](https://www.linkedin.com/learning/wireshark-functionality/statistics-menu-24560124?u=76281980&t=282)** And those include things such as LDAP, H.225, MEGACO and server message block. And I'm going to go down to server message block because I know that there is some traffic in this capture. And here we see a snapshot of that traffic. In addition, there are many other protocols that provide statistics, for example, BOOTP statistics, and I'll click that. And here we see our [[DHCP]] statistics. This helps to give a snapshot of what's on your network using DHCP, and I'll close that. Other things that we can use is DNS. Here we can use either general or query response. General provides a lot of information, and here we see number of questions, number of answers, the type, and also maybe the payload size. Lots of information there on DNS. Other things that we can see is HTTP. We can see packet counters, requests, load distribution or request sequences. And there are a lot others including IP version four and IP version six statistics. For example, I'll select IP version four statistics, and we'll ask for all addresses. And here we can see a snapshot of all the IP addresses within this packet capture. So as you can see,
>
> **[6:16](https://www.linkedin.com/learning/wireshark-functionality/statistics-menu-24560124?u=76281980&t=376)** the statistics menu choice in Wireshark will help provide a lot more statistics to help you with your analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (12), [[Wireshark]] (3), [[DHCP]] (2), [[IoT]] (1)
> **Env Vars:** udp (2), dhcp (2), dns (2), tcp (1), ldap (1)
> **Analogies:** for example (5), such as (2)
> **CLI Commands:** find (2)
> **UI Navigation:** scroll down (1), go to (1)
> **Definitions:** refers to (1), is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Using graphs](https://www.linkedin.com/learning/wireshark-functionality/using-graphs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/using-graphs?u=76281980&t=0)** - [Instructor] [[Wireshark]] has several graphs that can visually show the traffic patterns. In this segment, we'll review flow graphs, I/O graphs, and TCP stream graphs to improve your troubleshooting skills. Let's start with a discussion on a flow graph. In Wireshark, a flow graph tells the story of what happened during the capture and provides information about the types of traffic exchanged between the endpoints. Key uses for this type of graph include troubleshooting, protocol analysis, along with visualizing the flow during an incident. To demonstrate this graph, we'll use small flows. And to start, we'll go to [[Statistics]] and then Flow Graph. Now, depending on the size of your capture, it might take a few seconds to load. But then once loaded, we can go in and filter it by a specific type of flow. For example, I'll drop this down and select ICMP. And now we just see the ICMP flows. We can also Limit to display filter if we've used one. Next, let's talk about I/O graphs and TCP stream graphs. An I/O graph is a one-way graph that can get a feel for all the traffic on your network.
>
> **[1:36](https://www.linkedin.com/learning/wireshark-functionality/using-graphs?u=76281980&t=96)** Once we create the graph, we can detect traffic spikes or trends on any protocol or traffic type. I'm in small flows and I'll go to Statistics and I/O Graphs. Now, once I'm in the graph, we have this set at default at all packets. Now, we can also add another graph. In this case we'll select TCP errors. Now, what you see is the green showing any of the TCP errors within the capture. What's nice about this graph is it will show you the ratio between all the traffic and possibly some of the errors that might be occurring. And additionally, I can change the color. For example, I'll just open this up and we'll make it red. And additionally we can change the style. For example, I might change it to a diamond. And then you can just [[Zoom]] in. And again, it provides a nice way to visualize the ratio of the traffic within that capture. Next, let's talk about the TCP stream graph. Now this is a two-way graph that can help visualize TCP connection metrics over time. Now, as opposed to the I/O graph where we can see trends on any protocol or traffic type, the TCP graph will only show you TCP-related metrics. Now, for this, I'm going to use a capture called Spotify.
>
> **[3:12](https://www.linkedin.com/learning/wireshark-functionality/using-graphs?u=76281980&t=192)** Now, this is a capture of Spotify traffic that we did in a lab environment. And to start this, you'll need to select one of the frames that have TCP. And that will activate the TCP stream graphs. We'll go to Statistics and then down below, and I'll lay my [[Cursor]] there where we can see the different types of graphs. First, we see time-sequence graphs, and this will plot TCP sequence numbers over time. And we have two choices there. We can also select a throughput graph. This will help visualize the amount of data transferred over time. In addition, we also see roundtrip time and window scaling graphs. Now, it doesn't matter which one you select because we can also change it once we're in the graph. But one I like to run is the time-sequence Stevens graph, and we'll open that. Now, it takes a few seconds to load. But when we're in here, we can see a couple of different things. First of all, I can drop this down and change the type of graph, but it's also important to identify what stream you'd like. For example, if I put one, it will load and show you an entirely different stream if there is one. But I'm going to stay at stream 30. Now, once in, I have this under Drags for the mouse, and I can switch directions.
>
> **[4:50](https://www.linkedin.com/learning/wireshark-functionality/using-graphs?u=76281980&t=290)** And if I want to zoom in on it, I select Zooms and I can zoom in on a specific part of that graph, and then return to Drags so I can zero in on possible trouble spots like right here. Now, when we're using the TCP stream graphs, there's a couple of things that it can show us. For example, for high latency, we can use the roundtrip time graph. This will show high or increasing roundtrip times. Or we can also use the time-sequence graph, and that will show significant delays between packets. We can also identify packet loss and retransmissions. And also, we can see TCP window size issues and other signs on the window scaling graph. So that's a snapshot of the graphs in Wireshark that we can use to improve your troubleshooting skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), [[Statistics]] (3), [[Zoom]] (3)
> **Env Vars:** tcp (13), icmp (2)
> **Analogies:** for example (5)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Additional menu choices](https://www.linkedin.com/learning/wireshark-functionality/additional-menu-choices-14517308?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wireshark-functionality/additional-menu-choices-14517308?u=76281980&t=1)** - [Instructor] In addition to the more commonly accessed menu items such as File, Edit, View, and [[Statistics]], there are additional menu choices. Let's take a look. Let's start with Go, and Go is all about moving about the packet capture. We can go to pack it, go to previous packet, or previous packet in conversation. Now, these icons also appear here on this tool bar. For example, if I wanted it to go to specified packet, I would select that. And here I can type 110, which will take me to packet 110. And there, I can take a look at the individual frame and do my analysis. We also have the Capture menu choice, and I'll drop this down. And this is all about setting yourself up to capture traffic. For example, if we select Options, that'll take us to the dialog box where we can look at input, output, and other options. We also see the blue fin here, which again, you see on the tool bar as a shortcut, you can also set up your capture filter, and every once in a while, you may have to refresh your interfaces so that [[Wireshark]] can recognize them. Analyze has a number of different features allowing you to analyze traffic. Well, of course, we have the Display Filters, and that's again on your toolbar, but also Display Filter Expression, and I'll select that. Once it's open, you can see that there are many ways
>
> **[1:32](https://www.linkedin.com/learning/wireshark-functionality/additional-menu-choices-14517308?u=76281980&t=92)** that you can create a more complex expression. But what happens when you have a really complex expression or complex display filter? Well, you can create a macro. Let's take a look. I'm at this website where it talks about the display filter macros. Now this is a method to create shortcuts for complex filters. For example, this really long filter, you wouldn't want to have to re-type that too often, you could create it, and then create a macro, and then run it at will. In addition, under the Analyze menu choice, you can see that there are other options when working with the packet capture such as Apply as Column, Apply as Filter, or Prepare as Filter. These are the same when you're working with packet capture, you can right-click, and again, you see those same options here as a shortcut. And this brings up a dialog box of currently enabled protocols. These are the ones that Wireshark currently has available and are dissected. And also, let's take a look at Follow. Now, Follow, you can see that there are a number of different options here, including follow the TCP stream, follow the UDP stream, transport layer security stream, or HTTP stream, and others. And then, Show the Packet Bytes is something that once you're on a certain field value, select that and that will show that specific byte value. Expert information is available here
>
> **[3:05](https://www.linkedin.com/learning/wireshark-functionality/additional-menu-choices-14517308?u=76281980&t=185)** as well as the shortcut in the lower left-hand corner, and when you select that, that will bring up the expert information on what Wireshark perceived as either an error, information, note, or chat. The Wireless menu choice is minimally functional. As you can see, there are some Bluetooth options, but the [[Wi-Fi|WLAN]] Traffic is not active on my machine, and that is because my [[NIC|network interface card]] doesn't go into monitor mode. If you are able to go into monitor mode, you could capture some of the radio tap headers. But also you see options for evaluating Bluetooth traffic. Now, the Tools has some fun features, one being the firewall access control list rules. Now I've selected that IP address down below and I'll select Firewall ACL Rules, which this brings up a stump of an access control list rule. Now, as you can see, there are many choices down below. We can use Cisco IOS, IPfilter, Netfilter, [[Windows]] Firewall, and some others. Here, you can select Inbound or Deny, and you can copy those when you're building your access control list, and I'll close that. And then, Help, and when we select that, you can see that there are shortcuts that you can go to to take a look at, for example, the Manual Pages, Ask (Q & A), Wiki, Sample Captures, and also periodically you might want to check for updates, and so that you have the current version of Wireshark.
>
> **[4:42](https://www.linkedin.com/learning/wireshark-functionality/additional-menu-choices-14517308?u=76281980&t=282)** So as you can see, in addition to some of those main menu choices, we do have other options to help improve functionality in Wireshark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (5), [[Statistics]] (1), [[Wi-Fi|Wlan]] (1), [[NIC|Network interface card]] (1), [[Windows]] (1)
> **Env Vars:** tcp (1), udp (1), http (1), wlan (1), acl (1)
> **Analogies:** for example (4), such as (2)
> **UI Navigation:** go to (4), right-click (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Exploring the Telephony menu](https://www.linkedin.com/learning/wireshark-functionality/exploring-the-telephony-menu?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wireshark-functionality/exploring-the-telephony-menu?u=76281980&t=1)** - [Instructor] [[Wireshark]] provides a wide range of voiceover IP tools that we can access in the Telephony menu. I'll drop this down so you can see all of the choices. Now, those [[Statistics]] range from specific signaling protocols to analysis of signaling and media flows. Now, in most cases, the media flow can be played. So let's take a look at the Telephony menu. Now, I'd like you to follow along, so I'm going to show you where you can grab a capture. You can go here on CloudShark, where I've downloaded this capture and opened it in Wireshark. Go to export, and then download file. And then, I downloaded the original file. In addition, if we go here to [wireshark.org](https://wireshark.org), you can see more information on the Telephony menu choice. And you can see there's a great deal of information on how those voiceover IP calls are dissected. So now I'm in Wireshark, and I'll drop down the Telephony menu choice. Now down at the bottom, you see SIP Flows. Now, that's Session Initiation Protocol. So you see SIP Flows, and also SIP Statistics. So of course, there's only a certain amount that we'll have to work with, and what you've captured is what you're going to get, as far as displaying it and analyzing it. But if you're having some trouble, you'll have to do some longer captures. So if we were to just select SIP Flows, and here, you can see some of those flows.
>
> **[1:34](https://www.linkedin.com/learning/wireshark-functionality/exploring-the-telephony-menu?u=76281980&t=94)** And I'll just select that. And in some cases, you can play the stream. We're not going to do that just yet. But this gives us some of the details. I'll close that. In addition, let's take a look at SIP Statistics. And here, you can see some of those statistics that might be more telling if there are issues. For example, global failures, rejected, unwanted, and other things that could possibly tell you, concerns that you might have to do some configuration resets. Also, let's take a look at voiceover IP calls. So I'll select this. Now, once you open it, it kind of looks familiar. Well, there's a number of different things. Now, for one thing, we can modify the column values and just give us a little more landscape to take a look at those. We also can see the start time and stop time. Now, again, this is going to be dependent on how your time settings are set up in Wireshark. And this is a relative time start, according to the packet capture. It's not generally what it actually is, but it's giving you a guideline. Now, here's your initial speaker, and where they're coming from. And this is the IP source and the packet that initiated the call. Now, this is where we're going to take a look at the from. This is pretty much what the calling number is. And in this case, it's a SIP call in the from field, from the invite. And as you can see, where it's coming from and where it's going to.
>
> **[3:07](https://www.linkedin.com/learning/wireshark-functionality/exploring-the-telephony-menu?u=76281980&t=187)** And here, it's going to. I'll just open this a little more. And you can see information as to where it's going to. And I'll scroll over. And then, you can see the status as to what is happening, the session initiation protocol, how long did it take, how many packets in call, and that it wasn't invite. Now, once you click on any of the calls, there are some choices down below. In some cases, you can prepare a filter, I'll select that. And that just puts the filter right up in the display filter area. And again, it put it up there, I'm going to have to run it by pressing enter. And then, that'll narrow the search so that I could just see that individual call. In addition, I can go to statistics. And in this case, I'll select flow graph. Now this is a great tool, as you can kind of see what's happening. I'm going to say limit to display filter. And here, you can see a little bit as to what's happening. Request invite, and I'm going to try. Now I'm going to ring. And okay. And then you can see that the packet's then, the exchange of data. So I'll close that. And we'll take off this, and then we'll go back to the telephony, into the voiceover IP calls. And in some cases, you can play the streams. So I'll select play the streams. And here, you see the actual dialogue. And I'm just going to minimize that so you can see.
>
> **[4:42](https://www.linkedin.com/learning/wireshark-functionality/exploring-the-telephony-menu?u=76281980&t=282)** And we'll play. (speakers speaking foreign language)
>
> **[4:55](https://www.linkedin.com/learning/wireshark-functionality/exploring-the-telephony-menu?u=76281980&t=295)** Okay. So that, is of course, if the codec is supported and that's anything in the g.711 family. So that's really the overview on the voiceover IP calls and the Telephony menu. And as you can see, there are a lot of options that we can use to evaluate calls in our capture in order to do an analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (5), [[Statistics]] (5)
> **Env Vars:** sip (6)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** is a  (2)
> **URLs:** [wireshark.org](https://wireshark.org) (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)


### 2. Capturing Traffic

[↑ Back to Table of Contents](#table-of-contents)

#### [Capture options](https://www.linkedin.com/learning/wireshark-functionality/capture-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/capture-options?u=76281980&t=0)** - [Instructor] When capturing traffic with [[Wireshark]], most of us are familiar with this interface, where we would go down below and select which interface we would like to begin a capture with. And we could even put in a capture filter. However, there are a few other capture options you should really become familiar with. Let's go up here to this Capture drop-down menu, and here we can go into Options, or we can use this icon and go to the Capture Interfaces. Now, once we go in here, as you can see, this gives a list of interfaces. Now we can capture on all active interfaces if we like, but down below, we want to make sure that it says, enable promiscuous mode on all interfaces. Here we can put the capture filter for the selected interfaces, but we're not going to do that. What I wanna focus in on, is the output. Go to the Output and here we can capture to a permanent file. Now, when Wireshark runs, it's just saving it to a temporary file. If you were to do something, for example, baselining, and you wanted to just simply run three captures for each subnetwork, you could do that. So here it first says, capture to a permanent file, and then where do you wanna put it. So we'll go to Browse, and we'll put on here Baseline. I put it on my desktop in a folder. And we'll say Save. Now, the next thing it says,
>
> **[1:32](https://www.linkedin.com/learning/wireshark-functionality/capture-options?u=76281980&t=92)** how would you like this to be output. Now you have a choice, pcap next generation, or plain pcap. Depending on where your gonna pull it into will make that difference. I generally use pcap next generation so I can put some comments. Down below, this is where you can say, create a file automatically after what. It could be determining how big it's going to be, for example, the size. Or how many seconds or minutes or even hours. I'm going to say 10 seconds. That'll give us a nice sample. Now, this here, use a ring buffer, we'll talk about in just a second. Now let's go to the Options. Now, when we look at the Display Options, we'll keep those the same. Update the list of packets in [[Real-Time]], and automatically scroll during live capture. The Name Resolution we'll keep the same as well. Now here's where we say, stop the capture after what. And this could be after so many packets, or after so many files. I'm going to say after three files. So you have a choice in how you want these saved. Now it's all set up, let's let it run. When the screen goes blank, that means it's starting a new capture. Now we know it's complete, because we do not see the red square, and we know that the fin is active and it's ready to begin capturing again. But let's go ahead and take a look at the files.
>
> **[3:06](https://www.linkedin.com/learning/wireshark-functionality/capture-options?u=76281980&t=186)** Now, we're right on the desktop, and I want you to take a look that there are three files. Now, with that, you see the name of it, and we called it Baseline. And then we have here, and I'll put it in order, one, two, three. So it's sequencing, how many we want to run. But then after that, there's a number, and that's a time stamp. As you can see, that's 2018, and then the date, 7/23, and then the time, 20:32:10, which is 8:32 and 10 seconds. So that's how we save to a permanent file. That's pretty simple, and again, this is something you could use while baselining. Now, we can also capture to a ring buffer. So we'll go back in, and what I'll do is, I'm gonna close this out so we have a blank screen. Now we'll go to Capture and then to Options as well, and now we'll take a look at our options for output. Now, in this case, capture to a permanent file, we're gonna leave that, and we're gonna uncheck this. And what we're going to say is use a ring buffer with, we'll say three files. I'm gonna say Ring. And we'll say three files. And then here's our options, and stop capture after three files. So what a ring buffer will do, is just write over that ring buffer after so many whatever you're going to say, I'm gonna just say after five seconds so it runs fairly quickly.
>
> **[4:40](https://www.linkedin.com/learning/wireshark-functionality/capture-options?u=76281980&t=280)** Ring buffer is great if you want this to keep running over and over and over again, in the case you're going to keep your screen up and you're looking for a particular protocol, or something that you're suspicious that someone perhaps gaming, and you set a coloring rule, and you can check to see if this happens. Remember that unless you save it somewhere, it will consume all of your memory. So I'll just start it. And now that's stopped. Now, when you're taking a look at this, it has stopped, down below on the status bar, you see that Ring 00003, the third ring buffer file is complete. Now, if we were to run any more, it could continually write over and over and over the ring buffers if we didn't stop it. And here we go into our folder, and there you can see the three files that were created with the ring buffer. So you have some choices with capture options. Of course you have your standard, where you select an interface and begin the capture, but there's also the ability to save files, either multiple files to a permanent file, or even a ring buffer

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2), [[Real-Time]] (1)
> **UI Navigation:** go to (5)
> **Ports:** :32 (2), :10 (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Use a ring buffer](https://www.linkedin.com/learning/wireshark-functionality/use-a-ring-buffer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/use-a-ring-buffer?u=76281980&t=0)** - [Instructor] We know in [[Wireshark]] there are various capture options including saving to a ring buffer. Let's do that. Let's save a file to a series of ring buffers while monitoring traffic. Now what we're going to do is set this up by adding some coloring rules. Now first I need the filter and I want to use VSS monitoring as my filter. And I'm gonna just copy that, but then I'm going to go into the coloring rules. Now we've not talking about the coloring rules but maybe you're familiar with them, but I'm going to disable all the coloring rules except one, which we're gonna create our own. So we add it and it is says new coloring rule and I'm going to paste the VSS monitoring and I'll just call it VSS. Now with that coloring rule, we'll activate it and what we want to do is say what do we want the foreground and the background to be so maybe make the foreground that burgundy color and then the background green so that it will show up. And then we'll say apply as a filter which it already is and then we'll say okay. Now we'll go back in to your capture options. Now with output and here we see it says leave blank for a temporary file which is the default. We're gonna go browse and I'll put it on the desktop
>
> **[1:36](https://www.linkedin.com/learning/wireshark-functionality/use-a-ring-buffer?u=76281980&t=96)** and I'm gonna just call it VSS. Then I'm gonna say save. Now in this case, we'll just say save it as a PCAP next generation and create a new file after and we'll say five seconds. And then user ring buffer and usually it doesn't matter because it's just gonna overwrite 'em but if you wanted to go back and look through them, you would use more than three. But I'm gonna use three and that means after 15 seconds it's gonna start to write over the first one and do that over and over until I stop it. And here's your options. I'm not gonna say stop the capture this time. We're gonna just let it run and you'll see the effect of that. So what it'll do is put that filter up and then I'm going to watch for that color. Make sure we have the [[Wi-Fi]] selected and we'll say start. And now automatically I see that there's one come up. It's going to turn white again because it's coming up with another file. So every time it begins a new file it'll pause for a second and then it keeps writing on the file that we created. And we'll do this over and over again until I say it's done and that's by selecting the red square right here. So as you can see I can use the ring buffer to just simply let it run and then I can notify someone if it's a dangerous protocol that I'm concerned about. In this case it's just a simple example but it's a great tool so to kind of keep you in touch with what's happening in the network without consuming
>
> **[3:09](https://www.linkedin.com/learning/wireshark-functionality/use-a-ring-buffer?u=76281980&t=189)** all of your resources. Now I'm gonna stop that and we can go back in and take a look at our rings and as you can see that's VSS, that's what we named it and it actually generated 11 files 'cause it kept overwriting. Alright so as you can see that coloring rule which worked very well for us allowed us to see when we see the VSS monitoring. Now we're done and let's clean this up just to refresh your memory on captures and when you put in a capture filter of course you wanna remove that but the same thing with output, we wanna make sure that that doesn't retain anything in there. Otherwise it will do it again. So uncheck all of what you've set up for anything as far as ring buffers or permanent files and then I generally close it and close Wireshark. And then I bring it back up again so it's a nice fresh interface. So as you can see with Wireshark we have various capture options including using a ring buffer and you can couple that with specialized coloring rules to monitor for certain types of traffic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), [[Wi-Fi]] (1)
> **Env Vars:** vss (6), pcap (1)
> **CLI Commands:** make (3)
> **Cross-References:** coming up (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Ring buffer with coloring rules](https://www.linkedin.com/learning/wireshark-functionality/challenge-ring-buffer-with-coloring-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/challenge-ring-buffer-with-coloring-rules?u=76281980&t=0)** (bright electronic music)
>
> **[0:05](https://www.linkedin.com/learning/wireshark-functionality/challenge-ring-buffer-with-coloring-rules?u=76281980&t=5)** - [Instructor] Let's do a challenge. In this challenge, we'll use a Ring Buffer with Coloring Rules to capture and examine network traffic more efficiently. For this challenge, we'll use multicast [[Domain Name System (DNS)|Domain Name System]] or mDNS. mDNS provides IP address resolution without using a DNS server. It's commonly used by devices on a LAN to find and communicate with other devices that are using plug-and-play capabilities. So that you can see just how much MDNS traffic is on your network, we'll create a coloring rule and use a ring buffer. Now, you'll find detailed instructions in the text file: Helpful hints, links, and challenges, but here are the key objectives. You'll first go to View, and then Coloring Rules to set the new coloring rule, then go to Capture, and then Options to set the ring buffer, and then finally, when you're all done, you'll clean up your workspace. This challenge should take you about 10 minutes. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Domain Name System (DNS)|Domain name system]] (1)
> **Env Vars:** dns (1), lan (1), mdns (1)
> **CLI Commands:** find (2)
> **Code Identifiers:** mdns (2)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)

#### [Solution: Ring buffer with coloring rules](https://www.linkedin.com/learning/wireshark-functionality/solution-ring-buffer-with-coloring-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/solution-ring-buffer-with-coloring-rules?u=76281980&t=0)** - [Instructor] Okay, now let's check our work. In this Challenge, you were to create a Ring Buffer with Coloring Rules to capture and examine network traffic more efficiently. First, you were to go to View and then Coloring Rules to set the new rule. We're first going to uncheck all visible rules. (mouse clicks)
>
> **[0:38](https://www.linkedin.com/learning/wireshark-functionality/solution-ring-buffer-with-coloring-rules?u=76281980&t=38)** And then in the lower left hand corner, select the plus sign to add a new rule. For the Name, we'll name it, NameCast. (keyboard clicks) For the Filter, we'll use mdns, all lowercase. (keyboard clicks)
>
> **[1:14](https://www.linkedin.com/learning/wireshark-functionality/solution-ring-buffer-with-coloring-rules?u=76281980&t=74)** Now for this Filter, we'll select a Foreground or a text color. And we'll make it kind of crazy, I'll use yellow, and we'll say, OK. And then a Background color, and we'll make it hot pink. And then we want to make sure the Filter is active. And now I'll say, OK. And now we're going to set the Ring Buffer. We'll go to Capture and then Options. And then under Capture to a permanent file, we'll need to navigate to a folder. I'll select Browse. And within this, I want to add a New Folder, and we'll call it Ring. (keyboard clicks) And I'll call it RingBuffer. (keyboard clicks) And then I'll use the following name, mDNS.pcapng. Now it's best to add the extension so that [[Wireshark]] will save it appropriately. And I will say, Save. And then we're going to say, Create a new file automatically after, and I'm going to say 1,000 packets. (keyboard clicks) And I'll select that. And then I'm going to say,
>
> **[2:48](https://www.linkedin.com/learning/wireshark-functionality/solution-ring-buffer-with-coloring-rules?u=76281980&t=168)** Use a ring buffer using 4 files. Now everything is set, and we're going to say, Start. Since I already have a capture, I'm going to say, Continue without Saving. And now as I allow it to run, I'll be able to see the MDNS traffic. Now you're going to let it run for about 20 seconds, and then you'll stop the capture. And then you can go to File and then Open, to see the files that Wireshark has created. And there are your four packet captures. And then I'll close that. And then finally, you'll need to clean up your workspace. So you'll go to View and then Coloring Rules. And then you'll want to uncheck that and then check all of the filters that you want to be active. And then we'll say, OK. And then next, you'll go to Capture and then Options. And then again to the Output tab. And then you're going to remove the file name. And then uncheck, Create a new file, and also uncheck, Use a ring buffer. And then we'll say, Close. I hope you enjoyed this Challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2)
> **UI Navigation:** go to (5), select the (1), navigate to (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** mdns (1)
> **Env Vars:** mdns (1)
> **Best Practices:** it's best to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Capture filters](https://www.linkedin.com/learning/wireshark-functionality/capture-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/capture-filters?u=76281980&t=0)** - [Instructor] There are times when working with [[Wireshark]] that you want to capture just a certain type of traffic, and this can be achieved by using a capture filter. So, you can go down below here, and put your capture filter, or go to the menu choice, and then options, and there, again, you can see the capture filter, or we can go to the icon and select the capture filter. But first, I wanna get a certain type of traffic. Let's start this capture, and I'll stop that, because what I want is a router advertisement. So, we take a look at this, and down below, here, you see router advertisement. This is ICMP version six, and if I want to create a filter, for a display filter, I simply right click and say apply as a filter, and it will run it. And now we only have the router advertisement. Well, will that work in a capture filter? Let's try it. I'll take that, and now we go to Capture, and then to Options, and then down below, enter a capture filter. Well, it's turned red, and that means it doesn't like it. There's a syntax checker in both the display and capture filters. If it's green, that means it's good. If it's red, it means it won't work. And yellow means go ahead and try it, it might work. So, we need to take that off. We'll go up here to capture, and then capture filters, and here, you can see a list of built in capture filters.
>
> **[1:35](https://www.linkedin.com/learning/wireshark-functionality/capture-filters?u=76281980&t=95)** Now, you might not run any of those, but it does help you to build the syntax. What I'm going to do is add a new one. So, I'm gonna add a new capture filter, and now we're going to have to build this. All right, now, you're looking at that and you're wondering why both icmp and ip? Well, because, icmp is an integral part of ip, more closely coupled than before, and they run together, so we'll call this capture filter ICMP Router Advertisement. Okay, now, if you notice one thing, if I've been over here, and I named it, I used a capital ICMP. But with the filter, I used a lowercase, and that is actually the syntax. It must be a lowercase when it's on the left hand side of the filter. Now, we have that in there, we're gonna say OK, but now let's go back to Capture, and then to Options. Now, this time, I can use this bookmark, and I'm going to select this little green flag, and here they are, and this one I just added, it is up at the top. All right, so now it's in there, and it's ready for me to start. All right, and now you see it did work, so, remember that when I'm capturing that, I'm only capturing the type of traffic I filtered, and nothing more. We can find those in the Wireshark folder. When you go there, you'll see See Filters,
>
> **[3:07](https://www.linkedin.com/learning/wireshark-functionality/capture-filters?u=76281980&t=187)** and I'll right click, and we'll open it up with Notepad.
>
> **[3:15](https://www.linkedin.com/learning/wireshark-functionality/capture-filters?u=76281980&t=195)** Now, what's great about Wireshark, is that when you create these filters, we can share them with our team. So, when you take a look at those, you might wanna take a look and, maybe, add to those. There's one other thing, though. If you do add or modify or anything, you wanna make sure that there's always a blank line at the end, and that's so that all of them will load. All right, so, we'll close that. And as you can see, we can copy that and share that with our team, but the last thing we wanna do, before you move on, is to clean up your work. I'm gonna go to Capture, and then Options, and then we'll take off that filter, and then close that, and that's so it's nice and fresh. I also restart Wireshark, so there's no remnants of the capture filter. So, when working with Wireshark, you can apply a capture filter, and it will only capture that type of traffic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (5)
> **UI Navigation:** go to (4), select the (1)
> **Env Vars:** icmp (3)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Display filters](https://www.linkedin.com/learning/wireshark-functionality/display-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/display-filters?u=76281980&t=0)** - [Instructor] While working with [[Wireshark]], many of us are familiar with the display filter which is found right up here. You can use a display filter while the capture is active or apply a filter to capture it once the file has been created. A display filter will allow you to display only the packets that match that filter. So, I'll go up and I'll put a simple protocol tcp. And of course that will filter only TCP traffic. Now I'll close out of that. Now, there is one type of traffic that I would like to filter and that's Simple Service Discovery Protocol. Simple Service Discovery Protocol is a way that devices make themselves aware to one another. However, it can complicates things in that it goes across your entire network unless you stop it. As you see it's a multicast and it will travel through the routers and go across the entire network like a broadcast, so you'll see SSDP packets from multiple sub networks. Let's just see how much traffic there is. I'll got to [[Statistics]] and Protocol Hierarchy. And here we see SSDP at 20%. Let's now create a filter. I'll go to the SSDP packet and I'll go to User Datagram Protocol and I'll right click and I'll say Prepare as a Filter and select it. Now, remember, Prepare as a Filter doesn't run it, I'll have to press enter
>
> **[1:35](https://www.linkedin.com/learning/wireshark-functionality/display-filters?u=76281980&t=95)** and now it ran that filter so we only see SSDP packets. I'm gonna copy this but now we gonna create it inside Display Filters and we'll preserve it. So, when we go in in the Display Filters, we can use this to check our syntax and create our own display filters. The ones that are there can be used as well but I'll just create one by going to the plus sign and as you can see, it's saying what would you like and I'll paste in that UDP destination port equals 1900 and over here I'll type SSDP. Now, you noticed it turned green because the syntax checker will match to make sure it's in the correct format. And we'll say OK. Now, we'll close out of here and when you see that there is the bookmark right here, I'll click on that and there you can see the filter we created, 1900 and it will run it so have it available to you. And then take a look below on the status bar, there you can see that 20% of your traffic is SSDP traffic. But we also can share these. When taking a look in Program Files, under Wireshark, in that folder, you see dfilters. Now, the display filters, I'm gonna right click and I'll say Open With and we'll open it in Notepad. We can edit these, we can copy them and then share them with coworkers if you like
>
> **[3:08](https://www.linkedin.com/learning/wireshark-functionality/display-filters?u=76281980&t=188)** but if you do any modifications, make sure that there's a blank line after the last entry so that they'll all load, so you can see how display filters work and they very handy and we can preserve them by going up to Analyze and adding one in the Display Filters area. I'll take that off but I just wanna let you know that SSDP is a recognized protocol by Wireshark and I can simply type ssdp and there you have it but I wanted to show you that as an example that there's many ways that you can display only the traffic you want by using filters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), [[Statistics]] (1)
> **Env Vars:** ssdp (7), tcp (1), udp (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Find packets](https://www.linkedin.com/learning/wireshark-functionality/find-packets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/find-packets?u=76281980&t=0)** - [Instructor] When going through a packet capture in [[Wireshark]], there are several ways to find objects in text. Let's take a look. Now, you know there's the display filter and the display bar is right up here but now let's take a look at Find Packet. Now it's up here, Edit, and Find Packet and that will bring down that little tool bar, I'll cancel that or you can go to this icon right here and this locating a packet, you select Find a Packet. Now, when you get in there, you'll see that there are choices. It could either be Display Filter, Hex Value, String or Regular Expression. Let's take a look at the string. Now, when it's saying what am I looking for? Select Packet Details and this will tell it where you want it to look and I usually select Details. The list is what you see on the top panel, the details are the details of a single packet and packet bytes is the hex dump, so I say Details. Now, Narrow and Wide, this has to do with how the text is represented. Narrow is UTF-8 or ASCI and wide is UTF-16. So, I select Narrow and Wide and that uses both filters and it's checking all of the text representation and then Case Sensitive, well, that's up to you, if you want to force it to be case sensitive you can select that. I usually leave it unchecked. So, when I'm in there, as you see the strong value is waiting for me to put a string, so let's take a look and I'll try to find a PNG,
>
> **[1:35](https://www.linkedin.com/learning/wireshark-functionality/find-packets?u=76281980&t=95)** png and then I'll say Find. And here's a PNG. Now, when I do find something, and I'll just select it again, I want you to take a look down below on the status bar, it will tell us that we have found an item. Now, you're gonna have to look through this and I'll give you an example, when you're wondering who would do this, this might be someone who's doing a malware analysis that would be called the hunter or subject matter expert in a security cyber ops center. When you're looking for malware, you really have to look everywhere and you're looking for a signature so that you could perhaps write some type of signature rule. So, I'm looking all over and I'm finding PNGs. Now, their results might be confusing and I'll tell you why, so you take a look here, where you see apng, that might be what you want but understand that the characters that are represented might be captured during the search, so it might not be as pure as you'd like it but that's the nature of the search. So, I was able to find that, let's take a look and see if it's able to find kittens. So, I'll look for kitten and yes, it was able to find it here. You can see kittens-in-a-cup and more kittens and more kittens and that's part of actually the whole image that was downloaded. What about something it can't find? And we'll put in dog.
>
> **[3:07](https://www.linkedin.com/learning/wireshark-functionality/find-packets?u=76281980&t=187)** We'll select dog and we'll say Find. It says no packet contain that string in its dissected display. And I'm looking and it's still gonna try to find it, it won't be able to, so when it can't find something, it lets you know. Now, how you search, if you go to the top, I usually just like you would a [[Microsoft Word|Word]] document, go up to the top and begin your search. When it reaches the end, it will go back through but just to be safe, pull it all the way up to the top. Now, we see the string value but let's take that out and now let's try a display filter. All right, let's put http and Find. Now, unlike the display filter that's in the display bar up here, it will go through and select one at a time, so if you take a look down below, the status bar will say yes, I found another one, I found another one, and it goes through one at a time. So, you know that there is actually HTTP traffic and so that helps you to narrow that down and actually drill down to that or perhaps I know that there's something here I want and I can right click and I can see mark that packet. So, as you can see, there's other ways that you can find packets in Wireshark either by using one of the filters here that gives you the ability to look at either a display filter, a hex value, string or regular expression.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (16)
> **Env Vars:** utf (2), png (2), asci (1), http (1)
> **UI Navigation:** go to (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Mark packets](https://www.linkedin.com/learning/wireshark-functionality/mark-packets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/mark-packets?u=76281980&t=0)** - [Presenter] When working with a packet capture sometimes it's handy to simply mark a packet you find that's interesting and then go back to it and analyze it with more detail. It's easy to find those marked packets in a large trace file and we can actually save and export those marked packets. So in order for us to take a look at that, we'll go to edit, then here you can see mark or unmark packet, mark all displayed and then as you can see, once they are marked, we can unmark, next mark, or previous mark. Over here on the right hand side, you see some commands. These are called accelerators and for those folks that like to use the keyboard, these options are mostly available in [[Wireshark]]. There's also the option if I right click, you can see mark or unmark packet. I'm gonna look for something in particular and I'll go to find a packet and in this case, I'll go to find a string value. For example, we'll say that I'm doing a malware analysis and I'm studying a packet capture on a subnetwork and looking for a way to identify a signature I'm going to write. Well, in this case, I'm going to write kitten 'cause I know this packet capture has a lot of kitten references and I'll say find. And there's one, I'll right click and I'll just say mark and then it will go to the next one. We'll do a couple more. Alright and then we'll cancel.
>
> **[1:35](https://www.linkedin.com/learning/wireshark-functionality/mark-packets?u=76281980&t=95)** Now, when you have them marked, there's a couple of things. First of all, we see that in some places there is black text and you're thinking maybe it will confuse me, but it won't because it's marked with black with a white background. So if I go to edit and then previous mark, it will go back up to the ones I've marked. We can go to the previous mark as well and if it distracts you, you can simply take off the coloring rules like that. I'll put them back on. Now one thing is that when you're working with a packet capture, it's really handy to have that feature so you can go through it. You might want to filter those so you can actually go back and see just the marked packets. In that case, we're gonna put a filter and frame marked equals one and then we'll run that and here you can see, they are all marked. Those, as you can see, would be something I could evaluate. We can also print them to a text file. We would go to file and print, but what would we like to print? Here we can see that we can actually ask for the whole thing, the summary line and the details and here's where you can actually say that we were going to marked packets only and there are four displayed. So when we go in and we can look at the page setup and this'll tell us how the page is set up. But we can also go to print and this is one option that you can use is to print to pdf and that's handy because if you want to include it
>
> **[3:08](https://www.linkedin.com/learning/wireshark-functionality/mark-packets?u=76281980&t=188)** in a report, it's in a pdf format. So I'll say print and it'll be in my Wireshark Desktop folder. Kitten.pdf. Now we'll say that enough for that. We can also go in and, as you know, we can't save the marks in the trace file, once you close it, it will take away the marks. We have to do something with it. We want to go to file and export specified packets. In this case, we'll go to my Desktop and what we're going to do is marked packets and only the displayed ones. That's going to be kitten and then we'll say save. We'll have just those four marked packets. You wanna go back into it and you can say, open. We'll go to my Desktop, there's the packet capture and there's your four marked packets. As you can see, we can mark packets when we find something interesting as we're scrolling through a trace file. We can mark them and we can navigate up, back, and through them. We can use the accelerator. We can file and print to a pdf or some other way to print out. And we can save just those marked packets into its own separate trace for further analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2)
> **UI Navigation:** go to (11)
> **CLI Commands:** find (6)
> **Prerequisites:** setup (1), set up (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### [Fine-tune columns](https://www.linkedin.com/learning/wireshark-functionality/fine-tune-columns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/fine-tune-columns?u=76281980&t=0)** - [Instructor] When working with [[Wireshark]], we can customize the interface by fine-tuning the columns. Now the columns ride upon the top of the packet list, and a lot of you are familiar with those column values. I'll take the coloring rules off so that we can see them a little better. Now as you see that number is generally over on the left, and that's the number of packets that it's gone through and captured. And you can sort those column values and put them in order, and as you can see, the next one is time, and I generally leave that as well. Now within the columns, I can right click and I can align either right, left, or center. I'll align it onto the left. And as you see, the source and destination IP addresses, and then followed by the protocol. If you want to reorder it, you can simply move the column value over, and that reorders the columns. If you want to adjust all the columns so they span across the entire window or fit to the window, you can select this option underneath tools, resize packet list columns to fit contents. Now understand in certain circumstances in using IP Version 6, it will span a little bit too large and you might have to adjust the columns again. Now within that, you can easily add columns. For example, I would just like to see the TCP acknowledgement set. So apply as a column, and that will say whether or not it's set. I'm just gonna adjust this, and now I'm going to go to frame three, and this is using Kerberos
>
> **[1:34](https://www.linkedin.com/learning/wireshark-functionality/fine-tune-columns?u=76281980&t=94)** on the network, and I wanna see how many threw an error. I'm gonna right click, and I'll say apply as a column. And in this case, what this does is tell me which one is throwing an error by giving me a check mark. Again, I can sort that to bring up the ones with the error up at the top, or I can do a little bit more investigation. Now when you're working with the columns, it's easy to take away or add to them. Sometimes they get a little busy, and I want to uncheck those just so that they clean up the packet list. But that didn't take 'em away. We'll have to do that by going into the column preferences. You go right click and column preferences, and that will take you right here so you can modify and take away some of those columns that are displayed. I'll close that, and show you can also go here to edit, preferences, and columns. So for example, we didn't want the Kerberos error. I can select that and then hit the minus sign. And again, another one. And another one. And now I can say okay. And if you do want to add something, you can right click on the column, and here we can say edit column, and that will say what would you like to do as far as edit? And I can say info, and keep it at information, and then we'll just say okay. What's nice about doing that, if you go in and you wanna edit a column, you maybe created one and it didn't work well, go to edit column.
>
> **[3:08](https://www.linkedin.com/learning/wireshark-functionality/fine-tune-columns?u=76281980&t=188)** But here you can see all the different types that are preset in here to help you build out that column correctly. And I'll say cancel. We'll put back the coloring rules, and now you can see everything, and again, you can keep this the way you like it, but it's really nice to personalize your interface by fine-tuning the column values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1)
> **UI Navigation:** go to (2), click on (1)
> **Analogies:** for example (2), just like (1)
> **Env Vars:** tcp (1)
> **Versions:** version 6 (1)
> **Speakers:** - [instructor] (1)


### 3. Personalizing the Interface

[↑ Back to Table of Contents](#table-of-contents)

#### [File and packet comments](https://www.linkedin.com/learning/wireshark-functionality/file-and-packet-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/file-and-packet-comments?u=76281980&t=0)** - [Instructor] When you're working with trace files, you may have the need to add a comment, either to a single frame, or to the entire capture, and we can do that in [[Wireshark]]. Now, during the course of your day, you might go through and, say, baseline certain subnetworks. Run a quick trace, and then take a look at it. In one of the subnetworks, you see that port 44 44 was showing up in the trace file. Now, you remember that port 44 44 was related to some malicious activity, and that could've been from back in your computer science days. We're gonna take a closer look and see what it could be. And you do a search, and you see that port 44 44 is related to Blaster Worm. Do a little bit more investigation and you see that Blaster Worm was discovered in August, 2003. Now, that's a long time ago. And you ask yourself, how is an old malware variant discovered on today's network? Well that's because what's old is new again. Malicious actors are now re-releasing old variants with the hopes that they'll slip by our detection systems because they've been forgotten. Now, somehow, it's showing up on your network. So, what you'll want to do is add a few comments and then after that, we can send it to your coworkers. Let's start out with frame two. I'll go to edit, and packet comment. And I'll add the packet comment
>
> **[1:35](https://www.linkedin.com/learning/wireshark-functionality/file-and-packet-comments?u=76281980&t=95)** TCP port 44 44 suspicious. Now, I'm gonna copy this because I'm gonna reuse this. We'll say okay. And we find another one, we'll say frame five. Now, we can also right click and say packet comment and then we can copy that. And we'll go down to 10, frame 10, right click, packet comment, and we can then copy and paste that. Alright, so now we've added the packet comments. Now, we see what they are because they're in green, but there's a couple other ways that we can see those comments. In the lower left hand corner is the expert system. We'll select that. And when we bring it up, you can see that there are a couple of headings. In the lower right hand corner, this is where you can deselect what is shown. I'm going to un-check the warning, and un-check the note so that only the comments are showing. And we'll drop that down, and as you can see, we've grouped them by summary because we kept them the same. So now I can actually see the comments. We can also add it as a column value. Right click, and say apply as a column. And now, we can put those packet comments and sort them so that they all stay up at the top and we can look through those. We'll keep that in order as well, but as you can see, that gets it so I can actually see the packet comments. And now I can actually do one more thing, we can add comments to the entire capture.
>
> **[3:11](https://www.linkedin.com/learning/wireshark-functionality/file-and-packet-comments?u=76281980&t=191)** Now we'll go into [[Statistics]] and capture file properties and down below you can see capture file comments. What I'm going to do is go here and just copy this information in the details and then we'll paste it in here. And so you understand there are limitations to what we can put in the comments area. It would be nice if we could put an image, but we're not able to at this time. But we'll save the comments, and then we'll close. Now, if you take a look in the upper left hand corner, we see that there's an asterisk right before suspicious traffic. And that's telling you that there are some comments on this packet capture. The last thing we'll do is save this. We'll go to file and save. Now, this is what I want you to see, it says this capture has comments, but the format you chose doesn't support comments. It'll ask do you want to discard the comments and save it in the format you chose? No, I don't want that, I'm just gonna cancel. What we have to save it in is PCAP Next Generation. So now, I'll say file and save as and then what we'll do is drop this down to get PCAP Next Generation, and we'll put MS blaster. And now it will be able to be saved. Now, if we close that and we then open it back up, you'll see that it's retained the comments and also the column value so that a coworker can easily take a look
>
> **[4:44](https://www.linkedin.com/learning/wireshark-functionality/file-and-packet-comments?u=76281980&t=284)** at what you've written. So as you can see, we can add comments either to a single frame, or to the entire packet capture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1), [[Statistics]] (1)
> **Ports:** port 44 (4)
> **Env Vars:** pcap (2), tcp (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Configuration profiles](https://www.linkedin.com/learning/wireshark-functionality/configuration-profiles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/configuration-profiles?u=76281980&t=0)** - [Instructor] One of the things you can do to personalize the [[Wireshark]] interface is to create your own configuration profile. When you create your own configuration profile several elements are maintained and preserved for that profile. Things such as preferences, capture filters, display filters, coloring rules or disabled protocols. They'll be maintained and can be brought back when you need them. Now when you first open the interface you see that there are three default configurations, but we can modify them and make one personal for you. When we begin take a look at the interface, and on the lower right hand corner you see profile default. Now I'll open this up and as you can see there are two others. We'll take a look at the Bluetooth and we'll take a look at the classic. We'll go back to default and then I'm gonna go in and make one my own. We'll go to Edit and Configuration Profiles. Now because I went in and modified that and opened it it thinks I made a new change so I'm just gonna take those off and we'll keep the default that are built in. So I'll create a new profile by using the plus sign and we'll call it Lisa. Now once I say OK it'll revert back and then I'll have to build it. Okay so now as you can see this reverts back and now I'm gonna have to modify it to the way I like it.
>
> **[1:35](https://www.linkedin.com/learning/wireshark-functionality/configuration-profiles?u=76281980&t=95)** So I'm gonna first go in and to View and take off Packet Bytes. And then I need to change that font. So we'll go into Edit and then to Preferences. Now here's where I can make some modifications. Well the one thing I want to do is font in colors. Now as you see it's defaulting at 10 and I wanna increase that to 18. And I'll keep it at Consolas. And then for the marked packets I'm gonna make that a yellow background with black text. We'll keep everything else the same. Now the layout, we can use the same layout and I think I like everything else in here. But I can also go in here and maybe disable some of those protocols or change them, but I'll leave them the same. We'll say OK and then I wanna change the coloring rules. Go to View and Coloring Rules and with this I think we're gonna take off some of the stuff that really just seems busy to me. I guess I'll leave Bad TCP. And let's see check some errors. And those things that really I don't care about. And we're gonna say OK. And now you can see how it is personalized and it's my own configuration profile. Down below in the lower right hand corner you see the profile is Lisa.
>
> **[3:08](https://www.linkedin.com/learning/wireshark-functionality/configuration-profiles?u=76281980&t=188)** If I wanna change it back to default all I do is go back to default. So you can see that you can create configuration profiles. All of that information will be stored and personalized for you. You name it and then it will save your changes and you can revert back to the default at any time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1)
> **CLI Commands:** make (4)
> **UI Navigation:** go to (2), open the (1)
> **Cross-References:** go back to (2)
> **Env Vars:** tcp (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Appearance and layout](https://www.linkedin.com/learning/wireshark-functionality/appearance-and-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/appearance-and-layout?u=76281980&t=0)** - When working with a trace file you can modify the appearance and layout. Well, we'll go to Edit and then to Preferences. And we start out with "Remember main window size and placement". Now with that, I keep it the way it is and the reason is when I'm working within a trace file sometimes I modify the feel of it and where it is and how I place it. So I wanna keep that so it goes back and retains the way I worked with it previously. The next one is "Open files in". And it gives you the choice. I've left it in there as the default which is "The most recently used folder". And that's because if I'm working on a project I'll go back to that folder again and again. But you can change that. For example, if you have a default place that you want those captures to go into you can change that by going to Browse and selecting the appropriate folder. Now here we can say "Show up to" how many filter entries and how many recent files. Now show up to 10 filter entries; that's when I'm in the display filter, it remembers what I had built prior to that. And if I start to type it, one of those 10 will come up. But you can drop that down if you don't want that. Or you can increase it; maybe put 12 filter entries. We'll keep it at 10. And then the second one is "Show up to 10 recent files" which again you can modify that if you wanna drop it back or add to it just for convenience. The next checkbox is "Confirm unsaved capture files".
>
> **[1:37](https://www.linkedin.com/learning/wireshark-functionality/appearance-and-layout?u=76281980&t=97)** It's always a good idea to do that because well, you did capture the file and what was the point of that? Well, I keep that just to remind me that maybe I want to save it. Why wouldn't I want to save it? Well, one example is that you're doing a pre-baseline assessment. You are doing a site survey moving about the sub network, and you just do a couple of quick three-, four-second captures just to see the amount of traffic you're gonna get and what you're gonna need to do. So then you would uncheck it so it's not prompting you over and over again to save the file. Now the main toolbar style is up here. There's your main toolbar and as you can see, it's an icons-only. But you can also do text-only or icons and text. So let's do that. We go to "Icons & Text", and we'll say OK. Now you can see that it not only lists the icon but also the text explaining what that icon is. This is handy if you're just learning or you have students that are learning. It helps them to know what those icons mean. Now of course we know we can still lay our [[Cursor]] on the icon and it will tell us, but this is nice and handy. Now we'll go back into Preferences and I'm going to change it back to "Icons only". Now what's really nice and somewhat of a powerful feature in [[Wireshark]] is the developers have added support for different languages. So what it defaults at is "Use the system setting", which when you're installing your
>
> **[3:10](https://www.linkedin.com/learning/wireshark-functionality/appearance-and-layout?u=76281980&t=190)** operating system of course it says "What would you like as far as a language?" And it will use that. But you can change that and as you see, it has other options including Chinese, English, French, German, Italian, Japanese, and Polish. Now for those of you that are curious I would encourage you to do a screenshot of those choices so that in case you wanted to roll back you will be able to identify where it is that you want to go back to in case you did change the language options. Now let's look at the Layout. Now the Layout is how we look at it with the three panels. As you see the default is the Packet List, which is up on the top in the list of packets that are being captured or have been captured, followed by the details of the single packet, and then the third panel are the packet bytes. And that's the default. But I can change that if I like. For example, let's select this layout and let's take a look. So as you can see it modifies the way that it looks and you can even do something while you're in there as well. You can modify that, bring it back up or down. I'll go back to the default. And then down below it says "Packet List settings: Show packet separator". Well what does that do? Well let's select also. Select that and we'll say OK. Now it's really hard to see but there's a fine white line in between and that's your separator. And that's nice if you want to have a gridline feature.
>
> **[4:46](https://www.linkedin.com/learning/wireshark-functionality/appearance-and-layout?u=76281980&t=286)** I don't need it so I'm gonna uncheck that. Go back to Layout, and uncheck that. Now the last option has to do with the "Status bar settings". Now the status bar is all the way in the bottom. Your status bar can also add the ability to "Show selected packet number" and "Show file load time". Well let's take a look at "Show selected packet number". And let's say OK. That's nice because what it will do is if I go to a packet, you can see it's 1868. So again maybe if you are working with a group you can say, "Well, now I'm at packet 1868, let's go to that." And something else you can do is you can modify that status bar a little bit to give you a little bit more room if you need to. And the last one is on the Layout to "Show file load time". And I don't use that only because I know some trace files take a little bit longer to load and I don't need that information. So as you can see you can modify and personalize the appearance and the layout of the Wireshark interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2)
> **UI Navigation:** go to (4), checkbox (1)
> **Cross-References:** go back to (4)
> **Analogies:** for example (2)
> **Speakers:** - when (1)

#### [Columns, font, and colors](https://www.linkedin.com/learning/wireshark-functionality/columns-font-and-colors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/columns-font-and-colors?u=76281980&t=0)** - [Instructor] [[Wireshark]] allows us to personalize the interface even more by modifying the columns, the font and the colors. We'll go to Edit and Preferences. Now I'll go to Columns and let's take a look. Now in that, you can see that there are several that are checked and some that aren't checked. Now the ones that aren't checked are not being displayed, but I've added them, and then I could add them if I right clicked up on the column and added them to display. Now as you can see, some of 'em are redundant, I've added them a couple a times and I might want to take them off. In addition to adding a column, I can remove it by selecting the column I don't want and hit the minus sign. Here's srcport, I'll take that away as well. But I do wanna add the Window size value and when I close out of this, this will appear. Now let's take a look also at the fields. Now the fields are when I customize that and I modify the column., that's where the field value comes from. And when you right click on a field value, while you're in the packet details, you can add as column and it will retain that information and we can also do a calculation within that as well. Now we'll look at font and colors. Now this is to show the general feel of the interface. And a lotta these are defaults, but you can change those. The main window font, as you see is Consolas Regular 18.
>
> **[1:36](https://www.linkedin.com/learning/wireshark-functionality/columns-font-and-colors?u=76281980&t=96)** Now that's what I chose, only so it can be a little larger for you to see. And when demonstrating, I want the font to be nice and large. And we can [[Zoom]] in of course, but it's nice to preset this. But I can drop it back down. I can make it bold or italic and I can change the font style. Now down below is what the samples look like in the default coloring for a couple of things. One is the Sample marked packet text. Now when a mark a packet I know it turns black with white writing. But what if I want it to be yellow with black writing? Well I can change that. You select this little icon here on the right and we'll make it yellow. And now we'll add the foreground color as black and we have the Sample marked packet text. And then I'll say OK. Now I'll mark it, and I'll say mark or unmark the packet and there it is yellow. I'll go back an I'll take that off. And now we'll drop it back to the default. We'll take it back and make sure that background is black and then we'll put the foreground as white. Now here's the Sample ignored packet text and then these two have to do with when you go in and follow a stream and the default is that the client will be red and the server will be blue. Again you can change that, but let's take a look. So you right click and Follow the TCP Stream.
>
> **[3:12](https://www.linkedin.com/learning/wireshark-functionality/columns-font-and-colors?u=76281980&t=192)** And as you can see, the client is in red and the server's response is in blue. And this is helpful again, if you have a stream with a lot of requests and responses and you'll be able to see who's talking, the client or the server. The last three have to do with the filters. Now we know that there's a syntax checker within the filters and if it's a valid filter it will turn green. If it's an invalid filter, it will turn red, and that means it won't work. And yellow is a warning, meaning it may or may not work, go ahead and try it. But again, if you want to change that and make it a bright green color like you did a great job with that filter, you could as well. So as you can see, we can modify and enhance the appearance of the columns, font, and colors in Wireshark

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2), [[Zoom]] (1)
> **CLI Commands:** make (4)
> **UI Navigation:** go to (2), click on (1)
> **Env Vars:** tcp (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Name resolution](https://www.linkedin.com/learning/wireshark-functionality/name-resolution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/name-resolution?u=76281980&t=0)** - [Instructor] When working with trace files, we have a choice in how we want [[Wireshark]], to deal with Name Resolution. Now we go up to Capture, and then look at options. Now in the third tab, there's where we see Name Resolution. Now you generally will see, Resolve Mac Addresses, and also Resolve transport names, but a lot of times you won't see, Resolve network names. Let's see why. If we go into Program Files, and then into the Wireshark folder, there are two files I want to take a look at. One is manufacture, we'll open that with Notepad. We know that in a MAC address, the first six digits, are the organizational unique identifier, and that is the manufacture. So we take a look down below here, and it lists all of what they know, to be true of the MAC addresses. Now you can modify this if you want, in fact if you know your own MAC address, or organizational unique identifier, you can change it. I could say, Lisa's laptop, and that's what I would see, when I ran the trace file. Now the services, if we open this again with Notepad, this is a local copy, of the port-numbers file, and then Wireshark uses this, to resolve port-numbers, into human readable service names, and again, we can change this,
>
> **[1:33](https://www.linkedin.com/learning/wireshark-functionality/name-resolution?u=76281980&t=93)** if we know it's something other, than what it's supposed to be here. The well known ports again, this will help us to do the resolution, so we see approximately what type of services running. So as you can see, those two files won't impact the performance at all, but now let's go in and do a little test. We'll go to Capture and then Options, and with that, we'll select the [[Wi-Fi]], and for Output, I first want to create a file, and I'll put it in folder, DNS_NoName, and then in the Options, we'll keep the Name Resolution as to Resolve MAC addresses and Resolve transport names, but we don't want to use Resolve network names. Down below, we're gonna stop the capture, after 15 seconds. I'll let it run, and I'll even go and look at one webpage, and let's see what happens. Okay, now that stopped. Now let's just go up to the top, and we'll do DNS, and we'll see down below on the status bar, it says that 6.1% are DNS packets. Alright, now close out of that, and now we'll go to Capture, and then Options again, and this time, we'll save the output as DNS, and we'll say DNS_NAME, because we do want to do a resolve at this point, and for the Options, we want to say, do it for 15 seconds,
>
> **[3:06](https://www.linkedin.com/learning/wireshark-functionality/name-resolution?u=76281980&t=186)** and this time I'm going say, Resolve network names. Now let's see what happens. Okay, now we've run that for 15 seconds, and I didn't go to any webpages. Now we'll filter for DNS. Now down below on the status bar, at 23.2% of this packet capture, is DNS traffic. So you can see that, a substantially more impact on performance. So when dealing with Name Resolution, it's okay to use Resolve MAC addresses and Resolve transport names, but use caution when selecting Resolve network names, as this may impact the performance in Wireshark, and it may cause congestion on the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (4), [[Wi-Fi]] (1)
> **Env Vars:** mac (5), dns (5), dns_name (1)
> **UI Navigation:** go to (3), select the (1)
> **Versions:** 6.1 (1), 23.2 (1)
> **Definitions:** is a  (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a button](https://www.linkedin.com/learning/wireshark-functionality/challenge-create-a-button?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/challenge-create-a-button?u=76281980&t=0)** - [Instructor] Let's do a challenge. In this challenge, we'll create a button to improve your workflow. First, let's talk about some of the network discovery protocols you'll commonly see on a network. One I commonly see is called Simple Service Discovery Protocol. Now this is used for service discovery and universal plug and play environments. Another one is the All Join Notification Service. Now, this enables communication between [[IoT]] devices. And Multicast [[Domain Name System (DNS)|Domain Name System]] provides IP address resolution without using a DNS server. And it's commonly used by devices on a LAN to find and communicate with other devices that are using plug and play capabilities. Now, while all three protocols can help improve network functionality, they can impact the way you visualize a packet capture. In this challenge, we'll create a button that will allow you to activate the filter that removes the discovery protocols. Now, you'll find detailed instructions under the text file: helpful hints, links, and challenges. But here are the key objectives.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-functionality/challenge-create-a-button?u=76281980&t=93)** First, in the Display Filter, enter the following. Then on the right-hand side of the Display Filter, select the + sign one time, which will open the preferences for your filter button. Enter the following label and enter the following comment. And this will describe the filter button. And then once you're done, click OK. Over on the right-hand side, you'll see your button. This challenge should take you about five minutes, good luck!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (1), [[Domain Name System (DNS)|Domain name system]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** dns (1), lan (1)
> **UI Navigation:** select the (1), open the (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a button](https://www.linkedin.com/learning/wireshark-functionality/solution-create-a-button?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/solution-create-a-button?u=76281980&t=0)** - [Instructor] Okay, now let's check our work. In this challenge, you are to create a button to improve your workflow. Now, first you were to apply this filter. Then on the right hand side of the display filter, you are to select the plus sign one time, which will open the preferences for your filter button. Now here we see that the filter has already been populated. Then we want to enter a label, and then we want to enter the following to describe the filter button. Once done, we say, okay. Now over on the right hand side, you'll see your button, and when we select this, this will remove the network discovery protocols. So you can more easily do an analysis. To remove the button, simply right click and say remove. I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (1), open the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What's next?](https://www.linkedin.com/learning/wireshark-functionality/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-functionality/what-s-next?u=76281980&t=0)** - [Instructor] Thank you for watching. In this course, we took a look at the ways you can optimize your ability to navigate through [[Wireshark]]. I first began with a more detailed look at the menu choices and toolbars. I then moved into ways to capture traffic and move about Wireshark to locate, mark, and copy packets. I then summarized with ways to personalize the Wireshark interface, to enhance your analysis. If you're interested in learning more, please check out the IT and security segment of the library, where we add courses all the time. To learn about [[IoT]] vulnerabilities, [[Privacy]] concerns, and attacks, take a look at Securing the IoT: Privacy. You might wanna take a look at any course in the CCNA Security Series, and it's well worth your time to check out Wireshark:Malware and Forensics. For a complete list of all my courses, go to my author page. Keep learning, I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (4), [[IoT]] (2), [[Privacy]] (2)
> **Env Vars:** ccna (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Lisa Bock]]

## Skills Covered

- Wireshark

## Path Context

### In [[Wireshark- Network Traffic Analysis]]
← [[Wireshark Essential Training]] | **2 of 5** | [[Wireshark- Network Troubleshooting]] →

## Appears In

- [[Wireshark- Network Traffic Analysis]]

## Related Courses

_Courses sharing skills:_

- [[Wireshark- Network Troubleshooting]] — Wireshark
- [[Wireshark Essential Training]] — Wireshark
- [[Wireshark- Malware and Forensics]] — Wireshark

---

[↑ Back to top](#)