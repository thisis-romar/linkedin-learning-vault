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
  - '[[Build Your Laravel Skills]]'
prev_courses:
  - '[[Building GraphQL Applications in Laravel]]'
next_courses:
  - '[[Essential Statamic for PHP and Laravel Developers]]'
path_nav: '[{"path":"Build Your Laravel Skills","position":5,"total":7,"prev":"Building GraphQL Applications in Laravel","next":"Essential Statamic for PHP and Laravel Developers"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/jigsaw
  - skill/laravel
  - skill/php
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Essential%20Jigsaw%20for%20PHP%20and%20Laravel%20Developers.md)

![Essential Jigsaw for PHP and Laravel Developers](https://media.licdn.com/dms/image/v2/C560DAQHlII2lNyUsRg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1639597396787?e=2147483647&amp;v=beta&amp;t=Xkas1rylTvTv_xrRLs9pzK6TlirBpW8Pb5FkJubwR0o)

# Essential Jigsaw for PHP and Laravel Developers

> You may know that Jigsaw is a framework used to rapidly build static sites, but did you know that it’s also a great solution for PHP and Laravel developers? That’s because Jigsaw uses the Blade templating engine, which is the same engine used in Laravel. Join Zuzana Kunckova for an overview of Jigsaw that’s uniquely designed for developers and DevOps engineers who work with PHP and Laravel.Discove

> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers) | 53m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (1 videos)
- **2. 1. Getting Started with Jigsaw** (5 videos)
- **3. 2. Jigsaw Internals** (7 videos)
- **4. 3. Deploying Jigsaw on Netlify** (5 videos)
- **5. Conclusion** (1 videos)

### 1. Introduction

#### Introduction to Jigsaw
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/introduction-to-jigsaw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/introduction-to-jigsaw?u=76281980&t=0)** - [Lecturer] Jigsaw is a framework, used to rapidly build static sites.
>
> **[0:04](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/introduction-to-jigsaw?u=76281980&t=4)** It is one of the best PHP-based static site generators.
>
> **[0:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/introduction-to-jigsaw?u=76281980&t=8)** Static site generators, also known as SSGs, generate full, static, HTML websites, based on provided data and available templates.
>
> **[0:17](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/introduction-to-jigsaw?u=76281980&t=17)** They are well-known for their fast loading speed, easy deployment, and they're a great alternative to dynamic websites.
>
> **[0:24](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/introduction-to-jigsaw?u=76281980&t=24)** Jigsaw's a fantastic solution for PHP and Laravel developers, as it uses the Blade's templating engine, which is the same engine used in Laravel.
>
> **[0:34](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/introduction-to-jigsaw?u=76281980&t=34)** I am Zuzana Kunckova, a Laravel developer and the founder of Larabelles, the community for women, non-binary, and trans Laravel developers.
>
> **[0:42](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/introduction-to-jigsaw?u=76281980&t=42)** I've built multiple websites using Jigsaw, and I'm excited to share my knowledge with you.
>
> **[0:47](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/introduction-to-jigsaw?u=76281980&t=47)** By joining me in this LinkedIn Learning course, you will discover the essentials of Jigsaw, how to install it, and how to choose and install an official template.
>
> **[0:56](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/introduction-to-jigsaw?u=76281980&t=56)** We will walk through the entire codebase together, and I will show you how to create and edit content, and deploy your website for free on Netlify.
>
> **[1:04](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/introduction-to-jigsaw?u=76281980&t=64)** Sounds exciting?
>
> **[1:05](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/introduction-to-jigsaw?u=76281980&t=65)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** static (4), let (1)
> **Env Vars:** php (2), html (1)
> **CLI Commands:** php (2)
> **Definitions:** is a  (1), known as (1)
> **Prerequisites:** install (2)
> **Exercise Files:** template (1)
> **Speakers:** - [lecturer] (1)


### 2. 1. Getting Started with Jigsaw

#### What is Jigsaw?
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980&t=0)** - [Instructor] Jigsaw is a framework used to rapidly build static sites using Laravel Blade templating engine.
>
> **[0:07](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980&t=7)** It is developed and maintained by Tighten, a consultancy firm operating out of Chicago US.
>
> **[0:13](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980&t=13)** Jigsaw is an open source framework, with around 195,000 downloads to the date and nearly 2,000 GitHub stars.
>
> **[0:22](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980&t=22)** Jigsaw is one of the best PHP based static site generators.
>
> **[0:25](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980&t=25)** And because it's built using PHP and Laravel Blade, Laravel developers will find it quite easy to get started.
>
> **[0:32](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980&t=32)** But let me say, you don't need to be a Laravel developer to use Jigsaw.
>
> **[0:36](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980&t=36)** Knowing Blade will certainly be useful, but anyone can get started using it pretty quickly.
>
> **[0:41](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980&t=41)** Jigsaw accounts it's two official templates, a blog template, and a Docs template.
>
> **[0:48](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980&t=48)** These have been developed by Tighten to make it even easier to get a fully configured site up and running quickly.
>
> **[0:54](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980&t=54)** But they are other third-party templates you could use too.
>
> **[0:57](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980&t=57)** On [buildwithjigsaw.com](https://buildwithjigsaw.com) website, you can find a showcase of website built with Jigsaw, which is a great place to get inspired.
>
> **[1:05](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980&t=65)** Some projects linked to their GitHub repos too, which means you can go and look through the source code to see how the website was built.
>
> **[1:12](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980&t=72)** A great way to learn from other developers.
>
> **[1:16](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980&t=76)** Jigsaw is also a great alternative too, for example, WordPress, or Statamic, which are both PHP based frameworks used to build websites.
>
> **[1:26](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-jigsaw?u=76281980&t=86)** However, Jigsaw is free to use and free to deploy as we will learn later on in the course, and it is a great framework to have in your toolbox.

> [!info]- Semantic Content
>
> **CLI Commands:** php (3), find (2), make (1)
> **Definitions:** is a  (3), is an  (1)
> **Code Keywords:** static (2), let (1)
> **Env Vars:** php (3)
> **Exercise Files:** template (2), source code (1)
> **Tools:** github (2)
> **URLs:** [buildwithjigsaw.com](https://buildwithjigsaw.com) (1)
> **Analogies:** for example (1)

#### What is a static site generator (SSG)?
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=0)** - Now that we know that Jigsaw, is a PHP based static site generator, you may be wondering what a static site generator is, in the first place.
>
> **[0:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=8)** Static site generator, also known by the abbreviation SSG, is a tool that generates a full static HTML website, from some raw data and a set of templates.
>
> **[0:18](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=18)** You might remember that some years ago, we used to hard-code simple HTML pages, with no dynamic content.
>
> **[0:25](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=25)** and save them as "home. Html" or "about. Html" these pages, were then uploaded to the server.
>
> **[0:31](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=31)** The benefit of these simple pages, was that the delivery was really fast.
>
> **[0:35](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=35)** Because these pages were already built and didn't require any extra rendering, before being displayed in the browser.
>
> **[0:42](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=42)** It was also very easy to host these websites, because there was no need to use any backend language to serve them.
>
> **[0:49](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=49)** This is in comparison to dynamic websites that will load different info based on a number of data inputs.
>
> **[0:55](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=55)** They use his location the time of the day.
>
> **[0:57](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=57)** And so on.
>
> **[0:58](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=58)** one example would be WordPress, a content management system that relies heavily on the use of templates and partials.
>
> **[1:04](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=64)** And it's using PHP under the hood to render the content in the browser.
>
> **[1:09](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=69)** But let's say we don't need dynamic content on our website, but we still don't want to go back to hard coding every single web-page, and not be able to use the benefits of modern web development.
>
> **[1:19](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=79)** Such as, the use of templates, partials, or variables throughout our code.
>
> **[1:23](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=83)** This is where static site generators come in.
>
> **[1:26](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=86)** They are a compromise between these hard-coded websites and a dynamic CMS They have a high-performance, because these webpages are generated in advance rather than being generated on demand. Each time.
>
> **[1:39](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=99)** They also tend to be much smaller in size, because they don't need as much code to run on the server.
>
> **[1:44](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=104)** They still allow developers to use partials and templates to speed up the development process and keep the code trying.
>
> **[1:51](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=111)** However, one downside is that they don't tend to come with an admin panel.
>
> **[1:55](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=115)** So to use it, ADA needs to look for a third party solution, or just add content via the CLI.
>
> **[2:01](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=121)** There are many different static site generators available.
>
> **[2:04](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=124)** And they each serve a slightly different audience.
>
> **[2:06](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=126)** You may choose to generate two based on the language it is using: PHP, JavaScript, Ruby, or many others.
>
> **[2:14](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=134)** You may also choose a generator based on what you are building.
>
> **[2:17](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=137)** Is your page primarily delivering content?
>
> **[2:20](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=140)** or do you need more features on the client side?
>
> **[2:22](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=142)** What about the size of your website?
>
> **[2:24](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=144)** Some SSGs are handling a large number of pages better than others.
>
> **[2:29](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=149)** And finally, what templating language Are you already familiar with?
>
> **[2:32](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=152)** Are you used to work with Blade, Markdown, Mustache, Pug, or would you prefer to use to react or Vue.js to handle your front end?
>
> **[2:40](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=160)** All, these are good questions to ask, when looking for a static site generator.
>
> **[2:45](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=165)** As I mentioned in the previous video in this course, we will be learning about Jigsaw, a popular study site generator for Laravel developers, that uses PHP and Laravel blades.
>
> **[2:55](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/what-is-a-static-site-generator-ssg?u=76281980&t=175)** So let's get started learning Jigsaw.

> [!info]- Semantic Content
>
> **Code Keywords:** static (7), let (2), require (1), finally, (1)
> **Env Vars:** php (4), html (2), ssg (1), cms (1), ada (1)
> **CLI Commands:** php (4), ruby (1)
> **Definitions:** is a  (2)
> **File Paths:** vue.js (1)
> **Cross-References:** previous video (1)
> **Analogies:** such as (1)
> **Speakers:** - now (1)

#### Installing Jigsaw
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=0)** - [Instructor] To install Jigsaw, you need to have PHP 7.3 or above and composer installed on your machine.
>
> **[0:07](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=7)** You will also need to have Node.js and npm installed because jigsaw uses Laravel Mix to compose CSS and JavaScript.
>
> **[0:15](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=15)** Laravel Mix is an API that it finds webpack build steps by using a simple method chaining that makes module bundling and asset compilation quite easy.
>
> **[0:24](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=24)** Once you have everything ready, we can open our terminal and create a new directory for our jigsaw project.
>
> **[0:29](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=29)** In this course, we will build a simple blog using Jigsaw blog templates so I'm going to call the directory, my blog.
>
> **[0:38](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=38)** Next let's cd or change directory into my blog and run composer require tightenco/jigsaw.
>
> **[0:46](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=46)** This command will install jigsaw.
>
> **[0:49](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=49)** Once done we need to initialize jigsaw to scaffold the default directory structure.
>
> **[0:54](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=54)** This is where we have the choice to either install the very basic structure or to use the blog or the docs templates.
>
> **[1:03](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=63)** We could also use a third party to start the template, which is registered as a composer package and packagist, but we won't be doing that now.
>
> **[1:10](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=70)** In this course, we will be using the default blog templates.
>
> **[1:14](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=74)** Using a template is helpful because we will have a fully configured and designed site that is ready to be customized.
>
> **[1:21](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=81)** Let's see the preview of the blog template in the browser.
>
> **[1:24](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=84)** This is what it looks like.
>
> **[1:26](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=86)** And even if you don't like the design the blog comes with.
>
> **[1:29](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=89)** For now, it would be easier to customize it rather than start from scratch because we are learning.
>
> **[1:34](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=94)** But once you are comfortable with jigsaw and how it works, you'll find using the default scaffolding and using your own design much easier.
>
> **[1:42](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=102)** Back to the terminal let's run ./vendor/bin/jigsaw in it blog to initialize the blog start a template.
>
> **[1:53](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=113)** If we wanted to initialize the docs template, we would run ./vendor/bin/jigsaw in it docs instead,
>
> **[2:07](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=127)** Once this is done, it would be great to view the default site in the browser.
>
> **[2:12](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=132)** There are a few ways you can do that and you can use anything you are familiar with but in this course, I'm going to use the serve command that jigsaw comes with.
>
> **[2:20](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=140)** Let me show you how this works, run ./vendor/bin/jigsaw serve And now you'll be able to view your site at local hosts 8,000 in your browser.
>
> **[2:43](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=163)** You could also specify the port instead of using the default port 8,000 by passing --portflag at the end of the command.
>
> **[2:51](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=171)** For example, --port=8080.
>
> **[2:58](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=178)** Let's have a quick look in the browser and yes, the website is up and running using the port 8080 another way and I would say the better way is to use browser sync to preview your website.
>
> **[3:09](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=189)** Browser sync lets you watch for changes in your code and it will automatically reload the page every time you make a change.
>
> **[3:16](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=196)** So run browser sync, simply run NPM run watch.
>
> **[3:20](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=200)** I'm going to stop the serve command for now by pressing Control + C.
>
> **[3:26](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=206)** And I'm going to run NPM run watch.
>
> **[3:31](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=211)** By the way, make sure you have run NPM install first otherwise you'll get an error.
>
> **[3:37](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=217)** If you are using a template, NPM installed will have been run during the initialization process.
>
> **[3:42](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=222)** The reason I say this is the better way to preview your website especially during the development stages is that if you have used the serve command or Laravel Valet, you will need to run ./vendor/bin/jigsaw builds every single time you make a change to your code, otherwise your changes wouldn't show.
>
> **[4:03](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=243)** I cannot tell you how many times I was stuck not knowing why my changes were displaying simply because I forgot to run the build commands.
>
> **[4:11](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=251)** However, with browser sync you can forget about it.
>
> **[4:14](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=254)** It is being done behind the scenes.
>
> **[4:16](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=256)** Browser sync opens the website at different port to the serve command.
>
> **[4:20](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=260)** A port 3000 in my case, but it could be different for you.
>
> **[4:25](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=265)** As you can see, this default template comes with the search functionality, navigation, pages for the different design and structure and a contact form.
>
> **[4:37](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=277)** That's more than enough to get a simple blog started.
>
> **[4:40](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=280)** You could just update the content and deploy your website as this.
>
> **[4:44](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/installing-jigsaw?u=76281980&t=284)** But in the next chapter, we will look into how jigsaw works under the hood and how we can customize this template to suit our needs.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (5), composer (3), make (3), php (1), node (1)
> **Code Keywords:** let (5), module (1), require (1), case, (1), this. (1)
> **Exercise Files:** template (8)
> **Env Vars:** npm (4), php (1), css (1), api (1)
> **Prerequisites:** install (4), you need to have (1), make sure you have (1), initialization (1)
> **Ports:** port 8 (1), port 8080 (1), port 3000 (1)
> **Documentation:** the docs (2)
> **Tools:** terminal (2)

#### Challenge: Creating a new Jigsaw website
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-creating-a-new-jigsaw-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-creating-a-new-jigsaw-website?u=76281980&t=0)** - [Instructor] Welcome to the first challenge!
>
> **[0:07](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-creating-a-new-jigsaw-website?u=76281980&t=7)** In this challenge, I'm going to ask you to create a new Jigsaw website and call it anything you like: for example, hello-jigsaw.
>
> **[0:15](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-creating-a-new-jigsaw-website?u=76281980&t=15)** Make sure you first create a directory, then install Jigsaw and then initialize it.
>
> **[0:20](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-creating-a-new-jigsaw-website?u=76281980&t=20)** You can choose to initialize it with the blog template or you may want to try the docs template.
>
> **[0:25](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-creating-a-new-jigsaw-website?u=76281980&t=25)** It's up to you.
>
> **[0:26](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-creating-a-new-jigsaw-website?u=76281980&t=26)** If you are feeling brave, you might even go to [packagist.org](https://packagist.org) and look for some third-party Jigsaw templates.
>
> **[0:33](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-creating-a-new-jigsaw-website?u=76281980&t=33)** Make sure your website is showing in the browser and click around to get to know the layout and design.
>
> **[0:39](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-creating-a-new-jigsaw-website?u=76281980&t=39)** Good luck!
>
> **[0:40](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-creating-a-new-jigsaw-website?u=76281980&t=40)** And if you struggle, check out the next video to see how I did it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Exercise Files:** template (2)
> **URLs:** [packagist.org](https://packagist.org) (1)
> **Cross-References:** next video (1)
> **Documentation:** the docs (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)

#### Solution: Creating a new Jigsaw website
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=5)** - [Instructor] Welcome back!
>
> **[0:06](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=6)** How did it go?
>
> **[0:07](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=7)** Were you able to create a new jigsaw website?
>
> **[0:10](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=10)** Let me show you how I did it.
>
> **[0:12](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=12)** I need to create a new director in my terminal by running "mkdir hello-jigsaw".
>
> **[0:22](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=22)** Now, I'm going to "cd" into it and run "composer require tightenco/jigsaw".
>
> **[0:34](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=34)** I've decided to use the "docs" template, so I'm going to initialize it by running "./vendor/bin/jigsaw init docs".
>
> **[0:45](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=45)** Once this is done, I'll run "./vendor/bin/jigsaw serve" to serve my site in localhost:8000.
>
> **[1:01](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=61)** Let's see if it shows up in the browser.
>
> **[1:03](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=63)** And yes, it does.
>
> **[1:05](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=65)** Okay, let's see what this "docs" template comes with.
>
> **[1:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=68)** We have a landing page with some information about this template.
>
> **[1:14](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=74)** We also have a link to the "Get Started" page, which is basically the template for the documentation itself.
>
> **[1:19](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=79)** A sidebar, with quick links, and main content area on the right.
>
> **[1:29](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=89)** If I click through the links, I can see that the content is not just some fake filler content.
>
> **[1:34](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=94)** These are actual instructions of how to use this "docs" templates.
>
> **[1:38](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=98)** For example, how to customize the site or how the Algolia DocSearch tool works.
>
> **[1:47](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=107)** Very clever.
>
> **[1:50](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=110)** Well done for completing this challenge.
>
> **[1:52](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=112)** I hope you enjoyed it, and if you struggled, don't worry.
>
> **[1:55](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-creating-a-new-jigsaw-website?u=76281980&t=115)** You can always go back and re-watch the videos.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), require (1)
> **Exercise Files:** template (4)
> **CLI Commands:** mkdir (1), cd (1), composer (1)
> **URLs:** [localhost:8000](https://localhost:8000) (1)
> **Ports:** :8000 (1)
> **Documentation:** the documentation (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)


### 3. 2. Jigsaw Internals

#### File structure
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=0)** - Let's run NPM run watch to serve our websites.
>
> **[0:04](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=4)** Now that it's up and running, we are almost ready to learn how to add new content.
>
> **[0:14](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=14)** But before we do so let's have a quick look at the file structure in jigsaw.
>
> **[0:18](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=18)** Let's start from the top.
>
> **[0:20](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=20)** This build local directory is the directory that is being served during our local development.
>
> **[0:25](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=25)** If we look at our NPM run watch in the terminal, you can see at serving files from build local.
>
> **[0:36](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=36)** All content in this directory is the same as was inside the source directory but compiled.
>
> **[0:50](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=50)** When you start adding consent or customizing an existing content or design you do it inside the source directory.
>
> **[0:56](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=56)** It is only when you are ready to preview a website locally that you will need to build or rebuild the build local directory to see the changes in the browser.
>
> **[1:05](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=65)** If you think by the video about installing a jigsaw website, you might remember that I compared different ways to preview website locally.
>
> **[1:12](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=72)** And I said that using browser sync and NPM run watch is better for local development.
>
> **[1:18](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=78)** Now you see why.
>
> **[1:20](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=80)** If you want to be able to view your changes live, you will need this built local directory to be rebuilt every time you make a change.
>
> **[1:31](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=91)** If you use the serve command to preview a site, you'll also need to run the build command every single time.
>
> **[1:40](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=100)** However, if you use NPM run watch, it's built automatically.
>
> **[1:44](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=104)** It's also worth mentioning that if you use a template like jigsaws docs or block templates, the build local directory will be built during initialization stage.
>
> **[1:53](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=113)** However, if you don't use a template, the first time you viewed a code, this directory will not be there and you'll have to run the build command to build it.
>
> **[2:01](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=121)** Okay, let's continue.
>
> **[2:03](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=123)** This listener's directory has any PHP code that needs to run during a specific time of the built, for example, to generate the index or the site map of the websites.
>
> **[2:19](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=139)** You could also write the custom PHP code to for example, have a class to generate the estimated reading time and save it in this directory.
>
> **[2:28](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=148)** This node modules and vendor directories are directories that NPM and composer use to store third-party packages and dependencies,
>
> **[2:43](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=163)** and we don't have to worry about them.
>
> **[2:45](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=165)** Let's have a look at the source directory now.
>
> **[2:49](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=169)** Here, you'll see that it has various subdirectories and files.
>
> **[2:55](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=175)** The subdirectories that start with the underscore contain partial files.
>
> **[2:59](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=179)** For example, this underscore now directory includes partials for the menu, which you can then include elsewhere in your code.
>
> **[3:06](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=186)** If you look inside the layout, master.blade.PHP file, you can see that we include the nav menu online 42.
>
> **[3:18](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=198)** The source directory is where we will spend most of the time in the next video.
>
> **[3:22](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=202)** So for now, just know that it is here, where we at consent and customize the design of our jigsaw websites.
>
> **[3:29](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=209)** Let's have a look at these config files now.
>
> **[3:35](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=215)** These files are used to configure our website for different environments.
>
> **[3:39](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=219)** You might want to use different site variables depending on whether you are serving the production or the staging site.
>
> **[3:44](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=224)** Or you might choose not to include Google analytics in your staging environment, because it will skew your results.
>
> **[3:50](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=230)** For these reasons, jigsaw allow us to set up different configurations for different environments.
>
> **[3:55](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=235)** This base config file is the main config.
>
> **[3:58](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=238)** This is what will be used during active development and when you are using either the jigsaw serve, jigsaw built or NPM run watch commands.
>
> **[4:06](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=246)** It has various variables that we will get to know better later on in the course.
>
> **[4:11](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=251)** However, notice these two files, config.production.php and config.staging.php.
>
> **[4:18](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=258)** You can add anything specific to either your production or your staging environment to these files and when you do, they will override what is in the base config.php file.
>
> **[4:29](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=269)** For example, let's say that the title of your website is hello jigsaw as a default, but for staging, we want to call it hello jigsaw staging.
>
> **[4:39](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=279)** You would simply take this site name variable and give it a appropriate value in the config.staging.php file.
>
> **[4:47](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=287)** When your needed to build your website for staging, run the jigsaw build staging or NPM run staging commands, and when your needed to build your website for production, run jigsaw.production, or NPM run production command instead.
>
> **[5:03](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=303)** These commands will build the build staging and build production directories that will be served by our server.
>
> **[5:09](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=309)** Let's build a staging directory as an example.
>
> **[5:12](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=312)** In the terminal, I'll open another tab so that I can keep the NPM run watch command running.
>
> **[5:18](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=318)** Now ill run the jigsaw build staging command, and wait for the process to finish.
>
> **[5:26](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=326)** You could also run the NPM run staging command here.
>
> **[5:29](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=329)** And here is our newly created, built staging directory.
>
> **[5:33](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=333)** If I run the serve staging command now, jigsaw will build a directory and start serving it on local host 8,000.
>
> **[5:40](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=340)** As you can see, I have two versions of my website running now, the development one on local host 3000 and the staging version on local host 8,000.
>
> **[5:50](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=350)** And as you can see, the site name differs, the default site name is hello jigsaw while the staging version is hello jigsaw staging.
>
> **[5:58](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=358)** I'm going to stop serving the staging site now and let's move on.
>
> **[6:02](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=362)** Let's go back to the code.
>
> **[6:03](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=363)** Finally, here we have the tailwind.config.js file that contains all of tailwinds CSS configuration for our websites.
>
> **[6:11](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=371)** You can update this file or generate a new one with your own customization.
>
> **[6:15](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=375)** Just follow the tailwind documentation for detailed instructions.
>
> **[6:19](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=379)** And here's the webpack.mix.js file that has jigsaws mix configuration.
>
> **[6:25](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=385)** This will work just fine out of the box.
>
> **[6:27](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=387)** You don't need to do anything here unless you change the source directory, or for example, rename or move some directories and files.
>
> **[6:35](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=395)** We won't be doing that so we don't need to do anything in this file.
>
> **[6:38](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=398)** This has been a quick overview of the jigsaws directory structure.
>
> **[6:42](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=402)** You will become even more familiar with it as we work through the course.
>
> **[6:45](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/file-structure?u=76281980&t=405)** And in the next video, we will finally look into adding some new content.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (10), php (7), make (1), node (1), composer (1)
> **Code Keywords:** let (10), continue (1), override (1), default, (1), finally, (1)
> **Env Vars:** npm (10), php (3), css (1)
> **File Paths:** config.staging.php (2), master.blade.php (1), config.production.php (1), config.php (1), tailwind.config.js (1)
> **Analogies:** for example (5)
> **Cross-References:** in the next (2), go back to (1)
> **Prerequisites:** initialization (1), configure (1), set up (1)
> **Tools:** terminal (2)

#### Source directory
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=0)** - [Instructor] Let's have a closer look at the "source" directory, since this is where we will be spending most of our time when building a Jigsaw website.
>
> **[0:07](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=7)** As mentioned in the previous video, all content will be stored in the "source" directory.
>
> **[0:11](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=11)** This is the working directory.
>
> **[0:13](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=13)** Once we are ready to build the website, the content will also be stored in the "build_local", "build_staging", or "build_production" directories.
>
> **[0:21](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=21)** First, a few words about the kind of files you can use in Jigsaw.
>
> **[0:25](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=25)** Jigsaw allows us to add content in various formats.
>
> **[0:28](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=28)** We can use Laravel's Blade templating language.
>
> **[0:31](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=31)** We can use Markdown, or some Blade-Markdown hybrid.
>
> **[0:35](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=35)** We can also use other, non-HTML files, and pass them through Blade to be processed.
>
> **[0:40](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=40)** For example, a JavaScript file with an extension ".blade.js", or a JSON file with the extension ".blade.json".
>
> **[0:48](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=48)** Once a file is processed by Blade, the final output file will keep its file type extension, so it would be ".js" or ".json".
>
> **[0:57](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=57)** And, you can use a variety of other file types, too.
>
> **[1:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=60)** One of the reasons Jigsaw is popular with Laravel developers is because it's using Blade.
>
> **[1:05](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=65)** So if you are a Laravel developer, chances are you are comfortable with Blade.
>
> **[1:09](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=69)** Thanks to Blade, we can create reusable layouts and partials.
>
> **[1:13](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=73)** Here, we have the basic pages the "blog" template comes with: the 404 page, the about page, the blog page, the contact page, and the index page, which is the landing page of the blog.
>
> **[1:25](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=85)** Looking through this index page, this is where the "featured" blog section is, here is the "newsletter-signup" partial, and here are the other posts that don't have the "featured" tag.
>
> **[1:38](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=98)** Whether the post is "featured" or not is defined here, in the individual post's formatter.
>
> **[1:43](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=103)** Let's have a look at the "getting-started.md".
>
> **[1:46](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=106)** If a post isn't "featured", we can either say that "featured" is false, or we can leave the "featured" variable out altogether.
>
> **[1:54](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=114)** But this post, "Getting Started," is featured.
>
> **[1:58](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=118)** Let's go over the other subdirectories inside the "source" directory, now.
>
> **[2:02](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=122)** Just note that what you currently see is the structure of the director as defined by the "blog" template.
>
> **[2:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=128)** When you installed the "docs" template, or if you just initialize the default Jigsaw build, it will be slightly different.
>
> **[2:15](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=135)** As you can see, there are two assets directories, one with an underscore, and one without.
>
> **[2:21](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=141)** This is because any assets we want to process with Mix should live inside this "_assets" directory.
>
> **[2:27](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=147)** For example, any JavaScript that we want to compile, or any Sass that we want to compile into CSS.
>
> **[2:35](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=155)** Once Mix compiles the files, it will place them into corresponding directories inside the "assets" directory, the one without the underscore.
>
> **[2:43](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=163)** So if you look at the CSS directory, inside the "_assets" directory, we can see that in the "main.css", all we have is the Tailwind import statements.
>
> **[2:52](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=172)** And if you look in the "assets", without underscore, look into "build/css/main.css", here we have the compiled CSS file.
>
> **[3:04](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=184)** And it is this directory which will be copied to "build_local" or "build_production" directories when the website is built.
>
> **[3:11](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=191)** So the rule is: Put any assets inside the "_assets" directory, and Mix will take care of the rest.
>
> **[3:17](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=197)** By the way, to compile our assets, we will need to run "npm run dev", but since we are running "npm run watch", our assets are being compiled on-the-fly.
>
> **[3:27](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=207)** And if you ever need to change the location of the assets, remember to update the webpack file too.
>
> **[3:35](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=215)** The "_categories" directory contains the Markdown files for each of our blog's categories, what layout a category extends, its title, and description.
>
> **[3:46](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=226)** This template came with two categories, the "configuration" category and the "feature" category.
>
> **[3:52](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=232)** The "_components" directory contains the various components the "blog" template comes with: the "newsletter-signup" form, the "post-as-rss-item", and the "post-preview-inline" components.
>
> **[4:04](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=244)** The "newsletter-signup" form is being used in the "index.blade.php" file, down here on line 32.
>
> **[4:12](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=252)** "_layout" is the next directory.
>
> **[4:15](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=255)** Here, we have various layouts that the "blog" template comes with.
>
> **[4:18](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=258)** Jigsaw provides us with a basic "master" layout.
>
> **[4:21](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=261)** As you can see, we have two layouts here, "main.blade.php" and "master.blade.php".
>
> **[4:28](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=268)** The reason is that this "main" layout is what the default Jigsaw installation comes with, while this "master" layout is what the "blog" template comes with.
>
> **[4:37](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=277)** You can use either of these two, or delete them and create your own one.
>
> **[4:41](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=281)** Either way, the body of the website will be rendered here, thanks to this yield call.
>
> **[4:46](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=286)** Both of these templates have it.
>
> **[4:49](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=289)** The "layouts" directory also comes with other templates: one for a category, one for a post, and one for an RSS page.
>
> **[4:57](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=297)** The "_nav" directory contains various menu partials, and the "_posts" directory has the published posts.
>
> **[5:05](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=305)** Once you start working on your own content, you'll want to delete these default posts and create your own.
>
> **[5:11](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=311)** As you can see some directories contain mainly Blade files, for example, this "layouts" directory, while others contain mainly Markdown files, for example, this "posts" directory.
>
> **[5:23](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=323)** It depends on you, which follow format you prefer to use.
>
> **[5:27](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=327)** In general, I would use Blade for files used to structure the website, and Markdown for files that mainly have content.
>
> **[5:34](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/source-directory?u=76281980&t=334)** Remember, you can create as many directories as you need to keep your content organized, and you can either customize what the "blog" template comes with, or create your own templates and partials.

> [!info]- Semantic Content
>
> **File Paths:** blade.js (1), blade.json (1), getting-started.md (1), main.css (1), build/css/main.css (1)
> **Code Keywords:** let (3), delete (2), pass (1), extends (1), yield (1)
> **Exercise Files:** template (8)
> **Env Vars:** css (3), html (1), json (1), rss (1)
> **CLI Commands:** php (3), npm (2)
> **Code Identifiers:** build_local (2), build_production (2), build_staging (1)
> **Analogies:** for example (4)
> **Cross-References:** previous video (1)

#### Adding content to a Jigsaw website
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=0)** - Enough of the theory and let's create some content now.
>
> **[0:03](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=3)** I'm going to create a new post by creating a new markdown file inside the post directory.
>
> **[0:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=8)** Let's give it a name, hello-world.md, and add the Yama front matter.
>
> **[0:14](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=14)** The front matter is the section on the top of the file, where we would find the values to the various variables that will be used on the page. For example, if you look at the gettingstarted.md file, we can see that this post will extend the post partial, which is inside the layouts directory.
>
> **[0:30](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=30)** And the section is called content.
>
> **[0:32](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=32)** Let's open the partial quickly and find the section.
>
> **[0:37](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=37)** And here it is on line 27.
>
> **[0:40](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=40)** We also have the title of the post, the date, the description, the cover image, whether this post is featured or not, and what categories it belongs to.
>
> **[0:49](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=49)** One really interesting fact is that this Yama front matter can be used in blade files too, not just in markdown.
>
> **[0:56](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=56)** So if you create your content using blade, instead of markdown, you still have access to the front matter and you can use the key value pairs defined there.
>
> **[1:04](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=64)** I'm going to copy the front matter of this getting started post and customize the values for our hello world post.
>
> **[1:12](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=72)** I can also add some custom variables.
>
> **[1:15](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=75)** Let's say I want to include an old text for the image.
>
> **[1:18](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=78)** I'll create an old variable and give it some value.
>
> **[1:21](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=81)** Now, in order to actually render this old text, I'll need to go to the layout file and find a code that displays the image. Right here, on line nine.
>
> **[1:30](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=90)** In here, I can see that by default, the old texts will be the same as the title of the page with the words, cover image appended.
>
> **[1:39](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=99)** To have jigsaw render the actual out value we added to the front matter, we need to change this line and use the dollar sign page variable with the out key instead, and delete the cover image words.
>
> **[1:52](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=112)** Let's go back to the hello world post and add some short content. Just tell the world, how are you?
>
> **[2:01](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=121)** I'm also going to update the title, the date, and the description of the post.
>
> **[2:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=128)** Let's see if the post has been created in the browser.
>
> **[2:11](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=131)** I'm going to open the website in Chrome for now, just to use the deaf tools, which you might be familiar with.
>
> **[2:17](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=137)** To inspect it all to text over the image.
>
> **[2:19](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=139)** And yes, it's here.
>
> **[2:20](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=140)** Cover image just as to be described in the front matter of the hello world post.
>
> **[2:25](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=145)** If I quickly change it to something else, for example, hello world, and refresh the page.
>
> **[2:30](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=150)** You will see that the old text has been updated too.
>
> **[2:36](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=156)** One word of caution.
>
> **[2:38](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=158)** Sometimes you might actually need to restart your watch process for mix to pick up the newly created file.
>
> **[2:43](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=163)** Jigsaw is using the Laravel mixed jigsaw plugin, which watches the sides files and triggers a new build when it detects changes.
>
> **[2:51](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=171)** However, this plugin cannot detect the creation of new files that are immediately inside the source directory. For example, if you created another file on the same level as is this 404.blade.php file.
>
> **[3:05](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=185)** In this case, you will need to restart mix by running NPM run watch again.
>
> **[3:10](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=190)** Okay, now that you know how to create a new page and how to change an existing layout, you can do pretty much anything.
>
> **[3:17](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/adding-content-to-a-jigsaw-website?u=76281980&t=197)** You can structure the content the way you like, organize it in various directories, create custom variables, categories, use blade files to build a structure and design of the page, and use markdown files to populate the page with content.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), default, (1), delete (1), else, (1), case, (1)
> **CLI Commands:** find (3), php (1), npm (1)
> **File Paths:** hello-world.md (1), gettingstarted.md (1), 404.blade.php (1)
> **UI Navigation:** open the (2), go to (1)
> **Analogies:** for example (3)
> **Env Vars:** npm (1)
> **Cross-References:** go back to (1)
> **Definitions:** is called (1)

#### Collections in Jigsaw
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=0)** - Collections allow us to do with groups of similar content, content that shares common features, Common templates, things that can be sorted and filtered.
>
> **[0:09](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=9)** collections are defined inside a configured PHP file, inside an array named collections.
>
> **[0:14](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=14)** If we have a look inside the file, we can see that the block template comes with two collections. Posts and categories.
>
> **[0:22](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=22)** The name of the collection is typically plural.
>
> **[0:24](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=24)** So not post but posts.
>
> **[0:26](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=26)** And it can have an array of settings.
>
> **[0:28](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=28)** The way you code the collection is important because jigsaw over look for a directory of the same name, preceded by an underscore.
>
> **[0:34](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=34)** So in our case, underscore posts or underscore categories inside the source directory.
>
> **[0:40](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=40)** If you'll get the posts collection, it defines the default author, the way the collection is sorted, and the path to the individual collection item.
>
> **[0:48](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=48)** The default path setting for a file, would have two parts.
>
> **[0:51](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=51)** The first part would be the name of the collection.
>
> **[0:53](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=53)** And the second would be the final name.
>
> **[0:55](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=55)** All lowercase, words separated by dashes.
>
> **[0:59](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=59)** But if you wanted to customize the collection path, you can do it right here.
>
> **[1:03](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=63)** As you can see here, the path includes block, not post, which is the collection name.
>
> **[1:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=68)** And instead of file name, you could include title in the path instead.
>
> **[1:13](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=73)** By default, if the path has multiple words, they will be separated by dashes.
>
> **[1:18](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=78)** Let's check it out in the browser.
>
> **[1:20](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=80)** Opened the website, go to the block section, and yes, the path on individual posts is separated by dashes.
>
> **[1:28](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=88)** But if you wanted to separate them by underscores, you would add it to the file name inside the curly braces.
>
> **[1:33](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=93)** For example, underscore file name.
>
> **[1:36](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=96)** Let's see it in the browser again.
>
> **[1:38](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=98)** And if I refresh the same page, you'll see that I get an error, cannot get this post.
>
> **[1:43](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=103)** I'll go back to the book section, refresh the page and click on the post again.
>
> **[1:47](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=107)** And this time it works and the path is separated by an underscore.
>
> **[1:53](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=113)** Now what about (indistinct)? We can control the order in which collection items are sorted on the page.
>
> **[1:59](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=119)** By default, the items will be sorted by the file name, in an ascending order.
>
> **[2:04](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=124)** In the case of this template, the posts are sorted according to the date.
>
> **[2:09](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=129)** But what is this dash here?
>
> **[2:11](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=131)** This dash tells jigsaw that we want to sort items by date, but not in an ascending order, but in a descending order, let's remove the dash and see what happens on the block page.
>
> **[2:23](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=143)** As you can see, the posts are now sorted but the oldest post first.
>
> **[2:29](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=149)** I'll add the dash back and refresh the page.
>
> **[2:31](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=151)** And the posts are sorted with the newest one first now.
>
> **[2:35](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=155)** Let's have a look at filtering now.
>
> **[2:37](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=157)** To add a filter functionality, we simply need to add another key to the collections array in the configured PHP file.
>
> **[2:43](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=163)** We need to specify a function that will accept a collection item and return either true or false.
>
> **[2:49](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=169)** If the code does returns true, the item will be built and displayed on the website.
>
> **[2:54](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=174)** And if false it will not.
>
> **[2:58](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=178)** A common used case, is to own a display published posts based on whether the variable published in the post front matter is set to true or false.
>
> **[3:06](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=186)** Let's implement it now.
>
> **[3:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=188)** I'll add a new key filter and return a function which accepts an item and only the returns items that are published.
>
> **[3:16](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=196)** Now I'll go to a couple of our posts, they getting started and the hello word post.
>
> **[3:20](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=200)** and add the published variable to their front matter.
>
> **[3:24](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=204)** Set that to true, safe and check our block page.
>
> **[3:31](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=211)** And now we only see these two posts.
>
> **[3:33](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=213)** As you can see, collections are a powerful concept.
>
> **[3:36](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=216)** There is so much magic so let's us do with collections.
>
> **[3:39](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=219)** for example, map over them, or use remote collections.
>
> **[3:42](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=222)** That will allow us to fetch consent from a remote source.
>
> **[3:45](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=225)** Such as an external API, or some API based content management system.
>
> **[3:50](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/collections-in-jigsaw?u=76281980&t=230)** Check out the official jigsaw documentation for more details.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (2), default, (2), function (2)
> **Env Vars:** php (2), api (2)
> **UI Navigation:** go to (2), click on (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** php (2)
> **Exercise Files:** template (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** getting started (1)

#### Event listeners in Jigsaw
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/event-listeners-in-jigsaw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/event-listeners-in-jigsaw?u=76281980&t=0)** - Another exciting feature that you saw first is the different way we can hook into various points of the build by using Event Listeners.
>
> **[0:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/event-listeners-in-jigsaw?u=76281980&t=8)** Event Listeners is a PHP callable, which expects to be passed into an event.
>
> **[0:13](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/event-listeners-in-jigsaw?u=76281980&t=13)** Jigsaw provides three events we can hook into with our custom code.
>
> **[0:17](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/event-listeners-in-jigsaw?u=76281980&t=17)** The beforeBuild event is fired before any source file have been processed.
>
> **[0:21](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/event-listeners-in-jigsaw?u=76281980&t=21)** The afterCollection event is fired after any collection have been processed, but before any output files have been built.
>
> **[0:28](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/event-listeners-in-jigsaw?u=76281980&t=28)** And the afterBuild event is fired after the collection is complete and all output files have been written to the build directory.
>
> **[0:36](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/event-listeners-in-jigsaw?u=76281980&t=36)** Every event listener must be registered inside the Bootstrap.PHP file.
>
> **[0:41](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/event-listeners-in-jigsaw?u=76281980&t=41)** As you can see, we have two listeners already registered in this block template.
>
> **[0:45](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/event-listeners-in-jigsaw?u=76281980&t=45)** The generator index listener, it chooses the afterBuild hook, which takes the post collection, takes the title, category link, and snippet of each post, and engine rate and index the chasing file of the post.
>
> **[0:58](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/event-listeners-in-jigsaw?u=76281980&t=58)** The second listener is the generate sitemap listener which also uses the afterBuild hook to create the website's site map.
>
> **[1:06](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/event-listeners-in-jigsaw?u=76281980&t=66)** However, there are many other listeners we can create.
>
> **[1:09](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/event-listeners-in-jigsaw?u=76281980&t=69)** A popular use case is to create an event listener that would use the afterCollection hook to generate the estimated reading time, or a listener to process images, minify html, or basically any action we may want to do at various points of the build process.
>
> **[1:25](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/event-listeners-in-jigsaw?u=76281980&t=85)** If you want to learn more about Event Listeners, check out the Jigsaw Documentation.
>
> **[1:29](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/event-listeners-in-jigsaw?u=76281980&t=89)** You'll also be able to find a list of Helper Methods available to each event listener.

> [!info]- Semantic Content
>
> **Code Identifiers:** afterbuild (3), aftercollection (2), beforebuild (1)
> **CLI Commands:** php (2), find (1)
> **Env Vars:** php (2)
> **File Paths:** bootstrap.php (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - another (1)

#### Challenge: Adding content and customizing Jigsaw
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-adding-content-and-customizing-jigsaw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-adding-content-and-customizing-jigsaw?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:05](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-adding-content-and-customizing-jigsaw?u=76281980&t=5)** - [Instructor] Welcome to our next challenge.
>
> **[0:07](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-adding-content-and-customizing-jigsaw?u=76281980&t=7)** In this challenge, I'm going to ask you to create a new page in your Hello Jigsaw project that you created last time.
>
> **[0:14](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-adding-content-and-customizing-jigsaw?u=76281980&t=14)** Create an about page with some content about yourself or the website you are creating.
>
> **[0:19](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-adding-content-and-customizing-jigsaw?u=76281980&t=19)** Add it to the navigation menu, and make sure you can visit a page in the browser.
>
> **[0:23](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-adding-content-and-customizing-jigsaw?u=76281980&t=23)** Next, see that you can customize the style of the page.
>
> **[0:26](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-adding-content-and-customizing-jigsaw?u=76281980&t=26)** If you are using a template, the website will be designed for you.
>
> **[0:30](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-adding-content-and-customizing-jigsaw?u=76281980&t=30)** But what about changing the background color over the page, or maybe changing the color of a button?
>
> **[0:35](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-adding-content-and-customizing-jigsaw?u=76281980&t=35)** Jigsaw is using Tailwind CSS.
>
> **[0:37](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-adding-content-and-customizing-jigsaw?u=76281980&t=37)** So if you need help with Tailwind CSS classes, check out the documentation.
>
> **[0:42](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-adding-content-and-customizing-jigsaw?u=76281980&t=42)** Have fun and don't worry if you struggle.
>
> **[0:44](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-adding-content-and-customizing-jigsaw?u=76281980&t=44)** You can always go back and watch the video again, or simply follow along with me in the next video, where I will show you how I would solve this challenge.
>
> **[0:53](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-adding-content-and-customizing-jigsaw?u=76281980&t=53)** See you there.

> [!info]- Semantic Content
>
> **Env Vars:** css (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat instrumental music) (1)

#### Solution: Adding content and customizing Jigsaw
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=0)** - [Instructor] So, how did it go?
>
> **[0:07](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=7)** Did you manage to create a new page, add it to the navigation and make some changes to the style of the website?
>
> **[0:13](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=13)** This is how I did it.
>
> **[0:14](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=14)** Here is my Jigsaw project open in the text editor.
>
> **[0:18](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=18)** Because the "about page" will be a top-level page, I'll create a Markdown file in the source directory.
>
> **[0:23](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=23)** I could have created a Blade file too, but I chose Markdown in this instance.
>
> **[0:35](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=35)** I'm going to copy the front method from another file.
>
> **[0:37](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=37)** For example, this "getting started with MD" one inside the docs directory.
>
> **[0:45](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=45)** I'm going to change the title to "about" and the description to "about me."
>
> **[0:55](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=55)** Now, which layout should this page extend?
>
> **[0:58](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=58)** There are three layouts to choose from unless I want to create another one, which I don't.
>
> **[1:06](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=66)** The master layout is the one extended by the index page so let's see what the "about page" would look like if I use this one.
>
> **[1:18](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=78)** I can always change it later.
>
> **[1:20](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=80)** So the page will extend the master layout and the section will be "body" because this is what the section is called in the master layout on line 64.
>
> **[1:33](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=93)** I'll also add some content.
>
> **[1:35](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=95)** For now, just a simple "Hello!" will do.
>
> **[1:40](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=100)** I'm going to save the file and see if I can display it in the browser.
>
> **[1:44](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=104)** Since the lot of our Mix-Jigsaw plugin doesn't register newly created files inside the source directory, I'm going to have to restart the npm brandwatch process.
>
> **[1:56](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=116)** I haven't added it to the navigation yet, but the page should be accessible at the /about URL.
>
> **[2:03](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=123)** And here it is, it's not pretty though.
>
> **[2:05](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=125)** So I think I'm going to change the layout.
>
> **[2:07](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=127)** The page "extends" to the "documentation" one.
>
> **[2:14](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=134)** Back in the code, I'll change this line and the section is now called "content" as you can see here in the layout.
>
> **[2:26](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=146)** I'm going to save it and see the page in the browser again.
>
> **[2:30](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=150)** Okay. I think I like this a bit better.
>
> **[2:33](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=153)** I think I could add the link to the sidebar navigation right above the Jigsaw Docs navigation item.
>
> **[2:39](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=159)** Before I do that, let's just see what the Docs here say.
>
> **[2:42](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=162)** It's really clever how the default concept of the Docs Template is the Docs Documentation.
>
> **[2:47](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=167)** It says that the menu is defined in certain array in the navigation.php file.
>
> **[2:58](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=178)** So I'm going to open this file and add my "about" page there.
>
> **[3:01](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=181)** I don't want to add it to the "children" array, because that would look like this page is another documentation page, when in fact it's a top level page.
>
> **[3:17](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=197)** The key will be "about" and the value will be "another array" with a key "url" and the value "/about" Now, for the link to actually show in the navigation, I will have to restart the npm brandwatch or build the website by running the Jigsaw bill command because the navigation.php file isn't being tracked by Mix.
>
> **[3:40](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=220)** I can tell by looking in the webpack.mix.js file, the Jigsaw-Mix plugin is only watching the config and the files inside the source directory.
>
> **[3:55](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=235)** I could either add a navigation.php file in this array of files to "watch" or just rebuild the website.
>
> **[4:02](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=242)** And this is what I'm going to do now.
>
> **[4:04](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=244)** Stop "npm run watch" and start it again.
>
> **[4:11](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=251)** I'm going to refresh the page and see if the link appears in the navigation.
>
> **[4:16](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=256)** And here it is.
>
> **[4:18](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=258)** I'll click on it and again, yes it works.
>
> **[4:23](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=263)** The last thing I asked you to do is to change the style of the website.
>
> **[4:26](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=266)** For example, by giving the "learning" page a different background color, or changing the color of the button.
>
> **[4:36](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=276)** To do that, I'll go to the master layout.
>
> **[4:38](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=278)** And here in the body, I'll change the BG value from "gray" to "green."
>
> **[4:50](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=290)** Let's see it in the browser.
>
> **[4:53](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=293)** Okay. I think that looks okay.
>
> **[4:56](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=296)** Let's change the color of the button too.
>
> **[4:58](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=298)** I'm going to find the "get started" button, which will be in the index.by.php file.
>
> **[5:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=308)** And here it is on line 14.
>
> **[5:11](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=311)** I'll change the BG value to "green" and I'll also change the hover value too.
>
> **[5:19](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=319)** Save and check it in the browser.
>
> **[5:21](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=321)** And yes, it worked.
>
> **[5:23](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=323)** The button is green.
>
> **[5:25](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=325)** That's it for this challenge.
>
> **[5:26](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=326)** I hope you enjoyed it and if you struggled, don't worry.
>
> **[5:29](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=329)** We covered a lot of new things in this chapter.
>
> **[5:32](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-adding-content-and-customizing-jigsaw?u=76281980&t=332)** Well done for all your hard work.

> [!info]- Semantic Content
>
> **CLI Commands:** php (4), npm (3), make (1), find (1)
> **File Paths:** navigation.php (3), webpack.mix.js (1), index.by.php (1)
> **Code Keywords:** let (4), extends (1)
> **Documentation:** the docs (4)
> **UI Navigation:** click on (1), go to (1)
> **Analogies:** for example (2)
> **Env Vars:** url (1)
> **Cross-References:** we covered (1)


### 4. 3. Deploying Jigsaw on Netlify

#### Netlify introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=0)** - Deploying a static degenerated site could not be easier.
>
> **[0:04](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=4)** There are many free services that allow us to deploy a Jigsaw project for free such as Vercel, GitHub Pages or Netlify.
>
> **[0:13](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=13)** In this course, we will deploy a Jigsaw site using Netlify.
>
> **[0:17](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=17)** Netlify is a popular service that makes deploying static site effortless.
>
> **[0:21](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=21)** It's a really useful service and a great one to have your technical knowledge toolbox.
>
> **[0:27](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=27)** Netlify is a cloud computing company that offers hosting and serverless backend services.
>
> **[0:32](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=32)** It offers a very streamlined way to host and deploy your projects, and once it's up, you can pretty much forget about it.
>
> **[0:40](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=40)** To explore Netlify, let's create a new account first.
>
> **[0:44](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=44)** You can sign up at any of the following options, GitHub, GitLab, BitBucket or email.
>
> **[0:50](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=50)** For the purposes of this course, we will sign up using it GitHub.
>
> **[0:53](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=53)** You will need to sign in to a GitHub account first or create a new one if you don't have one yet.
>
> **[0:59](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=59)** Once you click on the sign up link, you will need to authorize Netlify to access your GitHub account.
>
> **[1:05](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=65)** I have already done it, but you should just click authorize and that's it.
>
> **[1:09](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=69)** Once done, you can log in to Netlify using your GitHub credentials.
>
> **[1:14](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=74)** If this is your first time on Netlify, Netlify will ask you a series of questions to personalize your account such as your name, your team, what you will use Netlify for, and so on.
>
> **[1:25](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=85)** Choose whatever is appropriate for you and click setup and continue.
>
> **[1:29](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=89)** You might also be welcomed by the quickstart guide modal, which you can either go through or close.
>
> **[1:35](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=95)** This is the Netlify dashboard where you have a quick overview of all the sites you are hosting on Netlify.
>
> **[1:41](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=101)** Since this is a brand new account, there are no sites at the moment.
>
> **[1:45](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=105)** You can click through the navigation to learn more about Netlify, but you don't need to change anything anywhere right now.
>
> **[1:53](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=113)** Your account is already ready to start hosting static sites.
>
> **[1:56](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=116)** It might be interesting to explore the plugins Netlify offers to add an extra functionality to your site, but this is beyond the scope of this course.
>
> **[2:04](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=124)** And that's it for now.
>
> **[2:06](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/netlify-introduction?u=76281980&t=126)** You have your Netlify account ready, and in the next video, we will walk through the linking a new site from GitHub and deploying it.

> [!info]- Semantic Content
>
> **Tools:** github (7), gitlab (1), bitbucket (1)
> **Code Keywords:** static (3), let (1), for, (1), continue (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** setup (1)
> **Speakers:** - deploying (1)

#### Uploading Jigsaw website to GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=0)** - [Tutor] Now that we have a Netlify account set up, we are ready to upload our project to GitHub.
>
> **[0:05](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=5)** There are many fantastic Git tutorials in the LinkedIn learning library, so I won't spend too much time explaining what it is and how to use it.
>
> **[0:12](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=12)** Feel free to visit any of these tutorials, if you need to learn more or just to refresh your knowledge.
>
> **[0:18](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=18)** To get started we need to initialize Git inside our projects directory.
>
> **[0:22](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=22)** You will need to run git init in the terminal.
>
> **[0:24](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=24)** Just make sure you are inside the right directory, my blog.
>
> **[0:28](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=28)** As you can see, Git has provided some useful hints.
>
> **[0:31](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=31)** Feel free to read through them.
>
> **[0:33](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=33)** Next step is to add all of our files to be tracked by Git.
>
> **[0:36](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=36)** Run git add dot in the terminal.
>
> **[0:39](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=39)** You can run git status to see that Git has added all of our project files to be tracked and yes it has.
>
> **[0:47](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=47)** Next, we need to commit these files and give them some descriptive comic message.
>
> **[0:52](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=52)** In the real world scenario, you would have initialized Git right at the beginning of your project and you would probably commit your work throughout.
>
> **[0:58](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=58)** In our case, we will commit everything all at once and give it a commit message, ready to deploy, by running, git commit dash M ready to deploy.
>
> **[1:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=68)** Before we can commit all of our files to GitHub, we need to go and create a new repository.
>
> **[1:13](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=73)** Let's go to [github.com](https://github.com), login and go to create a new repository.
>
> **[1:18](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=78)** Let's give it a name, jigsaw blog.
>
> **[1:21](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=81)** We can make it public or private, it doesn't matter in this case.
>
> **[1:24](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=84)** Let's not initialize the repository with README or gitignore, because we already have a READMEA and gitignore in our project files.
>
> **[1:31](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=91)** Let's just click create repository.
>
> **[1:34](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=94)** We will need to add origin to our local repository so that Git knows where to push our code to because we already have the repositor locally, we will follow these steps.
>
> **[1:43](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=103)** I'm just going to copy this line and paste it in the terminal.
>
> **[1:49](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=109)** You may also want to change the name of domain branch from master to main or anything else you prefer.
>
> **[1:54](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=114)** To do that in our terminal we will type, git branch dash capital M main.
>
> **[1:59](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=119)** As you can see, the name of the branch has changed from master to main.
>
> **[2:03](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=123)** And finally, we can run git push dash U origin main.
>
> **[2:07](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=127)** The dash U you flag, just sets the upstream of the current local branch and it only needs to be done once.
>
> **[2:13](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=133)** After this, every time we want to push changes via Git, you just say, git push origin main or git push.
>
> **[2:21](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=141)** Let's check our online repository now.
>
> **[2:23](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=143)** If I refresh the page, I can see that the code is there.
>
> **[2:26](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=146)** Fantastic.
>
> **[2:27](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/uploading-jigsaw-website-to-github?u=76281980&t=147)** This means we have everything ready to deploy our project to Netlify.

> [!info]- Semantic Content
>
> **CLI Commands:** git (16), make (2)
> **Code Keywords:** let (5), case, (1), public (1), private (1), case. (1)
> **Tools:** terminal (4), github (3)
> **Env Vars:** readme (1), readmea (1)
> **UI Navigation:** go to (2)
> **URLs:** [github.com](https://github.com) (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [tutor] (1)

#### Deploying Jigsaw website to Netlify
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=0)** - [Instructor] We have done all this work to prepare our project to be deployed to Netlify.
>
> **[0:04](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=4)** The files are in GitHub, our Netlify account is ready, so let's do it.
>
> **[0:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=8)** From our Netlify dashboard, click on new site from Git.
>
> **[0:12](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=12)** Next we need to choose our Git provider which is GitHub, and then select the correct repository.
>
> **[0:19](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=19)** The branch is main.
>
> **[0:21](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=21)** The build command will be npm run prod and the publish directory will be build_production.
>
> **[0:28](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=28)** You might wonder why is this build command npm run prod?
>
> **[0:33](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=33)** If you remember early in the course, I said it before we can view our website, we need to build it by running ./vendor/bin/jigsaw build staging or build production.
>
> **[0:46](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=46)** This command will create the build_staging or the build_production directory, which will then be deployed.
>
> **[0:53](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=53)** So here, instead of us doing it manually, every time we want to deploy our site to Netlify, we are telling Netlify to run this command for us.
>
> **[1:01](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=61)** Very convenient.
>
> **[1:03](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=63)** Now we need to click on show advanced and add a key PHP version with the value 7.4.
>
> **[1:10](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=70)** And, we are finally ready to click deploy site.
>
> **[1:14](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=74)** As you can see in this site overview section, the deployment is in progress.
>
> **[1:19](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=79)** You can click on this deploy tab and click on this link to see the details of the deploy.
>
> **[1:25](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=85)** The process doesn't take long at all, especially since our website is very small.
>
> **[1:30](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=90)** Once it's finished Netlify will display the published flag and it will give us some provisional URL.
>
> **[1:37](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=97)** Let's click on it.
>
> **[1:38](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=98)** And here's our website publicly accessible to everyone.
>
> **[1:42](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=102)** Netlify's domain is not great though, but you can easily set up a custom domain.
>
> **[1:46](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=106)** All you need to do is buy a domain, go to the site overview tab, click on domain settings and click on add custom domain.
>
> **[1:57](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=117)** Netlify will take you through some steps and automatically configure DNS settings for you, and tell you if there's anything else you need to do.
>
> **[2:04](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=124)** The documentation is really quite good.
>
> **[2:07](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=127)** We have just covered how to set up a book process in a Netlify user interface.
>
> **[2:11](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=131)** However, there's another way to do it.
>
> **[2:13](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=133)** A way some of you may find easier.
>
> **[2:15](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=135)** Instead of filling out the build command, publish directory and advanced setting on Netlify, we can just create a Netlify.toml file inside our project's root directory and add a few commands there.
>
> **[2:26](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=146)** Let's head back to the text editor and do it together.
>
> **[2:29](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=149)** I'll create a new file called Netlify.toml, and inside, I'll add the following code.
>
> **[2:40](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=160)** You don't need to add the build command, which directory we are publishing, in this case, the build production one and the PHP version.
>
> **[2:48](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=168)** Once we create this file, all we will need to do on Netlify, is link to the GitHub repository.
>
> **[2:53](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=173)** Make sure that the correct branch is selected by default and click deploy.
>
> **[2:57](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=177)** No need to fill out anything else because Netlify will read this Netlify.toml file and use it to deploy our project.
>
> **[3:03](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=183)** There is a lot more you can set up on Netlify, to make sure your project is just the way you want it.
>
> **[3:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=188)** I'm not going to go into any more details, but what you know right now is enough to get you started.
>
> **[3:14](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=194)** Next time you want to add content to your website, run the local version, add your new content, or make changes to your style.
>
> **[3:21](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=201)** commit and push the changes to GitHub.
>
> **[3:24](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=204)** Netlify will trigger the deployment automatically.
>
> **[3:26](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/deploying-jigsaw-website-to-netlify?u=76281980&t=206)** Your new content will be online in no time.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), git (2), npm (2), php (2), find (1)
> **UI Navigation:** click on (7), select the (1), go to (1)
> **Code Keywords:** let (3), interface (1), case, (1)
> **Env Vars:** php (2), url (1), dns (1)
> **Tools:** github (4)
> **Prerequisites:** set up (3), configure (1)
> **File Paths:** netlify.toml (3)
> **Code Identifiers:** build_production (2), build_staging (1)

#### Challenge: Deploying a Jigsaw project to Netlify
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-deploying-a-jigsaw-project-to-netlify?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-deploying-a-jigsaw-project-to-netlify?u=76281980&t=0)** - [Instructor] Welcome to the last challenge of this course.
>
> **[0:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-deploying-a-jigsaw-project-to-netlify?u=76281980&t=8)** In this challenge, you're going to get to test your knowledge of how to deploy Jigsaw site to Netlify.
>
> **[0:13](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-deploying-a-jigsaw-project-to-netlify?u=76281980&t=13)** Take the project from the last challenge, initialize it with git, upload the project files to a brand new repository on GitHub and deploy it to Netlify.
>
> **[0:22](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-deploying-a-jigsaw-project-to-netlify?u=76281980&t=22)** It's up to you if you choose to add the build's details via Netlify's UI over the netlify.toml file.
>
> **[0:29](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-deploying-a-jigsaw-project-to-netlify?u=76281980&t=29)** Once you can view the site in the browser, go back to your local version and add some new content.
>
> **[0:34](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-deploying-a-jigsaw-project-to-netlify?u=76281980&t=34)** You can either create a new page or change some content in an existing page.
>
> **[0:38](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-deploying-a-jigsaw-project-to-netlify?u=76281980&t=38)** It's up to you.
>
> **[0:39](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-deploying-a-jigsaw-project-to-netlify?u=76281980&t=39)** Upload the changes to GitHub and see if Netlify deploys them automatically.
>
> **[0:44](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-deploying-a-jigsaw-project-to-netlify?u=76281980&t=44)** If yes, fantastic.
>
> **[0:46](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-deploying-a-jigsaw-project-to-netlify?u=76281980&t=46)** You have successfully learned how to create a jigsaw site, add content, push the project files to GitHub and set up Netlify to deploy your website.
>
> **[0:54](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-deploying-a-jigsaw-project-to-netlify?u=76281980&t=54)** And if you struggle, don't worry.
>
> **[0:56](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/challenge-deploying-a-jigsaw-project-to-netlify?u=76281980&t=56)** Just follow along with my solution in the next video.

> [!info]- Semantic Content
>
> **Tools:** github (3)
> **Cross-References:** go back to (1), in the next (1)
> **File Paths:** netlify.toml (1)
> **CLI Commands:** git (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Deploying a Jigsaw project to Netlify
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=0)** (upbeat invigorating music)
>
> **[0:05](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=5)** - [Instructor] How did it go?
>
> **[0:06](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=6)** Did you manage to deploy your website?
>
> **[0:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=8)** This is how I did it.
>
> **[0:10](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=10)** In the terminal I make sure I'm in the right hello-jisaw directory.
>
> **[0:14](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=14)** First, I'll create a netlify.toml file by running "touch netlify.toml" command in the terminal.
>
> **[0:21](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=21)** I'll open the project in text editor and paste the build commands from my previous project into this newly created file.
>
> **[0:27](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=27)** These comments never change, so copy and paste them, and it's quite safe.
>
> **[0:32](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=32)** Now I'm going to run "git init" to initialize Git.
>
> **[0:35](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=35)** Then, I'll run "git add ." to add all the files and "git commit -m 'ready to deploy'" to commit everything.
>
> **[0:43](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=43)** Next, I'm going to go to my GitHub account and create a new repository.
>
> **[0:47](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=47)** I'll call it "hello-jigsaw" and set it to private.
>
> **[0:52](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=52)** I'm going to return back to the terminal and finish setting up the Git credentials.
>
> **[1:03](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=63)** Now that the code has been pushed to Github, I'm going to go to my Netlify dashboard and click on "New site from Git," search for my repo and edit.
>
> **[1:16](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=76)** I don't need to add anything to Netlify UI, and just click deploy.
>
> **[1:20](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=80)** In fact, as you can see, Netlify has already added the right commands for me.
>
> **[1:30](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=90)** Wait a minute or so, and my website will be live.
>
> **[1:37](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=97)** And here it is! Fantastic.
>
> **[1:40](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=100)** Okay, let's add some new content to my project.
>
> **[1:43](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=103)** I'm going to add some fresh content to the about page.
>
> **[1:49](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=109)** Let's make sure that the new content is there by visiting it in the browser.
>
> **[1:54](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=114)** Now, let the project update to the live version of the site, too.
>
> **[1:58](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=118)** Save the changes and the terminal, I'll run "git commit -m 'Update About page'" and "git push origin main."
>
> **[2:08](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=128)** To see that everything's working, I'm going to check the Netlify dashboard again.
>
> **[2:13](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=133)** Here you can see that the new deployment is already started, and the changes are live.
>
> **[2:20](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=140)** I'm going to check the live version in the browser again, to make sure that the new content is there.
>
> **[2:27](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=147)** And yes, it is.
>
> **[2:29](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=149)** Well done for completing this challenge.
>
> **[2:31](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=151)** You have learnt so much in this course, feel proud of yourself.
>
> **[2:34](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/solution-deploying-a-jigsaw-project-to-netlify?u=76281980&t=154)** I certainly feel proud of you, amazing job.

> [!info]- Semantic Content
>
> **CLI Commands:** git (8), make (3)
> **Tools:** terminal (4), github (2)
> **Code Keywords:** let (3), private (1)
> **UI Navigation:** go to (2), open the (1), click on (1)
> **File Paths:** netlify.toml (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat invigorating music) (1)


### 5. Conclusion

#### Where to go from here
> [LinkedIn Learning](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/where-to-go-from-here?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=0)** - [Zuzana] This brings us to the end of this course.
>
> **[0:02](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=2)** By completing this course, you now have a foundation understanding of what Jigsaw is, how to use it, and how to deploy it to Netlify.
>
> **[0:10](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=10)** This is a great starting point, but there is so much more you can do with Jigsaw.
>
> **[0:15](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=15)** Other than building a simple website, you could connect Jigsaw to headless CMS.
>
> **[0:19](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=19)** You could also build a custom template and share it with people and packages, and you can even build a custom plugin.
>
> **[0:25](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=25)** I recommend visiting their official documentation to dive deeper into some advanced Jigsaw functionality.
>
> **[0:31](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=31)** And that's all from me.
>
> **[0:33](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=33)** You can connect with me on Twitter, or you can fall Larabelles, the community for women, non-binary and trans Laravel developers, either on Twitter or on LinkedIn.
>
> **[0:42](https://www.linkedin.com/learning/essential-jigsaw-for-php-and-laravel-developers/where-to-go-from-here?u=76281980&t=42)** Thank you for watching and have fun building websites which Jigsaw.

> [!info]- Semantic Content
>
> **Env Vars:** cms (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [zuzana] (1)


## Instructor

- [[Zuzana Kunckova]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/essential-jigsaw-laravel-3155793)

## Skills Covered

- Jigsaw
- Laravel
- PHP

## Path Context

### In [[Build Your Laravel Skills]]
← [[Building GraphQL Applications in Laravel]] | **5 of 7** | [[Essential Statamic for PHP and Laravel Developers]] →

## Appears In

- [[Build Your Laravel Skills]]

## Related Courses

_Courses sharing skills:_

- [[Essential Statamic for PHP and Laravel Developers]] — PHP, Laravel
- [[Winter CMS with Laravel]] — Laravel
- [[Building GraphQL Applications in Laravel]] — Laravel
- [[Building RESTful APIs in Laravel]] — Laravel
- [[Advanced Laravel]] — Laravel

---

[↑ Back to top](#)