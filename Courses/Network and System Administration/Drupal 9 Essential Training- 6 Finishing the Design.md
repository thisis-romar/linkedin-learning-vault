---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: drupal-9-essential-training-6-finishing-the-design
url: "https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design"
duration_minutes: 46
duration: 46m
level: Beginner
updated: 3/15/2021
learners: 1843
skills:
  - Drupal
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGn9n_iwCQ4RQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615495297567?e=2147483647&amp;v=beta&amp;t=3jgd97K1pXzkVjL4badLi0LnYLvatf024JVcOGuZNvA"
linkedin_topic: Network and System Administration
learning_paths:
  - '[Build Your Drupal Skills](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Build%20Your%20Drupal%20Skills.md)'
prev_courses:
  - '[Drupal 9 Essential Training- 5 Layout](Drupal%209%20Essential%20Training-%205%20Layout.md)'
path_nav: '[{"path":"Build Your Drupal Skills","position":6,"total":6,"prev":"Drupal 9 Essential Training- 5 Layout","next":null}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - topic/web-development
  - skill/drupal
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Drupal%209%20Essential%20Training-%206%20Finishing%20the%20Design.md)

![Drupal 9 Essential Training: 6 Finishing the Design](https://media.licdn.com/dms/image/v2/C4E0DAQGn9n_iwCQ4RQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615495297567?e=2147483647&amp;v=beta&amp;t=3jgd97K1pXzkVjL4badLi0LnYLvatf024JVcOGuZNvA)

# Drupal 9 Essential Training: 6 Finishing the Design

> In this course, instructor Rod Martin ties together what you have learned from the previous courses in this series and shows you how to finish the Drupal site you have been building. Rod begins by showing you how to add your logo. He walks you through updating and customizing your front page. Rod covers how to use a free Drupal module to add a three-column media block to your site, then steps thro

> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design) | 46m | Beginner | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Introduction to the course](#introduction-to-the-course)
- [**1. Finishing the Design**](#1-finishing-the-design) (4 videos)
  - [Finishing the design: Adding the logo](#finishing-the-design-adding-the-logo)
  - [Finishing the design: Updating the front page, part 1](#finishing-the-design-updating-the-front-page-part-1)
  - [Finishing the design: Updating the front page, part 2](#finishing-the-design-updating-the-front-page-part-2)
  - [CSS and JS Injector](#css-and-js-injector)
- [**2. Site Management**](#2-site-management) (2 videos)
  - [How to update Drupal](#how-to-update-drupal)
  - [How to synchronize between servers](#how-to-synchronize-between-servers)
- [**3. Bonus**](#3-bonus) (3 videos)
  - [Bonus: Creating a digital asset management system, part 1](#bonus-creating-a-digital-asset-management-system-part-1)
  - [Bonus: Creating a digital asset management system, part 2](#bonus-creating-a-digital-asset-management-system-part-2)
  - [Final thoughts](#final-thoughts)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to the course](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/introduction-to-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/introduction-to-the-course?u=76281980&t=2)** - Hi and welcome to the [Drupal](../../Skills/Web%20Development/Drupal.md) 9 essential training series. My name's Rod Martin. I'm your instructor for the entire series. And in this course we're going to finish the design. Well, by now if you've been following along you know we're building a site called Drupalville. But it's not quite ready. In this course we're going to add the menus that we need to make our site work. Then we're going to do a couple of housekeeping kind of things like updating our logo, managing the layout of the front page by the block system. And a couple of other things just to get the site looking presentable. We're going to add CSS to our design through a really great module called Asset Injector. We don't have access to the theme as site builders. But that doesn't mean we can't fix CSS or add our own. Next, we'll talk about how to update Drupal Core and how to synchronize your configuration between say a test server and a live server. And then finally as promised, we'll go through building a digital asset management system using the medium module and by editing a simple view. By the time we finish this course you should have a finished Drupal website. All right. Let's finish this up together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (3)
> **Env Vars:** css (2)
> **CLI Commands:** make (1)
> **Speakers:** - hi (1)


### 1. Finishing the Design

[↑ Back to Table of Contents](#table-of-contents)

#### [Finishing the design: Adding the logo](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/finishing-the-design-adding-the-logo?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/finishing-the-design-adding-the-logo?u=76281980&t=3)** - [Instructor] In this video I want to take just a few minutes to start to finish up our design. So, we have a few things to do. We're going to replace the logo. We're going to add a banner here. And add a little bit more in the side bar. As well as three blocks to round out the information on our home page. Now, what's really interesting with [Drupal](../../Skills/Web%20Development/Drupal.md) 9 is you can do your home page or your front page in a few different ways. We can do what we're about to do and just lay some blocks out on our current front page. Or we can do something like what Orange County Public Libraries has done. And use layout builder to create an entire layout for our front page. And then define it in Configuration. Just as a reminder. Configuration. System. Basic site setting. Allows you to define whichever node you want for your front page. Well, we really haven't developed our custom blocks to the point where we might be able to that easily. So, we're going to do it maybe the old fashioned way. But it won't take long. All right. Let's start by at least getting our logo updated. Well, we do that under the appearance menu. Click on Appearance. And click the Settings for Breeze. And you'll note that down here at the bottom, Logo Image, says use the logo supplied by the theme. Well, we haven't supplied a logo yet. So let's go ahead and click there. And let's upload it. You can download the logo from the resource page at [Ostraining.com](https://Ostraining.com).
>
> **[1:36](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/finishing-the-design-adding-the-logo?u=76281980&t=96)** Click Save configuration. And go back to site. Now you'll notice, where's our logo? You'll remember in an earlier video we turn that off. So we don't fix that in Appearance we fix that under structure and block layout. Because our site branding is now in a block in Drupal 9. Click Configure. And put a check mark back in the site logo. And click Save. And click back to site. Now once again you'll notice we still have the words Drupalville and our slogan. Easy to fix again. Structure. Block layout. Site branding. Configure. Let's uncheck site name. Let's leave the site slogan up. I kind of like that. Go ahead and click Save block. And back to site. And there we have it. We've updated our logo. And it's already looking a lot better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (2)
> **Prerequisites:** configure (2)
> **CLI Commands:** node (1)
> **URLs:** [ostraining.com](https://ostraining.com) (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** download the (1)
> **Analogies:** kind of like (1)

#### [Finishing the design: Updating the front page, part 1](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/finishing-the-design-updating-the-front-page-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/finishing-the-design-updating-the-front-page-part-1?u=76281980&t=3)** - [Instructor] In this video, we're going to update our front page, so it ends up looking like this. Obviously, we've got some work to do. We're going to remove all of the nodes from the front page, and add a block with an image. We're going to add three blocks to the bottom. One is a latest news block, an upcoming events block, and a featured Drupalville image block. We'll expand the welcome to Drupalville message so it fills that space. And we'll need to update the front page view so a message about the front page missing content is eliminated. Now, as you know, we could do this using layout builder. We have a landing page content type, and if I wanted to make my test landing page my front page, it would be as simple as going to configuration, system, basic site settings, and updating the node here to be the appropriate node ID, which in this case is node ID 60. So if I put a slash and six zero there, save configuration, and go back to site, click on my homepage. Well, now my test landing page is my homepage. And if I log out, this is what it looks like. Any page in your [Drupal](../../Skills/Web%20Development/Drupal.md) site can be your front page. I'll just quickly put that back, just by putting slash node back in, and clicking save configuration. Of course, if we were to use layout builder in our landing page content type, we eventually could make something
>
> **[1:37](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/finishing-the-design-updating-the-front-page-part-1?u=76281980&t=97)** that looks like Orange County. This is gorgeous, but we've nowhere near created the kinds of custom blocks that we would need in order to make something look like this. But it's absolutely doable. Instead, we're going to do it the old fashioned way. We're going to eliminate the content from the homepage. We're going to update the view. We're going to create three blocks across the bottom. Let's get started. All right, first thing, head over to content, and filter by article, and select all. It's just the quickest way to do it. Don't delete the content, remove content from front page, and click apply. I go back to my site. There is no content on the front page, and I do have this message from the view which will need to update. Let's go ahead and do that now. I'm going to click on the pencil icon, and click edit view. Now, just to be aware, we are now editing what's considered an administration view, we need to be pretty careful in here. In the no results behavior here in the middle, we're going to eliminate this unfiltered text, click on that, and click remove. We're also going to eliminate the empty node front page behavior, which gives us a little add content menu item. So click on that, and click remove. Click save.
>
> **[3:13](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/finishing-the-design-updating-the-front-page-part-1?u=76281980&t=193)** And now there's nothing on my front page except welcome to Drupalville. If I wanted to eliminate the title, of course, I could do that as well in that view. So, there we are. Our front page is now ready for us to update. The next thing is to eliminate the possibility of ever seeing a node on the front page again. Click on structure, content types, and article. Under publishing options, uncheck promoted to the front page. And since the article content type is the only content type on our site that is normally promoted to the front page, well, we don't need to worry anymore, go ahead and click save content type. The next thing is to add a basic block in here. Now there's a lot of different things we could do. We're going to keep this simple. We're just going to put a picture of Drupalville up in the main body here. So, structure, block layout, add custom block. Again, I would typically build a block type that has a media field here, so it's easier to update, but we'll just use the basic block. We'll call this front page block, so we can identify it later. Let's go ahead and add a title. So I'm going to put welcome to Drupalville. I'm going to make that an H2, and then I'll add an image. And I'm just going to upload an image
>
> **[4:49](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/finishing-the-design-updating-the-front-page-part-1?u=76281980&t=289)** from the download folder from OS training. Homepage banner five, I like that one. Drupalville streets, and I'll center it, click save.
>
> **[5:06](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/finishing-the-design-updating-the-front-page-part-1?u=76281980&t=306)** And there we are. Scroll down and click save. Click on block layout. Now you know what we have to do here, when we create a block, well we place the block. We could put it in one of two regions, the highlighted region which is typically saved for status messages, so let's not do it there. Let's put it in the content region. Click place block. Filter by front. Click place block. Now the trick here will be that we make sure we only put it on the front page, and let's go ahead and not display the title. Let's go ahead and put it on the front page. So you'll remember how to do that from a previous exercise, and click save block. Let's drag it to the top, and save block. All right, back to site. And there we are, welcome to Drupalville. Now you'll notice we've got the title here as well. So we can choose to do one of two things. We can eliminate the title from our block, or eliminate the title from the view. I like the bigger texts, let's go ahead and turn it off on the block. So block layout. We can drag page title back above front page block. Click save. And then eliminate the title from the actual block itself. Click on custom block library, click edit, and let's get rid of welcome to Drupalville, and click save.
>
> **[6:43](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/finishing-the-design-updating-the-front-page-part-1?u=76281980&t=403)** Go back to site. And there we are. That's looking pretty good. Now we've got welcome to Drupalville here twice. We can of course update that particular block. Let's do that now. Click on structure and block layout. Scroll down to the primary blocks, and let's edit the welcome to Drupalville block. Click configure. Let's not display the title, and click save. Once again, head over to custom block library, find the welcome block and edit. And let's just add some text in here. Drupalville is a terrific place to learn about Drupal. I'll just throw some lorem ipsum text in there, click save, and go back to site. And that's looking pretty good. Of course, we'd put some real text in there. The next step is to add three more views to fill out our front page and we'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (2)
> **CLI Commands:** node (6), make (5), find (1)
> **UI Navigation:** click on (8), scroll down (2)
> **Cross-References:** go back to (4), in the next (1)
> **Definitions:** is a  (2)
> **Analogies:** picture (1)
> **Warnings:** be aware (1)
> **Prerequisites:** configure (1)

#### [Finishing the design: Updating the front page, part 2](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/finishing-the-design-updating-the-front-page-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/finishing-the-design-updating-the-front-page-part-2?u=76281980&t=3)** - [Instructor] So the goal in this video is to add three blocks here underneath our main content to round out our front page. This is going to be really simple. Click on structure and views. And you'll remember, we have a latest news view, which is a page. Let's go ahead and add a block. Now we've done this before, so it shouldn't take long at all. Click edit. Remember, display, format, fields, filter, and sort. Let's click add a block. The title will stay the same, but the format will change. Click on the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) table. Change all displays to this block override, and choose [HTML](../../Skills/Web%20Development/HTML.md) list. Click apply. And apply. We don't want to show the teasers, we just want to show the title. So, click on content, and change that to fields. Again, this block override. Click apply. And we need to eliminate two fields. Once again, making sure we stay on the block. Click on the content body, change all displays to this block override and remove. Same for the business logo. Make sure it's on this block override and remove. There we have our titles, but you'll realize that they are in H3s.
>
> **[1:36](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/finishing-the-design-updating-the-front-page-part-2?u=76281980&t=96)** You know what? That's okay, let's leave them as heading threes. The only other thing we want to maybe do is remove the exposed filter. Again, change all displays to this block override and remove. And there's our preview. Let's go ahead and click save. Now when you create a block, you again place the block. Structure block layout. Scroll down to content bottom one and place the block. Filter by LAT, place block. We'll leave the title on, I like the title, but we'll restrict it to just the front page. So click on pages. Add the word front surrounded by angle brackets, show for the listed pages, and save block. Now we've done all of this many times now through the course. I'm hoping by now, this is second nature. Let's go back to the site. And there's our latest news. Now, if you didn't like this large H3 tag, it's easy to fix as well. You'll remember how to do that. Click on the pencil link, edit the view, click on content title. You might remember we did the rewrite results. Sorry, I said that was an H2, it's an H3. Go ahead and just remove that and uncheck override the output. Making sure it's on this block override, click apply and save, and that's probably a little bit nicer. All right.
>
> **[3:09](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/finishing-the-design-updating-the-front-page-part-2?u=76281980&t=189)** In the center, let's put upcoming events. Well we already have a view for that as well. Structure, views, and edit the event calendar view. We'll add a display with a block. We'll change the format from full calendar display for again this block override, that's probably the most important part of all of this, once again to an HTML list, and click apply this display. And click apply. Once again, we need to remove a couple of fields here. Click content all taxonomy terms. Change it to this block override, and remove. And same for the body. This block override, and remove. And now we've got the event name and dates. Now at the time of this recording, it's actually already October. So this event has already occurred. Let's update our filter for that, because this is upcoming events after all for this block. So we're going to add a filter, search for date, and choose event date. Again, change from all displays to this block override, and apply this display. We want to change this to again this block override is greater than or equal to today. Just type the word today, that'll grab today's date.
>
> **[4:45](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/finishing-the-design-updating-the-front-page-part-2?u=76281980&t=285)** Click apply this display, and now go down and filter and indeed we only have one event that's in the future. If you don't have any events showing up here, you'll need to go into content and events and update a few dates, so you'll see some of your upcoming events here. I'm going to click save. And structure block layout. Go down to content bottom two and click place block, and look for event calendar, place block. Once again restrict it to the front page.
>
> **[5:28](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/finishing-the-design-updating-the-front-page-part-2?u=76281980&t=328)** And there we are. For the last content block, I'm just going to make a static block with a featured image. We could easily make a view out of all of our events or news items that all have images. Right so, custom block library, add custom block. We'll just use a basic block front page bottom three. And I'm just going to put in an image. We'll call this the featured image for today, and click save. Go to block layout, go down to content three, place block. Click place block, and let's update the title called featured image. Put just on the front page. Save, and back to site, and there we are. We've got our welcome to Drupalville, some good information, latest news, event calendar and featured image. Let's move powered by [Drupal](../../Skills/Web%20Development/Drupal.md) and the administration menu over. Structure block layout, scroll down to the bottom and they're supposed to be in footer three. Tools is in footer two and the join block is in footer one. The join block is not being used unless we're not logged in.
>
> **[7:05](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/finishing-the-design-updating-the-front-page-part-2?u=76281980&t=425)** So go ahead and move the join block and the user account menu to footer one. Tools and powered by Drupal into footer two, and cool menu items into footer three. Actually, you can even disable the powered by Drupal block, and that's probably going to give us a really nice look on our front page. Well congratulations. You've updated your front page to something that's actually quite usable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [Drupal](../../Skills/Web%20Development/Drupal.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **UI Navigation:** click on (7), scroll down (2), go to (1)
> **CLI Commands:** make (3)
> **Env Vars:** html (2), lat (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [CSS and JS Injector](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/css-and-js-injector?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/css-and-js-injector?u=76281980&t=3)** - [Instructor] You might remember when we set up our test landing page that I had three videos here in a three column media. And I said at the time I'd show you how to do that in an upcoming video. Well, now's the time. But before we do that let's remove this block from our test landing page. So I'm going to head over to structure and block layout go down to the primary block. And we're going to configure our block to not show up on landing pages. Click save block and go back to site. And there we are our test landing pages now the full width of our content area. All right so the secret to this is obviously in some kind of template overrides. Most site builders don't have access to the theme in order to update the CSS. So you have one of two options. Number one, you can create the CSS and pass it onto a themer but that's going to cost you money. Let me show you a way you can do it without spending a dime. Although it's not necessarily the best thing you can do for a production site, though many people do. I'm at [drupal.org/project/asset_injector](https://drupal.org/project/asset_injector). And this has a terrific module. It allows you to inject [JavaScript](../../Skills/Software%20Development/JavaScript.md) and CSS into your site and you're able to restrict it by node, by content type
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/css-and-js-injector?u=76281980&t=99)** virtually anything you want. It's really terrific. Go ahead and install it. You'll note that version 8 x 2.7 is recommended for [Drupal](../../Skills/Web%20Development/Drupal.md) 8.8 or nine. Go ahead and install it. You know how to do that by now? And when you're ready, head back over to your site. Click on configuration, development and asset injector and then CSS injector. I've already created the CSS obviously. I'm going to edit this, but you go ahead and click add CSS injector, call it whatever you want. The label is of no consequence but here's the CSS you need to make that work. Media oembed content, width of 32%, padding of five and float left. Go ahead and enter that. The next option is when do you want this to be used? I've left it at all just for simplicity and the pre-process CSS I've left that checked. On the content types I've selected landing page. So this CSS isn't going to get loaded unless we're on a landing page content item, which is really terrific. You can have multiple conditions. You can decide whether that needs to meet all the conditions or any condition and click save. Head back over to your site.
>
> **[3:12](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/css-and-js-injector?u=76281980&t=192)** Find that test landing page. You may have to flush cache but you should see something that looks just like this. So using this really, really helpful module you can save yourself a lot of money with a themer by adding the CSS in that you need. Now, this is not a CSS class. So getting every layout and every display to work exactly right. Would take some time. So for instance, on our business directory getting these to appropriately float left with this particular theme, we also have issues on the images in an article node with layout builder. So once again, there's a lot of little things that need to be done here but that said the ability to quickly add CSS or JavaScript into your pages and be able to restrict it is incredibly helpful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
> **Env Vars:** css (12)
> **CLI Commands:** node (2), make (1), find (1)
> **Prerequisites:** install (2), set up (1), configure (1)
> **Versions:** version 8 (1), 2.7 (1), 8.8 (1)
> **Analogies:** just like (1), for instance (1)
> **Code Identifiers:** asset_injector (1)
> **URLs:** [drupal.org](https://drupal.org) (1)


### 2. Site Management

[↑ Back to Table of Contents](#table-of-contents)

#### [How to update Drupal](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/how-to-update-drupal?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/how-to-update-drupal?u=76281980&t=4)** - [Instructor] In the middle of recording this course, an update for [Drupal](../../Skills/Web%20Development/Drupal.md) was delivered, and I saw the familiar, there are updates available for your version of Drupal. You may or may not see this while you're taking this course, but if you do, here's how you can update Drupal via Composer, if you're using Dev Desktop, or if you have Composer installed on your web server. If you're using your own installation of Drupal, and Composer is not installed, a link to the instructions for updating Drupal Core are on the screen. Head over to Acquia's Dev Desktop, make sure you click on the site that you're using and open a new terminal window. Dev Desktop will take you to the correct folder, so you don't need to worry about whether you're in the right place or not. Go ahead and enter the command composer show Drupal slash core dash recommended. This will demonstrate that Dev Desktop uses the meta package, which is important because there's two different ways to update Drupal. Once again, I'm using the instructions at the link on the screen. If Drupal Core dash recommended is installed, the command returns information, which we saw that it did. The next step then is to check to see if there are updates available for Drupal. Now we know that there are, but let's run this command anyway. It's going to take a moment to run. And we'll see that indeed there is an update.
>
> **[1:40](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/how-to-update-drupal?u=76281980&t=100)** With the meta package that we have, we're going to run the command composer update Drupal core dash recommended with dependencies. Now once again, you should have a backup of your Drupal site before you do this. Once again, this does take a few minutes. Now this is a pretty typical error to get, and it's actually quite easy to fix. In this case, [PHP](../../Skills/Software%20Development/PHP.md) ran out of memory. This is pretty typical with Dev Desktop, so let me show you how to fix this. Head over to Dev Desktop. And open Dev Desktop preferences. Click on config, and we're going to edit php.ini for the version of PHP we're using which is at the time of this recording, 7.3.15. Click edit, and it's going to open up in a window like this. And all we need to do is find memory. Our memory limit is set at 256M, which is perfectly fine to run Drupal. But Composer requires a little bit more. And so in order to just ignore this for now, I'm going to put a minus one. So memory underscore limit equals minus one, which is going to say, hey, take whatever memory you need, it's unlimited, go ahead. I'm going to save that. I'm going to come back over to my terminal window and run the command again.
>
> **[3:26](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/how-to-update-drupal?u=76281980&t=206)** All right, so Drupal 9.0.4 has been downloaded and installed, I just now need to run the database update. Once again, we can do one of two things. Drush updatedb, and then drush cache rebuild, or just go to update.php in a browser. Well since we're using the command line, let's continue with it. I'm going to say drush updatedb. If you get this error, now we may have fixed this error already by the time this video actually plays in the playlist, but in case you didn't, this is a simple fix to make as well. This is an Acquia Dev Desktop issue. As you've probably figured out by now, there are a few of them. Still a terrific way to do this class. And the way to fix this particular error is at the link on the screen. All we have to do is update our config directory inside of our settings.php file. If you're not used to editing text files, well then this could be a little tricky. Here's a couple of thoughts. You need a good text editor. I'm going to be using Visual Code Studio. You cannot use Notepad on a PC for this. You can use Notepad++, but again, I'm going to recommend a good text editor like Visual Code Studio, it's free, it works on both Mac and PC. We're going to open settings.php. You'll click on the local code base for the site you're working on. Go to sites, default, and open settings.php. And down here on line 264,
>
> **[5:05](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/how-to-update-drupal?u=76281980&t=305)** enter the code you see on the screen. Dollar settings, square brackets, single quote, config sync directory, equals site's default, and then I created a folder called sync. So inside of sites default, go ahead and create a folder called sync. Easy as pie, now you'll need to save this file and overwrite it because it's a protected file. And then head back over to terminal and run drush updatedb again. No pending updates, and then drush cr just for good measure to rebuild the cache. Head to your homepage, go to reports and click on available updates, and you should see now your Drupal is at the latest version. Once again, if you're not using Dev Desktop, and you don't have Composer installed, you'll need to follow the instructions at the link on the screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (14), [PHP](../../Skills/Software%20Development/PHP.md) (7)
> **CLI Commands:** composer (7), php (7), make (2), find (1)
> **UI Navigation:** click on (4), go to (3)
> **File Paths:** settings.php (3), php.ini (1), update.php (1)
> **Tools:** terminal (3), command line (1)
> **Definitions:** is an  (2), is a  (2)
> **Best Practices:** recommended (3)
> **Env Vars:** php (2)

#### [How to synchronize between servers](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/how-to-synchronize-between-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/how-to-synchronize-between-servers?u=76281980&t=3)** - [Instructor] One of the great things about [Drupal](../../Skills/Web%20Development/Drupal.md) 9 is the ability to import and export configurations out of the database from, say, a test server and push it to a production server. Now, if you're using dev desktop today, you've only got one site. And if you're using one site on a normal web host, then this doesn't actually apply. However, it's an incredibly important concept to understand because Drupal has two parts: the codebase and the database. the codebase is all of the core files, the contributed modules, contributed themes that we have uploaded to our site. The database holds all of our content and our configurations. When we create a content type, when we create a view, these configuration items are stored in the database and recalled when necessary. So if you're working on, say, a test site, and you want to push it to a live site that's already available to people out on the web, you should never just take your database from your test site and overwrite the production site, unless absolutely no changes have ever been made. Configuration synchronization in Drupal 9 is how we now move post-launch configurations from, say, a test site or development site to production. And it's really awesome. Head over to "Configuration," "Development,"
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/how-to-synchronize-between-servers?u=76281980&t=98)** and "Configuration Synchronization." There are three main tabs: "Synchronize," "Import," and "Export." We're on our test server, let's say, so I'm going to click "Export," and I can export the full archive of configuration items from my site. Now, again, this isn't your images, your content, and all of the information you've added to your site. These are the configuration items, such as contact [Forms](../../Skills/Web%20Development/Forms.md), content types, custom block types, date formats, fields, field storage, a media type that you might have created, a role, a taxonomy vocabulary but not the terms... You get the idea. There's a difference between configuration entities and content entities. So I can export an entire archive, or I can export a single item at a time. So let's say on my test server, I've been creating a view for the business directory, and I don't have that view on my production server. I can click on "Single Item," "Simple Configuration," "Select a View," and then select the view that I want to export. There's my business directory. This is going to generate what's called a YAML file. This is the configuration, and each indent represents a different part of an array. You should never ever change the indents in a YAML file unless you really know what you're doing.
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/how-to-synchronize-between-servers?u=76281980&t=194)** These are two spaces, not tabs, and more. All I would need to do is copy this text and then go over to my production server and import it. Click on "Single Item." Once again, select a view and paste that configuration in here. Of course, this isn't going to work because I'm on the same site. I'm here at the documentation at [drupal.org](https://drupal.org). The link is on the screen. And if this is something you're interested in, I'm going to encourage you to take a long, long read of this. There's some really excellent information here about some of the dos and some of the don'ts of configuration synchronization. But this is one of the really great new features in Drupal 9 that allows us to move configuration items from a test site to a production site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (5), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **UI Navigation:** click on (2), select the (1)
> **Env Vars:** yaml (2)
> **Best Practices:** you should never (2)
> **URLs:** [drupal.org](https://drupal.org) (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 3. Bonus

[↑ Back to Table of Contents](#table-of-contents)

#### [Bonus: Creating a digital asset management system, part 1](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/bonus-creating-a-digital-asset-management-system-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/bonus-creating-a-digital-asset-management-system-part-1?u=76281980&t=3)** - [Instructor] In this bonus section, I want to show you how to create a digital asset management system in [Drupal](../../Skills/Web%20Development/Drupal.md). Now, this has been around since about Drupal 8.5, but it's tremendously flexible and gives you a fantastic asset management system. All right. All right, so this is going to take two steps. We're going to add a taxonomy to our media manager, so that we can add keywords to our media items. So the first step, "Structure," "Taxonomy," and now we could use the tags here. It just really depends on what you want to do with your taxonomy and how much you want control over it. As you might remember from our taxonomy discussion, I always recommend closed taxonomies, especially for larger websites. If this is just your blog, well, then you're welcome to do whatever you want. In this video, we're going to create our own vocabulary. Click "Add Vocabulary." And let's call this "Media Tags." Now, not to confuse it with the tagging widget, but yes, "Media Tags." Click "Save." And now let's add some terms. You'll remember we've got some videos, some images, and some PDFs. We want some keywords that relate to our site. And remember our site is, well, drupalville. So I'm going to add some keywords like "People," "Children," "Animals," "Business," "Training," and "Technology."
>
> **[1:42](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/bonus-creating-a-digital-asset-management-system-part-1?u=76281980&t=102)** You can add unlimited number of terms. Of course, you want to make sure that your media tags meet the needs of the kind of media that you'll have on your site. All right, so that's the first step, is adding the taxonomy. Now let's add the field to, at least, our image. "Structure," "Media Types," "Image," and "Manage Fields." "Add Field," select a field type, and, of course, it's going to be a taxonomy term. And add the label "Media Tag." Click "Save and Continue." We'll leave this as unlimited because you might want to have more than one tag on an image. Click "Save Field Settings." And of course, we're going to choose "Media Tags." Now, I personally love the auto-complete widget, but of course you could make this a checkbox checklist if you wanted. Click "Save Settings." Again, to make that a checkbox or checklist, you'd click on "Manage Form Display" and change this auto-complete widget to check boxes and radio buttons. All right, let's go ahead and update some of our media. So I'm going to go to "Content," "Media," and I'm going to click on this picture of the pretty girl with her dog. Click "edit," and here's our media tags. So I'm going to say "Children" and "Animals." And there we are; click "Save."
>
> **[3:22](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/bonus-creating-a-digital-asset-management-system-part-1?u=76281980&t=202)** We're going to come down to our aerial image of my hometown. Click "Edit," and I'll add just the "Business" tag for lack of a better one. Add another item, and we'll just add the "Training" tag here. Click "Save." So what you're doing here is adding the tags to your particular media so that you can find them later. Of course, you're going to go through and tag all of your images. You're also going to add the same media tag field to videos and PDFs. So let me just go ahead and do that quickly. "Structure," "Media Types," "Remote Video," "Manage Fields." Going to click "Add Field," and we can reuse the field here, the entity reference field media tag. Click "Save and Continue." And again, select media tag and save settings. All right, let's go back and add tags to our videos. "Content," "Media," find one of the videos, click "Edit," and here's our media tag. "Training" and "Technology" and save. All right, so we have two of our media types set up with tags. And in the next video, we're going to change this screen around to give us a better view into our digital asset management system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (2)
> **CLI Commands:** make (3), find (2)
> **UI Navigation:** checkbox (2), click on (2), go to (1)
> **Versions:** 8.5 (1)
> **Cross-References:** in the next (1)
> **Analogies:** picture (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Bonus: Creating a digital asset management system, part 2](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/bonus-creating-a-digital-asset-management-system-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/bonus-creating-a-digital-asset-management-system-part-2?u=76281980&t=3)** - [Instructor] So any digital asset management system worth its sold, gives you the ability to find the media that you're looking for based on any number of criteria. Well, essentially we have two or three basic criteria that we've created for this particular system. And of course you can create multiple criteria, as many as you want by duplicating the efforts from the previous video and adding different fields for different reference points. We have a title, a media type, and keywords. And that's a pretty good start to any digital asset management system. But of course, on this page, well, we don't really see much of what we really want to see. At least on this site I never need to filter or sort by language. But I do need to be able to filter by media name, type, and of course the keywords that we added. So we need to update this particular screen in order to make our digital asset management system workforce. Well guess what? In [Drupal](../../Skills/Web%20Development/Drupal.md) 9, this is a view that you have control over. Now, you can do one of two things here. We can duplicate this current view. So if we mess it up, we don't lose the right one, or you can just edit the current view based on the instructions on the video. Again, this is not something I would do on a production site without testing it thoroughly on a development site first. But with that caveat in mind,
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/bonus-creating-a-digital-asset-management-system-part-2?u=76281980&t=98)** let's go ahead and update this view. I'm going to click on the pencil, and click Edit View. Now this is an administrative view for the media area. So again, we want to be pretty careful. What we want to do, however, we're going to remove the language filter, and add our keyword filter. So that's pretty simple. Where we see filter criteria and translation language, click on Translation Language, and click Remove. Scroll down to our preview, and it's now gone, terrific. Let's add in our keyword filter, click Add. And search for tag. And you remember we have the media tag field. We want the field_media_tag, add and configure. Of course we want to select media tags, and you can choose whether it's going to be a dropdown or an auto-complete. Again, I love that auto-complete widget, so I'm going to use that one instead. And of course I want to expose this filter to visitors allowing them to change it. And we'll just update that label to say, Media Tag. Click Apply. And now down here, you'll see your media tag. Well, that's good, but let's update the display as well. So we see the media tags listed next to our media and maybe remove a couple of these.
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/bonus-creating-a-digital-asset-management-system-part-2?u=76281980&t=194)** I don't necessarily worry about the author. And I really don't need to worry at least on my site about the updated fields. So let's remove both of those and add the keyword field. So I'm going to say Media Changed and Remove, and Authored By and Remove, and click the Add button. Once again, look for the the media tag field and click Add and Configure Fields. We'll leave the label. And we're going to uncheck Link Label to Reference Entity because at least in media, that doesn't work. So I'm going to uncheck that, and click Apply. Scrolling down, here are our new media tags. Excellent. Go ahead and click Save. And now on the Media Manager page, I have my filter and I have my tags. So now if I just type in A for animals and click filter, there we are. If I clear that and type a T for training, and click filter, there's my video, and there's my image that were tagged with the same keyword. Wow, terrific. To finish this out, you might want to add the same tag field to your documents and audio and on-site videos. And of course you can add as many fields
>
> **[4:48](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/bonus-creating-a-digital-asset-management-system-part-2?u=76281980&t=288)** like this as you want. And so a simple digital asset management system that gives you a lot better insight to the media that's going to be on your site, and let's face it, most sites today have tons of media.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (1)
> **UI Navigation:** click on (2), scroll down (1), dropdown (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** configure (2)
> **Code Identifiers:** field_media_tag (1)
> **Cross-References:** previous video (1)
> **Warnings:** caveat (1)

#### [Final thoughts](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/final-thoughts?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/final-thoughts?u=76281980&t=3)** - Wow. You made it through. If you're watching this video and you've completed all the steps, you've not only built a fairly robust town-style [Drupal](../../Skills/Web%20Development/Drupal.md) website, but you've explored one of the best [content management systems](../../Skills/Web%20Development/Content%20Management%20Systems%20(CMS).md) in the world today. So let me offer some final thoughts. Here's where we've been, and you can see it on the screen. Terminology, installations, planning, administration, content, fields, taxonomy, media, modules, users, themes, layouts, menus, site management, and even the bonus digital asset management system videos. And I can't tell you how excited I am to have brought this to you. This is probably the most comprehensive Drupal course I've ever created. Now, there's a ton more. We can't possibly learn everything there is to know about Drupal in one, single course. So I want to encourage you to keep working, to keep learning. Take the course again. Maybe add your own flare to it. Set up a new dev desktop site, or a new site on your web server and explore and have fun. There are literally thousands of modules you can try. Thousands of websites you can build. Just as a final reminder, here's the content workflow that we used to build our site today. And as I've mentioned a couple of times, this particular process isn't hard and fast. There are multiple ways to do many things in Drupal.
>
> **[1:40](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/final-thoughts?u=76281980&t=100)** But this is a really solid approach to basic site building. Of course, you start with planning, and then you build your content types. Once you've built your content types, you add fields, and add any modules that you might need along the way to create the field types that you might need. As part of that, you're going to add your taxonomy, your media, and as I mentioned, any other modules you might need. From there, you're going to make sure your paths and path auto is all set for each content type. We want to give people really good URLs to find our content, not node/32471. We talked about permissions, and permissions are all about user roles, permissions, and then adding users. And we did that as we went. And permissions is one of the more important things you're going to work on if you have multiple people working on your site at the same time. Then we've got into layout. And this was the bulk of the course. We added our theme. We talked about managing our displays, blocks, layout builder, and views. And then we finally added some content. Now the develop module is a great module, but I can't stress enough. Don't leave that one on your production server. We talked about menus and a little bit about site management with configuration synchronization. Now, again, there's just so much to site management.
>
> **[3:15](https://www.linkedin.com/learning/drupal-9-essential-training-6-finishing-the-design/final-thoughts?u=76281980&t=195)** Don't forget, keep your Drupal site up-to-date. Make sure all of your core files and add-on contributed modules and themes are at the latest version at all times. And we, of course, showed you how to do that. Well, I hope you've enjoyed this course. My name's Rod Martin. And thanks for watching Drupal 9 Explained from OS Training.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Drupal](../../Skills/Web%20Development/Drupal.md) (6), [Content management systems](../../Skills/Web%20Development/Content%20Management%20Systems%20(CMS).md) (1)
> **CLI Commands:** make (2), find (1), node (1)
> **Cross-References:** we talked about (3)
> **Definitions:** is a  (2)
> **Best Practices:** don't forget (1)
> **Prerequisites:** set up (1)
> **Speakers:** - wow (1)


## Instructor

- [OSTraining](../../Instructors/Network%20and%20System%20Administration/OSTraining.md)
- [Rod Martin](../../Instructors/Network%20and%20System%20Administration/Rod%20Martin.md)

## Resources

- Exercise files available

## Skills Covered

- Drupal

## Path Context

### In [Build Your Drupal Skills](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Build%20Your%20Drupal%20Skills.md)
← [Drupal 9 Essential Training- 5 Layout](Drupal%209%20Essential%20Training-%205%20Layout.md) | **6 of 6**

## Appears In

- [Build Your Drupal Skills](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Build%20Your%20Drupal%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Drupal 9 Essential Training- 5 Layout](Drupal%209%20Essential%20Training-%205%20Layout.md) — Drupal
- [Drupal 9 Essential Training- 4 Users and Themes](Drupal%209%20Essential%20Training-%204%20Users%20and%20Themes.md) — Drupal
- [Drupal 9 Essential Training- 3 Taxonomy, Media, and Modules](Drupal%209%20Essential%20Training-%203%20Taxonomy%2C%20Media%2C%20and%20Modules.md) — Drupal
- [Drupal 9 Essential Training- 2 Content and Fields](Drupal%209%20Essential%20Training-%202%20Content%20and%20Fields.md) — Drupal
- [Drupal 9 Essential Training 1 Introduction And Administration](Drupal%209%20Essential%20Training%201%20Introduction%20And%20Administration.md) — Drupal

---

[↑ Back to top](#)