---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: html-metadata-in-the-head
url: "https://www.linkedin.com/learning/html-metadata-in-the-head"
duration_minutes: 84
duration: 1h 24m
level: Intermediate
updated: 2/5/2024
learners: 18876
skills:
  - Metadata
  - HTML
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQGtJg65REXNLQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1592866545568?e=2147483647&amp;v=beta&amp;t=x-YRRi1yhasBAACFk9AgfEfN3-sU3YHvuXOB19LGjFI"
linkedin_topic: Web Development
learning_paths:
  - '[[Advance Your Skills in HTML]]'
prev_courses:
  - '[[HTML- Tables]]'
next_courses:
  - '[[HTML & CSS- Creating Forms]]'
path_nav: '[{"path":"Advance Your Skills in HTML","position":6,"total":11,"prev":"HTML- Tables","next":"HTML & CSS- Creating Forms"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/metadata
  - skill/html
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/HTML-%20Metadata%20in%20the%20Head.md)

![HTML: Metadata in the Head](https://media.licdn.com/dms/image/v2/C4D0DAQGtJg65REXNLQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1592866545568?e=2147483647&amp;v=beta&amp;t=x-YRRi1yhasBAACFk9AgfEfN3-sU3YHvuXOB19LGjFI)

# HTML: Metadata in the Head

> The HTML head element is different from the rest of the language, providing context rather than content. Want to control how your page appears on social media? Apply a title? Link a style? All that and more happen in the head. In this course, learn to leverage the invisible but powerful head element to improve search engine rankings, social media sharing, and more. Instructor Jen Kramer shows how 

> [LinkedIn Learning](https://www.linkedin.com/learning/html-metadata-in-the-head) | 1h 24m | Intermediate | 19K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Setting expectations for your document](#setting-expectations-for-your-document)
  - [Working with Visual Studio Code](#working-with-visual-studio-code)
- [**1. Before the Head of the Document**](#1-before-the-head-of-the-document) (2 videos)
  - [Establishing language in your document](#establishing-language-in-your-document)
  - [Establishing a document type](#establishing-a-document-type)
- [**2. Understanding Meta Tags**](#2-understanding-meta-tags) (10 videos)
  - [How do meta tags work?](#how-do-meta-tags-work)
  - [Setting character sets](#setting-character-sets)
  - [Redirecting pages with meta refresh](#redirecting-pages-with-meta-refresh)
  - [Identifying authors and conversations](#identifying-authors-and-conversations)
  - [Setting the viewport](#setting-the-viewport)
  - [Setting color themes](#setting-color-themes)
  - [Presenting your page to Facebook](#presenting-your-page-to-facebook)
  - [Checking your work for Facebook](#checking-your-work-for-facebook)
  - [Challenge: Configuring meta information](#challenge-configuring-meta-information)
  - [Solution: Configuring meta information](#solution-configuring-meta-information)
- [**3. Other Head Tags**](#3-other-head-tags) (8 videos)
  - [Adding a title to your page](#adding-a-title-to-your-page)
  - [Creating identity for your pages with icons](#creating-identity-for-your-pages-with-icons)
  - [Linking styles to your page](#linking-styles-to-your-page)
  - [Specifying style directly](#specifying-style-directly)
  - [Connecting scripts](#connecting-scripts)
  - [Establishing a base URL](#establishing-a-base-url)
  - [Challenge: Establishing scripts, styles, and icons](#challenge-establishing-scripts-styles-and-icons)
  - [Solution: Establishing scripts, styles, and icons](#solution-establishing-scripts-styles-and-icons)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting expectations for your document](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-expectations-for-your-document-23202364?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-expectations-for-your-document-23202364?u=76281980&t=0)** - When teaching [[HTML]], we're so eager for students to get something on the screen that we tend to skip over the HTML head of the document.
>
> **[0:09](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-expectations-for-your-document-23202364?u=76281980&t=9)** This course aims to end all of that.
>
> **[0:11](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-expectations-for-your-document-23202364?u=76281980&t=11)** We'll explore the tags read by robots and search engines that provide all kinds of information about your website.
>
> **[0:18](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-expectations-for-your-document-23202364?u=76281980&t=18)** You'll also learn why you should add these tags, and what it will do to your page's accessibility to search engines and to other automated systems.
>
> **[0:27](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-expectations-for-your-document-23202364?u=76281980&t=27)** I'm Jen Kramer, an educator and web developer with years of experience in working with HTML and CSS.
>
> **[0:34](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-expectations-for-your-document-23202364?u=76281980&t=34)** So if you're ready, let's get started with "HTML: [[Metadata]] in the Head".

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[Metadata]] (1)
> **Env Vars:** html (4), css (1)
> **Speakers:** - when (1)

#### [Working with Visual Studio Code](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=0)** - [Instructor] In order to follow along with the exercises in this course, you will need some type of editor that will allow you to edit the head of an [[HTML]] file.
>
> **[0:11](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=11)** I'll be using a piece of software called VS Code, or Visual Studio Code.
>
> **[0:17](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=17)** It's available for [[Microsoft]] and it's free.
>
> **[0:20](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=20)** You can download it at code.[visualstudio.com](https://visualstudio.com).
>
> **[0:25](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=25)** I'm running a Macintosh.
>
> **[0:27](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=27)** And so right here on this page, I have a big button here that says Download for Mac.
>
> **[0:32](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=32)** You might be running a different operating system.
>
> **[0:35](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=35)** Those other operating systems are indeed available, Mac, [[Windows]] and [[Linux]].
>
> **[0:41](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=41)** And of course, if you're looking at this webpage on a Windows machine, it probably says Download for Windows.
>
> **[0:47](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=47)** That's still the same spot.
>
> **[0:49](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=49)** Go on ahead and download the software and install it.
>
> **[0:54](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=54)** Once you do so and you open up VS Code, you should see a screen that looks similar to this.
>
> **[1:01](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=61)** This is the welcome page that they give you when you first open this editor.
>
> **[1:05](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=65)** You can easily close that.
>
> **[1:08](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=68)** And when you close that, you'll see a screen that looks like this.
>
> **[1:12](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=72)** If you've downloaded the exercise files already, I've done so, they're right here on my desktop, I can simply drag the Exercise Files folder over and drop it.
>
> **[1:23](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=83)** And it's going to ask me if I want to save the current workspace configuration as a file.
>
> **[1:27](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=87)** I don't.
>
> **[1:28](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=88)** And it will go on ahead and drag in those exercise files over here on the side for me.
>
> **[1:35](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=95)** This is through this button over here on the side that looks like this.
>
> **[1:39](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=99)** And you can open up these accordion items here.
>
> **[1:43](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=103)** And this will show you where your files and folders are located in the Exercise Files folder so you can follow along with everything that will be happening in this course.
>
> **[1:54](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=114)** One very important thing to do in order to get started is to make sure you know exactly how to create an HTML file.
>
> **[2:02](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=122)** So I want to walk through that with you at this point.
>
> **[2:04](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=124)** So if you just simply go on ahead and say File, New File, this will give you a blank document.
>
> **[2:10](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=130)** The first thing I'm going to do is just say File, Save.
>
> **[2:14](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=134)** I'm just going to save this right directly on my desktop.
>
> **[2:18](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=138)** And I'm going to call this head.html.
>
> **[2:23](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=143)** It's very important that you put in the .html on the end so that VS Code will know that this is an HTML file.
>
> **[2:32](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=152)** Go ahead and say Save.
>
> **[2:34](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=154)** At that point, if you type an exclamation point followed by a tab, you should get an entire framework put up here for the body of an HTML document.
>
> **[2:47](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=167)** And it will look just like this.
>
> **[2:49](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=169)** You don't have to use this trick.
>
> **[2:51](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=171)** But it's really helpful.
>
> **[2:52](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=172)** It'll give you some of the key HTML head tags that you need here in order to start to configure some of your webpages.
>
> **[3:02](https://www.linkedin.com/learning/html-metadata-in-the-head/working-with-visual-studio-code-22996814?u=76281980&t=182)** So this is a very handy trick that happens to be built into VS Code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (7), [[Windows]] (3), [[Microsoft]] (1), [[Linux]] (1)
> **Env Vars:** html (5)
> **Tools:** vs code (4), visual studio (1)
> **Exercise Files:** exercise files (4), download the (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** similar to (1), just like (1)
> **Prerequisites:** install (1), configure (1)
> **File Paths:** head.html (1)


### 1. Before the Head of the Document

[↑ Back to Table of Contents](#table-of-contents)

#### [Establishing language in your document](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-language-in-your-document-23204067?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-language-in-your-document-23204067?u=76281980&t=0)** - [Narrator] At the very start, of your [[HTML]] document sits the HTML tag itself.
>
> **[0:07](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-language-in-your-document-23204067?u=76281980&t=7)** If you're watching this video from the United States, chances are that the head of your document, looks similar to this.
>
> **[0:14](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-language-in-your-document-23204067?u=76281980&t=14)** This indicates that we're using general English for the language in this document en for English.
>
> **[0:20](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-language-in-your-document-23204067?u=76281980&t=20)** If you happen to be watching this video from another country and installed VS code there, it's possible that this language is set to something different.
>
> **[0:29](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-language-in-your-document-23204067?u=76281980&t=29)** However, as you're likely aware, there are several variants of English for example, American English will ask for a favor, F-A-V-O-R, while British English will ask for a favour, F-A-V-O-U-R.
>
> **[0:45](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-language-in-your-document-23204067?u=76281980&t=45)** You can localize your language by saying something like Lang equals en hyphen US or en hyphen GB
>
> **[0:57](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-language-in-your-document-23204067?u=76281980&t=57)** and that would localize this particular language, to your region of the world, I'm going to change that back to US.
>
> **[1:05](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-language-in-your-document-23204067?u=76281980&t=65)** The language attribute is a global attribute, which may be used with any tag in your document so if you're using additional languages in your document, you may designate that at anytime with the same lang attribute.
>
> **[1:20](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-language-in-your-document-23204067?u=76281980&t=80)** So as you'll see here, as we read on down through our document into our body, here this says, "voila", she said, "I'm all done."
>
> **[1:28](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-language-in-your-document-23204067?u=76281980&t=88)** Voila, is a French [[Microsoft Word|word]], and we can designate this particular part of the document as French, all we'd have to simply do is say Lang equals quote fr and I'm putting that in the q tag, because that happens to encompass that entire word.
>
> **[1:46](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-language-in-your-document-23204067?u=76281980&t=106)** The [[Representational State Transfer (REST)|rest]] of this happens to be English.
>
> **[1:49](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-language-in-your-document-23204067?u=76281980&t=109)** If this was an entire paragraph, you could put lang equals fr into the paragraph, You could even put a div around this or a span if that is appropriate if you have several paragraphs of information, whatever tag happens to work to encompass the portions of this document that are in some language other than English.
>
> **[2:10](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-language-in-your-document-23204067?u=76281980&t=130)** Several machine automated systems will make use of language information when providing services to a web page for example, if you've ever had an misspelt word flagged in a web based editor, you can thank language declaration combined with a spell checker.
>
> **[2:27](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-language-in-your-document-23204067?u=76281980&t=147)** The lang attribute also plays a role in online hyphenation and search results.
>
> **[2:32](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-language-in-your-document-23204067?u=76281980&t=152)** Finally, this is important for accessibility purposes which allows screen readers to use the correct language when reading a page.
>
> **[2:40](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-language-in-your-document-23204067?u=76281980&t=160)** As more automated systems are added to websites, the importance of declaring language will only grow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[HTML]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** for example (2), similar to (1)
> **Env Vars:** html (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Tools:** vs code (1)
> **Speakers:** - [narrator] (1)

#### [Establishing a document type](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-document-type-22994985?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-document-type-22994985?u=76281980&t=0)** - [Instructor] In 2020, for the most part, new webpages are built using HTML5.
>
> **[0:06](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-document-type-22994985?u=76281980&t=6)** However 10 years ago, when we had webpages built in HTML5, XHTML 1.0 and HTML4, how do we know what type of markup language is being used to create a document?
>
> **[0:19](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-document-type-22994985?u=76281980&t=19)** It's the very first line of the page, the DOCTYPE declaration.
>
> **[0:24](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-document-type-22994985?u=76281980&t=24)** HTML4 Transitional is a common form of [[HTML]] and this is the declaration for that type of HTML.
>
> **[0:35](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-document-type-22994985?u=76281980&t=35)** As you can see, it's quite long and it has a lot of elements to it relative to what we see these days with HTML5.
>
> **[0:42](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-document-type-22994985?u=76281980&t=42)** HTML 1.0 Transitional is a form of XHTML.
>
> **[0:47](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-document-type-22994985?u=76281980&t=47)** XHTML was around for several years and incorporated aspects of XML into the HTML.
>
> **[0:55](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-document-type-22994985?u=76281980&t=55)** For example, every tag had to have a closing tag.
>
> **[0:59](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-document-type-22994985?u=76281980&t=59)** The other thing you'll notice here in both HTML4 Transitional and XHTML1 Transitional is the transitional.
>
> **[1:07](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-document-type-22994985?u=76281980&t=67)** The transitional versus strict designation for HTML4 and XHTML indicated the tolerance for tags like the old font tag or using B for the bold tag.
>
> **[1:19](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-document-type-22994985?u=76281980&t=79)** Transitional tolerated these tags while the strict version did not.
>
> **[1:24](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-document-type-22994985?u=76281980&t=84)** When HTML5 came along, we had moved far enough away from those presentational markup tags and towards CSS enough that there was no need to have a transitional versus strict DOCTYPE with HTML5.
>
> **[1:37](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-document-type-22994985?u=76281980&t=97)** At this point, if you encounter a webpage with HTML4 or XHTML markup, you can look at the differences between this type of HTML and HTML5 if you're not familiar with them.
>
> **[1:49](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-document-type-22994985?u=76281980&t=109)** However, seeing a document with this older DOCTYPE is probably a pretty good indication that it's time to redesign the website.
>
> **[1:56](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-document-type-22994985?u=76281980&t=116)** In fact, it's past time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5)
> **Env Vars:** html5 (6), xhtml (5), html4 (5), html (5), doctype (3)
> **Versions:** 1.0 (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Understanding Meta Tags

[↑ Back to Table of Contents](#table-of-contents)

#### [How do meta tags work?](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=0)** - [Instructor] Every webpage occasionally needs to convey information to a search engine, social media site, or other automated system that isn't necessarily relevant to a human.
>
> **[0:12](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=12)** Meta tags are one of the ways that this is done.
>
> **[0:15](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=15)** There are dozens of meta tags that are available for use.
>
> **[0:19](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=19)** Some are specific to [[Google]], Facebook, Twitter, or other technologies and contain information about sharing the webpage.
>
> **[0:28](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=28)** Others are recognized by the web browser, and they provide information for rendering the webpage, like information about languages or screen size.
>
> **[0:37](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=37)** Others still are used by search engines in general rather than by a specific search engine.
>
> **[0:44](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=44)** Meta tags are all configured using the meta tag, thus the name.
>
> **[0:50](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=50)** After that, the similarity ends.
>
> **[0:52](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=52)** Some have a single attribute value like this one, which indicates that the character set is UTF-8 for this particular webpage.
>
> **[1:02](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=62)** Others have a matching name and a content pair, like this tag which indicates that Jen Kramer is the author of this webpage.
>
> **[1:11](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=71)** We tend to call things by names, like the meta keyword tag.
>
> **[1:16](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=76)** Technically, this isn't correct.
>
> **[1:18](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=78)** The tag is technically the meta tag, and the name attribute has a value of keywords.
>
> **[1:25](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=85)** But isn't that so long and awkward to say?
>
> **[1:29](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=89)** When people talk about meta keywords, meta descriptions, and so forth, they usually mean the meta tag with a specific value for the name attribute.
>
> **[1:38](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=98)** Finally, meta tags can go in any order in the head of the document.
>
> **[1:44](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=104)** It doesn't matter if they're grouped together as a block or if they're sprinkled about.
>
> **[1:48](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=108)** I recommend you group them to make them easier to find and understand for the purpose of editing your webpage, but there's no technical reason to do this.
>
> **[1:57](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=117)** Having said this, there's one exception to including your meta tags in any order, and that has to do with the character encoding, which should be listed first.
>
> **[2:07](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=127)** I'll say more about that in another video.
>
> **[2:10](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=130)** So which meta tags should you use and when?
>
> **[2:14](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=134)** As always, it depends on what it is that you want to accomplish with this particular page on your website.
>
> **[2:21](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=141)** However, having said that, some of the typical meta content you'd likely include on every page are a character set so your page renders with the correct alphabet, a description which provides a short, succinct description of the page content, keywords which are words that someone might type into a search engine to find you, and social media tags so that when your page is shared, it displays in an interesting and compelling way.
>
> **[2:52](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=172)** There are other tags you may wish to include under special circumstances.
>
> **[2:56](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=176)** For example, the meta refresh tag is designed to whisk you away from one page to another.
>
> **[3:02](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=182)** As always, I recommend checking the Mozilla Developer Network for the latest information on meta tags.
>
> **[3:10](https://www.linkedin.com/learning/html-metadata-in-the-head/how-do-meta-tags-work-23204070?u=76281980&t=190)** You may also check with a specific service like Google Webmaster Tools for tag configurations specific to that service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** utf (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Setting character sets](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=0)** - [Instructor] You are probably aware that the world doesn't all speak the same language.
>
> **[0:05](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=5)** And you're probably aware that different languages use different characters.
>
> **[0:09](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=9)** Not every language uses the same simple alphabet that English does.
>
> **[0:13](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=13)** In the early days of the internet, if you received an email written in another language, it would typically be full of odd characters, like empty rectangles or question marks.
>
> **[0:24](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=24)** That's because we had yet to establish a standard way of displaying characters on the screen.
>
> **[0:30](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=30)** There are two concepts that make this work; a character set and encoding.
>
> **[0:35](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=35)** There's a marvelous and interesting article that explains this in some detail.
>
> **[0:40](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=40)** So if you'd like lots and lots of details, I recommend reading this article, "The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets, No Excuses!"
>
> **[0:52](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=52)** If this is a little bit much, and you may find it a little bit much, then briefly, a character set will include the characters that make up a particular alphabet, while encoding has to do with how these characters are stored in the computer's memory.
>
> **[1:08](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=68)** The Unicode project has brought these two characteristics together, trying to make one universal character set with universal encoding.
>
> **[1:18](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=78)** The outcome of this is UTF8, which works really well for most webpages.
>
> **[1:25](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=85)** Therefore, in general, you should set your webpage to just as it is here, meta character set equals UTF8.
>
> **[1:34](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=94)** UTF8 includes the characters and encoding for most human languages.
>
> **[1:41](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=101)** In the old days, in English, we used ISO8859-1.
>
> **[1:46](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=106)** Which included the Latin alphabet, but not languages like Chinese, Japanese, Russian, and other languages that don't use the Latin alphabet.
>
> **[1:56](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=116)** That's when you might see a bunch of question marks and boxes instead of those characters.
>
> **[2:02](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=122)** Finally, as that article mentioned earlier, make sure that this is the very first meta tag that you include in the head of your document.
>
> **[2:12](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=132)** So the fact that I've put it here, and I'll change it back to UTF8, and in fact [[Microsoft]] puts it here by default, is a really great thing because what happens is let's say we had this later in the document obviously it's going to be in the head but if we had moved this later in the document, say here, what would happen is that your web browser would start to parse the information that's here and when it hit this character set declaration it would actually go back to the beginning and reparse all of this information again using UTF8.
>
> **[2:47](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=167)** While that's pretty trivial for a head section of a document that's as short as this one, if you look around online you'll find heads of documents that are dozens or even hundreds of lines long.
>
> **[2:59](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-character-sets-23202363?u=76281980&t=179)** So putting this meta character set of UTF8 at the very top, the very first line inside of your head is really important because then you'll only get through a handful of lines before the browser is going to go back and reparse your document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1)
> **Env Vars:** utf8 (6), iso8859 (1)
> **CLI Commands:** make (4), find (2)
> **Cross-References:** later in (2), go back to (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Redirecting pages with meta refresh](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=0)** - [Instructor] There are several ways to redirect one web page to another.
>
> **[0:04](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=4)** Many of these methods involve a server side redirect where you reconfigure the HTaccess file to redirect web pages.
>
> **[0:13](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=13)** However, there is a client side method for redirects as well via the meta refresh tag.
>
> **[0:20](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=20)** And the meta refresh tag, just another meta tags it can go anywhere inside of the head, make sure it goes after the UTF-8 tag.
>
> **[0:28](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=28)** I'm just going to put mine right here after the viewport tag and it starts with meta shockingly, after that, we're going to say HTTP-equiv equals refresh.
>
> **[0:43](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=43)** And then we're going to say something like, the content here equals a number, I'm going to say five followed by a semi colon inside of that quote there, URL equals here I'm going to put an http@www.[[[Google]].com](https://google.com).
>
> **[1:05](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=65)** Then we're going to close our double quotes and close our tag.
>
> **[1:10](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=70)** So, wind up looking something like that.
>
> **[1:13](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=73)** So what exactly does this mean?
>
> **[1:15](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=75)** Well, HTTP equiv is the property that we're working with here.
>
> **[1:19](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=79)** The refresh indicates that we're going to redirect this web page and then content equals obviously we've put in a couple of parameters here.
>
> **[1:29](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=89)** We've put in a single number, followed by a semi colon and then this URL thing and so this is indicating that we're going to take five seconds on this page, and then we're going to redirect to in this case, Google.
>
> **[1:44](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=104)** Occasionally you'll see some text, which is probably a pretty smart thing to do, right now our webpage is completely blank and so, people will have no idea what's going on.
>
> **[1:56](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=116)** They wind up on a blank webpage and then suddenly they're at Google so typically people are going to put something here in the body.
>
> **[2:04](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=124)** Something like redirecting you to Google in five seconds something simple like that.
>
> **[2:13](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=133)** If your refresh is too quick, it will whisk users from one page to another and that's a trick a spammer might use so, be careful using too many of these refresh tags on your website and be careful for setting your time to be too short.
>
> **[2:29](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=149)** Otherwise, those are indicators that you might also be a spammer.
>
> **[2:33](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=153)** However, if you're working with a site where you have no server side access, this may be a reasonable way to redirect one page to another.
>
> **[2:42](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=162)** So we can make this a little bit more informative here, just in case people don't want to wait five seconds to get to Google or however many seconds you sent this for.
>
> **[2:51](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=171)** Obviously we can simply drop in an, a href equals www.google com.
>
> **[3:01](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=181)** You can make it open in a new window if you want and then just from a [[User Experience (UX)|user experience]] perspective, it's always nice to give people choices so we could say something like, return to the main linked in website and of course, then we're going to put in, a tag here.
>
> **[3:26](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=206)** And again, you can make that open in a new window if you wanted.
>
> **[3:30](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=210)** Excellent, so, now once that's in place, then let's just go on ahead and save this and see what it looks like.
>
> **[3:37](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=217)** So we'll go ahead and save this document and now we're going to go to our web page and refresh as you'll see there, it says, redirecting me to Google in five seconds, or I can return to the main [[LinkedIn]] website and sure enough, I have now been redirected to Google after five seconds.
>
> **[3:56](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=236)** So, that is redirecting you to another website that's one way we can use this tag.
>
> **[4:02](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=242)** Another way we can use this tag, is to refresh the contents of the current web page.
>
> **[4:08](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=248)** These days with plenty of asynchronous interactions that are made possible through [[JavaScript]], there's less need for this now, but if you want your web page to refresh every 60 seconds and be incredibly annoying in the process, you can absolutely write that.
>
> **[4:24](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=264)** So, let me just comment out this line here for you and after that, I'm going to put in another meta refresh tag again.
>
> **[4:34](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=274)** So again, it's HTTP equiv equals in this case, we're going to give it a value of refresh and then here we're just going to say content equals quote 60.
>
> **[4:46](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=286)** So in other words, we're giving it a number here inside of content without a URL.
>
> **[4:52](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=292)** And so what this is going to do is refresh the webpage every 60 seconds.
>
> **[4:57](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=297)** So, that might be useful if you have a page that's reporting some kind of fast changing result, like the score of a football game or the accountant in election tally that might be useful for this type of thing and very easy to implement without any JavaScript at all.
>
> **[5:13](https://www.linkedin.com/learning/html-metadata-in-the-head/redirecting-pages-with-meta-refresh-22995802?u=76281980&t=313)** But in general, for asynchronous interactions, JavaScript is what people are using for that these days.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (8), [[JavaScript]] (3), [[User Experience (UX)|User experience]] (1), [[LinkedIn]] (1)
> **Env Vars:** http (3), url (3), utf (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (1), in other words (1)
> **Warnings:** be careful (2)
> **URLs:** [google.com](https://google.com) (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Identifying authors and conversations](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=0)** - [Instructor] If you've heard of a meta tag before, it's generally the meta keywords and the meta description tags that you've encountered.
>
> **[0:07](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=7)** The author tag is less common, but it's something you may want to include on your website.
>
> **[0:12](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=12)** First, let's focus on meta description and meta keywords.
>
> **[0:16](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=16)** You've probably heard all kinds of conflicting information about these elements.
>
> **[0:21](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=21)** Are they used by search engines anymore?
>
> **[0:24](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=24)** How important are they?
>
> **[0:26](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=26)** Can they always say the same thing?
>
> **[0:28](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=28)** First, let's cover the formation of the meta description and meta keywords tags.
>
> **[0:34](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=34)** As you know, it's a meta tag with a name attribute, with a value of description or keywords.
>
> **[0:41](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=41)** Following that, the content attribute will hold the actual keywords, or the actual description of the webpage.
>
> **[0:49](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=49)** Here we have a meta description tag, and the content is that "Pride and Prejudice" by Jane Austen is a romantic novel published in 1813.
>
> **[0:59](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=59)** If we were to do this as a keyword tag, it would look something like this.
>
> **[1:03](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=63)** So we have a meta name of keywords with the content of things that people might search in order to find this particular page.
>
> **[1:10](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=70)** So, the author name of Jane Austen, "Pride and Prejudice", which is the name of the novel, the fact that it is a novel, it's a romance novel, it's from the 19th century.
>
> **[1:19](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=79)** In the very early days of the web, the meta keywords were used to determine what words someone might type into a search engine to find the page.
>
> **[1:27](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=87)** However, that isn't used much anymore for [[Google]] and other major search engines.
>
> **[1:33](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=93)** These days, Google gets its keywords from the content of your page, your page title, and in other ways.
>
> **[1:40](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=100)** Meta keywords may still be important for a site search.
>
> **[1:44](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=104)** So, a search within the site itself.
>
> **[1:46](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=106)** Or, for other applications within a website.
>
> **[1:50](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=110)** However, if you're still configuring meta keywords for Google's sake, you really don't need to do that.
>
> **[1:56](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=116)** The meta description may be used by some search engines to provide a description of the web page in the search results.
>
> **[2:04](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=124)** So, here is a meta tag which is describing a search result that looks like this.
>
> **[2:11](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=131)** So here is, The Guardian wrote an article about Jane Austen's "Pride and Prejudice".
>
> **[2:17](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=137)** As you see here, we have the actual URL for that particular article, and then we have a date, and we have a description.
>
> **[2:25](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=145)** "Mr. Bennett's a bully, Elizabeth can't stand women."
>
> **[2:28](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=148)** And as you see here, that description came from this meta tag, the meta description tag, which I took out of the source code for that particular webpage.
>
> **[2:40](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=160)** However, if we take a look at Project Gutenberg.
>
> **[2:44](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=164)** Project Gutenberg, if you're not familiar with it, it publishes a whole lot of novels like this that are now out of copyright, and they give them away for free.
>
> **[2:56](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=176)** It's meta description here in its Google search result looks very very different.
>
> **[3:01](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=181)** And you'll see why when you take a look at the text on this page.
>
> **[3:05](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=185)** Because no meta description was provided, the very first part of the web page is typically used as the page description.
>
> **[3:15](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=195)** So in this case, it says "Pride and Prejudice" by Jane Austen.
>
> **[3:18](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=198)** Rather than getting a description of the book, it just says the Project Gutenberg ebook of "Pride and Prejudice" by Jane Austen, and it's for free for use of anyone, anywhere, at no cost, and with almost no restrictions.
>
> **[3:30](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=210)** Finally, the author meta tag is used, shockingly, to indicate the author or authors of a webpage.
>
> **[3:38](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=218)** So, here I've got an author tag where I'm an author, or here's another author tag where my friend Heather O'Neill and I are authors.
>
> **[3:48](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=228)** And perhaps [[LinkedIn]] Learning deserves a credit as well.
>
> **[3:51](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=231)** So, those are two possible variants there on the author tag.
>
> **[3:55](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=235)** That content can be anything.
>
> **[3:58](https://www.linkedin.com/learning/html-metadata-in-the-head/identifying-authors-and-conversations-23000520?u=76281980&t=238)** It just depends on what makes the most sense for the issue at hand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (4), [[LinkedIn]] (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (2)
> **Env Vars:** url (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Setting the viewport](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=0)** - [Instructor] If you've previously done work with responsive design, it's likely you already know about the meta viewport tag.
>
> **[0:07](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=7)** But there's more you can learn.
>
> **[0:09](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=9)** By default, VS Code includes this tag for us automatically when we set up a new web page.
>
> **[0:15](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=15)** It's right here on line number five, it says meta name of viewport.
>
> **[0:19](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=19)** And then it has this content attribute, which has two values with it, a width of a device-width, and an initial scale of 1.0.
>
> **[0:28](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=28)** And you've probably been told in responsive design that this controls the size and the scaling of your web page.
>
> **[0:36](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=36)** And so your webpage will behave responsibly.
>
> **[0:39](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=39)** And so if you were to take a look at this webpage inside of your web browser, and we were to scrunch it down, for example, when we hit our breakpoints, surprisingly, the layout of the web page would change.
>
> **[0:54](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=54)** So this is sort of tablet-ish type size screen and then this would be a phone sort of size screen.
>
> **[1:02](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=62)** And here we've got all of our boxes stacked on top of each other that way.
>
> **[1:06](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=66)** Now, this course is focusing just on the viewport tag itself, I'm not actually going to talk about how this webpage was constructed, or how to create responsive design.
>
> **[1:17](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=77)** But if you're interested in learning more about that, this is the same webpage that we build in this course, which is called "[[CSS- Variables and Fluid Layouts]]".
>
> **[1:27](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=87)** It's available here in the library.
>
> **[1:30](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=90)** There's a lot of crazy stuff I talk about in this course, like CSS custom properties, which are also called CSS variables.
>
> **[1:38](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=98)** There's stuff I'm going to talk about with CSS grid, which controls layouts of web pages, CSS calc, which allows you to do math, and many other styling properties.
>
> **[1:47](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=107)** It's a super fun course.
>
> **[1:49](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=109)** Be sure to check that out.
>
> **[1:50](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=110)** But for now, let's go ahead and go back to our code.
>
> **[1:55](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=115)** So this viewport tag here is responsible for two characteristics of the viewport in the way that we currently have this tag configured.
>
> **[2:04](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=124)** And so whatever device we're going to be looking at, it's going to give this a dimension, that's what this width property here, and it's going to give it a scaling value.
>
> **[2:16](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=136)** So in this particular case, it's saying the width of the viewport should be set to the width of the device.
>
> **[2:24](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=144)** So if the width of the device is only 320 pixels, that's how big the viewport should be.
>
> **[2:29](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=149)** And the appropriate CSS media queries are going to load in with the appropriate styling.
>
> **[2:35](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=155)** And we should scale that to 1.0, meaning that we don't want to [[Zoom]] in or zoom out, we're going to display it that way by default.
>
> **[2:45](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=165)** But does it actually have to have those values?
>
> **[2:47](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=167)** No, of course not, we could have different values if you wish.
>
> **[2:51](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=171)** So if you were to display this web page inside of Chrome, as I've done here, you can work with the Chrome Developer Tools to see how this page would look differently if we had different values in that meta viewport tag.
>
> **[3:05](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=185)** So if you go to View, Developer, Developer Tools, you should wind up with your developer tools coming up, mine are displaying on the left side of the page.
>
> **[3:16](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=196)** By default, they display at the bottom.
>
> **[3:18](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=198)** You can change the position of those views simply by clicking on the three dots here, you should find an option called Dock side and you can move the dock around on the page.
>
> **[3:28](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=208)** This of course, is showing me my desktop view of the webpage.
>
> **[3:32](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=212)** I'm going to actually put it in phone, just to get more of an impact of changing these values.
>
> **[3:37](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=217)** So to do that, click on this button here in the upper left to toggle device toolbar, and set this in the drop down to the iPhone 5SE just for argument's sake.
>
> **[3:49](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=229)** And your window is going to look something like this.
>
> **[3:52](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=232)** Then over in your [[HTML]] code, which is here under Elements, click on the head and open that up, and find the meta viewport tag.
>
> **[4:01](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=241)** And now we're going to change some values here.
>
> **[4:03](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=243)** So first of all, let's work on the scaling property.
>
> **[4:07](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=247)** So the initial scale is set to 1.0, in other words, to 100% zoom, the default.
>
> **[4:13](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=253)** And you can see that our webpage looks the way we would expect it to look at the phone, all these nice boxes stacked on top of each other.
>
> **[4:21](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=261)** But what if we were to zoom out quite a bit?
>
> **[4:25](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=265)** So if we were to zoom out, we could change our initial scale, just double click on it to get to edit this tag, change our initial scale to 0.1, for example, and you'll see that this is trying to display now the desktop version of the site right here inside of the phone.
>
> **[4:43](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=283)** Not terribly effective, and not terribly beautiful, but that is in fact what we told it to do.
>
> **[4:49](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=289)** So make everything display 10 times smaller than it otherwise would.
>
> **[4:54](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=294)** And so now you get something like a desktop display here on the phone.
>
> **[4:59](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=299)** And you could also, of course, zoom in.
>
> **[5:02](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=302)** So instead of having a 1.0 default, let's try a 2.0 default.
>
> **[5:06](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=306)** And as you see, we zoom way in.
>
> **[5:08](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=308)** That's the actual zoomed in portion of the webpage.
>
> **[5:12](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=312)** And you can see that the display is still somewhat phone-like, but it's way larger than what we had before.
>
> **[5:20](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=320)** Okay, so I'm going to change that back to an initial scale of 1.0.
>
> **[5:25](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=325)** Now let's try changing the values of the device width.
>
> **[5:28](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=328)** So here width is equal to the device width, which at the moment, since we're [[Prototyping]] this in the iPhone 5SE, we've got this set to 320 pixels wide.
>
> **[5:40](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=340)** So what if we just change this?
>
> **[5:42](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=342)** What if we just said instead, let's just display it at say 600 pixels.
>
> **[5:49](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=349)** And so in fact, what's happening here now is rather than a zoom type of function, this is actually assuming that the viewport's width is 600 pixels, and that viewport with will be evaluated against the media queries, pulling in those styles and displaying it as such, even though we're on the quote, wrong device, we would not normally expect our tablet styles to be brought in to a phone display.
>
> **[6:16](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=376)** So as you can see here, you can scroll over, the layout is very similar to what you would see on a tablet.
>
> **[6:24](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=384)** So we have two boxes next to each other.
>
> **[6:27](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=387)** And down here, once again, the two boxes next to each other, and the one on the bottom after that.
>
> **[6:36](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=396)** So that's the difference between the zoom and what you see going on here with the width.
>
> **[6:41](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=401)** This is going to bring in your media query styles.
>
> **[6:45](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=405)** Now, you might be wondering if there are some other values you can play with here?
>
> **[6:49](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=409)** Yes, absolutely.
>
> **[6:50](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=410)** Let's change our width back to device width.
>
> **[6:54](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=414)** And then after initial scale equals 1.0, put in a comma and let's say height equals, shockingly, device height.
>
> **[7:07](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=427)** So that is going to tell us to use the height of the viewport will be the height of the particular device that we're working with.
>
> **[7:15](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=435)** That by itself doesn't do a whole lot.
>
> **[7:17](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=437)** But as you can imagine, you don't have to use the device height, you could actually display something else.
>
> **[7:23](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=443)** Let's say I set the height to 1,000 pixels.
>
> **[7:27](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=447)** So here, now this is going to assume that my viewport height is indeed 1,000 pixels.
>
> **[7:32](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=452)** We're not going to see a huge difference here in our phone display, but that is the way that that is something else that you can customize here.
>
> **[7:41](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=461)** There's other values.
>
> **[7:43](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=463)** If you take a look at our old friend CSS-Tricks, there is an article about the responsive meta tag.
>
> **[7:50](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=470)** If you scroll down, maybe about a quarter of the way down the page, you'll find this table that will describe other types of values that you might want to include inside of your meta viewport tag.
>
> **[8:04](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=484)** And notably, I want to point out, 'cause we've talked about the width, the height, and the device width, device height.
>
> **[8:09](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=489)** But notably, I wanted to talk about scaling.
>
> **[8:12](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=492)** So minimum scale, maximum scale, and user scalable.
>
> **[8:15](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=495)** So right now, by default, user scalable is typically set to yes, this is an accessibility issue, you want your users to be able to zoom in or zoom out.
>
> **[8:25](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=505)** And you could set the maximum amount of zoom using minimum scale or maximum scale.
>
> **[8:31](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=511)** But again, you're going to encounter an accessibility issue.
>
> **[8:34](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=514)** If somebody needs to zoom in on your page, they don't expect it to be as beautiful as you would expect the default version of the page to be, let people zoom in so that they can actually consume your content.
>
> **[8:46](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=526)** So just because these properties exist doesn't mean necessarily that they're a smart choice for your [[Web Design]].
>
> **[8:54](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=534)** But if you'd like, feel free to go ahead and experiment with these.
>
> **[8:58](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-the-viewport-23000522?u=76281980&t=538)** You can type in these values just the same way I've showed you into the other webpage and experiment further with the meta responsive viewport tag.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (14), [[HTML]] (1), [[Prototyping]] (1), [[Web Design]] (1)
> **Env Vars:** css (7), html (1)
> **Versions:** 1.0 (6), 0.1 (1), 2.0 (1)
> **UI Navigation:** click on (3), go to (1), toggle (1), scroll down (1)
> **CLI Commands:** find (3), make (1)
> **Definitions:** is an  (2), is called (1), in other words (1)
> **Analogies:** for example (2), imagine (1)
> **Code Identifiers:** iphone (2)

#### [Setting color themes](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=0)** - [Narrator] The next tag I'd like to talk about is one you may not be familiar with, partially because it's got terrible browser support and that is one called the theme color metatag, and this has to do with the color of the bar above your web browser.
>
> **[0:15](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=15)** At this point it's pretty much only on your mobile device, but in theory it could be on a desktop device as well.
>
> **[0:21](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=21)** By setting this to a color, you'll change the color of that bar for that particular webpage, and just to show you how to put this in, I'm going to go on ahead and add this metatag.
>
> **[0:32](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=32)** I'm going to group it with the other ones, but it could go anywhere in the head of your document.
>
> **[0:36](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=36)** It's a metatag.
>
> **[0:38](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=38)** The name is theme color, and then the content for it would equal some sort of color value and I'm going to say bad6545.
>
> **[0:50](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=50)** That color could be in any of the usual formats.
>
> **[0:54](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=54)** This is, of course, a hex code with six digits.
>
> **[0:57](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=57)** It could be three digit hex codes, RGB, RGBA, HSL, HSLA, or a text color name like tomato would be just fine, would work in those particular situations.
>
> **[1:10](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=70)** So, if we were to just go on ahead and save this and put it into our webpage and refresh, you're going to notice that absolutely nothing happens here inside of your Chrome browser and that's because it's just not supported on desktop.
>
> **[1:26](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=86)** In fact, if we take a look at can I use, you'll see that the support here is spotty at best, but it is supported on a mobile device, so I took a screen shot of this particular webpage with the meta theme color set.
>
> **[1:44](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=104)** This is a Chrome browser on my [[Android]] phone and you'll see Chrome up here on the the top of the page is the same green that I have here in the navigation, and so that displays very, very nicely.
>
> **[1:58](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=118)** If I didn't have the theme color set, then those would be the standard Android colors, which are not that green.
>
> **[2:05](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=125)** So, what do we think about a tag like this that's just so not supported anywhere except in this very narrow portion of devices?
>
> **[2:12](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=132)** Well, yes, it is true that this is a tag that you're adding that's just not going to be supported anywhere, but what's the downside?
>
> **[2:19](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=139)** Basically, there really isn't one.
>
> **[2:21](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=141)** In this case, Chrome is just ignoring the tag here.
>
> **[2:24](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=144)** It's not supported in Chrome for our Mac, and so I don't see it in use here on my particular display.
>
> **[2:32](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=152)** This is the concept of progressive enhancement, so we're adding a tag that has no downside to browsers that don't support it, but browsers that do support it get just a little bit of extra sizzle, so I would say that if this is something you want to use on your webpages, feel free to go on ahead and use it.
>
> **[2:52](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=172)** A handful of people will enjoy it for now.
>
> **[2:54](https://www.linkedin.com/learning/html-metadata-in-the-head/setting-color-themes-23202365?u=76281980&t=174)** In theory, at a later point in time maybe some of these other browsers will go on ahead and support it as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (2)
> **Env Vars:** rgb (1), rgba (1), hsl (1), hsla (1)
> **Definitions:** is a  (2)
> **Speakers:** - [narrator] (1)

#### [Presenting your page to Facebook](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=0)** - [Jen] Facebook created a new way of including social information in the head of an [[HTML]] document and its protocol has been set to be open-source, it's called the Open Graph data.
>
> **[0:13](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=13)** And you can find lots of documentation about it online, notably in two places.
>
> **[0:18](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=18)** One is here at the Facebook for Developers page and as you'll see here if you scroll on down this webpage it will tell you about what Open Graph markup is, it'll give you an example and it'll give you a handful of very basic tags that are available to you in terms of putting together some very basic Open Graph data markup for your website.
>
> **[0:43](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=43)** So that's lovely but if you want it in a little bit more detail and with more options available to you have a look at The Open Graph protocol website at ogp.me.
>
> **[0:54](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=54)** And this particular website is going to give you a little bit more detail about some of these.
>
> **[0:59](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=59)** There's some basic ones here.
>
> **[1:01](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=61)** So here we're looking at the movie "The Rock" on The Internet Movie Database, IMDB, and here what we have is a listing of a handful of meta properties pertaining to that and then as we scroll down a little bit further it'll talk about some optional [[Metadata]] and then we go onto Structured Properties and Arrays and all kinds of things that are possible here.
>
> **[1:24](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=84)** So you'll get much more information about these kinds of tags if you look at the Open Graph protocol website.
>
> **[1:31](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=91)** So while we're here let's go on back to those tags here about "The Rock" and I'm just going to go ahead and copy these four lines, the ones that are listed as og:title, og:type, og:url and og:image.
>
> **[1:46](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=106)** As you can imagine here og is Open Graph and then that is followed by the type of resource that we have, going to be talking about.
>
> **[1:54](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=114)** I'll tell you about all of those in just a second.
>
> **[1:56](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=116)** Go on ahead and copy that and let's go back to our code and I'm just going to paste this into the head of the document.
>
> **[2:04](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=124)** Once again these are meta tags, they can go anywhere in the head of the document, don't put 'em before the character set here, the UTF-8, but they could go anywhere else in the head.
>
> **[2:14](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=134)** Generally speaking I group all my meta tags together, you'll find most developers do that.
>
> **[2:19](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=139)** So here we have first of all og:title, so that's the title of your object as it should appear.
>
> **[2:26](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=146)** Course that's the name of the movie is "The Rock."
>
> **[2:28](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=148)** Here this is not "The Rock" this is "Hansel and Petal" so let's go ahead and type that in, "Hansel & Petal."
>
> **[2:37](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=157)** The next one is og:type.
>
> **[2:39](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=159)** So this is the type of your object and this is the type of resource that we're looking at.
>
> **[2:45](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=165)** It could be music, it could be a video, an article, a book, a profile or a website.
>
> **[2:52](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=172)** Company isn't a choice in this particular case so generally if you're working on something that doesn't fit into the other types it's a website and this is of course a website so let's go on ahead and put it in website, great.
>
> **[3:05](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=185)** The next thing that's going to show up here is the website URL.
>
> **[3:10](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=190)** Now remember that ultimately this is for sharing purposes on Facebook.
>
> **[3:14](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=194)** So when people are sharing this specific webpage what is automatically going to be clickable on Facebook and where will they go with that particular link?
>
> **[3:26](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=206)** So in other words if you always link everything to the homepage but you happen to be talking about how to contact us people are going to wind up going to your homepage and then go, "Well where's the contact form?"
>
> **[3:37](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=217)** So you want to make sure you're linking to the exact page where you want people to click and go.
>
> **[3:42](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=222)** In this particular case it is the homepage and I'm posting this on my own personal web hosting so I'm going to list this as www.[jenkramer.org/hp/index.html](https://jenkramer.org/hp/index.html),
>
> **[3:56](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=236)** that is where this is ultimately going to be hosted.
>
> **[3:59](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=239)** For the image, you've probably seen Facebook before, a lot of times as you share a URL you have a lovely picture that comes up by default, this is how that is coded.
>
> **[4:10](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=250)** And so that image could be anything.
>
> **[4:13](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=253)** You could make it a logo for your company, you could make it something eye-catching which is what I'm going to do.
>
> **[4:18](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=258)** I think people would rather see pretty pictures than logos and so I've decided that the pretty picture I want to show is this one, the crocus, as my default image.
>
> **[4:29](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=269)** We are going to code this with an absolute URL once again and that would be based on wherever it is that you're hosting this website.
>
> **[4:37](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=277)** The reason we use an absolute URL once again is because ultimately this shows up on Facebook.
>
> **[4:42](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=282)** If we used our relative URL then Facebook would try to find that image on [facebook.com](https://facebook.com) and it would fail.
>
> **[4:51](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=291)** So make sure you use an absolute URL.
>
> **[4:54](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=294)** So once again www.[jenkramer.org/hp/img/crocus.jpg](https://jenkramer.org/hp/img/crocus.jpg),
>
> **[5:03](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=303)** that's where this is going to go.
>
> **[5:05](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=305)** So those are the super basic tags as they mentioned.
>
> **[5:09](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=309)** There are other ones that you could add if you wish to do so.
>
> **[5:14](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=314)** The tag that I'm going to take a look at is the one for an alt tag for my image because all images deserve alt tags.
>
> **[5:23](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=323)** So if you scroll on down here under Structured Properties on the ogp.me website you'll see here that we have og:image:alt which is a description of what is in the image, not a caption.
>
> **[5:36](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=336)** And as it says here actually, "if the page specifies an og:image it should also specify "an alt," which is what you've been taught for images throughout your, whatever education you had about HTML.
>
> **[5:49](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=349)** So I find it amusing that in fact it is not one of those required tags to probably show up in that main example.
>
> **[5:57](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=357)** Notice too there's some other things that you can add if you want.
>
> **[6:00](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=360)** You could indicate the type of the image, you could indicate its width and its height if those were things that you wanted to indicate.
>
> **[6:06](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=366)** I'm just going to go on ahead and grab this little bit of code right here and that's my alt tag.
>
> **[6:13](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=373)** I'm going to go ahead and paste that into VS Code and I'll just put that right after the image.
>
> **[6:21](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=381)** And so now we can put in an alt tag here, these are, "Purple crocus flowers.
>
> **[6:31](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=391)** "Click to visit 'Hansel and Petal.'"
>
> **[6:36](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=396)** Notice that I put in some periods in here?
>
> **[6:39](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=399)** That has to do with screen readers that might be reading this particular text.
>
> **[6:44](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=404)** And so I have a description of what it is and actually what will happen if you click it.
>
> **[6:48](https://www.linkedin.com/learning/html-metadata-in-the-head/presenting-your-page-to-facebook-22995804?u=76281980&t=408)** All right, so now we've gone ahead and we've put in some basic structure for our Open Graph tags and the next thing I'd like to do is to check our work using the Facebook Sharing Debugger.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Metadata]] (1)
> **Env Vars:** url (6), html (2), imdb (1), utf (1)
> **CLI Commands:** find (4), make (4)
> **URLs:** [jenkramer.org](https://jenkramer.org) (2), [facebook.com](https://facebook.com) (1)
> **Definitions:** is a  (2), in other words (1)
> **Analogies:** picture (2), imagine (1)
> **File Paths:** www.jenkramer.org/hp/index.html (1)
> **Cross-References:** go back to (1)

#### [Checking your work for Facebook](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=0)** - [Instructor] Once you've created the Open Graph tags in the head of your document, you should put the page online somewhere where it can be reached by the Facebook Sharing Debugger.
>
> **[0:11](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=11)** This means you could have added those Open Graph tags to the head of a [[WordPress]] site, the top of your [[JavaScript]]-based application or in the head of your Static [[HTML]] webpage, which is what I did here.
>
> **[0:24](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=24)** That page needs to be on the internet, not solely on your local computer, so that the Debugger might index it.
>
> **[0:31](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=31)** So go on ahead and use FTP or [[GitHub]] or whatever you want to use to get that page on some web hosting right now.
>
> **[0:40](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=40)** And when you've done that, copy whatever your address happens to be to get to that webpage and then we're going to go ahead and paste that into the Facebook Sharing Debugger, which is at developers.[facebook.com/tools/debug](https://facebook.com/tools/debug).
>
> **[0:58](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=58)** Go on ahead and hit the debug button once you've pasted that URL in and it will tell you that this URL hasn't been shared on Facebook before.
>
> **[1:06](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=66)** Shocking, you just put it up online so, of course, it hasn't been shared.
>
> **[1:10](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=70)** Go on ahead and click [[Fetch]] new information and Facebook will go out and index that particular page that you shared.
>
> **[1:18](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=78)** And so a couple of things it's going to tell you is this, so the very first thing is that the provided og image's properties are not yet available because new images are processed asynchronously.
>
> **[1:29](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=89)** To ensure that shares of new URLs include an image, specify the dimensions using og image width and og image height tags.
>
> **[1:38](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=98)** So those were two tags where you could specify the dimensions of your image, but they weren't required.
>
> **[1:45](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=105)** If you include them, then as soon as you put the page up on Facebook, Facebook will know how big the image is and can display it.
>
> **[1:52](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=112)** Otherwise you have to wait for Facebook to finish indexing that particular page before it can be displayed on the website.
>
> **[1:59](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=119)** So these might be tags that you're going to want to include, og image width and og image height, depending on how long it's going to be until you share that specific page on Facebook.
>
> **[2:11](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=131)** As you scroll on down, you're going to get other information here and it'll tell you the time scraped and the URL that it fetched and so forth.
>
> **[2:21](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=141)** It'll tell you any sort of redirect path that's in place.
>
> **[2:25](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=145)** So, for example, I put in my web address without the www and it redirected to the www, which is in fact what I programmed into the tag.
>
> **[2:37](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=157)** So that's something to keep in mind.
>
> **[2:39](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=159)** It'll give you a preview of what this link is going to look like right now.
>
> **[2:43](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=163)** And remember, once again, I programmed an image to show up here but Facebook hasn't indexed it.
>
> **[2:49](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=169)** So right now it looks like just text.
>
> **[2:52](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=172)** The other thing you'll probably want to notice immediately is that the text that's here is what?
>
> **[2:57](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=177)** It's the disclaimer from the bottom of the webpage.
>
> **[3:00](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=180)** So if you actually go to the webpage here, notice that there's not a whole lot of text on this webpage, it's little links and little sentences here and there.
>
> **[3:09](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=189)** The most amount of text I have on this page is, in fact, the disclaimer down here on the bottom of the webpage.
>
> **[3:15](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=195)** And so Facebook has decided that that is the appropriate description for the webpage.
>
> **[3:21](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=201)** As it says here, based on the raw tags, we constructed the following Open Graph properites.
>
> **[3:26](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=206)** And so here, it's constructed that description based on, presumably, where the most amount of text is on your webpage.
>
> **[3:34](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=214)** So if you don't like what Facebook is generating here for you in the Debugger, what you'd need to do now is go back to your webpage and include the tags that it is mentioning here.
>
> **[3:48](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=228)** So specifically, if you want to change your description, probably a really good idea, then you're going to want to include a meta tag that would have the og description value in there somewhere with the description you'd actually want to appear on Facebook.
>
> **[4:06](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=246)** That's the way that you'd want to go about doing that.
>
> **[4:09](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=249)** Notice that after you give it a minute or two, if I just refresh this page, that error about the image width and height and indexing and so forth, that will actually go away and the preview down here on the bottom will change to the picture that I actually programmed for it.
>
> **[4:27](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=267)** So as it was said before, it's an asynchronous kind of thing so in the time that I've been talking about this particular webpage, Facebook has gone back and indexed that image for me and now it looks the way that I'd actually like this to look in a Facebook page listing.
>
> **[4:43](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=283)** So that would be the next thing for you to do, to take this page to the next level.
>
> **[4:47](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=287)** Take a look at what the Debugger is telling you here, look up whatever tags you need to look up on ogp.me.
>
> **[4:55](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=295)** If you need to come up with a tag that you haven't coded before and you'd like to include, make changes to whatever values you want, put that back up on your web hosting and then run the Debugger again and it will go on ahead and generate for you a different report based on whatever tags you've added.
>
> **[5:13](https://www.linkedin.com/learning/html-metadata-in-the-head/checking-your-work-for-facebook-22994984?u=76281980&t=313)** When it is the way you want, then you're ready to go on ahead and launch that page for real where Facebook will grab the correct information to display on its website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (1), [[JavaScript]] (1), [[HTML]] (1), [[GitHub]] (1), [[Fetch]] (1)
> **Env Vars:** url (3), html (1), ftp (1)
> **Analogies:** for example (1), picture (1)
> **CLI Commands:** make (1)
> **URLs:** [facebook.com](https://facebook.com) (1)
> **Cross-References:** go back to (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)

#### [Challenge: Configuring meta information](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980&t=0)** - [Instructor] Now that you've learned a bit about meta tags and open graph tags, let's go ahead and apply some of these principles to a new webpage.
>
> **[0:14](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980&t=14)** This is the website for the Topsy Turvy Cake Design company, and I built this webpage as part of my course, "Learning Foundations Six" which is here and available in the library if you want to have a look at this course to figure out how exactly I went about building this particular website.
>
> **[0:33](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980&t=33)** If you go ahead and open up the exercise files for this challenge, you'll find folders for CSS images and [[JavaScript]], but the file that you really want to work on, of course, is index.[[HTML]].
>
> **[0:47](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980&t=47)** That's where the head of the document is where you will be adding the tags for this particular challenge.
>
> **[0:51](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980&t=51)** As you can see here, the head starts on line three, goes to line nine, and we have only a handful of tags that are present here.
>
> **[1:00](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980&t=60)** We have our meta character set, our meta view port for controlling the responsiveness of this website, and two links to style sheets.
>
> **[1:10](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980&t=70)** So obviously there's a lot of scope here to add additional tags to this particular webpage.
>
> **[1:17](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980&t=77)** So in this challenge, you'll do the following things.
>
> **[1:20](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980&t=80)** First of all, have a look at that webpage in detail.
>
> **[1:24](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980&t=84)** Look at the html.
>
> **[1:26](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980&t=86)** Read the actual content for the website.
>
> **[1:28](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980&t=88)** That'll also help you in putting your tags together.
>
> **[1:31](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980&t=91)** Think about what kind of head tags are missing based on what I've been talking to you about over the last chapter, and specifically of course that last chapter has encompassed things like meta tags and Open Graph tags.
>
> **[1:46](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980&t=106)** Those are what you're going to want to incorporate in this challenge.
>
> **[1:49](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980&t=109)** Read the content as I said for the webpage.
>
> **[1:52](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980&t=112)** Grab available text to fill in as content for those meta tags, and code all of those in the head of the document.
>
> **[2:00](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-configuring-meta-information-22994986?u=76281980&t=120)** In the next video, I'll show you my solution to this challenge and go through why I made the decisions that I did.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[JavaScript]] (1)
> **File Paths:** index.html (1)
> **CLI Commands:** find (1)
> **Env Vars:** css (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Configuring meta information](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=5)** - [Instructor] So how'd you do with your challenge?
>
> **[0:07](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=7)** Let's go on ahead and walk through the answers that I included here.
>
> **[0:11](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=11)** As always there are lots of answers to these types of challenges and you may have included some of the tags that I had here, maybe you've included different tags, it all really just depends on what you chose to do and there's no right or wrong answer to this.
>
> **[0:29](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=29)** So here's what I've thought out.
>
> **[0:30](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=30)** So of course we started with a meta character set tag.
>
> **[0:35](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=35)** We had our meta view port tag.
>
> **[0:36](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=36)** I added a meta description tag and I took this out of the content for the website.
>
> **[0:41](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=41)** Topsy Turvy Cake Design creates custom cakes for every occasion in Carpinteria, California.
>
> **[0:47](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=47)** And of course that is the description tax that's going to show up in [[Google]] search results.
>
> **[0:53](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=53)** So the meta description tag is a relatively important thing.
>
> **[0:57](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=57)** Meta keyword tag is not necessarily as important as I've talked about in previous videos but I did go ahead and create one and I looked for words like the name of the company, Topsy Turvy Cake Design, its location, Carpinteria, California, and the kind of [[Microsoft Products|products]] that they have.
>
> **[1:13](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=73)** So birthday cakes, wedding cakes, custom cakes.
>
> **[1:15](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=75)** That kind of thing is what people would typically search on.
>
> **[1:19](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=79)** I added a meta author tag, that's me.
>
> **[1:21](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=81)** Your meta author tag hopefully has you as the author.
>
> **[1:25](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=85)** And this tag isn't necessarily something that you have to include but if you wanted the practice it certainly doesn't hurt.
>
> **[1:33](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=93)** For the these color, remember this is the tag that will give you a colored-looking browser chrome in your web browsers on mobile devices.
>
> **[1:45](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=105)** This particular shade here I got right out of the design.
>
> **[1:48](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=108)** If you looked at the CSS and dug into that kind of thing you would've found this color.
>
> **[1:52](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=112)** And it's that hot pink that's used in the design for the website.
>
> **[1:57](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=117)** And then finally I went ahead and added four open graph tags here for Facebook.
>
> **[2:01](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=121)** I gave it a title and the type.
>
> **[2:04](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=124)** So of course this is Topsy Turvy Cake Design.
>
> **[2:06](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=126)** It's a website.
>
> **[2:08](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=128)** And then I gave this a URL which is an active URL.
>
> **[2:13](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=133)** You can go to this website and take a look at it there at [topsyturvycakedesign.com](https://topsyturvycakedesign.com).
>
> **[2:18](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=138)** This would be the home page.
>
> **[2:20](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=140)** And then for the image, just remember that you need to code an image with an absolute URL.
>
> **[2:27](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=147)** Same with the URL for the website.
>
> **[2:29](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=149)** In this particular case I went to the Topsy Turvy Cake Design website and pulled an image from that.
>
> **[2:36](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=156)** Just got the URL from that image and dropped it in here.
>
> **[2:39](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=159)** You might've done something different if you put this webpage up on your own web hosting, you might've used one of the images that was inside of the images folder here.
>
> **[2:49](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=169)** And that would've been absolutely fine.
>
> **[2:51](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=171)** You could've picked one of these images instead and just had an absolute path provided that it worked to that location and then that would be just fine for this as well.
>
> **[3:03](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=183)** And then finally we have our two links down here to our style sheets.
>
> **[3:06](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-configuring-meta-information-23202362?u=76281980&t=186)** So that covers all of the changes that I made to the head of this document incorporating a whole bunch of meta tags and open graph types of tags in this particular webpage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** url (5), css (1)
> **Definitions:** is a  (1), is an  (1)
> **URLs:** [topsyturvycakedesign.com](https://topsyturvycakedesign.com) (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 3. Other Head Tags

[↑ Back to Table of Contents](#table-of-contents)

#### [Adding a title to your page](https://www.linkedin.com/learning/html-metadata-in-the-head/adding-a-title-to-your-page-23204068?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/adding-a-title-to-your-page-23204068?u=76281980&t=0)** - [Instructor] The title tag is one of the key tags that goes in the head of your document.
>
> **[0:05](https://www.linkedin.com/learning/html-metadata-in-the-head/adding-a-title-to-your-page-23204068?u=76281980&t=5)** Unlike the meta tags, which were a single tag, the title tag wraps around the text that will appear on the website.
>
> **[0:13](https://www.linkedin.com/learning/html-metadata-in-the-head/adding-a-title-to-your-page-23204068?u=76281980&t=13)** The text in the title tag displays in a number of different locations.
>
> **[0:18](https://www.linkedin.com/learning/html-metadata-in-the-head/adding-a-title-to-your-page-23204068?u=76281980&t=18)** First of all, it serves as the title of the browser window or the tab where the webpage is being displayed.
>
> **[0:25](https://www.linkedin.com/learning/html-metadata-in-the-head/adding-a-title-to-your-page-23204068?u=76281980&t=25)** It's also the link in search results for that page.
>
> **[0:29](https://www.linkedin.com/learning/html-metadata-in-the-head/adding-a-title-to-your-page-23204068?u=76281980&t=29)** The [[HTML]] title may also show up in a browser bookmark.
>
> **[0:33](https://www.linkedin.com/learning/html-metadata-in-the-head/adding-a-title-to-your-page-23204068?u=76281980&t=33)** Since your title will show up in so many different locations, it's important to choose a good title that will be helpful in all of these roles.
>
> **[0:41](https://www.linkedin.com/learning/html-metadata-in-the-head/adding-a-title-to-your-page-23204068?u=76281980&t=41)** Here are some helpful tips for writing good title tags for search engines and other uses.
>
> **[0:46](https://www.linkedin.com/learning/html-metadata-in-the-head/adding-a-title-to-your-page-23204068?u=76281980&t=46)** In general, keep your titles to 60 characters or less to avoid them being cut off in the browser display.
>
> **[0:54](https://www.linkedin.com/learning/html-metadata-in-the-head/adding-a-title-to-your-page-23204068?u=76281980&t=54)** Include the important keywords as well as the name of your website, company or brand.
>
> **[1:01](https://www.linkedin.com/learning/html-metadata-in-the-head/adding-a-title-to-your-page-23204068?u=76281980&t=61)** The best way to do this is to put the page keywords first followed by your brand name.
>
> **[1:06](https://www.linkedin.com/learning/html-metadata-in-the-head/adding-a-title-to-your-page-23204068?u=76281980&t=66)** Don't overuse or keyword stuff your title to try to improve your search results as this will likely penalize your page rankings.
>
> **[1:14](https://www.linkedin.com/learning/html-metadata-in-the-head/adding-a-title-to-your-page-23204068?u=76281980&t=74)** In all cases, you should always have a title tag on your page.
>
> **[1:19](https://www.linkedin.com/learning/html-metadata-in-the-head/adding-a-title-to-your-page-23204068?u=76281980&t=79)** Be sure you include helpful and handy content inside of it.
>
> **[1:23](https://www.linkedin.com/learning/html-metadata-in-the-head/adding-a-title-to-your-page-23204068?u=76281980&t=83)** Webpages called home or document, the default in VsCode, are not that helpful and it's easy to forget to include a meaningful title tag.
>
> **[1:32](https://www.linkedin.com/learning/html-metadata-in-the-head/adding-a-title-to-your-page-23204068?u=76281980&t=92)** Make the title tag creation a regular part of your new page creation workflow and you'll be less likely to forget about it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** html (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)

#### [Creating identity for your pages with icons](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=0)** - [Instructor] Icons are another way to brand your website within the web browser.
>
> **[0:04](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=4)** These might take the form of a favicon or as apple-touch-icons, depending on the browser and the device that you're using.
>
> **[0:13](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=13)** A favicon is the little picture you see in the corner of some webpages.
>
> **[0:17](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=17)** For example, note the video player icon in the corner of the [[LinkedIn]] Learning window.
>
> **[0:23](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=23)** The apple-touch-icons show up on the desktop of an iPad or iPhone if someone wanted to bookmark a website to that device's desktop.
>
> **[0:31](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=31)** Let's go through making some of these icons together.
>
> **[0:34](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=34)** So, first of all, if you go to this website, this is [manytools.org](https://manytools.org), and within this website they have an apple-touch-icon generator.
>
> **[0:45](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=45)** So, there's two steps to this process.
>
> **[0:46](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=46)** Step one is to actually create the icons that you're going to need, and then step two is to integrate those into the website, and I'll walk you through both of those.
>
> **[0:55](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=55)** So, first of all, we need to make an apple-touch-icon for our Hansel and Petal website.
>
> **[1:01](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=61)** So, we'll go ahead and choose a file for that.
>
> **[1:04](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=64)** And from our Exercise Files folder, Chapter three, video number two, there's this lovely image here called flower.png.
>
> **[1:14](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=74)** Go on ahead and select that, and then click the Convert button.
>
> **[1:19](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=79)** And what this is going to generate for us is a bunch of icons, there they are, for the various different sizes.
>
> **[1:25](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=85)** And you'll notice that they've helpfully given us the [[HTML]] code that we're going to need in order to make these work.
>
> **[1:33](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=93)** So, what I would recommend doing is going ahead and clicking the Download button.
>
> **[1:37](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=97)** That's going to download these icons into your directory as a ZIP file.
>
> **[1:42](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=102)** In my case, it went to my downloads folder.
>
> **[1:45](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=105)** You'll need to unzip those and drag those into the appropriate location in your Exercise Files folder.
>
> **[1:52](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=112)** And we'll also need to copy in this code here, so I'm just going to go ahead and highlight that bit of HTML, Control + C or Command + C to copy it.
>
> **[2:03](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=123)** And, in my icons folder, I've got all of those icons that are available to me there.
>
> **[2:09](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=129)** And what I'm going to do here is, inside of my Exercise Files folder in the begin folder, I'll go ahead and add those to my image directory.
>
> **[2:19](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=139)** So, we'll just go ahead and drag them from one folder to another, there we go.
>
> **[2:26](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=146)** Okay, great, so then, if we come on back to VS Code here.
>
> **[2:33](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=153)** Let's go on ahead and open up Chapter three, and we'll open up number two, open up the begin folder, open up index.html, and then we can go ahead and put these in place.
>
> **[2:45](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=165)** And, as I have mentioned many times before, these tags can go anywhere inside the head of the document.
>
> **[2:52](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=172)** Generally speaking, I recommend grouping them together just for purposes of making these easier to find later.
>
> **[2:58](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=178)** The only tag that needs to go first in the head of your document is the meta character set, and we have that.
>
> **[3:04](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=184)** So, I'm just going to go ahead and put these after the meta tags.
>
> **[3:07](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=187)** And we'll go ahead and tab to make those line up so pretty.
>
> **[3:11](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=191)** And then, the other thing we'll need to do is fix the directories on these, so it's to somedir right now.
>
> **[3:17](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=197)** Well, in this case, it happens to be going to the image folder.
>
> **[3:21](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=201)** So, we'll just go ahead and change those.
>
> **[3:23](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=203)** I-M-G, I-M-G, I-M-G, and I-M-G.
>
> **[3:30](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=210)** So, there we go, that's all we need to do for that.
>
> **[3:33](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=213)** That will then show these or have these icons available, again, if somebody tries to bookmark this website on an iPad on the desktop or on their iPhone on the desktop.
>
> **[3:45](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=225)** This is all you're going to need.
>
> **[3:47](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=227)** The device will be smart enough to choose which one of these icons is the right one.
>
> **[3:51](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=231)** The next thing I want to include is a favicon, and that's that little image that shows up in the corner of the tab of your web browser.
>
> **[4:00](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=240)** And so, to do that, hop on back into my webpages here.
>
> **[4:05](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=245)** There's a lot of favicon generators that are out there.
>
> **[4:07](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=247)** I particularly like this one called favicon.cc.
>
> **[4:11](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=251)** This one gives you a screen here where you can draw a picture.
>
> **[4:15](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=255)** You can choose colors over here on the side, draw on this, and it'll generate and icon for you.
>
> **[4:20](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=260)** Or, you can also import an image, which is what we're going to do.
>
> **[4:23](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=263)** So, go ahead and click on the Import Image button over here on the side.
>
> **[4:29](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=269)** It's going to ask us which image.
>
> **[4:31](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=271)** We'll go ahead and choose a file.
>
> **[4:32](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=272)** It's going to be that same flower.png that we used before.
>
> **[4:37](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=277)** And we can tell it to keep the dimensions, go ahead and upload, and it'll actually put it right here in the drawing screen.
>
> **[4:46](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=286)** You can see a tiny preview of it down here below.
>
> **[4:48](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=288)** So, if it doesn't actually come out looking as pretty as you wish, or you want to tweak it in some way via drawing there, those are all pixels, the little squares, you can go ahead and tweak that if you wish.
>
> **[5:01](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=301)** Otherwise, you can just go ahead and download the favicon.
>
> **[5:05](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=305)** So, I went ahead and did that.
>
> **[5:07](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=307)** There's favicon.ico, and I can drop that right straight into my folder here.
>
> **[5:15](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=315)** In begin, image, we can drop in favicon.ico.
>
> **[5:22](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=322)** There it is in my images folder.
>
> **[5:24](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=324)** Okay, then we'll jump back here into our exercise files, and we can add the appropriate HTML to indicate that we have a favicon.
>
> **[5:33](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=333)** And so, the way we would do that is this way.
>
> **[5:36](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=336)** We're going to put in the link tag, rel=, in this case, shortcut icon, and then href=img/favicon.ico.
>
> **[5:52](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=352)** And then, we can go ahead and close that tag.
>
> **[5:55](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=355)** If you go on ahead and save this, jump back into our web browser, and refresh the page, you'll notice that now we have a favicon that's showing up right there in the corner of this webpage.
>
> **[6:07](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=367)** So, including some of these additional little icons are really helpful things.
>
> **[6:12](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=372)** There's plenty of tools out there for generating these.
>
> **[6:15](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=375)** We used favicon.cc, we used this website manytools that gave us some of these apple-touch-icons.
>
> **[6:24](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=384)** You can use any picture from your website.
>
> **[6:26](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=386)** In this case, we're using the picture that came from the Hansel and Petal branding.
>
> **[6:31](https://www.linkedin.com/learning/html-metadata-in-the-head/creating-identity-for-your-pages-with-icons-23204069?u=76281980&t=391)** And then, the way that you tie these into your website is to simply include some tags in the head of your document that point to these icons on your website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[LinkedIn]] (1)
> **Exercise Files:** exercise files (4), zip file (1), download the (1)
> **CLI Commands:** make (3), unzip (1), find (1)
> **Analogies:** picture (4), for example (1)
> **Code Identifiers:** ipad (2), iphone (2)
> **Env Vars:** html (3), zip (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (2)

#### [Linking styles to your page](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=0)** - [Instructor] CSS styles may be included in your document via a link to a separate document containing your styles.
>
> **[0:07](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=7)** This is the preferred method for including CSS styles for several reasons.
>
> **[0:13](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=13)** First of all, the styles are easily linked to other documents in your website, meaning that you can reuse your styles.
>
> **[0:19](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=19)** And second, with a centralized and reusable style sheet, those styles are declared only one time and then applied in many places.
>
> **[0:28](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=28)** For this reason, the method of linking to a style sheet is indeed an industry standard.
>
> **[0:34](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=34)** To make a link to your style sheet, you'll create it via a link tag.
>
> **[0:38](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=38)** And in fact, we already have it here on this page because this website we've been working with, the Hansel and Petal website.
>
> **[0:45](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=45)** And as you saw, it was already kind of pretty.
>
> **[0:47](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=47)** So it already has links to style sheets.
>
> **[0:49](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=49)** There's two of these.
>
> **[0:51](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=51)** There's one here on line 18.
>
> **[0:53](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=53)** This is going to a [[Google]] style sheet, where it's pulling in some fonts for me.
>
> **[0:58](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=58)** And on line 19, I have a link to my local style sheet, the style sheet that's actually controlling the styling for this webpage for everything else.
>
> **[1:07](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=67)** In order to link in your style sheets, you're going to use the link tag.
>
> **[1:12](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=72)** But as you've seen here already, the link tag is used for several kinds of items here on your webpage.
>
> **[1:18](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=78)** We have a rel attribute with a value of apple-touch-icon for some of these icons that have to do with iPads and iPhones.
>
> **[1:29](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=89)** We have a rel value here for our favicon.
>
> **[1:33](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=93)** And now here, we also have a rel.
>
> **[1:36](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=96)** It's going to establish this as a link to our style sheet as opposed to being some other kind of icon or other ways that we can use the rel attribute within our document.
>
> **[1:48](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=108)** Two attributes are required to establish your style sheet.
>
> **[1:51](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=111)** One's the obvious, the href.
>
> **[1:53](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=113)** Of course, that is the path to where your style sheet is located.
>
> **[1:57](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=117)** And then the rel with the value of stylesheet to establish this as a style sheet.
>
> **[2:02](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=122)** On occasion, you'll also see type equals text/css.
>
> **[2:12](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=132)** This particular attribute of type is something that we saw with HTML4.
>
> **[2:17](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=137)** So in those days, you had to include text/css in order for this to validate and be established as a link to a style sheet.
>
> **[2:26](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=146)** But in HTML5, that was considered redundant and that was dropped.
>
> **[2:30](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=150)** You can, of course, leave it in your HTML5 document.
>
> **[2:34](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=154)** You won't be penalized for it.
>
> **[2:35](https://www.linkedin.com/learning/html-metadata-in-the-head/linking-styles-to-your-page-22996815?u=76281980&t=155)** But it's not required so you're seeing it less and less these days.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **Env Vars:** css (2), html5 (2), html4 (1)
> **Code Identifiers:** ipads (1), iphones (1)
> **CLI Commands:** make (1)
> **Cross-References:** as you saw (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Specifying style directly](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=0)** - [Instructor] Another way to include styles in your [[HTML]] document is to embed them directly in the head of the document.
>
> **[0:06](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=6)** This method may make styling easier to read or understand.
>
> **[0:11](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=11)** But it also means these styles apply only to this particular webpage.
>
> **[0:16](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=16)** For example, on our homepage, we might want to flip the color scheme.
>
> **[0:20](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=20)** So as you know, this is the same page we've been working with in this course.
>
> **[0:24](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=24)** Right now, we have an all white content section here on our homepage.
>
> **[0:29](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=29)** Maybe we'd like to flip that.
>
> **[0:30](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=30)** Maybe we'd like to have this white displaying only on the inside pages.
>
> **[0:35](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=35)** And there are probably several of those.
>
> **[0:37](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=37)** But for this homepage, let's have a blue background in the middle instead.
>
> **[0:41](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=41)** So we just want to recolor just the homepage, for example.
>
> **[0:45](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=45)** So one way that we might go about doing that, and there are several ways to solve this particular issue, but let's just say that we'd like to just go on ahead and install some styles here to the head of our homepage document only where they will take priority over the other styles.
>
> **[1:03](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=63)** Remember that you want to put the embedded styles most likely after the style sheets that already exist here.
>
> **[1:10](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=70)** That way these embedded styles will take priority over the styles that come before it.
>
> **[1:16](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=76)** If we were to put these styles say, here, between our favicon and our style sheets here for our [[Google]] font and our internal style sheet, these styles would take less priority over the externally linked style sheets that come later in the document.
>
> **[1:35](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=95)** So I'm going to go ahead and include this here.
>
> **[1:36](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=96)** Style, slash-style.
>
> **[1:39](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=99)** That's the HTML tag and that is all you need to include for that.
>
> **[1:42](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=102)** Then inside of this you can write CSS just as you normally would.
>
> **[1:46](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=106)** So in my case, I'm going to say for the body I'm going to have a background color.
>
> **[1:52](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=112)** And that color is going to be d3edf7.
>
> **[1:59](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=119)** And then I'm going to put in a second style here.
>
> **[2:02](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=122)** This is for our aside.
>
> **[2:05](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=125)** And for this one I'll have a background color of white.
>
> **[2:11](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=131)** Okay?
>
> **[2:12](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=132)** And so if we go on ahead and save this webpage and refresh the display here in the browser, we'll wind up with a homepage where everything is blue.
>
> **[2:22](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=142)** We've left my boxes here white so that they really pop off the page.
>
> **[2:25](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=145)** I kind of like that look.
>
> **[2:27](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=147)** But as I go into the site and I look on my internal pages, those styles that I just added to the head of the document will not be present.
>
> **[2:34](https://www.linkedin.com/learning/html-metadata-in-the-head/specifying-style-directly-23204071?u=76281980&t=154)** And it will look the way it appeared before with that whole area appearing as white.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[Google]] (1)
> **Env Vars:** html (2), css (1)
> **Analogies:** for example (2), kind of like (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Connecting scripts](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=0)** - [Instructor] Just as CSS has two ways to include its styles in your [[HTML]] document, [[JavaScript]] works the same way.
>
> **[0:07](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=7)** You may include embedded or linked JavaScript in your document.
>
> **[0:11](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=11)** You may also include that JavaScript in the head of the document, or it may go on the body of the document.
>
> **[0:17](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=17)** Confusing, isn't it?
>
> **[0:18](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=18)** Let's break it down.
>
> **[0:20](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=20)** So first of all, let's consider linked or embedded JavaScript.
>
> **[0:24](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=24)** This concept is the same kind of thing that we just saw with CSS, the positives and negatives are pretty similar as well.
>
> **[0:32](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=32)** linking to a JavaScript file means that it's available and able to be included in multiple pages.
>
> **[0:37](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=37)** While embedding it means that it's available only on one page.
>
> **[0:42](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=42)** You could be linking to external JavaScript files that are either part of your website, or you could be linking to third party files as well.
>
> **[0:51](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=51)** So let's just say that we want to link to jQuery inside of this document.
>
> **[0:56](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=56)** I know, jQuery kind of old, but as long as jQuery is part of Bootstrap, it's totally still a thing.
>
> **[1:02](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=62)** So let's just say that we're going to go ahead and link to jQuery, we're going to go to code.[jquery.com](https://jquery.com).
>
> **[1:09](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=69)** And right here at the top, whatever version of jQuery is running right now in this first line, jQuery 3 is what I've got.
>
> **[1:16](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=76)** I'm going to go ahead and click on the minified file link here.
>
> **[1:19](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=79)** And it's going to give me the exact HTML that I need in order to have this work in my document.
>
> **[1:27](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=87)** And elsewhere in the documentation, this will tell me that I should probably link to jQuery down at the bottom of my document, just above the slash body tag.
>
> **[1:36](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=96)** The reason why we put it there is because that jQuery isn't going to need to execute while the page is loading.
>
> **[1:43](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=103)** So I'll have a page that I can look at because the [[Representational State Transfer (REST)|rest]] of the page is going to be loading.
>
> **[1:48](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=108)** The very last thing that it's going to do is download its copy of jQuery while I'm looking at the rest of the web page, so it'll feel like the page goes a little bit faster.
>
> **[1:57](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=117)** So one of the things that you'll notice about this link to jQuery in terms of the HTML tag, it's got some parts in here that you're accustomed to.
>
> **[2:04](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=124)** That's the script tag, closing script tag.
>
> **[2:07](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=127)** There's the source, that of course, is the link to the jQuery file that we're linking to.
>
> **[2:11](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=131)** But then it has these two attributes here for integrity and cross-origin that you may not necessarily be familiar with.
>
> **[2:18](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=138)** And they look kind of weird.
>
> **[2:20](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=140)** But right underneath, as it says here, the integrity and cross-origin attributes are used for subresource integrity checking, or SRI checking.
>
> **[2:29](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=149)** And you can read more about this at [srihash.org](https://srihash.org).
>
> **[2:32](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=152)** But as it says here, the browsers ensure that resources hosted at third party servers have not been tampered with.
>
> **[2:40](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=160)** So SRI is recommended as a best practice when libraries are loaded from a third party source.
>
> **[2:45](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=165)** So you don't necessarily need to have this integrity and cross-origin attributes for a external separate JavaScript file that you might be linking in your own website where you have control over that external file.
>
> **[3:00](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=180)** But if you're bringing in something third party like this, you should probably want those things included.
>
> **[3:05](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=185)** So we'll go ahead and just copy that bit of code there.
>
> **[3:09](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=189)** And then we'll just scroll down to the bottom of our document.
>
> **[3:13](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=193)** And we can just paste this in right before the slash body tag.
>
> **[3:18](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=198)** In general, with these third party scripts, there's going to be instructions about where they should be included inside of the document and what order they should be included, that type of thing.
>
> **[3:29](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=209)** Now, historically, we've included scripts in the header of the document, but we tend not to do this anymore because of performance issues.
>
> **[3:37](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=217)** If the JavaScript will affect the rendering or the look of the web page, rather than the functioning of the web page, it's often included in the head of the code.
>
> **[3:45](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=225)** That's because the page will look weird if that JavaScript doesn't load.
>
> **[3:50](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=230)** If it's just responsible for the functioning aspects of the page, like making something happen when a link is clicked, it can generally be put at the end of the document.
>
> **[3:59](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=239)** If you're using someone else's JavaScript, once again, all this where to include the code is usually mentioned there in the documentation.
>
> **[4:06](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=246)** So just to give you a little practice with this, I've given you a little bit of JavaScript right here, inside of your Exercise Files folder.
>
> **[4:14](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=254)** And you can just copy this little bit of code.
>
> **[4:17](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=257)** Even if you don't know JavaScript, this is pretty straightforward to understand.
>
> **[4:22](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=262)** We have an opening and closing script tag to indicate that this is JavaScript that's going to be embedded.
>
> **[4:27](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=267)** Inside of this, we have a little bit of code that says that onload we want to have something happen, and what do we want to have happen?
>
> **[4:35](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=275)** We're going to have an alert that says, welcome to my website.
>
> **[4:39](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=279)** That's all this little bit of code says.
>
> **[4:41](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=281)** We could definitely argue about whether this is good [[User Experience (UX)|user experience]], hint, it's not.
>
> **[4:46](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=286)** But just for illustration purposes, let's say that we want to include this in our document.
>
> **[4:51](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=291)** So now we can go ahead and drop this into the head of the document.
>
> **[4:55](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=295)** Again, this code can go anywhere, just don't put it before the UTF-8 up here at the top in the meta character set tag.
>
> **[5:03](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=303)** So I'm just going to drop it here after my CSS.
>
> **[5:06](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=306)** And if we go ahead and save this web page, then we can come back to our website and hit refresh.
>
> **[5:13](https://www.linkedin.com/learning/html-metadata-in-the-head/connecting-scripts-22995803?u=76281980&t=313)** And we'll wind up with our alert box that shows up here at the top of this web page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (13), [[HTML]] (3), [[Representational State Transfer (REST)|Rest]] (2), [[User Experience (UX)|User experience]] (1)
> **Code Identifiers:** jquery (11)
> **Env Vars:** css (3), html (3), sri (2), utf (1)
> **UI Navigation:** go to (1), click on (1), scroll down (1)
> **URLs:** [jquery.com](https://jquery.com) (1), [srihash.org](https://srihash.org) (1)
> **Documentation:** the documentation (2)
> **Definitions:** means that (2)
> **Best Practices:** recommended (1), best practice (1)

#### [Establishing a base URL](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=0)** - [Instructor] The [[HTML]] base tag used to be much more popular in the days when we built websites using frames.
>
> **[0:06](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=6)** However, it may still be useful to you depending on what kind of site you're building.
>
> **[0:11](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=11)** And all likelihood base tag is most useful in a web application at this point, and less relevant to a content based website.
>
> **[0:19](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=19)** So let me show you what the base tag looks like.
>
> **[0:22](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=22)** For those of you who weren't around in the frames days.
>
> **[0:25](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=25)** Once again, this base tag can go anywhere in the header of the document, and except before that tag at the top for your character set, so it's going to look like this.
>
> **[0:34](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=34)** Basically, it's a base tag, and then it could be followed by an href.
>
> **[0:40](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=40)** And I could say something like https www.[[[LinkedIn]].com](https://linkedin.com).
>
> **[0:48](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=48)** And what this would say this particular version of the tag, would indicate that all of the links in this document, should start with www.[linkedin.com](https://linkedin.com).
>
> **[0:58](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=58)** The second version of this tag, would look like this, it would say base target equals underscore blank, just like that.
>
> **[1:08](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=68)** So in this particular version of the tag, this would indicate that all of the items in this web page, should open in a new window.
>
> **[1:18](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=78)** That would include anything in your navigation, which typically you don't want to wide up opening in a new window, as well as any other links that you find inside of this document.
>
> **[1:28](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=88)** The base tag is typically used for setting a base URL for the document.
>
> **[1:33](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=93)** In other words, all of the links within this document should be preceded by this base, only the Facebook Open Graph tags don't honor the base tags.
>
> **[1:42](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=102)** So be sure to spell things out there.
>
> **[1:44](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=104)** So, if I wanted these items here in my Facebook, Open Graph items up here on the top, I should absolutely continue to spell that out.
>
> **[1:54](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=114)** I knew those go to [genkramer.org](https://genkramer.org).
>
> **[1:56](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=116)** But they could have gone to LinkedIn if I had been hosting here.
>
> **[2:00](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=120)** And I should continue to spell them out, even if I am making use of the base tag because Open Graph doesn't acknowledge the base.
>
> **[2:08](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=128)** So what would happen if you wanted to override, let's just say, for example, that I wanted to have all of the links in my document open in a new window.
>
> **[2:16](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=136)** But for my navigation, I actually really don't want it to that I really want it to open in the same window.
>
> **[2:23](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=143)** Well, what you'd have to do is kind of the reverse of what you do now, probably now you go through these links the things that open in a new window, you add the target equals blank to those, but in this case, you going to do the opposite.
>
> **[2:34](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=154)** So here in your navigation, what you would say instead is target equals underscore self.
>
> **[2:42](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=162)** And then you would just go ahead and repeat this four of the links that are in your navigation or anywhere else in this document where you'd like things to open in the same window.
>
> **[2:54](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=174)** So this base tag is going to be most useful in the kind of environment maybe you've got some kind of resource where you have lots, lots, lots of different websites, let's say hundreds or even thousands of links to other websites that you'd like to open a new [[Windows]], but a handful of links that you'd like to open in the same window.
>
> **[3:12](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=192)** Using the base target equals underscore blank is probably going to be more useful to you.
>
> **[3:18](https://www.linkedin.com/learning/html-metadata-in-the-head/establishing-a-base-url-23201415?u=76281980&t=198)** And as far as the base href goes, unless you're doing something crazy with [[JavaScript]], chances are you don't really need this tag as much for [[Web Development]] now, but it's available to you in case you do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (3), [[HTML]] (1), [[Windows]] (1), [[JavaScript]] (1), [[Web Development]] (1)
> **URLs:** [linkedin.com](https://linkedin.com) (2), [genkramer.org](https://genkramer.org) (1)
> **Env Vars:** html (1), url (1)
> **Analogies:** just like (1), for example (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Establishing scripts, styles, and icons](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=0)** - [Narrator] It's time for another challenge.
>
> **[0:07](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=7)** Now that we've gone through all of the things that we linked to in the head of the document, including style sheets, [[JavaScript]], favicons, Apple touch icons and more, let's go on ahead and go through adding more of those things to this document.
>
> **[0:21](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=21)** So here in your Exercise Files folder for this particular challenge, once again, you'll find the topsy turvy cake design website that was built with foundation.
>
> **[0:32](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=32)** And in this particular situation, I've removed all of the links to the style sheets, to the JavaScript, and there are no links to any icons here.
>
> **[0:42](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=42)** So your challenge is going to be putting those things in place.
>
> **[0:46](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=46)** There is an icon file here that's available for you inside of the Exercise Files folder.
>
> **[0:52](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=52)** You could use this as a starting icon for creating favicons and your Apple touch icons if you wish or you're welcome to dig into the Images folder and find something else that might work for you.
>
> **[1:03](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=63)** So briefly in this particular challenge, here's what you're going to go through.
>
> **[1:07](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=67)** As always take a look at the web page, and as I noted, all of the links to dot CSS and JavaScript are removed, you'll need to fix all of those.
>
> **[1:16](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=76)** Then you're going to create a favicon, an Apple touch icons, and link those in the head correctly.
>
> **[1:23](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=83)** So remember you're going to have to visit some websites in order to get those favicon and Apple touch icons created.
>
> **[1:29](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=89)** I went through those in earlier videos.
>
> **[1:32](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=92)** A couple of quick hints to complete this well, first of all, the order of the style sheets, as you know matters, so the foundation dot CSS file should go first, followed by app dot CSS.
>
> **[1:46](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=106)** The JavaScript may be linked in the body of the document, you're going to have to remember where in the body it goes.
>
> **[1:53](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=113)** And the JavaScript order should go in this order.
>
> **[1:55](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=115)** There's four separate JavaScript files so you're going to need to link to jquery dot js, what-input dot js, foundation dot min dot js and last app dot js.
>
> **[2:08](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=128)** All of the style sheets, all of the JavaScript are all locally managed.
>
> **[2:13](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=133)** They're all available for you inside of your Exercise Files folder in a folder for CSS and in another folder for JavaScript.
>
> **[2:22](https://www.linkedin.com/learning/html-metadata-in-the-head/challenge-establishing-scripts-styles-and-icons-23201416?u=76281980&t=142)** Good luck with this and I will go through my answer with you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (8)
> **Env Vars:** css (4)
> **Exercise Files:** exercise files (3)
> **CLI Commands:** find (2)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### [Solution: Establishing scripts, styles, and icons](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=0)** - [Instructor] So how'd you do with that challenge?
>
> **[0:07](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=7)** Hopefully it went well for you and here are my solutions.
>
> **[0:12](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=12)** So we're going to start down here, a little bit further down in the head of this document and with these icons that I've added.
>
> **[0:19](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=19)** So here, in lines 15 through 18, you'll see that I have links that go to these Apple icons and those were generated using the website that I discussed earlier in the course.
>
> **[0:33](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=33)** And you can see those images available if you look inside of the Images folder, here's all of the icons that were generated from that picture of the cake.
>
> **[0:42](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=42)** Got a little bit squashed looking because that cake as I recall is not exactly square and so it go smooshed down a little bit, inside of the icon here, so that's why it might look a little different than it did before and then here on line 19 I have link to the favicon and the favicon is right here, once again, inside of the folder, there's that generated solution for that.
>
> **[1:08](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=68)** Then you needed to make links to the style sheets.
>
> **[1:11](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=71)** As I mentioned, the order matters, so you have to have the foundation.css file first, followed by app.css, hopefully you link to those correctly.
>
> **[1:23](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=83)** Remember that you list the CSS folder first, slash the name of the file.
>
> **[1:28](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=88)** You may have put them here in your document or you may have listed them earlier.
>
> **[1:34](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=94)** In whatever place you put them, it's fine, provided that those style sheets come after, anywhere after, the meta character set of UTF-8.
>
> **[1:43](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=103)** As you know I like to group my meta tags together and then group all these link tags together.
>
> **[1:48](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=108)** You could separate these in space but however you wanted to put in these links to the style sheets, the app must come at a later line number than the foundation line of CSS.
>
> **[2:01](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=121)** And then if we scroll on down the page a little bit, all the way on down here, just before the slash body tag is where you can list all of the various JavaScripts that I told you to list.
>
> **[2:15](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=135)** And the reason we put them down here once again is for performance reasons, although we say we can put them in the body of the document, and you could probably put them just about anywhere, the point of putting them down here at the bottom, just before the slash body tag is to have these load, while people are looking at a fully formed webpage.
>
> **[2:33](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=153)** If you list them anywhere earlier in the document, the browser may pause while it downloads the [[JavaScript]] file before going on and reading the [[Representational State Transfer (REST)|rest]] of the document.
>
> **[2:42](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=162)** So, putting 'em down here is fairly important and this order winds up being important as well.
>
> **[2:48](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=168)** So here are the list of all of these various JavaScript files.
>
> **[2:53](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=173)** You had to dig around in the JavaScript folder, notice that there's an app.js file here outside of that vendor folder, inside of the vendor folder there's some other ones, so this wound up being a little bit trickier for you but it should be js/app.js to get to the app file and then the others would have js/vendor/ the name of those particular fields there.
>
> **[3:19](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=199)** So that pretty much takes care of this particular challenge.
>
> **[3:22](https://www.linkedin.com/learning/html-metadata-in-the-head/solution-establishing-scripts-styles-and-icons-23000521?u=76281980&t=202)** Hopefully you got most of those tags in the right places and especially with the right file paths.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **File Paths:** foundation.css (1), app.css (1), app.js (1), js/app.js (1)
> **Env Vars:** css (2), utf (1)
> **Cross-References:** earlier in (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980&t=0)** - [Jen] Hey, everybody, it's Jen Kramer.
>
> **[0:02](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980&t=2)** Thank you so much for watching my course about all of the exciting [[HTML]] tags we have available to us to use in the head of our documents.
>
> **[0:12](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980&t=12)** If you're interested in learning more with me, I thought I'd point you to a couple of courses that I mentioned in this course, as well as some other courses that will add to your HTML skills.
>
> **[0:21](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980&t=21)** So first of all, one of the courses that I mentioned previously was the [[CSS- Variables and Fluid Layouts]] course.
>
> **[0:29](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980&t=29)** This is an advanced course.
>
> **[0:30](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980&t=30)** It requires a lot of background in HTML and CSS.
>
> **[0:33](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980&t=33)** So if you trend toward the more advanced side of things, feel free to check this out.
>
> **[0:39](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980&t=39)** There's also a course here that I mentioned, Learning Foundation 6.
>
> **[0:43](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980&t=43)** The Topsy Turvy Cake Design website was built using that.
>
> **[0:47](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980&t=47)** Foundation 6 is a free to download, free to use responsive design framework that's really great to work with.
>
> **[0:56](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980&t=56)** So if you're interested in learning more about that, this might be a good course for you.
>
> **[1:00](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980&t=60)** Tables are something that are becoming increasingly useful on the web now, particularly with people wanting to publish data to go along with graphs and so forth that they're making.
>
> **[1:11](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980&t=71)** And in this course, I will walk you through not only the right accessible markup for tables, but how to style those tables and how to make them responsive in a couple of different ways.
>
> **[1:22](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980&t=82)** So this might be one you want to pay some attention to.
>
> **[1:25](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980&t=85)** And finally, [[Crafting Meaningful HTML]] is a course that's going to talk about all of the exciting semantic accessible tags that we have available to us and how we should be marking up our webpages in the proper way, not just littering it with a sea of divs and spans and just bad markup that we see on a lot of websites these days.
>
> **[1:51](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980&t=111)** Thanks again so much for watching.
>
> **[1:52](https://www.linkedin.com/learning/html-metadata-in-the-head/next-steps-23203329?u=76281980&t=112)** I hope to see you in another course soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4)
> **Env Vars:** html (4), css (2)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [jen] (1)


## Instructor

- [[Jen Kramer]]

## Resources

- Exercise files available

## Skills Covered

- Metadata
- HTML

## Path Context

### In [[Advance Your Skills in HTML]]
← [[HTML- Tables]] | **6 of 11** | [[HTML & CSS- Creating Forms]] →

## Appears In

- [[Advance Your Skills in HTML]]

## Related Courses

_Courses sharing skills:_

- [[HTML- Structured Semantic Data]] — HTML
- [[Building Great Forms with HTML and CSS]] — HTML
- [[HTML & CSS- Creating Forms]] — HTML
- [[HTML- Tables]] — HTML
- [[HTML- Images and Figures]] — HTML

---

[↑ Back to top](#)