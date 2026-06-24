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
  - '[Build Your Drupal Skills](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Build%20Your%20Drupal%20Skills.md)'
prev_courses:
  - '[Drupal 9 Essential Training- 4 Users and Themes](Drupal%209%20Essential%20Training-%204%20Users%20and%20Themes.md)'
next_courses:
  - '[Drupal 9 Essential Training- 6 Finishing the Design](Drupal%209%20Essential%20Training-%206%20Finishing%20the%20Design.md)'
path_nav: '[{"path":"Build Your Drupal Skills","position":5,"total":6,"prev":"Drupal 9 Essential Training- 4 Users and Themes","next":"Drupal 9 Essential Training- 6 Finishing the Design"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - topic/web-development
  - skill/drupal
status: not-started
created: 2026-05-03
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
  - [Introduction to the course](#introduction-to-the-course)
- [**1. Layout Explained**](#1-layout-explained) (10 videos)
  - [Layout explained](#layout-explained)
  - [Managing displays](#managing-displays)
  - [Blocks explained](#blocks-explained)
  - [Creating a custom block type](#creating-a-custom-block-type)
  - [Creating a custom block type: Media](#creating-a-custom-block-type-media)
  - [Layout builder explained](#layout-builder-explained)
  - [Managing the layout for the article content type](#managing-the-layout-for-the-article-content-type)
  - [Managing the layout for the business directory](#managing-the-layout-for-the-business-directory)
  - [Adding a custom block in the layout builder](#adding-a-custom-block-in-the-layout-builder)
  - [Creating landing pages](#creating-landing-pages)
- [**2. Views Explained**](#2-views-explained) (8 videos)
  - [Views explained](#views-explained)
  - [Adding the business directory view](#adding-the-business-directory-view)
  - [Adding the news and press release view](#adding-the-news-and-press-release-view)
  - [Exposing filters for visitor interaction](#exposing-filters-for-visitor-interaction)
  - [Adding an events calendar view](#adding-an-events-calendar-view)
  - [Creating a related content view](#creating-a-related-content-view)
  - [Image styles explained](#image-styles-explained)
  - [Image styles for media](#image-styles-for-media)
- [**3. Menus Explained**](#3-menus-explained) (2 videos)
  - [Modify the main menu](#modify-the-main-menu)
  - [Creating a new menu](#creating-a-new-menu)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to the course](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=2)** - Hi and welcome to the [Drupal](../../Skills/Web%20Development/Drupal.md) 9 Essential Training. My name's Rod Martin. I'm your trainer through this series. In this course we're covering layout. Now, layout sounds like a small topic. But it really isn't. So let's talk about what we're going to cover in this course. I'm going to introduce you to layouts in general. And then we're going to dive in to the four main components. We'll talk about managing the display with Drupal Core or what Drupal gives us right out of the box. There's not a lot there. But it's still important to cover. Then we'll talk about block management. Now, as you know by now, blocks are what appear all around the different areas of your sight that aren't content. So, the content area is generally in the middle. And you've got block regions all around it. In which you place blocks. We'll talk more about block placement and theming as we go. Next, we're going to talk about layout builder. And I can't tell you how excited I am about layout builder in Drupal 9. This gives site builders the ability to build beautiful landing pages without having to worry about theming. It allows you to rearrange fields in your content type. And we'll do exercises along those lines throughout this course. And finally views. I've never built a Drupal site without views. It's in Core as of Drupal 8 and now in Drupal 9. And it's an essential part of building out a Drupal website. So, layout.
>
> **[1:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/introduction-to-the-course?u=76281980&t=96)** A big topic. An important topic. Let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (8)
> **Speakers:** - hi (1)


### 1. Layout Explained

[↑ Back to Table of Contents](#table-of-contents)

#### [Layout explained](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980&t=3)** - [Instructor] So we've gotten to the section of the course that's actually quite involved. We've done our planning, we've set up our content types, we've added our fields, we've added a little bit of content so we can play with it, and now we have to start to figure out well, how are we going to lay all of these things out? How are we going to have lists, blocks, pages, and more so people can find our content? Let me just remind you where we are in the site building workflow. Now by now, you've probably realized that things can happen in whatever order you need them to happen in. This is just a suggestion, but it is considered best practice. We're in the layout sections. I'm going to talk about displays, blocks, layout builder, and views, and I'm going to introduce each of those as we go. So I'm not going to take the time to do it here. Suffice to say you can mix the order of this up depending on the site that you're building. Sometimes you might want to create a whole bunch of pages and blocks with views before you actually create the layouts. Sometimes you might be building a site that works just as well with a whole bunch of manual blocks, and you don't even need views, though frankly, that's pretty few and far between. Managing your image styles can really happen at any point during the site building process. And so, layout involves managing the display of your notes, adding your blocks and putting them in the right block regions, setting up all of the layouts for nodes and taxonomy terms,
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-explained?u=76281980&t=99)** and then of course, image styles. All right, let's dive in.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Managing displays](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=3)** - [Instructor] So here we are on our site building workflow. We've just talked about Layout Explained, but before we get to Blocks, I want to talk a little bit about manage display. Now manage display is going to change when we add Layout Builder. But in the meantime, we just need to cover it real quickly. Head over to Structure, Content Types, Article, and Manage display. In [Drupal](../../Skills/Web%20Development/Drupal.md), we have the default display, an RSS feed, and a teaser in the article content type. The teaser is nothing more than just the image and the body and the links with everything else disabled. So if I go back to my site, you'll note that this is an article, and in Bartik, the image floated to the left and the text wrapped around it. In this particular theme, that doesn't occur, we can fix that later. But as you'll notice then, there's the title, the submission information, the image, the body, and a read more and a link to comment. If I click on the read more link, takes me into the full node, where I've got all of my fields. This is the teaser mode. Now devel kind of messes that up just a little bit. So let's head down to the bottom. Let's head to the last page where you'll remember our welcome to Drupalville and our first node of the article content type. And this is a bit more typical of what we should see. A title, submission information the image in a thumbnail, some part
>
> **[1:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=97)** of the introductory text, the read more and add a new comment link. Don't worry about devel messing that up. We can fix that in just a little bit. So once again, structure content types, article and manage display. So in the default display this is the display when we're looking at the node in its entirety. So we've got the image field body, article type, article keywords, the video, the files and the comments. If I wanted to rearrange those fields on the page without doing any other kind of layout, I can easily do that. I'm going to drag article type to the top and I'm going to make the label in line. We've hidden the label for image, hidden it for body. Let's put the keywords in line. Let's hide the label for the video and hide the label for the files. All right, let's click save. And now when I go back over to my site and I click on welcome to Drupalville you'll notice the teaser hasn't changed, but when I click on welcome to Drupalville the submission information the article type, the image, the body, the keywords then my video, then my files, and then the comment fields. So out of the box Drupal list the fields in order that you place them in the manage display tab and either hides or shows the label depending again on what you choose. That's really as far as we can go
>
> **[3:09](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-displays?u=76281980&t=189)** with the displays in Drupal, until we get to the section on layout builder. If we'd manage the display for say the business directory, structure, content types, business directory, and manage display we'll see the same kind of thing. We have the description, logo, address, website phone category, business, video and files. Once again, on the default display. Teaser is just the business description and the links. If I wanted to add the business logo to the teaser for the business directory, well, it's that simple. Now we actually can't see that yet until we get to views but nevertheless, that's what it does. If I do want to re-order this, well it's exactly the same as before. Grab the business logo, put it at the top and hide the label. By the way, hidden and visually hidden hidden is not printed at all, Visually hidden is it's printed but not displayed on the browser It's just printed in the background for screen readers. Go ahead and click save, head to content and click on any business directory. And now the images at the top once again, not floated left, we can fix that later. All right. So that's managed display. It doesn't give us much but it gives us a little bit to work with at least in the beginning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (3)
> **CLI Commands:** node (3), make (1)
> **UI Navigation:** click on (4)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** rss (1)
> **Cross-References:** go back to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Blocks explained](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=3)** - [Instructor] You might remember back in the very beginning we talked about the structure menu, and we actually created a block called Welcome to Drupalville. Well, this is blocks explained, and I want to talk to you a little bit about what blocks are. Blocks are an entity that can contain just about anything. Content like videos, text, images, and functionality like the search bar and the menus. Blocks are not content but they are placed in block regions around your site. So while your theme provides the blueprint for your website via block regions, blocks are actually like the furniture that you would move in once your house is built. So indeed, this is a block. This is a block. This is a block. This is a block. The content area is a block, and scrolling all the way to the bottom, we have several blocks that have been placed in the footer. As you might recall, structure, block layout, and demonstrate block regions shows us the regions that blocks can be placed in. And it's really actually quite fair to say that everything that ends up on the page, ends up in a block. And that's really true. Even your content is placed into a block region. And if we click exit block region demonstration and scroll down, we have the site branding block, the breadcrumbs block, search, main nav, status messages, page title, tabs, help, primary admin actions,
>
> **[1:40](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=100)** and there's even your main page content block that's in the content block region. So it's fair to say that this entire page is just a set of blocks. Blocks are absolutely critical to [Drupal](../../Skills/Web%20Development/Drupal.md) 9's layout. So when we created the Welcome to Drupalville block, we created a custom block in the basic block type. Which is just a title and a body. And the great thing is, well, you can have custom block types as well. Now where this becomes incredibly helpful is when we get to layout builder. But in the meantime, we can add blocks all across our site. All right, let's go ahead and do that one more time. Click on Blocks, and click Add Custom Block, please. Let's call this the join block. You should join our site. There's lots of helpful information. Go head and click save. And now we have to place the block. So you create the block, and then you place the block. Scroll down to the primary block and click Place Block. We can filter by the words that we use. And that's so helpful. Click Place Block. And we're going to restrict this in two ways.
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=194)** One, we're only going to show it on the front page. So you do that by saying front. And that's right there in the instructions. Drupal's homepage is always referred to as the front page. And we're also only going to show this if you're not logged in. If you're logged in, it's assuming you've already joined the site. So on roles, put a check mark in anonymous user. Now up for the title, go ahead and say, join our website. All right, the title is join our website the pages, restricted just to the front page, and just for an anonymous user. Click Save Block. And because it's green, that means Drupal has automatically saved it. Let's go back to our site. And well, it's not there. If we head over to a browser where we're not logged in and click on home, well guess what? It's there. We can create custom blocks that go on any page for anyone. And it's just as simple as what we just did. There's one more feature, two blocks in Drupal 9 that I want to mention. And that's that you can place a block in different regions for different purposes. So let's say for instance, you wanted the join our website block in a different region, on a different page, for a different purpose. Well, it's as simple as just placing the block and assigning different rules.
>
> **[4:50](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/blocks-explained?u=76281980&t=290)** Going to scroll down to the footer block. And I'm going to click a place block. Filter for my block, click Place. And this time I'm going to allow everywhere, except the front page. Hide for the listed pages. And I'm not going to worry about roles for this demonstration. Click Save Block, and go back to my site. And now when I'm on my About Drupalville page, you'll see the join block down here in the footer. This is an amazing improvement over Drupal 7. And it's one that you're really going to love working with when it comes to putting information in different places around your site using blocks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (5)
> **Definitions:** is a  (5), is an  (1)
> **UI Navigation:** scroll down (3), click on (2)
> **Cross-References:** go back to (2), we talked about (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Creating a custom block type](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=3)** - [Instructor] In this video, we're going to create a new custom block type. Now it's very similar to custom content types, and there's some tremendous advantages to doing this. We're not limited in our blocks to just a title and a body. All right, go to structure, block layout, and block types please. And click add custom block type. What we're going to do here is add a custom block type that's going to house a PDF from our media manager for download on particular pages. All right, in the label, call it downloadable PDF. Put a checkmark in create new revision. This way we can keep [Version Control](../../Skills/Web%20Development/Version%20Control.md) on our block, and click save. All right, click manage fields. Now we automatically get a title and a body. The body we can update as description. So click edit, and let's call this download description. Click save settings. Let's add the media field. Click add field. Once again, even here in blocks we have exactly the same kind of fields available. Go ahead and choose media. Go ahead and put downloadable PDF. Click save and continue. Limit it to one. Save field settings, and choose document. So what we're going to do with this PDF
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=98)** is we'll attach it to a particular business. So this might be a special that they're running and that we want to put it in the block region off to the side, not necessarily inside the node itself. All right. Click save settings. All right. Head back to structure, block layout, and add custom block. And now you'll get the choice. Go ahead and choose downloadable PDF. And let's say this is OS training deal of the week.
>
> **[2:12](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=132)** Download the PDF to get the deal of the week. Click add media, and just go ahead and choose one of the PDFs that you've already uploaded. Click insert selected. Click save. Now because we're creating this custom block in a wizard, we get to choose where it's going to be. Now in this case, we want it to show up on a particular page. So click on pages. And put in slash business directory slash OS training.
>
> **[3:00](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=180)** So this is the human friendly URL to the node for OS training. It also has a node ID of course. You could use slash node slash whatever the node ID is in here as well. You'll note we can show for the listed pages or hide for the listed pages, and wildcards are fine here. So there's a lot of flexibility that you have in placing blocks in any given node. Let's pick the primary region, and click save block. All right, that has saved. Now let's go back to our site. And you'll note, it's not here. If I click on about Drupalville, well, again, it's not here. But if I search for OS training, and click on the OS training node, there it is. OS training deal of the week. Downloadable PDF, we forgot to hide the label, in fact let's go ahead and do that. Click block layout, go to custom block library, custom block types, downloadable PDF, and let's manage display. Again, this is exactly the same as we saw in our content types. We'll hide the downloadable PDF label. It's pretty obvious what it is, click save, and go back to site. And there we are, that label has now disappeared. So, custom block types. When we get to layout builder, I'm going to talk more about this because it is unbelievable what you can do with custom block types and layout builder.
>
> **[4:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type?u=76281980&t=277)** Oh, just wetting your appetite a little bit for what's coming up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1)
> **Env Vars:** pdf (9), url (1)
> **CLI Commands:** node (7)
> **UI Navigation:** click on (3), go to (2)
> **Cross-References:** go back to (2), as we saw (1), coming up (1)
> **Exercise Files:** download the (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Creating a custom block type: Media](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=3)** - [Instructor] In this video we're going to create one more Custom Block Type that's going to be used later in the course it's going to be a free column block that contains a Media item in each of the three columns that we'll be able to insert on the fly. Click Structure, Block Layout, and Block Types, we're going to add a Custom Block Type. This is going to be a three Column Media Block. Add three Media items to this block for layout builder use. Once again, go ahead and do the revision and click save. So as you might've figured out we need to have three media fields, click Manage fields we'll leave the body just in case we want to use it but we probably won't click add field, select the field type, and again, choose media, three, three column media, click save and continue, and obviously change that to three click save settings. So we could choose all of them here and make them all available but let's just go ahead and choose a document and image and a remote video, that way, any three media items can be inserted into this block,
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=99)** click save settings. All right, let's go ahead and click and create one block layout, add custom block. Let's do the three column media block and let's just call this three column test leave the body blank and add three media items it doesn't matter what you choose go ahead and add any of them. I'm going to upload some images, so I'm going to choose one of each,
>
> **[2:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=136)** I'm going to add one PDF and one video, and that's my three media items. Now you'll notice here, they're displayed three across that won't be true when we put it in a block region but we'll fix that with some CSS, click save and just so we can see it, we're going to put it in the primary region and click save all right go back to site. And there's our three media items all right, let's go ahead and disable this blocks we don't need it just yet. Click Block Layout and find the three column test and disable all right.
>
> **[3:05](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-custom-block-type-media?u=76281980&t=185)** So we've created a couple of custom block types and we've added a couple of custom blocks, awesome.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Env Vars:** pdf (1), css (1)
> **Cross-References:** later in (1), go back to (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Layout builder explained](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=3)** - One of the best new features in [Drupal](../../Skills/Web%20Development/Drupal.md) 9 is Layout Builder. I can't tell you how excited I am about this. It can save you literally thousands of dollars in custom theming. When you can layout your notes and taxonomy landing pages, pretty much any way you want. That combined with in line custom blocks that Layout Builder supports, literally it is an endless possibility of layout goodness that we're talking about. I'm over here at the main documentation page for Layout Builder. And there's just some terrific information here and I'm going to encourage you to read it when you can. Because Layout Builder is pretty big. The most important sections to read probably are the overview, layout defaults, and additional modules. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of it I'm going to pretty much cover. Layout Builder is a visual design tool allowing you to create multiple columns, brick layouts and then add blocks and fields from your content types into those layouts. It's drag and drop and really easy to use once you kind of get the hang of it. If I click on additional modules, you'll see that there are just a ton of them. Now when Layout Builder was released, this page had like three or four entries. Now it has a lot. My favorites so far are Layout Builder blocks for bootstrap styles,
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/layout-builder-explained?u=76281980&t=98)** Layout Builder advanced permissions which gives granular permissions for working with Layout Builder. Layout Builder background. There's just again, just some really really great ones here. Another one I really like, Layout Builder restrictions which is similar to the other one. And Layout Builder styles. Again this is just a really terrific way of adding styles to your layouts. There are a number of options here and I'm going to encourage you to take a look at them and see what might help you. This replaces two main modules from Drupal 7. Panels and display suite. Both excellent modules but honestly, having this in core is really terrific. Now this isn't enabled by default. So let's go and take care of that now. All right, let's go ahead and enable Layout Builder. Click on extend. And under core, you're going to find Layout Builder and Layout Discovery. Go ahead and put check marks in both of those. And scroll down and click install. It's that simple to install as you know from any other module, let's head over to structure. Content types and articles and manage display. You'll now scroll down and see an option for Layout Builder in our site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **UI Navigation:** click on (2), scroll down (2), drag and drop (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** install (2)
> **CLI Commands:** find (1)
> **Speakers:** - one (1)

#### [Managing the layout for the article content type](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=3)** - In this video, we're going to start updating our layouts for our various content types. Unfortunately, once I started doing this in the Breeze theme I found a couple of bugs. So until those bugs are corrected, this next set of videos we're going to switch back to the Bartik theme and then we'll switch back to Breeze in an upcoming video. Once those bugs are fixed I'll replace these videos using the Breeze theme. So please click on appearance, and we're going to set Bartik as our default again. Now the nice thing is with layout builder and our theme, it doesn't matter that we're doing layouts in Bartik because they're still going to work in Breeze. Once Breeze gets fixed and over to structure, content types, article and manage display. You remember we have three displays, default, RSS and teaser, head down to custom display settings and put a check Mark in full content. This is going to enable us to create a display when we're actually looking at a node in the full content display and click save. Now we have default full content, RSS and teaser. If we click on teaser, you'll notice that this is the standard look and feel and it works quite well for our article node. So we're going to leave that the way it is. However, go ahead and click on full content and scroll down and click use layout builder and allow each content item to have its layout customized.
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=98)** This will allow a content editor to update the layout for an individual node of the article content type, which is really powerful. Go ahead and click save, and now click manage layout. So, if I put a check Mark in show content preview this is what it's going to look like. The article type is of the top, that image, the body, our links field, our keywords, our video field and our PDF field or our document field. So, I usually do this with content preview turned off because to be honest, it just gets a little confusing and a little difficult to manage. We're going to create a quick layout here with the image, the article type, article keywords and image in a left-hand block, and the body in a right-hand block, and the video and the files below. So there are two parts to lay out builder, sections and blocks. Go ahead and click add section and you'll note you can do a one column, two column, three column or four column section, click on two column and you can split that by 50 50, 33 67, 67 33, 25 75 or 75 25. Let's go ahead and put it 33 67. And let's call this
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=194)** top section not very descriptive, click add section and you'll see a representation of the 33% and the 66%. All right, go ahead and click add block and you'll note you have access to everything. Triple nos, including all the views you've created, all of user fields, everything. Now there's a module that will restrict what you see here. And we'll cover that in just a little bit. All right, I said we were going to put the article type the article keywords and the image in the left field. So, find article type, we can display the title if we want, we can put a label in there, I'm going to make it in line. And we can say rendered entity, entity ID, or label we'll leave it at the label. And we'll link the label to the reference entity which gives us our taxonomy landing pages, click add block. Now, another way to do this of course is to just click and drag. So I'm going to click on article keywords and drag that under our type field. Oops, there we go. Of course, as you just noticed, you can rearrange as well. Now I'm going to drag the image field up and drag it back down, and then I'm going to drag the body over to the right-hand side. Of course, we could have clicked add block
>
> **[4:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=288)** and selected any field in our content type that we wanted. Now, let's remove article type field because we don't need it anymore. Hover on the right-hand side, click on the pencil and click remove block, click remove, and it's gone. Let's drag our links below. So, now we have video files, links and comments. That's good enough for now. Let's go ahead and save our layout and click on the home button and click one of our article nodes. And now you'll see how this works. So article type, article keywords, the body field, our video field and our downloadable PDFs. So we've got a bit of an issue here. We really don't know what the name of those is. So let's go ahead and fix that layout. Now, if I click layout here, I'm going to edit the layout for just this node, which I don't want to do. So I'll go back to structure, content types, article and manage display. Make sure you click on full content and click manage layout. So we scrolling down, let's go ahead and fix those file field, click on the pencil and click configure, for the format go ahead and choose rendered entity. This is going to print out the name of the PDF and the view mode is full content.
>
> **[6:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-article-content-type?u=76281980&t=383)** That's going to give us a link to the PDF with a little icon next to it. Click update, scroll up and click save. Head back to your site. And now we've got our PDFs looking a little bit better. If I click on it, it's going to load it in my browser. Now of course, with Bartik, our text isn't exactly great. But if I switch back to Breeze and go back to my site, you're going to notice that my lab builder layout is still intact. Now the image is bit of a mess, but nonetheless we can fix that up. So if I switched back to Bartik, and go back to my site, again, nothing is wrong with my layout. It's exactly the way it should be.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (10), scroll down (1), scroll up (1)
> **CLI Commands:** node (4), make (2), find (1)
> **Env Vars:** pdf (3), rss (2)
> **Cross-References:** go back to (3)
> **Prerequisites:** configure (1)
> **Speakers:** - in (1)

#### [Managing the layout for the business directory](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=3)** - [Instructor] Let's go ahead and update the layout for our business directory. Go to structure, content types, business directory, and manage display. Now you remember we have a default and a teaser mode. Let's go ahead and add the full content display again. Click save. And now we have default full and teaser. Let's go ahead and update the full content display, and go ahead and click use layout builder. This time we won't allow an editor to update a node on the fly. Every business is going to look exactly the same. Click save. And click manage layout. Now once again, layout builder puts all of the fields into one section, and we can add sections above and sections below, and any blocks we want. In this layout, I want to put the business logo on the left, the address, website, phone and category on the right. Then I want to put the description in the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the fields. So, once again, click add section, and let's again choose a two column layout. You can choose any column layout you want here. This is going to again be 33 67, and this is going to be the top logo and taxonomy fields.
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=99)** Again, nobody will ever see that, it just helps us to remember what's supposed to go in here. All right, let's add the logo. Once again, I can just click and drag, or I can click add block. Let's go ahead and get the business category. We'll put it in line. And we'll link the label to the reference entity. Let's add block. Let's put the business address. We'll hide the label. And we'll make a [Google](../../Glossary/Service/Google.md) map out of it. Once again, all of the settings we had for the simple G map module are now here. We'll leave it at 200 by 200. We'll test this out a little bit. We'll include a link to the map, and we'll include the original address link. Click add block. Now, as you're planning out and working on your layouts, things can change. It's easy to click save, go back to site, find a business, and take a look at the layout. So we have an issue here with the business map we need to fix. You'll also note there's no layout button here because we're not allowing editors to update the layout for a node in the business directory content type, one at a time. So I'm going to head back to structure, content types, business directory, and manage display. Click on full content, and click manage layout.
>
> **[3:17](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=197)** So now we discovered that we've got a problem with our address field. Let's take a look at that. You can click on the pencil, and click configure. And we forgot to embed the map. Let's include the embedded dynamic map, which doesn't require the Google API. Scroll down and click update, and save, and let's go back to our site, and there's our Google map. Now, it's important at this point to take a look at it on our actual theme, because this width is obviously going to change. We'll do that later, but as you can see, it's quite simple to update. All right, there's the body. We need to get rid of the business address, and we can add the website maybe underneath the logo, and the business phone under the address. We'll move the category up, and then we'll leave the video and the files below the body, because the body of course can get pretty long. All right. Structure, content types, business directory and manage display. Now the other way to handle this is of course have two browser [Windows](../../Glossary/Service/Windows.md) open, and you can go back and forth. So I'm going to click on full content, and manage layout. Because when you click save, well, it's instantly updated, so let's do that this time. I'm going to click and drag the business website up under the logo. I'm not quite sure why it keeps popping up to the topic. It's easy to drag down, and I'll drag the phone field.
>
> **[4:52](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=292)** There we go, we can drag that back down. Here's the business description field. We'll just remove the address field. Because of course, it's up top. We'll leave the description. We said we'd move the category up. And then again, drag it down. Then we have our video, and our files. So once again, I'm just going to click save, and head over to another browser and take a look at what I've done. So, let's get rid of the labels of course, it's kind of obvious what those are. We'll leave the business category label, but we'll get rid of the business video label, and the business files label. So again, switching back over, click manage layout, and let's update. So, it's pretty obvious what the business website is, so we will hide the label, and we can open the link in a new window because it's leaving our site. Now this is really interesting. A layout builder gives you the ability to open the link in a new window, but the actual link field doesn't give us that ability without an additional module. So that's terrific. I'm going to click update. In the business phone field, I'm going to remove the label as well, because it's pretty obvious what a phone is, and click update. Now if I click save now. There we go, that's looking a lot better. And of course I can play
>
> **[6:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/managing-the-layout-for-the-business-directory?u=76281980&t=385)** with these settings to even out these columns. There's my business category. Now let's go ahead and do the business video and business file labels. Once again, it's just a matter of clicking configure, and hiding the label, and clicking configure, and hiding the label. Save layout. Hit refresh, and there you have it. Now, just to check in our actual theme, and again, I'll just remind you, we discovered a bit of a bug, so we needed to switch back. I'm going to click breeze and set it as default and go back to site. And once again, you'll notice that our logo, our map, all of the information is there. Nothing has changed with our actual layout, just the formatting of some of the elements. Layout builder is amazing. Literally can save you thousands of dollars when you don't have to create custom template overrides with a themer to lay your content out any way you want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **UI Navigation:** click on (3), open the (2), go to (1), scroll down (1)
> **CLI Commands:** node (2), make (1), find (1)
> **Cross-References:** go back to (3)
> **Prerequisites:** configure (3)
> **Env Vars:** api (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Adding a custom block in the layout builder](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=3)** - [Narrator] If you're picking this up from the previous video, leave Breeze as your current theme. If you're still on Bartik, go ahead and change it to Breeze. Because as you might recall, we put a custom block, on our OSTraining page called OSTraining deal of the week. This isn't on Bartik yet, it's only been placed when we're using the Breeze theme. Alright. What we want to do then is instead of having it in the block, we want to have it in our layout, for our OSTraining Business Directory. Alright. To make this work, we've got to do a couple of things. Let's put our theme back to Bartik. We're going to update the layout builder here, so a content editor can edit and node individually in the Business Directory content type. So we can add this PDF deal of the week right into the content area for our node. Alright, so appearance, once again back to Bartik, click on structure, content types and Business Directory and manage display click on Full content and put a check Mark in allow each content item to have its layout customized, click save. Alright, and that's all we need to do. Now go back to our site and you'll notice that there's a new layout tab here for OSTraining, click layout, and you're going to get a notice here. You're editing the layout for the Business Directory content item. Edit the template
>
> **[1:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-a-custom-block-in-the-layout-builder?u=76281980&t=96)** for all Business Directory content items instead. You'll want to be very careful here. That said, it's really easy to add this custom block into our layout. Let's put it beneath the phone field click add block and scroll down to Custom blocks. There's the OSTraining deal of the week. Go ahead and add block and click save. And there it is. OSTraining deal of the week. Download the PDF to get the deal of the week. So it's that simple to add previously built custom blocks, into your custom layout. In the next video, we're going to talk about how to build landing pages using nothing but custom blocks and layout builder.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2), make (1)
> **Cross-References:** previous video (1), go back to (1), in the next (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Env Vars:** pdf (2)
> **Exercise Files:** template (1), download the (1)
> **Speakers:** - [narrator] (1)

#### [Creating landing pages](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=3)** - [Instructor] In this video, I want to show you how to make really custom landing pages in your [Drupal](../../Skills/Web%20Development/Drupal.md) website using layout builder. Let's create a landing page content type, go to structure, content types and add content type. We're going to call this landing page. Let's not promote it to the front page. Let's not show display author information. We'll leave the menu settings because typically you want to add a landing page to your menu. So we'll leave this one this time, and we won't enable scheduler. Go ahead and click save and manage fields. And that's it. All right, go ahead and click on content, add content and landing page. Let's give it a name, just call it test landing page, and that's all you need to do. Add a menu setting to it. Let's give it a weight of 20 so it's at the bottom, and click save. Now we have nothing in here yet. The next step is to turn on layout builder for landing pages. So structure, content types, landing page and manage display. We'll leave it in the default mode, turn layout builder on and allow each content item to have its layout customized. Click save. All right, let's head back to our test landing page.
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=98)** Click content and click on the test landing page, and click layout. Now, you'll get a note you're editing the layout for this landing page, and that's the key, don't edit the layout for all the landing pages unless you just want to add some common elements, treat each one as an individual landing page. So as you see, the links field and the body field are already given to us. Let's just go ahead and remove the body field completely. And let's add a block. And now, as you know, we have content fields, and all of the custom blocks we've already created. And once we get to views, all of the views will be listed here as well. But at the top, we have create custom block. Go ahead and click in there. And you'll remember the three column media block we added earlier, as well as the basic block we have. Let's go ahead and add a basic block, and let's just call this top block. But we won't display the title. And now we're free to put anything in here that we want. This is the top block, and I'm going to make that a heading too. Some more text. Et cetera, et cetera. I can embed a video. I can embed an image, anything I want there. Click add block. And drag it above the links field. All right, let's add another block.
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=194)** Create custom block, and let's choose the three column media block. We'll give it a title because it's required, three column media. We won't display the title and we won't display the body. We get to add three media items here. So we'll say add media, choose remote video, and insert. Add media, choose remote video, and this time we can just choose two more, and click insert selected. You'll notice now we have the maximum number of media items have been selected. All right, click add block. Now, this is going to be a one column block. The videos are going to be in a single column. We need to update our CSS to fix that, and we'll do that later. Let's say we added a whole bunch of blocks here. Click save layout. And here's our test landing page. There's the top block. There's our three column media block, which again we would need to hide that label. Let's get rid of these blocks, but before we do, let's update the URL here. And let's just say, test landing page. And click save. And now my URL is test dash landing dash page. All right, let's update our block. Click configure block, pages, hide for the listed pages, slash test landing page.
>
> **[4:55](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=295)** Click save, and it's gone. Let's get rid of the search bar. Pages, hide, test landing page, and of course, you can list all of your landing pages here as you build them. Click save block, and the tools menu. Configure, pages, hide,
>
> **[5:22](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-landing-pages?u=76281980&t=322)** test landing page and save. And now you'll see our landing page covers the entire width of the content area. And then by adding some simple CSS, we can float these to the left, make them in line and responsive. And I'll show you that code in a later video as we finish up the course. But being able to create landing pages based on your custom blocks is really tremendous. Let me show you an example of one website that's done this incredibly well. This is the Orange County Public Library site. This is a Drupal site of course, and they are using layout builder with a whole bunch of custom block types with a fair amount of CSS included of course. But this is nothing more than what we just did with custom blocks. And so by adding custom block types, creating custom blocks on the fly, and then obviously adding a ton of CSS, you can really use layout builder to build fantastic landing pages with any kind of elements that you want. Now that we're done with layout builder, it's probably a good time to switch back to the breeze theme. Once again, once this bug is fixed in the breeze theme, I'll be rerecording these videos and replacing these current ones. Thanks for hanging in with me while we worked around this little bug. So, appearance, and set breeze as your default.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (2)
> **Env Vars:** css (4), url (2)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (2), go to (1)
> **Prerequisites:** configure (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Views Explained

[↑ Back to Table of Contents](#table-of-contents)

#### [Views explained](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=3)** - One of the most essential tools you have in [Drupal](../../Skills/Web%20Development/Drupal.md). Once you have your content in, is the ability to create multiple displays and get your content out unless a node has a menu connected to it. So a user can click and go to that page or that node you'll need something along the lines of views to help people find your content. Views allows you to create massive queries into the dribble database without ever touching a line of code. Views filters to limit selections, views can be static or contextual, and we'll do some of each, and views always gives you a preview at the bottom of the page. We have five main questions we ask when we start talking about a view. What's the display? A display can be a page, a block or more. What's the format? Is it a list? Is it a table? Is it a grid? Is it a calendar? Fields, what fields will be displayed in this particular view? Filter, how will we filter this? Is it published content out of a particular content type, and how will we sort it. So five questions, display, format, fields, filter, and sort, we'll ask those five questions, with every view we build. In the next set of videos we're going to create a number of views. We're going to create our latest news view. This is going to give us our latest six news items
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/views-explained?u=76281980&t=99)** for a homepage block. We're going to create a view for the business directory. This is going to be a listing of all of our businesses by title. The display will be a page, the format is a table, the fields are title, image and body, the filter is published businesses and the sort is alphabetical. We're also going to create an event calendar and a landing page for all of the latest news. We're also going to allow visitors to filter the news whether it be news or press releases. And finally, when we're on a business page we're going to create a view that automatically goes out and gets businesses from the same business category in a context. Alright, so we have a lot of work to do. Let's get at it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (1)
> **CLI Commands:** node (2), find (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - one (1)

#### [Adding the business directory view](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=3)** - [Instructor] With that introduction to views. We've got a few really great views that we can create. And as I mentioned, it's amazingly easy to create landing pages and blocks, with views. All right, structure, views, and add view. In this video we're going to add a view that gives us a listing for the business directory. So we're going to call this Business Directory. We're going to view the content of business directory and we'll do it by title, that makes a little bit of sense doesn't it? We'll create a page. And in this case we'll keep it at a formatted list of teasers. We'll leave it at 10 items to display. We'll use her pager and we'll create a menu link in the main navigation. All right, let me stop and let you just catch up real quick. It's a business directory, content of type business directory sorted by title. We'll create a page. It's going to be an unformatted list of teasers 10 items to display at a time. You can make that a hundred if you'd like. Use a pager which means page one of three, two, three, three of three. And of course create a menu link in our main navigation. And the link text is business directory. All right, click save and edit. And let's just take a quick peak at our five questions. The display is a page. The format is an unformatted list of teasers as we know. We won't be displaying any field because teasers are pre-built for us.
>
> **[1:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=97)** The filter criteria are published business directories and the sort is title ascending. If you scroll down, you'll see a preview. So we do have a bit of work to do here with the teaser mode. We probably want to have the logo and we probably want to shorten up this body. We can do that right now. Go ahead and click save. And we already know how to do this. Go to structure, content types, business directory and manage display. Click on teaser. And you'll see all we have here is linked description. Now we can just simply click and drag these fields up but the problem is the image won't wrap. Let's just try it and you'll see what I mean. Grab business logo and drag it above description. Hide the label and change original image to thumbnail. That's going to make a nice little thumbnail on the left-hand side. We'll link the image to content. Since it's a teaser mode and click update let's update how many characters can be in the description. Let's change this to trimmed because what happened was devel inserted a whole bunch of stuff into the summary. We typically wouldn't do that, but this way it's going to be Bulletproof. We'll limit it to 600 characters scroll down and click save.
>
> **[3:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=193)** Now let's take a look and see what we did. Go back to site, click on business directory and here's our business directory. Whoa, you can see, we have some problems still. Our link is above, we probably want that below and our image isn't floated to the left. We can easily fix this with some CSS or we can use layout builder. Go back to structure, content types, business directory and manage display. Click on teaser. And you'll note again, links, logo, and description. Again if I drag links down that read more link would now be below, which is good we want that. Without having access to the CSS in our theme, it's better to use layout builder. So click use layout, builder, and click save, manage layout. We're going to have a bit of an issue here with our theme but we can manage for now click add section choose a two column layout and you'll see the problem we're having with the theme. We'll update this video once the theme is fixed. I'm going to change that to 2575, click add section. And then I'm going to add the logo click add block, business logo. Let's hide the logo. Let's change that to the media library thumbnail that's built in. And we'll link that to the content click add block. Click add block here
>
> **[4:49](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-business-directory-view?u=76281980&t=289)** and let's grab the business description. We'll hide the label and we'll change that to trimmed. Once again, leaving it at 600 characters, click add block and then we'll add the links field click add block and add block. Then we just have to delete the second section and click remove. All right, go ahead and click save layout and back to site. And there we have it. We have a logo, the body and the button with the title above. Now you'll notice here we've got some padding issues. That's all right we're going to fix that later on. When we add some CSS to our site using another module but it's that simple to create a business directory using views. No matter how many businesses we add to our business directory, this will always be up to date listed in alphabetical order ready to go for our visitors to find the business in drupalVille that they need.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), scroll down (2), go to (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** css (3)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1), is an  (1)
> **Code Identifiers:** drupalville (1)
> **Speakers:** - [instructor] (1)

#### [Adding the news and press release view](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=3)** - [Instructor] The next view we want to add is a listing of all of the most recent news in our [Drupal](../../Skills/Web%20Development/Drupal.md) website. So, head over to Structure, Views and Add View and let's call this, Latest News. We'll show content of type article because that's what we're using for our news. And we'll show the newest first. Once again, create a page. Once again, we'll leave it at an unformatted list of teasers. We'll use a pager. We'll create a menu link again under our main navigation and click Save and Edit. Scroll down and see your preview. And once again, our teaser mode with Drupal has created a summary text here, that's really a mess. So, we could change the teaser or we can just change this to show a set of fields. Let's do that instead. Click on Formatted List and choose Table. Click Apply and click Apply. By default, as soon as you change it to table, Drupal adds the title field to the fields area. So, now we have a set of titles. So, the display is a page. The title is latest news. The format is a table and our fields need to be updated but our filter is correct and our sort is correct. On the fields line, click Add
>
> **[1:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=97)** and we're going to add an image and the body. So, type image. And I know it says business logo but that's okay. It appears in the article. That's what we want. Now, back up in the search, type, body and put a check mark in body. This is going to allow us to add two fields at once. Go ahead and click Add and Configure Fields. Now, it's going to ask us to configure the body field first. We don't need a label. And change the formatter to trimmed to 400 characters. Click Apply and Continue. Now, let's update our image. We don't obviously need a label for that and let's use our thumbnail. We'll link to the content once again and click Apply. Now, let's scroll down and see what we've done. You'll see we have the title and intro to the body and the news image field that is in a thumbnail format. We're going to talk about image styles in a little bit. Now, to make this work, we need to do some quick changes here. Let's go ahead and put the image under the title. Next to the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) format, click on the word settings for the table and let's put the business logo in the content column and that's going to automatically insert the image below the title. Click Apply, take a look
>
> **[3:13](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-the-news-and-press-release-view?u=76281980&t=193)** and there we go. That's looking a whole lot better. Click Save. And let's go back to our site and click on Latest News. Now, you'll remember latest news is being used for two things. In the next video, we're going to add a filter that's going to allow our site visitors to switch between news and press reports.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2)
> **UI Navigation:** click on (3), scroll down (2)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1), in the next (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Exposing filters for visitor interaction](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=3)** - In this video, I want to accomplish two things in our latest news, view. One. I want to make the titles into an H3 tag. Which is a little tricky because they're actually in a table. And secondly, I want to expose the filter to our visitors, that says, "hey go ahead and choose between news and press releases." Alright, let's do that. Click on the pencil icon for the view. Click edit view. And let's take care of the title first. Click on the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) content:title. Now with views, there's a little bit to learn here. If I click on style settings and customize the field [HTML](../../Skills/Web%20Development/HTML.md). You would think that changing this to an H3, would work and typically it does, but it doesn't in this particular theme. So there's a way around that. I'm going to uncheck that, and I'm going to click on rewrite results. And this allows us to override the output of this field with custom text. Put a check mark in there and I want it to be an H3 tag. And you'll notice down here, here's all the tags that I can use, as well as replacement patterns. So I want to make this into an H3, and the replacement pattern I want to use, comes straight out of the twig templating. Now you don't need to know that, except just go ahead and paste that in. Curly bracket, curly bracket, space title, and then close the curly brackets. And of course close the H3. Scroll down and click apply. And now my titles are looking pretty good.
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=99)** The second thing I said we wanted to do, is add a filter. So that people can choose whether they want to see news or press releases. Well, that's adding a filter. Click add and type the word type, because our article type taxonomy, has the word type in it. Put a check mark in there. And click add and configure filter criteria. We'll choose the vocabulary of article type and we'll change it to a dropdown, because it's just two values. Click apply and continue. And now of course this is is one of press release or news. We want to expose this filter, to visitors to allow them to change it. And as soon as I put a check mark in there, [Drupal](../../Skills/Web%20Development/Drupal.md) shows me a whole bunch more. And all I need to do right now is update the label. Select. Either news or press releases. I can add a description in here. The key thing here is the operator is one of news or press release. Click apply. And now you'll notice I can choose either news or press releases. Simple as that. You can create filters for all of your views, with Drupal, click save. And now my latest news, can be filtered by press release
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/exposing-filters-for-visitor-interaction?u=76281980&t=194)** or news. And there we are.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [Drupal](../../Skills/Web%20Development/Drupal.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **UI Navigation:** click on (4), scroll down (1), dropdown (1)
> **CLI Commands:** make (2)
> **Env Vars:** html (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - in (1)

#### [Adding an events calendar view](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=3)** - [Narrator] In this video we're going to add an event calendar to our Drupalville website. Of course we have an event content type, we could create a view that just lists the events, but, well, let's add a calendar instead. In order to do this we need a new module. And this happens all the time. You'll come across a requirement for your site and you'll go, "Hmm, can [Drupal](../../Skills/Web%20Development/Drupal.md) to that?" And the answer usually is, "Well, yes, Drupal can do that, and there's a module for that." So I always just search, Drupal calendar module for review. And the first one that pops up for me is, full calendar view. Now that may not be the one that pops up first for you but that's the one we're going to use. If I click on full calendar view there's an awful lot to this module. Now, the good news is it works in Drupal 9. The other good news is you can download all of the [JavaScript](../../Skills/Software%20Development/JavaScript.md) libraries to your own site, but if you don't want to, well, it works off of a CDN. So all you actually need is the module itself. So scroll down and there's a lot going on here. I'll let you read this at your leisure. Go ahead, copy the link address for the zip, or you can install it via composer if you'd like. And head back to my site, go to extend and install new module, paste and install, and enable. Now, I find the easiest way to find this kind of thing
>
> **[1:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=97)** is just filter via the text field. Go ahead and enable full calendar view plugin.
>
> **[1:51](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=111)** Now, as I mentioned, there's just a ton of options with this particular module. We're going to keep it pretty simple. Head over to structure, views and add view. And we're going to call this, event calendar. We're going to show the type of content of events, we don't need to worry about how we're sorting it, it's going to be sorted for us. Create a page and on the display settings, you'll note we have a brand new display called full calendar display. Go ahead and choose that, and it's going to automatically be a list of fields. Now we're going to do an unlimited number of items to display because we don't want to limit it on our calendar. And we won't use a pager, but we will create a menu link in the main navigation to our event calendar and click save and edit. And I'll give you a second to make sure your screen looks like mine. So once again, event calendar, content of type events, creating a page and the display is going to be a full calendar display. Zero number of items which is unlimited, uncheck use a pager, check, create a menu link and put it in the main navigation. Click save and edit. Now with this particular view nothing's going to show down here in the preview until we get everything set. So once again, our five questions; display as a page, format is the calendar,
>
> **[3:25](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=205)** fields is the title, we'll need more than that. Filter is correct and sort is correct. We need at least two more fields, we need the date field and we need the body field. Click add next to the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) fields and type the word date. We want to get event date, put check mark in there and click add and configure fields. Go ahead and change it just to an [HTML](../../Skills/Web%20Development/HTML.md) date, it really doesn't matter at this point because it's going to be in the calendar display anyway. Click apply, click add, type body, add fields, and do the trimmed at 100 characters and click apply. Now, once again, we're not going to see any preview here yet. We need to add one more field, click add, and let's look for taxonomy, click add, let's uncheck link this field to term page, and let's limit the terms by vocabulary and choose our event categories. Click apply, and we need to rearrange this because the body field needs to be last, so click on the down triangle, click rearrange, and move the body to the bottom and click apply. All right, now, finally, let's click on settings next to full calendar display. We need to make sure that the start date field
>
> **[5:01](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=301)** is the event date, that the end date field is none because we don't have an end date, if we did, we could add that in, the title field is title, on the display we'll leave these as the default, these are pretty typical, and change event bundle to events and click apply, click save and here's our calendar. Now you'll notice that I've got three events. You may need to change the date in some of your events in order for them to show up. And if I click on one of them it takes me to the node for that event, scroll up and click save. Let's take a look at that on our site. Back to site, and here's our event calendar. It's going to take me to the event. I definitely don't like that opening in a new tab, we need to fix that. Let's click on the pencil again and click edit view, and click on settings again for a full calendar display and under display we're going to scroll down and uncheck open entities into new tabs. Go ahead and uncheck that and click apply and save. Now again, there's a lot more that full calendar can do, but now if I click on the event it takes me to the node. If I head back over to the event, of course I have the week view and I can scroll through the weeks, and I have a day view.
>
> **[6:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/adding-an-events-calendar-view?u=76281980&t=396)** Terrific. If we go back to the month view, there it is. So it's really simple to get a terrific calendar into your Drupal website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (5), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **UI Navigation:** click on (7), scroll down (2), go to (1), scroll up (1)
> **CLI Commands:** find (2), make (2), node (2), composer (1)
> **Prerequisites:** install (3), configure (1)
> **Env Vars:** cdn (1), html (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)

#### [Creating a related content view](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=3)** - [Instructor] In this video, we want to add some functionality to our business directory. If I go ahead and click on business directory, and click on one of my businesses, you'll remember that we've assigned a business category using a taxonomy. Wouldn't it be great to show all of the other businesses in that same category over here in a block? And it's called a contextual block. So the context here is I'm on a node that's in the theming category for my business. Show me all the other businesses that are also in a theming category. All right, to do this we're going to add a display to our business directory view. So go to structure and views, and let's edit our business directory. Now this is a new concept. We have so far built pages. Now we're going to build some blocks. And in this case, a block with an advanced contextual filter, that's going to say, show me all of the businesses that share the same taxonomy. All right, to do this, let's start off by creating a block. Up here on displays, we're going to click add, and we're going to select block. Now you'll note we've got unsaved changes, we now have two displays. On the title, let's click on the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) business directory, and change for all displays to this block override. And the title is going to be alternate businesses.
>
> **[1:43](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=103)** Click apply. Our display is a page. Our format is an unformatted list of teasers, so let's change that. Click on content, change the display to this block override. Make sure you do that, otherwise we'll really mess up our old view, and change that to fields. Click apply this display. And click apply. Now, if you scroll down, you're just going to see a list of titles. Terrific, that's what we want. The filter criteria is published businesses and the sort is title ascending. Right, now to make this work, we need to set up the context. Click on advanced, and click contextual filters, click the add button. Once again, change all displays for this block override, and search for tax for taxonomy. We have three options here. Has taxonomy term ID, has taxonomy term ID with depth, which is when you have a multi-level taxonomy that we discussed earlier, and has taxonomy term ID depth modifier, which allows additional contextual filter values to be used to filter your results even further. Because we've only got one taxonomy term allowed for each category, we can use this top one. Click apply this display. And now we have a couple of things we need to do.
>
> **[3:17](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=197)** We have to figure out how to get the filter value, because it's currently not available. And then what to do with it when it is. Now, this is rather involved, so I'm going to go pretty slowly and explain it each step of the way. Click provide default value, because we need to get the value for the taxonomy term ID. The type is taxonomy term ID from a URL. Now, you know that the taxonomy term ID is not in the URL. That's the node ID. But once [Drupal](../../Skills/Web%20Development/Drupal.md) understands the URL, it knows everything about that particular node. So go ahead and choose taxonomy term from URL, and then uncheck the top one and check the second one, load filter from node page that's good for related taxonomy blocks, which is what we're creating. Change filter to items that share any term, that's for future proofing, and now we're good to go. Down here at the bottom, when the filter is available, specify the validation criteria. And the validator, wow, there's a lot going on here, is taxonomy term ID, out of the business categories vocabulary. It's a single ID, and that's all we need to do. Click apply this display. Now down here in the preview, everything's gone, because we have no context.
>
> **[4:52](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=292)** All right, go ahead and click save. Now whenever we create a block, we need to, well place the block. So structure, block layout, scroll down to primary,
>
> **[5:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=311)** and let's place the block. We'll look for the business directory block, and click place block. And we need to restrict it by content type. Now, think this through with me. If the context is based on the taxonomy term ID from the URL, that means we need to be on a business in order for the block to work. So we need to restrict it by content type. It won't show up unless we're actually looking at a business. Click save. And let's go back to our site. I'm on the Abico business, and you'll see alternate businesses. Abico and Butinum. Well, there's a little bit of a problem here, we shouldn't be seeing Abico, we'll fix that in just a minute. But let's go take a look at another business. In fact, let's go and find our OS training business, there it is. OS training is in the training category, and the alternate businesses are Beni Il, Lenise Virtus, OS training and Villet. Now of course, again, we need to get rid of OS training. Well, let's go ahead and do that. You can hover here and edit the view. And to do this, we just add another context. Now, once again, make sure you're on the block. It selects it for us automatically. Click advanced, and add a contextual filter. Now this time, again, this block override,
>
> **[6:48](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=408)** we need to look for ID. Now, scroll down because we need to get the content ID and exclude it from the display. Click on ID, apply. When the filter is not available, click provide the default value from, well, this time, the content ID from the URL. Now this is where Drupal still hasn't fixed some of the UI issues. You think that now that we've provided the filter, you'd be able to do something here when it is provided. Well, unfortunately not. Click on more, and click exclude. That is a little strange, but you'll get used to it. Click apply this display, and save. Now, if I've gone a little too quickly through this video, remember you can pause and rewind. The good thing is we're on the training category and OS training no longer shows up in the alternate business block for my view. Terrific, think this through for a minute, you can have news items that share a similar taxonomy for related news, if I'm looking at an event in one category, I can have a listing of all the events in other categories. And they all work exactly the same way, because we used a taxonomy in order to create those categories and that's really the key.
>
> **[8:23](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-related-content-view?u=76281980&t=503)** If I click on training, once again, all of my training nodes are here. I have four nodes. When I click on one, there are the other three listed. Terrific.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **UI Navigation:** click on (9), scroll down (3), go to (1)
> **CLI Commands:** node (4), make (3), find (1)
> **Env Vars:** url (6)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** we discussed (1), go back to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Image styles explained](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=3)** - [Instructor] In this video I want to talk to you about image styles. Now this is a topic that's pretty near and dear to my heart, since I live in the rural Midwest, where my download speed from my internet provider is four meg and my upload is 0.4. Yes for those living in a city, you heard me correctly four meg down and 0.4 up. So when you upload three and four megabyte images to your website and don't take care of them using image styles, guess what I'm doing when I hit your landing page? I'm leaving. So image styles are actually really important. Because our theme does some really neat things with images we're going to switch back to Bartik to demonstrate this principle. So I head over to appearance and make Bartik your default theme again please and then go back to structure, content types, business directory and manage display. Click on teaser and uncheck use layout builder and click save. So this is going to give us the basic built-in teaser mode for our business directory and here we are. You'll remember from past videos that we have the ability to change the size of any image that we have on our site. Click on the gear here and yours might be thumbnail or it might be medium at this point. Go ahead and change it to none or original image
>
> **[1:36](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=96)** so we can prove the point. Click update and click save. Now go back to your site and click on business directory and you'll see these are the original images that were uploaded. If you scroll down and find a business where you uploaded a really large image, well you'll see the point. This is obviously not workable and this is my point as well. If this is a two megabyte image and I'm having to download this. well that's not great. Image styles will create a version of every single image on your site to this specific size requirements that you want and so if I want to show a nice little thumbnail that say 100 by 100 pixels, [Drupal](../../Skills/Web%20Development/Drupal.md) will actually create a version of every image on my site at 100 by 100 pixels and so people like me at in the rural US or anywhere else in the world for that matter, can now view your site much more quickly because your images are optimized. So how do we do that? Go to configuration, media and image styles. These are the ones that come out of the box including when we turned on the media manager, well, media library thumbnail was turned on as well and a Linkit result thumbnail from when we installed Linkit. All right, click add image style and let's call this 250 by 250 thumbnail. Now again, you can create these any way you want
>
> **[3:11](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=191)** and you can call them anything you want. I like to put the dimensions in my name so I remember what it is later. Click create new style. This gives you a depiction of an original image and then one after we're done, well we've not actually done anything yet so let's click select a new effect and you have convert, crop, de-saturate, Resize, rotate, scale, scale and crop and again as always there are modules that give you more options here. I'm going to just going to click scale and crop, click add. You get to choose where the anchor is for your scaling. I'm just going to leave it in the middle and put 250 by 250, click add effect and so you'll now see my 800 by 600 image is scaled and cropped to 250 by 250, which is a nice square thumbnail. Again, you're able to make all kinds of image styles depending on your own needs. All right, I'm going to go back to structure, content types, business directory and manage display and click on teaser. Once again my business logo is using the original image style, click on the gear and you'll now see your new 250 by 250 thumbnail. Go ahead and click on that and click update. Scroll down and click save. Let's go back to our site and now you'll see our business directory
>
> **[4:43](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-explained?u=76281980&t=283)** has very consistent thumbnails and if I scroll down to my big OSTraining one, well because it was basically a square anyway it makes it look really great. So image styles takes whatever images you have and allows Drupal to render the images in the appropriate file size as well which is hugely important and gives you nice consistent look and feel. If I click on structure and go to content types, article and manage display, click on full content, you'll remember we're using layout builder here. I'm going to click on manage layout and you're going to remember that we put the image field here on the left-hand side. I'm going to click on the pencil and click configure and you'll see that here in layout builder we also see our image styles. Go ahead and choose 250 by 250, click update, click save and if we go back to our site and if I go into our latest news item, you'll note that our images are now 250 by 250.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (2)
> **UI Navigation:** click on (10), scroll down (3), go to (2)
> **Cross-References:** go back to (5)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (3)
> **Versions:** 0.4 (2)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)

#### [Image styles for media](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=3)** - [Instructor] So in this video we're still talking about image styles but now we're going to talk about image styles for media. To demonstrate this let's add a media field to our article content type. So I go to structure, content types, article, and manage fields. You'll remember we added a files field and a video field. Let's add another field, select media, and let's call this media image, click save and continue. We'll limit it to one save field settings and we'll limit this to just images. Go ahead and click save, all right. Let's head back to our content, filter by article, and let's update our Welcome to Drupalville node. Now you'll remember we're using layout builder for this, that's okay, click edit, and let's add an image. Now, if you don't have any images uploaded, go ahead and upload something, I've got a few uploaded, I'm going to upload this picture of the little girl and her dog, click insert selected, and click save. Because we're using layout builder, we need to go and add that field, click structure, content types, article and manage display,
>
> **[1:31](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=91)** click on full content, manage layout, and let's add that field. This is a good reminder that, when you do add fields to your content types and you're using layout builder, well of course, you'll need to go ahead and update them just like we are now. This is why planning is helpful. Click add block, find your media image field,
>
> **[1:57](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=117)** hide the label, and you'll note we have formatter here label, rendered entity, entity ID or thumbnail. Go ahead and choose rendered entity for now, and click add block and click save. Go back to your site, and there's our image. Now this image is 360 by 480. In order to make media items respect our image styles, we need to change that from rendered entity to thumbnail. So let's go ahead and do that. Head over to structure, content types, article, and manage display, full content and manage layout. Now this works, whether you're in managed layout, or if you're just in normal fields. So I'm going to scroll down, click on the media image field and click configure, and I'm going to change the rendered entity to thumbnail. And you'll notice as soon as I do that, it allows me to choose an image style. Just for argument's sake, I'm going to click update and save, and go back to site.
>
> **[3:16](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=196)** And now you'll see, that the image is actually huge, and this is the original image, before we did this because it was rendering out using the media manager, image style, that is by default, it was rendering at 480 pixels. The actual image is actually 3,224 by 4,032 pixels. So this is actually, this it's huge, it's a massively large picture. And the actual file size of this is 2.7 meg. So this would be a problem for me. Well let's fix that structure, content types, article, manage display, full content, manage layout scroll down, click on the pencil and configure the media image field. Now change that, and you'll note all of our image styles are available now with our media images. The key here is the formatter must be a thumbnail. I know that's a little counter-intuitive, but for now that's how media manager works. So let's change that to medium 220 by 220, click update, click save, go back to site,
>
> **[4:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/image-styles-for-media?u=76281980&t=279)** and now my image is 165 by 220, and this image style is 8 kilobytes. Now this just isn't for me living out in rural Midwest United States including everyone looking at your site on a mobile device while they're on their LTE service, rather than hooked up to [WiFi](../../Glossary/Standard/Wi-Fi.md). And so between regular image fields and your media fields, you have the ability to make your images any size you want giving your users the best experience possible on your website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wifi](../../Glossary/Standard/Wi-Fi.md) (1)
> **UI Navigation:** click on (3), scroll down (2), go to (1)
> **CLI Commands:** make (2), node (1), find (1)
> **Cross-References:** go back to (3)
> **Analogies:** picture (2), just like (1)
> **Prerequisites:** configure (2), you'll need (1)
> **Env Vars:** lte (1)
> **Versions:** 2.7 (1)


### 3. Menus Explained

[↑ Back to Table of Contents](#table-of-contents)

#### [Modify the main menu](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=3)** - [Instructor] In this video, I want to talk about menus and menu structure. One of the great things with [Drupal](../../Skills/Web%20Development/Drupal.md) is you have complete control over your menus. Head over to Structure, Menus and Main navigation. Your Main navigation menu is exactly what it sounds like. It's your main nav. Now, one of the things that we've seen throughout the course is that you can click and drag things to reorder them. Go ahead and put Home at the top, and just so we can demonstrate it appropriately, drag Test Landing Page up underneath About Drupal, and then slide it one over to the right. This is going to make a sub menu of About Drupalville. Go ahead and click Save. Let's go back to our site. And when I hover over About Drupalville, you would have expected there to be a dropdown menu. Well, there's a couple of things here that we need to know. Number one, not all themes support dropdown menus. Though, this one does. So let's go ahead and fix that. This is number two. Head over to Structure, Menus, and Main navigation. And we're not going to see anything here that talks about sub menus. That's because everything is in a, yes, a block. Go to Structure, Block layout, scroll down to Main navigation and click Configure. You'll note that out of the box, the menu has one level of display. Go ahead and change that to Unlimited
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=99)** and expand all menu items to show the children. All right. Scroll down and click Save and go back to your site. And now, About Drupalville has a hover state and has our sub menu. If I click Structure and Menus and Main navigation, click Edit on About Drupalville. You'll notice here that "If selected this menu link has children, the menu will always appear expanded. This option may be overridden for the entire menu tree when placing a menu block." So I could have come in here to every single dropdown menu and put a check mark in here, but it's just as simple and quicker to override that at the menu block. So now we have our menu: Home, About Drupalville, our Test Landing Page, Business Directory, Event Calendar, and Latest News. This is already looking better. Click on Structure, Menus and Footer. And you'll note, we have the Contact form, right now, we're not displaying that. Let's go ahead and move this to our Main navigation. Click Edit, and you'll see the Parent link here as Footer. If I click that dropdown, now, this is where it gets a little crazy and dribble. Every single menu is available here and there are a lot of them, including all the administration menus. So I need to find Main navigation, down here, and just put it in Main navigation, with a weight of 10.
>
> **[3:18](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/modify-the-main-menu?u=76281980&t=198)** That's going to automatically put it at the bottom. Of course, I could have clicked and dragged. Then click Save just for good measure. And back to site. Now my Contact form is right here in my main menu. Now you'll remember, Contact [Forms](../../Skills/Web%20Development/Forms.md) are also entities, and this can be fielded. You can add as many fields as you need to your Website Feedback form. So managing your menus in Drupal is actually really simple.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (3), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **UI Navigation:** dropdown (4), scroll down (2), go to (1), click on (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** go back to (2)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Creating a new menu](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=3)** - [Instructor] Adding your own Menus to your [Drupal](../../Skills/Web%20Development/Drupal.md) site is just as easy hover over Structure, Menus and Add Menu. We're just going to add a new menu and create a couple of links. Let's pick the title Test Menu, click save and let's add one internal link and one external link. Click Add link, and we'll create a link to our OSTraining business. So I'm just going to say OSTraining and I can just start typing the first few letters of the node title and Duraple will find it for me I should never paste the actual URL for an internal link into this box let Duraple do that for you go ahead and click save. All right so we have an internal link let's add an external link. Click Add link, and we'll just make a link to [Google](../../Glossary/Service/Google.md). You'll note as soon as I start typing the external link Drupal just ignores the internal links, it's enabled, we don't need to show as expanded because this is not going to an expanded Menu but what you're not seeing of course is the ability to open an external link in a new Tab or Window. You'll remember we installed the ext underscore link module. So although there's nowhere to say open this in a new Tab we've done that automatically, click save. Now we've created two Menu items in our Test Menu Menu. Let's go ahead and place the block.
>
> **[1:37](https://www.linkedin.com/learning/drupal-9-essential-training-5-layout/creating-a-new-menu?u=76281980&t=97)** Go to structure, block layout, I'm in my breeze theme, I'm going to go down to footer and I'm going to put this in footer three click Place Block. We'll just look for test, there it is, click Place Block. Let's update our title with Cool Menu Items, we'll put it on every page and of course the great thing with Drupal 9 blocks is that you can put them anywhere you want without having to make new versions, click save block. And there it is, of course we can rearrange, click save and let's go back to our site. Let's go down to the bottom and there we are, COOL MENU ITEMS, Google and the link to our OSTraining node.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (3), [Google](../../Glossary/Service/Google.md) (2)
> **CLI Commands:** node (2), make (2), find (1)
> **Env Vars:** url (1), cool (1), menu (1), items (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [OSTraining](../../Instructors/Network%20and%20System%20Administration/OSTraining.md)
- [Rod Martin](../../Instructors/Network%20and%20System%20Administration/Rod%20Martin.md)

## Skills Covered

- Drupal

## Path Context

### In [Build Your Drupal Skills](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Build%20Your%20Drupal%20Skills.md)
← [Drupal 9 Essential Training- 4 Users and Themes](Drupal%209%20Essential%20Training-%204%20Users%20and%20Themes.md) | **5 of 6** | [Drupal 9 Essential Training- 6 Finishing the Design](Drupal%209%20Essential%20Training-%206%20Finishing%20the%20Design.md) →

## Appears In

- [Build Your Drupal Skills](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Build%20Your%20Drupal%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Drupal 9 Essential Training- 6 Finishing the Design](Drupal%209%20Essential%20Training-%206%20Finishing%20the%20Design.md) — Drupal
- [Drupal 9 Essential Training- 4 Users and Themes](Drupal%209%20Essential%20Training-%204%20Users%20and%20Themes.md) — Drupal
- [Drupal 9 Essential Training- 3 Taxonomy, Media, and Modules](Drupal%209%20Essential%20Training-%203%20Taxonomy%2C%20Media%2C%20and%20Modules.md) — Drupal
- [Drupal 9 Essential Training- 2 Content and Fields](Drupal%209%20Essential%20Training-%202%20Content%20and%20Fields.md) — Drupal
- [Drupal 9 Essential Training 1 Introduction And Administration](Drupal%209%20Essential%20Training%201%20Introduction%20And%20Administration.md) — Drupal

---

[↑ Back to top](#)