---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: essential-statamic-for-php-and-laravel-developers
url: "https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers"
duration_minutes: 91
duration: 1h 31m
level: Intermediate
updated: 10/14/2021
learners: 10281
skills:
  - Content Management
  - Laravel
  - PHP
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGUTB7Y-sJXRw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1634058104737?e=2147483647&amp;v=beta&amp;t=VOxuMek11V5ezz3nQ64WpjG0zsxcAadDL7YInZuGr4o"
linkedin_topic: Web Development
learning_paths:
  - '[[Build Your Laravel Skills]]'
prev_courses:
  - '[[Essential Jigsaw for PHP and Laravel Developers]]'
next_courses:
  - '[[Winter CMS with Laravel]]'
path_nav: '[{"path":"Build Your Laravel Skills","position":6,"total":7,"prev":"Essential Jigsaw for PHP and Laravel Developers","next":"Winter CMS with Laravel"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/content-management
  - skill/laravel
  - skill/php
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Essential%20Statamic%20for%20PHP%20and%20Laravel%20Developers.md)

![Essential Statamic for PHP and Laravel Developers](https://media.licdn.com/dms/image/v2/C560DAQGUTB7Y-sJXRw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1634058104737?e=2147483647&amp;v=beta&amp;t=VOxuMek11V5ezz3nQ64WpjG0zsxcAadDL7YInZuGr4o)

# Essential Statamic for PHP and Laravel Developers

> Statamic, a flat-file content management system (CMS), offers developers the ability to create custom websites that are both easy to manage and beautiful. And because Statamic is built with PHP on top of Laravel, it is a natural fit for Laravel developers looking for an alternative to WordPress. In this course, join instructor Zuzana Kunckova as she covers the essentials of this versatile, full-fe

> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers) | 1h 31m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Introduction to Statamic](#introduction-to-statamic)
- [**1. Introduction to Statamic**](#1-introduction-to-statamic) (3 videos)
  - [What is Statamic?](#what-is-statamic)
  - [Statamic vs. WordPress vs. Jigsaw SSG](#statamic-vs-wordpress-vs-jigsaw-ssg)
  - [Statamic as a standalone web app vs. as a Laravel package](#statamic-as-a-standalone-web-app-vs-as-a-laravel-package)
- [**2. Getting Started with Statamic**](#2-getting-started-with-statamic) (8 videos)
  - [Installing Statamic as a standalone project](#installing-statamic-as-a-standalone-project)
  - [Installing Statamic as a Laravel package](#installing-statamic-as-a-laravel-package)
  - [Statamic starter kits](#statamic-starter-kits)
  - [Creating a user in Statamic](#creating-a-user-in-statamic)
  - [Statamic control panel](#statamic-control-panel)
  - [Adding and styling content in Statamic](#adding-and-styling-content-in-statamic)
  - [Challenge: Creating a new Statamic project](#challenge-creating-a-new-statamic-project)
  - [Solution: Creating a new Statamic project](#solution-creating-a-new-statamic-project)
- [**3. Statamic Internals**](#3-statamic-internals) (9 videos)
  - [File structure in Statamic](#file-structure-in-statamic)
  - [Blueprints, fieldtypes, and fieldsets in Statamic](#blueprints-fieldtypes-and-fieldsets-in-statamic)
  - [Assets in Statamic](#assets-in-statamic)
  - [Antlers, the templating engine in Statamic](#antlers-the-templating-engine-in-statamic)
  - [Variables in Statamic](#variables-in-statamic)
  - [Globals in Statamic](#globals-in-statamic)
  - [Navigation in Statamic](#navigation-in-statamic)
  - [Challenge: Creating a blueprint, a fieldset, and a navigation](#challenge-creating-a-blueprint-a-fieldset-and-a-navigation)
  - [Solution: Creating a blueprint, a fieldset, and a navigation](#solution-creating-a-blueprint-a-fieldset-and-a-navigation)
- [**4. Deploying Statamic on Netlify**](#4-deploying-statamic-on-netlify) (6 videos)
  - [Statamic as an SSG](#statamic-as-an-ssg)
  - [Introduction to Netlify](#introduction-to-netlify)
  - [Uploading a Statamic website to GitHub](#uploading-a-statamic-website-to-github)
  - [Deploying a Statamic website to Netlify](#deploying-a-statamic-website-to-netlify)
  - [Challenge: Deploying a Statamic project to Netlify](#challenge-deploying-a-statamic-project-to-netlify)
  - [Solution: Deploying a Statamic project to Netlify](#solution-deploying-a-statamic-project-to-netlify)
- [**Conclusion**](#conclusion) (1 videos)
  - [Where to go from here](#where-to-go-from-here)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Statamic](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-statamic?u=76281980&t=0)** - [Narrator] Statamic is a flat-file, [[Laravel]] and [[Git]]-powered CMS designed for building beautiful, easy to manage websites. It's built on Laravel, one of the most popular [[PHP]] frameworks, which makes it a great choice for Laravel developers and a great alternative to [[WordPress]]. Statamic has access to the entire Laravel ecosystem, allowing developers to build almost anything they want. And speaking of it's beautifully designed control panel and advanced functionality, there is very little you cannot do. I am Zuzana Kunckova, a Laravel developer and the founder of Larabelles, a community for women, non-binary and trans Laravel developers. I've been using Statamic in my work every day. And I'm excited to share my knowledge with you. By joining me in this [[LinkedIn]] learning course, you will discover the essentials of Statamic. How to install it, create users, how to choose and install one of many starter kits. We will walk through the control panel, as well as its entire code base. And I will show you how to create and edit content and deploy your website for free on Netlify. If that sounds exciting, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (6), [[Git]] (1), [[PHP]] (1), [[WordPress]] (1), [[LinkedIn]] (1)
> **CLI Commands:** git (1), php (1)
> **Env Vars:** cms (1), php (1)
> **Prerequisites:** install (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. Introduction to Statamic

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Statamic?](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980&t=0)** - Statemic is a flat file CMS built with [[PHP]] on top of [[Laravel]], a popular PHP framework, but what does this mean? You may be familiar with [[Content Management Systems (CMS)|content management systems]] also known as CMSs, which are software used to manage, create and modify digital content. Using a user-friendly control panel. With CMS creates a new page for your website or a new post for your blog has never been easier. CMS handles the basic infrastructure for your website, creating new pages, adding images and other things. So the only thing you have to worry about, is creating your content. Statemic is a CMS, which means that once it's up and running, you can just log in to the control panel and do most of the work from there. You don't need to know how to code to use it, but you do need to be familiar with the terminal to get it installed. And if you're a developer, you can do so much more with Statemic, you can install add-ons, themes, or go in and use the power of Laravel to extend Statemic and add more advanced functionality. And what does it mean that Statemic is a flat file CMS? It means that all its content, data, and settings, are stored in folders and files rather than in a database. This makes flat file CMS more performance than other CMS that uses database. It also makes it more secure, and possible to [[Version Control]], which brings an additional benefit when it comes to backups and collaboration with other developers.
>
> **[1:36](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980&t=96)** Statemic is a well known flat file CMS, and it is built on top of Laravel. To get a bit Laravel's ecosystem There is a very little you cannot do with Statemic, which is why its popularity skyrocketed over the past few years and why it is a great tool to have in your toolbox.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (4), [[PHP]] (2), [[Content Management Systems (CMS)|Content management systems]] (1), [[Version Control]] (1)
> **Env Vars:** cms (8), php (2)
> **Definitions:** is a  (6), means that (2), known as (1)
> **CLI Commands:** php (2)
> **Tools:** terminal (1)
> **Prerequisites:** install (1)
> **Speakers:** - statemic (1)

#### [Statamic vs. WordPress vs. Jigsaw SSG](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=0)** - [Instructor] Now that you have a good idea about what Statamic is, let's compare it to another well-known CMS, [[WordPress]]. WordPress powers around 40% of websites. And it is unquestionably the most popular website builder at the moment. It started as a blogging platform, but it evolved into a Jake of all trades kind of platform. You can do pretty much anything you want in WordPress. The benefit of WordPress is that just about anyone can use it. Thanks to its famous 5 minute installation, you can get a WordPress website up and running really quickly. People less familiar with code can do a lot by its user interface. They can install themes, plugins, and use one of many available page builders to create some truly amazing websites. In its core WordPress, and some themes and plugins are free, but there are many premium options too. WordPress needs a database to store its content in. And it uses [[PHP]] to store, and retrieve data from the database. Database is an essential part of WordPress, without it, there would be no contents. However, [[Databases]] come with potential issues. They need to be backed up on a regular basis, and it is via database that most websites are hacked. Statamic only had the paid tier for a while. But as a version 3, it offers a free tier as well. Statamic needs some initial sets up, which is done by the terminal. But once it's up and running, most things can be done from the control panel. You can also install from a variety of free,
>
> **[1:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=93)** or premium add-ons, and start tickets. Statamic doesn't have a database. All of its content, templates, assets, and settings are stored in Yammer and markdown files. Which is great, because it means everything can be committed to an online repository, and version controlled. However, you can add a database when you need one. Before we move on, I wanted to mention another popular way to create websites. And that's by using a Static Site Generator, also known as SSG. There are tons of different Static Site Generators, and you may have heard about Hugo, Jekyll, Gatsby, or [[Next.js]]. Static Site Generator that takes your website, and generate static [[HTML]] pages. There is no database, but in general, there is no control panel either. You might need to use a third party service. [[Jigsaw]] is a PHP-based Static Site Generator developed by Titan, that uses [[Laravel]] Blade's templating engine to structure content in reusable layouts, and partials. The benefit of using Jigsaw, is that you can easily host your website for free using services such as [[GitHub]] pages, or Netlify. However, with no native control panel, it is not as straightforward. Statamic however, counsel the first party add-on called Statamic Static Site Generator, which makes it possible to generate a static version of your Statamic site, and host it for free.
>
> **[3:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=188)** Every project has its own requirements, and will need its own solution. And Statamic is a great solution to many different projects. With it's user-friendly control panel, ease of use, and a huge variety of plugins and tools. It really offers the best of both worlds.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (8), [[PHP]] (2), [[Jigsaw]] (2), [[Databases]] (1), [[Next.js]] (1)
> **Env Vars:** php (2), cms (1), ssg (1), html (1)
> **Definitions:** is a  (2), is an  (1), known as (1)
> **CLI Commands:** php (2)
> **Tools:** terminal (1), github (1)
> **Prerequisites:** install (2)
> **File Paths:** next.js (1)
> **Versions:** version 3 (1)

#### [Statamic as a standalone web app vs. as a Laravel package](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-a-standalone-web-app-vs-as-a-laravel-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-a-standalone-web-app-vs-as-a-laravel-package?u=76281980&t=0)** - [Instructor] There are two ways to install your Statamic application. You can install it as a stand-alone project or as a package into an existing [[Laravel]] application. On its own, Statamic is a very flexible [[Content Management]] system, that can be used to be used to go out and manage any type of bespoke websites. It comes with many features and add-ons, so that you can build just about anything out of the box. But if you do find yourself in a situation where some custom functionality would be great, you can always install Statamic as a Laravel package and use Laravel, and it's full ecosystem to build it. Not only that, but if you already have an existing Laravel application and you are looking to add a blog or a sales page, or you are looking for a control panel to write and publish content in, Statamic is a great choice. Because Statamic is built on Laravel, Laravel developers will be very comfortable in its source code and there will be a very gentle learning curve. You can extend Laravel's core features such as models, service providers and middleware. You can create your own controllers, classes, composer dependencies and you can use either Statamic's Antlers templating engine or Laravel's Blade. Whatever you find easier. The world is your oyster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (8), [[Content Management]] (1)
> **CLI Commands:** find (2), composer (1)
> **Prerequisites:** install (3)
> **Definitions:** is a  (2)
> **Exercise Files:** source code (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Getting Started with Statamic

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing Statamic as a standalone project](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=0)** - [Instructor] Let's see how to install Statamic as a standalone app first. You will need to have Composer installed. If you don't have Composer installed, go to [getcomposer.org](https://getcomposer.org) and follow the instructions there. I will assume you have your local development environment ready too. In my case, I'm using [[Laravel]] Valet, but you can use any other local [[PHP]] development environment you prefer. In this course, I'll be showing you how use Statamic as a standalone app and how to use it as a Laravel package. I'm going to create two different projects. One will be called statamic-standalone, and it will represent a standalone Statamic app. The other project will be called statamic-in-laravel, and it will represent Statamic as a Laravel package. Once you have Composer installed, there are a few different ways you can install Statamic. The preferred method is to use the Statamic [[CLI]] installer. You will need to install it by running composer global require statamic/cli in the terminal. Now that we have the Statamic CLI installed, let's install the Statamic standalone project. To do that, we need to run statamic new followed by the name of the project in the terminal. I'm going to run statamic new statamic-standalone. The Statamic installer will ask you whether you'd like to install a blank site or a starter kit. Starter kits are very useful templates that will get you started in no time. You can find the list of all Statamic as well as community starter kits on the Statamic website.
>
> **[1:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=95)** We will look into them in detail in the next video, but for now, I decided to use the Statamic Starter's Creek template. In the terminal, select 1 by typing 1 at the command prompt. You'll need to enter the package name now, which you can find on the Statamic website. We'll only need the end of the command, statamic/statamic-kit-starters-creek. Let's copy this and paste it into our terminal. I could have just run the full command at the beginning of the installation too. Statamic will ask you if you want to create a user. Do we want to create a super user, in other words, admin? Yes. I'll add my email, my name, and the password. And that's it. Installation has been completed. Let's cd, or change directory, inside our new project. Because I used Valet, I can display statamic-standalone.test in my browser. And here it is. A brand new Statamic website. You might need to go to your localhost URL depending on how your local development environment is set up. The second way to install a Statamic app using Composer is by running composer create-project --prefer-dist statamic/statamic and the site name.
>
> **[3:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=190)** This will install an empty Statamic starter site with no default content. I'm going to quickly install another project to show you how this works, and I'll call it statamic-default. Let's cd out of the current directory. I'll run the following command in the terminal, composer create-project --prefer-dist statamic/statamic statamic-default. Let's check out a site in the browser. Again, I'm going to view a URL provided by Valet which is based on the name of the directory, statamic-default.test. You can see that this project is bland with no content and very little style unlike the one we created a moment ago. I'm going to delete the statamic-default project now using the rm -rf command, as we are not going to need it again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (4), [[CLI]] (3), [[PHP]] (1)
> **CLI Commands:** composer (7), find (2), cd (2), php (1), rm (1)
> **Prerequisites:** install (8), you'll need (1), set up (1)
> **Tools:** terminal (5), command prompt (1)
> **Env Vars:** cli (2), url (2), php (1)
> **UI Navigation:** go to (2)
> **URLs:** [getcomposer.org](https://getcomposer.org) (1)
> **Cross-References:** in the next (1)

#### [Installing Statamic as a Laravel package](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=0)** - Let's move on to installing Statamic as a [[Laravel]] package. I will first install a brand-new Laravel project and I will call it Statamic in Laravel, by running laravel new statamic-in-laravel in my terminal. I already have the Laravel installer installed which is why I can run this command. You can see more about a Laravel installer on the Laravel website. You can either use this, or install Laravel the way you are familiar with. Let's check out a landing page in the browser, at statamic-in-Laravel.test. As you can see, our basic default Laravel application is working just as it should. In order to install statamic, we will need to open this project in an integrated development environment, an IDE. I am using [[PHP]] storm, but feel free to use any IDE you prefer. Let's open the composer.[[JSON]] file. In here, we need to add some code to the post-autoload-dump section of the file. Let's scroll down until we find it. And here it is. We need to add, @php artisan statamic:install --ansi. Let's save the file and go back to our terminal. Let's cd into the project and run composer require statamic /cms -w I need to use the w flag because of some issues with dependencies statamic is currently having, but you might be able to run the command without this flag.
>
> **[1:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=95)** Try it out. Once finished, let's go back to PHP storm, and here you can see that statamic added the content, and users directories. And the statamic directory inside config directory to the default Laravel project. The landing page is still the same because we haven't set up any custom statamic routes, but if you go to /cp, we can see that this will take us to the statamic control panel login page. From here on, you can use statamic as a part of your Laravel project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (13), [[PHP]] (3), [[JSON]] (1)
> **CLI Commands:** php (3), composer (2), find (1), cd (1), cp (1)
> **Prerequisites:** install (4), set up (1)
> **Env Vars:** ide (2), php (2)
> **UI Navigation:** open the (1), scroll down (1), go to (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **File Paths:** composer.json (1)

#### [Statamic starter kits](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=0)** - [Instructor] Statamic comes with a few official starter kits, which consists of ready-made templates as well as some community starter kits. To see the list again, let's go to [Statamic.com/starter-kits](https://Statamic.com/starter-kits). If you choose not to have a starter kit and only install the default Statamic installation, with no front-end styling predefined for you, you would simply run Statamic New and your project's name, and select blank sites. But if you do want to start with a starter kit, there are quite a few you can choose from. Some come with an existing design, while others are designed agnostic and come bundled with some tools like Tailwind CSS and Alpine JS. In the previous video, you randomly chose and installed a Statamic starter kit called Starter's Creek, developed by the Statamic team. This is a beautiful multi-author blog with author pages. But we could have picked up any idea from these kits. For example, Peak by Studio 1902. Here, we have a short description, a few screenshots, and the link to the official documentation. Let's check out another kit. For example, the Simple Commerce kits. This is a great starting place for simple [[E-Commerce]] sites. These are its features and installation instructions. The simplest way to install it would be to copy this link and paste it in your terminal. Some kits will have a link to the demo site, for example, the Doogie Browser kit.
>
> **[1:39](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=99)** Any starter kit you install can be further customized. Nothing is set in stone. Sometimes it is easier to start with a kit and change a few things here and there, rather than starting from scratch. But if you think you need to do a lot of changes to the starter kit, it will be better to not use one and start with default Statamic installation instead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (1)
> **Analogies:** for example (3)
> **Prerequisites:** install (3)
> **Definitions:** is a  (2)
> **URLs:** [statamic.com](https://statamic.com) (1)
> **Env Vars:** css (1)
> **Cross-References:** previous video (1)
> **Tools:** terminal (1)

#### [Creating a user in Statamic](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=0)** - [Narrator] In order to login to the control panel, we need to have a user. Since we installed a Starter kit in the previous video, Statamic´s already walked us through creating a user. Let's see if we can login to the control panel. I will go to statamic-standalone.test/cp and use the log in details as set up in the previous video. Fantastic! This worked, I'm logged in. Let's see the user's YAML file. YAML is a Human-Readable Data-Serialization Language that's Statamic uses for configuration files. I'm going to open my project in [[PHP]] store and look inside the user's directory. And here it is, a YAML file with my user information. However, what if you need to create a user manually? Let me show you. I'm quickly going to create a new test site and call it user demo. I'll select the blank site option and let Statamic install the site. Statamic asked me if I want to create a user, I'll say no this time. Next, I'm going to see the inside the user demo projects directory and type, "PHP please make colon user". PHP please is the way we run various commands in Statamic. Similar to PHP are to send in [[Laravel]]. Statamic will take you through the questions again, and once you answered them all, the user is created. And that's all you need to do to create an user manually. But it doesn't end there.
>
> **[1:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=93)** You can set up Statamic to store users in a database, which is especially useful if you are running Statamic inside an existing Laravel project, because Laravel´s storage it's used in a database by default. You could also set up Laravel to storage uses, as the Statamic way, in files, or you could use a custom user storage. There are many different options, but I will not cover them in this course. If you're interested, you can read more about them in the Statamic documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), [[Laravel]] (4)
> **Env Vars:** php (4), yaml (3)
> **CLI Commands:** php (4), cp (1), make (1)
> **Prerequisites:** set up (3), install (1)
> **Cross-References:** previous video (2)
> **UI Navigation:** go to (1), select the (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### [Statamic control panel](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=0)** - [Announcer] Let's go back to our Statamic stand alone project. Now that we have created a user, we can login to the control panel. To do that, you have to go to forward /cp in your browser which will take you to the login page. Enter you login details, and here we are. This is the Statamic control panel. What you see on the dashboard and on the side bar sections will be in every Statamic installation. Regardless of which Starter kit, if any, you have installed. What might be different is the content of the individual sections, but we will get to that in a moment. By default, the dashboard will have a "Getting Started with Statamic 3" cart with shortcuts to some popular pages such as the documentation, parts of the control panel such as the place to create a collection, a blue print, or a navigation. You can customize the dashboard and even create a custom widget if you wish to. There's a link to the documentation about widgets right here. To view the website, you can click on this button in the top right hand corner. Let's go through each section in the side bar of the control panel one by one. In the content section, you will find collections. A collection is a custom post type, something you might be familiar with if you ever worked with [[WordPress]]. Because we´re using a Starter kit, we already have some collections created. Blog and pages. In a default Statamic project, with no Starter kit installed,
>
> **[1:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=93)** there will be no existing collections. Navigation is a place where you´ll have all navigation for your web site. That could be the main navigation, the footer navigation, side maps, and any of the navigation structure you might need. Taxonomies is for organize and connect your websites content to make it accessible and easy to find by using tags. Assets is where you have all your assets for your website. For example, images, social media, icons, PDF´s and so on. Globals is where you set information that belongs to the whole website and that is accessible from everywhere, here, you´ll have things like company´s name, phone number, address, testimonials, copyright, basically, anything that is not related to an specific collection but to your website in general. This Starter kit already counts to a global set called Settings, that is the company social media links, but in default Statamic installation you wouldn´t have any globals created by default. In the fields section of the side bar, you´ll find blueprints and fieldsets. Blueprint is where you define the fields that would be available for each collection, in other words, what would each page consist of. For example, a title, an image, maybe a text area, link, or list of items. This Starter kit already counts with the pre-default blueprints for each available collection. Let´s quickly have a look at the blog blueprints. This counts with two sections, the main, and the side bar.
>
> **[3:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=188)** The main section has the title, the intro, the hero image and the main content field. We will look at blueprints in more detail later or in the course, because they´re a big part on the Statamic workflow. Fieldsets are optional, and I use it to organize reusable fields. Well, this means is that if you have a few fields that always use together, you can bundle then up into a fieldset, so the next time you need to use them, you´ll attach this fieldset to the collection, instead of creating the same group of fields over and over again. Fieldsets can be added to any blueprints, we will also look into fieldsets in more detail later on. In the tools section on the side bar, we have [[Forms]], updates, addons and utilities. Forms is where you create all forms you need on your website, you can create as many forms as you need. The update section is the detail of the current Statamic version you´re using, with a change log, you can also update your version from here, instead of from the terminal, if that´s what you prefer. The addons section is similar to plugins in WordPress, there´s a list of all available and all installed addons. Finally, the utility section. This is a section of the shortcuts to some of the most used actions, for example, clearing various caches, information about licensing, and easy ways to check up your [[PHP]] configuration, and more. Now that you have a good idea about
>
> **[4:42](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=282)** what the dashboard panel looks like, let´s move on to the views.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (4), [[WordPress]] (2), [[PHP]] (1)
> **CLI Commands:** find (3), cp (1), make (1), php (1)
> **Analogies:** for example (3), such as (2), similar to (1)
> **Definitions:** is a  (3), in other words (1)
> **Env Vars:** pdf (1), php (1)
> **Documentation:** the documentation (2)
> **UI Navigation:** go to (1), click on (1)
> **Cross-References:** go back to (1)

#### [Adding and styling content in Statamic](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=0)** - [Instructor] Now that we have a good understanding of how to use the control panel, let's have a look at the views. Views are files that contain the [[HTML]] that will be rendered and served by the front end of the website. Statamic views can be rendered by either the antlers or the blade's templating engine. It depends on your preference or existing workflow. But in this course, I'll be using antlers. So our view files will have the .antlers.HTML extension. We will talk more about antlers later in the course. Statamic comes with different kinds of views. Layouts, templates, and partials. And they are all saved in the resources/views directory. Layout is the entry file with markup that will be served on every single page. That means the <html>, <head>, <body> tags and links to all style sheets and required scripts will be here. You can also go to global navigation, header, and footer code. The actual content of each page will load wherever you put the template_content variable in the HTML body. Partials are reusable views that can be injected into another layout. A great example is a partial of a header, a footer, a button, or a cart. Our starter kit has the footer partial. The convention is to preface the name of a partial with an underscore, but you don't need to include underscore when using the partial tag. Templates are views that extend the main layout and they
>
> **[1:36](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=96)** can be used by any entry inside any collection. For example, we can have a template for a blog post or a template for the homepage that is different to the template for the about page. If you look at the templates for the blog view, the Starter's Creek has a template for the blog index, the blog show page, and for a cart. Now that we've discussed views, it's time to create some new content. Let's create a new page to put all that we've just talked about into practice. In the dashboard panel, let's click on collections and pages. We can create an about page by clicking on the create entry button. Let's give it a title, About, and some content. This is the about page. I'm going to set the defaults template and save it by clicking on the save and publish button. Once we saved a page, we'll be taken back to the listing. If we wanted to stay on the page instead, we'll go back to the page, click on this arrow, and choose continue editing. Then click save and publish. As you can see, you will stay on this page. You can also press command and S or control and S on your keyboard to save the page. It will do the same thing. To view the new page, click on the visit URL button. You can also live preview this page,
>
> **[3:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=190)** which will allow you to see your changes in real time. Let me change the content a little bit so that you can see what I mean. And there it is. You can also see it on different screen sizes, laptop, tablet, or mobile. To close the live preview, click on the X in the top right corner. It's great to see your new page, however, there isn't any structure or style to this page. Let's open the default template in our code to see why. As you can see the no diffs and no CSS classes. This is why the content is plain. Before we do anything to do with CSS, we must run [[npm]] install to install all [[JavaScript]] dependencies that this starter kit needs. And then NPN run watch to watch for any changes. This is very important for any kit that uses some CSS framework or JavaScript library that needs compiling. In the terminal, make sure you are in the statamic standalone directory. And then run NPM install. Once finished I'll run NPM run watch to watch for any changes done to the files. Now we are able to make changes to the default template. Back into code, let's just run the content variable, which is responsible for fetching the main content of the page into a diff. Let's send some it with Tailwind CSS, give it some petting and maybe even a pale blue background.
>
> **[4:50](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=290)** Let's save the file and check the website in the browser. Once we refresh the page, you can see that we now have some basic structure and styling. Well done. You've just created and styled a brand new page. You can easily edit this page or even delete it. Let's edit the content of the page to say about me and save it. I'm going to refresh the browser to see the new content. And here it is. Finally, let's delete this page. To delete a page, we need to go out of the page into the pages collections page. Click on these three dots next to the page we want to delete and select delete. Let's confirm we want to delete this entry and save the changes. Don't forget to save the changes, because if you don't, the page will not be deleted. And that's it. The page has been deleted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[npm]] (3), [[JavaScript]] (2)
> **Env Vars:** css (4), html (3), npm (3), url (1), npn (1)
> **UI Navigation:** click on (5), go to (1), open the (1)
> **Exercise Files:** template (7)
> **CLI Commands:** npm (3), make (2)
> **Prerequisites:** install (3)
> **Cross-References:** later in (1), go back to (1)
> **File Paths:** antlers.html (1)

#### [Challenge: Creating a new Statamic project](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-new-statamic-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-new-statamic-project?u=76281980&t=0)** - [Narrator] Welcome to our first challenge. Let's practice what we have learned so far. In this challenge, I'm going to ask you to install a brand new standalone Statamic website and call it my-website. Choose the Beautiful Documentation starter kit. You can find the installation link on [statamic.com/starter-kits](https://statamic.com/starter-kits) page. Create a new user and log in to the control panel. Create a new page called About. Give it a title, a short description, and some content. Check it in the browser that you can display your new page and if you don't like the style of it, go ahead and change it. What about changing the background color of the main content area to blue and giving it some padding, too? I'll see you in the next video when you are done. If you are struggling, feel free to go back to the previous videos and give them another watch or watch my solution video, where I work you through how I approach this challenge. Good luck!

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **URLs:** [statamic.com](https://statamic.com) (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Creating a new Statamic project](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=0)** - How did you do? Hopefully, you were able to solve the challenge. But if not, don't worry. Let's do it together. First, I'll go to www.[statamic.com](https://statamic.com) forward slash starter dash kits to copy the installation link of the beautiful documentation kit. Next I'll paste into my terminal, but I need to make sure I renamed the default, "my site" to "my dash website." Now I'll let Statamic do its job. When I get asked about creating a user, I'll say yes and add all the required details. I'm going to visit my page in the browser at my dash website dot test. Fantastic. It's loading. I'll go to the control panel login page now and add all my credentials. Okay. In here, I'll go to collections pages. I'll click on create entry. And the title of my page will be about. The description of it will be about my project and the content will be, this is the documentation for my grade project. I'll click on the arrow next to the save and publish button and select continue editing. And now I'm going to click, save and publish. Next, I'll view my webpage in the live preview and the content is there.
>
> **[1:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=93)** Amazing. Okay. Next, I need to go to the template file in my ID to change the background of the content area. But before I do that, I need to run [[npm]] install and NPM run watch to watch for the CSS changes. If you forget to do this, your new background color will not show. Now that it's done, I'll go to [[PHP]] storm and add a div around the content variable inside the default template file.
>
> **[2:11](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=131)** I'll also add the tailwind classes of bg-blue 200 and P20 to the div. Save the file and go back to my browser. And refresh the page. Oh, it looks like live preview doesn't like this. So, let's go into visit the URL instance. Oh, and here is a blue background. Fantastic. It all works. Well done everyone for completing this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2), [[PHP]] (1)
> **UI Navigation:** go to (5), click on (2)
> **Env Vars:** npm (2), css (1), php (1), p20 (1), url (1)
> **CLI Commands:** npm (2), make (1), php (1)
> **Exercise Files:** template (2)
> **URLs:** [statamic.com](https://statamic.com) (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)


### 3. Statamic Internals

[↑ Back to Table of Contents](#table-of-contents)

#### [File structure in Statamic](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=0)** - One of the great benefits of Statamic that you can do almost anything you need both in the control panel and in code, depending on your preference. So far, you've learned how to add content via the control panel. This is a good option when you like to use the graphical user interface, but sometimes you might want to create content within your code base and Statamic makes it easy. Let's have a look at Statamic's file structure. This dot-[[GitHub]] director is where we can store github-related files to your project, such as the contributing.MD file, the content of MD file, or any files related to running github actions. This starter kit came with the funding door Yama file, which displays a sponsor button and a github repository. This github director is not specific to Statamic. Many of the following directories, you might already be familiar with if you ever worked in a [[Laravel]] project. The app directory, the bootstrap directory and the config database, public resources, route storage tests and vendor directories. We are not going to go into any detail of what these directories contain, but if you want to learn more, visit the official Laravel documentation. The Statamic-specific directories are the content directory, the Statamic director inside the storage directory, and the user's directory. Let's have a look at the content directory first.
>
> **[1:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=95)** This is where we can access anything to do with creating content in Statamic. In the previous video, we went over each of these kinds of content from the control panel, and here is where you can do the same thing from the code. To create a new page, you can create a new markdown document inside the collections pages directory. You can see this already created home.MD file to see what would go into such a file. We have the title, the ID, and the template the page is using. Let's create a new page called test.MD.
>
> **[2:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=134)** To save time, I'll simply copy the front-matter section of the homepage and paste it in. The front matter is the section of the markdown file that contains all necessary [[Metadata]] for this page. Let's delete the ID because this is specific to the homepage and it will be auto-populated later. We will change the title to test and I'll add a simple content. This is "Test." Let's save the file and go back into our control panel. In the Collections pages section is our test page. If we open it up, we can see that the title is there, the content is there, and the author has been auto-filled to my own name. In your case, it will be your name. If we switch back to the markdown file, we can see that the ID has now been populated, together with some other info. You may wonder, why would anyone do this? Why create pages and code when it may appear simpler to just add a new page by the control panel? Having an option to do so in code is extremely useful. If you want to copy pages, but not just pages, but also blueprints, field sets, globals, navigations, and other parts of your project between Statamic projects, instead of having to recreate every page or blueprint manually via the control panel, which can take a while, we can just copy over the markdown file and be done with it. Also, once you get into the flow of it, creating content using markdown is actually faster than via the control panel. But it is your personal preference,
>
> **[3:48](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=228)** so just use whichever way you find easier. And finally, let's look into the User's directory. We have already seen this directory early in the course. This is where Statamic saves every created user. The password has been hashed, so you don't have to worry about the security of a user's info. I'm not going to try and create another user, because the free tier of Statamic only allows one user. If we were to add another one, we would have to upgrade to the paid tier. But for our purposes, it is enough to know where Statamic stores all its users, if you ever wanted to check the name or the email of one. As you have seen, Statamic allows you to create content whichever way you prefer. Control panel or markdown files, they both have their pros and cons. Now that you know the structure of Statamic files, let's look into blueprints and field sets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5), [[Laravel]] (2), [[Metadata]] (1)
> **Tools:** github (5)
> **File Paths:** contributing.md (1), home.md (1), test.md (1)
> **CLI Commands:** find (1)
> **Cross-References:** previous video (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### [Blueprints, fieldtypes, and fieldsets in Statamic](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=0)** - [Instructor] Blueprints are really key when it comes to content modeling, which is the process of breaking your content into different types. What this means is that by using a blueprint, you get to define fields each of your continent will have. You might be already familiar with it, if you've ever worked with [[WordPress]] advanced custom fields. For example, the blueprint for a blog might be a title, an excerpt, a body, and an author. Because our start ticket came for the blog, we can see its blueprint. Let's go to the control panel, Blueprints, click on Blog, and here is the already predefined blueprints. And if I open an individual blog posts and I'll do that in a new tab so that I can easily switch back and forth, we can see the Title, Intro, Hero image, and main concern there. Any field you add in the blueprint will be shown there. That's another field. Back in the blueprint, I'll click on Create Fields, and here we have a whole list of available fields. Most of them are self-explanatory. You have a coat field, a form, a time field, and many others. Some might be less obvious. For example, the Bard field, which is an edits, say idea for long form content with some extra functionality. Each field has detailed documentation on the statamic website. You can either view all of the fields at once or just the text fields, the media fields, or the relationship fields by selecting the appropriate stuff. You can also easily search through the fields.
>
> **[1:36](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=96)** I'm going to search for the time field to add to the blog blueprint, to display time. Each field will have the settings tab where you can customize the label of the field, the template variable, which we will talk about in the next video and some instructions. In the condition tab, you can define some rules when this field will be shown or hidden, such as showing this time field only when the title field equals the string hello. In the validation step, you can define the validation rules for each field. I'm going to save this field by clicking on this Finish button. And as you can see, it has been added to the block main section. You can also reorder the fields by dragging them. Let's say, I want to have the time field right under the title field. I'll just drag it there. Don't forget to save and let's switch it up to see our block post. Before we refresh the page, notice how there is no time field. But once I refresh, here it is. The time field right under the title field. Now that you know what blueprints are and how to add a new field, let's look at fieldsets. Fieldsets are basically sets of reusable fields. You would create a fieldset to represent, for example, an image block, but a text field for the alt text and the text field for the image grace. So whenever you want to add an image,
>
> **[3:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=188)** instead of adding these three fields separately, you would just add the fieldset. Let's create one now. Click on the field settling in the sidebar. And since our starter kit didn't come with any fieldsets, we've only to create the first one. Click on the Create Fieldset button, and let's give our fields at a title, Image Block. Click on Create Fieldset. Now we can add fields as we would in the blueprint. Click on Create Field. We can add an image by assets fields. I'll rename the assets to image to make it more obvious what this field is for. We could also have short instructions too, define the maximum number of files that can be selected and other things. Click Finish and let's add a text field for the alt text. I'll click on Create Field again and search for text. Change label to Alt Text and click Finish. And finally the last field for an image credit, create fields, find the text field, change the label to credits and click Finish. Amazing. We now have a fieldset. Don't forget to click the Save button, it's very easy to miss. Let's go and include this fieldset into our block blueprints. Let's click on Blueprints and Blog.
>
> **[4:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=284)** Instead of creating a field, I'll click on Link Existing. This will open the sidebar, but we can either link an individual field such as the alt text field or the whole fieldset. Click Link and here's our fieldset attached to the blog blueprint. Let's save the blueprint and check out article again. I'm going to refresh the page and scroll all the way to the bottom. And here it is, we have a field to suck an image, to add the alt text and some credits. As is typical for statamic, there are various ways to create blueprints and fieldsets. You can add to create them by the control panel, as we have done just now all by creating a yaml file within the resources blueprints or resources fieldsets directories in our code.
>
> **[5:42](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=342)** There is a third way to create the blueprint and that's by going to the dashboard and the setting for an individual content. For example, the pages. By clicking on these three dots, you'll get a menu that will allow you to edit blueprints. As you can see, blueprints and fieldsets an amazingly easy way to structure content, and you'll probably spend a lot of time working with them. Now that you've learned the basics, it will be easy for you to go and create new fields, customize them, group them into field sets and so on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (1)
> **UI Navigation:** click on (9), go to (1), in the sidebar (1), open the (1)
> **Analogies:** for example (4), such as (2)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is an  (1), is a  (1)
> **Best Practices:** don't forget (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)

#### [Assets in Statamic](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=0)** - Assets, are files managed by Statamic, and stored in containers. We can have many different assets in our project. Images, videos, PDFs, almost anything you can think of. Each asset is stored inside a container. This container can have its own settings, permissions and blueprint, and it can live either on your local server or on any [[Cloud Storage]]. We can create various containers, each with their own individual settings. I find it easier to first create the container via the control panel and then see the markdown file to see what exactly was created. This way, I develop the understanding of what I would need to do if I wanted to create a container in the code with the markdown file. As you can see, our starter kit came with the Assets container. This container already has a folder and some images, but we could create even more folders, which would help us to keep our assets organized. We can also switch between the grid and list views. Use whichever you prefer. You can upload an asset by clicking on this Upload button. Let's look into the site directory. In here we have a sub directory with the social media icons, that came by default with our starter kit. By clicking on one image, we get the asset editor screen, where you can set the focal points, you can rename the file, or move the file to another folder. You can also add the alt text here.
>
> **[1:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=94)** Let's exit this screen by clicking on this X button, and quickly check out a blueprint for this asset container. As you can see, this is the field for the alt texts that already exists. Let's create another field. Click on Create Field, and I'll use the text field for the image credits. Change the label to Image credit, click Finish, and Save. I'll go back to the Assets container, open an image, and here is our credit fields. Because each container can have a blueprint, you can customize your containers. Every new container comes with an alt texts by default, but you can add any number of fields. Let's also see where we can find containers in the code. In the content assets directory, you'll find a YAML file for the assets container. Each container will have its own YAML file. Let's create another container to see how it's done. In the control panel, let's go to Assets and click on Create Container. Let's say we want to have a container specifically for documents. I'll call it Documents. And the convention is to use the plural. So, not document but documents. We can also choose where to store the documents, but I'll stick with the local storage. We can decide if we wants to allow uploads, create folders and all these other options, but I'll leave them as they are for now. Click Save. And here we have our new container.
>
> **[3:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=194)** Let's see it's YAML file too. And yes, it's right here. You could also create a blueprint for your new container and define what fields you want it to have, but I'm not going to do it right now. Finally, let me show you how to delete a container. We could just delete the YAML file if you wanted to. Or, we could go to the control panel, click on Assets, select the container and click on these three dots. I'll select Delete container. Confirm, and the container is gone. Now that you understand what containers are, you can easily organize the assets for your website. Control the storage, settings and fields that are displayed for each assets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Storage]] (1)
> **UI Navigation:** click on (4), go to (2), select the (1)
> **Env Vars:** yaml (4)
> **CLI Commands:** find (3)
> **Cross-References:** go back to (1)
> **Speakers:** - assets (1)

#### [Antlers, the templating engine in Statamic](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=0)** - [Instructor] Before we start learning about variables in Statamic, we need to talk about Antlers. If you ever worked with [[Laravel]], you might be familiar with Blades, the templating engine Laravel uses. Statamic uses Antlers, which similar to Blade, adds capabilities on top of [[HTML]]. The file extension is antlers.html, and it is essential that you use this extension. Without it, the Antlers engine will not pass the data. You can display any data pass into the view by using variables wrapped inside double curly braces. We will talk a lot more about variables later. For now, just know that if you want to display the title of any page, whatever is saved in the title variable, use title wrapped inside double curly braces. The content of the page will be displayed via the template content variable. You can also run an array of items, a content of an associative array, use logic inside your view by using the if, elseif, else, and unless keywords, and use any of PHPs native comparison or logical operators. Let's see if there is a file that uses these. I'm going to search for elseif in the code, and here is one just to show you how it would be done. You can do a lot with Antlers as you would in [[PHP]], but you cannot use PHP inside the Antlers template unless you change the file extension from antlers.html to antlers.php.
>
> **[1:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=95)** You could also use Laravel Blades templating engine, if that's what you prefer or what your project already uses. Simply change the file extension to blade.php. There are some rules though. Antler's expressions are case sensitive. So title with a lower case T is not the same as title with a uppercase T. Hyphens and underscores are not interchangeable, so don't mix them up. Whitespace between curly braces and inner text is recommended, but is not required. As you can Statamic offers an amazing flexibility, when it comes to rendering content. You can choose between different templating engines, you can use PHP, and you can customize your workflow to suit your exact needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (5), [[Laravel]] (3), [[HTML]] (3)
> **CLI Commands:** php (5)
> **File Paths:** antlers.html (2), antlers.php (1), blade.php (1)
> **Env Vars:** php (3), html (1)
> **Exercise Files:** template (2)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)

#### [Variables in Statamic](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=0)** - [Instructor] Variables (indistinct) Statamic injects data into our views, which allows us to dynamically render the content with the use of double curly braces. Let's have a look inside the blog show.antlers.[[HTML]] file. I'll go to Resources, Views, Blog, and show.antlers.html. Here, you can see the H1 tag renders the title variable. While the label title is obvious, where is this title variable coming from? Let's check out the blog's blueprint. In the Dashboard Panel, I'll go to Blueprints, Blog, and open the Title field. And here under the Handle field, we can see the fields template variable is title. This is how we rendered a content inside our template, and this is the variable that we need to use. If you look at any other field, for example, the Author field, you'll see that the variable is author. You could change it to whatever you want, but it's better to stay consistent. Let's create a new field in this blueprint, a simple text field called Test. The variable is automatically generated from the label, but you could change it if you wanted to. I'm going to change the display from text to test, and you can see that the handle has changed to. Finish and Save the blueprint. Now I'll go back to the post and add some random texts in this field. For example, hello.
>
> **[1:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=93)** Let's go to Collections, Blog, and I'll just pick the first blog on the list. Scroll all the way down and here is our test fields. Let's add hello world. I'm going to save and publish. Now let's go back to show.antlers.html file and change what the H1 tag renders to test, because this is the variable name we had in our field. Save the file and go back to the dashboard to view the blog post now. I'm going to go into the blog post and click Visit URL. And here it is. Instead of the title, we see our random text, hello world. This is the basic way to render content. And if you ever forget which variable to use, go back to the field inside the blueprint and look it up again. You can also use variables that are not coming from your blueprints. These variables are grouped into a few groups, the Content, Entry, Term, Asset, and the System group. You can learn more about them in the Statamic documentation page. For example, the permalink variable from the content group will render an absolute link to the current page. Let's add a permalink to the show.antlers.html page, right here under the title. Save the file, and let's have a look at the post inside a browser. I'm going to refresh the page
>
> **[3:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=186)** and here, right under the title, is the permalink. Let's actually make it into a link by using the A tag. I'm going to wrap the permalink inside an A tag. Use the permalink variable as the HREF and as the content of the link. Save the file, and let's go back to the browser. I'm going to refresh, and here is our link. There is so much more you can do with variables such as loop through them, or use conditional logic, as we learned in the chapter about Antlers. Variables are what make rendering consent truly dynamic. And now that you understand how to create them and use them in your templates, you can run render anything like on your page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4)
> **Cross-References:** go back to (5)
> **File Paths:** show.antlers.html (4)
> **UI Navigation:** go to (3), open the (1)
> **Analogies:** for example (3), such as (1)
> **CLI Commands:** make (2)
> **Env Vars:** url (1), href (1)
> **Exercise Files:** template (2)

#### [Globals in Statamic](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=0)** - [Instructor] Global variables, or globals, are variables that belong to the whole site, not just to a single page. They're available everywhere all the time. You can think of globals as something that hardly ever changes, such as the company's address, logo, phone number, testimonials, and so on. While the title of a page will be different on each page, the company's logo is most likely to be global. Let's have a look at the Globals section of the control panel. As you can see, our starter kit already came with one globals set called Settings. When you open the set, you can see that it includes the name of the site, the social media icons, and some other options. These are unlikely to change very often, and by having them as a set of global variables, you can reference them in any template on any page you like. Let's create another globals set. I'm going to call it Company and pay attention to this handle. This is the variable that we will use in the template. We will leave the handle as it is, although you could change it if you wanted to. It doesn't have to be the same as the title, but I would advise against it. It's best to be consistent. Let's click on Create Global Set. Here, we have a nice shortcut to edit the blueprint of the set. I'll click on the link, and it will take me to the set's blueprint. Let's create a text field for the company's address, a link field for some important URL, and another text field for the phone number. I'll start with the address. Let's click Create Fields and select text field. I'm going to change the default label to the appropriate one
>
> **[1:38](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=98)** to make sure I know what each field is for. So instead of a simple text, I'm going to call this Address. Finish and create another field. Let's create a field for the phone number. I'll need to use a text field. You might say that a text field is not the right one for a number, but as you can see, there is no number field option. Let's change the label to Phone Number, and let me show you something. Inside the text field settings, you can choose which [[HTML]] input type it will use. Look at all these options. This is where I could select number, but actually, I'm going to use tel. This is so that mobile browsers allow users to click on the number and open a custom keyboard. And if a browser doesn't support this functionality, tel will fall back to standard text input. Let's finish and create the last link for URL. I'll click on Create Field, and there is a field for a link, so let's use this one. I'm going to change the label from Link to URL. Finish and save the blueprint. Now, let's go back to the Globals section in the sidebar and click on the company. And here are all the fields we've just created. Let's just add some random values for the address, the phone number, and the URL. Let's save this now.
>
> **[3:11](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=191)** Okay, so how do we render these values in the template? We need to do the following. Let's first check out the YAML file that has been created for the company global set. I'll go to content, globals, and company.yaml. As you can see, the title is Company and the key value placed inside the data key are address, phone_number, and url. Now, let's say we want to display these values inside the footer of the website. Open the footer.antlers.html partial, and just above the settings globals, let's create company set. Remember, if you ever forget a variable names, you can either check them in the blueprint or inside the YAML file. You can take an inspiration from the settings set as to how to render the content of the company set. You can use the title of the set, in this case, company, then add colon, and then the variable name. So company:address. Don't forget to wrap it inside double curly braces. And that's all it takes to render the contents. Let's save the file and check the website in the browser. I'm going to click on this View Site button in the top-right corner. I'm going to scroll all the way down because we added the information to the footer of the website. And look at this. Here is the address. We can render the phone number and the URL too. You can also wrap them inside a div and style them whichever way you like. I'm not going to do that, but you have a go.
>
> **[4:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=284)** Try it out. See what you can do. Global variables are a really useful concept, easily configured and rendered. Now that you know how to create them, think of any other content that might be a global variable for your own project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **UI Navigation:** click on (6), open the (2), in the sidebar (1), go to (1)
> **Env Vars:** url (5), yaml (2), html (1)
> **Exercise Files:** template (3)
> **File Paths:** company.yaml (1), footer.antlers.html (1)
> **Best Practices:** it's best to (1), don't forget (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** phone_number (1)

#### [Navigation in Statamic](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=0)** - [Instructor] As is the case with anything Statamic, there are multiple ways to create a navigation. Websites can have multiple navigations. There is often the main nav we see at the top of the page, a footer navigation at the bottom of the page, and sometimes a sidebar navigation. Statamic allows you to create as many of them as you need. So building navigation, you would typically start with a nav partial, which you would include inside your layout's antlers view. Because we are using a starter theme, I expect this partial to already exist. But if you are starting from scratch, you would need to create it. Let's have a look. I'll go to resources, views, and here it is. Let's have a look at what this file contains. This is mostly hard-coded navigation. It's using the [[HTML]] nav element, and it's using the settings:site_name variable to display the name of the site as the link to the homepage. It also has a search button and a form with functionality to search through the site. Statamic has a nav tag to create a navigation out of existing structures. You may notice that in this file we are not using this tag. What would happen if we did? Let's comment out the content of this file. And I'm going to write this instead. I'm going to open a nav tag. Inside I'll add a HTML link element, and inside this element I'll add the anchor element. The URL will be a url tag,
>
> **[1:38](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=98)** and the title of the link will be the title tag. I'm going to close the nav tag now right at the bottom. As you can see, the Statamic tags are closed the same way as novel HTML tags with the forward slash. What we did there was to use the Statamic tag to loop over all existing pages because the nav tag will by default fall back to the pages collection, if there is one, unless you use the second part of the tag where you would define which collection you want to make the navigation from, for example, nav:collection:blog. This would make a navigation out of blog posts. Then we decided that each nav link should be a li HTML element, wrapping an anchor element to make the link clickable. Because this is dynamic, we don't need an li for every link. We just need one, and Statamic will loop over all of our navigation items. The href will be the url variable which will [[Fetch]] the URL of the link, and the title of the link will come from the title variable. Let's check out the browser. I'm going to view the site, and here is the navigation. It's not pretty, but it works. Let's revert this file to what it was by commenting out our code and uncommenting the code that was originally there. I'll create another partial called _nav-footer.antlers.html
>
> **[3:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=195)** to create a footer navigation. In here, let's just add the [[Microsoft Word|word]] hello. Let's include this partial inside our footer partial, right at the top of the file.
>
> **[3:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=214)** This is how we include partials. First, we use the double curly braces, then we use the word partial, colon, and then the name of the partial. Remember we don't have to include the underscore that's at the beginning of the file. Let's save the file, and let's check it in the browser. I'm going to refresh, scroll all the way down, and here is our hello. The partial is working. So how do we create a navigation? Early, I showed you how to create a navigation out of existing page structure. This time, let's create a navigation using the Navigation section of the Dashboard. In the Dashboard panel, here on the left, you can see a Navigation section. Right now, there is no navigation here, so let's create one. I'll call it footer and, once again, take a note of this handle: footer. Click Create Navigation. Let's click on Configure Navigation, which will let you choose which collection to link to. We have a choice between Blog and Pages, and I'm going to choose Pages. I could have chosen both. You don't have to pick just one. You can have as many collections as you want. Let's save and go back. Next, let's click on Link to Entry. This is where you get to choose which pages you want to include in your navigation. As you can see, because we chose the Pages collection
>
> **[5:09](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=309)** during the configuration, you will get the selection of existing pages here. If we choose Blog instead, you would have all available blog posts here. And if we had chosen both collections, we would have everything listed here. Before we select Pages, let's quickly create some new ones. In the Collections, Pages, I'm going to create an About page and a Contact page.
>
> **[5:40](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=340)** Okay, now let's go back to Navigation. Let's click on Footer. Click on Link to Entry. And now we've got many more pages to choose from. I want to include the Contact page and the About page in my footer navigation. So I'm going to tick them and click Select. Don't forget to save the changes. Now, how do we references navigation in our navigation partial? In our nav-footer partial, let's use Statamic's nav tag to fetch the content of the navigation. We need to specify which navigation we want to use, so we need to add the second part of the tag: footer. Remember if you ever forget what your handles or variables are, you can either go back to the Dashboard or check the yml file. In the content navigation directory, you can see that our footer navigation has its own yml file with its configuration. But unless you overwrite the default handle created by Statamic, it will be the same as the title of the navigation. Okay, back in our footer navigation partial, now we need to display the links. Let's copy the code we wrote earlier. I'm going to go to nav.antlers.html, scroll all the way down and copy this. Paste it into our footer partial file, uncomment it. I don't need these nav tags,
>
> **[7:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=432)** so I'm going to delete them and just leave the li tags. And now I'm going to close the navigation. Fantastic. Let's save the file and check out our navigation in the browser. I'm going to refresh the browser, and here's our navigation. Again, it's not very pretty, but it works. Well done. Let me show you one more thing. Notice the order of the navigation items. The About page is first and then Contact. Let's go back to the control panel and drag these items to change their order. Save the changes, and back in our browser, let's refresh. As you can see, the order of the navigation items have changed. This is what makes using Statamic navigation so amazing. You can easily link as many pages or URLs as you want. You can reorder them. And any change you do will be reflected on the frontend of the website. There is a lot more we could do with navigations, but this should be enough to get you started. Refer to the Statamic documentation to learn even more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6), [[Fetch]] (2), [[Microsoft Word|Word]] (2)
> **Env Vars:** html (4), url (2)
> **UI Navigation:** click on (4), go to (2)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (3)
> **File Paths:** _nav-footer.antlers.html (1), nav.antlers.html (1)
> **Code Identifiers:** site_name (1)
> **Definitions:** is a  (1)

#### [Challenge: Creating a blueprint, a fieldset, and a navigation](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=0)** - [Narrator] Welcome to this challenge. In the last video, I asked you to install a new statomic website and use the beautiful documentation star tickets. In this challenge, I'm going to ask you to create a brand new field set called image block, and include an asset field for image and the text field for the old text, include this field set in the page blueprint. Next, I want you to edit the about page from last time and add some content, including an image and the old text to make sure that your field set is working. You can also edit a default.antlers.[[HTML]] template to actually display the image, because after you do, it won't be shown on the page. When you're done create a new global set with the phone number of your company. You can call it company or details. Anything you like. Finally edit your about page to the main navigation and create the footsie navigation and add the links to the homepage. And the about page. This chapter was full of new and maybe difficult concepts. So don't worry. If you struggle with this challenge, you can always go back and watch the relevant section again, or just see how I solved this challenge in the next video. Just one helpful tip. If there is one thing that tends to be an issue, it is forgetting to save any changes done to a field set or a blueprint, just creating a field. Doesn't actually save it. It has happened to me many times, so all of us remember to save. Good luck!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Cross-References:** in the last (1), in the next (1)
> **File Paths:** default.antlers.html (1)
> **CLI Commands:** make (1)
> **Env Vars:** html (1)
> **Exercise Files:** template (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** install (1)

#### [Solution: Creating a blueprint, a fieldset, and a navigation](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=0)** - [Instructor] How did you do? This is how I completed the challenge. I am in my website project. In the Control Panel, I'll go to Fieldsets. Now, I'm going to click on Create Fieldset and call my fieldset Image Block. I'll click Create Fieldset now. Now, I'm going to click on Create Field and choose the Assets field for the image. I'll rename the Assets label to Article Image and click Finish. Next, I'm going to add another field, this time, a text field, and I'm going to rename it to Alt, click Finish and Save. Now, I'm going to go to Blueprints, Blueprints, Pages, and click on Link Existing. I'm going to choose the Image Block and click Link, and now Save, don't forget to save. Now, I'm going to go to Collections Pages and open the About page. Here is our Image Block, so I'm going to add an image, and I need to get some alt text, in this case, this is a pile of books, so I'll just say books, and click Save. Now, even if I visit the URL now, the image won't show
>
> **[1:36](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=96)** because I haven't actually added any markup. You can do it or just skip it for now, but I'm going to add a markup just to show you how I would do it. In my code, I'm going to go to the default.antlers.[[HTML]] file, and right here, under this content variable, I'll open the article-image tag and close it so that I don't forget. Inside this tag, I'm going to add the image HTML element, use the url tag as the source of the image and alt tag for the alt text. Save the file and check it out in the browser. Okay, the image is still not showing up, let's find out why. The first thing to check is that I'm using the correct handle to render the Image Block. I'll open the Image Block YAML file, and now I see it. The handle is article_image, while I used article-image, let me fix this.
>
> **[2:45](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=165)** And refresh the page, and here is our image. Now, let's go to Globals in the Control Panel sidebar and click on Create Global Set. I'll give it the Company title, click on the Blueprint link, and click on Create Fields. I'm going to search the Text field, rename it to Phone, and from this drop-down, I'm going to choose tell, click Finish and click Save. Now, I'm going back to the Company Globals and add some random phone number and save. Okay, let's add About page to the main navigation now. I'll go to Navigation Docs, add Nav Item, Link to Entry. I'll set the About page and click Select. I'll move the About page under the Other stuff section and save the changes. Let's check it out in the browser. I'm going to refresh the page, and here's our About page. If you want to, you can add the company's phone number to the footer, too. This Statamic, it doesn't have any partials, not even a footer partial. You can either create one or just go to the layout page, find a div with a Powered by Statamic text
>
> **[4:19](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=259)** and add the number right above it. Save the file, and let's check it out in the browser again. Refresh the page, and here is our phone number. Okay. Finally, let's create a footer navigation. In the Control Panel, I'll go to Navigation and click Create Navigation. The title will be Footer. Let's click Configure Navigation and add the Pages collection, save it, and let's go back. Now, I'm going to click on Link to Entry. I'm going to check the About and Home pages, click Select and Save Changes. Now, let's go back to the code. Because this kit doesn't come with a footer partial, I need to create one. I'll create the _footer.antlers.html file inside the Views directory. In here, I'll add the nav footer tag, and inside this tag, I'm going to add HTML markup for a link.
>
> **[5:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=344)** Next, I'll need to include this partial in the layouts file, right here, under the end of the main section of the page. I'm going to open the footer HTML tag, and inside it, I'm going include the Statamic footer partial. Let's save the file and check it out in the browser. Refresh the page, and here is our navigation. It's looking terrible, so go ahead and style it if you feel like it. I'll leave it as it is now. This is how I would have completed the challenge. This one wasn't easy, so well done for completing it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5)
> **UI Navigation:** go to (7), click on (7), open the (4)
> **Env Vars:** html (3), url (1), yaml (1)
> **File Paths:** default.antlers.html (1), _footer.antlers.html (1)
> **CLI Commands:** find (2)
> **Best Practices:** don't forget (2)
> **Code Identifiers:** article_image (1)
> **Cross-References:** go back to (1)


### 4. Deploying Statamic on Netlify

[↑ Back to Table of Contents](#table-of-contents)

#### [Statamic as an SSG](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=0)** - Since statamic is built as a [[Laravel]] package, deploying a statamic project is very similar to deploying a Laravel one. You will need a hosting provider such as digital ocean, Lenode or another one, you know, and love. You might also choose to use a server management service, to help you provision and deploy your server such as Laravel forge. All of this is great, but it also costs money, but there is another option. You can deploy your statamic project as a static site and use a free service such as netlify, [[GitHub]] pages or Vercel. static sites are simple [[HTML]] documents that are stored on a server and returned back to the user as they are. However, what if you wants to use partials, at some place in language or use variables throughout the site, to avoid repeating ourselves? We can't do it in static pages. As I said, each page is going to be sent to the browser as is there will be no dynamic rendering. This means we are missing out on many modern features of [[Web Development]], which is not great, especially, when it comes to larger and more complex sites where we need old help we can get. While a default statamic project, isn't a statically regenerated site. Just remember the extensive use of partials variables. We can turn it into one. We can ask statamic to generate
>
> **[1:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=93)** a static version of the site, which can then be served by service, such as Netlify, as I'm going to show in a future video. The statamic S S G addon is already pre-installed. As you can see here in the addons section of the control panel. However, if that wasn't the case for you, you can always require it by running: composer-require-statamic, forward-slash-SSG. To turn our project into a static site. All we need to do is run [[PHP]]-please-S S G, colon-generate in our terminal. Make sure you are in the statamic extend on project director before you do that. Statamic will generated a static version of our site and save it in storage-app-static. As you can see, we've got all our directories and all our files here. Not every website can and should be statically generated, but many of them could. Now that you have an idea about, what statistical generated sites are and what are the benefits you can decide, what is the best approach for your projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (3), [[GitHub]] (1), [[HTML]] (1), [[Web Development]] (1), [[PHP]] (1)
> **Analogies:** such as (4), similar to (1)
> **CLI Commands:** composer (1), php (1), make (1)
> **Env Vars:** html (1), ssg (1), php (1)
> **Tools:** github (1), terminal (1)
> **Speakers:** - since (1)

#### [Introduction to Netlify](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=0)** - As mentioned in a previous video, Netlify is one of the services that allows us to deploy a statically generated site for free. It is a really useful service, and a great one to have in your technical knowledge toolbox. Netlify is a [[Cloud Computing]] company that offers hosting and serverless back-end services. It offers a very streamlined way to host and deploy your projects. And once it's up, you can pretty much forget about it. To explore Netlify, let's create a new account first. Click on the sign up link in the top right corner. You can set up in the following options, [[GitHub]], GitLab, [[Bitbucket]], or Email. For the purposes of this course, we will sign up using GitHub. You will need to sign into a GitHub account first, or create one if you don't have one yet. Once you click on the signup link, you will need to authorize Netlify to access your GitHub account. I have already done it, but you should just click authorize and that's it. Once done, you can log into Netlify using your GitHub credentials. If this is your first time on Netlify, Netlify will ask you a series of questions to personalize your account. Such as your name, your team, what you will use Netlify for, and so on. Choose whatever is appropriate for you, and click set up, and continue. You will also be welcomed by a Quickstart guide modal, which you can either go through, or close. This is the Netlify dashboard. You have a quick overview of all your sites you're hosting on Netlify. But since this is a brand new account,
>
> **[1:32](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=92)** there are no sites at the moment. You can click through the navigation to learn more about Netlify, but you don't need to change anything anywhere. Your account is already set up to start hosting static sites. It might be interesting to explore what plugins Netlify offers to add an extra functionality to your site. But this is beyond the scope of the scores. And that's it for now. You have your Netlify account ready. And in the next video, we will walk through linking a new site from [[Git]], and deploying it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5), [[Cloud Computing]] (1), [[Bitbucket]] (1), [[Git]] (1)
> **Tools:** github (5), gitlab (1), bitbucket (1)
> **Definitions:** is a  (3)
> **Prerequisites:** set up (3)
> **Cross-References:** previous video (1), in the next (1)
> **UI Navigation:** click on (2)
> **CLI Commands:** git (1)
> **Analogies:** such as (1)

#### [Uploading a Statamic website to GitHub](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=0)** - Now that we have Netlify accounts set up. We are ready to upload a project to [[GitHub]]. There are many fantastic tutorials in the [[LinkedIn]] learning library. So I won't spend too much time explaining what [[Git]] and GitHub are and how to use them. Feel free to visit any of these tutorials. If you need to learn more or just to refresh your knowledge, to get started, we need to initialize "get" inside our projects, routes directory. You will need to run, "get" in it in the terminal. Just make sure you are inside. I start some external project, as you can see, he has provided some useful hints. Feel free to read through them. Next step is to add all of our files to be tracked by gate run, "get add" in the terminal. You can run, get status to see that, get this added all of our project files to be tracked. And yes, it has fantastic. Next. We need to commit these files and give them some descriptive comment message in the real world scenario, you would have initialized get right at the beginning of your project and you would probably commit your work throughout. In our case, we will commit everything at once and give it a comic message ready to deploy by running, get commit dash M ready to deploy. Okay. But before we can commit all of our files to GitHub, we need to go and create a new repository. Let's go to [github.com](https://github.com) login, click on this plus sign in the top right corner and choose new repository. Let's give it a name Stetsemic standalone,
>
> **[1:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=95)** and we can make it public or private. It doesn't really matter. In this case, let's not initialize the repository with read me or get ignore, because we already have DS in our project files. Let's just click create repository. Next. We will need to an origin to our local repository, so that get knows where to push our code to because we already have the repository locally. We will follow these steps. Let's go put this line and paste it into terminal. You may also want to change the name of your main branch from Master to main or anything else. You prefer to do that in our terminal, we will type it. Get Branch dash M capital M main. As you can see, this is what GitHub suggest as well. And finally, we can run, get push dash u, origin main. The "u" flag just sets the upstream of the current local branch and it only needs to be done once after this, every time you want to push changes via get you just say, get push origin main. Fantastic. Now let's check out online repository. If I refresh the page, I can see that the code is there. This means that we have everything ready to deploy a project to Netlify.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5), [[LinkedIn]] (1), [[Git]] (1)
> **Tools:** github (5), terminal (4)
> **CLI Commands:** make (2), git (1)
> **UI Navigation:** go to (1), click on (1)
> **URLs:** [github.com](https://github.com) (1)
> **Definitions:** means that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - now (1)

#### [Deploying a Statamic website to Netlify](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=0)** - [Instructor] We have done all this work to prepare our project to be deployed as a static site to Netlify. The files on [[GitHub]] our Netlify account is ready. So let's do it. From our Netlify dashboard, click on "new site from [[Git]]." Next we need to choose a Git provider which is GitHub, and select the correct repository. The branch is main, the build command will be "[[PHP]] please ssg generate," and the published directory will be "storage app static." Okay, now let's click on "show advanced." We need to add two variables. The first variable will be the "PHP_VERSION," and that is 7.4. And the second variable will be the "APP_KEY." And this file you can find in your .ENV file, right here. I'm going to copy the whole thing and paste it here. That's all we need to do. We just need to deploy the site now. As you can see in the site overview section, the deploy is starting up. You can click on this link to see the details. The process doesn't take long at all. Especially since our website is very small. Once it's finished, Netlify will display the published flag and it will give us some provisional URL. Here is the published flag, and I'm going to click on this URL.
>
> **[1:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=94)** And here's our website, publicly accessible to everyone. The Netlify's domain is not great though, but you can easily set up a custom domain. All you need to do is to buy a domain and go to "site overview" tab. Click on the domain settings and click on "add custom domain." Add your new domain in this input field and click verify. Netlify will take you through some steps and it will automatically configure DNS settings for you and tell you if there's anything else you need to do. The documentation is really quite good. Now that you have an app URL, which will be different for everyone because it's randomly generated by Netlify, you can add it to a project's .ENV file. I'm going to copy the link, go back to my files, and add it right here. We have just covered how to set up a build process in the Netlify user interface. However, there's another way to do it. A way some of you may find easier. Instead of filling out a build command, published directory, and the advanced settings on Netlify, we can just create a Netlify .terminal file inside our project route directory and add a few commands there. This is what we need to add there. First, we need to tell Netlify which directory to publish, which is the storage app static, and which commands to run, which is "php please ssg generate." And finally we give it the PHP version. Once we create this file, all you need to do on Netlify
>
> **[3:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=188)** is link to the GitHub repository, make sure that the correct branch is selected and click deploy. No need to fill out anything. Netlify will find this file and use it to deploy our project. There is a lot more you can set up on Netlify to make your project just the way you want it. I'm not going to go into any more details, but what you know now is enough to get you started. Next time you want to add content to your website, run the local version, add your new content via the control panel or in code, commit and push the changes to GitHub. Netlify will trigger the deployment automatically. You don't have to do anything at all, and your content will be online in no time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (4), [[PHP]] (3), [[Git]] (2)
> **CLI Commands:** php (3), find (3), git (2), make (2)
> **Env Vars:** url (3), env (2), php_version (1), app_key (1), dns (1)
> **UI Navigation:** click on (6), select the (1), go to (1)
> **Tools:** github (4), terminal (1)
> **Prerequisites:** set up (3), configure (1)
> **Versions:** 7.4 (1)
> **Cross-References:** go back to (1)

#### [Challenge: Deploying a Statamic project to Netlify](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-deploying-a-statamic-project-to-netlify?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-deploying-a-statamic-project-to-netlify?u=76281980&t=0)** - [Instructor] Welcome to the last challenge of this course. In this challenge, you will get to just your knowledge of how to deploy a Statamic site to Netlify. Take the project from the last challenge, my website, initialize it with [[Git]], upload the project first to bring your repository on [[GitHub]], and deploy it to Netlify. It is up to you if you choose to add the build details via Netlify's UI, or via the netlify.toml file. Once you configure the site in the browser, go back to your local version and add some content. You can create a new page or change some content in an existing page. Upload the changes to GitHub, and see if Netlify deploys them automatically. If yes, fantastic. You have successfully learned how to create a Statamic site, add content, push the project files to GitHub, and set up Netlify to deploy your websites. And if you find this difficult, don't worry. We have covered a lot. Go back to the relevant chapter and watch the video again, or check out my solution to this challenge in the next video. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Git]] (1)
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** github (3)
> **CLI Commands:** git (1), find (1)
> **Prerequisites:** configure (1), set up (1)
> **File Paths:** netlify.toml (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Deploying a Statamic project to Netlify](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=0)** (techno music)
>
> **[0:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=5)** - How did it go? Did you manage to deploy your website? This is how I did it. In the terminal I make sure I am in the "my-website directory". First I will create the "netlify.toml" file by running "touch netlify.tomol" command in the terminal. I opened the project in [[PHP]] storm and paste the build commands from my previous project into this one. These commands never changed so copy pasting them is the easy way. Now I'm going to run "[[Git]] init" to initialize "git" and then run "git add ." to add all the files. Next I'm going to run "git commit -m" "ready to deploy" to commit everything. Now I need to go to my [[GitHub]] Account and create a new repository. I'll call it "my-website" and I'll set it to private this time. I'm going to finish setting up the GitHub credentials.
>
> **[1:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=75)** Now that the code has been pushed to GitHub, I'm going to go to my Netlify dashboard and click on "new site from gits". Also in the "my website repo", and because I created the Netlify the tumble file, I don't need to add anything in the Netlify UI. I just need to click "Deploy site". The site deploy is in progress, and if I want to I can check out the details. Wait a minute or so, and my website is live. Let's see in a browser, and yep it's all here. Let's add new content to my project. Before I do that though, I'll add the app URL value to my .ENV file. This is the URL Netlify has given me. Now I'm going to open the control panel in the browser. Remember, this is my local version of the website, not the live one. In here I'm going to go to "Collections", "Pages" and select the "Home" page this time. In the description field, I'll add "Hello there" and save the page. Let's make sure the new text is there by visiting the page in the browser. And here it is. Now let's deploy this update to the live version of the site too. In the terminal I'm going to run "git add .",
>
> **[2:50](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=170)** "git commit -m", "Update home page" and "git push origin main". You see everything is working. I'm going to check Netlify's dashboard again. And as you can see our update is building. It's finished. I'm going to check the live version in the browser again. Here is our new text. Well done for completing this challenge. You have learned so much in this course. Feel proud of yourself. I certainly feel proud of you. Amazing job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (7), [[GitHub]] (3), [[PHP]] (1)
> **CLI Commands:** git (7), make (2), php (1)
> **Tools:** terminal (3), github (3)
> **UI Navigation:** go to (3), click on (1), open the (1), select the (1)
> **Env Vars:** url (2), php (1), env (1)
> **File Paths:** netlify.toml (1)
> **Speakers:** - how (1)
> **Non-Speech:** (techno music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Where to go from here](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/where-to-go-from-here?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=0)** - [Zuzana] This brings us to the end of this course. By completing this course, you now have a foundational understanding about how to use Statamic and how to create just the right website for your project. This course is a great starting point to go even deeper into the Statamic documentation and knowledge base and learn more about the concepts and functionality we have covered and the ones that we didn't. Make sure to stay up to date with any new Statamic releases and features as Statamic is being actively developed and improved. And that's all from me. You can connect with me on Twitter or you can follow Larabelles, the community for women, non-binary, and trans [[Laravel]] developers either on Twitter or on [[LinkedIn]]. Thank you for watching and have fun building websites with Statamic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [zuzana] (1)


## Instructor

- [[Zuzana Kunckova]]

## Resources

- Exercise files available

## Skills Covered

- Content Management
- Laravel
- PHP

## Path Context

### In [[Build Your Laravel Skills]]
← [[Essential Jigsaw for PHP and Laravel Developers]] | **6 of 7** | [[Winter CMS with Laravel]] →

## Appears In

- [[Build Your Laravel Skills]]

## Related Courses

_Courses sharing skills:_

- [[Essential Jigsaw for PHP and Laravel Developers]] — PHP, Laravel
- [[Winter CMS with Laravel]] — Laravel
- [[Building GraphQL Applications in Laravel]] — Laravel
- [[Building RESTful APIs in Laravel]] — Laravel
- [[Advanced Laravel]] — Laravel

---

[↑ Back to top](#)