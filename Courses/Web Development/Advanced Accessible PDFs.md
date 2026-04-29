---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-accessible-pdfs-21974253
url: "https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253"
duration_minutes: 406
duration: 6h 46m
level: Advanced
updated: 3/24/2023
learners: 36091
skills:
  - PDF Management
  - IT Accessibility
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQH5SqlUTeF5Ug/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1679534675284?e=2147483647&amp;v=beta&amp;t=0nbI4Ce96_vagfYv9YmoFv9dvBV9U45Ux-p6eHXdOM8"
linkedin_topic: Web Development
learning_paths:
  - '[[Build for Digital Accessibility]]'
prev_courses:
  - '[[Creating Accessible PDFs]]'
next_courses:
  - '[[Accessibility and Inclusion with Figma]]'
path_nav: '[{"path":"Build for Digital Accessibility","position":3,"total":12,"prev":"Creating Accessible PDFs","next":"Accessibility and Inclusion with Figma"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/pdf-management
  - skill/it-accessibility
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Advanced%20Accessible%20PDFs.md)

![Advanced Accessible PDFs](https://media.licdn.com/dms/image/v2/C560DAQH5SqlUTeF5Ug/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1679534675284?e=2147483647&amp;v=beta&amp;t=0nbI4Ce96_vagfYv9YmoFv9dvBV9U45Ux-p6eHXdOM8)

# Advanced Accessible PDFs

> Accessible PDF files are files that can be read by a screen reader by users who are visually impaired. While you can’t just push a button to make a PDF accessible, with the tools available in Microsoft Word and Adobe InDesign, you can make sure that any PDF you create is a valid accessible PDF file. Prioritizing accessibility doesn't mean you can't leverage the powerful tools the PDF format offers

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253) | 6h 46m | Advanced | 36K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Advanced Accessibility Topics in Adobe Acrobat]]** (15 videos)
- **[[#2. Working with Tables in Adobe Acrobat]]** (11 videos)
- **[[#3. Working with Forms in Adobe Acrobat]]** (6 videos)
- **[[#4. Advanced Accessibility Topics in Microsoft Word]]** (6 videos)
- **[[#5. Advanced Accessibility Topics in Adobe InDesign]]** (11 videos)
- **[[#6. PDF/UA Remediation]]** (15 videos)
- **[[#7. Third-Party Tools]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Is your document accessible?
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/is-your-document-accessible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/is-your-document-accessible?u=76281980&t=0)** - A few years ago I was speaking at a conference about the benefits of the PDF file format and during that conference, a woman in the back of the room raised her hand and said, "That's great, but is your document accessible?"
>
> **[0:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/is-your-document-accessible?u=76281980&t=14)** I had no idea what she meant.
>
> **[0:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/is-your-document-accessible?u=76281980&t=17)** Now, when we talk about document accessibility everybody wants to hear that all you have to do is push a button to make an accessible PDF file, and unfortunately that's not the case.
>
> **[0:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/is-your-document-accessible?u=76281980&t=27)** Actually, it's far from it.
>
> **[0:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/is-your-document-accessible?u=76281980&t=29)** I'm Chad Chelius, and in this course I'll show you how to work with complex tables, automated fixes, fillable PDF forms, PDF UA compliance, and a lot more.
>
> **[0:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/is-your-document-accessible?u=76281980&t=40)** So sit back, put your headphones on, and get ready to follow along with me as I walk you through how to solve those lingering remediation issues that you've been dealing with.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (4)
> **CLI Commands:** make (1)
> **Code Keywords:** case. (1)
> **Speakers:** - a (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we dive into this course, there's some things I'd like you to know about my approach when creating this course.
>
> **[0:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-you-should-know?u=76281980&t=8)** In my first course, [[Creating Accessible PDFs]], I took a workflow based approach in teaching the course.
>
> **[0:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-you-should-know?u=76281980&t=14)** Each chapter walked you through the process of remediating a PDF file pretty much from start to finish.
>
> **[0:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-you-should-know?u=76281980&t=21)** So the course was very logical in its structure and it had a natural flow to it.
>
> **[0:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-you-should-know?u=76281980&t=25)** I did this because when you're learning how to make accessible PDF files, it can be a bit overwhelming and I wanted your learning experience to be a logical approach to make the learning process easier.
>
> **[0:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-you-should-know?u=76281980&t=37)** If you haven't watched my first course, [[Creating Accessible PDFs]] yet, I highly encourage you to do so.
>
> **[0:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-you-should-know?u=76281980&t=44)** Unlike my first course, this course takes a different approach to learning PDF accessibility.
>
> **[0:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-you-should-know?u=76281980&t=51)** PDF accessibility can be a complex beast and discovering nuances and other issues in your files is quite common.
>
> **[0:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-you-should-know?u=76281980&t=59)** This course attempts to address those issues that you may have encountered and shows you how to fix them to make your files compliant and to create a good user experience for people who use assistive technology.
>
> **[1:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-you-should-know?u=76281980&t=71)** Because I'm addressing nuance issues in this course, it doesn't follow as much of a flow as the first course did, but rather contains small nuggets of useful information that can help you address common issues in your files.
>
> **[1:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-you-should-know?u=76281980&t=86)** I'm really happy that you're here and really excited that you want to take your PDF remediation skills to the next level.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (5)
> **CLI Commands:** make (3)
> **Speakers:** - [instructor] (1)


### 1. Advanced Accessibility Topics in Adobe Acrobat

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Shortcuts for walking the tags tree
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=0)** - The task of walking the tags tree is an important step in the remediation process as it accomplishes a couple of important tasks.
>
> **[0:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=8)** One, it ensures that elements in your document are tagged properly, and two it ensures that the tag order is appropriate.
>
> **[0:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=16)** In this video I'd like to show you some helpful keyboard shortcuts that you can use when walking the tags tree.
>
> **[0:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=22)** I'm starting this video with the 01_01 document open.
>
> **[0:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=26)** And to access the tags tree, I'm going to come over here to the left side of my screen and I'm going to click on this little triangle that you'll find about halfway down on the screen.
>
> **[0:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=37)** Now, if you're starting from a fresh install of Acrobat you're probably not going to see the tags pane right now.
>
> **[0:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=46)** So to show it what you could do is simply right click somewhere in the navigation pane and choose tags and that is going to display the tags pane.
>
> **[0:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=57)** And within there you're going to notice that all of the tags in your document are found there.
>
> **[1:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=63)** Now, walking the tags tree is a pretty simple step and one of the things that I like to do is I'll start by clicking on the topmost tag, right?
>
> **[1:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=73)** In my case, it's the document tag.
>
> **[1:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=75)** And then to walk the tags tree, what you can do is press the down arrow key on your keyboard.
>
> **[1:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=82)** And what this does is navigates vertically from one tag to the other.
>
> **[1:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=88)** You can also press the up arrow key to move up in the tags tree, right?
>
> **[1:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=93)** So as you're evaluating the tag structure of your document it's very common to kind of go up and down.
>
> **[1:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=99)** Maybe you check something and then decide you want to go back to it and and just kind of double check it.
>
> **[1:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=105)** Again, up and down Arrow key allows you to navigate up and down the tags tree.
>
> **[1:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=111)** Now sometimes you'll come upon a tag, for example, right now I have the TOC tag selected.
>
> **[1:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=117)** Well, the TOC tag is actually comprised of multiple tags, right?
>
> **[2:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=122)** So what I can do if I want to see what's located within that tag, I can press the right arrow key on my keyboard.
>
> **[2:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=131)** And what that does is it expands the tag showing all of the tags within it.
>
> **[2:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=137)** So I can continue pressing the down arrow key effectively selecting the child tags of the TOC tag in this example, right?
>
> **[2:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=148)** And I can press the right arrow key again to open up a TOCI tag, in which case I'm going to find in this case a link tag.
>
> **[2:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=157)** I can press the right arrow key again to open that tag.
>
> **[2:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=162)** Now conversely, and although this is not required by the way, but conversely, I can press the left arrow key to collapse a tag.
>
> **[2:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=174)** And when you're in a nested tag, you can simply continue pressing the left arrow key to kind of back out of where you are within that nested tag.
>
> **[3:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=188)** So let me just do that again.
>
> **[3:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=189)** Right arrow, right arrow, right arrow.
>
> **[3:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=192)** If I just left arrow, left arrow, left arrow, left arrow, I can just kind of back out of that tag structure.
>
> **[3:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=199)** So, when you're evaluating your tag structure what I'm doing is as I'm down arrowing, I'm visually looking at what's getting highlighted, and again, making sure that content is being read in the order that I want it to.
>
> **[3:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=215)** And then I'm also, as I get to a heading, I'll look over at the tags pane and make sure that the tag associated with that content is in fact a heading tag and more specifically, the heading tag that I want assigned to it.
>
> **[3:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=231)** When I move up a little bit and I get to a smaller heading it makes sense that this is a heading three.
>
> **[3:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=237)** When I move down, our audience is a bigger heading, it makes sense that that's a heading too.
>
> **[4:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=243)** So again, this is the process of walking the tags tree and using those keyboard shortcuts is really, really helpful because when you get to a tag that you want to dive a little bit deeper into, you can do so very easily.
>
> **[4:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=259)** Now I'll show you a few more things here.
>
> **[4:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=261)** I'm just going to kind of scrub through here a little bit.
>
> **[4:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=264)** I want to find a tag here.
>
> **[4:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=267)** Here's a table, right? Here's a good example.
>
> **[4:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=270)** So you know I already showed you the the shortcuts on your keyboard.
>
> **[4:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=273)** The other thing I want to show you is that if you click on a tag, if you hold down the control key on Windows or the alt key on Mac and you click on this disclosure triangle, it will blow the tags apart.
>
> **[4:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=289)** And what I mean by that is it will open up all child tags of the selected tag and it will expand all of them so that you can see all of the children elements of that tag.
>
> **[5:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=306)** Now the thing is like if you just close that table tag and you move on or whatever, and then you go back to it you'll notice that it's still expanded.
>
> **[5:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=316)** So similar to what we did to expand it, if you hold down the control key on Windows or the option key on Mac and click on the disclosure triangle it will fully collapse all of those tags.
>
> **[5:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=330)** And now if I just click to open it you'll see that they're no longer exploded, all of the tags are not expanded.
>
> **[5:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/shortcuts-for-walking-the-tags-tree?u=76281980&t=338)** So I hope you found these shortcuts helpful and I encourage you to leverage them when walking the tags tree in your own documents.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **Code Keywords:** continue (2), case, (1), let (1)
> **Env Vars:** toc (3), toci (1)
> **UI Navigation:** click on (4)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** go back to (2)
> **Analogies:** for example (1), similar to (1)
> **Prerequisites:** install (1)

#### Creating a tag from a selection
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=0)** - [Instructor] So creating a tag from a selection can be useful when you need your content broken up in a specific way.
>
> **[0:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=7)** This technique can be used for links, for acronyms, as well as other elements.
>
> **[0:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=12)** I'm going to jump to page 13 in this document to demonstrate what I mean.
>
> **[0:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=19)** Now you'll notice here in this social media training manual that we're looking at, they have a paragraph here where they're talking about the use of emojis.
>
> **[0:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=29)** However, these emojis themselves may not be read as expected, right?
>
> **[0:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=36)** So to kind of dive in a little bit deeper, I'm going to open up my tags pane and using my arrow tool up here, my selection tool, I'm just going to select some of this text.
>
> **[0:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=47)** And at the top of the tags pane, I'm going to choose Find Tag From Selection.
>
> **[0:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=52)** And here you can see is the text that is contained, or that the emojis are contained, inside of.
>
> **[1:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=61)** Now, whenever you have the question, "Hey, how is this going to be read by assistive technology?"
>
> **[1:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=67)** The short answer is test it, right?
>
> **[1:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=70)** That's the only way you're truly going to know.
>
> **[1:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=73)** So I'm going to go ahead and open NVDA on my computer.
>
> **[1:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=76)** (computer chimes)
>
> **[1:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=78)** - [NVDA Voice] Welcome to NV, use, show, okay.
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=80)** Social media.
>
> **[1:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=82)** - [Instructor] And what I need to do is I need to jump to page 13, so let me just use the page down.
>
> **[1:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=87)** - [NVDA Voice] Heading level four.
>
> **[1:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=88)** page 13, reader or A.
>
> **[1:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=90)** Or fo like voice original.
>
> **[1:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=93)** We wish all our customer
>
> **[1:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=95)** - [Instructor] Okay, so now I'm going to read the paragraph that contains with emojis.
>
> **[1:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=100)** - [NVDA Voice] With emojis, we wish all our customers a happy and prosperous new year.
>
> **[1:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=105)** - [Instructor] All right?
>
> **[1:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=106)** So if you notice, the emojis are not being read at all.
>
> **[1:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=110)** Okay?
>
> **[1:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=111)** Now a lot of people may ask the question, "Well, does that matter?"
>
> **[1:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=115)** And I'm going to be fair here, I'm not the person to answer that question.
>
> **[2:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=121)** If you are creating a manual about social media and you're talking about emojis, I think those emojis being read is probably relevant to what you're trying to explain.
>
> **[2:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=135)** Okay?
>
> **[2:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=136)** So currently the problem is the emojis are not being read.
>
> **[2:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=140)** So what we're going to do-
>
> **[2:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=141)** - [NVDA Voice] 13 attachments
>
> **[2:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=144)** - [Instructor] Is I'm going to quit NVDA for now.
>
> **[2:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=146)** (computer chimes)
>
> **[2:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=147)** - [Instructor] And let's go to our tags pane and find those items again.
>
> **[2:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=151)** I'm going to choose find tag from selection.
>
> **[2:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=153)** Here's the paragraph.
>
> **[2:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=155)** And what I'm going to do is I'm going to highlight the emoji characters, right?
>
> **[2:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=161)** So I'm using my keyboard to grab those characters although you could also click and drag, that's fine.
>
> **[2:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=169)** And up here in the option button under the tags, I'm going to choose create tag from selection.
>
> **[2:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=177)** Now what you're going to see here and this is getting a little bit tricky, the way those characters are expressed is really quite interesting because if I click on these empty tags these are the guys that are actually making up those emojis.
>
> **[3:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=196)** So it's a little bizarre, right?
>
> **[3:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=198)** It's a little interesting but that's how those emojis are being represented.
>
> **[3:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=204)** And so what I'm going to do here is I am going to click on this content object and I'm going to right click and choose new tag.
>
> **[3:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=214)** And in the type dropdown, I'm going to choose a span tag.
>
> **[3:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=218)** Now, a span is a very generic tag that is simply used to group objects together.
>
> **[3:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=226)** And so I'm going to grab all of these character items here.
>
> **[3:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=230)** I'm going to hold down the shift key, and then I'm going to drag them and put them as children of that span tag.
>
> **[3:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=237)** And you can see now when I click on the span tag, it's highlighting those emojis, okay?
>
> **[4:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=244)** Now, whenever you use create tag from selection one of the things you have to watch out for is that oftentimes your content will be moved out of order, right?
>
> **[4:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=253)** So you can see here is with emojis we wish all our customers are happy.
>
> **[4:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=258)** I want to move this span tag immediately after that so that it's in the correct order.
>
> **[4:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=264)** Okay?
>
> **[4:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=265)** Now I'm going to grab the text for these emojis, right?
>
> **[4:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=269)** I'm going to do the same thing.
>
> **[4:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=270)** I'm going to choose create tag from selection.
>
> **[4:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=273)** Again, it's going to do something very similar to what it did before, but again I'm going to create a new span tag and then I'm going to grab all these items and move them into that span tag and that we want to move down here.
>
> **[4:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=291)** So ands prosperous, then the emojis, okay?
>
> **[4:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=296)** And then last but not least, we have this little I'm going to call it a party favor emoji.
>
> **[5:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=303)** And I'm going to create a tag from that selection.
>
> **[5:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=306)** And now you have to be a little careful here.
>
> **[5:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=308)** And this was my mistake.
>
> **[5:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=311)** The mistake I made is that I had clicked on the span tag when I chose create tag from selection.
>
> **[5:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=318)** And so what it did is it put the elements for that character inside of that span tag.
>
> **[5:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=326)** So I just need to kind of grab them, I'm going to pull them out of there, okay?
>
> **[5:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=331)** And then I'll create one last span tag and I'm going to move these guys into there.
>
> **[5:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=339)** All right?
>
> **[5:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=340)** Now the reality is even moving them into a span tag they're still not going to be voiced because they fundamentally have no value.
>
> **[5:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=349)** So what I'm going to do is I'm going to click on this first span tag and I'm going to right click and choose properties.
>
> **[5:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=355)** And in the Object Properties dialogue in the actual text field I'm literally going to type the text smiley face emojis, okay?
>
> **[6:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=369)** And then I'll click on the second span tag.
>
> **[6:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=374)** And in the actual text I'm going to type dollar sign emojis.
>
> **[6:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=380)** I do not know what the official name of these are so I'm making it up as I go, by the way.
>
> **[6:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=384)** So, and then this last one in the actual text field I'm going to type party favor emoji.
>
> **[6:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=393)** Okay?
>
> **[6:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=395)** And so actual text for your information, it's basically a replacement for what the text actually is.
>
> **[6:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=406)** This can also be used on a figure, right?
>
> **[6:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=409)** Like if you ever have a figure, sometimes you'll have a graphic that is representing text, right?
>
> **[6:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=415)** And that's a perfect use for actual text because actual text replaces the fact that it's a figure and reads the text.
>
> **[7:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=423)** So what I'm going to do, I'm going to do a save as on this and I'm going to call this 0102_finish, right?
>
> **[7:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=431)** 'Cause this is the one that I modified.
>
> **[7:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=435)** And just to be safe I'm going to close this document and I'm going to reopen it.
>
> **[7:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=440)** Okay?
>
> **[7:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=441)** And now what I want to show you is if I now open NVDA again.
>
> **[7:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=445)** (computer chimes)
>
> **[7:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=447)** - [NVDA Voice] Well you, okay?
>
> **[7:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=448)** Social media training manual Adobe Acrobat Pro 64 bit.
>
> **[7:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=455)** Unknown social media heading level three, page 15, accepting connection.
>
> **[7:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=460)** Heading level four, page four, page 13, reader, or A.
>
> **[7:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=464)** - [Instructor] Okay. And if I go down.
>
> **[7:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=465)** - [NVDA Voice] Original with emojis we wish all our customers a happy, smiley face emoji, sad prosperous dollar sign emojis, new year party favor emoji.
>
> **[7:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=476)** - [Instructor] Okay, so I leveraged create tag from selection to break my content up into chunks that allowed me to assign appropriate text to those elements so that it is interpreted correctly using assistive technology.
>
> **[8:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-a-tag-from-a-selection?u=76281980&t=496)** So whenever necessary, use create tag from selection to break the marked content in a document apart to meet your needs.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (8), - [nvda (6)
> **Env Vars:** nvda (9)
> **UI Navigation:** click on (2), go to (1), dropdown (1)
> **CLI Commands:** find (3)
> **Non-Speech:** (computer chimes) (3)
> **Code Keywords:** let (2)
> **Definitions:** is a  (1)

#### Paragraphs that split across a page
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=0)** - [Instructor] Depending on the source application you use to create a PDF file, the way it tags content may not be accurate or what you might expect.
>
> **[0:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=9)** One example of this is when a paragraph breaks across a page, where the beginning of a paragraph is at the bottom of one page and continues at the top of another.
>
> **[0:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=19)** This is very normal for us as sighted readers, but the experience for somebody using assisted technology could be very different.
>
> **[0:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=28)** Fundamentally, that text should just be tagged as a single paragraph.
>
> **[0:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=32)** However, sometimes our software fails and doesn't tag content appropriately.
>
> **[0:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=38)** Let's take a look at an example.
>
> **[0:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=40)** I'm going to advance the pages here and when I get to page six, you'll notice that I have a example of what I was talking about.
>
> **[0:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=50)** You'll notice, if you look down here, we have this paragraph that kind of ends in the middle of the paragraph, and then when I go to the next page, it continues, right?
>
> **[1:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=62)** Now, again as a sighted user, this is very normal to us and we just kind of continue reading in a natural way.
>
> **[1:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=69)** But, I like to remind people that to a user of assistive technology the concept of a page is fairly irrelevant, right?
>
> **[1:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=81)** Because they're literally just reading the tags or the content in a linear order from beginning to end.
>
> **[1:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=89)** So they really don't know when something breaks across a page, nor should they.
>
> **[1:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=94)** I'm going to go ahead and open NVDA to just demonstrate the problem.
>
> **[1:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=100)** - [Automated Voice] Welcome (indistinct) social media training manual, Adobe-
>
> **[1:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=104)** - [Instructor] And I will point out that I did increase the speech speed since the previous video, just because I thought it was going a little too slow, and I like it read a little bit faster.
>
> **[1:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=116)** But anyway, I'm going to go ahead and page up here.
>
> **[1:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=118)** - [Automated Voice] (indistinct), link page, link page seven ambassadors and publish on including posting blog posts on our own site.
>
> **[2:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=124)** - [Instructor] Okay.
>
> **[2:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=125)** - [Automated Voice] Writing guidelines heading level two.
>
> **[2:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=127)** Page seven, our audience heading level two.
>
> **[2:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=129)** - [Instructor] Okay, now I'm going to move down a little bit.
>
> **[2:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=132)** - [Automated Voice] This guide will not be delving into... This document focuses on the-
>
> **[2:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=134)** - [Instructor] Okay, now listen to this paragraph that I'm reading to you.
>
> **[2:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=139)** - [Automated Voice] Page seven, this document focuses on the generalities we discover with each platform we contribute to and publish on; including posting blog posts on our own site.
>
> **[2:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=146)** In this way, we can use what we learn, page eight.
>
> **[2:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=149)** - [Instructor] All right, so the problem we're running into is that the text is broken up and fundamentally, it's tagged incorrectly.
>
> **[2:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=157)** Because notice how it stops abruptly after the word learn.
>
> **[2:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=163)** And again, from a user experience standpoint this could be a little confusing.
>
> **[2:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=168)** Now, most readers, most users are going to know to continue reading.
>
> **[2:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=174)** However, it would be a better experience if they weren't interrupted like this.
>
> **[2:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=179)** So I'm going to quit NVDA so we can edit this document and make it correct.
>
> **[3:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=183)** - [Automated Voice] Exit NVD, okay, (indistinct).
>
> **[3:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=185)** - All right, so what I'm going to do, I'm going to open my tags pane.
>
> **[3:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=189)** I'm going to use my selection tool, and I'm going to select some of this text and I'm going to say find tag from selection.
>
> **[3:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=195)** And this is where we can see very clearly that we have one paragraph for the bottom of page six.
>
> **[3:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=203)** And then if I click on the next tag that is the continuation of that paragraph, right?
>
> **[3:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=210)** Now, there's a couple ways we can solve this, right?
>
> **[3:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=213)** And I'm going to show you them right now.
>
> **[3:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=215)** If you open the tag so that we can look at what's called the marked content.
>
> **[3:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=221)** These little package icons are what's called marked content.
>
> **[3:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=225)** And these are essentially the content of the tag.
>
> **[3:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=228)** Now, one way we could fix this, is we could just drag the marked content from the second paragraph and move it up into the first paragraph so that it's all tagged.
>
> **[4:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=240)** You'll notice when I go to the next page, it's all tagged as one single tag, okay?
>
> **[4:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=246)** Now, another thing you could do is we could select these two paragraph tags, we could come up here to our option button and choose create tag from selection.
>
> **[4:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=258)** And you'll notice that when I do that it's a different way of using create tag from selection that I talked about in a previous video, where we use that command to break tags apart.
>
> **[4:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=270)** In this case, I selected two tags and when I chose create tag from selection it merged the two together, right?
>
> **[4:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=278)** So it's kind of a secondary way in which you can use that command.
>
> **[4:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=282)** So whatever method you prefer, guys, is totally fine.
>
> **[4:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=286)** So I'm going to do a save as on this and I'm going to call this one just, "0103 Finish".
>
> **[4:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=295)** And I'm just going to close this.
>
> **[4:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=297)** And I want to explain why I'm closing it, because whenever you are making edits to a file and you want to read it using NVDA again, we have to remember that NVDA caches the document when you open it.
>
> **[5:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=312)** And so if you make an edit to a file, you could run into a situation where when you read it with NVDA, it's not reading the changes that you made because it has the document cached in its memory.
>
> **[5:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=328)** So what I always do is I close the document and reopen it; definitely quit NVDA and reopen it.
>
> **[5:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=334)** And that way you're sure to get NVDA to read the document as expected.
>
> **[5:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=339)** So, I'm going to reopen NVDA real quickly.
>
> **[5:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=342)** - [Automated Voice] Welcome to (indistinct) social media training manual, Adobe Acrobat Pro 64-bit.
>
> **[5:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=349)** 7/33C.
>
> **[5:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=350)** This document focuses on the generalities we discover with each platform we contribute to and publish on, including posting blog posts on our own site.
>
> **[5:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=356)** In this way, we can use what we learn, page eight, from the analytics and information about our audience and prepare content accordingly to match what works best at a given time.
>
> **[6:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=363)** - [Instructor] All right, so you can see there that this time when I read that last paragraph it read the entire contents of the paragraph and didn't abruptly stop after the word learn.
>
> **[6:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=376)** You may have noticed that it did voice that it was going to page eight, and that's just the nature of NVDA and Jaws.
>
> **[6:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=383)** It kind of announces when you are going from one page to another, but it's a very minor disruption.
>
> **[6:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=390)** The point that I'm trying to make is that by making sure that the paragraph, even though it's on two separate pages, is tagged as a single paragraph, it is read correctly.
>
> **[6:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/paragraphs-that-split-across-a-page?u=76281980&t=401)** So paragraphs that split across a page won't always be a problem but to provide the best user experience it's good to make sure that they're tagged correctly.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (7), - [automated (7), - all (1)
> **Env Vars:** nvda (9), pdf (1), nvd (1)
> **Code Keywords:** continue (2), this. (2), this, (2), let (1), case, (1)
> **CLI Commands:** make (4), find (1)
> **UI Navigation:** go to (2), click on (1), open the (1)
> **Non-Speech:** (musical chime) (3)
> **Cross-References:** previous video (2)

#### Creating hyperlinks
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=0)** - [Instructor] Whenever possible, I highly encourage people to create hyperlinks for content in the source application because that information will get passed on to the PDF when it is created and it's really easy to do.
>
> **[0:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=13)** That being said, sometimes people forget or just aren't aware that they can do it in a source application.
>
> **[0:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=19)** In this video, I'd like to show you how to create a hyperlink in an existing PDF file to ensure that users of assistive technology will be able to follow that link appropriately.
>
> **[0:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=29)** I should mention also that Adobe Acrobat automatically detects implicit hyperlinks in a document.
>
> **[0:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=36)** By implicit links, I mean links that are spelled out using www or name@[example.com](https://example.com).
>
> **[0:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=44)** Unfortunately, those automatically detected links are not accessible, so you'd need to use the method I'm about to show you to make them correct.
>
> **[0:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=54)** All right, so I'm going to go ahead and jump to page 31 in my document here because on that page we have text that is meant to be a hyperlink, but it currently is not.
>
> **[1:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=67)** You'll notice when I hover over it, there's no pointer finger, and if we want to dive a little bit deeper, what we could do is open our tags pane, select some text of that paragraph, and choose find tag from selection.
>
> **[1:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=84)** And if you look in here, you'll notice that there's definitely no link tag to be found there.
>
> **[1:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=90)** So how do we ensure that a user is going to be able to follow this particular link?
>
> **[1:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=99)** So what we're going to do is I'm going to come up here and grab my selection tool, and using that tool, I'm going to click and drag to select the text that I want to become a link.
>
> **[1:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=112)** With that text selected, I'm going to right click and choose create link.
>
> **[1:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=117)** Now when you do this, you have a number of different options.
>
> **[2:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=121)** For the link type, I usually change this to be an invisible rectangle.
>
> **[2:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=128)** A visible rectangle is kind of ugly and not really super helpful, so the WCAG requirement for hyperlinks is that the hyperlink looks unique and they have satisfied that requirement by making it a different color and making it underlined.
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=143)** So the visible rectangle is not required so I'm going to change that to invisible.
>
> **[2:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=147)** And then down here in the link action, I can choose what type of hyperlink I want to go to.
>
> **[2:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=154)** You can see I could go to a page view, I can open an external file, or I can go to a webpage.
>
> **[2:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=160)** Now, probably more often than not, you're going to be choosing open a webpage, but in this example, they're referencing a section of this document so I'm going to go ahead and go to a page view.
>
> **[2:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=172)** I'm going to click the next button, and now it says, "Okay, navigate to where you want this to go and then click the set link button."
>
> **[3:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=180)** So I'm just going to kind of backtrack here.
>
> **[3:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=182)** I want to go to page 23 and that's where the editorial calendar is described.
>
> **[3:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=190)** So I'm going to click on the set link button.
>
> **[3:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=192)** That now appropriately defines this as a link and here's the important part, guys.
>
> **[3:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=199)** If you come over here to your tags pane, you'll now see that you have a link tag and if you open up that link tag, that has a link OBJR object, which stands for Object Reference, and those two elements, the link tag and the link OBJR object, is what makes this an accessible link for people using assistive technology.
>
> **[3:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=225)** So by following those steps, this is going to ensure that the link is accessible and you'll also notice, of course, that even as a sighted user now when I hover over that, I get the pointer finger and if I click on it, it's going to take me to that section of the document so it's multi-beneficial to kind of follow these steps.
>
> **[4:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=247)** So remember, guys, the way to know if a hyperlink is accessible is if the link is contained in a link tag and has a link OBJR object within that link tag.
>
> **[4:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-hyperlinks?u=76281980&t=257)** If it doesn't, use the technique I showed you to make sure the links are accessible.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (5), click on (2), select the (1), navigate to (1)
> **Env Vars:** objr (3), pdf (2), wcag (1)
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** this, (1), type, (1), super (1)
> **URLs:** [example.com](https://example.com) (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### Fixing untagged hyperlinks
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=0)** - [Instructor] In the previous video, I showed you how to properly create hyperlinks inside of Adobe Acrobat.
>
> **[0:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=6)** And I'm putting the word properly in air quotes, because although it isn't the only way.
>
> **[0:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=12)** In my experience, it's the way that eliminates the most problems.
>
> **[0:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=15)** When hyperlinks are not created properly, you'll often get an error using checkers and they definitely won't be accessible.
>
> **[0:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=23)** So let's take a look at those situations and how to fix them when they occur.
>
> **[0:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=28)** So I'm going to go ahead and jump to page 31 in this document.
>
> **[0:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=34)** And on this page we have a hyperlink, right?
>
> **[0:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=37)** You can see that when I hover over it, I get the pointer finger, which is cool, right?
>
> **[0:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=43)** But if we dive a little bit deeper and I take a look at the tag structure where that content is found, you'll notice that nowhere inside of that paragraph is there a link tag, okay?
>
> **[0:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=58)** Now, I'd like to explain how this happens, right?
>
> **[1:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=63)** Typically, the way this happens is people will create hyperlinks by coming over here and clicking on Edit PDF.
>
> **[1:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=72)** They'll come up here to Link, Add/Edit Web or Document Link.
>
> **[1:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=77)** And using the cursor, they can click and drag around an object to create a hyperlink for that element, right?
>
> **[1:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=86)** So I'm just going to create an example here.
>
> **[1:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=94)** And you'll notice when I'm done, right?
>
> **[1:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=95)** You can see here that this is now also a hyperlink, right?
>
> **[1:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=102)** But it was created by clicking and dragging.
>
> **[1:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=104)** And doing that, right?
>
> **[1:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=106)** If we look in the tag structure and we find that object, you could see once again, there is no link tag.
>
> **[1:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=113)** So the problem with that approach is that although there's a hyperlink there, it's not accessible.
>
> **[2:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=120)** And I'm going to take this one step further.
>
> **[2:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=122)** I'm going to come out to my Windows Explorer and I have my PAC 2021 Checker open.
>
> **[2:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=130)** And if I run the 01_05 through the PAC Checker, you're going to notice that I get a couple of errors.
>
> **[2:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=138)** And if I look at the results in detail, you're going to see that under Structural Elements, Annotations, I have an error called Nesting of Link annotations inside a Link.
>
> **[2:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=150)** And if I double click on that, sure enough, it's that link that I showed you on page 31.
>
> **[2:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=157)** For that matter, even the Acrobat checker, which is not nearly as robust as the PAC Checker.
>
> **[2:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=164)** Let me go ahead and come up here to Tools.
>
> **[2:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=167)** I'll go down to Protect & Standardize.
>
> **[2:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=171)** Let's add our accessibility tool over here to the right.
>
> **[2:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=176)** And if I run my Acrobat checker, even Acrobat is going to flag this as a problem because it's going to identify that as a tagged annotation failed, okay?
>
> **[3:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=190)** So I'm going to go ahead and go back to here.
>
> **[3:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=192)** So how do we fix this problem, right?
>
> **[3:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=195)** It's already been created.
>
> **[3:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=196)** I mean, I certainly could delete it, right?
>
> **[3:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=200)** And then recreate it the proper way, but I hate to waste time.
>
> **[3:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=204)** And so what we could do to address this problem is we can come over here to our Tags pane.
>
> **[3:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=210)** And within the tags pane, I'm going to click on the option button up here at the top, and I'm going to choose find.
>
> **[3:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=217)** In the Find Element dialogue, from the Find dropdown menu, I'm going to choose unmarked links.
>
> **[3:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=225)** So this is a link that is not properly tagged and this is going to help me to find them.
>
> **[3:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=232)** Now one thing I want you to do and I forgot to do this, I'm going to close this.
>
> **[3:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=237)** Before you do this, I want you to come all the way up here and click on tags, okay?
>
> **[4:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=242)** I know it seems like an odd thing to do but there's a reason that I'm having you do it.
>
> **[4:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=247)** So click on the option button, choose find, choose unmarked links, and hit the Find button.
>
> **[4:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=254)** And you're going to see it's going to highlight this object.
>
> **[4:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=259)** Now we can click on the Tag Element button.
>
> **[4:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=262)** And because this is a very obscure thing, but because I clicked up here on tags, it's asking me how I want to tag that object.
>
> **[4:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=273)** And from the dropdown, I'm going to choose the link and I'm going to click OK.
>
> **[4:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=280)** And what you're going to see is that a new link tag has been created.
>
> **[4:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=286)** Now it's not in the correct location.
>
> **[4:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=290)** But if you don't click up here on the tags before you do this, what often ends up happening is it'll create the Link-OBJR object.
>
> **[4:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=299)** But you have to hunt and search for it in your document.
>
> **[5:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=303)** You don't know where it got created.
>
> **[5:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=307)** And the reality is, it often gets created on whatever tag you have selected, but it's not really done correctly.
>
> **[5:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=315)** So what I'm going to do here is I'm going to go down here and I'm going to try to find, let me find this one.
>
> **[5:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=323)** Page 31, there it is.
>
> **[5:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=324)** I'm going to open that up and you can see that this is now broken apart, right?
>
> **[5:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=330)** And what I can do is I can pull my link tag up in there.
>
> **[5:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=336)** The link tag has the Link-OBJR object in it.
>
> **[5:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=340)** And what I want to do is grab the text for the link and move that into the link as well.
>
> **[5:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=346)** So now the link tag has the text that we want hyperlinked as well as the Link-OBJR object.
>
> **[5:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=354)** And now that is properly tagged.
>
> **[5:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=357)** I'm going to do a save as on this and I'm going to call this my finished version.
>
> **[6:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=364)** And of course, if we run the Acrobat checker, it is no longer identifying the annotation as an error.
>
> **[6:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=375)** And if I run this back through my PAC Checker, you can see that that issue is no longer a problem either.
>
> **[6:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=387)** We are now getting one error because my link does not have an alternate description.
>
> **[6:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=393)** But we'll fix that using a different technique.
>
> **[6:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-untagged-hyperlinks?u=76281980&t=397)** So if you run into hyperlink in your own document that's not tagged or is giving you errors when validating them, use the techniques you learned in this video to fix them.

> [!info]- Semantic Content
>
> **CLI Commands:** find (9)
> **Code Keywords:** let (4), this, (3), delete (1), this. (1)
> **Env Vars:** pac (4), objr (3), pdf (1)
> **UI Navigation:** click on (5), dropdown (2)
> **Cross-References:** previous video (1), go back to (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Addressing multiline hyperlinks
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=0)** - [Instructor] One of the common issues I see in PDF documents that I remediate is multi-line hyperlinks.
>
> **[0:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=7)** And this is especially common when the document was created from programs like Adobe InDesign.
>
> **[0:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=13)** This is a hyperlinks that begin in one line and then continues on another.
>
> **[0:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=19)** And although fundamentally these should not be a problem, from an accessibility standpoint, they can be.
>
> **[0:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=25)** Let's take a closer look at the problem and see how to address it.
>
> **[0:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=30)** So I'm starting here with the 0106 document open and if I go to my tags pane and I find the paragraph that contains the hyperlink, you're going to notice when I open up the link tag, there are two link OBJR objects in there, okay?
>
> **[0:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=49)** And again, this is one hyperlink, but the way it's created, it's broken into two.
>
> **[0:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=55)** All right?
>
> **[0:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=57)** Now the other place we can see that is if you open up your content pane and if you're not seeing your content pane, just right click on the navigation pane and choose content and that'll display that for you.
>
> **[1:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=70)** And if you open up the page and then the annotations category, here too, you're going to see that there are two separate links.
>
> **[1:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=79)** All right?
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=80)** So the question becomes, how do we fix this?
>
> **[1:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=82)** How do we address it?
>
> **[1:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=84)** Well, my preferred method is to come over here and click on the edit PDF button.
>
> **[1:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=90)** And if you come up here to the link menu and choose add, edit, web or document link, it'll be very visible that we have two separate links that make up this one hyperlink.
>
> **[1:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=106)** So what I like to do is I'll click on one of them and simply delete it.
>
> **[1:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=113)** And then what I'll do is I'll select the other one and resize it to include both parts of the hyperlink.
>
> **[2:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=125)** Now I know what you're probably thinking, you're like, well, Chad, that's also making the preceding and ending text also part of the hyperlink.
>
> **[2:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=134)** And you're right, from an accessibility standpoint, it's probably less of an issue than it is for a sighted user.
>
> **[2:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=142)** Because for a sighted user, if I get out of editing mode here, even when I hover over the beginning of this text, it's still a hyperlink, okay?
>
> **[2:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=153)** But if we take a look at our tag structure, you'll now see that there's only one link OBJR object.
>
> **[2:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=161)** Actually, let me save this so that it updates.
>
> **[2:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=168)** There we go.
>
> **[2:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=169)** So now you can see that this link OBJR object, there's only one of them.
>
> **[2:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=174)** The text is contained.
>
> **[2:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=176)** The text of the hyperlink is contained within that link and it's properly structured accordingly, okay?
>
> **[3:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=185)** So although it's probably maybe not quite the ideal situation for a sighted user, from an accessibility standpoint, it's more accurate.
>
> **[3:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=193)** The PDF format can only have a rectangular hyperlink at this point in time.
>
> **[3:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=200)** If it could have a polygonal hyperlink, it would be not much of an issue, 'cause we could kind of draw the shape that we needed.
>
> **[3:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=207)** But because of that limitation, we need it to be a rectangle and then of course it will encompass some of the text that is technically not part of the hyperlink.
>
> **[3:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=218)** But by doing this, now this will be accessible and it'll function in a much better way than when it's split into two pieces.
>
> **[3:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=230)** As you can see, fixing multi-line hyperlinks isn't particularly difficult, but it does require some time.
>
> **[3:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=236)** And if you have a document that has a lot of these, you're talking a lot of time.
>
> **[4:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=241)** So to avoid this problem, my best suggestion to you is to avoid multi-line hyperlinks.
>
> **[4:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/addressing-multiline-hyperlinks?u=76281980&t=249)** Take advantage of a tool such as Bitly, to shorten your hyperlinks, which can help to avoid multi-line hyperlinks altogether.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), delete (1), this, (1), function (1), require (1)
> **Env Vars:** pdf (3), objr (3)
> **UI Navigation:** click on (2), go to (1), select the (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Advanced techniques using the Content pane
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=0)** - [Instructor] When working with elements in a PDF file, the Content Pane can provide an easy way to select items and convert them to the tag that you need.
>
> **[0:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=8)** In this video, we'll leverage the Content Pane to easily select text elements and tag them appropriately.
>
> **[0:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=16)** Now I have the 01_07 document open on my computer, and what I'm going to do is open the Tags Pane.
>
> **[0:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=25)** And what I want to show you is that if you click on the tags, if you find the tags for these bulleted items, you'll notice that they're all tagged as P tags.
>
> **[0:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=36)** Now the reason that I typically find that this happens is a lot of times, it's from Adobe InDesign.
>
> **[0:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=45)** And either the person manually typed a bullet and then the text after it instead of using the bulleted list feature in InDesign, or they did properly use the bulleted list feature, and in the export tagging, mapped it to a P tag.
>
> **[1:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=64)** And although fundamentally this is not going to be a barrier for people to read this content, it is a violation of WCAG 1.3.1, info and relationships.
>
> **[1:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=78)** Because info and relationships says that we need to tag content as what it is.
>
> **[1:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=83)** If it's a heading, tag it as a heading.
>
> **[1:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=85)** If it's a list, tag it as a list.
>
> **[1:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=87)** If it's a figure, tag it as a figure.
>
> **[1:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=89)** And so by these bulleted items being tagged as P tags, the user of assistive technology is not going to know that they're reading a list of items.
>
> **[1:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=101)** So what I'd like to do is show you how I can fix this with the Content Pane.
>
> **[1:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=105)** So what I'm going to do, and this is an important step, come up here and click on the Tags Item.
>
> **[1:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=112)** Now I'm going to go to the Content Pane and I'm going to open up page one and I'm going to find the text.
>
> **[2:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=120)** First of all, find a text for the bullet.
>
> **[2:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=122)** Once that's selected, go back to the Tags Pane, come up here to the Option button and choose Create Tag From Selection.
>
> **[2:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=132)** And Acrobat is going to say, okay, how do you want me to tag this?
>
> **[2:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=137)** Well, this is a bullet, so we're going to tag this as a label.
>
> **[2:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=142)** And when I click OK, you're going to see that Acrobat has now taken that bullet and put it inside of a Label Tag.
>
> **[2:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=152)** And I'm going to go back to the Content Pane, and I'm going to find the text for the bullet.
>
> **[2:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=158)** I'm going to select those items, switch back over to the Tags Pane.
>
> **[2:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=162)** Now again, this is where you got to be careful because you got to make sure that you click on the tags up here.
>
> **[2:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=168)** So now I got to go back to the Content Pane and reselect this.
>
> **[2:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=171)** And now if I go to tags and choose Create Tag From Selection, I can say this should be List Item Body.
>
> **[2:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=178)** And now you can see that both of those items are tagged appropriately.
>
> **[3:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=186)** Now I don't expect you to watch me do each one of these individually, so I'm going to speed through this and I'm going to tag these really quickly.
>
> **[3:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=199)** And with the help of post-production, we have quickly tagged all of those label and L body items.
>
> **[3:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=207)** Now that they're properly tagged, what we could do is we could select all of them and move them up into the appropriate position.
>
> **[3:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=215)** And so we want to move these up below that H2 tag, and then we have a little bit of work to do yet.
>
> **[3:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=222)** I'm going to click on the heading.
>
> **[3:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=224)** Oops, I moved it to the wrong spot here.
>
> **[3:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=226)** Let's move it up here. There we go.
>
> **[3:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=229)** And so I'm going to click on the heading above the first label.
>
> **[3:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=232)** I'm going to right click and choose New Tag.
>
> **[3:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=235)** And I'm going to choose List Item.
>
> **[3:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=238)** And I'm going to repeat that, we have seven bulleted items, so I'm just going to kind of repeat that a number of different times.
>
> **[4:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=247)** And then you can grab these label LBody combinations and move them into their appropriate List Item Tag.
>
> **[4:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=255)** So I'm just kind of nesting the label and LBody combinations into the appropriate List Item Tags.
>
> **[4:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=264)** And to be fair guys, I mean this is a lot of work, but sometimes the concept of starting all over again is more daunting than fixing what we have.
>
> **[4:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=276)** And so to finish this up, I'm going to do one more tag, and I'm going to create a list, and then we'll just move all of those List Items inside of that list.
>
> **[4:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=286)** So now you could see that we have these bulleted items tagged appropriately and in large part with the help of the Content Pane, because by leveraging the Content Pane, I can select what I need, and then using the Tags Pane, I can tag it appropriately.
>
> **[5:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/advanced-techniques-using-the-content-pane?u=76281980&t=304)** So when working with detailed text elements, give the Content Pane a try to make quick work of tagging them.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), go to (2), open the (1)
> **CLI Commands:** find (5), make (2)
> **Definitions:** is a  (4), is an  (1)
> **Code Keywords:** switch (1), this. (1), let (1)
> **Cross-References:** go back to (3)
> **Env Vars:** pdf (1), wcag (1)
> **Versions:** 1.3.1 (1)
> **Warnings:** be careful (1)

#### Security and accessibility
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=0)** - [Narrator] When applying security in a PDF file, special care must be taken to ensure users of assistive technology can still read the content even though it's been secured.
>
> **[0:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=11)** To demonstrate this I have the 01 08 file open on my computer, and what we're going to do is come up here to our "file" menu and we're going to go to "properties".
>
> **[0:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=26)** And up at the top, if you click on the "security" tab this is where we can apply security to our documents.
>
> **[0:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=36)** Now, the security method, if you click on the drop-down menu, there's a number of ways in which you can assign security, some of which require you to have specific software that would allow you to do that.
>
> **[0:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=51)** That would apply to certificate security, AEM security, and Microsoft Purview.
>
> **[0:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=58)** To demonstrate this concept to you we're going to use the simplest method which is password security.
>
> **[1:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=65)** Now when I choose that, the password security setting's dialogue box is going to open up and allow me to determine how I want to secure this document.
>
> **[1:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=74)** Okay, now at this point I haven't done anything, okay?
>
> **[1:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=79)** But if I click on this check box right here this is going to, in some way, restrict what I'm allowed to do in this document.
>
> **[1:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=89)** Now what you choose here is totally up to you.
>
> **[1:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=91)** You can choose whether you want printing to be allowed - by default printing is not allowed, but if you want to allow printing you can choose high or low resolution.
>
> **[1:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=102)** And then the second option is "do you want to allow any changes".
>
> **[1:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=106)** Now typically you would set this to none, because if you're securing the document you're doing it for a purpose, and you don't want somebody to be able to just come in this file and make edits to the file without you knowing about it.
>
> **[2:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=121)** The options you choose here are not particularly relevant they're going to be specific to your situation.
>
> **[2:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=128)** But what I want to point out to you is this guy right down here, okay?
>
> **[2:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=134)** And the good news is is that it's enabled by default.
>
> **[2:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=139)** The checkbox is "enable text access for screen reader devices for the visually impaired".
>
> **[2:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=146)** And by checking this check box you're basically saying "yes I've secured this document but allow access to the text to at least allow screen reader users to read the text so they can read the document."
>
> **[2:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=162)** Now the one other thing I'm going to mention here when you're applying security to a file it's really easy to just say "hey, no changes allowed at all."
>
> **[2:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=174)** The one exception that you want to be aware of is if you're ever applying security to a PDF form.
>
> **[3:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=183)** Because if you say "changes allowed, none" the form fields are going to be disabled and nobody's going to be able to fill out the form fields and that, of course, is not a good situation in the case of a PDF form.
>
> **[3:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=197)** So I want to point out an option for you to be aware of if you are applying security to a form.
>
> **[3:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=203)** If you click on the "changes allowed" dropdown menu you're going to notice that there's an option in there for filling in form fields and signing signature fields.
>
> **[3:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=215)** For a fillable PDF form that's the option you need to enable that will still restrict editing of the document but allow users to fill in the form fields that you've added to the PDF, okay?
>
> **[3:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=232)** Now this particular document I'm not doing that so I am going to change it back to "none", and I'm going to click "OK".
>
> **[3:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=238)** I do need to give it a password to restrict editing of the document.
>
> **[4:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=243)** So down here where it says "change permissions password" I'm going to go ahead and type a password, okay?
>
> **[4:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=250)** And then when I click "OK" I'm going to type it again.
>
> **[4:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=257)** And I know I kind of blasted through that first dialogue box.
>
> **[4:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=261)** What I'm actually going to do... let's kind of go back in there.
>
> **[4:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=267)** Set that to "no security" Go back to oops... Go back to "password security", okay.
>
> **[4:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=275)** So we had said "high resolutions" then we'll enter a password.
>
> **[4:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=281)** I want to point out this dialogue box that pops up.
>
> **[4:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=284)** Keep in mind when you apply security to this file it's not the most secure thing in the world - it's actually far from it - so just remember that even though you're applying security to this document it can be thwarted if somebody really wants to get in.
>
> **[5:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=300)** I would say for the majority of people if they open up a PDF and it says "this file is secured" they're probably going to stop and say "oh boy, I can't access that."
>
> **[5:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=310)** If somebody really wants to get in, however, this can be thwarted, okay?
>
> **[5:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=315)** So this dialogue box says "all Adobe applications honor these restriction settings but not all third party products may honor it."
>
> **[5:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=325)** Once I click "OK" you'll notice up here in the title bar it does say that this document is secured, right?
>
> **[5:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=333)** So if I do a "save as" on this... And I'll call this my finished version... What you'll find is that if somebody does come in here and say "edit PDF" right away... Again, because Acrobat is an Adobe product it's honoring those security settings.
>
> **[5:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=350)** So it's basically saying, "hey you can't edit this unless you have the password."
>
> **[5:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=353)** Again, it can be thwarted, and if somebody really wants to get in they certainly can.
>
> **[5:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/security-and-accessibility?u=76281980&t=358)** So you can safely apply security to documents and keep them accessible, you just need to be sure you enable the appropriate settings so users of assistive technology can still read the content.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (7), aem (1)
> **UI Navigation:** click on (4), go to (1), checkbox (1), dropdown (1)
> **Code Keywords:** require (1), default. (1), let (1), this. (1)
> **Warnings:** be aware (2), keep in mind (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** go back to (2)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### Merging and splitting documents
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=0)** - [Instructor] In an attempt to avoid redoing work and losing time, users often want to merge a new page into a document where an error was found or even split a document into several pieces.
>
> **[0:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=12)** Sometimes because the file of the combined document is too big.
>
> **[0:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=16)** Both of these tasks are possible, but I'd like to show you the most foolproof methods of doing so.
>
> **[0:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=21)** So I'm starting this video with this social media training manual open.
>
> **[0:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=27)** And one of the best tools I've found for splitting and merging documents and retaining the tag structure appropriately, is using this Organize Pages tool over here to the right.
>
> **[0:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=42)** Now, before I dive in there though, I just want to point out that some things that'll cause you a headache is when you have a page where the text splits across a page.
>
> **[0:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=57)** And as we've seen in a previous video, like sometimes, these will be two separate tags.
>
> **[1:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=64)** And ironically, when you're splitting and merging a document, that can be beneficial.
>
> **[1:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=70)** But if it's a tag that is properly tagged and it's one tag that is going across two pages, that can create some problems for you.
>
> **[1:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=81)** So what I tend to do is I'll look at my document in chunks and if the page I want to replace does have text that is breaking across the bottom of the page, I'll grab the current page and the next page.
>
> **[1:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=98)** Or the current page in the next two pages.
>
> **[1:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=100)** Whatever you have to do to keep it in a logical chunk, that's what you want to pay attention to, okay?
>
> **[1:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=107)** Now what I'm going to do is I'm going to come over here to the Organize Pages tool.
>
> **[1:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=111)** And because we're starting with an already complete document, I'm going to start by showing you how we can split this document, okay?
>
> **[1:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=119)** Now, mine's being slightly cut off up here but you can see the little scissors tool up here.
>
> **[2:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=125)** That is the Split Document tool.
>
> **[2:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=128)** So I'm going to go ahead and click that.
>
> **[2:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=131)** And then, what's cool about this feature is it gives you the ability to split your document in a number of different ways.
>
> **[2:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=139)** You can see over here, I can split by a certain number of pages, I can split the document based on file size, or I can split it based on top level bookmarks that I have in this file.
>
> **[2:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=154)** Now for the sake of simplicity, I'm going to split it based on a number of pages and I'm going to change that number of pages to five, okay?
>
> **[2:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=163)** And then what I could do is I could go to my output options and choose where I want my document saved.
>
> **[2:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=171)** So I'm going to go ahead and say on a folder on my computer, and I'm going to browse to where I want to save these files.
>
> **[3:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=180)** I'm going to go ahead and put it on my desktop for now.
>
> **[3:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=183)** And then down here, you can also add a label to the names of the files, right?
>
> **[3:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=189)** So you can see currently, it's using a label called Part.
>
> **[3:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=192)** You could change that to section to category to whatever you want.
>
> **[3:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=195)** And then you can even tell it what character to put between the name and the label.
>
> **[3:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=201)** So I'm going to go ahead and click OK and then I'm going to click on my Split button.
>
> **[3:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=207)** And you can see very quickly, Acrobat has taken my PDF and split it into multiple chunks, so I'm going to go ahead and close that.
>
> **[3:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=216)** And if I go back out and go to my desktop, I will see that I have all of my files here.
>
> **[3:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=224)** You can see it's 01_09_Part1 through 7.
>
> **[3:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=227)** And these are all of the individual files that make up that bigger file, okay?
>
> **[3:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=233)** Now, what I'm going to do just for organizational purposes, I'm going to create a new folder and I'll call this Split.
>
> **[4:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=240)** I'm just going to move these into there.
>
> **[4:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=242)** There we go.
>
> **[4:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=244)** Now if you want to combine those files, right?
>
> **[4:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=248)** One of the ways we could do that is if we go to the file menu in Adobe Acrobat, we could choose Create, and then there's an option that says, "Combine Files into a Single PDF."
>
> **[4:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=260)** And so I'm going to go ahead and click on Add Files.
>
> **[4:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=264)** I'm going to navigate to my desktop where I saved my files.
>
> **[4:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=268)** And I'm going to select all the files that make up my project.
>
> **[4:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=273)** And it's going to lay them out in order.
>
> **[4:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=276)** By default, it'll order them alphabetically.
>
> **[4:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=279)** It is kind of cool though, you can click on this button to expand and see all the pages within each file.
>
> **[4:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=286)** So if you wanted to double check that.
>
> **[4:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=288)** And when I come over here and click the Combine button, this is now, as you'll see, going to combine all of those into a new file that by default is called Binder1.
>
> **[5:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=301)** But if you look at your tag structure, you should pretty much see that all of your tags are in the correct order, and everything looks to be in good shape.
>
> **[5:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=313)** Now the other thing I want to show you that goes back to the example I gave you earlier, of where instead you have one or two pages that you're trying to merge into an existing document.
>
> **[5:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=326)** To do that, I like to use my Organize Pages command again.
>
> **[5:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=333)** And what I'm going to do is I'm going to actually open up two of these files to kind of demonstrate this to you.
>
> **[5:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=338)** And I'm going to go into the Organize Pages tool in both of those files, okay?
>
> **[5:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=345)** And what this now allows me to do is I can go into say, the Part2 document and I can shift click to select all, or some of the pages, doesn't really matter.
>
> **[5:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=357)** And if you drag over the tab for the first document, I can now drop this in between any page or I can put it at the end, and when I let go, it has now combined those files.
>
> **[6:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=373)** And once again, if I go to my tags tree, I should be able to see very easily how all of my tags are in the appropriate order from page 1 to page 10 in my example, and the tag structure has been retained.
>
> **[6:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=389)** And that's really what we're going after when we talk about combining our files and merging pages into a file, we want to make sure that we don't destroy our tag structure.
>
> **[6:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=399)** And I've found, in my experience, that the Organize Pages command does the best job while still retaining my tag structure the way I expect it to be.
>
> **[6:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/merging-and-splitting-documents?u=76281980&t=408)** So if you have the need to merge or split documents for any number of reasons, take advantage of the Organize Pages feature in Acrobat for the best results.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), click on (3), navigate to (1)
> **CLI Commands:** make (3)
> **Code Keywords:** default, (1), let (1)
> **Env Vars:** pdf (2)
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Tagging challenging elements
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=0)** - [Instructor] Sometimes despite our best efforts, some elements just don't output as we expect them to.
>
> **[0:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=6)** One example of this is placing PDF files in InDesign.
>
> **[0:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=10)** They just output as figures, even though they may contain valuable information including text.
>
> **[0:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=17)** Another example is word art in Microsoft Word.
>
> **[0:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=20)** Sure they're convenient for users to use, but they often output very poorly.
>
> **[0:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=26)** I have an example of some word art here on my screen and I'd like to talk about the challenges and some solutions to the problem.
>
> **[0:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=33)** Now, this is a piece of word art that was created in Microsoft Word, and when you add the word art, you are able to go in and edit the text of each one of these elements, which is really, really cool.
>
> **[0:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=47)** And it allowed me to create this interesting flow chart that we see on the screen right now.
>
> **[0:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=52)** But if we open up the tags pane, what we're going to find is that that entire graphic has output as a figure.
>
> **[1:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=62)** And that's really curious because you and I know that there is text in these elements.
>
> **[1:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=69)** And one of the ways you could tell if you grab your selection tool up here, if you could click and drag to highlight the text, well, it is text.
>
> **[1:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=78)** And another way you could tell is if you open up your content pane and you drill down into some of these objects, you will more than likely see that there is as you can see, actually text in there, right?
>
> **[1:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=94)** So even though it was tagged as a figure there is in fact text to be utilized right?
>
> **[1:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=102)** Now what's the problem with this outputting as a figure?
>
> **[1:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=105)** Well, the only way to make this accessible is if I add alternate text to the figure which I have done here.
>
> **[1:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=116)** But again, it's honestly just a long sentence of each item of the list.
>
> **[2:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=123)** It's not going to be easy for the user to retain that information.
>
> **[2:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=128)** And if they want to go back and read something their only option because they used alternate text is to read all of the alternate text from the beginning.
>
> **[2:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=138)** Alternate text doesn't give you structure, it doesn't give you much to work with.
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=143)** So how can we make this better?
>
> **[2:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=145)** Well, what we're going to do is I'm going to come over here into the content pane, and as I showed you earlier what I'm going to do is I'm going to locate the text elements that are in each one of these items.
>
> **[2:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=162)** And you'll notice that each one of these, the way that this was built or the way that it was output, each one of these text elements is in an artifact container.
>
> **[2:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=171)** So I'm simply going to open these up so I could see the text within, okay?
>
> **[2:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=176)** And then what I'm going to do is I'm going to click on one of 'em and hold down the control key so that I could select all of these text elements at once.
>
> **[3:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=186)** And I'll have to scroll down a little bit so I can see all of these.
>
> **[3:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=189)** So control click, control click, control click.
>
> **[3:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=192)** And then what I'm going to do is I'm going to drag these out of the outermost container.
>
> **[3:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=199)** So if I click on this and drag all the way out to here, let's, it's fighting me here.
>
> **[3:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=205)** There we go.
>
> **[3:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=207)** You could see now all of these text elements are individual elements.
>
> **[3:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=212)** Now what you've also seen is one of the dangers of messing with the content pane, cuz the content pane fundamentally is also the stacking order of objects.
>
> **[3:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=227)** And what I just did is I dragged all of my text elements, changed their stacking order, So all of the text is behind the shapes.
>
> **[3:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=239)** And that certainly is no good, right?
>
> **[4:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=242)** So fortunately it's easy to fix this problem.
>
> **[4:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=244)** I'm going to reselect all those text elements.
>
> **[4:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=247)** And what I'm going to do is I'm going to drag them all the way down to the bottom, to like the very bottom most item here.
>
> **[4:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=257)** And by doing that, I've basically now moved all the text in front of the shapes.
>
> **[4:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=264)** I know it's a little bit backwards in the content pane, when you drag an object down, it brings it to the front.
>
> **[4:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=272)** I know, please don't ask me.
>
> **[4:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=274)** I did not make these rules up.
>
> **[4:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=277)** I know it's bizarre for me too especially as an Adobe person.
>
> **[4:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=280)** I'm used to it being the opposite.
>
> **[4:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=283)** Now, this is not mandatory, but what I'm going to do, I just like to be clean, you know, as I'm working here.
>
> **[4:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=289)** And so what I'm going to do is I'm just going to grab all of these artifact elements that are now technically empty, right?
>
> **[4:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=298)** They have nothing in them and I'm just going to delete them just because why not?
>
> **[5:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=304)** You know, it just cleans up my content pane and just looks a lot better.
>
> **[5:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=308)** Now, if you go back to your tags tree, you're now going to notice that the only thing that is in the figure tag are these paths, and those are all the shapes.
>
> **[5:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=319)** With all those selected, I'm going to right click and say change tag to artifact.
>
> **[5:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=324)** Just leave it at the default and then click okay.
>
> **[5:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=326)** And now we can delete that empty figure tag.
>
> **[5:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=329)** Now what I'm going to do is I'm going to go to my accessibility tool and mine is missing over here.
>
> **[5:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=337)** So I'm going to comb over here to my tools tab, scroll down to protect and standardize.
>
> **[5:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=342)** And I'm going to add my accessibility tool back in there.
>
> **[5:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=346)** So I'm going to click on my accessibility tool and then I'm going to click on the reading order panel.
>
> **[5:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=352)** And using my cursor, I'm just going to marque the text of each one of these items to select it.
>
> **[5:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=359)** And I'm going to click on the text paragraph button to tag it as text.
>
> **[6:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=364)** So I'm going to repeat that and I want to do it in the order that it's flowing here, right?
>
> **[6:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=371)** That way it'll be output.
>
> **[6:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=373)** Hopefully in the correct order, we'll double check it.
>
> **[6:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=376)** But I'm just going to tag each one of these as text.
>
> **[6:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=383)** And once I'm done, I can close my reading order panel and I'm going to come over here and walk my tags tree and make sure that it's reading it in the appropriate order.
>
> **[6:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=396)** And I think I tagged it in a different order but it is reading in the order that it's flowing, which is good.
>
> **[6:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=402)** So I'll select all these P tags, move them into the document tag so that they're nested appropriately.
>
> **[6:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=408)** And the difference here is that now we are making it so much easier for a user to navigate this content.
>
> **[6:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=418)** They can read this information paragraph by paragraph.
>
> **[7:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=422)** If they want to go back, they can go back and read the previous one and then proceed to the next one.
>
> **[7:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=428)** We're giving them control over how this content is being read.
>
> **[7:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=434)** Where with alternate text we're not really giving them much control and we're kind of forcing them to memorize these items.
>
> **[7:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=442)** But now that we have them tagged as text, we're giving the user the ability to kind of step through this in the order that we've determined and it's going to make it a lot easier for them to absorb this information.
>
> **[7:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=456)** I'm always an advocate of addressing problems in the source application whenever possible.
>
> **[7:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=461)** However, sometimes due to reasons out of our control, it's not possible.
>
> **[7:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=466)** And in those cases you could take the extra steps to improve on the situation.
>
> **[7:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-challenging-elements?u=76281980&t=471)** It's just going to add time to the process.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (1)
> **UI Navigation:** click on (3), go to (1)
> **Code Keywords:** delete (2), let (1)
> **Env Vars:** pdf (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Using Autotag
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=0)** - [Instructor] A lot of people I talk to hear that Acrobat has an autotag feature, and think they've found the Holy Grail of PDF accessibility.
>
> **[0:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=9)** To be fair, autotag can do a lot of work in a really short amount of time, but it's accuracy can sometimes leave a bit to be desired.
>
> **[0:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=18)** I discourage new users from using autotag because they don't understand what autotag has done correctly and what it has done poorly.
>
> **[0:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=27)** But once you have a good accessibility foundation, autotag can be a tool that you can leverage to get work done quickly.
>
> **[0:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=34)** Let's take a closer look.
>
> **[0:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=36)** Now I'm beginning this video with the social media training manual already open.
>
> **[0:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=43)** This particular document is the 0111 file.
>
> **[0:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=47)** And what I want to show you is that if I open my tags pane, this is what I tongue in cheek call the kiss of death, right?
>
> **[0:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=57)** Because when you open up a PDF file and there are no tags, it basically means that you've got your work cut out for you.
>
> **[1:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=65)** We've got nothing to work with right now and I have 33 pages of content that needs to be tagged, right?
>
> **[1:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=72)** What I'm going to do is we're going to see what autotag can do to help us.
>
> **[1:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=78)** So if I come over here to my accessibility tool, you're going to notice the first option up here at the top is called autotag document.
>
> **[1:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=87)** And again, like I said, if you're a beginner user, I typically discourage them from using this.
>
> **[1:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=93)** I almost wish they would move this tool to the bottom so it's not so prevalent.
>
> **[1:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=98)** But I'm going to go ahead and click the autotag document button.
>
> **[1:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=103)** And considering I have 33 pages of content, Acrobat pretty much processes this document in about 10 seconds.
>
> **[1:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=111)** So that alone is pretty impressive.
>
> **[1:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=115)** Now, once you run autotag, it does give you a report of sorts and it tries to help you to identify problems with the file.
>
> **[2:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=128)** But to be fair, some of these instructions can be a bit misleading and can kind of send you down the wrong path.
>
> **[2:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=135)** So I'm just going to ignore this for now and switch over to my tags panel.
>
> **[2:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=140)** And I probably have to just refresh this.
>
> **[2:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=142)** Here we go.
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=143)** So you can see that we have a figure.
>
> **[2:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=145)** Well, that was pretty good.
>
> **[2:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=146)** And then I have this part tag, right?
>
> **[2:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=150)** Interestingly enough, if I open the part tag, it looks like this is everything else in the document, okay?
>
> **[2:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=157)** So you could see, you know, I have H1.
>
> **[2:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=160)** Well, that's really good, right?
>
> **[2:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=162)** If I move down, okay, so this is where it kind of failed, because it tagged this entire element as a figure including the text within it.
>
> **[2:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=173)** So that's less than ideal, but, you know, I guess we could make it work if we wanted to.
>
> **[3:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=180)** Now, as we move down here, not too, too bad, but, you know, you could see that some of the items within the TOC are TOCI items and others are paragraphs.
>
> **[3:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=193)** So this is an area where I have a little bit of cleanup to do, but impressively enough, if you open the TOCI objects they do have links inside of 'em.
>
> **[3:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=207)** So it automatically did create the link for that object.
>
> **[3:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=212)** And let's actually check this out.
>
> **[3:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=214)** If I click on the link, it does in fact take me to page seven, right?
>
> **[3:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=219)** So not too bad, you know, not too bad at all.
>
> **[3:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=224)** So again, it does a fairly good job, but it does require some cleanup.
>
> **[3:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=229)** Now, as I keep going through here, let's go past the TOC, still the TOC.
>
> **[3:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=236)** At least it tagged these items, but do you see how it failed to tag them as headers?
>
> **[4:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=242)** Now, the good news about this is, I mean, all I got to do is select the items, and I could certainly right click and go to properties and just change this to a heading level two, right?
>
> **[4:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=256)** That's easy enough for me to do.
>
> **[4:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=257)** So not too, too bad.
>
> **[4:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=260)** As I keep going down, there's a figure.
>
> **[4:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=263)** So we have some items out of order, but didn't do a very good job of determining whether these are headings or not.
>
> **[4:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=268)** It just made everything a paragraph, okay?
>
> **[4:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=272)** Now, what I really want to show you where autotag does tend to do a really good job.
>
> **[4:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=277)** If you've ever had to tag bulleted lists, you know that they're a bit of a pain.
>
> **[4:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=282)** We've done this in a previous video, kind of semi sort of.
>
> **[4:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=285)** If you're going to do it right, the bullet needs to be a label tag, the text needs to be an L body, then you got to nest everything and it's a little bit of work.
>
> **[4:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=294)** So what I'm going to do here is I'm going to find the tag for this selection.
>
> **[5:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=300)** And take a look at this guys, right?
>
> **[5:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=302)** I do think that this is pretty impressive, right?
>
> **[5:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=306)** You could see that it tagged this whole item as a list.
>
> **[5:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=310)** Each one of these is a list item.
>
> **[5:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=313)** Now this you could see kind of weird, but you know what?
>
> **[5:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=316)** That's an easy fix.
>
> **[5:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=318)** We can just pull them up and out of that list and delete that empty list, right?
>
> **[5:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=323)** So you could see, considering the amount of time that it normally takes me to tag a list, this alone is pretty darn good.
>
> **[5:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=332)** It looks like it forgot the label in this one, right?
>
> **[5:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=335)** But again, one out of five, not too bad.
>
> **[5:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=339)** And here's another list.
>
> **[5:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=343)** And look at that.
>
> **[5:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=344)** You know, it tagged each one individually really well.
>
> **[5:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=348)** It didn't even break.
>
> **[5:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=350)** The fact that the list is broken across a page, it still tagged it as a single list, which is pretty good.
>
> **[5:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=356)** So again, as you can see, really not too bad overall when you compare having to tag all this content manually, the fact that it's tagged at all is pretty impressive, right?
>
> **[6:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=373)** And all I'm really going to be tasked with doing is defining the headers where they exist, doing a little bit of cleanup.
>
> **[6:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=382)** And considering this is a 33 page document, really not too bad.
>
> **[6:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=386)** So as you can see, autotag does some things really well and other things not so well.
>
> **[6:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/using-autotag?u=76281980&t=393)** But it can be a tool you can leverage to reduce the time you need to spend on a document, and just clean up in places where autotag failed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (2), switch (1), require (1), delete (1)
> **Env Vars:** toc (3), pdf (2), toci (2)
> **UI Navigation:** open the (2), click on (1), select the (1), go to (1)
> **Definitions:** is a  (2), basically means (1), is called (1), is an  (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### Fixing decorative bullets and numbers
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=0)** - [Instructor] It's really common for designers and content creators to create unique bullets or numbers in a design to achieve a specific look.
>
> **[0:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=9)** The challenge, however, is that it causes content to be tagged incorrectly.
>
> **[0:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=13)** And as we learned earlier in this course, that violates WCAG Success Criterion 1.3.1, Info and Relationships.
>
> **[0:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=22)** When bullets or numbers are created manually, the source application doesn't know how to properly tag them and often results in an inappropriate tagging structure.
>
> **[0:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=32)** I have a document open here, and you can see on the left side here the designer has created these unique numbered items that they wanted to apply to the text to the right to indicate more of a numbered list.
>
> **[0:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=46)** Now, what I wanted to show you is I have the same document open here in InDesign, and you can see over here on the right is the text, and then they created these manual circles for each one of the numbers.
>
> **[0:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=59)** And you could see here, these are just shapes that I can adjust, I can manipulate, I can do whatever I want to them, okay?
>
> **[1:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=68)** Now, the problem that that creates in Acrobat, if we dive into the tag structure here, you will see that as I get down to those items... There we go.
>
> **[1:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=79)** You can see that each one of these items is tagged as a P tag, okay?
>
> **[1:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=84)** Well, again, we learned earlier in this course that that violates Info and Relationships, because if it's a list, it should be tagged as a list.
>
> **[1:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=93)** Now, it gets even better, because if you open up the P tag, because of how this was created in Adobe InDesign, each one of those circles with a number was its own text frame, okay?
>
> **[1:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=108)** And by doing that, it essentially outputs that item in a section tag, right?
>
> **[1:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=115)** And if you look here, you could see that here's my section tag and inside of it is a P tag with the number 1.
>
> **[2:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=125)** So it's absolutely not tagged correctly, and what I'm going to do, just to save a little bit of time, I'm going to open each one of these just so we can see them, okay?
>
> **[2:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=135)** Now, the good news is, is that I have everything I need to work with.
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=143)** I'm going to click on this first P tag, which is the number 1, and then I'm going to Ctrl-Click on the second, third, and fourth one.
>
> **[2:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=151)** So you can see I have all the numbers are currently selected.
>
> **[2:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=156)** Now, what I'm going to do is I'm going to right-click on any of those selected tags, I'm going to choose Properties, and I'm going to change the type here.
>
> **[2:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=165)** I'm going to change that to a label.
>
> **[2:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=170)** Okay?
>
> **[2:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=171)** Now, by doing that, fundamentally, this is now tagged correctly, and the only thing I'm going to going to do is I'm going to grab each one of these labels and pull them out of the section so that it's the first thing in each one of these container P tags, okay?
>
> **[3:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=192)** Then what I'm going to do is I'm going to select all of those empty section tags, I'm going to right-click and choose Properties, and change them to List Item Body.
>
> **[3:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=208)** And now what I'm going to do is I'm going to drag all of the text elements and put them into the L bodies.
>
> **[3:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=218)** And then the P tags themselves, I'm going to highlight them and change them to list items.
>
> **[3:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=231)** And so I leveraged all the containers that I had at my disposal to properly structure these list items the way they need to be.
>
> **[4:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=241)** And all I have to do to finish this up is create one more new tag for the container list and then move those list items into that list tag.
>
> **[4:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=255)** So now this is properly structured as a list.
>
> **[4:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=260)** It adheres to Info and Relationships because the list is tagged as a list.
>
> **[4:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=265)** And when this is read, assistive technology is going to say "list with four items", and it's going to properly tell the user that they're reading a list and there's four items in that list.
>
> **[4:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=278)** So a really great way to kind of leverage what we have when those decorative numbers or bullets are used.
>
> **[4:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=286)** It's not the end of the world.
>
> **[4:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=288)** It just means that you have a little bit of cleanup to do to get them to be structured the way that they need to be.
>
> **[4:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-decorative-bullets-and-numbers?u=76281980&t=294)** So if you need to create a custom look for bullets or numbers, just understand that you'll need to put additional work in after the PDF file is created so that it is read appropriately by assistive technology.

> [!info]- Semantic Content
>
> **UI Navigation:** right-click (2), click on (1)
> **Env Vars:** wcag (1), pdf (1)
> **Cross-References:** earlier in (2)
> **Definitions:** is a  (1), means that (1)
> **Versions:** 1.3.1 (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Reading options in Acrobat
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=0)** - [Instructor] The reading options in Adobe Acrobat control how assistive technology is able to read a document.
>
> **[0:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=6)** If you're not familiar with these settings you could get frustrated when trying to read a document using assistive technology.
>
> **[0:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=12)** So let's take a quick walkthrough of the reading options so you understand how they work and how to set them.
>
> **[0:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=18)** Now, I'm starting this document with the 01_13 document already open and to demonstrate what I'm trying to show you I'm going to open NVDA and I'm going to read this document.
>
> **[0:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=32)** - [AI] You show this okay button scripts, Google Docs dot one slash social media training manual Adobe Acrobat.
>
> **[0:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=37)** - [Instructor] Okay.
>
> **[0:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=39)** Now what I'm going to do is I'm going to press the H key to read the first heading
>
> **[0:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=42)** - [AI] Page one, social media training manual heading level one.
>
> **[0:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=45)** - [Instructor] Okay, that sounds good.
>
> **[0:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=46)** Let's read the next heading.
>
> **[0:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=48)** - [AI] No next heading.
>
> **[0:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=50)** - [Instructor] Wait a minute.
>
> **[0:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=51)** That's kind of strange.
>
> **[0:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=52)** Let's try it again.
>
> **[0:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=53)** - [AI] No next heading.
>
> **[0:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=55)** - [Instructor] Okay.
>
> **[0:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=55)** Now, you and I have seen this document a number of times throughout this course already and we know that there's 33 pages in this document and we know that there's another heading.
>
> **[1:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=65)** So what exactly is going on here?
>
> **[1:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=68)** Well, what we're dealing with is the reading options that have been set in the accessibility tool.
>
> **[1:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=76)** So if you come over here to the accessibility tool let's go ahead and quit NVDA while we're doing this.
>
> **[1:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=84)** If you come over here to the accessibility tool and click on reading options you could see that the screen reader options are set to read the currently visible pages only.
>
> **[1:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=97)** And because of that setting, assistive technology is not processing the entire document.
>
> **[1:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=105)** When we're telling it to read the next heading, it's only focused on one single page and it doesn't know that there's a heading after that.
>
> **[1:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=115)** So what we want to do is we want to turn on read the entire document.
>
> **[2:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=121)** And as an additional choice here our reading order is set to the tagged reading order which is what it should be.
>
> **[2:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=130)** If you click on the dropdown menu we can have it in further reading order.
>
> **[2:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=135)** We could go left to right, top to bottom.
>
> **[2:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=138)** We can have the reading order come from the print stream.
>
> **[2:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=141)** None of those make any sense.
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=143)** (laughs) You always want to use the tagged reading order.
>
> **[2:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=148)** So I'm going to go ahead and confirm that.
>
> **[2:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=150)** And then one other thing I want to show you is that in Acrobat, if you go to your edit menu and choose preferences, if you click on the reading category down here you can set the default preference here for all documents.
>
> **[2:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=168)** You can see currently it's set to only read the visible pages.
>
> **[2:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=171)** I'm going to say read the entire document 'cause honestly for me, I never don't want to read all the pages or I should say almost never, right?
>
> **[3:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=182)** Maybe if I have a thousand page document I may not want to do that because NVDA as well as JAWS can get a little slow because it's caching all those pages.
>
> **[3:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=193)** But I would say for the most part I typically want to read all the pages in the document.
>
> **[3:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=198)** Another choice you have, you could say for large documents, only read the current visible pages.
>
> **[3:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=205)** And when you choose that it allows you to define how you categorize a large document.
>
> **[3:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=211)** So I could say, oh well, a hundred pages is a large document, or you know whatever you want it to be.
>
> **[3:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=217)** But for me, I'm going to tell it to read the entire document and I'm going to go ahead and click okay.
>
> **[3:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=221)** So now what you'll find is that if I reopen NVDA.
>
> **[3:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=229)** - [AI] Use case, show social media training manual Adobe Acrobat Pro 64 bit.
>
> **[3:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=233)** - [Instructor] So now when I press the H key.
>
> **[3:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=235)** - [AI] Heading level one social media training manual.
>
> **[3:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=238)** - [Instructor] Now when I press the H key, again.
>
> **[3:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=239)** - [AI] Page two, table of contents heading level two.
>
> **[4:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=242)** - [Instructor] Again.
>
> **[4:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=243)** - [AI] Page Six.
>
> **[4:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=244)** Purpose and mission of this document heading level two.
>
> **[4:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=246)** - [Instructor] Again
>
> **[4:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=246)** - [AI] Defining policies and guidelines heading level two.
>
> **[4:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=248)** - So you can see by changing those reading options, now NVDA and JAWS would behave the same way, is able to read the entire document.
>
> **[4:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=258)** When I tell to read the next heading even though it's on the next page it's able to jump to the next page and read that heading.
>
> **[4:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reading-options-in-acrobat?u=76281980&t=266)** So, as you could see properly setting the reading options is key for proper reading using assistive technology.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (9), - [ai] (9), - so (1)
> **Env Vars:** nvda (5), jaws (2)
> **Code Keywords:** let (4), this. (1), case, (1)
> **UI Navigation:** click on (3), dropdown (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)

#### Detriments of editing a PDF file
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=0)** - [Chad] It seems harmless enough, right.
>
> **[0:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=2)** Someone says to you, "Hey we forgot to add a sentence "on page five of the PDF file.
>
> **[0:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=7)** "Can you add it in for me?"
>
> **[0:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=9)** As much as I want to tell you, sure, go ahead.
>
> **[0:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=11)** No big deal.
>
> **[0:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=13)** It is a big deal.
>
> **[0:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=14)** Editing a PDF can have disastrous effects on the file.
>
> **[0:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=18)** I can't explain the logic behind it, but I can tell you from experience, I avoid it whenever possible.
>
> **[0:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=24)** Let me show you what I mean.
>
> **[0:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=26)** I'm going to go ahead and open the tags pane in this PDF file and I'm going to click on the H2 below the TOC, which takes me to page six.
>
> **[0:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=37)** And if I start walking the tags tree, you could see that the tags on this page are tagged very appropriately, right.
>
> **[0:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=44)** I have H2s, I have H3s, paragraphs.
>
> **[0:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=47)** Everything looks really good, okay.
>
> **[0:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=51)** Now, let's say somebody says to me, "Chad, we forgot to add a sentence in this first paragraph."
>
> **[0:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=57)** Okay, so if I come over here and choose Edit PDF and I click in here and I say, I'm going to make something up here, okay, that's my edit, okay.
>
> **[1:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=68)** So simple enough, right.
>
> **[1:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=70)** And it looks really, really harmless, right.
>
> **[1:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=74)** So I'm going to go ahead and close this editing.
>
> **[1:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=77)** Now, if I come back over here and I click on that same H2 below the TOC, it's going to highlight my heading.
>
> **[1:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=85)** Now I'm going to arrow down to the next tag.
>
> **[1:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=88)** Hmm, how about the next tag or the next one?
>
> **[1:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=93)** Next, next, next, next.
>
> **[1:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=96)** All of these tags are empty until I get down to this paragraph, and you'll see that all of that content has been merged into one single p tag.
>
> **[1:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=114)** It's ugly guys.
>
> **[1:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=116)** And honestly, it's pretty frustrating because Acrobat is a very powerful tool.
>
> **[2:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=121)** It allows me to make the edits but it totally messes up my tag structure, okay.
>
> **[2:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=128)** Now, to be fair, I could go into the accessibility tool and retag everything, but who wants to do that?
>
> **[2:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=135)** Why should I have to redo all of that work for a simple text edit?
>
> **[2:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=141)** I could tell you typically this problem is isolated to the page in which the edit was made.
>
> **[2:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=147)** So in that regards, you know, when you go to the next page, everything should be okay.
>
> **[2:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=153)** You know you shouldn't have any problems from there forward.
>
> **[2:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=156)** But on the page in which you made the edit it's really completely messed up.
>
> **[2:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=161)** And again, the only way to fix it is to retag it from scratch, reassign the proper tags to the different elements.
>
> **[2:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=169)** And to be honest, I just, in my opinion, it's really not worth it.
>
> **[2:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=174)** So as you can see a seemingly harmless edit can have disastrous results when editing a PDF.
>
> **[3:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/detriments-of-editing-a-pdf-file?u=76281980&t=180)** If you have the source file, make the edit there, but avoid editing in Acrobat whenever possible.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (5), toc (2)
> **UI Navigation:** click on (2), open the (1), go to (1)
> **CLI Commands:** make (3)
> **Code Keywords:** let (2)
> **Definitions:** is a  (2)
> **Speakers:** - [chad] (1)

#### Working with ligatures and drop caps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=0)** - [Teacher] Ligatures and drop caps are both textual elements that are generated from source applications that can be problematic at times.
>
> **[0:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=8)** Let me show you what to be aware of and how to fix some situations.
>
> **[0:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=13)** Now I have the 01_15b PDF file open on my computer.
>
> **[0:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=19)** And this is an example of text that contains what we call ligatures, okay?
>
> **[0:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=26)** Now ligature is basically, if you look here, ligatures basically combine multiple characters together as one, all right?
>
> **[0:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=38)** So you can see in the word "affluent," the "ffl" is a ligature, in the word "baffling," the "ffl" is a ligature.
>
> **[0:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=45)** And in the word "office," the "ffi" is a ligature.
>
> **[0:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=49)** I want to bring up ligatures because they can be problematic, although not always, right?
>
> **[0:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=56)** And unfortunately, the only way to really know if they're a problem is if you test it with a screen reader.
>
> **[1:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=65)** Okay?
>
> **[1:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=66)** Now, what I will say is, typically, if you use an open type font to create the text typically, your results are going to be very good.
>
> **[1:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=75)** I'm going to read this document in a second to kind of demonstrate this.
>
> **[1:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=79)** But that's how you're going to know.
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=80)** But if you use, for example, a postscript font, and again, Adobe's going away with Adobe fonts in the very near future, but in the event that you are using a postscript font, or potentially even a true type font, you could run into situations, I've encountered a situation where it voiced the word "office" as "ofice," okay?
>
> **[1:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=104)** Which can be a little awkward for the user listening to this.
>
> **[1:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=107)** So just keep ligatures in mind.
>
> **[1:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=110)** And my guidance to you is test it with a screen reader to make sure or disable ligatures in your source application.
>
> **[2:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=120)** And then the other thing I wanted to talk about is drop caps, okay?
>
> **[2:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=124)** And drop caps are a really great design element.
>
> **[2:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=128)** You can see this here on the "S" in "summer vegetables."
>
> **[2:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=131)** I'm going to go ahead and jump back over to this document.
>
> **[2:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=134)** I'm going to open NVDA for a second.
>
> **[2:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=136)** (electronic tone)
>
> **[2:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=138)** - [AI] Well you, okay button, 01_15b.pdf Adobe.
>
> **[2:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=142)** - [Teacher] And if I read this sentence.
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=143)** - [AI] Page one, "Pay attention when entering office.
>
> **[2:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=145)** "Affluent people can be baffling."
>
> **[2:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=147)** - [Teacher] All right?
>
> **[2:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=148)** So that sounds great and that tells me that the font that I used is working and is not creating any problems.
>
> **[2:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=155)** Now let's take a look at this document.
>
> **[2:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=158)** I'm going to read this.
>
> **[2:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=160)** - [AI] Heading, level one "Vegetables.
>
> **[2:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=161)** "S-ummer vegetables should be cooked "on same day they are."
>
> **[2:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=163)** - [Teacher] So I dunno if you paid attention to that, but it's saying "S-ummer vegetables."
>
> **[2:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=167)** Let me do it one more time.
>
> **[2:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=168)** - [AI] Heading level one, "Vegetables.
>
> **[2:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=170)** "S-ummer vegetables should be cooked on same day "they are gathered.
>
> **[2:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=172)** "Look them over and."
>
> **[2:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=173)** - [Teacher] Drop caps can definitely be a problem, all right?
>
> **[2:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=177)** Now I'm going to quit NVDA.
>
> **[2:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=178)** So.
>
> **[2:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=179)** - [AI] Zero.
>
> **[2:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=179)** - [Teacher] So it's not voicing everything I do.
>
> **[3:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=181)** And I want to show you a way to fix this but I first want to show you the problem.
>
> **[3:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=185)** If I go into my tags pane and I go to the paragraph that contains that text, you'll see that the "S" is in a span tag and it kind of sits on its own.
>
> **[3:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=198)** And then from there, it reads the rest of the text.
>
> **[3:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=201)** And this is why it's saying "S-umer vegetables "should be cooked."
>
> **[3:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=207)** Okay?
>
> **[3:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=208)** So how can we fix that?
>
> **[3:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=210)** Well, one way we can fix that is using the content pane, right?
>
> **[3:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=215)** And if I come over to the content pane, I'm just going to kind of drill down and I'm going to find where this text lives, all right?
>
> **[3:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=224)** And what I'm going to do is I'm going to open these containers that contain all of my text, there we go.
>
> **[3:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=232)** And what I'm going to do is I'm just going to select these elements and then I'm going to drag them up so that all of the text elements are in one container, okay?
>
> **[4:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=242)** And then all of these empty container objects we can delete, okay?
>
> **[4:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=246)** Now what happens by me combining them like that, I'm going to do a save as, and I'll just call this "Finish."
>
> **[4:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=255)** That way you can reference it later on.
>
> **[4:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=258)** If I now go to my tag structure, you'll notice that all of my text is now contained in that one location.
>
> **[4:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=268)** And what I would like to do, and this is probably me just being picky, it doesn't make sense for this to be in a span.
>
> **[4:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=275)** I'm just going to move it out of the span and then delete that empty span tag.
>
> **[4:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=279)** So now all of the text of that paragraph is kind of combined into one object.
>
> **[4:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=284)** And by me doing that, I'm going to go ahead and open up NVDA again.
>
> **[4:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=289)** (electronic tone)
>
> **[4:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=290)** - [AI] "Summer vegetables should be cooked "on same day they are gathered.
>
> **[4:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=293)** "Look them over."
>
> **[4:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=293)** - [Teacher] Do you hear that?
>
> **[4:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=294)** Let me go up again.
>
> **[4:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=295)** - [AI] Heading level one, "Vegetables.
>
> **[4:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=297)** "Summer vegetables should be cooked on same day "they are gathered, look them over and wash well."
>
> **[5:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=301)** - [Teacher] So now, the voicing is much better.
>
> **[5:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=304)** You know, you're not getting that disruption.
>
> **[5:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=305)** It's not saying "S-ummer vegetables," it's simply voicing it as "summer vegetables."
>
> **[5:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=310)** Typically, in a document, drop caps are not used extensively.
>
> **[5:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=315)** They're typically used in chapter intros and things like that.
>
> **[5:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=319)** So even though this is a little bit of additional work, in my opinion, the benefit is pretty significant because the content is going to be voiced in a good way.
>
> **[5:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=331)** Pay attention to documents that use drop caps or ligatures.
>
> **[5:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-ligatures-and-drop-caps?u=76281980&t=334)** Make sure they're being read correctly and don't cause any unnecessary problems in your document.

> [!info]- Semantic Content
>
> **Speakers:** - [teacher] (8), - [ai] (7)
> **Code Keywords:** let (4), this. (3), delete (2)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** nvda (3), pdf (1)
> **UI Navigation:** go to (2)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)


### 2. Working with Tables in Adobe Acrobat

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Defining header cells in a table
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=0)** - [Instructor] WCAG states that it is a failure if a table does not contain header cells to make the headers programmatically determinable.
>
> **[0:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=8)** Now that's sort of a fancy way of saying that tables need header cells to define the category for the data cells.
>
> **[0:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=14)** In this video, we'll go through a few methods of defining header cells in a table.
>
> **[0:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=19)** So I'm starting here with the 0201 document open on my computer.
>
> **[0:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=24)** And if I open up the tags pane, you could see right here I have a table that is being used to tag the content of this table on the page.
>
> **[0:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=34)** Now if I open up the table and I open up the first row, which I would call a header row, you could see that the cells within that row are simply defined as table data cells.
>
> **[0:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=46)** So that alone is a failure because visually, that information at the top of the table is the header row of the table but it is not tagged accordingly.
>
> **[0:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=58)** Now one thing you could do that's a pretty simple fix is we could select these two data cells, we can right click on them and choose properties.
>
> **[1:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=68)** And in the type dropdown menu, we could choose table header cell.
>
> **[1:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=73)** Now that does accomplish the task of defining those cells as header cells, but that method falls a bit short because in addition to defining the cells as headers, we also need to define the scope of those header cells.
>
> **[1:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=87)** The scope is defined as either a column, a row, or both.
>
> **[1:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=93)** And in this case, the row at the top of the table should be defined as a column header.
>
> **[1:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=99)** So to take that step, what we're going to do is come over here to our accessibility tool inside of Adobe Acrobat and we're going to click on the reading order button.
>
> **[1:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=111)** Now I want to point something out for those of you who may have just installed Adobe Acrobat on your computer.
>
> **[1:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=118)** Oftentimes, this checkbox down at the bottom that says display like elements in a single block is enabled.
>
> **[2:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=125)** I like to disable it because I like the way it displays the contents of the table.
>
> **[2:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=132)** Now getting back to our header cells, I'm going to click on any one of the labels found within this table.
>
> **[2:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=139)** And when you do that, you're going to notice that the table editor button becomes available.
>
> **[2:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=145)** So I'm going to click on the table editor button.
>
> **[2:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=148)** Now the table editor is roughly replicating how the table looks in my document.
>
> **[2:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=155)** And what we could do is I'm going to click on the first cell of the header row and then I'm going to shift click on the second cell.
>
> **[2:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=166)** And now if you right click on either of those selected cells, we could choose table cell properties.
>
> **[2:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=173)** Now you'll notice these cells are already defined as a header cell, but right here is the scope dropdown menu that is currently specified as none.
>
> **[3:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=183)** And I could tell you, this will cause a failure when you're checking this PDF using a checker such as the PAC 2021 checker or the CommonLook validator.
>
> **[3:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=196)** So in the scope dropdown, I'm going to choose column to tell these header cells that they are column headers in the table.
>
> **[3:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=205)** And now when I click okay, the table editor is replicating and showing me how this table is structured.
>
> **[3:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=213)** Now one of the things you'll notice, it's really kind of hard to tell that are header cells.
>
> **[3:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=220)** They really don't look much different.
>
> **[3:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=222)** And so what we could do is if you right click on this table and choose table editor options, we have the ability to change how the table editor displays different elements of the table.
>
> **[3:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=237)** And you can see that right now my header cell color is defined as red, which isn't showing up very well against that green background.
>
> **[4:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=246)** So if you wish, you could click on the color next to header cell and I could choose something a little more drastic.
>
> **[4:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=252)** I wonder if I choose, say, a blue color and click okay, now you could see that header cell is a little more prominent and it allows me to see the cells that are defined as header cells within this table.
>
> **[4:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=267)** And you'll notice it now, if I were to run the Acrobat checker, so I can run the accessibility check here, you'll notice that there are no failures on this table, especially in the category of the table.
>
> **[4:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=282)** I'm going to go ahead and do a save as here and I'm going to call this 0201, finish.
>
> **[4:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=290)** And what I can also do is run that document through the PAC checker and you can see that there are no failures.
>
> **[5:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=301)** The only failure I have right now is a metadata failure because I did not add a title to this document.
>
> **[5:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=308)** So the table elements of that document are completely passing with flying colors.
>
> **[5:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-header-cells-in-a-table?u=76281980&t=314)** So choose whichever method you like but do make sure that you define header cells as well as scope in your tables.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (7), dropdown (3), checkbox (1)
> **Definitions:** defined as (5), is a  (4)
> **Env Vars:** pac (2), wcag (1), pdf (1)
> **CLI Commands:** make (2)
> **Code Keywords:** case, (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Tables that span multiple pages
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=0)** - When tables span multiple pages, problems can occur regarding the accessibility level of those documents.
>
> **[0:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=7)** Let's take a look at an example, and I'll walk you through some considerations to keep in mind when dealing with tables that span multiple pages.
>
> **[0:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=15)** Now, beginning here with the 02_02 document open, and this contains a table that has a list of baking substitutions, right?
>
> **[0:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=25)** So, certainly useful information for our cookbook, but it's a table that starts on the left hand page and continues on the right hand page.
>
> **[0:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=34)** Now that's all well and good.
>
> **[0:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=36)** There's some things that are happening in this table that are beneficial for sighted users, right?
>
> **[0:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=41)** One of which is the table head row, that the header row, is repeated on concurrent pages.
>
> **[0:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=50)** And that's really helpful.
>
> **[0:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=51)** If you think of the context of somebody flipping through a book, when they get to the next page, if the header's missing, they're going to be like, oh, well, what's the category of this information? Right?
>
> **[1:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=62)** So, that's where the repeating header is beneficial.
>
> **[1:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=66)** However, for somebody using assistive technology that can actually be disruptive, because, keep in mind, you know, users of assistive technology are going to read a single table, and if they're navigating down the rows, and all of a sudden the header is repeated, it really is not in a logical position that makes sense, because this first header is going to be a header for all of the data in the table, and the table knows that.
>
> **[1:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=96)** So, let's take a look at what we've been given in the output of this table.
>
> **[1:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=100)** So if we open up our tags pane, and we open up our table, this is a really common situation.
>
> **[1:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=107)** Now, this particular file was created in Adobe InDesign, and this is a really common thing that we run into with output from Adobe InDesign.
>
> **[1:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=115)** And what I want to show you, you'll notice we have a THead tag, and that's for the header of the table, and then we have a TBody, but note that the TBody is only for the body on the first page, and then you'll notice that the head is repeated, okay?
>
> **[2:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=133)** And then so is the TBody.
>
> **[2:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=135)** So, again, this creates a bit of a problem, because, functionally, this should be one table with one THead and one TBody, right?
>
> **[2:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=146)** So, the fact that the header is repeated, that would be a disruptive experience, okay?
>
> **[2:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=153)** So this second THead, although we have it visually, for the benefit of sighted users, it's not going to be helpful for users of assistive technology.
>
> **[2:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=163)** So, what I'm going to do here is I'm going to open up the cells of that THead, and I'm going to select the marked content inside of there, right?
>
> **[2:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=174)** So this is the actual text that is tagged, and I'm simply going to right click and choose "Change Tag to Artifact," and you can leave the setting at the default of a page artifact, and click okay.
>
> **[3:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=188)** And now you'll notice that all of these cells are empty.
>
> **[3:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=191)** So if I click on the THead, nothing is highlighted, so I can literally just hit delete and get rid of that.
>
> **[3:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=198)** And then for proper table structure, what I'm going to do is move all of the rows from the second TBody, right?
>
> **[3:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=209)** So I'm going to grab all those rows and move them up into the first TBody.
>
> **[3:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=215)** And now that this TBody is empty, I can delete that as well.
>
> **[3:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=219)** And so if you look at what we have now, we have one THead, we have one TBody, and we have one TFoot, right?
>
> **[3:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=229)** And that's going to create a much more logical and much better experience for the user of assistive technology, because, even if they're reading, let me just go down to say, here, right?
>
> **[4:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=244)** Even if they're reading this cell, it knows that "Use This" is the header for that cell, okay?
>
> **[4:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=254)** And that's critical.
>
> **[4:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=256)** We want to keep that in mind.
>
> **[4:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=257)** And what we just did is we restructured the table so that it's reading in a much more logical way, and it'll be a lot easier for users of AT to interpret.
>
> **[4:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=269)** Now, one other thing I'd like to bring up.
>
> **[4:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=271)** Adobe InDesign does not allow you to do this, but Microsoft Word allows a row to break across a page.
>
> **[4:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=282)** Imagine this "Molasses" row that has more information, and so the row is forced to continue over here.
>
> **[4:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=294)** And that creates a really interesting situation, because Word actually creates a new row for the continuation of the row from the first page.
>
> **[5:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=308)** So, in a situation like that, again, that's going to create a very odd experience, because part of the "Molasses" row is going to be read, and then the back half of the row is going to be read on the next page.
>
> **[5:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=322)** So, again, to fix that, what you want to do is combine that information into a single row.
>
> **[5:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=329)** That way, that information will be interpreted correctly.
>
> **[5:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=334)** So, we can't completely avoid tables that span multiple pages.
>
> **[5:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=338)** It's something that we just need to deal with.
>
> **[5:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tables-that-span-multiple-pages?u=76281980&t=341)** But understanding that some additional work will be required to make those documents fully accessible, is good information to remember when you're building your documents.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), delete (2), this, (1), continue (1)
> **Warnings:** keep in mind (2), note that (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Analogies:** imagine (1)
> **Prerequisites:** required to (1)
> **Speakers:** - when (1)

#### Understanding table spans
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=0)** - Table spans occur whenever you merge cells in a table in the source application.
>
> **[0:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=5)** It's a common practice to merge cells in a table for a variety of different reasons.
>
> **[0:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=9)** But when you do this, you could end up with an accessibility issue if you don't properly remediate those tables.
>
> **[0:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=16)** In order to be able to do this, you need to understand what a span is and how they're defined.
>
> **[0:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=21)** So let's take a closer look.
>
> **[0:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=23)** Here, we have a table that I've created and within this table I've created a couple of merged cells for the category of tubers as well as the category for vegetables.
>
> **[0:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=37)** Now, this is what happens when we merge more than one cell together.
>
> **[0:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=42)** When you go to check your document, you'll typically get what's called irregularity error.
>
> **[0:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=47)** And irregularity error occurs whenever your table does not have the same number of cells in a row or a column.
>
> **[0:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=57)** Okay?
>
> **[0:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=58)** So, in this particular example here what used to be two cells, right, for tubers and for vegetables, have now been merged into one.
>
> **[1:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=67)** So, you know, originally the tubers cell was this wide, right?
>
> **[1:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=72)** And same thing for vegetables.
>
> **[1:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=74)** But what we did is we merged them together.
>
> **[1:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=77)** So now, we only have one.
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=80)** So this row has one cell, most of the other ones have two and that's what is going to cause irregularity error.
>
> **[1:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=88)** Now, when we go on from here, what we need to remember is that in order to make this table compliant, we need to add a span to that cell, okay?
>
> **[1:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=102)** And a span can be in the form of a column span, a row span, or both, in which case both the columns and the rows have been merged.
>
> **[1:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=114)** In the example I'm showing you here, these two cells would require what's called a column span, right?
>
> **[2:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=121)** And so, the tubers and the vegetable cells that used to be two cells are now one, but they are spanning the equivalent of two cells.
>
> **[2:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=133)** And because right now we're dealing with rows, we would need to apply a column span of two to both of these cells.
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=143)** Now, the way that you determine what number you use for a column span is you look at the other rows in the table and you really have to calculate which row has the most number of cells, right?
>
> **[2:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=157)** Now, this table is really simple because all of the other rows have two cells.
>
> **[2:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=163)** And so, in order for us to properly remediate this table, we would need to set the tuber cell and the vegetable cell to have a call span of one or a column span of one.
>
> **[2:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=176)** Now, the same thing can happen sometimes when you merge multiple rows together.
>
> **[3:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=182)** Like for example, let's say we wanted to merge potatoes and turnips together, okay?
>
> **[3:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=187)** Now, in that case, we would need to apply a row span of two because we have one cell that is spanning to rows, okay?
>
> **[3:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-table-spans?u=76281980&t=200)** So, once you understand how table spans work, you have the tools that you need to properly remediate tables within an accessible PDF file.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), let (2), require (1), case, (1)
> **CLI Commands:** make (1)
> **Env Vars:** pdf (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - table (1)

#### Tagging tables with merged cells
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=0)** - [Instructor] Now that you understand Table Spans, we can apply what we learned to make our table accessible.
>
> **[0:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=6)** There are a few things to watch out for, however, so let me walk you through this process.
>
> **[0:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=12)** So on my screen, I have this Vegetables table that contains the two rows that have merged cells, okay?
>
> **[0:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=22)** Now, I want to show you something before I continue because I had told you previously that typically when you do this, right?
>
> **[0:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=31)** It's going to create what we call a regularity error.
>
> **[0:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=34)** Now, what I'm going to do is I'm going to run this document through the PAC Checker.
>
> **[0:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=41)** And when I do, the PAC Checker is saying, "Hey, this document is great," okay?
>
> **[0:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=49)** Now, I'm a bit of a skeptic, right?
>
> **[0:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=53)** And so whenever I see this, especially when I look at a table like this, I'm like, "Wait a minute, I'm really surprised that that's the case because typically, these merged cells give me a problem."
>
> **[1:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=66)** So let's dive in and kind of take a look at what we have, okay?
>
> **[1:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=70)** So I'm going to go ahead and open up my Tags pane.
>
> **[1:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=74)** And if we open up this Table tag, I'm going to go to the second row that contains Tubers.
>
> **[1:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=79)** And when I click on it, only Tubers is highlighted.
>
> **[1:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=82)** I'm like, "Well, that that looks good," right?
>
> **[1:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=85)** Well, if I open up that row, however, what we're finding is that there are actually two cells in that row.
>
> **[1:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=95)** We have the cell for Tubers, and then we have an empty cell directly to the right.
>
> **[1:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=103)** Now, you'll run into this sometimes because sometimes in the source application, people will fake the appearance of a merge cell and simply leave it as two cells, remove the divider line between the cells.
>
> **[2:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=120)** And so visually, it looks like one merged cell, but structurally, it's still broken up into two cells, okay?
>
> **[2:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=130)** That could create a little bit of a challenge because when this is red, this secondary cell is going to be red as an empty cell.
>
> **[2:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=138)** And of course, that could, of course, be confusing.
>
> **[2:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=140)** And if I go down to my Vegetables row, I'm noticing that the same thing is happening, okay?
>
> **[2:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=148)** So this configuration is not correct, right?
>
> **[2:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=152)** Because that's really not what we're trying to represent here, especially as we move on in this chapter because we really want Tubers and Vegetables to be headers for the data below, and having an empty header cell is a failure also.
>
> **[2:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=173)** So what I'm going to do, I'm noticing that these empty cells are incorrect.
>
> **[2:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=177)** I'm going to go ahead and delete them.
>
> **[2:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=179)** And remember, I can only delete them because they're empty.
>
> **[3:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=182)** If they contained content, I would want to artifact that marked content first, and then I could delete the cell, all right?
>
> **[3:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=191)** So that now is at least reflecting the structure that I'm looking for, okay?
>
> **[3:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=197)** So let me do a Save As on this, and I'm going to go ahead and call this the 02_04_finish version, okay?
>
> **[3:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=205)** And then what I'm going to do is let's take a look at what this looks like in the PAC Checker again.
>
> **[3:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=212)** So I'll grab my finish file, run that through the PAC Checker.
>
> **[3:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=216)** And now you're going to notice, we have a new error that's popping up, okay?
>
> **[3:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=220)** And if I look at the Results in Detail, and I go to the Structure Elements category, you can see we are getting a table error, and we have a regularity error on, as you might guess, the Tubers row and the Vegetables row, okay?
>
> **[4:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=240)** And it might seem like I did more harm than good, right?
>
> **[4:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=244)** Because you're like, "Well, wait a minute, it was completely passing the first time.
>
> **[4:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=248)** Why did you go and mess it up?"
>
> **[4:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=250)** Well, because structurally, it was not correct, okay?
>
> **[4:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=255)** So how do we make this correct?
>
> **[4:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=257)** Well, what we're going to do, we're not even going to use the Tags pane anymore.
>
> **[4:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=263)** What we're going to do is we're going to come over here to the Accessibility tool, and I'm going to choose Reading Order.
>
> **[4:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=271)** And what I'm going to do is, again, click anywhere on any of these labels within the table.
>
> **[4:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=277)** And then you're going to notice that the Table Editor button becomes available.
>
> **[4:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=282)** So I'm going to click on the Table Editor button.
>
> **[4:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=285)** And now, we can see that we have emerged cell.
>
> **[4:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=291)** Like, I will tell you, the table editor fails very quickly and we're going to see that in a future video.
>
> **[4:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=298)** Right now, it's doing a pretty good job of representing what this table looks like, okay?
>
> **[5:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=305)** Now, to fix the problem that we're running into, what we're going to do is we're going to click on the Tubers cell, and I'm going to right-click and choose Table Cell Properties.
>
> **[5:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=316)** And this is where we have a value called Column Span.
>
> **[5:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=322)** And what I'm going to do is I'm going to change that number to two.
>
> **[5:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=327)** Now, when I click OK, we're going to get a message.
>
> **[5:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=331)** And if I paraphrase this message, it's basically saying that if you don't know what you're doing, you can do some serious damage to your file, right?
>
> **[5:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=342)** So one thing I'll recommend, always do a Save As on your file before you go in and do this.
>
> **[5:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=349)** And that way if you make a mistake or you do something incorrectly, you can always go back to that previous version and try again.
>
> **[5:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=356)** I've done this too many times and I've had to start over from scratch.
>
> **[6:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=360)** So I'm trying to save you a little bit of time.
>
> **[6:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=362)** I'm going to go ahead and say, "Yes, I do want to proceed."
>
> **[6:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=365)** What I'm going to do to make this a little bit easier to see, I'm going to right-click on the table and choose Table Editor Options.
>
> **[6:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=374)** And what I'm going to do is I'm going to turn on Show cells that span multiple rows or columns.
>
> **[6:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=382)** And when I do that, that color's really hard to see.
>
> **[6:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=385)** Let me try to change that color.
>
> **[6:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=387)** I'm going to right-click and go to Table Editor Options.
>
> **[6:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=390)** Oh, yeah, there we go.
>
> **[6:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=390)** Let me change this to like this blue color.
>
> **[6:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=394)** Okay, that's showing me all of these colors in blue.
>
> **[6:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=397)** That's kind of interesting.
>
> **[6:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=399)** But let's go ahead and click on Vegetables, and then I'm going to right-click and go to Table Cell Properties.
>
> **[6:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=406)** We're going to change this to have a Col Span of two, say Yes, and that looks pretty good.
>
> **[6:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=413)** I'm going to right-click on my table editor options again.
>
> **[7:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=420)** Okay, I see what's happening here.
>
> **[7:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=422)** So my showing the cells that span multiple rows or columns is in blue, and so are cells with a missing header.
>
> **[7:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=429)** Now, we're going to address that a little bit later.
>
> **[7:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=431)** Let me change this to like red.
>
> **[7:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=434)** There you go.
>
> **[7:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=435)** Now you can see it a little bit better.
>
> **[7:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=436)** The blue span is still not showing up very well.
>
> **[7:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=439)** I don't know what other color would show really well here.
>
> **[7:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=445)** Maybe like a purple.
>
> **[7:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=447)** Yeah, it's tough on that green background.
>
> **[7:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=450)** It's really tough to identify, but that's what you need to do, right?
>
> **[7:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=454)** And I'm going to click out of there, close the Reading Order and save my document.
>
> **[7:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=459)** And if I go back to my PAC Checker and I refresh the check, so it's really just checking the same file, you'll now see that all of my categories are passing, including the tables.
>
> **[7:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=473)** And that's because I've sufficiently defined the Column Span on those merged cells.
>
> **[8:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=480)** And now, when this is read, that is going to be read as a single cell that is occupying the space of two cells in every other row.
>
> **[8:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-tables-with-merged-cells?u=76281980&t=490)** So understanding spans and ensuring our table reflects the intent of the table is important to ensure that our documents are accessible.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (4), delete (3), for, (2), continue (1)
> **UI Navigation:** right-click (5), go to (4), click on (4)
> **Env Vars:** pac (5)
> **CLI Commands:** make (4)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1)
> **Warnings:** watch out (1)
> **Speakers:** - [instructor] (1)

#### Defining scope and span manually
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=0)** - [Instructor] We've learned how to use the table editor in previous videos to set the scope of a header cell.
>
> **[0:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=5)** And we also learned how to use the span feature to deal with merged cells.
>
> **[0:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=9)** But what happens when the table editor fails?
>
> **[0:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=12)** And let me tell you, it does fail.
>
> **[0:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=15)** In these cases, you'll need to define the scope and span manually.
>
> **[0:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=19)** Let me show you how to do this for those cases when the table editor fails.
>
> **[0:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=24)** So I have this table on my screen right now and we have a header cell over here at the beginning of the table, which needs to be defined.
>
> **[0:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=33)** And you'll also notice that a few rows down over here we have a cell that has been merged, right?
>
> **[0:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=40)** And they did this for whatever reason, simplicity, clean things up, you know, whatever, but that's their prerogative.
>
> **[0:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=47)** So I wanted to find those elements because currently this table is not passing.
>
> **[0:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=53)** Let's take a quick look at that.
>
> **[0:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=54)** And this particular file that we're working on is 02_05.
>
> **[1:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=60)** So I'm going to go ahead and run that through my pack checker and you can see that we have a couple of errors, one of which is metadata, and that's my fault, I forgot to give it a title.
>
> **[1:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=68)** But if we open up the structure and we go to tables, you can see that we're getting a table regularity error inside of here, okay?
>
> **[1:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=77)** Now, if we go back to our PDF file, my first instinct is to use the table editor to make this happen, right?
>
> **[1:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=85)** So what I'm going to do is I'm going to go to my accessibility tool, go to reading order, and if I click on one of the labels in this table, that'll make the table editor button available.
>
> **[1:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=97)** So I'm going to go ahead and click on that button.
>
> **[1:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=99)** Now, when you click on this, I don't know about you, but my first thought is, "what in the world is going on here," right?
>
> **[1:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=107)** And this is a classic example of where the table editor fails, right?
>
> **[1:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=112)** Because in this particular example, because we have two tables on a single spread, the table editor is just not smart enough to know that we have two separate tables, and it's trying to lump the two together, and quite honestly, failing miserably, right?
>
> **[2:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=129)** It's not doing a very good job.
>
> **[2:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=131)** So I'm going to go ahead and close out of this, you know, get out of the table editor, because that certainly is not going to help me.
>
> **[2:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=137)** So what I'm going to do is I need to define the scope for the header cells as well as the span for this cell manually.
>
> **[2:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=145)** The way that we're going to do that is we're going to go into our tags tree and I'm going to open up this table.
>
> **[2:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=150)** And this first row here is supposed to be a header cell, okay?
>
> **[2:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=155)** And if I open them up, you can see that they're not.
>
> **[2:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=158)** So the first thing I'm going to do is just select all of these and I'm going to right click and choose properties.
>
> **[2:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=164)** And I'm going to change the type from a table data cell to a table header cell.
>
> **[2:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=169)** All right, so that's pretty simple to do.
>
> **[2:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=172)** But the scope of the cells, as we had discovered in a previous video, is still not defined.
>
> **[2:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=178)** So what I'm going to do is I'm going to right click on this table header cell and I'm going to choose properties.
>
> **[3:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=183)** And in the object properties, we're going to click on this button here that says, "edit attribute objects."
>
> **[3:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=191)** Within there, if you open up these categories, you're going to see that currently I have one property in here.
>
> **[3:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=199)** Now I want to make a note here, there may be times when you come in here, and let me just kind of replicate this for you, I'm going to delete this and let's delete this, right?
>
> **[3:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=209)** There may be times when you come in here where this is all you see, okay?
>
> **[3:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=214)** If that's the case, click on the new item button and that's going to create this category for you.
>
> **[3:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=220)** And then the problem is that Acrobat's not smart enough to know that you're working in a table.
>
> **[3:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=226)** And so, it automatically puts a layout property here.
>
> **[3:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=230)** So if you need to do this, what you need to do is click on the O layout, click change item, and change the value to Table, right?
>
> **[3:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=239)** And that'll kind of set you up to proceed.
>
> **[4:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=242)** Now to define the scope, we're going to click on this object here, and we're going to choose new item.
>
> **[4:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=250)** And the key is going to be Scope.
>
> **[4:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=254)** the value is going to be Column, okay?
>
> **[4:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=256)** And you can leave the value type set to Name, that's okay.
>
> **[4:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=261)** So I'm going to click OK, now you can see that property has been added.
>
> **[4:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=265)** I'm going to say OK again, and then we'll do the same thing over here to the second cell.
>
> **[4:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=274)** Scope.
>
> **[4:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=277)** Column.
>
> **[4:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=278)** I'll point out, Scope needs a capital S, Column needs a capital C, very picky, okay?
>
> **[4:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=284)** And then finally, go to this one.
>
> **[4:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=288)** Scope. Column, okay?
>
> **[4:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=291)** That takes care of our header row.
>
> **[4:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=293)** Okay, now each one of those cells has the proper scope applied.
>
> **[4:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=297)** Now, what's causing the regularity error is you'll see that this row has three cells, right?
>
> **[5:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=304)** Because the one cup cell is in this first row of the three but then the next two rows only have two.
>
> **[5:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=313)** And fundamentally, that's what's causing our regularity error.
>
> **[5:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=317)** So what we want to do is we want to open this third row and we want to go to that last cell for one cup, okay?
>
> **[5:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=327)** And again, like currently, it does not have a span value applied, right?
>
> **[5:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=333)** So look at it this way.
>
> **[5:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=335)** You say, this row has this extra cell but the next two do not.
>
> **[5:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=342)** And so, this cell needs to occupy the space of one, two, three rows.
>
> **[5:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=350)** Does that make sense?
>
> **[5:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=351)** So we have one cell occupying the space of three, okay?
>
> **[5:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=356)** Now what we're going to do is similar to what we did before, we're going to click on edit attribute objects.
>
> **[6:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=363)** We're going to come in here, and again, depending on the file you're working on, this cell may not have this attribute object in here, so you'll have to create that.
>
> **[6:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=374)** But what I'm going to do is I'm going to click on this object, I'm going to choose new item, okay?
>
> **[6:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=379)** And the key, right?
>
> **[6:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=381)** So the key property is going to be called RowSpan, capital R, capital S.
>
> **[6:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=387)** The value is going to be 3 because we're spanning three rows.
>
> **[6:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=392)** And for this property, we need to change the value type to be an integer because our value is a number, the value type needs to be set to an integer, all right?
>
> **[6:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=404)** So when I click OK, we now have the row span of three applied.
>
> **[6:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=408)** We can click OK and close this.
>
> **[6:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=411)** I'm going to do a save as on this file.
>
> **[6:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=415)** And I'll call this 02_05_finish, that way you can look at this if you desire.
>
> **[7:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=421)** And what I'm going to do is I'm going to grab that file.
>
> **[7:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=426)** Here we go, 02_ 05_finish.
>
> **[7:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=429)** Run it through the pack checker.
>
> **[7:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=430)** And now you'll see that everything complies.
>
> **[7:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=435)** If I really want to fix this, I did forget to give this a title.
>
> **[7:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=438)** So maybe I'll just call this Substitutions, and I'll go ahead and save that.
>
> **[7:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=448)** And then if I come back here to my pack checker and refresh this, now everything is going to be completely passing.
>
> **[7:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=454)** So that was the manual method, right?
>
> **[7:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=457)** Because the table editor failed.
>
> **[7:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=459)** Maybe I'll just show you, if I go to the accessibility tool, go to reading order, and I now open the table editor, it looks better than it did, right?
>
> **[7:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=469)** I will say it looks better than it did but it's still kind of useless, right?
>
> **[7:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=474)** Because I don't really know what I'm clicking on up here.
>
> **[7:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=478)** You might be able to get away with it.
>
> **[8:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=480)** It just always makes me nervous 'cause I I don't really know what it's trying to show me, so just keep that in mind.
>
> **[8:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-scope-and-span-manually?u=76281980&t=486)** So knowing how to define scope and span manually will allow you to remediate those tricky tables that would be difficult to fix otherwise.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (6), let (5), delete (2), case, (1), finally, (1)
> **UI Navigation:** click on (9), go to (6), open the (1)
> **CLI Commands:** make (4), find (1)
> **Cross-References:** go back to (1), previous video (1)
> **Definitions:** is a  (2)
> **Env Vars:** pdf (1)
> **Analogies:** similar to (1)
> **Best Practices:** the key is (1)

#### Dealing with blank cells
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=0)** - [Instructor] One of the questions I get asked all the time is, are blank cells okay in a table?
>
> **[0:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=5)** And my response is, well, blank cells are okay for a sighted user.
>
> **[0:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=10)** They're also okay for users of assistive technology.
>
> **[0:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=14)** If a cell is blank, it effectively means there's no pertinent information to go into that spot.
>
> **[0:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=20)** So basically, yes, blank cells are okay.
>
> **[0:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=22)** Does that mean there's not a better approach?
>
> **[0:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=25)** No. So let's talk about this in a little bit more detail.
>
> **[0:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=28)** So I have the 0206 file open in front of me.
>
> **[0:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=33)** And guys, if you haven't been following along with me up to this point I highly encourage you to open the exercise files for each video as I go through them so you can follow along.
>
> **[0:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=45)** I want you to get as much out of these videos as possible.
>
> **[0:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=49)** Now, I kind of purposefully modified this table to kind of illustrate a concept.
>
> **[0:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=55)** And this is something I see a lot.
>
> **[0:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=57)** You'll notice within the table, blackberries, cherries, fruit juices, huckleberries they have no information under blanching, right?
>
> **[1:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=65)** And when a user is navigating through the table they're going to move to the right, into an empty cell, and there's going to be nothing to be read, right?
>
> **[1:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=73)** So they're going to know that it's empty.
>
> **[1:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=75)** I would much rather see you put in there, not applicable, or not recommended, or something like that to make it very, very clear to not just the user of assistive technology, but also to a sighted user.
>
> **[1:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=90)** I think it's somewhat confusing.
>
> **[1:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=92)** You know, as soon as I see that blank cell my question is, well, should I not blanch blackberries, or should I not blanch huckleberries?
>
> **[1:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=101)** So I think the more information, the better.
>
> **[1:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=105)** The other thing I'm illustrating here is I often see what I call the A1 cell being blank.
>
> **[1:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=114)** And if you look up here at the top of this, that cell is blank.
>
> **[2:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=120)** Now, although a blank cell is okay, a blank header cell is not.
>
> **[2:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=126)** Because that header cell is very important, as we know, as we've learned so far.
>
> **[2:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=131)** The header cell defines the category for the data underneath that header.
>
> **[2:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=138)** And this information over here has a category.
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=143)** There is a category that I can assign to that.
>
> **[2:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=146)** Now, if you switch over to the B file.
>
> **[2:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=149)** I've done exactly what I just talked about, right?
>
> **[2:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=152)** So, to kind of satisfy this requirement I simply put the word fruit in that cell, okay?
>
> **[2:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=162)** And that addresses the problem.
>
> **[2:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=165)** That being said, I've also run into clients who have been adamant that they do not want any information in that cell.
>
> **[2:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=176)** Depending on your situation, you know, you may get some pushback.
>
> **[3:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=180)** You, you know, you may receive some challenges.
>
> **[3:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=182)** What I want to show you is one solution that I do on a regular basis when I do have that client that is insistent that they don't want a category in this cell, okay?
>
> **[3:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=195)** And what I do is I'll go into edit pdf and I'm going to come up here where it says add text.
>
> **[3:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=203)** And I'm going to click in this area here and I'm literally going to type the word fruit, okay?
>
> **[3:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=209)** Now I'm going to zoom in so you can see this a little bit better.
>
> **[3:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=214)** And if you're in the edit mode here what I could do is I can click on this.
>
> **[3:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=219)** I can then right click and I could choose a range, send to back.
>
> **[3:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=225)** Okay?
>
> **[3:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=227)** So visually, I'm still satisfying my client's request that the A1 cell should be blank and should not have any content.
>
> **[3:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=239)** However, what I'm going to do is I'm going to go to my accessibility tool and go into the reading order and let me zoom in again to make this a little bit easier to see here.
>
> **[4:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=249)** And if I marquee this area that text that I created is there.
>
> **[4:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=256)** And I'm going to tag that as a cell.
>
> **[4:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=259)** Now, what that does for me structurally is that if I go into my tags pane what I need to do now is find out where it went.
>
> **[4:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=270)** Here it is, it ended up all the way to the top here.
>
> **[4:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=273)** So this is very common.
>
> **[4:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=274)** Sometimes you have to kind of figure out where that tag went.
>
> **[4:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=277)** But I'm going to open up the row that this top row here and I'm just going to slide that cell into position there.
>
> **[4:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=287)** And what I'm going to want to do is change that to a a table header cell and I'll right click and go to properties, edit the attribute objects.
>
> **[4:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=298)** I'm going to say new, change this to a table.
>
> **[5:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=304)** I want to make sure that I add the scope to this.
>
> **[5:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=307)** I'm going to say scope column, oops column.
>
> **[5:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=312)** And I think the other cells already have that.
>
> **[5:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=317)** I'm just going to double check.
>
> **[5:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=318)** There we go.
>
> **[5:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=319)** Yeah.
>
> **[5:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=320)** So what I've done effectively is I've created a category for somebody using assistive technology so that when they read that cell, it's going to say fruit.
>
> **[5:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=334)** And then they know that the information below there is in the category of fruit.
>
> **[5:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=340)** So yes, blank cells are okay, blank header cells, not so much.
>
> **[5:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/dealing-with-blank-cells?u=76281980&t=345)** I hope you now have a better understanding of how to work with blank cells in a table now and you'll be able to put it into practice in your own tables, in your own documents.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (2), this, (1), switch (1), new, (1)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** open the (1), click on (1), go to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### What makes a bad table?
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=0)** - [Instructor] In order for us to create good tables, both visually and accessibly, we need to understand what exactly makes a bad table.
>
> **[0:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=8)** Common practices that some of us have been using for years, or even decades, may find not to be the ideal approach for accurately conveying information.
>
> **[0:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=19)** Let's take a closer look at what makes a bad table.
>
> **[0:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=23)** So I'm beginning this video with one of my documents already open.
>
> **[0:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=28)** This is the 02_07 file.
>
> **[0:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=32)** And what I wanted to show you here, this is similar to one that we looked at previously where we have a couple of blank cells, okay?
>
> **[0:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=41)** Now again, blank cells are allowed.
>
> **[0:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=45)** However, we definitely could do better because having some information in there that is descriptive and gets the point across can be much more helpful than reading a completely blank cell, okay?
>
> **[1:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=61)** Now, one approach that people take, I'm going to open up the B file now, so what they did in this table, which is one approach, is that you'll notice that they put an asterisk in these cells, okay?
>
> **[1:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=78)** Now, one of the things I always try to convey to people, as a sighted user, we benefit from the helicopter view.
>
> **[1:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=88)** And what I mean by that is that we can see many elements at a glance on the page, right?
>
> **[1:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=97)** And as I'm looking at this table, when I see that asterisk, I'm immediately thinking, well, what does that mean?
>
> **[1:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=104)** And as a sighted user, I can look to the bottom of this table and I see, oh, an asterisk means not recommended.
>
> **[1:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=113)** Now, the problem for somebody using assistive technology is that they're not going to know what it means until they get to the bottom of the table.
>
> **[2:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=124)** Now, one approach to addressing that is you could take that tagged content and structurally have it read before the table.
>
> **[2:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=136)** And that way at least the user knows, oh, this character means not recommended.
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=143)** And then as they're reading the information in the table, they know what that means.
>
> **[2:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=148)** Now, what I'd like to do is read this table using a screen reader.
>
> **[2:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=153)** - [Screen Reader] Table with nine rows and four columns.
>
> **[2:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=154)** Row one, column one, page 65, fruit.
>
> **[2:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=157)** - [Instructor] Okay, I'm going to move down in the table.
>
> **[2:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=159)** - [Screen Reader] Row two, apricots, peaches.
>
> **[2:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=161)** Row three, blackberries.
>
> **[2:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=162)** - [Instructor] Okay, so now I'm on the blackberries row, and I'm going to move to the right.
>
> **[2:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=167)** - [Screen Reader] Blanching, column two, star.
>
> **[2:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=168)** - [Instructor] I'm going to go down.
>
> **[2:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=170)** - [Screen Reader] Row four, star.
>
> **[2:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=171)** Row five, star.
>
> **[2:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=173)** Row six, star.
>
> **[2:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=174)** - [Instructor] Okay, so you can hear that the only thing that the user is hearing is star.
>
> **[3:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=184)** Let's keep going.
>
> **[3:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=185)** - [Screen Reader] Row seven, 12.
>
> **[3:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=186)** Row eight, star.
>
> **[3:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=187)** Row nine, fruit.
>
> **[3:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=188)** Column one through three, star, not recommended.
>
> **[3:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=190)** - [Instructor] Okay, let me do it again.
>
> **[3:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=192)** - [Screen Reader] Row nine, fruit.
>
> **[3:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=193)** Column one through three, star, not recommended.
>
> **[3:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=194)** - [Instructor] So it does read star not recommended.
>
> **[3:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=198)** But again, the experience is not an ideal one.
>
> **[3:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=202)** - [Screen Reader] Exit. OK button.
>
> **[3:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=204)** - [Instructor] There's another type of table you may have seen called a measles chart where they use a colored circle within the table to indicate meaning.
>
> **[3:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=213)** That's another huge challenge because they may have created that circle using a font, but likely the character that's used for that font could be the letter Q.
>
> **[3:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=227)** And so when somebody's reading the table, it's going to say Q.
>
> **[3:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=230)** And you're like, well, what does that mean?
>
> **[3:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=232)** So at a very, very least, we have to take extra steps to make sure that that is read appropriately.
>
> **[4:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=240)** Now, in a previous video I showed you when we did the crate tag from selection video, if we wanted to, we could go into the tag structure and add actual text to that star and we could add actual text that says not recommended.
>
> **[4:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=256)** Now, that would be a much better experience.
>
> **[4:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=260)** Another thing I see a lot is they'll use like a check mark in the table indicating yes or no.
>
> **[4:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=266)** Again, that font for a check mark could be the letter O.
>
> **[4:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=272)** I mean, it could be some random character if it reads it at all.
>
> **[4:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=276)** So what I want you to take away from this is that when you use those elements, at the very, very least, you have extra work that you're going to have to do to make the experience a good one.
>
> **[4:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=292)** Now, I have one more document I wanted to show you because an easy fix for this problem is to simply put not recommended in the cell.
>
> **[5:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=303)** I mean, you can't get any clearer than this.
>
> **[5:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=308)** Now again, some clients, and again, you have them, I have them, they may vehemently argue against this.
>
> **[5:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=317)** They may not like the way it looks.
>
> **[5:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=319)** They may like the tiny asterisk to indicate that it's not recommended, but this approach that we're looking at here is a very good solution because it leaves nothing to question.
>
> **[5:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=334)** The value of that cell is going to say not recommended and nobody's going to question what it means.
>
> **[5:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=340)** Nobody's going to have to do any extra work.
>
> **[5:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=342)** It's going to be a very good experience for the user.
>
> **[5:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=346)** I hope you found this video helpful.
>
> **[5:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=348)** I highly encourage you guys, take some time and evaluate your own tables and try to take a look at instances where you're using a character or a symbol to indicate meaning and see if you can come up with a better solution.
>
> **[6:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=367)** And again, at the end of the day, we can always make those characters work, but we're going to have to put time and effort into making it happen.
>
> **[6:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=377)** A lot of times, it's just much easier to use instead of a green check mark, use the word approved.
>
> **[6:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=386)** If you use a red check mark, simply use the text not approved, right?
>
> **[6:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/what-makes-a-bad-table?u=76281980&t=392)** I know you're removing a little bit of the design element, but again, if the design element is critical, then you may have to resort to using actual text so that when a user's reading those values, they're going to get the exact meaning that you're going for.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (8), - [screen (7)
> **Best Practices:** recommended (9)
> **Code Keywords:** let (3), this. (2), for. (1)
> **CLI Commands:** make (3), find (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### Creative table solutions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=0)** - [Instructor] Sometimes solutions to challenging problems can be staring you in the face but you fail to see them.
>
> **[0:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=6)** One of the things that I love about PDF accessibility is the fact that you can modify the underlying tag structure without visually affecting the document.
>
> **[0:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=15)** In this video, I'd like to show you a creative solution to a problem that may help you with your own documents and provide a really great experience to users of assistive technology.
>
> **[0:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=24)** So I'm starting here with this advertising statistics bar chart open on my screen.
>
> **[0:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=29)** And you use a bar chart like this, I mean, it really doesn't matter what program you're using as the source document.
>
> **[0:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=35)** It could be Word, it could be InDesign, PowerPoint, this bar chart, typically it's tagged as a figure, right?
>
> **[0:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=42)** And if I open my tags pane and I look at my tags, you can see, sure enough, this bar chart is currently tagged as a figure.
>
> **[0:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=51)** When a bar chart's tagged as a figure, your only recourse is to describe it using alternate text.
>
> **[0:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=57)** And if I look at the property of this figure, you can see that I have in fact described this bar chart but it's kind of ambiguous.
>
> **[1:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=67)** There's just a ton of text here that's going to be read aloud and it's going to be really hard for a user to process that and really retain it.
>
> **[1:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=76)** And so it's really not a great experience, although it will be compliant, right?
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=80)** I mean, the only requirement for a figure is that we have alternate text but whenever I have this situation I always try to err on the side of the user and I want the user to have a good experience.
>
> **[1:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=93)** So what can we do with a bar chart like this?
>
> **[1:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=96)** Well, it'll take you a little bit of time to learn this, but when I see a bar chart like this, I see a table.
>
> **[1:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=105)** All of the information in this bar chart can be structured as a table.
>
> **[1:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=109)** And I've provided you with a file called 02_08_table.
>
> **[1:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=113)** And if you open that up, you'll see what I mean.
>
> **[1:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=117)** Every element of that bar chart can be structured as a table.
>
> **[2:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=121)** Now currently it's not, but I'm going to show you a trick that we can use to get this bar chart to be read as a table but still leave it looking like a bar chart, okay?
>
> **[2:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=134)** So the first thing we're going to do is we're going to come over here to our content pane.
>
> **[2:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=138)** And if we open up page one, and we open up this container figure, as you scroll through, you're going to see all of these elements that are just text.
>
> **[2:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=151)** And what I'm going to do is I'm going to go through and I'm going to CTRL click on all of them 'cause I want to select all of those pieces of text, so that I can move them.
>
> **[2:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=160)** And I'm just going to grab all of these.
>
> **[2:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=163)** And when you're finished, you'll see that everything, all the pieces of text of this graph are highlighted.
>
> **[2:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=169)** Okay? Perfect.
>
> **[2:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=171)** Now what I'm going to do is I'm going to grab all of this text and I'm going to drag them up and out of their container.
>
> **[2:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=179)** I'm going to drop them on there.
>
> **[3:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=181)** Now, one of the side effects of this, and we've discovered this earlier, because of the direction I drag this, it basically changed the stacking order of the objects, right?
>
> **[3:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=192)** The text is behind the shapes.
>
> **[3:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=194)** So if you grab the text again and drag it down below the next container, that'll bring the text back to the front and we'll be good to go.
>
> **[3:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=202)** All right, so that looks pretty good.
>
> **[3:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=204)** Now I'm going to close the content pane.
>
> **[3:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=206)** Let me do a save as on this.
>
> **[3:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=209)** And I'll call this 02_08_finish.
>
> **[3:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=213)** And what I'm going to do is I'm going to open my tags pane and you see that we currently have this figure, but now all that's inside of that figure are the shapes that make up this bar chart and maybe a little bit of text at the end of those elements, so I'm going to right click on that and choose Change Tag to Artifact.
>
> **[3:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=232)** I'll leave the artifact as a page artifact and click OK.
>
> **[3:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=236)** And now our figure tag is empty so I can delete it.
>
> **[3:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=239)** Now what I'm going to do is I'm going to come over here to my accessibility tool and I'm going to choose reading order.
>
> **[4:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=244)** And what we're going to do is we're going to grab every piece of text that we have in here and I'm going to tag the text as a cell.
>
> **[4:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=254)** So I'm just going to kind of go across, not really worrying about what order you do this in, and we're just going to tag each piece of this information as a cell.
>
> **[4:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=267)** All right, so with all of that content tagged, one of the things you'll notice if you go back to my reference table, I have a category over here called "Social Media Type."
>
> **[4:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=279)** And that text doesn't exist in this bar chart.
>
> **[4:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=283)** So if you go to the Edit PDF tool, I'm going to go to Add Text, I'm going to click down here, and I'm literally going to type the text, "Social Media," but I'm going to select that then and change the color of the text to white.
>
> **[4:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=297)** And then if I go back to my reading order, I can marquee that and I can tag it as a cell.
>
> **[5:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=304)** And that's going to give me the information that I need to properly have that tagged.
>
> **[5:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=310)** Now I'm going to double check something, I'm going to open my content pane, just want to make sure that all of my elements got tagged appropriately.
>
> **[5:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=320)** And for whatever reason, and this is some of the things you have to watch out for, for whatever reason YouTube, even though it is in a TD, it's also in a figure container, which I don't want.
>
> **[5:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=332)** So I'm just going to move that up so that it's just in the TD and then I can delete that empty figure tag.
>
> **[5:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=338)** What we're going to do is in the tags pane, you can see that I have all of these empty TD cells.
>
> **[5:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=344)** And if you look at the table, I have three columns and I have eight rows, okay?
>
> **[5:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=352)** So in my tag structure, I'm going to right click and say new tag, and I'm going to insert a total of eight rows.
>
> **[6:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=362)** Now I'm going to grab this content and I'm going to start organizing it into rows, okay?
>
> **[6:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=369)** And what I'm going to do, the projected and actual, that's going to go into the top row.
>
> **[6:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=376)** And I also want to find the social media, which is probably down here, there it is, I'm going to move that up there into that first row, right?
>
> **[6:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=386)** So now that row contains social media, projected, actual, and then the next row is going to be YouTube.
>
> **[6:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=392)** So what I'm going to do is I'm going to find YouTube projected value, which is right there.
>
> **[6:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=400)** I'm going to move that into that row.
>
> **[6:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=402)** And then I'm going to find YouTube actual, right there.
>
> **[6:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=410)** And I'm going to move that into that row, right?
>
> **[6:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=413)** So now we have all the YouTubes.
>
> **[6:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=415)** So what I'm going to do now, and I'm going to do this super quickly, is I'm going to organize all these cells into their rows.
>
> **[7:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=425)** Okay, and then the last step is to create another new tag for the table.
>
> **[7:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=431)** And I'll just move these rows into the table and then we'll move that table up into that document tag.
>
> **[7:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=438)** So now, you can see that our table is totally tagged appropriately.
>
> **[7:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=445)** What I'll also do, these three cells, which is the social media projected actual, I'm going to change them to a table header cell.
>
> **[7:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=455)** And then the first cell, right, of each row is also going to become a table header.
>
> **[7:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=464)** So I'm going to select all of those.
>
> **[7:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=466)** These are the social media platforms, right?
>
> **[7:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=469)** And then I'll right click and choose properties, and make that a table header cell as well.
>
> **[7:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=475)** So what we've done, we haven't changed anything about the visual look of this document, but structurally, all of that textual information has been organized into a table and that is going to provide a much better reading experience for the user.
>
> **[8:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=493)** To demonstrate this, I'm going to close this finished document and then I'm going to reopen it.
>
> **[8:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=500)** What I want to do is run this through the pack checker because there's a really nice feature of the pack checker, right?
>
> **[8:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=509)** So I'm going to run this through and you can see I do have a couple of errors in here, one of which is, I have not defined the scope for the headers, but we've covered that in a previous video and we know how to do that, but I don't need to do this for demonstration purposes.
>
> **[8:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=527)** But down here, if I click on screen reader preview, you're going to see that structurally, all of that information is organized as a table, right?
>
> **[8:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=538)** And to demonstrate this, if I open NVDA, right, I'm going to move down.
>
> **[9:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=545)** - [NVDA Voice] Rows and three columns.
>
> **[9:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=546)** Row one, column one, page one, social media.
>
> **[9:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=548)** Row two, YouTube.
>
> **[9:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=549)** Row three, Twitter.
>
> **[9:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=550)** - [Instructor] And if I move across.
>
> **[9:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=551)** - [NVDA Voice] Row four, Instagram.
>
> **[9:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=552)** Row five, LinkedIn.
>
> **[9:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=553)** Row six, Facebook.
>
> **[9:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=555)** Projected column, 245%.
>
> **[9:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=557)** - [Instructor] And even though I didn't define scope.
>
> **[9:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=559)** - [NVDA Voice] Actual column, 355%.
>
> **[9:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=560)** - [Instructor] And this is an interesting thing for you guys to understand.
>
> **[9:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=564)** Even though I did not define scope on that header row, it's actually assumed.
>
> **[9:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=568)** Because I only have one header row, the scope is assumed for it and you might notice it as I go across.
>
> **[9:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=576)** - [NVDA Voice] Edge of table, 55%.
>
> **[9:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=577)** Projected column, 245%.
>
> **[9:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=579)** - [Instructor] It says, "projected column, 245%."
>
> **[9:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=583)** It knows that it's a header cell.
>
> **[9:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=585)** I would still go in and implicitly define it, but you could see that the experience is a much better experience than reading alt text on a figure.
>
> **[9:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creative-table-solutions?u=76281980&t=595)** I hope you found this video intriguing and that it gives you ideas to solve problems in your own documents moving forward.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (7), delete (2), let (1), this. (1), type. (1)
> **Speakers:** - [instructor] (5), - [nvda (4)
> **Env Vars:** nvda (5), pdf (2), ctrl (1)
> **CLI Commands:** make (3), find (3)
> **UI Navigation:** click on (3), go to (2)
> **Cross-References:** go back to (2), previous video (1)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** watch out (1)

#### Creating heading and data associations
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=0)** - [Lecturer] When working with complex tables it's necessary to create heading and data cell associations.
>
> **[0:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=7)** This is because when you create a header cell in a table anywhere other than the top or left side, assistive technology has no idea how those header rows are supposed to behave.
>
> **[0:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=17)** In this video I'm going to show you the process.
>
> **[0:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=19)** And to be fair, it's a bit arduous.
>
> **[0:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=22)** But you'll know how it's done.
>
> **[0:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=23)** So I'm starting this video with the 02_09 document open on my screen.
>
> **[0:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=30)** And this is a classic example of a table where somebody created these, what I would call subheader cells, to kind of categorize the cells into tubers and vegetables.
>
> **[0:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=46)** Right?
>
> **[0:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=47)** And again, you know you're going to hear me say it again.
>
> **[0:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=49)** I'm always an advocate of simplifying your tables because doing this does take some work.
>
> **[0:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=55)** But.
>
> **[0:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=56)** So what I'm going to do, I'm going to open the tags pane, and I'm going to open up this table and we could see the top row.
>
> **[1:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=62)** They need to be header cells, right?
>
> **[1:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=64)** So I'm going to go ahead and change them to table header cells.
>
> **[1:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=70)** And then in addition, if we go down to the next row.
>
> **[1:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=74)** The first cell in there also needs to be a table header cell.
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=80)** Okay?
>
> **[1:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=81)** And while we're here I'm going to delete that empty cell that's in there.
>
> **[1:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=85)** And then let's go down to vegetables.
>
> **[1:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=89)** We'll delete that empty cell, and we'll change this one.
>
> **[1:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=93)** I'll just type this one in manually.
>
> **[1:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=95)** There we go.
>
> **[1:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=96)** Now I'm going to go ahead and do a save as on this.
>
> **[1:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=102)** And I'm going to call this 02_09_finish, right?
>
> **[1:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=106)** And then what I'm going to do is, I'm going to go ahead and open up the table editor.
>
> **[1:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=112)** So if we go to our accessibility tool, go to reading order.
>
> **[1:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=116)** I'm going to click on any one of these labels and click the table editor button.
>
> **[2:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=121)** The tubers cell, I'm going to right click and choose table cell properties.
>
> **[2:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=127)** And we need to apply a column span of 2 to that cell.
>
> **[2:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=132)** Let's go ahead and click OK.
>
> **[2:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=134)** And then same thing for vegetables.
>
> **[2:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=138)** We need that to be a column span of 2.
>
> **[2:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=140)** And that's going to properly define the span for that cell.
>
> **[2:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=144)** Okay?
>
> **[2:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=146)** To define the header cell association, the table editor automates a little bit of it (laughs).
>
> **[2:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=156)** And it is helpful, right?
>
> **[2:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=158)** But the way we do that, if you right click there's an option down here that says Auto Generate Header Cell IDs.
>
> **[2:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=167)** Okay?
>
> **[2:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=168)** And I'm going to go ahead and choose that option.
>
> **[2:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=171)** You're not going to visually see anything right now.
>
> **[2:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=175)** However if you click on any of the header cells, and you right click and choose table cell properties, you'll notice that it automatically created a header cell ID for the header.
>
> **[3:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=189)** Okay?
>
> **[3:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=191)** And you'll find that in any of the ones that we click on here.
>
> **[3:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=194)** If I click on vegetables you're going to see the same thing.
>
> **[3:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=197)** Right?
>
> **[3:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=198)** What we now need to do, so for example I'm going to click on tubers, I'm going to right click and choose table cell properties.
>
> **[3:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=206)** And I need to tell it that vegetable and cooking time are headers for the tuber cell.
>
> **[3:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=214)** Okay?
>
> **[3:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=215)** So I'm going to click the plus sign, and then it gives me a dropdown.
>
> **[3:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=219)** So I'm going to choose the R1C1_Vegetabl.
>
> **[3:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=225)** Click OK.
>
> **[3:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=226)** So now you can see that's been added.
>
> **[3:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=227)** And then I'm going to add again, and I'm going to choose the cooking cell as well.
>
> **[3:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=233)** So what I did, is vegetable and cooking time are now header cells associated to tubers.
>
> **[4:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=242)** Okay?
>
> **[4:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=243)** Let's click on potatoes.
>
> **[4:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=246)** I'm going to right click table cell properties.
>
> **[4:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=248)** Now what I need to do here, is I need to add the R1C1_Vegetabl.
>
> **[4:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=256)** I need to add the R1C2_Cooking, and I also need to add the R2C1_Tubers.
>
> **[4:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=266)** Okay?
>
> **[4:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=267)** Now all of those cells are associated with this one cell.
>
> **[4:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=273)** So now vegetable.
>
> **[4:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=276)** Actually I made a mistake on this one.
>
> **[4:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=278)** Cooking is not a header of potatoes, so only vegetable and tubers.
>
> **[4:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=283)** Okay?
>
> **[4:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=284)** And then I would click on boil, and what I would do here is hit the plus sign.
>
> **[4:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=291)** We're going to add the R1C2_Cooking, and then we're also going to add the tubers.
>
> **[4:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=299)** So that now tubers and cooking time are headers for that cell.
>
> **[5:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=304)** Okay?
>
> **[5:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=305)** Now guys I am not going to continue on from here, because as you can see it's just going to take way too long for me to complete this.
>
> **[5:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=315)** What I will do, is I will update this finish file for you, so that you can open it up and check it out for yourself.
>
> **[5:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=324)** And you can see how it looks when all of the header cell IDs have been associated.
>
> **[5:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=330)** As I said, this process is arduous.
>
> **[5:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=332)** I don't do this in Acrobat anymore because of how long it takes.
>
> **[5:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=336)** Instead I use a product called axesPDF, which lets me define header cell associations in seconds.
>
> **[5:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=344)** Still I think it's valuable to understand how it's done.
>
> **[5:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/creating-heading-and-data-associations?u=76281980&t=347)** And if nothing else will encourage you to keep your tables simple, in documents that you create in the future.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (7), go to (2), open the (1), dropdown (1)
> **Code Keywords:** let (3), delete (2), this. (2), continue (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** axespdf (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [lecturer] (1)

#### An alternative solution to header associations
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=0)** - [Instructor] As an alternative to creating header and data cell associations, I'd like to show you an alternative method that achieves the same result with a little less effort.
>
> **[0:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=10)** Let me show you how.
>
> **[0:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=11)** So beginning of this video with the 02_10 document open, and in this video what we're going to do is I'm going to come over here and open up my tags pane.
>
> **[0:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=24)** Now, if you look at this table, right, I mean the way that it's been constructed is that these header cells are defined as a header moving down.
>
> **[0:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=37)** However, we could achieve the same result if we had this cell as a row header on the left edge of the table.
>
> **[0:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=50)** It's an intriguing approach, and I've run into this several times where clients have asked me alternative ways to remediate the table, and I've suggested setting these up as row headers, and they've kind of rejected me.
>
> **[1:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=64)** They don't really like the look of that.
>
> **[1:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=66)** But with this method, we're going to do it structurally, but visually it's still going to look the same.
>
> **[1:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=73)** So it's really kind of a creative approach.
>
> **[1:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=75)** So what I'm going to do is I'm going to go down, and I'm going to find the tuber cell.
>
> **[1:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=81)** And then what I'm going to do is I'm going to open that row, and then I'm also going to highlight or open the row below it, right?
>
> **[1:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=89)** Now, again, in this example we have this empty cell, which I'm just going to delete.
>
> **[1:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=94)** But what I'm going to do is I'm going to move the tuber cell into the row below.
>
> **[1:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=100)** And now that that row is empty, we can delete it.
>
> **[1:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=103)** Now you'll notice when you highlight this row, it's highlighting tubers, potatoes, and boil 25 to 40 minutes, okay?
>
> **[1:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=114)** Now, I'm going to go ahead and go down to the vegetables row.
>
> **[1:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=118)** I'm going to open that up, and I'm going to open the row below.
>
> **[2:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=122)** And again, in the vegetables row we have that empty cell, which I'm going to delete, but then I'm going to move vegetables into the row below.
>
> **[2:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=132)** There we go, and then we can delete this empty row.
>
> **[2:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=134)** So now we have these two rows, each of which contain three cells, okay?
>
> **[2:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=142)** Now, what we could do, that first cell in each row, basically tubers and vegetables, I'm going to change that to be a table header cell, okay?
>
> **[2:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=154)** This is going to be one of those situations where more than likely the table editor is going to fail, okay?
>
> **[2:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=161)** So what I'm going to do is I'm going to highlight the tuber's cell.
>
> **[2:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=167)** I'm going to right click on it and choose properties.
>
> **[2:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=170)** And I'm going to click on edit attribute objects.
>
> **[2:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=173)** And I'm going to open this up.
>
> **[2:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=175)** And what I'm going to do is in this entry here, I'm going to click new item.
>
> **[3:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=181)** And the first thing I'm going to do is I'm going to tell the scope of this cell to be a row header, okay?
>
> **[3:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=187)** So scope row, hit okay.
>
> **[3:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=190)** And then I'm going to create another entry, and this is going to be called Row Span.
>
> **[3:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=197)** Again, capital R, capital S.
>
> **[3:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=199)** And the value is going to be one, two, three, four.
>
> **[3:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=204)** And don't forget to change the value type to be an integer.
>
> **[3:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=207)** Okay?
>
> **[3:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=208)** So I'm going to go ahead and click okay.
>
> **[3:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=210)** Now, I'm going to go down to this cell for vegetables.
>
> **[3:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=215)** I'm going to click edit attribute objects.
>
> **[3:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=220)** And once again, I'm going to create a new item, and I'm going to set the scope of this to be a row header.
>
> **[3:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=226)** And then I'm going to create another entry, and this one's going to be Row Span.
>
> **[3:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=233)** And the value for this is going to be eight.
>
> **[3:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=237)** And don't forget to change it to an integer.
>
> **[3:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=239)** So I'm going to go ahead and click okay.
>
> **[4:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=242)** And what that has done is it has set tubers and vegetables to be a row header going across.
>
> **[4:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=251)** If you open the first row, we still have not defined these cells as header rows.
>
> **[4:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=257)** So what I'm going to do is I'm going to change both of them to be table header cells.
>
> **[4:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=263)** We do need to set the scope for them, but I think we could do that in the table editor.
>
> **[4:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=268)** I think for those it'll actually work.
>
> **[4:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=272)** I'm going to do a save as.
>
> **[4:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=274)** Call this 02_10 Finish.
>
> **[4:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=278)** And now let's see if we can fix this with the table editor.
>
> **[4:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=281)** So I'm going to go to reading order, go to table editor.
>
> **[4:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=285)** Yeah, see this looks pretty good.
>
> **[4:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=286)** And you could see the results of what we did here.
>
> **[4:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=289)** Even though it's really skinny, they are now row headers for the table.
>
> **[4:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=294)** Now what I'm going to do, I'm going to select these two, right click and choose table cell properties.
>
> **[5:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=300)** These are already header cells, and I'm going to set the scope to be a column.
>
> **[5:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=303)** Now, the one thing you're going to run into, currently we're going to run into a regularity error.
>
> **[5:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=308)** And the reason is because there's literally an empty cell up here to the left of vegetable, right?
>
> **[5:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=317)** So fundamentally, every other row has three cells, but the top row doesn't.
>
> **[5:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=322)** So what I'm going to do is I'm going to change the vegetable cell.
>
> **[5:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=326)** I'm going to right click and choose table cell properties, and I'm going to change that to be a column span of two.
>
> **[5:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=331)** And that way that cell is going to occupy the space of two, and I'm going to avoid the regularity error, okay?
>
> **[5:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=341)** So if I save this, what I want to show you is if I go to my pack checker, and I grab this 02_10 Finish document, I'm run it through the pack checker.
>
> **[5:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=353)** Looks like I'm missing a little metadata, no big deal.
>
> **[5:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=356)** But if I go to screen reader preview, this is where the magic really shows, right?
>
> **[6:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=362)** If you take a look at how this table is structured, we have tubers that, as you can see, is a header cell going across, and we also have vegetables that's a header cell going across.
>
> **[6:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=377)** And then up here, vegetable and cooking time.
>
> **[6:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=380)** You can see what I did here is I made that a column span.
>
> **[6:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=383)** So now vegetable kind of goes over top of both of these columns, and then cooking time is over here.
>
> **[6:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=391)** And again, to kind of see this in real life, I'm just going to open NVDA.
>
> **[6:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=397)** (computer chimes) So now we're on vegetable.
>
> **[6:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=398)** I'm going to go down.
>
> **[6:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=400)** - [Audio] Row two through five tubers.
>
> **[6:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=401)** - [Instructor] Right, so we have tubers.
>
> **[6:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=403)** If I move to the right-
>
> **[6:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=405)** - [Audio] Tubers row two, cooking time, column two potatoes.
>
> **[6:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=407)** - [Instructor] Now we're at potatoes.
>
> **[6:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=409)** Move to the right-
>
> **[6:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=410)** - [Audio] Boil 25 to 40 minutes.
>
> **[6:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=412)** - [Instructor] Boil 25 to 40 minutes.
>
> **[6:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=413)** So the table is structured correctly.
>
> **[6:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=417)** Again, that was a lot less effort than creating the header cell IDs.
>
> **[7:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=421)** My preference honestly is using access PDF because I can create those header cell IDs in seconds.
>
> **[7:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=428)** But if you don't have access to third party products such as that, the method that I showed you here allows you to achieve the same result with a lot less effort.
>
> **[7:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=438)** So as you can see, this method makes the table just as accessible without the need for the header cell associations.
>
> **[7:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=446)** Again, huge time saver.
>
> **[7:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/an-alternative-solution-to-header-associations?u=76281980&t=448)** And I hope that you find ways to apply it to tables in your own documents.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (4), open the (3), click on (2)
> **Code Keywords:** delete (4), let (2), this, (1)
> **Speakers:** - [instructor] (4), - [audio] (3)
> **CLI Commands:** find (2)
> **Env Vars:** nvda (1), pdf (1)
> **Definitions:** defined as (1), is a  (1)
> **Best Practices:** don't forget (2)
> **Analogies:** such as (1)

#### Linearizing tables
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=0)** - [Instructor] There are times when elements that are built as a table shouldn't be a table at all.
>
> **[0:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=6)** Tables typically are used to display data in a logical way, but sometimes designers and content creators will use tables for formatting reasons only.
>
> **[0:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=16)** In cases like these, we can change the structure of those elements so that the content is not contained in a table and is read in a more appropriate way.
>
> **[0:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=26)** This process is called linearizing a table and I'd like to show you that here with this document open.
>
> **[0:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=33)** So when we look at this document, at a glance, you wouldn't think that any of these elements would be a table at all.
>
> **[0:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=40)** We have some paragraphs, we have a bunch of paragraphs over here but diving a little bit deeper into the tag structure reveals that we do in fact have a table and if we click on it, you could see that the ingredients for the angel cake has been organized into a table.
>
> **[1:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=61)** Now again, a lot of times designers and content creators do this because it helps with formatting.
>
> **[1:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=68)** Structurally, it makes no sense at all and as a matter of fact, it's somewhat of a barrier because you're forcing the user to enter into a table and navigate all of the rows, where realistically, they're really just a bunch of paragraphs.
>
> **[1:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=85)** So to avoid this problem or to alleviate this problem, we could do something called linearizing the table and linearizing the table essentially means you take the content of the table and pull it out of the table structure and just have it read as text.
>
> **[1:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=105)** What we could do here is if we open up our table, we could see that this table is comprised of about eight rows, but if we open up each row and each cell, you're going to see that there's a paragraph within each cell and that's the text element within the cell.
>
> **[2:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=124)** Now, occasionally you may run into a table where within the cell all you have is marked content, so all you have are these little container elements and that's okay too.
>
> **[2:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=137)** In that situation, what I would do is I would highlight all of the TDs and change them to P tags, right?
>
> **[2:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=146)** But in our case because each TD contains a paragraph, I'm going to grab those paragraphs.
>
> **[2:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=152)** So what I'm going to do is I'm going to select all those P tags and all I'm going to do is drag all of those selected tags up and out of the table.
>
> **[2:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=164)** So if I drag this up and out, when I let go, now you can see all of those P tags are simply being read in the correct order but they're no longer inside of a table and when you click on this table, you could see that it's empty because nothing on the page is being highlighted.
>
> **[3:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=184)** I can literally just delete that table and now you'll see that if you walk your tags tree, we go from our heading to a paragraph to another heading and then we read all of the ingredients, jump to the next heading, paragraph, heading, paragraph.
>
> **[3:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=199)** So what this does, what this achieves is you've simplified the tag structure, you're now making it easier for users of assistive technology to read the content.
>
> **[3:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=212)** They're not having to dive into a table unnecessarily to read the content.
>
> **[3:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/linearizing-tables?u=76281980&t=218)** So in cases when you have a table element that really shouldn't be a table, linearize it to improve the reading experience for users of assistive technology.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), delete (1)
> **UI Navigation:** click on (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### 3. Working with Forms in Adobe Acrobat

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Adding form fields in Adobe Acrobat
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=0)** - [Instructor] Form fields make a PDF file interactive and allow users to digitally enter information into a form so it can be saved and captured for use later on.
>
> **[0:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=11)** In this video, we'll add some form fields to this document to make it a fillable form.
>
> **[0:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=16)** Now I'm starting here with the 0301 document open.
>
> **[0:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=20)** And one of the things I want to stress here is that before you begin making a form fillable, and I'm talking about this in the context of accessibility right now, it's very helpful to make sure that you're working with a well tagged document before you get started.
>
> **[0:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=42)** Because if you try to work with form fields and then later try to tag it and get it where it needs to be, it can really be a bit challenging.
>
> **[0:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=53)** So rather than complicating things, what you'll find if you open up the tags tree, you will see that the content of this form is well structured, right?
>
> **[1:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=64)** Everything is broken into an appropriate tag and everything is tagged appropriately.
>
> **[1:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=71)** So I'm starting off with a well tagged document and once you have that, we can start adding form fields.
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=80)** Now to do this, we want to go to our Prepare Form tool.
>
> **[1:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=84)** Now, currently I don't have this over here to the right so I'm going to come up here to the upper left of Acrobat and I'm going to click on the Tools tab.
>
> **[1:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=93)** And if we scroll down a little bit under Forms and Signatures, you're going to see the Prepare Form tool.
>
> **[1:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=99)** So I'm going to go ahead and click add.
>
> **[1:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=101)** That's going to add it over here to my tools.
>
> **[1:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=103)** And now I could go back to my document and then I'm going to go ahead and click on the Prepare Form button.
>
> **[1:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=109)** Now, Adobe Acrobat has a feature called Form Field Auto Detection and what it will do is it will try to evaluate your form and automatically add form fields to that form.
>
> **[2:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=126)** Very similar to Auto Tag, your results will often vary, right, depending on the structure of your form.
>
> **[2:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=135)** For example, I'm just going to go ahead and click start.
>
> **[2:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=138)** I'm going to let it do its thing.
>
> **[2:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=140)** And as you can see, this is interesting.
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=143)** It had no idea what to do.
>
> **[2:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=145)** It had no idea where to put the form fields in this document.
>
> **[2:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=150)** And this is one of the reasons why I really don't use this feature.
>
> **[2:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=153)** You'll typically have better success if you've included underlines to indicate where the form fields should go.
>
> **[2:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=161)** If you have boxes where you want check boxes and circles where you want radio buttons.
>
> **[2:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=167)** I didn't do any of that in this document and that's probably why form Field Auto detection failed okay.
>
> **[2:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=175)** So let me, I'm just going to go ahead and revert this to make sure that nothing happened to this form.
>
> **[3:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=180)** There we go.
>
> **[3:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=181)** And let's go ahead and go to the prepare form mode again.
>
> **[3:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=184)** And what I'm going to do is down here where it says Form Field Auto Detection is on, I'm going to click the change link and in my preferences, I am going to uncheck, it's right here, automatically detect form fields.
>
> **[3:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=199)** All right, so I'm going to click okay and then we can click the start button.
>
> **[3:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=204)** Again, it's not really going to do anything.
>
> **[3:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=206)** It's simply going to take me into form mode, all right.
>
> **[3:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=211)** Now in the top portion here, I'm going to zoom in to make this a little bit easier to see.
>
> **[3:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=216)** In the top portion here these are all of the different form field types that we can use.
>
> **[3:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=221)** And we're going to be using this one to start which is the text field.
>
> **[3:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=226)** And if you move your cursor down, I'm not dragging, I'm just moving my cursor down, what I'm going to do is I'm going to go ahead and click to the right of first name so that it adds a form field at that location.
>
> **[3:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=239)** And this little yellow dialogue pops up where I can give the form field an appropriate name.
>
> **[4:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=246)** I highly recommend you do this because there's nothing worse than working with form that's called untitled one through 20, right?
>
> **[4:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=257)** It's a lot easier when you name your fields appropriately, okay Now what I can also do is I can grab the handle and resize it so that I can resize my field to an appropriate size.
>
> **[4:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=271)** And then I'm going to double click on this to bring up the text field properties.
>
> **[4:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=276)** Now you'll notice there's a bunch of tabs up here at the top.
>
> **[4:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=278)** We have Appearance, we have Positions, so on and so forth.
>
> **[4:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=283)** In the Appearance tab you could choose what font you want to use in the form field and what size you want to use.
>
> **[4:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=291)** Position could be helpful if you're trying to accurately position this.
>
> **[4:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=295)** The rest of these are just, you know various options that you can add to your form field.
>
> **[4:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=299)** So I'm going to go ahead and close this.
>
> **[5:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=302)** And I'm a big fan of not doing extra work.
>
> **[5:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=309)** One of the things I might do before I continue is click on the preview button here.
>
> **[5:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=314)** And in the first name field, I'm just going to go ahead and type my name so I can see what this looks like relative to the text.
>
> **[5:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=324)** And you know, I think that looks pretty good.
>
> **[5:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=326)** So I'm going to go ahead and delete that.
>
> **[5:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=328)** And then I'll go ahead and click on the edit button to go back into edit mode.
>
> **[5:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=333)** Now, what we could do to save some time, right, because I've already set this field the way that I want it to be.
>
> **[5:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=340)** I set my appearance, I set the font, and I want all of these form fields to be the same.
>
> **[5:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=346)** So if you hold down your Control key on Windows or your Alt key on Mac, and you drag to the right as you drag, you can add the shift key to constrain the position to the original.
>
> **[6:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=360)** And when you let go it's going to make a copy of that form field, okay?
>
> **[6:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=366)** And you could certainly resize it to the size that you want.
>
> **[6:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=370)** But very important when you have two form fields that have the same name, if you fill in one, the other one is going to get populated with the same information.
>
> **[6:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=381)** So we want to double click on this one and change the name to last name.
>
> **[6:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=386)** So now we could kind of keep using that technique.
>
> **[6:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=389)** I'm going to Control or Alt drag to add another form field.
>
> **[6:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=395)** And so what I may want to do, I'm going to delete this, I may want to double click on this, go to the position.
>
> **[6:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=402)** What I could do is adjust the height.
>
> **[6:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=404)** Maybe I'll go with like 0.25.
>
> **[6:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=407)** Maybe I'll even... I think that'll work.
>
> **[6:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=409)** 0.25 looks pretty good.
>
> **[6:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=411)** I'll do the same thing to this one.
>
> **[6:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=416)** Because when I made that original copy, it was overlapping.
>
> **[7:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=420)** So let's try this again.
>
> **[7:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=421)** So if I make a copy, I think that'll work.
>
> **[7:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=425)** That'll work okay.
>
> **[7:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=426)** So then I can resize this, you know where I want it to be.
>
> **[7:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=432)** And we'll double click on this and we'll call this one address.
>
> **[7:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=437)** Okay, I can leave this open.
>
> **[7:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=439)** I don't have to, you know keep closing and reopening it.
>
> **[7:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=442)** I can make a copy of this while that is open, right?
>
> **[7:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=447)** So I can just adjust this and this one will be city.
>
> **[7:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=456)** And I'll make another copy over here for the zip code.
>
> **[7:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=465)** Now, for certain form fields, what I may want to do here you'll notice up here we have a list of choices or we have a dropdown list.
>
> **[7:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=475)** And so when it comes to state, what I may want to do is create a dropdown that includes the states.
>
> **[8:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=485)** So the way this works is if you go to your options tab you can add the items that you want in this list, right?
>
> **[8:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=495)** So I could type in here, California.
>
> **[8:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=499)** I can type Pennsylvania, New Hampshire.
>
> **[8:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=505)** I'll just do a couple of 'em.
>
> **[8:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=507)** Down here at the bottom we can sort them if we want.
>
> **[8:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=510)** And that if you don't want one of these values to be the default just click in the empty area down here and that way it will no longer be the default, right?
>
> **[8:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=521)** So again, I'm going to make a copy of this for the daytime phone number.
>
> **[8:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=528)** Again, just kind of giving appropriate name as I do this.
>
> **[8:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=533)** And then one last one for our email address.
>
> **[9:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=540)** And you get the idea.
>
> **[9:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=542)** We could highlight all of these and align them to the right if we wanted to to kind of make sure they're all lined up really nicely.
>
> **[9:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=548)** But you get the idea.
>
> **[9:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=549)** Now down here, and this is where I always love to make a point about difference between check boxes and radio buttons.
>
> **[9:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=557)** Because whenever they say choose all that apply that is always going to be a checkbox, right?
>
> **[9:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=563)** So for this one, the default box is a little bit big, so I'm going to make it a little bit smaller and I'm going to call this one landscape design.
>
> **[9:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=576)** And then you can double click on it if you want to.
>
> **[9:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=579)** We can go to position if you want to make sure the height and width is exactly the same.
>
> **[9:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=584)** You can make them both 0.2, right?
>
> **[9:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=588)** And then we can kind of, I'm going to have to zoom in a little bit more, there we go, so I can position this.
>
> **[9:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=596)** That looks pretty good.
>
> **[9:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=597)** So again, we can just kind of Control or Alt drag, make a copy.
>
> **[10:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=603)** And actually I'll show you a little trick that's even better than that.
>
> **[10:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=606)** If you actually, I'm going to rename this to something generic like checkbox, okay?
>
> **[10:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=613)** And then what you could do is if you right click on this field I can choose the option that says create multiple copies.
>
> **[10:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=624)** And so what I'll do is I'll say give me three copies down and two across.
>
> **[10:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=631)** And then if you come in here to the height field I can use my up arrow key to increase the distance.
>
> **[10:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=640)** And then if I go to the width I can use my up arrow key and basically make a copy of these all the way over here, right?
>
> **[10:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=651)** And when I'm done, I end up with all six check boxes created at once.
>
> **[10:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=656)** And the reason I made the name generic originally is because what it does is it appends a digit at the end.
>
> **[11:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=663)** And so now what I can do is change this one to say landscape design.
>
> **[11:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=669)** And with check boxes, if you go to the options tab the export value is yes, and that makes sense.
>
> **[11:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=678)** And then moving down a bit, this is where we only have one choice, right?
>
> **[11:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=685)** And whenever you have this situation the field type is going to be a radio button because radio buttons are mutually exclusive which means that only one choice can be made.
>
> **[11:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=700)** So when you create a radio button you're going to have two options to choose.
>
> **[11:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=705)** We have a group name.
>
> **[11:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=707)** So I'm going to call the group name installation.
>
> **[11:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=710)** And then the choice is going to be do it yourself, right?
>
> **[11:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=717)** I'm going to double click on this.
>
> **[11:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=718)** Go to position.
>
> **[12:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=720)** Yeah, I'm just going to make these same size here.
>
> **[12:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=723)** There we go.
>
> **[12:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=725)** If I wanted to, I could do a create multiple copies.
>
> **[12:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=729)** But there's only three of 'em so I'm just going to kind of Control drag.
>
> **[12:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=732)** Control drag, or if I'm on a Mac Option drag.
>
> **[12:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=737)** And with a radio button, the name of the field is the same for all of them, but what changes is the option, right?
>
> **[12:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=747)** The radio button choice is what is unique between the choices.
>
> **[12:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=751)** So I'm just going to put here L and M Contractors and then this one will be not sure, okay.
>
> **[12:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=764)** And then I have one more field down here where they're giving you a space for like a note.
>
> **[12:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=769)** I'm going to create another text field down here.
>
> **[12:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=772)** I'm just going to kind of click and drag, do something like that.
>
> **[12:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=777)** Now for this one, I'll call this note.
>
> **[13:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=781)** But because we're asking for a lot more information if you go to the options tab we could turn on this option called Multi-line.
>
> **[13:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=792)** And what that does is when they're filling it out the text will wrap within that field to multiple lines.
>
> **[13:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=799)** So we have now added all the form fields to this form that we need.
>
> **[13:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-adobe-acrobat?u=76281980&t=804)** Using the Prepare Form tool you can add a variety of different form field types to a document to allow users to fill out the form digitally and preserve that information for future use.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (11), go to (9), dropdown (2), checkbox (2), scroll down (1)
> **CLI Commands:** make (18), find (1)
> **Code Keywords:** let (5), this. (5), this, (4), delete (2), continue (1)
> **Versions:** 0.25 (2), 0.2 (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** similar to (1), for example (1)
> **Env Vars:** pdf (1)
> **Cross-References:** go back to (1)

#### Adding a tooltip to form fields
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=0)** - [Instructor] In order to make form fields in a PDF file accessible, one of the key requirements is to add a tooltip or description to each form.
>
> **[0:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=8)** Because form field names are not read by assistive technology, we need a tooltip to provide a description to the user that explains what they're expected to enter into the field.
>
> **[0:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=19)** Let me show you how this is done.
>
> **[0:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=22)** So I'm going to go back to the Prepare Form mode and that is going to show me all of the form fields I have in this form.
>
> **[0:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=33)** Now, one of the things I want to point out, you'll notice that all of your form fields are listed down here in the lower right when you're in Prepare Form mode.
>
> **[0:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=42)** What's useful to know is that this is also the tab order that will be used when somebody is tabbing from field to field in this form.
>
> **[0:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=54)** So you may notice here, because of the order in which I created these fields, currently it's going from the city to the zip and then to the state.
>
> **[1:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=62)** Now what I could do is just drag the state up and position it in between the city and the zip.
>
> **[1:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=69)** So now it goes city, state, zip, and I can just arrow down and just make sure that it's reading these fields in the order that I want them to and this looks pretty good.
>
> **[1:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=81)** Now, if I start with the first form field, I'm just going to zoom in a little bit to make this easier to see.
>
> **[1:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=88)** If I double click on the first name field and go to the general tab.
>
> **[1:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=93)** Of course, we have the name of our field that we entered previously but right here is your tooltip.
>
> **[1:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=99)** Now to kind of show you the reasoning behind this, if I go to my accessibility tool and run the accessibility check, you're going to notice that I got a bunch of errors under the category of forms.
>
> **[1:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=112)** And one is that the form fields are not tagged.
>
> **[1:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=115)** We're going to cover that in a future video, but the other error we're getting is that all of these fields, the field descriptions, failed.
>
> **[2:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=124)** And Acrobat uses multiple terms to describe the same thing.
>
> **[2:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=129)** Field descriptions is also the tooltip, okay?
>
> **[2:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=134)** So if I go back to Prepare Form, I'll double click on the first name field.
>
> **[2:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=140)** And in the tooltip, the recommendation for the tooltip is, we all have a tendency to want to say, "please enter your first name here."
>
> **[2:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=149)** You could kind of save the pleasantries and just kind of be to the point, like here, I would just say, "enter your legal first name here," like nothing fancy.
>
> **[2:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=160)** And then here I would say, "enter your legal last name here," right?
>
> **[2:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=170)** You're just basically describing what the user is expected to enter in here.
>
> **[2:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=177)** So you want to kind of go through.
>
> **[3:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=181)** For the state, remember we made that a dropdown menu.
>
> **[3:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=184)** Here we can say, "choose your state from the list," right?
>
> **[3:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=189)** And you want to pay attention to the type of field it is, because for a dropdown menu, you wouldn't say, "enter your state here," so.
>
> **[3:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=197)** "Enter your zip code."
>
> **[3:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=201)** And then finally, "enter your email address."
>
> **[3:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=207)** And then every form field needs to have a tooltip.
>
> **[3:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=210)** For the check boxes, I would do something like, "choose if you are interested in," and then what I'm going to do is I'm going to copy this to save some time, and I'll type "landscape design."
>
> **[3:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=227)** And then when I go to the next field, I can just paste that in and say, "landscaping contracting."
>
> **[4:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=240)** You kind of get the idea.
>
> **[4:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=245)** Here we go.
>
> **[4:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=246)** And then when we get down to the radio buttons, so let's see, "who will be performing the installation?"
>
> **[4:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=254)** What we can do is just say, "choose who will be performing the installation."
>
> **[4:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=263)** And with the radio buttons, this is one of the situations where it's a little unique because all of the radio buttons, because they all have the same name, they're all going to automatically have the same tooltip.
>
> **[4:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=276)** And so, remember the option is what makes each one unique, okay?
>
> **[4:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=282)** And then finally, this field down here, I would just say, "tell us anything else about the project that we should know."
>
> **[4:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=295)** As we move on here, you're going to notice that there is some redundancy that is built in but I'll explain to you why we're doing that, right?
>
> **[5:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=304)** Because when you think about it, you know when this form is being read, it's going to say "first name" and then they're going to get to the first name field.
>
> **[5:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=313)** Then it's going to say "address" and they're going to get to the address field.
>
> **[5:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=315)** So we'll talk about that a little bit later.
>
> **[5:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=318)** But now, if I run my accessibility check again, you're going to notice that in the field descriptions category, everything is now passing.
>
> **[5:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=328)** Because we appropriately added the tooltip to all of the form fields and we're satisfying that requirement.
>
> **[5:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=335)** So as you can see, tooltips are required and it improves the experience for users of assistive technology.
>
> **[5:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-a-tooltip-to-form-fields?u=76281980&t=342)** So make sure to add a tooltip for each form field in your document for maximum compliance.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), click on (2), dropdown (2)
> **Code Keywords:** let (2), finally, (2), this, (1)
> **CLI Commands:** make (4)
> **Cross-References:** go back to (2)
> **Env Vars:** pdf (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Manually tagging form fields
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=0)** - [Instructor] Another accessibility requirement of Form Fields is that they need to be tagged.
>
> **[0:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=5)** I can't explain why Acrobat is incapable of doing this for us automatically, but it is what it is.
>
> **[0:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=12)** There are two ways to tag Form Fields.
>
> **[0:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=14)** And in this video I'll show you how to tag them manually using the Reading Order Panel.
>
> **[0:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=19)** I'm starting this video with the 0303 document already open.
>
> **[0:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=24)** And to kind of show you the problem, I'm going to go ahead and go to the Accessibility Tool, and I'm going to run the Accessibility Check.
>
> **[0:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=32)** And I know I've said before that the Acrobat Checker does not check to any known standard, and that is correct.
>
> **[0:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=39)** But when it comes to things like Form Fields, it actually does a really good job of letting us know when there is a problem.
>
> **[0:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=47)** And if you look at the report that shows up here, there's a category here called "Tagged Form Fields failed".
>
> **[0:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=55)** And pretty much every single Form Field in this document is currently failing. (mouse clicking) The reason for that is because if we go to our Tags Panel, there literally are no tags at all for our Form Fields.
>
> **[1:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=70)** Now, what I am going to recommend you do before we get started, is in the Tags Panel, let's go ahead and click on the Tags Item way up here at the top.
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=80)** And what that's going to do is just kind of organize our Form Tags in a easy to find location.
>
> **[1:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=90)** We don't have to go hunting for them after we're finished.
>
> **[1:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=93)** All right, so, I'm going to close the Tags Pane, and then I'm going to come over here to the Reading Order Panel.
>
> **[1:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=99)** And what I'm going to do is I'm going to go ahead and zoom in a little bit (mouse clicking) on this document, so we can see what we're doing here.
>
> **[1:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=107)** In the Reading Order Panel, using your cursor, what you could do is click and drag to marquee the Form Field that you want to tag.
>
> **[1:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=118)** As you could see here, it grabbed a couple of extra elements.
>
> **[2:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=122)** And I think those are text elements that are inside of there, but it's grabbing more than just the Form Field.
>
> **[2:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=128)** So, a little trick you can use.
>
> **[2:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=130)** On Windows, if you hold down the Control key, on Mac, you can hold down the Option key, you'll see that you get a "Minus" sign next to your cursor.
>
> **[2:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=139)** And if I drag across those elements, it will remove them from what is currently being selected.
>
> **[2:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=148)** Now, with my Form Field highlighted in the Reading Order Panel, I can click on the Form Field button to tag that as a Form Field.
>
> **[2:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=159)** Now I can come over here to the Last Name Field.
>
> **[2:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=162)** Again, it grabbed the little bit extra, and I'll tag that as a Form Field.
>
> **[2:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=166)** You always want to kind of marquee more than you want to select.
>
> **[2:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=171)** I know it sounds kind of strange, but only items that are completely encompassed by your selection area are going to get selected.
>
> **[3:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=183)** So, if you try to be too precise, a lot of times you won't even get the items selected that you want.
>
> **[3:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=190)** And that could be a little bit frustrating.
>
> **[3:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=192)** So, I'm just kind of tagging all of these.
>
> **[3:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=195)** We'll grab our State here.
>
> **[3:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=197)** (mouse clicking) There we go. (mouse clicking) You can see this is really a simple task, and I'm just cleaning up my selection if I grab too much.
>
> **[3:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=209)** Yeah, this looks really good.
>
> **[3:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=211)** And now we can come down here to our check boxes, and I'm just going to (mouse clicking) kind of tag (mouse clicking) each one of these as a Form Field.
>
> **[3:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=221)** It doesn't matter what the type is of the Form Field.
>
> **[3:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=226)** They all need to be tagged.
>
> **[3:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=229)** I'm just kind of going through, and then we'll come down here and grab our (mouse clicking) Radio buttons.
>
> **[3:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=234)** There we go.
>
> **[3:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=236)** (mouse clicking) Two and three.
>
> **[4:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=241)** And then finally we have this big one down here for our notes. (mouse clicking) And I'm going to go ahead and tag that.
>
> **[4:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=247)** (mouse clicking) If we rerun our Accessibility Check, you'll now see that "Tagged Form Fields" is totally passing, no problems whatsoever.
>
> **[4:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=258)** And if you open your Tags Pane you're now going to see that you actually have a Formed Tag for every single Form Field in your document.
>
> **[4:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=268)** So, we've achieved the objective.
>
> **[4:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=271)** We've tagged all of our Form Fields.
>
> **[4:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/manually-tagging-form-fields?u=76281980&t=274)** So, by leveraging the Reading Order Panel, you can appropriately tag all of your Form Fields getting you that much closer to a compliant document.

> [!info]- Semantic Content
>
> **Non-Speech:** (mouse clicking) (10)
> **UI Navigation:** go to (2), click on (2)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Automatically tagging form fields
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=0)** - [Instructor] An alternate approach to tagging form fields is to do it automatically.
>
> **[0:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=4)** This approach is a bit faster than tagging form fields manually and of course saves a bit of time.
>
> **[0:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=10)** Let me show you how this method works.
>
> **[0:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=12)** What I'm going to do is I'm going to come over here to my tags pane, and similar to what we did before I'm going to click on the tags icon way up here at the top.
>
> **[0:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=22)** The purpose of this is to simply make sure that all my form tags fall into one location and don't get buried underneath another tag.
>
> **[0:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=33)** And then what I'm going to do is I'm going to click on the option button at the top of the tags pane and I'm going to choose Find.
>
> **[0:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=40)** Now in the Find element dialogue, if you click on the dropdown menu, there's about six different items that we can find from in here.
>
> **[0:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=49)** And what I'm going to do is I'm going to choose Unmarked Annotations, okay?
>
> **[0:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=56)** And I'm going to search the entire document, even though this is only a one page document I just want to search the entire document.
>
> **[1:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=63)** And I'm going to hit the Find button.
>
> **[1:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=65)** And what you're going to notice is that it finds the first form field in your document.
>
> **[1:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=71)** With that field found, you can click on the Tag element button and it asks you how you would like to tag this element.
>
> **[1:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=81)** Well, we know that we want to tag this as a form, so I'm going to choose that from the dropdown menu and then I'm going to click the okay button.
>
> **[1:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=91)** And what it'll do is it'll automatically tag that form field and then it'll find the next form field in your document.
>
> **[1:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=100)** So what you can do to kind of speed up this process is click the tag element button with your mouse, and then just hit the Enter key on your keyboard.
>
> **[1:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=110)** And I'm just going to kind of keep repeating that until I get through all of my form fields.
>
> **[2:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=120)** When it's tagged all of them, you're going to get a dialogue that says, find completed.
>
> **[2:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=125)** And I'll go ahead and click okay.
>
> **[2:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=127)** We can close this.
>
> **[2:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=128)** And you'll notice in your tags pane, similar to what we had in the previous video, we have all of our form fields are tagged and located in the tags pane.
>
> **[2:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=140)** And once again if we run the accessibility check, you're going to see that now under the forms category, there are no other errors remaining.
>
> **[2:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=150)** You'll notice in here we do have a tab order failed.
>
> **[2:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=154)** We could fix that a number of different ways, but probably the easiest way is to click on that error, right click on it and choose fix.
>
> **[2:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=163)** And what that does is it sets your tab order to match your tag order, okay?
>
> **[2:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=172)** That's basically all there is to it.
>
> **[2:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/automatically-tagging-form-fields?u=76281980&t=174)** So as you can see, by using the find command in the tags pane, you can automatically find and tag all of the forms in your document.

> [!info]- Semantic Content
>
> **CLI Commands:** find (8), make (1)
> **UI Navigation:** click on (4), dropdown (2)
> **Code Keywords:** let (1), this. (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Tagging a button
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=0)** - [Instructor] Buttons can be used in a fillable form to perform an action such as submitting a form, printing, as well as other actions.
>
> **[0:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=9)** Let me show you how to add a submit button to this form.
>
> **[0:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=13)** In this particular form, the designer has created a submit form button down at the bottom, although the button that was created is not a button at all.
>
> **[0:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=24)** It's just kind of indicating what the button should look like.
>
> **[0:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=29)** And so what we're going to do here is we are going to create an interactive button that looks like this button.
>
> **[0:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=37)** So what I'm going to do is I'm going to come down here to the prepare form tool and way up here at the top of your screen, you have a little okay icon and that is the icon for a button.
>
> **[0:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=50)** Now what I'm going to do, I'm going to go ahead and let me zoom in a little bit so I can see this a little bit better here, what I'm going to do is I'm going to draw a button the same size as the one that the designer has created.
>
> **[1:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=64)** And keeping in mind that the button that the designer has on there, it's not a button, it's just a visual of what the button should look like.
>
> **[1:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=71)** And so I'm going to give this a name of submit.
>
> **[1:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=75)** And then I'm going to double click on the field because there's a couple of things we could do here.
>
> **[1:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=83)** When you create a button, the button needs to perform an action, and if it doesn't, it's really just a button that does nothing.
>
> **[1:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=92)** And so if I want people to submit this form, I probably want them to send it to my email.
>
> **[1:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=97)** So what I'm going to do is I'm going to go to the actions tab, and in the select action dropdown, I'm going to scroll all the way to the bottom and choose submit a form.
>
> **[1:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=108)** I'm going to click the add button.
>
> **[1:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=110)** And the add button says, okay, this is great.
>
> **[1:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=113)** What exactly do you want to submit?
>
> **[1:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=117)** From this form, we can send an FDF file, which stands for form data file.
>
> **[2:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=122)** And that's really just the information that the people entered into the fields and that's really it.
>
> **[2:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=127)** We could send it as HTML, XFDF include, I'm going to have them send me the entire PDF file.
>
> **[2:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=134)** It's just going to be easier that way.
>
> **[2:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=136)** That way I get a complete PDF file with all of their information submitted.
>
> **[2:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=142)** Now in the URL, if you have the capabilities, and if your company has a server that can accept this form submission, you could put a URL for your data server.
>
> **[2:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=154)** But if I want them to send me an email, what I'm going to do is I'm going to type the word mail to followed by a colon and then I'm just going to put my email address.
>
> **[2:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=164)** So I'm going to type Chad@[accessibilityunraveled.com](https://accessibilityunraveled.com) and then I'm going to go ahead and click okay.
>
> **[2:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=172)** So now I've added an action to my button.
>
> **[2:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=176)** Now the other thing about buttons is that they're very basic.
>
> **[3:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=180)** If you go to the appearance tab, you could see that I can define a fill color, a border color.
>
> **[3:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=187)** And what you can also do if you go to the options tab, you have a couple of options.
>
> **[3:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=192)** You could say, just give me a label for the button, give me an icon, top, a label on the bottom, or a label on the top.
>
> **[3:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=201)** You get all these different options.
>
> **[3:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=203)** What I'm going to do is I'm going to choose icon only.
>
> **[3:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=209)** And then down here, I can click choose icon.
>
> **[3:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=213)** And if you click the browse button and you go to your chapter three folder, I have a PDF in there called submit and it is a PDF of what that button looks like.
>
> **[3:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=227)** So I'm going to click open.
>
> **[3:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=229)** And we can see what that PDF file looks like.
>
> **[3:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=233)** I'm going to click okay.
>
> **[3:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=234)** And now you can see the PDF, the icon is inside of that button.
>
> **[4:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=241)** So I'm going to go ahead and close that.
>
> **[4:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=242)** Now, my sizing, as careful as I was, my sizing is off a little bit, so I'm going to resize this.
>
> **[4:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=249)** Oops, not that way.
>
> **[4:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=250)** Let's go this way.
>
> **[4:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=253)** And what I may want to do, I'm going to double click on this.
>
> **[4:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=256)** Let's go to appearance and change my fill color to no color.
>
> **[4:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=260)** That way I don't have to deal with the sizing issue.
>
> **[4:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=264)** And maybe I do want to make this a little bit bigger though because now it's kind of small.
>
> **[4:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=269)** There we go.
>
> **[4:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=270)** That looks pretty good.
>
> **[4:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=272)** Now I'm actually going to slide this button out of the way for a second because I don't like that static button to be behind it.
>
> **[4:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=281)** So if I close this and I go to edit PDF, I can click on this and delete it, and then I can click on this shape and delete it, and then close this.
>
> **[4:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=292)** And then if I go back to prepare form, I can slide my button over to where I want it to be.
>
> **[4:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=298)** There we go, that looks pretty good.
>
> **[5:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=300)** Now again, remember that a button, like any other form field is a form field that needs to be tagged.
>
> **[5:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=310)** So what we could do is if we go to the tags pane, we can choose find and we could say unmarked annotations, find.
>
> **[5:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=321)** And the only thing that's not tagged yet in this document is the button.
>
> **[5:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=326)** So I'm going to tag that element as a form.
>
> **[5:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=329)** There we go.
>
> **[5:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=330)** And so now we have all of our elements tagged appropriately and that button should be down here at the bottom.
>
> **[5:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=339)** And now we're ready to structure our form tags within the tag structure of our document.
>
> **[5:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tagging-a-button?u=76281980&t=346)** So by leveraging the button tool, you can customize your button, instruct it to perform an action, and basically apply it to all of the forms that you create on your own.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (7), url (2), fdf (1), html (1), xfdf (1)
> **UI Navigation:** go to (7), click on (4), dropdown (1)
> **Code Keywords:** let (4), this. (3), delete (2), include, (1), static (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (2), stands for (1)
> **URLs:** [accessibilityunraveled.com](https://accessibilityunraveled.com) (1)
> **Cross-References:** go back to (1)
> **Analogies:** such as (1)

#### Structuring form tags in the Tags panel
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=0)** - [Chad] Remember, assistive technology applications read content based on the tag order in a document.
>
> **[0:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=6)** When you add form fields to a document, it's no exception.
>
> **[0:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=10)** Those form tags need to be in order within the tag structure of a document in order for them to read properly.
>
> **[0:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=16)** So I'm beginning this video with the 03 06 document already open.
>
> **[0:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=21)** And let's go ahead and open up our tags pane, so we can see what we're working with.
>
> **[0:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=25)** Now you can see that we have all of our form fields that we've previously tagged.
>
> **[0:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=30)** And what I'm going to do is I'm going to open up the document tag, so I can see what's inside of there.
>
> **[0:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=36)** What I'm going to do is I'm going to kind of walk the tags tree down to the first name field.
>
> **[0:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=43)** Now, this situation creates a slight problem only in that when this form was created in the source application, they did so by putting tabs between first name and last name.
>
> **[0:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=58)** And because of that, the first name text and last name text is all contained within one single paragraph, okay?
>
> **[1:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=67)** So what I'm going to do to fix that is I'm going to grab my selection tool up here and I'm going to select the text for first name.
>
> **[1:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=77)** And then at the options button at the top of the tags pane, I'm going to choose create tag from selection.
>
> **[1:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=84)** And what that's going to do for me, it's going to break first name and last name into two separate content objects.
>
> **[1:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=92)** And I'm going to move first name up to the top.
>
> **[1:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=95)** This guy we can artifact.
>
> **[1:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=97)** We don't need him.
>
> **[1:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=99)** Okay, and now what we can do is we can grab the first name and last name form fields, and I'm going to go ahead and drag them up here.
>
> **[1:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=110)** And I'm going to drop the form field for first name directly after the marked content object.
>
> **[1:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=117)** And then I'll put the form for last name directly below it.
>
> **[2:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=121)** I may need to move this one up there like that.
>
> **[2:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=124)** So now, you can see it's going to read first name, first name form, last name, last name form.
>
> **[2:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=131)** All right, I'm going to close that up.
>
> **[2:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=132)** So now we have our address.
>
> **[2:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=134)** This one's a little easier.
>
> **[2:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=136)** We can grab the address form field and just kind of drop that in there.
>
> **[2:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=141)** Then we have city, state, zip, and we have the similar problem here, right.
>
> **[2:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=145)** So I'm going to highlight city, choose create tag from selection.
>
> **[2:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=151)** I'm going to highlight state and choose create tag from selection.
>
> **[2:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=156)** And now you can see that all these items are broken apart.
>
> **[2:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=159)** These empty text elements, I can go ahead and artifact those.
>
> **[2:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=164)** All right, so let me move these into the right order here, and then I can grab the form fields for those objects.
>
> **[2:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=172)** Move them up here.
>
> **[2:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=174)** So we have city, state, and zip.
>
> **[2:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=179)** So that's looking really good.
>
> **[3:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=182)** Okay, and then we have daytime phone and email, and I'll grab those form fields, just kind of move them into position here.
>
> **[3:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=193)** Cool.
>
> **[3:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=195)** And then we got to move down to these check boxes, right?
>
> **[3:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=200)** So again, very similar.
>
> **[3:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=202)** And what we could do is I can just open all these up, save a little bit of time, and these first six, yep, these are all of those form fields.
>
> **[3:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=213)** So I could go ahead.
>
> **[3:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=214)** I'm going to move these up here, and I'll drop them here.
>
> **[3:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=219)** And so what I want to do is I could put the checkbox in front of landscape design and just kind of do this.
>
> **[3:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=229)** There we go.
>
> **[3:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=229)** So, you know, now... Oh, I went in the wrong order.
>
> **[3:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=233)** Do you guys see that?
>
> **[3:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=234)** So, my form fields were actually in the wrong order.
>
> **[3:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=238)** So, this is planting plants.
>
> **[4:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=244)** This is hardscaping.
>
> **[4:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=248)** Let's see how we did, (chuckles) how we did now.
>
> **[4:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=250)** So landscape design, contracting.
>
> **[4:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=256)** That looks better, okay.
>
> **[4:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=257)** And then the last things we have are our radio buttons here.
>
> **[4:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=262)** Not the last thing, but the last couple of things here.
>
> **[4:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=265)** And I'll move these up here.
>
> **[4:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=270)** And there we go.
>
> **[4:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=271)** So we have that one, that one, that one.
>
> **[4:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=274)** This guy is going to get the tag for the big text field.
>
> **[4:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=280)** And then what's going to happen here, we really don't have a tag in which to nest.
>
> **[4:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=289)** Oh, we have like an empty tag there.
>
> **[4:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=291)** I'm not sure what that's about.
>
> **[4:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=293)** We'll artifact that, get him out of the way.
>
> **[4:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=297)** So we have that.
>
> **[4:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=298)** And so, my button needs to go in here, right.
>
> **[5:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=303)** Now I'll tell you, I'm going to go ahead and do a save as on this, and I'll call this 03 06 finish.
>
> **[5:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=311)** There we go.
>
> **[5:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=312)** I'm going to run an accessibility check here.
>
> **[5:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=316)** And we do have one issue.
>
> **[5:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=319)** Oh, we forgot to add a description for our submit form.
>
> **[5:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=324)** Okay, so, you know, and that's the value, right?
>
> **[5:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=327)** That's the value of using checkers and just kind of reminding you of things you missed.
>
> **[5:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=333)** So, I'll just go into prepare form, double click on the button, and I'll just say, submit this form, right, something like that, and that that'll fix that problem.
>
> **[5:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=345)** Now to kind of explain the value, I'm actually going to close this.
>
> **[5:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=348)** Let me reopen it.
>
> **[5:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=350)** To explain the value of like what we just did, what I want to do is I'm going to open NVDA for a second.
>
> **[5:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=357)** (interface chimes)
>
> **[5:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=359)** - [Voice Assistant] Use OK button.
>
> **[6:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=360)** Leaf and Mortar consultation request.
>
> **[6:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=362)** - [Chad] And so one thing that's important to understand is that you and I as document remediators cannot control how a user chooses to read our document, something that's always worth remembering.
>
> **[6:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=376)** And when it comes to forms, it's even more important to remember that.
>
> **[6:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=381)** And the reason I'm pointing that out is because right now, if I read this form, I'm currently in what's called browse mode, right.
>
> **[6:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=389)** So NVDA has, and JAWS does as well, but like a browse mode and a forms mode.
>
> **[6:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=394)** And what I want to show you, I'm going to go down a little bit here
>
> **[6:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=397)** - [Voice Assistant] Page one, contact information, heading level two.
>
> **[6:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=399)** - [Chad] Okay, and if I go down...
>
> **[6:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=401)** - First name. - And I go down again...
>
> **[6:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=403)** - [Voice Assistant] Enter your legal first name here, edit.
>
> **[6:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=405)** - Right, then I go... - Last name.
>
> **[6:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=407)** Enter your legal last name here, edit, address.
>
> **[6:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=411)** Enter your residential address, edit, city.
>
> **[6:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=414)** Enter your city of residence here, edit, state.
>
> **[6:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=417)** Choose your state from the list combo box.
>
> **[6:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=419)** - [Chad] All right, so if you can understand how this being read, I mean, NVDA is currently just reading the content as it exists in the tag structure.
>
> **[7:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=430)** And you'll notice it's saying first name, enter your legal first name here.
>
> **[7:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=434)** So it's reading the first name text, then it's reading the tool tip of the form field.
>
> **[7:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=439)** And again, if I go down, let me go down again.
>
> **[7:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=442)** - [Voice Assistant] Zip, enter your zip code here, edit, no next.
>
> **[7:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=446)** - [Chad] Okay, and so...
>
> **[7:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=449)** - [Voice Assistant] Zip, enter your zip code here.
>
> **[7:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=452)** Daytime phone number.
>
> **[7:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=454)** Enter your daytime phone number.
>
> **[7:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=455)** Enter your daytime phone number, edit, blank.
>
> **[7:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=457)** - And if I want to...
>
> **[7:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=458)** - [Voice Assistant] 1, 3, dash, 4, 5, 6, dash, 7, 8, 9, 0
>
> **[7:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=463)** - [Chad] I can actually enter the value in there as I'm reading this form.
>
> **[7:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=468)** - [Voice Assistant] 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5.
>
> **[7:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=477)** Email address.
>
> **[7:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=478)** Enter your email address, edit.
>
> **[8:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=480)** - [Chad] So that's how this document is read in browse mode.
>
> **[8:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=483)** Now, some users who are probably more advanced know about forms mode in NVDA.
>
> **[8:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=492)** And so I'm going to use a shortcut key to switch over to forms mode.
>
> **[8:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=497)** Okay, and now, when I press the Tab key...
>
> **[8:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=500)** - [Voice Assistant] Enter your email address, edit, blank.
>
> **[8:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=502)** Choose if you are interested in landscape design.
>
> **[8:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=504)** Checkbox not checked.
>
> **[8:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=505)** Choose if you are interested in landscaping contracting.
>
> **[8:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=507)** Checkbox not checked, checked.
>
> **[8:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=509)** Choose if you are interested in sustainable landscaping.
>
> **[8:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=510)** Checkbox not checked, checked.
>
> **[8:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=513)** Choose if you are interested in planting plants.
>
> **[8:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=514)** Checkbox not checked.
>
> **[8:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=516)** Choose if you are interested in hardscaping.
>
> **[8:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=517)** Checkbox not checked, checked.
>
> **[8:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=519)** - [Chad] Okay?
>
> **[8:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=520)** So in forms mode, NVDA kind of ignores the tag structure and only focuses on the forms fields.
>
> **[8:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=530)** And it's a different experience.
>
> **[8:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=532)** And so a lot of people ask me, "Chad, why do I have to spend the time "to put the form tag nested "in the appropriate location within the tag structure?"
>
> **[9:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=543)** And my answer is, because you and I can't control how a user chooses to read our document.
>
> **[9:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=550)** There are plenty of users out there, just like there are users out there who use software who kind of utilize that software at a fairly basic level.
>
> **[9:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=559)** They don't know about more advanced features.
>
> **[9:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=562)** They don't know about some of the capabilities.
>
> **[9:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=564)** And so, if a user is unaware of forms mode in NVDA, the default is browse mode.
>
> **[9:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=571)** And so their experience is going to be... Let me switch back over
>
> **[9:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=576)** - [Voice Assistant] Hardscaping.
>
> **[9:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=577)** Checkbox not checked.
>
> **[9:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=578)** Choose if you are interested in water features and garden structures.
>
> **[9:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=581)** Water features and garden structures.
>
> **[9:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=583)** Heading level three, who will be performing the installation?
>
> **[9:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=585)** Choose one.
>
> **[9:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=587)** Radio button not checked.
>
> **[9:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=588)** Choose who will be performing the installation.
>
> **[9:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=589)** Do it yourself.
>
> **[9:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=591)** You will do it yourself.
>
> **[9:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=592)** Radio button not checked.
>
> **[9:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=593)** Choose who will be performing the installation.
>
> **[9:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=595)** L and M Contractors, Leaf and Mortar's contractors.
>
> **[9:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=598)** - [Chad] All right, so that's how it sounds in browse mode.
>
> **[10:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=602)** So, again, we don't have the ability to control that.
>
> **[10:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=606)** And WCAG states that our documents need to be able to be read by all technologies.
>
> **[10:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=613)** It's important that we build our document to account for every situation that we can.
>
> **[10:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=620)** And by nesting the tags appropriately, we're ensuring that regardless of whether a user uses browse mode or forms mode, they're going to have a good experience.
>
> **[10:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/structuring-form-tags-in-the-tags-panel?u=76281980&t=630)** So by taking the extra time to structure the form tags in the appropriate order, you're ensuring a good reading experience for users of assistive technology.

> [!info]- Semantic Content
>
> **Speakers:** - [chad] (9), - [voice (9), - first (1), - right (1), - and (1)
> **Code Keywords:** let (6), this. (2), switch (2), this, (1), interface (1)
> **UI Navigation:** checkbox (7), select the (1), click on (1)
> **Env Vars:** nvda (6), jaws (1), wcag (1)
> **Analogies:** just like (1)
> **Non-Speech:** (interface chimes) (1)


### 4. Advanced Accessibility Topics in Microsoft Word

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Saving accessible PDFs from Microsoft Word
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=0)** - [Instructor] Probably the first thing you should know when saving an accessible PDF file from Word is how to do it.
>
> **[0:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=7)** There are a couple of options that work and I'd like to show you what they are here.
>
> **[0:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=11)** Now the first thing I want you to know, and if you take anything away from this video, it is that you cannot create an accessible PDF file by choosing file print.
>
> **[0:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=24)** I'm just going to demonstrate it to illustrate why.
>
> **[0:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=28)** And so if I go to the file menu and I choose print, if you have Adobe Acrobat installed, you'll notice that one of the printers that is always available to me is Adobe PDF.
>
> **[0:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=42)** And so if I choose that as my printer and I click the print button, it is going to process my file.
>
> **[0:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=49)** But when it does, it's going to run it through what's called the print stream.
>
> **[0:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=54)** And the print stream does not provide any accessibility components whatsoever.
>
> **[1:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=61)** And when I use this method, it's going to open it up.
>
> **[1:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=64)** And you can see, here's the PDF that it created.
>
> **[1:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=67)** It's called 0401 print.
>
> **[1:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=69)** But if I open up my tags pane, this is that kiss of death I was talking about.
>
> **[1:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=74)** You have zero tags using that method.
>
> **[1:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=79)** So the moral of the story is don't use that method to create an accessible PDF file, it's no good.
>
> **[1:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=86)** So back to Word.
>
> **[1:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=87)** What I'm going to do is you have two methods that you can use to create an accessible PDF file and those two methods, one is the Microsoft method, the other is the Adobe method.
>
> **[1:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=100)** So the Microsoft method can be achieved by going to the file menu and choosing save as.
>
> **[1:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=108)** And in the save as dropdown menu, what I'm going to do is I'm going to click the browse button to tell it where to put my file.
>
> **[1:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=116)** And in the save as type dropdown, I'm going to choose PDF.
>
> **[2:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=121)** Now I'm going to call this one 0401MS for Microsoft.
>
> **[2:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=127)** But then what I'm going to do is I'm going to click on the options button.
>
> **[2:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=131)** In here, there's a lot of really good information but the key elements here is the checkbox that says document structure tags for accessibility.
>
> **[2:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=140)** You also want to include the document properties.
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=143)** That way if you give your document a title, that will get passed on to the PDF.
>
> **[2:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=147)** And then I can also tell it to create bookmarks based on my headings in my document.
>
> **[2:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=153)** And so when I click okay and I hit the save button, it's going to create a PDF for me.
>
> **[2:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=161)** This is the one that I created using the Microsoft technique.
>
> **[2:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=164)** And if I open up my tags pane, you're going to see that automatically I am getting tag structure in my document.
>
> **[2:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=173)** This is a big deal because this is exactly what we're looking for.
>
> **[2:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=179)** We're looking to leverage the source file to generate the tags for me.
>
> **[3:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=184)** So that was the Microsoft method.
>
> **[3:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=186)** Now I'm going to go back to Word and I'm going to show you the Acrobat method.
>
> **[3:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=190)** Now you're only going to have this option if you have Adobe Acrobat Professional installed on your machine.
>
> **[3:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=198)** During installation, Adobe installs a component into the office applications called the PDF Maker and you'll know you have it because if you look up here at the top of your ribbon, you're going to see a tab called Acrobat.
>
> **[3:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=217)** And if you click on that tab, you're going to see a whole bunch of options in here related to the PDF format.
>
> **[3:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=225)** Now what I'm going to do is I'm going to click on the preferences button.
>
> **[3:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=230)** And inside of here, similar to the Microsoft method, the key element here is this checkbox right here, enable accessibility and reflow with tagged Adobe PDF.
>
> **[4:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=243)** Now this little checkbox that says enable advanced tagging alludes to the fact that it somehow makes your tagging better.
>
> **[4:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=251)** It doesn't.
>
> **[4:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=253)** So I encourage you to leave it unchecked.
>
> **[4:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=256)** I've found it to overcomplicate the tag structure so I always leave that unchecked but I would enable ad links, enable create bookmarks.
>
> **[4:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=268)** And when you do that, you can come up here to the bookmarks tab and tell it what you want bookmarks created from.
>
> **[4:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=276)** And by default, it's going to create bookmarks based on Word headings.
>
> **[4:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=280)** You can also choose convert Word styles to bookmarks.
>
> **[4:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=284)** All of your styles are listed in here so you can choose whichever one you want.
>
> **[4:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=288)** But I'm going to leave mine set to convert Word headings to bookmarks, click okay.
>
> **[4:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=293)** And then I'll click the create PDF button and it needs to save my file.
>
> **[4:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=298)** So I'm going to go ahead and say yes and then I'll call this 0401 Adobe.
>
> **[5:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=304)** And when I save this one, again, you can see the PDF maker pop up.
>
> **[5:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=311)** And similar to what we saw using the Microsoft method, if I come over here, this is my Adobe version, and if I open up the tags pane, you're going to see very similar situation.
>
> **[5:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=324)** I will tell you, you will see differences between the Microsoft method and the Adobe method.
>
> **[5:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=330)** Although they're generally very similar, you will see variances in the tag structure.
>
> **[5:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=336)** You might have noticed the Microsoft version, these tags were called something else.
>
> **[5:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=342)** Now they're called art.
>
> **[5:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=344)** Both will create a tagged PDF and they both work very well.
>
> **[5:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/saving-accessible-pdfs-from-microsoft-word?u=76281980&t=348)** So regardless of the method you choose, just make sure you use one of the methods that will yield a proper accessible PDF file in your documents.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (16)
> **UI Navigation:** click on (3), checkbox (3), dropdown (2), go to (1)
> **Code Keywords:** for. (1), from. (1), default, (1), else. (1), yield (1)
> **Analogies:** similar to (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Working with merged cells
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=0)** - [Narrator] We've talked about merged cells in previous videos and how to address them in the PDF file.
>
> **[0:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=6)** You'll need to implement this technique when merging cells in Microsoft Word as well because Word doesn't do a very good job at dealing with merged cells.
>
> **[0:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=15)** Let me show you what to look out for when merging cells inside of Microsoft Word.
>
> **[0:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=20)** So I'm going to go ahead and jump down a little bit in my document to page 18 in this document where there is a table, as you can see, and within this table, they've merged a couple of the cells.
>
> **[0:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=36)** You can see this guy here, that is a merged cell, this one here as well as down here.
>
> **[0:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=44)** Now, there are some things that we can do to kind of help us out.
>
> **[0:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=48)** I mean, in this table, we do have row headers.
>
> **[0:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=52)** And so what we could do is if we click inside of this table and we come up here to the table design tab, what I'm going to do here is I'm going to uncheck header row because this top row is not a header, but I'm going to leave first column enabled and that's going to make all of these header rows.
>
> **[1:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=69)** So that will be helpful.
>
> **[1:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=72)** Now let's go ahead and make a PDF of this file.
>
> **[1:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=76)** So I'm going to do a save as on this since I changed it and I'll call this 04_02_finish.
>
> **[1:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=85)** And then what we'll do is we'll come up to the Acrobat tab and I'm going to go ahead and create a PDF of this file.
>
> **[1:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=94)** Okay, so now if I look at this PDF file, I think that was on page 18 or so, there we go, 19 in this case, and what I'm going to do is I want to find this table in this document.
>
> **[1:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=107)** So if I open up the tags pane, what I'll do is just kind of grab some text up here and choose find tag from selection and that'll kind of get me to the table in question.
>
> **[1:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=118)** So I can do kind of like a visual evaluation here.
>
> **[2:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=123)** And when I look at that first row, it has three cells, second row has three, the third row does only have two, which is really good.
>
> **[2:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=133)** That one has two, that one has three, and that one has two.
>
> **[2:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=136)** So the good thing is is that the table structure is correct.
>
> **[2:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=142)** Now, this is a point at which I really want to bring your attention to something and it's also the reason why I don't use the Acrobat Checker for extensive evaluation of my document.
>
> **[2:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=155)** So if I go to the accessibility tool in Acrobat and run the accessibility check and say start checking, we do have some errors here.
>
> **[2:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=163)** Let's go to the tables category.
>
> **[2:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=165)** And I am getting a regularity error.
>
> **[2:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=168)** Okay, so this is really good.
>
> **[2:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=170)** I say that because I have run into situations in the past where in the Acrobat checker, the table passes even though it is not correct.
>
> **[3:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=183)** And the fact that this has a regularity error is actually a good thing because it does in fact have a regularity error.
>
> **[3:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=189)** And that's because the focus of this video is even though these cells are merged and they appear to be tagged correctly, Word fails to set the column span property for those cells.
>
> **[3:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=203)** And that is why they're failing.
>
> **[3:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=205)** And again guys, this is just the nature of Word.
>
> **[3:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=208)** There's not a whole lot you can do about it without reaching out to a third-party application.
>
> **[3:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=214)** There's a product called Access Word that handles this very well.
>
> **[3:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=219)** It pretty much eliminates a lot of what I'm showing you here.
>
> **[3:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=224)** But to address this situation, what I'm going to do is I'm going to come down to the accessibility tool and go to Reading Order and I'm going to click inside of that table and I'm going to choose Table Editor.
>
> **[3:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=236)** And what I'm going to do is I'm going to click on that first merged cell and I'm gonna-right click and choose Table Cell Properties.
>
> **[4:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=244)** And as I said before, Word merged two cells together.
>
> **[4:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=251)** So fundamentally, it should have applied a column span to that cell, but as you can see here, it failed to do so.
>
> **[4:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=259)** So what I'm going to do, I'm going to change the column span to two, click OK, and then I'll need to go down to the cell below and do the same thing, column span of two.
>
> **[4:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=273)** And then way down here, same thing, column span of two.
>
> **[4:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=280)** You can already tell that the table editor is visually reflecting the changes that I made.
>
> **[4:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=286)** I mean, the table editor is saying, oh, I now see that this has a column span of two and it makes a lot more sense.
>
> **[4:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=293)** And while I'm here, what I would do is select all of these cells, go to table cell properties and make sure you set the scope to row.
>
> **[5:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=300)** And actually, I'm seeing that that has already been set, which is very good.
>
> **[5:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=307)** I think that may have occurred in a recent update to Word because I could tell you, for a long time, this was not happening.
>
> **[5:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=317)** But now if I rerun the accessibility check, you will see that I have one less regularity error and these two errors are on two other tables and the one that I just remediated is in fact now compliant.
>
> **[5:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=334)** So the good news is that merged cells can be fixed.
>
> **[5:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-cells?u=76281980&t=338)** The bad news is that you'll need to do the fixing in Acrobat because Word just can't help you.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (2)
> **UI Navigation:** go to (4), click on (1)
> **Code Keywords:** let (3), case, (1)
> **Env Vars:** pdf (4)
> **Definitions:** is a  (3)
> **Prerequisites:** you'll need (2)
> **Analogies:** kind of like (1)
> **Speakers:** - [narrator] (1)

#### Working with custom styles
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=0)** - [Instructor] The great thing about Microsoft Word is that when you use Microsoft's default header styles, those styles are automatically mapped to the appropriate tag in the accessible PDF file.
>
> **[0:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=11)** That all goes out the window when you create a custom style though.
>
> **[0:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=15)** Don't worry, it can be fixed.
>
> **[0:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=17)** And I'd like to show you how right now.
>
> **[0:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=19)** So, I'm starting this video with the 04_03 document open on my computer.
>
> **[0:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=25)** I'm going to focus on this front page here.
>
> **[0:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=27)** You can see that I have this text on the front page called, Social Media Training Manual.
>
> **[0:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=32)** And it's big, important text, right?
>
> **[0:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=36)** And if I open up my Styles pane, you could see that this is using a style called, Title.
>
> **[0:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=43)** And the name, Title, kind of signifies really important text.
>
> **[0:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=48)** Well, I want to show you however, that if I create a PDF file of this document.
>
> **[0:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=56)** I'll go ahead and save this into my folder.
>
> **[1:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=61)** When I look at this PDF and I open up the tags tree, you're going to notice I do have a bunch of empty tags here.
>
> **[1:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=68)** But Social Media Training Manual is simply tagged as a P tag.
>
> **[1:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=73)** We talked about this previously that this violates WCAG 1.3.1 Info & Relationships.
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=80)** Info & Relationship says if the text is big and important, it should be tagged as a heading.
>
> **[1:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=86)** And in this case it is not.
>
> **[1:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=88)** So, what I'm going to do is I'm going to go ahead and delete that file.
>
> **[1:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=97)** And let's go back to Word.
>
> **[1:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=99)** And what I'm going to show you is to get this text to output to the correct tag, what I need to do is come over here to my Styles pane and to the right of the Title style, I'm just going to click on that arrow and I'm going to choose Modify.
>
> **[1:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=116)** And in the Modify style dialogue box, I'm going to click on the Format button in the lower left corner, and I'm going to choose Paragraph.
>
> **[2:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=125)** And if you look up here at the top of the dialogue box, the outline level is set to body text.
>
> **[2:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=133)** And body text maps to a P tag in the exported PDF file.
>
> **[2:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=139)** It's important for you to know, whenever you create your own style, the default outline level is always body text.
>
> **[2:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=148)** If you're creating styles in Word that you intend to be headings, right?
>
> **[2:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=153)** You would want to go into the style when you create it and come up here to the outline level.
>
> **[2:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=159)** And in my case, I'm going to change this to Level 1.
>
> **[2:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=162)** And Level 1 means map this to an H1 tag when the PDF is created.
>
> **[2:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=169)** And you'll also notice, I currently have my navigation pane open over here on the left.
>
> **[2:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=176)** And you may notice that Social Media Training Manual is not listed.
>
> **[3:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=181)** But when I click Okay, and I click Okay again, all of a sudden, Social Media Training Manual pops up here because it is now using a style that has a heading outline level.
>
> **[3:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=196)** So, I'm going to save this and I'm going to remake that PDF.
>
> **[3:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=203)** And if I open that PDF file and I go to the tags tree, you're going to see right here is the H1 for my Social Media Training Manual.
>
> **[3:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-custom-styles?u=76281980&t=215)** So just know that even when you create a custom style, you can control which tag it maps to by adjusting the outline level in the Style settings for that particular style.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (7), wcag (1)
> **Code Keywords:** delete (1), let (1), case, (1)
> **UI Navigation:** click on (2), go to (1)
> **Cross-References:** we talked about (1), go back to (1)
> **Versions:** 1.3.1 (1)
> **Speakers:** - [instructor] (1)

#### Working with multiple table header rows
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=0)** - [Instructor] When you have tables with multiple heteros in Word, it may seem like there's no way to achieve the desired result.
>
> **[0:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=7)** However, there is a way, and I want to show you how to do it for when you encounter this in your own files.
>
> **[0:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=13)** Now I'm starting this video with the 0404 document open and I've navigated the page 25 of this document where I've got a couple of tables that have more than one header row.
>
> **[0:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=26)** It's worth having the conversation.
>
> **[0:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=28)** We could also make the argument that this should not be a row in the table at all that we could just kind of make this a header and have it as a paragraph before the table.
>
> **[0:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=40)** But again, that's kind of an optional adjustment that we could make.
>
> **[0:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=44)** And because these tables do have more than one header row I'm going to go ahead and roll with it and we're going to go ahead and make these compliant.
>
> **[0:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=52)** The problem with the typical way of defining header rows in a a table is the fact that if you go to the table design tab we have a checkbox for header row and first column.
>
> **[1:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=65)** And what that really means is one header row, one first column.
>
> **[1:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=69)** And when you have a situation like this where you have more than one row, how do we make it happen?
>
> **[1:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=76)** Right? I mean, it's not like we have an extra checkbox that we can turn on, right?
>
> **[1:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=81)** So the way in which we do it is actually pretty simple.
>
> **[1:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=85)** And what I'm going to do is I'm just going to kind of click and drag to the left of this table to highlight both of these rows.
>
> **[1:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=93)** And if I right click on either of those highlighted rows and choose table properties, if I go to the row tab at the top you'll notice right here is a checkbox that says repeat as header row at the top of each page.
>
> **[1:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=109)** And I'm going to go ahead and turn that checkbox on.
>
> **[1:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=113)** That checkbox could have a visual consequence depending on your situation.
>
> **[1:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=119)** And what I mean by that is that if you have a long table that spans more than one page, this checkbox is going to add a header row to every successive page that the table flows across.
>
> **[2:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=135)** Now, to be fair, that's typically a desired result, right?
>
> **[2:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=139)** I mean, typically when a table spans more than one page you want that header row repeated visually because when you flip the page, you lose the connection to what those headers were.
>
> **[2:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=150)** And so in our case, by turning that on, we are instructing Word to make both of those rows a header row.
>
> **[2:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=157)** So I'm going to click okay, and I'm going to repeat that on the second table.
>
> **[2:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=162)** Go to table properties, repeat as header row and I'll go ahead and click okay.
>
> **[2:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=168)** Now, I'm going to do a save as on this.
>
> **[2:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=169)** That way I have a copy of my file here, right?
>
> **[2:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=175)** And it's kind of bothering me that not all of these are bold.
>
> **[3:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=181)** So I'm just going to kind of fix that real quickly.
>
> **[3:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=183)** I think that'll work.
>
> **[3:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=185)** So now what I'm going to do is I'm going to make a PDF of this document.
>
> **[3:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=189)** So I'll just leave the name as is 0404 finish.
>
> **[3:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=195)** All right, and when that PDF file opens I think that was on around page 25, if I'm not mistaken.
>
> **[3:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=201)** There it is.
>
> **[3:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=202)** And I'm going to open up my tags tree and I'm going to find where these tables are.
>
> **[3:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=208)** There we go.
>
> **[3:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=209)** And if I open up the first row could see that's defined as a header.
>
> **[3:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=213)** If I open up the second row all of these are defined as headers as well.
>
> **[3:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=218)** And then in the successive row because I left first column chosen, you can see that the first cell of each row is also a header.
>
> **[3:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=226)** And I'll go down to that second table.
>
> **[3:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=229)** First row is a header, second row, all headers, right?
>
> **[3:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=232)** So as you can see, there is a hidden feature that allows you to define multiple header rows in a table within Microsoft Word.
>
> **[4:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multiple-table-header-rows?u=76281980&t=240)** I encourage you to leverage it whenever you need it to help you make your files as accessible as possible.

> [!info]- Semantic Content
>
> **UI Navigation:** checkbox (6), go to (3), click on (1)
> **CLI Commands:** make (8), find (1)
> **Definitions:** is a  (4), defined as (2)
> **Code Keywords:** case, (1), this. (1)
> **Env Vars:** pdf (2)
> **Speakers:** - [instructor] (1)

#### Working with multilevel lists
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=0)** - [Instructor] When creating bulleted or numbered lists with multi-levels, there are a few things you'll want to keep in mind.
>
> **[0:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=6)** Let's take a closer look in this document.
>
> **[0:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=9)** So I'm starting this video with the 04_05 document open and I'm going to use my Navigation pane here to jump to this setting goals section where I have created a multi-level list, right?
>
> **[0:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=25)** So you'll see this a lot.
>
> **[0:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=27)** You know, this is an example where we have level one bullets.
>
> **[0:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=32)** And then within this first bullet, they have a couple of sub bullets.
>
> **[0:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=38)** This is kind of how Microsoft Word works.
>
> **[0:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=41)** So like if I put my cursor after the level one bullet and hit Return, it's going to want to create another level one bullet.
>
> **[0:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=50)** I'm just going to type something here.
>
> **[0:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=53)** Let's see, use your head, right?
>
> **[0:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=55)** Now, what you can do, however, if you put your cursor at the beginning of this level one bullet, you can hit the Tab key and that will essentially automatically convert it to a level two bullet.
>
> **[1:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=69)** Now, there are ways that you can customize these bullets, right?
>
> **[1:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=74)** I mean, by default, level two is like a hollow circle.
>
> **[1:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=78)** You can make it whatever you want.
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=80)** You can do that by the way, you know, up here is your bulleted list.
>
> **[1:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=84)** You could choose define new bullet and you may even want to create a multi-level list which kind of allows you to combine numbers and characters, and so on and so forth.
>
> **[1:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=94)** But that's beyond the scope of this video.
>
> **[1:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=97)** What I wanted to show you is by leveraging this feature, so to speak, right?
>
> **[1:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=103)** What I'm going to do is I'm going to create a PDF file of this document.
>
> **[1:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=108)** So let me actually do a Save As on this.
>
> **[1:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=114)** And then what I'll do is I'll create a PDF of this.
>
> **[2:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=120)** And I think that was on page 20.
>
> **[2:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=124)** Yeah, there we go.
>
> **[2:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=125)** And so if I go to my Tags tree, and I do a find tag from selection, you'll see here, right?
>
> **[2:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=133)** That we have a list, right?
>
> **[2:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=135)** That contains all of the bullets.
>
> **[2:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=138)** And if I open up that first list item and open up the L Body, you'll see a secondary list that is a child of the L Body of that first list item.
>
> **[2:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=149)** And that is proper structure for nested lists.
>
> **[2:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=153)** Now, what I find that's pretty common, people have a tendency to over bullet things.
>
> **[2:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=160)** And if you find yourself creating like three levels of bullets, I really encourage you to rethink it and take a look and see like, do I really need this?
>
> **[2:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=171)** Because when somebody using assistive technology is reading a bulleted list, you know, it's going to say list with five items.
>
> **[2:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=179)** And then when they read the first bullet, in the case of this example here, they'll read the first bullet and then they're going to hear again, list with three items because they're now in a sub list of the first list item.
>
> **[3:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=193)** And so you can imagine if you have to keep drilling down into that list structure, it's kind of really easy to get lost and it can really be a bit complicated.
>
> **[3:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=204)** So bullets are fine, numbers are fine.
>
> **[3:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=207)** Just try to keep them fairly simple if it all possible.
>
> **[3:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=212)** Now I'm going to close this.
>
> **[3:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=212)** I'm going to go back to Word 'cause I want to show you something else.
>
> **[3:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=216)** Let me jump down to that section again.
>
> **[3:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=220)** Here we go.
>
> **[3:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=221)** So what will often happen as well like this is something that I see as well is let's say after this first bullet people will hit Return, but they don't want another bullet.
>
> **[3:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=235)** They want to add a paragraph that describes more information about that first bullet.
>
> **[4:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=242)** So what they might do is turn off the bullet and actually what I want to do here, let me add an indent.
>
> **[4:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=250)** I think .5.
>
> **[4:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=252)** Oops, .5 should work.
>
> **[4:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=254)** There we go.
>
> **[4:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=255)** And so what they'll want to do is add a descriptive I'll just kind of type this in here.
>
> **[4:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=260)** Paragraph goes here, right?
>
> **[4:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=263)** And I want to show you the problem with this.
>
> **[4:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=266)** Let me just adjust the spacing here.
>
> **[4:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=269)** There we go.
>
> **[4:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=271)** And let's get rid of this one too, right?
>
> **[4:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=277)** So we added like this descriptive paragraph here.
>
> **[4:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=280)** Oftentimes it's a lot longer than this.
>
> **[4:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=282)** Let me just make it a two line.
>
> **[4:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=284)** There we go.
>
> **[4:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=285)** That'll work.
>
> **[4:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=286)** And I want to show you what happens when we do this, right?
>
> **[4:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=289)** So I'm going to save this and let's create another PDF.
>
> **[4:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=294)** I'll just put a one behind this.
>
> **[4:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=297)** And we'll jump to page 20 again.
>
> **[5:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=302)** And We'll find that tag.
>
> **[5:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=307)** All right, here we go.
>
> **[5:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=308)** So what you're going to see is that because I inserted that paragraph, it breaks the list.
>
> **[5:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=316)** By right, the paragraph should be part of the previous list item.
>
> **[5:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=322)** But because I added a separate paragraph, you'll see that I have this paragraph below the first list and then I get a second list that is created after that.
>
> **[5:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=334)** And this is a really common thing that I see a lot.
>
> **[5:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=337)** So the reality is there's really nothing I can do in Word to fix this.
>
> **[5:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=341)** If this is your desired look and feel, this is what you're going to end up with.
>
> **[5:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=346)** Now that doesn't mean we can't fix it, right?
>
> **[5:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=348)** But the way we would fix it is we would open up the L Body of this second bullet and you would drag this paragraph as a child of that L Body.
>
> **[6:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=363)** So now when you click on that list item, not only is it highlighting the bullet, but it's also highlighting the paragraph below.
>
> **[6:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=371)** And then what you could do is you can open up the second list and just move the list items into that first one and delete that empty list tag.
>
> **[6:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=381)** So now you have that list still structured as a list the way it's supposed to be and that paragraph is just a child of the second list item.
>
> **[6:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=391)** So I hope that helps you to understand the challenge that you'll run into when you do insert a paragraph like that, but then also how to fix it if you do in fact need to create that design.
>
> **[6:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=403)** So when using multi-level lists, be sure to keep them in sequence and don't break them up using additional paragraphs.
>
> **[6:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-multilevel-lists?u=76281980&t=411)** If you do, you'll just need to do a little bit of fixing in the PDF after export.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this. (7), return, (2), default, (1), else. (1)
> **CLI Commands:** find (4), make (2)
> **Env Vars:** pdf (4)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** go to (1), click on (1)
> **Cross-References:** go back to (1)
> **Analogies:** imagine (1)
> **Warnings:** keep in mind (1)

#### Setting hyperlink tooltips
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=0)** - [Instructor] One of the requirements of the PDF UA standard is that every hyperlink needs to contain a tool tip.
>
> **[0:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=7)** Now, if you think this requirement is a bit overkill I should explain that this requirement came from a time when it was really common to use "Click here" or "Download here" as the text of a hyperlink.
>
> **[0:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=19)** And using those terms doesn't tell the user anything about where they're going and that inherently was the problem.
>
> **[0:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=27)** You know this is bad practice and you're probably careful now about making sure you use meaningful text for your hyperlinks, but regardless, it is still a requirement.
>
> **[0:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=37)** Now, Word actually allows you to meet this requirement.
>
> **[0:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=39)** So I'd like to show you how it does that here.
>
> **[0:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=43)** Now I'm starting this video with the 0406 document open and I've navigated to page nine where I'm on the category of LinkedIn.
>
> **[0:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=52)** And so what I'm going to do is I'm just going to type a sentence down here at the end of this paragraph that says for more information visit the LinkedIn Learning website.
>
> **[1:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=67)** How appropriate, right?
>
> **[1:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=68)** And then what I'm going to do is I'm going to highlight LinkedIn Learning website.
>
> **[1:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=72)** I'm going to right click and I'm going to choose link.
>
> **[1:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=75)** And this is going to allow me to say, okay let's go to an existing webpage.
>
> **[1:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=81)** This is the text to display up here, right?
>
> **[1:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=83)** So it just kind of copies it from what I had selected.
>
> **[1:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=86)** And then down here I could type the URL of the website I want it to go to.
>
> **[1:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=91)** So I'm going to go www.[linkedin.com/learning](https://linkedin.com/learning).
>
> **[1:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=97)** Okay?
>
> **[1:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=99)** Now, if I want to add the tool tip in the upper right hand corner you'll notice there's a screen tip button.
>
> **[1:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=108)** And if I click on that this is where I can add the tool tip.
>
> **[1:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=113)** Now I know I'm using a couple different terminologies here.
>
> **[1:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=116)** There are a number of terms that are used.
>
> **[1:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=118)** So I use the term tool tip.
>
> **[2:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=120)** Word is calling it a screen tip and the technical term that you may hear is called a contents entry.
>
> **[2:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=131)** So in the screen tip text I'm going to type in here LinkedIn Learning website.
>
> **[2:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=139)** Okay?
>
> **[2:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=140)** And then I'll go ahead and click, okay.
>
> **[2:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=142)** And so I'm going to click, okay now we have our hyperlink created.
>
> **[2:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=148)** I'm going to do a save as on this and I'll call it the finished version.
>
> **[2:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=155)** And then I'm going to create a PDF of this document.
>
> **[2:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=159)** So I'll just leave that name as is, and I'll let the PDF maker convert this to the PDF.
>
> **[2:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=167)** So it's important to understand the Acrobat checker is never going to flag that as being a problem, right?
>
> **[2:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=173)** The Acrobat checker just doesn't check for that.
>
> **[2:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=176)** What I am going to do here, I'm going to open my pack checker.
>
> **[3:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=180)** And so if I run the 0406 finished document through the checker, we are going to have some errors in this document, which is normal.
>
> **[3:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=190)** But this is kind of a good example, right?
>
> **[3:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=192)** So all of the links in my table of contents you can see are getting the error that I'm talking about.
>
> **[3:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=200)** So this error, alternative description missing for an annotation and that's yet another term that's used, right?
>
> **[3:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=207)** So we have tool tip, screen tip, contents entry and alternative description, right?
>
> **[3:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=212)** They all mean the same thing guys.
>
> **[3:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=214)** So for all of my TOC entries, I'm getting an error.
>
> **[3:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=218)** Again, this is pretty normal, but you'll notice that the hyperlink that I created is not listed here and that's because it was created properly.
>
> **[3:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=230)** If I go to the PDF, what I'll do I think that was on page 10, right?
>
> **[3:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=234)** Yeah, there it is.
>
> **[3:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=235)** And let me zoom in on this and I'll just kind of show you where this is stored.
>
> **[4:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=241)** Find that tag.
>
> **[4:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=243)** Here we go.
>
> **[4:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=244)** And here is the link, right?
>
> **[4:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=246)** The LinkedIn Learning website.
>
> **[4:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=248)** And if you wanted to see where that screen tip that we added is located if you right click on the link and choose properties, you'll notice in the alternate text field we have LinkedIn Learning website.
>
> **[4:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=266)** That is where you know that screen tip is going to be found inside of your document.
>
> **[4:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/setting-hyperlink-tooltips?u=76281980&t=271)** I'm just going to close that and just remember to maximize accessibility and compliance when creating a hyperlink, take the extra step and add the tool tip to the hyperlink as well.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (5), url (1), toc (1)
> **UI Navigation:** go to (3), click on (2)
> **Code Keywords:** let (3)
> **Best Practices:** bad practice (1), remember to (1)
> **CLI Commands:** find (1)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Advanced Accessibility Topics in Adobe InDesign

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Working with merged table cells
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-table-cells?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-table-cells?u=76281980&t=0)** - [Instructor] This video is more of a public service announcement than anything and I say that because in InDesign, there's really nothing special you have to do when working with merge cells.
>
> **[0:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-table-cells?u=76281980&t=11)** They just work.
>
> **[0:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-table-cells?u=76281980&t=12)** The reason I'm mentioning it at all is because it's a common misconception that you're not allowed to merge cells in a table.
>
> **[0:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-table-cells?u=76281980&t=19)** That is not the case with InDesign.
>
> **[0:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-table-cells?u=76281980&t=22)** In Microsoft Word, sure, but InDesign handles merge cells amazingly and I'd like to show you that here in this document.
>
> **[0:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-table-cells?u=76281980&t=30)** So I'm beginning this video with the 0501 document open and I'm just going to zoom in on this table on the right hand page of the spread and if you look here, the Tubers cell up here at the top, that is a merged cell, right, and if I go down a little bit further, the Vegetable cell, again, also a merged cell, okay, so if I export this to a pdf, which I'm going to do by going to the file menu in InDesign and choosing export and I'm going to choose PDF interactive and I'm going to go ahead and export this document to a pdf.
>
> **[1:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-table-cells?u=76281980&t=73)** All right.
>
> **[1:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-table-cells?u=76281980&t=74)** Now if I look at the tag structure here, I dive in here and I find my table, it's nested inside of this P tag here, there we go, what you'll find is that if you go to, in my case I'm going to go to the second row here, we have one cell in that row and then we also have that down here, right, we only have one cell, so normally, right, this would cause a regularity error because other applications fail to define what's called the column span.
>
> **[1:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-table-cells?u=76281980&t=110)** In InDesign, however, if I right click on this cell and go to properties and I look at the attribute objects, you're going to see that InDesign properly defines the column span whenever you merge cells and that applies to whether you merge columns or whether you merge rows.
>
> **[2:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-table-cells?u=76281980&t=131)** If we had merged rows, we would've a row span attribute in here and if I go to the other one, do the same thing here, edit attribute objects and you could see that this one also has a column span.
>
> **[2:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-table-cells?u=76281980&t=144)** So again, really nothing special you have to do, I just want you to know that you can do it.
>
> **[2:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-table-cells?u=76281980&t=150)** Just use the merge cell feature in InDesign and pretty much merge away.
>
> **[2:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-merged-table-cells?u=76281980&t=155)** InDesign'll take it from there and make sure that your merge sells output correctly.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (4), click on (1)
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** public (1)
> **Env Vars:** pdf (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Working with table headers
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=0)** - [Narrator] As you know, every table needs to have a header in order to meet compliance.
>
> **[0:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=6)** InDesign allows you to define header rows in a table very easily and I'd like to show you how right here.
>
> **[0:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=13)** So I have the 05_02 document open and you could see that visually in my document, my table does in fact have a header row, right?
>
> **[0:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=25)** And it's been made a header row visually by changing its color, changing the font weight, and making it very apparent that it's a header row.
>
> **[0:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=34)** But just because it looks like a header row doesn't mean that it actually is, okay?
>
> **[0:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=40)** And the way in which we can make sure that it is a header row is by grabbing our type tool.
>
> **[0:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=48)** And if you click to the left of that header row, you will highlight that entire row.
>
> **[0:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=55)** Now to convert it to a header, if you come up here to the table menu and choose Convert Rows, you'll have an option that says to header, okay?
>
> **[1:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=67)** And when I choose that, you'll notice a slight change in my alternating fills down here because now that that's defined as a header, they're going to shift down and that's totally normal.
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=80)** The other way that defining the header row is beneficial is if you're leveraging table styles in InDesign.
>
> **[1:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=87)** Because if you have a header row defined in a table style, it will not format it as such until you actually convert that row to a header.
>
> **[1:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=97)** So keep that in mind.
>
> **[1:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=99)** Because of that, I actually like using table styles because it reminds me when I forgot to convert a row to a header, right?
>
> **[1:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=108)** Whenever possible, I try to take advantage of table styles in InDesign.
>
> **[1:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=112)** Now, another result of what we did that I want to point out is that over here, this table, if I highlight the whole thing, you'll see that this table flows from one frame to another.
>
> **[2:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=128)** So it starts on the left page and continues on the right page.
>
> **[2:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=132)** What you may have noticed is that when I converted this row to a header row, it added the header row, basically replicated that header row on the page in which the table continues.
>
> **[2:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=147)** Now, you can't edit this row, right?
>
> **[2:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=150)** You'll notice when I hover over it, it has a lock symbol on it, and that's because it's getting all of its information from that primary header row that I converted.
>
> **[2:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=161)** And this is just a result of me doing that.
>
> **[2:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=165)** If you recall, I talked about this in a previous video, what InDesign is going to do is it's going to replicate that row.
>
> **[2:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=174)** So I'll tell you what I'm going to do.
>
> **[2:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=176)** I'm going to export this to a PDF and I'll just leave that name the same.
>
> **[3:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=185)** And if I go to the tags tree here, there we go.
>
> **[3:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=192)** So a couple of things about InDesign in general.
>
> **[3:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=195)** I mean, one of the things that is a little bit problematic is that it always puts a table inside of a paragraph tag.
>
> **[3:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=204)** Now, if you were to run that through the PAC Checker, you're going to get an error, right?
>
> **[3:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=209)** Because you're going to get an error that says invalid use of a P structure element, or it might be a table structure element, one or the other, but it's basically just saying that this tag does not belong in this location.
>
> **[3:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=222)** So what I typically do as a matter of practice is I'll just move the table out of the P tag and then delete that empty P tag just to alleviate that problem.
>
> **[3:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=234)** But looking at the table, if we open this up, I've talked about this in previous videos, you'll notice that we have two T heads, two T bodies, and two T foots, okay?
>
> **[4:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=248)** And again, this is where InDesign just kind of fails.
>
> **[4:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=253)** It's not correct, it's not good to have, certainly you don't want the header read a second time.
>
> **[4:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=260)** And as a matter of fact, we don't want the footer read the first time.
>
> **[4:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=264)** So what I do to fix this is I'll open up the T body and then I'll open up the other T body and I'm just going to move all of these body rows into the first T body.
>
> **[4:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=277)** And now that this T body is empty, we can delete it.
>
> **[4:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=281)** The first T foot, we really don't want that to be read because the bottom of the table is actually over here.
>
> **[4:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=291)** So I'm going to open this up and I'm going to artifact this, right-click, change tag to artifact, click OK.
>
> **[5:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=301)** And now because the T foot is empty, we can delete it.
>
> **[5:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=305)** And then we're going to do the same thing with the T head.
>
> **[5:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=308)** And this is three separate cells.
>
> **[5:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=311)** So I need to open all of them, select the marked content, right-click and choose change tag to artifact.
>
> **[5:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=321)** And now this second T head, because it's empty, we can delete it.
>
> **[5:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=325)** And now you'll see that the table is simply structured as T head, T body, T foot, exactly the way the table is supposed to be structured.
>
> **[5:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=337)** So I really don't have much advice as far as like avoiding that problem, although in a future video, I'm going to demonstrate a plugin for InDesign called MadeToTag.
>
> **[5:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=349)** MadeToTag basically fixes this problem.
>
> **[5:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=353)** If you do a lot of tables in InDesign, especially tables that span across a page, you may want to take a look at MadeToTag because it basically alleviates the need to fix all of your tables after you export.
>
> **[6:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=368)** Anyway, as you can see, defining a header in InDesign is quick and easy.
>
> **[6:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-table-headers?u=76281980&t=373)** Although if you need to define row headers, you will need to do that inside of Adobe Acrobat.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4), this, (1), export. (1)
> **UI Navigation:** right-click (2), go to (1), select the (1)
> **Definitions:** is a  (2), defined as (1)
> **Env Vars:** pdf (1), pac (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [narrator] (1)

#### Getting creative with bullets and numbers
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=0)** - [Instructor] It's really common in InDesign to get creative with bullets and numbers to create a specific effect.
>
> **[0:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=6)** However, doing so can often result in a document that's not appropriately tagged.
>
> **[0:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=11)** In this video, I'd like to show you some workarounds for dealing with creative bullets that don't output appropriately.
>
> **[0:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=18)** Now, I'm starting this video with the 05_03 document open on my computer, and I want to focus on this numbered list over here on the right hand page.
>
> **[0:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=29)** And as you can see, the way that this was built, you could see that the designer basically created some separate text frames and they anchored them to the text, to kind of make them look like a numbered list, right?
>
> **[0:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=45)** And this is super common, but what I want to show you is what the problem is, right?
>
> **[0:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=50)** Because you know, as you look at this, you're like, "Well, what's the big deal?
>
> **[0:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=54)** Why do we even have to be concerned about it?"
>
> **[0:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=56)** Well, if I export this to the PDF format, what you'll see when I open up the tags here is that when we get down to these numbered lists, they're all tagged as P tags, we talked about this before how this violates with tag 1.3.1, info and relationships, but also you'll notice that within each P tag there is a section tag, and that is the circular text frame that was created, and then within there is another P tag, and when you run this through a checker, you're going to get the error inappropriate use of a section structure element, and that's because a section tag doesn't belong inside of a paragraph.
>
> **[1:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=102)** And that's just the nature of the beast, I mean, that's how the file is structured in InDesign, and so that's how the tags are replicated when it outputs.
>
> **[1:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=112)** So I'm going to go ahead and close this and go back to InDesign.
>
> **[1:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=115)** Now, to be fair, like I think if I were doing this job I would look for a font that gave me the number in a circle.
>
> **[2:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=127)** And if I could find a font, then I could just create a numbered list that would be formatted the way that I want it to, but would also output correctly.
>
> **[2:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=138)** But we're not in that situation and I don't want to reinvent the wheel here, right?
>
> **[2:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=144)** So what I'm going to do here is I'm going to click within the first paragraph here and up at the top in my paragraph formatting, I'm going to turn on the numbered list formatting, okay?
>
> **[2:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=158)** Now, if you hold down the alt key on Windows or the option key on Mac, and click again on that numbered list button it'll bring up the bullets and numbering options.
>
> **[2:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=168)** And I want to make sure that I set the mode to continue and what we could do up here in the number, I could delete that period 'cause I really don't need it.
>
> **[3:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=180)** And what I'm going to do is in the character style dropdown, I'm going to click on the dropdown and choose new character style.
>
> **[3:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=187)** And I'm going to give this style a name called Tiny White, okay?
>
> **[3:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=193)** And in the basic character formats, in the size, I'm going to type 0.1 points, like super small.
>
> **[3:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=201)** And in the character color, I'm going to choose paper, all right?
>
> **[3:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=205)** Now when I click okay, you're going to notice that the number disappears because what I'm essentially doing is hiding the number, it's kind of a double whammy, right?
>
> **[3:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=217)** But I made it really small for the next thing I'm going to do.
>
> **[3:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=221)** So I can't set my indent to zero because there is a character there, but what I can do is set it to a really finite number, I'm going to set mine to negative 0.001 and then I'll set my left indent to 0.001, right?
>
> **[3:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=238)** And you'll see that when this preview updates, I've basically moved my text back to the position that I want it, and fundamentally there's a number there.
>
> **[4:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=253)** So I'm going to click okay, right?
>
> **[4:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=255)** And then if I go to my paragraph styles, I'm going to create a new paragraph style.
>
> **[4:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=260)** And I'm going to call this Hidden Numbers, all right?
>
> **[4:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=265)** And I'm going to base it on no paragraph style, and then we'll go ahead and click okay, perfect.
>
> **[4:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=272)** And then what I'll do is I'll highlight all of these and apply hidden numbers to all of them, and you'll notice no visual change happened, right?
>
> **[4:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=281)** But I am applying a different style.
>
> **[4:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=283)** Now to address these shapes over here, again, I need them visually because that's what the designer wants but I don't want them to appear in my tag structure.
>
> **[4:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=296)** So if I select one of these and I come up here to the object menu and choose object export options, in the tagged PDF category, I can apply the tag of artifact and I'm going to repeat that for each and every one of these circular numbered shapes.
>
> **[5:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=315)** And what that's going to do is not include those shapes in the tag structure.
>
> **[5:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=324)** So now what I'll do is I'll re... Actually let me do a save as on this file that way if you want to look at mine, you can.
>
> **[5:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=333)** And then I'll go ahead and export this to the PDF format.
>
> **[5:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=339)** And what you're going to see is that... and I'm getting a a font error here, I'm just going to kind of ignore that for now, but if I go into the tag structure, what you're going to find is that as I come down here, there is a list tag, and that list tag is each item of that numbered list, if I open these up, you'll see that the label is set to 1, 2, 3, and of course 4, right?
>
> **[6:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=372)** So from a tagging standpoint, I'm getting exactly what I want, I'm not getting those shapes included in the output, and it's just saving me a whole lot of work compared to me cleaning it up in acrobat after exporting.
>
> **[6:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=389)** So, you know, I hope that kind of shows you that there's always ways around the problem.
>
> **[6:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=394)** I do this a lot in InDesign to kind of avoid having to do cleanup.
>
> **[6:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=399)** If you know what you need, leverage InDesign to kind of make it happen and just kind of be creative about how you utilize it.
>
> **[6:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=407)** And a lot of times you can get some really good results.
>
> **[6:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=411)** So again, be creative by doing so, you can produce a well-structured and tagged document, while still providing the desired visual appearance.
>
> **[7:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/getting-creative-with-bullets-and-numbers?u=76281980&t=420)** You get the best of both worlds.

> [!info]- Semantic Content
>
> **Code Keywords:** super (2), this, (1), continue (1), delete (1), let (1)
> **CLI Commands:** make (3), find (2)
> **Versions:** 0.001 (2), 1.3.1 (1), 0.1 (1)
> **UI Navigation:** dropdown (2), click on (1), go to (1)
> **Env Vars:** pdf (3)
> **Definitions:** is a  (3)
> **Cross-References:** we talked about (1), go back to (1)
> **Speakers:** - [instructor] (1)

#### Adding alt text for hyperlinks
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=0)** - [Instructor] One of the requirements of the PDF/UA standard is that every hyperlink needs to contain a tool tip.
>
> **[0:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=7)** If you think this requirement is a bit overkill, I should explain that this requirement came from a time when it was really common to use Click Here or Download Here as the text of a hyperlink.
>
> **[0:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=18)** Now, you and I both know this is bad practice, and you're probably careful about using meaningful text for your hyperlinks now.
>
> **[0:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=25)** But regardless, it is still a requirement.
>
> **[0:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=28)** Now, InDesign allows you to meet this requirement.
>
> **[0:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=30)** So, I'd like to show you how this works.
>
> **[0:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=33)** Now, I'm starting this video with the 0504 document open.
>
> **[0:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=38)** And down here in this paragraph, you'll notice that I have a hyperlink.
>
> **[0:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=44)** Now, while I'm here, I had brought this up in a previous video where we were talking about multi-line hyperlinks and the challenges that we face with that.
>
> **[0:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=56)** One of my suggestions was... And again, I should point out, a lot of people might be asking, "Well, why don't you have the hyperlink "say Ball Mason Jars "and then have that be the link?"
>
> **[1:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=70)** Well, there is a legitimate reason for having implicit hyperlinks in a document.
>
> **[1:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=76)** And that reason is often because a lot of times, these documents are going to go to print.
>
> **[1:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=85)** And for somebody who's reading this on ink and paper, they literally need the full URL to be able to get there.
>
> **[1:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=94)** If they see a link that says Ball Mason Jars Website, they're going to have to figure it out on their own.
>
> **[1:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=100)** So, one of my recommendations was if you do need hyperlinks spelled out, take advantage of something like Bitly to shorten the link.
>
> **[1:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=110)** And I'm just going to show you that real quickly.
>
> **[1:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=112)** I'm going to grab this hyperlink, and I'm going to copy it.
>
> **[1:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=117)** And I'm going to flip over to my web browser where I've gone to the Bitly page.
>
> **[2:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=122)** And on Bitly, I can paste my hyperlink in here.
>
> **[2:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=126)** And I can hit Enter.
>
> **[2:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=128)** And what it's going to do is it's going to create a Bitly link for me.
>
> **[2:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=134)** Which is nice and short, easy to kind of type out if I'm trying to get to it while I'm reading it on a piece of paper.
>
> **[2:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=142)** So, I'm going to copy this and then replace it in my document.
>
> **[2:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=149)** And what that did, as you could see, is it avoided the multi-line hyperlink.
>
> **[2:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=156)** And I'll just go back to my web browser here to just show you that if I paste that Bitly link in there, that of course is going to take me to the Ball Mason jars webpage.
>
> **[2:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=169)** So, the Bitly link works.
>
> **[2:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=171)** Always a good idea to double check it before you put it in there.
>
> **[2:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=175)** And then what I'm going to do here, to create the hyperlink in InDesign, we're going to leverage the Hyperlinks panel.
>
> **[3:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=181)** So if you go to your Window menu, go down to Interactive, you can choose Hyperlinks.
>
> **[3:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=188)** And I'll go ahead and dock this over here with my other panels.
>
> **[3:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=192)** And the way that you use this hyperlink is you'll select the link that you want to become a hyperlink.
>
> **[3:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=200)** And then I'm going to click the plus sign at the bottom of the Hyperlinks panel.
>
> **[3:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=204)** And InDesign is pretty smart.
>
> **[3:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=206)** It's just going to kind of grab the text that you have selected, it's going to put it into the URL field, and that's pretty much all we need to do.
>
> **[3:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=216)** Now, one thing I want to point out, and this is definitely a bug in InDesign.
>
> **[3:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=222)** What I've discovered is that I always turn off Shared Hyperlink Destination.
>
> **[3:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=229)** I've run into situations where it can become very problematic in a document.
>
> **[3:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=236)** And we've talked about this on the "Chax Chat" podcast multiple times.
>
> **[4:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=241)** And my recommendation is to just turn it off.
>
> **[4:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=243)** Otherwise, you can really get into some problems.
>
> **[4:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=247)** In addition, down here, if you choose, you can apply a character style to the hyperlink.
>
> **[4:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=255)** By default, InDesign does create a character style called Hyperlink.
>
> **[4:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=260)** That is the blue underlined appearance.
>
> **[4:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=263)** You can make it look however you want.
>
> **[4:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=265)** There's no specific requirement there other than the WCAG requirement that says a hyperlink needs to have a unique appearance so that people can identify that it is in fact a hyperlink.
>
> **[4:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=279)** Now, getting back to adding alt text for our hyperlinks.
>
> **[4:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=283)** If you click on the Accessibility button within the Hyperlink dialogue box, you're going to get a field here that says alt text.
>
> **[4:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=293)** And this allows you to provide a description for where this website is going to go.
>
> **[5:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=301)** Now, my approach to this, what I like to do.
>
> **[5:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=305)** Way up here in your tab, when you hover over it, this displays the title of the webpage.
>
> **[5:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=314)** And in my opinion, this is great information to use as the alt text for the hyperlink.
>
> **[5:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=322)** Because the title of the webpage should, and I say should very carefully.
>
> **[5:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=328)** Little short trivia for you.
>
> **[5:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=331)** Do you know the most commonly named webpage in the world?
>
> **[5:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=336)** It's called Untitled Page.
>
> **[5:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=338)** That's the most common title for a webpage that you're going to find.
>
> **[5:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=342)** So if a website is built properly, each webpage should have an appropriate title.
>
> **[5:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=348)** And so I like to grab the title of the webpage.
>
> **[5:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=353)** I don't know if I can copy this.
>
> **[5:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=355)** Yeah, I can't really copy it here.
>
> **[5:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=356)** So, I have a script on my computer that I use to extract the title from every webpage.
>
> **[6:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=363)** And that way I can easily paste it in.
>
> **[6:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=366)** But this is called Canning & Preserving 101, Ball Mason Jars.
>
> **[6:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=370)** So, what I would do is in InDesign I'm going to type Canning and Preserving 101.
>
> **[6:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=378)** Ball Mason Jars.
>
> **[6:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=381)** And that is going to now be the alt text for that hyperlink.
>
> **[6:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=384)** So, I'm going to go ahead and click OK.
>
> **[6:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=386)** And what I'll do, let me do a Save As on this.
>
> **[6:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=389)** That way, again, you can reference my file if you wish.
>
> **[6:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=393)** And then I'm going to export this to the PDF format.
>
> **[6:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=399)** So if I come over here to my Tags pane, and I drill down here, we can get down to this paragraph and you'll see here is the link that was created.
>
> **[6:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=410)** Now, that's just a byproduct of using the hyperlinks panel in InDesign.
>
> **[6:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=414)** But if I right click on this and choose Properties.
>
> **[6:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=417)** This is a very interesting topic here because when Adobe first implemented this feature, they were adding it to the alternate text field within the link.
>
> **[7:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=430)** But then the Standards people, the people who were big on the standards said, "No, that's not where it belongs.
>
> **[7:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=436)** "It should be in the Contents entry."
>
> **[7:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=440)** And so to see that, if I click on the Edit Tag button and I open this up.
>
> **[7:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=446)** I got to go to K Array, Dictionary, Object.
>
> **[7:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=451)** Right here.
>
> **[7:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=453)** See if I can open this up a little bit.
>
> **[7:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=455)** Yeah, there we go.
>
> **[7:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=456)** You can see there is the Contents entry that the Hyperlinks panel in InDesign has created.
>
> **[7:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=462)** And that does, in fact, satisfy the requirement of having alt text on your hyperlink.
>
> **[7:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=469)** And you see right here is the text that I added in there.
>
> **[7:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-alt-text-for-hyperlinks?u=76281980&t=473)** So, again, when creating a hyperlink, it makes sense to spend a few more seconds to provide a description of that hyperlink so that you're meeting PDF/UA compliance.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), click on (3), select the (1)
> **Env Vars:** pdf (3), url (2), wcag (1)
> **Code Keywords:** this. (2), default, (1), this, (1), let (1)
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** previous video (1), go back to (1)
> **Best Practices:** bad practice (1)
> **Speakers:** - [instructor] (1)

#### Adding form fields in InDesign
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=0)** - [Instructor] One of my favorite ways of creating fillable PDF forms is using Adobe InDesign.
>
> **[0:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=5)** It gives me a lot of flexibility and makes it really easy to make edits and re-export the PDF without a lot of extra work.
>
> **[0:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=13)** In this video, I'd like to show you how to add form fields in InDesign and I have some extra tips to make it even more efficient.
>
> **[0:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=20)** Let's take a closer look.
>
> **[0:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=22)** So I'm beginning here with the 0505 document open.
>
> **[0:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=25)** And this is kind of the typical situation.
>
> **[0:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=29)** I mean, what I like to do is lay out the foundation of my form sands, the form fields, right?
>
> **[0:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=37)** Like without all of the form fields created.
>
> **[0:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=40)** And then what I'll do is I'll add the form fields in so that when I export the PDF format I'm pretty much good to go.
>
> **[0:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=50)** So I'm going to go ahead and start up here in this contact information section.
>
> **[0:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=55)** And you can use any type of frame that you wish to create a form field.
>
> **[1:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=60)** You can use unassigned graphic frame or text frame.
>
> **[1:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=63)** Really doesn't matter, just because of who I am, I like to use an unassigned frame, but again, it really doesn't matter.
>
> **[1:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=71)** And what I'm going to do here I'm going to do a little bit of a trick here.
>
> **[1:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=74)** I'm going to draw a frame that goes from the top of the first line to the bottom of the last line.
>
> **[1:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=82)** And then what I can do is I can come up here to the height field and after the current value, I'm just going to type slash five to divide that distance five ways.
>
> **[1:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=96)** And that way I know that the field occupies the space of one line of my copy.
>
> **[1:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=105)** Now, by doing that it's actually the fields are going to stack right up against each other.
>
> **[1:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=110)** So I might just reduce this a little bit to make it just a tiny bit smaller to gimme a little bit of flexibility.
>
> **[1:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=118)** So I'm going to fill this with none, and then what I'm going to do is kind of position it where I want it to appear relative to the copy, okay?
>
> **[2:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=131)** Now what I'm going to do is I'm going to open up my buttons and forms panel.
>
> **[2:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=136)** I'm going to go to the Window menu, Interactive Buttons and Forms.
>
> **[2:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=141)** I can dock this over here with the rest of my items.
>
> **[2:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=144)** And with this selected, I'm going to go to the type dropdown menu and I'm going to choose Text Field because that's the type of field I want to convert this to.
>
> **[2:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=155)** And by doing that, you'll notice like visually we now have like dotted thick border around it indicating that it's an interactive field.
>
> **[2:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=164)** And you also have this icon here also indicating the same.
>
> **[2:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=169)** Now, if you already watched my video on adding form fields in Acrobat, you kind of understand how you have to kind of nest the tags within the text of the form, right?
>
> **[3:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=181)** And so what I'm going to do here, let's go ahead and change the name of this while we're here.
>
> **[3:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=187)** I'm going to type first name, and then again, while I'm here I might as well add the description, right?
>
> **[3:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=193)** So I'm going to go ahead and type, enter your first name here.
>
> **[3:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=200)** Now what you can also do you can also choose the font that you want to use down here, right?
>
> **[3:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=205)** Like maybe I want to use Myriad Pro Regular, right?
>
> **[3:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=210)** And maybe 11 point.
>
> **[3:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=211)** And again, you can make it whatever you want.
>
> **[3:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=214)** Now, what I'm going to do, I'm going to make a copy of this, right?
>
> **[3:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=218)** So using InDesign, I could just hold down my Alt key or my option key on Mac and just kind of drag this to make a copy.
>
> **[3:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=227)** And in the buttons and forms panel I can change this to say last name and then I can say, enter your last name here.
>
> **[3:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=237)** I like setting up one field with all the appearance attributes and then just making copies.
>
> **[4:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=243)** That way I don't have to re-enter that information over and over again.
>
> **[4:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=246)** Now, what I'm also going to do, let me go ahead and make a copy down here as well for the address, all right?
>
> **[4:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=256)** And enter your address here, right?
>
> **[4:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=263)** Now, what I also like to do and this is the tip I wanted to show you.
>
> **[4:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=267)** So I'm going to select this field and then what I want to do to kind of make sure that the field appears at the right location within my text I'm going to click on the anchor icon and I'm going to drag it so that the cursor is right after the text right in the field.
>
> **[4:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=286)** And I'll zoom in, maybe you can see this, yeah it's kind of hard to see, but this field is now anchored to that text in that position, okay?
>
> **[4:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=298)** Now, the problem with anchoring in my opinion is that I want to automate this, right?
>
> **[5:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=304)** I want to leverage this in a way that is going to be efficient, right?
>
> **[5:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=308)** And so what I'm going to do is I'm going to Alt click or Option click on this anchor icon to bring up my anchored object options.
>
> **[5:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=316)** And when you anchor an object in InDesign it always does it.
>
> **[5:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=320)** The reference locations don't make sense, okay?
>
> **[5:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=324)** So here's what I'm going to do.
>
> **[5:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=326)** I want the reference point of my object to be the lower left corner, right?
>
> **[5:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=331)** That makes a lot more sense to me, okay?
>
> **[5:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=334)** And then the anchored position, I want the X position which is a left to right position, I want to change that to the anchor marker, right?
>
> **[5:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=344)** And then the Y position can be relative to the baseline.
>
> **[5:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=347)** That makes sense.
>
> **[5:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=348)** Now, if you turn your preview on, it's going to get screwed up, right?
>
> **[5:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=353)** Like you're going to see it's going to move into a new position.
>
> **[5:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=355)** So what we could do is just change your X and Y offset to zero.
>
> **[6:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=360)** That way it'll kind of zero it back to where it was.
>
> **[6:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=363)** And then you can make some fine tune adjustments, right?
>
> **[6:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=368)** So I'm just kind of using my arrow keys and I think that looks pretty good, all right?
>
> **[6:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=374)** Now the reason I did that is because I'm going to show you how I like to build my form fields.
>
> **[6:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=384)** And what I'm going to do is I'm going to create an object style, all right?
>
> **[6:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=388)** And so what I'm going to do is I'm going to go to my Window menu I'm going to go to Styles, and I'm going to choose Object Styles.
>
> **[6:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=395)** And I'll go ahead and dock this over here with my other panels.
>
> **[6:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=398)** And what I'm going to do is I'm going to hold down the Alt or Option key and I'm going to click the Create New Style button.
>
> **[6:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=404)** Let's call this text form fields, all right?
>
> **[6:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=409)** Now my challenge with object styles is that it always wants to record way too much information.
>
> **[6:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=416)** If you look over here, it's recording the fill color, the stroke, the stroke options, way, way too much stuff.
>
> **[7:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=423)** So what I'm going to do is I'm going to hold down the Alt key on Windows or the Option key on Mac, and I'm going to click this and that's going to allow me to turn all of these off, okay?
>
> **[7:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=433)** And the only ones that I want to turn on I want to turn on size and position and then I'm going to click on that.
>
> **[7:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=444)** And in the size field, I'm going to choose height only, okay?
>
> **[7:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=449)** 'Cause I only wanted to record the height of the text field.
>
> **[7:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=454)** And then I'm going to come down here to Anchored Object options.
>
> **[7:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=459)** I'm going to turn that on and it's already recording everything that I already set, okay?
>
> **[7:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=467)** So I'm recording that property as well.
>
> **[7:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=469)** And then I could turn off transparency.
>
> **[7:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=472)** I could turn off all of these down here.
>
> **[7:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=475)** So the only thing I'm recording is anchored object options and size and position, okay?
>
> **[8:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=481)** So I'm going to click OK and now I'm going to apply that object style to that frame.
>
> **[8:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=487)** Okay, now this is where it gets really cool and oh, and by the way, when you apply that object style, you still have the ability to resize this to the width that you need.
>
> **[8:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=497)** Now check this out.
>
> **[8:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=498)** I'm going to select this guy here and I'm actually going to resize it on purpose, right?
>
> **[8:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=504)** 'Cause I want to show you something.
>
> **[8:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=505)** So I'm going to put it right there and I'm going to anchor it after the text for the last name.
>
> **[8:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=512)** Watch this.
>
> **[8:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=513)** When I apply my text form fields object style, it's going to move it into the exact position that I need, set the height of the form field.
>
> **[8:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=524)** And now the only thing I need to do is resize the field to the appropriate position.
>
> **[8:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=532)** Pretty cool, right?
>
> **[8:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=533)** So let me grab this one.
>
> **[8:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=534)** - And again, for demonstration purposes I'll just resize it, anchor it after address.
>
> **[9:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=542)** I'm actually going to make a copy of this before I do this, right, because I need a copy.
>
> **[9:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=547)** Oh, you know what?
>
> **[9:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=548)** I already anchored it.
>
> **[9:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=549)** Let me try it this way.
>
> **[9:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=551)** There we go.
>
> **[9:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=552)** Make a copy and let's go ahead and anchor that.
>
> **[9:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=556)** And again, when I apply the object style boom it makes it the exact tight, exact position and now I can just resize the width accordingly, okay?
>
> **[9:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=568)** So guys, you can repeat that step, right?
>
> **[9:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=571)** I mean I did that for the text field.
>
> **[9:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=573)** I need to go in and do the rest of those fields.
>
> **[9:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=576)** You could do the same thing down here for your check boxes and radio buttons, right?
>
> **[9:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=582)** So I could just kind of like draw a rectangle here with no fill and I can convert this in my buttons and forms panel to a checkbox, right?
>
> **[9:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=593)** And again, you can enter the tool tip the description, okay?
>
> **[10:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=600)** I can just kind of like make copies here, right?
>
> **[10:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=604)** To kind of save some time and then I can grab these guys here, there we go.
>
> **[10:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=613)** And I can make a copy of them for over here, right?
>
> **[10:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=619)** And then what I would do is very similar to what I did before.
>
> **[10:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=627)** I would anchor this right to the front of that text, right?
>
> **[10:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=633)** And then I would do another object style.
>
> **[10:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=637)** And I would call this check boxes, right?
>
> **[10:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=642)** And once again, turn off all of these.
>
> **[10:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=645)** Only turn on your size and position, only turn on your anchored object options.
>
> **[10:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=650)** Now, I didn't adjust this right away.
>
> **[10:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=654)** I would change this to anchor marker, lower right makes sense for that one.
>
> **[10:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=659)** And then we can zero this out.
>
> **[11:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=663)** And when I click OK and I apply that object style it may change position a little bit, it may adjust a little bit.
>
> **[11:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=672)** I can click on the Anchored Object option and I can just come in here and tweak the position to my liking.
>
> **[11:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=680)** And after I do that, you want to right click on the object style and just say redefined style, okay?
>
> **[11:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=686)** So again, you can leverage those object styles in a number of different ways for all of the form fields inside your document.
>
> **[11:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=698)** I hope you enjoyed this guys.
>
> **[11:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-indesign?u=76281980&t=700)** Like I said, InDesign is my preferred and favorite way to create fillable PDF forms because of its flexibility and power that it offers.

> [!info]- Semantic Content
>
> **CLI Commands:** make (14)
> **Code Keywords:** let (7), this, (4), type, (1), this. (1)
> **UI Navigation:** go to (4), click on (4), dropdown (1), checkbox (1)
> **Env Vars:** pdf (4)
> **Analogies:** kind of like (2), similar to (1)
> **Speakers:** - [instructor] (1), - and (1)
> **Definitions:** is a  (1)

#### Adding form fields in tables
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=0)** - Some forms utilize tables to organize the data.
>
> **[0:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=4)** Although this can be acceptable, and we'll talk about that in a minute, you need to take care in how you do this in InDesign.
>
> **[0:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=12)** So, let's walk through the process, and I'll show you the way that it works within InDesign.
>
> **[0:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=17)** Now, I have a form open here on my computer.
>
> **[0:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=20)** I'm using the 0506 file, that is in your exercise files folder.
>
> **[0:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=25)** And, I'm going to go ahead and zoom in on this table that's on the top of the page.
>
> **[0:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=31)** And, I want to talk for a second about the use of tables in general, right?
>
> **[0:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=37)** Using a table like this one, is an unacceptable use of a table, because you're providing a consistent user experience to the user, right?
>
> **[0:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=49)** I can make all of these row headers.
>
> **[0:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=53)** And so, as they're reading the table, they're going to read the row header, and then they're going to read the form field, okay?
>
> **[1:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=62)** What you don't want to do is try to build a table where you have first name, last name, you know, kind of, going horizontal, then city, state, zip, right?
>
> **[1:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=74)** So, effectively you have a table with two cells in a row, three cells in a row, then one cell in a row, as you know, I mean, that's going to create a regularity nightmare, right?
>
> **[1:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=86)** That's going to be really, really tricky to do, for one, but for two, it's not going to provide a consistent user experience.
>
> **[1:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=95)** So, that's why if you're going to use a table, you know, use something similar to what I'm showing you here, and that way, you know, the user is going to be able to navigate that table, without a problem.
>
> **[1:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=106)** Now, when it comes to adding form fields to the table, what a lot of people will try to do, and it's a pretty natural task, if you will, is that they'll come over here, and they'll click and drag to draw a form field, right?
>
> **[2:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=123)** And, we'll go ahead and fill this with "none," and then we'll go ahead and make this a text field, right?
>
> **[2:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=130)** And, they'll just, kind of, you know, continue down that way.
>
> **[2:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=134)** Let me, I'll copy one, here we go.
>
> **[2:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=137)** Maybe copy another one, right?
>
> **[2:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=139)** And so, the problem with this method, right, is that the form fields are in no way connected to the table.
>
> **[2:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=149)** To demonstrate this, I'm going to go ahead and export this to the PDF format.
>
> **[2:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=155)** And, if we take a quick look at our "tags" tree, what you're going to see is that you have, of course, you have all of your text, right?
>
> **[2:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=164)** You know, going all the way down.
>
> **[2:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=166)** Then your form fields show up, right?
>
> **[2:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=170)** That is not an ideal solution, because at the very least I'm going to have to fix it in the PDF after it's been made.
>
> **[2:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=178)** Okay?
>
> **[2:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=179)** So, I'm going to go ahead and go back to InDesign, and I'm going to go ahead and delete these now 'cause I do not want to use them.
>
> **[3:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=187)** And so, the better approach here is, what I'm going to do is, I'm going to click inside this field right here, I'm going to hit escape to highlight that cell.
>
> **[3:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=198)** And, one of the things we can do, is we could go to the table menu, and we could choose "convert cell to graphic cell," all right?
>
> **[3:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=209)** Now, effectively what that does, and you know what?
>
> **[3:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=212)** I'm going to undo that a second.
>
> **[3:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=214)** I'm going to change the height of all of these cells to be exactly a certain size.
>
> **[3:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=222)** That way when I convert it, it's not going to resize, okay?
>
> **[3:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=226)** So, I'll select a cell, go to table, convert cell to graphic cell.
>
> **[3:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=230)** And so, what it does fundamentally is, it basically, the cell gets converted into a frame, okay?
>
> **[4:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=241)** And, you might be like, "oh, well that's great," because now you can click on this with your selection tool.
>
> **[4:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=247)** You can come over here and convert this to a text field and, you know, expect this to work correctly.
>
> **[4:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=256)** But, I'm going to show you, if I export this again, you're essentially going to find the exact same thing, right?
>
> **[4:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=265)** Because, when you convert a cell to a graphic frame, you still have a frame that's floating on top of your table, all right?
>
> **[4:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=278)** So, still not quite what we're looking for, okay?
>
> **[4:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=283)** So, what you need to do, is you want to select the frame that you created, okay?
>
> **[4:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=290)** And, I'm going to cut it, all right?
>
> **[4:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=293)** And, then what I'm going to do is I'm going to click in this cell, because the term "convert cell to graphic cell," is a bit of a misnomer, because it's still a table cell, right?
>
> **[5:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=305)** It's still absolutely a table cell.
>
> **[5:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=308)** But, what I'm going to do is, I'm going to highlight all of these cells.
>
> **[5:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=311)** And, what I want you to do is, let's go ahead and open up our table panel.
>
> **[5:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=316)** Let's go to "window," "type & tables," "table."
>
> **[5:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=322)** And, down here in your text insets, set them to zero.
>
> **[5:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=328)** Okay?
>
> **[5:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=329)** I do that because I don't want what I'm going to do, to be pushed away from the edge of the cell, okay?
>
> **[5:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=337)** So, remember I copied that form field, and now if I click in this cell, and if I do a paste, now that form field is inside of the table cell, right?
>
> **[5:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=352)** So, I'm going to do it again.
>
> **[5:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=354)** I'm going to click in the second cell, highlight it, go to "table," "convert cell to graphic cell," click on it with my selection tool, cut it, and then I'm going to click in that cell with my type tool, and I'm going to paste, okay?
>
> **[6:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=369)** And so, that is the key here.
>
> **[6:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=373)** By pasting it, I'm putting the form field inside of the table cell.
>
> **[6:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=379)** I'm going to do this a couple more times.
>
> **[6:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=390)** Okay?
>
> **[6:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=391)** And so, now what I, you know, by doing that, I've really, kind of, changed the behavior, right, of what's happening.
>
> **[6:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=398)** Now, the other thing I forgot to do here, right?
>
> **[6:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=401)** I put the frame in the cell, but I now need to convert these to a text field, right?
>
> **[6:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=408)** So, I can just click on them, convert these to text fields.
>
> **[7:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=421)** And now, what I'm going to do is I'm going to re-export this, so you can see the difference.
>
> **[7:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=431)** So now, if I go to the "tags" tree, and I find my table, which is going to be in here, right?
>
> **[7:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=441)** You'll notice that if I look at my first row, I have the first TD, which contains the text first name.
>
> **[7:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=449)** But, in the second TD, it contains the form tag inside of the paragraph.
>
> **[7:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=456)** So, these are properly nested, right?
>
> **[7:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=461)** And, again, the huge advantage we get from exporting a form out of InDesign, is that the form fields are automatically tagged, right?
>
> **[7:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=469)** You know, if you, if you followed along with the video when I showed you how to do this in Acrobat, you know that we have to take a secondary step to tag the form fields after we create them.
>
> **[8:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=480)** InDesign does this automatically.
>
> **[8:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=482)** And, by making sure that I'm putting the form field inside of the cell, that is ensuring that my document is going to be structured appropriately.
>
> **[8:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-form-fields-in-tables?u=76281980&t=494)** So, if you leverage tables for forms in InDesign, just make sure you anchor them appropriately for the best possible results.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (2), continue (1), delete (1), for, (1)
> **UI Navigation:** go to (5), click on (3), select the (1)
> **CLI Commands:** make (3), find (2)
> **Env Vars:** pdf (2)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** similar to (1)

#### Defining tab order for form fields in InDesign
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=0)** - [Instructor] One of the things that's good to do for fillable PDF forms is to find the tab order for the form fields in the form.
>
> **[0:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=9)** This makes the form a better experience for everyone, right?
>
> **[0:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=14)** Not just users of assistive technology but also sighted users.
>
> **[0:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=19)** Because when you fill out a form where the tab order is incorrect, it's a very cumbersome experience, right?
>
> **[0:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=28)** I personally, when I fill out a form, I'm using the tab key to go from form field to form field.
>
> **[0:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=34)** I know not everybody does that, but if you do use that, it's a very fluid, very efficient experience.
>
> **[0:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=41)** InDesign gives you the ability to do this without having to move over to Acrobat.
>
> **[0:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=46)** So I'd like to show you here how we make that happen inside of Adobe InDesign.
>
> **[0:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=52)** So I'm starting here with the 05_07 document open on my computer.
>
> **[0:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=56)** And what we're going to do is we're going to come over here to the Object menu.
>
> **[1:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=61)** We're going to come down to Interactive, and we're going to choose Set Tab Order.
>
> **[1:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=67)** Now, this dialogue box, I wish it was a little more intuitive.
>
> **[1:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=72)** There's a few things about this that I don't really like.
>
> **[1:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=75)** One of which is I can't resize this box, right?
>
> **[1:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=79)** However, you can see in this Tab Order dialogue box, it is showing you all of your form fields and it's also showing you the order that they appear from top to bottom is the order that the tab order is for those form fields, okay?
>
> **[1:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=97)** Now, if something is out of order, you can click the Move Down button to move it down, or you can hit the Move Up button to move it up.
>
> **[1:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=108)** And so I'm just kind of going through here, and making sure that the order that I see in the Tab Order pane matches the visual order of my form fields in the form.
>
> **[2:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=122)** So I'm going to move down here.
>
> **[2:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=123)** I have Landscape Design, Landscape Contracting.
>
> **[2:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=127)** Now this might be one of those cases where maybe when they're tabbing, you want it to go across and then down, right?
>
> **[2:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=136)** So if that's the case, after Landscape Design, I would want Planting Plans.
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=143)** So what I'll do is I'll click on this, and click move up so that now it goes Landscape Design, Planting Plans, Landscape Contracting, then we want Hardscaping.
>
> **[2:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=154)** So I'll move that up.
>
> **[2:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=156)** I messed up there. Move down.
>
> **[2:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=158)** Planting Plans, Contracting, Hardscaping, then Sustainable Landscaping, Water Features, okay?
>
> **[2:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=165)** Oh, and then it reads the Note, if you notice here, so that's actually messed up.
>
> **[2:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=170)** I'm going to grab these three installation radio buttons and move them up.
>
> **[2:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=175)** That way, they appear after the Water Features.
>
> **[2:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=178)** Then I want my Note read, and then the Submit button.
>
> **[3:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=181)** Cool.
>
> **[3:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=182)** So that is it, guys.
>
> **[3:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=184)** So I'll go ahead and click OK, right?
>
> **[3:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=187)** And then what I'll do is I'll save this.
>
> **[3:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=190)** This will be my finish version, right?
>
> **[3:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=193)** Of course.
>
> **[3:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=194)** And then I'll go ahead and export this to a PDF.
>
> **[3:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=199)** You know what?
>
> **[3:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=201)** When you're exporting a form, it is critical that you use the PDF Interactive option, right?
>
> **[3:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=211)** You're probably aware that InDesign gives you two PDF options.
>
> **[3:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=214)** You have Interactive and Print.
>
> **[3:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=215)** Both of those methods will give you a tagged PDF.
>
> **[3:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=219)** Both of them can create an accessible PDF file.
>
> **[3:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=222)** However, only one of them is going to retain interactive features, such as form fields and buttons.
>
> **[3:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=230)** And that is the Interactive option.
>
> **[3:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=232)** So I'm going to make sure that I choose Interactive, okay?
>
> **[3:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=236)** And then I'll go ahead and save that.
>
> **[4:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=240)** And then if I want to kind of evaluate this and kind of make sure that everything was retained, what we can do is, if you come down here and click on Prepare Form, right here, you're going to see the same tab order that I set in InDesign, right?
>
> **[4:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=256)** So I have City, State, Zip, Daytime Phone, Email, Landscape, Planting, Contracting, Hardscaping, installation radio buttons, Note and Submit.
>
> **[4:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=267)** The tab order has been retained in the PDF that I exported, and to kind of demonstrate this to you, right?
>
> **[4:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=274)** If I kind of go through, Chad Chelius.
>
> **[4:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=293)** And then when I tab, it goes to Landscape Design.
>
> **[4:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=296)** I can hit Enter to choose it.
>
> **[4:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=297)** I can say, I want this one, I want this one, and then I can choose which radio button I want to enable.
>
> **[5:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=308)** And then, you know, you get the idea.
>
> **[5:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=311)** InDesign let's you set the tab order for your form fields very easily.
>
> **[5:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/defining-tab-order-for-form-fields-in-indesign?u=76281980&t=317)** I think it's a very, very powerful feature and it really saves me a ton of time in the long run because it saves me a trip from having to jump over to Acrobat to make it happen.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (7)
> **CLI Commands:** make (4), find (1)
> **Code Keywords:** case, (1), this, (1), this. (1), let (1)
> **UI Navigation:** click on (2), in the tab (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Working with InDesign-drawn objects
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=0)** - [Narrator] Objects that are drawn in InDesign are treated differently than other objects, such as placed images and text frames.
>
> **[0:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=8)** In this video, I'd like to show you the difference as well as some of the capabilities that can be applied to InDesign drawn objects.
>
> **[0:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=16)** Now, I'm sure you're looking at this document and you're thinking, "Boy, you know, this is as simple as it gets."
>
> **[0:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=23)** But I did this on purpose because I really just want to kind of focus on how InDesign treats different objects, okay?
>
> **[0:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=32)** And what I've done here, I've created three circles but each one of them is a different frame type.
>
> **[0:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=39)** This shape here is a text frame.
>
> **[0:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=44)** This shape here is a graphic frame and this shape here is an unassigned frame.
>
> **[0:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=50)** Now, if you're curious to know, you know, how to create these different frames, a couple of things to know, right?
>
> **[0:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=59)** The text tool is going to create a text frame though it's not going to create a circular frame, but it will create a text frame.
>
> **[1:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=66)** This shape here will create a graphic frame and this shape here will create an unassigned frame.
>
> **[1:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=72)** Now, that being said, whatever shape you draw, I'm going to draw another one here, okay?
>
> **[1:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=79)** Let's make this one red, just so we can see the difference, right?
>
> **[1:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=83)** And so the way in which you can convert a frame to a different type of frame is by selecting it, coming up to the object menu and going to content.
>
> **[1:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=95)** And this is where you can convert a shape to a text frame, an unassigned frame, or a graphic frame, okay?
>
> **[1:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=102)** So that's how you can get to those different frame types.
>
> **[1:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=107)** Okay?
>
> **[1:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=108)** Now what I want to show you is if I export this PDF, I just want to kind of illustrate the differences between the three, right?
>
> **[1:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=118)** So I'm going to go ahead and save this as a PDF, should export super quick, there we go.
>
> **[2:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=124)** And what I want to show you, I mean, if I open up my tags pane, right, you're going to see no tags available because there's just no content, okay?
>
> **[2:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=134)** However, if I go to my content pane notice that the text frame outputs as a path, the graphic frame outputs as a path, but the unassigned frame automatically gets artifacted.
>
> **[2:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=153)** Okay?
>
> **[2:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=154)** Now what's the significance of that?
>
> **[2:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=157)** Well, when you're trying to meet PDF/UA compliance, one of the errors you're always going to get is when you have untagged paths like these, okay?
>
> **[2:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=172)** And to demonstrate this, what I'll do is I'll grab that file I just exported and run it through the PAC checker.
>
> **[3:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=181)** And one of the errors you're going to get under the content category is path object not tagged.
>
> **[3:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=190)** And if I click on the first one, well, that's my empty text frame.
>
> **[3:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=195)** The second one is my empty graphic frame.
>
> **[3:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=199)** But notice that the unassigned frame always automatically gets artifacted, okay?
>
> **[3:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=207)** Now, you can leverage that knowledge as you design your products.
>
> **[3:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=214)** If you always make sure that if you're just using a shape for a background or for a sidebar, fill box or whatever it might be, if you take the time and always make sure that you set those frames to be an unassigned frame, they're automatically going to get artifacted, which is going to save you time when you're trying to meet compliance, okay?
>
> **[3:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=238)** So, you know, my recommendation is leverage that unassigned frame.
>
> **[4:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=243)** I mean, I can't tell you how many documents I look at where people have used a text frame as a background color for an object, and it doesn't contain any text but they used the text frame.
>
> **[4:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=257)** I think one of the reasons that happens is because there's a preference in InDesign.
>
> **[4:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=263)** If you go to your edit menu and choose preferences and go to type, there is a preference that says, "Type tool converts frames to text frames."
>
> **[4:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=275)** Right?
>
> **[4:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=276)** And that is enabled by default.
>
> **[4:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=279)** I'm not on my machine, but when I'm on my computer I always have this disabled, because when that's turned on if you accidentally click on an object with a type tool, it's going to convert it to a text frame.
>
> **[4:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=291)** And I think that's often how that happens in the documents that I'm looking at.
>
> **[4:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=296)** So keep that in mind, the different frame types will output in a different way.
>
> **[5:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=302)** Now, the other benefit we have when working with InDesign drawn objects, you know, a lot of times we will hand-draw a flow chart in InDesign or we'll hand-draw a bar chart or something like that.
>
> **[5:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=321)** One of the features of InDesign is that if you select an object and you go to the object menu and choose object export options, if you go to the alt text category and set the alt text source to custom, you can add alternate text to this shape.
>
> **[5:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=345)** So I'm going to type something like, this is my beautiful shape, right?
>
> **[5:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=351)** That's my alt text, okay?
>
> **[5:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=354)** And by doing that you are instructing InDesign to convert that object to a figure that contains the alt text that you added.
>
> **[6:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=368)** So I'm going to go ahead and export this to a PDF and when this opens, if I go to my tags pane, you're going to notice that no tags are available.
>
> **[6:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=383)** And you're like, "Well, boy, that's interesting."
>
> **[6:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=385)** Right?
>
> **[6:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=386)** Now, watch what happens if I go back to InDesign and I do the same thing on this object.
>
> **[6:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=397)** Okay.
>
> **[6:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=400)** Re-export.
>
> **[6:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=406)** And now if I go to my tags tree, you're going to see that that object has output as a figure.
>
> **[6:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=417)** And if I right-click on that and go to properties, the alt text that I added is in there and it has been tagged as a figure, okay?
>
> **[7:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=429)** So what you need to know and to just kind of illustrate this, if I take this object and I go to object, content, unassigned and let me make sure that it retained, yep, it retained my alternate text, if I export this now,
>
> **[7:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=454)** now I have two figures.
>
> **[7:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=457)** So there is power in using the unassigned frame, right?
>
> **[7:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=465)** When you use the unassigned frame on its own, the advantage is that it automatically will get artifacted in the exported PDF.
>
> **[7:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=475)** And if you have an element that you want to be tagged as a figure, make sure it's an unassigned frame and then you can export it and it will also be tagged as a figure.
>
> **[8:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=491)** I'll show you one last thing and that is that it also works on grouped objects.
>
> **[8:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=501)** So I'm going to do a copy, paste in place.
>
> **[8:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=510)** Let's do something fun here.
>
> **[8:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=525)** If I take all of these shapes, group them together, go to object export options, and add alt text...
>
> **[9:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=546)** When I export this to a PDF you will see that it also works on groups,
>
> **[9:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=562)** provided that it is an unassigned frame.
>
> **[9:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=567)** If I were to take this object and let me copy it,
>
> **[9:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=579)** I'm going to ungroup it, object, content, graphic.
>
> **[9:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=586)** If I group it again and add alt text to this,
>
> **[10:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=609)** it did actually work on a group of graphic frames.
>
> **[10:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=616)** So it actually does work on a group but on an individual graphic frame, it does not.
>
> **[10:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/working-with-indesign-drawn-objects?u=76281980&t=623)** So leverage InDesign's natural treatment of InDesign drawn objects to work more efficiently and to force InDesign to output content as you want it to.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (10), click on (2), right-click (1)
> **Code Keywords:** let (4), this, (3), type. (1), super (1), type, (1)
> **Env Vars:** pdf (6), pac (1)
> **Definitions:** is a  (4), is an  (2)
> **CLI Commands:** make (5)
> **Cross-References:** coming up (1), go back to (1)
> **Best Practices:** always make sure (2)
> **Analogies:** such as (1)

#### Text effects and accessibility
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=0)** - [Instructor] Text effects can be really fun and could create some really interesting visual appearances.
>
> **[0:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=6)** But when it comes to accessibility they can have some unintended consequences.
>
> **[0:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=11)** In this video, I'd like to demonstrate a problem that can occur when applying text effects in InDesign.
>
> **[0:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=17)** Now I'm starting here with the 0 5 0 9 document open on my computer.
>
> **[0:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=21)** And in this document I've simply created some text.
>
> **[0:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=26)** As you could see, I wrote the word accessibility and then what I did is I applied a stroke to that text.
>
> **[0:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=35)** Okay, it looks harmless enough, right?
>
> **[0:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=38)** I mean, this is an effect that, you know people use quite a bit, okay?
>
> **[0:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=45)** But what I've found out is that this can have some accessibility consequences that you may not be aware of.
>
> **[0:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=54)** And to be fair, you wouldn't know unless you tested this with a screen reader.
>
> **[1:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=61)** So what I'm going to do is I'm going to export this document to a PDF file.
>
> **[1:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=68)** And what I'm going to do, before I even dive into the tag stream, I'm going to open NVDA and just kind of show you what the experience is.
>
> **[1:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=77)** - [AI] Well you, 0 5 0 9 dot.
>
> **[1:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=82)** - [Instructor] Okay, so I'm going to read this document.
>
> **[1:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=85)** - [AI] Page one, accessibility, accessibility.
>
> **[1:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=88)** - [Instructor] Hmm, that was interesting.
>
> **[1:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=90)** So it read accessibility twice.
>
> **[1:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=93)** That's kind of weird.
>
> **[1:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=94)** Let me test that again.
>
> **[1:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=95)** - [AI] Accessibility, accessibility.
>
> **[1:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=97)** - [Instructor] Okay, so basically using my keyboard, I'm just reading the next item on the page, and as you can see it's reading it twice.
>
> **[1:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=105)** Why would that be?
>
> **[1:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=107)** Well, let me quit NVDA.
>
> **[1:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=108)** - [AI] Exit NVD- - [Instructor] And if I go into the tags tree, right, I mean this is a super simple document, right?
>
> **[1:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=115)** But if you go to the tags tree, well there is a P tag but if I open it up, there's two spans in there, each one of which contains the word accessibility.
>
> **[2:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=130)** So to be fair, I would probably classify this as a bug right?
>
> **[2:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=135)** I mean I think InDesign should probably be smarter than this but fundamentally I think what's happening is the outline is being treated as a second object and InDesign is just essentially tagging both of them.
>
> **[2:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=153)** Now, if you only have a little bit of this content in a document, it's a pretty simple fix, right?
>
> **[2:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=160)** I mean, all I have to do is select one of these, to be fair, it doesn't really matter which one, and I can right click on it and choose change tag to artifact and then click okay.
>
> **[2:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=171)** And now that this span tag's empty, I can just delete it.
>
> **[2:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=175)** Now I'm left with one instance of accessibility.
>
> **[2:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=179)** And so I can save this.
>
> **[3:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=181)** And if I reopen NVDA- - [AI] Okay, zero five left tags one slash one-
>
> **[3:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=191)** - [Instructor] Now if I read this...
>
> **[3:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=193)** - [AI] Page one, accessibility.
>
> **[3:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=194)** - [Instructor] Right, we only have one instance of accessibility.
>
> **[3:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=198)** So my suggestion to you is be wary of applying unique effects to text in InDesign.
>
> **[3:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=204)** If you are going to do it, make sure you test it with a screen reader to, you know understand what is actually being output.
>
> **[3:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/text-effects-and-accessibility?u=76281980&t=212)** And you know, when you use these effects what you get may not be exactly what you expect.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (7), - [ai] (6)
> **Code Keywords:** let (2), this. (2), super (1), delete (1)
> **Env Vars:** nvda (3), pdf (1), nvd (1)
> **Definitions:** is a  (2), is an  (1)
> **Non-Speech:** (upbeat chime) (3)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Warnings:** be aware (1)

#### Helpful scripts for accessibility
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=0)** - [Instructor] One of the huge strengths that InDesign has is the fact that it's an incredibly scriptable application.
>
> **[0:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=7)** If you don't understand what that means, it basically means that InDesign can be programmed to do automated tasks that can save us a ton of time.
>
> **[0:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=17)** When it comes to accessibility, we're all looking for ways to save time, so in this video, I'd like to introduce you to some scripts that can save you a ton of time and be extremely helpful.
>
> **[0:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=27)** And the first script I want to show you is a script that I co-wrote with a very good friend of mine named Keith Gilbert.
>
> **[0:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=39)** You can access Keith's script at [GilbertConsulting.com/scripts](https://GilbertConsulting.com/scripts) and the script that I'm talking about is a script called "Check Document for Accessibility."
>
> **[0:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=51)** And essentially what this script does for us, and again, if you're not familiar with scripts, what you're going to want to do is go to your window menu and go down to utilities scripts to open your scripts panel.
>
> **[1:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=66)** And if you right click on the user folder, you could say reveal in Explorer or reveal in Finder.
>
> **[1:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=73)** And basically that'll open up this folder and you basically want to copy your scripts into this folder.
>
> **[1:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=79)** That's pretty much all there is to it.
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=80)** And once you do, when you go to your scripts panel, the script is going to be there.
>
> **[1:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=86)** And this first script I want to show you is called "Check Document for Accessibility."
>
> **[1:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=90)** And when I run this script, you had a little, this is Keith, say hi to Keith, and I'm just going to go ahead and dismiss this.
>
> **[1:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=98)** And what the script does is checks your document for common problems, right?
>
> **[1:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=107)** And so when I ran this script, the script said, "Hey, you forgot to add a title for your document."
>
> **[1:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=115)** So it brings up a dialogue and says, "Hey, enter a title here."
>
> **[1:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=118)** So, very good.
>
> **[1:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=119)** I'm going to type "vegetables."
>
> **[2:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=122)** I'll just take vegetables, okay?
>
> **[2:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=124)** And I'm going to click okay and then it's going to continue running and when it's finished, it's going to give you a little bit of a report and tell you what it did.
>
> **[2:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=136)** And so one of the things that this script does, I mean it checks for a title.
>
> **[2:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=141)** What it also do is it looks at all of your styles that you've used, and we kind of created an algorithm that looks for styles of certain names.
>
> **[2:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=153)** And so what it did here is it located a style called bulleted copy and I've talked about this before where people will often map a bulleted style to a P tag.
>
> **[2:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=166)** And so what this did is it said, "Well, this is a bullet style, make sure it's mapped to automatic."
>
> **[2:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=171)** And then it also found the subhead style automatically mapped it to an H2.
>
> **[2:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=176)** It lets us know images that are missing alternate text so we could go back in there and fix that.
>
> **[3:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=183)** And then what it also did, a few videos ago I talked about the different frame types in Adobe InDesign and what script did is it found a whole bunch of empty frames and converted them to unassigned frames, or what it's calling contentless frames.
>
> **[3:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=202)** So the script is basically a method of helping to speed things along for you.
>
> **[3:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=209)** It's trying to address common errors, it's automatically mapping your styles to appropriate tags, and it's really a very cool script.
>
> **[3:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=219)** The other script I wanted to show you is a script that was written by my very good friend and colleague, Dax Castro.
>
> **[3:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=229)** And on his website, which is called [AccessibilityScripts.com](https://AccessibilityScripts.com), he has made a whole bunch of scripts available at a very, very affordable price.
>
> **[4:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=243)** What we all need to remember is that writing scripts is time consuming and involves a lot of R&D, a lot of invested time and so you could see these scripts are available for a very affordable price, right?
>
> **[4:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=258)** And I'm telling you, they are very worth it.
>
> **[4:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=262)** The one I wanted to show you is called the "Color Contrast Validator" and if you run this script, it asks you if you just want to compare two swatches or if you want to compare them all.
>
> **[4:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=275)** So I'm going to compare them all.
>
> **[4:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=276)** I'm going to click okay.
>
> **[4:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=278)** And what this script is going to do is it's going to generate combinations for all of the colors in your document.
>
> **[4:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=287)** Now, this is a very small document, but for bigger documents, you get a much bigger color palette.
>
> **[4:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=293)** And the DNP that you see there means Does Not Pass.
>
> **[4:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=299)** And what that means is that that color combination does not meet minimum color contrast, so we all are aware that we need to make sure that the content we create has sufficient color contrast for low-vision users, and there's a complimentary script to this called the CCV Switcher that will basically hide all of those colors that do not pass and now you can look at only the colors that pass minimum color contrast, so super helpful, super useful, and I highly encourage that you take a look at that.
>
> **[5:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=337)** The other one I show you, and this was created by DAX as well, and this is very relevant to what we just covered in the previous chapter where we talked about forms in Adobe InDesign.
>
> **[5:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=349)** We have a script called the "Meta Translator" And what this does, when I run this, it says, "What do you want to do?
>
> **[5:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=358)** Extract the descriptions or update them?"
>
> **[6:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=360)** And I'm going to extract them and what it does is it extracts all of the tooltips from every form field in your document.
>
> **[6:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=372)** Now, these form fields already have tooltips because we added them in there during the video, right?
>
> **[6:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=380)** However, if we didn't have anything, it would still create this file, but we could come in here or you could hand this off to somebody and they could add the tooltip for every one of these and add it in here.
>
> **[6:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=396)** And so what you can also do, I'm just going to change this.
>
> **[6:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=400)** Choose, let's just delete some of this.
>
> **[6:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=405)** Instead of choose the person, I'm just going to say, "Choose who."
>
> **[6:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=410)** Oh, we have a couple of who's there.
>
> **[6:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=413)** There we go.
>
> **[6:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=415)** So I've modified this.
>
> **[6:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=416)** Now what I'm going to do is I'm going to save this file and I'll just put it in my Chapter Five folder and I'll call this Tooltips.
>
> **[7:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=427)** And then the way this works is if I run this script again, now I can say, "Update the descriptions."
>
> **[7:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=434)** And when I choose that, it's going to ask me for the file that contains my tooltips.
>
> **[7:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=440)** When I click, okay, it is going to import that and if I now look at my buttons and forms panel, you could see that it updated the tooltip with the text that I put in there.
>
> **[7:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=456)** So this is what I call a workflow script because I say this quite a bit, you know, I mean, I, as a designer, am not a very good choice as a person who should be writing alt text for images.
>
> **[7:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=472)** I'm also not really a great person to write the tooltip for the form fields, but speaking of that, if we go back to the scripts, there's also a really good script that's also found on the Accessibility Scripts website there, [AccessibilityScripts.com/shop](https://AccessibilityScripts.com/shop), called the "Alt Text Extractor."
>
> **[8:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=494)** What this will do is it will create a file of every image in your document and then it'll give you the ability to write the alt text for all of those images.
>
> **[8:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=509)** And then you can use the alt text automator to pull that information and apply it to your InDesign document.
>
> **[8:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=518)** So that's just a quick showcase of some of the scripts that I love to use and I think you can see that some of these scripts are free, some of 'em are available for only a few dollars.
>
> **[8:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/helpful-scripts-for-accessibility?u=76281980&t=529)** I encourage you to take advantage of these scripts to speed up your workflow and honestly save you a ton of time.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (4), pass (3), super (2), continue (1), this, (1)
> **Definitions:** is a  (5), is called (3), basically means (1)
> **URLs:** [accessibilityscripts.com](https://accessibilityscripts.com) (2), [gilbertconsulting.com](https://gilbertconsulting.com) (1)
> **Env Vars:** dnp (1), ccv (1), dax (1)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** make (2)
> **Cross-References:** previous chapter (1), go back to (1)
> **Speakers:** - [instructor] (1)

#### The MadeToTag plugin
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=0)** - [Instructor] Throughout this course, we've seen a lot of powerful things that InDesign can do to help us create accessible PDF files.
>
> **[0:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=7)** But to be fair, we've also seen some areas where it fails.
>
> **[0:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=11)** I always say that I work under the 80/20 rule where I do about 80% of the work in InDesign and then I always have about 20% of cleanup to do after exporting to the PDF format.
>
> **[0:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=24)** The MadeToTag plugin by Axaio Software changes that ratio to about 97/3.
>
> **[0:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=30)** MadeToTag does a ton of things behind the scenes or under the hood so to speak that makes [[Creating Accessible PDFs]] from InDesign a whole lot easier.
>
> **[0:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=40)** Now I want to give you a super quick demo of MadeToTag.
>
> **[0:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=44)** I don't have enough time in this course to kind of you know, cover this soup to nuts, but I have the MadeToTag plugin open over here on the right side of my screen and MadeToTag divides the process of making an accessible PDF file into about seven different tasks.
>
> **[1:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=62)** And you can see the first task is to find and review export tags.
>
> **[1:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=67)** Well, what's really cool is if I click in this text here you could see it tells me what style I'm using and what tag it's being mapped to.
>
> **[1:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=77)** If I click up here, same thing.
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=80)** And if I click down here, same thing, right?
>
> **[1:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=83)** And I can always change what it's being mapped to by simply clicking on the dropdown menu.
>
> **[1:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=91)** And you might notice that MadeToTag gives us tags that are more than what InDesign natively offers us, which is pretty cool.
>
> **[1:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=102)** The next task, and you know where normally in InDesign the use of the articles panel is optional, MadeToTag does require you to use the articles panel, okay?
>
> **[1:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=114)** And so, you know, if you click on an object you can add it to the articles panel here.
>
> **[2:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=122)** But I'm just going to open my articles panel directly and you could see that I don't have items added here.
>
> **[2:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=128)** So I'm going to go ahead and move this guy into the article and then we'll move this guy in there.
>
> **[2:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=136)** That looks pretty good.
>
> **[2:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=138)** Perfect.
>
> **[2:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=140)** The next thing is to add alternate text.
>
> **[2:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=142)** Now I don't really have any images in this document although I do have one way over here and if I wanted to I could just click in here and write the alternate text.
>
> **[2:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=152)** No need to open a dialogue, no need to go to a menu it's just right here.
>
> **[2:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=156)** And I can add the alt text right here.
>
> **[2:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=159)** If I go to the next task, the next task is review your document metadata.
>
> **[2:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=164)** I don't have any metadata in this document so I'm going to go ahead and add that now.
>
> **[2:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=168)** Go ahead and call this sides and appetizers.
>
> **[2:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=173)** And the author here is, I'll just type my name.
>
> **[3:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=180)** The next task.
>
> **[3:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=183)** And this section is really cool if you do any multilingual documents, right?
>
> **[3:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=189)** I have a number of clients in Canada who have to do English and French.
>
> **[3:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=194)** Number of clients in the US that do English and Spanish.
>
> **[3:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=196)** You know, whatever language you do what's really, really cool is I can highlight text and right down here where it says "language for text selection," I can just apply whatever language I need to that text.
>
> **[3:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=210)** So MadeToTag makes it really easy to do multilingual text.
>
> **[3:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=216)** Now the next task, and this is by far my favorite and I'm using this particular document on purpose because if you recall, in order to make this table compliant we covered how to do this two different ways.
>
> **[3:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=234)** One was using the header cell IDs the other was totally reconfiguring the cells as row headers, right?
>
> **[4:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=242)** This is where MadeToTag is worth the price alone, okay?
>
> **[4:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=249)** And I'm going to show you why.
>
> **[4:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=251)** I'm going to click in this table and when I do, you'll see down here in task six, I can use the InDesign define column headers.
>
> **[4:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=260)** I can use quick headers, which is really cool because I get say give me one row header and one column header, right?
>
> **[4:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=267)** Super simple.
>
> **[4:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=269)** I can mark this table as a layout table.
>
> **[4:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=272)** Super cool.
>
> **[4:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=273)** But what I'm going to do for this one is I'm going to turn on smart headers and I'm going to turn on the checkbox to activate smart headers editing mode.
>
> **[4:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=284)** Now what I can do here is I'm going to click and drag across these two cells, which is the main header in my table.
>
> **[4:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=295)** And by doing that I'm saying you selected cells are header cells.
>
> **[5:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=302)** Now, if I hold down the control key on Windows or the command key on Mac, I can click and drag to highlight all of these cells to tell MadeToTag that they are children of that header.
>
> **[5:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=317)** Now I can highlight the tuber cell.
>
> **[5:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=321)** I've just made that cell a header.
>
> **[5:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=325)** Now I can control or command drag on these cells to tell MadeToTag that they are children of the tubers header.
>
> **[5:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=334)** Now I'm going to do vegetables.
>
> **[5:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=337)** I'm going to control drag to tell MadeToTag that they are children of that header cell.
>
> **[5:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=343)** I am now finished making this table compliant.
>
> **[5:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=348)** So if you compare this method to the method that we covered in previous videos, I think I achieved this in maybe 45 seconds where I think the video alone for me showing you how to do this was probably over 10 minutes, okay?
>
> **[6:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=366)** And I didn't even complete the table, okay?
>
> **[6:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=370)** And then the next task in MadeToTag is to export the PDF, right?
>
> **[6:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=378)** So what I'm going to do is I'm going to go ahead and view the PDF after exporting.
>
> **[6:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=383)** I'm just going to change the fitting options down here.
>
> **[6:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=386)** And then you'll notice MadeToTag has its own create PDF button.
>
> **[6:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=392)** So I'm going to go ahead and export this.
>
> **[6:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=395)** Actually, let me do a Save As on this.
>
> **[6:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=398)** Call this finish.
>
> **[6:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=404)** Now I can export this as a PDF.
>
> **[6:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=409)** And just to quickly demonstrate, what I did to that table was basically create header cell ID associations.
>
> **[6:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=419)** And if I select one of these cells and I go to table cell properties, you can see that the little bit of work I do created header cell ID associations for every cell in that table.
>
> **[7:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=434)** And to show you what that really did I'm going to grab that PDF that I just exported and run it through the pack checker and you'll see that there's one error, right?
>
> **[7:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=448)** And that error, and this is what I mean by like the 97/3 rule, right?
>
> **[7:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=453)** I literally have one error in this document.
>
> **[7:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=455)** And that's because, let me actually show you.
>
> **[7:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=459)** That's because the table because it was anchored into the paragraph right down here, there's a section tag inside of the P tag.
>
> **[7:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=471)** So what I'm going to do is just pull these guys out of there, delete that tag and just move it.
>
> **[8:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=485)** There we go.
>
> **[8:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=486)** Just move it in the right spot.
>
> **[8:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=488)** And if I go back to the pack checker and refresh that, you'll see that this is now 100% PDF/UA compliant.
>
> **[8:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=496)** We can even check for WCAG.
>
> **[8:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=498)** And you can see that it's also a 100% WCAG compliant.
>
> **[8:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=503)** MadeToTag is available as a free 30 day trial.
>
> **[8:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=508)** You can get to it by going to [axaio.com](https://axaio.com).
>
> **[8:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=511)** That's [axaio.com](https://axaio.com).
>
> **[8:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=514)** And I really highly encourage you to give it a try.
>
> **[8:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-madetotag-plugin?u=76281980&t=517)** I mean, if you do PDF accessibility out of InDesign this is definitely a must-have tool.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (10), wcag (2)
> **Code Keywords:** super (3), this. (2), let (2), require (1), delete (1)
> **UI Navigation:** go to (3), dropdown (1), click on (1), checkbox (1)
> **Cross-References:** we covered (2), go back to (1)
> **CLI Commands:** find (1), make (1)
> **URLs:** [axaio.com](https://axaio.com) (2)
> **Speakers:** - [instructor] (1)


### 6. PDF/UA Remediation

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Understanding PDF/UA
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-pdf-ua?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-pdf-ua?u=76281980&t=0)** - [Instructor] In this video, I wanted to talk about understanding PDF/UA.
>
> **[0:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-pdf-ua?u=76281980&t=5)** The UA in PDF/UA stands for Universal Accessibility and PDF/UA is a recognized standard for identifying if a PDF file is, in fact, accessible and compliant.
>
> **[0:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-pdf-ua?u=76281980&t=23)** The PDF/UA standard is a world-recognized standard for PDF accessibility compliance.
>
> **[0:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-pdf-ua?u=76281980&t=30)** The PDF/UA standard is an ISO Standard.
>
> **[0:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-pdf-ua?u=76281980&t=34)** It's part of ISO Standard 14289-1 and it is a recognized standard, again, for validating and confirming that a PDF document is accessible.
>
> **[0:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-pdf-ua?u=76281980&t=47)** The PDF/UA standard differs a bit from the WCAG Standard.
>
> **[0:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-pdf-ua?u=76281980&t=51)** Where the WCAG Standard is somewhat theoretical in nature and leaves a lot to interpretation, the PDF/UA Standard is a much more technical standard and the PDF/UA standard offers specific benchmarks that determines if our PDF documents are accessible.
>
> **[1:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-pdf-ua?u=76281980&t=73)** So you may be asking, "How do we check our documents against the PDF/UA standard?"
>
> **[1:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-pdf-ua?u=76281980&t=79)** Well, the PAC 2021 checker is a freely available tool, available for the Windows platform and you can download it right now if you go to pdfua.foundation, you can download the PAC 2021 checker right there.
>
> **[1:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/understanding-pdf-ua?u=76281980&t=98)** For the rest of this chapter, we're going to be utilizing the PAC 2021 checker to check our documents against the standard and to identify problems in our file and throughout this chapter, I'm also going to show you how to fix common errors that you may see when running documents through the PAC 2021 checker.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (13), pac (4), iso (2), wcag (2)
> **Definitions:** is a  (5), stands for (1), is an  (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### Reviewing the PAC 2021 Checker
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=0)** - [Instructor] The PAC 2021 Checker is a powerful tool that we can use to confirm that our files meet both PDF/UA and WCAG standards.
>
> **[0:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=9)** If you and your organization are striving to meet accessibility standards, the PAC 2021 Checker is your new best friend.
>
> **[0:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=17)** In this video, I'd like to give you a quick review of how to use it and the features that it provides.
>
> **[0:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=23)** So I'm starting this video with the PAC 2021 Checker already open on my computer, and the PAC 2021 interface is pretty simple at first glance.
>
> **[0:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=36)** But the way the PAC Checker works is we basically run a file through the checker, it evaluates the file, and then it gives us the results.
>
> **[0:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=46)** We can run a file a couple of different ways.
>
> **[0:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=49)** One option is we can click on this button up here in the upper left corner, we can browse for our file, and choose it, and run it that way.
>
> **[0:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=59)** Another way you can do it is via a more gooey interface, and that is to drag a file and drop it onto that button, and the PAC Checker will evaluate that file and give you the results.
>
> **[1:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=75)** Now, you'll notice that in the PAC 2021 Checker, we have two tabs up here.
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=80)** One is giving you a result for PDF/UA Compliance.
>
> **[1:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=86)** The other one is giving you a result for WCAG Compliance, okay?
>
> **[1:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=91)** And so this particular file meets both of those standards.
>
> **[1:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=95)** It is, to be fair, a fairly simple file, but it does, in fact, meet the standards.
>
> **[1:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=101)** Now, one of the cool things about the PAC Checker is that down here at the bottom, we can click on Results in Detail.
>
> **[1:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=109)** And this is a really powerful option because when you do, in fact, have an error, you can open up that category, drill down to the error, and if you double-click on the error, it'll give you a preview of the offending object in the document, which is really, really powerful, okay?
>
> **[2:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=130)** The other thing that the PAC 2021 Checker provides is a Screen Reader Preview.
>
> **[2:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=137)** So if you click on that button, it's going to give you a rendering of your document, and it's pretty much an HTML rendering.
>
> **[2:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=147)** If you remember this file, we had a heading up here, and the PAC Checker is showing you what tag is applied to the various texts.
>
> **[2:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=156)** So you can see we have an H1, an H2, a P, an H3, and then we have our table down here, right?
>
> **[2:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=164)** And if you recall, this was our complicated table.
>
> **[2:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=168)** And you could see that the vegetable and cooking time is a header, tubers is a header, as well as vegetables.
>
> **[2:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=176)** Then down here at the bottom, we have some other text that is in this file as well.
>
> **[3:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=181)** So the Screen Reader Preview is a really great tool for evaluating your document quickly.
>
> **[3:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=188)** Still, in my opinion, no substitute for testing with a screen reader, but it really is a powerful feature because you can quickly take a look at your document and you can often identify problems when they exist.
>
> **[3:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=203)** The other thing we have is the Logical Structure button.
>
> **[3:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=207)** And what this does is it actually allows you to kind of analyze the logical structure of your document.
>
> **[3:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=213)** If you open this up, this is going to show you the tag structure of your document, right?
>
> **[3:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=219)** Now, we don't get a preview in this mode, but it is kind of showing us the logical structure of our document.
>
> **[3:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=226)** If you click on the Artifacts tab, it'll show you any artifacts that are in your document as well.
>
> **[3:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=232)** And in this particular file, there's a whole bunch of paths that have been artifact.
>
> **[3:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=238)** Over here to the right, we have our properties.
>
> **[4:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=240)** As you click on an object, it'll give you properties of that object.
>
> **[4:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=245)** We can go to a Page View to kind of see a preview.
>
> **[4:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=248)** And as you click on the various elements, it highlights it on the page, so you can see what the tag is correlating to.
>
> **[4:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=258)** And then, we can also see the Rolemap.
>
> **[4:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=261)** We're going to talk about this Rolemap a little bit later, but the Rolemap is basically mapping your InDesign styles to an appropriate tag, all right?
>
> **[4:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=270)** And then finally, we have a Document Statistics button.
>
> **[4:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=274)** And this is just kind of an interesting statistics window, kind of telling you how many P tags you have, how many H1s you have, so on and so forth.
>
> **[4:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=283)** So kind of some interesting information.
>
> **[4:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=286)** Now, one of the things that's great about the PAC 2021 Checker relevant to your workflow, when you are remediating a file for a client, they often want proof that their document is, in fact, compliant.
>
> **[5:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=302)** And you'll notice that there is a PDF Report button down here, and if you click on that button, it's going to generate a report.
>
> **[5:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=312)** And I'll just save this into my Chapter 6 folder.
>
> **[5:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=315)** It's going to generate a report, and then it'll open it up in Acrobat, and it'll show you the report.
>
> **[5:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=322)** And this is something you can provide to your client.
>
> **[5:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=325)** And you can see right here, it's telling the client that this document fulfills all the requirements of the PDF/UA standard, and it gives them statistics down here.
>
> **[5:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=335)** Similarly, in the PAC Checker, if you click on the WCAG tab and click the PDF Report button, this is going to generate a WCAG Report.
>
> **[5:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=347)** So you can see here it says, "The WCAG 2.1 requirements checked by PAC are fulfilled."
>
> **[5:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=353)** And then, again, it gives statistics down here of all the elements that are in the document.
>
> **[5:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=359)** So I think you could see that the PAC Checker is incredibly powerful.
>
> **[6:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/reviewing-the-pac-2021-checker?u=76281980&t=364)** Very, very useful for somebody like you and me who does document remediation, and it makes it really easy to evaluate a document for compliance and will help you to identify common errors that prevent your file from being compliant as well.

> [!info]- Semantic Content
>
> **Env Vars:** pac (14), pdf (5), wcag (5), html (1)
> **UI Navigation:** click on (8), double-click (1), go to (1)
> **Definitions:** is a  (8)
> **Code Keywords:** interface (2), finally, (1)
> **Versions:** 2.1 (1)
> **Speakers:** - [instructor] (1)

#### The Preflight panel
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=0)** - [Instructor] Of all the tools that Acrobat has to offer, the preflight panel, in my opinion, is one of the most powerful.
>
> **[0:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=6)** It's a bit hidden so unless you know about it, you wouldn't even know that it's there.
>
> **[0:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=10)** But as you'll see, it's going to help us address a ton of errors that you're likely to encounter when checking your files against the PDF/UA standard.
>
> **[0:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=18)** Now, you can access the preflight panel from the print production tool.
>
> **[0:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=24)** More than likely it's not going to be over here in your tools, so you can come over here to the tools tab, and if you scroll down to Protect & Standardize, you can click the add button to add the print production tool over here to your tools.
>
> **[0:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=42)** Now, another way you can access it and honestly the way that I typically do it is I just come up here into the search tools field and type P-R-E.
>
> **[0:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=53)** And the first thing that pops up at the top here is your preflight panel.
>
> **[0:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=57)** So I'm going to go ahead and click on that and that's going to open up my preflight panel.
>
> **[1:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=62)** Now I will say, in my opinion, the preflight panel is definitely a bit confusing.
>
> **[1:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=69)** There's so many combinations that you can choose here, right?
>
> **[1:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=74)** I mean, we have a menu up here at the top with a bunch of options.
>
> **[1:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=81)** We have three buttons here to choose from.
>
> **[1:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=85)** And we could choose three buttons for every choice we make up here, okay?
>
> **[1:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=90)** So this is how I want you to configure this, okay?
>
> **[1:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=94)** Up here at the top in this dropdown, we're going to choose PDF standards.
>
> **[1:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=101)** And once you have that category chosen, we're going to click on the little wrench icon here and that is going to show us all of the fix ups available under PDF/UA standards.
>
> **[1:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=114)** And honestly, that's where all of our fix ups are going to be located.
>
> **[2:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=120)** So you could see here we have color spaces, spot colors, and inks.
>
> **[2:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=125)** We have document; a ton of them in there.
>
> **[2:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=128)** We have document info and metadata.
>
> **[2:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=131)** We have interactive elements, page contents, and then, of course, pages.
>
> **[2:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=137)** So that is the section of the preflight panel that we're going to be using.
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=143)** And in the next several videos, we're going to be leveraging this panel to fix a bunch of problems that we're going to be running into.
>
> **[2:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/the-preflight-panel?u=76281980&t=153)** So get ready, guys, for the rest of this chapter, we're going to be utilizing this preflight panel to fix errors to make our files PDF/UA compliant.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (4)
> **UI Navigation:** click on (2), scroll down (1), dropdown (1)
> **CLI Commands:** make (2)
> **Code Keywords:** from. (1), this, (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Artifacting nonstructural elements
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=0)** - [Narrator] One of the things that makes a PDF document accessible is that every item in the document has a tag which identifies what it is and what its purpose is.
>
> **[0:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=11)** Now, this applies to all objects and this is important to understand, but many source applications fail to tag paths in a document such as lines, shapes, and borders on tables.
>
> **[0:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=24)** This failure generates an error in the PAC 2021 Checker of untagged paths.
>
> **[0:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=30)** In this video, I'd like to show you how to fix these errors when they occur.
>
> **[0:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=34)** Now, I'm starting here with the PAC Checker open and we're going to be working with the 06_04 file.
>
> **[0:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=41)** And I'm going to go ahead and drag this and drop it onto the PAC Checker.
>
> **[0:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=45)** Now, this is a typical scenario that you would run into.
>
> **[0:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=50)** This particular file I generated from Microsoft Word, I will tell you, I purposefully saved it as a PDF using the Save As method or the Microsoft method because it generates an error of unembedded fonts.
>
> **[1:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=66)** And that's something I wanted to show you how to fix, so I figure why not use that to make it easy.
>
> **[1:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=71)** But you could see here in the PAC Checker, I have quite a few errors.
>
> **[1:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=78)** And the area that I want to focus on in this video, if we come down here and click on Results in Detail, we can come up here to the content category and you'll see that there's a category called Tagged Content and Artifacts and I have 151 errors.
>
> **[1:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=95)** Now, that looks really gnarly, right?
>
> **[1:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=96)** You're like, oh my gosh, I have 151 errors to fix.
>
> **[1:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=100)** This is going to take forever.
>
> **[1:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=102)** But if you click on these path objects that are not tagged, you'll notice that, and this is very, very typical, it's every border of every cell in the table.
>
> **[1:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=114)** And it's just a failure of the source applications.
>
> **[1:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=118)** InDesign does it. Word does it.
>
> **[2:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=120)** And so you're likely to run into this error pretty regularly.
>
> **[2:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=124)** So how do we fix it?
>
> **[2:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=126)** Well, what I'm going to do is open this file in Acrobat and we're going to go to our preflight panel.
>
> **[2:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=133)** So I'm going to go ahead and come down to Print Production, click on Preflight.
>
> **[2:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=138)** And as a reminder, you want to make sure that PDF Standards is chosen up here at the top.
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=143)** And then you want to click on the wrench icon and that's going to show you everything that you need.
>
> **[2:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=149)** And what I like to do, just so that I can always see everything, I open up all of these categories.
>
> **[2:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=156)** That way, I can just kind of see everything, see all of the options that I have.
>
> **[2:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=161)** And so to fix the problem that we're presented with here, we're going to go to the document category here and you're going to see that I have a fix up which is called mark all non-structure elements as artifact.
>
> **[2:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=177)** And that's exactly what we wanted to do.
>
> **[2:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=179)** I mean, we were getting a PAC error that says untagged paths and it says non-structure elements because if you have an untagged paragraph, it will not artifact that.
>
> **[3:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=193)** It'll only artifact non-structure elements, which are paths.
>
> **[3:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=197)** So with that selected, I'm going to click the Fix button and it's going to ask me to save this file as a new version.
>
> **[3:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=205)** So as I go through this chapter, I'm just going to save each one as a finish version.
>
> **[3:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=210)** That way, you can reference it later on as you're watching this course.
>
> **[3:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=215)** And what I want to point out if I go back to the PAC Checker, you'll notice that in the content category, I have 151 errors.
>
> **[3:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=224)** If you look at the preflight report, it fixed 151 objects.
>
> **[3:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=229)** And that's not like a coincidence.
>
> **[3:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=232)** It literally found 151 paths in this document that were not tagged and now has fixed it.
>
> **[3:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=239)** So if I come back here and rerun the finish version, if you look at the content category, you could see that under that category, everything now passes.
>
> **[4:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=254)** So this is where the preflight panel, honestly guys, is worth its weight in gold because we just fixed 151 errors in a few seconds.
>
> **[4:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=263)** To do that manually would take a considerable amount of time.
>
> **[4:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/artifacting-nonstructural-elements?u=76281980&t=266)** Yay, preflight panel!

> [!info]- Semantic Content
>
> **Env Vars:** pac (6), pdf (3)
> **UI Navigation:** click on (4), go to (2)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), is called (1)
> **Cross-References:** go back to (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Fixing element used as a root element error
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=0)** - [Instructor] This next error we get when our tags are not properly nested inside of a root tag.
>
> **[0:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=6)** It's pretty easy to fix.
>
> **[0:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=8)** However, the situation generates a lot of what I call false positives.
>
> **[0:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=12)** It creates a bunch of errors in the PAC 2021 checker that look like a big deal, but really aren't.
>
> **[0:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=18)** Let me show you how to fix this problem.
>
> **[0:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=21)** So I've already run the 06_05.pdf file through the PAC 2021 checker.
>
> **[0:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=27)** And if I take a look at the results in detail and you go down to the Logical Structure area, you'll notice that in the structure elements we have some errors, but I really want to point out under the category of Structure Tree.
>
> **[0:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=44)** You'll notice that the TOC structure element says TOC element used as a root element.
>
> **[0:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=51)** It also says H1 used as a root element.
>
> **[0:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=55)** It also says H2 and H3 and all of these, right?
>
> **[1:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=60)** And so this looks super ugly, guys, right?
>
> **[1:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=62)** I mean, look, we have 212 errors under the P tags.
>
> **[1:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=66)** And you're like, "Oh my gosh, what's going on?"
>
> **[1:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=68)** So if we go to our PDF file, and we open our Tags tree, one of the requirements of PDF UA is that there's a root element in the Tags tree.
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=80)** And if you're not familiar with that term, a root element is an element that contains all other tags.
>
> **[1:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=89)** And so what's happening here is all of these tags are living at the root element of the tag structure.
>
> **[1:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=97)** And that's why we're getting all these crazy errors.
>
> **[1:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=101)** The PAC checker's not smart enough to just say, "Hey, you're missing a root tag."
>
> **[1:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=107)** Instead, it generates all these extra errors that look really scary, but really aren't.
>
> **[1:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=113)** So, in a normal document, the root element is a tag called document, okay?
>
> **[2:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=121)** And so what we could do, I'm just going to like click up here on this P tag.
>
> **[2:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=126)** I'm going to right click and say New Tag.
>
> **[2:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=128)** And in the Type dropdown menu, I'm going to choose Document.
>
> **[2:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=133)** Okay, so it created that new Document tag, and I'm just going to slide that Document tag all the way up to the top so that it's the first tag in there.
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=143)** And then what I'm going to do, and this might take a couple of seconds, because we're selecting a whole bunch of tags, but I'm going to click on the first tag.
>
> **[2:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=151)** Or maybe I'll do it this way.
>
> **[2:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=152)** I'm going to click on the last tag, then I'm going to scroll up to the top and Shift + click on the first tag.
>
> **[2:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=159)** And Acrobat's going to crank through this and select all these tags.
>
> **[2:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=165)** And then with all those tags selected, I'm going to drag them up and nest them inside of that Document tag.
>
> **[2:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=173)** And now you can see that all of those tags are nested inside of the Document tag, which is now behaving as the root tag, okay?
>
> **[3:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=183)** So what I'll do is I'll do a Save As on this, and I'll call this one 05_06_finish, again, so that if you want to take a look at my file, you can.
>
> **[3:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=195)** And then I'm going to drag this onto the PAC checker.
>
> **[3:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=201)** And if I look at my results in detail, and now go down to Structure Tree, see how most of these are now passing, right?
>
> **[3:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=209)** I'm no longer getting the root element error.
>
> **[3:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=213)** I'm getting some different ones, but all of those root errors have now been fixed.
>
> **[3:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=219)** So to be fair, most source applications do put all of your tags in a root tag.
>
> **[3:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=224)** However, you're likely to encounter this error in documents that you tag from scratch.
>
> **[3:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-element-used-as-a-root-element-error?u=76281980&t=229)** So watch out for it and fix it if you notice it.

> [!info]- Semantic Content
>
> **Env Vars:** pac (4), toc (2), pdf (2)
> **UI Navigation:** click on (3), go to (1), dropdown (1), scroll up (1)
> **Code Keywords:** let (1), super (1), this, (1)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** watch out (1)
> **Speakers:** - [instructor] (1)

#### Fixing inappropriate use of an element error
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=0)** - [Instructor] The inappropriate use of an element error occurs either when an element is in an illegal position in the tags tree or when an element's placement attribute is incorrect.
>
> **[0:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=11)** Let's take a look at how to address these problems when they occur.
>
> **[0:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=16)** Now, the first thing I'm going to do is run this file through my pack checker, the file I'm working on is 06_06, so I'm going to go ahead and run this through here.
>
> **[0:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=27)** And if we look at our results in detail and go to the structure tree, you'll see that I have possible inappropriate use of a P structure element.
>
> **[0:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=37)** This one's similar.
>
> **[0:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=38)** This one, it's calling invalid use of a TBody structure element, this one is inappropriate use of a note, and then we have inappropriate use of a figure, okay?
>
> **[0:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=50)** So let's see how we can fix these errors.
>
> **[0:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=52)** So if I click on this error, you can see it's pointing to the footnote on page 8.
>
> **[0:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=59)** So what I'm going to do is I'm going to jump to page 8 in my PDF, and I'm going to find that tag, right.
>
> **[1:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=69)** Now, again, what we're looking at here, this is a problem with the source application, okay?
>
> **[1:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=75)** You would not know this other than me telling it to you, (laughs) but no tags are allowed inside of a note element.
>
> **[1:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=84)** The only thing that you can have is marked content.
>
> **[1:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=88)** And while I'm talking about that, the same thing applies to the caption tag as well, okay?
>
> **[1:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=95)** So the source application created the note, which was correct, but then it put a P tag inside of the note.
>
> **[1:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=102)** So to fix this, I'm just going to grab the marked content out of the P tag, still keeping it in the note, and then I could just delete that empty P tag, okay?
>
> **[1:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=115)** Then let's look at our other error.
>
> **[1:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=117)** We have the P tag, then we have, oh, on page 19, invalid use of TBody, okay.
>
> **[2:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=123)** So let's jump over to our PDF and go to page 19, and if I find this, what's happening here in the source application, because I didn't define a row header, there's no THead tag, right?
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=143)** And the problem is it automatically made a TBody but you can't have a TBody unless you have a THead, right?
>
> **[2:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=152)** So to be fair, the THead, TBody, and TFooter are all optional tags.
>
> **[2:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=158)** They're not at all required.
>
> **[2:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=160)** So to fix this, I'm just going to move the rows out of the TBody and then we'll just delete that empty TBody, right?
>
> **[2:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=168)** That'll take care of that.
>
> **[2:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=170)** The next one is the note itself, okay?
>
> **[2:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=174)** And you know what, okay, this is a good time to cover this.
>
> **[2:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=178)** The note itself, we're getting in error, and also on the figures, let me see, starting at page 1 to page 13, okay.
>
> **[3:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=188)** So this is a little bit of a different situation, and I want to explain this to you.
>
> **[3:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=194)** Let's go back to page 8.
>
> **[3:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=197)** And so if I find that tag, right?
>
> **[3:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=201)** Again, knowledge is everything, guys, right?
>
> **[3:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=204)** And so in this case, you know, you're like, "Well, I don't know what's going on.
>
> **[3:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=209)** I mean, all it is a note tag.
>
> **[3:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=211)** It's not nested inside of anything but I'm still getting this error."
>
> **[3:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=216)** And so what's really useful to know, right, is that a tag can have a couple of different placement attributes applied to it, right?
>
> **[3:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=226)** Some tags are in line, right, and in line means that it'll be nested inside of another tag.
>
> **[3:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=235)** Good example is a span tag, right?
>
> **[3:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=237)** A span tag by default is an inline level element.
>
> **[4:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=241)** If you put a span tag at the first level under the root element like here, you would get an error because a span tag does not belong at that level, okay?
>
> **[4:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=253)** Now, in our case, the note tag, the default placement attribute of a note is to be in line but because we have it at the first level under the root element, it needs to be a block level element, okay?
>
> **[4:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=271)** And so the way that we fix that is we're going to right click on the note tag and choose Properties, and if you click Edit Attribute Objects, this is going to bring up your Attributes dialog box, and what we're going to do is we're going to click New Item, and that's going to create this guy here, and then we're going to click New Item again.
>
> **[4:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=291)** And the key value is going to be Placement with a capital P, and then the value is going to be Block with a capital B, and we're going to click OK and OK again, and that is going to take care of that problem.
>
> **[5:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=307)** Now, you might have also noticed that I was getting a similar error on the figures, right?
>
> **[5:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=313)** The same rule applies with figures.
>
> **[5:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=316)** When they live at the first level under the root element, they need to be block level elements.
>
> **[5:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=323)** So I'll go to edit attribute objects, add the Placement block attribute, there we go, and I have to do that for a couple more here.
>
> **[5:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=336)** Here's this one.
>
> **[5:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=339)** You want to be careful that you spell it correctly.
>
> **[5:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=343)** If you misspell it, it's not going to work.
>
> **[5:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=350)** I think that's all I need, right?
>
> **[5:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=353)** So what I'm going to do, let's do a save as on this, and I'll call this 06_06_finish, right, and then let's run that through our pack checker.
>
> **[6:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=370)** And if you notice now, the structure tree category, I don't even need to dive into it, that entire category is passing, and that's where all of our, just to show you, if I go to results in detail, that's where all of our errors were occurring, right?
>
> **[6:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=386)** So by me moving items out of their parent container and/or applying the placement attribute appropriately, I've addressed the inappropriate use error and I've fixed that problem.
>
> **[6:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-inappropriate-use-of-an-element-error?u=76281980&t=401)** So keep that in mind when working in your own documents and when you run into this problem, just remember it's either in an illegal position or it just needs a placement attribute added to it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (4), delete (2), case, (2), this. (1)
> **Definitions:** is a  (5), means that (1), is an  (1)
> **UI Navigation:** go to (4), click on (2)
> **CLI Commands:** find (3)
> **Env Vars:** pdf (2)
> **Cross-References:** go back to (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Role mapping issues
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=0)** - [Instructor] Role mapping issues are not nearly as common as other ones, but when they do pop up, a lot of users are at a loss as to what the problem is.
>
> **[0:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=9)** In this video, I'd like to introduce you to the role map, explain what it is, and explain why some role mapping can be problematic.
>
> **[0:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=17)** So I'm going to go ahead and run this file through my pack checker.
>
> **[0:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=22)** We're working with 0607 in this video.
>
> **[0:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=27)** And we'll run this through here.
>
> **[0:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=28)** And I'm going to go to results in detail.
>
> **[0:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=30)** And you can see there is a category called role mapping.
>
> **[0:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=34)** And, if we open that up, we're getting an error called circular role mapping.
>
> **[0:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=40)** And if I open that up, it's saying that I'll probably have to look at the tool tip.
>
> **[0:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=45)** Structure type artifact is mapped in a circular fashion.
>
> **[0:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=49)** The pack errors are not always as explanatory as I'd like them to be, but I'm going to explain this one to you.
>
> **[0:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=58)** So, in this file in Acrobat, let's go to the tags pane.
>
> **[1:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=63)** And if we click on the option button at the top here, I'm going to choose edit role map.
>
> **[1:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=69)** And, inside of here, if you open up the document roles, what a role map is, is it's mapping what an object is called in the source application to a standard object in the PDF file.
>
> **[1:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=88)** Okay? Now again, this one came out of Word, but when you look at a document from InDesign, InDesign is it a lot more logical in my opinion because what you're going to see in the role mapping is you'll see something like main heading, and then to the right it's going to say H1.
>
> **[1:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=108)** And so what that means is that the main heading style in InDesign is mapping to an H1 in the pdf, right?
>
> **[1:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=117)** That's exactly what it's doing.
>
> **[1:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=118)** And so, the role map is literally just kind of a translation that says, hey, the source application calls an object footer in the source application.
>
> **[2:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=128)** Here in the pdf we're just going to make it a section tag, or in the source application we have a thing called text box, but in the PDF we're going to map it to a thing called section.
>
> **[2:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=140)** And that's because the PDF format does not have an object called text box, or EndNote, or chart.
>
> **[2:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=148)** And so we have to map it to the appropriate thing in the PDF file.
>
> **[2:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=152)** And so, let's go back to that error again.
>
> **[2:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=158)** Yeah. So it's complaining about a role map called artifact.
>
> **[2:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=163)** That is the clue that we're looking for.
>
> **[2:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=167)** And when it says a circular mapping, what that means is that you have an object that is mapping to itself.
>
> **[2:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=176)** And that's why they call it a circular mapping because it's not mapping to something different, it's mapping to itself.
>
> **[3:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=182)** And so, up here you'll notice, and this is kind of weird but, we have an item that was in Word called artifact and it's mapping it to something called artifact in the pdf.
>
> **[3:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=196)** And the circular mapping is not allowed.
>
> **[3:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=198)** You cannot map something to itself.
>
> **[3:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=202)** So honestly, what I'm going to do is I'm going to click on this and I'm going to click on delete item to get rid of that because that's the role map that is the offending item.
>
> **[3:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=213)** And I'm going to go ahead and click okay.
>
> **[3:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=217)** And let's do a save as on this, and I'll call this one 0607 finish, of course, right?
>
> **[3:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=225)** And now, if we go back here and I run 0607 finish through here, you'll notice that the role mapping category is now passing, okay?
>
> **[3:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=236)** So, I'll be honest with you guys, you're not going to spend a whole lot of time in the role mapping panel.
>
> **[4:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=242)** In my experience, I'm in there few and far between, but every now and then it does come up, right?
>
> **[4:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=248)** It does come up and it does require me to go in there to address it.
>
> **[4:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=252)** So, the good news is that when you get a role mapping error it's going to tell you exactly which one is the offender.
>
> **[4:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/role-mapping-issues?u=76281980&t=258)** To fix, you just need to open the role mapping panel and make the appropriate adjustment to address that problem.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), for. (1), delete (1), this, (1), require (1)
> **UI Navigation:** click on (3), go to (2), open the (1)
> **Env Vars:** pdf (4)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), is called (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Fixing alternative descriptions for annotations error
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=0)** - [Instructor] The PDF/UA standard requires that all hyperlinks contain alternative text for that hyperlink.
>
> **[0:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=7)** Again, this may seem a bit like overkill but it stems from a time when it was really common to use click here or download here as the text for a hyperlink.
>
> **[0:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=17)** Those phrases tell the user nothing about where they're going, hence the requirement for alternative text.
>
> **[0:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=24)** The requirement, in my opinion is a bit outdated because most users know and now use meaningful text for their hyperlinks.
>
> **[0:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=32)** If you too use meaningful text the good news is that this is going to be a really easy fix.
>
> **[0:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=38)** So I'm going to go ahead and run my file through the pack checker.
>
> **[0:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=44)** So I have the 0608 file.
>
> **[0:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=47)** Go ahead and run this through here.
>
> **[0:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=49)** And there's literally a category down here called alternate descriptions, and if you open up the results in detail, you'll notice that I actually have 87 errors, right?
>
> **[1:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=60)** And that seems like a lot.
>
> **[1:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=62)** But where this is really flagging a lot of them is it's coming from the table of contents.
>
> **[1:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=69)** Remember, when you use the table of contents feature in Word or in InDesign, every item of the TOC becomes an active link that a sighted user can click on or a user of assistive technology can follow when they're reading the content.
>
> **[1:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=88)** So we have 87 errors, 87 hyperlinks that need alternate text.
>
> **[1:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=93)** Now, the good thing is that your table of contents contains meaningful text, right?
>
> **[1:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=99)** I mean, this is perfect, so no need to worry there, right?
>
> **[1:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=104)** Your table of contents is already using meaningful text, okay?
>
> **[1:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=108)** So how do we fix this problem?
>
> **[1:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=110)** Well, we're going to go to our pre-flight panel again.
>
> **[1:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=113)** So you can go to the print production tool or as I showed before if I just type "PRE" in the search tools right here is my pre-flight panel that I can open up.
>
> **[2:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=124)** And once again, make sure you have PDF standards chosen and that you click on the wrench icon.
>
> **[2:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=130)** And then what we're going to do is we're going to scroll down a little bit and down under the interactive elements and properties category, there's actually only one fix up there, and it's the one we need, right?
>
> **[2:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=142)** And the fix up is create content entry for link annotations.
>
> **[2:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=148)** And again, I know this description, aside from me telling you that this is the one to use, you may not have known that that's what this was for, but in a previous video I talked about how the PDF standard wants you to add a contents entry to the link that provides the alternate text.
>
> **[2:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=170)** They actually don't want you to put the alternate text in the alternate text field.
>
> **[2:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=174)** I know, confusing right?
>
> **[2:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=177)** Anyway, we're going to select this fix up and I'm going to click the fix button.
>
> **[3:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=182)** And of course Acrobat is going to want me to save a version of this.
>
> **[3:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=186)** So I will call this the finish version.
>
> **[3:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=190)** And then Acrobat is going to crank through this.
>
> **[3:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=193)** And you'll notice that the pre-flight panel fixed 87 objects, right?
>
> **[3:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=198)** And if I go back to the pack checker under alternative descriptions, we have 87 errors, right?
>
> **[3:24](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=204)** So again, not a coincidence, right?
>
> **[3:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=207)** So if I grab my finish version and run it through the pack checker now you'll notice in the alternative descriptions category everything is passing, right?
>
> **[3:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=218)** And again guys, the reason why this works is because we've been cognizant about using meaningful text for our hyperlinks.
>
> **[3:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=227)** We're not using click here, we're not using download here.
>
> **[3:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=230)** Because if you did and you ran this fix up it would technically pass but it would still be wrong because now you're just putting the alternate text of click here on the link text that says, click here.
>
> **[4:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=246)** You're still not providing any useful information to the user.
>
> **[4:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=251)** So, key item here guys, use meaningful text for your hyperlinks.
>
> **[4:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-alternative-descriptions-for-annotations-error?u=76281980&t=257)** Once again, the pre-flight panel comes to the rescue and fixes our problem in mere seconds as long as you use meaningful texts for those hyperlinks.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (3), toc (1), pre (1)
> **UI Navigation:** click on (2), go to (2), scroll down (1)
> **Code Keywords:** this. (2), for, (1), pass (1)
> **Cross-References:** previous video (1), go back to (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)

#### Adding IDs for note elements
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=0)** - [Instructor] If you use footnotes or endnotes in your documents, you'll likely encounter the error of notes requiring unique IDs in the accessible PDF file.
>
> **[0:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=10)** Now, I should remind you that it's important to create footnotes and endnotes in the source applications using that feature in the application.
>
> **[0:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=19)** If you create them manually, they will not be tagged correctly.
>
> **[0:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=23)** So if you're using InDesign, you want to use the footnote or endnote feature.
>
> **[0:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=27)** And if you're using Word, you want to use the footnote or endnote feature.
>
> **[0:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=31)** In this video, let me show you how to address the requirement that notes contain a unique ID.
>
> **[0:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=38)** So I'm starting this video with the 0609 file open.
>
> **[0:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=44)** And I'm going to go ahead and run this through the Pack Checker.
>
> **[0:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=48)** And you will notice if I look at my results in detail and go to Structure Elements, there is an error under notes.
>
> **[0:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=57)** And if I open that up, you can see I have an error that says, "IDs of note structure elements," and then, "ID is missing."
>
> **[1:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=66)** Now if I go back to my PDF file, I'm going to go ahead and find that note and let's just find that tag.
>
> **[1:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=77)** There we go.
>
> **[1:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=78)** So if you click on the note tag, and you right-click and choose Properties, one way that you can add a unique ID is to simply type it here in the ID field.
>
> **[1:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=92)** There is no standard naming convention whatsoever.
>
> **[1:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=96)** All it's looking for is a unique ID.
>
> **[1:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=99)** So you can use letters and numbers, you can do whatever you want.
>
> **[1:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=104)** To be fair, this document has one endnote, so it would be easy enough for me to plug it in here.
>
> **[1:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=110)** But if your document has 50, you certainly don't want to go into each note manually and enter an ID.
>
> **[1:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=119)** That is of course, unless you get paid by the hour.
>
> **[2:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=122)** Just kidding.
>
> **[2:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=123)** So what I'm going to do is we're going to go ahead and open up the preflight panel.
>
> **[2:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=130)** And once again, we're going to go to PDF standards, click on the wrench.
>
> **[2:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=135)** And if you scroll through here, you are going to find under the Document Category, the first item is called Add unique ID to note elements in tagging structure.
>
> **[2:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=152)** And so if we click on that and then we click the Fix button, I'll go ahead and save this as my finished version.
>
> **[2:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=162)** You'll notice in the results that it fixed of course, one object.
>
> **[2:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=167)** And if I close this and then I right-click on this note and go to Properties, you will see that unique ID, that the preflight panel has added to the note tag.
>
> **[2:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=178)** It's a quite a long number.
>
> **[3:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=180)** I was just going to type 001 or something like that.
>
> **[3:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=182)** But the preflight panel creates a very unique ID for that purpose.
>
> **[3:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=188)** So if I go back to the Pack Checker and I run the finish version through here, if I look at my results in detail and go to Structure Elements, now you could see that my notes category is of course, passing.
>
> **[3:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-ids-for-note-elements?u=76281980&t=202)** So you can add note IDs manually if you like, but if you have a lot of them, the preflight panel is definitely the way to go.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (4), click on (3), right-click (2)
> **CLI Commands:** find (3)
> **Env Vars:** pdf (3)
> **Definitions:** is an  (1), is a  (1), is called (1)
> **Code Keywords:** let (2)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)

#### Fixing a figure element with no bounding box error
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=0)** - [Narrator] Another PDF/UA requirement is that the position of every figure in a document is known and defined in the properties for that figure.
>
> **[0:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=9)** You likely won't get this error a lot, but I did get this error in this document from a native export out of Word.
>
> **[0:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=17)** So let's take a look at the problem and I'll show you how to fix it.
>
> **[0:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=21)** So I'm going to go ahead and run this file through the PAC Checker.
>
> **[0:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=26)** And if we look at our Results in Detail, go under Structure Elements, under Figures, you'll see that we have bounding box errors.
>
> **[0:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=37)** If I click on this, you'll notice here I'm basically getting this error on every single figure.
>
> **[0:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=46)** So I'd be lying if I said this was an easy fix, but it is possible.
>
> **[0:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=52)** If I'm being honest, I typically don't fix this error in Acrobat anymore.
>
> **[0:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=58)** I like to use Access PDF because I can do it in a couple of seconds.
>
> **[1:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=64)** That being said, I want to show you how to fix it in Acrobat.
>
> **[1:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=68)** And to do that, what I'm going to do is open up the tags pane and I'm going to click on this first figure.
>
> **[1:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=76)** Now, to show you the problem, if we right-click on the figure and choose Properties, and then we click on Edit Attribute Objects, if we open up the properties here, you can see that we have a placement attribute, there is a layout attribute, but there is no BBox attribute, and honestly that's what's missing.
>
> **[1:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=99)** So here's how I fix this.
>
> **[1:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=102)** The first thing I'm going to do to kind of save time, I'm going to copy the alternate text from here so that I have it on my clipboard.
>
> **[1:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=113)** Then what I'm going to do is I'm going to switch over to the content pane and I'll go to page one and I want to find the container for that image and that's right here.
>
> **[2:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=125)** So what I'm going to do is I'm going to move the image out of the container and then I'll delete this empty container.
>
> **[2:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=131)** And what that's also going to do is you'll notice now that the figure tag is gone and that's 'cause I changed the content which eliminated the tag.
>
> **[2:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=142)** So I'm going to save this as my finish version.
>
> **[2:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=149)** And then what I'm going to do is I'm going to come down here to the accessibility tool.
>
> **[2:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=154)** I'm going to select the Reading Order panel.
>
> **[2:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=158)** And what I'm going to do is I'm going to marquee the figure for Two Trees, and you'll notice when I do that, it's also selecting a bunch of the empty returns that were in this document.
>
> **[2:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=169)** I'm just going to hold down Control on Windows or Alt on Mac and just kind of marquee through them to deselect them.
>
> **[2:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=177)** And so now I only have the figure selected and what I'm going to do is I'm going to click on the Figure button to tag that as a figure.
>
> **[3:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=186)** Now, what I can do is if I click on this, I can right-click and choose Edit Alternate Text and then I can paste that alt text back in there from where I copied it.
>
> **[3:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=198)** And we might have a little wonkiness going on here.
>
> **[3:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=202)** Where did that figure go?
>
> **[3:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=205)** Sometimes they hide from us. There it is.
>
> **[3:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=208)** It went all the way down here to the bottom, so I'm just going to move this up here.
>
> **[3:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=211)** I'll put this first in line.
>
> **[3:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=214)** And now what you'll notice, I'm going to right-click and choose Properties, if I go to edit attribute objects, now you're going to see that I have a BBox attribute.
>
> **[3:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=225)** And by having that, so the BBox attribute essentially defines the upper left corner, upper right corner, lower left and lower right corner.
>
> **[3:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=236)** Now that that BBox attribute is there, that will now address that problem.
>
> **[4:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=241)** What I'm also going to do 'cause I remember this was in here, I'm going to add a new item and I'm going to add back in the placement attribute, so I'll go ahead and click OK and then I'm going to save this document.
>
> **[4:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=256)** So if I go back to the PAC Checker, you'll notice that, let's go back to the Results in Detail, we had 10 errors for bounding boxes.
>
> **[4:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=265)** If I rerun my finish version through here, when I go back to the Results in Detail, we should now see there are nine errors.
>
> **[4:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=276)** Now, I'm not going to make you guys watch me fix all remaining nine of those.
>
> **[4:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-a-figure-element-with-no-bounding-box-error?u=76281980&t=282)** I'm going to go ahead and do that offline, but just know that when you get this error, one of the ways you could fix it is by retagging it using Adobe Acrobat.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), right-click (3), go to (2), select the (1)
> **Code Keywords:** let (2), this, (2), this. (1), switch (1), delete (1)
> **Env Vars:** pdf (2), pac (2)
> **Cross-References:** go back to (3)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Embedding fonts
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=0)** - [Narrator] Another requirement of the PDF/UA specification is that all fonts in a document are embedded so they are available on all computers in which the file is opened.
>
> **[0:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=11)** Let's take a look at how to meet this requirement using Adobe Acrobat.
>
> **[0:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=15)** Now I'm going to switch over to the PAC Checker for a second and let's go ahead and run our 06_11 file through there.
>
> **[0:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=25)** And you'll notice up here at the top there is an error under the category of fonts.
>
> **[0:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=30)** And if I look at the results in detail we're going to see that the font embedding it's telling us that a font is not embedded.
>
> **[0:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=39)** This is certainly a requirement.
>
> **[0:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=41)** I mean, you could see here it's a bit obscure because it looks like it's a space after the bullet in one of the bulleted lists.
>
> **[0:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=49)** It's really, really weird.
>
> **[0:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=51)** But it could have resulted from sloppy formatting.
>
> **[0:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=55)** You know, maybe somebody had used a unique font and then changed it but kind of missed a space character.
>
> **[1:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=61)** Either way.
>
> **[1:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=63)** And so if we come back to Acrobat here you can also see this if you go to your file menu and choose properties.
>
> **[1:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=71)** If you come up here to the fonts tab, if you start scrolling through you'll notice that most of these say Embedded Subset.
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=80)** And Embedded Subset means that all of the characters used in that font within this document have been embedded.
>
> **[1:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=89)** So that's what Embedded Subset means.
>
> **[1:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=92)** Symbol MT has a full embed, but if we go all the way to the top you could see that this Arial MT is not embedded. Okay?
>
> **[1:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=103)** So I'm going to go ahead and hit OK, And we're going to reach for our Preflight panel again.
>
> **[1:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=110)** So in my search tools, I'm just going to type p-r-e and I'm going to open the Preflight panel.
>
> **[1:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=117)** And one of the things that you'll find under the document category is this entry here, which is Embed fonts (even if the text is invisible).
>
> **[2:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=128)** And that's kind of important in the context of our document here, because the font that's not embedded it looked like it was a space character.
>
> **[2:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=137)** So it's really not visible, but Acrobat is going to embed it nonetheless.
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=143)** So I'm going to go ahead and click on the Fix button and I'll go ahead and save this as a finish version of this file.
>
> **[2:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=152)** And once again, you can see that one object has been fixed, right?
>
> **[2:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=158)** And if I rerun this through my PAC Checker using the finish version of the file this time you will see that under the fonts category, everything now passes.
>
> **[2:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=170)** While I'm here, one of the things that can sometimes help this situation is if you delete items that are not being used, right?
>
> **[3:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=181)** And I want to explain what I mean here.
>
> **[3:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=183)** If you go to the content pane, right?
>
> **[3:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=186)** I'm going to go to page one, for example.
>
> **[3:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=188)** If you start arrowing down in this document, items are going to highlight that you probably don't really need.
>
> **[3:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=197)** Like, it almost looks like here they added a white rectangle although that may be covering up the bottom of the blue.
>
> **[3:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=205)** So I'm going to leave that alone.
>
> **[3:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=206)** But as I scrub through here do you see how all of these items are in here?
>
> **[3:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=212)** These are empty returns that were in the Word document.
>
> **[3:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=216)** And so one of the things that's useful to understand is that the content pane is the content on the page, right?
>
> **[3:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=227)** So, if you delete something from the content pane you're actually deleting it from the document. Okay?
>
> **[3:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=235)** Now I'm just going to go ahead and hit the delete key for these items here, because they are not needed, right?
>
> **[4:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=246)** And then down here we have a bunch more, right?
>
> **[4:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=250)** So does this really affect accessibility?
>
> **[4:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=254)** Not really. Honestly, you know, it really doesn't.
>
> **[4:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=258)** What it does do, I mean, it may actually make your file a little smaller, potentially.
>
> **[4:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=265)** You'd see here at the bottom of this page, this is page four, I have a bunch of items, right, that I can just, as I said before, I can just delete them, right?
>
> **[4:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=277)** 'Cuz I don't need them at all.
>
> **[4:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=279)** So it's not something that you have to do, right?
>
> **[4:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=283)** But sometimes what I will do is go through my document and when I see a lot of errant objects I may take the time to just kind of go through and say, hey, let's just get rid of these guys because I certainly don't need them.
>
> **[4:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=299)** And it just kind of helps to clean up the document a little bit.
>
> **[5:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=303)** And the reason I bring it up in the context of this video is because when you do this, you could potentially end up deleting the item that uses that font that's not embedded, right?
>
> **[5:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=317)** There's no guarantee of course but it certainly could help with the problem.
>
> **[5:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/embedding-fonts?u=76281980&t=322)** So anyway, by leveraging the Preflight panel we're able to embed all the fonts in the document in order to meet the PDF/UA compliance.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4), let (3), switch (1), this, (1)
> **UI Navigation:** go to (3), open the (1), click on (1)
> **Env Vars:** pdf (2), pac (2)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is an  (1), means that (1)
> **Documentation:** specification (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Fixing table header cell has no associated subcells error
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=0)** - It's true that all tables need header cells to define the category for the data cells in the table but defining those cells as header cells isn't enough.
>
> **[0:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=10)** The no associated sub cells error stems from header cells that don't have the scope attribute applied.
>
> **[0:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=17)** Let's take a look at how to address this problem in this document.
>
> **[0:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=21)** So I have the 0 6 12 document open on my computer and let's go ahead and run this through our pack checker.
>
> **[0:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=32)** And if I look at the results in detail and I open up the structure elements, you can see that under the tables category I am of course getting an error right? And you see that I have this error here that says table header cell assignments, and I have a whole bunch of these.
>
> **[0:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=49)** Look at all these errors that says table header cell has no associated sub cells.
>
> **[0:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=54)** Okay?
>
> **[0:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=55)** And I'll just kind of take a look at the first instance here.
>
> **[0:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=58)** So this is on page 17, right?
>
> **[1:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=61)** And then I have another one on page 19, right?
>
> **[1:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=64)** But essentially it's complaining that all of the tables in my document do not have the scope applied, right?
>
> **[1:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=71)** So, what I'll do is in my document let's go to page 17 and to fix this probably the easiest way is to use the table editor.
>
> **[1:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=81)** So I'm going to go to the accessibility tool and I'm going to open up reading order.
>
> **[1:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=85)** And then what I'll do is just click in one of these labels of this table and then click table editor.
>
> **[1:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=92)** Now I could tell right away that it looks like these top two cells have been defined as header cells but let's dive in a little bit deeper and see what we have.
>
> **[1:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=102)** So I'm going to click on this cell shift, click on this cell and then I'll right click on one of them and choose table cell properties.
>
> **[1:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=110)** And sure enough, as expected, it is defined as a header cell, which is great, but the scope has not been defined.
>
> **[1:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=117)** So I'm going to go ahead and change that to a column header and click okay.
>
> **[2:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=120)** And honestly, that's it.
>
> **[2:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=122)** So let me jump over to this one.
>
> **[2:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=126)** This one, same thing.
>
> **[2:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=127)** It looks like these are defined as header cells.
>
> **[2:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=130)** So I'm going to go ahead and select them and I'm going to right click and go to table cell properties.
>
> **[2:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=135)** Now for this table, the scope would be set to a row.
>
> **[2:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=140)** Okay? Now as I was looking at the errors, I think I also saw that I was getting irregularity error.
>
> **[2:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=146)** So I'm going to select this cell, this cell, and this cell and I'll right click and go to table cell properties and just make sure I have a column span of two applied to them.
>
> **[2:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=161)** All right, let's see, what else do we have here?
>
> **[2:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=164)** Do we have more tables?
>
> **[2:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=166)** Oh yeah, we do.
>
> **[2:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=166)** So let's check these.
>
> **[2:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=170)** So in this case, I think this is going to give us an empty cell, right?
>
> **[2:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=176)** And I don't like that.
>
> **[2:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=178)** I think what I'm going to do, let me find that in the tags pane.
>
> **[3:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=183)** I'll show you what I'm going to do to fix this.
>
> **[3:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=187)** So they have an empty cell here, and what I'm going to do to fix this, I'm going to artifact that empty cell in the upper left hand corner.
>
> **[3:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=196)** I'm going to say it change tag to artifact and then I'm going to delete that cell.
>
> **[3:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=202)** I'm going to do the same thing for this one, right?
>
> **[3:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=212)** And there we go. Okay.
>
> **[3:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=215)** Now what I'm going to do to fix this we'll go back down to our reading order panel and we'll go into our table editor.
>
> **[3:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=221)** And what I'm going to do, this top cell I'm going to right click and go to table cell properties I will set the scope to be a column but I'm also going to set the column span to four cause they need that one cell to occupy the space of four.
>
> **[3:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=238)** And then these four cells go to table cell properties, that's going to be a column header.
>
> **[4:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=247)** And then these guys here, they are header cells but these are going to be row headers.
>
> **[4:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=258)** Okay? And I'll do the same thing down here.
>
> **[4:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=265)** Column four And then these guys we're going to make a column header.
>
> **[4:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=278)** These guys going to be a row header.
>
> **[4:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=286)** And actually now that I did I think I made a mistake up here.
>
> **[4:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=291)** I think this guy, yeah, sorry I want that to be a column header.
>
> **[4:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=295)** There we go Alright, cool.
>
> **[4:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=298)** Let's see, do we have any other tables?
>
> **[5:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=301)** Alright, I think that's it.
>
> **[5:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=303)** So I'm going to go ahead and do a save as on this and this will be my finished version.
>
> **[5:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=312)** And if I go back to my pack checker and I run the finished version through here now I don't even really have to go anywhere, right?
>
> **[5:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=320)** See under structured elements, everything is passing right?
>
> **[5:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=323)** Even if I go to results in detail down here, under tables everything is now passing.
>
> **[5:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/fixing-table-header-cell-has-no-associated-subcells-error?u=76281980&t=329)** So, scope is very important I encourage you make sure that when you define header cells in a document that you take the extra step to also define the scope in order to meet P D F U A compliance.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), case, (1), this. (1), this, (1), delete (1)
> **UI Navigation:** go to (7), click on (2)
> **CLI Commands:** make (3), find (1)
> **Definitions:** defined as (2)
> **Cross-References:** go back to (1)
> **Speakers:** - it (1)

#### Adding the PDF/UA entry
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=0)** - [Instructor] The PDF/UA identifier is a stamp of approval of sorts that basically indicates that your file meets the PDF/UA Standard.
>
> **[0:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=9)** I always do this step last, because I only add it when everything in my file is, in fact, PDF/UA compliant.
>
> **[0:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=17)** The PDF/UA identifier is very much a task of the honor system, because you can absolutely add the identifier to a file that is not compliant.
>
> **[0:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=26)** That does not, of course, mean that it is compliant.
>
> **[0:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=30)** However, it is possible to add it even if the file does not meet conformance.
>
> **[0:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=35)** I don't recommend doing that, though.
>
> **[0:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=37)** So I'm starting this video with the 06-13 file open and I'm going to go ahead and run this through the PAC Checker just so we can see where we are.
>
> **[0:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=50)** So I'll grab this file and you'll notice that we have one remaining item, of course, that does not pass and if we look at the results in detail, it's indicating that the PDF/UA identifier is currently missing.
>
> **[1:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=67)** So to fix that, we are going to go back to Adobe Acrobat and we're going to open up our Preflight panel again.
>
> **[1:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=74)** So I'm going to go ahead and launch that.
>
> **[1:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=77)** And when the Preflight panel opens, if you scroll down under Document info and Metadata, you're going to see an item that says, "Set PDF/UA-1 one entry."
>
> **[1:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=89)** So that is the one that we want to use to add the PDF/UA identifier.
>
> **[1:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=94)** So I'm going to go ahead and click on the Fix button and I'll go ahead and save this one as the finish version, of course.
>
> **[1:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=102)** And you can see one object was created and it was the setting of the PDF/UA entry.
>
> **[1:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=109)** So I'm going to go ahead and close this.
>
> **[1:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=111)** And if we go back to our PAC Checker, I'm going to grab the finish version and I'm going to run this through the PAC 2021 Checker and you can see now that my file completely is meeting the PDF/UA Standard.
>
> **[2:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=127)** And as I had mentioned before, you can click on the PDF Report button and that will create a PDF report confirming that you are complying to the PDF/UA Standard and this is a great thing to supply to your client just to give them peace of mind to know that your file does, in fact, meet the requirements.
>
> **[2:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=149)** If I click on the WCAG tab, it is also meeting the WCAG Standard as well.
>
> **[2:34](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=154)** So we have now completed the process of making our document PDF/UA compliant.
>
> **[2:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/adding-the-pdf-ua-entry?u=76281980&t=161)** So again, by leveraging the Preflight panel, we can easily add the PDF/UA-1 entry to a file once it meets PDF/UA compliance.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (15), pac (3), wcag (2)
> **UI Navigation:** click on (3), scroll down (1)
> **Code Keywords:** pass (1), this. (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Why is PDF/UA not verified?
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980&t=0)** - [Instructor] One of the most common questions that I get asked about meeting PDF/UA compliance is that once you've remediated a document and it is compliant, why does the status still show up as not verified?
>
> **[0:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980&t=14)** Well, let's take a closer look at that.
>
> **[0:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980&t=16)** So I have the 0614 file open, and what I'd like you to do is over here in the navigation pane, I want you to click on the standards pane to open it up.
>
> **[0:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980&t=28)** And if you're not seeing that, go ahead and right-click and then choose standards from the list.
>
> **[0:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980&t=36)** Now, the standards pane, if you look at the top you could see that the standard that is applied to this file is PDF/UA-1 and the ISO standard for PDF/UA is ISO 14289-1.
>
> **[0:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980&t=53)** But what really gets people is this line here that says, "Status not yet verified."
>
> **[1:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980&t=61)** And if you're at all interested in knowing more about this message, we talked about this on the CHAX Chat Podcast.
>
> **[1:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980&t=68)** And we had a guest on, his name was Leonard Rosenthal and he kind of explained the why behind this.
>
> **[1:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980&t=75)** But fundamentally, there's no way for Acrobat to check the file and verify that it is in fact, PDF/UA compliant.
>
> **[1:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980&t=88)** That there's no mechanism available to make that happen.
>
> **[1:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980&t=93)** I almost wish they would just get rid of that message because it creates more confusion than it provides answers.
>
> **[1:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980&t=100)** The useful information in this pane is that it is in fact, using the PDF/UA standard, and it is applied to this document, but the status is not yet verified.
>
> **[1:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980&t=112)** It's really just saying that there's no machine learning, there's no mechanism by which it can validate your file against the PDF/UA standard.
>
> **[2:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980&t=122)** So when you see this message, don't fret, it's really neither good or bad.
>
> **[2:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980&t=127)** The not verified message doesn't really mean a whole lot.
>
> **[2:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980&t=130)** It certainly doesn't mean that your document does not meet PDF/UA compliance but it doesn't mean that it does either.
>
> **[2:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/why-is-pdf-ua-not-verified?u=76281980&t=136)** So rely on the PAC 2021 Checker to verify compliance, not the standards pane.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (7), iso (2), chax (1), pac (1)
> **Code Keywords:** let (1), this. (1)
> **UI Navigation:** click on (1), right-click (1)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)

#### PDF/UA resources
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/pdf-ua-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/pdf-ua-resources?u=76281980&t=0)** - [Instructor] So I wanted to leave you with some resources that you could go to if you wanted to learn more about PDF/UA.
>
> **[0:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/pdf-ua-resources?u=76281980&t=10)** We covered a lot of material in this course.
>
> **[0:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/pdf-ua-resources?u=76281980&t=13)** However, there's always more to learn, right.
>
> **[0:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/pdf-ua-resources?u=76281980&t=16)** And so one resource I'd like to direct you to is the Matterhorn Protocol and you could find this at [pdfa.org](https://pdfa.org).
>
> **[0:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/pdf-ua-resources?u=76281980&t=26)** And the Matterhorn Protocol was designed to promote the adoption of PDF/UA, okay.
>
> **[0:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/pdf-ua-resources?u=76281980&t=31)** And on this page, you can click the download button which will actually download a document that kind of guides you through the Conformance Testing Model.
>
> **[0:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/pdf-ua-resources?u=76281980&t=42)** The Matterhorn Protocol, it shows you like what are some failure conditions and clarifies how a document is supposed to be tagged.
>
> **[0:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/pdf-ua-resources?u=76281980&t=51)** Another good resource is the PD/UA reference suite.
>
> **[0:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/pdf-ua-resources?u=76281980&t=55)** This is a pretty good resource.
>
> **[0:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/pdf-ua-resources?u=76281980&t=58)** What I like about this is if you click the download button it'll give you a folder of files of properly tagged files, okay.
>
> **[1:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/pdf-ua-resources?u=76281980&t=67)** And so you can open up any of these PDF files and inspect the tag structure to kind of look at how this document was tagged and evaluate it and just kind learn a little bit more, and get some good examples of how a good document is tagged.
>
> **[1:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/pdf-ua-resources?u=76281980&t=85)** And then another really great resource is something called the Tagged PDF Best Practice Guide.
>
> **[1:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/pdf-ua-resources?u=76281980&t=92)** And it focuses on the syntax of the PDF/UA standard.
>
> **[1:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/pdf-ua-resources?u=76281980&t=97)** And again, if you click the download button it will give you, it's a 70 page document covering everything about PDF/UA, talking about layout attributes, table attributes, grouping elements, all different elements of a PDF file.
>
> **[1:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/pdf-ua-resources?u=76281980&t=116)** So really good resources and just good resources to have to learn more and just kind of grow your knowledge about PDF/UA in general.
>
> **[2:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/pdf-ua-resources?u=76281980&t=126)** I hope you enjoy that, guys, and we'll see you soon.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (8)
> **CLI Commands:** find (1)
> **URLs:** [pdfa.org](https://pdfa.org) (1)
> **Cross-References:** we covered (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### 7. Third-Party Tools

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Tools for visualizing document structure
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=0)** - [Narrator] Part of the remediation process is ensuring that content in a document is tagged correctly as well as in the correct order.
>
> **[0:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=8)** One way to verify this is to walk the tags tree as we've discussed in a previous video.
>
> **[0:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=13)** Another way that I find really helpful is to be able to visualize the document structure on screen.
>
> **[0:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=20)** There are a few tools I like to use to do this and I'd like to share them with you now.
>
> **[0:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=25)** Now, I'm starting this video with the 07_01 document open.
>
> **[0:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=29)** However, I'm going to switch over to my PAC Checker and I am going to run the file that I'm working on through the PAC Checker and we can see that this document is, of course, compliant.
>
> **[0:45](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=45)** But the tool that I want to show you is down here in the lower left corner, if we click on the screen reader preview button, I can resize this window.
>
> **[0:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=55)** And this is a fantastic tool that allows you to see what tag is applied to objects, what order the content is in, and just really a great way to validate your document structure.
>
> **[1:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=72)** Another thing I love about this is that for all of your figures, it also displays the alternate text below it.
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=80)** I have a lot of people who reach out to me and as part of their quality control, they make sure that the alternate text for all of their figures is correct.
>
> **[1:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=89)** And they often ask me, what's the best way to do that?
>
> **[1:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=92)** Because in Acrobat, you can hover over a figure to see the tool tip if you want, but it's not really a great workflow because you have to move your mouse over every figure and kind of read it in small text.
>
> **[1:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=108)** The screen reader preview really makes it easy to evaluate the alternate text.
>
> **[1:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=113)** And again, you can check your content order.
>
> **[1:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=116)** You can check your tags. It's just a really great tool.
>
> **[2:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=120)** Now, another tool that I love to use is actually a plugin called pdfGoHTML and that plugin is made by Callas Software.
>
> **[2:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=131)** And this tool is a plugin for Acrobat.
>
> **[2:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=135)** And if you come up here to the plugins menu and you choose Callas pdfGoHTML, I'm going to go ahead and click Yes here to let it continue and then I'm just going to slide this over to my other screen.
>
> **[2:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=148)** There we go.
>
> **[2:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=149)** This plugin is really amazing because up here at the top, it has a number of different categories.
>
> **[2:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=155)** It has what they call Easy Reader.
>
> **[2:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=158)** It has an inverted mode. It has a mode for low vision users.
>
> **[2:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=163)** It has a low vision inverted, even dyslexia.
>
> **[2:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=168)** The one that I love is the structure tags category.
>
> **[2:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=173)** And this is very similar to the screen reader preview in the PAC Checker.
>
> **[2:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=179)** I think the interface is a little bit cleaner personally, but it offers a lot of the same things.
>
> **[3:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=186)** For all of my figures, I could see what the alternate text is.
>
> **[3:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=189)** And as you go down, you could see the order of your tags, you could see how things are tagged, and I really love how it renders my tables as well.
>
> **[3:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=200)** Let me get down. Here we go.
>
> **[3:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=202)** You could see that it's very easy to see how your table is structured.
>
> **[3:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=207)** I use this a lot too, like when I'm getting a regularity error in a table and I can't figure out what the problem is, I'll open it up in pdfGoHTML because the error becomes very apparent.
>
> **[3:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=221)** Sometimes you'll have like a cell sticking out over here.
>
> **[3:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=226)** And oftentimes it's because one of the cells has a column span on it when it shouldn't or something silly like that.
>
> **[3:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=234)** And new in this version, I've noticed when you hover over the table, it hides the cell property and only focuses on the content.
>
> **[4:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=244)** So that's kind of interesting, an interesting addition.
>
> **[4:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=247)** But this table's a little more complicated.
>
> **[4:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=250)** This one has those merged cells in it, but again, you can see that it's displaying correctly in this mode.
>
> **[4:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=257)** So really great tool that I like to use.
>
> **[4:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=260)** And just another great tool that helps us to evaluate the document structure when you're trying to verify that your document is correct.
>
> **[4:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/tools-for-visualizing-document-structure?u=76281980&t=269)** So take advantage of the PAC 2021 Checker screen reader preview and/or the Callas pdfGoHTML plugin for Acrobat to visualize document structure in your documents to verify that they're correct.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), switch (1), continue (1), interface (1)
> **Code Identifiers:** pdfgohtml (4)
> **Env Vars:** pac (4)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** click on (1)
> **Analogies:** similar to (1)

#### axesWord
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=0)** - [Speaker] So in this video I wanted to introduce you to one of my favorite products that I use on a daily basis called axesWord.
>
> **[0:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=11)** And axesWord is a plugin for Microsoft Word that basically helps you to overcome all of the limitations that exist in Microsoft Word when it comes to creating an accessible PDF file.
>
> **[0:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=28)** To kind of start this demonstration, what I'd like to do is I'm going to come up here to the Acrobat tab and I'm going to create a PDF file of this and I'm working on the 0702 document.
>
> **[0:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=40)** I'm just going to call this word and I'm going to go ahead and create a PDF of this file.
>
> **[0:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=46)** And when that is finished, you know, the PDF has been generated, you know exactly what I wanted.
>
> **[0:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=52)** And what I'm going to do is I'm going to run that file through the PAC checker to just kind of show you that even though I did everything that I could I still have some work to do.
>
> **[1:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=65)** And this kind of goes back to that 8020 rule that I was talking about earlier where I do 80% of the work in the source application, but then I have about 20% of cleanup to do after the PDF has been created, okay.
>
> **[1:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=80)** So going back to Word, axesWord takes a very different approach to helping you create an accessible PDF document.
>
> **[1:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=90)** A lot of what axesWord does is styles based.
>
> **[1:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=95)** Okay?
>
> **[1:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=96)** What I'm going to do is I'm going to click on axesWord tab up here and I'm going to click on show roll mapping.
>
> **[1:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=102)** And if I click on a figure, what's kind of cool about this is like right here, I can add the alt text to all of my figures, like it's super easy, I can just kind of click on a figure, add my alt text, right?
>
> **[1:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=117)** What it also allows me to do is I can also tag it as you can see as an artifact.
>
> **[2:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=124)** And it also gives me the ability to tag it as a formula.
>
> **[2:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=128)** If you use math formulas, you know, you can tag it that way as well.
>
> **[2:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=132)** Now what I also want to show you, I want to show you a couple of things.
>
> **[2:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=135)** Way down here at the bottom, I have a bulleted list and I did hear what I had showed in a previous video where I added an extra paragraph here that's kind of describing more information about the first bullet.
>
> **[2:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=148)** And as we saw previously, that breaks the list, right?
>
> **[2:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=152)** It would be list paragraph, another list, right?
>
> **[2:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=157)** Well note that I created a style for that paragraph and I called it bullet continue.
>
> **[2:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=162)** Okay, so just kind of keep that in mind.
>
> **[2:44](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=164)** The other thing that's a little bit different with axesWord is when it comes to our tables, right?
>
> **[2:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=170)** Whereas previously we were using the header row and first column check boxes to define our header rows.
>
> **[2:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=179)** In axesWord, we leverage styles that we create to define the header rows.
>
> **[3:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=187)** Okay?
>
> **[3:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=188)** So to make this all work what I'm going to do is I'm going to come up here to axesWord and I'm going to click on the document settings button.
>
> **[3:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=198)** And this is going to bring up my document settings window.
>
> **[3:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=201)** And what I'm going to do, here is my bullet continue style.
>
> **[3:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=206)** And what I'm going to do is in the dropdown I'm going to choose the option called list continue because I want this style to continue from the previous bullet and I'm going to leave that set to level one 'cause I'm only using one level of bullets.
>
> **[3:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=222)** I'm also going to come down here to my title style.
>
> **[3:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=227)** And you could see here I'm choosing that I want it to be a heading at level one.
>
> **[3:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=233)** I also have a style called TOC heading, and I want to map that to a heading, but this one is at level two.
>
> **[4:03](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=243)** Okay.
>
> **[4:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=245)** Now for my tables.
>
> **[4:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=247)** Okay, you can see that I have a style called main table header.
>
> **[4:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=253)** And what I'm going to do is I'm going to say I want you to be a header cell for a simple table.
>
> **[4:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=260)** And the scope is a column row or a column header.
>
> **[4:25](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=265)** I'm going to grab table header.
>
> **[4:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=267)** I'm going to do the same thing, header cell column.
>
> **[4:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=273)** I'm going to grab table column header.
>
> **[4:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=275)** That one's already defined in table row header.
>
> **[4:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=277)** That's a header cell for a simple table of the scope a row.
>
> **[4:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=280)** Okay, so that's really all I'm going to do.
>
> **[4:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=283)** And then in the axesWord tab, I'm going to click on let me do a save as on this.
>
> **[4:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=292)** And I'll call this the finish version.
>
> **[4:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=296)** And in the axesWord tab, I'm going to click on the export PDF button and you can see it gives me the chance to change my document title if I wish.
>
> **[5:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=309)** I can even set the document language and I could change the name if I wish.
>
> **[5:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=313)** Alright, so I'm just going to go ahead and hit create.
>
> **[5:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=316)** So in previous videos I showed you we could use file save as that uses the Microsoft method of creating an accessible pdf.
>
> **[5:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=326)** We also used the Acrobat tab, which is the Adobe method of creating an accessible pdf.
>
> **[5:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=333)** And this time I'm using axesWord to generate that accessible PDF file.
>
> **[5:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=341)** Now when it's finished, you could see here's my PDF you could see that it automatically created my bullets for me.
>
> **[5:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=347)** If I look at the tag structure, you could see that you know, my tags have already been created.
>
> **[5:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=353)** And down here at the bottom, you can see that this list that I added that extra paragraph to because I used list continue, it kept the list together as a unit.
>
> **[6:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=367)** Okay, and if you wanted to take a quick peek at a table we could also see that if I go into the table editor here, if I select this you can see that the scope of column is already defined because of the style you know that I put on that.
>
> **[6:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=387)** So if I go back to my PAC checker and I grab the PDF that I exported from Access PDF and run it through my PAC checker, you will notice that this document is 100% PDF UA compliant right out of the shoot.
>
> **[6:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=406)** And that is one of the reasons why I really like to leverage the axesWord plugin because it honestly just saves me a ton of time and it just makes [[Creating Accessible PDFs]] a lot easier.
>
> **[7:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axesword?u=76281980&t=421)** So I highly encourage you to check it out and I hope you enjoy it as much as I do.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (12), pac (3), toc (1)
> **Code Identifiers:** axesword (12)
> **Code Keywords:** continue (5), super (1), let (1), this. (1)
> **UI Navigation:** click on (7), dropdown (1)
> **Cross-References:** previous video (1), as we saw (1), go back to (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Warnings:** note that (1)

#### axesPDF
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=0)** - [Lecturer] The next product I want to introduce you to is a product called axesPDF.
>
> **[0:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=6)** axesPDF is made by aXes4, the same people who make axesWord.
>
> **[0:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=11)** axesPDF differs from axesWord and that, it is a self-running application, and where axesWord focuses on creating PDFs from Microsoft Word, axesPDF focuses on fixing problems in existing PDF documents.
>
> **[0:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=29)** So, I'm going to go ahead and launch axesPDF on my computer, and I'm going to go ahead and open the 07_03 file in my Chapter seven folder.
>
> **[0:43](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=43)** Now when you open this up, you know, there are some similar features to Adobe Acrobat, and that we have our tags tree over here to the left.
>
> **[0:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=53)** One of the cool things about axesPDF is that I can search for tags down here at the bottom.
>
> **[0:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=59)** So, if I type "H2" and hit enter, it will find the next tag.
>
> **[1:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=66)** I can hit the arrow key here, and this'll jump to the next tag, it'll jump to the previous tag, and take me to those areas.
>
> **[1:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=73)** The other thing that axesPDF has that is incredibly useful, over here to the right is the Checker tab.
>
> **[1:21](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=81)** And if you click the Refresh button at the bottom, axesPDF basically has the PAC 2021 Checker built into it.
>
> **[1:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=90)** So right here in this document, I can see all of the errors.
>
> **[1:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=96)** Now this is actually the same file we started with at the beginning of chapter six, that we went through and addressed all of those problems.
>
> **[1:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=106)** And so, what I'd like to do is show you how axesPDF helps us to fix some of these problems.
>
> **[1:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=112)** Right up here, we have this content error with 151 errors.
>
> **[1:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=116)** If I come up here to the Content tab, I have a button that says, "Artifact non-tagged content."
>
> **[2:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=124)** And if I click on it and then refresh the Checker, you will see that the content errors are now gone.
>
> **[2:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=132)** You'll notice down here, it's missing the PDF/UA identifier.
>
> **[2:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=136)** If I come up here to Extras, I can click Add PDF/UA identifier, and if I refresh this, you'll see that that's fixed.
>
> **[2:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=146)** Now, if we dive in here a little bit deeper, we go into Structure Elements.
>
> **[2:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=151)** And if I go to Structure Tree, if you remember, we had all these errors, because we had no root element in our tags.
>
> **[2:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=158)** So what I'm going to do is I'm going to select the first tag up here.
>
> **[2:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=162)** I'm going to scroll down, and shift click on the last tag.
>
> **[2:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=166)** And similar to Acrobatic, it'll take a second.
>
> **[2:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=169)** But what I could do is I could right click, and I can say, "Enclose elements based on tag order."
>
> **[2:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=176)** And that's basically just going to put all these elements inside of a new tag, and I can give it a name of document.
>
> **[3:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=182)** If I refresh this, all of those errors now disappear.
>
> **[3:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=188)** Okay?
>
> **[3:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=189)** You can see I'm getting the notes error, 'cause the IDs are missing.
>
> **[3:13](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=193)** If I go to the Logical Structure tab, I can say, "Add Note IDs" and that fixes that problem.
>
> **[3:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=202)** You could see that my figures have missing Bounding Boxes.
>
> **[3:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=206)** Now the method that I showed you in Acrobat, you know, took a little bit of time.
>
> **[3:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=211)** What's cool about axesPDF, if I double-click on this error, it highlights the figure in question.
>
> **[3:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=217)** If I go to the Properties tab, down here, where it says Bounding Box, I can just click on one of these plus signs, and axesPDF sucks in the values for the Bounding Box.
>
> **[3:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=228)** So I can literally just double-click on each one of these, (computer mouse clicking) and kind of one by one, just suck in the Bounding Box to address all of these problems.
>
> **[4:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=241)** Right, so, you can see how simple this is.
>
> **[4:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=246)** You can see how quick it is, and it really is a considerable time saver.
>
> **[4:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=252)** Like I said, when this PDF was created, none of these figures had the correct, you know, Bounding Box attribute.
>
> **[4:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=260)** But now, if I update the Checker, you'll see that under Structure Elements, all the figures have been fixed.
>
> **[4:27](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=267)** Now we have some tables errors, we have a table regularity error, and that's in this table here.
>
> **[4:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=273)** axesPDF has a table mode.
>
> **[4:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=277)** If you go to the Viewer, we can click on Table.
>
> **[4:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=279)** And I can literally highlight a cell.
>
> **[4:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=282)** And if I go to the Properties, right here is my Column Span, and I can set that to two, to fix that problem.
>
> **[4:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=290)** So I'll set that to two, I'll set that to two.
>
> **[4:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=294)** What I can also do is I can highlight all of these cells.
>
> **[4:58](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=298)** They're already table headers, but right here is my scope, and so, I can set them to row.
>
> **[5:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=305)** So if I refresh this, you'll see that most of my errors have gone away.
>
> **[5:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=311)** So we have irregular row here as well.
>
> **[5:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=315)** So here, (computer mouse clicking) we have to set the Scope to a Column, and I'll actually just set the Column Span to three.
>
> **[5:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=323)** I know I have an empty cell in there that I don't really want to fix right now.
>
> **[5:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=330)** Set the Scope to Column, Scope to Column with a Column Span of three, Scope (computer mouse clicking) to Column.
>
> **[5:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=340)** Right, and if I refresh this, now we're down to few less errors.
>
> **[5:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=347)** So, this is a table header cell issue.
>
> **[5:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=351)** Set that to a column.
>
> **[5:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=352)** (computer mouse clicking) And this one is an empty cell, but it does need a scope, so I'm just going to make it a column header.
>
> **[6:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=365)** I'll do the same thing to the other one.
>
> **[6:11](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=371)** All right, all of these, I forgot about these.
>
> **[6:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=374)** All of these are going to be row headers.
>
> **[6:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=379)** Same thing down here.
>
> **[6:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=380)** (computer mouse clicking) And, (computer mouse clicking) what are we left with?
>
> **[6:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=388)** One more, yep, that's that one.
>
> **[6:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=390)** I'll just make that a column header.
>
> **[6:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=392)** (computer mouse clicking) So now if I refresh that, you can see that in the Structure Elements category, everything is now passing.
>
> **[6:39](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=399)** Under Structured Tree, if you recall this inappropriate use, this is really cool.
>
> **[6:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=406)** You can click on this tag, I can right click, and I can say, "Delete upmost tags."
>
> **[6:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=414)** And what that does is it deletes the P tag, and then the Marked Content just kind of slides up in between.
>
> **[7:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=421)** Same thing with our TBody, I'll just say, "Delete upmost tags" and the rows come into place.
>
> **[7:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=429)** And in the note tag, yeah, that one is a situation where that footnote needs to be a Block level element.
>
> **[7:18](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=438)** So in the Placement, I'm going to say "Block."
>
> **[7:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=442)** And I think I have some figures that are in the same situation.
>
> **[7:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=448)** This is really cool.
>
> **[7:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=450)** I'm going to go ahead and do a Save as on this, and I'll call this, "finish."
>
> **[7:36](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=456)** (computer mouse clicking) I can change this figure to be a Block level element, just by going like that.
>
> **[7:42](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=462)** And then down here in the tag search, I can do a search for figure, hit enter and it'll jump to the next one.
>
> **[7:49](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=469)** So I can say, "Okay, Block.
>
> **[7:53](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=473)** Next one, Block.
>
> **[7:56](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=476)** (computer mouse clicking) Next one, Block."
>
> **[7:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=479)** You know, it makes it super easy to kind of go through here, and just make sure that I have everything set up appropriately.
>
> **[8:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=489)** And if I refresh the Checker, you know, you can see all my errors are just starting to dwindle here.
>
> **[8:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=495)** The Role mapping, we have a Rolemap tab right here.
>
> **[8:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=499)** And right here, we can see how we're mapping an artifact to an artifact, and that's that circular mapping problem.
>
> **[8:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=508)** Although I can adjust the Rolemap in here, I can't actually delete it.
>
> **[8:33](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=513)** So, I would probably just do that inside of Acrobat.
>
> **[8:37](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=517)** And then we have an error alternative descriptions for annotations.
>
> **[8:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=521)** If I go to my Extras tab, I have a button to Set the Contents key of the link annotations.
>
> **[8:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=527)** And if I refresh this, you can see that pretty much everything except the Rolemap has been fixed.
>
> **[8:54](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=534)** Now I got this new error and this is common.
>
> **[8:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=537)** It's a Structural parent tree error, but if I come up here to Logical Structure, I can click on Rebuild Structural Parent Tree, and that'll fix that problem.
>
> **[9:08](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=548)** So, I hope you guys could see.
>
> **[9:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=550)** Using axesPDF, I'm pretty much able to fix those problems in a fraction of the time that would normally be required.
>
> **[9:20](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/axespdf?u=76281980&t=560)** So, if you are tasked with taking existing PDFs and making them compliant, I highly encourage you to give axesPDF a try.

> [!info]- Semantic Content
>
> **Code Identifiers:** axespdf (14), axesword (3), axes4 (1)
> **UI Navigation:** click on (6), go to (6), double-click (2), open the (1), scroll down (1)
> **Code Keywords:** this, (7), delete (3), self (1), super (1), try. (1)
> **Non-Speech:** (computer mouse clicking) (9)
> **Definitions:** is a  (5), is an  (1)
> **CLI Commands:** make (4), find (1)
> **Env Vars:** pdf (4), pac (1)
> **Analogies:** similar to (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps for accessibility
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=0)** - [Instructor] Hey guys, you made it.
>
> **[0:02](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=2)** I'm really proud of you guys for sticking with me through this course.
>
> **[0:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=5)** I hope you learned a lot.
>
> **[0:06](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=6)** I hope you learned some good tips and solutions to problems you've been having.
>
> **[0:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=12)** If you're looking for next steps, there's some things I'd like to share with you.
>
> **[0:16](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=16)** One thing I'd like to show you is our website, which is [accessibilityunraveled.com](https://accessibilityunraveled.com).
>
> **[0:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=22)** We have weekly webinars on various accessibility topics.
>
> **[0:28](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=28)** We also provide training and consulting.
>
> **[0:31](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=31)** If you or your organization is looking to implement accessibility and you need help, you need people trained, you need guidance, please reach out to us.
>
> **[0:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=41)** If you're also interested in Access Word, Access PDF or MadetoTag, please reach out to us.
>
> **[0:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=48)** We could provide you with licenses on that.
>
> **[0:51](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=51)** Another great resource is the CHAX Chat Podcast.
>
> **[0:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=55)** We try to make this podcast weekly.
>
> **[0:59](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=59)** Holidays sometimes throw us off a little bit in our schedule, but we are up into, I think we're almost at like 80 episodes.
>
> **[1:07](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=67)** We've been doing this for almost two years.
>
> **[1:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=69)** So check it out.
>
> **[1:10](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=70)** It's totally free, and you can get it on any of the major podcast platforms, you know, Spotify, Apple Music, you name it.
>
> **[1:19](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=79)** Another great resource that a lot of people are leveraging is the PDF Accessibility Facebook group.
>
> **[1:26](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=86)** Now, again, I know some of you're saying, well, I'm really a Facebook user, and that's totally okay.
>
> **[1:32](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=92)** But I'll tell you, it's almost worth joining Facebook just for access to this group.
>
> **[1:38](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=98)** We have over 3000 members at this point, and it's just a fantastic resource to go and ask your questions, ask for guidance.
>
> **[1:48](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=108)** Like I said, there's 3000 people out there who can respond to you and give you answers.
>
> **[1:55](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=115)** I also recommend, I mean, if you're looking to kind of keep expanding your knowledge base and expanding what you know, there's a lot of great conferences that you can attend.
>
> **[2:05](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=125)** One of my favorites is the Creative Pro Conference.
>
> **[2:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=129)** This year, it's June 5th to 9th in Phoenix, Arizona.
>
> **[2:14](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=134)** It's a great resource.
>
> **[2:15](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=135)** There are accessibility sessions.
>
> **[2:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=137)** There are also creative sessions, so check it out.
>
> **[2:22](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=142)** It's really a great event.
>
> **[2:23](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=143)** It's fairly small size, so it's nice and intimate and really a great event.
>
> **[2:29](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=149)** Similar to Creative Pro, every year we have The Design Accessibility Summit, and this is a accessibility-focused conference.
>
> **[2:41](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=161)** It is an online-only event, which may make it easier for some of you to attend.
>
> **[2:46](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=166)** I speak there, Dax Castro speaks there, a lot of great speakers.
>
> **[2:52](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=172)** We also speak at Creative Pro, and I highly encourage you to check it out, covers topics on PDF Accessibility, InDesign, Acrobat, PowerPoint, and Word, really, really great information.
>
> **[3:04](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=184)** If you're looking for like a heavy duty accessibility conference, CSUN is a great conference to go to.
>
> **[3:12](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=192)** This year, it is March 13th to 17th in Anaheim, California.
>
> **[3:17](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=197)** I'm telling you, if you really want to grow your knowledge and learn more about accessibility overall and about the experience of people with disabilities, it's a fantastic conference to go to.
>
> **[3:30](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=210)** And then another great accessibility conference is called Accessing Higher Ground.
>
> **[3:35](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=215)** This conference is typically in Denver, and next year's date is already up here.
>
> **[3:40](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=220)** It's November 6th to 10th, 2023, another great conference on accessibility.
>
> **[3:47](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=227)** Again, Dax Castro and myself speak at this event.
>
> **[3:50](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=230)** We also speak at CSUN, and it's just a great event to go to to learn more about accessibility in general.
>
> **[3:57](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=237)** So I hope you guys enjoy these resources, check them out.
>
> **[4:01](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=241)** And, as I said before, I'd love to hear what you think of the course and always am looking for feedback and want to know what you think.
>
> **[4:09](https://www.linkedin.com/learning/advanced-accessible-pdfs-21974253/next-steps-for-accessibility?u=76281980&t=249)** So I hope to hear from you guys soon.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (3), csun (2), chax (1)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **UI Navigation:** go to (3)
> **CLI Commands:** make (2)
> **Code Keywords:** throw (1)
> **URLs:** [accessibilityunraveled.com](https://accessibilityunraveled.com) (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Chad Chelius]]

## Resources

- Exercise files available

## Skills Covered

- PDF Management
- IT Accessibility

## Path Context

### In [[Build for Digital Accessibility]]
← [[Creating Accessible PDFs]] | **3 of 12** | [[Accessibility and Inclusion with Figma]] →

## Appears In

- [[Build for Digital Accessibility]]

## Related Courses

_Courses sharing skills:_

- [[Creating Accessible PDFs]] — PDF Management, IT Accessibility

---

[↑ Back to top](#)