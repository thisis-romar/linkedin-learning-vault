---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: html-and-css-linking
url: "https://www.linkedin.com/learning/html-and-css-linking"
duration_minutes: 104
duration: 1h 44m
level: Intermediate
updated: 2/1/2024
learners: 11845
skills:
  - HTML
  - Cascading Style Sheets (CSS)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHSwnFEfxhRKw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1614870907082?e=2147483647&amp;v=beta&amp;t=UmQ-QeNhUFYJQxuQsWtfNJZwaH8_A0NJhsQwr8sm-N4"
linkedin_topic: Web Development
learning_paths:
  - '[[Advance Your Skills in HTML]]'
prev_courses:
  - '[[Crafting Meaningful HTML]]'
next_courses:
  - '[[HTML- Images and Figures]]'
path_nav: '[{"path":"Advance Your Skills in HTML","position":3,"total":11,"prev":"Crafting Meaningful HTML","next":"HTML- Images and Figures"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/html
  - skill/cascading-style-sheets-css
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/HTML%20and%20CSS-%20Linking.md)

![HTML and CSS: Linking](https://media.licdn.com/dms/image/v2/C4E0DAQHSwnFEfxhRKw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1614870907082?e=2147483647&amp;v=beta&amp;t=UmQ-QeNhUFYJQxuQsWtfNJZwaH8_A0NJhsQwr8sm-N4)

# HTML and CSS: Linking

> Hyperlinks are the foundation of the World Wide Web, but they come in many different flavors. Do you want to link to a specific point in a document? Make a phone call, or send an email? Link from images or dedicated navigation bars instead of text? In this course, instructor Jen Kramer gives you all the tools you need to make those tasks easy. Jen goes over basic links, linking to different files 

> [LinkedIn Learning](https://www.linkedin.com/learning/html-and-css-linking) | 1h 44m | Intermediate | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Hyperlinks: The glue connecting the World Wide Web](#hyperlinks-the-glue-connecting-the-world-wide-web)
- [**1. Links in HTML**](#1-links-in-html) (10 videos)
  - [The basic link](#the-basic-link)
  - [Linking to offsite resources](#linking-to-offsite-resources)
  - [Opening links in different windows and iframes](#opening-links-in-different-windows-and-iframes)
  - [Linking to PDF files and other documents](#linking-to-pdf-files-and-other-documents)
  - [Linking within the same document and top of page](#linking-within-the-same-document-and-top-of-page)
  - [Linking phone numbers](#linking-phone-numbers)
  - [Linking to email addresses and email messages](#linking-to-email-addresses-and-email-messages)
  - [Using images as links](#using-images-as-links)
  - [Including several links within an image using image maps](#including-several-links-within-an-image-using-image-maps)
  - [Links in the <head> of the document](#links-in-the-head-of-the-document)
- [**2. Styling Links with CSS**](#2-styling-links-with-css) (6 videos)
  - [Styling links and link states](#styling-links-and-link-states)
  - [Making exceptions to link styling](#making-exceptions-to-link-styling)
  - [Styling a text link to look like a button](#styling-a-text-link-to-look-like-a-button)
  - [Understanding proper navigation markup](#understanding-proper-navigation-markup)
  - [Creating a simple vertical navigation bar](#creating-a-simple-vertical-navigation-bar)
  - [Creating a simple horizontal navigation bar](#creating-a-simple-horizontal-navigation-bar)
- [**3. Maintaining Links**](#3-maintaining-links) (5 videos)
  - [Checking sites for link rot and broken links](#checking-sites-for-link-rot-and-broken-links)
  - [Redirecting links within a webpage](#redirecting-links-within-a-webpage)
  - [Redirecting links on the server](#redirecting-links-on-the-server)
  - [Content delivery networks](#content-delivery-networks)
  - [Controlling which links search engines follow](#controlling-which-links-search-engines-follow)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Hyperlinks: The glue connecting the World Wide Web](https://www.linkedin.com/learning/html-and-css-linking/hyperlinks-the-glue-connecting-the-world-wide-web-23410801?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/hyperlinks-the-glue-connecting-the-world-wide-web-23410801?u=76281980&t=0)** - Links are the heart of the web.
>
> **[0:02](https://www.linkedin.com/learning/html-and-css-linking/hyperlinks-the-glue-connecting-the-world-wide-web-23410801?u=76281980&t=2)** If there were no links, would the web even exist?
>
> **[0:06](https://www.linkedin.com/learning/html-and-css-linking/hyperlinks-the-glue-connecting-the-world-wide-web-23410801?u=76281980&t=6)** In this course we'll look in detail at the humble link.
>
> **[0:09](https://www.linkedin.com/learning/html-and-css-linking/hyperlinks-the-glue-connecting-the-world-wide-web-23410801?u=76281980&t=9)** We'll use [[HTML]] to link within a page, between pages, to different websites, email, phone numbers, and to documents like PDFs.
>
> **[0:18](https://www.linkedin.com/learning/html-and-css-linking/hyperlinks-the-glue-connecting-the-world-wide-web-23410801?u=76281980&t=18)** We'll also make our links pretty with CSS, and look at link maintenance to make sure that they're up to date with the changing web.
>
> **[0:26](https://www.linkedin.com/learning/html-and-css-linking/hyperlinks-the-glue-connecting-the-world-wide-web-23410801?u=76281980&t=26)** I'm Jen Kramer, an educator and web developer, and I think I've coded at least half of the links on the web in my 23-year career.
>
> **[0:34](https://www.linkedin.com/learning/html-and-css-linking/hyperlinks-the-glue-connecting-the-world-wide-web-23410801?u=76281980&t=34)** So if you're ready, let's get started with HTML and CSS linking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Env Vars:** html (2), css (2)
> **CLI Commands:** make (2)
> **Speakers:** - links (1)


### 1. Links in HTML

[↑ Back to Table of Contents](#table-of-contents)

#### [The basic link](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=0)** - [Instructor] In the first chapter of this course, we're going to be editing some [[HTML]] files inside of a text editor.
>
> **[0:07](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=7)** And the text editor that I'm using is called Visual Studio Code or VSCode.
>
> **[0:12](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=12)** It's available for free, download at code.[visualstudio.com](https://visualstudio.com).
>
> **[0:17](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=17)** On the homepage, I've got a great big blue button here for downloading this on a Mac because that's what I'm using.
>
> **[0:24](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=24)** But you'll see here, it's also available for [[Windows]] and for [[Linux]].
>
> **[0:28](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=28)** So you are welcome to download the software and use it or any other text editor that you prefer to use for editing HTML files here in Chapter 1.
>
> **[0:38](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=38)** Once you've downloaded your text editor, open up your exercise files inside of the text editor.
>
> **[0:44](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=44)** You'll find that there is a folder for each one of these first chapter videos, each of which contains a folder called begin and end.
>
> **[0:52](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=52)** And those are the starting and ending states of the files that we'll be editing as part of that video.
>
> **[0:59](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=59)** Let's start with the most basic link of all, linking two pages within your website.
>
> **[1:05](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=65)** And I'm going to start by writing that here on line number 13, visit my second page.
>
> **[1:11](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=71)** And I'm going to put in the <a> tag.
>
> **[1:14](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=74)** The <a> tag is what it's all about.
>
> **[1:17](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=77)** The <a> stands for anchor, and it's called that because you can anchor a URL to the text in between the <a> and the </a>, attaching it to a URL or a web address that will take you somewhere else.
>
> **[1:32](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=92)** Either on this website or to other websites, or to other documents, and all of the other things we're going to explore in this course.
>
> **[1:39](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=99)** <a> is a inline element, and it must be placed inside of a block-level element in order to validate properly.
>
> **[1:47](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=107)** So the <p> tag has to come first here, followed by the <a> tag.
>
> **[1:53](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=113)** The <a> tag though, by itself, doesn't do anything.
>
> **[1:56](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=116)** In order for this tag to do something, we need to add an attribute called href.
>
> **[2:01](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=121)** Href stands for hypertext reference and it's looking for a place to find a file.
>
> **[2:08](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=128)** When we put in the equal sign here inside of VSCode and a quote, a little pop-up will come up asking us which of the files that are located inside of the begin folder might we be interested in linking to.
>
> **[2:21](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=141)** This case, we're going to link to a page called second.html.
>
> **[2:25](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=145)** It'll drop that in there very nicely for you.
>
> **[2:28](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=148)** Save the page and you can display it inside of a browser.
>
> **[2:35](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=155)** And that is what my page looks like.
>
> **[2:38](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=158)** Yours is probably something similar to that.
>
> **[2:40](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=160)** Super ugly because I've got no CSS in these files at all.
>
> **[2:44](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=164)** We're just going to focus on the functionality of the link.
>
> **[2:47](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=167)** So here, we can click on this link that says go to my second page.
>
> **[2:52](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=172)** It will very happily open up my second page right here and show that to me.
>
> **[2:58](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=178)** But I have no link now going back to my links page.
>
> **[3:02](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=182)** Pause the video, open up this file called second.html.
>
> **[3:06](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=186)** See if you can write a link that will go back to the links page.
>
> **[3:09](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=189)** The answer is inside of the end state folder for video 01-01.
>
> **[3:16](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=196)** Going to go back to VSCode, and I want to code also here my link to my about page because this is formed just slightly differently.
>
> **[3:26](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=206)** Because my about page is located inside of a folder, and there's the file inside of it, the code to link to it is a little bit more complicated for the path.
>
> **[3:36](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=216)** So a, href equals, and in this case, we're going to say, quote, and then about/about.html.
>
> **[3:49](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=229)** And we'll visit my about page.
>
> **[3:53](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=233)** So once again, save that.
>
> **[3:58](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=238)** Refresh your link page and you should see a link to your about page.
>
> **[4:02](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=242)** If you click that, this will go to your About Me page.
>
> **[4:06](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=246)** So far so good.
>
> **[4:08](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=248)** The part that gets a lot of beginners confused is this last part, which is linking from your links page back to the about page.
>
> **[4:16](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=256)** So let's do that real quick.
>
> **[4:18](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=258)** If we open up about.html, to revisit my links page here, once again, we'll put in our <a> tag around that particular text.
>
> **[4:29](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=269)** Inside of the <a> tag link, we'll put in our href equals quote, and now VSCODE is only going to give us the option of linking to itself.
>
> **[4:40](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=280)** The about.html page.
>
> **[4:42](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=282)** We actually want to go from the about page, out of the folder, and into the links page here inside of the begin folder.
>
> **[4:53](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=293)** To do that, we're going to put in one ../.
>
> **[4:56](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=296)** ../ indicates to go out of the folder that we're currently in, in this case, the about folder, and it will show us the other link choices that we have.
>
> **[5:05](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=305)** I'm going to link back to the links page.
>
> **[5:07](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=307)** Save that one more time.
>
> **[5:11](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=311)** Refresh your about page.
>
> **[5:12](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=312)** You should now have a link back to your links page and if you did it right, then those two pages should now link together very nicely.
>
> **[5:21](https://www.linkedin.com/learning/html-and-css-linking/the-basic-link?u=76281980&t=321)** Putting together a links page is really super straightforward, very easy to understand, and this is the heart of the link and what we'll be exploring in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (7), [[Windows]] (1), [[Linux]] (1)
> **Env Vars:** html (2), url (2), css (1), vscode (1)
> **Definitions:** is a  (3), stands for (2), is called (1)
> **File Paths:** second.html (2), about.html (2), about/about.html (1)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** find (2)
> **Exercise Files:** download the (1), exercise files (1)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)

#### [Linking to offsite resources](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=0)** - [Instructor] Linking within your own website is really important but eventually people may want or need to go somewhere else.
>
> **[0:07](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=7)** How do we send them to another website with a link?
>
> **[0:11](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=11)** The best way to start this process is to visit the website that you want to link to.
>
> **[0:16](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=16)** In this case we're going to link to [[LinkedIn]].
>
> **[0:19](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=19)** And you want to pull that up inside of a browser window.
>
> **[0:23](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=23)** Make sure that is in fact the website that you want to link to.
>
> **[0:28](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=28)** It's real easy in some cases to confuse the site that you're linking to and you wind up linking to the wrong site sometimes with disastrous results.
>
> **[0:36](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=36)** Highlight that web address that's up there at the top of the page and copy that URL at the top of the page.
>
> **[0:46](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=46)** And then you're going to come back to your text editor Here we're inside of the exercise files folder 01-02 inside of the begin folder looking at the file called links.[[HTML]].
>
> **[1:00](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=60)** And you'll see here on line 14, we have some text that we're going to visit the LinkedIn website.
>
> **[1:07](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=67)** So inside of the paragraph tag, we'll add our a tag and href just as we did before, quotes just as we did before, in this case, we'll paste in that web address.
>
> **[1:21](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=81)** And then at the end of the text that we want to be clickable, put in once again our slash a.
>
> **[1:27](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=87)** Notice that the difference with this type of link is that it starts with at least http if not https colon slash slash.
>
> **[1:39](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=99)** That is the key to your web browser that this link is going to another website.
>
> **[1:46](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=106)** If you forget to put in the https, it will think you're on the same website.
>
> **[1:52](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=112)** Let's see that demonstrated.
>
> **[1:54](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=114)** If I save this page and open it up inside of my web browser, here's my basic link page and when I click on Visit LinkedIn, it should in fact go to the LinkedIn page.
>
> **[2:08](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=128)** Hit the back button, it should take me back to my basic link page.
>
> **[2:12](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=132)** Now, if I misformed this link in some way, it happens by the way, all the time out there on the internet.
>
> **[2:21](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=141)** You'll find people who have accidentally miscoded a link because they're in a rush and they just say www.[linkedin.com](https://linkedin.com) because that's what we always say.
>
> **[2:31](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=151)** If you do this and then take a look again at this in your web browser and refresh, if you roll your mouse over this link and have a look at the bottom, you'll see that it's looking for a file called www.[linkedin.com](https://linkedin.com) on your website.
>
> **[2:49](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=169)** If I click this, it'll give me a file not found error and tell me that it can't find the file at et cetera, et cetera, et cetera, www.[linkedin.com](https://linkedin.com).
>
> **[3:01](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=181)** If you see that error, it's because you forgot the http or the https in front of the link.
>
> **[3:09](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=189)** The last part of this equation is what in fact does the http versus the https do for you?
>
> **[3:17](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=197)** Well the S stands for secure and these days [[Google]] prefers to have your site in a secure environment like this with those type of link that starts with https.
>
> **[3:30](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=210)** If you were to link to LinkedIn at http only, if LinkedIn is set up correctly, it will redirect you from the non-secure to the secure website automatically.
>
> **[3:42](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=222)** I'm going to talk a little bit more about how that happens later on in this course but you really want to pay attention to the type of link that you're working with here.
>
> **[3:53](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=233)** If there is an S in place, the best way to code this is to code it with that S.
>
> **[3:58](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=238)** Don't have everything redirect for you.
>
> **[4:01](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=241)** Before you move on to the next video, I want you to get some practice with this.
>
> **[4:05](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=245)** I have some text here for a link for visiting Google.
>
> **[4:09](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=249)** Find Google out there online on the internet, and see if you can make a link that will take your links.html page to the Google website.
>
> **[4:21](https://www.linkedin.com/learning/html-and-css-linking/linking-to-offsite-resources?u=76281980&t=261)** Go ahead and write that link now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (9), [[Google]] (4), [[HTML]] (2)
> **CLI Commands:** find (3), make (2)
> **URLs:** [linkedin.com](https://linkedin.com) (3)
> **File Paths:** links.html (2)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** stands for (1), is an  (1)
> **Env Vars:** url (1)
> **Cross-References:** next video (1)

#### [Opening links in different windows and iframes](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=0)** - [Instructor] Now that we have some links that go off site we may want to open these in a new tab or a new window.
>
> **[0:06](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=6)** Maybe wondering how you get them to open a tab or a window.
>
> **[0:10](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=10)** And that is a user configured setting in most modern day browsers.
>
> **[0:15](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=15)** But most browsers by default will open these links in a new tab.
>
> **[0:20](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=20)** Whether we should open links that go offsite into new tabs is an ancient debate on the web.
>
> **[0:27](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=27)** Is it better to have people open in a new tab and then they get confused about how to get back to the site they were on because the back button doesn't take them there?
>
> **[0:38](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=38)** Or is it better to open in a new tab because then we don't lose the original site that people were on and they can go back to it?
>
> **[0:47](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=47)** I'm of the school that believes we ought to open links that go offsite in a new tab but there's arguments to be made in both directions.
>
> **[0:54](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=54)** Whatever you decide to do with your links that go off site those that start with HTTP, HTTPS, then you need to treat them all consistently.
>
> **[1:05](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=65)** They should all go into a new tab or none of them should go into a new tab.
>
> **[1:08](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=68)** Don't mix and match.
>
> **[1:10](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=70)** How do we make these go into a new tab?
>
> **[1:12](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=72)** Well, coding that is pretty straightforward.
>
> **[1:15](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=75)** Here on line 15, where I have my link to visit [[LinkedIn]] Learning.
>
> **[1:19](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=79)** This is inside of your exercise files, folder 0103 in the Begin folder.
>
> **[1:24](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=84)** I'm looking at the file called link study [[HTML]].
>
> **[1:27](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=87)** And here on line 15, just after the href with the LinkedIn URL, I will add target as my attribute= and the value here will be _blank.
>
> **[1:43](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=103)** And I'm missing an extra quote mark there.
>
> **[1:48](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=108)** There we go.
>
> **[1:49](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=109)** So target_blank, is the way that we're going to open this into a new tab or a new window, depending on what the user has configured.
>
> **[1:56](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=116)** Let's see that in action.
>
> **[1:58](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=118)** If you go ahead and save that page we can open this in our default browser.
>
> **[2:04](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=124)** And if we click on Visit LinkedIn, this will indeed open the LinkedIn page in a new tab.
>
> **[2:10](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=130)** Close that tab and we're back on our basic link page.
>
> **[2:14](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=134)** So far so good.
>
> **[2:16](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=136)** Target has a number of different values.
>
> **[2:19](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=139)** _blank is the most common one by far.
>
> **[2:22](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=142)** It's the one that you'll use almost all the time.
>
> **[2:25](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=145)** But before I leave this topic, I want to show you a reason that you might want to use one of the other values for target.
>
> **[2:34](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=154)** So we're going to come back to my links page here and I'm going to throw in just after the [[Google]] link down here.
>
> **[2:40](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=160)** I'm going to throw in another element here on this page.
>
> **[2:43](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=163)** It's going to be the iframe element.
>
> **[2:46](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=166)** And the source for that iframe is going to be my second page.
>
> **[2:54](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=174)** And we'll give it a width of 300 and we'll give it a height of 300.
>
> **[3:01](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=181)** Now the iframe tag, if you're not familiar with it, it's one that is used in sites like YouTube and many other sites where you can embed information from one website on your website.
>
> **[3:13](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=193)** So if you want to for example, embed a tweet, you can get an iframe from the Twitter website that you can use to display that tweet on your own website.
>
> **[3:23](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=203)** Here I'm just going to use an iframe to display my second page on my links page.
>
> **[3:28](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=208)** Not something you normally want to do in real life but it's a great demonstration for what I'm trying to talk about.
>
> **[3:33](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=213)** So I'm going to refresh our webpage and there's my second page displaying here inside of this iframe.
>
> **[3:42](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=222)** I have here a link to LinkedIn, which has no target set.
>
> **[3:47](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=227)** And when I click on it, it will tell me here in this iframe that Firefox can't open this page.
>
> **[3:53](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=233)** It's not going to be allowed to open in this page because I've got it embedded here in an iframe and Firefox sees this as a [[Security Risk]].
>
> **[4:01](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=241)** You'll also see this fail in Chrome.
>
> **[4:03](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=243)** It'll fail a little bit differently but I thought Firefox had the best error message for this.
>
> **[4:09](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=249)** So notice that it does give you the option to open the site in a new window, which technically opens it a new tab.
>
> **[4:16](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=256)** So there's the LinkedIn website.
>
> **[4:18](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=258)** But this is an error that you really don't want to have happen in the first place.
>
> **[4:21](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=261)** So how do we fix that?
>
> **[4:23](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=263)** So the way we're going to fix that is on the second page here in second.html.
>
> **[4:29](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=269)** Let's open that up.
>
> **[4:31](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=271)** And here where we have our LinkedIn link on line 15, I'm going to add to this a target, in this case of _parent.
>
> **[4:44](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=284)** And so what this will do is rather than trying to load the LinkedIn website inside of the iframe, it'll load it inside of the iframe's parent, which is the main webpage that we're looking at.
>
> **[4:56](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=296)** So I could also say here, once again, _blank for my target, that would open it in a new tab or a new window.
>
> **[5:04](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=304)** But I wanted to demonstrate that there are some other values that might be useful to you.
>
> **[5:08](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=308)** So now that we've saved this second link here let's go back to our website refresh.
>
> **[5:15](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=315)** And now inside of my iframe and my second page, I can click on this LinkedIn link and you'll see here that it opened it up in that same tab that the website was already on.
>
> **[5:28](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=328)** So there's a couple of other values for this but parent_parent and _blank are probably the two that are most useful to you.
>
> **[5:37](https://www.linkedin.com/learning/html-and-css-linking/opening-links-in-different-windows-and-iframes?u=76281980&t=337)** _blank is the one you're going to use 99% of the time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (9), [[HTML]] (2), [[Google]] (1), [[Security Risk]] (1)
> **UI Navigation:** click on (3), open the (2)
> **Env Vars:** http (1), https (1), html (1), url (1)
> **Tools:** firefox (3)
> **Definitions:** is an  (2), is a  (1)
> **Code Identifiers:** target_blank (1), parent_parent (1)
> **Cross-References:** go back to (2)
> **File Paths:** second.html (1)

#### [Linking to PDF files and other documents](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=0)** - [Instructor] Making links to PDFs isn't any different than making links to other pages on your website.
>
> **[0:06](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=6)** You can link to PDFs within your website or you can link to PDFs on other websites.
>
> **[0:12](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=12)** The principles you use for linking PDFs is the same for linking any other kind of document including [[Microsoft Office]] documents.
>
> **[0:20](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=20)** If the browser can't display a specific type of document then it will download the document instead.
>
> **[0:27](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=27)** So let's practice making some links to these other types of files.
>
> **[0:31](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=31)** As you'll see here on lines 19, 20 and 21 inside of link storage [[HTML]] located in your exercise files folder inside of folders 01 04 in the begin folder, you'll see that we are going to make links to a PDF on our site.
>
> **[0:47](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=47)** We'll make a link to a [[Microsoft Word|Word]] document and we're going to link to a PDF elsewhere on the internet in this video.
>
> **[0:54](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=54)** So let's start with the first one here on line 19 linking to a PDF.
>
> **[0:59](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=59)** As you might expect, we're going to still use the a tag here, start with the a tag and where you want the linkable text to end.
>
> **[1:08](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=68)** Inside of that a tag, you're going to add the href attribute, what are we linking to?
>
> **[1:14](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=74)** Once again if you put your quotes in there, VS code will be very kind to list all the various types of files that you can link to.
>
> **[1:22](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=82)** In this case, we're going to link to flowers dot PDF.
>
> **[1:26](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=86)** And if you save this you can display this page inside of your web browser.
>
> **[1:36](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=96)** And if I click on this, here is a link to a PDF.
>
> **[1:39](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=99)** You'll see that it will very kindly open up this PDF here for me.
>
> **[1:44](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=104)** Now, is that good [[User Experience (UX)|user experience]]?
>
> **[1:46](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=106)** That's another great question.
>
> **[1:48](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=108)** If I'm not expecting a PDF to come up here that can be incredibly annoying even when I'm on my desktop computer but it's incredibly, incredibly annoying if I'm on my mobile phone and I have to download the PDF and I'm not expecting it and it takes forever because I'm on a cellular network somewhere, that is annoying.
>
> **[2:08](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=128)** So warn your users.
>
> **[2:10](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=130)** If they're going to click on a PDF link the easiest way to do that is simply to say, "Here is a link to a PDF."
>
> **[2:16](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=136)** And just after it, I like to do something like PDF comma and then maybe give it the size of the file.
>
> **[2:23](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=143)** And I think this one was something like three megabytes.
>
> **[2:26](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=146)** Just so that people can make an informed choice about whether to click on the link for this PDF or not.
>
> **[2:33](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=153)** Okay, and if you have the problem that I have here that my text, just starting to scroll off the screen you can always go to view toggle word wrap and that will wrap the text back here on the screen so you can see it all.
>
> **[2:45](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=165)** So likewise here for the link to the Word document we can do exactly the same thing here.
>
> **[2:51](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=171)** A href equals.
>
> **[2:53](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=173)** We're going to link to flowers dot doc X, and then it looks like I erased here.
>
> **[3:01](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=181)** So let me just re type that here.
>
> **[3:04](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=184)** Here is a link to a word document and slash a.
>
> **[3:08](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=188)** Missing its quote there as well.
>
> **[3:11](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=191)** This time around.
>
> **[3:12](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=192)** As you see here, I'm linking to a [[Microsoft Word]] document.
>
> **[3:17](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=197)** Now browsers don't support Microsoft Word documents or [[Microsoft Excel|Excel]] documents or PowerPoints.
>
> **[3:22](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=202)** So what had happened here is that when someone clicks on this link, it's definitely going to download.
>
> **[3:28](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=208)** Once again, you probably want to put a warning about that after the link.
>
> **[3:32](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=212)** So Microsoft Word document three megabytes or whatever the file size happens to be something like that.
>
> **[3:42](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=222)** If you save that and look at it again, inside of your browser.
>
> **[3:48](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=228)** Here's the link to the Microsoft Word document.
>
> **[3:50](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=230)** When you click on it, in the case of Firefox I have it set up to ask me what it should do with it.
>
> **[3:56](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=236)** And I could choose to either open it with Microsoft Word, which is my default or I can just save the file to my computer.
>
> **[4:04](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=244)** So it depends on how somebody has their browser configured but the browser is definitely not opening this file.
>
> **[4:11](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=251)** The last one I want to show you is how to link to a PDF elsewhere on the internet.
>
> **[4:15](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=255)** And I went to everybody's favorite website, the IRS website which is just full of PDFs.
>
> **[4:21](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=261)** This one is the W four form, which determines how much tax should be withheld inside of your paycheck.
>
> **[4:28](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=268)** And I recognize that those of you who are listening to me internationally don't necessarily have to deal with the IRS in your day-to-day life but you have similar document like this most likely in your country's government.
>
> **[4:40](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=280)** And you can use any PDF that's online as an example for this work that I'm about to show you if you don't want to use the IRS document.
>
> **[4:50](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=290)** So I'm just going to copy the web address associated here with the W four.
>
> **[4:57](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=297)** And I've given that to you here inside of a comment online 26 inside of your HTML if you would like to copy and use this PDF as an example.
>
> **[5:06](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=306)** And then we're going to put in our link, a href equals shockingly, exactly what we just copied.
>
> **[5:14](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=314)** And once again, if you wish you can open that in a new window, or you can open it in the same window depending on what you're doing with all of the other links to go off site inside of your website.
>
> **[5:27](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=327)** But here I'm just going to, and my link right there and warn people once again, this is a PDF of I don't actually know how big this PDF is.
>
> **[5:39](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=339)** We'll just say it's 50 K.
>
> **[5:41](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=341)** And if you save this page, once again we'll refresh our link page and you'll see here is a link to a PDF from elsewhere on the internet.
>
> **[5:50](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=350)** When you click on that it will indeed go to the W four form for the IRS.
>
> **[5:57](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=357)** Linking to different types of documents from your webpage is incredibly useful.
>
> **[6:02](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=362)** It's something that you'll see a lot in government websites, university websites and internet websites.
>
> **[6:09](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=369)** It's very easy to do.
>
> **[6:11](https://www.linkedin.com/learning/html-and-css-linking/linking-to-pdf-files-and-other-documents?u=76281980&t=371)** It's basically the same procedure as linking to another webpage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word]] (5), [[Microsoft Word|Word]] (4), [[HTML]] (2), [[Microsoft Office]] (1), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** pdf (18), irs (4), html (2)
> **UI Navigation:** click on (5), go to (2), toggle (1)
> **Definitions:** is a  (5)
> **CLI Commands:** make (3)
> **Exercise Files:** download the (2), exercise files (1)
> **Tools:** vs code (1), firefox (1)
> **Warnings:** warning (1)

#### [Linking within the same document and top of page](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=0)** - [Instructor] Sometimes, you'll want to link within a document.
>
> **[0:03](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=3)** There are many reasons to do this.
>
> **[0:05](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=5)** If this is a long document, you may want to link further down on the page.
>
> **[0:10](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=10)** You may also want to link from the bottom of the page back to top of the document.
>
> **[0:16](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=16)** So, how do we go about setting that up?
>
> **[0:18](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=18)** Well, there's two halves to linking within a document.
>
> **[0:21](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=21)** One half is the link itself, of course, and the other half is an indicator of where that link should go when the link is actually clicked.
>
> **[0:31](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=31)** So let's walk through a simple example with a back to top link, which is a very common way that we see linking within a page implemented.
>
> **[0:40](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=40)** So we're going to start by putting in our link.
>
> **[0:43](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=43)** And if you scroll all the way down this document, I put in a lot of blah, blah here, it's a long article.
>
> **[0:50](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=50)** And where we're going to put this in is here on line 61 where it says, back to top.
>
> **[0:56](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=56)** So it's going to be, once again, an a href I know you didn't see that coming.
>
> **[1:01](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=61)** Something is going to have to go there and we'll end our link here.
>
> **[1:06](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=66)** What is going to go inside of the quotes?
>
> **[1:08](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=68)** Well, you know, if there's just a file name that's there, that is a link inside of this website, if that starts with http or https we're going to somebody else's website.
>
> **[1:22](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=82)** If we're linking within the same document we have to differentiate this further.
>
> **[1:27](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=87)** The way we do that is we start with a pound sign or a hashtag, depending on how old you are, it's the octothorpe symbol here and we are going to give it a name, so something like top.
>
> **[1:40](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=100)** And that is an indicator that we should be going back to some kind of anchor that's going to be called top.
>
> **[1:48](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=108)** Now, there is a couple of ways that we can put in this anchor.
>
> **[1:52](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=112)** There's the old school way and there's the newer way of doing this.
>
> **[1:55](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=115)** So I'll just briefly demonstrate both of those for you.
>
> **[1:59](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=119)** So, if we decide that the top of the document is right here, maybe at the start of the div with a class of wrapper, the older way of doing this is just put in another a tag here and we're going to give it a name.
>
> **[2:12](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=132)** And what is that name? It would be top.
>
> **[2:16](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=136)** And then all a tags have to be closed.
>
> **[2:18](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=138)** So it winds up looking like this, and this type of code still works.
>
> **[2:24](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=144)** It's the original way that we did these types of links inside of [[HTML]].
>
> **[2:28](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=148)** If you save your page and we'll view this inside of a web browser, I narrowed up the text here with a little CSS so that you get the experience of scrolling down the page.
>
> **[2:41](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=161)** If it's not scrolling for you 'cause you got a gigantic screen, make your text bigger, make your browser window smaller, and you should wind up with at least a little bit of a scroll bar.
>
> **[2:52](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=172)** So here, when I click back to top, it will indeed link me back up to the top of the page.
>
> **[2:57](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=177)** The newer way of doing this is not to use this a tag with the attribute of name and it's to use an ID instead.
>
> **[3:06](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=186)** So here, let's just say, inside of this div with a class of wrapper we would assign an ID of top.
>
> **[3:16](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=196)** Just like that.
>
> **[3:17](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=197)** And so you could stick that ID attribute inside of any HTML tag I'm putting inside of this wrapper because, well, it's the top of the page.
>
> **[3:26](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=206)** And so if you save that again, and go back to your web browser, refresh your page, scroll all the way down to the bottom, now when you click back to top it works exactly the same way.
>
> **[3:39](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=219)** So either of these methodologies work.
>
> **[3:42](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=222)** The second way that I showed you with the ID is the more common one and the more modern way of doing this at this point in time, although both methods are effective.
>
> **[3:53](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=233)** Now, why don't you give this a try.
>
> **[3:56](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=236)** Inside of this document, down here on line 25 I have the words "I'm busy, take me to the conclusion," and the conclusion is located here on line number 49.
>
> **[4:12](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=252)** Pause the video, see if you can add some code that would link you from the top of the page there on online 25 and skip you down to the conclusion here on line 49.
>
> **[4:28](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=268)** Okay. So, I will walk you through how to do this now.
>
> **[4:31](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=271)** And I happen to be here on line 49 so I'm going to start here, you can start in either location though.
>
> **[4:38](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=278)** And so I'm going to start by giving this an ID of conclusion 'cause that's what this is, right here inside of the h3 tag, where it says "In Conclusion".
>
> **[4:49](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=289)** I'm just going to use the same tags that are already there.
>
> **[4:52](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=292)** Then I can scroll back up to line 25 here and I can put in my link, a href equals pound sign conclusion.
>
> **[5:07](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=307)** I'm busy, take me to the conclusion slash a, and if you save this and refresh your web browser, now when you see "I'm busy, take me to the conclusion," when you click that, it will scroll you down to the conclusion.
>
> **[5:24](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=324)** Now why is "In Conclusion" in the middle of this page rather than all the way, very nicely at the top?
>
> **[5:31](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=331)** Well, that's because the very bottom of the page is right here.
>
> **[5:34](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=334)** There is no extra room to push the words in conclusion to the top of your web browser.
>
> **[5:40](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=340)** It's possible. It could definitely happen.
>
> **[5:43](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=343)** One a way you can try to fake this is to make your window smaller, sometimes that'll give you a little bit of scroll room here.
>
> **[5:52](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=352)** Make it narrow and let's make it short.
>
> **[5:55](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=355)** And now I can refresh the page when I click on "I'm busy, take me to the conclusion," it works the way you would expect.
>
> **[6:03](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=363)** So if I had a phone sized device, for example, this would work great.
>
> **[6:08](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=368)** You could also make the text bigger and that would mimic the behavior as well.
>
> **[6:13](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=373)** So that's what you need to know about linking inside of a webpage.
>
> **[6:17](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=377)** Two parts.
>
> **[6:18](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=378)** One is the link itself and the other is where that link should go.
>
> **[6:21](https://www.linkedin.com/learning/html-and-css-linking/linking-within-the-same-document-and-top-of-page?u=76281980&t=381)** Where that link should go these days is often done through an ID.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **CLI Commands:** make (6)
> **Definitions:** is a  (4), is an  (2)
> **Env Vars:** html (2), css (1)
> **Analogies:** just like (1), for example (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Linking phone numbers](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=0)** - [Instructor] For mobile devices, a clickable phone number is a must.
>
> **[0:05](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=5)** They're just a huge asset to phone users.
>
> **[0:08](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=8)** They don't do a lot for desktop people.
>
> **[0:11](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=11)** The fact that there's a clickable phone number here is nice.
>
> **[0:14](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=14)** I may be able to configure my desktop to dial that number in some way or another through some other application.
>
> **[0:20](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=20)** But it's really the phone users that use this functionality a lot, and it's really handy to have it.
>
> **[0:27](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=27)** So since it's such a boost to the [[User Experience (UX)|user experience]], I'm of the opinion that any phone number that appears on your site ought to be clickable for those who want to click it and want to use it to make a phone call.
>
> **[0:39](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=39)** So how do we go about coding a phone number link?
>
> **[0:42](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=42)** So here in your next exercise file, this is links.[[HTML]], located inside the begin folder, inside of folder 01-06, in your Exercise Files folder, down here on line number 19 you'll see Call me at, and there's a phone number.
>
> **[0:59](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=59)** How do we go about making this clickable?
>
> **[1:02](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=62)** Well, by now, you should know that it's going to start with a href equals something inside of quotes, even if you don't know what it is yet, and it's going to end with /a.
>
> **[1:14](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=74)** So what goes inside of the quotes?
>
> **[1:16](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=76)** Well, this is going to start with tel, as in telephone, tel colon, and then type in the number, 123-456-7890.
>
> **[1:30](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=90)** And that is it.
>
> **[1:30](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=90)** That's all you need to do to make a clickable phone number, extremely simple.
>
> **[1:35](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=95)** So start it with tel, t-e-l, telephone, followed by your phone numbers there.
>
> **[1:41](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=101)** We can save this and put this inside of a web browser.
>
> **[1:48](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=108)** And you'll see here that this is clickable, but my desktop really isn't configured here to do anything with this phone number.
>
> **[1:54](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=114)** It's going to ask me to choose an application that the telephone number links should use to make phone calls.
>
> **[2:02](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=122)** And, ehh, it's my desktop.
>
> **[2:04](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=124)** I don't really want to make phone calls with it.
>
> **[2:06](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=126)** So I'm just going to hit the Cancel button.
>
> **[2:08](https://www.linkedin.com/learning/html-and-css-linking/linking-phone-numbers?u=76281980&t=128)** But if you really want to see this in action, you can try opening this file on your phone, and then it will definitely hook that up to your phone application and try to make a call.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), [[HTML]] (1)
> **CLI Commands:** make (5)
> **Exercise Files:** exercise file (1), exercise files (1)
> **File Paths:** links.html (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Linking to email addresses and email messages](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=0)** - [Instructor] Email links are an easy way to have a simple method for someone to click a link in a webpage and have that email address open in their configured email application.
>
> **[0:11](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=11)** Whether that's an online service like Gmail, or a desktop application, the email link still works.
>
> **[0:18](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=18)** The only downside is that spammers like to scrape these email addresses from websites.
>
> **[0:23](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=23)** Some people use [[JavaScript]] to help mix up the email address to avoid these spammers.
>
> **[0:29](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=29)** That's a little bit beyond for this course, but making an email link is super helpful.
>
> **[0:35](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=35)** They're used all over the web today.
>
> **[0:37](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=37)** So let's go through how to write one of these.
>
> **[0:40](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=40)** So inside of your Exercise Files folder, so you'll find links dot [[HTML]] in the Begin folder in zero one dash zero seven.
>
> **[0:50](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=50)** Go ahead and open that up and look at line 20 where I said, "Or send me an email."
>
> **[0:55](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=55)** And of course we're going to do something again with a href equals something in quotes, and a slash a here at the end.
>
> **[1:05](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=65)** So what goes inside of the quotes?
>
> **[1:07](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=67)** Well, as you saw previously here with the phone number, it started with T-E-L colon.
>
> **[1:12](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=72)** We're going to do something similar here for email.
>
> **[1:16](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=76)** In this case, it's going to be mailto colon, and then the email address where you would like this message to go.
>
> **[1:24](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=84)** In this case, info at two trees olive oil dot com, or whatever email address you'd like to use.
>
> **[1:34](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=94)** So that is it in its simplest format.
>
> **[1:37](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=97)** If you just do that much, open this up in your web browser.
>
> **[1:45](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=105)** So now you'll see here that I have "Or send me an email."
>
> **[1:49](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=109)** Click that link, and this is going to pull open your default email.
>
> **[1:54](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=114)** In my case, I used Gmail, and you can see here that this has started for me a new message going to info at two trees olive oil, and I can fill in the [[Representational State Transfer (REST)|rest]] of the message from there.
>
> **[2:05](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=125)** But that's not all there is to making an email link.
>
> **[2:09](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=129)** There's more information that you can specify.
>
> **[2:12](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=132)** So let's go back to VS Code, and to this mailto address we can start to add a number of additional parameters to make this email more specific.
>
> **[2:24](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=144)** One of the most helpful ones is subject.
>
> **[2:27](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=147)** So simply put a question mark after the email address and then put in subject equals olive oil quote, for example.
>
> **[2:41](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=161)** And if you save that one more time, go back to your web browser, refresh, click the email link again, this will open up, again, another tab in [[Google]], and another message.
>
> **[2:55](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=175)** This time you see now it's going to info at two trees olive oil dot com, and the words olive oil quote are already pre-configured.
>
> **[3:05](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=185)** There's a few other things you can pre-configure in this email as well.
>
> **[3:08](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=188)** Let's say I want to add to this a CC on this message.
>
> **[3:13](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=193)** So it's going to go to info at two trees olive oil, but it's going to CC me in my account.
>
> **[3:18](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=198)** So here I would put in an ampersand CC equals, and my next email address, Jen at two trees olive oil dot com.
>
> **[3:30](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=210)** Let me wrap that for you so you can see what's going on.
>
> **[3:35](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=215)** So see how this is all like one giant [[Microsoft Word|word]] with very few spaces, only spaces in the subject here.
>
> **[3:42](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=222)** We've got question marks.
>
> **[3:43](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=223)** We've got ampersands joining these things together.
>
> **[3:46](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=226)** And you can even add to this some initial text inside of the body of the message.
>
> **[3:51](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=231)** So we can put in another ampersand here and say body equals... I can even write in the body of the email message... Just like that.
>
> **[4:09](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=249)** So that giant long thing there is going to construct an email for me.
>
> **[4:13](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=253)** Save your page one more time.
>
> **[4:17](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=257)** Refresh your webpage again inside of your default browser, and click that email link, and now we'll have another email come up.
>
> **[4:24](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=264)** And the way Google does this, it looks like it's info at two trees olive oil comma Jen at two trees olive oil.
>
> **[4:31](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=271)** If you click up there, you'll actually see that, in fact, it did do Jen at two trees olive oil as a CC.
>
> **[4:38](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=278)** There's my subject, olive oil quote, and then "I can even write in the body of the email message" goes in the body of the email message.
>
> **[4:46](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=286)** Pretty cool.
>
> **[4:48](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=288)** This is a very old school way of putting together an email link, a pre-filled-out email for people.
>
> **[4:56](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=296)** These days, most of the time these things are handled by a form and server-side processing, but this old methodology of sending emails still works.
>
> **[5:06](https://www.linkedin.com/learning/html-and-css-linking/linking-to-email-addresses-and-email-messages?u=76281980&t=306)** Still useful, very low cost, and relatively straightforward to code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[JavaScript]] (1), [[HTML]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Word|Word]] (1)
> **Cross-References:** go back to (2), as you saw (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** for example (1), just like (1)
> **Env Vars:** html (1)
> **Tools:** vs code (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)

#### [Using images as links](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=0)** - [Instructor] Images may also serve as a clickable link in your website.
>
> **[0:04](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=4)** If you're going to make an image into a link, you should also include where that link goes in your alt tag for accessibility purposes.
>
> **[0:13](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=13)** So I'm looking at my links.[[HTML]] document, it's inside of the begin folder inside of 01-08 in your EXERCISE FILES.
>
> **[0:22](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=22)** And if you scroll down to line number 25, you'll see here that I have an img tag.
>
> **[0:28](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=28)** It has a source of oliveoil.jpg.
>
> **[0:31](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=31)** And I have an alt tag in here that says, "Olive oil bottles.
>
> **[0:36](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=36)** "Click to visit Two Trees Olive Oil."
>
> **[0:39](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=39)** In other words, if somebody looking at this website clicks this image, I'm telling them where they're going to go.
>
> **[0:45](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=45)** Remember that an image can indeed be clickable for a link, but if someone is using a screen reader to click an image, they don't see the image, they have no idea where they're going.
>
> **[0:55](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=55)** So you need to make sure that you include that inside of your alt tag.
>
> **[1:00](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=60)** But turning this into a link is relatively straightforward.
>
> **[1:03](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=63)** All we're going to need to do is shockingly, once again, start with a href = "" something.
>
> **[1:12](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=72)** Something is going to happen to this image and then /a at the end of the img tag.
>
> **[1:18](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=78)** So where is this going to go?
>
> **[1:20](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=80)** Well, in this case, we can just say something like [https://www.twotreesoliveoil.com](https://www.twotreesoliveoil.com).
>
> **[1:30](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=90)** And since we're going off site, we can say target="_blank", just like that.
>
> **[1:39](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=99)** So that would in fact deliver what we promise.
>
> **[1:41](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=101)** We're saying that you're going to click to visit the Two Trees Olive Oil website.
>
> **[1:45](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=105)** And so there's the URL for that and where that site is going to open in a new tab.
>
> **[1:52](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=112)** So if you save that and open this up inside of your web browser, so there we go.
>
> **[1:59](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=119)** There's my basic link page.
>
> **[2:00](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=120)** There's my image.
>
> **[2:02](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=122)** If you roll your mouse over it, you'll notice that it's clickable.
>
> **[2:05](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=125)** There's some styling, of course, we could do to this image to make it look more clickable, but we haven't gotten to the styling yet.
>
> **[2:11](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=131)** That is your only indicator that this is a clickable image right now is that the cursor turns into a hand, click on that and you see here that we opened the Two Trees Olive Oil website inside of a new tab exactly as we told it to do.
>
> **[2:26](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=146)** So basically you can use images for linking to pages within your website or to external websites.
>
> **[2:34](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=154)** The way you run that is exactly the same way you would write that code for any other kind of link.
>
> **[2:40](https://www.linkedin.com/learning/html-and-css-linking/using-images-as-links?u=76281980&t=160)** However, make sure inside of the alt tag for the image, that alt attribute where you describe what the image is, make sure you also include what clicking that image will do so that you can comply with accessibility requirements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **CLI Commands:** make (5)
> **Env Vars:** exercise (1), files (1), url (1)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** in other words (1), is a  (1)
> **File Paths:** links.html (1)
> **URLs:** [https://www.twotreesoliveoil.com](https://www.twotreesoliveoil.com) (1)
> **Exercise Files:** exercise files (1)

#### [Including several links within an image using image maps](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=0)** - [Instructor] Next topic I want to look at, has to do with something called an image map, and the best way to describe this is just to show you what one looks like.
>
> **[0:09](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=9)** This is the Basic Link Page that we've been working with so far, and this is in the beginning state it's inside your exercise files folder inside a folder 01-09, inside of the begin folder, open up links.[[HTML]] and you should see this page.
>
> **[0:27](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=27)** And you'll see that, what I've posted here is a map of Southern New England.
>
> **[0:34](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=34)** And this is lovely, let's just say that we want to have links from the states to the State's website.
>
> **[0:43](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=43)** So, Massachusetts is going to go to [mass.gov](https://mass.gov) for example, and this is a very common thing that we see on the web.
>
> **[0:51](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=51)** But as you'll notice, Massachusetts isn't exactly quite an even shape, it's not a rectangle, it's not a circle, it's a weirdo shape.
>
> **[1:02](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=62)** How are we going to make a link for a weirdo shape like this?
>
> **[1:06](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=66)** Well, fortunately there are resources out there that will do this for you pretty easily, and I recommend this one here, [image-map.net](https://image-map.net).
>
> **[1:15](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=75)** I'm just going to open that up in a new tab.
>
> **[1:19](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=79)** So as you'll see here, this is an image map generator, it's pretty simple to use.
>
> **[1:25](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=85)** What we need to do here is we're going to select an image from my PC, we'll take a look at our exercise files here on the desktop.
>
> **[1:34](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=94)** Let's look at folder number 9, in the begin folder, and we're going to look at this image of New England.
>
> **[1:42](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=102)** And we'll say open, and then this is going to give us an interface for creating odd sorts of clickable regions.
>
> **[1:54](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=114)** So let's start with Connecticut, which is kind of like a rectangle, obviously not perfect, but kind of like a rectangle.
>
> **[2:01](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=121)** So down here on the bottom, underneath of my image, you'll see here that we have the ability to change this from a rect for rectangle, a poly for some sort of shape that is not one of the standard ones, let's just say it's a general polygon, and a circle.
>
> **[2:19](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=139)** So you can choose any of those kinds of things.
>
> **[2:21](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=141)** Let's just start with rect though.
>
> **[2:23](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=143)** It will ask us for a link, and I've given those to you directly inside of the HTML documents.
>
> **[2:28](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=148)** So for the state of Connecticut, it happens to be that their website is located at portal.[ct.gov](https://ct.gov), I'm just going to highlight that text and copy it, paste that on in here it may ask us for a title, this will be the state of Connecticut's website.
>
> **[2:49](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=169)** And then you can assign a target like target equals blank, or target equals parent, whatever you want to do since we seem to be opening our external links in new [[Windows]] or new tabs, I'm going to choose blank for this one.
>
> **[3:03](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=183)** And so now that I've configured that, now I can come into the state of Connecticut I'm going to click once to set this point kind of in the upper left-hand corner of Connecticut, and then I'm going to go down to the lower right-hand corner of Connecticut and it's going to draw me a nice little rectangle.
>
> **[3:20](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=200)** And just happens to be the state of Connecticut is more or less a rectangle and we can cover most of the state with that kind of shape.
>
> **[3:28](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=208)** Let's do the same kind of thing again for the state of Rhode Island right next door.
>
> **[3:31](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=211)** So we're going to add a new area with this red button here, I'm going to select that as the active one, I'm going to set my shape in this case to poly because Rhode Island doesn't necessarily confine itself to a clean shape, so let's make a poly, then I need my link, and that is to www.[ri.gov](https://ri.gov).
>
> **[3:55](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=235)** Copy that we'll post that in here for link, and then we can say State of Rhode Island website, once again opening a blank window and now I'm going to draw this one, just starting up here, and I'm just going to click where I'd like the outline of this shape to be.
>
> **[4:19](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=259)** Say sort of like that up here, around the corner, up there, kind of like that.
>
> **[4:28](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=268)** And so that will become my clickable area now for Rhode Island.
>
> **[4:33](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=273)** And once again we can do this again for the state of Massachusetts.
>
> **[4:38](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=278)** So select again active, we'll say poly and this is https www.[mass.gov](https://mass.gov), and this would be the Commonwealth of Massachusetts website.
>
> **[4:54](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=294)** Target again is blank.
>
> **[4:56](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=296)** So once again, we can just start clicking up here and sort of trace the state of Massachusetts and it's even a weirder shape than the state of Rhode Island.
>
> **[5:07](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=307)** So just keep on clicking, we get out here we get a little bit of Cape Cod, and all the people out on Martha's Vineyard and Nantucket are going to be mad at me 'cause I've left them out, sorry guys, there we go.
>
> **[5:23](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=323)** It's something like that.
>
> **[5:24](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=324)** So you'll see here, we've just overlapped the Rhode Island clickable area a little bit, I might be able to add or drag some of these points a little bit to reduce our overlap.
>
> **[5:43](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=343)** All right so once you sort of got your clickable area there for Massachusetts, you kind of got one there for Rhode Island, you got one for Connecticut, then we can say, show me the code down here on the bottom.
>
> **[5:53](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=353)** And this will generate for us an image map along with the appropriate HTML.
>
> **[5:59](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=359)** And I'm just going to copy all of this, highlight it all, copy it, and then we can go back to vs code, I'm going to add this down here just after the image tag that's already in place.
>
> **[6:15](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=375)** So you'll see here that we have our image source newengland.png.
>
> **[6:20](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=380)** And the thing that the new code is added for us is this use map option here.
>
> **[6:26](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=386)** Let's go ahead and cut that from that image tag and paste it in the one we have I like my tag better because it has an alt tag.
>
> **[6:37](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=397)** And if you notice what's happening here is that the use map attribute is one that will connect the image map that's located here with the image on which to display that map.
>
> **[6:50](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=410)** And the map itself, if I turn on my [[Microsoft Word|word]] wrapping here so the state of Connecticut, that one is the one that's the rectangle you'll see here it just has four coordinates calling out the various corners of the state of Connecticut, and the shape is a rectangle.
>
> **[7:06](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=426)** But then Rhode Island and Massachusetts, which have the polygon shape, they have a bunch of numbers here, and that is the clickable area for where they are.
>
> **[7:16](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=436)** Go ahead and save this, and then we can refresh our webpage,
>
> **[7:24](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=444)** and now you'll notice that the cursor turns into a hand here as I drag it around sort of generally on the state of Massachusetts, if I click on it, it opens up [mass.gov](https://mass.gov), which is exactly what I would expect ditto for the state of Connecticut and ditto for the state of Rhode Island, there we go.
>
> **[7:45](https://www.linkedin.com/learning/html-and-css-linking/including-several-links-within-an-image-using-image-maps?u=76281980&t=465)** So image maps are an old technique they've been around forever, they're very well supported, and in a situation like this where you have multiple areas inside of an image that you'd like to be clickable an image map is a great way to do it and an online tool like [image-map.net](https://image-map.net) is an easy way to get that code written for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Windows]] (1), [[Microsoft Word|Word]] (1)
> **URLs:** [mass.gov](https://mass.gov) (3), [image-map.net](https://image-map.net) (2), [ct.gov](https://ct.gov) (1), [ri.gov](https://ri.gov) (1)
> **Definitions:** is a  (4), is an  (2)
> **Analogies:** kind of like (3), for example (1)
> **CLI Commands:** make (2)
> **Env Vars:** html (2)
> **UI Navigation:** go to (1), click on (1)
> **Exercise Files:** exercise files (2)

#### [Links in the <head> of the document](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=0)** - [Instructor] For the last item in this chapter, let's take a look at some of the exercise files developed in past courses that I've recorded.
>
> **[0:08](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=8)** This is a website for the Topsy Turvy cake design.
>
> **[0:11](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=11)** And I originally built this website as part of the course, Learning Foundation Six, and then I used that website in a course called, [[HTML]] [[Metadata]] in the Head, and that is where we were focused on the head of the document and all of the millions of tags you can have in the head of your document.
>
> **[0:30](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=30)** And what I'd like to use it for in this course is to once again, look at all of the kinds of links that we have here in the head of the document, and talk about them briefly.
>
> **[0:41](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=41)** So I'm going to scroll here just in the head of this document down here, starting around line 15, and just briefly touch on a little bit about these links that are here.
>
> **[0:50](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=50)** So you'll see, first of all, lines 15 to 19, we have linked tags here, and you'll see, actually 15 to 18, focus on the Apple Touch icon.
>
> **[1:04](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=64)** And so that is, of course, something that has to do with the Mac and iOS platforms, and these are icons that would show up if you decided to save a link to this web page on your iPad or your iPhone.
>
> **[1:19](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=79)** This is where those images would come from.
>
> **[1:21](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=81)** So that's what those are.
>
> **[1:22](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=82)** It looks like a link, I mean, when it says link in the tag, it says href right after it, it's pointing to a path, and this is a workable webpage, you can load it up in your browser to take a look at it.
>
> **[1:34](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=94)** But these are not clickable links.
>
> **[1:36](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=96)** Remember, anything that's in the head of the document, we may say link, but we don't mean link in the way that we think of it in the body of the document, where there are clickable links.
>
> **[1:47](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=107)** Line number 19 is another use for the link tag.
>
> **[1:50](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=110)** In this case, we're looking at a favicon.
>
> **[1:53](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=113)** That's the tiny little image that appears in the upper left corner of your website.
>
> **[1:58](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=118)** So, here in VS code, the little double angle bracket, that's orange, that's kind of like a favicon here inside of VS code.
>
> **[2:07](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=127)** The same idea.
>
> **[2:08](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=128)** You'll see that inside of your web browser, like Chrome and Firefox.
>
> **[2:13](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=133)** And this is how we specify that particular image.
>
> **[2:17](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=137)** You'll also see the link tag used here for style sheets.
>
> **[2:21](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=141)** In this case, we're linking to specific style sheets.
>
> **[2:25](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=145)** Those style sheets, of course, will make the webpage pretty.
>
> **[2:28](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=148)** And the link tag is used for that as well.
>
> **[2:31](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=151)** So once again, only the links in the body of the document are clickable.
>
> **[2:34](https://www.linkedin.com/learning/html-and-css-linking/2402958?u=76281980&t=154)** The links in the head of this document are about pulling in resources to support webpage construction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[Metadata]] (1)
> **Code Identifiers:** ios (1), ipad (1), iphone (1)
> **Tools:** vs code (2), firefox (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** html (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** kind of like (1)


### 2. Styling Links with CSS

[↑ Back to Table of Contents](#table-of-contents)

#### [Styling links and link states](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=0)** - [Instructor] In this second chapter of the course, I am moving into [[CodePen]] as my development environment rather than sticking with VS Code.
>
> **[0:08](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=8)** The reason why is I really like CodePen for teaching because you can see the [[HTML]] and the CSS at the same time as well as seeing what the page looks like, which of course is incredibly helpful when working with CSS.
>
> **[0:22](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=22)** Inside of your exercise files folder for chapter 2, you will find a link that will take you to this page.
>
> **[0:28](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=28)** This is the top level page for a collection of these code pens, and from here for each of the videos you'll find the beginning and end states, and you can click on those links and follow along as you want.
>
> **[0:42](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=42)** We'll start with chapter 2, video number one and we're going to talk about styling and link states.
>
> **[0:49](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=49)** On this page, I have links to two different websites.
>
> **[0:53](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=53)** [[LinkedIn]], which I'm pretty sure you've visited before, like me and Harvard University, which you might not have visited.
>
> **[1:01](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=61)** You might notice that there's different colors for these links.
>
> **[1:04](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=64)** Blue indicates that you've never visited the site before, at least in the memory of your web browser, while purple indicates that you have visited it.
>
> **[1:13](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=73)** This is the default styling that comes with your web browser.
>
> **[1:18](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=78)** And it is possible to style these links now in a similar way, or in very different ways for the different states of your link, depending on whether the link is visited or whether it is hovered over or it has a focus on it.
>
> **[1:34](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=94)** And then let's talk about all of those.
>
> **[1:36](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=96)** So for the most part, right now, the way people tend to style links is simply with the a tag, just all by itself, and they'd say something like color green.
>
> **[1:49](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=109)** Notice that both the visited link, which is the LinkedIn link, which we've been to before and the unvisited link, Harvard University are turning green together.
>
> **[1:59](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=119)** Why?
>
> **[2:00](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=120)** Well, that's because we're styling the general link HTML itself, that anchor tag, and we're not differentiating a link state.
>
> **[2:10](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=130)** However, we can style these links differently for all kinds of states using pseudo classes.
>
> **[2:16](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=136)** There's five of these.
>
> **[2:17](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=137)** They have to go at a very specific order.
>
> **[2:20](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=140)** So let's go through those one at a time.
>
> **[2:23](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=143)** So I'm just going to start here and repurpose this first link, a:link means that the link is not been visited.
>
> **[2:33](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=153)** So here I'm changing the blue to a green.
>
> **[2:36](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=156)** The second one in the order that you must specify these is a:visited and let's make that one color blue.
>
> **[2:48](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=168)** So, of course, this is the one that actually has been visited before.
>
> **[2:51](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=171)** And I just created a pretty grave usability error by making my visited links look blue, because now everybody's going to be confused by the default behavior, but you can do it.
>
> **[3:03](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=183)** You can also do an a:focus.
>
> **[3:08](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=188)** Now, what exactly is focus?
>
> **[3:11](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=191)** Well, let me put it on and I'll show that to you.
>
> **[3:13](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=193)** So background color of yellow.
>
> **[3:17](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=197)** If you click over here, just click anywhere inside of the white area on the display side of CodePen and then hit your tab key on your computer.
>
> **[3:28](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=208)** And what you'll see here is that we will tab through the various links over on that side of the page.
>
> **[3:37](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=217)** This is called the focus state.
>
> **[3:39](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=219)** So in other words, the link is selected in some way but it hasn't been clicked on yet.
>
> **[3:43](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=223)** These are useful for accessibility purposes.
>
> **[3:47](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=227)** By default, there's usually some kind of box that goes around these, the boxes often just a gray dotted line.
>
> **[3:55](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=235)** In this particular case, we've added a background color of yellow here.
>
> **[4:01](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=241)** After focus comes the hover state so a:hover, and let's say text-decoration of none.
>
> **[4:12](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=252)** So as I rolled my mouse over these links that underline goes away and that would be our hover state.
>
> **[4:19](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=259)** Interestingly, it's possible to have both hover and focus at the same time.
>
> **[4:24](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=264)** Once again, click anywhere in the white area, and hit a tab to focus that link and then roll your mouse over it and the underline will also disappear.
>
> **[4:32](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=272)** So this link is now simultaneously has focus and has the hover state.
>
> **[4:37](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=277)** You could write yet another link state for that.
>
> **[4:40](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=280)** If you were to do that it would look something like a:focus:hover all together as one giant thing and then you'd write whatever style it is that you want for that.
>
> **[4:53](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=293)** And then finally, the last link state is active.
>
> **[4:58](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=298)** Active is what happens when the link has been clicked but before the next page loads, and you can kind of fake this a little bit if you're careful at how you click the link and sort of drag your mouse away so it doesn't quite completely activate but it'll still style that way.
>
> **[5:16](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=316)** Let's just say color black and then I'll show you what I mean.
>
> **[5:20](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=320)** So, right now, as I said we have a hover state that's active here if I just roll my mouse over it.
>
> **[5:27](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=327)** If I actually press my mouse button down, you'll notice that the link turns black and we get a yellow focus.
>
> **[5:36](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=336)** So, what's going on here is that just by holding down my mouse button, which is what I'm currently doing, I've set this to the active state of the link.
>
> **[5:47](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=347)** It's also has the focus and I'm also hovering over it, all at the same time.
>
> **[5:52](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=352)** So all of those styles are being layered on top of this to give it the look that it has right now.
>
> **[5:58](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=358)** And if you roll your mouse away again it won't actually go to try to visit that site.
>
> **[6:04](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=364)** But if you let your mouse button up while you are on that link, you will definitely go to that website.
>
> **[6:09](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=369)** Likewise, here for Visit Harvard University.
>
> **[6:12](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=372)** If I let my mouse button go this will go visit Harvard University.
>
> **[6:17](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=377)** So, things to remember, there are five link states, a:link, a:visited, a:focus, a:hover, a:active there's acronyms you can use to remember this.
>
> **[6:28](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=388)** One that people have told me is live fun and happy.
>
> **[6:36](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=396)** And my personal favorite is Lord Vader Former Handel Anakin.
>
> **[6:44](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=404)** I can take credit for neither of these but they are out there on the internet.
>
> **[6:47](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=407)** And if you are specifying individual link states, you have to put them in this order for the cascade and inheritance to work correctly through your link states.
>
> **[6:57](https://www.linkedin.com/learning/html-and-css-linking/styling-links-and-link-states?u=76281980&t=417)** If you put them in a different order they will not work correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CodePen]] (3), [[HTML]] (2), [[LinkedIn]] (2)
> **Env Vars:** html (2), css (2)
> **CLI Commands:** find (2), make (1)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** means that (1), is called (1), in other words (1)
> **Tools:** vs code (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Making exceptions to link styling](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=0)** - [Instructor] In our last video, we styled all of the possible states for our links individually, as a group.
>
> **[0:06](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=6)** Now, maybe we want to style the Harvard link slightly differently than the [[LinkedIn]] link.
>
> **[0:12](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=12)** There's a lot of possibilities for selectors to write this, but let's do what most people would do, most commonly, which is to add a class to the link, and then style accordingly.
>
> **[0:24](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=24)** So here inside of the [[HTML]], I'm going to click inside of the tag here on line three, and I'm going to add a class of Harvard, because what else would we do?
>
> **[0:37](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=37)** And then down here inside of my CSS these are generic styles for all of the links on the page.
>
> **[0:45](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=45)** After all of that, I am going to put in my Harvard styling and I'm going to say that the color will be crimson, of course, and the font weight will be bold.
>
> **[1:00](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=60)** OK, so we have a bold link, but the link itself is still green.
>
> **[1:06](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=66)** It didn't turn crimson.
>
> **[1:08](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=68)** So what exactly is going on?
>
> **[1:11](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=71)** It's a class.
>
> **[1:13](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=73)** We put it at the end of the style sheet.
>
> **[1:17](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=77)** So why isn't it overriding the more generic styles?
>
> **[1:21](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=81)** Well, first of all, the specificity of our previous styles, if we look at a:active, a:hover, a:focus, or any of these, that specificity is higher than our class of Harvard by itself.
>
> **[1:35](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=95)** Remember that pseudo classes and regular classes are weighted the same in terms of specificity, and elements have a lower specificity than our classes and pseudo classes do, but we have a element present here that we don't have here in our Harvard declaration.
>
> **[1:57](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=117)** If you stick a letter a in front of it, that would help, you'll increase the specificity.
>
> **[2:02](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=122)** Now it would be the same, and that would make this link turn red.
>
> **[2:07](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=127)** The other possibility that we could do, is we could say .harvard:link, in other words, once again, indicating the unvisited state.
>
> **[2:17](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=137)** And that would also turn the link red.
>
> **[2:19](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=139)** So which one of these would be best?
>
> **[2:23](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=143)** Well, that depends on what you want to achieve with this particular class.
>
> **[2:28](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=148)** So remember that the generic class of Harvard means that these styles are going to be applied across the link states as they're currently written.
>
> **[2:37](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=157)** In other words, you won't see a different color once the link is visited.
>
> **[2:41](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=161)** It will always be red.
>
> **[2:43](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=163)** So if I say just a.harvard, whether or not I visited this link, it's going to be red.
>
> **[2:50](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=170)** But if I say .harvard:link, it will be red when it's unvisited, but when it's been visited, it will turn blue.
>
> **[2:59](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=179)** So it depends on what exactly it is that you want to accomplish as to which is better.
>
> **[3:05](https://www.linkedin.com/learning/html-and-css-linking/making-exceptions-to-link-styling?u=76281980&t=185)** But either one of these would override the default styling and give you the red link that you were looking for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[HTML]] (1)
> **Definitions:** in other words (2), means that (1)
> **Env Vars:** html (1), css (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Styling a text link to look like a button](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=0)** - [Instructor] Buttons have a very semantic meaning associated with them.
>
> **[0:04](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=4)** And by default, buttons are programmed essentially to work inside of [[Forms]].
>
> **[0:09](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=9)** You have a form tag, there's a button inside of it.
>
> **[0:13](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=13)** It's a submit button.
>
> **[0:14](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=14)** It's a reset button.
>
> **[0:15](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=15)** That's what buttons are historically true for doing.
>
> **[0:20](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=20)** With HTML5, we got a button tag itself as opposed to an input, which is what buttons were before.
>
> **[0:27](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=27)** And buttons are now able to live outside of an [[HTML]] form tag, just like this button does right here.
>
> **[0:36](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=36)** But this button does absolutely nothing.
>
> **[0:39](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=39)** We can click this button all day long.
>
> **[0:41](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=41)** It will do absolutely nothing.
>
> **[0:43](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=43)** We have to associate [[JavaScript]] with this button in order to make it do something whatever that something happens to be.
>
> **[0:50](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=50)** Now, often people want the look of a button but they want the functionality of a link.
>
> **[0:56](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=56)** They just want to be able to click on a button and it's going to take them to wherever it is they need to go rather than having to mess with JavaScript and using a semantic HTML button.
>
> **[1:09](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=69)** The better way to deal with this is to code your regular old HTML link and leverage CSS to make it look like a button.
>
> **[1:18](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=78)** That's a far better approach for doing this kind of work.
>
> **[1:21](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=81)** So that's what I'd like to do now.
>
> **[1:22](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=82)** I'm going to take this subscribe to [[LinkedIn]] Learning and let us make it look like a button.
>
> **[1:29](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=89)** So I'm going to start by setting this up with the a tag and I'm using generic styles here because I have nothing else on my page.
>
> **[1:38](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=98)** Obviously you could use a more complex selector to select specifically this particular link.
>
> **[1:45](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=105)** Anyway, let's start by putting a border on this.
>
> **[1:48](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=108)** One pixel solid black because a button needs a border.
>
> **[1:53](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=113)** Then we're going to add a bit of padding to this.
>
> **[1:56](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=116)** 0.5 REM and that'll put it on all four sides.
>
> **[2:00](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=120)** I'd like a little bit more on the left and the right.
>
> **[2:02](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=122)** So let's add that.
>
> **[2:05](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=125)** Here we go.
>
> **[2:06](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=126)** Nice.
>
> **[2:07](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=127)** We can make it pretty by giving it a border radius.
>
> **[2:12](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=132)** Let's say 50 pixels.
>
> **[2:15](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=135)** We give it a nice pill shape and then we can give it a background color of 2c3e57, and that'll be in a nice shade of dark blue
>
> **[2:33](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=153)** and we can't read the text anymore.
>
> **[2:35](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=155)** So we need to do something about that.
>
> **[2:37](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=157)** Let's make the color white.
>
> **[2:41](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=161)** And it looks really awkward with that underlined.
>
> **[2:43](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=163)** So let's turn that off.
>
> **[2:45](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=165)** Text decoration of none.
>
> **[2:49](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=169)** So that actually looks kind of like a button but there's more that we could do to make this more buttony.
>
> **[2:56](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=176)** And so one of the things that we could do is let's leverage that a focus state and here we can say the color will be yellow.
>
> **[3:08](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=188)** So in other words, if I click over here once again and start tabbing, I'll select the real button first and then I'll select my fake button.
>
> **[3:17](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=197)** And by changing the color of the text, you can see that it has the focus for the page.
>
> **[3:22](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=202)** So that's a nice effect.
>
> **[3:25](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=205)** We can also continue to add here for our hover state, a colon hover, and we can make the background color yellow
>
> **[3:39](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=219)** and we can make the color black.
>
> **[3:44](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=224)** So now when I actually hover over the link, it's going to turn yellow with black writing on it.
>
> **[3:49](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=229)** That's a pretty distinctive looking button.
>
> **[3:52](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=232)** And then maybe if you want, you could even a active, add that a active and make the color red.
>
> **[4:02](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=242)** It actually is red by default from your browser but you can double down on it here.
>
> **[4:07](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=247)** And so now when you hover over it, it turns yellow.
>
> **[4:11](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=251)** If you hover over it and click on it at the same time, you've got red text.
>
> **[4:16](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=256)** So that is how you might go about making a button that looks like a button.
>
> **[4:23](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=263)** There are additional things you could do here.
>
> **[4:25](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=265)** If you wanted, you could add a gradient to it to make it look a little bit more beveled.
>
> **[4:30](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=270)** You could add a little bit of a drop shadow or a box shadow to this, to give it a little bit of a 3D sort of look, make it pop off the page a little bit.
>
> **[4:40](https://www.linkedin.com/learning/html-and-css-linking/styling-a-text-link-to-look-like-a-button?u=76281980&t=280)** There's a whole bunch of stuff that you could do to make your button look a little bit more buttony but what I've given you here is something of a basic recipe that you can apply to any sort of link that you'd like to look like a button.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[JavaScript]] (2), [[Forms]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (12)
> **Env Vars:** html (3), html5 (1), css (1), rem (1)
> **UI Navigation:** click on (2), select the (1)
> **Analogies:** just like (1), kind of like (1)
> **Versions:** 0.5 (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Understanding proper navigation markup](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=0)** - [Instructor] I've really been shocked looking at [[HTML]] for navbars around the web these days.
>
> **[0:07](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=7)** If you're interested in semantic HTML mark up, the navbar is the easiest thing in the world because every navbar you will ever make from now on is going to have exactly the same mark up.
>
> **[0:21](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=21)** It's an unordered list.
>
> **[0:23](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=23)** All this is is a list of links.
>
> **[0:26](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=26)** And despite what marketing has to say they don't actually have to go in any particular order.
>
> **[0:31](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=31)** So an unordered list is the best way to mark up our navigation bar.
>
> **[0:37](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=37)** The only question you might have is whether the nav tag should be wrapped around the whole thing or not.
>
> **[0:42](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=42)** And if it's a major navbar on the page like the one that goes at the top of your webpage.
>
> **[0:48](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=48)** It should have a nav tag around it.
>
> **[0:50](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=50)** So let's walk through exactly what the proper mark up for every navbar that you will ever write for the [[Representational State Transfer (REST)|rest]] of your life looks like in detail.
>
> **[1:00](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=60)** So here I am in my code pan.
>
> **[1:03](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=63)** I've started you off with five links here.
>
> **[1:06](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=66)** And let's start by writing some mark up that goes around this.
>
> **[1:11](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=71)** So first of all this is going to be the major navigation for our website.
>
> **[1:15](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=75)** So we start with the nav tag to indicate that this is navigation.
>
> **[1:19](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=79)** Nav/nav.
>
> **[1:21](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=81)** That goes around the whole entire thing.
>
> **[1:23](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=83)** And it it indicates that we have navigation.
>
> **[1:25](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=85)** Then after that we're going to make this an unordered list.
>
> **[1:30](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=90)** It starts with ul it end with a /ul.
>
> **[1:35](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=95)** Awesome.
>
> **[1:35](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=95)** Then for each one of these individual navigation items it will be marked up as a list item.
>
> **[1:43](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=103)** And then followed by our a-h-ref equals wherever it is that we happen to be going.
>
> **[1:50](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=110)** And I'm just going to use a hashtag pound sign here.
>
> **[1:55](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=115)** As a placeholder.
>
> **[1:58](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=118)** That is your basic formula.
>
> **[2:00](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=120)** I'm gone ahead and mark up the other four here.
>
> **[2:03](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=123)** You go on ahead and type on along.
>
> **[2:16](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=136)** Okay, so that is basically it.
>
> **[2:19](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=139)** That is what your nav bar mark up is going to look like.
>
> **[2:22](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=142)** Yes.
>
> **[2:22](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=142)** It doesn't go horizontally across the page.
>
> **[2:24](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=144)** We have CSS to do that.
>
> **[2:26](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=146)** I'll show you how to do that in a couple of videos.
>
> **[2:28](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=148)** Or you can display it vertically.
>
> **[2:30](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=150)** You can get rid of the bullets.
>
> **[2:31](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=151)** You can get rid of the underlines.
>
> **[2:34](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=154)** The nesting of these tags is important.
>
> **[2:36](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=156)** The nav should be on the outside around the whole entire thing.
>
> **[2:39](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=159)** It's an unordered list, of course that's the next tag in.
>
> **[2:42](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=162)** Each of these list items have to be children of the ul.
>
> **[2:46](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=166)** Those are the only children that ul is permitted to have are lis.
>
> **[2:51](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=171)** And so those are always on the outside so that inside of that you have your links with your text to wherever people are going on this website.
>
> **[3:00](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=180)** Beyond that you can style this however you want to make whatever effect you want for your navbar.
>
> **[3:07](https://www.linkedin.com/learning/html-and-css-linking/understanding-proper-navigation-markup?u=76281980&t=187)** But this mark up, this is the way mark up should be for every navbar you write going forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (3)
> **Env Vars:** html (2), css (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Creating a simple vertical navigation bar](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=0)** - [Instructor] Vertical nav bars don't seem to be much in style these days; however, they're still a useful way of displaying a bunch of links, particularly when you aren't sure how many there will be.
>
> **[0:12](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=12)** They're really useful on blogs and on other content-heavy sites, and that might be where you see them.
>
> **[0:18](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=18)** I'm going to walk you through one possible way of creating a vertical navigation bar.
>
> **[0:25](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=25)** Obviously, there are approximately 500 bajillion different ways to do this.
>
> **[0:30](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=30)** I do have a course coming out, in not too long, that will be on how to create nav bars horizontally and vertically, and show you a bunch of different styling options.
>
> **[0:40](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=40)** But, for now, in this course, I'm going to keep it brief, let's do just one vertical and one horizontal, that'll be the next video.
>
> **[0:47](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=47)** So, let's start, remembering that every [[HTML]] element is a box that you can leverage in creating a nav bar, and remembering exactly which box you're at and how large those boxes are and how much area they take up are really key to styling a good nav bar.
>
> **[1:06](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=66)** So, let's just start by saying our body for this web page is going to have a margin of zero and a padding of zero, and the reason we do this is, this is going to get rid of that little white margin that goes around the edge of your web page.
>
> **[1:24](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=84)** It's there by default from your web browser.
>
> **[1:27](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=87)** Then, we can go on to say, for our nav element, let's say our background-color is efac2f, which is a lovely shade of yellow.
>
> **[1:40](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=100)** So, you'll see that it goes all the way across the page.
>
> **[1:43](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=103)** Why is there space on the top?
>
> **[1:45](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=105)** That, it happens to be from our ul here, and once we put in the next style declaration, that'll start to go away.
>
> **[1:55](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=115)** We might not want this vertical navigation bar to go all the way across the page like this, so we can always limit its width, let's say 25%, and we can give it a border, let's say on the right, one pixel solid, 666.
>
> **[2:16](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=136)** I'm just going to make this window a little bit bigger, so we're not going to change the HTML.
>
> **[2:22](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=142)** Now, let's go to our ul.
>
> **[2:24](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=144)** This little formula is one you're going to use over and over again when styling nav bars.
>
> **[2:29](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=149)** The list-style-type is none, that'll turn off all of the bullets.
>
> **[2:36](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=156)** And then, I would like you to set your margin to zero and your padding to zero.
>
> **[2:42](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=162)** Most browsers, these days, are using margin for setting up their ul and giving you the indent, but some are still using padding, so just zero out both of those, and that'll shove all of your links to the corner of that particular box.
>
> **[2:56](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=176)** And then, we'll just jump right to the a and start doing some styling here.
>
> **[3:02](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=182)** If we just stick a border on this for a minute, border, one pixel solid black, just to stick a border on it.
>
> **[3:11](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=191)** So remember that the a tag is an inline element, meaning that it's only as wide as its content.
>
> **[3:17](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=197)** So you see here that our clickable area is limited to the [[Microsoft Word|word]].
>
> **[3:23](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=203)** That's not a big deal if you're on a desktop computer using a mouse, but if you're using your finger on a mobile device, this reduces the size of the clickable area, we need to be a little bit more mindful of that.
>
> **[3:35](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=215)** And so, one of my favorite tricks in a nav bar is to change the display of the link from inline to block, to display block, and that will stretch that clickable area all the way across the page, then we can add some padding to this, 1rem, we can add a text, decoration of none.
>
> **[3:59](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=239)** I'm not a fan of underlines on nav bars because the location suggests what they do for a living; however, in the main body of your text, you probably want to leave the underline on for accessibility purposes.
>
> **[4:14](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=254)** We can set our color here to a more attractive blue, 2c3e57, maybe you want your font-weight to be bold, maybe you want a nice attractive border on the bottom, border-bottom of one pixel solid dark gray.
>
> **[4:39](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=279)** And so, that'll give you that nice sort of look like this.
>
> **[4:44](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=284)** Now, the next thing we can do is set up our hover state, a colon hover.
>
> **[4:49](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=289)** Chances are, in a nav bar, you probably don't want to have separate link and visited state, you want your links to look the same all the time, whether they've been visited or not.
>
> **[4:59](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=299)** So, this tends to be the way I set up my styles, and just to keep this simple, let's just swap.
>
> **[5:05](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=305)** So, on hover, we'll have a blue background with yellow text.
>
> **[5:09](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=309)** So, our background-color will be 2c3e57,
>
> **[5:18](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=318)** and our color will be efac2f.
>
> **[5:25](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=325)** So, now, as you roll your mouse over each of these, we have a very blocky sort of look to this, but it's very clear as to what's going on in terms of how this link bar works.
>
> **[5:36](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=336)** One final trick for you if you'd like your nav bar to stretch all the way down the page instead of stopping here.
>
> **[5:43](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=343)** Remember, it stops here because that's where the content ends, and by default, pretty much every element in HTML, its height is determined by its content.
>
> **[5:51](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=351)** But if you wanted to stretch this nav bar all the way down to the bottom of the page, one of the things we can do is we can set our height here on the nav element.
>
> **[6:02](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=362)** Why the nav element?
>
> **[6:03](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=363)** Because the background-color was set there.
>
> **[6:06](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=366)** We can set our height to, say, 100vh, so 100% of the viewport width, and that will stretch your nav bar all the way down to the bottom of the screen.
>
> **[6:18](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=378)** So that's a pretty quick, simple, straightforward vertical navigation bar.
>
> **[6:24](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-vertical-navigation-bar?u=76281980&t=384)** And in the next video, I'll show you how to do a horizontal one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Microsoft Word|Word]] (1)
> **Env Vars:** html (3)
> **Cross-References:** in the next (2), next video (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Creating a simple horizontal navigation bar](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=0)** - [Instructor] Next up, how about a horizontal navigation bar?
>
> **[0:04](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=4)** This is where I see most offenders on the web today.
>
> **[0:08](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=8)** People don't understand how to make a unordered list, which is the correct markup for a navigation bar, go horizontally across the page.
>
> **[0:17](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=17)** It's really pretty straightforward.
>
> **[0:19](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=19)** So let's walk through how to do that now.
>
> **[0:23](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=23)** So first of all, here in our CSS, if you'd like to have your nav bar snug up against the top, and the left and the right side of your navigation window, the trick is to turn off the padding and the margin in the body.
>
> **[0:34](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=34)** So let's start there, body with a padding of zero and a margin of zero.
>
> **[0:43](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=43)** The next thing to do is, let's set up a background color for our navigation.
>
> **[0:48](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=48)** We can just use the nav tag for that.
>
> **[0:50](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=50)** Our background color will be #EFAC2F.
>
> **[0:58](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=58)** And if you want, you can throw on a border on the bottom of one pixel solid gray.
>
> **[1:09](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=69)** So that will give you a nice sharp line between your navigation bar and the [[Representational State Transfer (REST)|rest]] of your page.
>
> **[1:16](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=76)** It's a nice effect.
>
> **[1:17](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=77)** You might be wondering about this great, big, huge space up here on the top.
>
> **[1:21](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=81)** Where is that coming from?
>
> **[1:23](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=83)** It has to do with your unordered list.
>
> **[1:25](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=85)** That's why it's not pushing up here to the top of the page.
>
> **[1:28](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=88)** So the next thing to do is to turn off that padding and/or margin associated with your UL.
>
> **[1:35](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=95)** So your list style type will be none.
>
> **[1:40](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=100)** Your margin will be zero and your padding will be zero and that'll snug everything up really nicely.
>
> **[1:48](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=108)** So obviously, it's looking kind of like a horizontal nav bar, except our words are going vertically.
>
> **[1:55](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=115)** So the next thing to do is to make those words go horizontally across the page.
>
> **[1:59](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=119)** We can do that pretty easily on our LI.
>
> **[2:03](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=123)** And the best way to do this is just to do a display of inline-block.
>
> **[2:11](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=131)** As I mentioned in the previous video, I will be doing a full course on navigation bars.
>
> **[2:16](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=136)** There are more ways that you can make your navigation bar go horizontally across the page.
>
> **[2:21](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=141)** Inline block is a little bit old school.
>
> **[2:24](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=144)** People tend to use Flexbox now, which would have the same effect in this situation, but to keep this really simple, and I don't have to explain Flexbox, display inline block is really straightforward and across the page, it goes.
>
> **[2:37](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=157)** Then we can continue on here.
>
> **[2:40](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=160)** Let's go up a little bit.
>
> **[2:43](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=163)** And let's say for a tag let's, once again, make it display block.
>
> **[2:50](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=170)** Why?
>
> **[2:50](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=170)** Because then the clickable area of our link will completely fill the space that's available to it rather than just leaving the words as the clickable area.
>
> **[3:01](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=181)** We'll give these each a bit of padding.
>
> **[3:03](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=183)** Let's say one REM.
>
> **[3:06](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=186)** So that'll give us patting on all sides.
>
> **[3:09](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=189)** A big clickable area for mobile devices and fingers.
>
> **[3:13](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=193)** Let's turn off our text decoration, and you can change the color to a more attractive blue.
>
> **[3:23](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=203)** In this case, #2C3E57.
>
> **[3:29](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=209)** And if you want, you can also make the font weight bold.
>
> **[3:33](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=213)** There we go.
>
> **[3:34](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=214)** And so that is looking pretty good, on hover, a colon hover.
>
> **[3:41](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=221)** We can then set our background color to the dark blue #2C3E57, and our color to the yellow #EFAC2F.
>
> **[3:56](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=236)** So now we have this very blocky sort of rollover state here on our links, just like that.
>
> **[4:02](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=242)** There actually is a bit of a gap here between these two links.
>
> **[4:07](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=247)** If you look closely, you might be able to see it.
>
> **[4:09](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=249)** It's about eight pixels or so.
>
> **[4:12](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=252)** If that's bothering you, and you really want it to be a very smooth kind of thing from one link to another, without that tiny little bit of a gap, really isn't noticeable, you can make a small tweak here, and it would be on the LI.
>
> **[4:27](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=267)** In fact, let me just put a border on this just to show you, one pixel solid black.
>
> **[4:34](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=274)** So if you put a border on your LOI here, you'll see that we actually do have a tiny little bit of a gap in between each one of these.
>
> **[4:42](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=282)** And we could get rid of that gap by, say, making our margin on the right something like negative eight pixels.
>
> **[4:52](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=292)** And that'll tighten that up.
>
> **[4:53](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=293)** Of course, you can just sort of play around with it and get that to tightened up the way you wish.
>
> **[4:59](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=299)** And then you can turn off that border, which is just there for debugging purposes.
>
> **[5:04](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=304)** And now, now it may look a little bit smoother as you roll your mouse up and down the navigation bar.
>
> **[5:09](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=309)** So, it wasn't really all that noticeable, I don't think originally, but if that is something that bothers you you can always go back and do a little tweak like that.
>
> **[5:19](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=319)** So given how straightforward and simple it is to make a horizontal navigation bar, you have no excuses not to code this in a semantic manner.
>
> **[5:27](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=327)** Make sure you mark up your navigation bar correctly.
>
> **[5:30](https://www.linkedin.com/learning/html-and-css-linking/creating-a-simple-horizontal-navigation-bar?u=76281980&t=330)** And CSS is very capable of handling everything that you want to make an attractive nav bar.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (9)
> **Env Vars:** css (2), efac2f (2), rem (1), loi (1)
> **Definitions:** is a  (2)
> **Analogies:** kind of like (1), just like (1)
> **Cross-References:** previous video (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Maintaining Links

[↑ Back to Table of Contents](#table-of-contents)

#### [Checking sites for link rot and broken links](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=0)** - [Instructor] It's so easy for the links on your website to stop working.
>
> **[0:04](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=4)** It doesn't take much if you're linking to outside websites.
>
> **[0:08](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=8)** If you're linking within your own site, even still, documents and links change over time.
>
> **[0:13](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=13)** People forget to redirect their links to the new resources, leading to something called link rot.
>
> **[0:21](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=21)** And it is exactly as it sounds, the links are rotting out there on the internet and they no longer work.
>
> **[0:28](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=28)** An important part of maintaining your site is making sure that your links work.
>
> **[0:33](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=33)** There are automated ways of doing this, thank goodness, so let's take a peak at some of these.
>
> **[0:39](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=39)** The most common services that you will find are commercial services, like this one.
>
> **[0:44](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=44)** This is Dr. Link Check, but there are dozens of other ones I could have picked to be here as well.
>
> **[0:49](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=49)** You enter your website address here in the web browser and it will run an automated check on whatever website you want to look at.
>
> **[0:57](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=57)** Whether that's from the homepage or from some inside page on that website.
>
> **[1:01](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=61)** And it will report where the bad links are inside of your website.
>
> **[1:06](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=66)** The only downside to these services of course, is that there is pricing involved with them.
>
> **[1:11](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=71)** And while there are free versions that are available, of course, those free versions are somewhat limited in what they can do and the types of checks that they happen to be performing.
>
> **[1:21](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=81)** So obviously, you get what you pay for.
>
> **[1:25](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=85)** Another type of link checker is one that is a browser extension.
>
> **[1:29](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=89)** This one is called the Broken Link Checker.
>
> **[1:31](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=91)** It is from Atomseo and as you see here in the screenshots, they're flying by, it shows up as a panel on the right side of your Chrome window.
>
> **[1:43](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=103)** And you can run a link checker right there inside of your webpage and it will tell you where your broken links are located.
>
> **[1:51](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=111)** This particular browser extension is associated with Atomseo and this is yet another commercial link checker.
>
> **[2:00](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=120)** It has pricing associated with it and I presume that you're going to have to subscribe to the service to adequately leverage your browser extension in order to make this work.
>
> **[2:11](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=131)** Finally, there is a link checker here that's available through the W3C and is totally free.
>
> **[2:17](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=137)** And this is at validator.[w3.org/checklink](https://w3.org/checklink).
>
> **[2:22](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=142)** If you go to that website, you can enter your URL of your webpage here and it will run a report for you.
>
> **[2:28](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=148)** So I am doing a check of the Harvard website at [harvard.edu](https://harvard.edu).
>
> **[2:33](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=153)** I tried going to [[LinkedIn]] and running a check with it.
>
> **[2:37](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=157)** However, it has some settings that do not permit a link checker robot to take a look at it.
>
> **[2:44](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=164)** That's a thing called robots.txt, I'm going to tell you more about that in a few videos, but for now let's look and see what this report looks like.
>
> **[2:54](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=174)** So I ran the full link check before I started talking to you about this page.
>
> **[3:00](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=180)** As you see here it actually ran in 108.82 seconds and the checks that it's doing is it simply checking a link.
>
> **[3:08](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=188)** In this case, this is going to this particular location about-Harvard/directories and it tests it and make sure that it actually is going to load.
>
> **[3:18](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=198)** That's pretty much all it does.
>
> **[3:20](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=200)** And so once that is done it puts everything in the format of these results which are a little easier to read than that raw output.
>
> **[3:28](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=208)** And this will tell us that there were four sort of occurrences.
>
> **[3:32](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=212)** They call them occurrences because they're not necessarily errors and maybe exactly the behavior that you want.
>
> **[3:38](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=218)** So first of all, it tells us that there were three occurrences where the link was not checked to robots-exclusion rules.
>
> **[3:45](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=225)** This has to do with the configuration of something called robots.txt.
>
> **[3:49](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=229)** Again, I'll talk about that in a few videos and describe what that is and how it works.
>
> **[3:54](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=234)** And it also says here that we have one occurrence of maybe a malformed URL that can't be parsed by the server.
>
> **[4:02](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=242)** What does that mean?
>
> **[4:03](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=243)** It just means that maybe somebody wrote an error in their link and they should double check that.
>
> **[4:08](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=248)** So then it gives you the details on those.
>
> **[4:11](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=251)** These are the three sites that have the exclusionary rules on them, including our Harvard X website.
>
> **[4:17](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=257)** Some link out to LinkedIn and a link out to [[Facebook]].
>
> **[4:21](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=261)** And then the Twitter link attempted to redirect from a non-secure link.
>
> **[4:26](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=266)** See that HTTP?
>
> **[4:28](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=268)** Redirecting to HTTPS, but it is generating some kind of error.
>
> **[4:33](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=273)** So you should check that probably manually.
>
> **[4:36](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=276)** I bet you'll find that this works fine.
>
> **[4:39](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=279)** It's just the link checker is doing something bad for it.
>
> **[4:43](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=283)** Then this is going to give us a full list of redirects that the link checker encountered on the Harvard website.
>
> **[4:50](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=290)** So as you'll see here, all of these pages are redirecting from the non-secure page, redirecting to the secure page.
>
> **[4:59](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=299)** In most web hosting environments you can sign up for your web hosting.
>
> **[5:03](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=303)** You can upload your whole website to it.
>
> **[5:06](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=306)** Turn on a secure certificate and there's a box you check inside of your web host that just says redirect any non-secure links to the secure ones.
>
> **[5:15](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=315)** It's really very easy to set up.
>
> **[5:18](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=318)** It's a lot harder to go back through your website and edit all of your links so that they point to the secure link by default.
>
> **[5:25](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=325)** So that's likely what went on here and that is what's going on, is that it's telling us that these are permanent redirects from the non-secure to the secure site for all of these links on the Harvard page.
>
> **[5:36](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=336)** And that goes on for quite some time here.
>
> **[5:39](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=339)** So that is what's happening here with all of these.
>
> **[5:42](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=342)** It's just more of an informational kind of thing.
>
> **[5:45](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=345)** Not necessarily an error.
>
> **[5:47](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=347)** Finally, down here at the bottom it tells us that it found 14 anchors.
>
> **[5:51](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=351)** Remember anchors from chapter one, we talked about how to code those.
>
> **[5:55](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=355)** These were navigation within the page.
>
> **[5:57](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=357)** It would skip you down or skip you up the page.
>
> **[5:59](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=359)** And it has determined that all of those anchors are working correctly.
>
> **[6:03](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=363)** So this is a fairly typical link report that you can expect.
>
> **[6:07](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=367)** The commercial services I'm sure provide something nicer.
>
> **[6:11](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=371)** They might provide extra levels of service.
>
> **[6:13](https://www.linkedin.com/learning/html-and-css-linking/checking-sites-for-link-rot-and-broken-links?u=76281980&t=373)** But this is a nice free option here at the W3C that gives you the basic information about whether your links are working.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Facebook]] (1)
> **Env Vars:** w3c (2), url (2), http (1), https (1)
> **Definitions:** is a  (4), is called (1), means that (1)
> **CLI Commands:** find (2), make (2)
> **File Paths:** robots.txt (2)
> **URLs:** [w3.org](https://w3.org) (1), [harvard.edu](https://harvard.edu) (1)
> **Documentation:** w3c (2)
> **Versions:** 108.82 (1)

#### [Redirecting links within a webpage](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=1)** - Narrator] One of the easiest ways, but not necessarily the best way to redirect one page to another is via the so-called meta redirect tag.
>
> **[0:10](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=10)** The name is something of a misnomer as it's a meta tag with a refresh attribute, technically speaking.
>
> **[0:16](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=16)** The meta redirect tag usually does one of two things.
>
> **[0:19](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=19)** Either it can cause your page to refresh periodically, say you're running a live event and you want the page updated with the latest information, and so you could leverage the meta refresh to do that for you.
>
> **[0:32](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=32)** Or it can be used to redirect a visitor from that particular page to another page automatically.
>
> **[0:39](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=39)** The second option is more useful to us here.
>
> **[0:42](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=42)** And I talk more about the meta redirect tag as well as other meta-tags and link tags, in my course, [[[[HTML]]- [[Metadata]] in the Head]].
>
> **[0:51](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=51)** I say that this is not necessarily the best way to do this because you have to create these individual pages, you have to code them with the meta refresh.
>
> **[1:00](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=60)** You're going to land on a page, then you're immediately going to get redirected to another one.
>
> **[1:05](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=65)** And there's just better ways of dealing with redirecting people from one page to another.
>
> **[1:10](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=70)** But this methodology can be helpful if you have no other way of accessing your server in particular, to use some of the other link redirection methods, that I'll show you in some of these later videos.
>
> **[1:24](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=84)** So let's say we're going to work here on my links page, and I'm going to redirect this from here to the [[LinkedIn]] website.
>
> **[1:32](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=92)** And so this is links.HTML, inside of folder 0302 in the exercise files folder.
>
> **[1:41](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=101)** And I like to group my meta-tags together in the head of my document.
>
> **[1:45](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=105)** So I'm just going to add this here, but this line can go anywhere in the head of your document.
>
> **[1:51](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=111)** So it starts with the meta and then HTTP-equiv, equals, and the value is refresh.
>
> **[2:01](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=121)** And the content will be two parameters here required in order to make this work.
>
> **[2:08](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=128)** One is a number, let's just say three for the moment, and the other is a URL in this format.
>
> **[2:17](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=137)** URL equals, https, colon, slash, slash, www.[linkedin.com](https://linkedin.com) and then a quote, and then we can close our tab.
>
> **[2:31](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=151)** So the two parameters there, the three is a number in seconds.
>
> **[2:36](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=156)** So how many seconds would you like this page to display before it redirects?
>
> **[2:41](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=161)** And then of course the second part is where would you like this to go?
>
> **[2:44](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=164)** So let's save this page and we'll display it in our web browser.
>
> **[2:51](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=171)** Here's my basic link page, it'll give us three seconds and then boom, it'll redirect us to the LinkedIn website.
>
> **[2:58](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=178)** Now you're probably wondering, can you just go to the LinkedIn website directly without ever having to view this link page?
>
> **[3:04](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=184)** Yes, absolutely, change the three in this case to a zero, and if you were to do that and then open this inside of your web browser you might see that link page briefly as we just did, or you might not even see it.
>
> **[3:19](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=199)** Particularly if it's on the server, it might not even have a chance to load before it redirects.
>
> **[3:24](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=204)** But our HTML there is pretty lean.
>
> **[3:27](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=207)** We don't have a lot of extra stuff.
>
> **[3:28](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=208)** So you did see a flash of it just before we redirected here to the LinkedIn website.
>
> **[3:34](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=214)** Once again, just because the meta refresh tag is an easy way to redirect your webpage, it doesn't mean that it's the best way.
>
> **[3:43](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=223)** A better way to redirect your links is on the server, rather than here on the client.
>
> **[3:47](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-within-a-webpage?u=76281980&t=227)** And I'll discuss how to do a server redirect next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (5), [[HTML]] (3), [[Metadata]] (1)
> **Env Vars:** html (3), url (2), http (1)
> **Definitions:** is a  (3), is an  (1)
> **File Paths:** links.html (1)
> **CLI Commands:** make (1)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)

#### [Redirecting links on the server](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=0)** - [Narrator] When you redesign a website, it's common for all of your links to change.
>
> **[0:04](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=4)** All of the people who bookmarked your site all over the web, or the other sites that currently linked to you might have their links break, resulting in a 404 "Page not found" errors, it's a headache for everyone.
>
> **[0:18](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=18)** Fortunately, there are ways to set up link redirects on the server, most commonly used is the 301 redirect or the permanent redirect.
>
> **[0:27](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=27)** There are many other types of redirects on the servers, like 302, 303, 307 and 308 redirects, but let's not get too geeky as these other types of redirects have very specific use cases.
>
> **[0:40](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=40)** Generally speaking a 301 redirect is the one that you want.
>
> **[0:45](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=45)** In any case the goal is to redirect the old URL to the new URL, this can be done on a page by page basis, or it can be done on mass with a type of code called a regular expression.
>
> **[0:59](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=59)** Redirects may be configured in the .htaccess file of the website or in the [[Server Configuration]] files.
>
> **[1:06](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=66)** If you're working in a [[Content Management]] system like [[WordPress]] or Joomla, you may find redirect features inside of that CMS that will write this file for you.
>
> **[1:16](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=76)** If you do wind up writing redirects, there are tools online that can help, let me show you one of those.
>
> **[1:24](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=84)** When it comes time to write your htaccess file the easiest thing to do is just to [[Google]] for it and find some sort of help for writing these htaccess files.
>
> **[1:34](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=94)** They tend to be kind a geeky in nature there's a lot of details that are easy to forget and they can be kind of hard to debug.
>
> **[1:41](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=101)** So I like to find a tool like this one that will allow you to enter some pieces of information and it will write the code for you.
>
> **[1:49](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=109)** So this particular website, if you scroll on down here to the bottom, it says, select your Web redirect scenario to generate your htaccess rules, that's exactly what we want to do.
>
> **[2:01](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=121)** There's a bunch of scenarios here, the one that I'm specifically talking about in this video is redirecting a page to another page on your website, but you are welcome to explore these other scenarios here.
>
> **[2:12](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=132)** Let's click on redirect page to page, and if you scroll on down here, it's going to ask you to enter the old page to your new page.
>
> **[2:22](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=142)** I just redesigned my website so let's say that I am going from about .[[PHP]].
>
> **[2:29](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=149)** Okay So you start with the slash about .PHP, just like that.
>
> **[2:34](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=154)** And this would have been originally a URL that looked like this HTTPS//WWW.[jenkramer.org](https://jenkramer.org).
>
> **[2:43](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=163)** So all I've done here, is just take off this first part of the URL like that, just get rid of it, so you just have whatever comes after that.
>
> **[2:53](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=173)** And in this could be quite longer, could be a lot of slashes that could be a really long kind of thing.
>
> **[2:58](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=178)** So that's start of it, where am I going to?
>
> **[3:01](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=181)** Well, in my case, I'm going to go to a pound or hashtag about in my new website.
>
> **[3:08](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=188)** And so now this is going to generate for me my htaccess file.
>
> **[3:14](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=194)** I can just copy this little bit of code right here, drop it into the htaccess file, which is on my server, and then that redirect will happen automatically.
>
> **[3:23](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=203)** So if people are looking for me on about pages elsewhere on the internet, they will find me at my new location.
>
> **[3:31](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=211)** This is just one of many tools that are out there on the internet, the important thing is that you're redirecting these old links to new ones.
>
> **[3:38](https://www.linkedin.com/learning/html-and-css-linking/redirecting-links-on-the-server?u=76281980&t=218)** If you don't like this tool, there's a whole bunch of other choices that are out there, just run that through Google and ask for help writing your htaccess files for 301 redirects and you'll find lots of options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[PHP]] (2), [[Server Configuration]] (1), [[Content Management]] (1), [[WordPress]] (1)
> **Env Vars:** url (4), php (2), cms (1), https (1), www (1)
> **CLI Commands:** find (5), php (2)
> **UI Navigation:** click on (1), go to (1)
> **URLs:** [jenkramer.org](https://jenkramer.org) (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [Content delivery networks](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=0)** - [Instructor] Certain resources on your website tend to be used over and over.
>
> **[0:05](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=5)** These include videos, images, [[JavaScript]] files, and more.
>
> **[0:09](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=9)** The larger those resources are, the longer they take to download and use.
>
> **[0:13](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=13)** Furthermore, the farther away geographically someone is from the physical server location, the longer these resources take to load.
>
> **[0:23](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=23)** If you have a regular or basic web hosting service, your website is located in one geographic place.
>
> **[0:30](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=30)** That may be absolutely fine if you don't have a ton of traffic in general, or if your website is for a local audience.
>
> **[0:36](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=36)** There's absolutely nothing wrong with old-school hosting for the right kind of website.
>
> **[0:41](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=41)** It's been around for 30 years for a reason.
>
> **[0:44](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=44)** And let's face it.
>
> **[0:44](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=44)** The vast majority of websites for small businesses, consultants, Girl Scout troops, bowling leagues, and more are just fine on this type of hosting.
>
> **[0:56](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=56)** However, if you have an international audience or if you're serving up lots of images, videos, CSS, JavaScript, and more, and if you have a ton of traffic to your website, your more geographically distant audiences may not get the best experience on your site as they wait for resources to download.
>
> **[1:17](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=77)** Enter the content delivery network or CDN.
>
> **[1:21](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=81)** This service is designed to help those heavily, frequently downloaded files to be localized geographically in space.
>
> **[1:29](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=89)** Using a CDN service means that I can pull those resources from a server closer to me in geography with the fastest connection to those services.
>
> **[1:38](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=98)** CDNs are very common across larger websites and popular resources.
>
> **[1:44](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=104)** As an example, you might've encountered the Bootstrap responsive design framework.
>
> **[1:50](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=110)** If you're using the default configuration for Bootstrap with the default pre-compiled CSS and JavaScript files, these are accessible via a CDN.
>
> **[2:01](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=121)** How do we know?
>
> **[2:03](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=123)** It's right there in the link for the resource.
>
> **[2:07](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=127)** Chances are, if you're a freelancer building websites for local business and nonprofits, you won't need to use a CDN for the sites that you built.
>
> **[2:16](https://www.linkedin.com/learning/html-and-css-linking/content-delivery-networks?u=76281980&t=136)** However, you only encounter CDNs as part of your development environment, and of course, on some of the biggest and most popular sites that you visit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3)
> **Env Vars:** cdn (4), css (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Controlling which links search engines follow](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=0)** - [Instructor] By default, any search engine can visit your site, index your pages and include your site in search results.
>
> **[0:07](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=7)** There's nothing special that you need to do to make this happen.
>
> **[0:10](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=10)** It will eventually happen if you wait for a while and you can read the latest instructions for [[Google]] and other search engines to speed up this process.
>
> **[0:22](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=22)** However, occasionally you may want to prevent search engines from visiting all or part of your website.
>
> **[0:29](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=29)** There is a way to tell search engine robots called, spiders, from visiting your website and indexing your pages.
>
> **[0:36](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=36)** This method uses something called the robots.txt file on your web server and it assumes that the spider will pay attention to this file in order for this to work.
>
> **[0:47](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=47)** There is no way to ensure that your pages will not show up in search results, if the page is open to the public, not behind a login or some other exclusionary device, but this method will work with most of the major search engines.
>
> **[1:04](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=64)** It's always helpful to look at the latest information for Google.
>
> **[1:07](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=67)** Because Google is so big and controls most of the searches on the internet, most other search engines will adopt Google's methodologies rather than developing their own.
>
> **[1:18](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=78)** This is the developer documentation for how to create a robots.txt file for Google and its search.
>
> **[1:25](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=85)** And this information will cover how we can block a specific robot or how to block all of the robots.
>
> **[1:33](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=93)** And we can take a quick peek at this documentation to see how this works.
>
> **[1:38](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=98)** So as you see here in the robots.txt file instructions that are here, it starts off describing two simple rules.
>
> **[1:48](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=108)** And this is the way that a robots.txt file has to be configured.
>
> **[1:52](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=112)** Again, this is something that you'll likely just Google for, you'll copy the code, you'll drop it in the page, you'll make whatever changes you need.
>
> **[1:59](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=119)** And this is not something that you should probably memorize how to do, because you're just not going to do it that often.
>
> **[2:05](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=125)** So here in this particular robots.txt file, what we have going on here is two groups.
>
> **[2:12](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=132)** So in group one, we're specifically targeting the Googlebot, that's the name of the search engine spider for Google.
>
> **[2:20](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=140)** And we're telling it to disallow, in other words, do not visit anything inside of the directory called nogooglebot.
>
> **[2:26](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=146)** So that's where that little bit of code says, hey, Googlebot don't visit this particular directory.
>
> **[2:31](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=151)** However, the spider for say Bing or for Yahoo could go and visit that nogooglebot content, because we haven't specifically excluded them.
>
> **[2:42](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=162)** In the second case, in group two, this is something of a default setting for any user agent.
>
> **[2:48](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=168)** So for any of those search engine spiders they can allow, in other words they can view the entire website represented here by a slash.
>
> **[2:57](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=177)** And then finally, the last thing that's listed here is that we have a sitemap link to a sitemap.xml.
>
> **[3:04](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=184)** This is a way by providing this information that you can ensure that Google will go through and crawl all of your pages because it's going to follow this particular sitemap file.
>
> **[3:16](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=196)** And you can read about how to create one of those by clicking on this link and taking a look at how to create this XML file.
>
> **[3:24](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=204)** If you scroll most of the way down the page, you'll find a reference here that will allow you to put together a robots.txt file based on a whole bunch of different rules.
>
> **[3:35](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=215)** You just need to think about what exactly it is that you want to accomplish and then you can find the exact rule that is going to help you write this robots.txt file in an effective way.
>
> **[3:47](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=227)** Are you trying to disable one single webpage from being viewed by the Googlebot?
>
> **[3:53](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=233)** Is it an image?
>
> **[3:54](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=234)** Are you trying to prevent specific crawlers from visiting your website?
>
> **[4:00](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=240)** Earlier in the course, for example, I mentioned that the W3C Link Checker was not able to crawl the [[LinkedIn]] website.
>
> **[4:09](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=249)** It may have in its robots.txt file a specific exclusion for that particular link checker and it would be done using this type of code here.
>
> **[4:20](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=260)** So that's what a robots.txt file is.
>
> **[4:24](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=264)** It is a way of spelling out exactly which user agents in other words, the various types of robots that are out there on the internet, what are they allowed to see and more commonly what are they not allowed to see.
>
> **[4:39](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=279)** So you can do that through either allowing them or disallowing them.
>
> **[4:43](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=283)** Generally speaking, since websites are public by default and anybody can see anything, usually the disallow is the more common way that these robots.txt files are written.
>
> **[4:56](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=296)** It's worth reminding you that not all services need to use this old school coding methodology to exclude webpages, it looks really intimidating and it looks hard and annoying and that's absolutely true.
>
> **[5:10](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=310)** It's very, very annoying.
>
> **[5:11](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=311)** So services like Wix and Blogger and [[Drupal]] and many others will give you an interface for blocking webpages from visitation, rather than having to work with this type of file and this type of code.
>
> **[5:24](https://www.linkedin.com/learning/html-and-css-linking/controlling-which-links-search-engines-follow?u=76281980&t=324)** Before you dive into making these edits to your robots.txt file, you may want to check your application to see if there's an easier method of managing what pages are viewable by search engines first.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (8), [[LinkedIn]] (1), [[Drupal]] (1)
> **File Paths:** robots.txt (11), sitemap.xml (1)
> **Definitions:** is a  (3), in other words (3)
> **CLI Commands:** make (2), find (2)
> **Env Vars:** xml (1), w3c (1)
> **Cross-References:** earlier in (1)
> **Documentation:** w3c (1)
> **Analogies:** for example (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/html-and-css-linking/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-and-css-linking/next-steps?u=76281980&t=0)** - [Jen] Hey everybody.
>
> **[0:01](https://www.linkedin.com/learning/html-and-css-linking/next-steps?u=76281980&t=1)** It's Jen Kramer.
>
> **[0:02](https://www.linkedin.com/learning/html-and-css-linking/next-steps?u=76281980&t=2)** Thank you so much for watching my course on [[HTML]] and CSS and Links.
>
> **[0:08](https://www.linkedin.com/learning/html-and-css-linking/next-steps?u=76281980&t=8)** I hope you learned something new along the way.
>
> **[0:10](https://www.linkedin.com/learning/html-and-css-linking/next-steps?u=76281980&t=10)** If you're interested in learning more with me, there's a bunch of other courses here in the library that might be of interest to you.
>
> **[0:16](https://www.linkedin.com/learning/html-and-css-linking/next-steps?u=76281980&t=16)** First of all, [[HTML- [[Metadata]] in the Head]] talks a great deal about the meta refresh tag that I discussed in the course as well as some of the Link tags that I talked about as well.
>
> **[0:27](https://www.linkedin.com/learning/html-and-css-linking/next-steps?u=76281980&t=27)** And you can learn more details here.
>
> **[0:30](https://www.linkedin.com/learning/html-and-css-linking/next-steps?u=76281980&t=30)** The course, [[Crafting Meaningful HTML]] is all about how you can create HTML that is indeed meaningful in its markup and conveys that meaning to the user of the website, not just a whole bunch of HTML that means nothing at all.
>
> **[0:49](https://www.linkedin.com/learning/html-and-css-linking/next-steps?u=76281980&t=49)** And so this is a great course that is a great way to get an insight into that type of work.
>
> **[0:55](https://www.linkedin.com/learning/html-and-css-linking/next-steps?u=76281980&t=55)** And then there's also CSS Selectors.
>
> **[0:58](https://www.linkedin.com/learning/html-and-css-linking/next-steps?u=76281980&t=58)** This will talk a great deal about the various kinds of CSS selectors that are out there and the various types of Link states that are available, which we covered somewhat in this course.
>
> **[1:08](https://www.linkedin.com/learning/html-and-css-linking/next-steps?u=76281980&t=68)** And there's more to know from the selectors course.
>
> **[1:12](https://www.linkedin.com/learning/html-and-css-linking/next-steps?u=76281980&t=72)** Finally, keep an eye out for my new course on nav bars which should be coming to the library sometime soon which will cover all of the details that are needed for creating horizontal and vertical nav bars.
>
> **[1:28](https://www.linkedin.com/learning/html-and-css-linking/next-steps?u=76281980&t=88)** Thanks again so much for watching and I hope to see you soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5), [[Metadata]] (1)
> **Env Vars:** html (5), css (3)
> **Definitions:** is a  (2)
> **Cross-References:** we covered (1)
> **Speakers:** - [jen] (1)


## Instructor

- [[Jen Kramer]]

## Resources

- Exercise files available

## Skills Covered

- HTML
- Cascading Style Sheets (CSS)

## Path Context

### In [[Advance Your Skills in HTML]]
← [[Crafting Meaningful HTML]] | **3 of 11** | [[HTML- Images and Figures]] →

## Appears In

- [[Advance Your Skills in HTML]]

## Related Courses

_Courses sharing skills:_

- [[Building Great Forms with HTML and CSS]] — HTML, Cascading Style Sheets (CSS)
- [[HTML & CSS- Creating Forms]] — HTML, Cascading Style Sheets (CSS)
- [[Making Sense of the CSS Box Model]] — Cascading Style Sheets (CSS)
- [[React- Building Styles with CSS Modules]] — Cascading Style Sheets (CSS)
- [[Cutting-Edge CSS]] — Cascading Style Sheets (CSS)

---

[↑ Back to top](#)