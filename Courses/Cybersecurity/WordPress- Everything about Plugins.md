---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: wordpress-everything-about-plugins
url: "https://www.linkedin.com/learning/wordpress-everything-about-plugins"
duration_minutes: 81
duration: 1h 21m
level: Intermediate
updated: 1/4/2023
learners: 5709
skills:
  - Wordpress Development
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFj8wPR8I9Erg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1671818417007?e=2147483647&amp;v=beta&amp;t=ornzaailb5Pgdp_BoQo01xAy3Yz14d7k6P0Vh1zy3-E"
linkedin_topic: Cybersecurity
learning_paths:
  - '[Advance Your Skills in WordPress](../../Paths/Cybersecurity/Learning%20Paths/Advance%20Your%20Skills%20in%20WordPress.md)'
prev_courses:
  - '[WordPress Essential Training](../Web%20Development/WordPress%20Essential%20Training.md)'
next_courses:
  - '[WordPress- REST API](WordPress-%20REST%20API.md)'
path_nav: '[{"path":"Advance Your Skills in WordPress","position":6,"total":8,"prev":"WordPress Essential Training","next":"WordPress- REST API"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/web-development
  - skill/wordpress-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/WordPress-%20Everything%20about%20Plugins.md)

![WordPress: Everything about Plugins](https://media.licdn.com/dms/image/v2/C560DAQFj8wPR8I9Erg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1671818417007?e=2147483647&amp;v=beta&amp;t=ornzaailb5Pgdp_BoQo01xAy3Yz14d7k6P0Vh1zy3-E)

# WordPress: Everything about Plugins

> Plugins are an important part of the WordPress site-building experience, so it’s important to understand how, when, and why to use plugins in your WordPress site-building process. In this beginner-level course, Allie Nimmons starts with the basics—what a plugin is, where you can find plugins, how plugins work in the WordPress file structure. She then shows you how to start working with plugins, in

> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-everything-about-plugins) | 1h 21m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Everything about WordPress plugins](#everything-about-wordpress-plugins)
  - [What you should know before taking this course](#what-you-should-know-before-taking-this-course)
- [**1. Introduction to Plugins**](#1-introduction-to-plugins) (5 videos)
  - [What is a plugin?](#what-is-a-plugin)
  - [Where to find plugins](#where-to-find-plugins)
  - [Exploring the plugin repository page](#exploring-the-plugin-repository-page)
  - [What makes a good plugin](#what-makes-a-good-plugin)
  - [Plugins in the WordPress file structure](#plugins-in-the-wordpress-file-structure)
- [**2. Getting Started with Plugins**](#2-getting-started-with-plugins) (4 videos)
  - [How to install and activate a plugin](#how-to-install-and-activate-a-plugin)
  - [How to deactivate and remove plugins](#how-to-deactivate-and-remove-plugins)
  - [How to safely update and maintain plugins](#how-to-safely-update-and-maintain-plugins)
  - [How to secure plugins with mu-plugins](#how-to-secure-plugins-with-mu-plugins)
- [**3. Building a Site with Plugins**](#3-building-a-site-with-plugins) (8 videos)
  - [Basics of using a plugin](#basics-of-using-a-plugin)
  - [Using design plugins](#using-design-plugins)
  - [Using development plugins](#using-development-plugins)
  - [Using marketing plugins](#using-marketing-plugins)
  - [Using performance and security plugins](#using-performance-and-security-plugins)
  - [Using maintenance plugins](#using-maintenance-plugins)
  - [Using admin plugins](#using-admin-plugins)
  - [Using plugins in the block editor](#using-plugins-in-the-block-editor)
- [**4. Troubleshooting Plugins**](#4-troubleshooting-plugins) (4 videos)
  - [Finding a problem plugin](#finding-a-problem-plugin)
  - [Manually removing a plugin](#manually-removing-a-plugin)
  - [Troubleshooting plugins with plugins](#troubleshooting-plugins-with-plugins)
  - [Using plugin support channels](#using-plugin-support-channels)
- [**5. Creating Your Own Plugin**](#5-creating-your-own-plugin) (4 videos)
  - [Creating a simple plugin](#creating-a-simple-plugin)
  - [Creating a complex plugin](#creating-a-complex-plugin)
  - [Submitting your plugin to the directory](#submitting-your-plugin-to-the-directory)
  - [Selling your own plugin](#selling-your-own-plugin)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps in your WordPress plugin journey](#next-steps-in-your-wordpress-plugin-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Everything about WordPress plugins](https://www.linkedin.com/learning/wordpress-everything-about-plugins/everything-about-wordpress-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/everything-about-wordpress-plugins?u=76281980&t=0)** - So you've got a new [WordPress](../../Skills/Web%20Development/WordPress.md) website, but it doesn't do nearly as much out of the box as you'd hoped. Thankfully, one of the things that makes WordPress such a powerful tool for website building is the library of thousands of free plug-ins. Not only can plug-ins save you time and energy, but they can do so much more and all without needing to know any code at all. You only need to familiarize yourself with what they are and how they work. In this course, you'll learn how plug-ins work, what they do, how to find them and how to start building with them. My name is Allie Nimmons and I've been working with WordPress since 2015. In that time, I've worked at plug-in companies, providing support, written documentation for plug-ins, provided maintenance and security services based around plug-ins and used plug-ins to build sites for others. So it's safe to say, I know a thing or two about building WordPress websites with plug-ins. If you're ready to learn everything there is to know about WordPress plugins, join me in my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (5), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** find (1)
> **Speakers:** - so (1)

#### [What you should know before taking this course](https://www.linkedin.com/learning/wordpress-everything-about-plugins/what-you-should-know-before-taking-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/what-you-should-know-before-taking-this-course?u=76281980&t=0)** - [Instructor] To get the most out of this course on [WordPress](../../Skills/Web%20Development/WordPress.md) plugins, you should have a WordPress website that you can log into using an administrator account. I'm using a test website that I've created, but you can work on pretty much any website so long as it's built with WordPress. If you need help getting started with the basics of a WordPress website, you can take my [WordPress Essential Training](../Web%20Development/WordPress%20Essential%20Training.md) course right here on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (5), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Plugins

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a plugin?](https://www.linkedin.com/learning/wordpress-everything-about-plugins/what-is-a-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/what-is-a-plugin?u=76281980&t=0)** - [Narrator] Before we learn how to use plugins, we need to understand what they are. So maybe you just launched a brand new [WordPress](../../Skills/Web%20Development/WordPress.md) website or blog, and right away you can upload images and post content in the form of pages and posts. You can also make changes and customizations with your theme or with the block editor but soon you realize that you want to do more. Maybe you want to build out a form, where you can collect information from your website visitors. Maybe you want to start selling merchandise and keep records of what you've sold. Perhaps you want help optimizing your blog posts for your SEO goals. You might even want to speed up your website or redirect some links. Plugins allow you to do all of these things and more. Each plugin is a packaged piece of software, created and distributed by a developer or a company that allows you to do something. In short, plugins add or change how something on a WordPress site works. Some plugins allow you to do one specific thing and that thing only. They can affect how things work behind the scenes or how things look to website users. They can be just a few lines of code or contain lots and lots of code. Some are 100% free for you to use and some cost money. WordPress is meant to work with or without plugins, depending on what you need to do. Think of them like apps on your smartphone. Your phone will work just fine without them but you can choose to download them for free
>
> **[1:32](https://www.linkedin.com/learning/wordpress-everything-about-plugins/what-is-a-plugin?u=76281980&t=92)** or at a cost in order to do new things with your phone. Plugins work the same way. There are thousands of available plugins out there so chances are, if you need to do something, a plugin exists to help you do it. Different types of plugins include SEO, content optimization, backup plugins, caching, security, [Forms](../../Skills/Web%20Development/Forms.md), pop-ups, image galleries, social media sharing, calendars, membership, [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) and a lot more. So now that you know what a plugin is in concept, we'll walk through how to get started finding and using them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3), [Forms](../../Skills/Web%20Development/Forms.md) (1), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1)
> **Env Vars:** seo (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Where to find plugins](https://www.linkedin.com/learning/wordpress-everything-about-plugins/where-to-find-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/where-to-find-plugins?u=76281980&t=0)** - [Instructor] So, we know what a plugin is. How do we find ones to use on our [WordPress](../../Skills/Web%20Development/WordPress.md) websites? You can find plugins in various places around the web, but the largest collection of plugins online will be the WordPress Plugin Directory. You can find it at [wordpress.org/plugins](https://wordpress.org/plugins). This page tells us how many plugins there are in the Directory as of right now. Here, you can search for plugins using the search bar. For example, if I want a form plugin, I can search [Forms](../../Skills/Web%20Development/Forms.md) and find a list of ones available. We'll go over in a later video, how to choose or qualify these plugins so you can decide exactly which one you want to use. Back on the plugins page, I can also browse through plugins. They're currently organized by block-enabled plugins or plugins that connect well with the new block editor, featured plugins that are popular and well-loved. Some beta plugins, which are still undergoing some testing, and popular plugins. These are ones that have lots and lots and lots of downloads. You can choose See all to browse more plugins within that category. You can also access the Directory from your WordPress website. In the dashboard, go to Plugins and then Add New. You can search plugins and browse by categories, just like before. The benefit to this route
>
> **[1:33](https://www.linkedin.com/learning/wordpress-everything-about-plugins/where-to-find-plugins?u=76281980&t=93)** is that when you find a plugin you like, you can install it directly to your site. Using [wordpress.org/plugins](https://wordpress.org/plugins) requires a different installation method, which we'll go through later in the installation video. But the Directory isn't the only place to find plugins. Many companies create and sell plugins themselves. GiveWP, Yost SEO, [WooCommerce](../../Skills/Web%20Development/WooCommerce.md), and many others allow you to get a plugin straight from their site. Later on, we'll talk about the differences between the installation processes of these methods, but for now, remember that these are the two most reliable places to find plugins, on [wordpress.org/plugins](https://wordpress.org/plugins) and through your website. There are some sites that resell plugins. It's not advisable to ever download a plugin from anywhere other than the Directory or the Directory from the software company that made the plugin in the first place. If you find a site that uses a plugin you like, you can find out pretty quickly what that plugin is. So, for example, I like the form on this website and I want to see if it's created with a plugin. I can go to [builtwith.com](https://builtwith.com), add the URL of the site, choose Lookup, and then scroll through this page to try to figure out what form plugin is being used. Then, I can visit that plugin and either download or purchase it for myself. Think about your site and the things that you need it to do.
>
> **[3:08](https://www.linkedin.com/learning/wordpress-everything-about-plugins/where-to-find-plugins?u=76281980&t=188)** Go to [wordpress.org/plugins](https://wordpress.org/plugins) and search around for plugins that match those features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (7), [Forms](../../Skills/Web%20Development/Forms.md) (1), [WooCommerce](../../Skills/Web%20Development/WooCommerce.md) (1)
> **CLI Commands:** find (9)
> **URLs:** [wordpress.org](https://wordpress.org) (4), [builtwith.com](https://builtwith.com) (1)
> **UI Navigation:** go to (3)
> **Analogies:** for example (2), just like (1)
> **Env Vars:** seo (1), url (1)
> **Cross-References:** later in (1)
> **Prerequisites:** install (1)

#### [Exploring the plugin repository page](https://www.linkedin.com/learning/wordpress-everything-about-plugins/exploring-the-plugin-repository-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/exploring-the-plugin-repository-page?u=76281980&t=0)** - [Instructor] Let's talk next about the plug-in directory page and how to read it. When you search through the directory and find a plug-in that you like you can select it and it'll open up its own unique page. So let's tour this plug-in directory page for Contact Form 7, which is one of my favorite plug-ins. They will mostly always be laid out like this with the name and company at the top, some stats here on the right, and tabs with important details about the plugin here, sort of in the center. So let's start with the top. I can choose the byline to visit the website of the developer who made this plugin. This may help me learn more about them or find other [products](../../Skills/Software%20Development/Microsoft%20Products.md) that they've built. And if I want to use this plugin on my own website I would choose the download button from right here. We'll talk in a future video about what to do once you've downloaded the plugin. In the details tab, I can learn more about what this plugin does, what it's for, its features, and any other important notes that the developer wants to share with me. Sometimes there may be videos or frequently asked questions in this section. The reviews tab is where you can browse what others have to say about this plugin. The installation tab will give you steps on how to install and begin using the plugin. The support tab will take you to the support forum for this plug-in if it exists. Not all plug-ins will have this.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-everything-about-plugins/exploring-the-plugin-repository-page?u=76281980&t=95)** Many developers provide free support for the plug-in from this tab and we'll talk more about plug-in support later on in the course. And the development tab will contain important information for interested developers as well as a change log, which is a list of all the changes and updates that this plug-in has seen in its lifetime. The right hand sidebar is probably my favorite part of this page, and it's where I look immediately when choosing a plug-in. It'll contain the version number. New versions of plug-ins come out frequently, and so developers will list the newest number right here. The last updated area tells you when this plugin was last updated. Pretty straightforward. You'll find how many people roughly have installed this plugin and have it activated on their websites. We'll go over later in the course, the difference between active and installed. This section will tell you the minimum required version of [WordPress](../../Skills/Web%20Development/WordPress.md) that you'll need in order for this plugin to work optimally, as well as the highest version of WordPress that this plugin is known to work with. If this plugin is available in multiple languages you can find them here. And the tags area contains [Metadata](../../Skills/Web%20Development/Metadata.md) about what kind of plugin it is. So here we can find that this one is a contact form, email, feedback, or form plugin. Advanced view will take us to some further [Statistics](../../Skills/Data%20Science/Statistics.md) about the plugin in a more visual format. The star rating area shows us at a quick glance
>
> **[3:11](https://www.linkedin.com/learning/wordpress-everything-about-plugins/exploring-the-plugin-repository-page?u=76281980&t=191)** how others feel about this plugin. There will be a list of contributors sometimes who work on the plugin, some data about how many support issues have been resolved recently, which is good for determining if support is active or abandoned for the plugin. This one even has an area where you can choose to donate to further development of this plugin. This is fairly common since all of the plugins in the WordPress directory are 100% free for anyone to use. So now that we're familiar with this page, we can use it to determine what makes a good plugin and what makes a plugin that's best for our uses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **CLI Commands:** find (5)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), you'll need (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [What makes a good plugin](https://www.linkedin.com/learning/wordpress-everything-about-plugins/what-makes-a-good-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/what-makes-a-good-plugin?u=76281980&t=0)** - [Instructor] There are a few criteria that I use to determine a good plugin from a not so good one. Like I said before, you want to make sure that the plugin is available through the [WordPress](../../Skills/Web%20Development/WordPress.md) Directory or sold directly by its creator. Resold plugins can sometimes be unreliable or sometimes even dangerous. Once you find yourself at the plugin details page, you want to qualify it the same way you might with anything else you buy. Does it have good reviews? If it has bad reviews, are those problems deal breakers for you? Does it provide active support in case you run into an issue? Does it provide clear and helpful instructions and documentation to help you start using the plugin? Has it been updated somewhat recently? This is important because new versions of WordPress come out a few times a year, so if a plugin hasn't been updated in years, it means that it will be incompatible or might have security problems that haven't been addressed. I'll also look at the number of active installs, even though that usually isn't a deal breaker, since a new plugin might be exactly what I need. Overwhelmingly bad reviews or a lack of updates can be red flags, but it's all of these qualities together that give you a full picture of how quote unquote good a plugin is. As a rule of thumb, these are all the points I try to check off before downloading a plugin. In your travels and education with WordPress, you may find lots of videos and lists online about the best plugins.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-everything-about-plugins/what-makes-a-good-plugin?u=76281980&t=95)** In my experience, yes, some plugins are not worth downloading or using, and some are so useful and so popular they tend to dominate most of these lists. But the answer to what makes a good plugin is a little bit more complex than that. Just because a plugin is popular or has good reviews doesn't mean it's necessarily the right plugin for you. I've used and loved plugins that only have a few hundred downloads or one or two reviews because they're what I need them to do. Think of it like a pair of shoes. Sure, there are brands we may associate with good shoes, but someone's favorite shoe style or brand may not be right for you, even if it looks good and is made well. So when shopping for a plugin, it's important to know what it is that you need from it. For example, maybe I want to sell a digital copy of an album on my website. I want people to purchase it and then directly download the album with no shipping or physical goods involved. [WooCommerce](../../Skills/Web%20Development/WooCommerce.md) is pretty universally acknowledged as the quote unquote best eCommerce plugin that allows you to sell stuff. It has tons of installations, great reviews, and even has an option for selling virtual goods. So, should I use this plugin to sell my album? Maybe not. I might pass over WooCommerce for a less popular plugin called Easy Digital Downloads. Even though WooCommerce has more installs and more ratings, EDD is better for my needs
>
> **[3:08](https://www.linkedin.com/learning/wordpress-everything-about-plugins/what-makes-a-good-plugin?u=76281980&t=188)** because it does one thing I want and not very much else. WooCommerce is a huge plugin, and it contains tons and tons of really helpful functionality that, for this purpose, I just don't need. So instead of going with the bigger plugin that adds more code to my site, I'll go with a more streamlined version. In the next video, I want to walk you through a brief explanation of how plugins fit within the WordPress file system. This is comprehensive knowledge that will be handy for understanding how big plugins work, as well as for troubleshooting, which we'll learn about later on in this course. But if you want to skip this and get started with using plugins right away, you can go ahead and skip to chapter two.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (4), [WooCommerce](../../Skills/Web%20Development/WooCommerce.md) (4)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** picture (1), think of it like (1), for example (1)
> **Code Identifiers:** ecommerce (1)
> **Env Vars:** edd (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** download the (1)

#### [Plugins in the WordPress file structure](https://www.linkedin.com/learning/wordpress-everything-about-plugins/plugins-in-the-wordpress-file-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/plugins-in-the-wordpress-file-structure?u=76281980&t=0)** - [Instructor] All a website is, is a series of files, named and sorted in a certain way that a browser can read and display to a user. The [WordPress](../../Skills/Web%20Development/WordPress.md) sites are absolutely no different. The WordPress file structure looks something like this. It's a series of files and folders. If you download a WordPress site to your computer this is what you can expect to see in your finder. Or if you visit a hosting account, you can see this in whatever file manager is available to you, but basically, WordPress will always look like this, give or take a few files. When you add things to your WordPress site like plugins and themes, more folders and more files are being added to this big chunk of files. Let's find the plug-ins. You'll always be able to find them by starting here in the public underscore [HTML](../../Skills/Web%20Development/HTML.md) folder and then going to the WP content folder and then the plug-ins folder. Inside this plug-in you'll find all the plug-ins that are currently installed on your website and within those folders, you can find the files that make up those plug-ins. Typically, these will be [PHP](../../Skills/Software%20Development/PHP.md) files, text files, CSS files, lots of other stuff. Now, all of this is useful to know for a few reasons. Adding files to WordPress is like adding stuff to a box. The more stuff, the heavier the box, the heavier the box, the slower it takes to move.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-everything-about-plugins/plugins-in-the-wordpress-file-structure?u=76281980&t=93)** Some plug-ins are lighter, meaning they have less code. If you have a bunch of plug-ins on your site, but they're all relatively small, it shouldn't really affect the site performance or speed too much. But if you have lots of really chunky plugins, it can potentially slow down or hinder the performance of your site. In my file manager here, I can see the size of each plugin. Seeing them in the file structure like this can help you determine how much you're really adding to the box. One way to install plugins is literally just uploading a plugin folder to this WP Content Plugins Directory, but we'll go over that process a little bit later. This is also helpful to know because if for some reason a plug-in breaks your site and you can't log into the site to fix it, you can come here. We'll talk more about this troubleshooting style later on, but basically, you can visit this area, choose the plugin that's giving you the issue, delete it and now when you do log into your WordPress website, you'll find that that plugin you just deleted from the backend is no longer here. You can go to [wordpress.org/download](https://wordpress.org/download) and download the WordPress files for yourself. Then extract the zip and find the plugins folder, just to see where it is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (9), [HTML](../../Skills/Web%20Development/HTML.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **CLI Commands:** find (6), make (1), php (1)
> **Env Vars:** html (1), php (1), css (1)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)


### 2. Getting Started with Plugins

[↑ Back to Table of Contents](#table-of-contents)

#### [How to install and activate a plugin](https://www.linkedin.com/learning/wordpress-everything-about-plugins/how-to-install-and-activate-a-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/how-to-install-and-activate-a-plugin?u=76281980&t=0)** - Now we know what plugins are and how to find them. Once you've got a plugin that you want to use, you need to install it and then activate it. This is a quick non code, two-step process that integrates the plugin software with your [WordPress](../../Skills/Web%20Development/WordPress.md) Core software. There are three main ways that you can install a plugin. Through the WordPress directory, uploading a file that you got from somewhere else into WordPress and adding the code directly to the website. So, we'll start with the first option. To start, go to your WordPress dashboard, then choose Plugins, Add New. Now the way that you actually install the plugin changes depending on where you get it from. If you get it from the directory, you'll search for it using the search bar, then choose Install Now. It will go through the installation process and make sure not to close or change your window while this is happening. Once it's installed, you'll choose Activate. Installing the plugin means that the code is on your server, but the code is not yet interacting with the site. Think of it like a lamp that's plugged in but turned off. The light is not affecting the room. And you turn the lamp on by choosing Activated. Now that it's activated, the plugin actually starts to affect the website. Now, if you're downloading the plugin from the directory on its own unique page, the process is different. You'll choose the Download button
>
> **[1:33](https://www.linkedin.com/learning/wordpress-everything-about-plugins/how-to-install-and-activate-a-plugin?u=76281980&t=93)** and a zip file will be downloaded to your computer. Similarly, if you're buying the plugin or downloading a free version from a third party website, you'll download the zip from their site or some companies will email you the zip to download. Either way, you'll end up with a zip folder that contains all the plugins code. Now go to Plugins, Add New, but this time go to Upload Plugin. Go to Choose File, find the zip folder on your computer and select Open, then select Install Now. Once it's installed, choose Activate Plugin. And you'll know that the plugin is activated, if it redirects you to either a settings page or back to the plugins page. You can always scroll through this list to find the plugin and make sure that it's active. If it's inactive, it won't have a bolded title, the coloring will look a little bit different, and inactive plugins are found on this inactive page. There's also a third way to install a plug-in and that's through the code. When you download the zip file, you can go into the site code through a file manager or FTP manager and go into the plugins folder, which will be inside the WP content folder like we talked about before. Choose the File Upload icon. Choose the plug-in folder that you downloaded from the site before and choose Open. You'll need to wait for the file to upload
>
> **[3:06](https://www.linkedin.com/learning/wordpress-everything-about-plugins/how-to-install-and-activate-a-plugin?u=76281980&t=186)** and once it's uploaded successfully, find it and make sure that it is a folder and not a file. So right here we can see that this is actually the SEO file that we just uploaded, the SEO plugin, and we need to right click it and choose Extract in order to turn it into a folder and not a zip file. WordPress can't read zip files as plugins, it has to be a folder. This is good to know because if for some reason you can't access the backend of the website and you need to add a plugin or remove a plugin, you'll do it in this manner.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (5)
> **CLI Commands:** find (4), make (3)
> **Prerequisites:** install (6), you'll need (1)
> **Exercise Files:** zip file (3), download the (2)
> **UI Navigation:** go to (4)
> **Env Vars:** seo (2), ftp (1)
> **Definitions:** is a  (2), means that (1)
> **Cross-References:** we talked about (1)

#### [How to deactivate and remove plugins](https://www.linkedin.com/learning/wordpress-everything-about-plugins/how-to-deactivate-and-remove-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/how-to-deactivate-and-remove-plugins?u=76281980&t=0)** - [Instructor] Now that we know how to install and activate plug-ins, we can have a site absolutely full of them. Maybe as you're building your site, you're installing lots of plug-ins and playing with their settings to learn which ones you want to use. But now you have a bunch of plug-ins that you don't actually want to use anymore. You can remove them fairly quickly if they are not useful to you. You should delete plug-ins that you don't use, since, remember, each plug-in takes up space on your server, whether you're using it or not. Lots of plug-ins taking up lots of space can potentially affect your site performance. So let's deactivate and remove a few plug-ins to save some space. To start, go to the plugins page and find the plugin that you want to deactivate. I'll get rid of this BB press plugin. Choose deactivate, right below the name. Now remember, this will turn the lamp off, but the lamp is still plugged in. So to remove it entirely, choose delete and then confirm. Sometimes you may want to deactivate a plugin and not delete it in order to troubleshoot, which we'll talk about later. So just remember the difference. Deactivating is not deleting. You can deactivate and delete plugins in bulk using the edit tool. To do this, you would select all the plug-ins that you'd like to deactivate, go to bulk actions, deactivate and then apply. It isn't recommended to do this.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-everything-about-plugins/how-to-deactivate-and-remove-plugins?u=76281980&t=94)** You should deactivate plug-ins one at a time just in case there's a conflict. If you remove too many at once, the server could get overloaded and your site could crash. So for the sake of safety and performance, I recommend doing this one at a time. If you're in a huge hurry, two at a time should be okay.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Best Practices:** recommended (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [How to safely update and maintain plugins](https://www.linkedin.com/learning/wordpress-everything-about-plugins/how-to-safely-update-and-maintain-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/how-to-safely-update-and-maintain-plugins?u=76281980&t=0)** - [Narrator] Once a plugin is installed and activated, it's on your site until you remove it. In the meantime, the developer or the company who created the plugin might release updated versions of that plugin with maybe more features, fixes to bugs or security patches. When this happens, a new version of the plug-in will be available for you to grab. You'll know you have plug-ins that can be updated when you find a number beside your plug-ins menu. Plug-ins with updates will be highlighted as such. It's a good idea to always take backup of your website before you choose update now. To update, go through one at a time and choose update now for every plug-in that has an update available. Don't close the window or click away until the plug-in is successfully updated with this little check mark. Sometimes plug-in updates can go wrong, and we'll talk about that in the troubleshooting section of the course. But 9 times out of 10, the update will happen without an issue. Now, if you really want to, you can update plug-ins in bulk using the edit tool. You can select all the plug-ins that need updates, go to bulk actions, update, and then apply. This isn't the recommended way to do this. It's better to do it one at a time in case there's a conflict. If you update a plug-in and a conflict occurs, you'll know why. You'll know that the conflict occurred because of the plug-in you just updated.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-everything-about-plugins/how-to-safely-update-and-maintain-plugins?u=76281980&t=94)** But if you update too many plug-ins at one time, you won't know why that conflict happened. Plus, the server could get overloaded if you update lots of plug-ins at once. So for the sake of safety and performance, update each plug-in one at a time. As a final note, you should make sure that before you update plug-ins you check for any other updates that are available. You'll want to make sure that [WordPress](../../Skills/Web%20Development/WordPress.md) is updated and that your themes are updated before you begin updating plugins.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [narrator] (1)

#### [How to secure plugins with mu-plugins](https://www.linkedin.com/learning/wordpress-everything-about-plugins/how-to-secure-plugins-with-mu-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/how-to-secure-plugins-with-mu-plugins?u=76281980&t=0)** - [Instructor] If you've got a team of people that have access to your website, you may want to be able to protect certain plugins. Some plugins are important for security. Some are vital for the main function of your site. For example, an [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) plugin will be essential for a shop website to work. There's a way that you can essentially lock a plugin from being deleted via the backend, the way that we just learned how to do. Must-use plugins, or Mu-plugins, are installed in a folder called mu-plugins, which must go in the WP Content folder. In your site files, go to the WP Content folder and create a new folder with the name mu-plugins. Confirm or save the new folder, and then move the plugins that you want to protect into this folder. So I'll go into my currently installed plugins folder and find the one I want to save, which is going to be Health Check, and I'll drag it into the mu-plugins folder. All right, I should get a success message that tells me that the item has been moved and I can see the new plugin right here inside of the mu-plugins folder. The plugin that we just added to the mu-plugins folder will appear in a new area of the plugins page called Must-Use. You can use this section to view all of the plugins that you've added to this folder at a glance. And as you can see, whatever plugins are in this folder can't be deleted and can't be deactivated.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-everything-about-plugins/how-to-secure-plugins-with-mu-plugins?u=76281980&t=93)** Those links, those buttons are entirely gone. This means a hacker or user must access the site files to change a plugin, which is typically more challenging than accessing the dashboard. Be aware that must-use plugins won't notify you when there's a new version to update like they would on this normal page. So you'll need to track and perform updates to must-use plugins manually. They also don't have the option to be auto updated the way that these ones do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 3. Building a Site with Plugins

[↑ Back to Table of Contents](#table-of-contents)

#### [Basics of using a plugin](https://www.linkedin.com/learning/wordpress-everything-about-plugins/basics-of-using-a-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/basics-of-using-a-plugin?u=76281980&t=0)** - [Narrator] There are so many different plugins out there, which can be used for almost an infinite amount of purposes. Remember, plugins aren't used to build a site but they're used to add functionality and features. In this chapter, we're going to go over how to use around 20 different plugins of various types. I have a sample [WordPress](../../Skills/Web%20Development/WordPress.md) website for a pretend museum here that I've built and I'll use some different kinds of plugins to help make it a little bit more fun and special. Keep in mind that these plugins that I'm about to use are all personal recommendations from me, based on my experience with these tools. They may not be right for you or some of these may stop being supported over time. When I add a new plugin, I'll see it added to this page. This is the one we looked at before but this is the page with no plugins installed. There are multiple ways I can interact with this page once I've added plugins to my site. So here's the plugins page with a few plugins added to it. I can use the Settings link below the plugin name to start setting up a plugin entering a PI key, setting up accounts with that plugin, whatever settings that plugin requires. Sometimes plugin settings will be nested underneath one of these items here on the left, like the site health plugin and even still, some plugins will have an icon that's added to the top bar, like this Yost plugin. Some will appear as blocks or settings on the pages and posts area.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-everything-about-plugins/basics-of-using-a-plugin?u=76281980&t=94)** Some appear as widgets and even still some may do all the things that I just mentioned. If you're ever confused about how to start using a plugin's settings, go to View Details via the plugin page and then look at the installation or FAQ tab for some instructions. Next, we're going to look at some examples of real plugins and how they work. We'll explore some of the main types of plugins like design, development, marketing, performance and security, maintenance and admin plugins.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** faq (1)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### [Using design plugins](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-design-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-design-plugins?u=76281980&t=0)** - [Instructor] Most plugins can be sorted into some basic categories. I think of them like design, development, marketing, performance and security, maintenance, and admin plugins. So for this course, we'll start with design examples. These are all tools that allow you to add design elements onto your site without needing to code them. For example, on this About page, it's looking really empty, so I want to have a gallery of images that shows the team of people who work at this museum. Instead of writing the code necessary to arrange the images the way that I want in a gallery, I'll use this image gallery plugin called Envira Gallery. Once the plugin is installed and activated, I want to change some of its settings. I can do so by going to the Envira Gallery menu item over here on the left. Many plugins have settings pages and they'll all look different. In this one, I'll need to add a gallery, and then I can use the settings for that gallery to decide how I want it to look. So I've added a new Envira Gallery here, I've added a title, I've added images in here, along with some descriptions, and I've added some configurations so that the gallery looks the way that I want. Now the important thing here is that I grab this shortcode. Shortcodes are enclosed in brackets and they look something like this. Many plugins utilize a shortcode, which is the short string between the brackets
>
> **[1:32](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-design-plugins?u=76281980&t=92)** that tell the plugin to display the content, which is attached to that code, on the front end of the site. This shortcode is tied to my gallery that I've just built. If I build additional galleries, each one will have a unique shortcode. So now all I have to do is copy this shortcode and paste it into the content on the page I want to display it on. So we can see that here. I'll copy it, go to my page, edit that page, and paste the shortcode directly into the page. I can preview what that will look like. And the gallery pops up right here. The settings that I enabled show here as well. A good reminder for using plugins is that sometimes there's a Gutenberg block or a block, editor block, that actually does what you want. If I go back to editing this page and I open up my block library, I can see that there is actually a gallery block that just comes with [WordPress](../../Skills/Web%20Development/WordPress.md). However, Envira Gallery allows me to do so many other more complex design options. So I would want to use a plugin like this to take advantage of those things. If I didn't need what Envira Gallery offers, I can just use the native tool. Let's look at another example. So on this Calendar page, I want to be able to display a calendar for events that are going on at the museum. Instead of writing code
>
> **[3:06](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-design-plugins?u=76281980&t=186)** to create a dynamic calendar of events, I'll use this plugin called Events Calendar Pro. I'll install it and activate it. And once it's activated, it will redirect me to a page like this. I can go ahead and skip this if I want. And now, I'm on the Events Calendar Settings page that provides me settings, lets me create a new event, view the calendar, lots of helpful resources as well. Now this plugin works similarly to the gallery. I can go ahead and update the settings and then create content by way of a new event. So the first time I install the plugin, you'll see the unique splash screen, which we just saw a second ago. But once you start using the plugin to build out your content and build events, the settings page is going to change, and it'll look more like this. Some plugins do that. I've gone in and updated the settings here on the General and Display tabs, and then I used the Add New menu item to start adding events. Every time I published them, they were added to this main events list. And you can go here to see all of the events that you've created. Now we have a page on the site called Calendar. Currently, it's empty and I want to display the calendar with the events that I just made on this page. Now, Events Calendar Pro does actually create an events page for you. Some plugins do that once you start creating content. It can actually add a page or a couple of pages to your website, but I want to be able to display it on this custom page.
>
> **[4:40](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-design-plugins?u=76281980&t=280)** Maybe I want to add other design elements or other content to this page. So all I need to do is edit this Calendar page and choose a block. I can search for events, choose events list, which is a block that Events Calendar plugin has added to my block library. And as you can see, all of the upcoming events, with their details and links to the individual events pages, have been added. And all I have to do is choose Update. Design plugins like these can make building out unique sections of content much faster and much easier. Is there a design element that you need on your website? Go to the Plugins page, then Add New, and look for it now using the Search plugins field. Install it, activate it, and take a look through its settings to see how it works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Prerequisites:** install (3)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using development plugins](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-development-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-development-plugins?u=76281980&t=0)** - [Narrator] Now let's talk about development plugins. These are plugins that can help you if you're doing some custom development on your [WordPress](../../Skills/Web%20Development/WordPress.md) website. If you want to be able to do some debugging on a live website, you can use a plugin like Query Monitor. It provides you with a developer tools panel so that you can do so much more dev work inside WordPress. Once it's activated, you'll actually start seeing some things right away. In the top bar, you'll find some load times, site size and the number of queries summarized. Once you hover your mouse over these values, you'll get access to parts of the development panel that you can use to debug. Maybe you want to write some custom code inside WordPress and don't want to open up the raw code source files. The simple custom CSS and [JavaScript](../../Skills/Software%20Development/JavaScript.md) plugin allows you to add code without needing to modify any theme or plug-in files. Once it's installed, you'll find it over here on the left-hand side of the screen and you can open up the custom code in various ways so we can view all the custom code that we've added to the site, and we can add custom CSS through here, add custom JavaScript through here and add custom [HTML](../../Skills/Web%20Development/HTML.md) through here. What's great is that you can name or add a title to each custom snippet that you add. You can also use the all custom code page to disable certain snippets at will
>
> **[1:32](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-development-plugins?u=76281980&t=92)** if you ever need to troubleshoot that code, it's a good way to keep your code organized and notated. Remember, if you're using a developer plugin to change or manipulate code, always take backups before you do so, just in case. Is there a development tool or feature that you're going to need on your website? Go to the plugins page, then Add New and look for it now. Install it, activate it, and take a look through its settings to see how it works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** css (2), html (1)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### [Using marketing plugins](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-marketing-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-marketing-plugins?u=76281980&t=0)** - [Narrator] Now let's talk about marketing plugins. These are plugins that can help you with your marketing efforts for your website. If you're writing SEO content, get help with Yoast SEO. It's one of the most downloaded plugins ever and it has tons of uses, but one of its most popular uses is using it for writing SEO content. Once it's installed, you'll see that all of your posts have these colored dots beside them in green, orange, or red. This post here has red ones, which means that this post isn't very well optimized for SEO and search engines. If I edit this post, I can go down to the bottom of the screen and see that Yoast is giving me some suggestions for how I can improve this post. The more suggestions I follow, the more likely it is that these little dots turn green. This is helpful for making sure you're following SEO best practices. If you want to send marketing emails through your site, you can use something like MailPoet. So I'm back here on the plugins page and I can find the MailPoet plugin by searching for it and it looks something like this. So I'll install it and once it's installed, I'll activate it. And MailPoet lets you do two main really cool things. We'll go into the settings, and in the settings we can adjust all of the various settings that apply
>
> **[1:34](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-marketing-plugins?u=76281980&t=94)** to how these emails are sent how people confirm them, what they're sent with. But the main thing I want to look at with you right now is how to actually create an email with MailPoet. So you can create welcome emails, [Newsletters](../../Skills/Web%20Development/Newsletters.md), post notifications, re-engagement emails and you can even create some emails that are connected to [WooCommerce](../../Skills/Web%20Development/WooCommerce.md), which is an [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) plugin that we'll talk about later. But say we want to go ahead and create our first newsletter. We can choose Create, select a template from this list. I'll just select this one and use the tutorial that's provided for us to learn how we can actually go about editing that newsletter. We'll change the subject, the preview text, the body, all of these great things. You can spend as much time here as you like. You can save the email for later, or you can choose Next to get started with sending it. MailPoet also allows you to create signup [Forms](../../Skills/Web%20Development/Forms.md) so that people can sign up in order to get those emails. They can be pop-ups, sliders, fixed bars, areas that go below pages, and so on. MailPoet is actually a pretty huge and comprehensive plugin, so I highly recommend going through the settings, seeing all the things that it can do, and even visiting their Help page if you have questions or want to review the knowledge base. What kind of marketing tools or features do you need on your website?
>
> **[3:09](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-marketing-plugins?u=76281980&t=189)** Go to the plugins page. Go to Add New, and go ahead and search for it. When you find it, install it, activate it and take a little look through its settings to see how it works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Newsletters](../../Skills/Web%20Development/Newsletters.md) (1), [WooCommerce](../../Skills/Web%20Development/WooCommerce.md) (1), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Env Vars:** seo (5)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (2)
> **Definitions:** means that (1), is an  (1)
> **Prerequisites:** install (2)
> **Exercise Files:** template (1)
> **Speakers:** - [narrator] (1)

#### [Using performance and security plugins](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-performance-and-security-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-performance-and-security-plugins?u=76281980&t=0)** - [Instructor] Next, let's talk about using performance and security plug-ins. It's important to note that while performance and security plug-ins can be useful, the best security and performance activities that you can do for your site begin with protecting and optimizing your site on the server level. My course on building a secure [WordPress](../../Skills/Web%20Development/WordPress.md) site goes over that in tons of detail. So let's talk now about some plugins you can use to make your site even more secure and run even better. So back on the Add Plugins page, we can search for a plugin called Wordfence. Wordfence is a good example of a security plugin that works in the background to make your site harder for hackers to access. I can install it and activate it directly from here, and once it's activated Wordfence will ask where to email security alerts too. And this is great since if something goes wrong with the site, you do want to know right away. So you'll type in your email, you can choose whether or not you'd like to be added to their mailing list, select their terms and conditions, and then choose Continue. If you have a premium license, you can enter that here. So now Wordfence will be able to provide me with a dashboard to keep an eye on my site security, and I can view that by going to Wordfence over here on the left, and then choosing Dashboard. You could go through this tour of the dashboard
>
> **[1:32](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-performance-and-security-plugins?u=76281980&t=92)** or you can hop right into it. I can also have a firewall tool that I can manage through this option. There's malware scanning through the Scan page, and a few other tools available through the Tools area. All of this I can keep track of from the back-end of my website. Now, Wordfence is a very robust and detailed plugin, they do also have a premium version, so I highly recommend that you look into their knowledge base and their documentation to learn all about what Wordfence can do. So let's go back to the Plugins page and look at another example of a security plugin, but this time one that does a very specific thing. This one is called Limit Login Attempts Reloaded. It can be found here in the directory, I can install it and activate it, and what this plug-in does is it protects your site against brute force attacks or where bots try millions and millions of times to guess your site password. Once the plug-in is activated, you can set how many times someone can try and fail to log in before being completely blocked from trying again. Your site will perform better if it's not full of malware. So let's look at a plugin next that's more focused on performance than security. So let's go back to the Plugins page, and we're going to search for a plug-in called Smush.
>
> **[3:06](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-performance-and-security-plugins?u=76281980&t=186)** If you have a lot of images like this museum website does, you'll want to make sure that those images are optimized and not taking up too much space. We can install and activate a plug-in like Smush, which will shrink each image to the smallest size possible without compromising the quality of that image. So once the plugin is activated and it's here on our Plugins page, we'll go to the Settings, and then we'll want to select the images that we want optimized. We'll go through this setup wizard later, because we don't exactly need it to get started checking these images. The Smush plugin is letting me know that I have 32 images in my media library that need to be smushed or compressed. So I can select BULK SMUSH NOW, and the plugin will begin optimizing those images. Depending on how long it'll take, you might need to wait and get an email notification when the process is actually finished. But given the fact that I only have about 32 images on the site, it should start working and complete pretty quickly. While you should always try to upload optimized images in the first place, Smush is a good option for going back and minimizing image size in order to optimize site speed and performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Definitions:** is a  (3), is called (1)
> **Prerequisites:** install (3), setup (1)
> **CLI Commands:** make (3)
> **Env Vars:** bulk (1), smush (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (1), select the (1)
> **Best Practices:** you should always (1)

#### [Using maintenance plugins](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-maintenance-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-maintenance-plugins?u=76281980&t=0)** - [Instructor] Sometimes you may need to perform maintenance or upkeep on your website in order to keep things in working order. There are many plugins that help you do this. So let's take a look at a few together. I've already installed them, and we'll just go through the settings together now. Let's start with this maintenance mode plugin called WP Maintenance Mode & Coming Soon. We'll choose the Settings, and we'll use these general settings to change things about how this works. And one of the coolest things is that we can use the Design tab to change templates and basically just how it looks. So, I want to use this template, so I'll import it, and let's take a look at how it's going to actually look. We can use the Preview button to see how it'll look to a visitor. This looks pretty good. So now we can close this out, choose Update, go back to our dashboard, go back to the settings for this plugin. And so the great thing about Maintenance Mode is you can turn on or off this page that we just created so that you can do work on the backend of your website. But anyone who comes to the site will only see that page that we just made. They'll only see that page no matter what page
>
> **[1:34](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-maintenance-plugins?u=76281980&t=94)** on the site they go to. And we can choose when to put that page up or take it down by changing the status from Deactivated to Activated. So whenever you're working on the site and don't want people to see anything except for that page, you'll choose Activated. Then choose Save settings. Another important maintenance plugin to think about is a backup plugin. I've already installed this backup plugin called UpdraftPlus. Once it's activated, you'll go to its settings page, and you have the ability to immediately take a backup using this big blue button. And when you do, you'll find that the plugin downloads all of your site files and [Databases](../../Skills/Software%20Development/Databases.md), and you can then restore them from this section down here. So as you can see, I've taken a database backup on this date and a backup of all of these other things on this date. So say, for some reason, I'm working on my website and I make a huge mistake and I want to reset my site to the way that it looked on October 24th or October 25th, I'll choose the backup that I want and just choose Restore. In this settings area, I can change things like what is backed up and where the backups are safe to, and all of this happens within the plugin itself. Finally, let's look at the Broken Link Checker plugin. This is a very small, but very powerful maintenance plugin that you may want if you have a blog. When you're blogging,
>
> **[3:06](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-maintenance-plugins?u=76281980&t=186)** you might find that the links you used in a past blog post don't work anymore, maybe a site that you link to got taken down. We don't want to send users to expired links, so the Broken Link Checker will find how many broken links you have on your website. You can find how many broken links you have and what they are. So as an example, I created this link that doesn't go anywhere, and I used some text in this blog post to go to that link. The Broken Link Checker plugin has found that link for me. And so now all I have to do is choose Unlink. The plugin will unlink and remove this link from all the places on my site where it appears. If I go to All, I can see all the links including image links that are currently on my website, and if any of them have errors, they will appear on this page as well. If I go back to the plugin and to its settings, I can also customize by automating regular checks, getting notifications of broken links, and a lot more. Using this tool will prevent you from having to manually check all the links on your site to make sure that they're still good. If you don't already have a backup plugin on your site, I recommend you add UpdraftPlus now to take your first backup. So you would go to your plugins page, then Add New, and look for it, install it, activate it,
>
> **[4:43](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-maintenance-plugins?u=76281980&t=283)** and then go to this settings page to take your first backup right here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** find (4), make (2)
> **UI Navigation:** go to (6)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (2)
> **Exercise Files:** template (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Using admin plugins](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-admin-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-admin-plugins?u=76281980&t=0)** - [Instructor] Let's go over a couple of examples of administrator plugins that allow you as the site admin to run your site a little more easily. So I've already installed them and I'll show you how their settings work and how they're laid out. The first plugin is called user switching, and it's here at the bottom of the page. After activating it, you'll notice that it doesn't have a settings link like a lot of the other ones do. Instead, we directly go to the user's area of [WordPress](../../Skills/Web%20Development/WordPress.md). Now what this plugin allows you to do is choose a user and then switch to that user. It'll allow you to look at the site with the same user permissions as that person, which can be very helpful for troubleshooting if that person is having an issue. So as you can see, we have my administrator user right here and then Todd's editor user right below it. And so if I want to look at the site the way that Todd sees it, I can just choose Switch To below Todd's name. Now, I'm seeing the site as I would if I was an editor with editor permissions rather than as an administrator. And I can click around and I can see everything that Todd would be able to see and perform the actions that Todd would be able to perform. And as you'll notice, an editor can't edit plugins, so the plugin menu doesn't even appear here. When I'm done troubleshooting, I can just choose Switch Back to Allie or whatever the other administrator account is that I want to be able to use. So next is the redirection plugin.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-admin-plugins?u=76281980&t=94)** So we'll go back to the plugins page and we can see it right down here below. And we'll choose Settings. So if you've changed your website URL or have moved certain content from one page or URL to another, you can use this plugin to automatically redirect one URL to another. So we can also access this by going to Tools and then Redirection rather than going through the plugin page every time. This is the welcome page that you'll see when you first set it up. If you have redirected your whole site from one URL to another, it's a good idea to put the source URL or the old one here and the new one here. But maybe I just want to redirect one page to another page. So I can go to Start Setup, I'll select these two options, and I'll choose Continue. Once this is finished, I'll choose Finish Setup and once this is finished, I'll choose Continue and then Ready to begin. Now, there are a lot of options in this plugin that do lots of different things all having to do with redirecting one page to another page or many pages to many other pages. But let's look at a very basic example of what this plugin can do. I'll go to Redirects and maybe I had a shop page on the site before and now I want all the traffic from that shop page to go to the donate page instead.
>
> **[3:10](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-admin-plugins?u=76281980&t=190)** So if someone types in my URL/shop, instead of that showing a broken page it will go to the donate page. Using these fields here, I can do just that. So I would enter the relative URL that I want to direct from, which would be shop, and then I would add the target URL, which would be donate. So remember, this page does not exist anymore and this page does exist. And then all I have to do is choose Redirect. That will add the redirect here, which is great because every time I add a new redirect rule, I'll see them in a list on this page. If I want to change this link at any point, I can by using Edit. If I want to delete this redirect, I can do that. If I want to disable it temporarily, I can do that. And if I want to check to make sure it's working, I can do that as well. Like I said, there's a lot you can do with this plugin like redirect groups of pages all at once. So I recommend visiting their support or their plugins page to learn a little bit more about how this plugin works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Env Vars:** url (8)
> **UI Navigation:** go to (5), switch to (2)
> **Prerequisites:** setup (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Using plugins in the block editor](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-plugins-in-the-block-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-plugins-in-the-block-editor?u=76281980&t=0)** - [Instructor] Let's go over an example of using a plugin within the block editor. Many plugins add blocks to your block library, and I think one of the strongest and most detailed examples of this is [WooCommerce](../../Skills/Web%20Development/WooCommerce.md). In the case of this site, I want to be able to sell tickets and memberships on this page. So I've already built out the [products](../../Skills/Software%20Development/Microsoft%20Products.md) on the backend of WooCommerce and now I want to use the plugin blocks to add shop content to the tickets page. So I've got two ticket sections here. One is for general admission tickets and one is for membership admission. So WooCommerce adds 23 different blocks to your library that you can use to build out a store. And we can find them either by searching Woo or WooCommerce to see some of them. Or we can get rid of that. Go up to the block search area and search WooCommerce here. All of these purple block labels are WooCommerce blocks. Since I already have a few main content areas for tickets and memberships, I can add products by category. So, I'll search for category, and I'll select Products by Category. And I have two main categories. One is Tickets and one is Memberships. So I'll select the Tickets one and choose Done. And as you can see here, my ticket admission has been populated. I can change how many columns are displayed here if I want them all stacked on top of each other this way.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-plugins-in-the-block-editor?u=76281980&t=97)** And I can choose if I want to show the product image, the product title, the product price. I can toggle all of these on or off as I'd like. So in this case, I'd like to toggle off the product image and I think I liked it better when it was three rows. I think that looks a little bit cleaner. I can do the same in the Memberships section. And the great thing about the block editor is it likes to show you your most recently used blocks first. So I don't even have to search for this block that I just used because it's right up here at the top. And I can search for my category which is going to be Memberships. And I also want to remove the product image here. Below this, maybe I want to show some other things, like reviews. Maybe every time somebody purchases a ticket, they're asked to leave a review after their visit. This block will show all of those product reviews. And I can intersperse all of these blocks with other ones as much as I want. So maybe I want to put a image right here in between these two sections. All I have to do is go ahead and find that block. Choose an image from my media library. Select it, and they'll appear right in the middle. Let's preview this page to see how we like it. And that looks pretty good. So you can build these pages
>
> **[3:09](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-plugins-in-the-block-editor?u=76281980&t=189)** out with these blocks as much as you like. And when you're happy with it, you can choose update. I can also use the blocks to create a customized cart page by adding this Cart block, which we can look at by searching for it. We can add this right here, and this is just temporary placeholder values, but as people add these things to their cart, they would be updated in this Cart section and display all the relevant information. I'd highly encourage that when you download a plugin, particularly a large or robust one like WooCommerce, that you check out the settings and all of the documentation that goes with that plugin in order to see what new blocks might be available to you. If you already have some plugins installed on your site, add a new page and then open up the block library. Scroll down and see what blocks related to the plugins you have installed appear here for you to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WooCommerce](../../Skills/Web%20Development/WooCommerce.md) (7), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (3)
> **UI Navigation:** toggle (2), select the (1), scroll down (1)
> **CLI Commands:** find (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)


### 4. Troubleshooting Plugins

[↑ Back to Table of Contents](#table-of-contents)

#### [Finding a problem plugin](https://www.linkedin.com/learning/wordpress-everything-about-plugins/finding-a-problem-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/finding-a-problem-plugin?u=76281980&t=0)** - [Instructor] Plugins are not perfect. Sometimes they can cause problems or conflicts and mess with the functionality or appearance of your website. And when that happens, it's important to put on your detective hat and determine what is causing the problem and why. Remember that sometimes on the dashboard you might see alerts, notifications, or messages in the dashboard related to the plugins that you have installed. And with very, very few exceptions, these are not errors or problems, but rather reminders or instructions or marketing messages from the plugin developer. You could tell that a plugin is causing a true conflict in a couple of different ways. If you're ever on the front end of your site and you see code or a short code, something like that, it's important to determine what used to be here. So, we can see here that the very first thing in this code says contact form 7, which I know to be a plugin that I'm using on my website. So chances are this plugin got accidentally disabled or deleted or is just not functioning properly for some reason. So I can go to the Plugins page and look for that plugin and sure enough, it somehow got deactivated. So, I can choose Activate and then go back to that page to see if that fixed the problem. And it did. The form is back the way it should be with no unexpected code on the page. So, say that didn't fix the problem. Something else we can do
>
> **[1:33](https://www.linkedin.com/learning/wordpress-everything-about-plugins/finding-a-problem-plugin?u=76281980&t=93)** is check the browser console for errors. To do that in a browser like Chrome, I would right-click on the page, choose Inspect, and then choose the Console tab. And if there were any errors on this page, they would appear in red in this section. What's helpful about that as well is it will most likely include the name of the plugin which will point me in the right direction. So if something is going wrong with the site and I can't nail down the cause with any of these methods, the tried and true option is to go ahead and disable each plugin one at a time. And if you disable one and the problem persists, you know that that isn't the culprit. You would do this until the problem is resolved and then you'll know which plugin caused it. And once you know what plugin is causing the issue, you would have to remove it. Now you might be thinking, well, why would you start disabling plugins on the site? People might then see the functionality change on the front end. We can do this in a couple of different ways, which is safer. We'll talk a little bit about one of those methods later on. But one thing that we can rely on is a staging site. You can learn more about staging sites and what they're for and how to use them in my course about staging sites.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), right-click (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Manually removing a plugin](https://www.linkedin.com/learning/wordpress-everything-about-plugins/manually-removing-a-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/manually-removing-a-plugin?u=76281980&t=0)** - [Narrator] Removing a plugin can be as simple as hitting Disable and then Delete, like we talked about before. But maybe the problem your plugin is causing is preventing you from logging into your website entirely. In that case, you can manually disable and remove plugins via your site's code. So you'll start by accessing your website's code files via FTP or through your website host, like I am right now. You'll find your WP content folder and then you'll find the plugins folder. We'll open that up and you want to find the plugin that you suspect is causing the issue. If you want to remove the plugin entirely, you can do so by deleting that folder that houses the plugin files and that will essentially delete or disable the plugin completely. However, it might be wise to first disable the plugin, just to be certain that doing so will in fact, resolve the issue. We can do that by simply changing the name of the folder. So your FTP or file manager should have a tool for you to be able to rename a folder. And in this case, I like to add X or disabled onto the name, just so I know still what the plugin is and why I changed it. So here, I'll just add a little X right here and I'll choose Confirm. I would then go back to the website and check to see if the problem was resolved. If it's not resolved, I can simply change the plugin back to what it was before in order to re-enable it. And this works because by changing the name of the plugin,
>
> **[1:34](https://www.linkedin.com/learning/wordpress-everything-about-plugins/manually-removing-a-plugin?u=76281980&t=94)** you are instructing [WordPress](../../Skills/Web%20Development/WordPress.md) to forget that it's here. The file path is broken. WordPress is not going to acknowledge or remember that this is the plugin that it's looking for. So here, I can remove that X, confirm and now the plugin will work as it did before. So if you did that and doing that does actually solve the problem, you can either leave the plugin there and continue to troubleshoot or you can completely delete the folder altogether and then log into the site properly. If the problem happened when you tried to upload the plugin in the first place, consider now downloading it fresh from the plugin library just to see if maybe as you were activating or installing it, something went wrong.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2)
> **CLI Commands:** find (3)
> **Env Vars:** ftp (2)
> **Cross-References:** we talked about (1), go back to (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [narrator] (1)

#### [Troubleshooting plugins with plugins](https://www.linkedin.com/learning/wordpress-everything-about-plugins/troubleshooting-plugins-with-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/troubleshooting-plugins-with-plugins?u=76281980&t=0)** - [Instructor] Sometimes if you're really having trouble figuring out what plugin is causing a conflict on your website, you can actually use another plugin to help you diagnose. First, let's talk about the Health Check and Troubleshooting plugin. I already have it installed on this website, and to find it, I'll actually go to Tools and then Site Health. And once on the Site Health page, I'll go to the Troubleshooting tab. And from this tab, I can enable Troubleshooting mode. By enabling this mode, I do not affect the experience of my website visitors. I can disable plugins and themes as well without actually affecting anything that my website visitors are going to see. And when I'm done using troubleshooting mode, I can actually choose this blue Disable Troubleshooting Mode button, which is going to appear at the top of the dashboard. So, I can start troubleshooting by going to Plugins and say, for example, I want to test whether my Contact Form 7 plugin is causing any issues. So as of right now, since we're in troubleshooting mode, all of these plugins are essentially disabled for my view. So I can choose Enable while troubleshooting under Contact Form 7 and it enables just the one plugin, and I can see how the site might change or not change. So in this case, what actually happened was when I enabled the plugin, a site failure occurred, which meant something bad happened, some error occurred
>
> **[1:35](https://www.linkedin.com/learning/wordpress-everything-about-plugins/troubleshooting-plugins-with-plugins?u=76281980&t=95)** and because of that, the site was automatically reverted. So that gives me some important information as I go about troubleshooting the site. Let's try a different plugin. I'll try the Give Donation plugin. And the same thing happened. So troubleshooting mode is going to give you some really helpful information about what plugins might work or not work with your current site mode. When I'm done, I'll go ahead and disable and it'll put the site right back to how it was before. Another helpful plugin to use to help you test conflicts and performance is called Check Conflicts. And it's actually right here. Once you install it, you'll get a menu item here on the left. I can go ahead and choose that. And just like with Health Check, it only applies to the site as I see it, and it uses my IP address in order to do that. So, what's unique is I could actually put someone else's IP address to mimic their environment and test the site as they would see it, but I'll leave it as my IP address. I'll leave the theme as the one that I'm using, but I also have the option to change it to any other themes that I might have installed. So for example, if I want to test a plugin against this theme versus another theme, I can do that here. But the most powerful part of this area is the plugin section. So I can say, okay, I want to test the site with Contact Form 7, Give an MailPoet and only have these plugins enabled. So I would select them all using Control or Command in order to select more than one, or I can just select one, but I can do Command to select multiple.
>
> **[3:09](https://www.linkedin.com/learning/wordpress-everything-about-plugins/troubleshooting-plugins-with-plugins?u=76281980&t=189)** I can select as many as I want and then I would choose Save Settings. And just like with Health Check, what this does is disables all of my other plugins except for these three, and I could see how the site operates and how it works with these three enabled. When I'm done and I want to put the site back to how it was before, all I have to do is choose reset settings. I would not rely on this plugin all the time for all of your plugin maintenance. You should definitely go through the troubleshooting methods we talked about in the previous video, but this is a good tool to have in your toolbox.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), just like (2)
> **Cross-References:** we talked about (1), previous video (1)
> **UI Navigation:** go to (2)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** find (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Using plugin support channels](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-plugin-support-channels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-plugin-support-channels?u=76281980&t=0)** - [Instructor] If you're still really stuck with troubleshooting a plugin issue, turn to plugin support. The developers and companies who create plugins will usually have support channels available to you, and there's two different types that you can turn to. If you're using a free plugin that you got from the plugin directory, there's a chance that they still provide free support. And you can usually find it through their page in the directory on the support tab. For example, if I need help for my GiveWP donation plugin, I can find the plugin on my Plugins page, go to View details, and then go to [WordPress.org](https://WordPress.org) Plugin Page which is going to be here on the right. Sometimes it appears up here in these tabs, but it doesn't on this plugin. So I'll go to the plugin page, and here I can find the Support tab. I'll open that up, and I can see all of the support messages and tickets as they've come in, and I can go ahead and add my own. When you purchase a plugin, support is usually included as a part of that cost and can be typically found through a portal on the website through which you purchased the plug-in. So the GiveWP site has a portal, and you can use the information you gave them when you purchased the plugin to sign in and get priority support through their website. In my experience working as a plugin support provider in the past, there are a few things that you should know or remember as some best practices when seeking out plugin support from developers.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-everything-about-plugins/using-plugin-support-channels?u=76281980&t=93)** If it's free support, please be patient. Sometimes a single developer is working to provide support for everyone using that plugin so they may not be able to help you right away. It's helpful to read any and all documentation that's available as well as old support tickets first before submitting your own support ticket. When you do send in a support ticket, include a screenshot of the issue if you can. Try to explain what you expected to happen when the problem occurred, what you did, and then what happened instead. Explain as much as you can about what preceded the issue, and if you have space to, include information about your site. You can find this information by going to Tools and then Site Health and then visiting the Info tab and choosing Copy site info to clipboard. Then you'll paste that information into the support ticket. This information can help the developer find a quick solution or give them the information they need to deduce the problem and find you a solution. Please do not hold free support channels up to the same standards of time expectations as paid support channels. And no matter what, be kind. You may be freaking out about your plugin breaking your site, but being kind is the best way to get you the fastest support.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **CLI Commands:** find (6)
> **UI Navigation:** go to (3)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 5. Creating Your Own Plugin

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a simple plugin](https://www.linkedin.com/learning/wordpress-everything-about-plugins/creating-a-simple-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/creating-a-simple-plugin?u=76281980&t=0)** - [Narrator] Now that you know all about plugins and how they work and what they're used for, you may want to actually create a plugin of your very own. And one of the best things about the open source nature of [WordPress](../../Skills/Web%20Development/WordPress.md) is that you can. If you know how to write [PHP](../../Skills/Software%20Development/PHP.md), you're pretty much ready and able to create your very own plugin from scratch. Even if you don't know PHP, you can grab a PHP snippet from somewhere else online that does something you need and then package it up in a specific way so that you can upload it as a plugin. Oftentimes, PHP snippets are added to the core files in order to add a new functionality but doing that can be tricky and sometimes those files can get removed or overridden when updates replace old files. Adding PHP this way as a plugin is safer. It won't get overridden and plugins are easier to disable and re-enable at will. So you can have much more flexibility when it comes to using this code. So let's create a very simple plugin together. The first thing to do is access your site files. We spoke before about the WordPress plugins folder so I have that opened up here, which remember, is inside your WP content folder, which is inside your root folder. We'll need to create a new folder inside the plugins folder. And we want to call this plugin Awesome Plugin. So we'll name the folder Awesome dash Plugin. It's important to give it a name that's unique, uses lowercase letters and dashes and no other spaces.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-everything-about-plugins/creating-a-simple-plugin?u=76281980&t=96)** So we'll choose, Confirm and get that Success message. And then we'll open up the folder and it should be empty, like this. And now we want to create a new PHP file. So not a new folder, but a new file. We'll name it as well. Awesome Plugin, but this time add dot PHP to the end of it, Success. We'll go ahead and open it up or through this file manager, I can choose this Pencil icon to edit it. At the top, it's important to add a valid PHP header comment. You can copy and paste this template from the developer.[wordpress.org](https://wordpress.org) website. So we'll highlight that, we'll choose Copy and once you're back in your file manager, you can paste that text right into here. You want to edit this information to be accurate to the information about your plugin. So for example, changing the name of the plugin, changing the author of the plugin, and so on and so forth. We'll talk a little bit later about all of the details that go into building out a more complex plugin and that information contains details about what we need to change about this information. But for right now, this should be okay. Just remember for future, that you'll need a link to the site, a description, version number and some author information. But this will work for right now. So we'll want to go ahead
>
> **[3:09](https://www.linkedin.com/learning/wordpress-everything-about-plugins/creating-a-simple-plugin?u=76281980&t=189)** and save our changes and wait for that Success message. Now we can go back to our website and go to the plugins page. And if we did everything correctly, we should see our new plugin right here installed on the website, which is pretty amazing. We can have the title be whatever we want. We have our name here, and when we're ready, we can go ahead and activate it. We can also disable and delete this plugin, just like any other. Now, you'll notice we didn't put any PHP in the plugin, but that's okay. We'll talk about that a little bit later in the chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (9), [WordPress](../../Skills/Web%20Development/WordPress.md) (3)
> **CLI Commands:** php (9)
> **Env Vars:** php (9)
> **Analogies:** for example (1), just like (1)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **Cross-References:** later in (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)

#### [Creating a complex plugin](https://www.linkedin.com/learning/wordpress-everything-about-plugins/creating-a-complex-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/creating-a-complex-plugin?u=76281980&t=0)** - [Instructor] In the last video, we discussed how to create a very simple plugin, but there are lots of very complex plugins out there that can do so many different things. Creating plug-ins from scratch could be a course onto itself, and it is. So for now, we'll look at what a complex plugin may look like and learn what you need to know in order to make a complex plugin for yourself. Let's look at this plugin, [WooCommerce](../../Skills/Web%20Development/WooCommerce.md). It's the most popular [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) plugin out there and it does dozens and dozens of individual things, both on the back and the front end of the website. Technically, a plugin only requires a single [PHP](../../Skills/Software%20Development/PHP.md) file to exist as a plugin, but this plugin has PHP files, [HTML](../../Skills/Web%20Development/HTML.md) files, CSS files, tons of folders with folders inside of them, and a lot more. This is the kind of intricacy you'll need in order to create a very complex plugin like WooCommerce. If you want to develop your own plugin, you'll need to be familiar with four main concepts. You need to be familiar with [WordPress](../../Skills/Web%20Development/WordPress.md) Actions and Hooks, the Plugin API Actions and Filters, WordPress core functions, and how to make an options page so that people can modify how the plugin works from the backend of their website. Visit the WordPress Plugin Developer Handbook, as well as the linked codex to learn about all of these things and keep track of how they change and evolve over time. Once you've got actions, hooks, functions,
>
> **[1:35](https://www.linkedin.com/learning/wordpress-everything-about-plugins/creating-a-complex-plugin?u=76281980&t=95)** and your options page sorted, you should be ready to go. And for some more in-depth and visual information, I highly recommend looking through the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library for a course on how to create WordPress plugins if you really want to develop your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (4), [WooCommerce](../../Skills/Web%20Development/WooCommerce.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (2), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** php (2), html (1), css (1), api (1)
> **CLI Commands:** make (2), php (2)
> **Cross-References:** in the last (1), we discussed (1)
> **Prerequisites:** you'll need (2)
> **Speakers:** - [instructor] (1)

#### [Submitting your plugin to the directory](https://www.linkedin.com/learning/wordpress-everything-about-plugins/submitting-your-plugin-to-the-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/submitting-your-plugin-to-the-directory?u=76281980&t=0)** - [Instructor] The [WordPress](../../Skills/Web%20Development/WordPress.md) plugin library directory or repository is where you can submit a plugin to be found and used by others. Developers from all over the world create and add their plugins to this list. However, it's not as easy as simply uploading a file. There are teams of people who spend time vetting and confirming or denying submitted plugins. If you've developed a simple or complex plugin that you want people to be able to use, submitting it here is your best choice. There are two main documents you should read prior to doing this. I'll give you an overview, but be sure to always check back with these links in real time before you submit a plugin, as important guidelines and information may change. First, there is a page on the developer.[wordpress.org](https://wordpress.org) website called Detailed Plugin Guidelines, and on this page you'll find all of the things that you need to set up about the plugin in order for it to have the highest chance of acceptance into the directory. So, for example, your plugin must be compatible with the general public license, it must have human readable code, and it must use WordPress's default libraries. Using these guidelines as a checklist for your plugins is a very good idea. Also on this page, make sure to be aware of the developer expectations, which applies to anyone who supports a plug-in and explains the grounds on which your plug-in could be removed from the directory. Next is the Plugin Developer FAQ.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-everything-about-plugins/submitting-your-plugin-to-the-directory?u=76281980&t=93)** It tells you things like exactly where to go to upload your plugin for submission, what to expect after submission, what to do in case you get any errors, et cetera. Understanding all of these steps and procedures means a smoother process of uploading your plugin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **Env Vars:** faq (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Warnings:** be aware (1)

#### [Selling your own plugin](https://www.linkedin.com/learning/wordpress-everything-about-plugins/selling-your-own-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/selling-your-own-plugin?u=76281980&t=0)** - [Instructor] Many plugins in the [WordPress](../../Skills/Web%20Development/WordPress.md) world are distributed and sold outside of the WordPress Directory. It's totally your choice whether or not you want to distribute through the Directory, through your own methods, or through both. Since we already talked about the Directory, let's talk now about selling your plugins independently. There are two main ways to approach this. Adding your plugin to an existing Plugin Marketplace and selling your plug-in using eCommerce solutions on a dedicated site. Websites like [codecanyon.net](https://codecanyon.net) are dedicated to collecting and selling plugins similar to how the Directory works. The upside to a Plugin Marketplace is that their search engines will help people find your plugin with basically no work on your end. You do sacrifice some control and do have to share some of your profits with this distributor, but it can be a good solution for small plugin developers or ones who don't want to spend a lot of time selling and marketing their plugins alone. If you do want to make a business out of selling your plugins, you can do that on your own website. Some people just sell downloads of their plugin file via their site using, you guessed it, a plugin. Easy Digital Downloads or parts of [WooCommerce](../../Skills/Web%20Development/WooCommerce.md) can make it pretty easy for you to set up a product that instead of shipping something to the customer, instead emails them the plugin file. You can create a plugin product, set the cost, and then upload the file right through there. Then, people can buy it and get the plugin. If you want to take it one step further and be able to provide ongoing support, you'll need a more robust solution.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-everything-about-plugins/selling-your-own-plugin?u=76281980&t=95)** Understanding plugin APIs, which we touched on a little bit in the last video, means you can give each customer an API key and that key can be connected to your systems and provide the customer with updates and support. This option requires the most work of all the options, but many plugin companies do use this method to run a dedicated business around one or a handful of plugins. Regardless of how you sell or distribute your plugin, make sure to collect the following in addition to the actual plugin file. A manual or detailed documentation of how to use the plugin, like a video. It can be text or even a pdf. Screenshots of your plugin's settings, and demos of your plugin in action. You may also want to have [Email Marketing](../../Skills/Data%20Science/Email%20Marketing.md) tools at the ready, so you can communicate with customers regarding updates or sales. You'd want support software for collecting and answering support tickets. You'd want a blog with ongoing content, like demos, case studies, et cetera, and maybe even an affiliate system so that you can promote the growth of your plugin to more people. Now, one unfortunate thing to be aware of is that due to the General Public License, others can resell your plugin files without supporting customers or providing you with a part of that profit. It's a painful downside of open source, but luckily, it's not very common. Some sites will resell plugins in packages to customers who are looking for a good deal.
>
> **[3:08](https://www.linkedin.com/learning/wordpress-everything-about-plugins/selling-your-own-plugin?u=76281980&t=188)** If you notice that one of your plugins is being resold in this way, there's not much you can do to stop it. Instead, focus on educating and communicating with your existing customers and telling them that the only true place to find your plugin and its support is through your designated channels. For example, this Ninja [Forms](../../Skills/Web%20Development/Forms.md) plugin is probably a great piece of software, but the site distributing it shown here is not associated with Ninja Forms or its parent company. Therefore, we can assume that this plugin, if you buy it from here, probably won't come with the same kind of support or updates that you would need and expect for it to work safely on your website, so always remember to download straight from the source.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (2), [WooCommerce](../../Skills/Web%20Development/WooCommerce.md) (1), [Email Marketing](../../Skills/Data%20Science/Email%20Marketing.md) (1)
> **CLI Commands:** make (3), find (2)
> **Analogies:** similar to (1), for example (1)
> **Best Practices:** make sure to (1), remember to (1)
> **Prerequisites:** set up (1), you'll need (1)
> **Code Identifiers:** ecommerce (1)
> **URLs:** [codecanyon.net](https://codecanyon.net) (1)
> **Env Vars:** api (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps in your WordPress plugin journey](https://www.linkedin.com/learning/wordpress-everything-about-plugins/next-steps-in-your-wordpress-plugin-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-everything-about-plugins/next-steps-in-your-wordpress-plugin-journey?u=76281980&t=0)** - [Instructor] Thank you so much for taking this course with me. I hope that you've learned all you need to know and more about using [WordPress](../../Skills/Web%20Development/WordPress.md) plugins. Please continue to explore plugins as you build out your websites and share your favorites with me in the Q&A section. If you want to continue your journey learning more about WordPress, I encourage you to check out my [WordPress Essential Training](../Web%20Development/WordPress%20Essential%20Training.md) course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3)
> **Speakers:** - [instructor] (1)


## Instructor

- [Allie Nimmons](../../Instructors/Web%20Development/Allie%20Nimmons.md)

## Skills Covered

- Wordpress Development

## Path Context

### In [Advance Your Skills in WordPress](../../Paths/Cybersecurity/Learning%20Paths/Advance%20Your%20Skills%20in%20WordPress.md)
← [WordPress Essential Training](../Web%20Development/WordPress%20Essential%20Training.md) | **6 of 8** | [WordPress- REST API](WordPress-%20REST%20API.md) →

## Appears In

- [Advance Your Skills in WordPress](../../Paths/Cybersecurity/Learning%20Paths/Advance%20Your%20Skills%20in%20WordPress.md)

## Related Courses

_Courses sharing skills:_

- [WordPress- Staging a Site](../Web%20Development/WordPress-%20Staging%20a%20Site.md) — Wordpress Development
- [Creating Block Patterns in WordPress](../Web%20Development/Creating%20Block%20Patterns%20in%20WordPress.md) — Wordpress Development
- [Building a WordPress Membership Site with Ecommerce](../Web%20Development/Building%20a%20WordPress%20Membership%20Site%20with%20Ecommerce.md) — Wordpress Development
- [Building a Headless WordPress Site with Gatsby](Building%20a%20Headless%20WordPress%20Site%20with%20Gatsby.md) — Wordpress Development
- [WordPress Essential Training](../Web%20Development/WordPress%20Essential%20Training.md) — Wordpress Development

---

[↑ Back to top](#)