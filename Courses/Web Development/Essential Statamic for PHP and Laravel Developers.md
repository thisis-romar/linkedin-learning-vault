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
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Essential%20Statamic%20for%20PHP%20and%20Laravel%20Developers.md)

![Essential Statamic for PHP and Laravel Developers](https://media.licdn.com/dms/image/v2/C560DAQGUTB7Y-sJXRw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1634058104737?e=2147483647&amp;v=beta&amp;t=VOxuMek11V5ezz3nQ64WpjG0zsxcAadDL7YInZuGr4o)

# Essential Statamic for PHP and Laravel Developers

> Statamic, a flat-file content management system (CMS), offers developers the ability to create custom websites that are both easy to manage and beautiful. And because Statamic is built with PHP on top of Laravel, it is a natural fit for Laravel developers looking for an alternative to WordPress. In this course, join instructor Zuzana Kunckova as she covers the essentials of this versatile, full-fe

> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers) | 1h 31m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (1 videos)
- **[[#1. Introduction to Statamic]]** (3 videos)
- **[[#2. Getting Started with Statamic]]** (8 videos)
- **[[#3. Statamic Internals]]** (9 videos)
- **[[#4. Deploying Statamic on Netlify]]** (6 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to Statamic
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-statamic?u=76281980&t=0)** - [Narrator] Statamic is a flat-file, Laravel and Git-powered CMS designed for building beautiful, easy to manage websites. It's built on Laravel, one of the most popular PHP frameworks, which makes it a great choice for Laravel developers and a great alternative to WordPress.
>
> **[0:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-statamic?u=76281980&t=18)** Statamic has access to the entire Laravel ecosystem, allowing developers to build almost anything they want.
>
> **[0:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-statamic?u=76281980&t=24)** And speaking of it's beautifully designed control panel and advanced functionality, there is very little you cannot do.
>
> **[0:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-statamic?u=76281980&t=31)** I am Zuzana Kunckova, a Laravel developer and the founder of Larabelles, a community for women, non-binary and trans Laravel developers.
>
> **[0:41](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-statamic?u=76281980&t=41)** I've been using Statamic in my work every day.
>
> **[0:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-statamic?u=76281980&t=44)** And I'm excited to share my knowledge with you.
>
> **[0:47](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-statamic?u=76281980&t=47)** By joining me in this LinkedIn learning course, you will discover the essentials of Statamic.
>
> **[0:53](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-statamic?u=76281980&t=53)** How to install it, create users, how to choose and install one of many starter kits.
>
> **[0:59](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-statamic?u=76281980&t=59)** We will walk through the control panel, as well as its entire code base.
>
> **[1:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-statamic?u=76281980&t=63)** And I will show you how to create and edit content and deploy your website for free on Netlify.
>
> **[1:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-statamic?u=76281980&t=70)** If that sounds exciting, let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** git (1), php (1)
> **Env Vars:** cms (1), php (1)
> **Prerequisites:** install (2)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. Introduction to Statamic

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is Statamic?
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980&t=0)** - Statemic is a flat file CMS built with PHP on top of Laravel, a popular PHP framework, but what does this mean?
>
> **[0:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980&t=10)** You may be familiar with content management systems also known as CMSs, which are software used to manage, create and modify digital content.
>
> **[0:20](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980&t=20)** Using a user-friendly control panel.
>
> **[0:23](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980&t=23)** With CMS creates a new page for your website or a new post for your blog has never been easier.
>
> **[0:30](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980&t=30)** CMS handles the basic infrastructure for your website, creating new pages, adding images and other things.
>
> **[0:36](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980&t=36)** So the only thing you have to worry about, is creating your content.
>
> **[0:41](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980&t=41)** Statemic is a CMS, which means that once it's up and running, you can just log in to the control panel and do most of the work from there.
>
> **[0:50](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980&t=50)** You don't need to know how to code to use it, but you do need to be familiar with the terminal to get it installed.
>
> **[0:57](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980&t=57)** And if you're a developer, you can do so much more with Statemic, you can install add-ons, themes, or go in and use the power of Laravel to extend Statemic and add more advanced functionality.
>
> **[1:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980&t=70)** And what does it mean that Statemic is a flat file CMS?
>
> **[1:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980&t=74)** It means that all its content, data, and settings, are stored in folders and files rather than in a database.
>
> **[1:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980&t=81)** This makes flat file CMS more performance than other CMS that uses database.
>
> **[1:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980&t=87)** It also makes it more secure, and possible to version control, which brings an additional benefit when it comes to backups and collaboration with other developers.
>
> **[1:36](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980&t=96)** Statemic is a well known flat file CMS, and it is built on top of Laravel.
>
> **[1:42](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/what-is-statamic?u=76281980&t=102)** To get a bit Laravel's ecosystem There is a very little you cannot do with Statemic, which is why its popularity skyrocketed over the past few years and why it is a great tool to have in your toolbox.

> [!info]- Semantic Content
>
> **Env Vars:** cms (8), php (2)
> **Definitions:** is a  (6), means that (2), known as (1)
> **CLI Commands:** php (2)
> **Tools:** terminal (1)
> **Prerequisites:** install (1)
> **Speakers:** - statemic (1)

#### Statamic vs. WordPress vs. Jigsaw SSG
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=0)** - [Instructor] Now that you have a good idea about what Statamic is, let's compare it to another well-known CMS, WordPress.
>
> **[0:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=8)** WordPress powers around 40% of websites.
>
> **[0:11](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=11)** And it is unquestionably the most popular website builder at the moment.
>
> **[0:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=15)** It started as a blogging platform, but it evolved into a Jake of all trades kind of platform.
>
> **[0:20](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=20)** You can do pretty much anything you want in WordPress.
>
> **[0:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=24)** The benefit of WordPress is that just about anyone can use it.
>
> **[0:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=27)** Thanks to its famous 5 minute installation, you can get a WordPress website up and running really quickly.
>
> **[0:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=34)** People less familiar with code can do a lot by its user interface.
>
> **[0:38](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=38)** They can install themes, plugins, and use one of many available page builders to create some truly amazing websites.
>
> **[0:46](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=46)** In its core WordPress, and some themes and plugins are free, but there are many premium options too.
>
> **[0:53](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=53)** WordPress needs a database to store its content in.
>
> **[0:56](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=56)** And it uses PHP to store, and retrieve data from the database.
>
> **[1:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=60)** Database is an essential part of WordPress, without it, there would be no contents.
>
> **[1:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=65)** However, databases come with potential issues.
>
> **[1:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=68)** They need to be backed up on a regular basis, and it is via database that most websites are hacked.
>
> **[1:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=76)** Statamic only had the paid tier for a while.
>
> **[1:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=78)** But as a version 3, it offers a free tier as well.
>
> **[1:22](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=82)** Statamic needs some initial sets up, which is done by the terminal.
>
> **[1:26](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=86)** But once it's up and running, most things can be done from the control panel.
>
> **[1:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=91)** You can also install from a variety of free, or premium add-ons, and start tickets.
>
> **[1:37](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=97)** Statamic doesn't have a database.
>
> **[1:39](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=99)** All of its content, templates, assets, and settings are stored in Yammer and markdown files.
>
> **[1:45](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=105)** Which is great, because it means everything can be committed to an online repository, and version controlled.
>
> **[1:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=112)** However, you can add a database when you need one.
>
> **[1:56](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=116)** Before we move on, I wanted to mention another popular way to create websites.
>
> **[2:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=120)** And that's by using a Static Site Generator, also known as SSG.
>
> **[2:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=126)** There are tons of different Static Site Generators, and you may have heard about Hugo, Jekyll, Gatsby, or Next.js.
>
> **[2:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=133)** Static Site Generator that takes your website, and generate static HTML pages.
>
> **[2:19](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=139)** There is no database, but in general, there is no control panel either.
>
> **[2:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=144)** You might need to use a third party service.
>
> **[2:28](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=148)** Jigsaw is a PHP-based Static Site Generator developed by Titan, that uses Laravel Blade's templating engine to structure content in reusable layouts, and partials.
>
> **[2:40](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=160)** The benefit of using Jigsaw, is that you can easily host your website for free using services such as GitHub pages, or Netlify.
>
> **[2:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=169)** However, with no native control panel, it is not as straightforward.
>
> **[2:56](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=176)** Statamic however, counsel the first party add-on called Statamic Static Site Generator, which makes it possible to generate a static version of your Statamic site, and host it for free.
>
> **[3:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=188)** Every project has its own requirements, and will need its own solution.
>
> **[3:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=192)** And Statamic is a great solution to many different projects.
>
> **[3:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=195)** With it's user-friendly control panel, ease of use, and a huge variety of plugins and tools.
>
> **[3:22](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-vs-wordpress-vs-jigsaw-ssg?u=76281980&t=202)** It really offers the best of both worlds.

> [!info]- Semantic Content
>
> **Code Keywords:** static (7), let (1), interface (1), while. (1)
> **Env Vars:** php (2), cms (1), ssg (1), html (1)
> **Definitions:** is a  (2), is an  (1), known as (1)
> **CLI Commands:** php (2)
> **Tools:** terminal (1), github (1)
> **Prerequisites:** install (2)
> **File Paths:** next.js (1)
> **Versions:** version 3 (1)

#### Statamic as a standalone web app vs. as a Laravel package
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-a-standalone-web-app-vs-as-a-laravel-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-a-standalone-web-app-vs-as-a-laravel-package?u=76281980&t=0)** - [Instructor] There are two ways to install your Statamic application.
>
> **[0:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-a-standalone-web-app-vs-as-a-laravel-package?u=76281980&t=3)** You can install it as a stand-alone project or as a package into an existing Laravel application.
>
> **[0:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-a-standalone-web-app-vs-as-a-laravel-package?u=76281980&t=10)** On its own, Statamic is a very flexible content management system, that can be used to be used to go out and manage any type of bespoke websites.
>
> **[0:19](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-a-standalone-web-app-vs-as-a-laravel-package?u=76281980&t=19)** It comes with many features and add-ons, so that you can build just about anything out of the box.
>
> **[0:26](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-a-standalone-web-app-vs-as-a-laravel-package?u=76281980&t=26)** But if you do find yourself in a situation where some custom functionality would be great, you can always install Statamic as a Laravel package and use Laravel, and it's full ecosystem to build it.
>
> **[0:39](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-a-standalone-web-app-vs-as-a-laravel-package?u=76281980&t=39)** Not only that, but if you already have an existing Laravel application and you are looking to add a blog or a sales page, or you are looking for a control panel to write and publish content in, Statamic is a great choice.
>
> **[0:51](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-a-standalone-web-app-vs-as-a-laravel-package?u=76281980&t=51)** Because Statamic is built on Laravel, Laravel developers will be very comfortable in its source code and there will be a very gentle learning curve.
>
> **[1:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-a-standalone-web-app-vs-as-a-laravel-package?u=76281980&t=60)** You can extend Laravel's core features such as models, service providers and middleware.
>
> **[1:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-a-standalone-web-app-vs-as-a-laravel-package?u=76281980&t=66)** You can create your own controllers, classes, composer dependencies and you can use either Statamic's Antlers templating engine or Laravel's Blade.
>
> **[1:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-a-standalone-web-app-vs-as-a-laravel-package?u=76281980&t=74)** Whatever you find easier.
>
> **[1:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-a-standalone-web-app-vs-as-a-laravel-package?u=76281980&t=76)** The world is your oyster.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), composer (1)
> **Prerequisites:** install (3)
> **Definitions:** is a  (2)
> **Exercise Files:** source code (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Getting Started with Statamic

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Installing Statamic as a standalone project
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=0)** - [Instructor] Let's see how to install Statamic as a standalone app first.
>
> **[0:04](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=4)** You will need to have Composer installed.
>
> **[0:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=6)** If you don't have Composer installed, go to [getcomposer.org](https://getcomposer.org) and follow the instructions there.
>
> **[0:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=13)** I will assume you have your local development environment ready too.
>
> **[0:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=16)** In my case, I'm using Laravel Valet, but you can use any other local PHP development environment you prefer.
>
> **[0:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=24)** In this course, I'll be showing you how use Statamic as a standalone app and how to use it as a Laravel package.
>
> **[0:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=31)** I'm going to create two different projects.
>
> **[0:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=33)** One will be called statamic-standalone, and it will represent a standalone Statamic app.
>
> **[0:39](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=39)** The other project will be called statamic-in-laravel, and it will represent Statamic as a Laravel package.
>
> **[0:45](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=45)** Once you have Composer installed, there are a few different ways you can install Statamic.
>
> **[0:50](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=50)** The preferred method is to use the Statamic CLI installer.
>
> **[0:54](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=54)** You will need to install it by running composer global require statamic/cli in the terminal.
>
> **[1:02](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=62)** Now that we have the Statamic CLI installed, let's install the Statamic standalone project.
>
> **[1:07](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=67)** To do that, we need to run statamic new followed by the name of the project in the terminal.
>
> **[1:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=73)** I'm going to run statamic new statamic-standalone.
>
> **[1:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=78)** The Statamic installer will ask you whether you'd like to install a blank site or a starter kit.
>
> **[1:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=84)** Starter kits are very useful templates that will get you started in no time.
>
> **[1:28](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=88)** You can find the list of all Statamic as well as community starter kits on the Statamic website.
>
> **[1:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=95)** We will look into them in detail in the next video, but for now, I decided to use the Statamic Starter's Creek template.
>
> **[1:43](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=103)** In the terminal, select 1 by typing 1 at the command prompt.
>
> **[1:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=109)** You'll need to enter the package name now, which you can find on the Statamic website.
>
> **[1:56](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=116)** We'll only need the end of the command, statamic/statamic-kit-starters-creek.
>
> **[2:04](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=124)** Let's copy this and paste it into our terminal.
>
> **[2:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=128)** I could have just run the full command at the beginning of the installation too.
>
> **[2:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=135)** Statamic will ask you if you want to create a user.
>
> **[2:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=138)** Do we want to create a super user, in other words, admin?
>
> **[2:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=141)** Yes.
>
> **[2:23](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=143)** I'll add my email, my name, and the password.
>
> **[2:30](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=150)** And that's it. Installation has been completed.
>
> **[2:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=155)** Let's cd, or change directory, inside our new project.
>
> **[2:40](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=160)** Because I used Valet, I can display statamic-standalone.test in my browser.
>
> **[2:47](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=167)** And here it is. A brand new Statamic website.
>
> **[2:51](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=171)** You might need to go to your localhost URL depending on how your local development environment is set up.
>
> **[2:58](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=178)** The second way to install a Statamic app using Composer is by running composer create-project --prefer-dist statamic/statamic and the site name.
>
> **[3:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=190)** This will install an empty Statamic starter site with no default content.
>
> **[3:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=195)** I'm going to quickly install another project to show you how this works, and I'll call it statamic-default.
>
> **[3:22](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=202)** Let's cd out of the current directory.
>
> **[3:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=204)** I'll run the following command in the terminal, composer create-project --prefer-dist statamic/statamic statamic-default.
>
> **[3:40](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=220)** Let's check out a site in the browser.
>
> **[3:43](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=223)** Again, I'm going to view a URL provided by Valet which is based on the name of the directory, statamic-default.test.
>
> **[3:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=232)** You can see that this project is bland with no content and very little style unlike the one we created a moment ago.
>
> **[4:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-standalone-project?u=76281980&t=240)** I'm going to delete the statamic-default project now using the rm -rf command, as we are not going to need it again.

> [!info]- Semantic Content
>
> **CLI Commands:** composer (7), find (2), cd (2), php (1), rm (1)
> **Code Keywords:** let (6), default. (3), case, (1), require (1), super (1)
> **Prerequisites:** install (8), you'll need (1), set up (1)
> **Tools:** terminal (5), command prompt (1)
> **Env Vars:** cli (2), url (2), php (1)
> **UI Navigation:** go to (2)
> **URLs:** [getcomposer.org](https://getcomposer.org) (1)
> **Cross-References:** in the next (1)

#### Installing Statamic as a Laravel package
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=0)** - Let's move on to installing Statamic as a Laravel package.
>
> **[0:04](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=4)** I will first install a brand-new Laravel project and I will call it Statamic in Laravel, by running laravel new statamic-in-laravel in my terminal.
>
> **[0:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=14)** I already have the Laravel installer installed which is why I can run this command.
>
> **[0:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=18)** You can see more about a Laravel installer on the Laravel website.
>
> **[0:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=21)** You can either use this, or install Laravel the way you are familiar with.
>
> **[0:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=27)** Let's check out a landing page in the browser, at statamic-in-Laravel.test.
>
> **[0:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=33)** As you can see, our basic default Laravel application is working just as it should.
>
> **[0:39](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=39)** In order to install statamic, we will need to open this project in an integrated development environment, an IDE.
>
> **[0:45](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=45)** I am using PHP storm, but feel free to use any IDE you prefer.
>
> **[0:51](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=51)** Let's open the composer.json file.
>
> **[0:55](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=55)** In here, we need to add some code to the post-autoload-dump section of the file.
>
> **[1:01](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=61)** Let's scroll down until we find it.
>
> **[1:04](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=64)** And here it is.
>
> **[1:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=66)** We need to add, @php artisan statamic:install --ansi.
>
> **[1:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=73)** Let's save the file and go back to our terminal.
>
> **[1:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=78)** Let's cd into the project and run composer require statamic /cms -w I need to use the w flag because of some issues with dependencies statamic is currently having, but you might be able to run the command without this flag.
>
> **[1:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=95)** Try it out.
>
> **[1:39](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=99)** Once finished, let's go back to PHP storm, and here you can see that statamic added the content, and users directories.
>
> **[1:47](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=107)** And the statamic directory inside config directory to the default Laravel project.
>
> **[1:54](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=114)** The landing page is still the same because we haven't set up any custom statamic routes, but if you go to /cp, we can see that this will take us to the statamic control panel login page.
>
> **[2:07](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/installing-statamic-as-a-laravel-package?u=76281980&t=127)** From here on, you can use statamic as a part of your Laravel project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (1), require (1)
> **CLI Commands:** php (3), composer (2), find (1), cd (1), cp (1)
> **Prerequisites:** install (4), set up (1)
> **Env Vars:** ide (2), php (2)
> **UI Navigation:** open the (1), scroll down (1), go to (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **File Paths:** composer.json (1)

#### Statamic starter kits
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=0)** - [Instructor] Statamic comes with a few official starter kits, which consists of ready-made templates as well as some community starter kits.
>
> **[0:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=8)** To see the list again, let's go to [Statamic.com/starter-kits](https://Statamic.com/starter-kits).
>
> **[0:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=14)** If you choose not to have a starter kit and only install the default Statamic installation, with no front-end styling predefined for you, you would simply run Statamic New and your project's name, and select blank sites.
>
> **[0:28](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=28)** But if you do want to start with a starter kit, there are quite a few you can choose from.
>
> **[0:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=33)** Some come with an existing design, while others are designed agnostic and come bundled with some tools like Tailwind CSS and Alpine JS.
>
> **[0:42](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=42)** In the previous video, you randomly chose and installed a Statamic starter kit called Starter's Creek, developed by the Statamic team.
>
> **[0:50](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=50)** This is a beautiful multi-author blog with author pages.
>
> **[0:54](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=54)** But we could have picked up any idea from these kits.
>
> **[0:57](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=57)** For example, Peak by Studio 1902.
>
> **[1:01](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=61)** Here, we have a short description, a few screenshots, and the link to the official documentation.
>
> **[1:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=72)** Let's check out another kit.
>
> **[1:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=73)** For example, the Simple Commerce kits.
>
> **[1:17](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=77)** This is a great starting place for simple e-commerce sites.
>
> **[1:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=81)** These are its features and installation instructions.
>
> **[1:25](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=85)** The simplest way to install it would be to copy this link and paste it in your terminal.
>
> **[1:30](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=90)** Some kits will have a link to the demo site, for example, the Doogie Browser kit.
>
> **[1:39](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=99)** Any starter kit you install can be further customized.
>
> **[1:43](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=103)** Nothing is set in stone.
>
> **[1:45](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=105)** Sometimes it is easier to start with a kit and change a few things here and there, rather than starting from scratch.
>
> **[1:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-starter-kits?u=76281980&t=112)** But if you think you need to do a lot of changes to the starter kit, it will be better to not use one and start with default Statamic installation instead.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), from. (1)
> **Analogies:** for example (3)
> **Prerequisites:** install (3)
> **Definitions:** is a  (2)
> **URLs:** [statamic.com](https://statamic.com) (1)
> **Env Vars:** css (1)
> **Cross-References:** previous video (1)
> **Tools:** terminal (1)

#### Creating a user in Statamic
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=0)** - [Narrator] In order to login to the control panel, we need to have a user.
>
> **[0:04](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=4)** Since we installed a Starter kit in the previous video, Statamic´s already walked us through creating a user.
>
> **[0:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=10)** Let's see if we can login to the control panel.
>
> **[0:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=14)** I will go to statamic-standalone.test/cp and use the log in details as set up in the previous video.
>
> **[0:23](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=23)** Fantastic!
>
> **[0:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=24)** This worked, I'm logged in.
>
> **[0:26](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=26)** Let's see the user's YAML file.
>
> **[0:30](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=30)** YAML is a Human-Readable Data-Serialization Language that's Statamic uses for configuration files.
>
> **[0:36](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=36)** I'm going to open my project in PHP store and look inside the user's directory.
>
> **[0:42](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=42)** And here it is, a YAML file with my user information.
>
> **[0:47](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=47)** However, what if you need to create a user manually?
>
> **[0:50](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=50)** Let me show you.
>
> **[0:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=52)** I'm quickly going to create a new test site and call it user demo.
>
> **[0:57](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=57)** I'll select the blank site option and let Statamic install the site.
>
> **[1:01](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=61)** Statamic asked me if I want to create a user, I'll say no this time.
>
> **[1:07](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=67)** Next, I'm going to see the inside the user demo projects directory and type, "PHP please make colon user".
>
> **[1:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=75)** PHP please is the way we run various commands in Statamic.
>
> **[1:19](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=79)** Similar to PHP are to send in Laravel.
>
> **[1:22](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=82)** Statamic will take you through the questions again, and once you answered them all, the user is created.
>
> **[1:28](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=88)** And that's all you need to do to create an user manually.
>
> **[1:32](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=92)** But it doesn't end there.
>
> **[1:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=93)** You can set up Statamic to store users in a database, which is especially useful if you are running Statamic inside an existing Laravel project, because Laravel´s storage it's used in a database by default.
>
> **[1:46](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=106)** You could also set up Laravel to storage uses, as the Statamic way, in files, or you could use a custom user storage.
>
> **[1:54](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=114)** There are many different options, but I will not cover them in this course.
>
> **[1:58](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/creating-a-user-in-statamic?u=76281980&t=118)** If you're interested, you can read more about them in the Statamic documentation.

> [!info]- Semantic Content
>
> **Env Vars:** php (4), yaml (3)
> **CLI Commands:** php (4), cp (1), make (1)
> **Code Keywords:** let (4), type, (1), default. (1)
> **Prerequisites:** set up (3), install (1)
> **Cross-References:** previous video (2)
> **UI Navigation:** go to (1), select the (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### Statamic control panel
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=0)** - [Announcer] Let's go back to our Statamic stand alone project.
>
> **[0:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=3)** Now that we have created a user, we can login to the control panel.
>
> **[0:07](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=7)** To do that, you have to go to forward /cp in your browser which will take you to the login page.
>
> **[0:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=15)** Enter you login details, and here we are.
>
> **[0:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=18)** This is the Statamic control panel.
>
> **[0:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=21)** What you see on the dashboard and on the side bar sections will be in every Statamic installation.
>
> **[0:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=27)** Regardless of which Starter kit, if any, you have installed.
>
> **[0:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=31)** What might be different is the content of the individual sections, but we will get to that in a moment.
>
> **[0:38](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=38)** By default, the dashboard will have a "Getting Started with Statamic 3" cart with shortcuts to some popular pages such as the documentation, parts of the control panel such as the place to create a collection, a blue print, or a navigation.
>
> **[0:53](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=53)** You can customize the dashboard and even create a custom widget if you wish to.
>
> **[0:57](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=57)** There's a link to the documentation about widgets right here.
>
> **[1:02](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=62)** To view the website, you can click on this button in the top right hand corner.
>
> **[1:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=68)** Let's go through each section in the side bar of the control panel one by one.
>
> **[1:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=73)** In the content section, you will find collections.
>
> **[1:17](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=77)** A collection is a custom post type, something you might be familiar with if you ever worked with WordPress.
>
> **[1:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=84)** Because we´re using a Starter kit, we already have some collections created.
>
> **[1:28](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=88)** Blog and pages.
>
> **[1:30](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=90)** In a default Statamic project, with no Starter kit installed, there will be no existing collections.
>
> **[1:36](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=96)** Navigation is a place where you´ll have all navigation for your web site.
>
> **[1:41](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=101)** That could be the main navigation, the footer navigation, side maps, and any of the navigation structure you might need.
>
> **[1:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=109)** Taxonomies is for organize and connect your websites content to make it accessible and easy to find by using tags.
>
> **[1:57](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=117)** Assets is where you have all your assets for your website.
>
> **[2:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=120)** For example, images, social media, icons, PDF´s and so on.
>
> **[2:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=125)** Globals is where you set information that belongs to the whole website and that is accessible from everywhere, here, you´ll have things like company´s name, phone number, address, testimonials, copyright, basically, anything that is not related to an specific collection but to your website in general.
>
> **[2:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=144)** This Starter kit already counts to a global set called Settings, that is the company social media links, but in default Statamic installation you wouldn´t have any globals created by default.
>
> **[2:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=155)** In the fields section of the side bar, you´ll find blueprints and fieldsets.
>
> **[2:40](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=160)** Blueprint is where you define the fields that would be available for each collection, in other words, what would each page consist of.
>
> **[2:48](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=168)** For example, a title, an image, maybe a text area, link, or list of items.
>
> **[2:55](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=175)** This Starter kit already counts with the pre-default blueprints for each available collection.
>
> **[3:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=180)** Let´s quickly have a look at the blog blueprints.
>
> **[3:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=183)** This counts with two sections, the main, and the side bar.
>
> **[3:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=188)** The main section has the title, the intro, the hero image and the main content field.
>
> **[3:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=194)** We will look at blueprints in more detail later or in the course, because they´re a big part on the Statamic workflow.
>
> **[3:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=201)** Fieldsets are optional, and I use it to organize reusable fields.
>
> **[3:26](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=206)** Well, this means is that if you have a few fields that always use together, you can bundle then up into a fieldset, so the next time you need to use them, you´ll attach this fieldset to the collection, instead of creating the same group of fields over and over again.
>
> **[3:41](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=221)** Fieldsets can be added to any blueprints, we will also look into fieldsets in more detail later on.
>
> **[3:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=229)** In the tools section on the side bar, we have forms, updates, addons and utilities.
>
> **[3:56](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=236)** Forms is where you create all forms you need on your website, you can create as many forms as you need.
>
> **[4:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=243)** The update section is the detail of the current Statamic version you´re using, with a change log, you can also update your version from here, instead of from the terminal, if that´s what you prefer.
>
> **[4:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=255)** The addons section is similar to plugins in WordPress, there´s a list of all available and all installed addons.
>
> **[4:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=264)** Finally, the utility section.
>
> **[4:28](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=268)** This is a section of the shortcuts to some of the most used actions, for example, clearing various caches, information about licensing, and easy ways to check up your PHP configuration, and more.
>
> **[4:41](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-control-panel?u=76281980&t=281)** Now that you have a good idea about what the dashboard panel looks like, let´s move on to the views.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), default, (1), type, (1), default. (1), finally, (1)
> **CLI Commands:** find (3), cp (1), make (1), php (1)
> **Analogies:** for example (3), such as (2), similar to (1)
> **Definitions:** is a  (3), in other words (1)
> **Env Vars:** pdf (1), php (1)
> **Documentation:** the documentation (2)
> **UI Navigation:** go to (1), click on (1)
> **Cross-References:** go back to (1)

#### Adding and styling content in Statamic
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=0)** - [Instructor] Now that we have a good understanding of how to use the control panel, let's have a look at the views.
>
> **[0:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=6)** Views are files that contain the HTML that will be rendered and served by the front end of the website.
>
> **[0:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=13)** Statamic views can be rendered by either the antlers or the blade's templating engine.
>
> **[0:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=18)** It depends on your preference or existing workflow.
>
> **[0:22](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=22)** But in this course, I'll be using antlers.
>
> **[0:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=24)** So our view files will have the .antlers.HTML extension.
>
> **[0:30](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=30)** We will talk more about antlers later in the course.
>
> **[0:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=34)** Statamic comes with different kinds of views.
>
> **[0:36](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=36)** Layouts, templates, and partials.
>
> **[0:38](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=38)** And they are all saved in the resources/views directory.
>
> **[0:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=44)** Layout is the entry file with markup that will be served on every single page.
>
> **[0:48](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=48)** That means the <html>, <head>, <body> tags and links to all style sheets and required scripts will be here.
>
> **[0:55](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=55)** You can also go to global navigation, header, and footer code.
>
> **[1:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=60)** The actual content of each page will load wherever you put the template_content variable in the HTML body.
>
> **[1:09](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=69)** Partials are reusable views that can be injected into another layout.
>
> **[1:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=73)** A great example is a partial of a header, a footer, a button, or a cart.
>
> **[1:19](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=79)** Our starter kit has the footer partial.
>
> **[1:23](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=83)** The convention is to preface the name of a partial with an underscore, but you don't need to include underscore when using the partial tag.
>
> **[1:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=94)** Templates are views that extend the main layout and they can be used by any entry inside any collection.
>
> **[1:40](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=100)** For example, we can have a template for a blog post or a template for the homepage that is different to the template for the about page.
>
> **[1:48](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=108)** If you look at the templates for the blog view, the Starter's Creek has a template for the blog index, the blog show page, and for a cart.
>
> **[1:56](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=116)** Now that we've discussed views, it's time to create some new content.
>
> **[2:01](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=121)** Let's create a new page to put all that we've just talked about into practice.
>
> **[2:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=126)** In the dashboard panel, let's click on collections and pages.
>
> **[2:11](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=131)** We can create an about page by clicking on the create entry button.
>
> **[2:17](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=137)** Let's give it a title, About, and some content.
>
> **[2:22](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=142)** This is the about page.
>
> **[2:26](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=146)** I'm going to set the defaults template and save it by clicking on the save and publish button.
>
> **[2:38](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=158)** Once we saved a page, we'll be taken back to the listing.
>
> **[2:42](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=162)** If we wanted to stay on the page instead, we'll go back to the page, click on this arrow, and choose continue editing.
>
> **[2:50](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=170)** Then click save and publish.
>
> **[2:53](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=173)** As you can see, you will stay on this page.
>
> **[2:55](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=175)** You can also press command and S or control and S on your keyboard to save the page.
>
> **[3:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=180)** It will do the same thing.
>
> **[3:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=183)** To view the new page, click on the visit URL button.
>
> **[3:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=188)** You can also live preview this page, which will allow you to see your changes in real time.
>
> **[3:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=194)** Let me change the content a little bit so that you can see what I mean.
>
> **[3:20](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=200)** And there it is.
>
> **[3:22](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=202)** You can also see it on different screen sizes, laptop, tablet, or mobile.
>
> **[3:28](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=208)** To close the live preview, click on the X in the top right corner.
>
> **[3:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=214)** It's great to see your new page, however, there isn't any structure or style to this page.
>
> **[3:40](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=220)** Let's open the default template in our code to see why.
>
> **[3:46](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=226)** As you can see the no diffs and no CSS classes.
>
> **[3:50](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=230)** This is why the content is plain.
>
> **[3:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=232)** Before we do anything to do with CSS, we must run NPM install to install all JavaScript dependencies that this starter kit needs.
>
> **[4:01](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=241)** And then NPN run watch to watch for any changes.
>
> **[4:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=245)** This is very important for any kit that uses some CSS framework or JavaScript library that needs compiling.
>
> **[4:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=252)** In the terminal, make sure you are in the statamic standalone directory.
>
> **[4:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=256)** And then run NPM install.
>
> **[4:19](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=259)** Once finished I'll run NPM run watch to watch for any changes done to the files.
>
> **[4:26](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=266)** Now we are able to make changes to the default template.
>
> **[4:30](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=270)** Back into code, let's just run the content variable, which is responsible for fetching the main content of the page into a diff.
>
> **[4:38](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=278)** Let's send some it with Tailwind CSS, give it some petting and maybe even a pale blue background.
>
> **[4:50](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=290)** Let's save the file and check the website in the browser.
>
> **[4:53](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=293)** Once we refresh the page, you can see that we now have some basic structure and styling.
>
> **[4:59](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=299)** Well done.
>
> **[5:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=300)** You've just created and styled a brand new page.
>
> **[5:04](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=304)** You can easily edit this page or even delete it.
>
> **[5:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=306)** Let's edit the content of the page to say about me and save it.
>
> **[5:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=312)** I'm going to refresh the browser to see the new content.
>
> **[5:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=316)** And here it is.
>
> **[5:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=318)** Finally, let's delete this page.
>
> **[5:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=321)** To delete a page, we need to go out of the page into the pages collections page.
>
> **[5:26](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=326)** Click on these three dots next to the page we want to delete and select delete.
>
> **[5:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=333)** Let's confirm we want to delete this entry and save the changes.
>
> **[5:38](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=338)** Don't forget to save the changes, because if you don't, the page will not be deleted.
>
> **[5:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=344)** And that's it.
>
> **[5:45](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/adding-and-styling-content-in-statamic?u=76281980&t=345)** The page has been deleted.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), delete (6), continue (1), finally, (1)
> **Env Vars:** css (4), html (3), npm (3), url (1), npn (1)
> **UI Navigation:** click on (5), go to (1), open the (1)
> **Exercise Files:** template (7)
> **CLI Commands:** npm (3), make (2)
> **Prerequisites:** install (3)
> **Cross-References:** later in (1), go back to (1)
> **File Paths:** antlers.html (1)

#### Challenge: Creating a new Statamic project
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-new-statamic-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-new-statamic-project?u=76281980&t=0)** - [Narrator] Welcome to our first challenge.
>
> **[0:07](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-new-statamic-project?u=76281980&t=7)** Let's practice what we have learned so far.
>
> **[0:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-new-statamic-project?u=76281980&t=10)** In this challenge, I'm going to ask you to install a brand new standalone Statamic website and call it my-website.
>
> **[0:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-new-statamic-project?u=76281980&t=18)** Choose the Beautiful Documentation starter kit.
>
> **[0:20](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-new-statamic-project?u=76281980&t=20)** You can find the installation link on [statamic.com/starter-kits](https://statamic.com/starter-kits) page.
>
> **[0:26](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-new-statamic-project?u=76281980&t=26)** Create a new user and log in to the control panel.
>
> **[0:30](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-new-statamic-project?u=76281980&t=30)** Create a new page called About.
>
> **[0:32](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-new-statamic-project?u=76281980&t=32)** Give it a title, a short description, and some content.
>
> **[0:37](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-new-statamic-project?u=76281980&t=37)** Check it in the browser that you can display your new page and if you don't like the style of it, go ahead and change it.
>
> **[0:43](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-new-statamic-project?u=76281980&t=43)** What about changing the background color of the main content area to blue and giving it some padding, too?
>
> **[0:50](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-new-statamic-project?u=76281980&t=50)** I'll see you in the next video when you are done.
>
> **[0:53](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-new-statamic-project?u=76281980&t=53)** If you are struggling, feel free to go back to the previous videos and give them another watch or watch my solution video, where I work you through how I approach this challenge.
>
> **[1:02](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-new-statamic-project?u=76281980&t=62)** Good luck!

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **URLs:** [statamic.com](https://statamic.com) (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Creating a new Statamic project
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=0)** - How did you do?
>
> **[0:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=6)** Hopefully, you were able to solve the challenge.
>
> **[0:09](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=9)** But if not, don't worry.
>
> **[0:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=10)** Let's do it together.
>
> **[0:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=12)** First, I'll go to www.[statamic.com](https://statamic.com) forward slash starter dash kits to copy the installation link of the beautiful documentation kit.
>
> **[0:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=21)** Next I'll paste into my terminal, but I need to make sure I renamed the default, "my site" to "my dash website."
>
> **[0:30](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=30)** Now I'll let Statamic do its job.
>
> **[0:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=33)** When I get asked about creating a user, I'll say yes and add all the required details.
>
> **[0:41](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=41)** I'm going to visit my page in the browser at my dash website dot test.
>
> **[0:47](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=47)** Fantastic. It's loading.
>
> **[0:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=49)** I'll go to the control panel login page now and add all my credentials.
>
> **[0:57](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=57)** Okay. In here, I'll go to collections pages.
>
> **[1:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=63)** I'll click on create entry.
>
> **[1:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=65)** And the title of my page will be about.
>
> **[1:09](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=69)** The description of it will be about my project and the content will be, this is the documentation for my grade project.
>
> **[1:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=78)** I'll click on the arrow next to the save and publish button and select continue editing.
>
> **[1:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=84)** And now I'm going to click, save and publish.
>
> **[1:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=87)** Next, I'll view my webpage in the live preview and the content is there.
>
> **[1:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=93)** Amazing.
>
> **[1:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=95)** Okay. Next, I need to go to the template file in my ID to change the background of the content area.
>
> **[1:41](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=101)** But before I do that, I need to run NPM install and NPM run watch to watch for the CSS changes.
>
> **[1:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=112)** If you forget to do this, your new background color will not show.
>
> **[1:55](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=115)** Now that it's done, I'll go to PHP storm and add a div around the content variable inside the default template file.
>
> **[2:11](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=131)** I'll also add the tailwind classes of bg-blue 200 and P20 to the div.
>
> **[2:20](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=140)** Save the file and go back to my browser.
>
> **[2:23](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=143)** And refresh the page.
>
> **[2:26](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=146)** Oh, it looks like live preview doesn't like this.
>
> **[2:28](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=148)** So, let's go into visit the URL instance.
>
> **[2:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=151)** Oh, and here is a blue background.
>
> **[2:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=153)** Fantastic.
>
> **[2:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=154)** It all works.
>
> **[2:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-new-statamic-project?u=76281980&t=155)** Well done everyone for completing this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), default, (1), continue (1), this, (1), this. (1)
> **UI Navigation:** go to (5), click on (2)
> **Env Vars:** npm (2), css (1), php (1), p20 (1), url (1)
> **CLI Commands:** npm (2), make (1), php (1)
> **Exercise Files:** template (2)
> **URLs:** [statamic.com](https://statamic.com) (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)


### 3. Statamic Internals

> [[#Table of Contents|↑ Back to Table of Contents]]

#### File structure in Statamic
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=0)** - One of the great benefits of Statamic that you can do almost anything you need both in the control panel and in code, depending on your preference.
>
> **[0:09](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=9)** So far, you've learned how to add content via the control panel. This is a good option when you like to use the graphical user interface, but sometimes you might want to create content within your code base and Statamic makes it easy.
>
> **[0:23](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=23)** Let's have a look at Statamic's file structure.
>
> **[0:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=27)** This dot-github director is where we can store github-related files to your project, such as the contributing.MD file, the content of MD file, or any files related to running github actions.
>
> **[0:41](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=41)** This starter kit came with the funding door Yama file, which displays a sponsor button and a github repository.
>
> **[0:47](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=47)** This github director is not specific to Statamic.
>
> **[0:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=52)** Many of the following directories, you might already be familiar with if you ever worked in a Laravel project. The app directory, the bootstrap directory and the config database, public resources, route storage tests and vendor directories.
>
> **[1:09](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=69)** We are not going to go into any detail of what these directories contain, but if you want to learn more, visit the official Laravel documentation.
>
> **[1:19](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=79)** The Statamic-specific directories are the content directory, the Statamic director inside the storage directory, and the user's directory.
>
> **[1:32](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=92)** Let's have a look at the content directory first.
>
> **[1:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=95)** This is where we can access anything to do with creating content in Statamic.
>
> **[1:40](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=100)** In the previous video, we went over each of these kinds of content from the control panel, and here is where you can do the same thing from the code. To create a new page, you can create a new markdown document inside the collections pages directory. You can see this already created home.MD file to see what would go into such a file.
>
> **[2:02](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=122)** We have the title, the ID, and the template the page is using. Let's create a new page called test.MD.
>
> **[2:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=134)** To save time, I'll simply copy the front-matter section of the homepage and paste it in. The front matter is the section of the markdown file that contains all necessary metadata for this page.
>
> **[2:26](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=146)** Let's delete the ID because this is specific to the homepage and it will be auto-populated later.
>
> **[2:32](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=152)** We will change the title to test and I'll add a simple content. This is "Test." Let's save the file and go back into our control panel.
>
> **[2:43](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=163)** In the Collections pages section is our test page.
>
> **[2:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=169)** If we open it up, we can see that the title is there, the content is there, and the author has been auto-filled to my own name. In your case, it will be your name. If we switch back to the markdown file, we can see that the ID has now been populated, together with some other info.
>
> **[3:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=188)** You may wonder, why would anyone do this?
>
> **[3:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=190)** Why create pages and code when it may appear simpler to just add a new page by the control panel?
>
> **[3:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=196)** Having an option to do so in code is extremely useful.
>
> **[3:19](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=199)** If you want to copy pages, but not just pages, but also blueprints, field sets, globals, navigations, and other parts of your project between Statamic projects, instead of having to recreate every page or blueprint manually via the control panel, which can take a while, we can just copy over the markdown file and be done with it. Also, once you get into the flow of it, creating content using markdown is actually faster than via the control panel. But it is your personal preference, so just use whichever way you find easier.
>
> **[3:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=232)** And finally, let's look into the User's directory.
>
> **[3:57](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=237)** We have already seen this directory early in the course.
>
> **[4:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=240)** This is where Statamic saves every created user.
>
> **[4:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=243)** The password has been hashed, so you don't have to worry about the security of a user's info.
>
> **[4:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=248)** I'm not going to try and create another user, because the free tier of Statamic only allows one user.
>
> **[4:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=254)** If we were to add another one, we would have to upgrade to the paid tier.
>
> **[4:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/file-structure-in-statamic?u=76281980&t=258)** But for our purposes, it is enough to know where Statamic stores all its users, if you ever wanted to check the name or the email of one. As you have seen, Statamic allows you to create content whichever way you prefer. Control panel or markdown files, they both have their pros and cons. Now that you know the structure of Statamic files, let's look into blueprints and field sets.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), interface (1), public (1), delete (1), case, (1)
> **Tools:** github (5)
> **File Paths:** contributing.md (1), home.md (1), test.md (1)
> **CLI Commands:** find (1)
> **Cross-References:** previous video (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### Blueprints, fieldtypes, and fieldsets in Statamic
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=0)** - [Instructor] Blueprints are really key when it comes to content modeling, which is the process of breaking your content into different types.
>
> **[0:07](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=7)** What this means is that by using a blueprint, you get to define fields each of your continent will have.
>
> **[0:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=12)** You might be already familiar with it, if you've ever worked with WordPress advanced custom fields.
>
> **[0:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=18)** For example, the blueprint for a blog might be a title, an excerpt, a body, and an author.
>
> **[0:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=24)** Because our start ticket came for the blog, we can see its blueprint.
>
> **[0:28](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=28)** Let's go to the control panel, Blueprints, click on Blog, and here is the already predefined blueprints.
>
> **[0:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=35)** And if I open an individual blog posts and I'll do that in a new tab so that I can easily switch back and forth, we can see the Title, Intro, Hero image, and main concern there.
>
> **[0:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=49)** Any field you add in the blueprint will be shown there.
>
> **[0:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=52)** That's another field.
>
> **[0:54](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=54)** Back in the blueprint, I'll click on Create Fields, and here we have a whole list of available fields.
>
> **[1:01](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=61)** Most of them are self-explanatory.
>
> **[1:02](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=62)** You have a coat field, a form, a time field, and many others.
>
> **[1:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=68)** Some might be less obvious. For example, the Bard field, which is an edits, say idea for long form content with some extra functionality.
>
> **[1:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=76)** Each field has detailed documentation on the statamic website.
>
> **[1:23](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=83)** You can either view all of the fields at once or just the text fields, the media fields, or the relationship fields by selecting the appropriate stuff.
>
> **[1:32](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=92)** You can also easily search through the fields.
>
> **[1:36](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=96)** I'm going to search for the time field to add to the blog blueprint, to display time.
>
> **[1:42](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=102)** Each field will have the settings tab where you can customize the label of the field, the template variable, which we will talk about in the next video and some instructions.
>
> **[1:51](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=111)** In the condition tab, you can define some rules when this field will be shown or hidden, such as showing this time field only when the title field equals the string hello.
>
> **[2:02](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=122)** In the validation step, you can define the validation rules for each field.
>
> **[2:11](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=131)** I'm going to save this field by clicking on this Finish button.
>
> **[2:17](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=137)** And as you can see, it has been added to the block main section.
>
> **[2:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=141)** You can also reorder the fields by dragging them.
>
> **[2:25](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=145)** Let's say, I want to have the time field right under the title field.
>
> **[2:29](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=149)** I'll just drag it there.
>
> **[2:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=151)** Don't forget to save and let's switch it up to see our block post.
>
> **[2:36](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=156)** Before we refresh the page, notice how there is no time field.
>
> **[2:42](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=162)** But once I refresh, here it is.
>
> **[2:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=164)** The time field right under the title field.
>
> **[2:48](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=168)** Now that you know what blueprints are and how to add a new field, let's look at fieldsets.
>
> **[2:54](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=174)** Fieldsets are basically sets of reusable fields.
>
> **[2:57](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=177)** You would create a fieldset to represent, for example, an image block, but a text field for the alt text and the text field for the image grace.
>
> **[3:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=186)** So whenever you want to add an image, instead of adding these three fields separately, you would just add the fieldset.
>
> **[3:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=192)** Let's create one now.
>
> **[3:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=195)** Click on the field settling in the sidebar.
>
> **[3:17](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=197)** And since our starter kit didn't come with any fieldsets, we've only to create the first one.
>
> **[3:22](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=202)** Click on the Create Fieldset button, and let's give our fields at a title, Image Block.
>
> **[3:28](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=208)** Click on Create Fieldset.
>
> **[3:32](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=212)** Now we can add fields as we would in the blueprint.
>
> **[3:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=215)** Click on Create Field.
>
> **[3:39](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=219)** We can add an image by assets fields.
>
> **[3:42](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=222)** I'll rename the assets to image to make it more obvious what this field is for.
>
> **[3:47](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=227)** We could also have short instructions too, define the maximum number of files that can be selected and other things.
>
> **[3:56](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=236)** Click Finish and let's add a text field for the alt text.
>
> **[4:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=240)** I'll click on Create Field again and search for text.
>
> **[4:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=246)** Change label to Alt Text and click Finish.
>
> **[4:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=252)** And finally the last field for an image credit, create fields, find the text field, change the label to credits and click Finish.
>
> **[4:25](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=265)** Amazing.
>
> **[4:26](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=266)** We now have a fieldset.
>
> **[4:28](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=268)** Don't forget to click the Save button, it's very easy to miss.
>
> **[4:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=273)** Let's go and include this fieldset into our block blueprints.
>
> **[4:38](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=278)** Let's click on Blueprints and Blog.
>
> **[4:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=284)** Instead of creating a field, I'll click on Link Existing.
>
> **[4:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=289)** This will open the sidebar, but we can either link an individual field such as the alt text field or the whole fieldset.
>
> **[4:58](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=298)** Click Link and here's our fieldset attached to the blog blueprint.
>
> **[5:02](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=302)** Let's save the blueprint and check out article again.
>
> **[5:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=308)** I'm going to refresh the page and scroll all the way to the bottom.
>
> **[5:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=314)** And here it is, we have a field to suck an image, to add the alt text and some credits.
>
> **[5:20](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=320)** As is typical for statamic, there are various ways to create blueprints and fieldsets.
>
> **[5:25](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=325)** You can add to create them by the control panel, as we have done just now all by creating a yaml file within the resources blueprints or resources fieldsets directories in our code.
>
> **[5:42](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=342)** There is a third way to create the blueprint and that's by going to the dashboard and the setting for an individual content.
>
> **[5:48](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=348)** For example, the pages.
>
> **[5:50](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=350)** By clicking on these three dots, you'll get a menu that will allow you to edit blueprints.
>
> **[5:57](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=357)** As you can see, blueprints and fieldsets an amazingly easy way to structure content, and you'll probably spend a lot of time working with them.
>
> **[6:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/blueprints-fieldtypes-and-fieldsets-in-statamic?u=76281980&t=365)** Now that you've learned the basics, it will be easy for you to go and create new fields, customize them, group them into field sets and so on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), switch (2), self (1), for. (1)
> **UI Navigation:** click on (9), go to (1), in the sidebar (1), open the (1)
> **Analogies:** for example (4), such as (2)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is an  (1), is a  (1)
> **Best Practices:** don't forget (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)

#### Assets in Statamic
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=0)** - Assets, are files managed by Statamic, and stored in containers.
>
> **[0:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=5)** We can have many different assets in our project.
>
> **[0:07](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=7)** Images, videos, PDFs, almost anything you can think of.
>
> **[0:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=13)** Each asset is stored inside a container.
>
> **[0:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=15)** This container can have its own settings, permissions and blueprint, and it can live either on your local server or on any cloud storage.
>
> **[0:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=24)** We can create various containers, each with their own individual settings.
>
> **[0:29](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=29)** I find it easier to first create the container via the control panel and then see the markdown file to see what exactly was created.
>
> **[0:37](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=37)** This way, I develop the understanding of what I would need to do if I wanted to create a container in the code with the markdown file.
>
> **[0:45](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=45)** As you can see, our starter kit came with the Assets container.
>
> **[0:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=49)** This container already has a folder and some images, but we could create even more folders, which would help us to keep our assets organized.
>
> **[0:58](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=58)** We can also switch between the grid and list views.
>
> **[1:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=60)** Use whichever you prefer.
>
> **[1:04](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=64)** You can upload an asset by clicking on this Upload button.
>
> **[1:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=70)** Let's look into the site directory.
>
> **[1:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=73)** In here we have a sub directory with the social media icons, that came by default with our starter kit.
>
> **[1:20](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=80)** By clicking on one image, we get the asset editor screen, where you can set the focal points, you can rename the file, or move the file to another folder.
>
> **[1:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=91)** You can also add the alt text here.
>
> **[1:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=94)** Let's exit this screen by clicking on this X button, and quickly check out a blueprint for this asset container.
>
> **[1:43](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=103)** As you can see, this is the field for the alt texts that already exists.
>
> **[1:48](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=108)** Let's create another field.
>
> **[1:50](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=110)** Click on Create Field, and I'll use the text field for the image credits.
>
> **[1:54](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=114)** Change the label to Image credit, click Finish, and Save.
>
> **[2:01](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=121)** I'll go back to the Assets container, open an image, and here is our credit fields.
>
> **[2:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=128)** Because each container can have a blueprint, you can customize your containers.
>
> **[2:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=132)** Every new container comes with an alt texts by default, but you can add any number of fields.
>
> **[2:19](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=139)** Let's also see where we can find containers in the code.
>
> **[2:23](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=143)** In the content assets directory, you'll find a YAML file for the assets container.
>
> **[2:29](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=149)** Each container will have its own YAML file.
>
> **[2:32](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=152)** Let's create another container to see how it's done.
>
> **[2:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=155)** In the control panel, let's go to Assets and click on Create Container.
>
> **[2:41](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=161)** Let's say we want to have a container specifically for documents.
>
> **[2:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=164)** I'll call it Documents.
>
> **[2:46](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=166)** And the convention is to use the plural.
>
> **[2:48](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=168)** So, not document but documents.
>
> **[2:51](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=171)** We can also choose where to store the documents, but I'll stick with the local storage.
>
> **[2:56](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=176)** We can decide if we wants to allow uploads, create folders and all these other options, but I'll leave them as they are for now.
>
> **[3:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=185)** Click Save. And here we have our new container.
>
> **[3:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=194)** Let's see it's YAML file too.
>
> **[3:17](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=197)** And yes, it's right here.
>
> **[3:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=201)** You could also create a blueprint for your new container and define what fields you want it to have, but I'm not going to do it right now.
>
> **[3:28](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=208)** Finally, let me show you how to delete a container.
>
> **[3:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=211)** We could just delete the YAML file if you wanted to.
>
> **[3:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=214)** Or, we could go to the control panel, click on Assets, select the container and click on these three dots.
>
> **[3:40](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=220)** I'll select Delete container.
>
> **[3:42](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=222)** Confirm, and the container is gone.
>
> **[3:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=229)** Now that you understand what containers are, you can easily organize the assets for your website.
>
> **[3:54](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/assets-in-statamic?u=76281980&t=234)** Control the storage, settings and fields that are displayed for each assets.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), delete (3), switch (1), default, (1), finally, (1)
> **UI Navigation:** click on (4), go to (2), select the (1)
> **Env Vars:** yaml (4)
> **CLI Commands:** find (3)
> **Cross-References:** go back to (1)
> **Speakers:** - assets (1)

#### Antlers, the templating engine in Statamic
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=0)** - [Instructor] Before we start learning about variables in Statamic, we need to talk about Antlers.
>
> **[0:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=5)** If you ever worked with Laravel, you might be familiar with Blades, the templating engine Laravel uses.
>
> **[0:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=12)** Statamic uses Antlers, which similar to Blade, adds capabilities on top of HTML.
>
> **[0:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=18)** The file extension is antlers.html, and it is essential that you use this extension.
>
> **[0:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=24)** Without it, the Antlers engine will not pass the data.
>
> **[0:29](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=29)** You can display any data pass into the view by using variables wrapped inside double curly braces.
>
> **[0:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=35)** We will talk a lot more about variables later.
>
> **[0:37](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=37)** For now, just know that if you want to display the title of any page, whatever is saved in the title variable, use title wrapped inside double curly braces.
>
> **[0:47](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=47)** The content of the page will be displayed via the template content variable.
>
> **[0:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=52)** You can also run an array of items, a content of an associative array, use logic inside your view by using the if, elseif, else, and unless keywords, and use any of PHPs native comparison or logical operators.
>
> **[1:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=68)** Let's see if there is a file that uses these.
>
> **[1:11](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=71)** I'm going to search for elseif in the code, and here is one just to show you how it would be done.
>
> **[1:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=84)** You can do a lot with Antlers as you would in PHP, but you cannot use PHP inside the Antlers template unless you change the file extension from antlers.html to antlers.php.
>
> **[1:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=95)** You could also use Laravel Blades templating engine, if that's what you prefer or what your project already uses.
>
> **[1:42](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=102)** Simply change the file extension to blade.php.
>
> **[1:46](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=106)** There are some rules though.
>
> **[1:48](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=108)** Antler's expressions are case sensitive.
>
> **[1:50](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=110)** So title with a lower case T is not the same as title with a uppercase T.
>
> **[1:56](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=116)** Hyphens and underscores are not interchangeable, so don't mix them up.
>
> **[2:01](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=121)** Whitespace between curly braces and inner text is recommended, but is not required.
>
> **[2:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=126)** As you can Statamic offers an amazing flexibility, when it comes to rendering content.
>
> **[2:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/antlers-the-templating-engine-in-statamic?u=76281980&t=132)** You can choose between different templating engines, you can use PHP, and you can customize your workflow to suit your exact needs.

> [!info]- Semantic Content
>
> **CLI Commands:** php (5)
> **Code Keywords:** pass (2), if, (1), else, (1), let (1)
> **File Paths:** antlers.html (2), antlers.php (1), blade.php (1)
> **Env Vars:** php (3), html (1)
> **Exercise Files:** template (2)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)

#### Variables in Statamic
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=0)** - [Instructor] Variables (indistinct) Statamic injects data into our views, which allows us to dynamically render the content with the use of double curly braces.
>
> **[0:09](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=9)** Let's have a look inside the blog show.antlers.html file.
>
> **[0:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=15)** I'll go to Resources, Views, Blog, and show.antlers.html.
>
> **[0:23](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=23)** Here, you can see the H1 tag renders the title variable.
>
> **[0:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=27)** While the label title is obvious, where is this title variable coming from?
>
> **[0:32](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=32)** Let's check out the blog's blueprint.
>
> **[0:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=34)** In the Dashboard Panel, I'll go to Blueprints, Blog, and open the Title field.
>
> **[0:42](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=42)** And here under the Handle field, we can see the fields template variable is title.
>
> **[0:48](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=48)** This is how we rendered a content inside our template, and this is the variable that we need to use.
>
> **[0:53](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=53)** If you look at any other field, for example, the Author field, you'll see that the variable is author.
>
> **[0:59](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=59)** You could change it to whatever you want, but it's better to stay consistent.
>
> **[1:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=63)** Let's create a new field in this blueprint, a simple text field called Test.
>
> **[1:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=70)** The variable is automatically generated from the label, but you could change it if you wanted to.
>
> **[1:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=75)** I'm going to change the display from text to test, and you can see that the handle has changed to.
>
> **[1:22](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=82)** Finish and Save the blueprint.
>
> **[1:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=87)** Now I'll go back to the post and add some random texts in this field.
>
> **[1:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=91)** For example, hello.
>
> **[1:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=93)** Let's go to Collections, Blog, and I'll just pick the first blog on the list.
>
> **[1:41](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=101)** Scroll all the way down and here is our test fields.
>
> **[1:45](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=105)** Let's add hello world.
>
> **[1:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=109)** I'm going to save and publish.
>
> **[1:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=112)** Now let's go back to show.antlers.html file and change what the H1 tag renders to test, because this is the variable name we had in our field.
>
> **[2:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=123)** Save the file and go back to the dashboard to view the blog post now.
>
> **[2:07](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=127)** I'm going to go into the blog post and click Visit URL.
>
> **[2:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=133)** And here it is.
>
> **[2:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=134)** Instead of the title, we see our random text, hello world.
>
> **[2:19](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=139)** This is the basic way to render content.
>
> **[2:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=141)** And if you ever forget which variable to use, go back to the field inside the blueprint and look it up again.
>
> **[2:28](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=148)** You can also use variables that are not coming from your blueprints.
>
> **[2:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=151)** These variables are grouped into a few groups, the Content, Entry, Term, Asset, and the System group.
>
> **[2:40](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=160)** You can learn more about them in the Statamic documentation page.
>
> **[2:43](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=163)** For example, the permalink variable from the content group will render an absolute link to the current page.
>
> **[2:50](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=170)** Let's add a permalink to the show.antlers.html page, right here under the title.
>
> **[2:59](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=179)** Save the file, and let's have a look at the post inside a browser.
>
> **[3:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=183)** I'm going to refresh the page and here, right under the title, is the permalink.
>
> **[3:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=190)** Let's actually make it into a link by using the A tag.
>
> **[3:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=194)** I'm going to wrap the permalink inside an A tag.
>
> **[3:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=196)** Use the permalink variable as the HREF and as the content of the link.
>
> **[3:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=201)** Save the file, and let's go back to the browser.
>
> **[3:25](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=205)** I'm going to refresh, and here is our link.
>
> **[3:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=211)** There is so much more you can do with variables such as loop through them, or use conditional logic, as we learned in the chapter about Antlers.
>
> **[3:39](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=219)** Variables are what make rendering consent truly dynamic.
>
> **[3:43](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/variables-in-statamic?u=76281980&t=223)** And now that you understand how to create them and use them in your templates, you can run render anything like on your page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10)
> **Cross-References:** go back to (5)
> **File Paths:** show.antlers.html (4)
> **UI Navigation:** go to (3), open the (1)
> **Analogies:** for example (3), such as (1)
> **CLI Commands:** make (2)
> **Env Vars:** url (1), href (1)
> **Exercise Files:** template (2)

#### Globals in Statamic
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=0)** - [Instructor] Global variables, or globals, are variables that belong to the whole site, not just to a single page.
>
> **[0:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=6)** They're available everywhere all the time.
>
> **[0:09](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=9)** You can think of globals as something that hardly ever changes, such as the company's address, logo, phone number, testimonials, and so on.
>
> **[0:17](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=17)** While the title of a page will be different on each page, the company's logo is most likely to be global.
>
> **[0:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=24)** Let's have a look at the Globals section of the control panel.
>
> **[0:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=27)** As you can see, our starter kit already came with one globals set called Settings.
>
> **[0:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=33)** When you open the set, you can see that it includes the name of the site, the social media icons, and some other options.
>
> **[0:40](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=40)** These are unlikely to change very often, and by having them as a set of global variables, you can reference them in any template on any page you like.
>
> **[0:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=49)** Let's create another globals set.
>
> **[0:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=52)** I'm going to call it Company and pay attention to this handle.
>
> **[0:55](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=55)** This is the variable that we will use in the template.
>
> **[0:58](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=58)** We will leave the handle as it is, although you could change it if you wanted to.
>
> **[1:02](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=62)** It doesn't have to be the same as the title, but I would advise against it.
>
> **[1:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=66)** It's best to be consistent.
>
> **[1:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=68)** Let's click on Create Global Set.
>
> **[1:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=72)** Here, we have a nice shortcut to edit the blueprint of the set.
>
> **[1:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=76)** I'll click on the link, and it will take me to the set's blueprint.
>
> **[1:20](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=80)** Let's create a text field for the company's address, a link field for some important URL, and another text field for the phone number.
>
> **[1:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=87)** I'll start with the address.
>
> **[1:29](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=89)** Let's click Create Fields and select text field.
>
> **[1:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=95)** I'm going to change the default label to the appropriate one to make sure I know what each field is for.
>
> **[1:40](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=100)** So instead of a simple text, I'm going to call this Address.
>
> **[1:45](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=105)** Finish and create another field.
>
> **[1:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=109)** Let's create a field for the phone number.
>
> **[1:51](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=111)** I'll need to use a text field.
>
> **[1:53](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=113)** You might say that a text field is not the right one for a number, but as you can see, there is no number field option.
>
> **[2:01](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=121)** Let's change the label to Phone Number, and let me show you something.
>
> **[2:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=128)** Inside the text field settings, you can choose which HTML input type it will use.
>
> **[2:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=133)** Look at all these options.
>
> **[2:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=135)** This is where I could select number, but actually, I'm going to use tel.
>
> **[2:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=141)** This is so that mobile browsers allow users to click on the number and open a custom keyboard.
>
> **[2:26](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=146)** And if a browser doesn't support this functionality, tel will fall back to standard text input.
>
> **[2:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=153)** Let's finish and create the last link for URL.
>
> **[2:37](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=157)** I'll click on Create Field, and there is a field for a link, so let's use this one.
>
> **[2:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=164)** I'm going to change the label from Link to URL.
>
> **[2:50](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=170)** Finish and save the blueprint.
>
> **[2:55](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=175)** Now, let's go back to the Globals section in the sidebar and click on the company.
>
> **[3:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=180)** And here are all the fields we've just created.
>
> **[3:04](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=184)** Let's just add some random values for the address, the phone number, and the URL.
>
> **[3:09](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=189)** Let's save this now.
>
> **[3:11](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=191)** Okay, so how do we render these values in the template?
>
> **[3:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=194)** We need to do the following.
>
> **[3:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=196)** Let's first check out the YAML file that has been created for the company global set.
>
> **[3:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=201)** I'll go to content, globals, and company.yaml.
>
> **[3:29](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=209)** As you can see, the title is Company and the key value placed inside the data key are address, phone_number, and url.
>
> **[3:37](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=217)** Now, let's say we want to display these values inside the footer of the website.
>
> **[3:41](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=221)** Open the footer.antlers.html partial, and just above the settings globals, let's create company set.
>
> **[3:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=229)** Remember, if you ever forget a variable names, you can either check them in the blueprint or inside the YAML file.
>
> **[3:56](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=236)** You can take an inspiration from the settings set as to how to render the content of the company set.
>
> **[4:01](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=241)** You can use the title of the set, in this case, company, then add colon, and then the variable name.
>
> **[4:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=248)** So company:address.
>
> **[4:11](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=251)** Don't forget to wrap it inside double curly braces.
>
> **[4:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=255)** And that's all it takes to render the contents.
>
> **[4:17](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=257)** Let's save the file and check the website in the browser.
>
> **[4:22](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=262)** I'm going to click on this View Site button in the top-right corner.
>
> **[4:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=267)** I'm going to scroll all the way down because we added the information to the footer of the website.
>
> **[4:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=271)** And look at this. Here is the address.
>
> **[4:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=275)** We can render the phone number and the URL too.
>
> **[4:38](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=278)** You can also wrap them inside a div and style them whichever way you like.
>
> **[4:42](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=282)** I'm not going to do that, but you have a go.
>
> **[4:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=284)** Try it out. See what you can do.
>
> **[4:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=289)** Global variables are a really useful concept, easily configured and rendered.
>
> **[4:53](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/globals-in-statamic?u=76281980&t=293)** Now that you know how to create them, think of any other content that might be a global variable for your own project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), for. (1), case, (1), this. (1)
> **UI Navigation:** click on (6), open the (2), in the sidebar (1), go to (1)
> **Env Vars:** url (5), yaml (2), html (1)
> **Exercise Files:** template (3)
> **File Paths:** company.yaml (1), footer.antlers.html (1)
> **Best Practices:** it's best to (1), don't forget (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** phone_number (1)

#### Navigation in Statamic
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=0)** - [Instructor] As is the case with anything Statamic, there are multiple ways to create a navigation.
>
> **[0:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=5)** Websites can have multiple navigations.
>
> **[0:07](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=7)** There is often the main nav we see at the top of the page, a footer navigation at the bottom of the page, and sometimes a sidebar navigation.
>
> **[0:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=15)** Statamic allows you to create as many of them as you need.
>
> **[0:19](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=19)** So building navigation, you would typically start with a nav partial, which you would include inside your layout's antlers view.
>
> **[0:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=27)** Because we are using a starter theme, I expect this partial to already exist.
>
> **[0:32](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=32)** But if you are starting from scratch, you would need to create it.
>
> **[0:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=35)** Let's have a look.
>
> **[0:37](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=37)** I'll go to resources, views, and here it is.
>
> **[0:42](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=42)** Let's have a look at what this file contains.
>
> **[0:46](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=46)** This is mostly hard-coded navigation.
>
> **[0:48](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=48)** It's using the HTML nav element, and it's using the settings:site_name variable to display the name of the site as the link to the homepage.
>
> **[0:58](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=58)** It also has a search button and a form with functionality to search through the site.
>
> **[1:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=65)** Statamic has a nav tag to create a navigation out of existing structures.
>
> **[1:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=70)** You may notice that in this file we are not using this tag.
>
> **[1:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=74)** What would happen if we did?
>
> **[1:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=76)** Let's comment out the content of this file.
>
> **[1:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=81)** And I'm going to write this instead.
>
> **[1:23](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=83)** I'm going to open a nav tag.
>
> **[1:26](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=86)** Inside I'll add a HTML link element, and inside this element I'll add the anchor element.
>
> **[1:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=93)** The URL will be a url tag, and the title of the link will be the title tag.
>
> **[1:42](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=102)** I'm going to close the nav tag now right at the bottom.
>
> **[1:48](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=108)** As you can see, the Statamic tags are closed the same way as novel HTML tags with the forward slash.
>
> **[1:57](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=117)** What we did there was to use the Statamic tag to loop over all existing pages because the nav tag will by default fall back to the pages collection, if there is one, unless you use the second part of the tag where you would define which collection you want to make the navigation from, for example, nav:collection:blog.
>
> **[2:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=138)** This would make a navigation out of blog posts.
>
> **[2:22](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=142)** Then we decided that each nav link should be a li HTML element, wrapping an anchor element to make the link clickable.
>
> **[2:30](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=150)** Because this is dynamic, we don't need an li for every link.
>
> **[2:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=154)** We just need one, and Statamic will loop over all of our navigation items.
>
> **[2:39](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=159)** The href will be the url variable which will fetch the URL of the link, and the title of the link will come from the title variable.
>
> **[2:48](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=168)** Let's check out the browser.
>
> **[2:51](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=171)** I'm going to view the site, and here is the navigation.
>
> **[2:55](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=175)** It's not pretty, but it works.
>
> **[3:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=180)** Let's revert this file to what it was by commenting out our code and uncommenting the code that was originally there.
>
> **[3:09](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=189)** I'll create another partial called _nav-footer.antlers.html to create a footer navigation.
>
> **[3:20](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=200)** In here, let's just add the word hello.
>
> **[3:23](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=203)** Let's include this partial inside our footer partial, right at the top of the file.
>
> **[3:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=214)** This is how we include partials.
>
> **[3:36](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=216)** First, we use the double curly braces, then we use the word partial, colon, and then the name of the partial.
>
> **[3:43](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=223)** Remember we don't have to include the underscore that's at the beginning of the file.
>
> **[3:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=229)** Let's save the file, and let's check it in the browser.
>
> **[3:53](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=233)** I'm going to refresh, scroll all the way down, and here is our hello.
>
> **[4:01](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=241)** The partial is working.
>
> **[4:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=243)** So how do we create a navigation?
>
> **[4:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=246)** Early, I showed you how to create a navigation out of existing page structure.
>
> **[4:11](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=251)** This time, let's create a navigation using the Navigation section of the Dashboard.
>
> **[4:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=256)** In the Dashboard panel, here on the left, you can see a Navigation section.
>
> **[4:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=261)** Right now, there is no navigation here, so let's create one.
>
> **[4:26](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=266)** I'll call it footer and, once again, take a note of this handle: footer.
>
> **[4:32](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=272)** Click Create Navigation.
>
> **[4:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=275)** Let's click on Configure Navigation, which will let you choose which collection to link to.
>
> **[4:41](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=281)** We have a choice between Blog and Pages, and I'm going to choose Pages.
>
> **[4:47](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=287)** I could have chosen both. You don't have to pick just one.
>
> **[4:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=289)** You can have as many collections as you want.
>
> **[4:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=292)** Let's save and go back.
>
> **[4:59](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=299)** Next, let's click on Link to Entry.
>
> **[5:02](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=302)** This is where you get to choose which pages you want to include in your navigation.
>
> **[5:07](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=307)** As you can see, because we chose the Pages collection during the configuration, you will get the selection of existing pages here.
>
> **[5:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=314)** If we choose Blog instead, you would have all available blog posts here.
>
> **[5:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=318)** And if we had chosen both collections, we would have everything listed here.
>
> **[5:23](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=323)** Before we select Pages, let's quickly create some new ones.
>
> **[5:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=327)** In the Collections, Pages, I'm going to create an About page and a Contact page.
>
> **[5:40](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=340)** Okay, now let's go back to Navigation.
>
> **[5:43](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=343)** Let's click on Footer. Click on Link to Entry.
>
> **[5:48](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=348)** And now we've got many more pages to choose from.
>
> **[5:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=352)** I want to include the Contact page and the About page in my footer navigation.
>
> **[5:56](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=356)** So I'm going to tick them and click Select.
>
> **[6:02](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=362)** Don't forget to save the changes.
>
> **[6:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=365)** Now, how do we references navigation in our navigation partial?
>
> **[6:09](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=369)** In our nav-footer partial, let's use Statamic's nav tag to fetch the content of the navigation.
>
> **[6:17](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=377)** We need to specify which navigation we want to use, so we need to add the second part of the tag: footer.
>
> **[6:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=384)** Remember if you ever forget what your handles or variables are, you can either go back to the Dashboard or check the yml file.
>
> **[6:32](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=392)** In the content navigation directory, you can see that our footer navigation has its own yml file with its configuration.
>
> **[6:40](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=400)** But unless you overwrite the default handle created by Statamic, it will be the same as the title of the navigation.
>
> **[6:47](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=407)** Okay, back in our footer navigation partial, now we need to display the links.
>
> **[6:53](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=413)** Let's copy the code we wrote earlier.
>
> **[6:56](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=416)** I'm going to go to nav.antlers.html, scroll all the way down and copy this.
>
> **[7:04](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=424)** Paste it into our footer partial file, uncomment it.
>
> **[7:11](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=431)** I don't need these nav tags, so I'm going to delete them and just leave the li tags.
>
> **[7:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=436)** And now I'm going to close the navigation.
>
> **[7:20](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=440)** Fantastic.
>
> **[7:22](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=442)** Let's save the file and check out our navigation in the browser.
>
> **[7:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=447)** I'm going to refresh the browser, and here's our navigation.
>
> **[7:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=451)** Again, it's not very pretty, but it works.
>
> **[7:37](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=457)** Well done.
>
> **[7:39](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=459)** Let me show you one more thing.
>
> **[7:41](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=461)** Notice the order of the navigation items.
>
> **[7:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=464)** The About page is first and then Contact.
>
> **[7:47](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=467)** Let's go back to the control panel and drag these items to change their order.
>
> **[7:55](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=475)** Save the changes, and back in our browser, let's refresh.
>
> **[8:02](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=482)** As you can see, the order of the navigation items have changed.
>
> **[8:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=486)** This is what makes using Statamic navigation so amazing.
>
> **[8:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=490)** You can easily link as many pages or URLs as you want.
>
> **[8:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=493)** You can reorder them.
>
> **[8:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=495)** And any change you do will be reflected on the frontend of the website.
>
> **[8:20](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=500)** There is a lot more we could do with navigations, but this should be enough to get you started.
>
> **[8:25](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/navigation-in-statamic?u=76281980&t=505)** Refer to the Statamic documentation to learn even more.

> [!info]- Semantic Content
>
> **Code Keywords:** let (24), from, (1), from. (1), this. (1), delete (1)
> **Env Vars:** html (4), url (2)
> **UI Navigation:** click on (4), go to (2)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (3)
> **File Paths:** _nav-footer.antlers.html (1), nav.antlers.html (1)
> **Code Identifiers:** site_name (1)
> **Definitions:** is a  (1)

#### Challenge: Creating a blueprint, a fieldset, and a navigation
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=0)** - [Narrator] Welcome to this challenge.
>
> **[0:07](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=7)** In the last video, I asked you to install a new statomic website and use the beautiful documentation star tickets.
>
> **[0:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=13)** In this challenge, I'm going to ask you to create a brand new field set called image block, and include an asset field for image and the text field for the old text, include this field set in the page blueprint.
>
> **[0:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=27)** Next, I want you to edit the about page from last time and add some content, including an image and the old text to make sure that your field set is working.
>
> **[0:36](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=36)** You can also edit a default.antlers.HTML template to actually display the image, because after you do, it won't be shown on the page.
>
> **[0:45](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=45)** When you're done create a new global set with the phone number of your company.
>
> **[0:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=49)** You can call it company or details.
>
> **[0:51](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=51)** Anything you like.
>
> **[0:54](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=54)** Finally edit your about page to the main navigation and create the footsie navigation and add the links to the homepage. And the about page.
>
> **[1:02](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=62)** This chapter was full of new and maybe difficult concepts.
>
> **[1:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=65)** So don't worry. If you struggle with this challenge, you can always go back and watch the relevant section again, or just see how I solved this challenge in the next video.
>
> **[1:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=74)** Just one helpful tip.
>
> **[1:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=76)** If there is one thing that tends to be an issue, it is forgetting to save any changes done to a field set or a blueprint, just creating a field.
>
> **[1:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=84)** Doesn't actually save it. It has happened to me many times, so all of us remember to save. Good luck!

> [!info]- Semantic Content
>
> **Cross-References:** in the last (1), in the next (1)
> **File Paths:** default.antlers.html (1)
> **CLI Commands:** make (1)
> **Code Keywords:** default. (1)
> **Env Vars:** html (1)
> **Exercise Files:** template (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** install (1)

#### Solution: Creating a blueprint, a fieldset, and a navigation
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=0)** - [Instructor] How did you do?
>
> **[0:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=6)** This is how I completed the challenge.
>
> **[0:09](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=9)** I am in my website project.
>
> **[0:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=12)** In the Control Panel, I'll go to Fieldsets.
>
> **[0:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=16)** Now, I'm going to click on Create Fieldset and call my fieldset Image Block.
>
> **[0:22](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=22)** I'll click Create Fieldset now.
>
> **[0:25](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=25)** Now, I'm going to click on Create Field and choose the Assets field for the image.
>
> **[0:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=31)** I'll rename the Assets label to Article Image and click Finish.
>
> **[0:39](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=39)** Next, I'm going to add another field, this time, a text field, and I'm going to rename it to Alt, click Finish and Save.
>
> **[0:54](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=54)** Now, I'm going to go to Blueprints, Blueprints, Pages, and click on Link Existing.
>
> **[1:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=63)** I'm going to choose the Image Block and click Link, and now Save, don't forget to save.
>
> **[1:11](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=71)** Now, I'm going to go to Collections Pages and open the About page.
>
> **[1:19](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=79)** Here is our Image Block, so I'm going to add an image, and I need to get some alt text, in this case, this is a pile of books, so I'll just say books, and click Save.
>
> **[1:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=93)** Now, even if I visit the URL now, the image won't show because I haven't actually added any markup.
>
> **[1:40](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=100)** You can do it or just skip it for now, but I'm going to add a markup just to show you how I would do it.
>
> **[1:47](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=107)** In my code, I'm going to go to the default.antlers.html file, and right here, under this content variable, I'll open the article-image tag and close it so that I don't forget.
>
> **[2:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=125)** Inside this tag, I'm going to add the image HTML element, use the url tag as the source of the image and alt tag for the alt text.
>
> **[2:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=136)** Save the file and check it out in the browser.
>
> **[2:20](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=140)** Okay, the image is still not showing up, let's find out why.
>
> **[2:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=144)** The first thing to check is that I'm using the correct handle to render the Image Block.
>
> **[2:29](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=149)** I'll open the Image Block YAML file, and now I see it.
>
> **[2:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=153)** The handle is article_image, while I used article-image, let me fix this.
>
> **[2:45](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=165)** And refresh the page, and here is our image.
>
> **[2:50](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=170)** Now, let's go to Globals in the Control Panel sidebar and click on Create Global Set.
>
> **[2:57](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=177)** I'll give it the Company title, click on the Blueprint link, and click on Create Fields.
>
> **[3:09](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=189)** I'm going to search the Text field, rename it to Phone, and from this drop-down, I'm going to choose tell, click Finish and click Save.
>
> **[3:26](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=206)** Now, I'm going back to the Company Globals and add some random phone number and save.
>
> **[3:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=215)** Okay, let's add About page to the main navigation now.
>
> **[3:38](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=218)** I'll go to Navigation Docs, add Nav Item, Link to Entry.
>
> **[3:45](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=225)** I'll set the About page and click Select.
>
> **[3:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=229)** I'll move the About page under the Other stuff section and save the changes.
>
> **[3:56](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=236)** Let's check it out in the browser.
>
> **[3:59](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=239)** I'm going to refresh the page, and here's our About page.
>
> **[4:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=243)** If you want to, you can add the company's phone number to the footer, too.
>
> **[4:07](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=247)** This Statamic, it doesn't have any partials, not even a footer partial.
>
> **[4:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=252)** You can either create one or just go to the layout page, find a div with a Powered by Statamic text and add the number right above it.
>
> **[4:25](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=265)** Save the file, and let's check it out in the browser again.
>
> **[4:30](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=270)** Refresh the page, and here is our phone number.
>
> **[4:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=275)** Okay.
>
> **[4:37](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=277)** Finally, let's create a footer navigation.
>
> **[4:40](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=280)** In the Control Panel, I'll go to Navigation and click Create Navigation.
>
> **[4:45](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=285)** The title will be Footer.
>
> **[4:50](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=290)** Let's click Configure Navigation and add the Pages collection, save it, and let's go back.
>
> **[5:01](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=301)** Now, I'm going to click on Link to Entry.
>
> **[5:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=305)** I'm going to check the About and Home pages, click Select and Save Changes.
>
> **[5:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=314)** Now, let's go back to the code.
>
> **[5:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=316)** Because this kit doesn't come with a footer partial, I need to create one.
>
> **[5:20](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=320)** I'll create the _footer.antlers.html file inside the Views directory.
>
> **[5:28](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=328)** In here, I'll add the nav footer tag, and inside this tag, I'm going to add HTML markup for a link.
>
> **[5:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=344)** Next, I'll need to include this partial in the layouts file, right here, under the end of the main section of the page.
>
> **[5:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=352)** I'm going to open the footer HTML tag, and inside it, I'm going include the Statamic footer partial.
>
> **[6:02](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=362)** Let's save the file and check it out in the browser.
>
> **[6:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=365)** Refresh the page, and here is our navigation.
>
> **[6:11](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=371)** It's looking terrible, so go ahead and style it if you feel like it.
>
> **[6:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=375)** I'll leave it as it is now.
>
> **[6:17](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=377)** This is how I would have completed the challenge.
>
> **[6:20](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-creating-a-blueprint-a-fieldset-and-a-navigation?u=76281980&t=380)** This one wasn't easy, so well done for completing it.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (7), click on (7), open the (4)
> **Code Keywords:** let (11), case, (1), default. (1), this. (1), finally, (1)
> **Env Vars:** html (3), url (1), yaml (1)
> **File Paths:** default.antlers.html (1), _footer.antlers.html (1)
> **CLI Commands:** find (2)
> **Best Practices:** don't forget (2)
> **Code Identifiers:** article_image (1)
> **Cross-References:** go back to (1)


### 4. Deploying Statamic on Netlify

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Statamic as an SSG
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=0)** - Since statamic is built as a Laravel package, deploying a statamic project is very similar to deploying a Laravel one.
>
> **[0:07](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=7)** You will need a hosting provider such as digital ocean, Lenode or another one, you know, and love.
>
> **[0:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=14)** You might also choose to use a server management service, to help you provision and deploy your server such as Laravel forge.
>
> **[0:22](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=22)** All of this is great, but it also costs money, but there is another option.
>
> **[0:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=27)** You can deploy your statamic project as a static site and use a free service such as netlify, GitHub pages or Vercel.
>
> **[0:45](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=45)** static sites are simple HTML documents that are stored on a server and returned back to the user as they are.
>
> **[0:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=52)** However, what if you wants to use partials, at some place in language or use variables throughout the site, to avoid repeating ourselves?
>
> **[1:01](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=61)** We can't do it in static pages.
>
> **[1:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=63)** As I said, each page is going to be sent to the browser as is there will be no dynamic rendering.
>
> **[1:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=70)** This means we are missing out on many modern features of web development, which is not great, especially, when it comes to larger and more complex sites where we need old help we can get.
>
> **[1:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=81)** While a default statamic project, isn't a statically regenerated site.
>
> **[1:25](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=85)** Just remember the extensive use of partials variables.
>
> **[1:29](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=89)** We can turn it into one.
>
> **[1:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=91)** We can ask statamic to generate a static version of the site, which can then be served by service, such as Netlify, as I'm going to show in a future video.
>
> **[1:41](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=101)** The statamic S S G addon is already pre-installed.
>
> **[1:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=104)** As you can see here in the addons section of the control panel.
>
> **[1:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=109)** However, if that wasn't the case for you, you can always require it by running: composer-require-statamic, forward-slash-SSG.
>
> **[1:59](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=119)** To turn our project into a static site.
>
> **[2:01](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=121)** All we need to do is run PHP-please-S S G, colon-generate in our terminal.
>
> **[2:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=128)** Make sure you are in the statamic extend on project director before you do that.
>
> **[2:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=134)** Statamic will generated a static version of our site and save it in storage-app-static.
>
> **[2:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=141)** As you can see, we've got all our directories and all our files here.
>
> **[2:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=147)** Not every website can and should be statically generated, but many of them could.
>
> **[2:32](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/statamic-as-an-ssg?u=76281980&t=152)** Now that you have an idea about, what statistical generated sites are and what are the benefits you can decide, what is the best approach for your projects.

> [!info]- Semantic Content
>
> **Code Keywords:** static (7), require (2)
> **Analogies:** such as (4), similar to (1)
> **CLI Commands:** composer (1), php (1), make (1)
> **Env Vars:** html (1), ssg (1), php (1)
> **Tools:** github (1), terminal (1)
> **Speakers:** - since (1)

#### Introduction to Netlify
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=0)** - As mentioned in a previous video, Netlify is one of the services that allows us to deploy a statically generated site for free.
>
> **[0:07](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=7)** It is a really useful service, and a great one to have in your technical knowledge toolbox.
>
> **[0:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=12)** Netlify is a cloud computing company that offers hosting and serverless back-end services.
>
> **[0:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=18)** It offers a very streamlined way to host and deploy your projects.
>
> **[0:22](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=22)** And once it's up, you can pretty much forget about it.
>
> **[0:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=27)** To explore Netlify, let's create a new account first.
>
> **[0:30](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=30)** Click on the sign up link in the top right corner.
>
> **[0:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=34)** You can set up in the following options, GitHub, GitLab, Bitbucket, or Email.
>
> **[0:39](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=39)** For the purposes of this course, we will sign up using GitHub.
>
> **[0:43](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=43)** You will need to sign into a GitHub account first, or create one if you don't have one yet.
>
> **[0:48](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=48)** Once you click on the signup link, you will need to authorize Netlify to access your GitHub account.
>
> **[0:54](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=54)** I have already done it, but you should just click authorize and that's it.
>
> **[0:58](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=58)** Once done, you can log into Netlify using your GitHub credentials.
>
> **[1:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=63)** If this is your first time on Netlify, Netlify will ask you a series of questions to personalize your account.
>
> **[1:09](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=69)** Such as your name, your team, what you will use Netlify for, and so on.
>
> **[1:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=75)** Choose whatever is appropriate for you, and click set up, and continue.
>
> **[1:19](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=79)** You will also be welcomed by a Quickstart guide modal, which you can either go through, or close.
>
> **[1:25](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=85)** This is the Netlify dashboard.
>
> **[1:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=87)** You have a quick overview of all your sites you're hosting on Netlify.
>
> **[1:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=91)** But since this is a brand new account, there are no sites at the moment.
>
> **[1:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=95)** You can click through the navigation to learn more about Netlify, but you don't need to change anything anywhere.
>
> **[1:40](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=100)** Your account is already set up to start hosting static sites.
>
> **[1:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=104)** It might be interesting to explore what plugins Netlify offers to add an extra functionality to your site.
>
> **[1:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=109)** But this is beyond the scope of the scores.
>
> **[1:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=112)** And that's it for now.
>
> **[1:53](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=113)** You have your Netlify account ready.
>
> **[1:55](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/introduction-to-netlify?u=76281980&t=115)** And in the next video, we will walk through linking a new site from Git, and deploying it.

> [!info]- Semantic Content
>
> **Tools:** github (5), gitlab (1), bitbucket (1)
> **Code Keywords:** let (1), for, (1), continue (1), static (1)
> **Definitions:** is a  (3)
> **Prerequisites:** set up (3)
> **Cross-References:** previous video (1), in the next (1)
> **UI Navigation:** click on (2)
> **CLI Commands:** git (1)
> **Analogies:** such as (1)

#### Uploading a Statamic website to GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=0)** - Now that we have Netlify accounts set up.
>
> **[0:02](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=2)** We are ready to upload a project to GitHub.
>
> **[0:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=5)** There are many fantastic tutorials in the LinkedIn learning library.
>
> **[0:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=8)** So I won't spend too much time explaining what Git and GitHub are and how to use them.
>
> **[0:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=13)** Feel free to visit any of these tutorials.
>
> **[0:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=15)** If you need to learn more or just to refresh your knowledge, to get started, we need to initialize "get" inside our projects, routes directory. You will need to run, "get" in it in the terminal.
>
> **[0:25](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=25)** Just make sure you are inside.
>
> **[0:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=27)** I start some external project, as you can see, he has provided some useful hints.
>
> **[0:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=34)** Feel free to read through them.
>
> **[0:36](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=36)** Next step is to add all of our files to be tracked by gate run, "get add" in the terminal.
>
> **[0:45](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=45)** You can run, get status to see that, get this added all of our project files to be tracked.
>
> **[0:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=49)** And yes, it has fantastic.
>
> **[0:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=52)** Next.
>
> **[0:53](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=53)** We need to commit these files and give them some descriptive comment message in the real world scenario, you would have initialized get right at the beginning of your project and you would probably commit your work throughout.
>
> **[1:04](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=64)** In our case, we will commit everything at once and give it a comic message ready to deploy by running, get commit dash M ready to deploy.
>
> **[1:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=75)** Okay.
>
> **[1:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=76)** But before we can commit all of our files to GitHub, we need to go and create a new repository.
>
> **[1:23](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=83)** Let's go to [github.com](https://github.com) login, click on this plus sign in the top right corner and choose new repository.
>
> **[1:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=91)** Let's give it a name Stetsemic standalone, and we can make it public or private.
>
> **[1:37](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=97)** It doesn't really matter. In this case, let's not initialize the repository with read me or get ignore, because we already have DS in our project files.
>
> **[1:46](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=106)** Let's just click create repository.
>
> **[1:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=109)** Next. We will need to an origin to our local repository, so that get knows where to push our code to because we already have the repository locally.
>
> **[1:57](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=117)** We will follow these steps.
>
> **[2:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=120)** Let's go put this line and paste it into terminal. You may also want to change the name of your main branch from Master to main or anything else.
>
> **[2:11](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=131)** You prefer to do that in our terminal, we will type it.
>
> **[2:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=135)** Get Branch dash M capital M main.
>
> **[2:20](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=140)** As you can see, this is what GitHub suggest as well.
>
> **[2:25](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=145)** And finally, we can run, get push dash u, origin main.
>
> **[2:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=151)** The "u" flag just sets the upstream of the current local branch and it only needs to be done once after this, every time you want to push changes via get you just say, get push origin main.
>
> **[2:43](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=163)** Fantastic.
>
> **[2:45](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=165)** Now let's check out online repository.
>
> **[2:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/uploading-a-statamic-website-to-github?u=76281980&t=169)** If I refresh the page, I can see that the code is there. This means that we have everything ready to deploy a project to Netlify.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (2), public (1), private (1), else. (1)
> **Tools:** github (5), terminal (4)
> **CLI Commands:** make (2), git (1)
> **UI Navigation:** go to (1), click on (1)
> **URLs:** [github.com](https://github.com) (1)
> **Definitions:** means that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - now (1)

#### Deploying a Statamic website to Netlify
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=0)** - [Instructor] We have done all this work to prepare our project to be deployed as a static site to Netlify.
>
> **[0:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=5)** The files on GitHub our Netlify account is ready.
>
> **[0:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=8)** So let's do it.
>
> **[0:09](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=9)** From our Netlify dashboard, click on "new site from Git."
>
> **[0:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=13)** Next we need to choose a Git provider which is GitHub, and select the correct repository.
>
> **[0:21](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=21)** The branch is main, the build command will be "php please ssg generate," and the published directory will be "storage app static."
>
> **[0:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=34)** Okay, now let's click on "show advanced."
>
> **[0:37](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=37)** We need to add two variables.
>
> **[0:39](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=39)** The first variable will be the "PHP_VERSION," and that is 7.4.
>
> **[0:47](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=47)** And the second variable will be the "APP_KEY."
>
> **[0:52](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=52)** And this file you can find in your .ENV file, right here.
>
> **[0:57](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=57)** I'm going to copy the whole thing and paste it here.
>
> **[1:04](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=64)** That's all we need to do.
>
> **[1:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=66)** We just need to deploy the site now.
>
> **[1:09](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=69)** As you can see in the site overview section, the deploy is starting up.
>
> **[1:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=73)** You can click on this link to see the details.
>
> **[1:18](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=78)** The process doesn't take long at all.
>
> **[1:20](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=80)** Especially since our website is very small.
>
> **[1:22](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=82)** Once it's finished, Netlify will display the published flag and it will give us some provisional URL.
>
> **[1:30](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=90)** Here is the published flag, and I'm going to click on this URL.
>
> **[1:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=94)** And here's our website, publicly accessible to everyone.
>
> **[1:38](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=98)** The Netlify's domain is not great though, but you can easily set up a custom domain.
>
> **[1:43](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=103)** All you need to do is to buy a domain and go to "site overview" tab.
>
> **[1:47](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=107)** Click on the domain settings and click on "add custom domain."
>
> **[1:54](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=114)** Add your new domain in this input field and click verify.
>
> **[1:58](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=118)** Netlify will take you through some steps and it will automatically configure DNS settings for you and tell you if there's anything else you need to do.
>
> **[2:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=125)** The documentation is really quite good.
>
> **[2:07](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=127)** Now that you have an app URL, which will be different for everyone because it's randomly generated by Netlify, you can add it to a project's .ENV file.
>
> **[2:17](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=137)** I'm going to copy the link, go back to my files, and add it right here.
>
> **[2:25](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=145)** We have just covered how to set up a build process in the Netlify user interface.
>
> **[2:30](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=150)** However, there's another way to do it.
>
> **[2:31](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=151)** A way some of you may find easier.
>
> **[2:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=154)** Instead of filling out a build command, published directory, and the advanced settings on Netlify, we can just create a Netlify .terminal file inside our project route directory and add a few commands there.
>
> **[2:46](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=166)** This is what we need to add there.
>
> **[2:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=169)** First, we need to tell Netlify which directory to publish, which is the storage app static, and which commands to run, which is "php please ssg generate."
>
> **[3:01](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=181)** And finally we give it the PHP version.
>
> **[3:04](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=184)** Once we create this file, all you need to do on Netlify is link to the GitHub repository, make sure that the correct branch is selected and click deploy.
>
> **[3:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=193)** No need to fill out anything.
>
> **[3:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=195)** Netlify will find this file and use it to deploy our project.
>
> **[3:19](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=199)** There is a lot more you can set up on Netlify to make your project just the way you want it.
>
> **[3:26](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=206)** I'm not going to go into any more details, but what you know now is enough to get you started.
>
> **[3:33](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=213)** Next time you want to add content to your website, run the local version, add your new content via the control panel or in code, commit and push the changes to GitHub.
>
> **[3:43](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=223)** Netlify will trigger the deployment automatically.
>
> **[3:45](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/deploying-a-statamic-website-to-netlify?u=76281980&t=225)** You don't have to do anything at all, and your content will be online in no time.

> [!info]- Semantic Content
>
> **CLI Commands:** php (3), find (3), git (2), make (2)
> **Env Vars:** url (3), env (2), php_version (1), app_key (1), dns (1)
> **UI Navigation:** click on (6), select the (1), go to (1)
> **Code Keywords:** static (3), let (2), interface (1)
> **Tools:** github (4), terminal (1)
> **Prerequisites:** set up (3), configure (1)
> **Versions:** 7.4 (1)
> **Cross-References:** go back to (1)

#### Challenge: Deploying a Statamic project to Netlify
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-deploying-a-statamic-project-to-netlify?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-deploying-a-statamic-project-to-netlify?u=76281980&t=0)** - [Instructor] Welcome to the last challenge of this course.
>
> **[0:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-deploying-a-statamic-project-to-netlify?u=76281980&t=8)** In this challenge, you will get to just your knowledge of how to deploy a Statamic site to Netlify.
>
> **[0:14](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-deploying-a-statamic-project-to-netlify?u=76281980&t=14)** Take the project from the last challenge, my website, initialize it with Git, upload the project first to bring your repository on GitHub, and deploy it to Netlify.
>
> **[0:25](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-deploying-a-statamic-project-to-netlify?u=76281980&t=25)** It is up to you if you choose to add the build details via Netlify's UI, or via the netlify.toml file.
>
> **[0:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-deploying-a-statamic-project-to-netlify?u=76281980&t=34)** Once you configure the site in the browser, go back to your local version and add some content.
>
> **[0:39](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-deploying-a-statamic-project-to-netlify?u=76281980&t=39)** You can create a new page or change some content in an existing page.
>
> **[0:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-deploying-a-statamic-project-to-netlify?u=76281980&t=44)** Upload the changes to GitHub, and see if Netlify deploys them automatically.
>
> **[0:49](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-deploying-a-statamic-project-to-netlify?u=76281980&t=49)** If yes, fantastic.
>
> **[0:51](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-deploying-a-statamic-project-to-netlify?u=76281980&t=51)** You have successfully learned how to create a Statamic site, add content, push the project files to GitHub, and set up Netlify to deploy your websites.
>
> **[1:01](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-deploying-a-statamic-project-to-netlify?u=76281980&t=61)** And if you find this difficult, don't worry.
>
> **[1:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-deploying-a-statamic-project-to-netlify?u=76281980&t=63)** We have covered a lot.
>
> **[1:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-deploying-a-statamic-project-to-netlify?u=76281980&t=65)** Go back to the relevant chapter and watch the video again, or check out my solution to this challenge in the next video.
>
> **[1:11](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/challenge-deploying-a-statamic-project-to-netlify?u=76281980&t=71)** Good luck.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** github (3)
> **CLI Commands:** git (1), find (1)
> **Prerequisites:** configure (1), set up (1)
> **File Paths:** netlify.toml (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Deploying a Statamic project to Netlify
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=0)** (techno music)
>
> **[0:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=5)** - How did it go?
>
> **[0:06](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=6)** Did you manage to deploy your website?
>
> **[0:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=8)** This is how I did it.
>
> **[0:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=10)** In the terminal I make sure I am in the "my-website directory".
>
> **[0:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=16)** First I will create the "netlify.toml" file by running "touch netlify.tomol" command in the terminal.
>
> **[0:23](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=23)** I opened the project in PHP storm and paste the build commands from my previous project into this one.
>
> **[0:29](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=29)** These commands never changed so copy pasting them is the easy way.
>
> **[0:35](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=35)** Now I'm going to run "git init" to initialize "git" and then run "git add ." to add all the files.
>
> **[0:43](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=43)** Next I'm going to run "git commit -m" "ready to deploy" to commit everything.
>
> **[0:53](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=53)** Now I need to go to my GitHub Account and create a new repository.
>
> **[0:57](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=57)** I'll call it "my-website" and I'll set it to private this time.
>
> **[1:04](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=64)** I'm going to finish setting up the GitHub credentials.
>
> **[1:15](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=75)** Now that the code has been pushed to GitHub, I'm going to go to my Netlify dashboard and click on "new site from gits".
>
> **[1:23](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=83)** Also in the "my website repo", and because I created the Netlify the tumble file, I don't need to add anything in the Netlify UI.
>
> **[1:32](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=92)** I just need to click "Deploy site".
>
> **[1:36](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=96)** The site deploy is in progress, and if I want to I can check out the details.
>
> **[1:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=104)** Wait a minute or so, and my website is live.
>
> **[1:51](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=111)** Let's see in a browser, and yep it's all here.
>
> **[1:57](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=117)** Let's add new content to my project.
>
> **[2:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=120)** Before I do that though, I'll add the app URL value to my .ENV file.
>
> **[2:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=125)** This is the URL Netlify has given me.
>
> **[2:08](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=128)** Now I'm going to open the control panel in the browser.
>
> **[2:13](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=133)** Remember, this is my local version of the website, not the live one.
>
> **[2:19](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=139)** In here I'm going to go to "Collections", "Pages" and select the "Home" page this time.
>
> **[2:28](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=148)** In the description field, I'll add "Hello there" and save the page.
>
> **[2:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=154)** Let's make sure the new text is there by visiting the page in the browser.
>
> **[2:39](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=159)** And here it is.
>
> **[2:42](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=162)** Now let's deploy this update to the live version of the site too.
>
> **[2:47](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=167)** In the terminal I'm going to run "git add .", "git commit -m", "Update home page" and "git push origin main".
>
> **[3:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=180)** You see everything is working.
>
> **[3:02](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=182)** I'm going to check Netlify's dashboard again.
>
> **[3:05](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=185)** And as you can see our update is building.
>
> **[3:10](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=190)** It's finished.
>
> **[3:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=192)** I'm going to check the live version in the browser again.
>
> **[3:16](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=196)** Here is our new text.
>
> **[3:19](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=199)** Well done for completing this challenge.
>
> **[3:22](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=202)** You have learned so much in this course.
>
> **[3:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=204)** Feel proud of yourself.
>
> **[3:25](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=205)** I certainly feel proud of you.
>
> **[3:27](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/solution-deploying-a-statamic-project-to-netlify?u=76281980&t=207)** Amazing job.

> [!info]- Semantic Content
>
> **CLI Commands:** git (7), make (2), php (1)
> **Tools:** terminal (3), github (3)
> **UI Navigation:** go to (3), click on (1), open the (1), select the (1)
> **Code Keywords:** let (4), private (1)
> **Env Vars:** url (2), php (1), env (1)
> **File Paths:** netlify.toml (1)
> **Speakers:** - how (1)
> **Non-Speech:** (techno music) (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Where to go from here
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/where-to-go-from-here?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=0)** - [Zuzana] This brings us to the end of this course.
>
> **[0:03](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=3)** By completing this course, you now have a foundational understanding about how to use Statamic and how to create just the right website for your project.
>
> **[0:12](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=12)** This course is a great starting point to go even deeper into the Statamic documentation and knowledge base and learn more about the concepts and functionality we have covered and the ones that we didn't.
>
> **[0:24](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=24)** Make sure to stay up to date with any new Statamic releases and features as Statamic is being actively developed and improved.
>
> **[0:32](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=32)** And that's all from me.
>
> **[0:34](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=34)** You can connect with me on Twitter or you can follow Larabelles, the community for women, non-binary, and trans Laravel developers either on Twitter or on LinkedIn.
>
> **[0:44](https://www.linkedin.com/learning/essential-statamic-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=44)** Thank you for watching and have fun building websites with Statamic.

> [!info]- Semantic Content
>
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