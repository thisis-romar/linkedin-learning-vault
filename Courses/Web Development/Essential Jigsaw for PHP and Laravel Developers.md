---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: essential-jigsaw-for-php-and-laravel-developers
url: "https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers"
duration_minutes: 53
duration: 53m
level: Intermediate
updated: 12/17/2021
learners: 10281
skills:
  - Jigsaw
  - Laravel
  - PHP
exercise_files: true
github: "https://github.com/LinkedInLearning/essential-jigsaw-laravel-3155793"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHlII2lNyUsRg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1639597396787?e=2147483647&amp;v=beta&amp;t=Xkas1rylTvTv_xrRLs9pzK6TlirBpW8Pb5FkJubwR0o"
linkedin_topic: Web Development
learning_paths:
  - '[Build Your Laravel Skills](../../Paths/Web%20Development/Learning%20Paths/Build%20Your%20Laravel%20Skills.md)'
prev_courses:
  - '[Building GraphQL Applications in Laravel](Building%20GraphQL%20Applications%20in%20Laravel.md)'
next_courses:
  - '[Essential Statamic for PHP and Laravel Developers](Essential%20Statamic%20for%20PHP%20and%20Laravel%20Developers.md)'
path_nav: '[{"path":"Build Your Laravel Skills","position":5,"total":7,"prev":"Building GraphQL Applications in Laravel","next":"Essential Statamic for PHP and Laravel Developers"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/jigsaw
  - skill/laravel
  - skill/php
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Essential%20Jigsaw%20for%20PHP%20and%20Laravel%20Developers.md)

![Essential Jigsaw for PHP and Laravel Developers](https://media.licdn.com/dms/image/v2/C560DAQHlII2lNyUsRg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1639597396787?e=2147483647&amp;v=beta&amp;t=Xkas1rylTvTv_xrRLs9pzK6TlirBpW8Pb5FkJubwR0o)

# Essential Jigsaw for PHP and Laravel Developers

> You may know that Jigsaw is a framework used to rapidly build static sites, but did you know that it’s also a great solution for PHP and Laravel developers? That’s because Jigsaw uses the Blade templating engine, which is the same engine used in Laravel. Join Zuzana Kunckova for an overview of Jigsaw that’s uniquely designed for developers and DevOps engineers who work with PHP and Laravel.Discove

> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers) | 53m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Introduction to Jigsaw](#introduction-to-jigsaw)
- [**1. Getting Started with Jigsaw**](#1-getting-started-with-jigsaw) (5 videos)
  - [What is Jigsaw?](#what-is-jigsaw)
  - [What is a static site generator (SSG)?](#what-is-a-static-site-generator-ssg)
  - [Installing Jigsaw](#installing-jigsaw)
  - [Challenge: Creating a new Jigsaw website](#challenge-creating-a-new-jigsaw-website)
  - [Solution: Creating a new Jigsaw website](#solution-creating-a-new-jigsaw-website)
- [**2. Jigsaw Internals**](#2-jigsaw-internals) (7 videos)
  - [File structure](#file-structure)
  - [Source directory](#source-directory)
  - [Adding content to a Jigsaw website](#adding-content-to-a-jigsaw-website)
  - [Collections in Jigsaw](#collections-in-jigsaw)
  - [Event listeners in Jigsaw](#event-listeners-in-jigsaw)
  - [Challenge: Adding content and customizing Jigsaw](#challenge-adding-content-and-customizing-jigsaw)
  - [Solution: Adding content and customizing Jigsaw](#solution-adding-content-and-customizing-jigsaw)
- [**3. Deploying Jigsaw on Netlify**](#3-deploying-jigsaw-on-netlify) (5 videos)
  - [Netlify introduction](#netlify-introduction)
  - [Uploading Jigsaw website to GitHub](#uploading-jigsaw-website-to-github)
  - [Deploying Jigsaw website to Netlify](#deploying-jigsaw-website-to-netlify)
  - [Challenge: Deploying a Jigsaw project to Netlify](#challenge-deploying-a-jigsaw-project-to-netlify)
  - [Solution: Deploying a Jigsaw project to Netlify](#solution-deploying-a-jigsaw-project-to-netlify)
- [**Conclusion**](#conclusion) (1 videos)
  - [Where to go from here](#where-to-go-from-here)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Jigsaw](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/introduction-to-jigsaw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/introduction-to-jigsaw?u=76281980&t=0)** - [Lecturer] [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) is a framework, used to rapidly build static sites. It is one of the best [PHP](../../Skills/Software%20Development/PHP.md)-based static site generators. Static site generators, also known as SSGs, generate full, static, [HTML](../../Skills/Web%20Development/HTML.md) websites, based on provided data and available templates. They are well-known for their fast loading speed, easy deployment, and they're a great alternative to dynamic websites. Jigsaw's a fantastic solution for PHP and [Laravel](../../Skills/Web%20Development/Laravel.md) developers, as it uses the Blade's templating engine, which is the same engine used in Laravel. I am Zuzana Kunckova, a Laravel developer and the founder of Larabelles, the community for women, non-binary, and trans Laravel developers. I've built multiple websites using Jigsaw, and I'm excited to share my knowledge with you. By joining me in this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course, you will discover the essentials of Jigsaw, how to install it, and how to choose and install an official template. We will walk through the entire codebase together, and I will show you how to create and edit content, and deploy your website for free on Netlify. Sounds exciting? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (4), [Laravel](../../Skills/Web%20Development/Laravel.md) (4), [PHP](../../Skills/Software%20Development/PHP.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** php (2), html (1)
> **CLI Commands:** php (2)
> **Definitions:** is a  (1), known as (1)
> **Prerequisites:** install (2)
> **Exercise Files:** template (1)
> **Speakers:** - [lecturer] (1)


### 1. Getting Started with Jigsaw

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Jigsaw?](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980&t=0)** - [Instructor] [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) is a framework used to rapidly build static sites using [Laravel](../../Skills/Web%20Development/Laravel.md) Blade templating engine. It is developed and maintained by Tighten, a consultancy firm operating out of Chicago US. Jigsaw is an open source framework, with around 195,000 downloads to the date and nearly 2,000 [GitHub](../../Skills/Software%20Development/GitHub.md) stars. Jigsaw is one of the best [PHP](../../Skills/Software%20Development/PHP.md) based static site generators. And because it's built using PHP and Laravel Blade, Laravel developers will find it quite easy to get started. But let me say, you don't need to be a Laravel developer to use Jigsaw. Knowing Blade will certainly be useful, but anyone can get started using it pretty quickly. Jigsaw accounts it's two official templates, a blog template, and a Docs template. These have been developed by Tighten to make it even easier to get a fully configured site up and running quickly. But they are other third-party templates you could use too. On [buildwithjigsaw.com](https://buildwithjigsaw.com) website, you can find a showcase of website built with Jigsaw, which is a great place to get inspired. Some projects linked to their GitHub repos too, which means you can go and look through the source code to see how the website was built. A great way to learn from other developers. Jigsaw is also a great alternative too, for example, [WordPress](../../Skills/Web%20Development/WordPress.md), or Statamic, which are both PHP based frameworks used to build websites. However, Jigsaw is free to use and free to deploy as we will learn later on in the course,
>
> **[1:31](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980&t=91)** and it is a great framework to have in your toolbox.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (8), [Laravel](../../Skills/Web%20Development/Laravel.md) (4), [PHP](../../Skills/Software%20Development/PHP.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **CLI Commands:** php (3), find (2), make (1)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** php (3)
> **Exercise Files:** template (2), source code (1)
> **Tools:** github (2)
> **URLs:** [buildwithjigsaw.com](https://buildwithjigsaw.com) (1)
> **Analogies:** for example (1)

#### [What is a static site generator (SSG)?](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=0)** - Now that we know that [Jigsaw](../../Skills/Web%20Development/Jigsaw.md), is a [PHP](../../Skills/Software%20Development/PHP.md) based static site generator, you may be wondering what a static site generator is, in the first place. Static site generator, also known by the abbreviation SSG, is a tool that generates a full static [HTML](../../Skills/Web%20Development/HTML.md) website, from some raw data and a set of templates. You might remember that some years ago, we used to hard-code simple HTML pages, with no dynamic content. and save them as "home. Html" or "about. Html" these pages, were then uploaded to the server. The benefit of these simple pages, was that the delivery was really fast. Because these pages were already built and didn't require any extra rendering, before being displayed in the browser. It was also very easy to host these websites, because there was no need to use any backend language to serve them. This is in comparison to dynamic websites that will load different info based on a number of data inputs. They use his location the time of the day. And so on. one example would be [WordPress](../../Skills/Web%20Development/WordPress.md), a [Content Management](../../Skills/Web%20Development/Content%20Management.md) system that relies heavily on the use of templates and partials. And it's using PHP under the hood to render the content in the browser. But let's say we don't need dynamic content on our website, but we still don't want to go back to hard coding every single web-page, and not be able to use the benefits of modern [Web Development](../../Topics/Web%20Development.md). Such as, the use of templates, partials, or variables throughout our code. This is where static site generators come in. They are a compromise between these hard-coded websites and a dynamic CMS They have a high-performance, because
>
> **[1:35](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=95)** these webpages are generated in advance rather than being generated on demand. Each time. They also tend to be much smaller in size, because they don't need as much code to run on the server. They still allow developers to use partials and templates to speed up the development process and keep the code trying. However, one downside is that they don't tend to come with an admin panel. So to use it, ADA needs to look for a third party solution, or just add content via the [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). There are many different static site generators available. And they each serve a slightly different audience. You may choose to generate two based on the language it is using: PHP, [JavaScript](../../Skills/Software%20Development/JavaScript.md), Ruby, or many others. You may also choose a generator based on what you are building. Is your page primarily delivering content? or do you need more features on the client side? What about the size of your website? Some SSGs are handling a large number of pages better than others. And finally, what templating language Are you already familiar with? Are you used to work with Blade, Markdown, Mustache, Pug, or would you prefer to use to [react](../../Skills/Web%20Development/React.js.md) or [Vue.js](../../Skills/Web%20Development/Vue.js.md) to handle your front end? All, these are good questions to ask, when looking for a static site generator. As I mentioned in the previous video in this course, we will be learning about Jigsaw, a popular study site generator for [Laravel](../../Skills/Web%20Development/Laravel.md) developers, that uses PHP and Laravel blades. So let's get started learning Jigsaw.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (4), [HTML](../../Skills/Web%20Development/HTML.md) (4), [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (3), [Laravel](../../Skills/Web%20Development/Laravel.md) (2), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Env Vars:** php (4), html (2), ssg (1), cms (1), ada (1)
> **CLI Commands:** php (4), ruby (1)
> **Definitions:** is a  (2)
> **File Paths:** vue.js (1)
> **Cross-References:** previous video (1)
> **Analogies:** such as (1)
> **Speakers:** - now (1)

#### [Installing Jigsaw](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=0)** - [Instructor] To install [Jigsaw](../../Skills/Web%20Development/Jigsaw.md), you need to have [PHP](../../Skills/Software%20Development/PHP.md) 7.3 or above and composer installed on your machine. You will also need to have [Node.js](../../Skills/Web%20Development/Node.js.md) and [npm](../../Skills/Web%20Development/npm.md) installed because jigsaw uses [Laravel](../../Skills/Web%20Development/Laravel.md) Mix to [compose](../../Glossary/Framework/Jetpack%20Compose.md) CSS and [JavaScript](../../Skills/Software%20Development/JavaScript.md). Laravel Mix is an API that it finds webpack build steps by using a simple method chaining that makes module bundling and asset compilation quite easy. Once you have everything ready, we can open our terminal and create a new directory for our jigsaw project. In this course, we will build a simple blog using Jigsaw blog templates so I'm going to call the directory, my blog. Next let's cd or change directory into my blog and run composer require tightenco/jigsaw. This command will install jigsaw. Once done we need to initialize jigsaw to scaffold the default directory structure. This is where we have the choice to either install the very basic structure or to use the blog or the docs templates. We could also use a third party to start the template, which is registered as a composer package and packagist, but we won't be doing that now. In this course, we will be using the default blog templates. Using a template is helpful because we will have a fully configured and designed site that is ready to be customized. Let's see the preview of the blog template in the browser. This is what it looks like. And even if you don't like the design the blog comes with. For now, it would be easier to customize it rather than start from scratch because we are learning.
>
> **[1:34](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=94)** But once you are comfortable with jigsaw and how it works, you'll find using the default scaffolding and using your own design much easier. Back to the terminal let's run ./vendor/bin/jigsaw in it blog to initialize the blog start a template. If we wanted to initialize the docs template, we would run ./vendor/bin/jigsaw in it docs instead,
>
> **[2:07](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=127)** Once this is done, it would be great to view the default site in the browser. There are a few ways you can do that and you can use anything you are familiar with but in this course, I'm going to use the serve command that jigsaw comes with. Let me show you how this works, run ./vendor/bin/jigsaw serve And now you'll be able to view your site at local hosts 8,000 in your browser. You could also specify the port instead of using the default port 8,000 by passing --portflag at the end of the command. For example, --port=8080. Let's have a quick look in the browser and yes, the website is up and running using the port 8080 another way and I would say the better way is to use browser sync to preview your website. Browser sync lets you watch for changes in your code and it will automatically reload the page every time you make a change. So run browser sync, simply run NPM run watch. I'm going to stop the serve command for now by pressing Control + C. And I'm going to run NPM run watch. By the way, make sure you have run NPM install first otherwise you'll get an error. If you are using a template, NPM installed will have been run during the
>
> **[3:40](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=220)** initialization process. The reason I say this is the better way to preview your website especially during the development stages is that if you have used the serve command or Laravel Valet, you will need to run ./vendor/bin/jigsaw builds every single time you make a change to your code, otherwise your changes wouldn't show. I cannot tell you how many times I was stuck not knowing why my changes were displaying simply because I forgot to run the build commands. However, with browser sync you can forget about it. It is being done behind the scenes. Browser sync opens the website at different port to the serve command. A port 3000 in my case, but it could be different for you. As you can see, this default template comes with the search functionality, navigation, pages for the different design and structure and a contact form. That's more than enough to get a simple blog started. You could just update the content and deploy your website as this. But in the next chapter, we will look into how jigsaw works under the hood and how we can customize this template to suit our needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (14), [npm](../../Skills/Web%20Development/npm.md) (5), [Laravel](../../Skills/Web%20Development/Laravel.md) (3), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Node.js](../../Skills/Web%20Development/Node.js.md) (1)
> **CLI Commands:** npm (5), composer (3), make (3), php (1), node (1)
> **Exercise Files:** template (8)
> **Env Vars:** npm (4), php (1), css (1), api (1)
> **Prerequisites:** install (4), you need to have (1), make sure you have (1), initialization (1)
> **Ports:** port 8 (1), port 8080 (1), port 3000 (1)
> **Documentation:** the docs (2)
> **Tools:** terminal (2)

#### [Challenge: Creating a new Jigsaw website](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-creating-a-new-jigsaw-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-creating-a-new-jigsaw-website?u=76281980&t=0)** - [Instructor] Welcome to the first challenge! In this challenge, I'm going to ask you to create a new [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) website and call it anything you like: for example, hello-jigsaw. Make sure you first create a directory, then install Jigsaw and then initialize it. You can choose to initialize it with the blog template or you may want to try the docs template. It's up to you. If you are feeling brave, you might even go to [packagist.org](https://packagist.org) and look for some third-party Jigsaw templates. Make sure your website is showing in the browser and click around to get to know the layout and design. Good luck! And if you struggle, check out the next video to see how I did it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (4)
> **CLI Commands:** make (2)
> **Exercise Files:** template (2)
> **URLs:** [packagist.org](https://packagist.org) (1)
> **Cross-References:** next video (1)
> **Documentation:** the docs (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### [Solution: Creating a new Jigsaw website](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=5)** - [Instructor] Welcome back! How did it go? Were you able to create a new [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) website? Let me show you how I did it. I need to create a new director in my terminal by running "mkdir hello-jigsaw". Now, I'm going to "cd" into it and run "composer require tightenco/jigsaw".
>
> **[0:34](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=34)** I've decided to use the "docs" template, so I'm going to initialize it by running "./vendor/bin/jigsaw init docs". Once this is done, I'll run "./vendor/bin/jigsaw serve" to serve my site in localhost:8000.
>
> **[1:01](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=61)** Let's see if it shows up in the browser. And yes, it does. Okay, let's see what this "docs" template comes with. We have a landing page with some information about this template. We also have a link to the "Get Started" page, which is basically the template for the documentation itself. A sidebar, with quick links, and main content area on the right. If I click through the links, I can see that the content is not just some fake filler content. These are actual instructions of how to use this "docs" templates. For example, how to customize the site or how the Algolia DocSearch tool works. Very clever. Well done for completing this challenge. I hope you enjoyed it, and if you struggled, don't worry. You can always go back and re-watch the videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (5)
> **Exercise Files:** template (4)
> **CLI Commands:** mkdir (1), cd (1), composer (1)
> **URLs:** [localhost:8000](https://localhost:8000) (1)
> **Ports:** :8000 (1)
> **Documentation:** the documentation (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)


### 2. Jigsaw Internals

[↑ Back to Table of Contents](#table-of-contents)

#### [File structure](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=0)** - Let's run [npm](../../Skills/Web%20Development/npm.md) run watch to serve our websites. Now that it's up and running, we are almost ready to learn how to add new content.
>
> **[0:14](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=14)** But before we do so let's have a quick look at the file structure in [Jigsaw](../../Skills/Web%20Development/Jigsaw.md). Let's start from the top. This build local directory is the directory that is being served during our local development. If we look at our NPM run watch in the terminal, you can see at serving files from build local. All content in this directory is the same as was inside the source directory but compiled.
>
> **[0:50](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=50)** When you start adding consent or customizing an existing content or design you do it inside the source directory. It is only when you are ready to preview a website locally that you will need to build or rebuild the build local directory to see the changes in the browser. If you think by the video about installing a jigsaw website, you might remember that I compared different ways to preview website locally. And I said that using browser sync and NPM run watch is better for local development. Now you see why. If you want to be able to view your changes live, you will need this built local directory to be rebuilt every time you make a change. If you use the serve command to preview a site, you'll also need to run the build command every single time. However, if you use NPM run watch, it's built automatically. It's also worth mentioning that if you use a template like jigsaws docs or block templates, the build local directory will be built during initialization stage. However, if you don't use a template, the first time you viewed a code, this directory will not be there and you'll have to run the build command to build it. Okay, let's continue. This listener's directory has any [PHP](../../Skills/Software%20Development/PHP.md) code that needs to run during a specific time of the built, for example, to generate the index or the site map of the websites.
>
> **[2:19](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=139)** You could also write the custom PHP code to for example, have a class to generate the estimated reading time and save it in this directory. This node modules and vendor directories are directories that NPM and composer use to store third-party packages and dependencies,
>
> **[2:43](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=163)** and we don't have to worry about them. Let's have a look at the source directory now. Here, you'll see that it has various subdirectories and files. The subdirectories that start with the underscore contain partial files. For example, this underscore now directory includes partials for the menu, which you can then include elsewhere in your code. If you look inside the layout, master.blade.PHP file, you can see that we include the nav menu online 42.
>
> **[3:18](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=198)** The source directory is where we will spend most of the time in the next video. So for now, just know that it is here, where we at consent and customize the design of our jigsaw websites. Let's have a look at these config files now. These files are used to configure our website for different environments. You might want to use different site variables depending on whether you are serving the production or the staging site. Or you might choose not to include [Google](../../Glossary/Service/Google.md) analytics in your staging environment, because it will skew your results. For these reasons, jigsaw allow us to set up different configurations for different environments. This base config file is the main config. This is what will be used during active development and when you are using either the jigsaw serve, jigsaw built or NPM run watch commands. It has various variables that we will get to know better later on in the course. However, notice these two files, config.production.php and config.staging.php. You can add anything specific to either your production or your staging environment to these files and when you do, they will override what is in the base config.php file. For example, let's say that the title of your website is hello jigsaw as a default, but for staging, we want to call it hello jigsaw staging. You would simply take this site name variable and give it a appropriate value in the config.staging.php file. When your needed to build your website for staging, run the jigsaw build staging or NPM run staging commands,
>
> **[4:55](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=295)** and when your needed to build your website for production, run jigsaw.production, or NPM run production command instead. These commands will build the build staging and build production directories that will be served by our server. Let's build a staging directory as an example. In the terminal, I'll open another tab so that I can keep the NPM run watch command running. Now ill run the jigsaw build staging command, and wait for the process to finish. You could also run the NPM run staging command here. And here is our newly created, built staging directory. If I run the serve staging command now, jigsaw will build a directory and start serving it on local host 8,000. As you can see, I have two versions of my website running now, the development one on local host 3000 and the staging version on local host 8,000. And as you can see, the site name differs, the default site name is hello jigsaw while the staging version is hello jigsaw staging. I'm going to stop serving the staging site now and let's move on. Let's go back to the code. Finally, here we have the tailwind.config.js file that contains all of tailwinds CSS configuration for our websites. You can update this file or generate a new one with your own customization. Just follow the tailwind documentation for detailed instructions. And here's the webpack.mix.js file that has jigsaws mix configuration. This will work just fine out of the box. You don't need to do anything here
>
> **[6:29](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=389)** unless you change the source directory, or for example, rename or move some directories and files. We won't be doing that so we don't need to do anything in this file. This has been a quick overview of the jigsaws directory structure. You will become even more familiar with it as we work through the course. And in the next video, we will finally look into adding some new content.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (14), [npm](../../Skills/Web%20Development/npm.md) (10), [PHP](../../Skills/Software%20Development/PHP.md) (7), [Google](../../Glossary/Service/Google.md) (1)
> **CLI Commands:** npm (10), php (7), make (1), node (1), composer (1)
> **Env Vars:** npm (10), php (3), css (1)
> **File Paths:** config.staging.php (2), master.blade.php (1), config.production.php (1), config.php (1), tailwind.config.js (1)
> **Analogies:** for example (5)
> **Cross-References:** in the next (2), go back to (1)
> **Prerequisites:** initialization (1), configure (1), set up (1)
> **Tools:** terminal (2)

#### [Source directory](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=0)** - [Instructor] Let's have a closer look at the "source" directory, since this is where we will be spending most of our time when building a [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) website. As mentioned in the previous video, all content will be stored in the "source" directory. This is the working directory. Once we are ready to build the website, the content will also be stored in the "build_local", "build_staging", or "build_production" directories. First, a few words about the kind of files you can use in Jigsaw. Jigsaw allows us to add content in various formats. We can use [Laravel](../../Skills/Web%20Development/Laravel.md)'s Blade templating language. We can use Markdown, or some Blade-Markdown hybrid. We can also use other, non-[HTML](../../Skills/Web%20Development/HTML.md) files, and pass them through Blade to be processed. For example, a [JavaScript](../../Skills/Software%20Development/JavaScript.md) file with an extension ".blade.js", or a [JSON](../../Skills/Web%20Development/JSON.md) file with the extension ".blade.json". Once a file is processed by Blade, the final output file will keep its file type extension, so it would be ".js" or ".json". And, you can use a variety of other file types, too. One of the reasons Jigsaw is popular with Laravel developers is because it's using Blade. So if you are a Laravel developer, chances are you are comfortable with Blade. Thanks to Blade, we can create reusable layouts and partials. Here, we have the basic pages the "blog" template comes with: the 404 page, the about page, the blog page, the contact page, and the index page, which is the landing page of the blog. Looking through this index page, this is where the "featured" blog section is, here is the "newsletter-signup" partial,
>
> **[1:34](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=94)** and here are the other posts that don't have the "featured" tag. Whether the post is "featured" or not is defined here, in the individual post's formatter. Let's have a look at the "getting-started.md". If a post isn't "featured", we can either say that "featured" is false, or we can leave the "featured" variable out altogether. But this post, "Getting Started," is featured. Let's go over the other subdirectories inside the "source" directory, now. Just note that what you currently see is the structure of the director as defined by the "blog" template. When you installed the "docs" template, or if you just initialize the default Jigsaw build, it will be slightly different. As you can see, there are two assets directories, one with an underscore, and one without. This is because any assets we want to process with Mix should live inside this "_assets" directory. For example, any JavaScript that we want to compile, or any Sass that we want to compile into CSS. Once Mix compiles the files, it will place them into corresponding directories inside the "assets" directory, the one without the underscore. So if you look at the CSS directory, inside the "_assets" directory, we can see that in the "main.css", all we have is the Tailwind import statements. And if you look in the "assets", without underscore, look into "build/css/main.css", here we have the compiled CSS file. And it is this directory which will be copied
>
> **[3:06](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=186)** to "build_local" or "build_production" directories when the website is built. So the rule is: Put any assets inside the "_assets" directory, and Mix will take care of the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). By the way, to compile our assets, we will need to run "[npm](../../Skills/Web%20Development/npm.md) run dev", but since we are running "npm run watch", our assets are being compiled on-the-fly. And if you ever need to change the location of the assets, remember to update the webpack file too. The "_categories" directory contains the Markdown files for each of our blog's categories, what layout a category extends, its title, and description. This template came with two categories, the "configuration" category and the "feature" category. The "_components" directory contains the various components the "blog" template comes with: the "newsletter-signup" form, the "post-as-rss-item", and the "post-preview-inline" components. The "newsletter-signup" form is being used in the "index.blade.[PHP](../../Skills/Software%20Development/PHP.md)" file, down here on line 32. "_layout" is the next directory. Here, we have various layouts that the "blog" template comes with. Jigsaw provides us with a basic "master" layout. As you can see, we have two layouts here, "main.blade.php" and "master.blade.php". The reason is that this "main" layout is what the default Jigsaw installation comes with, while this "master" layout is what the "blog" template comes with. You can use either of these two,
>
> **[4:39](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=279)** or delete them and create your own one. Either way, the body of the website will be rendered here, thanks to this yield call. Both of these templates have it. The "layouts" directory also comes with other templates: one for a category, one for a post, and one for an RSS page. The "_nav" directory contains various menu partials, and the "_posts" directory has the published posts. Once you start working on your own content, you'll want to delete these default posts and create your own. As you can see some directories contain mainly Blade files, for example, this "layouts" directory, while others contain mainly Markdown files, for example, this "posts" directory. It depends on you, which follow format you prefer to use. In general, I would use Blade for files used to structure the website, and Markdown for files that mainly have content. Remember, you can create as many directories as you need to keep your content organized, and you can either customize what the "blog" template comes with, or create your own templates and partials.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (7), [Laravel](../../Skills/Web%20Development/Laravel.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (3), [PHP](../../Skills/Software%20Development/PHP.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
> **File Paths:** blade.js (1), blade.json (1), getting-started.md (1), main.css (1), build/css/main.css (1)
> **Exercise Files:** template (8)
> **Env Vars:** css (3), html (1), json (1), rss (1)
> **CLI Commands:** php (3), npm (2)
> **Code Identifiers:** build_local (2), build_production (2), build_staging (1)
> **Analogies:** for example (4)
> **Cross-References:** previous video (1)

#### [Adding content to a Jigsaw website](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=0)** - Enough of the theory and let's create some content now. I'm going to create a new post by creating a new markdown file inside the post directory. Let's give it a name, hello-world.md, and add the Yama front matter. The front matter is the section on the top of the file, where we would find the values to the various variables that will be used on the page. For example, if you look at the gettingstarted.md file, we can see that this post will extend the post partial, which is inside the layouts directory. And the section is called content. Let's open the partial quickly and find the section. And here it is on line 27. We also have the title of the post, the date, the description, the cover image, whether this post is featured or not, and what categories it belongs to. One really interesting fact is that this Yama front matter can be used in blade files too, not just in markdown. So if you create your content using blade, instead of markdown, you still have access to the front matter and you can use the key value pairs defined there. I'm going to copy the front matter of this getting started post and customize the values for our hello world post. I can also add some custom variables. Let's say I want to include an old text for the image. I'll create an old variable and give it some value. Now, in order to actually render this old text, I'll need to go to the layout file and find a code that displays the image. Right here, on line nine. In here, I can see that by default,
>
> **[1:33](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=93)** the old texts will be the same as the title of the page with the words, cover image appended. To have [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) render the actual out value we added to the front matter, we need to change this line and use the dollar sign page variable with the out key instead, and delete the cover image words. Let's go back to the hello world post and add some short content. Just tell the world, how are you? I'm also going to update the title, the date, and the description of the post. Let's see if the post has been created in the browser. I'm going to open the website in Chrome for now, just to use the deaf tools, which you might be familiar with. To inspect it all to text over the image. And yes, it's here. Cover image just as to be described in the front matter of the hello world post. If I quickly change it to something else, for example, hello world, and refresh the page. You will see that the old text has been updated too. One [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) of caution. Sometimes you might actually need to restart your watch process for mix to pick up the newly created file. Jigsaw is using the [Laravel](../../Skills/Web%20Development/Laravel.md) mixed jigsaw plugin, which watches the sides files and triggers a new build when it detects changes. However, this plugin cannot detect the creation of new files that are immediately inside the source directory. For example, if you created another file on the same level as is this 404.blade.[PHP](../../Skills/Software%20Development/PHP.md) file. In this case, you will need to restart mix
>
> **[3:07](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=187)** by running [npm](../../Skills/Web%20Development/npm.md) run watch again. Okay, now that you know how to create a new page and how to change an existing layout, you can do pretty much anything. You can structure the content the way you like, organize it in various directories, create custom variables, categories, use blade files to build a structure and design of the page, and use markdown files to populate the page with content.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Laravel](../../Skills/Web%20Development/Laravel.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1)
> **CLI Commands:** find (3), php (1), npm (1)
> **File Paths:** hello-world.md (1), gettingstarted.md (1), 404.blade.php (1)
> **UI Navigation:** open the (2), go to (1)
> **Analogies:** for example (3)
> **Env Vars:** npm (1)
> **Cross-References:** go back to (1)
> **Definitions:** is called (1)

#### [Collections in Jigsaw](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=0)** - Collections allow us to do with groups of similar content, content that shares common features, Common templates, things that can be sorted and filtered. collections are defined inside a configured [PHP](../../Skills/Software%20Development/PHP.md) file, inside an array named collections. If we have a look inside the file, we can see that the block template comes with two collections. Posts and categories. The name of the collection is typically plural. So not post but posts. And it can have an array of settings. The way you code the collection is important because [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) over look for a directory of the same name, preceded by an underscore. So in our case, underscore posts or underscore categories inside the source directory. If you'll get the posts collection, it defines the default author, the way the collection is sorted, and the path to the individual collection item. The default path setting for a file, would have two parts. The first part would be the name of the collection. And the second would be the final name. All lowercase, words separated by dashes. But if you wanted to customize the collection path, you can do it right here. As you can see here, the path includes block, not post, which is the collection name. And instead of file name, you could include title in the path instead. By default, if the path has multiple words, they will be separated by dashes. Let's check it out in the browser. Opened the website, go to the block section, and yes, the path on individual posts is separated by dashes. But if you wanted to separate them by underscores, you would add it to the file name inside the curly braces.
>
> **[1:33](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=93)** For example, underscore file name. Let's see it in the browser again. And if I refresh the same page, you'll see that I get an error, cannot get this post. I'll go back to the book section, refresh the page and click on the post again. And this time it works and the path is separated by an underscore. Now what about (indistinct)? We can control the order in which collection items are sorted on the page. By default, the items will be sorted by the file name, in an ascending order. In the case of this template, the posts are sorted according to the date. But what is this dash here? This dash tells jigsaw that we want to sort items by date, but not in an ascending order, but in a descending order, let's remove the dash and see what happens on the block page. As you can see, the posts are now sorted but the oldest post first. I'll add the dash back and refresh the page. And the posts are sorted with the newest one first now. Let's have a look at filtering now. To add a filter functionality, we simply need to add another key to the collections array in the configured PHP file. We need to specify a function that will accept a collection item and return either true or false. If the code does returns true, the item will be built and displayed on the website. And if false it will not. A common used case, is to own a display published posts based on whether the variable published in the post front matter is set to true or false. Let's implement it now.
>
> **[3:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=188)** I'll add a new key filter and return a function which accepts an item and only the returns items that are published. Now I'll go to a couple of our posts, they getting started and the hello [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) post. and add the published variable to their front matter. Set that to true, safe and check our block page. And now we only see these two posts. As you can see, collections are a powerful concept. There is so much magic so let's us do with collections. for example, map over them, or use remote collections. That will allow us to [Fetch](../../Skills/Web%20Development/Fetch.md) consent from a remote source. Such as an external API, or some API based [Content Management](../../Skills/Web%20Development/Content%20Management.md) system. Check out the official jigsaw documentation for more details.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (3), [PHP](../../Skills/Software%20Development/PHP.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [Content Management](../../Skills/Web%20Development/Content%20Management.md) (1)
> **Env Vars:** php (2), api (2)
> **UI Navigation:** go to (2), click on (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** php (2)
> **Exercise Files:** template (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** getting started (1)

#### [Event listeners in Jigsaw](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/event-listeners-in-jigsaw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/event-listeners-in-jigsaw?u=76281980&t=0)** - Another exciting feature that you saw first is the different way we can hook into various points of the build by using Event Listeners. Event Listeners is a [PHP](../../Skills/Software%20Development/PHP.md) callable, which expects to be passed into an event. [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) provides three events we can hook into with our custom code. The beforeBuild event is fired before any source file have been processed. The afterCollection event is fired after any collection have been processed, but before any output files have been built. And the afterBuild event is fired after the collection is complete and all output files have been written to the build directory. Every event listener must be registered inside the Bootstrap.PHP file. As you can see, we have two listeners already registered in this block template. The generator index listener, it chooses the afterBuild hook, which takes the post collection, takes the title, category link, and snippet of each post, and engine rate and index the chasing file of the post. The second listener is the generate sitemap listener which also uses the afterBuild hook to create the website's site map. However, there are many other listeners we can create. A popular use case is to create an event listener that would use the afterCollection hook to generate the estimated reading time, or a listener to process images, minify [HTML](../../Skills/Web%20Development/HTML.md), or basically any action we may want to do at various points of the build process. If you want to learn more about Event Listeners, check out the Jigsaw Documentation. You'll also be able to find a list of Helper Methods available to each event listener.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (2), [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Code Identifiers:** afterbuild (3), aftercollection (2), beforebuild (1)
> **CLI Commands:** php (2), find (1)
> **Env Vars:** php (2)
> **File Paths:** bootstrap.php (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - another (1)

#### [Challenge: Adding content and customizing Jigsaw](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-adding-content-and-customizing-jigsaw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-adding-content-and-customizing-jigsaw?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:05](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-adding-content-and-customizing-jigsaw?u=76281980&t=5)** - [Instructor] Welcome to our next challenge. In this challenge, I'm going to ask you to create a new page in your Hello [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) project that you created last time. Create an about page with some content about yourself or the website you are creating. Add it to the navigation menu, and make sure you can visit a page in the browser. Next, see that you can customize the style of the page. If you are using a template, the website will be designed for you. But what about changing the background color over the page, or maybe changing the color of a button? Jigsaw is using Tailwind CSS. So if you need help with Tailwind CSS classes, check out the documentation. Have fun and don't worry if you struggle. You can always go back and watch the video again, or simply follow along with me in the next video, where I will show you how I would solve this challenge. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (2)
> **Env Vars:** css (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat instrumental music) (1)

#### [Solution: Adding content and customizing Jigsaw](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=0)** - [Instructor] So, how did it go? Did you manage to create a new page, add it to the navigation and make some changes to the style of the website? This is how I did it. Here is my [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) project open in the text editor. Because the "about page" will be a top-level page, I'll create a Markdown file in the source directory. I could have created a Blade file too, but I chose Markdown in this instance.
>
> **[0:35](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=35)** I'm going to copy the front method from another file. For example, this "getting started with MD" one inside the docs directory. I'm going to change the title to "about" and the description to "about me." Now, which layout should this page extend? There are three layouts to choose from unless I want to create another one, which I don't. The master layout is the one extended by the index page so let's see what the "about page" would look like if I use this one. I can always change it later. So the page will extend the master layout and the section will be "body" because this is what the section is called in the master layout on line 64. I'll also add some content. For now, just a simple "Hello!" will do. I'm going to save the file and see if I can display it in the browser. Since the lot of our Mix-Jigsaw plugin doesn't register newly created files inside the source directory, I'm going to have to restart the [npm](../../Skills/Web%20Development/npm.md) brandwatch process. I haven't added it to the navigation yet, but the page should be accessible at the /about URL. And here it is, it's not pretty though. So I think I'm going to change the layout.
>
> **[2:07](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=127)** The page "extends" to the "documentation" one. Back in the code, I'll change this line and the section is now called "content" as you can see here in the layout. I'm going to save it and see the page in the browser again. Okay. I think I like this a bit better. I think I could add the link to the sidebar navigation right above the Jigsaw Docs navigation item. Before I do that, let's just see what the Docs here say. It's really clever how the default concept of the Docs Template is the Docs Documentation. It says that the menu is defined in certain array in the navigation.[PHP](../../Skills/Software%20Development/PHP.md) file. So I'm going to open this file and add my "about" page there. I don't want to add it to the "children" array, because that would look like this page is another documentation page, when in fact it's a top level page.
>
> **[3:17](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=197)** The key will be "about" and the value will be "another array" with a key "url" and the value "/about" Now, for the link to actually show in the navigation, I will have to restart the npm brandwatch or build the website by running the Jigsaw bill command because the navigation.php file isn't being tracked by Mix. I can tell by looking in the webpack.mix.js file, the Jigsaw-Mix plugin is only watching the config and the files inside the source directory.
>
> **[3:55](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=235)** I could either add a navigation.php file in this array of files to "watch" or just rebuild the website. And this is what I'm going to do now. Stop "npm run watch" and start it again. I'm going to refresh the page and see if the link appears in the navigation. And here it is. I'll click on it and again, yes it works. The last thing I asked you to do is to change the style of the website. For example, by giving the "learning" page a different background color, or changing the color of the button. To do that, I'll go to the master layout. And here in the body, I'll change the BG value from "gray" to "green."
>
> **[4:50](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=290)** Let's see it in the browser. Okay. I think that looks okay. Let's change the color of the button too. I'm going to find the "get started" button, which will be in the index.by.php file. And here it is on line 14. I'll change the BG value to "green" and I'll also change the hover value too. Save and check it in the browser. And yes, it worked. The button is green. That's it for this challenge. I hope you enjoyed it and if you struggled, don't worry. We covered a lot of new things in this chapter. Well done for all your hard work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (5), [PHP](../../Skills/Software%20Development/PHP.md) (4), [npm](../../Skills/Web%20Development/npm.md) (3)
> **CLI Commands:** php (4), npm (3), make (1), find (1)
> **File Paths:** navigation.php (3), webpack.mix.js (1), index.by.php (1)
> **Documentation:** the docs (4)
> **UI Navigation:** click on (1), go to (1)
> **Analogies:** for example (2)
> **Env Vars:** url (1)
> **Cross-References:** we covered (1)


### 3. Deploying Jigsaw on Netlify

[↑ Back to Table of Contents](#table-of-contents)

#### [Netlify introduction](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=0)** - Deploying a static degenerated site could not be easier. There are many free services that allow us to deploy a [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) project for free such as Vercel, [GitHub](../../Skills/Software%20Development/GitHub.md) Pages or Netlify. In this course, we will deploy a Jigsaw site using Netlify. Netlify is a popular service that makes deploying static site effortless. It's a really useful service and a great one to have your technical knowledge toolbox. Netlify is a [Cloud Computing](../../Topics/Cloud%20Computing.md) company that offers hosting and serverless backend services. It offers a very streamlined way to host and deploy your projects, and once it's up, you can pretty much forget about it. To explore Netlify, let's create a new account first. You can sign up at any of the following options, GitHub, GitLab, [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) or email. For the purposes of this course, we will sign up using it GitHub. You will need to sign in to a GitHub account first or create a new one if you don't have one yet. Once you click on the sign up link, you will need to authorize Netlify to access your GitHub account. I have already done it, but you should just click authorize and that's it. Once done, you can log in to Netlify using your GitHub credentials. If this is your first time on Netlify, Netlify will ask you a series of questions to personalize your account such as your name, your team, what you will use Netlify for, and so on. Choose whatever is appropriate for you and click setup and continue. You might also be welcomed by the quickstart guide modal, which you can either go through or close.
>
> **[1:35](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=95)** This is the Netlify dashboard where you have a quick overview of all the sites you are hosting on Netlify. Since this is a brand new account, there are no sites at the moment. You can click through the navigation to learn more about Netlify, but you don't need to change anything anywhere right now. Your account is already ready to start hosting static sites. It might be interesting to explore the plugins Netlify offers to add an extra functionality to your site, but this is beyond the scope of this course. And that's it for now. You have your Netlify account ready, and in the next video, we will walk through the linking a new site from GitHub and deploying it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (7), [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (2), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1)
> **Tools:** github (7), gitlab (1), bitbucket (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** setup (1)
> **Speakers:** - deploying (1)

#### [Uploading Jigsaw website to GitHub](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=0)** - [Tutor] Now that we have a Netlify account set up, we are ready to upload our project to [GitHub](../../Skills/Software%20Development/GitHub.md). There are many fantastic [Git](../../Skills/Software%20Development/Git.md) tutorials in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning library, so I won't spend too much time explaining what it is and how to use it. Feel free to visit any of these tutorials, if you need to learn more or just to refresh your knowledge. To get started we need to initialize Git inside our projects directory. You will need to run git init in the terminal. Just make sure you are inside the right directory, my blog. As you can see, Git has provided some useful hints. Feel free to read through them. Next step is to add all of our files to be tracked by Git. Run git add dot in the terminal. You can run git status to see that Git has added all of our project files to be tracked and yes it has. Next, we need to commit these files and give them some descriptive comic message. In the real world scenario, you would have initialized Git right at the beginning of your project and you would probably commit your work throughout. In our case, we will commit everything all at once and give it a commit message, ready to deploy, by running, git commit dash M ready to deploy. Before we can commit all of our files to GitHub, we need to go and create a new repository. Let's go to [github.com](https://github.com), login and go to create a new repository. Let's give it a name, [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) blog. We can make it public or private, it doesn't matter in this case. Let's not initialize the repository with README or gitignore, because we already have a READMEA and gitignore in our project files. Let's just click create repository.
>
> **[1:34](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=94)** We will need to add origin to our local repository so that Git knows where to push our code to because we already have the repositor locally, we will follow these steps. I'm just going to copy this line and paste it in the terminal. You may also want to change the name of domain branch from master to main or anything else you prefer. To do that in our terminal we will type, git branch dash capital M main. As you can see, the name of the branch has changed from master to main. And finally, we can run git push dash U origin main. The dash U you flag, just sets the upstream of the current local branch and it only needs to be done once. After this, every time we want to push changes via Git, you just say, git push origin main or git push. Let's check our online repository now. If I refresh the page, I can see that the code is there. Fantastic. This means we have everything ready to deploy our project to Netlify.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (16), [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (1)
> **CLI Commands:** git (16), make (2)
> **Tools:** terminal (4), github (3)
> **Env Vars:** readme (1), readmea (1)
> **UI Navigation:** go to (2)
> **URLs:** [github.com](https://github.com) (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [tutor] (1)

#### [Deploying Jigsaw website to Netlify](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=0)** - [Instructor] We have done all this work to prepare our project to be deployed to Netlify. The files are in [GitHub](../../Skills/Software%20Development/GitHub.md), our Netlify account is ready, so let's do it. From our Netlify dashboard, click on new site from [Git](../../Skills/Software%20Development/Git.md). Next we need to choose our Git provider which is GitHub, and then select the correct repository. The branch is main. The build command will be [npm](../../Skills/Web%20Development/npm.md) run prod and the publish directory will be build_production. You might wonder why is this build command npm run prod? If you remember early in the course, I said it before we can view our website, we need to build it by running ./vendor/bin/[Jigsaw](../../Skills/Web%20Development/Jigsaw.md) build staging or build production. This command will create the build_staging or the build_production directory, which will then be deployed. So here, instead of us doing it manually, every time we want to deploy our site to Netlify, we are telling Netlify to run this command for us. Very convenient. Now we need to click on show advanced and add a key [PHP](../../Skills/Software%20Development/PHP.md) version with the value 7.4. And, we are finally ready to click deploy site. As you can see in this site overview section, the deployment is in progress. You can click on this deploy tab and click on this link to see the details of the deploy. The process doesn't take long at all, especially since our website is very small. Once it's finished Netlify will display the published flag
>
> **[1:34](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=94)** and it will give us some provisional URL. Let's click on it. And here's our website publicly accessible to everyone. Netlify's domain is not great though, but you can easily set up a custom domain. All you need to do is buy a domain, go to the site overview tab, click on domain settings and click on add custom domain. Netlify will take you through some steps and automatically configure DNS settings for you, and tell you if there's anything else you need to do. The documentation is really quite good. We have just covered how to set up a book process in a Netlify user interface. However, there's another way to do it. A way some of you may find easier. Instead of filling out the build command, publish directory and advanced setting on Netlify, we can just create a Netlify.toml file inside our project's root directory and add a few commands there. Let's head back to the text editor and do it together. I'll create a new file called Netlify.toml, and inside, I'll add the following code. You don't need to add the build command, which directory we are publishing, in this case, the build production one and the PHP version. Once we create this file, all we will need to do on Netlify, is link to the GitHub repository. Make sure that the correct branch is selected by default and click deploy. No need to fill out anything else because Netlify will read this Netlify.toml file and use it to deploy our project. There is a lot more you can set up on Netlify, to make sure your project is just the way you want it.
>
> **[3:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=188)** I'm not going to go into any more details, but what you know right now is enough to get you started. Next time you want to add content to your website, run the local version, add your new content, or make changes to your style. commit and push the changes to GitHub. Netlify will trigger the deployment automatically. Your new content will be online in no time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (4), [Git](../../Skills/Software%20Development/Git.md) (2), [npm](../../Skills/Web%20Development/npm.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (2), [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (1)
> **CLI Commands:** make (3), git (2), npm (2), php (2), find (1)
> **UI Navigation:** click on (7), select the (1), go to (1)
> **Env Vars:** php (2), url (1), dns (1)
> **Tools:** github (4)
> **Prerequisites:** set up (3), configure (1)
> **File Paths:** netlify.toml (3)
> **Code Identifiers:** build_production (2), build_staging (1)

#### [Challenge: Deploying a Jigsaw project to Netlify](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-deploying-a-jigsaw-project-to-netlify?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-deploying-a-jigsaw-project-to-netlify?u=76281980&t=0)** - [Instructor] Welcome to the last challenge of this course. In this challenge, you're going to get to test your knowledge of how to deploy [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) site to Netlify. Take the project from the last challenge, initialize it with [Git](../../Skills/Software%20Development/Git.md), upload the project files to a brand new repository on [GitHub](../../Skills/Software%20Development/GitHub.md) and deploy it to Netlify. It's up to you if you choose to add the build's details via Netlify's UI over the netlify.toml file. Once you can view the site in the browser, go back to your local version and add some new content. You can either create a new page or change some content in an existing page. It's up to you. Upload the changes to GitHub and see if Netlify deploys them automatically. If yes, fantastic. You have successfully learned how to create a jigsaw site, add content, push the project files to GitHub and set up Netlify to deploy your website. And if you struggle, don't worry. Just follow along with my solution in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (2), [Git](../../Skills/Software%20Development/Git.md) (1)
> **Tools:** github (3)
> **Cross-References:** go back to (1), in the next (1)
> **File Paths:** netlify.toml (1)
> **CLI Commands:** git (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Deploying a Jigsaw project to Netlify](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=0)** (upbeat invigorating music)
>
> **[0:05](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=5)** - [Instructor] How did it go? Did you manage to deploy your website? This is how I did it. In the terminal I make sure I'm in the right hello-jisaw directory. First, I'll create a netlify.toml file by running "touch netlify.toml" command in the terminal. I'll open the project in text editor and paste the build commands from my previous project into this newly created file. These comments never change, so copy and paste them, and it's quite safe. Now I'm going to run "[Git](../../Skills/Software%20Development/Git.md) init" to initialize Git. Then, I'll run "git add ." to add all the files and "git commit -m 'ready to deploy'" to commit everything. Next, I'm going to go to my [GitHub](../../Skills/Software%20Development/GitHub.md) account and create a new repository. I'll call it "hello-[Jigsaw](../../Skills/Web%20Development/Jigsaw.md)" and set it to private. I'm going to return back to the terminal and finish setting up the Git credentials.
>
> **[1:03](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=63)** Now that the code has been pushed to Github, I'm going to go to my Netlify dashboard and click on "New site from Git," search for my repo and edit. I don't need to add anything to Netlify UI, and just click deploy. In fact, as you can see, Netlify has already added the right commands for me. Wait a minute or so, and my website will be live. And here it is! Fantastic. Okay, let's add some new content to my project. I'm going to add some fresh content to the about page. Let's make sure that the new content is there by visiting it in the browser. Now, let the project update to the live version of the site, too. Save the changes and the terminal, I'll run "git commit -m 'Update About page'" and "git push origin main." To see that everything's working, I'm going to check the Netlify dashboard again. Here you can see that the new deployment is already started, and the changes are live. I'm going to check the live version in the browser again, to make sure that the new content is there. And yes, it is. Well done for completing this challenge. You have learnt so much in this course, feel proud of yourself. I certainly feel proud of you, amazing job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (8), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (1)
> **CLI Commands:** git (8), make (3)
> **Tools:** terminal (4), github (2)
> **UI Navigation:** go to (2), open the (1), click on (1)
> **File Paths:** netlify.toml (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat invigorating music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Where to go from here](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/where-to-go-from-here?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=0)** - [Zuzana] This brings us to the end of this course. By completing this course, you now have a foundation understanding of what [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) is, how to use it, and how to deploy it to Netlify. This is a great starting point, but there is so much more you can do with Jigsaw. Other than building a simple website, you could connect Jigsaw to headless CMS. You could also build a custom template and share it with people and packages, and you can even build a custom plugin. I recommend visiting their official documentation to dive deeper into some advanced Jigsaw functionality. And that's all from me. You can connect with me on Twitter, or you can fall Larabelles, the community for women, non-binary and trans [Laravel](../../Skills/Web%20Development/Laravel.md) developers, either on Twitter or on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). Thank you for watching and have fun building websites which Jigsaw.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (5), [Laravel](../../Skills/Web%20Development/Laravel.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** cms (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [zuzana] (1)


## Instructor

- [Zuzana Kunckova](../../Instructors/Web%20Development/Zuzana%20Kunckova.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/essential-jigsaw-laravel-3155793)

## Skills Covered

- Jigsaw
- Laravel
- PHP

## Path Context

### In [Build Your Laravel Skills](../../Paths/Web%20Development/Learning%20Paths/Build%20Your%20Laravel%20Skills.md)
← [Building GraphQL Applications in Laravel](Building%20GraphQL%20Applications%20in%20Laravel.md) | **5 of 7** | [Essential Statamic for PHP and Laravel Developers](Essential%20Statamic%20for%20PHP%20and%20Laravel%20Developers.md) →

## Appears In

- [Build Your Laravel Skills](../../Paths/Web%20Development/Learning%20Paths/Build%20Your%20Laravel%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Essential Statamic for PHP and Laravel Developers](Essential%20Statamic%20for%20PHP%20and%20Laravel%20Developers.md) — PHP, Laravel
- [Winter CMS with Laravel](Winter%20CMS%20with%20Laravel.md) — Laravel
- [Building GraphQL Applications in Laravel](Building%20GraphQL%20Applications%20in%20Laravel.md) — Laravel
- [Building RESTful APIs in Laravel](Building%20RESTful%20APIs%20in%20Laravel.md) — Laravel
- [Advanced Laravel](Advanced%20Laravel.md) — Laravel

---

[↑ Back to top](#)