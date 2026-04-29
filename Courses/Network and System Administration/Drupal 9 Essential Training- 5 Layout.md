---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: drupal-9-essential-training-5-layout
url: "https://www.linkedin.com/learning/drupal-9-essential-training-5-layout"
duration_minutes: 96
duration: 1h 36m
level: Beginner
updated: 3/16/2021
skills:
  - Drupal
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHh1CBKnlp8TA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615495254627?e=2147483647&amp;v=beta&amp;t=fOKnkyylvVVxXCQuUT7Duw0LBj365ucn5nypV92KXU0"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Build Your Drupal Skills]]'
prev_courses:
  - '[[Drupal 9 Essential Training- 4 Users and Themes]]'
next_courses:
  - '[[Drupal 9 Essential Training- 6 Finishing the Design]]'
path_nav: '[{"path":"Build Your Drupal Skills","position":5,"total":6,"prev":"Drupal 9 Essential Training- 4 Users and Themes","next":"Drupal 9 Essential Training- 6 Finishing the Design"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - topic/web-development
  - skill/drupal
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Drupal%209%20Essential%20Training-%205%20Layout.md)

![Drupal 9 Essential Training: 5 Layout](https://media.licdn.com/dms/image/v2/C4E0DAQHh1CBKnlp8TA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615495254627?e=2147483647&amp;v=beta&amp;t=fOKnkyylvVVxXCQuUT7Duw0LBj365ucn5nypV92KXU0)

# Drupal 9 Essential Training: 5 Layout

> Take a detailed look at the custom layouts you can create for your Drupal installation. In this course, instructor Rod Martin steps you through the full process, from a basic layout to customizing navigation menus. Rod begins with a look at a basic layout, then explores how to arrange displays. He explains how you can use block types. Rod shows you how to install the layout builder tool and create

> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout) | 1h 36m | Beginner
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - Introduction to the course
- [**1. Layout Explained**](#1-layout-explained) (10 videos)
  - Layout explained
  - Managing displays
  - Blocks explained
  - Creating a custom block type
  - Creating a custom block type: Media
  - Layout builder explained
  - Managing the layout for the article content type
  - Managing the layout for the business directory
  - Adding a custom block in the layout builder
  - Creating landing pages
- [**2. Views Explained**](#2-views-explained) (8 videos)
  - Views explained
  - Adding the business directory view
  - Adding the news and press release view
  - Exposing filters for visitor interaction
  - Adding an events calendar view
  - Creating a related content view
  - Image styles explained
  - Image styles for media
- [**3. Menus Explained**](#3-menus-explained) (2 videos)
  - Modify the main menu
  - Creating a new menu

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to the course
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=2)** - Hi and welcome to the Drupal 9 Essential Training.
>
> **[0:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=5)** My name's Rod Martin.
>
> **[0:06](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=6)** I'm your trainer through this series.
>
> **[0:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=8)** In this course we're covering layout.
>
> **[0:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=11)** Now, layout sounds like a small topic.
>
> **[0:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=13)** But it really isn't.
>
> **[0:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=14)** So let's talk about what we're going to cover in this course.
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=18)** I'm going to introduce you to layouts in general.
>
> **[0:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=21)** And then we're going to dive in to the four main components.
>
> **[0:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=25)** We'll talk about managing the display with Drupal Core or what Drupal gives us right out of the box.
>
> **[0:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=31)** There's not a lot there.
>
> **[0:32](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=32)** But it's still important to cover.
>
> **[0:34](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=34)** Then we'll talk about block management.
>
> **[0:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=37)** Now, as you know by now, blocks are what appear all around the different areas of your sight that aren't content.
>
> **[0:45](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=45)** So, the content area is generally in the middle.
>
> **[0:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=48)** And you've got block regions all around it.
>
> **[0:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=50)** In which you place blocks.
>
> **[0:52](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=52)** We'll talk more about block placement and theming as we go.
>
> **[0:57](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=57)** Next, we're going to talk about layout builder.
>
> **[1:00](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=60)** And I can't tell you how excited I am about layout builder in Drupal 9.
>
> **[1:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=65)** This gives site builders the ability to build beautiful landing pages without having to worry about theming.
>
> **[1:12](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=72)** It allows you to rearrange fields in your content type.
>
> **[1:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=76)** And we'll do exercises along those lines throughout this course.
>
> **[1:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=81)** And finally views.
>
> **[1:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=83)** I've never built a Drupal site without views.
>
> **[1:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=85)** It's in Core as of Drupal 8 and now in Drupal 9.
>
> **[1:30](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=90)** And it's an essential part of building out a Drupal website.
>
> **[1:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=95)** So, layout.
>
> **[1:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=96)** A big topic.
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=98)** An important topic.
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=99)** Let's dive in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type. (1)
> **Speakers:** - hi (1)


### 1. Layout Explained

> [↑ Back to Table of Contents](#table-of-contents)

#### Layout explained
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980&t=3)** - [Instructor] So we've gotten to the section of the course that's actually quite involved.
>
> **[0:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980&t=7)** We've done our planning, we've set up our content types, we've added our fields, we've added a little bit of content so we can play with it, and now we have to start to figure out well, how are we going to lay all of these things out?
>
> **[0:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980&t=19)** How are we going to have lists, blocks, pages, and more so people can find our content?
>
> **[0:27](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980&t=27)** Let me just remind you where we are in the site building workflow.
>
> **[0:30](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980&t=30)** Now by now, you've probably realized that things can happen in whatever order you need them to happen in.
>
> **[0:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980&t=36)** This is just a suggestion, but it is considered best practice.
>
> **[0:40](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980&t=40)** We're in the layout sections.
>
> **[0:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980&t=42)** I'm going to talk about displays, blocks, layout builder, and views, and I'm going to introduce each of those as we go.
>
> **[0:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980&t=50)** So I'm not going to take the time to do it here.
>
> **[0:52](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980&t=52)** Suffice to say you can mix the order of this up depending on the site that you're building.
>
> **[0:57](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980&t=57)** Sometimes you might want to create a whole bunch of pages and blocks with views before you actually create the layouts.
>
> **[1:06](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980&t=66)** Sometimes you might be building a site that works just as well with a whole bunch of manual blocks, and you don't even need views, though frankly, that's pretty few and far between.
>
> **[1:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980&t=78)** Managing your image styles can really happen at any point during the site building process.
>
> **[1:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980&t=84)** And so, layout involves managing the display of your notes, adding your blocks and putting them in the right block regions, setting up all of the layouts for nodes and taxonomy terms, and then of course, image styles.
>
> **[1:41](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980&t=101)** All right, let's dive in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **CLI Commands:** find (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Managing displays
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=3)** - [Instructor] So here we are on our site building workflow.
>
> **[0:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=5)** We've just talked about Layout Explained, but before we get to Blocks, I want to talk a little bit about manage display.
>
> **[0:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=11)** Now manage display is going to change when we add Layout Builder.
>
> **[0:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=16)** But in the meantime, we just need to cover it real quickly.
>
> **[0:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=21)** Head over to Structure, Content Types, Article, and Manage display.
>
> **[0:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=28)** In Drupal, we have the default display, an RSS feed, and a teaser in the article content type.
>
> **[0:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=35)** The teaser is nothing more than just the image and the body and the links with everything else disabled.
>
> **[0:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=42)** So if I go back to my site, you'll note that this is an article, and in Bartik, the image floated to the left and the text wrapped around it.
>
> **[0:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=51)** In this particular theme, that doesn't occur, we can fix that later.
>
> **[0:55](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=55)** But as you'll notice then, there's the title, the submission information, the image, the body, and a read more and a link to comment.
>
> **[1:06](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=66)** If I click on the read more link, takes me into the full node, where I've got all of my fields.
>
> **[1:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=73)** This is the teaser mode.
>
> **[1:15](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=75)** Now devel kind of messes that up just a little bit.
>
> **[1:17](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=77)** So let's head down to the bottom.
>
> **[1:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=81)** Let's head to the last page where you'll remember our welcome to Drupalville and our first node of the article content type.
>
> **[1:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=88)** And this is a bit more typical of what we should see.
>
> **[1:32](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=92)** A title, submission information the image in a thumbnail, some part of the introductory text, the read more and add a new comment link.
>
> **[1:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=102)** Don't worry about devel messing that up.
>
> **[1:43](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=103)** We can fix that in just a little bit.
>
> **[1:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=106)** So once again, structure content types, article and manage display.
>
> **[1:53](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=113)** So in the default display this is the display when we're looking at the node in its entirety.
>
> **[1:59](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=119)** So we've got the image field body, article type, article keywords, the video, the files and the comments.
>
> **[2:06](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=126)** If I wanted to rearrange those fields on the page without doing any other kind of layout, I can easily do that.
>
> **[2:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=133)** I'm going to drag article type to the top and I'm going to make the label in line.
>
> **[2:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=138)** We've hidden the label for image, hidden it for body.
>
> **[2:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=142)** Let's put the keywords in line.
>
> **[2:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=146)** Let's hide the label for the video and hide the label for the files.
>
> **[2:34](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=154)** All right, let's click save.
>
> **[2:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=158)** And now when I go back over to my site and I click on welcome to Drupalville you'll notice the teaser hasn't changed, but when I click on welcome to Drupalville the submission information the article type, the image, the body, the keywords then my video, then my files, and then the comment fields.
>
> **[2:56](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=176)** So out of the box Drupal list the fields in order that you place them in the manage display tab and either hides or shows the label depending again on what you choose.
>
> **[3:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=187)** That's really as far as we can go with the displays in Drupal, until we get to the section on layout builder.
>
> **[3:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=196)** If we'd manage the display for say the business directory, structure, content types, business directory, and manage display we'll see the same kind of thing.
>
> **[3:27](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=207)** We have the description, logo, address, website phone category, business, video and files.
>
> **[3:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=213)** Once again, on the default display.
>
> **[3:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=216)** Teaser is just the business description and the links.
>
> **[3:40](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=220)** If I wanted to add the business logo to the teaser for the business directory, well, it's that simple.
>
> **[3:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=226)** Now we actually can't see that yet until we get to views but nevertheless, that's what it does.
>
> **[3:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=231)** If I do want to re-order this, well it's exactly the same as before.
>
> **[3:55](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=235)** Grab the business logo, put it at the top and hide the label.
>
> **[4:01](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=241)** By the way, hidden and visually hidden hidden is not printed at all, Visually hidden is it's printed but not displayed on the browser It's just printed in the background for screen readers.
>
> **[4:15](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=255)** Go ahead and click save, head to content and click on any business directory.
>
> **[4:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=263)** And now the images at the top once again, not floated left, we can fix that later.
>
> **[4:30](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=270)** All right.
>
> **[4:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=271)** So that's managed display.
>
> **[4:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=273)** It doesn't give us much but it gives us a little bit to work with at least in the beginning.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), type. (2), type, (2), this, (1)
> **CLI Commands:** node (3), make (1)
> **UI Navigation:** click on (4)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** rss (1)
> **Cross-References:** go back to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Blocks explained
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=3)** - [Instructor] You might remember back in the very beginning we talked about the structure menu, and we actually created a block called Welcome to Drupalville.
>
> **[0:12](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=12)** Well, this is blocks explained, and I want to talk to you a little bit about what blocks are.
>
> **[0:17](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=17)** Blocks are an entity that can contain just about anything.
>
> **[0:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=22)** Content like videos, text, images, and functionality like the search bar and the menus.
>
> **[0:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=31)** Blocks are not content but they are placed in block regions around your site.
>
> **[0:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=36)** So while your theme provides the blueprint for your website via block regions, blocks are actually like the furniture that you would move in once your house is built.
>
> **[0:47](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=47)** So indeed, this is a block.
>
> **[0:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=50)** This is a block.
>
> **[0:52](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=52)** This is a block.
>
> **[0:53](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=53)** This is a block.
>
> **[0:55](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=55)** The content area is a block, and scrolling all the way to the bottom, we have several blocks that have been placed in the footer.
>
> **[1:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=63)** As you might recall, structure, block layout, and demonstrate block regions shows us the regions that blocks can be placed in.
>
> **[1:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=73)** And it's really actually quite fair to say that everything that ends up on the page, ends up in a block.
>
> **[1:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=81)** And that's really true.
>
> **[1:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=82)** Even your content is placed into a block region.
>
> **[1:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=86)** And if we click exit block region demonstration and scroll down, we have the site branding block, the breadcrumbs block, search, main nav, status messages, page title, tabs, help, primary admin actions, and there's even your main page content block that's in the content block region.
>
> **[1:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=106)** So it's fair to say that this entire page is just a set of blocks.
>
> **[1:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=110)** Blocks are absolutely critical to Drupal 9's layout.
>
> **[1:56](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=116)** So when we created the Welcome to Drupalville block, we created a custom block in the basic block type.
>
> **[2:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=127)** Which is just a title and a body.
>
> **[2:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=129)** And the great thing is, well, you can have custom block types as well.
>
> **[2:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=134)** Now where this becomes incredibly helpful is when we get to layout builder.
>
> **[2:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=139)** But in the meantime, we can add blocks all across our site.
>
> **[2:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=143)** All right, let's go ahead and do that one more time.
>
> **[2:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=145)** Click on Blocks, and click Add Custom Block, please.
>
> **[2:30](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=150)** Let's call this the join block.
>
> **[2:34](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=154)** You should join our site.
>
> **[2:41](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=161)** There's lots of helpful information.
>
> **[2:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=166)** Go head and click save.
>
> **[2:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=170)** And now we have to place the block.
>
> **[2:52](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=172)** So you create the block, and then you place the block.
>
> **[2:57](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=177)** Scroll down to the primary block and click Place Block.
>
> **[3:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=182)** We can filter by the words that we use.
>
> **[3:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=188)** And that's so helpful.
>
> **[3:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=189)** Click Place Block.
>
> **[3:12](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=192)** And we're going to restrict this in two ways.
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=194)** One, we're only going to show it on the front page.
>
> **[3:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=198)** So you do that by saying front.
>
> **[3:20](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=200)** And that's right there in the instructions.
>
> **[3:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=202)** Drupal's homepage is always referred to as the front page.
>
> **[3:27](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=207)** And we're also only going to show this if you're not logged in.
>
> **[3:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=211)** If you're logged in, it's assuming you've already joined the site.
>
> **[3:34](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=214)** So on roles, put a check mark in anonymous user.
>
> **[3:40](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=220)** Now up for the title, go ahead and say, join our website.
>
> **[3:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=226)** All right, the title is join our website the pages, restricted just to the front page, and just for an anonymous user.
>
> **[3:55](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=235)** Click Save Block.
>
> **[3:59](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=239)** And because it's green, that means Drupal has automatically saved it.
>
> **[4:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=243)** Let's go back to our site.
>
> **[4:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=245)** And well, it's not there.
>
> **[4:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=247)** If we head over to a browser where we're not logged in and click on home, well guess what?
>
> **[4:12](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=252)** It's there.
>
> **[4:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=254)** We can create custom blocks that go on any page for anyone.
>
> **[4:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=258)** And it's just as simple as what we just did.
>
> **[4:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=261)** There's one more feature, two blocks in Drupal 9 that I want to mention.
>
> **[4:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=265)** And that's that you can place a block in different regions for different purposes.
>
> **[4:32](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=272)** So let's say for instance, you wanted the join our website block in a different region, on a different page, for a different purpose.
>
> **[4:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=284)** Well, it's as simple as just placing the block and assigning different rules.
>
> **[4:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=290)** Going to scroll down to the footer block.
>
> **[4:52](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=292)** And I'm going to click a place block.
>
> **[4:54](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=294)** Filter for my block, click Place.
>
> **[4:58](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=298)** And this time I'm going to allow everywhere, except the front page.
>
> **[5:04](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=304)** Hide for the listed pages.
>
> **[5:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=305)** And I'm not going to worry about roles for this demonstration.
>
> **[5:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=308)** Click Save Block, and go back to my site.
>
> **[5:12](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=312)** And now when I'm on my About Drupalville page, you'll see the join block down here in the footer.
>
> **[5:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=318)** This is an amazing improvement over Drupal 7.
>
> **[5:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=321)** And it's one that you're really going to love working with when it comes to putting information in different places around your site using blocks.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5), is an  (1)
> **Code Keywords:** let (4), type. (1)
> **UI Navigation:** scroll down (3), click on (2)
> **Cross-References:** go back to (2), we talked about (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Creating a custom block type
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=3)** - [Instructor] In this video, we're going to create a new custom block type.
>
> **[0:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=7)** Now it's very similar to custom content types, and there's some tremendous advantages to doing this.
>
> **[0:12](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=12)** We're not limited in our blocks to just a title and a body.
>
> **[0:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=16)** All right, go to structure, block layout, and block types please.
>
> **[0:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=22)** And click add custom block type.
>
> **[0:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=26)** What we're going to do here is add a custom block type that's going to house a PDF from our media manager for download on particular pages.
>
> **[0:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=35)** All right, in the label, call it downloadable PDF.
>
> **[0:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=42)** Put a checkmark in create new revision.
>
> **[0:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=44)** This way we can keep version control on our block, and click save.
>
> **[0:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=50)** All right, click manage fields.
>
> **[0:54](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=54)** Now we automatically get a title and a body.
>
> **[0:57](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=57)** The body we can update as description.
>
> **[1:00](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=60)** So click edit, and let's call this download description.
>
> **[1:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=67)** Click save settings.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=70)** Let's add the media field.
>
> **[1:12](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=72)** Click add field.
>
> **[1:15](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=75)** Once again, even here in blocks we have exactly the same kind of fields available.
>
> **[1:20](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=80)** Go ahead and choose media.
>
> **[1:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=84)** Go ahead and put downloadable PDF.
>
> **[1:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=88)** Click save and continue.
>
> **[1:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=91)** Limit it to one.
>
> **[1:32](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=92)** Save field settings, and choose document.
>
> **[1:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=97)** So what we're going to do with this PDF is we'll attach it to a particular business.
>
> **[1:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=102)** So this might be a special that they're running and that we want to put it in the block region off to the side, not necessarily inside the node itself.
>
> **[1:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=111)** All right.
>
> **[1:52](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=112)** Click save settings.
>
> **[1:53](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=113)** All right.
>
> **[1:54](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=114)** Head back to structure, block layout, and add custom block.
>
> **[1:59](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=119)** And now you'll get the choice.
>
> **[2:01](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=121)** Go ahead and choose downloadable PDF.
>
> **[2:04](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=124)** And let's say this is OS training deal of the week.
>
> **[2:12](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=132)** Download the PDF to get the deal of the week.
>
> **[2:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=139)** Click add media, and just go ahead and choose one of the PDFs that you've already uploaded.
>
> **[2:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=145)** Click insert selected.
>
> **[2:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=151)** Click save.
>
> **[2:34](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=154)** Now because we're creating this custom block in a wizard, we get to choose where it's going to be.
>
> **[2:41](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=161)** Now in this case, we want it to show up on a particular page.
>
> **[2:45](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=165)** So click on pages.
>
> **[2:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=168)** And put in slash business directory slash OS training.
>
> **[3:00](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=180)** So this is the human friendly URL to the node for OS training.
>
> **[3:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=185)** It also has a node ID of course.
>
> **[3:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=188)** You could use slash node slash whatever the node ID is in here as well.
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=194)** You'll note we can show for the listed pages or hide for the listed pages, and wildcards are fine here.
>
> **[3:20](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=200)** So there's a lot of flexibility that you have in placing blocks in any given node.
>
> **[3:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=206)** Let's pick the primary region, and click save block.
>
> **[3:34](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=214)** All right, that has saved.
>
> **[3:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=216)** Now let's go back to our site.
>
> **[3:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=219)** And you'll note, it's not here.
>
> **[3:41](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=221)** If I click on about Drupalville, well, again, it's not here.
>
> **[3:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=224)** But if I search for OS training, and click on the OS training node, there it is.
>
> **[3:53](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=233)** OS training deal of the week.
>
> **[3:55](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=235)** Downloadable PDF, we forgot to hide the label, in fact let's go ahead and do that.
>
> **[3:59](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=239)** Click block layout, go to custom block library, custom block types, downloadable PDF, and let's manage display.
>
> **[4:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=248)** Again, this is exactly the same as we saw in our content types.
>
> **[4:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=253)** We'll hide the downloadable PDF label.
>
> **[4:17](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=257)** It's pretty obvious what it is, click save, and go back to site.
>
> **[4:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=262)** And there we are, that label has now disappeared.
>
> **[4:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=266)** So, custom block types.
>
> **[4:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=268)** When we get to layout builder, I'm going to talk more about this because it is unbelievable what you can do with custom block types and layout builder.
>
> **[4:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=277)** Oh, just wetting your appetite a little bit for what's coming up.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), type. (2), this. (1), continue (1), case, (1)
> **Env Vars:** pdf (9), url (1)
> **CLI Commands:** node (7)
> **UI Navigation:** click on (3), go to (2)
> **Cross-References:** go back to (2), as we saw (1), coming up (1)
> **Exercise Files:** download the (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Creating a custom block type: Media
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=3)** - [Instructor] In this video we're going to create one more Custom Block Type that's going to be used later in the course it's going to be a free column block that contains a Media item in each of the three columns that we'll be able to insert on the fly.
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=18)** Click Structure, Block Layout, and Block Types, we're going to add a Custom Block Type.
>
> **[0:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=26)** This is going to be a three Column Media Block.
>
> **[0:34](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=34)** Add three Media items to this block for layout builder use.
>
> **[0:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=48)** Once again, go ahead and do the revision and click save.
>
> **[0:54](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=54)** So as you might've figured out we need to have three media fields, click Manage fields we'll leave the body just in case we want to use it but we probably won't click add field, select the field type, and again, choose media, three, three column media, click save and continue, and obviously change that to three click save settings.
>
> **[1:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=86)** So we could choose all of them here and make them all available but let's just go ahead and choose a document and image and a remote video, that way, any three media items can be inserted into this block, click save settings.
>
> **[1:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=104)** All right, let's go ahead and click and create one block layout, add custom block.
>
> **[1:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=111)** Let's do the three column media block and let's just call this three column test leave the body blank and add three media items it doesn't matter what you choose go ahead and add any of them.
>
> **[2:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=125)** I'm going to upload some images, so I'm going to choose one of each,
>
> **[2:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=136)** I'm going to add one PDF and one video, and that's my three media items.
>
> **[2:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=146)** Now you'll notice here, they're displayed three across that won't be true when we put it in a block region but we'll fix that with some CSS, click save and just so we can see it, we're going to put it in the primary region and click save all right go back to site.
>
> **[2:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=166)** And there's our three media items all right, let's go ahead and disable this blocks we don't need it just yet.
>
> **[2:53](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=173)** Click Block Layout and find the three column test and disable all right.
>
> **[3:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=185)** So we've created a couple of custom block types and we've added a couple of custom blocks, awesome.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), type. (1), type, (1), continue (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** pdf (1), css (1)
> **Cross-References:** later in (1), go back to (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Layout builder explained
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=3)** - One of the best new features in Drupal 9 is Layout Builder.
>
> **[0:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=7)** I can't tell you how excited I am about this.
>
> **[0:10](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=10)** It can save you literally thousands of dollars in custom theming.
>
> **[0:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=16)** When you can layout your notes and taxonomy landing pages, pretty much any way you want.
>
> **[0:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=22)** That combined with in line custom blocks that Layout Builder supports, literally it is an endless possibility of layout goodness that we're talking about.
>
> **[0:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=35)** I'm over here at the main documentation page for Layout Builder.
>
> **[0:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=39)** And there's just some terrific information here and I'm going to encourage you to read it when you can.
>
> **[0:45](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=45)** Because Layout Builder is pretty big.
>
> **[0:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=48)** The most important sections to read probably are the overview, layout defaults, and additional modules.
>
> **[0:57](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=57)** The rest of it I'm going to pretty much cover.
>
> **[0:59](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=59)** Layout Builder is a visual design tool allowing you to create multiple columns, brick layouts and then add blocks and fields from your content types into those layouts.
>
> **[1:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=73)** It's drag and drop and really easy to use once you kind of get the hang of it.
>
> **[1:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=78)** If I click on additional modules, you'll see that there are just a ton of them.
>
> **[1:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=83)** Now when Layout Builder was released, this page had like three or four entries.
>
> **[1:29](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=89)** Now it has a lot.
>
> **[1:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=91)** My favorites so far are Layout Builder blocks for bootstrap styles, Layout Builder advanced permissions which gives granular permissions for working with Layout Builder.
>
> **[1:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=104)** Layout Builder background.
>
> **[1:47](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=107)** There's just again, just some really really great ones here.
>
> **[1:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=111)** Another one I really like, Layout Builder restrictions which is similar to the other one.
>
> **[1:55](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=115)** And Layout Builder styles.
>
> **[1:57](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=117)** Again this is just a really terrific way of adding styles to your layouts.
>
> **[2:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=122)** There are a number of options here and I'm going to encourage you to take a look at them and see what might help you.
>
> **[2:10](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=130)** This replaces two main modules from Drupal 7.
>
> **[2:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=133)** Panels and display suite.
>
> **[2:15](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=135)** Both excellent modules but honestly, having this in core is really terrific.
>
> **[2:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=141)** Now this isn't enabled by default.
>
> **[2:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=143)** So let's go and take care of that now.
>
> **[2:27](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=147)** All right, let's go ahead and enable Layout Builder.
>
> **[2:30](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=150)** Click on extend.
>
> **[2:32](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=152)** And under core, you're going to find Layout Builder and Layout Discovery.
>
> **[2:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=157)** Go ahead and put check marks in both of those.
>
> **[2:40](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=160)** And scroll down and click install.
>
> **[2:47](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=167)** It's that simple to install as you know from any other module, let's head over to structure.
>
> **[2:52](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=172)** Content types and articles and manage display.
>
> **[2:58](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=178)** You'll now scroll down and see an option for Layout Builder in our site.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1), default. (1), module (1)
> **UI Navigation:** click on (2), scroll down (2), drag and drop (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** install (2)
> **CLI Commands:** find (1)
> **Speakers:** - one (1)

#### Managing the layout for the article content type
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=3)** - In this video, we're going to start updating our layouts for our various content types.
>
> **[0:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=8)** Unfortunately, once I started doing this in the Breeze theme I found a couple of bugs.
>
> **[0:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=14)** So until those bugs are corrected, this next set of videos we're going to switch back to the Bartik theme and then we'll switch back to Breeze in an upcoming video.
>
> **[0:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=24)** Once those bugs are fixed I'll replace these videos using the Breeze theme.
>
> **[0:29](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=29)** So please click on appearance, and we're going to set Bartik as our default again.
>
> **[0:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=37)** Now the nice thing is with layout builder and our theme, it doesn't matter that we're doing layouts in Bartik because they're still going to work in Breeze.
>
> **[0:45](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=45)** Once Breeze gets fixed and over to structure, content types, article and manage display.
>
> **[0:53](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=53)** You remember we have three displays, default, RSS and teaser, head down to custom display settings and put a check Mark in full content.
>
> **[1:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=62)** This is going to enable us to create a display when we're actually looking at a node in the full content display and click save.
>
> **[1:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=73)** Now we have default full content, RSS and teaser.
>
> **[1:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=76)** If we click on teaser, you'll notice that this is the standard look and feel and it works quite well for our article node.
>
> **[1:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=83)** So we're going to leave that the way it is.
>
> **[1:27](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=87)** However, go ahead and click on full content and scroll down and click use layout builder and allow each content item to have its layout customized.
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=98)** This will allow a content editor to update the layout for an individual node of the article content type, which is really powerful.
>
> **[1:47](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=107)** Go ahead and click save, and now click manage layout.
>
> **[1:55](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=115)** So, if I put a check Mark in show content preview this is what it's going to look like.
>
> **[2:00](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=120)** The article type is of the top, that image, the body, our links field, our keywords, our video field and our PDF field or our document field.
>
> **[2:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=134)** So, I usually do this with content preview turned off because to be honest, it just gets a little confusing and a little difficult to manage.
>
> **[2:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=145)** We're going to create a quick layout here with the image, the article type, article keywords and image in a left-hand block, and the body in a right-hand block, and the video and the files below.
>
> **[2:41](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=161)** So there are two parts to lay out builder, sections and blocks.
>
> **[2:49](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=169)** Go ahead and click add section and you'll note you can do a one column, two column, three column or four column section, click on two column and you can split that by 50 50, 33 67, 67 33, 25 75 or 75 25.
>
> **[3:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=187)** Let's go ahead and put it 33 67.
>
> **[3:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=191)** And let's call this top section not very descriptive, click add section and you'll see a representation of the 33% and the 66%.
>
> **[3:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=204)** All right, go ahead and click add block and you'll note you have access to everything.
>
> **[3:30](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=210)** Triple nos, including all the views you've created, all of user fields, everything.
>
> **[3:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=216)** Now there's a module that will restrict what you see here.
>
> **[3:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=219)** And we'll cover that in just a little bit.
>
> **[3:41](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=221)** All right, I said we were going to put the article type the article keywords and the image in the left field.
>
> **[3:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=228)** So, find article type, we can display the title if we want, we can put a label in there, I'm going to make it in line.
>
> **[4:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=243)** And we can say rendered entity, entity ID, or label we'll leave it at the label.
>
> **[4:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=249)** And we'll link the label to the reference entity which gives us our taxonomy landing pages, click add block.
>
> **[4:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=258)** Now, another way to do this of course is to just click and drag.
>
> **[4:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=261)** So I'm going to click on article keywords and drag that under our type field.
>
> **[4:29](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=269)** Oops, there we go.
>
> **[4:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=271)** Of course, as you just noticed, you can rearrange as well.
>
> **[4:34](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=274)** Now I'm going to drag the image field up and drag it back down, and then I'm going to drag the body over to the right-hand side.
>
> **[4:45](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=285)** Of course, we could have clicked add block and selected any field in our content type that we wanted.
>
> **[4:54](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=294)** Now, let's remove article type field because we don't need it anymore.
>
> **[4:59](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=299)** Hover on the right-hand side, click on the pencil and click remove block, click remove, and it's gone.
>
> **[5:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=308)** Let's drag our links below.
>
> **[5:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=313)** So, now we have video files, links and comments.
>
> **[5:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=318)** That's good enough for now.
>
> **[5:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=319)** Let's go ahead and save our layout and click on the home button and click one of our article nodes.
>
> **[5:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=331)** And now you'll see how this works.
>
> **[5:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=333)** So article type, article keywords, the body field, our video field and our downloadable PDFs.
>
> **[5:41](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=341)** So we've got a bit of an issue here.
>
> **[5:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=342)** We really don't know what the name of those is.
>
> **[5:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=346)** So let's go ahead and fix that layout.
>
> **[5:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=348)** Now, if I click layout here, I'm going to edit the layout for just this node, which I don't want to do.
>
> **[5:54](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=354)** So I'll go back to structure, content types, article and manage display.
>
> **[6:00](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=360)** Make sure you click on full content and click manage layout.
>
> **[6:06](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=366)** So we scrolling down, let's go ahead and fix those file field, click on the pencil and click configure, for the format go ahead and choose rendered entity.
>
> **[6:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=376)** This is going to print out the name of the PDF and the view mode is full content.
>
> **[6:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=383)** That's going to give us a link to the PDF with a little icon next to it.
>
> **[6:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=388)** Click update, scroll up and click save.
>
> **[6:34](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=394)** Head back to your site.
>
> **[6:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=397)** And now we've got our PDFs looking a little bit better.
>
> **[6:43](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=403)** If I click on it, it's going to load it in my browser.
>
> **[6:47](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=407)** Now of course, with Bartik, our text isn't exactly great.
>
> **[6:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=411)** But if I switch back to Breeze and go back to my site, you're going to notice that my lab builder layout is still intact.
>
> **[7:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=423)** Now the image is bit of a mess, but nonetheless we can fix that up.
>
> **[7:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=427)** So if I switched back to Bartik, and go back to my site, again, nothing is wrong with my layout.
>
> **[7:17](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=437)** It's exactly the way it should be.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), type, (4), switch (3), default, (1), module (1)
> **UI Navigation:** click on (10), scroll down (1), scroll up (1)
> **CLI Commands:** node (4), make (2), find (1)
> **Env Vars:** pdf (3), rss (2)
> **Cross-References:** go back to (3)
> **Prerequisites:** configure (1)
> **Speakers:** - in (1)

#### Managing the layout for the business directory
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=3)** - [Instructor] Let's go ahead and update the layout for our business directory.
>
> **[0:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=8)** Go to structure, content types, business directory, and manage display.
>
> **[0:15](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=15)** Now you remember we have a default and a teaser mode.
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=18)** Let's go ahead and add the full content display again.
>
> **[0:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=23)** Click save.
>
> **[0:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=26)** And now we have default full and teaser.
>
> **[0:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=28)** Let's go ahead and update the full content display, and go ahead and click use layout builder.
>
> **[0:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=35)** This time we won't allow an editor to update a node on the fly.
>
> **[0:40](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=40)** Every business is going to look exactly the same.
>
> **[0:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=44)** Click save.
>
> **[0:47](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=47)** And click manage layout.
>
> **[0:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=51)** Now once again, layout builder puts all of the fields into one section, and we can add sections above and sections below, and any blocks we want.
>
> **[1:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=62)** In this layout, I want to put the business logo on the left, the address, website, phone and category on the right.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=70)** Then I want to put the description in the rest of the fields.
>
> **[1:15](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=75)** So, once again, click add section, and let's again choose a two column layout.
>
> **[1:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=81)** You can choose any column layout you want here.
>
> **[1:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=83)** This is going to again be 33 67, and this is going to be the top logo and taxonomy fields.
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=99)** Again, nobody will ever see that, it just helps us to remember what's supposed to go in here.
>
> **[1:43](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=103)** All right, let's add the logo.
>
> **[1:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=106)** Once again, I can just click and drag, or I can click add block.
>
> **[1:55](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=115)** Let's go ahead and get the business category.
>
> **[2:00](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=120)** We'll put it in line.
>
> **[2:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=122)** And we'll link the label to the reference entity.
>
> **[2:06](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=126)** Let's add block.
>
> **[2:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=129)** Let's put the business address.
>
> **[2:12](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=132)** We'll hide the label.
>
> **[2:15](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=135)** And we'll make a Google map out of it.
>
> **[2:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=139)** Once again, all of the settings we had for the simple G map module are now here.
>
> **[2:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=145)** We'll leave it at 200 by 200.
>
> **[2:27](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=147)** We'll test this out a little bit.
>
> **[2:30](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=150)** We'll include a link to the map, and we'll include the original address link.
>
> **[2:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=155)** Click add block.
>
> **[2:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=157)** Now, as you're planning out and working on your layouts, things can change.
>
> **[2:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=162)** It's easy to click save, go back to site, find a business, and take a look at the layout.
>
> **[2:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=171)** So we have an issue here with the business map we need to fix.
>
> **[2:53](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=173)** You'll also note there's no layout button here because we're not allowing editors to update the layout for a node in the business directory content type, one at a time.
>
> **[3:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=185)** So I'm going to head back to structure, content types, business directory, and manage display.
>
> **[3:12](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=192)** Click on full content, and click manage layout.
>
> **[3:17](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=197)** So now we discovered that we've got a problem with our address field.
>
> **[3:20](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=200)** Let's take a look at that.
>
> **[3:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=201)** You can click on the pencil, and click configure.
>
> **[3:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=206)** And we forgot to embed the map.
>
> **[3:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=208)** Let's include the embedded dynamic map, which doesn't require the Google API.
>
> **[3:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=215)** Scroll down and click update, and save, and let's go back to our site, and there's our Google map.
>
> **[3:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=224)** Now, it's important at this point to take a look at it on our actual theme, because this width is obviously going to change.
>
> **[3:53](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=233)** We'll do that later, but as you can see, it's quite simple to update.
>
> **[3:58](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=238)** All right, there's the body.
>
> **[4:00](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=240)** We need to get rid of the business address, and we can add the website maybe underneath the logo, and the business phone under the address.
>
> **[4:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=249)** We'll move the category up, and then we'll leave the video and the files below the body, because the body of course can get pretty long.
>
> **[4:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=259)** All right.
>
> **[4:20](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=260)** Structure, content types, business directory and manage display.
>
> **[4:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=265)** Now the other way to handle this is of course have two browser windows open, and you can go back and forth.
>
> **[4:30](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=270)** So I'm going to click on full content, and manage layout.
>
> **[4:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=275)** Because when you click save, well, it's instantly updated, so let's do that this time.
>
> **[4:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=279)** I'm going to click and drag the business website up under the logo.
>
> **[4:45](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=285)** I'm not quite sure why it keeps popping up to the topic.
>
> **[4:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=288)** It's easy to drag down, and I'll drag the phone field.
>
> **[4:52](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=292)** There we go, we can drag that back down.
>
> **[4:55](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=295)** Here's the business description field.
>
> **[4:57](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=297)** We'll just remove the address field.
>
> **[5:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=302)** Because of course, it's up top.
>
> **[5:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=305)** We'll leave the description.
>
> **[5:06](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=306)** We said we'd move the category up.
>
> **[5:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=309)** And then again, drag it down.
>
> **[5:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=314)** Then we have our video, and our files.
>
> **[5:17](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=317)** So once again, I'm just going to click save, and head over to another browser and take a look at what I've done.
>
> **[5:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=324)** So, let's get rid of the labels of course, it's kind of obvious what those are.
>
> **[5:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=328)** We'll leave the business category label, but we'll get rid of the business video label, and the business files label.
>
> **[5:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=335)** So again, switching back over, click manage layout, and let's update.
>
> **[5:41](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=341)** So, it's pretty obvious what the business website is, so we will hide the label, and we can open the link in a new window because it's leaving our site.
>
> **[5:53](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=353)** Now this is really interesting.
>
> **[5:55](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=355)** A layout builder gives you the ability to open the link in a new window, but the actual link field doesn't give us that ability without an additional module.
>
> **[6:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=363)** So that's terrific.
>
> **[6:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=365)** I'm going to click update.
>
> **[6:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=367)** In the business phone field, I'm going to remove the label as well, because it's pretty obvious what a phone is, and click update.
>
> **[6:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=376)** Now if I click save now.
>
> **[6:20](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=380)** There we go, that's looking a lot better.
>
> **[6:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=384)** And of course I can play with these settings to even out these columns.
>
> **[6:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=388)** There's my business category.
>
> **[6:29](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=389)** Now let's go ahead and do the business video and business file labels.
>
> **[6:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=393)** Once again, it's just a matter of clicking configure, and hiding the label, and clicking configure, and hiding the label.
>
> **[6:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=410)** Save layout.
>
> **[6:52](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=412)** Hit refresh, and there you have it.
>
> **[6:58](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=418)** Now, just to check in our actual theme, and again, I'll just remind you, we discovered a bit of a bug, so we needed to switch back.
>
> **[7:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=427)** I'm going to click breeze and set it as default and go back to site.
>
> **[7:10](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=430)** And once again, you'll notice that our logo, our map, all of the information is there.
>
> **[7:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=436)** Nothing has changed with our actual layout, just the formatting of some of the elements.
>
> **[7:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=442)** Layout builder is amazing.
>
> **[7:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=444)** Literally can save you thousands of dollars when you don't have to create custom template overrides with a themer to lay your content out any way you want.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), module (2), type, (1), require (1), switch (1)
> **UI Navigation:** click on (3), open the (2), go to (1), scroll down (1)
> **CLI Commands:** node (2), make (1), find (1)
> **Cross-References:** go back to (3)
> **Prerequisites:** configure (3)
> **Env Vars:** api (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Adding a custom block in the layout builder
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=3)** - [Narrator] If you're picking this up from the previous video, leave Breeze as your current theme.
>
> **[0:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=8)** If you're still on Bartik, go ahead and change it to Breeze.
>
> **[0:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=11)** Because as you might recall, we put a custom block, on our OSTraining page called OSTraining deal of the week.
>
> **[0:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=19)** This isn't on Bartik yet, it's only been placed when we're using the Breeze theme.
>
> **[0:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=24)** Alright.
>
> **[0:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=25)** What we want to do then is instead of having it in the block, we want to have it in our layout, for our OSTraining Business Directory.
>
> **[0:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=36)** Alright.
>
> **[0:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=37)** To make this work, we've got to do a couple of things.
>
> **[0:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=39)** Let's put our theme back to Bartik.
>
> **[0:43](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=43)** We're going to update the layout builder here, so a content editor can edit and node individually in the Business Directory content type.
>
> **[0:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=51)** So we can add this PDF deal of the week right into the content area for our node.
>
> **[0:58](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=58)** Alright, so appearance, once again back to Bartik, click on structure, content types and Business Directory and manage display click on Full content and put a check Mark in allow each content item to have its layout customized, click save.
>
> **[1:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=78)** Alright, and that's all we need to do.
>
> **[1:20](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=80)** Now go back to our site and you'll notice that there's a new layout tab here for OSTraining, click layout, and you're going to get a notice here.
>
> **[1:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=91)** You're editing the layout for the Business Directory content item.
>
> **[1:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=95)** Edit the template for all Business Directory content items instead.
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=99)** You'll want to be very careful here.
>
> **[1:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=102)** That said, it's really easy to add this custom block into our layout.
>
> **[1:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=108)** Let's put it beneath the phone field click add block and scroll down to Custom blocks.
>
> **[1:57](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=117)** There's the OSTraining deal of the week.
>
> **[2:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=123)** Go ahead and add block and click save.
>
> **[2:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=133)** And there it is.
>
> **[2:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=134)** OSTraining deal of the week.
>
> **[2:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=136)** Download the PDF to get the deal of the week.
>
> **[2:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=139)** So it's that simple to add previously built custom blocks, into your custom layout.
>
> **[2:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=146)** In the next video, we're going to talk about how to build landing pages using nothing but custom blocks and layout builder.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2), make (1)
> **Code Keywords:** let (2), type. (1)
> **Cross-References:** previous video (1), go back to (1), in the next (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Env Vars:** pdf (2)
> **Exercise Files:** template (1), download the (1)
> **Speakers:** - [narrator] (1)

#### Creating landing pages
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=3)** - [Instructor] In this video, I want to show you how to make really custom landing pages in your Drupal website using layout builder.
>
> **[0:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=11)** Let's create a landing page content type, go to structure, content types and add content type.
>
> **[0:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=19)** We're going to call this landing page.
>
> **[0:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=25)** Let's not promote it to the front page.
>
> **[0:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=28)** Let's not show display author information.
>
> **[0:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=31)** We'll leave the menu settings because typically you want to add a landing page to your menu.
>
> **[0:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=36)** So we'll leave this one this time, and we won't enable scheduler.
>
> **[0:41](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=41)** Go ahead and click save and manage fields.
>
> **[0:47](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=47)** And that's it.
>
> **[0:49](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=49)** All right, go ahead and click on content, add content and landing page.
>
> **[0:55](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=55)** Let's give it a name, just call it test landing page, and that's all you need to do.
>
> **[1:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=62)** Add a menu setting to it.
>
> **[1:04](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=64)** Let's give it a weight of 20 so it's at the bottom, and click save.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=70)** Now we have nothing in here yet.
>
> **[1:12](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=72)** The next step is to turn on layout builder for landing pages.
>
> **[1:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=76)** So structure, content types, landing page and manage display.
>
> **[1:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=85)** We'll leave it in the default mode, turn layout builder on and allow each content item to have its layout customized.
>
> **[1:32](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=92)** Click save.
>
> **[1:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=95)** All right, let's head back to our test landing page.
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=98)** Click content and click on the test landing page, and click layout.
>
> **[1:45](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=105)** Now, you'll get a note you're editing the layout for this landing page, and that's the key, don't edit the layout for all the landing pages unless you just want to add some common elements, treat each one as an individual landing page.
>
> **[1:59](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=119)** So as you see, the links field and the body field are already given to us.
>
> **[2:04](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=124)** Let's just go ahead and remove the body field completely.
>
> **[2:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=129)** And let's add a block.
>
> **[2:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=131)** And now, as you know, we have content fields, and all of the custom blocks we've already created.
>
> **[2:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=138)** And once we get to views, all of the views will be listed here as well.
>
> **[2:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=142)** But at the top, we have create custom block.
>
> **[2:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=145)** Go ahead and click in there.
>
> **[2:27](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=147)** And you'll remember the three column media block we added earlier, as well as the basic block we have.
>
> **[2:34](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=154)** Let's go ahead and add a basic block, and let's just call this top block.
>
> **[2:40](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=160)** But we won't display the title.
>
> **[2:43](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=163)** And now we're free to put anything in here that we want.
>
> **[2:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=168)** This is the top block, and I'm going to make that a heading too.
>
> **[2:56](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=176)** Some more text.
>
> **[3:00](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=180)** Et cetera, et cetera.
>
> **[3:01](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=181)** I can embed a video.
>
> **[3:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=182)** I can embed an image, anything I want there.
>
> **[3:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=185)** Click add block.
>
> **[3:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=188)** And drag it above the links field.
>
> **[3:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=191)** All right, let's add another block.
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=194)** Create custom block, and let's choose the three column media block.
>
> **[3:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=199)** We'll give it a title because it's required, three column media.
>
> **[3:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=205)** We won't display the title and we won't display the body.
>
> **[3:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=208)** We get to add three media items here.
>
> **[3:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=211)** So we'll say add media, choose remote video, and insert.
>
> **[3:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=218)** Add media, choose remote video, and this time we can just choose two more, and click insert selected.
>
> **[3:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=226)** You'll notice now we have the maximum number of media items have been selected.
>
> **[3:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=230)** All right, click add block.
>
> **[3:53](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=233)** Now, this is going to be a one column block.
>
> **[3:56](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=236)** The videos are going to be in a single column.
>
> **[4:00](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=240)** We need to update our CSS to fix that, and we'll do that later.
>
> **[4:04](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=244)** Let's say we added a whole bunch of blocks here.
>
> **[4:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=247)** Click save layout.
>
> **[4:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=248)** And here's our test landing page.
>
> **[4:15](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=255)** There's the top block.
>
> **[4:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=256)** There's our three column media block, which again we would need to hide that label.
>
> **[4:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=262)** Let's get rid of these blocks, but before we do, let's update the URL here.
>
> **[4:29](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=269)** And let's just say, test landing page.
>
> **[4:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=275)** And click save.
>
> **[4:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=279)** And now my URL is test dash landing dash page.
>
> **[4:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=282)** All right, let's update our block.
>
> **[4:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=284)** Click configure block, pages, hide for the listed pages, slash test landing page.
>
> **[4:55](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=295)** Click save, and it's gone.
>
> **[4:58](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=298)** Let's get rid of the search bar.
>
> **[5:01](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=301)** Pages, hide, test landing page, and of course, you can list all of your landing pages here as you build them.
>
> **[5:10](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=310)** Click save block, and the tools menu.
>
> **[5:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=313)** Configure, pages, hide,
>
> **[5:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=322)** test landing page and save.
>
> **[5:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=324)** And now you'll see our landing page covers the entire width of the content area.
>
> **[5:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=333)** And then by adding some simple CSS, we can float these to the left, make them in line and responsive.
>
> **[5:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=339)** And I'll show you that code in a later video as we finish up the course.
>
> **[5:43](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=343)** But being able to create landing pages based on your custom blocks is really tremendous.
>
> **[5:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=350)** Let me show you an example of one website that's done this incredibly well.
>
> **[5:55](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=355)** This is the Orange County Public Library site.
>
> **[5:58](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=358)** This is a Drupal site of course, and they are using layout builder with a whole bunch of custom block types with a fair amount of CSS included of course.
>
> **[6:10](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=370)** But this is nothing more than what we just did with custom blocks.
>
> **[6:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=374)** And so by adding custom block types, creating custom blocks on the fly, and then obviously adding a ton of CSS, you can really use layout builder to build fantastic landing pages with any kind of elements that you want.
>
> **[6:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=393)** Now that we're done with layout builder, it's probably a good time to switch back to the breeze theme.
>
> **[6:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=397)** Once again, once this bug is fixed in the breeze theme, I'll be rerecording these videos and replacing these current ones.
>
> **[6:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=404)** Thanks for hanging in with me while we worked around this little bug.
>
> **[6:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=408)** So, appearance, and set breeze as your default.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), type, (1), type. (1), public (1), switch (1)
> **Env Vars:** css (4), url (2)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (2), go to (1)
> **Prerequisites:** configure (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Views Explained

> [↑ Back to Table of Contents](#table-of-contents)

#### Views explained
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=3)** - One of the most essential tools you have in Drupal.
>
> **[0:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=7)** Once you have your content in, is the ability to create multiple displays and get your content out unless a node has a menu connected to it.
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=18)** So a user can click and go to that page or that node you'll need something along the lines of views to help people find your content.
>
> **[0:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=28)** Views allows you to create massive queries into the dribble database without ever touching a line of code.
>
> **[0:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=36)** Views filters to limit selections, views can be static or contextual, and we'll do some of each, and views always gives you a preview at the bottom of the page.
>
> **[0:49](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=49)** We have five main questions we ask when we start talking about a view.
>
> **[0:54](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=54)** What's the display?
>
> **[0:56](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=56)** A display can be a page, a block or more.
>
> **[0:59](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=59)** What's the format?
>
> **[1:00](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=60)** Is it a list?
>
> **[1:01](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=61)** Is it a table?
>
> **[1:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=62)** Is it a grid?
>
> **[1:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=63)** Is it a calendar?
>
> **[1:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=65)** Fields, what fields will be displayed in this particular view?
>
> **[1:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=71)** Filter, how will we filter this?
>
> **[1:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=74)** Is it published content out of a particular content type, and how will we sort it.
>
> **[1:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=79)** So five questions, display, format, fields, filter, and sort, we'll ask those five questions, with every view we build.
>
> **[1:29](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=89)** In the next set of videos we're going to create a number of views.
>
> **[1:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=93)** We're going to create our latest news view.
>
> **[1:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=95)** This is going to give us our latest six news items for a homepage block.
>
> **[1:41](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=101)** We're going to create a view for the business directory.
>
> **[1:45](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=105)** This is going to be a listing of all of our businesses by title.
>
> **[1:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=108)** The display will be a page, the format is a table, the fields are title, image and body, the filter is published businesses and the sort is alphabetical.
>
> **[2:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=122)** We're also going to create an event calendar and a landing page for all of the latest news.
>
> **[2:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=129)** We're also going to allow visitors to filter the news whether it be news or press releases.
>
> **[2:15](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=135)** And finally, when we're on a business page we're going to create a view that automatically goes out and gets businesses from the same business category in a context.
>
> **[2:27](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=147)** Alright, so we have a lot of work to do.
>
> **[2:29](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=149)** Let's get at it.

> [!info]- Semantic Content
>
> **Code Keywords:** static (1), type, (1), finally, (1), let (1)
> **CLI Commands:** node (2), find (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - one (1)

#### Adding the business directory view
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=3)** - [Instructor] With that introduction to views.
>
> **[0:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=5)** We've got a few really great views that we can create.
>
> **[0:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=8)** And as I mentioned, it's amazingly easy to create landing pages and blocks, with views.
>
> **[0:15](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=15)** All right, structure, views, and add view.
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=18)** In this video we're going to add a view that gives us a listing for the business directory.
>
> **[0:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=23)** So we're going to call this Business Directory.
>
> **[0:30](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=30)** We're going to view the content of business directory and we'll do it by title, that makes a little bit of sense doesn't it?
>
> **[0:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=36)** We'll create a page.
>
> **[0:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=38)** And in this case we'll keep it at a formatted list of teasers.
>
> **[0:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=44)** We'll leave it at 10 items to display.
>
> **[0:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=46)** We'll use her pager and we'll create a menu link in the main navigation.
>
> **[0:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=51)** All right, let me stop and let you just catch up real quick.
>
> **[0:54](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=54)** It's a business directory, content of type business directory sorted by title.
>
> **[1:00](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=60)** We'll create a page.
>
> **[1:01](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=61)** It's going to be an unformatted list of teasers 10 items to display at a time.
>
> **[1:06](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=66)** You can make that a hundred if you'd like.
>
> **[1:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=69)** Use a pager which means page one of three, two, three, three of three.
>
> **[1:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=73)** And of course create a menu link in our main navigation.
>
> **[1:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=76)** And the link text is business directory.
>
> **[1:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=79)** All right, click save and edit.
>
> **[1:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=84)** And let's just take a quick peak at our five questions.
>
> **[1:27](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=87)** The display is a page.
>
> **[1:29](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=89)** The format is an unformatted list of teasers as we know.
>
> **[1:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=93)** We won't be displaying any field because teasers are pre-built for us.
>
> **[1:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=97)** The filter criteria are published business directories and the sort is title ascending.
>
> **[1:43](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=103)** If you scroll down, you'll see a preview.
>
> **[1:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=106)** So we do have a bit of work to do here with the teaser mode.
>
> **[1:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=111)** We probably want to have the logo and we probably want to shorten up this body.
>
> **[1:56](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=116)** We can do that right now.
>
> **[1:58](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=118)** Go ahead and click save.
>
> **[2:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=122)** And we already know how to do this.
>
> **[2:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=123)** Go to structure, content types, business directory and manage display.
>
> **[2:10](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=130)** Click on teaser.
>
> **[2:12](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=132)** And you'll see all we have here is linked description.
>
> **[2:15](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=135)** Now we can just simply click and drag these fields up but the problem is the image won't wrap.
>
> **[2:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=141)** Let's just try it and you'll see what I mean.
>
> **[2:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=144)** Grab business logo and drag it above description.
>
> **[2:29](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=149)** Hide the label and change original image to thumbnail.
>
> **[2:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=159)** That's going to make a nice little thumbnail on the left-hand side.
>
> **[2:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=164)** We'll link the image to content.
>
> **[2:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=166)** Since it's a teaser mode and click update let's update how many characters can be in the description.
>
> **[2:55](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=175)** Let's change this to trimmed because what happened was devel inserted a whole bunch of stuff into the summary.
>
> **[3:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=183)** We typically wouldn't do that, but this way it's going to be Bulletproof.
>
> **[3:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=187)** We'll limit it to 600 characters scroll down and click save.
>
> **[3:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=193)** Now let's take a look and see what we did.
>
> **[3:15](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=195)** Go back to site, click on business directory and here's our business directory.
>
> **[3:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=203)** Whoa, you can see, we have some problems still.
>
> **[3:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=205)** Our link is above, we probably want that below and our image isn't floated to the left.
>
> **[3:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=211)** We can easily fix this with some CSS or we can use layout builder.
>
> **[3:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=217)** Go back to structure, content types, business directory and manage display.
>
> **[3:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=224)** Click on teaser.
>
> **[3:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=228)** And you'll note again, links, logo, and description.
>
> **[3:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=230)** Again if I drag links down that read more link would now be below, which is good we want that.
>
> **[3:56](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=236)** Without having access to the CSS in our theme, it's better to use layout builder.
>
> **[4:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=242)** So click use layout, builder, and click save, manage layout.
>
> **[4:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=249)** We're going to have a bit of an issue here with our theme but we can manage for now click add section choose a two column layout and you'll see the problem we're having with the theme.
>
> **[4:20](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=260)** We'll update this video once the theme is fixed.
>
> **[4:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=263)** I'm going to change that to 2575, click add section.
>
> **[4:29](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=269)** And then I'm going to add the logo click add block, business logo.
>
> **[4:34](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=274)** Let's hide the logo.
>
> **[4:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=277)** Let's change that to the media library thumbnail that's built in.
>
> **[4:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=282)** And we'll link that to the content click add block.
>
> **[4:47](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=287)** Click add block here and let's grab the business description.
>
> **[4:53](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=293)** We'll hide the label and we'll change that to trimmed.
>
> **[4:56](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=296)** Once again, leaving it at 600 characters, click add block and then we'll add the links field click add block and add block.
>
> **[5:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=311)** Then we just have to delete the second section and click remove.
>
> **[5:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=316)** All right, go ahead and click save layout and back to site.
>
> **[5:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=322)** And there we have it.
>
> **[5:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=323)** We have a logo, the body and the button with the title above.
>
> **[5:29](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=329)** Now you'll notice here we've got some padding issues.
>
> **[5:32](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=332)** That's all right we're going to fix that later on.
>
> **[5:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=335)** When we add some CSS to our site using another module but it's that simple to create a business directory using views.
>
> **[5:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=344)** No matter how many businesses we add to our business directory, this will always be up to date listed in alphabetical order ready to go for our visitors to find the business in drupalVille that they need.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this. (1), delete (1), module (1)
> **UI Navigation:** click on (3), scroll down (2), go to (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** css (3)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1), is an  (1)
> **Code Identifiers:** drupalville (1)
> **Speakers:** - [instructor] (1)

#### Adding the news and press release view
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=3)** - [Instructor] The next view we want to add is a listing of all of the most recent news in our Drupal website.
>
> **[0:10](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=10)** So, head over to Structure, Views and Add View and let's call this, Latest News.
>
> **[0:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=19)** We'll show content of type article because that's what we're using for our news.
>
> **[0:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=24)** And we'll show the newest first.
>
> **[0:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=26)** Once again, create a page.
>
> **[0:29](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=29)** Once again, we'll leave it at an unformatted list of teasers.
>
> **[0:34](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=34)** We'll use a pager.
>
> **[0:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=35)** We'll create a menu link again under our main navigation and click Save and Edit.
>
> **[0:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=44)** Scroll down and see your preview.
>
> **[0:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=46)** And once again, our teaser mode with Drupal has created a summary text here, that's really a mess.
>
> **[0:53](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=53)** So, we could change the teaser or we can just change this to show a set of fields.
>
> **[0:58](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=58)** Let's do that instead.
>
> **[1:00](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=60)** Click on Formatted List and choose Table.
>
> **[1:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=65)** Click Apply and click Apply.
>
> **[1:12](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=72)** By default, as soon as you change it to table, Drupal adds the title field to the fields area.
>
> **[1:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=78)** So, now we have a set of titles.
>
> **[1:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=81)** So, the display is a page.
>
> **[1:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=84)** The title is latest news.
>
> **[1:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=86)** The format is a table and our fields need to be updated but our filter is correct and our sort is correct.
>
> **[1:34](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=94)** On the fields line, click Add and we're going to add an image and the body.
>
> **[1:41](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=101)** So, type image.
>
> **[1:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=104)** And I know it says business logo but that's okay.
>
> **[1:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=106)** It appears in the article.
>
> **[1:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=108)** That's what we want.
>
> **[1:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=111)** Now, back up in the search, type, body and put a check mark in body.
>
> **[1:56](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=116)** This is going to allow us to add two fields at once.
>
> **[1:59](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=119)** Go ahead and click Add and Configure Fields.
>
> **[2:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=122)** Now, it's going to ask us to configure the body field first.
>
> **[2:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=125)** We don't need a label.
>
> **[2:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=129)** And change the formatter to trimmed to 400 characters.
>
> **[2:15](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=135)** Click Apply and Continue.
>
> **[2:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=139)** Now, let's update our image.
>
> **[2:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=141)** We don't obviously need a label for that and let's use our thumbnail.
>
> **[2:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=148)** We'll link to the content once again and click Apply.
>
> **[2:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=153)** Now, let's scroll down and see what we've done.
>
> **[2:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=155)** You'll see we have the title and intro to the body and the news image field that is in a thumbnail format.
>
> **[2:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=164)** We're going to talk about image styles in a little bit.
>
> **[2:47](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=167)** Now, to make this work, we need to do some quick changes here.
>
> **[2:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=170)** Let's go ahead and put the image under the title.
>
> **[2:54](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=174)** Next to the word format, click on the word settings for the table and let's put the business logo in the content column and that's going to automatically insert the image below the title.
>
> **[3:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=189)** Click Apply, take a look and there we go.
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=194)** That's looking a whole lot better.
>
> **[3:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=199)** Click Save.
>
> **[3:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=203)** And let's go back to our site and click on Latest News.
>
> **[3:29](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=209)** Now, you'll remember latest news is being used for two things.
>
> **[3:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=213)** In the next video, we're going to add a filter that's going to allow our site visitors to switch between news and press reports.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (1), default, (1), type, (1), continue (1)
> **UI Navigation:** click on (3), scroll down (2)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1), in the next (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Exposing filters for visitor interaction
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=3)** - In this video, I want to accomplish two things in our latest news, view.
>
> **[0:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=8)** One.
>
> **[0:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=9)** I want to make the titles into an H3 tag.
>
> **[0:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=11)** Which is a little tricky because they're actually in a table.
>
> **[0:15](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=15)** And secondly, I want to expose the filter to our visitors, that says, "hey go ahead and choose between news and press releases."
>
> **[0:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=24)** Alright, let's do that.
>
> **[0:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=25)** Click on the pencil icon for the view.
>
> **[0:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=28)** Click edit view.
>
> **[0:30](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=30)** And let's take care of the title first.
>
> **[0:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=33)** Click on the word content:title.
>
> **[0:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=35)** Now with views, there's a little bit to learn here.
>
> **[0:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=38)** If I click on style settings and customize the field HTML.
>
> **[0:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=42)** You would think that changing this to an H3, would work and typically it does, but it doesn't in this particular theme.
>
> **[0:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=50)** So there's a way around that.
>
> **[0:52](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=52)** I'm going to uncheck that, and I'm going to click on rewrite results.
>
> **[0:58](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=58)** And this allows us to override the output of this field with custom text.
>
> **[1:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=62)** Put a check mark in there and I want it to be an H3 tag.
>
> **[1:06](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=66)** And you'll notice down here, here's all the tags that I can use, as well as replacement patterns.
>
> **[1:12](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=72)** So I want to make this into an H3, and the replacement pattern I want to use, comes straight out of the twig templating.
>
> **[1:20](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=80)** Now you don't need to know that, except just go ahead and paste that in.
>
> **[1:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=85)** Curly bracket, curly bracket, space title, and then close the curly brackets.
>
> **[1:29](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=89)** And of course close the H3.
>
> **[1:32](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=92)** Scroll down and click apply.
>
> **[1:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=95)** And now my titles are looking pretty good.
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=99)** The second thing I said we wanted to do, is add a filter.
>
> **[1:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=102)** So that people can choose whether they want to see news or press releases.
>
> **[1:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=108)** Well, that's adding a filter.
>
> **[1:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=110)** Click add and type the word type, because our article type taxonomy, has the word type in it.
>
> **[2:01](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=121)** Put a check mark in there.
>
> **[2:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=123)** And click add and configure filter criteria.
>
> **[2:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=128)** We'll choose the vocabulary of article type and we'll change it to a dropdown, because it's just two values.
>
> **[2:15](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=135)** Click apply and continue.
>
> **[2:20](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=140)** And now of course this is is one of press release or news.
>
> **[2:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=144)** We want to expose this filter, to visitors to allow them to change it.
>
> **[2:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=148)** And as soon as I put a check mark in there, Drupal shows me a whole bunch more.
>
> **[2:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=153)** And all I need to do right now is update the label.
>
> **[2:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=156)** Select.
>
> **[2:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=159)** Either news or press releases.
>
> **[2:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=166)** I can add a description in here.
>
> **[2:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=168)** The key thing here is the operator is one of news or press release.
>
> **[2:53](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=173)** Click apply.
>
> **[2:55](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=175)** And now you'll notice I can choose either news or press releases.
>
> **[3:00](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=180)** Simple as that.
>
> **[3:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=182)** You can create filters for all of your views, with Drupal, click save.
>
> **[3:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=188)** And now my latest news, can be filtered by press release or news.
>
> **[3:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=196)** And there we are.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), scroll down (1), dropdown (1)
> **Code Keywords:** let (2), override (1), type, (1), continue (1)
> **CLI Commands:** make (2)
> **Env Vars:** html (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - in (1)

#### Adding an events calendar view
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=3)** - [Narrator] In this video we're going to add an event calendar to our Drupalville website.
>
> **[0:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=9)** Of course we have an event content type, we could create a view that just lists the events, but, well, let's add a calendar instead.
>
> **[0:17](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=17)** In order to do this we need a new module.
>
> **[0:20](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=20)** And this happens all the time.
>
> **[0:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=22)** You'll come across a requirement for your site and you'll go, "Hmm, can Drupal to that?"
>
> **[0:27](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=27)** And the answer usually is, "Well, yes, Drupal can do that, and there's a module for that."
>
> **[0:32](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=32)** So I always just search, Drupal calendar module for review.
>
> **[0:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=39)** And the first one that pops up for me is, full calendar view.
>
> **[0:43](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=43)** Now that may not be the one that pops up first for you but that's the one we're going to use.
>
> **[0:47](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=47)** If I click on full calendar view there's an awful lot to this module.
>
> **[0:52](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=52)** Now, the good news is it works in Drupal 9.
>
> **[0:55](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=55)** The other good news is you can download all of the JavaScript libraries to your own site, but if you don't want to, well, it works off of a CDN.
>
> **[1:04](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=64)** So all you actually need is the module itself.
>
> **[1:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=67)** So scroll down and there's a lot going on here.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=70)** I'll let you read this at your leisure.
>
> **[1:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=74)** Go ahead, copy the link address for the zip, or you can install it via composer if you'd like.
>
> **[1:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=81)** And head back to my site, go to extend and install new module, paste and install, and enable.
>
> **[1:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=95)** Now, I find the easiest way to find this kind of thing is just filter via the text field.
>
> **[1:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=102)** Go ahead and enable full calendar view plugin.
>
> **[1:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=111)** Now, as I mentioned, there's just a ton of options with this particular module.
>
> **[1:57](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=117)** We're going to keep it pretty simple.
>
> **[1:58](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=118)** Head over to structure, views and add view.
>
> **[2:04](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=124)** And we're going to call this, event calendar.
>
> **[2:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=128)** We're going to show the type of content of events, we don't need to worry about how we're sorting it, it's going to be sorted for us.
>
> **[2:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=138)** Create a page and on the display settings, you'll note we have a brand new display called full calendar display.
>
> **[2:27](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=147)** Go ahead and choose that, and it's going to automatically be a list of fields.
>
> **[2:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=153)** Now we're going to do an unlimited number of items to display because we don't want to limit it on our calendar.
>
> **[2:40](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=160)** And we won't use a pager, but we will create a menu link in the main navigation to our event calendar and click save and edit.
>
> **[2:49](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=169)** And I'll give you a second to make sure your screen looks like mine.
>
> **[2:52](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=172)** So once again, event calendar, content of type events, creating a page and the display is going to be a full calendar display.
>
> **[3:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=182)** Zero number of items which is unlimited, uncheck use a pager, check, create a menu link and put it in the main navigation.
>
> **[3:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=189)** Click save and edit.
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=194)** Now with this particular view nothing's going to show down here in the preview until we get everything set.
>
> **[3:20](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=200)** So once again, our five questions; display as a page, format is the calendar, fields is the title, we'll need more than that.
>
> **[3:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=208)** Filter is correct and sort is correct.
>
> **[3:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=211)** We need at least two more fields, we need the date field and we need the body field.
>
> **[3:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=216)** Click add next to the word fields and type the word date.
>
> **[3:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=222)** We want to get event date, put check mark in there and click add and configure fields.
>
> **[3:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=231)** Go ahead and change it just to an HTML date, it really doesn't matter at this point because it's going to be in the calendar display anyway.
>
> **[3:58](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=238)** Click apply, click add, type body, add fields, and do the trimmed at 100 characters and click apply.
>
> **[4:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=256)** Now, once again, we're not going to see any preview here yet.
>
> **[4:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=259)** We need to add one more field, click add, and let's look for taxonomy, click add, let's uncheck link this field to term page, and let's limit the terms by vocabulary and choose our event categories.
>
> **[4:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=279)** Click apply, and we need to rearrange this because the body field needs to be last, so click on the down triangle, click rearrange, and move the body to the bottom and click apply.
>
> **[4:53](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=293)** All right, now, finally, let's click on settings next to full calendar display.
>
> **[4:59](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=299)** We need to make sure that the start date field is the event date, that the end date field is none because we don't have an end date, if we did, we could add that in, the title field is title, on the display we'll leave these as the default, these are pretty typical, and change event bundle to events and click apply, click save and here's our calendar.
>
> **[5:30](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=330)** Now you'll notice that I've got three events.
>
> **[5:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=333)** You may need to change the date in some of your events in order for them to show up.
>
> **[5:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=338)** And if I click on one of them it takes me to the node for that event, scroll up and click save.
>
> **[5:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=346)** Let's take a look at that on our site.
>
> **[5:47](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=347)** Back to site, and here's our event calendar.
>
> **[5:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=351)** It's going to take me to the event.
>
> **[5:54](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=354)** I definitely don't like that opening in a new tab, we need to fix that.
>
> **[5:56](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=356)** Let's click on the pencil again and click edit view, and click on settings again for a full calendar display and under display we're going to scroll down and uncheck open entities into new tabs.
>
> **[6:10](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=370)** Go ahead and uncheck that and click apply and save.
>
> **[6:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=376)** Now again, there's a lot more that full calendar can do, but now if I click on the event it takes me to the node.
>
> **[6:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=384)** If I head back over to the event, of course I have the week view and I can scroll through the weeks, and I have a day view.
>
> **[6:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=396)** Terrific.
>
> **[6:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=397)** If we go back to the month view, there it is.
>
> **[6:40](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=400)** So it's really simple to get a terrific calendar into your Drupal website.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), module (7), type, (1), this, (1), finally, (1)
> **UI Navigation:** click on (7), scroll down (2), go to (1), scroll up (1)
> **CLI Commands:** find (2), make (2), node (2), composer (1)
> **Prerequisites:** install (3), configure (1)
> **Env Vars:** cdn (1), html (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)

#### Creating a related content view
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=3)** - [Instructor] In this video, we want to add some functionality to our business directory.
>
> **[0:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=8)** If I go ahead and click on business directory, and click on one of my businesses, you'll remember that we've assigned a business category using a taxonomy.
>
> **[0:17](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=17)** Wouldn't it be great to show all of the other businesses in that same category over here in a block?
>
> **[0:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=25)** And it's called a contextual block.
>
> **[0:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=28)** So the context here is I'm on a node that's in the theming category for my business.
>
> **[0:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=35)** Show me all the other businesses that are also in a theming category.
>
> **[0:40](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=40)** All right, to do this we're going to add a display to our business directory view.
>
> **[0:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=44)** So go to structure and views, and let's edit our business directory.
>
> **[0:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=51)** Now this is a new concept.
>
> **[0:53](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=53)** We have so far built pages.
>
> **[0:56](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=56)** Now we're going to build some blocks.
>
> **[0:58](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=58)** And in this case, a block with an advanced contextual filter, that's going to say, show me all of the businesses that share the same taxonomy.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=70)** All right, to do this, let's start off by creating a block.
>
> **[1:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=73)** Up here on displays, we're going to click add, and we're going to select block.
>
> **[1:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=81)** Now you'll note we've got unsaved changes, we now have two displays.
>
> **[1:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=86)** On the title, let's click on the word business directory, and change for all displays to this block override.
>
> **[1:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=97)** And the title is going to be alternate businesses.
>
> **[1:43](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=103)** Click apply.
>
> **[1:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=106)** Our display is a page.
>
> **[1:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=108)** Our format is an unformatted list of teasers, so let's change that.
>
> **[1:53](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=113)** Click on content, change the display to this block override.
>
> **[1:58](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=118)** Make sure you do that, otherwise we'll really mess up our old view, and change that to fields.
>
> **[2:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=123)** Click apply this display.
>
> **[2:06](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=126)** And click apply.
>
> **[2:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=128)** Now, if you scroll down, you're just going to see a list of titles.
>
> **[2:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=131)** Terrific, that's what we want.
>
> **[2:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=134)** The filter criteria is published businesses and the sort is title ascending.
>
> **[2:20](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=140)** Right, now to make this work, we need to set up the context.
>
> **[2:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=144)** Click on advanced, and click contextual filters, click the add button.
>
> **[2:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=153)** Once again, change all displays for this block override, and search for tax for taxonomy.
>
> **[2:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=162)** We have three options here.
>
> **[2:43](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=163)** Has taxonomy term ID, has taxonomy term ID with depth, which is when you have a multi-level taxonomy that we discussed earlier, and has taxonomy term ID depth modifier, which allows additional contextual filter values to be used to filter your results even further.
>
> **[3:04](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=184)** Because we've only got one taxonomy term allowed for each category, we can use this top one.
>
> **[3:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=191)** Click apply this display.
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=194)** And now we have a couple of things we need to do.
>
> **[3:17](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=197)** We have to figure out how to get the filter value, because it's currently not available.
>
> **[3:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=203)** And then what to do with it when it is.
>
> **[3:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=206)** Now, this is rather involved, so I'm going to go pretty slowly and explain it each step of the way.
>
> **[3:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=211)** Click provide default value, because we need to get the value for the taxonomy term ID.
>
> **[3:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=217)** The type is taxonomy term ID from a URL.
>
> **[3:43](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=223)** Now, you know that the taxonomy term ID is not in the URL.
>
> **[3:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=226)** That's the node ID.
>
> **[3:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=228)** But once Drupal understands the URL, it knows everything about that particular node.
>
> **[3:54](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=234)** So go ahead and choose taxonomy term from URL, and then uncheck the top one and check the second one, load filter from node page that's good for related taxonomy blocks, which is what we're creating.
>
> **[4:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=248)** Change filter to items that share any term, that's for future proofing, and now we're good to go.
>
> **[4:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=256)** Down here at the bottom, when the filter is available, specify the validation criteria.
>
> **[4:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=264)** And the validator, wow, there's a lot going on here, is taxonomy term ID, out of the business categories vocabulary.
>
> **[4:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=278)** It's a single ID, and that's all we need to do.
>
> **[4:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=284)** Click apply this display.
>
> **[4:47](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=287)** Now down here in the preview, everything's gone, because we have no context.
>
> **[4:52](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=292)** All right, go ahead and click save.
>
> **[4:57](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=297)** Now whenever we create a block, we need to, well place the block.
>
> **[5:01](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=301)** So structure, block layout, scroll down to primary,
>
> **[5:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=311)** and let's place the block.
>
> **[5:17](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=317)** We'll look for the business directory block, and click place block.
>
> **[5:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=323)** And we need to restrict it by content type.
>
> **[5:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=326)** Now, think this through with me.
>
> **[5:27](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=327)** If the context is based on the taxonomy term ID from the URL, that means we need to be on a business in order for the block to work.
>
> **[5:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=338)** So we need to restrict it by content type.
>
> **[5:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=342)** It won't show up unless we're actually looking at a business.
>
> **[5:47](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=347)** Click save.
>
> **[5:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=350)** And let's go back to our site.
>
> **[5:53](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=353)** I'm on the Abico business, and you'll see alternate businesses.
>
> **[5:58](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=358)** Abico and Butinum.
>
> **[6:01](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=361)** Well, there's a little bit of a problem here, we shouldn't be seeing Abico, we'll fix that in just a minute.
>
> **[6:06](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=366)** But let's go take a look at another business.
>
> **[6:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=369)** In fact, let's go and find our OS training business, there it is.
>
> **[6:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=374)** OS training is in the training category, and the alternate businesses are Beni Il, Lenise Virtus, OS training and Villet.
>
> **[6:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=381)** Now of course, again, we need to get rid of OS training.
>
> **[6:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=385)** Well, let's go ahead and do that.
>
> **[6:27](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=387)** You can hover here and edit the view.
>
> **[6:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=393)** And to do this, we just add another context.
>
> **[6:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=395)** Now, once again, make sure you're on the block.
>
> **[6:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=397)** It selects it for us automatically.
>
> **[6:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=399)** Click advanced, and add a contextual filter.
>
> **[6:45](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=405)** Now this time, again, this block override, we need to look for ID.
>
> **[6:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=411)** Now, scroll down because we need to get the content ID and exclude it from the display.
>
> **[7:01](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=421)** Click on ID, apply.
>
> **[7:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=428)** When the filter is not available, click provide the default value from, well, this time, the content ID from the URL.
>
> **[7:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=439)** Now this is where Drupal still hasn't fixed some of the UI issues.
>
> **[7:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=443)** You think that now that we've provided the filter, you'd be able to do something here when it is provided.
>
> **[7:29](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=449)** Well, unfortunately not.
>
> **[7:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=451)** Click on more, and click exclude.
>
> **[7:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=455)** That is a little strange, but you'll get used to it.
>
> **[7:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=457)** Click apply this display, and save.
>
> **[7:43](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=463)** Now, if I've gone a little too quickly through this video, remember you can pause and rewind.
>
> **[7:49](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=469)** The good thing is we're on the training category and OS training no longer shows up in the alternate business block for my view.
>
> **[7:59](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=479)** Terrific, think this through for a minute, you can have news items that share a similar taxonomy for related news, if I'm looking at an event in one category, I can have a listing of all the events in other categories.
>
> **[8:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=493)** And they all work exactly the same way, because we used a taxonomy in order to create those categories and that's really the key.
>
> **[8:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=503)** If I click on training, once again, all of my training nodes are here.
>
> **[8:29](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=509)** I have four nodes.
>
> **[8:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=511)** When I click on one, there are the other three listed.
>
> **[8:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=516)** Terrific.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), override (4), this, (2), type. (2), case, (1)
> **UI Navigation:** click on (9), scroll down (3), go to (1)
> **CLI Commands:** node (4), make (3), find (1)
> **Env Vars:** url (6)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** we discussed (1), go back to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Image styles explained
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=3)** - [Instructor] In this video I want to talk to you about image styles.
>
> **[0:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=5)** Now this is a topic that's pretty near and dear to my heart, since I live in the rural Midwest, where my download speed from my internet provider is four meg and my upload is 0.4.
>
> **[0:17](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=17)** Yes for those living in a city, you heard me correctly four meg down and 0.4 up.
>
> **[0:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=25)** So when you upload three and four megabyte images to your website and don't take care of them using image styles, guess what I'm doing when I hit your landing page? I'm leaving.
>
> **[0:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=38)** So image styles are actually really important.
>
> **[0:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=42)** Because our theme does some really neat things with images we're going to switch back to Bartik to demonstrate this principle.
>
> **[0:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=48)** So I head over to appearance and make Bartik your default theme again please and then go back to structure, content types, business directory and manage display.
>
> **[1:04](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=64)** Click on teaser and uncheck use layout builder and click save.
>
> **[1:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=71)** So this is going to give us the basic built-in teaser mode for our business directory and here we are.
>
> **[1:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=79)** You'll remember from past videos that we have the ability to change the size of any image that we have on our site.
>
> **[1:27](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=87)** Click on the gear here and yours might be thumbnail or it might be medium at this point.
>
> **[1:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=93)** Go ahead and change it to none or original image so we can prove the point.
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=98)** Click update and click save.
>
> **[1:43](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=103)** Now go back to your site and click on business directory and you'll see these are the original images that were uploaded.
>
> **[1:49](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=109)** If you scroll down and find a business where you uploaded a really large image, well you'll see the point.
>
> **[1:54](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=114)** This is obviously not workable and this is my point as well.
>
> **[1:59](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=119)** If this is a two megabyte image and I'm having to download this.
>
> **[2:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=122)** well that's not great.
>
> **[2:04](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=124)** Image styles will create a version of every single image on your site to this specific size requirements that you want and so if I want to show a nice little thumbnail that say 100 by 100 pixels, Drupal will actually create a version of every image on my site at 100 by 100 pixels and so people like me at in the rural US or anywhere else in the world for that matter, can now view your site much more quickly because your images are optimized.
>
> **[2:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=158)** So how do we do that?
>
> **[2:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=159)** Go to configuration, media and image styles.
>
> **[2:45](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=165)** These are the ones that come out of the box including when we turned on the media manager, well, media library thumbnail was turned on as well and a Linkit result thumbnail from when we installed Linkit.
>
> **[2:58](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=178)** All right, click add image style and let's call this 250 by 250 thumbnail.
>
> **[3:08](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=188)** Now again, you can create these any way you want and you can call them anything you want.
>
> **[3:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=193)** I like to put the dimensions in my name so I remember what it is later.
>
> **[3:17](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=197)** Click create new style.
>
> **[3:20](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=200)** This gives you a depiction of an original image and then one after we're done, well we've not actually done anything yet so let's click select a new effect and you have convert, crop, de-saturate, Resize, rotate, scale, scale and crop and again as always there are modules that give you more options here.
>
> **[3:40](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=220)** I'm going to just going to click scale and crop, click add.
>
> **[3:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=226)** You get to choose where the anchor is for your scaling.
>
> **[3:49](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=229)** I'm just going to leave it in the middle and put 250 by 250, click add effect and so you'll now see my 800 by 600 image is scaled and cropped to 250 by 250, which is a nice square thumbnail.
>
> **[4:04](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=244)** Again, you're able to make all kinds of image styles depending on your own needs.
>
> **[4:10](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=250)** All right, I'm going to go back to structure, content types, business directory and manage display and click on teaser.
>
> **[4:20](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=260)** Once again my business logo is using the original image style, click on the gear and you'll now see your new 250 by 250 thumbnail.
>
> **[4:30](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=270)** Go ahead and click on that and click update.
>
> **[4:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=276)** Scroll down and click save.
>
> **[4:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=279)** Let's go back to our site and now you'll see our business directory has very consistent thumbnails and if I scroll down to my big OSTraining one, well because it was basically a square anyway it makes it look really great.
>
> **[4:54](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=294)** So image styles takes whatever images you have and allows Drupal to render the images in the appropriate file size as well which is hugely important and gives you nice consistent look and feel.
>
> **[5:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=307)** If I click on structure and go to content types, article and manage display, click on full content, you'll remember we're using layout builder here.
>
> **[5:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=316)** I'm going to click on manage layout and you're going to remember that we put the image field here on the left-hand side.
>
> **[5:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=325)** I'm going to click on the pencil and click configure and you'll see that here in layout builder we also see our image styles.
>
> **[5:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=335)** Go ahead and choose 250 by 250, click update, click save and if we go back to our site and if I go into our latest news item, you'll note that our images are now 250 by 250.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (10), scroll down (3), go to (2)
> **Code Keywords:** let (3), switch (1), this. (1)
> **Cross-References:** go back to (5)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (3)
> **Versions:** 0.4 (2)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)

#### Image styles for media
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=3)** - [Instructor] So in this video we're still talking about image styles but now we're going to talk about image styles for media.
>
> **[0:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=9)** To demonstrate this let's add a media field to our article content type.
>
> **[0:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=13)** So I go to structure, content types, article, and manage fields.
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=18)** You'll remember we added a files field and a video field.
>
> **[0:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=22)** Let's add another field, select media, and let's call this media image, click save and continue.
>
> **[0:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=35)** We'll limit it to one save field settings and we'll limit this to just images.
>
> **[0:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=42)** Go ahead and click save, all right.
>
> **[0:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=46)** Let's head back to our content, filter by article, and let's update our Welcome to Drupalville node.
>
> **[0:59](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=59)** Now you'll remember we're using layout builder for this, that's okay, click edit, and let's add an image.
>
> **[1:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=67)** Now, if you don't have any images uploaded, go ahead and upload something, I've got a few uploaded, I'm going to upload this picture of the little girl and her dog, click insert selected, and click save.
>
> **[1:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=79)** Because we're using layout builder, we need to go and add that field, click structure, content types, article and manage display,
>
> **[1:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=91)** click on full content, manage layout, and let's add that field.
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=98)** This is a good reminder that, when you do add fields to your content types and you're using layout builder, well of course, you'll need to go ahead and update them just like we are now.
>
> **[1:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=108)** This is why planning is helpful.
>
> **[1:49](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=109)** Click add block, find your media image field,
>
> **[1:57](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=117)** hide the label, and you'll note we have formatter here label, rendered entity, entity ID or thumbnail.
>
> **[2:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=129)** Go ahead and choose rendered entity for now, and click add block and click save.
>
> **[2:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=138)** Go back to your site, and there's our image.
>
> **[2:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=142)** Now this image is 360 by 480.
>
> **[2:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=146)** In order to make media items respect our image styles, we need to change that from rendered entity to thumbnail.
>
> **[2:35](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=155)** So let's go ahead and do that.
>
> **[2:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=157)** Head over to structure, content types, article, and manage display, full content and manage layout.
>
> **[2:46](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=166)** Now this works, whether you're in managed layout, or if you're just in normal fields.
>
> **[2:52](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=172)** So I'm going to scroll down, click on the media image field and click configure, and I'm going to change the rendered entity to thumbnail.
>
> **[3:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=182)** And you'll notice as soon as I do that, it allows me to choose an image style.
>
> **[3:06](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=186)** Just for argument's sake, I'm going to click update and save, and go back to site.
>
> **[3:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=196)** And now you'll see, that the image is actually huge, and this is the original image, before we did this because it was rendering out using the media manager, image style, that is by default, it was rendering at 480 pixels.
>
> **[3:33](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=213)** The actual image is actually 3,224 by 4,032 pixels.
>
> **[3:40](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=220)** So this is actually, this it's huge, it's a massively large picture.
>
> **[3:47](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=227)** And the actual file size of this is 2.7 meg.
>
> **[3:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=230)** So this would be a problem for me.
>
> **[3:54](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=234)** Well let's fix that structure, content types, article, manage display, full content, manage layout scroll down, click on the pencil and configure the media image field.
>
> **[4:10](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=250)** Now change that, and you'll note all of our image styles are available now with our media images.
>
> **[4:17](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=257)** The key here is the formatter must be a thumbnail.
>
> **[4:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=261)** I know that's a little counter-intuitive, but for now that's how media manager works.
>
> **[4:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=265)** So let's change that to medium 220 by 220, click update, click save, go back to site,
>
> **[4:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=279)** and now my image is 165 by 220, and this image style is 8 kilobytes.
>
> **[4:49](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=289)** Now this just isn't for me living out in rural Midwest United States including everyone looking at your site on a mobile device while they're on their LTE service, rather than hooked up to WiFi.
>
> **[5:01](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=301)** And so between regular image fields and your media fields, you have the ability to make your images any size you want giving your users the best experience possible on your website.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), type. (1), continue (1), this, (1), default, (1)
> **UI Navigation:** click on (3), scroll down (2), go to (1)
> **CLI Commands:** make (2), node (1), find (1)
> **Cross-References:** go back to (3)
> **Analogies:** picture (2), just like (1)
> **Prerequisites:** configure (2), you'll need (1)
> **Env Vars:** lte (1)
> **Versions:** 2.7 (1)


### 3. Menus Explained

> [↑ Back to Table of Contents](#table-of-contents)

#### Modify the main menu
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=3)** - [Instructor] In this video, I want to talk about menus and menu structure.
>
> **[0:07](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=7)** One of the great things with Drupal is you have complete control over your menus.
>
> **[0:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=11)** Head over to Structure, Menus and Main navigation.
>
> **[0:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=16)** Your Main navigation menu is exactly what it sounds like.
>
> **[0:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=19)** It's your main nav.
>
> **[0:21](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=21)** Now, one of the things that we've seen throughout the course is that you can click and drag things to reorder them.
>
> **[0:27](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=27)** Go ahead and put Home at the top, and just so we can demonstrate it appropriately, drag Test Landing Page up underneath About Drupal, and then slide it one over to the right.
>
> **[0:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=39)** This is going to make a sub menu of About Drupalville.
>
> **[0:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=44)** Go ahead and click Save.
>
> **[0:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=48)** Let's go back to our site.
>
> **[0:49](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=49)** And when I hover over About Drupalville, you would have expected there to be a dropdown menu.
>
> **[0:54](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=54)** Well, there's a couple of things here that we need to know.
>
> **[0:57](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=57)** Number one, not all themes support dropdown menus.
>
> **[1:01](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=61)** Though, this one does.
>
> **[1:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=63)** So let's go ahead and fix that.
>
> **[1:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=65)** This is number two. Head over to Structure, Menus, and Main navigation.
>
> **[1:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=71)** And we're not going to see anything here that talks about sub menus.
>
> **[1:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=76)** That's because everything is in a, yes, a block.
>
> **[1:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=82)** Go to Structure, Block layout, scroll down to Main navigation and click Configure.
>
> **[1:30](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=90)** You'll note that out of the box, the menu has one level of display.
>
> **[1:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=96)** Go ahead and change that to Unlimited and expand all menu items to show the children.
>
> **[1:44](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=104)** All right. Scroll down and click Save and go back to your site.
>
> **[1:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=110)** And now, About Drupalville has a hover state and has our sub menu.
>
> **[1:57](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=117)** If I click Structure and Menus and Main navigation, click Edit on About Drupalville.
>
> **[2:04](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=124)** You'll notice here that "If selected this menu link has children, the menu will always appear expanded.
>
> **[2:10](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=130)** This option may be overridden for the entire menu tree when placing a menu block."
>
> **[2:15](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=135)** So I could have come in here to every single dropdown menu and put a check mark in here, but it's just as simple and quicker to override that at the menu block.
>
> **[2:28](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=148)** So now we have our menu: Home, About Drupalville, our Test Landing Page, Business Directory, Event Calendar, and Latest News.
>
> **[2:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=156)** This is already looking better.
>
> **[2:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=158)** Click on Structure, Menus and Footer.
>
> **[2:43](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=163)** And you'll note, we have the Contact form, right now, we're not displaying that.
>
> **[2:47](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=167)** Let's go ahead and move this to our Main navigation.
>
> **[2:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=170)** Click Edit, and you'll see the Parent link here as Footer.
>
> **[2:54](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=174)** If I click that dropdown, now, this is where it gets a little crazy and dribble.
>
> **[2:59](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=179)** Every single menu is available here and there are a lot of them, including all the administration menus.
>
> **[3:06](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=186)** So I need to find Main navigation, down here, and just put it in Main navigation, with a weight of 10.
>
> **[3:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=198)** That's going to automatically put it at the bottom.
>
> **[3:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=202)** Of course, I could have clicked and dragged.
>
> **[3:24](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=204)** Then click Save just for good measure.
>
> **[3:26](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=206)** And back to site.
>
> **[3:27](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=207)** Now my Contact form is right here in my main menu.
>
> **[3:32](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=212)** Now you'll remember, Contact forms are also entities, and this can be fielded.
>
> **[3:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=217)** You can add as many fields as you need to your Website Feedback form.
>
> **[3:42](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=222)** So managing your menus in Drupal is actually really simple.

> [!info]- Semantic Content
>
> **UI Navigation:** dropdown (4), scroll down (2), go to (1), click on (1)
> **Code Keywords:** let (3), override (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** go back to (2)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Creating a new menu
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=3)** - [Instructor] Adding your own Menus to your Drupal site is just as easy hover over Structure, Menus and Add Menu.
>
> **[0:10](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=10)** We're just going to add a new menu and create a couple of links.
>
> **[0:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=13)** Let's pick the title Test Menu, click save and let's add one internal link and one external link.
>
> **[0:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=22)** Click Add link, and we'll create a link to our OSTraining business.
>
> **[0:27](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=27)** So I'm just going to say OSTraining and I can just start typing the first few letters of the node title and Duraple will find it for me I should never paste the actual URL for an internal link into this box let Duraple do that for you go ahead and click save.
>
> **[0:49](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=49)** All right so we have an internal link let's add an external link.
>
> **[0:52](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=52)** Click Add link, and we'll just make a link to Google.
>
> **[0:59](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=59)** You'll note as soon as I start typing the external link Drupal just ignores the internal links, it's enabled, we don't need to show as expanded because this is not going to an expanded Menu but what you're not seeing of course is the ability to open an external link in a new Tab or Window.
>
> **[1:19](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=79)** You'll remember we installed the ext underscore link module.
>
> **[1:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=82)** So although there's nowhere to say open this in a new Tab we've done that automatically, click save.
>
> **[1:30](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=90)** Now we've created two Menu items in our Test Menu Menu.
>
> **[1:34](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=94)** Let's go ahead and place the block.
>
> **[1:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=97)** Go to structure, block layout, I'm in my breeze theme, I'm going to go down to footer and I'm going to put this in footer three click Place Block.
>
> **[1:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=111)** We'll just look for test, there it is, click Place Block.
>
> **[1:56](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=116)** Let's update our title with Cool Menu Items, we'll put it on every page and of course the great thing with Drupal 9 blocks is that you can put them anywhere you want without having to make new versions, click save block.
>
> **[2:12](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=132)** And there it is, of course we can rearrange, click save and let's go back to our site.
>
> **[2:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=142)** Let's go down to the bottom and there we are, COOL MENU ITEMS, Google and the link to our OSTraining node.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), module (1)
> **CLI Commands:** node (2), make (2), find (1)
> **Env Vars:** url (1), cool (1), menu (1), items (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[OSTraining]]
- [[Rod Martin]]

## Skills Covered

- Drupal

## Path Context

### In [[Build Your Drupal Skills]]
← [[Drupal 9 Essential Training- 4 Users and Themes]] | **5 of 6** | [[Drupal 9 Essential Training- 6 Finishing the Design]] →

## Appears In

- [[Build Your Drupal Skills]]

## Related Courses

_Courses sharing skills:_

- [[Drupal 9 Essential Training- 6 Finishing the Design]] — Drupal
- [[Drupal 9 Essential Training- 4 Users and Themes]] — Drupal
- [[Drupal 9 Essential Training- 3 Taxonomy, Media, and Modules]] — Drupal
- [[Drupal 9 Essential Training- 2 Content and Fields]] — Drupal
- [[Drupal 9 Essential Training 1 Introduction And Administration]] — Drupal

---

[↑ Back to top](#)