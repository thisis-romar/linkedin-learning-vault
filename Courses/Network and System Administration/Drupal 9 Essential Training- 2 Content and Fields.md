---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: drupal-9-essential-training-2-content-and-fields
url: "https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields"
duration_minutes: 60
duration: 1h
level: Beginner
updated: 3/10/2021
learners: 34057
skills:
  - Drupal
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGJ50LZ3TlHVA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1614870855109?e=2147483647&amp;v=beta&amp;t=w4aVmMl1heWJrHGBtV4B-T6x8KjQQ6Cl65fVe6phuoY"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Build Your Drupal Skills]]'
prev_courses:
  - '[[Drupal 9 Essential Training 1 Introduction And Administration]]'
next_courses:
  - '[[Drupal 9 Essential Training- 3 Taxonomy, Media, and Modules]]'
path_nav: '[{"path":"Build Your Drupal Skills","position":2,"total":6,"prev":"Drupal 9 Essential Training 1 Introduction And Administration","next":"Drupal 9 Essential Training- 3 Taxonomy, Media, and Modules"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - topic/web-development
  - skill/drupal
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Drupal%209%20Essential%20Training-%202%20Content%20and%20Fields.md)

![Drupal 9 Essential Training: 2 Content and Fields](https://media.licdn.com/dms/image/v2/C4E0DAQGJ50LZ3TlHVA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1614870855109?e=2147483647&amp;v=beta&amp;t=w4aVmMl1heWJrHGBtV4B-T6x8KjQQ6Cl65fVe6phuoY)

# Drupal 9 Essential Training: 2 Content and Fields

> While content and fields don’t sound like the most exciting part of a website, these are absolutely core to the entire understanding of how to use a content management system like Drupal. In this course, Rod Martin gives an introduction to the idea of structured content and content types in Drupal. Rod demonstrates the importance of categorization by creating a number of different types, then adds

> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields) | 1h | Beginner | 34K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Introduction to the course](#introduction-to-the-course)
- [**1. Content Explained**](#1-content-explained) (8 videos)
  - [Content explained](#content-explained)
  - [Adding an article](#adding-an-article)
  - [Adding a basic page](#adding-a-basic-page)
  - [Editing a node](#editing-a-node)
  - [Using the WYSIWYG editor](#using-the-wysiwyg-editor)
  - [Configuring text formats](#configuring-text-formats)
  - [Planning your content types](#planning-your-content-types)
  - [Creating content types](#creating-content-types)
- [**2. Fields Explained**](#2-fields-explained) (6 videos)
  - [Fields explained: Introduction and definitions](#fields-explained-introduction-and-definitions)
  - [Adding fields to the business content type](#adding-fields-to-the-business-content-type)
  - [Adding fields to the locations content type](#adding-fields-to-the-locations-content-type)
  - [Adding fields to the events content type](#adding-fields-to-the-events-content-type)
  - [Modifying the article content type](#modifying-the-article-content-type)
  - [Testing your content types](#testing-your-content-types)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to the course](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/introduction-to-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/introduction-to-the-course?u=76281980&t=0)** - Hi, and welcome to [[Drupal]] 9 Essential Training. My name's Rod Martin. I'm your instructor for this entire series. In this course, we're going to cover content and fields. Now, that doesn't sound like a lot, but in Drupal, it's absolutely core to your entire website. We're going to introduce you to the idea of structured content and content types. We'll create a number of content types and then, add fields that will hold the data for that content type. We'll introduce you to Drupal's Wysiwyg editor and text formats, and we'll add content to each of the content types that we build. All right, so let's dive into content and fields.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Drupal]] (3)
> **Speakers:** - hi (1)
> **Non-Speech:** (upbeat music) (1)


### 1. Content Explained

[↑ Back to Table of Contents](#table-of-contents)

#### [Content explained](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=3)** - Well as you may have realized [[Drupal]] is a [[Content Management]] system. (laughs) I've said that a few times now. And with any content management system, the first thing, the most important thing is content. So in this section, I want to talk about Content Explained. Just as a reminder, here's where we are in our site building workflow. Content comes first, and this is Content Explained. All right, well, you may remember from the introduction as well that I said Drupal uses a structured data approach. So what do I mean by that? Well, other [[Content Management Systems (CMS)|content management systems]] just give you a title and a body like you see on the screen. And what they force you to do is put a title in and then push everything into the body, which is great, if you never need it to do anything else with it. So I have an old client of mine from many years ago that uses another CMS where that's exactly what they did. They have a series of several thousand podcasts. And so they embedded the MP3 file into the body along with the transcript into the body, along with the publication date into the body, and actually even some key words right into the body. Well, the problem with that was several years after they started doing this, they said they wanted to create an email newsletter automatically from the daily podcast. Well, the problem is everything was in one field in the database.
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=99)** So I had to write a several 100 line page P Scrip to pass out all of the various pieces out of the one field and split it up, so it could be formatted into a nice email. Wow, what a headache. The only saving grace was that every single podcast had been formatted pretty much the same way. If that had been Drupal, it would have taken almost no time at all. And [[Unstructured Data]] approach is fine right up until you need, well, you need to display the data differently or you need to organize it differently or you need to filter pages and blocks differently. Well, as soon as that happens you realize you can't. And so Drupal from the very beginning takes the approach that all of the information is going to be housed in individual fields so that those fields can be used to organize, display, filter, and sort pages and blocks any way you need. So this is an illustration I've used many times. This is a screenshot from the best movie ever made, from the site [IMDb.com](https://IMDb.com). Now [IMDb.com](https://IMDb.com) is not a Drupal site, it could be, but it is a terrific way to illustrate my point. So what you're seeing on the screen is all of the information from "The Princess Bride" node "The Princess Bride" the title, 1987 the release year and then we've got a whole bunch of information here, parental rating, runtime, movie genre, release date.
>
> **[3:16](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=196)** We've got a movie poster, a video probably the trailer. We've got a little bit of the body IE the film description. And then we've got some of the people that are in the movie and those are links of course, to the actors in the movie. So here again, this is Robin Wright. This is another set of categorization in this case it's what she's good at her bio and then her birth date. Well, here's the problem. Let's say we jam all of this into the body and make it pretty with some really advanced [[HTML]] and CSS. And your boss comes along and says now I need a landing page on the new website that has all of the movies from 1987 that were rated PG in the adventure category. And you go, "Oh, well, we never talked about that. "That's going to take me hours "because I have to scroll through every movie "find the movies and create the landing page from scratch "no matter what CMS I'm using." But if you're using Drupal, well, you say, "Yep, boss that's going to take probably about an hour maybe two." And 10 minutes later you're done because if you're using a structured data approach this information is in its own field. This information is in its own field. This information is in its own field.
>
> **[4:49](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=289)** So is this, so is this, so is this, so is this so are all of these in their own fields. Now that's a movie content type but an actor is different, right? An actor doesn't have a parental rating although probably some of them should, but they do have instead of movies genres, they've got well things they do well. Instead of a movie poster you've got a bio poster and a video, and a body and a birth date instead of a release date. And so you can't have one content type that matches all of the different kinds of content you might have on your site. In this case, we're going to have at least two an actor content type that is connected via an entity reference field to my movie content type. In this case, "The Princess Bride". Now you just can't do this with the other content management systems out there at least not out of the box, but Drupal was built this way and it has an inherent advantage because of it. So if your content editors are used to shoving everything in the body field and making it pretty with some HTML and CSS, now that you're moving to Drupal this is something you're going to stop doing in order to take advantage of all of the amazing things. And I really mean that all the amazing things Drupal has to offer. So custom content types in Drupal structure the data entered
>
> **[6:26](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=386)** and control the display down to the smallest field. You need new content types when, the information that you're trying to send out is different, when unique fields are needed and when display needs are different. And you're going to see that all through the [[Representational State Transfer (REST)|rest]] of this course and how that works out. When you're planning your content types you want to plan them so that your content editors or creators feel comfortable entering all of the data. You want to plan them so they hold the data well, and that visitors to your site will be able to find the information filtered and sorted the way they need. All right, so custom content types, you shouldn't do Drupal without it, and I would even suggest you can't do Drupal without it. And so that's the focus of this section Content Explained.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Drupal]] (12), [[Content Management]] (2), [[Content Management Systems (CMS)|Content management systems]] (2), [[HTML]] (2), [[Unstructured Data]] (1)
> **Env Vars:** cms (2), html (2), css (2), mp3 (1)
> **CLI Commands:** find (2), node (1), make (1)
> **Definitions:** is a  (3), is an  (1)
> **URLs:** [imdb.com](https://imdb.com) (2)
> **Speakers:** - well (1)

#### [Adding an article](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=3)** - [Instructor] All right, now that we understand a little bit more about content types and structured data, let's go ahead and add another article. We'll make this one, the Welcome to Drupalville article. Hover over Content, Add content, and click on Article. Go ahead and put Welcome to Drupalville in for the title. Now, for the bulk of this course we're going to use Lorem Ipsum text in a body field like this. So you've got some options. [Lipsom.com](https://Lipsom.com), [baconipsum.com](https://baconipsum.com). There's even a [vegetarianipsum.com](https://vegetarianipsum.com). (chuckles) Whatever one you want to use go ahead and grab some lorem ipsum text. You might as well leave that tab open so you can come back and get some more, or copy and paste some text into a text file that you can just copy and paste back into [[Drupal]]. I'm going to paste that in. I'm going to add a couple of tags here. Welcome and Drupalville. Again, tags here are for categories. We'll talk more about that shortly. And go ahead and add an image. You can choose any image you want. I have a picture of my hometown from the air so I'm going to use that. But I'm going to call it Drupalville from the air. Again, alternate text is required. Now, over here on the right-hand side you're going to see the publication settings. We have a revision log message. I encourage you to always add log messages to your versions of your notes. Menu settings.
>
> **[1:36](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=96)** We're not going to provide a menu link. Comments settings. By default article allow for comments. We'll leave that on for now. URL alias. Again, Drupal will always do that for you. I encourage you to let Drupal do its thing. Authoring information. And then finally, promotion options. Articles are promoted to the front page by default. We'll leave that the way it is. So again, note here in the article content type we have a title, body, tags, image and it's going to be promoted to the front page by default. Go ahead and click Save. And here's your Welcome to Drupalville article. This is a picture of my hometown from the air and I've got my text. The text wraps around the image in this case because that's what this particular theme will do. You'll note, I have a View tab, an Edit tab, Delete, and Revisions tab. When I'm an anonymous user or someone just visiting the site, of course these tabs are not visible. If I click on the Home button, you'll note that my two article nodes are listed on the homepage by publication date order in what's called a teaser display. The teaser display for the article content type includes the title, the submission information, a smaller version of the image which is created automatically. And we'll talk more about that. An production to the text, the tags, a read more,
>
> **[3:08](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=188)** and add new comment link. Every time you add a new node of the article content type, if you don't uncheck that promote to the front page, well then these nodes will be on your front page until of course you do something different with your front page. Clicking on either of these tags is going to take me to a taxonomy term page. I.e. a group of nodes that have been tagged with that particular [[Microsoft Word|word]]. In this case, welcome. Any node that was sharing the welcome tag would appear here in a similar way it appears on the homepage. So that's the article content type. It has specific fields and a specific purpose on your site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Drupal]] (3), [[Microsoft Word|Word]] (1)
> **CLI Commands:** node (2), make (1)
> **URLs:** [lipsom.com](https://lipsom.com) (1), [baconipsum.com](https://baconipsum.com) (1), [vegetarianipsum.com](https://vegetarianipsum.com) (1)
> **UI Navigation:** click on (2)
> **Analogies:** picture (2)
> **Env Vars:** url (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)

#### [Adding a basic page](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=3)** - [Instructor] As I mentioned, there are two content types that come with [[Drupal]] out of the box. If you hover over Content and Add Content, you'll see that the article content type is one and we just completed an article called, "Welcome to Drupalville." Let's go ahead and create a basic page, and we'll note the differences between the two content types. Go ahead and click Basic Page and you'll see that there's no image field, there are no tags, and on the publication settings, they are not promoted to the front page. So unless you add a basic page to a menu or create a view to display it in some other way, well then basic pages will never be found. The typical use for a basic page content type is a static page that doesn't change very much and doesn't require any other fields to hold any other structured data. So basically, yes, you're going to just put a title and then put everything into the body. So, a typical example of this might be an About Us page. So let's go ahead and put About Drupalville. Once again, paste your Lorem Ipsum text in, and in this case, let's go ahead and add this node to a menu. Go ahead and click Provide a Menu Link. You'll note that the title is taken from the title of the node. The parent item is main navigation. So this means it's going to show up in the main nav
>
> **[1:36](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=96)** and it has a weight of zero. Now weight is where something shows up in a list. A negative number floats to the top, a positive number sinks to the bottom. It's kind of like your golf score. If you want to win the PGA, well, you're going to have a negative score. In this case, we're going to leave it at zero because we're going to adjust that later. All right, go ahead and click Save. You'll see my About Drupalville node, which is of the basic page content type and I have a menu about Drupalville, of course in the wrong order, but we'll fix that in just a moment. So the basic page content type, a title, a body, and it doesn't show up anywhere unless you create a menu. It's a great for static pages that don't change very much, such as the About page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Drupal]] (1)
> **CLI Commands:** node (3)
> **Analogies:** kind of like (1), such as (1)
> **Env Vars:** pga (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Editing a node](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=3)** - [Instructor] Editing a node is really simple. Click on content and you're going to see the three nodes that we've created so far in our course. We have two nodes of the article content type and a node of the basic page content type. And you'll know that I'm using the [[Microsoft Word|word]] node and content type and identifying the different content types. This is the correct way to refer to these pages on a [[Drupal]] website. They're nodes of a particular content type. Bottom line, you can call them pages as well because they have content but there's so much more to a page in Drupal than just the content item. So again as I mentioned, it's simple to edit a node in Drupal. Go ahead on the "About Drupalville" node that we just created, click the edit link. It's going to bring you back to this very familiar window where now you're on the edit tab and you can make any changes you want such as adding a couple more paragraphs and more. And as I mentioned earlier, I'm going to encourage you each time you make a revision to a node that you add something to the log files and I'll show you why in just a moment. Added a couple of paragraphs, go ahead and put something in there. Added a couple of paragraphs to the node and click save. When you edit a node, it creates a new version. Go ahead and click on "About Drupalville" again and then click on revisions.
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=99)** You'll note that the original note is here and the new version of the node that I just created with my quick little note in there is the current revision. If I want to revert back to the original, well I just click revert and revert and now Drupal creates another new version of the node which is the same as the first version and it lets me know that it's a copy of that version. Once again, I can revert back to my changes simply by reverting the one that I changed originally. And now I have four versions. You'll want to make sure because of the way that versioning works that you do add in good notes inside of the note log. So clicking back on content again and go ahead and choose "Welcome to Drupalville". And the same thing applies. Edit. I can make changes, Drupal will create a new version of it for me and save all of those changes. So editing your node's really, really simple to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Drupal]] (5), [[Microsoft Word|Word]] (1)
> **CLI Commands:** node (11), make (4)
> **UI Navigation:** click on (3)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Using the WYSIWYG editor](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=3)** - [Instructor] In this video, I want to talk to you about the WYSIWYG Editor. Now, WYSIWYG stands for, what you see is what you get. And that's pretty true in [[Drupal]] 9. So I'm in my first Drupal Node, feel free to open that up and follow along. If you've used any kind of [[HTML]] editor before you're probably pretty familiar with the WYSIWYG Editor. Drupal uses CKEditor and has several different toolbars depending on the text format that you are using. Here in basic HTML, which is the default. You have the ability to bold, italicize create a link, unlink, unordered list, ordered list, block quote, insert a standalone image, change the format from paragraph to heading two or three or four or five. And of course view the source. The key thing to remember here with the basic HTML format is that you cannot embed advanced HTML. Drupal will strip it out. This is the kind of text format you want to use for your, say, junior content editors. We're going to cover text formats in an upcoming video. For now go ahead and select some text, make it bold, make some of the texts italic. You get the idea, you select the text and you click the button. To create a link I can highlight a [[Microsoft Word|word]] or a paragraph and click the create link button and I'll need to know the URL. You should never put the full domain link of another node in here, simply because if you are working on say a test server
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=98)** and then push it to production, the links will break. We're going to fix that in just a little bit with another module. All right, I'm going to just hit enter there and make an unordered list. It's as simple as that. Typically what I do is I paste all of the text in and then come back and format it. You can paste from Word in Drupal 9. That said, it's usually not a good idea because Word has all kinds of stuff in it. And if you try and paste a table or an image those things will definitely get stripped out. And hit enter again here and do an ordered list. You get the idea pretty simple to do. One of the good things about a WYSIWYG Editor is the ability kind of change up or divide up your node or content area with some headings. And again, this is really simple in Drupal 9, highlight the text you want to head, make a header, change normal to heading two or heading three. Heading two is just a little bit bigger than heading three. And again, I'm going to unbolt that but it's still going to be in nice large text. If I wanted to make another heading here I'm going to make it so it's in its own paragraph, highlight the text and change that to a heading three as well. If I look at the source you're going to see a heading three, a paragraph tag, a heading three,
>
> **[3:12](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=192)** there's my unordered list, a paragraph and the ordered list that I have. You can edit this in here if you know a little bit of HTML. But again you cannot just paste advanced HTML like tables, divs, when you are using the basic HTML text format. So the three options I have are basic, restricted and full HTML. Restricted is almost no HTML. If I change to full HTML, it's going to say, hey, changing this is going to permanently remove content that is not allowed in the text format. Save your changes. Now I have a little bit more in the toolbar. Strike through superscript, subscript, remove formatting. insert a horizontal line. Once again, still have my heading tags. I can click and observe the various HTML elements and of course again I can view the source. With full HTML turned on I can embed some advanced HTML, like [[JavaScript]], tables and classes to my tags and all kinds of things. So if you need to do any of that then you'll definitely want to make sure you are working in full HTML. Now here is the thing, if I switch back to basic HTML it is going to strip out any of that advanced HTML that I've added. That also means if you've used the advanced HTML text format and a junior editor who doesn't have access to that format edits your node at a later time and saves it.
>
> **[4:49](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=289)** Well, then all of your advanced HTML will be deleted as well. So this is something you are going to need to really think through, if you have multiple editors working on your site. All right, two more icons here that we haven't touched yet. Block quote is a simple function that does exactly what it sounds. This look and feel will change depending on the theme that you are using. And then finally insert image, which is going to be a stand alone image that you can't use anywhere else. You can align it, none, left, center or right and you can add a caption. And it's in the body field. So I can't actually do anything with it later. We'll talk more about that when we get to views. All right, I'm going to hit save. And here's my first Drupal Node. You'll notice there's the image field, the body field, there's the block quote that I added, there's that picture of the girl with her dog, there's the heading three and more. So the WYSIWYG Editor is really helpful and enables me to quickly add formatting and other elements to my nodes. Remember if you mess something up you always have [[Version Control]] to go back to a previous version of a node.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (18), [[Drupal]] (7), [[Microsoft Word|Word]] (3), [[JavaScript]] (1), [[Version Control]] (1)
> **Env Vars:** html (18), wysiwyg (5), url (1)
> **CLI Commands:** make (7), node (6)
> **UI Navigation:** select the (1), in the toolbar (1)
> **Definitions:** stands for (1), is a  (1)
> **Cross-References:** go back to (1)
> **Analogies:** picture (1)
> **Best Practices:** you should never (1)

#### [Configuring text formats](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=3)** - [Instructor] As I mentioned in the video on the WYSIWYG editor, [[Drupal]] offers three text formats out of the box, Basic [[HTML]], Restricted HTML, and Full HTML. Basic HTML gives you what it sounds like, basic HTML elements, like bold, italic, a link, unordered list, ordered list, et cetera. And as a reminder, full HTML gives you more of the options here as well as the ability to insert a table, insert a horizontal line, see the blocks that are being used in the node, and then of course add advanced HTML, like classes and more, to your nodes. Now, as a reminder, we talked about this during our discussion on structured data. You don't want to put everything in the body that should be in its own field. Enough said about that. All right, these text formats are editable, and you can have as many as you need, and they're governed by the Drupal permission system, which we're going to get into in a little while. So for instance, if you had a junior content editor or a summer intern, you might want to give them basic HTML, so all they can do is what's here in the toolbar. But for your advanced editors, you might want to give them full control and full access over all of the text formats that you've got. So head over to Configuration, Content Authoring, and Text Formats and Editors, please.
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=98)** And here are the three that we've highlighted. And then, of course, there's a fourth plain text one. Go ahead and click on Configure full HTML. Now, there's a lot in here. And at this point, only administrators can use full HTML, and that's why you could switch to it. There are more available buttons that you can just simply click, and drag, and drop,
>
> **[2:12](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=132)** and, of course, rearrange. You can add new groups, and, of course, you can add new functionality, like the Media Manager. I'm going to select Media, click and drag that icon, so now I can insert things from the Media Manager, not just upload default images. We're going to come back to this to add a special link icon to our toolbar. Scrolling down, with the full HTML editor, there is no limit to the HTML tags that you can add, so you'll need to be careful. Align images, captions, restrict images to this site. So again, that's not turned on. You'll need to select the Embed Media link here if indeed you want to make this Media icon work. And you'll note down here that you can restrict the media types that can be embedded in the body. Now, once again, we're going to be adding media fields to all of our content types, so this isn't as necessary, simply because that's where we'll be adding our media. But it's a great update to make. Click Save Configuration, and let's edit the basic HTML, and do the same thing with the Media icon. Click and drag to the Media block, scroll down, and embed media.
>
> **[3:46](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=226)** Now, you'll also see that this is going to limit the allowed HTML tags. That's what separates basic from full, and it's an important distinction to make. You absolutely want to restrict the HTML for junior editors. If you wanted to add other things that they could add in here, well, then you could add the HTML tags in here, and they would be able to add that HTML, say, in the view source, or if you added another button up here. So editing your text formats, even creating brand new ones, is done here through Configuration. And once you set this up, those new options will be available to your content editors. So if I click Content, Add Content, and let's say Basic Page, we won't save this, but now you'll notice that I'm in the basic HTML, and there's my media insert link, and I can insert any media that's on my site. Terrific.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (18), [[Drupal]] (2)
> **Env Vars:** html (18), wysiwyg (1)
> **UI Navigation:** in the toolbar (1), click on (1), switch to (1), select the (1), scroll down (1)
> **CLI Commands:** make (3), node (1)
> **Prerequisites:** you'll need (2), configure (1)
> **Cross-References:** we talked about (1)
> **Analogies:** for instance (1)
> **Warnings:** be careful (1)

#### [Planning your content types](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/planning-your-content-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/planning-your-content-types?u=76281980&t=3)** - [Instructor] So you might remember from our planning session that we're going to build four content types together. The news content type, which is just an update to the article content type to show that you can actually change and edit a pre-existing content type, adding fields, removing fields and creating new ways to use it. A business directory with a name, description, a category for the business, an address that converts into a [[Google]] Map, a phone number, web address, featured video and file downloads. The location content type which is going to be connected to our events content type, a name, description, category. The amenities that the location has, the address of course, a video and file downloads field. And then finally the events content type, name, description, a location which ties into obviously our locations, category again a taxonomy, date and time, video and file downloads. Now I realize these content types are kind of incomplete. The thing to remember is when you do your initial content audit, you're always looking for the kinds of content that will be on the site and then create the content types that you need to correctly house the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **Speakers:** - [instructor] (1)

#### [Creating content types](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=3)** - [Instructor] When you're building a real site, typically you're going to create all the content types at the same time. So that's what we're going to do. All right, let's add our first content type. Head over to structure, content types and add content type. This screen is the first screen in a wizard that takes us through creating our content type. Let's call this "Business Directory". Now you'll notice as I typed, a machine name was added. You cannot have a duplicate of any machine name across your entire [[Drupal]] site. If you did, Drupal would let you know that you can't use that name and request that you change the machine name to one that doesn't exist in the database already. If you click on edit, you're able to update those here but note it can only contain lowercase letters, numbers and underscores. You cannot have spaces or uppercase letters or any special characters. All right, in the description field, go ahead and type "place to highlight all the businesses in Drupalville". Let's change the title field label to "Business Name". If you had any specific guidelines for actually submitting a business to the business directory, you would type them in here and your content editors would see that as they added a new business. That's the submission form settings. Click on publishing options
>
> **[1:37](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=97)** and let's uncheck promoted to the front page but we'll keep published by default on. So as soon as you clicked save, that's going to be published. Don't worry, we're going to talk about workflows and how to have sophisticated workflows and leave create new revision checked. It's always good to have [[Version Control]] turned on on any given content type. Click on display settings and uncheck display author and date information, really doesn't matter who the author was for a business listing. And on menu settings, go ahead and uncheck main navigation. Now this is something I typically do on every single content type that I ever create because I don't want to give content editors the ability to willy-nilly add nodes to my main menu. That could become a recipe for disaster pretty quickly if we're not careful. So rather than allowing content editors to add menus anywhere, I make sure a site builder, like you, can add the menus and create the menu structure that you need by manually managing the menu system or via views, which again, we'll cover shortly. All right, click save and manage fields. All right, let's add our location content type. Click on structure, content types and add content type. Call this "Locations",
>
> **[3:09](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=189)** "Enter the various locations for events around Drupalville." We'll change the title field label to "Name". It's a location name. We're going to do basically the same things for the settings here that we've done already. Uncheck promoted to the front page, uncheck display author and date information and uncheck main navigation. The location content type is going to be something that we really don't list anywhere except in relationship to events. Click save and manage fields. All right, let's add our event content type. Now again, this one's going to be pretty incomplete but you'll get the idea and the fields that you can add are really whatever you want. Head over to structure, content types and add content type. Let's call this "Events". "Enter the events from around Drupalville".
>
> **[4:17](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=257)** We'll change this to "Event Name". Same settings as before. Click on publishing options, uncheck promoted to the front page, click on display settings, uncheck display author and date information. And honestly, the only time you probably want to have one of those is in a blog or say, the news content item. And click on menu settings and once again, uncheck main navigation. Click save and manage fields. And now we're ready to move on to actually adding fields to our content types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Drupal]] (2), [[Version Control]] (1)
> **UI Navigation:** click on (7)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 2. Fields Explained

[↑ Back to Table of Contents](#table-of-contents)

#### [Fields explained: Introduction and definitions](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=3)** As we talked about in content explained, all of your data is stored in a set of fields. Now you'll remember that we talked about the fact that if you just shove everything in the body, well, then you can't do layouts, you can't do filters and you can't sort by any of the information inside that field when it comes time to creating say landing pages of all the new businesses or all the news in a certain category. And so we use fields. And so here on the screen, you're looking at some of the fields we're going to create for our business content type. We're going to have a logo, an address, a website, a phone number, a category, a video and some downloadable files. Once again, if we shove those in the body, well, then we are out of luck later on. When our boss comes along and says, "Hey I need a new business directory listing. Could you create a page that says "Show me all the businesses", sorted alphabetically in a particular category. Owen, I want to see just the name of the business and the business video in this particular display." Well, again, other CMS's just can't do that. But [[Drupal]] does it incredibly well. When we use fields correctly. When you add a field and put content in the field, all of that data is stored in the database. And so field types are pretty important. When it's time to add new fields, here are the default field types that you can use.
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=98)** Boolean, which is yes or no, comment field, a date field, email, link, timestamp, all different kinds of numbers and again in your planning you want to make sure you pick the right kind of number field. You can't change that later on. So a decimal field and an integer field two different things. A telephone number field, of course and then entity reference fields, content, file, image, media, taxonomy term, user, and other and then all kinds of text fields. As you add new features to your site via contributed or custom modules well then, new field types may appear here depending on what you're trying to do. All right, with that quick explanation then, let's go ahead and add the fields we need to our content types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Drupal]] (1)
> **Cross-References:** we talked about (2)
> **CLI Commands:** make (1)
> **Env Vars:** cms (1)

#### [Adding fields to the business content type](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=3)** - [Instructor] Now that we understand a little bit more about fields and what they do, we're going to add our fields to our business content type first. Let's remind ourselves so the fields we're actually going to add. Our title is a name we'll update the label for the body-field to be description. We're going to add a logo some categorization using taxonomy will do that last. An address field that will actually turn into a [[Google]] map, a phone number, a website address and then a featured video and file downloads fields. And we're going to add those to all four of our content types to give our visitors some consistency in what they can do on any given content type. Head over to Structure, Content Types, Business Directory, and Manage fields. And you'll notice we have a body field built in, let's go ahead and edit that label. Click Edit on the operations button over here and change the label for the [[Microsoft Word|word]] body to business description. You'll notice I'm using pretty descriptive labels here and that becomes important later on when we actually try and find some of these fields again. If you want it to require the business description, you could simply put a check mark in here. Click Save settings and before we move on, let's just talk about this page for a minute. I'm on the Manage fields tab in the content type called Business Directory. If I click Edit, it would take me back to that first screen that we worked on,
>
> **[1:37](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=97)** Manage fields allows me to add and manage the fields. Manage form display is how I order the fields for content editors to see and Manage display is how we order the fields for our end users or visitors to see. We'll talk a lot more about that in the layout explain section. For now, click back on Manage fields and let's add a new field. Click Add field and here we can add a new field or reuse an existing field. If you click down on that, you'll notice that there are related files, related videos, tags, and images. We're going to use the field image for this field. Go ahead and click on Field Image and change the label to Business Logo. Now there's a reason I'm not using say the media manager here. I don't want to clutter up my digital asset management system with a bunch of logos that really only go in one place. Click Save and continue, Upload a logo supplied by the business is a good help text for our editors. You'll note that we can use PNG GIF, JPG, or JPEGs and we're able to update the file directory where these images will be stored. Go ahead and change that to images/business-logos don't have the preceding or trailing slash.
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=194)** With the image field, you can say how big the picture can be, how small the picture can be and the maximum upload size. Typically the only one I worry about here is minimum image resolution because I never want to have to scale up an image in order for it to be used on my site. We'll skip that for now but remember, this might be important for your particular application. We always Enable the All text and we make the all text required. Click Save settings. So now we have a business scription and a business logo. Let's add the address field, click Add field and we're going to select a Text field. Now there's a reason we're going to select a plain text field here. That's because we're going to use the simple Google map model to change this address field into an actual Google map. Click and select the text plane field and we'll call this Business Address click Save and continue and Save Field settings and Save settings. Click Add field, and this time let's add a link to their external website. So choose the link field, call this Business Website, we'll limit it to one
>
> **[4:51](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=291)** and again you can put some help text in here for a content editor. We're going to make this external links only that way, our site knows that this is always going to go off of our site and we will allow the link text to be optional. And what that means is, if we put texts in the link text, that's what will show up. If we don't, it'll just give us the URL, click Save settings. You might remember in the introduction to the administration area, that when you click on extend you can turn modules on and off. Go ahead and click on Extend because we need to turn on a module that's not actually turned on by default. Click on Core and Administration and Experimental and scroll down and you'll find the Telephone module. It's not turned on by default, but it defines a field type for telephone numbers. Go ahead and put a check mark in there, scroll down and click install. Whenever you want to add a new feature to your [[Drupal]] site, well, there's probably a module for that. Let's head back over to Structure, Content Types, Business Directory, and Manage fields. Click, Add field and select the field type, and now you'll see telephone number listed under the number section.
>
> **[6:23](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=383)** Go ahead and click on Telephone number and we'll call this Business Phone. Again noticing the machine name here is field_business_phone, click Save and continue. We'll limit it to one, click Save settings and now we have a phone field. We're going to add these last two fields Featured Video and File Downloads when we get to the section called media explained.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (3), [[Microsoft Word|Word]] (1), [[Drupal]] (1)
> **UI Navigation:** click on (5), select the (2), scroll down (2)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** png (1), gif (1), jpg (1), url (1)
> **Definitions:** is a  (2)
> **Analogies:** picture (2)
> **Code Identifiers:** field_business_phone (1)
> **Warnings:** note that (1)

#### [Adding fields to the locations content type](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-locations-content-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-locations-content-type?u=76281980&t=3)** - [Instructor] Let's just have a reminder, what field we're going to add here. We're going to have the name, description. We're going to add two taxonomies, which we'll do in a little bit, but we'll have a simple address field and the video and file downloads fields, all right? So we'll update the label for our body and add these three fields and we'll be done very quickly. Head over to structure, content types, locations and manage fields. Click the edit button for the body field. Let's edit the label for body and put location description
>
> **[0:43](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-locations-content-type?u=76281980&t=43)** and click save settings. Let's add the address field in, click add field, select a field type. And once again, we're going to use text plane because we're going to convert this into a [[Google]] Map. Location address, click save and continue. Save field settings and save settings. And that's all we can do until the chapters on taxonomy explained and media explained, we'll be back to finish this up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **Speakers:** - [instructor] (1)

#### [Adding fields to the events content type](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=3)** - [Instructor] In this video, we're going to update our events content type and add all of the fields that we need. Let's remind ourselves of the fields we're adding to the event content type. We'll update the body field and name a description. We'll add an entity reference field for the location content type. We're going to add some categorization via taxonomy. A date and time field, a video and file downloads field and a price and link field. If you're not already there, head over to structure, content types, events, and manage fields. Let's update the body label. Click edit, change the label to event description and save settings. And once again, I'm not making any of these fields required, you can certainly make them required if you want. Let's add a date field, click add field and choose date. This is the event date field, go ahead and click save and continue. Now in this case, we're going to use date and time. That's a pretty good idea for an event. Click save field settings, enter the start date and time for the event. Something I've not mentioned, you can have a default for every single field. Sometimes it works really well, sometimes it just doesn't apply. If we wanted to have say today
>
> **[1:37](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=97)** as the default date for any event, well, you just choose current date as the default date. If you wanted to make it relative, well, then you could make it say plus three days and it would choose a date three days from here. They're not necessary, but sometimes they can be helpful. Click save settings. We need a way to connect our event to the location. So click add field, and this is going to be another reference field. Now we've been entering media and in [[Drupal]] 7 they were called entity reference fields and they still are. These are the other entities on our sites and now I'm referencing those entities. Click on content for this one, because we want to link our events to locations. (keys clacking) Event location. Click save and continue. The item of to reference is content, now you'll notice that there's just a ton that you can reference here. We're going to keep it really simple because we're just referencing the locations, but understand that you can reference all kinds of things in entity reference fields. We're going to assume that one event is at one location, click save field settings, and in the help text select the location for this event. Of course, the content type
>
> **[3:10](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=190)** that we're referencing is locations. Now, this is going to be an auto-complete widget, I love these things. You just type the letter that is in any one of your locations, all of the locations with that letter will show up and you just select one. So that's what we're going to use, quick save settings. So two more fields to go, a pricing field and a link field. All right, once again click add field and select the field type. Now, pricing is tricky. Pricing can be a decimal or an integer depending on whether you want dollars and cents, and this brings up something that's really important in field type selection. You cannot change the type of field it is, once you have data in there. You would have to delete the field completely, and recreate the field with the new field type. So in your planning, make sure the field types that you select are correct the first time. This is also why we test with dummy data, which we'll do in a little bit. Because sometimes the implications of a choice don't show up until you're actually using it, all right. So for this one, let's pick a decimal even though we may or may not use it. We'll call this event price, click save and continue. The precision is 10 digits with two digits to the right of the decimal, this is going to allow us to have dollars and cents. Now, of course, some events would have more than one price
>
> **[4:44](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=284)** but we'll keep it simple, click save field settings. You can have a minimum and a maximum, so let's put the minimum at zero because we aren't going to pay people to come to our events and let's add a dollar and a space to the prefix or beginning of the display for our field. All right, click save settings. Last field, click add field. This time, choose a link. This is going to be the link to the event website. Event website, limited to one. We'll leave it as either an internal or external link, you just never know, we might have a page on our site about a particular event and we'll leave the link text optional, click save settings. All right. Except for our categorization with taxonomy, our content type is ready to go. All right, all that's left now is the categorization via our taxonomy, we'll cover that in taxonomy explained. And then our video and file downloads fields that we'll cover in media explained.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Drupal]] (1)
> **CLI Commands:** make (4)
> **UI Navigation:** select the (2), click on (1)
> **Speakers:** - [instructor] (1)

#### [Modifying the article content type](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=3)** - [Instructor] All right, so finally, let's update the article content type to reflect the fact that we want to use it as a news and press release style content type. I've left this one to the end because I wanted to get us used to creating content types. But now we're going to see that we can actually change a content type, adding new fields, taking fields away and making it do what we want. All right, let's dive in. Now you might remember we already have a couple of articles, that's not going to be a problem. So head over to Structure, Content Types, and Article, and Manage Fields. Now you remember we already have a title, a body, comments which we'll leave, image, and tags. And I just want to to talk briefly about tags. As you remember, we added tags to our first two article nodes. If I click on one of the tags, it takes me to a page that's actually a taxonomy landing page with the 10 most recent nodes tagged with that [[Microsoft Word|word]]. The problem with tags and taxonomy is this, the way it's set up in the article content type, we can add a new tag anytime we want simply just by adding a comma and then another tag. When I click Save, my article has one another tag. And that's terrific. It makes it really easy to categorize our, in this case, article content. The problem is what happens when you have a typo. And this happens all too frequently.
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=98)** If I click edit again and type welcome, W- E- L- O- C- M- E
>
> **[1:48](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=108)** and click Save, I have a new tag that was intended to be welcome but unfortunately, it's now a new category in my taxonomy system. 99 times out of 100, I advise people to not use tags. The only exception for me would be if you're the only person managing the content on your site and that you have a really good handle on what kind of tags you want to use. This is an open taxonomy, I prefer a closed taxonomy where we predefine the terms that someone can use and then allow them to select from that. You can have an unlimited number of terms in your taxonomy, so the sheer number isn't the issue. Really the only issue here is typos. I know of a number of different, even large enterprise clients that had to rip out all of the tags because of the number of typos that had been made over time and completely redo this. So we're going to actually delete the tag field. Head to Structure, Content Types, Article, and Manage Fields. On the edit button for the tags field, click the down triangle and then click Delete. Simple as that. Now if I go back to my site, you'll note that the tags are gone and if I click Edit, well, the tag field has disappeared. The tags are still there. We're just not going to use them. And when we get to taxonomy explained we're going to add two vocabularies
>
> **[3:21](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=201)** to this article content type that allows to number one, differentiate between news and press releases and secondly, add all of those references or categories back to our article content type. And that's all we're going to do for now to round out this section in our course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Testing your content types](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=3)** - [Instructor] In this video we're going to add one node to each of the three content types we created in the previous steps. We're going to do this just to get our content started. We'll be adding a lot more content in just a little bit. I've said content now several times. So let's go ahead and click, Add content. Let's choose the Business Directory and you'll see here are the fields that we added. Our title is Business Name, we changed the body field to Business Description. We have the Logo field, the Business Address field. We have the Business Website field and the Business Phone field. Now we're going to be adding more fields to all of these content types as we continue on in our explanation of building content. But let's go ahead and add our first business. Since this is an OSTraining video series, well, we're going to add, OSTraining as our first business. The business description, we teach people how to build great websites with [[Drupal]]. Let's add a logo. You can download the genuine OSTraining logo from the link on the screen, or you can grab something off of [[Google]]. This is the OSTraining Mascot. Business address, I'm just going to grab a real address from the city of Cincinnati, I live near there. I play hockey and Cincinnati. So I'm going to grab the address for where the Cincinnati cyclings play hockey. So to make this work for when we add the module later
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=99)** it does need to be a real address. Feel free to put your own address in here, it doesn't really matter. The web address for OSTraining, well, that's easy. [OSTraining.com](https://OSTraining.com) and we'll put in Official Website and the business phone for OSTraining, I'm not sure what it is. So let's just put in the typical fake all fives. All right, go ahead and click Save. So as a reminder, Drupal outputs all of the fields in a content type, in the order of the display that we set up, usually with the label already printed. Now we can update that and we will later on but out of the box, this is what Drupal does. There's the title, the body, the business logo, the business address, the business website and the business phone. You'll note that the website URL was replaced with the text that we put in there. And that's the business directory content type. Well, we'll do a lot more with that coming up soon. Let's go ahead and add our first location. Click Content, Add content and Locations. I'm going to use heritage bank center again if you want to use a local venue, that's terrific. A great venue for large crowds including hockey and concerts. And once again the location addresses for me,
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=194)** 100 Broadway, Cincinnati Ohio 45202, click Save. And there's our first location node. Let's head to Content, Add content and Event. And let's have an event where we're teaching people Drupal at the heritage center. Drupal course 101. This course will teach you everything you need to know about Drupal. Feel free to put some lorm ipsum text in there if you'd like as well. Now you'll remember we've added some other fields here event date. So I'm in Safari, which is going to ask me to input a date in four digit year, two digit month, two digit day. Interestingly, Safari and most other browsers are a little bit different. You'll note here in Chrome, I have a pop-up calendar which doesn't appear in Safari. This is just one of those browser things and I can select a date. And in Chrome, it's two digit month, two digit day, four digit year, which is reversed. So again, probably want to use Chrome if you're going to be using a date or time field. So I'm just going to continue in Chrome, I'm going to pick the end of the month, September 30th at 8:00 AM. All I did was type an eight, a zero a zero and an A and the time was formatted for me. The event location is an auto-complete widget.
>
> **[4:50](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=290)** I love these. All I have to do is type any letter in a location and all of the locations that contain that letter. Well, they'll show up. I select it and there it is. It's connected. Now this number eight here is the node ID that is probably going to be different for you, it doesn't matter. Nobody will ever see the node ID. Event price, well, I'm going to put $100 for the event price and you'll notice here in Chrome I've got little arrows that will add or delete pennies at a time. The event website is [https://ostraining.com/Drupal](https://ostraining.com/Drupal). That web address doesn't exist, but that's okay for now. And we'll say, this is the course website, click Save. And now you'll see we have a new event. Once again, our fields listed in the order that we have them in the display and all of the labels are showing. Again, you'll notice that entity reference labels are different Bartek, that's something we can fix with our theming. Event price and event website. Well, terrific, we've added a node in each of our three new content types and of course, we already have a couple of nodes in the article content type. And when we deleted the tag field the nodes were automatically updated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Drupal]] (7), [[Google]] (1)
> **CLI Commands:** node (5), make (1)
> **Tools:** safari (3)
> **URLs:** [ostraining.com](https://ostraining.com) (1), [https://ostraining.com/drupal](https://ostraining.com/drupal) (1)
> **Definitions:** is an  (2)
> **Ports:** :00 (1)
> **Env Vars:** url (1)
> **Cross-References:** coming up (1)


## Instructor

- [[OSTraining]]
- [[Rod Martin]]

## Skills Covered

- Drupal

## Path Context

### In [[Build Your Drupal Skills]]
← [[Drupal 9 Essential Training 1 Introduction And Administration]] | **2 of 6** | [[Drupal 9 Essential Training- 3 Taxonomy, Media, and Modules]] →

## Appears In

- [[Build Your Drupal Skills]]

## Related Courses

_Courses sharing skills:_

- [[Drupal 9 Essential Training- 6 Finishing the Design]] — Drupal
- [[Drupal 9 Essential Training- 5 Layout]] — Drupal
- [[Drupal 9 Essential Training- 4 Users and Themes]] — Drupal
- [[Drupal 9 Essential Training- 3 Taxonomy, Media, and Modules]] — Drupal
- [[Drupal 9 Essential Training 1 Introduction And Administration]] — Drupal

---

[↑ Back to top](#)